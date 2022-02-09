;(window.webpackJsonp = window.webpackJsonp || []).push([
  [112],
  {
    'll/Q': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserProfileScreenContainer', function () {
          return Yn
        })
      var n = a('97Jx'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        s = (a('KqXw'), a('WNMA'), a('jQ3i'), a('x4t0'), a('P1r1')),
        l = a('hqKg'),
        c = a('zh9S'),
        u = a('0KEI'),
        d = a('oEGd'),
        m = a('RqPI'),
        p = a('G6rE'),
        f = function (e, t) {
          var a = t.location,
            n = t.match
          return n && n.params && n.params.screenName
            ? n.params.screenName
            : a && a.query && a.query.screen_name && 'string' == typeof a.query.screen_name
            ? a.query.screen_name
            : ''
        },
        h = function (e, t) {
          return p.e.selectByScreenName(e, f(0, t))
        },
        b = Object(p.g)([p.a]),
        _ = Object(l.createSelector)(
          s.l,
          function (e, t) {
            return b(e, f(0, t))
          },
          m.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return p.e.selectIsUserNotFound(e, f(0, t))
          },
          function (e, t) {
            var a = h(e, t)
            return !!a && p.e.selectIsLoading(e, a.id_str)
          },
          function (e, t) {
            return p.e.selectIsUserSuspended(e, f(0, t))
          },
          function (e, t) {
            return p.e.selectUserSuspendMessage(e, f(0, t))
          },
          function (e, t) {
            return p.e.selectIsUserWithheld(e, f(0, t))
          },
          function (e, t) {
            var a = t.location,
              n = ((a && a.state) || {}).promotedTweetState,
              r = h(e, t)
            return n || (r && r.promoted_content)
          },
          f,
          m.x,
          h,
          function (e, t) {
            var a = h(e, t)
            return a && a.profile_interstitial_type ? a.profile_interstitial_type : null
          },
          m.o,
          function (e, t, a, n, r, o, i, s, l, c, u, d, m, p, f) {
            return {
              displaySensitiveMedia: e,
              fetchStatus: t,
              isActiveCreator: a,
              isIntentRoute: n,
              isNotFound: r,
              isRefreshing: o,
              isSuspended: i,
              suspendMessage: s,
              isWithheld: l,
              promotedContent: c,
              screenName: u,
              superFollowersCount: d,
              user: m,
              userProfileInterstitialType: p,
              userLanguage: f,
            }
          },
        ),
        g = {
          createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_SCREEN'),
          fetchOneUser: p.e.fetchOne,
          fetchOneByScreenNameWithExtraFieldsIfNeeded: p.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
            p.a,
            p.b,
            p.c,
            p.d,
          ]),
          fetchSettingsIfNeeded: s.f,
          scribeAction: c.c,
        },
        y = Object(d.g)(_, g),
        v = a('txMZ'),
        E = a('yiKp'),
        w = a.n(E),
        C = a('VrFO'),
        k = a.n(C),
        S = a('Y9Ll'),
        P = a.n(S),
        I = a('1Pcy'),
        F = a.n(I),
        x = a('5Yy7'),
        O = a.n(x),
        T = a('2VqO'),
        N = a.n(T),
        B = a('KEM+'),
        L = a.n(B),
        M =
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
        A = a('mC9n'),
        U = a('s4rk'),
        R = a('zI2C'),
        D = a('6ZtA'),
        H = a('es0u'),
        j = (a('hBvt'), a('v6aA')),
        W = a('I/ms'),
        z = a('rxPX'),
        V = a('M0jS'),
        q = function (e, t) {
          return Object(V.c)(e, t.user.id_str)
        },
        J = function (e, t) {
          var a = V.b.select(e, t.user.id_str)
          return null != a && a.refresh_delay_secs ? 1e3 * a.refresh_delay_secs : 1e3 * V.a
        },
        $ = Object(z.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('SELECT_SPACE'),
              fetchUsersPresence: V.b.fetchManyIfNeeded,
            }
          })
          .propsFromState(function () {
            return { userPresencePollingInterval: J, userSpace: q }
          })
          .withAnalytics(),
        G = a('3XMw'),
        Y = a.n(G),
        K = a('B5iK')
      var X = a('TIdA'),
        Q = a('rHpw'),
        Z = a('1I0O'),
        ee = a('jhWN'),
        te = a('cHvH'),
        ae = X.a.createLayoutCache(),
        ne = $(function (e) {
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
            b = i.a.useContext(j.a),
            _ = b.featureSwitches,
            g = b.loggedInUserId,
            y = !d && m,
            v = y || !p.profile_image_url_https ? void 0 : p.profile_image_url_https,
            E =
              g &&
              (_.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ||
                _.isTrue('voice_rooms_typeahead_audiospace_ring_enabled')),
            w = p.has_nft_avatar && _.isTrue('responsive_web_nft_avatar'),
            C = h && E,
            k = i.a.useCallback(
              function () {
                var e
                E && (null === (e = u([p.id_str])) || void 0 === e || e.catch(c({})))
              },
              [p.id_str, E, u, c],
            )
          i.a.useEffect(
            function () {
              return k()
            },
            [k],
          ),
            i.a.useEffect(function () {
              w && l.scribe({ element: 'nft_avatar', action: 'impression' })
            }, []),
            (t = function () {
              return k()
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
                  var e = new K.b(a).interval(n.current)
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
            h && C
              ? ((s = h.accessibilityLabel), (o = h.link))
              : y ||
                (w
                  ? ((s = re.opensNFTDetails), (o = { pathname: '/'.concat(p.screen_name, '/nft') }))
                  : ((s = re.opensProfilePhoto), (o = { pathname: '/'.concat(p.screen_name, '/photo') })))
          var S = function (e) {
              l.scribe({ element: w ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            P = function (e) {
              var t = e.windowWidth >= Q.a.theme.breakpoints.medium,
                a = {
                  accessibilityLabel: s,
                  imageLayoutCache: ae,
                  link: o,
                  onClick: S,
                  size: 'custom',
                  uri: v,
                  screenName: p.screen_name,
                }
              return h && C
                ? i.a.createElement(Z.a, r()({}, a, { presenceRingType: h.presenceRingType, style: W.a.avatar }))
                : i.a.createElement(
                    ee.a,
                    r()({}, a, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: W.a.avatar,
                    }),
                  )
            }
          return i.a.createElement(te.a, null, P)
        }),
        re = { opensProfilePhoto: Y.a.f30795df, opensNFTDetails: Y.a.a270100c },
        oe = a('RCZO'),
        ie = a('MWbm'),
        se = a('n4Eu'),
        le = a('cm6r'),
        ce = a('A91F'),
        ue = a('9Xij'),
        de = X.a.createLayoutCache(),
        me = function (e) {
          var t = e.isOwnProfile,
            a = e.isWithheld,
            n = e.user,
            r = !t && a,
            o = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            s = o && se.a.get(o),
            l = s ? Object(oe.g)(s) : Q.a.theme.colors.gray200
          return !r && n.profile_banner_url
            ? i.a.createElement(
                le.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                i.a.createElement(X.a, {
                  accessibilityLabel: '',
                  aspectMode: ce.a.exact(Q.a.theme.aspectRatios.profileBanner),
                  backgroundColor: l,
                  image: n.profile_banner_url,
                  layoutCache: de,
                }),
              )
            : i.a.createElement(
                ie.a,
                { style: W.a.banner },
                i.a.createElement(ue.a, { ratio: Q.a.theme.aspectRatios.profileBanner, style: { backgroundColor: l } }),
              )
        },
        pe = a('3nOA'),
        fe = a('I57f'),
        he = a('uIZp'),
        be = a('SOvA'),
        _e = a('vYiB'),
        ge = a('Y49K'),
        ye = a('Irs7'),
        ve = a('/yvb'),
        Ee = a('ACHU'),
        we = a('rsoE'),
        Ce = a('vMjK'),
        ke = Y.a.h63a5c3b,
        Se = i.a.createElement(Ee.a, null),
        Pe = (function (e) {
          O()(a, e)
          var t = N()(a)
          function a() {
            var e
            k()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              L()(F()(e), '_renderUserMenu', function (t) {
                var a = e.props,
                  n = a.promotedContent,
                  r = a.user
                return i.a.createElement(Ce.b, { onClose: t, promotedContent: n, user: r, view: 'profile' })
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
                  return i.a.createElement(ve.a, {
                    accessibilityLabel: ke,
                    hoverLabel: { label: ke },
                    icon: Se,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: we.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            a
          )
        })(i.a.PureComponent),
        Ie = a('pHkl'),
        Fe = Y.a.g7088266,
        xe = Y.a.gd7acb84,
        Oe = Y.a.b7636014,
        Te = i.a.createElement(be.a, null),
        Ne = Q.a.create(function (e) {
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
            o = e.promotedContent,
            s = e.user,
            l = Object(ye.b)(),
            c = s.id_str === n,
            u = s.blocked_by,
            d = s.blocking,
            m = a && !c,
            p = s.can_dm && n && !d && !u && !m,
            f = n && s && !c && !m,
            h = s.following && n && !d && !u && !a,
            b = s.default_profile_image && !s.description && !s.profile_banner_url
          return i.a.createElement(
            ie.a,
            { style: Ne.buttons },
            n && c
              ? i.a.createElement(
                  ve.a,
                  {
                    link: b ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Ne.lastButton,
                    testID: ge.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  b ? xe : Fe,
                )
              : null,
            f && i.a.createElement(Pe, { buttonStyle: Ne.button, promotedContent: o, user: s }),
            !c &&
              p &&
              i.a.createElement(ve.a, {
                accessibilityLabel: Oe,
                hoverLabel: { label: Oe },
                icon: Te,
                onPress: function () {
                  if (n) {
                    var e = Object(pe.a)(s.id_str, n)
                    l.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Ie.h.ONE_TO_ONE,
                        inbox_type: Ie.c.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Ne.button,
                testID: ge.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              h &&
              i.a.createElement(fe.a, {
                allowPromptForPush: !0,
                isFollowing: s.notifications,
                style: Ne.button,
                userId: s.id_str,
              }),
            !c &&
              !u &&
              !m &&
              i.a.createElement(
                _e.a,
                { onOffscreenChange: r },
                i.a.createElement(he.a, { promotedContent: o, style: Ne.lastButton, userId: s.id_str }),
              ),
          )
        },
        Le = a('tOzk'),
        Me = a('YeIG'),
        Ae = a('Je1/'),
        Ue = a('uLiA'),
        Re = a('EJJl'),
        De = a('WWyu'),
        He = a('LhSm'),
        je = a('t62R'),
        We = a('GWvE'),
        ze = a('Lsrn'),
        Ve = a('k/Ka'),
        qe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ze.a.root, e.style],
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
      qe.metadata = { width: 24, height: 24 }
      var Je = qe,
        $e = a('KrGU'),
        Ge = a('I/9y'),
        Ye = a('YUdS'),
        Ke = a('EjKN'),
        Xe = Y.a.a1ea2f12,
        Qe = Y.a.g8191e77,
        Ze = function (e) {
          var t = e.day,
            a = e.month
          if (t && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && t === n.getDate()
          }
        },
        et = Q.a.create(function (e) {
          return {
            description: { display: 'block', marginBottom: e.spaces.space12 },
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
            noCursor: { cursor: 'inherit' },
          }
        }),
        tt = function (e) {
          var t,
            a,
            n,
            r = e.isOwnProfile,
            o = e.professionalCategoryName,
            s = e.user,
            l = i.a.useRef(),
            c = Object(ye.b)(),
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
                  ie.a,
                  { style: et.description },
                  i.a.createElement(Re.a, {
                    description: s.description,
                    disableTranslation: !s.is_profile_translatable,
                    entities: s.entities,
                    testID: Ue.a.userDescription,
                    userId: s.id_str,
                    withheldDescription: s.withheld_description,
                    withheldEntities: s.withheld_entities,
                  }),
                )
              : null,
            i.a.createElement(
              ie.a,
              { style: et.details },
              i.a.createElement(
                je.b,
                { style: et.detailsText, testID: Ue.a.profileHeaderItems },
                o
                  ? i.a.createElement(
                      Ae.a,
                      {
                        Icon: Je,
                        onPress: function () {
                          c.scribe(w()(w()({}, u), A.b()))
                        },
                        style: et.noCursor,
                        testID: Ue.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      i.a.createElement(je.b, null, o),
                    )
                  : null,
                s.location && !Object(We.a)(s.location)
                  ? i.a.createElement(
                      Ae.a,
                      { Icon: $e.a, testID: Ue.a.userLocation },
                      i.a.createElement(je.b, null, s.location),
                    )
                  : null,
                d && d.url
                  ? i.a.createElement(
                      Ae.a,
                      { Icon: Ge.a, link: { pathname: d.url, external: !0 }, testID: Ue.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !m ||
                  Object(Me.a)(m) ||
                  (m.visibility &&
                    'self' === m.visibility.toLowerCase() &&
                    m.year_visibility &&
                    'self' === m.year_visibility.toLowerCase())
                  ? null
                  : Ze(m)
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        Ae.a,
                        {
                          Icon: Ye.a,
                          onPress: function () {
                            l.current && l.current.launch()
                          },
                        },
                        r ? Xe : Qe,
                      ),
                      i.a.createElement(Le.a, {
                        setRef: function (e) {
                          l.current = e
                        },
                      }),
                    )
                  : i.a.createElement(
                      Ae.a,
                      { Icon: Ke.a, testID: Ue.a.userBirthdate },
                      i.a.createElement(De.a, { birthdate: m, withBornPrefixText: !0 }),
                    ),
                i.a.createElement(He.a, { joinDate: s.created_at }),
              ),
            ),
          )
        },
        at = a('mN6z'),
        nt = a('W27K'),
        rt = a('ddV6'),
        ot = a.n(rt),
        it = a('1YZw'),
        st = Object(z.a)().propsFromActions(function () {
          return {
            addToast: it.b,
            createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: p.e.unmute,
          }
        }),
        lt = a('8Usl'),
        ct = a('eb3s'),
        ut = a('P2xQ'),
        dt = Y.a.cef4e8cf,
        mt = Y.a.ec294e62,
        pt = Y.a.df422dfe,
        ft = Q.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        ht = st(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            n = e.unmute,
            r = e.user,
            o = i.a.useState(!1),
            s = ot()(o, 2),
            l = s[0],
            c = s[1],
            u = r.screen_name
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              je.b,
              { color: 'gray700', style: ft.mute },
              pt,
              ' ',
              i.a.createElement(
                je.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: ft.unmuteButton,
                  testID: lt.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                ut.g,
              ),
            ),
            l
              ? i.a.createElement(ct.a, {
                  confirmButtonLabel: ut.g,
                  headline: dt({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(r.id_str).then(function () {
                        return t({ text: Object(ut.d)(r.screen_name) })
                      }, a({ showToast: !0 }))
                  },
                  text: mt,
                })
              : null,
          )
        }),
        bt = a('RgK2'),
        _t = a.n(bt),
        gt = a('rcen'),
        yt = 'UserName',
        vt = a('X04g'),
        Et = a('A7Fw'),
        wt = Y.a.e839db39,
        Ct = Y.a.b74bd6c6,
        kt = Y.a.f15bfdb3,
        St = Y.a.i859a9d3,
        Pt = Q.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        It = function (e) {
          var t = e.dismiss,
            a = e.type,
            n = Object(ye.b)()
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
            ie.a,
            { style: Pt.content },
            i.a.createElement(Et.a, { style: Pt.icon }),
            i.a.createElement(je.b, { size: 'title4', style: Pt.text, weight: 'bold' }, kt),
            i.a.createElement(
              je.b,
              { color: 'gray700', style: Pt.text },
              Ct,
              ' ',
              i.a.createElement(
                je.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: r },
                St,
              ),
            ),
            'sheet' === a
              ? i.a.createElement(ve.a, { onClick: t, style: Pt.button, type: 'primaryOutlined' }, wt)
              : null,
          )
        },
        Ft = a('jV+4'),
        xt = a('ir4X'),
        Ot = function (e) {
          var t,
            a = e.isOwnProfile,
            n = e.isWithheld,
            o = e.namespace,
            s = e.user,
            l = Object(ye.b)(),
            c = i.a.useContext(j.a).featureSwitches,
            u = n ? _t.a : { isProtected: !!s.protected, isVerified: !!s.verified, translatorType: s.translator_type },
            d = s.name && s.screen_name && !(n && !a),
            m = d ? s.name : '@'.concat(s.screen_name),
            p = i.a.useCallback(function (e, t) {
              return i.a.createElement(It, { dismiss: e, type: t })
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
                  ? i.a.createElement(gt.a, {
                      entities: s.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: s.id_str, name: s.screen_name, item_type: vt.a.ItemType.USER }] }
                        l.scribe(w()(w()({}, o), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: s.highlightedLabel.longDescription.text,
                    })
                  : (null === (y = s.highlightedLabel) || void 0 === y ? void 0 : y.description) || null
            b = h ? w()(w()({}, s.highlightedLabel), {}, { description: v }) : null
          }
          return i.a.createElement(
            ie.a,
            { style: W.a.names, testID: yt },
            i.a.createElement(
              Ft.a,
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
        Tt = (a('uFXj'), a('W55q')),
        Nt = a('YeSc'),
        Bt = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Lt = Object(z.a)()
          .propsFromState(function () {
            return { newsletter: Nt.f }
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
                Tt.c.Subscribed,
              profileUrl: null == n ? void 0 : n.data.revue_account.profile_info.profile_url,
              revueAccountId: null == n ? void 0 : n.config.revue_account_id,
              showNewsletterSubscription: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_PROFILE_HEADER',
              ),
              fetchUserBizProfileIfNeeded: Nt.c,
            }
          })
          .withAnalytics(Bt),
        Mt = Object(z.a)()
          .propsFromState(function () {
            return { newsletter: Nt.f }
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
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        At = a('vbJ7'),
        Ut = Y.a.d58baa7e,
        Rt = function (e) {
          var t = e.description,
            a = e.isMobileLayout,
            n = e.originalImage,
            r = e.subscriberCount,
            o = e.title,
            s = e.withThumbnail,
            l = parseInt(r, 10) || 0,
            c = Ut(l),
            u = a ? 'subtext2' : 'body'
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              ie.a,
              { style: Dt.contentContainer },
              s && n
                ? i.a.createElement(
                    ie.a,
                    { style: [Dt.newsletterImageContainer, a ? Dt.newsletterImageContainerMobile : void 0] },
                    i.a.createElement(
                      ue.a,
                      { ratio: 1 },
                      i.a.createElement(X.a, { accessibilityLabel: t || '', aspectMode: ce.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              i.a.createElement(
                ie.a,
                { style: [Dt.newsletterInfoContainer, a ? Dt.mobileNewsletterInfoContainer : void 0] },
                i.a.createElement(
                  je.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: a ? Dt.newsletterFieldMobile : Dt.newsletterField,
                    weight: 'bold',
                  },
                  o,
                ),
                i.a.createElement(
                  je.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [Dt.newsletterDescription, a ? Dt.newsletterFieldMobile : Dt.newsletterField],
                  },
                  t,
                ),
                r
                  ? i.a.createElement(
                      je.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: a ? Dt.newsletterFieldMobile : Dt.newsletterField,
                      },
                      i.a.createElement(Y.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: l }),
                    )
                  : null,
              ),
            ),
          )
        }
      Rt.defaultProps = { withThumbnail: !0 }
      var Dt = Q.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: At.a.hexToCss(Q.a.theme.colors.borderColor, 0.7),
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
        Ht = Mt(Rt),
        jt = a('Rp9C'),
        Wt = a('I4+6'),
        zt = Y.a.d834aec4,
        Vt = Y.a.ab0deccf,
        qt = Y.a.caeab0f7,
        Jt = Q.a.create(function (e) {
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
        $t = Lt(function (e) {
          var t = i.a.useContext(j.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
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
                  var t = jt.a.getUserItem(d),
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
                ie.a,
                { style: Jt.moduleLabel },
                i.a.createElement(je.b, { size: 'body', weight: 'bold' }, zt),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  a = o ? s : t,
                  n = o ? qt : Vt,
                  r = Q.a.isDarkMode() ? Q.a.theme.colors.gray50 : Q.a.theme.colors.gray0,
                  l = Wt.a.generate({
                    backgroundColor: Q.a.theme.colors.transparent,
                    color: Q.a.theme.colors.primary,
                    customFocusBackgroundColor: r,
                    customHoverBackgroundColor: r,
                    customPressedBackgroundColor: r,
                  })
                return i.a.createElement(
                  le.a,
                  {
                    interactiveStyles: l,
                    link: a,
                    onPress: function () {
                      return f('click')
                    },
                    style: [Jt.moduleContainer, Q.a.isDarkMode() ? Jt.darkModeBackground : Jt.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ie.a,
                      { style: [Jt.contentContainer, Jt.summaryContainer] },
                      i.a.createElement(Ht, { isMobileLayout: e, userId: m, withThumbnail: !0 }),
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: [Jt.buttonContainer, e ? Jt.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        je.b,
                        {
                          align: 'center',
                          link: a,
                          size: 'body',
                          style: Jt.actionButton,
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
            ? i.a.createElement(te.a, null, function (e) {
                var t = e.windowWidth <= Q.a.theme.breakpoints.small
                return h(t)
              })
            : null
        }),
        Gt = a('z+ta'),
        Yt = a('7JQg'),
        Kt = a('7wqI'),
        Xt = a('Jkc4'),
        Qt = a('wCd/'),
        Zt = function (e) {
          var t = e.isActiveCreator,
            a = e.isOwnProfile,
            n = e.superFollowersCount,
            r = e.user,
            o = r.followers_count,
            s = r.friends_count,
            l = r.screen_name
          return i.a.createElement(Xt.a, null, function (e) {
            return i.a.createElement(Qt.a, {
              followersCount: o,
              friendsCount: s,
              onPress: e(),
              screenName: l,
              superFollowersCount: t && a ? n : void 0,
              withLink: Object(Kt.b)({ isOwnProfile: a, user: r }),
            })
          })
        },
        ea = { page: 'profile', section: 'header' },
        ta = (function (e) {
          O()(a, e)
          var t = N()(a)
          function a(e, n) {
            var r
            return (
              k()(this, a),
              (r = t.call(this, e, n)),
              L()(F()(r), '_handleRemoveClusterFollow', function () {
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
                  return !Object(at.a)(t, this.state) || !Object(at.a)(e, this.props)
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
                    Yt.b,
                    { namespace: ea },
                    i.a.createElement(
                      ie.a,
                      null,
                      i.a.createElement(me, { isOwnProfile: l, isWithheld: a, user: s }),
                      i.a.createElement(
                        ie.a,
                        { style: [W.a.content, aa.content, c && W.a.withheld] },
                        i.a.createElement(
                          ie.a,
                          { style: W.a.avatarAndButton },
                          i.a.createElement(ne, { isOwnProfile: l, isWithheld: a, user: s }),
                          i.a.createElement(Be, {
                            history: this.props.history,
                            isWithheld: a,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: s,
                          }),
                        ),
                        i.a.createElement(Ot, { isOwnProfile: l, isWithheld: a, namespace: ea, user: s }),
                        c ? null : i.a.createElement(tt, { isOwnProfile: l, professionalCategoryName: r, user: s }),
                        u
                          ? null
                          : i.a.createElement(Zt, {
                              isActiveCreator: t,
                              isOwnProfile: l,
                              superFollowersCount: o,
                              user: s,
                            }),
                        d
                          ? null
                          : i.a.createElement(
                              ie.a,
                              { style: aa.marginTopXSmall },
                              i.a.createElement(nt.a, { userId: s.id_str, userScreenName: s.screen_name }),
                            ),
                        s.muting ? i.a.createElement(ht, { user: s }) : null,
                      ),
                      m ? null : i.a.createElement($t, { screenName: s.screen_name, user: s, userId: s.id_str }),
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
                  return i.a.createElement(Gt.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            a
          )
        })(i.a.Component)
      L()(ta, 'contextType', j.a)
      var aa = Q.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        na = ta,
        ra = a('8UdT'),
        oa = a('dwig'),
        ia = a('GOQE'),
        sa = a('kGix'),
        la = a('v//M'),
        ca = a('0+qk'),
        ua = a('drnk'),
        da = a('9Bb1'),
        ma = a('iFPY'),
        pa = a('5S/X'),
        fa = a('oQhu'),
        ha = a('xZGM'),
        ba = function (e, t) {
          return Object(ha.z)(e, ha.v)
        },
        _a = Object(z.a)()
          .propsFromState(function () {
            return { shouldShowEducation: ba }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ha.w)(ha.v)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        ga = a.p + 'nft_education_graphic.72be3745.png',
        ya = a('Wms4'),
        va = a('feu+'),
        Ea = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ze.a.root, e.style],
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
      Ea.metadata = { width: 24, height: 24 }
      var wa = Ea,
        Ca = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ze.a.root, e.style],
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
      var ka = Ca,
        Sa = Y.a.ebf5ec25,
        Pa = Y.a.c405ac8d,
        Ia = Y.a.a893d601,
        Fa = Y.a.eb023c93,
        xa = Y.a.gc65c0a9,
        Oa = Y.a.d17e8aa3,
        Ta = Y.a.ff9c6943,
        Na = Q.a.create(function (e) {
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
        Ba = _a(function (e) {
          var t = e.addEducationFlag,
            a = e.analytics,
            n = e.onEducationSheetDismiss,
            r = e.shouldShowEducation,
            o = i.a.useContext(j.a).featureSwitches,
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
            Y.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            i.a.createElement(
              je.b,
              {
                color: 'primary',
                link: l,
                onPress: function () {
                  a.scribe({ element: 'learn_more', action: 'click' })
                },
                testID: 'learnMore',
              },
              Y.a.d8af538e,
            ),
          )
          return s
            ? i.a.createElement(va.a, {
                accessibilityRole: 'dialog',
                actionLabel: Ia,
                contentStyle: Na.interstitialContent,
                graphic: function () {
                  return i.a.createElement(
                    ie.a,
                    { style: Na.image },
                    i.a.createElement(X.a, { accessibilityLabel: '', aspectMode: ce.a.exact(2.5), image: ga }),
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
                  ie.a,
                  null,
                  i.a.createElement(
                    ie.a,
                    null,
                    i.a.createElement(
                      je.b,
                      { color: 'normal', size: 'headline2', style: Na.heading, weight: 'bold' },
                      Fa,
                    ),
                    i.a.createElement(je.b, null, u),
                  ),
                  i.a.createElement(
                    ie.a,
                    null,
                    i.a.createElement(
                      je.b,
                      { color: 'normal', size: 'headline2', style: Na.heading, weight: 'bold' },
                      xa,
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: Na.iconContainer },
                      i.a.createElement(wa, { style: Na.icon }),
                      i.a.createElement(je.b, null, Ta),
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: [Na.iconContainer, Na.reducedMarginBottom] },
                      i.a.createElement(Ge.a, { style: Na.icon }),
                      i.a.createElement(je.b, null, Oa),
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: [Na.iconContainer, Na.noMarginTop] },
                      i.a.createElement(ie.a, { style: Na.icon }),
                      i.a.createElement(
                        ya.a,
                        { style: Na.label },
                        i.a.createElement(ka, { style: Na.labelIcon }),
                        i.a.createElement(je.b, { color: 'normal', weight: 'bold' }, Sa),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        La = a('AJXH'),
        Ma = a('rJoH'),
        Aa = a('Y6L+'),
        Ua = a('jS2K'),
        Ra = a('IG4P'),
        Da = (function (e) {
          O()(a, e)
          var t = N()(a)
          function a() {
            return k()(this, a), t.apply(this, arguments)
          }
          return (
            P()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(at.a)(e, this.props)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.shouldDisplayUserActionSheet
                  return i.a.createElement(
                    ie.a,
                    null,
                    this._renderBanner(),
                    i.a.createElement(
                      ie.a,
                      { style: [W.a.content, W.a.withheld] },
                      i.a.createElement(
                        ie.a,
                        { style: W.a.avatarAndButton },
                        this._renderAvatar(),
                        i.a.createElement(ie.a, { style: W.a.buttonAffordance }),
                        a && t && i.a.createElement(Pe, { buttonStyle: W.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return i.a.createElement(te.a, null, function (e) {
                    var t = e.windowWidth >= Q.a.theme.breakpoints.medium
                    return i.a.createElement(
                      ie.a,
                      { accessibilityState: { hidden: !0 }, style: W.a.avatar },
                      i.a.createElement(ee.a, {
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
                    ie.a,
                    { style: W.a.banner },
                    i.a.createElement(ue.a, { ratio: Q.a.theme.aspectRatios.profileBanner }),
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
                    ie.a,
                    { style: W.a.names },
                    i.a.createElement(Ft.a, {
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
        Ha = a('wytG'),
        ja = a('VS6U'),
        Wa = (a('0zG9'), a('muX9')),
        za = function (e) {
          var t = e.screenName,
            a = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return i.a.createElement(Wa.a, { script: [{ type: 'application/ld+json', innerHTML: a }] })
        },
        Va = a('ipry'),
        qa = a('E4zi'),
        Ja = function (e) {
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
              author: Object(qa.a)(r),
            }
          return (
            o && (s.relatedLink = [o.url, o.expanded_url]),
            i.a.createElement(Wa.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(s, null, 2) }],
            })
          )
        },
        $a = a('Qayx'),
        Ga = a('G8HL'),
        Ya = a('mw9i'),
        Ka = a('zfvc'),
        Xa = a('FIs5'),
        Qa = a('Q0VY'),
        Za = a('FiRh'),
        en = a('0yYu'),
        tn = a('k/OQ'),
        an = a('zCf4'),
        nn = Y.a.fa98627a,
        rn = Y.a.a2811f96,
        on = Y.a.c6ea308b,
        sn = Y.a.d67658c0,
        ln = Y.a.ccc9153f,
        cn = Y.a.bab1f8b0,
        un = Y.a.a52b03a5,
        dn = Y.a.cc3c6989,
        mn = Y.a.add55c97,
        pn = Y.a.d7b8eba9,
        fn = Y.a.c0098d49,
        hn = Y.a.b721eb37,
        bn = Y.a.c4af3561,
        _n = Y.a.dbcaaab5,
        gn = Y.a.hf162fb6,
        yn = Y.a.ad7b2b38,
        vn = Y.a.f19b4073,
        En = Y.a.ha62da97,
        wn = Y.a.ica87fde,
        Cn = Y.a.e79ed125,
        kn = Y.a.g8475f82,
        Sn = Y.a.c9a1cb5d,
        Pn = Y.a.e7b201dd,
        In = Y.a.d09e12c4,
        Fn = Y.a.gbf342a4,
        xn = Y.a.eeab4adf,
        On = Y.a.i144ee20,
        Tn = Y.a.j58e7b00,
        Nn = Y.a.d834ab9c,
        Bn = { section: 'profile_interstitial' },
        Ln = Object(Ha.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, '8KtR'))
        }),
        Mn = Object(Ha.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ivpD'))
        }),
        An = Object(Ha.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ylAD'))
        }),
        Un = 'about',
        Rn = 'likes',
        Dn = 'media',
        Hn = 'reactions',
        jn = 'superfollows',
        Wn = 'with_replies',
        zn = 36e5,
        Vn = Object(fa.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        qn = (function (e) {
          O()(a, e)
          var t = N()(a)
          function a(e, n) {
            var r
            return (
              k()(this, a),
              (r = t.call(this, e, n)),
              L()(
                F()(r),
                '_safetyModeViolatorExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              L()(
                F()(r),
                '_safetyModeUserExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              L()(
                F()(r),
                '_shouldEnableProfessionalCategoryLabelViewing',
                r.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              L()(
                F()(r),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                r.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              L()(
                F()(r),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                r.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              L()(F()(r), '_renderContainer', function () {
                var e = r.props,
                  t = e.fetchStatus,
                  a = e.isNotFound,
                  n = e.isRefreshing,
                  o = e.isSuspended,
                  s = e.screenName,
                  l = o || a
                return i.a.createElement(
                  Ra.a,
                  { isRefreshing: n, onRefresh: r._handlePullToRefresh },
                  i.a.createElement(
                    ie.a,
                    { style: $n.containerGrow },
                    i.a.createElement(
                      Ya.a,
                      null,
                      i.a.createElement(la.a, {
                        accessibilityLabel: ln({ screenName: s }),
                        fetchStatus: l ? sa.a.LOADED : t,
                        onRequestRetry: r._handleRequestRetry,
                        render: r._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              L()(F()(r), '_renderHeaderAndContent', function () {
                var e = r.state.showNftAvatarEducation
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  e && i.a.createElement(Ba, { onEducationSheetDismiss: r._handleOnDismissNftAvatarEducation }),
                  r._renderHeader(),
                  r._renderContent(),
                )
              }),
              L()(F()(r), '_renderContent', function () {
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
              L()(F()(r), '_isViewingOwnProfile', function () {
                var e = r.context.loggedInUserId,
                  t = r.props.user
                return t && e === t.id_str
              }),
              L()(F()(r), '_shouldShowProfileInterstitial', function () {
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
                  u = e === Va.a.SensitiveMedia || e === Va.a.OffensiveProfileContent,
                  d = u && (n.following || a || pa.b)
                return !(r._isViewingOwnProfile() || r._isProtectedFromViewer() || l || c || s || d)
              }),
              L()(F()(r), '_isProtectedFromViewer', function () {
                var e = r.props.user
                return e && e.protected && !r._isViewingOwnProfile() && !e.following
              }),
              L()(F()(r), '_handleRequestRetry', function () {
                r._fetchOneUserIfNeeded(r.props)
              }),
              L()(F()(r), '_handlePullToRefresh', function () {
                var e = r.props.user
                e ? r._fetchOneUser(e.id_str) : r._fetchOneUserIfNeeded(r.props)
              }),
              L()(F()(r), '_handleShowActionedTweets', function () {
                var e = r.props,
                  t = e.history,
                  a = e.user
                a && t.push('/settings/safety_mode/actioned_tweets/'.concat(a.id_str))
              }),
              L()(F()(r), '_handleShowBlockedTweets', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace,
                  n = e.user
                r.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    r._safetyModeUserExperienceEnabled &&
                    t(w()(w()({}, a), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              L()(F()(r), '_handleOnConfirmProfileInterstitial', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace
                r.setState({ userProfileInterstitialDismissed: !0 }),
                  t(w()(w()(w()({}, a), Bn), {}, { action: 'click' }))
              }),
              L()(F()(r), '_handleOnDismissNftAvatarEducation', function () {
                r.setState({ showNftAvatarEducation: !1 })
              }),
              L()(F()(r), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  a = e.fetchStatus,
                  n = r.props.recordTTFL
                if ((a === sa.a.FAILED && (r._shouldRecordTTFL = !1), r._shouldRecordTTFL && t.length)) {
                  var o = t.some(function (e) {
                    return e.type === ra.b.Tweet
                  })
                  r._shouldRecordTTFL = !1
                  o && n('profile', { source: 'graphql' })
                }
              }),
              L()(F()(r), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                r.setState({ showFollowButtonRightControl: t })
              }),
              L()(F()(r), '_getSmartBlockEndTimeSentence', function () {
                var e = r.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    a = parseInt(e.smart_blocking_expiration, 10),
                    n = a > t ? a - t : 0
                  if (n <= 72e5) return _n
                  var o = Math.floor(n / zn),
                    i = Math.floor(o / 24),
                    s = o % 24
                  return 0 === i
                    ? vn({ hourCount: s })
                    : 0 === s
                    ? yn({ dayCount: i })
                    : gn({ dayCount: i, hourCount: s })
                }
                return ''
              }),
              L()(F()(r), '_getProfessionalCategory', function () {
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
              L()(F()(r), '_shouldDisplayProfessionalCategoryLabel', function () {
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
              L()(F()(r), '_getProfessionalCategoryNameIfDisplayable', function () {
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
                    r = t.scribeAction,
                    o = t.scribeNamespace
                  this._fetchOneUserIfNeeded(this.props).then(function () {
                    e._isUserAutoblocked() &&
                      r(
                        w()(w()({}, o), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' }),
                      ),
                      e._isUserAutoblocking() &&
                        r(
                          w()(
                            w()({}, o),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && r(w()(w()({}, o), A.c())),
                    n()
                      .catch(a())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && r(w()(w()(w()({}, o), Bn), {}, { action: 'impression' }))
                      })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.fetchStatus,
                    n = t.recordTTFMC
                  if (e.fetchStatus !== a && a === sa.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (
                    this._shouldRecordTTFMC &&
                    e.fetchStatus !== a &&
                    a === sa.a.LOADED &&
                    this._isValidProfile()
                  ) {
                    n('profile', { source: 'graphql' }), (this._shouldRecordTTFMC = !1)
                  }
                  e.user &&
                    !e.user.blocking &&
                    this.props.user &&
                    this.props.user.blocking &&
                    (window.scrollTo(0, 0), this.setState({ showBlockedTweets: !1 }))
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
                      n(w()(w()(w()({}, r), Bn), {}, { action: 'impression' }))
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
                    c = t.location,
                    u = t.screenName,
                    d = t.user,
                    m = t.userLanguage,
                    p = this._isViewingOwnProfile(),
                    f = s || o || (l && !p),
                    h = d ? on({ screenName: d.screen_name, fullName: d.name }) : void 0,
                    b = p ? '' : '@'.concat((d && d.screen_name) || u || '', ' '),
                    _ = f ? null : i.a.createElement(ca.a, { getLocationState: Vn(b), history: n }),
                    g =
                      d && !f
                        ? i.a.createElement(Ft.a, {
                            isProtected: d.protected,
                            isVerified: d.verified,
                            name: d.name,
                            screenName: d.screen_name,
                            withScreenName: !1,
                          })
                        : nn,
                    y = d && !f && a === sa.a.LOADED ? this._renderSubtitle(d) : void 0,
                    v = d && 'twitter://user?screen_name='.concat(d.screen_name),
                    E = d && 'https://twitter.com/'.concat(d.screen_name || ''),
                    w = d && sn({ fullName: d.name, screenName: d.screen_name })
                  return i.a.createElement(ja.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: b },
                    documentTitle: h,
                    history: n,
                    primaryContent: i.a.createElement(
                      oa.a,
                      { fab: _ },
                      i.a.createElement(Ma.a, {
                        canonical: E,
                        description: null == d ? void 0 : d.description,
                        image: null == d ? void 0 : d.profile_image_url_https,
                        title: w,
                        type: 'profile',
                      }),
                      pa.b && d
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(Ja, { user: d }),
                            i.a.createElement(da.a, { description: null == d ? void 0 : d.description }),
                          )
                        : null,
                      i.a.createElement(R.a, { deepLink: v }),
                      i.a.createElement(D.a, {
                        featureSwitches: this.context.featureSwitches,
                        loggedInUserId: e,
                        pageType: 'profile',
                        userLanguage: m,
                      }),
                      E ? i.a.createElement(U.a, { canonical: E }) : null,
                      i.a.createElement(la.a, {
                        accessibilityLabel: ln({ screenName: u }),
                        fetchStatus: d || f ? sa.a.LOADED : a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      r
                        ? i.a.createElement(ma.a, { history: n, location: c, userId: null == d ? void 0 : d.id_str })
                        : null,
                    ),
                    rightControl: this._renderRightControl(),
                    sidebarContent: this._renderSidebarContent(),
                    subtitle: y,
                    title: g,
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
                        Ka.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        i.a.createElement(he.a, { promotedContent: t, userId: a.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    a = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(a, '/').concat(Rn)) > -1
                    ? i.a.createElement($a.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(a, '/').concat(Hn)) > -1
                    ? i.a.createElement($a.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(a, '/').concat(Dn)) > -1
                    ? i.a.createElement($a.a, { count: e.media_count, type: 'media' })
                    : i.a.createElement($a.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? i.a.createElement(Ua.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(Kt.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : i.a.createElement(H.a, null)
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
                    pa.b && d && m
                      ? i.a.createElement(za, { screenName: m })
                      : pa.b
                      ? i.a.createElement(La.a, null)
                      : null,
                    i.a.createElement(Xa.a, {
                      buttonText: t,
                      buttonType: a,
                      header: n,
                      message: r,
                      onButtonPress: o,
                      onSecondaryButtonPress: s,
                      secondaryButtonText: l,
                      secondaryButtonType: c,
                      style: Gn.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(ua.a)(e),
                    a = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: Nn,
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
                    a = Cn({ screenName: t }),
                    n = i.a.createElement(
                      Y.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      i.a.createElement(je.b, { link: 'https://support.twitter.com/articles/117063' }, Y.a.f6a72a2a),
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
                    n = En({ screenName: a }),
                    r = i.a.createElement(je.b, { color: 'gray700', weight: 'bold' }),
                    o = i.a.createElement(
                      ie.a,
                      null,
                      i.a.createElement(
                        je.b,
                        { color: 'gray700', style: { paddingBottom: Q.a.theme.spaces.space20 } },
                        i.a.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          i.a.cloneElement(r, null, Y.a.g6645d94({ screenName: a })),
                        ),
                      ),
                      i.a.createElement(
                        je.b,
                        { color: 'gray700', style: { paddingBottom: Q.a.theme.spaces.space8 } },
                        i.a.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          i.a.cloneElement(r, null, Y.a.g08eceae({ screenName: a })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: o,
                    buttonText: On,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: Tn,
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
                      Y.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      i.a.createElement(je.b, { link: 'https://support.twitter.com/articles/20172060' }, Y.a.de078c23),
                    )
                  return this._renderEmptyState({ header: wn, message: a })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(je.b, { style: { paddingBottom: Q.a.theme.spaces.space20 } }),
                    n = i.a.createElement(je.b, { weight: 'bold' }),
                    r = i.a.createElement(je.b, { style: { paddingBottom: Q.a.theme.spaces.space4 }, weight: 'bold' }),
                    o = i.a.createElement(
                      ie.a,
                      null,
                      i.a.createElement(
                        je.b,
                        { style: { paddingBottom: Q.a.theme.spaces.space20 } },
                        i.a.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'a496f1c8' },
                          i.a.cloneElement(n, null, Y.a.e8bc24ae({ screenName: t })),
                        ),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'd0271e51' },
                        i.a.cloneElement(a, null, Y.a.ff050532),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        i.a.createElement(
                          je.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: Q.a.theme.spaces.space20 },
                          },
                          Y.a.b48bd8bf,
                        ),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'h9bd2805' },
                        i.a.cloneElement(a, null, Y.a.ia457a19),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        i.a.cloneElement(r, null, Y.a.f5531a44),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        i.a.cloneElement(a, null, Y.a.h173a610),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        i.a.cloneElement(r, null, Y.a.ha985c95),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        i.a.cloneElement(a, null, Y.a.d5d82dd3),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        i.a.cloneElement(r, null, Y.a.i4b9b3d0),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        i.a.cloneElement(a, null, Y.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: bn, message: o })
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
                        ? i.a.createElement(gt.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                        : i.a.createElement(
                            Y.a.I18NFormatMessage,
                            { $i18n: 'f6fa2033' },
                            i.a.createElement(
                              je.b,
                              { link: 'https://support.twitter.com/articles/18311' },
                              Y.a.f3b1bdc1,
                            ),
                          )),
                    this._renderEmptyState({ header: kn, message: e })
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
                  var r = Qa.a.descriptionTextParts(t, a),
                    o = i.a.createElement(
                      je.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      r.map(function (e, t) {
                        return i.a.createElement(Za.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: Fn, message: o })
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
                  var r = Qa.a.descriptionTextParts(t, a)
                  return i.a.createElement(
                    ie.a,
                    null,
                    i.a.createElement(
                      ie.a,
                      { style: $n.withheldMessageRoot },
                      i.a.createElement(
                        je.b,
                        { align: 'center', size: 'title4', style: $n.withheldMessageHeader, weight: 'bold' },
                        Fn,
                      ),
                      i.a.createElement(
                        je.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        r.map(function (e, t) {
                          return i.a.createElement(Za.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    i.a.createElement(en.a, null),
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
                      Y.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      i.a.createElement(je.b, { link: 'https://support.twitter.com/articles/14016' }, Y.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: In, message: a })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Sn, message: Pn })
                },
              },
              {
                key: '_renderUserProfileDefault',
                value: function () {
                  var e = this.props,
                    t = e.history.location,
                    a = e.isActiveCreator,
                    n = e.user
                  if (!n) return null
                  var o = n.screen_name,
                    s = this.state.showBlockedTweets,
                    l = t.query,
                    c = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    u = (this._isViewingOwnProfile() && a) || n.super_following,
                    d = this.context.featureSwitches.isTrue('profile_foundations_about_tab_enabled'),
                    m = function (e) {
                      var a = c ? fn : pn
                      return [
                        d
                          ? {
                              to: { pathname: '/'.concat(o, '/').concat(Un), query: l },
                              key: hn,
                              label: hn,
                              onClick: e(),
                            }
                          : void 0,
                        {
                          isActive: function () {
                            return (
                              t.pathname.toLowerCase() === '/'.concat(o).toLowerCase() ||
                              t.pathname.toLowerCase() === '/'.concat(o, '/').toLowerCase() ||
                              t.pathname.indexOf('/intent/follow') > -1 ||
                              t.pathname.indexOf('/intent/user') > -1
                            )
                          },
                          to: { pathname: '/'.concat(o), query: l },
                          key: cn,
                          label: cn,
                        },
                        { to: { pathname: '/'.concat(o, '/').concat(Wn), query: l }, key: un, label: un },
                        u
                          ? {
                              to: { pathname: '/'.concat(o, '/').concat(jn), query: l },
                              key: dn,
                              label: dn,
                              color: 'plum500',
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(o, '/').concat(Dn), query: l }, key: mn, label: mn, onClick: e() },
                        {
                          to: { pathname: '/'.concat(o, '/').concat(c ? Hn : Rn), query: l },
                          key: a,
                          label: a,
                          onClick: e(),
                        },
                      ]
                    },
                    p = { displayBlocked: s, fullName: n.name, screenName: n.screen_name, userId: n.id_str },
                    f = { isActiveCreator: a, isSuperFollowing: n.super_following }
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(Xt.a, null, function (e) {
                      return i.a.createElement(tn.a, { accessibilityLabel: rn, links: m(e) })
                    }),
                    i.a.createElement(
                      an.d,
                      null,
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/intent/follow' },
                        i.a.createElement(Ln, r()({}, p, f)),
                      ),
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/intent/user' },
                        i.a.createElement(Ln, r()({}, p, f)),
                      ),
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/'.concat(Aa.J) },
                        i.a.createElement(Ln, r()({}, p, f, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/'.concat(Aa.J, '/').concat(Wn) },
                        i.a.createElement(Ln, r()({}, p, f, { mode: 'with_replies' })),
                      ),
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/'.concat(Aa.J, '/').concat(jn) },
                        i.a.createElement(Ln, r()({}, p, f, { mode: 'superfollows' })),
                      ),
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/'.concat(Aa.J, '/').concat(Dn) },
                        i.a.createElement(An, p),
                      ),
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/'.concat(Aa.J, '/(').concat(Rn, '|').concat(Hn, ')') },
                        i.a.createElement(Mn, p),
                      ),
                      i.a.createElement(
                        an.b,
                        { exact: !0, path: '/'.concat(Aa.J, '/').concat(Un) },
                        i.a.createElement(Ln, r()({}, p, f, { onEntriesRendered: this._handleEntriesRendered })),
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
                  return n ? a(n).catch(t(ia.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(a(ia.a))
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
      L()(qn, 'contextType', j.a),
        L()(qn, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return i.a.createElement(na, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return i.a.createElement(Da, e)
          },
          recordTTFL: M.c,
          recordTTFMC: M.d,
        })
      var Jn = Object(Ga.a)(qn),
        $n = Q.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        Gn = Q.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        Yn = function (e) {
          return i.a.createElement(v.a, { userId: e.user && e.user.id_str }, function (t) {
            var a = t.scribeNamespace
            return i.a.createElement(Jn, r()({}, e, { scribeNamespace: a }))
          })
        }
      t.default = y(Yn)
    },
  },
])
//# sourceMappingURL=WIPED
