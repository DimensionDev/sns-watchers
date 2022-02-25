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
      var a,
        l = {
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
              concreteType: 'UserResults',
              kind: 'LinkedField',
              name: 'creator_results',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'result',
                  plural: !1,
                  selections: (a = [
                    { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  ]),
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'membership_settings',
              plural: !1,
              selections: a,
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'CommunityOriginationAttributes_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (t.default = l)
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
        var _ = u(
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
        return [_, f]
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
        _ = n.n(h),
        v = n('/yvb'),
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
        F = _.a.cd133485,
        I = _.a.hb1e378e,
        w = _.a.bcd6bb0d,
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
                v.a,
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
        R = n('4e/K'),
        x = n('MWbm'),
        O = n('4zmP'),
        A = n('t62R'),
        j = n('FIs5'),
        P = n('rHpw'),
        N = n('GZwR'),
        B = _.a.b139b549,
        H = _.a.dfddd842,
        D = _.a.cf4898a0,
        U = _.a.a3b3939a,
        V = _.a.db4f0cc9,
        q = _.a.h252ede6,
        z = _.a.a5cd93f9,
        Q = _.a.ba5a88e3,
        W = _.a.i6568549,
        J = _.a.b772cd65,
        X = _.a.b4f16d00,
        G = _.a.ja1387a7,
        Y = _.a.b92a21d8,
        Z = _.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        te = [N.a.CommunityUsers],
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
          _ = f[1],
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
                ? r.users_to_invite_slice.items.map(N.g).filter(Boolean)
                : ee
            },
            [t, r, y.length],
          ),
          T = u.a.useCallback(
            function (e, t) {
              _(function (n) {
                return i()(i()({}, n), {}, l()({}, e, t))
              })
            },
            [_],
          ),
          K = u.a.useCallback(
            function (e) {
              S(function (t) {
                return i()(i()({}, t), {}, l()({}, e, !0))
              })
            },
            [S],
          ),
          P = o
            ? u.a.createElement(L.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(L.a, { to: '/' }),
          ae = u.a.createElement(
            v.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            J,
          )
        return 'CommunityInvitesUnavailable' === (null == r ? void 0 : r.__typename)
          ? P
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ne },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: H, title: B },
                ((F = (null == r ? void 0 : r.remaining_invite_count) || 0),
                (I = F > 999),
                'CommunityInvites' === (null == r ? void 0 : r.__typename) &&
                  !I &&
                  u.a.createElement(
                    x.a,
                    { style: le.callout },
                    u.a.createElement(O.a, { text: W({ remaining_invite_count: F }) }),
                  )),
                u.a.createElement(R.default, {
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
                            return q
                          default:
                            return null !== (t = r.message) && void 0 !== t ? t : z({ screen_name: l })
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
                  placeholder: D,
                  renderEmptyState: function () {
                    return u.a.createElement(j.a, { header: X, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        x.a,
                        { style: le.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, Q),
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
                  source: N.d.CommunityInvites,
                  style: le.input,
                }),
              ),
            )
      }
      var le = P.a.create(function (e) {
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
        return _
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
        _ = (function (e) {
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
      p()(_, 'defaultProps', { color: 'red500', align: 'center' })
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
          return k
        })
      n('vrRf')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('LgBi'),
        i = n('UZ0O'),
        o = n('rxPX'),
        c = Object(o.a)().withAnalytics({ page: 'communities', section: 'people' }),
        s = n('3XMw'),
        u = n.n(s),
        m = n('gDCe'),
        d = n('yoO3'),
        y = n('k/OQ'),
        p = n('mWs5'),
        g = n('MWbm'),
        f = n('krnS'),
        b = n('zCf4'),
        h = u.a.dc6ce7b4,
        _ = u.a.f8321d82,
        v = u.a.ga2aa43c,
        k = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.location,
            o = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            c = o ? _ : v,
            s = l.a.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: a.state },
                        label: _,
                        key: _,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: a.state },
                        label: v,
                        key: v,
                      },
                    ]
                  : []
                return l.a.createElement(y.a, { accessibilityLabel: c, links: e })
              },
              [n, c, a],
            )
          return l.a.createElement(
            d.a,
            null,
            l.a.createElement(
              p.a,
              {
                communityId: t.id_str,
                rightControl: o ? l.a.createElement(r.a, { communityId: n }) : void 0,
                title: h,
              },
              l.a.createElement(
                g.a,
                null,
                l.a.createElement(i.a, { community: t, communityId: n }),
                s,
                l.a.createElement(
                  b.d,
                  null,
                  l.a.createElement(
                    b.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                    l.a.createElement(f.b, {
                      communityId: t.id_str,
                      mode: f.a.Members,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                  l.a.createElement(
                    b.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                    l.a.createElement(m.a, { community: t }),
                    l.a.createElement(f.b, {
                      communityId: t.id_str,
                      mode: f.a.Moderators,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                ),
              ),
            ),
          )
        }
      t.default = c(k)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return J
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return X
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
          return Object.entries(n).flat().includes('tweetId') ? J.HiddenTweet : J.RemovedMember
        },
        h = function (e, t) {
          if (b(0, t) === J.HiddenTweet) {
            var n,
              a = t.match.params.tweetId,
              l = a ? y.a.selectHydrated(e, a) : void 0,
              r = null == l || null === (n = l.community_relationship) || void 0 === n ? void 0 : n.community
            return r ? d.c.select(e, r) : void 0
          }
          var i = t.match.params.communityId
          return i ? d.c.select(e, i) : void 0
        },
        _ = function (e, t) {
          if (b(0, t) === J.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? y.a.selectFetchStatus(e, n) : void 0
          }
          var a = t.match.params.communityId
          return a ? d.c.selectFetchStatus(e, a) : void 0
        },
        v = Object(g.a)()
          .propsFromState(function () {
            return { community: h, fetchStatus: _, loggedInUser: p.e.selectLoggedInUser, tweet: f, type: b }
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
        R = n('6vad'),
        x = n('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        P = S.a.icc32e3d,
        N = T.a.getCommunityTheme('Default'),
        B = x.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: x.a.theme.colors.gray50,
              borderRadius: x.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: x.a.theme.spacesPx.space16,
              marginBottom: x.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: x.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        H = function (e) {
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
                    case J.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case J.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === t
                ? void 0
                : t.name) || '',
            y = null == n ? void 0 : n.name,
            p = null == n ? void 0 : n.rules,
            g = (null == n ? void 0 : n.theme) || N,
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
                      case J.HiddenTweet:
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
                      case J.RemovedMember:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            P({ communityName: y }),
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
                c.a.createElement(R.b, { text: b }),
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
        D = n('G1WX'),
        U = n('yoO3'),
        V = n('VS6U'),
        q = n('0KEI'),
        z = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        Q = S.a.jf99d610,
        W = { viewType: 'community' },
        J = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function X(e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          a = e.fetchCommunity,
          r = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          g = i()(e, z),
          f = function (e) {
            var t, a
            switch (e) {
              case J.HiddenTweet:
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
              case J.RemovedMember:
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
          _ = b.tweetId,
          v = Object(q.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          k = Object(q.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          E = c.a.useEffect(
            function () {
              _ && o(_).catch(v)
            },
            [v, o, _],
          ),
          C = c.a.useEffect(
            function () {
              h && a(h).catch(k)
            },
            [h, k, a],
          ),
          S = c.a.createElement(F.b, g)
        return c.a.createElement(D.a, {
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
                  { behavioralEventContext: W },
                  i
                    ? c.a.createElement(
                        U.a,
                        { behavioralEventViewType: a },
                        c.a.createElement(V.a, {
                          backLocation: '/notifications',
                          history: g.history,
                          primaryContent: c.a.createElement(H, l()({}, e, { type: p })),
                          sidebarContent: c.a.createElement(m.a, null),
                          title: Q,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var G = v(X)
      t.default = G
    },
    'I/KZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return l
        }),
        n.d(t, 'd', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return F
        }),
        n.d(t, 'c', function () {
          return I
        })
      n('yH/f')
      var a = Object.freeze({
          Open: 'CommunityOpenMembershipSettings',
          Restricted: 'CommunityRestrictedMembershipSettings',
        }),
        l = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        r = n('ERkP'),
        i = n.n(r),
        o = n('t62R'),
        c = n('3JAx'),
        s = n('e0ey'),
        u = n('rHpw'),
        m = n('3XMw'),
        d = n.n(m),
        y = [
          { label: d.a.fd00a769, value: a.Open, helpText: d.a.a0a16d37 },
          { label: d.a.ce0523a8, value: a.Restricted, helpText: d.a.f1b189f9 },
        ],
        p = d.a.c85960a0,
        g = d.a.ca373cd2,
        f = d.a.d42d9318,
        b = i.a.createElement(
          d.a.I18NFormatMessage,
          { $i18n: 'd35773be' },
          i.a.createElement(o.b, { weight: 'bold' }, d.a.b1066579),
        ),
        h = function (e) {
          var t = e.children
          return i.a.createElement(o.b, { color: 'gray700', size: 'subtext2', style: k.settingsItem }, t)
        },
        _ = function (e) {
          var t = e.state,
            n = t.access,
            r = t.invitesPolicy,
            o = e.setters,
            u = o.setAccess,
            m = o.setInvitesPolicy,
            d = !e.hideInvitePolicy,
            _ = i.a.useCallback(
              function (e, t) {
                u(t)
              },
              [u],
            ),
            v = i.a.useCallback(
              function (e, t) {
                m(t ? l.Member : l.Moderator)
              },
              [m],
            )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(h, null, b),
            i.a.createElement(c.a, { name: 'membershipSetting', onChange: _, options: y, value: n }),
            i.a.createElement(h, null, f),
            d &&
              n === a.Restricted &&
              i.a.createElement(s.a, {
                checked: r === l.Member,
                helpText: g,
                label: p,
                name: 'allowInvites',
                onChange: v,
              }),
          )
        },
        v = i.a.memo(_),
        k = u.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        E = n('ddV6'),
        C = n.n(E),
        S = { access: a.Open, invitesPolicy: l.Member }
      function F() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
          t = i.a.useState(e.access),
          n = C()(t, 2),
          a = n[0],
          l = n[1],
          r = i.a.useState(e.invitesPolicy),
          o = C()(r, 2),
          c = o[0],
          s = o[1],
          u = i.a.useMemo(function () {
            return { setAccess: l, setInvitesPolicy: s }
          }, []),
          m = i.a.useMemo(
            function () {
              return { access: a, invitesPolicy: c }
            },
            [a, c],
          )
        return [m, u]
      }
      function I(e) {
        var t, n
        switch (e.access) {
          case a.Open:
            t = 'Open'
            break
          case a.Restricted:
          default:
            t = 'RestrictedJoinRequestsDisabled'
        }
        switch (e.invitesPolicy) {
          case l.Moderator:
            n = 'ModeratorInvitesAllowed'
            break
          case l.Member:
            n = 'MemberInvitesAllowed'
            break
          case l.None:
          default:
            n = 'NoInvitesAllowed'
        }
        return { joinPolicy: t, invitesPolicy: n }
      }
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
          _ = b[1],
          v = c.a.useState(!1),
          k = i()(v, 2),
          E = k[0],
          C = k[1],
          S = u.croppedMediaId,
          F = void 0 === S ? void 0 : S,
          I = u.status
        c.a.useEffect(
          function () {
            I === p.NotStarted && (_(!0), g({ status: 'started' })),
              I === p.Completed && n.id !== F && g({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, n, F],
        )
        var w = c.a.useCallback(
            function () {
              _(!1), g({ status: p.Completed, croppedMediaId: n.id }), a()
            },
            [a, n],
          ),
          T = c.a.useCallback(function () {
            _(!1), C(!0)
          }, []),
          K = c.a.useCallback(function () {
            C(!1), _(!0)
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
          R = l()(l()({}, n), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: n.mediaFile, cropData: void 0 })
        return c.a.createElement(
          c.a.Fragment,
          null,
          h ? c.a.createElement(m.a, { defaultAspectRatio: t, media: n, onCancel: w, onDone: T, title: d }) : null,
          E
            ? c.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: R,
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
        _ = u.a.createElement(p.a, null),
        v = function (e) {
          var t = e.community,
            l = c()(e, b),
            r = f()(void 0 !== a ? a : (a = n('qre1')), t)
          if (!r || 'CommunityInvitesUnavailable' === r.invites_result.__typename) return null
          var o = '/i/communities/'.concat(r.rest_id, '/invite')
          return u.a.createElement(m.a, i()({ accessibilityLabel: h, icon: _, link: o, type: 'primaryText' }, l))
        },
        k = u.a.memo(v),
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
        _ = n.n(h),
        v = n('HPNB'),
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
        R = n('3xLC'),
        x = [
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
                  ? _.a.createElement(
                      T.a,
                      { style: w.fill },
                      _.a.createElement(
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
                  return _.a.createElement(L.a, null, function (t) {
                    var n = t.windowWidth
                    return v.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      l()(e, x))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : _.a.createElement(E.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return _.a.createElement(
                    _.a.Fragment,
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
                    v = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    S = n.title,
                    F = n.titleIconCell,
                    I = n.titleIconCellSize,
                    K = n.withDetailOpen,
                    M = n.withSearchBox,
                    L = n.withTweetButton,
                    R = 'root' === p,
                    x = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && v) || (R && h),
                    j = R || (O && t),
                    P = R ? b.c : O ? b.a : void 0,
                    N = _.a.createElement(
                      T.a,
                      { style: w.appBarContainer },
                      _.a.createElement(k.a, {
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
                        titleDomId: P,
                        titleIconCell: F,
                        titleIconCellSize: I,
                      }),
                    ),
                    B =
                      R || (x && K)
                        ? null
                        : _.a.createElement(E.a.Configure, {
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
                  return _.a.createElement(_.a.Fragment, null, B, N)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()(O, 'contextType', R.a),
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
        _ = n('/de5'),
        v = n('5FtR'),
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
              L = c.a.createElement(_.b, { history: y, location: g, match: f })
            return c.a.createElement(k.a, i()({}, M, { primaryContent: L }))
          }
          return o === h.a.LOADED ? c.a.createElement(v.a, { to: '/' }) : null
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
              return n.e(201).then(n.bind(null, 'V5fj'))
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
        _ = s.a.c824202f,
        v = s.a.d32cf5e6,
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
            R = L[0],
            x = L[1],
            O = i.a.useState(void 0),
            A = l()(O, 2),
            j = A[0],
            P = A[1],
            N = i.a.useState(r),
            B = l()(N, 2),
            H = B[0],
            D = B[1],
            U = i.a.useState(F(r)),
            V = l()(U, 2),
            q = V[0],
            z = V[1],
            Q = i.a.useState(void 0),
            W = l()(Q, 2),
            J = W[0],
            X = W[1],
            G = i.a.useState('' !== s),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = i.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                C(a) && ((t = !0), P(h({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  x(t),
                  K(a),
                  g({ description: H, name: a, valid: !t && !q })
              },
              [n, H, g, q, C],
            ),
            te = i.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                F(n) && ((t = !0), X(k({ maxCharacterCount: a }))),
                  z(t),
                  D(n),
                  g({ name: T, description: n, valid: !t && !R })
              },
              [a, T, g, R, F],
            ),
            ne = R && j ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = q ? void 0 : v({ maxCharacterCount: a }),
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
              invalid: R && Z,
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
              errorText: J,
              helperText: ae,
              invalid: q,
              label: _,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: a,
              value: H,
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
          var _ = l.a.createElement(
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
          return u ? l.a.createElement(s.a, { behavioralEventContext: u }, _) : _
        },
        f = l.a.memo(g),
        b = n('MWbm'),
        h = n('X00g'),
        _ = n('h0NW'),
        v = n('rHpw'),
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
        R = m.a.a709f8f8,
        x = { viewType: 'welcome_education' },
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
                  l.a.createElement(_.a, {
                    containerStyle: A.itemContainer,
                    items: [
                      { label: w, description: T, decoration: r },
                      { label: K, description: M, decoration: i },
                      { label: L, description: R, decoration: o },
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
                behavioralEventContext: x,
                flag: i.i,
                headline: F,
                subtext: I,
                withCloseButton: !t,
              })
        }),
        A = v.a.create(function (e) {
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
        return v
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
        _ = u.a.d936eeca,
        v = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityName,
            r = e.onChange,
            s = i.a.useContext(o.a).featureSwitches,
            u = i.a.useState(!1),
            d = l()(u, 2),
            p = d[0],
            v = d[1],
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
                  ? (y()(t).length > 0 || g()(t).length > 0) && ((n = !0), S(_))
                  : ((n = !0), S(h({ minCharacterCount: 3, maxCharacterCount: F }))),
                  v(n),
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
    Rc1A: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityShareButtonQuery',
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
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityShareButton_community' }],
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
            name: 'CommunityShareButtonQuery',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'uBj-FA1eH5oHJufmxwI9IQ',
            metadata: {},
            name: 'CommunityShareButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '3eeda317cb789b741e0d0c9703d0fc15'), (t.default = r)
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
    S91Q: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'CommunitiesCreateButtonQuery',
            selections: [
              {
                alias: 'viewer',
                args: (a = [{ kind: 'Literal', name: 's', value: 23 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'create_community_action_result',
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: 'FragmentSpread',
                        name: 'CommunitiesCreateButton_create_community_action_result',
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'CommunitiesCreateButtonQuery',
            selections: [
              {
                alias: 'viewer',
                args: a,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'create_community_action_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      { kind: 'TypeDiscriminator', abstractKey: '__isCommunityCreateActionResult' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
          },
          params: {
            id: '8daJzV6tGCTssiKBRFpXtQ',
            metadata: {},
            name: 'CommunitiesCreateButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(l.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (t.default = l)
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
          return D
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
        _ = n('0KEI'),
        v = Object(s.a)()
          .propsFromActions(function () {
            return {
              reorderRules: h.c.reorderRules,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
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
      var w = v(function (e) {
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
            _ = i.a.createElement(b.a, { onPress: h, size: 'small', type: 'brandFilled' }, F)
          return i.a.createElement(
            y.a,
            null,
            i.a.createElement(
              C.a,
              { communityId: o, rightControl: _, screenType: 'primaryDetail', title: I },
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
        R = n('zCf4'),
        x = d.a.gfca5254,
        O = d.a.d94edeb4,
        A = d.a.j560c8ea,
        j = d.a.ab8089ea,
        P = d.a.h63a5c3b,
        N = i.a.createElement(M.a, null),
        B = i.a.createElement(L.a, null),
        H = { viewType: 'add' },
        D = function (e) {
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
            _ = m.url,
            v = g === c.a.Admin,
            k =
              n && v
                ? i.a.createElement(b.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: H,
                    icon: N,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            F = f.length > 1,
            I =
              r && v && F
                ? i.a.createElement(b.a, {
                    accessibilityLabel: P,
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
            v &&
              a &&
              ((L.displayType = S.a.Pivot),
              (L.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            i.a.createElement(
              R.d,
              null,
              i.a.createElement(
                R.b,
                { exact: !0, path: ''.concat(_, '/') },
                i.a.createElement(
                  y.a,
                  null,
                  i.a.createElement(
                    C.a,
                    { communityId: d, rightControl: M, screenType: 'primaryDetail', title: x },
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
                R.b,
                { exact: !0, path: ''.concat(_, '/reorder') },
                i.a.createElement(w, { community: s, explanation: O, history: u }),
              ),
              i.a.createElement(R.b, null, i.a.createElement(p.a, { to: ''.concat(_, '/') })),
            )
          )
        },
        U = k.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(D)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'getTweetButtonLocationState', function () {
          return Gl
        }),
        n.d(t, 'CommunityScreen', function () {
          return Yl
        })
      var a = n('yiKp'),
        l = n.n(a),
        r = (n('KqXw'), n('WNMA'), n('ho0z'), n('ERkP')),
        i = n.n(r),
        o = n('+Kfv'),
        c = n('es0u'),
        s = n('v6aA'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('R5kW'),
        y = function (e, t) {
          var n = Object(d.b)(e, t.communityId) || {},
            a = n.pending_join_request_count,
            l = void 0 === a ? 0 : a,
            r = n.tweet_case_count
          return { pending_join_request_count: l, tweet_case_count: void 0 === r ? 0 : r }
        },
        p = function (e, t) {
          return Object(d.c)(e, t.communityId)
        },
        g = Object(u.a)()
          .propsFromState(function () {
            return { count: y, fetchStatus: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: d.a,
            }
          }),
        f = n('kGix'),
        b = n('TnY3'),
        h = n('Ig1G'),
        _ = n('3XMw'),
        v = n.n(_),
        k = n('MWbm'),
        E = n('mjJ+'),
        C = n('/yvb'),
        S = n('Znyr'),
        F = n('rHpw'),
        I = n('zIWA'),
        w = n('SNyS'),
        T = n('Lsrn'),
        K = n('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var L = M,
        R = n('ACHU'),
        x = v.a.h6beb5fa,
        O = v.a.e3f04700,
        A = v.a.e2429f56,
        j = v.a.df15d5b7,
        P = v.a.e48fbb01,
        N = v.a.c8c6c4e9,
        B = v.a.h63a5c3b,
        H = v.a.dce5e1b3,
        D = v.a.c5d8c93d,
        U = { viewType: 'app_bar_button' }
      var V = F.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        q = Object(b.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            l = void 0 === a ? 0 : a,
            r = (e.history, e.userRole),
            o = i.a.useContext(s.a).featureSwitches,
            c = o.isTrue('c9s_settings_enabled'),
            u = o.isTrue('c9s_report_community_enabled'),
            m = o.isTrue('c9s_moderation_enabled') && t,
            d = c && t,
            y = u && !t,
            p = i.a.useCallback(
              function (e) {
                var t = []
                return (
                  m &&
                    t.push({
                      text: A,
                      subText: j({ count: l }),
                      Icon: I.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  y &&
                    t.push({
                      text: P,
                      Icon: I.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: N, Icon: w.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  i.a.createElement(E.a, { items: t, onCloseRequested: e })
                )
              },
              [n, l, m, y],
            ),
            g = t ? L : R.a,
            f = t ? (r === h.a.Admin ? H : D) : B
          return i.a.createElement(
            k.a,
            { style: V.root },
            i.a.createElement(C.a, {
              accessibilityLabel: f,
              behavioralEventContext: U,
              hoverLabel: { label: f },
              icon: i.a.createElement(g, null),
              link: d ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: d ? void 0 : p,
              size: 'medium',
              type: 'primaryText',
            }),
            m && l > 0
              ? i.a.createElement(S.a, {
                  count: l,
                  style: V.menuControlBadge,
                  truncatedCountFormatter: x,
                  unreadCountLabel: O,
                  withBorder: !1,
                })
              : null,
          )
        })
      var z,
        Q,
        W,
        J,
        X,
        G = g(function (e) {
          var t = i.a.useContext(s.a).featureSwitches.isTrue('c9s_request_to_join_enabled'),
            n = e.canModerate,
            a = e.communityId,
            l = e.count,
            r = e.createLocalApiErrorHandler,
            o = e.fetchCommunityModerationData,
            c = e.fetchStatus,
            u = e.userRole,
            m = l.pending_join_request_count,
            d = l.tweet_case_count
          return (
            i.a.useEffect(
              function () {
                c === f.a.NONE && n && o(a).catch(r())
              },
              [r, o, c, a, n],
            ),
            i.a.createElement(q, { canModerate: n, communityId: a, count: t ? m + d : d, userRole: u })
          )
        }),
        Y = n('m3Bd'),
        Z = n.n(Y),
        $ = n('1Idg'),
        ee = n('eSoz'),
        te = n('G6rE'),
        ne = n('o3oN'),
        ae = n('/ekK'),
        le = ['loggedInUser'],
        re = function (e, t) {
          var n = $.c(e, t)
          return !n || Object(ae.a)(e, n, 'mod_education_flag')
        },
        ie = Object(u.a)()
          .propsFromState(function () {
            return {
              communityId: $.c,
              community: $.a,
              communityTheme: $.f,
              fetchStatus: $.b,
              hasShownModEducation: re,
              membershipsFetchStatus: ne.d,
              isCommunityMember: $.g,
              joinActionResultType: $.h,
              loggedInUser: te.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Z()(e, le)
            return l()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: ee.c.fetchOneIfNeeded,
              fetchCommunityMemberships: ne.a,
              setFlag: ae.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        oe = n('MDbM'),
        ce = n('/de5'),
        se = (n('yH/f'), n('WpDa')),
        ue = n('ZNT5'),
        me = (n('enFi'), n('1t7P'), n('jQ/y'), n('jV+4')),
        de = n('t62R'),
        ye = n('jAXQ'),
        pe = n.n(ye),
        ge = function (e) {
          var t,
            a = pe()(void 0 !== z ? z : (z = n('pChJ')), e.community),
            l = i.a.useMemo(
              function () {
                return new Date(a.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [a.created_at],
            ),
            r = i.a.useMemo(
              function () {
                var e, t, n
                if ('User' === (null === (e = a.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return i.a.createElement(me.a, {
                    isVerified:
                      (null === (t = a.creator_results.result.legacy) || void 0 === t ? void 0 : t.verified) || !1,
                    screenName:
                      (null === (n = a.creator_results.result.legacy) || void 0 === n ? void 0 : n.screen_name) || '',
                    withLink: !0,
                  })
              },
              [a],
            )
          return a.creator_results &&
            'User' === (null === (t = a.creator_results.result) || void 0 === t ? void 0 : t.__typename)
            ? i.a.createElement(
                de.b,
                { color: 'gray700' },
                i.a.createElement(v.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, r),
              )
            : null
        },
        fe = i.a.memo(ge),
        be = n('cPMa'),
        he = n('6vad'),
        _e = n('csss'),
        ve = n('h0NW'),
        ke = n('0yYu'),
        Ee = n('cOhU'),
        Ce = n('DlMI'),
        Se = n('Lxak'),
        Fe = n('a5gf'),
        Ie = i.a.createElement(de.b, { weight: 'bold' }),
        we = v.a.af7c11a9,
        Te = v.a.db1b9462,
        Ke = v.a.ea49402d,
        Me = i.a.createElement(v.a.I18NFormatMessage, { $i18n: 'he99cc29' }, i.a.cloneElement(Ie, null, v.a.gedb877c)),
        Le = v.a.fcef2921,
        Re = v.a.c93dd2c8,
        xe = function (e) {
          var t = pe()(void 0 !== Q ? Q : (Q = n('1rMX')), e.community),
            a = Object(be.a)('c9s_request_to_join_enabled'),
            l = i.a.useMemo(
              function () {
                var e,
                  n = function (e) {
                    return i.a.createElement(de.b, null, e)
                  },
                  l = i.a.createElement(fe, { community: t }),
                  r = t.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: Ae, label: n(Te) },
                    CommunityOpenMembershipEducation: { decoration: je, label: Me, description: Le },
                    CommunityRestrictedMembershipEducation: { decoration: Ne, label: Me, description: Re },
                    CommunityVisibilityEducation: { decoration: je, label: n(Ke) },
                    OriginationAttributionEducation: { decoration: Pe, label: l },
                  },
                  c = [o.CommunityMemberAllowedActions]
                return (
                  a
                    ? ('CommunityRestrictedMembershipSettings' === r &&
                        c.push(o.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === r && c.push(o.CommunityOpenMembershipEducation))
                    : c.push(o.CommunityVisibilityEducation),
                  'User' === (null === (e = t.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    c.push(o.OriginationAttributionEducation),
                  c
                )
              },
              [t, a],
            )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(he.b, { text: we }),
            Object(h.f)(t.role) && t.description ? i.a.createElement(_e.a, { label: t.description }) : null,
            i.a.createElement(ve.a, { containerStyle: Oe.containerStyle, items: l }),
            i.a.createElement(ke.a, null),
          )
        },
        Oe = F.a.create(function (e) {
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
        Ae = i.a.createElement(Ee.a, { style: Oe.icon }),
        je = i.a.createElement(Ce.a, { style: Oe.icon }),
        Pe = i.a.createElement(Se.a, { style: Oe.icon }),
        Ne = i.a.createElement(Fe.a, { style: Oe.icon }),
        Be = i.a.memo(xe),
        He = n('yoO3'),
        De = n('Fr3L'),
        Ue = n('fTQJ'),
        Ve = (n('z84I'), n('PKbs')),
        qe = n('X00g'),
        ze = function (e) {
          var t = pe()(void 0 !== W ? W : (W = n('DCZs')), e),
            a = t.custom_theme,
            l = t.default_theme,
            r = null != a ? a : l
          return i.a.useMemo(
            function () {
              return qe.a.getCommunityTheme(r)
            },
            [r],
          )
        },
        Qe = ze,
        We = n('rC8y'),
        Je = void 0 !== J ? J : (J = n('BX8b')),
        Xe = v.a.gfca5254,
        Ge = v.a.ffd9cfe6,
        Ye = function (e) {
          var t = e.community,
            n = pe()(Je, t),
            a = n.rules,
            l = Qe(n),
            r = i.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(he.b, { text: Xe }),
                i.a.createElement(Ve.b, {
                  badgeStyle: Ze.badgeStyle,
                  headerContainerStyle: [Ze.containerStyle, Ze.headingContainerStyle],
                  headerExplanationStyle: Ze.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: Ze.ruleContainerStyle,
                  rules: r,
                  theme: l,
                }),
                a.length > 5
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(We.a, { link: '/i/communities/'.concat(n.rest_id, '/rules'), text: Ge }),
                      ' ',
                      i.a.createElement(ke.a, null),
                    )
                  : null,
              )
        },
        Ze = F.a.create(function (e) {
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
        $e = i.a.memo(Ye),
        et = n('7JQg'),
        tt = n('IAZG'),
        nt = v.a.i9028824,
        at = v.a.cc683fb9,
        lt = { page: 'community', section: 'about' },
        rt = void 0 !== X ? X : (X = n('jC8Z'))
      function it(e) {
        var t = e.communityId,
          n = Object(tt.a)(rt, { communityId: t })
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(Be, { community: n.community }),
          i.a.createElement($e, { community: n.community }),
        )
      }
      var ot = function (e) {
          var t = e.communityId,
            n = i.a.useMemo(
              function () {
                return (function (e) {
                  return Object(ue.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (t) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: se.a,
                  })
                })(t)
              },
              [t],
            )
          return i.a.createElement(
            et.c,
            { namespace: lt },
            i.a.createElement(
              He.a,
              { behavioralEventViewType: 'about' },
              i.a.createElement(
                De.a,
                { errorConfig: { context: 'CommunityAboutScreen' } },
                i.a.createElement(it, { communityId: t }),
              ),
              i.a.createElement(Ue.a, { loadingAccessibilityLabel: nt, module: n, title: at }),
            ),
          )
        },
        ct = n('VrFO'),
        st = n.n(ct),
        ut = n('Y9Ll'),
        mt = n.n(ut),
        dt = n('1Pcy'),
        yt = n.n(dt),
        pt = n('5Yy7'),
        gt = n.n(pt),
        ft = n('2VqO'),
        bt = n.n(ft),
        ht = n('KEM+'),
        _t = n.n(ht),
        vt = (n('2G9S'), n('LW0h'), n('7x/C'), n('7xRU'), n('tVqn'), n('uFXj'), n('ddV6')),
        kt = n.n(vt),
        Et = n('CGyZ'),
        Ct = n('feu+'),
        St = v.a.fad95333,
        Ft = function (e) {
          var t = e.offendingRule
          return i.a.createElement(
            k.a,
            null,
            t
              ? i.a.createElement(
                  k.a,
                  { style: It.offendingRule },
                  (function (e) {
                    return i.a.createElement(
                      v.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      i.a.createElement(de.b, { weight: 'bold' }, v.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            i.a.createElement(de.b, null, St),
          )
        },
        It = F.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        wt = v.a.hafa07f2,
        Tt = v.a.fa94c9da,
        Kt = v.a.c15bee31,
        Mt = v.a.i859676b,
        Lt = i.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          i.a.createElement(de.b, { link: '/settings/audience_and_tagging' }, v.a.e77dfaf0),
        ),
        Rt = v.a.fc2a5c92,
        xt = v.a.bf7bdb60,
        Ot = v.a.h27d695f,
        At = v.a.b02360f5,
        jt = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        Pt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        Nt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Bt,
        Ht,
        Dt,
        Ut,
        Vt,
        qt = v.a.e6057013,
        zt = v.a.b533478f,
        Qt = { follow: v.a.b171d7c4, following: v.a.aa7ae3f6, unfollow: v.a.bb1d57b6 },
        Wt = v.a.j24c37b2,
        Jt = function (e) {
          var t = i.a.useContext(s.a).featureSwitches,
            n = i.a.useState(void 0),
            a = kt()(n, 2),
            r = a[0],
            o = a[1],
            c = t.isTrue('c9s_request_to_join_enabled'),
            u = e.community,
            m = e.createLocalApiErrorHandler,
            d = e.history,
            y = e.isProtectedUser,
            p = e.join,
            g = e.leave,
            f = e.requestToJoin,
            b = u.actions,
            _ = b.join_action_result,
            v = b.leave_action_result,
            E = u.id_str,
            S = u.name,
            F = u.role,
            I = Object(h.f)(F),
            w = _.reason === Nt.ViewerJoinRequestRequired && c,
            T = _.reason === Nt.ViewerRequestPending && c,
            K = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !I } },
            M = function () {
              o(void 0)
            },
            L = i.a.useMemo(
              function () {
                return w ? l()(l()({}, Qt), {}, { follow: qt }) : Qt
              },
              [w],
            )
          return i.a.createElement(
            k.a,
            { style: Xt.button },
            T
              ? i.a.createElement(C.a, { type: 'onMediaOutlined' }, zt)
              : i.a.createElement(Et.a, {
                  behavioralEventContext: K,
                  buttonText: L,
                  isFollowing: I,
                  name: S,
                  onFollow: function () {
                    var e = u.rules,
                      t = u.viewerViolatedRule,
                      n = (function (e, t, n) {
                        var a = e.__typename,
                          l = e.reason,
                          r = function (e) {
                            return { canAction: !0, message: e }
                          },
                          o = function (e) {
                            return { canAction: !1, message: e }
                          },
                          c = o({ headline: Rt, text: xt })
                        switch (a) {
                          case jt.joinAvailable:
                            return r()
                          case jt.joinUnavailable:
                            switch (l) {
                              case Nt.ViewerIsRemoved:
                                return o({
                                  headline: Kt,
                                  text: i.a.createElement(Ft, { offendingRule: null == n ? void 0 : n.name }),
                                })
                              case Nt.ViewerNotInvited:
                                return o({ headline: wt, text: Tt })
                              case Nt.ViewerIsProtected:
                                return t ? o({ headline: Mt, text: Lt }) : r()
                              case Nt.ViewerJoinRequestRequired:
                                return r()
                              default:
                                return c
                            }
                          default:
                            return c
                        }
                      })(_, y, t),
                      a = n.canAction,
                      l = n.message
                    !a && l && o(l),
                      a &&
                        (e && e.length > 0
                          ? d.push({
                              pathname: '/i/communities/'.concat(E, '/join'),
                              state: { community: u, joinRequestRequired: w },
                            })
                          : w
                          ? f(E).catch(m({}))
                          : p(E).catch(m({})))
                  },
                  onUnfollow: function () {
                    var e = (function (e) {
                        var t,
                          n = e.__typename,
                          a = e.reason,
                          l = function (e) {
                            return { canAction: !1, message: e }
                          },
                          r = l({ headline: Rt, text: xt })
                        switch (n) {
                          case jt.leaveAvailable:
                            return { canAction: !0, message: t }
                          case jt.leaveUnavailable:
                            switch (a) {
                              case Pt.ViewerIsSoleAdmin:
                                return l({ headline: Ot, text: At })
                              default:
                                return r
                            }
                          default:
                            return r
                        }
                      })(v),
                      t = e.canAction,
                      n = e.message
                    !t && n && o(n), t && g(E).catch(m({}))
                  },
                  type: 'community',
                }),
            r
              ? i.a.createElement(Ct.a, {
                  actionLabel: Wt,
                  graphicDisplayMode: 'none',
                  headline: r.headline,
                  onAction: M,
                  onClose: M,
                  subtext: r.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        Xt = F.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Gt = n('YeIG'),
        Yt = n('cHTv'),
        Zt = function (e) {
          var t = pe()(void 0 !== Bt ? Bt : (Bt = n('dMLx')), e)
          return i.a.useMemo(
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
                Yt.b
              )
            },
            [t],
          )
        },
        $t = n('TIdA'),
        en = n('A91F'),
        tn = n('9Xij'),
        nn = void 0 !== Ht ? Ht : (Ht = n('fK4d')),
        an = function (e) {
          var t = pe()(nn, e.community),
            n = Zt(t),
            a = F.a.theme.aspectRatios.communityBanner
          return n && !Object(Gt.a)(n)
            ? i.a.createElement(
                k.a,
                null,
                i.a.createElement($t.a, {
                  accessibilityLabel: '',
                  aspectMode: en.a.exact(a),
                  backgroundColor: F.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : i.a.createElement(tn.a, { ratio: a }, i.a.createElement(k.a, { style: ln.placeholderImageContainer }))
        },
        ln = F.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        rn = i.a.memo(an),
        on = { context: 'CommunityBannerImageQuery' },
        cn = void 0 !== Dt ? Dt : (Dt = n('vUUo')),
        sn = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(cn, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return i.a.createElement(rn, { community: n.community })
        },
        un = function (e) {
          return i.a.createElement(De.a, { errorConfig: on }, i.a.createElement(sn, { communityId: e.communityId }))
        },
        mn = i.a.memo(un),
        dn = n('K1iM'),
        yn = n.n(dn),
        pn = n('n4Eu'),
        gn = { red: 0, green: 0, blue: 0 },
        fn = '10px',
        bn = F.a.create(function (e) {
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
        hn = function (e) {
          var t = e.children,
            a = e.community,
            l = pe()(void 0 !== Ut ? Ut : (Ut = n('OBBW')), a),
            r = Qe(l),
            o = Zt(l).palette,
            c = []
          if (o) {
            var s,
              u = yn()(o)
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var m = s.value
                c.push({ percentage: m.percentage, rgb: { blue: m.rgb.blue, green: m.rgb.green, red: m.rgb.red } })
              }
            } catch (y) {
              u.e(y)
            } finally {
              u.f()
            }
          }
          var d = Object(be.a)('c9s_ui_colors_enabled_rweb')
          return i.a.createElement(
            k.a,
            null,
            i.a.createElement(k.a, { style: bn.descriptionContainer }, t),
            i.a.createElement(k.a, { style: [F.a.absoluteFill, bn.backgroundColorWhite] }),
            i.a.createElement(k.a, {
              style: [
                F.a.absoluteFill,
                bn.backgroundColor,
                (function (e, t) {
                  if (d) return qe.a.getCommunityGradientStyle(t, fn)
                  var n = e && pn.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : gn,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    r = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(fn, ', ')
                      .concat(r, ' ')
                      .concat(fn, ' 100%)'),
                  }
                })(c, r),
              ],
            }),
          )
        },
        _n = { context: 'CommunityDescriptionContainerQuery' },
        vn = void 0 !== Vt ? Vt : (Vt = n('a/V2')),
        kn = function (e) {
          var t = e.children,
            n = e.communityId,
            a = Object(tt.a)(vn, { communityId: n }, { fetchPolicy: 'store-and-network' })
          return i.a.createElement(hn, { community: a.community }, t)
        },
        En = function (e) {
          return i.a.createElement(
            De.a,
            { errorConfig: _n },
            i.a.createElement(kn, { communityId: e.communityId }, e.children),
          )
        },
        Cn = i.a.memo(En),
        Sn = n('LgBi'),
        Fn = n('CaKu'),
        In = n('1YZw'),
        wn = Object(u.a)().propsFromActions(function () {
          return { addToast: In.b }
        }),
        Tn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              i.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      Tn.metadata = { width: 24, height: 24 }
      var Kn,
        Mn,
        Ln,
        Rn,
        xn,
        On,
        An,
        jn = Tn,
        Pn = n('I/9y'),
        Nn = n('pwey'),
        Bn = v.a.bec3b8f9,
        Hn = { viewType: 'share_community' },
        Dn = v.a.f88553c8,
        Un = { viewType: 'copy_link' },
        Vn = { viewType: 'invite_members' },
        qn = v.a.b139b549,
        zn = v.a.e05c00b4,
        Qn = i.a.createElement(jn, null),
        Wn = F.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        Jn = wn(function (e) {
          var t = pe()(void 0 !== Kn ? Kn : (Kn = n('X/n0')), e.community),
            a = e.addToast,
            l = t.rest_id,
            r = t.role,
            o = Object(h.f)(r),
            c = i.a.useCallback(
              function (e) {
                Fn.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), a({ text: Dn })
              },
              [a, l],
            ),
            s = i.a.useMemo(
              function () {
                return function (e) {
                  var t = []
                  return (
                    t.push({ behavioralEventContext: Un, text: zn, Icon: Pn.a, onClick: c }),
                    o &&
                      t.push({
                        behavioralEventContext: Vn,
                        text: qn,
                        Icon: Nn.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    i.a.createElement(E.a, { items: t, onCloseRequested: e })
                  )
                }
              },
              [o, l, c],
            )
          return i.a.createElement(C.a, {
            accessibilityLabel: Bn,
            behavioralEventContext: Hn,
            icon: Qn,
            renderMenu: s,
            style: Wn.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        Xn = i.a.memo(Jn),
        Gn = { context: 'CommunityShareButtonContainerQuery' },
        Yn = void 0 !== Mn ? Mn : (Mn = n('Rc1A')),
        Zn = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(Yn, { communityId: t })
          return i.a.createElement(Xn, { community: n.community })
        },
        $n = function (e) {
          return i.a.createElement(De.a, { errorConfig: Gn }, i.a.createElement(Zn, { communityId: e.communityId }))
        },
        ea = i.a.memo($n),
        ta = n('li/m'),
        na = ['loggedInUser'],
        aa = Object(u.a)()
          .propsFromState(function () {
            return { community: $.a, loggedInUser: te.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Z()(e, na)
            return l()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: ta.b,
              requestToJoin: ee.c.requestToJoin,
              leave: ta.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        la = v.a.hb9400db,
        ra = function (e) {
          var t = e.community,
            a = pe()(void 0 !== Ln ? Ln : (Ln = n('ldL/')), t),
            l = a.description,
            r = a.role,
            o = i.a.useState(!1),
            c = kt()(o, 2),
            s = c[0],
            u = c[1],
            m = i.a.useState(!1),
            d = kt()(m, 2),
            y = d[0],
            p = d[1],
            g = i.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), u(!s)
              },
              [s],
            )
          return !l || Object(h.f)(r)
            ? null
            : i.a.createElement(
                k.a,
                { style: ia.description },
                i.a.createElement(de.b, { color: 'white', getTextOverflow: p, numberOfLines: s ? void 0 : 2 }, l),
                !s && y ? i.a.createElement(de.b, { color: 'white', onPress: g, weight: 'bold' }, la) : null,
              )
        },
        ia = F.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        oa = i.a.memo(ra),
        ca = { context: 'CommunityDescriptionToggleQuery' },
        sa = void 0 !== Rn ? Rn : (Rn = n('2fn4')),
        ua = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(sa, { communityId: t })
          return i.a.createElement(oa, { community: n.community })
        },
        ma = function (e) {
          return i.a.createElement(De.a, { errorConfig: ca }, i.a.createElement(ua, { communityId: e.communityId }))
        },
        da = i.a.memo(ma),
        ya = n('MtXG'),
        pa = v.a.d58baa7e,
        ga = function (e) {
          var t = e.community,
            a = pe()(void 0 !== xn ? xn : (xn = n('WuQQ')), t).member_count,
            l = void 0 === a ? 0 : a,
            r = pa(l)
          return i.a.createElement(
            ya.a.Group,
            null,
            i.a.createElement(
              ya.a,
              { onMedia: !0 },
              i.a.createElement(
                de.b,
                { color: 'white' },
                i.a.createElement(
                  v.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  i.a.createElement(ya.a.Value, null, v.a.ibd0106d({ formattedCount: r })),
                  i.a.createElement(ya.a.Label, null, v.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        fa = n('cm6r'),
        ba = n('MAI/'),
        ha = n('I4+6'),
        _a = ha.a.generate({
          backgroundColor: F.a.theme.colors.transparent,
          color: F.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        va = F.a.create(function (e) {
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
        ka = function (e) {
          var t = e.community,
            a = pe()(void 0 !== On ? On : (On = n('Eh7u')), t),
            l = Object(be.a)('c9s_ui_colors_enabled_rweb'),
            r = a.members_facepile_results,
            o = a.rest_id,
            c = (function (e) {
              var t,
                n = [],
                a = yn()(e)
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
            s = ze(a),
            u = l ? qe.a.getCommunityBackgroundColorName(s) : void 0
          return i.a.createElement(
            fa.a,
            { interactiveStyles: _a, link: '/i/communities/'.concat(o, '/members'), style: va.membersContainer },
            c.length > 0
              ? i.a.createElement(ba.a, {
                  borderColor: u,
                  style: va.rightSpace,
                  userAvatarSize: 'large',
                  userAvatarUrls: c,
                })
              : null,
            i.a.createElement(ga, { community: a }),
          )
        },
        Ea = { context: 'CommunityFacePileQuery' },
        Ca = void 0 !== An ? An : (An = n('ZYKh')),
        Sa = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(Ca, { communityId: t })
          return i.a.createElement(ka, { community: n.community })
        },
        Fa = function (e) {
          return i.a.createElement(De.a, { errorConfig: Ea }, i.a.createElement(Sa, { communityId: e.communityId }))
        },
        Ia = n('k/OQ'),
        wa = v.a.a0e3ece4,
        Ta = v.a.ha8209bb,
        Ka = v.a.d601fc2f,
        Ma = v.a.b721eb37,
        La = { viewType: 'description' },
        Ra = { viewType: 'facepiles_with_count' },
        xa = (function (e) {
          gt()(n, e)
          var t = bt()(n)
          function n() {
            var e
            st()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              _t()(yt()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              _t()(yt()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
              _t()(
                yt()(e),
                '_isTimelinesRankingEnabled',
                e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
              ),
              _t()(
                yt()(e),
                '_isCommunitiesSharingEnabled',
                e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
              ),
              _t()(yt()(e), '_isRequestToJoinEnabled', e.context.featureSwitches.isTrue('c9s_request_to_join_enabled')),
              _t()(yt()(e), '_requestToJoin', function (t) {
                return (0, e.props.requestToJoin)(t).then(function () {})
              }),
              _t()(yt()(e), '_renderTabs', function () {
                var t = e.props.communityId,
                  n = [
                    { to: '/i/communities/'.concat(t), label: Ta, key: Ta },
                    { to: '/i/communities/'.concat(t, '/latest'), label: Ka, key: Ka },
                    { to: '/i/communities/'.concat(t, '/about'), label: Ma, key: Ma },
                  ]
                return i.a.createElement(Ia.a, {
                  accessibilityLabel: wa,
                  links: e._isTimelinesRankingEnabled
                    ? n
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== Ka
                        })
                      })(n),
                })
              }),
              e
            )
          }
          return (
            mt()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.community,
                    n = e.communityId,
                    a = e.createLocalApiErrorHandler,
                    l = e.history,
                    r = e.isProtectedUser,
                    c = e.join,
                    s = e.leave
                  return t
                    ? i.a.createElement(
                        He.a,
                        { behavioralEventViewType: 'timeline' },
                        i.a.createElement(
                          k.a,
                          { style: Oa.container },
                          i.a.createElement(
                            k.a,
                            null,
                            i.a.createElement(mn, { communityId: n }),
                            i.a.createElement(
                              o.a,
                              { behavioralEventContext: La },
                              i.a.createElement(
                                Cn,
                                { communityId: n },
                                i.a.createElement(
                                  de.b,
                                  { color: 'white', size: 'title2', style: Oa.name, weight: 'bold' },
                                  t.name.trim(),
                                ),
                                i.a.createElement(da, { communityId: n }),
                                i.a.createElement(
                                  o.a,
                                  { behavioralEventContext: Ra },
                                  i.a.createElement(
                                    k.a,
                                    { style: Oa.bottomContainer },
                                    i.a.createElement(Fa, { communityId: n }),
                                    i.a.createElement(
                                      k.a,
                                      { style: Oa.buttons },
                                      this._isCommunitiesSharingEnabled
                                        ? i.a.createElement(ea, { communityId: n })
                                        : i.a.createElement(Sn.a, {
                                            communityId: n,
                                            style: Oa.inviteButton,
                                            type: 'onMediaOutlined',
                                          }),
                                      this._isParticipationEnabled
                                        ? i.a.createElement(Jt, {
                                            community: t,
                                            createLocalApiErrorHandler: a,
                                            history: l,
                                            isProtectedUser: r,
                                            join: c,
                                            leave: s,
                                            requestToJoin: this._requestToJoin,
                                          })
                                        : null,
                                    ),
                                  ),
                                ),
                              ),
                            ),
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
        })(i.a.Component)
      _t()(xa, 'contextType', s.a)
      var Oa = F.a.create(function (e) {
          return {
            name: { flexDirection: 'column', justifyContent: 'left', marginBottom: e.spaces.space8 },
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            bottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            buttons: { flexDirection: 'row', height: 'fit-content' },
            inviteButton: { marginRight: e.spaces.space8 },
          }
        }),
        Aa = aa(xa),
        ja = n('hqKg'),
        Pa = n('8Lfv'),
        Na = n('LI/a'),
        Ba = function (e, t) {
          return t.communityId
        },
        Ha = function (e, t) {
          var n = ee.c.select(e, t.communityId)
          return Object(h.f)(null == n ? void 0 : n.role)
        },
        Da = Object(u.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: Ha,
              rankedTweetsModule: Object(ja.createSelector)(Ba, function (e) {
                return Object(Na.b)(e)
              }),
              tweetsModule: Object(ja.createSelector)(Ba, function (e) {
                return Object(Na.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: Pa.a,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        Ua = n('FIs5'),
        Va = n('EUHl'),
        qa = n('7BdX'),
        za = v.a.c18e3a3e,
        Qa = v.a.d68146c0,
        Wa = v.a.h5245afa,
        Ja = v.a.f05dbeff,
        Xa = { page: 'community', section: 'home' },
        Ga = { page: 'community', section: 'latest' },
        Ya = { page: 'community', section: 'tweets' },
        Za = Da(function (e) {
          var t = i.a.useContext(s.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            l = e.isCommunityMember,
            r = e.rankedTweetsModule,
            o = e.tweetsModule,
            c = e.type === Dl.Home ? { module: r, scribeNamespace: Xa } : { module: o, scribeNamespace: Ga },
            u = t ? c : { module: o, scribeNamespace: Ya },
            m = u.module,
            d = u.scribeNamespace
          i.a.useEffect(
            function () {
              n(m).catch(a())
            },
            [n, a, l, m],
          )
          var y = i.a.useCallback(function () {
            return i.a.createElement(Ua.a, { buttonType: 'brandOutlined', header: za, message: Qa })
          }, [])
          return i.a.createElement(
            et.c,
            { namespace: d },
            i.a.createElement(
              He.a,
              { behavioralEventViewType: 'tweets' },
              i.a.createElement(Ue.a, {
                loadingAccessibilityLabel: Ja,
                module: m,
                newTweetsPillMode: Va.a.CLIENT,
                prerollDisplayLocation: qa.c.OTHER,
                refreshControl: null,
                renderEmptyState: y,
                title: Wa,
              }),
            ),
          )
        }),
        $a = n('mw9i'),
        el = (n('MvUL'), n('zCf4')),
        tl = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
              }),
              i.a.createElement('path', {
                d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
              }),
            ),
          )
        }
      tl.metadata = { width: 24, height: 24 }
      var nl,
        al,
        ll = tl,
        rl = n('wpLu'),
        il = v.a.bf359e0d,
        ol = v.a.e8fcdd3a,
        cl = v.a.b37d580e,
        sl = v.a.cafca4b2,
        ul = v.a.ea3b38fa,
        ml = v.a.jd667130,
        dl = v.a.ca7eeabf,
        yl = v.a.acae4034,
        pl = v.a.e2186ee2,
        gl = v.a.j24c37b2,
        fl = function (e) {
          var t = pe()(void 0 !== nl ? nl : (nl = n('2rr8')), e.community),
            a = Object(el.f)(),
            l = i.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(t.rest_id, '/'))
              },
              [a, t.rest_id],
            ),
            r = i.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: bl.rulesContainer },
              t.rules.map(function (e) {
                return i.a.createElement(
                  de.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: bl.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === t.access,
            c = o ? ul : cl,
            s = o ? ml : sl
          return i.a.createElement(
            Ct.a,
            {
              actionLabel: gl,
              graphicDisplayMode: 'none',
              headline: il,
              onAction: l,
              onClose: l,
              subtext: ol,
              withCloseButton: !0,
            },
            i.a.createElement(
              k.a,
              { style: bl.infoItemsContainer },
              i.a.createElement(ve.a, {
                containerStyle: bl.itemContainer,
                items: [
                  { label: c, description: s, decoration: i.a.createElement(ll, { style: bl.decorationContainer }) },
                  { label: dl, decoration: i.a.createElement(rl.a, { style: bl.decorationContainer }), description: r },
                  { label: yl, description: pl, decoration: i.a.createElement(L, { style: bl.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        bl = F.a.create(function (e) {
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
        hl = i.a.memo(fl),
        _l = { context: 'CommunityCreationSummaryQuery' },
        vl = void 0 !== al ? al : (al = n('EFld')),
        kl = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(vl, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return i.a.createElement(hl, { community: n.community })
        },
        El = function (e) {
          return i.a.createElement(De.a, { errorConfig: _l }, i.a.createElement(kl, { communityId: e.communityId }))
        },
        Cl = i.a.memo(El),
        Sl = n('dwig'),
        Fl = n('0+qk'),
        Il =
          (n('FtFR'),
          n('hBvt'),
          Object(u.a)()
            .propsFromState(function () {
              return { flags: ae.b }
            })
            .propsFromActions(function () {
              return { setFlag: ae.c }
            })),
        wl = n('hOZg'),
        Tl = n('WtWS'),
        Kl = n('0ULw'),
        Ml = v.a.c66b37f9,
        Ll = v.a.g2768d0e,
        Rl = v.a.b192b58b,
        xl = v.a.gd30278f,
        Ol = v.a.cbdddb09,
        Al = v.a.h5890b1a,
        jl = [
          {
            flag: 'setup_clicked_rules',
            title: v.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: v.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: v.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: v.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(xl, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        Pl = function (e) {
          var t = e.community.id_str,
            n = e.flags,
            a = e.setFlag,
            l = i.a.useContext(s.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            r = Object(el.f)(),
            o = i.a.useCallback(
              function () {
                a(t, 'setup_show_checklist', !1)
              },
              [t, a],
            )
          if (!n.setup_show_checklist || !l) return null
          var c = function (e) {
              a(t, e.flag, !0).then(function () {
                r.push(e.link(t))
              })
            },
            u = function (e, t) {
              13 === t.keyCode && c(e)
            }
          return i.a.createElement(
            k.a,
            { style: Nl.wrapper },
            i.a.createElement(
              k.a,
              { style: Nl.header },
              i.a.createElement(de.b, { size: 'title3', weight: 'bold' }, Ml),
              i.a.createElement(C.a, {
                accessibilityLabel: Rl,
                icon: i.a.createElement(wl.a, { style: Nl.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: Nl.dismiss,
                type: 'brandText',
              }),
            ),
            i.a.createElement(de.b, { style: Nl.subtext }, Ll),
            i.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: Nl.list },
              jl.map(function (e) {
                var t = Boolean(n[e.flag])
                return i.a.createElement(
                  k.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : c.bind(null, e),
                    onKeyPress: t ? void 0 : u.bind(null, e),
                    style: [Nl.entry, t ? Nl.completedEntry : Nl.uncompletedEntry],
                  },
                  i.a.createElement(de.b, { weight: 'bold' }, e.title),
                  t
                    ? i.a.createElement(Tl.a, { accessibilityLabel: Ol, style: Nl.iconCompleted })
                    : i.a.createElement(Kl.a, { accessibilityLabel: Al, style: Nl.iconUncompleted }),
                )
              }),
            ),
          )
        },
        Nl = F.a.create(function (e) {
          return {
            wrapper: {
              padding: e.spaces.space32,
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.gray200,
              color: e.colors.text,
            },
            header: { display: 'flex', flexDirection: 'row', paddingBottom: e.spaces.space4, alignItems: 'start' },
            dismiss: { marginLeft: 'auto' },
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
        Bl = Il(Pl),
        Hl = n('QRqA'),
        Dl = Object.freeze({ Home: 'home', Latest: 'latest' }),
        Ul = function (e) {
          var t = e.community,
            n = e.composeOptions,
            a = e.history,
            l = e.isAllowedToTweet,
            r = e.joinActionResultType,
            o = e.location,
            c = e.match,
            s = t.id_str,
            u = (null == t ? void 0 : t.role) === h.a.Admin && void 0 !== o.query.show_creation_summary,
            m = i.a.useCallback(function (e, t) {
              return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
            }, []),
            d = i.a.useMemo(
              function () {
                return l
                  ? i.a.createElement(Fl.a, {
                      getLocationState: function () {
                        return n
                      },
                      history: a,
                    })
                  : null
              },
              [l, a, n],
            )
          return i.a.createElement(
            Sl.a,
            { component: $a.a, fab: d },
            i.a.createElement(Hl.a, m(t, r)),
            u && i.a.createElement(Cl, { communityId: s }),
            s ? i.a.createElement(Aa, { communityId: s, history: a, match: c }) : null,
            i.a.createElement(
              el.d,
              null,
              i.a.createElement(
                el.b,
                { exact: !0, path: '/i/communities/'.concat(s, '/') },
                i.a.createElement(Bl, { community: t }),
                i.a.createElement(Za, { communityId: s, location: o, match: c, type: Dl.Home }),
              ),
              i.a.createElement(
                el.b,
                { path: '/i/communities/'.concat(s, '/latest') },
                i.a.createElement(Bl, { community: t }),
                i.a.createElement(Za, { communityId: s, location: o, match: c, type: Dl.Latest }),
              ),
              i.a.createElement(
                el.b,
                { exact: !0, path: '/i/communities/'.concat(s, '/about') },
                i.a.createElement(ot, { communityId: s }),
              ),
            ),
          )
        },
        Vl = n('VS6U'),
        ql = n('Qwev'),
        zl = { type: 'serversideContextKey', serversideContextType: 'community' },
        Ql = v.a.a7c2e06c,
        Wl = v.a.j24c37b2,
        Jl = v.a.a94092a1,
        Xl = v.a.i1fda797,
        Gl = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        Yl = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            s = e.fetchCommunityMemberships,
            u = e.fetchStatus,
            m = e.hasShownModEducation,
            d = e.history,
            y = e.isCommunityMember,
            p = e.joinActionResultType,
            g = e.location,
            b = e.match,
            _ = e.membershipsFetchStatus,
            v = e.screenName,
            k = e.setFlag,
            E = Object(be.a)('c9s_participation_enabled'),
            C = Object(be.a)('c9s_edit_moderators_enabled'),
            S = i.a.useCallback(
              function () {
                n && r(n).catch(a({})), _ === f.a.NONE && s().catch(a())
              },
              [n, _, r, s, a],
            )
          i.a.useEffect(
            function () {
              S()
            },
            [S],
          )
          var F = i.a.useCallback(
              function () {
                n && k(n, 'mod_education_flag', !0)
              },
              [n, k],
            ),
            I = i.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, zl), {}, { serversideContextId: n || '' }), viewType: 'community' }
              },
              [n],
            ),
            w = i.a.useMemo(
              function () {
                return Gl(n)
              },
              [n],
            ),
            T = null == t ? void 0 : t.name,
            K = null == t ? void 0 : t.role,
            M = !!y && E,
            L = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
            R = C && K === h.a.Moderator && !m,
            x = i.a.useMemo(
              function () {
                return n && u === oe.a.LOADING
                  ? i.a.createElement(ql.a, { style: Zl.topMargin })
                  : n && null != t && t.name && u === oe.a.LOADED
                  ? i.a.createElement(Ul, {
                      community: t,
                      communityId: n,
                      composeOptions: w,
                      history: d,
                      isAllowedToTweet: M,
                      joinActionResultType: p,
                      location: g,
                      match: b,
                    })
                  : i.a.createElement(ce.b, { history: d, location: g, match: b })
              },
              [n, u, t, w, d, M, p, g, b],
            )
          if (!n) return null
          var O = i.a.createElement(G, { canModerate: Object(h.c)(K), communityId: n, userRole: K })
          return i.a.createElement(
            o.a,
            { behavioralEventContext: I },
            i.a.createElement(Vl.a, {
              backLocation: v && '/'.concat(v, '/communities'),
              composeOptions: w,
              documentTitle: T ? Ql({ communityName: T }) : '',
              history: d,
              primaryContent: x,
              rightControl: O,
              sidebarContent: i.a.createElement(c.a, { communityId: n, withCommunityRules: L }),
              title: T || null,
              withTweetButton: M,
            }),
            R
              ? i.a.createElement(Ct.a, {
                  actionLabel: Wl,
                  graphicDisplayMode: 'none',
                  headline: Jl,
                  onAction: F,
                  onClose: F,
                  subtext: Xl,
                  withCloseButton: !0,
                })
              : null,
          )
        },
        Zl = F.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        $l = ie(Yl)
      t.default = $l
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
            _ = h[0],
            v = h[1],
            k = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            E = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.g)(t, 3, k)
                n && f(p({ minCharacterCount: 3, maxCharacterCount: k })), v(n), r(t, n)
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
            invalid: _,
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
          return A
        })
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ddV6'),
        i = n.n(r),
        o = (n('KqXw'), n('MvUL'), n('ERkP')),
        c = n.n(o),
        s = n('+Kfv'),
        u = n('ROT1'),
        m = n('U0Qk'),
        d = n('eSoz'),
        y = n('RqPI'),
        p = n('rxPX'),
        g = Object(p.a)()
          .propsFromState(function () {
            return { communitiesActions: y.f }
          })
          .propsFromActions(function () {
            return { createCommunity: d.b }
          }),
        f = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        _ = n('0weh'),
        v = n('5FtR'),
        k = n('cPMa'),
        E = n('MWbm'),
        C = n('/yvb'),
        S = n('4zmP'),
        F = n('t62R'),
        I = n('rHpw'),
        w = n('I/KZ'),
        T = h.a.i6e7e298,
        K = h.a.a226497c,
        M = h.a.c9d56b71,
        L = h.a.fc2a5c92,
        R = h.a.c1ad5a11,
        x = h.a.f713fbd1,
        O = { viewType: 'community' },
        A = c.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            r = Object(k.a)('c9s_community_creation_form_membership_type_enabled'),
            o = c.a.useState(!0),
            d = i()(o, 2),
            y = d[0],
            p = d[1],
            g = c.a.useState(!1),
            b = i()(g, 2),
            h = b[0],
            I = b[1],
            A = y || h,
            P = c.a.useState(''),
            N = i()(P, 2),
            B = N[0],
            H = N[1],
            D = c.a.useState(''),
            U = i()(D, 2),
            V = U[0],
            q = U[1],
            z = c.a.useState(null),
            Q = i()(z, 2),
            W = Q[0],
            J = Q[1],
            X = c.a.useCallback(function (e, t) {
              H(e), p(t)
            }, []),
            G = c.a.useCallback(function (e, t) {
              q(e), 0 === e.length ? I(!1) : I(t)
            }, []),
            Y = Object(w.e)(),
            Z = i()(Y, 2),
            $ = Z[0],
            ee = Z[1],
            te = c.a.useCallback(
              function () {
                return r ? l()({ description: V }, Object(w.c)($)) : { description: V }
              },
              [V, r, $],
            ),
            ne = c.a.useCallback(
              function () {
                J(null),
                  n(B, te())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && a.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && J(e)
                    })
                    .catch(function (e) {
                      J({ error: 'GraphQL error', reason: e })
                    })
              },
              [B, n, te, a],
            )
          if (null == t || !t.create) return c.a.createElement(v.a, { to: '/home' })
          var ae = c.a.createElement(C.a, { disabled: A, onClick: ne, size: 'small', type: 'brandFilled' }, T),
            le = W
              ? c.a.createElement(
                  E.a,
                  { style: j.error },
                  c.a.createElement(S.a, { Icon: _.a, headline: L, text: R, type: 'danger' }),
                )
              : void 0
          return c.a.createElement(
            s.a,
            { behavioralEventContext: O },
            c.a.createElement(
              f.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: j.root,
                history: a,
                rightControl: ae,
                title: K,
              },
              c.a.createElement(
                c.a.Fragment,
                null,
                le,
                c.a.createElement(F.b, { color: 'gray700', style: j.text }, M),
                c.a.createElement(u.a, { autoFocus: !0, communityName: B, onChange: X }),
                c.a.createElement(m.a, { communityPurpose: V, onChange: G }),
                r
                  ? c.a.createElement(
                      c.a.Fragment,
                      null,
                      c.a.createElement(F.b, { size: 'headline2', style: j.membership }, x),
                      c.a.createElement(w.d, { hideInvitePolicy: !0, setters: ee, state: $ }),
                    )
                  : null,
              ),
            ),
          )
        }),
        j = I.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
            membership: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 },
          }
        }),
        P = g(A)
      t.default = P
    },
    UZ0O: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
        i = n('Ig1G'),
        o = n('rHpw'),
        c = n('4e/K'),
        s = n('GZwR'),
        u = [s.a.CommunityMembers]
      function m(e) {
        var t = l.a.useContext(r.a).featureSwitches.isTrue('c9s_members_list_search_enabled'),
          n = e.community,
          a = e.communityId,
          o = (null == n ? void 0 : n.role) === i.a.Admin
        return t && o && a
          ? l.a.createElement(c.default, {
              communityId: a,
              filter: u,
              inputStyle: d.textInput,
              placeholder: 'Search for members',
              rounded: !0,
              source: s.d.CommunityMemberSearch,
              style: d.input,
            })
          : null
      }
      var d = o.a.create(function (e) {
        return {
          input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
          textInput: { marginBottom: e.spaces.space8 },
        }
      })
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
    'X/n0': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityShareButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '37cc56f41a8f3f8d99f58a4ba79f83e9',
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
        _ = n('x5Pi'),
        v = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = f(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            o = (e.tweetId, i()(e, v)),
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
            g = r && Object(_.f)(r, d, t),
            f = g && Object(_.e)(g),
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
          _ = b[1],
          v = y(function () {
            return n
          }),
          k = v[0],
          E = v[1]
        n !== k && (p.current.add(n), E(n), _(n))
        var C = u(
            function () {
              s.current && (p.current.add(g), _(g))
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
                p.current.add(r), _(r)
              }
            },
            [i, e, _, s],
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
    cPMa: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA')
      t.a = function (e) {
        var t = l.a.useContext(r.a).featureSwitches
        return l.a.useMemo(
          function () {
            return t.isTrue(e)
          },
          [e, t],
        )
      }
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
        _ = n('ZNT5'),
        v = Object(_.a)({
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
                  return v
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
        _ = n('AspN'),
        v = function (e, t) {
          return t.media ? t.media : Object(b.a)(t.mediaId) ? Object(_.k)(e, t.mediaId)[0] : void 0
        },
        k = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        E = Object(h.a)()
          .propsFromState(function () {
            return { media: v, mediaId: k }
          })
          .propsFromActions(function () {
            return { processMedia: _.f, updateMediaUpload: _.o }
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
        R = (function (e) {
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
                      containerStyle: x.root,
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
        x = K.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(R),
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
        c,
        s = {
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
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'creator_results',
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
                          (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (o = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                                    name: 'screen_name',
                                    storageKey: null,
                                  },
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
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: [i],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      c,
                      r,
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      o,
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  o,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '1F2pQyQp1ASlzFmWIUKbFA',
            metadata: {},
            name: 'AboutQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(s.hash = '765e8a2b911d9e61edc36a015f192e8c'), (t.default = s)
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
        return ve
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
        _ = n.n(h),
        v = n('yiKp'),
        k = n.n(v),
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
        R = n.n(L),
        x = n('9SqB'),
        O = n.n(x),
        A = n('Bg9b'),
        j = n('boUI'),
        P = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        N = g.a.hd8c22d2,
        B = g.a.c3153100,
        H = g.a.g30bc699,
        D = g.a.e585d844,
        U = g.a.cab7c6f8,
        V = g.a.af40a8ef,
        q = g.a.e96d5254,
        z = g.a.f348a395,
        Q = g.a.c3a1aebd,
        W = g.a.c273c8a6,
        J = g.a.e68b09b4,
        X = g.a.c0eb2a52,
        G = g.a.a5808125,
        Y = { Admin: B, Moderator: N },
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
          confirmButtonLabel: J,
          headline: W,
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
            b = R()(void 0 !== l ? l : (l = n('tgdH')), u).result,
            h = O()(ee),
            v = C()(h, 2),
            E = v[0],
            I = v[1],
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
            x = c.a.useCallback(
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
                  case P.PromoteModerator:
                    ;(t = Z), (a = d.a.Moderator), (l = q({ screenName: c })), (n = z({ screenName: c }))
                    break
                  case P.DemoteModerator:
                    ;(t = $), (a = d.a.Member), (l = X({ screenName: c })), (n = G({ screenName: c }))
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
            N = c.a.useCallback(
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
                        text: Q,
                        Icon: A.a,
                        onClick: function () {
                          return x({
                            communityId: o,
                            recordId: n,
                            roleAction: P.DemoteModerator,
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
                        text: D,
                        Icon: A.a,
                        onClick: function () {
                          return x({
                            communityId: o,
                            recordId: n,
                            roleAction: P.PromoteModerator,
                            screenName: r,
                            userId: l,
                          })
                        },
                      })
                  }
                return (
                  s.push({
                    behavioralEventContext: { viewType: 'view_profile' },
                    text: H({ screenName: r }),
                    Icon: j.a,
                    link: '/'.concat(r),
                  }),
                  c.a.createElement(w.a, { items: s, onCloseRequested: e, shouldCloseOnClick: !0 })
                )
              },
              [o, x, i, I, b],
            )
          if (!b || 'User' !== b.__typename || !b.legacy) return null
          var B = b.community_role,
            U = b.legacy,
            V = U.id_str,
            W = U.name,
            J = void 0 === W ? '' : W,
            te = U.profile_image_url_https,
            ne = U.protected,
            ae = U.screen_name,
            le = U.verified
          if (!ae || !te || !J) return null
          var re = Y[B]
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(T.a, {
              avatarUri: te,
              decoration: V !== r ? c.a.createElement(K.a, { renderActionMenu: N }) : void 0,
              displayMode: 'UserCompact',
              displayNameLabel: re,
              isProtected: ne,
              isVerified: le,
              name: J,
              screenName: ae,
              userId: V,
            }),
            p
              ? c.a.createElement(
                  M.a,
                  _()(
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
        _e = g.a.j43fea20,
        ve = { Moderators: 'Moderators', Members: 'Members' },
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
          r = a === ve.Moderators
        if (t && l === d.a.Admin)
          return r
            ? c.a.createElement(ye, { communityId: n, renderEmptyState: Ce })
            : c.a.createElement(oe, { communityId: n, renderEmptyState: Ce })
        var i = r ? Ee(n) : ke(n),
          o = r ? he : _e
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
        _ = n.n(h),
        v = n('KQzH'),
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
        R = n('Lsrn'),
        x = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            L()(
              L()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
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
        P = n('SNyS'),
        N = n('S+H3'),
        B = n('PU7B'),
        H = _.a.dce5e1b3,
        D = _.a.c5d8c93d,
        U = _.a.c8c7f9fc,
        V = _.a.c045c7b6,
        q = _.a.a87df2ee,
        z = _.a.dc6ce7b4,
        Q = _.a.gfca5254,
        W = _.a.bb081ea1,
        J = _.a.h6beb5fa,
        X = _.a.e3f04700,
        G = _.a.efc26607,
        Y = _.a.gfccba44,
        Z = _.a.adfcc3cd,
        $ = _.a.d0330d9c,
        ee = _.a.fd67f7c8,
        te = _.a.gc00d212,
        ne = _.a.a997eca0,
        ae = { label: _.a.c6ea29a1, header: _.a.a6e13fac, text: _.a.e538848b, confirmButtonLabel: _.a.j49e6aa2 },
        le = S.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        re = l.a.createElement(K.a, { style: le.thumbnail }),
        ie = l.a.createElement(A, { style: le.thumbnail }),
        oe = l.a.createElement(j.a, { style: le.thumbnail }),
        ce = l.a.createElement(P.a, { style: le.thumbnail }),
        se = l.a.createElement(N.a, { style: le.thumbnail }),
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
            _ = e.updateModeratorRole,
            S = d(),
            K = n.isTrue('c9s_moderation_enabled'),
            M = n.isTrue('c9s_rule_management_enabled'),
            L = n.isTrue('c9s_request_to_join_enabled'),
            R = n.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              h === b.a.NONE && K && y(u).catch(S)
            },
            [S, u, y, h, K],
          )
          var x = l.a.useCallback(
              function () {
                return K && m > 0
                  ? l.a.createElement(F.a, {
                      count: m,
                      standalone: !0,
                      truncatedCountFormatter: J,
                      unreadCountLabel: X,
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
                      truncatedCountFormatter: J,
                      unreadCountLabel: X,
                      withBorder: !1,
                    })
                  : null
              },
              [g, L],
            ),
            A = s.role,
            j = A === i.a.Admin ? H : D,
            P = A === i.a.Admin ? Z : $,
            N = !f.isExact
          return l.a.createElement(
            k.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              E.a,
              { communityId: u, screenType: 'secondaryRoot', title: j, withDetailOpen: N },
              l.a.createElement(
                C.a,
                null,
                K
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(I.b, { text: U }),
                      l.a.createElement(v.a, {
                        label: V,
                        link: '/i/communities/'.concat(u, '/moderation/reported_tweets'),
                        renderRightContent: x,
                        thumbnail: re,
                      }),
                    )
                  : null,
                L && c
                  ? l.a.createElement(v.a, {
                      label: Y,
                      link: '/i/communities/'.concat(u, '/moderation/member_requests'),
                      renderRightContent: O,
                      thumbnail: ie,
                    })
                  : null,
                l.a.createElement(I.b, { text: q }),
                l.a.createElement(v.a, {
                  description: G({ memberCount: s.member_count }),
                  label: z,
                  link: '/i/communities/'.concat(u, '/tools/members'),
                  thumbnail: se,
                }),
                M
                  ? l.a.createElement(v.a, {
                      description: P,
                      label: Q,
                      link: '/i/communities/'.concat(u, '/tools/rules'),
                      thumbnail: ue,
                    })
                  : null,
                A === i.a.Admin
                  ? l.a.createElement(v.a, {
                      description: ee,
                      label: W,
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
                A === i.a.Moderator && R
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
                            _(u, { userId: a, role: i.a.Member }).then(function () {
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
          return Qt
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
        _ = n('eSoz'),
        v = n('rxPX'),
        k = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { community: h.a, fetchStatus: h.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: _.c.fetchOneIfNeeded,
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
        R = (n('1t7P'), n('jQ/y'), n('ddV6')),
        x = n.n(R),
        O = n('1YZw'),
        A = n('uDfI'),
        j = n('MWbm'),
        P = n('/yvb'),
        N = n('rHpw'),
        B = (n('enFi'), n('jAXQ')),
        H = n.n(B),
        D = (n('7x/C'), n('JtPf'), n('849X'), n('TJCb'), n('9SqB')),
        U = n.n(D),
        V = void 0 !== a ? a : (a = n('Dm5+')),
        q = void 0 !== l ? l : (l = n('C2fM')),
        z = I.a.i22835dd,
        Q = I.a.cb59a0fd,
        W = I.a.ic7db4ea,
        J = void 0 !== r ? r : (r = n('PMbW')),
        X = function (e) {
          var t = e.communityId,
            n = e.communityJoinRequestActions,
            a = e.userId,
            l = H()(J, n),
            r = l.join_request_approve_action_result,
            i = l.join_request_deny_action_result,
            o = (function () {
              var e = U()(V),
                t = x()(e, 2),
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
            c = x()(o, 2),
            s = c[0],
            u = c[1],
            m = (function () {
              var e = U()(q),
                t = x()(e, 2),
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
            d = x()(m, 2),
            y = d[0],
            g = d[1],
            f = Object(A.c)(),
            b = u || g,
            h = 'CommunityJoinRequestDenyAction' === (null == i ? void 0 : i.__typename),
            _ = 'CommunityJoinRequestApproveAction' === (null == r ? void 0 : r.__typename),
            v = p.a.useCallback(
              function () {
                y({ communityId: t, userId: a }).catch(function () {
                  f(Object(O.b)({ text: W }))
                })
              },
              [f, y, t, a],
            ),
            k = p.a.useCallback(
              function () {
                s({ communityId: t, userId: a }).catch(function () {
                  f(Object(O.b)({ text: W }))
                })
              },
              [f, s, t, a],
            )
          return p.a.createElement(
            j.a,
            { style: G.buttons },
            p.a.createElement(P.a, { disabled: !h || b, onPress: v, style: G.button, type: 'destructiveOutlined' }, Q),
            p.a.createElement(P.a, { disabled: !_ || b, onPress: k, style: G.button, type: 'primaryOutlined' }, z),
          )
        },
        G = N.a.create(function (e) {
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
        ie = I.a.d7f13fb8,
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
            n = H()(re, t),
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
            _ = (function (e) {
              var t = e.blocking,
                n = e.muting
              return t ? se.blocking : n ? se.muting : void 0
            })({ blocking: c, muting: d }),
            v = p.a.createElement(
              j.a,
              null,
              _ && p.a.createElement($.b, { color: 'red500', style: ye.bottomText }, _),
              p.a.createElement(X, { communityId: a, communityJoinRequestActions: n.actions, userId: i }),
            )
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(te.a, {
              avatarUri: g,
              bottomControl: v,
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
        ye = N.a.create(function (e) {
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
        _e = function (e) {
          return e.id
        },
        ve = function (e) {
          return p.a.createElement(de, { communityJoinRequest: e })
        },
        ke = function () {
          return p.a.createElement(M.a, { header: fe, message: be })
        },
        Ee = function (e) {
          var t = e.communityJoinRequests,
            n = e.fetchNext,
            a = H()(he, t).items
          return p.a.createElement(L.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: _e,
            items: a,
            noItemsRenderer: ke,
            onNearEnd: n,
            renderer: ve,
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
        Re = n('/de5'),
        xe = n('yiKp'),
        Oe = n.n(xe),
        Ae = (n('2G9S'), n('uFXj'), n('z84I'), n('3zvM')),
        je = n('lMB6'),
        Pe = Object(Ae.e)({ namespace: 'communityReports' }),
        Ne = je.a.register(Pe),
        Be = n('G6rE'),
        He = function (e, t) {
          var n,
            a = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (a ? Ne.selectMany(e, a) : []).map(function (t) {
            var n = t.user
            return Oe()(Oe()({}, t), {}, { reporter: Be.e.select(e, n) })
          })
        },
        De = Object(v.a)().propsFromState(function () {
          return { reports: He }
        }),
        Ue = n('855f'),
        Ve = n('cHvH'),
        qe = n('5mJL'),
        ze = n('efqG'),
        Qe = n('21zW'),
        We = function (e) {
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
        Je = function (e) {
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
                    style: a > N.a.theme.breakpoints.small ? Ge.userCell : void 0,
                    userId: l.id_str,
                  }),
                  p.a.createElement(
                    qe.a,
                    { avatarCell: null },
                    p.a.createElement($.b, { color: 'gray700', size: 'subtext2', style: Ge.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        Xe = De(function (e) {
          var t = p.a.useState(!1),
            n = x()(t, 2),
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
              ze.a,
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
                      return p.a.createElement(Je, { key: e.id_str, report: e, withBottomBorder: t < r.length - 1 })
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
                We(o),
              ),
            ),
            p.a.createElement(Qe.a, null),
            p.a.createElement(ne.a, { timestamp: c }),
          )
        }),
        Ge = N.a.create(function (e) {
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
        Ze = Object(Ae.e)({ namespace: 'communityCases' }),
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
        rt = function (e, t) {
          var n = at(e, t)
          return !!n && Object(_.i)(e, n)
        },
        it = Object(v.a)()
          .propsFromState(function () {
            return { tweet: at, tweetCase: lt, disableRemoveFromCommunity: rt }
          })
          .propsFromActions(function () {
            return { keep: tt.keepTweet, dismiss: tt.dismissTweet }
          }),
        ot = n('b5s6'),
        ct = n('mjJ+'),
        st = n('IG7M'),
        ut = n('boUI'),
        mt = n('zIWA'),
        dt = n('fz3c'),
        yt = (n('yH/f'), n('n5fo')),
        pt = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        gt = I.a.ad10c66d,
        ft = I.a.c6caed9c,
        bt = function (e) {
          return p.a.createElement($.b, null, e)
        },
        ht = function (e) {
          var t = e.screenName
          switch (e.type) {
            case pt.Hidden:
              var n = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                a = [{ label: bt(n), decoration: vt }]
              return p.a.createElement(Z.a, { accessibilityLabel: gt, containerStyle: _t.container, items: a })
            case pt.Kept:
              var l = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                r = [{ label: bt(l), decoration: kt }]
              return p.a.createElement(Z.a, { accessibilityLabel: ft, containerStyle: _t.container, items: r })
            default:
              return null
          }
        },
        _t = N.a.create(function (e) {
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
        vt = p.a.createElement(yt.a, { style: _t.icon }),
        kt = p.a.createElement(ae.a, { style: _t.icon }),
        Et = { page: 'reported_tweets', component: 'tweet' },
        Ct = { viewType: 'tweet_moderation_case' },
        St = I.a.f1d9930c,
        Ft = I.a.a219e217,
        It = I.a.fa524057,
        wt = I.a.g30bc699,
        Tt = I.a.f0306107,
        Kt = I.a.b99364a5,
        Mt = it(function (e) {
          var t,
            n = p.a.useContext(g.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            l = e.keep,
            r = e.tweet,
            i = e.tweetCase,
            o = e.tweetId,
            c = null == r || null === (t = r.user) || void 0 === t ? void 0 : t.screen_name,
            s = p.a.useCallback(
              function (t) {
                if (r && c) {
                  var a = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: wt({ screenName: c }),
                      Icon: ut.a,
                      link: '/'.concat(c),
                    },
                    {
                      text: Tt,
                      Icon: mt.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(dt.a.Tweet, '/').concat(r.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: Et },
                      },
                      onClick: function () {
                        t()
                      },
                    },
                  ]
                  return (
                    n &&
                      !e.disableRemoveFromCommunity &&
                      a.push({
                        text: Kt({ screenName: c }),
                        Icon: le.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(dt.a.RemoveCommunityMember, '/').concat(r.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Et },
                        },
                        onClick: function () {
                          t()
                        },
                      }),
                    p.a.createElement(ct.a, { items: a, onCloseRequested: t })
                  )
                }
                return null
              },
              [r, c, n, e.disableRemoveFromCommunity],
            ),
            u = function () {
              l(o)
            },
            m = function () {
              a(o)
            }
          if (c && (null == r ? void 0 : r.reportingVisibility) === dt.b.HiddenCommunityTweet)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(ht, { screenName: c, type: pt.Hidden }),
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
              p.a.createElement(ht, { screenName: c, type: pt.Kept }),
              p.a.createElement(ee.a, null),
            )
          if (!i) return null
          return p.a.createElement(
            f.a,
            { behavioralEventContext: Ct },
            p.a.createElement(
              j.a,
              { style: Lt.container },
              p.a.createElement(
                j.a,
                { style: Lt.reportsBar },
                p.a.createElement(Xe, { tweetCase: i }),
                p.a.createElement(st.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: s,
                  style: Lt.menu,
                }),
              ),
              p.a.createElement(ot.a, { tweetId: o }),
              r
                ? p.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= N.a.theme.breakpoints.small
                    return p.a.createElement(
                      j.a,
                      { style: [Lt.buttons, t && Lt.buttonsMobile] },
                      p.a.createElement(
                        P.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(dt.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Oe()(Oe()({}, Et), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Lt.button, t && Lt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        St,
                      ),
                      p.a.createElement(
                        P.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [Lt.button, t && Lt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        It,
                      ),
                    )
                  })
                : p.a.createElement(
                    j.a,
                    { style: Lt.buttons },
                    p.a.createElement(
                      P.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: m,
                        style: Lt.button,
                        type: 'primaryOutlined',
                      },
                      Ft,
                    ),
                  ),
            ),
            p.a.createElement(ee.a, null),
          )
        }),
        Lt = N.a.create(function (e) {
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
        Rt = n('hqKg'),
        xt = n('wAC9'),
        Ot = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        At = function () {
          return Object(Rt.createSelector)(Ot, function (e) {
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
        jt = Object(v.a)()
          .propsFromState(function () {
            return { sliceModule: At() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Pt = n('FS1z'),
        Nt = I.a.c045c7b6,
        Bt = I.a.dffb0774,
        Ht = I.a.cbb2a93c,
        Dt = jt(function (e) {
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
              ? p.a.createElement(Pt.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return p.a.createElement(M.a, { header: Bt, message: Ht })
                  },
                  renderer: function (e) {
                    return p.a.createElement(Mt, { tweetId: e })
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
        Ut = ['analytics', 'community'],
        Vt = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        qt = { viewType: 'community' }
      function zt(e) {
        var t = p.a.useContext(g.a).featureSwitches,
          n = (e.analytics, e.community),
          a = d()(e, Ut),
          l = a.match.path,
          r = t.isTrue('c9s_request_to_join_enabled')
        return Object(b.c)(n.role)
          ? p.a.createElement(
              f.a,
              { behavioralEventContext: qt },
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
                p.a.createElement(Se.b, null, p.a.createElement(Re.b, a)),
              ),
            )
          : p.a.createElement(Re.b, a)
      }
      function Qt(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          r = d()(e, Vt),
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
      t.default = E(Qt)
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
          _ = e.withBottomBorder,
          v = e.withDetailOpen,
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
            withBottomBorder: _,
            withDetailOpen: v,
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
          return P
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
        _ = n('5FtR'),
        v = n('OwKm'),
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
        R = h.a.fbb0ed91,
        x = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        j = h.a.c3a0d44e
      function P(e) {
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
          P = w[0],
          B = w[1],
          H = i.a.useState(''),
          D = l()(H, 2),
          U = D[0],
          V = D[1],
          q = i.a.useState(!1),
          z = l()(q, 2),
          Q = z[0],
          W = z[1],
          J = i.a.useState(''),
          X = l()(J, 2),
          G = X[0],
          Y = X[1],
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
              B(n), V(t), W(a)
            },
            [B, V, W],
          ),
          oe = i.a.useCallback(
            function () {
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), W(!1), []
                },
              })
              'string' == typeof d &&
                c(p, { ruleId: d, name: P, description: U })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, P, U, d, c, s, r],
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
        if (!d || !m) return i.a.createElement(_.a, { to: '/i/communities/'.concat(p, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = i.a.createElement(
            C.a,
            {
              disabled: !Q,
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
                { style: N.delete },
                i.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: R,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          pe = de ? i.a.createElement(E.a, { style: N.callout }, i.a.createElement(F.a, { text: L })) : void 0,
          ge = ee
            ? i.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: x,
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
          i.a.createElement(v.a, { description: se || '', errorText: G, name: ue, onChange: ie }),
          ye,
          ge,
          fe,
        )
      }
      t.default = p(P)
      var N = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return P
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
        _ = n('pXBW'),
        v = n('6/RC'),
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
        R = n('Ud88'),
        x = n.n(R),
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
                    if (!(e instanceof _.a)) throw e
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
        P = function (e, t) {
          if (v.canUseDOM)
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
              o = x()(),
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
                    return e instanceof _.a
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
        _ = n('AfjF'),
        v = n('/yvb'),
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
          R = M[1],
          x = i.a.useState(!1),
          O = l()(x, 2),
          A = O[0],
          j = O[1],
          P = i.a.useState(!1),
          N = l()(P, 2),
          B = N[0],
          H = N[1],
          D = i.a.useState(''),
          U = l()(D, 2),
          V = U[0],
          q = U[1],
          z = i.a.useState(!1),
          Q = l()(z, 2),
          W = Q[0],
          J = Q[1],
          X = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              q(''), T(n), R(t), j(a)
            },
            [T, R, j],
          ),
          G = i.a.useCallback(
            function () {
              H(!0)
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : S
                  return q(n), j(!1), []
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
              u ? J(!0) : G()
            },
            [G, u],
          ),
          Z = i.a.createElement(v.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
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
          te = W
            ? i.a.createElement(_.a, {
                onCancel: function () {
                  J(!1)
                },
                onConfirm: function () {
                  n(), G(), J(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : i.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: E },
              i.a.createElement(h.a, { description: '', errorText: V, name: '', onChange: X }),
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
              requestToJoin: s.c.requestToJoin,
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        g = n('MDbM'),
        f = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        _ = n('5FtR'),
        v = n('t62R'),
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
            p = e.match,
            b = e.requestToJoin,
            h = p.params.communityId,
            E = null === (t = y.state) || void 0 === t ? void 0 : t.joinRequestRequired
          l.a.useEffect(function () {
            h && !n && s !== g.a.LOADED && c(h).catch(a())
          })
          var w,
            T = E ? S : C,
            M = function () {
              if (n) {
                var e = n.id_str
                ;(E ? b : d)(e)
                  .then(function () {
                    u.push('/i/communities/'.concat(e))
                  })
                  .catch(a())
              }
            }
          if (n) {
            var L = n.name,
              R = n.rules,
              x = n.theme
            return R && R.length && !m
              ? l.a.createElement(
                  r.a,
                  { behavioralEventContext: I },
                  l.a.createElement(
                    f.b,
                    {
                      behavioralEventViewType: 'rules',
                      history: u,
                      rightControl: l.a.createElement(k.a, { onPress: M, size: 'small', type: 'brandFilled' }, T),
                      title: Object(o.a)({ communityName: L }),
                    },
                    l.a.createElement(i.b, {
                      badgeStyle: K.badgeStyle,
                      headerContainerStyle: K.containerStyle,
                      headerExplanationStyle: K.headerExplanationStyle,
                      heading:
                        ((w = L), l.a.createElement(v.b, { size: 'title4', weight: 'bold' }, F({ communityName: w }))),
                      rules: R,
                      theme: x,
                    }),
                  ),
                )
              : l.a.createElement(_.a, { to: '/i/communities/'.concat(n.id_str) })
          }
          return s === g.a.LOADED ? l.a.createElement(_.a, { to: '/' }) : null
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
            concreteType: 'UserResults',
            kind: 'LinkedField',
            name: 'creator_results',
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
        type: 'Community',
        abstractKey: null,
        hash: 'dccf59f4f7179587525bc0082363441a',
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
          return K
        })
      n('vrRf')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('+Kfv'),
        i = n('es0u'),
        o = n('LgBi'),
        c = n('UZ0O'),
        s = n('1Idg'),
        u = n('eSoz'),
        m = n('rxPX'),
        d = n('0KEI'),
        y = Object(m.a)()
          .propsFromState(function () {
            return { community: s.a, communityId: s.c, screenName: s.i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        p = n('3XMw'),
        g = n.n(p),
        f = n('gDCe'),
        b = n('yoO3'),
        h = n('VS6U'),
        _ = n('k/OQ'),
        v = n('krnS'),
        k = n('zCf4'),
        E = g.a.h5245afa,
        C = g.a.dc6ce7b4,
        S = g.a.f8321d82,
        F = g.a.ga2aa43c,
        I = { viewType: 'community' },
        w = { viewType: 'all' },
        T = { viewType: 'moderators' },
        K = l.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            s = e.fetchCommunityIfNeeded,
            u = e.history,
            m = e.location
          l.a.useEffect(
            function () {
              n && s(n).catch(a())
            },
            [n, a, s],
          )
          var d = (null == m ? void 0 : m.pathname) && m.pathname.indexOf('members') > 0,
            y = d ? C : F,
            p = l.a.useMemo(
              function () {
                return n
                  ? [
                      { to: { pathname: '/i/communities/'.concat(n, '/members'), state: m.state }, label: S, key: S },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: m.state },
                        label: F,
                        key: F,
                      },
                    ]
                  : []
              },
              [n, m.state],
            ),
            g = n
              ? l.a.createElement(
                  k.d,
                  null,
                  l.a.createElement(
                    k.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                    l.a.createElement(
                      r.a,
                      { behavioralEventContext: w },
                      l.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Members,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                  l.a.createElement(
                    k.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                    l.a.createElement(
                      r.a,
                      { behavioralEventContext: T },
                      l.a.createElement(f.a, { community: t }),
                      l.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Moderators,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                )
              : null,
            K = l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(c.a, { community: t, communityId: n }),
              l.a.createElement(_.a, { accessibilityLabel: y, links: p }),
            )
          return l.a.createElement(
            r.a,
            { behavioralEventContext: I },
            l.a.createElement(
              b.a,
              { behavioralEventViewType: 'members' },
              l.a.createElement(h.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: E,
                history: u,
                primaryContent: g,
                rightControl: d && n ? l.a.createElement(o.a, { communityId: n }) : null,
                secondaryBar: K,
                sidebarContent: l.a.createElement(i.a, null),
                title: C,
              }),
            ),
          )
        }),
        M = y(K)
      t.default = M
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesScreen', function () {
          return $e
        })
      var a,
        l,
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
        b = (n('2G9S'), n('vrRf'), n('ERkP')),
        h = n.n(b),
        _ = n('+Kfv'),
        v = n('es0u'),
        k = n('1Idg'),
        E = n('li/m'),
        C = n('G6rE'),
        S = n('rxPX'),
        F = n('0KEI'),
        I = function (e, t) {
          var n = k.i(e, t)
          if (n) return C.e.selectByScreenName(e, n)
        },
        w = Object(S.a)()
          .propsFromState(function () {
            return { hasCommunityMemberships: E.d, screenName: k.i, user: I }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: C.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        T = n('3XMw'),
        K = n.n(T),
        M = n('5oT/'),
        L = n('/yvb'),
        R = n('rHpw'),
        x = (n('enFi'), n('jAXQ')),
        O = n.n(x),
        A = K.a.a226497c,
        j = h.a.memo(function (e) {
          return 'CommunityCreateAction' !== O()(void 0 !== a ? a : (a = n('zum0')), e.createActionResult).__typename
            ? null
            : h.a.createElement(L.a, {
                icon: h.a.createElement(M.a, { accessibilityLabel: A, style: P.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        P = R.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        N = h.a.memo(j),
        B = n('Fr3L'),
        H = n('IAZG'),
        D = { context: 'CommunityCreateButton' },
        U = void 0 !== l ? l : (l = n('S91Q')),
        V = function (e) {
          var t,
            n =
              null === (t = Object(H.a)(U, {}, { fetchPolicy: 'store-and-network' }).viewer) || void 0 === t
                ? void 0
                : t.create_community_action_result
          return n ? h.a.createElement(N, { createActionResult: n }) : null
        },
        q = function (e) {
          return h.a.createElement(B.a, { errorConfig: D }, h.a.createElement(V, null))
        },
        z = h.a.memo(q),
        Q = n('GOQE'),
        W = (n('z84I'), n('M+/F'), n('yiKp')),
        J = n.n(W),
        X = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        G = n('YeIG'),
        Y = 'community-thumbnail-image',
        Z = 'community-thumbnail-name-container',
        $ = n('MWbm'),
        ee = n('X00g'),
        te = n('htQn'),
        ne = n('9Xij'),
        ae = n('TIdA'),
        le = n('A91F'),
        re = n('t62R'),
        ie = { type: 'serversideContextKey', serversideContextType: 'community' },
        oe = R.a.create(function (e) {
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
              width: 'calc(('.concat(R.a.theme.spaces.space36, ' * 3) + ').concat(R.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        ce = function (e) {
          var t = h.a.useContext(X.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            l = n.media,
            r = n.name,
            i = n.theme,
            o = h.a.useMemo(
              function () {
                return { clientEntity: J()(J()({}, ie), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(G.a)(null == l ? void 0 : l.image) || !r) return null
          var c = null == l ? void 0 : l.image,
            s = null == l ? void 0 : l.crop,
            u = R.a.theme.aspectRatios.communityBanner,
            m = t ? ee.a.getCommunityBackgroundColor(i) : R.a.theme.colors.translucentBlack77
          return c
            ? h.a.createElement(
                _.a,
                { behavioralEventContext: o },
                h.a.createElement(
                  te.a,
                  { link: '/i/communities/'.concat(a), style: oe.root },
                  h.a.createElement(
                    $.a,
                    { style: oe.container },
                    h.a.createElement(
                      ne.a,
                      { ratio: u },
                      h.a.createElement(ae.a, {
                        accessibilityLabel: '',
                        aspectMode: le.a.exact(u),
                        backgroundColor: R.a.theme.colors.gray300,
                        cropCandidates: s,
                        image: c,
                        testID: Y,
                      }),
                    ),
                    h.a.createElement(
                      $.a,
                      { style: [oe.name, { backgroundColor: m }], testID: Z },
                      h.a.createElement(
                        re.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        r.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        se = n('eSoz'),
        ue = n('o3oN'),
        me = function (e) {
          var t = Object(ue.c)(e)
          return se.c.selectMany(e, t)
        },
        de = Object(S.a)()
          .propsFromState(function () {
            return { communities: me, fetchStatus: ue.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: ue.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        ye = n('kGix'),
        pe = n('6iuV'),
        ge = n('rC8y'),
        fe = K.a.d228a9a0,
        be = h.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            l = e.fetchStatus,
            r = e.location.pathname
          h.a.useEffect(
            function () {
              l === ye.a.NONE && a().catch(n())
            },
            [n, a, l],
          )
          var i = h.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return h.a.createElement(ce, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(G.a)(t)
            ? null
            : h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(pe.a, { style: [he.paddingHorizontal, he.bottomBorder] }, i),
                t.length > 10 &&
                  h.a.createElement(
                    $.a,
                    { style: he.bottomBorder },
                    h.a.createElement(ge.a, { link: '/'.concat(r, '/memberships'), text: fe }),
                  ),
              )
        }),
        he = R.a.create(function (e) {
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
        _e = de(be),
        ve = n('WpDa'),
        ke = n('ZNT5'),
        Ee = Object(ke.a)({
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
          formatResponse: ve.a,
        }),
        Ce = n('OUEC'),
        Se = n('dwig'),
        Fe = n('0+qk'),
        Ie = n('oQhu'),
        we = n('7BdX'),
        Te = n('fTQJ'),
        Ke = n('QRqA'),
        Me = n('FIs5'),
        Le = n('mw9i'),
        Re = K.a.c63602d3,
        xe = K.a.d7346631,
        Oe = K.a.fbd12fea,
        Ae = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(u()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              f()(
                u()(e),
                '_getModule',
                Object(Ie.a)(function () {
                  return Ee
                }),
              ),
              f()(u()(e), '_renderEmptyTimeline', function () {
                return h.a.createElement(Me.a, { header: xe, message: Oe })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    a = e.isLoggedInUser,
                    l = e.location,
                    r = this._getModule(),
                    i = this._c9sParticipationEnabled && t ? h.a.createElement(Fe.a, { history: n }) : null
                  return a && r
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(Ke.a, null),
                        h.a.createElement(
                          Se.a,
                          { container: Le.a, fab: i },
                          h.a.createElement(_e, { location: l }),
                          h.a.createElement(Te.a, {
                            entryConfiguration: Ce.a,
                            module: r,
                            prerollDisplayLocation: we.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: Re,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      f()(Ae, 'contextType', X.a)
      var je = Ae,
        Pe = n('hqKg'),
        Ne = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Be = function () {
          return Object(Pe.createSelector)(Ne, function (e) {
            return e
              ? (function (e) {
                  return Object(ke.a)({
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
                    formatResponse: ve.a,
                  })
                })(e)
              : void 0
          })
        },
        He = Object(S.a)()
          .propsFromState(function () {
            return { urtModule: Be() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        De = n('yoO3'),
        Ue = K.a.c63602d3,
        Ve = K.a.d7346631,
        qe = K.a.hb01fe46,
        ze = He(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
              return (
                (e = t.call.apply(t, [this].concat(l))),
                f()(u()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? h.a.createElement(Me.a, { header: Ve, message: qe }) : null
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.urtModule
                    return e
                      ? h.a.createElement(
                          De.a,
                          { behavioralEventViewType: 'all' },
                          h.a.createElement(Te.a, {
                            entryConfiguration: Ce.a,
                            module: e,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyState,
                            title: Ue,
                          }),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(h.a.Component),
        ),
        Qe = n('5FtR'),
        We = n('Y6L+'),
        Je = n('VS6U'),
        Xe = n('zCf4'),
        Ge = K.a.h02a6fe5,
        Ye = K.a.c63602d3,
        Ze = { viewType: 'communities' },
        $e = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(u()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  a = t.history,
                  l = t.location,
                  r = t.user,
                  i = e._isLoggedInUser()
                return h.a.createElement(
                  Xe.d,
                  null,
                  h.a.createElement(
                    Xe.b,
                    { exact: !0, path: '/'.concat(We.J, '/communities') },
                    h.a.createElement(je, { hasCommunityMemberships: n, history: a, isLoggedInUser: i, location: l }),
                  ),
                  h.a.createElement(
                    Xe.b,
                    { exact: !0, path: '/'.concat(We.J, '/communities/memberships') },
                    h.a.createElement(ze, { isLoggedInUser: i, user: r }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  l = n.fetchOneUserByScreenNameIfNeeded,
                  r = n.screenName
                r && l(r).catch(a(Q.a))
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  var e = this.props.history
                  if (this._isLoggedInUser()) {
                    var t = this._isMembershipsView() ? Ye : Ge
                    return h.a.createElement(
                      _.a,
                      { behavioralEventContext: Ze },
                      h.a.createElement(Je.a, {
                        backLocation: '/',
                        history: e,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: h.a.createElement(z, null),
                        sidebarContent: h.a.createElement(v.a, null),
                        title: t,
                      }),
                    )
                  }
                  return h.a.createElement(Qe.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      f()($e, 'contextType', X.a)
      var et = w($e)
      t.default = et
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
        _ = (n('2G9S'), n('ho0z'), n('I4+6')),
        v = n('cm6r'),
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
                    o = _.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    C.a,
                    { style: [w.container, r] },
                    p.a.createElement(
                      v.a,
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
          return at
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
        _ = n('JAeQ'),
        v = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        k = Object(v.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(178)]).then(n.bind(null, 'P68U'))
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
        R = b.a.cfd2f35d,
        x = b.a.j35d3ad6,
        O = b.a.f1e8fb21,
        A = b.a.fc2a5c92,
        j = b.a.e405ec21
      var P,
        N,
        B,
        H = S.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        D = g(function (e) {
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
            v = l.a.useState(!1),
            P = s()(v, 2),
            N = P[0],
            B = P[1],
            D = l.a.useState(!1),
            U = s()(D, 2),
            V = U[0],
            q = U[1],
            z = l.a.useState(!1),
            Q = s()(z, 2),
            W = Q[0],
            J = Q[1],
            X = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return q(!1), J(Boolean(e)), e ? t(n, e) : y(n)
            },
            $ = X ? l.a.createElement(F.a, { accessibilityLabel: K, aspectMode: I.a.exact(G), image: X }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            N
              ? l.a.createElement(
                  C.a,
                  { style: H.error },
                  l.a.createElement(w.a, { Icon: h.a, headline: A, text: N, type: 'danger' }),
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
            W && o
              ? l.a.createElement(_.a, {
                  aspectRatio: G,
                  media: o,
                  onCancel: Z,
                  onCropDone: function (e) {
                    J(!1),
                      c
                        ? (q(!0),
                          r(n, { mediaId: c, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(j) : Y(e)
                          }))
                        : B(j)
                  },
                })
              : null,
            f
              ? l.a.createElement(T.a, {
                  cancelButtonLabel: R,
                  confirmButtonLabel: x,
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
        q = n('mWs5'),
        z = n('3JAx'),
        Q = b.a.f713fbd1,
        W = [
          { label: b.a.fd00a769, value: 'Public', helpText: b.a.d0784408 },
          { label: b.a.ce0523a8, value: 'Closed', helpText: b.a.ccfafe8c },
        ],
        J = U(function (e) {
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
              q.a,
              { communityId: i, onSubmit: d, submitDisabled: !y, title: Q },
              l.a.createElement(
                C.a,
                { style: X.root },
                l.a.createElement(z.a, {
                  name: 'membershipSetting',
                  onChange: function (e, t) {
                    m(t)
                  },
                  options: W,
                  value: u,
                }),
              ),
            ),
          )
        }),
        X = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        G = n('n0Rl'),
        Y = n('k49u'),
        Z = (n('849X'), n('TJCb'), n('uDfI')),
        $ = (n('yH/f'), n('I/KZ')),
        ee = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        te = (n('enFi'), n('9SqB')),
        ne = n.n(te),
        ae = void 0 !== P ? P : (P = n('tFuX')),
        le = void 0 !== N ? N : (N = n('pd/v')),
        re = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case $.a.Open:
                t = { __typename: $.a.Open }
                break
              case $.a.Restricted:
                t = {
                  __typename: $.a.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        ie = n('zCf4'),
        oe = n('Hsf0'),
        ce = n.n(oe),
        se = void 0 !== B ? B : (B = n('tnnC'))
      var ue,
        me,
        de = n('jAXQ'),
        ye = n.n(de),
        pe = b.a.f713fbd1,
        ge = b.a.c5d1634d,
        fe = b.a.b983f9e0,
        be = b.a.fc2a5c92,
        he = b.a.a1c93d73,
        _e = void 0 !== ue ? ue : (ue = n('1tGk')),
        ve = function (e) {
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
            _,
            v = e.community,
            k = ye()(_e, v),
            E = k.membership_settings,
            S = k.rest_id,
            F = (function (e) {
              var t = ce()(se, e)
              switch (t.__typename) {
                case $.a.Restricted:
                  return { access: $.a.Restricted, invitesPolicy: t.invites_policy }
                case $.a.Open:
                  return { access: $.a.Open, invitesPolicy: $.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            I = l.a.useState(),
            K = s()(I, 2),
            M = K[0],
            L = K[1],
            R =
              ((t = ne()(ae)),
              (n = s()(t, 2)),
              (a = n[0]),
              (r = n[1]),
              (i = ne()(le)),
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
                        r === $.a.Open
                          ? a({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var t = re(e.community_membership_settings_open_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                          : r === $.a.Restricted &&
                            c({
                              variables: {
                                communityId: e,
                                restrictedMembershipSettings: { invites_policy: i, join_approval_policy: ee.Moderator },
                              },
                              onCompleted: function (e) {
                                var t = re(e.community_membership_settings_restricted_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                      })
                },
                [a, c, m, r, u],
              )),
            x = Object(ie.f)(),
            O = l.a.useState(),
            A = s()(O, 2),
            j = A[0],
            P = A[1],
            N = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            B = Object($.e)(F),
            H = s()(B, 2),
            D = H[0],
            U = H[1],
            V = l.a.useCallback(
              function () {
                var e = N({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : he
                    return P(n), []
                  },
                })
                R(S, D)
                  .then(function () {
                    x.goBack({ backLocation: '/i/communities/'.concat(S, '/tools/settings') })
                  })
                  .catch(e)
              },
              [S, N, x, D, R],
            ),
            z = l.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === $.a.Restricted && t.access === $.a.Open) return b.a.daedd9fa
                })(F, D)
                e ? L(e) : V()
              },
              [F, D, V],
            ),
            Q = l.a.useCallback(function () {
              return L(void 0)
            }, []),
            W =
              ((g = D),
              (f = (p = F).access !== g.access),
              (_ = p.access === $.a.Restricted && p.invitesPolicy !== g.invitesPolicy),
              !(f || _)),
            J = j
              ? l.a.createElement(
                  C.a,
                  { style: ke.error },
                  l.a.createElement(w.a, { Icon: h.a, headline: be, text: j, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            q.a,
            { communityId: S, onSubmit: z, submitDisabled: W, title: pe },
            J,
            l.a.createElement($.d, { setters: U, state: D }),
            M &&
              l.a.createElement(T.a, {
                confirmButtonLabel: ge,
                confirmButtonType: 'primary',
                headline: fe,
                onCancel: Q,
                onConfirm: V,
                text: M,
              }),
          )
        },
        ke = S.a.create(function (e) {
          return { error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ee = n('v//M'),
        Ce = void 0 !== me ? me : (me = n('PbB6')),
        Se = Object(G.b)(Ce, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Fe = function (e) {
          var t = { communityId: e.communityId }
          return l.a.createElement(Se, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                r = null == t ? void 0 : t.community
              return l.a.createElement(Ee.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return r ? l.a.createElement(ve, { community: r }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ie = n('ROT1'),
        we = Object(i.a)()
          .propsFromActions(function () {
            return {
              editName: d.c.editName,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Te = b.a.h3c0f1a2,
        Ke = b.a.fc2a5c92,
        Me = b.a.cb5e6510
      var Le = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Re = we(function (e) {
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
            _ = s()(b, 2),
            v = _[0],
            k = _[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Me
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
              q.a,
              { communityId: i, onSubmit: E, submitDisabled: g, title: Te },
              v
                ? l.a.createElement(
                    C.a,
                    { style: Le.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: Ke, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ie.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        xe = n('U0Qk'),
        Oe = Object(i.a)()
          .propsFromActions(function () {
            return {
              editPurpose: d.c.editPurpose,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        Ae = b.a.a895549f,
        je = b.a.fc2a5c92,
        Pe = b.a.ced22929
      var Ne = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Be = Oe(function (e) {
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
            _ = s()(b, 2),
            v = _[0],
            k = _[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Pe
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
              q.a,
              { communityId: o, onSubmit: E, submitDisabled: g, title: Ae },
              v
                ? l.a.createElement(
                    C.a,
                    { style: Ne.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: je, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(xe.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        He = n('Ig1G'),
        De = n('x0mb'),
        Ue = n('5FtR'),
        Ve = n('t62R'),
        qe = n('X00g'),
        ze = n('6vad'),
        Qe = n('csss'),
        We = n('0yYu'),
        Je = b.a.bb081ea1,
        Xe = b.a.h3e55b40,
        Ge = b.a.j8af8ea9,
        Ye = b.a.d5f01115,
        Ze = b.a.c3c04b70,
        $e = { Closed: b.a.ce0523a8, Public: b.a.fd00a769 },
        et = b.a.f4a98e9e,
        tt = b.a.f713fbd1,
        nt = function (e) {
          var t = e.children
          return l.a.createElement(Ve.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        at = function (e) {
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
            _ = g.isTrue('c9s_membership_settings_enabled'),
            v = g.isTrue('c9s_edit_community_banner_enabled'),
            k = g.isTrue('c9s_edit_community_theme_enabled'),
            E = a.url,
            C = l.a.useMemo(
              function () {
                return _ ? (d.__typename === $.a.Open ? $e.Public : $e.Closed) : $e[i]
              },
              [i, _, d.__typename],
            ),
            S = Object(He.d)(t),
            F = qe.a.getCommunityThemeDisplayName(S),
            I = qe.a.getCommunityBackgroundColor(p)
          return l.a.createElement(
            ie.d,
            null,
            f
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(Re, { community: t, history: n }),
                )
              : null,
            b
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(Be, { community: t, history: n }),
                )
              : null,
            _
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Fe, { communityId: s }),
                )
              : h
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(J, { community: t, history: n }),
                )
              : null,
            l.a.createElement(
              ie.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                V.a,
                null,
                l.a.createElement(
                  q.a,
                  { communityId: s, screenType: 'primaryDetail', title: Je },
                  v ? l.a.createElement(D, { communityId: s, hasCustomMedia: c, localMediaId: u, media: m }) : null,
                  l.a.createElement(ze.b, { text: et }),
                  l.a.createElement(Qe.a, {
                    description: l.a.createElement(nt, null, y),
                    label: Xe,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(Qe.a, {
                    description: o ? l.a.createElement(nt, null, o) : void 0,
                    label: Ye,
                    link: b ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(Qe.a, {
                        description: l.a.createElement(nt, null, F),
                        label: Ze,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(De.a, { style: [{ color: I }, lt.themeIcon] })
                        },
                      })
                    : null,
                  _ || h
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(We.a, null),
                        l.a.createElement(ze.b, { text: tt }),
                        l.a.createElement(Qe.a, {
                          description: l.a.createElement(nt, null, C),
                          label: Ge,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            l.a.createElement(ie.b, null, l.a.createElement(Ue.a, { to: ''.concat(E, '/') })),
          )
        },
        lt =
          ((t.default = o(at)),
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
        _ = n('rHpw'),
        v = p.a.dbda7beb,
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
          _ = y[1],
          I = i.a.useState(Object(d.d)(t)),
          T = l()(I, 2),
          K = T[0],
          M = T[1],
          L = i.a.useState(f.a.getCommunityThemeDisplayName(K)),
          R = l()(L, 2),
          x = R[0],
          O = R[1],
          A = i.a.useState(s),
          j = l()(A, 2),
          P = j[0],
          N = j[1],
          B = i.a.useState([]),
          H = l()(B, 2),
          D = H[0],
          U = H[1]
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
          q = i.a.createElement(
            b.a,
            { accessibilityLabel: E({ themeName: x }), disabled: !p, onPress: V, size: 'small', type: 'brandFilled' },
            k,
          )
        return i.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: r, rightControl: q, title: v },
          i.a.createElement(
            g.a,
            { style: w.themePickerContainer },
            i.a.createElement(h.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var n = F[e],
                  a = n !== Object(d.d)(t)
                M(n), O(f.a.getCommunityThemeDisplayName(n)), N(e), _(a)
              },
              options: D,
              value: P,
            }),
          ),
        )
      }
      var w = _.a.create(function (e) {
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
    zum0: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunitiesCreateButton_create_community_action_result',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
        type: 'CommunityCreateActionResult',
        abstractKey: '__isCommunityCreateActionResult',
        hash: '4ec23170ec30a580f998dd33b20018aa',
      }
      t.default = a
    },
  },
])
//# sourceMappingURL=WIPED
