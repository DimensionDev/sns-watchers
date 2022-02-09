;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    '+hxm': function (e, l, n) {
      'use strict'
      n.r(l)
      var t,
        a,
        r,
        s,
        i,
        u,
        o,
        c,
        d,
        m = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'reportId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ReportDetailQuery',
            selections: [
              {
                alias: null,
                args: (a = [{ kind: 'Literal', name: 's', value: 24 }]),
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
                                  (s = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'create_time',
                                    storageKey: null,
                                  }),
                                  (i = {
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
                storageKey: 'viewer_v2(s:24)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'ReportDetailQuery',
            selections: [
              {
                alias: null,
                args: a,
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
                                  s,
                                  i,
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
                                                    concreteType: 'LegacyTweet',
                                                    kind: 'LinkedField',
                                                    name: 'legacy',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'full_text',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  (c = {
                                                    alias: null,
                                                    args: null,
                                                    filters: null,
                                                    handle: 'defaultScalars',
                                                    key: '',
                                                    kind: 'LinkedHandle',
                                                    name: 'legacy',
                                                  }),
                                                  (d = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'id',
                                                    storageKey: null,
                                                  }),
                                                ],
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
                                                        name: 'description',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  c,
                                                  d,
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
                              d,
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
                storageKey: 'viewer_v2(s:24)',
              },
            ],
          },
          params: {
            id: 'dscPUcrQ-QsIqQof15ikkg',
            metadata: {},
            name: 'ReportDetailQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(m.hash = 'd2facc36a120a5e92d74ef8c67b6b283'), (l.default = m)
    },
    '2MR/': function (e, l, n) {
      'use strict'
      var t = n('ddV6'),
        a = n.n(t),
        r = n('ERkP'),
        s = n.n(r),
        i = n('3XMw'),
        u = n.n(i),
        o = n('v302'),
        c = u.a.b05a39b2,
        d = u.a.c566d3a5,
        m = function (e) {
          return s.a.createElement(o.a, e)
        },
        p = function (e) {
          var l = e.children,
            n = e.hideLabel,
            t = void 0 === n ? d : n,
            r = e.label,
            i = e.lang,
            u = e.render,
            o = void 0 === u ? m : u,
            p = e.revealLabel,
            y = void 0 === p ? c : p,
            g = s.a.useState(!1),
            k = a()(g, 2),
            f = k[0],
            _ = k[1]
          return o({
            actionText: f ? t : y,
            children: f ? l : r,
            lang: i,
            onActionClick: function () {
              return _(!f)
            },
          })
        }
      ;(p.displayName = 'TweetDisclosure'), (l.a = p)
    },
    '6mUz': function (e, l, n) {
      'use strict'
      n.r(l)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: { plural: !0 },
        name: 'ReportEntityList_reportEntityResults',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ReportEntity_reportEntityResults' }],
        type: 'ReportEntityResults',
        abstractKey: '__isReportEntityResults',
        hash: 'b18415d0f89c2df57f81abcb4600f199',
      }
      l.default = t
    },
    Gi4s: function (e, l, n) {
      'use strict'
      n.r(l)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ReportEntityTweet_tweetResults',
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
                    concreteType: 'LegacyTweet',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'full_text', storageKey: null }],
                    storageKey: null,
                  },
                ],
                type: 'Tweet',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'TweetResults',
        abstractKey: null,
        hash: '17b312610a3872b4c354fd17e3fc8227',
      }
      l.default = t
    },
    'r/Jf': function (e, l, n) {
      'use strict'
      n.r(l)
      var t = {
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
      l.default = t
    },
    sjuR: function (e, l, n) {
      'use strict'
      n.r(l)
      n('Blm6')
      var t,
        a,
        r,
        s,
        i,
        u = n('ERkP'),
        o = n.n(u),
        c = n('lnti'),
        d = n('jHSc'),
        m = (n('enFi'), n('3XMw')),
        p = n.n(m),
        y = n('Fr3L'),
        g = (n('z84I'), n('97Jx')),
        k = n.n(g),
        f = n('jAXQ'),
        _ = n.n(f),
        b = n('v302'),
        F = n('2MR/'),
        v = n('rHpw'),
        R = p.a.a78f7bd9,
        K = function (e) {
          var l,
            a,
            r = e.tweet_results,
            s = _()(void 0 !== t ? t : (t = n('Gi4s')), r),
            i = o.a.useCallback(function (e) {
              return o.a.createElement(b.a, k()({}, e, { style: E.tombstone }))
            }, [])
          return null != s &&
            null !== (l = s.result) &&
            void 0 !== l &&
            null !== (a = l.legacy) &&
            void 0 !== a &&
            a.full_text
            ? o.a.createElement(F.a, { label: R, render: i }, s.result.legacy.full_text)
            : null
        },
        E = v.a.create(function (e) {
          return { tombstone: { border: 'none', marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 } }
        }),
        w = n('t62R'),
        T = function (e) {
          var l = e.user_results,
            t = _()(void 0 !== a ? a : (a = n('r/Jf')), l)
          return o.a.createElement(w.b, null, t.__typename)
        },
        h = function (e) {
          var l = e.report_entity_results,
            t = _()(void 0 !== r ? r : (r = n('xYG4')), l)
          switch (t.__typename) {
            case 'TweetResults':
              return o.a.createElement(K, { tweet_results: t })
            case 'UserResults':
              return o.a.createElement(T, { user_results: t })
            default:
              return null
          }
        },
        L = function (e) {
          var l = e.report,
            t = _()(void 0 !== s ? s : (s = n('6mUz')), l)
          return o.a.createElement(
            o.a.Fragment,
            null,
            t.map(function (e, l) {
              return o.a.createElement(h, { key: l, report_entity_results: e })
            }),
          )
        },
        S = n('IAZG'),
        I = n('MWbm'),
        x = n('/yvb'),
        D = n('pjBI'),
        U = n('zCf4'),
        z = p.a.e37836f8,
        C = p.a.ccf2f24e,
        j = p.a.d7b32a4d,
        Q = p.a.b772cd65,
        A = 'gray700',
        V = void 0 !== i ? i : (i = n('+hxm')),
        G = function (e) {
          return o.a.createElement(
            x.a,
            {
              disabled: !1,
              onPress: function () {
                return e.goBack()
              },
              size: 'small',
              type: 'primaryFilled',
            },
            Q,
          )
        },
        H = function () {
          var e,
            l,
            n,
            t = Object(U.h)(),
            a = Object(S.a)(V, { reportId: t.reportId || '' }),
            r =
              null == a ||
              null === (e = a.viewer_v2) ||
              void 0 === e ||
              null === (l = e.user_results) ||
              void 0 === l ||
              null === (n = l.result) ||
              void 0 === n
                ? void 0
                : n.submitted_report,
            s = new Date(parseInt(null == r ? void 0 : r.create_time, 10) || 0).toLocaleDateString(void 0, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            i = null == r ? void 0 : r.header,
            u = null == r ? void 0 : r.follow_up_text,
            d = null == r ? void 0 : r.report_entities_results
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              D.a,
              { color: A },
              o.a.createElement(w.b, { color: A, weight: 'bold' }, C),
              o.a.createElement(w.b, { color: A }, s),
            ),
            o.a.createElement(w.b, { size: 'title3', weight: 'heavy' }, i),
            d ? o.a.createElement(L, { report: Object(c.a)(d) }) : null,
            o.a.createElement(w.b, { size: 'headline2', weight: 'heavy' }, j),
            o.a.createElement(w.b, { color: A, size: 'subtext2', weight: 'normal' }, u),
          )
        },
        O =
          ((l.default = function () {
            var e = Object(U.f)()
            return o.a.createElement(
              d.b,
              {
                backButtonType: 'close',
                containerStyle: O.root,
                documentTitle: z,
                history: e,
                rightControl: G(e),
                title: z,
              },
              o.a.createElement(
                I.a,
                { style: O.parentContainer },
                o.a.createElement(
                  I.a,
                  { style: O.innerContainer },
                  o.a.createElement(y.a, { errorConfig: { context: 'REPORT_DETAIL' } }, o.a.createElement(H, null)),
                ),
              ),
            )
          }),
          v.a.create(function (e) {
            return {
              root: { flexShrink: 1, flexGrow: 1, paddingBottom: e.spaces.space32 },
              parentContainer: { alignItems: 'center' },
              innerContainer: { marginHorizontal: e.spaces.space72, alignItems: 'left' },
              tombstone: { border: 'none', marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 },
            }
          }))
    },
    xYG4: function (e, l, n) {
      'use strict'
      n.r(l)
      var t = {
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
      l.default = t
    },
  },
])
//# sourceMappingURL=WIPED
