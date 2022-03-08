;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    '21nk': function (e, n, r) {
      'use strict'
      var l = r('I9iR'),
        a = r('3KVO'),
        t = r('yLYC'),
        i = r('Ud88'),
        s = (r('/2Cm'), r('aQQo').useTrackLoadQueryInRender),
        u = (r('ERkP').useDebugValue, r('K1lQ').__internal),
        o = u.fetchQueryDeduped,
        c = u.fetchQuery
      e.exports = function (e, n, r) {
        s()
        var u,
          d = i(),
          f = n.fetchKey,
          p = n.fetchPolicy,
          m = n.source,
          y = n.variables,
          g = n.networkCacheConfig,
          v = t(e, y, g)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          v.request.node.params.name !== n.name && l(!1),
            (u = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: f,
              fetchObservable: o(d, v.request.identifier, function () {
                return d === n.environment && null != m
                  ? d.executeWithSource({ operation: v, source: m })
                  : d.execute({ operation: v })
              }),
              fetchPolicy: p,
              query: v,
              renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
            })
        else {
          var k = c(d, v)
          u = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != m && d === n.environment ? m.ifEmpty(k) : (n.environment, k),
            fetchKey: f,
            fetchPolicy: p,
            query: v,
            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
          }
        }
        return a(u)
      }
    },
    '9RBu': function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'superFollowsSubscribeQuery', function () {
          return q
        })
      var l,
        a,
        t,
        i = r('ERkP'),
        s = r.n(i),
        u = (r('enFi'), r('rZeG')),
        o = r('kGix'),
        c = (r('ho0z'), r('hBpG'), r('7x/C'), r('1t7P'), r('jQ/y'), r('uFXj'), r('lD8l')),
        d = r('+7VC'),
        f = r('v//M'),
        p = r('3XMw'),
        m = r.n(p),
        y = r('VTDR'),
        g = r('MAc7'),
        v = r('9VLy'),
        k = r('t62R'),
        b = function (e) {
          var n = e.style
          return s.a.createElement(
            k.b,
            { color: 'gray700', style: n },
            s.a.createElement(
              m.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              s.a.createElement(
                k.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                m.a.d822ae43,
              ),
            ),
          )
        },
        h = r('1k08'),
        _ = r('zCf4'),
        w = r('MWbm'),
        F = r('/yvb'),
        S = r('cHvH'),
        E = r('rHpw'),
        K = r('sgih'),
        T = r('jAXQ'),
        C = r.n(T),
        R = m.a.cbc8ce27,
        L = m.a.b600eb88,
        P = m.a.b08bbeb4,
        D = m.a.d2613122,
        Q = m.a.g61ed8a4,
        U = m.a.c3d23f10,
        N = m.a.d338f53e,
        A = void 0 !== l ? l : (l = r('l62v')),
        I = void 0 !== a ? a : (a = r('E0zt')),
        O = E.a.create(function (e) {
          return {
            sheet: {
              backgroundColor: e.colors.cellBackground,
              minHeight: '480px',
              paddingBottom: e.spaces.space40,
              paddingTop: e.spaces.space64,
              position: 'relative',
            },
            demoTweet: { alignSelf: 'center', marginTop: e.spaces.space16 },
            demoVIPTweetMarginTop: { marginTop: e.spaces.space48 },
            titleDescription: { marginTop: e.spaces.space72 },
            signature: { marginTop: e.spaces.space8 },
            disclaimer: { marginTop: e.spaces.space64 },
            subscribeButtonContainer: { alignItems: 'center', flexGrow: 1, marginTop: e.spaces.space24 },
            subscribeButton: { width: '100%' },
            errorTitleDescription: { marginTop: 296 },
            errorButton: { marginTop: e.spaces.space24 },
            narrow: { paddingHorizontal: e.spaces.space32 },
            wide: { maxHeight: '600px', paddingHorizontal: e.spaces.space64 },
          }
        }),
        x = function (e) {
          var n = e.fetchStatus,
            r = e.onRetry,
            l = e.screenName,
            a = e.user,
            t = e.viewer,
            i = C()(A, a),
            u = C()(I, t),
            o = Object(_.f)(),
            p = function () {
              o.push('/'.concat(l, '/superfollows'))
            },
            m = function () {
              var e,
                n,
                r,
                l,
                a,
                t,
                o,
                f,
                m,
                y = null !== (e = null == i ? void 0 : i.legacy.name) && void 0 !== e ? e : void 0,
                k = null !== (n = null == i ? void 0 : i.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
                _ = null !== (r = null == i ? void 0 : i.legacy.screen_name) && void 0 !== r ? r : void 0,
                S =
                  null !==
                    (l =
                      null == i || null === (a = i.super_follow_creator_benefits) || void 0 === a
                        ? void 0
                        : a.creator_intro) && void 0 !== l
                    ? l
                    : void 0,
                E = (
                  null !==
                    (t =
                      null == i || null === (o = i.super_follow_creator_benefits) || void 0 === o
                        ? void 0
                        : o.benefits_data) && void 0 !== t
                    ? t
                    : []
                ).find(function (e) {
                  return 'ExclusiveContent' === e.benefit_type
                }),
                K = null !== (f = null == E ? void 0 : E.title) && void 0 !== f ? f : R,
                T = null !== (m = null == E ? void 0 : E.description) && void 0 !== m ? m : void 0
              return s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(g.a, { imageUrl: k, name: y, value: S }),
                s.a.createElement(h.a, { description: T, style: O.titleDescription, title: K }),
                s.a.createElement(v.a, { imageUrl: k, screenName: _, style: O.signature }),
                s.a.createElement(c.a, { style: O.demoTweet }),
                s.a.createElement(h.a, { description: P, style: O.titleDescription, title: L }),
                u ? s.a.createElement(d.a, { style: [O.demoTweet, O.demoVIPTweetMarginTop], user: u }) : null,
                s.a.createElement(b, { style: O.disclaimer }),
                s.a.createElement(
                  w.a,
                  { style: O.subscribeButtonContainer },
                  s.a.createElement(
                    F.a,
                    {
                      backgroundColor: 'plum500',
                      borderColor: 'transparent',
                      color: 'white',
                      disabled: !0,
                      onPress: p,
                      style: O.subscribeButton,
                    },
                    D({ price: '$X.XX' }),
                  ),
                ),
              )
            },
            k = function () {
              return s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(h.a, { description: U, style: O.errorTitleDescription, title: Q }),
                s.a.createElement(F.a, { onPress: r, style: O.errorButton, type: 'brandFilled' }, N),
              )
            }
          return s.a.createElement(S.a, null, function (e) {
            var l = e.windowWidth > E.a.theme.breakpoints.small
            return s.a.createElement(
              K.a,
              {
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: p,
                style: [O.sheet, l ? O.wide : O.narrow],
                type: 'full',
                withMask: !0,
              },
              s.a.createElement(y.a, null),
              s.a.createElement(f.a, { fetchStatus: n, onRequestRetry: r, render: m, renderFailure: k, retryable: !1 }),
            )
          })
        },
        B = r('n0Rl'),
        q = void 0 !== t ? t : (t = r('kbWR')),
        M = Object(B.b)(q, { errorConfig: { context: 'SUPER_FOLLOWS_SUBSCRIPTION_SCREEN' } })
      n.default = function () {
        var e = Object(_.h)().screenName || '',
          n = { screenName: Object(u.a)(e) }
        return s.a.createElement(M, {
          render: function (n) {
            var r,
              l,
              a,
              t = n.data,
              i = n.fetchStatus,
              u = n.retry,
              c = null == t || null === (r = t.user) || void 0 === r ? void 0 : r.result,
              d =
                null == t || null === (l = t.viewer) || void 0 === l || null === (a = l.user_results) || void 0 === a
                  ? void 0
                  : a.result
            return s.a.createElement(x, {
              fetchStatus: Object(o.b)(
                i,
                'User' === (null == c ? void 0 : c.__typename) && 'User' === (null == d ? void 0 : d.__typename),
              ),
              onRetry: u,
              screenName: e,
              user: c || void 0,
              viewer: d || void 0,
            })
          },
          variables: n,
        })
      }
    },
    E0zt: function (e, n, r) {
      'use strict'
      r.r(n)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ExclusiveDemoVIPContent_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'fbdb22bbceb6934ff7a3400ee96f706c',
      }
      n.default = l
    },
    bCEw: function (e, n, r) {
      'use strict'
      var l = r('IGGJ')(r('K1iM')),
        a = r('23An'),
        t = r('Ud88'),
        i = r('aQQo'),
        s = i.loadQuery,
        u = i.useTrackLoadQueryInRender,
        o = r('ERkP'),
        c = o.useCallback,
        d = o.useEffect,
        f = o.useRef,
        p = o.useState,
        m = r('K1lQ').getRequest,
        y = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== m(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var r = null != n ? n : y,
          i = t()
        u()
        var o = a(),
          m = f(new Set([r])),
          v = p(function () {
            return r
          }),
          k = v[0],
          b = v[1],
          h = p(function () {
            return r
          }),
          _ = h[0],
          w = h[1]
        r !== _ && (m.current.add(r), w(r), b(r))
        var F = c(
            function () {
              o.current && (m.current.add(y), b(y))
            },
            [o],
          ),
          S = c(
            function (n, r) {
              var l =
                null != r && r.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: r.fetchPolicy,
                      networkCacheConfig: r.networkCacheConfig,
                      __nameForWarning: r.__nameForWarning,
                    }
                  : r
              if (o.current) {
                var a,
                  t = s(null !== (a = null == r ? void 0 : r.__environment) && void 0 !== a ? a : i, e, n, l)
                m.current.add(t), b(t)
              }
            },
            [i, e, b, o],
          ),
          E = f(!1)
        return (
          d(function () {
            return function () {
              E.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === E.current)
                return (
                  (E.current = !1),
                  void (
                    'NullQueryReference' !== k.kind &&
                    S(k.variables, { fetchPolicy: k.fetchPolicy, networkCacheConfig: k.networkCacheConfig })
                  )
                )
              var n = m.current
              if (o.current) {
                var r,
                  a = (0, l.default)(n)
                try {
                  for (a.s(); !(r = a.n()).done; ) {
                    var t = r.value
                    if (t === k) break
                    n.delete(t),
                      'NullQueryReference' !== t.kind &&
                        (g(e) ? t.dispose && t.dispose() : t.releaseQuery && t.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [k, o, S, e],
          ),
          d(
            function () {
              return function () {
                var n,
                  r = (0, l.default)(m.current)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var a = n.value
                    'NullQueryReference' !== a.kind &&
                      (g(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (t) {
                  r.e(t)
                } finally {
                  r.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === k.kind ? null : k, S, F]
        )
      }
    },
    kbWR: function (e, n, r) {
      'use strict'
      r.r(n)
      var l,
        a,
        t,
        i,
        s,
        u,
        o,
        c,
        d,
        f = {
          fragment: {
            argumentDefinitions: (l = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: (a = [
                  { kind: 'Literal', name: 's', value: 49 },
                  { kind: 'Variable', name: 'screen_name', variableName: 'screenName' },
                ]),
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_screen_name',
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
                      { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_user' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: 'viewer',
                args: (i = [{ kind: 'Literal', name: 's', value: 23 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
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
                          t,
                          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_viewer' },
                        ],
                        storageKey: null,
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
            argumentDefinitions: l,
            kind: 'Operation',
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: a,
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_screen_name',
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
                                name: 'profile_image_url_https',
                                storageKey: null,
                              }),
                              (u = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                              (o = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'screen_name',
                                storageKey: null,
                              }),
                            ],
                            storageKey: null,
                          },
                          (c = {
                            alias: null,
                            args: null,
                            filters: null,
                            handle: 'defaultScalars',
                            key: '',
                            kind: 'LinkedHandle',
                            name: 'legacy',
                          }),
                          {
                            alias: null,
                            args: null,
                            concreteType: 'AudienceRewardsBenefitsData',
                            kind: 'LinkedField',
                            name: 'super_follow_creator_benefits',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'AudienceRewardsBenefitInfo',
                                kind: 'LinkedField',
                                name: 'benefits_data',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'benefit_type',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'description',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                            ],
                            storageKey: null,
                          },
                          (d = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                alias: 'viewer',
                args: i,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
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
                                  s,
                                  { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                  u,
                                  o,
                                ],
                                storageKey: null,
                              },
                              c,
                              d,
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
                storageKey: 'viewer_v2(s:23)',
              },
            ],
          },
          params: {
            id: 'Y3qpvJNk_0iKIdtMmiG0Dg',
            metadata: {},
            name: 'SuperFollowsSubscribeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(f.hash = '36f9c29d7da37ccc152178fe9dd49f46'), (n.default = f)
    },
    l62v: function (e, n, r) {
      'use strict'
      r.r(n)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'AudienceRewardsBenefitInfo',
                kind: 'LinkedField',
                name: 'benefits_data',
                plural: !0,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'benefit_type', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                ],
                storageKey: null,
              },
              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '01019dce27a8b6dc98a95bff2b7f896c',
      }
      n.default = l
    },
    n0Rl: function (e, n, r) {
      'use strict'
      r.d(n, 'b', function () {
        return I
      })
      var l = r('ddV6'),
        a = r.n(l),
        t = r('VrFO'),
        i = r.n(t),
        s = r('Y9Ll'),
        u = r.n(s),
        o = r('1Pcy'),
        c = r.n(o),
        d = r('5Yy7'),
        f = r.n(d),
        p = r('2VqO'),
        m = r.n(p),
        y = r('KEM+'),
        g = r.n(y),
        v = (r('2G9S'), r('lTEL'), r('7x/C'), r('87if'), r('ZUdG'), r('kYxP'), r('ERkP')),
        k = r.n(v),
        b = r('pXBW'),
        h = r('6/RC'),
        _ = r('UIzd'),
        w = r.n(_),
        F = r('kGix')
      r.d(n, 'a', function () {
        return F.a
      })
      var S = r('fs1G'),
        E = r('0KEI'),
        K = r('lU4h'),
        T = r.n(K),
        C = r('21nk'),
        R = r.n(C),
        L = r('bCEw'),
        P = r.n(L),
        D = r('Ud88'),
        Q = r.n(D),
        U = function (e) {
          return (0, e.render)({ fetchStatus: F.a.LOADING, data: null, error: null, retry: S.a })
        },
        N = (function (e) {
          f()(r, e)
          var n = m()(r)
          function r() {
            var e
            i()(this, r)
            for (var l = arguments.length, a = new Array(l), t = 0; t < l; t++) a[t] = arguments[t]
            return (e = n.call.apply(n, [this].concat(a))), g()(c()(e), 'state', { error: null }), e
          }
          return (
            u()(
              r,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, n) {
                    if (!(e instanceof b.a)) throw e
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
            r
          )
        })(k.a.Component),
        A = function (e) {
          var n = e.query,
            r = e.queryRef,
            l = e.render,
            a = R()(n, r)
          return l({ fetchStatus: F.a.LOADED, data: a, error: null, retry: S.a })
        },
        I = function (e, n) {
          if (h.canUseDOM)
            return function (r) {
              var l = r.fetchPolicy,
                t = void 0 === l ? 'store-or-network' : l,
                i = r.render,
                s = r.variables,
                u = P()(e),
                o = a()(u, 2),
                c = o[0],
                d = o[1],
                f = Object(E.useCreateLocalApiErrorHandler)(n.errorConfig.context),
                p = T()(s),
                m = a()(p, 1)[0],
                y = k.a.useCallback(
                  function () {
                    d(m, { fetchPolicy: 'network-only' })
                  },
                  [d, m],
                )
              return (
                k.a.useLayoutEffect(
                  function () {
                    d(m, { fetchPolicy: t })
                  },
                  [t, d, m],
                ),
                c
                  ? k.a.createElement(
                      k.a.Suspense,
                      { fallback: k.a.createElement(U, { render: i }) },
                      k.a.createElement(
                        N,
                        { errorHandler: f(n.errorConfig.options || {}), key: c.fetchKey, retry: y },
                        function (n, r) {
                          return n
                            ? i({ fetchStatus: F.a.FAILED, error: n, data: null, retry: r })
                            : k.a.createElement(A, { query: e, queryRef: c, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var r = new WeakMap()
          return function (l) {
            l.fetchPolicy
            var t = l.render,
              i = l.variables,
              s = Q()(),
              u = Object(E.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              o = T()(i),
              c = a()(o, 1)[0],
              d = r.get(s)
            if (d) return d
            var f = k.a.lazy(function () {
              return w()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return t({ fetchStatus: F.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof b.a
                      ? (u(n.errorConfig.options || {})(e),
                        t({ fetchStatus: F.a.FAILED, data: null, error: e, retry: S.a }))
                      : k.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: r.set(s, e).get.bind(r, s) }
                })
            })
            return k.a.createElement(k.a.Suspense, null, k.a.createElement(f, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
