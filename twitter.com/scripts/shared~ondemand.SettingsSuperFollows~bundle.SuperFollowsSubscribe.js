;(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
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
        o = n('3XMw'),
        u = n.n(o),
        c = n('MWbm'),
        i = n('t62R'),
        l = n('jhWN'),
        s = n('rHpw'),
        f = (n('enFi'), n('jAXQ')),
        d = n.n(f),
        y = u.a.f0c99eff,
        p = void 0 !== t ? t : (t = n('XcCA'))
      r.a = function (e) {
        var r = e.style,
          n = e.user,
          t = d()(p, n).legacy,
          o = t.profile_image_url_https,
          u = t.screen_name
        return a.createElement(
          c.a,
          { style: [m.signature, r] },
          u && a.createElement(i.b, { color: 'gray700', weight: 'bold' }, y({ screenName: u })),
          o && a.createElement(l.a, { size: 'medium', uri: o }),
        )
      }
      var m = s.a.create(function (e) {
        return {
          signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
        }
      })
    },
    JWc1: function (e, r, n) {
      'use strict'
      n('uFXj')
      var t = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        u = n('lUZE'),
        c = n('MWbm'),
        i = n('jhWN'),
        l = n('j7Bv'),
        s = n('6OUF'),
        f = n('t62R'),
        d = n('rHpw'),
        y = o.a.a4ed9071,
        p = t.forwardRef(function (e, r) {
          var n = e.imageUrl,
            a = e.onChange,
            o = e.value
          return t.createElement(
            c.a,
            { style: m.root },
            n ? t.createElement(i.a, { size: 'xxxLarge', uri: n }) : t.createElement(l.a, { Icon: u.a }),
            a
              ? t.createElement(s.a, {
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: 4,
                  multiline: !0,
                  name: 'creatorIntro',
                  numberOfLines: 1,
                  onChange: a,
                  placeholder: y,
                  ref: r,
                  style: [m.creatorIntroBubble, m.creatorIntroInputBubble],
                  value: o,
                })
              : t.createElement(f.b, { style: m.creatorIntroBubble }, o),
          )
        })
      r.a = p
      var m = d.a.create(function (e) {
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
        i = n('JWc1'),
        l = n('t62R'),
        s = n('rHpw'),
        f = n('3XMw'),
        d = n.n(f),
        y = d.a.dc71aee7,
        p = c.forwardRef(function (e, r) {
          var n = e.name,
            t = u()(e, ['name'])
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              l.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              c.createElement(d.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: n }, c.createElement('br', null)),
            ),
            c.createElement(l.b, { size: 'headline2', style: m.subheader }, y),
            c.createElement(i.a, a()({}, t, { ref: r })),
          )
        }),
        m = s.a.create(function (e) {
          return { subheader: { paddingTop: e.spaces.space8 } }
        })
      r.a = p
    },
    VTDR: function (e, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return c
      })
      var t = n('ERkP'),
        a = n('MWbm'),
        o = n('rHpw'),
        u = n('+Eiw'),
        c = function () {
          return t.createElement(a.a, { style: i.blob })
        },
        i = o.a.create(function (e) {
          return {
            blob: {
              backgroundImage: u.a.getBackgroundImage(),
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
        return U
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
        E = n('pXBW'),
        k = n('6/RC'),
        R = n('UIzd'),
        w = n.n(R),
        C = n('kGix')
      n.d(r, 'a', function () {
        return C.a
      })
      var P = n('fs1G'),
        x = n('0KEI'),
        I = n('lU4h'),
        Q = n.n(I),
        L = n('21nk'),
        _ = n.n(L),
        A = n('bCEw'),
        D = n.n(A),
        S = n('Ud88'),
        B = n.n(S)
      function F(e) {
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
      var N = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: P.a })
        },
        O = (function (e) {
          d()(n, e)
          var r = F(n)
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
                    if (!(e instanceof E.a)) throw e
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
        })(g.Component),
        K = function (e) {
          var r = e.query,
            n = e.queryRef,
            t = e.render,
            a = _()(r, n)
          return t({ fetchStatus: C.a.LOADED, data: a, error: null, retry: P.a })
        },
        U = function (e, r) {
          if (k.canUseDOM)
            return function (n) {
              var t = n.fetchPolicy,
                o = void 0 === t ? 'store-or-network' : t,
                u = n.render,
                c = n.variables,
                i = D()(e),
                l = a()(i, 2),
                s = l[0],
                f = l[1],
                d = Object(x.useCreateLocalApiErrorHandler)(r.errorConfig.context),
                y = Q()(c),
                p = a()(y, 1)[0],
                m = g.useCallback(
                  function () {
                    f(p, { fetchPolicy: 'network-only' })
                  },
                  [f, p],
                )
              return (
                g.useLayoutEffect(
                  function () {
                    f(p, { fetchPolicy: o })
                  },
                  [o, f, p],
                ),
                s
                  ? g.createElement(
                      g.Suspense,
                      { fallback: g.createElement(N, { render: u }) },
                      g.createElement(
                        O,
                        { errorHandler: d(r.errorConfig.options || {}), key: s.fetchKey, retry: m },
                        function (r, n) {
                          return r
                            ? u({ fetchStatus: C.a.FAILED, error: r, data: null, retry: n })
                            : g.createElement(K, { query: e, queryRef: s, render: u })
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
              c = B()(),
              i = Object(x.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              l = Q()(u),
              s = a()(l, 1)[0],
              f = n.get(c)
            if (f) return f
            var d = g.lazy(function () {
              return w()(c, e, s)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: C.a.LOADED, data: e, error: null, retry: P.a })
                  },
                  function (e) {
                    return e instanceof E.a
                      ? (i(r.errorConfig.options || {})(e),
                        o({ fetchStatus: C.a.FAILED, data: null, error: e, retry: P.a }))
                      : g.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return g.createElement(g.Suspense, null, g.createElement(d, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
