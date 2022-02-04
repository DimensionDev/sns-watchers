;(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    '21nk': function (e, r, t) {
      'use strict'
      var n = t('I9iR'),
        a = t('3KVO'),
        o = t('yLYC'),
        i = t('Ud88'),
        c = (t('/2Cm'), t('aQQo').useTrackLoadQueryInRender),
        l = (t('ERkP').useDebugValue, t('K1lQ').__internal),
        u = l.fetchQueryDeduped,
        s = l.fetchQuery
      e.exports = function (e, r, t) {
        c()
        var l,
          d = i(),
          f = r.fetchKey,
          p = r.fetchPolicy,
          m = r.source,
          y = r.variables,
          h = r.networkCacheConfig,
          g = o(e, y, h)
        if ('PreloadedQuery_DEPRECATED' === r.kind)
          g.request.node.params.name !== r.name && n(!1),
            (l = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: f,
              fetchObservable: u(d, g.request.identifier, function () {
                return d === r.environment && null != m
                  ? d.executeWithSource({ operation: g, source: m })
                  : d.execute({ operation: g })
              }),
              fetchPolicy: p,
              query: g,
              renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
            })
        else {
          var b = s(d, g)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != m && d === r.environment ? m.ifEmpty(b) : (r.environment, b),
            fetchKey: f,
            fetchPolicy: p,
            query: g,
            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
          }
        }
        return a(l)
      }
    },
    '23An': function (e, r, t) {
      'use strict'
      var n = t('ERkP'),
        a = n.useEffect,
        o = n.useRef
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
    '9VLy': function (e, r, t) {
      'use strict'
      t.d(r, 'a', function () {
        return y
      })
      var n = t('ERkP'),
        a = t.n(n),
        o = t('3XMw'),
        i = t.n(o),
        c = t('lUZE'),
        l = t('MWbm'),
        u = t('t62R'),
        s = t('jhWN'),
        d = t('j7Bv'),
        f = t('rHpw'),
        p = i.a.d2fb334b,
        m = i.a.f0c99eff,
        y = function (e) {
          var r = e.imageUrl,
            t = e.screenName,
            n = e.style
          return a.a.createElement(
            l.a,
            { style: [h.signature, n] },
            a.a.createElement(u.b, { color: 'gray700', weight: 'bold' }, m({ screenName: null != t ? t : p })),
            r
              ? a.a.createElement(s.a, { size: 'medium', uri: r })
              : a.a.createElement(d.a, { Icon: c.a, size: 'medium' }),
          )
        },
        h = f.a.create(function (e) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
          }
        })
    },
    JWc1: function (e, r, t) {
      'use strict'
      t.d(r, 'a', function () {
        return g
      })
      t('uFXj'), t('kH1Z'), t('6U7i')
      var n = t('ERkP'),
        a = t.n(n),
        o = t('3XMw'),
        i = t.n(o),
        c = t('lUZE'),
        l = t('MWbm'),
        u = t('cHvH'),
        s = t('rHpw'),
        d = t('jhWN'),
        f = t('j7Bv'),
        p = t('6OUF'),
        m = t('t62R'),
        y = i.a.a4ed9071,
        h = function (e, r) {
          var t = e.imageUrl,
            n = e.onChange,
            o = e.style,
            i = e.value,
            h = Object(u.b)().windowWidth > s.a.theme.breakpoints.small
          return a.a.createElement(
            l.a,
            { style: [b.root, o] },
            t
              ? a.a.createElement(d.a, { size: h ? 'xxxLarge' : 'xLarge', uri: t })
              : a.a.createElement(f.a, { Icon: c.a }),
            n
              ? a.a.createElement(p.a, {
                  inputStyle: b.creatorIntroInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'creatorIntro',
                  numberOfLines: 1,
                  onChange: n,
                  placeholder: y,
                  ref: r,
                  style: b.creatorIntro,
                  value: i,
                })
              : a.a.createElement(m.b, { style: b.creatorIntro }, i),
          )
        },
        g = a.a.forwardRef(h),
        b = s.a.create(function (e) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'row', gap: e.spaces.space12 },
            creatorIntro: {
              backgroundColor: e.colors.cellBackground,
              borderBottomLeftRadius: e.borderRadii.large,
              borderBottomRightRadius: e.borderRadii.large,
              borderTopLeftRadius: 0,
              borderTopRightRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.small,
              padding: e.spaces.space24,
              width: '100%',
            },
            creatorIntroInput: { minHeight: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 0 },
          }
        })
    },
    MAc7: function (e, r, t) {
      'use strict'
      t.d(r, 'a', function () {
        return b
      })
      var n = t('97Jx'),
        a = t.n(n),
        o = t('m3Bd'),
        i = t.n(o),
        c = (t('ho0z'), t('ERkP')),
        l = t.n(c),
        u = t('VTDR'),
        s = t('JWc1'),
        d = t('t62R'),
        f = t('rHpw'),
        p = t('3XMw'),
        m = t.n(p),
        y = ['name', 'style'],
        h = m.a.dc71aee7,
        g = function (e, r) {
          var t = e.name,
            n = e.style,
            o = i()(e, y)
          return l.a.createElement(
            u.a,
            { style: n },
            l.a.createElement(
              d.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
              l.a.createElement(
                m.a.I18NFormatMessage,
                { $i18n: 'f402ebd1', name: null != t ? t : '' },
                l.a.createElement('br', null),
              ),
            ),
            l.a.createElement(d.b, { style: v.subheader }, h),
            l.a.createElement(s.a, a()({}, o, { ref: r, style: v.intro })),
          )
        },
        b = l.a.forwardRef(g),
        v = f.a.create(function (e) {
          return { subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }
        })
    },
    VTDR: function (e, r, t) {
      'use strict'
      t.d(r, 'a', function () {
        return u
      })
      var n = t('ERkP'),
        a = t.n(n),
        o = t('MWbm'),
        i = t('cHvH'),
        c = t('rHpw'),
        l = t('+Eiw'),
        u = function (e) {
          var r = e.children,
            t = e.style,
            n = Object(i.b)().windowWidth > c.a.theme.breakpoints.medium
          return a.a.createElement(
            o.a,
            { style: [s.root, n && s.rootWide, t] },
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
              backgroundImage: l.a.getBackgroundImage(),
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
    a2Fh: function (e, r, t) {
      'use strict'
      t('z84I')
      var n = t('ERkP'),
        a = t.n(n),
        o = t('rHpw'),
        i = t('MWbm')
      var c = o.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'hidden', width: '100%' },
          borderRadius: { borderRadius: e.borderRadii.infinite },
          lineWrap: { flexWrap: 'wrap', overflow: 'visible' },
          word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 },
          wordWrapper: { justifyContent: 'center' },
        }
      })
      r.a = function (e) {
        var r = e.color,
          t = e.lineHeightPx,
          n = e.maxWidthPx,
          l = e.style,
          u = e.withBorderRadius,
          s = e.withLineWrap,
          d = e.wordHeightPx,
          f = e.wordPercentWidths,
          p = e.wordSpacingPx,
          m = a.a.useMemo(
            function () {
              return f.map(function (e, n) {
                var l = p || o.a.theme.spaces.space4,
                  s = n !== f.length - 1 ? l : 0,
                  m = a.a.createElement(i.a, {
                    key: n,
                    style: [
                      c.word,
                      { width: t ? '100%' : ''.concat(e, '%') },
                      r && { backgroundColor: o.a.theme.colors[r] },
                      !t && { marginRight: s },
                      u && c.borderRadius,
                      d && { height: d },
                    ],
                  })
                return t
                  ? a.a.createElement(
                      i.a,
                      {
                        key: n,
                        style: [c.wordWrapper, t && { marginRight: s }, { height: t, width: ''.concat(e, '%') }],
                      },
                      m,
                    )
                  : m
              })
            },
            [r, t, u, d, p, f],
          )
        return a.a.createElement(i.a, { style: [c.root, s && c.lineWrap, { maxWidth: n || 'none' }, l] }, m)
      }
    },
    bCEw: function (e, r, t) {
      'use strict'
      var n = t('IGGJ')(t('K1iM')),
        a = t('23An'),
        o = t('Ud88'),
        i = t('aQQo'),
        c = i.loadQuery,
        l = i.useTrackLoadQueryInRender,
        u = t('ERkP'),
        s = u.useCallback,
        d = u.useEffect,
        f = u.useRef,
        p = u.useState,
        m = t('K1lQ').getRequest,
        y = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== m(e).params.metadata.live
      }
      e.exports = function (e, r) {
        var t = null != r ? r : y,
          i = o()
        l()
        var u = a(),
          m = f(new Set([t])),
          g = p(function () {
            return t
          }),
          b = g[0],
          v = g[1],
          E = p(function () {
            return t
          }),
          w = E[0],
          k = E[1]
        t !== w && (m.current.add(t), k(t), v(t))
        var R = s(
            function () {
              u.current && (m.current.add(y), v(y))
            },
            [u],
          ),
          C = s(
            function (r, t) {
              var n =
                null != t && t.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: t.fetchPolicy,
                      networkCacheConfig: t.networkCacheConfig,
                      __nameForWarning: t.__nameForWarning,
                    }
                  : t
              if (u.current) {
                var a,
                  o = c(null !== (a = null == t ? void 0 : t.__environment) && void 0 !== a ? a : i, e, r, n)
                m.current.add(o), v(o)
              }
            },
            [i, e, v, u],
          ),
          x = f(!1)
        return (
          d(function () {
            return function () {
              x.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === x.current)
                return (
                  (x.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    C(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var r = m.current
              if (u.current) {
                var t,
                  a = (0, n.default)(r)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var o = t.value
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
            [b, u, C, e],
          ),
          d(
            function () {
              return function () {
                var r,
                  t = (0, n.default)(m.current)
                try {
                  for (t.s(); !(r = t.n()).done; ) {
                    var a = r.value
                    'NullQueryReference' !== a.kind &&
                      (h(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (o) {
                  t.e(o)
                } finally {
                  t.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, C, R]
        )
      }
    },
    lD8l: function (e, r, t) {
      'use strict'
      t.d(r, 'a', function () {
        return b
      })
      t('2G9S')
      var n = t('ERkP'),
        a = t.n(n),
        o = t('3XMw'),
        i = t.n(o),
        c = t('EyD/'),
        l = t('MWbm'),
        u = t('t62R'),
        s = t('rHpw'),
        d = t('a2Fh'),
        f = t('4zmP'),
        p = t('feOz'),
        m = t('aNKf'),
        y = [17, 7, 14, 11, 8, 12, 4, 11],
        h = a.a.createElement(
          i.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          a.a.createElement(u.b, { size: 'subtext3' }, i.a.fa70c77f),
        )
      var g = s.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              maxWidth: '327px',
              position: 'relative',
              userSelect: 'none',
              width: '100%',
            },
            educationCallout: {
              marginBottom: e.spaces.space8,
              marginHorizontal: e.spaces.space24,
              marginTop: e.spaces.space16,
            },
            fakeBodyCopy: { paddingHorizontal: e.spaces.space28, width: '100%' },
            gradient: { height: e.spaces.space56, position: 'absolute', top: 0, width: '100%' },
            mockTweet: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              marginTop: e.spaces.space16,
              paddingVertical: e.spaces.space16,
              width: '100%',
            },
          }
        }),
        b = function (e) {
          var r = e.style,
            t = function (e) {
              return ''.concat(s.a.theme.colors.cellBackground).concat(e || '')
            },
            n = s.a.theme.colors.transparent
          return a.a.createElement(
            l.a,
            { style: [g.root, r] },
            a.a.createElement(
              l.a,
              { style: g.mockTweet },
              a.a.createElement(l.a, { style: g.fakeBodyCopy }, a.a.createElement(d.a, { wordPercentWidths: y })),
              a.a.createElement(
                l.a,
                { style: g.educationCallout },
                a.a.createElement(f.a, { Icon: c.a, text: h, type: 'exclusive', withThumbnail: !0 }),
              ),
              a.a.createElement(p.a, {
                displayStyle: 'block',
                isLiked: !1,
                isPresentational: !0,
                isRetweeted: !1,
                likeCount: 0,
                reaction: null,
                reactionCounts: [],
                replyCount: 0,
                retweetCount: 0,
                tweetLink: '',
              }),
            ),
            a.a.createElement(m.a, { colors: [t(), t(), t(50), n], locations: [0, 0.25, 0.75, 1], style: g.gradient }),
            a.a.createElement(m.a, { colors: [t(), t(99), t(50), n], locations: [0, 0.5, 0.75, 1], style: g.gradient }),
          )
        }
    },
    n0Rl: function (e, r, t) {
      'use strict'
      t.d(r, 'b', function () {
        return M
      })
      var n = t('ddV6'),
        a = t.n(n),
        o = t('VrFO'),
        i = t.n(o),
        c = t('Y9Ll'),
        l = t.n(c),
        u = t('1Pcy'),
        s = t.n(u),
        d = t('5Yy7'),
        f = t.n(d),
        p = t('2VqO'),
        m = t.n(p),
        y = t('KEM+'),
        h = t.n(y),
        g = (t('2G9S'), t('lTEL'), t('7x/C'), t('87if'), t('ZUdG'), t('kYxP'), t('ERkP')),
        b = t.n(g),
        v = t('pXBW'),
        E = t('6/RC'),
        w = t('UIzd'),
        k = t.n(w),
        R = t('kGix')
      t.d(r, 'a', function () {
        return R.a
      })
      var C = t('fs1G'),
        x = t('0KEI'),
        P = t('lU4h'),
        I = t.n(P),
        W = t('21nk'),
        L = t.n(W),
        S = t('bCEw'),
        D = t.n(S),
        H = t('Ud88'),
        Q = t.n(H),
        N = function (e) {
          return (0, e.render)({ fetchStatus: R.a.LOADING, data: null, error: null, retry: C.a })
        },
        T = (function (e) {
          f()(t, e)
          var r = m()(t)
          function t() {
            var e
            i()(this, t)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (e = r.call.apply(r, [this].concat(a))), h()(s()(e), 'state', { error: null }), e
          }
          return (
            l()(
              t,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, r) {
                    if (!(e instanceof v.a)) throw e
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
            t
          )
        })(b.a.Component),
        B = function (e) {
          var r = e.query,
            t = e.queryRef,
            n = e.render,
            a = L()(r, t)
          return n({ fetchStatus: R.a.LOADED, data: a, error: null, retry: C.a })
        },
        M = function (e, r) {
          if (E.canUseDOM)
            return function (t) {
              var n = t.fetchPolicy,
                o = void 0 === n ? 'store-or-network' : n,
                i = t.render,
                c = t.variables,
                l = D()(e),
                u = a()(l, 2),
                s = u[0],
                d = u[1],
                f = Object(x.useCreateLocalApiErrorHandler)(r.errorConfig.context),
                p = I()(c),
                m = a()(p, 1)[0],
                y = b.a.useCallback(
                  function () {
                    d(m, { fetchPolicy: 'network-only' })
                  },
                  [d, m],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    d(m, { fetchPolicy: o })
                  },
                  [o, d, m],
                ),
                s
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(N, { render: i }) },
                      b.a.createElement(
                        T,
                        { errorHandler: f(r.errorConfig.options || {}), key: s.fetchKey, retry: y },
                        function (r, t) {
                          return r
                            ? i({ fetchStatus: R.a.FAILED, error: r, data: null, retry: t })
                            : b.a.createElement(B, { query: e, queryRef: s, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var t = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var o = n.render,
              i = n.variables,
              c = Q()(),
              l = Object(x.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              u = I()(i),
              s = a()(u, 1)[0],
              d = t.get(c)
            if (d) return d
            var f = b.a.lazy(function () {
              return k()(c, e, s)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: R.a.LOADED, data: e, error: null, retry: C.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (l(r.errorConfig.options || {})(e),
                        o({ fetchStatus: R.a.FAILED, data: null, error: e, retry: C.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: t.set(c, e).get.bind(t, c) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(f, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
