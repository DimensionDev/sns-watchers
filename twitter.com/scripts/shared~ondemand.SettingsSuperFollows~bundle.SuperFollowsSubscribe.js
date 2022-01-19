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
          h = r.variables,
          m = r.networkCacheConfig,
          g = o(e, h, m)
        if ('PreloadedQuery_DEPRECATED' === r.kind)
          g.request.node.params.name !== r.name && t(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: l(f, g.request.identifier, function () {
                return f === r.environment && null != y
                  ? f.executeWithSource({ operation: g, source: y })
                  : f.execute({ operation: g })
              }),
              fetchPolicy: p,
              query: g,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = s(f, g)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && f === r.environment ? y.ifEmpty(b) : (r.environment, b),
            fetchKey: d,
            fetchPolicy: p,
            query: g,
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
          { style: [h.signature, r] },
          u && a.createElement(c.b, { color: 'gray700', weight: 'bold' }, p({ screenName: u })),
          o && a.createElement(l.a, { size: 'medium', uri: o }),
        )
      }
      var h = s.a.create(function (e) {
        return {
          signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
        }
      })
    },
    FEMQ: function (e, r, n) {
      'use strict'
      n('ho0z'), n('uFXj')
      var t = n('ERkP'),
        a = n('tI3i'),
        o = n.n(a),
        u = n('JWc1'),
        i = n('t62R'),
        c = n('rHpw'),
        l = n('3XMw'),
        s = n.n(l),
        f = s.a.dc71aee7,
        d = c.a.create(function (e) {
          return {
            subheader: { paddingTop: e.spaces.space8 },
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
          }
        })
      r.a = function (e) {
        var r = e.creatorIntro,
          n = e.creatorIntroInputRef,
          a = e.creatorIntroInputValue,
          c = e.image,
          l = e.name,
          p = e.onInputChange,
          y = e.withInput
        return (
          o()('string' == typeof l, 'name must be a string'),
          t.createElement(
            t.Fragment,
            null,
            t.createElement(
              i.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              t.createElement(s.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: l }, t.createElement('br', null)),
            ),
            t.createElement(i.b, { size: 'headline2', style: d.subheader }, f),
            c
              ? t.createElement(u.a, {
                  creatorIntro: r,
                  image: c,
                  inputRef: n,
                  inputValue: a,
                  onInputChange: p,
                  withInput: y,
                })
              : null,
          )
        )
      }
    },
    JWc1: function (e, r, n) {
      'use strict'
      n('uFXj')
      var t = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        u = n('MWbm'),
        i = n('j7Bv'),
        c = n('jhWN'),
        l = n('6OUF'),
        s = n('t62R'),
        f = n('rHpw'),
        d = o.a.a4ed9071
      var p = f.a.create(function (e) {
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
            userSelect: 'none',
            width: '100%',
          },
          creatorIntroInputBubble: { padding: e.spaces.space12 },
        }
      })
      r.a = function (e) {
        var r = e.Icon,
          n = e.creatorIntro,
          a = e.image,
          o = e.inputRef,
          f = e.inputValue,
          y = e.onInputChange,
          h = e.withInput
        return t.createElement(
          u.a,
          { style: p.root },
          r ? t.createElement(i.a, { Icon: r }) : t.createElement(c.a, { size: 'xxxLarge', uri: a }),
          h && y
            ? t.createElement(l.a, {
                isCompact: !0,
                leftAligned: !0,
                name: 'Creator Intro',
                onChange: y,
                placeholder: d,
                ref: o,
                style: [p.creatorIntroBubble, p.creatorIntroInputBubble],
                value: f,
              })
            : t.createElement(s.b, { style: p.creatorIntroBubble }, n),
        )
      }
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
        h = { kind: 'NullQueryReference' }
      function m(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== y(e).params.metadata.live
      }
      e.exports = function (e, r) {
        var n = null != r ? r : h,
          u = o()
        c()
        var l = a(),
          y = d(new Set([n])),
          g = p(function () {
            return n
          }),
          b = g[0],
          v = g[1],
          R = p(function () {
            return n
          }),
          E = R[0],
          k = R[1]
        n !== E && (y.current.add(n), k(n), v(n))
        var w = s(
            function () {
              l.current && (y.current.add(h), v(h))
            },
            [l],
          ),
          I = s(
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
          C = d(!1)
        return (
          f(function () {
            return function () {
              C.current = !0
            }
          }, []),
          f(
            function () {
              if (!0 === C.current)
                return (
                  (C.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    I(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
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
                        (m(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (u) {
                  a.e(u)
                } finally {
                  a.f()
                }
              }
            },
            [b, l, I, e],
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
                      (m(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
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
          ['NullQueryReference' === b.kind ? null : b, I, w]
        )
      }
    },
    n0Rl: function (e, r, n) {
      'use strict'
      n.d(r, 'b', function () {
        return O
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
        h = n('AuHH'),
        m = n.n(h),
        g = n('KEM+'),
        b = n.n(g),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        R = n('pXBW'),
        E = n('6/RC'),
        k = n('UIzd'),
        w = n.n(k),
        I = n('kGix')
      n.d(r, 'a', function () {
        return I.a
      })
      var C = n('fs1G'),
        P = n('0KEI'),
        x = n('lU4h'),
        Q = n.n(x),
        S = n('21nk'),
        L = n.n(S),
        _ = n('bCEw'),
        D = n.n(_),
        A = n('Ud88'),
        B = n.n(A)
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
            t = m()(e)
          if (r) {
            var a = m()(this).constructor
            n = Reflect.construct(t, arguments, a)
          } else n = t.apply(this, arguments)
          return y()(this, n)
        }
      }
      var N = function (e) {
          return (0, e.render)({ fetchStatus: I.a.LOADING, data: null, error: null, retry: C.a })
        },
        T = (function (e) {
          d()(n, e)
          var r = F(n)
          function n() {
            var e
            u()(this, n)
            for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o]
            return (e = r.call.apply(r, [this].concat(a))), b()(s()(e), 'state', { error: null }), e
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
        K = function (e) {
          var r = e.query,
            n = e.queryRef,
            t = e.render,
            a = L()(r, n)
          return t({ fetchStatus: I.a.LOADED, data: a, error: null, retry: C.a })
        },
        O = function (e, r) {
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
                d = Object(P.useCreateLocalApiErrorHandler)(r.errorConfig.context),
                p = Q()(i),
                y = a()(p, 1)[0],
                h = v.useCallback(
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
                        T,
                        { errorHandler: d(r.errorConfig.options || {}), key: s.fetchKey, retry: h },
                        function (r, n) {
                          return r
                            ? u({ fetchStatus: I.a.FAILED, error: r, data: null, retry: n })
                            : v.createElement(K, { query: e, queryRef: s, render: u })
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
              i = B()(),
              c = Object(P.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              l = Q()(u),
              s = a()(l, 1)[0],
              f = n.get(i)
            if (f) return f
            var d = v.lazy(function () {
              return w()(i, e, s)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: I.a.LOADED, data: e, error: null, retry: C.a })
                  },
                  function (e) {
                    return e instanceof R.a
                      ? (c(r.errorConfig.options || {})(e),
                        o({ fetchStatus: I.a.FAILED, data: null, error: e, retry: C.a }))
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
