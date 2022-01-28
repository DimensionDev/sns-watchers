;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    '21nk': function (e, r, n) {
      'use strict'
      var t = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        u = n('Ud88'),
        c = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        i = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = i.fetchQueryDeduped,
        s = i.fetchQuery
      e.exports = function (e, r, n) {
        c()
        var i,
          f = u(),
          d = r.fetchKey,
          y = r.fetchPolicy,
          p = r.source,
          m = r.variables,
          h = r.networkCacheConfig,
          v = o(e, m, h)
        if ('PreloadedQuery_DEPRECATED' === r.kind)
          v.request.node.params.name !== r.name && t(!1),
            (i = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: l(f, v.request.identifier, function () {
                return f === r.environment && null != p
                  ? f.executeWithSource({ operation: v, source: p })
                  : f.execute({ operation: v })
              }),
              fetchPolicy: y,
              query: v,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = s(f, v)
          i = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && f === r.environment ? p.ifEmpty(b) : (r.environment, b),
            fetchKey: d,
            fetchPolicy: y,
            query: v,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(i)
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
        u = n('3XMw'),
        c = n.n(u),
        i = n('MWbm'),
        l = n('t62R'),
        s = n('jhWN'),
        f = n('rHpw'),
        d = (n('enFi'), n('jAXQ')),
        y = n.n(d),
        p = c.a.f0c99eff,
        m = void 0 !== t ? t : (t = n('XcCA'))
      r.a = function (e) {
        var r = e.style,
          n = e.user,
          t = y()(m, n).legacy,
          a = t.profile_image_url_https,
          u = t.screen_name
        return o.a.createElement(
          i.a,
          { style: [h.signature, r] },
          u && o.a.createElement(l.b, { color: 'gray700', weight: 'bold' }, p({ screenName: u })),
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
      n('uFXj')
      var t = n('ERkP'),
        a = n.n(t),
        o = n('3XMw'),
        u = n.n(o),
        c = n('lUZE'),
        i = n('MWbm'),
        l = n('jhWN'),
        s = n('j7Bv'),
        f = n('6OUF'),
        d = n('t62R'),
        y = n('rHpw'),
        p = u.a.a4ed9071,
        m = a.a.forwardRef(function (e, r) {
          var n = e.imageUrl,
            t = e.onChange,
            o = e.value
          return a.a.createElement(
            i.a,
            { style: h.root },
            n ? a.a.createElement(l.a, { size: 'xxxLarge', uri: n }) : a.a.createElement(s.a, { Icon: c.a }),
            t
              ? a.a.createElement(f.a, {
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: 4,
                  multiline: !0,
                  name: 'creatorIntro',
                  numberOfLines: 1,
                  onChange: t,
                  placeholder: p,
                  ref: r,
                  style: [h.creatorIntroBubble, h.creatorIntroInputBubble],
                  value: o,
                })
              : a.a.createElement(d.b, { style: h.creatorIntroBubble }, o),
          )
        })
      r.a = m
      var h = y.a.create(function (e) {
        return {
          root: {
            display: 'inline-flex',
            alignItems: 'start',
            flexDirection: 'row',
            gap: e.spaces.space12,
            marginTop: e.spaces.space32,
          },
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
      var t = n('97Jx'),
        a = n.n(t),
        o = n('m3Bd'),
        u = n.n(o),
        c = (n('ho0z'), n('ERkP')),
        i = n.n(c),
        l = n('JWc1'),
        s = n('t62R'),
        f = n('rHpw'),
        d = n('3XMw'),
        y = n.n(d),
        p = y.a.dc71aee7,
        m = i.a.forwardRef(function (e, r) {
          var n = e.name,
            t = u()(e, ['name'])
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              s.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              i.a.createElement(y.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: n }, i.a.createElement('br', null)),
            ),
            i.a.createElement(s.b, { size: 'headline2', style: h.subheader }, p),
            i.a.createElement(l.a, a()({}, t, { ref: r })),
          )
        }),
        h = f.a.create(function (e) {
          return { subheader: { paddingTop: e.spaces.space8 } }
        })
      r.a = m
    },
    VTDR: function (e, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return i
      })
      var t = n('ERkP'),
        a = n.n(t),
        o = n('MWbm'),
        u = n('rHpw'),
        c = n('+Eiw'),
        i = function () {
          return a.a.createElement(o.a, { style: l.blob })
        },
        l = u.a.create(function (e) {
          return {
            blob: {
              backgroundImage: c.a.getBackgroundImage(),
              clipPath: 'ellipse(450px 320px at 33% 0%)',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 320,
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
        u = n('aQQo'),
        c = u.loadQuery,
        i = u.useTrackLoadQueryInRender,
        l = n('ERkP'),
        s = l.useCallback,
        f = l.useEffect,
        d = l.useRef,
        y = l.useState,
        p = n('K1lQ').getRequest,
        m = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, r) {
        var n = null != r ? r : m,
          u = o()
        i()
        var l = a(),
          p = d(new Set([n])),
          v = y(function () {
            return n
          }),
          b = v[0],
          g = v[1],
          E = y(function () {
            return n
          }),
          k = E[0],
          R = E[1]
        n !== k && (p.current.add(n), R(n), g(n))
        var w = s(
            function () {
              l.current && (p.current.add(m), g(m))
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
                  o = c(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : u, e, r, t)
                p.current.add(o), g(o)
              }
            },
            [u, e, g, l],
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
              var r = p.current
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
                } catch (u) {
                  a.e(u)
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
                  n = (0, t.default)(p.current)
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
        return M
      })
      n('OZaJ')
      var t = n('ddV6'),
        a = n.n(t),
        o = n('VrFO'),
        u = n.n(o),
        c = n('Y9Ll'),
        i = n.n(c),
        l = n('1Pcy'),
        s = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        y = n('N+ot'),
        p = n.n(y),
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
        Q = n('lU4h'),
        L = n.n(Q),
        _ = n('21nk'),
        A = n.n(_),
        D = n('bCEw'),
        S = n.n(D),
        B = n('Ud88'),
        F = n.n(B)
      function N(e) {
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
          return p()(this, n)
        }
      }
      var O = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: x.a })
        },
        K = (function (e) {
          d()(n, e)
          var r = N(n)
          function n() {
            var e
            u()(this, n)
            for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o]
            return (e = r.call.apply(r, [this].concat(a))), b()(s()(e), 'state', { error: null }), e
          }
          return (
            i()(
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
        U = function (e) {
          var r = e.query,
            n = e.queryRef,
            t = e.render,
            a = A()(r, n)
          return t({ fetchStatus: P.a.LOADED, data: a, error: null, retry: x.a })
        },
        M = function (e, r) {
          if (R.canUseDOM)
            return function (n) {
              var t = n.fetchPolicy,
                o = void 0 === t ? 'store-or-network' : t,
                u = n.render,
                c = n.variables,
                i = S()(e),
                l = a()(i, 2),
                s = l[0],
                f = l[1],
                d = Object(I.useCreateLocalApiErrorHandler)(r.errorConfig.context),
                y = L()(c),
                p = a()(y, 1)[0],
                m = E.a.useCallback(
                  function () {
                    f(p, { fetchPolicy: 'network-only' })
                  },
                  [f, p],
                )
              return (
                E.a.useLayoutEffect(
                  function () {
                    f(p, { fetchPolicy: o })
                  },
                  [o, f, p],
                ),
                s
                  ? E.a.createElement(
                      E.a.Suspense,
                      { fallback: E.a.createElement(O, { render: u }) },
                      E.a.createElement(
                        K,
                        { errorHandler: d(r.errorConfig.options || {}), key: s.fetchKey, retry: m },
                        function (r, n) {
                          return r
                            ? u({ fetchStatus: P.a.FAILED, error: r, data: null, retry: n })
                            : E.a.createElement(U, { query: e, queryRef: s, render: u })
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
              u = t.variables,
              c = F()(),
              i = Object(I.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              l = L()(u),
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
                      ? (i(r.errorConfig.options || {})(e),
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
