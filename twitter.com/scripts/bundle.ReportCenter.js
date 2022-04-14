;(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    '+hxm': function (e, l, n) {
      'use strict'
      var a,
        t,
        r,
        i,
        s,
        o,
        u,
        c,
        d,
        m,
        g,
        p,
        y,
        k,
        _,
        F,
        b,
        f,
        T = {
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
                                args: r,
                                concreteType: 'ReportDetail',
                                kind: 'LinkedField',
                                name: 'submitted_report',
                                plural: !1,
                                selections: [
                                  i,
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
                                                              (k = {
                                                                alias: null,
                                                                args: null,
                                                                filters: null,
                                                                handle: 'user',
                                                                key: '',
                                                                kind: 'LinkedHandle',
                                                                name: 'result',
                                                              }),
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
                                                              (F = {
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
                                                                        selections: (b = [F]),
                                                                        type: 'TimelineRichTextCashtag',
                                                                        abstractKey: null,
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: [
                                                                          y,
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
                                                                                  y,
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
                                          k,
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
                      k,
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
      ;(T.hash = '693703bbfa133fb16b00c3592d68e184'), (e.exports = T)
    },
    '1zgV': function (e, l, n) {
      'use strict'
      var a,
        t,
        r,
        i,
        s,
        o,
        u,
        c,
        d,
        m,
        g,
        p,
        y,
        k,
        _,
        F,
        b,
        f,
        T,
        K,
        h = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'reportId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ReportOutcomeQuery',
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
                                args: (r = [
                                  { kind: 'Variable', name: 'report_notification_id', variableName: 'reportId' },
                                ]),
                                concreteType: 'ReviewedReportDetail',
                                kind: 'LinkedField',
                                name: 'reviewed_report',
                                plural: !1,
                                selections: [
                                  (i = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'header',
                                    storageKey: null,
                                  }),
                                  (s = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'outcome_text',
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
                                  (o = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'report_outcome',
                                    storageKey: null,
                                  }),
                                  (u = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'rule_link',
                                    storageKey: null,
                                  }),
                                  (c = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'update_time',
                                    storageKey: null,
                                  }),
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
            name: 'ReportOutcomeQuery',
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
                          (d = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: r,
                                concreteType: 'ReviewedReportDetail',
                                kind: 'LinkedField',
                                name: 'reviewed_report',
                                plural: !1,
                                selections: [
                                  i,
                                  s,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'report_entities_results',
                                    plural: !0,
                                    selections: [
                                      d,
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
                                              d,
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
                                                    selections: (b = [
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
                                                                  d,
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
                                                                          (m = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'description',
                                                                            storageKey: null,
                                                                          }),
                                                                          (g = {
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
                                                                          (p = {
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
                                                                      (k = {
                                                                        alias: null,
                                                                        args: null,
                                                                        filters: null,
                                                                        handle: 'defaultScalars',
                                                                        key: '',
                                                                        kind: 'LinkedHandle',
                                                                        name: 'legacy',
                                                                      }),
                                                                      (_ = {
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
                                                              (F = {
                                                                alias: null,
                                                                args: null,
                                                                filters: null,
                                                                handle: 'user',
                                                                key: '',
                                                                kind: 'LinkedHandle',
                                                                name: 'result',
                                                              }),
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
                                                      k,
                                                      _,
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: 'TweetWithVisibilityResults',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: b,
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
                                                      d,
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
                                                              (f = {
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
                                                                      d,
                                                                      {
                                                                        kind: 'TypeDiscriminator',
                                                                        abstractKey: '__isTimelineReferenceObject',
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: (T = [f]),
                                                                        type: 'TimelineRichTextCashtag',
                                                                        abstractKey: null,
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: [
                                                                          _,
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
                                                                        selections: T,
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
                                                                                  _,
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
                                              d,
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
                                                      m,
                                                      {
                                                        alias: 'idStr',
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'id_str',
                                                        storageKey: null,
                                                      },
                                                      y,
                                                      g,
                                                      p,
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  k,
                                                  _,
                                                ],
                                                type: 'User',
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          F,
                                        ],
                                        type: 'UserResults',
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  o,
                                  u,
                                  c,
                                ],
                                storageKey: null,
                              },
                              _,
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      F,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:32)',
              },
            ],
          },
          params: {
            id: 't7moE6Bse9SvR7a0jPHUeQ',
            metadata: {},
            name: 'ReportOutcomeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(h.hash = '6a81c3d8a3d11472a2e5501503a9d6f5'), (e.exports = h)
    },
    '2MR/': function (e, l, n) {
      'use strict'
      var a = n('ddV6'),
        t = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        s = n('3XMw'),
        o = n.n(s),
        u = n('v302'),
        c = o.a.b05a39b2,
        d = o.a.c566d3a5,
        m = function (e) {
          return i.a.createElement(u.a, e)
        },
        g = function (e) {
          var l = e.children,
            n = e.hideLabel,
            a = void 0 === n ? d : n,
            r = e.label,
            s = e.lang,
            o = e.render,
            u = void 0 === o ? m : o,
            g = e.revealLabel,
            p = void 0 === g ? c : g,
            y = i.a.useState(!1),
            k = t()(y, 2),
            _ = k[0],
            F = k[1]
          return u({
            actionText: _ ? a : p,
            children: _ ? l : r,
            lang: s,
            onActionClick: function () {
              return F(!_)
            },
          })
        }
      ;(g.displayName = 'TweetDisclosure'), (l.a = g)
    },
    '5gp/': function (e, l, n) {
      'use strict'
      n('z84I')
      var a,
        t,
        r,
        i,
        s = n('ERkP'),
        o = n.n(s),
        u = n('yiKp'),
        c = n.n(u),
        d = n('97Jx'),
        m = n.n(d),
        g = (n('1t7P'), n('jQ/y'), n('ho0z'), n('uFXj'), n('axvi')),
        p = n('3XMw'),
        y = n.n(p),
        k = n('aITJ'),
        _ = n('MWbm'),
        F = (n('YWiL'), n('CVPS')),
        b = n.n(F),
        f = n('7N4s'),
        T = n('r7g+'),
        K = n('2MR/'),
        h = n('v302'),
        v = n('WLAg'),
        S = n('tLTi'),
        w = n('rHpw'),
        x = y.a.a098fa3c,
        R = {
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
        L = {
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
        E = function (e) {
          var l,
            t,
            r,
            i,
            s,
            u,
            d,
            p = e.tweet_results,
            y = b()(void 0 !== a ? a : (a = n('Gi4s')), p),
            F = o.a.useContext(f.b).isModal,
            w = null == y || null === (l = y.result) || void 0 === l ? void 0 : l.__typename,
            E =
              'TweetWithVisibilityResults' === w
                ? null === (t = y.result) || void 0 === t
                  ? void 0
                  : t.tweet
                : y.result,
            C = null == E || null === (r = E.legacy) || void 0 === r ? void 0 : r.full_text,
            U = k.b.isTwitterApp(),
            D = o.a.useCallback(
              function (e) {
                return o.a.createElement(T.a.UserAvatar, m()({}, e, { withHoverCard: !U, withLink: !U }))
              },
              [U],
            ),
            H = o.a.useCallback(
              function () {
                return o.a.createElement(
                  K.a,
                  {
                    label: x,
                    render: function (e) {
                      return o.a.createElement(h.a, m()({}, e, { style: I.tombstone }))
                    },
                  },
                  C || '',
                )
              },
              [C],
            ),
            O = o.a.useMemo(
              function () {
                if ('TweetTombstone' === w) {
                  var e,
                    l,
                    n =
                      null === (e = y.result) || void 0 === e || null === (l = e.tombstone) || void 0 === l
                        ? void 0
                        : l.text
                  if (n) return Object(g.b)(n)
                }
              },
              [
                null === (i = y.result) || void 0 === i || null === (s = i.tombstone) || void 0 === s ? void 0 : s.text,
                w,
              ],
            )
          if (
            'TweetTombstone' === w &&
            (null === (u = y.result) || void 0 === u || null === (d = u.tombstone) || void 0 === d ? void 0 : d.text)
          )
            return O
              ? o.a.createElement(
                  v.a,
                  null,
                  o.a.createElement(S.a, { align: O.rtl ? 'right' : 'left', entities: O.entities, text: O.text }),
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
                  tweet: c()(
                    c()({}, R),
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
                      user: c()(
                        c()({}, L),
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
                _.a,
                { style: [I.tweet, F && I.wideScreen] },
                o.a.createElement(
                  T.a,
                  m()({}, t, {
                    renderActionsBar: function () {
                      return null
                    },
                    renderTimestamp: function (e) {
                      return o.a.createElement(T.a.Timestamp, m()({}, e, { link: void 0 }))
                    },
                    renderTombstone: H,
                    renderUserAvatar: D,
                    staticLinkConfig: null,
                  }),
                ),
              )
            }
            return null
          })(E)
        },
        C = o.a.memo(E),
        I = w.a.create(function (e) {
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
        U = n('IMA+'),
        D = function (e) {
          var l,
            a = e.userResults,
            r = b()(void 0 !== t ? t : (t = n('r/Jf')), a),
            i = o.a.useContext(f.b).isModal,
            s = null == r || null === (l = r.result) || void 0 === l ? void 0 : l.legacy,
            u = (null == s ? void 0 : s.idStr) || '',
            c = (null == s ? void 0 : s.description) || '',
            d = (null == s ? void 0 : s.name) || '',
            m = (null == s ? void 0 : s.profile_image_url_https) || '',
            g = (null == s ? void 0 : s.screen_name) || ''
          return u
            ? o.a.createElement(
                _.a,
                { style: [H.userCellContainer, i && H.wideScreen] },
                o.a.createElement(U.a, {
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
        H = w.a.create(function (e) {
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
        O = function (e) {
          var l = e.report_entity_results,
            a = b()(void 0 !== r ? r : (r = n('xYG4')), l)
          switch (a.__typename) {
            case 'TweetResults':
              return o.a.createElement(C, { tweet_results: a })
            case 'UserResults':
              return o.a.createElement(D, { userResults: a })
            default:
              return null
          }
        },
        z =
          ((l.a = function (e) {
            var l = e.report,
              a = b()(void 0 !== i ? i : (i = n('6mUz')), l)
            return o.a.createElement(
              _.a,
              { style: z.entityList },
              a.map(function (e, l) {
                return o.a.createElement(O, { key: l, report_entity_results: e })
              }),
            )
          }),
          w.a.create(function (e) {
            return { entityList: { marginVertical: e.spaces.space20 } }
          }))
    },
    '6mUz': function (e, l, n) {
      'use strict'
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
      e.exports = a
    },
    Gi4s: function (e, l, n) {
      'use strict'
      var a,
        t,
        r,
        i,
        s,
        o,
        u,
        c,
        d,
        m,
        g,
        p,
        y = {
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
                                    {
                                      kind: 'InlineFragment',
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
                                              (t = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'description',
                                                storageKey: null,
                                              }),
                                              (r = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'profile_image_url_https',
                                                storageKey: null,
                                              }),
                                              {
                                                kind: 'RequiredField',
                                                field: (i = {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'protected',
                                                  storageKey: null,
                                                }),
                                                action: 'THROW',
                                                path: 'result.tweet.core.user_results.result.legacy.protected',
                                              },
                                              (s = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'screen_name',
                                                storageKey: null,
                                              }),
                                              (o = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'name',
                                                storageKey: null,
                                              }),
                                              {
                                                kind: 'RequiredField',
                                                field: (u = {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'verified',
                                                  storageKey: null,
                                                }),
                                                action: 'THROW',
                                                path: 'result.tweet.core.user_results.result.legacy.verified',
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          action: 'THROW',
                                          path: 'result.tweet.core.user_results.result.legacy',
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
                        },
                        (c = {
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
                        (d = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      ],
                      storageKey: null,
                    },
                  ],
                  type: 'TweetWithVisibilityResults',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: [
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
                                {
                                  kind: 'InlineFragment',
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
                                          t,
                                          r,
                                          {
                                            kind: 'RequiredField',
                                            field: i,
                                            action: 'THROW',
                                            path: 'result.core.user_results.result.legacy.protected',
                                          },
                                          s,
                                          o,
                                          {
                                            kind: 'RequiredField',
                                            field: u,
                                            action: 'THROW',
                                            path: 'result.core.user_results.result.legacy.verified',
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      action: 'THROW',
                                      path: 'result.core.user_results.result.legacy',
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
                    },
                    c,
                  ],
                  type: 'Tweet',
                  abstractKey: null,
                },
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
                                    (m = {
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
                                                      selections: (g = [m]),
                                                      type: 'TimelineRichTextCashtag',
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: 'InlineFragment',
                                                      selections: [
                                                        d,
                                                        (p = {
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
                                                      selections: g,
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
                                                            p,
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
                                                                    d,
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
      ;(y.hash = 'f748b4df0285b0469a6fb31d17cb0d5b'), (e.exports = y)
    },
    'IMA+': function (e, l, n) {
      'use strict'
      var a = n('97Jx'),
        t = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        s = n('Y9Ll'),
        o = n.n(s),
        u = n('1Pcy'),
        c = n.n(u),
        d = n('5Yy7'),
        m = n.n(d),
        g = n('2VqO'),
        p = n.n(g),
        y = n('KEM+'),
        k = n.n(y),
        _ = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        F = n('ERkP'),
        b = n.n(F),
        f = n('TIdA'),
        T = n('t62R'),
        K = n('5mJL'),
        h = n('DNho'),
        v = n('nBUg'),
        S = n('qjak'),
        w = n('ir4X'),
        x = n('htQn'),
        R = n('e5HP'),
        L = n('FBXD'),
        E = n('Nqmc'),
        C = n('rHpw'),
        I = n('oSwX'),
        U = n('1I0O'),
        D = n('pBrB'),
        H = n('jV+4'),
        O = n('MWbm'),
        z = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        B = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        j = f.a.createLayoutCache(),
        V = { viewType: 'user_cell' },
        M = (function (e) {
          m()(n, e)
          var l = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, t = new Array(a), r = 0; r < a; r++) t[r] = arguments[r]
            return (
              (e = l.call.apply(l, [this].concat(t))),
              k()(c()(e), '_renderUserName', function () {
                var l = e.props,
                  n = l.badgeContext,
                  a = l.disabledMessage,
                  t = l.displayNameLabel,
                  r = l.isBlocking,
                  i = l.isDisabled,
                  s = l.isFollowedBy,
                  o = l.isProtected,
                  u = l.isVerified,
                  c = l.name,
                  d = l.onScreenNameClick,
                  m = l.promotedContent,
                  g = l.promotedItemType,
                  p = l.screenName,
                  y = l.screenNameSuffix,
                  k = l.translatorType,
                  _ = l.withFollowsYou,
                  F = l.withLink,
                  f = b.a.createElement(H.a, {
                    badgeContext: n,
                    displayNameLabel: t,
                    isProtected: o,
                    isVerified: u,
                    name: c,
                    onLinkClick: d,
                    promotedContent: g === z.TWEET ? m : void 0,
                    screenName: p,
                    screenNameSuffix: y,
                    translatorType: k,
                    withFollowsYou: _ && s,
                    withHoverCard: !r && !i && F,
                    withLink: !i && F,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? b.a.createElement(
                      O.a,
                      { style: P.disabledMessageContainer },
                      f,
                      b.a.createElement(T.b, { color: 'gray700' }, a),
                    )
                  : f
              }),
              k()(c()(e), '_renderSocialContext', function () {
                var l = e.props,
                  n = l.avatarSize,
                  a = l.displayMode,
                  t = l.socialContext
                return t
                  ? b.a.createElement(v.b.UseProps, null, function (e) {
                      return b.a.createElement(E.a, {
                        avatarSize: n,
                        contextType: t.contextType,
                        iconSize: 'large',
                        link: t.link,
                        style: P.socialContext,
                        text: t.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== B.ExperimentalUserTypeahead,
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
                  ? b.a.createElement(
                      O.a,
                      { style: P.userTypeaheadSocialContext },
                      b.a.createElement(O.a, { style: P.userTypeaheadSocialContextIcon }, a),
                      b.a.createElement(
                        T.b,
                        { color: 'gray700', numberOfLines: 1, style: P.userTypeaheadSocialContextText },
                        t,
                      ),
                    )
                  : null
              }),
              k()(c()(e), '_renderHighlightedUserLabel', function () {
                var l = e.props.highlightedLabel
                return l ? b.a.createElement(w.a, { label: l }) : null
              }),
              k()(c()(e), '_isEligibleForBio', function () {
                var l = e.props.displayMode
                return -1 !== [B.UserDetailed, B.UserConcise].indexOf(l)
              }),
              k()(c()(e), '_handleKeyPress', function (l) {
                l.defaultPrevented || 'Enter' !== l.key || e._handleClick(l)
              }),
              k()(
                c()(e),
                '_handleClick',
                Object(L.a)(function (l) {
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
                    r = e.avatarSize,
                    i = e.avatarUri,
                    s = e.bottomControl,
                    o = e.decoration,
                    u = e.displayMode,
                    c = e.isBlocking,
                    d = e.isDisabled,
                    m = e.onAvatarClick,
                    g = e.onCellClick,
                    p = e.onScreenNameClick,
                    y = e.presenceIndicator,
                    k = e.promotedContent,
                    F = e.promotedItemType,
                    f = e.screenName,
                    T = e.style,
                    v = e.testID,
                    S = e.userId,
                    w = e.withDarkerInteractiveBackground,
                    L = e.withInteractiveStyling,
                    E = e.withLink,
                    C = e.withUsernameCenterAligned,
                    D = E && !c,
                    H = u === B.UserCompact || C,
                    M = u === B.ExperimentalUserTypeahead,
                    W =
                      k && F === z.USER && 'earned' !== (k.disclosure_type && k.disclosure_type.toLowerCase())
                        ? b.a.createElement(R.a, { contentAuthorId: S, promotedContent: k, style: P.promotedIndicator })
                        : null,
                    A = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: j,
                      onClick: m,
                      onHoverCardScreenNameClick: p,
                      promotedContent: k,
                      screenName: f,
                      style: P.avatar,
                      uri: i,
                      withHoverCard: D,
                      withLink: E,
                    },
                    N = b.a.createElement(h.a.Consumer, null, function (e) {
                      var l = e.avatarSize
                      return y
                        ? b.a.createElement(U.a, t()({}, A, y, { size: l }))
                        : b.a.createElement(I.default, t()({ size: l }, A))
                    }),
                    q = n && 'boolean' == typeof n.checked,
                    G = void 0 !== g,
                    Q = (q ? 'radio' : G && 'button') || 'listitem',
                    J = this._renderUserName(),
                    X = this._renderHighlightedUserLabel(),
                    Y = this._renderBio(),
                    Z = X || Y || W || s,
                    $ = b.a.createElement(
                      b.a.Fragment,
                      null,
                      X,
                      Y,
                      W,
                      s ? b.a.createElement(O.a, { style: P.bottomControl }, s) : null,
                    )
                  return b.a.createElement(
                    _.a,
                    { behavioralEventContext: V },
                    b.a.createElement(
                      x.a,
                      {
                        accessibilityLabel: l,
                        accessibilityRole: Q,
                        accessibilityState: n,
                        disabled: !!d,
                        focusable: q || G,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [P.root, T],
                        testID: v,
                        withDarkerInteractiveBackground: w,
                        withInteractiveStyling: null != L ? L : !!g,
                      },
                      M ? null : this._renderSocialContext(),
                      b.a.createElement(
                        K.a,
                        {
                          avatarCell: N,
                          avatarCellStyle: [P.avatarColumn, H && P.bodyColumnCentered],
                          avatarSize: M ? 'xxxLarge' : r,
                          cellStyle: [P.bodyColumn, H && P.bodyColumnCentered],
                        },
                        b.a.createElement(O.a, { style: P.body }, J, o),
                        H ? null : $,
                        M ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && H
                        ? b.a.createElement(
                            K.a,
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
                    r = e.withheldDescription,
                    i = e.withheldEntities
                  return a && l && this._isEligibleForBio()
                    ? b.a.createElement(D.a, {
                        description: l,
                        entities: a,
                        isConcise: n === B.UserConcise,
                        style: P.bio,
                        userId: t,
                        withheldDescription: r,
                        withheldEntities: i,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      k()(M, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var P = C.a.create(function (e) {
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
      l.a = M
    },
    MNPn: function (e, l, n) {
      'use strict'
      n.r(l)
      n('Blm6'), n('2G9S')
      var a,
        t = n('ERkP'),
        r = n.n(t),
        i = n('jHSc'),
        s = (n('YWiL'), n('3XMw')),
        o = n.n(s),
        u = n('lUZE'),
        c = n('Fr3L'),
        d = n('5gp/'),
        m = n('IAZG'),
        g = n('aITJ'),
        p = n('MWbm'),
        y = n('Irs7'),
        k = n('pjBI'),
        _ = n('t62R'),
        F = n('Wms4'),
        b = n('7N4s'),
        f = n('rHpw'),
        T = n('lnti'),
        K = n('0zXz'),
        h = n('zCf4'),
        v = o.a.ccf2f24e,
        S = o.a.fb35e52a,
        w = 'gray700',
        x = o.a.b7ba7129,
        R = o.a.d90b8c04,
        L = void 0 !== a ? a : (a = n('1zgV')),
        E = function () {
          var e,
            l,
            n,
            a = Object(h.h)(),
            t = Object(m.a)(L, { reportId: a.reportId || '' })
          if (!t) return null
          var i,
            s,
            u,
            c =
              null == t ||
              null === (e = t.viewer_v2) ||
              void 0 === e ||
              null === (l = e.user_results) ||
              void 0 === l ||
              null === (n = l.result) ||
              void 0 === n
                ? void 0
                : n.reviewed_report,
            g =
              null != c && c.update_time
                ? ((i = null == c ? void 0 : c.update_time), (s = o.a.ba2e82a1), (u = parseInt(i, 10)), s(new Date(u)))
                : '',
            p = null == c ? void 0 : c.header,
            y = null == c ? void 0 : c.outcome_text,
            b = null == c ? void 0 : c.report_entities_results,
            f = null == c ? void 0 : c.report_outcome,
            K = null == c ? void 0 : c.rule_link
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              k.a,
              { color: w },
              r.a.createElement(_.b, { color: w, weight: 'bold' }, v),
              r.a.createElement(_.b, { color: w }, g),
            ),
            r.a.createElement(_.b, { size: 'title4', style: C.header, weight: 'heavy' }, p),
            r.a.createElement(_.b, { link: K }, S),
            b ? r.a.createElement(d.a, { report: Object(T.a)(b) }) : null,
            f
              ? r.a.createElement(
                  F.a,
                  { background: 'primary', style: C.label },
                  r.a.createElement(
                    _.b,
                    null,
                    (function (e) {
                      switch (e) {
                        case '0':
                          return R
                        case '1':
                          return x
                        default:
                          return ''
                      }
                    })(f).toUpperCase(),
                  ),
                )
              : null,
            r.a.createElement(_.b, { color: w }, y),
          )
        }
      l.default = Object(y.a)(
        function () {
          var e = Object(h.f)(),
            l = r.a.useContext(b.b).isModal,
            n = K.a,
            a = g.b.isTwitterApp(),
            t = r.a.useMemo(
              function () {
                return a ? n : void 0
              },
              [a, n],
            )
          return r.a.createElement(
            i.b,
            {
              backButtonType: 'close',
              centeredLogo: r.a.createElement(u.a, { style: C.iconTwitter }),
              containerStyle: C.root,
              history: e,
              renderHeader: t,
            },
            r.a.createElement(
              p.a,
              { style: C.parentContainer },
              r.a.createElement(
                p.a,
                { style: [C.contentBody, l ? C.wideScreen : C.narrowScreen] },
                r.a.createElement(c.a, { errorConfig: { context: 'REPORT_DETAIL' } }, r.a.createElement(E, null)),
              ),
            ),
          )
        },
        { page: 'report_center', component: 'report_outcome' },
      )
      var C = f.a.create(function (e) {
        return {
          root: { flexShrink: 1, flexGrow: 1, paddingBottom: e.spaces.space32 },
          parentContainer: { alignItems: 'left', marginTop: e.spaces.space12 },
          contentBody: { alignItems: 'left' },
          header: { marginVertical: e.spaces.space8 },
          headline: { marginBottom: e.spaces.space12 },
          iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
          label: { marginBottom: e.spaces.space12 },
          wideScreen: { marginBottom: e.spaces.space48, marginHorizontal: e.spaces.space72 },
          narrowScreen: {
            marginBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(f.a.iPhoneOffsetBottom, ')'),
            marginHorizontal: e.spaces.space32,
          },
          tombstone: { border: 'none', marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 },
        }
      })
    },
    'r/Jf': function (e, l, n) {
      'use strict'
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
                    action: 'THROW',
                    path: 'result.legacy',
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
      e.exports = a
    },
    sjuR: function (e, l, n) {
      'use strict'
      n.r(l)
      n('Blm6'), n('2G9S')
      var a,
        t = n('ERkP'),
        r = n.n(t),
        i = n('jHSc'),
        s = (n('YWiL'), n('3XMw')),
        o = n.n(s),
        u = n('Fr3L'),
        c = n.p + 'report-detail-ear.0518acc5.png',
        d = n('5gp/'),
        m = n('IAZG'),
        g = n('aITJ'),
        p = n('MWbm'),
        y = n('Irs7'),
        k = n('pjBI'),
        _ = n('t62R'),
        F = n('7N4s'),
        b = n('3rX5'),
        f = n('rHpw'),
        T = n('lnti'),
        K = n('0zXz'),
        h = n('zCf4'),
        v = o.a.e37836f8,
        S = o.a.ccf2f24e,
        w = o.a.e238c59f,
        x = 'gray700',
        R = void 0 !== a ? a : (a = n('+hxm')),
        L = function () {
          var e,
            l,
            n,
            a = Object(h.h)(),
            t = Object(m.a)(R, { reportId: a.reportId || '' })
          if (!t) return null
          var i,
            s,
            u,
            c =
              null == t ||
              null === (e = t.viewer_v2) ||
              void 0 === e ||
              null === (l = e.user_results) ||
              void 0 === l ||
              null === (n = l.result) ||
              void 0 === n
                ? void 0
                : n.submitted_report,
            g =
              null != c && c.create_time
                ? ((i = null == c ? void 0 : c.create_time), (s = o.a.ba2e82a1), (u = parseInt(i, 10)), s(new Date(u)))
                : '',
            p = null == c ? void 0 : c.header,
            y = null == c ? void 0 : c.follow_up_text,
            F = null == c ? void 0 : c.report_entities_results
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              k.a,
              { color: x },
              r.a.createElement(_.b, { color: x, weight: 'bold' }, S),
              r.a.createElement(_.b, { color: x }, g),
            ),
            r.a.createElement(_.b, { size: 'title3', weight: 'heavy' }, p),
            F ? r.a.createElement(d.a, { report: Object(T.a)(F) }) : null,
            r.a.createElement(_.b, { size: 'headline2', style: E.headline, weight: 'heavy' }, w),
            r.a.createElement(_.b, { color: x, size: 'subtext2', weight: 'normal' }, y),
          )
        },
        E =
          ((l.default = Object(y.a)(
            function () {
              var e = Object(h.f)(),
                l = r.a.useContext(F.b).isModal,
                n = K.a,
                a = g.b.isTwitterApp(),
                t = r.a.useMemo(
                  function () {
                    return a ? n : void 0
                  },
                  [a, n],
                )
              return r.a.createElement(
                i.b,
                {
                  backButtonType: 'close',
                  containerStyle: E.root,
                  documentTitle: v,
                  history: e,
                  renderHeader: t,
                  title: v,
                },
                r.a.createElement(
                  p.a,
                  { style: E.parentContainer },
                  r.a.createElement(
                    p.a,
                    { style: E.contentHeader },
                    r.a.createElement(
                      p.a,
                      { style: E.imageContainer },
                      r.a.createElement(b.a, { accessibilityLabel: '', source: c, style: E.image }),
                    ),
                  ),
                  r.a.createElement(
                    p.a,
                    { style: [E.contentBody, l ? E.wideScreen : E.narrowScreen] },
                    r.a.createElement(u.a, { errorConfig: { context: 'REPORT_DETAIL' } }, r.a.createElement(L, null)),
                  ),
                ),
              )
            },
            { page: 'report_center', component: 'report_detail' },
          )),
          f.a.create(function (e) {
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
                marginBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(f.a.iPhoneOffsetBottom, ')'),
                marginHorizontal: e.spaces.space32,
              },
              tombstone: { border: 'none', marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 },
            }
          }))
    },
    xYG4: function (e, l, n) {
      'use strict'
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
      e.exports = a
    },
  },
])
//# sourceMappingURL=WIPED
