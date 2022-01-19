;(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    '9RBu': function (e, a, l) {
      'use strict'
      l.r(a),
        l.d(a, 'superFollowsSubscribeQuery', function () {
          return se
        })
      var t = l('ERkP'),
        n = (l('enFi'), l('rZeG')),
        r = l('kGix'),
        i = l('ddV6'),
        s = l.n(i),
        o = (l('ho0z'), l('1t7P'), l('jQ/y'), l('uFXj'), l('2G9S'), l('3XMw')),
        c = l.n(o),
        u = l('EyD/'),
        d = l('MWbm'),
        m = l('t62R'),
        p = l('rHpw'),
        g = l('a2Fh'),
        y = l('4zmP'),
        w = l('feOz'),
        f = l('aNKf'),
        k = [17, 7, 14, 11, 8, 12, 4, 11],
        b = t.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          t.createElement(m.b, { size: 'subtext3' }, c.a.fa70c77f),
        )
      var h,
        v = p.a.create(function (e) {
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
        F = function (e) {
          var a = e.style,
            l = function (e) {
              return ''.concat(p.a.theme.colors.cellBackground).concat(e || '')
            },
            n = p.a.theme.colors.transparent
          return t.createElement(
            d.a,
            { style: [v.root, a] },
            t.createElement(
              d.a,
              { style: v.mockTweet },
              t.createElement(d.a, { style: v.fakeBodyCopy }, t.createElement(g.a, { wordPercentWidths: k })),
              t.createElement(
                d.a,
                { style: v.educationCallout },
                t.createElement(y.a, { Icon: u.a, text: b, type: 'exclusive', withThumbnail: !0 }),
              ),
              t.createElement(w.a, {
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
            t.createElement(f.a, { colors: [l(), l(), l(50), n], locations: [0, 0.25, 0.75, 1], style: v.gradient }),
            t.createElement(f.a, { colors: [l(), l(99), l(50), n], locations: [0, 0.5, 0.75, 1], style: v.gradient }),
          )
        },
        _ = l('jhWN'),
        E = l('jV+4'),
        S = l('9VO7'),
        T = l('9Xij'),
        x = l('jAXQ'),
        K = l.n(x),
        R = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        C = void 0 !== h ? h : (h = l('ahKC'))
      function L(e) {
        var a = e.wordWidths
        return t.createElement(
          d.a,
          { style: U.root },
          t.createElement(T.a, { ratio: 1, style: U.mockUserAvatar }),
          t.createElement(
            d.a,
            { style: U.mockTweetContent },
            t.createElement(
              d.a,
              { style: U.mockUserNameContainer },
              t.createElement(g.a, {
                color: 'text',
                maxWidthPx: 18,
                style: U.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              t.createElement(g.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            t.createElement(g.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: a }),
          ),
        )
      }
      var B,
        P,
        W,
        D = p.a.create(function (e) {
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
        U = p.a.create(function (e) {
          return {
            root: { flexDirection: 'row', marginBottom: e.spaces.space8, padding: e.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: e.colors.gray300,
              borderRadius: e.borderRadii.infinite,
              height: p.a.theme.spaces.space40,
              width: p.a.theme.spaces.space40,
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
        I = function (e) {
          var a = e.style,
            l = e.viewer,
            n = K()(C, l),
            r = (null == n ? void 0 : n.legacy) || {},
            i = r.name,
            s = r.profile_image_url_https,
            o = r.protected,
            c = r.screen_name,
            u = r.verified
          return i && c && s
            ? t.createElement(
                d.a,
                { style: [D.root, a] },
                t.createElement(
                  d.a,
                  { style: D.mockBackgroundTweets },
                  t.createElement(L, { wordWidths: R.backgroundTopTweet }),
                  t.createElement(L, { wordWidths: R.backgroundBottomTweet }),
                ),
                t.createElement(
                  d.a,
                  { style: D.mockFocalTweetContainer },
                  t.createElement(
                    d.a,
                    { style: D.mockFocalTweet },
                    t.createElement(d.a, null, t.createElement(_.a, { focusable: !1, size: 'xLarge', uri: s })),
                    t.createElement(
                      d.a,
                      { style: D.mockFocalTweetContent },
                      t.createElement(E.a, {
                        isProtected: o,
                        isVerified: u,
                        name: i,
                        nameSize: 'body',
                        screenName: c,
                        screenNameSize: 'body',
                      }),
                      t.createElement(
                        d.a,
                        { style: D.superFollowIndicatorContainer },
                        t.createElement(S.a, { type: 'superFollower' }),
                      ),
                      t.createElement(g.a, {
                        style: D.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: R.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        },
        N = l('v//M'),
        j = l('VTDR'),
        H = l('9VLy'),
        z = function (e) {
          var a = e.style
          return t.createElement(
            m.b,
            { color: 'gray700', style: a },
            t.createElement(
              c.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              t.createElement(
                m.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                c.a.d822ae43,
              ),
            ),
          )
        },
        M = l('FEMQ'),
        V = function (e) {
          var a = e.description,
            l = e.style,
            n = e.title
          return t.createElement(
            d.a,
            { style: l },
            t.createElement(
              m.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              n,
            ),
            a && t.createElement(m.b, { color: 'gray700', style: A.description }, a),
          )
        },
        A = p.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        }),
        O = l('Ty5D'),
        Q = l('/yvb'),
        X = l('cHvH'),
        G = l('sgih'),
        q = c.a.cbc8ce27,
        $ = c.a.b600eb88,
        J = c.a.b08bbeb4,
        Y = c.a.d2613122,
        Z = c.a.g61ed8a4,
        ee = c.a.c3d23f10,
        ae = c.a.d338f53e,
        le = void 0 !== B ? B : (B = l('l62v')),
        te = void 0 !== P ? P : (P = l('E0zt')),
        ne = p.a.create(function (e) {
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
        re = function (e) {
          var a = e.fetchStatus,
            l = e.onRetry,
            n = e.screenName,
            r = e.user,
            i = e.viewer,
            o = K()(le, r),
            c = K()(te, i),
            u = Object(O.g)(),
            m = function () {
              u.push('/'.concat(n, '/superfollows'))
            },
            g = function () {
              var e, a, l, n
              if (
                !(
                  null != o &&
                  null !== (e = o.super_follow_creator_benefits) &&
                  void 0 !== e &&
                  e.benefits_data &&
                  null != o &&
                  null !== (a = o.legacy) &&
                  void 0 !== a &&
                  a.name &&
                  null != o &&
                  null !== (l = o.legacy) &&
                  void 0 !== l &&
                  l.profile_image_url_https &&
                  null != o &&
                  null !== (n = o.super_follow_creator_benefits) &&
                  void 0 !== n &&
                  n.creator_intro
                )
              )
                return null
              var r = o.legacy,
                i = r.name,
                u = r.profile_image_url_https,
                p = o.super_follow_creator_benefits,
                g = p.benefits_data,
                y = p.creator_intro,
                w = s()(g, 1)[0],
                f = w.description,
                k = w.title
              return t.createElement(
                t.Fragment,
                null,
                t.createElement(M.a, { creatorIntro: y, image: u, name: i }),
                t.createElement(V, { description: f || void 0, style: ne.titleDescription, title: k || q }),
                t.createElement(H.a, { style: ne.signature, user: o }),
                t.createElement(F, { style: ne.demoTweet }),
                t.createElement(V, { description: J, style: ne.titleDescription, title: $ }),
                c ? t.createElement(I, { style: [ne.demoTweet, ne.demoVIPTweetMarginTop], viewer: c }) : null,
                t.createElement(z, { style: ne.disclaimer }),
                t.createElement(
                  d.a,
                  { style: ne.subscribeButtonContainer },
                  t.createElement(
                    Q.a,
                    {
                      backgroundColor: 'plum500',
                      borderColor: 'transparent',
                      color: 'white',
                      disabled: !0,
                      onPress: m,
                      style: ne.subscribeButton,
                    },
                    Y({ price: '$X.XX' }),
                  ),
                ),
              )
            },
            y = function () {
              return t.createElement(
                t.Fragment,
                null,
                t.createElement(V, { description: ee, style: ne.errorTitleDescription, title: Z }),
                t.createElement(Q.a, { onPress: l, style: ne.errorButton, type: 'brandFilled' }, ae),
              )
            }
          return t.createElement(X.a, null, function (e) {
            var n = e.windowWidth > p.a.theme.breakpoints.small
            return t.createElement(
              G.a,
              {
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: m,
                style: [ne.sheet, n ? ne.wide : ne.narrow],
                type: 'full',
                withMask: !0,
              },
              t.createElement(j.a, null),
              t.createElement(N.a, { fetchStatus: a, onRequestRetry: l, render: g, renderFailure: y, retryable: !1 }),
            )
          })
        },
        ie = l('n0Rl'),
        se = void 0 !== W ? W : (W = l('kbWR')),
        oe = Object(ie.b)(se, { errorConfig: { context: 'SUPER_FOLLOWS_SUBSCRIPTION_SCREEN' } })
      a.default = function () {
        var e = Object(O.i)().screenName || '',
          a = { screenName: Object(n.a)(e) }
        return t.createElement(oe, {
          render: function (a) {
            var l,
              n,
              i,
              s = a.data,
              o = a.fetchStatus,
              c = a.retry,
              u = null == s || null === (l = s.user) || void 0 === l ? void 0 : l.result,
              d =
                null == s || null === (n = s.viewer) || void 0 === n || null === (i = n.user_results) || void 0 === i
                  ? void 0
                  : i.result
            return t.createElement(re, {
              fetchStatus: Object(r.b)(
                o,
                'User' === (null == u ? void 0 : u.__typename) && 'User' === (null == d ? void 0 : d.__typename),
              ),
              onRetry: c,
              screenName: e,
              user: u || void 0,
              viewer: d || void 0,
            })
          },
          variables: a,
        })
      }
    },
    E0zt: function (e, a, l) {
      'use strict'
      l.r(a)
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
      a.default = t
    },
    a2Fh: function (e, a, l) {
      'use strict'
      l('z84I')
      var t = l('ERkP'),
        n = l('rHpw'),
        r = l('MWbm')
      var i = n.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'hidden', width: '100%' },
          borderRadius: { borderRadius: e.borderRadii.infinite },
          lineWrap: { flexWrap: 'wrap', overflow: 'visible' },
          word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 },
          wordWrapper: { justifyContent: 'center' },
        }
      })
      a.a = function (e) {
        var a = e.color,
          l = e.lineHeightPx,
          s = e.maxWidthPx,
          o = e.style,
          c = e.withBorderRadius,
          u = e.withLineWrap,
          d = e.wordHeightPx,
          m = e.wordPercentWidths,
          p = e.wordSpacingPx,
          g = t.useMemo(
            function () {
              return m.map(function (e, s) {
                var o = p || n.a.theme.spaces.space4,
                  u = s !== m.length - 1 ? o : 0,
                  g = t.createElement(r.a, {
                    key: s,
                    style: [
                      i.word,
                      { width: l ? '100%' : ''.concat(e, '%') },
                      a && { backgroundColor: n.a.theme.colors[a] },
                      !l && { marginRight: u },
                      c && i.borderRadius,
                      d && { height: d },
                    ],
                  })
                return l
                  ? t.createElement(
                      r.a,
                      {
                        key: s,
                        style: [i.wordWrapper, l && { marginRight: u }, { height: l, width: ''.concat(e, '%') }],
                      },
                      g,
                    )
                  : g
              })
            },
            [a, l, c, d, p, m],
          )
        return t.createElement(r.a, { style: [i.root, u && i.lineWrap, { maxWidth: s || 'none' }, o] }, g)
      }
    },
    ahKC: function (e, a, l) {
      'use strict'
      l.r(a)
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
      a.default = t
    },
    kbWR: function (e, a, l) {
      'use strict'
      l.r(a)
      var t,
        n,
        r,
        i,
        s,
        o,
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
                args: (n = [
                  { kind: 'Literal', name: 's', value: 45 },
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
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                          r,
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
                args: n,
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
                      r,
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
                              (s = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'profile_image_url_https',
                                storageKey: null,
                              }),
                              (o = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
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
                          r,
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
                                  s,
                                  { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                  o,
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
      ;(d.hash = '36f9c29d7da37ccc152178fe9dd49f46'), (a.default = d)
    },
    l62v: function (e, a, l) {
      'use strict'
      l.r(a)
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
      a.default = t
    },
  },
])
//# sourceMappingURL=WIPED
