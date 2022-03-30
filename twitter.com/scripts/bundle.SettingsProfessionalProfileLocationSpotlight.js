;(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    OooE: function (e, l, n) {
      'use strict'
      n.r(l),
        n.d(l, 'locationSpotlightQuery', function () {
          return z
        }),
        n.d(l, 'LocationSpotlightQueryRenderer', function () {
          return H
        })
      n('hBpG'), n('7x/C')
      var a = n('ERkP'),
        t = n.n(a),
        i = (n('enFi'), n('ddV6')),
        r = n.n(i),
        o = (n('z84I'), n('jHSc')),
        s = n('T0aG'),
        u = n.n(s),
        d = (n('KqXw'), n('Ysgh'), n('v6aA')),
        c = n('5FtR'),
        p = n('Fr3L')
      function m(e) {
        var l = e.WrappedComponent,
          n = e.errorConfig,
          a = t.a.useContext(d.a).loggedInUserId
        return a
          ? t.a.createElement(p.a, { errorConfig: n }, t.a.createElement(l, { loggedInUserId: a }))
          : t.a.createElement(c.a, { to: '/login' })
      }
      function g(e, l, n) {
        for (var a = l.split('.'), t = e, i = 0; null !== t && 'object' === u()(t) && i < a.length; )
          (t = t[a[i]]), (i += 1)
        return i === a.length && 'string' == typeof t ? t : n
      }
      var y = n('3XMw'),
        f = n.n(y),
        b = n('zCf4'),
        k = n('MWbm'),
        _ = n('eb3s'),
        L = n('csss'),
        v = n('t62R'),
        F = n('/yvb'),
        h = n('rHpw')
      var K,
        S = n('jAXQ'),
        E = n.n(S),
        T = '/settings/professional_profile/profile_spotlight',
        C = f.a.jaaa8984,
        B = f.a.fc7b0980,
        A = f.a.e047b8fa,
        U = {
          cancelButtonLabel: f.a.a9b5e3a9,
          confirmButtonLabel: f.a.f0977f51,
          headline: f.a.ie85a7a8,
          text: f.a.i411275f,
        },
        w = [
          {
            key: 'website.display',
            label: f.a.d9d293b8,
            placeholder: f.a.f448cbcb,
            Component: function (e) {
              var l,
                n = e.locationSpotlight
              return t.a.createElement(
                k.a,
                null,
                t.a.createElement(v.b, null, null === (l = n.data.website) || void 0 === l ? void 0 : l.display),
              )
            },
          },
          {
            key: 'address.formatted_address',
            label: f.a.c16c9568,
            placeholder: f.a.f4f4dd6f,
            Component: function (e) {
              var l,
                n = e.locationSpotlight
              return t.a.createElement(
                k.a,
                null,
                t.a.createElement(
                  v.b,
                  null,
                  null === (l = n.data.address) || void 0 === l ? void 0 : l.formatted_address,
                ),
              )
            },
          },
        ],
        I = void 0 !== K ? K : (K = n('SnLD'))
      function M(e) {
        var l = e.locationSpotlightRef,
          n = E()(I, l),
          a = t.a.useState(),
          i = r()(a, 2),
          s = i[0],
          u = i[1],
          d = t.a.useState(!1),
          c = r()(d, 2),
          p = c[0],
          m = c[1],
          y = Object(b.f)()
        function f() {
          y.goBack({ backLocation: T })
        }
        function h(e) {
          return function (l) {
            l.preventDefault(), u(e)
          }
        }
        function K() {
          m(!1)
        }
        function S() {
          f()
        }
        if (s) {
          var M = s.Component
          return t.a.createElement(
            o.b,
            {
              accessibilityHidden: !1,
              backButtonType: 'back',
              onBackClick: function () {
                u(void 0)
              },
              title: s.label,
            },
            t.a.createElement(
              k.a,
              { style: R.container },
              t.a.createElement(M, { locationSpotlight: n, onChange: function (e, l) {} }),
            ),
          )
        }
        return t.a.createElement(
          o.b,
          { accessibilityHidden: !1, backButtonType: 'back', onBackClick: f, title: C },
          t.a.createElement(
            k.a,
            { style: R.container },
            w.map(function (e) {
              return t.a.createElement(L.a, {
                description: g(n.data, e.key, e.placeholder),
                key: e.key,
                label: e.label,
                link: T,
                onPress: h(e),
              })
            }),
            t.a.createElement(
              k.a,
              { style: R.bottomContainer },
              t.a.createElement(v.b, { color: 'gray700', size: 'subtext1' }, B),
            ),
            t.a.createElement(
              k.a,
              { style: R.bottomContainer },
              t.a.createElement(
                F.a,
                {
                  onPress: function () {
                    m(!0)
                  },
                  type: 'destructiveText',
                },
                A,
              ),
            ),
            p &&
              t.a.createElement(_.a, {
                cancelButtonLabel: U.cancelButtonLabel,
                confirmButtonLabel: U.confirmButtonLabel,
                headline: U.headline,
                onCancel: K,
                onConfirm: S,
                text: U.text,
                withCancelButton: !0,
              }),
          ),
        )
      }
      var x,
        R = h.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            bottomContainer: {
              alignItems: 'center',
              flexGrow: 1,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space16,
            },
          }
        }),
        D = n('IAZG'),
        z = void 0 !== x ? x : (x = n('szsl'))
      function H(e) {
        var l,
          n,
          a,
          i,
          r,
          o = e.loggedInUserId,
          s =
            null === (l = Object(D.a)(z, { rest_id: o }).user.result) ||
            void 0 === l ||
            null === (n = l.editable_profilemodules) ||
            void 0 === n ||
            null === (a = n.configurable_modules_v1) ||
            void 0 === a
              ? void 0
              : a.find(function (e) {
                  return 'About' === e.module_type
                })
        return null != s && null !== (i = s.module_data) && void 0 !== i && i.profile_module
          ? t.a.createElement(M, {
              locationSpotlightRef:
                null == s || null === (r = s.module_data) || void 0 === r ? void 0 : r.profile_module,
            })
          : t.a.createElement(c.a, { to: '/settings/professional_profile' })
      }
      var O, Q
      l.default =
        ((O = H),
        (Q = { context: 'LOCATION_SPOTLIGHT' }),
        function () {
          return t.a.createElement(m, { WrappedComponent: O, errorConfig: Q })
        })
    },
    SnLD: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'LocationSpotlight_data',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AboutModuleData',
            kind: 'LinkedField',
            name: 'data',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'BusinessAddressResponse',
                kind: 'LinkedField',
                name: 'address',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'formatted_address', storageKey: null },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'ApiShortenedUrl',
                kind: 'LinkedField',
                name: 'website',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'display', storageKey: null }],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'AboutModule',
        abstractKey: null,
        hash: '3457f3f3c424b466d71a43b43f2b74db',
      }
      l.default = a
    },
    szsl: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        t,
        i,
        r,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'rest_id' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'LocationSpotlightQuery',
            selections: [
              {
                alias: 'user',
                args: (t = [
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
                            concreteType: 'UserBusinessEditableModules',
                            kind: 'LinkedField',
                            name: 'editable_profilemodules',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserBusinessConfigurableModuleV1',
                                kind: 'LinkedField',
                                name: 'configurable_modules_v1',
                                plural: !0,
                                selections: [
                                  (i = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'module_type',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'UserBusinessEditableModuleV1',
                                    kind: 'LinkedField',
                                    name: 'module_data',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'profile_module',
                                        plural: !1,
                                        selections: [
                                          { args: null, kind: 'FragmentSpread', name: 'LocationSpotlight_data' },
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
            name: 'LocationSpotlightQuery',
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
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
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
                                concreteType: 'UserBusinessConfigurableModuleV1',
                                kind: 'LinkedField',
                                name: 'configurable_modules_v1',
                                plural: !0,
                                selections: [
                                  i,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'UserBusinessEditableModuleV1',
                                    kind: 'LinkedField',
                                    name: 'module_data',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'profile_module',
                                        plural: !1,
                                        selections: [
                                          r,
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'AboutModuleData',
                                                kind: 'LinkedField',
                                                name: 'data',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'BusinessAddressResponse',
                                                    kind: 'LinkedField',
                                                    name: 'address',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'formatted_address',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiShortenedUrl',
                                                    kind: 'LinkedField',
                                                    name: 'website',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'display',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'AboutModule',
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
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
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
            id: 'htzeAaNZAHUI475xY6054g',
            metadata: {},
            name: 'LocationSpotlightQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '4cc2ea203ebfa4958a1ef8cff0e24621'), (l.default = o)
    },
  },
])
//# sourceMappingURL=WIPED
