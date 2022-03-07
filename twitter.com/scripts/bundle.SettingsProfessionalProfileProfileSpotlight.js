;(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    i5Zp: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        i,
        t,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'userId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ProfileSpotlight_EditableProfileModulesQuery',
            selections: [
              {
                alias: 'user',
                args: (i = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'userId' },
                  { kind: 'Literal', name: 's', value: 49 },
                ]),
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_rest_id',
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
                          (t = {
                            alias: null,
                            args: null,
                            concreteType: 'UserBusinessEditableModules',
                            kind: 'LinkedField',
                            name: 'editable_profilemodules',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserBusinessEditableModuleV1',
                                kind: 'LinkedField',
                                name: 'v1',
                                plural: !0,
                                selections: [
                                  { alias: null, args: null, kind: 'ScalarField', name: 'module_id', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'enabled_for_display',
                                    storageKey: null,
                                  },
                                ],
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
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'ProfileSpotlight_EditableProfileModulesQuery',
            selections: [
              {
                alias: 'user',
                args: i,
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_rest_id',
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
                        selections: [t, { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }],
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
          },
          params: {
            id: 'JOkaHeUu2MZNr6BuUePGqQ',
            metadata: {},
            name: 'ProfileSpotlight_EditableProfileModulesQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '18eb392232777182560a836e831930e1'), (l.default = r)
    },
    j83e: function (e, l, n) {
      'use strict'
      n.r(l),
        n.d(l, 'editableProfileModulesQuery', function () {
          return f
        }),
        n.d(l, 'ProfileSpotlightScreen', function () {
          return _
        })
      n('z84I')
      var a,
        i = n('ERkP'),
        t = n.n(i),
        r = n('v6aA'),
        s = n('jHSc'),
        u = n('3XMw'),
        o = n.n(u),
        d = n('Fr3L'),
        c = n('zCf4'),
        p = n('IAZG'),
        m = n('MWbm'),
        y = (n('enFi'), n('csss')),
        g = n('rHpw'),
        k = o.a.d4b6a6ef,
        f = void 0 !== a ? a : (a = n('i5Zp')),
        b = { context: 'PROFILE_SPOTLIGHT_SCREEN' },
        _ = function () {
          var e,
            l,
            n,
            a,
            i = Object(c.f)(),
            u = t.a.useContext(r.a).loggedInUserId || '',
            o = Object(p.a)(f, { userId: u }, { fetchPolicy: 'network-only' }),
            g =
              null == o || null === (e = o.user) || void 0 === e || null === (l = e.result) || void 0 === l
                ? void 0
                : l.editable_profilemodules,
            _ = null == g ? void 0 : g.v1
          if (!u) return i.push('/login'), null
          var F = function () {
            i.goBack({ backLocation: '/settings/professional_profile' })
          }
          return (
            (null != o &&
              null !== (n = o.user) &&
              void 0 !== n &&
              null !== (a = n.result) &&
              void 0 !== a &&
              a.editable_profilemodules) ||
              F(),
            t.a.createElement(
              d.a,
              { errorConfig: b },
              t.a.createElement(
                s.b,
                { accessibilityHidden: !1, backButtonType: 'back', history: i, onBackClick: F, title: k },
                t.a.createElement(
                  m.a,
                  { style: v.container },
                  _ &&
                    _.map(function (e) {
                      return t.a.createElement(y.a, { key: e.module_id, label: e.module_id })
                    }),
                ),
              ),
            )
          )
        },
        v = g.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space64 } }
        })
      l.default = _
    },
  },
])
//# sourceMappingURL=WIPED
