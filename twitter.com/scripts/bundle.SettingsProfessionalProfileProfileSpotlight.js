;(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    '9YVX': function (e, l, n) {
      'use strict'
      n.d(l, 'a', function () {
        return a
      })
      var a = {
        categoryLabel: 'category_label',
        categoryDisplay: 'category_display',
        switchAccountType: 'switch_account_type',
        spotlightRow: 'spotlight_row',
      }
    },
    VUaC: function (e, l, n) {
      'use strict'
      n.r(l),
        n.d(l, 'editableProfileModulesQuery', function () {
          return v
        }),
        n.d(l, 'ProfileSpotlightScreen', function () {
          return E
        })
      n('z84I')
      var a,
        t = n('ERkP'),
        i = n.n(t),
        r = n('zrOZ'),
        s = n('v6aA'),
        o = n('jHSc'),
        u = n('3XMw'),
        d = n.n(u),
        c = n('Fr3L'),
        p = n('9YVX'),
        g = n('zCf4'),
        m = n('IAZG'),
        y = n('MWbm'),
        f = n('t62R'),
        b = n('CK8+'),
        _ = n('rHpw'),
        k = (n('enFi'), d.a.d4b6a6ef),
        h = d.a.e2760643,
        v = void 0 !== a ? a : (a = n('bl4H')),
        F = { context: 'PROFILE_SPOTLIGHT_SCREEN' },
        E = function () {
          var e,
            l,
            n,
            a,
            t,
            u = Object(g.f)(),
            d = i.a.useContext(s.a).loggedInUserId || '',
            _ = Object(m.a)(v, { userId: d }, { fetchPolicy: 'network-only' }),
            E =
              null == _ || null === (e = _.user) || void 0 === e || null === (l = e.result) || void 0 === l
                ? void 0
                : l.editable_profilemodules,
            w = Object(r.a)(
              (null == E || null === (n = E.modules_for_display) || void 0 === n
                ? void 0
                : n.map(function (e) {
                    return e.module_id
                  })) || [],
            ),
            C = null == E ? void 0 : E.configurable_modules_v1
          if (!d) return u.push('/login'), null
          var S = function () {
            u.goBack({ backLocation: '/settings/professional_profile' })
          }
          return (
            (null != _ &&
              null !== (a = _.user) &&
              void 0 !== a &&
              null !== (t = a.result) &&
              void 0 !== t &&
              t.editable_profilemodules) ||
              S(),
            i.a.createElement(
              c.a,
              { errorConfig: F },
              i.a.createElement(
                o.b,
                { accessibilityHidden: !1, backButtonType: 'back', history: u, onBackClick: S, title: k },
                i.a.createElement(
                  y.a,
                  { style: K.container },
                  null == C
                    ? void 0
                    : C.map(function (e) {
                        return (function (e) {
                          if (e.module_data) {
                            var l = e.module_data.module_id,
                              n = e.title,
                              a = e.subtitle,
                              t = w.has(l)
                            return i.a.createElement(
                              y.a,
                              { accessibilityRole: 'label', key: l, testID: p.a.spotlightRow },
                              i.a.createElement(
                                y.a,
                                { style: K.spotlightContainer },
                                i.a.createElement(f.b, { weight: 'bold' }, n),
                                i.a.createElement(b.a, { onValueChange: function () {}, value: t }),
                              ),
                              i.a.createElement(
                                y.a,
                                { style: K.descriptionContainer },
                                i.a.createElement(f.b, { color: 'gray700', size: 'subtext2' }, a),
                              ),
                            )
                          }
                        })(e)
                      }),
                  i.a.createElement(
                    y.a,
                    { style: K.spotlightContainer },
                    i.a.createElement(f.b, { color: 'gray700', size: 'subtext1' }, h),
                  ),
                ),
              ),
            )
          )
        },
        K = _.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            descriptionContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space2,
              paddingBottom: e.spaces.space8,
            },
            spotlightContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space16,
            },
          }
        })
      l.default = E
    },
    bl4H: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        t,
        i,
        r,
        s = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'userId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ProfileSpotlights_EditableProfileModulesQuery',
            selections: [
              {
                alias: 'user',
                args: (t = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'userId' },
                  { kind: 'Literal', name: 's', value: 50 },
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
                          (r = {
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
                                concreteType: 'ModuleForDisplay',
                                kind: 'LinkedField',
                                name: 'modules_for_display',
                                plural: !0,
                                selections: (i = [
                                  { alias: null, args: null, kind: 'ScalarField', name: 'module_id', storageKey: null },
                                ]),
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserBusinessConfigurableModuleV1',
                                kind: 'LinkedField',
                                name: 'configurable_modules_v1',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'module_type',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'subtitle', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'UserBusinessEditableModuleV1',
                                    kind: 'LinkedField',
                                    name: 'module_data',
                                    plural: !1,
                                    selections: i,
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
            name: 'ProfileSpotlights_EditableProfileModulesQuery',
            selections: [
              {
                alias: 'user',
                args: t,
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
                        selections: [r, { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }],
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
            id: '5SSCZ1XchOe_l_7Zj-uhzQ',
            metadata: {},
            name: 'ProfileSpotlights_EditableProfileModulesQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(s.hash = '5d17cd78de512fddf3b0be7d311c2597'), (l.default = s)
    },
  },
])
//# sourceMappingURL=WIPED
