;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            l()(
              l()({}, e),
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
    '1rMX': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityInfo_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'membership_settings',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'CommunityOriginationAttributes_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'ae9ef4d64fac0bbfeafc53f8a2bf41e9',
      }
      t.default = a
    },
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = l)
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        l = n('3KVO'),
        r = n('yLYC'),
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
          b = r(e, g, f)
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
        return l(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = a.useEffect,
        r = a.useRef
      e.exports = function () {
        var e = r(!0)
        return (
          l(function () {
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
        l,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityDescriptionToggleQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
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
                args: l,
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
      ;(r.hash = '05581b25a196bea06f3f6c130610a5b9'), (t.default = r)
    },
    '2rr8': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityCreationSummary_community',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [a, { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (t.default = l)
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('fyvP'),
        i = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return l.a.createElement(o.a, { style: c.root }, l.a.createElement(r.a, e))
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
        l = n.n(a),
        r = n('3XMw'),
        i = n.n(r),
        o = n('mw9i'),
        c = n('FIs5'),
        s = n('rHpw'),
        u = i.a.c2117be6,
        m = i.a.c2c4dad3
      function d() {
        return l.a.createElement(o.a, { style: y.root }, l.a.createElement(c.a, { header: u, message: m }))
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
        l = {
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
      ;(l.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (t.default = l)
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        l = n('ERkP'),
        r = n('Ud88'),
        i = n('K1lQ').commitMutation,
        o = l.useState,
        c = l.useEffect,
        s = l.useRef,
        u = l.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = r(),
          l = m(),
          d = s(n),
          y = s(e),
          p = s(new Set()),
          g = o(!1),
          f = g[0],
          b = g[1],
          h = u(
            function (t) {
              d.current === n && y.current === e && (p.current.delete(t), l.current && b(p.current.size > 0))
            },
            [n, l, e],
          )
        c(
          function () {
            ;(d.current === n && y.current === e) ||
              ((p.current = new Set()), l.current && b(!1), (d.current = n), (y.current = e))
          },
          [n, l, e],
        )
        var v = u(
          function (r) {
            var i = t(
              n,
              (0, a.default)(
                (0, a.default)({}, r),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    h(i), r.onCompleted && r.onCompleted(e, t)
                  },
                  onError: function (e) {
                    h(i), r.onError && r.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(i), r.onUnsubscribe && r.onUnsubscribe()
                  },
                },
              ),
            )
            return p.current.add(i), l.current && b(!0), i
          },
          [h, t, n, l, e],
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
        l = n.n(a),
        r = n('eb3s'),
        i = n('3XMw'),
        o = n.n(i),
        c = o.a.d45ae5e0,
        s = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return l.a.createElement(r.a, {
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
        l = {
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
      ;(l.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (t.default = l)
    },
    Bg9b: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            l()(
              l()({}, e),
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
        l,
        r,
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
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  r,
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
                                  r,
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
                            selections: (d = [r]),
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
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
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
        k = (n('2G9S'), n('KhuB')),
        E = n('li/m'),
        C = function (e, t) {
          return t.communityId && t.userId ? k.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
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
              inviteToCommunity: E.a,
            }
          }),
        F = v.a.cd133485,
        I = v.a.hb1e378e,
        w = v.a.bcd6bb0d,
        T = 'primaryFilled',
        K = { viewType: 'invite' }
      var M = S(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            a = e.inviteActionResult,
            l = e.inviteToCommunity,
            r = e.onInvite,
            i = e.onInviteActionResultChange,
            o = e.userId,
            c = e.viewerInvited,
            s = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return F
              switch (e.reason) {
                case 'UserIsMember':
                  return w
                case 'UserIsInvited':
                  return I
                default:
                  return F
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
                      l(t, o)
                        .then(function () {
                          return r && r(o)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                s,
              )
        }),
        L = n('5FtR'),
        x = n('4e/K'),
        R = n('MWbm'),
        O = n('4zmP'),
        A = n('t62R'),
        j = n('FIs5'),
        N = n('rHpw'),
        P = n('GZwR'),
        B = v.a.b139b549,
        D = v.a.dfddd842,
        H = v.a.cf4898a0,
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
          r = (t || {}).invites_result,
          o = e.match.params.communityId || '',
          s = u.a.useState(''),
          d = c()(s, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState({}),
          f = c()(g, 2),
          h = f[0],
          v = f[1],
          k = u.a.useState({}),
          E = c()(k, 2),
          C = E[0],
          S = E[1]
        u.a.useEffect(
          function () {
            o && a(o).catch(n())
          },
          [o, n, a],
        )
        var F,
          I,
          w = u.a.useMemo(
            function () {
              return y.length > 0 || !t
                ? ee
                : 'CommunityInvites' === r.__typename
                ? r.users_to_invite_slice.items.map(P.g).filter(Boolean)
                : ee
            },
            [t, r, y.length],
          ),
          T = u.a.useCallback(
            function (e, t) {
              v(function (n) {
                return i()(i()({}, n), {}, l()({}, e, t))
              })
            },
            [v],
          ),
          K = u.a.useCallback(
            function (e) {
              S(function (t) {
                return i()(i()({}, t), {}, l()({}, e, !0))
              })
            },
            [S],
          ),
          N = o
            ? u.a.createElement(L.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(L.a, { to: '/' }),
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
        return 'CommunityInvitesUnavailable' === (null == r ? void 0 : r.__typename)
          ? N
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ne },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: D, title: B },
                ((F = (null == r ? void 0 : r.remaining_invite_count) || 0),
                (I = F > 999),
                'CommunityInvites' === (null == r ? void 0 : r.__typename) &&
                  !I &&
                  u.a.createElement(
                    R.a,
                    { style: le.callout },
                    u.a.createElement(O.a, { text: Q({ remaining_invite_count: F }) }),
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
                        l = n.screen_name,
                        r = h[a]
                      if ('UserCommunityInviteActionUnavailable' === (null == r ? void 0 : r.__typename))
                        switch (r.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: l })
                          case 'UserIsMember':
                            return V({ screen_name: l })
                          case 'ViewerOutOfInvites':
                            return z
                          default:
                            return null !== (t = r.message) && void 0 !== t ? t : q({ screen_name: l })
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
                  inputStyle: le.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: H,
                  renderEmptyState: function () {
                    return u.a.createElement(j.a, { header: J, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        R.a,
                        { style: le.input },
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
                  style: le.input,
                }),
              ),
            )
      }
      var le = N.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        re = f(ae)
      t.default = re
    },
    'Dm5+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
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
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  r,
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
                                  r,
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
                            selections: (d = [r]),
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
    EFld: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityCreationSummaryQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityCreationSummary_community' }],
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
            name: 'CommunityCreationSummaryQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      r,
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  i,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '0uVg2K6Uoih-4DPVHI3oOg',
            metadata: {},
            name: 'CommunityCreationSummaryQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = 'c9fd6a145c49f94141d4aba3b68679ac'), (t.default = o)
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var a = n('VrFO'),
        l = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
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
              l()(this, n),
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
                    l = e.confirmationSheetConfirmButtonType,
                    r = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(b.a, { align: t, color: n, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? f.a.createElement(h.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: l,
                          headline: r,
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
        l,
        r,
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
                    (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                        (r = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
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
                                                l,
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
                                                    r,
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
        l = n.n(a),
        r = n('LgBi'),
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
            c = l.a.useMemo(
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
                return l.a.createElement(d.a, { accessibilityLabel: o, links: e })
              },
              [n, o, a],
            )
          return l.a.createElement(
            m.a,
            null,
            l.a.createElement(
              y.a,
              {
                communityId: t.id_str,
                rightControl: i ? l.a.createElement(r.a, { communityId: n }) : void 0,
                title: b,
              },
              l.a.createElement(
                p.a,
                null,
                c,
                l.a.createElement(
                  f.d,
                  null,
                  l.a.createElement(
                    f.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                    l.a.createElement(g.b, {
                      communityId: t.id_str,
                      mode: g.a.Members,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                  l.a.createElement(
                    f.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                    l.a.createElement(u.a, { community: t }),
                    l.a.createElement(g.b, {
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
        l = n.n(a),
        r = n('m3Bd'),
        i = n.n(r),
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
              l = a ? y.a.selectHydrated(e, a) : void 0,
              r = null == l || null === (n = l.community_relationship) || void 0 === n ? void 0 : n.community
            return r ? d.c.select(e, r) : void 0
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
        k = (n('ho0z'), n('PKbs')),
        E = n('egQk'),
        C = n('3XMw'),
        S = n.n(C),
        F = n('/de5'),
        I = n('b5s6'),
        w = n('MWbm'),
        T = n('X00g'),
        K = n('t62R'),
        M = n('4zmP'),
        L = n('0yYu'),
        x = n('6vad'),
        R = n('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        N = S.a.icc32e3d,
        P = T.a.getCommunityTheme('Default'),
        B = R.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: R.a.theme.colors.gray50,
              borderRadius: R.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: R.a.theme.spacesPx.space16,
              marginBottom: R.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: R.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        D = function (e) {
          var t,
            n = e.community,
            a = e.history,
            l = e.location,
            r = e.match,
            i = e.tweet,
            o = e.type,
            s = { history: a, location: l, match: r },
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
            b = Object(E.a)({ communityName: y })
          return g && null != p && p.length
            ? c.a.createElement(
                w.a,
                { style: B.tweetInfo },
                c.a.createElement(
                  w.a,
                  { style: B.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case X.HiddenTweet:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { color: f, size: 'subtext1', style: B.communityTitle, weight: 'bold' },
                            y,
                          ),
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: [B.titleText, B.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          c.a.createElement(I.a, {
                            style: B.tweetContainer,
                            tweetId: null == i ? void 0 : i.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          c.a.createElement(M.a, { headline: A, text: d }),
                          c.a.createElement(K.b, { style: B.helpText }, j),
                        )
                      case X.RemovedMember:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            N({ communityName: y }),
                          ),
                          c.a.createElement(
                            w.a,
                            { style: B.removedMemberReason },
                            c.a.createElement(K.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                c.a.createElement(L.a, null),
                c.a.createElement(x.b, { text: b }),
                c.a.createElement(k.b, {
                  badgeStyle: B.badges,
                  ruleContainerStyle: B.rules,
                  rules: p,
                  theme: g,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : c.a.createElement(F.b, s)
        },
        H = n('G1WX'),
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
          r = e.fetchStatus,
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
                  _handleRetry: E,
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
          k = Object(z.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          E = c.a.useEffect(
            function () {
              v && o(v).catch(_)
            },
            [_, o, v],
          ),
          C = c.a.useEffect(
            function () {
              h && a(h).catch(k)
            },
            [h, k, a],
          ),
          S = c.a.createElement(F.b, g)
        return c.a.createElement(H.a, {
          fetchStatus: r,
          onRequestRetry: f(p)._handleRetry,
          render: function () {
            var n = f(p),
              a = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              r = n.isAuthorizedViewer,
              i = n.shouldRenderFeedback
            return r && t
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
                          primaryContent: c.a.createElement(D, l()({}, e, { type: p })),
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
    JAeQ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ddV6'),
        i = n.n(r),
        o = (n('yH/f'), n('kH1Z'), n('6U7i'), n('ERkP')),
        c = n.n(o),
        s = n('3XMw'),
        u = n.n(s),
        m = n('fS8x'),
        d = u.a.b7fb6bd9,
        y = u.a.e71cdf4d,
        p = Object.freeze({ NotStarted: 'not_started', Started: 'started', Completed: 'completed' })
      function g(e) {
        var t = e.aspectRatio,
          n = e.media,
          a = e.onCancel,
          r = e.onCropDone,
          o = c.a.useState({ status: 'not_started' }),
          s = i()(o, 2),
          u = s[0],
          g = s[1],
          f = c.a.useState(!1),
          b = i()(f, 2),
          h = b[0],
          v = b[1],
          _ = c.a.useState(!1),
          k = i()(_, 2),
          E = k[0],
          C = k[1],
          S = u.croppedMediaId,
          F = void 0 === S ? void 0 : S,
          I = u.status
        c.a.useEffect(
          function () {
            I === p.NotStarted && (v(!0), g({ status: 'started' })),
              I === p.Completed && n.id !== F && g({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, n, F],
        )
        var w = c.a.useCallback(
            function () {
              v(!1), g({ status: p.Completed, croppedMediaId: n.id }), a()
            },
            [a, n],
          ),
          T = c.a.useCallback(function () {
            v(!1), C(!0)
          }, []),
          K = c.a.useCallback(function () {
            C(!1), v(!0)
          }, []),
          M = c.a.useCallback(function () {
            C(!1)
          }, []),
          L = c.a.useCallback(
            function (e) {
              g({ status: p.Completed, croppedMediaId: n.id }), null == r || r(e)
            },
            [r, n],
          ),
          x = l()(l()({}, n), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: n.mediaFile, cropData: void 0 })
        return c.a.createElement(
          c.a.Fragment,
          null,
          h ? c.a.createElement(m.a, { defaultAspectRatio: t, media: n, onCancel: w, onDone: T, title: d }) : null,
          E
            ? c.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: x,
                onCancel: K,
                onCropDone: L,
                onDone: M,
                title: y,
              })
            : null,
        )
      }
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
        l = n.n(a),
        r = (n('hBvt'), n('ERkP')),
        i = n.n(r),
        o = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return i.a.createElement(o.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, l()({ isActive: t }, e, { label: i.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    LgBi: function (e, t, n) {
      'use strict'
      var a,
        l,
        r = n('97Jx'),
        i = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        s = n('ERkP'),
        u = n.n(s),
        m = n('/yvb'),
        d = n('3XMw'),
        y = n.n(d),
        p = n('pwey'),
        g = (n('enFi'), n('jAXQ')),
        f = n.n(g),
        b = ['community'],
        h = y.a.b139b549,
        v = u.a.createElement(p.a, null),
        _ = function (e) {
          var t = e.community,
            l = c()(e, b),
            r = f()(void 0 !== a ? a : (a = n('qre1')), t)
          if (!r || 'CommunityInvitesUnavailable' === r.invites_result.__typename) return null
          var o = '/i/communities/'.concat(r.rest_id, '/invite')
          return u.a.createElement(m.a, i()({ accessibilityLabel: h, icon: v, link: o, type: 'primaryText' }, l))
        },
        k = u.a.memo(_),
        E = n('Fr3L'),
        C = n('IAZG'),
        S = ['communityId'],
        F = { context: 'CommunityInviteButtonQuery' },
        I = void 0 !== l ? l : (l = n('zakg')),
        w = function (e) {
          var t = e.communityId,
            n = c()(e, S),
            a = Object(C.a)(I, { communityId: t })
          return u.a.createElement(k, i()({ community: a.community }, n))
        },
        T = function (e) {
          return u.a.createElement(
            E.a,
            { errorConfig: F },
            u.a.createElement(w, i()({ communityId: e.communityId }, e)),
          )
        }
      t.a = u.a.memo(T)
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        l = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
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
        k = n('VAZu'),
        E = n('wiP2'),
        C = n('Es6L'),
        S = n('yiKp'),
        F = n.n(S),
        I = n('rHpw'),
        w = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: F()(F()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
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
        L = n('cHvH'),
        x = n('3xLC'),
        R = [
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
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
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
                  return v.a.createElement(L.a, null, function (t) {
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
                      l()(e, R))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(E.a.Configure, n),
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
                    l = n.TabBar,
                    r = n.TeamsSwitcher,
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
                    F = n.titleIconCell,
                    I = n.titleIconCellSize,
                    K = n.withDetailOpen,
                    M = n.withSearchBox,
                    L = n.withTweetButton,
                    x = 'root' === p,
                    R = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && _) || (x && h),
                    j = x || (O && t),
                    N = x ? b.c : O ? b.a : void 0,
                    P = v.a.createElement(
                      T.a,
                      { style: w.appBarContainer },
                      v.a.createElement(k.a, {
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
                        titleIconCell: F,
                        titleIconCellSize: I,
                      }),
                    ),
                    B =
                      x || (R && K)
                        ? null
                        : v.a.createElement(E.a.Configure, {
                            SideNavButton: a,
                            TabBar: l,
                            TeamsSwitcher: r,
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
                            withTweetButton: L,
                          })
                  return v.a.createElement(v.a.Fragment, null, B, P)
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
        l = n.n(a),
        r = n('97Jx'),
        i = n.n(r),
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
            return { community: y.a, fetchStatus: y.b, isCommunityMember: y.g }
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
        k = n('VS6U'),
        E = n('rHpw'),
        C = function (e) {
          var t = c.a.useContext(s.a).featureSwitches,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            g = e.location,
            f = e.match,
            b = f.params.communityId,
            E = t.isTrue('c9s_participation_enabled')
          c.a.useEffect(function () {
            b && !n && o !== h.a.LOADED && r(b).catch(a())
          })
          var C = c.a.useMemo(
            function () {
              return { selectedCommunityId: b || '', defaultText: '' }
            },
            [b],
          )
          if (n && b) {
            var S = n.name,
              I = n.rules,
              w = n.theme,
              T = {
                composeOptions: C,
                history: y,
                sidebarContent: c.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: E && p,
              }
            if (I.length > 0) {
              var K = c.a.createElement(m.b, {
                badgeStyle: F.badgeStyle,
                headerContainerStyle: F.containerStyle,
                headerExplanationStyle: F.explanationStyle,
                ruleContainerStyle: F.ruleContainerStyle,
                rules: I,
                theme: w,
                withBottomMargin: !0,
              })
              return c.a.createElement(
                k.a,
                i()({}, T, {
                  backLocation: '/i/communities/'.concat(b),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: K,
                }),
              )
            }
            var M = l()(l()({}, T), {}, { title: null }),
              L = c.a.createElement(v.b, { history: y, location: g, match: f })
            return c.a.createElement(k.a, i()({}, M, { primaryContent: L }))
          }
          return o === h.a.LOADED ? c.a.createElement(_.a, { to: '/' }) : null
        },
        S = b(C),
        F =
          ((t.default = S),
          E.a.create(function (e) {
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
    OBBW: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDescriptionContainer_community',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImage_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '7160dd73830957dbef0814fa82a0296d',
      }
      t.default = a
    },
    OUEC: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
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
      t.a = i()(i()({}, u.b), {}, l()({}, m.b.Community, s))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(r),
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
        k = s.a.f8fa00c7,
        E = s.a.fc2a5c92,
        C = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            a = t.getNumberValue('c9s_max_rule_description_length', 160),
            r = e.description,
            c = e.errorText,
            s = e.name,
            g = e.onChange,
            C = i.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 3, n)
              },
              [n],
            ),
            F = i.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 0, a)
              },
              [a],
            ),
            I = i.a.useState(s),
            w = l()(I, 2),
            T = w[0],
            K = w[1],
            M = i.a.useState(C(s)),
            L = l()(M, 2),
            x = L[0],
            R = L[1],
            O = i.a.useState(void 0),
            A = l()(O, 2),
            j = A[0],
            N = A[1],
            P = i.a.useState(r),
            B = l()(P, 2),
            D = B[0],
            H = B[1],
            U = i.a.useState(F(r)),
            V = l()(U, 2),
            z = V[0],
            q = V[1],
            W = i.a.useState(void 0),
            Q = l()(W, 2),
            X = Q[0],
            J = Q[1],
            G = i.a.useState('' !== s),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = i.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                C(a) && ((t = !0), N(h({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  R(t),
                  K(a),
                  g({ description: D, name: a, valid: !t && !z })
              },
              [n, D, g, z, C],
            ),
            te = i.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                F(n) && ((t = !0), J(k({ maxCharacterCount: a }))),
                  q(t),
                  H(n),
                  g({ name: T, description: n, valid: !t && !x })
              },
              [a, T, g, x, F],
            ),
            ne = x && j ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = z ? void 0 : _({ maxCharacterCount: a }),
            le = c
              ? i.a.createElement(
                  m.a,
                  { style: S.error },
                  i.a.createElement(y.a, { Icon: u.a, headline: E, text: c, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            i.a.Fragment,
            null,
            le,
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
              value: D,
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
        l = {
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
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (t.default = l)
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
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
                args: l,
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
      ;(r.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = r)
    },
    Phky: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, l.default)(e), a = 0; a < n.length; a++) {
            var r = n[a].screenName
            t.push(r)
          }
          return t
        })
      var l = a(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
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
            r = e.flag,
            i = e.headline,
            o = e.subtext,
            u = e.behavioralEventContext,
            m = e.withCloseButton,
            g = Object(y.a)(r),
            f = c()(g, 2),
            b = f[0],
            h = f[1]
          if (!b) return null
          var v = l.a.createElement(
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
            l.a.createElement(t, null),
          )
          return u ? l.a.createElement(s.a, { behavioralEventContext: u }, v) : v
        },
        f = l.a.memo(g),
        b = n('MWbm'),
        h = n('X00g'),
        v = n('h0NW'),
        _ = n('rHpw'),
        k = n('r9x5'),
        E = n('cOhU'),
        C = n('uCrx'),
        S = m.a.b60e4f77,
        F = m.a.f0fc827d,
        I = m.a.c8e93b51,
        w = m.a.fc5c6913,
        T = m.a.ad211086,
        K = m.a.gf803ba1,
        M = m.a.e92fe01b,
        L = m.a.h3bb8068,
        x = m.a.a709f8f8,
        R = { viewType: 'welcome_education' },
        O = l.a.memo(function (e) {
          var t = e.forSingleCommunity,
            n = l.a.useContext(r.a).featureSwitches,
            a = l.a.useCallback(
              function () {
                var e = n.isTrue('c9s_ui_colors_enabled_rweb') && (null == t ? void 0 : t.theme),
                  a = [A.decorationContainer, e && { color: h.a.getCommunityUIColor(e) }],
                  r = l.a.createElement(k.a, { style: a }),
                  i = l.a.createElement(E.a, { style: a }),
                  o = l.a.createElement(C.a, { style: a })
                return l.a.createElement(
                  b.a,
                  { style: A.infoItemsContainer },
                  l.a.createElement(v.a, {
                    containerStyle: A.itemContainer,
                    items: [
                      { label: w, description: T, decoration: r },
                      { label: K, description: M, decoration: i },
                      { label: L, description: x, decoration: o },
                    ],
                  }),
                )
              },
              [n, t],
            )
          return !1 === (null == t ? void 0 : t.canJoinCommunity)
            ? null
            : l.a.createElement(f, {
                Content: a,
                actionLabel: S,
                behavioralEventContext: R,
                flag: i.i,
                headline: F,
                subtext: I,
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
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
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
          var l = a.api
          return o.b(t, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      s.a.register(
        l()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: i()(i()({}, e.fetchStatus), {}, l()({}, g(t), c.a.LOADING)) })
            case m.FAILURE:
              return i()(
                i()({}, e),
                {},
                { fetchStatus: i()(i()({}, e.fetchStatus), {}, l()({}, g(t), c.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return i()(
                  i()({}, e),
                  {},
                  ((n = {}),
                  l()(n, g(t), t.payload),
                  l()(n, 'fetchStatus', i()(i()({}, e.fetchStatus), {}, l()({}, g(t), c.a.LOADED))),
                  l()(n, 'error', null),
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
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
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
            r = e.onChange,
            s = i.a.useContext(o.a).featureSwitches,
            u = i.a.useState(!1),
            d = l()(u, 2),
            p = d[0],
            _ = d[1],
            k = i.a.useState(void 0),
            E = l()(k, 2),
            C = E[0],
            S = E[1],
            F = s.getNumberValue('c9s_max_community_name_length', 30),
            I = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.g)(t, 3, F)
                  ? (y()(t).length > 0 || g()(t).length > 0) && ((n = !0), S(v))
                  : ((n = !0), S(h({ minCharacterCount: 3, maxCharacterCount: F }))),
                  _(n),
                  r(t, n)
              },
              [F, r, S],
            ),
            w = b({ minCharacterCount: 3, maxCharacterCount: F })
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
            onChange: I,
            spellCheck: 'false',
            validLength: F,
            value: a,
          })
        }
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            l()(
              l()({}, e),
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
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            l()(
              l()({}, e),
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
          return H
        })
      var a = n('97Jx'),
        l = n.n(a),
        r = (n('KqXw'), n('WNMA'), n('2G9S'), n('ERkP')),
        i = n.n(r),
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
        k = n('rHpw'),
        E = k.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        C = n('mWs5'),
        S = n('PKbs'),
        F = d.a.b772cd65,
        I = d.a.gfca5254
      var w = _(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.explanation,
            l = e.history,
            r = e.reorderRules,
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
                r(o, { ruleIds: t })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, r, l, n],
            ),
            v = i.a.createElement(b.a, { onPress: h, size: 'small', type: 'brandFilled' }, F)
          return i.a.createElement(
            y.a,
            null,
            i.a.createElement(
              C.a,
              { communityId: o, rightControl: v, screenType: 'primaryDetail', title: I },
              i.a.createElement(S.b, {
                badgeStyle: E.badgeStyle,
                displayType: S.a.Reorder,
                explanation: a,
                headerContainerStyle: E.headerContainerStyle,
                onReorder: g,
                ruleContainerStyle: E.ruleContainerStyle,
                rules: d,
                theme: s,
              }),
            ),
          )
        }),
        T = n('MWbm'),
        K = n('mjJ+'),
        M = n('iY63'),
        L = n('ACHU'),
        x = n('zCf4'),
        R = d.a.gfca5254,
        O = d.a.d94edeb4,
        A = d.a.j560c8ea,
        j = d.a.ab8089ea,
        N = d.a.h63a5c3b,
        P = i.a.createElement(M.a, null),
        B = i.a.createElement(L.a, null),
        D = { viewType: 'add' },
        H = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            a = t.isTrue('c9s_rule_editing_enabled'),
            r = t.isTrue('c9s_rule_reordering_enabled'),
            s = e.community,
            u = e.history,
            m = e.match,
            d = s.id_str,
            g = s.role,
            f = s.rules,
            h = s.theme,
            v = m.url,
            _ = g === c.a.Admin,
            k =
              n && _
                ? i.a.createElement(b.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: D,
                    icon: P,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            F = f.length > 1,
            I =
              r && _ && F
                ? i.a.createElement(b.a, {
                    accessibilityLabel: N,
                    icon: B,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: j, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return i.a.createElement(K.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: U.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            M = i.a.createElement(T.a, { style: U.rightControlStyle }, k, I),
            L = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            _ &&
              a &&
              ((L.displayType = S.a.Pivot),
              (L.getPivotLink = function (e) {
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
                    { communityId: d, rightControl: M, screenType: 'primaryDetail', title: R },
                    i.a.createElement(
                      S.b,
                      l()(
                        {
                          badgeStyle: E.badgeStyle,
                          explanation: O,
                          headerContainerStyle: E.headerContainerStyle,
                          ruleContainerStyle: E.ruleContainerStyle,
                          rules: f,
                          theme: h,
                        },
                        L,
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
        U = k.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(H)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityTimelineType', function () {
          return Pl
        }),
        n.d(t, 'CommunityScreen', function () {
          return Dl
        })
      var a,
        l,
        r,
        i,
        o,
        c = n('yiKp'),
        s = n.n(c),
        u = n('VrFO'),
        m = n.n(u),
        d = n('Y9Ll'),
        y = n.n(d),
        p = n('1Pcy'),
        g = n.n(p),
        f = n('5Yy7'),
        b = n.n(f),
        h = n('2VqO'),
        v = n.n(h),
        _ = n('KEM+'),
        k = n.n(_),
        E = (n('yH/f'), n('2G9S'), n('KqXw'), n('WNMA'), n('ho0z'), n('ERkP')),
        C = n.n(E),
        S = n('WpDa'),
        F = n('ZNT5'),
        I = (n('enFi'), n('3XMw')),
        w = n.n(I),
        T = (n('1t7P'), n('jQ/y'), n('Ig1G')),
        K = n('jV+4'),
        M = n('t62R'),
        L = n('jAXQ'),
        x = n.n(L),
        R = function (e) {
          var t = x()(void 0 !== a ? a : (a = n('pChJ')), e.community),
            l = C.a.useMemo(
              function () {
                return new Date(t.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [t.created_at],
            ),
            r = C.a.useMemo(
              function () {
                return C.a.createElement(K.a, {
                  isVerified: null == t ? void 0 : t.creator.legacy.verified,
                  screenName: (null == t ? void 0 : t.creator.legacy.screen_name) || '',
                  withLink: !0,
                })
              },
              [t],
            )
          return t.creator
            ? C.a.createElement(
                M.b,
                { color: 'gray700' },
                C.a.createElement(w.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, r),
              )
            : null
        },
        O = C.a.memo(R),
        A = n('v6aA'),
        j = function (e) {
          var t = C.a.useContext(A.a).featureSwitches
          return C.a.useMemo(
            function () {
              return t.isTrue(e)
            },
            [e, t],
          )
        },
        N = n('6vad'),
        P = n('csss'),
        B = n('h0NW'),
        D = n('0yYu'),
        H = n('rHpw'),
        U = n('cOhU'),
        V = n('DlMI'),
        z = n('Lxak'),
        q = n('a5gf'),
        W = C.a.createElement(M.b, { weight: 'bold' }),
        Q = w.a.af7c11a9,
        X = w.a.db1b9462,
        J = w.a.ea49402d,
        G = C.a.createElement(w.a.I18NFormatMessage, { $i18n: 'he99cc29' }, C.a.cloneElement(W, null, w.a.gedb877c)),
        Y = w.a.fcef2921,
        Z = w.a.c93dd2c8,
        $ = function (e) {
          var t = x()(void 0 !== l ? l : (l = n('1rMX')), e.community),
            a = j('c9s_request_to_join_enabled'),
            r = C.a.useMemo(
              function () {
                var e = function (e) {
                    return C.a.createElement(M.b, null, e)
                  },
                  n = C.a.createElement(O, { community: t }),
                  l = t.membership_settings.__typename,
                  r = {
                    CommunityMemberAllowedActions: { decoration: te, label: e(X) },
                    CommunityOpenMembershipEducation: { decoration: ne, label: G, description: Y },
                    CommunityRestrictedMembershipEducation: { decoration: le, label: G, description: Z },
                    CommunityVisibilityEducation: { decoration: ne, label: e(J) },
                    OriginationAttributionEducation: { decoration: ae, label: n },
                  },
                  i = [r.CommunityMemberAllowedActions]
                return (
                  a
                    ? ('CommunityRestrictedMembershipSettings' === l &&
                        i.push(r.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === l && i.push(r.CommunityOpenMembershipEducation))
                    : i.push(r.CommunityVisibilityEducation),
                  n && i.push(r.OriginationAttributionEducation),
                  i
                )
              },
              [t, a],
            )
          return C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(N.b, { text: Q }),
            Object(T.f)(t.role) && t.description ? C.a.createElement(P.a, { label: t.description }) : null,
            C.a.createElement(B.a, { containerStyle: ee.containerStyle, items: r }),
            C.a.createElement(D.a, null),
          )
        },
        ee = H.a.create(function (e) {
          return {
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            icon: {
              marginLeft: '6px',
              marginRight: e.spaces.space20,
              color: e.colors.gray700,
              height: e.spaces.space24,
              width: e.spaces.space24,
            },
          }
        }),
        te = C.a.createElement(U.a, { style: ee.icon }),
        ne = C.a.createElement(V.a, { style: ee.icon }),
        ae = C.a.createElement(z.a, { style: ee.icon }),
        le = C.a.createElement(q.a, { style: ee.icon }),
        re = C.a.memo($),
        ie = n('yoO3'),
        oe = n('Fr3L'),
        ce = n('fTQJ'),
        se = (n('z84I'), n('PKbs')),
        ue = n('X00g'),
        me = function (e) {
          var t = x()(void 0 !== r ? r : (r = n('DCZs')), e),
            a = t.custom_theme,
            l = t.default_theme,
            i = null != a ? a : l
          return C.a.useMemo(
            function () {
              return ue.a.getCommunityTheme(i)
            },
            [i],
          )
        },
        de = me,
        ye = n('rC8y'),
        pe = void 0 !== i ? i : (i = n('BX8b')),
        ge = w.a.gfca5254,
        fe = w.a.ffd9cfe6,
        be = function (e) {
          var t = e.community,
            n = x()(pe, t),
            a = n.rules,
            l = de(n),
            r = C.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : C.a.createElement(
                C.a.Fragment,
                null,
                C.a.createElement(N.b, { text: ge }),
                C.a.createElement(se.b, {
                  badgeStyle: he.badgeStyle,
                  headerContainerStyle: [he.containerStyle, he.headingContainerStyle],
                  headerExplanationStyle: he.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: he.ruleContainerStyle,
                  rules: r,
                  theme: l,
                }),
                a.length > 5
                  ? C.a.createElement(
                      C.a.Fragment,
                      null,
                      C.a.createElement(ye.a, { link: '/i/communities/'.concat(n.rest_id, '/rules'), text: fe }),
                      ' ',
                      C.a.createElement(D.a, null),
                    )
                  : null,
              )
        },
        he = H.a.create(function (e) {
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
        ve = C.a.memo(be),
        _e = n('7JQg'),
        ke = n('IAZG'),
        Ee = w.a.i9028824,
        Ce = w.a.cc683fb9,
        Se = { page: 'community', section: 'about' },
        Fe = void 0 !== o ? o : (o = n('jC8Z'))
      function Ie(e) {
        var t = e.communityId,
          n = Object(ke.a)(Fe, { communityId: t })
        return C.a.createElement(
          C.a.Fragment,
          null,
          C.a.createElement(re, { community: n.community }),
          C.a.createElement(ve, { community: n.community }),
        )
      }
      var we = function (e) {
          var t = e.communityId,
            n = C.a.useMemo(
              function () {
                return (function (e) {
                  return Object(F.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (t) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: S.a,
                  })
                })(t)
              },
              [t],
            )
          return C.a.createElement(
            _e.c,
            { namespace: Se },
            C.a.createElement(
              ie.a,
              { behavioralEventViewType: 'about' },
              C.a.createElement(
                oe.a,
                { errorConfig: { context: 'CommunityAboutScreen' } },
                C.a.createElement(Ie, { communityId: t }),
              ),
              C.a.createElement(ce.a, { loadingAccessibilityLabel: Ee, module: n, title: Ce }),
            ),
          )
        },
        Te = n('+Kfv'),
        Ke = n('es0u'),
        Me = n('rxPX'),
        Le = n('0KEI'),
        xe = n('R5kW'),
        Re = function (e, t) {
          var n,
            a = Object(xe.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        Oe = function (e, t) {
          return Object(xe.c)(e, t.communityId)
        },
        Ae = Object(Me.a)()
          .propsFromState(function () {
            return { count: Re, fetchStatus: Oe }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Le.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: xe.a,
            }
          }),
        je = n('kGix'),
        Ne = n('TnY3'),
        Pe = n('MWbm'),
        Be = n('mjJ+'),
        De = n('/yvb'),
        He = n('Znyr'),
        Ue = n('zIWA'),
        Ve = n('SNyS'),
        ze = n('Lsrn'),
        qe = n('k/Ka'),
        We = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(qe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ze.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      We.metadata = { width: 24, height: 24 }
      var Qe = We,
        Xe = n('ACHU'),
        Je = w.a.h6beb5fa,
        Ge = w.a.e3f04700,
        Ye = w.a.e2429f56,
        Ze = w.a.df15d5b7,
        $e = w.a.e48fbb01,
        et = w.a.c8c6c4e9,
        tt = w.a.h63a5c3b,
        nt = w.a.dce5e1b3,
        at = w.a.c5d8c93d,
        lt = { viewType: 'app_bar_button' }
      var rt = H.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        it = Object(Ne.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            l = void 0 === a ? 0 : a,
            r = (e.history, e.userRole),
            i = C.a.useContext(A.a).featureSwitches,
            o = i.isTrue('c9s_settings_enabled'),
            c = i.isTrue('c9s_report_community_enabled'),
            s = i.isTrue('c9s_moderation_enabled') && t,
            u = o && t,
            m = c && !t,
            d = C.a.useCallback(
              function (e) {
                var t = []
                return (
                  s &&
                    t.push({
                      text: Ye,
                      subText: Ze({ count: l }),
                      Icon: Ue.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  m &&
                    t.push({
                      text: $e,
                      Icon: Ue.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: et, Icon: Ve.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  C.a.createElement(Be.a, { items: t, onCloseRequested: e })
                )
              },
              [n, l, s, m],
            ),
            y = t ? Qe : Xe.a,
            p = t ? (r === T.a.Admin ? nt : at) : tt
          return C.a.createElement(
            Pe.a,
            { style: rt.root },
            C.a.createElement(De.a, {
              accessibilityLabel: p,
              behavioralEventContext: lt,
              icon: C.a.createElement(y, null),
              link: u ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: u ? void 0 : d,
              size: 'xLarge',
              type: 'primaryText',
            }),
            s && l > 0
              ? C.a.createElement(He.a, {
                  count: l,
                  style: rt.menuControlBadge,
                  truncatedCountFormatter: Je,
                  unreadCountLabel: Ge,
                  withBorder: !1,
                })
              : null,
          )
        })
      var ot = Ae(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            l = e.createLocalApiErrorHandler,
            r = e.fetchCommunityModerationData,
            i = e.fetchStatus,
            o = e.userRole
          return (
            C.a.useEffect(
              function () {
                i === je.a.NONE && t && r(n).catch(l())
              },
              [l, r, i, n, t],
            ),
            C.a.createElement(it, { canModerate: t, communityId: n, count: a, userRole: o })
          )
        }),
        ct = (n('7xRU'), n('tVqn'), n('LW0h'), n('7x/C'), n('uFXj'), n('ddV6')),
        st = n.n(ct),
        ut = w.a.fad95333,
        mt = function (e) {
          var t = e.offendingRule
          return C.a.createElement(
            Pe.a,
            null,
            t
              ? C.a.createElement(
                  Pe.a,
                  { style: dt.offendingRule },
                  (function (e) {
                    return C.a.createElement(
                      w.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      C.a.createElement(M.b, { weight: 'bold' }, w.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            C.a.createElement(M.b, null, ut),
          )
        },
        dt = H.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        yt = w.a.hafa07f2,
        pt = w.a.fa94c9da,
        gt = w.a.c15bee31,
        ft = w.a.i859676b,
        bt = C.a.createElement(
          w.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          C.a.createElement(M.b, { link: '/settings/audience_and_tagging' }, w.a.e77dfaf0),
        ),
        ht = w.a.fc2a5c92,
        vt = w.a.bf7bdb60,
        _t = w.a.h27d695f,
        kt = w.a.b02360f5,
        Et = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        Ct = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        St = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Ft,
        It,
        wt,
        Tt,
        Kt,
        Mt = n('CGyZ'),
        Lt = n('feu+'),
        xt = w.a.e6057013,
        Rt = { follow: w.a.b171d7c4, following: w.a.aa7ae3f6, unfollow: w.a.bb1d57b6 },
        Ot = w.a.j24c37b2,
        At = function (e) {
          var t = C.a.useContext(A.a).featureSwitches,
            n = C.a.useState(void 0),
            a = st()(n, 2),
            l = a[0],
            r = a[1],
            i = t.isTrue('c9s_request_to_join_enabled'),
            o = e.community,
            c = e.createLocalApiErrorHandler,
            u = e.history,
            m = e.isProtectedUser,
            d = e.join,
            y = e.leave,
            p = o.actions,
            g = p.join_action_result,
            f = p.leave_action_result,
            b = o.id_str,
            h = o.name,
            v = o.role,
            _ = Object(T.f)(v),
            k = g.reason === St.ViewerJoinRequestRequired && i,
            E = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !_ } },
            S = function () {
              r(void 0)
            },
            F = C.a.useMemo(
              function () {
                return k ? s()(s()({}, Rt), {}, { follow: xt }) : Rt
              },
              [k],
            )
          return C.a.createElement(
            Pe.a,
            { style: jt.button },
            C.a.createElement(Mt.a, {
              behavioralEventContext: E,
              buttonText: F,
              isFollowing: _,
              name: h,
              onFollow: function () {
                var e = o.rules,
                  t = o.viewerViolatedRule,
                  n = (function (e, t, n) {
                    var a = e.__typename,
                      l = e.reason,
                      r = function (e) {
                        return { canAction: !0, message: e }
                      },
                      i = function (e) {
                        return { canAction: !1, message: e }
                      },
                      o = i({ headline: ht, text: vt })
                    switch (a) {
                      case Et.joinAvailable:
                        return r()
                      case Et.joinUnavailable:
                        switch (l) {
                          case St.ViewerIsRemoved:
                            return i({
                              headline: gt,
                              text: C.a.createElement(mt, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case St.ViewerNotInvited:
                            return i({ headline: yt, text: pt })
                          case St.ViewerIsProtected:
                            return t ? i({ headline: ft, text: bt }) : r()
                          case St.ViewerJoinRequestRequired:
                            return r()
                          default:
                            return o
                        }
                      default:
                        return o
                    }
                  })(g, m, t),
                  a = n.canAction,
                  l = n.message
                !a && l && r(l),
                  a &&
                    (e && e.length > 0
                      ? u.push({
                          pathname: '/i/communities/'.concat(b, '/join'),
                          state: { community: o, joinRequestRequired: k },
                        })
                      : d(b).catch(c({})))
              },
              onUnfollow: function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      a = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      r = l({ headline: ht, text: vt })
                    switch (n) {
                      case Et.leaveAvailable:
                        return { canAction: !0, message: t }
                      case Et.leaveUnavailable:
                        switch (a) {
                          case Ct.ViewerIsSoleAdmin:
                            return l({ headline: _t, text: kt })
                          default:
                            return r
                        }
                      default:
                        return r
                    }
                  })(f),
                  t = e.canAction,
                  n = e.message
                !t && n && r(n), t && y(b).catch(c({}))
              },
              type: 'community',
            }),
            l
              ? C.a.createElement(Lt.a, {
                  actionLabel: Ot,
                  graphicDisplayMode: 'none',
                  headline: l.headline,
                  onAction: S,
                  onClose: S,
                  subtext: l.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        jt = H.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Nt = n('YeIG'),
        Pt = n('cHTv'),
        Bt = function (e) {
          var t = x()(void 0 !== Ft ? Ft : (Ft = n('dMLx')), e)
          return C.a.useMemo(
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
                    var l = a.color_info.palette
                    return {
                      url: a.original_img_url,
                      height: a.original_img_height,
                      width: a.original_img_width,
                      palette: l,
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
                Pt.b
              )
            },
            [t],
          )
        },
        Dt = n('TIdA'),
        Ht = n('A91F'),
        Ut = n('9Xij'),
        Vt = void 0 !== It ? It : (It = n('fK4d')),
        zt = function (e) {
          var t = x()(Vt, e.community),
            n = Bt(t),
            a = H.a.theme.aspectRatios.communityBanner
          return n && !Object(Nt.a)(n)
            ? C.a.createElement(
                Pe.a,
                null,
                C.a.createElement(Dt.a, {
                  accessibilityLabel: '',
                  aspectMode: Ht.a.exact(a),
                  backgroundColor: H.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : C.a.createElement(Ut.a, { ratio: a }, C.a.createElement(Pe.a, { style: qt.placeholderImageContainer }))
        },
        qt = H.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        Wt = C.a.memo(zt),
        Qt = { context: 'CommunityBannerImageQuery' },
        Xt = void 0 !== wt ? wt : (wt = n('vUUo')),
        Jt = function (e) {
          var t = e.communityId,
            n = Object(ke.a)(Xt, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return C.a.createElement(Wt, { community: n.community })
        },
        Gt = function (e) {
          return C.a.createElement(oe.a, { errorConfig: Qt }, C.a.createElement(Jt, { communityId: e.communityId }))
        },
        Yt = C.a.memo(Gt),
        Zt = n('K1iM'),
        $t = n.n(Zt),
        en = n('n4Eu'),
        tn = { red: 0, green: 0, blue: 0 },
        nn = '10px',
        an = H.a.create(function (e) {
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
        ln = function (e) {
          var t = e.children,
            a = e.community,
            l = x()(void 0 !== Tt ? Tt : (Tt = n('OBBW')), a),
            r = de(l),
            i = Bt(l).palette,
            o = []
          if (i) {
            var c,
              s = $t()(i)
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var u = c.value
                o.push({ percentage: u.percentage, rgb: { blue: u.rgb.blue, green: u.rgb.green, red: u.rgb.red } })
              }
            } catch (d) {
              s.e(d)
            } finally {
              s.f()
            }
          }
          var m = j('c9s_ui_colors_enabled_rweb')
          return C.a.createElement(
            Pe.a,
            null,
            C.a.createElement(Pe.a, { style: an.descriptionContainer }, t),
            C.a.createElement(Pe.a, { style: [H.a.absoluteFill, an.backgroundColorWhite] }),
            C.a.createElement(Pe.a, {
              style: [
                H.a.absoluteFill,
                an.backgroundColor,
                (function (e, t) {
                  if (m) return ue.a.getCommunityGradientStyle(t, nn)
                  var n = e && en.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : tn,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    r = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(nn, ', ')
                      .concat(r, ' ')
                      .concat(nn, ' 100%)'),
                  }
                })(o, r),
              ],
            }),
          )
        },
        rn = { context: 'CommunityDescriptionContainerQuery' },
        on = void 0 !== Kt ? Kt : (Kt = n('a/V2')),
        cn = function (e) {
          var t = e.children,
            n = e.communityId,
            a = Object(ke.a)(on, { communityId: n }, { fetchPolicy: 'store-and-network' })
          return C.a.createElement(ln, { community: a.community }, t)
        },
        sn = function (e) {
          return C.a.createElement(
            oe.a,
            { errorConfig: rn },
            C.a.createElement(cn, { communityId: e.communityId }, e.children),
          )
        },
        un = C.a.memo(sn),
        mn = n('LgBi'),
        dn = n('97Jx'),
        yn = n.n(dn),
        pn = n('m3Bd'),
        gn = n.n(pn),
        fn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(qe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ze.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              C.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      fn.metadata = { width: 24, height: 24 }
      var bn,
        hn,
        vn,
        _n,
        kn,
        En = fn,
        Cn = ['renderMenu'],
        Sn = ['accessibilityLabel', 'behavioralEventContext'],
        Fn = C.a.createElement(En, null),
        In = function (e) {
          var t = e.renderMenu,
            n = gn()(e, Cn),
            a = n.accessibilityLabel,
            l = n.behavioralEventContext,
            r = gn()(n, Sn)
          return C.a.createElement(
            De.a,
            yn()({ accessibilityLabel: a, behavioralEventContext: l, icon: Fn, renderMenu: t, type: 'primaryText' }, r),
          )
        },
        wn = n('1Idg'),
        Tn = n('1YZw'),
        Kn = n('G6rE'),
        Mn = n('li/m'),
        Ln = ['loggedInUser'],
        xn = Object(Me.a)()
          .propsFromState(function () {
            return { community: wn.a, loggedInUser: Kn.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = gn()(e, Ln)
            return s()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              addToast: Tn.b,
              createLocalApiErrorHandler: Object(Le.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: Mn.b,
              leave: Mn.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        Rn = w.a.hb9400db,
        On = function (e) {
          var t = e.community,
            a = x()(void 0 !== bn ? bn : (bn = n('ldL/')), t),
            l = a.description,
            r = a.role,
            i = C.a.useState(!1),
            o = st()(i, 2),
            c = o[0],
            s = o[1],
            u = C.a.useState(!1),
            m = st()(u, 2),
            d = m[0],
            y = m[1],
            p = C.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), s(!c)
              },
              [c],
            )
          return !l || Object(T.f)(r)
            ? null
            : C.a.createElement(
                Pe.a,
                { style: An.description },
                C.a.createElement(M.b, { color: 'white', getTextOverflow: y, numberOfLines: c ? void 0 : 2 }, l),
                !c && d ? C.a.createElement(M.b, { color: 'white', onPress: p, weight: 'bold' }, Rn) : null,
              )
        },
        An = H.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        jn = C.a.memo(On),
        Nn = { context: 'CommunityDescriptionToggleQuery' },
        Pn = void 0 !== hn ? hn : (hn = n('2fn4')),
        Bn = function (e) {
          var t = e.communityId,
            n = Object(ke.a)(Pn, { communityId: t })
          return C.a.createElement(jn, { community: n.community })
        },
        Dn = function (e) {
          return C.a.createElement(oe.a, { errorConfig: Nn }, C.a.createElement(Bn, { communityId: e.communityId }))
        },
        Hn = C.a.memo(Dn),
        Un = n('MtXG'),
        Vn = w.a.d58baa7e,
        zn = function (e) {
          var t = e.community,
            a = x()(void 0 !== vn ? vn : (vn = n('WuQQ')), t).member_count,
            l = void 0 === a ? 0 : a,
            r = Vn(l)
          return C.a.createElement(
            Un.a.Group,
            null,
            C.a.createElement(
              Un.a,
              { onMedia: !0 },
              C.a.createElement(
                M.b,
                { color: 'white' },
                C.a.createElement(
                  w.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  C.a.createElement(Un.a.Value, null, w.a.ibd0106d({ formattedCount: r })),
                  C.a.createElement(Un.a.Label, null, w.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        qn = n('cm6r'),
        Wn = n('MAI/'),
        Qn = n('I4+6'),
        Xn = Qn.a.generate({
          backgroundColor: H.a.theme.colors.transparent,
          color: H.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Jn = H.a.create(function (e) {
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
        Gn = function (e) {
          var t = e.community,
            a = x()(void 0 !== _n ? _n : (_n = n('Eh7u')), t),
            l = j('c9s_ui_colors_enabled_rweb'),
            r = a.members_facepile_results,
            i = a.rest_id,
            o = (function (e) {
              var t,
                n = [],
                a = $t()(e)
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var l = t.value.result
                  if ('User' === (null == l ? void 0 : l.__typename)) {
                    var r,
                      i = null === (r = l.legacy) || void 0 === r ? void 0 : r.profile_image_url_https
                    i && n.push(i)
                  }
                }
              } catch (o) {
                a.e(o)
              } finally {
                a.f()
              }
              return n
            })(r),
            c = me(a),
            s = l ? ue.a.getCommunityBackgroundColorName(c) : void 0
          return C.a.createElement(
            qn.a,
            { interactiveStyles: Xn, link: '/i/communities/'.concat(i, '/members'), style: Jn.membersContainer },
            o.length > 0
              ? C.a.createElement(Wn.a, {
                  borderColor: s,
                  style: Jn.rightSpace,
                  userAvatarSize: 'large',
                  userAvatarUrls: o,
                })
              : null,
            C.a.createElement(zn, { community: a }),
          )
        },
        Yn = { context: 'CommunityFacePileQuery' },
        Zn = void 0 !== kn ? kn : (kn = n('ZYKh')),
        $n = function (e) {
          var t = e.communityId,
            n = Object(ke.a)(Zn, { communityId: t })
          return C.a.createElement(Gn, { community: n.community })
        },
        ea = function (e) {
          return C.a.createElement(oe.a, { errorConfig: Yn }, C.a.createElement($n, { communityId: e.communityId }))
        },
        ta = n('oQhu'),
        na = n('k/OQ'),
        aa = n('CaKu'),
        la = n('I/9y'),
        ra = n('pwey'),
        ia = w.a.a0e3ece4,
        oa = w.a.bec3b8f9,
        ca = w.a.e05c00b4,
        sa = w.a.f88553c8,
        ua = w.a.b139b549,
        ma = w.a.ha8209bb,
        da = w.a.d601fc2f,
        ya = w.a.b721eb37,
        pa = { viewType: 'description' },
        ga = { viewType: 'facepiles_with_count' },
        fa = { viewType: 'share_community' },
        ba = { viewType: 'copy_link' },
        ha = { viewType: 'invite_members' },
        va =
          (w.a.d58baa7e,
          (function (e) {
            b()(n, e)
            var t = v()(n)
            function n() {
              var e
              m()(this, n)
              for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
              return (
                (e = t.call.apply(t, [this].concat(l))),
                k()(g()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
                k()(g()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
                k()(
                  g()(e),
                  '_isTimelinesRankingEnabled',
                  e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
                ),
                k()(
                  g()(e),
                  '_isCommunitiesSharingEnabled',
                  e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
                ),
                k()(g()(e), 'state', { shouldShowFullDescription: !1, hasOverflow: void 0 }),
                k()(g()(e), '_renderCommunityDescription', function () {
                  var t = e.props,
                    n = t.community,
                    a = t.communityId,
                    l = t.createLocalApiErrorHandler,
                    r = t.history,
                    i = t.isProtectedUser,
                    o = t.join,
                    c = t.leave
                  if (n) {
                    var s = n.name
                    return C.a.createElement(
                      Te.a,
                      { behavioralEventContext: pa },
                      C.a.createElement(
                        un,
                        { communityId: a },
                        C.a.createElement(
                          M.b,
                          { color: 'white', size: 'title2', style: _a.name, weight: 'bold' },
                          s.trim(),
                        ),
                        C.a.createElement(Hn, { communityId: a }),
                        C.a.createElement(
                          Te.a,
                          { behavioralEventContext: ga },
                          C.a.createElement(
                            Pe.a,
                            { style: _a.bottomContainer },
                            C.a.createElement(ea, { communityId: a }),
                            C.a.createElement(
                              Pe.a,
                              { style: _a.buttons },
                              e._isCommunitiesSharingEnabled
                                ? C.a.createElement(In, {
                                    accessibilityLabel: oa,
                                    behavioralEventContext: fa,
                                    renderMenu: e._renderActionMenu,
                                    style: _a.inviteButton,
                                    type: 'onMediaOutlined',
                                  })
                                : C.a.createElement(mn.a, {
                                    communityId: a,
                                    style: _a.inviteButton,
                                    type: 'onMediaOutlined',
                                  }),
                              e._isParticipationEnabled
                                ? C.a.createElement(At, {
                                    community: n,
                                    createLocalApiErrorHandler: l,
                                    history: r,
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
                k()(g()(e), '_renderTabs', function () {
                  var t = e.props.communityId,
                    n = [
                      { to: '/i/communities/'.concat(t), label: ma, key: ma },
                      { to: '/i/communities/'.concat(t, '/latest'), label: da, key: da },
                      { to: '/i/communities/'.concat(t, '/about'), label: ya, key: ya },
                    ]
                  return C.a.createElement(na.a, {
                    accessibilityLabel: ia,
                    links: e._isTimelinesRankingEnabled
                      ? n
                      : (function (e) {
                          return e.filter(function (e) {
                            return e.label !== da
                          })
                        })(n),
                  })
                }),
                k()(
                  g()(e),
                  '_getCommunityShareItems',
                  Object(ta.a)(function (t, n) {
                    var a = []
                    return (
                      a.push({ behavioralEventContext: ba, text: ca, Icon: la.a, onClick: e._handleCopyLink }),
                      t &&
                        a.push({
                          behavioralEventContext: ha,
                          text: ua,
                          Icon: ra.a,
                          link: '/i/communities/'.concat(n, '/invite'),
                        }),
                      a
                    )
                  }),
                ),
                k()(g()(e), '_renderActionMenu', function (t) {
                  var n = e.props,
                    a = n.community,
                    l = n.communityId,
                    r = null == a ? void 0 : a.role,
                    i = Object(T.f)(r),
                    o = e._getCommunityShareItems(i, l)
                  return C.a.createElement(Be.a, { items: o, onCloseRequested: t })
                }),
                k()(g()(e), '_handleCopyLink', function (t) {
                  var n = e.props,
                    a = n.addToast,
                    l = n.communityId
                  aa.a.setString('https://twitter.com/i/communities/'.concat(l)), t(), a({ text: sa })
                }),
                k()(g()(e), '_handleDescriptionClick', function () {
                  var t = e.state.shouldShowFullDescription
                  e.setState({ shouldShowFullDescription: !t })
                }),
                k()(g()(e), '_getDescriptionOverflow', function (t) {
                  void 0 === e.state.hasOverflow && e.setState({ hasOverflow: t })
                }),
                e
              )
            }
            return (
              y()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.community,
                      n = e.communityId
                    return t
                      ? C.a.createElement(
                          ie.a,
                          { behavioralEventViewType: 'timeline' },
                          C.a.createElement(
                            Pe.a,
                            { style: _a.container },
                            C.a.createElement(
                              Pe.a,
                              null,
                              C.a.createElement(Yt, { communityId: n }),
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
          })(C.a.Component))
      k()(va, 'contextType', A.a)
      var _a = H.a.create(function (e) {
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
        ka = xn(va),
        Ea = n('eSoz'),
        Ca = n('hqKg'),
        Sa = n('8Lfv'),
        Fa = n('LI/a'),
        Ia = function (e, t) {
          return t.communityId
        },
        wa = function (e, t) {
          var n = Ea.c.select(e, t.communityId)
          return Object(T.f)(null == n ? void 0 : n.role)
        },
        Ta = Object(Me.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: wa,
              rankedTweetsModule: Object(Ca.createSelector)(Ia, function (e) {
                return Object(Fa.b)(e)
              }),
              tweetsModule: Object(Ca.createSelector)(Ia, function (e) {
                return Object(Fa.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: Sa.a,
              createLocalApiErrorHandler: Object(Le.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        Ka = n('FIs5'),
        Ma = n('EUHl'),
        La = n('7BdX'),
        xa = w.a.c18e3a3e,
        Ra = w.a.d68146c0,
        Oa = w.a.h5245afa,
        Aa = w.a.f05dbeff,
        ja = { page: 'community', section: 'home' },
        Na = { page: 'community', section: 'latest' },
        Pa = { page: 'community', section: 'tweets' },
        Ba = Ta(function (e) {
          var t = C.a.useContext(A.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            l = e.isCommunityMember,
            r = e.rankedTweetsModule,
            i = e.tweetsModule,
            o = e.type === Pl.Home ? { module: r, scribeNamespace: ja } : { module: i, scribeNamespace: Na },
            c = t ? o : { module: i, scribeNamespace: Pa },
            s = c.module,
            u = c.scribeNamespace
          C.a.useEffect(
            function () {
              n(s).catch(a())
            },
            [n, a, l, s],
          )
          var m = C.a.useCallback(function () {
            return C.a.createElement(Ka.a, { buttonType: 'brandOutlined', header: xa, message: Ra })
          }, [])
          return C.a.createElement(
            _e.c,
            { namespace: u },
            C.a.createElement(
              ie.a,
              { behavioralEventViewType: 'tweets' },
              C.a.createElement(ce.a, {
                loadingAccessibilityLabel: Aa,
                module: s,
                newTweetsPillMode: Ma.a.CLIENT,
                prerollDisplayLocation: La.c.OTHER,
                refreshControl: null,
                renderEmptyState: m,
                title: Oa,
              }),
            ),
          )
        }),
        Da = n('o3oN'),
        Ha = ['loggedInUser'],
        Ua = Object(Me.a)()
          .propsFromState(function () {
            return {
              communityId: wn.c,
              community: wn.a,
              communityTheme: wn.f,
              fetchStatus: wn.b,
              membershipsFetchStatus: Da.d,
              isCommunityMember: wn.g,
              joinActionResultType: wn.h,
              loggedInUser: Kn.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = gn()(e, Ha)
            return s()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Le.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: Ea.c.fetchOneIfNeeded,
              fetchCommunityMemberships: Da.a,
            }
          })
          .withAnalytics({ page: 'community' }),
        Va = (n('MvUL'), n('zCf4')),
        za = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(qe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ze.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
              }),
              C.a.createElement('path', {
                d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
              }),
            ),
          )
        }
      za.metadata = { width: 24, height: 24 }
      var qa,
        Wa,
        Qa = za,
        Xa = n('wpLu'),
        Ja = w.a.bf359e0d,
        Ga = w.a.e8fcdd3a,
        Ya = w.a.b37d580e,
        Za = w.a.cafca4b2,
        $a = w.a.ea3b38fa,
        el = w.a.jd667130,
        tl = w.a.ca7eeabf,
        nl = w.a.acae4034,
        al = w.a.e2186ee2,
        ll = w.a.j24c37b2,
        rl = function (e) {
          var t = x()(void 0 !== qa ? qa : (qa = n('2rr8')), e.community),
            a = Object(Va.f)(),
            l = C.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(t.rest_id, '/'))
              },
              [a, t.rest_id],
            ),
            r = C.a.createElement(
              Pe.a,
              { accessibilityRole: 'list', style: il.rulesContainer },
              t.rules.map(function (e) {
                return C.a.createElement(
                  M.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: il.rule },
                  e.name,
                )
              }),
            ),
            i = 'Public' === t.access,
            o = i ? $a : Ya,
            c = i ? el : Za
          return C.a.createElement(
            Lt.a,
            {
              actionLabel: ll,
              graphicDisplayMode: 'none',
              headline: Ja,
              onAction: l,
              onClose: l,
              subtext: Ga,
              withCloseButton: !0,
            },
            C.a.createElement(
              Pe.a,
              { style: il.infoItemsContainer },
              C.a.createElement(B.a, {
                containerStyle: il.itemContainer,
                items: [
                  { label: o, description: c, decoration: C.a.createElement(Qa, { style: il.decorationContainer }) },
                  { label: tl, decoration: C.a.createElement(Xa.a, { style: il.decorationContainer }), description: r },
                  { label: nl, description: al, decoration: C.a.createElement(Qe, { style: il.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        il = H.a.create(function (e) {
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
        ol = C.a.memo(rl),
        cl = { context: 'CommunityCreationSummaryQuery' },
        sl = void 0 !== Wa ? Wa : (Wa = n('EFld')),
        ul = function (e) {
          var t = e.communityId,
            n = Object(ke.a)(sl, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return C.a.createElement(ol, { community: n.community })
        },
        ml = function (e) {
          return C.a.createElement(oe.a, { errorConfig: cl }, C.a.createElement(ul, { communityId: e.communityId }))
        },
        dl = C.a.memo(ml),
        yl = n('dwig'),
        pl = n('MDbM'),
        gl = n('0+qk'),
        fl = n('/de5'),
        bl = (n('FtFR'), n('hBvt'), n('/ekK')),
        hl = Object(Me.a)()
          .propsFromState(function () {
            return { flags: bl.b }
          })
          .propsFromActions(function () {
            return { setFlag: bl.c, retrieveFlagsIfNeeded: bl.a }
          }),
        vl = n('hOZg'),
        _l = n('WtWS'),
        kl = n('0ULw'),
        El = w.a.c66b37f9,
        Cl = w.a.g2768d0e,
        Sl = w.a.b192b58b,
        Fl = w.a.gd30278f,
        Il = w.a.cbdddb09,
        wl = w.a.h5890b1a,
        Tl = [
          {
            flag: 'setup_clicked_rules',
            title: w.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: w.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: w.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: w.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(Fl, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        Kl = C.a.memo(function (e) {
          var t = e.community.id_str,
            n = e.flags,
            a = e.retrieveFlagsIfNeeded,
            l = e.setFlag,
            r = C.a.useContext(A.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            i = Object(Va.f)()
          C.a.useEffect(
            function () {
              r && a(t)
            },
            [t, r, a],
          )
          var o = C.a.useCallback(
            function () {
              l(t, 'setup_show_checklist', !1)
            },
            [t, l],
          )
          if (!n.setup_show_checklist || !r) return null
          var c = function (e) {
              l(t, e.flag, !0).then(function () {
                i.push(e.link(t))
              })
            },
            s = function (e, t) {
              13 === t.keyCode && c(e)
            }
          return C.a.createElement(
            Pe.a,
            { style: Ml.wrapper },
            C.a.createElement(De.a, {
              accessibilityLabel: Sl,
              icon: C.a.createElement(vl.a, { style: Ml.close }),
              onClick: o,
              pullRight: !0,
              size: 'medium',
              style: Ml.dismiss,
              type: 'brandText',
            }),
            C.a.createElement(M.b, { size: 'title3', style: Ml.headline, weight: 'bold' }, El),
            C.a.createElement(M.b, { style: Ml.subtext }, Cl),
            C.a.createElement(
              Pe.a,
              { accessibilityRole: 'list', style: Ml.list },
              Tl.map(function (e) {
                var t = Boolean(n[e.flag])
                return C.a.createElement(
                  Pe.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : c.bind(null, e),
                    onKeyPress: t ? void 0 : s.bind(null, e),
                    style: [Ml.entry, t ? Ml.completedEntry : Ml.uncompletedEntry],
                  },
                  C.a.createElement(M.b, { weight: 'bold' }, e.title),
                  t
                    ? C.a.createElement(_l.a, { accessibilityLabel: Il, style: Ml.iconCompleted })
                    : C.a.createElement(kl.a, { accessibilityLabel: wl, style: Ml.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        Ml = H.a.create(function (e) {
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
        Ll = hl(Kl),
        xl = n('VS6U'),
        Rl = n('QRqA'),
        Ol = n('Qwev'),
        Al = n('mw9i'),
        jl = 'community',
        Nl = { type: 'serversideContextKey', serversideContextType: 'community' },
        Pl = Object.freeze({ Home: 'home', Latest: 'latest' }),
        Bl = w.a.a7c2e06c,
        Dl = (function (e) {
          b()(n, e)
          var t = v()(n)
          function n() {
            var e
            m()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              k()(g()(e), '_getTweetButtonLocationState', function () {
                return { selectedCommunityId: e.props.communityId, defaultText: '' }
              }),
              k()(
                g()(e),
                '_getWelcomeEducationParams',
                Object(ta.a)(function (e, t) {
                  return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
                }),
              ),
              k()(
                g()(e),
                '_getMemoizedBehavioralEventContext',
                Object(ta.a)(function (e) {
                  return { clientEntity: s()(s()({}, Nl), {}, { serversideContextId: e }), viewType: jl }
                }),
              ),
              k()(g()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.community,
                  a = t.communityId,
                  l = t.fetchStatus,
                  r = t.history,
                  i = t.joinActionResultType,
                  o = t.location,
                  c = t.match,
                  s = (null == n ? void 0 : n.role) === T.a.Admin && void 0 !== o.query.show_creation_summary,
                  u = e._isAllowedToTweet
                    ? C.a.createElement(gl.a, { getLocationState: e._getTweetButtonLocationState, history: r })
                    : null
                return a && l === pl.a.LOADING
                  ? C.a.createElement(Ol.a, { style: Hl.topMargin })
                  : a && null != n && n.name && l === pl.a.LOADED
                  ? C.a.createElement(
                      yl.a,
                      { component: Al.a, fab: u },
                      C.a.createElement(Rl.a, e._getWelcomeEducationParams(n, i)),
                      s && C.a.createElement(dl, { communityId: a }),
                      e._renderCommunityDetail(),
                      C.a.createElement(Ll, { community: n }),
                      C.a.createElement(
                        Va.b,
                        { exact: !0, path: '/i/communities/'.concat(a, '/about') },
                        C.a.createElement(we, { communityId: a }),
                      ),
                      C.a.createElement(
                        Va.d,
                        null,
                        C.a.createElement(
                          Va.b,
                          { exact: !0, path: '/i/communities/'.concat(a, '/') },
                          C.a.createElement(Ba, { communityId: a, location: o, match: c, type: Pl.Home }),
                        ),
                        C.a.createElement(
                          Va.b,
                          { path: '/i/communities/'.concat(a, '/latest') },
                          C.a.createElement(Ba, { communityId: a, location: o, match: c, type: Pl.Latest }),
                        ),
                      ),
                    )
                  : C.a.createElement(fl.b, { history: r, location: o, match: c })
              }),
              k()(g()(e), '_renderCommunityDetail', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.history,
                  l = t.match
                return n ? C.a.createElement(ka, { communityId: n, history: a, match: l }) : null
              }),
              k()(g()(e), '_handleFetchIfNeeded', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.createLocalApiErrorHandler,
                  l = t.fetchCommunityIfNeeded,
                  r = t.fetchCommunityMemberships,
                  i = t.membershipsFetchStatus
                n && l(n).catch(a({})), i === je.a.NONE && r().catch(a())
              }),
              e
            )
          }
          return (
            y()(n, [
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
                    l = e.screenName,
                    r = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
                    i = null == t ? void 0 : t.name,
                    o = n
                      ? C.a.createElement(ot, {
                          canModerate: Object(T.c)(null == t ? void 0 : t.role),
                          communityId: n,
                          userRole: null == t ? void 0 : t.role,
                        })
                      : null,
                    c = this._getMemoizedBehavioralEventContext(n || '')
                  return C.a.createElement(
                    Te.a,
                    { behavioralEventContext: c },
                    C.a.createElement(xl.a, {
                      backLocation: l && '/'.concat(l, '/communities'),
                      composeOptions: this._getTweetButtonLocationState(),
                      documentTitle: i ? Bl({ communityName: i }) : '',
                      history: a,
                      primaryContent: this._renderPrimaryContent(),
                      rightControl: o,
                      sidebarContent: C.a.createElement(Ke.a, { communityId: n, withCommunityRules: r }),
                      title: i || null,
                      withTweetButton: this._isAllowedToTweet,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      k()(Dl, 'contextType', A.a)
      var Hl = H.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        Ul = Ua(Dl)
      t.default = Ul
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('ddV6'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
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
            r = e.onChange,
            s = i.a.useState(void 0),
            u = l()(s, 2),
            g = u[0],
            f = u[1],
            b = i.a.useState(!1),
            h = l()(b, 2),
            v = h[0],
            _ = h[1],
            k = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            E = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.g)(t, 3, k)
                n && f(p({ minCharacterCount: 3, maxCharacterCount: k })), _(n), r(t, n)
              },
              [k, f, r],
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
            onChange: E,
            spellCheck: 'false',
            validLength: k,
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
        l = n.n(a),
        r = (n('KqXw'), n('MvUL'), n('ERkP')),
        i = n.n(r),
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
        k = n('4zmP'),
        E = n('t62R'),
        C = n('rHpw'),
        S = f.a.i6e7e298,
        F = f.a.a226497c,
        I = f.a.c9d56b71,
        w = f.a.fc2a5c92,
        T = f.a.c1ad5a11,
        K = { viewType: 'community' },
        M = i.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            r = i.a.useState(!0),
            u = l()(r, 2),
            m = u[0],
            d = u[1],
            y = i.a.useState(!1),
            g = l()(y, 2),
            f = g[0],
            C = g[1],
            M = m || f,
            x = i.a.useState(''),
            R = l()(x, 2),
            O = R[0],
            A = R[1],
            j = i.a.useState(''),
            N = l()(j, 2),
            P = N[0],
            B = N[1],
            D = i.a.useState(null),
            H = l()(D, 2),
            U = H[0],
            V = H[1],
            z = i.a.useCallback(function (e, t) {
              A(e), d(t)
            }, []),
            q = i.a.useCallback(function (e, t) {
              B(e), 0 === e.length ? C(!1) : C(t)
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
                  { style: L.error },
                  i.a.createElement(k.a, { Icon: b.a, headline: w, text: T, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            o.a,
            { behavioralEventContext: K },
            i.a.createElement(
              p.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: L.root,
                history: a,
                rightControl: Q,
                title: F,
              },
              i.a.createElement(
                i.a.Fragment,
                null,
                X,
                i.a.createElement(E.b, { color: 'gray700', style: L.text }, I),
                i.a.createElement(c.a, { autoFocus: !0, communityName: O, onChange: z }),
                i.a.createElement(s.a, { communityPurpose: P, onChange: q }),
              ),
            ),
          )
        }),
        L = C.a.create(function (e) {
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
    ZYKh: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
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
                args: (l = [
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
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
                                                          r,
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
    'a/V2': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityDescriptionContainerQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionContainer_community' }],
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
            name: 'CommunityDescriptionContainerQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
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
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                  r,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'IcU6hB6weFIQgg-cNrX1tw',
            metadata: {},
            name: 'CommunityDescriptionContainerQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '4eb6bb323cb9d6961883ce5100bc85d6'), (t.default = o)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        r = n('m3Bd'),
        i = n.n(r),
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
        k = f(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            o = (e.tweetId, i()(e, _)),
            u = c.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == r ? void 0 : r.community_id_str
          c.a.useEffect(
            function () {
              y && Object(b.a)(t) && a(y).catch(n())
            },
            [t, y, n, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            g = r && Object(v.f)(r, d, t),
            f = g && Object(v.e)(g),
            k = m.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            h.a,
            l()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: p,
              socialContextProps: f,
              tweet: r,
              withReactions: k,
            }),
          )
        })
      t.a = k
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        l = n('23An'),
        r = n('Ud88'),
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
          i = r()
        c()
        var s = l(),
          p = d(new Set([n])),
          b = y(function () {
            return n
          }),
          h = b[0],
          v = b[1],
          _ = y(function () {
            return n
          }),
          k = _[0],
          E = _[1]
        n !== k && (p.current.add(n), E(n), v(n))
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
                var l,
                  r = o(null !== (l = null == n ? void 0 : n.__environment) && void 0 !== l ? l : i, e, t, a)
                p.current.add(r), v(r)
              }
            },
            [i, e, v, s],
          ),
          F = d(!1)
        return (
          m(function () {
            return function () {
              F.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === F.current)
                return (
                  (F.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    S(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = p.current
              if (s.current) {
                var n,
                  l = (0, a.default)(t)
                try {
                  for (l.s(); !(n = l.n()).done; ) {
                    var r = n.value
                    if (r === h) break
                    t.delete(r),
                      'NullQueryReference' !== r.kind &&
                        (f(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  l.e(i)
                } finally {
                  l.f()
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
                    var l = t.value
                    'NullQueryReference' !== l.kind &&
                      (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (r) {
                  n.e(r)
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
        l,
        r,
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
                args: (l = [
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
                    args: [(r = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [r, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
        l = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
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
        k = n('OUEC'),
        E = n('3XMw'),
        C = n.n(E),
        S = n('oQhu'),
        F = n('yoO3'),
        I = n('fTQJ'),
        w = n('VS6U'),
        T = C.a.cb6adb1f,
        K = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var t = e._getModule()
                return f.a.createElement(I.a, { entryConfiguration: k.a, module: t, refreshControl: null, title: T })
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
                    F.a,
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
        l = {
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
      ;(l.hash = '66a8dff93611f1369bc53655a9aacb32'), (t.default = l)
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
        l = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
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
        k = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        E = Object(h.a)()
          .propsFromState(function () {
            return { media: _, mediaId: k }
          })
          .propsFromActions(function () {
            return { processMedia: v.f, updateMediaUpload: v.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = n('jHSc'),
        S = n('3XMw'),
        F = n.n(S),
        I = n('EeFI'),
        w = 'applyButton',
        T = n('/yvb'),
        K = n('rHpw'),
        M = F.a.gd80afba,
        L = F.a.a753a87f,
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
                return l.a.createElement(
                  T.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: w, type: 'primaryFilled' },
                  L,
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
                    l = n.analytics,
                    r = n.media,
                    i = n.mediaId,
                    o = n.onDone,
                    c = n.processMedia,
                    s = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (r || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(b.a)(i) &&
                    (e
                      ? (e(u), o())
                      : (s({ id: i, cropData: d ? void 0 : u }),
                        c(i).then(function () {
                          a.setState({ isProcessing: !1 }), l.scribe({ action: 'done' }), o()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = l.a.createRef()),
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
                    r = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    o = this._getMedia()
                  return l.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: R.root,
                      documentTitle: a || M,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || M,
                    },
                    l.a.createElement(I.a, {
                      defaultAspectRatio: t,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: r,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(l.a.Component),
        R = K.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(x),
        A = n('X8FW'),
        j = K.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return l.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: j.modal },
          l.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
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
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  r,
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
                                                      r,
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
        l = n.n(a),
        r = n('v6aA'),
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
        f = l.a.memo(function (e) {
          var t,
            n = e.community,
            a = l.a.useContext(r.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !n || n.role !== i.a.Admin || a
            ? null
            : l.a.createElement(
                u.a,
                { style: b.info },
                l.a.createElement(m.a, {
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
        l = n.n(a),
        r = n('wtru')
      function i(e) {
        var t = Object(r.b)()
        return [
          !!t && !t.flags[e],
          l.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    jC8Z: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o,
        c = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'AboutQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { args: null, kind: 'FragmentSpread', name: 'CommunityInfo_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' },
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
            name: 'AboutQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }),
                  { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'User',
                    kind: 'LinkedField',
                    name: 'creator',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiUser',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
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
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    filters: null,
                    handle: 'user',
                    key: '',
                    kind: 'LinkedHandle',
                    name: 'creator',
                  },
                  (o = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      o,
                      r,
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      i,
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
            id: 'LdiLEX5w3cmnAFb-abSitA',
            metadata: {},
            name: 'AboutQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(c.hash = '765e8a2b911d9e61edc36a015f192e8c'), (t.default = c)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        r = n('m3Bd'),
        i = n.n(r),
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
          r = e.label,
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
            l()({}, o, { interactiveStyles: f, style: g.root }),
            c.a.createElement(s.b, { align: n, color: a }, r),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return r
        })
      var a = n('0vv5'),
        l = 500,
        r = {
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
        return _e
      })
      var a,
        l,
        r,
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
        k = n.n(_),
        E = n('ddV6'),
        C = n.n(E),
        S = (n('yH/f'), n('ho0z'), n('1YZw')),
        F = n('uDfI'),
        I = n('yrzJ'),
        w = n('mjJ+'),
        T = n('IMA+'),
        K = n('IG7M'),
        M = n('eb3s'),
        L = n('jAXQ'),
        x = n.n(L),
        R = n('9SqB'),
        O = n.n(R),
        A = n('Bg9b'),
        j = n('boUI'),
        N = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        P = g.a.hd8c22d2,
        B = g.a.c3153100,
        D = g.a.g30bc699,
        H = g.a.e585d844,
        U = g.a.cab7c6f8,
        V = g.a.af40a8ef,
        z = g.a.e96d5254,
        q = g.a.f348a395,
        W = g.a.c3a1aebd,
        Q = g.a.c273c8a6,
        X = g.a.e68b09b4,
        J = g.a.c0eb2a52,
        G = g.a.a5808125,
        Y = { Admin: B, Moderator: P },
        Z = {
          confirmButtonLabel: V,
          headline: U,
          text: function (e) {
            return c.a.createElement(
              g.a.I18NFormatMessage,
              { $i18n: 'd46c6e8f' },
              c.a.createElement(I.a, { screenName: e }),
            )
          },
        },
        $ = {
          confirmButtonLabel: X,
          headline: Q,
          text: function (e) {
            return c.a.createElement(
              g.a.I18NFormatMessage,
              { $i18n: 'c3a1f2be' },
              c.a.createElement(I.a, { screenName: e }),
            )
          },
        },
        ee = void 0 !== a ? a : (a = n('rPb+')),
        te = function (e) {
          var t = c.a.useContext(s.a),
            a = t.featureSwitches,
            r = t.loggedInUserId,
            i = a.isTrue('c9s_edit_moderators_enabled'),
            o = e.communityId,
            u = e.userResult,
            m = c.a.useState(null),
            y = C()(m, 2),
            p = y[0],
            g = y[1],
            f = Object(F.c)(),
            b = x()(void 0 !== l ? l : (l = n('tgdH')), u).result,
            h = O()(ee),
            _ = C()(h, 2),
            E = _[0],
            I = _[1],
            L = c.a.useCallback(
              function (e) {
                var t = e.communityId,
                  n = e.errorMessage,
                  a = e.recordId,
                  l = e.role,
                  r = e.successMessage,
                  i = e.userId
                E({
                  variables: { communityId: t, userId: i, role: l },
                  updater: function (e) {
                    var n = e.get(a)
                    null == n || n.setValue(l, 'community_role(community_id:"'.concat(t, '")'))
                  },
                  onCompleted: function () {
                    f(Object(S.b)({ text: r }))
                  },
                  onError: function () {
                    f(Object(S.b)({ text: n }))
                  },
                })
              },
              [E, f],
            ),
            R = c.a.useCallback(
              function (e) {
                var t,
                  n,
                  a,
                  l,
                  r = e.communityId,
                  i = e.recordId,
                  o = e.roleAction,
                  c = e.screenName,
                  s = e.userId
                switch (o) {
                  case N.PromoteModerator:
                    ;(t = Z), (a = d.a.Moderator), (l = z({ screenName: c })), (n = q({ screenName: c }))
                    break
                  case N.DemoteModerator:
                    ;(t = $), (a = d.a.Member), (l = J({ screenName: c })), (n = G({ screenName: c }))
                    break
                  default:
                    return
                }
                g(
                  k()(
                    k()({}, t),
                    {},
                    {
                      text: t.text(c),
                      onConfirm: function () {
                        L({ communityId: r, errorMessage: n, recordId: i, role: a, successMessage: l, userId: s }),
                          g(null)
                      },
                      onCancel: function () {
                        g(null)
                      },
                    },
                  ),
                )
              },
              [L],
            ),
            P = c.a.useCallback(
              function (e) {
                if (!b || 'User' !== b.__typename || !b.legacy) return null
                var t = b.community_role,
                  n = b.id,
                  a = b.legacy,
                  l = a.id_str,
                  r = a.screen_name
                if (!r) return null
                var s = []
                if (i)
                  switch (t) {
                    case d.a.Moderator:
                      s.push({
                        behavioralEventContext: { viewType: 'remove_moderator' },
                        disabled: I,
                        text: W,
                        Icon: A.a,
                        onClick: function () {
                          return R({
                            communityId: o,
                            recordId: n,
                            roleAction: N.DemoteModerator,
                            screenName: r,
                            userId: l,
                          })
                        },
                      })
                      break
                    case d.a.Member:
                      s.push({
                        behavioralEventContext: { viewType: 'add_moderator' },
                        disabled: I,
                        text: H,
                        Icon: A.a,
                        onClick: function () {
                          return R({
                            communityId: o,
                            recordId: n,
                            roleAction: N.PromoteModerator,
                            screenName: r,
                            userId: l,
                          })
                        },
                      })
                  }
                return (
                  s.push({
                    behavioralEventContext: { viewType: 'view_profile' },
                    text: D({ screenName: r }),
                    Icon: j.a,
                    link: '/'.concat(r),
                  }),
                  c.a.createElement(w.a, { items: s, onCloseRequested: e, shouldCloseOnClick: !0 })
                )
              },
              [o, R, i, I, b],
            )
          if (!b || 'User' !== b.__typename || !b.legacy) return null
          var B = b.community_role,
            U = b.legacy,
            V = U.id_str,
            Q = U.name,
            X = void 0 === Q ? '' : Q,
            te = U.profile_image_url_https,
            ne = U.protected,
            ae = U.screen_name,
            le = U.verified
          if (!ae || !te || !X) return null
          var re = Y[B]
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(T.a, {
              avatarUri: te,
              decoration: V !== r ? c.a.createElement(K.a, { renderActionMenu: P }) : void 0,
              displayMode: 'UserCompact',
              displayNameLabel: re,
              isProtected: ne,
              isVerified: le,
              name: X,
              screenName: ae,
              userId: V,
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
        ne = n('DQzJ'),
        ae = { context: 'members' },
        le = void 0 !== r ? r : (r = n('cI4y')),
        re = function (e) {
          return e.__id
        },
        ie = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(ne.a)(le, { communityId: t }),
            l = a.data,
            r = a.fetchNext,
            i = l.community.members_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(t),
            identityFunction: re,
            items: i,
            noItemsRenderer: n,
            onNearEnd: r,
            renderer: function (e) {
              return c.a.createElement(te, { communityId: t, userResult: e })
            },
          })
        },
        oe = function (e) {
          return c.a.createElement(b.a, { errorConfig: ae }, c.a.createElement(ie, e))
        },
        ce = n('oQhu'),
        se = { context: 'members' },
        ue = void 0 !== i ? i : (i = n('w9f9')),
        me = function (e) {
          return e.__id
        },
        de = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(ne.a)(ue, { communityId: t }),
            l = a.data,
            r = a.fetchNext,
            i = l.community.moderators_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(t),
            identityFunction: me,
            items: i,
            noItemsRenderer: n,
            onNearEnd: r,
            renderer: function (e) {
              return c.a.createElement(te, { communityId: t, userResult: e })
            },
          })
        },
        ye = function (e) {
          return c.a.createElement(b.a, { errorConfig: se }, c.a.createElement(de, e))
        },
        pe = n('fTQJ'),
        ge = g.a.cdd87523,
        fe = g.a.cca5191f,
        be = g.a.e442bbb4,
        he = g.a.e9488b0d,
        ve = g.a.j43fea20,
        _e = { Moderators: 'Moderators', Members: 'Members' },
        ke = Object(ce.a)(function (e) {
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
        Ee = Object(ce.a)(function (e) {
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
        Ce = function () {
          return c.a.createElement(y.a, { header: ge, message: fe })
        }
      t.b = function (e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          n = e.communityId,
          a = e.mode,
          l = e.userRole,
          r = a === _e.Moderators
        if (t && l === d.a.Admin)
          return r
            ? c.a.createElement(ye, { communityId: n, renderEmptyState: Ce })
            : c.a.createElement(oe, { communityId: n, renderEmptyState: Ce })
        var i = r ? Ee(n) : ke(n),
          o = r ? he : ve
        return c.a.createElement(pe.a, { loadingAccessibilityLabel: o, module: i, renderEmptyState: Ce, title: be })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return me
        })
      n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
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
              updateModeratorRole: c.c.updateRole,
              fetchCommunityModerationData: m.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        b = n('kGix'),
        h = n('3XMw'),
        v = n.n(h),
        _ = n('KQzH'),
        k = n('yoO3'),
        E = n('mWs5'),
        C = n('MWbm'),
        S = n('rHpw'),
        F = n('Znyr'),
        I = n('6vad'),
        w = n('csss'),
        T = n('OOKO'),
        K = n('zIWA'),
        M = n('yiKp'),
        L = n.n(M),
        x = n('Lsrn'),
        R = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(R.a)(
            'svg',
            L()(
              L()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [x.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
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
        B = n('PU7B'),
        D = v.a.dce5e1b3,
        H = v.a.c5d8c93d,
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
        ae = { label: v.a.c6ea29a1, header: v.a.a6e13fac, text: v.a.e538848b, confirmButtonLabel: v.a.j49e6aa2 },
        le = S.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        re = l.a.createElement(K.a, { style: le.thumbnail }),
        ie = l.a.createElement(A, { style: le.thumbnail }),
        oe = l.a.createElement(j.a, { style: le.thumbnail }),
        ce = l.a.createElement(N.a, { style: le.thumbnail }),
        se = l.a.createElement(P.a, { style: le.thumbnail }),
        ue = l.a.createElement(B.a, { style: le.thumbnail }),
        me = function (e) {
          var t = l.a.useContext(r.a),
            n = t.featureSwitches,
            a = t.loggedInUserId,
            c = e.canReviewMemberRequests,
            s = e.community,
            u = e.communityId,
            m = e.count,
            d = e.createLocalApiErrorHandler,
            y = e.fetchCommunityModerationData,
            p = e.history,
            g = e.joinRequestCount,
            f = e.match,
            h = e.moderationFetchStatus,
            v = e.updateModeratorRole,
            S = d(),
            K = n.isTrue('c9s_moderation_enabled'),
            M = n.isTrue('c9s_rule_management_enabled'),
            L = n.isTrue('c9s_request_to_join_enabled'),
            x = n.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              h === b.a.NONE && K && y(u).catch(S)
            },
            [S, u, y, h, K],
          )
          var R = l.a.useCallback(
              function () {
                return K && m > 0
                  ? l.a.createElement(F.a, {
                      count: m,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: J,
                      withBorder: !1,
                    })
                  : null
              },
              [m, K],
            ),
            O = l.a.useCallback(
              function () {
                return L && g > 0
                  ? l.a.createElement(F.a, {
                      count: g,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: J,
                      withBorder: !1,
                    })
                  : null
              },
              [g, L],
            ),
            A = s.role,
            j = A === i.a.Admin ? D : H,
            N = A === i.a.Admin ? Z : $,
            P = !f.isExact
          return l.a.createElement(
            k.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              E.a,
              { communityId: u, screenType: 'secondaryRoot', title: j, withDetailOpen: P },
              l.a.createElement(
                C.a,
                null,
                K
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(I.b, { text: U }),
                      l.a.createElement(_.a, {
                        label: V,
                        link: '/i/communities/'.concat(u, '/moderation/reported_tweets'),
                        renderRightContent: R,
                        thumbnail: re,
                      }),
                    )
                  : null,
                L && c
                  ? l.a.createElement(_.a, {
                      label: Y,
                      link: '/i/communities/'.concat(u, '/moderation/member_requests'),
                      renderRightContent: O,
                      thumbnail: ie,
                    })
                  : null,
                l.a.createElement(I.b, { text: z }),
                l.a.createElement(_.a, {
                  description: G({ memberCount: s.member_count }),
                  label: q,
                  link: '/i/communities/'.concat(u, '/tools/members'),
                  thumbnail: se,
                }),
                M
                  ? l.a.createElement(_.a, {
                      description: N,
                      label: W,
                      link: '/i/communities/'.concat(u, '/tools/rules'),
                      thumbnail: ue,
                    })
                  : null,
                A === i.a.Admin
                  ? l.a.createElement(_.a, {
                      description: ee,
                      label: Q,
                      link: '/i/communities/'.concat(u, '/tools/settings'),
                      thumbnail: oe,
                    })
                  : null,
                l.a.createElement(w.a, {
                  description: ne,
                  label: te,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: ce,
                }),
                A === i.a.Moderator && x
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(T.a, { spacing: 'space1' }),
                      l.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: ae.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: ae.header,
                        confirmationSheetText: ae.text,
                        label: ae.label,
                        onConfirmationSheetConfirm: function () {
                          a &&
                            v(u, { userId: a, role: i.a.Member }).then(function () {
                              p.push('i/communities/'.concat(u))
                            })
                        },
                        withBottomBorder: !1,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        de = f(me)
      t.default = de
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
          return qt
        })
      var a,
        l,
        r,
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
        k = n('0KEI'),
        E = Object(_.a)()
          .propsFromState(function () {
            return { community: h.a, fetchStatus: h.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: v.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        C = n('G1WX'),
        S = (n('ho0z'), n('es0u')),
        F = n('3XMw'),
        I = n.n(F),
        w = n('VTxf'),
        T = n('yoO3'),
        K = n('Fr3L'),
        M = n('FIs5'),
        L = n('TEoO'),
        x = (n('1t7P'), n('jQ/y'), n('ddV6')),
        R = n.n(x),
        O = n('1YZw'),
        A = n('uDfI'),
        j = n('MWbm'),
        N = n('/yvb'),
        P = n('rHpw'),
        B = (n('enFi'), n('jAXQ')),
        D = n.n(B),
        H = (n('7x/C'), n('JtPf'), n('849X'), n('TJCb'), n('9SqB')),
        U = n.n(H),
        V = void 0 !== a ? a : (a = n('Dm5+')),
        z = void 0 !== l ? l : (l = n('C2fM')),
        q = I.a.i22835dd,
        W = I.a.cb59a0fd,
        Q = I.a.ic7db4ea,
        X = void 0 !== r ? r : (r = n('PMbW')),
        J = function (e) {
          var t = e.communityId,
            n = e.communityJoinRequestActions,
            a = e.userId,
            l = D()(X, n),
            r = l.join_request_approve_action_result,
            i = l.join_request_deny_action_result,
            o = (function () {
              var e = U()(V),
                t = R()(e, 2),
                n = t[0],
                a = t[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: l },
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
            c = R()(o, 2),
            s = c[0],
            u = c[1],
            m = (function () {
              var e = U()(z),
                t = R()(e, 2),
                n = t[0],
                a = t[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: l },
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
            d = R()(m, 2),
            y = d[0],
            g = d[1],
            f = Object(A.c)(),
            b = u || g,
            h = 'CommunityJoinRequestDenyAction' === (null == i ? void 0 : i.__typename),
            v = 'CommunityJoinRequestApproveAction' === (null == r ? void 0 : r.__typename),
            _ = p.a.useCallback(
              function () {
                y({ communityId: t, userId: a }).catch(function () {
                  f(Object(O.b)({ text: Q }))
                })
              },
              [f, y, t, a],
            ),
            k = p.a.useCallback(
              function () {
                s({ communityId: t, userId: a }).catch(function () {
                  f(Object(O.b)({ text: Q }))
                })
              },
              [f, s, t, a],
            )
          return p.a.createElement(
            j.a,
            { style: G.buttons },
            p.a.createElement(N.a, { disabled: !h || b, onPress: _, style: G.button, type: 'destructiveOutlined' }, W),
            p.a.createElement(N.a, { disabled: !v || b, onPress: k, style: G.button, type: 'primaryOutlined' }, q),
          )
        },
        G = P.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        Y = n('tocL'),
        Z = n('h0NW'),
        $ = n('t62R'),
        ee = n('0yYu'),
        te = n('IMA+'),
        ne = n('GBcw'),
        ae = n('6Rrp'),
        le = n('5oT/'),
        re = void 0 !== i ? i : (i = n('8vG3')),
        ie = I.a.b9bd56d4,
        oe = I.a.a340df66,
        ce = function (e) {
          var t = e.icon,
            n = e.label
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(Z.a, {
              containerStyle: ye.container,
              items: [{ label: p.a.createElement($.b, null, n), decoration: t }],
            }),
            p.a.createElement(ee.a, null),
          )
        },
        se = { blocking: I.a.g8907fde, muting: I.a.f69c2298 },
        ue = {
          mutual: { contextType: Y.a.FollowMutual, text: I.a.ae2205d1 },
          following: { contextType: Y.a.FollowFollowing, text: I.a.d960b55b },
          followedBy: { contextType: Y.a.FollowFollowed, text: I.a.b7f1e58a },
        },
        me = {},
        de = function (e) {
          var t = e.communityJoinRequest,
            n = D()(re, t),
            a = n.user_relationship.community.id_str,
            l = n.user_relationship.user_results.result,
            r = n.state
          if (!l || 'User' !== l.__typename || !l.legacy) return null
          var i = l.id_str,
            o = l.legacy,
            c = o.blocking,
            s = o.description,
            u = o.followed_by,
            m = o.following,
            d = o.muting,
            y = o.name,
            g = o.profile_image_url_https,
            f = o.screen_name
          if (!g || !f || !y) return null
          switch (r) {
            case 'Approved':
              return p.a.createElement(ce, { icon: pe, label: ie({ screenName: f }) })
            case 'Denied':
              return p.a.createElement(ce, { icon: ge, label: oe({ screenName: f }) })
            case 'Invalid':
              return null
          }
          var b = n.created_at,
            h = (function (e) {
              var t = e.following,
                n = e.isFollowedBy
              return t && n ? ue.mutual : t ? ue.following : n ? ue.followedBy : void 0
            })({ isFollowedBy: u, following: m }),
            v = (function (e) {
              var t = e.blocking,
                n = e.muting
              return t ? se.blocking : n ? se.muting : void 0
            })({ blocking: c, muting: d }),
            _ = p.a.createElement(
              j.a,
              null,
              v && p.a.createElement($.b, { color: 'red500', style: ye.bottomText }, v),
              p.a.createElement(J, { communityId: a, communityJoinRequestActions: n.actions, userId: i }),
            )
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(te.a, {
              avatarUri: g,
              bottomControl: _,
              description: s || void 0,
              displayMode: 'UserDetailed',
              entities: me,
              name: y,
              screenName: f,
              screenNameSuffix: p.a.createElement(ne.a, { color: 'gray700', timestamp: b }),
              socialContext: h,
              userId: i,
            }),
            p.a.createElement(ee.a, null),
          )
        },
        ye = P.a.create(function (e) {
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
        pe = p.a.createElement(ae.a, { style: ye.icon }),
        ge = p.a.createElement(le.a, { style: ye.icon }),
        fe = I.a.addbb11e,
        be = I.a.c38131de,
        he = void 0 !== o ? o : (o = n('Jt8P')),
        ve = function (e) {
          return e.id
        },
        _e = function (e) {
          return p.a.createElement(de, { communityJoinRequest: e })
        },
        ke = function () {
          return p.a.createElement(M.a, { header: fe, message: be })
        },
        Ee = function (e) {
          var t = e.communityJoinRequests,
            n = e.fetchNext,
            a = D()(he, t).items
          return p.a.createElement(L.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: ve,
            items: a,
            noItemsRenderer: ke,
            onNearEnd: n,
            renderer: _e,
          })
        },
        Ce = n('VS6U'),
        Se = n('zCf4'),
        Fe = n('DQzJ'),
        Ie = I.a.gfccba44,
        we = 'member_requests',
        Te = { context: we },
        Ke = void 0 !== c ? c : (c = n('gAl+')),
        Me = function (e) {
          var t = Object(Se.f)(),
            n = e.communityId,
            a = Object(Fe.a)(Ke, { communityId: n }),
            l = a.data,
            r = a.fetchNext,
            i = l.community,
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
              m = p.a.createElement(Ee, { communityJoinRequests: s, fetchNext: r })
            return p.a.createElement(
              T.a,
              { behavioralEventViewType: we },
              p.a.createElement(Ce.a, {
                backLocation: '/i/communities/'.concat(n, '/tools'),
                history: t,
                primaryContent: m,
                sidebarContent: u,
                subtitle: c,
                title: Ie,
              }),
            )
          }
          return p.a.createElement(w.a, null)
        },
        Le = function (e) {
          var t = e.communityId
          return p.a.createElement(K.a, { errorConfig: Te }, p.a.createElement(Me, { communityId: t }))
        },
        xe = n('/de5'),
        Re = n('yiKp'),
        Oe = n.n(Re),
        Ae = (n('2G9S'), n('uFXj'), n('z84I'), n('3zvM')),
        je = n('lMB6'),
        Ne = Object(Ae.f)({ namespace: 'communityReports' }),
        Pe = je.a.register(Ne),
        Be = n('G6rE'),
        De = function (e, t) {
          var n,
            a = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (a ? Pe.selectMany(e, a) : []).map(function (t) {
            var n = t.user
            return Oe()(Oe()({}, t), {}, { reporter: Be.e.select(e, n) })
          })
        },
        He = Object(_.a)().propsFromState(function () {
          return { reports: De }
        }),
        Ue = n('855f'),
        Ve = n('cHvH'),
        ze = n('5mJL'),
        qe = n('efqG'),
        We = n('21zW'),
        Qe = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return p.a.createElement(
              I.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              p.a.createElement($.b, { color: 'primary' }, I.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: Ue.a.getFormattedCount(e) })
        },
        Xe = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            a = t.created_at,
            l = t.reporter,
            r = p.a.createElement(ne.a, { timestamp: a })
          return l
            ? p.a.createElement(Ve.a, null, function (e) {
                var a = e.windowWidth
                return p.a.createElement(
                  j.a,
                  { style: n ? Ge.bottomBorder : null },
                  p.a.createElement(te.a, {
                    avatarUri: l.profile_image_url_https,
                    decoration: r,
                    displayMode: 'UserCompact',
                    isProtected: l.protected,
                    isVerified: l.verified,
                    name: l.name,
                    screenName: l.screen_name,
                    style: a > P.a.theme.breakpoints.small ? Ge.userCell : void 0,
                    userId: l.id_str,
                  }),
                  p.a.createElement(
                    ze.a,
                    { avatarCell: null },
                    p.a.createElement($.b, { color: 'gray700', size: 'subtext2', style: Ge.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        Je = He(function (e) {
          var t = p.a.useState(!1),
            n = R()(t, 2),
            a = n[0],
            l = n[1],
            r = e.reports,
            i = e.tweetCase,
            o = i.report_count,
            c = i.report_created_at_max
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(
              qe.a,
              {
                contentStyle: Ge.popover,
                onDismiss: function () {
                  l(!1)
                },
                renderContent: function () {
                  return p.a.createElement(
                    j.a,
                    { style: Ge.contentContainer },
                    r.map(function (e, t) {
                      return p.a.createElement(Xe, { key: e.id_str, report: e, withBottomBorder: t < r.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              p.a.createElement(
                $.b,
                {
                  onPress: function () {
                    l(!0)
                  },
                },
                Qe(o),
              ),
            ),
            p.a.createElement(We.a, null),
            p.a.createElement(ne.a, { timestamp: c }),
          )
        }),
        Ge = P.a.create(function (e) {
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
        Ye = n('9EWH'),
        Ze = Object(Ae.f)({ namespace: 'communityCases' }),
        $e = {
          keepTweet: Object(Ae.c)(Ze, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ye.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(Ae.c)(Ze, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ye.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        et = Oe()(Oe()({}, Ze), $e),
        tt = je.a.register(et),
        nt = n('XOJV'),
        at = function (e, t) {
          var n = t.tweetId
          return n ? nt.a.selectHydrated(e, n) : void 0
        },
        lt = function (e, t) {
          var n = t.tweetId
          return tt.select(e, n)
        },
        rt = Object(_.a)()
          .propsFromState(function () {
            return { tweet: at, tweetCase: lt }
          })
          .propsFromActions(function () {
            return { keep: tt.keepTweet, dismiss: tt.dismissTweet }
          }),
        it = n('b5s6'),
        ot = n('mjJ+'),
        ct = n('IG7M'),
        st = n('boUI'),
        ut = n('zIWA'),
        mt = n('fz3c'),
        dt = (n('yH/f'), n('n5fo')),
        yt = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        pt = I.a.ad10c66d,
        gt = I.a.c6caed9c,
        ft = function (e) {
          return p.a.createElement($.b, null, e)
        },
        bt = function (e) {
          var t = e.screenName
          switch (e.type) {
            case yt.Hidden:
              var n = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                a = [{ label: ft(n), decoration: vt }]
              return p.a.createElement(Z.a, { accessibilityLabel: pt, containerStyle: ht.container, items: a })
            case yt.Kept:
              var l = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                r = [{ label: ft(l), decoration: _t }]
              return p.a.createElement(Z.a, { accessibilityLabel: gt, containerStyle: ht.container, items: r })
            default:
              return null
          }
        },
        ht = P.a.create(function (e) {
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
        vt = p.a.createElement(dt.a, { style: ht.icon }),
        _t = p.a.createElement(ae.a, { style: ht.icon }),
        kt = { page: 'reported_tweets', component: 'tweet' },
        Et = { viewType: 'tweet_moderation_case' },
        Ct = I.a.f1d9930c,
        St = I.a.a219e217,
        Ft = I.a.fa524057,
        It = I.a.g30bc699,
        wt = I.a.f0306107,
        Tt = I.a.b99364a5,
        Kt = rt(function (e) {
          var t,
            n = p.a.useContext(g.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            l = e.keep,
            r = e.tweet,
            i = e.tweetCase,
            o = e.tweetId,
            c = null == r || null === (t = r.user) || void 0 === t ? void 0 : t.screen_name,
            s = p.a.useCallback(
              function (e) {
                if (r && c) {
                  var t = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: It({ screenName: c }),
                      Icon: st.a,
                      link: '/'.concat(c),
                    },
                    {
                      text: wt,
                      Icon: ut.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(mt.a.Tweet, '/').concat(r.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: kt },
                      },
                      onClick: function () {
                        e()
                      },
                    },
                  ]
                  return (
                    n &&
                      t.push({
                        text: Tt({ screenName: c }),
                        Icon: le.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(mt.a.RemoveCommunityMember, '/').concat(r.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: kt },
                        },
                        onClick: function () {
                          e()
                        },
                      }),
                    p.a.createElement(ot.a, { items: t, onCloseRequested: e })
                  )
                }
                return null
              },
              [r, c, n],
            ),
            u = function () {
              l(o)
            },
            m = function () {
              a(o)
            }
          if (c && (null == r ? void 0 : r.reportingVisibility) === mt.b.HiddenCommunityTweet)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(bt, { screenName: c, type: yt.Hidden }),
              p.a.createElement(ee.a, null),
            )
          if (
            (null != i && i.isDismissed) ||
            'community_tweet_member_removed' === (null == r ? void 0 : r.limited_actions)
          )
            return null
          if (c && null != i && i.isKept)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(bt, { screenName: c, type: yt.Kept }),
              p.a.createElement(ee.a, null),
            )
          if (!i) return null
          return p.a.createElement(
            f.a,
            { behavioralEventContext: Et },
            p.a.createElement(
              j.a,
              { style: Mt.container },
              p.a.createElement(
                j.a,
                { style: Mt.reportsBar },
                p.a.createElement(Je, { tweetCase: i }),
                p.a.createElement(ct.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: s,
                  style: Mt.menu,
                }),
              ),
              p.a.createElement(it.a, { tweetId: o }),
              r
                ? p.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= P.a.theme.breakpoints.small
                    return p.a.createElement(
                      j.a,
                      { style: [Mt.buttons, t && Mt.buttonsMobile] },
                      p.a.createElement(
                        N.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(mt.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Oe()(Oe()({}, kt), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Mt.button, t && Mt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Ct,
                      ),
                      p.a.createElement(
                        N.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [Mt.button, t && Mt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Ft,
                      ),
                    )
                  })
                : p.a.createElement(
                    j.a,
                    { style: Mt.buttons },
                    p.a.createElement(
                      N.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: m,
                        style: Mt.button,
                        type: 'primaryOutlined',
                      },
                      St,
                    ),
                  ),
            ),
            p.a.createElement(ee.a, null),
          )
        }),
        Mt = P.a.create(function (e) {
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
        Lt = n('hqKg'),
        xt = n('wAC9'),
        Rt = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        Ot = function () {
          return Object(Lt.createSelector)(Rt, function (e) {
            return e
              ? (function (e) {
                  return Object(xt.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return Oe()(Oe()({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        At = Object(_.a)()
          .propsFromState(function () {
            return { sliceModule: Ot() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        jt = n('FS1z'),
        Nt = I.a.c045c7b6,
        Pt = I.a.dffb0774,
        Bt = I.a.cbb2a93c,
        Dt = At(function (e) {
          var t = p.a.useContext(g.a).featureSwitches,
            n = e.community,
            a = e.history,
            l = e.sliceModule,
            r = n.id_str,
            i = n.name,
            o = (n || []).rules,
            c = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            s = t.isTrue('responsive_web_communities_slices_enabled'),
            u = l
              ? p.a.createElement(jt.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return p.a.createElement(M.a, { header: Pt, message: Bt })
                  },
                  renderer: function (e) {
                    return p.a.createElement(Kt, { tweetId: e })
                  },
                })
              : null
          return p.a.createElement(
            T.a,
            { behavioralEventViewType: 'reported_tweets' },
            p.a.createElement(Ce.a, {
              backLocation: '/i/communities/'.concat(r),
              history: a,
              primaryContent: s ? u : null,
              sidebarContent: p.a.createElement(S.a, {
                communityId: r,
                rulesLimit: null == o ? void 0 : o.length,
                withCommunityRules: c,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: i,
              title: Nt,
            }),
          )
        }),
        Ht = ['analytics', 'community'],
        Ut = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        Vt = { viewType: 'community' }
      function zt(e) {
        var t = p.a.useContext(g.a).featureSwitches,
          n = (e.analytics, e.community),
          a = d()(e, Ht),
          l = a.match.path,
          r = t.isTrue('c9s_request_to_join_enabled')
        return Object(b.c)(n.role)
          ? p.a.createElement(
              f.a,
              { behavioralEventContext: Vt },
              p.a.createElement(
                Se.d,
                null,
                p.a.createElement(
                  Se.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  p.a.createElement(Dt, u()({}, a, { community: n })),
                ),
                r
                  ? p.a.createElement(
                      Se.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      p.a.createElement(Le, { communityId: n.id_str }),
                    )
                  : null,
                p.a.createElement(Se.b, null, p.a.createElement(xe.b, a)),
              ),
            )
          : p.a.createElement(xe.b, a)
      }
      function qt(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          r = d()(e, Ut),
          i = r.match.params.communityId,
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
            fetchStatus: l,
            onRequestRetry: c,
            render: function () {
              return t ? p.a.createElement(zt, u()({}, r, { community: t })) : null
            },
          })
        )
      }
      t.default = E(qt)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      n('KqXw'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('3XMw'),
        i = n.n(r),
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
          r = e.rightControl,
          i = e.screenType,
          y = e.secondaryBar,
          g = e.submitDisabled,
          b = e.subtitle,
          h = e.title,
          v = e.withBottomBorder,
          _ = e.withDetailOpen,
          k = Object(c.f)(),
          E = 'secondaryRoot' === i,
          C = '/i/communities/'.concat(n),
          S = ''.concat(C, '/tools'),
          F = E ? C : S,
          I = l.a.useCallback(
            function () {
              E ? k.replace(F) : k.goBack({ backLocation: F })
            },
            [F, k, E],
          )
        return l.a.createElement(
          o.a,
          {
            backLocation: F,
            onBackClick: I,
            rightControl: r,
            screenType: i,
            secondaryBar: y,
            showSubtitleOnWideDetail: !1,
            subtitle: b,
            title: h,
            withBottomBorder: v,
            withDetailOpen: _,
          },
          l.a.createElement(
            u.a,
            { style: f.contentRoot },
            l.a.createElement(s.a, { style: f.chilrenRoot }, t),
            a
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(m.a, null),
                  l.a.createElement(
                    u.a,
                    { style: f.buttonContainer },
                    l.a.createElement(d.a, { disabled: g, onPress: a, style: f.button, type: 'brandFilled' }, p),
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
        l = n.n(a),
        r = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(r),
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
        k = n('AfjF'),
        E = n('MWbm'),
        C = n('/yvb'),
        S = n('jtO7'),
        F = n('4zmP'),
        I = n('eb3s'),
        w = n('rHpw'),
        T = h.a.h99020ef,
        K = h.a.i2209530,
        M = h.a.a1c93d73,
        L = h.a.f74a5adb,
        x = h.a.fbb0ed91,
        R = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        j = h.a.c3a0d44e
      function N(e) {
        var t = i.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          r = e.createLocalApiErrorHandler,
          c = e.editRule,
          s = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          p = a.id_str,
          b = a.rules,
          h = i.a.useState(''),
          w = l()(h, 2),
          N = w[0],
          B = w[1],
          D = i.a.useState(''),
          H = l()(D, 2),
          U = H[0],
          V = H[1],
          z = i.a.useState(!1),
          q = l()(z, 2),
          W = q[0],
          Q = q[1],
          X = i.a.useState(''),
          J = l()(X, 2),
          G = J[0],
          Y = J[1],
          Z = i.a.useState(!1),
          $ = l()(Z, 2),
          ee = $[0],
          te = $[1],
          ne = i.a.useState(!1),
          ae = l()(ne, 2),
          le = ae[0],
          re = ae[1],
          ie = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              B(n), V(t), Q(a)
            },
            [B, V, Q],
          ),
          oe = i.a.useCallback(
            function () {
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
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
            [p, N, U, d, c, s, r],
          ),
          ce = i.a.useCallback(
            function () {
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
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
            [p, d, u, s, r],
          )
        if (!d || !m) return i.a.createElement(v.a, { to: '/i/communities/'.concat(p, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = i.a.createElement(
            C.a,
            {
              disabled: !W,
              onPress: function () {
                y ? re(!0) : oe()
              },
              size: 'small',
              type: 'brandFilled',
            },
            K,
          ),
          de = 1 === b.length,
          ye = t
            ? i.a.createElement(
                E.a,
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
          pe = de ? i.a.createElement(E.a, { style: P.callout }, i.a.createElement(F.a, { text: L })) : void 0,
          ge = ee
            ? i.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: R,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: ce,
                text: O,
              })
            : void 0,
          fe = le
            ? i.a.createElement(k.a, {
                onCancel: function () {
                  re(!1)
                },
                onConfirm: function () {
                  n(), oe(), re(!1)
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
        l = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
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
        k = n('UIzd'),
        E = n.n(k),
        C = n('kGix')
      n.d(t, 'a', function () {
        return C.a
      })
      var S = n('fs1G'),
        F = n('0KEI'),
        I = n('lU4h'),
        w = n.n(I),
        T = n('21nk'),
        K = n.n(T),
        M = n('bCEw'),
        L = n.n(M),
        x = n('Ud88'),
        R = n.n(x),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (e = t.call.apply(t, [this].concat(l))), f()(u()(e), 'state', { error: null }), e
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
            l = K()(t, n)
          return a({ fetchStatus: C.a.LOADED, data: l, error: null, retry: S.a })
        },
        N = function (e, t) {
          if (_.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                r = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                o = n.variables,
                c = L()(e),
                s = l()(c, 2),
                u = s[0],
                m = s[1],
                d = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                y = w()(o),
                p = l()(y, 1)[0],
                g = h.a.useCallback(
                  function () {
                    m(p, { fetchPolicy: 'network-only' })
                  },
                  [m, p],
                )
              return (
                h.a.useLayoutEffect(
                  function () {
                    m(p, { fetchPolicy: r })
                  },
                  [r, m, p],
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
            var r = a.render,
              i = a.variables,
              o = R()(),
              c = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = w()(i),
              u = l()(s, 1)[0],
              m = n.get(o)
            if (m) return m
            var d = h.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return r({ fetchStatus: C.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (c(t.errorConfig.options || {})(e),
                        r({ fetchStatus: C.a.FAILED, data: null, error: e, retry: S.a }))
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
        l = n.n(a),
        r = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(r),
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
        k = n('eb3s'),
        E = b.a.j560c8ea,
        C = b.a.i2209530,
        S = b.a.gaa3239a,
        F = b.a.a67445d5,
        I = b.a.fcbe0992,
        w = b.a.j24c37b2
      function T(e) {
        var t = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          r = e.createLocalApiErrorHandler,
          c = e.createRule,
          s = e.history,
          u = e.shouldShowRuleInformEducation,
          m = a.id_str,
          d = a.rules,
          y = i.a.useState(''),
          f = l()(y, 2),
          b = f[0],
          T = f[1],
          K = i.a.useState(''),
          M = l()(K, 2),
          L = M[0],
          x = M[1],
          R = i.a.useState(!1),
          O = l()(R, 2),
          A = O[0],
          j = O[1],
          N = i.a.useState(!1),
          P = l()(N, 2),
          B = P[0],
          D = P[1],
          H = i.a.useState(''),
          U = l()(H, 2),
          V = U[0],
          z = U[1],
          q = i.a.useState(!1),
          W = l()(q, 2),
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
              D(!0)
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : S
                  return z(n), j(!1), []
                },
              })
              c(m, { name: b, description: L })
                .then(function () {
                  s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, L, c, s, r],
          ),
          Y = i.a.useCallback(
            function () {
              u ? X(!0) : G()
            },
            [G, u],
          ),
          Z = i.a.createElement(_.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= t,
          ee = i.a.createElement(k.a, {
            confirmButtonLabel: w,
            headline: F,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: t }),
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
        return $ && !B
          ? ee
          : i.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: E },
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
        l = n.n(a),
        r = n('+Kfv'),
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
            return { community: y, fetchStatus: c.b, isCommunityMember: c.g }
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
        k = n('/yvb'),
        E = n('rHpw'),
        C = h.a.h4fbfa57,
        S = h.a.ea8cfb1d,
        F = h.a.dc1b14a1,
        I = { viewType: 'community' },
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
          l.a.useEffect(function () {
            p && !n && s !== g.a.LOADED && c(p).catch(a())
          })
          var h,
            E = b ? S : C,
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
              L = n.theme
            return M && M.length && !m
              ? l.a.createElement(
                  r.a,
                  { behavioralEventContext: I },
                  l.a.createElement(
                    f.b,
                    {
                      behavioralEventViewType: 'rules',
                      history: u,
                      rightControl: l.a.createElement(k.a, { onPress: w, size: 'small', type: 'brandFilled' }, E),
                      title: Object(o.a)({ communityName: T }),
                    },
                    l.a.createElement(i.b, {
                      badgeStyle: K.badgeStyle,
                      headerContainerStyle: K.containerStyle,
                      headerExplanationStyle: K.headerExplanationStyle,
                      heading:
                        ((h = T), l.a.createElement(_.b, { size: 'title4', weight: 'bold' }, F({ communityName: h }))),
                      rules: M,
                      theme: L,
                    }),
                  ),
                )
              : l.a.createElement(v.a, { to: '/i/communities/'.concat(n.id_str) })
          }
          return s === g.a.LOADED ? l.a.createElement(v.a, { to: '/' }) : null
        },
        T = p(w),
        K =
          ((t.default = T),
          E.a.create(function (e) {
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
          for (var t = [], n = (0, l.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var l = a(n('yyPN'))
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
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
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
          l = ''
        return n && (l = n && (1 === n.length ? n[0] : n[1])), a ? i()(i()({}, a.scope), {}, { src: t, q: l }) : null
      }
      function m(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          l = n.search(c.b.WordEnd),
          r = l >= 0 ? n.slice(l) : '',
          i = a.search(c.b.WordBoundary),
          o = r + a.slice(0, i)
        return o.trim() ? { start: l, end: e + i, word: o } : { start: -1, end: -1, word: '' }
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
          r = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, l()(r))
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
    pChJ: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityOriginationAttributes_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'User',
            kind: 'LinkedField',
            name: 'creator',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'ApiUser',
                kind: 'LinkedField',
                name: 'legacy',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '6efd2b54b1b597993e3a7be7ff2b6f29',
      }
      t.default = a
    },
    'pd/v': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
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
                args: (l = [
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
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                          r,
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  r,
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
                          r,
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
    qre1: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityInviteButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'invites_result',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'b7ab87af666f9d231a6b2be83eed0762',
      }
      t.default = a
    },
    'rPb+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o,
        c = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
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
            argumentDefinitions: [a, r, l],
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
    tFuX: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
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
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                          r,
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  r,
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
                          r,
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
        l = n.n(a),
        r = n('+Kfv'),
        i = n('es0u'),
        o = n('LgBi'),
        c = n('1Idg'),
        s = n('eSoz'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { community: c.a, communityId: c.c, screenName: c.i }
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
        k = p.a.h5245afa,
        E = p.a.dc6ce7b4,
        C = p.a.f8321d82,
        S = p.a.ga2aa43c,
        F = { viewType: 'community' },
        I = { viewType: 'all' },
        w = { viewType: 'moderators' },
        T = l.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            c = e.fetchCommunityIfNeeded,
            s = e.history,
            u = e.location
          l.a.useEffect(
            function () {
              n && c(n).catch(a())
            },
            [n, a, c],
          )
          var m = (null == u ? void 0 : u.pathname) && u.pathname.indexOf('members') > 0,
            d = m ? E : S,
            y = l.a.useMemo(
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
              ? l.a.createElement(
                  _.d,
                  null,
                  l.a.createElement(
                    _.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                    l.a.createElement(
                      r.a,
                      { behavioralEventContext: I },
                      l.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Members,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                  l.a.createElement(
                    _.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                    l.a.createElement(
                      r.a,
                      { behavioralEventContext: w },
                      l.a.createElement(g.a, { community: t }),
                      l.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Moderators,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                )
              : null
          return l.a.createElement(
            r.a,
            { behavioralEventContext: F },
            l.a.createElement(
              f.a,
              { behavioralEventViewType: 'members' },
              l.a.createElement(b.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: k,
                history: s,
                primaryContent: p,
                rightControl: m && n ? l.a.createElement(o.a, { communityId: n }) : null,
                secondaryBar: l.a.createElement(h.a, { accessibilityLabel: d, links: y }),
                sidebarContent: l.a.createElement(i.a, null),
                title: E,
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
          return De
        }),
        n.d(t, 'CommunitiesScreen', function () {
          return He
        })
      var a = n('VrFO'),
        l = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
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
        k = n('li/m'),
        E = n('G6rE'),
        C = n('rxPX'),
        S = n('0KEI'),
        F = function (e, t) {
          var n = v.i(e, t)
          if (n) return E.e.selectByScreenName(e, n)
        },
        I = Object(C.a)()
          .propsFromState(function () {
            return { communitiesActions: _.f, hasCommunityMemberships: k.d, screenName: v.i, user: F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: E.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        w = n('GOQE'),
        T = n('3XMw'),
        K = n.n(T),
        M = n('5oT/'),
        L = (n('z84I'), n('M+/F'), n('yiKp')),
        x = n.n(L),
        R = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        O = n('YeIG'),
        A = 'community-thumbnail-image',
        j = 'community-thumbnail-name-container',
        N = n('MWbm'),
        P = n('rHpw'),
        B = n('X00g'),
        D = n('htQn'),
        H = n('9Xij'),
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
          var t = f.a.useContext(R.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            l = n.media,
            r = n.name,
            i = n.theme,
            o = f.a.useMemo(
              function () {
                return { clientEntity: x()(x()({}, q), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(O.a)(null == l ? void 0 : l.image) || !r) return null
          var c = null == l ? void 0 : l.image,
            s = null == l ? void 0 : l.crop,
            u = P.a.theme.aspectRatios.communityBanner,
            m = t ? B.a.getCommunityBackgroundColor(i) : P.a.theme.colors.translucentBlack77
          return c
            ? f.a.createElement(
                b.a,
                { behavioralEventContext: o },
                f.a.createElement(
                  D.a,
                  { link: '/i/communities/'.concat(a), style: W.root },
                  f.a.createElement(
                    N.a,
                    { style: W.container },
                    f.a.createElement(
                      H.a,
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
                        r.trim(),
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
            l = e.fetchStatus,
            r = e.location.pathname
          f.a.useEffect(
            function () {
              l === Z.a.NONE && a().catch(n())
            },
            [n, a, l],
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
                    f.a.createElement(ee.a, { link: '/'.concat(r, '/memberships'), text: te }),
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
        le = Y(ne),
        re = n('WpDa'),
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
          formatResponse: re.a,
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
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
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
                    l = e.location,
                    r = this._getModule(),
                    i = this._c9sParticipationEnabled && t ? f.a.createElement(ue.a, { history: n }) : null
                  return a && r
                    ? f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(pe.a, null),
                        f.a.createElement(
                          se.a,
                          { container: fe.a, fab: i },
                          f.a.createElement(le, { location: l }),
                          f.a.createElement(ye.a, {
                            entryConfiguration: ce.a,
                            module: r,
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
      p()(_e, 'contextType', R.a)
      var ke = _e,
        Ee = n('hqKg'),
        Ce = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Se = function () {
          return Object(Ee.createSelector)(Ce, function (e) {
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
                    formatResponse: re.a,
                  })
                })(e)
              : void 0
          })
        },
        Fe = Object(C.a)()
          .propsFromState(function () {
            return { urtModule: Se() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Ie = n('yoO3'),
        we = K.a.c63602d3,
        Te = K.a.d7346631,
        Ke = K.a.hb01fe46,
        Me = Fe(
          (function (e) {
            u()(n, e)
            var t = d()(n)
            function n() {
              var e
              l()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
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
                          Ie.a,
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
        Le = n('5FtR'),
        xe = n('Y6L+'),
        Re = n('VS6U'),
        Oe = n('/yvb'),
        Ae = n('zCf4'),
        je = K.a.h02a6fe5,
        Ne = K.a.c63602d3,
        Pe = K.a.a226497c,
        Be = { viewType: 'communities' },
        De = f.a.memo(function (e) {
          var t = e.communitiesActions
          if (null == t || !t.create) return null
          return f.a.createElement(Oe.a, {
            icon: f.a.createElement(M.a, { accessibilityLabel: Pe, style: Ue.createButton }),
            link: '/i/communities/create',
            size: 'medium',
            type: 'brandText',
          })
        }),
        He = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  a = t.history,
                  l = t.location,
                  r = t.user,
                  i = e._isLoggedInUser()
                return f.a.createElement(
                  Ae.d,
                  null,
                  f.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(xe.J, '/communities') },
                    f.a.createElement(ke, { hasCommunityMemberships: n, history: a, isLoggedInUser: i, location: l }),
                  ),
                  f.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(xe.J, '/communities/memberships') },
                    f.a.createElement(Me, { isLoggedInUser: i, user: r }),
                  ),
                )
              }),
              p()(c()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  l = n.fetchOneUserByScreenNameIfNeeded,
                  r = n.screenName
                r && l(r).catch(a(w.a))
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
                      { behavioralEventContext: Be },
                      f.a.createElement(Re.a, {
                        backLocation: '/',
                        history: n,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: f.a.createElement(De, { communitiesActions: t }),
                        sidebarContent: f.a.createElement(h.a, null),
                        title: a,
                      }),
                    )
                  }
                  return f.a.createElement(Le.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(He, 'contextType', R.a)
      var Ue = P.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        Ve = I(He)
      t.default = Ve
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        l = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
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
        k = n('rHpw'),
        E = n('k/Ka'),
        C = n('MWbm'),
        S = n('x0mb'),
        F = n('IMYl'),
        I = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
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
                    l = e.name,
                    r = e.style,
                    i = k.a.theme.colors[n],
                    o = v.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    C.a,
                    { style: [w.container, r] },
                    p.a.createElement(
                      _.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [w.choice, w.choiceContainer] },
                      p.a.createElement(S.a, { style: [w.choice, { color: i }] }),
                      Object(E.a)('input', {
                        accessibilityLabel: t,
                        name: l,
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
                        p.a.createElement(F.a, { style: [w.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        w = k.a.create(function (e) {
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
              f()({}, k.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        T = I,
        K = 1,
        M = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return l()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(K, '_LABEL')), (K += 1), e
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
                    l = t.layout,
                    r = t.onChange,
                    i = t.options,
                    o = t.value,
                    c = 'two-rows' === l,
                    s = [L.root, c && L.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    C.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        l = t.colorName
                      return p.a.createElement(T, {
                        accessibilityLabel: n,
                        autoFocus: a && o === l,
                        colorName: l,
                        isSelected: o === l,
                        key: l,
                        name: e._colorPickerId,
                        onChange: r,
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
      var L = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = M
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        l = n('42ly'),
        r = n('N9G2'),
        i = n('BIH/'),
        o = n('lhaq'),
        c = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              n = i(t),
              a = c(t, 0)
            return (a.length = l(a, t, t, n, 0, void 0 === e ? 1 : o(e))), a
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
        l,
        r,
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
                args: (l = [
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
                args: l,
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
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                  r,
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
        l,
        r,
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
                args: (l = [
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
                    args: [(r = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [r, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
          return mt
        })
      n('KqXw'), n('WNMA'), n('1t7P'), n('jQ/y'), n('ho0z')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
        i = n('rxPX'),
        o = Object(i.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        c = n('ddV6'),
        s = n.n(c),
        u = n('jTgF'),
        m = n('AspN'),
        d = n('eSoz'),
        y = n('0KEI'),
        p = function (e, t) {
          var n = t.localMediaId,
            a = n && isFinite(n) ? m.k(e, n) : []
          return s()(a, 1)[0]
        },
        g = Object(i.a)()
          .propsFromState(function () {
            return { localMedia: p }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: d.a,
              removeLocalMediaId: d.e,
              editCommunityBanner: d.d,
              removeBanner: d.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        f = n('3XMw'),
        b = n.n(f),
        h = n('Nh1N'),
        v = n('JAeQ'),
        _ = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        k = Object(_.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(176)]).then(n.bind(null, 'P68U'))
          },
        }),
        E = n('eyty'),
        C = n('MWbm'),
        S = n('rHpw'),
        F = n('TIdA'),
        I = n('A91F'),
        w = n('4zmP'),
        T = n('eb3s'),
        K = b.a.a49f884d,
        M = b.a.ea965b81,
        L = b.a.gea6cc19,
        x = b.a.cfd2f35d,
        R = b.a.j35d3ad6,
        O = b.a.f1e8fb21,
        A = b.a.fc2a5c92,
        j = b.a.e405ec21
      var N,
        P,
        B,
        D = S.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        H = g(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            r = e.editCommunityBanner,
            i = e.hasCustomMedia,
            o = e.localMedia,
            c = e.localMediaId,
            m = e.media,
            d = e.removeBanner,
            y = e.removeLocalMediaId,
            p = l.a.useState(!1),
            g = s()(p, 2),
            f = g[0],
            b = g[1],
            _ = l.a.useState(!1),
            N = s()(_, 2),
            P = N[0],
            B = N[1],
            H = l.a.useState(!1),
            U = s()(H, 2),
            V = U[0],
            z = U[1],
            q = l.a.useState(!1),
            W = s()(q, 2),
            Q = W[0],
            X = W[1],
            J = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return z(!1), X(Boolean(e)), e ? t(n, e) : y(n)
            },
            $ = J ? l.a.createElement(F.a, { accessibilityLabel: K, aspectMode: I.a.exact(G), image: J }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            P
              ? l.a.createElement(
                  C.a,
                  { style: D.error },
                  l.a.createElement(w.a, { Icon: h.a, headline: A, text: P, type: 'danger' }),
                )
              : null,
            l.a.createElement(k, {
              accessibilityLabel: M,
              aspectRatio: G,
              currentContent: $,
              location: E.d.CommunityBanner,
              mediaItem: V ? o : void 0,
              onChange: function (e) {
                var t = s()(e, 1)[0]
                B(!1), Z(t)
              },
              onFailure: function () {
                B(j), y(n)
              },
              onRemove:
                i || V
                  ? function () {
                      Z(), b(!0)
                    }
                  : void 0,
            }),
            Q && o
              ? l.a.createElement(v.a, {
                  aspectRatio: G,
                  media: o,
                  onCancel: Z,
                  onCropDone: function (e) {
                    X(!1),
                      c
                        ? (z(!0),
                          r(n, { mediaId: c, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(j) : Y(e)
                          }))
                        : B(j)
                  },
                })
              : null,
            f
              ? l.a.createElement(T.a, {
                  cancelButtonLabel: x,
                  confirmButtonLabel: R,
                  confirmButtonType: 'destructiveFilled',
                  headline: L,
                  onCancel: function () {
                    b(!1)
                  },
                  onConfirm: function () {
                    d(n).catch(Y), b(!1)
                  },
                  text: O,
                })
              : null,
          )
        }),
        U = Object(i.a)()
          .propsFromActions(function () {
            return {
              editAccess: d.c.editAccess,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        V = n('yoO3'),
        z = n('mWs5'),
        q = n('3JAx'),
        W = b.a.f713fbd1,
        Q = [
          { label: b.a.fd00a769, value: 'Public', helpText: b.a.d0784408 },
          { label: b.a.ce0523a8, value: 'Closed', helpText: b.a.ccfafe8c },
        ],
        X = U(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            r = e.history,
            i = t.id_str,
            o = l.a.useState(t.access),
            c = s()(o, 2),
            u = c[0],
            m = c[1],
            d = l.a.useCallback(
              function () {
                a(i, { access: u })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [i, u, a, r, n],
            ),
            y = u !== t.access
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: i, onSubmit: d, submitDisabled: !y, title: W },
              l.a.createElement(
                C.a,
                { style: J.root },
                l.a.createElement(q.a, {
                  name: 'membershipSetting',
                  onChange: function (e, t) {
                    m(t)
                  },
                  options: Q,
                  value: u,
                }),
              ),
            ),
          )
        }),
        J = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        G = n('n0Rl'),
        Y = n('k49u'),
        Z = (n('849X'), n('TJCb'), n('uDfI')),
        $ =
          (n('yH/f'),
          Object.freeze({
            Open: 'CommunityOpenMembershipSettings',
            Restricted: 'CommunityRestrictedMembershipSettings',
          })),
        ee = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        te = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        ne = (n('enFi'), n('9SqB')),
        ae = n.n(ne),
        le = void 0 !== N ? N : (N = n('tFuX')),
        re = void 0 !== P ? P : (P = n('pd/v')),
        ie = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case $.Open:
                t = { __typename: $.Open }
                break
              case $.Restricted:
                t = {
                  __typename: $.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        oe = n('zCf4'),
        ce = n('t62R'),
        se = n('e0ey'),
        ue = n('Hsf0'),
        me = n.n(ue),
        de = void 0 !== B ? B : (B = n('tnnC'))
      var ye,
        pe,
        ge = n('jAXQ'),
        fe = n.n(ge),
        be = b.a.f713fbd1,
        he = [
          { label: b.a.fd00a769, value: $.Open, helpText: b.a.a0a16d37 },
          { label: b.a.ce0523a8, value: $.Restricted, helpText: b.a.f1b189f9 },
        ],
        ve = l.a.createElement(
          b.a.I18NFormatMessage,
          { $i18n: 'd35773be' },
          l.a.createElement(ce.b, { weight: 'bold' }, b.a.b1066579),
        ),
        _e = b.a.c85960a0,
        ke = b.a.ca373cd2,
        Ee = b.a.d42d9318,
        Ce = b.a.c5d1634d,
        Se = b.a.b983f9e0,
        Fe = b.a.fc2a5c92,
        Ie = b.a.a1c93d73,
        we = void 0 !== ye ? ye : (ye = n('1tGk')),
        Te = function (e) {
          var t = e.children
          return l.a.createElement(ce.b, { color: 'gray700', size: 'subtext2', style: Me.settingsItem }, t)
        },
        Ke = function (e) {
          var t,
            n,
            a,
            r,
            i,
            o,
            c,
            u,
            m,
            p,
            g,
            f,
            v,
            _ = e.community,
            k = fe()(we, _),
            E = k.membership_settings,
            S = k.rest_id,
            F = (function (e) {
              var t = me()(de, e)
              switch (t.__typename) {
                case $.Restricted:
                  return { access: $.Restricted, invitesPolicy: t.invites_policy }
                case $.Open:
                  return { access: $.Open, invitesPolicy: ee.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            I = l.a.useState(F.access),
            K = s()(I, 2),
            M = K[0],
            L = K[1],
            x = l.a.useState(F.invitesPolicy),
            R = s()(x, 2),
            O = R[0],
            A = R[1],
            j = l.a.useState(),
            N = s()(j, 2),
            P = N[0],
            B = N[1],
            D =
              ((t = ae()(le)),
              (n = s()(t, 2)),
              (a = n[0]),
              (r = n[1]),
              (i = ae()(re)),
              (o = s()(i, 2)),
              (c = o[0]),
              (u = o[1]),
              (m = Object(Z.c)()),
              l.a.useCallback(
                function (e, t) {
                  return r || u
                    ? Promise.reject(new Error('Already updating membership settings'))
                    : new Promise(function (n, l) {
                        var r = t.access,
                          i = t.invitesPolicy
                        r === $.Open
                          ? a({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var t = ie(e.community_membership_settings_open_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                          : r === $.Restricted &&
                            c({
                              variables: {
                                communityId: e,
                                restrictedMembershipSettings: { invites_policy: i, join_approval_policy: te.Moderator },
                              },
                              onCompleted: function (e) {
                                var t = ie(e.community_membership_settings_restricted_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                      })
                },
                [a, c, m, r, u],
              )),
            H = Object(oe.f)(),
            U = l.a.useState(),
            V = s()(U, 2),
            W = V[0],
            Q = V[1],
            X = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            J = l.a.useMemo(
              function () {
                return { access: M, invitesPolicy: O }
              },
              [M, O],
            ),
            G = l.a.useCallback(function (e, t) {
              L(t)
            }, []),
            ne = l.a.useCallback(function (e, t) {
              A(t ? ee.Member : ee.Moderator)
            }, []),
            ce = l.a.useCallback(
              function () {
                var e = X({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Ie
                    return Q(n), []
                  },
                })
                D(S, J)
                  .then(function () {
                    H.goBack({ backLocation: '/i/communities/'.concat(S, '/tools/settings') })
                  })
                  .catch(e)
              },
              [S, X, H, J, D],
            ),
            ue = l.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === $.Restricted && t.access === $.Open) return b.a.daedd9fa
                })(F, J)
                e ? B(e) : ce()
              },
              [F, J, ce],
            ),
            ye = l.a.useCallback(function () {
              return B(void 0)
            }, []),
            pe =
              ((g = J),
              (f = (p = F).access !== g.access),
              (v = p.access === $.Restricted && p.invitesPolicy !== g.invitesPolicy),
              !(f || v)),
            ge = W
              ? l.a.createElement(
                  C.a,
                  { style: Me.error },
                  l.a.createElement(w.a, { Icon: h.a, headline: Fe, text: W, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            z.a,
            { communityId: S, onSubmit: ue, submitDisabled: pe, title: be },
            ge,
            l.a.createElement(Te, null, ve),
            l.a.createElement(q.a, { name: 'membershipSetting', onChange: G, options: he, value: M }),
            l.a.createElement(Te, null, Ee),
            M === $.Restricted &&
              l.a.createElement(se.a, {
                checked: O === ee.Member,
                helpText: ke,
                label: _e,
                name: 'allowInvites',
                onChange: ne,
              }),
            P &&
              l.a.createElement(T.a, {
                confirmButtonLabel: Ce,
                confirmButtonType: 'primary',
                headline: Se,
                onCancel: ye,
                onConfirm: ce,
                text: P,
              }),
          )
        },
        Me = S.a.create(function (e) {
          return {
            error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
            settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Le = n('v//M'),
        xe = void 0 !== pe ? pe : (pe = n('PbB6')),
        Re = Object(G.b)(xe, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Oe = function (e) {
          var t = { communityId: e.communityId }
          return l.a.createElement(Re, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                r = null == t ? void 0 : t.community
              return l.a.createElement(Le.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return r ? l.a.createElement(Ke, { community: r }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ae = n('ROT1'),
        je = Object(i.a)()
          .propsFromActions(function () {
            return {
              editName: d.c.editName,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Ne = b.a.h3c0f1a2,
        Pe = b.a.fc2a5c92,
        Be = b.a.cb5e6510
      var De = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        He = je(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            r = e.history,
            i = t.id_str,
            o = t.name,
            c = l.a.useState(o),
            u = s()(c, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            p = s()(y, 2),
            g = p[0],
            f = p[1],
            b = l.a.useState(void 0),
            v = s()(b, 2),
            _ = v[0],
            k = v[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Be
                    return k(n), f(!0), []
                  },
                })
                a(i, { name: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, m, a, r, n],
            )
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: i, onSubmit: E, submitDisabled: g, title: Ne },
              _
                ? l.a.createElement(
                    C.a,
                    { style: De.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: Pe, text: _, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ae.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        Ue = n('U0Qk'),
        Ve = Object(i.a)()
          .propsFromActions(function () {
            return {
              editPurpose: d.c.editPurpose,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        ze = b.a.a895549f,
        qe = b.a.fc2a5c92,
        We = b.a.ced22929
      var Qe = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Xe = Ve(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            r = e.history,
            i = t.description,
            o = t.id_str,
            c = l.a.useState(i || ''),
            u = s()(c, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            p = s()(y, 2),
            g = p[0],
            f = p[1],
            b = l.a.useState(void 0),
            v = s()(b, 2),
            _ = v[0],
            k = v[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : We
                    return k(n), f(!0), []
                  },
                })
                a(o, { purpose: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, m, a, r, n],
            )
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: o, onSubmit: E, submitDisabled: g, title: ze },
              _
                ? l.a.createElement(
                    C.a,
                    { style: Qe.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: qe, text: _, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ue.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        Je = n('Ig1G'),
        Ge = n('x0mb'),
        Ye = n('5FtR'),
        Ze = n('X00g'),
        $e = n('6vad'),
        et = n('csss'),
        tt = n('0yYu'),
        nt = b.a.bb081ea1,
        at = b.a.h3e55b40,
        lt = b.a.j8af8ea9,
        rt = b.a.d5f01115,
        it = b.a.c3c04b70,
        ot = { Closed: b.a.ce0523a8, Public: b.a.fd00a769 },
        ct = b.a.f4a98e9e,
        st = b.a.f713fbd1,
        ut = function (e) {
          var t = e.children
          return l.a.createElement(ce.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        mt = function (e) {
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
            g = l.a.useContext(r.a).featureSwitches,
            f = g.isTrue('c9s_edit_community_name_enabled'),
            b = g.isTrue('c9s_edit_community_description_enabled'),
            h = g.isTrue('c9s_edit_community_membership_settings_enabled'),
            v = g.isTrue('c9s_membership_settings_enabled'),
            _ = g.isTrue('c9s_edit_community_banner_enabled'),
            k = g.isTrue('c9s_edit_community_theme_enabled'),
            E = a.url,
            C = l.a.useMemo(
              function () {
                return v ? (d.__typename === $.Open ? ot.Public : ot.Closed) : ot[i]
              },
              [i, v, d.__typename],
            ),
            S = Object(Je.d)(t),
            F = Ze.a.getCommunityThemeDisplayName(S),
            I = Ze.a.getCommunityBackgroundColor(p)
          return l.a.createElement(
            oe.d,
            null,
            f
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(He, { community: t, history: n }),
                )
              : null,
            b
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(Xe, { community: t, history: n }),
                )
              : null,
            v
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Oe, { communityId: s }),
                )
              : h
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(X, { community: t, history: n }),
                )
              : null,
            l.a.createElement(
              oe.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                V.a,
                null,
                l.a.createElement(
                  z.a,
                  { communityId: s, screenType: 'primaryDetail', title: nt },
                  _ ? l.a.createElement(H, { communityId: s, hasCustomMedia: c, localMediaId: u, media: m }) : null,
                  l.a.createElement($e.b, { text: ct }),
                  l.a.createElement(et.a, {
                    description: l.a.createElement(ut, null, y),
                    label: at,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(et.a, {
                    description: o ? l.a.createElement(ut, null, o) : void 0,
                    label: rt,
                    link: b ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(et.a, {
                        description: l.a.createElement(ut, null, F),
                        label: it,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(Ge.a, { style: [{ color: I }, dt.themeIcon] })
                        },
                      })
                    : null,
                  v || h
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(tt.a, null),
                        l.a.createElement($e.b, { text: st }),
                        l.a.createElement(et.a, {
                          description: l.a.createElement(ut, null, C),
                          label: lt,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            l.a.createElement(oe.b, null, l.a.createElement(Ye.a, { to: ''.concat(E, '/') })),
          )
        },
        dt =
          ((t.default = o(mt)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return I
        })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        i = n.n(r),
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
        k = p.a.i2209530,
        E = p.a.hcf35d0c,
        C = p.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        F = {}
      function I(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.editTheme,
          r = e.history,
          o = t.id_str,
          c = t.theme,
          s = f.a.getCommunityBackgroundColorName(c),
          u = i.a.useState(!1),
          y = l()(u, 2),
          p = y[0],
          v = y[1],
          I = i.a.useState(Object(d.d)(t)),
          T = l()(I, 2),
          K = T[0],
          M = T[1],
          L = i.a.useState(f.a.getCommunityThemeDisplayName(K)),
          x = l()(L, 2),
          R = x[0],
          O = x[1],
          A = i.a.useState(s),
          j = l()(A, 2),
          N = j[0],
          P = j[1],
          B = i.a.useState([]),
          D = l()(B, 2),
          H = D[0],
          U = D[1]
        i.a.useEffect(
          function () {
            var e
            return (
              U(
                ((e = []),
                S.forEach(function (t) {
                  var n = f.a.getCommunityTheme(t),
                    a = f.a.getCommunityBackgroundColorName(n)
                  ;(F[a] = t), e.push({ accessibilityLabel: f.a.getCommunityThemeDisplayName(t), colorName: a })
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
                  r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [o, K, a, r, n],
          ),
          z = i.a.createElement(
            b.a,
            { accessibilityLabel: E({ themeName: R }), disabled: !p, onPress: V, size: 'small', type: 'brandFilled' },
            k,
          )
        return i.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: r, rightControl: z, title: _ },
          i.a.createElement(
            g.a,
            { style: w.themePickerContainer },
            i.a.createElement(h.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var n = F[e],
                  a = n !== Object(d.d)(t)
                M(n), O(f.a.getCommunityThemeDisplayName(n)), P(e), v(a)
              },
              options: H,
              value: N,
            }),
          ),
        )
      }
      var w = v.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(I)
    },
    zakg: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityInviteButtonQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityInviteButton_community' }],
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
            name: 'CommunityInviteButtonQuery',
            selections: [
              {
                alias: 'community',
                args: l,
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
                    name: 'invites_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityInvites',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  r,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'OgVu1WJu62PoPazegBf3mw',
            metadata: {},
            name: 'CommunityInviteButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '9533cbfb5394a4601514cbc83020138b'), (t.default = i)
    },
  },
])
//# sourceMappingURL=WIPED
