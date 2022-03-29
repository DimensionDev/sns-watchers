;(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
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
          return F
        }),
        n.d(l, 'ProfileSpotlightScreen', function () {
          return K
        })
      n('z84I'), n('jQ3i'), n('x4t0')
      var a,
        t = n('ERkP'),
        i = n.n(t),
        r = n('zrOZ'),
        s = n('v6aA'),
        o = [],
        u = n('jHSc'),
        d = n('3XMw'),
        c = n.n(d),
        p = n('Fr3L'),
        g = n('9YVX'),
        m = n('zCf4'),
        y = n('IAZG'),
        f = n('MWbm'),
        b = n('t62R'),
        _ = n('CK8+'),
        k = n('rHpw'),
        v = (n('enFi'), c.a.d4b6a6ef),
        h = c.a.e2760643,
        F = void 0 !== a ? a : (a = n('bl4H')),
        E = { context: 'PROFILE_SPOTLIGHT_SCREEN' },
        K = function () {
          var e,
            l,
            n,
            a,
            t,
            d = Object(m.f)(),
            c = i.a.useContext(s.a).loggedInUserId || '',
            k = Object(y.a)(F, { userId: c }, { fetchPolicy: 'network-only' }),
            K =
              null == k || null === (e = k.user) || void 0 === e || null === (l = e.result) || void 0 === l
                ? void 0
                : l.editable_profilemodules,
            C = Object(r.a)(
              (null == K || null === (n = K.modules_for_display) || void 0 === n
                ? void 0
                : n.map(function (e) {
                    return e.module_id
                  })) || [],
            ),
            S = null == K ? void 0 : K.configurable_modules_v1
          if (!c) return d.push('/login'), null
          var L = function () {
            d.goBack({ backLocation: '/settings/professional_profile' })
          }
          return (
            (null != k &&
              null !== (a = k.user) &&
              void 0 !== a &&
              null !== (t = a.result) &&
              void 0 !== t &&
              t.editable_profilemodules) ||
              L(),
            i.a.createElement(
              p.a,
              { errorConfig: E },
              i.a.createElement(
                u.b,
                { accessibilityHidden: !1, backButtonType: 'back', history: d, onBackClick: L, title: v },
                i.a.createElement(
                  f.a,
                  { style: w.container },
                  null == S
                    ? void 0
                    : S.map(function (e, l) {
                        return (function (e, l) {
                          var n,
                            a = null === (n = e.module_data) || void 0 === n ? void 0 : n.module_id,
                            t = e.title,
                            r = e.subtitle,
                            s = !!a,
                            u = s && C.has(a)
                          if (o.includes(e.module_type) || s)
                            return i.a.createElement(
                              f.a,
                              { accessibilityRole: 'label', key: l, testID: g.a.spotlightRow },
                              i.a.createElement(
                                f.a,
                                { style: w.spotlightContainer },
                                i.a.createElement(b.b, { weight: 'bold' }, t),
                                i.a.createElement(_.a, { onValueChange: function () {}, value: u }),
                              ),
                              i.a.createElement(
                                f.a,
                                { style: w.descriptionContainer },
                                i.a.createElement(b.b, { color: 'gray700', size: 'subtext2' }, r),
                              ),
                            )
                        })(e, l)
                      }),
                  i.a.createElement(
                    f.a,
                    { style: w.spotlightContainer },
                    i.a.createElement(b.b, { color: 'gray700', size: 'subtext1' }, h),
                  ),
                ),
              ),
            )
          )
        },
        w = k.a.create(function (e) {
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
      l.default = K
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
