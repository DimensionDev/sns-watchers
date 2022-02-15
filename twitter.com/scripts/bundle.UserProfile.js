;(window.webpackJsonp = window.webpackJsonp || []).push([
  [112],
  {
    '+wNI': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlight_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'LocationSpotlight_user' },
          { args: null, kind: 'FragmentSpread', name: 'NewsletterSpotlight_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '8ebd3f1d06184f86629d106396ae3dfc',
      }
      t.default = n
    },
    M8le: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlights_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'UserBusinessModulesResponse',
            kind: 'LinkedField',
            name: 'profilemodules',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'UserBusinessModuleResponseV1',
                kind: 'LinkedField',
                name: 'v1',
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'profile_module',
                    plural: !1,
                    selections: [{ args: null, kind: 'FragmentSpread', name: 'ProfileSpotlight_profileSpotlight' }],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'ProfileSpotlight_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '22374cd757dd88b876f7fae791fed3af',
      }
      t.default = n
    },
    S97D: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r,
        i,
        l = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'screen_name' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ProfileSpotlightsQuery',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Literal', name: 's', value: 47 },
                  { kind: 'Variable', name: 'screen_name', variableName: 'screen_name' },
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
                      {
                        kind: 'InlineFragment',
                        selections: [{ args: null, kind: 'FragmentSpread', name: 'ProfileSpotlights_user' }],
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
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: n,
            kind: 'Operation',
            name: 'ProfileSpotlightsQuery',
            selections: [
              {
                alias: null,
                args: r,
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
                      (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserBusinessModulesResponse',
                            kind: 'LinkedField',
                            name: 'profilemodules',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserBusinessModuleResponseV1',
                                kind: 'LinkedField',
                                name: 'v1',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'profile_module',
                                    plural: !1,
                                    selections: [
                                      i,
                                      { kind: 'TypeDiscriminator', abstractKey: '__isProfileModule' },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'AboutModuleConfig',
                                            kind: 'LinkedField',
                                            name: 'config',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'venue_id',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'AboutModule',
                                        abstractKey: null,
                                      },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'RevueModuleConfig',
                                            kind: 'LinkedField',
                                            name: 'config',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'revue_account_id',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'RevueModule',
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
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
          },
          params: {
            id: 'w0C6vGpQGI7jmLLg1F86eg',
            metadata: {},
            name: 'ProfileSpotlightsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(l.hash = '63e29ef0bb520445ada0b0d42a1ef0b2'), (t.default = l)
    },
    'Xcj+': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlight_profileSpotlight',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
          {
            kind: 'InlineFragment',
            selections: [{ args: null, kind: 'FragmentSpread', name: 'LocationSpotlight_aboutModule' }],
            type: 'AboutModule',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [{ args: null, kind: 'FragmentSpread', name: 'NewsletterSpotlight_revueModule' }],
            type: 'RevueModule',
            abstractKey: null,
          },
        ],
        type: 'ProfileModule',
        abstractKey: '__isProfileModule',
        hash: 'ffac94bbd7ca630091456fe09086886b',
      }
      t.default = n
    },
    bu6k: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NewsletterSpotlight_revueModule',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'RevueModuleConfig',
            kind: 'LinkedField',
            name: 'config',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'revue_account_id', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'RevueModule',
        abstractKey: null,
        hash: 'eaba8481a5d4478f884ad5135bd2d982',
      }
      t.default = n
    },
    cFl3: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserTwitterArticlesScreen', function () {
          return f
        })
      var n = a('ERkP'),
        r = a.n(n),
        i = a('v6aA'),
        l = a('v//M'),
        o = a('3XMw'),
        s = a.n(o),
        c = a('5FtR'),
        u = a('rHpw'),
        d = a('c6pJ'),
        m = a('MWbm'),
        p = s.a.i9028824,
        f = function (e) {
          var t = r.a.useContext(i.a).featureSwitches,
            a = e.hasTwitterArticles,
            n = e.screenName,
            o = e.twitterArticlesFetchStatus,
            s = e.userId,
            u = t.isTrue('responsive_web_twitter_article_view_enabled'),
            f = r.a.createElement(c.a, { to: '/'.concat(n) })
          return u
            ? r.a.createElement(l.a, {
                accessibilityLabel: p,
                fetchStatus: o,
                render: function () {
                  return a
                    ? r.a.createElement(
                        m.a,
                        { style: h.container },
                        r.a.createElement(d.a, { linkToEditScreen: !1, publishedOnly: !0, userId: s }),
                      )
                    : f
                },
              })
            : f
        },
        h = u.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        })
      t.default = f
    },
    hRT2: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NewsletterSpotlight_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '5d68fbd995d5787cb5dad3b144efca2c',
      }
      t.default = n
    },
    hyc7: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'LocationSpotlight_aboutModule',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AboutModuleConfig',
            kind: 'LinkedField',
            name: 'config',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'venue_id', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'AboutModule',
        abstractKey: null,
        hash: '1bda7979f3b73eaa3dd8561b06818600',
      }
      t.default = n
    },
    'll/Q': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserProfileScreenContainer', function () {
          return Fr
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        l = a.n(i),
        o = (a('KqXw'), a('WNMA'), a('jQ3i'), a('x4t0'), a('P1r1')),
        s = a('hqKg'),
        c = a('kGix'),
        u = a('zh9S'),
        d = a('pIB9'),
        m = a('0KEI'),
        p = a('oEGd'),
        f = a('RqPI'),
        h = a('G6rE'),
        g = function (e, t) {
          var a = t.location,
            n = t.match
          return n && n.params && n.params.screenName
            ? n.params.screenName
            : a && a.query && a.query.screen_name && 'string' == typeof a.query.screen_name
            ? a.query.screen_name
            : ''
        },
        b = function (e, t) {
          return h.e.selectByScreenName(e, g(0, t))
        },
        _ = Object(h.g)([h.a]),
        y = Object(s.createSelector)(
          o.l,
          function (e, t) {
            return _(e, g(0, t))
          },
          function (e, t) {
            var a = h.e.selectIdByScreenName(e, g(0, t))
            return (a ? d.a.selectTwitterArticles(e, a, !0) : []).length > 0
          },
          f.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return h.e.selectIsUserNotFound(e, g(0, t))
          },
          function (e, t) {
            var a = b(e, t)
            return !!a && h.e.selectIsLoading(e, a.id_str)
          },
          function (e, t) {
            return h.e.selectIsUserSuspended(e, g(0, t))
          },
          function (e, t) {
            return h.e.selectUserSuspendMessage(e, g(0, t))
          },
          function (e, t) {
            return h.e.selectIsUserWithheld(e, g(0, t))
          },
          function (e, t) {
            var a = t.location,
              n = ((a && a.state) || {}).promotedTweetState,
              r = b(e, t)
            return n || (r && r.promoted_content)
          },
          g,
          f.x,
          function (e, t) {
            var a = h.e.selectIdByScreenName(e, g(0, t))
            return a ? d.a.selectFetchStatus(e, a, !0) : c.a.NONE
          },
          b,
          function (e, t) {
            var a = b(e, t)
            return a && a.profile_interstitial_type ? a.profile_interstitial_type : null
          },
          f.o,
          function (e, t, a, n, r, i, l, o, s, c, u, d, m, p, f, h, g) {
            return {
              displaySensitiveMedia: e,
              fetchStatus: t,
              hasTwitterArticles: a,
              isActiveCreator: n,
              isIntentRoute: r,
              isNotFound: i,
              isRefreshing: l,
              isSuspended: o,
              suspendMessage: s,
              isWithheld: c,
              promotedContent: u,
              screenName: d,
              superFollowersCount: m,
              twitterArticlesFetchStatus: p,
              user: f,
              userProfileInterstitialType: h,
              userLanguage: g,
            }
          },
        ),
        v = {
          createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_SCREEN'),
          fetchOneUser: h.e.fetchOne,
          fetchOneByScreenNameWithExtraFieldsIfNeeded: h.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
            h.a,
            h.b,
            h.c,
            h.d,
          ]),
          fetchSettingsIfNeeded: o.f,
          fetchTwitterArticlesIfNeeded: d.a.fetchIfNeeded,
          scribeAction: u.c,
        },
        E = Object(p.g)(y, v),
        w = a('txMZ'),
        k = a('yiKp'),
        S = a.n(k),
        C = a('VrFO'),
        I = a.n(C),
        F = a('Y9Ll'),
        P = a.n(F),
        T = a('1Pcy'),
        L = a.n(T),
        N = a('5Yy7'),
        x = a.n(N),
        O = a('2VqO'),
        A = a.n(O),
        M = a('KEM+'),
        B = a.n(M),
        R =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('5BYb'),
          a('Blm6'),
          a('ho0z'),
          a('1t7P'),
          a('jQ/y'),
          a('vrRf'),
          a('2G9S'),
          a('z84I'),
          a('aeN7')),
        U = a('mC9n'),
        D = a('s4rk'),
        H = a('zI2C'),
        W = a('6ZtA'),
        j = a('es0u'),
        V = (a('hBvt'), a('v6aA')),
        K = a('I/ms'),
        z = a('rxPX'),
        q = a('M0jS'),
        G = function (e, t) {
          return Object(q.c)(e, t.user.id_str)
        },
        J = function (e, t) {
          var a = q.b.select(e, t.user.id_str)
          return null != a && a.refresh_delay_secs ? 1e3 * a.refresh_delay_secs : 1e3 * q.a
        },
        $ = Object(z.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('SELECT_SPACE'),
              fetchUsersPresence: q.b.fetchManyIfNeeded,
            }
          })
          .propsFromState(function () {
            return { userPresencePollingInterval: J, userSpace: G }
          })
          .withAnalytics(),
        Q = a('3XMw'),
        X = a.n(Q),
        Y = a('FGLp'),
        Z = a('B5iK')
      var ee = a('TIdA'),
        te = a('rHpw'),
        ae = a('1I0O'),
        ne = a('jhWN'),
        re = a('cHvH'),
        ie = ee.a.createLayoutCache(),
        le = $(function (e) {
          var t,
            a,
            n,
            i,
            o,
            s = e.analytics,
            c = e.createLocalApiErrorHandler,
            u = e.fetchUsersPresence,
            d = e.isOwnProfile,
            m = e.isWithheld,
            p = e.user,
            f = e.userPresencePollingInterval,
            h = e.userSpace,
            g = l.a.useContext(V.a),
            b = g.featureSwitches,
            _ = g.loggedInUserId,
            y = !d && m,
            v = y || !p.profile_image_url_https ? void 0 : p.profile_image_url_https,
            E =
              _ &&
              (b.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ||
                b.isTrue('voice_rooms_typeahead_audiospace_ring_enabled')),
            w = p.has_nft_avatar && b.isTrue('responsive_web_nft_avatar'),
            k = h && E,
            S = l.a.useCallback(
              function () {
                var e
                E && (null === (e = u([p.id_str])) || void 0 === e || e.catch(c({})))
              },
              [p.id_str, E, u, c],
            )
          l.a.useEffect(
            function () {
              return S()
            },
            [S],
          ),
            Object(Y.a)(function () {
              w && s.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            (t = function () {
              return S()
            }),
            (a = E ? f : void 0),
            (n = l.a.useRef()),
            l.a.useEffect(
              function () {
                n.current = t
              },
              [t],
            ),
            l.a.useEffect(
              function () {
                if (n.current && a) {
                  var e = new Z.b(a).interval(n.current)
                  return (
                    e.start(),
                    function () {
                      return e.stop()
                    }
                  )
                }
              },
              [a],
            ),
            h && k
              ? ((o = h.accessibilityLabel), (i = h.link))
              : y ||
                (w
                  ? ((o = oe.opensNFTDetails), (i = { pathname: '/'.concat(p.screen_name, '/nft') }))
                  : ((o = oe.opensProfilePhoto), (i = { pathname: '/'.concat(p.screen_name, '/photo') })))
          var C = function (e) {
              s.scribe({ element: w ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            I = function (e) {
              var t = e.windowWidth >= te.a.theme.breakpoints.medium,
                a = {
                  accessibilityLabel: o,
                  imageLayoutCache: ie,
                  link: i,
                  onClick: C,
                  size: 'custom',
                  uri: v,
                  screenName: p.screen_name,
                }
              return h && k
                ? l.a.createElement(ae.a, r()({}, a, { presenceRingType: h.presenceRingType, style: K.a.avatar }))
                : l.a.createElement(
                    ne.a,
                    r()({}, a, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: K.a.avatar,
                    }),
                  )
            }
          return l.a.createElement(re.a, null, I)
        }),
        oe = { opensProfilePhoto: X.a.f30795df, opensNFTDetails: X.a.a270100c },
        se = a('RCZO'),
        ce = a('MWbm'),
        ue = a('n4Eu'),
        de = a('cm6r'),
        me = a('A91F'),
        pe = a('9Xij'),
        fe = ee.a.createLayoutCache(),
        he = function (e) {
          var t = e.isOwnProfile,
            a = e.isWithheld,
            n = e.user,
            r = !t && a,
            i = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            o = i && ue.a.get(i),
            s = o ? Object(se.g)(o) : te.a.theme.colors.gray200
          return !r && n.profile_banner_url
            ? l.a.createElement(
                de.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                l.a.createElement(ee.a, {
                  accessibilityLabel: '',
                  aspectMode: me.a.exact(te.a.theme.aspectRatios.profileBanner),
                  backgroundColor: s,
                  image: n.profile_banner_url,
                  layoutCache: fe,
                }),
              )
            : l.a.createElement(
                ce.a,
                { style: K.a.banner },
                l.a.createElement(pe.a, {
                  ratio: te.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: s },
                }),
              )
        },
        ge = a('3nOA'),
        be = a('I57f'),
        _e = a('uIZp'),
        ye = a('SOvA'),
        ve = a('vYiB'),
        Ee = a('Y49K'),
        we = a('Irs7'),
        ke = a('/yvb'),
        Se = a('ACHU'),
        Ce = a('rsoE'),
        Ie = a('vMjK'),
        Fe = X.a.h63a5c3b,
        Pe = l.a.createElement(Se.a, null),
        Te = (function (e) {
          x()(a, e)
          var t = A()(a)
          function a() {
            var e
            I()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              B()(L()(e), '_renderUserMenu', function (t) {
                var a = e.props,
                  n = a.promotedContent,
                  r = a.user
                return l.a.createElement(Ie.b, { onClose: t, promotedContent: n, user: r, view: 'profile' })
              }),
              e
            )
          }
          return (
            P()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.buttonStyle
                  return l.a.createElement(ke.a, {
                    accessibilityLabel: Fe,
                    hoverLabel: { label: Fe },
                    icon: Pe,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: Ce.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            a
          )
        })(l.a.PureComponent),
        Le = a('pHkl'),
        Ne = X.a.g7088266,
        xe = X.a.gd7acb84,
        Oe = X.a.b7636014,
        Ae = l.a.createElement(ye.a, null),
        Me = te.a.create(function (e) {
          return {
            buttons: {
              maxWidth: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            },
            button: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 },
            lastButton: { marginBottom: e.spaces.space12 },
          }
        }),
        Be = function (e) {
          var t = e.history,
            a = e.isWithheld,
            n = e.loggedInUserId,
            r = e.onFollowButtonOffscreen,
            i = e.promotedContent,
            o = e.user,
            s = Object(we.b)(),
            c = o.id_str === n,
            u = o.blocked_by,
            d = o.blocking,
            m = a && !c,
            p = o.can_dm && n && !d && !u && !m,
            f = n && o && !c && !m,
            h = o.following && n && !d && !u && !a,
            g = o.default_profile_image && !o.description && !o.profile_banner_url
          return l.a.createElement(
            ce.a,
            { style: Me.buttons },
            n && c
              ? l.a.createElement(
                  ke.a,
                  {
                    link: g ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Me.lastButton,
                    testID: Ee.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  g ? xe : Ne,
                )
              : null,
            f && l.a.createElement(Te, { buttonStyle: Me.button, promotedContent: i, user: o }),
            !c &&
              p &&
              l.a.createElement(ke.a, {
                accessibilityLabel: Oe,
                hoverLabel: { label: Oe },
                icon: Ae,
                onPress: function () {
                  if (n) {
                    var e = Object(ge.a)(o.id_str, n)
                    s.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Le.h.ONE_TO_ONE,
                        inbox_type: Le.c.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Me.button,
                testID: Ee.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              h &&
              l.a.createElement(be.a, {
                allowPromptForPush: !0,
                isFollowing: o.notifications,
                style: Me.button,
                userId: o.id_str,
              }),
            !c &&
              !u &&
              !m &&
              l.a.createElement(
                ve.a,
                { onOffscreenChange: r },
                l.a.createElement(_e.a, { promotedContent: i, style: Me.lastButton, userId: o.id_str }),
              ),
          )
        },
        Re = a('tOzk'),
        Ue = a('YeIG'),
        De = a('Je1/'),
        He = a('uLiA'),
        We = a('EJJl'),
        je = a('WWyu'),
        Ve = a('LhSm'),
        Ke = a('t62R'),
        ze = a('GWvE'),
        qe = a('Lsrn'),
        Ge = a('k/Ka'),
        Je = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M19.75 6.357h-2.426V4.73c0-1.23-1.01-2.23-2.25-2.23H8.927c-1.24 0-2.25 1-2.25 2.23v1.627H4.25c-1.24 0-2.25 1-2.25 2.23V19.27c0 1.23 1.01 2.23 2.25 2.23h15.5c1.24 0 2.25-1 2.25-2.23V8.587c.002-1.23-1.008-2.23-2.25-2.23zM8.176 4.73c0-.41.337-.744.75-.744h6.144c.414 0 .75.333.75.743v1.627H8.178V4.73zM4.25 7.842h15.5c.413 0 .75.333.75.743v3h-17v-3c0-.41.337-.743.75-.743zm15.5 12.17H4.25c-.413 0-.75-.333-.75-.742v-6.197h17v6.198c0 .41-.338.744-.75.744z',
              }),
            ),
          )
        }
      Je.metadata = { width: 24, height: 24 }
      var $e = Je,
        Qe = a('KrGU'),
        Xe = a('I/9y'),
        Ye = a('YUdS'),
        Ze = a('EjKN'),
        et = X.a.a1ea2f12,
        tt = X.a.g8191e77,
        at = function (e) {
          var t = e.day,
            a = e.month
          if (t && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && t === n.getDate()
          }
        },
        nt = te.a.create(function (e) {
          return {
            description: { display: 'block', marginBottom: e.spaces.space12 },
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
            noCursor: { cursor: 'inherit' },
          }
        }),
        rt = function (e) {
          var t,
            a,
            n,
            r = e.isOwnProfile,
            i = e.professionalCategoryName,
            o = e.user,
            s = l.a.useRef(),
            c = Object(we.b)(),
            u = r ? { page: 'me' } : { page: 'profile' },
            d =
              null === (t = o.entities) ||
              void 0 === t ||
              null === (a = t.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            m = o.birthdate
          return l.a.createElement(
            l.a.Fragment,
            null,
            o.description
              ? l.a.createElement(
                  ce.a,
                  { style: nt.description },
                  l.a.createElement(We.a, {
                    description: o.description,
                    disableTranslation: !o.is_profile_translatable,
                    entities: o.entities,
                    testID: He.a.userDescription,
                    userId: o.id_str,
                    withheldDescription: o.withheld_description,
                    withheldEntities: o.withheld_entities,
                  }),
                )
              : null,
            l.a.createElement(
              ce.a,
              { style: nt.details },
              l.a.createElement(
                Ke.b,
                { style: nt.detailsText, testID: He.a.profileHeaderItems },
                i
                  ? l.a.createElement(
                      De.a,
                      {
                        Icon: $e,
                        onPress: function () {
                          c.scribe(S()(S()({}, u), U.b()))
                        },
                        style: nt.noCursor,
                        testID: He.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      l.a.createElement(Ke.b, null, i),
                    )
                  : null,
                o.location && !Object(ze.a)(o.location)
                  ? l.a.createElement(
                      De.a,
                      { Icon: Qe.a, testID: He.a.userLocation },
                      l.a.createElement(Ke.b, null, o.location),
                    )
                  : null,
                d && d.url
                  ? l.a.createElement(
                      De.a,
                      { Icon: Xe.a, link: { pathname: d.url, external: !0 }, testID: He.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !m ||
                  Object(Ue.a)(m) ||
                  (m.visibility &&
                    'self' === m.visibility.toLowerCase() &&
                    m.year_visibility &&
                    'self' === m.year_visibility.toLowerCase())
                  ? null
                  : at(m)
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        De.a,
                        {
                          Icon: Ye.a,
                          onPress: function () {
                            s.current && s.current.launch()
                          },
                        },
                        r ? et : tt,
                      ),
                      l.a.createElement(Re.a, {
                        setRef: function (e) {
                          s.current = e
                        },
                      }),
                    )
                  : l.a.createElement(
                      De.a,
                      { Icon: Ze.a, testID: He.a.userBirthdate },
                      l.a.createElement(je.a, { birthdate: m, withBornPrefixText: !0 }),
                    ),
                l.a.createElement(Ve.a, { joinDate: o.created_at }),
              ),
            ),
          )
        },
        it = a('mN6z'),
        lt = a('W27K'),
        ot = a('ddV6'),
        st = a.n(ot),
        ct = a('1YZw'),
        ut = Object(z.a)().propsFromActions(function () {
          return {
            addToast: ct.b,
            createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: h.e.unmute,
          }
        }),
        dt = a('8Usl'),
        mt = a('eb3s'),
        pt = a('P2xQ'),
        ft = X.a.cef4e8cf,
        ht = X.a.ec294e62,
        gt = X.a.df422dfe,
        bt = te.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        _t = ut(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            n = e.unmute,
            r = e.user,
            i = l.a.useState(!1),
            o = st()(i, 2),
            s = o[0],
            c = o[1],
            u = r.screen_name
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              Ke.b,
              { color: 'gray700', style: bt.mute },
              gt,
              ' ',
              l.a.createElement(
                Ke.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: bt.unmuteButton,
                  testID: dt.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                pt.g,
              ),
            ),
            s
              ? l.a.createElement(mt.a, {
                  confirmButtonLabel: pt.g,
                  headline: ft({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(r.id_str).then(function () {
                        return t({ text: Object(pt.d)(r.screen_name) })
                      }, a({ showToast: !0 }))
                  },
                  text: ht,
                })
              : null,
          )
        }),
        yt = a('RgK2'),
        vt = a.n(yt),
        Et = a('rcen'),
        wt = 'UserName',
        kt = a('X04g'),
        St = a('A7Fw'),
        Ct = X.a.e839db39,
        It = X.a.b74bd6c6,
        Ft = X.a.f15bfdb3,
        Pt = X.a.i859a9d3,
        Tt = te.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        Lt = function (e) {
          var t = e.dismiss,
            a = e.type,
            n = Object(we.b)()
          l.a.useEffect(
            function () {
              n.scribe({ component: 'blue_badge_education_context', action: 'show' })
            },
            [n],
          )
          var r = l.a.useCallback(
            function () {
              n.scribe({ component: 'blue_badge_education_context', element: 'support_url', action: 'click' })
            },
            [n],
          )
          return l.a.createElement(
            ce.a,
            { style: Tt.content },
            l.a.createElement(St.a, { style: Tt.icon }),
            l.a.createElement(Ke.b, { size: 'title4', style: Tt.text, weight: 'bold' }, Ft),
            l.a.createElement(
              Ke.b,
              { color: 'gray700', style: Tt.text },
              It,
              ' ',
              l.a.createElement(
                Ke.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: r },
                Pt,
              ),
            ),
            'sheet' === a
              ? l.a.createElement(ke.a, { onClick: t, style: Tt.button, type: 'primaryOutlined' }, Ct)
              : null,
          )
        },
        Nt = a('jV+4'),
        xt = a('ir4X'),
        Ot = function (e) {
          var t,
            a = e.isOwnProfile,
            n = e.isWithheld,
            i = e.namespace,
            o = e.user,
            s = Object(we.b)(),
            c = l.a.useContext(V.a).featureSwitches,
            u = n ? vt.a : { isProtected: !!o.protected, isVerified: !!o.verified, translatorType: o.translator_type },
            d = o.name && o.screen_name && !(n && !a),
            m = d ? o.name : '@'.concat(o.screen_name),
            p = l.a.useCallback(function (e, t) {
              return l.a.createElement(Lt, { dismiss: e, type: t })
            }, []),
            f = c.isTrue('identity_verification_educational_prompt_enabled'),
            h = c.isTrue('account_taxonomy_automated_label_enabled'),
            g = o.highlightedLabel
          if ('AutomatedLabel' === (null === (t = o.highlightedLabel) || void 0 === t ? void 0 : t.userLabelType)) {
            var b,
              _,
              y,
              v =
                null !== (b = o.highlightedLabel) &&
                void 0 !== b &&
                null !== (_ = b.longDescription) &&
                void 0 !== _ &&
                _.entities
                  ? l.a.createElement(Et.a, {
                      entities: o.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: o.id_str, name: o.screen_name, item_type: kt.a.ItemType.USER }] }
                        s.scribe(S()(S()({}, i), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: o.highlightedLabel.longDescription.text,
                    })
                  : (null === (y = o.highlightedLabel) || void 0 === y ? void 0 : y.description) || null
            g = h ? S()(S()({}, o.highlightedLabel), {}, { description: v }) : null
          }
          return l.a.createElement(
            ce.a,
            { style: K.a.names, testID: wt },
            l.a.createElement(
              Nt.a,
              r()({}, u, {
                badgeContext: 'account',
                name: m,
                nameSize: 'headline1',
                renderVerifiedBadgeContext: f ? p : void 0,
                screenName: d ? o.screen_name : void 0,
                weight: 'heavy',
                withFollowsYou: o.followed_by && !n,
                withNameWrap: !0,
                withStackedLayout: !0,
              }),
            ),
            g ? l.a.createElement(xt.a, { isIconLarge: !0, label: g }) : null,
          )
        },
        At = (a('uFXj'), a('W55q')),
        Mt = a('YeSc'),
        Bt = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Rt = Object(z.a)()
          .propsFromState(function () {
            return { newsletter: Mt.f }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n = e.newsletter,
              r =
                null == n || null === (t = n.data) || void 0 === t
                  ? void 0
                  : t.revue_account.account_settings.twitter_profile_subscriptions_enabled
            return {
              isSubscribed:
                (null == n || null === (a = n.context) || void 0 === a ? void 0 : a.user_subscription_status) ===
                At.c.Subscribed,
              profileUrl: null == n ? void 0 : n.data.revue_account.profile_info.profile_url,
              revueAccountId: null == n ? void 0 : n.config.revue_account_id,
              showNewsletterSubscription: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_PROFILE_HEADER',
              ),
              fetchUserBizProfileIfNeeded: Mt.c,
            }
          })
          .withAnalytics(Bt),
        Ut = Object(z.a)()
          .propsFromState(function () {
            return { newsletter: Mt.f }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n,
              r,
              i,
              l,
              o,
              s,
              c,
              u,
              d,
              m,
              p,
              f,
              h,
              g,
              b,
              _ = e.newsletter,
              y =
                null == _ ||
                null === (t = _.data) ||
                void 0 === t ||
                null === (a = t.revue_account) ||
                void 0 === a ||
                null === (n = a.profile_info) ||
                void 0 === n ||
                null === (r = n.profile_image) ||
                void 0 === r ||
                null === (i = r.image_variants) ||
                void 0 === i
                  ? void 0
                  : i.map(function (e) {
                      return { height: e.height, uri: e.url, width: e.width }
                    })
            return {
              description:
                null == _ ||
                null === (l = _.data) ||
                void 0 === l ||
                null === (o = l.revue_account) ||
                void 0 === o ||
                null === (s = o.newsletter_info) ||
                void 0 === s
                  ? void 0
                  : s.description,
              imageVariants: y,
              originalImage:
                null == _ ||
                null === (c = _.data) ||
                void 0 === c ||
                null === (u = c.revue_account) ||
                void 0 === u ||
                null === (d = u.profile_info) ||
                void 0 === d ||
                null === (m = d.profile_image) ||
                void 0 === m
                  ? void 0
                  : m.original_image,
              title:
                null == _ ||
                null === (p = _.data) ||
                void 0 === p ||
                null === (f = p.revue_account) ||
                void 0 === f ||
                null === (h = f.newsletter_info) ||
                void 0 === h
                  ? void 0
                  : h.title,
              subscriberCount:
                null == _ || null === (g = _.data) || void 0 === g || null === (b = g.account_analytics) || void 0 === b
                  ? void 0
                  : b.subscriber_count,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        Dt = a('855f'),
        Ht = a('vbJ7'),
        Wt = function (e) {
          var t = e.description,
            a = e.isMobileLayout,
            n = e.originalImage,
            r = e.subscriberCount,
            i = e.title,
            o = e.withThumbnail,
            s = parseInt(r, 10) || 0,
            c = Dt.a.getTruncatedCount(s),
            u = a ? 'subtext2' : 'body'
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              ce.a,
              { style: Qt.contentContainer },
              o && n
                ? l.a.createElement(
                    ce.a,
                    { style: [Qt.newsletterImageContainer, a ? Qt.newsletterImageContainerMobile : void 0] },
                    l.a.createElement(
                      pe.a,
                      { ratio: 1 },
                      l.a.createElement(ee.a, { accessibilityLabel: t || '', aspectMode: me.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              l.a.createElement(
                ce.a,
                { style: [Qt.newsletterInfoContainer, a ? Qt.mobileNewsletterInfoContainer : void 0] },
                l.a.createElement(
                  Ke.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: a ? Qt.newsletterFieldMobile : Qt.newsletterField,
                    weight: 'bold',
                  },
                  i,
                ),
                l.a.createElement(
                  Ke.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [Qt.newsletterDescription, a ? Qt.newsletterFieldMobile : Qt.newsletterField],
                  },
                  t,
                ),
                r
                  ? l.a.createElement(
                      Ke.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: a ? Qt.newsletterFieldMobile : Qt.newsletterField,
                      },
                      l.a.createElement(X.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: s }),
                    )
                  : null,
              ),
            ),
          )
        }
      Wt.defaultProps = { withThumbnail: !0 }
      var jt,
        Vt,
        Kt,
        zt,
        qt,
        Gt,
        Jt,
        $t,
        Qt = te.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Ht.a.hexToCss(te.a.theme.colors.borderColor, 0.7),
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              height: 'calc('.concat(e.spaces.space48, ' * 2)'),
              overflow: 'hidden',
              width: 'calc('.concat(e.spaces.space48, ' * 2)'),
            },
            newsletterImageContainerMobile: {
              height: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
              width: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
            },
            newsletterInfoContainer: {
              flex: 6,
              paddingLeft: e.spaces.space12,
              paddingRight: e.spaces.space8,
              paddingTop: e.spaces.space8,
              textAlign: 'left',
            },
            mobileNewsletterInfoContainer: { paddingLeft: e.spaces.space8, paddingRight: e.spaces.space4 },
            newsletterDescription: { overflow: 'hidden' },
            newsletterField: { lineHeight: e.spaces.space20 },
            newsletterFieldMobile: { lineHeight: 'calc('.concat(e.spaces.space16, ' + ').concat(e.spaces.space1, ')') },
          }
        }),
        Xt = Ut(Wt),
        Yt = a('Rp9C'),
        Zt = a('I4+6'),
        ea = X.a.d834aec4,
        ta = X.a.ab0deccf,
        aa = X.a.caeab0f7,
        na = te.a.create(function (e) {
          return {
            actionButton: { margin: 'auto' },
            buttonContainer: {
              alignItems: 'stretch',
              display: 'flex',
              height: 'calc('
                .concat(e.spaces.space40, ' + ')
                .concat(e.spaces.space12, ' - ')
                .concat(e.spaces.space1, ')'),
              width: '100%',
            },
            contentContainer: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4 },
            darkModeBackground: { backgroundColor: e.colors.gray0 },
            defaultBackground: { backgroundColor: e.colors.cellBackground },
            moduleContainer: {
              borderRadius: e.borderRadii.xLarge,
              boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.1)',
              marginBottom: e.spaces.space16,
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              overflow: 'hidden',
            },
            mobileButtonContainer: { height: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space4, ')') },
            moduleLabel: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginBottom: e.spaces.space8 },
            summaryContainer: { borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50 },
          }
        }),
        ra = Rt(function (e) {
          var t = l.a.useContext(V.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
            a = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.fetchUserBizProfileIfNeeded,
            i = e.isSubscribed,
            o = e.profileUrl,
            s = e.revueAccountId,
            c = e.screenName,
            u = e.showNewsletterSubscription,
            d = e.user,
            m = e.userId,
            p = t && u,
            f = l.a.useCallback(
              function (e) {
                if (p) {
                  var t = Yt.a.getUserItem(d),
                    n = t.is_user_follows_viewer,
                    r = t.is_viewer_follows_user,
                    l = [{ id: s, is_viewer_follows_user: r, is_user_follows_viewer: n }]
                  a.scribe({ action: e, element: i ? 'start_reading_btn' : 'subscribe_btn', data: { items: l } })
                }
              },
              [a, i, s, p, d],
            )
          l.a.useEffect(
            function () {
              t && r(m).catch(n())
            },
            [n, r, t, m],
          ),
            l.a.useEffect(
              function () {
                f('impression')
              },
              [p],
            )
          var h = function (e) {
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                ce.a,
                { style: na.moduleLabel },
                l.a.createElement(Ke.b, { size: 'body', weight: 'bold' }, ea),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  a = i ? o : t,
                  n = i ? aa : ta,
                  r = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
                  s = Zt.a.generate({
                    backgroundColor: te.a.theme.colors.transparent,
                    color: te.a.theme.colors.primary,
                    customFocusBackgroundColor: r,
                    customHoverBackgroundColor: r,
                    customPressedBackgroundColor: r,
                  })
                return l.a.createElement(
                  de.a,
                  {
                    interactiveStyles: s,
                    link: a,
                    onPress: function () {
                      return f('click')
                    },
                    style: [na.moduleContainer, te.a.isDarkMode() ? na.darkModeBackground : na.defaultBackground],
                  },
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      ce.a,
                      { style: [na.contentContainer, na.summaryContainer] },
                      l.a.createElement(Xt, { isMobileLayout: e, userId: m, withThumbnail: !0 }),
                    ),
                    l.a.createElement(
                      ce.a,
                      { style: [na.buttonContainer, e ? na.mobileButtonContainer : void 0] },
                      l.a.createElement(
                        Ke.b,
                        {
                          align: 'center',
                          link: a,
                          size: 'body',
                          style: na.actionButton,
                          weight: 'bold',
                          withInteractiveStyling: !1,
                        },
                        n,
                      ),
                    ),
                  ),
                )
              })(e),
            )
          }
          return p
            ? l.a.createElement(re.a, null, function (e) {
                var t = e.windowWidth <= te.a.theme.breakpoints.small
                return h(t)
              })
            : null
        }),
        ia = a('z+ta'),
        la = (a('enFi'), a('yH/f'), a('jAXQ')),
        oa = a.n(la),
        sa = void 0 !== jt ? jt : (jt = a('nUER')),
        ca = void 0 !== Vt ? Vt : (Vt = a('hyc7')),
        ua = function (e) {
          var t = e.profileSpotlightRef,
            a = e.userRef,
            n = l.a.useContext(V.a).featureSwitches.isTrue('responsive_web_location_spotlight_v1_display')
          return oa()(sa, a), oa()(ca, t), n ? l.a.createElement(Ke.b, null, 'Location') : null
        },
        da = void 0 !== Kt ? Kt : (Kt = a('hRT2')),
        ma = void 0 !== zt ? zt : (zt = a('bu6k')),
        pa = function (e) {
          var t = e.isWithheld,
            a = e.loggedInUserId,
            n = e.profileSpotlightRef,
            r = e.user,
            i = e.userRef
          return (
            oa()(da, i),
            oa()(ma, n),
            !a || r.blocking || r.blocked_by || t || (r.protected && !r.following)
              ? null
              : l.a.createElement(ra, { screenName: r.screen_name, user: r, userId: r.id_str })
          )
        },
        fa = void 0 !== qt ? qt : (qt = a('+wNI')),
        ha = void 0 !== Gt ? Gt : (Gt = a('Xcj+')),
        ga = Object.freeze({ Location: 'AboutModule', Newsletter: 'RevueModule' }),
        ba = function (e) {
          var t = e.isWithheld,
            a = e.loggedInUserId,
            n = e.profileSpotlightRef,
            r = e.user,
            i = e.userRef,
            o = oa()(fa, i),
            s = oa()(ha, n)
          switch (s.__typename) {
            case ga.Location:
              return l.a.createElement(ua, { profileSpotlightRef: s, userRef: o })
            case ga.Newsletter:
              return l.a.createElement(pa, {
                isWithheld: t,
                loggedInUserId: a,
                profileSpotlightRef: s,
                user: r,
                userRef: o,
              })
            default:
              return null
          }
        },
        _a = void 0 !== Jt ? Jt : (Jt = a('M8le')),
        ya = function (e) {
          var t,
            a,
            n,
            r = e.isWithheld,
            i = e.loggedInUserId,
            o = e.user,
            s = e.userRef,
            c = oa()(_a, s),
            u =
              null === (t = c.profilemodules) ||
              void 0 === t ||
              null === (a = t.v1) ||
              void 0 === a ||
              null === (n = a[0]) ||
              void 0 === n
                ? void 0
                : n.profile_module
          return u
            ? l.a.createElement(ba, { isWithheld: r, loggedInUserId: i, profileSpotlightRef: u, user: o, userRef: c })
            : null
        },
        va = a('Fr3L'),
        Ea = a('IAZG'),
        wa = void 0 !== $t ? $t : ($t = a('S97D')),
        ka = function (e) {
          var t,
            a = e.isWithheld,
            n = e.loggedInUserId,
            r = e.user,
            i = e.userScreenName,
            o = Object(Ea.a)(wa, { screen_name: i }),
            s = null == o || null === (t = o.user_result_by_screen_name) || void 0 === t ? void 0 : t.result
          return s ? l.a.createElement(ya, { isWithheld: a, loggedInUserId: n, user: r, userRef: s }) : null
        },
        Sa = function (e) {
          var t = e.isWithheld,
            a = e.loggedInUserId,
            n = e.user,
            r = e.userScreenName
          return l.a.createElement(
            va.a,
            { errorConfig: { context: 'PROFILE_SPOTLIGHTS' } },
            l.a.createElement(ka, { isWithheld: t, loggedInUserId: a, user: n, userScreenName: r }),
          )
        },
        Ca = a('7JQg'),
        Ia = a('7wqI'),
        Fa = a('Jkc4'),
        Pa = a('wCd/'),
        Ta = function (e) {
          var t = e.isActiveCreator,
            a = e.isOwnProfile,
            n = e.superFollowersCount,
            r = e.user,
            i = r.followers_count,
            o = r.friends_count,
            s = r.screen_name
          return l.a.createElement(Fa.a, null, function (e) {
            return l.a.createElement(Pa.a, {
              followersCount: i,
              friendsCount: o,
              onPress: e(),
              screenName: s,
              superFollowersCount: t && a ? n : void 0,
              withLink: Object(Ia.b)({ isOwnProfile: a, user: r }),
            })
          })
        },
        La = { page: 'profile', section: 'header' },
        Na = (function (e) {
          x()(a, e)
          var t = A()(a)
          function a(e, n) {
            var r
            return (
              I()(this, a),
              (r = t.call(this, e, n)),
              B()(
                L()(r),
                '_shouldUseProfileSpotlightRendering',
                r.context.featureSwitches.isTrue('responsive_web_profile_spotlight_v0_display'),
              ),
              B()(L()(r), '_handleRemoveClusterFollow', function () {
                r.setState({ shouldShowClusterFollow: !1 })
              }),
              (r.state = { shouldShowClusterFollow: !1 }),
              r
            )
          }
          return (
            P()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(it.a)(t, this.state) || !Object(it.a)(e, this.props)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  !0 === this.props.user.following &&
                    !1 === e.user.following &&
                    this.setState({ shouldShowClusterFollow: !0 }),
                    this.props.user.id_str !== e.user.id_str && this.setState({ shouldShowClusterFollow: !1 })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActiveCreator,
                    a = e.isWithheld,
                    n = e.loggedInUserId,
                    r = e.professionalCategoryName,
                    i = e.superFollowersCount,
                    o = e.user,
                    s = this._isOwnProfile(),
                    c = !s && (o.blocking || o.blocked_by || a),
                    u = !s && (o.blocked_by || a),
                    d = !n || s || o.blocking || o.blocked_by || a || (o.protected && !o.following),
                    m = !n || o.blocking || o.blocked_by || a || (o.protected && !o.following)
                  return l.a.createElement(
                    Ca.c,
                    { namespace: La },
                    l.a.createElement(
                      ce.a,
                      null,
                      l.a.createElement(he, { isOwnProfile: s, isWithheld: a, user: o }),
                      l.a.createElement(
                        ce.a,
                        { style: [K.a.content, xa.content, c && K.a.withheld] },
                        l.a.createElement(
                          ce.a,
                          { style: K.a.avatarAndButton },
                          l.a.createElement(le, { isOwnProfile: s, isWithheld: a, user: o }),
                          l.a.createElement(Be, {
                            history: this.props.history,
                            isWithheld: a,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: o,
                          }),
                        ),
                        l.a.createElement(Ot, { isOwnProfile: s, isWithheld: a, namespace: La, user: o }),
                        c ? null : l.a.createElement(rt, { isOwnProfile: s, professionalCategoryName: r, user: o }),
                        u
                          ? null
                          : l.a.createElement(Ta, {
                              isActiveCreator: t,
                              isOwnProfile: s,
                              superFollowersCount: i,
                              user: o,
                            }),
                        d
                          ? null
                          : l.a.createElement(
                              ce.a,
                              { style: xa.marginTopXSmall },
                              l.a.createElement(lt.a, { userId: o.id_str, userScreenName: o.screen_name }),
                            ),
                        o.muting ? l.a.createElement(_t, { user: o }) : null,
                      ),
                      this._shouldUseProfileSpotlightRendering
                        ? l.a.createElement(Sa, {
                            isWithheld: a,
                            loggedInUserId: n,
                            user: o,
                            userScreenName: o.screen_name,
                          })
                        : m
                        ? null
                        : l.a.createElement(ra, { screenName: o.screen_name, user: o, userId: o.id_str }),
                      this.state.shouldShowClusterFollow ? this._renderProfileClusterFollow() : null,
                    ),
                  )
                },
              },
              {
                key: '_isOwnProfile',
                value: function () {
                  var e = this.props
                  return e.loggedInUserId === e.user.id_str
                },
              },
              {
                key: '_renderProfileClusterFollow',
                value: function () {
                  var e = this.props.user
                  return l.a.createElement(ia.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            a
          )
        })(l.a.Component)
      B()(Na, 'contextType', V.a)
      var xa = te.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        Oa = Na,
        Aa = a('8UdT'),
        Ma = a('dwig'),
        Ba = a('GOQE'),
        Ra = a('v//M'),
        Ua = a('0+qk'),
        Da = a('drnk'),
        Ha = a('9Bb1'),
        Wa = a('iFPY'),
        ja = a('5S/X'),
        Va = a('oQhu'),
        Ka = a('xZGM'),
        za = function (e, t) {
          return Object(Ka.A)(e, Ka.v)
        },
        qa = Object(z.a)()
          .propsFromState(function () {
            return { shouldShowEducation: za }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Ka.w)(Ka.v)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        Ga = a.p + 'nft_education_graphic.72be3745.png',
        Ja = a('Wms4'),
        $a = a('feu+'),
        Qa = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M15.65 9.69c-.29-2.19-1.64-3.5-3.61-3.5S8.72 7.5 8.43 9.69c-.21 1.54 0 2.65.64 3.38.76.88 1.93 1 2.97 1 1.04 0 2.21-.12 2.97-1 .48-.55.72-1.31.72-2.31 0-.33-.03-.69-.08-1.07zm-1.77 2.4c-.29.33-.84.48-1.84.48s-1.55-.15-1.85-.48c-.33-.38-.42-1.12-.28-2.2.14-1 .61-2.2 2.13-2.2 1.51 0 1.99 1.2 2.13 2.19.14 1.09.05 1.83-.29 2.21z',
              }),
              l.a.createElement('path', {
                d: 'M22.95 10.87l-4.5-7.75C18.05 2.43 17.3 2 16.5 2h-9c-.8 0-1.55.43-1.95 1.12l-4.5 7.75c-.4.7-.4 1.56 0 2.26l4.5 7.75C5.95 21.57 6.7 22 7.5 22h9c.8 0 1.55-.43 1.95-1.12l4.5-7.75c.4-.7.4-1.56 0-2.26zM16.5 20.5h-9c-.46 0-.37-.18-.37-.18.7-2.05 2.66-3.42 4.9-3.42 2.23 0 4.2 1.37 4.89 3.42 0 0 .12.19-.42.18zm5.15-8.12l-3.75 6.46c-1.14-2.1-3.38-3.44-5.87-3.44-2.52 0-4.77 1.36-5.91 3.48l-3.77-6.5c-.13-.24-.13-.52 0-.76l4.5-7.75c.13-.23.38-.37.65-.37h9c.27 0 .52.14.65.37l4.5 7.75c.13.24.13.52 0 .76z',
              }),
            ),
          )
        }
      Qa.metadata = { width: 24, height: 24 }
      var Xa = Qa,
        Ya = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M2.4 16.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L7 10.2c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.2 5.2c-.2.1-.3.1-.5.1zm.3 6.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l5.4-5.4c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.4 5.4c-.2.1-.4.2-.6.2zm6.9-.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l4.8-4.8c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-4.8 4.8c-.2.1-.4.2-.6.2z',
              }),
              l.a.createElement('path', {
                d: 'M22.384 6.56c-.118-.368-.46-.62-.848-.62h-4.464l-1.51-4.427c-.125-.358-.462-.602-.844-.602-.383 0-.72.243-.843.603l-1.51 4.426H7.9c-.387 0-.73.25-.85.617-.117.37.017.77.333.993l3.566 2.528-1.52 4.45c-.125.363 0 .767.312.996.313.23.73.233 1.047.012l3.93-2.79 3.93 2.79c.155.11.336.164.517.164.188 0 .374-.06.53-.175.31-.23.436-.633.31-.997L18.49 10.08l3.566-2.527c.31-.226.446-.625.328-.994z',
              }),
            ),
          )
        }
      Ya.metadata = { width: 24, height: 24 }
      var Za = Ya,
        en = X.a.ebf5ec25,
        tn = X.a.c405ac8d,
        an = X.a.a893d601,
        nn = X.a.eb023c93,
        rn = X.a.gc65c0a9,
        ln = X.a.d17e8aa3,
        on = X.a.ff9c6943,
        sn = te.a.create(function (e) {
          return {
            heading: { marginTop: e.spaces.space16, marginBottom: e.spaces.space12 },
            iconContainer: { flexDirection: 'row', marginVertical: e.spaces.space12 },
            noMarginTop: { marginTop: 0 },
            reducedMarginBottom: { marginBottom: e.spaces.space4 },
            icon: {
              color: e.colors.teal300,
              marginRight: e.spaces.space12,
              fontSize: e.spaces.space24,
              minWidth: e.spaces.space24,
            },
            label: {
              backgroundColor: e.colors.gray50,
              paddingHorizontal: e.spaces.space8,
              paddingVertical: e.spaces.space12,
            },
            labelIcon: { color: e.colors.teal500, marginRight: e.spaces.space4 },
            image: { width: '100%' },
            interstitialContent: { marginBottom: e.spaces.space16 },
          }
        }),
        cn = qa(function (e) {
          var t = e.addEducationFlag,
            a = e.analytics,
            n = e.onEducationSheetDismiss,
            r = e.shouldShowEducation,
            i = l.a.useContext(V.a).featureSwitches,
            o = r && !0 === i.getValueWithoutScribeImpression('responsive_web_nft_avatar'),
            s =
              (o && i.getStringValue('responsive_web_nft_avatar_help_link')) ||
              'https://help.twitter.com/managing-your-account/nfts-on-twitter',
            c = function () {
              n(), t()
            }
          l.a.useEffect(
            function () {
              return o && a.scribe({ action: 'impression' }), c
            },
            [o],
          )
          var u = l.a.createElement(
            X.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            l.a.createElement(
              Ke.b,
              {
                color: 'primary',
                link: s,
                onPress: function () {
                  a.scribe({ element: 'learn_more', action: 'click' })
                },
                testID: 'learnMore',
              },
              X.a.d8af538e,
            ),
          )
          return o
            ? l.a.createElement($a.a, {
                accessibilityRole: 'dialog',
                actionLabel: an,
                contentStyle: sn.interstitialContent,
                graphic: function () {
                  return l.a.createElement(
                    ce.a,
                    { style: sn.image },
                    l.a.createElement(ee.a, { accessibilityLabel: '', aspectMode: me.a.exact(2.5), image: Ga }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: tn,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  a.scribe({ element: 'ok_button', action: 'click' }), c()
                },
                onClose: c,
                subtext: l.a.createElement(
                  ce.a,
                  null,
                  l.a.createElement(
                    ce.a,
                    null,
                    l.a.createElement(
                      Ke.b,
                      { color: 'normal', size: 'headline2', style: sn.heading, weight: 'bold' },
                      nn,
                    ),
                    l.a.createElement(Ke.b, null, u),
                  ),
                  l.a.createElement(
                    ce.a,
                    null,
                    l.a.createElement(
                      Ke.b,
                      { color: 'normal', size: 'headline2', style: sn.heading, weight: 'bold' },
                      rn,
                    ),
                    l.a.createElement(
                      ce.a,
                      { style: sn.iconContainer },
                      l.a.createElement(Xa, { style: sn.icon }),
                      l.a.createElement(Ke.b, null, on),
                    ),
                    l.a.createElement(
                      ce.a,
                      { style: [sn.iconContainer, sn.reducedMarginBottom] },
                      l.a.createElement(Xe.a, { style: sn.icon }),
                      l.a.createElement(Ke.b, null, ln),
                    ),
                    l.a.createElement(
                      ce.a,
                      { style: [sn.iconContainer, sn.noMarginTop] },
                      l.a.createElement(ce.a, { style: sn.icon }),
                      l.a.createElement(
                        Ja.a,
                        { style: sn.label },
                        l.a.createElement(Za, { style: sn.labelIcon }),
                        l.a.createElement(Ke.b, { color: 'normal', weight: 'bold' }, en),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        un = a('AJXH'),
        dn = a('rJoH'),
        mn = a('Y6L+'),
        pn = a('jS2K'),
        fn = a('IG4P'),
        hn = (function (e) {
          x()(a, e)
          var t = A()(a)
          function a() {
            return I()(this, a), t.apply(this, arguments)
          }
          return (
            P()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(it.a)(e, this.props)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.shouldDisplayUserActionSheet
                  return l.a.createElement(
                    ce.a,
                    null,
                    this._renderBanner(),
                    l.a.createElement(
                      ce.a,
                      { style: [K.a.content, K.a.withheld] },
                      l.a.createElement(
                        ce.a,
                        { style: K.a.avatarAndButton },
                        this._renderAvatar(),
                        l.a.createElement(ce.a, { style: K.a.buttonAffordance }),
                        a && t && l.a.createElement(Te, { buttonStyle: K.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return l.a.createElement(re.a, null, function (e) {
                    var t = e.windowWidth >= te.a.theme.breakpoints.medium
                    return l.a.createElement(
                      ce.a,
                      { accessibilityState: { hidden: !0 }, style: K.a.avatar },
                      l.a.createElement(ne.a, {
                        accessibilityHidden: !0,
                        borderColor: 'cellBackground',
                        borderWidth: t ? 'large' : 'medium',
                        focusable: !1,
                        size: 'custom',
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderBanner',
                value: function () {
                  return l.a.createElement(
                    ce.a,
                    { style: K.a.banner },
                    l.a.createElement(pe.a, { ratio: te.a.theme.aspectRatios.profileBanner }),
                  )
                },
              },
              {
                key: '_renderNames',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.restrictedUser,
                    n = t || a,
                    r = n.name && n.screen_name,
                    i = r ? n.name : '@'.concat(n.screen_name)
                  return l.a.createElement(
                    ce.a,
                    { style: K.a.names },
                    l.a.createElement(Nt.a, {
                      name: i,
                      nameSize: 'headline1',
                      screenName: r ? n.screen_name : void 0,
                      withStackedLayout: !0,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(l.a.Component),
        gn = a('wytG'),
        bn = a('VS6U'),
        _n = (a('0zG9'), a('muX9')),
        yn = function (e) {
          var t = e.screenName,
            a = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return l.a.createElement(_n.a, { script: [{ type: 'application/ld+json', innerHTML: a }] })
        },
        vn = a('ipry'),
        En = a('E4zi'),
        wn = function (e) {
          var t,
            a,
            n,
            r = e.user,
            i =
              null === (t = r.entities) ||
              void 0 === t ||
              null === (a = t.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            o = {
              '@context': 'http://schema.org',
              '@type': 'ProfilePage',
              dateCreated: r.created_at,
              author: Object(En.a)(r),
            }
          return (
            i && (o.relatedLink = [i.url, i.expanded_url]),
            l.a.createElement(_n.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(o, null, 2) }],
            })
          )
        },
        kn = a('Qayx'),
        Sn = a('G8HL'),
        Cn = a('mw9i'),
        In = a('zfvc'),
        Fn = a('FIs5'),
        Pn = a('Q0VY'),
        Tn = a('FiRh'),
        Ln = a('0yYu'),
        Nn = a('k/OQ'),
        xn = a('zCf4'),
        On = X.a.fa98627a,
        An = X.a.a2811f96,
        Mn = X.a.c6ea308b,
        Bn = X.a.d67658c0,
        Rn = X.a.ccc9153f,
        Un = X.a.bab1f8b0,
        Dn = X.a.a52b03a5,
        Hn = X.a.cc3c6989,
        Wn = 'Twitter Articles',
        jn = X.a.add55c97,
        Vn = X.a.d7b8eba9,
        Kn = X.a.c0098d49,
        zn = X.a.b721eb37,
        qn = X.a.c4af3561,
        Gn = X.a.dbcaaab5,
        Jn = X.a.hf162fb6,
        $n = X.a.ad7b2b38,
        Qn = X.a.f19b4073,
        Xn = X.a.ha62da97,
        Yn = X.a.ica87fde,
        Zn = X.a.e79ed125,
        er = X.a.g8475f82,
        tr = X.a.c9a1cb5d,
        ar = X.a.e7b201dd,
        nr = X.a.d09e12c4,
        rr = X.a.gbf342a4,
        ir = X.a.eeab4adf,
        lr = X.a.i144ee20,
        or = X.a.j58e7b00,
        sr = X.a.d834ab9c,
        cr = { section: 'profile_interstitial' },
        ur = Object(gn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, '8KtR'))
        }),
        dr = Object(gn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'cFl3'))
        }),
        mr = Object(gn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ivpD'))
        }),
        pr = Object(gn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ylAD'))
        }),
        fr = 'about',
        hr = 'likes',
        gr = 'media',
        br = 'reactions',
        _r = 'superfollows',
        yr = 'twitter-articles',
        vr = 'with_replies',
        Er = 36e5,
        wr = Object(Va.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        kr = (function (e) {
          x()(a, e)
          var t = A()(a)
          function a(e, n) {
            var r
            return (
              I()(this, a),
              (r = t.call(this, e, n)),
              B()(
                L()(r),
                '_safetyModeViolatorExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              B()(
                L()(r),
                '_safetyModeUserExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              B()(
                L()(r),
                '_shouldEnableProfessionalCategoryLabelViewing',
                r.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              B()(
                L()(r),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                r.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              B()(
                L()(r),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                r.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              B()(
                L()(r),
                '_canViewTwitterArticles',
                r.context.featureSwitches.isTrue('responsive_web_twitter_article_view_enabled'),
              ),
              B()(L()(r), '_renderContainer', function () {
                var e = r.props,
                  t = e.fetchStatus,
                  a = e.isNotFound,
                  n = e.isRefreshing,
                  i = e.isSuspended,
                  o = e.screenName,
                  s = i || a
                return l.a.createElement(
                  fn.a,
                  { isRefreshing: n, onRefresh: r._handlePullToRefresh },
                  l.a.createElement(
                    ce.a,
                    { style: Cr.containerGrow },
                    l.a.createElement(
                      Cn.a,
                      null,
                      l.a.createElement(Ra.a, {
                        accessibilityLabel: Rn({ screenName: o }),
                        fetchStatus: s ? c.a.LOADED : t,
                        onRequestRetry: r._handleRequestRetry,
                        render: r._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              B()(L()(r), '_renderHeaderAndContent', function () {
                var e = r.state.showNftAvatarEducation
                return l.a.createElement(
                  l.a.Fragment,
                  null,
                  e && l.a.createElement(cn, { onEducationSheetDismiss: r._handleOnDismissNftAvatarEducation }),
                  r._renderHeader(),
                  r._renderContent(),
                )
              }),
              B()(L()(r), '_renderContent', function () {
                var e = r.props,
                  t = e.isNotFound,
                  a = e.isSuspended,
                  n = e.isWithheld,
                  i = e.user,
                  l = r.state.showBlockedTweets,
                  o = r._isViewingOwnProfile()
                return a
                  ? r._renderUserProfileSuspended()
                  : t
                  ? r._renderUserNotFound()
                  : n && o
                  ? r._renderLoggedInUserProfileWithheld()
                  : n
                  ? r._renderUserProfileWithheld()
                  : r._shouldShowProfileInterstitial()
                  ? r._renderUserProfileInterstitialed()
                  : i && i.smart_blocked_by && r._safetyModeViolatorExperienceEnabled
                  ? r._renderUserProfileAutoblockedBy()
                  : i && i.blocked_by
                  ? r._renderUserProfileBlockedBy()
                  : i && i.smart_blocking && !l && r._safetyModeUserExperienceEnabled
                  ? r._renderUserProfileSmartBlocking()
                  : i && i.blocking && !l
                  ? r._renderUserProfileBlocking()
                  : r._isProtectedFromViewer()
                  ? r._renderUserProfileProtected()
                  : r._renderUserProfileDefault()
              }),
              B()(L()(r), '_isViewingOwnProfile', function () {
                var e = r.context.loggedInUserId,
                  t = r.props.user
                return t && e === t.id_str
              }),
              B()(L()(r), '_shouldShowProfileInterstitial', function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : r.props.userProfileInterstitialType,
                  t = r.props,
                  a = t.displaySensitiveMedia,
                  n = t.user
                if (!n || !e) return !1
                var i = r.state,
                  l = i.showBlockedTweets,
                  o = i.userProfileInterstitialDismissed,
                  s = n.blocking && !l,
                  c = n.blocked_by,
                  u = e === vn.a.SensitiveMedia || e === vn.a.OffensiveProfileContent,
                  d = u && (n.following || a || ja.b)
                return !(r._isViewingOwnProfile() || r._isProtectedFromViewer() || s || c || o || d)
              }),
              B()(L()(r), '_isProtectedFromViewer', function () {
                var e = r.props.user
                return e && e.protected && !r._isViewingOwnProfile() && !e.following
              }),
              B()(L()(r), '_handleRequestRetry', function () {
                r._fetchOneUserIfNeeded(r.props)
              }),
              B()(L()(r), '_handlePullToRefresh', function () {
                var e = r.props.user
                e ? r._fetchOneUser(e.id_str) : r._fetchOneUserIfNeeded(r.props)
              }),
              B()(L()(r), '_handleShowActionedTweets', function () {
                var e = r.props,
                  t = e.history,
                  a = e.user
                a && t.push('/settings/safety_mode/actioned_tweets/'.concat(a.id_str))
              }),
              B()(L()(r), '_handleShowBlockedTweets', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace,
                  n = e.user
                r.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    r._safetyModeUserExperienceEnabled &&
                    t(S()(S()({}, a), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              B()(L()(r), '_handleOnConfirmProfileInterstitial', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace
                r.setState({ userProfileInterstitialDismissed: !0 }),
                  t(S()(S()(S()({}, a), cr), {}, { action: 'click' }))
              }),
              B()(L()(r), '_handleOnDismissNftAvatarEducation', function () {
                r.setState({ showNftAvatarEducation: !1 })
              }),
              B()(L()(r), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  a = e.fetchStatus,
                  n = r.props.recordTTFL
                if ((a === c.a.FAILED && (r._shouldRecordTTFL = !1), r._shouldRecordTTFL && t.length)) {
                  var i = t.some(function (e) {
                    return e.type === Aa.b.Tweet
                  })
                  r._shouldRecordTTFL = !1
                  i && n('profile', { source: 'graphql' })
                }
              }),
              B()(L()(r), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                r.setState({ showFollowButtonRightControl: t })
              }),
              B()(L()(r), '_getSmartBlockEndTimeSentence', function () {
                var e = r.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    a = parseInt(e.smart_blocking_expiration, 10),
                    n = a > t ? a - t : 0
                  if (n <= 72e5) return Gn
                  var i = Math.floor(n / Er),
                    l = Math.floor(i / 24),
                    o = i % 24
                  return 0 === l
                    ? Qn({ hourCount: o })
                    : 0 === o
                    ? $n({ dayCount: l })
                    : Jn({ dayCount: l, hourCount: o })
                }
                return ''
              }),
              B()(L()(r), '_getProfessionalCategory', function () {
                var e,
                  t,
                  a = r.props.user
                return null == a ||
                  null === (e = a.professional) ||
                  void 0 === e ||
                  null === (t = e.category) ||
                  void 0 === t
                  ? void 0
                  : t[0]
              }),
              B()(L()(r), '_shouldDisplayProfessionalCategoryLabel', function () {
                var e = r._isViewingOwnProfile()
                if (r._shouldEnableProfessionalCategoryLabelHoldback && !e) return !1
                if (
                  (!e && r._shouldEnableProfessionalCategoryLabelViewing) ||
                  (e && r._shouldEnableProfessionalCategoryLabelDisplaySwitch)
                ) {
                  var t,
                    a = r._getProfessionalCategory()
                  return !!a && (null === (t = null == a ? void 0 : a.display) || void 0 === t || t)
                }
              }),
              B()(L()(r), '_getProfessionalCategoryNameIfDisplayable', function () {
                var e
                return r._shouldDisplayProfessionalCategoryLabel()
                  ? null === (e = r._getProfessionalCategory()) || void 0 === e
                    ? void 0
                    : e.name
                  : void 0
              }),
              (r._shouldRecordTTFL = !0),
              (r._shouldRecordTTFMC = !0),
              (r.state = {
                userProfileInterstitialDismissed: !1,
                showBlockedTweets: !1,
                showFollowButtonRightControl: !1,
                showNftAvatarEducation: !1,
              }),
              r
            )
          }
          return (
            P()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    n = t.fetchSettingsIfNeeded,
                    r = t.fetchTwitterArticlesIfNeeded,
                    i = t.scribeAction,
                    l = t.scribeNamespace,
                    o = t.user
                  this._fetchOneUserIfNeeded(this.props).then(function () {
                    e._isUserAutoblocked() &&
                      i(
                        S()(S()({}, l), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' }),
                      ),
                      e._isUserAutoblocking() &&
                        i(
                          S()(
                            S()({}, l),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && i(S()(S()({}, l), U.c())),
                    n()
                      .catch(a())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && i(S()(S()(S()({}, l), cr), {}, { action: 'impression' }))
                      }),
                    this._canViewTwitterArticles && null != o && o.id_str && r(o.id_str, !0).catch(a())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t,
                    a = this.props,
                    n = a.createLocalApiErrorHandler,
                    r = a.fetchStatus,
                    i = a.fetchTwitterArticlesIfNeeded,
                    l = a.recordTTFMC,
                    o = a.user
                  if (e.fetchStatus !== r && r === c.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (
                    this._shouldRecordTTFMC &&
                    e.fetchStatus !== r &&
                    r === c.a.LOADED &&
                    this._isValidProfile()
                  ) {
                    l('profile', { source: 'graphql' }), (this._shouldRecordTTFMC = !1)
                  }
                  e.user &&
                    !e.user.blocking &&
                    this.props.user &&
                    this.props.user.blocking &&
                    (window.scrollTo(0, 0), this.setState({ showBlockedTweets: !1 })),
                    this._canViewTwitterArticles &&
                      o &&
                      o.id_str !== (null === (t = e.user) || void 0 === t ? void 0 : t.id_str) &&
                      i(o.id_str, !0).catch(n())
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props,
                    a = t.screenName,
                    n = t.scribeAction,
                    r = t.scribeNamespace,
                    i = t.userProfileInterstitialType
                  e.screenName !== a
                    ? (this._fetchOneUserIfNeeded(e), this.setState({ userProfileInterstitialDismissed: !1 }))
                    : !i &&
                      this._shouldShowProfileInterstitial(e.userProfileInterstitialType) &&
                      n(S()(S()(S()({}, r), cr), {}, { action: 'impression' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    a = t.fetchStatus,
                    n = t.history,
                    r = t.isIntentRoute,
                    i = t.isNotFound,
                    o = t.isSuspended,
                    s = t.isWithheld,
                    u = t.location,
                    d = t.screenName,
                    m = t.user,
                    p = t.userLanguage,
                    f = this._isViewingOwnProfile(),
                    h = o || i || (s && !f),
                    g = m ? Mn({ screenName: m.screen_name, fullName: m.name }) : void 0,
                    b = f ? '' : '@'.concat((m && m.screen_name) || d || '', ' '),
                    _ = h ? null : l.a.createElement(Ua.a, { getLocationState: wr(b), history: n }),
                    y =
                      m && !h
                        ? l.a.createElement(Nt.a, {
                            isProtected: m.protected,
                            isVerified: m.verified,
                            name: m.name,
                            screenName: m.screen_name,
                            withScreenName: !1,
                          })
                        : On,
                    v = m && !h && a === c.a.LOADED ? this._renderSubtitle(m) : void 0,
                    E = m && 'twitter://user?screen_name='.concat(m.screen_name),
                    w = m && 'https://twitter.com/'.concat(m.screen_name || ''),
                    k = m && Bn({ fullName: m.name, screenName: m.screen_name })
                  return l.a.createElement(bn.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: b },
                    documentTitle: g,
                    history: n,
                    primaryContent: l.a.createElement(
                      Ma.a,
                      { fab: _ },
                      l.a.createElement(dn.a, {
                        canonical: w,
                        description: null == m ? void 0 : m.description,
                        image: null == m ? void 0 : m.profile_image_url_https,
                        title: k,
                        type: 'profile',
                      }),
                      ja.b && m
                        ? l.a.createElement(
                            l.a.Fragment,
                            null,
                            l.a.createElement(wn, { user: m }),
                            l.a.createElement(Ha.a, { description: null == m ? void 0 : m.description }),
                          )
                        : null,
                      l.a.createElement(H.a, { deepLink: E }),
                      l.a.createElement(W.a, {
                        featureSwitches: this.context.featureSwitches,
                        loggedInUserId: e,
                        pageType: 'profile',
                        userLanguage: p,
                      }),
                      w ? l.a.createElement(D.a, { canonical: w }) : null,
                      l.a.createElement(Ra.a, {
                        accessibilityLabel: Rn({ screenName: d }),
                        fetchStatus: m || h ? c.a.LOADED : a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      r
                        ? l.a.createElement(Wa.a, { history: n, location: u, userId: null == m ? void 0 : m.id_str })
                        : null,
                    ),
                    rightControl: this._renderRightControl(),
                    sidebarContent: this._renderSidebarContent(),
                    subtitle: v,
                    title: y,
                  })
                },
              },
              {
                key: '_renderRightControl',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    a = e.user,
                    n = this.state.showFollowButtonRightControl
                  return a && !this._isViewingOwnProfile()
                    ? l.a.createElement(
                        In.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        l.a.createElement(_e.a, { promotedContent: t, userId: a.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    a = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(a, '/').concat(hr)) > -1
                    ? l.a.createElement(kn.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(a, '/').concat(br)) > -1
                    ? l.a.createElement(kn.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(a, '/').concat(gr)) > -1
                    ? l.a.createElement(kn.a, { count: e.media_count, type: 'media' })
                    : l.a.createElement(kn.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? l.a.createElement(pn.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(Ia.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : l.a.createElement(j.a, null)
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    a = t.history,
                    n = t.isActiveCreator,
                    r = t.isNotFound,
                    i = t.isSuspended,
                    l = t.isWithheld,
                    o = t.profileHeaderRenderer,
                    s = t.promotedContent,
                    c = t.restrictedProfileHeaderRenderer,
                    u = t.screenName,
                    d = t.superFollowersCount,
                    m = t.user,
                    p = this._shouldShowProfileInterstitial(),
                    f = !this._isViewingOwnProfile() && (i || r || p),
                    h = this._getProfessionalCategoryNameIfDisplayable()
                  return f
                    ? c({
                        shouldDisplayUserActionSheet: !i && !r,
                        fullUser: m,
                        restrictedUser: { name: (m || {}).name, screen_name: u || '' },
                      })
                    : m
                    ? o({
                        history: a,
                        loggedInUserId: e,
                        isActiveCreator: n,
                        isWithheld: l,
                        onFollowButtonOffscreen: this._handleFollowButtonOffscreen,
                        promotedContent: s,
                        superFollowersCount: d,
                        user: m,
                        professionalCategoryName: h,
                      })
                    : null
                },
              },
              {
                key: '_renderEmptyState',
                value: function (e) {
                  var t = e.buttonText,
                    a = e.buttonType,
                    n = e.header,
                    r = e.message,
                    i = e.onButtonPress,
                    o = e.onSecondaryButtonPress,
                    s = e.secondaryButtonText,
                    c = e.secondaryButtonType,
                    u = this.props,
                    d = u.isSuspended,
                    m = u.screenName
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    ja.b && d && m
                      ? l.a.createElement(yn, { screenName: m })
                      : ja.b
                      ? l.a.createElement(un.a, null)
                      : null,
                    l.a.createElement(Fn.a, {
                      buttonText: t,
                      buttonType: a,
                      header: n,
                      message: r,
                      onButtonPress: i,
                      onSecondaryButtonPress: o,
                      secondaryButtonText: s,
                      secondaryButtonType: c,
                      style: Ir.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(Da.a)(e),
                    a = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: sr,
                    onButtonPress: this._handleOnConfirmProfileInterstitial,
                  })
                },
              },
              {
                key: '_renderUserProfileBlocking',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = Zn({ screenName: t }),
                    n = l.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      l.a.createElement(Ke.b, { link: 'https://support.twitter.com/articles/117063' }, X.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: ir,
                    onButtonPress: this._handleShowBlockedTweets,
                  })
                },
              },
              {
                key: '_renderUserProfileSmartBlocking',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = this._getSmartBlockEndTimeSentence(),
                    a = e.screen_name,
                    n = Xn({ screenName: a }),
                    r = l.a.createElement(Ke.b, { color: 'gray700', weight: 'bold' }),
                    i = l.a.createElement(
                      ce.a,
                      null,
                      l.a.createElement(
                        Ke.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space20 } },
                        l.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          l.a.cloneElement(r, null, X.a.g6645d94({ screenName: a })),
                        ),
                      ),
                      l.a.createElement(
                        Ke.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space8 } },
                        l.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          l.a.cloneElement(r, null, X.a.g08eceae({ screenName: a })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: i,
                    buttonText: lr,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: or,
                    secondaryButtonType: 'primaryOutlined',
                    onButtonPress: this._handleShowActionedTweets,
                    onSecondaryButtonPress: this._handleShowBlockedTweets,
                  })
                },
              },
              {
                key: '_renderUserProfileBlockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = l.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      l.a.createElement(Ke.b, { link: 'https://support.twitter.com/articles/20172060' }, X.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Yn, message: a })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = l.a.createElement(Ke.b, { style: { paddingBottom: te.a.theme.spaces.space20 } }),
                    n = l.a.createElement(Ke.b, { weight: 'bold' }),
                    r = l.a.createElement(Ke.b, { style: { paddingBottom: te.a.theme.spaces.space4 }, weight: 'bold' }),
                    i = l.a.createElement(
                      ce.a,
                      null,
                      l.a.createElement(
                        Ke.b,
                        { style: { paddingBottom: te.a.theme.spaces.space20 } },
                        l.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'a496f1c8' },
                          l.a.cloneElement(n, null, X.a.e8bc24ae({ screenName: t })),
                        ),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'd0271e51' },
                        l.a.cloneElement(a, null, X.a.ff050532),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        l.a.createElement(
                          Ke.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: te.a.theme.spaces.space20 },
                          },
                          X.a.b48bd8bf,
                        ),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'h9bd2805' },
                        l.a.cloneElement(a, null, X.a.ia457a19),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        l.a.cloneElement(r, null, X.a.f5531a44),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        l.a.cloneElement(a, null, X.a.h173a610),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        l.a.cloneElement(r, null, X.a.ha985c95),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        l.a.cloneElement(a, null, X.a.d5d82dd3),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        l.a.cloneElement(r, null, X.a.i4b9b3d0),
                      ),
                      l.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        l.a.cloneElement(a, null, X.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: qn, message: i })
                },
              },
              {
                key: '_renderUserProfileSuspended',
                value: function () {
                  var e,
                    t = this.props.suspendMessage
                  return (
                    (e =
                      this.context.featureSwitches.isTrue('suspended_profile_tombstone_enabled') && t
                        ? l.a.createElement(Et.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                        : l.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'f6fa2033' },
                            l.a.createElement(
                              Ke.b,
                              { link: 'https://support.twitter.com/articles/18311' },
                              X.a.f3b1bdc1,
                            ),
                          )),
                    this._renderEmptyState({ header: er, message: e })
                  )
                },
              },
              {
                key: '_renderUserProfileWithheld',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.description,
                    a = e.entities,
                    n = e.id_str
                  if (!t) return null
                  var r = Pn.a.descriptionTextParts(t, a),
                    i = l.a.createElement(
                      Ke.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      r.map(function (e, t) {
                        return l.a.createElement(Tn.c, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: rr, message: i })
                },
              },
              {
                key: '_renderLoggedInUserProfileWithheld',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.description,
                    a = e.entities,
                    n = e.id_str
                  if (!t) return null
                  var r = Pn.a.descriptionTextParts(t, a)
                  return l.a.createElement(
                    ce.a,
                    null,
                    l.a.createElement(
                      ce.a,
                      { style: Cr.withheldMessageRoot },
                      l.a.createElement(
                        Ke.b,
                        { align: 'center', size: 'title4', style: Cr.withheldMessageHeader, weight: 'bold' },
                        rr,
                      ),
                      l.a.createElement(
                        Ke.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        r.map(function (e, t) {
                          return l.a.createElement(Tn.c, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    l.a.createElement(Ln.a, null),
                    this._renderUserProfileDefault(),
                  )
                },
              },
              {
                key: '_renderUserProfileProtected',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = l.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      l.a.createElement(Ke.b, { link: 'https://support.twitter.com/articles/14016' }, X.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: nr, message: a })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: tr, message: ar })
                },
              },
              {
                key: '_renderUserProfileDefault',
                value: function () {
                  var e = this.props,
                    t = e.hasTwitterArticles,
                    a = e.history.location,
                    n = e.isActiveCreator,
                    i = e.twitterArticlesFetchStatus,
                    o = e.user
                  if (!o) return null
                  var s = o.screen_name,
                    c = this.state.showBlockedTweets,
                    u = a.query,
                    d = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    m = (this._isViewingOwnProfile() && n) || o.super_following,
                    p = this.context.featureSwitches.isTrue('profile_foundations_about_tab_enabled'),
                    f = this._canViewTwitterArticles && t,
                    h = function (e) {
                      var t = d ? Kn : Vn
                      return [
                        p
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(fr), query: u },
                              key: zn,
                              label: zn,
                              onClick: e(),
                            }
                          : void 0,
                        {
                          isActive: function () {
                            return (
                              a.pathname.toLowerCase() === '/'.concat(s).toLowerCase() ||
                              a.pathname.toLowerCase() === '/'.concat(s, '/').toLowerCase() ||
                              a.pathname.indexOf('/intent/follow') > -1 ||
                              a.pathname.indexOf('/intent/user') > -1
                            )
                          },
                          to: { pathname: '/'.concat(s), query: u },
                          key: Un,
                          label: Un,
                        },
                        { to: { pathname: '/'.concat(s, '/').concat(vr), query: u }, key: Dn, label: Dn },
                        m
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(_r), query: u },
                              key: Hn,
                              label: Hn,
                              color: 'plum500',
                            }
                          : void 0,
                        f
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(yr), query: u },
                              key: Wn,
                              label: Wn,
                              onClick: e(),
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(s, '/').concat(gr), query: u }, key: jn, label: jn, onClick: e() },
                        {
                          to: { pathname: '/'.concat(s, '/').concat(d ? br : hr), query: u },
                          key: t,
                          label: t,
                          onClick: e(),
                        },
                      ]
                    },
                    g = { displayBlocked: c, fullName: o.name, screenName: o.screen_name, userId: o.id_str },
                    b = { isActiveCreator: n, isSuperFollowing: o.super_following }
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(Fa.a, null, function (e) {
                      return l.a.createElement(Nn.a, { accessibilityLabel: An, links: h(e) })
                    }),
                    l.a.createElement(
                      xn.d,
                      null,
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/intent/follow' },
                        l.a.createElement(ur, r()({}, g, b)),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/intent/user' },
                        l.a.createElement(ur, r()({}, g, b)),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/'.concat(mn.J) },
                        l.a.createElement(ur, r()({}, g, b, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/'.concat(mn.J, '/').concat(vr) },
                        l.a.createElement(ur, r()({}, g, b, { mode: 'with_replies' })),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/'.concat(mn.J, '/').concat(_r) },
                        l.a.createElement(ur, r()({}, g, b, { mode: 'superfollows' })),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/'.concat(mn.J, '/').concat(yr) },
                        l.a.createElement(dr, r()({}, g, { hasTwitterArticles: t, twitterArticlesFetchStatus: i })),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/'.concat(mn.J, '/').concat(gr) },
                        l.a.createElement(pr, g),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/'.concat(mn.J, '/(').concat(hr, '|').concat(br, ')') },
                        l.a.createElement(mr, g),
                      ),
                      l.a.createElement(
                        xn.b,
                        { exact: !0, path: '/'.concat(mn.J, '/').concat(fr) },
                        l.a.createElement(ur, r()({}, g, b, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_fetchOneUserIfNeeded',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    a = e.fetchOneByScreenNameWithExtraFieldsIfNeeded,
                    n = e.screenName
                  return n ? a(n).catch(t(Ba.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(a(Ba.a))
                },
              },
              {
                key: '_isUserAvatarVerified',
                value: function () {
                  var e = this.props.user
                  return null == e ? void 0 : e.has_nft_avatar
                },
              },
              {
                key: '_isUserAutoblocked',
                value: function () {
                  var e = this.props.user
                  return (null == e ? void 0 : e.smart_blocked_by) && this._safetyModeViolatorExperienceEnabled
                },
              },
              {
                key: '_isUserAutoblocking',
                value: function () {
                  var e = this.props.user
                  return (null == e ? void 0 : e.smart_blocking) && this._safetyModeUserExperienceEnabled
                },
              },
              {
                key: '_shouldHideMediaModule',
                value: function () {
                  var e = this.props.user
                  return (
                    this._shouldShowProfileInterstitial() ||
                    this._isProtectedFromViewer() ||
                    (e && (e.blocked_by || (e.blocking && !this.state.showBlockedTweets)))
                  )
                },
              },
              {
                key: '_isValidProfile',
                value: function () {
                  var e = this.props,
                    t = e.isNotFound,
                    a = e.isSuspended,
                    n = e.isWithheld,
                    r = e.user
                  return (
                    r &&
                    !r.blocking &&
                    !r.smart_blocking &&
                    !r.smart_blocked_by &&
                    !r.blocked_by &&
                    !this._isViewingOwnProfile() &&
                    !this._isProtectedFromViewer() &&
                    !a &&
                    !t &&
                    !n &&
                    !this._shouldShowProfileInterstitial()
                  )
                },
              },
            ]),
            a
          )
        })(l.a.Component)
      B()(kr, 'contextType', V.a),
        B()(kr, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return l.a.createElement(Oa, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return l.a.createElement(hn, e)
          },
          recordTTFL: R.c,
          recordTTFMC: R.d,
        })
      var Sr = Object(Sn.a)(kr),
        Cr = te.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        Ir = te.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        Fr = function (e) {
          return l.a.createElement(w.a, { userId: e.user && e.user.id_str }, function (t) {
            var a = t.scribeNamespace
            return l.a.createElement(Sr, r()({}, e, { scribeNamespace: a }))
          })
        }
      t.default = E(Fr)
    },
    nUER: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'LocationSpotlight_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '9c8dfb09cccf9c8338bfa02a25fe4c6b',
      }
      t.default = n
    },
  },
])
//# sourceMappingURL=WIPED
