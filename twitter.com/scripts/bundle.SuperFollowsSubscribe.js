;(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    '21nk': function (e, r, n) {
      'use strict'
      var t = n('I9iR'),
        a = n('3KVO'),
        l = n('yLYC'),
        i = n('Ud88'),
        o = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, r, n) {
        o()
        var s,
          d = i(),
          p = r.fetchKey,
          m = r.fetchPolicy,
          f = r.source,
          g = r.variables,
          y = r.networkCacheConfig,
          h = l(e, g, y)
        if ('PreloadedQuery_DEPRECATED' === r.kind)
          h.request.node.params.name !== r.name && t(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: c(d, h.request.identifier, function () {
                return d === r.environment && null != f
                  ? d.executeWithSource({ operation: h, source: f })
                  : d.execute({ operation: h })
              }),
              fetchPolicy: m,
              query: h,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(d, h)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === r.environment ? f.ifEmpty(b) : (r.environment, b),
            fetchKey: p,
            fetchPolicy: m,
            query: h,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(s)
      }
    },
    '23An': function (e, r, n) {
      'use strict'
      var t = n('ERkP'),
        a = t.useEffect,
        l = t.useRef
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
    '9RBu': function (e, r, n) {
      'use strict'
      n.r(r),
        n.d(r, 'superFollowsSubscribeQuery', function () {
          return de
        })
      var t = n('ERkP'),
        a = (n('enFi'), n('rZeG')),
        l = n('kGix'),
        i = n('ddV6'),
        o = n.n(i),
        s = (n('ho0z'), n('1t7P'), n('jQ/y'), n('uFXj'), n('2G9S'), n('3XMw')),
        c = n.n(s),
        u = n('EyD/'),
        d = n('MWbm'),
        p = n('t62R'),
        m = n('rHpw'),
        f = n('a2Fh'),
        g = n('4zmP'),
        y = n('feOz'),
        h = n('aNKf'),
        b = [17, 7, 14, 11, 8, 12, 4, 11],
        k = t.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          t.createElement(p.b, { size: 'subtext3' }, c.a.fa70c77f),
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
            n = function (e) {
              return ''.concat(m.a.theme.colors.cellBackground).concat(e || '')
            },
            a = m.a.theme.colors.transparent
          return t.createElement(
            d.a,
            { style: [v.root, r] },
            t.createElement(
              d.a,
              { style: v.mockTweet },
              t.createElement(d.a, { style: v.fakeBodyCopy }, t.createElement(f.a, { wordPercentWidths: b })),
              t.createElement(
                d.a,
                { style: v.educationCallout },
                t.createElement(g.a, { Icon: u.a, text: k, type: 'exclusive', withThumbnail: !0 }),
              ),
              t.createElement(y.a, {
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
            t.createElement(h.a, { colors: [n(), n(), n(50), a], locations: [0, 0.25, 0.75, 1], style: v.gradient }),
            t.createElement(h.a, { colors: [n(), n(99), n(50), a], locations: [0, 0.5, 0.75, 1], style: v.gradient }),
          )
        },
        R = n('jhWN'),
        _ = n('jV+4'),
        F = n('9VO7'),
        S = n('9Xij'),
        x = n('jAXQ'),
        C = n.n(x),
        T = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        I = void 0 !== w ? w : (w = n('ahKC'))
      function P(e) {
        var r = e.wordWidths
        return t.createElement(
          d.a,
          { style: U.root },
          t.createElement(S.a, { ratio: 1, style: U.mockUserAvatar }),
          t.createElement(
            d.a,
            { style: U.mockTweetContent },
            t.createElement(
              d.a,
              { style: U.mockUserNameContainer },
              t.createElement(f.a, {
                color: 'text',
                maxWidthPx: 18,
                style: U.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              t.createElement(f.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            t.createElement(f.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: r }),
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
            n = e.viewer,
            a = C()(I, n),
            l = (null == a ? void 0 : a.legacy) || {},
            i = l.name,
            o = l.profile_image_url_https,
            s = l.protected,
            c = l.screen_name,
            u = l.verified
          return i && c && o
            ? t.createElement(
                d.a,
                { style: [W.root, r] },
                t.createElement(
                  d.a,
                  { style: W.mockBackgroundTweets },
                  t.createElement(P, { wordWidths: T.backgroundTopTweet }),
                  t.createElement(P, { wordWidths: T.backgroundBottomTweet }),
                ),
                t.createElement(
                  d.a,
                  { style: W.mockFocalTweetContainer },
                  t.createElement(
                    d.a,
                    { style: W.mockFocalTweet },
                    t.createElement(d.a, null, t.createElement(R.a, { focusable: !1, size: 'xLarge', uri: o })),
                    t.createElement(
                      d.a,
                      { style: W.mockFocalTweetContent },
                      t.createElement(_.a, {
                        isProtected: s,
                        isVerified: u,
                        name: i,
                        nameSize: 'body',
                        screenName: c,
                        screenNameSize: 'body',
                      }),
                      t.createElement(
                        d.a,
                        { style: W.superFollowIndicatorContainer },
                        t.createElement(F.a, { type: 'superFollower' }),
                      ),
                      t.createElement(f.a, {
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
        Q = n('v//M'),
        A = c.a.f0c99eff,
        H = void 0 !== K ? K : (K = n('XcCA')),
        M = function (e) {
          var r = e.style,
            n = e.user,
            a = C()(H, n).legacy,
            l = a.profile_image_url_https,
            i = a.screen_name
          return t.createElement(
            d.a,
            { style: [O.signature, r] },
            i && t.createElement(p.b, { color: 'gray700', weight: 'bold' }, A({ screenName: i })),
            l && t.createElement(R.a, { size: 'medium', uri: l }),
          )
        },
        O = m.a.create(function (e) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
          }
        }),
        j = function (e) {
          var r = e.style
          return t.createElement(
            p.b,
            { color: 'gray700', style: r },
            t.createElement(
              c.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              t.createElement(
                p.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                c.a.d822ae43,
              ),
            ),
          )
        },
        z = n('FEMQ'),
        V = n('ID86'),
        X = function (e) {
          var r = e.description,
            n = e.style,
            a = e.title
          return t.createElement(
            d.a,
            { style: n },
            t.createElement(
              p.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              a,
            ),
            r && t.createElement(p.b, { color: 'gray700', style: q.description }, r),
          )
        },
        q = m.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        }),
        G = n('Ty5D'),
        J = n('/yvb'),
        Y = n('cHvH'),
        $ = n('sgih'),
        Z = c.a.cbc8ce27,
        ee = c.a.b600eb88,
        re = c.a.b08bbeb4,
        ne = c.a.d2613122,
        te = c.a.g61ed8a4,
        ae = c.a.c3d23f10,
        le = c.a.d338f53e,
        ie = void 0 !== L ? L : (L = n('l62v')),
        oe = void 0 !== B ? B : (B = n('E0zt')),
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
            n = e.onRetry,
            a = e.screenName,
            l = e.user,
            i = e.viewer,
            s = C()(ie, l),
            c = C()(oe, i),
            u = Object(G.g)(),
            p = function () {
              u.push('/'.concat(a, '/superfollows'))
            },
            f = function () {
              var e, r, n, a
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
                  null !== (n = s.legacy) &&
                  void 0 !== n &&
                  n.profile_image_url_https &&
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
                h = y.description,
                b = y.title
              return t.createElement(
                t.Fragment,
                null,
                t.createElement(z.a, { creatorIntro: g, image: u, name: i }),
                t.createElement(X, { description: h || void 0, style: se.titleDescription, title: b || Z }),
                t.createElement(M, { style: se.signature, user: s }),
                t.createElement(E, { style: se.demoTweet }),
                t.createElement(X, { description: re, style: se.titleDescription, title: ee }),
                c ? t.createElement(N, { style: [se.demoTweet, se.demoVIPTweetMarginTop], viewer: c }) : null,
                t.createElement(j, { style: se.disclaimer }),
                t.createElement(
                  d.a,
                  { style: se.subscribeButtonContainer },
                  t.createElement(
                    J.a,
                    {
                      backgroundColor: 'plum500',
                      borderColor: 'transparent',
                      color: 'white',
                      disabled: !0,
                      onPress: p,
                      style: se.subscribeButton,
                    },
                    ne({ price: '$X.XX' }),
                  ),
                ),
              )
            },
            g = function () {
              return t.createElement(
                t.Fragment,
                null,
                t.createElement(X, { description: ae, style: se.errorTitleDescription, title: te }),
                t.createElement(J.a, { onPress: n, style: se.errorButton, type: 'brandFilled' }, le),
              )
            }
          return t.createElement(Y.a, null, function (e) {
            var a = e.windowWidth > m.a.theme.breakpoints.small
            return t.createElement(
              $.a,
              {
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: p,
                style: [se.sheet, a ? se.wide : se.narrow],
                type: 'full',
                withMask: !0,
              },
              t.createElement(V.a, null),
              t.createElement(Q.a, { fetchStatus: r, onRequestRetry: n, render: f, renderFailure: g, retryable: !1 }),
            )
          })
        },
        ue = n('n0Rl'),
        de = void 0 !== D ? D : (D = n('kbWR')),
        pe = Object(ue.b)(de, { errorConfig: { context: 'SUPER_FOLLOWS_SUBSCRIPTION_SCREEN' } })
      r.default = function () {
        var e = Object(G.i)().screenName || '',
          r = { screenName: Object(a.a)(e) }
        return t.createElement(pe, {
          render: function (r) {
            var n,
              a,
              i,
              o = r.data,
              s = r.fetchStatus,
              c = r.retry,
              u = null == o || null === (n = o.user) || void 0 === n ? void 0 : n.result,
              d =
                null == o || null === (a = o.viewer) || void 0 === a || null === (i = a.user_results) || void 0 === i
                  ? void 0
                  : i.result
            return t.createElement(ce, {
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
    E0zt: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ExclusiveDemoVIPContent_viewer' }],
        type: 'User',
        abstractKey: null,
        hash: 'fe467192df543b45c5ba1f84fd9d3c94',
      }
      r.default = t
    },
    FEMQ: function (e, r, n) {
      'use strict'
      n('ho0z'), n('uFXj')
      var t = n('ERkP'),
        a = n('tI3i'),
        l = n.n(a),
        i = n('JWc1'),
        o = n('t62R'),
        s = n('rHpw'),
        c = n('3XMw'),
        u = n.n(c),
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
          n = e.creatorIntroInputRef,
          a = e.creatorIntroInputValue,
          s = e.image,
          c = e.name,
          m = e.onInputChange,
          f = e.withInput
        return (
          l()('string' == typeof c, 'name must be a string'),
          t.createElement(
            t.Fragment,
            null,
            t.createElement(
              o.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              t.createElement(u.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: c }, t.createElement('br', null)),
            ),
            t.createElement(o.b, { size: 'headline2', style: p.subheader }, d),
            s
              ? t.createElement(i.a, {
                  creatorIntro: r,
                  image: s,
                  inputRef: n,
                  inputValue: a,
                  onInputChange: m,
                  withInput: f,
                })
              : null,
          )
        )
      }
    },
    ID86: function (e, r, n) {
      'use strict'
      var t = n('ERkP'),
        a = n('MWbm'),
        l = n('rHpw'),
        i = n('+Eiw')
      r.a = function () {
        return t.createElement(a.a, { style: o.blob })
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
    JWc1: function (e, r, n) {
      'use strict'
      n('uFXj')
      var t = n('ERkP'),
        a = n('3XMw'),
        l = n.n(a),
        i = n('MWbm'),
        o = n('j7Bv'),
        s = n('jhWN'),
        c = n('6OUF'),
        u = n('t62R'),
        d = n('rHpw'),
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
          n = e.creatorIntro,
          a = e.image,
          l = e.inputRef,
          d = e.inputValue,
          f = e.onInputChange,
          g = e.withInput
        return t.createElement(
          i.a,
          { style: m.root },
          r ? t.createElement(o.a, { Icon: r }) : t.createElement(s.a, { size: 'xxxLarge', uri: a }),
          g && f
            ? t.createElement(c.a, {
                isCompact: !0,
                leftAligned: !0,
                name: 'Creator Intro',
                onChange: f,
                placeholder: p,
                ref: l,
                style: [m.creatorIntroBubble, m.creatorIntroInputBubble],
                value: d,
              })
            : t.createElement(u.b, { style: m.creatorIntroBubble }, n),
        )
      }
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
    a2Fh: function (e, r, n) {
      'use strict'
      n('z84I')
      var t = n('ERkP'),
        a = n('rHpw'),
        l = n('MWbm')
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
          n = e.lineHeightPx,
          o = e.maxWidthPx,
          s = e.style,
          c = e.withBorderRadius,
          u = e.withLineWrap,
          d = e.wordHeightPx,
          p = e.wordPercentWidths,
          m = e.wordSpacingPx,
          f = t.useMemo(
            function () {
              return p.map(function (e, o) {
                var s = m || a.a.theme.spaces.space4,
                  u = o !== p.length - 1 ? s : 0,
                  f = t.createElement(l.a, {
                    key: o,
                    style: [
                      i.word,
                      { width: n ? '100%' : ''.concat(e, '%') },
                      r && { backgroundColor: a.a.theme.colors[r] },
                      !n && { marginRight: u },
                      c && i.borderRadius,
                      d && { height: d },
                    ],
                  })
                return n
                  ? t.createElement(
                      l.a,
                      {
                        key: o,
                        style: [i.wordWrapper, n && { marginRight: u }, { height: n, width: ''.concat(e, '%') }],
                      },
                      f,
                    )
                  : f
              })
            },
            [r, n, c, d, m, p],
          )
        return t.createElement(l.a, { style: [i.root, u && i.lineWrap, { maxWidth: o || 'none' }, s] }, f)
      }
    },
    ahKC: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = {
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
      r.default = t
    },
    bCEw: function (e, r, n) {
      'use strict'
      var t = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        l = n('Ud88'),
        i = n('aQQo'),
        o = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        c = n('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        p = c.useRef,
        m = c.useState,
        f = n('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, r) {
        var n = null != r ? r : g,
          i = l()
        s()
        var c = a(),
          f = p(new Set([n])),
          h = m(function () {
            return n
          }),
          b = h[0],
          k = h[1],
          w = m(function () {
            return n
          }),
          v = w[0],
          E = w[1]
        n !== v && (f.current.add(n), E(n), k(n))
        var R = u(
            function () {
              c.current && (f.current.add(g), k(g))
            },
            [c],
          ),
          _ = u(
            function (r, n) {
              var t =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (c.current) {
                var a,
                  l = o(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : i, e, r, t)
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
                    'NullQueryReference' !== b.kind &&
                    _(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var r = f.current
              if (c.current) {
                var n,
                  a = (0, t.default)(r)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var l = n.value
                    if (l === b) break
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
            [b, c, _, e],
          ),
          d(
            function () {
              return function () {
                var r,
                  n = (0, t.default)(f.current)
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    var a = r.value
                    'NullQueryReference' !== a.kind &&
                      (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (l) {
                  n.e(l)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, _, R]
        )
      }
    },
    kbWR: function (e, r, n) {
      'use strict'
      n.r(r)
      var t,
        a,
        l,
        i,
        o,
        s,
        c,
        u,
        d = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
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
            argumentDefinitions: t,
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
            id: 'DYogEMhLc5jr2Od5arG01A',
            metadata: {},
            name: 'SuperFollowsSubscribeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = '36f9c29d7da37ccc152178fe9dd49f46'), (r.default = d)
    },
    l62v: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = {
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSignature_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f0707a42654d9c164cd7649ac3beba43',
      }
      r.default = t
    },
    n0Rl: function (e, r, n) {
      'use strict'
      n.d(r, 'b', function () {
        return Q
      })
      n('OZaJ')
      var t = n('ddV6'),
        a = n.n(t),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        f = n.n(m),
        g = n('AuHH'),
        y = n.n(g),
        h = n('KEM+'),
        b = n.n(h),
        k = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        w = n('pXBW'),
        v = n('6/RC'),
        E = n('UIzd'),
        R = n.n(E),
        _ = n('kGix')
      n.d(r, 'a', function () {
        return _.a
      })
      var F = n('fs1G'),
        S = n('0KEI'),
        x = n('lU4h'),
        C = n.n(x),
        T = n('21nk'),
        I = n.n(T),
        P = n('bCEw'),
        K = n.n(P),
        L = n('Ud88'),
        B = n.n(L)
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
          var n,
            t = y()(e)
          if (r) {
            var a = y()(this).constructor
            n = Reflect.construct(t, arguments, a)
          } else n = t.apply(this, arguments)
          return f()(this, n)
        }
      }
      var W = function (e) {
          return (0, e.render)({ fetchStatus: _.a.LOADING, data: null, error: null, retry: F.a })
        },
        U = (function (e) {
          p()(n, e)
          var r = D(n)
          function n() {
            var e
            i()(this, n)
            for (var t = arguments.length, a = new Array(t), l = 0; l < t; l++) a[l] = arguments[l]
            return (e = r.call.apply(r, [this].concat(a))), b()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
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
            n
          )
        })(k.Component),
        N = function (e) {
          var r = e.query,
            n = e.queryRef,
            t = e.render,
            a = I()(r, n)
          return t({ fetchStatus: _.a.LOADED, data: a, error: null, retry: F.a })
        },
        Q = function (e, r) {
          if (v.canUseDOM)
            return function (n) {
              var t = n.fetchPolicy,
                l = void 0 === t ? 'store-or-network' : t,
                i = n.render,
                o = n.variables,
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
                        function (r, n) {
                          return r
                            ? i({ fetchStatus: _.a.FAILED, error: r, data: null, retry: n })
                            : k.createElement(N, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (t) {
            t.fetchPolicy
            var l = t.render,
              i = t.variables,
              o = B()(),
              s = Object(S.useCreateLocalApiErrorHandler)(r.errorConfig.context),
              c = C()(i),
              u = a()(c, 1)[0],
              d = n.get(o)
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
                  return { default: n.set(o, e).get.bind(n, o) }
                })
            })
            return k.createElement(k.Suspense, null, k.createElement(p, null))
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
