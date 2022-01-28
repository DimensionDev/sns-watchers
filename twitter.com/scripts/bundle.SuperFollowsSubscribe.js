;(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
    '9RBu': function (e, a, l) {
      'use strict'
      l.r(a),
        l.d(a, 'superFollowsSubscribeQuery', function () {
          return oe
        })
      var t = l('ERkP'),
        n = l.n(t),
        r = (l('enFi'), l('rZeG')),
        i = l('kGix'),
        s = l('ddV6'),
        o = l.n(s),
        c = (l('ho0z'), l('1t7P'), l('jQ/y'), l('uFXj'), l('2G9S'), l('3XMw')),
        u = l.n(c),
        d = l('EyD/'),
        m = l('MWbm'),
        p = l('t62R'),
        g = l('rHpw'),
        y = l('a2Fh'),
        w = l('4zmP'),
        f = l('feOz'),
        k = l('aNKf'),
        b = [17, 7, 14, 11, 8, 12, 4, 11],
        h = n.a.createElement(
          u.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          n.a.createElement(p.b, { size: 'subtext3' }, u.a.fa70c77f),
        )
      var v,
        F = g.a.create(function (e) {
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
        _ = function (e) {
          var a = e.style,
            l = function (e) {
              return ''.concat(g.a.theme.colors.cellBackground).concat(e || '')
            },
            t = g.a.theme.colors.transparent
          return n.a.createElement(
            m.a,
            { style: [F.root, a] },
            n.a.createElement(
              m.a,
              { style: F.mockTweet },
              n.a.createElement(m.a, { style: F.fakeBodyCopy }, n.a.createElement(y.a, { wordPercentWidths: b })),
              n.a.createElement(
                m.a,
                { style: F.educationCallout },
                n.a.createElement(w.a, { Icon: d.a, text: h, type: 'exclusive', withThumbnail: !0 }),
              ),
              n.a.createElement(f.a, {
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
            n.a.createElement(k.a, { colors: [l(), l(), l(50), t], locations: [0, 0.25, 0.75, 1], style: F.gradient }),
            n.a.createElement(k.a, { colors: [l(), l(99), l(50), t], locations: [0, 0.5, 0.75, 1], style: F.gradient }),
          )
        },
        E = l('jhWN'),
        S = l('jV+4'),
        T = l('9VO7'),
        x = l('9Xij'),
        K = l('jAXQ'),
        R = l.n(K),
        C = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        L = void 0 !== v ? v : (v = l('ahKC'))
      function B(e) {
        var a = e.wordWidths
        return n.a.createElement(
          m.a,
          { style: N.root },
          n.a.createElement(x.a, { ratio: 1, style: N.mockUserAvatar }),
          n.a.createElement(
            m.a,
            { style: N.mockTweetContent },
            n.a.createElement(
              m.a,
              { style: N.mockUserNameContainer },
              n.a.createElement(y.a, {
                color: 'text',
                maxWidthPx: 18,
                style: N.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              n.a.createElement(y.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            n.a.createElement(y.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: a }),
          ),
        )
      }
      var P,
        W,
        U,
        D = g.a.create(function (e) {
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
        N = g.a.create(function (e) {
          return {
            root: { flexDirection: 'row', marginBottom: e.spaces.space8, padding: e.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: e.colors.gray300,
              borderRadius: e.borderRadii.infinite,
              height: g.a.theme.spaces.space40,
              width: g.a.theme.spaces.space40,
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
        j = function (e) {
          var a = e.style,
            l = e.viewer,
            t = R()(L, l),
            r = (null == t ? void 0 : t.legacy) || {},
            i = r.name,
            s = r.profile_image_url_https,
            o = r.protected,
            c = r.screen_name,
            u = r.verified
          return i && c && s
            ? n.a.createElement(
                m.a,
                { style: [D.root, a] },
                n.a.createElement(
                  m.a,
                  { style: D.mockBackgroundTweets },
                  n.a.createElement(B, { wordWidths: C.backgroundTopTweet }),
                  n.a.createElement(B, { wordWidths: C.backgroundBottomTweet }),
                ),
                n.a.createElement(
                  m.a,
                  { style: D.mockFocalTweetContainer },
                  n.a.createElement(
                    m.a,
                    { style: D.mockFocalTweet },
                    n.a.createElement(m.a, null, n.a.createElement(E.a, { focusable: !1, size: 'xLarge', uri: s })),
                    n.a.createElement(
                      m.a,
                      { style: D.mockFocalTweetContent },
                      n.a.createElement(S.a, {
                        isProtected: o,
                        isVerified: u,
                        name: i,
                        nameSize: 'body',
                        screenName: c,
                        screenNameSize: 'body',
                      }),
                      n.a.createElement(
                        m.a,
                        { style: D.superFollowIndicatorContainer },
                        n.a.createElement(T.a, { type: 'superFollower' }),
                      ),
                      n.a.createElement(y.a, {
                        style: D.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: C.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        },
        I = l('v//M'),
        H = l('VTDR'),
        z = l('MAc7'),
        M = l('9VLy'),
        V = function (e) {
          var a = e.style
          return n.a.createElement(
            p.b,
            { color: 'gray700', style: a },
            n.a.createElement(
              u.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              n.a.createElement(
                p.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                u.a.d822ae43,
              ),
            ),
          )
        },
        A = function (e) {
          var a = e.description,
            l = e.style,
            t = e.title
          return n.a.createElement(
            m.a,
            { style: l },
            n.a.createElement(
              p.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              t,
            ),
            a && n.a.createElement(p.b, { color: 'gray700', style: O.description }, a),
          )
        },
        O = g.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        }),
        Q = l('Ty5D'),
        X = l('/yvb'),
        G = l('cHvH'),
        q = l('sgih'),
        $ = u.a.cbc8ce27,
        J = u.a.b600eb88,
        Y = u.a.b08bbeb4,
        Z = u.a.d2613122,
        ee = u.a.g61ed8a4,
        ae = u.a.c3d23f10,
        le = u.a.d338f53e,
        te = void 0 !== P ? P : (P = l('l62v')),
        ne = void 0 !== W ? W : (W = l('E0zt')),
        re = g.a.create(function (e) {
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
        ie = function (e) {
          var a = e.fetchStatus,
            l = e.onRetry,
            t = e.screenName,
            r = e.user,
            i = e.viewer,
            s = R()(te, r),
            c = R()(ne, i),
            u = Object(Q.g)(),
            d = function () {
              u.push('/'.concat(t, '/superfollows'))
            },
            p = function () {
              var e, a, l, t
              if (
                !(
                  null != s &&
                  null !== (e = s.super_follow_creator_benefits) &&
                  void 0 !== e &&
                  e.benefits_data &&
                  null != s &&
                  null !== (a = s.legacy) &&
                  void 0 !== a &&
                  a.name &&
                  null != s &&
                  null !== (l = s.legacy) &&
                  void 0 !== l &&
                  l.profile_image_url_https &&
                  null != s &&
                  null !== (t = s.super_follow_creator_benefits) &&
                  void 0 !== t &&
                  t.creator_intro
                )
              )
                return null
              var r = s.legacy,
                i = r.name,
                u = r.profile_image_url_https,
                p = s.super_follow_creator_benefits,
                g = p.benefits_data,
                y = p.creator_intro,
                w = o()(g, 1)[0],
                f = w.description,
                k = w.title
              return n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(z.a, { imageUrl: u, name: i, value: y }),
                n.a.createElement(A, { description: f || void 0, style: re.titleDescription, title: k || $ }),
                n.a.createElement(M.a, { style: re.signature, user: s }),
                n.a.createElement(_, { style: re.demoTweet }),
                n.a.createElement(A, { description: Y, style: re.titleDescription, title: J }),
                c ? n.a.createElement(j, { style: [re.demoTweet, re.demoVIPTweetMarginTop], viewer: c }) : null,
                n.a.createElement(V, { style: re.disclaimer }),
                n.a.createElement(
                  m.a,
                  { style: re.subscribeButtonContainer },
                  n.a.createElement(
                    X.a,
                    {
                      backgroundColor: 'plum500',
                      borderColor: 'transparent',
                      color: 'white',
                      disabled: !0,
                      onPress: d,
                      style: re.subscribeButton,
                    },
                    Z({ price: '$X.XX' }),
                  ),
                ),
              )
            },
            y = function () {
              return n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(A, { description: ae, style: re.errorTitleDescription, title: ee }),
                n.a.createElement(X.a, { onPress: l, style: re.errorButton, type: 'brandFilled' }, le),
              )
            }
          return n.a.createElement(G.a, null, function (e) {
            var t = e.windowWidth > g.a.theme.breakpoints.small
            return n.a.createElement(
              q.a,
              {
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: d,
                style: [re.sheet, t ? re.wide : re.narrow],
                type: 'full',
                withMask: !0,
              },
              n.a.createElement(H.a, null),
              n.a.createElement(I.a, { fetchStatus: a, onRequestRetry: l, render: p, renderFailure: y, retryable: !1 }),
            )
          })
        },
        se = l('n0Rl'),
        oe = void 0 !== U ? U : (U = l('kbWR')),
        ce = Object(se.b)(oe, { errorConfig: { context: 'SUPER_FOLLOWS_SUBSCRIPTION_SCREEN' } })
      a.default = function () {
        var e = Object(Q.i)().screenName || '',
          a = { screenName: Object(r.a)(e) }
        return n.a.createElement(ce, {
          render: function (a) {
            var l,
              t,
              r,
              s = a.data,
              o = a.fetchStatus,
              c = a.retry,
              u = null == s || null === (l = s.user) || void 0 === l ? void 0 : l.result,
              d =
                null == s || null === (t = s.viewer) || void 0 === t || null === (r = t.user_results) || void 0 === r
                  ? void 0
                  : r.result
            return n.a.createElement(ie, {
              fetchStatus: Object(i.b)(
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
        n = l.n(t),
        r = l('rHpw'),
        i = l('MWbm')
      var s = r.a.create(function (e) {
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
          t = e.maxWidthPx,
          o = e.style,
          c = e.withBorderRadius,
          u = e.withLineWrap,
          d = e.wordHeightPx,
          m = e.wordPercentWidths,
          p = e.wordSpacingPx,
          g = n.a.useMemo(
            function () {
              return m.map(function (e, t) {
                var o = p || r.a.theme.spaces.space4,
                  u = t !== m.length - 1 ? o : 0,
                  g = n.a.createElement(i.a, {
                    key: t,
                    style: [
                      s.word,
                      { width: l ? '100%' : ''.concat(e, '%') },
                      a && { backgroundColor: r.a.theme.colors[a] },
                      !l && { marginRight: u },
                      c && s.borderRadius,
                      d && { height: d },
                    ],
                  })
                return l
                  ? n.a.createElement(
                      i.a,
                      {
                        key: t,
                        style: [s.wordWrapper, l && { marginRight: u }, { height: l, width: ''.concat(e, '%') }],
                      },
                      g,
                    )
                  : g
              })
            },
            [a, l, c, d, p, m],
          )
        return n.a.createElement(i.a, { style: [s.root, u && s.lineWrap, { maxWidth: t || 'none' }, o] }, g)
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
