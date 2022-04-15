;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    '+BRT': function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    '+BRr': function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    '08/x': function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    '0ULw': function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        r = a('ERkP'),
        i = a.n(r),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
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
        r = a('ERkP'),
        i = a.n(r),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25z',
              }),
              i.a.createElement('path', {
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
        r = a.n(l),
        i = a('X00g'),
        o = (a('YWiL'), a('CVPS')),
        s = a.n(o),
        c = function (e) {
          var n = s()(void 0 !== t ? t : (t = a('DCZs')), e),
            l = n.custom_theme,
            o = n.default_theme,
            c = null != l ? l : o
          return r.a.useMemo(
            function () {
              return i.a.getCommunityTheme(c)
            },
            [c],
          )
        }
      n.a = c
    },
    '1rMX': function (e, n, a) {
      'use strict'
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
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (e.exports = l)
    },
    '1tGk': function (e, n, a) {
      'use strict'
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
      ;(l.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (e.exports = l)
    },
    '2rr8': function (e, n, a) {
      'use strict'
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
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (e.exports = l)
    },
    '35hZ': function (e, n, a) {
      'use strict'
      var t = a('EORa').useTrackLoadQueryInRender,
        l = a('h2Du'),
        r = a('6zvL'),
        i = a('PJTX'),
        o = a('I9iR'),
        s = (a('ERkP').useDebugValue, a('e1/f').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      a('/2Cm')
      e.exports = function (e, n, a) {
        t()
        var s,
          m = i(),
          d = n.fetchKey,
          y = n.fetchPolicy,
          g = n.source,
          p = n.variables,
          f = n.networkCacheConfig,
          b = r(e, p, f)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          b.request.node.params.name !== n.name && o(!1),
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
    '3JAx': function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        r = a('fyvP'),
        i = a('rHpw'),
        o = a('MWbm')
      n.a = function (e) {
        return l.a.createElement(o.a, { style: s.root }, l.a.createElement(r.a, e))
      }
      var s = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '6vad': function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return y
      })
      a('yH/f')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('t62R'),
        i = a('EHV7'),
        o = a('rHpw'),
        s = o.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        c = a('7Mjr'),
        u = a('I4+6'),
        m = a('cm6r'),
        d = a('MWbm'),
        y = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var g = o.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      n.b = function (e) {
        var n = e.icon,
          a = e.landingUrl,
          t = e.nativeID,
          p = e.rightControl,
          f = e.style,
          b = e.subtext,
          h = e.testID,
          _ = e.text,
          v = (function (e) {
            switch (e) {
              case y.TopicFilled:
                return l.a.createElement(i.a, { style: s.icon })
              default:
                return null
            }
          })(n),
          k = b ? null : g.withSubtext,
          E = u.a.generate({
            backgroundColor: o.a.theme.colors.gray0,
            color: o.a.theme.colors.cellBackground,
            customFocusBackgroundColor: o.a.theme.colors.gray0,
            customHoverBackgroundColor: o.a.theme.colors.gray0,
            customPressedBackgroundColor: o.a.theme.colors.gray0,
          })
        return l.a.createElement(
          m.a,
          {
            interactiveStyles: a ? E : null,
            link: null == a ? void 0 : a.url,
            nativeID: t,
            style: [g.root, f],
            testID: h,
          },
          l.a.createElement(
            d.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: g.mainContent },
            l.a.createElement(d.a, { style: g.icon }, v),
            l.a.createElement(
              r.b,
              { numberOfLines: 3, size: 'headline1', style: k, weight: 'heavy', withHashflags: !0 },
              _,
            ),
            l.a.createElement(
              d.a,
              { style: g.rightControlGroup },
              a ? l.a.createElement(d.a, { style: k }, l.a.createElement(c.a, { style: g.iconArrow })) : null,
              p ? l.a.createElement(d.a, null, p) : null,
            ),
          ),
          b
            ? l.a.createElement(
                r.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: g.subtext, withHashflags: !0 },
                b,
              )
            : null,
        )
      }
    },
    '7xtl': function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
        o,
        s = {
          fragment: {
            argumentDefinitions: [
              (t = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
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
            argumentDefinitions: [t, r, l],
            kind: 'Operation',
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
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
            id: '-z7ecfy5Y04vSJHD3xQ1aA',
            metadata: {},
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(s.hash = '611e4e6390b7bb405821b13d8b63cd5d'), (e.exports = s)
    },
    '8sFp': function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'default', function () {
          return d
        })
      var t = a('ERkP'),
        l = a.n(t),
        r = a('3XMw'),
        i = a.n(r),
        o = a('mw9i'),
        s = a('FIs5'),
        c = a('rHpw'),
        u = i.a.c2117be6,
        m = i.a.c2c4dad3
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
                              kind: 'RequiredField',
                              field: {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  {
                                    kind: 'RequiredField',
                                    field: {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'blocking',
                                      storageKey: null,
                                    },
                                    action: 'THROW',
                                    path: 'user_relationship.user_results.result.legacy.blocking',
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'description',
                                    storageKey: null,
                                  },
                                  {
                                    kind: 'RequiredField',
                                    field: {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'followed_by',
                                      storageKey: null,
                                    },
                                    action: 'THROW',
                                    path: 'user_relationship.user_results.result.legacy.followed_by',
                                  },
                                  {
                                    kind: 'RequiredField',
                                    field: {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'following',
                                      storageKey: null,
                                    },
                                    action: 'THROW',
                                    path: 'user_relationship.user_results.result.legacy.following',
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
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
                                    name: 'screen_name',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              action: 'THROW',
                              path: 'user_relationship.user_results.result.legacy',
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
      ;(l.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (e.exports = l)
    },
    '9Jxp': function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        r = a('ERkP'),
        i = a.n(r),
        o = a('CXUS'),
        s = a('rHpw'),
        c = a('MWbm'),
        u = s.a.create(function () {
          return { hidden: { opacity: 0 } }
        })
      n.a = function (e) {
        var n = e.children,
          a = e.draggableId,
          t = e.fromVirtualList,
          r = e.index,
          s = e.isBeingDragged,
          m = e.isDragDisabled
        return t && s
          ? i.a.createElement(c.a, { style: u.hidden }, n)
          : i.a.createElement(o.b, { draggableId: a, index: r, isDragDisabled: m }, function (e) {
              return i.a.createElement('div', l()({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps), n)
            })
      }
    },
    AfjF: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return d
      })
      var t = a('ERkP'),
        l = a.n(t),
        r = a('eb3s'),
        i = a('3XMw'),
        o = a.n(i),
        s = o.a.d45ae5e0,
        c = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var n = e.onCancel,
            a = e.onConfirm
          return l.a.createElement(r.a, {
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
      ;(l.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (e.exports = l)
    },
    C2fM: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
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
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                              {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'user',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'result',
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
                                      i,
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
      ;(y.hash = '994dfbaa33f6514fd6bf940e12397869'), (e.exports = y)
    },
    DCZs: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    'DV/y': function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityInviteScreen', function () {
          return te
        })
      var t = a('KEM+'),
        l = a.n(t),
        r = a('yiKp'),
        i = a.n(r),
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
        v = a('/yvb'),
        k = (a('2G9S'), a('KhuB')),
        E = a('li/m'),
        C = function (e, n) {
          return n.communityId && n.userId ? k.b.select(e, ''.concat(n.communityId, '_').concat(n.userId)) : void 0
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
        w = _.a.bcd6bb0d,
        K = 'primaryFilled',
        T = { viewType: 'invite' }
      var R = F(function (e) {
          var n = e.communityId,
            a = e.createLocalApiErrorHandler,
            t = e.inviteActionResult,
            l = e.inviteToCommunity,
            r = e.onInvite,
            i = e.onInviteActionResultChange,
            o = e.userId,
            s = e.viewerInvited,
            c = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return S
              switch (e.reason) {
                case 'UserIsMember':
                  return w
                case 'UserIsInvited':
                  return I
                default:
                  return S
              }
            })(t),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return K
              switch (e.reason) {
                case 'UserIsMember':
                  return K
                default:
                  return 'primaryOutlined'
              }
            })(t)
          u.a.useEffect(
            function () {
              t && i(o, t)
            },
            [t, o, i],
          )
          var d = 'UserCommunityInviteAction' === (null == t ? void 0 : t.__typename)
          return !d && !s
            ? null
            : u.a.createElement(
                v.a,
                {
                  accessibilityLabel: c,
                  behavioralEventContext: T,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      l(n, o)
                        .then(function () {
                          return r && r(o)
                        })
                        .catch(a())
                  },
                  size: 'small',
                  type: m,
                },
                c,
              )
        }),
        L = a('5FtR'),
        x = a('4e/K'),
        M = a('MWbm'),
        O = a('4zmP'),
        A = a('t62R'),
        j = a('FIs5'),
        P = a('rHpw'),
        H = a('GZwR'),
        B = _.a.b139b549,
        D = _.a.dfddd842,
        N = _.a.cf4898a0,
        U = _.a.a3b3939a,
        q = _.a.db4f0cc9,
        z = _.a.h252ede6,
        V = _.a.a5cd93f9,
        W = _.a.ba5a88e3,
        J = _.a.i6568549,
        Q = _.a.b772cd65,
        X = _.a.b4f16d00,
        G = _.a.ja1387a7,
        Y = _.a.b92a21d8,
        Z = _.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        ne = [H.a.CommunityUsers],
        ae = { viewType: 'community' }
      function te(e) {
        var n = e.community,
          a = e.createLocalApiErrorHandler,
          t = e.fetchCommunityIfNeeded,
          r = (n || {}).invites_result,
          o = e.match.params.communityId || '',
          c = u.a.useState(''),
          d = s()(c, 2),
          y = d[0],
          g = d[1],
          p = u.a.useState({}),
          f = s()(p, 2),
          h = f[0],
          _ = f[1],
          k = u.a.useState({}),
          E = s()(k, 2),
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
          w = u.a.useMemo(
            function () {
              return y.length > 0 || !n
                ? ee
                : 'CommunityInvites' === r.__typename
                ? r.users_to_invite_slice.items.map(H.g).filter(Boolean)
                : ee
            },
            [n, r, y.length],
          ),
          K = u.a.useCallback(
            function (e, n) {
              _(function (a) {
                return i()(i()({}, a), {}, l()({}, e, n))
              })
            },
            [_],
          ),
          T = u.a.useCallback(
            function (e) {
              F(function (n) {
                return i()(i()({}, n), {}, l()({}, e, !0))
              })
            },
            [F],
          ),
          P = o
            ? u.a.createElement(L.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(L.a, { to: '/' }),
          te = u.a.createElement(
            v.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            Q,
          )
        return 'CommunityInvitesUnavailable' === (null == r ? void 0 : r.__typename)
          ? P
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ae },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: te, subtitle: D, title: B },
                ((S = (null == r ? void 0 : r.remaining_invite_count) || 0),
                (I = S > 999),
                'CommunityInvites' === (null == r ? void 0 : r.__typename) &&
                  !I &&
                  u.a.createElement(
                    M.a,
                    { style: le.callout },
                    u.a.createElement(O.a, { text: J({ remaining_invite_count: S }) }),
                  )),
                u.a.createElement(x.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: ne,
                  getItemDisabledMessage: function (e) {
                    var n
                    if ('user' === e.type) {
                      var a = e.data,
                        t = a.id_str,
                        l = a.screen_name,
                        r = h[t]
                      if ('UserCommunityInviteActionUnavailable' === (null == r ? void 0 : r.__typename))
                        switch (r.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: l })
                          case 'UserIsMember':
                            return q({ screen_name: l })
                          case 'ViewerOutOfInvites':
                            return z
                          default:
                            return null !== (n = r.message) && void 0 !== n ? n : V({ screen_name: l })
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
                  injectedItems: w,
                  inputStyle: le.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    g(e)
                  },
                  placeholder: N,
                  renderEmptyState: function () {
                    return u.a.createElement(j.a, { header: X, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        M.a,
                        { style: le.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, W),
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
                      onInviteActionResultChange: K,
                      userId: n,
                      viewerInvited: C[n],
                    })
                  },
                  rounded: !0,
                  shouldAutoFocus: !0,
                  shouldFocusOnClear: !0,
                  source: H.d.CommunityInvites,
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
        re = f(te)
      n.default = re
    },
    DVIF: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
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
        v,
        k,
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
                  (r = { kind: 'Literal', name: 'count', value: 10 }),
                  (i = { kind: 'Variable', name: 'query', variableName: 'query' }),
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
                args: (u = [r, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }, i, o]),
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
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: (k = [
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
                                                              (v = {
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
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: 'TimelineRichTextUser',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  _,
                                                  {
                                                    alias: 'mention_results',
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: k,
                                                    storageKey: null,
                                                  },
                                                ],
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
                                  v,
                                ],
                                type: 'UserUnavailable',
                                abstractKey: null,
                              },
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
                            name: 'result',
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
            id: 'lU0PYlIaM_s-u55xlzsRtA',
            metadata: { sliceInfoPath: ['communities_search_slice', 'slice_info'] },
            name: 'CommunitiesSearchQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(C.hash = 'c848c1bd320716d294b5f3f2b34ed1a8'), (e.exports = C)
    },
    'Dm5+': function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
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
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                              {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'user',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'result',
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
                                      i,
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
      ;(y.hash = 'cccb7f84865368f471eb927f82edccec'), (e.exports = y)
    },
    EPsT: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return _
      })
      var t = a('VrFO'),
        l = a.n(t),
        r = a('Y9Ll'),
        i = a.n(r),
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
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.align,
                    a = e.color,
                    t = e.confirmationSheetConfirmButtonLabel,
                    l = e.confirmationSheetConfirmButtonType,
                    r = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(b.a, { align: n, color: a, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? f.a.createElement(h.a, {
                          confirmButtonLabel: t,
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
            a
          )
        })(f.a.Component)
      g()(_, 'defaultProps', { color: 'red500', align: 'center' })
    },
    Eh7u: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
        o,
        s,
        c,
        u,
        m,
        d,
        y = {
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
                          kind: 'RequiredField',
                          field: {
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
                          action: 'THROW',
                          path: 'members_facepile_results.result.legacy',
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
                                      selections: (i = [
                                        (r = {
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
                                      selections: i,
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
                                                t,
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    {
                                                      kind: 'RequiredField',
                                                      field: (c = {
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
                                                      }),
                                                      action: 'THROW',
                                                      path: 'members_facepile_results.result.unavailable_message.entities.ref.user_results.result.legacy',
                                                    },
                                                    (u = {
                                                      alias: null,
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'rest_id',
                                                      storageKey: null,
                                                    }),
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                (d = {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    (m = {
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
                                                }),
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: 'TimelineRichTextUser',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        s,
                                        {
                                          alias: 'mention_results',
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
                                                      kind: 'RequiredField',
                                                      field: c,
                                                      action: 'THROW',
                                                      path: 'members_facepile_results.result.unavailable_message.entities.ref.mention_results.result.legacy',
                                                    },
                                                    u,
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                d,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
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
                            r,
                          ],
                          storageKey: null,
                        },
                        m,
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
      ;(y.hash = '97ecd7a2189f93a563b3695f898d77ab'), (e.exports = y)
    },
    FSMj: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'ToolsPeopleScreen', function () {
          return E
        })
      var t = a('ddV6'),
        l = a.n(t),
        r = (a('vrRf'), a('ERkP')),
        i = a.n(r),
        o = a('LgBi'),
        s = a('UZ0O'),
        c = a('3XMw'),
        u = a.n(c),
        m = a('gDCe'),
        d = a('yoO3'),
        y = a('k/OQ'),
        g = a('mWs5'),
        p = a('MWbm'),
        f = a('Irs7'),
        b = a('krnS'),
        h = a('zCf4'),
        _ = u.a.dc6ce7b4,
        v = u.a.f8321d82,
        k = u.a.ga2aa43c,
        E = function (e) {
          var n = e.community,
            a = e.communityId,
            t = e.location,
            r = i.a.useState(!1),
            c = l()(r, 2),
            u = c[0],
            f = c[1],
            E = (null == t ? void 0 : t.pathname) && t.pathname.indexOf('members') > 0,
            C = E ? v : k,
            F = i.a.useMemo(
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
                        label: k,
                        key: k,
                      },
                    ]
                  : []
                return i.a.createElement(y.a, { accessibilityLabel: C, links: e })
              },
              [a, C, t],
            )
          return i.a.createElement(
            d.a,
            null,
            i.a.createElement(
              g.a,
              {
                communityId: n.id_str,
                rightControl: E ? i.a.createElement(o.a, { communityId: a }) : void 0,
                title: _,
              },
              i.a.createElement(
                p.a,
                null,
                i.a.createElement(s.a, { community: n, communityId: a, onIsSearchingChange: f }),
                u
                  ? null
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      F,
                      i.a.createElement(
                        h.d,
                        null,
                        i.a.createElement(
                          h.b,
                          { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/members') },
                          i.a.createElement(b.b, {
                            communityId: n.id_str,
                            mode: b.a.Members,
                            viewerRole: null == n ? void 0 : n.role,
                          }),
                        ),
                        i.a.createElement(
                          h.b,
                          { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/moderators') },
                          i.a.createElement(m.a, { community: n }),
                          i.a.createElement(b.b, {
                            communityId: n.id_str,
                            mode: b.a.Moderators,
                            viewerRole: null == n ? void 0 : n.role,
                          }),
                        ),
                      ),
                    ),
              ),
            ),
          )
        }
      n.default = Object(f.a)(E, { page: 'communities', section: 'people' })
    },
    'Fq/Z': function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'FeedbackType', function () {
          return Q
        }),
        a.d(n, 'CommunityFeedbackScreen', function () {
          return X
        })
      var t = a('97Jx'),
        l = a.n(t),
        r = a('m3Bd'),
        i = a.n(r),
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
          return Object.entries(a).flat().includes('tweetId') ? Q.HiddenTweet : Q.RemovedMember
        },
        h = function (e, n) {
          if (b(0, n) === Q.HiddenTweet) {
            var a,
              t = n.match.params.tweetId,
              l = t ? y.a.selectHydrated(e, t) : void 0,
              r = null == l || null === (a = l.community_relationship) || void 0 === a ? void 0 : a.community
            return r ? d.c.select(e, r) : void 0
          }
          var i = n.match.params.communityId
          return i ? d.c.select(e, i) : void 0
        },
        _ = function (e, n) {
          if (b(0, n) === Q.HiddenTweet) {
            var a = n.match.params.tweetId
            return a ? y.a.selectFetchStatus(e, a) : void 0
          }
          var t = n.match.params.communityId
          return t ? d.c.selectFetchStatus(e, t) : void 0
        },
        v = Object(p.a)()
          .propsFromState(function () {
            return { community: h, fetchStatus: _, loggedInUser: g.e.selectLoggedInUser, tweet: f, type: b }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: y.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        k = (a('ho0z'), a('PKbs')),
        E = a('egQk'),
        C = a('3XMw'),
        F = a.n(C),
        S = a('/de5'),
        I = a('b5s6'),
        w = a('MWbm'),
        K = a('X00g'),
        T = a('t62R'),
        R = a('4zmP'),
        L = a('0yYu'),
        x = a('6vad'),
        M = a('rHpw'),
        O = F.a.j643a234,
        A = F.a.c730a21c,
        j = F.a.a5baa7d1,
        P = F.a.icc32e3d,
        H = K.a.getCommunityTheme('Default'),
        B = M.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: M.a.theme.colors.gray50,
              borderRadius: M.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: M.a.theme.spacesPx.space16,
              marginBottom: M.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: M.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        D = function (e) {
          var n,
            a = e.community,
            t = e.history,
            l = e.location,
            r = e.match,
            i = e.tweet,
            o = e.type,
            c = { history: t, location: l, match: r },
            u = null == i ? void 0 : i.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (n = (function (e) {
                  switch (e) {
                    case Q.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case Q.RemovedMember:
                      return null == a ? void 0 : a.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === n
                ? void 0
                : n.name) || '',
            y = null == a ? void 0 : a.name,
            g = null == a ? void 0 : a.rules,
            p = (null == a ? void 0 : a.theme) || H,
            f = K.a.getCommunityUIColorName(p),
            b = Object(E.a)({ communityName: y })
          return p && null != g && g.length
            ? s.a.createElement(
                w.a,
                { style: B.tweetInfo },
                s.a.createElement(
                  w.a,
                  { style: B.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case Q.HiddenTweet:
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
                            tweetId: null == i ? void 0 : i.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          s.a.createElement(R.a, { headline: A, text: d }),
                          s.a.createElement(T.b, { style: B.helpText }, j),
                        )
                      case Q.RemovedMember:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            T.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            P({ communityName: y }),
                          ),
                          s.a.createElement(
                            w.a,
                            { style: B.removedMemberReason },
                            s.a.createElement(T.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                s.a.createElement(L.a, null),
                s.a.createElement(x.b, { text: b }),
                s.a.createElement(k.b, {
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
        N = a('G1WX'),
        U = a('yoO3'),
        q = a('VS6U'),
        z = a('0KEI'),
        V = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        W = F.a.jf99d610,
        J = { viewType: 'community' },
        Q = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function X(e) {
        var n = s.a.useContext(c.a).featureSwitches.isTrue('c9s_enabled'),
          a = (e.analytics, e.community),
          t = e.fetchCommunity,
          r = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          g = e.type,
          p = i()(e, V),
          f = function (e) {
            var n, t
            switch (e) {
              case Q.HiddenTweet:
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
              case Q.RemovedMember:
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
          v = Object(z.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          k = Object(z.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          E = s.a.useEffect(
            function () {
              _ && o(_).catch(v)
            },
            [v, o, _],
          ),
          C = s.a.useEffect(
            function () {
              h && t(h).catch(k)
            },
            [h, k, t],
          ),
          F = s.a.createElement(S.b, p)
        return s.a.createElement(N.a, {
          fetchStatus: r,
          onRequestRetry: f(g)._handleRetry,
          render: function () {
            var a = f(g),
              t = a.BEHAVIORAL_EVENT_VIEW_TYPE,
              r = a.isAuthorizedViewer,
              i = a.shouldRenderFeedback
            return r && n
              ? s.a.createElement(
                  u.a,
                  { behavioralEventContext: J },
                  i
                    ? s.a.createElement(
                        U.a,
                        { behavioralEventViewType: t },
                        s.a.createElement(q.a, {
                          backLocation: '/notifications',
                          history: p.history,
                          primaryContent: s.a.createElement(D, l()({}, e, { type: g })),
                          sidebarContent: s.a.createElement(m.a, null),
                          title: W,
                        }),
                      )
                    : F,
                )
              : F
          },
        })
      }
      var G = v(X)
      n.default = G
    },
    HNLm: function (e, n, a) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityAppBarButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'CommunityModeration',
            kind: 'LinkedField',
            name: 'moderation',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'tweet_case_count', storageKey: null }],
            storageKey: null,
          },
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
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'cc25ec38f36e432d996afa31f65dc350',
      }
      e.exports = t
    },
    HvW7: function (e, n, a) {
      'use strict'
      var t = a('IGGJ')(a('yiKp')),
        l = a('XiYe'),
        r = a('PJTX'),
        i = a('ERkP'),
        o = a('e1/f').commitMutation,
        s = i.useState,
        c = i.useEffect,
        u = i.useRef,
        m = i.useCallback
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          a = r(),
          i = l(),
          d = u(a),
          y = u(e),
          g = u(new Set()),
          p = s(!1),
          f = p[0],
          b = p[1],
          h = m(
            function (n) {
              d.current === a && y.current === e && (g.current.delete(n), i.current && b(g.current.size > 0))
            },
            [a, i, e],
          )
        c(
          function () {
            ;(d.current === a && y.current === e) ||
              ((g.current = new Set()), i.current && b(!1), (d.current = a), (y.current = e))
          },
          [a, i, e],
        )
        var _ = m(
          function (l) {
            var r = n(
              a,
              (0, t.default)(
                (0, t.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    var a
                    h(r), null === (a = l.onCompleted) || void 0 === a || a.call(l, e, n)
                  },
                  onError: function (e) {
                    var n
                    h(r), null === (n = l.onError) || void 0 === n || n.call(l, e)
                  },
                  onUnsubscribe: function () {
                    var e
                    h(r), null === (e = l.onUnsubscribe) || void 0 === e || e.call(l)
                  },
                  onNext: function () {
                    var e
                    null === (e = l.onNext) || void 0 === e || e.call(l)
                  },
                },
              ),
            )
            return g.current.add(r), i.current && b(!0), r
          },
          [h, n, a, i, e],
        )
        return [_, f]
      }
    },
    'I/KZ': function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return l
      }),
        a.d(n, 'b', function () {
          return r
        }),
        a.d(n, 'd', function () {
          return _
        }),
        a.d(n, 'e', function () {
          return w
        }),
        a.d(n, 'c', function () {
          return K
        })
      a('yH/f')
      var t,
        l = Object.freeze({
          Open: 'CommunityOpenMembershipSettings',
          Restricted: 'CommunityRestrictedMembershipSettings',
        }),
        r = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        i = a('ERkP'),
        o = a.n(i),
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
            i = e.setters,
            s = i.setAccess,
            c = i.setInvitesPolicy,
            y = !e.hideInvitePolicy,
            h = o.a.useCallback(
              function (e, n) {
                s(n)
              },
              [s],
            ),
            _ = o.a.useCallback(
              function (e, n) {
                c(n ? r.Member : r.Moderator)
              },
              [c],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: v.settingsItem }, b),
            o.a.createElement(m.a, { name: 'membershipSetting', onChange: h, options: g, value: a }),
            y &&
              a === l.Restricted &&
              o.a.createElement(d.a, {
                checked: t === r.Member,
                helpText: f,
                label: p,
                name: 'allowInvites',
                onChange: _,
              }),
          )
        },
        _ = o.a.memo(h),
        v = y.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        k = a('ddV6'),
        E = a.n(k),
        C = a('KEM+'),
        F = a.n(C),
        S = ((t = {}), F()(t, l.Open, r.Member), F()(t, l.Restricted, r.Moderator), t),
        I = { access: l.Restricted, invitesPolicy: S[l.Restricted] }
      function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          n = o.a.useState(e.access),
          a = E()(n, 2),
          t = a[0],
          l = a[1],
          r = o.a.useState(e.invitesPolicy),
          i = E()(r, 2),
          s = i[0],
          c = i[1],
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
      function K(e) {
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
          case r.Moderator:
            a = 'ModeratorInvitesAllowed'
            break
          case r.Member:
            a = 'MemberInvitesAllowed'
            break
          case r.None:
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
        r = a('ddV6'),
        i = a.n(r),
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
          r = e.onCropDone,
          o = s.a.useState({ status: 'not_started' }),
          c = i()(o, 2),
          u = c[0],
          p = c[1],
          f = s.a.useState(!1),
          b = i()(f, 2),
          h = b[0],
          _ = b[1],
          v = s.a.useState(!1),
          k = i()(v, 2),
          E = k[0],
          C = k[1],
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
        var w = s.a.useCallback(
            function () {
              _(!1), p({ status: g.Completed, croppedMediaId: a.id }), t()
            },
            [t, a],
          ),
          K = s.a.useCallback(function () {
            _(!1), C(!0)
          }, []),
          T = s.a.useCallback(function () {
            C(!1), _(!0)
          }, []),
          R = s.a.useCallback(function () {
            C(!1)
          }, []),
          L = s.a.useCallback(
            function (e) {
              p({ status: g.Completed, croppedMediaId: a.id }), null == r || r(e)
            },
            [r, a],
          ),
          x = l()(l()({}, a), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: a.mediaFile, cropData: void 0 })
        return s.a.createElement(
          s.a.Fragment,
          null,
          h ? s.a.createElement(m.a, { defaultAspectRatio: n, media: a, onCancel: w, onDone: K, title: d }) : null,
          E
            ? s.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: x,
                onCancel: T,
                onCropDone: L,
                onDone: R,
                title: y,
              })
            : null,
        )
      }
    },
    Jt8P: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    KQzH: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        r = (a('hBvt'), a('ERkP')),
        i = a.n(r),
        o = a('BUB3'),
        s = a('shC7'),
        c = a('csss'),
        u = a('t62R')
      n.a = function (e) {
        return i.a.createElement(o.a, { exact: !0, path: e.link }, function (n) {
          var a = s.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(c.a, l()({ isActive: n }, e, { label: i.a.createElement(u.b, { dir: a }, e.label) }))
        })
      }
    },
    L47s: function (e, n, a) {
      'use strict'
      var t = a('ddV6'),
        l = a.n(t),
        r = a('ERkP'),
        i = a.n(r),
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
            r = e.flag,
            s = e.headline,
            c = e.subtext,
            y = e.behavioralEventContext,
            g = e.withCloseButton,
            p = Object(m.b)(r),
            f = l()(p, 2),
            b = f[0],
            h = f[1]
          if (!b) return null
          var _ = i.a.createElement(
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
            i.a.createElement(n, null),
          )
          return y ? i.a.createElement(o.a, { behavioralEventContext: y }, _) : _
        }
      n.a = i.a.memo(y)
    },
    LgBi: function (e, n, a) {
      'use strict'
      var t,
        l = a('97Jx'),
        r = a.n(l),
        i = a('m3Bd'),
        o = a.n(i),
        s = a('ERkP'),
        c = a.n(s),
        u = a('ogGF'),
        m = (a('YWiL'), a('Fr3L')),
        d = a('IAZG'),
        y = ['communityId'],
        g = { context: 'CommunityInviteButtonQuery' },
        p = void 0 !== t ? t : (t = a('zakg')),
        f = function (e) {
          var n = e.communityId,
            a = o()(e, y),
            t = Object(d.a)(p, { communityId: n })
          return c.a.createElement(u.a, r()({ community: t.community }, a))
        },
        b = function (e) {
          return c.a.createElement(
            m.a,
            { errorConfig: g },
            c.a.createElement(f, r()({ communityId: e.communityId }, e)),
          )
        }
      n.a = c.a.memo(b)
    },
    LtQU: function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        r = a('ERkP'),
        i = a.n(r),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19 10H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    M2mT: function (e, n, a) {
      'use strict'
      var t = a('m3Bd'),
        l = a.n(t),
        r = a('VrFO'),
        i = a.n(r),
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
        v = a('HPNB'),
        k = a('VAZu'),
        E = a('wiP2'),
        C = a('Es6L'),
        F = a('yiKp'),
        S = a.n(F),
        I = a('rHpw'),
        w = I.a.create(function (e) {
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
        K = a('MWbm'),
        T = a('yw4N'),
        R = a('TnY3'),
        L = a('cHvH'),
        x = a('3xLC'),
        M = [
          'appBarStyle',
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
            i()(this, a)
            for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_renderChildren', function () {
                var n = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? _.a.createElement(
                      K.a,
                      { style: w.fill },
                      _.a.createElement(
                        T.a,
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
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return _.a.createElement(L.a, null, function (n) {
                    var a = n.windowWidth
                    return v.a.isTwoColumnLayout(a) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    n = (e.appBarStyle, e.children),
                    a =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      l()(e, M))
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
                    r = a.TeamsSwitcher,
                    i = a.appBarStyle,
                    o = a.backLocation,
                    s = a.documentTitle,
                    c = a.headerless,
                    u = a.history,
                    m = a.leftControl,
                    d = a.middleControl,
                    y = a.onBackClick,
                    g = a.rightControl,
                    p = a.screenType,
                    f = a.searchBoxOptions,
                    h = a.secondaryBar,
                    v = a.showSubtitleOnRoot,
                    C = a.showSubtitleOnWideDetail,
                    F = a.subtitle,
                    S = a.title,
                    I = a.titleIconCell,
                    T = a.titleIconCellSize,
                    R = a.withDetailOpen,
                    L = a.withSearchBox,
                    x = a.withTweetButton,
                    M = 'root' === p,
                    O = 'secondaryRoot' === p,
                    A = 'primaryDetail' === p,
                    j = (A && C) || (M && v),
                    P = M || (A && n),
                    H = M ? b.c : A ? b.a : void 0,
                    B = _.a.createElement(
                      K.a,
                      { style: w.appBarContainer },
                      _.a.createElement(k.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: P,
                        history: u,
                        leftControl: m,
                        middleControl: d,
                        onBackClick: y,
                        rightControl: g,
                        secondaryBar: h,
                        style: i,
                        subtitle: j ? F : void 0,
                        title: S,
                        titleDomId: H,
                        titleIconCell: I,
                        titleIconCellSize: T,
                      }),
                    ),
                    D =
                      M || (O && R)
                        ? null
                        : _.a.createElement(E.a.Configure, {
                            SideNavButton: t,
                            TabBar: l,
                            TeamsSwitcher: r,
                            backLocation: o,
                            documentTitle: s,
                            headerless: c,
                            middleControl: d,
                            onBackClick: y,
                            rightControl: g,
                            searchBoxOptions: f,
                            subtitle: F,
                            title: S,
                            withSearchBox: L,
                            withTweetButton: x,
                          })
                  return _.a.createElement(_.a.Fragment, null, D, B)
                },
              },
            ]),
            a
          )
        })(_.a.Component)
      f()(O, 'contextType', x.a),
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
        r = a('97Jx'),
        i = a.n(r),
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
        v = a('5FtR'),
        k = a('VS6U'),
        E = a('rHpw'),
        C = function (e) {
          var n = s.a.useContext(c.a).featureSwitches,
            a = e.community,
            t = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            g = e.isCommunityMember,
            p = e.location,
            f = e.match,
            b = f.params.communityId,
            E = n.isTrue('c9s_participation_enabled')
          s.a.useEffect(
            function () {
              b && !a && o !== h.a.LOADED && r(b).catch(t())
            },
            [b, a, t, o, r],
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
              w = a.theme,
              K = {
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
                theme: w,
                withBottomMargin: !0,
              })
              return s.a.createElement(
                k.a,
                i()({}, K, {
                  backLocation: '/i/communities/'.concat(b),
                  documentTitle: Object(d.a)({ communityName: F }),
                  primaryContent: T,
                }),
              )
            }
            var R = l()(l()({}, K), {}, { title: null }),
              L = s.a.createElement(_.b, { history: y, location: p, match: f })
            return s.a.createElement(k.a, i()({}, R, { primaryContent: L }))
          }
          return o === h.a.LOADED || o === h.a.FAILED ? s.a.createElement(v.a, { to: '/' }) : null
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
        r,
        i,
        o = a('ERkP'),
        s = a.n(o),
        c = a('cHTv'),
        u = (a('YWiL'), a('CVPS')),
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
                r = null == n ? void 0 : n.original_img_width
              if (a && l && r) return { url: a, height: l, width: r }
            },
            [null == t || null === (n = t.default_banner_media) || void 0 === n ? void 0 : n.media_info],
          )
        }
      n.a = function (e) {
        var n = m()(void 0 !== r ? r : (r = a('dMLx')), e),
          t = d(n),
          l = y(n)
        return t || l || c.c
      }
      var g = function (e) {
          var n,
            t,
            l,
            r,
            o = m()(void 0 !== i ? i : (i = a('N5wd')), e),
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
                  r =
                    null === (t = o.default_banner_media) || void 0 === t || null === (l = t.media_info) || void 0 === l
                      ? void 0
                      : l.salient_rect
                return { image: g, crop: p(r) }
              }
              return { image: c.c, crop: c.b }
            },
            [
              null === (n = o.custom_banner_media) || void 0 === n || null === (t = n.media_info) || void 0 === t
                ? void 0
                : t.salient_rect,
              null === (l = o.default_banner_media) || void 0 === l || null === (r = l.media_info) || void 0 === r
                ? void 0
                : r.salient_rect,
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
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useCommunityBannerImageThumbnail_community',
          selections: [
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageDefault_community' },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageCustom_community' },
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
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = 'bda649c5a293882e2d130676e026a4d7'), (e.exports = l)
    },
    OBBW: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    OOKO: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return o
      })
      a('uFXj')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('rHpw'),
        i = a('MWbm')
      function o(e) {
        var n = e.spacing
        return l.a.createElement(i.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != n ? r.a.theme.spaces[n] : void 0 }],
        })
      }
      var s = r.a.create(function (e) {
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
        r = a.n(l),
        i = a('m3Bd'),
        o = a.n(i),
        s = (a('ho0z'), a('ERkP')),
        c = a.n(s),
        u = a('uIZp'),
        m = (a('YWiL'), a('CVPS')),
        d = a.n(m),
        y = ['user']
      function g(e) {
        var n,
          l = e.user,
          i = o()(e, y),
          s = d()(void 0 !== t ? t : (t = a('P4CI')), l),
          m = c.a.useMemo(
            function () {
              var e, n, a, t, l, r, i, o
              return s
                ? {
                    id_str: s.rest_id,
                    screen_name: (null === (e = s.legacy) || void 0 === e ? void 0 : e.screen_name) || '',
                    name: (null === (n = s.legacy) || void 0 === n ? void 0 : n.name) || '',
                    follow_request_sent:
                      (null === (a = s.legacy) || void 0 === a ? void 0 : a.follow_request_sent) || !1,
                    protected: (null === (t = s.legacy) || void 0 === t ? void 0 : t.protected) || !1,
                    following: (null === (l = s.legacy) || void 0 === l ? void 0 : l.following) || !1,
                    followed_by: (null === (r = s.legacy) || void 0 === r ? void 0 : r.followed_by) || !1,
                    super_following: s.super_following || void 0,
                    super_follow_eligible: s.super_follow_eligible || void 0,
                    super_followed_by: s.super_followed_by || void 0,
                    smart_blocking: s.smart_blocking || void 0,
                    blocking: (null === (i = s.legacy) || void 0 === i ? void 0 : i.blocking) || void 0,
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
          r()({}, i, {
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
        r = a('yiKp'),
        i = a.n(r),
        o = a('KOwe'),
        s = a('QIgh'),
        c = a('8UdT')
      n.a = i()(i()({}, s.default), {}, l()({}, c.b.Community, o.a))
    },
    OwKm: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return C
      })
      var t = a('ddV6'),
        l = a.n(t),
        r = (a('1t7P'), a('jQ/y'), a('ho0z'), a('ERkP')),
        i = a.n(r),
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
        v = c.a.d32cf5e6,
        k = c.a.f8fa00c7,
        E = c.a.fc2a5c92,
        C = function (e) {
          var n = i.a.useContext(o.a).featureSwitches,
            a = n.getNumberValue('c9s_max_rule_name_length', 50),
            t = n.getNumberValue('c9s_max_rule_description_length', 160),
            r = e.description,
            s = e.errorText,
            c = e.name,
            p = e.onChange,
            C = i.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 3, a)
              },
              [a],
            ),
            S = i.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 0, t)
              },
              [t],
            ),
            I = i.a.useState(c),
            w = l()(I, 2),
            K = w[0],
            T = w[1],
            R = i.a.useState(C(c)),
            L = l()(R, 2),
            x = L[0],
            M = L[1],
            O = i.a.useState(void 0),
            A = l()(O, 2),
            j = A[0],
            P = A[1],
            H = i.a.useState(r),
            B = l()(H, 2),
            D = B[0],
            N = B[1],
            U = i.a.useState(S(r)),
            q = l()(U, 2),
            z = q[0],
            V = q[1],
            W = i.a.useState(void 0),
            J = l()(W, 2),
            Q = J[0],
            X = J[1],
            G = i.a.useState('' !== c),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = i.a.useCallback(
              function (e) {
                var n = !1,
                  t = e.target.value
                C(t) && ((n = !0), P(h({ minCharacterCount: 3, maxCharacterCount: a }))),
                  $(!0),
                  M(n),
                  T(t),
                  p({ description: D, name: t, valid: !n && !z })
              },
              [a, D, p, z, C],
            ),
            ne = i.a.useCallback(
              function (e) {
                var n = !1,
                  a = e.target.value
                S(a) && ((n = !0), X(k({ maxCharacterCount: t }))),
                  V(n),
                  N(a),
                  p({ name: K, description: a, valid: !n && !x })
              },
              [t, K, p, x, S],
            ),
            ae = x && j ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: a }),
            te = z ? void 0 : v({ maxCharacterCount: t }),
            le = s
              ? i.a.createElement(
                  m.a,
                  { style: F.error },
                  i.a.createElement(y.a, { Icon: u.a, headline: E, text: s, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            i.a.Fragment,
            null,
            le,
            i.a.createElement(g.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: j,
              helperText: ae,
              invalid: x && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: a,
              value: K,
            }),
            i.a.createElement(g.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: Q,
              helperText: te,
              invalid: z,
              label: _,
              name: 'typedRuleDescription',
              onChange: ne,
              spellCheck: 'false',
              validLength: t,
              value: D,
            }),
          )
        },
        F = p.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    P4CI: function (e, n, a) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'FollowUserButtonRelay_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'follow_request_sent',
                    storageKey: null,
                  },
                  action: 'THROW',
                  path: 'legacy.follow_request_sent',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.following',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followed_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocking',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
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
      e.exports = t
    },
    PKbs: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return K
      })
      a('yH/f'), a('M+/F'), a('z84I'), a('ho0z'), a('1t7P'), a('jQ/y')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('v6aA'),
        i = a('t62R'),
        o = a('3XMw'),
        s = a.n(o),
        c = a('MWbm'),
        u = l.a.createElement(
          s.a.I18NFormatMessage,
          { $i18n: 'i5ba24f4' },
          l.a.createElement(
            i.b,
            { link: 'https://help.twitter.com/en/rules-and-policies/twitter-rules', withInteractiveStyling: !1 },
            s.a.b154b059,
          ),
        ),
        m = function (e) {
          var n = e.containerStyle,
            a = e.explanation,
            t = e.explanationStyle,
            r = e.heading
          return l.a.createElement(c.a, { style: n }, r, l.a.createElement(i.b, { color: 'gray700', style: t }, a || u))
        },
        d = a('csss'),
        y = function (e) {
          var n = e.getPivotLink,
            a = e.renderBadge,
            t = e.rules
          return l.a.createElement(
            l.a.Fragment,
            null,
            t.map(function (e, t) {
              var r = e.description,
                o = e.name,
                s = e.rest_id,
                c = n(e),
                u = a(t + 1),
                m = l.a.createElement(i.b, { weight: 'bold' }, o)
              return l.a.createElement(d.a, { description: r, key: s, label: m, link: c, thumbnail: u })
            }),
          )
        },
        g = a('97Jx'),
        p = a.n(g),
        f = a('ddV6'),
        b = a.n(f),
        h = (a('hCOa'), a('87if'), a('Ee2X'), a('9Jxp')),
        _ = a('LtQU'),
        v = a('rHpw'),
        k = v.a.create(function (e) {
          return { icon: { color: e.colors.gray300, flexShrink: 0, paddingLeft: e.spaces.space12 } }
        }),
        E = function (e) {
          var n = e.badge,
            a = e.rule,
            t = a.description,
            r = a.name,
            o = l.a.createElement(i.b, { weight: 'bold' }, r)
          return l.a.createElement(d.a, {
            description: t,
            label: o,
            renderRightContent: function () {
              return l.a.createElement(_.a, { style: k.icon })
            },
            thumbnail: n,
          })
        },
        C = a('CXUS'),
        F = function (e) {
          var n = e.onReorder,
            a = e.renderBadge,
            t = e.rules
          return l.a.createElement(
            C.a,
            {
              onDragEnd: function (e) {
                if (e.destination) {
                  var a = (function (e, n, a) {
                    var t = Array.from(e),
                      l = t.splice(n, 1),
                      r = b()(l, 1)[0]
                    return t.splice(a, 0, r), t
                  })(t, e.source.index, e.destination.index)
                  n(a)
                }
              },
            },
            l.a.createElement(C.c, { droppableId: 'droppable' }, function (e, n) {
              return l.a.createElement(
                'div',
                p()({}, e.droppableProps, { ref: e.innerRef }),
                t.map(function (e, t) {
                  var r = e.rest_id
                  return l.a.createElement(
                    h.a,
                    { draggableId: r, index: t, isBeingDragged: n.draggingFromThisWith === r, key: r },
                    l.a.createElement(E, { badge: a(t + 1), rule: e }),
                  )
                }),
                e.placeholder,
              )
            }),
          )
        },
        S = a('C6f5'),
        I = a('X00g'),
        w = a('h0NW'),
        K = Object.freeze({ Default: 'Default', Pivot: 'Pivot', Reorder: 'Reorder' }),
        T = function (e, n) {
          var a = n.badgeStyle,
            t = n.enabled,
            r = n.theme,
            o = I.a.getCommunityUIColor(r)
          return l.a.createElement(
            c.a,
            { style: [R.badge, t && { backgroundColor: o }, a] },
            l.a.createElement(i.b, { align: 'center', color: 'white', weight: 'bold' }, e),
          )
        },
        R = v.a.create(function (e) {
          return {
            badge: {
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.infinite,
              justifyContent: 'center',
              overflow: 'hidden',
              height: e.spaces.space32,
              width: e.spaces.space32,
            },
            bottomMargin: { marginBottom: S.a },
          }
        })
      n.b = function (e) {
        var n = e.badgeStyle,
          a = e.displayType,
          t = void 0 === a ? K.Default : a,
          i = e.explanation,
          o = e.getPivotLink,
          s = e.headerContainerStyle,
          u = e.headerExplanationStyle,
          d = e.heading,
          g = e.limit,
          p = e.onReorder,
          f = e.ruleContainerStyle,
          b = e.rules,
          h = e.theme,
          _ = e.withBottomMargin,
          v = void 0 !== _ && _,
          k = e.withHeader,
          E = void 0 === k || k,
          C = {
            theme: h,
            enabled: l.a.useContext(r.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            badgeStyle: n,
          },
          S = (function (e, n, a) {
            return (n ? e.slice(0, n) : e).map(function (e, n) {
              return { label: e.name, description: e.description, decoration: T(n + 1, a) }
            })
          })(b, g, C),
          I = function (e) {
            return T(e, C)
          }
        return S.length > 0
          ? l.a.createElement(
              c.a,
              { style: v ? R.bottomMargin : null },
              E ? l.a.createElement(m, { containerStyle: s, explanation: i, explanationStyle: u, heading: d }) : null,
              t === K.Pivot && o
                ? l.a.createElement(y, { getPivotLink: o, renderBadge: I, rules: b })
                : t === K.Reorder && p
                ? l.a.createElement(F, { onReorder: p, renderBadge: I, rules: b })
                : l.a.createElement(w.a, { containerStyle: f, items: S }),
            )
          : null
      }
    },
    PMbW: function (e, n, a) {
      'use strict'
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
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (e.exports = l)
    },
    PbB6: function (e, n, a) {
      'use strict'
      var t,
        l,
        r = {
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
      ;(r.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (e.exports = r)
    },
    Phky: function (e, n, a) {
      'use strict'
      var t = a('IGGJ')
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e) {
          for (var n = [], a = (0, l.default)(e), t = 0; t < a.length; t++) {
            var r = a[t].screenName
            n.push(r)
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
        r = a('v6aA'),
        i = a('xZGM'),
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
        v = c.a.fc5c6913,
        k = c.a.ad211086,
        E = c.a.gf803ba1,
        C = c.a.e92fe01b,
        F = c.a.h3bb8068,
        S = c.a.a709f8f8,
        I = { viewType: 'welcome_education' },
        w = l.a.memo(function (e) {
          var n = e.forSingleCommunity,
            a = l.a.useContext(r.a).featureSwitches,
            t = l.a.useCallback(
              function () {
                var e = a.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
                  t = [K.decorationContainer, e && { color: m.a.getCommunityUIColor(e) }],
                  r = l.a.createElement(g.a, { style: t }),
                  i = l.a.createElement(p.a, { style: t }),
                  o = l.a.createElement(f.a, { style: t })
                return l.a.createElement(
                  u.a,
                  { style: K.infoItemsContainer },
                  l.a.createElement(d.a, {
                    containerStyle: K.itemContainer,
                    items: [
                      { label: v, description: k, decoration: r },
                      { label: E, description: C, decoration: i },
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
                flag: i.j,
                headline: h,
                subtext: _,
                withCloseButton: !n,
              })
        }),
        K = y.a.create(function (e) {
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
      n.a = w
    },
    R0yc: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
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
        v,
        k,
        E,
        C = {
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
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null }),
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
                  r,
                  i,
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
                      (g = {
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
                      r,
                      m,
                      (p = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                      u,
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
                  p,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'custom_banner_media',
                    plural: !1,
                    selections: (f = [
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
                    selections: f,
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
                              (b = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
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
                                            selections: (_ = [
                                              (h = {
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
                                              (v = {
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
                                            selections: _,
                                            type: 'TimelineRichTextHashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              v,
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
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'user_results',
                                                plural: !1,
                                                selections: (E = [
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
                                                          r,
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
                                                          b,
                                                        ],
                                                        type: 'UserUnavailable',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ]),
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'TimelineRichTextUser',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              d,
                                              {
                                                alias: 'mention_results',
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'user_results',
                                                plural: !1,
                                                selections: E,
                                                storageKey: null,
                                              },
                                            ],
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
                                  h,
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
                      g,
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
            id: 'fnFzFBvI9wbO88fLLL4J8Q',
            metadata: {},
            name: 'PrimaryContentQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(C.hash = '90ab0e63de690e9ae88ff94c2bcc61d6'), (e.exports = C)
    },
    ROT1: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return v
      })
      var t = a('ddV6'),
        l = a.n(t),
        r = a('ERkP'),
        i = a.n(r),
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
        v = function (e) {
          var n = e.autoFocus,
            a = void 0 !== n && n,
            t = e.communityName,
            r = e.onChange,
            c = i.a.useContext(o.a).featureSwitches,
            u = i.a.useState(!1),
            d = l()(u, 2),
            g = d[0],
            v = d[1],
            k = i.a.useState(void 0),
            E = l()(k, 2),
            C = E[0],
            F = E[1],
            S = c.getNumberValue('c9s_max_community_name_length', 30),
            I = i.a.useCallback(
              function (e) {
                var n = e.target.value,
                  a = !1
                Object(m.h)(n, 3, S)
                  ? (y()(n).length > 0 || p()(n).length > 0) && ((a = !0), F(_))
                  : ((a = !0), F(h({ minCharacterCount: 3, maxCharacterCount: S }))),
                  v(a),
                  r(n, a)
              },
              [S, r, F],
            ),
            w = b({ minCharacterCount: 3, maxCharacterCount: S })
          return i.a.createElement(s.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: a,
            calculateLength: m.b,
            errorText: C,
            helperText: w,
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
        r = a('ERkP'),
        i = a.n(r),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    S91Q: function (e, n, a) {
      'use strict'
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
      ;(l.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (e.exports = l)
    },
    SNyS: function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        r = a('ERkP'),
        i = a.n(r),
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
        r = (a('KqXw'), a('WNMA'), a('2G9S'), a('ERkP')),
        i = a.n(r),
        o = a('v6aA'),
        s = a('Ig1G'),
        c = a('3XMw'),
        u = a.n(c),
        m = a('yoO3'),
        d = a('5FtR'),
        y = a('ddV6'),
        g = a.n(y),
        p = (a('z84I'), a('/yvb')),
        f = a('eSoz'),
        b = a('rxPX'),
        h = a('0KEI'),
        _ = Object(b.a)()
          .propsFromActions(function () {
            return {
              reorderRules: f.c.reorderRules,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        v = a('rHpw'),
        k = v.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        E = a('mWs5'),
        C = a('PKbs'),
        F = u.a.b772cd65,
        S = u.a.gfca5254
      var I = _(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.explanation,
            l = e.history,
            r = e.reorderRules,
            o = n.id_str,
            s = n.rules,
            c = n.theme,
            u = i.a.useState(s),
            d = g()(u, 2),
            y = d[0],
            f = d[1],
            b = i.a.useCallback(
              function (e) {
                f(e)
              },
              [f],
            ),
            h = i.a.useCallback(
              function () {
                var e = a({}),
                  n = y.map(function (e) {
                    return e.rest_id
                  })
                r(o, { ruleIds: n })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, y, r, l, a],
            ),
            _ = i.a.createElement(p.a, { onPress: h, size: 'small', type: 'brandFilled' }, F)
          return i.a.createElement(
            m.a,
            null,
            i.a.createElement(
              E.a,
              { communityId: o, rightControl: _, screenType: 'primaryDetail', title: S },
              i.a.createElement(C.b, {
                badgeStyle: k.badgeStyle,
                displayType: C.a.Reorder,
                explanation: t,
                headerContainerStyle: k.headerContainerStyle,
                onReorder: b,
                ruleContainerStyle: k.ruleContainerStyle,
                rules: y,
                theme: c,
              }),
            ),
          )
        }),
        w = a('xZGM'),
        K = a('L47s'),
        T = a('MWbm'),
        R = a('t62R'),
        L = u.a.a9ba79c0,
        x = [u.a.h5482c79, u.a.d5033a7a, u.a.ee8c43af],
        M = u.a.j24c37b2,
        O = function () {
          return i.a.createElement(
            T.a,
            { style: j.content },
            x.map(function (e) {
              return i.a.createElement(R.b, { color: 'gray700', key: e, size: 'body', style: j.item }, e)
            }),
          )
        },
        A = function () {
          return i.a.createElement(K.a, { Content: O, actionLabel: M, flag: w.i, headline: L, subtext: '' })
        },
        j = v.a.create(function (e) {
          return {
            content: { marginTop: '-'.concat(e.spaces.space48), marginBottom: e.spaces.space32 },
            item: { paddingTop: e.spaces.space16 },
          }
        }),
        P = i.a.memo(A),
        H = a('Irs7'),
        B = a('mjJ+'),
        D = a('iY63'),
        N = a('ACHU'),
        U = a('zCf4'),
        q = u.a.gfca5254,
        z = u.a.d94edeb4,
        V = u.a.j560c8ea,
        W = u.a.ab8089ea,
        J = u.a.h63a5c3b,
        Q = i.a.createElement(D.a, null),
        X = i.a.createElement(N.a, null),
        G = { viewType: 'add' },
        Y = function (e) {
          var n = i.a.useContext(o.a).featureSwitches,
            a = n.isTrue('c9s_rule_creation_enabled'),
            t = n.isTrue('c9s_rule_editing_enabled'),
            r = n.isTrue('c9s_rule_reordering_enabled'),
            c = e.community,
            u = e.history,
            y = e.match,
            g = c.id_str,
            f = c.role,
            b = c.rules,
            h = c.theme,
            _ = y.url,
            v = f === s.a.Admin,
            F =
              a && v
                ? i.a.createElement(p.a, {
                    accessibilityLabel: V,
                    behavioralEventContext: G,
                    icon: Q,
                    link: '/i/communities/'.concat(g, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            S = b.length > 1,
            w =
              r && v && S
                ? i.a.createElement(p.a, {
                    accessibilityLabel: J,
                    icon: X,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var n = [{ text: W, link: '/i/communities/'.concat(g, '/tools/rules/reorder') }]
                      return i.a.createElement(B.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: Z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            K = i.a.createElement(T.a, { style: Z.rightControlStyle }, F, w),
            R = { displayType: C.a.Default, getPivotLink: void 0 }
          return (
            v &&
              t &&
              ((R.displayType = C.a.Pivot),
              (R.getPivotLink = function (e) {
                return '/i/communities/'.concat(g, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            i.a.createElement(
              U.d,
              null,
              i.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(_, '/') },
                i.a.createElement(
                  m.a,
                  null,
                  i.a.createElement(
                    E.a,
                    { communityId: g, rightControl: K, screenType: 'primaryDetail', title: q },
                    v ? i.a.createElement(P, null) : null,
                    i.a.createElement(
                      C.b,
                      l()(
                        {
                          badgeStyle: k.badgeStyle,
                          explanation: z,
                          headerContainerStyle: k.headerContainerStyle,
                          ruleContainerStyle: k.ruleContainerStyle,
                          rules: b,
                          theme: h,
                        },
                        R,
                      ),
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(_, '/reorder') },
                i.a.createElement(I, { community: c, explanation: z, history: u }),
              ),
              i.a.createElement(U.b, null, i.a.createElement(d.a, { to: ''.concat(_, '/') })),
            )
          )
        },
        Z = v.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      n.default = Object(H.a)(Y, { page: 'communities', section: 'rules' })
    },
    TcEn: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'getTweetButtonLocationState', function () {
          return Il
        }),
        a.d(n, 'CommunityScreen', function () {
          return wl
        })
      var t = a('yiKp'),
        l = a.n(t),
        r = (a('ho0z'), a('ERkP')),
        i = a.n(r),
        o = a('+Kfv'),
        s = a('v6aA'),
        c = a('/yvb'),
        u = a('Lsrn'),
        m = a('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(m.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [u.a.root, e.style],
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
      d.metadata = { width: 24, height: 24 }
      var y,
        g,
        p,
        f,
        b,
        h,
        _ = d,
        v = function (e) {
          var n = e.accessibilityLabel,
            a = e.behavioralEventContext,
            t = e.communityId,
            l = _
          return i.a.createElement(c.a, {
            accessibilityLabel: n,
            behavioralEventContext: a,
            hoverLabel: { label: n },
            icon: i.a.createElement(l, null),
            link: '/i/communities/'.concat(t, '/tools'),
            size: 'large',
            type: 'primaryText',
          })
        },
        k = i.a.memo(v),
        E = a('3XMw'),
        C = a.n(E),
        F = a('mjJ+'),
        S = a('zIWA'),
        I = a('SNyS'),
        w = a('ACHU'),
        K = C.a.e2429f56,
        T = C.a.df15d5b7,
        R = C.a.e48fbb01,
        L = C.a.c8c6c4e9,
        x = function (e) {
          var n = e.accessibilityLabel,
            a = e.behavioralEventContext,
            t = e.communityId,
            l = e.count,
            r = e.viewerHasModeratorAccess,
            o = i.a.useContext(s.a).featureSwitches.isTrue('c9s_report_community_enabled'),
            u = i.a.useCallback(
              function (e) {
                var n = []
                return (
                  r &&
                    n.push({
                      text: K,
                      subText: T({ count: l }),
                      Icon: S.a,
                      link: '/i/communities/'.concat(t, '/moderation/reported_tweets'),
                    }),
                  o &&
                    !r &&
                    n.push({
                      text: R,
                      Icon: S.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  n.push({ text: L, Icon: I.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  i.a.createElement(F.a, { items: n, onCloseRequested: e })
                )
              },
              [t, l, o, r],
            ),
            m = r ? _ : w.a
          return i.a.createElement(c.a, {
            accessibilityLabel: n,
            behavioralEventContext: a,
            hoverLabel: { label: n },
            icon: i.a.createElement(m, null),
            renderMenu: u,
            size: 'large',
            type: 'primaryText',
          })
        },
        M = i.a.memo(x),
        O = (a('YWiL'), a('CVPS')),
        A = a.n(O),
        j = a('MWbm'),
        P = a('Znyr'),
        H = a('rHpw'),
        B = a('Ig1G'),
        D = C.a.h6beb5fa,
        N = C.a.e3f04700,
        U = C.a.h63a5c3b,
        q = C.a.dce5e1b3,
        z = C.a.c5d8c93d,
        V = { viewType: 'app_bar_button' },
        W = void 0 !== y ? y : (y = a('HNLm')),
        J = function (e) {
          var n = A()(W, e.community),
            a = n.join_requests_result,
            t = n.moderation,
            l = n.rest_id,
            r = n.role,
            o = 0
          'CommunityJoinRequests' === a.__typename && (o += a.pending_join_request_count),
            t && (o += t.tweet_case_count)
          var c = Object(B.c)(r),
            u = i.a.useContext(s.a).featureSwitches,
            m = u.isTrue('c9s_settings_enabled'),
            d = u.isTrue('c9s_moderation_enabled') && c,
            y = m && c,
            g = c ? (r === B.a.Admin ? q : z) : U,
            p = y
              ? i.a.createElement(k, { accessibilityLabel: g, behavioralEventContext: V, communityId: l })
              : i.a.createElement(M, {
                  accessibilityLabel: g,
                  behavioralEventContext: V,
                  communityId: l,
                  count: o,
                  viewerHasModeratorAccess: c,
                })
          return i.a.createElement(
            j.a,
            { style: X.root },
            p,
            d && o > 0
              ? i.a.createElement(P.a, {
                  count: o,
                  style: X.menuControlBadge,
                  truncatedCountFormatter: D,
                  unreadCountLabel: N,
                  withBorder: !1,
                })
              : null,
          )
        },
        Q = i.a.memo(J),
        X = H.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        G = a('L/9f'),
        Y = a('IAZG'),
        Z = { context: 'CommunityAppBarButtonQuery' },
        $ = void 0 !== g ? g : (g = a('tSWT')),
        ee = function (e) {
          var n = e.communityId,
            a = Object(Y.a)($, { communityId: n })
          return i.a.createElement(Q, { community: a.community })
        },
        ne = function (e) {
          return i.a.createElement(
            G.a,
            {
              errorConfig: Z,
              fallback: {
                type: 'CustomRetry',
                content: function () {
                  return null
                },
              },
            },
            i.a.createElement(i.a.Suspense, { fallback: null }, i.a.createElement(ee, { communityId: e.communityId })),
          )
        },
        ae = i.a.memo(ne),
        te = a('c/iP'),
        le = a('m3Bd'),
        re = a.n(le),
        ie = a('1Idg'),
        oe = a('eSoz'),
        se = a('G6rE'),
        ce = a('rxPX'),
        ue = a('0KEI'),
        me = a('o3oN'),
        de = a('/ekK'),
        ye = ['loggedInUser'],
        ge = function (e, n) {
          var a = ie.c(e, n)
          return !a || Object(de.a)(e, a, 'mod_education_flag')
        },
        pe = Object(ce.a)()
          .propsFromState(function () {
            return {
              communityId: ie.c,
              community: ie.a,
              communityTheme: ie.f,
              fetchStatus: ie.b,
              hasShownModEducation: ge,
              membershipsFetchStatus: me.d,
              isCommunityMember: ie.g,
              loggedInUser: se.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              a = re()(e, ye)
            return l()({ screenName: n ? n.screen_name : void 0 }, a)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: oe.c.fetchOneIfNeeded,
              fetchCommunityMemberships: me.a,
              setFlag: de.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        fe = a('kGix'),
        be = a('feu+'),
        he = (a('yH/f'), a('WpDa')),
        _e = a('ZNT5'),
        ve = (a('1t7P'), a('jQ/y'), a('jV+4')),
        ke = a('t62R'),
        Ee = function (e) {
          var n,
            t = A()(void 0 !== p ? p : (p = a('pChJ')), e.community),
            l = i.a.useMemo(
              function () {
                return new Date(t.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [t.created_at],
            ),
            r = i.a.useMemo(
              function () {
                var e, n, a
                if ('User' === (null === (e = t.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return i.a.createElement(ve.a, {
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
            ? i.a.createElement(
                ke.b,
                { color: 'gray700' },
                i.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, r),
              )
            : null
        },
        Ce = i.a.memo(Ee),
        Fe = a('s8G+'),
        Se = a('6vad'),
        Ie = a('csss'),
        we = a('h0NW'),
        Ke = a('0yYu'),
        Te = a('cOhU'),
        Re = a('DlMI'),
        Le = a('Lxak'),
        xe = a('a5gf'),
        Me = i.a.createElement(ke.b, { weight: 'bold' }),
        Oe = C.a.af7c11a9,
        Ae = C.a.db1b9462,
        je = C.a.ea49402d,
        Pe = i.a.createElement(C.a.I18NFormatMessage, { $i18n: 'he99cc29' }, i.a.cloneElement(Me, null, C.a.gedb877c)),
        He = C.a.fcef2921,
        Be = C.a.c93dd2c8,
        De = function (e) {
          var n = A()(void 0 !== f ? f : (f = a('1rMX')), e.community),
            t = Object(Fe.a)('c9s_request_to_join_enabled'),
            l = i.a.useMemo(
              function () {
                var e,
                  a = function (e) {
                    return i.a.createElement(ke.b, null, e)
                  },
                  l = i.a.createElement(Ce, { community: n }),
                  r = n.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: Ue, label: a(Ae) },
                    CommunityOpenMembershipEducation: { decoration: qe, label: Pe, description: He },
                    CommunityRestrictedMembershipEducation: { decoration: Ve, label: Pe, description: Be },
                    CommunityVisibilityEducation: { decoration: qe, label: a(je) },
                    OriginationAttributionEducation: { decoration: ze, label: l },
                  },
                  s = [o.CommunityMemberAllowedActions]
                return (
                  t
                    ? ('CommunityRestrictedMembershipSettings' === r &&
                        s.push(o.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === r && s.push(o.CommunityOpenMembershipEducation))
                    : s.push(o.CommunityVisibilityEducation),
                  'User' === (null === (e = n.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    s.push(o.OriginationAttributionEducation),
                  s
                )
              },
              [n, t],
            )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(Se.b, { text: Oe }),
            Object(B.g)(n.role) && n.description ? i.a.createElement(Ie.a, { label: n.description }) : null,
            i.a.createElement(we.a, { containerStyle: Ne.containerStyle, items: l }),
            i.a.createElement(Ke.a, null),
          )
        },
        Ne = H.a.create(function (e) {
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
        Ue = i.a.createElement(Te.a, { style: Ne.icon }),
        qe = i.a.createElement(Re.a, { style: Ne.icon }),
        ze = i.a.createElement(Le.a, { style: Ne.icon }),
        Ve = i.a.createElement(xe.a, { style: Ne.icon }),
        We = i.a.memo(De),
        Je = a('fTQJ'),
        Qe = (a('z84I'), a('PKbs')),
        Xe = a('1Xyu'),
        Ge = a('rC8y'),
        Ye = void 0 !== b ? b : (b = a('BX8b')),
        Ze = C.a.gfca5254,
        $e = C.a.ffd9cfe6,
        en = function (e) {
          var n = e.community,
            a = A()(Ye, n),
            t = a.rules,
            l = Object(Xe.a)(a),
            r = i.a.useMemo(
              function () {
                return t.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [t],
            )
          return 0 === t.length
            ? null
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(Se.b, { text: Ze }),
                i.a.createElement(Qe.b, {
                  badgeStyle: nn.badgeStyle,
                  headerContainerStyle: [nn.containerStyle, nn.headingContainerStyle],
                  headerExplanationStyle: nn.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: nn.ruleContainerStyle,
                  rules: r,
                  theme: l,
                }),
                t.length > 5
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(Ge.a, { link: '/i/communities/'.concat(a.rest_id, '/rules'), text: $e }),
                      ' ',
                      i.a.createElement(Ke.a, null),
                    )
                  : null,
              )
        },
        nn = H.a.create(function (e) {
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
        an = i.a.memo(en),
        tn = C.a.i9028824,
        ln = C.a.cc683fb9,
        rn = function (e) {
          var n = A()(void 0 !== h ? h : (h = a('+BRr')), e.community),
            t = i.a.useMemo(
              function () {
                return (
                  (e = n.rest_id),
                  Object(_e.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (n) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: he.a,
                  })
                )
                var e
              },
              [n.rest_id],
            )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(We, { community: n }),
            i.a.createElement(an, { community: n }),
            i.a.createElement(Je.a, { loadingAccessibilityLabel: tn, module: t, title: ln }),
          )
        },
        on = i.a.memo(rn),
        sn = (a('LW0h'), a('7x/C'), a('tVqn'), a('uFXj'), a('97Jx')),
        cn = a.n(sn),
        un = a('ddV6'),
        mn = a.n(un),
        dn = (a('7xRU'), a('KqXw'), a('WNMA'), a('egQk')),
        yn = a('li/m'),
        gn = function (e, n) {
          var a
          return (null === (a = n.location.state) || void 0 === a ? void 0 : a.community) || ie.a(e, n)
        },
        pn = Object(ce.a)()
          .propsFromState(function () {
            return { community: gn, fetchStatus: ie.b, isCommunityMember: ie.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: yn.b,
              requestToJoin: oe.c.requestToJoin,
              fetchCommunityIfNeeded: oe.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        fn = a('MDbM'),
        bn = a('jHSc'),
        hn = a('5FtR'),
        _n = C.a.h4fbfa57,
        vn = C.a.ea8cfb1d,
        kn = C.a.dc1b14a1,
        En = { viewType: 'community' },
        Cn = pn(function (e) {
          var n,
            a = e.community,
            t = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            r = e.fetchStatus,
            s = e.isCommunityMember,
            u = e.join,
            m = e.match,
            d = e.onCommunityMembershipChange,
            y = e.onDismiss,
            g = e.requestToJoin,
            p = m.params.communityId,
            f =
              'ViewerRequestRequired' ===
              (null == a || null === (n = a.actions.join_action_result) || void 0 === n ? void 0 : n.reason)
          i.a.useEffect(function () {
            p && !a && r !== fn.a.LOADED && l(p).catch(t())
          })
          var b = i.a.useCallback(function (e) {
              return i.a.createElement(ke.b, { size: 'title4', weight: 'bold' }, kn({ communityName: e }))
            }, []),
            h = f ? vn : _n,
            _ = i.a.useCallback(
              function () {
                if (a) {
                  var e = a.id_str
                  if (f) return void g(e).then(y).catch(t())
                  u(e).then(d).then(y).catch(t())
                }
              },
              [a, t, u, d, f, y, g],
            ),
            v = i.a.useCallback(
              function () {
                return i.a.createElement(c.a, { onPress: _, size: 'small', type: 'brandFilled' }, h)
              },
              [h, _],
            )
          if (a) {
            var k = a.name,
              E = a.rules,
              C = a.theme
            return E && E.length && !s
              ? i.a.createElement(
                  o.a,
                  { behavioralEventContext: En },
                  i.a.createElement(
                    bn.b,
                    {
                      behavioralEventViewType: 'rules',
                      onBackClick: y,
                      rightControl: v(),
                      title: Object(dn.a)({ communityName: k }),
                    },
                    i.a.createElement(Qe.b, {
                      badgeStyle: Fn.badgeStyle,
                      headerContainerStyle: Fn.containerStyle,
                      headerExplanationStyle: Fn.headerExplanationStyle,
                      heading: b(k),
                      rules: E,
                      theme: C,
                    }),
                  ),
                )
              : i.a.createElement(hn.a, { to: '/i/communities/'.concat(a.id_str) })
          }
          return r === fn.a.LOADED ? i.a.createElement(hn.a, { to: '/' }) : null
        }),
        Fn = H.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space16 },
            headerExplanationStyle: { marginTop: e.spaces.space8 },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        Sn = ['loggedInUser'],
        In = Object(ce.a)()
          .propsFromState(function () {
            return { community: ie.a, loggedInUser: se.e.selectLoggedInUser, joinActionResultType: ie.h }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              a = re()(e, Sn)
            return l()({ isProtectedUser: null == n ? void 0 : n.protected }, a)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: yn.b,
              requestToJoin: oe.c.requestToJoin,
              leave: yn.c,
            }
          }),
        wn = (a('ssJ/'), a('X8FW')),
        Kn = a('cHvH'),
        Tn = a('sgih'),
        Rn = i.a.memo(function (e) {
          var n = Object(Kn.b)().windowWidth,
            a = e.children
          return n > H.a.theme.breakpoints.medium
            ? i.a.createElement(wn.b, { modalSize: wn.a.fixed }, a)
            : i.a.createElement(Tn.a, { type: 'full' }, a)
        }),
        Ln = a('CGyZ'),
        xn = C.a.fad95333,
        Mn = function (e) {
          var n = e.offendingRule
          return i.a.createElement(
            j.a,
            null,
            n
              ? i.a.createElement(
                  j.a,
                  { style: On.offendingRule },
                  (function (e) {
                    return i.a.createElement(
                      C.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      i.a.createElement(ke.b, { weight: 'bold' }, C.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(n),
                )
              : null,
            i.a.createElement(ke.b, null, xn),
          )
        },
        On = H.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        An = C.a.hafa07f2,
        jn = C.a.fa94c9da,
        Pn = C.a.c15bee31,
        Hn = C.a.i859676b,
        Bn = i.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          i.a.createElement(ke.b, { link: '/settings/audience_and_tagging' }, C.a.e77dfaf0),
        ),
        Dn = C.a.fc2a5c92,
        Nn = C.a.bf7bdb60,
        Un = C.a.h27d695f,
        qn = C.a.b02360f5,
        zn = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        Vn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        Wn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Jn,
        Qn,
        Xn = a('zCf4'),
        Gn = ['community', 'communityId', 'match'],
        Yn = C.a.e6057013,
        Zn = C.a.b533478f,
        $n = { follow: C.a.b171d7c4, following: C.a.aa7ae3f6, unfollow: C.a.bb1d57b6 },
        ea = C.a.j24c37b2,
        na = function (e) {
          var n = i.a.useState(void 0),
            a = mn()(n, 2),
            t = a[0],
            r = a[1],
            o = i.a.useState(!1),
            s = mn()(o, 2),
            u = s[0],
            m = s[1],
            d = { history: Object(Xn.f)(), location: Object(Xn.g)(), match: Object(Xn.i)() },
            y = Object(Fe.a)('c9s_request_to_join_enabled'),
            g = e.community,
            p = e.createLocalApiErrorHandler,
            f = e.isProtectedUser,
            b = e.join,
            h = e.leave,
            _ = e.onCommunityMembershipChange,
            v = e.requestToJoin,
            k = g.actions,
            E = k.join_action_result,
            C = k.leave_action_result,
            F = g.id_str,
            S = g.name,
            I = g.role,
            w = Object(B.g)(I),
            K = E.reason === Wn.ViewerJoinRequestRequired && y,
            T = E.reason === Wn.ViewerRequestPending && y,
            R = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !w } },
            L = i.a.useCallback(
              function () {
                var e = g.rules,
                  n = g.viewerViolatedRule,
                  a = (function (e, n, a, t) {
                    var l = e.__typename,
                      r = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      s = function (e) {
                        return { canAction: !1, message: e }
                      },
                      c = s({ headline: Dn, text: Nn })
                    switch (l) {
                      case zn.joinAvailable:
                        return o()
                      case zn.joinUnavailable:
                        switch (r) {
                          case Wn.ViewerIsRemoved:
                            return s({
                              headline: Pn,
                              text: i.a.createElement(Mn, { offendingRule: null == a ? void 0 : a.name }),
                            })
                          case Wn.ViewerNotInvited:
                            return s({ headline: An, text: jn })
                          case Wn.ViewerIsProtected:
                            return n ? s({ headline: Hn, text: Bn }) : o()
                          case Wn.ViewerJoinRequestRequired:
                            return t ? o() : c
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(E, f, n, y),
                  t = a.canAction,
                  l = a.message
                !t && l && r(l), t && (e && e.length > 0 ? m(!0) : K ? v(F).catch(p({})) : b(F).then(_).catch(p({})))
              },
              [g, F, p, f, y, b, K, E, v, _],
            ),
            x = i.a.useCallback(
              function () {
                var e = (function (e) {
                    var n,
                      a = e.__typename,
                      t = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      r = l({ headline: Dn, text: Nn })
                    switch (a) {
                      case zn.leaveAvailable:
                        return { canAction: !0, message: n }
                      case zn.leaveUnavailable:
                        switch (t) {
                          case Vn.ViewerIsSoleAdmin:
                            return l({ headline: Un, text: qn })
                          default:
                            return r
                        }
                      default:
                        return r
                    }
                  })(C),
                  n = e.canAction,
                  a = e.message
                !n && a && r(a), n && h(F).then(_).catch(p({}))
              },
              [F, p, h, C, _],
            ),
            M = i.a.useCallback(function () {
              r(void 0)
            }, []),
            O = i.a.useCallback(function () {
              m(!1)
            }, []),
            A = i.a.useMemo(
              function () {
                return K ? l()(l()({}, $n), {}, { follow: Yn }) : $n
              },
              [K],
            )
          return i.a.createElement(
            j.a,
            { style: aa.button },
            u
              ? i.a.createElement(
                  Rn,
                  null,
                  i.a.createElement(Cn, cn()({ communityId: F, onCommunityMembershipChange: _, onDismiss: O }, d)),
                )
              : null,
            T
              ? i.a.createElement(c.a, { disabled: !0, type: 'onMediaOutlined' }, Zn)
              : i.a.createElement(Ln.a, {
                  behavioralEventContext: R,
                  buttonText: A,
                  isFollowing: w,
                  name: S,
                  onFollow: L,
                  onUnfollow: x,
                  type: 'community',
                }),
            t
              ? i.a.createElement(be.a, {
                  actionLabel: ea,
                  graphicDisplayMode: 'none',
                  headline: t.headline,
                  onAction: M,
                  onClose: M,
                  subtext: t.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        aa = H.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        ta = In(function (e) {
          var n = e.community,
            a = (e.communityId, e.match, re()(e, Gn))
          return n ? i.a.createElement(na, cn()({ community: n }, a)) : null
        }),
        la = a('YeIG'),
        ra = a('MjKK'),
        ia = a('TIdA'),
        oa = a('A91F'),
        sa = a('9Xij'),
        ca = void 0 !== Jn ? Jn : (Jn = a('fK4d')),
        ua = function (e) {
          var n = A()(ca, e.community),
            a = Object(ra.a)(n),
            t = H.a.theme.aspectRatios.communityBanner
          return a && !Object(la.a)(a)
            ? i.a.createElement(
                j.a,
                null,
                i.a.createElement(ia.a, {
                  accessibilityLabel: '',
                  aspectMode: oa.a.exact(t),
                  backgroundColor: H.a.theme.colors.gray300,
                  image: a,
                }),
              )
            : i.a.createElement(sa.a, { ratio: t }, i.a.createElement(j.a, { style: ma.placeholderImageContainer }))
        },
        ma = H.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        da = i.a.memo(ua),
        ya = a('K1iM'),
        ga = a.n(ya),
        pa = (a('2G9S'), a('X00g')),
        fa = a('n4Eu'),
        ba = { red: 0, green: 0, blue: 0 },
        ha = '10px',
        _a = H.a.create(function (e) {
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
        va = function (e) {
          var n = e.children,
            t = e.community,
            l = A()(void 0 !== Qn ? Qn : (Qn = a('OBBW')), t),
            r = Object(Xe.a)(l),
            o = Object(ra.a)(l).palette,
            s = []
          if (o) {
            var c,
              u = ga()(o)
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
          var d = Object(Fe.a)('c9s_ui_colors_enabled_rweb')
          return i.a.createElement(
            j.a,
            null,
            i.a.createElement(j.a, { style: _a.descriptionContainer }, n),
            i.a.createElement(j.a, { style: [H.a.absoluteFill, _a.backgroundColorWhite] }),
            i.a.createElement(j.a, {
              style: [
                H.a.absoluteFill,
                _a.backgroundColor,
                (function (e, n) {
                  if (d) return pa.a.getCommunityGradientStyle(n, ha)
                  var a = e && fa.a.get(e),
                    t = a ? (null == a ? void 0 : a.rgb) : ba,
                    l = 'rgba('.concat(t.red, ',').concat(t.green, ',').concat(t.blue, ', 0.9)'),
                    r = 'rgba('.concat(t.red, ',').concat(t.green, ',').concat(t.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(ha, ', ')
                      .concat(r, ' ')
                      .concat(ha, ' 100%)'),
                  }
                })(s, r),
              ],
            }),
          )
        },
        ka = a('ogGF'),
        Ea = a('CaKu'),
        Ca = a('1YZw'),
        Fa = Object(ce.a)().propsFromActions(function () {
          return { addToast: Ca.b }
        }),
        Sa = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(m.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [u.a.root, e.style],
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
      Sa.metadata = { width: 24, height: 24 }
      var Ia,
        wa,
        Ka,
        Ta,
        Ra,
        La = Sa,
        xa = a('I/9y'),
        Ma = a('pwey'),
        Oa = C.a.bec3b8f9,
        Aa = { viewType: 'share_community' },
        ja = C.a.f88553c8,
        Pa = { viewType: 'copy_link' },
        Ha = { viewType: 'invite_members' },
        Ba = C.a.b139b549,
        Da = C.a.e05c00b4,
        Na = i.a.createElement(La, null),
        Ua = H.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        qa = Fa(function (e) {
          var n = A()(void 0 !== Ia ? Ia : (Ia = a('X/n0')), e.community),
            t = e.addToast,
            l = n.rest_id,
            r = n.role,
            o = Object(B.g)(r),
            s = i.a.useCallback(
              function (e) {
                Ea.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), t({ text: ja })
              },
              [t, l],
            ),
            u = i.a.useMemo(
              function () {
                return function (e) {
                  var n = []
                  return (
                    n.push({ behavioralEventContext: Pa, text: Da, Icon: xa.a, onClick: s }),
                    o &&
                      n.push({
                        behavioralEventContext: Ha,
                        text: Ba,
                        Icon: Ma.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    i.a.createElement(F.a, { items: n, onCloseRequested: e })
                  )
                }
              },
              [o, l, s],
            )
          return i.a.createElement(c.a, {
            accessibilityLabel: Oa,
            behavioralEventContext: Aa,
            icon: Na,
            renderMenu: u,
            style: Ua.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        za = i.a.memo(qa),
        Va = C.a.hb9400db,
        Wa = function (e) {
          var n = e.community,
            t = A()(void 0 !== wa ? wa : (wa = a('ldL/')), n),
            l = t.description,
            r = t.role,
            o = i.a.useState(!1),
            s = mn()(o, 2),
            c = s[0],
            u = s[1],
            m = i.a.useState(!1),
            d = mn()(m, 2),
            y = d[0],
            g = d[1],
            p = i.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), u(!c)
              },
              [c],
            )
          return !l || Object(B.g)(r)
            ? null
            : i.a.createElement(
                j.a,
                { style: Ja.description },
                i.a.createElement(ke.b, { color: 'white', getTextOverflow: g, numberOfLines: c ? void 0 : 2 }, l),
                !c && y ? i.a.createElement(ke.b, { color: 'white', onPress: p, weight: 'bold' }, Va) : null,
              )
        },
        Ja = H.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Qa = i.a.memo(Wa),
        Xa = a('ja7Y'),
        Ga = a('MtXG'),
        Ya = C.a.d58baa7e,
        Za = function (e) {
          var n = e.community,
            t = A()(void 0 !== Ka ? Ka : (Ka = a('WuQQ')), n).member_count,
            l = void 0 === t ? 0 : t,
            r = Ya(l)
          return i.a.createElement(
            Ga.a.Group,
            null,
            i.a.createElement(
              Ga.a,
              { onMedia: !0 },
              i.a.createElement(
                ke.b,
                { color: 'white' },
                i.a.createElement(
                  C.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  i.a.createElement(Ga.a.Value, null, C.a.ibd0106d({ formattedCount: r })),
                  i.a.createElement(Ga.a.Label, null, C.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        $a = a('cm6r'),
        et = a('I4+6').a.generate({
          backgroundColor: H.a.theme.colors.transparent,
          color: H.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        nt = H.a.create(function (e) {
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
        at = function (e) {
          var n = e.community,
            t = A()(void 0 !== Ta ? Ta : (Ta = a('weg/')), n),
            l = t.rest_id
          return i.a.createElement(
            $a.a,
            { interactiveStyles: et, link: '/i/communities/'.concat(l, '/members'), style: nt.membersContainer },
            i.a.createElement(Xa.a, { community: t, style: nt.rightSpace }),
            i.a.createElement(Za, { community: t }),
          )
        },
        tt = a('yoO3'),
        lt = a('k/OQ'),
        rt = C.a.a0e3ece4,
        it = C.a.ha8209bb,
        ot = C.a.d601fc2f,
        st = C.a.b721eb37,
        ct = { viewType: 'description' },
        ut = { viewType: 'facepiles_with_count' },
        mt = function (e) {
          var n = A()(void 0 !== Ra ? Ra : (Ra = a('+BRT')), e.community),
            t = n.rest_id,
            l = Object(Fe.a)('c9s_participation_enabled'),
            r = Object(Fe.a)('c9s_timelines_ranking_enabled'),
            s = Object(Fe.a)('c9s_share_community_enabled'),
            c = Object(Xn.i)(),
            u = i.a.useMemo(
              function () {
                var e = [
                  { to: '/i/communities/'.concat(t), label: it, key: it },
                  { to: '/i/communities/'.concat(t, '/latest'), label: ot, key: ot },
                  { to: '/i/communities/'.concat(t, '/about'), label: st, key: st },
                ]
                return i.a.createElement(lt.a, {
                  accessibilityLabel: rt,
                  links: r
                    ? e
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== ot
                        })
                      })(e),
                })
              },
              [t, r],
            )
          return i.a.createElement(
            tt.a,
            { behavioralEventViewType: 'timeline' },
            i.a.createElement(
              j.a,
              { style: dt.container },
              i.a.createElement(
                j.a,
                null,
                i.a.createElement(da, { community: n }),
                i.a.createElement(
                  o.a,
                  { behavioralEventContext: ct },
                  i.a.createElement(
                    va,
                    { community: n },
                    i.a.createElement(
                      ke.b,
                      { color: 'white', size: 'title2', style: dt.name, weight: 'bold' },
                      n.name.trim(),
                    ),
                    i.a.createElement(Qa, { community: n }),
                    i.a.createElement(
                      o.a,
                      { behavioralEventContext: ut },
                      i.a.createElement(
                        j.a,
                        { style: dt.bottomContainer },
                        i.a.createElement(at, { community: n }),
                        i.a.createElement(
                          j.a,
                          { style: dt.buttons },
                          s
                            ? i.a.createElement(za, { community: n })
                            : i.a.createElement(ka.a, {
                                community: n,
                                style: dt.inviteButton,
                                type: 'onMediaOutlined',
                              }),
                          l
                            ? i.a.createElement(ta, {
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
        dt = H.a.create(function (e) {
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
        yt = i.a.memo(mt),
        gt = a('/de5')
      function pt() {
        var e = Object(Xn.f)(),
          n = Object(Xn.g)(),
          a = Object(Xn.i)()
        return i.a.createElement(gt.b, { history: e, location: n, match: a })
      }
      var ft = a('FIs5'),
        bt = a('EUHl'),
        ht = a('7BdX'),
        _t = C.a.c18e3a3e,
        vt = C.a.d68146c0,
        kt = C.a.h5245afa,
        Et = C.a.f05dbeff,
        Ct = function (e) {
          var n = e.module,
            a = i.a.useCallback(function () {
              return i.a.createElement(ft.a, { buttonType: 'brandOutlined', header: _t, message: vt })
            }, [])
          return i.a.createElement(
            tt.a,
            { behavioralEventViewType: 'tweets' },
            i.a.createElement(Je.a, {
              loadingAccessibilityLabel: Et,
              module: n,
              newTweetsPillMode: bt.a.CLIENT,
              prerollDisplayLocation: ht.c.OTHER,
              refreshControl: null,
              renderEmptyState: a,
              title: kt,
            }),
          )
        },
        Ft = a('mw9i'),
        St =
          (a('MvUL'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(m.a)(
              'svg',
              l()(
                l()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [u.a.root, e.style],
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
          })
      St.metadata = { width: 24, height: 24 }
      var It,
        wt = St,
        Kt = a('wpLu'),
        Tt = C.a.bf359e0d,
        Rt = C.a.e8fcdd3a,
        Lt = C.a.b37d580e,
        xt = C.a.cafca4b2,
        Mt = C.a.ea3b38fa,
        Ot = C.a.jd667130,
        At = C.a.ca7eeabf,
        jt = C.a.acae4034,
        Pt = C.a.e2186ee2,
        Ht = C.a.j24c37b2,
        Bt = function (e) {
          var n = A()(void 0 !== It ? It : (It = a('2rr8')), e.community),
            t = Object(Xn.f)(),
            l = i.a.useCallback(
              function () {
                t.replace('/i/communities/'.concat(n.rest_id, '/'))
              },
              [t, n.rest_id],
            ),
            r = i.a.createElement(
              j.a,
              { accessibilityRole: 'list', style: Dt.rulesContainer },
              n.rules.map(function (e) {
                return i.a.createElement(
                  ke.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Dt.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === n.access,
            s = o ? Mt : Lt,
            c = o ? Ot : xt
          return i.a.createElement(
            be.a,
            {
              actionLabel: Ht,
              graphicDisplayMode: 'none',
              headline: Tt,
              isFullHeightOnMobile: !0,
              onAction: l,
              subtext: Rt,
            },
            i.a.createElement(
              j.a,
              { style: Dt.infoItemsContainer },
              i.a.createElement(we.a, {
                containerStyle: Dt.itemContainer,
                items: [
                  { label: s, description: c, decoration: i.a.createElement(wt, { style: Dt.decorationContainer }) },
                  { label: At, decoration: i.a.createElement(Kt.a, { style: Dt.decorationContainer }), description: r },
                  { label: jt, description: Pt, decoration: i.a.createElement(_, { style: Dt.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        Dt = H.a.create(function (e) {
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
        Nt = i.a.memo(Bt),
        Ut = a('dwig'),
        qt = a('0+qk'),
        zt = a('3G7m'),
        Vt = a('7JQg'),
        Wt =
          (a('FtFR'),
          a('hBvt'),
          Object(ce.a)()
            .propsFromState(function () {
              return { flags: de.b }
            })
            .propsFromActions(function () {
              return { setFlag: de.c }
            })),
        Jt = a('hOZg'),
        Qt = a('WtWS'),
        Xt = a('0ULw'),
        Gt = C.a.c66b37f9,
        Yt = C.a.g2768d0e,
        Zt = C.a.b192b58b,
        $t = C.a.gd30278f,
        el = C.a.cbdddb09,
        nl = C.a.h5890b1a,
        al = [
          {
            flag: 'setup_clicked_rules',
            title: C.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: C.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: C.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: C.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat($t, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        tl = i.a.memo(function (e) {
          var n = e.communityId,
            a = e.flags,
            t = e.setFlag,
            l = i.a.useContext(s.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            r = Object(Xn.f)(),
            o = i.a.useCallback(
              function () {
                t(n, 'setup_show_checklist', !1)
              },
              [n, t],
            )
          if (!a.setup_show_checklist || !l) return null
          var u = function (e) {
              t(n, e.flag, !0).then(function () {
                r.push(e.link(n))
              })
            },
            m = function (e, n) {
              13 === n.keyCode && u(e)
            }
          return i.a.createElement(
            j.a,
            { style: ll.wrapper },
            i.a.createElement(
              j.a,
              { style: ll.header },
              i.a.createElement(ke.b, { size: 'title3', weight: 'bold' }, Gt),
              i.a.createElement(c.a, {
                accessibilityLabel: Zt,
                icon: i.a.createElement(Jt.a, { style: ll.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: ll.dismiss,
                type: 'brandText',
              }),
            ),
            i.a.createElement(ke.b, { style: ll.subtext }, Yt),
            i.a.createElement(
              j.a,
              { accessibilityRole: 'list', style: ll.list },
              al.map(function (e) {
                var n = Boolean(a[e.flag])
                return i.a.createElement(
                  j.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !n,
                    key: e.flag,
                    onClick: n ? void 0 : u.bind(null, e),
                    onKeyPress: n ? void 0 : m.bind(null, e),
                    style: [ll.entry, n ? ll.completedEntry : ll.uncompletedEntry],
                  },
                  i.a.createElement(ke.b, { weight: 'bold' }, e.title),
                  n
                    ? i.a.createElement(Qt.a, { accessibilityLabel: el, style: ll.iconCompleted })
                    : i.a.createElement(Xt.a, { accessibilityLabel: nl, style: ll.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        ll = H.a.create(function (e) {
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
        rl = Wt(tl),
        il = (a('jQ3i'), a('x4t0'), a('8Lfv')),
        ol = a('uDfI'),
        sl = a('LI/a')
      function cl(e) {
        var n = Object(ol.c)(),
          a = Object(ue.useCreateLocalApiErrorHandler)('COMMUNITIES_TWEETS'),
          t = Object(Fe.a)('c9s_timelines_ranking_enabled'),
          l = i.a.useMemo(
            function () {
              return Object(sl.a)(e)
            },
            [e],
          ),
          r = i.a.useMemo(
            function () {
              return t ? Object(sl.b)(e) : l
            },
            [l, t, e],
          ),
          o = (function (e) {
            var n,
              a = 'PUSH' === Object(Xn.f)().action,
              t = Object(Xn.g)().pathname,
              l = i.a.useRef(),
              r =
                (null == t ? void 0 : t.includes(e)) &&
                (null === (n = l.current) || void 0 === n ? void 0 : n.includes(e))
            return (l.current = t), a && !r
          })(e),
          s = i.a.useCallback(
            function () {
              t && n(Object(il.a)(r)).catch(a({})), n(Object(il.a)(l)).catch(a({}))
            },
            [t, r, l, a, n],
          )
        return (
          i.a.useEffect(
            function () {
              o && s()
            },
            [o, s],
          ),
          i.a.useMemo(
            function () {
              return { homeModule: r, latestModule: l, refreshModules: s }
            },
            [r, l, s],
          )
        )
      }
      var ul,
        ml = a('QRqA'),
        dl = (Object.freeze({ Home: 'home', Latest: 'latest' }), { page: 'community', section: 'home' }),
        yl = { page: 'community', section: 'latest' },
        gl = { page: 'community', section: 'tweets' },
        pl = void 0 !== ul ? ul : (ul = a('R0yc')),
        fl = function (e) {
          var n = e.communityId,
            a = e.composeOptions,
            t = Object(Y.a)(pl, { communityId: n }).community,
            l = Object(Fe.a)('c9s_participation_enabled'),
            r = cl(n),
            o = r.homeModule,
            s = r.latestModule,
            c = r.refreshModules,
            u = Object(Fe.a)('c9s_timelines_ranking_enabled'),
            m = Object(Xn.f)(),
            d = Object(Xn.g)(),
            y = t.role === B.a.Admin && void 0 !== d.query.show_creation_summary,
            g = Object(B.g)(t.role) && l,
            p = Object(Xe.a)(t),
            f = i.a.useMemo(
              function () {
                return { canJoinCommunity: 'CommunityJoinAction' === t.actions.join_action_result.__typename, theme: p }
              },
              [p, t.actions.join_action_result],
            ),
            b = i.a.useMemo(
              function () {
                return g
                  ? i.a.createElement(qt.a, {
                      getLocationState: function () {
                        return a
                      },
                      history: m,
                    })
                  : null
              },
              [g, m, a],
            )
          return i.a.createElement(
            Ut.a,
            { component: Ft.a, fab: b },
            i.a.createElement(ml.a, { forSingleCommunity: f }),
            y && i.a.createElement(Nt, { community: t }),
            i.a.createElement(yt, { community: t, onCommunityMembershipChange: c }),
            i.a.createElement(
              Xn.d,
              null,
              i.a.createElement(
                Xn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/') },
                i.a.createElement(rl, { communityId: n }),
                i.a.createElement(Vt.c, { namespace: u ? dl : gl }, i.a.createElement(Ct, { module: o })),
              ),
              i.a.createElement(
                Xn.b,
                { path: '/i/communities/'.concat(n, '/latest') },
                i.a.createElement(rl, { communityId: n }),
                i.a.createElement(Vt.c, { namespace: u ? yl : gl }, i.a.createElement(Ct, { module: s })),
              ),
              i.a.createElement(
                Xn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/about') },
                i.a.createElement(on, { community: t }),
              ),
            ),
          )
        },
        bl = { page: 'community', section: 'primaryContent' },
        hl = {
          type: 'CustomRetry',
          content: function () {
            return i.a.createElement(pt, null)
          },
        },
        _l = function (e) {
          return i.a.createElement(
            Vt.c,
            { namespace: bl },
            i.a.createElement(
              tt.a,
              { behavioralEventViewType: 'Community' },
              i.a.createElement(
                G.a,
                { errorConfig: { context: 'CommunityScreen' }, fallback: hl },
                i.a.createElement(zt.a, null, i.a.createElement(fl, e)),
              ),
            ),
          )
        },
        vl = a('VS6U'),
        kl = { serversideContextType: 'community' },
        El = C.a.a7c2e06c,
        Cl = C.a.j24c37b2,
        Fl = C.a.a94092a1,
        Sl = C.a.i1fda797,
        Il = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        wl = function (e) {
          var n = e.community,
            a = e.communityId,
            t = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            s = e.fetchCommunityMemberships,
            c = e.hasShownModEducation,
            u = e.history,
            m = e.isCommunityMember,
            d = e.membershipsFetchStatus,
            y = e.screenName,
            g = e.setFlag,
            p = Object(Fe.a)('c9s_participation_enabled'),
            f = Object(Fe.a)('c9s_edit_moderators_enabled'),
            b = i.a.useCallback(
              function () {
                a && r(a).catch(t({})), d === fe.a.NONE && s().catch(t())
              },
              [d, r, a, s, t],
            )
          i.a.useEffect(
            function () {
              b()
            },
            [b],
          )
          var h = i.a.useCallback(
              function () {
                a && g(a, 'mod_education_flag', !0)
              },
              [a, g],
            ),
            _ = i.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, kl), {}, { serversideContextId: a || '' }), viewType: 'community' }
              },
              [a],
            ),
            v = i.a.useMemo(
              function () {
                return Il(a)
              },
              [a],
            ),
            k = null == n ? void 0 : n.name,
            E = null == n ? void 0 : n.role,
            C = !!m && p,
            F = f && E === B.a.Moderator && !c,
            S = i.a.useMemo(
              function () {
                return i.a.createElement(ae, { communityId: a || '' })
              },
              [a],
            ),
            I = i.a.useMemo(
              function () {
                return i.a.createElement(te.a, { communityId: a || '' })
              },
              [a],
            ),
            w = i.a.useMemo(
              function () {
                return i.a.createElement(_l, { communityId: a || '', composeOptions: v })
              },
              [a, v],
            )
          return a
            ? i.a.createElement(
                o.a,
                { behavioralEventContext: _ },
                i.a.createElement(vl.a, {
                  backLocation: y && '/'.concat(y, '/communities'),
                  composeOptions: v,
                  documentTitle: k ? El({ communityName: k }) : '',
                  history: u,
                  primaryContent: w,
                  rightControl: S,
                  sidebarContent: I,
                  title: k || null,
                  withTweetButton: C,
                }),
                F
                  ? i.a.createElement(be.a, {
                      actionLabel: Cl,
                      graphicDisplayMode: 'none',
                      headline: Fl,
                      onAction: h,
                      onClose: h,
                      subtext: Sl,
                      withCloseButton: !0,
                    })
                  : null,
              )
            : null
        },
        Kl = pe(wl)
      n.default = Kl
    },
    U0Qk: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return p
      })
      var t = a('ddV6'),
        l = a.n(t),
        r = a('ERkP'),
        i = a.n(r),
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
            r = e.onChange,
            c = i.a.useState(void 0),
            u = l()(c, 2),
            p = u[0],
            f = u[1],
            b = i.a.useState(!1),
            h = l()(b, 2),
            _ = h[0],
            v = h[1],
            k = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            E = i.a.useCallback(
              function (e) {
                var n = e.target.value,
                  a = !Object(m.h)(n, 3, k)
                a && f(g({ minCharacterCount: 3, maxCharacterCount: k })), v(a), r(n, a)
              },
              [k, f, r],
            )
          return i.a.createElement(s.a, {
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
            validLength: k,
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
        r = a('ddV6'),
        i = a.n(r),
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
        v = a('5FtR'),
        k = a('s8G+'),
        E = a('MWbm'),
        C = a('/yvb'),
        F = a('4zmP'),
        S = a('t62R'),
        I = a('rHpw'),
        w = a('I/KZ'),
        K = h.a.i6e7e298,
        T = h.a.a226497c,
        R = h.a.c9d56b71,
        L = h.a.fc2a5c92,
        x = h.a.c1ad5a11,
        M = h.a.f713fbd1,
        O = { viewType: 'community' },
        A = s.a.memo(function (e) {
          var n = e.communitiesActions,
            a = e.createCommunity,
            t = e.history,
            r = Object(k.a)('c9s_community_creation_form_membership_type_enabled'),
            o = s.a.useState(!0),
            d = i()(o, 2),
            y = d[0],
            g = d[1],
            p = s.a.useState(!1),
            b = i()(p, 2),
            h = b[0],
            I = b[1],
            A = y || h,
            P = s.a.useState(''),
            H = i()(P, 2),
            B = H[0],
            D = H[1],
            N = s.a.useState(''),
            U = i()(N, 2),
            q = U[0],
            z = U[1],
            V = s.a.useState(null),
            W = i()(V, 2),
            J = W[0],
            Q = W[1],
            X = s.a.useCallback(function (e, n) {
              D(e), g(n)
            }, []),
            G = s.a.useCallback(function (e, n) {
              z(e), 0 === e.length ? I(!1) : I(n)
            }, []),
            Y = Object(w.e)(),
            Z = i()(Y, 2),
            $ = Z[0],
            ee = Z[1],
            ne = s.a.useCallback(
              function () {
                return r ? l()({ description: q }, Object(w.c)($)) : { description: q }
              },
              [q, r, $],
            ),
            ae = s.a.useCallback(
              function () {
                Q(null),
                  a(B, ne())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var n = null == e ? void 0 : e.normalized.result
                        'string' == typeof n && t.replace('/i/communities/'.concat(n, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && Q(e)
                    })
                    .catch(function (e) {
                      Q({ error: 'GraphQL error', reason: e })
                    })
              },
              [B, a, ne, t],
            )
          if (null == n || !n.create) return s.a.createElement(v.a, { to: '/home' })
          var te = s.a.createElement(C.a, { disabled: A, onClick: ae, size: 'small', type: 'brandFilled' }, K),
            le = J
              ? s.a.createElement(
                  E.a,
                  { style: j.error },
                  s.a.createElement(F.a, { Icon: _.a, headline: L, text: x, type: 'danger' }),
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
                r
                  ? s.a.createElement(
                      s.a.Fragment,
                      null,
                      s.a.createElement(S.b, { size: 'headline2', style: j.membership, weight: 'bold' }, M),
                      s.a.createElement(w.d, { hideInvitePolicy: !0, setters: ee, state: $ }),
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
        r = a('yiKp'),
        i = a.n(r),
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
            l = e.userId,
            r = e.viewerRole
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
            o = t.user,
            s = o.id,
            c = o.screen_name
          return u.a.createElement(p.a, {
            communityId: n,
            communityRole: i,
            recordId: s,
            screenName: c,
            userId: l,
            viewerRole: r,
          })
        }),
        v = a('4e/K'),
        k = a('Ig1G'),
        E = a('GZwR'),
        C = y.a.cf4898a0,
        F = [E.a.CommunityMembers]
      function S(e) {
        var n = u.a.useContext(m.a).featureSwitches.isTrue('c9s_members_list_search_enabled'),
          a = e.community,
          t = e.communityId,
          r = e.onIsSearchingChange,
          o = null == a ? void 0 : a.role,
          c = u.a.useState(!1),
          d = s()(c, 2),
          y = d[0],
          g = d[1],
          p = u.a.useState(''),
          f = s()(p, 2),
          b = f[0],
          h = f[1],
          S = u.a.useState({}),
          w = s()(S, 2),
          K = w[0],
          T = w[1],
          R = u.a.useCallback(
            function (e, n) {
              T(function (a) {
                return i()(i()({}, a), {}, l()({}, e, n))
              })
            },
            [T],
          ),
          L = u.a.useCallback(
            function () {
              g(!0), r(!0)
            },
            [r],
          ),
          x = u.a.useCallback(
            function (e) {
              h(e)
              var n = !!e
              r(n), g(n)
            },
            [r],
          ),
          M = u.a.useCallback(
            function () {
              b || (r(!1), g(!1))
            },
            [r, b],
          )
        if (!t) return null
        return n && Object(k.c)(o)
          ? u.a.createElement(v.default, {
              alwaysOpen: y,
              communityId: t,
              filter: F,
              getItemIsDisabled: function (e) {
                if ('user' === e.type) {
                  var n = e.data.id_str,
                    a = K[n]
                  return !Object(k.g)(null == a ? void 0 : a.role)
                }
                return !1
              },
              getUserDisplayNameLabel: function (e) {
                if ('user' === e.type) {
                  var n = e.data.id_str,
                    a = K[n]
                  if (a) return Object(k.d)(a.role)
                }
              },
              inputStyle: I.textInput,
              isModal: !0,
              onDismiss: M,
              onFocus: L,
              onQueryChange: x,
              placeholder: C,
              renderUserDecoration: function (e) {
                var n = e.userId
                return o
                  ? u.a.createElement(_, { communityId: t, onCommunityRoleChange: R, userId: n, viewerRole: o })
                  : null
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
    Vnwa: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
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
              { defaultValue: null, kind: 'LocalArgument', name: 'invitesPolicy' },
              { defaultValue: null, kind: 'LocalArgument', name: 'joinPolicy' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_membershipSettings_Mutation',
            selections: [
              {
                alias: null,
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'invites_policy', variableName: 'invitesPolicy' },
                  { kind: 'Variable', name: 'join_policy', variableName: 'joinPolicy' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_put',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          r,
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
                      { args: null, kind: 'FragmentSpread', name: 'MemberRequestsPivot_community' },
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
                    type: 'CommunityMembershipSettingsPutError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsPutActionUnavailable',
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
            name: 'edit_membershipSettings_Mutation',
            selections: [
              {
                alias: null,
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_put',
                plural: !1,
                selections: [
                  r,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      s,
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
                          c,
                        ],
                        storageKey: null,
                      },
                      { alias: 'communityId', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
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
                                kind: 'ScalarField',
                                name: 'pending_join_request_count',
                                storageKey: null,
                              },
                              i,
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
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'QNRnHKALhstff-midG3p7Q',
            metadata: {},
            name: 'edit_membershipSettings_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '56906dfa2208affeb53fdbba7a29773d'), (e.exports = y)
    },
    WWTc: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i = {
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
                          (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityJoinRequests',
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
            id: 'bgIrkbAlmbsKZJGcd7VGYg',
            metadata: {},
            name: 'MemberRequestsPivotContainerQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '9b955902020d0baa1431bc7848010386'), (e.exports = i)
    },
    WuQQ: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    'X/n0': function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    XiYe: function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = t.useEffect,
        r = t.useRef
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
    atLU: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    b5s6: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        r = a('m3Bd'),
        i = a.n(r),
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
        v = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = f(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            o = (e.tweetId, i()(e, v)),
            u = s.a.useContext(c.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == r ? void 0 : r.community_id_str
          s.a.useEffect(
            function () {
              y && Object(b.a)(n) && t(y).catch(a())
            },
            [n, y, a, t],
          )
          var g = m.isTrue('responsive_web_alt_text_badge_enabled'),
            p = r && Object(_.f)(r, d, n),
            f = p && Object(_.e)(p),
            k = m.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            h.a,
            l()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: g,
              socialContextProps: f,
              tweet: r,
              withReactions: k,
            }),
          )
        })
      n.a = k
    },
    'c/iP': function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        r = a('es0u'),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        c = a.n(s),
        u = a('5Yy7'),
        m = a.n(u),
        d = a('2VqO'),
        y = a.n(d),
        g = (a('ho0z'), a('PKbs')),
        p = a('egQk'),
        f = a('eSoz'),
        b = a('rxPX'),
        h = a('0KEI'),
        _ = function (e, n) {
          var a = n.communityId
          return a ? f.c.select(e, a) : void 0
        },
        v = Object(b.a)()
          .propsFromState(function () {
            return { community: _ }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: f.c.fetchOneIfNeeded,
            }
          }),
        k = a('3XMw'),
        E = a.n(k),
        C = a('MWbm'),
        F = a('6vad'),
        S = a('rC8y'),
        I = a('rHpw'),
        w = E.a.d228a9a0,
        K = (function (e) {
          m()(a, e)
          var n = y()(a)
          function a() {
            return o()(this, a), n.apply(this, arguments)
          }
          return (
            c()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    n = e.communityId,
                    a = e.createLocalApiErrorHandler
                  ;(0, e.fetchCommunityIfNeeded)(n).catch(a())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.community,
                    a = e.communityId,
                    t = e.moderatorArea
                  if (!n || 0 === n.rules.length) return null
                  var r = n.name,
                    i = n.rules,
                    o = t ? i.length : 5
                  return l.a.createElement(
                    C.a,
                    null,
                    l.a.createElement(F.b, { text: Object(p.a)({ communityName: r }) }),
                    l.a.createElement(g.b, {
                      badgeStyle: T.badgeStyle,
                      limit: o,
                      ruleContainerStyle: T.ruleContainerStyle,
                      rules: i,
                      theme: n.theme,
                      withHeader: !1,
                    }),
                    i.length > o &&
                      l.a.createElement(S.a, {
                        link: '/i/communities/'.concat(a, '/rules'),
                        text: w,
                        withBottomRadius: !0,
                      }),
                  )
                },
              },
            ]),
            a
          )
        })(l.a.Component),
        T = I.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space12 },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: 'normal' },
          }
        }),
        R = v(K)
      n.a = function (e) {
        var n = e.moderatorArea,
          a = (function (e) {
            return { withTopicsToFollow: !e, withTrends: !e, withWhoToFollow: !e }
          })(void 0 !== n && n)
        return l.a.createElement(r.a, a, l.a.createElement(R, e))
      }
    },
    cI4y: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
        o,
        s,
        c,
        u = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
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
                    args: [(r = { kind: 'Literal', name: 'count', value: 20 })],
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
                    storageKey: '__CommunityMembers_Query_members_slice_slice(count:20)',
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
                    args: (s = [r, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                                  i,
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
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
                            name: 'result',
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
            id: 'DsO3D4rira8XTkJhaaSAqQ',
            metadata: { sliceInfoPath: ['community', 'members_slice', 'slice_info'] },
            name: 'membersSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'a115c0b85e2e9e5e448d24fc5644abcd'), (e.exports = u)
    },
    cL2e: function (e, n, a) {
      'use strict'
      a.d(n, 'c', function () {
        return L
      }),
        a.d(n, 'a', function () {
          return D
        }),
        a.d(n, 'b', function () {
          return z
        })
      var t,
        l,
        r = a('ERkP'),
        i = a.n(r),
        o = a('FIs5'),
        s = (a('YWiL'), a('3XMw')),
        c = a.n(s),
        u = a('TEoO'),
        m = a('Fr3L'),
        d = (a('ho0z'), a('j57/')),
        y = a('ja7Y'),
        g = a('rHpw'),
        p = a('MjKK'),
        f = a('CVPS'),
        b = a.n(f),
        h = function (e) {
          var n = e.item,
            l = b()(void 0 !== t ? t : (t = a('08/x')), n),
            r = Object(p.b)(l)
          return i.a.createElement(d.a, {
            communityId: l.rest_id,
            media: r,
            memberCount: l.member_count,
            membersFacepile: i.a.createElement(y.a, { community: l, shouldUseThemeColor: !1, style: _.facepile }),
            name: l.name,
          })
        },
        _ = g.a.create(function (e) {
          return { facepile: { justifyContent: 'flex-start' } }
        }),
        v = i.a.memo(h),
        k = a('s8G+'),
        E = a('DQzJ'),
        C = { context: 'CommunitiesSearchQuery' },
        F = c.a.c170a564,
        S = c.a.ae111c99,
        I = function (e) {
          return e.__id
        },
        w = void 0 !== l ? l : (l = a('DVIF')),
        K = function (e) {
          return i.a.createElement(v, { item: e })
        },
        T = function (e) {
          var n,
            a = e.query,
            t = void 0 === a ? '' : a,
            l = Object(E.a)(w, { query: t }),
            r = l.data,
            s = l.fetchNext,
            c = null == r || null === (n = r.communities_search_slice) || void 0 === n ? void 0 : n.items
          return 0 === c.length
            ? i.a.createElement(o.a, { header: S({ query: t }), message: F })
            : i.a.createElement(u.a, {
                cacheKey: 'CommunitiesSearch',
                identityFunction: I,
                items: c,
                onNearEnd: s,
                renderer: K,
              })
        },
        R = function (e) {
          var n = e.query
          return Object(k.a)('c9s_communities_search_enabled') && n
            ? i.a.createElement(m.a, { errorConfig: C }, i.a.createElement(T, { query: n }))
            : null
        },
        L = i.a.memo(R),
        x = a('ddV6'),
        M = a.n(x),
        O = (a('KqXw'), a('MvUL'), a('VY6S')),
        A = a('6OUF'),
        j = a('VwDm'),
        P = a('zCf4'),
        H = c.a.fbf01e51,
        B = function (e) {
          var n = e.initialValue,
            a = void 0 === n ? '' : n,
            t = i.a.useRef(!1)
          i.a.useEffect(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1
              }
            )
          }, [])
          var l = i.a.useState(a),
            r = M()(l, 2),
            o = r[0],
            s = r[1],
            c = Object(P.f)(),
            u = i.a.useCallback(
              function () {
                s(''), c.replace('/i/communities/suggested')
              },
              [c],
            ),
            m = i.a.useMemo(
              function () {
                return Object(O.a)(function (e) {
                  t.current && (e.length > 0 ? c.replace('/i/communities/suggested?q='.concat(e)) : u())
                }, 1e3)
              },
              [u, c],
            ),
            d = i.a.useCallback(
              function (e) {
                var n = e.target.value
                s(n), m(n)
              },
              [m],
            )
          return i.a.createElement(A.a, {
            Icon: j.a,
            autoComplete: 'off',
            isCompact: !0,
            onChange: d,
            onClear: u,
            placeholder: H,
            value: o,
            withClearButton: !0,
          })
        },
        D = i.a.memo(B),
        N = a('/yvb'),
        U = c.a.fbf01e51,
        q = function (e) {
          return Object(k.a)('c9s_communities_search_enabled')
            ? i.a.createElement(N.a, {
                icon: i.a.createElement(j.a, { accessibilityLabel: U, style: V.searchButton }),
                link: '/i/communities/suggested',
                size: 'medium',
                type: 'brandText',
              })
            : null
        },
        z = i.a.memo(q),
        V = g.a.create(function (e) {
          return { searchButton: { color: e.colors.text } }
        })
    },
    'cd+Z': function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    'cz/h': function (e, n, a) {
      'use strict'
      a.r(n)
      a('lTEL'), a('7x/C'), a('87if'), a('kYxP'), a('KrtT'), a('KqXw'), a('LJOr')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('es0u'),
        i = a('WpDa'),
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
          formatResponse: i.a,
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
        v = function (e) {
          var n = Object(h.f)(),
            a = Object(h.g)(),
            t = Object(f.a)('c9s_communities_search_enabled'),
            i = l.a.useCallback(function () {
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
                return o ? l.a.createElement(b.c, { query: o }) : i()
              },
              [i, o],
            ),
            m = t ? u() : i()
          return l.a.createElement(
            y.a,
            { behavioralEventViewType: 'discover' },
            l.a.createElement(p.a, {
              backLocation: '/',
              customSearchBox: t ? l.a.createElement(b.a, { initialValue: o }) : null,
              history: n,
              primaryContent: m,
              sidebarContent: l.a.createElement(r.a, { withSearchBox: !1 }),
              title: _,
              withSearchBox: t,
            }),
          )
        }
      n.default = l.a.memo(v)
    },
    dMLx: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    egQk: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return l
      })
      var t = a('3XMw'),
        l = a.n(t).a.c00c234e
    },
    fK4d: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    fS8x: function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        r = a('VrFO'),
        i = a.n(r),
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
        C = a('jHSc'),
        F = a('3XMw'),
        S = a.n(F),
        I = a('EeFI'),
        w = 'applyButton',
        K = a('/yvb'),
        T = a('rHpw'),
        R = S.a.gd80afba,
        L = S.a.a753a87f,
        x = (function (e) {
          d()(a, e)
          var n = g()(a)
          function a(e) {
            var t
            return (
              i()(this, a),
              (t = n.call(this, e)),
              f()(u()(t), '_getMedia', function () {
                var e = t.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              f()(u()(t), '_renderAppBarRightControl', function () {
                var e = t.state.isProcessing
                return l.a.createElement(
                  K.a,
                  { disabled: e, onPress: t._handleApplyButtonClick, size: 'small', testID: w, type: 'primaryFilled' },
                  L,
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
                    r = a.media,
                    i = a.mediaId,
                    o = a.onDone,
                    s = a.processMedia,
                    c = a.updateMediaUpload
                  t.setState({ isProcessing: !0 })
                  var u = n.getCropData(),
                    m = (r || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(b.a)(i) &&
                    (e
                      ? (e(u), o())
                      : (c({ id: i, cropData: d ? void 0 : u }),
                        s(i).then(function () {
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
                    r = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    o = this._getMedia()
                  return l.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: M.root,
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
                      withAspectRatioOptions: r,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(l.a.Component),
        M = T.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(x),
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
      var t,
        l,
        r,
        i,
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
                              { args: null, kind: 'FragmentSpread', name: 'list_communityJoinRequestsSlice' },
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
                                              i,
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
                                                  s,
                                                ],
                                                type: 'User',
                                                abstractKey: null,
                                              },
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
                                            name: 'result',
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
                            filters: null,
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
      ;(m.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (e.exports = m)
    },
    gDCe: function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        r = a('v6aA'),
        i = a('Ig1G'),
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
            t = l.a.useContext(r.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !a || a.role !== i.a.Admin || t
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
      e.exports = t
    },
    'ii+P': function (e, n, a) {
      'use strict'
      a.d(n, 'b', function () {
        return i
      })
      a('FtFR')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('wtru')
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
      n.a = i
    },
    'j57/': function (e, n, a) {
      'use strict'
      var t = a('yiKp'),
        l = a.n(t),
        r = (a('ho0z'), a('ERkP')),
        i = a.n(r),
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
        _ = { serversideContextType: 'community' },
        v = function (e) {
          var n = e.crop,
            a = e.image
          return i.a.createElement(
            s.a,
            { style: C.thumbnailContainer },
            i.a.createElement(c.a, {
              accessibilityLabel: '',
              aspectMode: u.a.SQUARE,
              backgroundColor: m.a.theme.colors.gray300,
              cropCandidates: n,
              image: a,
            }),
          )
        },
        k = function (e) {
          e.communityId
          var n = e.count,
            a = h(n)
          return i.a.createElement(
            d.a.Group,
            null,
            i.a.createElement(
              d.a,
              null,
              i.a.createElement(
                y.b,
                { color: 'gray700' },
                i.a.createElement(
                  b.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  i.a.createElement(d.a.Value, null, b.a.ibd0106d({ formattedCount: a })),
                  i.a.createElement(d.a.Label, null, b.a.cface2d0({ count: n })),
                ),
              ),
            ),
          )
        },
        E = function (e) {
          var n = e.communityId,
            a = e.media,
            t = e.memberCount,
            r = e.membersFacepile,
            c = e.name,
            u = i.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, _), {}, { serversideContextId: n }), viewType: 'community_cell' }
              },
              [n],
            ),
            m = '/i/communities/'.concat(n)
          return i.a.createElement(
            o.a,
            { behavioralEventContext: u },
            i.a.createElement(
              g.a,
              { link: m, style: C.root },
              i.a.createElement(
                s.a,
                { style: C.container },
                i.a.createElement(
                  s.a,
                  { style: C.leftColumn },
                  a ? i.a.createElement(v, a) : null,
                  i.a.createElement(
                    s.a,
                    { style: C.attribution },
                    i.a.createElement(
                      s.a,
                      { style: C.name },
                      i.a.createElement(y.b, { numberOfLines: 1, weight: 'bold' }, c),
                    ),
                    i.a.createElement(k, { communityId: n, count: t }),
                    Array.isArray(r)
                      ? i.a.createElement(p.a, { style: C.facepile, userAvatarSize: 'large', userAvatarUrls: r })
                      : r,
                  ),
                ),
              ),
            ),
          )
        }
      n.a = i.a.memo(E)
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
        r = a.n(l),
        i = a('1Xyu'),
        o = a('s8G+'),
        s = a('X00g'),
        c = a('MAI/'),
        u = (a('YWiL'), a('CVPS')),
        m = a.n(u),
        d = void 0 !== t ? t : (t = a('Eh7u'))
      n.a = function (e) {
        var n = e.community,
          a = e.shouldUseThemeColor,
          t = void 0 === a || a,
          l = e.style,
          u = m()(d, n),
          y = Object(o.a)('c9s_ui_colors_enabled_rweb') && t,
          g = (function (e) {
            return e.reduce(function (e, n) {
              var a = n.result
              if ('User' === (null == a ? void 0 : a.__typename)) {
                var t,
                  l = null === (t = a.legacy) || void 0 === t ? void 0 : t.profile_image_url_https
                l && e.push(l)
              }
              return e
            }, [])
          })(u.members_facepile_results),
          p = Object(i.b)(u),
          f = y ? s.a.getCommunityBackgroundColorName(p) : void 0
        return g.length > 0
          ? r.a.createElement(c.a, { borderColor: f, style: l, userAvatarSize: 'large', userAvatarUrls: g })
          : null
      }
    },
    jtO7: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        r = a('m3Bd'),
        i = a.n(r),
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
          r = e.label,
          o = i()(e, g),
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
            s.a.createElement(c.b, { align: a, color: t }, r),
          ),
        )
      }
    },
    k5o5: function (e, n, a) {
      'use strict'
      var t = a('IGGJ')(a('K1iM')),
        l = a('EORa'),
        r = l.loadQuery,
        i = l.useTrackLoadQueryInRender,
        o = a('XiYe'),
        s = a('PJTX'),
        c = a('ERkP'),
        u = c.useCallback,
        m = c.useEffect,
        d = c.useRef,
        y = c.useState,
        g = a('e1/f').getRequest,
        p = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== g(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var a = null != n ? n : p,
          l = s()
        i()
        var c = o(),
          g = d(new Set([a])),
          b = y(function () {
            return a
          }),
          h = b[0],
          _ = b[1],
          v = y(function () {
            return a
          }),
          k = v[0],
          E = v[1]
        a !== k && (g.current.add(a), E(a), _(a))
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
                var i,
                  o = r(null !== (i = null == a ? void 0 : a.__environment) && void 0 !== i ? i : l, e, n, t)
                g.current.add(o), _(o)
              }
            },
            [l, e, _, c],
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
                    var r = a.value
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
                } catch (r) {
                  a.e(r)
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
    kIAd: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return l
      }),
        a.d(n, 'b', function () {
          return r
        })
      var t = a('0vv5'),
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
            { type: 'hashtag', regexp: a.n(t).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
    krnS: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return O
      })
      var t,
        l,
        r,
        i = a('ERkP'),
        o = a.n(i),
        s = a('FIs5'),
        c = a('3XMw'),
        u = a.n(c),
        m = (a('YWiL'), a('TEoO')),
        d = a('Fr3L'),
        y = (a('ho0z'), a('v6aA')),
        g = a('xvzJ'),
        p = a('OROh'),
        f = a('IMA+'),
        b = a('Ig1G'),
        h = a('CVPS'),
        _ = a.n(h),
        v = function (e) {
          var n = e.communityId,
            l = e.userResult,
            r = e.viewerRole,
            i = o.a.useContext(y.a).loggedInUserId,
            s = _()(void 0 !== t ? t : (t = a('tgdH')), l).result
          if (!s || 'User' !== s.__typename || !s.legacy) return null
          var c = s.community_role,
            u = s.id,
            m = s.legacy,
            d = m.id_str,
            h = m.name,
            v = void 0 === h ? '' : h,
            k = m.profile_image_url_https,
            E = m.protected,
            C = m.screen_name,
            F = m.verified
          if (!C || !k || !v) return null
          var S = Object(b.d)(c),
            I = Object(b.c)(r)
          return o.a.createElement(f.a, {
            avatarUri: k,
            decoration: I
              ? o.a.createElement(g.a, {
                  communityId: n,
                  communityRole: c,
                  recordId: u,
                  screenName: C,
                  userId: d,
                  viewerRole: r,
                })
              : i !== d
              ? o.a.createElement(p.a, { user: s })
              : null,
            displayMode: 'UserCompact',
            displayNameLabel: S,
            isProtected: E,
            isVerified: F,
            name: v,
            screenName: C,
            userId: d,
          })
        },
        k = a('DQzJ'),
        E = { context: 'members' },
        C = void 0 !== l ? l : (l = a('cI4y')),
        F = function (e) {
          return e.__id
        },
        S = function (e) {
          var n = e.communityId,
            a = e.renderEmptyState,
            t = e.viewerRole,
            l = Object(k.a)(C, { communityId: n }),
            r = l.data,
            i = l.fetchNext,
            s = r.community.members_slice.items_results
          return o.a.createElement(m.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(n),
            identityFunction: F,
            items: s,
            noItemsRenderer: a,
            onNearEnd: i,
            renderer: function (e) {
              return o.a.createElement(v, { communityId: n, userResult: e, viewerRole: t })
            },
          })
        },
        I = function (e) {
          return o.a.createElement(d.a, { errorConfig: E }, o.a.createElement(S, e))
        },
        w = { context: 'members' },
        K = void 0 !== r ? r : (r = a('w9f9')),
        T = function (e) {
          return e.__id
        },
        R = function (e) {
          var n = e.communityId,
            a = e.renderEmptyState,
            t = e.viewerRole,
            l = Object(k.a)(K, { communityId: n }),
            r = l.data,
            i = l.fetchNext,
            s = r.community.moderators_slice.items_results
          return o.a.createElement(m.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(n),
            identityFunction: T,
            items: s,
            noItemsRenderer: a,
            onNearEnd: i,
            renderer: function (e) {
              return o.a.createElement(v, { communityId: n, userResult: e, viewerRole: t })
            },
          })
        },
        L = function (e) {
          return o.a.createElement(d.a, { errorConfig: w }, o.a.createElement(R, e))
        },
        x = u.a.cdd87523,
        M = u.a.cca5191f,
        O = { Moderators: 'Moderators', Members: 'Members' },
        A = function () {
          return o.a.createElement(s.a, { header: x, message: M })
        }
      n.b = function (e) {
        var n = e.communityId,
          a = e.mode,
          t = e.viewerRole,
          l = a === O.Moderators
        return t
          ? l
            ? o.a.createElement(L, { communityId: n, renderEmptyState: A, viewerRole: t })
            : o.a.createElement(I, { communityId: n, renderEmptyState: A, viewerRole: t })
          : null
      }
    },
    l3Hs: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityToolsScreen', function () {
          return Ae
        })
      a('KqXw'), a('WNMA')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('v6aA'),
        i = a('Ig1G'),
        o = a('EPsT'),
        s = a('eSoz'),
        c = a('rxPX'),
        u = a('0KEI'),
        m = a('KEM+'),
        d = a.n(m),
        y = a('yiKp'),
        g = a.n(y),
        p = (a('yH/f'), a('oEOe')),
        f = a('kGix'),
        b = a('Ssj5'),
        h = 'communityModeration',
        _ = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        v = Object.freeze({ fetchStatus: {} })
      function k(e) {
        return e.meta.communityId
      }
      var E = function (e) {
        return function (n, a, t) {
          var l = t.api
          return p.b(n, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: _,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      b.a.register(
        d()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case _.REQUEST:
              return g()(g()({}, e), {}, { fetchStatus: g()(g()({}, e.fetchStatus), {}, d()({}, k(n), f.a.LOADING)) })
            case _.FAILURE:
              return g()(
                g()({}, e),
                {},
                { fetchStatus: g()(g()({}, e.fetchStatus), {}, d()({}, k(n), f.a.FAILED)), error: n.payload },
              )
            case _.SUCCESS:
              var a
              if (n.payload)
                return g()(
                  g()({}, e),
                  {},
                  ((a = {}),
                  d()(a, k(n), n.payload),
                  d()(a, 'fetchStatus', g()(g()({}, e.fetchStatus), {}, d()({}, k(n), f.a.LOADED))),
                  d()(a, 'error', null),
                  a),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
      var C = function (e, n) {
          var a,
            t = (function (e, n) {
              return e[h][n]
            })(e, n.communityId)
          return null !== (a = null == t ? void 0 : t.tweet_case_count) && void 0 !== a ? a : 0
        },
        F = function (e, n) {
          return (function (e, n) {
            var a
            return null !== (a = e[h].fetchStatus[n]) && void 0 !== a ? a : f.a.NONE
          })(e, n.communityId)
        },
        S = Object(c.a)()
          .propsFromState(function () {
            return { count: C, moderationFetchStatus: F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              updateModeratorRole: s.c.updateRole,
              fetchCommunityModerationData: E,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        I = a('3XMw'),
        w = a.n(I),
        K = (a('YWiL'), a('Lsrn')),
        T = a('k/Ka'),
        R = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
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
      R.metadata = { width: 24, height: 24 }
      var L,
        x = R,
        M = a('KQzH'),
        O = a('s8G+'),
        A = a('CVPS'),
        j = a.n(A),
        P = a('Znyr'),
        H = a('rHpw'),
        B = w.a.gfccba44,
        D = w.a.h6beb5fa,
        N = w.a.dde5f322,
        U = void 0 !== L ? L : (L = a('cd+Z'))
      function q(e) {
        var n = e.community,
          a = Object(O.a)('c9s_request_to_join_enabled'),
          t = j()(U, n),
          r = t.communityId,
          i = t.join_requests_result,
          o = 'CommunityJoinRequests' === i.__typename,
          s = l.a.useCallback(
            function () {
              var e = i.pending_join_request_count,
                n = void 0 === e ? 0 : e
              return n > 0
                ? l.a.createElement(P.a, {
                    count: n,
                    standalone: !0,
                    truncatedCountFormatter: D,
                    unreadCountLabel: N,
                    withBorder: !1,
                  })
                : null
            },
            [i],
          )
        return a && o
          ? l.a.createElement(M.a, {
              label: B,
              link: '/i/communities/'.concat(r, '/moderation/member_requests'),
              renderRightContent: s,
              thumbnail: J,
            })
          : null
      }
      var z,
        V = l.a.memo(q),
        W = H.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        J = l.a.createElement(x, { style: W.thumbnail }),
        Q = a('Fr3L'),
        X = a('IAZG'),
        G = { context: 'MemberRequestsPivotContainerQuery' },
        Y = void 0 !== z ? z : (z = a('WWTc')),
        Z = function (e) {
          var n = e.communityId,
            a = Object(X.a)(Y, { communityId: n })
          return l.a.createElement(V, { community: a.community })
        },
        $ = function (e) {
          return l.a.createElement(Q.a, { errorConfig: G }, l.a.createElement(Z, { communityId: e.communityId }))
        },
        ee = l.a.memo($),
        ne = a('yoO3'),
        ae = a('mWs5'),
        te = a('MWbm'),
        le = a('6vad'),
        re = a('csss'),
        ie = a('OOKO'),
        oe = a('zIWA'),
        se = a('M2x3'),
        ce = a('SNyS'),
        ue = a('S+H3'),
        me = a('PU7B'),
        de = w.a.dce5e1b3,
        ye = w.a.c5d8c93d,
        ge = w.a.c8c7f9fc,
        pe = w.a.c045c7b6,
        fe = w.a.a87df2ee,
        be = w.a.dc6ce7b4,
        he = w.a.gfca5254,
        _e = w.a.bb081ea1,
        ve = w.a.h6beb5fa,
        ke = w.a.e3f04700,
        Ee = w.a.efc26607,
        Ce = w.a.adfcc3cd,
        Fe = w.a.d0330d9c,
        Se = w.a.fd67f7c8,
        Ie = w.a.gc00d212,
        we = w.a.a997eca0,
        Ke = { label: w.a.c6ea29a1, header: w.a.a6e13fac, text: w.a.e538848b, confirmButtonLabel: w.a.j49e6aa2 },
        Te = H.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        Re = l.a.createElement(oe.a, { style: Te.thumbnail }),
        Le = l.a.createElement(se.a, { style: Te.thumbnail }),
        xe = l.a.createElement(ce.a, { style: Te.thumbnail }),
        Me = l.a.createElement(ue.a, { style: Te.thumbnail }),
        Oe = l.a.createElement(me.a, { style: Te.thumbnail }),
        Ae = function (e) {
          var n = l.a.useContext(r.a),
            a = n.featureSwitches,
            t = n.loggedInUserId,
            s = e.community,
            c = e.communityId,
            u = e.count,
            m = e.createLocalApiErrorHandler,
            d = e.fetchCommunityModerationData,
            y = e.history,
            g = e.match,
            p = e.moderationFetchStatus,
            b = e.updateModeratorRole,
            h = m(),
            _ = a.isTrue('c9s_moderation_enabled'),
            v = a.isTrue('c9s_rule_management_enabled'),
            k = a.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              p === f.a.NONE && _ && d(c).catch(h)
            },
            [h, c, d, p, _],
          )
          var E = l.a.useCallback(
              function () {
                return _ && u > 0
                  ? l.a.createElement(P.a, {
                      count: u,
                      standalone: !0,
                      truncatedCountFormatter: ve,
                      unreadCountLabel: ke,
                      withBorder: !1,
                    })
                  : null
              },
              [u, _],
            ),
            C = s.role,
            F = C === i.a.Admin ? de : ye,
            S = C === i.a.Admin ? Ce : Fe,
            I = !g.isExact
          return l.a.createElement(
            ne.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              ae.a,
              { communityId: c, screenType: 'secondaryRoot', title: F, withDetailOpen: I },
              l.a.createElement(
                te.a,
                null,
                _
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(le.b, { text: ge }),
                      l.a.createElement(M.a, {
                        label: pe,
                        link: '/i/communities/'.concat(c, '/moderation/reported_tweets'),
                        renderRightContent: E,
                        thumbnail: Re,
                      }),
                    )
                  : null,
                l.a.createElement(ee, { communityId: c }),
                l.a.createElement(le.b, { text: fe }),
                l.a.createElement(M.a, {
                  description: Ee({ memberCount: s.member_count }),
                  label: be,
                  link: '/i/communities/'.concat(c, '/tools/members'),
                  thumbnail: Me,
                }),
                v
                  ? l.a.createElement(M.a, {
                      description: S,
                      label: he,
                      link: '/i/communities/'.concat(c, '/tools/rules'),
                      thumbnail: Oe,
                    })
                  : null,
                C === i.a.Admin
                  ? l.a.createElement(M.a, {
                      description: Se,
                      label: _e,
                      link: '/i/communities/'.concat(c, '/tools/settings'),
                      thumbnail: Le,
                    })
                  : null,
                l.a.createElement(re.a, {
                  description: we,
                  label: Ie,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: xe,
                }),
                C === i.a.Moderator && k
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(ie.a, { spacing: 'space1' }),
                      l.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: Ke.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: Ke.header,
                        confirmationSheetText: Ke.text,
                        label: Ke.label,
                        onConfirmationSheetConfirm: function () {
                          t &&
                            b(c, { userId: t, role: i.a.Member }).then(function () {
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
        je = S(Ae)
      n.default = je
    },
    'ldL/': function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    m0MN: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunitiesModerationContainer', function () {
          return Xn
        })
      var t,
        l,
        r,
        i = a('97Jx'),
        o = a.n(i),
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
        v = a('G1WX'),
        k = (a('ho0z'), a('c/iP')),
        E = (a('YWiL'), a('3XMw')),
        C = a.n(E),
        F = a('VTxf'),
        S = a('yoO3'),
        I = a('Fr3L'),
        w = a('FIs5'),
        K = a('TEoO'),
        T = (a('1t7P'), a('jQ/y'), a('ddV6')),
        R = a.n(T),
        L = a('1YZw'),
        x = a('uDfI'),
        M = a('MWbm'),
        O = a('/yvb'),
        A = a('rHpw'),
        j = a('CVPS'),
        P = a.n(j),
        H = (a('7x/C'), a('JtPf'), a('849X'), a('TJCb'), a('dqsQ')),
        B = a('HvW7'),
        D = a.n(B)
      void 0 !== t || (t = a('i/x0'))
      var N,
        U,
        q,
        z,
        V = void 0 !== l ? l : (l = a('Dm5+')),
        W = void 0 !== r ? r : (r = a('C2fM')),
        J = C.a.i22835dd,
        Q = C.a.cb59a0fd,
        X = C.a.ic7db4ea,
        G = void 0 !== N ? N : (N = a('PMbW')),
        Y = function (e) {
          var n = e.communityId,
            a = e.communityJoinRequestActions,
            t = e.userId,
            l = P()(G, a),
            r = l.join_request_approve_action_result,
            i = l.join_request_deny_action_result,
            o = (function () {
              var e = D()(V),
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
                            updater: function (e, n) {
                              if (
                                'CommunityJoinRequest' ===
                                (null == n ? void 0 : n.community_join_request_approve.__typename)
                              ) {
                                var a,
                                  t,
                                  l =
                                    null === (a = e.getRootField('community_join_request_approve')) ||
                                    void 0 === a ||
                                    null === (t = a.getLinkedRecord('user_relationship')) ||
                                    void 0 === t
                                      ? void 0
                                      : t.getLinkedRecord('community'),
                                  r = Object(H.a)(l)
                                null == r || r.invalidateRecord()
                              }
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
              var e = D()(W),
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
            f = Object(x.c)(),
            b = u || p,
            h = 'CommunityJoinRequestDenyAction' === (null == i ? void 0 : i.__typename),
            _ = 'CommunityJoinRequestApproveAction' === (null == r ? void 0 : r.__typename),
            v = m.a.useCallback(
              function () {
                g({ communityId: n, userId: t }).catch(function () {
                  f(Object(L.b)({ text: X }))
                })
              },
              [f, g, n, t],
            ),
            k = m.a.useCallback(
              function () {
                c({ communityId: n, userId: t }).catch(function () {
                  f(Object(L.b)({ text: X }))
                })
              },
              [f, c, n, t],
            )
          return m.a.createElement(
            M.a,
            { style: Z.buttons },
            m.a.createElement(O.a, { disabled: !h || b, onPress: v, style: Z.button, type: 'destructiveOutlined' }, Q),
            m.a.createElement(O.a, { disabled: !_ || b, onPress: k, style: Z.button, type: 'primaryOutlined' }, J),
          )
        },
        Z = A.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        $ = a('tocL'),
        ee = a('h0NW'),
        ne = a('t62R'),
        ae = a('0yYu'),
        te = a('IMA+'),
        le = a('GBcw'),
        re = a('6Rrp'),
        ie = a('5oT/'),
        oe = void 0 !== U ? U : (U = a('8vG3')),
        se = C.a.d7f13fb8,
        ce = C.a.a340df66,
        ue = function (e) {
          var n = e.icon,
            a = e.label
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(ee.a, {
              containerStyle: pe.container,
              items: [{ label: m.a.createElement(ne.b, null, a), decoration: n }],
            }),
            m.a.createElement(ae.a, null),
          )
        },
        me = { blocking: C.a.g8907fde, muting: C.a.f69c2298 },
        de = {
          mutual: { contextType: $.a.FollowMutual, text: C.a.ae2205d1 },
          following: { contextType: $.a.FollowFollowing, text: C.a.d960b55b },
          followedBy: { contextType: $.a.FollowFollowed, text: C.a.b7f1e58a },
        },
        ye = {},
        ge = function (e) {
          var n = e.communityJoinRequest,
            a = P()(oe, n),
            t = a.user_relationship.community.id_str,
            l = a.user_relationship.user_results.result,
            r = a.state
          if (!l || 'User' !== l.__typename || !l.legacy) return null
          var i = l.id_str,
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
          switch (r) {
            case 'Approved':
              return m.a.createElement(ue, { icon: fe, label: se({ screenName: f }) })
            case 'Denied':
              return m.a.createElement(ue, { icon: be, label: ce({ screenName: f }) })
            case 'Invalid':
              return null
          }
          var b = a.created_at,
            h = (function (e) {
              var n = e.following,
                a = e.isFollowedBy
              return n && a ? de.mutual : n ? de.following : a ? de.followedBy : void 0
            })({ isFollowedBy: u, following: d }),
            _ = (function (e) {
              var n = e.blocking,
                a = e.muting
              return n ? me.blocking : a ? me.muting : void 0
            })({ blocking: s, muting: y }),
            v = m.a.createElement(
              M.a,
              null,
              _ && m.a.createElement(ne.b, { color: 'red500', style: pe.bottomText }, _),
              m.a.createElement(Y, { communityId: t, communityJoinRequestActions: a.actions, userId: i }),
            )
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(te.a, {
              avatarUri: p,
              bottomControl: v,
              description: c || void 0,
              displayMode: 'UserDetailed',
              entities: ye,
              name: g,
              screenName: f,
              screenNameSuffix: m.a.createElement(le.a, { color: 'gray700', timestamp: b }),
              socialContext: h,
              userId: i,
            }),
            m.a.createElement(ae.a, null),
          )
        },
        pe = A.a.create(function (e) {
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
        fe = m.a.createElement(re.a, { style: pe.icon }),
        be = m.a.createElement(ie.a, { style: pe.icon }),
        he = C.a.addbb11e,
        _e = C.a.c38131de,
        ve = void 0 !== q ? q : (q = a('Jt8P')),
        ke = function (e) {
          return e.id
        },
        Ee = function (e) {
          return m.a.createElement(ge, { communityJoinRequest: e })
        },
        Ce = function () {
          return m.a.createElement(w.a, { header: he, message: _e })
        },
        Fe = function (e) {
          var n = e.communityJoinRequests,
            a = e.fetchNext,
            t = P()(ve, n).items
          return m.a.createElement(K.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: ke,
            items: t,
            noItemsRenderer: Ce,
            onNearEnd: a,
            renderer: Ee,
          })
        },
        Se = a('VS6U'),
        Ie = a('zCf4'),
        we = a('DQzJ'),
        Ke = C.a.gfccba44,
        Te = 'member_requests',
        Re = { context: Te },
        Le = void 0 !== z ? z : (z = a('gAl+')),
        xe = function (e) {
          var n = Object(Ie.f)(),
            a = e.communityId,
            t = Object(we.a)(Le, { communityId: a }),
            l = t.data,
            r = t.fetchNext,
            i = l.community,
            o = i.join_requests_result,
            s = i.name
          if ('CommunityJoinRequests' === o.__typename) {
            var c = o.pending_join_requests_slice,
              u = m.a.createElement(k.a, { communityId: a, moderatorArea: !0 }),
              d = m.a.createElement(Fe, { communityJoinRequests: c, fetchNext: r })
            return m.a.createElement(
              S.a,
              { behavioralEventViewType: Te },
              m.a.createElement(Se.a, {
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
        Me = function (e) {
          var n = e.communityId
          return m.a.createElement(I.a, { errorConfig: Re }, m.a.createElement(xe, { communityId: n }))
        },
        Oe = a('/de5'),
        Ae = a('yiKp'),
        je = a.n(Ae),
        Pe = (a('2G9S'), a('uFXj'), a('z84I'), a('3zvM')),
        He = a('lMB6'),
        Be = Object(Pe.e)({ namespace: 'communityReports' }),
        De = He.a.register(Be),
        Ne = a('G6rE'),
        Ue = function (e, n) {
          var a,
            t = null === (a = n.tweetCase) || void 0 === a ? void 0 : a.reports
          return (t ? De.selectMany(e, t) : []).map(function (n) {
            var a = n.user
            return je()(je()({}, n), {}, { reporter: Ne.e.select(e, a) })
          })
        },
        qe = Object(b.a)().propsFromState(function () {
          return { reports: Ue }
        }),
        ze = a('855f'),
        Ve = a('cHvH'),
        We = a('5mJL'),
        Je = a('efqG'),
        Qe = a('21zW'),
        Xe = function (e) {
          return (function (e) {
            var n = e.count,
              a = e.formattedCount
            return m.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              m.a.createElement(ne.b, { color: 'primary' }, C.a.ff0f7429({ count: n, formattedCount: a })),
            )
          })({ count: e, formattedCount: ze.a.getFormattedCount(e) })
        },
        Ge = function (e) {
          var n = e.report,
            a = e.withBottomBorder,
            t = n.created_at,
            l = n.reporter,
            r = m.a.createElement(le.a, { timestamp: t })
          return l
            ? m.a.createElement(Ve.a, null, function (e) {
                var t = e.windowWidth
                return m.a.createElement(
                  M.a,
                  { style: a ? Ze.bottomBorder : null },
                  m.a.createElement(te.a, {
                    avatarUri: l.profile_image_url_https,
                    decoration: r,
                    displayMode: 'UserCompact',
                    isProtected: l.protected,
                    isVerified: l.verified,
                    name: l.name,
                    screenName: l.screen_name,
                    style: t > A.a.theme.breakpoints.small ? Ze.userCell : void 0,
                    userId: l.id_str,
                  }),
                  m.a.createElement(
                    We.a,
                    { avatarCell: null },
                    m.a.createElement(ne.b, { color: 'gray700', size: 'subtext2', style: Ze.rule }, n.rule.name),
                  ),
                )
              })
            : null
        },
        Ye = qe(function (e) {
          var n = m.a.useState(!1),
            a = R()(n, 2),
            t = a[0],
            l = a[1],
            r = e.reports,
            i = e.tweetCase,
            o = i.report_count,
            s = i.report_created_at_max
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(
              Je.a,
              {
                contentStyle: Ze.popover,
                onDismiss: function () {
                  l(!1)
                },
                renderContent: function () {
                  return m.a.createElement(
                    M.a,
                    { style: Ze.contentContainer },
                    r.map(function (e, n) {
                      return m.a.createElement(Ge, { key: e.id_str, report: e, withBottomBorder: n < r.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: t ? 'forceVisible' : 'forceHidden',
              },
              m.a.createElement(
                ne.b,
                {
                  onPress: function () {
                    l(!0)
                  },
                },
                Xe(o),
              ),
            ),
            m.a.createElement(Qe.a, null),
            m.a.createElement(le.a, { timestamp: s }),
          )
        }),
        Ze = A.a.create(function (e) {
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
        $e = a('9EWH'),
        en = Object(Pe.e)({ namespace: 'communityCases' }),
        nn = {
          keepTweet: Object(Pe.c)(en, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var a = n.meta.entityId
              return Object($e.a)(e, function (e) {
                e.entities[a].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(Pe.c)(en, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var a = n.meta.entityId
              return Object($e.a)(e, function (e) {
                e.entities[a].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        an = je()(je()({}, en), nn),
        tn = He.a.register(an),
        ln = a('XOJV'),
        rn = function (e, n) {
          var a = n.tweetId
          return a ? ln.a.selectHydrated(e, a) : void 0
        },
        on = function (e, n) {
          var a = n.tweetId
          return tn.select(e, a)
        },
        sn = function (e, n) {
          var a = rn(e, n)
          return !!a && Object(f.h)(e, a)
        },
        cn = Object(b.a)()
          .propsFromState(function () {
            return { tweet: rn, tweetCase: on, disableRemoveFromCommunity: sn }
          })
          .propsFromActions(function () {
            return { keep: tn.keepTweet, dismiss: tn.dismissTweet }
          }),
        un = a('b5s6'),
        mn = a('mjJ+'),
        dn = a('IG7M'),
        yn = a('boUI'),
        gn = a('zIWA'),
        pn = a('fz3c'),
        fn = (a('yH/f'), a('n5fo')),
        bn = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        hn = C.a.ad10c66d,
        _n = C.a.c6caed9c,
        vn = function (e) {
          return m.a.createElement(ne.b, null, e)
        },
        kn = function (e) {
          var n = e.screenName
          switch (e.type) {
            case bn.Hidden:
              var a = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(n),
                t = [{ label: vn(a), decoration: Cn }]
              return m.a.createElement(ee.a, { accessibilityLabel: hn, containerStyle: En.container, items: t })
            case bn.Kept:
              var l = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(n),
                r = [{ label: vn(l), decoration: Fn }]
              return m.a.createElement(ee.a, { accessibilityLabel: _n, containerStyle: En.container, items: r })
            default:
              return null
          }
        },
        En = A.a.create(function (e) {
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
        Cn = m.a.createElement(fn.a, { style: En.icon }),
        Fn = m.a.createElement(re.a, { style: En.icon }),
        Sn = { page: 'reported_tweets', component: 'tweet' },
        In = { viewType: 'tweet_moderation_case' },
        wn = C.a.f1d9930c,
        Kn = C.a.a219e217,
        Tn = C.a.fa524057,
        Rn = C.a.g30bc699,
        Ln = C.a.f0306107,
        xn = C.a.b99364a5,
        Mn = cn(function (e) {
          var n,
            a = m.a.useContext(d.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            t = e.dismiss,
            l = e.keep,
            r = e.tweet,
            i = e.tweetCase,
            o = e.tweetId,
            s = null == r || null === (n = r.user) || void 0 === n ? void 0 : n.screen_name,
            c = m.a.useCallback(
              function (n) {
                if (r && s) {
                  var t = [
                      {
                        behavioralEventContext: { viewType: 'view_profile' },
                        text: Rn({ screenName: s }),
                        Icon: yn.a,
                        link: '/'.concat(s),
                      },
                      {
                        text: Ln,
                        Icon: gn.a,
                        behavioralEventContext: { viewType: 'report_tweet' },
                        link: {
                          pathname: '/i/report/'.concat(pn.a.Tweet, '/').concat(r.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Sn },
                        },
                        onClick: function () {
                          n()
                        },
                      },
                    ],
                    l = r.community_id_str,
                    i = r.user,
                    o = null == i ? void 0 : i.id_str
                  return (
                    a &&
                      !e.disableRemoveFromCommunity &&
                      o &&
                      l &&
                      t.push({
                        text: xn({ screenName: s }),
                        Icon: ie.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'
                            .concat(pn.a.RemoveCommunityMember, '/')
                            .concat(o, '?community_id=')
                            .concat(l),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Sn },
                        },
                        onClick: function () {
                          n()
                        },
                      }),
                    m.a.createElement(mn.a, { items: t, onCloseRequested: n })
                  )
                }
                return null
              },
              [r, s, a, e.disableRemoveFromCommunity],
            ),
            u = function () {
              l(o)
            },
            g = function () {
              t(o)
            }
          if (s && (null == r ? void 0 : r.reportingVisibility) === pn.b.HiddenCommunityTweet)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(kn, { screenName: s, type: bn.Hidden }),
              m.a.createElement(ae.a, null),
            )
          if (
            (null != i && i.isDismissed) ||
            'community_tweet_member_removed' === (null == r ? void 0 : r.limited_actions)
          )
            return null
          if (s && null != i && i.isKept)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(kn, { screenName: s, type: bn.Kept }),
              m.a.createElement(ae.a, null),
            )
          if (!i) return null
          return m.a.createElement(
            y.a,
            { behavioralEventContext: In },
            m.a.createElement(
              M.a,
              { style: On.container },
              m.a.createElement(
                M.a,
                { style: On.reportsBar },
                m.a.createElement(Ye, { tweetCase: i }),
                m.a.createElement(dn.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: c,
                  style: On.menu,
                }),
              ),
              m.a.createElement(un.a, { tweetId: o }),
              r
                ? m.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var n = e.windowWidth <= A.a.theme.breakpoints.small
                    return m.a.createElement(
                      M.a,
                      { style: [On.buttons, n && On.buttonsMobile] },
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(pn.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: je()(je()({}, Sn), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [On.button, n && On.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        wn,
                      ),
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [On.button, n && On.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Tn,
                      ),
                    )
                  })
                : m.a.createElement(
                    M.a,
                    { style: On.buttons },
                    m.a.createElement(
                      O.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: g,
                        style: On.button,
                        type: 'primaryOutlined',
                      },
                      Kn,
                    ),
                  ),
            ),
            m.a.createElement(ae.a, null),
          )
        }),
        On = A.a.create(function (e) {
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
        An = a('hqKg'),
        jn = a('wAC9'),
        Pn = function (e, n) {
          var a = n.community
          return a ? a.id_str : void 0
        },
        Hn = function () {
          return Object(An.createSelector)(Pn, function (e) {
            return e
              ? (function (e) {
                  return Object(jn.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (n) {
                      return je()(je()({}, n), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Bn = Object(b.a)()
          .propsFromState(function () {
            return { sliceModule: Hn() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Dn = a('FS1z'),
        Nn = C.a.c045c7b6,
        Un = C.a.dffb0774,
        qn = C.a.cbb2a93c,
        zn = Bn(function (e) {
          var n = m.a.useContext(d.a).featureSwitches,
            a = e.community,
            t = e.history,
            l = e.sliceModule,
            r = a.id_str,
            i = a.name,
            o = n.isTrue('responsive_web_communities_slices_enabled'),
            s = l
              ? m.a.createElement(Dn.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return m.a.createElement(w.a, { header: Un, message: qn })
                  },
                  renderer: function (e) {
                    return m.a.createElement(Mn, { tweetId: e })
                  },
                })
              : null
          return m.a.createElement(
            S.a,
            { behavioralEventViewType: 'reported_tweets' },
            m.a.createElement(Se.a, {
              backLocation: '/i/communities/'.concat(r),
              history: t,
              primaryContent: o ? s : null,
              sidebarContent: m.a.createElement(k.a, { communityId: r, moderatorArea: !0 }),
              subtitle: i,
              title: Nn,
            }),
          )
        }),
        Vn = ['analytics', 'community'],
        Wn = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        Jn = { viewType: 'community' }
      function Qn(e) {
        var n = m.a.useContext(d.a).featureSwitches,
          a = (e.analytics, e.community),
          t = c()(e, Vn),
          l = t.match.path,
          r = n.isTrue('c9s_request_to_join_enabled')
        return Object(g.c)(a.role)
          ? m.a.createElement(
              y.a,
              { behavioralEventContext: Jn },
              m.a.createElement(
                Ie.d,
                null,
                m.a.createElement(
                  Ie.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  m.a.createElement(zn, o()({}, t, { community: a })),
                ),
                r
                  ? m.a.createElement(
                      Ie.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      m.a.createElement(Me, { communityId: a.id_str }),
                    )
                  : null,
                m.a.createElement(Ie.b, null, m.a.createElement(Oe.b, t)),
              ),
            )
          : m.a.createElement(Oe.b, t)
      }
      function Xn(e) {
        var n = e.community,
          a = e.createLocalApiErrorHandler,
          t = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          r = c()(e, Wn),
          i = r.match.params.communityId,
          s = m.a.useCallback(
            function () {
              i && t(i).catch(a())
            },
            [i, a, t],
          )
        return (
          m.a.useEffect(
            function () {
              return s()
            },
            [s],
          ),
          m.a.createElement(v.a, {
            fetchStatus: l,
            onRequestRetry: s,
            render: function () {
              return n ? m.a.createElement(Qn, o()({}, r, { community: n })) : null
            },
          })
        )
      }
      n.default = _(Xn)
    },
    mWs5: function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return p
      })
      a('KqXw'), a('MvUL'), a('2G9S')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('3XMw'),
        i = a.n(r),
        o = a('M2mT'),
        s = a('zCf4'),
        c = a('MWbm'),
        u = a('mw9i'),
        m = a('0yYu'),
        d = a('/yvb'),
        y = a('rHpw'),
        g = i.a.i2209530
      function p(e) {
        var n = e.children,
          a = e.communityId,
          t = e.onSubmit,
          r = e.rightControl,
          i = e.screenType,
          y = e.secondaryBar,
          p = e.submitDisabled,
          b = e.subtitle,
          h = e.title,
          _ = e.withBottomBorder,
          v = e.withDetailOpen,
          k = Object(s.f)(),
          E = 'secondaryRoot' === i,
          C = '/i/communities/'.concat(a),
          F = ''.concat(C, '/tools'),
          S = E ? C : F,
          I = l.a.useCallback(
            function () {
              E ? k.replace(S) : k.goBack({ backLocation: S })
            },
            [S, k, E],
          )
        return l.a.createElement(
          o.a,
          {
            backLocation: S,
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
        r = (a('1t7P'), a('jQ/y'), a('ho0z'), a('ERkP')),
        i = a.n(r),
        o = a('v6aA'),
        s = a('eSoz'),
        c = a('xZGM'),
        u = a('rxPX'),
        m = a('0KEI'),
        d = a('1Idg'),
        y = function (e, n) {
          return Object(c.D)(e, c.h)
        },
        g = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: y }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.z)(c.h)
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
        v = a('OwKm'),
        k = a('AfjF'),
        E = a('MWbm'),
        C = a('/yvb'),
        F = a('jtO7'),
        S = a('4zmP'),
        I = a('eb3s'),
        w = a('rHpw'),
        K = h.a.h99020ef,
        T = h.a.i2209530,
        R = h.a.a1c93d73,
        L = h.a.f74a5adb,
        x = h.a.fbb0ed91,
        M = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        j = h.a.c3a0d44e
      function P(e) {
        var n = i.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          a = e.addRuleInformEducationFlag,
          t = e.community,
          r = e.createLocalApiErrorHandler,
          s = e.editRule,
          c = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          g = t.id_str,
          b = t.rules,
          h = i.a.useState(''),
          w = l()(h, 2),
          P = w[0],
          B = w[1],
          D = i.a.useState(''),
          N = l()(D, 2),
          U = N[0],
          q = N[1],
          z = i.a.useState(!1),
          V = l()(z, 2),
          W = V[0],
          J = V[1],
          Q = i.a.useState(''),
          X = l()(Q, 2),
          G = X[0],
          Y = X[1],
          Z = i.a.useState(!1),
          $ = l()(Z, 2),
          ee = $[0],
          ne = $[1],
          ae = i.a.useState(!1),
          te = l()(ae, 2),
          le = te[0],
          re = te[1],
          ie = i.a.useCallback(
            function (e) {
              var n = e.description,
                a = e.name,
                t = e.valid
              B(a), q(n), J(t)
            },
            [B, q, J],
          ),
          oe = i.a.useCallback(
            function () {
              var e = r({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    a = n.code === p.a.GenericBadRequest && n.message ? n.message : R
                  return Y(a), J(!1), []
                },
              })
              'string' == typeof d &&
                s(g, { ruleId: d, name: P, description: U })
                  .then(function () {
                    c.goBack({ backLocation: '/i/communities/'.concat(g, '/tools/rules') })
                  })
                  .catch(e)
            },
            [g, P, U, d, s, c, r],
          ),
          se = i.a.useCallback(
            function () {
              var e = r({
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
            [g, d, u, c, r],
          )
        if (!d || !m) return i.a.createElement(_.a, { to: '/i/communities/'.concat(g, '/tools/rules') })
        var ce = m.description,
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
            T,
          ),
          de = 1 === b.length,
          ye = n
            ? i.a.createElement(
                E.a,
                { style: H.delete },
                i.a.createElement(F.a, {
                  color: 'red500',
                  disabled: de,
                  label: x,
                  onPress: function () {
                    ne(!0)
                  },
                }),
              )
            : void 0,
          ge = de ? i.a.createElement(E.a, { style: H.callout }, i.a.createElement(S.a, { text: L })) : void 0,
          pe = ee
            ? i.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: M,
                onCancel: function () {
                  ne(!1)
                },
                onConfirm: se,
                text: O,
              })
            : void 0,
          fe = le
            ? i.a.createElement(k.a, {
                onCancel: function () {
                  re(!1)
                },
                onConfirm: function () {
                  a(), oe(), re(!1)
                },
              })
            : void 0
        return i.a.createElement(
          f.b,
          { behavioralEventViewType: 'rules', history: c, rightControl: me, title: K },
          ge,
          i.a.createElement(v.a, { description: ce || '', errorText: G, name: ue, onChange: ie }),
          ye,
          pe,
          fe,
        )
      }
      n.default = g(P)
      var H = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, n, a) {
      'use strict'
      a.d(n, 'b', function () {
        return B
      })
      var t = a('ddV6'),
        l = a.n(t),
        r = a('VrFO'),
        i = a.n(r),
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
        v = a('6/RC'),
        k = a('P74S'),
        E = a.n(k),
        C = a('kGix')
      a.d(n, 'a', function () {
        return C.a
      })
      var F = a('tI3i'),
        S = a.n(F),
        I = a('fs1G'),
        w = a('0KEI'),
        K = a('VYI2'),
        T = a.n(K),
        R = a('35hZ'),
        L = a.n(R),
        x = a('k5o5'),
        M = a.n(x),
        O = a('PJTX'),
        A = a.n(O),
        j = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: I.a })
        },
        P = (function (e) {
          d()(a, e)
          var n = g()(a)
          function a() {
            var e
            i()(this, a)
            for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r]
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
        H = function (e) {
          var n = e.query,
            a = e.queryRef,
            t = e.render,
            l = L()(n, a)
          return t({ fetchStatus: C.a.LOADED, data: l, error: null, retry: I.a })
        },
        B = function (e, n) {
          if (v.canUseDOM)
            return function (a) {
              var t = a.fetchPolicy,
                r = void 0 === t ? 'store-or-network' : t,
                i = a.render,
                o = a.variables,
                s = M()(e),
                c = l()(s, 2),
                u = c[0],
                m = c[1],
                d = Object(w.useCreateLocalApiErrorHandler)(n.errorConfig.context),
                y = T()(o),
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
                    m(g, { fetchPolicy: r })
                  },
                  [r, m, g],
                ),
                u
                  ? h.a.createElement(
                      h.a.Suspense,
                      { fallback: h.a.createElement(j, { render: i }) },
                      h.a.createElement(
                        P,
                        { errorHandler: d(n.errorConfig.options || {}), key: u.fetchKey, retry: p },
                        function (n, a) {
                          return n
                            ? i({ fetchStatus: C.a.FAILED, error: n, data: null, retry: a })
                            : h.a.createElement(H, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (t) {
            t.fetchPolicy
            var r = t.render,
              i = t.variables,
              o = A()(),
              s = Object(w.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              c = T()(i),
              u = l()(c, 1)[0],
              m = a.get(o)
            if (m) return m
            var d = h.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      S()(e, 'Fetch query returned empty data'),
                      r({ fetchStatus: C.a.LOADED, data: e, error: null, retry: I.a })
                    )
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (s(n.errorConfig.options || {})(e),
                        r({ fetchStatus: C.a.FAILED, data: null, error: e, retry: I.a }))
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
          return K
        })
      var t = a('ddV6'),
        l = a.n(t),
        r = (a('1t7P'), a('jQ/y'), a('ho0z'), a('ERkP')),
        i = a.n(r),
        o = a('v6aA'),
        s = a('eSoz'),
        c = a('xZGM'),
        u = a('rxPX'),
        m = a('0KEI'),
        d = function (e, n) {
          return Object(c.D)(e, c.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.z)(c.h)
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
        v = a('/yvb'),
        k = a('eb3s'),
        E = b.a.j560c8ea,
        C = b.a.i2209530,
        F = b.a.gaa3239a,
        S = b.a.a67445d5,
        I = b.a.fcbe0992,
        w = b.a.j24c37b2
      function K(e) {
        var n = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          a = e.addRuleInformEducationFlag,
          t = e.community,
          r = e.createLocalApiErrorHandler,
          s = e.createRule,
          c = e.history,
          u = e.shouldShowRuleInformEducation,
          m = t.id_str,
          d = t.rules,
          y = i.a.useState(''),
          f = l()(y, 2),
          b = f[0],
          K = f[1],
          T = i.a.useState(''),
          R = l()(T, 2),
          L = R[0],
          x = R[1],
          M = i.a.useState(!1),
          O = l()(M, 2),
          A = O[0],
          j = O[1],
          P = i.a.useState(!1),
          H = l()(P, 2),
          B = H[0],
          D = H[1],
          N = i.a.useState(''),
          U = l()(N, 2),
          q = U[0],
          z = U[1],
          V = i.a.useState(!1),
          W = l()(V, 2),
          J = W[0],
          Q = W[1],
          X = i.a.useCallback(
            function (e) {
              var n = e.description,
                a = e.name,
                t = e.valid
              z(''), K(a), x(n), j(t)
            },
            [K, x, j],
          ),
          G = i.a.useCallback(
            function () {
              D(!0)
              var e = r({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    a = n.code === g.a.GenericBadRequest && n.message ? n.message : F
                  return z(a), j(!1), []
                },
              })
              s(m, { name: b, description: L })
                .then(function () {
                  c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, L, s, c, r],
          ),
          Y = i.a.useCallback(
            function () {
              u ? Q(!0) : G()
            },
            [G, u],
          ),
          Z = i.a.createElement(v.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= n,
          ee = i.a.createElement(k.a, {
            confirmButtonLabel: w,
            headline: S,
            onConfirm: function () {
              c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: n }),
            withCancelButton: !1,
          }),
          ne = J
            ? i.a.createElement(_.a, {
                onCancel: function () {
                  Q(!1)
                },
                onConfirm: function () {
                  a(), G(), Q(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : i.a.createElement(
              p.b,
              { behavioralEventViewType: 'add_rule', history: c, rightControl: Z, title: E },
              i.a.createElement(h.a, { description: '', errorText: q, name: '', onChange: X }),
              ne,
            )
      }
      n.default = y(K)
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
    oEoC: function (e, n, a) {
      'use strict'
      a.d(n, 'e', function () {
        return u
      }),
        a.d(n, 'c', function () {
          return m
        }),
        a.d(n, 'b', function () {
          return d
        }),
        a.d(n, 'g', function () {
          return y
        }),
        a.d(n, 'a', function () {
          return g
        }),
        a.d(n, 'd', function () {
          return p
        }),
        a.d(n, 'f', function () {
          return b
        })
      var t = a('RhWx'),
        l = a.n(t),
        r = a('yiKp'),
        i = a.n(r),
        o =
          (a('hBpG'),
          a('7x/C'),
          a('vrRf'),
          a('KqXw'),
          a('WNMA'),
          a('M+/F'),
          a('LJOr'),
          a('tVqn'),
          a('jwue'),
          a('+oxZ'),
          a('z84I'),
          a('LW0h'),
          a('2G9S'),
          a('oQhu')),
        s = a('kIAd'),
        c = a('rHpw')
      function u(e, n) {
        var a,
          t = s.b.scoper.find(function (t) {
            if (-1 !== t.srcInputs.indexOf(n)) return (a = e.match(t.regexp))
          }),
          l = ''
        return a && (l = a && (1 === a.length ? a[0] : a[1])), t ? i()(i()({}, t.scope), {}, { src: n, q: l }) : null
      }
      function m(e, n) {
        var a = n.slice(0, e),
          t = n.slice(e, n.length),
          l = a.search(s.b.WordEnd),
          r = l >= 0 ? a.slice(l) : '',
          i = t.search(s.b.WordBoundary),
          o = r + t.slice(0, i)
        return o.trim() ? { start: l, end: e + i, word: o } : { start: -1, end: -1, word: '' }
      }
      function d() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function y(e) {
        var n = e.altKey,
          a = e.ctrlKey,
          t = e.metaKey
        return !(n || a || t)
      }
      function g(e, n) {
        var a = []
        e.forEach(function (e) {
          var t = n.find(function (n) {
            return n.id === e.id
          })
          t && t.data && t.data.result_context ? a.push(t) : a.push(e)
        })
        var t = a.map(function (e) {
            return e.id
          }),
          r = n.filter(function (e) {
            return t.indexOf(e.id) < 0
          })
        return [].concat(a, l()(r))
      }
      var p = Object(o.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(c.a.theme.spaces.space64, ')'),
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
    ogGF: function (e, n, a) {
      'use strict'
      var t,
        l = a('97Jx'),
        r = a.n(l),
        i = a('m3Bd'),
        o = a.n(i),
        s = a('ERkP'),
        c = a.n(s),
        u = a('/yvb'),
        m = a('3XMw'),
        d = a.n(m),
        y = a('pwey'),
        g = (a('YWiL'), a('CVPS')),
        p = a.n(g),
        f = ['community'],
        b = d.a.b139b549,
        h = c.a.createElement(y.a, null),
        _ = function (e) {
          var n = e.community,
            l = o()(e, f),
            i = p()(void 0 !== t ? t : (t = a('qre1')), n)
          if (!i || 'CommunityInvitesUnavailable' === i.invites_result.__typename) return null
          var s = '/i/communities/'.concat(i.rest_id, '/invite')
          return c.a.createElement(u.a, r()({ accessibilityLabel: b, icon: h, link: s, type: 'primaryText' }, l))
        }
      n.a = c.a.memo(_)
    },
    pChJ: function (e, n, a) {
      'use strict'
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
                        kind: 'RequiredField',
                        field: {
                          alias: null,
                          args: null,
                          concreteType: 'ApiUser',
                          kind: 'LinkedField',
                          name: 'legacy',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                            {
                              kind: 'RequiredField',
                              field: {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'verified',
                                storageKey: null,
                              },
                              action: 'THROW',
                              path: 'creator_results.result.legacy.verified',
                            },
                          ],
                          storageKey: null,
                        },
                        action: 'THROW',
                        path: 'creator_results.result.legacy',
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
      e.exports = t
    },
    qre1: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    rC8y: function (e, n, a) {
      'use strict'
      a('hBvt')
      var t = a('SV7d'),
        l = a('ERkP'),
        r = a.n(l),
        i = a('t62R'),
        o = a('htQn'),
        s = a('rHpw'),
        c = { viewType: 'module_footer' }
      var u = s.a.create(function (e) {
        return {
          root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          withBottomRadius: {
            borderBottomLeftRadius: e.borderRadii.xLarge,
            borderBottomRightRadius: e.borderRadii.xLarge,
          },
        }
      })
      n.a = function (e) {
        var n = e.align,
          a = e.link,
          l = e.onPress,
          s = e.text,
          m = e.weight,
          d = e.withBottomRadius,
          y = e.withDarkerInteractiveBackground
        return r.a.createElement(
          t.a,
          { behavioralEventContext: c },
          r.a.createElement(
            o.a,
            { link: a, onPress: l, style: [u.root, d && u.withBottomRadius], withDarkerInteractiveBackground: y },
            r.a.createElement(i.b, { align: n, color: 'primary', weight: m }, s),
          ),
        )
      }
    },
    's8G+': function (e, n, a) {
      'use strict'
      var t = a('ERkP'),
        l = a.n(t),
        r = a('v6aA')
      n.a = function (e) {
        var n = l.a.useContext(r.a).featureSwitches
        return l.a.useMemo(
          function () {
            return n.isTrue(e)
          },
          [e, n],
        )
      }
    },
    tSWT: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityAppBarButtonQuery',
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
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityAppBarButton_community' }],
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
            name: 'CommunityAppBarButtonQuery',
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
                    concreteType: 'CommunityModeration',
                    kind: 'LinkedField',
                    name: 'moderation',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'tweet_case_count', storageKey: null },
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
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
                          r,
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
                  r,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'UokEXDYuJSjzYA3oK6gLOw',
            metadata: {},
            name: 'CommunityAppBarButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '6c6f9de5ca51845b9c1588ecf7cab696'), (e.exports = i)
    },
    tgdH: function (e, n, a) {
      'use strict'
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
                    kind: 'RequiredField',
                    field: {
                      alias: null,
                      args: null,
                      concreteType: 'ApiUser',
                      kind: 'LinkedField',
                      name: 'legacy',
                      plural: !1,
                      selections: [
                        { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                        {
                          kind: 'RequiredField',
                          field: {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'followed_by',
                            storageKey: null,
                          },
                          action: 'THROW',
                          path: 'result.legacy.followed_by',
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
                          kind: 'RequiredField',
                          field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                          action: 'THROW',
                          path: 'result.legacy.protected',
                        },
                        { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                        {
                          kind: 'RequiredField',
                          field: { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                          action: 'THROW',
                          path: 'result.legacy.verified',
                        },
                      ],
                      storageKey: null,
                    },
                    action: 'THROW',
                    path: 'result.legacy',
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
      e.exports = t
    },
    tnnC: function (e, n, a) {
      'use strict'
      var t = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      e.exports = t
    },
    tot2: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunityPeopleScreen', function () {
          return L
        })
      var t = a('ddV6'),
        l = a.n(t),
        r = (a('vrRf'), a('ERkP')),
        i = a.n(r),
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
        v = a('VS6U'),
        k = a('k/OQ'),
        E = a('krnS'),
        C = a('zCf4'),
        F = b.a.h5245afa,
        S = b.a.dc6ce7b4,
        I = b.a.f8321d82,
        w = b.a.ga2aa43c,
        K = { viewType: 'community' },
        T = { viewType: 'all' },
        R = { viewType: 'moderators' },
        L = i.a.memo(function (e) {
          var n = e.community,
            a = e.communityId,
            t = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            m = e.history,
            d = e.location
          i.a.useEffect(
            function () {
              a && r(a).catch(t())
            },
            [a, t, r],
          )
          var y = i.a.useState(!1),
            g = l()(y, 2),
            p = g[0],
            f = g[1],
            b = (null == d ? void 0 : d.pathname) && d.pathname.indexOf('members') > 0,
            L = b ? S : w,
            x = i.a.useMemo(
              function () {
                return a
                  ? [
                      { to: { pathname: '/i/communities/'.concat(a, '/members'), state: d.state }, label: I, key: I },
                      {
                        to: { pathname: '/i/communities/'.concat(a, '/moderators'), state: d.state },
                        label: w,
                        key: w,
                      },
                    ]
                  : []
              },
              [a, d.state],
            ),
            M = a
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(u.a, { community: n, communityId: a, onIsSearchingChange: f }),
                  p
                    ? null
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(k.a, { accessibilityLabel: L, links: x }),
                        i.a.createElement(
                          C.d,
                          null,
                          i.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(a, '/members') },
                            i.a.createElement(
                              o.a,
                              { behavioralEventContext: T },
                              i.a.createElement(E.b, {
                                communityId: a,
                                mode: E.a.Members,
                                viewerRole: null == n ? void 0 : n.role,
                              }),
                            ),
                          ),
                          i.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(a, '/moderators') },
                            i.a.createElement(
                              o.a,
                              { behavioralEventContext: R },
                              i.a.createElement(h.a, { community: n }),
                              i.a.createElement(E.b, {
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
          return i.a.createElement(
            o.a,
            { behavioralEventContext: K },
            i.a.createElement(
              _.a,
              { behavioralEventViewType: 'members' },
              i.a.createElement(v.a, {
                backLocation: a ? '/i/communities/'.concat(a, '/') : '/',
                documentTitle: F,
                history: m,
                primaryContent: M,
                rightControl: b && a ? i.a.createElement(c.a, { communityId: a }) : null,
                sidebarContent: i.a.createElement(s.a, null),
                title: S,
              }),
            ),
          )
        }),
        x = p(L)
      n.default = x
    },
    u0MR: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunitiesScreen', function () {
          return en
        })
      var t,
        l,
        r = a('VrFO'),
        i = a.n(r),
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
        v = a('es0u'),
        k = a('cL2e'),
        E = a('1Idg'),
        C = a('li/m'),
        F = a('G6rE'),
        S = a('rxPX'),
        I = a('0KEI'),
        w = function (e, n) {
          var a = E.i(e, n)
          if (a) return F.e.selectByScreenName(e, a)
        },
        K = Object(S.a)()
          .propsFromState(function () {
            return { hasCommunityMemberships: C.d, screenName: E.i, user: w }
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
        L = a('5oT/'),
        x = a('/yvb'),
        M = a('rHpw'),
        O = (a('YWiL'), a('CVPS')),
        A = a.n(O),
        j = R.a.a226497c,
        P = h.a.memo(function (e) {
          return 'CommunityCreateAction' !== A()(void 0 !== t ? t : (t = a('zum0')), e.createActionResult).__typename
            ? null
            : h.a.createElement(x.a, {
                icon: h.a.createElement(L.a, { accessibilityLabel: j, style: H.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        H = M.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        B = h.a.memo(P),
        D = a('Fr3L'),
        N = a('IAZG'),
        U = { context: 'CommunityCreateButton' },
        q = void 0 !== l ? l : (l = a('S91Q')),
        z = function (e) {
          var n,
            a =
              null === (n = Object(N.a)(q, {}, { fetchPolicy: 'store-and-network' }).viewer) || void 0 === n
                ? void 0
                : n.create_community_action_result
          return a ? h.a.createElement(B, { createActionResult: a }) : null
        },
        V = function (e) {
          return h.a.createElement(D.a, { errorConfig: U }, h.a.createElement(z, null))
        },
        W = h.a.memo(V),
        J = a('GOQE'),
        Q = (a('z84I'), a('M+/F'), a('yiKp')),
        X = a.n(Q),
        G = (a('ho0z'), a('tVqn'), a('uFXj'), a('v6aA')),
        Y = a('YeIG'),
        Z = 'community-thumbnail-image',
        $ = 'community-thumbnail-name-container',
        ee = a('MWbm'),
        ne = a('X00g'),
        ae = a('htQn'),
        te = a('9Xij'),
        le = a('TIdA'),
        re = a('A91F'),
        ie = a('t62R'),
        oe = { serversideContextType: 'community' },
        se = M.a.create(function (e) {
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
              width: 'calc(('.concat(M.a.theme.spaces.space36, ' * 3) + ').concat(M.a.theme.spaces.space24, ')'),
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
            r = a.name,
            i = a.theme,
            o = h.a.useMemo(
              function () {
                return { clientEntity: X()(X()({}, oe), {}, { serversideContextId: t || '' }), viewType: 'thumbnail' }
              },
              [t],
            )
          if (Object(Y.a)(null == l ? void 0 : l.image) || !r) return null
          var s = null == l ? void 0 : l.image,
            c = null == l ? void 0 : l.crop,
            u = M.a.theme.aspectRatios.communityBanner,
            m = n ? ne.a.getCommunityBackgroundColor(i) : M.a.theme.colors.translucentBlack77
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
                        aspectMode: re.a.exact(u),
                        backgroundColor: M.a.theme.colors.gray300,
                        cropCandidates: c,
                        image: s,
                        testID: Z,
                      }),
                    ),
                    h.a.createElement(
                      ee.a,
                      { style: [se.name, { backgroundColor: m }], testID: $ },
                      h.a.createElement(
                        ie.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        r.trim(),
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
            r = e.location.pathname
          h.a.useEffect(
            function () {
              l === ge.a.NONE && t().catch(a())
            },
            [a, t, l],
          )
          var i = h.a.useMemo(
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
                h.a.createElement(pe.a, { style: [_e.paddingHorizontal, _e.bottomBorder] }, i),
                n.length > 10 &&
                  h.a.createElement(
                    ee.a,
                    { style: _e.bottomBorder },
                    h.a.createElement(fe.a, { link: '/'.concat(r, '/memberships'), text: be }),
                  ),
              )
        }),
        _e = M.a.create(function (e) {
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
        ve = ye(he),
        ke = a('WpDa'),
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
          formatResponse: ke.a,
        }),
        Fe = a('OUEC'),
        Se = a('dwig'),
        Ie = a('0+qk'),
        we = a('oQhu'),
        Ke = a('7BdX'),
        Te = a('fTQJ'),
        Re = a('QRqA'),
        Le = a('FIs5'),
        xe = a('mw9i'),
        Me = R.a.c63602d3,
        Oe = R.a.d7346631,
        Ae = R.a.fbd12fea,
        je = (function (e) {
          d()(a, e)
          var n = g()(a)
          function a() {
            var e
            i()(this, a)
            for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              f()(
                u()(e),
                '_getModule',
                Object(we.a)(function () {
                  return Ce
                }),
              ),
              f()(u()(e), '_renderEmptyTimeline', function () {
                return h.a.createElement(Le.a, { header: Oe, message: Ae })
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
                    r = this._getModule(),
                    i = this._c9sParticipationEnabled && n ? h.a.createElement(Ie.a, { history: a }) : null
                  return t && r
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(Re.a, null),
                        h.a.createElement(
                          Se.a,
                          { container: xe.a, fab: i },
                          h.a.createElement(ve, { location: l }),
                          h.a.createElement(Te.a, {
                            entryConfiguration: Fe.a,
                            module: r,
                            prerollDisplayLocation: Ke.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: Me,
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
        He = a('hqKg'),
        Be = function (e, n) {
          var a = n.user
          return a ? a.id_str : void 0
        },
        De = function () {
          return Object(He.createSelector)(Be, function (e) {
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
                    formatResponse: ke.a,
                  })
                })(e)
              : void 0
          })
        },
        Ne = Object(S.a)()
          .propsFromState(function () {
            return { urtModule: De() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Ue = a('yoO3'),
        qe = R.a.c63602d3,
        ze = R.a.d7346631,
        Ve = R.a.hb01fe46,
        We = Ne(
          (function (e) {
            d()(a, e)
            var n = g()(a)
            function a() {
              var e
              i()(this, a)
              for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r]
              return (
                (e = n.call.apply(n, [this].concat(l))),
                f()(u()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? h.a.createElement(Le.a, { header: ze, message: Ve }) : null
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
        Je = a('5FtR'),
        Qe = a('Y6L+'),
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
            i()(this, a)
            for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_renderRightControl', function () {
                return h.a.createElement(
                  ee.a,
                  { style: nn.rightControl },
                  h.a.createElement(k.b, null),
                  h.a.createElement(W, null),
                )
              }),
              f()(u()(e), '_renderPrimaryContent', function () {
                var n = e.props,
                  a = n.hasCommunityMemberships,
                  t = n.history,
                  l = n.location,
                  r = n.user,
                  i = e._isLoggedInUser()
                return h.a.createElement(
                  Ge.d,
                  null,
                  h.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Qe.J, '/communities') },
                    h.a.createElement(Pe, { hasCommunityMemberships: a, history: t, isLoggedInUser: i, location: l }),
                  ),
                  h.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Qe.J, '/communities/memberships') },
                    h.a.createElement(We, { isLoggedInUser: i, user: r }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (n) {
                var a = n || e.props,
                  t = a.createLocalApiErrorHandler,
                  l = a.fetchOneUserByScreenNameIfNeeded,
                  r = a.screenName
                r && l(r).catch(t(J.a))
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
                        sidebarContent: h.a.createElement(v.a, null),
                        title: n,
                      }),
                    )
                  }
                  return h.a.createElement(Je.a, { to: '/' })
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      f()(en, 'contextType', G.a)
      var nn = M.a.create(function (e) {
          return { rightControl: { color: e.colors.text, display: 'flex', flexDirection: 'row' } }
        }),
        an = K(en)
      n.default = an
    },
    uI9t: function (e, n, a) {
      'use strict'
      var t = a('VrFO'),
        l = a.n(t),
        r = a('Y9Ll'),
        i = a.n(r),
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
        v = a('cm6r'),
        k = a('rHpw'),
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
            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(r))),
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
            i()(a, [
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
                    r = e.style,
                    i = k.a.theme.colors[a],
                    o = _.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return g.a.createElement(
                    C.a,
                    { style: [w.container, r] },
                    g.a.createElement(
                      v.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [w.choice, w.choiceContainer] },
                      g.a.createElement(F.a, { style: [w.choice, { color: i }] }),
                      Object(E.a)('input', {
                        accessibilityLabel: n,
                        name: l,
                        checked: t,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: w.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    t &&
                      g.a.createElement(
                        C.a,
                        { style: [w.choice, w.checkMarkContainer] },
                        g.a.createElement(S.a, { style: [w.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component),
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
        K = I,
        T = 1,
        R = (function (e) {
          s()(a, e)
          var n = u()(a)
          function a() {
            var e
            return l()(this, a), ((e = n.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(T, '_LABEL')), (T += 1), e
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    n = this.props,
                    a = n.accessibilityLabel,
                    t = n.autoFocus,
                    l = n.layout,
                    r = n.onChange,
                    i = n.options,
                    o = n.value,
                    s = 'two-rows' === l,
                    c = [L.root, s && L.flexWrap],
                    u = s ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return g.a.createElement(
                    C.a,
                    { accessibilityLabel: a, accessibilityRole: 'radiogroup', style: c },
                    i.map(function (n) {
                      var a = n.accessibilityLabel,
                        l = n.colorName
                      return g.a.createElement(K, {
                        accessibilityLabel: a,
                        autoFocus: t && o === l,
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
            a
          )
        })(g.a.Component)
      d()(R, 'defaultProps', { layout: 'one-row' })
      var L = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      n.a = R
    },
    w9f9: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i,
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
                    args: (s = [r, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                                  i,
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
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
                            name: 'result',
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
            id: '1W9nsM7w6WRAP-FAHkrXig',
            metadata: { sliceInfoPath: ['community', 'moderators_slice', 'slice_info'] },
            name: 'moderatorsSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (e.exports = u)
    },
    'weg/': function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    xPe1: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'CommunitySettingsRouter', function () {
          return nn
        })
      a('KqXw'), a('WNMA'), a('1t7P'), a('jQ/y'), a('ho0z')
      var t = a('ERkP'),
        l = a.n(t),
        r = a('v6aA'),
        i = a('ddV6'),
        o = a.n(i),
        s = a('jTgF'),
        c = a('AspN'),
        u = a('eSoz'),
        m = a('rxPX'),
        d = a('0KEI'),
        y = function (e, n) {
          var a = n.localMediaId,
            t = a && isFinite(a) ? c.k(e, a) : []
          return o()(t, 1)[0]
        },
        g = Object(m.a)()
          .propsFromState(function () {
            return { localMedia: y }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: u.a,
              removeLocalMediaId: u.e,
              editCommunityBanner: u.d,
              removeBanner: u.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        p = a('3XMw'),
        f = a.n(p),
        b = a('Nh1N'),
        h = a('JAeQ'),
        _ = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        v = Object(_.a)({
          loader: function () {
            return Promise.all([a.e(0), a.e(3), a.e(6), a.e(9), a.e(178)]).then(a.bind(null, 'P68U'))
          },
        }),
        k = a('eyty'),
        E = a('MWbm'),
        C = a('rHpw'),
        F = a('TIdA'),
        S = a('A91F'),
        I = a('4zmP'),
        w = a('eb3s'),
        K = f.a.a49f884d,
        T = f.a.ea965b81,
        R = f.a.gea6cc19,
        L = f.a.cfd2f35d,
        x = f.a.j35d3ad6,
        M = f.a.f1e8fb21,
        O = f.a.fc2a5c92,
        A = f.a.e405ec21
      var j,
        P,
        H = C.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        B = g(function (e) {
          var n = e.addLocalMediaId,
            a = e.communityId,
            t = e.createLocalApiErrorHandler,
            r = e.editCommunityBanner,
            i = e.hasCustomMedia,
            c = e.localMedia,
            u = e.localMediaId,
            m = e.media,
            d = e.removeBanner,
            y = e.removeLocalMediaId,
            g = l.a.useState(!1),
            p = o()(g, 2),
            f = p[0],
            _ = p[1],
            j = l.a.useState(!1),
            P = o()(j, 2),
            B = P[0],
            D = P[1],
            N = l.a.useState(!1),
            U = o()(N, 2),
            q = U[0],
            z = U[1],
            V = l.a.useState(!1),
            W = o()(V, 2),
            J = W[0],
            Q = W[1],
            X = null == m ? void 0 : m.image,
            G = C.a.theme.aspectRatios.communityBanner,
            Y = t({
              customErrorHandler: function (e) {
                return D(A), []
              },
            }),
            Z = function (e) {
              return z(!1), Q(Boolean(e)), e ? n(a, e) : y(a)
            },
            $ = X ? l.a.createElement(F.a, { accessibilityLabel: K, aspectMode: S.a.exact(G), image: X }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            B
              ? l.a.createElement(
                  E.a,
                  { style: H.error },
                  l.a.createElement(I.a, { Icon: b.a, headline: O, text: B, type: 'danger' }),
                )
              : null,
            l.a.createElement(v, {
              accessibilityLabel: T,
              aspectRatio: G,
              currentContent: $,
              location: k.d.CommunityBanner,
              mediaItem: q ? c : void 0,
              onChange: function (e) {
                var n = o()(e, 1)[0]
                D(!1), Z(n)
              },
              onFailure: function () {
                D(A), y(a)
              },
              onRemove:
                i || q
                  ? function () {
                      Z(), _(!0)
                    }
                  : void 0,
            }),
            J && c
              ? l.a.createElement(h.a, {
                  aspectRatio: G,
                  media: c,
                  onCancel: Z,
                  onCropDone: function (e) {
                    Q(!1),
                      u
                        ? (z(!0),
                          r(a, { mediaId: u, cropData: e }).catch(function (e) {
                            Z(), Object(s.a)(e) ? D(A) : Y(e)
                          }))
                        : D(A)
                  },
                })
              : null,
            f
              ? l.a.createElement(w.a, {
                  cancelButtonLabel: L,
                  confirmButtonLabel: x,
                  confirmButtonType: 'destructiveFilled',
                  headline: R,
                  onCancel: function () {
                    _(!1)
                  },
                  onConfirm: function () {
                    d(a).catch(Y), _(!1)
                  },
                  text: M,
                })
              : null,
          )
        }),
        D = Object(m.a)()
          .propsFromActions(function () {
            return {
              editAccess: u.c.editAccess,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        N = a('yoO3'),
        U = a('mWs5'),
        q = a('3JAx'),
        z = f.a.f713fbd1,
        V = [
          { label: f.a.fd00a769, value: 'Public', helpText: f.a.d0784408 },
          { label: f.a.ce0523a8, value: 'Closed', helpText: f.a.ccfafe8c },
        ],
        W = D(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.editAccess,
            r = e.history,
            i = n.id_str,
            s = l.a.useState(n.access),
            c = o()(s, 2),
            u = c[0],
            m = c[1],
            d = l.a.useCallback(
              function () {
                t(i, { access: u })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(a({ showToast: !0 }))
              },
              [i, u, t, r, a],
            ),
            y = u !== n.access
          return l.a.createElement(
            N.a,
            null,
            l.a.createElement(
              U.a,
              { communityId: i, onSubmit: d, submitDisabled: !y, title: z },
              l.a.createElement(
                E.a,
                { style: J.root },
                l.a.createElement(q.a, {
                  name: 'membershipSetting',
                  onChange: function (e, n) {
                    m(n)
                  },
                  options: V,
                  value: u,
                }),
              ),
            ),
          )
        }),
        J = C.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        Q = a('n0Rl'),
        X = a('k49u'),
        G = (a('849X'), a('TJCb'), a('uDfI')),
        Y = (a('yH/f'), a('I/KZ')),
        Z =
          (Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
          Object.freeze({ Open: 'Open', RequireModeratorApproval: 'RestrictedJoinRequestsRequireModeratorApproval' })),
        $ = (a('YWiL'), a('HvW7')),
        ee = a.n($),
        ne = void 0 !== j ? j : (j = a('Vnwa')),
        ae = function () {
          var e = ee()(ne),
            n = o()(e, 2),
            a = n[0],
            t = n[1],
            r = Object(G.c)()
          return l.a.useCallback(
            function (e, n) {
              return t
                ? Promise.reject(new Error('Already updating membership settings'))
                : new Promise(function (t, l) {
                    var i = n.access,
                      o = n.invitesPolicy
                    a({
                      variables: {
                        communityId: e,
                        invitesPolicy: o,
                        joinPolicy: i === Y.a.Open ? Z.Open : Z.RequireModeratorApproval,
                      },
                      onCompleted: function (e) {
                        var n = (function (e) {
                          if (e && 'Community' === e.__typename) {
                            var n
                            switch (e.membership_settings.__typename) {
                              case Y.a.Open:
                                n = { __typename: Y.a.Open }
                                break
                              case Y.a.Restricted:
                                n = {
                                  __typename: Y.a.Restricted,
                                  invites_policy: e.membership_settings.invites_policy,
                                  join_approval_policy: e.membership_settings.join_approval_policy,
                                }
                            }
                            return { id_str: e.id_str, access: e.access, membership_settings: n }
                          }
                        })(e.community_membership_settings_put)
                        n && r(u.c.updateOne(n.id_str, n)), t()
                      },
                      onError: l,
                    })
                  })
            },
            [a, r, t],
          )
        },
        te = a('zCf4'),
        le = a('wxEq'),
        re = a.n(le),
        ie = void 0 !== P ? P : (P = a('tnnC'))
      var oe,
        se,
        ce = a('CVPS'),
        ue = a.n(ce),
        me = f.a.f713fbd1,
        de = f.a.c5d1634d,
        ye = f.a.b983f9e0,
        ge = f.a.fc2a5c92,
        pe = f.a.a1c93d73,
        fe = void 0 !== oe ? oe : (oe = a('1tGk')),
        be = function (e) {
          var n,
            a,
            t,
            r,
            i = e.community,
            s = ue()(fe, i),
            c = s.membership_settings,
            u = s.rest_id,
            m = (function (e) {
              var n = re()(ie, e)
              switch (n.__typename) {
                case Y.a.Restricted:
                  return { access: Y.a.Restricted, invitesPolicy: n.invites_policy }
                case Y.a.Open:
                  return { access: Y.a.Open, invitesPolicy: Y.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(n.__typename))
              }
            })(c),
            y = l.a.useState(),
            g = o()(y, 2),
            p = g[0],
            h = g[1],
            _ = ae(),
            v = Object(te.f)(),
            k = l.a.useState(),
            C = o()(k, 2),
            F = C[0],
            S = C[1],
            K = Object(d.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            T = Object(Y.e)(m),
            R = o()(T, 2),
            L = R[0],
            x = R[1],
            M = l.a.useCallback(
              function () {
                var e = K({
                  customErrorHandler: function (e) {
                    var n = o()(e.errors, 1)[0],
                      a = n.code === X.a.GenericBadRequest && n.message ? n.message : pe
                    return S(a), []
                  },
                })
                _(u, L)
                  .then(function () {
                    v.goBack({ backLocation: '/i/communities/'.concat(u, '/tools/settings') })
                  })
                  .catch(e)
              },
              [u, K, v, L, _],
            ),
            O = l.a.useCallback(
              function () {
                var e = (function (e, n) {
                  if (e.access === Y.a.Restricted && n.access === Y.a.Open) return f.a.daedd9fa
                })(m, L)
                e ? h(e) : M()
              },
              [m, L, M],
            ),
            A = l.a.useCallback(function () {
              return h(void 0)
            }, []),
            j =
              ((a = L),
              (t = (n = m).access !== a.access),
              (r = n.access === Y.a.Restricted && n.invitesPolicy !== a.invitesPolicy),
              !(t || r)),
            P = F
              ? l.a.createElement(
                  E.a,
                  { style: he.error },
                  l.a.createElement(I.a, { Icon: b.a, headline: ge, text: F, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            U.a,
            { communityId: u, onSubmit: O, submitDisabled: j, title: me },
            P,
            l.a.createElement(Y.d, { setters: x, state: L }),
            p &&
              l.a.createElement(w.a, {
                confirmButtonLabel: de,
                confirmButtonType: 'primary',
                headline: ye,
                onCancel: A,
                onConfirm: M,
                text: p,
              }),
          )
        },
        he = C.a.create(function (e) {
          return { error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        _e = a('v//M'),
        ve = void 0 !== se ? se : (se = a('PbB6')),
        ke = Object(Q.b)(ve, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Ee = function (e) {
          var n = { communityId: e.communityId }
          return l.a.createElement(ke, {
            render: function (e) {
              var n = e.data,
                a = (e.error, e.fetchStatus),
                t = e.retry,
                r = null == n ? void 0 : n.community
              return l.a.createElement(_e.a, {
                fetchStatus: a,
                onRequestRetry: t,
                render: function () {
                  return r ? l.a.createElement(be, { community: r }) : null
                },
                retryable: !0,
              })
            },
            variables: n,
          })
        },
        Ce = a('ROT1'),
        Fe = Object(m.a)()
          .propsFromActions(function () {
            return {
              editName: u.c.editName,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Se = f.a.h3c0f1a2,
        Ie = f.a.fc2a5c92,
        we = f.a.cb5e6510
      var Ke = C.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Te = Fe(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.editName,
            r = e.history,
            i = n.id_str,
            s = n.name,
            c = l.a.useState(s),
            u = o()(c, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            g = o()(y, 2),
            p = g[0],
            f = g[1],
            h = l.a.useState(void 0),
            _ = o()(h, 2),
            v = _[0],
            k = _[1],
            C = l.a.useCallback(
              function () {
                var e = a({
                  customErrorHandler: function (e) {
                    var n = o()(e.errors, 1)[0],
                      a = n.code === X.a.GenericBadRequest && n.message ? n.message : we
                    return k(a), f(!0), []
                  },
                })
                t(i, { name: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, m, t, r, a],
            )
          return l.a.createElement(
            N.a,
            null,
            l.a.createElement(
              U.a,
              { communityId: i, onSubmit: C, submitDisabled: p, title: Se },
              v
                ? l.a.createElement(
                    E.a,
                    { style: Ke.error },
                    l.a.createElement(I.a, { Icon: b.a, headline: Ie, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ce.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        Re = a('U0Qk'),
        Le = Object(m.a)()
          .propsFromActions(function () {
            return {
              editPurpose: u.c.editPurpose,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        xe = f.a.a895549f,
        Me = f.a.fc2a5c92,
        Oe = f.a.ced22929
      var Ae = C.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        je = Le(function (e) {
          var n = e.community,
            a = e.createLocalApiErrorHandler,
            t = e.editPurpose,
            r = e.history,
            i = n.description,
            s = n.id_str,
            c = l.a.useState(i || ''),
            u = o()(c, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            g = o()(y, 2),
            p = g[0],
            f = g[1],
            h = l.a.useState(void 0),
            _ = o()(h, 2),
            v = _[0],
            k = _[1],
            C = l.a.useCallback(
              function () {
                var e = a({
                  customErrorHandler: function (e) {
                    var n = o()(e.errors, 1)[0],
                      a = n.code === X.a.GenericBadRequest && n.message ? n.message : Oe
                    return k(a), f(!0), []
                  },
                })
                t(s, { purpose: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(s, '/tools/settings') })
                  })
                  .catch(e)
              },
              [s, m, t, r, a],
            )
          return l.a.createElement(
            N.a,
            null,
            l.a.createElement(
              U.a,
              { communityId: s, onSubmit: C, submitDisabled: p, title: xe },
              v
                ? l.a.createElement(
                    E.a,
                    { style: Ae.error },
                    l.a.createElement(I.a, { Icon: b.a, headline: Me, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Re.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        Pe = a('Ig1G'),
        He = a('x0mb'),
        Be = a('5FtR'),
        De = a('Irs7'),
        Ne = a('t62R'),
        Ue = a('X00g'),
        qe = a('6vad'),
        ze = a('csss'),
        Ve = a('0yYu'),
        We = f.a.bb081ea1,
        Je = f.a.h3e55b40,
        Qe = f.a.j8af8ea9,
        Xe = f.a.d5f01115,
        Ge = f.a.c3c04b70,
        Ye = { Closed: f.a.ce0523a8, Public: f.a.fd00a769 },
        Ze = f.a.f4a98e9e,
        $e = f.a.f713fbd1,
        en = function (e) {
          var n = e.children
          return l.a.createElement(Ne.b, { color: 'gray700', size: 'subtext2' }, n)
        },
        nn = function (e) {
          var n = e.community,
            a = e.history,
            t = e.match,
            i = n.access,
            o = n.description,
            s = n.hasCustomMedia,
            c = n.id_str,
            u = n.localMediaId,
            m = n.media,
            d = n.membership_settings,
            y = n.name,
            g = n.theme,
            p = l.a.useContext(r.a).featureSwitches,
            f = p.isTrue('c9s_edit_community_name_enabled'),
            b = p.isTrue('c9s_edit_community_description_enabled'),
            h = p.isTrue('c9s_edit_community_membership_settings_enabled'),
            _ = p.isTrue('c9s_membership_settings_enabled'),
            v = p.isTrue('c9s_edit_community_banner_enabled'),
            k = p.isTrue('c9s_edit_community_theme_enabled'),
            E = t.url,
            C = l.a.useMemo(
              function () {
                return _ ? (d.__typename === Y.a.Open ? Ye.Public : Ye.Closed) : Ye[i]
              },
              [i, _, d.__typename],
            ),
            F = Object(Pe.e)(n),
            S = Ue.a.getCommunityThemeDisplayName(F),
            I = Ue.a.getCommunityBackgroundColor(g)
          return l.a.createElement(
            te.d,
            null,
            f
              ? l.a.createElement(
                  te.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(Te, { community: n, history: a }),
                )
              : null,
            b
              ? l.a.createElement(
                  te.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(je, { community: n, history: a }),
                )
              : null,
            _
              ? l.a.createElement(
                  te.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Ee, { communityId: c }),
                )
              : h
              ? l.a.createElement(
                  te.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(W, { community: n, history: a }),
                )
              : null,
            l.a.createElement(
              te.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                N.a,
                null,
                l.a.createElement(
                  U.a,
                  { communityId: c, screenType: 'primaryDetail', title: We },
                  v ? l.a.createElement(B, { communityId: c, hasCustomMedia: s, localMediaId: u, media: m }) : null,
                  l.a.createElement(qe.b, { text: Ze }),
                  l.a.createElement(ze.a, {
                    description: l.a.createElement(en, null, y),
                    label: Je,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(ze.a, {
                    description: o ? l.a.createElement(en, null, o) : void 0,
                    label: Xe,
                    link: b ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(ze.a, {
                        description: l.a.createElement(en, null, S),
                        label: Ge,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(He.a, { style: [{ color: I }, an.themeIcon] })
                        },
                      })
                    : null,
                  _ || h
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(Ve.a, null),
                        l.a.createElement(qe.b, { text: $e }),
                        l.a.createElement(ze.a, {
                          description: l.a.createElement(en, null, C),
                          label: Qe,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            l.a.createElement(te.b, null, l.a.createElement(Be.a, { to: ''.concat(E, '/') })),
          )
        },
        an =
          ((n.default = Object(De.a)(nn, { page: 'communities', section: 'settings' })),
          C.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    xvEL: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
    xvzJ: function (e, n, a) {
      'use strict'
      var t = a('97Jx'),
        l = a.n(t),
        r = a('yiKp'),
        i = a.n(r),
        o = a('ddV6'),
        s = a.n(o),
        c = (a('yH/f'), a('2G9S'), a('ERkP')),
        u = a.n(c),
        m = a('1YZw'),
        d = a('v6aA'),
        y = a('Ig1G'),
        g = a('fz3c'),
        p = a('uDfI'),
        f = a('CxAY'),
        b = a('yrzJ'),
        h = a('mjJ+'),
        _ = a('IG7M'),
        v = a('eb3s'),
        k = (a('YWiL'), a('HvW7')),
        E = a.n(k),
        C = a('3XMw'),
        F = a.n(C),
        S = a('Lsrn'),
        I = a('k/Ka'),
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(I.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [S.a.root, e.style],
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
      w.metadata = { width: 24, height: 24 }
      var K = w,
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(I.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [S.a.root, e.style],
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
      T.metadata = { width: 24, height: 24 }
      var R,
        L = T,
        x = a('5oT/'),
        M = a('boUI'),
        O = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        A = F.a.g30bc699,
        j = F.a.e585d844,
        P = F.a.cab7c6f8,
        H = F.a.af40a8ef,
        B = F.a.e96d5254,
        D = F.a.f348a395,
        N = F.a.c3a1aebd,
        U = F.a.c273c8a6,
        q = F.a.e68b09b4,
        z = F.a.c0eb2a52,
        V = F.a.a5808125,
        W = F.a.b99364a5,
        J = {
          confirmButtonLabel: H,
          headline: P,
          text: function (e) {
            return u.a.createElement(
              F.a.I18NFormatMessage,
              { $i18n: 'd46c6e8f' },
              u.a.createElement(b.a, { screenName: e }),
            )
          },
        },
        Q = {
          confirmButtonLabel: q,
          headline: U,
          text: function (e) {
            return u.a.createElement(
              F.a.I18NFormatMessage,
              { $i18n: 'c3a1f2be' },
              u.a.createElement(b.a, { screenName: e }),
            )
          },
        },
        X = void 0 !== R ? R : (R = a('7xtl'))
      n.a = function (e) {
        var n = u.a.useContext(d.a),
          a = n.featureSwitches,
          t = n.loggedInUserId,
          r = a.isTrue('c9s_edit_moderators_enabled'),
          o = a.isTrue('c9s_remove_member_list_enabled'),
          c = e.communityId,
          b = e.communityRole,
          k = e.recordId,
          C = e.screenName,
          F = e.userId,
          S = e.viewerRole,
          I = u.a.useState(null),
          w = s()(I, 2),
          T = w[0],
          R = w[1],
          P = Object(p.c)(),
          H = E()(X),
          U = s()(H, 2),
          q = U[0],
          G = U[1],
          Y = u.a.useCallback(
            function (e) {
              var n = e.communityId,
                a = e.errorMessage,
                t = e.recordId,
                l = e.role,
                r = (e.screenName, e.successMessage),
                i = e.userId
              q({
                variables: { communityId: n, userId: i, role: l },
                updater: function (e) {
                  var a = e.get(t)
                  null == a || a.setValue(l, 'community_role(community_id:"'.concat(n, '")')),
                    P(f.b.updateOne(''.concat(n, '_').concat(i), { role: l }))
                },
                onCompleted: function () {
                  P(Object(m.b)({ text: r }))
                },
                onError: function () {
                  P(Object(m.b)({ text: a }))
                },
              })
            },
            [q, P],
          ),
          Z = u.a.useCallback(
            function (e) {
              var n,
                a,
                t,
                l,
                r = e.communityId,
                o = e.recordId,
                s = e.roleAction,
                c = e.screenName,
                u = e.userId
              switch (s) {
                case O.PromoteModerator:
                  ;(n = J), (t = y.a.Moderator), (l = B({ screenName: c })), (a = D({ screenName: c }))
                  break
                case O.DemoteModerator:
                  ;(n = Q), (t = y.a.Member), (l = z({ screenName: c })), (a = V({ screenName: c }))
                  break
                default:
                  return
              }
              R(
                i()(
                  i()({}, n),
                  {},
                  {
                    text: n.text(c),
                    onConfirm: function () {
                      Y({
                        communityId: r,
                        errorMessage: a,
                        recordId: o,
                        role: t,
                        screenName: c,
                        successMessage: l,
                        userId: u,
                      }),
                        R(null)
                    },
                    onCancel: function () {
                      R(null)
                    },
                  },
                ),
              )
            },
            [Y],
          ),
          $ = u.a.useCallback(
            function (e) {
              var n = []
              if (r && S === y.a.Admin)
                switch (b) {
                  case y.a.Moderator:
                    n.push({
                      behavioralEventContext: { viewType: 'remove_moderator' },
                      disabled: G,
                      text: N,
                      Icon: K,
                      onClick: function () {
                        return Z({
                          communityId: c,
                          recordId: k,
                          roleAction: O.DemoteModerator,
                          screenName: C,
                          userId: F,
                        })
                      },
                    })
                    break
                  case y.a.Member:
                    n.push({
                      behavioralEventContext: { viewType: 'add_moderator' },
                      disabled: G,
                      text: j,
                      Icon: L,
                      onClick: function () {
                        return Z({
                          communityId: c,
                          recordId: k,
                          roleAction: O.PromoteModerator,
                          screenName: C,
                          userId: F,
                        })
                      },
                    })
                }
              return (
                o &&
                  b === y.a.Member &&
                  n.push({
                    text: W({ screenName: C }),
                    Icon: x.a,
                    behavioralEventContext: { viewType: 'remove_user' },
                    link: {
                      pathname: '/i/report/'
                        .concat(g.a.RemoveCommunityMember, '/')
                        .concat(F, '?community_id=')
                        .concat(c),
                      state: {
                        clientReferer: window.location.pathname,
                        scribeNamespace: { page: 'community', section: 'people', component: 'member' },
                      },
                    },
                  }),
                n.push({
                  behavioralEventContext: { viewType: 'view_profile' },
                  text: A({ screenName: C }),
                  Icon: M.a,
                  link: '/'.concat(C),
                }),
                u.a.createElement(h.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
              )
            },
            [c, Z, r, o, k, b, G, C, F, S],
          )
        return F !== t
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(_.a, { renderActionMenu: $ }),
              T
                ? u.a.createElement(
                    v.a,
                    l()(
                      {
                        confirmButtonType: 'primary',
                        onCancel: function () {
                          R(null)
                        },
                      },
                      T,
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
        r = (a('yH/f'), a('jwue'), a('7x/C'), a('+oxZ'), a('ERkP')),
        i = a.n(r),
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
        v = g.a.dbda7beb,
        k = g.a.i2209530,
        E = g.a.hcf35d0c,
        C = g.a.da48b72c,
        F = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        S = {}
      function I(e) {
        var n = e.community,
          a = e.createLocalApiErrorHandler,
          t = e.editTheme,
          r = e.history,
          o = n.id_str,
          s = n.theme,
          c = f.a.getCommunityBackgroundColorName(s),
          u = i.a.useState(!1),
          y = l()(u, 2),
          g = y[0],
          _ = y[1],
          I = i.a.useState(Object(d.e)(n)),
          K = l()(I, 2),
          T = K[0],
          R = K[1],
          L = i.a.useState(f.a.getCommunityThemeDisplayName(T)),
          x = l()(L, 2),
          M = x[0],
          O = x[1],
          A = i.a.useState(c),
          j = l()(A, 2),
          P = j[0],
          H = j[1],
          B = i.a.useState([]),
          D = l()(B, 2),
          N = D[0],
          U = D[1]
        i.a.useEffect(
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
        var q = i.a.useCallback(
            function () {
              t(o, { theme: T })
                .then(function () {
                  r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(a({ showToast: !0 }))
            },
            [o, T, t, r, a],
          ),
          z = i.a.createElement(
            b.a,
            { accessibilityLabel: E({ themeName: M }), disabled: !g, onPress: q, size: 'small', type: 'brandFilled' },
            k,
          )
        return i.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: r, rightControl: z, title: v },
          i.a.createElement(
            p.a,
            { style: w.themePickerContainer },
            i.a.createElement(h.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var a = S[e],
                  t = a !== Object(d.e)(n)
                R(a), O(f.a.getCommunityThemeDisplayName(a)), H(e), _(t)
              },
              options: N,
              value: P,
            }),
          ),
        )
      }
      var w = _.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      n.default = u(I)
    },
    zakg: function (e, n, a) {
      'use strict'
      var t,
        l,
        r,
        i = {
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
      ;(i.hash = '9533cbfb5394a4601514cbc83020138b'), (e.exports = i)
    },
    zum0: function (e, n, a) {
      'use strict'
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
      e.exports = t
    },
  },
])
//# sourceMappingURL=WIPED
