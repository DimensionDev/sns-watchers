;(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    '23An': function (e, n, a) {
      'use strict'
      var l = a('ERkP'),
        s = l.useEffect,
        t = l.useRef
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
    '7Gn9': function (e, n, a) {
      'use strict'
      a.r(n)
      var l,
        s,
        t,
        i,
        r,
        o = {
          fragment: {
            argumentDefinitions: [
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'displayCategory' }),
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
                                  (r = {
                                    alias: null,
                                    args: null,
                                    concreteType: 'BusinessCategory',
                                    kind: 'LinkedField',
                                    name: 'category',
                                    plural: !0,
                                    selections: [
                                      (i = {
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
            argumentDefinitions: [s, l],
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
                                selections: [r, i],
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
      ;(o.hash = 'a1f24919f856f42252acc05cedeffad2'), (n.default = o)
    },
    '9SqB': function (e, n, a) {
      'use strict'
      var l = a('IGGJ')(a('yiKp')),
        s = a('ERkP'),
        t = a('Ud88'),
        i = a('K1lQ').commitMutation,
        r = s.useState,
        o = s.useEffect,
        u = s.useRef,
        c = s.useCallback,
        d = a('23An')
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          a = t(),
          s = d(),
          p = u(a),
          f = u(e),
          m = u(new Set()),
          y = r(!1),
          g = y[0],
          k = y[1],
          b = c(
            function (n) {
              p.current === a && f.current === e && (m.current.delete(n), s.current && k(m.current.size > 0))
            },
            [a, s, e],
          )
        o(
          function () {
            ;(p.current === a && f.current === e) ||
              ((m.current = new Set()), s.current && k(!1), (p.current = a), (f.current = e))
          },
          [a, s, e],
        )
        var _ = c(
          function (t) {
            var i = n(
              a,
              (0, l.default)(
                (0, l.default)({}, t),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    b(i), t.onCompleted && t.onCompleted(e, n)
                  },
                  onError: function (e) {
                    b(i), t.onError && t.onError(e)
                  },
                  onUnsubscribe: function () {
                    b(i), t.onUnsubscribe && t.onUnsubscribe()
                  },
                },
              ),
            )
            return m.current.add(i), s.current && k(!0), i
          },
          [b, n, a, s, e],
        )
        return [_, g]
      }
    },
    '9YVX': function (e, n, a) {
      'use strict'
      a.d(n, 'a', function () {
        return l
      })
      var l = {
        categoryLabel: 'category_label',
        categoryDisplay: 'category_display',
        switchAccountType: 'switch_account_type',
        spotlightRow: 'spotlight_row',
      }
    },
    WN76: function (e, n, a) {
      'use strict'
      a.r(n)
      var l,
        s,
        t,
        i,
        r = {
          fragment: {
            argumentDefinitions: (l = [{ defaultValue: null, kind: 'LocalArgument', name: 'rest_id' }]),
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
            argumentDefinitions: l,
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
                              (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'BusinessCategory',
                                kind: 'LinkedField',
                                name: 'category',
                                plural: !0,
                                selections: [
                                  i,
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
      ;(r.hash = 'b6fd1834c9a4727b73ff791a81da3f94'), (n.default = r)
    },
    YmSc: function (e, n, a) {
      'use strict'
      a.r(n)
      var l,
        s,
        t,
        i,
        r = {
          fragment: {
            argumentDefinitions: (l = [{ defaultValue: null, kind: 'LocalArgument', name: 'userId' }]),
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
                                  (i = {
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
            argumentDefinitions: l,
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
                                selections: [i, t],
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
          },
          params: {
            id: '1sJcQ_qi8rmOxsM2WGQapA',
            metadata: {},
            name: 'SwitchToNonProfessionalMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(r.hash = '3f5ecb0efa8cb1c7fc83a7dcf471e727'), (n.default = r)
    },
    dOgT: function (e, n, a) {
      'use strict'
      a.r(n)
      var l = {
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
      n.default = l
    },
    jtO7: function (e, n, a) {
      'use strict'
      var l = a('97Jx'),
        s = a.n(l),
        t = a('m3Bd'),
        i = a.n(t),
        r = a('ERkP'),
        o = a.n(r),
        u = a('t62R'),
        c = a('I4+6'),
        d = a('cm6r'),
        p = a('rHpw'),
        f = a('MWbm'),
        m = ['align', 'color', 'label'],
        y = p.a.create(function (e) {
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
          l = e.color,
          t = e.label,
          r = i()(e, m),
          g = c.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[l],
            insetFocusRing: !0,
          })
        return o.a.createElement(
          f.a,
          { style: y.container },
          o.a.createElement(
            d.a,
            s()({}, r, { interactiveStyles: g, style: y.root }),
            o.a.createElement(u.b, { align: a, color: l }, t),
          ),
        )
      }
    },
    rTC2: function (e, n, a) {
      'use strict'
      a.r(n)
      var l,
        s,
        t,
        i,
        r,
        o = {
          fragment: {
            argumentDefinitions: [
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'professionalType' }),
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
                                  (i = {
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
            argumentDefinitions: [s, l],
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
                                  i,
                                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
      ;(o.hash = '1c04fb4103acc6910999ba2135b7b0bd'), (n.default = o)
    },
    rf4p: function (e, n, a) {
      'use strict'
      a.r(n),
        a.d(n, 'professionalProfileQuery', function () {
          return _e
        }),
        a.d(n, 'default', function () {
          return Ke
        })
      var l = a('ERkP'),
        s = a.n(l),
        t = a('v6aA'),
        i = (a('enFi'), a('tI3i')),
        r = a.n(i),
        o = a('ddV6'),
        u = a.n(o),
        c = (a('ho0z'), a('mC9n')),
        d = a('jHSc'),
        p = a('3XMw'),
        f = a.n(p),
        m = a('Irs7'),
        y = a('MWbm'),
        g = a('feu+'),
        k = a('cHvH'),
        b = a('rHpw'),
        _ = a('sgih'),
        v = a('/yvb'),
        F = f.a.cfd2f35d,
        K = { actionLabel: f.a.ia492079, secondaryActionLabel: f.a.a9b5e3a9 },
        L = {
          menuItemLabel: f.a.cb55eccd,
          confirmationTitleLabel: f.a.f6c453fb,
          confirmationDescriptionLabel: f.a.a8be809d,
        },
        T = {
          menuItemLabel: f.a.hbb1af08,
          confirmationTitleLabel: f.a.g3f74901,
          confirmationDescriptionLabel: f.a.f3bcfacf,
        },
        h = {
          menuItemLabel: f.a.d0c3f02d,
          confirmationTitleLabel: f.a.a01e84ef,
          confirmationDescriptionLabel: f.a.e8af8ef3,
        },
        C = function (e) {
          var n = e.onClose,
            a = e.onSwitchToBusinessAccountConfirm,
            l = e.onSwitchToCreatorAccountConfirm,
            t = e.onSwitchToNonProfessionalConfirm,
            i = e.professionalType,
            r = Object(m.b)(),
            o = s.a.useState(!1),
            d = u()(o, 2),
            p = d[0],
            f = d[1],
            C = s.a.useState(!1),
            E = u()(C, 2),
            P = E[0],
            w = E[1],
            I = s.a.useState(!1),
            U = u()(I, 2),
            R = U[0],
            D = U[1],
            M = function (e, a, l) {
              return s.a.createElement(g.a, {
                actionLabel: K.actionLabel,
                graphicDisplayMode: 'none',
                headline: e,
                isFullHeightOnMobile: !1,
                onAction: l,
                onClose: n,
                onSecondaryAction: n,
                secondaryActionLabel: K.secondaryActionLabel,
                subtext: a,
                withCloseButton: !1,
              })
            },
            A = function () {
              r.scribe(c.j('personal')), f(!0)
            },
            B = function () {
              r.scribe(c.j('creator')), D(!0)
            },
            x = function () {
              r.scribe(c.j('business')), w(!0)
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
                y.a,
                {
                  accessibilityRole: 'dialog',
                  accessibilityState: { modal: !0 },
                  style: [S.root, r && S.centeredContent],
                },
                s.a.createElement(
                  y.a,
                  { style: S.content },
                  s.a.createElement(
                    v.a,
                    { onPress: A, size: 'xLarge', style: S.button, type: 'primaryFilled' },
                    L.menuItemLabel,
                  ),
                  'Business' === i
                    ? s.a.createElement(
                        v.a,
                        { onPress: B, size: 'xLarge', style: S.button, type: 'primaryFilled' },
                        h.menuItemLabel,
                      )
                    : s.a.createElement(
                        v.a,
                        { onPress: x, size: 'xLarge', style: S.button, type: 'primaryFilled' },
                        T.menuItemLabel,
                      ),
                  s.a.createElement(v.a, { onPress: n, size: 'xLarge', style: S.button, type: 'primaryOutlined' }, F),
                ),
              ),
              p ? M(L.confirmationTitleLabel, L.confirmationDescriptionLabel, t) : null,
              P ? M(T.confirmationTitleLabel, T.confirmationDescriptionLabel, a) : null,
              R ? M(h.confirmationTitleLabel, h.confirmationDescriptionLabel, l) : null,
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
        E = a('9YVX'),
        P = a('zCf4'),
        w = a('csss'),
        I = a('t62R'),
        U = a('CK8+'),
        R = a('jtO7'),
        D = a('jAXQ'),
        M = a.n(D),
        A = a('1YZw'),
        B = a('G6rE')
      function x(e, n) {
        var a
        if (!n) return B.e.patchUser(e, { professional: void 0 })
        r()(
          (null == n ? void 0 : n.category) && (null == n ? void 0 : n.professional_type),
          'professional must be defined',
        )
        var l = null == n || null === (a = n.category) || void 0 === a ? void 0 : a[0]
        r()((null == l ? void 0 : l.id) && (null == l ? void 0 : l.name), 'category must be defined')
        var s = {
          rest_id: e,
          professional_type: n.professional_type,
          category: [{ id: l.id, name: l.name, display: !!l.display }],
        }
        return B.e.patchUser(e, { professional: s })
      }
      var O,
        j = a('0KEI'),
        V = a('uDfI'),
        H = a('9SqB'),
        N = a.n(H),
        z = f.a.db48309f,
        G = void 0 !== O ? O : (O = a('YmSc'))
      var Q,
        q,
        W = a('yiKp'),
        J = a.n(W),
        X = a('fEA7'),
        Y = a.n(X),
        Z = void 0 !== Q ? Q : (Q = a('7Gn9'))
      var $,
        ee,
        ne = { Personal: f.a.db48309f, Business: f.a.c701200b, Creator: f.a.acd8da09 },
        ae = void 0 !== q ? q : (q = a('rTC2'))
      var le = f.a.e1f76977,
        se = f.a.i0864917,
        te = f.a.cd9102d4,
        ie = f.a.d93271e2,
        re = f.a.h26379fe,
        oe = f.a.f386777a,
        ue = f.a.d4b6a6ef,
        ce = { AboutModule: f.a.jaaa8984, RevueModule: f.a.d834aec4, ShopModule: f.a.c8b4bcaf },
        de = void 0 !== $ ? $ : ($ = a('seTK')),
        pe = void 0 !== ee ? ee : (ee = a('dOgT'))
      function fe(e) {
        var n,
          a,
          l = e.loggedInUserId,
          i = s.a.useContext(t.a).featureSwitches,
          o = M()(de, e.professionalRef),
          p = M()(pe, e.spotlightsRef),
          f = s.a.useState(!1),
          g = u()(f, 2),
          k = g[0],
          b = g[1],
          _ = Object(m.b)(),
          v = Object(P.f)(),
          F = (function (e, n) {
            var a = N()(ae),
              l = u()(a, 1)[0],
              t = Object(j.useApiErrorHandler)(),
              i = Object(V.c)()
            return s.a.useCallback(
              function (a) {
                l({
                  variables: { userId: e, professionalType: a },
                  onCompleted: function () {
                    i(Object(A.b)({ text: ne[a] })), i(x(e, J()(J()({}, n), {}, { professional_type: a })))
                  },
                  optimisticResponse: {
                    user_change_professional_account_type_v2: {
                      user_results: {
                        result: { __typename: 'User', id: e, professional: { id: Y.a.v4(), professional_type: a } },
                      },
                    },
                  },
                  onError: function (e) {
                    t(e)
                  },
                })
              },
              [i, t, e, n, l],
            )
          })(l, o),
          K = (function (e, n) {
            var a = N()(Z),
              l = u()(a, 1)[0],
              t = Object(j.useApiErrorHandler)(),
              i = Object(V.c)()
            return s.a.useCallback(
              function (a) {
                var s,
                  o = null == n || null === (s = n.category) || void 0 === s ? void 0 : s[0]
                r()((null == o ? void 0 : o.id) && (null == o ? void 0 : o.name), 'category must be defined')
                var u = J()(J()({}, o), {}, { display: a })
                l({
                  variables: { userId: e, displayCategory: a },
                  optimisticResponse: {
                    user_update_professional_category_display: {
                      user_results: {
                        result: { __typename: 'User', id: e, professional: { id: Y.a.v4(), category: [u] } },
                      },
                    },
                  },
                  onCompleted: function () {
                    i(x(e, J()(J()({}, n), {}, { category: [u] })))
                  },
                  onError: function (e) {
                    t(e)
                  },
                })
              },
              [i, t, e, n, l],
            )
          })(l, o),
          L = (function (e, n) {
            var a = N()(G),
              l = u()(a, 1)[0],
              t = Object(j.useApiErrorHandler)(),
              i = Object(V.c)()
            return s.a.useCallback(
              function () {
                l({
                  variables: { userId: e },
                  onCompleted: function () {
                    i(Object(A.b)({ text: z })), i(x(e, void 0))
                  },
                  onError: function (e) {
                    t(e)
                  },
                })
              },
              [i, t, e, l],
            )
          })(l),
          T = s.a.useCallback(
            function () {
              v.goBack({ backLocation: '/settings/profile' })
            },
            [v],
          )
        s.a.useEffect(
          function () {
            _.scribe(c.e())
          },
          [_],
        )
        var h,
          S,
          D,
          B,
          O,
          H = null == o || null === (n = o.category) || void 0 === n ? void 0 : n[0],
          Q = null === (a = null == H ? void 0 : H.display) || void 0 === a || a,
          q = function (e) {
            e.preventDefault(), _.scribe(c.h()), b(!0)
          },
          W = function () {
            _.scribe(c.a())
          },
          X = function () {
            _.scribe(c.d()), K(!Q)
          },
          $ = function () {
            b(!1)
          },
          ee = function () {
            _.scribe(c.i('personal')), L(), b(!1), T()
          },
          fe = function (e) {
            return function () {
              var n = 'Creator' === e ? 'creator' : 'business'
              _.scribe(c.i(n)), F(e), b(!1)
            }
          },
          me = i.isTrue('responsive_web_profile_spotlight_v0_config')
        return s.a.createElement(
          d.b,
          { accessibilityHidden: k, backButtonType: 'back', history: v, onBackClick: T, title: le },
          s.a.createElement(
            y.a,
            { style: ye.container },
            s.a.createElement(w.a, {
              description: null !== (O = null == H ? void 0 : H.name) && void 0 !== O ? O : te,
              label: se,
              link: '/i/flow/update_professional_category',
              onPress: W,
              testID: E.a.categoryLabel,
            }),
            s.a.createElement(
              y.a,
              { testID: E.a.categoryDisplay },
              s.a.createElement(
                y.a,
                { style: ye.categoryDisplaySwitchContainer },
                s.a.createElement(I.b, null, ie),
                s.a.createElement(U.a, { onValueChange: X, value: Q }),
              ),
              s.a.createElement(
                y.a,
                { style: ye.categoryDisplayDescriptionContainer },
                s.a.createElement(I.b, { color: 'gray700', size: 'subtext2' }, re),
              ),
            ),
            me &&
              ((D =
                null == p || null === (h = p.v1) || void 0 === h || null === (S = h[0]) || void 0 === S
                  ? void 0
                  : S.profile_module.__typename),
              (B = D ? ce[D] : ''),
              s.a.createElement(w.a, {
                description: B,
                label: ue,
                link: '/settings/professional_profile/profile_spotlight',
              })),
            s.a.createElement(R.a, {
              align: 'left',
              color: 'primary',
              label: oe,
              onPress: q,
              testID: E.a.switchAccountType,
            }),
            (function () {
              r()(!(null == o || !o.professional_type), 'professional.professional_type must be defined')
              var e = o.professional_type
              return k
                ? s.a.createElement(C, {
                    onClose: $,
                    onSwitchToBusinessAccountConfirm: fe('Business'),
                    onSwitchToCreatorAccountConfirm: fe('Creator'),
                    onSwitchToNonProfessionalConfirm: ee,
                    professionalType: e,
                  })
                : null
            })(),
          ),
        )
      }
      var me,
        ye = b.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            categoryDisplaySwitchContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space8,
            },
            categoryDisplayDescriptionContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space2,
              paddingBottom: e.spaces.space8,
            },
          }
        }),
        ge = a('5FtR'),
        ke = a('Fr3L'),
        be = a('IAZG'),
        _e = void 0 !== me ? me : (me = a('WN76')),
        ve = { context: 'SETTINGS_PROFESSIONAL_PROFILE_SCREEN' }
      function Fe(e) {
        var n,
          a,
          l,
          t,
          i = e.loggedInUserId,
          o = Object(be.a)(_e, { rest_id: i }, { fetchPolicy: 'network-only' }).user
        return null !== (n = o.result) && void 0 !== n && n.professional
          ? (r()(null === (a = o.result) || void 0 === a ? void 0 : a.profilemodules, 'profilemodules must be defined'),
            s.a.createElement(fe, {
              loggedInUserId: i,
              professionalRef: null === (l = o.result) || void 0 === l ? void 0 : l.professional,
              spotlightsRef: null === (t = o.result) || void 0 === t ? void 0 : t.profilemodules,
            }))
          : s.a.createElement(ge.a, { to: '/settings/profile' })
      }
      function Ke() {
        var e = s.a.useContext(t.a).loggedInUserId
        return e
          ? s.a.createElement(ke.a, { errorConfig: ve }, s.a.createElement(Fe, { loggedInUserId: e }))
          : s.a.createElement(ge.a, { to: '/login' })
      }
    },
    seTK: function (e, n, a) {
      'use strict'
      a.r(n)
      var l,
        s = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'ProfessionalProfile_professional',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'professional_type', storageKey: null },
            (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'BusinessCategory',
              kind: 'LinkedField',
              name: 'category',
              plural: !0,
              selections: [
                l,
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'display', storageKey: null },
              ],
              storageKey: null,
            },
          ],
          type: 'Professional',
          abstractKey: null,
        }
      ;(s.hash = 'a6eba8faed16c247b3e8cf33bf58708c'), (n.default = s)
    },
  },
])
//# sourceMappingURL=WIPED
