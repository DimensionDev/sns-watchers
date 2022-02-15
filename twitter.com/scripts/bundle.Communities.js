;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'screen_EditMembershipType_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'membership_settings',
              plural: !1,
              selections: [
                {
                  kind: 'InlineDataFragmentSpread',
                  name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (a = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      ],
                      type: 'CommunityOpenMembershipSettings',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        a,
                        { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'join_approval_policy',
                          storageKey: null,
                        },
                      ],
                      type: 'CommunityRestrictedMembershipSettings',
                      abstractKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = r)
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        l = n('yLYC'),
        i = n('Ud88'),
        o = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var c,
          m = i(),
          d = t.fetchKey,
          y = t.fetchPolicy,
          p = t.source,
          g = t.variables,
          f = t.networkCacheConfig,
          b = l(e, g, f)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && a(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: s(m, b.request.identifier, function () {
                return m === t.environment && null != p
                  ? m.executeWithSource({ operation: b, source: p })
                  : m.execute({ operation: b })
              }),
              fetchPolicy: y,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(m, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && m === t.environment ? p.ifEmpty(h) : (t.environment, h),
            fetchKey: d,
            fetchPolicy: y,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        l = a.useRef
      e.exports = function () {
        var e = l(!0)
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
    '2fn4': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityDescriptionToggleQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionToggle_community' }],
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
            name: 'CommunityDescriptionToggleQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '-6vJGc53mXOIPSWTq8JgMw',
            metadata: {},
            name: 'CommunityDescriptionToggleQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(l.hash = '05581b25a196bea06f3f6c130610a5b9'), (t.default = l)
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('fyvP'),
        i = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(o.a, { style: c.root }, r.a.createElement(l.a, e))
      }
      var c = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return d
        })
      var a = n('ERkP'),
        r = n.n(a),
        l = n('3XMw'),
        i = n.n(l),
        o = n('mw9i'),
        c = n('FIs5'),
        s = n('rHpw'),
        u = i.a.c2117be6,
        m = i.a.c2c4dad3
      function d() {
        return r.a.createElement(o.a, { style: y.root }, r.a.createElement(c.a, { header: u, message: m }))
      }
      var y = s.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    '8vG3': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'cell_CommunityJoinRequest',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
            { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'UserCommunityRelationship',
              kind: 'LinkedField',
              name: 'user_relationship',
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
                        { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                        {
                          kind: 'InlineFragment',
                          selections: [
                            (a = {
                              alias: 'id_str',
                              args: null,
                              kind: 'ScalarField',
                              name: 'rest_id',
                              storageKey: null,
                            }),
                            {
                              alias: null,
                              args: null,
                              concreteType: 'ApiUser',
                              kind: 'LinkedField',
                              name: 'legacy',
                              plural: !1,
                              selections: [
                                { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
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
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'Community',
                  kind: 'LinkedField',
                  name: 'community',
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'CommunityJoinRequestActions',
              kind: 'LinkedField',
              name: 'actions',
              plural: !1,
              selections: [{ args: null, kind: 'FragmentSpread', name: 'controls_CommunityJoinRequestActions' }],
              storageKey: null,
            },
          ],
          type: 'CommunityJoinRequest',
          abstractKey: null,
        }
      ;(r.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (t.default = r)
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        r = n('ERkP'),
        l = n('Ud88'),
        i = n('K1lQ').commitMutation,
        o = r.useState,
        c = r.useEffect,
        s = r.useRef,
        u = r.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = l(),
          r = m(),
          d = s(n),
          y = s(e),
          p = s(new Set()),
          g = o(!1),
          f = g[0],
          b = g[1],
          h = u(
            function (t) {
              d.current === n && y.current === e && (p.current.delete(t), r.current && b(p.current.size > 0))
            },
            [n, r, e],
          )
        c(
          function () {
            ;(d.current === n && y.current === e) ||
              ((p.current = new Set()), r.current && b(!1), (d.current = n), (y.current = e))
          },
          [n, r, e],
        )
        var v = u(
          function (l) {
            var i = t(
              n,
              (0, a.default)(
                (0, a.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    h(i), l.onCompleted && l.onCompleted(e, t)
                  },
                  onError: function (e) {
                    h(i), l.onError && l.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(i), l.onUnsubscribe && l.onUnsubscribe()
                  },
                },
              ),
            )
            return p.current.add(i), r.current && b(!0), i
          },
          [h, t, n, r, e],
        )
        return [v, f]
      }
    },
    AfjF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n('ERkP'),
        r = n.n(a),
        l = n('eb3s'),
        i = n('3XMw'),
        o = n.n(i),
        c = o.a.d45ae5e0,
        s = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return r.a.createElement(l.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: c,
            onCancel: t,
            onConfirm: n,
            text: s,
          })
        }
    },
    BX8b: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityRules_community',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [
                a,
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (t.default = r)
    },
    Bg9b: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.498 6.008c-.02-.718-.537-1.326-1.24-1.447-4.102-.626-8.048-3.065-8.468-3.328-.44-.293-1.074-.324-1.572 0-.04.02-4.19 2.672-8.497 3.33-.683.12-1.2.728-1.22 1.467 0 .495.03 12.174 9.933 16.85.195.08.39.12.566.12.243 0 .458-.07.595-.132 10.118-4.776 9.913-16.79 9.903-16.86zm-11.23 15.1C2.984 16.634 2.964 6.484 2.944 6.058c3.516-.535 6.876-2.286 8.32-3.106v18.156h.002zm1.464 0V2.952c1.465.84 4.815 2.58 8.302 3.117 0 .1.214 10.453-8.302 15.038z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    C2fM: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'userId' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'actions_denyMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (s = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestDenyError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      c,
                    ],
                    type: 'CommunityJoinRequestDenyActionUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'actions_denyMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  l,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserCommunityRelationship',
                        kind: 'LinkedField',
                        name: 'user_relationship',
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
                                  l,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      (m = {
                                        alias: 'id_str',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'rest_id',
                                        storageKey: null,
                                      }),
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
                                            name: 'blocking',
                                            storageKey: null,
                                          },
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
                                            name: 'followed_by',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'following',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'muting',
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
                                            name: 'profile_image_url_https',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'screen_name',
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
                                      i,
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
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Community',
                            kind: 'LinkedField',
                            name: 'community',
                            plural: !1,
                            selections: [m, i],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'CommunityJoinRequestActions',
                        kind: 'LinkedField',
                        name: 'actions',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_approve_action_result',
                            plural: !1,
                            selections: (d = [l]),
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_deny_action_result',
                            plural: !1,
                            selections: d,
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  s,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'eV-2ywBT5uEdZDAXMx4imQ',
            metadata: {},
            name: 'actions_denyMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '462f05b8723504fff0bc89e5e613060e'), (t.default = y)
    },
    DCZs: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityTheme_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '8e7a3fa0cf4dcd04e0d8c3c8397e274b',
      }
      t.default = a
    },
    'DV/y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityInviteScreen', function () {
          return ae
        })
      var a = n('KEM+'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = n('ddV6'),
        c = n.n(o),
        s = (n('KqXw'), n('WNMA'), n('LW0h'), n('7x/C'), n('z84I'), n('1Iuc'), n('ERkP')),
        u = n.n(s),
        m = n('+Kfv'),
        d = n('eSoz'),
        y = n('rxPX'),
        p = n('0KEI'),
        g = function (e, t) {
          var n = t.match.params.communityId
          return n ? d.c.select(e, n) : void 0
        },
        f = Object(y.a)()
          .propsFromState(function () {
            return { community: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_INVITE_SCREEN',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'invite' }),
        b = n('jHSc'),
        h = n('3XMw'),
        v = n.n(h),
        _ = n('/yvb'),
        E = (n('2G9S'), n('KhuB')),
        k = n('li/m'),
        C = function (e, t) {
          return t.communityId && t.userId ? E.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        },
        S = Object(y.a)()
          .propsFromState(function () {
            return { inviteActionResult: C }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: k.a,
            }
          }),
        I = v.a.cd133485,
        F = v.a.hb1e378e,
        w = v.a.bcd6bb0d,
        T = 'primaryFilled',
        K = { viewType: 'invite' }
      var M = S(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            a = e.inviteActionResult,
            r = e.inviteToCommunity,
            l = e.onInvite,
            i = e.onInviteActionResultChange,
            o = e.userId,
            c = e.viewerInvited,
            s = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return I
              switch (e.reason) {
                case 'UserIsMember':
                  return w
                case 'UserIsInvited':
                  return F
                default:
                  return I
              }
            })(a),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return T
              switch (e.reason) {
                case 'UserIsMember':
                  return T
                default:
                  return 'primaryOutlined'
              }
            })(a)
          u.a.useEffect(
            function () {
              a && i(o, a)
            },
            [a, o, i],
          )
          var d = 'UserCommunityInviteAction' === (null == a ? void 0 : a.__typename)
          return !d && !c
            ? null
            : u.a.createElement(
                _.a,
                {
                  accessibilityLabel: s,
                  behavioralEventContext: K,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      r(t, o)
                        .then(function () {
                          return l && l(o)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                s,
              )
        }),
        R = n('5FtR'),
        x = n('4e/K'),
        L = n('MWbm'),
        O = n('4zmP'),
        A = n('t62R'),
        j = n('FIs5'),
        N = n('rHpw'),
        P = n('GZwR'),
        H = v.a.b139b549,
        B = v.a.dfddd842,
        D = v.a.cf4898a0,
        U = v.a.a3b3939a,
        V = v.a.db4f0cc9,
        z = v.a.h252ede6,
        q = v.a.a5cd93f9,
        W = v.a.ba5a88e3,
        Q = v.a.i6568549,
        X = v.a.b772cd65,
        J = v.a.b4f16d00,
        G = v.a.ja1387a7,
        Y = v.a.b92a21d8,
        Z = v.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        te = [P.a.CommunityUsers],
        ne = { viewType: 'community' }
      function ae(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = (t || {}).invites_result,
          o = e.match.params.communityId || '',
          s = u.a.useState(''),
          d = c()(s, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState({}),
          f = c()(g, 2),
          h = f[0],
          v = f[1],
          E = u.a.useState({}),
          k = c()(E, 2),
          C = k[0],
          S = k[1]
        u.a.useEffect(
          function () {
            o && a(o).catch(n())
          },
          [o, n, a],
        )
        var I,
          F,
          w = u.a.useMemo(
            function () {
              return y.length > 0 || !t
                ? ee
                : 'CommunityInvites' === l.__typename
                ? l.users_to_invite_slice.items.map(P.g).filter(Boolean)
                : ee
            },
            [t, l, y.length],
          ),
          T = u.a.useCallback(
            function (e, t) {
              v(function (n) {
                return i()(i()({}, n), {}, r()({}, e, t))
              })
            },
            [v],
          ),
          K = u.a.useCallback(
            function (e) {
              S(function (t) {
                return i()(i()({}, t), {}, r()({}, e, !0))
              })
            },
            [S],
          ),
          N = o
            ? u.a.createElement(R.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(R.a, { to: '/' }),
          ae = u.a.createElement(
            _.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            X,
          )
        return 'CommunityInvitesUnavailable' === (null == l ? void 0 : l.__typename)
          ? N
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ne },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: B, title: H },
                ((I = (null == l ? void 0 : l.remaining_invite_count) || 0),
                (F = I > 999),
                'CommunityInvites' === (null == l ? void 0 : l.__typename) &&
                  !F &&
                  u.a.createElement(
                    L.a,
                    { style: re.callout },
                    u.a.createElement(O.a, { text: Q({ remaining_invite_count: I }) }),
                  )),
                u.a.createElement(x.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: te,
                  getItemDisabledMessage: function (e) {
                    var t
                    if ('user' === e.type) {
                      var n = e.data,
                        a = n.id_str,
                        r = n.screen_name,
                        l = h[a]
                      if ('UserCommunityInviteActionUnavailable' === (null == l ? void 0 : l.__typename))
                        switch (l.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: r })
                          case 'UserIsMember':
                            return V({ screen_name: r })
                          case 'ViewerOutOfInvites':
                            return z
                          default:
                            return null !== (t = l.message) && void 0 !== t ? t : q({ screen_name: r })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var t = e.data.id_str,
                        n = h[t]
                      return !C[t] && 'UserCommunityInviteAction' !== (null == n ? void 0 : n.__typename)
                    }
                    return !0
                  },
                  injectedItems: w,
                  inputStyle: re.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: D,
                  renderEmptyState: function () {
                    return u.a.createElement(j.a, { header: J, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        L.a,
                        { style: re.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, W),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return u.a.createElement(j.a, { header: Y({ query: y }), message: Z })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return u.a.createElement(M, {
                      communityId: o,
                      onInvite: K,
                      onInviteActionResultChange: T,
                      userId: t,
                      viewerInvited: C[t],
                    })
                  },
                  rounded: !0,
                  shouldAutoFocus: !0,
                  shouldFocusOnClear: !0,
                  source: P.d.CommunityInvites,
                  style: re.input,
                }),
              ),
            )
      }
      var re = N.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        le = f(ae)
      t.default = le
    },
    'Dm5+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'userId' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'actions_approveMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (s = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestApproveError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      c,
                    ],
                    type: 'CommunityJoinRequestApproveActionUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'actions_approveMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  l,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserCommunityRelationship',
                        kind: 'LinkedField',
                        name: 'user_relationship',
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
                                  l,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      (m = {
                                        alias: 'id_str',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'rest_id',
                                        storageKey: null,
                                      }),
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
                                            name: 'blocking',
                                            storageKey: null,
                                          },
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
                                            name: 'followed_by',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'following',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'muting',
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
                                            name: 'profile_image_url_https',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'screen_name',
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
                                      i,
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
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Community',
                            kind: 'LinkedField',
                            name: 'community',
                            plural: !1,
                            selections: [m, i],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'CommunityJoinRequestActions',
                        kind: 'LinkedField',
                        name: 'actions',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_approve_action_result',
                            plural: !1,
                            selections: (d = [l]),
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_deny_action_result',
                            plural: !1,
                            selections: d,
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  s,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '1-KLiiXail72ZPMMpQUGHA',
            metadata: {},
            name: 'actions_approveMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '168a26932d6677cab856ee45e7245b7b'), (t.default = y)
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var a = n('VrFO'),
        r = n.n(a),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        g = n('ERkP'),
        f = n.n(g),
        b = n('jtO7'),
        h = n('eb3s'),
        v = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(c()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              p()(c()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              p()(c()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    l = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(b.a, { align: t, color: n, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? f.a.createElement(h.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: l,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: i,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(v, 'defaultProps', { color: 'red500', align: 'center' })
    },
    Eh7u: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityFacePile_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'UserResults',
              kind: 'LinkedField',
              name: 'members_facepile_results',
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'result',
                  plural: !1,
                  selections: [
                    (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                              name: 'profile_image_url_https',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: 'User',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (l = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                        {
                          alias: null,
                          args: null,
                          concreteType: 'TimelineRichText',
                          kind: 'LinkedField',
                          name: 'unavailable_message',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'alignment', storageKey: null },
                            {
                              alias: null,
                              args: null,
                              concreteType: 'TimelineRichTextEntity',
                              kind: 'LinkedField',
                              name: 'entities',
                              plural: !0,
                              selections: [
                                {
                                  alias: 'fromIndex',
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'from_index',
                                  storageKey: null,
                                },
                                {
                                  alias: 'toIndex',
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'to_index',
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'format', storageKey: null },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'ref',
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: 'type',
                                      args: null,
                                      kind: 'ScalarField',
                                      name: '__typename',
                                      storageKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: (o = [
                                        (i = {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'text',
                                          storageKey: null,
                                        }),
                                      ]),
                                      type: 'TimelineRichTextCashtag',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                                        (c = {
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
                                      kind: 'InlineFragment',
                                      selections: [
                                        c,
                                        {
                                          alias: 'urlType',
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'url_type',
                                          storageKey: null,
                                        },
                                        {
                                          alias: 'urtEndpointOptions',
                                          args: null,
                                          concreteType: 'TimelineUrtEndpointOptions',
                                          kind: 'LinkedField',
                                          name: 'urt_endpoint_options',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: 'cacheId',
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'cache_id',
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
                                              kind: 'ScalarField',
                                              name: 'title',
                                              storageKey: null,
                                            },
                                            {
                                              alias: 'requestParams',
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
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: 'TimelineUrl',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        (m = {
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
                                                r,
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
                                                        (s = {
                                                          alias: null,
                                                          args: null,
                                                          kind: 'ScalarField',
                                                          name: 'screen_name',
                                                          storageKey: null,
                                                        }),
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    a,
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    (u = {
                                                      alias: 'reason',
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'unavailable_reason',
                                                      storageKey: null,
                                                    }),
                                                    l,
                                                  ],
                                                  type: 'UserUnavailable',
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        }),
                                      ],
                                      type: 'TimelineRichTextUser',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [s, m],
                                      type: 'TimelineRichTextMention',
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            { alias: null, args: null, kind: 'ScalarField', name: 'rtl', storageKey: null },
                            i,
                          ],
                          storageKey: null,
                        },
                        u,
                      ],
                      type: 'UserUnavailable',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'CommunityMemberCount_community' },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(d.hash = 'e2457666463c59c1a72f329db4ba964b'), (t.default = d)
    },
    FSMj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolsPeopleScreen', function () {
          return _
        })
      n('vrRf')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('XtoV'),
        i = n('rxPX'),
        o = Object(i.a)().withAnalytics({ page: 'communities', section: 'people' }),
        c = n('3XMw'),
        s = n.n(c),
        u = n('gDCe'),
        m = n('yoO3'),
        d = n('k/OQ'),
        y = n('mWs5'),
        p = n('MWbm'),
        g = n('krnS'),
        f = n('zCf4'),
        b = s.a.dc6ce7b4,
        h = s.a.f8321d82,
        v = s.a.ga2aa43c,
        _ = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.location,
            i = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            o = i ? h : v,
            c = r.a.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: a.state },
                        label: h,
                        key: h,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: a.state },
                        label: v,
                        key: v,
                      },
                    ]
                  : []
                return r.a.createElement(d.a, { accessibilityLabel: o, links: e })
              },
              [n, o, a],
            )
          return r.a.createElement(
            m.a,
            null,
            r.a.createElement(
              y.a,
              { communityId: t.id_str, rightControl: i ? r.a.createElement(l.a, { community: t }) : void 0, title: b },
              r.a.createElement(
                p.a,
                null,
                c,
                r.a.createElement(
                  f.d,
                  null,
                  r.a.createElement(
                    f.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                    r.a.createElement(g.b, {
                      communityId: t.id_str,
                      mode: g.a.Members,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                  r.a.createElement(
                    f.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                    r.a.createElement(u.a, { community: t }),
                    r.a.createElement(g.b, {
                      communityId: t.id_str,
                      mode: g.a.Moderators,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                ),
              ),
            ),
          )
        }
      t.default = o(_)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return X
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return J
        })
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = (n('yH/f'), n('KqXw'), n('WNMA'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('+Kfv'),
        m = n('es0u'),
        d = (n('ZVkB'), n('ulNE'), n('urw/'), n('jQ3i'), n('x4t0'), n('eSoz')),
        y = n('XOJV'),
        p = n('G6rE'),
        g = n('rxPX'),
        f = function (e, t) {
          var n = t.match.params.tweetId
          return n ? y.a.selectHydrated(e, n) : void 0
        },
        b = function (e, t) {
          var n = t.match.params
          return Object.entries(n).flat().includes('tweetId') ? X.HiddenTweet : X.RemovedMember
        },
        h = function (e, t) {
          if (b(0, t) === X.HiddenTweet) {
            var n,
              a = t.match.params.tweetId,
              r = a ? y.a.selectHydrated(e, a) : void 0,
              l = null == r || null === (n = r.community_relationship) || void 0 === n ? void 0 : n.community
            return l ? d.c.select(e, l) : void 0
          }
          var i = t.match.params.communityId
          return i ? d.c.select(e, i) : void 0
        },
        v = function (e, t) {
          if (b(0, t) === X.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? y.a.selectFetchStatus(e, n) : void 0
          }
          var a = t.match.params.communityId
          return a ? d.c.selectFetchStatus(e, a) : void 0
        },
        _ = Object(g.a)()
          .propsFromState(function () {
            return { community: h, fetchStatus: v, loggedInUser: p.e.selectLoggedInUser, tweet: f, type: b }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: y.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        E = (n('ho0z'), n('PKbs')),
        k = n('egQk'),
        C = n('3XMw'),
        S = n.n(C),
        I = n('/de5'),
        F = n('b5s6'),
        w = n('MWbm'),
        T = n('X00g'),
        K = n('t62R'),
        M = n('4zmP'),
        R = n('0yYu'),
        x = n('6vad'),
        L = n('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        N = S.a.icc32e3d,
        P = T.a.getCommunityTheme('Default'),
        H = L.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: L.a.theme.colors.gray50,
              borderRadius: L.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: L.a.theme.spacesPx.space16,
              marginBottom: L.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: L.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        B = function (e) {
          var t,
            n = e.community,
            a = e.history,
            r = e.location,
            l = e.match,
            i = e.tweet,
            o = e.type,
            s = { history: a, location: r, match: l },
            u = null == i ? void 0 : i.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case X.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case X.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === t
                ? void 0
                : t.name) || '',
            y = null == n ? void 0 : n.name,
            p = null == n ? void 0 : n.rules,
            g = (null == n ? void 0 : n.theme) || P,
            f = T.a.getCommunityUIColorName(g),
            b = Object(k.a)({ communityName: y })
          return g && null != p && p.length
            ? c.a.createElement(
                w.a,
                { style: H.tweetInfo },
                c.a.createElement(
                  w.a,
                  { style: H.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case X.HiddenTweet:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { color: f, size: 'subtext1', style: H.communityTitle, weight: 'bold' },
                            y,
                          ),
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: [H.titleText, H.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          c.a.createElement(F.a, {
                            style: H.tweetContainer,
                            tweetId: null == i ? void 0 : i.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          c.a.createElement(M.a, { headline: A, text: d }),
                          c.a.createElement(K.b, { style: H.helpText }, j),
                        )
                      case X.RemovedMember:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: H.titleText, weight: 'heavy' },
                            N({ communityName: y }),
                          ),
                          c.a.createElement(
                            w.a,
                            { style: H.removedMemberReason },
                            c.a.createElement(K.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                c.a.createElement(R.a, null),
                c.a.createElement(x.b, { text: b }),
                c.a.createElement(E.b, {
                  badgeStyle: H.badges,
                  ruleContainerStyle: H.rules,
                  rules: p,
                  theme: g,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : c.a.createElement(I.b, s)
        },
        D = n('G1WX'),
        U = n('yoO3'),
        V = n('VS6U'),
        z = n('0KEI'),
        q = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        W = S.a.jf99d610,
        Q = { viewType: 'community' },
        X = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function J(e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          a = e.fetchCommunity,
          l = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          g = i()(e, q),
          f = function (e) {
            var t, a
            switch (e) {
              case X.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == y ? void 0 : y.user.id_str)),
                  _handleRetry: k,
                  shouldRenderFeedback: Boolean(
                    null == y || null === (t = y.community_relationship) || void 0 === t
                      ? void 0
                      : t.moderation_state.rule,
                  ),
                }
              case X.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == n ? void 0 : n.viewerViolatedRule)),
                  _handleRetry: C,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == n || null === (a = n.viewer_relationship) || void 0 === a
                        ? void 0
                        : a.moderation_state.__typename),
                  ),
                }
              default:
                return {}
            }
          },
          b = e.match.params,
          h = b.communityId,
          v = b.tweetId,
          _ = Object(z.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          E = Object(z.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          k = c.a.useEffect(
            function () {
              v && o(v).catch(_)
            },
            [_, o, v],
          ),
          C = c.a.useEffect(
            function () {
              h && a(h).catch(E)
            },
            [h, E, a],
          ),
          S = c.a.createElement(I.b, g)
        return c.a.createElement(D.a, {
          fetchStatus: l,
          onRequestRetry: f(p)._handleRetry,
          render: function () {
            var n = f(p),
              a = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              l = n.isAuthorizedViewer,
              i = n.shouldRenderFeedback
            return l && t
              ? c.a.createElement(
                  u.a,
                  { behavioralEventContext: Q },
                  i
                    ? c.a.createElement(
                        U.a,
                        { behavioralEventViewType: a },
                        c.a.createElement(V.a, {
                          backLocation: '/notifications',
                          history: g.history,
                          primaryContent: c.a.createElement(B, r()({}, e, { type: p })),
                          sidebarContent: c.a.createElement(m.a, null),
                          title: W,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var G = _(J)
      t.default = G
    },
    Jt8P: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'list_communityJoinRequestsSlice',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'CommunityJoinRequest',
            kind: 'LinkedField',
            name: 'items',
            plural: !0,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
              { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
            ],
            storageKey: null,
          },
        ],
        type: 'CommunityJoinRequestsSlice',
        abstractKey: null,
        hash: '53ebb4923797f8ac8a789c20901e1a59',
      }
      t.default = a
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = (n('hBvt'), n('ERkP')),
        i = n.n(l),
        o = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return i.a.createElement(o.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, r()({ isActive: t }, e, { label: i.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        h = n('ERkP'),
        v = n.n(h),
        _ = n('HPNB'),
        E = n('VAZu'),
        k = n('wiP2'),
        C = n('Es6L'),
        S = n('yiKp'),
        I = n.n(S),
        F = n('rHpw'),
        w = F.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I()(I()({}, F.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        T = n('MWbm'),
        K = n('yw4N'),
        M = n('TnY3'),
        R = n('cHvH'),
        x = n('3xLC'),
        L = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        O = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      T.a,
                      { style: w.fill },
                      v.a.createElement(
                        K.a,
                        { style: w.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(R.a, null, function (t) {
                    var n = t.windowWidth
                    return _.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, L))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(k.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    l = n.TeamsSwitcher,
                    i = n.backLocation,
                    o = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    m = n.middleControl,
                    d = n.onBackClick,
                    y = n.rightControl,
                    p = n.screenType,
                    g = n.searchBoxOptions,
                    f = n.secondaryBar,
                    h = n.showSubtitleOnRoot,
                    _ = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    S = n.title,
                    I = n.titleIconCell,
                    F = n.titleIconCellSize,
                    K = n.withDetailOpen,
                    M = n.withSearchBox,
                    R = n.withTweetButton,
                    x = 'root' === p,
                    L = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && _) || (x && h),
                    j = x || (O && t),
                    N = x ? b.c : O ? b.a : void 0,
                    P = v.a.createElement(
                      T.a,
                      { style: w.appBarContainer },
                      v.a.createElement(E.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: j,
                        history: s,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: y,
                        secondaryBar: f,
                        subtitle: A ? C : void 0,
                        title: S,
                        titleDomId: N,
                        titleIconCell: I,
                        titleIconCellSize: F,
                      }),
                    ),
                    H =
                      x || (L && K)
                        ? null
                        : v.a.createElement(k.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: l,
                            backLocation: i,
                            documentTitle: o,
                            headerless: c,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: y,
                            searchBoxOptions: g,
                            subtitle: C,
                            title: S,
                            withSearchBox: M,
                            withTweetButton: R,
                          })
                  return v.a.createElement(v.a.Fragment, null, H, P)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(O, 'contextType', x.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(M.a)(O)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return C
        })
      var a = n('yiKp'),
        r = n.n(a),
        l = n('97Jx'),
        i = n.n(l),
        o = (n('KqXw'), n('WNMA'), n('ho0z'), n('uFXj'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('es0u'),
        m = n('PKbs'),
        d = n('egQk'),
        y = n('1Idg'),
        p = n('eSoz'),
        g = n('rxPX'),
        f = n('0KEI'),
        b = Object(g.a)()
          .propsFromState(function () {
            return { community: y.a, fetchStatus: y.b, isCommunityMember: y.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: p.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        h = n('MDbM'),
        v = n('/de5'),
        _ = n('5FtR'),
        E = n('VS6U'),
        k = n('rHpw'),
        C = function (e) {
          var t = c.a.useContext(s.a).featureSwitches,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            g = e.location,
            f = e.match,
            b = f.params.communityId,
            k = t.isTrue('c9s_participation_enabled')
          c.a.useEffect(function () {
            b && !n && o !== h.a.LOADED && l(b).catch(a())
          })
          var C = c.a.useMemo(
            function () {
              return { selectedCommunityId: b || '', defaultText: '' }
            },
            [b],
          )
          if (n && b) {
            var S = n.name,
              F = n.rules,
              w = n.theme,
              T = {
                composeOptions: C,
                history: y,
                sidebarContent: c.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: k && p,
              }
            if (F.length > 0) {
              var K = c.a.createElement(m.b, {
                badgeStyle: I.badgeStyle,
                headerContainerStyle: I.containerStyle,
                headerExplanationStyle: I.explanationStyle,
                ruleContainerStyle: I.ruleContainerStyle,
                rules: F,
                theme: w,
                withBottomMargin: !0,
              })
              return c.a.createElement(
                E.a,
                i()({}, T, {
                  backLocation: '/i/communities/'.concat(b),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: K,
                }),
              )
            }
            var M = r()(r()({}, T), {}, { title: null }),
              R = c.a.createElement(v.b, { history: y, location: g, match: f })
            return c.a.createElement(E.a, i()({}, M, { primaryContent: R }))
          }
          return o === h.a.LOADED ? c.a.createElement(_.a, { to: '/' }) : null
        },
        S = b(C),
        I =
          ((t.default = S),
          k.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                borderBottomColor: e.colors.gray50,
                borderBottomStyle: 'solid',
                borderBottomWidth: e.borderWidths.small,
              },
              ruleContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
              explanationStyle: { color: e.colors.text },
            }
          }))
    },
    OUEC: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = n('ezF+'),
        c =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(199).then(n.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: n('XBtf').a.Critical,
          }),
        s = o.e(c),
        u = n('QIgh'),
        m = n('8UdT')
      t.a = i()(i()({}, u.b), {}, r()({}, m.b.Community, s))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('3XMw'),
        s = n.n(c),
        u = n('Nh1N'),
        m = n('MWbm'),
        d = n('Ig1G'),
        y = n('4zmP'),
        p = n('p+r5'),
        g = n('rHpw'),
        f = s.a.c66769a3,
        b = s.a.ef02695a,
        h = s.a.ef02695a,
        v = s.a.c824202f,
        _ = s.a.d32cf5e6,
        E = s.a.f8fa00c7,
        k = s.a.fc2a5c92,
        C = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            a = t.getNumberValue('c9s_max_rule_description_length', 160),
            l = e.description,
            c = e.errorText,
            s = e.name,
            g = e.onChange,
            C = i.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 3, n)
              },
              [n],
            ),
            I = i.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 0, a)
              },
              [a],
            ),
            F = i.a.useState(s),
            w = r()(F, 2),
            T = w[0],
            K = w[1],
            M = i.a.useState(C(s)),
            R = r()(M, 2),
            x = R[0],
            L = R[1],
            O = i.a.useState(void 0),
            A = r()(O, 2),
            j = A[0],
            N = A[1],
            P = i.a.useState(l),
            H = r()(P, 2),
            B = H[0],
            D = H[1],
            U = i.a.useState(I(l)),
            V = r()(U, 2),
            z = V[0],
            q = V[1],
            W = i.a.useState(void 0),
            Q = r()(W, 2),
            X = Q[0],
            J = Q[1],
            G = i.a.useState('' !== s),
            Y = r()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = i.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                C(a) && ((t = !0), N(h({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  L(t),
                  K(a),
                  g({ description: B, name: a, valid: !t && !z })
              },
              [n, B, g, z, C],
            ),
            te = i.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                I(n) && ((t = !0), J(E({ maxCharacterCount: a }))),
                  q(t),
                  D(n),
                  g({ name: T, description: n, valid: !t && !x })
              },
              [a, T, g, x, I],
            ),
            ne = x && j ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = z ? void 0 : _({ maxCharacterCount: a }),
            re = c
              ? i.a.createElement(
                  m.a,
                  { style: S.error },
                  i.a.createElement(y.a, { Icon: u.a, headline: k, text: c, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            i.a.Fragment,
            null,
            re,
            i.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: j,
              helperText: ne,
              invalid: x && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: T,
            }),
            i.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: X,
              helperText: ae,
              invalid: z,
              label: v,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: a,
              value: B,
            }),
          )
        },
        S = g.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    PMbW: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'controls_CommunityJoinRequestActions',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'join_request_approve_action_result',
              plural: !1,
              selections: (a = [
                { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              ]),
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'join_request_deny_action_result',
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: 'CommunityJoinRequestActions',
          abstractKey: null,
        }
      ;(r.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (t.default = r)
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'screen_EditMembershipType_community' }],
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
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_approval_policy',
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityRestrictedMembershipSettings',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Ait9u_LZpvdybQ5u8YzViw',
            metadata: {},
            name: 'EditMembershipTypeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(l.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = l)
    },
    Phky: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) {
            var l = n[a].screenName
            t.push(l)
          }
          return t
        })
      var r = a(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA'),
        i = n('xZGM'),
        o = n('ddV6'),
        c = n.n(o),
        s = n('+Kfv'),
        u = n('3XMw'),
        m = n.n(u),
        d = n('feu+'),
        y = n('ii+P'),
        p = m.a.j24c37b2,
        g = function (e) {
          var t = e.Content,
            n = e.actionLabel,
            a = void 0 === n ? p : n,
            l = e.flag,
            i = e.headline,
            o = e.subtext,
            u = e.behavioralEventContext,
            m = e.withCloseButton,
            g = Object(y.a)(l),
            f = c()(g, 2),
            b = f[0],
            h = f[1]
          if (!b) return null
          var v = r.a.createElement(
            d.a,
            {
              actionLabel: a,
              graphicDisplayMode: 'none',
              headline: i,
              onAction: h,
              onClose: h,
              subtext: o,
              withCloseButton: m,
            },
            r.a.createElement(t, null),
          )
          return u ? r.a.createElement(s.a, { behavioralEventContext: u }, v) : v
        },
        f = r.a.memo(g),
        b = n('MWbm'),
        h = n('X00g'),
        v = n('h0NW'),
        _ = n('rHpw'),
        E = n('r9x5'),
        k = n('cOhU'),
        C = n('uCrx'),
        S = m.a.b60e4f77,
        I = m.a.f0fc827d,
        F = m.a.c8e93b51,
        w = m.a.fc5c6913,
        T = m.a.ad211086,
        K = m.a.gf803ba1,
        M = m.a.e92fe01b,
        R = m.a.h3bb8068,
        x = m.a.a709f8f8,
        L = { viewType: 'welcome_education' },
        O = r.a.memo(function (e) {
          var t = e.forSingleCommunity,
            n = r.a.useContext(l.a).featureSwitches,
            a = r.a.useCallback(
              function () {
                var e = n.isTrue('c9s_ui_colors_enabled_rweb') && (null == t ? void 0 : t.theme),
                  a = [A.decorationContainer, e && { color: h.a.getCommunityUIColor(e) }],
                  l = r.a.createElement(E.a, { style: a }),
                  i = r.a.createElement(k.a, { style: a }),
                  o = r.a.createElement(C.a, { style: a })
                return r.a.createElement(
                  b.a,
                  { style: A.infoItemsContainer },
                  r.a.createElement(v.a, {
                    containerStyle: A.itemContainer,
                    items: [
                      { label: w, description: T, decoration: l },
                      { label: K, description: M, decoration: i },
                      { label: R, description: x, decoration: o },
                    ],
                  }),
                )
              },
              [n, t],
            )
          return !1 === (null == t ? void 0 : t.canJoinCommunity)
            ? null
            : r.a.createElement(f, {
                Content: a,
                actionLabel: S,
                behavioralEventContext: L,
                flag: i.i,
                headline: I,
                subtext: F,
                withCloseButton: !t,
              })
        }),
        A = _.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingLeft: 0, paddingRight: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
          }
        })
      t.a = O
    },
    R5kW: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return f
        })
      var a = n('KEM+'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = (n('yH/f'), n('oEOe')),
        c = n('kGix'),
        s = n('Ssj5'),
        u = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, t) {
          return e[u][t]
        },
        y = function (e, t) {
          var n
          return null !== (n = e[u].fetchStatus[t]) && void 0 !== n ? n : c.a.NONE
        },
        p = Object.freeze({ fetchStatus: {} })
      function g(e) {
        return e.meta.communityId
      }
      var f = function (e) {
        return function (t, n, a) {
          var r = a.api
          return o.b(t, { params: { communityId: e }, request: r.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      s.a.register(
        r()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: i()(i()({}, e.fetchStatus), {}, r()({}, g(t), c.a.LOADING)) })
            case m.FAILURE:
              return i()(
                i()({}, e),
                {},
                { fetchStatus: i()(i()({}, e.fetchStatus), {}, r()({}, g(t), c.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return i()(
                  i()({}, e),
                  {},
                  ((n = {}),
                  r()(n, g(t), t.payload),
                  r()(n, 'fetchStatus', i()(i()({}, e.fetchStatus), {}, r()({}, g(t), c.a.LOADED))),
                  r()(n, 'error', null),
                  n),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    ROT1: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = n('nmVb'),
        y = n.n(d),
        p = n('Phky'),
        g = n.n(p),
        f = u.a.h3e55b40,
        b = u.a.dd71d9c9,
        h = u.a.cf65e56a,
        v = u.a.d936eeca,
        _ = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityName,
            l = e.onChange,
            s = i.a.useContext(o.a).featureSwitches,
            u = i.a.useState(!1),
            d = r()(u, 2),
            p = d[0],
            _ = d[1],
            E = i.a.useState(void 0),
            k = r()(E, 2),
            C = k[0],
            S = k[1],
            I = s.getNumberValue('c9s_max_community_name_length', 30),
            F = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.g)(t, 3, I)
                  ? (y()(t).length > 0 || g()(t).length > 0) && ((n = !0), S(v))
                  : ((n = !0), S(h({ minCharacterCount: 3, maxCharacterCount: I }))),
                  _(n),
                  l(t, n)
              },
              [I, l, S],
            ),
            w = b({ minCharacterCount: 3, maxCharacterCount: I })
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: C,
            helperText: w,
            invalid: p,
            label: f,
            name: 'typedCommunityName',
            onChange: F,
            spellCheck: 'false',
            validLength: I,
            value: a,
          })
        }
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              i.a.createElement('path', {
                d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SyZD: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesRouter', function () {
          return D
        })
      var a = n('97Jx'),
        r = n.n(a),
        l = (n('KqXw'), n('WNMA'), n('2G9S'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('Ig1G'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('yoO3'),
        p = n('5FtR'),
        g = n('ddV6'),
        f = n.n(g),
        b = (n('z84I'), n('/yvb')),
        h = n('eSoz'),
        v = n('0KEI'),
        _ = Object(s.a)()
          .propsFromActions(function () {
            return {
              reorderRules: h.c.reorderRules,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        E = n('rHpw'),
        k = E.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        C = n('mWs5'),
        S = n('PKbs'),
        I = d.a.b772cd65,
        F = d.a.gfca5254
      var w = _(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.explanation,
            r = e.history,
            l = e.reorderRules,
            o = t.id_str,
            c = t.rules,
            s = t.theme,
            u = i.a.useState(c),
            m = f()(u, 2),
            d = m[0],
            p = m[1],
            g = i.a.useCallback(
              function (e) {
                p(e)
              },
              [p],
            ),
            h = i.a.useCallback(
              function () {
                var e = n({}),
                  t = d.map(function (e) {
                    return e.rest_id
                  })
                l(o, { ruleIds: t })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, l, r, n],
            ),
            v = i.a.createElement(b.a, { onPress: h, size: 'small', type: 'brandFilled' }, I)
          return i.a.createElement(
            y.a,
            null,
            i.a.createElement(
              C.a,
              { communityId: o, rightControl: v, screenType: 'primaryDetail', title: F },
              i.a.createElement(S.b, {
                badgeStyle: k.badgeStyle,
                displayType: S.a.Reorder,
                explanation: a,
                headerContainerStyle: k.headerContainerStyle,
                onReorder: g,
                ruleContainerStyle: k.ruleContainerStyle,
                rules: d,
                theme: s,
              }),
            ),
          )
        }),
        T = n('MWbm'),
        K = n('mjJ+'),
        M = n('iY63'),
        R = n('ACHU'),
        x = n('zCf4'),
        L = d.a.gfca5254,
        O = d.a.d94edeb4,
        A = d.a.j560c8ea,
        j = d.a.ab8089ea,
        N = d.a.h63a5c3b,
        P = i.a.createElement(M.a, null),
        H = i.a.createElement(R.a, null),
        B = { viewType: 'add' },
        D = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            a = t.isTrue('c9s_rule_editing_enabled'),
            l = t.isTrue('c9s_rule_reordering_enabled'),
            s = e.community,
            u = e.history,
            m = e.match,
            d = s.id_str,
            g = s.role,
            f = s.rules,
            h = s.theme,
            v = m.url,
            _ = g === c.a.Admin,
            E =
              n && _
                ? i.a.createElement(b.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: B,
                    icon: P,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            I = f.length > 1,
            F =
              l && _ && I
                ? i.a.createElement(b.a, {
                    accessibilityLabel: N,
                    icon: H,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: j, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return i.a.createElement(K.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: U.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            M = i.a.createElement(T.a, { style: U.rightControlStyle }, E, F),
            R = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            _ &&
              a &&
              ((R.displayType = S.a.Pivot),
              (R.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            i.a.createElement(
              x.d,
              null,
              i.a.createElement(
                x.b,
                { exact: !0, path: ''.concat(v, '/') },
                i.a.createElement(
                  y.a,
                  null,
                  i.a.createElement(
                    C.a,
                    { communityId: d, rightControl: M, screenType: 'primaryDetail', title: L },
                    i.a.createElement(
                      S.b,
                      r()(
                        {
                          badgeStyle: k.badgeStyle,
                          explanation: O,
                          headerContainerStyle: k.headerContainerStyle,
                          ruleContainerStyle: k.ruleContainerStyle,
                          rules: f,
                          theme: h,
                        },
                        R,
                      ),
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                x.b,
                { exact: !0, path: ''.concat(v, '/reorder') },
                i.a.createElement(w, { community: s, explanation: O, history: u }),
              ),
              i.a.createElement(x.b, null, i.a.createElement(p.a, { to: ''.concat(v, '/') })),
            )
          )
        },
        U = E.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(D)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityTimelineType', function () {
          return Sr
        }),
        n.d(t, 'CommunityScreen', function () {
          return Fr
        })
      var a,
        r,
        l,
        i = n('yiKp'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        u = n('Y9Ll'),
        m = n.n(u),
        d = n('1Pcy'),
        y = n.n(d),
        p = n('5Yy7'),
        g = n.n(p),
        f = n('2VqO'),
        b = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        _ = (n('yH/f'), n('2G9S'), n('KqXw'), n('WNMA'), n('ho0z'), n('ERkP')),
        E = n.n(_),
        k = (n('1t7P'), n('jQ/y'), n('1Idg')),
        C = n('WpDa'),
        S = n('ZNT5'),
        I = n('hqKg'),
        F = n('rxPX'),
        w = function (e, t) {
          return t.communityId
        },
        T = function () {
          return Object(I.createSelector)(w, function (e) {
            return (function (e) {
              return Object(S.a)({
                timelineId: 'communityAbout-'.concat(e),
                getEndpoint: function (e) {
                  return e.Communities.fetchAboutTimeline
                },
                getEndpointParams: function (t) {
                  return { communityId: e }
                },
                context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                perfKey: 'communityAbout',
                formatResponse: C.a,
              })
            })(e)
          })
        },
        K = Object(F.a)()
          .propsFromState(function () {
            return { community: k.a, creator: k.g, aboutModule: T() }
          })
          .withAnalytics({ page: 'community', section: 'about' }),
        M = n('Ig1G'),
        R = n('yoO3'),
        x = n('fTQJ'),
        L = n('n0Rl'),
        O = n('v//M'),
        A = (n('enFi'), n('z84I'), n('PKbs')),
        j = n('3XMw'),
        N = n.n(j),
        P = n('X00g'),
        H = n('jAXQ'),
        B = n.n(H),
        D = function (e) {
          var t = B()(void 0 !== a ? a : (a = n('DCZs')), e),
            r = t.custom_theme,
            l = t.default_theme,
            i = null != r ? r : l
          return E.a.useMemo(
            function () {
              return P.a.getCommunityTheme(i)
            },
            [i],
          )
        },
        U = D,
        V = n('6vad'),
        z = n('rC8y'),
        q = n('0yYu'),
        W = n('rHpw'),
        Q = void 0 !== r ? r : (r = n('BX8b')),
        X = N.a.gfca5254,
        J = N.a.ffd9cfe6,
        G = W.a.create(function (e) {
          return {
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
          }
        }),
        Y = function (e) {
          var t = e.community,
            n = B()(Q, t),
            a = n.rules,
            r = U(n),
            l = E.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : E.a.createElement(
                E.a.Fragment,
                null,
                E.a.createElement(V.b, { text: X }),
                E.a.createElement(A.b, {
                  badgeStyle: G.badgeStyle,
                  headerContainerStyle: [G.containerStyle, G.headingContainerStyle],
                  headerExplanationStyle: G.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: G.ruleContainerStyle,
                  rules: l,
                  theme: r,
                }),
                a.length > 5
                  ? E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(z.a, { link: '/i/communities/'.concat(n.rest_id, '/rules'), text: J }),
                      ' ',
                      E.a.createElement(q.a, null),
                    )
                  : null,
              )
        },
        Z = void 0 !== l ? l : (l = n('sH2E')),
        $ = Object(L.b)(Z, { errorConfig: { context: 'RULES' } }),
        ee = function (e) {
          return E.a.createElement($, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry
              return null != t && t.community
                ? E.a.createElement(O.a, {
                    fetchStatus: n,
                    onRequestRetry: a,
                    render: function () {
                      return E.a.createElement(Y, { community: t.community })
                    },
                  })
                : null
            },
            variables: { communityId: e.communityId },
          })
        },
        te = n('t62R'),
        ne = n('csss'),
        ae = n('h0NW'),
        re = n('jV+4'),
        le = n('v6aA'),
        ie = n('cOhU'),
        oe = n('DlMI'),
        ce = n('Lxak'),
        se = n('a5gf'),
        ue = E.a.createElement(te.b, { weight: 'bold' }),
        me = E.a.createElement(N.a.I18NFormatMessage, { $i18n: 'he99cc29' }, E.a.cloneElement(ue, null, N.a.gedb877c)),
        de = N.a.fcef2921,
        ye = N.a.c93dd2c8,
        pe = N.a.i9028824,
        ge = N.a.cc683fb9,
        fe = N.a.af7c11a9,
        be = N.a.db1b9462,
        he = N.a.ea49402d
      function ve(e) {
        var t = e.date,
          n = e.userName
        return E.a.createElement(N.a.I18NFormatMessage, { $i18n: 'a346641a', date: t }, n)
      }
      var _e = (function (e) {
        g()(n, e)
        var t = b()(n)
        function n() {
          var e
          s()(this, n)
          for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
          return (
            (e = t.call.apply(t, [this].concat(r))),
            v()(y()(e), '_isRequestToJoinEnabled', e.context.featureSwitches.isTrue('c9s_request_to_join_enabled')),
            v()(y()(e), '_getItems', function (t) {
              var n = function (e) {
                  return E.a.createElement(te.b, null, e)
                },
                a = e._getCreationAttribution(),
                r = {
                  CommunityMemberAllowedActions: { decoration: ke, label: n(be) },
                  CommunityOpenMembershipEducation: { decoration: Ce, label: me, description: de },
                  CommunityRestrictedMembershipEducation: { decoration: Ie, label: me, description: ye },
                  CommunityVisibilityEducation: { decoration: Ce, label: n(he) },
                  CreationAttributionEducation: { decoration: Se, label: a },
                },
                l = [r.CommunityMemberAllowedActions]
              return (
                e._isRequestToJoinEnabled
                  ? ('CommunityRestrictedMembershipSettings' === t && l.push(r.CommunityRestrictedMembershipEducation),
                    'CommunityOpenMembershipSettings' === t && l.push(r.CommunityOpenMembershipEducation))
                  : l.push(r.CommunityVisibilityEducation),
                a && l.push(r.CreationAttributionEducation),
                l
              )
            }),
            v()(y()(e), '_renderInfoSection', function () {
              var t = e.props.community,
                n = null == t ? void 0 : t.membership_settings.__typename
              if (t) {
                var a = t.description,
                  r = t.role
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(V.b, { text: fe }),
                  Object(M.f)(r) && a ? E.a.createElement(ne.a, { label: a }) : null,
                  E.a.createElement(ae.a, { containerStyle: Ee.containerStyle, items: e._getItems(n) }),
                  E.a.createElement(q.a, null),
                )
              }
              return null
            }),
            v()(y()(e), '_getCreationAttribution', function () {
              var t = e.props,
                n = t.community,
                a = t.creator
              if (a) {
                var r = null == n ? void 0 : n.created_at,
                  l = null == a ? void 0 : a.screen_name,
                  i = a.verified
                if (r && l) {
                  var o = new Date(r).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' }),
                    c = E.a.createElement(re.a, { isVerified: i, screenName: l, withLink: !0 })
                  return E.a.createElement(te.b, { color: 'gray700' }, E.a.createElement(ve, { date: o, userName: c }))
                }
              }
              return null
            }),
            e
          )
        }
        return (
          m()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.aboutModule,
                  n = e.communityId
                return E.a.createElement(
                  R.a,
                  { behavioralEventViewType: 'about' },
                  this._renderInfoSection(),
                  E.a.createElement(ee, { communityId: n }),
                  ';',
                  E.a.createElement(x.a, { loadingAccessibilityLabel: pe, module: t, title: ge }),
                )
              },
            },
          ]),
          n
        )
      })(E.a.Component)
      v()(_e, 'contextType', le.a)
      var Ee = W.a.create(function (e) {
          return {
            text: { marginVertical: e.spaces.space12 },
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            icon: {
              marginLeft: '6px',
              marginRight: e.spaces.space20,
              color: e.colors.gray700,
              height: e.spaces.space24,
              width: e.spaces.space24,
            },
          }
        }),
        ke = E.a.createElement(ie.a, { style: Ee.icon }),
        Ce = E.a.createElement(oe.a, { style: Ee.icon }),
        Se = E.a.createElement(ce.a, { style: Ee.icon }),
        Ie = E.a.createElement(se.a, { style: Ee.icon }),
        Fe = K(_e),
        we = n('+Kfv'),
        Te = n('es0u'),
        Ke = n('0KEI'),
        Me = n('R5kW'),
        Re = function (e, t) {
          var n,
            a = Object(Me.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        xe = function (e, t) {
          return Object(Me.c)(e, t.communityId)
        },
        Le = Object(F.a)()
          .propsFromState(function () {
            return { count: Re, fetchStatus: xe }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: Me.a,
            }
          }),
        Oe = n('kGix'),
        Ae = n('TnY3'),
        je = n('MWbm'),
        Ne = n('mjJ+'),
        Pe = n('/yvb'),
        He = n('Znyr'),
        Be = n('zIWA'),
        De = n('SNyS'),
        Ue = n('Lsrn'),
        Ve = n('k/Ka'),
        ze = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ue.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      ze.metadata = { width: 24, height: 24 }
      var qe = ze,
        We = n('ACHU'),
        Qe = N.a.h6beb5fa,
        Xe = N.a.e3f04700,
        Je = N.a.e2429f56,
        Ge = N.a.df15d5b7,
        Ye = N.a.e48fbb01,
        Ze = N.a.c8c6c4e9,
        $e = N.a.h63a5c3b,
        et = N.a.dce5e1b3,
        tt = N.a.c5d8c93d,
        nt = { viewType: 'app_bar_button' }
      var at = W.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        rt = Object(Ae.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            r = void 0 === a ? 0 : a,
            l = (e.history, e.userRole),
            i = E.a.useContext(le.a).featureSwitches,
            o = i.isTrue('c9s_settings_enabled'),
            c = i.isTrue('c9s_report_community_enabled'),
            s = i.isTrue('c9s_moderation_enabled') && t,
            u = o && t,
            m = c && !t,
            d = E.a.useCallback(
              function (e) {
                var t = []
                return (
                  s &&
                    t.push({
                      text: Je,
                      subText: Ge({ count: r }),
                      Icon: Be.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  m &&
                    t.push({
                      text: Ye,
                      Icon: Be.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: Ze, Icon: De.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  E.a.createElement(Ne.a, { items: t, onCloseRequested: e })
                )
              },
              [n, r, s, m],
            ),
            y = t ? qe : We.a,
            p = t ? (l === M.a.Admin ? et : tt) : $e
          return E.a.createElement(
            je.a,
            { style: at.root },
            E.a.createElement(Pe.a, {
              accessibilityLabel: p,
              behavioralEventContext: nt,
              icon: E.a.createElement(y, null),
              link: u ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: u ? void 0 : d,
              size: 'xLarge',
              type: 'primaryText',
            }),
            s && r > 0
              ? E.a.createElement(He.a, {
                  count: r,
                  style: at.menuControlBadge,
                  truncatedCountFormatter: Qe,
                  unreadCountLabel: Xe,
                  withBorder: !1,
                })
              : null,
          )
        })
      var lt = Le(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            r = e.createLocalApiErrorHandler,
            l = e.fetchCommunityModerationData,
            i = e.fetchStatus,
            o = e.userRole
          return (
            E.a.useEffect(
              function () {
                i === Oe.a.NONE && t && l(n).catch(r())
              },
              [r, l, i, n, t],
            ),
            E.a.createElement(rt, { canModerate: t, communityId: n, count: a, userRole: o })
          )
        }),
        it = (n('7xRU'), n('tVqn'), n('LW0h'), n('7x/C'), n('uFXj'), n('ddV6')),
        ot = n.n(it),
        ct = N.a.fad95333,
        st = function (e) {
          var t = e.offendingRule
          return E.a.createElement(
            je.a,
            null,
            t
              ? E.a.createElement(
                  je.a,
                  { style: ut.offendingRule },
                  (function (e) {
                    return E.a.createElement(
                      N.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      E.a.createElement(te.b, { weight: 'bold' }, N.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            E.a.createElement(te.b, null, ct),
          )
        },
        ut = W.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        mt = N.a.hafa07f2,
        dt = N.a.fa94c9da,
        yt = N.a.c15bee31,
        pt = N.a.i859676b,
        gt = E.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          E.a.createElement(te.b, { link: '/settings/audience_and_tagging' }, N.a.e77dfaf0),
        ),
        ft = N.a.fc2a5c92,
        bt = N.a.bf7bdb60,
        ht = N.a.h27d695f,
        vt = N.a.b02360f5,
        _t = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        Et = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        kt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Ct,
        St,
        It,
        Ft = n('CGyZ'),
        wt = n('feu+'),
        Tt = N.a.e6057013,
        Kt = { follow: N.a.b171d7c4, following: N.a.aa7ae3f6, unfollow: N.a.bb1d57b6 },
        Mt = N.a.j24c37b2,
        Rt = function (e) {
          var t = E.a.useContext(le.a).featureSwitches,
            n = E.a.useState(void 0),
            a = ot()(n, 2),
            r = a[0],
            l = a[1],
            i = t.isTrue('c9s_request_to_join_enabled'),
            c = e.community,
            s = e.createLocalApiErrorHandler,
            u = e.history,
            m = e.isProtectedUser,
            d = e.join,
            y = e.leave,
            p = c.actions,
            g = p.join_action_result,
            f = p.leave_action_result,
            b = c.id_str,
            h = c.name,
            v = c.role,
            _ = Object(M.f)(v),
            k = g.reason === kt.ViewerJoinRequestRequired && i,
            C = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !_ } },
            S = function () {
              l(void 0)
            },
            I = E.a.useMemo(
              function () {
                return k ? o()(o()({}, Kt), {}, { follow: Tt }) : Kt
              },
              [k],
            )
          return E.a.createElement(
            je.a,
            { style: xt.button },
            E.a.createElement(Ft.a, {
              behavioralEventContext: C,
              buttonText: I,
              isFollowing: _,
              name: h,
              onFollow: function () {
                var e = c.rules,
                  t = c.viewerViolatedRule,
                  n = (function (e, t, n) {
                    var a = e.__typename,
                      r = e.reason,
                      l = function (e) {
                        return { canAction: !0, message: e }
                      },
                      i = function (e) {
                        return { canAction: !1, message: e }
                      },
                      o = i({ headline: ft, text: bt })
                    switch (a) {
                      case _t.joinAvailable:
                        return l()
                      case _t.joinUnavailable:
                        switch (r) {
                          case kt.ViewerIsRemoved:
                            return i({
                              headline: yt,
                              text: E.a.createElement(st, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case kt.ViewerNotInvited:
                            return i({ headline: mt, text: dt })
                          case kt.ViewerIsProtected:
                            return t ? i({ headline: pt, text: gt }) : l()
                          case kt.ViewerJoinRequestRequired:
                            return l()
                          default:
                            return o
                        }
                      default:
                        return o
                    }
                  })(g, m, t),
                  a = n.canAction,
                  r = n.message
                !a && r && l(r),
                  a &&
                    (e && e.length > 0
                      ? u.push({
                          pathname: '/i/communities/'.concat(b, '/join'),
                          state: { community: c, joinRequestRequired: k },
                        })
                      : d(b).catch(s({})))
              },
              onUnfollow: function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      a = e.reason,
                      r = function (e) {
                        return { canAction: !1, message: e }
                      },
                      l = r({ headline: ft, text: bt })
                    switch (n) {
                      case _t.leaveAvailable:
                        return { canAction: !0, message: t }
                      case _t.leaveUnavailable:
                        switch (a) {
                          case Et.ViewerIsSoleAdmin:
                            return r({ headline: ht, text: vt })
                          default:
                            return l
                        }
                      default:
                        return l
                    }
                  })(f),
                  t = e.canAction,
                  n = e.message
                !t && n && l(n), t && y(b).catch(s({}))
              },
              type: 'community',
            }),
            r
              ? E.a.createElement(wt.a, {
                  actionLabel: Mt,
                  graphicDisplayMode: 'none',
                  headline: r.headline,
                  onAction: S,
                  onClose: S,
                  subtext: r.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        xt = W.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Lt = n('YeIG'),
        Ot = n('cHTv'),
        At = function (e) {
          var t = B()(void 0 !== Ct ? Ct : (Ct = n('dMLx')), e)
          return E.a.useMemo(
            function () {
              return (
                (function (e) {
                  var t,
                    n,
                    a = null == e || null === (t = e.custom_banner_media) || void 0 === t ? void 0 : t.media_info
                  if (
                    null != a &&
                    a.original_img_url &&
                    null != a &&
                    a.original_img_height &&
                    null != a &&
                    a.original_img_width &&
                    null != a &&
                    null !== (n = a.color_info) &&
                    void 0 !== n &&
                    n.palette
                  ) {
                    var r = a.color_info.palette
                    return {
                      url: a.original_img_url,
                      height: a.original_img_height,
                      width: a.original_img_width,
                      palette: r,
                    }
                  }
                })(t) ||
                (function (e) {
                  var t,
                    n = null == e || null === (t = e.default_banner_media) || void 0 === t ? void 0 : t.media_info
                  if (
                    null != n &&
                    n.original_img_url &&
                    null != n &&
                    n.original_img_height &&
                    null != n &&
                    n.original_img_width
                  )
                    return { url: n.original_img_url, height: n.original_img_height, width: n.original_img_width }
                })(t) ||
                Ot.b
              )
            },
            [t],
          )
        },
        jt = n('TIdA'),
        Nt = n('A91F'),
        Pt = n('9Xij'),
        Ht = void 0 !== St ? St : (St = n('fK4d')),
        Bt = function (e) {
          var t = B()(Ht, e.community),
            n = At(t),
            a = W.a.theme.aspectRatios.communityBanner
          return n && !Object(Lt.a)(n)
            ? E.a.createElement(
                je.a,
                null,
                E.a.createElement(jt.a, {
                  accessibilityLabel: '',
                  aspectMode: Nt.a.exact(a),
                  backgroundColor: W.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : E.a.createElement(Pt.a, { ratio: a }, E.a.createElement(je.a, { style: Dt.placeholderImageContainer }))
        },
        Dt = W.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        Ut = E.a.memo(Bt),
        Vt = n('Fr3L'),
        zt = n('IAZG'),
        qt = { context: 'CommunityBannerImageQuery' },
        Wt = void 0 !== It ? It : (It = n('vUUo')),
        Qt = function (e) {
          var t = e.communityId,
            n = Object(zt.a)(Wt, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return E.a.createElement(Ut, { community: n.community })
        },
        Xt = function (e) {
          return E.a.createElement(Vt.a, { errorConfig: qt }, E.a.createElement(Qt, { communityId: e.communityId }))
        },
        Jt = E.a.memo(Xt),
        Gt = n('n4Eu'),
        Yt = { red: 0, green: 0, blue: 0 },
        Zt = '10px',
        $t = function (e) {
          var t,
            n = e.children,
            a = e.community,
            r = e.isThemeEnabled,
            l = a.media,
            i = a.theme,
            o = null == l || null === (t = l.image) || void 0 === t ? void 0 : t.palette
          return E.a.createElement(
            je.a,
            null,
            E.a.createElement(je.a, { style: en.descriptionContainer }, n),
            E.a.createElement(je.a, { style: [W.a.absoluteFill, en.backgroundColorWhite] }),
            E.a.createElement(je.a, {
              style: [
                W.a.absoluteFill,
                en.backgroundColor,
                (function (e, t) {
                  if (r) return P.a.getCommunityGradientStyle(t, Zt)
                  var n = e && Gt.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : Yt,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    i = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(Zt, ', ')
                      .concat(i, ' ')
                      .concat(Zt, ' 100%)'),
                  }
                })(o, i),
              ],
            }),
          )
        },
        en = W.a.create(function (e) {
          return {
            descriptionContainer: {
              paddingHorizontal: e.spaces.space16,
              paddingTop: e.spaces.space24,
              paddingBottom: e.spaces.space12,
              justifyContent: 'flex-end',
              zIndex: 2,
            },
            backgroundColor: { height: '100%', width: '100%', zIndex: 1 },
            backgroundColorWhite: { height: '100%', width: '100%', backgroundColor: e.colors.white, zIndex: 0 },
          }
        }),
        tn = n('XtoV'),
        nn = n('97Jx'),
        an = n.n(nn),
        rn = n('m3Bd'),
        ln = n.n(rn),
        on = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ue.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              E.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      on.metadata = { width: 24, height: 24 }
      var cn,
        sn,
        un,
        mn,
        dn,
        yn = on,
        pn = ['renderMenu'],
        gn = ['accessibilityLabel', 'behavioralEventContext'],
        fn = E.a.createElement(yn, null),
        bn = function (e) {
          var t = e.renderMenu,
            n = ln()(e, pn),
            a = n.accessibilityLabel,
            r = n.behavioralEventContext,
            l = ln()(n, gn)
          return E.a.createElement(
            Pe.a,
            an()({ accessibilityLabel: a, behavioralEventContext: r, icon: fn, renderMenu: t, type: 'primaryText' }, l),
          )
        },
        hn = n('1YZw'),
        vn = n('G6rE'),
        _n = n('li/m'),
        En = ['loggedInUser'],
        kn = Object(F.a)()
          .propsFromState(function () {
            return { community: k.a, loggedInUser: vn.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = ln()(e, En)
            return o()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              addToast: hn.b,
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: _n.b,
              leave: _n.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        Cn = N.a.hb9400db,
        Sn = function (e) {
          var t = e.community,
            a = B()(void 0 !== cn ? cn : (cn = n('ldL/')), t),
            r = a.description,
            l = a.role,
            i = E.a.useState(!1),
            o = ot()(i, 2),
            c = o[0],
            s = o[1],
            u = E.a.useState(!1),
            m = ot()(u, 2),
            d = m[0],
            y = m[1],
            p = E.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), s(!c)
              },
              [c],
            )
          return !r || Object(M.f)(l)
            ? null
            : E.a.createElement(
                je.a,
                { style: In.description },
                E.a.createElement(te.b, { color: 'white', getTextOverflow: y, numberOfLines: c ? void 0 : 2 }, r),
                !c && d ? E.a.createElement(te.b, { color: 'white', onPress: p, weight: 'bold' }, Cn) : null,
              )
        },
        In = W.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Fn = E.a.memo(Sn),
        wn = { context: 'CommunityDescriptionToggleQuery' },
        Tn = void 0 !== sn ? sn : (sn = n('2fn4')),
        Kn = function (e) {
          var t = e.communityId,
            n = Object(zt.a)(Tn, { communityId: t })
          return E.a.createElement(Fn, { community: n.community })
        },
        Mn = function (e) {
          return E.a.createElement(Vt.a, { errorConfig: wn }, E.a.createElement(Kn, { communityId: e.communityId }))
        },
        Rn = E.a.memo(Mn),
        xn = n('K1iM'),
        Ln = n.n(xn),
        On = n('MtXG'),
        An = N.a.d58baa7e,
        jn = function (e) {
          var t = e.community,
            a = B()(void 0 !== un ? un : (un = n('WuQQ')), t).member_count,
            r = void 0 === a ? 0 : a,
            l = An(r)
          return E.a.createElement(
            On.a.Group,
            null,
            E.a.createElement(
              On.a,
              { onMedia: !0 },
              E.a.createElement(
                te.b,
                { color: 'white' },
                E.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  E.a.createElement(On.a.Value, null, N.a.ibd0106d({ formattedCount: l })),
                  E.a.createElement(On.a.Label, null, N.a.cface2d0({ count: r })),
                ),
              ),
            ),
          )
        },
        Nn = function (e) {
          var t = E.a.useContext(le.a).featureSwitches
          return E.a.useMemo(
            function () {
              return t.isTrue(e)
            },
            [e, t],
          )
        },
        Pn = n('cm6r'),
        Hn = n('MAI/'),
        Bn = n('I4+6'),
        Dn = Bn.a.generate({
          backgroundColor: W.a.theme.colors.transparent,
          color: W.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Un = W.a.create(function (e) {
          return {
            description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
            membersContainer: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              left: -e.spacesPx.space4,
              top: -e.spacesPx.space2,
              padding: e.spaces.space4,
              borderRadius: e.borderRadii.small,
            },
            rightSpace: { marginRight: e.spaces.space12 },
          }
        }),
        Vn = function (e) {
          var t = e.community,
            a = B()(void 0 !== mn ? mn : (mn = n('Eh7u')), t),
            r = Nn('c9s_ui_colors_enabled_rweb'),
            l = a.members_facepile_results,
            i = a.rest_id,
            o = (function (e) {
              var t,
                n = [],
                a = Ln()(e)
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var r = t.value.result
                  if ('User' === (null == r ? void 0 : r.__typename)) {
                    var l,
                      i = null === (l = r.legacy) || void 0 === l ? void 0 : l.profile_image_url_https
                    i && n.push(i)
                  }
                }
              } catch (o) {
                a.e(o)
              } finally {
                a.f()
              }
              return n
            })(l),
            c = D(a),
            s = r ? P.a.getCommunityBackgroundColorName(c) : void 0
          return E.a.createElement(
            Pn.a,
            { interactiveStyles: Dn, link: '/i/communities/'.concat(i, '/members'), style: Un.membersContainer },
            o.length > 0
              ? E.a.createElement(Hn.a, {
                  borderColor: s,
                  style: Un.rightSpace,
                  userAvatarSize: 'large',
                  userAvatarUrls: o,
                })
              : null,
            E.a.createElement(jn, { community: a }),
          )
        },
        zn = { context: 'CommunityFacePileQuery' },
        qn = void 0 !== dn ? dn : (dn = n('ZYKh')),
        Wn = function (e) {
          var t = e.communityId,
            n = Object(zt.a)(qn, { communityId: t })
          return E.a.createElement(Vn, { community: n.community })
        },
        Qn = function (e) {
          return E.a.createElement(Vt.a, { errorConfig: zn }, E.a.createElement(Wn, { communityId: e.communityId }))
        },
        Xn = n('oQhu'),
        Jn = n('k/OQ'),
        Gn = n('CaKu'),
        Yn = n('I/9y'),
        Zn = n('pwey'),
        $n = N.a.a0e3ece4,
        ea = N.a.bec3b8f9,
        ta = N.a.e05c00b4,
        na = N.a.f88553c8,
        aa = N.a.b139b549,
        ra = N.a.ha8209bb,
        la = N.a.d601fc2f,
        ia = N.a.b721eb37,
        oa = { viewType: 'description' },
        ca = { viewType: 'facepiles_with_count' },
        sa = { viewType: 'share_community' },
        ua = { viewType: 'copy_link' },
        ma = { viewType: 'invite_members' },
        da =
          (N.a.d58baa7e,
          (function (e) {
            g()(n, e)
            var t = b()(n)
            function n() {
              var e
              s()(this, n)
              for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                v()(y()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
                v()(y()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
                v()(
                  y()(e),
                  '_isTimelinesRankingEnabled',
                  e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
                ),
                v()(
                  y()(e),
                  '_isCommunitiesSharingEnabled',
                  e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
                ),
                v()(y()(e), 'state', { shouldShowFullDescription: !1, hasOverflow: void 0 }),
                v()(y()(e), '_renderCommunityDescription', function () {
                  var t = e.props,
                    n = t.community,
                    a = t.communityId,
                    r = t.createLocalApiErrorHandler,
                    l = t.history,
                    i = t.isProtectedUser,
                    o = t.join,
                    c = t.leave
                  if (n) {
                    var s = n.name
                    return E.a.createElement(
                      we.a,
                      { behavioralEventContext: oa },
                      E.a.createElement(
                        $t,
                        { community: n, isThemeEnabled: e._isThemeEnabled },
                        E.a.createElement(
                          te.b,
                          { color: 'white', size: 'title2', style: ya.name, weight: 'bold' },
                          s.trim(),
                        ),
                        E.a.createElement(Rn, { communityId: a }),
                        E.a.createElement(
                          we.a,
                          { behavioralEventContext: ca },
                          E.a.createElement(
                            je.a,
                            { style: ya.bottomContainer },
                            E.a.createElement(Qn, { communityId: a }),
                            E.a.createElement(
                              je.a,
                              { style: ya.buttons },
                              e._isCommunitiesSharingEnabled
                                ? E.a.createElement(bn, {
                                    accessibilityLabel: ea,
                                    behavioralEventContext: sa,
                                    renderMenu: e._renderActionMenu,
                                    style: ya.inviteButton,
                                    type: 'onMediaOutlined',
                                  })
                                : E.a.createElement(tn.a, {
                                    community: n,
                                    style: ya.inviteButton,
                                    type: 'onMediaOutlined',
                                  }),
                              e._isParticipationEnabled
                                ? E.a.createElement(Rt, {
                                    community: n,
                                    createLocalApiErrorHandler: r,
                                    history: l,
                                    isProtectedUser: i,
                                    join: o,
                                    leave: c,
                                  })
                                : null,
                            ),
                          ),
                        ),
                      ),
                    )
                  }
                }),
                v()(y()(e), '_renderTabs', function () {
                  var t = e.props.communityId,
                    n = [
                      { to: '/i/communities/'.concat(t), label: ra, key: ra },
                      { to: '/i/communities/'.concat(t, '/latest'), label: la, key: la },
                      { to: '/i/communities/'.concat(t, '/about'), label: ia, key: ia },
                    ]
                  return E.a.createElement(Jn.a, {
                    accessibilityLabel: $n,
                    links: e._isTimelinesRankingEnabled
                      ? n
                      : (function (e) {
                          return e.filter(function (e) {
                            return e.label !== la
                          })
                        })(n),
                  })
                }),
                v()(
                  y()(e),
                  '_getCommunityShareItems',
                  Object(Xn.a)(function (t, n) {
                    var a = []
                    return (
                      a.push({ behavioralEventContext: ua, text: ta, Icon: Yn.a, onClick: e._handleCopyLink }),
                      t &&
                        a.push({
                          behavioralEventContext: ma,
                          text: aa,
                          Icon: Zn.a,
                          link: '/i/communities/'.concat(n, '/invite'),
                        }),
                      a
                    )
                  }),
                ),
                v()(y()(e), '_renderActionMenu', function (t) {
                  var n = e.props,
                    a = n.community,
                    r = n.communityId,
                    l = null == a ? void 0 : a.role,
                    i = Object(M.f)(l),
                    o = e._getCommunityShareItems(i, r)
                  return E.a.createElement(Ne.a, { items: o, onCloseRequested: t })
                }),
                v()(y()(e), '_handleCopyLink', function (t) {
                  var n = e.props,
                    a = n.addToast,
                    r = n.communityId
                  Gn.a.setString('https://twitter.com/i/communities/'.concat(r)), t(), a({ text: na })
                }),
                v()(y()(e), '_handleDescriptionClick', function () {
                  var t = e.state.shouldShowFullDescription
                  e.setState({ shouldShowFullDescription: !t })
                }),
                v()(y()(e), '_getDescriptionOverflow', function (t) {
                  void 0 === e.state.hasOverflow && e.setState({ hasOverflow: t })
                }),
                e
              )
            }
            return (
              m()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.community,
                      n = e.communityId
                    return t
                      ? E.a.createElement(
                          R.a,
                          { behavioralEventViewType: 'timeline' },
                          E.a.createElement(
                            je.a,
                            { style: ya.container },
                            E.a.createElement(
                              je.a,
                              null,
                              E.a.createElement(Jt, { communityId: n }),
                              this._renderCommunityDescription(),
                            ),
                            this._renderTabs(),
                          ),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(E.a.Component))
      v()(da, 'contextType', le.a)
      var ya = W.a.create(function (e) {
          return {
            access: { alignSelf: 'stretch', flexDirection: 'row' },
            name: { flexDirection: 'column', justifyContent: 'left', marginBottom: e.spaces.space8 },
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            button: { justifyContent: 'right' },
            bottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            inviteButton: { marginRight: e.spaces.space8 },
            buttons: { flexDirection: 'row', height: 'fit-content' },
            description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
          }
        }),
        pa = kn(da),
        ga = n('eSoz'),
        fa = n('8Lfv'),
        ba = n('LI/a'),
        ha = function (e, t) {
          return t.communityId
        },
        va = function (e, t) {
          var n = ga.c.select(e, t.communityId)
          return Object(M.f)(null == n ? void 0 : n.role)
        },
        _a = Object(F.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: va,
              rankedTweetsModule: Object(I.createSelector)(ha, function (e) {
                return Object(ba.b)(e)
              }),
              tweetsModule: Object(I.createSelector)(ha, function (e) {
                return Object(ba.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: fa.a,
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        Ea = n('FIs5'),
        ka = n('EUHl'),
        Ca = n('7BdX'),
        Sa = n('7JQg'),
        Ia = N.a.c18e3a3e,
        Fa = N.a.d68146c0,
        wa = N.a.h5245afa,
        Ta = N.a.f05dbeff,
        Ka = { page: 'community', section: 'home' },
        Ma = { page: 'community', section: 'latest' },
        Ra = { page: 'community', section: 'tweets' },
        xa = _a(function (e) {
          var t = E.a.useContext(le.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            r = e.isCommunityMember,
            l = e.rankedTweetsModule,
            i = e.tweetsModule,
            o = e.type === Sr.Home ? { module: l, scribeNamespace: Ka } : { module: i, scribeNamespace: Ma },
            c = t ? o : { module: i, scribeNamespace: Ra },
            s = c.module,
            u = c.scribeNamespace
          E.a.useEffect(
            function () {
              n(s).catch(a())
            },
            [n, a, r, s],
          )
          var m = E.a.useCallback(function () {
            return E.a.createElement(Ea.a, { buttonType: 'brandOutlined', header: Ia, message: Fa })
          }, [])
          return E.a.createElement(
            Sa.c,
            { namespace: u },
            E.a.createElement(
              R.a,
              { behavioralEventViewType: 'tweets' },
              E.a.createElement(x.a, {
                loadingAccessibilityLabel: Ta,
                module: s,
                newTweetsPillMode: ka.a.CLIENT,
                prerollDisplayLocation: Ca.c.OTHER,
                refreshControl: null,
                renderEmptyState: m,
                title: wa,
              }),
            ),
          )
        }),
        La = n('o3oN'),
        Oa = ['loggedInUser'],
        Aa = Object(F.a)()
          .propsFromState(function () {
            return {
              communityId: k.c,
              community: k.a,
              communityTheme: k.f,
              fetchStatus: k.b,
              membershipsFetchStatus: La.d,
              isCommunityMember: k.h,
              joinActionResultType: k.i,
              loggedInUser: vn.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = ln()(e, Oa)
            return o()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ke.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: ga.c.fetchOneIfNeeded,
              fetchCommunityMemberships: La.a,
            }
          })
          .withAnalytics({ page: 'community' }),
        ja = (n('MvUL'), n('zCf4')),
        Na = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ue.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
              }),
              E.a.createElement('path', {
                d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
              }),
            ),
          )
        }
      Na.metadata = { width: 24, height: 24 }
      var Pa = Na,
        Ha = n('wpLu'),
        Ba = N.a.bf359e0d,
        Da = N.a.e8fcdd3a,
        Ua = N.a.b37d580e,
        Va = N.a.cafca4b2,
        za = N.a.ea3b38fa,
        qa = N.a.jd667130,
        Wa = N.a.ca7eeabf,
        Qa = N.a.acae4034,
        Xa = N.a.e2186ee2,
        Ja = N.a.j24c37b2,
        Ga = E.a.memo(function (e) {
          var t = e.community,
            n = t.id_str,
            a = Object(ja.f)(),
            r = E.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(n, '/'))
              },
              [a, n],
            ),
            l = E.a.createElement(
              je.a,
              { accessibilityRole: 'list', style: Ya.rulesContainer },
              t.rules.map(function (e) {
                return E.a.createElement(
                  te.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Ya.rule },
                  e.name,
                )
              }),
            ),
            i = 'Public' === t.access,
            o = i ? za : Ua,
            c = i ? qa : Va
          return E.a.createElement(
            wt.a,
            {
              actionLabel: Ja,
              graphicDisplayMode: 'none',
              headline: Ba,
              onAction: r,
              onClose: r,
              subtext: Da,
              withCloseButton: !0,
            },
            E.a.createElement(
              je.a,
              { style: Ya.infoItemsContainer },
              E.a.createElement(ae.a, {
                containerStyle: Ya.itemContainer,
                items: [
                  { label: o, description: c, decoration: E.a.createElement(Pa, { style: Ya.decorationContainer }) },
                  { label: Wa, decoration: E.a.createElement(Ha.a, { style: Ya.decorationContainer }), description: l },
                  { label: Qa, description: Xa, decoration: E.a.createElement(qe, { style: Ya.decorationContainer }) },
                ],
              }),
            ),
          )
        }),
        Ya = W.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingHorizontal: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
            rulesContainer: { marginTop: e.spaces.space4, marginLeft: e.spaces.space8 },
            rule: { display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' },
          }
        }),
        Za = Ga,
        $a = n('dwig'),
        er = n('MDbM'),
        tr = n('0+qk'),
        nr = n('/de5'),
        ar = (n('FtFR'), n('hBvt'), n('/ekK')),
        rr = Object(F.a)()
          .propsFromState(function () {
            return { flags: ar.b }
          })
          .propsFromActions(function () {
            return { setFlag: ar.c, retrieveFlagsIfNeeded: ar.a }
          }),
        lr = n('hOZg'),
        ir = n('WtWS'),
        or = n('0ULw'),
        cr = N.a.c66b37f9,
        sr = N.a.g2768d0e,
        ur = N.a.b192b58b,
        mr = N.a.gd30278f,
        dr = N.a.cbdddb09,
        yr = N.a.h5890b1a,
        pr = [
          {
            flag: 'setup_clicked_rules',
            title: N.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: N.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: N.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: N.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(mr, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        gr = E.a.memo(function (e) {
          var t = e.community.id_str,
            n = e.flags,
            a = e.retrieveFlagsIfNeeded,
            r = e.setFlag,
            l = E.a.useContext(le.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            i = Object(ja.f)()
          E.a.useEffect(
            function () {
              l && a(t)
            },
            [t, l, a],
          )
          var o = E.a.useCallback(
            function () {
              r(t, 'setup_show_checklist', !1)
            },
            [t, r],
          )
          if (!n.setup_show_checklist || !l) return null
          var c = function (e) {
              r(t, e.flag, !0).then(function () {
                i.push(e.link(t))
              })
            },
            s = function (e, t) {
              13 === t.keyCode && c(e)
            }
          return E.a.createElement(
            je.a,
            { style: fr.wrapper },
            E.a.createElement(Pe.a, {
              accessibilityLabel: ur,
              icon: E.a.createElement(lr.a, { style: fr.close }),
              onClick: o,
              pullRight: !0,
              size: 'medium',
              style: fr.dismiss,
              type: 'brandText',
            }),
            E.a.createElement(te.b, { size: 'title3', style: fr.headline, weight: 'bold' }, cr),
            E.a.createElement(te.b, { style: fr.subtext }, sr),
            E.a.createElement(
              je.a,
              { accessibilityRole: 'list', style: fr.list },
              pr.map(function (e) {
                var t = Boolean(n[e.flag])
                return E.a.createElement(
                  je.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : c.bind(null, e),
                    onKeyPress: t ? void 0 : s.bind(null, e),
                    style: [fr.entry, t ? fr.completedEntry : fr.uncompletedEntry],
                  },
                  E.a.createElement(te.b, { weight: 'bold' }, e.title),
                  t
                    ? E.a.createElement(ir.a, { accessibilityLabel: dr, style: fr.iconCompleted })
                    : E.a.createElement(or.a, { accessibilityLabel: yr, style: fr.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        fr = W.a.create(function (e) {
          return {
            wrapper: {
              padding: e.spaces.space32,
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.gray200,
              color: e.colors.text,
            },
            dismiss: { marginLeft: 'auto' },
            headline: { paddingBottom: e.spaces.space4 },
            subtext: { color: e.colors.gray700, paddingBottom: e.spaces.space16 },
            close: { color: e.colors.text },
            list: { gap: e.spaces.space16 },
            entry: { display: 'flex', flexDirection: 'row', gap: e.spaces.space8, listStylePosition: 'inside' },
            completedEntry: {},
            uncompletedEntry: { cursor: 'pointer' },
            iconCompleted: { marginLeft: 'auto', color: e.colors.green500 },
            iconUncompleted: { marginLeft: 'auto', color: e.colors.gray300 },
          }
        }),
        br = rr(gr),
        hr = n('VS6U'),
        vr = n('QRqA'),
        _r = n('Qwev'),
        Er = n('mw9i'),
        kr = 'community',
        Cr = { type: 'serversideContextKey', serversideContextType: 'community' },
        Sr = Object.freeze({ Home: 'home', Latest: 'latest' }),
        Ir = N.a.a7c2e06c,
        Fr = (function (e) {
          g()(n, e)
          var t = b()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(y()(e), '_getTweetButtonLocationState', function () {
                return { selectedCommunityId: e.props.communityId, defaultText: '' }
              }),
              v()(
                y()(e),
                '_getWelcomeEducationParams',
                Object(Xn.a)(function (e, t) {
                  return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
                }),
              ),
              v()(
                y()(e),
                '_getMemoizedBehavioralEventContext',
                Object(Xn.a)(function (e) {
                  return { clientEntity: o()(o()({}, Cr), {}, { serversideContextId: e }), viewType: kr }
                }),
              ),
              v()(y()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.community,
                  a = t.communityId,
                  r = t.fetchStatus,
                  l = t.history,
                  i = t.joinActionResultType,
                  o = t.location,
                  c = t.match,
                  s = (null == n ? void 0 : n.role) === M.a.Admin && void 0 !== o.query.show_creation_summary,
                  u = e._isAllowedToTweet
                    ? E.a.createElement(tr.a, { getLocationState: e._getTweetButtonLocationState, history: l })
                    : null
                return a && r === er.a.LOADING
                  ? E.a.createElement(_r.a, { style: wr.topMargin })
                  : a && null != n && n.name && r === er.a.LOADED
                  ? E.a.createElement(
                      $a.a,
                      { component: Er.a, fab: u },
                      E.a.createElement(vr.a, e._getWelcomeEducationParams(n, i)),
                      s && E.a.createElement(Za, { community: n }),
                      e._renderCommunityDetail(),
                      E.a.createElement(br, { community: n }),
                      E.a.createElement(
                        ja.b,
                        { exact: !0, path: '/i/communities/'.concat(a, '/about') },
                        E.a.createElement(Fe, { communityId: a, match: c }),
                      ),
                      E.a.createElement(
                        ja.d,
                        null,
                        E.a.createElement(
                          ja.b,
                          { exact: !0, path: '/i/communities/'.concat(a, '/') },
                          E.a.createElement(xa, { communityId: a, location: o, match: c, type: Sr.Home }),
                        ),
                        E.a.createElement(
                          ja.b,
                          { path: '/i/communities/'.concat(a, '/latest') },
                          E.a.createElement(xa, { communityId: a, location: o, match: c, type: Sr.Latest }),
                        ),
                      ),
                    )
                  : E.a.createElement(nr.b, { history: l, location: o, match: c })
              }),
              v()(y()(e), '_renderCommunityDetail', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.history,
                  r = t.match
                return n ? E.a.createElement(pa, { communityId: n, history: a, match: r }) : null
              }),
              v()(y()(e), '_handleFetchIfNeeded', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchCommunityIfNeeded,
                  l = t.fetchCommunityMemberships,
                  i = t.membershipsFetchStatus
                n && r(n).catch(a({})), i === Oe.a.NONE && l().catch(a())
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchIfNeeded()
                },
              },
              {
                key: '_isAllowedToTweet',
                get: function () {
                  var e = this.props.isCommunityMember
                  return this.context.featureSwitches.isTrue('c9s_participation_enabled') && e
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.community,
                    n = e.communityId,
                    a = e.history,
                    r = e.screenName,
                    l = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
                    i = null == t ? void 0 : t.name,
                    o = n
                      ? E.a.createElement(lt, {
                          canModerate: Object(M.c)(null == t ? void 0 : t.role),
                          communityId: n,
                          userRole: null == t ? void 0 : t.role,
                        })
                      : null,
                    c = this._getMemoizedBehavioralEventContext(n || '')
                  return E.a.createElement(
                    we.a,
                    { behavioralEventContext: c },
                    E.a.createElement(hr.a, {
                      backLocation: r && '/'.concat(r, '/communities'),
                      composeOptions: this._getTweetButtonLocationState(),
                      documentTitle: i ? Ir({ communityName: i }) : '',
                      history: a,
                      primaryContent: this._renderPrimaryContent(),
                      rightControl: o,
                      sidebarContent: E.a.createElement(Te.a, { communityId: n, withCommunityRules: l }),
                      title: i || null,
                      withTweetButton: this._isAllowedToTweet,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      v()(Fr, 'contextType', le.a)
      var wr = W.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        Tr = Aa(Fr)
      t.default = Tr
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        p = u.a.e988475f,
        g = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityPurpose,
            l = e.onChange,
            s = i.a.useState(void 0),
            u = r()(s, 2),
            g = u[0],
            f = u[1],
            b = i.a.useState(!1),
            h = r()(b, 2),
            v = h[0],
            _ = h[1],
            E = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            k = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.g)(t, 3, E)
                n && f(p({ minCharacterCount: 3, maxCharacterCount: E })), _(n), l(t, n)
              },
              [E, f, l],
            )
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: g,
            helperText: y,
            invalid: v,
            label: d,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: k,
            spellCheck: 'false',
            validLength: E,
            value: a,
          })
        }
    },
    U3Z9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateCommunityModal', function () {
          return M
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('KqXw'), n('MvUL'), n('ERkP')),
        i = n.n(l),
        o = n('+Kfv'),
        c = n('ROT1'),
        s = n('U0Qk'),
        u = n('eSoz'),
        m = n('RqPI'),
        d = n('rxPX'),
        y = Object(d.a)()
          .propsFromState(function () {
            return { communitiesActions: m.f }
          })
          .propsFromActions(function () {
            return { createCommunity: u.b }
          }),
        p = n('jHSc'),
        g = n('3XMw'),
        f = n.n(g),
        b = n('0weh'),
        h = n('5FtR'),
        v = n('MWbm'),
        _ = n('/yvb'),
        E = n('4zmP'),
        k = n('t62R'),
        C = n('rHpw'),
        S = f.a.i6e7e298,
        I = f.a.a226497c,
        F = f.a.c9d56b71,
        w = f.a.fc2a5c92,
        T = f.a.c1ad5a11,
        K = { viewType: 'community' },
        M = i.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            l = i.a.useState(!0),
            u = r()(l, 2),
            m = u[0],
            d = u[1],
            y = i.a.useState(!1),
            g = r()(y, 2),
            f = g[0],
            C = g[1],
            M = m || f,
            x = i.a.useState(''),
            L = r()(x, 2),
            O = L[0],
            A = L[1],
            j = i.a.useState(''),
            N = r()(j, 2),
            P = N[0],
            H = N[1],
            B = i.a.useState(null),
            D = r()(B, 2),
            U = D[0],
            V = D[1],
            z = i.a.useCallback(function (e, t) {
              A(e), d(t)
            }, []),
            q = i.a.useCallback(function (e, t) {
              H(e), 0 === e.length ? C(!1) : C(t)
            }, []),
            W = i.a.useCallback(
              function () {
                V(null),
                  n(O, { description: P })
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && a.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && V(e)
                    })
                    .catch(function (e) {
                      V({ error: 'GraphQL error', reason: e })
                    })
              },
              [O, P, n, a],
            )
          if (null == t || !t.create) return i.a.createElement(h.a, { to: '/home' })
          var Q = i.a.createElement(_.a, { disabled: M, onClick: W, size: 'small', type: 'brandFilled' }, S),
            X = U
              ? i.a.createElement(
                  v.a,
                  { style: R.error },
                  i.a.createElement(E.a, { Icon: b.a, headline: w, text: T, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            o.a,
            { behavioralEventContext: K },
            i.a.createElement(
              p.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: R.root,
                history: a,
                rightControl: Q,
                title: I,
              },
              i.a.createElement(
                i.a.Fragment,
                null,
                X,
                i.a.createElement(k.b, { color: 'gray700', style: R.text }, F),
                i.a.createElement(c.a, { autoFocus: !0, communityName: O, onChange: z }),
                i.a.createElement(s.a, { communityPurpose: P, onChange: q }),
              ),
            ),
          )
        }),
        R = C.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        x = y(M)
      t.default = x
    },
    WuQQ: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityMemberCount_community',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null }],
        type: 'Community',
        abstractKey: null,
        hash: '793bedf8ae1b012c222a20424e8123bb',
      }
      t.default = a
    },
    XtoV: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = n('ERkP'),
        c = n.n(o),
        s = n('/yvb'),
        u = n('3XMw'),
        m = n.n(u),
        d = n('pwey'),
        y = ['community'],
        p = m.a.b139b549,
        g = c.a.createElement(d.a, null),
        f = c.a.memo(function (e) {
          var t = e.community,
            n = i()(e, y)
          if (!t || 'CommunityInvitesUnavailable' === t.invites_result.__typename) return null
          var a = '/i/communities/'.concat(t.id_str, '/invite')
          return c.a.createElement(s.a, r()({ accessibilityLabel: p, icon: g, link: a, type: 'primaryText' }, n))
        })
      t.a = f
    },
    ZYKh: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y,
        p,
        g,
        f = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityFacePileQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityFacePile_community' }],
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
            name: 'CommunityFacePileQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'members_facepile_results',
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'result',
                        plural: !1,
                        selections: [
                          (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                    name: 'profile_image_url_https',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              (o = {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'defaultScalars',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'legacy',
                              }),
                              (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (s = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'TimelineRichText',
                                kind: 'LinkedField',
                                name: 'unavailable_message',
                                plural: !1,
                                selections: [
                                  { alias: null, args: null, kind: 'ScalarField', name: 'alignment', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'TimelineRichTextEntity',
                                    kind: 'LinkedField',
                                    name: 'entities',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: 'fromIndex',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'from_index',
                                        storageKey: null,
                                      },
                                      {
                                        alias: 'toIndex',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'to_index',
                                        storageKey: null,
                                      },
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
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'ref',
                                        plural: !1,
                                        selections: [
                                          i,
                                          { kind: 'TypeDiscriminator', abstractKey: '__isTimelineReferenceObject' },
                                          {
                                            alias: 'type',
                                            args: null,
                                            kind: 'ScalarField',
                                            name: '__typename',
                                            storageKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: (m = [
                                              (u = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                            ]),
                                            type: 'TimelineRichTextCashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              c,
                                              (d = {
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
                                            selections: m,
                                            type: 'TimelineRichTextHashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              d,
                                              {
                                                alias: 'urlType',
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'url_type',
                                                storageKey: null,
                                              },
                                              {
                                                alias: 'urtEndpointOptions',
                                                args: null,
                                                concreteType: 'TimelineUrtEndpointOptions',
                                                kind: 'LinkedField',
                                                name: 'urt_endpoint_options',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: 'cacheId',
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'cache_id',
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
                                                    kind: 'ScalarField',
                                                    name: 'title',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: 'requestParams',
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
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'TimelineUrl',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              (g = {
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
                                                      i,
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
                                                              (y = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'screen_name',
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            storageKey: null,
                                                          },
                                                          o,
                                                          l,
                                                          c,
                                                        ],
                                                        type: 'User',
                                                        abstractKey: null,
                                                      },
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          (p = {
                                                            alias: 'reason',
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'unavailable_reason',
                                                            storageKey: null,
                                                          }),
                                                          s,
                                                        ],
                                                        type: 'UserUnavailable',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              }),
                                            ],
                                            type: 'TimelineRichTextUser',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [y, g],
                                            type: 'TimelineRichTextMention',
                                            abstractKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'rtl', storageKey: null },
                                  u,
                                ],
                                storageKey: null,
                              },
                              p,
                            ],
                            type: 'UserUnavailable',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  c,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Qsm1_m7FFKtqLxruIZ_Wpg',
            metadata: {},
            name: 'CommunityFacePileQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(f.hash = 'e6fa6a6403decebf26b0d7a5b8332948'), (t.default = f)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = n('ERkP'),
        c = n.n(o),
        s = n('v6aA'),
        u = n('XOJV'),
        m = n('eSoz'),
        d = n('rxPX'),
        y = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        g = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(m.g)(e, a) : void 0
        },
        f = Object(d.a)()
          .propsFromState(function () {
            return { community: g, hydratedTweet: u.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: m.c.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        h = n('uCxL'),
        v = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        E = f(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            l = e.hydratedTweet,
            o = (e.tweetId, i()(e, _)),
            u = c.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == l ? void 0 : l.community_id_str
          c.a.useEffect(
            function () {
              y && Object(b.a)(t) && a(y).catch(n())
            },
            [t, y, n, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            g = l && Object(v.f)(l, d, t),
            f = g && Object(v.e)(g),
            E = m.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            h.a,
            r()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: p,
              socialContextProps: f,
              tweet: l,
              withReactions: E,
            }),
          )
        })
      t.a = E
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        l = n('Ud88'),
        i = n('aQQo'),
        o = i.loadQuery,
        c = i.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        m = s.useEffect,
        d = s.useRef,
        y = s.useState,
        p = n('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : g,
          i = l()
        c()
        var s = r(),
          p = d(new Set([n])),
          b = y(function () {
            return n
          }),
          h = b[0],
          v = b[1],
          _ = y(function () {
            return n
          }),
          E = _[0],
          k = _[1]
        n !== E && (p.current.add(n), k(n), v(n))
        var C = u(
            function () {
              s.current && (p.current.add(g), v(g))
            },
            [s],
          ),
          S = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var r,
                  l = o(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : i, e, t, a)
                p.current.add(l), v(l)
              }
            },
            [i, e, v, s],
          ),
          I = d(!1)
        return (
          m(function () {
            return function () {
              I.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === I.current)
                return (
                  (I.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    S(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = p.current
              if (s.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var l = n.value
                    if (l === h) break
                    t.delete(l),
                      'NullQueryReference' !== l.kind &&
                        (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [h, s, S, e],
          ),
          m(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(p.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (f(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (l) {
                  n.e(l)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, S, C]
        )
      }
    },
    cI4y: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'members_slice',
                    args: [(l = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityMembers_Query_members_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (i = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (o = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
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
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [l, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'members_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
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
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
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
                                        name: 'verified',
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
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: c,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityMembers_Query_members_slice',
                    kind: 'LinkedHandle',
                    name: 'members_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'OwzlW0I_RTCIsN-W8XScdQ',
            metadata: { sliceInfoPath: ['community', 'members_slice', 'slice_info'] },
            name: 'membersSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'd5eb23d40bcb19e36e32afc95695f334'), (t.default = u)
    },
    'cz/h': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesDiscoveryScreen', function () {
          return K
        })
      var a = n('VrFO'),
        r = n.n(a),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        g = (n('2G9S'), n('ERkP')),
        f = n.n(g),
        b = n('es0u'),
        h = n('WpDa'),
        v = n('ZNT5'),
        _ = Object(v.a)({
          timelineId: 'communitiesDiscoveryTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunityDiscoveryTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_DISCOVERY_TIMELINE',
          perfKey: 'communitiesDiscoveryTimeline',
          formatResponse: h.a,
        }),
        E = n('OUEC'),
        k = n('3XMw'),
        C = n.n(k),
        S = n('oQhu'),
        I = n('yoO3'),
        F = n('fTQJ'),
        w = n('VS6U'),
        T = C.a.cb6adb1f,
        K = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var t = e._getModule()
                return f.a.createElement(F.a, { entryConfiguration: E.a, module: t, refreshControl: null, title: T })
              }),
              p()(
                c()(e),
                '_getModule',
                Object(S.a)(function () {
                  return _
                }),
              ),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return f.a.createElement(
                    I.a,
                    { behavioralEventViewType: 'discover' },
                    f.a.createElement(w.a, {
                      backLocation: '/',
                      history: e,
                      primaryContent: this._renderPrimaryContent(),
                      sidebarContent: f.a.createElement(b.a, null),
                      title: T,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      t.default = K
    },
    dMLx: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useCommunityBannerImage_community',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'ApiMedia',
              kind: 'LinkedField',
              name: 'custom_banner_media',
              plural: !1,
              selections: (a = [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'media_info',
                  plural: !1,
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'MediaColorInfo',
                          kind: 'LinkedField',
                          name: 'color_info',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'MediaColorPaletteItem',
                              kind: 'LinkedField',
                              name: 'palette',
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'MediaColor',
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
                                { alias: null, args: null, kind: 'ScalarField', name: 'percentage', storageKey: null },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_url', storageKey: null },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_width', storageKey: null },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_height', storageKey: null },
                      ],
                      type: 'ApiImage',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ]),
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'ApiMedia',
              kind: 'LinkedField',
              name: 'default_banner_media',
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = '66a8dff93611f1369bc53655a9aacb32'), (t.default = r)
    },
    fK4d: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityBannerImage_community',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImage_community' }],
        type: 'Community',
        abstractKey: null,
        hash: 'ac657dadcf91c9440fdfcd1862830fd1',
      }
      t.default = a
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        b = n('/NU0'),
        h = n('rxPX'),
        v = n('AspN'),
        _ = function (e, t) {
          return t.media ? t.media : Object(b.a)(t.mediaId) ? Object(v.k)(e, t.mediaId)[0] : void 0
        },
        E = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        k = Object(h.a)()
          .propsFromState(function () {
            return { media: _, mediaId: E }
          })
          .propsFromActions(function () {
            return { processMedia: v.f, updateMediaUpload: v.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = n('jHSc'),
        S = n('3XMw'),
        I = n.n(S),
        F = n('EeFI'),
        w = 'applyButton',
        T = n('/yvb'),
        K = n('rHpw'),
        M = I.a.gd80afba,
        R = I.a.a753a87f,
        x = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              f()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              f()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return r.a.createElement(
                  T.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: w, type: 'primaryFilled' },
                  R,
                )
              }),
              f()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              f()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    r = n.analytics,
                    l = n.media,
                    i = n.mediaId,
                    o = n.onDone,
                    c = n.processMedia,
                    s = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (l || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(b.a)(i) &&
                    (e
                      ? (e(u), o())
                      : (s({ id: i, cropData: d ? void 0 : u }),
                        c(i).then(function () {
                          a.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), o()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = r.a.createRef()),
              e.media || e.onCancel(),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    a = e.title,
                    l = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    o = this._getMedia()
                  return r.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: L.root,
                      documentTitle: a || M,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || M,
                    },
                    r.a.createElement(F.a, {
                      defaultAspectRatio: t,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: l,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        L = K.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = k(x),
        A = n('X8FW'),
        j = K.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: j.modal },
          r.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'MemberRequests_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: 'pending_join_requests_slice',
                            args: null,
                            concreteType: 'CommunityJoinRequestsSlice',
                            kind: 'LinkedField',
                            name: '__MemberRequests_Query_members_slice_slice',
                            plural: !1,
                            selections: [
                              (o = {
                                alias: null,
                                args: null,
                                concreteType: 'SliceInfo',
                                kind: 'LinkedField',
                                name: 'slice_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'next_cursor',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'previous_cursor',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              }),
                              { args: null, kind: 'FragmentSpread', name: 'list_communityJoinRequestsSlice' },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityJoinRequests',
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
            name: 'MemberRequests_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  l,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      i,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'CommunityJoinRequestsSlice',
                            kind: 'LinkedField',
                            name: 'pending_join_requests_slice',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'CommunityJoinRequest',
                                kind: 'LinkedField',
                                name: 'items',
                                plural: !0,
                                selections: [
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'created_at',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'UserCommunityRelationship',
                                    kind: 'LinkedField',
                                    name: 'user_relationship',
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
                                              i,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  (s = {
                                                    alias: 'id_str',
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'rest_id',
                                                    storageKey: null,
                                                  }),
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
                                                        name: 'blocking',
                                                        storageKey: null,
                                                      },
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
                                                        name: 'followed_by',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'following',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'muting',
                                                        storageKey: null,
                                                      },
                                                      l,
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
                                                        name: 'screen_name',
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
                                                  c,
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
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'Community',
                                        kind: 'LinkedField',
                                        name: 'community',
                                        plural: !1,
                                        selections: [s, c],
                                        storageKey: null,
                                      },
                                      c,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'CommunityJoinRequestActions',
                                    kind: 'LinkedField',
                                    name: 'actions',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'join_request_approve_action_result',
                                        plural: !1,
                                        selections: (u = [i]),
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'join_request_deny_action_result',
                                        plural: !1,
                                        selections: u,
                                        storageKey: null,
                                      },
                                      c,
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              o,
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            filters: [],
                            handle: 'slice',
                            key: 'MemberRequests_Query_members_slice',
                            kind: 'LinkedHandle',
                            name: 'pending_join_requests_slice',
                          },
                          c,
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  c,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '5xZZjyUMx-lzjmohhjoOyg',
            metadata: {
              sliceInfoPath: ['community', 'join_requests_result', 'pending_join_requests_slice', 'slice_info'],
            },
            name: 'MemberRequests_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(m.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (t.default = m)
    },
    gDCe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA'),
        i = n('Ig1G'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('Nh1N'),
        u = n('MWbm'),
        m = n('4zmP'),
        d = n('rHpw'),
        y = c.a.b6e22e15,
        p = c.a.d17c10d9,
        g = c.a.a1ecaf33,
        f = r.a.memo(function (e) {
          var t,
            n = e.community,
            a = r.a.useContext(l.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !n || n.role !== i.a.Admin || a
            ? null
            : r.a.createElement(
                u.a,
                { style: b.info },
                r.a.createElement(m.a, {
                  Icon: s.a,
                  action: {
                    label: g,
                    link: {
                      pathname: '/messages/compose',
                      query: {
                        recipient_id: '1433894099178774532',
                        text:
                          ((t = n.id_str),
                          'Hi, my community is (https://twitter.com/i/communities/'.concat(
                            t,
                            ') and I would like to add the following accounts as moderators: ',
                          )),
                      },
                    },
                  },
                  headline: y,
                  text: p,
                  type: 'primary',
                }),
              )
        }),
        b = d.a.create(function (e) {
          return { info: { padding: e.spaces.space12 } }
        })
      t.a = f
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      n('FtFR')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('wtru')
      function i(e) {
        var t = Object(l.b)()
        return [
          !!t && !t.flags[e],
          r.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = n('ERkP'),
        c = n.n(o),
        s = n('t62R'),
        u = n('I4+6'),
        m = n('cm6r'),
        d = n('rHpw'),
        y = n('MWbm'),
        p = ['align', 'color', 'label'],
        g = d.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          l = e.label,
          o = i()(e, p),
          f = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          y.a,
          { style: g.container },
          c.a.createElement(
            m.a,
            r()({}, o, { interactiveStyles: f, style: g.root }),
            c.a.createElement(s.b, { align: n, color: a }, l),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return l
        })
      var a = n('0vv5'),
        r = 500,
        l = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    krnS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ue
      })
      var a,
        r,
        l,
        i,
        o = n('ERkP'),
        c = n.n(o),
        s = n('v6aA'),
        u = n('WpDa'),
        m = n('ZNT5'),
        d = n('Ig1G'),
        y = n('FIs5'),
        p = n('3XMw'),
        g = n.n(p),
        f = (n('enFi'), n('TEoO')),
        b = n('Fr3L'),
        h = n('97Jx'),
        v = n.n(h),
        _ = n('yiKp'),
        E = n.n(_),
        k = n('ddV6'),
        C = n.n(k),
        S = (n('yH/f'), n('ho0z'), n('1YZw')),
        I = n('uDfI'),
        F = n('yrzJ'),
        w = n('mjJ+'),
        T = n('IMA+'),
        K = n('IG7M'),
        M = n('eb3s'),
        R = n('jAXQ'),
        x = n.n(R),
        L = n('9SqB'),
        O = n.n(L),
        A = n('Bg9b'),
        j = n('boUI'),
        N = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        P = g.a.g30bc699,
        H = g.a.af40a8ef,
        B = g.a.e68b09b4,
        D = g.a.ef4602eb,
        U = {
          confirmButtonLabel: H,
          headline: 'Add as moderator?',
          text: function (e) {
            var t = e.screenName
            return c.a.createElement(
              c.a.Fragment,
              null,
              'Are you sure you want to add ',
              c.a.createElement(F.a, { screenName: t }),
              ' as a moderator?',
            )
          },
        },
        V = {
          confirmButtonLabel: B,
          headline: 'Are you sure?',
          text: function (e) {
            var t = e.screenName
            return c.a.createElement(
              c.a.Fragment,
              null,
              'Are you sure you want to remove ',
              c.a.createElement(F.a, { screenName: t }),
              ' as a moderator?',
            )
          },
        },
        z = void 0 !== a ? a : (a = n('rPb+')),
        q = function (e) {
          var t = c.a.useContext(s.a),
            a = t.featureSwitches,
            l = t.loggedInUserId,
            i = a.isTrue('c9s_edit_moderators_enabled'),
            o = e.communityId,
            u = e.userResult,
            m = c.a.useState(null),
            y = C()(m, 2),
            p = y[0],
            g = y[1],
            f = Object(I.c)(),
            b = x()(void 0 !== r ? r : (r = n('tgdH')), u).result,
            h = O()(z),
            _ = C()(h, 2),
            k = _[0],
            F = _[1],
            R = c.a.useCallback(
              function (e) {
                var t = e.communityId,
                  n = e.recordId,
                  a = e.role,
                  r = e.successMessage,
                  l = e.userId
                k({
                  variables: { communityId: t, userId: l, role: a },
                  updater: function (e) {
                    var r = e.get(n)
                    null == r || r.setValue(a, 'community_role(community_id:"'.concat(t, '")'))
                  },
                  onCompleted: function () {
                    f(Object(S.b)({ text: r }))
                  },
                  onError: function () {
                    f(Object(S.b)({ text: D }))
                  },
                })
              },
              [k, f],
            ),
            L = c.a.useCallback(
              function (e) {
                var t,
                  n,
                  a,
                  r = e.communityId,
                  l = e.recordId,
                  i = e.roleAction,
                  o = e.screenName,
                  c = e.userId
                switch (i) {
                  case N.PromoteModerator:
                    ;(t = U),
                      (n = d.a.Moderator),
                      (a = (function (e) {
                        var t = e.screenName
                        return '@'.concat(t, ' has been added as a moderator.')
                      })({ screenName: o }))
                    break
                  case N.DemoteModerator:
                    ;(t = V),
                      (n = d.a.Member),
                      (a = (function (e) {
                        var t = e.screenName
                        return '@'.concat(t, ' has been removed as a moderator.')
                      })({ screenName: o }))
                    break
                  default:
                    return
                }
                g(
                  E()(
                    E()({}, t),
                    {},
                    {
                      text: t.text({ screenName: o }),
                      onConfirm: function () {
                        R({ communityId: r, recordId: l, role: n, successMessage: a, userId: c }), g(null)
                      },
                      onCancel: function () {
                        g(null)
                      },
                    },
                  ),
                )
              },
              [R],
            ),
            H = c.a.useCallback(
              function (e) {
                if (!b || 'User' !== b.__typename || !b.legacy) return null
                var t = b.community_role,
                  n = b.id,
                  a = b.legacy,
                  r = a.id_str,
                  l = a.screen_name
                if (!l) return null
                var s = []
                if (i)
                  switch (t) {
                    case d.a.Moderator:
                      s.push({
                        behavioralEventContext: { viewType: 'remove_moderator' },
                        disabled: F,
                        text: 'Remove as a moderator',
                        Icon: A.a,
                        onClick: function () {
                          return L({
                            communityId: o,
                            recordId: n,
                            roleAction: N.DemoteModerator,
                            screenName: l,
                            userId: r,
                          })
                        },
                      })
                      break
                    case d.a.Member:
                      s.push({
                        behavioralEventContext: { viewType: 'add_moderator' },
                        disabled: F,
                        text: 'Add as a moderator',
                        Icon: A.a,
                        onClick: function () {
                          return L({
                            communityId: o,
                            recordId: n,
                            roleAction: N.PromoteModerator,
                            screenName: l,
                            userId: r,
                          })
                        },
                      })
                  }
                return (
                  s.push({
                    behavioralEventContext: { viewType: 'view_profile' },
                    text: P({ screenName: l }),
                    Icon: j.a,
                    link: '/'.concat(l),
                  }),
                  c.a.createElement(w.a, { items: s, onCloseRequested: e, shouldCloseOnClick: !0 })
                )
              },
              [o, L, i, F, b],
            )
          if (!b || 'User' !== b.__typename || !b.legacy) return null
          var B = b.community_role,
            q = b.legacy,
            W = q.id_str,
            Q = q.name,
            X = void 0 === Q ? '' : Q,
            J = q.profile_image_url_https,
            G = q.protected,
            Y = q.screen_name,
            Z = q.verified
          if (!Y || !J || !X) return null
          var $ = B === d.a.Admin || B === d.a.Moderator
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(T.a, {
              avatarUri: J,
              decoration: W !== l ? c.a.createElement(K.a, { renderActionMenu: H }) : void 0,
              displayMode: 'UserCompact',
              displayNameLabel: $ ? B : void 0,
              isProtected: G,
              isVerified: Z,
              name: X,
              screenName: Y,
              userId: W,
            }),
            p
              ? c.a.createElement(
                  M.a,
                  v()(
                    {
                      confirmButtonType: 'primary',
                      onCancel: function () {
                        g(null)
                      },
                    },
                    p,
                  ),
                )
              : null,
          )
        },
        W = n('DQzJ'),
        Q = { context: 'members' },
        X = void 0 !== l ? l : (l = n('cI4y')),
        J = function (e) {
          return e.__id
        },
        G = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(W.a)(X, { communityId: t }),
            r = a.data,
            l = a.fetchNext,
            i = r.community.members_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(t),
            identityFunction: J,
            items: i,
            noItemsRenderer: n,
            onNearEnd: l,
            renderer: function (e) {
              return c.a.createElement(q, { communityId: t, userResult: e })
            },
          })
        },
        Y = function (e) {
          return c.a.createElement(b.a, { errorConfig: Q }, c.a.createElement(G, e))
        },
        Z = n('oQhu'),
        $ = { context: 'members' },
        ee = void 0 !== i ? i : (i = n('w9f9')),
        te = function (e) {
          return e.__id
        },
        ne = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(W.a)(ee, { communityId: t }),
            r = a.data,
            l = a.fetchNext,
            i = r.community.moderators_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(t),
            identityFunction: te,
            items: i,
            noItemsRenderer: n,
            onNearEnd: l,
            renderer: function (e) {
              return c.a.createElement(q, { communityId: t, userResult: e })
            },
          })
        },
        ae = function (e) {
          return c.a.createElement(b.a, { errorConfig: $ }, c.a.createElement(ne, e))
        },
        re = n('fTQJ'),
        le = g.a.cdd87523,
        ie = g.a.cca5191f,
        oe = g.a.e442bbb4,
        ce = g.a.e9488b0d,
        se = g.a.j43fea20,
        ue = { Moderators: 'Moderators', Members: 'Members' },
        me = Object(Z.a)(function (e) {
          return (function (e) {
            return Object(m.a)({
              timelineId: 'communityMembers-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityMembers
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MEMBERS_TIMELINE',
              perfKey: 'communityMembers',
              formatResponse: u.a,
            })
          })(e)
        }),
        de = Object(Z.a)(function (e) {
          return (function (e) {
            return Object(m.a)({
              timelineId: 'communityModerators-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityModerators
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MODERATORS_TIMELINE',
              perfKey: 'communityModerators',
              formatResponse: u.a,
            })
          })(e)
        }),
        ye = function () {
          return c.a.createElement(y.a, { header: le, message: ie })
        }
      t.b = function (e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          n = e.communityId,
          a = e.mode,
          r = e.userRole,
          l = a === ue.Moderators
        if (t && r === d.a.Admin)
          return l
            ? c.a.createElement(ae, { communityId: n, renderEmptyState: ye })
            : c.a.createElement(Y, { communityId: n, renderEmptyState: ye })
        var i = l ? de(n) : me(n),
          o = l ? ce : se
        return c.a.createElement(re.a, { loadingAccessibilityLabel: o, module: i, renderEmptyState: ye, title: oe })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return pe
        })
      n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA'),
        i = n('Ig1G'),
        o = n('EPsT'),
        c = n('eSoz'),
        s = n('rxPX'),
        u = n('0KEI'),
        m = n('R5kW'),
        d = function (e, t) {
          var n,
            a = Object(m.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        y = function (e, t) {
          var n = Object(c.h)(e, t.communityId)
          return 'CommunityJoinRequests' === (null == n ? void 0 : n.__typename)
        },
        p = function (e, t) {
          var n = Object(c.h)(e, t.communityId)
          return 'CommunityJoinRequests' === (null == n ? void 0 : n.__typename) ? n.pending_join_request_count : 0
        },
        g = function (e, t) {
          return Object(m.c)(e, t.communityId)
        },
        f = Object(s.a)()
          .propsFromState(function () {
            return { canReviewMemberRequests: y, count: d, joinRequestCount: p, moderationFetchStatus: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              fetchCommunityModerationData: m.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        b = n('kGix'),
        h = n('3XMw'),
        v = n.n(h),
        _ = n('KQzH'),
        E = n('yoO3'),
        k = n('mWs5'),
        C = n('MWbm'),
        S = n('rHpw'),
        I = n('Znyr'),
        F = n('6vad'),
        w = n('csss'),
        T = n('OOKO'),
        K = n('zIWA'),
        M = n('yiKp'),
        R = n.n(M),
        x = n('Lsrn'),
        L = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(L.a)(
            'svg',
            R()(
              R()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [x.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var A = O,
        j = n('M2x3'),
        N = n('SNyS'),
        P = n('S+H3'),
        H = n('PU7B'),
        B = v.a.dce5e1b3,
        D = v.a.c5d8c93d,
        U = v.a.c8c7f9fc,
        V = v.a.c045c7b6,
        z = v.a.a87df2ee,
        q = v.a.dc6ce7b4,
        W = v.a.gfca5254,
        Q = v.a.bb081ea1,
        X = v.a.h6beb5fa,
        J = v.a.e3f04700,
        G = v.a.efc26607,
        Y = v.a.gfccba44,
        Z = v.a.adfcc3cd,
        $ = v.a.d0330d9c,
        ee = v.a.fd67f7c8,
        te = v.a.gc00d212,
        ne = v.a.a997eca0,
        ae = 'Leave moderation team',
        re = 'No longer wish to be a moderator?',
        le =
          'By leaving the moderation team, you will no longer have access to Moderator Tools. You will also have to be re-invited as a moderator.',
        ie = 'Leave moderation role',
        oe = S.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        ce = r.a.createElement(K.a, { style: oe.thumbnail }),
        se = r.a.createElement(A, { style: oe.thumbnail }),
        ue = r.a.createElement(j.a, { style: oe.thumbnail }),
        me = r.a.createElement(N.a, { style: oe.thumbnail }),
        de = r.a.createElement(P.a, { style: oe.thumbnail }),
        ye = r.a.createElement(H.a, { style: oe.thumbnail }),
        pe = function (e) {
          var t = r.a.useContext(l.a).featureSwitches,
            n = e.canReviewMemberRequests,
            a = e.community,
            c = e.communityId,
            s = e.count,
            u = e.createLocalApiErrorHandler,
            m = e.fetchCommunityModerationData,
            d = e.joinRequestCount,
            y = e.match,
            p = e.moderationFetchStatus,
            g = u(),
            f = t.isTrue('c9s_moderation_enabled'),
            h = t.isTrue('c9s_rule_management_enabled'),
            v = t.isTrue('c9s_request_to_join_enabled'),
            S = t.isTrue('c9s_edit_moderators_enabled')
          r.a.useEffect(
            function () {
              p === b.a.NONE && f && m(c).catch(g)
            },
            [g, c, m, p, f],
          )
          var K = r.a.useCallback(
              function () {
                return f && s > 0
                  ? r.a.createElement(I.a, {
                      count: s,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: J,
                      withBorder: !1,
                    })
                  : null
              },
              [s, f],
            ),
            M = r.a.useCallback(
              function () {
                return v && d > 0
                  ? r.a.createElement(I.a, {
                      count: d,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: J,
                      withBorder: !1,
                    })
                  : null
              },
              [d, v],
            ),
            R = a.role,
            x = R === i.a.Admin ? B : D,
            L = R === i.a.Admin ? Z : $,
            O = !y.isExact
          return r.a.createElement(
            E.a,
            { locationKey: 'communitySettingsRoot' },
            r.a.createElement(
              k.a,
              { communityId: c, screenType: 'secondaryRoot', title: x, withDetailOpen: O },
              r.a.createElement(
                C.a,
                null,
                f
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(F.b, { text: U }),
                      r.a.createElement(_.a, {
                        label: V,
                        link: '/i/communities/'.concat(c, '/moderation/reported_tweets'),
                        renderRightContent: K,
                        thumbnail: ce,
                      }),
                    )
                  : null,
                v && n
                  ? r.a.createElement(_.a, {
                      label: Y,
                      link: '/i/communities/'.concat(c, '/moderation/member_requests'),
                      renderRightContent: M,
                      thumbnail: se,
                    })
                  : null,
                r.a.createElement(F.b, { text: z }),
                r.a.createElement(_.a, {
                  description: G({ memberCount: a.member_count }),
                  label: q,
                  link: '/i/communities/'.concat(c, '/tools/members'),
                  thumbnail: de,
                }),
                h
                  ? r.a.createElement(_.a, {
                      description: L,
                      label: W,
                      link: '/i/communities/'.concat(c, '/tools/rules'),
                      thumbnail: ye,
                    })
                  : null,
                R === i.a.Admin
                  ? r.a.createElement(_.a, {
                      description: ee,
                      label: Q,
                      link: '/i/communities/'.concat(c, '/tools/settings'),
                      thumbnail: ue,
                    })
                  : null,
                r.a.createElement(w.a, {
                  description: ne,
                  label: te,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: me,
                }),
                R === i.a.Moderator && S
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(T.a, { spacing: 'space1' }),
                      r.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: ie,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: re,
                        confirmationSheetText: le,
                        label: ae,
                        onConfirmationSheetConfirm: function () {},
                        withBottomBorder: !1,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        ge = f(pe)
      t.default = ge
    },
    'ldL/': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDescriptionToggle_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'b0d158b55a32cd7c45788562b8f71a71',
      }
      t.default = a
    },
    m0MN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesModerationContainer', function () {
          return Ut
        })
      var a,
        r,
        l,
        i,
        o,
        c,
        s = n('97Jx'),
        u = n.n(s),
        m = n('m3Bd'),
        d = n.n(m),
        y = (n('KqXw'), n('WNMA'), n('ERkP')),
        p = n.n(y),
        g = n('v6aA'),
        f = n('+Kfv'),
        b = n('Ig1G'),
        h = n('1Idg'),
        v = n('eSoz'),
        _ = n('rxPX'),
        E = n('0KEI'),
        k = Object(_.a)()
          .propsFromState(function () {
            return { community: h.a, fetchStatus: h.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: v.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        C = n('G1WX'),
        S = (n('ho0z'), n('es0u')),
        I = n('3XMw'),
        F = n.n(I),
        w = n('VTxf'),
        T = n('yoO3'),
        K = n('Fr3L'),
        M = n('FIs5'),
        R = n('TEoO'),
        x = (n('1t7P'), n('jQ/y'), n('ddV6')),
        L = n.n(x),
        O = n('MWbm'),
        A = n('/yvb'),
        j = n('rHpw'),
        N = (n('enFi'), n('jAXQ')),
        P = n.n(N),
        H = (n('7x/C'), n('JtPf'), n('849X'), n('TJCb'), n('9SqB')),
        B = n.n(H),
        D = void 0 !== a ? a : (a = n('Dm5+')),
        U = void 0 !== r ? r : (r = n('C2fM')),
        V = F.a.i22835dd,
        z = F.a.cb59a0fd,
        q = void 0 !== l ? l : (l = n('PMbW')),
        W = function (e) {
          var t = e.communityId,
            n = e.communityJoinRequestActions,
            a = e.userId,
            r = P()(q, n),
            l = r.join_request_approve_action_result,
            i = r.join_request_deny_action_result,
            o = (function () {
              var e = B()(D),
                t = L()(e, 2),
                n = t[0],
                a = t[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      r = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: r },
                            onCompleted: function (t) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [n, a],
                ),
                a,
              ]
            })(),
            c = L()(o, 2),
            s = c[0],
            u = c[1],
            m = (function () {
              var e = B()(U),
                t = L()(e, 2),
                n = t[0],
                a = t[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      r = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: r },
                            onCompleted: function (t) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [n, a],
                ),
                a,
              ]
            })(),
            d = L()(m, 2),
            y = d[0],
            g = d[1],
            f = u || g,
            b = 'CommunityJoinRequestDenyAction' === (null == i ? void 0 : i.__typename),
            h = 'CommunityJoinRequestApproveAction' === (null == l ? void 0 : l.__typename),
            v = p.a.useCallback(
              function () {
                y({ communityId: t, userId: a })
              },
              [y, t, a],
            ),
            _ = p.a.useCallback(
              function () {
                s({ communityId: t, userId: a })
              },
              [s, t, a],
            )
          return p.a.createElement(
            O.a,
            { style: Q.buttons },
            p.a.createElement(A.a, { disabled: !b || f, onPress: v, style: Q.button, type: 'destructiveOutlined' }, z),
            p.a.createElement(A.a, { disabled: !h || f, onPress: _, style: Q.button, type: 'primaryOutlined' }, V),
          )
        },
        Q = j.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        X = n('tocL'),
        J = n('h0NW'),
        G = n('t62R'),
        Y = n('0yYu'),
        Z = n('IMA+'),
        $ = n('GBcw'),
        ee = n('6Rrp'),
        te = n('5oT/'),
        ne = void 0 !== i ? i : (i = n('8vG3')),
        ae = F.a.b9bd56d4,
        re = F.a.a340df66,
        le = function (e) {
          var t = e.icon,
            n = e.label
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(J.a, {
              containerStyle: ue.container,
              items: [{ label: p.a.createElement(G.b, null, n), decoration: t }],
            }),
            p.a.createElement(Y.a, null),
          )
        },
        ie = { blocking: F.a.g8907fde, muting: F.a.f69c2298 },
        oe = {
          mutual: { contextType: X.a.FollowMutual, text: F.a.ae2205d1 },
          following: { contextType: X.a.FollowFollowing, text: F.a.d960b55b },
          followedBy: { contextType: X.a.FollowFollowed, text: F.a.b7f1e58a },
        },
        ce = {},
        se = function (e) {
          var t = e.communityJoinRequest,
            n = P()(ne, t),
            a = n.user_relationship.community.id_str,
            r = n.user_relationship.user_results.result,
            l = n.state
          if (!r || 'User' !== r.__typename || !r.legacy) return null
          var i = r.id_str,
            o = r.legacy,
            c = o.blocking,
            s = o.description,
            u = o.followed_by,
            m = o.following,
            d = o.muting,
            y = o.name,
            g = o.profile_image_url_https,
            f = o.screen_name
          if (!g || !f || !y) return null
          switch (l) {
            case 'Approved':
              return p.a.createElement(le, { icon: me, label: ae({ screenName: f }) })
            case 'Denied':
              return p.a.createElement(le, { icon: de, label: re({ screenName: f }) })
            case 'Invalid':
              return null
          }
          var b = n.created_at,
            h = (function (e) {
              var t = e.following,
                n = e.isFollowedBy
              return t && n ? oe.mutual : t ? oe.following : n ? oe.followedBy : void 0
            })({ isFollowedBy: u, following: m }),
            v = (function (e) {
              var t = e.blocking,
                n = e.muting
              return t ? ie.blocking : n ? ie.muting : void 0
            })({ blocking: c, muting: d }),
            _ = p.a.createElement(
              O.a,
              null,
              v && p.a.createElement(G.b, { color: 'red500', style: ue.bottomText }, v),
              p.a.createElement(W, { communityId: a, communityJoinRequestActions: n.actions, userId: i }),
            )
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(Z.a, {
              avatarUri: g,
              bottomControl: _,
              description: s || void 0,
              displayMode: 'UserDetailed',
              entities: ce,
              name: y,
              screenName: f,
              screenNameSuffix: p.a.createElement($.a, { color: 'gray700', timestamp: b }),
              socialContext: h,
              userId: i,
            }),
            p.a.createElement(Y.a, null),
          )
        },
        ue = j.a.create(function (e) {
          return {
            actioned: { flexDirection: 'row' },
            bottomText: { marginTop: e.spaces.space12 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            container: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        me = p.a.createElement(ee.a, { style: ue.icon }),
        de = p.a.createElement(te.a, { style: ue.icon }),
        ye = F.a.addbb11e,
        pe = F.a.c38131de,
        ge = void 0 !== o ? o : (o = n('Jt8P')),
        fe = function (e) {
          return e.id
        },
        be = function (e) {
          return p.a.createElement(se, { communityJoinRequest: e })
        },
        he = function () {
          return p.a.createElement(M.a, { header: ye, message: pe })
        },
        ve = function (e) {
          var t = e.communityJoinRequests,
            n = e.fetchNext,
            a = P()(ge, t).items
          return p.a.createElement(R.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: fe,
            items: a,
            noItemsRenderer: he,
            onNearEnd: n,
            renderer: be,
          })
        },
        _e = n('VS6U'),
        Ee = n('zCf4'),
        ke = n('DQzJ'),
        Ce = F.a.gfccba44,
        Se = 'member_requests',
        Ie = { context: Se },
        Fe = void 0 !== c ? c : (c = n('gAl+')),
        we = function (e) {
          var t = Object(Ee.f)(),
            n = e.communityId,
            a = Object(ke.a)(Fe, { communityId: n }),
            r = a.data,
            l = a.fetchNext,
            i = r.community,
            o = i.join_requests_result,
            c = i.name
          if ('CommunityJoinRequests' === o.__typename) {
            var s = o.pending_join_requests_slice,
              u = p.a.createElement(S.a, {
                communityId: n,
                withCommunityRules: !0,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              m = p.a.createElement(ve, { communityJoinRequests: s, fetchNext: l })
            return p.a.createElement(
              T.a,
              { behavioralEventViewType: Se },
              p.a.createElement(_e.a, {
                backLocation: '/i/communities/'.concat(n, '/tools'),
                history: t,
                primaryContent: m,
                sidebarContent: u,
                subtitle: c,
                title: Ce,
              }),
            )
          }
          return p.a.createElement(w.a, null)
        },
        Te = function (e) {
          var t = e.communityId
          return p.a.createElement(K.a, { errorConfig: Ie }, p.a.createElement(we, { communityId: t }))
        },
        Ke = n('/de5'),
        Me = n('yiKp'),
        Re = n.n(Me),
        xe = (n('2G9S'), n('uFXj'), n('z84I'), n('3zvM')),
        Le = n('lMB6'),
        Oe = Object(xe.f)({ namespace: 'communityReports' }),
        Ae = Le.a.register(Oe),
        je = n('G6rE'),
        Ne = function (e, t) {
          var n,
            a = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (a ? Ae.selectMany(e, a) : []).map(function (t) {
            var n = t.user
            return Re()(Re()({}, t), {}, { reporter: je.e.select(e, n) })
          })
        },
        Pe = Object(_.a)().propsFromState(function () {
          return { reports: Ne }
        }),
        He = n('855f'),
        Be = n('cHvH'),
        De = n('5mJL'),
        Ue = n('efqG'),
        Ve = n('21zW'),
        ze = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return p.a.createElement(
              F.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              p.a.createElement(G.b, { color: 'primary' }, F.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: He.a.getFormattedCount(e) })
        },
        qe = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            a = t.created_at,
            r = t.reporter,
            l = p.a.createElement($.a, { timestamp: a })
          return r
            ? p.a.createElement(Be.a, null, function (e) {
                var a = e.windowWidth
                return p.a.createElement(
                  O.a,
                  { style: n ? Qe.bottomBorder : null },
                  p.a.createElement(Z.a, {
                    avatarUri: r.profile_image_url_https,
                    decoration: l,
                    displayMode: 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    screenName: r.screen_name,
                    style: a > j.a.theme.breakpoints.small ? Qe.userCell : void 0,
                    userId: r.id_str,
                  }),
                  p.a.createElement(
                    De.a,
                    { avatarCell: null },
                    p.a.createElement(G.b, { color: 'gray700', size: 'subtext2', style: Qe.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        We = Pe(function (e) {
          var t = p.a.useState(!1),
            n = L()(t, 2),
            a = n[0],
            r = n[1],
            l = e.reports,
            i = e.tweetCase,
            o = i.report_count,
            c = i.report_created_at_max
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(
              Ue.a,
              {
                contentStyle: Qe.popover,
                onDismiss: function () {
                  r(!1)
                },
                renderContent: function () {
                  return p.a.createElement(
                    O.a,
                    { style: Qe.contentContainer },
                    l.map(function (e, t) {
                      return p.a.createElement(qe, { key: e.id_str, report: e, withBottomBorder: t < l.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              p.a.createElement(
                G.b,
                {
                  onPress: function () {
                    r(!0)
                  },
                },
                ze(o),
              ),
            ),
            p.a.createElement(Ve.a, null),
            p.a.createElement($.a, { timestamp: c }),
          )
        }),
        Qe = j.a.create(function (e) {
          return {
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingBottom: e.spaces.space12,
            },
            contentContainer: { paddingBottom: e.componentDimensions.gutterVertical },
            popover: { maxWidth: '100%' },
            userCell: { width: e.breakpoints.small },
            rule: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Xe = n('9EWH'),
        Je = Object(xe.f)({ namespace: 'communityCases' }),
        Ge = {
          keepTweet: Object(xe.c)(Je, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Xe.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(xe.c)(Je, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Xe.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        Ye = Re()(Re()({}, Je), Ge),
        Ze = Le.a.register(Ye),
        $e = n('XOJV'),
        et = function (e, t) {
          var n = t.tweetId
          return n ? $e.a.selectHydrated(e, n) : void 0
        },
        tt = function (e, t) {
          var n = t.tweetId
          return Ze.select(e, n)
        },
        nt = Object(_.a)()
          .propsFromState(function () {
            return { tweet: et, tweetCase: tt }
          })
          .propsFromActions(function () {
            return { keep: Ze.keepTweet, dismiss: Ze.dismissTweet }
          }),
        at = n('b5s6'),
        rt = n('mjJ+'),
        lt = n('IG7M'),
        it = n('boUI'),
        ot = n('zIWA'),
        ct = n('fz3c'),
        st = (n('yH/f'), n('n5fo')),
        ut = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        mt = F.a.ad10c66d,
        dt = F.a.c6caed9c,
        yt = function (e) {
          return p.a.createElement(G.b, null, e)
        },
        pt = function (e) {
          var t = e.screenName
          switch (e.type) {
            case ut.Hidden:
              var n = (function (e) {
                  return p.a.createElement(F.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                a = [{ label: yt(n), decoration: ft }]
              return p.a.createElement(J.a, { accessibilityLabel: mt, containerStyle: gt.container, items: a })
            case ut.Kept:
              var r = (function (e) {
                  return p.a.createElement(F.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                l = [{ label: yt(r), decoration: bt }]
              return p.a.createElement(J.a, { accessibilityLabel: dt, containerStyle: gt.container, items: l })
            default:
              return null
          }
        },
        gt = j.a.create(function (e) {
          return {
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            container: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        ft = p.a.createElement(st.a, { style: gt.icon }),
        bt = p.a.createElement(ee.a, { style: gt.icon }),
        ht = { page: 'reported_tweets', component: 'tweet' },
        vt = { viewType: 'tweet_moderation_case' },
        _t = F.a.f1d9930c,
        Et = F.a.a219e217,
        kt = F.a.fa524057,
        Ct = F.a.g30bc699,
        St = F.a.f0306107,
        It = F.a.b99364a5,
        Ft = nt(function (e) {
          var t,
            n = p.a.useContext(g.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            r = e.keep,
            l = e.tweet,
            i = e.tweetCase,
            o = e.tweetId,
            c = null == l || null === (t = l.user) || void 0 === t ? void 0 : t.screen_name,
            s = p.a.useCallback(
              function (e) {
                if (l && c) {
                  var t = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: Ct({ screenName: c }),
                      Icon: it.a,
                      link: '/'.concat(c),
                    },
                    {
                      text: St,
                      Icon: ot.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(ct.a.Tweet, '/').concat(l.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: ht },
                      },
                      onClick: function () {
                        e()
                      },
                    },
                  ]
                  return (
                    n &&
                      t.push({
                        text: It({ screenName: c }),
                        Icon: te.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(ct.a.RemoveCommunityMember, '/').concat(l.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: ht },
                        },
                        onClick: function () {
                          e()
                        },
                      }),
                    p.a.createElement(rt.a, { items: t, onCloseRequested: e })
                  )
                }
                return null
              },
              [l, c, n],
            ),
            u = function () {
              r(o)
            },
            m = function () {
              a(o)
            }
          if (c && (null == l ? void 0 : l.reportingVisibility) === ct.b.HiddenCommunityTweet)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(pt, { screenName: c, type: ut.Hidden }),
              p.a.createElement(Y.a, null),
            )
          if (
            (null != i && i.isDismissed) ||
            'community_tweet_member_removed' === (null == l ? void 0 : l.limited_actions)
          )
            return null
          if (c && null != i && i.isKept)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(pt, { screenName: c, type: ut.Kept }),
              p.a.createElement(Y.a, null),
            )
          if (!i) return null
          return p.a.createElement(
            f.a,
            { behavioralEventContext: vt },
            p.a.createElement(
              O.a,
              { style: wt.container },
              p.a.createElement(
                O.a,
                { style: wt.reportsBar },
                p.a.createElement(We, { tweetCase: i }),
                p.a.createElement(lt.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: s,
                  style: wt.menu,
                }),
              ),
              p.a.createElement(at.a, { tweetId: o }),
              l
                ? p.a.createElement(Be.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= j.a.theme.breakpoints.small
                    return p.a.createElement(
                      O.a,
                      { style: [wt.buttons, t && wt.buttonsMobile] },
                      p.a.createElement(
                        A.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(ct.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Re()(Re()({}, ht), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [wt.button, t && wt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        _t,
                      ),
                      p.a.createElement(
                        A.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [wt.button, t && wt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        kt,
                      ),
                    )
                  })
                : p.a.createElement(
                    O.a,
                    { style: wt.buttons },
                    p.a.createElement(
                      A.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: m,
                        style: wt.button,
                        type: 'primaryOutlined',
                      },
                      Et,
                    ),
                  ),
            ),
            p.a.createElement(Y.a, null),
          )
        }),
        wt = j.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            buttonsMobile: { justifyContent: 'space-between' },
            button: { marginRight: e.spaces.space12 },
            buttonMobile: { flex: 1 },
            container: { marginHorizontal: e.spaces.space20 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            hiddenTweetContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            menu: { marginLeft: 'auto' },
            reportsBar: { marginVertical: e.spaces.space16, flexDirection: 'row' },
          }
        }),
        Tt = n('hqKg'),
        Kt = n('wAC9'),
        Mt = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        Rt = function () {
          return Object(Tt.createSelector)(Mt, function (e) {
            return e
              ? (function (e) {
                  return Object(Kt.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return Re()(Re()({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        xt = Object(_.a)()
          .propsFromState(function () {
            return { sliceModule: Rt() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Lt = n('FS1z'),
        Ot = F.a.c045c7b6,
        At = F.a.dffb0774,
        jt = F.a.cbb2a93c,
        Nt = xt(function (e) {
          var t = p.a.useContext(g.a).featureSwitches,
            n = e.community,
            a = e.history,
            r = e.sliceModule,
            l = n.id_str,
            i = n.name,
            o = (n || []).rules,
            c = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            s = t.isTrue('responsive_web_communities_slices_enabled'),
            u = r
              ? p.a.createElement(Lt.a, {
                  module: r,
                  noItemsRenderer: function () {
                    return p.a.createElement(M.a, { header: At, message: jt })
                  },
                  renderer: function (e) {
                    return p.a.createElement(Ft, { tweetId: e })
                  },
                })
              : null
          return p.a.createElement(
            T.a,
            { behavioralEventViewType: 'reported_tweets' },
            p.a.createElement(_e.a, {
              backLocation: '/i/communities/'.concat(l),
              history: a,
              primaryContent: s ? u : null,
              sidebarContent: p.a.createElement(S.a, {
                communityId: l,
                rulesLimit: null == o ? void 0 : o.length,
                withCommunityRules: c,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: i,
              title: Ot,
            }),
          )
        }),
        Pt = ['analytics', 'community'],
        Ht = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        Bt = { viewType: 'community' }
      function Dt(e) {
        var t = p.a.useContext(g.a).featureSwitches,
          n = (e.analytics, e.community),
          a = d()(e, Pt),
          r = a.match.path,
          l = t.isTrue('c9s_request_to_join_enabled')
        return Object(b.c)(n.role)
          ? p.a.createElement(
              f.a,
              { behavioralEventContext: Bt },
              p.a.createElement(
                Ee.d,
                null,
                p.a.createElement(
                  Ee.b,
                  { exact: !0, path: ''.concat(r, '/reported_tweets') },
                  p.a.createElement(Nt, u()({}, a, { community: n })),
                ),
                l
                  ? p.a.createElement(
                      Ee.b,
                      { exact: !0, path: ''.concat(r, '/member_requests') },
                      p.a.createElement(Te, { communityId: n.id_str }),
                    )
                  : null,
                p.a.createElement(Ee.b, null, p.a.createElement(Ke.b, a)),
              ),
            )
          : p.a.createElement(Ke.b, a)
      }
      function Ut(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          r = e.fetchStatus,
          l = d()(e, Ht),
          i = l.match.params.communityId,
          o = n(),
          c = p.a.useCallback(
            function () {
              i && a(i).catch(o)
            },
            [i, o, a],
          )
        return (
          p.a.useEffect(
            function () {
              return c()
            },
            [c],
          ),
          p.a.createElement(C.a, {
            fetchStatus: r,
            onRequestRetry: c,
            render: function () {
              return t ? p.a.createElement(Dt, u()({}, l, { community: t })) : null
            },
          })
        )
      }
      t.default = k(Ut)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      n('KqXw'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('3XMw'),
        i = n.n(l),
        o = n('M2mT'),
        c = n('zCf4'),
        s = n('MWbm'),
        u = n('mw9i'),
        m = n('0yYu'),
        d = n('/yvb'),
        y = n('rHpw'),
        p = i.a.i2209530
      function g(e) {
        var t = e.children,
          n = e.communityId,
          a = e.onSubmit,
          l = e.rightControl,
          i = e.screenType,
          y = e.secondaryBar,
          g = e.submitDisabled,
          b = e.subtitle,
          h = e.title,
          v = e.withBottomBorder,
          _ = e.withDetailOpen,
          E = Object(c.f)(),
          k = 'secondaryRoot' === i,
          C = '/i/communities/'.concat(n),
          S = ''.concat(C, '/tools'),
          I = k ? C : S,
          F = r.a.useCallback(
            function () {
              k ? E.replace(I) : E.goBack({ backLocation: I })
            },
            [I, E, k],
          )
        return r.a.createElement(
          o.a,
          {
            backLocation: I,
            onBackClick: F,
            rightControl: l,
            screenType: i,
            secondaryBar: y,
            showSubtitleOnWideDetail: !1,
            subtitle: b,
            title: h,
            withBottomBorder: v,
            withDetailOpen: _,
          },
          r.a.createElement(
            u.a,
            { style: f.contentRoot },
            r.a.createElement(s.a, { style: f.chilrenRoot }, t),
            a
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(m.a, null),
                  r.a.createElement(
                    u.a,
                    { style: f.buttonContainer },
                    r.a.createElement(d.a, { disabled: g, onPress: a, style: f.button, type: 'brandFilled' }, p),
                  ),
                )
              : null,
          ),
        )
      }
      var f = y.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(y.a.iPhoneOffsetBottom, ')'),
          },
          chilrenRoot: { paddingBottom: e.spaces.space12 },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: e.spaces.space12,
          },
          button: { marginHorizontal: e.spaces.space12 },
        }
      })
    },
    mys5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditRuleScreen', function () {
          return N
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('1Idg'),
        y = function (e, t) {
          return Object(s.A)(e, s.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: y }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              editRule: c.c.editRule,
              removeRule: c.c.removeRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_rule' }),
        g = n('k49u'),
        f = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        v = n('5FtR'),
        _ = n('OwKm'),
        E = n('AfjF'),
        k = n('MWbm'),
        C = n('/yvb'),
        S = n('jtO7'),
        I = n('4zmP'),
        F = n('eb3s'),
        w = n('rHpw'),
        T = h.a.h99020ef,
        K = h.a.i2209530,
        M = h.a.a1c93d73,
        R = h.a.f74a5adb,
        x = h.a.fbb0ed91,
        L = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        j = h.a.c3a0d44e
      function N(e) {
        var t = i.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          l = e.createLocalApiErrorHandler,
          c = e.editRule,
          s = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          p = a.id_str,
          b = a.rules,
          h = i.a.useState(''),
          w = r()(h, 2),
          N = w[0],
          H = w[1],
          B = i.a.useState(''),
          D = r()(B, 2),
          U = D[0],
          V = D[1],
          z = i.a.useState(!1),
          q = r()(z, 2),
          W = q[0],
          Q = q[1],
          X = i.a.useState(''),
          J = r()(X, 2),
          G = J[0],
          Y = J[1],
          Z = i.a.useState(!1),
          $ = r()(Z, 2),
          ee = $[0],
          te = $[1],
          ne = i.a.useState(!1),
          ae = r()(ne, 2),
          re = ae[0],
          le = ae[1],
          ie = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              H(n), V(t), Q(a)
            },
            [H, V, Q],
          ),
          oe = i.a.useCallback(
            function () {
              var e = l({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), Q(!1), []
                },
              })
              'string' == typeof d &&
                c(p, { ruleId: d, name: N, description: U })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, N, U, d, c, s, l],
          ),
          ce = i.a.useCallback(
            function () {
              var e = l({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), te(!1), []
                },
              })
              'string' == typeof d &&
                u(p, { ruleId: d })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, d, u, s, l],
          )
        if (!d || !m) return i.a.createElement(v.a, { to: '/i/communities/'.concat(p, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = i.a.createElement(
            C.a,
            {
              disabled: !W,
              onPress: function () {
                y ? le(!0) : oe()
              },
              size: 'small',
              type: 'brandFilled',
            },
            K,
          ),
          de = 1 === b.length,
          ye = t
            ? i.a.createElement(
                k.a,
                { style: P.delete },
                i.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: x,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          pe = de ? i.a.createElement(k.a, { style: P.callout }, i.a.createElement(I.a, { text: R })) : void 0,
          ge = ee
            ? i.a.createElement(F.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: L,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: ce,
                text: O,
              })
            : void 0,
          fe = re
            ? i.a.createElement(E.a, {
                onCancel: function () {
                  le(!1)
                },
                onConfirm: function () {
                  n(), oe(), le(!1)
                },
              })
            : void 0
        return i.a.createElement(
          f.b,
          { behavioralEventViewType: 'rules', history: s, rightControl: me, title: T },
          pe,
          i.a.createElement(_.a, { description: se || '', errorText: G, name: ue, onChange: ie }),
          ye,
          ge,
          fe,
        )
      }
      t.default = p(N)
      var P = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        b = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        h = n.n(b),
        v = n('pXBW'),
        _ = n('6/RC'),
        E = n('UIzd'),
        k = n.n(E),
        C = n('kGix')
      n.d(t, 'a', function () {
        return C.a
      })
      var S = n('fs1G'),
        I = n('0KEI'),
        F = n('lU4h'),
        w = n.n(F),
        T = n('21nk'),
        K = n.n(T),
        M = n('bCEw'),
        R = n.n(M),
        x = n('Ud88'),
        L = n.n(x),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (e = t.call.apply(t, [this].concat(r))), f()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof v.a)) throw e
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
        })(h.a.Component),
        j = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = K()(t, n)
          return a({ fetchStatus: C.a.LOADED, data: r, error: null, retry: S.a })
        },
        N = function (e, t) {
          if (_.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                l = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                o = n.variables,
                c = R()(e),
                s = r()(c, 2),
                u = s[0],
                m = s[1],
                d = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                y = w()(o),
                p = r()(y, 1)[0],
                g = h.a.useCallback(
                  function () {
                    m(p, { fetchPolicy: 'network-only' })
                  },
                  [m, p],
                )
              return (
                h.a.useLayoutEffect(
                  function () {
                    m(p, { fetchPolicy: l })
                  },
                  [l, m, p],
                ),
                u
                  ? h.a.createElement(
                      h.a.Suspense,
                      { fallback: h.a.createElement(O, { render: i }) },
                      h.a.createElement(
                        A,
                        { errorHandler: d(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: C.a.FAILED, error: t, data: null, retry: n })
                            : h.a.createElement(j, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var l = a.render,
              i = a.variables,
              o = L()(),
              c = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = w()(i),
              u = r()(s, 1)[0],
              m = n.get(o)
            if (m) return m
            var d = h.a.lazy(function () {
              return k()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return l({ fetchStatus: C.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (c(t.errorConfig.options || {})(e),
                        l({ fetchStatus: C.a.FAILED, data: null, error: e, retry: S.a }))
                      : h.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(o, e).get.bind(n, o) }
                })
            })
            return h.a.createElement(h.a.Suspense, null, h.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddRuleScreen', function () {
          return T
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          return Object(s.A)(e, s.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              createRule: c.c.createRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_ADD_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'add_rule' }),
        p = n('k49u'),
        g = n('jHSc'),
        f = n('3XMw'),
        b = n.n(f),
        h = n('OwKm'),
        v = n('AfjF'),
        _ = n('/yvb'),
        E = n('eb3s'),
        k = b.a.j560c8ea,
        C = b.a.i2209530,
        S = b.a.gaa3239a,
        I = b.a.a67445d5,
        F = b.a.fcbe0992,
        w = b.a.j24c37b2
      function T(e) {
        var t = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          l = e.createLocalApiErrorHandler,
          c = e.createRule,
          s = e.history,
          u = e.shouldShowRuleInformEducation,
          m = a.id_str,
          d = a.rules,
          y = i.a.useState(''),
          f = r()(y, 2),
          b = f[0],
          T = f[1],
          K = i.a.useState(''),
          M = r()(K, 2),
          R = M[0],
          x = M[1],
          L = i.a.useState(!1),
          O = r()(L, 2),
          A = O[0],
          j = O[1],
          N = i.a.useState(!1),
          P = r()(N, 2),
          H = P[0],
          B = P[1],
          D = i.a.useState(''),
          U = r()(D, 2),
          V = U[0],
          z = U[1],
          q = i.a.useState(!1),
          W = r()(q, 2),
          Q = W[0],
          X = W[1],
          J = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              z(''), T(n), x(t), j(a)
            },
            [T, x, j],
          ),
          G = i.a.useCallback(
            function () {
              B(!0)
              var e = l({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : S
                  return z(n), j(!1), []
                },
              })
              c(m, { name: b, description: R })
                .then(function () {
                  s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, R, c, s, l],
          ),
          Y = i.a.useCallback(
            function () {
              u ? X(!0) : G()
            },
            [G, u],
          ),
          Z = i.a.createElement(_.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= t,
          ee = i.a.createElement(E.a, {
            confirmButtonLabel: w,
            headline: I,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: F({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = Q
            ? i.a.createElement(v.a, {
                onCancel: function () {
                  X(!1)
                },
                onConfirm: function () {
                  n(), G(), X(!1)
                },
              })
            : void 0
        return $ && !H
          ? ee
          : i.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: k },
              i.a.createElement(h.a, { description: '', errorText: V, name: '', onChange: J }),
              te,
            )
      }
      t.default = y(T)
    },
    nTxI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesModal', function () {
          return w
        })
      n('7xRU'), n('KqXw'), n('WNMA'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('+Kfv'),
        i = n('PKbs'),
        o = n('egQk'),
        c = n('1Idg'),
        s = n('eSoz'),
        u = n('li/m'),
        m = n('rxPX'),
        d = n('0KEI'),
        y = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || c.a(e, t)
        },
        p = Object(m.a)()
          .propsFromState(function () {
            return { community: y, fetchStatus: c.b, isCommunityMember: c.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: u.b,
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        g = n('MDbM'),
        f = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        v = n('5FtR'),
        _ = n('t62R'),
        E = n('/yvb'),
        k = n('rHpw'),
        C = h.a.h4fbfa57,
        S = h.a.ea8cfb1d,
        I = h.a.dc1b14a1,
        F = { viewType: 'community' },
        w = function (e) {
          var t,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            c = e.fetchCommunityIfNeeded,
            s = e.fetchStatus,
            u = e.history,
            m = e.isCommunityMember,
            d = e.join,
            y = e.location,
            p = e.match.params.communityId,
            b = null === (t = y.state) || void 0 === t ? void 0 : t.joinRequestRequired
          r.a.useEffect(function () {
            p && !n && s !== g.a.LOADED && c(p).catch(a())
          })
          var h,
            k = b ? S : C,
            w = function () {
              if (n) {
                var e = n.id_str
                d(e)
                  .then(function () {
                    u.push('/i/communities/'.concat(e))
                  })
                  .catch(a())
              }
            }
          if (n) {
            var T = n.name,
              M = n.rules,
              R = n.theme
            return M && M.length && !m
              ? r.a.createElement(
                  l.a,
                  { behavioralEventContext: F },
                  r.a.createElement(
                    f.b,
                    {
                      behavioralEventViewType: 'rules',
                      history: u,
                      rightControl: r.a.createElement(E.a, { onPress: w, size: 'small', type: 'brandFilled' }, k),
                      title: Object(o.a)({ communityName: T }),
                    },
                    r.a.createElement(i.b, {
                      badgeStyle: K.badgeStyle,
                      headerContainerStyle: K.containerStyle,
                      headerExplanationStyle: K.headerExplanationStyle,
                      heading:
                        ((h = T), r.a.createElement(_.b, { size: 'title4', weight: 'bold' }, I({ communityName: h }))),
                      rules: M,
                      theme: R,
                    }),
                  ),
                )
              : r.a.createElement(v.a, { to: '/i/communities/'.concat(n.id_str) })
          }
          return s === g.a.LOADED ? r.a.createElement(v.a, { to: '/' }) : null
        },
        T = p(w),
        K =
          ((t.default = T),
          k.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              headerExplanationStyle: { marginTop: e.spaces.space8 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
              },
            }
          }))
    },
    nmVb: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var r = a(n('yyPN'))
      e.exports = t.default
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'g', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return g
        }),
        n.d(t, 'f', function () {
          return b
        })
      var a = n('RhWx'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        c = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n,
          a = c.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? i()(i()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function m(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(c.b.WordEnd),
          l = r >= 0 ? n.slice(r) : '',
          i = a.search(c.b.WordBoundary),
          o = l + a.slice(0, i)
        return o.trim() ? { start: r, end: e + i, word: o } : { start: -1, end: -1, word: '' }
      }
      function d() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function y(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function p(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          l = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(l))
      }
      var g = Object(o.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        f = 0,
        b = function () {
          return 'typeaheadDropdown-'.concat((f += 1))
        }
    },
    'pd/v': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'restrictedMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  {
                    kind: 'Variable',
                    name: 'restricted_membership_settings',
                    variableName: 'restrictedMembershipSettings',
                  },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  l,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      c,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'FqEbFNXw1mnkDrNk7OQl-Q',
            metadata: {},
            name: 'edit_CommunityRestricted_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (t.default = y)
    },
    'rPb+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'communityPeopleSliceItem_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: (i = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'role', variableName: 'role' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_role_put',
                plural: !1,
                selections: [
                  (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [a, l, r],
            kind: 'Operation',
            name: 'communityPeopleSliceItem_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: i,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_role_put',
                plural: !1,
                selections: [o, { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'ZFVCFqy3PBrHNcMX-zNQLA',
            metadata: {},
            name: 'communityPeopleSliceItem_roleUpdate_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(c.hash = '3998fef17abe741a7d272887d0adb522'), (t.default = c)
    },
    sH2E: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityRulesQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' }],
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
            name: 'CommunityRulesQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      l,
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  i,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'TFdlNPIMu57c2mmCv7ZN8g',
            metadata: {},
            name: 'CommunityRulesQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '6e211d651c75f6fae70fcc6ba46978c3'), (t.default = o)
    },
    tFuX: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'openMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  l,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      c,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'T8cVbovU4L1jOLVfHdJ-Tg',
            metadata: {},
            name: 'edit_CommunityOpen_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = 'ea1908fb41cb57016d070125122b615d'), (t.default = y)
    },
    tgdH: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }],
        kind: 'Fragment',
        metadata: null,
        name: 'communityPeopleSliceItem_userResult',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'result',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              {
                kind: 'InlineFragment',
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                  {
                    alias: null,
                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                    kind: 'ScalarField',
                    name: 'community_role',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiUser',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'profile_image_url_https',
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
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
        hash: '8207e707560a4795bb4bc55f48b8501c',
      }
      t.default = a
    },
    tnnC: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      t.default = a
    },
    tot2: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityPeopleScreen', function () {
          return T
        })
      n('vrRf')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('+Kfv'),
        i = n('es0u'),
        o = n('XtoV'),
        c = n('1Idg'),
        s = n('eSoz'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { community: c.a, communityId: c.c, screenName: c.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        y = n('3XMw'),
        p = n.n(y),
        g = n('gDCe'),
        f = n('yoO3'),
        b = n('VS6U'),
        h = n('k/OQ'),
        v = n('krnS'),
        _ = n('zCf4'),
        E = p.a.h5245afa,
        k = p.a.dc6ce7b4,
        C = p.a.f8321d82,
        S = p.a.ga2aa43c,
        I = { viewType: 'community' },
        F = { viewType: 'all' },
        w = { viewType: 'moderators' },
        T = r.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            c = e.fetchCommunityIfNeeded,
            s = e.history,
            u = e.location
          r.a.useEffect(
            function () {
              n && c(n).catch(a())
            },
            [n, a, c],
          )
          var m = (null == u ? void 0 : u.pathname) && u.pathname.indexOf('members') > 0,
            d = m ? k : S,
            y = r.a.useMemo(
              function () {
                return n
                  ? [
                      { to: { pathname: '/i/communities/'.concat(n, '/members'), state: u.state }, label: C, key: C },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: u.state },
                        label: S,
                        key: S,
                      },
                    ]
                  : []
              },
              [n, u.state],
            ),
            p = n
              ? r.a.createElement(
                  _.d,
                  null,
                  r.a.createElement(
                    _.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                    r.a.createElement(
                      l.a,
                      { behavioralEventContext: F },
                      r.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Members,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                  r.a.createElement(
                    _.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                    r.a.createElement(
                      l.a,
                      { behavioralEventContext: w },
                      r.a.createElement(g.a, { community: t }),
                      r.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Moderators,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                )
              : null
          return r.a.createElement(
            l.a,
            { behavioralEventContext: I },
            r.a.createElement(
              f.a,
              { behavioralEventViewType: 'members' },
              r.a.createElement(b.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: E,
                history: s,
                primaryContent: p,
                rightControl: m ? r.a.createElement(o.a, { community: t }) : null,
                secondaryBar: r.a.createElement(h.a, { accessibilityLabel: d, links: y }),
                sidebarContent: r.a.createElement(i.a, null),
                title: k,
              }),
            ),
          )
        }),
        K = d(T)
      t.default = K
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateButton', function () {
          return Be
        }),
        n.d(t, 'CommunitiesScreen', function () {
          return De
        })
      var a = n('VrFO'),
        r = n.n(a),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        g = (n('2G9S'), n('vrRf'), n('ERkP')),
        f = n.n(g),
        b = n('+Kfv'),
        h = n('es0u'),
        v = n('1Idg'),
        _ = n('RqPI'),
        E = n('li/m'),
        k = n('G6rE'),
        C = n('rxPX'),
        S = n('0KEI'),
        I = function (e, t) {
          var n = v.j(e, t)
          if (n) return k.e.selectByScreenName(e, n)
        },
        F = Object(C.a)()
          .propsFromState(function () {
            return { communitiesActions: _.f, hasCommunityMemberships: E.d, screenName: v.j, user: I }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: k.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        w = n('GOQE'),
        T = n('3XMw'),
        K = n.n(T),
        M = n('5oT/'),
        R = (n('z84I'), n('M+/F'), n('yiKp')),
        x = n.n(R),
        L = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        O = n('YeIG'),
        A = 'community-thumbnail-image',
        j = 'community-thumbnail-name-container',
        N = n('MWbm'),
        P = n('rHpw'),
        H = n('X00g'),
        B = n('htQn'),
        D = n('9Xij'),
        U = n('TIdA'),
        V = n('A91F'),
        z = n('t62R'),
        q = { type: 'serversideContextKey', serversideContextType: 'community' },
        W = P.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space4,
              marginHorizontal: e.spaces.space4,
              marginTop: e.spaces.space2,
              marginBottom: e.spaces.space8,
              borderRadius: e.borderRadii.large,
            },
            container: {
              width: 'calc(('.concat(P.a.theme.spaces.space36, ' * 3) + ').concat(P.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        Q = function (e) {
          var t = f.a.useContext(L.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            r = n.media,
            l = n.name,
            i = n.theme,
            o = f.a.useMemo(
              function () {
                return { clientEntity: x()(x()({}, q), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(O.a)(null == r ? void 0 : r.image) || !l) return null
          var c = null == r ? void 0 : r.image,
            s = null == r ? void 0 : r.crop,
            u = P.a.theme.aspectRatios.communityBanner,
            m = t ? H.a.getCommunityBackgroundColor(i) : P.a.theme.colors.translucentBlack77
          return c
            ? f.a.createElement(
                b.a,
                { behavioralEventContext: o },
                f.a.createElement(
                  B.a,
                  { link: '/i/communities/'.concat(a), style: W.root },
                  f.a.createElement(
                    N.a,
                    { style: W.container },
                    f.a.createElement(
                      D.a,
                      { ratio: u },
                      f.a.createElement(U.a, {
                        accessibilityLabel: '',
                        aspectMode: V.a.exact(u),
                        backgroundColor: P.a.theme.colors.gray300,
                        cropCandidates: s,
                        image: c,
                        testID: A,
                      }),
                    ),
                    f.a.createElement(
                      N.a,
                      { style: [W.name, { backgroundColor: m }], testID: j },
                      f.a.createElement(
                        z.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        l.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        X = n('eSoz'),
        J = n('o3oN'),
        G = function (e) {
          var t = Object(J.c)(e)
          return X.c.selectMany(e, t)
        },
        Y = Object(C.a)()
          .propsFromState(function () {
            return { communities: G, fetchStatus: J.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: J.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        Z = n('kGix'),
        $ = n('6iuV'),
        ee = n('rC8y'),
        te = K.a.d228a9a0,
        ne = f.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            r = e.fetchStatus,
            l = e.location.pathname
          f.a.useEffect(
            function () {
              r === Z.a.NONE && a().catch(n())
            },
            [n, a, r],
          )
          var i = f.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return f.a.createElement(Q, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(O.a)(t)
            ? null
            : f.a.createElement(
                f.a.Fragment,
                null,
                f.a.createElement($.a, { style: [ae.paddingHorizontal, ae.bottomBorder] }, i),
                t.length > 10 &&
                  f.a.createElement(
                    N.a,
                    { style: ae.bottomBorder },
                    f.a.createElement(ee.a, { link: '/'.concat(l, '/memberships'), text: te }),
                  ),
              )
        }),
        ae = P.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            paddingHorizontal: { paddingHorizontal: e.spaces.space4 },
            bottomBorder: {
              borderBottomWidth: e.spaces.space1,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        re = Y(ne),
        le = n('WpDa'),
        ie = n('ZNT5'),
        oe = Object(ie.a)({
          timelineId: 'communitiesMainTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMainTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_MAIN_TIMELINE',
          perfKey: 'communitiesMainTimeline',
          formatResponse: le.a,
        }),
        ce = n('OUEC'),
        se = n('dwig'),
        ue = n('0+qk'),
        me = n('oQhu'),
        de = n('7BdX'),
        ye = n('fTQJ'),
        pe = n('QRqA'),
        ge = n('FIs5'),
        fe = n('mw9i'),
        be = K.a.c63602d3,
        he = K.a.d7346631,
        ve = K.a.fbd12fea,
        _e = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              p()(c()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              p()(
                c()(e),
                '_getModule',
                Object(me.a)(function () {
                  return oe
                }),
              ),
              p()(c()(e), '_renderEmptyTimeline', function () {
                return f.a.createElement(ge.a, { header: he, message: ve })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    a = e.isLoggedInUser,
                    r = e.location,
                    l = this._getModule(),
                    i = this._c9sParticipationEnabled && t ? f.a.createElement(ue.a, { history: n }) : null
                  return a && l
                    ? f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(pe.a, null),
                        f.a.createElement(
                          se.a,
                          { container: fe.a, fab: i },
                          f.a.createElement(re, { location: r }),
                          f.a.createElement(ye.a, {
                            entryConfiguration: ce.a,
                            module: l,
                            prerollDisplayLocation: de.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: be,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(_e, 'contextType', L.a)
      var Ee = _e,
        ke = n('hqKg'),
        Ce = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Se = function () {
          return Object(ke.createSelector)(Ce, function (e) {
            return e
              ? (function (e) {
                  return Object(ie.a)({
                    timelineId: 'communityMemberships-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchCommunityMemberships
                    },
                    getEndpointParams: function (t) {
                      var n = t.cursor
                      return { cursor: 'string' == typeof n ? n : void 0, userId: e }
                    },
                    context: 'FETCH_COMMUNITY_MEMBERSHIPS_TIMELINE',
                    perfKey: 'communityMemberships',
                    formatResponse: le.a,
                  })
                })(e)
              : void 0
          })
        },
        Ie = Object(C.a)()
          .propsFromState(function () {
            return { urtModule: Se() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Fe = n('yoO3'),
        we = K.a.c63602d3,
        Te = K.a.d7346631,
        Ke = K.a.hb01fe46,
        Me = Ie(
          (function (e) {
            u()(n, e)
            var t = d()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(l))),
                p()(c()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? f.a.createElement(ge.a, { header: Te, message: Ke }) : null
                }),
                e
              )
            }
            return (
              i()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.urtModule
                    return e
                      ? f.a.createElement(
                          Fe.a,
                          { behavioralEventViewType: 'all' },
                          f.a.createElement(ye.a, {
                            entryConfiguration: ce.a,
                            module: e,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyState,
                            title: we,
                          }),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(f.a.Component),
        ),
        Re = n('5FtR'),
        xe = n('Y6L+'),
        Le = n('VS6U'),
        Oe = n('/yvb'),
        Ae = n('zCf4'),
        je = K.a.h02a6fe5,
        Ne = K.a.c63602d3,
        Pe = K.a.a226497c,
        He = { viewType: 'communities' },
        Be = f.a.memo(function (e) {
          var t = e.communitiesActions
          if (null == t || !t.create) return null
          return f.a.createElement(Oe.a, {
            icon: f.a.createElement(M.a, { accessibilityLabel: Pe, style: Ue.createButton }),
            link: '/i/communities/create',
            size: 'medium',
            type: 'brandText',
          })
        }),
        De = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  a = t.history,
                  r = t.location,
                  l = t.user,
                  i = e._isLoggedInUser()
                return f.a.createElement(
                  Ae.d,
                  null,
                  f.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(xe.J, '/communities') },
                    f.a.createElement(Ee, { hasCommunityMemberships: n, history: a, isLoggedInUser: i, location: r }),
                  ),
                  f.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(xe.J, '/communities/memberships') },
                    f.a.createElement(Me, { isLoggedInUser: i, user: l }),
                  ),
                )
              }),
              p()(c()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.fetchOneUserByScreenNameIfNeeded,
                  l = n.screenName
                l && r(l).catch(a(w.a))
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: '_isLoggedInUser',
                value: function () {
                  var e = this.props.user,
                    t = this.context.loggedInUserId
                  return (null == e ? void 0 : e.id_str) === t
                },
              },
              {
                key: '_isMembershipsView',
                value: function () {
                  return this.props.location.pathname.indexOf('memberships') >= 0
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.communitiesActions,
                    n = e.history
                  if (this._isLoggedInUser()) {
                    var a = this._isMembershipsView() ? Ne : je
                    return f.a.createElement(
                      b.a,
                      { behavioralEventContext: He },
                      f.a.createElement(Le.a, {
                        backLocation: '/',
                        history: n,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: f.a.createElement(Be, { communitiesActions: t }),
                        sidebarContent: f.a.createElement(h.a, null),
                        title: a,
                      }),
                    )
                  }
                  return f.a.createElement(Re.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(De, 'contextType', L.a)
      var Ue = P.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        Ve = F(De)
      t.default = Ve
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('5Yy7'),
        c = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        m = n('KEM+'),
        d = n.n(m),
        y = (n('z84I'), n('ERkP')),
        p = n.n(y),
        g = n('yiKp'),
        f = n.n(g),
        b = n('1Pcy'),
        h = n.n(b),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        _ = n('cm6r'),
        E = n('rHpw'),
        k = n('k/Ka'),
        C = n('MWbm'),
        S = n('x0mb'),
        I = n('IMYl'),
        F = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              d()(h()(e), '_radioRef', p.a.createRef()),
              d()(h()(e), '_handleChange', function () {
                var t = e.props,
                  n = t.colorName
                ;(0, t.onChange)(n)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.colorName,
                    a = e.isSelected,
                    r = e.name,
                    l = e.style,
                    i = E.a.theme.colors[n],
                    o = v.a.generate({
                      backgroundColor: E.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    C.a,
                    { style: [w.container, l] },
                    p.a.createElement(
                      _.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [w.choice, w.choiceContainer] },
                      p.a.createElement(S.a, { style: [w.choice, { color: i }] }),
                      Object(k.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: a,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: w.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    a &&
                      p.a.createElement(
                        C.a,
                        { style: [w.choice, w.checkMarkContainer] },
                        p.a.createElement(I.a, { style: [w.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        w = E.a.create(function (e) {
          return {
            container: { alignItems: 'center', paddingVertical: e.spaces.space4, userSelect: 'none' },
            choice: { cursor: 'pointer', height: 45, width: 45 },
            checkMarkContainer: { alignItems: 'center', justifyContent: 'center', position: 'absolute' },
            choiceSelected: { color: e.colors.whiteOnColor, height: 25, width: 25 },
            choiceContainer: { borderRadius: e.borderRadii.infinite },
            transitionStyle: { transitionProperty: 'transform', transitionDuration: '0.1s' },
            focusedStyle: { outlineStyle: 'none' },
            hoverStyle: { transform: [{ scale: 1.1 }] },
            pressedStyle: { transform: [{ scale: 0.95 }] },
            nativeControl: f()(
              f()({}, E.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        T = F,
        K = 1,
        M = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(K, '_LABEL')), (K += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    r = t.layout,
                    l = t.onChange,
                    i = t.options,
                    o = t.value,
                    c = 'two-rows' === r,
                    s = [R.root, c && R.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    C.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return p.a.createElement(T, {
                        accessibilityLabel: n,
                        autoFocus: a && o === r,
                        colorName: r,
                        isSelected: o === r,
                        key: r,
                        name: e._colorPickerId,
                        onChange: l,
                        style: u,
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      d()(M, 'defaultProps', { layout: 'one-row' })
      var R = E.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = M
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        l = n('N9G2'),
        i = n('BIH/'),
        o = n('lhaq'),
        c = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = l(this),
              n = i(t),
              a = c(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : o(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    vUUo: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityBannerImageQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityBannerImage_community' }],
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
            name: 'CommunityBannerImageQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'custom_banner_media',
                    plural: !1,
                    selections: (i = [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'media_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'MediaColorInfo',
                                kind: 'LinkedField',
                                name: 'color_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'MediaColorPaletteItem',
                                    kind: 'LinkedField',
                                    name: 'palette',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'MediaColor',
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
                          },
                        ],
                        storageKey: null,
                      },
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ]),
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'default_banner_media',
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                  l,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'koDZVDC7OJ_T9UpEaa9rJw',
            metadata: {},
            name: 'CommunityBannerImageQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '0aeee2e1ee9d817082637a69ecbc6ce3'), (t.default = o)
    },
    w9f9: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'moderators_slice',
                    args: [(l = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityModerators_Query_moderators_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (i = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (o = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
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
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [l, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'moderators_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
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
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
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
                                        name: 'verified',
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
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: c,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityModerators_Query_moderators_slice',
                    kind: 'LinkedHandle',
                    name: 'moderators_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'lxb2peKfpD2yYwE4T2_Muw',
            metadata: { sliceInfoPath: ['community', 'moderators_slice', 'slice_info'] },
            name: 'moderatorsSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (t.default = u)
    },
    xPe1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitySettingsRouter', function () {
          return yt
        })
      n('KqXw'), n('WNMA'), n('1t7P'), n('jQ/y'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA'),
        i = n('rxPX'),
        o = Object(i.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        c = n('yiKp'),
        s = n.n(c),
        u = n('ddV6'),
        m = n.n(u),
        d = (n('kH1Z'), n('6U7i'), n('jTgF')),
        y = n('AspN'),
        p = n('eSoz'),
        g = n('0KEI'),
        f = function (e, t) {
          var n = t.localMediaId,
            a = n && isFinite(n) ? y.k(e, n) : []
          return m()(a, 1)[0]
        },
        b = Object(i.a)()
          .propsFromState(function () {
            return { localMedia: f }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: p.a,
              removeLocalMediaId: p.e,
              editCommunityBanner: p.d,
              removeBanner: p.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        h = n('3XMw'),
        v = n.n(h),
        _ = n('Nh1N'),
        E = n('fS8x'),
        k = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        C = Object(k.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(176)]).then(n.bind(null, 'P68U'))
          },
        }),
        S = n('eyty'),
        I = n('MWbm'),
        F = n('rHpw'),
        w = n('TIdA'),
        T = n('A91F'),
        K = n('4zmP'),
        M = n('eb3s'),
        R = v.a.a49f884d,
        x = v.a.ea965b81,
        L = v.a.c1ca95bd,
        O = v.a.e71cdf4d,
        A = v.a.gea6cc19,
        j = v.a.cfd2f35d,
        N = v.a.j35d3ad6,
        P = v.a.f1e8fb21,
        H = v.a.fc2a5c92,
        B = v.a.e405ec21
      var D,
        U,
        V,
        z = F.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        q = b(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            l = e.editCommunityBanner,
            i = e.hasCustomMedia,
            o = e.localMedia,
            c = e.localMediaId,
            u = e.media,
            y = e.removeBanner,
            p = e.removeLocalMediaId,
            g = r.a.useState(!1),
            f = m()(g, 2),
            b = f[0],
            h = f[1],
            v = r.a.useState(!1),
            k = m()(v, 2),
            D = k[0],
            U = k[1],
            V = r.a.useState(!1),
            q = m()(V, 2),
            W = q[0],
            Q = q[1],
            X = r.a.useState(!1),
            J = m()(X, 2),
            G = J[0],
            Y = J[1],
            Z = r.a.useState(!1),
            $ = m()(Z, 2),
            ee = $[0],
            te = $[1],
            ne = null == u ? void 0 : u.image,
            ae = F.a.theme.aspectRatios.communityBanner,
            re = a({
              customErrorHandler: function (e) {
                return Y(B), []
              },
            }),
            le = function (e) {
              return te(!1), e ? t(n, e) : p(n)
            },
            ie = o
              ? s()(s()({}, o), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: o.mediaFile, cropData: void 0 })
              : void 0,
            oe = ne ? r.a.createElement(w.a, { accessibilityLabel: R, aspectMode: T.a.exact(ae), image: ne }) : null
          return r.a.createElement(
            r.a.Fragment,
            null,
            G
              ? r.a.createElement(
                  I.a,
                  { style: z.error },
                  r.a.createElement(K.a, { Icon: _.a, headline: H, text: G, type: 'danger' }),
                )
              : null,
            r.a.createElement(C, {
              accessibilityLabel: x,
              aspectRatio: ae,
              currentContent: oe,
              location: S.d.CommunityBanner,
              mediaItem: ee ? o : void 0,
              onChange: function (e) {
                var t = m()(e, 1)[0]
                Y(!1), le(t), h(!0)
              },
              onFailure: function () {
                Y(B), p(n)
              },
              onRemove:
                i || ee
                  ? function () {
                      le(), Q(!0)
                    }
                  : void 0,
            }),
            b && o
              ? r.a.createElement(E.a, {
                  defaultAspectRatio: ae,
                  media: o,
                  onCancel: function () {
                    h(!1), p(n)
                  },
                  onDone: function () {
                    h(!1), U(!0)
                  },
                  title: L,
                })
              : null,
            D && ie && c
              ? r.a.createElement(E.a, {
                  defaultAspectRatio: 1,
                  media: ie,
                  onCancel: function () {
                    U(!1), h(!0)
                  },
                  onCropDone: function (e) {
                    !(function (e, t) {
                      te(!0),
                        l(n, { mediaId: e, cropData: t }).catch(function (e) {
                          le(), Object(d.a)(e) ? Y(B) : re(e)
                        })
                    })(c, e)
                  },
                  onDone: function () {
                    U(!1)
                  },
                  title: O,
                })
              : null,
            W
              ? r.a.createElement(M.a, {
                  cancelButtonLabel: j,
                  confirmButtonLabel: N,
                  confirmButtonType: 'destructiveFilled',
                  headline: A,
                  onCancel: function () {
                    Q(!1)
                  },
                  onConfirm: function () {
                    y(n).catch(re), Q(!1)
                  },
                  text: P,
                })
              : null,
          )
        }),
        W = Object(i.a)()
          .propsFromActions(function () {
            return {
              editAccess: p.c.editAccess,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        Q = n('yoO3'),
        X = n('mWs5'),
        J = n('3JAx'),
        G = v.a.f713fbd1,
        Y = [
          { label: v.a.fd00a769, value: 'Public', helpText: v.a.d0784408 },
          { label: v.a.ce0523a8, value: 'Closed', helpText: v.a.ccfafe8c },
        ],
        Z = W(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            l = e.history,
            i = t.id_str,
            o = r.a.useState(t.access),
            c = m()(o, 2),
            s = c[0],
            u = c[1],
            d = r.a.useCallback(
              function () {
                a(i, { access: s })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [i, s, a, l, n],
            ),
            y = s !== t.access
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              X.a,
              { communityId: i, onSubmit: d, submitDisabled: !y, title: G },
              r.a.createElement(
                I.a,
                { style: $.root },
                r.a.createElement(J.a, {
                  name: 'membershipSetting',
                  onChange: function (e, t) {
                    u(t)
                  },
                  options: Y,
                  value: s,
                }),
              ),
            ),
          )
        }),
        $ = F.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        ee = n('n0Rl'),
        te = (n('849X'), n('TJCb'), n('uDfI')),
        ne =
          (n('yH/f'),
          Object.freeze({
            Open: 'CommunityOpenMembershipSettings',
            Restricted: 'CommunityRestrictedMembershipSettings',
          })),
        ae = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        re = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        le = (n('enFi'), n('9SqB')),
        ie = n.n(le),
        oe = void 0 !== D ? D : (D = n('tFuX')),
        ce = void 0 !== U ? U : (U = n('pd/v')),
        se = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case ne.Open:
                t = { __typename: ne.Open }
                break
              case ne.Restricted:
                t = {
                  __typename: ne.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        ue = n('zCf4'),
        me = n('t62R'),
        de = n('e0ey'),
        ye = n('Hsf0'),
        pe = n.n(ye),
        ge = void 0 !== V ? V : (V = n('tnnC'))
      var fe,
        be,
        he = n('jAXQ'),
        ve = n.n(he),
        _e = v.a.f713fbd1,
        Ee = [
          { label: v.a.fd00a769, value: ne.Open, helpText: v.a.a0a16d37 },
          { label: v.a.ce0523a8, value: ne.Restricted, helpText: v.a.f1b189f9 },
        ],
        ke = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'd35773be' },
          r.a.createElement(me.b, { weight: 'bold' }, v.a.b1066579),
        ),
        Ce = v.a.c85960a0,
        Se = v.a.ca373cd2,
        Ie = v.a.d42d9318,
        Fe = v.a.c5d1634d,
        we = v.a.b983f9e0,
        Te = void 0 !== fe ? fe : (fe = n('1tGk')),
        Ke = function (e) {
          var t = e.children
          return r.a.createElement(me.b, { color: 'gray700', size: 'subtext2', style: Re.settingsItem }, t)
        },
        Me = function (e) {
          var t,
            n,
            a,
            l,
            i,
            o,
            c,
            s,
            u,
            d,
            y,
            g,
            f,
            b = e.community,
            h = ve()(Te, b),
            _ = h.membership_settings,
            E = h.rest_id,
            k = (function (e) {
              var t = pe()(ge, e)
              switch (t.__typename) {
                case ne.Restricted:
                  return { access: ne.Restricted, invitesPolicy: t.invites_policy }
                case ne.Open:
                  return { access: ne.Open, invitesPolicy: ae.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(_),
            C = r.a.useState(k.access),
            S = m()(C, 2),
            I = S[0],
            F = S[1],
            w = r.a.useState(k.invitesPolicy),
            T = m()(w, 2),
            K = T[0],
            R = T[1],
            x = r.a.useState(),
            L = m()(x, 2),
            O = L[0],
            A = L[1],
            j =
              ((t = ie()(oe)),
              (n = m()(t, 2)),
              (a = n[0]),
              (l = n[1]),
              (i = ie()(ce)),
              (o = m()(i, 2)),
              (c = o[0]),
              (s = o[1]),
              (u = Object(te.c)()),
              function (e, t) {
                return l || s
                  ? Promise.reject(new Error('Already updating membership settings'))
                  : new Promise(function (n, r) {
                      var l = t.access,
                        i = t.invitesPolicy
                      l === ne.Open
                        ? a({
                            variables: { communityId: e, openMembershipSettings: {} },
                            onCompleted: function (e) {
                              var t = se(e.community_membership_settings_open_update)
                              t && u(p.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              r(e)
                            },
                          })
                        : l === ne.Restricted &&
                          c({
                            variables: {
                              communityId: e,
                              restrictedMembershipSettings: { invites_policy: i, join_approval_policy: re.Moderator },
                            },
                            onCompleted: function (e) {
                              var t = se(e.community_membership_settings_restricted_update)
                              t && u(p.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              r(e)
                            },
                          })
                    })
              }),
            N = Object(ue.f)(),
            P = r.a.useMemo(
              function () {
                return { access: I, invitesPolicy: K }
              },
              [I, K],
            ),
            H = r.a.useCallback(function (e, t) {
              F(t)
            }, []),
            B = r.a.useCallback(function (e, t) {
              R(t ? ae.Member : ae.Moderator)
            }, []),
            D = r.a.useCallback(
              function () {
                j(E, P).then(function () {
                  N.goBack({ backLocation: '/i/communities/'.concat(E, '/tools/settings') })
                })
              },
              [E, N, P, j],
            ),
            U = r.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === ne.Restricted && t.access === ne.Open) return v.a.daedd9fa
                })(k, P)
                e ? A(e) : D()
              },
              [k, P, D],
            ),
            V = r.a.useCallback(function () {
              return A(void 0)
            }, []),
            z =
              ((y = P),
              (g = (d = k).access !== y.access),
              (f = d.access === ne.Restricted && d.invitesPolicy !== y.invitesPolicy),
              !(g || f))
          return r.a.createElement(
            X.a,
            { communityId: E, onSubmit: U, submitDisabled: z, title: _e },
            r.a.createElement(Ke, null, ke),
            r.a.createElement(J.a, { name: 'membershipSetting', onChange: H, options: Ee, value: I }),
            r.a.createElement(Ke, null, Ie),
            I === ne.Restricted &&
              r.a.createElement(de.a, {
                checked: K === ae.Member,
                helpText: Se,
                label: Ce,
                name: 'allowInvites',
                onChange: B,
              }),
            O &&
              r.a.createElement(M.a, {
                confirmButtonLabel: Fe,
                confirmButtonType: 'primary',
                headline: we,
                onCancel: V,
                onConfirm: D,
                text: O,
              }),
          )
        },
        Re = F.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        xe = n('v//M'),
        Le = void 0 !== be ? be : (be = n('PbB6')),
        Oe = Object(ee.b)(Le, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Ae = function (e) {
          var t = { communityId: e.communityId }
          return r.a.createElement(Oe, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                l = null == t ? void 0 : t.community
              return r.a.createElement(xe.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return l ? r.a.createElement(Me, { community: l }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        je = n('ROT1'),
        Ne = Object(i.a)()
          .propsFromActions(function () {
            return {
              editName: p.c.editName,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Pe = n('k49u'),
        He = v.a.h3c0f1a2,
        Be = v.a.fc2a5c92,
        De = v.a.cb5e6510
      var Ue = F.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ve = Ne(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            l = e.history,
            i = t.id_str,
            o = t.name,
            c = r.a.useState(o),
            s = m()(c, 2),
            u = s[0],
            d = s[1],
            y = r.a.useState(!1),
            p = m()(y, 2),
            g = p[0],
            f = p[1],
            b = r.a.useState(void 0),
            h = m()(b, 2),
            v = h[0],
            E = h[1],
            k = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === Pe.a.GenericBadRequest && t.message ? t.message : De
                    return E(n), f(!0), []
                  },
                })
                a(i, { name: u })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, u, a, l, n],
            )
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              X.a,
              { communityId: i, onSubmit: k, submitDisabled: g, title: He },
              v
                ? r.a.createElement(
                    I.a,
                    { style: Ue.error },
                    r.a.createElement(K.a, { Icon: _.a, headline: Be, text: v, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(je.a, {
                autoFocus: !0,
                communityName: u,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        ze = n('U0Qk'),
        qe = Object(i.a)()
          .propsFromActions(function () {
            return {
              editPurpose: p.c.editPurpose,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        We = v.a.a895549f,
        Qe = v.a.fc2a5c92,
        Xe = v.a.ced22929
      var Je = F.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ge = qe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            l = e.history,
            i = t.description,
            o = t.id_str,
            c = r.a.useState(i || ''),
            s = m()(c, 2),
            u = s[0],
            d = s[1],
            y = r.a.useState(!1),
            p = m()(y, 2),
            g = p[0],
            f = p[1],
            b = r.a.useState(void 0),
            h = m()(b, 2),
            v = h[0],
            E = h[1],
            k = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === Pe.a.GenericBadRequest && t.message ? t.message : Xe
                    return E(n), f(!0), []
                  },
                })
                a(o, { purpose: u })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, u, a, l, n],
            )
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              X.a,
              { communityId: o, onSubmit: k, submitDisabled: g, title: We },
              v
                ? r.a.createElement(
                    I.a,
                    { style: Je.error },
                    r.a.createElement(K.a, { Icon: _.a, headline: Qe, text: v, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(ze.a, {
                autoFocus: !0,
                communityPurpose: u,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        Ye = n('Ig1G'),
        Ze = n('x0mb'),
        $e = n('5FtR'),
        et = n('X00g'),
        tt = n('6vad'),
        nt = n('csss'),
        at = n('0yYu'),
        rt = v.a.bb081ea1,
        lt = v.a.h3e55b40,
        it = v.a.j8af8ea9,
        ot = v.a.d5f01115,
        ct = v.a.c3c04b70,
        st = { Closed: v.a.ce0523a8, Public: v.a.fd00a769 },
        ut = v.a.f4a98e9e,
        mt = v.a.f713fbd1,
        dt = function (e) {
          var t = e.children
          return r.a.createElement(me.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        yt = function (e) {
          var t = e.community,
            n = e.history,
            a = e.match,
            i = t.access,
            o = t.description,
            c = t.hasCustomMedia,
            s = t.id_str,
            u = t.localMediaId,
            m = t.media,
            d = t.membership_settings,
            y = t.name,
            p = t.theme,
            g = r.a.useContext(l.a).featureSwitches,
            f = g.isTrue('c9s_edit_community_name_enabled'),
            b = g.isTrue('c9s_edit_community_description_enabled'),
            h = g.isTrue('c9s_edit_community_membership_settings_enabled'),
            v = g.isTrue('c9s_membership_settings_enabled'),
            _ = g.isTrue('c9s_edit_community_banner_enabled'),
            E = g.isTrue('c9s_edit_community_theme_enabled'),
            k = a.url,
            C = r.a.useMemo(
              function () {
                return v ? (d.__typename === ne.Open ? st.Public : st.Closed) : st[i]
              },
              [i, v, d.__typename],
            ),
            S = Object(Ye.d)(t),
            I = et.a.getCommunityThemeDisplayName(S),
            F = et.a.getCommunityBackgroundColor(p)
          return r.a.createElement(
            ue.d,
            null,
            f
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(k, '/name') },
                  r.a.createElement(Ve, { community: t, history: n }),
                )
              : null,
            b
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(k, '/purpose') },
                  r.a.createElement(Ge, { community: t, history: n }),
                )
              : null,
            v
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(k, '/membership') },
                  r.a.createElement(Ae, { communityId: s }),
                )
              : h
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(k, '/membership') },
                  r.a.createElement(Z, { community: t, history: n }),
                )
              : null,
            r.a.createElement(
              ue.b,
              { exact: !0, path: ''.concat(k, '/') },
              r.a.createElement(
                Q.a,
                null,
                r.a.createElement(
                  X.a,
                  { communityId: s, screenType: 'primaryDetail', title: rt },
                  _ ? r.a.createElement(q, { communityId: s, hasCustomMedia: c, localMediaId: u, media: m }) : null,
                  r.a.createElement(tt.b, { text: ut }),
                  r.a.createElement(nt.a, {
                    description: r.a.createElement(dt, null, y),
                    label: lt,
                    link: f ? ''.concat(k, '/name') : void 0,
                  }),
                  r.a.createElement(nt.a, {
                    description: o ? r.a.createElement(dt, null, o) : void 0,
                    label: ot,
                    link: b ? ''.concat(k, '/purpose') : void 0,
                  }),
                  E
                    ? r.a.createElement(nt.a, {
                        description: r.a.createElement(dt, null, I),
                        label: ct,
                        link: E ? ''.concat(k, '/theme') : void 0,
                        renderRightContent: function () {
                          return r.a.createElement(Ze.a, { style: [{ color: F }, pt.themeIcon] })
                        },
                      })
                    : null,
                  v || h
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(at.a, null),
                        r.a.createElement(tt.b, { text: mt }),
                        r.a.createElement(nt.a, {
                          description: r.a.createElement(dt, null, C),
                          label: it,
                          link: ''.concat(k, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            r.a.createElement(ue.b, null, r.a.createElement($e.a, { to: ''.concat(k, '/') })),
          )
        },
        pt =
          ((t.default = o(yt)),
          F.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return F
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        i = n.n(l),
        o = n('eSoz'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = Object(c.a)()
          .propsFromActions(function () {
            return {
              editTheme: o.c.editTheme,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_THEME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_theme' }),
        m = n('jHSc'),
        d = n('Ig1G'),
        y = n('3XMw'),
        p = n.n(y),
        g = n('MWbm'),
        f = n('X00g'),
        b = n('/yvb'),
        h = n('uI9t'),
        v = n('rHpw'),
        _ = p.a.dbda7beb,
        E = p.a.i2209530,
        k = p.a.hcf35d0c,
        C = p.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        I = {}
      function F(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.editTheme,
          l = e.history,
          o = t.id_str,
          c = t.theme,
          s = f.a.getCommunityBackgroundColorName(c),
          u = i.a.useState(!1),
          y = r()(u, 2),
          p = y[0],
          v = y[1],
          F = i.a.useState(Object(d.d)(t)),
          T = r()(F, 2),
          K = T[0],
          M = T[1],
          R = i.a.useState(f.a.getCommunityThemeDisplayName(K)),
          x = r()(R, 2),
          L = x[0],
          O = x[1],
          A = i.a.useState(s),
          j = r()(A, 2),
          N = j[0],
          P = j[1],
          H = i.a.useState([]),
          B = r()(H, 2),
          D = B[0],
          U = B[1]
        i.a.useEffect(
          function () {
            var e
            return (
              U(
                ((e = []),
                S.forEach(function (t) {
                  var n = f.a.getCommunityTheme(t),
                    a = f.a.getCommunityBackgroundColorName(n)
                  ;(I[a] = t), e.push({ accessibilityLabel: f.a.getCommunityThemeDisplayName(t), colorName: a })
                }),
                e),
              ),
              function () {
                U([])
              }
            )
          },
          [U],
        )
        var V = i.a.useCallback(
            function () {
              a(o, { theme: K })
                .then(function () {
                  l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [o, K, a, l, n],
          ),
          z = i.a.createElement(
            b.a,
            { accessibilityLabel: k({ themeName: L }), disabled: !p, onPress: V, size: 'small', type: 'brandFilled' },
            E,
          )
        return i.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: l, rightControl: z, title: _ },
          i.a.createElement(
            g.a,
            { style: w.themePickerContainer },
            i.a.createElement(h.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var n = I[e],
                  a = n !== Object(d.d)(t)
                M(n), O(f.a.getCommunityThemeDisplayName(n)), P(e), v(a)
              },
              options: D,
              value: N,
            }),
          ),
        )
      }
      var w = v.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(F)
    },
  },
])
//# sourceMappingURL=WIPED
