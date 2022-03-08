;(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
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
                                selections: [
                                  (i = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'module_id',
                                    storageKey: null,
                                  }),
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserBusinessEditableModuleV1',
                                kind: 'LinkedField',
                                name: 'v1',
                                plural: !0,
                                selections: [
                                  i,
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
            id: 'eRncr5p7CsqkqsqXG8Ty0Q',
            metadata: {},
            name: 'ProfileSpotlights_EditableProfileModulesQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(s.hash = 'eb3db6d39d38f19b361f62485a5788d5'), (l.default = s)
    },
    i4NC: function (e, l, n) {
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
    lrPT: function (e, l, n) {
      'use strict'
      n.r(l),
        n.d(l, 'editableProfileModulesQuery', function () {
          return v
        }),
        n.d(l, 'ProfileSpotlightScreen', function () {
          return w
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
        p = n('i4NC'),
        m = n('zCf4'),
        g = n('IAZG'),
        y = n('MWbm'),
        b = n('t62R'),
        f = n('CK8+'),
        _ = n('rHpw'),
        k = (n('enFi'), d.a.d4b6a6ef),
        h = d.a.e2760643,
        v = void 0 !== a ? a : (a = n('bl4H')),
        E = { context: 'PROFILE_SPOTLIGHT_SCREEN' },
        w = function () {
          var e,
            l,
            n,
            a,
            t,
            u = Object(m.f)(),
            d = i.a.useContext(s.a).loggedInUserId || '',
            _ = Object(g.a)(v, { userId: d }, { fetchPolicy: 'network-only' }),
            w =
              null == _ || null === (e = _.user) || void 0 === e || null === (l = e.result) || void 0 === l
                ? void 0
                : l.editable_profilemodules,
            C = Object(r.a)(
              (null == w || null === (n = w.modules_for_display) || void 0 === n
                ? void 0
                : n.map(function (e) {
                    return e.module_id
                  })) || [],
            ),
            K = (null == w ? void 0 : w.v1) || []
          if (
            ((K = K.map(function (e) {
              return { title: e.module_id, subtitle: e.module_id, module_data: { module_id: e.module_id } }
            })),
            !d)
          )
            return u.push('/login'), null
          var T = function () {
            u.goBack({ backLocation: '/settings/professional_profile' })
          }
          return (
            (null != _ &&
              null !== (a = _.user) &&
              void 0 !== a &&
              null !== (t = a.result) &&
              void 0 !== t &&
              t.editable_profilemodules) ||
              T(),
            i.a.createElement(
              c.a,
              { errorConfig: E },
              i.a.createElement(
                o.b,
                { accessibilityHidden: !1, backButtonType: 'back', history: u, onBackClick: T, title: k },
                i.a.createElement(
                  y.a,
                  { style: F.container },
                  K.map(function (e) {
                    return (function (e) {
                      var l = e.module_data.module_id,
                        n = e.title,
                        a = e.subtitle,
                        t = C.has(l)
                      return i.a.createElement(
                        y.a,
                        { accessibilityRole: 'label', key: l, testID: p.a.spotlightRow },
                        i.a.createElement(
                          y.a,
                          { style: F.spotlightContainer },
                          i.a.createElement(b.b, { weight: 'bold' }, n),
                          i.a.createElement(f.a, { onValueChange: function () {}, value: t }),
                        ),
                        i.a.createElement(
                          y.a,
                          { style: F.descriptionContainer },
                          i.a.createElement(b.b, { color: 'gray700', size: 'subtext2' }, a),
                        ),
                      )
                    })(e)
                  }),
                  i.a.createElement(
                    y.a,
                    { style: F.spotlightContainer },
                    i.a.createElement(b.b, { color: 'gray700', size: 'subtext1' }, h),
                  ),
                ),
              ),
            )
          )
        },
        F = _.a.create(function (e) {
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
      l.default = w
    },
  },
])
//# sourceMappingURL=WIPED
