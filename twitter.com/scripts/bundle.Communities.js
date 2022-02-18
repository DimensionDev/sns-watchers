;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '0ULw': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        r = t('ERkP'),
        i = t.n(r),
        o = t('Lsrn'),
        c = t('k/Ka'),
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
      ;(s.metadata = { width: 24, height: 24 }), (n.a = s)
    },
    '1rMX': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (n.default = l)
    },
    '1tGk': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (n.default = l)
    },
    '21nk': function (e, n, t) {
      'use strict'
      var a = t('I9iR'),
        l = t('3KVO'),
        r = t('yLYC'),
        i = t('Ud88'),
        o = (t('/2Cm'), t('aQQo').useTrackLoadQueryInRender),
        c = (t('ERkP').useDebugValue, t('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, n, t) {
        o()
        var c,
          m = i(),
          d = n.fetchKey,
          y = n.fetchPolicy,
          p = n.source,
          g = n.variables,
          f = n.networkCacheConfig,
          b = r(e, g, f)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          b.request.node.params.name !== n.name && a(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: s(m, b.request.identifier, function () {
                return m === n.environment && null != p
                  ? m.executeWithSource({ operation: b, source: p })
                  : m.execute({ operation: b })
              }),
              fetchPolicy: y,
              query: b,
              renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(m, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && m === n.environment ? p.ifEmpty(h) : (n.environment, h),
            fetchKey: d,
            fetchPolicy: y,
            query: b,
            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
          }
        }
        return l(c)
      }
    },
    '23An': function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
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
    '2fn4': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(r.hash = '05581b25a196bea06f3f6c130610a5b9'), (n.default = r)
    },
    '2rr8': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (n.default = l)
    },
    '3JAx': function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        r = t('fyvP'),
        i = t('rHpw'),
        o = t('MWbm')
      n.a = function (e) {
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
    '8sFp': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return d
        })
      var a = t('ERkP'),
        l = t.n(a),
        r = t('3XMw'),
        i = t.n(r),
        o = t('mw9i'),
        c = t('FIs5'),
        s = t('rHpw'),
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
    '8vG3': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (n.default = l)
    },
    '9SqB': function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('yiKp')),
        l = t('ERkP'),
        r = t('Ud88'),
        i = t('K1lQ').commitMutation,
        o = l.useState,
        c = l.useEffect,
        s = l.useRef,
        u = l.useCallback,
        m = t('23An')
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          t = r(),
          l = m(),
          d = s(t),
          y = s(e),
          p = s(new Set()),
          g = o(!1),
          f = g[0],
          b = g[1],
          h = u(
            function (n) {
              d.current === t && y.current === e && (p.current.delete(n), l.current && b(p.current.size > 0))
            },
            [t, l, e],
          )
        c(
          function () {
            ;(d.current === t && y.current === e) ||
              ((p.current = new Set()), l.current && b(!1), (d.current = t), (y.current = e))
          },
          [t, l, e],
        )
        var _ = u(
          function (r) {
            var i = n(
              t,
              (0, a.default)(
                (0, a.default)({}, r),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    h(i), r.onCompleted && r.onCompleted(e, n)
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
          [h, n, t, l, e],
        )
        return [_, f]
      }
    },
    AfjF: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return d
      })
      var a = t('ERkP'),
        l = t.n(a),
        r = t('eb3s'),
        i = t('3XMw'),
        o = t.n(i),
        c = o.a.d45ae5e0,
        s = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var n = e.onCancel,
            t = e.onConfirm
          return l.a.createElement(r.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: c,
            onCancel: n,
            onConfirm: t,
            text: s,
          })
        }
    },
    BX8b: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (n.default = l)
    },
    Bg9b: function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        r = t('ERkP'),
        i = t.n(r),
        o = t('Lsrn'),
        c = t('k/Ka'),
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
      ;(s.metadata = { width: 24, height: 24 }), (n.a = s)
    },
    C2fM: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = '462f05b8723504fff0bc89e5e613060e'), (n.default = y)
    },
    DCZs: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'DV/y': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityInviteScreen', function () {
          return ae
        })
      var a = t('KEM+'),
        l = t.n(a),
        r = t('yiKp'),
        i = t.n(r),
        o = t('ddV6'),
        c = t.n(o),
        s = (t('KqXw'), t('WNMA'), t('LW0h'), t('7x/C'), t('z84I'), t('1Iuc'), t('ERkP')),
        u = t.n(s),
        m = t('+Kfv'),
        d = t('eSoz'),
        y = t('rxPX'),
        p = t('0KEI'),
        g = function (e, n) {
          var t = n.match.params.communityId
          return t ? d.c.select(e, t) : void 0
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
        b = t('jHSc'),
        h = t('3XMw'),
        _ = t.n(h),
        v = t('/yvb'),
        k = (t('2G9S'), t('KhuB')),
        E = t('li/m'),
        C = function (e, n) {
          return n.communityId && n.userId ? k.b.select(e, ''.concat(n.communityId, '_').concat(n.userId)) : void 0
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
          var n = e.communityId,
            t = e.createLocalApiErrorHandler,
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
                      l(n, o)
                        .then(function () {
                          return r && r(o)
                        })
                        .catch(t())
                  },
                  size: 'small',
                  type: m,
                },
                s,
              )
        }),
        L = t('5FtR'),
        R = t('4e/K'),
        x = t('MWbm'),
        O = t('4zmP'),
        A = t('t62R'),
        j = t('FIs5'),
        N = t('rHpw'),
        P = t('GZwR'),
        B = _.a.b139b549,
        H = _.a.dfddd842,
        D = _.a.cf4898a0,
        U = _.a.a3b3939a,
        V = _.a.db4f0cc9,
        q = _.a.h252ede6,
        z = _.a.a5cd93f9,
        Q = _.a.ba5a88e3,
        W = _.a.i6568549,
        X = _.a.b772cd65,
        J = _.a.b4f16d00,
        G = _.a.ja1387a7,
        Y = _.a.b92a21d8,
        Z = _.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        ne = [P.a.CommunityUsers],
        te = { viewType: 'community' }
      function ae(e) {
        var n = e.community,
          t = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          r = (n || {}).invites_result,
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
            o && a(o).catch(t())
          },
          [o, t, a],
        )
        var F,
          I,
          w = u.a.useMemo(
            function () {
              return y.length > 0 || !n
                ? ee
                : 'CommunityInvites' === r.__typename
                ? r.users_to_invite_slice.items.map(P.g).filter(Boolean)
                : ee
            },
            [n, r, y.length],
          ),
          T = u.a.useCallback(
            function (e, n) {
              _(function (t) {
                return i()(i()({}, t), {}, l()({}, e, n))
              })
            },
            [_],
          ),
          K = u.a.useCallback(
            function (e) {
              S(function (n) {
                return i()(i()({}, n), {}, l()({}, e, !0))
              })
            },
            [S],
          ),
          N = o
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
            X,
          )
        return 'CommunityInvitesUnavailable' === (null == r ? void 0 : r.__typename)
          ? N
          : u.a.createElement(
              m.a,
              { behavioralEventContext: te },
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
                  filter: ne,
                  getItemDisabledMessage: function (e) {
                    var n
                    if ('user' === e.type) {
                      var t = e.data,
                        a = t.id_str,
                        l = t.screen_name,
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
                            return null !== (n = r.message) && void 0 !== n ? n : z({ screen_name: l })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var n = e.data.id_str,
                        t = h[n]
                      return !C[n] && 'UserCommunityInviteAction' !== (null == t ? void 0 : t.__typename)
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
                    return u.a.createElement(j.a, { header: J, message: G })
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
                    var n = e.userId
                    return u.a.createElement(M, {
                      communityId: o,
                      onInvite: K,
                      onInviteActionResultChange: T,
                      userId: n,
                      viewerInvited: C[n],
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
      n.default = re
    },
    'Dm5+': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = '168a26932d6677cab856ee45e7245b7b'), (n.default = y)
    },
    EFld: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(o.hash = 'c9fd6a145c49f94141d4aba3b68679ac'), (n.default = o)
    },
    EPsT: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return _
      })
      var a = t('VrFO'),
        l = t.n(a),
        r = t('Y9Ll'),
        i = t.n(r),
        o = t('1Pcy'),
        c = t.n(o),
        s = t('5Yy7'),
        u = t.n(s),
        m = t('2VqO'),
        d = t.n(m),
        y = t('KEM+'),
        p = t.n(y),
        g = t('ERkP'),
        f = t.n(g),
        b = t('jtO7'),
        h = t('eb3s'),
        _ = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t(e) {
            var a
            return (
              l()(this, t),
              (a = n.call(this, e)),
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
            i()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.align,
                    t = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    l = e.confirmationSheetConfirmButtonType,
                    r = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(b.a, { align: n, color: t, label: o, onPress: this._handleClick }),
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
            t
          )
        })(f.a.Component)
      p()(_, 'defaultProps', { color: 'red500', align: 'center' })
    },
    Eh7u: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(d.hash = 'e2457666463c59c1a72f329db4ba964b'), (n.default = d)
    },
    FSMj: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'ToolsPeopleScreen', function () {
          return v
        })
      t('vrRf')
      var a = t('ERkP'),
        l = t.n(a),
        r = t('LgBi'),
        i = t('rxPX'),
        o = Object(i.a)().withAnalytics({ page: 'communities', section: 'people' }),
        c = t('3XMw'),
        s = t.n(c),
        u = t('gDCe'),
        m = t('yoO3'),
        d = t('k/OQ'),
        y = t('mWs5'),
        p = t('MWbm'),
        g = t('krnS'),
        f = t('zCf4'),
        b = s.a.dc6ce7b4,
        h = s.a.f8321d82,
        _ = s.a.ga2aa43c,
        v = function (e) {
          var n = e.community,
            t = e.communityId,
            a = e.location,
            i = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            o = i ? h : _,
            c = l.a.useMemo(
              function () {
                var e = t
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(t, '/tools/members'), state: a.state },
                        label: h,
                        key: h,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(t, '/tools/moderators'), state: a.state },
                        label: _,
                        key: _,
                      },
                    ]
                  : []
                return l.a.createElement(d.a, { accessibilityLabel: o, links: e })
              },
              [t, o, a],
            )
          return l.a.createElement(
            m.a,
            null,
            l.a.createElement(
              y.a,
              {
                communityId: n.id_str,
                rightControl: i ? l.a.createElement(r.a, { communityId: t }) : void 0,
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
                    { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/members') },
                    l.a.createElement(g.b, {
                      communityId: n.id_str,
                      mode: g.a.Members,
                      userRole: null == n ? void 0 : n.role,
                    }),
                  ),
                  l.a.createElement(
                    f.b,
                    { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/moderators') },
                    l.a.createElement(u.a, { community: n }),
                    l.a.createElement(g.b, {
                      communityId: n.id_str,
                      mode: g.a.Moderators,
                      userRole: null == n ? void 0 : n.role,
                    }),
                  ),
                ),
              ),
            ),
          )
        }
      n.default = o(v)
    },
    'Fq/Z': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'FeedbackType', function () {
          return X
        }),
        t.d(n, 'CommunityFeedbackScreen', function () {
          return J
        })
      var a = t('97Jx'),
        l = t.n(a),
        r = t('m3Bd'),
        i = t.n(r),
        o = (t('yH/f'), t('KqXw'), t('WNMA'), t('ERkP')),
        c = t.n(o),
        s = t('v6aA'),
        u = t('+Kfv'),
        m = t('es0u'),
        d = (t('ZVkB'), t('ulNE'), t('urw/'), t('jQ3i'), t('x4t0'), t('eSoz')),
        y = t('XOJV'),
        p = t('G6rE'),
        g = t('rxPX'),
        f = function (e, n) {
          var t = n.match.params.tweetId
          return t ? y.a.selectHydrated(e, t) : void 0
        },
        b = function (e, n) {
          var t = n.match.params
          return Object.entries(t).flat().includes('tweetId') ? X.HiddenTweet : X.RemovedMember
        },
        h = function (e, n) {
          if (b(0, n) === X.HiddenTweet) {
            var t,
              a = n.match.params.tweetId,
              l = a ? y.a.selectHydrated(e, a) : void 0,
              r = null == l || null === (t = l.community_relationship) || void 0 === t ? void 0 : t.community
            return r ? d.c.select(e, r) : void 0
          }
          var i = n.match.params.communityId
          return i ? d.c.select(e, i) : void 0
        },
        _ = function (e, n) {
          if (b(0, n) === X.HiddenTweet) {
            var t = n.match.params.tweetId
            return t ? y.a.selectFetchStatus(e, t) : void 0
          }
          var a = n.match.params.communityId
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
        k = (t('ho0z'), t('PKbs')),
        E = t('egQk'),
        C = t('3XMw'),
        S = t.n(C),
        F = t('/de5'),
        I = t('b5s6'),
        w = t('MWbm'),
        T = t('X00g'),
        K = t('t62R'),
        M = t('4zmP'),
        L = t('0yYu'),
        R = t('6vad'),
        x = t('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        N = S.a.icc32e3d,
        P = T.a.getCommunityTheme('Default'),
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
          var n,
            t = e.community,
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
                (n = (function (e) {
                  switch (e) {
                    case X.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case X.RemovedMember:
                      return null == t ? void 0 : t.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === n
                ? void 0
                : n.name) || '',
            y = null == t ? void 0 : t.name,
            p = null == t ? void 0 : t.rules,
            g = (null == t ? void 0 : t.theme) || P,
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
        D = t('G1WX'),
        U = t('yoO3'),
        V = t('VS6U'),
        q = t('0KEI'),
        z = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        Q = S.a.jf99d610,
        W = { viewType: 'community' },
        X = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function J(e) {
        var n = c.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          t = (e.analytics, e.community),
          a = e.fetchCommunity,
          r = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          g = i()(e, z),
          f = function (e) {
            var n, a
            switch (e) {
              case X.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == y ? void 0 : y.user.id_str)),
                  _handleRetry: E,
                  shouldRenderFeedback: Boolean(
                    null == y || null === (n = y.community_relationship) || void 0 === n
                      ? void 0
                      : n.moderation_state.rule,
                  ),
                }
              case X.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == t ? void 0 : t.viewerViolatedRule)),
                  _handleRetry: C,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == t || null === (a = t.viewer_relationship) || void 0 === a
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
            var t = f(p),
              a = t.BEHAVIORAL_EVENT_VIEW_TYPE,
              r = t.isAuthorizedViewer,
              i = t.shouldRenderFeedback
            return r && n
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
      var G = v(J)
      n.default = G
    },
    JAeQ: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return g
      })
      var a = t('yiKp'),
        l = t.n(a),
        r = t('ddV6'),
        i = t.n(r),
        o = (t('yH/f'), t('kH1Z'), t('6U7i'), t('ERkP')),
        c = t.n(o),
        s = t('3XMw'),
        u = t.n(s),
        m = t('fS8x'),
        d = u.a.b7fb6bd9,
        y = u.a.e71cdf4d,
        p = Object.freeze({ NotStarted: 'not_started', Started: 'started', Completed: 'completed' })
      function g(e) {
        var n = e.aspectRatio,
          t = e.media,
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
              I === p.Completed && t.id !== F && g({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, t, F],
        )
        var w = c.a.useCallback(
            function () {
              _(!1), g({ status: p.Completed, croppedMediaId: t.id }), a()
            },
            [a, t],
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
              g({ status: p.Completed, croppedMediaId: t.id }), null == r || r(e)
            },
            [r, t],
          ),
          R = l()(l()({}, t), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 })
        return c.a.createElement(
          c.a.Fragment,
          null,
          h ? c.a.createElement(m.a, { defaultAspectRatio: n, media: t, onCancel: w, onDone: T, title: d }) : null,
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
    Jt8P: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    KQzH: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        r = (t('hBvt'), t('ERkP')),
        i = t.n(r),
        o = t('BUB3'),
        c = t('shC7'),
        s = t('csss'),
        u = t('t62R')
      n.a = function (e) {
        return i.a.createElement(o.a, { exact: !0, path: e.link }, function (n) {
          var t = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, l()({ isActive: n }, e, { label: i.a.createElement(u.b, { dir: t }, e.label) }))
        })
      }
    },
    LgBi: function (e, n, t) {
      'use strict'
      var a,
        l,
        r = t('97Jx'),
        i = t.n(r),
        o = t('m3Bd'),
        c = t.n(o),
        s = t('ERkP'),
        u = t.n(s),
        m = t('/yvb'),
        d = t('3XMw'),
        y = t.n(d),
        p = t('pwey'),
        g = (t('enFi'), t('jAXQ')),
        f = t.n(g),
        b = ['community'],
        h = y.a.b139b549,
        _ = u.a.createElement(p.a, null),
        v = function (e) {
          var n = e.community,
            l = c()(e, b),
            r = f()(void 0 !== a ? a : (a = t('qre1')), n)
          if (!r || 'CommunityInvitesUnavailable' === r.invites_result.__typename) return null
          var o = '/i/communities/'.concat(r.rest_id, '/invite')
          return u.a.createElement(m.a, i()({ accessibilityLabel: h, icon: _, link: o, type: 'primaryText' }, l))
        },
        k = u.a.memo(v),
        E = t('Fr3L'),
        C = t('IAZG'),
        S = ['communityId'],
        F = { context: 'CommunityInviteButtonQuery' },
        I = void 0 !== l ? l : (l = t('zakg')),
        w = function (e) {
          var n = e.communityId,
            t = c()(e, S),
            a = Object(C.a)(I, { communityId: n })
          return u.a.createElement(k, i()({ community: a.community }, t))
        },
        T = function (e) {
          return u.a.createElement(
            E.a,
            { errorConfig: F },
            u.a.createElement(w, i()({ communityId: e.communityId }, e)),
          )
        }
      n.a = u.a.memo(T)
    },
    M2mT: function (e, n, t) {
      'use strict'
      var a = t('m3Bd'),
        l = t.n(a),
        r = t('VrFO'),
        i = t.n(r),
        o = t('Y9Ll'),
        c = t.n(o),
        s = t('1Pcy'),
        u = t.n(s),
        m = t('5Yy7'),
        d = t.n(m),
        y = t('2VqO'),
        p = t.n(y),
        g = t('KEM+'),
        f = t.n(g),
        b = (t('2G9S'), t('i4UL'), t('+/5o')),
        h = t('ERkP'),
        _ = t.n(h),
        v = t('HPNB'),
        k = t('VAZu'),
        E = t('wiP2'),
        C = t('Es6L'),
        S = t('yiKp'),
        F = t.n(S),
        I = t('rHpw'),
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
        T = t('MWbm'),
        K = t('yw4N'),
        M = t('TnY3'),
        L = t('cHvH'),
        R = t('3xLC'),
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
          d()(t, e)
          var n = p()(t)
          function t() {
            var e
            i()(this, t)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_renderChildren', function () {
                var n = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? _.a.createElement(
                      T.a,
                      { style: w.fill },
                      _.a.createElement(
                        K.a,
                        { style: w.viewportView },
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
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return _.a.createElement(L.a, null, function (n) {
                    var t = n.windowWidth
                    return v.a.isTwoColumnLayout(t) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      l()(e, x))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : _.a.createElement(E.a.Configure, t),
                    n,
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
                  var n = e.isTwoColumnLayout,
                    t = this.props,
                    a = t.SideNavButton,
                    l = t.TabBar,
                    r = t.TeamsSwitcher,
                    i = t.backLocation,
                    o = t.documentTitle,
                    c = t.headerless,
                    s = t.history,
                    u = t.leftControl,
                    m = t.middleControl,
                    d = t.onBackClick,
                    y = t.rightControl,
                    p = t.screenType,
                    g = t.searchBoxOptions,
                    f = t.secondaryBar,
                    h = t.showSubtitleOnRoot,
                    v = t.showSubtitleOnWideDetail,
                    C = t.subtitle,
                    S = t.title,
                    F = t.titleIconCell,
                    I = t.titleIconCellSize,
                    K = t.withDetailOpen,
                    M = t.withSearchBox,
                    L = t.withTweetButton,
                    R = 'root' === p,
                    x = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && v) || (R && h),
                    j = R || (O && n),
                    N = R ? b.c : O ? b.a : void 0,
                    P = _.a.createElement(
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
                        titleDomId: N,
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
                  return _.a.createElement(_.a.Fragment, null, B, P)
                },
              },
            ]),
            t
          )
        })(_.a.Component)
      f()(O, 'contextType', R.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      n.a = Object(M.a)(O)
    },
    MCGW: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityRulesScreen', function () {
          return C
        })
      var a = t('yiKp'),
        l = t.n(a),
        r = t('97Jx'),
        i = t.n(r),
        o = (t('KqXw'), t('WNMA'), t('ho0z'), t('uFXj'), t('ERkP')),
        c = t.n(o),
        s = t('v6aA'),
        u = t('es0u'),
        m = t('PKbs'),
        d = t('egQk'),
        y = t('1Idg'),
        p = t('eSoz'),
        g = t('rxPX'),
        f = t('0KEI'),
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
        h = t('MDbM'),
        _ = t('/de5'),
        v = t('5FtR'),
        k = t('VS6U'),
        E = t('rHpw'),
        C = function (e) {
          var n = c.a.useContext(s.a).featureSwitches,
            t = e.community,
            a = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            g = e.location,
            f = e.match,
            b = f.params.communityId,
            E = n.isTrue('c9s_participation_enabled')
          c.a.useEffect(function () {
            b && !t && o !== h.a.LOADED && r(b).catch(a())
          })
          var C = c.a.useMemo(
            function () {
              return { selectedCommunityId: b || '', defaultText: '' }
            },
            [b],
          )
          if (t && b) {
            var S = t.name,
              I = t.rules,
              w = t.theme,
              T = {
                composeOptions: C,
                history: y,
                sidebarContent: c.a.createElement(u.a, null),
                title: (null == t ? void 0 : t.name) || null,
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
          ((n.default = S),
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
    OBBW: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    OUEC: function (e, n, t) {
      'use strict'
      var a = t('KEM+'),
        l = t.n(a),
        r = t('yiKp'),
        i = t.n(r),
        o = t('ezF+'),
        c =
          (t('lTEL'),
          t('7x/C'),
          t('JtPf'),
          t('87if'),
          t('kYxP'),
          {
            loader: function () {
              return t.e(199).then(t.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: t('XBtf').a.Critical,
          }),
        s = o.e(c),
        u = t('QIgh'),
        m = t('8UdT')
      n.a = i()(i()({}, u.b), {}, l()({}, m.b.Community, s))
    },
    OwKm: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return C
      })
      var a = t('ddV6'),
        l = t.n(a),
        r = (t('1t7P'), t('jQ/y'), t('ho0z'), t('ERkP')),
        i = t.n(r),
        o = t('v6aA'),
        c = t('3XMw'),
        s = t.n(c),
        u = t('Nh1N'),
        m = t('MWbm'),
        d = t('Ig1G'),
        y = t('4zmP'),
        p = t('p+r5'),
        g = t('rHpw'),
        f = s.a.c66769a3,
        b = s.a.ef02695a,
        h = s.a.ef02695a,
        _ = s.a.c824202f,
        v = s.a.d32cf5e6,
        k = s.a.f8fa00c7,
        E = s.a.fc2a5c92,
        C = function (e) {
          var n = i.a.useContext(o.a).featureSwitches,
            t = n.getNumberValue('c9s_max_rule_name_length', 50),
            a = n.getNumberValue('c9s_max_rule_description_length', 160),
            r = e.description,
            c = e.errorText,
            s = e.name,
            g = e.onChange,
            C = i.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 3, t)
              },
              [t],
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
            N = A[1],
            P = i.a.useState(r),
            B = l()(P, 2),
            H = B[0],
            D = B[1],
            U = i.a.useState(F(r)),
            V = l()(U, 2),
            q = V[0],
            z = V[1],
            Q = i.a.useState(void 0),
            W = l()(Q, 2),
            X = W[0],
            J = W[1],
            G = i.a.useState('' !== s),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = i.a.useCallback(
              function (e) {
                var n = !1,
                  a = e.target.value
                C(a) && ((n = !0), N(h({ minCharacterCount: 3, maxCharacterCount: t }))),
                  $(!0),
                  x(n),
                  K(a),
                  g({ description: H, name: a, valid: !n && !q })
              },
              [t, H, g, q, C],
            ),
            ne = i.a.useCallback(
              function (e) {
                var n = !1,
                  t = e.target.value
                F(t) && ((n = !0), J(k({ maxCharacterCount: a }))),
                  z(n),
                  D(t),
                  g({ name: T, description: t, valid: !n && !R })
              },
              [a, T, g, R, F],
            ),
            te = R && j ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: t }),
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
              helperText: te,
              invalid: R && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: t,
              value: T,
            }),
            i.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: X,
              helperText: ae,
              invalid: q,
              label: _,
              name: 'typedRuleDescription',
              onChange: ne,
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
    PMbW: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (n.default = l)
    },
    PbB6: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(r.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (n.default = r)
    },
    Phky: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e) {
          for (var n = [], t = (0, l.default)(e), a = 0; a < t.length; a++) {
            var r = t[a].screenName
            n.push(r)
          }
          return n
        })
      var l = a(t('GiKA'))
      e.exports = n.default
    },
    QRqA: function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        r = t('v6aA'),
        i = t('xZGM'),
        o = t('ddV6'),
        c = t.n(o),
        s = t('+Kfv'),
        u = t('3XMw'),
        m = t.n(u),
        d = t('feu+'),
        y = t('ii+P'),
        p = m.a.j24c37b2,
        g = function (e) {
          var n = e.Content,
            t = e.actionLabel,
            a = void 0 === t ? p : t,
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
            l.a.createElement(n, null),
          )
          return u ? l.a.createElement(s.a, { behavioralEventContext: u }, _) : _
        },
        f = l.a.memo(g),
        b = t('MWbm'),
        h = t('X00g'),
        _ = t('h0NW'),
        v = t('rHpw'),
        k = t('r9x5'),
        E = t('cOhU'),
        C = t('uCrx'),
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
          var n = e.forSingleCommunity,
            t = l.a.useContext(r.a).featureSwitches,
            a = l.a.useCallback(
              function () {
                var e = t.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
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
              [t, n],
            )
          return !1 === (null == n ? void 0 : n.canJoinCommunity)
            ? null
            : l.a.createElement(f, {
                Content: a,
                actionLabel: S,
                behavioralEventContext: x,
                flag: i.i,
                headline: F,
                subtext: I,
                withCloseButton: !n,
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
      n.a = O
    },
    R5kW: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return d
      }),
        t.d(n, 'c', function () {
          return y
        }),
        t.d(n, 'a', function () {
          return f
        })
      var a = t('KEM+'),
        l = t.n(a),
        r = t('yiKp'),
        i = t.n(r),
        o = (t('yH/f'), t('oEOe')),
        c = t('kGix'),
        s = t('Ssj5'),
        u = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, n) {
          return e[u][n]
        },
        y = function (e, n) {
          var t
          return null !== (t = e[u].fetchStatus[n]) && void 0 !== t ? t : c.a.NONE
        },
        p = Object.freeze({ fetchStatus: {} })
      function g(e) {
        return e.meta.communityId
      }
      var f = function (e) {
        return function (n, t, a) {
          var l = a.api
          return o.b(n, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      s.a.register(
        l()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case m.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: i()(i()({}, e.fetchStatus), {}, l()({}, g(n), c.a.LOADING)) })
            case m.FAILURE:
              return i()(
                i()({}, e),
                {},
                { fetchStatus: i()(i()({}, e.fetchStatus), {}, l()({}, g(n), c.a.FAILED)), error: n.payload },
              )
            case m.SUCCESS:
              var t
              if (n.payload)
                return i()(
                  i()({}, e),
                  {},
                  ((t = {}),
                  l()(t, g(n), n.payload),
                  l()(t, 'fetchStatus', i()(i()({}, e.fetchStatus), {}, l()({}, g(n), c.a.LOADED))),
                  l()(t, 'error', null),
                  t),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    ROT1: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return v
      })
      var a = t('ddV6'),
        l = t.n(a),
        r = t('ERkP'),
        i = t.n(r),
        o = t('v6aA'),
        c = t('p+r5'),
        s = t('3XMw'),
        u = t.n(s),
        m = t('Ig1G'),
        d = t('nmVb'),
        y = t.n(d),
        p = t('Phky'),
        g = t.n(p),
        f = u.a.h3e55b40,
        b = u.a.dd71d9c9,
        h = u.a.cf65e56a,
        _ = u.a.d936eeca,
        v = function (e) {
          var n = e.autoFocus,
            t = void 0 !== n && n,
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
                var n = e.target.value,
                  t = !1
                Object(m.g)(n, 3, F)
                  ? (y()(n).length > 0 || g()(n).length > 0) && ((t = !0), S(_))
                  : ((t = !0), S(h({ minCharacterCount: 3, maxCharacterCount: F }))),
                  v(t),
                  r(n, t)
              },
              [F, r, S],
            ),
            w = b({ minCharacterCount: 3, maxCharacterCount: F })
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: t,
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
    Rc1A: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(r.hash = '3eeda317cb789b741e0d0c9703d0fc15'), (n.default = r)
    },
    'S+H3': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        r = t('ERkP'),
        i = t.n(r),
        o = t('Lsrn'),
        c = t('k/Ka'),
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
      ;(s.metadata = { width: 24, height: 24 }), (n.a = s)
    },
    SNyS: function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        r = t('ERkP'),
        i = t.n(r),
        o = t('Lsrn'),
        c = t('k/Ka'),
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
      ;(s.metadata = { width: 24, height: 24 }), (n.a = s)
    },
    SyZD: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityRulesRouter', function () {
          return D
        })
      var a = t('97Jx'),
        l = t.n(a),
        r = (t('KqXw'), t('WNMA'), t('2G9S'), t('ERkP')),
        i = t.n(r),
        o = t('v6aA'),
        c = t('Ig1G'),
        s = t('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = t('3XMw'),
        d = t.n(m),
        y = t('yoO3'),
        p = t('5FtR'),
        g = t('ddV6'),
        f = t.n(g),
        b = (t('z84I'), t('/yvb')),
        h = t('eSoz'),
        _ = t('0KEI'),
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
        k = t('rHpw'),
        E = k.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        C = t('mWs5'),
        S = t('PKbs'),
        F = d.a.b772cd65,
        I = d.a.gfca5254
      var w = v(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.explanation,
            l = e.history,
            r = e.reorderRules,
            o = n.id_str,
            c = n.rules,
            s = n.theme,
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
                var e = t({}),
                  n = d.map(function (e) {
                    return e.rest_id
                  })
                r(o, { ruleIds: n })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, r, l, t],
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
        T = t('MWbm'),
        K = t('mjJ+'),
        M = t('iY63'),
        L = t('ACHU'),
        R = t('zCf4'),
        x = d.a.gfca5254,
        O = d.a.d94edeb4,
        A = d.a.j560c8ea,
        j = d.a.ab8089ea,
        N = d.a.h63a5c3b,
        P = i.a.createElement(M.a, null),
        B = i.a.createElement(L.a, null),
        H = { viewType: 'add' },
        D = function (e) {
          var n = i.a.useContext(o.a).featureSwitches,
            t = n.isTrue('c9s_rule_creation_enabled'),
            a = n.isTrue('c9s_rule_editing_enabled'),
            r = n.isTrue('c9s_rule_reordering_enabled'),
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
              t && v
                ? i.a.createElement(b.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: H,
                    icon: P,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            F = f.length > 1,
            I =
              r && v && F
                ? i.a.createElement(b.a, {
                    accessibilityLabel: N,
                    icon: B,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var n = [{ text: j, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return i.a.createElement(K.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
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
      n.default = u(D)
    },
    TcEn: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityTimelineType', function () {
          return ql
        }),
        t.d(n, 'CommunityScreen', function () {
          return Jl
        })
      var a,
        l,
        r,
        i,
        o,
        c = t('yiKp'),
        s = t.n(c),
        u = (t('yH/f'), t('KqXw'), t('WNMA'), t('ho0z'), t('ERkP')),
        m = t.n(u),
        d = t('WpDa'),
        y = t('ZNT5'),
        p = (t('enFi'), t('3XMw')),
        g = t.n(p),
        f = (t('1t7P'), t('jQ/y'), t('Ig1G')),
        b = t('jV+4'),
        h = t('t62R'),
        _ = t('jAXQ'),
        v = t.n(_),
        k = function (e) {
          var n,
            l = v()(void 0 !== a ? a : (a = t('pChJ')), e.community),
            r = m.a.useMemo(
              function () {
                return new Date(l.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [l.created_at],
            ),
            i = m.a.useMemo(
              function () {
                var e, n, t
                if ('User' === (null === (e = l.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return m.a.createElement(b.a, {
                    isVerified:
                      (null === (n = l.creator_results.result.legacy) || void 0 === n ? void 0 : n.verified) || !1,
                    screenName:
                      (null === (t = l.creator_results.result.legacy) || void 0 === t ? void 0 : t.screen_name) || '',
                    withLink: !0,
                  })
              },
              [l],
            )
          return l.creator_results &&
            'User' === (null === (n = l.creator_results.result) || void 0 === n ? void 0 : n.__typename)
            ? m.a.createElement(
                h.b,
                { color: 'gray700' },
                m.a.createElement(g.a.I18NFormatMessage, { $i18n: 'a346641a', date: r }, i),
              )
            : null
        },
        E = m.a.memo(k),
        C = t('v6aA'),
        S = function (e) {
          var n = m.a.useContext(C.a).featureSwitches
          return m.a.useMemo(
            function () {
              return n.isTrue(e)
            },
            [e, n],
          )
        },
        F = t('6vad'),
        I = t('csss'),
        w = t('h0NW'),
        T = t('0yYu'),
        K = t('rHpw'),
        M = t('cOhU'),
        L = t('DlMI'),
        R = t('Lxak'),
        x = t('a5gf'),
        O = m.a.createElement(h.b, { weight: 'bold' }),
        A = g.a.af7c11a9,
        j = g.a.db1b9462,
        N = g.a.ea49402d,
        P = m.a.createElement(g.a.I18NFormatMessage, { $i18n: 'he99cc29' }, m.a.cloneElement(O, null, g.a.gedb877c)),
        B = g.a.fcef2921,
        H = g.a.c93dd2c8,
        D = function (e) {
          var n = v()(void 0 !== l ? l : (l = t('1rMX')), e.community),
            a = S('c9s_request_to_join_enabled'),
            r = m.a.useMemo(
              function () {
                var e,
                  t = function (e) {
                    return m.a.createElement(h.b, null, e)
                  },
                  l = m.a.createElement(E, { community: n }),
                  r = n.membership_settings.__typename,
                  i = {
                    CommunityMemberAllowedActions: { decoration: V, label: t(j) },
                    CommunityOpenMembershipEducation: { decoration: q, label: P, description: B },
                    CommunityRestrictedMembershipEducation: { decoration: Q, label: P, description: H },
                    CommunityVisibilityEducation: { decoration: q, label: t(N) },
                    OriginationAttributionEducation: { decoration: z, label: l },
                  },
                  o = [i.CommunityMemberAllowedActions]
                return (
                  a
                    ? ('CommunityRestrictedMembershipSettings' === r &&
                        o.push(i.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === r && o.push(i.CommunityOpenMembershipEducation))
                    : o.push(i.CommunityVisibilityEducation),
                  'User' === (null === (e = n.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    o.push(i.OriginationAttributionEducation),
                  o
                )
              },
              [n, a],
            )
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(F.b, { text: A }),
            Object(f.f)(n.role) && n.description ? m.a.createElement(I.a, { label: n.description }) : null,
            m.a.createElement(w.a, { containerStyle: U.containerStyle, items: r }),
            m.a.createElement(T.a, null),
          )
        },
        U = K.a.create(function (e) {
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
        V = m.a.createElement(M.a, { style: U.icon }),
        q = m.a.createElement(L.a, { style: U.icon }),
        z = m.a.createElement(R.a, { style: U.icon }),
        Q = m.a.createElement(x.a, { style: U.icon }),
        W = m.a.memo(D),
        X = t('yoO3'),
        J = t('Fr3L'),
        G = t('fTQJ'),
        Y = (t('z84I'), t('PKbs')),
        Z = t('X00g'),
        $ = function (e) {
          var n = v()(void 0 !== r ? r : (r = t('DCZs')), e),
            a = n.custom_theme,
            l = n.default_theme,
            i = null != a ? a : l
          return m.a.useMemo(
            function () {
              return Z.a.getCommunityTheme(i)
            },
            [i],
          )
        },
        ee = $,
        ne = t('rC8y'),
        te = void 0 !== i ? i : (i = t('BX8b')),
        ae = g.a.gfca5254,
        le = g.a.ffd9cfe6,
        re = function (e) {
          var n = e.community,
            t = v()(te, n),
            a = t.rules,
            l = ee(t),
            r = m.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : m.a.createElement(
                m.a.Fragment,
                null,
                m.a.createElement(F.b, { text: ae }),
                m.a.createElement(Y.b, {
                  badgeStyle: ie.badgeStyle,
                  headerContainerStyle: [ie.containerStyle, ie.headingContainerStyle],
                  headerExplanationStyle: ie.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: ie.ruleContainerStyle,
                  rules: r,
                  theme: l,
                }),
                a.length > 5
                  ? m.a.createElement(
                      m.a.Fragment,
                      null,
                      m.a.createElement(ne.a, { link: '/i/communities/'.concat(t.rest_id, '/rules'), text: le }),
                      ' ',
                      m.a.createElement(T.a, null),
                    )
                  : null,
              )
        },
        ie = K.a.create(function (e) {
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
        oe = m.a.memo(re),
        ce = t('7JQg'),
        se = t('IAZG'),
        ue = g.a.i9028824,
        me = g.a.cc683fb9,
        de = { page: 'community', section: 'about' },
        ye = void 0 !== o ? o : (o = t('jC8Z'))
      function pe(e) {
        var n = e.communityId,
          t = Object(se.a)(ye, { communityId: n })
        return m.a.createElement(
          m.a.Fragment,
          null,
          m.a.createElement(W, { community: t.community }),
          m.a.createElement(oe, { community: t.community }),
        )
      }
      var ge = function (e) {
          var n = e.communityId,
            t = m.a.useMemo(
              function () {
                return (function (e) {
                  return Object(y.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (n) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: d.a,
                  })
                })(n)
              },
              [n],
            )
          return m.a.createElement(
            ce.c,
            { namespace: de },
            m.a.createElement(
              X.a,
              { behavioralEventViewType: 'about' },
              m.a.createElement(
                J.a,
                { errorConfig: { context: 'CommunityAboutScreen' } },
                m.a.createElement(pe, { communityId: n }),
              ),
              m.a.createElement(G.a, { loadingAccessibilityLabel: ue, module: t, title: me }),
            ),
          )
        },
        fe = t('+Kfv'),
        be = t('es0u'),
        he = t('rxPX'),
        _e = t('0KEI'),
        ve = t('R5kW'),
        ke = function (e, n) {
          var t = Object(ve.b)(e, n.communityId) || {},
            a = t.pending_join_request_count,
            l = void 0 === a ? 0 : a,
            r = t.tweet_case_count
          return { pending_join_request_count: l, tweet_case_count: void 0 === r ? 0 : r }
        },
        Ee = function (e, n) {
          return Object(ve.c)(e, n.communityId)
        },
        Ce = Object(he.a)()
          .propsFromState(function () {
            return { count: ke, fetchStatus: Ee }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_e.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: ve.a,
            }
          }),
        Se = t('kGix'),
        Fe = t('TnY3'),
        Ie = t('MWbm'),
        we = t('mjJ+'),
        Te = t('/yvb'),
        Ke = t('Znyr'),
        Me = t('zIWA'),
        Le = t('SNyS'),
        Re = t('Lsrn'),
        xe = t('k/Ka'),
        Oe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(xe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Re.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      Oe.metadata = { width: 24, height: 24 }
      var Ae = Oe,
        je = t('ACHU'),
        Ne = g.a.h6beb5fa,
        Pe = g.a.e3f04700,
        Be = g.a.e2429f56,
        He = g.a.df15d5b7,
        De = g.a.e48fbb01,
        Ue = g.a.c8c6c4e9,
        Ve = g.a.h63a5c3b,
        qe = g.a.dce5e1b3,
        ze = g.a.c5d8c93d,
        Qe = { viewType: 'app_bar_button' }
      var We = K.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        Xe = Object(Fe.a)(function (e) {
          var n = e.canModerate,
            t = e.communityId,
            a = e.count,
            l = void 0 === a ? 0 : a,
            r = (e.history, e.userRole),
            i = m.a.useContext(C.a).featureSwitches,
            o = i.isTrue('c9s_settings_enabled'),
            c = i.isTrue('c9s_report_community_enabled'),
            s = i.isTrue('c9s_moderation_enabled') && n,
            u = o && n,
            d = c && !n,
            y = m.a.useCallback(
              function (e) {
                var n = []
                return (
                  s &&
                    n.push({
                      text: Be,
                      subText: He({ count: l }),
                      Icon: Me.a,
                      link: '/i/communities/'.concat(t, '/moderation/reported_tweets'),
                    }),
                  d &&
                    n.push({
                      text: De,
                      Icon: Me.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  n.push({ text: Ue, Icon: Le.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  m.a.createElement(we.a, { items: n, onCloseRequested: e })
                )
              },
              [t, l, s, d],
            ),
            p = n ? Ae : je.a,
            g = n ? (r === f.a.Admin ? qe : ze) : Ve
          return m.a.createElement(
            Ie.a,
            { style: We.root },
            m.a.createElement(Te.a, {
              accessibilityLabel: g,
              behavioralEventContext: Qe,
              icon: m.a.createElement(p, null),
              link: u ? '/i/communities/'.concat(t, '/tools') : void 0,
              renderMenu: u ? void 0 : y,
              size: 'xLarge',
              type: 'primaryText',
            }),
            s && l > 0
              ? m.a.createElement(Ke.a, {
                  count: l,
                  style: We.menuControlBadge,
                  truncatedCountFormatter: Ne,
                  unreadCountLabel: Pe,
                  withBorder: !1,
                })
              : null,
          )
        })
      var Je = Ce(function (e) {
          var n = m.a.useContext(C.a).featureSwitches.isTrue('c9s_request_to_join_enabled'),
            t = e.canModerate,
            a = e.communityId,
            l = e.count,
            r = e.createLocalApiErrorHandler,
            i = e.fetchCommunityModerationData,
            o = e.fetchStatus,
            c = e.userRole,
            s = l.pending_join_request_count,
            u = l.tweet_case_count
          return (
            m.a.useEffect(
              function () {
                o === Se.a.NONE && t && i(a).catch(r())
              },
              [r, i, o, a, t],
            ),
            m.a.createElement(Xe, { canModerate: t, communityId: a, count: n ? s + u : u, userRole: c })
          )
        }),
        Ge = t('VrFO'),
        Ye = t.n(Ge),
        Ze = t('Y9Ll'),
        $e = t.n(Ze),
        en = t('1Pcy'),
        nn = t.n(en),
        tn = t('5Yy7'),
        an = t.n(tn),
        ln = t('2VqO'),
        rn = t.n(ln),
        on = t('KEM+'),
        cn = t.n(on),
        sn = (t('2G9S'), t('LW0h'), t('7x/C'), t('7xRU'), t('tVqn'), t('uFXj'), t('ddV6')),
        un = t.n(sn),
        mn = g.a.fad95333,
        dn = function (e) {
          var n = e.offendingRule
          return m.a.createElement(
            Ie.a,
            null,
            n
              ? m.a.createElement(
                  Ie.a,
                  { style: yn.offendingRule },
                  (function (e) {
                    return m.a.createElement(
                      g.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      m.a.createElement(h.b, { weight: 'bold' }, g.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(n),
                )
              : null,
            m.a.createElement(h.b, null, mn),
          )
        },
        yn = K.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        pn = g.a.hafa07f2,
        gn = g.a.fa94c9da,
        fn = g.a.c15bee31,
        bn = g.a.i859676b,
        hn = m.a.createElement(
          g.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          m.a.createElement(h.b, { link: '/settings/audience_and_tagging' }, g.a.e77dfaf0),
        ),
        _n = g.a.fc2a5c92,
        vn = g.a.bf7bdb60,
        kn = g.a.h27d695f,
        En = g.a.b02360f5,
        Cn = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        Sn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        Fn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var In,
        wn,
        Tn,
        Kn,
        Mn,
        Ln = t('CGyZ'),
        Rn = t('feu+'),
        xn = g.a.e6057013,
        On = { follow: g.a.b171d7c4, following: g.a.aa7ae3f6, unfollow: g.a.bb1d57b6 },
        An = g.a.j24c37b2,
        jn = function (e) {
          var n = m.a.useContext(C.a).featureSwitches,
            t = m.a.useState(void 0),
            a = un()(t, 2),
            l = a[0],
            r = a[1],
            i = n.isTrue('c9s_request_to_join_enabled'),
            o = e.community,
            c = e.createLocalApiErrorHandler,
            u = e.history,
            d = e.isProtectedUser,
            y = e.join,
            p = e.leave,
            g = o.actions,
            b = g.join_action_result,
            h = g.leave_action_result,
            _ = o.id_str,
            v = o.name,
            k = o.role,
            E = Object(f.f)(k),
            S = b.reason === Fn.ViewerJoinRequestRequired && i,
            F = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !E } },
            I = function () {
              r(void 0)
            },
            w = m.a.useMemo(
              function () {
                return S ? s()(s()({}, On), {}, { follow: xn }) : On
              },
              [S],
            )
          return m.a.createElement(
            Ie.a,
            { style: Nn.button },
            m.a.createElement(Ln.a, {
              behavioralEventContext: F,
              buttonText: w,
              isFollowing: E,
              name: v,
              onFollow: function () {
                var e = o.rules,
                  n = o.viewerViolatedRule,
                  t = (function (e, n, t) {
                    var a = e.__typename,
                      l = e.reason,
                      r = function (e) {
                        return { canAction: !0, message: e }
                      },
                      i = function (e) {
                        return { canAction: !1, message: e }
                      },
                      o = i({ headline: _n, text: vn })
                    switch (a) {
                      case Cn.joinAvailable:
                        return r()
                      case Cn.joinUnavailable:
                        switch (l) {
                          case Fn.ViewerIsRemoved:
                            return i({
                              headline: fn,
                              text: m.a.createElement(dn, { offendingRule: null == t ? void 0 : t.name }),
                            })
                          case Fn.ViewerNotInvited:
                            return i({ headline: pn, text: gn })
                          case Fn.ViewerIsProtected:
                            return n ? i({ headline: bn, text: hn }) : r()
                          case Fn.ViewerJoinRequestRequired:
                            return r()
                          default:
                            return o
                        }
                      default:
                        return o
                    }
                  })(b, d, n),
                  a = t.canAction,
                  l = t.message
                !a && l && r(l),
                  a &&
                    (e && e.length > 0
                      ? u.push({
                          pathname: '/i/communities/'.concat(_, '/join'),
                          state: { community: o, joinRequestRequired: S },
                        })
                      : y(_).catch(c({})))
              },
              onUnfollow: function () {
                var e = (function (e) {
                    var n,
                      t = e.__typename,
                      a = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      r = l({ headline: _n, text: vn })
                    switch (t) {
                      case Cn.leaveAvailable:
                        return { canAction: !0, message: n }
                      case Cn.leaveUnavailable:
                        switch (a) {
                          case Sn.ViewerIsSoleAdmin:
                            return l({ headline: kn, text: En })
                          default:
                            return r
                        }
                      default:
                        return r
                    }
                  })(h),
                  n = e.canAction,
                  t = e.message
                !n && t && r(t), n && p(_).catch(c({}))
              },
              type: 'community',
            }),
            l
              ? m.a.createElement(Rn.a, {
                  actionLabel: An,
                  graphicDisplayMode: 'none',
                  headline: l.headline,
                  onAction: I,
                  onClose: I,
                  subtext: l.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        Nn = K.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Pn = t('YeIG'),
        Bn = t('cHTv'),
        Hn = function (e) {
          var n = v()(void 0 !== In ? In : (In = t('dMLx')), e)
          return m.a.useMemo(
            function () {
              return (
                (function (e) {
                  var n,
                    t,
                    a = null == e || null === (n = e.custom_banner_media) || void 0 === n ? void 0 : n.media_info
                  if (
                    null != a &&
                    a.original_img_url &&
                    null != a &&
                    a.original_img_height &&
                    null != a &&
                    a.original_img_width &&
                    null != a &&
                    null !== (t = a.color_info) &&
                    void 0 !== t &&
                    t.palette
                  ) {
                    var l = a.color_info.palette
                    return {
                      url: a.original_img_url,
                      height: a.original_img_height,
                      width: a.original_img_width,
                      palette: l,
                    }
                  }
                })(n) ||
                (function (e) {
                  var n,
                    t = null == e || null === (n = e.default_banner_media) || void 0 === n ? void 0 : n.media_info
                  if (
                    null != t &&
                    t.original_img_url &&
                    null != t &&
                    t.original_img_height &&
                    null != t &&
                    t.original_img_width
                  )
                    return { url: t.original_img_url, height: t.original_img_height, width: t.original_img_width }
                })(n) ||
                Bn.b
              )
            },
            [n],
          )
        },
        Dn = t('TIdA'),
        Un = t('A91F'),
        Vn = t('9Xij'),
        qn = void 0 !== wn ? wn : (wn = t('fK4d')),
        zn = function (e) {
          var n = v()(qn, e.community),
            t = Hn(n),
            a = K.a.theme.aspectRatios.communityBanner
          return t && !Object(Pn.a)(t)
            ? m.a.createElement(
                Ie.a,
                null,
                m.a.createElement(Dn.a, {
                  accessibilityLabel: '',
                  aspectMode: Un.a.exact(a),
                  backgroundColor: K.a.theme.colors.gray300,
                  image: t,
                }),
              )
            : m.a.createElement(Vn.a, { ratio: a }, m.a.createElement(Ie.a, { style: Qn.placeholderImageContainer }))
        },
        Qn = K.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        Wn = m.a.memo(zn),
        Xn = { context: 'CommunityBannerImageQuery' },
        Jn = void 0 !== Tn ? Tn : (Tn = t('vUUo')),
        Gn = function (e) {
          var n = e.communityId,
            t = Object(se.a)(Jn, { communityId: n }, { fetchPolicy: 'store-and-network' })
          return m.a.createElement(Wn, { community: t.community })
        },
        Yn = function (e) {
          return m.a.createElement(J.a, { errorConfig: Xn }, m.a.createElement(Gn, { communityId: e.communityId }))
        },
        Zn = m.a.memo(Yn),
        $n = t('K1iM'),
        et = t.n($n),
        nt = t('n4Eu'),
        tt = { red: 0, green: 0, blue: 0 },
        at = '10px',
        lt = K.a.create(function (e) {
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
        rt = function (e) {
          var n = e.children,
            a = e.community,
            l = v()(void 0 !== Kn ? Kn : (Kn = t('OBBW')), a),
            r = ee(l),
            i = Hn(l).palette,
            o = []
          if (i) {
            var c,
              s = et()(i)
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var u = c.value
                o.push({ percentage: u.percentage, rgb: { blue: u.rgb.blue, green: u.rgb.green, red: u.rgb.red } })
              }
            } catch (y) {
              s.e(y)
            } finally {
              s.f()
            }
          }
          var d = S('c9s_ui_colors_enabled_rweb')
          return m.a.createElement(
            Ie.a,
            null,
            m.a.createElement(Ie.a, { style: lt.descriptionContainer }, n),
            m.a.createElement(Ie.a, { style: [K.a.absoluteFill, lt.backgroundColorWhite] }),
            m.a.createElement(Ie.a, {
              style: [
                K.a.absoluteFill,
                lt.backgroundColor,
                (function (e, n) {
                  if (d) return Z.a.getCommunityGradientStyle(n, at)
                  var t = e && nt.a.get(e),
                    a = t ? (null == t ? void 0 : t.rgb) : tt,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    r = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(at, ', ')
                      .concat(r, ' ')
                      .concat(at, ' 100%)'),
                  }
                })(o, r),
              ],
            }),
          )
        },
        it = { context: 'CommunityDescriptionContainerQuery' },
        ot = void 0 !== Mn ? Mn : (Mn = t('a/V2')),
        ct = function (e) {
          var n = e.children,
            t = e.communityId,
            a = Object(se.a)(ot, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return m.a.createElement(rt, { community: a.community }, n)
        },
        st = function (e) {
          return m.a.createElement(
            J.a,
            { errorConfig: it },
            m.a.createElement(ct, { communityId: e.communityId }, e.children),
          )
        },
        ut = m.a.memo(st),
        mt = t('LgBi'),
        dt = t('CaKu'),
        yt = t('1YZw'),
        pt = Object(he.a)().propsFromActions(function () {
          return { addToast: yt.b }
        }),
        gt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(xe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Re.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              m.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      gt.metadata = { width: 24, height: 24 }
      var ft,
        bt,
        ht,
        _t,
        vt,
        kt,
        Et,
        Ct = gt,
        St = t('I/9y'),
        Ft = t('pwey'),
        It = g.a.bec3b8f9,
        wt = { viewType: 'share_community' },
        Tt = g.a.f88553c8,
        Kt = { viewType: 'copy_link' },
        Mt = { viewType: 'invite_members' },
        Lt = g.a.b139b549,
        Rt = g.a.e05c00b4,
        xt = m.a.createElement(Ct, null),
        Ot = K.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        At = pt(function (e) {
          var n = v()(void 0 !== ft ? ft : (ft = t('X/n0')), e.community),
            a = e.addToast,
            l = n.rest_id,
            r = n.role,
            i = Object(f.f)(r),
            o = m.a.useCallback(
              function (e) {
                dt.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), a({ text: Tt })
              },
              [a, l],
            ),
            c = m.a.useMemo(
              function () {
                return function (e) {
                  var n = []
                  return (
                    n.push({ behavioralEventContext: Kt, text: Rt, Icon: St.a, onClick: o }),
                    i &&
                      n.push({
                        behavioralEventContext: Mt,
                        text: Lt,
                        Icon: Ft.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    m.a.createElement(we.a, { items: n, onCloseRequested: e })
                  )
                }
              },
              [i, l, o],
            )
          return m.a.createElement(Te.a, {
            accessibilityLabel: It,
            behavioralEventContext: wt,
            icon: xt,
            renderMenu: c,
            style: Ot.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        jt = m.a.memo(At),
        Nt = { context: 'CommunityShareButtonContainerQuery' },
        Pt = void 0 !== bt ? bt : (bt = t('Rc1A')),
        Bt = function (e) {
          var n = e.communityId,
            t = Object(se.a)(Pt, { communityId: n })
          return m.a.createElement(jt, { community: t.community })
        },
        Ht = function (e) {
          return m.a.createElement(J.a, { errorConfig: Nt }, m.a.createElement(Bt, { communityId: e.communityId }))
        },
        Dt = m.a.memo(Ht),
        Ut = t('m3Bd'),
        Vt = t.n(Ut),
        qt = t('1Idg'),
        zt = t('G6rE'),
        Qt = t('li/m'),
        Wt = ['loggedInUser'],
        Xt = Object(he.a)()
          .propsFromState(function () {
            return { community: qt.a, loggedInUser: zt.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              t = Vt()(e, Wt)
            return s()({ isProtectedUser: null == n ? void 0 : n.protected }, t)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_e.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: Qt.b,
              leave: Qt.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        Jt = g.a.hb9400db,
        Gt = function (e) {
          var n = e.community,
            a = v()(void 0 !== ht ? ht : (ht = t('ldL/')), n),
            l = a.description,
            r = a.role,
            i = m.a.useState(!1),
            o = un()(i, 2),
            c = o[0],
            s = o[1],
            u = m.a.useState(!1),
            d = un()(u, 2),
            y = d[0],
            p = d[1],
            g = m.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), s(!c)
              },
              [c],
            )
          return !l || Object(f.f)(r)
            ? null
            : m.a.createElement(
                Ie.a,
                { style: Yt.description },
                m.a.createElement(h.b, { color: 'white', getTextOverflow: p, numberOfLines: c ? void 0 : 2 }, l),
                !c && y ? m.a.createElement(h.b, { color: 'white', onPress: g, weight: 'bold' }, Jt) : null,
              )
        },
        Yt = K.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Zt = m.a.memo(Gt),
        $t = { context: 'CommunityDescriptionToggleQuery' },
        ea = void 0 !== _t ? _t : (_t = t('2fn4')),
        na = function (e) {
          var n = e.communityId,
            t = Object(se.a)(ea, { communityId: n })
          return m.a.createElement(Zt, { community: t.community })
        },
        ta = function (e) {
          return m.a.createElement(J.a, { errorConfig: $t }, m.a.createElement(na, { communityId: e.communityId }))
        },
        aa = m.a.memo(ta),
        la = t('MtXG'),
        ra = g.a.d58baa7e,
        ia = function (e) {
          var n = e.community,
            a = v()(void 0 !== vt ? vt : (vt = t('WuQQ')), n).member_count,
            l = void 0 === a ? 0 : a,
            r = ra(l)
          return m.a.createElement(
            la.a.Group,
            null,
            m.a.createElement(
              la.a,
              { onMedia: !0 },
              m.a.createElement(
                h.b,
                { color: 'white' },
                m.a.createElement(
                  g.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  m.a.createElement(la.a.Value, null, g.a.ibd0106d({ formattedCount: r })),
                  m.a.createElement(la.a.Label, null, g.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        oa = t('cm6r'),
        ca = t('MAI/'),
        sa = t('I4+6'),
        ua = sa.a.generate({
          backgroundColor: K.a.theme.colors.transparent,
          color: K.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        ma = K.a.create(function (e) {
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
        da = function (e) {
          var n = e.community,
            a = v()(void 0 !== kt ? kt : (kt = t('Eh7u')), n),
            l = S('c9s_ui_colors_enabled_rweb'),
            r = a.members_facepile_results,
            i = a.rest_id,
            o = (function (e) {
              var n,
                t = [],
                a = et()(e)
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  var l = n.value.result
                  if ('User' === (null == l ? void 0 : l.__typename)) {
                    var r,
                      i = null === (r = l.legacy) || void 0 === r ? void 0 : r.profile_image_url_https
                    i && t.push(i)
                  }
                }
              } catch (o) {
                a.e(o)
              } finally {
                a.f()
              }
              return t
            })(r),
            c = $(a),
            s = l ? Z.a.getCommunityBackgroundColorName(c) : void 0
          return m.a.createElement(
            oa.a,
            { interactiveStyles: ua, link: '/i/communities/'.concat(i, '/members'), style: ma.membersContainer },
            o.length > 0
              ? m.a.createElement(ca.a, {
                  borderColor: s,
                  style: ma.rightSpace,
                  userAvatarSize: 'large',
                  userAvatarUrls: o,
                })
              : null,
            m.a.createElement(ia, { community: a }),
          )
        },
        ya = { context: 'CommunityFacePileQuery' },
        pa = void 0 !== Et ? Et : (Et = t('ZYKh')),
        ga = function (e) {
          var n = e.communityId,
            t = Object(se.a)(pa, { communityId: n })
          return m.a.createElement(da, { community: t.community })
        },
        fa = function (e) {
          return m.a.createElement(J.a, { errorConfig: ya }, m.a.createElement(ga, { communityId: e.communityId }))
        },
        ba = t('k/OQ'),
        ha = g.a.a0e3ece4,
        _a = g.a.ha8209bb,
        va = g.a.d601fc2f,
        ka = g.a.b721eb37,
        Ea = { viewType: 'description' },
        Ca = { viewType: 'facepiles_with_count' },
        Sa = (function (e) {
          an()(t, e)
          var n = rn()(t)
          function t() {
            var e
            Ye()(this, t)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              cn()(nn()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              cn()(nn()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
              cn()(
                nn()(e),
                '_isTimelinesRankingEnabled',
                e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
              ),
              cn()(
                nn()(e),
                '_isCommunitiesSharingEnabled',
                e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
              ),
              cn()(nn()(e), '_renderTabs', function () {
                var n = e.props.communityId,
                  t = [
                    { to: '/i/communities/'.concat(n), label: _a, key: _a },
                    { to: '/i/communities/'.concat(n, '/latest'), label: va, key: va },
                    { to: '/i/communities/'.concat(n, '/about'), label: ka, key: ka },
                  ]
                return m.a.createElement(ba.a, {
                  accessibilityLabel: ha,
                  links: e._isTimelinesRankingEnabled
                    ? t
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== va
                        })
                      })(t),
                })
              }),
              e
            )
          }
          return (
            $e()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.community,
                    t = e.communityId,
                    a = e.createLocalApiErrorHandler,
                    l = e.history,
                    r = e.isProtectedUser,
                    i = e.join,
                    o = e.leave
                  return n
                    ? m.a.createElement(
                        X.a,
                        { behavioralEventViewType: 'timeline' },
                        m.a.createElement(
                          Ie.a,
                          { style: Fa.container },
                          m.a.createElement(
                            Ie.a,
                            null,
                            m.a.createElement(Zn, { communityId: t }),
                            m.a.createElement(
                              fe.a,
                              { behavioralEventContext: Ea },
                              m.a.createElement(
                                ut,
                                { communityId: t },
                                m.a.createElement(
                                  h.b,
                                  { color: 'white', size: 'title2', style: Fa.name, weight: 'bold' },
                                  n.name.trim(),
                                ),
                                m.a.createElement(aa, { communityId: t }),
                                m.a.createElement(
                                  fe.a,
                                  { behavioralEventContext: Ca },
                                  m.a.createElement(
                                    Ie.a,
                                    { style: Fa.bottomContainer },
                                    m.a.createElement(fa, { communityId: t }),
                                    m.a.createElement(
                                      Ie.a,
                                      { style: Fa.buttons },
                                      this._isCommunitiesSharingEnabled
                                        ? m.a.createElement(Dt, { communityId: t })
                                        : m.a.createElement(mt.a, {
                                            communityId: t,
                                            style: Fa.inviteButton,
                                            type: 'onMediaOutlined',
                                          }),
                                      this._isParticipationEnabled
                                        ? m.a.createElement(jn, {
                                            community: n,
                                            createLocalApiErrorHandler: a,
                                            history: l,
                                            isProtectedUser: r,
                                            join: i,
                                            leave: o,
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
            t
          )
        })(m.a.Component)
      cn()(Sa, 'contextType', C.a)
      var Fa = K.a.create(function (e) {
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
        Ia = Xt(Sa),
        wa = t('eSoz'),
        Ta = t('hqKg'),
        Ka = t('8Lfv'),
        Ma = t('LI/a'),
        La = function (e, n) {
          return n.communityId
        },
        Ra = function (e, n) {
          var t = wa.c.select(e, n.communityId)
          return Object(f.f)(null == t ? void 0 : t.role)
        },
        xa = Object(he.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: Ra,
              rankedTweetsModule: Object(Ta.createSelector)(La, function (e) {
                return Object(Ma.b)(e)
              }),
              tweetsModule: Object(Ta.createSelector)(La, function (e) {
                return Object(Ma.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: Ka.a,
              createLocalApiErrorHandler: Object(_e.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        Oa = t('FIs5'),
        Aa = t('EUHl'),
        ja = t('7BdX'),
        Na = g.a.c18e3a3e,
        Pa = g.a.d68146c0,
        Ba = g.a.h5245afa,
        Ha = g.a.f05dbeff,
        Da = { page: 'community', section: 'home' },
        Ua = { page: 'community', section: 'latest' },
        Va = { page: 'community', section: 'tweets' },
        qa = xa(function (e) {
          var n = m.a.useContext(C.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            t = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            l = e.isCommunityMember,
            r = e.rankedTweetsModule,
            i = e.tweetsModule,
            o = e.type === ql.Home ? { module: r, scribeNamespace: Da } : { module: i, scribeNamespace: Ua },
            c = n ? o : { module: i, scribeNamespace: Va },
            s = c.module,
            u = c.scribeNamespace
          m.a.useEffect(
            function () {
              t(s).catch(a())
            },
            [t, a, l, s],
          )
          var d = m.a.useCallback(function () {
            return m.a.createElement(Oa.a, { buttonType: 'brandOutlined', header: Na, message: Pa })
          }, [])
          return m.a.createElement(
            ce.c,
            { namespace: u },
            m.a.createElement(
              X.a,
              { behavioralEventViewType: 'tweets' },
              m.a.createElement(G.a, {
                loadingAccessibilityLabel: Ha,
                module: s,
                newTweetsPillMode: Aa.a.CLIENT,
                prerollDisplayLocation: ja.c.OTHER,
                refreshControl: null,
                renderEmptyState: d,
                title: Ba,
              }),
            ),
          )
        }),
        za = t('o3oN'),
        Qa = t('/ekK'),
        Wa = ['loggedInUser'],
        Xa = function (e, n) {
          var t = qt.c(e, n)
          return !t || Object(Qa.a)(e, t, 'mod_education_flag')
        },
        Ja = Object(he.a)()
          .propsFromState(function () {
            return {
              communityId: qt.c,
              community: qt.a,
              communityTheme: qt.f,
              fetchStatus: qt.b,
              hasShownModEducation: Xa,
              membershipsFetchStatus: za.d,
              isCommunityMember: qt.g,
              joinActionResultType: qt.h,
              loggedInUser: zt.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              t = Vt()(e, Wa)
            return s()({ screenName: n ? n.screen_name : void 0 }, t)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_e.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: wa.c.fetchOneIfNeeded,
              fetchCommunityMemberships: za.a,
              setFlag: Qa.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        Ga = (t('MvUL'), t('zCf4')),
        Ya = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(xe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Re.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
                d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
              }),
              m.a.createElement('path', {
                d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
              }),
            ),
          )
        }
      Ya.metadata = { width: 24, height: 24 }
      var Za,
        $a,
        el = Ya,
        nl = t('wpLu'),
        tl = g.a.bf359e0d,
        al = g.a.e8fcdd3a,
        ll = g.a.b37d580e,
        rl = g.a.cafca4b2,
        il = g.a.ea3b38fa,
        ol = g.a.jd667130,
        cl = g.a.ca7eeabf,
        sl = g.a.acae4034,
        ul = g.a.e2186ee2,
        ml = g.a.j24c37b2,
        dl = function (e) {
          var n = v()(void 0 !== Za ? Za : (Za = t('2rr8')), e.community),
            a = Object(Ga.f)(),
            l = m.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(n.rest_id, '/'))
              },
              [a, n.rest_id],
            ),
            r = m.a.createElement(
              Ie.a,
              { accessibilityRole: 'list', style: yl.rulesContainer },
              n.rules.map(function (e) {
                return m.a.createElement(
                  h.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: yl.rule },
                  e.name,
                )
              }),
            ),
            i = 'Public' === n.access,
            o = i ? il : ll,
            c = i ? ol : rl
          return m.a.createElement(
            Rn.a,
            {
              actionLabel: ml,
              graphicDisplayMode: 'none',
              headline: tl,
              onAction: l,
              onClose: l,
              subtext: al,
              withCloseButton: !0,
            },
            m.a.createElement(
              Ie.a,
              { style: yl.infoItemsContainer },
              m.a.createElement(w.a, {
                containerStyle: yl.itemContainer,
                items: [
                  { label: o, description: c, decoration: m.a.createElement(el, { style: yl.decorationContainer }) },
                  { label: cl, decoration: m.a.createElement(nl.a, { style: yl.decorationContainer }), description: r },
                  { label: sl, description: ul, decoration: m.a.createElement(Ae, { style: yl.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        yl = K.a.create(function (e) {
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
        pl = m.a.memo(dl),
        gl = { context: 'CommunityCreationSummaryQuery' },
        fl = void 0 !== $a ? $a : ($a = t('EFld')),
        bl = function (e) {
          var n = e.communityId,
            t = Object(se.a)(fl, { communityId: n }, { fetchPolicy: 'store-and-network' })
          return m.a.createElement(pl, { community: t.community })
        },
        hl = function (e) {
          return m.a.createElement(J.a, { errorConfig: gl }, m.a.createElement(bl, { communityId: e.communityId }))
        },
        _l = m.a.memo(hl),
        vl = t('dwig'),
        kl = t('MDbM'),
        El = t('0+qk'),
        Cl = t('oQhu'),
        Sl = t('/de5'),
        Fl =
          (t('FtFR'),
          t('hBvt'),
          Object(he.a)()
            .propsFromState(function () {
              return { flags: Qa.b }
            })
            .propsFromActions(function () {
              return { setFlag: Qa.c }
            })),
        Il = t('hOZg'),
        wl = t('WtWS'),
        Tl = t('0ULw'),
        Kl = g.a.c66b37f9,
        Ml = g.a.g2768d0e,
        Ll = g.a.b192b58b,
        Rl = g.a.gd30278f,
        xl = g.a.cbdddb09,
        Ol = g.a.h5890b1a,
        Al = [
          {
            flag: 'setup_clicked_rules',
            title: g.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: g.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: g.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: g.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(Rl, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        jl = m.a.memo(function (e) {
          var n = e.community.id_str,
            t = e.flags,
            a = e.setFlag,
            l = m.a.useContext(C.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            r = Object(Ga.f)(),
            i = m.a.useCallback(
              function () {
                a(n, 'setup_show_checklist', !1)
              },
              [n, a],
            )
          if (!t.setup_show_checklist || !l) return null
          var o = function (e) {
              a(n, e.flag, !0).then(function () {
                r.push(e.link(n))
              })
            },
            c = function (e, n) {
              13 === n.keyCode && o(e)
            }
          return m.a.createElement(
            Ie.a,
            { style: Nl.wrapper },
            m.a.createElement(Te.a, {
              accessibilityLabel: Ll,
              icon: m.a.createElement(Il.a, { style: Nl.close }),
              onClick: i,
              pullRight: !0,
              size: 'medium',
              style: Nl.dismiss,
              type: 'brandText',
            }),
            m.a.createElement(h.b, { size: 'title3', style: Nl.headline, weight: 'bold' }, Kl),
            m.a.createElement(h.b, { style: Nl.subtext }, Ml),
            m.a.createElement(
              Ie.a,
              { accessibilityRole: 'list', style: Nl.list },
              Al.map(function (e) {
                var n = Boolean(t[e.flag])
                return m.a.createElement(
                  Ie.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !n,
                    key: e.flag,
                    onClick: n ? void 0 : o.bind(null, e),
                    onKeyPress: n ? void 0 : c.bind(null, e),
                    style: [Nl.entry, n ? Nl.completedEntry : Nl.uncompletedEntry],
                  },
                  m.a.createElement(h.b, { weight: 'bold' }, e.title),
                  n
                    ? m.a.createElement(wl.a, { accessibilityLabel: xl, style: Nl.iconCompleted })
                    : m.a.createElement(Tl.a, { accessibilityLabel: Ol, style: Nl.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        Nl = K.a.create(function (e) {
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
        Pl = Fl(jl),
        Bl = t('VS6U'),
        Hl = t('QRqA'),
        Dl = t('Qwev'),
        Ul = t('mw9i'),
        Vl = { type: 'serversideContextKey', serversideContextType: 'community' },
        ql = Object.freeze({ Home: 'home', Latest: 'latest' }),
        zl = g.a.a7c2e06c,
        Ql = g.a.j24c37b2,
        Wl = g.a.a94092a1,
        Xl = g.a.i1fda797,
        Jl = function (e) {
          var n = e.community,
            t = e.communityId,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            r = e.fetchCommunityMemberships,
            i = e.fetchStatus,
            o = e.hasShownModEducation,
            c = e.history,
            u = e.isCommunityMember,
            d = e.joinActionResultType,
            y = e.location,
            p = e.match,
            g = e.membershipsFetchStatus,
            b = e.screenName,
            h = e.setFlag,
            _ = m.a.useContext(C.a).featureSwitches,
            v = _.isTrue('c9s_participation_enabled'),
            k = _.isTrue('c9s_edit_moderators_enabled'),
            E = m.a.useCallback(
              function () {
                t && l(t).catch(a({})), g === Se.a.NONE && r().catch(a())
              },
              [t, g, l, r, a],
            )
          m.a.useEffect(
            function () {
              E()
            },
            [E],
          )
          var S = m.a.useCallback(
            function () {
              t && h(t, 'mod_education_flag', !0)
            },
            [t, h],
          )
          if (!t) return null
          var F,
            I,
            w = null == n ? void 0 : n.name,
            T = null == n ? void 0 : n.role,
            K = v && u,
            M = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            L = k && T === f.a.Moderator && !o,
            R = m.a.createElement(Je, { canModerate: Object(f.c)(T), communityId: t, userRole: T }),
            x = function () {
              return { selectedCommunityId: t, defaultText: '' }
            },
            O = Object(Cl.a)(function (e, n) {
              return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === n, theme: e.theme } }
            }),
            A = Object(Cl.a)(function (e) {
              return { clientEntity: s()(s()({}, Vl), {}, { serversideContextId: e }), viewType: 'community' }
            }),
            j = function () {
              return m.a.createElement(Ia, { communityId: t, history: c, match: p })
            }
          return m.a.createElement(
            fe.a,
            { behavioralEventContext: A(t) },
            m.a.createElement(Bl.a, {
              backLocation: b && '/'.concat(b, '/communities'),
              composeOptions: x(),
              documentTitle: w ? zl({ communityName: w }) : '',
              history: c,
              primaryContent:
                ((F = T === f.a.Admin && void 0 !== y.query.show_creation_summary),
                (I = K ? m.a.createElement(El.a, { getLocationState: x, history: c }) : null),
                t && i === kl.a.LOADING
                  ? m.a.createElement(Dl.a, { style: Gl.topMargin })
                  : n && i === kl.a.LOADED
                  ? m.a.createElement(
                      vl.a,
                      { component: Ul.a, fab: I },
                      m.a.createElement(Hl.a, O(n, d)),
                      F && m.a.createElement(_l, { communityId: t }),
                      j(),
                      m.a.createElement(Pl, { community: n }),
                      m.a.createElement(
                        Ga.b,
                        { exact: !0, path: '/i/communities/'.concat(t, '/about') },
                        m.a.createElement(ge, { communityId: t }),
                      ),
                      m.a.createElement(
                        Ga.d,
                        null,
                        m.a.createElement(
                          Ga.b,
                          { exact: !0, path: '/i/communities/'.concat(t, '/') },
                          m.a.createElement(qa, { communityId: t, location: y, match: p, type: ql.Home }),
                        ),
                        m.a.createElement(
                          Ga.b,
                          { path: '/i/communities/'.concat(t, '/latest') },
                          m.a.createElement(qa, { communityId: t, location: y, match: p, type: ql.Latest }),
                        ),
                      ),
                    )
                  : m.a.createElement(Sl.b, { history: c, location: y, match: p })),
              rightControl: R,
              sidebarContent: m.a.createElement(be.a, { communityId: t, withCommunityRules: M }),
              title: w || null,
              withTweetButton: K,
            }),
            L
              ? m.a.createElement(Rn.a, {
                  actionLabel: Ql,
                  graphicDisplayMode: 'none',
                  headline: Wl,
                  onAction: S,
                  onClose: S,
                  subtext: Xl,
                  withCloseButton: !0,
                })
              : null,
          )
        },
        Gl = K.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        Yl = Ja(Jl)
      n.default = Yl
    },
    U0Qk: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return g
      })
      var a = t('ddV6'),
        l = t.n(a),
        r = t('ERkP'),
        i = t.n(r),
        o = t('v6aA'),
        c = t('p+r5'),
        s = t('3XMw'),
        u = t.n(s),
        m = t('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        p = u.a.e988475f,
        g = function (e) {
          var n = e.autoFocus,
            t = void 0 !== n && n,
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
                var n = e.target.value,
                  t = !Object(m.g)(n, 3, k)
                t && f(p({ minCharacterCount: 3, maxCharacterCount: k })), v(t), r(n, t)
              },
              [k, f, r],
            )
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: t,
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
    U3Z9: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CreateCommunityModal', function () {
          return M
        })
      var a = t('ddV6'),
        l = t.n(a),
        r = (t('KqXw'), t('MvUL'), t('ERkP')),
        i = t.n(r),
        o = t('+Kfv'),
        c = t('ROT1'),
        s = t('U0Qk'),
        u = t('eSoz'),
        m = t('RqPI'),
        d = t('rxPX'),
        y = Object(d.a)()
          .propsFromState(function () {
            return { communitiesActions: m.f }
          })
          .propsFromActions(function () {
            return { createCommunity: u.b }
          }),
        p = t('jHSc'),
        g = t('3XMw'),
        f = t.n(g),
        b = t('0weh'),
        h = t('5FtR'),
        _ = t('MWbm'),
        v = t('/yvb'),
        k = t('4zmP'),
        E = t('t62R'),
        C = t('rHpw'),
        S = f.a.i6e7e298,
        F = f.a.a226497c,
        I = f.a.c9d56b71,
        w = f.a.fc2a5c92,
        T = f.a.c1ad5a11,
        K = { viewType: 'community' },
        M = i.a.memo(function (e) {
          var n = e.communitiesActions,
            t = e.createCommunity,
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
            R = i.a.useState(''),
            x = l()(R, 2),
            O = x[0],
            A = x[1],
            j = i.a.useState(''),
            N = l()(j, 2),
            P = N[0],
            B = N[1],
            H = i.a.useState(null),
            D = l()(H, 2),
            U = D[0],
            V = D[1],
            q = i.a.useCallback(function (e, n) {
              A(e), d(n)
            }, []),
            z = i.a.useCallback(function (e, n) {
              B(e), 0 === e.length ? C(!1) : C(n)
            }, []),
            Q = i.a.useCallback(
              function () {
                V(null),
                  t(O, { description: P })
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var n = null == e ? void 0 : e.normalized.result
                        'string' == typeof n && a.replace('/i/communities/'.concat(n, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && V(e)
                    })
                    .catch(function (e) {
                      V({ error: 'GraphQL error', reason: e })
                    })
              },
              [O, P, t, a],
            )
          if (null == n || !n.create) return i.a.createElement(h.a, { to: '/home' })
          var W = i.a.createElement(v.a, { disabled: M, onClick: Q, size: 'small', type: 'brandFilled' }, S),
            X = U
              ? i.a.createElement(
                  _.a,
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
                rightControl: W,
                title: F,
              },
              i.a.createElement(
                i.a.Fragment,
                null,
                X,
                i.a.createElement(E.b, { color: 'gray700', style: L.text }, I),
                i.a.createElement(c.a, { autoFocus: !0, communityName: O, onChange: q }),
                i.a.createElement(s.a, { communityPurpose: P, onChange: z }),
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
        R = y(M)
      n.default = R
    },
    WuQQ: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'X/n0': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    ZYKh: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(f.hash = 'e6fa6a6403decebf26b0d7a5b8332948'), (n.default = f)
    },
    'a/V2': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(o.hash = '4eb6bb323cb9d6961883ce5100bc85d6'), (n.default = o)
    },
    b5s6: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        r = t('m3Bd'),
        i = t.n(r),
        o = t('ERkP'),
        c = t.n(o),
        s = t('v6aA'),
        u = t('XOJV'),
        m = t('eSoz'),
        d = t('rxPX'),
        y = t('0KEI'),
        p = function (e, n) {
          return n.tweetId
        },
        g = function (e, n) {
          var t = n.tweetId,
            a = t && u.a.select(e, t)
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
        b = t('YeIG'),
        h = t('uCxL'),
        _ = t('x5Pi'),
        v = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = f(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            o = (e.tweetId, i()(e, v)),
            u = c.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == r ? void 0 : r.community_id_str
          c.a.useEffect(
            function () {
              y && Object(b.a)(n) && a(y).catch(t())
            },
            [n, y, t, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            g = r && Object(_.f)(r, d, n),
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
      n.a = k
    },
    bCEw: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('K1iM')),
        l = t('23An'),
        r = t('Ud88'),
        i = t('aQQo'),
        o = i.loadQuery,
        c = i.useTrackLoadQueryInRender,
        s = t('ERkP'),
        u = s.useCallback,
        m = s.useEffect,
        d = s.useRef,
        y = s.useState,
        p = t('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var t = null != n ? n : g,
          i = r()
        c()
        var s = l(),
          p = d(new Set([t])),
          b = y(function () {
            return t
          }),
          h = b[0],
          _ = b[1],
          v = y(function () {
            return t
          }),
          k = v[0],
          E = v[1]
        t !== k && (p.current.add(t), E(t), _(t))
        var C = u(
            function () {
              s.current && (p.current.add(g), _(g))
            },
            [s],
          ),
          S = u(
            function (n, t) {
              var a =
                null != t && t.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: t.fetchPolicy,
                      networkCacheConfig: t.networkCacheConfig,
                      __nameForWarning: t.__nameForWarning,
                    }
                  : t
              if (s.current) {
                var l,
                  r = o(null !== (l = null == t ? void 0 : t.__environment) && void 0 !== l ? l : i, e, n, a)
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
              var n = p.current
              if (s.current) {
                var t,
                  l = (0, a.default)(n)
                try {
                  for (l.s(); !(t = l.n()).done; ) {
                    var r = t.value
                    if (r === h) break
                    n.delete(r),
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
                var n,
                  t = (0, a.default)(p.current)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var l = n.value
                    'NullQueryReference' !== l.kind &&
                      (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (r) {
                  t.e(r)
                } finally {
                  t.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, S, C]
        )
      }
    },
    cI4y: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(u.hash = 'd5eb23d40bcb19e36e32afc95695f334'), (n.default = u)
    },
    'cz/h': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitiesDiscoveryScreen', function () {
          return K
        })
      var a = t('VrFO'),
        l = t.n(a),
        r = t('Y9Ll'),
        i = t.n(r),
        o = t('1Pcy'),
        c = t.n(o),
        s = t('5Yy7'),
        u = t.n(s),
        m = t('2VqO'),
        d = t.n(m),
        y = t('KEM+'),
        p = t.n(y),
        g = (t('2G9S'), t('ERkP')),
        f = t.n(g),
        b = t('es0u'),
        h = t('WpDa'),
        _ = t('ZNT5'),
        v = Object(_.a)({
          timelineId: 'communitiesDiscoveryTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunityDiscoveryTimeline
          },
          getEndpointParams: function (e) {
            var n = e.count,
              t = e.cursor
            return { count: n, cursor: 'string' == typeof t ? t : void 0 }
          },
          context: 'FETCH_COMMUNITIES_DISCOVERY_TIMELINE',
          perfKey: 'communitiesDiscoveryTimeline',
          formatResponse: h.a,
        }),
        k = t('OUEC'),
        E = t('3XMw'),
        C = t.n(E),
        S = t('oQhu'),
        F = t('yoO3'),
        I = t('fTQJ'),
        w = t('VS6U'),
        T = C.a.cb6adb1f,
        K = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t() {
            var e
            l()(this, t)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(r))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var n = e._getModule()
                return f.a.createElement(I.a, { entryConfiguration: k.a, module: n, refreshControl: null, title: T })
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
            i()(t, [
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
            t
          )
        })(f.a.Component)
      n.default = K
    },
    dMLx: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '66a8dff93611f1369bc53655a9aacb32'), (n.default = l)
    },
    fK4d: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    fS8x: function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        r = t('VrFO'),
        i = t.n(r),
        o = t('Y9Ll'),
        c = t.n(o),
        s = t('1Pcy'),
        u = t.n(s),
        m = t('5Yy7'),
        d = t.n(m),
        y = t('2VqO'),
        p = t.n(y),
        g = t('KEM+'),
        f = t.n(g),
        b = t('/NU0'),
        h = t('rxPX'),
        _ = t('AspN'),
        v = function (e, n) {
          return n.media ? n.media : Object(b.a)(n.mediaId) ? Object(_.k)(e, n.mediaId)[0] : void 0
        },
        k = function (e, n) {
          return void 0 !== n.mediaId ? n.mediaId : n.media ? n.media.id : null
        },
        E = Object(h.a)()
          .propsFromState(function () {
            return { media: v, mediaId: k }
          })
          .propsFromActions(function () {
            return { processMedia: _.f, updateMediaUpload: _.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = t('jHSc'),
        S = t('3XMw'),
        F = t.n(S),
        I = t('EeFI'),
        w = 'applyButton',
        T = t('/yvb'),
        K = t('rHpw'),
        M = F.a.gd80afba,
        L = F.a.a753a87f,
        R = (function (e) {
          d()(t, e)
          var n = p()(t)
          function t(e) {
            var a
            return (
              i()(this, t),
              (a = n.call(this, e)),
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
                  n = e.analytics,
                  t = e.onCancel
                n.scribe({ action: 'cancel' }), t && t()
              }),
              f()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  n = a._cropper.current
                if (n) {
                  var t = a.props,
                    l = t.analytics,
                    r = t.media,
                    i = t.mediaId,
                    o = t.onDone,
                    c = t.processMedia,
                    s = t.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = n.getCropData(),
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
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.defaultAspectRatio,
                    t = e.history,
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
                      history: t,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || M,
                    },
                    l.a.createElement(I.a, {
                      defaultAspectRatio: n,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: r,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            t
          )
        })(l.a.Component),
        x = K.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(R),
        A = t('X8FW'),
        j = K.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      n.a = function (e) {
        return l.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: j.modal },
          l.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(m.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (n.default = m)
    },
    gDCe: function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        r = t('v6aA'),
        i = t('Ig1G'),
        o = t('3XMw'),
        c = t.n(o),
        s = t('Nh1N'),
        u = t('MWbm'),
        m = t('4zmP'),
        d = t('rHpw'),
        y = c.a.b6e22e15,
        p = c.a.d17c10d9,
        g = c.a.a1ecaf33,
        f = l.a.memo(function (e) {
          var n,
            t = e.community,
            a = l.a.useContext(r.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !t || t.role !== i.a.Admin || a
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
                          ((n = t.id_str),
                          'Hi, my community is (https://twitter.com/i/communities/'.concat(
                            n,
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
      n.a = f
    },
    'ii+P': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return i
      })
      t('FtFR')
      var a = t('ERkP'),
        l = t.n(a),
        r = t('wtru')
      function i(e) {
        var n = Object(r.b)()
        return [
          !!n && !n.flags[e],
          l.a.useCallback(
            function () {
              null == n || n.addFlag(e)
            },
            [n, e],
          ),
        ]
      }
    },
    jC8Z: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(s.hash = '765e8a2b911d9e61edc36a015f192e8c'), (n.default = s)
    },
    jtO7: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        r = t('m3Bd'),
        i = t.n(r),
        o = t('ERkP'),
        c = t.n(o),
        s = t('t62R'),
        u = t('I4+6'),
        m = t('cm6r'),
        d = t('rHpw'),
        y = t('MWbm'),
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
      n.a = function (e) {
        var n = e.align,
          t = void 0 === n ? 'center' : n,
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
            c.a.createElement(s.b, { align: t, color: a }, r),
          ),
        )
      }
    },
    kIAd: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return l
      }),
        t.d(n, 'b', function () {
          return r
        })
      var a = t('0vv5'),
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
            { type: 'hashtag', regexp: t.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
    krnS: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return ve
      })
      var a,
        l,
        r,
        i,
        o = t('ERkP'),
        c = t.n(o),
        s = t('v6aA'),
        u = t('WpDa'),
        m = t('ZNT5'),
        d = t('Ig1G'),
        y = t('FIs5'),
        p = t('3XMw'),
        g = t.n(p),
        f = (t('enFi'), t('TEoO')),
        b = t('Fr3L'),
        h = t('97Jx'),
        _ = t.n(h),
        v = t('yiKp'),
        k = t.n(v),
        E = t('ddV6'),
        C = t.n(E),
        S = (t('yH/f'), t('ho0z'), t('1YZw')),
        F = t('uDfI'),
        I = t('yrzJ'),
        w = t('mjJ+'),
        T = t('IMA+'),
        K = t('IG7M'),
        M = t('eb3s'),
        L = t('jAXQ'),
        R = t.n(L),
        x = t('9SqB'),
        O = t.n(x),
        A = t('Bg9b'),
        j = t('boUI'),
        N = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        P = g.a.hd8c22d2,
        B = g.a.c3153100,
        H = g.a.g30bc699,
        D = g.a.e585d844,
        U = g.a.cab7c6f8,
        V = g.a.af40a8ef,
        q = g.a.e96d5254,
        z = g.a.f348a395,
        Q = g.a.c3a1aebd,
        W = g.a.c273c8a6,
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
          headline: W,
          text: function (e) {
            return c.a.createElement(
              g.a.I18NFormatMessage,
              { $i18n: 'c3a1f2be' },
              c.a.createElement(I.a, { screenName: e }),
            )
          },
        },
        ee = void 0 !== a ? a : (a = t('rPb+')),
        ne = function (e) {
          var n = c.a.useContext(s.a),
            a = n.featureSwitches,
            r = n.loggedInUserId,
            i = a.isTrue('c9s_edit_moderators_enabled'),
            o = e.communityId,
            u = e.userResult,
            m = c.a.useState(null),
            y = C()(m, 2),
            p = y[0],
            g = y[1],
            f = Object(F.c)(),
            b = R()(void 0 !== l ? l : (l = t('tgdH')), u).result,
            h = O()(ee),
            v = C()(h, 2),
            E = v[0],
            I = v[1],
            L = c.a.useCallback(
              function (e) {
                var n = e.communityId,
                  t = e.errorMessage,
                  a = e.recordId,
                  l = e.role,
                  r = e.successMessage,
                  i = e.userId
                E({
                  variables: { communityId: n, userId: i, role: l },
                  updater: function (e) {
                    var t = e.get(a)
                    null == t || t.setValue(l, 'community_role(community_id:"'.concat(n, '")'))
                  },
                  onCompleted: function () {
                    f(Object(S.b)({ text: r }))
                  },
                  onError: function () {
                    f(Object(S.b)({ text: t }))
                  },
                })
              },
              [E, f],
            ),
            x = c.a.useCallback(
              function (e) {
                var n,
                  t,
                  a,
                  l,
                  r = e.communityId,
                  i = e.recordId,
                  o = e.roleAction,
                  c = e.screenName,
                  s = e.userId
                switch (o) {
                  case N.PromoteModerator:
                    ;(n = Z), (a = d.a.Moderator), (l = q({ screenName: c })), (t = z({ screenName: c }))
                    break
                  case N.DemoteModerator:
                    ;(n = $), (a = d.a.Member), (l = J({ screenName: c })), (t = G({ screenName: c }))
                    break
                  default:
                    return
                }
                g(
                  k()(
                    k()({}, n),
                    {},
                    {
                      text: n.text(c),
                      onConfirm: function () {
                        L({ communityId: r, errorMessage: t, recordId: i, role: a, successMessage: l, userId: s }),
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
                var n = b.community_role,
                  t = b.id,
                  a = b.legacy,
                  l = a.id_str,
                  r = a.screen_name
                if (!r) return null
                var s = []
                if (i)
                  switch (n) {
                    case d.a.Moderator:
                      s.push({
                        behavioralEventContext: { viewType: 'remove_moderator' },
                        disabled: I,
                        text: Q,
                        Icon: A.a,
                        onClick: function () {
                          return x({
                            communityId: o,
                            recordId: t,
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
                        text: D,
                        Icon: A.a,
                        onClick: function () {
                          return x({
                            communityId: o,
                            recordId: t,
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
            X = void 0 === W ? '' : W,
            ne = U.profile_image_url_https,
            te = U.protected,
            ae = U.screen_name,
            le = U.verified
          if (!ae || !ne || !X) return null
          var re = Y[B]
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(T.a, {
              avatarUri: ne,
              decoration: V !== r ? c.a.createElement(K.a, { renderActionMenu: P }) : void 0,
              displayMode: 'UserCompact',
              displayNameLabel: re,
              isProtected: te,
              isVerified: le,
              name: X,
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
        te = t('DQzJ'),
        ae = { context: 'members' },
        le = void 0 !== r ? r : (r = t('cI4y')),
        re = function (e) {
          return e.__id
        },
        ie = function (e) {
          var n = e.communityId,
            t = e.renderEmptyState,
            a = Object(te.a)(le, { communityId: n }),
            l = a.data,
            r = a.fetchNext,
            i = l.community.members_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(n),
            identityFunction: re,
            items: i,
            noItemsRenderer: t,
            onNearEnd: r,
            renderer: function (e) {
              return c.a.createElement(ne, { communityId: n, userResult: e })
            },
          })
        },
        oe = function (e) {
          return c.a.createElement(b.a, { errorConfig: ae }, c.a.createElement(ie, e))
        },
        ce = t('oQhu'),
        se = { context: 'members' },
        ue = void 0 !== i ? i : (i = t('w9f9')),
        me = function (e) {
          return e.__id
        },
        de = function (e) {
          var n = e.communityId,
            t = e.renderEmptyState,
            a = Object(te.a)(ue, { communityId: n }),
            l = a.data,
            r = a.fetchNext,
            i = l.community.moderators_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(n),
            identityFunction: me,
            items: i,
            noItemsRenderer: t,
            onNearEnd: r,
            renderer: function (e) {
              return c.a.createElement(ne, { communityId: n, userResult: e })
            },
          })
        },
        ye = function (e) {
          return c.a.createElement(b.a, { errorConfig: se }, c.a.createElement(de, e))
        },
        pe = t('fTQJ'),
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
              getEndpointParams: function (n) {
                var t = n.count,
                  a = n.cursor
                return { count: t, cursor: 'string' == typeof a ? a : void 0, communityId: e }
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
              getEndpointParams: function (n) {
                var t = n.count,
                  a = n.cursor
                return { count: t, cursor: 'string' == typeof a ? a : void 0, communityId: e }
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
      n.b = function (e) {
        var n = c.a.useContext(s.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          t = e.communityId,
          a = e.mode,
          l = e.userRole,
          r = a === ve.Moderators
        if (n && l === d.a.Admin)
          return r
            ? c.a.createElement(ye, { communityId: t, renderEmptyState: Ce })
            : c.a.createElement(oe, { communityId: t, renderEmptyState: Ce })
        var i = r ? Ee(t) : ke(t),
          o = r ? he : _e
        return c.a.createElement(pe.a, { loadingAccessibilityLabel: o, module: i, renderEmptyState: Ce, title: be })
      }
    },
    l3Hs: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityToolsScreen', function () {
          return me
        })
      t('KqXw'), t('WNMA')
      var a = t('ERkP'),
        l = t.n(a),
        r = t('v6aA'),
        i = t('Ig1G'),
        o = t('EPsT'),
        c = t('eSoz'),
        s = t('rxPX'),
        u = t('0KEI'),
        m = t('R5kW'),
        d = function (e, n) {
          var t,
            a = Object(m.b)(e, n.communityId)
          return null !== (t = null == a ? void 0 : a.tweet_case_count) && void 0 !== t ? t : 0
        },
        y = function (e, n) {
          var t = Object(c.h)(e, n.communityId)
          return 'CommunityJoinRequests' === (null == t ? void 0 : t.__typename)
        },
        p = function (e, n) {
          var t = Object(c.h)(e, n.communityId)
          return 'CommunityJoinRequests' === (null == t ? void 0 : t.__typename) ? t.pending_join_request_count : 0
        },
        g = function (e, n) {
          return Object(m.c)(e, n.communityId)
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
        b = t('kGix'),
        h = t('3XMw'),
        _ = t.n(h),
        v = t('KQzH'),
        k = t('yoO3'),
        E = t('mWs5'),
        C = t('MWbm'),
        S = t('rHpw'),
        F = t('Znyr'),
        I = t('6vad'),
        w = t('csss'),
        T = t('OOKO'),
        K = t('zIWA'),
        M = t('yiKp'),
        L = t.n(M),
        R = t('Lsrn'),
        x = t('k/Ka'),
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
        j = t('M2x3'),
        N = t('SNyS'),
        P = t('S+H3'),
        B = t('PU7B'),
        H = _.a.dce5e1b3,
        D = _.a.c5d8c93d,
        U = _.a.c8c7f9fc,
        V = _.a.c045c7b6,
        q = _.a.a87df2ee,
        z = _.a.dc6ce7b4,
        Q = _.a.gfca5254,
        W = _.a.bb081ea1,
        X = _.a.h6beb5fa,
        J = _.a.e3f04700,
        G = _.a.efc26607,
        Y = _.a.gfccba44,
        Z = _.a.adfcc3cd,
        $ = _.a.d0330d9c,
        ee = _.a.fd67f7c8,
        ne = _.a.gc00d212,
        te = _.a.a997eca0,
        ae = { label: _.a.c6ea29a1, header: _.a.a6e13fac, text: _.a.e538848b, confirmButtonLabel: _.a.j49e6aa2 },
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
          var n = l.a.useContext(r.a),
            t = n.featureSwitches,
            a = n.loggedInUserId,
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
            K = t.isTrue('c9s_moderation_enabled'),
            M = t.isTrue('c9s_rule_management_enabled'),
            L = t.isTrue('c9s_request_to_join_enabled'),
            R = t.isTrue('c9s_edit_moderators_enabled')
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
            j = A === i.a.Admin ? H : D,
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
                      description: N,
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
                  description: te,
                  label: ne,
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
      n.default = de
    },
    'ldL/': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    m0MN: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitiesModerationContainer', function () {
          return Qn
        })
      var a,
        l,
        r,
        i,
        o,
        c,
        s = t('97Jx'),
        u = t.n(s),
        m = t('m3Bd'),
        d = t.n(m),
        y = (t('KqXw'), t('WNMA'), t('ERkP')),
        p = t.n(y),
        g = t('v6aA'),
        f = t('+Kfv'),
        b = t('Ig1G'),
        h = t('1Idg'),
        _ = t('eSoz'),
        v = t('rxPX'),
        k = t('0KEI'),
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
        C = t('G1WX'),
        S = (t('ho0z'), t('es0u')),
        F = t('3XMw'),
        I = t.n(F),
        w = t('VTxf'),
        T = t('yoO3'),
        K = t('Fr3L'),
        M = t('FIs5'),
        L = t('TEoO'),
        R = (t('1t7P'), t('jQ/y'), t('ddV6')),
        x = t.n(R),
        O = t('1YZw'),
        A = t('uDfI'),
        j = t('MWbm'),
        N = t('/yvb'),
        P = t('rHpw'),
        B = (t('enFi'), t('jAXQ')),
        H = t.n(B),
        D = (t('7x/C'), t('JtPf'), t('849X'), t('TJCb'), t('9SqB')),
        U = t.n(D),
        V = void 0 !== a ? a : (a = t('Dm5+')),
        q = void 0 !== l ? l : (l = t('C2fM')),
        z = I.a.i22835dd,
        Q = I.a.cb59a0fd,
        W = I.a.ic7db4ea,
        X = void 0 !== r ? r : (r = t('PMbW')),
        J = function (e) {
          var n = e.communityId,
            t = e.communityJoinRequestActions,
            a = e.userId,
            l = H()(X, t),
            r = l.join_request_approve_action_result,
            i = l.join_request_deny_action_result,
            o = (function () {
              var e = U()(V),
                n = x()(e, 2),
                t = n[0],
                a = n[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var n = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          t({
                            variables: { communityId: n, userId: l },
                            onCompleted: function (n) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [t, a],
                ),
                a,
              ]
            })(),
            c = x()(o, 2),
            s = c[0],
            u = c[1],
            m = (function () {
              var e = U()(q),
                n = x()(e, 2),
                t = n[0],
                a = n[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var n = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          t({
                            variables: { communityId: n, userId: l },
                            onCompleted: function (n) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [t, a],
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
                y({ communityId: n, userId: a }).catch(function () {
                  f(Object(O.b)({ text: W }))
                })
              },
              [f, y, n, a],
            ),
            k = p.a.useCallback(
              function () {
                s({ communityId: n, userId: a }).catch(function () {
                  f(Object(O.b)({ text: W }))
                })
              },
              [f, s, n, a],
            )
          return p.a.createElement(
            j.a,
            { style: G.buttons },
            p.a.createElement(N.a, { disabled: !h || b, onPress: v, style: G.button, type: 'destructiveOutlined' }, Q),
            p.a.createElement(N.a, { disabled: !_ || b, onPress: k, style: G.button, type: 'primaryOutlined' }, z),
          )
        },
        G = P.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        Y = t('tocL'),
        Z = t('h0NW'),
        $ = t('t62R'),
        ee = t('0yYu'),
        ne = t('IMA+'),
        te = t('GBcw'),
        ae = t('6Rrp'),
        le = t('5oT/'),
        re = void 0 !== i ? i : (i = t('8vG3')),
        ie = I.a.b9bd56d4,
        oe = I.a.a340df66,
        ce = function (e) {
          var n = e.icon,
            t = e.label
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(Z.a, {
              containerStyle: ye.container,
              items: [{ label: p.a.createElement($.b, null, t), decoration: n }],
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
          var n = e.communityJoinRequest,
            t = H()(re, n),
            a = t.user_relationship.community.id_str,
            l = t.user_relationship.user_results.result,
            r = t.state
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
          var b = t.created_at,
            h = (function (e) {
              var n = e.following,
                t = e.isFollowedBy
              return n && t ? ue.mutual : n ? ue.following : t ? ue.followedBy : void 0
            })({ isFollowedBy: u, following: m }),
            _ = (function (e) {
              var n = e.blocking,
                t = e.muting
              return n ? se.blocking : t ? se.muting : void 0
            })({ blocking: c, muting: d }),
            v = p.a.createElement(
              j.a,
              null,
              _ && p.a.createElement($.b, { color: 'red500', style: ye.bottomText }, _),
              p.a.createElement(J, { communityId: a, communityJoinRequestActions: t.actions, userId: i }),
            )
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(ne.a, {
              avatarUri: g,
              bottomControl: v,
              description: s || void 0,
              displayMode: 'UserDetailed',
              entities: me,
              name: y,
              screenName: f,
              screenNameSuffix: p.a.createElement(te.a, { color: 'gray700', timestamp: b }),
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
        he = void 0 !== o ? o : (o = t('Jt8P')),
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
          var n = e.communityJoinRequests,
            t = e.fetchNext,
            a = H()(he, n).items
          return p.a.createElement(L.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: _e,
            items: a,
            noItemsRenderer: ke,
            onNearEnd: t,
            renderer: ve,
          })
        },
        Ce = t('VS6U'),
        Se = t('zCf4'),
        Fe = t('DQzJ'),
        Ie = I.a.gfccba44,
        we = 'member_requests',
        Te = { context: we },
        Ke = void 0 !== c ? c : (c = t('gAl+')),
        Me = function (e) {
          var n = Object(Se.f)(),
            t = e.communityId,
            a = Object(Fe.a)(Ke, { communityId: t }),
            l = a.data,
            r = a.fetchNext,
            i = l.community,
            o = i.join_requests_result,
            c = i.name
          if ('CommunityJoinRequests' === o.__typename) {
            var s = o.pending_join_requests_slice,
              u = p.a.createElement(S.a, {
                communityId: t,
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
                backLocation: '/i/communities/'.concat(t, '/tools'),
                history: n,
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
          var n = e.communityId
          return p.a.createElement(K.a, { errorConfig: Te }, p.a.createElement(Me, { communityId: n }))
        },
        Re = t('/de5'),
        xe = t('yiKp'),
        Oe = t.n(xe),
        Ae = (t('2G9S'), t('uFXj'), t('z84I'), t('3zvM')),
        je = t('lMB6'),
        Ne = Object(Ae.f)({ namespace: 'communityReports' }),
        Pe = je.a.register(Ne),
        Be = t('G6rE'),
        He = function (e, n) {
          var t,
            a = null === (t = n.tweetCase) || void 0 === t ? void 0 : t.reports
          return (a ? Pe.selectMany(e, a) : []).map(function (n) {
            var t = n.user
            return Oe()(Oe()({}, n), {}, { reporter: Be.e.select(e, t) })
          })
        },
        De = Object(v.a)().propsFromState(function () {
          return { reports: He }
        }),
        Ue = t('855f'),
        Ve = t('cHvH'),
        qe = t('5mJL'),
        ze = t('efqG'),
        Qe = t('21zW'),
        We = function (e) {
          return (function (e) {
            var n = e.count,
              t = e.formattedCount
            return p.a.createElement(
              I.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              p.a.createElement($.b, { color: 'primary' }, I.a.ff0f7429({ count: n, formattedCount: t })),
            )
          })({ count: e, formattedCount: Ue.a.getFormattedCount(e) })
        },
        Xe = function (e) {
          var n = e.report,
            t = e.withBottomBorder,
            a = n.created_at,
            l = n.reporter,
            r = p.a.createElement(te.a, { timestamp: a })
          return l
            ? p.a.createElement(Ve.a, null, function (e) {
                var a = e.windowWidth
                return p.a.createElement(
                  j.a,
                  { style: t ? Ge.bottomBorder : null },
                  p.a.createElement(ne.a, {
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
                    qe.a,
                    { avatarCell: null },
                    p.a.createElement($.b, { color: 'gray700', size: 'subtext2', style: Ge.rule }, n.rule.name),
                  ),
                )
              })
            : null
        },
        Je = De(function (e) {
          var n = p.a.useState(!1),
            t = x()(n, 2),
            a = t[0],
            l = t[1],
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
                    r.map(function (e, n) {
                      return p.a.createElement(Xe, { key: e.id_str, report: e, withBottomBorder: n < r.length - 1 })
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
            p.a.createElement(te.a, { timestamp: c }),
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
        Ye = t('9EWH'),
        Ze = Object(Ae.f)({ namespace: 'communityCases' }),
        $e = {
          keepTweet: Object(Ae.c)(Ze, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var t = n.meta.entityId
              return Object(Ye.a)(e, function (e) {
                e.entities[t].isKept = !0
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
            reducer: function (e, n) {
              var t = n.meta.entityId
              return Object(Ye.a)(e, function (e) {
                e.entities[t].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        en = Oe()(Oe()({}, Ze), $e),
        nn = je.a.register(en),
        tn = t('XOJV'),
        an = function (e, n) {
          var t = n.tweetId
          return t ? tn.a.selectHydrated(e, t) : void 0
        },
        ln = function (e, n) {
          var t = n.tweetId
          return nn.select(e, t)
        },
        rn = Object(v.a)()
          .propsFromState(function () {
            return { tweet: an, tweetCase: ln }
          })
          .propsFromActions(function () {
            return { keep: nn.keepTweet, dismiss: nn.dismissTweet }
          }),
        on = t('b5s6'),
        cn = t('mjJ+'),
        sn = t('IG7M'),
        un = t('boUI'),
        mn = t('zIWA'),
        dn = t('fz3c'),
        yn = (t('yH/f'), t('n5fo')),
        pn = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        gn = I.a.ad10c66d,
        fn = I.a.c6caed9c,
        bn = function (e) {
          return p.a.createElement($.b, null, e)
        },
        hn = function (e) {
          var n = e.screenName
          switch (e.type) {
            case pn.Hidden:
              var t = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(n),
                a = [{ label: bn(t), decoration: vn }]
              return p.a.createElement(Z.a, { accessibilityLabel: gn, containerStyle: _n.container, items: a })
            case pn.Kept:
              var l = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(n),
                r = [{ label: bn(l), decoration: kn }]
              return p.a.createElement(Z.a, { accessibilityLabel: fn, containerStyle: _n.container, items: r })
            default:
              return null
          }
        },
        _n = P.a.create(function (e) {
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
        vn = p.a.createElement(yn.a, { style: _n.icon }),
        kn = p.a.createElement(ae.a, { style: _n.icon }),
        En = { page: 'reported_tweets', component: 'tweet' },
        Cn = { viewType: 'tweet_moderation_case' },
        Sn = I.a.f1d9930c,
        Fn = I.a.a219e217,
        In = I.a.fa524057,
        wn = I.a.g30bc699,
        Tn = I.a.f0306107,
        Kn = I.a.b99364a5,
        Mn = rn(function (e) {
          var n,
            t = p.a.useContext(g.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            l = e.keep,
            r = e.tweet,
            i = e.tweetCase,
            o = e.tweetId,
            c = null == r || null === (n = r.user) || void 0 === n ? void 0 : n.screen_name,
            s = p.a.useCallback(
              function (e) {
                if (r && c) {
                  var n = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: wn({ screenName: c }),
                      Icon: un.a,
                      link: '/'.concat(c),
                    },
                    {
                      text: Tn,
                      Icon: mn.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(dn.a.Tweet, '/').concat(r.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: En },
                      },
                      onClick: function () {
                        e()
                      },
                    },
                  ]
                  return (
                    t &&
                      n.push({
                        text: Kn({ screenName: c }),
                        Icon: le.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(dn.a.RemoveCommunityMember, '/').concat(r.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: En },
                        },
                        onClick: function () {
                          e()
                        },
                      }),
                    p.a.createElement(cn.a, { items: n, onCloseRequested: e })
                  )
                }
                return null
              },
              [r, c, t],
            ),
            u = function () {
              l(o)
            },
            m = function () {
              a(o)
            }
          if (c && (null == r ? void 0 : r.reportingVisibility) === dn.b.HiddenCommunityTweet)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(hn, { screenName: c, type: pn.Hidden }),
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
              p.a.createElement(hn, { screenName: c, type: pn.Kept }),
              p.a.createElement(ee.a, null),
            )
          if (!i) return null
          return p.a.createElement(
            f.a,
            { behavioralEventContext: Cn },
            p.a.createElement(
              j.a,
              { style: Ln.container },
              p.a.createElement(
                j.a,
                { style: Ln.reportsBar },
                p.a.createElement(Je, { tweetCase: i }),
                p.a.createElement(sn.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: s,
                  style: Ln.menu,
                }),
              ),
              p.a.createElement(on.a, { tweetId: o }),
              r
                ? p.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var n = e.windowWidth <= P.a.theme.breakpoints.small
                    return p.a.createElement(
                      j.a,
                      { style: [Ln.buttons, n && Ln.buttonsMobile] },
                      p.a.createElement(
                        N.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(dn.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Oe()(Oe()({}, En), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Ln.button, n && Ln.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Sn,
                      ),
                      p.a.createElement(
                        N.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [Ln.button, n && Ln.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        In,
                      ),
                    )
                  })
                : p.a.createElement(
                    j.a,
                    { style: Ln.buttons },
                    p.a.createElement(
                      N.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: m,
                        style: Ln.button,
                        type: 'primaryOutlined',
                      },
                      Fn,
                    ),
                  ),
            ),
            p.a.createElement(ee.a, null),
          )
        }),
        Ln = P.a.create(function (e) {
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
        Rn = t('hqKg'),
        xn = t('wAC9'),
        On = function (e, n) {
          var t = n.community
          return t ? t.id_str : void 0
        },
        An = function () {
          return Object(Rn.createSelector)(On, function (e) {
            return e
              ? (function (e) {
                  return Object(xn.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (n) {
                      return Oe()(Oe()({}, n), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        jn = Object(v.a)()
          .propsFromState(function () {
            return { sliceModule: An() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Nn = t('FS1z'),
        Pn = I.a.c045c7b6,
        Bn = I.a.dffb0774,
        Hn = I.a.cbb2a93c,
        Dn = jn(function (e) {
          var n = p.a.useContext(g.a).featureSwitches,
            t = e.community,
            a = e.history,
            l = e.sliceModule,
            r = t.id_str,
            i = t.name,
            o = (t || []).rules,
            c = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
            s = n.isTrue('responsive_web_communities_slices_enabled'),
            u = l
              ? p.a.createElement(Nn.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return p.a.createElement(M.a, { header: Bn, message: Hn })
                  },
                  renderer: function (e) {
                    return p.a.createElement(Mn, { tweetId: e })
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
              title: Pn,
            }),
          )
        }),
        Un = ['analytics', 'community'],
        Vn = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        qn = { viewType: 'community' }
      function zn(e) {
        var n = p.a.useContext(g.a).featureSwitches,
          t = (e.analytics, e.community),
          a = d()(e, Un),
          l = a.match.path,
          r = n.isTrue('c9s_request_to_join_enabled')
        return Object(b.c)(t.role)
          ? p.a.createElement(
              f.a,
              { behavioralEventContext: qn },
              p.a.createElement(
                Se.d,
                null,
                p.a.createElement(
                  Se.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  p.a.createElement(Dn, u()({}, a, { community: t })),
                ),
                r
                  ? p.a.createElement(
                      Se.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      p.a.createElement(Le, { communityId: t.id_str }),
                    )
                  : null,
                p.a.createElement(Se.b, null, p.a.createElement(Re.b, a)),
              ),
            )
          : p.a.createElement(Re.b, a)
      }
      function Qn(e) {
        var n = e.community,
          t = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          r = d()(e, Vn),
          i = r.match.params.communityId,
          o = t(),
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
              return n ? p.a.createElement(zn, u()({}, r, { community: n })) : null
            },
          })
        )
      }
      n.default = E(Qn)
    },
    mWs5: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return g
      })
      t('KqXw'), t('MvUL'), t('2G9S')
      var a = t('ERkP'),
        l = t.n(a),
        r = t('3XMw'),
        i = t.n(r),
        o = t('M2mT'),
        c = t('zCf4'),
        s = t('MWbm'),
        u = t('mw9i'),
        m = t('0yYu'),
        d = t('/yvb'),
        y = t('rHpw'),
        p = i.a.i2209530
      function g(e) {
        var n = e.children,
          t = e.communityId,
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
          C = '/i/communities/'.concat(t),
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
            l.a.createElement(s.a, { style: f.chilrenRoot }, n),
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
    mys5: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'EditRuleScreen', function () {
          return N
        })
      var a = t('ddV6'),
        l = t.n(a),
        r = (t('1t7P'), t('jQ/y'), t('ho0z'), t('ERkP')),
        i = t.n(r),
        o = t('v6aA'),
        c = t('eSoz'),
        s = t('xZGM'),
        u = t('rxPX'),
        m = t('0KEI'),
        d = t('1Idg'),
        y = function (e, n) {
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
        g = t('k49u'),
        f = t('jHSc'),
        b = t('3XMw'),
        h = t.n(b),
        _ = t('5FtR'),
        v = t('OwKm'),
        k = t('AfjF'),
        E = t('MWbm'),
        C = t('/yvb'),
        S = t('jtO7'),
        F = t('4zmP'),
        I = t('eb3s'),
        w = t('rHpw'),
        T = h.a.h99020ef,
        K = h.a.i2209530,
        M = h.a.a1c93d73,
        L = h.a.f74a5adb,
        R = h.a.fbb0ed91,
        x = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        j = h.a.c3a0d44e
      function N(e) {
        var n = i.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          t = e.addRuleInformEducationFlag,
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
          H = i.a.useState(''),
          D = l()(H, 2),
          U = D[0],
          V = D[1],
          q = i.a.useState(!1),
          z = l()(q, 2),
          Q = z[0],
          W = z[1],
          X = i.a.useState(''),
          J = l()(X, 2),
          G = J[0],
          Y = J[1],
          Z = i.a.useState(!1),
          $ = l()(Z, 2),
          ee = $[0],
          ne = $[1],
          te = i.a.useState(!1),
          ae = l()(te, 2),
          le = ae[0],
          re = ae[1],
          ie = i.a.useCallback(
            function (e) {
              var n = e.description,
                t = e.name,
                a = e.valid
              B(t), V(n), W(a)
            },
            [B, V, W],
          ),
          oe = i.a.useCallback(
            function () {
              var e = r({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    t = n.code === g.a.GenericBadRequest && n.message ? n.message : M
                  return Y(t), W(!1), []
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
                  var n = l()(e.errors, 1)[0],
                    t = n.code === g.a.GenericBadRequest && n.message ? n.message : M
                  return Y(t), ne(!1), []
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
          ye = n
            ? i.a.createElement(
                E.a,
                { style: P.delete },
                i.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: R,
                  onPress: function () {
                    ne(!0)
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
                headline: x,
                onCancel: function () {
                  ne(!1)
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
                  t(), oe(), re(!1)
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
      n.default = p(N)
      var P = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return N
      })
      var a = t('ddV6'),
        l = t.n(a),
        r = t('VrFO'),
        i = t.n(r),
        o = t('Y9Ll'),
        c = t.n(o),
        s = t('1Pcy'),
        u = t.n(s),
        m = t('5Yy7'),
        d = t.n(m),
        y = t('2VqO'),
        p = t.n(y),
        g = t('KEM+'),
        f = t.n(g),
        b = (t('2G9S'), t('lTEL'), t('7x/C'), t('87if'), t('ZUdG'), t('kYxP'), t('ERkP')),
        h = t.n(b),
        _ = t('pXBW'),
        v = t('6/RC'),
        k = t('UIzd'),
        E = t.n(k),
        C = t('kGix')
      t.d(n, 'a', function () {
        return C.a
      })
      var S = t('fs1G'),
        F = t('0KEI'),
        I = t('lU4h'),
        w = t.n(I),
        T = t('21nk'),
        K = t.n(T),
        M = t('bCEw'),
        L = t.n(M),
        R = t('Ud88'),
        x = t.n(R),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(t, e)
          var n = p()(t)
          function t() {
            var e
            i()(this, t)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (e = n.call.apply(n, [this].concat(l))), f()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              t,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, n) {
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
            t
          )
        })(h.a.Component),
        j = function (e) {
          var n = e.query,
            t = e.queryRef,
            a = e.render,
            l = K()(n, t)
          return a({ fetchStatus: C.a.LOADED, data: l, error: null, retry: S.a })
        },
        N = function (e, n) {
          if (v.canUseDOM)
            return function (t) {
              var a = t.fetchPolicy,
                r = void 0 === a ? 'store-or-network' : a,
                i = t.render,
                o = t.variables,
                c = L()(e),
                s = l()(c, 2),
                u = s[0],
                m = s[1],
                d = Object(F.useCreateLocalApiErrorHandler)(n.errorConfig.context),
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
                        { errorHandler: d(n.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (n, t) {
                          return n
                            ? i({ fetchStatus: C.a.FAILED, error: n, data: null, retry: t })
                            : h.a.createElement(j, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var t = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var r = a.render,
              i = a.variables,
              o = x()(),
              c = Object(F.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              s = w()(i),
              u = l()(s, 1)[0],
              m = t.get(o)
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
                      ? (c(n.errorConfig.options || {})(e),
                        r({ fetchStatus: C.a.FAILED, data: null, error: e, retry: S.a }))
                      : h.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: t.set(o, e).get.bind(t, o) }
                })
            })
            return h.a.createElement(h.a.Suspense, null, h.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'AddRuleScreen', function () {
          return T
        })
      var a = t('ddV6'),
        l = t.n(a),
        r = (t('1t7P'), t('jQ/y'), t('ho0z'), t('ERkP')),
        i = t.n(r),
        o = t('v6aA'),
        c = t('eSoz'),
        s = t('xZGM'),
        u = t('rxPX'),
        m = t('0KEI'),
        d = function (e, n) {
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
        p = t('k49u'),
        g = t('jHSc'),
        f = t('3XMw'),
        b = t.n(f),
        h = t('OwKm'),
        _ = t('AfjF'),
        v = t('/yvb'),
        k = t('eb3s'),
        E = b.a.j560c8ea,
        C = b.a.i2209530,
        S = b.a.gaa3239a,
        F = b.a.a67445d5,
        I = b.a.fcbe0992,
        w = b.a.j24c37b2
      function T(e) {
        var n = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          t = e.addRuleInformEducationFlag,
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
          N = i.a.useState(!1),
          P = l()(N, 2),
          B = P[0],
          H = P[1],
          D = i.a.useState(''),
          U = l()(D, 2),
          V = U[0],
          q = U[1],
          z = i.a.useState(!1),
          Q = l()(z, 2),
          W = Q[0],
          X = Q[1],
          J = i.a.useCallback(
            function (e) {
              var n = e.description,
                t = e.name,
                a = e.valid
              q(''), T(t), R(n), j(a)
            },
            [T, R, j],
          ),
          G = i.a.useCallback(
            function () {
              H(!0)
              var e = r({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    t = n.code === p.a.GenericBadRequest && n.message ? n.message : S
                  return q(t), j(!1), []
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
          Z = i.a.createElement(v.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= n,
          ee = i.a.createElement(k.a, {
            confirmButtonLabel: w,
            headline: F,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: n }),
            withCancelButton: !1,
          }),
          ne = W
            ? i.a.createElement(_.a, {
                onCancel: function () {
                  X(!1)
                },
                onConfirm: function () {
                  t(), G(), X(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : i.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: E },
              i.a.createElement(h.a, { description: '', errorText: V, name: '', onChange: J }),
              ne,
            )
      }
      n.default = y(T)
    },
    nTxI: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityRulesModal', function () {
          return w
        })
      t('7xRU'), t('KqXw'), t('WNMA'), t('ho0z')
      var a = t('ERkP'),
        l = t.n(a),
        r = t('+Kfv'),
        i = t('PKbs'),
        o = t('egQk'),
        c = t('1Idg'),
        s = t('eSoz'),
        u = t('li/m'),
        m = t('rxPX'),
        d = t('0KEI'),
        y = function (e, n) {
          var t
          return (null === (t = n.location.state) || void 0 === t ? void 0 : t.community) || c.a(e, n)
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
        g = t('MDbM'),
        f = t('jHSc'),
        b = t('3XMw'),
        h = t.n(b),
        _ = t('5FtR'),
        v = t('t62R'),
        k = t('/yvb'),
        E = t('rHpw'),
        C = h.a.h4fbfa57,
        S = h.a.ea8cfb1d,
        F = h.a.dc1b14a1,
        I = { viewType: 'community' },
        w = function (e) {
          var n,
            t = e.community,
            a = e.createLocalApiErrorHandler,
            c = e.fetchCommunityIfNeeded,
            s = e.fetchStatus,
            u = e.history,
            m = e.isCommunityMember,
            d = e.join,
            y = e.location,
            p = e.match.params.communityId,
            b = null === (n = y.state) || void 0 === n ? void 0 : n.joinRequestRequired
          l.a.useEffect(function () {
            p && !t && s !== g.a.LOADED && c(p).catch(a())
          })
          var h,
            E = b ? S : C,
            w = function () {
              if (t) {
                var e = t.id_str
                d(e)
                  .then(function () {
                    u.push('/i/communities/'.concat(e))
                  })
                  .catch(a())
              }
            }
          if (t) {
            var T = t.name,
              M = t.rules,
              L = t.theme
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
                        ((h = T), l.a.createElement(v.b, { size: 'title4', weight: 'bold' }, F({ communityName: h }))),
                      rules: M,
                      theme: L,
                    }),
                  ),
                )
              : l.a.createElement(_.a, { to: '/i/communities/'.concat(t.id_str) })
          }
          return s === g.a.LOADED ? l.a.createElement(_.a, { to: '/' }) : null
        },
        T = p(w),
        K =
          ((n.default = T),
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
    nmVb: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e) {
          for (var n = [], t = (0, l.default)(e), a = 0; a < t.length; a++) n.push(t[a].hashtag)
          return n
        })
      var l = a(t('yyPN'))
      e.exports = n.default
    },
    oEoC: function (e, n, t) {
      'use strict'
      t.d(n, 'e', function () {
        return u
      }),
        t.d(n, 'c', function () {
          return m
        }),
        t.d(n, 'b', function () {
          return d
        }),
        t.d(n, 'g', function () {
          return y
        }),
        t.d(n, 'a', function () {
          return p
        }),
        t.d(n, 'd', function () {
          return g
        }),
        t.d(n, 'f', function () {
          return b
        })
      var a = t('RhWx'),
        l = t.n(a),
        r = t('yiKp'),
        i = t.n(r),
        o =
          (t('hBpG'),
          t('7x/C'),
          t('vrRf'),
          t('KqXw'),
          t('WNMA'),
          t('M+/F'),
          t('LJOr'),
          t('tVqn'),
          t('jwue'),
          t('+oxZ'),
          t('z84I'),
          t('LW0h'),
          t('2G9S'),
          t('oQhu')),
        c = t('kIAd'),
        s = t('rHpw')
      function u(e, n) {
        var t,
          a = c.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(n)) return (t = e.match(a.regexp))
          }),
          l = ''
        return t && (l = t && (1 === t.length ? t[0] : t[1])), a ? i()(i()({}, a.scope), {}, { src: n, q: l }) : null
      }
      function m(e, n) {
        var t = n.slice(0, e),
          a = n.slice(e, n.length),
          l = t.search(c.b.WordEnd),
          r = l >= 0 ? t.slice(l) : '',
          i = a.search(c.b.WordBoundary),
          o = r + a.slice(0, i)
        return o.trim() ? { start: l, end: e + i, word: o } : { start: -1, end: -1, word: '' }
      }
      function d() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function y(e) {
        var n = e.altKey,
          t = e.ctrlKey,
          a = e.metaKey
        return !(n || t || a)
      }
      function p(e, n) {
        var t = []
        e.forEach(function (e) {
          var a = n.find(function (n) {
            return n.id === e.id
          })
          a && a.data && a.data.result_context ? t.push(a) : t.push(e)
        })
        var a = t.map(function (e) {
            return e.id
          }),
          r = n.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(t, l()(r))
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
    pChJ: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'pd/v': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (n.default = y)
    },
    qre1: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'rPb+': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(c.hash = '3998fef17abe741a7d272887d0adb522'), (n.default = c)
    },
    tFuX: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = 'ea1908fb41cb57016d070125122b615d'), (n.default = y)
    },
    tgdH: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    tnnC: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      n.default = a
    },
    tot2: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityPeopleScreen', function () {
          return T
        })
      t('vrRf')
      var a = t('ERkP'),
        l = t.n(a),
        r = t('+Kfv'),
        i = t('es0u'),
        o = t('LgBi'),
        c = t('1Idg'),
        s = t('eSoz'),
        u = t('rxPX'),
        m = t('0KEI'),
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
        y = t('3XMw'),
        p = t.n(y),
        g = t('gDCe'),
        f = t('yoO3'),
        b = t('VS6U'),
        h = t('k/OQ'),
        _ = t('krnS'),
        v = t('zCf4'),
        k = p.a.h5245afa,
        E = p.a.dc6ce7b4,
        C = p.a.f8321d82,
        S = p.a.ga2aa43c,
        F = { viewType: 'community' },
        I = { viewType: 'all' },
        w = { viewType: 'moderators' },
        T = l.a.memo(function (e) {
          var n = e.community,
            t = e.communityId,
            a = e.createLocalApiErrorHandler,
            c = e.fetchCommunityIfNeeded,
            s = e.history,
            u = e.location
          l.a.useEffect(
            function () {
              t && c(t).catch(a())
            },
            [t, a, c],
          )
          var m = (null == u ? void 0 : u.pathname) && u.pathname.indexOf('members') > 0,
            d = m ? E : S,
            y = l.a.useMemo(
              function () {
                return t
                  ? [
                      { to: { pathname: '/i/communities/'.concat(t, '/members'), state: u.state }, label: C, key: C },
                      {
                        to: { pathname: '/i/communities/'.concat(t, '/moderators'), state: u.state },
                        label: S,
                        key: S,
                      },
                    ]
                  : []
              },
              [t, u.state],
            ),
            p = t
              ? l.a.createElement(
                  v.d,
                  null,
                  l.a.createElement(
                    v.b,
                    { exact: !0, path: '/i/communities/'.concat(t, '/members') },
                    l.a.createElement(
                      r.a,
                      { behavioralEventContext: I },
                      l.a.createElement(_.b, {
                        communityId: t,
                        mode: _.a.Members,
                        userRole: null == n ? void 0 : n.role,
                      }),
                    ),
                  ),
                  l.a.createElement(
                    v.b,
                    { exact: !0, path: '/i/communities/'.concat(t, '/moderators') },
                    l.a.createElement(
                      r.a,
                      { behavioralEventContext: w },
                      l.a.createElement(g.a, { community: n }),
                      l.a.createElement(_.b, {
                        communityId: t,
                        mode: _.a.Moderators,
                        userRole: null == n ? void 0 : n.role,
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
                backLocation: t ? '/i/communities/'.concat(t, '/') : '/',
                documentTitle: k,
                history: s,
                primaryContent: p,
                rightControl: m && t ? l.a.createElement(o.a, { communityId: t }) : null,
                secondaryBar: l.a.createElement(h.a, { accessibilityLabel: d, links: y }),
                sidebarContent: l.a.createElement(i.a, null),
                title: E,
              }),
            ),
          )
        }),
        K = d(T)
      n.default = K
    },
    u0MR: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CreateButton', function () {
          return He
        }),
        t.d(n, 'CommunitiesScreen', function () {
          return De
        })
      var a = t('VrFO'),
        l = t.n(a),
        r = t('Y9Ll'),
        i = t.n(r),
        o = t('1Pcy'),
        c = t.n(o),
        s = t('5Yy7'),
        u = t.n(s),
        m = t('2VqO'),
        d = t.n(m),
        y = t('KEM+'),
        p = t.n(y),
        g = (t('2G9S'), t('vrRf'), t('ERkP')),
        f = t.n(g),
        b = t('+Kfv'),
        h = t('es0u'),
        _ = t('1Idg'),
        v = t('RqPI'),
        k = t('li/m'),
        E = t('G6rE'),
        C = t('rxPX'),
        S = t('0KEI'),
        F = function (e, n) {
          var t = _.i(e, n)
          if (t) return E.e.selectByScreenName(e, t)
        },
        I = Object(C.a)()
          .propsFromState(function () {
            return { communitiesActions: v.f, hasCommunityMemberships: k.d, screenName: _.i, user: F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: E.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        w = t('GOQE'),
        T = t('3XMw'),
        K = t.n(T),
        M = t('5oT/'),
        L = (t('z84I'), t('M+/F'), t('yiKp')),
        R = t.n(L),
        x = (t('ho0z'), t('tVqn'), t('uFXj'), t('v6aA')),
        O = t('YeIG'),
        A = 'community-thumbnail-image',
        j = 'community-thumbnail-name-container',
        N = t('MWbm'),
        P = t('rHpw'),
        B = t('X00g'),
        H = t('htQn'),
        D = t('9Xij'),
        U = t('TIdA'),
        V = t('A91F'),
        q = t('t62R'),
        z = { type: 'serversideContextKey', serversideContextType: 'community' },
        Q = P.a.create(function (e) {
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
        W = function (e) {
          var n = f.a.useContext(x.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            t = e.community,
            a = t.id_str,
            l = t.media,
            r = t.name,
            i = t.theme,
            o = f.a.useMemo(
              function () {
                return { clientEntity: R()(R()({}, z), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(O.a)(null == l ? void 0 : l.image) || !r) return null
          var c = null == l ? void 0 : l.image,
            s = null == l ? void 0 : l.crop,
            u = P.a.theme.aspectRatios.communityBanner,
            m = n ? B.a.getCommunityBackgroundColor(i) : P.a.theme.colors.translucentBlack77
          return c
            ? f.a.createElement(
                b.a,
                { behavioralEventContext: o },
                f.a.createElement(
                  H.a,
                  { link: '/i/communities/'.concat(a), style: Q.root },
                  f.a.createElement(
                    N.a,
                    { style: Q.container },
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
                      { style: [Q.name, { backgroundColor: m }], testID: j },
                      f.a.createElement(
                        q.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        r.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        X = t('eSoz'),
        J = t('o3oN'),
        G = function (e) {
          var n = Object(J.c)(e)
          return X.c.selectMany(e, n)
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
        Z = t('kGix'),
        $ = t('6iuV'),
        ee = t('rC8y'),
        ne = K.a.d228a9a0,
        te = f.a.memo(function (e) {
          var n = e.communities,
            t = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            l = e.fetchStatus,
            r = e.location.pathname
          f.a.useEffect(
            function () {
              l === Z.a.NONE && a().catch(t())
            },
            [t, a, l],
          )
          var i = f.a.useMemo(
            function () {
              return n.slice(0, 10).map(function (e) {
                return f.a.createElement(W, { community: e, key: e.id_str })
              })
            },
            [n],
          )
          return Object(O.a)(n)
            ? null
            : f.a.createElement(
                f.a.Fragment,
                null,
                f.a.createElement($.a, { style: [ae.paddingHorizontal, ae.bottomBorder] }, i),
                n.length > 10 &&
                  f.a.createElement(
                    N.a,
                    { style: ae.bottomBorder },
                    f.a.createElement(ee.a, { link: '/'.concat(r, '/memberships'), text: ne }),
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
        le = Y(te),
        re = t('WpDa'),
        ie = t('ZNT5'),
        oe = Object(ie.a)({
          timelineId: 'communitiesMainTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMainTimeline
          },
          getEndpointParams: function (e) {
            var n = e.count,
              t = e.cursor
            return { count: n, cursor: 'string' == typeof t ? t : void 0 }
          },
          context: 'FETCH_COMMUNITIES_MAIN_TIMELINE',
          perfKey: 'communitiesMainTimeline',
          formatResponse: re.a,
        }),
        ce = t('OUEC'),
        se = t('dwig'),
        ue = t('0+qk'),
        me = t('oQhu'),
        de = t('7BdX'),
        ye = t('fTQJ'),
        pe = t('QRqA'),
        ge = t('FIs5'),
        fe = t('mw9i'),
        be = K.a.c63602d3,
        he = K.a.d7346631,
        _e = K.a.fbd12fea,
        ve = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t() {
            var e
            l()(this, t)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(r))),
              p()(c()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              p()(
                c()(e),
                '_getModule',
                Object(me.a)(function () {
                  return oe
                }),
              ),
              p()(c()(e), '_renderEmptyTimeline', function () {
                return f.a.createElement(ge.a, { header: he, message: _e })
              }),
              e
            )
          }
          return (
            i()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.hasCommunityMemberships,
                    t = e.history,
                    a = e.isLoggedInUser,
                    l = e.location,
                    r = this._getModule(),
                    i = this._c9sParticipationEnabled && n ? f.a.createElement(ue.a, { history: t }) : null
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
            t
          )
        })(f.a.Component)
      p()(ve, 'contextType', x.a)
      var ke = ve,
        Ee = t('hqKg'),
        Ce = function (e, n) {
          var t = n.user
          return t ? t.id_str : void 0
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
                    getEndpointParams: function (n) {
                      var t = n.cursor
                      return { cursor: 'string' == typeof t ? t : void 0, userId: e }
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
        Ie = t('yoO3'),
        we = K.a.c63602d3,
        Te = K.a.d7346631,
        Ke = K.a.hb01fe46,
        Me = Fe(
          (function (e) {
            u()(t, e)
            var n = d()(t)
            function t() {
              var e
              l()(this, t)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = n.call.apply(n, [this].concat(r))),
                p()(c()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? f.a.createElement(ge.a, { header: Te, message: Ke }) : null
                }),
                e
              )
            }
            return (
              i()(t, [
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
              t
            )
          })(f.a.Component),
        ),
        Le = t('5FtR'),
        Re = t('Y6L+'),
        xe = t('VS6U'),
        Oe = t('/yvb'),
        Ae = t('zCf4'),
        je = K.a.h02a6fe5,
        Ne = K.a.c63602d3,
        Pe = K.a.a226497c,
        Be = { viewType: 'communities' },
        He = f.a.memo(function (e) {
          var n = e.communitiesActions
          if (null == n || !n.create) return null
          return f.a.createElement(Oe.a, {
            icon: f.a.createElement(M.a, { accessibilityLabel: Pe, style: Ue.createButton }),
            link: '/i/communities/create',
            size: 'medium',
            type: 'brandText',
          })
        }),
        De = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t() {
            var e
            l()(this, t)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(r))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var n = e.props,
                  t = n.hasCommunityMemberships,
                  a = n.history,
                  l = n.location,
                  r = n.user,
                  i = e._isLoggedInUser()
                return f.a.createElement(
                  Ae.d,
                  null,
                  f.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(Re.J, '/communities') },
                    f.a.createElement(ke, { hasCommunityMemberships: t, history: a, isLoggedInUser: i, location: l }),
                  ),
                  f.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(Re.J, '/communities/memberships') },
                    f.a.createElement(Me, { isLoggedInUser: i, user: r }),
                  ),
                )
              }),
              p()(c()(e), '_handleFetchUser', function (n) {
                var t = n || e.props,
                  a = t.createLocalApiErrorHandler,
                  l = t.fetchOneUserByScreenNameIfNeeded,
                  r = t.screenName
                r && l(r).catch(a(w.a))
              }),
              e
            )
          }
          return (
            i()(t, [
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
                    n = this.context.loggedInUserId
                  return (null == e ? void 0 : e.id_str) === n
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
                    n = e.communitiesActions,
                    t = e.history
                  if (this._isLoggedInUser()) {
                    var a = this._isMembershipsView() ? Ne : je
                    return f.a.createElement(
                      b.a,
                      { behavioralEventContext: Be },
                      f.a.createElement(xe.a, {
                        backLocation: '/',
                        history: t,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: f.a.createElement(He, { communitiesActions: n }),
                        sidebarContent: f.a.createElement(h.a, null),
                        title: a,
                      }),
                    )
                  }
                  return f.a.createElement(Le.a, { to: '/' })
                },
              },
            ]),
            t
          )
        })(f.a.Component)
      p()(De, 'contextType', x.a)
      var Ue = P.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        Ve = I(De)
      n.default = Ve
    },
    uI9t: function (e, n, t) {
      'use strict'
      var a = t('VrFO'),
        l = t.n(a),
        r = t('Y9Ll'),
        i = t.n(r),
        o = t('5Yy7'),
        c = t.n(o),
        s = t('2VqO'),
        u = t.n(s),
        m = t('KEM+'),
        d = t.n(m),
        y = (t('z84I'), t('ERkP')),
        p = t.n(y),
        g = t('yiKp'),
        f = t.n(g),
        b = t('1Pcy'),
        h = t.n(b),
        _ = (t('2G9S'), t('ho0z'), t('I4+6')),
        v = t('cm6r'),
        k = t('rHpw'),
        E = t('k/Ka'),
        C = t('MWbm'),
        S = t('x0mb'),
        F = t('IMYl'),
        I = (function (e) {
          c()(t, e)
          var n = u()(t)
          function t() {
            var e
            l()(this, t)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(r))),
              d()(h()(e), '_radioRef', p.a.createRef()),
              d()(h()(e), '_handleChange', function () {
                var n = e.props,
                  t = n.colorName
                ;(0, n.onChange)(t)
              }),
              e
            )
          }
          return (
            i()(t, [
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
                    n = e.accessibilityLabel,
                    t = e.colorName,
                    a = e.isSelected,
                    l = e.name,
                    r = e.style,
                    i = k.a.theme.colors[t],
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
                        accessibilityLabel: n,
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
            t
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
          c()(t, e)
          var n = u()(t)
          function t() {
            var e
            return l()(this, t), ((e = n.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(K, '_LABEL')), (K += 1), e
          }
          return (
            i()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    n = this.props,
                    t = n.accessibilityLabel,
                    a = n.autoFocus,
                    l = n.layout,
                    r = n.onChange,
                    i = n.options,
                    o = n.value,
                    c = 'two-rows' === l,
                    s = [L.root, c && L.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    C.a,
                    { accessibilityLabel: t, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (n) {
                      var t = n.accessibilityLabel,
                        l = n.colorName
                      return p.a.createElement(T, {
                        accessibilityLabel: t,
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
            t
          )
        })(p.a.Component)
      d()(M, 'defaultProps', { layout: 'one-row' })
      var L = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      n.a = M
    },
    ulNE: function (e, n, t) {
      'use strict'
      var a = t('ax0f'),
        l = t('42ly'),
        r = t('N9G2'),
        i = t('BIH/'),
        o = t('lhaq'),
        c = t('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              n = r(this),
              t = i(n),
              a = c(n, 0)
            return (a.length = l(a, n, n, t, 0, void 0 === e ? 1 : o(e))), a
          },
        },
      )
    },
    'urw/': function (e, n, t) {
      t('7St7')('flat')
    },
    vUUo: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(o.hash = '0aeee2e1ee9d817082637a69ecbc6ce3'), (n.default = o)
    },
    w9f9: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (n.default = u)
    },
    xPe1: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitySettingsRouter', function () {
          return dn
        })
      t('KqXw'), t('WNMA'), t('1t7P'), t('jQ/y'), t('ho0z')
      var a = t('ERkP'),
        l = t.n(a),
        r = t('v6aA'),
        i = t('rxPX'),
        o = Object(i.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        c = t('ddV6'),
        s = t.n(c),
        u = t('jTgF'),
        m = t('AspN'),
        d = t('eSoz'),
        y = t('0KEI'),
        p = function (e, n) {
          var t = n.localMediaId,
            a = t && isFinite(t) ? m.k(e, t) : []
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
        f = t('3XMw'),
        b = t.n(f),
        h = t('Nh1N'),
        _ = t('JAeQ'),
        v = (t('lTEL'), t('7x/C'), t('JtPf'), t('87if'), t('kYxP'), t('zb92')),
        k = Object(v.a)({
          loader: function () {
            return Promise.all([t.e(0), t.e(3), t.e(4), t.e(176)]).then(t.bind(null, 'P68U'))
          },
        }),
        E = t('eyty'),
        C = t('MWbm'),
        S = t('rHpw'),
        F = t('TIdA'),
        I = t('A91F'),
        w = t('4zmP'),
        T = t('eb3s'),
        K = b.a.a49f884d,
        M = b.a.ea965b81,
        L = b.a.gea6cc19,
        R = b.a.cfd2f35d,
        x = b.a.j35d3ad6,
        O = b.a.f1e8fb21,
        A = b.a.fc2a5c92,
        j = b.a.e405ec21
      var N,
        P,
        B,
        H = S.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        D = g(function (e) {
          var n = e.addLocalMediaId,
            t = e.communityId,
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
            N = s()(v, 2),
            P = N[0],
            B = N[1],
            D = l.a.useState(!1),
            U = s()(D, 2),
            V = U[0],
            q = U[1],
            z = l.a.useState(!1),
            Q = s()(z, 2),
            W = Q[0],
            X = Q[1],
            J = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return q(!1), X(Boolean(e)), e ? n(t, e) : y(t)
            },
            $ = J ? l.a.createElement(F.a, { accessibilityLabel: K, aspectMode: I.a.exact(G), image: J }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            P
              ? l.a.createElement(
                  C.a,
                  { style: H.error },
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
                var n = s()(e, 1)[0]
                B(!1), Z(n)
              },
              onFailure: function () {
                B(j), y(t)
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
                    X(!1),
                      c
                        ? (q(!0),
                          r(t, { mediaId: c, cropData: e }).catch(function (e) {
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
                    d(t).catch(Y), b(!1)
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
        V = t('yoO3'),
        q = t('mWs5'),
        z = t('3JAx'),
        Q = b.a.f713fbd1,
        W = [
          { label: b.a.fd00a769, value: 'Public', helpText: b.a.d0784408 },
          { label: b.a.ce0523a8, value: 'Closed', helpText: b.a.ccfafe8c },
        ],
        X = U(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.editAccess,
            r = e.history,
            i = n.id_str,
            o = l.a.useState(n.access),
            c = s()(o, 2),
            u = c[0],
            m = c[1],
            d = l.a.useCallback(
              function () {
                a(i, { access: u })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(t({ showToast: !0 }))
              },
              [i, u, a, r, t],
            ),
            y = u !== n.access
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              q.a,
              { communityId: i, onSubmit: d, submitDisabled: !y, title: Q },
              l.a.createElement(
                C.a,
                { style: J.root },
                l.a.createElement(z.a, {
                  name: 'membershipSetting',
                  onChange: function (e, n) {
                    m(n)
                  },
                  options: W,
                  value: u,
                }),
              ),
            ),
          )
        }),
        J = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        G = t('n0Rl'),
        Y = t('k49u'),
        Z = (t('849X'), t('TJCb'), t('uDfI')),
        $ =
          (t('yH/f'),
          Object.freeze({
            Open: 'CommunityOpenMembershipSettings',
            Restricted: 'CommunityRestrictedMembershipSettings',
          })),
        ee = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        ne = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        te = (t('enFi'), t('9SqB')),
        ae = t.n(te),
        le = void 0 !== N ? N : (N = t('tFuX')),
        re = void 0 !== P ? P : (P = t('pd/v')),
        ie = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var n
            switch (e.membership_settings.__typename) {
              case $.Open:
                n = { __typename: $.Open }
                break
              case $.Restricted:
                n = {
                  __typename: $.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: n }
          }
        },
        oe = t('zCf4'),
        ce = t('t62R'),
        se = t('e0ey'),
        ue = t('Hsf0'),
        me = t.n(ue),
        de = void 0 !== B ? B : (B = t('tnnC'))
      var ye,
        pe,
        ge = t('jAXQ'),
        fe = t.n(ge),
        be = b.a.f713fbd1,
        he = [
          { label: b.a.fd00a769, value: $.Open, helpText: b.a.a0a16d37 },
          { label: b.a.ce0523a8, value: $.Restricted, helpText: b.a.f1b189f9 },
        ],
        _e = l.a.createElement(
          b.a.I18NFormatMessage,
          { $i18n: 'd35773be' },
          l.a.createElement(ce.b, { weight: 'bold' }, b.a.b1066579),
        ),
        ve = b.a.c85960a0,
        ke = b.a.ca373cd2,
        Ee = b.a.d42d9318,
        Ce = b.a.c5d1634d,
        Se = b.a.b983f9e0,
        Fe = b.a.fc2a5c92,
        Ie = b.a.a1c93d73,
        we = void 0 !== ye ? ye : (ye = t('1tGk')),
        Te = function (e) {
          var n = e.children
          return l.a.createElement(ce.b, { color: 'gray700', size: 'subtext2', style: Me.settingsItem }, n)
        },
        Ke = function (e) {
          var n,
            t,
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
            k = fe()(we, v),
            E = k.membership_settings,
            S = k.rest_id,
            F = (function (e) {
              var n = me()(de, e)
              switch (n.__typename) {
                case $.Restricted:
                  return { access: $.Restricted, invitesPolicy: n.invites_policy }
                case $.Open:
                  return { access: $.Open, invitesPolicy: ee.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(n.__typename))
              }
            })(E),
            I = l.a.useState(F.access),
            K = s()(I, 2),
            M = K[0],
            L = K[1],
            R = l.a.useState(F.invitesPolicy),
            x = s()(R, 2),
            O = x[0],
            A = x[1],
            j = l.a.useState(),
            N = s()(j, 2),
            P = N[0],
            B = N[1],
            H =
              ((n = ae()(le)),
              (t = s()(n, 2)),
              (a = t[0]),
              (r = t[1]),
              (i = ae()(re)),
              (o = s()(i, 2)),
              (c = o[0]),
              (u = o[1]),
              (m = Object(Z.c)()),
              l.a.useCallback(
                function (e, n) {
                  return r || u
                    ? Promise.reject(new Error('Already updating membership settings'))
                    : new Promise(function (t, l) {
                        var r = n.access,
                          i = n.invitesPolicy
                        r === $.Open
                          ? a({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var n = ie(e.community_membership_settings_open_update)
                                n && m(d.c.updateOne(n.id_str, n)), t()
                              },
                              onError: l,
                            })
                          : r === $.Restricted &&
                            c({
                              variables: {
                                communityId: e,
                                restrictedMembershipSettings: { invites_policy: i, join_approval_policy: ne.Moderator },
                              },
                              onCompleted: function (e) {
                                var n = ie(e.community_membership_settings_restricted_update)
                                n && m(d.c.updateOne(n.id_str, n)), t()
                              },
                              onError: l,
                            })
                      })
                },
                [a, c, m, r, u],
              )),
            D = Object(oe.f)(),
            U = l.a.useState(),
            V = s()(U, 2),
            Q = V[0],
            W = V[1],
            X = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            J = l.a.useMemo(
              function () {
                return { access: M, invitesPolicy: O }
              },
              [M, O],
            ),
            G = l.a.useCallback(function (e, n) {
              L(n)
            }, []),
            te = l.a.useCallback(function (e, n) {
              A(n ? ee.Member : ee.Moderator)
            }, []),
            ce = l.a.useCallback(
              function () {
                var e = X({
                  customErrorHandler: function (e) {
                    var n = s()(e.errors, 1)[0],
                      t = n.code === Y.a.GenericBadRequest && n.message ? n.message : Ie
                    return W(t), []
                  },
                })
                H(S, J)
                  .then(function () {
                    D.goBack({ backLocation: '/i/communities/'.concat(S, '/tools/settings') })
                  })
                  .catch(e)
              },
              [S, X, D, J, H],
            ),
            ue = l.a.useCallback(
              function () {
                var e = (function (e, n) {
                  if (e.access === $.Restricted && n.access === $.Open) return b.a.daedd9fa
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
              (_ = p.access === $.Restricted && p.invitesPolicy !== g.invitesPolicy),
              !(f || _)),
            ge = Q
              ? l.a.createElement(
                  C.a,
                  { style: Me.error },
                  l.a.createElement(w.a, { Icon: h.a, headline: Fe, text: Q, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            q.a,
            { communityId: S, onSubmit: ue, submitDisabled: pe, title: be },
            ge,
            l.a.createElement(Te, null, _e),
            l.a.createElement(z.a, { name: 'membershipSetting', onChange: G, options: he, value: M }),
            l.a.createElement(Te, null, Ee),
            M === $.Restricted &&
              l.a.createElement(se.a, {
                checked: O === ee.Member,
                helpText: ke,
                label: ve,
                name: 'allowInvites',
                onChange: te,
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
        Le = t('v//M'),
        Re = void 0 !== pe ? pe : (pe = t('PbB6')),
        xe = Object(G.b)(Re, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Oe = function (e) {
          var n = { communityId: e.communityId }
          return l.a.createElement(xe, {
            render: function (e) {
              var n = e.data,
                t = (e.error, e.fetchStatus),
                a = e.retry,
                r = null == n ? void 0 : n.community
              return l.a.createElement(Le.a, {
                fetchStatus: t,
                onRequestRetry: a,
                render: function () {
                  return r ? l.a.createElement(Ke, { community: r }) : null
                },
                retryable: !0,
              })
            },
            variables: n,
          })
        },
        Ae = t('ROT1'),
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
      var He = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        De = je(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.editName,
            r = e.history,
            i = n.id_str,
            o = n.name,
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
                var e = t({
                  customErrorHandler: function (e) {
                    var n = s()(e.errors, 1)[0],
                      t = n.code === Y.a.GenericBadRequest && n.message ? n.message : Be
                    return k(t), f(!0), []
                  },
                })
                a(i, { name: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, m, a, r, t],
            )
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              q.a,
              { communityId: i, onSubmit: E, submitDisabled: g, title: Ne },
              v
                ? l.a.createElement(
                    C.a,
                    { style: He.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: Pe, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ae.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        Ue = t('U0Qk'),
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
        qe = b.a.a895549f,
        ze = b.a.fc2a5c92,
        Qe = b.a.ced22929
      var We = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Xe = Ve(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            r = e.history,
            i = n.description,
            o = n.id_str,
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
                var e = t({
                  customErrorHandler: function (e) {
                    var n = s()(e.errors, 1)[0],
                      t = n.code === Y.a.GenericBadRequest && n.message ? n.message : Qe
                    return k(t), f(!0), []
                  },
                })
                a(o, { purpose: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, m, a, r, t],
            )
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              q.a,
              { communityId: o, onSubmit: E, submitDisabled: g, title: qe },
              v
                ? l.a.createElement(
                    C.a,
                    { style: We.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: ze, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ue.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        Je = t('Ig1G'),
        Ge = t('x0mb'),
        Ye = t('5FtR'),
        Ze = t('X00g'),
        $e = t('6vad'),
        en = t('csss'),
        nn = t('0yYu'),
        tn = b.a.bb081ea1,
        an = b.a.h3e55b40,
        ln = b.a.j8af8ea9,
        rn = b.a.d5f01115,
        on = b.a.c3c04b70,
        cn = { Closed: b.a.ce0523a8, Public: b.a.fd00a769 },
        sn = b.a.f4a98e9e,
        un = b.a.f713fbd1,
        mn = function (e) {
          var n = e.children
          return l.a.createElement(ce.b, { color: 'gray700', size: 'subtext2' }, n)
        },
        dn = function (e) {
          var n = e.community,
            t = e.history,
            a = e.match,
            i = n.access,
            o = n.description,
            c = n.hasCustomMedia,
            s = n.id_str,
            u = n.localMediaId,
            m = n.media,
            d = n.membership_settings,
            y = n.name,
            p = n.theme,
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
                return _ ? (d.__typename === $.Open ? cn.Public : cn.Closed) : cn[i]
              },
              [i, _, d.__typename],
            ),
            S = Object(Je.d)(n),
            F = Ze.a.getCommunityThemeDisplayName(S),
            I = Ze.a.getCommunityBackgroundColor(p)
          return l.a.createElement(
            oe.d,
            null,
            f
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(De, { community: n, history: t }),
                )
              : null,
            b
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(Xe, { community: n, history: t }),
                )
              : null,
            _
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Oe, { communityId: s }),
                )
              : h
              ? l.a.createElement(
                  oe.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(X, { community: n, history: t }),
                )
              : null,
            l.a.createElement(
              oe.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                V.a,
                null,
                l.a.createElement(
                  q.a,
                  { communityId: s, screenType: 'primaryDetail', title: tn },
                  v ? l.a.createElement(D, { communityId: s, hasCustomMedia: c, localMediaId: u, media: m }) : null,
                  l.a.createElement($e.b, { text: sn }),
                  l.a.createElement(en.a, {
                    description: l.a.createElement(mn, null, y),
                    label: an,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(en.a, {
                    description: o ? l.a.createElement(mn, null, o) : void 0,
                    label: rn,
                    link: b ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(en.a, {
                        description: l.a.createElement(mn, null, F),
                        label: on,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(Ge.a, { style: [{ color: I }, yn.themeIcon] })
                        },
                      })
                    : null,
                  _ || h
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(nn.a, null),
                        l.a.createElement($e.b, { text: un }),
                        l.a.createElement(en.a, {
                          description: l.a.createElement(mn, null, C),
                          label: ln,
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
        yn =
          ((n.default = o(dn)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    yUT0: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'EditThemeScreen', function () {
          return I
        })
      var a = t('ddV6'),
        l = t.n(a),
        r = (t('yH/f'), t('jwue'), t('7x/C'), t('+oxZ'), t('ERkP')),
        i = t.n(r),
        o = t('eSoz'),
        c = t('rxPX'),
        s = t('0KEI'),
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
        m = t('jHSc'),
        d = t('Ig1G'),
        y = t('3XMw'),
        p = t.n(y),
        g = t('MWbm'),
        f = t('X00g'),
        b = t('/yvb'),
        h = t('uI9t'),
        _ = t('rHpw'),
        v = p.a.dbda7beb,
        k = p.a.i2209530,
        E = p.a.hcf35d0c,
        C = p.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        F = {}
      function I(e) {
        var n = e.community,
          t = e.createLocalApiErrorHandler,
          a = e.editTheme,
          r = e.history,
          o = n.id_str,
          c = n.theme,
          s = f.a.getCommunityBackgroundColorName(c),
          u = i.a.useState(!1),
          y = l()(u, 2),
          p = y[0],
          _ = y[1],
          I = i.a.useState(Object(d.d)(n)),
          T = l()(I, 2),
          K = T[0],
          M = T[1],
          L = i.a.useState(f.a.getCommunityThemeDisplayName(K)),
          R = l()(L, 2),
          x = R[0],
          O = R[1],
          A = i.a.useState(s),
          j = l()(A, 2),
          N = j[0],
          P = j[1],
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
                S.forEach(function (n) {
                  var t = f.a.getCommunityTheme(n),
                    a = f.a.getCommunityBackgroundColorName(t)
                  ;(F[a] = n), e.push({ accessibilityLabel: f.a.getCommunityThemeDisplayName(n), colorName: a })
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
                .catch(t({ showToast: !0 }))
            },
            [o, K, a, r, t],
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
                var t = F[e],
                  a = t !== Object(d.d)(n)
                M(t), O(f.a.getCommunityThemeDisplayName(t)), P(e), _(a)
              },
              options: D,
              value: N,
            }),
          ),
        )
      }
      var w = _.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      n.default = u(I)
    },
    zakg: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(i.hash = '9533cbfb5394a4601514cbc83020138b'), (n.default = i)
    },
  },
])
//# sourceMappingURL=WIPED
