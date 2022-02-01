;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    '21nk': function (e, r, n) {
      'use strict'
      var t = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        i = n('Ud88'),
        c = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        u = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = u.fetchQueryDeduped,
        s = u.fetchQuery
      e.exports = function (e, r, n) {
        c()
        var u,
          f = i(),
          d = r.fetchKey,
          p = r.fetchPolicy,
          y = r.source,
          m = r.variables,
          h = r.networkCacheConfig,
          v = o(e, m, h)
        if ('PreloadedQuery_DEPRECATED' === r.kind)
          v.request.node.params.name !== r.name && t(!1),
            (u = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: l(f, v.request.identifier, function () {
                return f === r.environment && null != y
                  ? f.executeWithSource({ operation: v, source: y })
                  : f.execute({ operation: v })
              }),
              fetchPolicy: p,
              query: v,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = s(f, v)
          u = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && f === r.environment ? y.ifEmpty(b) : (r.environment, b),
            fetchKey: d,
            fetchPolicy: p,
            query: v,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(u)
      }
    },
    '23An': function (e, r, n) {
      'use strict'
      var t = n('ERkP'),
        a = t.useEffect,
        o = t.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          a(function () {
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
    '9VLy': function (e, r, n) {
      'use strict'
      var t,
        a = n('ERkP'),
        o = n.n(a),
        i = n('3XMw'),
        c = n.n(i),
        u = n('MWbm'),
        l = n('t62R'),
        s = n('jhWN'),
        f = n('rHpw'),
        d = (n('enFi'), n('jAXQ')),
        p = n.n(d),
        y = c.a.f0c99eff,
        m = void 0 !== t ? t : (t = n('XcCA'))
      r.a = function (e) {
        var r = e.style,
          n = e.user,
          t = p()(m, n).legacy,
          a = t.profile_image_url_https,
          i = t.screen_name
        return o.a.createElement(
          u.a,
          { style: [h.signature, r] },
          i && o.a.createElement(l.b, { color: 'gray700', weight: 'bold' }, y({ screenName: i })),
          a && o.a.createElement(s.a, { size: 'medium', uri: a }),
        )
      }
      var h = f.a.create(function (e) {
        return {
          signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
        }
      })
    },
    JWc1: function (e, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return v
      })
      n('uFXj'), n('kH1Z'), n('6U7i')
      var t = n('ERkP'),
        a = n.n(t),
        o = n('3XMw'),
        i = n.n(o),
        c = n('lUZE'),
        u = n('MWbm'),
        l = n('cHvH'),
        s = n('rHpw'),
        f = n('jhWN'),
        d = n('j7Bv'),
        p = n('6OUF'),
        y = n('t62R'),
        m = i.a.a4ed9071,
        h = function (e, r) {
          var n = e.imageUrl,
            t = e.onChange,
            o = e.style,
            i = e.value,
            h = Object(l.b)().windowWidth > s.a.theme.breakpoints.small
          return a.a.createElement(
            u.a,
            { style: [b.root, o] },
            n
              ? a.a.createElement(f.a, { size: h ? 'xxxLarge' : 'xLarge', uri: n })
              : a.a.createElement(d.a, { Icon: c.a }),
            t
              ? a.a.createElement(p.a, {
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'creatorIntro',
                  numberOfLines: 1,
                  onChange: t,
                  placeholder: m,
                  ref: r,
                  style: [b.creatorIntroBubble, b.creatorIntroInputBubble],
                  value: i,
                })
              : a.a.createElement(y.b, { style: b.creatorIntroBubble }, i),
          )
        },
        v = a.a.forwardRef(h),
        b = s.a.create(function (e) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'row', gap: e.spaces.space12 },
            creatorIntroBubble: {
              backgroundColor: e.colors.cellBackground,
              borderBottomLeftRadius: e.borderRadii.large,
              borderBottomRightRadius: e.borderRadii.large,
              borderTopLeftRadius: 0,
              borderTopRightRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.small,
              padding: e.spaces.space24,
              width: '100%',
            },
            creatorIntroInputBubble: { padding: e.spaces.space12 },
          }
        })
    },
    MAc7: function (e, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return v
      })
      var t = n('97Jx'),
        a = n.n(t),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('ho0z'), n('ERkP')),
        u = n.n(c),
        l = n('VTDR'),
        s = n('JWc1'),
        f = n('t62R'),
        d = n('rHpw'),
        p = n('3XMw'),
        y = n.n(p),
        m = y.a.dc71aee7,
        h = function (e, r) {
          var n = e.name,
            t = e.style,
            o = i()(e, ['name', 'style'])
          return u.a.createElement(
            l.a,
            { style: t },
            u.a.createElement(
              f.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
              u.a.createElement(y.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: n }, u.a.createElement('br', null)),
            ),
            u.a.createElement(f.b, { style: b.subheader }, m),
            u.a.createElement(s.a, a()({}, o, { ref: r, style: b.intro })),
          )
        },
        v = u.a.forwardRef(h),
        b = d.a.create(function (e) {
          return { subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }
        })
    },
    VTDR: function (e, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return l
      })
      var t = n('ERkP'),
        a = n.n(t),
        o = n('MWbm'),
        i = n('cHvH'),
        c = n('rHpw'),
        u = n('+Eiw'),
        l = function (e) {
          var r = e.children,
            n = e.style,
            t = Object(i.b)().windowWidth > c.a.theme.breakpoints.medium
          return a.a.createElement(
            o.a,
            { style: [s.root, t && s.rootWide, n] },
            a.a.createElement(o.a, { style: s.blob }),
            r,
          )
        },
        s = c.a.create(function (e) {
          return {
            root: {
              minHeight: 240,
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
              position: 'relative',
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
            blob: {
              backgroundImage: u.a.getBackgroundImage(),
              clipPath: 'ellipse(100% 100% at 38% 0%)',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
              zIndex: -1,
            },
          }
        })
    },
    XcCA: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSignature_user',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '868c8c682541d2deaf4f251664973928',
      }
      r.default = t
    },
    bCEw: function (e, r, n) {
      'use strict'
      var t = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        o = n('Ud88'),
        i = n('aQQo'),
        c = i.loadQuery,
        u = i.useTrackLoadQueryInRender,
        l = n('ERkP'),
        s = l.useCallback,
        f = l.useEffect,
        d = l.useRef,
        p = l.useState,
        y = n('K1lQ').getRequest,
        m = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== y(e).params.metadata.live
      }
      e.exports = function (e, r) {
        var n = null != r ? r : m,
          i = o()
        u()
        var l = a(),
          y = d(new Set([n])),
          v = p(function () {
            return n
          }),
          b = v[0],
          g = v[1],
          E = p(function () {
            return n
          }),
          k = E[0],
          R = E[1]
        n !== k && (y.current.add(n), R(n), g(n))
        var w = s(
            function () {
              l.current && (y.current.add(m), g(m))
            },
            [l],
          ),
          C = s(
            function (r, n) {
              var t =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var a,
                  o = c(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : i, e, r, t)
                y.current.add(o), g(o)
              }
            },
            [i, e, g, l],
          ),
          P = d(!1)
        return (
          f(function () {
            return function () {
              P.current = !0
            }
          }, []),
          f(
            function () {
              if (!0 === P.current)
                return (
                  (P.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    C(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var r = y.current
              if (l.current) {
                var n,
                  a = (0, t.default)(r)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var o = n.value
                    if (o === b) break
                    r.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (h(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [b, l, C, e],
          ),
          f(
            function () {
              return function () {
                var r,
                  n = (0, t.default)(y.current)
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    var a = r.value
                    'NullQueryReference' !== a.kind &&
                      (h(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (o) {
                  n.e(o)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, C, w]
        )
      }
    },
    n0Rl: function (e, r, n) {
      'use strict'
      n.d(r, 'b', function () {
        return T
      })
      n('OZaJ')
      var t = n('ddV6'),
        a = n.n(t),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        u = n.n(c),
        l = n('1Pcy'),
        s = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        y = n.n(p),
        m = n('AuHH'),
        h = n.n(m),
        v = n('KEM+'),
        b = n.n(v),
        g = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        E = n.n(g),
        k = n('pXBW'),
        R = n('6/RC'),
        w = n('UIzd'),
        C = n.n(w),
        P = n('kGix')
      n.d(r, 'a', function () {
        return P.a
      })
      var x = n('fs1G'),
        I = n('0KEI'),
        L = n('lU4h'),
        Q = n.n(L),
        _ = n('21nk'),
        A = n.n(_),
        D = n('bCEw'),
        S = n.n(D),
        H = n('Ud88'),
        N = n.n(H)
      function O(e) {
        var r = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            t = h()(e)
          if (r) {
            var a = h()(this).constructor
            n = Reflect.construct(t, arguments, a)
          } else n = t.apply(this, arguments)
          return y()(this, n)
        }
      }
      var B = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: x.a })
        },
        F = (function (e) {
          d()(n, e)
          var r = O(n)
          function n() {
            var e
            i()(this, n)
            for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o]
            return (e = r.call.apply(r, [this].concat(a))), b()(s()(e), 'state', { error: null }), e
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, r) {
                    if (!(e instanceof k.a)) throw e
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
            n
          )
        })(E.a.Component),
        W = function (e) {
          var r = e.query,
            n = e.queryRef,
            t = e.render,
            a = A()(r, n)
          return t({ fetchStatus: P.a.LOADED, data: a, error: null, retry: x.a })
        },
        T = function (e, r) {
          if (R.canUseDOM)
            return function (n) {
              var t = n.fetchPolicy,
                o = void 0 === t ? 'store-or-network' : t,
                i = n.render,
                c = n.variables,
                u = S()(e),
                l = a()(u, 2),
                s = l[0],
                f = l[1],
                d = Object(I.useCreateLocalApiErrorHandler)(r.errorConfig.context),
                p = Q()(c),
                y = a()(p, 1)[0],
                m = E.a.useCallback(
                  function () {
                    f(y, { fetchPolicy: 'network-only' })
                  },
                  [f, y],
                )
              return (
                E.a.useLayoutEffect(
                  function () {
                    f(y, { fetchPolicy: o })
                  },
                  [o, f, y],
                ),
                s
                  ? E.a.createElement(
                      E.a.Suspense,
                      { fallback: E.a.createElement(B, { render: i }) },
                      E.a.createElement(
                        F,
                        { errorHandler: d(r.errorConfig.options || {}), key: s.fetchKey, retry: m },
                        function (r, n) {
                          return r
                            ? i({ fetchStatus: P.a.FAILED, error: r, data: null, retry: n })
                            : E.a.createElement(W, { query: e, queryRef: s, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (t) {
            t.fetchPolicy
            var o = t.render,
              i = t.variables,
              c = N()(),
              u = Object(I.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              l = Q()(i),
              s = a()(l, 1)[0],
              f = n.get(c)
            if (f) return f
            var d = E.a.lazy(function () {
              return C()(c, e, s)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: P.a.LOADED, data: e, error: null, retry: x.a })
                  },
                  function (e) {
                    return e instanceof k.a
                      ? (u(r.errorConfig.options || {})(e),
                        o({ fetchStatus: P.a.FAILED, data: null, error: e, retry: x.a }))
                      : E.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return E.a.createElement(E.a.Suspense, null, E.a.createElement(d, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
