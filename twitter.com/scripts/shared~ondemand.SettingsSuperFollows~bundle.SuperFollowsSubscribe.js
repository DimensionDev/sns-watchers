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
        f = r('rHpw'),
        m = (r('enFi'), r('jAXQ')),
        p = r.n(m),
        y = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        h = void 0 !== a ? a : (a = r('O5E5'))
      function g(e) {
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
      var w = f.a.create(function (e) {
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
        b = f.a.create(function (e) {
          return {
            root: { flexDirection: 'row', marginBottom: e.spaces.space8, padding: e.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: e.colors.gray300,
              borderRadius: e.borderRadii.infinite,
              height: f.a.theme.spaces.space40,
              width: f.a.theme.spaces.space40,
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
            a = p()(h, r),
            n = (null == a ? void 0 : a.legacy) || {},
            d = n.name,
            f = n.profile_image_url_https,
            m = n.protected,
            b = n.screen_name,
            E = n.verified
          return d && b && f
            ? o.a.createElement(
                i.a,
                { style: [w.root, t] },
                o.a.createElement(
                  i.a,
                  { style: w.mockBackgroundTweets },
                  o.a.createElement(g, { wordWidths: y.backgroundTopTweet }),
                  o.a.createElement(g, { wordWidths: y.backgroundBottomTweet }),
                ),
                o.a.createElement(
                  i.a,
                  { style: w.mockFocalTweetContainer },
                  o.a.createElement(
                    i.a,
                    { style: w.mockFocalTweet },
                    o.a.createElement(i.a, null, o.a.createElement(c.a, { focusable: !1, size: 'xLarge', uri: f })),
                    o.a.createElement(
                      i.a,
                      { style: w.mockFocalTweetContent },
                      o.a.createElement(l.a, {
                        isProtected: m,
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
          f = t.fetchKey,
          m = t.fetchPolicy,
          p = t.source,
          y = t.variables,
          h = t.networkCacheConfig,
          g = o(e, y, h)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          g.request.node.params.name !== t.name && a(!1),
            (l = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: f,
              fetchObservable: s(d, g.request.identifier, function () {
                return d === t.environment && null != p
                  ? d.executeWithSource({ operation: g, source: p })
                  : d.execute({ operation: g })
              }),
              fetchPolicy: m,
              query: g,
              renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
            })
        else {
          var w = u(d, g)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && d === t.environment ? p.ifEmpty(w) : (t.environment, w),
            fetchKey: f,
            fetchPolicy: m,
            query: g,
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
        f = r('rHpw'),
        m = i.a.d2fb334b,
        p = i.a.f0c99eff,
        y = function (e) {
          var t = e.imageUrl,
            r = e.screenName,
            a = e.style
          return n.a.createElement(
            l.a,
            { style: [h.signature, a] },
            n.a.createElement(s.b, { color: 'gray700', weight: 'bold' }, p({ screenName: null != r ? r : m })),
            t
              ? n.a.createElement(u.a, { size: 'medium', uri: t })
              : n.a.createElement(d.a, { Icon: c.a, size: 'medium' }),
          )
        },
        h = f.a.create(function (e) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
          }
        })
    },
    JWc1: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return g
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
        f = r('j7Bv'),
        m = r('6OUF'),
        p = r('t62R'),
        y = i.a.a4ed9071,
        h = function (e, t) {
          var r = e.imageUrl,
            a = e.onChange,
            o = e.style,
            i = e.value,
            h = Object(s.b)().windowWidth > u.a.theme.breakpoints.small
          return n.a.createElement(
            l.a,
            { style: [w.root, o] },
            r
              ? n.a.createElement(d.a, { size: h ? 'xxxLarge' : 'xLarge', uri: r })
              : n.a.createElement(f.a, { Icon: c.a }),
            a
              ? n.a.createElement(m.a, {
                  inputStyle: w.creatorIntroInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'creatorIntro',
                  numberOfLines: 1,
                  onChange: a,
                  placeholder: y,
                  ref: t,
                  style: w.creatorIntro,
                  value: i,
                })
              : n.a.createElement(p.b, { style: w.creatorIntro }, i),
          )
        },
        g = n.a.forwardRef(h),
        w = u.a.create(function (e) {
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
        f = r('rHpw'),
        m = r('3XMw'),
        p = r.n(m),
        y = ['name', 'style'],
        h = p.a.dc71aee7,
        g = function (e, t) {
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
                p.a.I18NFormatMessage,
                { $i18n: 'f402ebd1', name: null != r ? r : '' },
                l.a.createElement('br', null),
              ),
            ),
            l.a.createElement(d.b, { style: b.subheader }, h),
            l.a.createElement(u.a, n()({}, o, { ref: t, style: b.intro })),
          )
        },
        w = l.a.forwardRef(g),
        b = f.a.create(function (e) {
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
          f = e.wordPercentWidths,
          m = e.wordSpacingPx,
          p = n.a.useMemo(
            function () {
              return f.map(function (e, a) {
                var l = m || o.a.theme.spaces.space4,
                  u = a !== f.length - 1 ? l : 0,
                  p = n.a.createElement(i.a, {
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
                      p,
                    )
                  : p
              })
            },
            [t, r, s, d, m, f],
          )
        return n.a.createElement(i.a, { style: [c.root, u && c.lineWrap, { maxWidth: a || 'none' }, l] }, p)
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
        f = s.useRef,
        m = s.useState,
        p = r('K1lQ').getRequest,
        y = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var r = null != t ? t : y,
          i = o()
        l()
        var s = n(),
          p = f(new Set([r])),
          g = m(function () {
            return r
          }),
          w = g[0],
          b = g[1],
          E = m(function () {
            return r
          }),
          k = E[0],
          v = E[1]
        r !== k && (p.current.add(r), v(r), b(r))
        var x = u(
            function () {
              s.current && (p.current.add(y), b(y))
            },
            [s],
          ),
          R = u(
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
                p.current.add(o), b(o)
              }
            },
            [i, e, b, s],
          ),
          C = f(!1)
        return (
          d(function () {
            return function () {
              C.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === C.current)
                return (
                  (C.current = !1),
                  void (
                    'NullQueryReference' !== w.kind &&
                    R(w.variables, { fetchPolicy: w.fetchPolicy, networkCacheConfig: w.networkCacheConfig })
                  )
                )
              var t = p.current
              if (s.current) {
                var r,
                  n = (0, a.default)(t)
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    var o = r.value
                    if (o === w) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (h(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [w, s, R, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  r = (0, a.default)(p.current)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var n = t.value
                    'NullQueryReference' !== n.kind &&
                      (h(e) ? n.dispose && n.dispose() : n.releaseQuery && n.releaseQuery())
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
          ['NullQueryReference' === w.kind ? null : w, R, x]
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
        f = r('4zmP'),
        m = r('feOz'),
        p = r('aNKf'),
        y = [17, 7, 14, 11, 8, 12, 4, 11],
        h = n.a.createElement(
          i.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          n.a.createElement(s.b, { size: 'subtext3' }, i.a.fa70c77f),
        )
      var g = u.a.create(function (e) {
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
            { style: [g.root, t] },
            n.a.createElement(
              l.a,
              { style: g.mockTweet },
              n.a.createElement(l.a, { style: g.fakeBodyCopy }, n.a.createElement(d.a, { wordPercentWidths: y })),
              n.a.createElement(
                l.a,
                { style: g.educationCallout },
                n.a.createElement(f.a, { Icon: c.a, text: h, type: 'exclusive', withThumbnail: !0 }),
              ),
              n.a.createElement(m.a, {
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
            n.a.createElement(p.a, { colors: [r(), r(), r(50), a], locations: [0, 0.25, 0.75, 1], style: g.gradient }),
            n.a.createElement(p.a, { colors: [r(), r(99), r(50), a], locations: [0, 0.5, 0.75, 1], style: g.gradient }),
          )
        }
    },
    n0Rl: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return Q
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
        f = r.n(d),
        m = r('2VqO'),
        p = r.n(m),
        y = r('KEM+'),
        h = r.n(y),
        g = (r('2G9S'), r('lTEL'), r('7x/C'), r('87if'), r('ZUdG'), r('kYxP'), r('ERkP')),
        w = r.n(g),
        b = r('pXBW'),
        E = r('6/RC'),
        k = r('UIzd'),
        v = r.n(k),
        x = r('kGix')
      r.d(t, 'a', function () {
        return x.a
      })
      var R = r('fs1G'),
        C = r('0KEI'),
        P = r('lU4h'),
        T = r.n(P),
        W = r('21nk'),
        S = r.n(W),
        L = r('bCEw'),
        I = r.n(L),
        B = r('Ud88'),
        F = r.n(B),
        H = function (e) {
          return (0, e.render)({ fetchStatus: x.a.LOADING, data: null, error: null, retry: R.a })
        },
        D = (function (e) {
          f()(r, e)
          var t = p()(r)
          function r() {
            var e
            i()(this, r)
            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(n))), h()(u()(e), 'state', { error: null }), e
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
        N = function (e) {
          var t = e.query,
            r = e.queryRef,
            a = e.render,
            n = S()(t, r)
          return a({ fetchStatus: x.a.LOADED, data: n, error: null, retry: R.a })
        },
        Q = function (e, t) {
          if (E.canUseDOM)
            return function (r) {
              var a = r.fetchPolicy,
                o = void 0 === a ? 'store-or-network' : a,
                i = r.render,
                c = r.variables,
                l = I()(e),
                s = n()(l, 2),
                u = s[0],
                d = s[1],
                f = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = T()(c),
                p = n()(m, 1)[0],
                y = w.a.useCallback(
                  function () {
                    d(p, { fetchPolicy: 'network-only' })
                  },
                  [d, p],
                )
              return (
                w.a.useLayoutEffect(
                  function () {
                    d(p, { fetchPolicy: o })
                  },
                  [o, d, p],
                ),
                u
                  ? w.a.createElement(
                      w.a.Suspense,
                      { fallback: w.a.createElement(H, { render: i }) },
                      w.a.createElement(
                        D,
                        { errorHandler: f(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
                        function (t, r) {
                          return t
                            ? i({ fetchStatus: x.a.FAILED, error: t, data: null, retry: r })
                            : w.a.createElement(N, { query: e, queryRef: u, render: i })
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
              c = F()(),
              l = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = T()(i),
              u = n()(s, 1)[0],
              d = r.get(c)
            if (d) return d
            var f = w.a.lazy(function () {
              return v()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: x.a.LOADED, data: e, error: null, retry: R.a })
                  },
                  function (e) {
                    return e instanceof b.a
                      ? (l(t.errorConfig.options || {})(e),
                        o({ fetchStatus: x.a.FAILED, data: null, error: e, retry: R.a }))
                      : w.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: r.set(c, e).get.bind(r, c) }
                })
            })
            return w.a.createElement(w.a.Suspense, null, w.a.createElement(f, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
