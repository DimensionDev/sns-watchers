;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    '+7VC': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return E
      })
      r('ho0z')
      var a,
        n = r('ERkP'),
        o = r.n(n),
        i = r('MWbm'),
        c = r('jhWN'),
        l = r('jV+4'),
        s = r('9VO7'),
        u = r('a2Fh'),
        d = r('9Xij'),
        m = r('rHpw'),
        p = (r('enFi'), r('jAXQ')),
        f = r.n(p),
        y = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        g = void 0 !== a ? a : (a = r('O5E5'))
      function h(e) {
        var t = e.wordWidths
        return o.a.createElement(
          i.a,
          { style: b.root },
          o.a.createElement(d.a, { ratio: 1, style: b.mockUserAvatar }),
          o.a.createElement(
            i.a,
            { style: b.mockTweetContent },
            o.a.createElement(
              i.a,
              { style: b.mockUserNameContainer },
              o.a.createElement(u.a, {
                color: 'text',
                maxWidthPx: 18,
                style: b.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              o.a.createElement(u.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            o.a.createElement(u.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: t }),
          ),
        )
      }
      var w = m.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              maxWidth: '327px',
              paddingHorizontal: e.spaces.space56,
              position: 'relative',
              userSelect: 'none',
              width: '100%',
            },
            mockBackgroundTweets: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              height: '260px',
              justifyContent: 'space-between',
              width: '100%',
            },
            mockBodyCopy: { marginTop: e.spaces.space12 },
            mockFocalTweet: {
              display: 'flex',
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              height: '104px',
              padding: e.spaces.space16,
              width: '100%',
            },
            mockFocalTweetContainer: {
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            },
            mockFocalTweetContent: { flex: 1, paddingBottom: e.spaces.space4, paddingLeft: e.spaces.space12 },
            superFollowIndicatorContainer: {
              alignSelf: 'flex-start',
              marginTop: e.spaces.space8,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        b = m.a.create(function (e) {
          return {
            root: { flexDirection: 'row', marginBottom: e.spaces.space8, padding: e.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: e.colors.gray300,
              borderRadius: e.borderRadii.infinite,
              height: m.a.theme.spaces.space40,
              width: m.a.theme.spaces.space40,
            },
            mockTweetContent: {
              flexGrow: 1,
              justifyContent: 'space-between',
              marginLeft: e.spaces.space12,
              marginTop: e.spaces.space12,
            },
            mockUserNameContainer: { flexDirection: 'row', justifyContent: 'flex-start' },
            mockUserNameMarginRight: { marginRight: e.spaces.space4 },
          }
        }),
        E = function (e) {
          var t = e.style,
            r = e.user,
            a = f()(g, r),
            n = (null == a ? void 0 : a.legacy) || {},
            d = n.name,
            m = n.profile_image_url_https,
            p = n.protected,
            b = n.screen_name,
            E = n.verified
          return d && b && m
            ? o.a.createElement(
                i.a,
                { style: [w.root, t] },
                o.a.createElement(
                  i.a,
                  { style: w.mockBackgroundTweets },
                  o.a.createElement(h, { wordWidths: y.backgroundTopTweet }),
                  o.a.createElement(h, { wordWidths: y.backgroundBottomTweet }),
                ),
                o.a.createElement(
                  i.a,
                  { style: w.mockFocalTweetContainer },
                  o.a.createElement(
                    i.a,
                    { style: w.mockFocalTweet },
                    o.a.createElement(i.a, null, o.a.createElement(c.a, { focusable: !1, size: 'xLarge', uri: m })),
                    o.a.createElement(
                      i.a,
                      { style: w.mockFocalTweetContent },
                      o.a.createElement(l.a, {
                        isProtected: p,
                        isVerified: E,
                        name: d,
                        nameSize: 'body',
                        screenName: b,
                        screenNameSize: 'body',
                      }),
                      o.a.createElement(
                        i.a,
                        { style: w.superFollowIndicatorContainer },
                        o.a.createElement(s.a, { type: 'superFollower' }),
                      ),
                      o.a.createElement(u.a, {
                        style: w.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: y.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        }
    },
    '1k08': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return l
      })
      r('1t7P'), r('jQ/y')
      var a = r('ERkP'),
        n = r.n(a),
        o = r('MWbm'),
        i = r('t62R'),
        c = r('rHpw'),
        l = function (e) {
          var t = e.description,
            r = e.style,
            a = e.title
          return n.a.createElement(
            o.a,
            { style: r },
            n.a.createElement(
              i.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              a,
            ),
            t && n.a.createElement(i.b, { color: 'gray700', style: s.description }, t),
          )
        },
        s = c.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        })
    },
    '21nk': function (e, t, r) {
      'use strict'
      var a = r('I9iR'),
        n = r('3KVO'),
        o = r('yLYC'),
        i = r('Ud88'),
        c = (r('/2Cm'), r('aQQo').useTrackLoadQueryInRender),
        l = (r('ERkP').useDebugValue, r('K1lQ').__internal),
        s = l.fetchQueryDeduped,
        u = l.fetchQuery
      e.exports = function (e, t, r) {
        c()
        var l,
          d = i(),
          m = t.fetchKey,
          p = t.fetchPolicy,
          f = t.source,
          y = t.variables,
          g = t.networkCacheConfig,
          h = o(e, y, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          h.request.node.params.name !== t.name && a(!1),
            (l = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: s(d, h.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: h, source: f })
                  : d.execute({ operation: h })
              }),
              fetchPolicy: p,
              query: h,
              renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
            })
        else {
          var w = u(d, h)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(w) : (t.environment, w),
            fetchKey: m,
            fetchPolicy: p,
            query: h,
            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
          }
        }
        return n(l)
      }
    },
    '23An': function (e, t, r) {
      'use strict'
      var a = r('ERkP'),
        n = a.useEffect,
        o = a.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          n(function () {
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
    '9VLy': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return y
      })
      var a = r('ERkP'),
        n = r.n(a),
        o = r('3XMw'),
        i = r.n(o),
        c = r('lUZE'),
        l = r('MWbm'),
        s = r('t62R'),
        u = r('jhWN'),
        d = r('j7Bv'),
        m = r('rHpw'),
        p = i.a.d2fb334b,
        f = i.a.f0c99eff,
        y = function (e) {
          var t = e.imageUrl,
            r = e.screenName,
            a = e.style
          return n.a.createElement(
            l.a,
            { style: [g.signature, a] },
            n.a.createElement(s.b, { color: 'gray700', weight: 'bold' }, f({ screenName: null != r ? r : p })),
            t
              ? n.a.createElement(u.a, { size: 'medium', uri: t })
              : n.a.createElement(d.a, { Icon: c.a, size: 'medium' }),
          )
        },
        g = m.a.create(function (e) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
          }
        })
    },
    JWc1: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return w
      })
      r('uFXj'), r('kH1Z'), r('6U7i')
      var a = r('ERkP'),
        n = r.n(a),
        o = r('3XMw'),
        i = r.n(o),
        c = r('lUZE'),
        l = r('MWbm'),
        s = r('cHvH'),
        u = r('rHpw'),
        d = r('jhWN'),
        m = r('j7Bv'),
        p = r('6OUF'),
        f = r('yTN1'),
        y = r('t62R'),
        g = i.a.a4ed9071,
        h = function (e, t) {
          var r,
            a = e.autoFocus,
            o = e.imageUrl,
            i = e.onChange,
            h = e.style,
            w = e.value,
            E = e.valueMaxLength,
            v = Object(s.b)().windowWidth > u.a.theme.breakpoints.small
          return n.a.createElement(
            l.a,
            { style: [b.root, h] },
            o
              ? n.a.createElement(d.a, { size: v ? 'xxxLarge' : 'xLarge', uri: o })
              : n.a.createElement(m.a, { Icon: c.a }),
            i
              ? n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(p.a, {
                    autoFocus: a,
                    inputStyle: [b.creatorIntroInput, E && b.creatorIntroInputWithCountdownCircle],
                    isCompact: !0,
                    leftAligned: !0,
                    maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                    multiline: !0,
                    name: 'creatorIntro',
                    numberOfLines: 1,
                    onChange: i,
                    placeholder: g,
                    ref: t,
                    style: b.creatorIntro,
                    value: w,
                  }),
                  E &&
                    n.a.createElement(
                      l.a,
                      { style: b.countdownCircle },
                      n.a.createElement(f.a, {
                        count: null !== (r = null == w ? void 0 : w.length) && void 0 !== r ? r : 0,
                        maxCount: E,
                        warningCount: E - 10,
                      }),
                    ),
                )
              : n.a.createElement(y.b, { style: [b.creatorIntro, b.creatorIntroReadOnly] }, w),
          )
        },
        w = n.a.forwardRef(h),
        b = u.a.create(function (e) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'row', gap: e.spaces.space12 },
            creatorIntro: {
              backgroundColor: e.colors.cellBackground,
              borderBottomLeftRadius: e.borderRadii.large,
              borderBottomRightRadius: e.borderRadii.large,
              borderTopLeftRadius: 0,
              borderTopRightRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.small,
              width: '100%',
            },
            creatorIntroReadOnly: { padding: e.spaces.space24 },
            creatorIntroInput: {
              minHeight: 0,
              paddingBottom: e.spaces.space24,
              paddingLeft: e.spaces.space24,
              paddingRight: e.spaces.space24,
              paddingTop: e.spaces.space24,
            },
            creatorIntroInputWithCountdownCircle: { paddingBottom: e.spaces.space40 },
            countdownCircle: { position: 'absolute', bottom: e.spaces.space8, right: e.spaces.space8 },
          }
        })
    },
    MAc7: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return w
      })
      var a = r('97Jx'),
        n = r.n(a),
        o = r('m3Bd'),
        i = r.n(o),
        c = (r('ho0z'), r('ERkP')),
        l = r.n(c),
        s = r('VTDR'),
        u = r('JWc1'),
        d = r('t62R'),
        m = r('rHpw'),
        p = r('3XMw'),
        f = r.n(p),
        y = ['name', 'style'],
        g = f.a.dc71aee7,
        h = function (e, t) {
          var r = e.name,
            a = e.style,
            o = i()(e, y)
          return l.a.createElement(
            s.a,
            { style: a },
            l.a.createElement(
              d.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
              l.a.createElement(
                f.a.I18NFormatMessage,
                { $i18n: 'f402ebd1', name: null != r ? r : '' },
                l.a.createElement('br', null),
              ),
            ),
            l.a.createElement(d.b, { style: b.subheader }, g),
            l.a.createElement(u.a, n()({}, o, { ref: t, style: b.intro })),
          )
        },
        w = l.a.forwardRef(h),
        b = m.a.create(function (e) {
          return { subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }
        })
    },
    O5E5: function (e, t, r) {
      'use strict'
      r.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ExclusiveDemoVIPContent_user',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '58af446418df3647d0170aad2caed65d',
      }
      t.default = a
    },
    VTDR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return s
      })
      var a = r('ERkP'),
        n = r.n(a),
        o = r('MWbm'),
        i = r('cHvH'),
        c = r('rHpw'),
        l = r('+Eiw'),
        s = function (e) {
          var t = e.children,
            r = e.style,
            a = Object(i.b)().windowWidth > c.a.theme.breakpoints.medium
          return n.a.createElement(
            o.a,
            { style: [u.root, a && u.rootWide, r] },
            n.a.createElement(o.a, { style: u.blob }),
            t,
          )
        },
        u = c.a.create(function (e) {
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
    WOwf: function (e, t, r) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      r.d(t, 'a', function () {
        return a
      })
    },
    a2Fh: function (e, t, r) {
      'use strict'
      r('z84I')
      var a = r('ERkP'),
        n = r.n(a),
        o = r('rHpw'),
        i = r('MWbm')
      var c = o.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'hidden', width: '100%' },
          borderRadius: { borderRadius: e.borderRadii.infinite },
          lineWrap: { flexWrap: 'wrap', overflow: 'visible' },
          word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 },
          wordWrapper: { justifyContent: 'center' },
        }
      })
      t.a = function (e) {
        var t = e.color,
          r = e.lineHeightPx,
          a = e.maxWidthPx,
          l = e.style,
          s = e.withBorderRadius,
          u = e.withLineWrap,
          d = e.wordHeightPx,
          m = e.wordPercentWidths,
          p = e.wordSpacingPx,
          f = n.a.useMemo(
            function () {
              return m.map(function (e, a) {
                var l = p || o.a.theme.spaces.space4,
                  u = a !== m.length - 1 ? l : 0,
                  f = n.a.createElement(i.a, {
                    key: a,
                    style: [
                      c.word,
                      { width: r ? '100%' : ''.concat(e, '%') },
                      t && { backgroundColor: o.a.theme.colors[t] },
                      !r && { marginRight: u },
                      s && c.borderRadius,
                      d && { height: d },
                    ],
                  })
                return r
                  ? n.a.createElement(
                      i.a,
                      {
                        key: a,
                        style: [c.wordWrapper, r && { marginRight: u }, { height: r, width: ''.concat(e, '%') }],
                      },
                      f,
                    )
                  : f
              })
            },
            [t, r, s, d, p, m],
          )
        return n.a.createElement(i.a, { style: [c.root, u && c.lineWrap, { maxWidth: a || 'none' }, l] }, f)
      }
    },
    bCEw: function (e, t, r) {
      'use strict'
      var a = r('IGGJ')(r('K1iM')),
        n = r('23An'),
        o = r('Ud88'),
        i = r('aQQo'),
        c = i.loadQuery,
        l = i.useTrackLoadQueryInRender,
        s = r('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        m = s.useRef,
        p = s.useState,
        f = r('K1lQ').getRequest,
        y = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var r = null != t ? t : y,
          i = o()
        l()
        var s = n(),
          f = m(new Set([r])),
          h = p(function () {
            return r
          }),
          w = h[0],
          b = h[1],
          E = p(function () {
            return r
          }),
          v = E[0],
          k = E[1]
        r !== v && (f.current.add(r), k(r), b(r))
        var x = u(
            function () {
              s.current && (f.current.add(y), b(y))
            },
            [s],
          ),
          C = u(
            function (t, r) {
              var a =
                null != r && r.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: r.fetchPolicy,
                      networkCacheConfig: r.networkCacheConfig,
                      __nameForWarning: r.__nameForWarning,
                    }
                  : r
              if (s.current) {
                var n,
                  o = c(null !== (n = null == r ? void 0 : r.__environment) && void 0 !== n ? n : i, e, t, a)
                f.current.add(o), b(o)
              }
            },
            [i, e, b, s],
          ),
          R = m(!1)
        return (
          d(function () {
            return function () {
              R.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === R.current)
                return (
                  (R.current = !1),
                  void (
                    'NullQueryReference' !== w.kind &&
                    C(w.variables, { fetchPolicy: w.fetchPolicy, networkCacheConfig: w.networkCacheConfig })
                  )
                )
              var t = f.current
              if (s.current) {
                var r,
                  n = (0, a.default)(t)
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    var o = r.value
                    if (o === w) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (g(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [w, s, C, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  r = (0, a.default)(f.current)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var n = t.value
                    'NullQueryReference' !== n.kind &&
                      (g(e) ? n.dispose && n.dispose() : n.releaseQuery && n.releaseQuery())
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === w.kind ? null : w, C, x]
        )
      }
    },
    lD8l: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return w
      })
      r('2G9S')
      var a = r('ERkP'),
        n = r.n(a),
        o = r('3XMw'),
        i = r.n(o),
        c = r('EyD/'),
        l = r('MWbm'),
        s = r('t62R'),
        u = r('rHpw'),
        d = r('a2Fh'),
        m = r('4zmP'),
        p = r('feOz'),
        f = r('aNKf'),
        y = [17, 7, 14, 11, 8, 12, 4, 11],
        g = n.a.createElement(
          i.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          n.a.createElement(s.b, { size: 'subtext3' }, i.a.fa70c77f),
        )
      var h = u.a.create(function (e) {
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
        w = function (e) {
          var t = e.style,
            r = function (e) {
              return ''.concat(u.a.theme.colors.cellBackground).concat(e || '')
            },
            a = u.a.theme.colors.transparent
          return n.a.createElement(
            l.a,
            { style: [h.root, t] },
            n.a.createElement(
              l.a,
              { style: h.mockTweet },
              n.a.createElement(l.a, { style: h.fakeBodyCopy }, n.a.createElement(d.a, { wordPercentWidths: y })),
              n.a.createElement(
                l.a,
                { style: h.educationCallout },
                n.a.createElement(m.a, { Icon: c.a, text: g, type: 'exclusive', withThumbnail: !0 }),
              ),
              n.a.createElement(p.a, {
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
            n.a.createElement(f.a, { colors: [r(), r(), r(50), a], locations: [0, 0.25, 0.75, 1], style: h.gradient }),
            n.a.createElement(f.a, { colors: [r(), r(99), r(50), a], locations: [0, 0.5, 0.75, 1], style: h.gradient }),
          )
        }
    },
    n0Rl: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return M
      })
      var a = r('ddV6'),
        n = r.n(a),
        o = r('VrFO'),
        i = r.n(o),
        c = r('Y9Ll'),
        l = r.n(c),
        s = r('1Pcy'),
        u = r.n(s),
        d = r('5Yy7'),
        m = r.n(d),
        p = r('2VqO'),
        f = r.n(p),
        y = r('KEM+'),
        g = r.n(y),
        h = (r('2G9S'), r('lTEL'), r('7x/C'), r('87if'), r('ZUdG'), r('kYxP'), r('ERkP')),
        w = r.n(h),
        b = r('pXBW'),
        E = r('6/RC'),
        v = r('UIzd'),
        k = r.n(v),
        x = r('kGix')
      r.d(t, 'a', function () {
        return x.a
      })
      var C = r('fs1G'),
        R = r('0KEI'),
        P = r('lU4h'),
        W = r.n(P),
        T = r('21nk'),
        I = r.n(T),
        S = r('bCEw'),
        L = r.n(S),
        F = r('Ud88'),
        B = r.n(F),
        H = function (e) {
          return (0, e.render)({ fetchStatus: x.a.LOADING, data: null, error: null, retry: C.a })
        },
        N = (function (e) {
          m()(r, e)
          var t = f()(r)
          function r() {
            var e
            i()(this, r)
            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(n))), g()(u()(e), 'state', { error: null }), e
          }
          return (
            l()(
              r,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
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
        })(w.a.Component),
        D = function (e) {
          var t = e.query,
            r = e.queryRef,
            a = e.render,
            n = I()(t, r)
          return a({ fetchStatus: x.a.LOADED, data: n, error: null, retry: C.a })
        },
        M = function (e, t) {
          if (E.canUseDOM)
            return function (r) {
              var a = r.fetchPolicy,
                o = void 0 === a ? 'store-or-network' : a,
                i = r.render,
                c = r.variables,
                l = L()(e),
                s = n()(l, 2),
                u = s[0],
                d = s[1],
                m = Object(R.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = W()(c),
                f = n()(p, 1)[0],
                y = w.a.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                w.a.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: o })
                  },
                  [o, d, f],
                ),
                u
                  ? w.a.createElement(
                      w.a.Suspense,
                      { fallback: w.a.createElement(H, { render: i }) },
                      w.a.createElement(
                        N,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
                        function (t, r) {
                          return t
                            ? i({ fetchStatus: x.a.FAILED, error: t, data: null, retry: r })
                            : w.a.createElement(D, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var r = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var o = a.render,
              i = a.variables,
              c = B()(),
              l = Object(R.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = W()(i),
              u = n()(s, 1)[0],
              d = r.get(c)
            if (d) return d
            var m = w.a.lazy(function () {
              return k()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: x.a.LOADED, data: e, error: null, retry: C.a })
                  },
                  function (e) {
                    return e instanceof b.a
                      ? (l(t.errorConfig.options || {})(e),
                        o({ fetchStatus: x.a.FAILED, data: null, error: e, retry: C.a }))
                      : w.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: r.set(c, e).get.bind(r, c) }
                })
            })
            return w.a.createElement(w.a.Suspense, null, w.a.createElement(m, null))
          }
        }
    },
    yTN1: function (e, t, r) {
      'use strict'
      var a = r('ERkP'),
        n = r.n(a),
        o = r('WOwf'),
        i = r('3XMw'),
        c = r.n(i),
        l = r('k6Ei'),
        s = r('rHpw'),
        u = r('+/1j'),
        d = r('MWbm'),
        m = c.a.c2fc878c,
        p = c.a.db11b27f,
        f = function (e) {
          return e
        },
        y = s.a.create(function (e) {
          var t = e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30 },
            center: { alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
            hide: { opacity: 0 },
            text: { fontSize: 13, lineHeight: 0.8, minWidth: 16, textAlign: 'center' },
            gray700: { color: t.gray700 },
            red500: { color: t.red500 },
          }
        })
      t.a = function (e) {
        var t = e.count,
          r = e.maxCount,
          a = e.formatNumber,
          i = void 0 === a ? f : a,
          c = e.warningCount,
          g = r - t,
          h = g >= 0 ? p({ count: i(g) }) : m({ count: i(t - r) }),
          w =
            t >= c
              ? n.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: s.a.visuallyHidden },
                  h,
                )
              : null,
          b = Object(o.a)(g, r),
          E = t >= r ? 'red500' : t >= c ? 'yellow500' : 'primary',
          v = n.a.createElement(l.a, {
            color: E,
            progress: b,
            size: t >= c ? 30 : 20,
            style: [y.progressCircle, g <= -10 && y.hide],
          }),
          k = t >= c ? n.a.createElement(u.a, { style: [y.text, g > 0 ? y.gray700 : y.red500] }, i(g)) : null
        return n.a.createElement(
          d.a,
          { style: [y.root, y.center] },
          w,
          v,
          n.a.createElement(d.a, { style: [s.a.absoluteFill, y.center] }, k),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
