;(window.webpackJsonp = window.webpackJsonp || []).push([
  [112],
  {
    cFl3: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserTwitterArticlesScreen', function () {
          return h
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
        h = function (e) {
          var t = r.a.useContext(o.a).featureSwitches,
            a = e.hasTwitterArticles,
            n = e.screenName,
            s = e.twitterArticlesFetchStatus,
            l = e.userId,
            u = t.isTrue('responsive_web_twitter_article_view_enabled'),
            h = r.a.createElement(c.a, { to: '/'.concat(n) })
          return u
            ? r.a.createElement(i.a, {
                accessibilityLabel: p,
                fetchStatus: s,
                render: function () {
                  return a
                    ? r.a.createElement(
                        m.a,
                        { style: f.container },
                        r.a.createElement(d.a, { linkToEditScreen: !1, publishedOnly: !0, userId: l }),
                      )
                    : h
                },
              })
            : h
        },
        f = u.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        })
      t.default = h
    },
    'll/Q': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserProfileScreenContainer', function () {
          return er
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
        h = a('RqPI'),
        f = a('G6rE'),
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
          return f.e.selectByScreenName(e, b(0, t))
        },
        g = Object(f.g)([f.a]),
        y = Object(l.createSelector)(
          s.l,
          function (e, t) {
            return g(e, b(0, t))
          },
          function (e, t) {
            var a = f.e.selectIdByScreenName(e, b(0, t))
            return (a ? d.a.selectTwitterArticles(e, a, !0) : []).length > 0
          },
          h.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return f.e.selectIsUserNotFound(e, b(0, t))
          },
          function (e, t) {
            var a = _(e, t)
            return !!a && f.e.selectIsLoading(e, a.id_str)
          },
          function (e, t) {
            return f.e.selectIsUserSuspended(e, b(0, t))
          },
          function (e, t) {
            return f.e.selectUserSuspendMessage(e, b(0, t))
          },
          function (e, t) {
            return f.e.selectIsUserWithheld(e, b(0, t))
          },
          function (e, t) {
            var a = t.location,
              n = ((a && a.state) || {}).promotedTweetState,
              r = _(e, t)
            return n || (r && r.promoted_content)
          },
          b,
          h.x,
          function (e, t) {
            var a = f.e.selectIdByScreenName(e, b(0, t))
            return a ? d.a.selectFetchStatus(e, a, !0) : c.a.NONE
          },
          _,
          function (e, t) {
            var a = _(e, t)
            return a && a.profile_interstitial_type ? a.profile_interstitial_type : null
          },
          h.o,
          function (e, t, a, n, r, o, i, s, l, c, u, d, m, p, h, f, b) {
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
              user: h,
              userProfileInterstitialType: f,
              userLanguage: b,
            }
          },
        ),
        v = {
          createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_SCREEN'),
          fetchOneUser: f.e.fetchOne,
          fetchOneByScreenNameWithExtraFieldsIfNeeded: f.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
            f.a,
            f.b,
            f.c,
            f.d,
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
        Q = a('FGLp'),
        Z = a('B5iK')
      var ee = a('TIdA'),
        te = a('rHpw'),
        ae = a('1I0O'),
        ne = a('jhWN'),
        re = a('cHvH'),
        oe = ee.a.createLayoutCache(),
        ie = Y(function (e) {
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
            h = e.userPresencePollingInterval,
            f = e.userSpace,
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
            k = f && E,
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
            Object(Q.a)(function () {
              w && l.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            (t = function () {
              return C()
            }),
            (a = E ? h : void 0),
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
            f && k
              ? ((s = f.accessibilityLabel), (o = f.link))
              : y ||
                (w
                  ? ((s = se.opensNFTDetails), (o = { pathname: '/'.concat(p.screen_name, '/nft') }))
                  : ((s = se.opensProfilePhoto), (o = { pathname: '/'.concat(p.screen_name, '/photo') })))
          var S = function (e) {
              l.scribe({ element: w ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            I = function (e) {
              var t = e.windowWidth >= te.a.theme.breakpoints.medium,
                a = {
                  accessibilityLabel: s,
                  imageLayoutCache: oe,
                  link: o,
                  onClick: S,
                  size: 'custom',
                  uri: v,
                  screenName: p.screen_name,
                }
              return f && k
                ? i.a.createElement(ae.a, r()({}, a, { presenceRingType: f.presenceRingType, style: z.a.avatar }))
                : i.a.createElement(
                    ne.a,
                    r()({}, a, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: z.a.avatar,
                    }),
                  )
            }
          return i.a.createElement(re.a, null, I)
        }),
        se = { opensProfilePhoto: X.a.f30795df, opensNFTDetails: X.a.a270100c },
        le = a('RCZO'),
        ce = a('MWbm'),
        ue = a('n4Eu'),
        de = a('cm6r'),
        me = a('A91F'),
        pe = a('9Xij'),
        he = ee.a.createLayoutCache(),
        fe = function (e) {
          var t = e.isOwnProfile,
            a = e.isWithheld,
            n = e.user,
            r = !t && a,
            o = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            s = o && ue.a.get(o),
            l = s ? Object(le.g)(s) : te.a.theme.colors.gray200
          return !r && n.profile_banner_url
            ? i.a.createElement(
                de.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                i.a.createElement(ee.a, {
                  accessibilityLabel: '',
                  aspectMode: me.a.exact(te.a.theme.aspectRatios.profileBanner),
                  backgroundColor: l,
                  image: n.profile_banner_url,
                  layoutCache: he,
                }),
              )
            : i.a.createElement(
                ce.a,
                { style: z.a.banner },
                i.a.createElement(pe.a, {
                  ratio: te.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: l },
                }),
              )
        },
        be = a('3nOA'),
        _e = a('I57f'),
        ge = a('uIZp'),
        ye = a('SOvA'),
        ve = a('vYiB'),
        Ee = a('Y49K'),
        we = a('Irs7'),
        ke = a('/yvb'),
        Ce = a('ACHU'),
        Se = a('rsoE'),
        Ie = a('vMjK'),
        Pe = X.a.h63a5c3b,
        Te = i.a.createElement(Ce.a, null),
        Fe = (function (e) {
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
                return i.a.createElement(Ie.b, { onClose: t, promotedContent: n, user: r, view: 'profile' })
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
                  return i.a.createElement(ke.a, {
                    accessibilityLabel: Pe,
                    hoverLabel: { label: Pe },
                    icon: Te,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: Se.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            a
          )
        })(i.a.PureComponent),
        Ne = a('pHkl'),
        xe = X.a.g7088266,
        Oe = X.a.gd7acb84,
        Be = X.a.b7636014,
        Le = i.a.createElement(ye.a, null),
        Ae = te.a.create(function (e) {
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
        Me = function (e) {
          var t = e.history,
            a = e.isWithheld,
            n = e.loggedInUserId,
            r = e.onFollowButtonOffscreen,
            o = e.promotedContent,
            s = e.user,
            l = Object(we.b)(),
            c = s.id_str === n,
            u = s.blocked_by,
            d = s.blocking,
            m = a && !c,
            p = s.can_dm && n && !d && !u && !m,
            h = n && s && !c && !m,
            f = s.following && n && !d && !u && !a,
            b = s.default_profile_image && !s.description && !s.profile_banner_url
          return i.a.createElement(
            ce.a,
            { style: Ae.buttons },
            n && c
              ? i.a.createElement(
                  ke.a,
                  {
                    link: b ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Ae.lastButton,
                    testID: Ee.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  b ? Oe : xe,
                )
              : null,
            h && i.a.createElement(Fe, { buttonStyle: Ae.button, promotedContent: o, user: s }),
            !c &&
              p &&
              i.a.createElement(ke.a, {
                accessibilityLabel: Be,
                hoverLabel: { label: Be },
                icon: Le,
                onPress: function () {
                  if (n) {
                    var e = Object(be.a)(s.id_str, n)
                    l.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Ne.h.ONE_TO_ONE,
                        inbox_type: Ne.c.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Ae.button,
                testID: Ee.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              f &&
              i.a.createElement(_e.a, {
                allowPromptForPush: !0,
                isFollowing: s.notifications,
                style: Ae.button,
                userId: s.id_str,
              }),
            !c &&
              !u &&
              !m &&
              i.a.createElement(
                ve.a,
                { onOffscreenChange: r },
                i.a.createElement(ge.a, { promotedContent: o, style: Ae.lastButton, userId: s.id_str }),
              ),
          )
        },
        Ue = a('tOzk'),
        Re = a('YeIG'),
        De = a('Je1/'),
        He = a('uLiA'),
        je = a('EJJl'),
        We = a('WWyu'),
        Ve = a('LhSm'),
        ze = a('t62R'),
        qe = a('GWvE'),
        Je = a('Lsrn'),
        Ge = a('k/Ka'),
        $e = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Je.a.root, e.style],
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
      $e.metadata = { width: 24, height: 24 }
      var Ye = $e,
        Ke = a('KrGU'),
        Xe = a('I/9y'),
        Qe = a('YUdS'),
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
            o = e.professionalCategoryName,
            s = e.user,
            l = i.a.useRef(),
            c = Object(we.b)(),
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
                  ce.a,
                  { style: nt.description },
                  i.a.createElement(je.a, {
                    description: s.description,
                    disableTranslation: !s.is_profile_translatable,
                    entities: s.entities,
                    testID: He.a.userDescription,
                    userId: s.id_str,
                    withheldDescription: s.withheld_description,
                    withheldEntities: s.withheld_entities,
                  }),
                )
              : null,
            i.a.createElement(
              ce.a,
              { style: nt.details },
              i.a.createElement(
                ze.b,
                { style: nt.detailsText, testID: He.a.profileHeaderItems },
                o
                  ? i.a.createElement(
                      De.a,
                      {
                        Icon: Ye,
                        onPress: function () {
                          c.scribe(C()(C()({}, u), R.b()))
                        },
                        style: nt.noCursor,
                        testID: He.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      i.a.createElement(ze.b, null, o),
                    )
                  : null,
                s.location && !Object(qe.a)(s.location)
                  ? i.a.createElement(
                      De.a,
                      { Icon: Ke.a, testID: He.a.userLocation },
                      i.a.createElement(ze.b, null, s.location),
                    )
                  : null,
                d && d.url
                  ? i.a.createElement(
                      De.a,
                      { Icon: Xe.a, link: { pathname: d.url, external: !0 }, testID: He.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !m ||
                  Object(Re.a)(m) ||
                  (m.visibility &&
                    'self' === m.visibility.toLowerCase() &&
                    m.year_visibility &&
                    'self' === m.year_visibility.toLowerCase())
                  ? null
                  : at(m)
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        De.a,
                        {
                          Icon: Qe.a,
                          onPress: function () {
                            l.current && l.current.launch()
                          },
                        },
                        r ? et : tt,
                      ),
                      i.a.createElement(Ue.a, {
                        setRef: function (e) {
                          l.current = e
                        },
                      }),
                    )
                  : i.a.createElement(
                      De.a,
                      { Icon: Ze.a, testID: He.a.userBirthdate },
                      i.a.createElement(We.a, { birthdate: m, withBornPrefixText: !0 }),
                    ),
                i.a.createElement(Ve.a, { joinDate: s.created_at }),
              ),
            ),
          )
        },
        ot = a('mN6z'),
        it = a('W27K'),
        st = a('ddV6'),
        lt = a.n(st),
        ct = a('1YZw'),
        ut = Object(q.a)().propsFromActions(function () {
          return {
            addToast: ct.b,
            createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: f.e.unmute,
          }
        }),
        dt = a('8Usl'),
        mt = a('eb3s'),
        pt = a('P2xQ'),
        ht = X.a.cef4e8cf,
        ft = X.a.ec294e62,
        bt = X.a.df422dfe,
        _t = te.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        gt = ut(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            n = e.unmute,
            r = e.user,
            o = i.a.useState(!1),
            s = lt()(o, 2),
            l = s[0],
            c = s[1],
            u = r.screen_name
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              ze.b,
              { color: 'gray700', style: _t.mute },
              bt,
              ' ',
              i.a.createElement(
                ze.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: _t.unmuteButton,
                  testID: dt.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                pt.g,
              ),
            ),
            l
              ? i.a.createElement(mt.a, {
                  confirmButtonLabel: pt.g,
                  headline: ht({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(r.id_str).then(function () {
                        return t({ text: Object(pt.d)(r.screen_name) })
                      }, a({ showToast: !0 }))
                  },
                  text: ft,
                })
              : null,
          )
        }),
        yt = a('RgK2'),
        vt = a.n(yt),
        Et = a('rcen'),
        wt = 'UserName',
        kt = a('X04g'),
        Ct = a('A7Fw'),
        St = X.a.e839db39,
        It = X.a.b74bd6c6,
        Pt = X.a.f15bfdb3,
        Tt = X.a.i859a9d3,
        Ft = te.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        Nt = function (e) {
          var t = e.dismiss,
            a = e.type,
            n = Object(we.b)()
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
            ce.a,
            { style: Ft.content },
            i.a.createElement(Ct.a, { style: Ft.icon }),
            i.a.createElement(ze.b, { size: 'title4', style: Ft.text, weight: 'bold' }, Pt),
            i.a.createElement(
              ze.b,
              { color: 'gray700', style: Ft.text },
              It,
              ' ',
              i.a.createElement(
                ze.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: r },
                Tt,
              ),
            ),
            'sheet' === a
              ? i.a.createElement(ke.a, { onClick: t, style: Ft.button, type: 'primaryOutlined' }, St)
              : null,
          )
        },
        xt = a('jV+4'),
        Ot = a('ir4X'),
        Bt = function (e) {
          var t,
            a = e.isOwnProfile,
            n = e.isWithheld,
            o = e.namespace,
            s = e.user,
            l = Object(we.b)(),
            c = i.a.useContext(V.a).featureSwitches,
            u = n ? vt.a : { isProtected: !!s.protected, isVerified: !!s.verified, translatorType: s.translator_type },
            d = s.name && s.screen_name && !(n && !a),
            m = d ? s.name : '@'.concat(s.screen_name),
            p = i.a.useCallback(function (e, t) {
              return i.a.createElement(Nt, { dismiss: e, type: t })
            }, []),
            h = c.isTrue('identity_verification_educational_prompt_enabled'),
            f = c.isTrue('account_taxonomy_automated_label_enabled'),
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
                  ? i.a.createElement(Et.a, {
                      entities: s.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: s.id_str, name: s.screen_name, item_type: kt.a.ItemType.USER }] }
                        l.scribe(C()(C()({}, o), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: s.highlightedLabel.longDescription.text,
                    })
                  : (null === (y = s.highlightedLabel) || void 0 === y ? void 0 : y.description) || null
            b = f ? C()(C()({}, s.highlightedLabel), {}, { description: v }) : null
          }
          return i.a.createElement(
            ce.a,
            { style: z.a.names, testID: wt },
            i.a.createElement(
              xt.a,
              r()({}, u, {
                badgeContext: 'account',
                name: m,
                nameSize: 'headline1',
                renderVerifiedBadgeContext: h ? p : void 0,
                screenName: d ? s.screen_name : void 0,
                weight: 'heavy',
                withFollowsYou: s.followed_by && !n,
                withNameWrap: !0,
                withStackedLayout: !0,
              }),
            ),
            b ? i.a.createElement(Ot.a, { isIconLarge: !0, label: b }) : null,
          )
        },
        Lt = (a('uFXj'), a('W55q')),
        At = a('YeSc'),
        Mt = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Ut = Object(q.a)()
          .propsFromState(function () {
            return { newsletter: At.f }
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
                Lt.c.Subscribed,
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
              fetchUserBizProfileIfNeeded: At.c,
            }
          })
          .withAnalytics(Mt),
        Rt = Object(q.a)()
          .propsFromState(function () {
            return { newsletter: At.f }
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
              h,
              f,
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
                null === (h = p.revue_account) ||
                void 0 === h ||
                null === (f = h.newsletter_info) ||
                void 0 === f
                  ? void 0
                  : f.title,
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
        Dt = a('855f'),
        Ht = a('vbJ7'),
        jt = function (e) {
          var t = e.description,
            a = e.isMobileLayout,
            n = e.originalImage,
            r = e.subscriberCount,
            o = e.title,
            s = e.withThumbnail,
            l = parseInt(r, 10) || 0,
            c = Dt.a.getTruncatedCount(l),
            u = a ? 'subtext2' : 'body'
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              ce.a,
              { style: Wt.contentContainer },
              s && n
                ? i.a.createElement(
                    ce.a,
                    { style: [Wt.newsletterImageContainer, a ? Wt.newsletterImageContainerMobile : void 0] },
                    i.a.createElement(
                      pe.a,
                      { ratio: 1 },
                      i.a.createElement(ee.a, { accessibilityLabel: t || '', aspectMode: me.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              i.a.createElement(
                ce.a,
                { style: [Wt.newsletterInfoContainer, a ? Wt.mobileNewsletterInfoContainer : void 0] },
                i.a.createElement(
                  ze.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: a ? Wt.newsletterFieldMobile : Wt.newsletterField,
                    weight: 'bold',
                  },
                  o,
                ),
                i.a.createElement(
                  ze.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [Wt.newsletterDescription, a ? Wt.newsletterFieldMobile : Wt.newsletterField],
                  },
                  t,
                ),
                r
                  ? i.a.createElement(
                      ze.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: a ? Wt.newsletterFieldMobile : Wt.newsletterField,
                      },
                      i.a.createElement(X.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: l }),
                    )
                  : null,
              ),
            ),
          )
        }
      jt.defaultProps = { withThumbnail: !0 }
      var Wt = te.a.create(function (e) {
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
        Vt = Rt(jt),
        zt = a('Rp9C'),
        qt = a('I4+6'),
        Jt = X.a.d834aec4,
        Gt = X.a.ab0deccf,
        $t = X.a.caeab0f7,
        Yt = te.a.create(function (e) {
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
        Kt = Ut(function (e) {
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
            h = i.a.useCallback(
              function (e) {
                if (p) {
                  var t = zt.a.getUserItem(d),
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
                h('impression')
              },
              [p],
            )
          var f = function (e) {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                ce.a,
                { style: Yt.moduleLabel },
                i.a.createElement(ze.b, { size: 'body', weight: 'bold' }, Jt),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  a = o ? s : t,
                  n = o ? $t : Gt,
                  r = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
                  l = qt.a.generate({
                    backgroundColor: te.a.theme.colors.transparent,
                    color: te.a.theme.colors.primary,
                    customFocusBackgroundColor: r,
                    customHoverBackgroundColor: r,
                    customPressedBackgroundColor: r,
                  })
                return i.a.createElement(
                  de.a,
                  {
                    interactiveStyles: l,
                    link: a,
                    onPress: function () {
                      return h('click')
                    },
                    style: [Yt.moduleContainer, te.a.isDarkMode() ? Yt.darkModeBackground : Yt.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: [Yt.contentContainer, Yt.summaryContainer] },
                      i.a.createElement(Vt, { isMobileLayout: e, userId: m, withThumbnail: !0 }),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [Yt.buttonContainer, e ? Yt.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        ze.b,
                        {
                          align: 'center',
                          link: a,
                          size: 'body',
                          style: Yt.actionButton,
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
            ? i.a.createElement(re.a, null, function (e) {
                var t = e.windowWidth <= te.a.theme.breakpoints.small
                return f(t)
              })
            : null
        }),
        Xt = a('z+ta'),
        Qt = a('7JQg'),
        Zt = a('7wqI'),
        ea = a('Jkc4'),
        ta = a('wCd/'),
        aa = function (e) {
          var t = e.isActiveCreator,
            a = e.isOwnProfile,
            n = e.superFollowersCount,
            r = e.user,
            o = r.followers_count,
            s = r.friends_count,
            l = r.screen_name
          return i.a.createElement(ea.a, null, function (e) {
            return i.a.createElement(ta.a, {
              followersCount: o,
              friendsCount: s,
              onPress: e(),
              screenName: l,
              superFollowersCount: t && a ? n : void 0,
              withLink: Object(Zt.b)({ isOwnProfile: a, user: r }),
            })
          })
        },
        na = { page: 'profile', section: 'header' },
        ra = (function (e) {
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
                  return !Object(ot.a)(t, this.state) || !Object(ot.a)(e, this.props)
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
                    Qt.c,
                    { namespace: na },
                    i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(fe, { isOwnProfile: l, isWithheld: a, user: s }),
                      i.a.createElement(
                        ce.a,
                        { style: [z.a.content, oa.content, c && z.a.withheld] },
                        i.a.createElement(
                          ce.a,
                          { style: z.a.avatarAndButton },
                          i.a.createElement(ie, { isOwnProfile: l, isWithheld: a, user: s }),
                          i.a.createElement(Me, {
                            history: this.props.history,
                            isWithheld: a,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: s,
                          }),
                        ),
                        i.a.createElement(Bt, { isOwnProfile: l, isWithheld: a, namespace: na, user: s }),
                        c ? null : i.a.createElement(rt, { isOwnProfile: l, professionalCategoryName: r, user: s }),
                        u
                          ? null
                          : i.a.createElement(aa, {
                              isActiveCreator: t,
                              isOwnProfile: l,
                              superFollowersCount: o,
                              user: s,
                            }),
                        d
                          ? null
                          : i.a.createElement(
                              ce.a,
                              { style: oa.marginTopXSmall },
                              i.a.createElement(it.a, { userId: s.id_str, userScreenName: s.screen_name }),
                            ),
                        s.muting ? i.a.createElement(gt, { user: s }) : null,
                      ),
                      m ? null : i.a.createElement(Kt, { screenName: s.screen_name, user: s, userId: s.id_str }),
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
                  return i.a.createElement(Xt.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            a
          )
        })(i.a.Component)
      M()(ra, 'contextType', V.a)
      var oa = te.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        ia = ra,
        sa = a('8UdT'),
        la = a('dwig'),
        ca = a('GOQE'),
        ua = a('v//M'),
        da = a('0+qk'),
        ma = a('drnk'),
        pa = a('9Bb1'),
        ha = a('iFPY'),
        fa = a('5S/X'),
        ba = a('oQhu'),
        _a = a('xZGM'),
        ga = function (e, t) {
          return Object(_a.A)(e, _a.v)
        },
        ya = Object(q.a)()
          .propsFromState(function () {
            return { shouldShowEducation: ga }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(_a.w)(_a.v)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        va = a.p + 'nft_education_graphic.72be3745.png',
        Ea = a('Wms4'),
        wa = a('feu+'),
        ka = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Je.a.root, e.style],
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
      ka.metadata = { width: 24, height: 24 }
      var Ca = ka,
        Sa = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Je.a.root, e.style],
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
      Sa.metadata = { width: 24, height: 24 }
      var Ia = Sa,
        Pa = X.a.ebf5ec25,
        Ta = X.a.c405ac8d,
        Fa = X.a.a893d601,
        Na = X.a.eb023c93,
        xa = X.a.gc65c0a9,
        Oa = X.a.d17e8aa3,
        Ba = X.a.ff9c6943,
        La = te.a.create(function (e) {
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
        Aa = ya(function (e) {
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
              ze.b,
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
            ? i.a.createElement(wa.a, {
                accessibilityRole: 'dialog',
                actionLabel: Fa,
                contentStyle: La.interstitialContent,
                graphic: function () {
                  return i.a.createElement(
                    ce.a,
                    { style: La.image },
                    i.a.createElement(ee.a, { accessibilityLabel: '', aspectMode: me.a.exact(2.5), image: va }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: Ta,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  a.scribe({ element: 'ok_button', action: 'click' }), c()
                },
                onClose: c,
                subtext: i.a.createElement(
                  ce.a,
                  null,
                  i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(
                      ze.b,
                      { color: 'normal', size: 'headline2', style: La.heading, weight: 'bold' },
                      Na,
                    ),
                    i.a.createElement(ze.b, null, u),
                  ),
                  i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(
                      ze.b,
                      { color: 'normal', size: 'headline2', style: La.heading, weight: 'bold' },
                      xa,
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: La.iconContainer },
                      i.a.createElement(Ca, { style: La.icon }),
                      i.a.createElement(ze.b, null, Ba),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [La.iconContainer, La.reducedMarginBottom] },
                      i.a.createElement(Xe.a, { style: La.icon }),
                      i.a.createElement(ze.b, null, Oa),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [La.iconContainer, La.noMarginTop] },
                      i.a.createElement(ce.a, { style: La.icon }),
                      i.a.createElement(
                        Ea.a,
                        { style: La.label },
                        i.a.createElement(Ia, { style: La.labelIcon }),
                        i.a.createElement(ze.b, { color: 'normal', weight: 'bold' }, Pa),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        Ma = a('AJXH'),
        Ua = a('rJoH'),
        Ra = a('Y6L+'),
        Da = a('jS2K'),
        Ha = a('IG4P'),
        ja = (function (e) {
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
                  return !Object(ot.a)(e, this.props)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.shouldDisplayUserActionSheet
                  return i.a.createElement(
                    ce.a,
                    null,
                    this._renderBanner(),
                    i.a.createElement(
                      ce.a,
                      { style: [z.a.content, z.a.withheld] },
                      i.a.createElement(
                        ce.a,
                        { style: z.a.avatarAndButton },
                        this._renderAvatar(),
                        i.a.createElement(ce.a, { style: z.a.buttonAffordance }),
                        a && t && i.a.createElement(Fe, { buttonStyle: z.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return i.a.createElement(re.a, null, function (e) {
                    var t = e.windowWidth >= te.a.theme.breakpoints.medium
                    return i.a.createElement(
                      ce.a,
                      { accessibilityState: { hidden: !0 }, style: z.a.avatar },
                      i.a.createElement(ne.a, {
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
                    ce.a,
                    { style: z.a.banner },
                    i.a.createElement(pe.a, { ratio: te.a.theme.aspectRatios.profileBanner }),
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
                    ce.a,
                    { style: z.a.names },
                    i.a.createElement(xt.a, {
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
        Wa = a('wytG'),
        Va = a('VS6U'),
        za = (a('0zG9'), a('muX9')),
        qa = function (e) {
          var t = e.screenName,
            a = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return i.a.createElement(za.a, { script: [{ type: 'application/ld+json', innerHTML: a }] })
        },
        Ja = a('ipry'),
        Ga = a('E4zi'),
        $a = function (e) {
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
              author: Object(Ga.a)(r),
            }
          return (
            o && (s.relatedLink = [o.url, o.expanded_url]),
            i.a.createElement(za.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(s, null, 2) }],
            })
          )
        },
        Ya = a('Qayx'),
        Ka = a('G8HL'),
        Xa = a('mw9i'),
        Qa = a('zfvc'),
        Za = a('FIs5'),
        en = a('Q0VY'),
        tn = a('FiRh'),
        an = a('0yYu'),
        nn = a('k/OQ'),
        rn = a('zCf4'),
        on = X.a.fa98627a,
        sn = X.a.a2811f96,
        ln = X.a.c6ea308b,
        cn = X.a.d67658c0,
        un = X.a.ccc9153f,
        dn = X.a.bab1f8b0,
        mn = X.a.a52b03a5,
        pn = X.a.cc3c6989,
        hn = 'Twitter Articles',
        fn = X.a.add55c97,
        bn = X.a.d7b8eba9,
        _n = X.a.c0098d49,
        gn = X.a.b721eb37,
        yn = X.a.c4af3561,
        vn = X.a.dbcaaab5,
        En = X.a.hf162fb6,
        wn = X.a.ad7b2b38,
        kn = X.a.f19b4073,
        Cn = X.a.ha62da97,
        Sn = X.a.ica87fde,
        In = X.a.e79ed125,
        Pn = X.a.g8475f82,
        Tn = X.a.c9a1cb5d,
        Fn = X.a.e7b201dd,
        Nn = X.a.d09e12c4,
        xn = X.a.gbf342a4,
        On = X.a.eeab4adf,
        Bn = X.a.i144ee20,
        Ln = X.a.j58e7b00,
        An = X.a.d834ab9c,
        Mn = { section: 'profile_interstitial' },
        Un = Object(Wa.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, '8KtR'))
        }),
        Rn = Object(Wa.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'cFl3'))
        }),
        Dn = Object(Wa.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ivpD'))
        }),
        Hn = Object(Wa.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ylAD'))
        }),
        jn = 'about',
        Wn = 'likes',
        Vn = 'media',
        zn = 'reactions',
        qn = 'superfollows',
        Jn = 'twitter-articles',
        Gn = 'with_replies',
        $n = 36e5,
        Yn = Object(ba.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        Kn = (function (e) {
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
                  Ha.a,
                  { isRefreshing: n, onRefresh: r._handlePullToRefresh },
                  i.a.createElement(
                    ce.a,
                    { style: Qn.containerGrow },
                    i.a.createElement(
                      Xa.a,
                      null,
                      i.a.createElement(ua.a, {
                        accessibilityLabel: un({ screenName: s }),
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
                  e && i.a.createElement(Aa, { onEducationSheetDismiss: r._handleOnDismissNftAvatarEducation }),
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
                  u = e === Ja.a.SensitiveMedia || e === Ja.a.OffensiveProfileContent,
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
                  t(C()(C()(C()({}, a), Mn), {}, { action: 'click' }))
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
                    return e.type === sa.b.Tweet
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
                  if (n <= 72e5) return vn
                  var o = Math.floor(n / $n),
                    i = Math.floor(o / 24),
                    s = o % 24
                  return 0 === i
                    ? kn({ hourCount: s })
                    : 0 === s
                    ? wn({ dayCount: i })
                    : En({ dayCount: i, hourCount: s })
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
                        e._shouldShowProfileInterstitial() && o(C()(C()(C()({}, i), Mn), {}, { action: 'impression' }))
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
                      n(C()(C()(C()({}, r), Mn), {}, { action: 'impression' }))
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
                    h = this._isViewingOwnProfile(),
                    f = s || o || (l && !h),
                    b = m ? ln({ screenName: m.screen_name, fullName: m.name }) : void 0,
                    _ = h ? '' : '@'.concat((m && m.screen_name) || d || '', ' '),
                    g = f ? null : i.a.createElement(da.a, { getLocationState: Yn(_), history: n }),
                    y =
                      m && !f
                        ? i.a.createElement(xt.a, {
                            isProtected: m.protected,
                            isVerified: m.verified,
                            name: m.name,
                            screenName: m.screen_name,
                            withScreenName: !1,
                          })
                        : on,
                    v = m && !f && a === c.a.LOADED ? this._renderSubtitle(m) : void 0,
                    E = m && 'twitter://user?screen_name='.concat(m.screen_name),
                    w = m && 'https://twitter.com/'.concat(m.screen_name || ''),
                    k = m && cn({ fullName: m.name, screenName: m.screen_name })
                  return i.a.createElement(Va.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: _ },
                    documentTitle: b,
                    history: n,
                    primaryContent: i.a.createElement(
                      la.a,
                      { fab: g },
                      i.a.createElement(Ua.a, {
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
                            i.a.createElement($a, { user: m }),
                            i.a.createElement(pa.a, { description: null == m ? void 0 : m.description }),
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
                      i.a.createElement(ua.a, {
                        accessibilityLabel: un({ screenName: d }),
                        fetchStatus: m || f ? c.a.LOADED : a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      r
                        ? i.a.createElement(ha.a, { history: n, location: u, userId: null == m ? void 0 : m.id_str })
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
                        Qa.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        i.a.createElement(ge.a, { promotedContent: t, userId: a.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    a = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(a, '/').concat(Wn)) > -1
                    ? i.a.createElement(Ya.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(a, '/').concat(zn)) > -1
                    ? i.a.createElement(Ya.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(a, '/').concat(Vn)) > -1
                    ? i.a.createElement(Ya.a, { count: e.media_count, type: 'media' })
                    : i.a.createElement(Ya.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? i.a.createElement(Da.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(Zt.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
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
                    h = !this._isViewingOwnProfile() && (o || r || p),
                    f = this._getProfessionalCategoryNameIfDisplayable()
                  return h
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
                        professionalCategoryName: f,
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
                      ? i.a.createElement(qa, { screenName: m })
                      : fa.b
                      ? i.a.createElement(Ma.a, null)
                      : null,
                    i.a.createElement(Za.a, {
                      buttonText: t,
                      buttonType: a,
                      header: n,
                      message: r,
                      onButtonPress: o,
                      onSecondaryButtonPress: s,
                      secondaryButtonText: l,
                      secondaryButtonType: c,
                      style: Zn.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(ma.a)(e),
                    a = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: An,
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
                    a = In({ screenName: t }),
                    n = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      i.a.createElement(ze.b, { link: 'https://support.twitter.com/articles/117063' }, X.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: On,
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
                    n = Cn({ screenName: a }),
                    r = i.a.createElement(ze.b, { color: 'gray700', weight: 'bold' }),
                    o = i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(
                        ze.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space20 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          i.a.cloneElement(r, null, X.a.g6645d94({ screenName: a })),
                        ),
                      ),
                      i.a.createElement(
                        ze.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space8 } },
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
                    buttonText: Bn,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: Ln,
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
                      i.a.createElement(ze.b, { link: 'https://support.twitter.com/articles/20172060' }, X.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Sn, message: a })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(ze.b, { style: { paddingBottom: te.a.theme.spaces.space20 } }),
                    n = i.a.createElement(ze.b, { weight: 'bold' }),
                    r = i.a.createElement(ze.b, { style: { paddingBottom: te.a.theme.spaces.space4 }, weight: 'bold' }),
                    o = i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(
                        ze.b,
                        { style: { paddingBottom: te.a.theme.spaces.space20 } },
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
                          ze.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: te.a.theme.spaces.space20 },
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
                  return this._renderEmptyState({ header: yn, message: o })
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
                        ? i.a.createElement(Et.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                        : i.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'f6fa2033' },
                            i.a.createElement(
                              ze.b,
                              { link: 'https://support.twitter.com/articles/18311' },
                              X.a.f3b1bdc1,
                            ),
                          )),
                    this._renderEmptyState({ header: Pn, message: e })
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
                  var r = en.a.descriptionTextParts(t, a),
                    o = i.a.createElement(
                      ze.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      r.map(function (e, t) {
                        return i.a.createElement(tn.c, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: xn, message: o })
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
                  var r = en.a.descriptionTextParts(t, a)
                  return i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: Qn.withheldMessageRoot },
                      i.a.createElement(
                        ze.b,
                        { align: 'center', size: 'title4', style: Qn.withheldMessageHeader, weight: 'bold' },
                        xn,
                      ),
                      i.a.createElement(
                        ze.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        r.map(function (e, t) {
                          return i.a.createElement(tn.c, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    i.a.createElement(an.a, null),
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
                      i.a.createElement(ze.b, { link: 'https://support.twitter.com/articles/14016' }, X.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: Nn, message: a })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Tn, message: Fn })
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
                    h = this._canViewTwitterArticles && t,
                    f = function (e) {
                      var t = d ? _n : bn
                      return [
                        p
                          ? {
                              to: { pathname: '/'.concat(l, '/').concat(jn), query: u },
                              key: gn,
                              label: gn,
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
                          key: dn,
                          label: dn,
                        },
                        { to: { pathname: '/'.concat(l, '/').concat(Gn), query: u }, key: mn, label: mn },
                        m
                          ? {
                              to: { pathname: '/'.concat(l, '/').concat(qn), query: u },
                              key: pn,
                              label: pn,
                              color: 'plum500',
                            }
                          : void 0,
                        h
                          ? {
                              to: { pathname: '/'.concat(l, '/').concat(Jn), query: u },
                              key: hn,
                              label: hn,
                              onClick: e(),
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(l, '/').concat(Vn), query: u }, key: fn, label: fn, onClick: e() },
                        {
                          to: { pathname: '/'.concat(l, '/').concat(d ? zn : Wn), query: u },
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
                    i.a.createElement(ea.a, null, function (e) {
                      return i.a.createElement(nn.a, { accessibilityLabel: sn, links: f(e) })
                    }),
                    i.a.createElement(
                      rn.d,
                      null,
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/intent/follow' },
                        i.a.createElement(Un, r()({}, b, _)),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/intent/user' },
                        i.a.createElement(Un, r()({}, b, _)),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/'.concat(Ra.J) },
                        i.a.createElement(Un, r()({}, b, _, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/'.concat(Ra.J, '/').concat(Gn) },
                        i.a.createElement(Un, r()({}, b, _, { mode: 'with_replies' })),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/'.concat(Ra.J, '/').concat(qn) },
                        i.a.createElement(Un, r()({}, b, _, { mode: 'superfollows' })),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/'.concat(Ra.J, '/').concat(Jn) },
                        i.a.createElement(Rn, r()({}, b, { hasTwitterArticles: t, twitterArticlesFetchStatus: o })),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/'.concat(Ra.J, '/').concat(Vn) },
                        i.a.createElement(Hn, b),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/'.concat(Ra.J, '/(').concat(Wn, '|').concat(zn, ')') },
                        i.a.createElement(Dn, b),
                      ),
                      i.a.createElement(
                        rn.b,
                        { exact: !0, path: '/'.concat(Ra.J, '/').concat(jn) },
                        i.a.createElement(Un, r()({}, b, _, { onEntriesRendered: this._handleEntriesRendered })),
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
                  return n ? a(n).catch(t(ca.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(a(ca.a))
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
      M()(Kn, 'contextType', V.a),
        M()(Kn, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return i.a.createElement(ia, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return i.a.createElement(ja, e)
          },
          recordTTFL: U.c,
          recordTTFMC: U.d,
        })
      var Xn = Object(Ka.a)(Kn),
        Qn = te.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        Zn = te.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        er = function (e) {
          return i.a.createElement(w.a, { userId: e.user && e.user.id_str }, function (t) {
            var a = t.scribeNamespace
            return i.a.createElement(Xn, r()({}, e, { scribeNamespace: a }))
          })
        }
      t.default = E(er)
    },
  },
])
//# sourceMappingURL=WIPED
