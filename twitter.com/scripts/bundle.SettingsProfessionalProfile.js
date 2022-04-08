;(window.webpackJsonp = window.webpackJsonp || []).push([
  [89],
  {
    '7Gn9': function (e, n, l) {
      'use strict'
      var a,
        s,
        t,
        r,
        i,
        o = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'displayCategory' }),
              (s = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'UpdateCategoryDisplayMutation',
            selections: [
              {
                alias: null,
                args: (t = [
                  { kind: 'Variable', name: 'display_category', variableName: 'displayCategory' },
                  { kind: 'Literal', name: 's', value: 50 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: 'UserProfessionalCategoriesDisplayUpdateResponse',
                kind: 'LinkedField',
                name: 'user_update_professional_category_display',
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
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Professional',
                                kind: 'LinkedField',
                                name: 'professional',
                                plural: !1,
                                selections: [
                                  (i = {
                                    alias: null,
                                    args: null,
                                    concreteType: 'BusinessCategory',
                                    kind: 'LinkedField',
                                    name: 'category',
                                    plural: !0,
                                    selections: [
                                      (r = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'id',
                                        storageKey: null,
                                      }),
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'display',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  }),
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
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [s, a],
            kind: 'Operation',
            name: 'UpdateCategoryDisplayMutation',
            selections: [
              {
                alias: null,
                args: t,
                concreteType: 'UserProfessionalCategoriesDisplayUpdateResponse',
                kind: 'LinkedField',
                name: 'user_update_professional_category_display',
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
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Professional',
                                kind: 'LinkedField',
                                name: 'professional',
                                plural: !1,
                                selections: [i, r],
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
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'ZwBQo_4CV_tzwJm4IUWrtg',
            metadata: {},
            name: 'UpdateCategoryDisplayMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(o.hash = 'a1f24919f856f42252acc05cedeffad2'), (e.exports = o)
    },
    '9YVX': function (e, n, l) {
      'use strict'
      l.d(n, 'a', function () {
        return a
      })
      var a = {
        categoryLabel: 'category_label',
        categoryDisplay: 'category_display',
        editSpotlightRow: 'edit_spotlight_row',
        switchAccountType: 'switch_account_type',
        spotlightRow: 'spotlight_row',
      }
    },
    HvW7: function (e, n, l) {
      'use strict'
      var a = l('IGGJ')(l('yiKp')),
        s = l('XiYe'),
        t = l('PJTX'),
        r = l('ERkP'),
        i = l('e1/f').commitMutation,
        o = r.useState,
        u = r.useEffect,
        c = r.useRef,
        d = r.useCallback
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          l = t(),
          r = s(),
          p = c(l),
          f = c(e),
          m = c(new Set()),
          g = o(!1),
          y = g[0],
          k = g[1],
          b = d(
            function (n) {
              p.current === l && f.current === e && (m.current.delete(n), r.current && k(m.current.size > 0))
            },
            [l, r, e],
          )
        u(
          function () {
            ;(p.current === l && f.current === e) ||
              ((m.current = new Set()), r.current && k(!1), (p.current = l), (f.current = e))
          },
          [l, r, e],
        )
        var _ = d(
          function (s) {
            var t = n(
              l,
              (0, a.default)(
                (0, a.default)({}, s),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    var l
                    b(t), null === (l = s.onCompleted) || void 0 === l || l.call(s, e, n)
                  },
                  onError: function (e) {
                    var n
                    b(t), null === (n = s.onError) || void 0 === n || n.call(s, e)
                  },
                  onUnsubscribe: function () {
                    var e
                    b(t), null === (e = s.onUnsubscribe) || void 0 === e || e.call(s)
                  },
                  onNext: function () {
                    var e
                    null === (e = s.onNext) || void 0 === e || e.call(s)
                  },
                },
              ),
            )
            return m.current.add(t), r.current && k(!0), t
          },
          [b, n, l, r, e],
        )
        return [_, y]
      }
    },
    WN76: function (e, n, l) {
      'use strict'
      var a,
        s,
        t,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'rest_id' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ProfessionalProfileQuery',
            selections: [
              {
                alias: 'user',
                args: (s = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'rest_id' },
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
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Professional',
                            kind: 'LinkedField',
                            name: 'professional',
                            plural: !1,
                            selections: [
                              { args: null, kind: 'FragmentSpread', name: 'ProfessionalProfile_professional' },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserBusinessModulesResponse',
                            kind: 'LinkedField',
                            name: 'profilemodules',
                            plural: !1,
                            selections: [
                              { args: null, kind: 'FragmentSpread', name: 'ProfessionalProfile_spotlights' },
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
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'ProfessionalProfileQuery',
            selections: [
              {
                alias: 'user',
                args: s,
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
                      (t = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Professional',
                            kind: 'LinkedField',
                            name: 'professional',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'professional_type',
                                storageKey: null,
                              },
                              (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'BusinessCategory',
                                kind: 'LinkedField',
                                name: 'category',
                                plural: !0,
                                selections: [
                                  r,
                                  { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'display', storageKey: null },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserBusinessModulesResponse',
                            kind: 'LinkedField',
                            name: 'profilemodules',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserBusinessModuleResponseV1',
                                kind: 'LinkedField',
                                name: 'v1',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'profile_module',
                                    plural: !1,
                                    selections: [t],
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
            ],
          },
          params: {
            id: 'MXKTKxpre43lH3DxewlWvg',
            metadata: {},
            name: 'ProfessionalProfileQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = 'b6fd1834c9a4727b73ff791a81da3f94'), (e.exports = i)
    },
    XiYe: function (e, n, l) {
      'use strict'
      var a = l('ERkP'),
        s = a.useEffect,
        t = a.useRef
      e.exports = function () {
        var e = t(!0)
        return (
          s(function () {
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
    YmSc: function (e, n, l) {
      'use strict'
      var a,
        s,
        t,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'userId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'SwitchToNonProfessionalMutation',
            selections: [
              {
                alias: null,
                args: (s = [
                  { kind: 'Literal', name: 's', value: 50 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: 'SwitchToNonProfessionalResponse',
                kind: 'LinkedField',
                name: 'user_switch_to_non_professional_v2',
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
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (t = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Professional',
                                kind: 'LinkedField',
                                name: 'professional',
                                plural: !1,
                                selections: [
                                  (r = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'professional_type',
                                    storageKey: null,
                                  }),
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
            name: 'SwitchToNonProfessionalMutation',
            selections: [
              {
                alias: null,
                args: s,
                concreteType: 'SwitchToNonProfessionalResponse',
                kind: 'LinkedField',
                name: 'user_switch_to_non_professional_v2',
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
                              t,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Professional',
                                kind: 'LinkedField',
                                name: 'professional',
                                plural: !1,
                                selections: [r, t],
                                storageKey: null,
                              },
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
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '1sJcQ_qi8rmOxsM2WGQapA',
            metadata: {},
            name: 'SwitchToNonProfessionalMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(i.hash = '3f5ecb0efa8cb1c7fc83a7dcf471e727'), (e.exports = i)
    },
    dOgT: function (e, n, l) {
      'use strict'
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfessionalProfile_spotlights',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'UserBusinessModuleResponseV1',
            kind: 'LinkedField',
            name: 'v1',
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: 'LinkedField',
                name: 'profile_module',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'UserBusinessModulesResponse',
        abstractKey: null,
        hash: 'f7cce126c1dd02fbf665fb2dcd8e359c',
      }
      e.exports = a
    },
    jtO7: function (e, n, l) {
      'use strict'
      var a = l('97Jx'),
        s = l.n(a),
        t = l('m3Bd'),
        r = l.n(t),
        i = l('ERkP'),
        o = l.n(i),
        u = l('t62R'),
        c = l('I4+6'),
        d = l('cm6r'),
        p = l('rHpw'),
        f = l('MWbm'),
        m = ['align', 'color', 'label'],
        g = p.a.create(function (e) {
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
          l = void 0 === n ? 'center' : n,
          a = e.color,
          t = e.label,
          i = r()(e, m),
          y = c.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return o.a.createElement(
          f.a,
          { style: g.container },
          o.a.createElement(
            d.a,
            s()({}, i, { interactiveStyles: y, style: g.root }),
            o.a.createElement(u.b, { align: l, color: a }, t),
          ),
        )
      }
    },
    rTC2: function (e, n, l) {
      'use strict'
      var a,
        s,
        t,
        r,
        i,
        o = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'professionalType' }),
              (s = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'UpdateProfessionalTypeMutation',
            selections: [
              {
                alias: null,
                args: (t = [
                  { kind: 'Variable', name: 'professional_type', variableName: 'professionalType' },
                  { kind: 'Literal', name: 's', value: 50 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: 'UserProfessionalTypeUpdateResponse',
                kind: 'LinkedField',
                name: 'user_change_professional_account_type_v2',
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
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Professional',
                                kind: 'LinkedField',
                                name: 'professional',
                                plural: !1,
                                selections: [
                                  (r = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'professional_type',
                                    storageKey: null,
                                  }),
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
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [s, a],
            kind: 'Operation',
            name: 'UpdateProfessionalTypeMutation',
            selections: [
              {
                alias: null,
                args: t,
                concreteType: 'UserProfessionalTypeUpdateResponse',
                kind: 'LinkedField',
                name: 'user_change_professional_account_type_v2',
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
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Professional',
                                kind: 'LinkedField',
                                name: 'professional',
                                plural: !1,
                                selections: [
                                  r,
                                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'rzefi43LuSddosg0Rryvcg',
            metadata: {},
            name: 'UpdateProfessionalTypeMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(o.hash = '1c04fb4103acc6910999ba2135b7b0bd'), (e.exports = o)
    },
    rf4p: function (e, n, l) {
      'use strict'
      l.r(n),
        l.d(n, 'professionalProfileQuery', function () {
          return be
        })
      var a = l('ERkP'),
        s = l.n(a),
        t = (l('YWiL'), l('ddV6')),
        r = l.n(t),
        i = (l('ho0z'), l('mC9n')),
        o = l('v6aA'),
        u = l('jHSc'),
        c = l('3XMw'),
        d = l.n(c),
        p = l('tI3i'),
        f = l.n(p),
        m = l('Irs7'),
        g = l('MWbm'),
        y = l('feu+'),
        k = l('cHvH'),
        b = l('rHpw'),
        _ = l('sgih'),
        v = l('/yvb'),
        L = d.a.cfd2f35d,
        K = { actionLabel: d.a.ia492079, secondaryActionLabel: d.a.a9b5e3a9 },
        F = {
          menuItemLabel: d.a.cb55eccd,
          confirmationTitleLabel: d.a.f6c453fb,
          confirmationDescriptionLabel: d.a.a8be809d,
        },
        T = {
          menuItemLabel: d.a.hbb1af08,
          confirmationTitleLabel: d.a.g3f74901,
          confirmationDescriptionLabel: d.a.f3bcfacf,
        },
        h = {
          menuItemLabel: d.a.d0c3f02d,
          confirmationTitleLabel: d.a.a01e84ef,
          confirmationDescriptionLabel: d.a.e8af8ef3,
        },
        C = function (e) {
          var n = e.onClose,
            l = e.onSwitchToBusinessAccountConfirm,
            a = e.onSwitchToCreatorAccountConfirm,
            t = e.onSwitchToNonProfessionalConfirm,
            o = e.professionalType,
            u = Object(m.b)(),
            c = s.a.useState(!1),
            d = r()(c, 2),
            p = d[0],
            f = d[1],
            C = s.a.useState(!1),
            P = r()(C, 2),
            w = P[0],
            E = P[1],
            R = s.a.useState(!1),
            I = r()(R, 2),
            U = I[0],
            D = I[1],
            x = function (e, l, a) {
              return s.a.createElement(y.a, {
                actionLabel: K.actionLabel,
                graphicDisplayMode: 'none',
                headline: e,
                isFullHeightOnMobile: !1,
                onAction: a,
                onClose: n,
                onSecondaryAction: n,
                secondaryActionLabel: K.secondaryActionLabel,
                subtext: l,
                withCloseButton: !1,
              })
            },
            M = function () {
              u.scribe(i.m('personal')), f(!0)
            },
            A = function () {
              u.scribe(i.m('creator')), D(!0)
            },
            O = function () {
              u.scribe(i.m('business')), E(!0)
            }
          return s.a.createElement(k.a, null, function (e) {
            e.windowHeight
            var r = e.windowWidth > b.a.theme.breakpoints.medium
            return s.a.createElement(
              _.a,
              {
                enableMaskForDismiss: !0,
                onMaskClick: n,
                style: r && S.roundedBorders,
                type: r ? 'center' : 'bottom',
                withMask: !0,
              },
              s.a.createElement(
                g.a,
                {
                  accessibilityRole: 'dialog',
                  accessibilityState: { modal: !0 },
                  style: [S.root, r && S.centeredContent],
                },
                s.a.createElement(
                  g.a,
                  { style: S.content },
                  s.a.createElement(
                    v.a,
                    { onPress: M, size: 'xLarge', style: S.button, type: 'primaryFilled' },
                    F.menuItemLabel,
                  ),
                  'Business' === o
                    ? s.a.createElement(
                        v.a,
                        { onPress: A, size: 'xLarge', style: S.button, type: 'primaryFilled' },
                        h.menuItemLabel,
                      )
                    : s.a.createElement(
                        v.a,
                        { onPress: O, size: 'xLarge', style: S.button, type: 'primaryFilled' },
                        T.menuItemLabel,
                      ),
                  s.a.createElement(v.a, { onPress: n, size: 'xLarge', style: S.button, type: 'primaryOutlined' }, L),
                ),
              ),
              p ? x(F.confirmationTitleLabel, F.confirmationDescriptionLabel, t) : null,
              w ? x(T.confirmationTitleLabel, T.confirmationDescriptionLabel, l) : null,
              U ? x(h.confirmationTitleLabel, h.confirmationDescriptionLabel, a) : null,
            )
          })
        },
        S = b.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, paddingVertical: e.spaces.space12 },
            centeredContent: { width: '100%', flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
            content: { margin: e.spaces.space16 },
            button: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            roundedBorders: { borderRadius: e.borderRadii.xLarge },
          }
        }),
        P = l('9YVX'),
        w = l('zCf4'),
        E = l('csss'),
        R = l('t62R'),
        I = l('CK8+'),
        U = l('jtO7'),
        D = l('CVPS'),
        x = l.n(D),
        M = l('1YZw'),
        A = l('G6rE')
      function O(e, n) {
        var l
        if (!n) return A.e.patchUser(e, { professional: void 0 })
        f()(
          (null == n ? void 0 : n.category) && (null == n ? void 0 : n.professional_type),
          'professional must be defined',
        )
        var a = null == n || null === (l = n.category) || void 0 === l ? void 0 : l[0]
        f()((null == a ? void 0 : a.id) && (null == a ? void 0 : a.name), 'category must be defined')
        var s = {
          rest_id: e,
          professional_type: n.professional_type,
          category: [{ id: a.id, name: a.name, display: !!a.display }],
        }
        return A.e.patchUser(e, { professional: s })
      }
      var B,
        H = l('0KEI'),
        V = l('uDfI'),
        j = l('HvW7'),
        N = l.n(j),
        z = d.a.db48309f,
        W = void 0 !== B ? B : (B = l('YmSc'))
      var G,
        Y,
        Q = l('yiKp'),
        X = l.n(Q),
        q = l('fEA7'),
        J = l.n(q),
        Z = void 0 !== G ? G : (G = l('7Gn9'))
      var $,
        ee,
        ne = { Personal: d.a.db48309f, Business: d.a.c701200b, Creator: d.a.acd8da09 },
        le = void 0 !== Y ? Y : (Y = l('rTC2'))
      var ae = d.a.e1f76977,
        se = d.a.i0864917,
        te = d.a.cd9102d4,
        re = d.a.eb551ae9,
        ie = d.a.f386777a,
        oe = d.a.d4b6a6ef,
        ue = { AboutModule: d.a.jaaa8984, RevueModule: d.a.d834aec4, ShopModule: d.a.c8b4bcaf },
        ce = void 0 !== $ ? $ : ($ = l('seTK')),
        de = void 0 !== ee ? ee : (ee = l('dOgT'))
      function pe(e) {
        var n,
          l,
          a = e.loggedInUserId,
          t = s.a.useContext(o.a).featureSwitches,
          c = x()(ce, e.professionalRef),
          d = x()(de, e.spotlightsRef),
          p = s.a.useState(!1),
          y = r()(p, 2),
          k = y[0],
          b = y[1],
          _ = Object(m.b)(),
          v = Object(w.f)(),
          L = (function (e, n) {
            var l = N()(le),
              a = r()(l, 1)[0],
              t = Object(H.useApiErrorHandler)(),
              i = Object(V.c)()
            return s.a.useCallback(
              function (l) {
                a({
                  variables: { userId: e, professionalType: l },
                  onCompleted: function () {
                    i(Object(M.b)({ text: ne[l] })), i(O(e, X()(X()({}, n), {}, { professional_type: l })))
                  },
                  optimisticResponse: {
                    user_change_professional_account_type_v2: {
                      user_results: {
                        result: { __typename: 'User', id: e, professional: { id: J.a.v4(), professional_type: l } },
                      },
                    },
                  },
                  onError: function (e) {
                    t(e)
                  },
                })
              },
              [i, t, e, n, a],
            )
          })(a, c),
          K = (function (e, n) {
            var l = N()(Z),
              a = r()(l, 1)[0],
              t = Object(H.useApiErrorHandler)(),
              i = Object(V.c)()
            return s.a.useCallback(
              function (l) {
                var s,
                  r = null == n || null === (s = n.category) || void 0 === s ? void 0 : s[0]
                f()((null == r ? void 0 : r.id) && (null == r ? void 0 : r.name), 'category must be defined')
                var o = X()(X()({}, r), {}, { display: l })
                a({
                  variables: { userId: e, displayCategory: l },
                  optimisticResponse: {
                    user_update_professional_category_display: {
                      user_results: {
                        result: { __typename: 'User', id: e, professional: { id: J.a.v4(), category: [o] } },
                      },
                    },
                  },
                  onCompleted: function () {
                    i(O(e, X()(X()({}, n), {}, { category: [o] })))
                  },
                  onError: function (e) {
                    t(e)
                  },
                })
              },
              [i, t, e, n, a],
            )
          })(a, c),
          F = (function (e, n) {
            var l = N()(W),
              a = r()(l, 1)[0],
              t = Object(H.useApiErrorHandler)(),
              i = Object(V.c)()
            return s.a.useCallback(
              function () {
                a({
                  variables: { userId: e },
                  onCompleted: function () {
                    i(Object(M.b)({ text: z })), i(O(e, void 0))
                  },
                  onError: function (e) {
                    t(e)
                  },
                })
              },
              [i, t, e, a],
            )
          })(a),
          T = s.a.useCallback(
            function () {
              v.goBack({ backLocation: '/settings/profile' })
            },
            [v],
          )
        s.a.useEffect(
          function () {
            _.scribe(i.e())
          },
          [_],
        )
        var h,
          S,
          D,
          A,
          B,
          j = null == c || null === (n = c.category) || void 0 === n ? void 0 : n[0],
          G = null === (l = null == j ? void 0 : j.display) || void 0 === l || l,
          Y = function (e) {
            e.preventDefault(), _.scribe(i.k()), b(!0)
          },
          Q = function () {
            _.scribe(i.a())
          },
          q = function () {
            _.scribe(i.d()), K(!G)
          },
          $ = function () {
            b(!1)
          },
          ee = function () {
            _.scribe(i.l('personal')), F(), b(!1), T()
          },
          pe = function (e) {
            return function () {
              var n = 'Creator' === e ? 'creator' : 'business'
              _.scribe(i.l(n)), L(e), b(!1)
            }
          },
          fe = t.isTrue('responsive_web_profile_spotlight_v0_config')
        return s.a.createElement(
          u.b,
          { accessibilityHidden: k, backButtonType: 'back', history: v, onBackClick: T, title: ae },
          s.a.createElement(
            g.a,
            { style: me.container },
            s.a.createElement(E.a, {
              description: null !== (B = null == j ? void 0 : j.name) && void 0 !== B ? B : te,
              label: se,
              link: '/i/flow/update_professional_category',
              onPress: Q,
              testID: P.a.categoryLabel,
            }),
            s.a.createElement(
              g.a,
              { testID: P.a.categoryDisplay },
              s.a.createElement(
                g.a,
                { style: me.categoryDisplaySwitchContainer },
                s.a.createElement(R.b, null, re),
                s.a.createElement(I.a, { onValueChange: q, value: G }),
              ),
            ),
            fe &&
              ((D =
                null == d || null === (h = d.v1) || void 0 === h || null === (S = h[0]) || void 0 === S
                  ? void 0
                  : S.profile_module.__typename),
              (A = D ? ue[D] : ''),
              s.a.createElement(E.a, {
                description: A,
                label: oe,
                link: '/settings/professional_profile/profile_spotlight',
              })),
            s.a.createElement(U.a, {
              align: 'left',
              color: 'primary',
              label: ie,
              onPress: Y,
              testID: P.a.switchAccountType,
            }),
            (function () {
              f()(!(null == c || !c.professional_type), 'professional.professional_type must be defined')
              var e = c.professional_type
              return k
                ? s.a.createElement(C, {
                    onClose: $,
                    onSwitchToBusinessAccountConfirm: pe('Business'),
                    onSwitchToCreatorAccountConfirm: pe('Creator'),
                    onSwitchToNonProfessionalConfirm: ee,
                    professionalType: e,
                  })
                : null
            })(),
          ),
        )
      }
      var fe,
        me = b.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            categoryDisplaySwitchContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        ge = l('5FtR'),
        ye = l('IAZG'),
        ke = l('vVrK'),
        be = void 0 !== fe ? fe : (fe = l('WN76'))
      n.default = Object(ke.a)(
        function (e) {
          var n,
            l,
            a = e.loggedInUserId,
            t = Object(ye.a)(be, { rest_id: a }, { fetchPolicy: 'network-only' }).user
          return null !== (n = t.result) &&
            void 0 !== n &&
            n.professional &&
            null !== (l = t.result) &&
            void 0 !== l &&
            l.profilemodules
            ? s.a.createElement(pe, {
                loggedInUserId: a,
                professionalRef: t.result.professional,
                spotlightsRef: t.result.profilemodules,
              })
            : s.a.createElement(ge.a, { to: '/settings/profile' })
        },
        { context: 'SETTINGS_PROFESSIONAL_PROFILE_SCREEN' },
      )
    },
    seTK: function (e, n, l) {
      'use strict'
      var a,
        s = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'ProfessionalProfile_professional',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'professional_type', storageKey: null },
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'BusinessCategory',
              kind: 'LinkedField',
              name: 'category',
              plural: !0,
              selections: [
                a,
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'display', storageKey: null },
              ],
              storageKey: null,
            },
          ],
          type: 'Professional',
          abstractKey: null,
        }
      ;(s.hash = 'a6eba8faed16c247b3e8cf33bf58708c'), (e.exports = s)
    },
    vVrK: function (e, n, l) {
      'use strict'
      l.d(n, 'a', function () {
        return u
      })
      l('T0aG'), l('KqXw'), l('Ysgh')
      var a = l('ERkP'),
        s = l.n(a),
        t = l('v6aA'),
        r = l('5FtR'),
        i = l('Fr3L')
      function o(e) {
        var n = e.WrappedComponent,
          l = e.errorConfig,
          a = s.a.useContext(t.a).loggedInUserId
        return a
          ? s.a.createElement(i.a, { errorConfig: l }, s.a.createElement(n, { loggedInUserId: a }))
          : s.a.createElement(r.a, { to: '/login' })
      }
      function u(e, n) {
        return function () {
          return s.a.createElement(o, { WrappedComponent: e, errorConfig: n })
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
