;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    '+BRT': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDetail_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityBannerImage_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionContainer_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionToggle_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityDetailFacePile_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityShareButton_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityInviteButton_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'fcba88c15f68bb3f4cd44f88c073bd2b',
      }
      n.default = t
    },
    '+BRr': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityAbout_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityInfo_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'e3c054cb8c0d4897f6061cc9b1669019',
      }
      n.default = t
    },
    '08/x': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunitiesSearchItem_item',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityFacePile_community' },
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageThumbnail_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '782e9c4c64c2c403f9d74b62979e20ff',
      }
      n.default = t
    },
    '0ULw': function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        i = a('ERkP'),
        r = a.n(i),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    '0weh': function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        i = a('ERkP'),
        r = a.n(i),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25z',
              }),
              r.a.createElement('path', {
                d: 'M13.37 16.19c0 .76-.61 1.37-1.37 1.37s-1.38-.61-1.38-1.37.62-1.38 1.38-1.38 1.37.62 1.37 1.38zm.35-7.66l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    '1Xyu': function (e, n, a) {
      'use strict'
      a.d(n, 'b', function () {
        return c
      })
      var t,
        l = a('ERkP'),
        i = a.n(l),
        r = a('X00g'),
        o = (a('enFi'), a('jAXQ')),
        s = a.n(o),
        c = function (e) {
          var n = s()(void 0 !== t ? t : (t = a('DCZs')), e),
            l = n.custom_theme,
            o = n.default_theme,
            c = null != l ? l : o
          return i.a.useMemo(
            function () {
              return r.a.getCommunityTheme(c)
            },
            [c],
          )
        }
      n.a = c
    },
    '1rMX': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
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
                  selections: (t = [
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
              selections: t,
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'CommunityOriginationAttributes_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (n.default = l)
    },
    '1tGk': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
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
                        (t = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      ],
                      type: 'CommunityOpenMembershipSettings',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        t,
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
    '21nk': function (e, n, a) {
      'use strict'
      var t = a('I9iR'),
        l = a('3KVO'),
        i = a('yLYC'),
        r = a('Ud88'),
        o = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        s = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, n, a) {
        o()
        var s,
          m = r(),
          d = n.fetchKey,
          y = n.fetchPolicy,
          g = n.source,
          p = n.variables,
          f = n.networkCacheConfig,
          b = i(e, p, f)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          b.request.node.params.name !== n.name && t(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: c(m, b.request.identifier, function () {
                return m === n.environment && null != g
                  ? m.executeWithSource({ operation: b, source: g })
                  : m.execute({ operation: b })
              }),
              fetchPolicy: y,
              query: b,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(m, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != g && m === n.environment ? g.ifEmpty(h) : (n.environment, h),
            fetchKey: d,
            fetchPolicy: y,
            query: b,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return l(s)
      }
    },
    '23An': function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = t.useEffect,
        i = t.useRef
      e.exports = function () {
        var e = i(!0)
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
    '2rr8': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityCreationSummary_community',
          selections: [
            (t = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [t, { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (n.default = l)
    },
    '3JAx': function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        i = a('fyvP'),
        r = a('rHpw'),
        o = a('MWbm')
      n.a = function (e) {
        return l.a.createElement(o.a, { style: s.root }, l.a.createElement(i.a, e))
      }
      var s = r.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '7xtl': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s = {
          fragment: {
            argumentDefinitions: [
              (t = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
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
            argumentDefinitions: [t, i, l],
            kind: 'Operation',
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: r,
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
            id: '-z7ecfy5Y04vSJHD3xQ1aA',
            metadata: {},
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(s.hash = '611e4e6390b7bb405821b13d8b63cd5d'), (n.default = s)
    },
    '8sFp': function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'default', function () {
          return d
        })
      var t = a('ERkP'),
        l = a.n(t),
        i = a('3XMw'),
        r = a.n(i),
        o = a('mw9i'),
        s = a('FIs5'),
        c = a('rHpw'),
        u = r.a.c2117be6,
        m = r.a.c2c4dad3
      function d() {
        return l.a.createElement(o.a, { style: y.root }, l.a.createElement(s.a, { header: u, message: m }))
      }
      var y = c.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    '8vG3': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
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
                            (t = {
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
                  selections: [t],
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
    '9SqB': function (e, n, a) {
      'use strict'
      var t = a('IGGJ')(a('yiKp')),
        l = a('ERkP'),
        i = a('Ud88'),
        r = a('K1lQ').commitMutation,
        o = l.useState,
        s = l.useEffect,
        c = l.useRef,
        u = l.useCallback,
        m = a('23An')
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          a = i(),
          l = m(),
          d = c(a),
          y = c(e),
          g = c(new Set()),
          p = o(!1),
          f = p[0],
          b = p[1],
          h = u(
            function (n) {
              d.current === a && y.current === e && (g.current.delete(n), l.current && b(g.current.size > 0))
            },
            [a, l, e],
          )
        s(
          function () {
            ;(d.current === a && y.current === e) ||
              ((g.current = new Set()), l.current && b(!1), (d.current = a), (y.current = e))
          },
          [a, l, e],
        )
        var _ = u(
          function (i) {
            var r = n(
              a,
              (0, t.default)(
                (0, t.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    h(r), i.onCompleted && i.onCompleted(e, n)
                  },
                  onError: function (e) {
                    h(r), i.onError && i.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(r), i.onUnsubscribe && i.onUnsubscribe()
                  },
                },
              ),
            )
            return g.current.add(r), l.current && b(!0), r
          },
          [h, n, a, l, e],
        )
        return [_, f]
      }
    },
    AfjF: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return d
      })
      var t = a('ERkP'),
        l = a.n(t),
        i = a('eb3s'),
        r = a('3XMw'),
        o = a.n(r),
        s = o.a.d45ae5e0,
        c = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var n = e.onCancel,
            a = e.onConfirm
          return l.a.createElement(i.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: s,
            onCancel: n,
            onConfirm: a,
            text: c,
          })
        }
    },
    BX8b: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityRules_community',
          selections: [
            (t = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [
                t,
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
    C2fM: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (t = [
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
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                      { args: null, kind: 'FragmentSpread', name: 'actions_update_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (c = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestDenyError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      s,
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
            argumentDefinitions: t,
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
                  i,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
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
                                  i,
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
                                      r,
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
                            selections: [
                              m,
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
                                      r,
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'pending_join_request_count',
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
                          r,
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
                            selections: (d = [i]),
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
                          r,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  c,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'f8oINMArsIzMhaM6B3oI0w',
            metadata: {},
            name: 'actions_denyMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '994dfbaa33f6514fd6bf940e12397869'), (n.default = y)
    },
    DCZs: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
      n.default = t
    },
    'DV/y': function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityInviteScreen', function () {
          return te
        })
      var t = a('KEM+'),
        l = a.n(t),
        i = a('yiKp'),
        r = a.n(i),
        o = a('ddV6'),
        s = a.n(o),
        c = (a('KqXw'), a('WNMA'), a('LW0h'), a('7x/C'), a('z84I'), a('1Iuc'), a('ERkP')),
        u = a.n(c),
        m = a('+Kfv'),
        d = a('eSoz'),
        y = a('rxPX'),
        g = a('0KEI'),
        p = function (e, n) {
          var a = n.match.params.communityId
          return a ? d.c.select(e, a) : void 0
        },
        f = Object(y.a)()
          .propsFromState(function () {
            return { community: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_INVITE_SCREEN',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'invite' }),
        b = a('jHSc'),
        h = a('3XMw'),
        _ = a.n(h),
        k = a('/yvb'),
        v = (a('2G9S'), a('KhuB')),
        E = a('li/m'),
        C = function (e, n) {
          return n.communityId && n.userId ? v.b.select(e, ''.concat(n.communityId, '_').concat(n.userId)) : void 0
        },
        F = Object(y.a)()
          .propsFromState(function () {
            return { inviteActionResult: C }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: E.a,
            }
          }),
        S = _.a.cd133485,
        I = _.a.hb1e378e,
        K = _.a.bcd6bb0d,
        w = 'primaryFilled',
        T = { viewType: 'invite' }
      var R = F(function (e) {
          var n = e.communityId,
            a = e.createLocalApiErrorHandler,
            t = e.inviteActionResult,
            l = e.inviteToCommunity,
            i = e.onInvite,
            r = e.onInviteActionResultChange,
            o = e.userId,
            s = e.viewerInvited,
            c = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return S
              switch (e.reason) {
                case 'UserIsMember':
                  return K
                case 'UserIsInvited':
                  return I
                default:
                  return S
              }
            })(t),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return w
              switch (e.reason) {
                case 'UserIsMember':
                  return w
                default:
                  return 'primaryOutlined'
              }
            })(t)
          u.a.useEffect(
            function () {
              t && r(o, t)
            },
            [t, o, r],
          )
          var d = 'UserCommunityInviteAction' === (null == t ? void 0 : t.__typename)
          return !d && !s
            ? null
            : u.a.createElement(
                k.a,
                {
                  accessibilityLabel: c,
                  behavioralEventContext: T,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      l(n, o)
                        .then(function () {
                          return i && i(o)
                        })
                        .catch(a())
                  },
                  size: 'small',
                  type: m,
                },
                c,
              )
        }),
        M = a('5FtR'),
        L = a('4e/K'),
        x = a('MWbm'),
        O = a('4zmP'),
        A = a('t62R'),
        j = a('FIs5'),
        P = a('rHpw'),
        N = a('GZwR'),
        B = _.a.b139b549,
        H = _.a.dfddd842,
        D = _.a.cf4898a0,
        U = _.a.a3b3939a,
        q = _.a.db4f0cc9,
        z = _.a.h252ede6,
        V = _.a.a5cd93f9,
        Q = _.a.ba5a88e3,
        W = _.a.i6568549,
        J = _.a.b772cd65,
        X = _.a.b4f16d00,
        G = _.a.ja1387a7,
        Y = _.a.b92a21d8,
        Z = _.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        ne = [N.a.CommunityUsers],
        ae = { viewType: 'community' }
      function te(e) {
        var n = e.community,
          a = e.createLocalApiErrorHandler,
          t = e.fetchCommunityIfNeeded,
          i = (n || {}).invites_result,
          o = e.match.params.communityId || '',
          c = u.a.useState(''),
          d = s()(c, 2),
          y = d[0],
          g = d[1],
          p = u.a.useState({}),
          f = s()(p, 2),
          h = f[0],
          _ = f[1],
          v = u.a.useState({}),
          E = s()(v, 2),
          C = E[0],
          F = E[1]
        u.a.useEffect(
          function () {
            o && t(o).catch(a())
          },
          [o, a, t],
        )
        var S,
          I,
          K = u.a.useMemo(
            function () {
              return y.length > 0 || !n
                ? ee
                : 'CommunityInvites' === i.__typename
                ? i.users_to_invite_slice.items.map(N.g).filter(Boolean)
                : ee
            },
            [n, i, y.length],
          ),
          w = u.a.useCallback(
            function (e, n) {
              _(function (a) {
                return r()(r()({}, a), {}, l()({}, e, n))
              })
            },
            [_],
          ),
          T = u.a.useCallback(
            function (e) {
              F(function (n) {
                return r()(r()({}, n), {}, l()({}, e, !0))
              })
            },
            [F],
          ),
          P = o
            ? u.a.createElement(M.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(M.a, { to: '/' }),
          te = u.a.createElement(
            k.a,
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
        return 'CommunityInvitesUnavailable' === (null == i ? void 0 : i.__typename)
          ? P
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ae },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: te, subtitle: H, title: B },
                ((S = (null == i ? void 0 : i.remaining_invite_count) || 0),
                (I = S > 999),
                'CommunityInvites' === (null == i ? void 0 : i.__typename) &&
                  !I &&
                  u.a.createElement(
                    x.a,
                    { style: le.callout },
                    u.a.createElement(O.a, { text: W({ remaining_invite_count: S }) }),
                  )),
                u.a.createElement(L.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: ne,
                  getItemDisabledMessage: function (e) {
                    var n
                    if ('user' === e.type) {
                      var a = e.data,
                        t = a.id_str,
                        l = a.screen_name,
                        i = h[t]
                      if ('UserCommunityInviteActionUnavailable' === (null == i ? void 0 : i.__typename))
                        switch (i.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: l })
                          case 'UserIsMember':
                            return q({ screen_name: l })
                          case 'ViewerOutOfInvites':
                            return z
                          default:
                            return null !== (n = i.message) && void 0 !== n ? n : V({ screen_name: l })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var n = e.data.id_str,
                        a = h[n]
                      return !C[n] && 'UserCommunityInviteAction' !== (null == a ? void 0 : a.__typename)
                    }
                    return !0
                  },
                  injectedItems: K,
                  inputStyle: le.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    g(e)
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
                    var n = e.userId
                    return u.a.createElement(R, {
                      communityId: o,
                      onInvite: T,
                      onInviteActionResultChange: w,
                      userId: n,
                      viewerInvited: C[n],
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
        ie = f(te)
      n.default = ie
    },
    DVIF: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m,
        d,
        y,
        g,
        p,
        f,
        b,
        h,
        _,
        k,
        v,
        E,
        C = {
          fragment: {
            argumentDefinitions: [
              (t = { defaultValue: null, kind: 'LocalArgument', name: 'cursor' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'query' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'CommunitiesSearchQuery',
            selections: [
              {
                alias: 'communities_search_slice',
                args: [
                  (i = { kind: 'Literal', name: 'count', value: 10 }),
                  (r = { kind: 'Variable', name: 'query', variableName: 'query' }),
                  (o = { kind: 'Literal', name: 's', value: 4 }),
                ],
                concreteType: 'CommunitySearchSlice',
                kind: 'LinkedField',
                name: '__CommunitiesSearchQuery_communities_slice_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'Community',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      { args: null, kind: 'FragmentSpread', name: 'CommunitiesSearchItem_item' },
                      (s = {
                        kind: 'ClientExtension',
                        selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
                      }),
                    ],
                    storageKey: null,
                  },
                  (c = {
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
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [l, t],
            kind: 'Operation',
            name: 'CommunitiesSearchQuery',
            selections: [
              {
                alias: null,
                args: (u = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }, r, o]),
                concreteType: 'CommunitySearchSlice',
                kind: 'LinkedField',
                name: 'communities_search_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'Community',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      (m = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
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
                              (d = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: '__typename',
                                storageKey: null,
                              }),
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
                                  (y = {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  }),
                                  (g = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (p = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'message',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'TimelineRichText',
                                    kind: 'LinkedField',
                                    name: 'unavailable_message',
                                    plural: !1,
                                    selections: [
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
                                              d,
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
                                                selections: (b = [
                                                  (f = {
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
                                                  g,
                                                  (h = {
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
                                                  h,
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
                                                  (v = {
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
                                                                  (_ = {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'screen_name',
                                                                    storageKey: null,
                                                                  }),
                                                                ],
                                                                storageKey: null,
                                                              },
                                                              y,
                                                              m,
                                                              g,
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              (k = {
                                                                alias: 'reason',
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'unavailable_reason',
                                                                storageKey: null,
                                                              }),
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
                                                  }),
                                                ],
                                                type: 'TimelineRichTextUser',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: [_, v],
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
                                      f,
                                    ],
                                    storageKey: null,
                                  },
                                  k,
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
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiMedia',
                        kind: 'LinkedField',
                        name: 'default_banner_media',
                        plural: !1,
                        selections: (E = [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'media_info',
                            plural: !1,
                            selections: [
                              d,
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
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiMediaRect',
                                    kind: 'LinkedField',
                                    name: 'salient_rect',
                                    plural: !1,
                                    selections: [
                                      { alias: null, args: null, kind: 'ScalarField', name: 'left', storageKey: null },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'top', storageKey: null },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'width', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'height',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                type: 'ApiImage',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          g,
                        ]),
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiMedia',
                        kind: 'LinkedField',
                        name: 'custom_banner_media',
                        plural: !1,
                        selections: E,
                        storageKey: null,
                      },
                      g,
                      s,
                    ],
                    storageKey: null,
                  },
                  c,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: u,
                filters: ['query', 'count', 's'],
                handle: 'slice',
                key: 'CommunitiesSearchQuery_communities_slice',
                kind: 'LinkedHandle',
                name: 'communities_search_slice',
              },
            ],
          },
          params: {
            id: '6ognTidFIQCWJ6zY9-d-Gg',
            metadata: { sliceInfoPath: ['communities_search_slice', 'slice_info'] },
            name: 'CommunitiesSearchQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(C.hash = 'c848c1bd320716d294b5f3f2b34ed1a8'), (n.default = C)
    },
    'Dm5+': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (t = [
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
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                      { args: null, kind: 'FragmentSpread', name: 'actions_update_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (c = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestApproveError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      s,
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
            argumentDefinitions: t,
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
                  i,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
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
                                  i,
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
                                      r,
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
                            selections: [
                              m,
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
                                      r,
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'pending_join_request_count',
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
                          r,
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
                            selections: (d = [i]),
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
                          r,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  c,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Q7qnoflnLrXWUqeHBn9WxA',
            metadata: {},
            name: 'actions_approveMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = 'cccb7f84865368f471eb927f82edccec'), (n.default = y)
    },
    EPsT: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return _
      })
      var t = a('VrFO'),
        l = a.n(t),
        i = a('Y9Ll'),
        r = a.n(i),
        o = a('1Pcy'),
        s = a.n(o),
        c = a('5Yy7'),
        u = a.n(c),
        m = a('2VqO'),
        d = a.n(m),
        y = a('KEM+'),
        g = a.n(y),
        p = a('ERkP'),
        f = a.n(p),
        b = a('jtO7'),
        h = a('eb3s'),
        _ = (function (e) {
          u()(a, e)
          var n = d()(a)
          function a(e) {
            var t
            return (
              l()(this, a),
              (t = n.call(this, e)),
              g()(s()(t), '_handleClick', function (e) {
                t.setState({ showConfirmation: !0 })
              }),
              g()(s()(t), '_handleCancel', function () {
                t.setState({ showConfirmation: !1 })
              }),
              g()(s()(t), '_handleConfirm', function () {
                t.setState({ showConfirmation: !1 }), t.props.onConfirmationSheetConfirm()
              }),
              (t.state = { showConfirmation: !1 }),
              t
            )
          }
          return (
            r()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.align,
                    a = e.color,
                    t = e.confirmationSheetConfirmButtonLabel,
                    l = e.confirmationSheetConfirmButtonType,
                    i = e.confirmationSheetHeadline,
                    r = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(b.a, { align: n, color: a, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? f.a.createElement(h.a, {
                          confirmButtonLabel: t,
                          confirmButtonType: l,
                          headline: i,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: r,
                        })
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      g()(_, 'defaultProps', { color: 'red500', align: 'center' })
    },
    Eh7u: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityFacePile_community',
          selections: [
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
                    (t = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                      selections: (r = [
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
                                        (o = {
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
                                      selections: r,
                                      type: 'TimelineRichTextHashtag',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        o,
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
                                        (u = {
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
                                                t,
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
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'rest_id',
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    (c = {
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
                                      selections: [s, u],
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
                        c,
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
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(m.hash = '97ecd7a2189f93a563b3695f898d77ab'), (n.default = m)
    },
    FSMj: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'ToolsPeopleScreen', function () {
          return C
        })
      var t = a('ddV6'),
        l = a.n(t),
        i = (a('vrRf'), a('ERkP')),
        r = a.n(i),
        o = a('LgBi'),
        s = a('UZ0O'),
        c = a('rxPX'),
        u = Object(c.a)().withAnalytics({ page: 'communities', section: 'people' }),
        m = a('3XMw'),
        d = a.n(m),
        y = a('gDCe'),
        g = a('yoO3'),
        p = a('k/OQ'),
        f = a('mWs5'),
        b = a('MWbm'),
        h = a('krnS'),
        _ = a('zCf4'),
        k = d.a.dc6ce7b4,
        v = d.a.f8321d82,
        E = d.a.ga2aa43c,
        C = function (e) {
          var n = e.community,
            a = e.communityId,
            t = e.location,
            i = r.a.useState(!1),
            c = l()(i, 2),
            u = c[0],
            m = c[1],
            d = (null == t ? void 0 : t.pathname) && t.pathname.indexOf('members') > 0,
            C = d ? v : E,
            F = r.a.useMemo(
              function () {
                var e = a
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(a, '/tools/members'), state: t.state },
                        label: v,
                        key: v,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(a, '/tools/moderators'), state: t.state },
                        label: E,
                        key: E,
                      },
                    ]
                  : []
                return r.a.createElement(p.a, { accessibilityLabel: C, links: e })
              },
              [a, C, t],
            )
          return r.a.createElement(
            g.a,
            null,
            r.a.createElement(
              f.a,
              {
                communityId: n.id_str,
                rightControl: d ? r.a.createElement(o.a, { communityId: a }) : void 0,
                title: k,
              },
              r.a.createElement(
                b.a,
                null,
                r.a.createElement(s.a, { community: n, communityId: a, onIsSearchingChange: m }),
                u
                  ? null
                  : r.a.createElement(
                      r.a.Fragment,
                      null,
                      F,
                      r.a.createElement(
                        _.d,
                        null,
                        r.a.createElement(
                          _.b,
                          { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/members') },
                          r.a.createElement(h.b, {
                            communityId: n.id_str,
                            mode: h.a.Members,
                            viewerRole: null == n ? void 0 : n.role,
                          }),
                        ),
                        r.a.createElement(
                          _.b,
                          { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/moderators') },
                          r.a.createElement(y.a, { community: n }),
                          r.a.createElement(h.b, {
                            communityId: n.id_str,
                            mode: h.a.Moderators,
                            viewerRole: null == n ? void 0 : n.role,
                          }),
                        ),
                      ),
                    ),
              ),
            ),
          )
        }
      n.default = u(C)
    },
    'Fq/Z': function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'FeedbackType', function () {
          return J
        }),
        a.d(n, 'CommunityFeedbackScreen', function () {
          return X
        })
      var t = a('97Jx'),
        l = a.n(t),
        i = a('m3Bd'),
        r = a.n(i),
        o = (a('yH/f'), a('KqXw'), a('WNMA'), a('ERkP')),
        s = a.n(o),
        c = a('v6aA'),
        u = a('+Kfv'),
        m = a('es0u'),
        d = (a('ZVkB'), a('ulNE'), a('urw/'), a('jQ3i'), a('x4t0'), a('eSoz')),
        y = a('XOJV'),
        g = a('G6rE'),
        p = a('rxPX'),
        f = function (e, n) {
          var a = n.match.params.tweetId
          return a ? y.a.selectHydrated(e, a) : void 0
        },
        b = function (e, n) {
          var a = n.match.params
          return Object.entries(a).flat().includes('tweetId') ? J.HiddenTweet : J.RemovedMember
        },
        h = function (e, n) {
          if (b(0, n) === J.HiddenTweet) {
            var a,
              t = n.match.params.tweetId,
              l = t ? y.a.selectHydrated(e, t) : void 0,
              i = null == l || null === (a = l.community_relationship) || void 0 === a ? void 0 : a.community
            return i ? d.c.select(e, i) : void 0
          }
          var r = n.match.params.communityId
          return r ? d.c.select(e, r) : void 0
        },
        _ = function (e, n) {
          if (b(0, n) === J.HiddenTweet) {
            var a = n.match.params.tweetId
            return a ? y.a.selectFetchStatus(e, a) : void 0
          }
          var t = n.match.params.communityId
          return t ? d.c.selectFetchStatus(e, t) : void 0
        },
        k = Object(p.a)()
          .propsFromState(function () {
            return { community: h, fetchStatus: _, loggedInUser: g.e.selectLoggedInUser, tweet: f, type: b }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: y.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        v = (a('ho0z'), a('PKbs')),
        E = a('egQk'),
        C = a('3XMw'),
        F = a.n(C),
        S = a('/de5'),
        I = a('b5s6'),
        K = a('MWbm'),
        w = a('X00g'),
        T = a('t62R'),
        R = a('4zmP'),
        M = a('0yYu'),
        L = a('6vad'),
        x = a('rHpw'),
        O = F.a.j643a234,
        A = F.a.c730a21c,
        j = F.a.a5baa7d1,
        P = F.a.icc32e3d,
        N = w.a.getCommunityTheme('Default'),
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
            a = e.community,
            t = e.history,
            l = e.location,
            i = e.match,
            r = e.tweet,
            o = e.type,
            c = { history: t, location: l, match: i },
            u = null == r ? void 0 : r.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (n = (function (e) {
                  switch (e) {
                    case J.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case J.RemovedMember:
                      return null == a ? void 0 : a.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === n
                ? void 0
                : n.name) || '',
            y = null == a ? void 0 : a.name,
            g = null == a ? void 0 : a.rules,
            p = (null == a ? void 0 : a.theme) || N,
            f = w.a.getCommunityUIColorName(p),
            b = Object(E.a)({ communityName: y })
          return p && null != g && g.length
            ? s.a.createElement(
                K.a,
                { style: B.tweetInfo },
                s.a.createElement(
                  K.a,
                  { style: B.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case J.HiddenTweet:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            T.b,
                            { color: f, size: 'subtext1', style: B.communityTitle, weight: 'bold' },
                            y,
                          ),
                          s.a.createElement(
                            T.b,
                            { size: 'headline1', style: [B.titleText, B.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          s.a.createElement(I.a, {
                            style: B.tweetContainer,
                            tweetId: null == r ? void 0 : r.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          s.a.createElement(R.a, { headline: A, text: d }),
                          s.a.createElement(T.b, { style: B.helpText }, j),
                        )
                      case J.RemovedMember:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            T.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            P({ communityName: y }),
                          ),
                          s.a.createElement(
                            K.a,
                            { style: B.removedMemberReason },
                            s.a.createElement(T.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                s.a.createElement(M.a, null),
                s.a.createElement(L.b, { text: b }),
                s.a.createElement(v.b, {
                  badgeStyle: B.badges,
                  ruleContainerStyle: B.rules,
                  rules: g,
                  theme: p,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : s.a.createElement(S.b, c)
        },
        D = a('G1WX'),
        U = a('yoO3'),
        q = a('VS6U'),
        z = a('0KEI'),
        V = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        Q = F.a.jf99d610,
        W = { viewType: 'community' },
        J = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function X(e) {
        var n = s.a.useContext(c.a).featureSwitches.isTrue('c9s_enabled'),
          a = (e.analytics, e.community),
          t = e.fetchCommunity,
          i = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          g = e.type,
          p = r()(e, V),
          f = function (e) {
            var n, t
            switch (e) {
              case J.HiddenTweet:
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
              case J.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == a ? void 0 : a.viewerViolatedRule)),
                  _handleRetry: C,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == a || null === (t = a.viewer_relationship) || void 0 === t
                        ? void 0
                        : t.moderation_state.__typename),
                  ),
                }
              default:
                return {}
            }
          },
          b = e.match.params,
          h = b.communityId,
          _ = b.tweetId,
          k = Object(z.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          v = Object(z.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          E = s.a.useEffect(
            function () {
              _ && o(_).catch(k)
            },
            [k, o, _],
          ),
          C = s.a.useEffect(
            function () {
              h && t(h).catch(v)
            },
            [h, v, t],
          ),
          F = s.a.createElement(S.b, p)
        return s.a.createElement(D.a, {
          fetchStatus: i,
          onRequestRetry: f(g)._handleRetry,
          render: function () {
            var a = f(g),
              t = a.BEHAVIORAL_EVENT_VIEW_TYPE,
              i = a.isAuthorizedViewer,
              r = a.shouldRenderFeedback
            return i && n
              ? s.a.createElement(
                  u.a,
                  { behavioralEventContext: W },
                  r
                    ? s.a.createElement(
                        U.a,
                        { behavioralEventViewType: t },
                        s.a.createElement(q.a, {
                          backLocation: '/notifications',
                          history: p.history,
                          primaryContent: s.a.createElement(H, l()({}, e, { type: g })),
                          sidebarContent: s.a.createElement(m.a, null),
                          title: Q,
                        }),
                      )
                    : F,
                )
              : F
          },
        })
      }
      var G = k(X)
      n.default = G
    },
    'I/KZ': function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return l
      }),
        a.d(n, 'b', function () {
          return i
        }),
        a.d(n, 'd', function () {
          return _
        }),
        a.d(n, 'e', function () {
          return K
        }),
        a.d(n, 'c', function () {
          return w
        })
      a('yH/f')
      var t,
        l = Object.freeze({
          Open: 'CommunityOpenMembershipSettings',
          Restricted: 'CommunityRestrictedMembershipSettings',
        }),
        i = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        r = a('ERkP'),
        o = a.n(r),
        s = a('3XMw'),
        c = a.n(s),
        u = a('t62R'),
        m = a('3JAx'),
        d = a('e0ey'),
        y = a('rHpw'),
        g = [
          { label: c.a.fd00a769, value: l.Open, helpText: c.a.a0a16d37 },
          { label: c.a.ce0523a8, value: l.Restricted, helpText: c.a.i1aad6eb },
        ],
        p = c.a.c85960a0,
        f = c.a.ca373cd2,
        b = c.a.j7f554f5,
        h = function (e) {
          var n = e.state,
            a = n.access,
            t = n.invitesPolicy,
            r = e.setters,
            s = r.setAccess,
            c = r.setInvitesPolicy,
            y = !e.hideInvitePolicy,
            h = o.a.useCallback(
              function (e, n) {
                s(n)
              },
              [s],
            ),
            _ = o.a.useCallback(
              function (e, n) {
                c(n ? i.Member : i.Moderator)
              },
              [c],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: k.settingsItem }, b),
            o.a.createElement(m.a, { name: 'membershipSetting', onChange: h, options: g, value: a }),
            y &&
              a === l.Restricted &&
              o.a.createElement(d.a, {
                checked: t === i.Member,
                helpText: f,
                label: p,
                name: 'allowInvites',
                onChange: _,
              }),
          )
        },
        _ = o.a.memo(h),
        k = y.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        v = a('ddV6'),
        E = a.n(v),
        C = a('KEM+'),
        F = a.n(C),
        S = ((t = {}), F()(t, l.Open, i.Member), F()(t, l.Restricted, i.Moderator), t),
        I = { access: l.Restricted, invitesPolicy: S[l.Restricted] }
      function K() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          n = o.a.useState(e.access),
          a = E()(n, 2),
          t = a[0],
          l = a[1],
          i = o.a.useState(e.invitesPolicy),
          r = E()(i, 2),
          s = r[0],
          c = r[1],
          u = o.a.useMemo(function () {
            return {
              setAccess: function (e) {
                c(S[e]), l(e)
              },
              setInvitesPolicy: c,
            }
          }, []),
          m = o.a.useMemo(
            function () {
              return { access: t, invitesPolicy: s }
            },
            [t, s],
          )
        return [m, u]
      }
      function w(e) {
        var n, a
        switch (e.access) {
          case l.Open:
            n = 'Open'
            break
          case l.Restricted:
          default:
            n = 'RestrictedJoinRequestsDisabled'
        }
        switch (e.invitesPolicy) {
          case i.Moderator:
            a = 'ModeratorInvitesAllowed'
            break
          case i.Member:
            a = 'MemberInvitesAllowed'
            break
          case i.None:
          default:
            a = 'NoInvitesAllowed'
        }
        return { joinPolicy: n, invitesPolicy: a }
      }
    },
    JAeQ: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return p
      })
      var t = a('yiKp'),
        l = a.n(t),
        i = a('ddV6'),
        r = a.n(i),
        o = (a('yH/f'), a('kH1Z'), a('6U7i'), a('ERkP')),
        s = a.n(o),
        c = a('3XMw'),
        u = a.n(c),
        m = a('fS8x'),
        d = u.a.b7fb6bd9,
        y = u.a.e71cdf4d,
        g = Object.freeze({ NotStarted: 'not_started', Started: 'started', Completed: 'completed' })
      function p(e) {
        var n = e.aspectRatio,
          a = e.media,
          t = e.onCancel,
          i = e.onCropDone,
          o = s.a.useState({ status: 'not_started' }),
          c = r()(o, 2),
          u = c[0],
          p = c[1],
          f = s.a.useState(!1),
          b = r()(f, 2),
          h = b[0],
          _ = b[1],
          k = s.a.useState(!1),
          v = r()(k, 2),
          E = v[0],
          C = v[1],
          F = u.croppedMediaId,
          S = void 0 === F ? void 0 : F,
          I = u.status
        s.a.useEffect(
          function () {
            I === g.NotStarted && (_(!0), p({ status: 'started' })),
              I === g.Completed && a.id !== S && p({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, a, S],
        )
        var K = s.a.useCallback(
            function () {
              _(!1), p({ status: g.Completed, croppedMediaId: a.id }), t()
            },
            [t, a],
          ),
          w = s.a.useCallback(function () {
            _(!1), C(!0)
          }, []),
          T = s.a.useCallback(function () {
            C(!1), _(!0)
          }, []),
          R = s.a.useCallback(function () {
            C(!1)
          }, []),
          M = s.a.useCallback(
            function (e) {
              p({ status: g.Completed, croppedMediaId: a.id }), null == i || i(e)
            },
            [i, a],
          ),
          L = l()(l()({}, a), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: a.mediaFile, cropData: void 0 })
        return s.a.createElement(
          s.a.Fragment,
          null,
          h ? s.a.createElement(m.a, { defaultAspectRatio: n, media: a, onCancel: K, onDone: w, title: d }) : null,
          E
            ? s.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: L,
                onCancel: T,
                onCropDone: M,
                onDone: R,
                title: y,
              })
            : null,
        )
      }
    },
    Jt8P: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
      n.default = t
    },
    KQzH: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        i = (a('hBvt'), a('ERkP')),
        r = a.n(i),
        o = a('BUB3'),
        s = a('shC7'),
        c = a('csss'),
        u = a('t62R')
      n.a = function (e) {
        return r.a.createElement(o.a, { exact: !0, path: e.link }, function (n) {
          var a = s.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return r.a.createElement(c.a, l()({ isActive: n }, e, { label: r.a.createElement(u.b, { dir: a }, e.label) }))
        })
      }
    },
    L47s: function (e, n, a) {
      'use strict'
      var t = a('ddV6'),
        l = a.n(t),
        i = a('ERkP'),
        r = a.n(i),
        o = a('+Kfv'),
        s = a('3XMw'),
        c = a.n(s),
        u = a('feu+'),
        m = a('ii+P'),
        d = c.a.j24c37b2,
        y = function (e) {
          var n = e.Content,
            a = e.actionLabel,
            t = void 0 === a ? d : a,
            i = e.flag,
            s = e.headline,
            c = e.subtext,
            y = e.behavioralEventContext,
            g = e.withCloseButton,
            p = Object(m.a)(i),
            f = l()(p, 2),
            b = f[0],
            h = f[1]
          if (!b) return null
          var _ = r.a.createElement(
            u.a,
            {
              actionLabel: t,
              graphicDisplayMode: 'none',
              headline: s,
              onAction: h,
              onClose: h,
              subtext: c,
              withCloseButton: g,
            },
            r.a.createElement(n, null),
          )
          return y ? r.a.createElement(o.a, { behavioralEventContext: y }, _) : _
        }
      n.a = r.a.memo(y)
    },
    LgBi: function (e, n, a) {
      'use strict'
      var t,
        l = a('97Jx'),
        i = a.n(l),
        r = a('m3Bd'),
        o = a.n(r),
        s = a('ERkP'),
        c = a.n(s),
        u = a('ogGF'),
        m = (a('enFi'), a('Fr3L')),
        d = a('IAZG'),
        y = ['communityId'],
        g = { context: 'CommunityInviteButtonQuery' },
        p = void 0 !== t ? t : (t = a('zakg')),
        f = function (e) {
          var n = e.communityId,
            a = o()(e, y),
            t = Object(d.a)(p, { communityId: n })
          return c.a.createElement(u.a, i()({ community: t.community }, a))
        },
        b = function (e) {
          return c.a.createElement(
            m.a,
            { errorConfig: g },
            c.a.createElement(f, i()({ communityId: e.communityId }, e)),
          )
        }
      n.a = c.a.memo(b)
    },
    M2mT: function (e, n, a) {
      'use strict'
      var t = a('m3Bd'),
        l = a.n(t),
        i = a('VrFO'),
        r = a.n(i),
        o = a('Y9Ll'),
        s = a.n(o),
        c = a('1Pcy'),
        u = a.n(c),
        m = a('5Yy7'),
        d = a.n(m),
        y = a('2VqO'),
        g = a.n(y),
        p = a('KEM+'),
        f = a.n(p),
        b = (a('2G9S'), a('i4UL'), a('+/5o')),
        h = a('ERkP'),
        _ = a.n(h),
        k = a('HPNB'),
        v = a('VAZu'),
        E = a('wiP2'),
        C = a('Es6L'),
        F = a('yiKp'),
        S = a.n(F),
        I = a('rHpw'),
        K = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: S()(S()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        w = a('MWbm'),
        T = a('yw4N'),
        R = a('TnY3'),
        M = a('cHvH'),
        L = a('3xLC'),
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
          d()(a, e)
          var n = g()(a)
          function a() {
            var e
            r()(this, a)
            for (var t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_renderChildren', function () {
                var n = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? _.a.createElement(
                      w.a,
                      { style: K.fill },
                      _.a.createElement(
                        T.a,
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
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return _.a.createElement(M.a, null, function (n) {
                    var a = n.windowWidth
                    return k.a.isTwoColumnLayout(a) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    a =
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
                      : _.a.createElement(E.a.Configure, a),
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
                    a = this.props,
                    t = a.SideNavButton,
                    l = a.TabBar,
                    i = a.TeamsSwitcher,
                    r = a.backLocation,
                    o = a.documentTitle,
                    s = a.headerless,
                    c = a.history,
                    u = a.leftControl,
                    m = a.middleControl,
                    d = a.onBackClick,
                    y = a.rightControl,
                    g = a.screenType,
                    p = a.searchBoxOptions,
                    f = a.secondaryBar,
                    h = a.showSubtitleOnRoot,
                    k = a.showSubtitleOnWideDetail,
                    C = a.subtitle,
                    F = a.title,
                    S = a.titleIconCell,
                    I = a.titleIconCellSize,
                    T = a.withDetailOpen,
                    R = a.withSearchBox,
                    M = a.withTweetButton,
                    L = 'root' === g,
                    x = 'secondaryRoot' === g,
                    O = 'primaryDetail' === g,
                    A = (O && k) || (L && h),
                    j = L || (O && n),
                    P = L ? b.c : O ? b.a : void 0,
                    N = _.a.createElement(
                      w.a,
                      { style: K.appBarContainer },
                      _.a.createElement(v.a, {
                        backLocation: r,
                        fixed: !1,
                        hideBackButton: j,
                        history: c,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: y,
                        secondaryBar: f,
                        subtitle: A ? C : void 0,
                        title: F,
                        titleDomId: P,
                        titleIconCell: S,
                        titleIconCellSize: I,
                      }),
                    ),
                    B =
                      L || (x && T)
                        ? null
                        : _.a.createElement(E.a.Configure, {
                            SideNavButton: t,
                            TabBar: l,
                            TeamsSwitcher: i,
                            backLocation: r,
                            documentTitle: o,
                            headerless: s,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: y,
                            searchBoxOptions: p,
                            subtitle: C,
                            title: F,
                            withSearchBox: R,
                            withTweetButton: M,
                          })
                  return _.a.createElement(_.a.Fragment, null, B, N)
                },
              },
            ]),
            a
          )
        })(_.a.Component)
      f()(O, 'contextType', L.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      n.a = Object(R.a)(O)
    },
    MCGW: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityRulesScreen', function () {
          return C
        })
      var t = a('yiKp'),
        l = a.n(t),
        i = a('97Jx'),
        r = a.n(i),
        o = (a('KqXw'), a('WNMA'), a('ho0z'), a('uFXj'), a('ERkP')),
        s = a.n(o),
        c = a('v6aA'),
        u = a('es0u'),
        m = a('PKbs'),
        d = a('egQk'),
        y = a('1Idg'),
        g = a('eSoz'),
        p = a('rxPX'),
        f = a('0KEI'),
        b = Object(p.a)()
          .propsFromState(function () {
            return { community: y.a, fetchStatus: y.b, isCommunityMember: y.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: g.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        h = a('MDbM'),
        _ = a('/de5'),
        k = a('5FtR'),
        v = a('VS6U'),
        E = a('rHpw'),
        C = function (e) {
          var n = s.a.useContext(c.a).featureSwitches,
            a = e.community,
            t = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            g = e.isCommunityMember,
            p = e.location,
            f = e.match,
            b = f.params.communityId,
            E = n.isTrue('c9s_participation_enabled')
          s.a.useEffect(
            function () {
              b && !a && o !== h.a.LOADED && i(b).catch(t())
            },
            [b, a, t, o, i],
          )
          var C = s.a.useMemo(
            function () {
              return { selectedCommunityId: b || '', defaultText: '' }
            },
            [b],
          )
          if (a && b) {
            var F = a.name,
              I = a.rules,
              K = a.theme,
              w = {
                composeOptions: C,
                history: y,
                sidebarContent: s.a.createElement(u.a, null),
                title: (null == a ? void 0 : a.name) || null,
                withTweetButton: E && g,
              }
            if (I.length > 0) {
              var T = s.a.createElement(m.b, {
                badgeStyle: S.badgeStyle,
                headerContainerStyle: S.containerStyle,
                headerExplanationStyle: S.explanationStyle,
                ruleContainerStyle: S.ruleContainerStyle,
                rules: I,
                theme: K,
                withBottomMargin: !0,
              })
              return s.a.createElement(
                v.a,
                r()({}, w, {
                  backLocation: '/i/communities/'.concat(b),
                  documentTitle: Object(d.a)({ communityName: F }),
                  primaryContent: T,
                }),
              )
            }
            var R = l()(l()({}, w), {}, { title: null }),
              M = s.a.createElement(_.b, { history: y, location: p, match: f })
            return s.a.createElement(v.a, r()({}, R, { primaryContent: M }))
          }
          return o === h.a.LOADED || o === h.a.FAILED ? s.a.createElement(k.a, { to: '/' }) : null
        },
        F = b(C),
        S =
          ((n.default = F),
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
    MjKK: function (e, n, a) {
      'use strict'
      a.d(n, 'b', function () {
        return g
      })
      a('z84I')
      var t,
        l,
        i,
        r,
        o = a('ERkP'),
        s = a.n(o),
        c = a('cHTv'),
        u = (a('enFi'), a('jAXQ')),
        m = a.n(u),
        d = function (e) {
          var n,
            l = m()(void 0 !== t ? t : (t = a('atLU')), e)
          return s.a.useMemo(
            function () {
              var e,
                n,
                a = null == l || null === (e = l.custom_banner_media) || void 0 === e ? void 0 : e.media_info
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
                var t = a.color_info.palette
                return {
                  url: a.original_img_url,
                  height: a.original_img_height,
                  width: a.original_img_width,
                  palette: t.map(function (e) {
                    var n = e.percentage,
                      a = e.rgb
                    return { percentage: n, rgb: { blue: a.blue, red: a.red, green: a.green } }
                  }),
                }
              }
            },
            [null == l || null === (n = l.custom_banner_media) || void 0 === n ? void 0 : n.media_info],
          )
        },
        y = function (e) {
          var n,
            t = m()(void 0 !== l ? l : (l = a('xvEL')), e)
          return s.a.useMemo(
            function () {
              var e,
                n = null == t || null === (e = t.default_banner_media) || void 0 === e ? void 0 : e.media_info,
                a = null == n ? void 0 : n.original_img_url,
                l = null == n ? void 0 : n.original_img_height,
                i = null == n ? void 0 : n.original_img_width
              if (a && l && i) return { url: a, height: l, width: i }
            },
            [null == t || null === (n = t.default_banner_media) || void 0 === n ? void 0 : n.media_info],
          )
        }
      n.a = function (e) {
        var n = m()(void 0 !== i ? i : (i = a('dMLx')), e),
          t = d(n),
          l = y(n)
        return t || l || c.c
      }
      var g = function (e) {
          var n,
            t,
            l,
            i,
            o = m()(void 0 !== r ? r : (r = a('N5wd')), e),
            u = d(o),
            g = y(o)
          return s.a.useMemo(
            function () {
              if (u) {
                var e,
                  n,
                  a =
                    null === (e = o.custom_banner_media) || void 0 === e || null === (n = e.media_info) || void 0 === n
                      ? void 0
                      : n.salient_rect
                return { image: u, crop: p(a) }
              }
              if (g) {
                var t,
                  l,
                  i =
                    null === (t = o.default_banner_media) || void 0 === t || null === (l = t.media_info) || void 0 === l
                      ? void 0
                      : l.salient_rect
                return { image: g, crop: p(i) }
              }
              return { image: c.c, crop: c.b }
            },
            [
              null === (n = o.custom_banner_media) || void 0 === n || null === (t = n.media_info) || void 0 === t
                ? void 0
                : t.salient_rect,
              null === (l = o.default_banner_media) || void 0 === l || null === (i = l.media_info) || void 0 === i
                ? void 0
                : i.salient_rect,
              u,
              g,
            ],
          )
        },
        p = function (e) {
          if (!e) return []
          var n = e.height
          return [{ x: e.left, y: e.top, w: e.width, h: n }]
        }
    },
    N5wd: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useCommunityBannerImageThumbnail_community',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'ApiMedia',
              kind: 'LinkedField',
              name: 'custom_banner_media',
              plural: !1,
              selections: (t = [
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
                          concreteType: 'ApiMediaRect',
                          kind: 'LinkedField',
                          name: 'salient_rect',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'left', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'top', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'width', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'height', storageKey: null },
                          ],
                          storageKey: null,
                        },
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
              selections: t,
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageDefault_community' },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageCustom_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = 'bda649c5a293882e2d130676e026a4d7'), (n.default = l)
    },
    OBBW: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
      n.default = t
    },
    OOKO: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return o
      })
      a('uFXj')
      var t = a('ERkP'),
        l = a.n(t),
        i = a('rHpw'),
        r = a('MWbm')
      function o(e) {
        var n = e.spacing
        return l.a.createElement(r.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != n ? i.a.theme.spaces[n] : void 0 }],
        })
      }
      var s = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    OROh: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return g
      })
      var t,
        l = a('97Jx'),
        i = a.n(l),
        r = a('m3Bd'),
        o = a.n(r),
        s = (a('ho0z'), a('ERkP')),
        c = a.n(s),
        u = a('uIZp'),
        m = (a('enFi'), a('jAXQ')),
        d = a.n(m),
        y = ['user']
      function g(e) {
        var n,
          l = e.user,
          r = o()(e, y),
          s = d()(void 0 !== t ? t : (t = a('P4CI')), l),
          m = c.a.useMemo(
            function () {
              var e, n, a, t, l, i, r, o
              return s
                ? {
                    id_str: s.rest_id,
                    screen_name: (null === (e = s.legacy) || void 0 === e ? void 0 : e.screen_name) || '',
                    name: (null === (n = s.legacy) || void 0 === n ? void 0 : n.name) || '',
                    follow_request_sent:
                      (null === (a = s.legacy) || void 0 === a ? void 0 : a.follow_request_sent) || !1,
                    protected: (null === (t = s.legacy) || void 0 === t ? void 0 : t.protected) || !1,
                    following: (null === (l = s.legacy) || void 0 === l ? void 0 : l.following) || !1,
                    followed_by: (null === (i = s.legacy) || void 0 === i ? void 0 : i.followed_by) || !1,
                    super_following: s.super_following || void 0,
                    super_follow_eligible: s.super_follow_eligible || void 0,
                    super_followed_by: s.super_followed_by || void 0,
                    smart_blocking: s.smart_blocking || void 0,
                    blocking: (null === (r = s.legacy) || void 0 === r ? void 0 : r.blocking) || void 0,
                    highlightedLabel:
                      null !== (o = s.affiliates_highlighted_label) && void 0 !== o && o.label
                        ? { userLabelType: s.affiliates_highlighted_label.label.user_label_type || void 0 }
                        : void 0,
                  }
                : void 0
            },
            [s],
          )
        return c.a.createElement(
          u.a,
          i()({}, r, {
            isRelay: !0,
            user: m,
            userId: null !== (n = null == s ? void 0 : s.rest_id) && void 0 !== n ? n : '',
          }),
        )
      }
    },
    OUEC: function (e, n, a) {
      'use strict'
      var t = a('KEM+'),
        l = a.n(t),
        i = a('yiKp'),
        r = a.n(i),
        o = a('ezF+'),
        s =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          {
            loader: function () {
              return a.e(200).then(a.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: a('XBtf').a.Critical,
          }),
        c = o.e(s),
        u = a('QIgh'),
        m = a('8UdT')
      n.a = r()(r()({}, u.b), {}, l()({}, m.b.Community, c))
    },
    OwKm: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return C
      })
      var t = a('ddV6'),
        l = a.n(t),
        i = (a('1t7P'), a('jQ/y'), a('ho0z'), a('ERkP')),
        r = a.n(i),
        o = a('v6aA'),
        s = a('3XMw'),
        c = a.n(s),
        u = a('Nh1N'),
        m = a('MWbm'),
        d = a('Ig1G'),
        y = a('4zmP'),
        g = a('p+r5'),
        p = a('rHpw'),
        f = c.a.c66769a3,
        b = c.a.ef02695a,
        h = c.a.ef02695a,
        _ = c.a.c824202f,
        k = c.a.d32cf5e6,
        v = c.a.f8fa00c7,
        E = c.a.fc2a5c92,
        C = function (e) {
          var n = r.a.useContext(o.a).featureSwitches,
            a = n.getNumberValue('c9s_max_rule_name_length', 50),
            t = n.getNumberValue('c9s_max_rule_description_length', 160),
            i = e.description,
            s = e.errorText,
            c = e.name,
            p = e.onChange,
            C = r.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 3, a)
              },
              [a],
            ),
            S = r.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 0, t)
              },
              [t],
            ),
            I = r.a.useState(c),
            K = l()(I, 2),
            w = K[0],
            T = K[1],
            R = r.a.useState(C(c)),
            M = l()(R, 2),
            L = M[0],
            x = M[1],
            O = r.a.useState(void 0),
            A = l()(O, 2),
            j = A[0],
            P = A[1],
            N = r.a.useState(i),
            B = l()(N, 2),
            H = B[0],
            D = B[1],
            U = r.a.useState(S(i)),
            q = l()(U, 2),
            z = q[0],
            V = q[1],
            Q = r.a.useState(void 0),
            W = l()(Q, 2),
            J = W[0],
            X = W[1],
            G = r.a.useState('' !== c),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = r.a.useCallback(
              function (e) {
                var n = !1,
                  t = e.target.value
                C(t) && ((n = !0), P(h({ minCharacterCount: 3, maxCharacterCount: a }))),
                  $(!0),
                  x(n),
                  T(t),
                  p({ description: H, name: t, valid: !n && !z })
              },
              [a, H, p, z, C],
            ),
            ne = r.a.useCallback(
              function (e) {
                var n = !1,
                  a = e.target.value
                S(a) && ((n = !0), X(v({ maxCharacterCount: t }))),
                  V(n),
                  D(a),
                  p({ name: w, description: a, valid: !n && !L })
              },
              [t, w, p, L, S],
            ),
            ae = L && j ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: a }),
            te = z ? void 0 : k({ maxCharacterCount: t }),
            le = s
              ? r.a.createElement(
                  m.a,
                  { style: F.error },
                  r.a.createElement(y.a, { Icon: u.a, headline: E, text: s, type: 'danger' }),
                )
              : void 0
          return r.a.createElement(
            r.a.Fragment,
            null,
            le,
            r.a.createElement(g.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: j,
              helperText: ae,
              invalid: L && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: a,
              value: w,
            }),
            r.a.createElement(g.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: J,
              helperText: te,
              invalid: z,
              label: _,
              name: 'typedRuleDescription',
              onChange: ne,
              spellCheck: 'false',
              validLength: t,
              value: H,
            }),
          )
        },
        F = p.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    P4CI: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'FollowUserButtonRelay_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'follow_request_sent', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
            ],
            storageKey: null,
          },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_following', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_follow_eligible', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_followed_by', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'smart_blocking', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'HighlightedUserLabelResponse',
            kind: 'LinkedField',
            name: 'affiliates_highlighted_label',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'HighlightedUserLabel',
                kind: 'LinkedField',
                name: 'label',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'user_label_type', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: 'ClientExtension',
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '54d1810ed4d3744bd91e137b61b3642a',
      }
      n.default = t
    },
    PMbW: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
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
              selections: (t = [
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
              selections: t,
              storageKey: null,
            },
          ],
          type: 'CommunityJoinRequestActions',
          abstractKey: null,
        }
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (n.default = l)
    },
    PbB6: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
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
            argumentDefinitions: t,
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
      ;(i.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (n.default = i)
    },
    Phky: function (e, n, a) {
      'use strict'
      var t = a('IGGJ')
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e) {
          for (var n = [], a = (0, l.default)(e), t = 0; t < a.length; t++) {
            var i = a[t].screenName
            n.push(i)
          }
          return n
        })
      var l = t(a('GiKA'))
      e.exports = n.default
    },
    QRqA: function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        i = a('v6aA'),
        r = a('xZGM'),
        o = a('L47s'),
        s = a('3XMw'),
        c = a.n(s),
        u = a('MWbm'),
        m = a('X00g'),
        d = a('h0NW'),
        y = a('rHpw'),
        g = a('r9x5'),
        p = a('cOhU'),
        f = a('uCrx'),
        b = c.a.b60e4f77,
        h = c.a.f0fc827d,
        _ = c.a.c8e93b51,
        k = c.a.fc5c6913,
        v = c.a.ad211086,
        E = c.a.gf803ba1,
        C = c.a.e92fe01b,
        F = c.a.h3bb8068,
        S = c.a.a709f8f8,
        I = { viewType: 'welcome_education' },
        K = l.a.memo(function (e) {
          var n = e.forSingleCommunity,
            a = l.a.useContext(i.a).featureSwitches,
            t = l.a.useCallback(
              function () {
                var e = a.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
                  t = [w.decorationContainer, e && { color: m.a.getCommunityUIColor(e) }],
                  i = l.a.createElement(g.a, { style: t }),
                  r = l.a.createElement(p.a, { style: t }),
                  o = l.a.createElement(f.a, { style: t })
                return l.a.createElement(
                  u.a,
                  { style: w.infoItemsContainer },
                  l.a.createElement(d.a, {
                    containerStyle: w.itemContainer,
                    items: [
                      { label: k, description: v, decoration: i },
                      { label: E, description: C, decoration: r },
                      { label: F, description: S, decoration: o },
                    ],
                  }),
                )
              },
              [a, n],
            )
          return !1 === (null == n ? void 0 : n.canJoinCommunity)
            ? null
            : l.a.createElement(o.a, {
                Content: t,
                actionLabel: b,
                behavioralEventContext: I,
                flag: r.j,
                headline: h,
                subtext: _,
                withCloseButton: !n,
              })
        }),
        w = y.a.create(function (e) {
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
      n.a = K
    },
    R0yc: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m,
        d,
        y,
        g,
        p,
        f,
        b,
        h,
        _,
        k,
        v,
        E = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'PrimaryContentQuery',
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
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityActions',
                    kind: 'LinkedField',
                    name: 'actions',
                    plural: !1,
                    selections: [
                      (c = {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_action_result',
                        plural: !1,
                        selections: (s = [
                          (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                        ]),
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityAbout_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityInfo_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityCreationSummary_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityDetail_community' },
                  { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'PrimaryContentQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  i,
                  r,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityActions',
                    kind: 'LinkedField',
                    name: 'actions',
                    plural: !1,
                    selections: [
                      c,
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  (m = { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }),
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
                          o,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              u,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  (d = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'screen_name',
                                    storageKey: null,
                                  }),
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                ],
                                storageKey: null,
                              },
                              (y = {
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
                    selections: s,
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      i,
                      m,
                      (g = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                      u,
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
                  g,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'custom_banner_media',
                    plural: !1,
                    selections: (p = [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'media_info',
                        plural: !1,
                        selections: [
                          o,
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
                      u,
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
                    selections: p,
                    storageKey: null,
                  },
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
                                    name: 'profile_image_url_https',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              y,
                              u,
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (f = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
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
                                          o,
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
                                            selections: (h = [
                                              (b = {
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
                                              u,
                                              (_ = {
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
                                            selections: h,
                                            type: 'TimelineRichTextHashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              _,
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
                                              (v = {
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
                                                            selections: [d],
                                                            storageKey: null,
                                                          },
                                                          y,
                                                          i,
                                                          u,
                                                        ],
                                                        type: 'User',
                                                        abstractKey: null,
                                                      },
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          (k = {
                                                            alias: 'reason',
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'unavailable_reason',
                                                            storageKey: null,
                                                          }),
                                                          f,
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
                                            selections: [d, v],
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
                                  b,
                                ],
                                storageKey: null,
                              },
                              k,
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'invites_result',
                    plural: !1,
                    selections: [
                      o,
                      { kind: 'InlineFragment', selections: [u], type: 'CommunityInvites', abstractKey: null },
                    ],
                    storageKey: null,
                  },
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '8LnZso5PjE7dbFyiQzRdEQ',
            metadata: {},
            name: 'PrimaryContentQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(E.hash = '90ab0e63de690e9ae88ff94c2bcc61d6'), (n.default = E)
    },
    R5kW: function (e, n, a) {
      'use strict'
      a.d(n, 'b', function () {
        return d
      }),
        a.d(n, 'c', function () {
          return y
        }),
        a.d(n, 'a', function () {
          return f
        })
      var t = a('KEM+'),
        l = a.n(t),
        i = a('yiKp'),
        r = a.n(i),
        o = (a('yH/f'), a('oEOe')),
        s = a('kGix'),
        c = a('Ssj5'),
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
          var a
          return null !== (a = e[u].fetchStatus[n]) && void 0 !== a ? a : s.a.NONE
        },
        g = Object.freeze({ fetchStatus: {} })
      function p(e) {
        return e.meta.communityId
      }
      var f = function (e) {
        return function (n, a, t) {
          var l = t.api
          return o.b(n, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      c.a.register(
        l()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case m.REQUEST:
              return r()(r()({}, e), {}, { fetchStatus: r()(r()({}, e.fetchStatus), {}, l()({}, p(n), s.a.LOADING)) })
            case m.FAILURE:
              return r()(
                r()({}, e),
                {},
                { fetchStatus: r()(r()({}, e.fetchStatus), {}, l()({}, p(n), s.a.FAILED)), error: n.payload },
              )
            case m.SUCCESS:
              var a
              if (n.payload)
                return r()(
                  r()({}, e),
                  {},
                  ((a = {}),
                  l()(a, p(n), n.payload),
                  l()(a, 'fetchStatus', r()(r()({}, e.fetchStatus), {}, l()({}, p(n), s.a.LOADED))),
                  l()(a, 'error', null),
                  a),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    ROT1: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return k
      })
      var t = a('ddV6'),
        l = a.n(t),
        i = a('ERkP'),
        r = a.n(i),
        o = a('v6aA'),
        s = a('p+r5'),
        c = a('3XMw'),
        u = a.n(c),
        m = a('Ig1G'),
        d = a('nmVb'),
        y = a.n(d),
        g = a('Phky'),
        p = a.n(g),
        f = u.a.h3e55b40,
        b = u.a.dd71d9c9,
        h = u.a.cf65e56a,
        _ = u.a.d936eeca,
        k = function (e) {
          var n = e.autoFocus,
            a = void 0 !== n && n,
            t = e.communityName,
            i = e.onChange,
            c = r.a.useContext(o.a).featureSwitches,
            u = r.a.useState(!1),
            d = l()(u, 2),
            g = d[0],
            k = d[1],
            v = r.a.useState(void 0),
            E = l()(v, 2),
            C = E[0],
            F = E[1],
            S = c.getNumberValue('c9s_max_community_name_length', 30),
            I = r.a.useCallback(
              function (e) {
                var n = e.target.value,
                  a = !1
                Object(m.h)(n, 3, S)
                  ? (y()(n).length > 0 || p()(n).length > 0) && ((a = !0), F(_))
                  : ((a = !0), F(h({ minCharacterCount: 3, maxCharacterCount: S }))),
                  k(a),
                  i(n, a)
              },
              [S, i, F],
            ),
            K = b({ minCharacterCount: 3, maxCharacterCount: S })
          return r.a.createElement(s.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: a,
            calculateLength: m.b,
            errorText: C,
            helperText: K,
            invalid: g,
            label: f,
            name: 'typedCommunityName',
            onChange: I,
            spellCheck: 'false',
            validLength: S,
            value: t,
          })
        }
    },
    'S+H3': function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        i = a('ERkP'),
        r = a.n(i),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    S91Q: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'CommunitiesCreateButtonQuery',
            selections: [
              {
                alias: 'viewer',
                args: (t = [{ kind: 'Literal', name: 's', value: 23 }]),
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
                args: t,
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
      ;(l.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (n.default = l)
    },
    SNyS: function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        i = a('ERkP'),
        r = a.n(i),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              r.a.createElement('path', {
                d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    SyZD: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityRulesRouter', function () {
          return Y
        })
      var t = a('97Jx'),
        l = a.n(t),
        i = (a('KqXw'), a('WNMA'), a('2G9S'), a('ERkP')),
        r = a.n(i),
        o = a('v6aA'),
        s = a('Ig1G'),
        c = a('rxPX'),
        u = Object(c.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = a('3XMw'),
        d = a.n(m),
        y = a('yoO3'),
        g = a('5FtR'),
        p = a('ddV6'),
        f = a.n(p),
        b = (a('z84I'), a('/yvb')),
        h = a('eSoz'),
        _ = a('0KEI'),
        k = Object(c.a)()
          .propsFromActions(function () {
            return {
              reorderRules: h.c.reorderRules,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        v = a('rHpw'),
        E = v.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        C = a('mWs5'),
        F = a('PKbs'),
        S = d.a.b772cd65,
        I = d.a.gfca5254
      var K = k(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.explanation,
            l = e.history,
            i = e.reorderRules,
            o = n.id_str,
            s = n.rules,
            c = n.theme,
            u = r.a.useState(s),
            m = f()(u, 2),
            d = m[0],
            g = m[1],
            p = r.a.useCallback(
              function (e) {
                g(e)
              },
              [g],
            ),
            h = r.a.useCallback(
              function () {
                var e = a({}),
                  n = d.map(function (e) {
                    return e.rest_id
                  })
                i(o, { ruleIds: n })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, i, l, a],
            ),
            _ = r.a.createElement(b.a, { onPress: h, size: 'small', type: 'brandFilled' }, S)
          return r.a.createElement(
            y.a,
            null,
            r.a.createElement(
              C.a,
              { communityId: o, rightControl: _, screenType: 'primaryDetail', title: I },
              r.a.createElement(F.b, {
                badgeStyle: E.badgeStyle,
                displayType: F.a.Reorder,
                explanation: t,
                headerContainerStyle: E.headerContainerStyle,
                onReorder: p,
                ruleContainerStyle: E.ruleContainerStyle,
                rules: d,
                theme: c,
              }),
            ),
          )
        }),
        w = a('xZGM'),
        T = a('L47s'),
        R = a('MWbm'),
        M = a('t62R'),
        L = d.a.a9ba79c0,
        x = [d.a.h5482c79, d.a.d5033a7a, d.a.ee8c43af],
        O = d.a.j24c37b2,
        A = function () {
          return r.a.createElement(
            R.a,
            { style: P.content },
            x.map(function (e) {
              return r.a.createElement(M.b, { color: 'gray700', key: e, size: 'body', style: P.item }, e)
            }),
          )
        },
        j = function () {
          return r.a.createElement(T.a, { Content: A, actionLabel: O, flag: w.i, headline: L, subtext: '' })
        },
        P = v.a.create(function (e) {
          return {
            content: { marginTop: '-'.concat(e.spaces.space48), marginBottom: e.spaces.space32 },
            item: { paddingTop: e.spaces.space16 },
          }
        }),
        N = r.a.memo(j),
        B = a('mjJ+'),
        H = a('iY63'),
        D = a('ACHU'),
        U = a('zCf4'),
        q = d.a.gfca5254,
        z = d.a.d94edeb4,
        V = d.a.j560c8ea,
        Q = d.a.ab8089ea,
        W = d.a.h63a5c3b,
        J = r.a.createElement(H.a, null),
        X = r.a.createElement(D.a, null),
        G = { viewType: 'add' },
        Y = function (e) {
          var n = r.a.useContext(o.a).featureSwitches,
            a = n.isTrue('c9s_rule_creation_enabled'),
            t = n.isTrue('c9s_rule_editing_enabled'),
            i = n.isTrue('c9s_rule_reordering_enabled'),
            c = e.community,
            u = e.history,
            m = e.match,
            d = c.id_str,
            p = c.role,
            f = c.rules,
            h = c.theme,
            _ = m.url,
            k = p === s.a.Admin,
            v =
              a && k
                ? r.a.createElement(b.a, {
                    accessibilityLabel: V,
                    behavioralEventContext: G,
                    icon: J,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            S = f.length > 1,
            I =
              i && k && S
                ? r.a.createElement(b.a, {
                    accessibilityLabel: W,
                    icon: X,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var n = [{ text: Q, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return r.a.createElement(B.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: Z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            w = r.a.createElement(R.a, { style: Z.rightControlStyle }, v, I),
            T = { displayType: F.a.Default, getPivotLink: void 0 }
          return (
            k &&
              t &&
              ((T.displayType = F.a.Pivot),
              (T.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            r.a.createElement(
              U.d,
              null,
              r.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(_, '/') },
                r.a.createElement(
                  y.a,
                  null,
                  r.a.createElement(
                    C.a,
                    { communityId: d, rightControl: w, screenType: 'primaryDetail', title: q },
                    k ? r.a.createElement(N, null) : null,
                    r.a.createElement(
                      F.b,
                      l()(
                        {
                          badgeStyle: E.badgeStyle,
                          explanation: z,
                          headerContainerStyle: E.headerContainerStyle,
                          ruleContainerStyle: E.ruleContainerStyle,
                          rules: f,
                          theme: h,
                        },
                        T,
                      ),
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(_, '/reorder') },
                r.a.createElement(K, { community: c, explanation: z, history: u }),
              ),
              r.a.createElement(U.b, null, r.a.createElement(g.a, { to: ''.concat(_, '/') })),
            )
          )
        },
        Z = v.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      n.default = u(Y)
    },
    TcEn: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'getTweetButtonLocationState', function () {
          return _l
        }),
        a.d(n, 'CommunityScreen', function () {
          return kl
        })
      var t = a('yiKp'),
        l = a.n(t),
        i = (a('ho0z'), a('ERkP')),
        r = a.n(i),
        o = a('+Kfv'),
        s = a('es0u'),
        c = a('v6aA'),
        u = a('rxPX'),
        m = a('0KEI'),
        d = a('R5kW'),
        y = function (e, n) {
          var a = Object(d.b)(e, n.communityId) || {},
            t = a.pending_join_request_count,
            l = void 0 === t ? 0 : t,
            i = a.tweet_case_count
          return { pending_join_request_count: l, tweet_case_count: void 0 === i ? 0 : i }
        },
        g = function (e, n) {
          return Object(d.c)(e, n.communityId)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { count: y, fetchStatus: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: d.a,
            }
          }),
        f = a('kGix'),
        b = a('TnY3'),
        h = a('Ig1G'),
        _ = a('3XMw'),
        k = a.n(_),
        v = a('MWbm'),
        E = a('mjJ+'),
        C = a('/yvb'),
        F = a('Znyr'),
        S = a('rHpw'),
        I = a('zIWA'),
        K = a('SNyS'),
        w = a('Lsrn'),
        T = a('k/Ka'),
        R = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      R.metadata = { width: 24, height: 24 }
      var M = R,
        L = a('ACHU'),
        x = k.a.h6beb5fa,
        O = k.a.e3f04700,
        A = k.a.e2429f56,
        j = k.a.df15d5b7,
        P = k.a.e48fbb01,
        N = k.a.c8c6c4e9,
        B = k.a.h63a5c3b,
        H = k.a.dce5e1b3,
        D = k.a.c5d8c93d,
        U = { viewType: 'app_bar_button' }
      var q = S.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        z = Object(b.a)(function (e) {
          var n = e.canModerate,
            a = e.communityId,
            t = e.count,
            l = void 0 === t ? 0 : t,
            i = (e.history, e.userRole),
            o = r.a.useContext(c.a).featureSwitches,
            s = o.isTrue('c9s_settings_enabled'),
            u = o.isTrue('c9s_report_community_enabled'),
            m = o.isTrue('c9s_moderation_enabled') && n,
            d = s && n,
            y = u && !n,
            g = r.a.useCallback(
              function (e) {
                var n = []
                return (
                  m &&
                    n.push({
                      text: A,
                      subText: j({ count: l }),
                      Icon: I.a,
                      link: '/i/communities/'.concat(a, '/moderation/reported_tweets'),
                    }),
                  y &&
                    n.push({
                      text: P,
                      Icon: I.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  n.push({ text: N, Icon: K.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  r.a.createElement(E.a, { items: n, onCloseRequested: e })
                )
              },
              [a, l, m, y],
            ),
            p = n ? M : L.a,
            f = n ? (i === h.a.Admin ? H : D) : B
          return r.a.createElement(
            v.a,
            { style: q.root },
            r.a.createElement(C.a, {
              accessibilityLabel: f,
              behavioralEventContext: U,
              hoverLabel: { label: f },
              icon: r.a.createElement(p, null),
              link: d ? '/i/communities/'.concat(a, '/tools') : void 0,
              renderMenu: d ? void 0 : g,
              size: 'large',
              type: 'primaryText',
            }),
            m && l > 0
              ? r.a.createElement(F.a, {
                  count: l,
                  style: q.menuControlBadge,
                  truncatedCountFormatter: x,
                  unreadCountLabel: O,
                  withBorder: !1,
                })
              : null,
          )
        })
      var V,
        Q,
        W,
        J,
        X = p(function (e) {
          var n = r.a.useContext(c.a).featureSwitches.isTrue('c9s_request_to_join_enabled'),
            a = e.canModerate,
            t = e.communityId,
            l = e.count,
            i = e.createLocalApiErrorHandler,
            o = e.fetchCommunityModerationData,
            s = e.fetchStatus,
            u = e.userRole,
            m = l.pending_join_request_count,
            d = l.tweet_case_count
          return (
            r.a.useEffect(
              function () {
                s === f.a.NONE && a && o(t).catch(i())
              },
              [i, o, s, t, a],
            ),
            r.a.createElement(z, { canModerate: a, communityId: t, count: n ? m + d : d, userRole: u })
          )
        }),
        G = a('m3Bd'),
        Y = a.n(G),
        Z = a('1Idg'),
        $ = a('eSoz'),
        ee = a('G6rE'),
        ne = a('o3oN'),
        ae = a('/ekK'),
        te = ['loggedInUser'],
        le = function (e, n) {
          var a = Z.c(e, n)
          return !a || Object(ae.a)(e, a, 'mod_education_flag')
        },
        ie = Object(u.a)()
          .propsFromState(function () {
            return {
              communityId: Z.c,
              community: Z.a,
              communityTheme: Z.f,
              fetchStatus: Z.b,
              hasShownModEducation: le,
              membershipsFetchStatus: ne.d,
              isCommunityMember: Z.g,
              loggedInUser: ee.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              a = Y()(e, te)
            return l()({ screenName: n ? n.screen_name : void 0 }, a)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: $.c.fetchOneIfNeeded,
              fetchCommunityMemberships: ne.a,
              setFlag: ae.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        re = a('feu+'),
        oe = (a('yH/f'), a('WpDa')),
        se = a('ZNT5'),
        ce = (a('1t7P'), a('jQ/y'), a('jV+4')),
        ue = a('t62R'),
        me = (a('enFi'), a('jAXQ')),
        de = a.n(me),
        ye = function (e) {
          var n,
            t = de()(void 0 !== V ? V : (V = a('pChJ')), e.community),
            l = r.a.useMemo(
              function () {
                return new Date(t.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [t.created_at],
            ),
            i = r.a.useMemo(
              function () {
                var e, n, a
                if ('User' === (null === (e = t.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return r.a.createElement(ce.a, {
                    isVerified:
                      (null === (n = t.creator_results.result.legacy) || void 0 === n ? void 0 : n.verified) || !1,
                    screenName:
                      (null === (a = t.creator_results.result.legacy) || void 0 === a ? void 0 : a.screen_name) || '',
                    withLink: !0,
                  })
              },
              [t],
            )
          return t.creator_results &&
            'User' === (null === (n = t.creator_results.result) || void 0 === n ? void 0 : n.__typename)
            ? r.a.createElement(
                ue.b,
                { color: 'gray700' },
                r.a.createElement(k.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, i),
              )
            : null
        },
        ge = r.a.memo(ye),
        pe = a('s8G+'),
        fe = a('6vad'),
        be = a('csss'),
        he = a('h0NW'),
        _e = a('0yYu'),
        ke = a('cOhU'),
        ve = a('DlMI'),
        Ee = a('Lxak'),
        Ce = a('a5gf'),
        Fe = r.a.createElement(ue.b, { weight: 'bold' }),
        Se = k.a.af7c11a9,
        Ie = k.a.db1b9462,
        Ke = k.a.ea49402d,
        we = r.a.createElement(k.a.I18NFormatMessage, { $i18n: 'he99cc29' }, r.a.cloneElement(Fe, null, k.a.gedb877c)),
        Te = k.a.fcef2921,
        Re = k.a.c93dd2c8,
        Me = function (e) {
          var n = de()(void 0 !== Q ? Q : (Q = a('1rMX')), e.community),
            t = Object(pe.a)('c9s_request_to_join_enabled'),
            l = r.a.useMemo(
              function () {
                var e,
                  a = function (e) {
                    return r.a.createElement(ue.b, null, e)
                  },
                  l = r.a.createElement(ge, { community: n }),
                  i = n.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: xe, label: a(Ie) },
                    CommunityOpenMembershipEducation: { decoration: Oe, label: we, description: Te },
                    CommunityRestrictedMembershipEducation: { decoration: je, label: we, description: Re },
                    CommunityVisibilityEducation: { decoration: Oe, label: a(Ke) },
                    OriginationAttributionEducation: { decoration: Ae, label: l },
                  },
                  s = [o.CommunityMemberAllowedActions]
                return (
                  t
                    ? ('CommunityRestrictedMembershipSettings' === i &&
                        s.push(o.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === i && s.push(o.CommunityOpenMembershipEducation))
                    : s.push(o.CommunityVisibilityEducation),
                  'User' === (null === (e = n.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    s.push(o.OriginationAttributionEducation),
                  s
                )
              },
              [n, t],
            )
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(fe.b, { text: Se }),
            Object(h.g)(n.role) && n.description ? r.a.createElement(be.a, { label: n.description }) : null,
            r.a.createElement(he.a, { containerStyle: Le.containerStyle, items: l }),
            r.a.createElement(_e.a, null),
          )
        },
        Le = S.a.create(function (e) {
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
        xe = r.a.createElement(ke.a, { style: Le.icon }),
        Oe = r.a.createElement(ve.a, { style: Le.icon }),
        Ae = r.a.createElement(Ee.a, { style: Le.icon }),
        je = r.a.createElement(Ce.a, { style: Le.icon }),
        Pe = r.a.memo(Me),
        Ne = a('fTQJ'),
        Be = (a('z84I'), a('PKbs')),
        He = a('1Xyu'),
        De = a('rC8y'),
        Ue = void 0 !== W ? W : (W = a('BX8b')),
        qe = k.a.gfca5254,
        ze = k.a.ffd9cfe6,
        Ve = function (e) {
          var n = e.community,
            a = de()(Ue, n),
            t = a.rules,
            l = Object(He.a)(a),
            i = r.a.useMemo(
              function () {
                return t.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [t],
            )
          return 0 === t.length
            ? null
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(fe.b, { text: qe }),
                r.a.createElement(Be.b, {
                  badgeStyle: Qe.badgeStyle,
                  headerContainerStyle: [Qe.containerStyle, Qe.headingContainerStyle],
                  headerExplanationStyle: Qe.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: Qe.ruleContainerStyle,
                  rules: i,
                  theme: l,
                }),
                t.length > 5
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(De.a, { link: '/i/communities/'.concat(a.rest_id, '/rules'), text: ze }),
                      ' ',
                      r.a.createElement(_e.a, null),
                    )
                  : null,
              )
        },
        Qe = S.a.create(function (e) {
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
        We = r.a.memo(Ve),
        Je = k.a.i9028824,
        Xe = k.a.cc683fb9,
        Ge = function (e) {
          var n = de()(void 0 !== J ? J : (J = a('+BRr')), e.community),
            t = r.a.useMemo(
              function () {
                return (
                  (e = n.rest_id),
                  Object(se.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (n) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: oe.a,
                  })
                )
                var e
              },
              [n.rest_id],
            )
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(Pe, { community: n }),
            r.a.createElement(We, { community: n }),
            r.a.createElement(Ne.a, { loadingAccessibilityLabel: Je, module: t, title: Xe }),
          )
        },
        Ye = r.a.memo(Ge),
        Ze = (a('LW0h'), a('7x/C'), a('tVqn'), a('uFXj'), a('97Jx')),
        $e = a.n(Ze),
        en = a('ddV6'),
        nn = a.n(en),
        an = (a('7xRU'), a('KqXw'), a('WNMA'), a('egQk')),
        tn = a('li/m'),
        ln = function (e, n) {
          var a
          return (null === (a = n.location.state) || void 0 === a ? void 0 : a.community) || Z.a(e, n)
        },
        rn = Object(u.a)()
          .propsFromState(function () {
            return { community: ln, fetchStatus: Z.b, isCommunityMember: Z.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: tn.b,
              requestToJoin: $.c.requestToJoin,
              fetchCommunityIfNeeded: $.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        on = a('MDbM'),
        sn = a('jHSc'),
        cn = a('5FtR'),
        un = k.a.h4fbfa57,
        mn = k.a.ea8cfb1d,
        dn = k.a.dc1b14a1,
        yn = { viewType: 'community' },
        gn = rn(function (e) {
          var n,
            a = e.community,
            t = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            i = e.fetchStatus,
            s = e.isCommunityMember,
            c = e.join,
            u = e.match,
            m = e.onCommunityMembershipChange,
            d = e.onDismiss,
            y = e.requestToJoin,
            g = u.params.communityId,
            p =
              'ViewerRequestRequired' ===
              (null == a || null === (n = a.actions.join_action_result) || void 0 === n ? void 0 : n.reason)
          r.a.useEffect(function () {
            g && !a && i !== on.a.LOADED && l(g).catch(t())
          })
          var f = r.a.useCallback(function (e) {
              return r.a.createElement(ue.b, { size: 'title4', weight: 'bold' }, dn({ communityName: e }))
            }, []),
            b = p ? mn : un,
            h = r.a.useCallback(
              function () {
                if (a) {
                  var e = a.id_str
                  if (p) return void y(e).then(d).catch(t())
                  c(e).then(m).then(d).catch(t())
                }
              },
              [a, t, c, m, p, d, y],
            ),
            _ = r.a.useCallback(
              function () {
                return r.a.createElement(C.a, { onPress: h, size: 'small', type: 'brandFilled' }, b)
              },
              [b, h],
            )
          if (a) {
            var k = a.name,
              v = a.rules,
              E = a.theme
            return v && v.length && !s
              ? r.a.createElement(
                  o.a,
                  { behavioralEventContext: yn },
                  r.a.createElement(
                    sn.b,
                    {
                      behavioralEventViewType: 'rules',
                      onBackClick: d,
                      rightControl: _(),
                      title: Object(an.a)({ communityName: k }),
                    },
                    r.a.createElement(Be.b, {
                      badgeStyle: pn.badgeStyle,
                      headerContainerStyle: pn.containerStyle,
                      headerExplanationStyle: pn.headerExplanationStyle,
                      heading: f(k),
                      rules: v,
                      theme: E,
                    }),
                  ),
                )
              : r.a.createElement(cn.a, { to: '/i/communities/'.concat(a.id_str) })
          }
          return i === on.a.LOADED ? r.a.createElement(cn.a, { to: '/' }) : null
        }),
        pn = S.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space16 },
            headerExplanationStyle: { marginTop: e.spaces.space8 },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        fn = ['loggedInUser'],
        bn = Object(u.a)()
          .propsFromState(function () {
            return { community: Z.a, loggedInUser: ee.e.selectLoggedInUser, joinActionResultType: Z.h }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              a = Y()(e, fn)
            return l()({ isProtectedUser: null == n ? void 0 : n.protected }, a)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: tn.b,
              requestToJoin: $.c.requestToJoin,
              leave: tn.c,
            }
          }),
        hn = (a('ssJ/'), a('X8FW')),
        _n = a('cHvH'),
        kn = a('sgih'),
        vn = r.a.memo(function (e) {
          var n = Object(_n.b)().windowWidth,
            a = e.children
          return n > S.a.theme.breakpoints.medium
            ? r.a.createElement(hn.b, { modalSize: hn.a.fixed }, a)
            : r.a.createElement(kn.a, { type: 'full' }, a)
        }),
        En = a('CGyZ'),
        Cn = k.a.fad95333,
        Fn = function (e) {
          var n = e.offendingRule
          return r.a.createElement(
            v.a,
            null,
            n
              ? r.a.createElement(
                  v.a,
                  { style: Sn.offendingRule },
                  (function (e) {
                    return r.a.createElement(
                      k.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      r.a.createElement(ue.b, { weight: 'bold' }, k.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(n),
                )
              : null,
            r.a.createElement(ue.b, null, Cn),
          )
        },
        Sn = S.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        In = k.a.hafa07f2,
        Kn = k.a.fa94c9da,
        wn = k.a.c15bee31,
        Tn = k.a.i859676b,
        Rn = r.a.createElement(
          k.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          r.a.createElement(ue.b, { link: '/settings/audience_and_tagging' }, k.a.e77dfaf0),
        ),
        Mn = k.a.fc2a5c92,
        Ln = k.a.bf7bdb60,
        xn = k.a.h27d695f,
        On = k.a.b02360f5,
        An = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        jn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        Pn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Nn,
        Bn,
        Hn = a('zCf4'),
        Dn = ['community', 'communityId', 'match'],
        Un = k.a.e6057013,
        qn = k.a.b533478f,
        zn = { follow: k.a.b171d7c4, following: k.a.aa7ae3f6, unfollow: k.a.bb1d57b6 },
        Vn = k.a.j24c37b2,
        Qn = function (e) {
          var n = r.a.useState(void 0),
            a = nn()(n, 2),
            t = a[0],
            i = a[1],
            o = r.a.useState(!1),
            s = nn()(o, 2),
            c = s[0],
            u = s[1],
            m = { history: Object(Hn.f)(), location: Object(Hn.g)(), match: Object(Hn.i)() },
            d = Object(pe.a)('c9s_request_to_join_enabled'),
            y = e.community,
            g = e.createLocalApiErrorHandler,
            p = e.isProtectedUser,
            f = e.join,
            b = e.leave,
            _ = e.onCommunityMembershipChange,
            k = e.requestToJoin,
            E = y.actions,
            F = E.join_action_result,
            S = E.leave_action_result,
            I = y.id_str,
            K = y.name,
            w = y.role,
            T = Object(h.g)(w),
            R = F.reason === Pn.ViewerJoinRequestRequired && d,
            M = F.reason === Pn.ViewerRequestPending && d,
            L = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !T } },
            x = r.a.useCallback(
              function () {
                var e = y.rules,
                  n = y.viewerViolatedRule,
                  a = (function (e, n, a, t) {
                    var l = e.__typename,
                      i = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      s = function (e) {
                        return { canAction: !1, message: e }
                      },
                      c = s({ headline: Mn, text: Ln })
                    switch (l) {
                      case An.joinAvailable:
                        return o()
                      case An.joinUnavailable:
                        switch (i) {
                          case Pn.ViewerIsRemoved:
                            return s({
                              headline: wn,
                              text: r.a.createElement(Fn, { offendingRule: null == a ? void 0 : a.name }),
                            })
                          case Pn.ViewerNotInvited:
                            return s({ headline: In, text: Kn })
                          case Pn.ViewerIsProtected:
                            return n ? s({ headline: Tn, text: Rn }) : o()
                          case Pn.ViewerJoinRequestRequired:
                            return t ? o() : c
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(F, p, n, d),
                  t = a.canAction,
                  l = a.message
                !t && l && i(l), t && (e && e.length > 0 ? u(!0) : R ? k(I).catch(g({})) : f(I).then(_).catch(g({})))
              },
              [y, I, g, p, d, f, R, F, k, _],
            ),
            O = r.a.useCallback(
              function () {
                var e = (function (e) {
                    var n,
                      a = e.__typename,
                      t = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      i = l({ headline: Mn, text: Ln })
                    switch (a) {
                      case An.leaveAvailable:
                        return { canAction: !0, message: n }
                      case An.leaveUnavailable:
                        switch (t) {
                          case jn.ViewerIsSoleAdmin:
                            return l({ headline: xn, text: On })
                          default:
                            return i
                        }
                      default:
                        return i
                    }
                  })(S),
                  n = e.canAction,
                  a = e.message
                !n && a && i(a), n && b(I).then(_).catch(g({}))
              },
              [I, g, b, S, _],
            ),
            A = r.a.useCallback(function () {
              i(void 0)
            }, []),
            j = r.a.useCallback(function () {
              u(!1)
            }, []),
            P = r.a.useMemo(
              function () {
                return R ? l()(l()({}, zn), {}, { follow: Un }) : zn
              },
              [R],
            )
          return r.a.createElement(
            v.a,
            { style: Wn.button },
            c
              ? r.a.createElement(
                  vn,
                  null,
                  r.a.createElement(gn, $e()({ communityId: I, onCommunityMembershipChange: _, onDismiss: j }, m)),
                )
              : null,
            M
              ? r.a.createElement(C.a, { disabled: !0, type: 'onMediaOutlined' }, qn)
              : r.a.createElement(En.a, {
                  behavioralEventContext: L,
                  buttonText: P,
                  isFollowing: T,
                  name: K,
                  onFollow: x,
                  onUnfollow: O,
                  type: 'community',
                }),
            t
              ? r.a.createElement(re.a, {
                  actionLabel: Vn,
                  graphicDisplayMode: 'none',
                  headline: t.headline,
                  onAction: A,
                  onClose: A,
                  subtext: t.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        Wn = S.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Jn = bn(function (e) {
          var n = e.community,
            a = (e.communityId, e.match, Y()(e, Dn))
          return n ? r.a.createElement(Qn, $e()({ community: n }, a)) : null
        }),
        Xn = a('YeIG'),
        Gn = a('MjKK'),
        Yn = a('TIdA'),
        Zn = a('A91F'),
        $n = a('9Xij'),
        ea = void 0 !== Nn ? Nn : (Nn = a('fK4d')),
        na = function (e) {
          var n = de()(ea, e.community),
            a = Object(Gn.a)(n),
            t = S.a.theme.aspectRatios.communityBanner
          return a && !Object(Xn.a)(a)
            ? r.a.createElement(
                v.a,
                null,
                r.a.createElement(Yn.a, {
                  accessibilityLabel: '',
                  aspectMode: Zn.a.exact(t),
                  backgroundColor: S.a.theme.colors.gray300,
                  image: a,
                }),
              )
            : r.a.createElement($n.a, { ratio: t }, r.a.createElement(v.a, { style: aa.placeholderImageContainer }))
        },
        aa = S.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        ta = r.a.memo(na),
        la = a('K1iM'),
        ia = a.n(la),
        ra = (a('2G9S'), a('X00g')),
        oa = a('n4Eu'),
        sa = { red: 0, green: 0, blue: 0 },
        ca = '10px',
        ua = S.a.create(function (e) {
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
        ma = function (e) {
          var n = e.children,
            t = e.community,
            l = de()(void 0 !== Bn ? Bn : (Bn = a('OBBW')), t),
            i = Object(He.a)(l),
            o = Object(Gn.a)(l).palette,
            s = []
          if (o) {
            var c,
              u = ia()(o)
            try {
              for (u.s(); !(c = u.n()).done; ) {
                var m = c.value
                s.push({ percentage: m.percentage, rgb: { blue: m.rgb.blue, green: m.rgb.green, red: m.rgb.red } })
              }
            } catch (y) {
              u.e(y)
            } finally {
              u.f()
            }
          }
          var d = Object(pe.a)('c9s_ui_colors_enabled_rweb')
          return r.a.createElement(
            v.a,
            null,
            r.a.createElement(v.a, { style: ua.descriptionContainer }, n),
            r.a.createElement(v.a, { style: [S.a.absoluteFill, ua.backgroundColorWhite] }),
            r.a.createElement(v.a, {
              style: [
                S.a.absoluteFill,
                ua.backgroundColor,
                (function (e, n) {
                  if (d) return ra.a.getCommunityGradientStyle(n, ca)
                  var a = e && oa.a.get(e),
                    t = a ? (null == a ? void 0 : a.rgb) : sa,
                    l = 'rgba('.concat(t.red, ',').concat(t.green, ',').concat(t.blue, ', 0.9)'),
                    i = 'rgba('.concat(t.red, ',').concat(t.green, ',').concat(t.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(ca, ', ')
                      .concat(i, ' ')
                      .concat(ca, ' 100%)'),
                  }
                })(s, i),
              ],
            }),
          )
        },
        da = a('ogGF'),
        ya = a('CaKu'),
        ga = a('1YZw'),
        pa = Object(u.a)().propsFromActions(function () {
          return { addToast: ga.b }
        }),
        fa = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              r.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      fa.metadata = { width: 24, height: 24 }
      var ba,
        ha,
        _a,
        ka,
        va,
        Ea = fa,
        Ca = a('I/9y'),
        Fa = a('pwey'),
        Sa = k.a.bec3b8f9,
        Ia = { viewType: 'share_community' },
        Ka = k.a.f88553c8,
        wa = { viewType: 'copy_link' },
        Ta = { viewType: 'invite_members' },
        Ra = k.a.b139b549,
        Ma = k.a.e05c00b4,
        La = r.a.createElement(Ea, null),
        xa = S.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        Oa = pa(function (e) {
          var n = de()(void 0 !== ba ? ba : (ba = a('X/n0')), e.community),
            t = e.addToast,
            l = n.rest_id,
            i = n.role,
            o = Object(h.g)(i),
            s = r.a.useCallback(
              function (e) {
                ya.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), t({ text: Ka })
              },
              [t, l],
            ),
            c = r.a.useMemo(
              function () {
                return function (e) {
                  var n = []
                  return (
                    n.push({ behavioralEventContext: wa, text: Ma, Icon: Ca.a, onClick: s }),
                    o &&
                      n.push({
                        behavioralEventContext: Ta,
                        text: Ra,
                        Icon: Fa.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    r.a.createElement(E.a, { items: n, onCloseRequested: e })
                  )
                }
              },
              [o, l, s],
            )
          return r.a.createElement(C.a, {
            accessibilityLabel: Sa,
            behavioralEventContext: Ia,
            icon: La,
            renderMenu: c,
            style: xa.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        Aa = r.a.memo(Oa),
        ja = k.a.hb9400db,
        Pa = function (e) {
          var n = e.community,
            t = de()(void 0 !== ha ? ha : (ha = a('ldL/')), n),
            l = t.description,
            i = t.role,
            o = r.a.useState(!1),
            s = nn()(o, 2),
            c = s[0],
            u = s[1],
            m = r.a.useState(!1),
            d = nn()(m, 2),
            y = d[0],
            g = d[1],
            p = r.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), u(!c)
              },
              [c],
            )
          return !l || Object(h.g)(i)
            ? null
            : r.a.createElement(
                v.a,
                { style: Na.description },
                r.a.createElement(ue.b, { color: 'white', getTextOverflow: g, numberOfLines: c ? void 0 : 2 }, l),
                !c && y ? r.a.createElement(ue.b, { color: 'white', onPress: p, weight: 'bold' }, ja) : null,
              )
        },
        Na = S.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Ba = r.a.memo(Pa),
        Ha = a('ja7Y'),
        Da = a('MtXG'),
        Ua = k.a.d58baa7e,
        qa = function (e) {
          var n = e.community,
            t = de()(void 0 !== _a ? _a : (_a = a('WuQQ')), n).member_count,
            l = void 0 === t ? 0 : t,
            i = Ua(l)
          return r.a.createElement(
            Da.a.Group,
            null,
            r.a.createElement(
              Da.a,
              { onMedia: !0 },
              r.a.createElement(
                ue.b,
                { color: 'white' },
                r.a.createElement(
                  k.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  r.a.createElement(Da.a.Value, null, k.a.ibd0106d({ formattedCount: i })),
                  r.a.createElement(Da.a.Label, null, k.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        za = a('cm6r'),
        Va = a('I4+6').a.generate({
          backgroundColor: S.a.theme.colors.transparent,
          color: S.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Qa = S.a.create(function (e) {
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
        Wa = function (e) {
          var n = e.community,
            t = de()(void 0 !== ka ? ka : (ka = a('weg/')), n),
            l = t.rest_id
          return r.a.createElement(
            za.a,
            { interactiveStyles: Va, link: '/i/communities/'.concat(l, '/members'), style: Qa.membersContainer },
            r.a.createElement(Ha.a, { community: t, style: Qa.rightSpace }),
            r.a.createElement(qa, { community: t }),
          )
        },
        Ja = a('yoO3'),
        Xa = a('k/OQ'),
        Ga = k.a.a0e3ece4,
        Ya = k.a.ha8209bb,
        Za = k.a.d601fc2f,
        $a = k.a.b721eb37,
        et = { viewType: 'description' },
        nt = { viewType: 'facepiles_with_count' },
        at = function (e) {
          var n = de()(void 0 !== va ? va : (va = a('+BRT')), e.community),
            t = n.rest_id,
            l = Object(pe.a)('c9s_participation_enabled'),
            i = Object(pe.a)('c9s_timelines_ranking_enabled'),
            s = Object(pe.a)('c9s_share_community_enabled'),
            c = Object(Hn.i)(),
            u = r.a.useMemo(
              function () {
                var e = [
                  { to: '/i/communities/'.concat(t), label: Ya, key: Ya },
                  { to: '/i/communities/'.concat(t, '/latest'), label: Za, key: Za },
                  { to: '/i/communities/'.concat(t, '/about'), label: $a, key: $a },
                ]
                return r.a.createElement(Xa.a, {
                  accessibilityLabel: Ga,
                  links: i
                    ? e
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== Za
                        })
                      })(e),
                })
              },
              [t, i],
            )
          return r.a.createElement(
            Ja.a,
            { behavioralEventViewType: 'timeline' },
            r.a.createElement(
              v.a,
              { style: tt.container },
              r.a.createElement(
                v.a,
                null,
                r.a.createElement(ta, { community: n }),
                r.a.createElement(
                  o.a,
                  { behavioralEventContext: et },
                  r.a.createElement(
                    ma,
                    { community: n },
                    r.a.createElement(
                      ue.b,
                      { color: 'white', size: 'title2', style: tt.name, weight: 'bold' },
                      n.name.trim(),
                    ),
                    r.a.createElement(Ba, { community: n }),
                    r.a.createElement(
                      o.a,
                      { behavioralEventContext: nt },
                      r.a.createElement(
                        v.a,
                        { style: tt.bottomContainer },
                        r.a.createElement(Wa, { community: n }),
                        r.a.createElement(
                          v.a,
                          { style: tt.buttons },
                          s
                            ? r.a.createElement(Aa, { community: n })
                            : r.a.createElement(da.a, {
                                community: n,
                                style: tt.inviteButton,
                                type: 'onMediaOutlined',
                              }),
                          l
                            ? r.a.createElement(Jn, {
                                communityId: t,
                                match: c,
                                onCommunityMembershipChange: e.onCommunityMembershipChange,
                              })
                            : null,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              u,
            ),
          )
        },
        tt = S.a.create(function (e) {
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
        lt = r.a.memo(at),
        it = a('/de5')
      function rt() {
        var e = Object(Hn.f)(),
          n = Object(Hn.g)(),
          a = Object(Hn.i)()
        return r.a.createElement(it.b, { history: e, location: n, match: a })
      }
      var ot = a('FIs5'),
        st = a('EUHl'),
        ct = a('7BdX'),
        ut = k.a.c18e3a3e,
        mt = k.a.d68146c0,
        dt = k.a.h5245afa,
        yt = k.a.f05dbeff,
        gt = function (e) {
          var n = e.module,
            a = r.a.useCallback(function () {
              return r.a.createElement(ot.a, { buttonType: 'brandOutlined', header: ut, message: mt })
            }, [])
          return r.a.createElement(
            Ja.a,
            { behavioralEventViewType: 'tweets' },
            r.a.createElement(Ne.a, {
              loadingAccessibilityLabel: yt,
              module: n,
              newTweetsPillMode: st.a.CLIENT,
              prerollDisplayLocation: ct.c.OTHER,
              refreshControl: null,
              renderEmptyState: a,
              title: dt,
            }),
          )
        },
        pt = a('mw9i'),
        ft =
          (a('MvUL'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(T.a)(
              'svg',
              l()(
                l()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [w.a.root, e.style],
                  viewBox: '0 0 24 24',
                },
              ),
              r.a.createElement(
                'g',
                null,
                r.a.createElement('path', {
                  d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
                }),
                r.a.createElement('path', {
                  d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
                }),
              ),
            )
          })
      ft.metadata = { width: 24, height: 24 }
      var bt,
        ht = ft,
        _t = a('wpLu'),
        kt = k.a.bf359e0d,
        vt = k.a.e8fcdd3a,
        Et = k.a.b37d580e,
        Ct = k.a.cafca4b2,
        Ft = k.a.ea3b38fa,
        St = k.a.jd667130,
        It = k.a.ca7eeabf,
        Kt = k.a.acae4034,
        wt = k.a.e2186ee2,
        Tt = k.a.j24c37b2,
        Rt = function (e) {
          var n = de()(void 0 !== bt ? bt : (bt = a('2rr8')), e.community),
            t = Object(Hn.f)(),
            l = r.a.useCallback(
              function () {
                t.replace('/i/communities/'.concat(n.rest_id, '/'))
              },
              [t, n.rest_id],
            ),
            i = r.a.createElement(
              v.a,
              { accessibilityRole: 'list', style: Mt.rulesContainer },
              n.rules.map(function (e) {
                return r.a.createElement(
                  ue.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Mt.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === n.access,
            s = o ? Ft : Et,
            c = o ? St : Ct
          return r.a.createElement(
            re.a,
            {
              actionLabel: Tt,
              graphicDisplayMode: 'none',
              headline: kt,
              isFullHeightOnMobile: !0,
              onAction: l,
              subtext: vt,
            },
            r.a.createElement(
              v.a,
              { style: Mt.infoItemsContainer },
              r.a.createElement(he.a, {
                containerStyle: Mt.itemContainer,
                items: [
                  { label: s, description: c, decoration: r.a.createElement(ht, { style: Mt.decorationContainer }) },
                  { label: It, decoration: r.a.createElement(_t.a, { style: Mt.decorationContainer }), description: i },
                  { label: Kt, description: wt, decoration: r.a.createElement(M, { style: Mt.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        Mt = S.a.create(function (e) {
          return {
            infoItemsContainer: { paddingBottom: e.spaces.space32 },
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
        Lt = r.a.memo(Rt),
        xt = a('dwig'),
        Ot = a('0+qk'),
        At = a('L/9f'),
        jt = a('3G7m'),
        Pt = a('7JQg'),
        Nt =
          (a('FtFR'),
          a('hBvt'),
          Object(u.a)()
            .propsFromState(function () {
              return { flags: ae.b }
            })
            .propsFromActions(function () {
              return { setFlag: ae.c }
            })),
        Bt = a('hOZg'),
        Ht = a('WtWS'),
        Dt = a('0ULw'),
        Ut = k.a.c66b37f9,
        qt = k.a.g2768d0e,
        zt = k.a.b192b58b,
        Vt = k.a.gd30278f,
        Qt = k.a.cbdddb09,
        Wt = k.a.h5890b1a,
        Jt = [
          {
            flag: 'setup_clicked_rules',
            title: k.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: k.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: k.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: k.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(Vt, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        Xt = r.a.memo(function (e) {
          var n = e.communityId,
            a = e.flags,
            t = e.setFlag,
            l = r.a.useContext(c.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            i = Object(Hn.f)(),
            o = r.a.useCallback(
              function () {
                t(n, 'setup_show_checklist', !1)
              },
              [n, t],
            )
          if (!a.setup_show_checklist || !l) return null
          var s = function (e) {
              t(n, e.flag, !0).then(function () {
                i.push(e.link(n))
              })
            },
            u = function (e, n) {
              13 === n.keyCode && s(e)
            }
          return r.a.createElement(
            v.a,
            { style: Gt.wrapper },
            r.a.createElement(
              v.a,
              { style: Gt.header },
              r.a.createElement(ue.b, { size: 'title3', weight: 'bold' }, Ut),
              r.a.createElement(C.a, {
                accessibilityLabel: zt,
                icon: r.a.createElement(Bt.a, { style: Gt.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: Gt.dismiss,
                type: 'brandText',
              }),
            ),
            r.a.createElement(ue.b, { style: Gt.subtext }, qt),
            r.a.createElement(
              v.a,
              { accessibilityRole: 'list', style: Gt.list },
              Jt.map(function (e) {
                var n = Boolean(a[e.flag])
                return r.a.createElement(
                  v.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !n,
                    key: e.flag,
                    onClick: n ? void 0 : s.bind(null, e),
                    onKeyPress: n ? void 0 : u.bind(null, e),
                    style: [Gt.entry, n ? Gt.completedEntry : Gt.uncompletedEntry],
                  },
                  r.a.createElement(ue.b, { weight: 'bold' }, e.title),
                  n
                    ? r.a.createElement(Ht.a, { accessibilityLabel: Qt, style: Gt.iconCompleted })
                    : r.a.createElement(Dt.a, { accessibilityLabel: Wt, style: Gt.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        Gt = S.a.create(function (e) {
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
        Yt = Nt(Xt),
        Zt = (a('jQ3i'), a('x4t0'), a('8Lfv')),
        $t = a('uDfI'),
        el = a('LI/a')
      function nl(e) {
        var n = Object($t.c)(),
          a = Object(m.useCreateLocalApiErrorHandler)('COMMUNITIES_TWEETS'),
          t = Object(pe.a)('c9s_timelines_ranking_enabled'),
          l = r.a.useMemo(
            function () {
              return Object(el.a)(e)
            },
            [e],
          ),
          i = r.a.useMemo(
            function () {
              return t ? Object(el.b)(e) : l
            },
            [l, t, e],
          ),
          o = (function (e) {
            var n,
              a = 'PUSH' === Object(Hn.f)().action,
              t = Object(Hn.g)().pathname,
              l = r.a.useRef(),
              i =
                (null == t ? void 0 : t.includes(e)) &&
                (null === (n = l.current) || void 0 === n ? void 0 : n.includes(e))
            return (l.current = t), a && !i
          })(e),
          s = r.a.useCallback(
            function () {
              t && n(Object(Zt.a)(i)).catch(a({})), n(Object(Zt.a)(l)).catch(a({}))
            },
            [t, i, l, a, n],
          )
        return (
          r.a.useEffect(
            function () {
              o && s()
            },
            [o, s],
          ),
          r.a.useMemo(
            function () {
              return { homeModule: i, latestModule: l, refreshModules: s }
            },
            [i, l, s],
          )
        )
      }
      var al,
        tl = a('IAZG'),
        ll = a('QRqA'),
        il = (Object.freeze({ Home: 'home', Latest: 'latest' }), { page: 'community', section: 'home' }),
        rl = { page: 'community', section: 'latest' },
        ol = { page: 'community', section: 'tweets' },
        sl = void 0 !== al ? al : (al = a('R0yc')),
        cl = function (e) {
          var n = e.communityId,
            a = e.composeOptions,
            t = Object(tl.a)(sl, { communityId: n }).community,
            l = Object(pe.a)('c9s_participation_enabled'),
            i = nl(n),
            o = i.homeModule,
            s = i.latestModule,
            c = i.refreshModules,
            u = Object(pe.a)('c9s_timelines_ranking_enabled'),
            m = Object(Hn.f)(),
            d = Object(Hn.g)(),
            y = t.role === h.a.Admin && void 0 !== d.query.show_creation_summary,
            g = Object(h.g)(t.role) && l,
            p = Object(He.a)(t),
            f = r.a.useMemo(
              function () {
                return { canJoinCommunity: 'CommunityJoinAction' === t.actions.join_action_result.__typename, theme: p }
              },
              [p, t.actions.join_action_result],
            ),
            b = r.a.useMemo(
              function () {
                return g
                  ? r.a.createElement(Ot.a, {
                      getLocationState: function () {
                        return a
                      },
                      history: m,
                    })
                  : null
              },
              [g, m, a],
            )
          return r.a.createElement(
            xt.a,
            { component: pt.a, fab: b },
            r.a.createElement(ll.a, { forSingleCommunity: f }),
            y && r.a.createElement(Lt, { community: t }),
            r.a.createElement(lt, { community: t, onCommunityMembershipChange: c }),
            r.a.createElement(
              Hn.d,
              null,
              r.a.createElement(
                Hn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/') },
                r.a.createElement(Yt, { communityId: n }),
                r.a.createElement(Pt.c, { namespace: u ? il : ol }, r.a.createElement(gt, { module: o })),
              ),
              r.a.createElement(
                Hn.b,
                { path: '/i/communities/'.concat(n, '/latest') },
                r.a.createElement(Yt, { communityId: n }),
                r.a.createElement(Pt.c, { namespace: u ? rl : ol }, r.a.createElement(gt, { module: s })),
              ),
              r.a.createElement(
                Hn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/about') },
                r.a.createElement(Ye, { community: t }),
              ),
            ),
          )
        },
        ul = { page: 'community', section: 'primaryContent' },
        ml = {
          type: 'CustomRetry',
          content: function () {
            return r.a.createElement(rt, null)
          },
        },
        dl = function (e) {
          return r.a.createElement(
            Pt.c,
            { namespace: ul },
            r.a.createElement(
              Ja.a,
              { behavioralEventViewType: 'Community' },
              r.a.createElement(
                At.a,
                { errorConfig: { context: 'CommunityScreen' }, fallback: ml },
                r.a.createElement(jt.a, null, r.a.createElement(cl, e)),
              ),
            ),
          )
        },
        yl = a('VS6U'),
        gl = { type: 'serversideContextKey', serversideContextType: 'community' },
        pl = k.a.a7c2e06c,
        fl = k.a.j24c37b2,
        bl = k.a.a94092a1,
        hl = k.a.i1fda797,
        _l = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        kl = function (e) {
          var n = e.community,
            a = e.communityId,
            t = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            c = e.fetchCommunityMemberships,
            u = e.hasShownModEducation,
            m = e.history,
            d = e.isCommunityMember,
            y = e.membershipsFetchStatus,
            g = e.screenName,
            p = e.setFlag,
            b = Object(pe.a)('c9s_participation_enabled'),
            _ = Object(pe.a)('c9s_edit_moderators_enabled'),
            k = r.a.useCallback(
              function () {
                a && i(a).catch(t({})), y === f.a.NONE && c().catch(t())
              },
              [y, i, a, c, t],
            )
          r.a.useEffect(
            function () {
              k()
            },
            [k],
          )
          var v = r.a.useCallback(
              function () {
                a && p(a, 'mod_education_flag', !0)
              },
              [a, p],
            ),
            E = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, gl), {}, { serversideContextId: a || '' }), viewType: 'community' }
              },
              [a],
            ),
            C = r.a.useMemo(
              function () {
                return _l(a)
              },
              [a],
            ),
            F = null == n ? void 0 : n.name,
            S = null == n ? void 0 : n.role,
            I = !!d && b,
            K = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            w = _ && S === h.a.Moderator && !u,
            T = r.a.useMemo(
              function () {
                return r.a.createElement(X, { canModerate: Object(h.c)(S), communityId: a || '', userRole: S })
              },
              [S, a],
            ),
            R = r.a.useMemo(
              function () {
                return r.a.createElement(s.a, { communityId: a || '', withCommunityRules: K })
              },
              [a, K],
            ),
            M = r.a.useMemo(
              function () {
                return r.a.createElement(dl, { communityId: a || '', composeOptions: C })
              },
              [a, C],
            )
          return a
            ? r.a.createElement(
                o.a,
                { behavioralEventContext: E },
                r.a.createElement(yl.a, {
                  backLocation: g && '/'.concat(g, '/communities'),
                  composeOptions: C,
                  documentTitle: F ? pl({ communityName: F }) : '',
                  history: m,
                  primaryContent: M,
                  rightControl: T,
                  sidebarContent: R,
                  title: F || null,
                  withTweetButton: I,
                }),
                w
                  ? r.a.createElement(re.a, {
                      actionLabel: fl,
                      graphicDisplayMode: 'none',
                      headline: bl,
                      onAction: v,
                      onClose: v,
                      subtext: hl,
                      withCloseButton: !0,
                    })
                  : null,
              )
            : null
        },
        vl = ie(kl)
      n.default = vl
    },
    U0Qk: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return p
      })
      var t = a('ddV6'),
        l = a.n(t),
        i = a('ERkP'),
        r = a.n(i),
        o = a('v6aA'),
        s = a('p+r5'),
        c = a('3XMw'),
        u = a.n(c),
        m = a('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        g = u.a.e988475f,
        p = function (e) {
          var n = e.autoFocus,
            a = void 0 !== n && n,
            t = e.communityPurpose,
            i = e.onChange,
            c = r.a.useState(void 0),
            u = l()(c, 2),
            p = u[0],
            f = u[1],
            b = r.a.useState(!1),
            h = l()(b, 2),
            _ = h[0],
            k = h[1],
            v = r.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            E = r.a.useCallback(
              function (e) {
                var n = e.target.value,
                  a = !Object(m.h)(n, 3, v)
                a && f(g({ minCharacterCount: 3, maxCharacterCount: v })), k(a), i(n, a)
              },
              [v, f, i],
            )
          return r.a.createElement(s.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: a,
            calculateLength: m.b,
            errorText: p,
            helperText: y,
            invalid: _,
            label: d,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: E,
            spellCheck: 'false',
            validLength: v,
            value: t,
          })
        }
    },
    U3Z9: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CreateCommunityModal', function () {
          return A
        })
      var t = a('yiKp'),
        l = a.n(t),
        i = a('ddV6'),
        r = a.n(i),
        o = (a('KqXw'), a('MvUL'), a('ERkP')),
        s = a.n(o),
        c = a('+Kfv'),
        u = a('ROT1'),
        m = a('U0Qk'),
        d = a('eSoz'),
        y = a('RqPI'),
        g = a('rxPX'),
        p = Object(g.a)()
          .propsFromState(function () {
            return { communitiesActions: y.f }
          })
          .propsFromActions(function () {
            return { createCommunity: d.b }
          }),
        f = a('jHSc'),
        b = a('3XMw'),
        h = a.n(b),
        _ = a('0weh'),
        k = a('5FtR'),
        v = a('s8G+'),
        E = a('MWbm'),
        C = a('/yvb'),
        F = a('4zmP'),
        S = a('t62R'),
        I = a('rHpw'),
        K = a('I/KZ'),
        w = h.a.i6e7e298,
        T = h.a.a226497c,
        R = h.a.c9d56b71,
        M = h.a.fc2a5c92,
        L = h.a.c1ad5a11,
        x = h.a.f713fbd1,
        O = { viewType: 'community' },
        A = s.a.memo(function (e) {
          var n = e.communitiesActions,
            a = e.createCommunity,
            t = e.history,
            i = Object(v.a)('c9s_community_creation_form_membership_type_enabled'),
            o = s.a.useState(!0),
            d = r()(o, 2),
            y = d[0],
            g = d[1],
            p = s.a.useState(!1),
            b = r()(p, 2),
            h = b[0],
            I = b[1],
            A = y || h,
            P = s.a.useState(''),
            N = r()(P, 2),
            B = N[0],
            H = N[1],
            D = s.a.useState(''),
            U = r()(D, 2),
            q = U[0],
            z = U[1],
            V = s.a.useState(null),
            Q = r()(V, 2),
            W = Q[0],
            J = Q[1],
            X = s.a.useCallback(function (e, n) {
              H(e), g(n)
            }, []),
            G = s.a.useCallback(function (e, n) {
              z(e), 0 === e.length ? I(!1) : I(n)
            }, []),
            Y = Object(K.e)(),
            Z = r()(Y, 2),
            $ = Z[0],
            ee = Z[1],
            ne = s.a.useCallback(
              function () {
                return i ? l()({ description: q }, Object(K.c)($)) : { description: q }
              },
              [q, i, $],
            ),
            ae = s.a.useCallback(
              function () {
                J(null),
                  a(B, ne())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var n = null == e ? void 0 : e.normalized.result
                        'string' == typeof n && t.replace('/i/communities/'.concat(n, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && J(e)
                    })
                    .catch(function (e) {
                      J({ error: 'GraphQL error', reason: e })
                    })
              },
              [B, a, ne, t],
            )
          if (null == n || !n.create) return s.a.createElement(k.a, { to: '/home' })
          var te = s.a.createElement(C.a, { disabled: A, onClick: ae, size: 'small', type: 'brandFilled' }, w),
            le = W
              ? s.a.createElement(
                  E.a,
                  { style: j.error },
                  s.a.createElement(F.a, { Icon: _.a, headline: M, text: L, type: 'danger' }),
                )
              : void 0
          return s.a.createElement(
            c.a,
            { behavioralEventContext: O },
            s.a.createElement(
              f.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: j.root,
                history: t,
                rightControl: te,
                title: T,
              },
              s.a.createElement(
                s.a.Fragment,
                null,
                le,
                s.a.createElement(S.b, { color: 'gray700', style: j.text }, R),
                s.a.createElement(u.a, { autoFocus: !0, communityName: B, onChange: X }),
                s.a.createElement(m.a, { communityPurpose: q, onChange: G }),
                i
                  ? s.a.createElement(
                      s.a.Fragment,
                      null,
                      s.a.createElement(S.b, { size: 'headline2', style: j.membership, weight: 'bold' }, x),
                      s.a.createElement(K.d, { hideInvitePolicy: !0, setters: ee, state: $ }),
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
        P = p(A)
      n.default = P
    },
    UZ0O: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return S
      })
      var t = a('KEM+'),
        l = a.n(t),
        i = a('yiKp'),
        r = a.n(i),
        o = a('ddV6'),
        s = a.n(o),
        c = a('ERkP'),
        u = a.n(c),
        m = a('v6aA'),
        d = a('3XMw'),
        y = a.n(d),
        g = a('rHpw'),
        p = a('xvzJ'),
        f = (a('2G9S'), a('CxAY')),
        b = a('rxPX'),
        h = function (e, n) {
          return n.communityId && n.userId ? f.b.select(e, ''.concat(n.communityId, '_').concat(n.userId)) : void 0
        }
      var _ = Object(b.a)().propsFromState(function () {
          return { userCommunityRoleRelationship: h }
        })(function (e) {
          var n = e.communityId,
            a = e.onCommunityRoleChange,
            t = e.userCommunityRoleRelationship,
            l = e.userId
          if (
            (u.a.useEffect(
              function () {
                t && a(l, t)
              },
              [t, l, a],
            ),
            !t)
          )
            return null
          var i = t.role,
            r = t.user,
            o = r.id,
            s = r.screen_name
          return u.a.createElement(p.a, { communityId: n, communityRole: i, recordId: o, screenName: s, userId: l })
        }),
        k = a('4e/K'),
        v = a('Ig1G'),
        E = a('GZwR'),
        C = y.a.cf4898a0,
        F = [E.a.CommunityMembers]
      function S(e) {
        var n = u.a.useContext(m.a).featureSwitches.isTrue('c9s_members_list_search_enabled'),
          a = e.community,
          t = e.communityId,
          i = e.onIsSearchingChange,
          o = (null == a ? void 0 : a.role) === v.a.Admin,
          c = u.a.useState(!1),
          d = s()(c, 2),
          y = d[0],
          g = d[1],
          p = u.a.useState(''),
          f = s()(p, 2),
          b = f[0],
          h = f[1],
          S = u.a.useState({}),
          K = s()(S, 2),
          w = K[0],
          T = K[1],
          R = u.a.useCallback(
            function (e, n) {
              T(function (a) {
                return r()(r()({}, a), {}, l()({}, e, n))
              })
            },
            [T],
          ),
          M = u.a.useCallback(
            function () {
              g(!0), i(!0)
            },
            [i],
          ),
          L = u.a.useCallback(
            function (e) {
              h(e)
              var n = !!e
              i(n), g(n)
            },
            [i],
          ),
          x = u.a.useCallback(
            function () {
              b || (i(!1), g(!1))
            },
            [i, b],
          )
        if (!t) return null
        return n && o
          ? u.a.createElement(k.default, {
              alwaysOpen: y,
              communityId: t,
              filter: F,
              getUserDisplayNameLabel: function (e) {
                if ('user' === e.type) {
                  var n = e.data.id_str,
                    a = w[n]
                  if (a) return Object(v.d)(a.role)
                }
              },
              inputStyle: I.textInput,
              isModal: !0,
              onDismiss: x,
              onFocus: M,
              onQueryChange: L,
              placeholder: C,
              renderUserDecoration: function (e) {
                var n = e.userId
                return u.a.createElement(_, { communityId: t, onCommunityRoleChange: R, userId: n })
              },
              rounded: !0,
              source: E.d.CommunityMemberSearch,
              style: I.input,
            })
          : null
      }
      var I = g.a.create(function (e) {
        return {
          input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
          textInput: { marginBottom: e.spaces.space8 },
        }
      })
    },
    WWTc: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'MemberRequestsPivotContainerQuery',
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
                selections: [{ args: null, kind: 'FragmentSpread', name: 'MemberRequestsPivot_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'MemberRequestsPivotContainerQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: 'communityId', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'pending_join_request_count',
                            storageKey: null,
                          },
                          (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
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
            id: 'bgIrkbAlmbsKZJGcd7VGYg',
            metadata: {},
            name: 'MemberRequestsPivotContainerQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '9b955902020d0baa1431bc7848010386'), (n.default = r)
    },
    WuQQ: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityMemberCount_community',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null }],
        type: 'Community',
        abstractKey: null,
        hash: '793bedf8ae1b012c222a20424e8123bb',
      }
      n.default = t
    },
    'X/n0': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
      n.default = t
    },
    atLU: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityBannerImageCustom_community',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiMedia',
            kind: 'LinkedField',
            name: 'custom_banner_media',
            plural: !1,
            selections: [
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
            ],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'f5fb6cadef5e830d674feb387a9eff99',
      }
      n.default = t
    },
    b5s6: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        i = a('m3Bd'),
        r = a.n(i),
        o = a('ERkP'),
        s = a.n(o),
        c = a('v6aA'),
        u = a('XOJV'),
        m = a('eSoz'),
        d = a('rxPX'),
        y = a('0KEI'),
        g = function (e, n) {
          return n.tweetId
        },
        p = function (e, n) {
          var a = n.tweetId,
            t = a && u.a.select(e, a)
          return t ? Object(m.g)(e, t) : void 0
        },
        f = Object(d.a)()
          .propsFromState(function () {
            return { community: p, hydratedTweet: u.a.createHydratedTweetSelector(g) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: m.c.fetchOneIfNeeded,
            }
          }),
        b = a('YeIG'),
        h = a('uCxL'),
        _ = a('x5Pi'),
        k = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        v = f(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            o = (e.tweetId, r()(e, k)),
            u = s.a.useContext(c.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              y && Object(b.a)(n) && t(y).catch(a())
            },
            [n, y, a, t],
          )
          var g = m.isTrue('responsive_web_alt_text_badge_enabled'),
            p = i && Object(_.f)(i, d, n),
            f = p && Object(_.e)(p),
            v = m.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            h.a,
            l()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: g,
              socialContextProps: f,
              tweet: i,
              withReactions: v,
            }),
          )
        })
      n.a = v
    },
    bCEw: function (e, n, a) {
      'use strict'
      var t = a('IGGJ')(a('K1iM')),
        l = a('23An'),
        i = a('Ud88'),
        r = a('aQQo'),
        o = r.loadQuery,
        s = r.useTrackLoadQueryInRender,
        c = a('ERkP'),
        u = c.useCallback,
        m = c.useEffect,
        d = c.useRef,
        y = c.useState,
        g = a('K1lQ').getRequest,
        p = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== g(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var a = null != n ? n : p,
          r = i()
        s()
        var c = l(),
          g = d(new Set([a])),
          b = y(function () {
            return a
          }),
          h = b[0],
          _ = b[1],
          k = y(function () {
            return a
          }),
          v = k[0],
          E = k[1]
        a !== v && (g.current.add(a), E(a), _(a))
        var C = u(
            function () {
              c.current && (g.current.add(p), _(p))
            },
            [c],
          ),
          F = u(
            function (n, a) {
              var t =
                null != a && a.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: a.fetchPolicy,
                      networkCacheConfig: a.networkCacheConfig,
                      __nameForWarning: a.__nameForWarning,
                    }
                  : a
              if (c.current) {
                var l,
                  i = o(null !== (l = null == a ? void 0 : a.__environment) && void 0 !== l ? l : r, e, n, t)
                g.current.add(i), _(i)
              }
            },
            [r, e, _, c],
          ),
          S = d(!1)
        return (
          m(function () {
            return function () {
              S.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === S.current)
                return (
                  (S.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    F(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var n = g.current
              if (c.current) {
                var a,
                  l = (0, t.default)(n)
                try {
                  for (l.s(); !(a = l.n()).done; ) {
                    var i = a.value
                    if (i === h) break
                    n.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (f(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (r) {
                  l.e(r)
                } finally {
                  l.f()
                }
              }
            },
            [h, c, F, e],
          ),
          m(
            function () {
              return function () {
                var n,
                  a = (0, t.default)(g.current)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var l = n.value
                    'NullQueryReference' !== l.kind &&
                      (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, F, C]
        )
      }
    },
    cI4y: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u = {
          fragment: {
            argumentDefinitions: (t = [
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
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                          (r = {
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
            argumentDefinitions: t,
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
                    args: (s = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'follow_request_sent',
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
                                        name: 'blocking',
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
                                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_following',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_follow_eligible',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_followed_by',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'smart_blocking',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'HighlightedUserLabelResponse',
                                    kind: 'LinkedField',
                                    name: 'affiliates_highlighted_label',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'HighlightedUserLabel',
                                        kind: 'LinkedField',
                                        name: 'label',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'user_label_type',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  r,
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          r,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: s,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityMembers_Query_members_slice',
                    kind: 'LinkedHandle',
                    name: 'members_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  c,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'QHQeT6qB5urV4Gbg27pVuQ',
            metadata: { sliceInfoPath: ['community', 'members_slice', 'slice_info'] },
            name: 'membersSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'd5eb23d40bcb19e36e32afc95695f334'), (n.default = u)
    },
    cL2e: function (e, n, a) {
      'use strict'
      a.d(n, 'c', function () {
        return M
      }),
        a.d(n, 'a', function () {
          return H
        }),
        a.d(n, 'b', function () {
          return z
        })
      var t,
        l,
        i = a('ERkP'),
        r = a.n(i),
        o = a('FIs5'),
        s = (a('enFi'), a('3XMw')),
        c = a.n(s),
        u = a('TEoO'),
        m = a('Fr3L'),
        d = (a('ho0z'), a('j57/')),
        y = a('ja7Y'),
        g = a('rHpw'),
        p = a('MjKK'),
        f = a('jAXQ'),
        b = a.n(f),
        h = function (e) {
          var n = e.item,
            l = b()(void 0 !== t ? t : (t = a('08/x')), n),
            i = Object(p.b)(l)
          return r.a.createElement(d.a, {
            communityId: l.rest_id,
            media: i,
            memberCount: l.member_count,
            membersFacepile: r.a.createElement(y.a, { community: l, shouldUseThemeColor: !1, style: _.facepile }),
            name: l.name,
          })
        },
        _ = g.a.create(function (e) {
          return { facepile: { justifyContent: 'flex-start' } }
        }),
        k = r.a.memo(h),
        v = a('s8G+'),
        E = a('DQzJ'),
        C = { context: 'CommunitiesSearchQuery' },
        F = c.a.c170a564,
        S = c.a.ae111c99,
        I = function (e) {
          return e.__id
        },
        K = void 0 !== l ? l : (l = a('DVIF')),
        w = function (e) {
          return r.a.createElement(k, { item: e })
        },
        T = function (e) {
          var n,
            a = e.query,
            t = void 0 === a ? '' : a,
            l = Object(E.a)(K, { query: t }),
            i = l.data,
            s = l.fetchNext,
            c = null == i || null === (n = i.communities_search_slice) || void 0 === n ? void 0 : n.items
          return 0 === c.length
            ? r.a.createElement(o.a, { header: S({ query: t }), message: F })
            : r.a.createElement(u.a, {
                cacheKey: 'CommunitiesSearch',
                identityFunction: I,
                items: c,
                onNearEnd: s,
                renderer: w,
              })
        },
        R = function (e) {
          var n = e.query
          return Object(v.a)('c9s_communities_search_enabled') && n
            ? r.a.createElement(m.a, { errorConfig: C }, r.a.createElement(T, { query: n }))
            : null
        },
        M = r.a.memo(R),
        L = a('ddV6'),
        x = a.n(L),
        O = (a('KqXw'), a('MvUL'), a('VY6S')),
        A = a('6OUF'),
        j = a('VwDm'),
        P = a('zCf4'),
        N = c.a.fbf01e51,
        B = function (e) {
          var n = e.initialValue,
            a = void 0 === n ? '' : n,
            t = r.a.useRef(!1)
          r.a.useEffect(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1
              }
            )
          }, [])
          var l = r.a.useState(a),
            i = x()(l, 2),
            o = i[0],
            s = i[1],
            c = Object(P.f)(),
            u = r.a.useCallback(
              function () {
                s(''), c.replace('/i/communities/suggested')
              },
              [c],
            ),
            m = r.a.useMemo(
              function () {
                return Object(O.a)(function (e) {
                  t.current && (e.length > 0 ? c.replace('/i/communities/suggested?q='.concat(e)) : u())
                }, 1e3)
              },
              [u, c],
            ),
            d = r.a.useCallback(
              function (e) {
                var n = e.target.value
                s(n), m(n)
              },
              [m],
            )
          return r.a.createElement(A.a, {
            Icon: j.a,
            autoComplete: 'off',
            isCompact: !0,
            onChange: d,
            onClear: u,
            placeholder: N,
            value: o,
            withClearButton: !0,
          })
        },
        H = r.a.memo(B),
        D = a('/yvb'),
        U = c.a.fbf01e51,
        q = function (e) {
          return Object(v.a)('c9s_communities_search_enabled')
            ? r.a.createElement(D.a, {
                icon: r.a.createElement(j.a, { accessibilityLabel: U, style: V.searchButton }),
                link: '/i/communities/suggested',
                size: 'medium',
                type: 'brandText',
              })
            : null
        },
        z = r.a.memo(q),
        V = g.a.create(function (e) {
          return { searchButton: { color: e.colors.text } }
        })
    },
    'cd+Z': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'MemberRequestsPivot_community',
        selections: [
          { alias: 'communityId', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'join_requests_result',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'pending_join_request_count',
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
        type: 'Community',
        abstractKey: null,
        hash: 'aa55c598ec362c825293e24820d368a3',
      }
      n.default = t
    },
    'cz/h': function (e, n, a) {
      'use strict'
      a.r(n)
      a('lTEL'), a('7x/C'), a('87if'), a('kYxP'), a('KrtT'), a('KqXw'), a('LJOr')
      var t = a('ERkP'),
        l = a.n(t),
        i = a('es0u'),
        r = a('WpDa'),
        o = a('ZNT5'),
        s = Object(o.a)({
          timelineId: 'communitiesDiscoveryTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunityDiscoveryTimeline
          },
          getEndpointParams: function (e) {
            var n = e.count,
              a = e.cursor
            return { count: n, cursor: 'string' == typeof a ? a : void 0 }
          },
          context: 'FETCH_COMMUNITIES_DISCOVERY_TIMELINE',
          perfKey: 'communitiesDiscoveryTimeline',
          formatResponse: r.a,
        }),
        c = a('OUEC'),
        u = a('3XMw'),
        m = a.n(u),
        d = a('6vad'),
        y = a('yoO3'),
        g = a('fTQJ'),
        p = a('VS6U'),
        f = a('s8G+'),
        b = a('cL2e'),
        h = a('zCf4'),
        _ = m.a.cb6adb1f,
        k = function (e) {
          var n = Object(h.f)(),
            a = Object(h.g)(),
            t = Object(f.a)('c9s_communities_search_enabled'),
            r = l.a.useCallback(function () {
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(d.b, { text: _ }),
                l.a.createElement(g.a, { entryConfiguration: c.a, module: s, refreshControl: null, title: '' }),
              )
            }, []),
            o = l.a.useMemo(
              function () {
                var e
                return null !== (e = new URLSearchParams(a.search).get('q')) && void 0 !== e ? e : void 0
              },
              [a.search],
            ),
            u = l.a.useCallback(
              function () {
                return o ? l.a.createElement(b.c, { query: o }) : r()
              },
              [r, o],
            ),
            m = t ? u() : r()
          return l.a.createElement(
            y.a,
            { behavioralEventViewType: 'discover' },
            l.a.createElement(p.a, {
              backLocation: '/',
              customSearchBox: t ? l.a.createElement(b.a, { initialValue: o }) : null,
              history: n,
              primaryContent: m,
              sidebarContent: l.a.createElement(i.a, { withSearchBox: !1 }),
              title: _,
              withSearchBox: t,
            }),
          )
        }
      n.default = l.a.memo(k)
    },
    dMLx: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityBannerImage_community',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageCustom_community' },
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageDefault_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'aecce1c8907386fe71248f72f90e1e26',
      }
      n.default = t
    },
    fK4d: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityBannerImage_community',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImage_community' }],
        type: 'Community',
        abstractKey: null,
        hash: 'ac657dadcf91c9440fdfcd1862830fd1',
      }
      n.default = t
    },
    fS8x: function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        i = a('VrFO'),
        r = a.n(i),
        o = a('Y9Ll'),
        s = a.n(o),
        c = a('1Pcy'),
        u = a.n(c),
        m = a('5Yy7'),
        d = a.n(m),
        y = a('2VqO'),
        g = a.n(y),
        p = a('KEM+'),
        f = a.n(p),
        b = a('/NU0'),
        h = a('rxPX'),
        _ = a('AspN'),
        k = function (e, n) {
          return n.media ? n.media : Object(b.a)(n.mediaId) ? Object(_.k)(e, n.mediaId)[0] : void 0
        },
        v = function (e, n) {
          return void 0 !== n.mediaId ? n.mediaId : n.media ? n.media.id : null
        },
        E = Object(h.a)()
          .propsFromState(function () {
            return { media: k, mediaId: v }
          })
          .propsFromActions(function () {
            return { processMedia: _.f, updateMediaUpload: _.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = a('jHSc'),
        F = a('3XMw'),
        S = a.n(F),
        I = a('EeFI'),
        K = 'applyButton',
        w = a('/yvb'),
        T = a('rHpw'),
        R = S.a.gd80afba,
        M = S.a.a753a87f,
        L = (function (e) {
          d()(a, e)
          var n = g()(a)
          function a(e) {
            var t
            return (
              r()(this, a),
              (t = n.call(this, e)),
              f()(u()(t), '_getMedia', function () {
                var e = t.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              f()(u()(t), '_renderAppBarRightControl', function () {
                var e = t.state.isProcessing
                return l.a.createElement(
                  w.a,
                  { disabled: e, onPress: t._handleApplyButtonClick, size: 'small', testID: K, type: 'primaryFilled' },
                  M,
                )
              }),
              f()(u()(t), '_handleBackClick', function () {
                var e = t.props,
                  n = e.analytics,
                  a = e.onCancel
                n.scribe({ action: 'cancel' }), a && a()
              }),
              f()(u()(t), '_handleApplyButtonClick', function () {
                var e = t.props.onCropDone,
                  n = t._cropper.current
                if (n) {
                  var a = t.props,
                    l = a.analytics,
                    i = a.media,
                    r = a.mediaId,
                    o = a.onDone,
                    s = a.processMedia,
                    c = a.updateMediaUpload
                  t.setState({ isProcessing: !0 })
                  var u = n.getCropData(),
                    m = (i || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(b.a)(r) &&
                    (e
                      ? (e(u), o())
                      : (c({ id: r, cropData: d ? void 0 : u }),
                        s(r).then(function () {
                          t.setState({ isProcessing: !1 }), l.scribe({ action: 'done' }), o()
                        })))
                }
              }),
              (t.state = { isProcessing: !1 }),
              (t._cropper = l.a.createRef()),
              e.media || e.onCancel(),
              t
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.defaultAspectRatio,
                    a = e.history,
                    t = e.title,
                    i = e.withAspectRatioOptions,
                    r = e.withZoomControl,
                    o = this._getMedia()
                  return l.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: x.root,
                      documentTitle: t || R,
                      history: a,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: t || R,
                    },
                    l.a.createElement(I.a, {
                      defaultAspectRatio: n,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: i,
                      withZoomControl: r,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(l.a.Component),
        x = T.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(L),
        A = a('X8FW'),
        j = T.a.create(function (e) {
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
    'gAl+': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
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
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
            argumentDefinitions: t,
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
                  i,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      r,
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
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                                              r,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  (c = {
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
                                                      i,
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
                                                  s,
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
                                        selections: [c, s],
                                        storageKey: null,
                                      },
                                      s,
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
                                        selections: (u = [r]),
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
                                      s,
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
                          s,
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  s,
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
    gDCe: function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        i = a('v6aA'),
        r = a('Ig1G'),
        o = a('3XMw'),
        s = a.n(o),
        c = a('Nh1N'),
        u = a('MWbm'),
        m = a('4zmP'),
        d = a('rHpw'),
        y = s.a.b6e22e15,
        g = s.a.d17c10d9,
        p = s.a.a1ecaf33,
        f = l.a.memo(function (e) {
          var n,
            a = e.community,
            t = l.a.useContext(i.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !a || a.role !== r.a.Admin || t
            ? null
            : l.a.createElement(
                u.a,
                { style: b.info },
                l.a.createElement(m.a, {
                  Icon: c.a,
                  action: {
                    label: p,
                    link: {
                      pathname: '/messages/compose',
                      query: {
                        recipient_id: '1433894099178774532',
                        text:
                          ((n = a.id_str),
                          'Hi, my community is (https://twitter.com/i/communities/'.concat(
                            n,
                            ') and I would like to add the following accounts as moderators: ',
                          )),
                      },
                    },
                  },
                  headline: y,
                  text: g,
                  type: 'primary',
                }),
              )
        }),
        b = d.a.create(function (e) {
          return { info: { padding: e.spaces.space12 } }
        })
      n.a = f
    },
    'i/x0': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'actions_update_CommunityJoinRequest',
        selections: [
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
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'pending_join_request_count',
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
            storageKey: null,
          },
        ],
        type: 'CommunityJoinRequest',
        abstractKey: null,
        hash: '2ad61c8011c9d2c59400842c56843678',
      }
      n.default = t
    },
    'ii+P': function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return r
      })
      a('FtFR')
      var t = a('ERkP'),
        l = a.n(t),
        i = a('wtru')
      function r(e) {
        var n = Object(i.b)()
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
    'j57/': function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        i = (a('ho0z'), a('ERkP')),
        r = a.n(i),
        o = a('+Kfv'),
        s = a('MWbm'),
        c = a('TIdA'),
        u = a('A91F'),
        m = a('rHpw'),
        d = a('MtXG'),
        y = a('t62R'),
        g = a('htQn'),
        p = a('MAI/'),
        f = a('3XMw'),
        b = a.n(f),
        h = b.a.d58baa7e,
        _ = { type: 'serversideContextKey', serversideContextType: 'community' },
        k = function (e) {
          var n = e.crop,
            a = e.image
          return r.a.createElement(
            s.a,
            { style: C.thumbnailContainer },
            r.a.createElement(c.a, {
              accessibilityLabel: '',
              aspectMode: u.a.SQUARE,
              backgroundColor: m.a.theme.colors.gray300,
              cropCandidates: n,
              image: a,
            }),
          )
        },
        v = function (e) {
          e.communityId
          var n = e.count,
            a = h(n)
          return r.a.createElement(
            d.a.Group,
            null,
            r.a.createElement(
              d.a,
              null,
              r.a.createElement(
                y.b,
                { color: 'gray700' },
                r.a.createElement(
                  b.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  r.a.createElement(d.a.Value, null, b.a.ibd0106d({ formattedCount: a })),
                  r.a.createElement(d.a.Label, null, b.a.cface2d0({ count: n })),
                ),
              ),
            ),
          )
        },
        E = function (e) {
          var n = e.communityId,
            a = e.media,
            t = e.memberCount,
            i = e.membersFacepile,
            c = e.name,
            u = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, _), {}, { serversideContextId: n }), viewType: 'community_cell' }
              },
              [n],
            ),
            m = '/i/communities/'.concat(n)
          return r.a.createElement(
            o.a,
            { behavioralEventContext: u },
            r.a.createElement(
              g.a,
              { link: m, style: C.root },
              r.a.createElement(
                s.a,
                { style: C.container },
                r.a.createElement(
                  s.a,
                  { style: C.leftColumn },
                  a ? r.a.createElement(k, a) : null,
                  r.a.createElement(
                    s.a,
                    { style: C.attribution },
                    r.a.createElement(
                      s.a,
                      { style: C.name },
                      r.a.createElement(y.b, { numberOfLines: 1, weight: 'bold' }, c),
                    ),
                    r.a.createElement(v, { communityId: n, count: t }),
                    Array.isArray(i)
                      ? r.a.createElement(p.a, { style: C.facepile, userAvatarSize: 'large', userAvatarUrls: i })
                      : i,
                  ),
                ),
              ),
            ),
          )
        }
      n.a = r.a.memo(E)
      var C = m.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          container: { flexDirection: 'row' },
          leftColumn: { alignItems: 'center', flexDirection: 'row', flex: 1, flexShrink: 1 },
          attribution: { height: '100%', justifyContent: 'space-between', flexShrink: 1 },
          facepile: { justifyContent: 'flex-start' },
          name: { marginBottom: e.spaces.space2, flexDirection: 'row' },
          thumbnailContainer: {
            width: '96px',
            marginRight: e.spaces.space12,
            borderRadius: e.borderRadii.large,
            overflow: 'hidden',
          },
        }
      })
    },
    ja7Y: function (e, n, a) {
      'use strict'
      a('KOtZ'), a('7x/C')
      var t,
        l = a('ERkP'),
        i = a.n(l),
        r = a('1Xyu'),
        o = a('s8G+'),
        s = a('X00g'),
        c = a('MAI/'),
        u = (a('enFi'), a('jAXQ')),
        m = a.n(u)
      n.a = function (e) {
        var n = e.community,
          l = e.shouldUseThemeColor,
          u = void 0 === l || l,
          d = e.style,
          y = m()(void 0 !== t ? t : (t = a('Eh7u')), n),
          g = Object(o.a)('c9s_ui_colors_enabled_rweb') && u,
          p = (function (e) {
            return e.reduce(function (e, n) {
              var a = n.result
              if ('User' === (null == a ? void 0 : a.__typename)) {
                var t,
                  l = null === (t = a.legacy) || void 0 === t ? void 0 : t.profile_image_url_https
                l && e.push(l)
              }
              return e
            }, [])
          })(y.members_facepile_results),
          f = Object(r.b)(y),
          b = g ? s.a.getCommunityBackgroundColorName(f) : void 0
        return p.length > 0
          ? i.a.createElement(c.a, { borderColor: b, style: d, userAvatarSize: 'large', userAvatarUrls: p })
          : null
      }
    },
    jtO7: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        i = a('m3Bd'),
        r = a.n(i),
        o = a('ERkP'),
        s = a.n(o),
        c = a('t62R'),
        u = a('I4+6'),
        m = a('cm6r'),
        d = a('rHpw'),
        y = a('MWbm'),
        g = ['align', 'color', 'label'],
        p = d.a.create(function (e) {
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
          a = void 0 === n ? 'center' : n,
          t = e.color,
          i = e.label,
          o = r()(e, g),
          f = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[t],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          y.a,
          { style: p.container },
          s.a.createElement(
            m.a,
            l()({}, o, { interactiveStyles: f, style: p.root }),
            s.a.createElement(c.b, { align: a, color: t }, i),
          ),
        )
      }
    },
    krnS: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return D
      })
      var t,
        l,
        i,
        r = a('ERkP'),
        o = a.n(r),
        s = a('v6aA'),
        c = a('WpDa'),
        u = a('ZNT5'),
        m = a('FIs5'),
        d = a('3XMw'),
        y = a.n(d),
        g = (a('enFi'), a('TEoO')),
        p = a('Fr3L'),
        f = (a('ho0z'), a('xvzJ')),
        b = a('OROh'),
        h = a('IMA+'),
        _ = a('Ig1G'),
        k = a('jAXQ'),
        v = a.n(k),
        E = function (e) {
          var n = e.communityId,
            l = e.userResult,
            i = e.viewerRole,
            r = o.a.useContext(s.a).loggedInUserId,
            c = v()(void 0 !== t ? t : (t = a('tgdH')), l).result
          if (!c || 'User' !== c.__typename || !c.legacy) return null
          var u = c.community_role,
            m = c.id,
            d = c.legacy,
            y = d.id_str,
            g = d.name,
            p = void 0 === g ? '' : g,
            k = d.profile_image_url_https,
            E = d.protected,
            C = d.screen_name,
            F = d.verified
          if (!C || !k || !p) return null
          var S = Object(_.d)(u)
          return o.a.createElement(h.a, {
            avatarUri: k,
            decoration:
              i === _.a.Admin
                ? o.a.createElement(f.a, { communityId: n, communityRole: u, recordId: m, screenName: C, userId: y })
                : r !== y
                ? o.a.createElement(b.a, { user: c })
                : null,
            displayMode: 'UserCompact',
            displayNameLabel: S,
            isProtected: E,
            isVerified: F,
            name: p,
            screenName: C,
            userId: y,
          })
        },
        C = a('DQzJ'),
        F = { context: 'members' },
        S = void 0 !== l ? l : (l = a('cI4y')),
        I = function (e) {
          return e.__id
        },
        K = function (e) {
          var n = e.communityId,
            a = e.renderEmptyState,
            t = e.viewerRole,
            l = Object(C.a)(S, { communityId: n }),
            i = l.data,
            r = l.fetchNext,
            s = i.community.members_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(n),
            identityFunction: I,
            items: s,
            noItemsRenderer: a,
            onNearEnd: r,
            renderer: function (e) {
              return o.a.createElement(E, { communityId: n, userResult: e, viewerRole: t })
            },
          })
        },
        w = function (e) {
          return o.a.createElement(p.a, { errorConfig: F }, o.a.createElement(K, e))
        },
        T = a('oQhu'),
        R = { context: 'members' },
        M = void 0 !== i ? i : (i = a('w9f9')),
        L = function (e) {
          return e.__id
        },
        x = function (e) {
          var n = e.communityId,
            a = e.renderEmptyState,
            t = e.viewerRole,
            l = Object(C.a)(M, { communityId: n }),
            i = l.data,
            r = l.fetchNext,
            s = i.community.moderators_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(n),
            identityFunction: L,
            items: s,
            noItemsRenderer: a,
            onNearEnd: r,
            renderer: function (e) {
              return o.a.createElement(E, { communityId: n, userResult: e, viewerRole: t })
            },
          })
        },
        O = function (e) {
          return o.a.createElement(p.a, { errorConfig: R }, o.a.createElement(x, e))
        },
        A = a('fTQJ'),
        j = y.a.cdd87523,
        P = y.a.cca5191f,
        N = y.a.e442bbb4,
        B = y.a.e9488b0d,
        H = y.a.j43fea20,
        D = { Moderators: 'Moderators', Members: 'Members' },
        U = Object(T.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityMembers-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityMembers
              },
              getEndpointParams: function (n) {
                var a = n.count,
                  t = n.cursor
                return { count: a, cursor: 'string' == typeof t ? t : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MEMBERS_TIMELINE',
              perfKey: 'communityMembers',
              formatResponse: c.a,
            })
          })(e)
        }),
        q = Object(T.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityModerators-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityModerators
              },
              getEndpointParams: function (n) {
                var a = n.count,
                  t = n.cursor
                return { count: a, cursor: 'string' == typeof t ? t : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MODERATORS_TIMELINE',
              perfKey: 'communityModerators',
              formatResponse: c.a,
            })
          })(e)
        }),
        z = function () {
          return o.a.createElement(m.a, { header: j, message: P })
        }
      n.b = function (e) {
        var n = o.a.useContext(s.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          a = e.communityId,
          t = e.mode,
          l = e.viewerRole,
          i = t === D.Moderators
        if (n && l)
          return i
            ? o.a.createElement(O, { communityId: a, renderEmptyState: z, viewerRole: l })
            : o.a.createElement(w, { communityId: a, renderEmptyState: z, viewerRole: l })
        var r = i ? q(a) : U(a),
          c = i ? B : H
        return o.a.createElement(A.a, { loadingAccessibilityLabel: c, module: r, renderEmptyState: z, title: N })
      }
    },
    l3Hs: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityToolsScreen', function () {
          return Ke
        })
      a('KqXw'), a('WNMA')
      var t = a('ERkP'),
        l = a.n(t),
        i = a('v6aA'),
        r = a('Ig1G'),
        o = a('EPsT'),
        s = a('eSoz'),
        c = a('rxPX'),
        u = a('0KEI'),
        m = a('R5kW'),
        d = function (e, n) {
          var a,
            t = Object(m.b)(e, n.communityId)
          return null !== (a = null == t ? void 0 : t.tweet_case_count) && void 0 !== a ? a : 0
        },
        y = function (e, n) {
          return Object(m.c)(e, n.communityId)
        },
        g = Object(c.a)()
          .propsFromState(function () {
            return { count: d, moderationFetchStatus: y }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              updateModeratorRole: s.c.updateRole,
              fetchCommunityModerationData: m.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        p = a('kGix'),
        f = a('3XMw'),
        b = a.n(f),
        h = (a('enFi'), a('yiKp')),
        _ = a.n(h),
        k = a('Lsrn'),
        v = a('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(v.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [k.a.root, e.style],
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
      E.metadata = { width: 24, height: 24 }
      var C,
        F = E,
        S = a('KQzH'),
        I = a('s8G+'),
        K = a('jAXQ'),
        w = a.n(K),
        T = a('Znyr'),
        R = a('rHpw'),
        M = b.a.gfccba44,
        L = b.a.h6beb5fa,
        x = b.a.dde5f322,
        O = void 0 !== C ? C : (C = a('cd+Z'))
      function A(e) {
        var n = e.community,
          a = Object(I.a)('c9s_request_to_join_enabled'),
          t = w()(O, n),
          i = t.communityId,
          r = t.join_requests_result,
          o = 'CommunityJoinRequests' === r.__typename,
          s = l.a.useCallback(
            function () {
              var e = r.pending_join_request_count,
                n = void 0 === e ? 0 : e
              return n > 0
                ? l.a.createElement(T.a, {
                    count: n,
                    standalone: !0,
                    truncatedCountFormatter: L,
                    unreadCountLabel: x,
                    withBorder: !1,
                  })
                : null
            },
            [r],
          )
        return a && o
          ? l.a.createElement(S.a, {
              label: M,
              link: '/i/communities/'.concat(i, '/moderation/member_requests'),
              renderRightContent: s,
              thumbnail: B,
            })
          : null
      }
      var j,
        P = l.a.memo(A),
        N = R.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        B = l.a.createElement(F, { style: N.thumbnail }),
        H = a('Fr3L'),
        D = a('IAZG'),
        U = { context: 'MemberRequestsPivotContainerQuery' },
        q = void 0 !== j ? j : (j = a('WWTc')),
        z = function (e) {
          var n = e.communityId,
            a = Object(D.a)(q, { communityId: n })
          return l.a.createElement(P, { community: a.community })
        },
        V = function (e) {
          return l.a.createElement(H.a, { errorConfig: U }, l.a.createElement(z, { communityId: e.communityId }))
        },
        Q = l.a.memo(V),
        W = a('yoO3'),
        J = a('mWs5'),
        X = a('MWbm'),
        G = a('6vad'),
        Y = a('csss'),
        Z = a('OOKO'),
        $ = a('zIWA'),
        ee = a('M2x3'),
        ne = a('SNyS'),
        ae = a('S+H3'),
        te = a('PU7B'),
        le = b.a.dce5e1b3,
        ie = b.a.c5d8c93d,
        re = b.a.c8c7f9fc,
        oe = b.a.c045c7b6,
        se = b.a.a87df2ee,
        ce = b.a.dc6ce7b4,
        ue = b.a.gfca5254,
        me = b.a.bb081ea1,
        de = b.a.h6beb5fa,
        ye = b.a.e3f04700,
        ge = b.a.efc26607,
        pe = b.a.adfcc3cd,
        fe = b.a.d0330d9c,
        be = b.a.fd67f7c8,
        he = b.a.gc00d212,
        _e = b.a.a997eca0,
        ke = { label: b.a.c6ea29a1, header: b.a.a6e13fac, text: b.a.e538848b, confirmButtonLabel: b.a.j49e6aa2 },
        ve = R.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        Ee = l.a.createElement($.a, { style: ve.thumbnail }),
        Ce = l.a.createElement(ee.a, { style: ve.thumbnail }),
        Fe = l.a.createElement(ne.a, { style: ve.thumbnail }),
        Se = l.a.createElement(ae.a, { style: ve.thumbnail }),
        Ie = l.a.createElement(te.a, { style: ve.thumbnail }),
        Ke = function (e) {
          var n = l.a.useContext(i.a),
            a = n.featureSwitches,
            t = n.loggedInUserId,
            s = e.community,
            c = e.communityId,
            u = e.count,
            m = e.createLocalApiErrorHandler,
            d = e.fetchCommunityModerationData,
            y = e.history,
            g = e.match,
            f = e.moderationFetchStatus,
            b = e.updateModeratorRole,
            h = m(),
            _ = a.isTrue('c9s_moderation_enabled'),
            k = a.isTrue('c9s_rule_management_enabled'),
            v = a.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              f === p.a.NONE && _ && d(c).catch(h)
            },
            [h, c, d, f, _],
          )
          var E = l.a.useCallback(
              function () {
                return _ && u > 0
                  ? l.a.createElement(T.a, {
                      count: u,
                      standalone: !0,
                      truncatedCountFormatter: de,
                      unreadCountLabel: ye,
                      withBorder: !1,
                    })
                  : null
              },
              [u, _],
            ),
            C = s.role,
            F = C === r.a.Admin ? le : ie,
            I = C === r.a.Admin ? pe : fe,
            K = !g.isExact
          return l.a.createElement(
            W.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              J.a,
              { communityId: c, screenType: 'secondaryRoot', title: F, withDetailOpen: K },
              l.a.createElement(
                X.a,
                null,
                _
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(G.b, { text: re }),
                      l.a.createElement(S.a, {
                        label: oe,
                        link: '/i/communities/'.concat(c, '/moderation/reported_tweets'),
                        renderRightContent: E,
                        thumbnail: Ee,
                      }),
                    )
                  : null,
                l.a.createElement(Q, { communityId: c }),
                l.a.createElement(G.b, { text: se }),
                l.a.createElement(S.a, {
                  description: ge({ memberCount: s.member_count }),
                  label: ce,
                  link: '/i/communities/'.concat(c, '/tools/members'),
                  thumbnail: Se,
                }),
                k
                  ? l.a.createElement(S.a, {
                      description: I,
                      label: ue,
                      link: '/i/communities/'.concat(c, '/tools/rules'),
                      thumbnail: Ie,
                    })
                  : null,
                C === r.a.Admin
                  ? l.a.createElement(S.a, {
                      description: be,
                      label: me,
                      link: '/i/communities/'.concat(c, '/tools/settings'),
                      thumbnail: Ce,
                    })
                  : null,
                l.a.createElement(Y.a, {
                  description: _e,
                  label: he,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: Fe,
                }),
                C === r.a.Moderator && v
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(Z.a, { spacing: 'space1' }),
                      l.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: ke.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: ke.header,
                        confirmationSheetText: ke.text,
                        label: ke.label,
                        onConfirmationSheetConfirm: function () {
                          t &&
                            b(c, { userId: t, role: r.a.Member }).then(function () {
                              y.push('i/communities/'.concat(c))
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
        we = g(Ke)
      n.default = we
    },
    'ldL/': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
      n.default = t
    },
    m0MN: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunitiesModerationContainer', function () {
          return Jn
        })
      var t,
        l,
        i,
        r = a('97Jx'),
        o = a.n(r),
        s = a('m3Bd'),
        c = a.n(s),
        u = (a('KqXw'), a('WNMA'), a('ERkP')),
        m = a.n(u),
        d = a('v6aA'),
        y = a('+Kfv'),
        g = a('Ig1G'),
        p = a('1Idg'),
        f = a('eSoz'),
        b = a('rxPX'),
        h = a('0KEI'),
        _ = Object(b.a)()
          .propsFromState(function () {
            return { community: p.a, fetchStatus: p.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: f.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        k = a('G1WX'),
        v = (a('ho0z'), a('es0u')),
        E = a('3XMw'),
        C = a.n(E),
        F = a('VTxf'),
        S = a('yoO3'),
        I = a('Fr3L'),
        K = a('FIs5'),
        w = a('TEoO'),
        T = (a('1t7P'), a('jQ/y'), a('ddV6')),
        R = a.n(T),
        M = a('1YZw'),
        L = a('uDfI'),
        x = a('MWbm'),
        O = a('/yvb'),
        A = a('rHpw'),
        j = (a('enFi'), a('jAXQ')),
        P = a.n(j),
        N = (a('7x/C'), a('JtPf'), a('849X'), a('TJCb'), a('9SqB')),
        B = a.n(N)
      void 0 !== t || (t = a('i/x0'))
      var H,
        D,
        U,
        q,
        z = void 0 !== l ? l : (l = a('Dm5+')),
        V = void 0 !== i ? i : (i = a('C2fM')),
        Q = C.a.i22835dd,
        W = C.a.cb59a0fd,
        J = C.a.ic7db4ea,
        X = void 0 !== H ? H : (H = a('PMbW')),
        G = function (e) {
          var n = e.communityId,
            a = e.communityJoinRequestActions,
            t = e.userId,
            l = P()(X, a),
            i = l.join_request_approve_action_result,
            r = l.join_request_deny_action_result,
            o = (function () {
              var e = B()(z),
                n = R()(e, 2),
                a = n[0],
                t = n[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var n = e.communityId,
                      l = e.userId
                    return t
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, t) {
                          a({
                            variables: { communityId: n, userId: l },
                            onCompleted: function (n) {
                              e()
                            },
                            onError: t,
                          })
                        })
                  },
                  [a, t],
                ),
                t,
              ]
            })(),
            s = R()(o, 2),
            c = s[0],
            u = s[1],
            d = (function () {
              var e = B()(V),
                n = R()(e, 2),
                a = n[0],
                t = n[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var n = e.communityId,
                      l = e.userId
                    return t
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, t) {
                          a({
                            variables: { communityId: n, userId: l },
                            onCompleted: function (n) {
                              e()
                            },
                            onError: t,
                          })
                        })
                  },
                  [a, t],
                ),
                t,
              ]
            })(),
            y = R()(d, 2),
            g = y[0],
            p = y[1],
            f = Object(L.c)(),
            b = u || p,
            h = 'CommunityJoinRequestDenyAction' === (null == r ? void 0 : r.__typename),
            _ = 'CommunityJoinRequestApproveAction' === (null == i ? void 0 : i.__typename),
            k = m.a.useCallback(
              function () {
                g({ communityId: n, userId: t }).catch(function () {
                  f(Object(M.b)({ text: J }))
                })
              },
              [f, g, n, t],
            ),
            v = m.a.useCallback(
              function () {
                c({ communityId: n, userId: t }).catch(function () {
                  f(Object(M.b)({ text: J }))
                })
              },
              [f, c, n, t],
            )
          return m.a.createElement(
            x.a,
            { style: Y.buttons },
            m.a.createElement(O.a, { disabled: !h || b, onPress: k, style: Y.button, type: 'destructiveOutlined' }, W),
            m.a.createElement(O.a, { disabled: !_ || b, onPress: v, style: Y.button, type: 'primaryOutlined' }, Q),
          )
        },
        Y = A.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        Z = a('tocL'),
        $ = a('h0NW'),
        ee = a('t62R'),
        ne = a('0yYu'),
        ae = a('IMA+'),
        te = a('GBcw'),
        le = a('6Rrp'),
        ie = a('5oT/'),
        re = void 0 !== D ? D : (D = a('8vG3')),
        oe = C.a.d7f13fb8,
        se = C.a.a340df66,
        ce = function (e) {
          var n = e.icon,
            a = e.label
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement($.a, {
              containerStyle: ge.container,
              items: [{ label: m.a.createElement(ee.b, null, a), decoration: n }],
            }),
            m.a.createElement(ne.a, null),
          )
        },
        ue = { blocking: C.a.g8907fde, muting: C.a.f69c2298 },
        me = {
          mutual: { contextType: Z.a.FollowMutual, text: C.a.ae2205d1 },
          following: { contextType: Z.a.FollowFollowing, text: C.a.d960b55b },
          followedBy: { contextType: Z.a.FollowFollowed, text: C.a.b7f1e58a },
        },
        de = {},
        ye = function (e) {
          var n = e.communityJoinRequest,
            a = P()(re, n),
            t = a.user_relationship.community.id_str,
            l = a.user_relationship.user_results.result,
            i = a.state
          if (!l || 'User' !== l.__typename || !l.legacy) return null
          var r = l.id_str,
            o = l.legacy,
            s = o.blocking,
            c = o.description,
            u = o.followed_by,
            d = o.following,
            y = o.muting,
            g = o.name,
            p = o.profile_image_url_https,
            f = o.screen_name
          if (!p || !f || !g) return null
          switch (i) {
            case 'Approved':
              return m.a.createElement(ce, { icon: pe, label: oe({ screenName: f }) })
            case 'Denied':
              return m.a.createElement(ce, { icon: fe, label: se({ screenName: f }) })
            case 'Invalid':
              return null
          }
          var b = a.created_at,
            h = (function (e) {
              var n = e.following,
                a = e.isFollowedBy
              return n && a ? me.mutual : n ? me.following : a ? me.followedBy : void 0
            })({ isFollowedBy: u, following: d }),
            _ = (function (e) {
              var n = e.blocking,
                a = e.muting
              return n ? ue.blocking : a ? ue.muting : void 0
            })({ blocking: s, muting: y }),
            k = m.a.createElement(
              x.a,
              null,
              _ && m.a.createElement(ee.b, { color: 'red500', style: ge.bottomText }, _),
              m.a.createElement(G, { communityId: t, communityJoinRequestActions: a.actions, userId: r }),
            )
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(ae.a, {
              avatarUri: p,
              bottomControl: k,
              description: c || void 0,
              displayMode: 'UserDetailed',
              entities: de,
              name: g,
              screenName: f,
              screenNameSuffix: m.a.createElement(te.a, { color: 'gray700', timestamp: b }),
              socialContext: h,
              userId: r,
            }),
            m.a.createElement(ne.a, null),
          )
        },
        ge = A.a.create(function (e) {
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
        pe = m.a.createElement(le.a, { style: ge.icon }),
        fe = m.a.createElement(ie.a, { style: ge.icon }),
        be = C.a.addbb11e,
        he = C.a.c38131de,
        _e = void 0 !== U ? U : (U = a('Jt8P')),
        ke = function (e) {
          return e.id
        },
        ve = function (e) {
          return m.a.createElement(ye, { communityJoinRequest: e })
        },
        Ee = function () {
          return m.a.createElement(K.a, { header: be, message: he })
        },
        Ce = function (e) {
          var n = e.communityJoinRequests,
            a = e.fetchNext,
            t = P()(_e, n).items
          return m.a.createElement(w.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: ke,
            items: t,
            noItemsRenderer: Ee,
            onNearEnd: a,
            renderer: ve,
          })
        },
        Fe = a('VS6U'),
        Se = a('zCf4'),
        Ie = a('DQzJ'),
        Ke = C.a.gfccba44,
        we = 'member_requests',
        Te = { context: we },
        Re = void 0 !== q ? q : (q = a('gAl+')),
        Me = function (e) {
          var n = Object(Se.f)(),
            a = e.communityId,
            t = Object(Ie.a)(Re, { communityId: a }),
            l = t.data,
            i = t.fetchNext,
            r = l.community,
            o = r.join_requests_result,
            s = r.name
          if ('CommunityJoinRequests' === o.__typename) {
            var c = o.pending_join_requests_slice,
              u = m.a.createElement(v.a, {
                communityId: a,
                withCommunityRules: !0,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              d = m.a.createElement(Ce, { communityJoinRequests: c, fetchNext: i })
            return m.a.createElement(
              S.a,
              { behavioralEventViewType: we },
              m.a.createElement(Fe.a, {
                backLocation: '/i/communities/'.concat(a, '/tools'),
                history: n,
                primaryContent: d,
                sidebarContent: u,
                subtitle: s,
                title: Ke,
              }),
            )
          }
          return m.a.createElement(F.a, null)
        },
        Le = function (e) {
          var n = e.communityId
          return m.a.createElement(I.a, { errorConfig: Te }, m.a.createElement(Me, { communityId: n }))
        },
        xe = a('/de5'),
        Oe = a('yiKp'),
        Ae = a.n(Oe),
        je = (a('2G9S'), a('uFXj'), a('z84I'), a('3zvM')),
        Pe = a('lMB6'),
        Ne = Object(je.e)({ namespace: 'communityReports' }),
        Be = Pe.a.register(Ne),
        He = a('G6rE'),
        De = function (e, n) {
          var a,
            t = null === (a = n.tweetCase) || void 0 === a ? void 0 : a.reports
          return (t ? Be.selectMany(e, t) : []).map(function (n) {
            var a = n.user
            return Ae()(Ae()({}, n), {}, { reporter: He.e.select(e, a) })
          })
        },
        Ue = Object(b.a)().propsFromState(function () {
          return { reports: De }
        }),
        qe = a('855f'),
        ze = a('cHvH'),
        Ve = a('5mJL'),
        Qe = a('efqG'),
        We = a('21zW'),
        Je = function (e) {
          return (function (e) {
            var n = e.count,
              a = e.formattedCount
            return m.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              m.a.createElement(ee.b, { color: 'primary' }, C.a.ff0f7429({ count: n, formattedCount: a })),
            )
          })({ count: e, formattedCount: qe.a.getFormattedCount(e) })
        },
        Xe = function (e) {
          var n = e.report,
            a = e.withBottomBorder,
            t = n.created_at,
            l = n.reporter,
            i = m.a.createElement(te.a, { timestamp: t })
          return l
            ? m.a.createElement(ze.a, null, function (e) {
                var t = e.windowWidth
                return m.a.createElement(
                  x.a,
                  { style: a ? Ye.bottomBorder : null },
                  m.a.createElement(ae.a, {
                    avatarUri: l.profile_image_url_https,
                    decoration: i,
                    displayMode: 'UserCompact',
                    isProtected: l.protected,
                    isVerified: l.verified,
                    name: l.name,
                    screenName: l.screen_name,
                    style: t > A.a.theme.breakpoints.small ? Ye.userCell : void 0,
                    userId: l.id_str,
                  }),
                  m.a.createElement(
                    Ve.a,
                    { avatarCell: null },
                    m.a.createElement(ee.b, { color: 'gray700', size: 'subtext2', style: Ye.rule }, n.rule.name),
                  ),
                )
              })
            : null
        },
        Ge = Ue(function (e) {
          var n = m.a.useState(!1),
            a = R()(n, 2),
            t = a[0],
            l = a[1],
            i = e.reports,
            r = e.tweetCase,
            o = r.report_count,
            s = r.report_created_at_max
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(
              Qe.a,
              {
                contentStyle: Ye.popover,
                onDismiss: function () {
                  l(!1)
                },
                renderContent: function () {
                  return m.a.createElement(
                    x.a,
                    { style: Ye.contentContainer },
                    i.map(function (e, n) {
                      return m.a.createElement(Xe, { key: e.id_str, report: e, withBottomBorder: n < i.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: t ? 'forceVisible' : 'forceHidden',
              },
              m.a.createElement(
                ee.b,
                {
                  onPress: function () {
                    l(!0)
                  },
                },
                Je(o),
              ),
            ),
            m.a.createElement(We.a, null),
            m.a.createElement(te.a, { timestamp: s }),
          )
        }),
        Ye = A.a.create(function (e) {
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
        Ze = a('9EWH'),
        $e = Object(je.e)({ namespace: 'communityCases' }),
        en = {
          keepTweet: Object(je.c)($e, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var a = n.meta.entityId
              return Object(Ze.a)(e, function (e) {
                e.entities[a].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(je.c)($e, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var a = n.meta.entityId
              return Object(Ze.a)(e, function (e) {
                e.entities[a].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        nn = Ae()(Ae()({}, $e), en),
        an = Pe.a.register(nn),
        tn = a('XOJV'),
        ln = function (e, n) {
          var a = n.tweetId
          return a ? tn.a.selectHydrated(e, a) : void 0
        },
        rn = function (e, n) {
          var a = n.tweetId
          return an.select(e, a)
        },
        on = function (e, n) {
          var a = ln(e, n)
          return !!a && Object(f.h)(e, a)
        },
        sn = Object(b.a)()
          .propsFromState(function () {
            return { tweet: ln, tweetCase: rn, disableRemoveFromCommunity: on }
          })
          .propsFromActions(function () {
            return { keep: an.keepTweet, dismiss: an.dismissTweet }
          }),
        cn = a('b5s6'),
        un = a('mjJ+'),
        mn = a('IG7M'),
        dn = a('boUI'),
        yn = a('zIWA'),
        gn = a('fz3c'),
        pn = (a('yH/f'), a('n5fo')),
        fn = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        bn = C.a.ad10c66d,
        hn = C.a.c6caed9c,
        _n = function (e) {
          return m.a.createElement(ee.b, null, e)
        },
        kn = function (e) {
          var n = e.screenName
          switch (e.type) {
            case fn.Hidden:
              var a = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(n),
                t = [{ label: _n(a), decoration: En }]
              return m.a.createElement($.a, { accessibilityLabel: bn, containerStyle: vn.container, items: t })
            case fn.Kept:
              var l = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(n),
                i = [{ label: _n(l), decoration: Cn }]
              return m.a.createElement($.a, { accessibilityLabel: hn, containerStyle: vn.container, items: i })
            default:
              return null
          }
        },
        vn = A.a.create(function (e) {
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
        En = m.a.createElement(pn.a, { style: vn.icon }),
        Cn = m.a.createElement(le.a, { style: vn.icon }),
        Fn = { page: 'reported_tweets', component: 'tweet' },
        Sn = { viewType: 'tweet_moderation_case' },
        In = C.a.f1d9930c,
        Kn = C.a.a219e217,
        wn = C.a.fa524057,
        Tn = C.a.g30bc699,
        Rn = C.a.f0306107,
        Mn = C.a.b99364a5,
        Ln = sn(function (e) {
          var n,
            a = m.a.useContext(d.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            t = e.dismiss,
            l = e.keep,
            i = e.tweet,
            r = e.tweetCase,
            o = e.tweetId,
            s = null == i || null === (n = i.user) || void 0 === n ? void 0 : n.screen_name,
            c = m.a.useCallback(
              function (n) {
                if (i && s) {
                  var t = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: Tn({ screenName: s }),
                      Icon: dn.a,
                      link: '/'.concat(s),
                    },
                    {
                      text: Rn,
                      Icon: yn.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(gn.a.Tweet, '/').concat(i.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: Fn },
                      },
                      onClick: function () {
                        n()
                      },
                    },
                  ]
                  return (
                    a &&
                      !e.disableRemoveFromCommunity &&
                      t.push({
                        text: Mn({ screenName: s }),
                        Icon: ie.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(gn.a.RemoveCommunityMember, '/').concat(i.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Fn },
                        },
                        onClick: function () {
                          n()
                        },
                      }),
                    m.a.createElement(un.a, { items: t, onCloseRequested: n })
                  )
                }
                return null
              },
              [i, s, a, e.disableRemoveFromCommunity],
            ),
            u = function () {
              l(o)
            },
            g = function () {
              t(o)
            }
          if (s && (null == i ? void 0 : i.reportingVisibility) === gn.b.HiddenCommunityTweet)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(kn, { screenName: s, type: fn.Hidden }),
              m.a.createElement(ne.a, null),
            )
          if (
            (null != r && r.isDismissed) ||
            'community_tweet_member_removed' === (null == i ? void 0 : i.limited_actions)
          )
            return null
          if (s && null != r && r.isKept)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(kn, { screenName: s, type: fn.Kept }),
              m.a.createElement(ne.a, null),
            )
          if (!r) return null
          return m.a.createElement(
            y.a,
            { behavioralEventContext: Sn },
            m.a.createElement(
              x.a,
              { style: xn.container },
              m.a.createElement(
                x.a,
                { style: xn.reportsBar },
                m.a.createElement(Ge, { tweetCase: r }),
                m.a.createElement(mn.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: c,
                  style: xn.menu,
                }),
              ),
              m.a.createElement(cn.a, { tweetId: o }),
              i
                ? m.a.createElement(ze.a, null, function (e) {
                    e.windowHeight
                    var n = e.windowWidth <= A.a.theme.breakpoints.small
                    return m.a.createElement(
                      x.a,
                      { style: [xn.buttons, n && xn.buttonsMobile] },
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(gn.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Ae()(Ae()({}, Fn), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [xn.button, n && xn.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        In,
                      ),
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [xn.button, n && xn.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        wn,
                      ),
                    )
                  })
                : m.a.createElement(
                    x.a,
                    { style: xn.buttons },
                    m.a.createElement(
                      O.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: g,
                        style: xn.button,
                        type: 'primaryOutlined',
                      },
                      Kn,
                    ),
                  ),
            ),
            m.a.createElement(ne.a, null),
          )
        }),
        xn = A.a.create(function (e) {
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
        On = a('hqKg'),
        An = a('wAC9'),
        jn = function (e, n) {
          var a = n.community
          return a ? a.id_str : void 0
        },
        Pn = function () {
          return Object(On.createSelector)(jn, function (e) {
            return e
              ? (function (e) {
                  return Object(An.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (n) {
                      return Ae()(Ae()({}, n), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Nn = Object(b.a)()
          .propsFromState(function () {
            return { sliceModule: Pn() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Bn = a('FS1z'),
        Hn = C.a.c045c7b6,
        Dn = C.a.dffb0774,
        Un = C.a.cbb2a93c,
        qn = Nn(function (e) {
          var n = m.a.useContext(d.a).featureSwitches,
            a = e.community,
            t = e.history,
            l = e.sliceModule,
            i = a.id_str,
            r = a.name,
            o = (a || []).rules,
            s = (null == a ? void 0 : a.rules) && (null == a ? void 0 : a.rules.length) > 0,
            c = n.isTrue('responsive_web_communities_slices_enabled'),
            u = l
              ? m.a.createElement(Bn.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return m.a.createElement(K.a, { header: Dn, message: Un })
                  },
                  renderer: function (e) {
                    return m.a.createElement(Ln, { tweetId: e })
                  },
                })
              : null
          return m.a.createElement(
            S.a,
            { behavioralEventViewType: 'reported_tweets' },
            m.a.createElement(Fe.a, {
              backLocation: '/i/communities/'.concat(i),
              history: t,
              primaryContent: c ? u : null,
              sidebarContent: m.a.createElement(v.a, {
                communityId: i,
                rulesLimit: null == o ? void 0 : o.length,
                withCommunityRules: s,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: r,
              title: Hn,
            }),
          )
        }),
        zn = ['analytics', 'community'],
        Vn = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        Qn = { viewType: 'community' }
      function Wn(e) {
        var n = m.a.useContext(d.a).featureSwitches,
          a = (e.analytics, e.community),
          t = c()(e, zn),
          l = t.match.path,
          i = n.isTrue('c9s_request_to_join_enabled')
        return Object(g.c)(a.role)
          ? m.a.createElement(
              y.a,
              { behavioralEventContext: Qn },
              m.a.createElement(
                Se.d,
                null,
                m.a.createElement(
                  Se.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  m.a.createElement(qn, o()({}, t, { community: a })),
                ),
                i
                  ? m.a.createElement(
                      Se.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      m.a.createElement(Le, { communityId: a.id_str }),
                    )
                  : null,
                m.a.createElement(Se.b, null, m.a.createElement(xe.b, t)),
              ),
            )
          : m.a.createElement(xe.b, t)
      }
      function Jn(e) {
        var n = e.community,
          a = e.createLocalApiErrorHandler,
          t = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          i = c()(e, Vn),
          r = i.match.params.communityId,
          s = m.a.useCallback(
            function () {
              r && t(r).catch(a())
            },
            [r, a, t],
          )
        return (
          m.a.useEffect(
            function () {
              return s()
            },
            [s],
          ),
          m.a.createElement(k.a, {
            fetchStatus: l,
            onRequestRetry: s,
            render: function () {
              return n ? m.a.createElement(Wn, o()({}, i, { community: n })) : null
            },
          })
        )
      }
      n.default = _(Jn)
    },
    mWs5: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return p
      })
      a('KqXw'), a('MvUL'), a('2G9S')
      var t = a('ERkP'),
        l = a.n(t),
        i = a('3XMw'),
        r = a.n(i),
        o = a('M2mT'),
        s = a('zCf4'),
        c = a('MWbm'),
        u = a('mw9i'),
        m = a('0yYu'),
        d = a('/yvb'),
        y = a('rHpw'),
        g = r.a.i2209530
      function p(e) {
        var n = e.children,
          a = e.communityId,
          t = e.onSubmit,
          i = e.rightControl,
          r = e.screenType,
          y = e.secondaryBar,
          p = e.submitDisabled,
          b = e.subtitle,
          h = e.title,
          _ = e.withBottomBorder,
          k = e.withDetailOpen,
          v = Object(s.f)(),
          E = 'secondaryRoot' === r,
          C = '/i/communities/'.concat(a),
          F = ''.concat(C, '/tools'),
          S = E ? C : F,
          I = l.a.useCallback(
            function () {
              E ? v.replace(S) : v.goBack({ backLocation: S })
            },
            [S, v, E],
          )
        return l.a.createElement(
          o.a,
          {
            backLocation: S,
            onBackClick: I,
            rightControl: i,
            screenType: r,
            secondaryBar: y,
            showSubtitleOnWideDetail: !1,
            subtitle: b,
            title: h,
            withBottomBorder: _,
            withDetailOpen: k,
          },
          l.a.createElement(
            u.a,
            { style: f.contentRoot },
            l.a.createElement(c.a, { style: f.chilrenRoot }, n),
            t
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(m.a, null),
                  l.a.createElement(
                    u.a,
                    { style: f.buttonContainer },
                    l.a.createElement(d.a, { disabled: p, onPress: t, style: f.button, type: 'brandFilled' }, g),
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
    mys5: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'EditRuleScreen', function () {
          return P
        })
      var t = a('ddV6'),
        l = a.n(t),
        i = (a('1t7P'), a('jQ/y'), a('ho0z'), a('ERkP')),
        r = a.n(i),
        o = a('v6aA'),
        s = a('eSoz'),
        c = a('xZGM'),
        u = a('rxPX'),
        m = a('0KEI'),
        d = a('1Idg'),
        y = function (e, n) {
          return Object(c.C)(e, c.h)
        },
        g = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: y }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.y)(c.h)
              },
              editRule: s.c.editRule,
              removeRule: s.c.removeRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_rule' }),
        p = a('k49u'),
        f = a('jHSc'),
        b = a('3XMw'),
        h = a.n(b),
        _ = a('5FtR'),
        k = a('OwKm'),
        v = a('AfjF'),
        E = a('MWbm'),
        C = a('/yvb'),
        F = a('jtO7'),
        S = a('4zmP'),
        I = a('eb3s'),
        K = a('rHpw'),
        w = h.a.h99020ef,
        T = h.a.i2209530,
        R = h.a.a1c93d73,
        M = h.a.f74a5adb,
        L = h.a.fbb0ed91,
        x = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        j = h.a.c3a0d44e
      function P(e) {
        var n = r.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          a = e.addRuleInformEducationFlag,
          t = e.community,
          i = e.createLocalApiErrorHandler,
          s = e.editRule,
          c = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          g = t.id_str,
          b = t.rules,
          h = r.a.useState(''),
          K = l()(h, 2),
          P = K[0],
          B = K[1],
          H = r.a.useState(''),
          D = l()(H, 2),
          U = D[0],
          q = D[1],
          z = r.a.useState(!1),
          V = l()(z, 2),
          Q = V[0],
          W = V[1],
          J = r.a.useState(''),
          X = l()(J, 2),
          G = X[0],
          Y = X[1],
          Z = r.a.useState(!1),
          $ = l()(Z, 2),
          ee = $[0],
          ne = $[1],
          ae = r.a.useState(!1),
          te = l()(ae, 2),
          le = te[0],
          ie = te[1],
          re = r.a.useCallback(
            function (e) {
              var n = e.description,
                a = e.name,
                t = e.valid
              B(a), q(n), W(t)
            },
            [B, q, W],
          ),
          oe = r.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    a = n.code === p.a.GenericBadRequest && n.message ? n.message : R
                  return Y(a), W(!1), []
                },
              })
              'string' == typeof d &&
                s(g, { ruleId: d, name: P, description: U })
                  .then(function () {
                    c.goBack({ backLocation: '/i/communities/'.concat(g, '/tools/rules') })
                  })
                  .catch(e)
            },
            [g, P, U, d, s, c, i],
          ),
          se = r.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    a = n.code === p.a.GenericBadRequest && n.message ? n.message : R
                  return Y(a), ne(!1), []
                },
              })
              'string' == typeof d &&
                u(g, { ruleId: d })
                  .then(function () {
                    c.goBack({ backLocation: '/i/communities/'.concat(g, '/tools/rules') })
                  })
                  .catch(e)
            },
            [g, d, u, c, i],
          )
        if (!d || !m) return r.a.createElement(_.a, { to: '/i/communities/'.concat(g, '/tools/rules') })
        var ce = m.description,
          ue = m.name,
          me = r.a.createElement(
            C.a,
            {
              disabled: !Q,
              onPress: function () {
                y ? ie(!0) : oe()
              },
              size: 'small',
              type: 'brandFilled',
            },
            T,
          ),
          de = 1 === b.length,
          ye = n
            ? r.a.createElement(
                E.a,
                { style: N.delete },
                r.a.createElement(F.a, {
                  color: 'red500',
                  disabled: de,
                  label: L,
                  onPress: function () {
                    ne(!0)
                  },
                }),
              )
            : void 0,
          ge = de ? r.a.createElement(E.a, { style: N.callout }, r.a.createElement(S.a, { text: M })) : void 0,
          pe = ee
            ? r.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: x,
                onCancel: function () {
                  ne(!1)
                },
                onConfirm: se,
                text: O,
              })
            : void 0,
          fe = le
            ? r.a.createElement(v.a, {
                onCancel: function () {
                  ie(!1)
                },
                onConfirm: function () {
                  a(), oe(), ie(!1)
                },
              })
            : void 0
        return r.a.createElement(
          f.b,
          { behavioralEventViewType: 'rules', history: c, rightControl: me, title: w },
          ge,
          r.a.createElement(k.a, { description: ce || '', errorText: G, name: ue, onChange: re }),
          ye,
          pe,
          fe,
        )
      }
      n.default = g(P)
      var N = K.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, n, a) {
      'use strict'
      a.d(n, 'b', function () {
        return P
      })
      var t = a('ddV6'),
        l = a.n(t),
        i = a('VrFO'),
        r = a.n(i),
        o = a('Y9Ll'),
        s = a.n(o),
        c = a('1Pcy'),
        u = a.n(c),
        m = a('5Yy7'),
        d = a.n(m),
        y = a('2VqO'),
        g = a.n(y),
        p = a('KEM+'),
        f = a.n(p),
        b = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        h = a.n(b),
        _ = a('pXBW'),
        k = a('6/RC'),
        v = a('UIzd'),
        E = a.n(v),
        C = a('kGix')
      a.d(n, 'a', function () {
        return C.a
      })
      var F = a('fs1G'),
        S = a('0KEI'),
        I = a('lU4h'),
        K = a.n(I),
        w = a('21nk'),
        T = a.n(w),
        R = a('bCEw'),
        M = a.n(R),
        L = a('Ud88'),
        x = a.n(L),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: F.a })
        },
        A = (function (e) {
          d()(a, e)
          var n = g()(a)
          function a() {
            var e
            r()(this, a)
            for (var t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i]
            return (e = n.call.apply(n, [this].concat(l))), f()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              a,
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
            a
          )
        })(h.a.Component),
        j = function (e) {
          var n = e.query,
            a = e.queryRef,
            t = e.render,
            l = T()(n, a)
          return t({ fetchStatus: C.a.LOADED, data: l, error: null, retry: F.a })
        },
        P = function (e, n) {
          if (k.canUseDOM)
            return function (a) {
              var t = a.fetchPolicy,
                i = void 0 === t ? 'store-or-network' : t,
                r = a.render,
                o = a.variables,
                s = M()(e),
                c = l()(s, 2),
                u = c[0],
                m = c[1],
                d = Object(S.useCreateLocalApiErrorHandler)(n.errorConfig.context),
                y = K()(o),
                g = l()(y, 1)[0],
                p = h.a.useCallback(
                  function () {
                    m(g, { fetchPolicy: 'network-only' })
                  },
                  [m, g],
                )
              return (
                h.a.useLayoutEffect(
                  function () {
                    m(g, { fetchPolicy: i })
                  },
                  [i, m, g],
                ),
                u
                  ? h.a.createElement(
                      h.a.Suspense,
                      { fallback: h.a.createElement(O, { render: r }) },
                      h.a.createElement(
                        A,
                        { errorHandler: d(n.errorConfig.options || {}), key: u.fetchKey, retry: p },
                        function (n, a) {
                          return n
                            ? r({ fetchStatus: C.a.FAILED, error: n, data: null, retry: a })
                            : h.a.createElement(j, { query: e, queryRef: u, render: r })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (t) {
            t.fetchPolicy
            var i = t.render,
              r = t.variables,
              o = x()(),
              s = Object(S.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              c = K()(r),
              u = l()(c, 1)[0],
              m = a.get(o)
            if (m) return m
            var d = h.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: C.a.LOADED, data: e, error: null, retry: F.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (s(n.errorConfig.options || {})(e),
                        i({ fetchStatus: C.a.FAILED, data: null, error: e, retry: F.a }))
                      : h.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(o, e).get.bind(a, o) }
                })
            })
            return h.a.createElement(h.a.Suspense, null, h.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'AddRuleScreen', function () {
          return w
        })
      var t = a('ddV6'),
        l = a.n(t),
        i = (a('1t7P'), a('jQ/y'), a('ho0z'), a('ERkP')),
        r = a.n(i),
        o = a('v6aA'),
        s = a('eSoz'),
        c = a('xZGM'),
        u = a('rxPX'),
        m = a('0KEI'),
        d = function (e, n) {
          return Object(c.C)(e, c.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.y)(c.h)
              },
              createRule: s.c.createRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_ADD_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'add_rule' }),
        g = a('k49u'),
        p = a('jHSc'),
        f = a('3XMw'),
        b = a.n(f),
        h = a('OwKm'),
        _ = a('AfjF'),
        k = a('/yvb'),
        v = a('eb3s'),
        E = b.a.j560c8ea,
        C = b.a.i2209530,
        F = b.a.gaa3239a,
        S = b.a.a67445d5,
        I = b.a.fcbe0992,
        K = b.a.j24c37b2
      function w(e) {
        var n = r.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          a = e.addRuleInformEducationFlag,
          t = e.community,
          i = e.createLocalApiErrorHandler,
          s = e.createRule,
          c = e.history,
          u = e.shouldShowRuleInformEducation,
          m = t.id_str,
          d = t.rules,
          y = r.a.useState(''),
          f = l()(y, 2),
          b = f[0],
          w = f[1],
          T = r.a.useState(''),
          R = l()(T, 2),
          M = R[0],
          L = R[1],
          x = r.a.useState(!1),
          O = l()(x, 2),
          A = O[0],
          j = O[1],
          P = r.a.useState(!1),
          N = l()(P, 2),
          B = N[0],
          H = N[1],
          D = r.a.useState(''),
          U = l()(D, 2),
          q = U[0],
          z = U[1],
          V = r.a.useState(!1),
          Q = l()(V, 2),
          W = Q[0],
          J = Q[1],
          X = r.a.useCallback(
            function (e) {
              var n = e.description,
                a = e.name,
                t = e.valid
              z(''), w(a), L(n), j(t)
            },
            [w, L, j],
          ),
          G = r.a.useCallback(
            function () {
              H(!0)
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    a = n.code === g.a.GenericBadRequest && n.message ? n.message : F
                  return z(a), j(!1), []
                },
              })
              s(m, { name: b, description: M })
                .then(function () {
                  c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, M, s, c, i],
          ),
          Y = r.a.useCallback(
            function () {
              u ? J(!0) : G()
            },
            [G, u],
          ),
          Z = r.a.createElement(k.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= n,
          ee = r.a.createElement(v.a, {
            confirmButtonLabel: K,
            headline: S,
            onConfirm: function () {
              c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: n }),
            withCancelButton: !1,
          }),
          ne = W
            ? r.a.createElement(_.a, {
                onCancel: function () {
                  J(!1)
                },
                onConfirm: function () {
                  a(), G(), J(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : r.a.createElement(
              p.b,
              { behavioralEventViewType: 'add_rule', history: c, rightControl: Z, title: E },
              r.a.createElement(h.a, { description: '', errorText: q, name: '', onChange: X }),
              ne,
            )
      }
      n.default = y(w)
    },
    nmVb: function (e, n, a) {
      'use strict'
      var t = a('IGGJ')
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e) {
          for (var n = [], a = (0, l.default)(e), t = 0; t < a.length; t++) n.push(a[t].hashtag)
          return n
        })
      var l = t(a('yyPN'))
      e.exports = n.default
    },
    ogGF: function (e, n, a) {
      'use strict'
      var t,
        l = a('97Jx'),
        i = a.n(l),
        r = a('m3Bd'),
        o = a.n(r),
        s = a('ERkP'),
        c = a.n(s),
        u = a('/yvb'),
        m = a('3XMw'),
        d = a.n(m),
        y = a('pwey'),
        g = (a('enFi'), a('jAXQ')),
        p = a.n(g),
        f = ['community'],
        b = d.a.b139b549,
        h = c.a.createElement(y.a, null),
        _ = function (e) {
          var n = e.community,
            l = o()(e, f),
            r = p()(void 0 !== t ? t : (t = a('qre1')), n)
          if (!r || 'CommunityInvitesUnavailable' === r.invites_result.__typename) return null
          var s = '/i/communities/'.concat(r.rest_id, '/invite')
          return c.a.createElement(u.a, i()({ accessibilityLabel: b, icon: h, link: s, type: 'primaryText' }, l))
        }
      n.a = c.a.memo(_)
    },
    pChJ: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
      n.default = t
    },
    'pd/v': function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (t = [
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
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [i],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (c = {
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
            argumentDefinitions: t,
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
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
                      o,
                      s,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'InlineFragment', selections: [r], type: 'CommunityJoinRequests', abstractKey: null },
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
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          c,
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
            id: 'MMT67l6ylVMDenMLi5G-8Q',
            metadata: {},
            name: 'edit_CommunityRestricted_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (n.default = y)
    },
    qre1: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
      n.default = t
    },
    's8G+': function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        i = a('v6aA')
      n.a = function (e) {
        var n = l.a.useContext(i.a).featureSwitches
        return l.a.useMemo(
          function () {
            return n.isTrue(e)
          },
          [e, n],
        )
      }
    },
    tFuX: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (t = [
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
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [i],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (c = {
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
            argumentDefinitions: t,
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
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
                      o,
                      s,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'InlineFragment', selections: [r], type: 'CommunityJoinRequests', abstractKey: null },
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
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          c,
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
            id: 's3bbji6oNTSXrOD6TRIpvg',
            metadata: {},
            name: 'edit_CommunityOpen_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = 'ea1908fb41cb57016d070125122b615d'), (n.default = y)
    },
    tgdH: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
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
                  { args: null, kind: 'FragmentSpread', name: 'FollowUserButtonRelay_user' },
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
        hash: '92044cec0424752d2ed5f23018915c46',
      }
      n.default = t
    },
    tnnC: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      n.default = t
    },
    tot2: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityPeopleScreen', function () {
          return M
        })
      var t = a('ddV6'),
        l = a.n(t),
        i = (a('vrRf'), a('ERkP')),
        r = a.n(i),
        o = a('+Kfv'),
        s = a('es0u'),
        c = a('LgBi'),
        u = a('UZ0O'),
        m = a('1Idg'),
        d = a('eSoz'),
        y = a('rxPX'),
        g = a('0KEI'),
        p = Object(y.a)()
          .propsFromState(function () {
            return { community: m.a, communityId: m.c, screenName: m.i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        f = a('3XMw'),
        b = a.n(f),
        h = a('gDCe'),
        _ = a('yoO3'),
        k = a('VS6U'),
        v = a('k/OQ'),
        E = a('krnS'),
        C = a('zCf4'),
        F = b.a.h5245afa,
        S = b.a.dc6ce7b4,
        I = b.a.f8321d82,
        K = b.a.ga2aa43c,
        w = { viewType: 'community' },
        T = { viewType: 'all' },
        R = { viewType: 'moderators' },
        M = r.a.memo(function (e) {
          var n = e.community,
            a = e.communityId,
            t = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            m = e.history,
            d = e.location
          r.a.useEffect(
            function () {
              a && i(a).catch(t())
            },
            [a, t, i],
          )
          var y = r.a.useState(!1),
            g = l()(y, 2),
            p = g[0],
            f = g[1],
            b = (null == d ? void 0 : d.pathname) && d.pathname.indexOf('members') > 0,
            M = b ? S : K,
            L = r.a.useMemo(
              function () {
                return a
                  ? [
                      { to: { pathname: '/i/communities/'.concat(a, '/members'), state: d.state }, label: I, key: I },
                      {
                        to: { pathname: '/i/communities/'.concat(a, '/moderators'), state: d.state },
                        label: K,
                        key: K,
                      },
                    ]
                  : []
              },
              [a, d.state],
            ),
            x = a
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, { community: n, communityId: a, onIsSearchingChange: f }),
                  p
                    ? null
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(v.a, { accessibilityLabel: M, links: L }),
                        r.a.createElement(
                          C.d,
                          null,
                          r.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(a, '/members') },
                            r.a.createElement(
                              o.a,
                              { behavioralEventContext: T },
                              r.a.createElement(E.b, {
                                communityId: a,
                                mode: E.a.Members,
                                viewerRole: null == n ? void 0 : n.role,
                              }),
                            ),
                          ),
                          r.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(a, '/moderators') },
                            r.a.createElement(
                              o.a,
                              { behavioralEventContext: R },
                              r.a.createElement(h.a, { community: n }),
                              r.a.createElement(E.b, {
                                communityId: a,
                                mode: E.a.Moderators,
                                viewerRole: null == n ? void 0 : n.role,
                              }),
                            ),
                          ),
                        ),
                      ),
                )
              : null
          return r.a.createElement(
            o.a,
            { behavioralEventContext: w },
            r.a.createElement(
              _.a,
              { behavioralEventViewType: 'members' },
              r.a.createElement(k.a, {
                backLocation: a ? '/i/communities/'.concat(a, '/') : '/',
                documentTitle: F,
                history: m,
                primaryContent: x,
                rightControl: b && a ? r.a.createElement(c.a, { communityId: a }) : null,
                sidebarContent: r.a.createElement(s.a, null),
                title: S,
              }),
            ),
          )
        }),
        L = p(M)
      n.default = L
    },
    u0MR: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunitiesScreen', function () {
          return en
        })
      var t,
        l,
        i = a('VrFO'),
        r = a.n(i),
        o = a('Y9Ll'),
        s = a.n(o),
        c = a('1Pcy'),
        u = a.n(c),
        m = a('5Yy7'),
        d = a.n(m),
        y = a('2VqO'),
        g = a.n(y),
        p = a('KEM+'),
        f = a.n(p),
        b = (a('2G9S'), a('vrRf'), a('ERkP')),
        h = a.n(b),
        _ = a('+Kfv'),
        k = a('es0u'),
        v = a('cL2e'),
        E = a('1Idg'),
        C = a('li/m'),
        F = a('G6rE'),
        S = a('rxPX'),
        I = a('0KEI'),
        K = function (e, n) {
          var a = E.i(e, n)
          if (a) return F.e.selectByScreenName(e, a)
        },
        w = Object(S.a)()
          .propsFromState(function () {
            return { hasCommunityMemberships: C.d, screenName: E.i, user: K }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: F.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        T = a('3XMw'),
        R = a.n(T),
        M = a('5oT/'),
        L = a('/yvb'),
        x = a('rHpw'),
        O = (a('enFi'), a('jAXQ')),
        A = a.n(O),
        j = R.a.a226497c,
        P = h.a.memo(function (e) {
          return 'CommunityCreateAction' !== A()(void 0 !== t ? t : (t = a('zum0')), e.createActionResult).__typename
            ? null
            : h.a.createElement(L.a, {
                icon: h.a.createElement(M.a, { accessibilityLabel: j, style: N.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        N = x.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        B = h.a.memo(P),
        H = a('Fr3L'),
        D = a('IAZG'),
        U = { context: 'CommunityCreateButton' },
        q = void 0 !== l ? l : (l = a('S91Q')),
        z = function (e) {
          var n,
            a =
              null === (n = Object(D.a)(q, {}, { fetchPolicy: 'store-and-network' }).viewer) || void 0 === n
                ? void 0
                : n.create_community_action_result
          return a ? h.a.createElement(B, { createActionResult: a }) : null
        },
        V = function (e) {
          return h.a.createElement(H.a, { errorConfig: U }, h.a.createElement(z, null))
        },
        Q = h.a.memo(V),
        W = a('GOQE'),
        J = (a('z84I'), a('M+/F'), a('yiKp')),
        X = a.n(J),
        G = (a('ho0z'), a('tVqn'), a('uFXj'), a('v6aA')),
        Y = a('YeIG'),
        Z = 'community-thumbnail-image',
        $ = 'community-thumbnail-name-container',
        ee = a('MWbm'),
        ne = a('X00g'),
        ae = a('htQn'),
        te = a('9Xij'),
        le = a('TIdA'),
        ie = a('A91F'),
        re = a('t62R'),
        oe = { type: 'serversideContextKey', serversideContextType: 'community' },
        se = x.a.create(function (e) {
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
              width: 'calc(('.concat(x.a.theme.spaces.space36, ' * 3) + ').concat(x.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        ce = function (e) {
          var n = h.a.useContext(G.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            a = e.community,
            t = a.id_str,
            l = a.media,
            i = a.name,
            r = a.theme,
            o = h.a.useMemo(
              function () {
                return { clientEntity: X()(X()({}, oe), {}, { serversideContextId: t || '' }), viewType: 'thumbnail' }
              },
              [t],
            )
          if (Object(Y.a)(null == l ? void 0 : l.image) || !i) return null
          var s = null == l ? void 0 : l.image,
            c = null == l ? void 0 : l.crop,
            u = x.a.theme.aspectRatios.communityBanner,
            m = n ? ne.a.getCommunityBackgroundColor(r) : x.a.theme.colors.translucentBlack77
          return s
            ? h.a.createElement(
                _.a,
                { behavioralEventContext: o },
                h.a.createElement(
                  ae.a,
                  { link: '/i/communities/'.concat(t), style: se.root },
                  h.a.createElement(
                    ee.a,
                    { style: se.container },
                    h.a.createElement(
                      te.a,
                      { ratio: u },
                      h.a.createElement(le.a, {
                        accessibilityLabel: '',
                        aspectMode: ie.a.exact(u),
                        backgroundColor: x.a.theme.colors.gray300,
                        cropCandidates: c,
                        image: s,
                        testID: Z,
                      }),
                    ),
                    h.a.createElement(
                      ee.a,
                      { style: [se.name, { backgroundColor: m }], testID: $ },
                      h.a.createElement(
                        re.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        i.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        ue = a('eSoz'),
        me = a('o3oN'),
        de = function (e) {
          var n = Object(me.c)(e)
          return ue.c.selectMany(e, n)
        },
        ye = Object(S.a)()
          .propsFromState(function () {
            return { communities: de, fetchStatus: me.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: me.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        ge = a('kGix'),
        pe = a('6iuV'),
        fe = a('rC8y'),
        be = R.a.d228a9a0,
        he = h.a.memo(function (e) {
          var n = e.communities,
            a = e.createLocalApiErrorHandler,
            t = e.fetchCommunityMemberships,
            l = e.fetchStatus,
            i = e.location.pathname
          h.a.useEffect(
            function () {
              l === ge.a.NONE && t().catch(a())
            },
            [a, t, l],
          )
          var r = h.a.useMemo(
            function () {
              return n.slice(0, 10).map(function (e) {
                return h.a.createElement(ce, { community: e, key: e.id_str })
              })
            },
            [n],
          )
          return Object(Y.a)(n)
            ? null
            : h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(pe.a, { style: [_e.paddingHorizontal, _e.bottomBorder] }, r),
                n.length > 10 &&
                  h.a.createElement(
                    ee.a,
                    { style: _e.bottomBorder },
                    h.a.createElement(fe.a, { link: '/'.concat(i, '/memberships'), text: be }),
                  ),
              )
        }),
        _e = x.a.create(function (e) {
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
        ke = ye(he),
        ve = a('WpDa'),
        Ee = a('ZNT5'),
        Ce = Object(Ee.a)({
          timelineId: 'communitiesMainTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMainTimeline
          },
          getEndpointParams: function (e) {
            var n = e.count,
              a = e.cursor
            return { count: n, cursor: 'string' == typeof a ? a : void 0 }
          },
          context: 'FETCH_COMMUNITIES_MAIN_TIMELINE',
          perfKey: 'communitiesMainTimeline',
          formatResponse: ve.a,
        }),
        Fe = a('OUEC'),
        Se = a('dwig'),
        Ie = a('0+qk'),
        Ke = a('oQhu'),
        we = a('7BdX'),
        Te = a('fTQJ'),
        Re = a('QRqA'),
        Me = a('FIs5'),
        Le = a('mw9i'),
        xe = R.a.c63602d3,
        Oe = R.a.d7346631,
        Ae = R.a.fbd12fea,
        je = (function (e) {
          d()(a, e)
          var n = g()(a)
          function a() {
            var e
            r()(this, a)
            for (var t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              f()(
                u()(e),
                '_getModule',
                Object(Ke.a)(function () {
                  return Ce
                }),
              ),
              f()(u()(e), '_renderEmptyTimeline', function () {
                return h.a.createElement(Me.a, { header: Oe, message: Ae })
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.hasCommunityMemberships,
                    a = e.history,
                    t = e.isLoggedInUser,
                    l = e.location,
                    i = this._getModule(),
                    r = this._c9sParticipationEnabled && n ? h.a.createElement(Ie.a, { history: a }) : null
                  return t && i
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(Re.a, null),
                        h.a.createElement(
                          Se.a,
                          { container: Le.a, fab: r },
                          h.a.createElement(ke, { location: l }),
                          h.a.createElement(Te.a, {
                            entryConfiguration: Fe.a,
                            module: i,
                            prerollDisplayLocation: we.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: xe,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      f()(je, 'contextType', G.a)
      var Pe = je,
        Ne = a('hqKg'),
        Be = function (e, n) {
          var a = n.user
          return a ? a.id_str : void 0
        },
        He = function () {
          return Object(Ne.createSelector)(Be, function (e) {
            return e
              ? (function (e) {
                  return Object(Ee.a)({
                    timelineId: 'communityMemberships-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchCommunityMemberships
                    },
                    getEndpointParams: function (n) {
                      var a = n.cursor
                      return { cursor: 'string' == typeof a ? a : void 0, userId: e }
                    },
                    context: 'FETCH_COMMUNITY_MEMBERSHIPS_TIMELINE',
                    perfKey: 'communityMemberships',
                    formatResponse: ve.a,
                  })
                })(e)
              : void 0
          })
        },
        De = Object(S.a)()
          .propsFromState(function () {
            return { urtModule: He() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Ue = a('yoO3'),
        qe = R.a.c63602d3,
        ze = R.a.d7346631,
        Ve = R.a.hb01fe46,
        Qe = De(
          (function (e) {
            d()(a, e)
            var n = g()(a)
            function a() {
              var e
              r()(this, a)
              for (var t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i]
              return (
                (e = n.call.apply(n, [this].concat(l))),
                f()(u()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? h.a.createElement(Me.a, { header: ze, message: Ve }) : null
                }),
                e
              )
            }
            return (
              s()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.urtModule
                    return e
                      ? h.a.createElement(
                          Ue.a,
                          { behavioralEventViewType: 'all' },
                          h.a.createElement(Te.a, {
                            entryConfiguration: Fe.a,
                            module: e,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyState,
                            title: qe,
                          }),
                        )
                      : null
                  },
                },
              ]),
              a
            )
          })(h.a.Component),
        ),
        We = a('5FtR'),
        Je = a('Y6L+'),
        Xe = a('VS6U'),
        Ge = a('zCf4'),
        Ye = R.a.h02a6fe5,
        Ze = R.a.c63602d3,
        $e = { viewType: 'communities' },
        en = (function (e) {
          d()(a, e)
          var n = g()(a)
          function a() {
            var e
            r()(this, a)
            for (var t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_renderRightControl', function () {
                return h.a.createElement(
                  ee.a,
                  { style: nn.rightControl },
                  h.a.createElement(v.b, null),
                  h.a.createElement(Q, null),
                )
              }),
              f()(u()(e), '_renderPrimaryContent', function () {
                var n = e.props,
                  a = n.hasCommunityMemberships,
                  t = n.history,
                  l = n.location,
                  i = n.user,
                  r = e._isLoggedInUser()
                return h.a.createElement(
                  Ge.d,
                  null,
                  h.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Je.J, '/communities') },
                    h.a.createElement(Pe, { hasCommunityMemberships: a, history: t, isLoggedInUser: r, location: l }),
                  ),
                  h.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Je.J, '/communities/memberships') },
                    h.a.createElement(Qe, { isLoggedInUser: r, user: i }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (n) {
                var a = n || e.props,
                  t = a.createLocalApiErrorHandler,
                  l = a.fetchOneUserByScreenNameIfNeeded,
                  i = a.screenName
                i && l(i).catch(t(W.a))
              }),
              e
            )
          }
          return (
            s()(a, [
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
                  var e = this.props.history
                  if (this._isLoggedInUser()) {
                    var n = this._isMembershipsView() ? Ze : Ye
                    return h.a.createElement(
                      _.a,
                      { behavioralEventContext: $e },
                      h.a.createElement(Xe.a, {
                        backLocation: '/',
                        history: e,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: h.a.createElement(k.a, null),
                        title: n,
                      }),
                    )
                  }
                  return h.a.createElement(We.a, { to: '/' })
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      f()(en, 'contextType', G.a)
      var nn = x.a.create(function (e) {
          return { rightControl: { color: e.colors.text, display: 'flex', flexDirection: 'row' } }
        }),
        an = w(en)
      n.default = an
    },
    uI9t: function (e, n, a) {
      'use strict'
      var t = a('VrFO'),
        l = a.n(t),
        i = a('Y9Ll'),
        r = a.n(i),
        o = a('5Yy7'),
        s = a.n(o),
        c = a('2VqO'),
        u = a.n(c),
        m = a('KEM+'),
        d = a.n(m),
        y = (a('z84I'), a('ERkP')),
        g = a.n(y),
        p = a('yiKp'),
        f = a.n(p),
        b = a('1Pcy'),
        h = a.n(b),
        _ = (a('2G9S'), a('ho0z'), a('I4+6')),
        k = a('cm6r'),
        v = a('rHpw'),
        E = a('k/Ka'),
        C = a('MWbm'),
        F = a('x0mb'),
        S = a('IMYl'),
        I = (function (e) {
          s()(a, e)
          var n = u()(a)
          function a() {
            var e
            l()(this, a)
            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(i))),
              d()(h()(e), '_radioRef', g.a.createRef()),
              d()(h()(e), '_handleChange', function () {
                var n = e.props,
                  a = n.colorName
                ;(0, n.onChange)(a)
              }),
              e
            )
          }
          return (
            r()(a, [
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
                    a = e.colorName,
                    t = e.isSelected,
                    l = e.name,
                    i = e.style,
                    r = v.a.theme.colors[a],
                    o = _.a.generate({
                      backgroundColor: v.a.theme.colors.transparent,
                      color: r,
                      withFocusWithinFocusRing: !0,
                    })
                  return g.a.createElement(
                    C.a,
                    { style: [K.container, i] },
                    g.a.createElement(
                      k.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [K.choice, K.choiceContainer] },
                      g.a.createElement(F.a, { style: [K.choice, { color: r }] }),
                      Object(E.a)('input', {
                        accessibilityLabel: n,
                        name: l,
                        checked: t,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: K.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    t &&
                      g.a.createElement(
                        C.a,
                        { style: [K.choice, K.checkMarkContainer] },
                        g.a.createElement(S.a, { style: [K.choiceSelected, { backgroundColor: r }] }),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component),
        K = v.a.create(function (e) {
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
              f()({}, v.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        w = I,
        T = 1,
        R = (function (e) {
          s()(a, e)
          var n = u()(a)
          function a() {
            var e
            return l()(this, a), ((e = n.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(T, '_LABEL')), (T += 1), e
          }
          return (
            r()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    n = this.props,
                    a = n.accessibilityLabel,
                    t = n.autoFocus,
                    l = n.layout,
                    i = n.onChange,
                    r = n.options,
                    o = n.value,
                    s = 'two-rows' === l,
                    c = [M.root, s && M.flexWrap],
                    u = s ? { width: ''.concat((2 / r.length) * 100, '%') } : void 0
                  return g.a.createElement(
                    C.a,
                    { accessibilityLabel: a, accessibilityRole: 'radiogroup', style: c },
                    r.map(function (n) {
                      var a = n.accessibilityLabel,
                        l = n.colorName
                      return g.a.createElement(w, {
                        accessibilityLabel: a,
                        autoFocus: t && o === l,
                        colorName: l,
                        isSelected: o === l,
                        key: l,
                        name: e._colorPickerId,
                        onChange: i,
                        style: u,
                      })
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      d()(R, 'defaultProps', { layout: 'one-row' })
      var M = v.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      n.a = R
    },
    w9f9: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r,
        o,
        s,
        c,
        u = {
          fragment: {
            argumentDefinitions: (t = [
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
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                          (r = {
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
            argumentDefinitions: t,
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
                    args: (s = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'follow_request_sent',
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
                                        name: 'blocking',
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
                                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_following',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_follow_eligible',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_followed_by',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'smart_blocking',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'HighlightedUserLabelResponse',
                                    kind: 'LinkedField',
                                    name: 'affiliates_highlighted_label',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'HighlightedUserLabel',
                                        kind: 'LinkedField',
                                        name: 'label',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'user_label_type',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  r,
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          r,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: s,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityModerators_Query_moderators_slice',
                    kind: 'LinkedHandle',
                    name: 'moderators_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  c,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'tTHlmD-9a1M98LIGuwe1qA',
            metadata: { sliceInfoPath: ['community', 'moderators_slice', 'slice_info'] },
            name: 'moderatorsSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (n.default = u)
    },
    'weg/': function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDetailFacePile_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityFacePile_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityMemberCount_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'f7e39a44a3d05288497e302dba9f17fd',
      }
      n.default = t
    },
    xPe1: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunitySettingsRouter', function () {
          return tn
        })
      a('KqXw'), a('WNMA'), a('1t7P'), a('jQ/y'), a('ho0z')
      var t = a('ERkP'),
        l = a.n(t),
        i = a('v6aA'),
        r = a('rxPX'),
        o = Object(r.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        s = a('ddV6'),
        c = a.n(s),
        u = a('jTgF'),
        m = a('AspN'),
        d = a('eSoz'),
        y = a('0KEI'),
        g = function (e, n) {
          var a = n.localMediaId,
            t = a && isFinite(a) ? m.k(e, a) : []
          return c()(t, 1)[0]
        },
        p = Object(r.a)()
          .propsFromState(function () {
            return { localMedia: g }
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
        f = a('3XMw'),
        b = a.n(f),
        h = a('Nh1N'),
        _ = a('JAeQ'),
        k = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        v = Object(k.a)({
          loader: function () {
            return Promise.all([a.e(0), a.e(3), a.e(7), a.e(9), a.e(177)]).then(a.bind(null, 'P68U'))
          },
        }),
        E = a('eyty'),
        C = a('MWbm'),
        F = a('rHpw'),
        S = a('TIdA'),
        I = a('A91F'),
        K = a('4zmP'),
        w = a('eb3s'),
        T = b.a.a49f884d,
        R = b.a.ea965b81,
        M = b.a.gea6cc19,
        L = b.a.cfd2f35d,
        x = b.a.j35d3ad6,
        O = b.a.f1e8fb21,
        A = b.a.fc2a5c92,
        j = b.a.e405ec21
      var P,
        N,
        B,
        H = F.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        D = p(function (e) {
          var n = e.addLocalMediaId,
            a = e.communityId,
            t = e.createLocalApiErrorHandler,
            i = e.editCommunityBanner,
            r = e.hasCustomMedia,
            o = e.localMedia,
            s = e.localMediaId,
            m = e.media,
            d = e.removeBanner,
            y = e.removeLocalMediaId,
            g = l.a.useState(!1),
            p = c()(g, 2),
            f = p[0],
            b = p[1],
            k = l.a.useState(!1),
            P = c()(k, 2),
            N = P[0],
            B = P[1],
            D = l.a.useState(!1),
            U = c()(D, 2),
            q = U[0],
            z = U[1],
            V = l.a.useState(!1),
            Q = c()(V, 2),
            W = Q[0],
            J = Q[1],
            X = null == m ? void 0 : m.image,
            G = F.a.theme.aspectRatios.communityBanner,
            Y = t({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return z(!1), J(Boolean(e)), e ? n(a, e) : y(a)
            },
            $ = X ? l.a.createElement(S.a, { accessibilityLabel: T, aspectMode: I.a.exact(G), image: X }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            N
              ? l.a.createElement(
                  C.a,
                  { style: H.error },
                  l.a.createElement(K.a, { Icon: h.a, headline: A, text: N, type: 'danger' }),
                )
              : null,
            l.a.createElement(v, {
              accessibilityLabel: R,
              aspectRatio: G,
              currentContent: $,
              location: E.d.CommunityBanner,
              mediaItem: q ? o : void 0,
              onChange: function (e) {
                var n = c()(e, 1)[0]
                B(!1), Z(n)
              },
              onFailure: function () {
                B(j), y(a)
              },
              onRemove:
                r || q
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
                      s
                        ? (z(!0),
                          i(a, { mediaId: s, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(j) : Y(e)
                          }))
                        : B(j)
                  },
                })
              : null,
            f
              ? l.a.createElement(w.a, {
                  cancelButtonLabel: L,
                  confirmButtonLabel: x,
                  confirmButtonType: 'destructiveFilled',
                  headline: M,
                  onCancel: function () {
                    b(!1)
                  },
                  onConfirm: function () {
                    d(a).catch(Y), b(!1)
                  },
                  text: O,
                })
              : null,
          )
        }),
        U = Object(r.a)()
          .propsFromActions(function () {
            return {
              editAccess: d.c.editAccess,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        q = a('yoO3'),
        z = a('mWs5'),
        V = a('3JAx'),
        Q = b.a.f713fbd1,
        W = [
          { label: b.a.fd00a769, value: 'Public', helpText: b.a.d0784408 },
          { label: b.a.ce0523a8, value: 'Closed', helpText: b.a.ccfafe8c },
        ],
        J = U(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.editAccess,
            i = e.history,
            r = n.id_str,
            o = l.a.useState(n.access),
            s = c()(o, 2),
            u = s[0],
            m = s[1],
            d = l.a.useCallback(
              function () {
                t(r, { access: u })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(r, '/tools/settings') })
                  })
                  .catch(a({ showToast: !0 }))
              },
              [r, u, t, i, a],
            ),
            y = u !== n.access
          return l.a.createElement(
            q.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: r, onSubmit: d, submitDisabled: !y, title: Q },
              l.a.createElement(
                C.a,
                { style: X.root },
                l.a.createElement(V.a, {
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
        X = F.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        G = a('n0Rl'),
        Y = a('k49u'),
        Z = (a('849X'), a('TJCb'), a('uDfI')),
        $ = (a('yH/f'), a('I/KZ')),
        ee = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        ne = (a('enFi'), a('9SqB')),
        ae = a.n(ne),
        te = void 0 !== P ? P : (P = a('tFuX')),
        le = void 0 !== N ? N : (N = a('pd/v')),
        ie = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var n
            switch (e.membership_settings.__typename) {
              case $.a.Open:
                n = { __typename: $.a.Open }
                break
              case $.a.Restricted:
                n = {
                  __typename: $.a.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: n }
          }
        },
        re = a('zCf4'),
        oe = a('Hsf0'),
        se = a.n(oe),
        ce = void 0 !== B ? B : (B = a('tnnC'))
      var ue,
        me,
        de = a('jAXQ'),
        ye = a.n(de),
        ge = b.a.f713fbd1,
        pe = b.a.c5d1634d,
        fe = b.a.b983f9e0,
        be = b.a.fc2a5c92,
        he = b.a.a1c93d73,
        _e = void 0 !== ue ? ue : (ue = a('1tGk')),
        ke = function (e) {
          var n,
            a,
            t,
            i,
            r,
            o,
            s,
            u,
            m,
            g,
            p,
            f,
            _,
            k = e.community,
            v = ye()(_e, k),
            E = v.membership_settings,
            F = v.rest_id,
            S = (function (e) {
              var n = se()(ce, e)
              switch (n.__typename) {
                case $.a.Restricted:
                  return { access: $.a.Restricted, invitesPolicy: n.invites_policy }
                case $.a.Open:
                  return { access: $.a.Open, invitesPolicy: $.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(n.__typename))
              }
            })(E),
            I = l.a.useState(),
            T = c()(I, 2),
            R = T[0],
            M = T[1],
            L =
              ((n = ae()(te)),
              (a = c()(n, 2)),
              (t = a[0]),
              (i = a[1]),
              (r = ae()(le)),
              (o = c()(r, 2)),
              (s = o[0]),
              (u = o[1]),
              (m = Object(Z.c)()),
              l.a.useCallback(
                function (e, n) {
                  return i || u
                    ? Promise.reject(new Error('Already updating membership settings'))
                    : new Promise(function (a, l) {
                        var i = n.access,
                          r = n.invitesPolicy
                        i === $.a.Open
                          ? t({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var n = ie(e.community_membership_settings_open_update)
                                n && m(d.c.updateOne(n.id_str, n)), a()
                              },
                              onError: l,
                            })
                          : i === $.a.Restricted &&
                            s({
                              variables: {
                                communityId: e,
                                restrictedMembershipSettings: { invites_policy: r, join_approval_policy: ee.Moderator },
                              },
                              onCompleted: function (e) {
                                var n = ie(e.community_membership_settings_restricted_update)
                                n && m(d.c.updateOne(n.id_str, n)), a()
                              },
                              onError: l,
                            })
                      })
                },
                [t, s, m, i, u],
              )),
            x = Object(re.f)(),
            O = l.a.useState(),
            A = c()(O, 2),
            j = A[0],
            P = A[1],
            N = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            B = Object($.e)(S),
            H = c()(B, 2),
            D = H[0],
            U = H[1],
            q = l.a.useCallback(
              function () {
                var e = N({
                  customErrorHandler: function (e) {
                    var n = c()(e.errors, 1)[0],
                      a = n.code === Y.a.GenericBadRequest && n.message ? n.message : he
                    return P(a), []
                  },
                })
                L(F, D)
                  .then(function () {
                    x.goBack({ backLocation: '/i/communities/'.concat(F, '/tools/settings') })
                  })
                  .catch(e)
              },
              [F, N, x, D, L],
            ),
            V = l.a.useCallback(
              function () {
                var e = (function (e, n) {
                  if (e.access === $.a.Restricted && n.access === $.a.Open) return b.a.daedd9fa
                })(S, D)
                e ? M(e) : q()
              },
              [S, D, q],
            ),
            Q = l.a.useCallback(function () {
              return M(void 0)
            }, []),
            W =
              ((p = D),
              (f = (g = S).access !== p.access),
              (_ = g.access === $.a.Restricted && g.invitesPolicy !== p.invitesPolicy),
              !(f || _)),
            J = j
              ? l.a.createElement(
                  C.a,
                  { style: ve.error },
                  l.a.createElement(K.a, { Icon: h.a, headline: be, text: j, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            z.a,
            { communityId: F, onSubmit: V, submitDisabled: W, title: ge },
            J,
            l.a.createElement($.d, { setters: U, state: D }),
            R &&
              l.a.createElement(w.a, {
                confirmButtonLabel: pe,
                confirmButtonType: 'primary',
                headline: fe,
                onCancel: Q,
                onConfirm: q,
                text: R,
              }),
          )
        },
        ve = F.a.create(function (e) {
          return { error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ee = a('v//M'),
        Ce = void 0 !== me ? me : (me = a('PbB6')),
        Fe = Object(G.b)(Ce, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Se = function (e) {
          var n = { communityId: e.communityId }
          return l.a.createElement(Fe, {
            render: function (e) {
              var n = e.data,
                a = (e.error, e.fetchStatus),
                t = e.retry,
                i = null == n ? void 0 : n.community
              return l.a.createElement(Ee.a, {
                fetchStatus: a,
                onRequestRetry: t,
                render: function () {
                  return i ? l.a.createElement(ke, { community: i }) : null
                },
                retryable: !0,
              })
            },
            variables: n,
          })
        },
        Ie = a('ROT1'),
        Ke = Object(r.a)()
          .propsFromActions(function () {
            return {
              editName: d.c.editName,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        we = b.a.h3c0f1a2,
        Te = b.a.fc2a5c92,
        Re = b.a.cb5e6510
      var Me = F.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Le = Ke(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.editName,
            i = e.history,
            r = n.id_str,
            o = n.name,
            s = l.a.useState(o),
            u = c()(s, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            g = c()(y, 2),
            p = g[0],
            f = g[1],
            b = l.a.useState(void 0),
            _ = c()(b, 2),
            k = _[0],
            v = _[1],
            E = l.a.useCallback(
              function () {
                var e = a({
                  customErrorHandler: function (e) {
                    var n = c()(e.errors, 1)[0],
                      a = n.code === Y.a.GenericBadRequest && n.message ? n.message : Re
                    return v(a), f(!0), []
                  },
                })
                t(r, { name: m })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(r, '/tools/settings') })
                  })
                  .catch(e)
              },
              [r, m, t, i, a],
            )
          return l.a.createElement(
            q.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: r, onSubmit: E, submitDisabled: p, title: we },
              k
                ? l.a.createElement(
                    C.a,
                    { style: Me.error },
                    l.a.createElement(K.a, { Icon: h.a, headline: Te, text: k, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ie.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        xe = a('U0Qk'),
        Oe = Object(r.a)()
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
      var Ne = F.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Be = Oe(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.editPurpose,
            i = e.history,
            r = n.description,
            o = n.id_str,
            s = l.a.useState(r || ''),
            u = c()(s, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            g = c()(y, 2),
            p = g[0],
            f = g[1],
            b = l.a.useState(void 0),
            _ = c()(b, 2),
            k = _[0],
            v = _[1],
            E = l.a.useCallback(
              function () {
                var e = a({
                  customErrorHandler: function (e) {
                    var n = c()(e.errors, 1)[0],
                      a = n.code === Y.a.GenericBadRequest && n.message ? n.message : Pe
                    return v(a), f(!0), []
                  },
                })
                t(o, { purpose: m })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, m, t, i, a],
            )
          return l.a.createElement(
            q.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: o, onSubmit: E, submitDisabled: p, title: Ae },
              k
                ? l.a.createElement(
                    C.a,
                    { style: Ne.error },
                    l.a.createElement(K.a, { Icon: h.a, headline: je, text: k, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(xe.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        He = a('Ig1G'),
        De = a('x0mb'),
        Ue = a('5FtR'),
        qe = a('t62R'),
        ze = a('X00g'),
        Ve = a('6vad'),
        Qe = a('csss'),
        We = a('0yYu'),
        Je = b.a.bb081ea1,
        Xe = b.a.h3e55b40,
        Ge = b.a.j8af8ea9,
        Ye = b.a.d5f01115,
        Ze = b.a.c3c04b70,
        $e = { Closed: b.a.ce0523a8, Public: b.a.fd00a769 },
        en = b.a.f4a98e9e,
        nn = b.a.f713fbd1,
        an = function (e) {
          var n = e.children
          return l.a.createElement(qe.b, { color: 'gray700', size: 'subtext2' }, n)
        },
        tn = function (e) {
          var n = e.community,
            a = e.history,
            t = e.match,
            r = n.access,
            o = n.description,
            s = n.hasCustomMedia,
            c = n.id_str,
            u = n.localMediaId,
            m = n.media,
            d = n.membership_settings,
            y = n.name,
            g = n.theme,
            p = l.a.useContext(i.a).featureSwitches,
            f = p.isTrue('c9s_edit_community_name_enabled'),
            b = p.isTrue('c9s_edit_community_description_enabled'),
            h = p.isTrue('c9s_edit_community_membership_settings_enabled'),
            _ = p.isTrue('c9s_membership_settings_enabled'),
            k = p.isTrue('c9s_edit_community_banner_enabled'),
            v = p.isTrue('c9s_edit_community_theme_enabled'),
            E = t.url,
            C = l.a.useMemo(
              function () {
                return _ ? (d.__typename === $.a.Open ? $e.Public : $e.Closed) : $e[r]
              },
              [r, _, d.__typename],
            ),
            F = Object(He.e)(n),
            S = ze.a.getCommunityThemeDisplayName(F),
            I = ze.a.getCommunityBackgroundColor(g)
          return l.a.createElement(
            re.d,
            null,
            f
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(Le, { community: n, history: a }),
                )
              : null,
            b
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(Be, { community: n, history: a }),
                )
              : null,
            _
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Se, { communityId: c }),
                )
              : h
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(J, { community: n, history: a }),
                )
              : null,
            l.a.createElement(
              re.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                q.a,
                null,
                l.a.createElement(
                  z.a,
                  { communityId: c, screenType: 'primaryDetail', title: Je },
                  k ? l.a.createElement(D, { communityId: c, hasCustomMedia: s, localMediaId: u, media: m }) : null,
                  l.a.createElement(Ve.b, { text: en }),
                  l.a.createElement(Qe.a, {
                    description: l.a.createElement(an, null, y),
                    label: Xe,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(Qe.a, {
                    description: o ? l.a.createElement(an, null, o) : void 0,
                    label: Ye,
                    link: b ? ''.concat(E, '/purpose') : void 0,
                  }),
                  v
                    ? l.a.createElement(Qe.a, {
                        description: l.a.createElement(an, null, S),
                        label: Ze,
                        link: v ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(De.a, { style: [{ color: I }, ln.themeIcon] })
                        },
                      })
                    : null,
                  _ || h
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(We.a, null),
                        l.a.createElement(Ve.b, { text: nn }),
                        l.a.createElement(Qe.a, {
                          description: l.a.createElement(an, null, C),
                          label: Ge,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            l.a.createElement(re.b, null, l.a.createElement(Ue.a, { to: ''.concat(E, '/') })),
          )
        },
        ln =
          ((n.default = o(tn)),
          F.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    xvEL: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityBannerImageDefault_community',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiMedia',
            kind: 'LinkedField',
            name: 'default_banner_media',
            plural: !1,
            selections: [
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
            ],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'da44821ed2bd33fa8de3b5bd8503e57a',
      }
      n.default = t
    },
    xvzJ: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        i = a('yiKp'),
        r = a.n(i),
        o = a('ddV6'),
        s = a.n(o),
        c = (a('yH/f'), a('2G9S'), a('ERkP')),
        u = a.n(c),
        m = a('1YZw'),
        d = a('v6aA'),
        y = a('Ig1G'),
        g = a('uDfI'),
        p = a('CxAY'),
        f = a('yrzJ'),
        b = a('mjJ+'),
        h = a('IG7M'),
        _ = a('eb3s'),
        k = (a('enFi'), a('9SqB')),
        v = a.n(k),
        E = a('3XMw'),
        C = a.n(E),
        F = a('Lsrn'),
        S = a('k/Ka'),
        I = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(S.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M21.248 10.242c-.098 0-.196.02-.287.057-.09.038-.173.094-.243.163-.07.07-.125.153-.162.244-.038.09-.057.189-.057.287v1.839c.012 1.1-.195 2.19-.608 3.21-.414 1.019-1.026 1.945-1.8 2.726-.698-.957-1.61-1.736-2.665-2.275-1.055-.538-2.22-.821-3.405-.825h-.04c-1.185.003-2.353.286-3.408.824-1.055.539-1.968 1.319-2.666 2.276-.774-.78-1.386-1.707-1.799-2.727-.413-1.018-.62-2.11-.608-3.209V4.705c3.213-1.64 6.832-2.318 10.421-1.949.098.011.198.003.293-.024.095-.028.183-.074.26-.136.077-.062.14-.139.187-.226.047-.087.076-.183.085-.281.02-.198-.038-.396-.163-.55-.125-.155-.306-.254-.504-.275-4.04-.414-8.113.397-11.686 2.329-.119.064-.218.16-.287.275-.07.116-.106.249-.106.384v8.58c-.009 1.431.296 2.848.893 4.149.597 1.3 1.472 2.455 2.563 3.382.062.085.142.156.234.208h.012c1.8 1.47 3.888 2.544 6.13 3.155.111.027.227.027.338 0 2.242-.609 4.33-1.682 6.13-3.151h.015c.092-.052.171-.123.233-.209 1.092-.927 1.966-2.082 2.563-3.384.596-1.302.9-2.719.89-4.151v-1.84c0-.099-.02-.196-.058-.287-.038-.091-.093-.174-.163-.244s-.153-.124-.244-.162c-.091-.037-.19-.056-.288-.056zM12 22.227c-1.793-.499-3.476-1.331-4.96-2.453.547-.806 1.285-1.465 2.147-1.92.863-.454 1.823-.69 2.798-.686h.036c.974-.003 1.934.232 2.795.687.862.454 1.599 1.113 2.146 1.918-1.485 1.123-3.168 1.955-4.962 2.454zM12 6C9.936 6 8.52 7.369 8.21 9.66c-.151.6-.172 1.226-.061 1.835.111.609.352 1.187.705 1.695.417.394.914.692 1.457.875.543.183 1.12.246 1.69.185.569.06 1.144-.002 1.687-.185.542-.183 1.039-.481 1.455-.874.354-.508.594-1.087.705-1.696.111-.609.09-1.235-.06-1.835C15.475 7.369 14.06 6 12 6zm2.014 6.2c-.282.22-.606.382-.952.477-.345.094-.706.119-1.062.073-.356.046-.717.022-1.063-.073-.347-.094-.67-.256-.954-.477-.388-.715-.49-1.552-.283-2.339.142-1.077.66-2.361 2.3-2.361 1.641 0 2.155 1.284 2.3 2.361.205.788.102 1.624-.288 2.339h.002zm8.836-9.915L21.136 4l1.714 1.715c.133.142.205.33.201.524-.003.195-.082.38-.22.518-.137.137-.322.216-.516.22-.195.003-.383-.07-.525-.202l-1.715-1.714-1.715 1.714c-.069.074-.151.133-.243.174-.092.04-.192.063-.292.065-.101.001-.201-.017-.294-.055-.094-.038-.179-.094-.25-.165-.071-.071-.127-.156-.165-.25-.038-.093-.056-.193-.054-.294.001-.1.023-.2.064-.292.041-.092.1-.174.174-.243L19.014 4 17.3 2.285c-.073-.069-.133-.151-.174-.243-.04-.092-.063-.192-.064-.292-.002-.101.016-.201.054-.295.038-.093.094-.178.165-.25.071-.07.156-.126.25-.164.093-.038.193-.056.294-.055.1.002.2.024.292.065.092.041.174.1.243.174l1.715 1.714 1.715-1.714c.142-.133.33-.205.525-.201.194.003.38.082.517.22.137.137.216.322.22.516.003.195-.07.383-.202.525z',
              }),
            ),
          )
        }
      I.metadata = { width: 24, height: 24 }
      var K = I,
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(S.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M21.248 10.242c-.098 0-.196.02-.287.057-.09.038-.173.094-.243.163-.07.07-.125.153-.162.244-.038.091-.057.189-.057.287v1.839c.012 1.1-.195 2.19-.608 3.21-.414 1.019-1.026 1.945-1.8 2.726-.698-.957-1.61-1.736-2.665-2.275-1.055-.538-2.22-.821-3.405-.825h-.04c-1.185.003-2.353.286-3.408.824-1.055.539-1.968 1.319-2.666 2.276-.774-.78-1.386-1.707-1.799-2.726-.413-1.02-.62-2.11-.608-3.21V4.705c3.213-1.64 6.832-2.318 10.421-1.949.098.012.198.004.293-.024.095-.027.183-.073.26-.136.077-.062.14-.139.188-.226.046-.087.075-.183.084-.281.02-.198-.038-.396-.163-.55-.125-.155-.306-.254-.504-.275-4.04-.414-8.113.397-11.686 2.329-.119.064-.218.16-.287.275-.07.116-.106.249-.106.384v8.58c-.009 1.431.296 2.848.893 4.149.597 1.3 1.472 2.455 2.563 3.382.062.085.142.156.234.208h.012c1.8 1.47 3.888 2.544 6.13 3.155.111.027.227.027.338 0 2.242-.609 4.33-1.682 6.13-3.151h.015c.092-.052.171-.123.233-.209 1.092-.927 1.966-2.082 2.563-3.384.596-1.302.9-2.719.89-4.151v-1.84c0-.099-.02-.196-.058-.287-.038-.091-.093-.174-.163-.244s-.153-.124-.244-.162c-.091-.037-.19-.056-.288-.056zM12 22.227c-1.793-.499-3.476-1.331-4.96-2.453.547-.806 1.285-1.465 2.147-1.92.863-.454 1.823-.69 2.798-.686h.036c.974-.003 1.934.233 2.795.687.862.454 1.599 1.113 2.146 1.918-1.485 1.123-3.168 1.955-4.962 2.454zM12 6C9.936 6 8.52 7.369 8.21 9.66c-.151.6-.172 1.226-.061 1.835.111.609.352 1.187.705 1.695.417.394.914.692 1.457.875.543.183 1.12.246 1.69.185.569.06 1.144-.002 1.687-.185.542-.183 1.039-.481 1.455-.874.354-.508.594-1.087.705-1.696.111-.609.09-1.235-.06-1.835C15.475 7.369 14.06 6 12 6zm2.014 6.2c-.282.22-.606.382-.952.477-.345.094-.706.119-1.062.073-.356.046-.717.022-1.063-.073-.347-.094-.67-.256-.954-.477-.388-.715-.49-1.552-.283-2.339.142-1.077.66-2.361 2.3-2.361 1.641 0 2.155 1.284 2.3 2.361.205.788.102 1.624-.288 2.339h.002zM24 4c0 .199-.079.39-.22.53-.14.141-.33.22-.53.22h-2.425v2.425c0 .199-.079.39-.22.53-.14.141-.33.22-.53.22-.199 0-.39-.079-.53-.22-.14-.14-.22-.331-.22-.53V4.75H16.9c-.199 0-.39-.079-.53-.22-.14-.14-.22-.331-.22-.53s.08-.39.22-.53c.14-.141.331-.22.53-.22h2.425V.825c0-.199.08-.39.22-.53.14-.141.331-.22.53-.22.2 0 .39.079.53.22.141.14.22.331.22.53V3.25h2.425c.2 0 .39.079.53.22.141.14.22.331.22.53z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var T,
        R = w,
        M = a('boUI'),
        L = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        x = C.a.g30bc699,
        O = C.a.e585d844,
        A = C.a.cab7c6f8,
        j = C.a.af40a8ef,
        P = C.a.e96d5254,
        N = C.a.f348a395,
        B = C.a.c3a1aebd,
        H = C.a.c273c8a6,
        D = C.a.e68b09b4,
        U = C.a.c0eb2a52,
        q = C.a.a5808125,
        z = {
          confirmButtonLabel: j,
          headline: A,
          text: function (e) {
            return u.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'd46c6e8f' },
              u.a.createElement(f.a, { screenName: e }),
            )
          },
        },
        V = {
          confirmButtonLabel: D,
          headline: H,
          text: function (e) {
            return u.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'c3a1f2be' },
              u.a.createElement(f.a, { screenName: e }),
            )
          },
        },
        Q = void 0 !== T ? T : (T = a('7xtl'))
      n.a = function (e) {
        var n = u.a.useContext(d.a),
          a = n.featureSwitches,
          t = n.loggedInUserId,
          i = a.isTrue('c9s_edit_moderators_enabled'),
          o = e.communityId,
          c = e.communityRole,
          f = e.recordId,
          k = e.screenName,
          E = e.userId,
          C = u.a.useState(null),
          F = s()(C, 2),
          S = F[0],
          I = F[1],
          w = Object(g.c)(),
          T = v()(Q),
          A = s()(T, 2),
          j = A[0],
          H = A[1],
          D = u.a.useCallback(
            function (e) {
              var n = e.communityId,
                a = e.errorMessage,
                t = e.recordId,
                l = e.role,
                i = (e.screenName, e.successMessage),
                r = e.userId
              j({
                variables: { communityId: n, userId: r, role: l },
                updater: function (e) {
                  var a = e.get(t)
                  null == a || a.setValue(l, 'community_role(community_id:"'.concat(n, '")')),
                    w(p.b.updateOne(''.concat(n, '_').concat(r), { role: l }))
                },
                onCompleted: function () {
                  w(Object(m.b)({ text: i }))
                },
                onError: function () {
                  w(Object(m.b)({ text: a }))
                },
              })
            },
            [j, w],
          ),
          W = u.a.useCallback(
            function (e) {
              var n,
                a,
                t,
                l,
                i = e.communityId,
                o = e.recordId,
                s = e.roleAction,
                c = e.screenName,
                u = e.userId
              switch (s) {
                case L.PromoteModerator:
                  ;(n = z), (t = y.a.Moderator), (l = P({ screenName: c })), (a = N({ screenName: c }))
                  break
                case L.DemoteModerator:
                  ;(n = V), (t = y.a.Member), (l = U({ screenName: c })), (a = q({ screenName: c }))
                  break
                default:
                  return
              }
              I(
                r()(
                  r()({}, n),
                  {},
                  {
                    text: n.text(c),
                    onConfirm: function () {
                      D({
                        communityId: i,
                        errorMessage: a,
                        recordId: o,
                        role: t,
                        screenName: c,
                        successMessage: l,
                        userId: u,
                      }),
                        I(null)
                    },
                    onCancel: function () {
                      I(null)
                    },
                  },
                ),
              )
            },
            [D],
          ),
          J = u.a.useCallback(
            function (e) {
              var n = []
              if (i)
                switch (c) {
                  case y.a.Moderator:
                    n.push({
                      behavioralEventContext: { viewType: 'remove_moderator' },
                      disabled: H,
                      text: B,
                      Icon: K,
                      onClick: function () {
                        return W({
                          communityId: o,
                          recordId: f,
                          roleAction: L.DemoteModerator,
                          screenName: k,
                          userId: E,
                        })
                      },
                    })
                    break
                  case y.a.Member:
                    n.push({
                      behavioralEventContext: { viewType: 'add_moderator' },
                      disabled: H,
                      text: O,
                      Icon: R,
                      onClick: function () {
                        return W({
                          communityId: o,
                          recordId: f,
                          roleAction: L.PromoteModerator,
                          screenName: k,
                          userId: E,
                        })
                      },
                    })
                }
              return (
                n.push({
                  behavioralEventContext: { viewType: 'view_profile' },
                  text: x({ screenName: k }),
                  Icon: M.a,
                  link: '/'.concat(k),
                }),
                u.a.createElement(b.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
              )
            },
            [o, W, i, f, c, H, k, E],
          )
        return E !== t
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(h.a, { renderActionMenu: J }),
              S
                ? u.a.createElement(
                    _.a,
                    l()(
                      {
                        confirmButtonType: 'primary',
                        onCancel: function () {
                          I(null)
                        },
                      },
                      S,
                    ),
                  )
                : null,
            )
          : null
      }
    },
    yUT0: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'EditThemeScreen', function () {
          return I
        })
      var t = a('ddV6'),
        l = a.n(t),
        i = (a('yH/f'), a('jwue'), a('7x/C'), a('+oxZ'), a('ERkP')),
        r = a.n(i),
        o = a('eSoz'),
        s = a('rxPX'),
        c = a('0KEI'),
        u = Object(s.a)()
          .propsFromActions(function () {
            return {
              editTheme: o.c.editTheme,
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_THEME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_theme' }),
        m = a('jHSc'),
        d = a('Ig1G'),
        y = a('3XMw'),
        g = a.n(y),
        p = a('MWbm'),
        f = a('X00g'),
        b = a('/yvb'),
        h = a('uI9t'),
        _ = a('rHpw'),
        k = g.a.dbda7beb,
        v = g.a.i2209530,
        E = g.a.hcf35d0c,
        C = g.a.da48b72c,
        F = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        S = {}
      function I(e) {
        var n = e.community,
          a = e.createLocalApiErrorHandler,
          t = e.editTheme,
          i = e.history,
          o = n.id_str,
          s = n.theme,
          c = f.a.getCommunityBackgroundColorName(s),
          u = r.a.useState(!1),
          y = l()(u, 2),
          g = y[0],
          _ = y[1],
          I = r.a.useState(Object(d.e)(n)),
          w = l()(I, 2),
          T = w[0],
          R = w[1],
          M = r.a.useState(f.a.getCommunityThemeDisplayName(T)),
          L = l()(M, 2),
          x = L[0],
          O = L[1],
          A = r.a.useState(c),
          j = l()(A, 2),
          P = j[0],
          N = j[1],
          B = r.a.useState([]),
          H = l()(B, 2),
          D = H[0],
          U = H[1]
        r.a.useEffect(
          function () {
            var e
            return (
              U(
                ((e = []),
                F.forEach(function (n) {
                  var a = f.a.getCommunityTheme(n),
                    t = f.a.getCommunityBackgroundColorName(a)
                  ;(S[t] = n), e.push({ accessibilityLabel: f.a.getCommunityThemeDisplayName(n), colorName: t })
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
        var q = r.a.useCallback(
            function () {
              t(o, { theme: T })
                .then(function () {
                  i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(a({ showToast: !0 }))
            },
            [o, T, t, i, a],
          ),
          z = r.a.createElement(
            b.a,
            { accessibilityLabel: E({ themeName: x }), disabled: !g, onPress: q, size: 'small', type: 'brandFilled' },
            v,
          )
        return r.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: i, rightControl: z, title: k },
          r.a.createElement(
            p.a,
            { style: K.themePickerContainer },
            r.a.createElement(h.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var a = S[e],
                  t = a !== Object(d.e)(n)
                R(a), O(f.a.getCommunityThemeDisplayName(a)), N(e), _(t)
              },
              options: D,
              value: P,
            }),
          ),
        )
      }
      var K = _.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      n.default = u(I)
    },
    zakg: function (e, n, a) {
      'use strict'
      a.r(n)
      var t,
        l,
        i,
        r = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
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
            argumentDefinitions: t,
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
                          (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityInvites',
                        abstractKey: null,
                      },
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
            id: 'OgVu1WJu62PoPazegBf3mw',
            metadata: {},
            name: 'CommunityInviteButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '9533cbfb5394a4601514cbc83020138b'), (n.default = r)
    },
    zum0: function (e, n, a) {
      'use strict'
      a.r(n)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunitiesCreateButton_create_community_action_result',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
        type: 'CommunityCreateActionResult',
        abstractKey: '__isCommunityCreateActionResult',
        hash: '4ec23170ec30a580f998dd33b20018aa',
      }
      n.default = t
    },
  },
])
//# sourceMappingURL=WIPED
