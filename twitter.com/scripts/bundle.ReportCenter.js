;(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    '+hxm': function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        t,
        i,
        r,
        s,
        o,
        u,
        c,
        d,
        m,
        y,
        g,
        p,
        k,
        _,
        b,
        f,
        h = {
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
                                  (o = {
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
                          (u = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                  o,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'report_entities_results',
                                    plural: !0,
                                    selections: [
                                      u,
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
                                              u,
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
                                                                  u,
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
                                                                          (y = {
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
                                                                      (g = {
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
                                                      g,
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
                                                      u,
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
                                                                      u,
                                                                      {
                                                                        kind: 'TypeDiscriminator',
                                                                        abstractKey: '__isTimelineReferenceObject',
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: (b = [_]),
                                                                        type: 'TimelineRichTextCashtag',
                                                                        abstractKey: null,
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: [
                                                                          p,
                                                                          (f = {
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
                                                                        selections: b,
                                                                        type: 'TimelineRichTextHashtag',
                                                                        abstractKey: null,
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: [
                                                                          f,
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
                                              u,
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
                                                      y,
                                                      d,
                                                      m,
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  g,
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
      ;(h.hash = '693703bbfa133fb16b00c3592d68e184'), (l.default = h)
    },
    '2MR/': function (e, l, n) {
      'use strict'
      var a = n('ddV6'),
        t = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        s = n('3XMw'),
        o = n.n(s),
        u = n('v302'),
        c = o.a.b05a39b2,
        d = o.a.c566d3a5,
        m = function (e) {
          return r.a.createElement(u.a, e)
        },
        y = function (e) {
          var l = e.children,
            n = e.hideLabel,
            a = void 0 === n ? d : n,
            i = e.label,
            s = e.lang,
            o = e.render,
            u = void 0 === o ? m : o,
            y = e.revealLabel,
            g = void 0 === y ? c : y,
            p = r.a.useState(!1),
            k = t()(p, 2),
            _ = k[0],
            b = k[1]
          return u({
            actionText: _ ? a : g,
            children: _ ? l : i,
            lang: s,
            onActionClick: function () {
              return b(!_)
            },
          })
        }
      ;(y.displayName = 'TweetDisclosure'), (l.a = y)
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
        o,
        u,
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
                                                      selections: (o = [s]),
                                                      type: 'TimelineRichTextCashtag',
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: 'InlineFragment',
                                                      selections: [
                                                        r,
                                                        (u = {
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
                                                      selections: o,
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
                                                            u,
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
    'IMA+': function (e, l, n) {
      'use strict'
      var a = n('97Jx'),
        t = n.n(a),
        i = n('VrFO'),
        r = n.n(i),
        s = n('Y9Ll'),
        o = n.n(s),
        u = n('1Pcy'),
        c = n.n(u),
        d = n('5Yy7'),
        m = n.n(d),
        y = n('2VqO'),
        g = n.n(y),
        p = n('KEM+'),
        k = n.n(p),
        _ = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        b = n('ERkP'),
        f = n.n(b),
        h = n('TIdA'),
        F = n('t62R'),
        T = n('5mJL'),
        K = n('DNho'),
        v = n('nBUg'),
        S = n('qjak'),
        w = n('ir4X'),
        x = n('htQn'),
        C = n('e5HP'),
        E = n('FBXD'),
        R = n('Nqmc'),
        L = n('rHpw'),
        I = n('jhWN'),
        U = n('1I0O'),
        D = n('pBrB'),
        z = n('jV+4'),
        B = n('MWbm'),
        j = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        H = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        O = h.a.createLayoutCache(),
        M = { viewType: 'user_cell' },
        N = (function (e) {
          m()(n, e)
          var l = g()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, t = new Array(a), i = 0; i < a; i++) t[i] = arguments[i]
            return (
              (e = l.call.apply(l, [this].concat(t))),
              k()(c()(e), '_renderUserName', function () {
                var l = e.props,
                  n = l.badgeContext,
                  a = l.disabledMessage,
                  t = l.displayNameLabel,
                  i = l.isBlocking,
                  r = l.isDisabled,
                  s = l.isFollowedBy,
                  o = l.isProtected,
                  u = l.isVerified,
                  c = l.name,
                  d = l.onScreenNameClick,
                  m = l.promotedContent,
                  y = l.promotedItemType,
                  g = l.screenName,
                  p = l.screenNameSuffix,
                  k = l.translatorType,
                  _ = l.withFollowsYou,
                  b = l.withLink,
                  h = f.a.createElement(z.a, {
                    badgeContext: n,
                    displayNameLabel: t,
                    isProtected: o,
                    isVerified: u,
                    name: c,
                    onLinkClick: d,
                    promotedContent: y === j.TWEET ? m : void 0,
                    screenName: g,
                    screenNameSuffix: p,
                    translatorType: k,
                    withFollowsYou: _ && s,
                    withHoverCard: !i && !r && b,
                    withLink: !r && b,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? f.a.createElement(
                      B.a,
                      { style: P.disabledMessageContainer },
                      h,
                      f.a.createElement(F.b, { color: 'gray700' }, a),
                    )
                  : h
              }),
              k()(c()(e), '_renderSocialContext', function () {
                var l = e.props,
                  n = l.avatarSize,
                  a = l.displayMode,
                  t = l.socialContext
                return t
                  ? f.a.createElement(v.b.UseProps, null, function (e) {
                      return f.a.createElement(R.a, {
                        avatarSize: n,
                        contextType: t.contextType,
                        iconSize: 'large',
                        link: t.link,
                        style: P.socialContext,
                        text: t.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== H.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              k()(c()(e), '_renderUserTypeaheadSocialContext', function () {
                var l = e.props.socialContext,
                  n =
                    (l && Object(S.a)({ link: l.link, text: l.text, iconSize: 'small', contextType: l.contextType })) ||
                    {},
                  a = n.Icon,
                  t = n.text
                return l
                  ? f.a.createElement(
                      B.a,
                      { style: P.userTypeaheadSocialContext },
                      f.a.createElement(B.a, { style: P.userTypeaheadSocialContextIcon }, a),
                      f.a.createElement(
                        F.b,
                        { color: 'gray700', numberOfLines: 1, style: P.userTypeaheadSocialContextText },
                        t,
                      ),
                    )
                  : null
              }),
              k()(c()(e), '_renderHighlightedUserLabel', function () {
                var l = e.props.highlightedLabel
                return l ? f.a.createElement(w.a, { label: l }) : null
              }),
              k()(c()(e), '_isEligibleForBio', function () {
                var l = e.props.displayMode
                return -1 !== [H.UserDetailed, H.UserConcise].indexOf(l)
              }),
              k()(c()(e), '_handleKeyPress', function (l) {
                l.defaultPrevented || 'Enter' !== l.key || e._handleClick(l)
              }),
              k()(
                c()(e),
                '_handleClick',
                Object(E.a)(function (l) {
                  var n = e.props.onCellClick
                  l.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    l = e.accessibilityLabel,
                    n = e.accessibilityState,
                    a = e.avatarDecoration,
                    i = e.avatarSize,
                    r = e.avatarUri,
                    s = e.bottomControl,
                    o = e.decoration,
                    u = e.displayMode,
                    c = e.isBlocking,
                    d = e.isDisabled,
                    m = e.onAvatarClick,
                    y = e.onCellClick,
                    g = e.onScreenNameClick,
                    p = e.presenceIndicator,
                    k = e.promotedContent,
                    b = e.promotedItemType,
                    h = e.screenName,
                    F = e.style,
                    v = e.testID,
                    S = e.userId,
                    w = e.withDarkerInteractiveBackground,
                    E = e.withInteractiveStyling,
                    R = e.withLink,
                    L = e.withUsernameCenterAligned,
                    D = R && !c,
                    z = u === H.UserCompact || L,
                    N = u === H.ExperimentalUserTypeahead,
                    V =
                      k && b === j.USER && 'earned' !== (k.disclosure_type && k.disclosure_type.toLowerCase())
                        ? f.a.createElement(C.a, { contentAuthorId: S, promotedContent: k, style: P.promotedIndicator })
                        : null,
                    A = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: O,
                      onClick: m,
                      onHoverCardScreenNameClick: g,
                      promotedContent: k,
                      screenName: h,
                      style: P.avatar,
                      uri: r,
                      withHoverCard: D,
                      withLink: R,
                    },
                    W = f.a.createElement(K.a.Consumer, null, function (e) {
                      var l = e.avatarSize
                      return p
                        ? f.a.createElement(U.a, t()({}, A, p, { size: l }))
                        : f.a.createElement(I.a, t()({ size: l }, A))
                    }),
                    q = n && 'boolean' == typeof n.checked,
                    G = void 0 !== y,
                    J = (q ? 'radio' : G && 'button') || 'listitem',
                    Q = this._renderUserName(),
                    X = this._renderHighlightedUserLabel(),
                    Y = this._renderBio(),
                    Z = X || Y || V || s,
                    $ = f.a.createElement(
                      f.a.Fragment,
                      null,
                      X,
                      Y,
                      V,
                      s ? f.a.createElement(B.a, { style: P.bottomControl }, s) : null,
                    )
                  return f.a.createElement(
                    _.a,
                    { behavioralEventContext: M },
                    f.a.createElement(
                      x.a,
                      {
                        accessibilityLabel: l,
                        accessibilityRole: J,
                        accessibilityState: n,
                        disabled: !!d,
                        focusable: q || G,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [P.root, F],
                        testID: v,
                        withDarkerInteractiveBackground: w,
                        withInteractiveStyling: null != E ? E : !!y,
                      },
                      N ? null : this._renderSocialContext(),
                      f.a.createElement(
                        T.a,
                        {
                          avatarCell: W,
                          avatarCellStyle: [P.avatarColumn, z && P.bodyColumnCentered],
                          avatarSize: N ? 'xxxLarge' : i,
                          cellStyle: [P.bodyColumn, z && P.bodyColumnCentered],
                        },
                        f.a.createElement(B.a, { style: P.body }, Q, o),
                        z ? null : $,
                        N ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && z
                        ? f.a.createElement(
                            T.a,
                            { avatarCell: null, avatarCellStyle: P.avatarColumn, cellStyle: P.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    l = e.description,
                    n = e.displayMode,
                    a = e.entities,
                    t = e.userId,
                    i = e.withheldDescription,
                    r = e.withheldEntities
                  return a && l && this._isEligibleForBio()
                    ? f.a.createElement(D.a, {
                        description: l,
                        entities: a,
                        isConcise: n === H.UserConcise,
                        style: P.bio,
                        userId: t,
                        withheldDescription: i,
                        withheldEntities: r,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
      k()(N, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var P = L.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      l.a = N
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
        o = n('ERkP'),
        u = n.n(o),
        c = n('lnti'),
        d = n('jHSc'),
        m = (n('enFi'), n('3XMw')),
        y = n.n(m),
        g = n('Fr3L'),
        p = n.p + 'report-detail-ear.0518acc5.png',
        k = (n('z84I'), n('yiKp')),
        _ = n.n(k),
        b = n('97Jx'),
        f = n.n(b),
        h = (n('1t7P'), n('jQ/y'), n('ho0z'), n('uFXj'), n('axvi')),
        F = n('MWbm'),
        T = n('jAXQ'),
        K = n.n(T),
        v = n('7N4s'),
        S = n('2MR/'),
        w = n('v302'),
        x = n('WLAg'),
        C = n('tLTi'),
        E = n('r7g+'),
        R = n('rHpw'),
        L = y.a.a098fa3c,
        I = {
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
        U = {
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
            o,
            c,
            d = e.tweet_results,
            m = K()(void 0 !== a ? a : (a = n('Gi4s')), d),
            y = u.a.useContext(v.b).isModal,
            g = null == m || null === (l = m.result) || void 0 === l ? void 0 : l.__typename,
            p =
              'TweetWithVisibilityResults' === g
                ? null === (t = m.result) || void 0 === t
                  ? void 0
                  : t.tweet
                : m.result,
            k = null == p || null === (i = p.legacy) || void 0 === i ? void 0 : i.full_text,
            b = u.a.useCallback(
              function () {
                return u.a.createElement(
                  S.a,
                  {
                    label: L,
                    render: function (e) {
                      return u.a.createElement(w.a, f()({}, e, { style: B.tombstone }))
                    },
                  },
                  k || '',
                )
              },
              [k],
            ),
            T = u.a.useMemo(
              function () {
                if ('TweetTombstone' === g) {
                  var e,
                    l,
                    n =
                      null === (e = m.result) || void 0 === e || null === (l = e.tombstone) || void 0 === l
                        ? void 0
                        : l.text
                  if (n) return Object(h.b)(n)
                }
              },
              [
                null === (r = m.result) || void 0 === r || null === (s = r.tombstone) || void 0 === s ? void 0 : s.text,
                g,
              ],
            )
          if (
            'TweetTombstone' === g &&
            (null === (o = m.result) || void 0 === o || null === (c = o.tombstone) || void 0 === c ? void 0 : c.text)
          )
            return T
              ? u.a.createElement(
                  x.a,
                  null,
                  u.a.createElement(C.a, { align: T.rtl ? 'right' : 'left', entities: T.entities, text: T.text }),
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
                    _()({}, I),
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
                        _()({}, U),
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
              return u.a.createElement(
                F.a,
                { style: [B.tweet, y && B.wideScreen] },
                u.a.createElement(
                  E.a,
                  f()({}, t, {
                    renderActionsBar: function () {
                      return null
                    },
                    renderTimestamp: function (e) {
                      return u.a.createElement(E.a.Timestamp, f()({}, e, { link: void 0 }))
                    },
                    renderTombstone: b,
                    staticLinkConfig: null,
                  }),
                ),
              )
            }
            return null
          })(p)
        },
        z = u.a.memo(D),
        B = R.a.create(function (e) {
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
        j = n('IMA+'),
        H = function (e) {
          var l,
            a = e.userResults,
            i = K()(void 0 !== t ? t : (t = n('r/Jf')), a),
            r = u.a.useContext(v.b).isModal,
            s = null == i || null === (l = i.result) || void 0 === l ? void 0 : l.legacy,
            o = (null == s ? void 0 : s.idStr) || '',
            c = (null == s ? void 0 : s.description) || '',
            d = (null == s ? void 0 : s.name) || '',
            m = (null == s ? void 0 : s.profile_image_url_https) || '',
            y = (null == s ? void 0 : s.screen_name) || ''
          return o
            ? u.a.createElement(
                F.a,
                { style: [O.userCellContainer, r && O.wideScreen] },
                u.a.createElement(j.a, {
                  avatarUri: m,
                  description: c,
                  displayMode: 'UserDetailed',
                  entities: {},
                  name: d,
                  screenName: y,
                  userId: o,
                }),
              )
            : null
        },
        O = R.a.create(function (e) {
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
        M = function (e) {
          var l = e.report_entity_results,
            a = K()(void 0 !== i ? i : (i = n('xYG4')), l)
          switch (a.__typename) {
            case 'TweetResults':
              return u.a.createElement(z, { tweet_results: a })
            case 'UserResults':
              return u.a.createElement(H, { userResults: a })
            default:
              return null
          }
        },
        N = function (e) {
          var l = e.report,
            a = K()(void 0 !== r ? r : (r = n('6mUz')), l)
          return u.a.createElement(
            F.a,
            { style: P.entityList },
            a.map(function (e, l) {
              return u.a.createElement(M, { key: l, report_entity_results: e })
            }),
          )
        },
        P = R.a.create(function (e) {
          return { entityList: { marginVertical: e.spaces.space32 } }
        }),
        V = n('IAZG'),
        A = n('Irs7'),
        W = n('pjBI'),
        q = n('t62R'),
        G = n('3rX5'),
        J = n('zCf4'),
        Q = y.a.e37836f8,
        X = y.a.ccf2f24e,
        Y = y.a.e238c59f,
        Z = 'gray700',
        $ = void 0 !== s ? s : (s = n('+hxm')),
        ee = function () {
          var e,
            l,
            n,
            a,
            t,
            i,
            r = Object(J.h)(),
            s = Object(V.a)($, { reportId: r.reportId || '' }),
            o =
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
              null != o && o.create_time
                ? ((a = null == o ? void 0 : o.create_time), (t = y.a.ba2e82a1), (i = parseInt(a, 10)), t(new Date(i)))
                : '',
            m = null == o ? void 0 : o.header,
            g = null == o ? void 0 : o.follow_up_text,
            p = null == o ? void 0 : o.report_entities_results
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              W.a,
              { color: Z },
              u.a.createElement(q.b, { color: Z, weight: 'bold' }, X),
              u.a.createElement(q.b, { color: Z }, d),
            ),
            u.a.createElement(q.b, { size: 'title3', weight: 'heavy' }, m),
            p ? u.a.createElement(N, { report: Object(c.a)(p) }) : null,
            u.a.createElement(q.b, { size: 'headline2', style: le.headline, weight: 'heavy' }, Y),
            u.a.createElement(q.b, { color: Z, size: 'subtext2', weight: 'normal' }, g),
          )
        },
        le =
          ((l.default = Object(A.a)(
            function () {
              var e = Object(J.f)(),
                l = u.a.useContext(v.b).isModal
              return u.a.createElement(
                d.b,
                { backButtonType: 'close', containerStyle: le.root, documentTitle: Q, history: e, title: Q },
                u.a.createElement(
                  F.a,
                  { style: le.parentContainer },
                  u.a.createElement(
                    F.a,
                    { style: le.contentHeader },
                    u.a.createElement(
                      F.a,
                      { style: le.imageContainer },
                      u.a.createElement(G.a, { accessibilityLabel: '', source: p, style: le.image }),
                    ),
                  ),
                  u.a.createElement(
                    F.a,
                    { style: [le.contentBody, l ? le.wideScreen : le.narrowScreen] },
                    u.a.createElement(g.a, { errorConfig: { context: 'REPORT_DETAIL' } }, u.a.createElement(ee, null)),
                  ),
                ),
              )
            },
            { page: 'report_center', component: 'report_detail' },
          )),
          R.a.create(function (e) {
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
                marginBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(R.a.iPhoneOffsetBottom, ')'),
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
