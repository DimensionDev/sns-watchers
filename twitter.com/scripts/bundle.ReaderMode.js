;(window.webpackJsonp = window.webpackJsonp || []).push([
  [81, 205],
  {
    HQ0t: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        o = n.n(a),
        r = n('v6aA'),
        i = n('3XMw'),
        c = n.n(i),
        l = n('Q3sg'),
        s = n('rHpw'),
        d = c.a.g4782c0a,
        u = s.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              marginLeft: e.spaces.space4,
              marginBottom: e.spaces.space2,
              height: e.spaces.space20,
            },
          }
        })
      t.a = function (e) {
        var t = o.a.useContext(r.a),
          n = t.featureSwitches,
          a = t.userClaims,
          i = n.isTrue('subscriptions_blue_premium_labeling_enabled'),
          c = a.isTwitterBlueSubscriber(),
          s = e.style,
          m = e.text
        return c && i
          ? o.a.createElement(
              o.a.Fragment,
              null,
              m,
              o.a.createElement(l.a, { accessibilityLabel: d, style: [u.icon, s] }),
            )
          : m
      }
    },
    Q3sg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        o = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    XygZ: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        o = n('gIHd')
      a(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return o(this, 'a', 'name', e)
          },
        },
      )
    },
    dgkZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ReaderModeScreen', function () {
          return Ge
        })
      var a = n('ddV6'),
        o = n.n(a),
        r = (n('KqXw'), n('WNMA'), n('2G9S'), n('MvUL'), n('ERkP')),
        i = n.n(r),
        c = n('v6aA'),
        l = n('XIWT'),
        s = n('MMRb'),
        d = n('1YZw'),
        u = n('XOJV'),
        m = n('G6rE'),
        p = n('rxPX'),
        h = n('0KEI'),
        f = function (e, t) {
          return t.match.params.screenName
        },
        b = function (e, t) {
          var n = f(0, t) || ''
          return m.e.selectByScreenName(e, n)
        },
        g = function (e, t) {
          var n,
            a,
            o = t.location,
            r = t.match
          return null !== (n = r.params) && void 0 !== n && n.tweetId
            ? r.params.tweetId
            : null !== (a = o.query) && void 0 !== a && a.tweet_id && 'string' == typeof o.query.tweet_id
            ? o.query.tweet_id
            : ''
        },
        w = function (e, t) {
          var n = g(0, t),
            a = u.a.selectHydrated(e, n)
          return (null == a ? void 0 : a.conversation_id_str) || ''
        },
        v = function (e, t) {
          var n,
            a = u.a.selectHydrated(e, g(0, t))
          return (null == a || null === (n = a.user) || void 0 === n ? void 0 : n.screen_name) || ''
        },
        y = function (e, t) {
          var n = u.a.selectHydrated(e, g(0, t))
          return (null == n ? void 0 : n.isBookmarked) || !1
        },
        E = Object(p.a)()
          .propsFromState(function () {
            return { authorScreenName: v, focalTweetId: g, isBookmarked: y, rootTweetId: w, screenName: f, user: b }
          })
          .propsFromActions(function () {
            return {
              addToast: d.b,
              bookmark: u.a.bookmark,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('READER_MODE_SCREEN'),
              setDrawerVisibility: s.setDrawerVisibility,
              unbookmark: u.a.unbookmark,
            }
          }),
        k = n('ymux'),
        C = n('AQ79'),
        _ = n('3XMw'),
        O = n.n(_),
        x = n('yiKp'),
        H = n.n(x),
        R = n('Lsrn'),
        S = n('k/Ka'),
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(S.a)(
            'svg',
            H()(
              H()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 3.25h-6.49c-.9 0-1.71.39-2.26 1.01-.55-.62-1.36-1.01-2.25-1.01H3.26C2.01 3.25 1 4.25 1 5.48v11.97c0 1.21 1.01 2.21 2.26 2.21h6.62c.57 0 1.16.16 1.47.73.03.04.2.36.65.36s.6-.33.62-.36c.23-.46.66-.75 1.51-.73h6.62c1.24 0 2.25-1 2.25-2.21V5.48c0-1.23-1.01-2.23-2.25-2.23zM8.9 15.28H4.86c-.42 0-.75-.33-.75-.74s.33-.75.75-.75H8.9c.41 0 .75.34.75.75s-.34.74-.75.74zm0-3.08H4.86c-.42 0-.75-.34-.75-.74 0-.42.33-.75.75-.75H8.9c.41 0 .75.33.75.75 0 .4-.34.74-.75.74zm0-3.08H4.86c-.42 0-.75-.33-.75-.74s.33-.75.75-.75H8.9c.41 0 .75.34.75.75s-.34.74-.75.74zm10.24 6.16h-4.03c-.42 0-.75-.33-.75-.74s.33-.75.75-.75h4.03c.42 0 .75.34.75.75s-.33.74-.75.74zm0-3.08h-4.03c-.42 0-.75-.34-.75-.74 0-.42.33-.75.75-.75h4.03c.42 0 .75.33.75.75 0 .4-.33.74-.75.74zm0-3.08h-4.03c-.42 0-.75-.34-.75-.74 0-.41.33-.75.75-.75h4.03c.42 0 .75.34.75.75 0 .4-.33.74-.75.74z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var L = T,
        I = n('hACr'),
        M = n('lOQR'),
        B = n('yoO3'),
        F = n('wiP2'),
        A = n('MWbm'),
        N = n('rHpw'),
        D = n('I4+6'),
        z = n('fyKl'),
        j = n('CKsB'),
        U = n('cm6r'),
        P = n('t62R'),
        W = n('/yvb'),
        K = n('ML2/'),
        V = n('C25v'),
        q = n('ZGdk'),
        Q = n('IMYl'),
        G = n('witV'),
        J = n('2lds'),
        X = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(S.a)(
            'svg',
            H()(
              H()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 39 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M30 2.17h-5.79l-7.2 19.66h5.01l1.44-4.43h7.25l1.44 4.43h5.05L30 2.17zm-5.4 11.79l1.69-5.17c.27-.92.58-1.92.77-2.99h.06c.19 1.07.5 2.07.77 2.99l1.69 5.17H24.6zM10.62 8.49H6.69L1.8 21.83h3.4l.98-3h4.92l.97 3h3.43L10.62 8.49zM6.95 16.5l1.15-3.52c.18-.62.39-1.29.52-2.03h.04c.13.74.34 1.41.52 2.03l1.15 3.52H6.95z',
              }),
            ),
          )
        }
      X.metadata = { width: 39, height: 24 }
      var Z = X,
        Y = n('hOZg'),
        $ = O.a.gb303813,
        ee = O.a.d6d9aab6,
        te = O.a.bb89cf45,
        ne = O.a.a739d4ba,
        ae = O.a.d5270434,
        oe = O.a.jcf3ff56,
        re = O.a.f1252ac7,
        ie = O.a.daa0da04,
        ce = O.a.ba5256b1,
        le = N.a.isDarkMode() ? N.a.theme.colors.gray50 : N.a.theme.colors.gray0,
        se = 'body',
        de = 'headline1',
        ue = 'title3',
        me = D.a.generate({
          backgroundColor: N.a.theme.colors.primary,
          color: N.a.theme.colors.cellBackground,
          customFocusBackgroundColor: le,
          customHoverBackgroundColor: le,
          customPressedBackgroundColor: le,
        }),
        pe = function (e) {
          var t = e.isBookmarked,
            n = e.isMobileLayout,
            a = e.onAddBookmark,
            r = e.onAddBookmarkFolder,
            l = e.onClose,
            s = e.onFontSizeChange,
            d = e.onRemoveBookmark,
            u = e.tweetTextSize,
            m = i.a.useContext(c.a).featureSwitches.isTrue('responsive_web_reader_extended_menu'),
            p = i.a.useState(!1),
            h = o()(p, 2),
            f = h[0],
            b = h[1],
            g = i.a.useState(!1),
            w = o()(g, 2),
            v = w[0],
            y = w[1],
            E = function () {
              b(!f)
            },
            k = function () {
              y(!v)
            },
            C = function () {
              a(), b(!1)
            },
            _ = function () {
              r(), b(!1)
            },
            O = function () {
              d(), b(!1)
            },
            x = function (e) {
              return function () {
                s(e), y(!1)
              }
            },
            H = function () {
              return f
                ? i.a.createElement(
                    z.default,
                    {
                      isFixed: !0,
                      onDismiss: E,
                      preferredHorizontalOrientation: 'right',
                      preferredVerticalOrientation: 'up',
                    },
                    t
                      ? i.a.createElement(j.a, { Icon: K.a, actionText: te, onClick: O })
                      : i.a.createElement(j.a, { Icon: V.a, actionText: ee, onClick: C }),
                    i.a.createElement(j.a, { Icon: q.a, actionText: ne, onClick: _ }),
                  )
                : null
            },
            R = function (e) {
              return e === u
            },
            S = function () {
              return i.a.createElement(A.a, { style: he.emptyIconSpacer })
            },
            T = function () {
              return v
                ? i.a.createElement(
                    z.default,
                    {
                      isFixed: !0,
                      onDismiss: k,
                      preferredHorizontalOrientation: 'right',
                      preferredVerticalOrientation: 'up',
                    },
                    i.a.createElement(j.a, { Icon: R(se) ? Q.a : S, actionText: ie, onClick: x(se) }),
                    i.a.createElement(j.a, { Icon: R(de) ? Q.a : S, actionText: re, onClick: x(de) }),
                    i.a.createElement(j.a, { Icon: R(ue) ? Q.a : S, actionText: oe, onClick: x(ue) }),
                  )
                : null
            },
            L = function () {
              return t
                ? i.a.createElement(G.a, { style: n ? he.iconMobile : he.icon })
                : i.a.createElement(J.a, { style: n ? he.iconMobile : he.icon })
            }
          return i.a.createElement(
            A.a,
            { style: [he.actionBarWrapper, n ? he.actionBarWrapperMobile : void 0] },
            i.a.createElement(
              A.a,
              {
                onClick: function (e) {
                  e.stopPropagation()
                },
                style: n ? he.outerContainer : void 0,
              },
              i.a.createElement(
                A.a,
                { style: n ? (m ? he.actionBarMobile : void 0) : he.actionBar },
                n
                  ? m
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          U.a,
                          { accessibilityLabel: ae, interactiveStyles: me, onPress: l, style: he.actionItem },
                          i.a.createElement(P.b, { color: 'gray700' }, ae),
                        ),
                        i.a.createElement(
                          U.a,
                          { accessibilityLabel: $, interactiveStyles: me, onPress: E, style: he.actionItem },
                          L(),
                        ),
                        H(),
                        i.a.createElement(
                          U.a,
                          { accessibilityLabel: ce, interactiveStyles: me, onPress: k, style: he.actionItem },
                          i.a.createElement(Z, { style: n ? he.iconMobile : he.icon }),
                        ),
                        T(),
                      )
                    : null
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        A.a,
                        { style: he.buttonContainer },
                        i.a.createElement(W.a, {
                          icon: i.a.createElement(Y.a, { style: n ? he.iconMobile : he.icon }),
                          onClick: l,
                          type: 'brandText',
                        }),
                      ),
                      m
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                              A.a,
                              { style: he.buttonContainer },
                              i.a.createElement(W.a, { icon: L(), onClick: E, type: 'brandText' }),
                              H(),
                            ),
                            i.a.createElement(
                              A.a,
                              null,
                              i.a.createElement(W.a, {
                                icon: i.a.createElement(Z, { style: n ? he.iconMobile : he.icon }),
                                onClick: k,
                                type: 'brandText',
                              }),
                              T(),
                            ),
                          )
                        : null,
                    ),
              ),
            ),
          )
        },
        he = N.a.create(function (e) {
          return {
            actionBarWrapper: { backfaceVisibility: 'hidden', height: '100%', width: '100%', left: 0, bottom: 0 },
            actionBarWrapperMobile: { height: 0, position: 'fixed' },
            actionBar: {
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'fixed',
              left: e.spaces.space12,
              top: e.spaces.space12,
            },
            actionBarMobile: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.gray200,
              borderRadius: e.borderRadii.infinite,
              borderStyle: 'solid',
              borderWidth: '1px',
              bottom: e.spaces.space20,
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              minHeight: e.spaces.space40,
              overflow: 'hidden',
              paddingRight: e.spaces.space8,
              paddingLeft: e.spaces.space8,
            },
            actionItem: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'center',
              paddingHorizontal: e.spaces.space16,
            },
            buttonContainer: { marginRight: e.spaces.space4 },
            emptyIconSpacer: { marginRight: 'calc('.concat(e.spaces.space32, ' - ').concat(e.spaces.space1, ')') },
            icon: { color: e.colors.gray700, fontSize: e.spaces.space20, weight: 'bold' },
            iconMobile: { color: e.colors.gray700, weight: 'bold' },
            outerContainer: {
              bottom: 0,
              height: 0,
              paddingBottom: ''.concat(e.spaces.space32),
              left: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'absolute',
              right: 0,
            },
          }
        }),
        fe = n('Qwev'),
        be = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        ge = function (e, t) {
          return t.module.selectTopFetchStatus(e)
        },
        we = Object(p.a)().propsFromState(function () {
          return { moduleInitialFetchStatus: be, moduleTopFetchStatus: ge }
        }),
        ve = n('yhJW'),
        ye = n('MDbM'),
        Ee = n('BV3T'),
        ke = n('VTxf'),
        Ce = n('SrIh'),
        _e = n('fTQJ'),
        Oe = n('7n04'),
        xe = n('wgnn'),
        He = O.a.c299a6cf,
        Re = function (e) {
          return function (t, n) {
            return t && t.content && !!t.content.id && t.content.id === e
          }
        },
        Se = we(function (e) {
          var t = e.focalTweetId,
            n = e.module,
            a = e.moduleInitialFetchStatus,
            o = e.moduleTopFetchStatus,
            r = e.rootTweetId,
            c = e.tweetTextSize,
            l = Object(ve.a)({
              isCurrentUserRootAuthor: !0,
              withFocalTweetMedia: !0,
              isTransparentCursorsEnabled: !0,
              isReaderMode: !0,
              tweetTextSize: c,
            }),
            s = (r !== t && a === ye.a.LOADING) || o === ye.a.LOADING
          return i.a.createElement(_e.a, {
            anchoring: Oe.a,
            entryConfiguration: l,
            header: s ? i.a.createElement(fe.a, null) : void 0,
            isInitialFocusEntry: r !== t ? Re(t) : void 0,
            key: c,
            module: n,
            olderAtTop: !0,
            renderEmptyState: function () {
              return i.a.createElement(ke.a, null)
            },
            renderUnavailable: function (e) {
              switch (e) {
                case xe.a.NOT_FOUND:
                  return i.a.createElement(ke.a, null)
                case xe.a.NOT_ALLOWED:
                  return i.a.createElement(Ee.a, null)
                default:
                  return Object(Ce.a)('Unhandled timeline unavailable reason: '.concat(e)), null
              }
            },
            title: He,
          })
        }),
        Te = n('Rp9C'),
        Le = n('7JQg'),
        Ie = n('N5qz'),
        Me = n('Es6L'),
        Be = n('HQ0t'),
        Fe = n('k89r'),
        Ae = n('aITJ'),
        Ne = n('cHvH'),
        De = n('oQhu'),
        ze = n('fs1G'),
        je = O.a.b59d8d10,
        Ue = O.a.h5d6c720,
        Pe = O.a.af9c8a3d,
        We = O.a.c299a6cf,
        Ke = O.a.i9a4ca8a,
        Ve = { page: 'thread', section: 'reader_mode' },
        qe = Object(De.a)(function (e, t, n) {
          return Object(k.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n, timelineIdPrefix: 'reader' })
        }),
        Qe = Object(De.a)(function (e, t) {
          var n = (t ? Te.a.getUserItem(t) : {}).is_viewer_follows_user,
            a = void 0 !== n && n
          return { items: [Te.a.forThread(e, a)], tweet_id: e }
        }),
        Ge = function (e) {
          var t = e.addToast,
            n = e.authorScreenName,
            a = e.bookmark,
            r = e.createLocalApiErrorHandler,
            s = e.focalTweetId,
            d = e.history,
            u = e.isBookmarked,
            m = e.location,
            p = e.rootTweetId,
            h = e.screenName,
            f = e.setDrawerVisibility,
            b = e.unbookmark,
            g = e.user,
            w = i.a.useContext(c.a).featureSwitches,
            v = Object(Fe.a)(),
            y = i.a.useState('headline1'),
            E = o()(y, 2),
            k = E[0],
            _ = E[1],
            O = i.a.useCallback(
              function () {
                var e = Qe(s, g)
                g &&
                  s &&
                  v.scribe({
                    action: 'impression',
                    element: 'view_thread',
                    page: 'thread',
                    section: 'reader_mode',
                    data: e,
                  })
              },
              [v, s, g],
            )
          i.a.useEffect(
            function () {
              O()
            },
            [O],
          ),
            i.a.useEffect(
              function () {
                f(C.b.CLOSED)
              },
              [f],
            )
          var x = function () {
              d.goBack()
            },
            H = function () {
              v.scribe({
                action: 'click',
                element: 'reader_mode_menu_exit_button',
                page: 'thread',
                section: 'reader_mode',
              }),
                d.goBack()
            },
            R = function (e) {
              e.stopPropagation()
            },
            S = i.a.useCallback(
              function () {
                return !(!h || !n) && h.toLowerCase() !== n.toLowerCase()
              },
              [n, h],
            ),
            T = i.a.useCallback(
              function () {
                var e = n && s ? '/'.concat(n, '/thread/').concat(s) : '/'
                d.replace({ pathname: e, query: m.query, state: m.state })
              },
              [n, s, d, m.query, m.state],
            ),
            L = function () {
              v.scribe({
                action: 'click',
                element: 'reader_mode_header_icon_disable',
                page: 'thread',
                section: 'reader_mode',
              }),
                d.push({ pathname: N(), query: m.query, state: m.state })
            },
            N = function () {
              return n && s ? '/'.concat(n, '/status/').concat(s) : '/'
            }
          i.a.useEffect(
            function () {
              s && n && S() && T()
            },
            [n, s, T, S],
          )
          var D = function () {
              d.push({ pathname: '/i/bookmarks/add/', state: { tweet_id: s } })
            },
            z = function () {
              a(s).then(
                function () {
                  t({ text: je })
                },
                function (e) {
                  r(l.a)(e)
                },
              )
            },
            j = function () {
              b(s).then(
                function () {
                  t({ text: Ue })
                },
                function (e) {
                  r(l.a)(e)
                },
              )
            },
            U = function (e) {
              return i.a.createElement(pe, {
                isBookmarked: u,
                isMobileLayout: e,
                onAddBookmark: z,
                onAddBookmarkFolder: D,
                onClose: H,
                onFontSizeChange: _,
                onRemoveBookmark: j,
                tweetTextSize: k,
              })
            },
            P = function (e) {
              var t,
                n = Ie.a.isOneColumnSquishedLayout(e),
                a = n || Ie.a.isOneColumnLayout(e)
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(F.a.Configure, {
                  onBackClick: H,
                  rightControl: V(),
                  sideNav: U(n),
                  title: i.a.createElement(Be.a, { style: Je.titleIcon, text: We }),
                  withForceTopNav: n,
                }),
                i.a.createElement(
                  Le.c,
                  { data: { tweet_id: s }, namespace: Ve },
                  i.a.createElement(
                    B.a,
                    null,
                    (function (e, t) {
                      var n,
                        a = Object(Me.a)()
                      return (
                        e && a ? (n = Je.containerOneCol) : e && (n = Je.containerOneColSmall),
                        i.a.createElement(
                          A.a,
                          { style: [Je.root, e ? Je.rootMobile : void 0] },
                          i.a.createElement(
                            A.a,
                            { onClick: R, style: [Je.container, n] },
                            i.a.createElement(
                              A.a,
                              { style: Je.innerWrapper },
                              i.a.createElement(Se, {
                                focalTweetId: s,
                                module: qe(s, { isReaderMode: !0 }, w),
                                rootTweetId: p,
                                tweetTextSize: k,
                              }),
                              e ? U(t) : null,
                            ),
                          ),
                        )
                      )
                    })(a, n),
                  ),
                ),
                i.a.createElement(I.a, {
                  handlers: {
                    esc:
                      ((t = window.location.pathname.match(/\/@?([_\w+]+)\/thread\/([\d]+)\/?/) || []),
                      o()(t, 1)[0] ? x : ze.a),
                  },
                }),
              )
            },
            K = function () {
              return M.a.openApp('twitter://thread/'.concat(s))
            },
            V = function () {
              var e = Ae.b.isMobileOS()
              return i.a.createElement(
                A.a,
                { style: Je.mobileAppBarRightControl },
                e ? i.a.createElement(W.a, { onClick: K }, Pe) : null,
                i.a.createElement(W.a, { accessibilityLabel: Ke, icon: Xe, onClick: L, type: 'brandText' }),
              )
            }
          return i.a.createElement(Ne.a, null, function (e) {
            var t = e.windowWidth
            return P(t)
          })
        },
        Je = N.a.create(function (e) {
          return {
            actionItem: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'center',
              paddingHorizontal: e.spaces.space16,
            },
            container: {
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: e.colors.cellBackground,
              cursor: 'initial',
              height: '100%',
              maxHeight: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              width: '600px',
            },
            containerOneCol: { paddingTop: e.spaces.space56, width: '100%' },
            containerOneColSmall: { paddingTop: 0, width: '100%' },
            icon: { color: e.colors.text, weight: 'bold' },
            innerWrapper: { height: '100%', width: '100%' },
            mobileAppBarRightControl: { flexDirection: 'row', alignItems: 'center', height: e.spaces.space40 },
            modal: { alignSelf: 'center', backgroundColor: e.colors.gray50 },
            rightControlAction: { height: '100%' },
            root: { height: '100%', flexDirection: 'row', paddingTop: e.spaces.space56, width: '100%' },
            rootMobile: { paddingTop: 0 },
            titleIcon: { marginBottom: e.spaces.space1 },
            viewport: { backgroundColor: e.colors.cellBackground, overflow: 'auto', width: '100%', maxHeight: '100%' },
          }
        }),
        Xe = i.a.createElement(L, { style: Je.icon }),
        Ze = E(Ge)
      t.default = Ze
    },
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return A
        })
      var a = n('97Jx'),
        o = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        d = n.n(s),
        u = n('5Yy7'),
        m = n.n(u),
        p = n('2VqO'),
        h = n.n(p),
        f = n('KEM+'),
        b = n.n(f),
        g = n('yiKp'),
        w = n.n(g),
        v = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        y = n.n(v),
        E = n('zfvc'),
        k = n('jHwr'),
        C = n('VY6S'),
        _ = n('w9LO'),
        O = n('//dC'),
        x = n('lHOd'),
        H = n('Oe3h'),
        R = n('0FVZ'),
        S = n('7N4s'),
        T = n('cHvH'),
        L = n('rHpw'),
        I = n('i4Oy'),
        M = n('shC7'),
        B = n('MWbm'),
        F = L.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: L.a.absoluteFillObject,
            mask: w()(w()({}, L.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: w()(w()({}, L.a.absoluteFillObject), {}, { bottom: void 0 }),
            content: {
              borderRadius: e.borderRadii.small,
              position: 'absolute',
              overflow: 'hidden',
              backgroundColor: e.colors.navigationBackground,
              boxShadow: e.boxShadows.medium,
            },
            contentInitialRender: { position: 'fixed', opacity: 0 },
            contentFixed: { position: 'fixed', overflowY: 'auto', overscrollBehavior: 'contain' },
          }
        }),
        A = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              b()(d()(o), '_handleAnimateComplete', function () {
                var e = o.props.onAnimateComplete
                e && e()
              }),
              b()(d()(o), '_handleEsc', function (e) {
                var t = o.props.onDismiss,
                  n = e.altKey,
                  a = e.ctrlKey,
                  r = e.key,
                  i = e.metaKey
                !(n || a || i) && 'Escape' === r && t()
              }),
              b()(d()(o), '_receiveBodyRectHelperRef', function (e) {
                e && o._bodyRectHelperNode !== e && ((o._bodyRectHelperNode = e), o._scheduleUpdate())
              }),
              b()(d()(o), '_receiveAnchorRef', function (e) {
                e && o._anchorNode !== e && ((o._anchorNode = e), o._scheduleUpdate())
              }),
              b()(d()(o), '_receiveContentRef', function (e) {
                e && o._contentNode !== e && ((o._contentNode = e), o._scheduleUpdate())
              }),
              b()(d()(o), '_updatePosition', function () {
                if (
                  o._mounted &&
                  (o._anchorNode || o.props.position) &&
                  o._contentNode &&
                  o._contentNode instanceof window.HTMLElement &&
                  o._bodyRectHelperNode &&
                  o._bodyRectHelperNode instanceof window.HTMLElement
                ) {
                  var e = o._contentNode.scrollHeight,
                    t = o._contentNode.scrollWidth,
                    n = o._bodyRectHelperNode.getBoundingClientRect(),
                    a = n.left,
                    r = n.top,
                    i = n.width,
                    c = I.a.get('window'),
                    l = c.height,
                    s = c.width,
                    d = { left: 0, top: 0, height: 0, width: 0 }
                  o.props.position
                    ? (d = w()(w()({}, d), o.props.position))
                    : o._anchorNode &&
                      o._anchorNode instanceof window.HTMLElement &&
                      (d = o._anchorNode.getBoundingClientRect())
                  var u = d,
                    m = u.height,
                    p = u.left,
                    h = u.top,
                    f = u.width,
                    b = s - i,
                    g = p - a,
                    v = h - r,
                    y = p + f >= t,
                    E = h + m >= e,
                    k = s - p >= t,
                    C = l - h >= e,
                    _ = o.props.preferredVerticalOrientation,
                    O = (function (e) {
                      return M.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(o.props.preferredHorizontalOrientation),
                    x =
                      o.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          a = e.verticalPreference
                        return (n && t) || (!n && !t) ? a : n ? 'up' : 'down'
                      })({ verticalPreference: _, canOrientUp: E, canOrientDown: C }),
                    H =
                      o.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          a = e.horizontalPreference
                        return !t || ('left' !== a && n) ? 'right' : 'left'
                      })({ horizontalPreference: O, canOrientLeft: y, canOrientRight: k }),
                    R = o.props.isFixed ? p : g,
                    S = o.props.isFixed ? h : v,
                    T = 'up' === x ? S + m - e : S,
                    L = 'left' === H ? s - R - f - b : s - R - t - b
                  o.setState({ top: Math.max(T, 0), right: L, verticalOrientation: x, horizontalOrientation: H })
                }
              }),
              (o.state = Object.freeze({})),
              (o._scheduleUpdate = Object(k.a)(o._updatePosition, window.requestAnimationFrame)),
              (o._scheduleDebouncedUpdate = Object(C.a)(o._scheduleUpdate, 250)),
              o
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), I.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), I.a.removeEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.animateInDuration,
                    a = t.animateType,
                    r = t.children,
                    i = t.isFixed,
                    c = t.onDismiss,
                    l = t.preventFocusShift,
                    s = t.withKeyboardNavigation,
                    d = this.state,
                    u = d.right,
                    m = d.top,
                    p = d.verticalOrientation,
                    h = void 0 === m,
                    f = 'calc(100vh - '.concat(m || 0, 'px)'),
                    b = [
                      F.content,
                      h && F.contentInitialRender,
                      i && [F.contentFixed, { maxHeight: f }],
                      {
                        top: m,
                        right: M.a.getConstants().isRTL ? void 0 : u,
                        left: M.a.getConstants().isRTL ? u : void 0,
                      },
                    ],
                    g = y.a.createElement(
                      y.a.Fragment,
                      null,
                      y.a.createElement(B.a, { onClick: c, style: F.mask }),
                      y.a.createElement(B.a, { ref: this._receiveBodyRectHelperRef, style: F.bodyRectHelper }),
                      y.a.createElement(T.a, null, function (t) {
                        var i = t.windowWidth
                        return y.a.createElement(
                          B.a,
                          {
                            accessibilityRole: 'menu',
                            onKeyUp: e._handleEsc,
                            ref: e._receiveContentRef,
                            style: [i < L.a.theme.breakpoints.medium ? F.rootNarrow : F.rootWide, b],
                          },
                          h && 'slide' === a
                            ? r
                            : y.a.createElement(
                                E.b,
                                {
                                  animateMount: 'up' !== p,
                                  duration: n,
                                  onAnimateComplete: e._handleAnimateComplete,
                                  show: !0,
                                  type: a,
                                },
                                function (e) {
                                  var t = e.isAnimating
                                  return y.a.createElement(
                                    H.a,
                                    { id: 'Dropdown', minimizeReporting: t },
                                    function (e, t) {
                                      return y.a.createElement(B.a, o()({ ref: e() }, t({})), r)
                                    },
                                  )
                                },
                              ),
                        )
                      }),
                    )
                  return y.a.createElement(
                    B.a,
                    { ref: this._receiveAnchorRef, style: F.anchor },
                    y.a.createElement(
                      R.a.Dropdown,
                      null,
                      y.a.createElement(x.a.Consumer, null, function (e) {
                        return y.a.createElement(S.b.Consumer, null, function (t) {
                          var n = t.isModal
                          return y.a.createElement(
                            O.a,
                            { history: e, isModal: n, onDismiss: c },
                            l ? g : y.a.createElement(_.a, { withKeyboardNavigation: s }, g),
                          )
                        })
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(A, 'defaultProps', {
        preferredHorizontalOrientation: 'left',
        preferredVerticalOrientation: 'down',
        animateType: 'slide',
        animateInDuration: 'normal',
        withKeyboardNavigation: !0,
      })
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          a = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(a)), n
        }
      }
    },
    lOQR: function (e, t, n) {
      'use strict'
      n('hBpG'), n('7x/C')
      var a = n('6/RC'),
        o = n.n(a),
        r = n('aITJ'),
        i = {
          setLocation: function (e) {
            document.location = e
          },
          getAppStoreURLs: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah',
              t = c(e),
              n = [t.android, t.ios, t.windows],
              a = n.find(function (e) {
                return e.matches()
              })
            return a ? [a] : n
          },
          getiOSAppStoreLink: function (e) {
            var t = c(e)
            return t.ios.matches() ? t.ios.url : t.ios.webUrl
          },
          getAndroidAppStoreLink: function (e) {
            var t = c(e)
            return t.android.matches() ? t.android.url : t.android.webUrl
          },
          goToAppStore: function () {
            var e = this.getAppStoreURLs()
            e[0] && i.setLocation(e[0].url)
          },
          openApp: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'twitter://timeline'
            o.a.canUseDOM && i.setLocation(e)
          },
        },
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah'
          return {
            android: {
              platform: 'android',
              matches: function () {
                return r.b.isAndroid()
              },
              url: 'market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D'.concat(e),
              webUrl:
                'https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D'.concat(
                  e,
                ),
            },
            ios: {
              platform: 'ios',
              matches: function () {
                return r.b.isIOS()
              },
              url: 'itmss://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
              webUrl: 'https://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
            },
            windows: {
              platform: 'windows',
              matches: function () {
                return r.b.isWindowsPhone()
              },
              url: 'ms-windows-store://pdp/?ProductId=9wzdncrfj140',
              webUrl: 'https://www.microsoft.com/p/twitter/9wzdncrfj140',
            },
          }
        }
      t.a = i
    },
  },
])
//# sourceMappingURL=WIPED
