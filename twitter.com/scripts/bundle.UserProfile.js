;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    'll/Q': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserProfileScreenContainer', function () {
          return la
        })
      var n = r('97Jx'),
        a = r.n(n),
        o = r('ERkP'),
        i = (r('WNMA'), r('KqXw'), r('jQ3i'), r('x4t0'), r('P1r1')),
        s = r('hqKg'),
        l = r('zh9S'),
        c = r('0KEI'),
        u = r('oEGd'),
        d = r('RqPI'),
        p = r('G6rE'),
        f = function (e, t) {
          var r = t.location,
            n = t.match
          return n && n.params && n.params.screenName
            ? n.params.screenName
            : r && r.query && r.query.screen_name && 'string' == typeof r.query.screen_name
            ? r.query.screen_name
            : ''
        },
        m = function (e, t) {
          return p.e.selectByScreenName(e, f(0, t))
        },
        h = Object(p.g)([p.a]),
        b = Object(s.createSelector)(
          i.l,
          function (e, t) {
            return h(e, f(0, t))
          },
          d.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return p.e.selectIsUserNotFound(e, f(0, t))
          },
          function (e, t) {
            var r = m(e, t)
            return !!r && p.e.selectIsLoading(e, r.id_str)
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
            var r = t.location,
              n = ((r && r.state) || {}).promotedTweetState,
              a = m(e, t)
            return n || (a && a.promoted_content)
          },
          f,
          d.v,
          m,
          function (e, t) {
            var r = m(e, t)
            return r && r.profile_interstitial_type ? r.profile_interstitial_type : null
          },
          d.o,
          function (e, t, r, n, a, o, i, s, l, c, u, d, p, f, m) {
            return {
              displaySensitiveMedia: e,
              fetchStatus: t,
              isActiveCreator: r,
              isIntentRoute: n,
              isNotFound: a,
              isRefreshing: o,
              isSuspended: i,
              suspendMessage: s,
              isWithheld: l,
              promotedContent: c,
              screenName: u,
              superFollowersCount: d,
              user: p,
              userProfileInterstitialType: f,
              userLanguage: m,
            }
          },
        ),
        y = {
          createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_SCREEN'),
          fetchOneUser: p.e.fetchOne,
          fetchOneByScreenNameWithExtraFieldsIfNeeded: p.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
            p.a,
            p.b,
            p.c,
            p.d,
          ]),
          fetchSettingsIfNeeded: i.f,
          scribeAction: l.c,
        },
        g = Object(u.g)(b, y),
        _ = r('txMZ'),
        v = (r('OZaJ'), r('+KXO'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('VrFO')),
        E = r.n(v),
        w = r('Y9Ll'),
        O = r.n(w),
        P = r('1Pcy'),
        k = r.n(P),
        C = r('5Yy7'),
        S = r.n(C),
        I = r('N+ot'),
        F = r.n(I),
        x = r('AuHH'),
        B = r.n(x),
        T = r('KEM+'),
        N = r.n(T),
        j =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          r('5BYb'),
          r('Blm6'),
          r('ho0z'),
          r('1t7P'),
          r('jQ/y'),
          r('vrRf'),
          r('2G9S'),
          r('z84I'),
          r('aeN7')),
        L = r('mC9n'),
        R = r('s4rk'),
        M = r('zI2C'),
        A = r('6ZtA'),
        D = r('es0u'),
        U = (r('hBvt'), r('v6aA')),
        H = r('I/ms'),
        W = r('rxPX'),
        z = r('M0jS'),
        V = function (e, t) {
          return Object(z.c)(e, t.user.id_str)
        },
        q = function (e, t) {
          var r = z.b.select(e, t.user.id_str)
          return null != r && r.refresh_delay_secs ? 1e3 * r.refresh_delay_secs : 1e3 * z.a
        },
        G = Object(W.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('SELECT_SPACE'),
              fetchUsersPresence: z.b.fetchManyIfNeeded,
            }
          })
          .propsFromState(function () {
            return { userPresencePollingInterval: q, userSpace: V }
          })
          .withAnalytics(),
        $ = r('3XMw'),
        Y = r.n($),
        J = r('B5iK')
      var K = r('TIdA'),
        Q = r('rHpw'),
        X = r('1I0O'),
        Z = r('jhWN'),
        ee = r('cHvH'),
        te = K.a.createLayoutCache(),
        re = G(function (e) {
          var t,
            r,
            n,
            i,
            s,
            l = e.analytics,
            c = e.createLocalApiErrorHandler,
            u = e.fetchUsersPresence,
            d = e.isOwnProfile,
            p = e.isWithheld,
            f = e.user,
            m = e.userPresencePollingInterval,
            h = e.userSpace,
            b = o.useContext(U.a),
            y = b.featureSwitches,
            g = b.loggedInUserId,
            _ = !d && p,
            v = _ || !f.profile_image_url_https ? void 0 : f.profile_image_url_https,
            E =
              g &&
              (y.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ||
                y.isTrue('voice_rooms_typeahead_audiospace_ring_enabled')),
            w = f.has_nft_avatar && y.isTrue('responsive_web_nft_avatar'),
            O = h && E,
            P = o.useCallback(
              function () {
                var e
                E && (null === (e = u([f.id_str])) || void 0 === e || e.catch(c({})))
              },
              [f.id_str, E, u, c],
            )
          o.useEffect(
            function () {
              return P()
            },
            [P],
          ),
            o.useEffect(function () {
              w && l.scribe({ element: 'nft_avatar', action: 'impression' })
            }, []),
            (t = function () {
              return P()
            }),
            (r = E ? m : void 0),
            (n = o.useRef()),
            o.useEffect(
              function () {
                n.current = t
              },
              [t],
            ),
            o.useEffect(
              function () {
                if (n.current && r) {
                  var e = new J.b(r).interval(n.current)
                  return (
                    e.start(),
                    function () {
                      return e.stop()
                    }
                  )
                }
              },
              [r],
            ),
            h && O
              ? ((s = h.accessibilityLabel), (i = h.link))
              : _ ||
                (w
                  ? ((s = ne.opensNFTDetails), (i = { pathname: '/'.concat(f.screen_name, '/nft') }))
                  : ((s = ne.opensProfilePhoto), (i = { pathname: '/'.concat(f.screen_name, '/photo') })))
          var k = function (e) {
              l.scribe({ element: w ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            C = function (e) {
              var t = e.windowWidth >= Q.a.theme.breakpoints.medium,
                r = {
                  accessibilityLabel: s,
                  imageLayoutCache: te,
                  link: i,
                  onClick: k,
                  size: 'custom',
                  uri: v,
                  screenName: f.screen_name,
                }
              return h && O
                ? o.createElement(X.a, a()({}, r, { presenceRingType: h.presenceRingType, style: H.a.avatar }))
                : o.createElement(
                    Z.a,
                    a()({}, r, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: H.a.avatar,
                    }),
                  )
            }
          return o.createElement(ee.a, null, C)
        }),
        ne = { opensProfilePhoto: Y.a.f30795df, opensNFTDetails: Y.a.a270100c },
        ae = r('RCZO'),
        oe = r('MWbm'),
        ie = r('n4Eu'),
        se = r('cm6r'),
        le = r('A91F'),
        ce = r('9Xij'),
        ue = K.a.createLayoutCache(),
        de = function (e) {
          var t = e.isOwnProfile,
            r = e.isWithheld,
            n = e.user,
            a = !t && r,
            i = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            s = i && ie.a.get(i),
            l = s ? Object(ae.g)(s) : Q.a.theme.colors.gray200
          return !a && n.profile_banner_url
            ? o.createElement(
                se.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                o.createElement(K.a, {
                  accessibilityLabel: '',
                  aspectMode: le.a.exact(Q.a.theme.aspectRatios.profileBanner),
                  backgroundColor: l,
                  image: n.profile_banner_url,
                  layoutCache: ue,
                }),
              )
            : o.createElement(
                oe.a,
                { style: H.a.banner },
                o.createElement(ce.a, { ratio: Q.a.theme.aspectRatios.profileBanner, style: { backgroundColor: l } }),
              )
        },
        pe = r('3nOA'),
        fe = r('I57f'),
        me = r('uIZp'),
        he = r('SOvA'),
        be = r('vYiB'),
        ye = r('Y49K'),
        ge = r('Irs7'),
        _e = r('/yvb'),
        ve = r('ACHU'),
        Ee = r('rsoE'),
        we = r('vMjK')
      function Oe(e) {
        var t = (function () {
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
          var r,
            n = B()(e)
          if (t) {
            var a = B()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var Pe = Y.a.h63a5c3b,
        ke = o.createElement(ve.a, null),
        Ce = (function (e) {
          S()(r, e)
          var t = Oe(r)
          function r() {
            var e
            E()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              N()(k()(e), '_renderUserMenu', function (t) {
                var r = e.props,
                  n = r.promotedContent,
                  a = r.user
                return o.createElement(we.b, { onClose: t, promotedContent: n, user: a, view: 'profile' })
              }),
              e
            )
          }
          return (
            O()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.buttonStyle
                  return o.createElement(_e.a, {
                    accessibilityLabel: Pe,
                    hoverLabel: { label: Pe },
                    icon: ke,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: Ee.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            r
          )
        })(o.PureComponent),
        Se = r('pHkl'),
        Ie = Y.a.g7088266,
        Fe = Y.a.gd7acb84,
        xe = Y.a.b7636014,
        Be = o.createElement(he.a, null),
        Te = Q.a.create(function (e) {
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
        Ne = function (e) {
          var t = e.history,
            r = e.isWithheld,
            n = e.loggedInUserId,
            a = e.onFollowButtonOffscreen,
            i = e.promotedContent,
            s = e.user,
            l = Object(ge.b)(),
            c = s.id_str === n,
            u = s.blocked_by,
            d = s.blocking,
            p = r && !c,
            f = s.can_dm && n && !d && !u && !p,
            m = n && s && !c && !p,
            h = s.following && n && !d && !u && !r,
            b = s.default_profile_image && !s.description && !s.profile_banner_url
          return o.createElement(
            oe.a,
            { style: Te.buttons },
            n && c
              ? o.createElement(
                  _e.a,
                  {
                    link: b ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Te.lastButton,
                    testID: ye.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  b ? Fe : Ie,
                )
              : null,
            m && o.createElement(Ce, { buttonStyle: Te.button, promotedContent: i, user: s }),
            !c &&
              f &&
              o.createElement(_e.a, {
                accessibilityLabel: xe,
                hoverLabel: { label: xe },
                icon: Be,
                onPress: function () {
                  if (n) {
                    var e = Object(pe.a)(s.id_str, n)
                    l.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Se.g.ONE_TO_ONE,
                        inbox_type: Se.c.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Te.button,
                testID: ye.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              h &&
              o.createElement(fe.a, {
                allowPromptForPush: !0,
                isFollowing: s.notifications,
                style: Te.button,
                userId: s.id_str,
              }),
            !c &&
              !u &&
              !p &&
              o.createElement(
                be.a,
                { onOffscreenChange: a },
                o.createElement(me.a, { promotedContent: i, style: Te.lastButton, userId: s.id_str }),
              ),
          )
        },
        je = r('tOzk'),
        Le = r('YeIG'),
        Re = r('Je1/'),
        Me = r('uLiA'),
        Ae = r('EJJl'),
        De = r('WWyu'),
        Ue = r('LhSm'),
        He = r('t62R'),
        We = r('GWvE'),
        ze = r('Lsrn'),
        Ve = r('k/Ka')
      function qe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var $e = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ve.a)(
          'svg',
          Ge(
            Ge({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ze.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M19.75 6.357h-2.426V4.73c0-1.23-1.01-2.23-2.25-2.23H8.927c-1.24 0-2.25 1-2.25 2.23v1.627H4.25c-1.24 0-2.25 1-2.25 2.23V19.27c0 1.23 1.01 2.23 2.25 2.23h15.5c1.24 0 2.25-1 2.25-2.23V8.587c.002-1.23-1.008-2.23-2.25-2.23zM8.176 4.73c0-.41.337-.744.75-.744h6.144c.414 0 .75.333.75.743v1.627H8.178V4.73zM4.25 7.842h15.5c.413 0 .75.333.75.743v3h-17v-3c0-.41.337-.743.75-.743zm15.5 12.17H4.25c-.413 0-.75-.333-.75-.742v-6.197h17v6.198c0 .41-.338.744-.75.744z',
            }),
          ),
        )
      }
      $e.metadata = { width: 24, height: 24 }
      var Ye = $e,
        Je = r('KrGU'),
        Ke = r('I/9y'),
        Qe = r('YUdS'),
        Xe = r('EjKN')
      function Ze(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ze(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var tt = Y.a.a1ea2f12,
        rt = Y.a.g8191e77,
        nt = function (e) {
          var t = e.day,
            r = e.month
          if (t && r) {
            var n = new Date()
            return r === n.getMonth() + 1 && t === n.getDate()
          }
        },
        at = Q.a.create(function (e) {
          return {
            description: { display: 'block', marginBottom: e.spaces.space12 },
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
            noCursor: { cursor: 'inherit' },
          }
        }),
        ot = function (e) {
          var t,
            r,
            n,
            a = e.isOwnProfile,
            i = e.professionalCategoryName,
            s = e.user,
            l = o.useRef(),
            c = Object(ge.b)(),
            u = a ? { page: 'me' } : { page: 'profile' },
            d =
              null === (t = s.entities) ||
              void 0 === t ||
              null === (r = t.url) ||
              void 0 === r ||
              null === (n = r.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            p = s.birthdate
          return o.createElement(
            o.Fragment,
            null,
            s.description
              ? o.createElement(
                  oe.a,
                  { style: at.description },
                  o.createElement(Ae.a, {
                    description: s.description,
                    disableTranslation: !s.is_profile_translatable,
                    entities: s.entities,
                    testID: Me.a.userDescription,
                    userId: s.id_str,
                    withheldDescription: s.withheld_description,
                    withheldEntities: s.withheld_entities,
                  }),
                )
              : null,
            o.createElement(
              oe.a,
              { style: at.details },
              o.createElement(
                He.b,
                { style: at.detailsText, testID: Me.a.profileHeaderItems },
                i
                  ? o.createElement(
                      Re.a,
                      {
                        Icon: Ye,
                        onPress: function () {
                          c.scribe(et(et({}, u), L.b()))
                        },
                        style: at.noCursor,
                        testID: Me.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      o.createElement(He.b, null, i),
                    )
                  : null,
                s.location && !Object(We.a)(s.location)
                  ? o.createElement(
                      Re.a,
                      { Icon: Je.a, testID: Me.a.userLocation },
                      o.createElement(He.b, null, s.location),
                    )
                  : null,
                d && d.url
                  ? o.createElement(
                      Re.a,
                      { Icon: Ke.a, link: { pathname: d.url, external: !0 }, testID: Me.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !p ||
                  Object(Le.a)(p) ||
                  (p.visibility &&
                    'self' === p.visibility.toLowerCase() &&
                    p.year_visibility &&
                    'self' === p.year_visibility.toLowerCase())
                  ? null
                  : nt(p)
                  ? o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(
                        Re.a,
                        {
                          Icon: Qe.a,
                          onPress: function () {
                            l.current && l.current.launch()
                          },
                        },
                        a ? tt : rt,
                      ),
                      o.createElement(je.a, {
                        setRef: function (e) {
                          l.current = e
                        },
                      }),
                    )
                  : o.createElement(
                      Re.a,
                      { Icon: Xe.a, testID: Me.a.userBirthdate },
                      o.createElement(De.a, { birthdate: p, withBornPrefixText: !0 }),
                    ),
                o.createElement(Ue.a, { joinDate: s.created_at }),
              ),
            ),
          )
        },
        it = r('mN6z'),
        st = r('W27K'),
        lt = r('ddV6'),
        ct = r.n(lt),
        ut = r('1YZw'),
        dt = Object(W.a)().propsFromActions(function () {
          return {
            addToast: ut.b,
            createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: p.e.unmute,
          }
        }),
        pt = r('8Usl'),
        ft = r('eb3s'),
        mt = r('P2xQ'),
        ht = Y.a.cef4e8cf,
        bt = Y.a.ec294e62,
        yt = Y.a.df422dfe,
        gt = Q.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        _t = dt(function (e) {
          var t = e.addToast,
            r = e.createLocalApiErrorHandler,
            n = e.unmute,
            a = e.user,
            i = o.useState(!1),
            s = ct()(i, 2),
            l = s[0],
            c = s[1],
            u = a.screen_name
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              He.b,
              { color: 'gray700', style: gt.mute },
              yt,
              ' ',
              o.createElement(
                He.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: gt.unmuteButton,
                  testID: pt.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                mt.g,
              ),
            ),
            l
              ? o.createElement(ft.a, {
                  confirmButtonLabel: mt.g,
                  headline: ht({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(a.id_str).then(function () {
                        return t({ text: Object(mt.d)(a.screen_name) })
                      }, r({ showToast: !0 }))
                  },
                  text: bt,
                })
              : null,
          )
        }),
        vt = r('RgK2'),
        Et = r.n(vt),
        wt = r('rcen'),
        Ot = 'UserName',
        Pt = r('X04g'),
        kt = r('A7Fw'),
        Ct = Y.a.e839db39,
        St = Y.a.b74bd6c6,
        It = Y.a.f15bfdb3,
        Ft = Y.a.i859a9d3,
        xt = Q.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        Bt = function (e) {
          var t = e.dismiss,
            r = e.type,
            n = Object(ge.b)()
          o.useEffect(
            function () {
              n.scribe({ component: 'blue_badge_education_context', action: 'show' })
            },
            [n],
          )
          var a = o.useCallback(
            function () {
              n.scribe({ component: 'blue_badge_education_context', element: 'support_url', action: 'click' })
            },
            [n],
          )
          return o.createElement(
            oe.a,
            { style: xt.content },
            o.createElement(kt.a, { style: xt.icon }),
            o.createElement(He.b, { size: 'title4', style: xt.text, weight: 'bold' }, It),
            o.createElement(
              He.b,
              { color: 'gray700', style: xt.text },
              St,
              ' ',
              o.createElement(
                He.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: a },
                Ft,
              ),
            ),
            'sheet' === r ? o.createElement(_e.a, { onClick: t, style: xt.button, type: 'primaryOutlined' }, Ct) : null,
          )
        },
        Tt = r('jV+4'),
        Nt = r('ir4X')
      function jt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? jt(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : jt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Rt = function (e) {
          var t,
            r = e.isOwnProfile,
            n = e.isWithheld,
            i = e.namespace,
            s = e.user,
            l = Object(ge.b)(),
            c = o.useContext(U.a).featureSwitches,
            u = n ? Et.a : { isProtected: !!s.protected, isVerified: !!s.verified, translatorType: s.translator_type },
            d = s.name && s.screen_name && !(n && !r),
            p = d ? s.name : '@'.concat(s.screen_name),
            f = o.useCallback(function (e, t) {
              return o.createElement(Bt, { dismiss: e, type: t })
            }, []),
            m = c.isTrue('identity_verification_educational_prompt_enabled'),
            h = c.isTrue('account_taxonomy_automated_label_enabled'),
            b = s.highlightedLabel
          if ('AutomatedLabel' === (null === (t = s.highlightedLabel) || void 0 === t ? void 0 : t.userLabelType)) {
            var y,
              g,
              _,
              v =
                null !== (y = s.highlightedLabel) &&
                void 0 !== y &&
                null !== (g = y.longDescription) &&
                void 0 !== g &&
                g.entities
                  ? o.createElement(wt.a, {
                      entities: s.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: s.id_str, name: s.screen_name, item_type: Pt.a.ItemType.USER }] }
                        l.scribe(Lt(Lt({}, i), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: s.highlightedLabel.longDescription.text,
                    })
                  : (null === (_ = s.highlightedLabel) || void 0 === _ ? void 0 : _.description) || null
            b = h ? Lt(Lt({}, s.highlightedLabel), {}, { description: v }) : null
          }
          return o.createElement(
            oe.a,
            { style: H.a.names, testID: Ot },
            o.createElement(
              Tt.a,
              a()({}, u, {
                badgeContext: 'account',
                name: p,
                nameSize: 'headline1',
                renderVerifiedBadgeContext: m ? f : void 0,
                screenName: d ? s.screen_name : void 0,
                weight: 'heavy',
                withFollowsYou: s.followed_by && !n,
                withNameWrap: !0,
                withStackedLayout: !0,
              }),
            ),
            b ? o.createElement(Nt.a, { isIconLarge: !0, label: b }) : null,
          )
        },
        Mt = (r('uFXj'), r('W55q')),
        At = r('YeSc'),
        Dt = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Ut = Object(W.a)()
          .propsFromState(function () {
            return { newsletter: At.f }
          })
          .adjustStateProps(function (e) {
            var t,
              r,
              n = e.newsletter,
              a =
                null == n || null === (t = n.data) || void 0 === t
                  ? void 0
                  : t.revue_account.account_settings.twitter_profile_subscriptions_enabled
            return {
              isSubscribed:
                (null == n || null === (r = n.context) || void 0 === r ? void 0 : r.user_subscription_status) ===
                Mt.c.Subscribed,
              profileUrl: null == n ? void 0 : n.data.revue_account.profile_info.profile_url,
              revueAccountId: null == n ? void 0 : n.config.revue_account_id,
              showNewsletterSubscription: a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_PROFILE_HEADER',
              ),
              fetchUserBizProfileIfNeeded: At.c,
            }
          })
          .withAnalytics(Dt),
        Ht = Object(W.a)()
          .propsFromState(function () {
            return { newsletter: At.f }
          })
          .adjustStateProps(function (e) {
            var t,
              r,
              n,
              a,
              o,
              i,
              s,
              l,
              c,
              u,
              d,
              p,
              f,
              m,
              h,
              b,
              y,
              g = e.newsletter,
              _ =
                null == g ||
                null === (t = g.data) ||
                void 0 === t ||
                null === (r = t.revue_account) ||
                void 0 === r ||
                null === (n = r.profile_info) ||
                void 0 === n ||
                null === (a = n.profile_image) ||
                void 0 === a ||
                null === (o = a.image_variants) ||
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
              imageVariants: _,
              originalImage:
                null == g ||
                null === (c = g.data) ||
                void 0 === c ||
                null === (u = c.revue_account) ||
                void 0 === u ||
                null === (d = u.profile_info) ||
                void 0 === d ||
                null === (p = d.profile_image) ||
                void 0 === p
                  ? void 0
                  : p.original_image,
              title:
                null == g ||
                null === (f = g.data) ||
                void 0 === f ||
                null === (m = f.revue_account) ||
                void 0 === m ||
                null === (h = m.newsletter_info) ||
                void 0 === h
                  ? void 0
                  : h.title,
              subscriberCount:
                null == g || null === (b = g.data) || void 0 === b || null === (y = b.account_analytics) || void 0 === y
                  ? void 0
                  : y.subscriber_count,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        Wt = r('vbJ7'),
        zt = Y.a.d58baa7e,
        Vt = function (e) {
          var t = e.description,
            r = e.isMobileLayout,
            n = e.originalImage,
            a = e.subscriberCount,
            i = e.title,
            s = e.withThumbnail,
            l = parseInt(a, 10) || 0,
            c = zt(l),
            u = r ? 'subtext2' : 'body'
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              oe.a,
              { style: qt.contentContainer },
              s && n
                ? o.createElement(
                    oe.a,
                    { style: [qt.newsletterImageContainer, r ? qt.newsletterImageContainerMobile : void 0] },
                    o.createElement(
                      ce.a,
                      { ratio: 1 },
                      o.createElement(K.a, { accessibilityLabel: t || '', aspectMode: le.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              o.createElement(
                oe.a,
                { style: [qt.newsletterInfoContainer, r ? qt.mobileNewsletterInfoContainer : void 0] },
                o.createElement(
                  He.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: r ? qt.newsletterFieldMobile : qt.newsletterField,
                    weight: 'bold',
                  },
                  i,
                ),
                o.createElement(
                  He.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [qt.newsletterDescription, r ? qt.newsletterFieldMobile : qt.newsletterField],
                  },
                  t,
                ),
                a
                  ? o.createElement(
                      He.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: r ? qt.newsletterFieldMobile : qt.newsletterField,
                      },
                      o.createElement(Y.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: l }),
                    )
                  : null,
              ),
            ),
          )
        }
      Vt.defaultProps = { withThumbnail: !0 }
      var qt = Q.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Wt.a.hexToCss(Q.a.theme.colors.borderColor, 0.7),
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
        Gt = Ht(Vt),
        $t = r('Rp9C'),
        Yt = r('I4+6'),
        Jt = Y.a.d834aec4,
        Kt = Y.a.ab0deccf,
        Qt = Y.a.caeab0f7,
        Xt = Q.a.create(function (e) {
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
        Zt = Ut(function (e) {
          var t = o.useContext(U.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
            r = e.analytics,
            n = e.createLocalApiErrorHandler,
            a = e.fetchUserBizProfileIfNeeded,
            i = e.isSubscribed,
            s = e.profileUrl,
            l = e.revueAccountId,
            c = e.screenName,
            u = e.showNewsletterSubscription,
            d = e.user,
            p = e.userId,
            f = t && u,
            m = o.useCallback(
              function (e) {
                if (f) {
                  var t = $t.a.getUserItem(d),
                    n = t.is_user_follows_viewer,
                    a = t.is_viewer_follows_user,
                    o = [{ id: l, is_viewer_follows_user: a, is_user_follows_viewer: n }]
                  r.scribe({ action: e, element: i ? 'start_reading_btn' : 'subscribe_btn', data: { items: o } })
                }
              },
              [r, i, l, f, d],
            )
          o.useEffect(
            function () {
              t && a(p).catch(n())
            },
            [n, a, t, p],
          ),
            o.useEffect(
              function () {
                m('impression')
              },
              [f],
            )
          var h = function (e) {
            return o.createElement(
              o.Fragment,
              null,
              o.createElement(
                oe.a,
                { style: Xt.moduleLabel },
                o.createElement(He.b, { size: 'body', weight: 'bold' }, Jt),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  r = i ? s : t,
                  n = i ? Qt : Kt,
                  a = Q.a.isDarkMode() ? Q.a.theme.colors.gray50 : Q.a.theme.colors.gray0,
                  l = Yt.a.generate({
                    backgroundColor: Q.a.theme.colors.transparent,
                    color: Q.a.theme.colors.primary,
                    customFocusBackgroundColor: a,
                    customHoverBackgroundColor: a,
                    customPressedBackgroundColor: a,
                  })
                return o.createElement(
                  se.a,
                  {
                    interactiveStyles: l,
                    link: r,
                    onPress: function () {
                      return m('click')
                    },
                    style: [Xt.moduleContainer, Q.a.isDarkMode() ? Xt.darkModeBackground : Xt.defaultBackground],
                  },
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      oe.a,
                      { style: [Xt.contentContainer, Xt.summaryContainer] },
                      o.createElement(Gt, { isMobileLayout: e, userId: p, withThumbnail: !0 }),
                    ),
                    o.createElement(
                      oe.a,
                      { style: [Xt.buttonContainer, e ? Xt.mobileButtonContainer : void 0] },
                      o.createElement(
                        He.b,
                        {
                          align: 'center',
                          link: r,
                          size: 'body',
                          style: Xt.actionButton,
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
          return f
            ? o.createElement(ee.a, null, function (e) {
                var t = e.windowWidth <= Q.a.theme.breakpoints.small
                return h(t)
              })
            : null
        }),
        er = r('z+ta'),
        tr = r('7JQg'),
        rr = r('7wqI'),
        nr = r('Jkc4'),
        ar = r('wCd/'),
        or = function (e) {
          var t = e.isActiveCreator,
            r = e.isOwnProfile,
            n = e.superFollowersCount,
            a = e.user,
            i = a.followers_count,
            s = a.friends_count,
            l = a.screen_name
          return o.createElement(nr.a, null, function (e) {
            return o.createElement(ar.a, {
              followersCount: i,
              friendsCount: s,
              onPress: e(),
              screenName: l,
              superFollowersCount: t && r ? n : void 0,
              withLink: Object(rr.b)({ isOwnProfile: r, user: a }),
            })
          })
        }
      function ir(e) {
        var t = (function () {
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
          var r,
            n = B()(e)
          if (t) {
            var a = B()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var sr = { page: 'profile', section: 'header' },
        lr = (function (e) {
          S()(r, e)
          var t = ir(r)
          function r(e, n) {
            var a
            return (
              E()(this, r),
              (a = t.call(this, e, n)),
              N()(k()(a), '_handleRemoveClusterFollow', function () {
                a.setState({ shouldShowClusterFollow: !1 })
              }),
              (a.state = { shouldShowClusterFollow: !1 }),
              a
            )
          }
          return (
            O()(r, [
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
                    r = e.isWithheld,
                    n = e.loggedInUserId,
                    a = e.professionalCategoryName,
                    i = e.superFollowersCount,
                    s = e.user,
                    l = this._isOwnProfile(),
                    c = !l && (s.blocking || s.blocked_by || r),
                    u = !l && (s.blocked_by || r),
                    d = !n || l || s.blocking || s.blocked_by || r || (s.protected && !s.following),
                    p = !n || s.blocking || s.blocked_by || r || (s.protected && !s.following)
                  return o.createElement(
                    tr.b,
                    { namespace: sr },
                    o.createElement(
                      oe.a,
                      null,
                      o.createElement(de, { isOwnProfile: l, isWithheld: r, user: s }),
                      o.createElement(
                        oe.a,
                        { style: [H.a.content, cr.content, c && H.a.withheld] },
                        o.createElement(
                          oe.a,
                          { style: H.a.avatarAndButton },
                          o.createElement(re, { isOwnProfile: l, isWithheld: r, user: s }),
                          o.createElement(Ne, {
                            history: this.props.history,
                            isWithheld: r,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: s,
                          }),
                        ),
                        o.createElement(Rt, { isOwnProfile: l, isWithheld: r, namespace: sr, user: s }),
                        c ? null : o.createElement(ot, { isOwnProfile: l, professionalCategoryName: a, user: s }),
                        u
                          ? null
                          : o.createElement(or, {
                              isActiveCreator: t,
                              isOwnProfile: l,
                              superFollowersCount: i,
                              user: s,
                            }),
                        d
                          ? null
                          : o.createElement(
                              oe.a,
                              { style: cr.marginTopXSmall },
                              o.createElement(st.a, { userId: s.id_str, userScreenName: s.screen_name }),
                            ),
                        s.muting ? o.createElement(_t, { user: s }) : null,
                      ),
                      p ? null : o.createElement(Zt, { screenName: s.screen_name, user: s, userId: s.id_str }),
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
                  return o.createElement(er.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            r
          )
        })(o.Component)
      N()(lr, 'contextType', U.a)
      var cr = Q.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        ur = lr,
        dr = r('8UdT'),
        pr = r('dwig'),
        fr = r('GOQE'),
        mr = r('kGix'),
        hr = r('v//M'),
        br = r('0+qk'),
        yr = r('drnk'),
        gr = r('9Bb1'),
        _r = r('iFPY'),
        vr = r('5S/X'),
        Er = r('oQhu'),
        wr = r('xZGM'),
        Or = function (e, t) {
          return Object(wr.y)(e, wr.u)
        },
        Pr = Object(W.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Or }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(wr.v)(wr.u)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        kr = r.p + 'nft_education_graphic.72be3745.png',
        Cr = r('Wms4'),
        Sr = r('feu+')
      function Ir(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Fr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ir(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ir(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var xr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ve.a)(
          'svg',
          Fr(
            Fr({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ze.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M15.65 9.69c-.29-2.19-1.64-3.5-3.61-3.5S8.72 7.5 8.43 9.69c-.21 1.54 0 2.65.64 3.38.76.88 1.93 1 2.97 1 1.04 0 2.21-.12 2.97-1 .48-.55.72-1.31.72-2.31 0-.33-.03-.69-.08-1.07zm-1.77 2.4c-.29.33-.84.48-1.84.48s-1.55-.15-1.85-.48c-.33-.38-.42-1.12-.28-2.2.14-1 .61-2.2 2.13-2.2 1.51 0 1.99 1.2 2.13 2.19.14 1.09.05 1.83-.29 2.21z',
            }),
            o.createElement('path', {
              d: 'M22.95 10.87l-4.5-7.75C18.05 2.43 17.3 2 16.5 2h-9c-.8 0-1.55.43-1.95 1.12l-4.5 7.75c-.4.7-.4 1.56 0 2.26l4.5 7.75C5.95 21.57 6.7 22 7.5 22h9c.8 0 1.55-.43 1.95-1.12l4.5-7.75c.4-.7.4-1.56 0-2.26zM16.5 20.5h-9c-.46 0-.37-.18-.37-.18.7-2.05 2.66-3.42 4.9-3.42 2.23 0 4.2 1.37 4.89 3.42 0 0 .12.19-.42.18zm5.15-8.12l-3.75 6.46c-1.14-2.1-3.38-3.44-5.87-3.44-2.52 0-4.77 1.36-5.91 3.48l-3.77-6.5c-.13-.24-.13-.52 0-.76l4.5-7.75c.13-.23.38-.37.65-.37h9c.27 0 .52.14.65.37l4.5 7.75c.13.24.13.52 0 .76z',
            }),
          ),
        )
      }
      xr.metadata = { width: 24, height: 24 }
      var Br = xr
      function Tr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Nr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Tr(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Tr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var jr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ve.a)(
          'svg',
          Nr(
            Nr({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ze.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M2.4 16.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L7 10.2c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.2 5.2c-.2.1-.3.1-.5.1zm.3 6.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l5.4-5.4c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.4 5.4c-.2.1-.4.2-.6.2zm6.9-.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l4.8-4.8c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-4.8 4.8c-.2.1-.4.2-.6.2z',
            }),
            o.createElement('path', {
              d: 'M22.384 6.56c-.118-.368-.46-.62-.848-.62h-4.464l-1.51-4.427c-.125-.358-.462-.602-.844-.602-.383 0-.72.243-.843.603l-1.51 4.426H7.9c-.387 0-.73.25-.85.617-.117.37.017.77.333.993l3.566 2.528-1.52 4.45c-.125.363 0 .767.312.996.313.23.73.233 1.047.012l3.93-2.79 3.93 2.79c.155.11.336.164.517.164.188 0 .374-.06.53-.175.31-.23.436-.633.31-.997L18.49 10.08l3.566-2.527c.31-.226.446-.625.328-.994z',
            }),
          ),
        )
      }
      jr.metadata = { width: 24, height: 24 }
      var Lr = jr,
        Rr = Y.a.ebf5ec25,
        Mr = Y.a.c405ac8d,
        Ar = Y.a.a893d601,
        Dr = Y.a.eb023c93,
        Ur = Y.a.gc65c0a9,
        Hr = Y.a.d17e8aa3,
        Wr = Y.a.ff9c6943,
        zr = Q.a.create(function (e) {
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
        Vr = Pr(function (e) {
          var t = e.addEducationFlag,
            r = e.analytics,
            n = e.onEducationSheetDismiss,
            a = e.shouldShowEducation,
            i = o.useContext(U.a).featureSwitches,
            s = a && !0 === i.getValueWithoutScribeImpression('responsive_web_nft_avatar'),
            l =
              (s && i.getStringValue('responsive_web_nft_avatar_help_link')) ||
              'https://help.twitter.com/managing-your-account/nfts-on-twitter',
            c = function () {
              n(), t()
            }
          o.useEffect(
            function () {
              return s && r.scribe({ action: 'impression' }), c
            },
            [s],
          )
          var u = o.createElement(
            Y.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            o.createElement(
              He.b,
              {
                color: 'primary',
                link: l,
                onPress: function () {
                  r.scribe({ element: 'learn_more', action: 'click' })
                },
                testID: 'learnMore',
              },
              Y.a.d8af538e,
            ),
          )
          return s
            ? o.createElement(Sr.a, {
                accessibilityRole: 'dialog',
                actionLabel: Ar,
                contentStyle: zr.interstitialContent,
                graphic: function () {
                  return o.createElement(
                    oe.a,
                    { style: zr.image },
                    o.createElement(K.a, { accessibilityLabel: '', aspectMode: le.a.exact(2.5), image: kr }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: Mr,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  r.scribe({ element: 'ok_button', action: 'click' }), c()
                },
                onClose: c,
                subtext: o.createElement(
                  oe.a,
                  null,
                  o.createElement(
                    oe.a,
                    null,
                    o.createElement(
                      He.b,
                      { color: 'normal', size: 'headline2', style: zr.heading, weight: 'bold' },
                      Dr,
                    ),
                    o.createElement(He.b, null, u),
                  ),
                  o.createElement(
                    oe.a,
                    null,
                    o.createElement(
                      He.b,
                      { color: 'normal', size: 'headline2', style: zr.heading, weight: 'bold' },
                      Ur,
                    ),
                    o.createElement(
                      oe.a,
                      { style: zr.iconContainer },
                      o.createElement(Br, { style: zr.icon }),
                      o.createElement(He.b, null, Wr),
                    ),
                    o.createElement(
                      oe.a,
                      { style: [zr.iconContainer, zr.reducedMarginBottom] },
                      o.createElement(Ke.a, { style: zr.icon }),
                      o.createElement(He.b, null, Hr),
                    ),
                    o.createElement(
                      oe.a,
                      { style: [zr.iconContainer, zr.noMarginTop] },
                      o.createElement(oe.a, { style: zr.icon }),
                      o.createElement(
                        Cr.a,
                        { style: zr.label },
                        o.createElement(Lr, { style: zr.labelIcon }),
                        o.createElement(He.b, { color: 'normal', weight: 'bold' }, Rr),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        qr = r('AJXH'),
        Gr = r('rJoH'),
        $r = r('Y6L+'),
        Yr = r('jS2K'),
        Jr = r('IG4P')
      function Kr(e) {
        var t = (function () {
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
          var r,
            n = B()(e)
          if (t) {
            var a = B()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var Qr = (function (e) {
          S()(r, e)
          var t = Kr(r)
          function r() {
            return E()(this, r), t.apply(this, arguments)
          }
          return (
            O()(r, [
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
                    r = e.shouldDisplayUserActionSheet
                  return o.createElement(
                    oe.a,
                    null,
                    this._renderBanner(),
                    o.createElement(
                      oe.a,
                      { style: [H.a.content, H.a.withheld] },
                      o.createElement(
                        oe.a,
                        { style: H.a.avatarAndButton },
                        this._renderAvatar(),
                        o.createElement(oe.a, { style: H.a.buttonAffordance }),
                        r && t && o.createElement(Ce, { buttonStyle: H.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return o.createElement(ee.a, null, function (e) {
                    var t = e.windowWidth >= Q.a.theme.breakpoints.medium
                    return o.createElement(
                      oe.a,
                      { accessibilityState: { hidden: !0 }, style: H.a.avatar },
                      o.createElement(Z.a, {
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
                  return o.createElement(
                    oe.a,
                    { style: H.a.banner },
                    o.createElement(ce.a, { ratio: Q.a.theme.aspectRatios.profileBanner }),
                  )
                },
              },
              {
                key: '_renderNames',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    r = e.restrictedUser,
                    n = t || r,
                    a = n.name && n.screen_name,
                    i = a ? n.name : '@'.concat(n.screen_name)
                  return o.createElement(
                    oe.a,
                    { style: H.a.names },
                    o.createElement(Tt.a, {
                      name: i,
                      nameSize: 'headline1',
                      screenName: a ? n.screen_name : void 0,
                      withStackedLayout: !0,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(o.Component),
        Xr = r('wytG'),
        Zr = r('VS6U'),
        en = r('muX9'),
        tn = function (e) {
          var t = e.screenName,
            r = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return o.createElement(en.a, { script: [{ type: 'application/ld+json', innerHTML: r }] })
        },
        rn = r('ipry'),
        nn = r('E4zi'),
        an = function (e) {
          var t,
            r,
            n,
            a = e.user,
            i =
              null === (t = a.entities) ||
              void 0 === t ||
              null === (r = t.url) ||
              void 0 === r ||
              null === (n = r.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            s = {
              '@context': 'http://schema.org',
              '@type': 'ProfilePage',
              dateCreated: a.created_at,
              author: Object(nn.a)(a),
            }
          return (
            i && (s.relatedLink = [i.url, i.expanded_url]),
            o.createElement(en.a, { script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(s, null, 2) }] })
          )
        },
        on = r('Qayx'),
        sn = r('G8HL'),
        ln = r('mw9i'),
        cn = r('zfvc'),
        un = r('FIs5'),
        dn = r('Q0VY'),
        pn = r('FiRh'),
        fn = r('0yYu'),
        mn = r('k/OQ'),
        hn = r('Ty5D')
      function bn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function yn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? bn(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : bn(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function gn(e) {
        var t = (function () {
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
          var r,
            n = B()(e)
          if (t) {
            var a = B()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var _n = Y.a.fa98627a,
        vn = Y.a.a2811f96,
        En = Y.a.c6ea308b,
        wn = Y.a.d67658c0,
        On = Y.a.ccc9153f,
        Pn = Y.a.bab1f8b0,
        kn = Y.a.a52b03a5,
        Cn = Y.a.cc3c6989,
        Sn = Y.a.add55c97,
        In = Y.a.d7b8eba9,
        Fn = Y.a.c0098d49,
        xn = Y.a.c4af3561,
        Bn = Y.a.dbcaaab5,
        Tn = Y.a.hf162fb6,
        Nn = Y.a.ad7b2b38,
        jn = Y.a.f19b4073,
        Ln = Y.a.ha62da97,
        Rn = Y.a.ica87fde,
        Mn = Y.a.e79ed125,
        An = Y.a.g8475f82,
        Dn = Y.a.c9a1cb5d,
        Un = Y.a.e7b201dd,
        Hn = Y.a.d09e12c4,
        Wn = Y.a.gbf342a4,
        zn = Y.a.eeab4adf,
        Vn = Y.a.i144ee20,
        qn = Y.a.j58e7b00,
        Gn = Y.a.d834ab9c,
        $n = { section: 'profile_interstitial' },
        Yn = Object(Xr.a)(function () {
          return Promise.all([r.e(0), r.e(106)]).then(r.bind(null, '8KtR'))
        }),
        Jn = Object(Xr.a)(function () {
          return Promise.all([r.e(0), r.e(106)]).then(r.bind(null, 'ivpD'))
        }),
        Kn = Object(Xr.a)(function () {
          return Promise.all([r.e(0), r.e(106)]).then(r.bind(null, 'ylAD'))
        }),
        Qn = 'likes',
        Xn = 'media',
        Zn = 'reactions',
        ea = 'superfollows',
        ta = 'with_replies',
        ra = 36e5,
        na = Object(Er.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        aa = (function (e) {
          S()(r, e)
          var t = gn(r)
          function r(e, n) {
            var a
            return (
              E()(this, r),
              (a = t.call(this, e, n)),
              N()(
                k()(a),
                '_safetyModeViolatorExperienceEnabled',
                a.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              N()(
                k()(a),
                '_safetyModeUserExperienceEnabled',
                a.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              N()(
                k()(a),
                '_shouldEnableProfessionalCategoryLabelViewing',
                a.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              N()(
                k()(a),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                a.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              N()(
                k()(a),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                a.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              N()(k()(a), '_renderContainer', function () {
                var e = a.props,
                  t = e.fetchStatus,
                  r = e.isNotFound,
                  n = e.isRefreshing,
                  i = e.isSuspended,
                  s = e.screenName,
                  l = i || r
                return o.createElement(
                  Jr.a,
                  { isRefreshing: n, onRefresh: a._handlePullToRefresh },
                  o.createElement(
                    oe.a,
                    { style: ia.containerGrow },
                    o.createElement(
                      ln.a,
                      null,
                      o.createElement(hr.a, {
                        accessibilityLabel: On({ screenName: s }),
                        fetchStatus: l ? mr.a.LOADED : t,
                        onRequestRetry: a._handleRequestRetry,
                        render: a._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              N()(k()(a), '_renderHeaderAndContent', function () {
                var e = a.state.showNftAvatarEducation
                return o.createElement(
                  o.Fragment,
                  null,
                  e && o.createElement(Vr, { onEducationSheetDismiss: a._handleOnDismissNftAvatarEducation }),
                  a._renderHeader(),
                  a._renderContent(),
                )
              }),
              N()(k()(a), '_renderContent', function () {
                var e = a.props,
                  t = e.isNotFound,
                  r = e.isSuspended,
                  n = e.isWithheld,
                  o = e.user,
                  i = a.state.showBlockedTweets,
                  s = a._isViewingOwnProfile()
                return r
                  ? a._renderUserProfileSuspended()
                  : t
                  ? a._renderUserNotFound()
                  : n && s
                  ? a._renderLoggedInUserProfileWithheld()
                  : n
                  ? a._renderUserProfileWithheld()
                  : a._shouldShowProfileInterstitial()
                  ? a._renderUserProfileInterstitialed()
                  : o && o.smart_blocked_by && a._safetyModeViolatorExperienceEnabled
                  ? a._renderUserProfileAutoblockedBy()
                  : o && o.blocked_by
                  ? a._renderUserProfileBlockedBy()
                  : o && o.smart_blocking && !i && a._safetyModeUserExperienceEnabled
                  ? a._renderUserProfileSmartBlocking()
                  : o && o.blocking && !i
                  ? a._renderUserProfileBlocking()
                  : a._isProtectedFromViewer()
                  ? a._renderUserProfileProtected()
                  : a._renderUserProfileDefault()
              }),
              N()(k()(a), '_isGraphQL', function () {
                return (
                  !0 ===
                  a.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_graphql_profile_timeline')
                )
              }),
              N()(k()(a), '_isViewingOwnProfile', function () {
                var e = a.context.loggedInUserId,
                  t = a.props.user
                return t && e === t.id_str
              }),
              N()(k()(a), '_shouldShowProfileInterstitial', function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : a.props.userProfileInterstitialType,
                  t = a.props,
                  r = t.displaySensitiveMedia,
                  n = t.user
                if (!n || !e) return !1
                var o = a.state,
                  i = o.showBlockedTweets,
                  s = o.userProfileInterstitialDismissed,
                  l = n.blocking && !i,
                  c = n.blocked_by,
                  u = e === rn.a.SensitiveMedia || e === rn.a.OffensiveProfileContent,
                  d = u && (n.following || r || vr.b)
                return !(a._isViewingOwnProfile() || a._isProtectedFromViewer() || l || c || s || d)
              }),
              N()(k()(a), '_isProtectedFromViewer', function () {
                var e = a.props.user
                return e && e.protected && !a._isViewingOwnProfile() && !e.following
              }),
              N()(k()(a), '_handleRequestRetry', function () {
                a._fetchOneUserIfNeeded(a.props)
              }),
              N()(k()(a), '_handlePullToRefresh', function () {
                var e = a.props.user
                e ? a._fetchOneUser(e.id_str) : a._fetchOneUserIfNeeded(a.props)
              }),
              N()(k()(a), '_handleShowActionedTweets', function () {
                var e = a.props,
                  t = e.history,
                  r = e.user
                r && t.push('/settings/safety_mode/actioned_tweets/'.concat(r.id_str))
              }),
              N()(k()(a), '_handleShowBlockedTweets', function () {
                var e = a.props,
                  t = e.scribeAction,
                  r = e.scribeNamespace,
                  n = e.user
                a.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    a._safetyModeUserExperienceEnabled &&
                    t(yn(yn({}, r), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              N()(k()(a), '_handleOnConfirmProfileInterstitial', function () {
                var e = a.props,
                  t = e.scribeAction,
                  r = e.scribeNamespace
                a.setState({ userProfileInterstitialDismissed: !0 }), t(yn(yn(yn({}, r), $n), {}, { action: 'click' }))
              }),
              N()(k()(a), '_handleOnDismissNftAvatarEducation', function () {
                a.setState({ showNftAvatarEducation: !1 })
              }),
              N()(k()(a), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  r = e.fetchStatus,
                  n = a.props.recordTTFL
                if ((r === mr.a.FAILED && (a._shouldRecordTTFL = !1), a._shouldRecordTTFL && t.length)) {
                  var o = t.some(function (e) {
                    return e.type === dr.b.Tweet
                  })
                  a._shouldRecordTTFL = !1
                  var i = { source: a._isGraphQL() ? 'graphql' : 'rest' }
                  o && n('profile', i)
                }
              }),
              N()(k()(a), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                a.setState({ showFollowButtonRightControl: t })
              }),
              N()(k()(a), '_getSmartBlockEndTimeSentence', function () {
                var e = a.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    r = parseInt(e.smart_blocking_expiration, 10),
                    n = r > t ? r - t : 0
                  if (n <= 72e5) return Bn
                  var o = Math.floor(n / ra),
                    i = Math.floor(o / 24),
                    s = o % 24
                  return 0 === i
                    ? jn({ hourCount: s })
                    : 0 === s
                    ? Nn({ dayCount: i })
                    : Tn({ dayCount: i, hourCount: s })
                }
                return ''
              }),
              N()(k()(a), '_getProfessionalCategory', function () {
                var e,
                  t,
                  r = a.props.user
                return null == r ||
                  null === (e = r.professional) ||
                  void 0 === e ||
                  null === (t = e.category) ||
                  void 0 === t
                  ? void 0
                  : t[0]
              }),
              N()(k()(a), '_shouldDisplayProfessionalCategoryLabel', function () {
                var e = a._isViewingOwnProfile()
                if (a._shouldEnableProfessionalCategoryLabelHoldback && !e) return !1
                if (
                  (!e && a._shouldEnableProfessionalCategoryLabelViewing) ||
                  (e && a._shouldEnableProfessionalCategoryLabelDisplaySwitch)
                ) {
                  var t,
                    r = a._getProfessionalCategory()
                  return !!r && (null === (t = null == r ? void 0 : r.display) || void 0 === t || t)
                }
              }),
              N()(k()(a), '_getProfessionalCategoryNameIfDisplayable', function () {
                var e
                return a._shouldDisplayProfessionalCategoryLabel()
                  ? null === (e = a._getProfessionalCategory()) || void 0 === e
                    ? void 0
                    : e.name
                  : void 0
              }),
              (a._shouldRecordTTFL = !0),
              (a._shouldRecordTTFMC = !0),
              (a.state = {
                userProfileInterstitialDismissed: !1,
                showBlockedTweets: !1,
                showFollowButtonRightControl: !1,
                showNftAvatarEducation: !1,
              }),
              a
            )
          }
          return (
            O()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.createLocalApiErrorHandler,
                    n = t.fetchSettingsIfNeeded,
                    a = t.scribeAction,
                    o = t.scribeNamespace
                  this._fetchOneUserIfNeeded(this.props).then(function () {
                    e._isUserAutoblocked() &&
                      a(yn(yn({}, o), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' })),
                      e._isUserAutoblocking() &&
                        a(
                          yn(
                            yn({}, o),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && a(yn(yn({}, o), L.c())),
                    n()
                      .catch(r())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && a(yn(yn(yn({}, o), $n), {}, { action: 'impression' }))
                      })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.fetchStatus,
                    n = t.recordTTFMC
                  if (e.fetchStatus !== r && r === mr.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (this._shouldRecordTTFMC && e.fetchStatus !== r && r === mr.a.LOADED) {
                    if (this._isValidProfile())
                      n('profile', { source: this._isGraphQL() ? 'graphql' : 'rest' }), (this._shouldRecordTTFMC = !1)
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
                    r = t.screenName,
                    n = t.scribeAction,
                    a = t.scribeNamespace,
                    o = t.userProfileInterstitialType
                  e.screenName !== r
                    ? (this._fetchOneUserIfNeeded(e), this.setState({ userProfileInterstitialDismissed: !1 }))
                    : !o &&
                      this._shouldShowProfileInterstitial(e.userProfileInterstitialType) &&
                      n(yn(yn(yn({}, a), $n), {}, { action: 'impression' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    r = t.fetchStatus,
                    n = t.history,
                    a = t.isIntentRoute,
                    i = t.isNotFound,
                    s = t.isSuspended,
                    l = t.isWithheld,
                    c = t.location,
                    u = t.screenName,
                    d = t.user,
                    p = t.userLanguage,
                    f = this._isViewingOwnProfile(),
                    m = s || i || (l && !f),
                    h = d ? En({ screenName: d.screen_name, fullName: d.name }) : void 0,
                    b = f ? '' : '@'.concat((d && d.screen_name) || u || '', ' '),
                    y = m ? null : o.createElement(br.a, { getLocationState: na(b), history: n }),
                    g =
                      d && !m
                        ? o.createElement(Tt.a, {
                            isProtected: d.protected,
                            isVerified: d.verified,
                            name: d.name,
                            screenName: d.screen_name,
                            withScreenName: !1,
                          })
                        : _n,
                    _ = d && !m && r === mr.a.LOADED ? this._renderSubtitle(d) : void 0,
                    v = d && 'twitter://user?screen_name='.concat(d.screen_name),
                    E = d && 'https://twitter.com/'.concat(d.screen_name || ''),
                    w = d && wn({ fullName: d.name, screenName: d.screen_name })
                  return o.createElement(Zr.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: b },
                    documentTitle: h,
                    history: n,
                    primaryContent: o.createElement(
                      pr.a,
                      { fab: y },
                      o.createElement(Gr.a, {
                        canonical: E,
                        description: null == d ? void 0 : d.description,
                        image: null == d ? void 0 : d.profile_image_url_https,
                        title: w,
                        type: 'profile',
                      }),
                      vr.b && d
                        ? o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(an, { user: d }),
                            o.createElement(gr.a, { description: null == d ? void 0 : d.description }),
                          )
                        : null,
                      o.createElement(M.a, { deepLink: v }),
                      o.createElement(A.a, {
                        featureSwitches: this.context.featureSwitches,
                        loggedInUserId: e,
                        pageType: 'profile',
                        userLanguage: p,
                      }),
                      E ? o.createElement(R.a, { canonical: E }) : null,
                      o.createElement(hr.a, {
                        accessibilityLabel: On({ screenName: u }),
                        fetchStatus: d || m ? mr.a.LOADED : r,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      a
                        ? o.createElement(_r.a, { history: n, location: c, userId: null == d ? void 0 : d.id_str })
                        : null,
                    ),
                    rightControl: this._renderRightControl(),
                    sidebarContent: this._renderSidebarContent(),
                    subtitle: _,
                    title: g,
                  })
                },
              },
              {
                key: '_renderRightControl',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    r = e.user,
                    n = this.state.showFollowButtonRightControl
                  return r && !this._isViewingOwnProfile()
                    ? o.createElement(
                        cn.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        o.createElement(me.a, { promotedContent: t, userId: r.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    r = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(r, '/').concat(Qn)) > -1
                    ? o.createElement(on.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(r, '/').concat(Zn)) > -1
                    ? o.createElement(on.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(r, '/').concat(Xn)) > -1
                    ? o.createElement(on.a, { count: e.media_count, type: 'media' })
                    : o.createElement(on.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? o.createElement(Yr.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(rr.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : o.createElement(D.a, null)
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    r = t.history,
                    n = t.isActiveCreator,
                    a = t.isNotFound,
                    o = t.isSuspended,
                    i = t.isWithheld,
                    s = t.profileHeaderRenderer,
                    l = t.promotedContent,
                    c = t.restrictedProfileHeaderRenderer,
                    u = t.screenName,
                    d = t.superFollowersCount,
                    p = t.user,
                    f = this._shouldShowProfileInterstitial(),
                    m = !this._isViewingOwnProfile() && (o || a || f),
                    h = this._getProfessionalCategoryNameIfDisplayable()
                  return m
                    ? c({
                        shouldDisplayUserActionSheet: !o && !a,
                        fullUser: p,
                        restrictedUser: { name: (p || {}).name, screen_name: u || '' },
                      })
                    : p
                    ? s({
                        history: r,
                        loggedInUserId: e,
                        isActiveCreator: n,
                        isWithheld: i,
                        onFollowButtonOffscreen: this._handleFollowButtonOffscreen,
                        promotedContent: l,
                        superFollowersCount: d,
                        user: p,
                        professionalCategoryName: h,
                      })
                    : null
                },
              },
              {
                key: '_renderEmptyState',
                value: function (e) {
                  var t = e.buttonText,
                    r = e.buttonType,
                    n = e.header,
                    a = e.message,
                    i = e.onButtonPress,
                    s = e.onSecondaryButtonPress,
                    l = e.secondaryButtonText,
                    c = e.secondaryButtonType,
                    u = this.props,
                    d = u.isSuspended,
                    p = u.screenName
                  return o.createElement(
                    o.Fragment,
                    null,
                    vr.b && d && p ? o.createElement(tn, { screenName: p }) : vr.b ? o.createElement(qr.a, null) : null,
                    o.createElement(un.a, {
                      buttonText: t,
                      buttonType: r,
                      header: n,
                      message: a,
                      onButtonPress: i,
                      onSecondaryButtonPress: s,
                      secondaryButtonText: l,
                      secondaryButtonType: c,
                      style: sa.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(yr.a)(e),
                    r = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: r,
                    message: n,
                    buttonText: Gn,
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
                    r = Mn({ screenName: t }),
                    n = o.createElement(
                      Y.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      o.createElement(He.b, { link: 'https://support.twitter.com/articles/117063' }, Y.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: r,
                    message: n,
                    buttonText: zn,
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
                    r = e.screen_name,
                    n = Ln({ screenName: r }),
                    a = o.createElement(He.b, { color: 'gray700', weight: 'bold' }),
                    i = o.createElement(
                      oe.a,
                      null,
                      o.createElement(
                        He.b,
                        { color: 'gray700', style: { paddingBottom: Q.a.theme.spaces.space20 } },
                        o.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          o.cloneElement(a, null, Y.a.g6645d94({ screenName: r })),
                        ),
                      ),
                      o.createElement(
                        He.b,
                        { color: 'gray700', style: { paddingBottom: Q.a.theme.spaces.space8 } },
                        o.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          o.cloneElement(a, null, Y.a.g08eceae({ screenName: r })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: i,
                    buttonText: Vn,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: qn,
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
                    r = o.createElement(
                      Y.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      o.createElement(He.b, { link: 'https://support.twitter.com/articles/20172060' }, Y.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Rn, message: r })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    r = o.createElement(He.b, { style: { paddingBottom: Q.a.theme.spaces.space20 } }),
                    n = o.createElement(He.b, { weight: 'bold' }),
                    a = o.createElement(He.b, { style: { paddingBottom: Q.a.theme.spaces.space4 }, weight: 'bold' }),
                    i = o.createElement(
                      oe.a,
                      null,
                      o.createElement(
                        He.b,
                        { style: { paddingBottom: Q.a.theme.spaces.space20 } },
                        o.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'a496f1c8' },
                          o.cloneElement(n, null, Y.a.e8bc24ae({ screenName: t })),
                        ),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'd0271e51' },
                        o.cloneElement(r, null, Y.a.ff050532),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        o.createElement(
                          He.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: Q.a.theme.spaces.space20 },
                          },
                          Y.a.b48bd8bf,
                        ),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'h9bd2805' },
                        o.cloneElement(r, null, Y.a.ia457a19),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        o.cloneElement(a, null, Y.a.f5531a44),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        o.cloneElement(r, null, Y.a.h173a610),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        o.cloneElement(a, null, Y.a.ha985c95),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        o.cloneElement(r, null, Y.a.d5d82dd3),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        o.cloneElement(a, null, Y.a.i4b9b3d0),
                      ),
                      o.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        o.cloneElement(r, null, Y.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: xn, message: i })
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
                        ? o.createElement(wt.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                        : o.createElement(
                            Y.a.I18NFormatMessage,
                            { $i18n: 'f6fa2033' },
                            o.createElement(He.b, { link: 'https://support.twitter.com/articles/18311' }, Y.a.f3b1bdc1),
                          )),
                    this._renderEmptyState({ header: An, message: e })
                  )
                },
              },
              {
                key: '_renderUserProfileWithheld',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.description,
                    r = e.entities,
                    n = e.id_str
                  if (!t) return null
                  var a = dn.a.descriptionTextParts(t, r),
                    i = o.createElement(
                      He.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      a.map(function (e, t) {
                        return o.createElement(pn.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: Wn, message: i })
                },
              },
              {
                key: '_renderLoggedInUserProfileWithheld',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.description,
                    r = e.entities,
                    n = e.id_str
                  if (!t) return null
                  var a = dn.a.descriptionTextParts(t, r)
                  return o.createElement(
                    oe.a,
                    null,
                    o.createElement(
                      oe.a,
                      { style: ia.withheldMessageRoot },
                      o.createElement(
                        He.b,
                        { align: 'center', size: 'title4', style: ia.withheldMessageHeader, weight: 'bold' },
                        Wn,
                      ),
                      o.createElement(
                        He.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        a.map(function (e, t) {
                          return o.createElement(pn.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    o.createElement(fn.a, null),
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
                    r = o.createElement(
                      Y.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      o.createElement(He.b, { link: 'https://support.twitter.com/articles/14016' }, Y.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: Hn, message: r })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Dn, message: Un })
                },
              },
              {
                key: '_renderUserProfileDefault',
                value: function () {
                  var e = this.props,
                    t = e.history.location,
                    r = e.isActiveCreator,
                    n = e.user
                  if (!n) return null
                  var i = n.screen_name,
                    s = this.state.showBlockedTweets,
                    l = t.query,
                    c = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    u = (this._isViewingOwnProfile() && r) || n.super_following,
                    d = function (e) {
                      var r = c ? Fn : In
                      return [
                        {
                          isActive: function () {
                            return (
                              t.pathname.toLowerCase() === '/'.concat(i).toLowerCase() ||
                              t.pathname.toLowerCase() === '/'.concat(i, '/').toLowerCase() ||
                              t.pathname.indexOf('/intent/follow') > -1 ||
                              t.pathname.indexOf('/intent/user') > -1
                            )
                          },
                          to: { pathname: '/'.concat(i), query: l },
                          key: Pn,
                          label: Pn,
                        },
                        { to: { pathname: '/'.concat(i, '/').concat(ta), query: l }, key: kn, label: kn },
                        u
                          ? {
                              to: { pathname: '/'.concat(i, '/').concat(ea), query: l },
                              key: Cn,
                              label: Cn,
                              color: 'plum500',
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(i, '/').concat(Xn), query: l }, key: Sn, label: Sn, onClick: e() },
                        {
                          to: { pathname: '/'.concat(i, '/').concat(c ? Zn : Qn), query: l },
                          key: r,
                          label: r,
                          onClick: e(),
                        },
                      ]
                    },
                    p = { displayBlocked: s, fullName: n.name, screenName: n.screen_name, userId: n.id_str },
                    f = { isActiveCreator: r, isSuperFollowing: n.super_following }
                  return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(nr.a, null, function (e) {
                      return o.createElement(mn.a, { accessibilityLabel: vn, links: d(e) })
                    }),
                    o.createElement(
                      hn.e,
                      null,
                      o.createElement(hn.c, { exact: !0, path: '/intent/follow' }, o.createElement(Yn, a()({}, p, f))),
                      o.createElement(hn.c, { exact: !0, path: '/intent/user' }, o.createElement(Yn, a()({}, p, f))),
                      o.createElement(
                        hn.c,
                        { exact: !0, path: '/'.concat($r.I) },
                        o.createElement(Yn, a()({}, p, f, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      o.createElement(
                        hn.c,
                        { exact: !0, path: '/'.concat($r.I, '/').concat(ta) },
                        o.createElement(Yn, a()({}, p, f, { mode: 'with_replies' })),
                      ),
                      o.createElement(
                        hn.c,
                        { exact: !0, path: '/'.concat($r.I, '/').concat(ea) },
                        o.createElement(Yn, a()({}, p, f, { mode: 'superfollows' })),
                      ),
                      o.createElement(
                        hn.c,
                        { exact: !0, path: '/'.concat($r.I, '/').concat(Xn) },
                        o.createElement(Kn, p),
                      ),
                      o.createElement(
                        hn.c,
                        { exact: !0, path: '/'.concat($r.I, '/(').concat(Qn, '|').concat(Zn, ')') },
                        o.createElement(Jn, p),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_fetchOneUserIfNeeded',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    r = e.fetchOneByScreenNameWithExtraFieldsIfNeeded,
                    n = e.screenName
                  return n ? r(n).catch(t(fr.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    r = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(r(fr.a))
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
                    r = e.isSuspended,
                    n = e.isWithheld,
                    a = e.user
                  return (
                    a &&
                    !a.blocking &&
                    !a.smart_blocking &&
                    !a.smart_blocked_by &&
                    !a.blocked_by &&
                    !this._isViewingOwnProfile() &&
                    !this._isProtectedFromViewer() &&
                    !r &&
                    !t &&
                    !n &&
                    !this._shouldShowProfileInterstitial()
                  )
                },
              },
            ]),
            r
          )
        })(o.Component)
      N()(aa, 'contextType', U.a),
        N()(aa, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return o.createElement(ur, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return o.createElement(Qr, e)
          },
          recordTTFL: j.c,
          recordTTFMC: j.d,
        })
      var oa = Object(sn.a)(aa),
        ia = Q.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        sa = Q.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        la = function (e) {
          return o.createElement(_.a, { userId: e.user && e.user.id_str }, function (t) {
            var r = t.scribeNamespace
            return o.createElement(oa, a()({}, e, { scribeNamespace: r }))
          })
        }
      t.default = g(la)
    },
  },
])
//# sourceMappingURL=WIPED
