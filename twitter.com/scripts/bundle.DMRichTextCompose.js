;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48, 227],
  {
    '/FNr': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return F
        })
      t('MvUL'), t('KqXw'), t('uFXj')
      var r,
        a = t('ERkP'),
        l = t.n(a),
        i = t('+Kfv'),
        o = t('i4Oy'),
        s = t('KEM+'),
        c = t.n(s),
        u =
          (t('7x/C'),
          t('lTEL'),
          t('kYxP'),
          t('+KXO'),
          t('1t7P'),
          t('LW0h'),
          t('daRM'),
          t('jwue'),
          t('+oxZ'),
          t('FtHn'),
          t('mw9i')),
        d = t('4AMG'),
        p = (t('enFi'), t('NjAB')),
        f = (t('aWzz'), t('sl05')),
        y = t('n0Rl'),
        g = t('h3MB')
      function m(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function h(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? m(Object(t), !0).forEach(function (n) {
                c()(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
        }
        return e
      }
      var v = void 0 !== r ? r : (r = t('GjeS')),
        k = Object(y.b)(v, { errorConfig: { context: 'DM_CONVERSATION_TIMELINE' } })
      function b(e) {
        var n = e.conversationId,
          t = e.isWide,
          r = l.a.useCallback(
            function (e) {
              if ('loaded' !== e.fetchStatus) return null
              var n = null == e ? void 0 : e.data
              if (!n) return null
              var r = (function (e) {
                var n,
                  t,
                  r,
                  a,
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
                    null === (r = i[0]) ||
                    void 0 === r ||
                    null === (a = r.dm_event) ||
                    void 0 === a ||
                    null === (l = a.legacy) ||
                    void 0 === l
                      ? void 0
                      : l.conversation,
                  c = Object(p.b)(i, [g.b]),
                  u = Object(p.b)([s], [g.a]).entities.conversations
                for (var d in u) {
                  o = u[d]
                  break
                }
                var f = c.entities.entries,
                  y = []
                for (var m in f) y.push(f[m])
                return h(h({}, o), {}, { participants: [], entries: y })
              })(n)
              return r
                ? l.a.createElement(
                    u.a,
                    { style: f.a.root },
                    l.a.createElement(d.a, {
                      conversation: r,
                      inboxType: 'primary',
                      isWide: t,
                      onHistoryRequest: function () {},
                      perspective: '',
                      scribeNamespace: {},
                      style: f.a.activity,
                    }),
                  )
                : null
            },
            [t],
          )
        return n ? l.a.createElement(k, { fetchPolicy: 'store-and-network', render: r, variables: { id: n } }) : null
      }
      var C = t('3XMw'),
        _ = t.n(C),
        S = t('M2mT'),
        E = t('rHpw'),
        T = t('aITJ'),
        w = t('Ty5D'),
        K = _.a.d4986f85
      function F(e) {
        var n = e.history,
          t = e.isNewGroupConversation,
          r = e.richTextInputContext,
          a = e.typeaheadWrapper,
          s = Object(w.i)().conversationId,
          c = Object(w.h)()
        s || t || c.pathname !== window.location.pathname || n.replace({ pathname: '/messages' })
        var u = 'string' == typeof c.query.text ? c.query.text : void 0,
          d = o.a.get('window').width >= E.a.theme.breakpoints.small,
          p = function (e) {
            e()
          }
        return l.a.createElement(
          S.a,
          {
            backLocation: '/messages',
            onBackClick: p,
            documentTitle: 'Unformatted title placeholder',
            title: K,
            titleIconCell: l.a.createElement('span', null, 'Title icon cell'),
            titleIconCellSize: 'medium',
            subtitle: 'Subtitle placeholder',
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: T.b.isKaiOS(),
          },
          l.a.createElement(
            i.a,
            { viewType: 'messages' },
            l.a.createElement(b, {
              conversationId: s || void 0,
              history: n,
              isWide: d,
              prefillText: u,
              richTextInputContext: r,
              typeaheadWrapper: a,
            }),
          ),
        )
      }
    },
    '21nk': function (e, n, t) {
      'use strict'
      var r = t('I9iR'),
        a = t('3KVO'),
        l = t('yLYC'),
        i = t('Ud88'),
        o = (t('/2Cm'), t('aQQo').useTrackLoadQueryInRender),
        s = (t('ERkP').useDebugValue, t('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, n, t) {
        o()
        var s,
          d = i(),
          p = n.fetchKey,
          f = n.fetchPolicy,
          y = n.source,
          g = n.variables,
          m = n.networkCacheConfig,
          h = l(e, g, m)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          h.request.node.params.name !== n.name && r(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: c(d, h.request.identifier, function () {
                return d === n.environment && null != y
                  ? d.executeWithSource({ operation: h, source: y })
                  : d.execute({ operation: h })
              }),
              fetchPolicy: f,
              query: h,
              renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
            })
        else {
          var v = u(d, h)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && d === n.environment ? y.ifEmpty(v) : (n.environment, v),
            fetchKey: p,
            fetchPolicy: f,
            query: h,
            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
          }
        }
        return a(s)
      }
    },
    '8fI/': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'DMConversationScreenWithRichText', function () {
          return u
        })
      var r = t('97Jx'),
        a = t.n(r),
        l = t('ERkP'),
        i = t.n(l),
        o = t('cOtO'),
        s = t('Rk1B'),
        c = t('RH6X'),
        u = function (e) {
          return i.a.createElement(s.default, null, function (n) {
            var t = n.richTextInputContext
            n.typeaheadWrapper
            return i.a.createElement(o.default, a()({}, e, { richTextInputContext: t, typeaheadWrapper: c.a }))
          })
        }
      n.default = u
    },
    GjeS: function (e, n, t) {
      'use strict'
      t.r(n)
      var r,
        a,
        l,
        i,
        o,
        s,
        c,
        u,
        d,
        p,
        f,
        y,
        g,
        m,
        h,
        v,
        k,
        b,
        C,
        _,
        S,
        E,
        T,
        w,
        K,
        F,
        x,
        O,
        D,
        L,
        P,
        R,
        I,
        M,
        B,
        j,
        A,
        N = {
          fragment: {
            argumentDefinitions: (r = [
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
                args: (a = [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'id' },
                  { kind: 'Literal', name: 's', value: 23 },
                ]),
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  (f = {
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
                          (c = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
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
                          (u = {
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
                    args: (y = [
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
                                                  c,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (_ = [
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
                                                              (C = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  c,
                                                                  (b = {
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
                                                    selections: _,
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
                                                              (E = {
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
                                                                  c,
                                                                  b,
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
                                                  u,
                                                  (T = {
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
                                                  u,
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
                                          (O = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (D = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (L = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          c,
                                          (P = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (R = {
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
                                            selections: _,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: _,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: _,
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
                                              (I = {
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
                                                selections: _,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: _,
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
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: a,
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  l,
                  i,
                  f,
                  {
                    alias: null,
                    args: y,
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
                                                  c,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (A = [
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
                                                              C,
                                                              (j = {
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
                                                    selections: A,
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
                                                            selections: [l, i, E, j],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  u,
                                                  T,
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
                                          O,
                                          D,
                                          L,
                                          c,
                                          P,
                                          R,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: A,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: A,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: A,
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
                                              I,
                                              l,
                                              M,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: A,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: A,
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
      ;(N.hash = 'd10dca8514788699003806db1db0d5f0'), (n.default = N)
    },
    M2mT: function (e, n, t) {
      'use strict'
      t('OZaJ')
      var r = t('m3Bd'),
        a = t.n(r),
        l = t('VrFO'),
        i = t.n(l),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        d = t('5Yy7'),
        p = t.n(d),
        f = t('N+ot'),
        y = t.n(f),
        g = t('AuHH'),
        m = t.n(g),
        h = t('KEM+'),
        v = t.n(h),
        k = (t('2G9S'), t('i4UL'), t('+/5o')),
        b = t('ERkP'),
        C = t.n(b),
        _ = t('HPNB'),
        S = t('VAZu'),
        E = t('wiP2'),
        T = t('Es6L'),
        w = (t('+KXO'), t('1t7P'), t('LW0h'), t('daRM'), t('jwue'), t('+oxZ'), t('FtHn'), t('rHpw'))
      function K(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function F(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? K(Object(t), !0).forEach(function (n) {
                v()(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
        }
        return e
      }
      var x = w.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: F(F({}, w.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        O = t('MWbm'),
        D = t('yw4N'),
        L = t('TnY3'),
        P = t('cHvH'),
        R = t('3xLC')
      function I(e) {
        var n = (function () {
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
          var t,
            r = m()(e)
          if (n) {
            var a = m()(this).constructor
            t = Reflect.construct(r, arguments, a)
          } else t = r.apply(this, arguments)
          return y()(this, t)
        }
      }
      var M = (function (e) {
        p()(t, e)
        var n = I(t)
        function t() {
          var e
          i()(this, t)
          for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l]
          return (
            (e = n.call.apply(n, [this].concat(a))),
            v()(u()(e), '_renderChildren', function () {
              var n = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? C.a.createElement(
                    O.a,
                    { style: x.fill },
                    C.a.createElement(D.a, { style: x.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), n),
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
                return C.a.createElement(P.a, null, function (n) {
                  var t = n.windowWidth
                  return _.a.isTwoColumnLayout(t) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                    a()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return C.a.createElement(
                  C.a.Fragment,
                  null,
                  Object(T.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : C.a.createElement(E.a.Configure, t),
                  n,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this.context.rootDetailPerColumnScroll
                return C.a.createElement(
                  C.a.Fragment,
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
                  r = t.SideNavButton,
                  a = t.TabBar,
                  l = t.TeamsSwitcher,
                  i = t.backLocation,
                  o = t.documentTitle,
                  s = t.headerless,
                  c = t.history,
                  u = t.leftControl,
                  d = t.middleControl,
                  p = t.onBackClick,
                  f = t.rightControl,
                  y = t.screenType,
                  g = t.searchBoxOptions,
                  m = t.secondaryBar,
                  h = t.showSubtitleOnRoot,
                  v = t.showSubtitleOnWideDetail,
                  b = t.subtitle,
                  _ = t.title,
                  T = t.titleIconCell,
                  w = t.titleIconCellSize,
                  K = t.withBottomBorder,
                  F = t.withDetailOpen,
                  D = t.withSearchBox,
                  L = t.withTweetButton,
                  P = 'root' === y,
                  R = 'secondaryRoot' === y,
                  I = 'primaryDetail' === y,
                  M = (I && v) || (P && h),
                  B = P || (I && n),
                  j = P ? k.c : I ? k.a : void 0,
                  A = C.a.createElement(
                    O.a,
                    { style: x.appBarContainer },
                    C.a.createElement(S.a, {
                      backLocation: i,
                      fixed: !1,
                      hideBackButton: B,
                      history: c,
                      leftControl: u,
                      middleControl: d,
                      onBackClick: p,
                      rightControl: f,
                      secondaryBar: m,
                      subtitle: M ? b : void 0,
                      title: _,
                      titleDomId: j,
                      titleIconCell: T,
                      titleIconCellSize: w,
                      withBottomBorder: K,
                    }),
                  ),
                  N =
                    P || (R && F)
                      ? null
                      : C.a.createElement(E.a.Configure, {
                          SideNavButton: r,
                          TabBar: a,
                          TeamsSwitcher: l,
                          backLocation: i,
                          documentTitle: o,
                          headerless: s,
                          middleControl: d,
                          onBackClick: p,
                          rightControl: f,
                          searchBoxOptions: g,
                          subtitle: b,
                          title: _,
                          withSearchBox: D,
                          withTweetButton: L,
                        })
                return C.a.createElement(C.a.Fragment, null, N, A)
              },
            },
          ]),
          t
        )
      })(C.a.Component)
      v()(M, 'contextType', R.a),
        v()(M, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      n.a = Object(L.a)(M)
    },
    RH6X: function (e, n, t) {
      'use strict'
      t('OZaJ')
      var r = t('VrFO'),
        a = t.n(r),
        l = t('Y9Ll'),
        i = t.n(l),
        o = t('1Pcy'),
        s = t.n(o),
        c = t('5Yy7'),
        u = t.n(c),
        d = t('N+ot'),
        p = t.n(d),
        f = t('AuHH'),
        y = t.n(f),
        g = t('KEM+'),
        m = t.n(g),
        h = (t('2G9S'), t('ERkP')),
        v = t.n(h),
        k = t('oEoC'),
        b = t('2dXj'),
        C = t('4bHO'),
        _ = t('dzqK'),
        S = t('GZwR'),
        E = t('zpdM')
      function T(e) {
        var n = (function () {
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
          var t,
            r = y()(e)
          if (n) {
            var a = y()(this).constructor
            t = Reflect.construct(r, arguments, a)
          } else t = r.apply(this, arguments)
          return p()(this, t)
        }
      }
      var w = (function (e) {
        u()(t, e)
        var n = T(t)
        function t() {
          var e
          a()(this, t)
          for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i]
          return (
            (e = n.call.apply(n, [this].concat(l))),
            m()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
            m()(s()(e), '_genericWrapperRef', v.a.createRef()),
            m()(s()(e), 'render', function () {
              var n = e.props,
                t = n.children,
                r = n.contextText,
                a = n.isInline,
                l = n.isInlineReply,
                i = n.onTypeaheadStateChange,
                o = n.source,
                s = e.state,
                c = s.canShowTypeahead,
                u = s.queryContext,
                d = c && u ? { word: u.word, resultType: u.resultType } : void 0
              return v.a.createElement(
                b.a,
                {
                  contextText: r,
                  isInline: a,
                  isInlineReply: l,
                  onDismiss: e._handleDismiss,
                  onSelectItem: e._handleSelectItem,
                  onTypeaheadStateChange: i,
                  query: d,
                  ref: e._genericWrapperRef,
                  source: o || S.d.Compose,
                },
                t(e._handleInputChange),
              )
            }),
            m()(s()(e), '_getCaret', function (e) {
              return e.getSelection().getStartOffset()
            }),
            m()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
              var n = e.getSelection().anchorKey
              return e.getCurrentContent().getBlockForKey(n).getText()
            }),
            m()(s()(e), '_handleSelectItem', function (n) {
              var t = e.props.onTextUpdated,
                r = e.state.queryContext
              if (r) {
                var a = Object(C.a)(n, r.resultType)
                t(e._replaceToken(a, r))
              }
              e._setQueryContext(void 0)
            }),
            m()(s()(e), '_handleInputChange', function (n) {
              if (!Object(_.a)(n))
                throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
              var t = e.state.queryContext,
                r = t && t.word,
                a = e._getPlaintextFromCurrentBlock(n),
                l = k.c(e._getCaret(n), a),
                i = l.end,
                o = l.start,
                s = l.word,
                c = k.e(s || '', 'compose')
              if ((null == c ? void 0 : c.q) !== r)
                if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === o))
                  e._setQueryContext(void 0)
                else if (c) {
                  var u = c.q,
                    d = c.result_type
                  e._setQueryContext({ word: u, resultType: d, editorState: n, startIndex: o, endIndex: i })
                } else e._setQueryContext(void 0)
            }),
            m()(s()(e), '_setQueryContext', function (n) {
              return e.setState({ queryContext: n, canShowTypeahead: !!n })
            }),
            m()(s()(e), '_handleDismiss', function () {
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
                  r = n.endIndex,
                  a = n.startIndex,
                  l = t
                    .getSelection()
                    .merge({ anchorKey: t.getSelection().getFocusKey(), anchorOffset: a, focusOffset: r }),
                  i = E.Modifier.replaceText(t.getCurrentContent(), l, e),
                  o = E.EditorState.push(t, i, 'insert-characters'),
                  s = a + e.length,
                  c = o.getSelection().merge({ anchorOffset: s, focusOffset: s })
                return E.EditorState.forceSelection(o, c)
              },
            },
          ]),
          t
        )
      })(v.a.Component)
      n.a = w
    },
    Rk1B: function (e, n, t) {
      'use strict'
      t.r(n)
      t('ERkP')
      var r = t('RH6X'),
        a = t('hHEM'),
        l = t('keCP')
      n.default = function (e) {
        return (0, e.children)({
          richTextInputContext: {
            convertEmojiToEntities: a.a.convertEmojiToEntities,
            element: l.a,
            initEditorState: a.a.initEditorState,
            insertTextAtCursor: a.a.insertTextAtCursor,
          },
          typeaheadWrapper: r.a,
        })
      }
    },
    bCEw: function (e, n, t) {
      'use strict'
      var r = t('IGGJ')(t('K1iM')),
        a = t('23An'),
        l = t('Ud88'),
        i = t('aQQo'),
        o = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        c = t('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        p = c.useRef,
        f = c.useState,
        y = t('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function m(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== y(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var t = null != n ? n : g,
          i = l()
        s()
        var c = a(),
          y = p(new Set([t])),
          h = f(function () {
            return t
          }),
          v = h[0],
          k = h[1],
          b = f(function () {
            return t
          }),
          C = b[0],
          _ = b[1]
        t !== C && (y.current.add(t), _(t), k(t))
        var S = u(
            function () {
              c.current && (y.current.add(g), k(g))
            },
            [c],
          ),
          E = u(
            function (n, t) {
              var r =
                null != t && t.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: t.fetchPolicy,
                      networkCacheConfig: t.networkCacheConfig,
                      __nameForWarning: t.__nameForWarning,
                    }
                  : t
              if (c.current) {
                var a,
                  l = o(null !== (a = null == t ? void 0 : t.__environment) && void 0 !== a ? a : i, e, n, r)
                y.current.add(l), k(l)
              }
            },
            [i, e, k, c],
          ),
          T = p(!1)
        return (
          d(function () {
            return function () {
              T.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === T.current)
                return (
                  (T.current = !1),
                  void (
                    'NullQueryReference' !== v.kind &&
                    E(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var n = y.current
              if (c.current) {
                var t,
                  a = (0, r.default)(n)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var l = t.value
                    if (l === v) break
                    n.delete(l),
                      'NullQueryReference' !== l.kind &&
                        (m(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [v, c, E, e],
          ),
          d(
            function () {
              return function () {
                var n,
                  t = (0, r.default)(y.current)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var a = n.value
                    'NullQueryReference' !== a.kind &&
                      (m(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
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
          ['NullQueryReference' === v.kind ? null : v, E, S]
        )
      }
    },
    cOtO: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'DMConversationScreen', function () {
          return te
        })
      t('OZaJ')
      var r = t('VrFO'),
        a = t.n(r),
        l = t('Y9Ll'),
        i = t.n(l),
        o = t('1Pcy'),
        s = t.n(o),
        c = t('5Yy7'),
        u = t.n(c),
        d = t('N+ot'),
        p = t.n(d),
        f = t('AuHH'),
        y = t.n(f),
        g = t('KEM+'),
        m = t.n(g),
        h = (t('MvUL'), t('KqXw'), t('uFXj'), t('+KXO'), t('z84I'), t('ERkP')),
        v = t.n(h),
        k = t('v6aA'),
        b = t('+Kfv'),
        C = (t('WNMA'), t('zh9S')),
        _ = t('MMRb'),
        S = t('CDB5'),
        E = t('RqPI'),
        T = t('hqKg'),
        w = t('AQOc'),
        K = t('z2Pn'),
        F = t('pNZL'),
        x = t('G6rE'),
        O = t('oEGd'),
        D = t('X/yg'),
        L = function (e, n) {
          return n.match.params.conversationId
        },
        P = Object(T.createSelector)(
          function (e, n) {
            return _.selectConversation(e, L(0, n))
          },
          _.selectEntries,
          L,
          D.l,
          E.q,
          D.m,
          D.n,
          x.e.selectAll,
          function (e, n) {
            return S.j(e, L(0, n))
          },
          function (e, n) {
            return S.i(e, L(0, n))
          },
          function (e, n, t, r, a, l, i, o, s, c) {
            var u = e && e.data
            return {
              conversation: (u && Object(w.a)(u, n, o)) || void 0,
              conversationId: t,
              isNewGroupConversation: r,
              isUploading: s,
              media: c,
              newConversationParticipants: l,
              perspective: a,
            }
          },
        ),
        R = Object(O.d)(P, function (e) {
          return {
            cancelUpload: Object(D.a)(e.match.params.conversationId),
            googleAnalyticsPageView: C.a,
            removeMedia: Object(D.b)(e.match.params.conversationId),
            scribePageImpression: C.d,
            setLastViewedDmInboxPath: K.h,
            updateTweetDetailNav: F.b,
          }
        }),
        I = t('i4Oy'),
        M = t('Oi4X'),
        B = t('aA19'),
        j = t('XnpN'),
        A = t('3XMw'),
        N = t.n(A),
        U = (t('hBvt'), t('/yvb')),
        W = t('6s7X'),
        H = N.a.h810143c,
        q = function (e) {
          var n = e.accessibilityLabel,
            t = e.conversationId,
            r = e.link,
            a = e.style,
            l = v.a.createElement(W.a, null)
          return v.a.createElement(U.a, {
            accessibilityLabel: n || H,
            hoverLabel: { label: H },
            icon: l,
            key: t,
            link: r,
            pullRight: !0,
            style: a,
            type: 'primaryText',
          })
        },
        Q = t('7myi'),
        V = t('M2mT'),
        z = t('rHpw'),
        G = t('aITJ'),
        J = t('MWbm'),
        X = t('7JQg'),
        Y = t('OhSZ')
      function Z(e) {
        var n = (function () {
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
          var t,
            r = y()(e)
          if (n) {
            var a = y()(this).constructor
            t = Reflect.construct(r, arguments, a)
          } else t = r.apply(this, arguments)
          return p()(this, t)
        }
      }
      var $ = N.a.d4986f85,
        ee = N.a.e3e58b6d,
        ne = N.a.a9ddbb94,
        te = (function (e) {
          u()(t, e)
          var n = Z(t)
          function t(e, r) {
            var l
            a()(this, t),
              (l = n.call(this, e, r)),
              m()(s()(l), '_composer', v.a.createRef()),
              m()(
                s()(l),
                '_isVDLEnabled',
                l.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  l.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
              ),
              m()(s()(l), '_handleConversationClose', function (e) {
                var n = l.props,
                  t = n.conversation,
                  r = n.history
                null != t && t.trusted ? r.push('/messages') : e()
              }),
              m()(s()(l), '_handleInfoClick', function () {
                var e = l.props,
                  n = e.conversationId,
                  t = e.history
                n && t.push('/messages/'.concat(n, '/info'))
              }),
              m()(s()(l), '_updateLastViewDmInboxPath', function () {
                var e = l.props,
                  n = e.location
                ;(0, e.setLastViewedDmInboxPath)(n.pathname)
              })
            var i = e.conversationId,
              o = e.history,
              c = e.isNewGroupConversation,
              u = e.location
            return i || c || u.pathname !== window.location.pathname || o.replace({ pathname: '/messages' }), l
          }
          return (
            i()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    n = e.googleAnalyticsPageView,
                    t = e.scribeNamespace,
                    r = e.scribePageImpression,
                    a = e.updateTweetDetailNav
                  r(t), a(t), n(t), this._updateLastViewDmInboxPath()
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
                    r = e.location,
                    a = e.richTextInputContext,
                    l = e.typeaheadWrapper,
                    i = 'string' == typeof r.query.text ? r.query.text : void 0,
                    o = I.a.get('window').width >= z.a.theme.breakpoints.small
                  return v.a.createElement(
                    V.a,
                    this._getNavProps(),
                    v.a.createElement(
                      b.a,
                      { viewType: 'messages' },
                      v.a.createElement(M.a, {
                        conversationId: n,
                        history: t,
                        isWide: o,
                        location: r,
                        prefillText: i,
                        richTextInputContext: a,
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
                    r = e.perspective,
                    a =
                      n && Object.keys(n.participants).length
                        ? Object(Y.a)({ conversation: n, perspective: r })
                        : t
                        ? Object(Y.a)({ newConversationParticipants: t, perspective: r })
                        : $,
                    l =
                      n && Object.keys(n.participants).length
                        ? v.a.createElement(Y.b, { conversation: n, perspective: r, withScreenName: !1 })
                        : t
                        ? v.a.createElement(Y.b, { newConversationParticipants: t, perspective: r, withScreenName: !1 })
                        : $,
                    i = this._isVDLEnabled ? 'large' : 'medium',
                    o = r ? v.a.createElement(B.a, { conversation: n, perspective: r, size: i }) : void 0,
                    s =
                      n &&
                      n.type === _.CONVERSATION_TYPE.ONE_TO_ONE &&
                      r &&
                      Object(j.a)(n, r).map(function (e) {
                        return e.user.screen_name
                      }),
                    c = s ? '@'.concat(s[0]) : void 0
                  return {
                    backLocation: '/messages',
                    onBackClick: this._handleConversationClose,
                    documentTitle: a,
                    rightControl: this._renderRightControl(),
                    title: l,
                    titleIconCell: o,
                    titleIconCellSize: i,
                    subtitle: c,
                    screenType: 'primaryDetail',
                    withBottomTabBar: !1,
                    headerless: G.b.isKaiOS(),
                  }
                },
              },
              {
                key: '_renderRightControl',
                value: function () {
                  var e,
                    n = this.props,
                    t = n.conversation,
                    r = n.conversationId,
                    a = n.location,
                    l = (null == t ? void 0 : t.type) === _.CONVERSATION_TYPE.GROUP,
                    i = (null == a || null === (e = a.state) || void 0 === e ? void 0 : e.position) || 0
                  return r
                    ? v.a.createElement(
                        J.a,
                        { style: re.rightControlStyles },
                        v.a.createElement(q, {
                          accessibilityLabel: l ? ne : ee,
                          conversationId: r,
                          link: { pathname: '/messages/'.concat(r, '/info'), state: { position: i } },
                          style: re.infoButton,
                        }),
                      )
                    : void 0
                },
              },
            ]),
            t
          )
        })(v.a.PureComponent)
      m()(te, 'contextType', k.a), m()(te, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: Q.a })
      var re = z.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
      n.default = Object(X.c)({ page: 'messages', section: 'thread' })(R(te))
    },
    dWxr: function (e, n, t) {
      'use strict'
      var r = t('IGGJ')
      t('2G9S'),
        Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e, n) {
          var t = (0, o.default)(e, n)
            .concat((0, i.default)(e))
            .concat((0, l.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, a.default)(e))
          if (0 == t.length) return []
          return (0, s.default)(t), t
        })
      var a = r(t('EW8Q')),
        l = r(t('yyPN')),
        i = r(t('YXS5')),
        o = r(t('vwfs')),
        s = r(t('c8jd'))
      e.exports = n.default
    },
    hHEM: function (e, n, t) {
      'use strict'
      t('yH/f'), t('jwue'), t('+oxZ'), t('hBvt'), t('KqXw'), t('z84I')
      var r = t('ERkP'),
        a = t.n(r),
        l = t('dWxr'),
        i = t.n(l),
        o = t('rHpw'),
        s = t('aITJ'),
        c = { clipPath: 'circle(0% at center)' },
        u = {
          strategy: function (e, n) {
            for (var t = i()(e.getText()), r = 0; r < t.length; r++)
              t[r].indices && 2 === t[r].indices.length && n(t[r].indices[0], t[r].indices[1])
          },
          component: function (e) {
            return a.a.createElement('span', { style: { color: o.a.theme.colors.link } }, e.children)
          },
        },
        d = {
          strategy: function (e, n, t) {
            e.findEntityRanges(function (e) {
              var n = e.getEntity(),
                r = n && t.getEntity(n)
              return !(!r || r.type !== C.TWEMOJI_ENTITY_TYPE)
            }, n)
          },
          component: function (e) {
            var n = e.children,
              t = e.contentState,
              r = e.entityKey,
              l = (r && t.getEntity(r)) || {}
            return !(s.b.isFirefox() && s.b.firefoxVersion() < 49)
              ? a.a.Children.map(n, function (e) {
                  var n,
                    t = a.a.Children.map(e, function (e) {
                      return a.a.createElement('span', { style: c }, e)
                    })[0]
                  return a.a.cloneElement(
                    a.a.createElement('span', null),
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
              for (var r, a, l = n.getText(); (r = e.exec(l)); ) t((a = r.index), a + r[0].length)
            })(/\r/g, e, n)
            if (t) return n(t, t + 1)
          },
          component: function () {
            return '\n'
          },
        },
        f = t('z4Oz'),
        y = t('zpdM'),
        g = function (e, n) {
          for (var t = 0, r = 0; r < e.length; r++) {
            var a = e[r],
              l = a.getText().length
            if (t + l >= n) return { blockKey: a.key, offset: n - t }
            t += l + 1
          }
          return Object.freeze({})
        },
        m = function (e, n) {
          var t = e.getCurrentContent(),
            r = t.getFirstBlock(),
            a = t.getLastBlock(),
            l = n.blockKey,
            i = void 0 === l ? a.key : l,
            o = n.offset,
            s = void 0 === o ? a.getText().length : o,
            c = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: i, focusOffset: s, isBackward: !1 }),
            u = y.Modifier.removeInlineStyle(e.getCurrentContent(), c, 'overflow')
          return y.EditorState.push(e, u, 'change-inline-style')
        },
        h = function (e, n) {
          var t = n.blockKey,
            r = n.offset,
            a = e.getCurrentContent(),
            l = a.getLastBlock(),
            i = v(a, t, r)
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
              s = y.Modifier.applyInlineStyle(a, o, 'overflow')
            return y.EditorState.push(e, s, 'change-inline-style')
          }
          return e
        },
        v = function (e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = t,
            a = e.getBlockForKey(n)
          if (a) {
            var l = a.getEntityAt(t)
            if (void 0 !== l) {
              var i = l && e.getEntity(l),
                o = i && i.data && i.data.id
              if (void 0 !== o)
                for (var s = t - 1; s >= 0; s--) {
                  var c = a.getEntityAt(s),
                    u = c && e.getEntity(c)
                  if (!u || !u.data || u.data.id !== o) {
                    r = s + 1
                    break
                  }
                }
            }
            return r
          }
        },
        k = 'TWEMOJI',
        b = 'IMMUTABLE',
        C = (n.a = {
          convertEmojiToEntities: function (e) {
            var n = y.EditorState.set(e, { allowUndo: !1 }),
              t = n.getCurrentContent(),
              r = 0
            return (
              t.getBlocksAsArray().forEach(function (e) {
                f.a.getTwemojiEntities(e.getText()).forEach(function (a) {
                  if (2 === (a.indices && a.indices.length)) {
                    var l = t.createEntity(k, b, { url: a.url || null, id: r })
                    r += 1
                    var i = l.getLastCreatedEntityKey(),
                      o = e.getKey(),
                      s = n
                        .getSelection()
                        .merge({
                          anchorKey: o,
                          anchorOffset: a.indices[0],
                          focusKey: o,
                          focusOffset: a.indices[1],
                          isBackward: !1,
                        })
                    t = y.Modifier.applyEntity(l, s, i)
                  }
                })
              }),
              y.EditorState.set(n, { allowUndo: !0, currentContent: t })
            )
          },
          getRelativeOffset: g,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              n = [u, d, p],
              t = y.EditorState.createWithContent(
                'string' == typeof e ? y.ContentState.createFromText(e) : Object(y.convertFromRaw)(e),
                new y.CompositeDecorator(n),
              )
            return y.EditorState.moveSelectionToEnd(t)
          },
          insertTextAtCursor: function (e, n) {
            var t = e.getCurrentContent(),
              r = e.getSelection(),
              a = y.Modifier.insertText(t, r, n)
            return y.EditorState.push(e, a, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: k,
          updateOverflowStyle: function (e, n) {
            var t,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = e.getSelection(),
              l = y.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              o = e.getCurrentContent().getSelectionAfter(),
              s = e.getCurrentContent(),
              c = s.getBlocksAsArray(),
              u = 'number' == typeof n && n > -1,
              d = u ? g(c, n) : Object.freeze({})
            if ((r && ((l = m(l, d)), (t = !0)), u && ((l = h(l, d)), (t = !0)), t)) {
              var p = (l = y.EditorState.forceSelection(l, a)).getCurrentContent()
              ;(p = (p = p.set('selectionBefore', i)).set('selectionAfter', o)),
                (l = y.EditorState.set(e, { allowUndo: !0, currentContent: p }))
            }
            return l
          },
        })
    },
    keCP: function (e, n, t) {
      'use strict'
      t('OZaJ')
      var r = t('VrFO'),
        a = t.n(r),
        l = t('Y9Ll'),
        i = t.n(l),
        o = t('1Pcy'),
        s = t.n(o),
        c = t('5Yy7'),
        u = t.n(c),
        d = t('N+ot'),
        p = t.n(d),
        f = t('AuHH'),
        y = t.n(f),
        g = t('KEM+'),
        m = t.n(g),
        h = t('97Jx'),
        v = t.n(h),
        k = (t('2G9S'), t('jwue'), t('+oxZ'), t('MvUL'), t('KqXw'), t('SV7d')),
        b = t('rHpw'),
        C = 'singleline',
        _ = function (e) {
          var n = e.placeholderTextColor,
            t = void 0 === n ? b.a.theme.colors.gray700 : n,
            r = b.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(t, ';\n            padding-bottom: ')
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              t,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              C,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              C,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        S = t('ERkP'),
        E = t.n(S),
        T = t('k/Ka'),
        w = t('PxJJ'),
        K = t('w9LO'),
        F = t('fs1G'),
        x = (t('aWzz'), t('zpdM'))
      function O(e) {
        var n = (function () {
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
          var t,
            r = y()(e)
          if (n) {
            var a = y()(this).constructor
            t = Reflect.construct(r, arguments, a)
          } else t = r.apply(this, arguments)
          return p()(this, t)
        }
      }
      var D = function (e) {
          return Object(T.a)('div', e)
        },
        L = !1,
        P =
          ((n.a = E.a.forwardRef(function (e, n) {
            var t = k.d()
            return E.a.createElement(
              P,
              v()({}, e, {
                onFocus: function (n) {
                  e.onFocus && e.onFocus(n), t('focus')
                },
                ref: n,
              }),
            )
          })),
          (function (e) {
            u()(t, e)
            var n = O(t)
            function t() {
              var e
              a()(this, t)
              for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i]
              return (
                (e = n.call.apply(n, [this].concat(l))),
                m()(s()(e), '_setSelectionToStart', function () {
                  var n = e.props.editorState,
                    t = n.getCurrentContent().getFirstBlock().getKey()
                  return x.EditorState.acceptSelection(
                    n,
                    new x.SelectionState({
                      anchorKey: t,
                      anchorOffset: 0,
                      focusKey: t,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                m()(s()(e), '_setFocusToStart', function () {
                  var n = e._setSelectionToStart()
                  return x.EditorState.forceSelection(n, n.getSelection())
                }),
                m()(s()(e), '_setFocusToEnd', function () {
                  var n = e.props,
                    t = n.autoFocus,
                    r = n.editorState,
                    a = n.onChange
                  t
                    ? null == a || a(x.EditorState.moveFocusToEnd(r))
                    : null == a || a(x.EditorState.moveSelectionToEnd(r))
                }),
                m()(s()(e), '_setDraftJsStyle', function () {
                  var n = e.props.placeholderTextColor,
                    t = document.createElement('style')
                  t.innerHTML = _({ placeholderTextColor: n })
                  var r = document.head
                  r && r.insertBefore(t, r.firstChild)
                }),
                m()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                m()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                m()(s()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                m()(s()(e), 'getOffsetHeight', function () {
                  var n = (e._editor || {}).editor
                  return (n && n.offsetHeight) || 0
                }),
                m()(s()(e), '_setEditorRef', function (n) {
                  e._editor = n
                }),
                m()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                m()(s()(e), '_onPastedFiles', function (n) {
                  var t = e.props.onFilesAdded,
                    r = []
                  return (
                    n.forEach(function (e) {
                      e instanceof File && r.push(e)
                    }),
                    r.length && (null == t ? void 0 : t(r)) ? 'handled' : 'not-handled'
                  )
                }),
                m()(s()(e), '_onPastedText', function (n, t, r) {
                  var a = e.props,
                    l = a.multiline,
                    i = a.onChange
                  return !l && i
                    ? (i(
                        x.EditorState.push(
                          r,
                          x.Modifier.replaceText(r.getCurrentContent(), r.getSelection(), n.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                m()(s()(e), '_myKeyBindingFn', function (n) {
                  var t = e.props,
                    r = t.dismissComposerCommandName,
                    a = t.sendTweetCommandName,
                    l = x.KeyBindingUtil.hasCommandModifier
                  return 13 === n.keyCode && l(n) ? a : 27 === n.keyCode ? r : Object(x.getDefaultKeyBinding)(n)
                }),
                m()(s()(e), '_onKeyCommand', function (n) {
                  var t = e.props.keyCommandHandlers,
                    r = t && t[n]
                  return r ? (r(), 'handled') : 'not-handled'
                }),
                m()(s()(e), '_onSingleLineReturn', function (n, t) {
                  var r = e.props.handleReturn
                  return null == r || r(n, t), 'handled'
                }),
                m()(s()(e), '_getContainerStyle', function () {
                  var n = e.props,
                    t = n.appTextSize,
                    r = n.maxNumberOfLines,
                    a = n.multiline,
                    l = n.numberOfLines,
                    i =
                      b.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[t]
                      ]
                  return { minHeight: (a && l ? l : 1) * i, maxHeight: (a && r ? r : 1) * i }
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
                        L || (this._setDraftJsStyle(), (L = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      w.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        n = this.props,
                        t = n.ariaActiveDescendant,
                        r = n.ariaAutocomplete,
                        a = n.ariaControls,
                        l = n.ariaLabel,
                        i = n.blockRenderMap,
                        o = n.blockRendererFn,
                        s = n.editorState,
                        c = n.handleReturn,
                        u = n.multiline,
                        d = n.onChange,
                        p = n.onFocus,
                        f = n.onKeyDown,
                        y = n.onKeyPress,
                        g = n.onKeyUp,
                        h = n.placeholder,
                        v = n.spellCheck,
                        k = n.stripPastedStyles,
                        _ = n.style,
                        S = n.testID
                      return E.a.createElement(
                        D,
                        {
                          className: u ? void 0 : C,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), _],
                        },
                        E.a.createElement(x.Editor, {
                          ariaActiveDescendantID: t,
                          ariaAutoComplete: r,
                          ariaControls: a,
                          ariaLabel: l,
                          ariaMultiline: u,
                          blockRenderMap: i,
                          blockRendererFn: o,
                          customAttrs:
                            ((e = {}),
                            m()(e, K.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            m()(e, 'onKeyPress', y),
                            m()(e, 'onKeyUp', g),
                            e),
                          customStyleMap: R(b.a.theme),
                          editorState: s,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: f,
                          placeholder: h,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== v,
                          stripPastedStyles: k,
                          tabIndex: 0,
                          webDriverTestID: S,
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
          })(E.a.Component))
      m()(P, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: F.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        stripPastedStyles: !0,
      }),
        (P.propTypes = {})
      var R = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    n0Rl: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return N
      })
      t('OZaJ')
      var r = t('ddV6'),
        a = t.n(r),
        l = t('VrFO'),
        i = t.n(l),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        d = t('5Yy7'),
        p = t.n(d),
        f = t('N+ot'),
        y = t.n(f),
        g = t('AuHH'),
        m = t.n(g),
        h = t('KEM+'),
        v = t.n(h),
        k = (t('2G9S'), t('ZUdG'), t('7x/C'), t('87if'), t('lTEL'), t('kYxP'), t('ERkP')),
        b = t.n(k),
        C = t('pXBW'),
        _ = t('6/RC'),
        S = t('UIzd'),
        E = t.n(S),
        T = t('kGix')
      t.d(n, 'a', function () {
        return T.a
      })
      var w = t('fs1G'),
        K = t('0KEI'),
        F = t('lU4h'),
        x = t.n(F),
        O = t('21nk'),
        D = t.n(O),
        L = t('bCEw'),
        P = t.n(L),
        R = t('Ud88'),
        I = t.n(R)
      function M(e) {
        var n = (function () {
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
          var t,
            r = m()(e)
          if (n) {
            var a = m()(this).constructor
            t = Reflect.construct(r, arguments, a)
          } else t = r.apply(this, arguments)
          return y()(this, t)
        }
      }
      var B = function (e) {
          return (0, e.render)({ fetchStatus: T.a.LOADING, data: null, error: null, retry: w.a })
        },
        j = (function (e) {
          p()(t, e)
          var n = M(t)
          function t() {
            var e
            i()(this, t)
            for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l]
            return (e = n.call.apply(n, [this].concat(a))), v()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              t,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, n) {
                    if (!(e instanceof C.a)) throw e
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
        })(b.a.Component),
        A = function (e) {
          var n = e.query,
            t = e.queryRef,
            r = e.render,
            a = D()(n, t)
          return r({ fetchStatus: T.a.LOADED, data: a, error: null, retry: w.a })
        },
        N = function (e, n) {
          if (_.canUseDOM)
            return function (t) {
              var r = t.fetchPolicy,
                l = void 0 === r ? 'store-or-network' : r,
                i = t.render,
                o = t.variables,
                s = P()(e),
                c = a()(s, 2),
                u = c[0],
                d = c[1],
                p = Object(K.useCreateLocalApiErrorHandler)(n.errorConfig.context),
                f = x()(o),
                y = a()(f, 1)[0],
                g = b.a.useCallback(
                  function () {
                    d(y, { fetchPolicy: 'network-only' })
                  },
                  [d, y],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    d(y, { fetchPolicy: l })
                  },
                  [l, d, y],
                ),
                u
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(B, { render: i }) },
                      b.a.createElement(
                        j,
                        { errorHandler: p(n.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (n, t) {
                          return n
                            ? i({ fetchStatus: T.a.FAILED, error: n, data: null, retry: t })
                            : b.a.createElement(A, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var t = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var l = r.render,
              i = r.variables,
              o = I()(),
              s = Object(K.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              c = x()(i),
              u = a()(c, 1)[0],
              d = t.get(o)
            if (d) return d
            var p = b.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return l({ fetchStatus: T.a.LOADED, data: e, error: null, retry: w.a })
                  },
                  function (e) {
                    return e instanceof C.a
                      ? (s(n.errorConfig.options || {})(e),
                        l({ fetchStatus: T.a.FAILED, data: null, error: e, retry: w.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: t.set(o, e).get.bind(t, o) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(p, null))
          }
        }
    },
    uwR9: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return u
        })
      var r = t('97Jx'),
        a = t.n(r),
        l = t('ERkP'),
        i = t.n(l),
        o = t('/FNr'),
        s = t('Rk1B'),
        c = t('RH6X')
      function u(e) {
        return i.a.createElement(s.default, null, function (n) {
          var t = n.richTextInputContext
          n.typeaheadWrapper
          return i.a.createElement(o.default, a()({}, e, { richTextInputContext: t, typeaheadWrapper: c.a }))
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
