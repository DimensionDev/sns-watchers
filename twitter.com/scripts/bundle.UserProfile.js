;(window.webpackJsonp = window.webpackJsonp || []).push([
  [112],
  {
    cFl3: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserTwitterArticlesScreen', function () {
          return f
        })
      var n = a('ERkP'),
        r = a.n(n),
        o = a('v6aA'),
        i = a('v//M'),
        s = a('3XMw'),
        l = a.n(s),
        c = a('5FtR'),
        u = a('rHpw'),
        d = a('c6pJ'),
        m = a('MWbm'),
        p = l.a.i9028824,
        f = function (e) {
          var t = r.a.useContext(o.a).featureSwitches,
            a = e.hasTwitterArticles,
            n = e.screenName,
            s = e.twitterArticlesFetchStatus,
            l = e.userId,
            u = t.isTrue('responsive_web_twitter_article_view_enabled'),
            f = r.a.createElement(c.a, { to: '/'.concat(n) })
          return u
            ? r.a.createElement(i.a, {
                accessibilityLabel: p,
                fetchStatus: s,
                render: function () {
                  return a
                    ? r.a.createElement(
                        m.a,
                        { style: h.container },
                        r.a.createElement(d.a, { linkToEditScreen: !1, publishedOnly: !0, userId: l }),
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
    'll/Q': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserProfileScreenContainer', function () {
          return Zn
        })
      var n = a('97Jx'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        s = (a('KqXw'), a('WNMA'), a('jQ3i'), a('x4t0'), a('P1r1')),
        l = a('hqKg'),
        c = a('kGix'),
        u = a('zh9S'),
        d = a('pIB9'),
        m = a('0KEI'),
        p = a('oEGd'),
        f = a('RqPI'),
        h = a('G6rE'),
        b = function (e, t) {
          var a = t.location,
            n = t.match
          return n && n.params && n.params.screenName
            ? n.params.screenName
            : a && a.query && a.query.screen_name && 'string' == typeof a.query.screen_name
            ? a.query.screen_name
            : ''
        },
        _ = function (e, t) {
          return h.e.selectByScreenName(e, b(0, t))
        },
        g = Object(h.g)([h.a]),
        y = Object(l.createSelector)(
          s.l,
          function (e, t) {
            return g(e, b(0, t))
          },
          function (e, t) {
            var a = h.e.selectIdByScreenName(e, b(0, t))
            return (a ? d.a.selectTwitterArticles(e, a, !0) : []).length > 0
          },
          f.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return h.e.selectIsUserNotFound(e, b(0, t))
          },
          function (e, t) {
            var a = _(e, t)
            return !!a && h.e.selectIsLoading(e, a.id_str)
          },
          function (e, t) {
            return h.e.selectIsUserSuspended(e, b(0, t))
          },
          function (e, t) {
            return h.e.selectUserSuspendMessage(e, b(0, t))
          },
          function (e, t) {
            return h.e.selectIsUserWithheld(e, b(0, t))
          },
          function (e, t) {
            var a = t.location,
              n = ((a && a.state) || {}).promotedTweetState,
              r = _(e, t)
            return n || (r && r.promoted_content)
          },
          b,
          f.x,
          function (e, t) {
            var a = h.e.selectIdByScreenName(e, b(0, t))
            return a ? d.a.selectFetchStatus(e, a, !0) : c.a.NONE
          },
          _,
          function (e, t) {
            var a = _(e, t)
            return a && a.profile_interstitial_type ? a.profile_interstitial_type : null
          },
          f.o,
          function (e, t, a, n, r, o, i, s, l, c, u, d, m, p, f, h, b) {
            return {
              displaySensitiveMedia: e,
              fetchStatus: t,
              hasTwitterArticles: a,
              isActiveCreator: n,
              isIntentRoute: r,
              isNotFound: o,
              isRefreshing: i,
              isSuspended: s,
              suspendMessage: l,
              isWithheld: c,
              promotedContent: u,
              screenName: d,
              superFollowersCount: m,
              twitterArticlesFetchStatus: p,
              user: f,
              userProfileInterstitialType: h,
              userLanguage: b,
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
          fetchSettingsIfNeeded: s.f,
          fetchTwitterArticlesIfNeeded: d.a.fetchIfNeeded,
          scribeAction: u.c,
        },
        E = Object(p.g)(y, v),
        w = a('txMZ'),
        k = a('yiKp'),
        C = a.n(k),
        S = a('VrFO'),
        I = a.n(S),
        P = a('Y9Ll'),
        T = a.n(P),
        F = a('1Pcy'),
        N = a.n(F),
        x = a('5Yy7'),
        O = a.n(x),
        B = a('2VqO'),
        L = a.n(B),
        A = a('KEM+'),
        M = a.n(A),
        U =
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
        R = a('mC9n'),
        D = a('s4rk'),
        H = a('zI2C'),
        j = a('6ZtA'),
        W = a('es0u'),
        V = (a('hBvt'), a('v6aA')),
        z = a('I/ms'),
        q = a('rxPX'),
        J = a('M0jS'),
        G = function (e, t) {
          return Object(J.c)(e, t.user.id_str)
        },
        $ = function (e, t) {
          var a = J.b.select(e, t.user.id_str)
          return null != a && a.refresh_delay_secs ? 1e3 * a.refresh_delay_secs : 1e3 * J.a
        },
        Y = Object(q.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('SELECT_SPACE'),
              fetchUsersPresence: J.b.fetchManyIfNeeded,
            }
          })
          .propsFromState(function () {
            return { userPresencePollingInterval: $, userSpace: G }
          })
          .withAnalytics(),
        K = a('3XMw'),
        X = a.n(K),
        Q = a('B5iK')
      var Z = a('TIdA'),
        ee = a('rHpw'),
        te = a('1I0O'),
        ae = a('jhWN'),
        ne = a('cHvH'),
        re = Z.a.createLayoutCache(),
        oe = Y(function (e) {
          var t,
            a,
            n,
            o,
            s,
            l = e.analytics,
            c = e.createLocalApiErrorHandler,
            u = e.fetchUsersPresence,
            d = e.isOwnProfile,
            m = e.isWithheld,
            p = e.user,
            f = e.userPresencePollingInterval,
            h = e.userSpace,
            b = i.a.useContext(V.a),
            _ = b.featureSwitches,
            g = b.loggedInUserId,
            y = !d && m,
            v = y || !p.profile_image_url_https ? void 0 : p.profile_image_url_https,
            E =
              g &&
              (_.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ||
                _.isTrue('voice_rooms_typeahead_audiospace_ring_enabled')),
            w = p.has_nft_avatar && _.isTrue('responsive_web_nft_avatar'),
            k = h && E,
            C = i.a.useCallback(
              function () {
                var e
                E && (null === (e = u([p.id_str])) || void 0 === e || e.catch(c({})))
              },
              [p.id_str, E, u, c],
            )
          i.a.useEffect(
            function () {
              return C()
            },
            [C],
          ),
            i.a.useEffect(function () {
              w && l.scribe({ element: 'nft_avatar', action: 'impression' })
            }, []),
            (t = function () {
              return C()
            }),
            (a = E ? f : void 0),
            (n = i.a.useRef()),
            i.a.useEffect(
              function () {
                n.current = t
              },
              [t],
            ),
            i.a.useEffect(
              function () {
                if (n.current && a) {
                  var e = new Q.b(a).interval(n.current)
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
              ? ((s = h.accessibilityLabel), (o = h.link))
              : y ||
                (w
                  ? ((s = ie.opensNFTDetails), (o = { pathname: '/'.concat(p.screen_name, '/nft') }))
                  : ((s = ie.opensProfilePhoto), (o = { pathname: '/'.concat(p.screen_name, '/photo') })))
          var S = function (e) {
              l.scribe({ element: w ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            I = function (e) {
              var t = e.windowWidth >= ee.a.theme.breakpoints.medium,
                a = {
                  accessibilityLabel: s,
                  imageLayoutCache: re,
                  link: o,
                  onClick: S,
                  size: 'custom',
                  uri: v,
                  screenName: p.screen_name,
                }
              return h && k
                ? i.a.createElement(te.a, r()({}, a, { presenceRingType: h.presenceRingType, style: z.a.avatar }))
                : i.a.createElement(
                    ae.a,
                    r()({}, a, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: z.a.avatar,
                    }),
                  )
            }
          return i.a.createElement(ne.a, null, I)
        }),
        ie = { opensProfilePhoto: X.a.f30795df, opensNFTDetails: X.a.a270100c },
        se = a('RCZO'),
        le = a('MWbm'),
        ce = a('n4Eu'),
        ue = a('cm6r'),
        de = a('A91F'),
        me = a('9Xij'),
        pe = Z.a.createLayoutCache(),
        fe = function (e) {
          var t = e.isOwnProfile,
            a = e.isWithheld,
            n = e.user,
            r = !t && a,
            o = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            s = o && ce.a.get(o),
            l = s ? Object(se.g)(s) : ee.a.theme.colors.gray200
          return !r && n.profile_banner_url
            ? i.a.createElement(
                ue.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                i.a.createElement(Z.a, {
                  accessibilityLabel: '',
                  aspectMode: de.a.exact(ee.a.theme.aspectRatios.profileBanner),
                  backgroundColor: l,
                  image: n.profile_banner_url,
                  layoutCache: pe,
                }),
              )
            : i.a.createElement(
                le.a,
                { style: z.a.banner },
                i.a.createElement(me.a, {
                  ratio: ee.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: l },
                }),
              )
        },
        he = a('3nOA'),
        be = a('I57f'),
        _e = a('uIZp'),
        ge = a('SOvA'),
        ye = a('vYiB'),
        ve = a('Y49K'),
        Ee = a('Irs7'),
        we = a('/yvb'),
        ke = a('ACHU'),
        Ce = a('rsoE'),
        Se = a('vMjK'),
        Ie = X.a.h63a5c3b,
        Pe = i.a.createElement(ke.a, null),
        Te = (function (e) {
          O()(a, e)
          var t = L()(a)
          function a() {
            var e
            I()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              M()(N()(e), '_renderUserMenu', function (t) {
                var a = e.props,
                  n = a.promotedContent,
                  r = a.user
                return i.a.createElement(Se.b, { onClose: t, promotedContent: n, user: r, view: 'profile' })
              }),
              e
            )
          }
          return (
            T()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.buttonStyle
                  return i.a.createElement(we.a, {
                    accessibilityLabel: Ie,
                    hoverLabel: { label: Ie },
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
        })(i.a.PureComponent),
        Fe = a('pHkl'),
        Ne = X.a.g7088266,
        xe = X.a.gd7acb84,
        Oe = X.a.b7636014,
        Be = i.a.createElement(ge.a, null),
        Le = ee.a.create(function (e) {
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
        Ae = function (e) {
          var t = e.history,
            a = e.isWithheld,
            n = e.loggedInUserId,
            r = e.onFollowButtonOffscreen,
            o = e.promotedContent,
            s = e.user,
            l = Object(Ee.b)(),
            c = s.id_str === n,
            u = s.blocked_by,
            d = s.blocking,
            m = a && !c,
            p = s.can_dm && n && !d && !u && !m,
            f = n && s && !c && !m,
            h = s.following && n && !d && !u && !a,
            b = s.default_profile_image && !s.description && !s.profile_banner_url
          return i.a.createElement(
            le.a,
            { style: Le.buttons },
            n && c
              ? i.a.createElement(
                  we.a,
                  {
                    link: b ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Le.lastButton,
                    testID: ve.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  b ? xe : Ne,
                )
              : null,
            f && i.a.createElement(Te, { buttonStyle: Le.button, promotedContent: o, user: s }),
            !c &&
              p &&
              i.a.createElement(we.a, {
                accessibilityLabel: Oe,
                hoverLabel: { label: Oe },
                icon: Be,
                onPress: function () {
                  if (n) {
                    var e = Object(he.a)(s.id_str, n)
                    l.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Fe.h.ONE_TO_ONE,
                        inbox_type: Fe.c.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Le.button,
                testID: ve.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              h &&
              i.a.createElement(be.a, {
                allowPromptForPush: !0,
                isFollowing: s.notifications,
                style: Le.button,
                userId: s.id_str,
              }),
            !c &&
              !u &&
              !m &&
              i.a.createElement(
                ye.a,
                { onOffscreenChange: r },
                i.a.createElement(_e.a, { promotedContent: o, style: Le.lastButton, userId: s.id_str }),
              ),
          )
        },
        Me = a('tOzk'),
        Ue = a('YeIG'),
        Re = a('Je1/'),
        De = a('uLiA'),
        He = a('EJJl'),
        je = a('WWyu'),
        We = a('LhSm'),
        Ve = a('t62R'),
        ze = a('GWvE'),
        qe = a('Lsrn'),
        Je = a('k/Ka'),
        Ge = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Je.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19.75 6.357h-2.426V4.73c0-1.23-1.01-2.23-2.25-2.23H8.927c-1.24 0-2.25 1-2.25 2.23v1.627H4.25c-1.24 0-2.25 1-2.25 2.23V19.27c0 1.23 1.01 2.23 2.25 2.23h15.5c1.24 0 2.25-1 2.25-2.23V8.587c.002-1.23-1.008-2.23-2.25-2.23zM8.176 4.73c0-.41.337-.744.75-.744h6.144c.414 0 .75.333.75.743v1.627H8.178V4.73zM4.25 7.842h15.5c.413 0 .75.333.75.743v3h-17v-3c0-.41.337-.743.75-.743zm15.5 12.17H4.25c-.413 0-.75-.333-.75-.742v-6.197h17v6.198c0 .41-.338.744-.75.744z',
              }),
            ),
          )
        }
      Ge.metadata = { width: 24, height: 24 }
      var $e = Ge,
        Ye = a('KrGU'),
        Ke = a('I/9y'),
        Xe = a('YUdS'),
        Qe = a('EjKN'),
        Ze = X.a.a1ea2f12,
        et = X.a.g8191e77,
        tt = function (e) {
          var t = e.day,
            a = e.month
          if (t && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && t === n.getDate()
          }
        },
        at = ee.a.create(function (e) {
          return {
            description: { display: 'block', marginBottom: e.spaces.space12 },
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
            noCursor: { cursor: 'inherit' },
          }
        }),
        nt = function (e) {
          var t,
            a,
            n,
            r = e.isOwnProfile,
            o = e.professionalCategoryName,
            s = e.user,
            l = i.a.useRef(),
            c = Object(Ee.b)(),
            u = r ? { page: 'me' } : { page: 'profile' },
            d =
              null === (t = s.entities) ||
              void 0 === t ||
              null === (a = t.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            m = s.birthdate
          return i.a.createElement(
            i.a.Fragment,
            null,
            s.description
              ? i.a.createElement(
                  le.a,
                  { style: at.description },
                  i.a.createElement(He.a, {
                    description: s.description,
                    disableTranslation: !s.is_profile_translatable,
                    entities: s.entities,
                    testID: De.a.userDescription,
                    userId: s.id_str,
                    withheldDescription: s.withheld_description,
                    withheldEntities: s.withheld_entities,
                  }),
                )
              : null,
            i.a.createElement(
              le.a,
              { style: at.details },
              i.a.createElement(
                Ve.b,
                { style: at.detailsText, testID: De.a.profileHeaderItems },
                o
                  ? i.a.createElement(
                      Re.a,
                      {
                        Icon: $e,
                        onPress: function () {
                          c.scribe(C()(C()({}, u), R.b()))
                        },
                        style: at.noCursor,
                        testID: De.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      i.a.createElement(Ve.b, null, o),
                    )
                  : null,
                s.location && !Object(ze.a)(s.location)
                  ? i.a.createElement(
                      Re.a,
                      { Icon: Ye.a, testID: De.a.userLocation },
                      i.a.createElement(Ve.b, null, s.location),
                    )
                  : null,
                d && d.url
                  ? i.a.createElement(
                      Re.a,
                      { Icon: Ke.a, link: { pathname: d.url, external: !0 }, testID: De.a.userUrl },
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
                  : tt(m)
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        Re.a,
                        {
                          Icon: Xe.a,
                          onPress: function () {
                            l.current && l.current.launch()
                          },
                        },
                        r ? Ze : et,
                      ),
                      i.a.createElement(Me.a, {
                        setRef: function (e) {
                          l.current = e
                        },
                      }),
                    )
                  : i.a.createElement(
                      Re.a,
                      { Icon: Qe.a, testID: De.a.userBirthdate },
                      i.a.createElement(je.a, { birthdate: m, withBornPrefixText: !0 }),
                    ),
                i.a.createElement(We.a, { joinDate: s.created_at }),
              ),
            ),
          )
        },
        rt = a('mN6z'),
        ot = a('W27K'),
        it = a('ddV6'),
        st = a.n(it),
        lt = a('1YZw'),
        ct = Object(q.a)().propsFromActions(function () {
          return {
            addToast: lt.b,
            createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: h.e.unmute,
          }
        }),
        ut = a('8Usl'),
        dt = a('eb3s'),
        mt = a('P2xQ'),
        pt = X.a.cef4e8cf,
        ft = X.a.ec294e62,
        ht = X.a.df422dfe,
        bt = ee.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        _t = ct(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            n = e.unmute,
            r = e.user,
            o = i.a.useState(!1),
            s = st()(o, 2),
            l = s[0],
            c = s[1],
            u = r.screen_name
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              Ve.b,
              { color: 'gray700', style: bt.mute },
              ht,
              ' ',
              i.a.createElement(
                Ve.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: bt.unmuteButton,
                  testID: ut.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                mt.g,
              ),
            ),
            l
              ? i.a.createElement(dt.a, {
                  confirmButtonLabel: mt.g,
                  headline: pt({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(r.id_str).then(function () {
                        return t({ text: Object(mt.d)(r.screen_name) })
                      }, a({ showToast: !0 }))
                  },
                  text: ft,
                })
              : null,
          )
        }),
        gt = a('RgK2'),
        yt = a.n(gt),
        vt = a('rcen'),
        Et = 'UserName',
        wt = a('X04g'),
        kt = a('A7Fw'),
        Ct = X.a.e839db39,
        St = X.a.b74bd6c6,
        It = X.a.f15bfdb3,
        Pt = X.a.i859a9d3,
        Tt = ee.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        Ft = function (e) {
          var t = e.dismiss,
            a = e.type,
            n = Object(Ee.b)()
          i.a.useEffect(
            function () {
              n.scribe({ component: 'blue_badge_education_context', action: 'show' })
            },
            [n],
          )
          var r = i.a.useCallback(
            function () {
              n.scribe({ component: 'blue_badge_education_context', element: 'support_url', action: 'click' })
            },
            [n],
          )
          return i.a.createElement(
            le.a,
            { style: Tt.content },
            i.a.createElement(kt.a, { style: Tt.icon }),
            i.a.createElement(Ve.b, { size: 'title4', style: Tt.text, weight: 'bold' }, It),
            i.a.createElement(
              Ve.b,
              { color: 'gray700', style: Tt.text },
              St,
              ' ',
              i.a.createElement(
                Ve.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: r },
                Pt,
              ),
            ),
            'sheet' === a
              ? i.a.createElement(we.a, { onClick: t, style: Tt.button, type: 'primaryOutlined' }, Ct)
              : null,
          )
        },
        Nt = a('jV+4'),
        xt = a('ir4X'),
        Ot = function (e) {
          var t,
            a = e.isOwnProfile,
            n = e.isWithheld,
            o = e.namespace,
            s = e.user,
            l = Object(Ee.b)(),
            c = i.a.useContext(V.a).featureSwitches,
            u = n ? yt.a : { isProtected: !!s.protected, isVerified: !!s.verified, translatorType: s.translator_type },
            d = s.name && s.screen_name && !(n && !a),
            m = d ? s.name : '@'.concat(s.screen_name),
            p = i.a.useCallback(function (e, t) {
              return i.a.createElement(Ft, { dismiss: e, type: t })
            }, []),
            f = c.isTrue('identity_verification_educational_prompt_enabled'),
            h = c.isTrue('account_taxonomy_automated_label_enabled'),
            b = s.highlightedLabel
          if ('AutomatedLabel' === (null === (t = s.highlightedLabel) || void 0 === t ? void 0 : t.userLabelType)) {
            var _,
              g,
              y,
              v =
                null !== (_ = s.highlightedLabel) &&
                void 0 !== _ &&
                null !== (g = _.longDescription) &&
                void 0 !== g &&
                g.entities
                  ? i.a.createElement(vt.a, {
                      entities: s.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: s.id_str, name: s.screen_name, item_type: wt.a.ItemType.USER }] }
                        l.scribe(C()(C()({}, o), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: s.highlightedLabel.longDescription.text,
                    })
                  : (null === (y = s.highlightedLabel) || void 0 === y ? void 0 : y.description) || null
            b = h ? C()(C()({}, s.highlightedLabel), {}, { description: v }) : null
          }
          return i.a.createElement(
            le.a,
            { style: z.a.names, testID: Et },
            i.a.createElement(
              Nt.a,
              r()({}, u, {
                badgeContext: 'account',
                name: m,
                nameSize: 'headline1',
                renderVerifiedBadgeContext: f ? p : void 0,
                screenName: d ? s.screen_name : void 0,
                weight: 'heavy',
                withFollowsYou: s.followed_by && !n,
                withNameWrap: !0,
                withStackedLayout: !0,
              }),
            ),
            b ? i.a.createElement(xt.a, { isIconLarge: !0, label: b }) : null,
          )
        },
        Bt = (a('uFXj'), a('W55q')),
        Lt = a('YeSc'),
        At = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Mt = Object(q.a)()
          .propsFromState(function () {
            return { newsletter: Lt.f }
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
                Bt.c.Subscribed,
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
              fetchUserBizProfileIfNeeded: Lt.c,
            }
          })
          .withAnalytics(At),
        Ut = Object(q.a)()
          .propsFromState(function () {
            return { newsletter: Lt.f }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n,
              r,
              o,
              i,
              s,
              l,
              c,
              u,
              d,
              m,
              p,
              f,
              h,
              b,
              _,
              g = e.newsletter,
              y =
                null == g ||
                null === (t = g.data) ||
                void 0 === t ||
                null === (a = t.revue_account) ||
                void 0 === a ||
                null === (n = a.profile_info) ||
                void 0 === n ||
                null === (r = n.profile_image) ||
                void 0 === r ||
                null === (o = r.image_variants) ||
                void 0 === o
                  ? void 0
                  : o.map(function (e) {
                      return { height: e.height, uri: e.url, width: e.width }
                    })
            return {
              description:
                null == g ||
                null === (i = g.data) ||
                void 0 === i ||
                null === (s = i.revue_account) ||
                void 0 === s ||
                null === (l = s.newsletter_info) ||
                void 0 === l
                  ? void 0
                  : l.description,
              imageVariants: y,
              originalImage:
                null == g ||
                null === (c = g.data) ||
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
                null == g ||
                null === (p = g.data) ||
                void 0 === p ||
                null === (f = p.revue_account) ||
                void 0 === f ||
                null === (h = f.newsletter_info) ||
                void 0 === h
                  ? void 0
                  : h.title,
              subscriberCount:
                null == g || null === (b = g.data) || void 0 === b || null === (_ = b.account_analytics) || void 0 === _
                  ? void 0
                  : _.subscriber_count,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        Rt = a('855f'),
        Dt = a('vbJ7'),
        Ht = function (e) {
          var t = e.description,
            a = e.isMobileLayout,
            n = e.originalImage,
            r = e.subscriberCount,
            o = e.title,
            s = e.withThumbnail,
            l = parseInt(r, 10) || 0,
            c = Rt.a.getTruncatedCount(l),
            u = a ? 'subtext2' : 'body'
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              le.a,
              { style: jt.contentContainer },
              s && n
                ? i.a.createElement(
                    le.a,
                    { style: [jt.newsletterImageContainer, a ? jt.newsletterImageContainerMobile : void 0] },
                    i.a.createElement(
                      me.a,
                      { ratio: 1 },
                      i.a.createElement(Z.a, { accessibilityLabel: t || '', aspectMode: de.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              i.a.createElement(
                le.a,
                { style: [jt.newsletterInfoContainer, a ? jt.mobileNewsletterInfoContainer : void 0] },
                i.a.createElement(
                  Ve.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: a ? jt.newsletterFieldMobile : jt.newsletterField,
                    weight: 'bold',
                  },
                  o,
                ),
                i.a.createElement(
                  Ve.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [jt.newsletterDescription, a ? jt.newsletterFieldMobile : jt.newsletterField],
                  },
                  t,
                ),
                r
                  ? i.a.createElement(
                      Ve.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: a ? jt.newsletterFieldMobile : jt.newsletterField,
                      },
                      i.a.createElement(X.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: l }),
                    )
                  : null,
              ),
            ),
          )
        }
      Ht.defaultProps = { withThumbnail: !0 }
      var jt = ee.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Dt.a.hexToCss(ee.a.theme.colors.borderColor, 0.7),
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
        Wt = Ut(Ht),
        Vt = a('Rp9C'),
        zt = a('I4+6'),
        qt = X.a.d834aec4,
        Jt = X.a.ab0deccf,
        Gt = X.a.caeab0f7,
        $t = ee.a.create(function (e) {
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
        Yt = Mt(function (e) {
          var t = i.a.useContext(V.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
            a = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.fetchUserBizProfileIfNeeded,
            o = e.isSubscribed,
            s = e.profileUrl,
            l = e.revueAccountId,
            c = e.screenName,
            u = e.showNewsletterSubscription,
            d = e.user,
            m = e.userId,
            p = t && u,
            f = i.a.useCallback(
              function (e) {
                if (p) {
                  var t = Vt.a.getUserItem(d),
                    n = t.is_user_follows_viewer,
                    r = t.is_viewer_follows_user,
                    i = [{ id: l, is_viewer_follows_user: r, is_user_follows_viewer: n }]
                  a.scribe({ action: e, element: o ? 'start_reading_btn' : 'subscribe_btn', data: { items: i } })
                }
              },
              [a, o, l, p, d],
            )
          i.a.useEffect(
            function () {
              t && r(m).catch(n())
            },
            [n, r, t, m],
          ),
            i.a.useEffect(
              function () {
                f('impression')
              },
              [p],
            )
          var h = function (e) {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                le.a,
                { style: $t.moduleLabel },
                i.a.createElement(Ve.b, { size: 'body', weight: 'bold' }, qt),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  a = o ? s : t,
                  n = o ? Gt : Jt,
                  r = ee.a.isDarkMode() ? ee.a.theme.colors.gray50 : ee.a.theme.colors.gray0,
                  l = zt.a.generate({
                    backgroundColor: ee.a.theme.colors.transparent,
                    color: ee.a.theme.colors.primary,
                    customFocusBackgroundColor: r,
                    customHoverBackgroundColor: r,
                    customPressedBackgroundColor: r,
                  })
                return i.a.createElement(
                  ue.a,
                  {
                    interactiveStyles: l,
                    link: a,
                    onPress: function () {
                      return f('click')
                    },
                    style: [$t.moduleContainer, ee.a.isDarkMode() ? $t.darkModeBackground : $t.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      le.a,
                      { style: [$t.contentContainer, $t.summaryContainer] },
                      i.a.createElement(Wt, { isMobileLayout: e, userId: m, withThumbnail: !0 }),
                    ),
                    i.a.createElement(
                      le.a,
                      { style: [$t.buttonContainer, e ? $t.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        Ve.b,
                        {
                          align: 'center',
                          link: a,
                          size: 'body',
                          style: $t.actionButton,
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
            ? i.a.createElement(ne.a, null, function (e) {
                var t = e.windowWidth <= ee.a.theme.breakpoints.small
                return h(t)
              })
            : null
        }),
        Kt = a('z+ta'),
        Xt = a('7JQg'),
        Qt = a('7wqI'),
        Zt = a('Jkc4'),
        ea = a('wCd/'),
        ta = function (e) {
          var t = e.isActiveCreator,
            a = e.isOwnProfile,
            n = e.superFollowersCount,
            r = e.user,
            o = r.followers_count,
            s = r.friends_count,
            l = r.screen_name
          return i.a.createElement(Zt.a, null, function (e) {
            return i.a.createElement(ea.a, {
              followersCount: o,
              friendsCount: s,
              onPress: e(),
              screenName: l,
              superFollowersCount: t && a ? n : void 0,
              withLink: Object(Qt.b)({ isOwnProfile: a, user: r }),
            })
          })
        },
        aa = { page: 'profile', section: 'header' },
        na = (function (e) {
          O()(a, e)
          var t = L()(a)
          function a(e, n) {
            var r
            return (
              I()(this, a),
              (r = t.call(this, e, n)),
              M()(N()(r), '_handleRemoveClusterFollow', function () {
                r.setState({ shouldShowClusterFollow: !1 })
              }),
              (r.state = { shouldShowClusterFollow: !1 }),
              r
            )
          }
          return (
            T()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(rt.a)(t, this.state) || !Object(rt.a)(e, this.props)
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
                    o = e.superFollowersCount,
                    s = e.user,
                    l = this._isOwnProfile(),
                    c = !l && (s.blocking || s.blocked_by || a),
                    u = !l && (s.blocked_by || a),
                    d = !n || l || s.blocking || s.blocked_by || a || (s.protected && !s.following),
                    m = !n || s.blocking || s.blocked_by || a || (s.protected && !s.following)
                  return i.a.createElement(
                    Xt.b,
                    { namespace: aa },
                    i.a.createElement(
                      le.a,
                      null,
                      i.a.createElement(fe, { isOwnProfile: l, isWithheld: a, user: s }),
                      i.a.createElement(
                        le.a,
                        { style: [z.a.content, ra.content, c && z.a.withheld] },
                        i.a.createElement(
                          le.a,
                          { style: z.a.avatarAndButton },
                          i.a.createElement(oe, { isOwnProfile: l, isWithheld: a, user: s }),
                          i.a.createElement(Ae, {
                            history: this.props.history,
                            isWithheld: a,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: s,
                          }),
                        ),
                        i.a.createElement(Ot, { isOwnProfile: l, isWithheld: a, namespace: aa, user: s }),
                        c ? null : i.a.createElement(nt, { isOwnProfile: l, professionalCategoryName: r, user: s }),
                        u
                          ? null
                          : i.a.createElement(ta, {
                              isActiveCreator: t,
                              isOwnProfile: l,
                              superFollowersCount: o,
                              user: s,
                            }),
                        d
                          ? null
                          : i.a.createElement(
                              le.a,
                              { style: ra.marginTopXSmall },
                              i.a.createElement(ot.a, { userId: s.id_str, userScreenName: s.screen_name }),
                            ),
                        s.muting ? i.a.createElement(_t, { user: s }) : null,
                      ),
                      m ? null : i.a.createElement(Yt, { screenName: s.screen_name, user: s, userId: s.id_str }),
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
                  return i.a.createElement(Kt.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            a
          )
        })(i.a.Component)
      M()(na, 'contextType', V.a)
      var ra = ee.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        oa = na,
        ia = a('8UdT'),
        sa = a('dwig'),
        la = a('GOQE'),
        ca = a('v//M'),
        ua = a('0+qk'),
        da = a('drnk'),
        ma = a('9Bb1'),
        pa = a('iFPY'),
        fa = a('5S/X'),
        ha = a('oQhu'),
        ba = a('xZGM'),
        _a = function (e, t) {
          return Object(ba.z)(e, ba.v)
        },
        ga = Object(q.a)()
          .propsFromState(function () {
            return { shouldShowEducation: _a }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ba.w)(ba.v)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        ya = a.p + 'nft_education_graphic.72be3745.png',
        va = a('Wms4'),
        Ea = a('feu+'),
        wa = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Je.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.65 9.69c-.29-2.19-1.64-3.5-3.61-3.5S8.72 7.5 8.43 9.69c-.21 1.54 0 2.65.64 3.38.76.88 1.93 1 2.97 1 1.04 0 2.21-.12 2.97-1 .48-.55.72-1.31.72-2.31 0-.33-.03-.69-.08-1.07zm-1.77 2.4c-.29.33-.84.48-1.84.48s-1.55-.15-1.85-.48c-.33-.38-.42-1.12-.28-2.2.14-1 .61-2.2 2.13-2.2 1.51 0 1.99 1.2 2.13 2.19.14 1.09.05 1.83-.29 2.21z',
              }),
              i.a.createElement('path', {
                d: 'M22.95 10.87l-4.5-7.75C18.05 2.43 17.3 2 16.5 2h-9c-.8 0-1.55.43-1.95 1.12l-4.5 7.75c-.4.7-.4 1.56 0 2.26l4.5 7.75C5.95 21.57 6.7 22 7.5 22h9c.8 0 1.55-.43 1.95-1.12l4.5-7.75c.4-.7.4-1.56 0-2.26zM16.5 20.5h-9c-.46 0-.37-.18-.37-.18.7-2.05 2.66-3.42 4.9-3.42 2.23 0 4.2 1.37 4.89 3.42 0 0 .12.19-.42.18zm5.15-8.12l-3.75 6.46c-1.14-2.1-3.38-3.44-5.87-3.44-2.52 0-4.77 1.36-5.91 3.48l-3.77-6.5c-.13-.24-.13-.52 0-.76l4.5-7.75c.13-.23.38-.37.65-.37h9c.27 0 .52.14.65.37l4.5 7.75c.13.24.13.52 0 .76z',
              }),
            ),
          )
        }
      wa.metadata = { width: 24, height: 24 }
      var ka = wa,
        Ca = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Je.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M2.4 16.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L7 10.2c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.2 5.2c-.2.1-.3.1-.5.1zm.3 6.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l5.4-5.4c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.4 5.4c-.2.1-.4.2-.6.2zm6.9-.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l4.8-4.8c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-4.8 4.8c-.2.1-.4.2-.6.2z',
              }),
              i.a.createElement('path', {
                d: 'M22.384 6.56c-.118-.368-.46-.62-.848-.62h-4.464l-1.51-4.427c-.125-.358-.462-.602-.844-.602-.383 0-.72.243-.843.603l-1.51 4.426H7.9c-.387 0-.73.25-.85.617-.117.37.017.77.333.993l3.566 2.528-1.52 4.45c-.125.363 0 .767.312.996.313.23.73.233 1.047.012l3.93-2.79 3.93 2.79c.155.11.336.164.517.164.188 0 .374-.06.53-.175.31-.23.436-.633.31-.997L18.49 10.08l3.566-2.527c.31-.226.446-.625.328-.994z',
              }),
            ),
          )
        }
      Ca.metadata = { width: 24, height: 24 }
      var Sa = Ca,
        Ia = X.a.ebf5ec25,
        Pa = X.a.c405ac8d,
        Ta = X.a.a893d601,
        Fa = X.a.eb023c93,
        Na = X.a.gc65c0a9,
        xa = X.a.d17e8aa3,
        Oa = X.a.ff9c6943,
        Ba = ee.a.create(function (e) {
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
        La = ga(function (e) {
          var t = e.addEducationFlag,
            a = e.analytics,
            n = e.onEducationSheetDismiss,
            r = e.shouldShowEducation,
            o = i.a.useContext(V.a).featureSwitches,
            s = r && !0 === o.getValueWithoutScribeImpression('responsive_web_nft_avatar'),
            l =
              (s && o.getStringValue('responsive_web_nft_avatar_help_link')) ||
              'https://help.twitter.com/managing-your-account/nfts-on-twitter',
            c = function () {
              n(), t()
            }
          i.a.useEffect(
            function () {
              return s && a.scribe({ action: 'impression' }), c
            },
            [s],
          )
          var u = i.a.createElement(
            X.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            i.a.createElement(
              Ve.b,
              {
                color: 'primary',
                link: l,
                onPress: function () {
                  a.scribe({ element: 'learn_more', action: 'click' })
                },
                testID: 'learnMore',
              },
              X.a.d8af538e,
            ),
          )
          return s
            ? i.a.createElement(Ea.a, {
                accessibilityRole: 'dialog',
                actionLabel: Ta,
                contentStyle: Ba.interstitialContent,
                graphic: function () {
                  return i.a.createElement(
                    le.a,
                    { style: Ba.image },
                    i.a.createElement(Z.a, { accessibilityLabel: '', aspectMode: de.a.exact(2.5), image: ya }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: Pa,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  a.scribe({ element: 'ok_button', action: 'click' }), c()
                },
                onClose: c,
                subtext: i.a.createElement(
                  le.a,
                  null,
                  i.a.createElement(
                    le.a,
                    null,
                    i.a.createElement(
                      Ve.b,
                      { color: 'normal', size: 'headline2', style: Ba.heading, weight: 'bold' },
                      Fa,
                    ),
                    i.a.createElement(Ve.b, null, u),
                  ),
                  i.a.createElement(
                    le.a,
                    null,
                    i.a.createElement(
                      Ve.b,
                      { color: 'normal', size: 'headline2', style: Ba.heading, weight: 'bold' },
                      Na,
                    ),
                    i.a.createElement(
                      le.a,
                      { style: Ba.iconContainer },
                      i.a.createElement(ka, { style: Ba.icon }),
                      i.a.createElement(Ve.b, null, Oa),
                    ),
                    i.a.createElement(
                      le.a,
                      { style: [Ba.iconContainer, Ba.reducedMarginBottom] },
                      i.a.createElement(Ke.a, { style: Ba.icon }),
                      i.a.createElement(Ve.b, null, xa),
                    ),
                    i.a.createElement(
                      le.a,
                      { style: [Ba.iconContainer, Ba.noMarginTop] },
                      i.a.createElement(le.a, { style: Ba.icon }),
                      i.a.createElement(
                        va.a,
                        { style: Ba.label },
                        i.a.createElement(Sa, { style: Ba.labelIcon }),
                        i.a.createElement(Ve.b, { color: 'normal', weight: 'bold' }, Ia),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        Aa = a('AJXH'),
        Ma = a('rJoH'),
        Ua = a('Y6L+'),
        Ra = a('jS2K'),
        Da = a('IG4P'),
        Ha = (function (e) {
          O()(a, e)
          var t = L()(a)
          function a() {
            return I()(this, a), t.apply(this, arguments)
          }
          return (
            T()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(rt.a)(e, this.props)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.shouldDisplayUserActionSheet
                  return i.a.createElement(
                    le.a,
                    null,
                    this._renderBanner(),
                    i.a.createElement(
                      le.a,
                      { style: [z.a.content, z.a.withheld] },
                      i.a.createElement(
                        le.a,
                        { style: z.a.avatarAndButton },
                        this._renderAvatar(),
                        i.a.createElement(le.a, { style: z.a.buttonAffordance }),
                        a && t && i.a.createElement(Te, { buttonStyle: z.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return i.a.createElement(ne.a, null, function (e) {
                    var t = e.windowWidth >= ee.a.theme.breakpoints.medium
                    return i.a.createElement(
                      le.a,
                      { accessibilityState: { hidden: !0 }, style: z.a.avatar },
                      i.a.createElement(ae.a, {
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
                  return i.a.createElement(
                    le.a,
                    { style: z.a.banner },
                    i.a.createElement(me.a, { ratio: ee.a.theme.aspectRatios.profileBanner }),
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
                    o = r ? n.name : '@'.concat(n.screen_name)
                  return i.a.createElement(
                    le.a,
                    { style: z.a.names },
                    i.a.createElement(Nt.a, {
                      name: o,
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
        })(i.a.Component),
        ja = a('wytG'),
        Wa = a('VS6U'),
        Va = (a('0zG9'), a('muX9')),
        za = function (e) {
          var t = e.screenName,
            a = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return i.a.createElement(Va.a, { script: [{ type: 'application/ld+json', innerHTML: a }] })
        },
        qa = a('ipry'),
        Ja = a('E4zi'),
        Ga = function (e) {
          var t,
            a,
            n,
            r = e.user,
            o =
              null === (t = r.entities) ||
              void 0 === t ||
              null === (a = t.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            s = {
              '@context': 'http://schema.org',
              '@type': 'ProfilePage',
              dateCreated: r.created_at,
              author: Object(Ja.a)(r),
            }
          return (
            o && (s.relatedLink = [o.url, o.expanded_url]),
            i.a.createElement(Va.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(s, null, 2) }],
            })
          )
        },
        $a = a('Qayx'),
        Ya = a('G8HL'),
        Ka = a('mw9i'),
        Xa = a('zfvc'),
        Qa = a('FIs5'),
        Za = a('Q0VY'),
        en = a('FiRh'),
        tn = a('0yYu'),
        an = a('k/OQ'),
        nn = a('zCf4'),
        rn = X.a.fa98627a,
        on = X.a.a2811f96,
        sn = X.a.c6ea308b,
        ln = X.a.d67658c0,
        cn = X.a.ccc9153f,
        un = X.a.bab1f8b0,
        dn = X.a.a52b03a5,
        mn = X.a.cc3c6989,
        pn = 'Twitter Articles',
        fn = X.a.add55c97,
        hn = X.a.d7b8eba9,
        bn = X.a.c0098d49,
        _n = X.a.b721eb37,
        gn = X.a.c4af3561,
        yn = X.a.dbcaaab5,
        vn = X.a.hf162fb6,
        En = X.a.ad7b2b38,
        wn = X.a.f19b4073,
        kn = X.a.ha62da97,
        Cn = X.a.ica87fde,
        Sn = X.a.e79ed125,
        In = X.a.g8475f82,
        Pn = X.a.c9a1cb5d,
        Tn = X.a.e7b201dd,
        Fn = X.a.d09e12c4,
        Nn = X.a.gbf342a4,
        xn = X.a.eeab4adf,
        On = X.a.i144ee20,
        Bn = X.a.j58e7b00,
        Ln = X.a.d834ab9c,
        An = { section: 'profile_interstitial' },
        Mn = Object(ja.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, '8KtR'))
        }),
        Un = Object(ja.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'cFl3'))
        }),
        Rn = Object(ja.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ivpD'))
        }),
        Dn = Object(ja.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ylAD'))
        }),
        Hn = 'about',
        jn = 'likes',
        Wn = 'media',
        Vn = 'reactions',
        zn = 'superfollows',
        qn = 'twitter-articles',
        Jn = 'with_replies',
        Gn = 36e5,
        $n = Object(ha.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        Yn = (function (e) {
          O()(a, e)
          var t = L()(a)
          function a(e, n) {
            var r
            return (
              I()(this, a),
              (r = t.call(this, e, n)),
              M()(
                N()(r),
                '_safetyModeViolatorExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              M()(
                N()(r),
                '_safetyModeUserExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              M()(
                N()(r),
                '_shouldEnableProfessionalCategoryLabelViewing',
                r.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              M()(
                N()(r),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                r.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              M()(
                N()(r),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                r.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              M()(
                N()(r),
                '_canViewTwitterArticles',
                r.context.featureSwitches.isTrue('responsive_web_twitter_article_view_enabled'),
              ),
              M()(N()(r), '_renderContainer', function () {
                var e = r.props,
                  t = e.fetchStatus,
                  a = e.isNotFound,
                  n = e.isRefreshing,
                  o = e.isSuspended,
                  s = e.screenName,
                  l = o || a
                return i.a.createElement(
                  Da.a,
                  { isRefreshing: n, onRefresh: r._handlePullToRefresh },
                  i.a.createElement(
                    le.a,
                    { style: Xn.containerGrow },
                    i.a.createElement(
                      Ka.a,
                      null,
                      i.a.createElement(ca.a, {
                        accessibilityLabel: cn({ screenName: s }),
                        fetchStatus: l ? c.a.LOADED : t,
                        onRequestRetry: r._handleRequestRetry,
                        render: r._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              M()(N()(r), '_renderHeaderAndContent', function () {
                var e = r.state.showNftAvatarEducation
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  e && i.a.createElement(La, { onEducationSheetDismiss: r._handleOnDismissNftAvatarEducation }),
                  r._renderHeader(),
                  r._renderContent(),
                )
              }),
              M()(N()(r), '_renderContent', function () {
                var e = r.props,
                  t = e.isNotFound,
                  a = e.isSuspended,
                  n = e.isWithheld,
                  o = e.user,
                  i = r.state.showBlockedTweets,
                  s = r._isViewingOwnProfile()
                return a
                  ? r._renderUserProfileSuspended()
                  : t
                  ? r._renderUserNotFound()
                  : n && s
                  ? r._renderLoggedInUserProfileWithheld()
                  : n
                  ? r._renderUserProfileWithheld()
                  : r._shouldShowProfileInterstitial()
                  ? r._renderUserProfileInterstitialed()
                  : o && o.smart_blocked_by && r._safetyModeViolatorExperienceEnabled
                  ? r._renderUserProfileAutoblockedBy()
                  : o && o.blocked_by
                  ? r._renderUserProfileBlockedBy()
                  : o && o.smart_blocking && !i && r._safetyModeUserExperienceEnabled
                  ? r._renderUserProfileSmartBlocking()
                  : o && o.blocking && !i
                  ? r._renderUserProfileBlocking()
                  : r._isProtectedFromViewer()
                  ? r._renderUserProfileProtected()
                  : r._renderUserProfileDefault()
              }),
              M()(N()(r), '_isViewingOwnProfile', function () {
                var e = r.context.loggedInUserId,
                  t = r.props.user
                return t && e === t.id_str
              }),
              M()(N()(r), '_shouldShowProfileInterstitial', function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : r.props.userProfileInterstitialType,
                  t = r.props,
                  a = t.displaySensitiveMedia,
                  n = t.user
                if (!n || !e) return !1
                var o = r.state,
                  i = o.showBlockedTweets,
                  s = o.userProfileInterstitialDismissed,
                  l = n.blocking && !i,
                  c = n.blocked_by,
                  u = e === qa.a.SensitiveMedia || e === qa.a.OffensiveProfileContent,
                  d = u && (n.following || a || fa.b)
                return !(r._isViewingOwnProfile() || r._isProtectedFromViewer() || l || c || s || d)
              }),
              M()(N()(r), '_isProtectedFromViewer', function () {
                var e = r.props.user
                return e && e.protected && !r._isViewingOwnProfile() && !e.following
              }),
              M()(N()(r), '_handleRequestRetry', function () {
                r._fetchOneUserIfNeeded(r.props)
              }),
              M()(N()(r), '_handlePullToRefresh', function () {
                var e = r.props.user
                e ? r._fetchOneUser(e.id_str) : r._fetchOneUserIfNeeded(r.props)
              }),
              M()(N()(r), '_handleShowActionedTweets', function () {
                var e = r.props,
                  t = e.history,
                  a = e.user
                a && t.push('/settings/safety_mode/actioned_tweets/'.concat(a.id_str))
              }),
              M()(N()(r), '_handleShowBlockedTweets', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace,
                  n = e.user
                r.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    r._safetyModeUserExperienceEnabled &&
                    t(C()(C()({}, a), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              M()(N()(r), '_handleOnConfirmProfileInterstitial', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace
                r.setState({ userProfileInterstitialDismissed: !0 }),
                  t(C()(C()(C()({}, a), An), {}, { action: 'click' }))
              }),
              M()(N()(r), '_handleOnDismissNftAvatarEducation', function () {
                r.setState({ showNftAvatarEducation: !1 })
              }),
              M()(N()(r), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  a = e.fetchStatus,
                  n = r.props.recordTTFL
                if ((a === c.a.FAILED && (r._shouldRecordTTFL = !1), r._shouldRecordTTFL && t.length)) {
                  var o = t.some(function (e) {
                    return e.type === ia.b.Tweet
                  })
                  r._shouldRecordTTFL = !1
                  o && n('profile', { source: 'graphql' })
                }
              }),
              M()(N()(r), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                r.setState({ showFollowButtonRightControl: t })
              }),
              M()(N()(r), '_getSmartBlockEndTimeSentence', function () {
                var e = r.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    a = parseInt(e.smart_blocking_expiration, 10),
                    n = a > t ? a - t : 0
                  if (n <= 72e5) return yn
                  var o = Math.floor(n / Gn),
                    i = Math.floor(o / 24),
                    s = o % 24
                  return 0 === i
                    ? wn({ hourCount: s })
                    : 0 === s
                    ? En({ dayCount: i })
                    : vn({ dayCount: i, hourCount: s })
                }
                return ''
              }),
              M()(N()(r), '_getProfessionalCategory', function () {
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
              M()(N()(r), '_shouldDisplayProfessionalCategoryLabel', function () {
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
              M()(N()(r), '_getProfessionalCategoryNameIfDisplayable', function () {
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
            T()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    n = t.fetchSettingsIfNeeded,
                    r = t.fetchTwitterArticlesIfNeeded,
                    o = t.scribeAction,
                    i = t.scribeNamespace,
                    s = t.user
                  this._fetchOneUserIfNeeded(this.props).then(function () {
                    e._isUserAutoblocked() &&
                      o(
                        C()(C()({}, i), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' }),
                      ),
                      e._isUserAutoblocking() &&
                        o(
                          C()(
                            C()({}, i),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && o(C()(C()({}, i), R.c())),
                    n()
                      .catch(a())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && o(C()(C()(C()({}, i), An), {}, { action: 'impression' }))
                      }),
                    this._canViewTwitterArticles && null != s && s.id_str && r(s.id_str, !0).catch(a())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t,
                    a = this.props,
                    n = a.createLocalApiErrorHandler,
                    r = a.fetchStatus,
                    o = a.fetchTwitterArticlesIfNeeded,
                    i = a.recordTTFMC,
                    s = a.user
                  if (e.fetchStatus !== r && r === c.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (
                    this._shouldRecordTTFMC &&
                    e.fetchStatus !== r &&
                    r === c.a.LOADED &&
                    this._isValidProfile()
                  ) {
                    i('profile', { source: 'graphql' }), (this._shouldRecordTTFMC = !1)
                  }
                  e.user &&
                    !e.user.blocking &&
                    this.props.user &&
                    this.props.user.blocking &&
                    (window.scrollTo(0, 0), this.setState({ showBlockedTweets: !1 })),
                    this._canViewTwitterArticles &&
                      s &&
                      s.id_str !== (null === (t = e.user) || void 0 === t ? void 0 : t.id_str) &&
                      o(s.id_str, !0).catch(n())
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props,
                    a = t.screenName,
                    n = t.scribeAction,
                    r = t.scribeNamespace,
                    o = t.userProfileInterstitialType
                  e.screenName !== a
                    ? (this._fetchOneUserIfNeeded(e), this.setState({ userProfileInterstitialDismissed: !1 }))
                    : !o &&
                      this._shouldShowProfileInterstitial(e.userProfileInterstitialType) &&
                      n(C()(C()(C()({}, r), An), {}, { action: 'impression' }))
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
                    o = t.isNotFound,
                    s = t.isSuspended,
                    l = t.isWithheld,
                    u = t.location,
                    d = t.screenName,
                    m = t.user,
                    p = t.userLanguage,
                    f = this._isViewingOwnProfile(),
                    h = s || o || (l && !f),
                    b = m ? sn({ screenName: m.screen_name, fullName: m.name }) : void 0,
                    _ = f ? '' : '@'.concat((m && m.screen_name) || d || '', ' '),
                    g = h ? null : i.a.createElement(ua.a, { getLocationState: $n(_), history: n }),
                    y =
                      m && !h
                        ? i.a.createElement(Nt.a, {
                            isProtected: m.protected,
                            isVerified: m.verified,
                            name: m.name,
                            screenName: m.screen_name,
                            withScreenName: !1,
                          })
                        : rn,
                    v = m && !h && a === c.a.LOADED ? this._renderSubtitle(m) : void 0,
                    E = m && 'twitter://user?screen_name='.concat(m.screen_name),
                    w = m && 'https://twitter.com/'.concat(m.screen_name || ''),
                    k = m && ln({ fullName: m.name, screenName: m.screen_name })
                  return i.a.createElement(Wa.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: _ },
                    documentTitle: b,
                    history: n,
                    primaryContent: i.a.createElement(
                      sa.a,
                      { fab: g },
                      i.a.createElement(Ma.a, {
                        canonical: w,
                        description: null == m ? void 0 : m.description,
                        image: null == m ? void 0 : m.profile_image_url_https,
                        title: k,
                        type: 'profile',
                      }),
                      fa.b && m
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(Ga, { user: m }),
                            i.a.createElement(ma.a, { description: null == m ? void 0 : m.description }),
                          )
                        : null,
                      i.a.createElement(H.a, { deepLink: E }),
                      i.a.createElement(j.a, {
                        featureSwitches: this.context.featureSwitches,
                        loggedInUserId: e,
                        pageType: 'profile',
                        userLanguage: p,
                      }),
                      w ? i.a.createElement(D.a, { canonical: w }) : null,
                      i.a.createElement(ca.a, {
                        accessibilityLabel: cn({ screenName: d }),
                        fetchStatus: m || h ? c.a.LOADED : a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      r
                        ? i.a.createElement(pa.a, { history: n, location: u, userId: null == m ? void 0 : m.id_str })
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
                    ? i.a.createElement(
                        Xa.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        i.a.createElement(_e.a, { promotedContent: t, userId: a.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    a = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(a, '/').concat(jn)) > -1
                    ? i.a.createElement($a.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(a, '/').concat(Vn)) > -1
                    ? i.a.createElement($a.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(a, '/').concat(Wn)) > -1
                    ? i.a.createElement($a.a, { count: e.media_count, type: 'media' })
                    : i.a.createElement($a.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? i.a.createElement(Ra.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(Qt.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : i.a.createElement(W.a, null)
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
                    o = t.isSuspended,
                    i = t.isWithheld,
                    s = t.profileHeaderRenderer,
                    l = t.promotedContent,
                    c = t.restrictedProfileHeaderRenderer,
                    u = t.screenName,
                    d = t.superFollowersCount,
                    m = t.user,
                    p = this._shouldShowProfileInterstitial(),
                    f = !this._isViewingOwnProfile() && (o || r || p),
                    h = this._getProfessionalCategoryNameIfDisplayable()
                  return f
                    ? c({
                        shouldDisplayUserActionSheet: !o && !r,
                        fullUser: m,
                        restrictedUser: { name: (m || {}).name, screen_name: u || '' },
                      })
                    : m
                    ? s({
                        history: a,
                        loggedInUserId: e,
                        isActiveCreator: n,
                        isWithheld: i,
                        onFollowButtonOffscreen: this._handleFollowButtonOffscreen,
                        promotedContent: l,
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
                    o = e.onButtonPress,
                    s = e.onSecondaryButtonPress,
                    l = e.secondaryButtonText,
                    c = e.secondaryButtonType,
                    u = this.props,
                    d = u.isSuspended,
                    m = u.screenName
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    fa.b && d && m
                      ? i.a.createElement(za, { screenName: m })
                      : fa.b
                      ? i.a.createElement(Aa.a, null)
                      : null,
                    i.a.createElement(Qa.a, {
                      buttonText: t,
                      buttonType: a,
                      header: n,
                      message: r,
                      onButtonPress: o,
                      onSecondaryButtonPress: s,
                      secondaryButtonText: l,
                      secondaryButtonType: c,
                      style: Qn.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(da.a)(e),
                    a = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: Ln,
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
                    a = Sn({ screenName: t }),
                    n = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      i.a.createElement(Ve.b, { link: 'https://support.twitter.com/articles/117063' }, X.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: xn,
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
                    n = kn({ screenName: a }),
                    r = i.a.createElement(Ve.b, { color: 'gray700', weight: 'bold' }),
                    o = i.a.createElement(
                      le.a,
                      null,
                      i.a.createElement(
                        Ve.b,
                        { color: 'gray700', style: { paddingBottom: ee.a.theme.spaces.space20 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          i.a.cloneElement(r, null, X.a.g6645d94({ screenName: a })),
                        ),
                      ),
                      i.a.createElement(
                        Ve.b,
                        { color: 'gray700', style: { paddingBottom: ee.a.theme.spaces.space8 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          i.a.cloneElement(r, null, X.a.g08eceae({ screenName: a })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: o,
                    buttonText: On,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: Bn,
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
                    a = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      i.a.createElement(Ve.b, { link: 'https://support.twitter.com/articles/20172060' }, X.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Cn, message: a })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(Ve.b, { style: { paddingBottom: ee.a.theme.spaces.space20 } }),
                    n = i.a.createElement(Ve.b, { weight: 'bold' }),
                    r = i.a.createElement(Ve.b, { style: { paddingBottom: ee.a.theme.spaces.space4 }, weight: 'bold' }),
                    o = i.a.createElement(
                      le.a,
                      null,
                      i.a.createElement(
                        Ve.b,
                        { style: { paddingBottom: ee.a.theme.spaces.space20 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'a496f1c8' },
                          i.a.cloneElement(n, null, X.a.e8bc24ae({ screenName: t })),
                        ),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'd0271e51' },
                        i.a.cloneElement(a, null, X.a.ff050532),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        i.a.createElement(
                          Ve.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: ee.a.theme.spaces.space20 },
                          },
                          X.a.b48bd8bf,
                        ),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'h9bd2805' },
                        i.a.cloneElement(a, null, X.a.ia457a19),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        i.a.cloneElement(r, null, X.a.f5531a44),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        i.a.cloneElement(a, null, X.a.h173a610),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        i.a.cloneElement(r, null, X.a.ha985c95),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        i.a.cloneElement(a, null, X.a.d5d82dd3),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        i.a.cloneElement(r, null, X.a.i4b9b3d0),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        i.a.cloneElement(a, null, X.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: gn, message: o })
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
                        ? i.a.createElement(vt.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                        : i.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'f6fa2033' },
                            i.a.createElement(
                              Ve.b,
                              { link: 'https://support.twitter.com/articles/18311' },
                              X.a.f3b1bdc1,
                            ),
                          )),
                    this._renderEmptyState({ header: In, message: e })
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
                  var r = Za.a.descriptionTextParts(t, a),
                    o = i.a.createElement(
                      Ve.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      r.map(function (e, t) {
                        return i.a.createElement(en.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: Nn, message: o })
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
                  var r = Za.a.descriptionTextParts(t, a)
                  return i.a.createElement(
                    le.a,
                    null,
                    i.a.createElement(
                      le.a,
                      { style: Xn.withheldMessageRoot },
                      i.a.createElement(
                        Ve.b,
                        { align: 'center', size: 'title4', style: Xn.withheldMessageHeader, weight: 'bold' },
                        Nn,
                      ),
                      i.a.createElement(
                        Ve.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        r.map(function (e, t) {
                          return i.a.createElement(en.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    i.a.createElement(tn.a, null),
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
                    a = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      i.a.createElement(Ve.b, { link: 'https://support.twitter.com/articles/14016' }, X.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: Fn, message: a })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Pn, message: Tn })
                },
              },
              {
                key: '_renderUserProfileDefault',
                value: function () {
                  var e = this.props,
                    t = e.hasTwitterArticles,
                    a = e.history.location,
                    n = e.isActiveCreator,
                    o = e.twitterArticlesFetchStatus,
                    s = e.user
                  if (!s) return null
                  var l = s.screen_name,
                    c = this.state.showBlockedTweets,
                    u = a.query,
                    d = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    m = (this._isViewingOwnProfile() && n) || s.super_following,
                    p = this.context.featureSwitches.isTrue('profile_foundations_about_tab_enabled'),
                    f = this._canViewTwitterArticles && t,
                    h = function (e) {
                      var t = d ? bn : hn
                      return [
                        p
                          ? {
                              to: { pathname: '/'.concat(l, '/').concat(Hn), query: u },
                              key: _n,
                              label: _n,
                              onClick: e(),
                            }
                          : void 0,
                        {
                          isActive: function () {
                            return (
                              a.pathname.toLowerCase() === '/'.concat(l).toLowerCase() ||
                              a.pathname.toLowerCase() === '/'.concat(l, '/').toLowerCase() ||
                              a.pathname.indexOf('/intent/follow') > -1 ||
                              a.pathname.indexOf('/intent/user') > -1
                            )
                          },
                          to: { pathname: '/'.concat(l), query: u },
                          key: un,
                          label: un,
                        },
                        { to: { pathname: '/'.concat(l, '/').concat(Jn), query: u }, key: dn, label: dn },
                        m
                          ? {
                              to: { pathname: '/'.concat(l, '/').concat(zn), query: u },
                              key: mn,
                              label: mn,
                              color: 'plum500',
                            }
                          : void 0,
                        f
                          ? {
                              to: { pathname: '/'.concat(l, '/').concat(qn), query: u },
                              key: pn,
                              label: pn,
                              onClick: e(),
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(l, '/').concat(Wn), query: u }, key: fn, label: fn, onClick: e() },
                        {
                          to: { pathname: '/'.concat(l, '/').concat(d ? Vn : jn), query: u },
                          key: t,
                          label: t,
                          onClick: e(),
                        },
                      ]
                    },
                    b = { displayBlocked: c, fullName: s.name, screenName: s.screen_name, userId: s.id_str },
                    _ = { isActiveCreator: n, isSuperFollowing: s.super_following }
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(Zt.a, null, function (e) {
                      return i.a.createElement(an.a, { accessibilityLabel: on, links: h(e) })
                    }),
                    i.a.createElement(
                      nn.d,
                      null,
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/intent/follow' },
                        i.a.createElement(Mn, r()({}, b, _)),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/intent/user' },
                        i.a.createElement(Mn, r()({}, b, _)),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/'.concat(Ua.J) },
                        i.a.createElement(Mn, r()({}, b, _, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/'.concat(Ua.J, '/').concat(Jn) },
                        i.a.createElement(Mn, r()({}, b, _, { mode: 'with_replies' })),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/'.concat(Ua.J, '/').concat(zn) },
                        i.a.createElement(Mn, r()({}, b, _, { mode: 'superfollows' })),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/'.concat(Ua.J, '/').concat(qn) },
                        i.a.createElement(Un, r()({}, b, { hasTwitterArticles: t, twitterArticlesFetchStatus: o })),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/'.concat(Ua.J, '/').concat(Wn) },
                        i.a.createElement(Dn, b),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/'.concat(Ua.J, '/(').concat(jn, '|').concat(Vn, ')') },
                        i.a.createElement(Rn, b),
                      ),
                      i.a.createElement(
                        nn.b,
                        { exact: !0, path: '/'.concat(Ua.J, '/').concat(Hn) },
                        i.a.createElement(Mn, r()({}, b, _, { onEntriesRendered: this._handleEntriesRendered })),
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
                  return n ? a(n).catch(t(la.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(a(la.a))
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
        })(i.a.Component)
      M()(Yn, 'contextType', V.a),
        M()(Yn, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return i.a.createElement(oa, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return i.a.createElement(Ha, e)
          },
          recordTTFL: U.c,
          recordTTFMC: U.d,
        })
      var Kn = Object(Ya.a)(Yn),
        Xn = ee.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        Qn = ee.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        Zn = function (e) {
          return i.a.createElement(w.a, { userId: e.user && e.user.id_str }, function (t) {
            var a = t.scribeNamespace
            return i.a.createElement(Kn, r()({}, e, { scribeNamespace: a }))
          })
        }
      t.default = E(Zn)
    },
  },
])
//# sourceMappingURL=WIPED
