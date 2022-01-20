;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    '21nk': function (e, r, n) {
      'use strict'
      var t = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        u = n('Ud88'),
        i = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = c.fetchQueryDeduped,
        s = c.fetchQuery
      e.exports = function (e, r, n) {
        i()
        var c,
          f = u(),
          d = r.fetchKey,
          p = r.fetchPolicy,
          y = r.source,
          m = r.variables,
          h = r.networkCacheConfig,
          b = o(e, m, h)
        if ('PreloadedQuery_DEPRECATED' === r.kind)
          b.request.node.params.name !== r.name && t(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: l(f, b.request.identifier, function () {
                return f === r.environment && null != y
                  ? f.executeWithSource({ operation: b, source: y })
                  : f.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var g = s(f, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && f === r.environment ? y.ifEmpty(g) : (r.environment, g),
            fetchKey: d,
            fetchPolicy: p,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(c)
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
        i = n('MWbm'),
        c = n('t62R'),
        l = n('jhWN'),
        s = n('rHpw'),
        f = (n('enFi'), n('jAXQ')),
        d = n.n(f),
        p = u.a.f0c99eff,
        y = void 0 !== t ? t : (t = n('XcCA'))
      r.a = function (e) {
        var r = e.style,
          n = e.user,
          t = d()(y, n).legacy,
          o = t.profile_image_url_https,
          u = t.screen_name
        return a.createElement(
          i.a,
          { style: [m.signature, r] },
          u && a.createElement(c.b, { color: 'gray700', weight: 'bold' }, p({ screenName: u })),
          o && a.createElement(l.a, { size: 'medium', uri: o }),
        )
      }
      var m = s.a.create(function (e) {
        return {
          signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
        }
      })
    },
    FEMQ: function (e, r, n) {
      'use strict'
      var t = n('97Jx'),
        a = n.n(t),
        o = n('m3Bd'),
        u = n.n(o),
        i = (n('ho0z'), n('uFXj'), n('ERkP')),
        c = n('JWc1'),
        l = n('t62R'),
        s = n('rHpw'),
        f = n('3XMw'),
        d = n.n(f),
        p = d.a.dc71aee7,
        y = i.forwardRef(function (e, r) {
          var n = e.name,
            t = u()(e, ['name'])
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              l.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              i.createElement(d.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: n }, i.createElement('br', null)),
            ),
            i.createElement(l.b, { size: 'headline2', style: m.subheader }, p),
            i.createElement(c.a, a()({}, t, { ref: r })),
          )
        }),
        m = s.a.create(function (e) {
          return {
            creatorIntro: {
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
              userSelect: 'none',
              width: '100%',
            },
            creatorIntroInput: { border: 'none', padding: 0 },
            subheader: { paddingTop: e.spaces.space8 },
          }
        })
      r.a = y
    },
    JWc1: function (e, r, n) {
      'use strict'
      n('uFXj')
      var t = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        u = n('lUZE'),
        i = n('MWbm'),
        c = n('jhWN'),
        l = n('j7Bv'),
        s = n('6OUF'),
        f = n('t62R'),
        d = n('rHpw'),
        p = o.a.a4ed9071,
        y = t.forwardRef(function (e, r) {
          var n = e.imageUrl,
            a = e.onChange,
            o = e.value
          return t.createElement(
            i.a,
            { style: m.root },
            n ? t.createElement(c.a, { size: 'xxxLarge', uri: n }) : t.createElement(l.a, { Icon: u.a }),
            a
              ? t.createElement(s.a, {
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: 4,
                  multiline: !0,
                  name: 'creatorIntro',
                  numberOfLines: 1,
                  onChange: a,
                  placeholder: p,
                  ref: r,
                  style: [m.creatorIntroBubble, m.creatorIntroInputBubble],
                  value: o,
                })
              : t.createElement(f.b, { style: m.creatorIntroBubble }, o),
          )
        })
      r.a = y
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
    VTDR: function (e, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return i
      })
      var t = n('ERkP'),
        a = n('MWbm'),
        o = n('rHpw'),
        u = n('+Eiw'),
        i = function () {
          return t.createElement(a.a, { style: c.blob })
        },
        c = o.a.create(function (e) {
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
        i = u.loadQuery,
        c = u.useTrackLoadQueryInRender,
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
          u = o()
        c()
        var l = a(),
          y = d(new Set([n])),
          b = p(function () {
            return n
          }),
          g = b[0],
          v = b[1],
          R = p(function () {
            return n
          }),
          E = R[0],
          k = R[1]
        n !== E && (y.current.add(n), k(n), v(n))
        var w = s(
            function () {
              l.current && (y.current.add(m), v(m))
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
                  o = i(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : u, e, r, t)
                y.current.add(o), v(o)
              }
            },
            [u, e, v, l],
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
                    'NullQueryReference' !== g.kind &&
                    C(g.variables, { fetchPolicy: g.fetchPolicy, networkCacheConfig: g.networkCacheConfig })
                  )
                )
              var r = y.current
              if (l.current) {
                var n,
                  a = (0, t.default)(r)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var o = n.value
                    if (o === g) break
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
            [g, l, C, e],
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
          ['NullQueryReference' === g.kind ? null : g, C, w]
        )
      }
    },
    n0Rl: function (e, r, n) {
      'use strict'
      n.d(r, 'b', function () {
        return K
      })
      n('OZaJ')
      var t = n('ddV6'),
        a = n.n(t),
        o = n('VrFO'),
        u = n.n(o),
        i = n('Y9Ll'),
        c = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        y = n.n(p),
        m = n('AuHH'),
        h = n.n(m),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        R = n('pXBW'),
        E = n('6/RC'),
        k = n('UIzd'),
        w = n.n(k),
        C = n('kGix')
      n.d(r, 'a', function () {
        return C.a
      })
      var P = n('fs1G'),
        x = n('0KEI'),
        I = n('lU4h'),
        L = n.n(I),
        Q = n('21nk'),
        S = n.n(Q),
        _ = n('bCEw'),
        D = n.n(_),
        B = n('Ud88'),
        A = n.n(B)
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
          return y()(this, n)
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
            return (e = r.call.apply(r, [this].concat(a))), g()(s()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, r) {
                    if (!(e instanceof R.a)) throw e
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
        })(v.Component),
        T = function (e) {
          var r = e.query,
            n = e.queryRef,
            t = e.render,
            a = S()(r, n)
          return t({ fetchStatus: C.a.LOADED, data: a, error: null, retry: P.a })
        },
        K = function (e, r) {
          if (E.canUseDOM)
            return function (n) {
              var t = n.fetchPolicy,
                o = void 0 === t ? 'store-or-network' : t,
                u = n.render,
                i = n.variables,
                c = D()(e),
                l = a()(c, 2),
                s = l[0],
                f = l[1],
                d = Object(x.useCreateLocalApiErrorHandler)(r.errorConfig.context),
                p = L()(i),
                y = a()(p, 1)[0],
                m = v.useCallback(
                  function () {
                    f(y, { fetchPolicy: 'network-only' })
                  },
                  [f, y],
                )
              return (
                v.useLayoutEffect(
                  function () {
                    f(y, { fetchPolicy: o })
                  },
                  [o, f, y],
                ),
                s
                  ? v.createElement(
                      v.Suspense,
                      { fallback: v.createElement(N, { render: u }) },
                      v.createElement(
                        O,
                        { errorHandler: d(r.errorConfig.options || {}), key: s.fetchKey, retry: m },
                        function (r, n) {
                          return r
                            ? u({ fetchStatus: C.a.FAILED, error: r, data: null, retry: n })
                            : v.createElement(T, { query: e, queryRef: s, render: u })
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
              i = A()(),
              c = Object(x.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              l = L()(u),
              s = a()(l, 1)[0],
              f = n.get(i)
            if (f) return f
            var d = v.lazy(function () {
              return w()(i, e, s)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: C.a.LOADED, data: e, error: null, retry: P.a })
                  },
                  function (e) {
                    return e instanceof R.a
                      ? (c(r.errorConfig.options || {})(e),
                        o({ fetchStatus: C.a.FAILED, data: null, error: e, retry: P.a }))
                      : v.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(i, e).get.bind(n, i) }
                })
            })
            return v.createElement(v.Suspense, null, v.createElement(d, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
