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
        m = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'reportId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ReportDetailQuery',
            selections: [
              {
                alias: null,
                args: (t = [{ kind: 'Literal', name: 's', value: 24 }]),
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
                storageKey: 'viewer_v2(s:24)',
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
        p = function (e) {
          var l = e.children,
            n = e.hideLabel,
            a = void 0 === n ? d : n,
            r = e.label,
            s = e.lang,
            u = e.render,
            o = void 0 === u ? m : u,
            p = e.revealLabel,
            g = void 0 === p ? c : p,
            y = i.a.useState(!1),
            k = t()(y, 2),
            f = k[0],
            b = k[1]
          return o({
            actionText: f ? a : g,
            children: f ? l : r,
            lang: s,
            onActionClick: function () {
              return b(!f)
            },
          })
        }
      ;(p.displayName = 'TweetDisclosure'), (l.a = p)
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
      var a = {
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
      l.default = a
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
        p = n.n(m),
        g = n('Fr3L'),
        y = n.p + 'report-detail-ear.0518acc5.png',
        k = (n('z84I'), n('97Jx')),
        f = n.n(k),
        b = n('jAXQ'),
        _ = n.n(b),
        F = n('7N4s'),
        v = n('v302'),
        R = n('2MR/'),
        w = n('rHpw'),
        K = p.a.a78f7bd9,
        E = function (e) {
          var l,
            t,
            r = e.tweet_results,
            i = _()(void 0 !== a ? a : (a = n('Gi4s')), r),
            s = o.a.useContext(F.b).isModal,
            u = o.a.useCallback(
              function (e) {
                return o.a.createElement(v.a, f()({}, e, { style: [h.tombstone, s && h.wideScreen] }))
              },
              [s],
            )
          return null != i &&
            null !== (l = i.result) &&
            void 0 !== l &&
            null !== (t = l.legacy) &&
            void 0 !== t &&
            t.full_text
            ? o.a.createElement(R.a, { label: K, render: u }, i.result.legacy.full_text)
            : null
        },
        h = w.a.create(function (e) {
          return {
            tombstone: { border: 'none', marginVertical: e.spaces.space20 },
            wideScreen: { marginHorizontal: e.spaces.space32 },
          }
        }),
        T = n('t62R'),
        L = function (e) {
          var l = e.user_results,
            a = _()(void 0 !== t ? t : (t = n('r/Jf')), l)
          return o.a.createElement(T.b, null, a.__typename)
        },
        S = function (e) {
          var l = e.report_entity_results,
            a = _()(void 0 !== r ? r : (r = n('xYG4')), l)
          switch (a.__typename) {
            case 'TweetResults':
              return o.a.createElement(E, { tweet_results: a })
            case 'UserResults':
              return o.a.createElement(L, { user_results: a })
            default:
              return null
          }
        },
        x = function (e) {
          var l = e.report,
            a = _()(void 0 !== i ? i : (i = n('6mUz')), l)
          return o.a.createElement(
            o.a.Fragment,
            null,
            a.map(function (e, l) {
              return o.a.createElement(S, { key: l, report_entity_results: e })
            }),
          )
        },
        I = n('IAZG'),
        D = n('MWbm'),
        U = n('/yvb'),
        C = n('pjBI'),
        z = n('3rX5'),
        B = n('zCf4'),
        j = p.a.e37836f8,
        Q = p.a.ccf2f24e,
        A = p.a.d7b32a4d,
        G = p.a.b772cd65,
        H = 'gray700',
        M = void 0 !== s ? s : (s = n('+hxm')),
        O = function (e) {
          return o.a.createElement(
            U.a,
            {
              disabled: !1,
              onPress: function () {
                return e.goBack()
              },
              size: 'small',
              type: 'primaryFilled',
            },
            G,
          )
        },
        V = function () {
          var e,
            l,
            n,
            a = Object(B.h)(),
            t = Object(I.a)(M, { reportId: a.reportId || '' }),
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
              C.a,
              { color: H },
              o.a.createElement(T.b, { color: H, weight: 'bold' }, Q),
              o.a.createElement(T.b, { color: H }, i),
            ),
            o.a.createElement(T.b, { size: 'title3', weight: 'heavy' }, s),
            d ? o.a.createElement(x, { report: Object(c.a)(d) }) : null,
            o.a.createElement(T.b, { size: 'headline2', style: P.headline, weight: 'heavy' }, A),
            o.a.createElement(T.b, { color: H, size: 'subtext2', weight: 'normal' }, u),
          )
        },
        P =
          ((l.default = function () {
            var e = Object(B.f)(),
              l = o.a.useContext(F.b).isModal
            return o.a.createElement(
              d.b,
              {
                backButtonType: 'close',
                containerStyle: P.root,
                documentTitle: j,
                history: e,
                rightControl: O(e),
                title: j,
              },
              o.a.createElement(
                D.a,
                { style: P.parentContainer },
                o.a.createElement(
                  D.a,
                  { style: P.imageContainer },
                  o.a.createElement(z.a, { accessibilityLabel: '', source: y, style: P.image }),
                ),
                o.a.createElement(
                  D.a,
                  { style: [P.innerContainer, l ? P.wideScreen : P.narrowScreen] },
                  o.a.createElement(g.a, { errorConfig: { context: 'REPORT_DETAIL' } }, o.a.createElement(V, null)),
                ),
              ),
            )
          }),
          w.a.create(function (e) {
            return {
              root: { flexShrink: 1, flexGrow: 1, paddingBottom: e.spaces.space32 },
              parentContainer: { alignItems: 'center' },
              innerContainer: { alignItems: 'left' },
              headline: { marginBottom: e.spaces.space12 },
              image: { height: '100%', width: '100%' },
              imageContainer: { height: '150px', width: '150px', marginBottom: e.spaces.space12 },
              wideScreen: { marginBottom: e.spaces.space48, marginHorizontal: e.spaces.space72 },
              narrowScreen: {
                marginBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(w.a.iPhoneOffsetBottom, ')'),
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
