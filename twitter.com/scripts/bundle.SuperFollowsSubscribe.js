;(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    '21nk': function (e, r, t) {
      'use strict'
      var n = t('I9iR'),
        a = t('3KVO'),
        l = t('yLYC'),
        i = t('Ud88'),
        o = (t('/2Cm'), t('aQQo').useTrackLoadQueryInRender),
        s = (t('ERkP').useDebugValue, t('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, r, t) {
        o()
        var s,
          d = i(),
          p = r.fetchKey,
          m = r.fetchPolicy,
          f = r.source,
          g = r.variables,
          y = r.networkCacheConfig,
          b = l(e, g, y)
        if ('PreloadedQuery_DEPRECATED' === r.kind)
          b.request.node.params.name !== r.name && n(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: c(d, b.request.identifier, function () {
                return d === r.environment && null != f
                  ? d.executeWithSource({ operation: b, source: f })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: m,
              query: b,
              renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === r.environment ? f.ifEmpty(h) : (r.environment, h),
            fetchKey: p,
            fetchPolicy: m,
            query: b,
            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
          }
        }
        return a(s)
      }
    },
    '23An': function (e, r, t) {
      'use strict'
      var n = t('ERkP'),
        a = n.useEffect,
        l = n.useRef
      e.exports = function () {
        var e = l(!0)
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
    '9RBu': function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, 'superFollowsSubscribeQuery', function () {
          return de
        })
      var n = t('ERkP'),
        a = (t('enFi'), t('rZeG')),
        l = t('kGix'),
        i = t('ddV6'),
        o = t.n(i),
        s = (t('ho0z'), t('1t7P'), t('jQ/y'), t('uFXj'), t('2G9S'), t('3XMw')),
        c = t.n(s),
        u = t('EyD/'),
        d = t('MWbm'),
        p = t('t62R'),
        m = t('rHpw'),
        f = t('a2Fh'),
        g = t('4zmP'),
        y = t('feOz'),
        b = t('aNKf'),
        h = [17, 7, 14, 11, 8, 12, 4, 11],
        k = n.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          n.createElement(p.b, { size: 'subtext3' }, c.a.fa70c77f),
        )
      var w,
        v = m.a.create(function (e) {
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
        E = function (e) {
          var r = e.style,
            t = function (e) {
              return ''.concat(m.a.theme.colors.cellBackground).concat(e || '')
            },
            a = m.a.theme.colors.transparent
          return n.createElement(
            d.a,
            { style: [v.root, r] },
            n.createElement(
              d.a,
              { style: v.mockTweet },
              n.createElement(d.a, { style: v.fakeBodyCopy }, n.createElement(f.a, { wordPercentWidths: h })),
              n.createElement(
                d.a,
                { style: v.educationCallout },
                n.createElement(g.a, { Icon: u.a, text: k, type: 'exclusive', withThumbnail: !0 }),
              ),
              n.createElement(y.a, {
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
            n.createElement(b.a, { colors: [t(), t(), t(50), a], locations: [0, 0.25, 0.75, 1], style: v.gradient }),
            n.createElement(b.a, { colors: [t(), t(99), t(50), a], locations: [0, 0.5, 0.75, 1], style: v.gradient }),
          )
        },
        R = t('jhWN'),
        _ = t('jV+4'),
        F = t('9VO7'),
        S = t('9Xij'),
        x = t('jAXQ'),
        C = t.n(x),
        T = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        I = void 0 !== w ? w : (w = t('ahKC'))
      function P(e) {
        var r = e.wordWidths
        return n.createElement(
          d.a,
          { style: U.root },
          n.createElement(S.a, { ratio: 1, style: U.mockUserAvatar }),
          n.createElement(
            d.a,
            { style: U.mockTweetContent },
            n.createElement(
              d.a,
              { style: U.mockUserNameContainer },
              n.createElement(f.a, {
                color: 'text',
                maxWidthPx: 18,
                style: U.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              n.createElement(f.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            n.createElement(f.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: r }),
          ),
        )
      }
      var K,
        L,
        B,
        D,
        W = m.a.create(function (e) {
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
        U = m.a.create(function (e) {
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
        N = function (e) {
          var r = e.style,
            t = e.viewer,
            a = C()(I, t),
            l = (null == a ? void 0 : a.legacy) || {},
            i = l.name,
            o = l.profile_image_url_https,
            s = l.protected,
            c = l.screen_name,
            u = l.verified
          return i && c && o
            ? n.createElement(
                d.a,
                { style: [W.root, r] },
                n.createElement(
                  d.a,
                  { style: W.mockBackgroundTweets },
                  n.createElement(P, { wordWidths: T.backgroundTopTweet }),
                  n.createElement(P, { wordWidths: T.backgroundBottomTweet }),
                ),
                n.createElement(
                  d.a,
                  { style: W.mockFocalTweetContainer },
                  n.createElement(
                    d.a,
                    { style: W.mockFocalTweet },
                    n.createElement(d.a, null, n.createElement(R.a, { focusable: !1, size: 'xLarge', uri: o })),
                    n.createElement(
                      d.a,
                      { style: W.mockFocalTweetContent },
                      n.createElement(_.a, {
                        isProtected: s,
                        isVerified: u,
                        name: i,
                        nameSize: 'body',
                        screenName: c,
                        screenNameSize: 'body',
                      }),
                      n.createElement(
                        d.a,
                        { style: W.superFollowIndicatorContainer },
                        n.createElement(F.a, { type: 'superFollower' }),
                      ),
                      n.createElement(f.a, {
                        style: W.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: T.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        },
        Q = t('v//M'),
        A = function (e) {
          var r = e.style
          return n.createElement(
            p.b,
            { color: 'gray700', style: r },
            n.createElement(
              c.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              n.createElement(
                p.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                c.a.d822ae43,
              ),
            ),
          )
        },
        z = t('FEMQ'),
        H = t('ID86'),
        M = c.a.f0c99eff,
        O = void 0 !== K ? K : (K = t('gaat')),
        j = function (e) {
          var r = e.style,
            t = e.user,
            a = C()(O, t).legacy,
            l = a.profile_image_url_https,
            i = a.screen_name
          return n.createElement(
            d.a,
            { style: [V.signature, r] },
            i && n.createElement(p.b, { color: 'gray700', weight: 'bold' }, M({ screenName: i })),
            l && n.createElement(R.a, { size: 'medium', uri: l }),
          )
        },
        V = m.a.create(function (e) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
          }
        }),
        q = function (e) {
          var r = e.description,
            t = e.style,
            a = e.title
          return n.createElement(
            d.a,
            { style: t },
            n.createElement(
              p.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              a,
            ),
            r && n.createElement(p.b, { color: 'gray700', style: G.description }, r),
          )
        },
        G = m.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        }),
        X = t('zCf4'),
        J = t('/yvb'),
        Y = t('cHvH'),
        $ = t('sgih'),
        Z = c.a.cbc8ce27,
        ee = c.a.b600eb88,
        re = c.a.b08bbeb4,
        te = c.a.d2613122,
        ne = c.a.g61ed8a4,
        ae = c.a.c3d23f10,
        le = c.a.d338f53e,
        ie = void 0 !== L ? L : (L = t('l62v')),
        oe = void 0 !== B ? B : (B = t('E0zt')),
        se = m.a.create(function (e) {
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
        ce = function (e) {
          var r = e.fetchStatus,
            t = e.onRetry,
            a = e.screenName,
            l = e.user,
            i = e.viewer,
            s = C()(ie, l),
            c = C()(oe, i),
            u = Object(X.g)(),
            p = function () {
              u.push('/'.concat(a, '/superfollows'))
            },
            f = function () {
              var e, r, t, a
              if (
                !(
                  null != s &&
                  null !== (e = s.super_follow_creator_benefits) &&
                  void 0 !== e &&
                  e.benefits_data &&
                  null != s &&
                  null !== (r = s.legacy) &&
                  void 0 !== r &&
                  r.name &&
                  null != s &&
                  null !== (t = s.legacy) &&
                  void 0 !== t &&
                  t.profile_image_url_https &&
                  null != s &&
                  null !== (a = s.super_follow_creator_benefits) &&
                  void 0 !== a &&
                  a.creator_intro
                )
              )
                return null
              var l = s.legacy,
                i = l.name,
                u = l.profile_image_url_https,
                m = s.super_follow_creator_benefits,
                f = m.benefits_data,
                g = m.creator_intro,
                y = o()(f, 1)[0],
                b = y.description,
                h = y.title
              return n.createElement(
                n.Fragment,
                null,
                n.createElement(z.a, { creatorIntro: g, image: u, name: i }),
                n.createElement(q, { description: b || void 0, style: se.titleDescription, title: h || Z }),
                n.createElement(j, { style: se.signature, user: s }),
                n.createElement(E, { style: se.demoTweet }),
                n.createElement(q, { description: re, style: se.titleDescription, title: ee }),
                c ? n.createElement(N, { style: [se.demoTweet, se.demoVIPTweetMarginTop], viewer: c }) : null,
                n.createElement(A, { style: se.disclaimer }),
                n.createElement(
                  d.a,
                  { style: se.subscribeButtonContainer },
                  n.createElement(
                    J.a,
                    {
                      backgroundColor: 'plum500',
                      borderColor: 'transparent',
                      color: 'white',
                      disabled: !0,
                      onPress: p,
                      style: se.subscribeButton,
                    },
                    te({ price: '$X.XX' }),
                  ),
                ),
              )
            },
            g = function () {
              return n.createElement(
                n.Fragment,
                null,
                n.createElement(q, { description: ae, style: se.errorTitleDescription, title: ne }),
                n.createElement(J.a, { onPress: t, style: se.errorButton, type: 'brandFilled' }, le),
              )
            }
          return n.createElement(Y.a, null, function (e) {
            var a = e.windowWidth > m.a.theme.breakpoints.small
            return n.createElement(
              $.a,
              {
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: p,
                style: [se.sheet, a ? se.wide : se.narrow],
                type: 'full',
                withMask: !0,
              },
              n.createElement(H.a, null),
              n.createElement(Q.a, { fetchStatus: r, onRequestRetry: t, render: f, renderFailure: g, retryable: !1 }),
            )
          })
        },
        ue = t('n0Rl'),
        de = void 0 !== D ? D : (D = t('kbWR')),
        pe = Object(ue.b)(de, { errorConfig: { context: 'SUPER_FOLLOWS_SUBSCRIPTION_SCREEN' } })
      r.default = function () {
        var e = Object(X.i)().screenName || '',
          r = { screenName: Object(a.a)(e) }
        return n.createElement(pe, {
          render: function (r) {
            var t,
              a,
              i,
              o = r.data,
              s = r.fetchStatus,
              c = r.retry,
              u = null == o || null === (t = o.user) || void 0 === t ? void 0 : t.result,
              d =
                null == o || null === (a = o.viewer) || void 0 === a || null === (i = a.user_results) || void 0 === i
                  ? void 0
                  : i.result
            return n.createElement(ce, {
              fetchStatus: Object(l.b)(
                s,
                'User' === (null == u ? void 0 : u.__typename) && 'User' === (null == d ? void 0 : d.__typename),
              ),
              onRetry: c,
              screenName: e,
              user: u || void 0,
              viewer: d || void 0,
            })
          },
          variables: r,
        })
      }
    },
    E0zt: function (e, r, t) {
      'use strict'
      t.r(r)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ExclusiveDemoVIPContent_viewer' }],
        type: 'User',
        abstractKey: null,
        hash: 'fe467192df543b45c5ba1f84fd9d3c94',
      }
      r.default = n
    },
    FEMQ: function (e, r, t) {
      'use strict'
      t('ho0z'), t('uFXj')
      var n = t('ERkP'),
        a = t('tI3i'),
        l = t.n(a),
        i = t('JWc1'),
        o = t('t62R'),
        s = t('rHpw'),
        c = t('3XMw'),
        u = t.n(c),
        d = u.a.dc71aee7,
        p = s.a.create(function (e) {
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
          t = e.creatorIntroInputRef,
          a = e.creatorIntroInputValue,
          s = e.image,
          c = e.name,
          m = e.onInputChange,
          f = e.withInput
        return (
          l()('string' == typeof c, 'name must be a string'),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              o.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              n.createElement(u.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: c }, n.createElement('br', null)),
            ),
            n.createElement(o.b, { size: 'headline2', style: p.subheader }, d),
            s
              ? n.createElement(i.a, {
                  creatorIntro: r,
                  image: s,
                  inputRef: t,
                  inputValue: a,
                  onInputChange: m,
                  withInput: f,
                })
              : null,
          )
        )
      }
    },
    ID86: function (e, r, t) {
      'use strict'
      var n = t('ERkP'),
        a = t('MWbm'),
        l = t('rHpw'),
        i = t('+Eiw')
      r.a = function () {
        return n.createElement(a.a, { style: o.blob })
      }
      var o = l.a.create(function (e) {
        return {
          blob: {
            backgroundImage: i.a.getBackgroundImage(),
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
    JWc1: function (e, r, t) {
      'use strict'
      t('uFXj')
      var n = t('ERkP'),
        a = t('3XMw'),
        l = t.n(a),
        i = t('MWbm'),
        o = t('j7Bv'),
        s = t('jhWN'),
        c = t('6OUF'),
        u = t('t62R'),
        d = t('rHpw'),
        p = l.a.a4ed9071
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
            userSelect: 'none',
            width: '100%',
          },
          creatorIntroInputBubble: { padding: e.spaces.space12 },
        }
      })
      r.a = function (e) {
        var r = e.Icon,
          t = e.creatorIntro,
          a = e.image,
          l = e.inputRef,
          d = e.inputValue,
          f = e.onInputChange,
          g = e.withInput
        return n.createElement(
          i.a,
          { style: m.root },
          r ? n.createElement(o.a, { Icon: r }) : n.createElement(s.a, { size: 'xxxLarge', uri: a }),
          g && f
            ? n.createElement(c.a, {
                isCompact: !0,
                leftAligned: !0,
                name: 'Creator Intro',
                onChange: f,
                placeholder: p,
                ref: l,
                style: [m.creatorIntroBubble, m.creatorIntroInputBubble],
                value: d,
              })
            : n.createElement(u.b, { style: m.creatorIntroBubble }, t),
        )
      }
    },
    a2Fh: function (e, r, t) {
      'use strict'
      t('z84I')
      var n = t('ERkP'),
        a = t('rHpw'),
        l = t('MWbm')
      var i = a.a.create(function (e) {
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
          o = e.maxWidthPx,
          s = e.style,
          c = e.withBorderRadius,
          u = e.withLineWrap,
          d = e.wordHeightPx,
          p = e.wordPercentWidths,
          m = e.wordSpacingPx,
          f = n.useMemo(
            function () {
              return p.map(function (e, o) {
                var s = m || a.a.theme.spaces.space4,
                  u = o !== p.length - 1 ? s : 0,
                  f = n.createElement(l.a, {
                    key: o,
                    style: [
                      i.word,
                      { width: t ? '100%' : ''.concat(e, '%') },
                      r && { backgroundColor: a.a.theme.colors[r] },
                      !t && { marginRight: u },
                      c && i.borderRadius,
                      d && { height: d },
                    ],
                  })
                return t
                  ? n.createElement(
                      l.a,
                      {
                        key: o,
                        style: [i.wordWrapper, t && { marginRight: u }, { height: t, width: ''.concat(e, '%') }],
                      },
                      f,
                    )
                  : f
              })
            },
            [r, t, c, d, m, p],
          )
        return n.createElement(l.a, { style: [i.root, u && i.lineWrap, { maxWidth: o || 'none' }, s] }, f)
      }
    },
    ahKC: function (e, r, t) {
      'use strict'
      t.r(r)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ExclusiveDemoVIPContent_viewer',
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
        hash: '4d9f2616539f76e98b06b36a7f2ca18a',
      }
      r.default = n
    },
    bCEw: function (e, r, t) {
      'use strict'
      var n = t('IGGJ')(t('K1iM')),
        a = t('23An'),
        l = t('Ud88'),
        i = t('aQQo'),
        o = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        c = t('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        p = c.useRef,
        m = c.useState,
        f = t('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, r) {
        var t = null != r ? r : g,
          i = l()
        s()
        var c = a(),
          f = p(new Set([t])),
          b = m(function () {
            return t
          }),
          h = b[0],
          k = b[1],
          w = m(function () {
            return t
          }),
          v = w[0],
          E = w[1]
        t !== v && (f.current.add(t), E(t), k(t))
        var R = u(
            function () {
              c.current && (f.current.add(g), k(g))
            },
            [c],
          ),
          _ = u(
            function (r, t) {
              var n =
                null != t && t.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: t.fetchPolicy,
                      networkCacheConfig: t.networkCacheConfig,
                      __nameForWarning: t.__nameForWarning,
                    }
                  : t
              if (c.current) {
                var a,
                  l = o(null !== (a = null == t ? void 0 : t.__environment) && void 0 !== a ? a : i, e, r, n)
                f.current.add(l), k(l)
              }
            },
            [i, e, k, c],
          ),
          F = p(!1)
        return (
          d(function () {
            return function () {
              F.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === F.current)
                return (
                  (F.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    _(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var r = f.current
              if (c.current) {
                var t,
                  a = (0, n.default)(r)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var l = t.value
                    if (l === h) break
                    r.delete(l),
                      'NullQueryReference' !== l.kind &&
                        (y(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [h, c, _, e],
          ),
          d(
            function () {
              return function () {
                var r,
                  t = (0, n.default)(f.current)
                try {
                  for (t.s(); !(r = t.n()).done; ) {
                    var a = r.value
                    'NullQueryReference' !== a.kind &&
                      (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (l) {
                  t.e(l)
                } finally {
                  t.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, _, R]
        )
      }
    },
    gaat: function (e, r, t) {
      'use strict'
      t.r(r)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeSignature_user',
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
        hash: '3d1df7110a30185c5e67c4784aecbc7a',
      }
      r.default = n
    },
    kbWR: function (e, r, t) {
      'use strict'
      t.r(r)
      var n,
        a,
        l,
        i,
        o,
        s,
        c,
        u,
        d = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: (a = [
                  { kind: 'Literal', name: 's', value: 44 },
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
                      (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_user' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: 'viewer',
                args: (i = [{ kind: 'Literal', name: 's', value: 21 }]),
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
                          l,
                          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_viewer' },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:21)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: n,
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
                      l,
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
                              (o = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'profile_image_url_https',
                                storageKey: null,
                              }),
                              (s = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                              (c = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'screen_name',
                                storageKey: null,
                              }),
                            ],
                            storageKey: null,
                          },
                          (u = {
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
                                    name: 'description',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
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
                          l,
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
                                  o,
                                  { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                  s,
                                  c,
                                ],
                                storageKey: null,
                              },
                              u,
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
                storageKey: 'viewer_v2(s:21)',
              },
            ],
          },
          params: {
            id: 'g5i27qp7tKYcFEzCEfrqDQ',
            metadata: {},
            name: 'SuperFollowsSubscribeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = '36f9c29d7da37ccc152178fe9dd49f46'), (r.default = d)
    },
    l62v: function (e, r, t) {
      'use strict'
      t.r(r)
      var n = {
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
                ],
                storageKey: null,
              },
              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeSignature_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '6332df025c991879109bc8c6125da19c',
      }
      r.default = n
    },
    n0Rl: function (e, r, t) {
      'use strict'
      t.d(r, 'b', function () {
        return Q
      })
      t('OZaJ')
      var n = t('ddV6'),
        a = t.n(n),
        l = t('VrFO'),
        i = t.n(l),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        d = t('5Yy7'),
        p = t.n(d),
        m = t('N+ot'),
        f = t.n(m),
        g = t('AuHH'),
        y = t.n(g),
        b = t('KEM+'),
        h = t.n(b),
        k = (t('2G9S'), t('ZUdG'), t('7x/C'), t('87if'), t('lTEL'), t('kYxP'), t('ERkP')),
        w = t('pXBW'),
        v = t('6/RC'),
        E = t('UIzd'),
        R = t.n(E),
        _ = t('kGix')
      t.d(r, 'a', function () {
        return _.a
      })
      var F = t('fs1G'),
        S = t('0KEI'),
        x = t('lU4h'),
        C = t.n(x),
        T = t('21nk'),
        I = t.n(T),
        P = t('bCEw'),
        K = t.n(P),
        L = t('Ud88'),
        B = t.n(L)
      function D(e) {
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
          var t,
            n = y()(e)
          if (r) {
            var a = y()(this).constructor
            t = Reflect.construct(n, arguments, a)
          } else t = n.apply(this, arguments)
          return f()(this, t)
        }
      }
      var W = function (e) {
          return (0, e.render)({ fetchStatus: _.a.LOADING, data: null, error: null, retry: F.a })
        },
        U = (function (e) {
          p()(t, e)
          var r = D(t)
          function t() {
            var e
            i()(this, t)
            for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l]
            return (e = r.call.apply(r, [this].concat(a))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              t,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, r) {
                    if (!(e instanceof w.a)) throw e
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
        })(k.Component),
        N = function (e) {
          var r = e.query,
            t = e.queryRef,
            n = e.render,
            a = I()(r, t)
          return n({ fetchStatus: _.a.LOADED, data: a, error: null, retry: F.a })
        },
        Q = function (e, r) {
          if (v.canUseDOM)
            return function (t) {
              var n = t.fetchPolicy,
                l = void 0 === n ? 'store-or-network' : n,
                i = t.render,
                o = t.variables,
                s = K()(e),
                c = a()(s, 2),
                u = c[0],
                d = c[1],
                p = Object(S.useCreateLocalApiErrorHandler)(r.errorConfig.context),
                m = C()(o),
                f = a()(m, 1)[0],
                g = k.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                k.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: l })
                  },
                  [l, d, f],
                ),
                u
                  ? k.createElement(
                      k.Suspense,
                      { fallback: k.createElement(W, { render: i }) },
                      k.createElement(
                        U,
                        { errorHandler: p(r.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (r, t) {
                          return r
                            ? i({ fetchStatus: _.a.FAILED, error: r, data: null, retry: t })
                            : k.createElement(N, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var t = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var l = n.render,
              i = n.variables,
              o = B()(),
              s = Object(S.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              c = C()(i),
              u = a()(c, 1)[0],
              d = t.get(o)
            if (d) return d
            var p = k.lazy(function () {
              return R()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return l({ fetchStatus: _.a.LOADED, data: e, error: null, retry: F.a })
                  },
                  function (e) {
                    return e instanceof w.a
                      ? (s(r.errorConfig.options || {})(e),
                        l({ fetchStatus: _.a.FAILED, data: null, error: e, retry: F.a }))
                      : k.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: t.set(o, e).get.bind(t, o) }
                })
            })
            return k.createElement(k.Suspense, null, k.createElement(p, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
