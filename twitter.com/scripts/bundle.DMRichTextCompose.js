;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49, 228],
  {
    '/FNr': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return w
        })
      t('KqXw'), t('MvUL'), t('uFXj')
      var a,
        r = t('ERkP'),
        l = t.n(r),
        i = t('+Kfv'),
        o = t('i4Oy'),
        s = t('yiKp'),
        u = t.n(s),
        c = (t('lTEL'), t('7x/C'), t('kYxP'), t('mw9i')),
        d = t('4AMG'),
        p = (t('enFi'), t('NjAB')),
        y = t('sl05'),
        f = t('n0Rl'),
        g = t('h3MB'),
        m = void 0 !== a ? a : (a = t('GjeS')),
        h = Object(f.b)(m, { errorConfig: { context: 'DM_CONVERSATION_TIMELINE' } })
      function v(e) {
        var n = e.conversationId,
          t = e.isWide,
          a = l.a.useCallback(
            function (e) {
              if ('loaded' !== e.fetchStatus) return null
              var n = null == e ? void 0 : e.data
              if (!n) return null
              var a = (function (e) {
                var n,
                  t,
                  a,
                  r,
                  l,
                  i =
                    null == e ||
                    null === (n = e.dm_conversation_by_rest_id) ||
                    void 0 === n ||
                    null === (t = n.legacy_conversation_slice) ||
                    void 0 === t
                      ? void 0
                      : t.items
                if (!i || !i.length) return null
                var o,
                  s =
                    null === (a = i[0]) ||
                    void 0 === a ||
                    null === (r = a.dm_event) ||
                    void 0 === r ||
                    null === (l = r.legacy) ||
                    void 0 === l
                      ? void 0
                      : l.conversation,
                  c = Object(p.b)(i, [g.b]),
                  d = Object(p.b)([s], [g.a]).entities.conversations
                for (var y in d) {
                  o = d[y]
                  break
                }
                var f = c.entities.entries,
                  m = []
                for (var h in f) m.push(f[h])
                return u()(u()({}, o), {}, { participants: [], entries: m })
              })(n)
              return a
                ? l.a.createElement(
                    c.a,
                    { style: y.a.root },
                    l.a.createElement(d.a, {
                      conversation: a,
                      inboxType: 'primary',
                      isWide: t,
                      onHistoryRequest: function () {},
                      perspective: '',
                      scribeNamespace: {},
                      style: y.a.activity,
                    }),
                  )
                : null
            },
            [t],
          )
        return n ? l.a.createElement(h, { fetchPolicy: 'store-and-network', render: a, variables: { id: n } }) : null
      }
      var k = t('3XMw'),
        C = t.n(k),
        _ = t('M2mT'),
        b = t('rHpw'),
        S = t('aITJ'),
        T = t('zCf4'),
        E = C.a.d4986f85
      function w(e) {
        var n = e.history,
          t = e.isNewGroupConversation,
          a = e.richTextInputContext,
          r = e.typeaheadWrapper,
          s = Object(T.h)().conversationId,
          u = Object(T.g)()
        s || t || u.pathname !== window.location.pathname || n.replace({ pathname: '/messages' })
        var c = 'string' == typeof u.query.text ? u.query.text : void 0,
          d = o.a.get('window').width >= b.a.theme.breakpoints.small,
          p = function (e) {
            e()
          }
        return l.a.createElement(
          _.a,
          {
            backLocation: '/messages',
            onBackClick: p,
            documentTitle: 'Unformatted title placeholder',
            title: E,
            titleIconCell: l.a.createElement('span', null, 'Title icon cell'),
            titleIconCellSize: 'medium',
            subtitle: 'Subtitle placeholder',
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: S.b.isKaiOS(),
          },
          l.a.createElement(
            i.a,
            { viewType: 'messages' },
            l.a.createElement(v, {
              conversationId: s || void 0,
              history: n,
              isWide: d,
              prefillText: c,
              richTextInputContext: a,
              typeaheadWrapper: r,
            }),
          ),
        )
      }
    },
    '21nk': function (e, n, t) {
      'use strict'
      var a = t('I9iR'),
        r = t('3KVO'),
        l = t('yLYC'),
        i = t('Ud88'),
        o = (t('/2Cm'), t('aQQo').useTrackLoadQueryInRender),
        s = (t('ERkP').useDebugValue, t('K1lQ').__internal),
        u = s.fetchQueryDeduped,
        c = s.fetchQuery
      e.exports = function (e, n, t) {
        o()
        var s,
          d = i(),
          p = n.fetchKey,
          y = n.fetchPolicy,
          f = n.source,
          g = n.variables,
          m = n.networkCacheConfig,
          h = l(e, g, m)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          h.request.node.params.name !== n.name && a(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: u(d, h.request.identifier, function () {
                return d === n.environment && null != f
                  ? d.executeWithSource({ operation: h, source: f })
                  : d.execute({ operation: h })
              }),
              fetchPolicy: y,
              query: h,
              renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
            })
        else {
          var v = c(d, h)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === n.environment ? f.ifEmpty(v) : (n.environment, v),
            fetchKey: p,
            fetchPolicy: y,
            query: h,
            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
      }
    },
    '8fI/': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'DMConversationScreenWithRichText', function () {
          return c
        })
      var a = t('97Jx'),
        r = t.n(a),
        l = t('ERkP'),
        i = t.n(l),
        o = t('cOtO'),
        s = t('Rk1B'),
        u = t('RH6X'),
        c = function (e) {
          return i.a.createElement(s.default, null, function (n) {
            var t = n.richTextInputContext
            n.typeaheadWrapper
            return i.a.createElement(o.default, r()({}, e, { richTextInputContext: t, typeaheadWrapper: u.a }))
          })
        }
      n.default = c
    },
    GjeS: function (e, n, t) {
      'use strict'
      t.r(n)
      var a,
        r,
        l,
        i,
        o,
        s,
        u,
        c,
        d,
        p,
        y,
        f,
        g,
        m,
        h,
        v,
        k,
        C,
        _,
        b,
        S,
        T,
        E,
        w,
        K,
        F,
        x,
        D,
        L,
        I,
        O,
        P,
        R,
        M,
        B,
        A,
        N,
        U = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'id' },
              { defaultValue: null, kind: 'LocalArgument', name: 'next_cursor' },
              { defaultValue: null, kind: 'LocalArgument', name: 'previous_cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'id' },
                  { kind: 'Literal', name: 's', value: 24 },
                ]),
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  (y = {
                    alias: null,
                    args: null,
                    concreteType: 'ConversationInfo',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'conversation_id', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationMetadata',
                        kind: 'LinkedField',
                        name: 'metadata',
                        plural: !1,
                        selections: [
                          (s = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'conversation_type',
                            storageKey: null,
                          }),
                          (u = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'PerspectivalConversationMetadata',
                        kind: 'LinkedField',
                        name: 'perspectival_conversation_metadata',
                        plural: !1,
                        selections: [
                          (c = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'last_read_event_id',
                            storageKey: null,
                          }),
                          (d = { alias: null, args: null, kind: 'ScalarField', name: 'low_quality', storageKey: null }),
                          (p = { alias: null, args: null, kind: 'ScalarField', name: 'trusted', storageKey: null }),
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  }),
                  {
                    alias: null,
                    args: (f = [
                      { kind: 'Variable', name: 'next_cursor', variableName: 'next_cursor' },
                      { kind: 'Variable', name: 'previous_cursor', variableName: 'previous_cursor' },
                    ]),
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'DMEventItem',
                            kind: 'LinkedField',
                            name: 'items',
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  i,
                                  l,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      (g = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (m = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (h = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (v = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (k = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_type',
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          l,
                                          i,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              o,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  o,
                                                  s,
                                                  u,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (b = [
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
                                                              l,
                                                              i,
                                                              (_ = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  u,
                                                                  (C = {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'screen_name',
                                                                    storageKey: null,
                                                                  }),
                                                                ],
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  m,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: b,
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      l,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (S = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_url',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_width',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_height',
                                                                storageKey: null,
                                                              },
                                                            ],
                                                            type: 'ApiImage',
                                                            abstractKey: null,
                                                          }),
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
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
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
                                                              l,
                                                              i,
                                                              (T = {
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
                                                                    name: 'id_str',
                                                                    storageKey: null,
                                                                  },
                                                                  u,
                                                                  C,
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'profile_image_url_https',
                                                                    storageKey: null,
                                                                  },
                                                                ],
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
                                                  c,
                                                  (E = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (w = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (K = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  c,
                                                  d,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted_due_to_muted_user',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'read_only',
                                                    storageKey: null,
                                                  },
                                                  p,
                                                ],
                                                storageKey: null,
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
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          (F = {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DMInitialLowQualityState',
                                            kind: 'LinkedField',
                                            name: 'initial_low_quality_state',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'is_low_quality',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          }),
                                          (x = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (D = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (L = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (I = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          u,
                                          (O = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (P = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'sender_registration_token',
                                            storageKey: null,
                                          }),
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              (R = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              l,
                                              (M = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: b,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: b,
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
                        type: 'DMEventSlice',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
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
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  l,
                  i,
                  y,
                  {
                    alias: null,
                    args: f,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      (B = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      { kind: 'TypeDiscriminator', abstractKey: '__isDMEventSliceResult' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'DMEventItem',
                            kind: 'LinkedField',
                            name: 'items',
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  i,
                                  l,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      g,
                                      m,
                                      h,
                                      v,
                                      k,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          l,
                                          i,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              o,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  o,
                                                  s,
                                                  u,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (N = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          B,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              l,
                                                              i,
                                                              _,
                                                              (A = {
                                                                alias: null,
                                                                args: null,
                                                                filters: null,
                                                                handle: 'defaultScalars',
                                                                key: '',
                                                                kind: 'LinkedHandle',
                                                                name: 'legacy',
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  m,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: N,
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      l,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [B, S],
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
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
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
                                                          B,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [l, i, T, A],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  c,
                                                  E,
                                                  w,
                                                ],
                                                storageKey: null,
                                              },
                                              K,
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          F,
                                          x,
                                          D,
                                          L,
                                          I,
                                          u,
                                          O,
                                          P,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: N,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: N,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: N,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              R,
                                              l,
                                              M,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: N,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: N,
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
                        type: 'DMEventSlice',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '-Uh--djo528J1lVvN90ehw',
            metadata: {},
            name: 'evolutionDmConversationTimelineQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(U.hash = 'd10dca8514788699003806db1db0d5f0'), (n.default = U)
    },
    M2mT: function (e, n, t) {
      'use strict'
      var a = t('m3Bd'),
        r = t.n(a),
        l = t('VrFO'),
        i = t.n(l),
        o = t('Y9Ll'),
        s = t.n(o),
        u = t('1Pcy'),
        c = t.n(u),
        d = t('5Yy7'),
        p = t.n(d),
        y = t('2VqO'),
        f = t.n(y),
        g = t('KEM+'),
        m = t.n(g),
        h = (t('2G9S'), t('i4UL'), t('+/5o')),
        v = t('ERkP'),
        k = t.n(v),
        C = t('HPNB'),
        _ = t('VAZu'),
        b = t('wiP2'),
        S = t('Es6L'),
        T = t('yiKp'),
        E = t.n(T),
        w = t('rHpw'),
        K = w.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: E()(E()({}, w.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        F = t('MWbm'),
        x = t('yw4N'),
        D = t('TnY3'),
        L = t('cHvH'),
        I = t('3xLC'),
        O = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        P = (function (e) {
          p()(t, e)
          var n = f()(t)
          function t() {
            var e
            i()(this, t)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = n.call.apply(n, [this].concat(r))),
              m()(c()(e), '_renderChildren', function () {
                var n = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? k.a.createElement(
                      F.a,
                      { style: K.fill },
                      k.a.createElement(
                        x.a,
                        { style: K.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        n,
                      ),
                    )
                  : n
              }),
              e
            )
          }
          return (
            s()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return k.a.createElement(L.a, null, function (n) {
                    var t = n.windowWidth
                    return C.a.isTwoColumnLayout(t) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, O))
                  return k.a.createElement(
                    k.a.Fragment,
                    null,
                    Object(S.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : k.a.createElement(b.a.Configure, t),
                    n,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return k.a.createElement(
                    k.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var n = e.isTwoColumnLayout,
                    t = this.props,
                    a = t.SideNavButton,
                    r = t.TabBar,
                    l = t.TeamsSwitcher,
                    i = t.backLocation,
                    o = t.documentTitle,
                    s = t.headerless,
                    u = t.history,
                    c = t.leftControl,
                    d = t.middleControl,
                    p = t.onBackClick,
                    y = t.rightControl,
                    f = t.screenType,
                    g = t.searchBoxOptions,
                    m = t.secondaryBar,
                    v = t.showSubtitleOnRoot,
                    C = t.showSubtitleOnWideDetail,
                    S = t.subtitle,
                    T = t.title,
                    E = t.titleIconCell,
                    w = t.titleIconCellSize,
                    x = t.withBottomBorder,
                    D = t.withDetailOpen,
                    L = t.withSearchBox,
                    I = t.withTweetButton,
                    O = 'root' === f,
                    P = 'secondaryRoot' === f,
                    R = 'primaryDetail' === f,
                    M = (R && C) || (O && v),
                    B = O || (R && n),
                    A = O ? h.c : R ? h.a : void 0,
                    N = k.a.createElement(
                      F.a,
                      { style: K.appBarContainer },
                      k.a.createElement(_.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: B,
                        history: u,
                        leftControl: c,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: y,
                        secondaryBar: m,
                        subtitle: M ? S : void 0,
                        title: T,
                        titleDomId: A,
                        titleIconCell: E,
                        titleIconCellSize: w,
                        withBottomBorder: x,
                      }),
                    ),
                    U =
                      O || (P && D)
                        ? null
                        : k.a.createElement(b.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: l,
                            backLocation: i,
                            documentTitle: o,
                            headerless: s,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: y,
                            searchBoxOptions: g,
                            subtitle: S,
                            title: T,
                            withSearchBox: L,
                            withTweetButton: I,
                          })
                  return k.a.createElement(k.a.Fragment, null, U, N)
                },
              },
            ]),
            t
          )
        })(k.a.Component)
      m()(P, 'contextType', I.a),
        m()(P, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      n.a = Object(D.a)(P)
    },
    RH6X: function (e, n, t) {
      'use strict'
      var a = t('VrFO'),
        r = t.n(a),
        l = t('Y9Ll'),
        i = t.n(l),
        o = t('1Pcy'),
        s = t.n(o),
        u = t('5Yy7'),
        c = t.n(u),
        d = t('2VqO'),
        p = t.n(d),
        y = t('KEM+'),
        f = t.n(y),
        g = (t('2G9S'), t('849X'), t('TJCb'), t('ERkP')),
        m = t.n(g),
        h = t('oEoC'),
        v = t('2dXj'),
        k = t('4bHO'),
        C = t('dzqK'),
        _ = t('GZwR'),
        b = t('zpdM'),
        S = (function (e) {
          c()(t, e)
          var n = p()(t)
          function t() {
            var e
            r()(this, t)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              f()(s()(e), '_genericWrapperRef', m.a.createRef()),
              f()(s()(e), 'render', function () {
                var n = e.props,
                  t = n.children,
                  a = n.contextText,
                  r = n.isInline,
                  l = n.isInlineReply,
                  i = n.onTypeaheadStateChange,
                  o = n.source,
                  s = e.state,
                  u = s.canShowTypeahead,
                  c = s.queryContext,
                  d = u && c ? { word: c.word, resultType: c.resultType } : void 0
                return m.a.createElement(
                  v.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: l,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: i,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: o || _.d.Compose,
                  },
                  t(e._handleInputChange),
                )
              }),
              f()(s()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              f()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var n = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(n).getText()
              }),
              f()(s()(e), '_handleSelectItem', function (n) {
                var t = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(k.a)(n, a.resultType)
                  t(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              f()(s()(e), '_handleInputChange', function (n) {
                if (!Object(C.a)(n))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var t = e.state.queryContext,
                  a = t && t.word,
                  r = e._getPlaintextFromCurrentBlock(n),
                  l = h.c(e._getCaret(n), r),
                  i = l.end,
                  o = l.start,
                  s = l.word,
                  u = h.e(s || '', 'compose')
                if ((null == u ? void 0 : u.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === o))
                    e._setQueryContext(void 0)
                  else if (u) {
                    var c = u.q,
                      d = u.result_type
                    e._setQueryContext({ word: c, resultType: d, editorState: n, startIndex: o, endIndex: i })
                  } else e._setQueryContext(void 0)
              }),
              f()(s()(e), '_setQueryContext', function (n) {
                return e.setState({ queryContext: n, canShowTypeahead: !!n })
              }),
              f()(s()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            i()(t, [
              {
                key: '_replaceToken',
                value: function (e, n) {
                  var t = n.editorState,
                    a = n.endIndex,
                    r = n.startIndex,
                    l = t
                      .getSelection()
                      .merge({ anchorKey: t.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                    i = b.Modifier.replaceText(t.getCurrentContent(), l, e),
                    o = b.EditorState.push(t, i, 'insert-characters'),
                    s = r + e.length,
                    u = o.getSelection().merge({ anchorOffset: s, focusOffset: s })
                  return b.EditorState.forceSelection(o, u)
                },
              },
            ]),
            t
          )
        })(m.a.Component)
      n.a = S
    },
    Rk1B: function (e, n, t) {
      'use strict'
      t.r(n)
      t('ERkP')
      var a = t('RH6X'),
        r = t('hHEM'),
        l = t('keCP')
      n.default = function (e) {
        return (0, e.children)({
          richTextInputContext: {
            convertEmojiToEntities: r.a.convertEmojiToEntities,
            element: l.a,
            initEditorState: r.a.initEditorState,
            insertTextAtCursor: r.a.insertTextAtCursor,
          },
          typeaheadWrapper: a.a,
        })
      }
    },
    bCEw: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('K1iM')),
        r = t('23An'),
        l = t('Ud88'),
        i = t('aQQo'),
        o = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        u = t('ERkP'),
        c = u.useCallback,
        d = u.useEffect,
        p = u.useRef,
        y = u.useState,
        f = t('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function m(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var t = null != n ? n : g,
          i = l()
        s()
        var u = r(),
          f = p(new Set([t])),
          h = y(function () {
            return t
          }),
          v = h[0],
          k = h[1],
          C = y(function () {
            return t
          }),
          _ = C[0],
          b = C[1]
        t !== _ && (f.current.add(t), b(t), k(t))
        var S = c(
            function () {
              u.current && (f.current.add(g), k(g))
            },
            [u],
          ),
          T = c(
            function (n, t) {
              var a =
                null != t && t.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: t.fetchPolicy,
                      networkCacheConfig: t.networkCacheConfig,
                      __nameForWarning: t.__nameForWarning,
                    }
                  : t
              if (u.current) {
                var r,
                  l = o(null !== (r = null == t ? void 0 : t.__environment) && void 0 !== r ? r : i, e, n, a)
                f.current.add(l), k(l)
              }
            },
            [i, e, k, u],
          ),
          E = p(!1)
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
                    'NullQueryReference' !== v.kind &&
                    T(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var n = f.current
              if (u.current) {
                var t,
                  r = (0, a.default)(n)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var l = t.value
                    if (l === v) break
                    n.delete(l),
                      'NullQueryReference' !== l.kind &&
                        (m(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [v, u, T, e],
          ),
          d(
            function () {
              return function () {
                var n,
                  t = (0, a.default)(f.current)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var r = n.value
                    'NullQueryReference' !== r.kind &&
                      (m(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (l) {
                  t.e(l)
                } finally {
                  t.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === v.kind ? null : v, T, S]
        )
      }
    },
    cOtO: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'DMConversationScreen', function () {
          return $
        })
      var a = t('VrFO'),
        r = t.n(a),
        l = t('Y9Ll'),
        i = t.n(l),
        o = t('1Pcy'),
        s = t.n(o),
        u = t('5Yy7'),
        c = t.n(u),
        d = t('2VqO'),
        p = t.n(d),
        y = t('KEM+'),
        f = t.n(y),
        g = (t('KqXw'), t('MvUL'), t('uFXj'), t('+KXO'), t('z84I'), t('ERkP')),
        m = t.n(g),
        h = t('v6aA'),
        v = t('+Kfv'),
        k = (t('WNMA'), t('zh9S')),
        C = t('MMRb'),
        _ = t('CDB5'),
        b = t('RqPI'),
        S = t('hqKg'),
        T = t('AQOc'),
        E = t('z2Pn'),
        w = t('pNZL'),
        K = t('G6rE'),
        F = t('oEGd'),
        x = t('X/yg'),
        D = function (e, n) {
          return n.match.params.conversationId
        },
        L = Object(S.createSelector)(
          function (e, n) {
            return C.selectConversation(e, D(0, n))
          },
          C.selectEntries,
          D,
          x.l,
          b.q,
          x.m,
          x.n,
          K.e.selectAll,
          function (e, n) {
            return _.j(e, D(0, n))
          },
          function (e, n) {
            return _.i(e, D(0, n))
          },
          function (e, n, t, a, r, l, i, o, s, u) {
            var c = e && e.data
            return {
              conversation: (c && Object(T.a)(c, n, o)) || void 0,
              conversationId: t,
              isNewGroupConversation: a,
              isUploading: s,
              media: u,
              newConversationParticipants: l,
              perspective: r,
            }
          },
        ),
        I = Object(F.d)(L, function (e) {
          return {
            cancelUpload: Object(x.a)(e.match.params.conversationId),
            googleAnalyticsPageView: k.a,
            removeMedia: Object(x.b)(e.match.params.conversationId),
            scribePageImpression: k.d,
            setLastViewedDmInboxPath: E.h,
            updateTweetDetailNav: w.b,
          }
        }),
        O = t('i4Oy'),
        P = t('Oi4X'),
        R = t('aA19'),
        M = t('XnpN'),
        B = t('3XMw'),
        A = t.n(B),
        N = (t('hBvt'), t('/yvb')),
        U = t('6s7X'),
        j = A.a.h810143c,
        q = function (e) {
          var n = e.accessibilityLabel,
            t = e.conversationId,
            a = e.link,
            r = e.style,
            l = m.a.createElement(U.a, null)
          return m.a.createElement(N.a, {
            accessibilityLabel: n || j,
            hoverLabel: { label: j },
            icon: l,
            key: t,
            link: a,
            pullRight: !0,
            style: r,
            type: 'primaryText',
          })
        },
        V = t('7myi'),
        W = t('M2mT'),
        Q = t('rHpw'),
        H = t('aITJ'),
        z = t('MWbm'),
        G = t('7JQg'),
        Y = t('OhSZ'),
        J = A.a.d4986f85,
        X = A.a.e3e58b6d,
        Z = A.a.a9ddbb94,
        $ = (function (e) {
          c()(t, e)
          var n = p()(t)
          function t(e, a) {
            var l
            r()(this, t),
              (l = n.call(this, e, a)),
              f()(s()(l), '_composer', m.a.createRef()),
              f()(
                s()(l),
                '_isVDLEnabled',
                l.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  l.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
              ),
              f()(s()(l), '_handleConversationClose', function (e) {
                var n = l.props,
                  t = n.conversation,
                  a = n.history
                null != t && t.trusted ? a.push('/messages') : e()
              }),
              f()(s()(l), '_handleInfoClick', function () {
                var e = l.props,
                  n = e.conversationId,
                  t = e.history
                n && t.push('/messages/'.concat(n, '/info'))
              }),
              f()(s()(l), '_updateLastViewDmInboxPath', function () {
                var e = l.props,
                  n = e.location
                ;(0, e.setLastViewedDmInboxPath)(n.pathname)
              })
            var i = e.conversationId,
              o = e.history,
              u = e.isNewGroupConversation,
              c = e.location
            return i || u || c.pathname !== window.location.pathname || o.replace({ pathname: '/messages' }), l
          }
          return (
            i()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    n = e.googleAnalyticsPageView,
                    t = e.scribeNamespace,
                    a = e.scribePageImpression,
                    r = e.updateTweetDetailNav
                  a(t), r(t), n(t), this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.conversationId !== e.conversationId && this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.conversationId,
                    t = e.history,
                    a = e.location,
                    r = e.richTextInputContext,
                    l = e.typeaheadWrapper,
                    i = 'string' == typeof a.query.text ? a.query.text : void 0,
                    o = O.a.get('window').width >= Q.a.theme.breakpoints.small
                  return m.a.createElement(
                    W.a,
                    this._getNavProps(),
                    m.a.createElement(
                      v.a,
                      { viewType: 'messages' },
                      m.a.createElement(P.a, {
                        conversationId: n,
                        history: t,
                        isWide: o,
                        location: a,
                        prefillText: i,
                        richTextInputContext: r,
                        typeaheadWrapper: l,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_getNavProps',
                value: function () {
                  var e = this.props,
                    n = e.conversation,
                    t = e.newConversationParticipants,
                    a = e.perspective,
                    r =
                      n && Object.keys(n.participants).length
                        ? Object(Y.a)({ conversation: n, perspective: a })
                        : t
                        ? Object(Y.a)({ newConversationParticipants: t, perspective: a })
                        : J,
                    l =
                      n && Object.keys(n.participants).length
                        ? m.a.createElement(Y.b, { conversation: n, perspective: a, withScreenName: !1 })
                        : t
                        ? m.a.createElement(Y.b, { newConversationParticipants: t, perspective: a, withScreenName: !1 })
                        : J,
                    i = this._isVDLEnabled ? 'large' : 'medium',
                    o = a ? m.a.createElement(R.a, { conversation: n, perspective: a, size: i }) : void 0,
                    s =
                      n &&
                      n.type === C.CONVERSATION_TYPE.ONE_TO_ONE &&
                      a &&
                      Object(M.a)(n, a).map(function (e) {
                        return e.user.screen_name
                      }),
                    u = s ? '@'.concat(s[0]) : void 0
                  return {
                    backLocation: '/messages',
                    onBackClick: this._handleConversationClose,
                    documentTitle: r,
                    rightControl: this._renderRightControl(),
                    title: l,
                    titleIconCell: o,
                    titleIconCellSize: i,
                    subtitle: u,
                    screenType: 'primaryDetail',
                    withBottomTabBar: !1,
                    headerless: H.b.isKaiOS(),
                  }
                },
              },
              {
                key: '_renderRightControl',
                value: function () {
                  var e,
                    n = this.props,
                    t = n.conversation,
                    a = n.conversationId,
                    r = n.location,
                    l = (null == t ? void 0 : t.type) === C.CONVERSATION_TYPE.GROUP,
                    i = (null == r || null === (e = r.state) || void 0 === e ? void 0 : e.position) || 0
                  return a
                    ? m.a.createElement(
                        z.a,
                        { style: ee.rightControlStyles },
                        m.a.createElement(q, {
                          accessibilityLabel: l ? Z : X,
                          conversationId: a,
                          link: { pathname: '/messages/'.concat(a, '/info'), state: { position: i } },
                          style: ee.infoButton,
                        }),
                      )
                    : void 0
                },
              },
            ]),
            t
          )
        })(m.a.PureComponent)
      f()($, 'contextType', h.a), f()($, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: V.a })
      var ee = Q.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
      n.default = Object(G.c)({ page: 'messages', section: 'thread' })(I($))
    },
    dWxr: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')
      t('2G9S'),
        Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e, n) {
          var t = (0, o.default)(e, n)
            .concat((0, i.default)(e))
            .concat((0, l.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == t.length) return []
          return (0, s.default)(t), t
        })
      var r = a(t('EW8Q')),
        l = a(t('yyPN')),
        i = a(t('YXS5')),
        o = a(t('vwfs')),
        s = a(t('c8jd'))
      e.exports = n.default
    },
    hHEM: function (e, n, t) {
      'use strict'
      t('yH/f'), t('jwue'), t('7x/C'), t('+oxZ'), t('hBvt'), t('KqXw'), t('z84I')
      var a = t('ERkP'),
        r = t.n(a),
        l = t('dWxr'),
        i = t.n(l),
        o = t('rHpw'),
        s = t('aITJ'),
        u = { clipPath: 'circle(0% at center)' },
        c = {
          strategy: function (e, n) {
            for (var t = i()(e.getText()), a = 0; a < t.length; a++)
              t[a].indices && 2 === t[a].indices.length && n(t[a].indices[0], t[a].indices[1])
          },
          component: function (e) {
            return r.a.createElement('span', { style: { color: o.a.theme.colors.link } }, e.children)
          },
        },
        d = {
          strategy: function (e, n, t) {
            e.findEntityRanges(function (e) {
              var n = e.getEntity(),
                a = n && t.getEntity(n)
              return !(!a || a.type !== _.TWEMOJI_ENTITY_TYPE)
            }, n)
          },
          component: function (e) {
            var n = e.children,
              t = e.contentState,
              a = e.entityKey,
              l = (a && t.getEntity(a)) || {}
            return !(s.b.isFirefox() && s.b.firefoxVersion() < 49)
              ? r.a.Children.map(n, function (e) {
                  var n,
                    t = r.a.Children.map(e, function (e) {
                      return r.a.createElement('span', { style: u }, e)
                    })[0]
                  return r.a.cloneElement(
                    r.a.createElement('span', null),
                    {
                      style:
                        ((n = (l.data && l.data.url) || ''),
                        {
                          backgroundImage: 'url("'.concat(n, '")'),
                          backgroundSize: '1em 1em',
                          padding: '0.15em',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          WebkitTextFillColor: 'transparent',
                        }),
                    },
                    t,
                  )
                })
              : n
          },
        },
        p = {
          strategy: function (e, n) {
            var t = (function (e, n, t) {
              for (var a, r, l = n.getText(); (a = e.exec(l)); ) t((r = a.index), r + a[0].length)
            })(/\r/g, e, n)
            if (t) return n(t, t + 1)
          },
          component: function () {
            return '\n'
          },
        },
        y = t('z4Oz'),
        f = t('zpdM'),
        g = function (e, n) {
          for (var t = 0, a = 0; a < e.length; a++) {
            var r = e[a],
              l = r.getText().length
            if (t + l >= n) return { blockKey: r.key, offset: n - t }
            t += l + 1
          }
          return Object.freeze({})
        },
        m = function (e, n) {
          var t = e.getCurrentContent(),
            a = t.getFirstBlock(),
            r = t.getLastBlock(),
            l = n.blockKey,
            i = void 0 === l ? r.key : l,
            o = n.offset,
            s = void 0 === o ? r.getText().length : o,
            u = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: i, focusOffset: s, isBackward: !1 }),
            c = f.Modifier.removeInlineStyle(e.getCurrentContent(), u, 'overflow')
          return f.EditorState.push(e, c, 'change-inline-style')
        },
        h = function (e, n) {
          var t = n.blockKey,
            a = n.offset,
            r = e.getCurrentContent(),
            l = r.getLastBlock(),
            i = v(r, t, a)
          if (t) {
            var o = e
                .getSelection()
                .merge({
                  anchorKey: t,
                  anchorOffset: i,
                  focusKey: l.key,
                  focusOffset: l.getText().length,
                  isBackward: !1,
                }),
              s = f.Modifier.applyInlineStyle(r, o, 'overflow')
            return f.EditorState.push(e, s, 'change-inline-style')
          }
          return e
        },
        v = function (e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            a = t,
            r = e.getBlockForKey(n)
          if (r) {
            var l = r.getEntityAt(t)
            if (void 0 !== l) {
              var i = l && e.getEntity(l),
                o = i && i.data && i.data.id
              if (void 0 !== o)
                for (var s = t - 1; s >= 0; s--) {
                  var u = r.getEntityAt(s),
                    c = u && e.getEntity(u)
                  if (!c || !c.data || c.data.id !== o) {
                    a = s + 1
                    break
                  }
                }
            }
            return a
          }
        },
        k = 'TWEMOJI',
        C = 'IMMUTABLE',
        _ = (n.a = {
          convertEmojiToEntities: function (e) {
            var n = f.EditorState.set(e, { allowUndo: !1 }),
              t = n.getCurrentContent(),
              a = 0
            return (
              t.getBlocksAsArray().forEach(function (e) {
                y.a.getTwemojiEntities(e.getText()).forEach(function (r) {
                  if (2 === (r.indices && r.indices.length)) {
                    var l = t.createEntity(k, C, { url: r.url || null, id: a })
                    a += 1
                    var i = l.getLastCreatedEntityKey(),
                      o = e.getKey(),
                      s = n
                        .getSelection()
                        .merge({
                          anchorKey: o,
                          anchorOffset: r.indices[0],
                          focusKey: o,
                          focusOffset: r.indices[1],
                          isBackward: !1,
                        })
                    t = f.Modifier.applyEntity(l, s, i)
                  }
                })
              }),
              f.EditorState.set(n, { allowUndo: !0, currentContent: t })
            )
          },
          getRelativeOffset: g,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              n = [c, d, p],
              t = f.EditorState.createWithContent(
                'string' == typeof e ? f.ContentState.createFromText(e) : Object(f.convertFromRaw)(e),
                new f.CompositeDecorator(n),
              )
            return f.EditorState.moveSelectionToEnd(t)
          },
          insertTextAtCursor: function (e, n) {
            var t = e.getCurrentContent(),
              a = e.getSelection(),
              r = f.Modifier.insertText(t, a, n)
            return f.EditorState.push(e, r, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: k,
          updateOverflowStyle: function (e, n) {
            var t,
              a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = e.getSelection(),
              l = f.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              o = e.getCurrentContent().getSelectionAfter(),
              s = e.getCurrentContent(),
              u = s.getBlocksAsArray(),
              c = 'number' == typeof n && n > -1,
              d = c ? g(u, n) : Object.freeze({})
            if ((a && ((l = m(l, d)), (t = !0)), c && ((l = h(l, d)), (t = !0)), t)) {
              var p = (l = f.EditorState.forceSelection(l, r)).getCurrentContent()
              ;(p = (p = p.set('selectionBefore', i)).set('selectionAfter', o)),
                (l = f.EditorState.set(e, { allowUndo: !0, currentContent: p }))
            }
            return l
          },
        })
    },
    keCP: function (e, n, t) {
      'use strict'
      var a = t('VrFO'),
        r = t.n(a),
        l = t('Y9Ll'),
        i = t.n(l),
        o = t('1Pcy'),
        s = t.n(o),
        u = t('5Yy7'),
        c = t.n(u),
        d = t('2VqO'),
        p = t.n(d),
        y = t('KEM+'),
        f = t.n(y),
        g = t('97Jx'),
        m = t.n(g),
        h = (t('2G9S'), t('jwue'), t('7x/C'), t('+oxZ'), t('KqXw'), t('MvUL'), t('SV7d')),
        v = t('rHpw'),
        k = 'singleline',
        C = function (e) {
          var n = e.placeholderTextColor,
            t = void 0 === n ? v.a.theme.colors.gray700 : n,
            a = v.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(t, ';\n            padding-bottom: ')
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              t,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              k,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              k,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        _ = t('ERkP'),
        b = t.n(_),
        S = t('k/Ka'),
        T = t('PxJJ'),
        E = t('w9LO'),
        w = t('fs1G'),
        K = t('zpdM'),
        F = function (e) {
          return Object(S.a)('div', e)
        },
        x = !1,
        D =
          ((n.a = b.a.forwardRef(function (e, n) {
            var t = h.d()
            return b.a.createElement(
              D,
              m()({}, e, {
                onFocus: function (n) {
                  e.onFocus && e.onFocus(n), t('focus')
                },
                ref: n,
              }),
            )
          })),
          (function (e) {
            c()(t, e)
            var n = p()(t)
            function t() {
              var e
              r()(this, t)
              for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
              return (
                (e = n.call.apply(n, [this].concat(l))),
                f()(s()(e), '_setSelectionToStart', function () {
                  var n = e.props.editorState,
                    t = n.getCurrentContent().getFirstBlock().getKey()
                  return K.EditorState.acceptSelection(
                    n,
                    new K.SelectionState({
                      anchorKey: t,
                      anchorOffset: 0,
                      focusKey: t,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                f()(s()(e), '_setFocusToStart', function () {
                  var n = e._setSelectionToStart()
                  return K.EditorState.forceSelection(n, n.getSelection())
                }),
                f()(s()(e), '_setFocusToEnd', function () {
                  var n = e.props,
                    t = n.autoFocus,
                    a = n.editorState,
                    r = n.onChange
                  t
                    ? null == r || r(K.EditorState.moveFocusToEnd(a))
                    : null == r || r(K.EditorState.moveSelectionToEnd(a))
                }),
                f()(s()(e), '_setDraftJsStyle', function () {
                  var n = e.props.placeholderTextColor,
                    t = document.createElement('style')
                  t.innerHTML = C({ placeholderTextColor: n })
                  var a = document.head
                  a && a.insertBefore(t, a.firstChild)
                }),
                f()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                f()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                f()(s()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                f()(s()(e), 'getOffsetHeight', function () {
                  var n = (e._editor || {}).editor
                  return (n && n.offsetHeight) || 0
                }),
                f()(s()(e), '_setEditorRef', function (n) {
                  e._editor = n
                }),
                f()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                f()(s()(e), '_onPastedFiles', function (n) {
                  var t = e.props.onFilesAdded,
                    a = []
                  return (
                    n.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == t ? void 0 : t(a)) ? 'handled' : 'not-handled'
                  )
                }),
                f()(s()(e), '_onPastedText', function (n, t, a) {
                  var r = e.props,
                    l = r.multiline,
                    i = r.onChange
                  return !l && i
                    ? (i(
                        K.EditorState.push(
                          a,
                          K.Modifier.replaceText(a.getCurrentContent(), a.getSelection(), n.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                f()(s()(e), '_myKeyBindingFn', function (n) {
                  var t = e.props,
                    a = t.dismissComposerCommandName,
                    r = t.sendTweetCommandName,
                    l = K.KeyBindingUtil.hasCommandModifier
                  return 13 === n.keyCode && l(n) ? r : 27 === n.keyCode ? a : Object(K.getDefaultKeyBinding)(n)
                }),
                f()(s()(e), '_onKeyCommand', function (n) {
                  var t = e.props.keyCommandHandlers,
                    a = t && t[n]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                f()(s()(e), '_onSingleLineReturn', function (n, t) {
                  var a = e.props.handleReturn
                  return null == a || a(n, t), 'handled'
                }),
                f()(s()(e), '_getContainerStyle', function () {
                  var n = e.props,
                    t = n.appTextSize,
                    a = n.maxNumberOfLines,
                    r = n.multiline,
                    l = n.numberOfLines,
                    i =
                      v.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[t]
                      ]
                  return { minHeight: (r && l ? l : 1) * i, maxHeight: (r && a ? a : 1) * i }
                }),
                e
              )
            }
            return (
              i()(
                t,
                [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        n = e.onChange,
                        t = e.positionCursorAtBeginning
                      e.positionCursorAtEnd
                        ? this._setFocusToEnd()
                        : t
                        ? null == n || n(this._setFocusToStart())
                        : this.props.autoFocus && this.focus(),
                        x || (this._setDraftJsStyle(), (x = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      T.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        n = this.props,
                        t = n.ariaActiveDescendant,
                        a = n.ariaAutocomplete,
                        r = n.ariaControls,
                        l = n.ariaLabel,
                        i = n.blockRenderMap,
                        o = n.blockRendererFn,
                        s = n.editorState,
                        u = n.handleReturn,
                        c = n.multiline,
                        d = n.onChange,
                        p = n.onFocus,
                        y = n.onKeyDown,
                        g = n.onKeyPress,
                        m = n.onKeyUp,
                        h = n.placeholder,
                        C = n.spellCheck,
                        _ = n.stripPastedStyles,
                        S = n.style,
                        T = n.testID
                      return b.a.createElement(
                        F,
                        {
                          className: c ? void 0 : k,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), S],
                        },
                        b.a.createElement(K.Editor, {
                          ariaActiveDescendantID: t,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: l,
                          ariaMultiline: c,
                          blockRenderMap: i,
                          blockRendererFn: o,
                          customAttrs:
                            ((e = {}),
                            f()(e, E.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            f()(e, 'onKeyPress', g),
                            f()(e, 'onKeyUp', m),
                            e),
                          customStyleMap: L(v.a.theme),
                          editorState: s,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: c ? u : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: y,
                          placeholder: h,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== C,
                          stripPastedStyles: _,
                          tabIndex: 0,
                          webDriverTestID: T,
                        }),
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromError',
                    value: function () {
                      return {}
                    },
                  },
                ],
              ),
              t
            )
          })(b.a.Component))
      f()(D, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: w.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        stripPastedStyles: !0,
      }),
        (D.propTypes = {})
      var L = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    n0Rl: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return B
      })
      var a = t('ddV6'),
        r = t.n(a),
        l = t('VrFO'),
        i = t.n(l),
        o = t('Y9Ll'),
        s = t.n(o),
        u = t('1Pcy'),
        c = t.n(u),
        d = t('5Yy7'),
        p = t.n(d),
        y = t('2VqO'),
        f = t.n(y),
        g = t('KEM+'),
        m = t.n(g),
        h = (t('2G9S'), t('lTEL'), t('7x/C'), t('87if'), t('ZUdG'), t('kYxP'), t('ERkP')),
        v = t.n(h),
        k = t('pXBW'),
        C = t('6/RC'),
        _ = t('UIzd'),
        b = t.n(_),
        S = t('kGix')
      t.d(n, 'a', function () {
        return S.a
      })
      var T = t('fs1G'),
        E = t('0KEI'),
        w = t('lU4h'),
        K = t.n(w),
        F = t('21nk'),
        x = t.n(F),
        D = t('bCEw'),
        L = t.n(D),
        I = t('Ud88'),
        O = t.n(I),
        P = function (e) {
          return (0, e.render)({ fetchStatus: S.a.LOADING, data: null, error: null, retry: T.a })
        },
        R = (function (e) {
          p()(t, e)
          var n = f()(t)
          function t() {
            var e
            i()(this, t)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (e = n.call.apply(n, [this].concat(r))), m()(c()(e), 'state', { error: null }), e
          }
          return (
            s()(
              t,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, n) {
                    if (!(e instanceof k.a)) throw e
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
            t
          )
        })(v.a.Component),
        M = function (e) {
          var n = e.query,
            t = e.queryRef,
            a = e.render,
            r = x()(n, t)
          return a({ fetchStatus: S.a.LOADED, data: r, error: null, retry: T.a })
        },
        B = function (e, n) {
          if (C.canUseDOM)
            return function (t) {
              var a = t.fetchPolicy,
                l = void 0 === a ? 'store-or-network' : a,
                i = t.render,
                o = t.variables,
                s = L()(e),
                u = r()(s, 2),
                c = u[0],
                d = u[1],
                p = Object(E.useCreateLocalApiErrorHandler)(n.errorConfig.context),
                y = K()(o),
                f = r()(y, 1)[0],
                g = v.a.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                v.a.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: l })
                  },
                  [l, d, f],
                ),
                c
                  ? v.a.createElement(
                      v.a.Suspense,
                      { fallback: v.a.createElement(P, { render: i }) },
                      v.a.createElement(
                        R,
                        { errorHandler: p(n.errorConfig.options || {}), key: c.fetchKey, retry: g },
                        function (n, t) {
                          return n
                            ? i({ fetchStatus: S.a.FAILED, error: n, data: null, retry: t })
                            : v.a.createElement(M, { query: e, queryRef: c, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var t = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var l = a.render,
              i = a.variables,
              o = O()(),
              s = Object(E.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              u = K()(i),
              c = r()(u, 1)[0],
              d = t.get(o)
            if (d) return d
            var p = v.a.lazy(function () {
              return b()(o, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return l({ fetchStatus: S.a.LOADED, data: e, error: null, retry: T.a })
                  },
                  function (e) {
                    return e instanceof k.a
                      ? (s(n.errorConfig.options || {})(e),
                        l({ fetchStatus: S.a.FAILED, data: null, error: e, retry: T.a }))
                      : v.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: t.set(o, e).get.bind(t, o) }
                })
            })
            return v.a.createElement(v.a.Suspense, null, v.a.createElement(p, null))
          }
        }
    },
    uwR9: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return c
        })
      var a = t('97Jx'),
        r = t.n(a),
        l = t('ERkP'),
        i = t.n(l),
        o = t('/FNr'),
        s = t('Rk1B'),
        u = t('RH6X')
      function c(e) {
        return i.a.createElement(s.default, null, function (n) {
          var t = n.richTextInputContext
          n.typeaheadWrapper
          return i.a.createElement(o.default, r()({}, e, { richTextInputContext: t, typeaheadWrapper: u.a }))
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
