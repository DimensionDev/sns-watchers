;(window.webpackJsonp = window.webpackJsonp || []).push([
  [109],
  {
    'll/Q': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserProfileScreenContainer', function () {
          return da
        })
      var n = r('97Jx'),
        a = r.n(n),
        o = r('ERkP'),
        i = r.n(o),
        s = (r('WNMA'), r('KqXw'), r('jQ3i'), r('x4t0'), r('P1r1')),
        l = r('hqKg'),
        c = r('zh9S'),
        u = r('0KEI'),
        d = r('oEGd'),
        p = r('RqPI'),
        f = r('G6rE'),
        m = function (e, t) {
          var r = t.location,
            n = t.match
          return n && n.params && n.params.screenName
            ? n.params.screenName
            : r && r.query && r.query.screen_name && 'string' == typeof r.query.screen_name
            ? r.query.screen_name
            : ''
        },
        h = function (e, t) {
          return f.e.selectByScreenName(e, m(0, t))
        },
        b = Object(f.g)([f.a]),
        y = Object(l.createSelector)(
          s.l,
          function (e, t) {
            return b(e, m(0, t))
          },
          p.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return f.e.selectIsUserNotFound(e, m(0, t))
          },
          function (e, t) {
            var r = h(e, t)
            return !!r && f.e.selectIsLoading(e, r.id_str)
          },
          function (e, t) {
            return f.e.selectIsUserSuspended(e, m(0, t))
          },
          function (e, t) {
            return f.e.selectUserSuspendMessage(e, m(0, t))
          },
          function (e, t) {
            return f.e.selectIsUserWithheld(e, m(0, t))
          },
          function (e, t) {
            var r = t.location,
              n = ((r && r.state) || {}).promotedTweetState,
              a = h(e, t)
            return n || (a && a.promoted_content)
          },
          m,
          p.x,
          h,
          function (e, t) {
            var r = h(e, t)
            return r && r.profile_interstitial_type ? r.profile_interstitial_type : null
          },
          p.o,
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
        g = {
          createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_SCREEN'),
          fetchOneUser: f.e.fetchOne,
          fetchOneByScreenNameWithExtraFieldsIfNeeded: f.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
            f.a,
            f.b,
            f.c,
            f.d,
          ]),
          fetchSettingsIfNeeded: s.f,
          scribeAction: c.c,
        },
        _ = Object(d.g)(y, g),
        v = r('txMZ'),
        E = (r('OZaJ'), r('+KXO'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('VrFO')),
        w = r.n(E),
        O = r('Y9Ll'),
        P = r.n(O),
        k = r('1Pcy'),
        C = r.n(k),
        S = r('5Yy7'),
        I = r.n(S),
        F = r('N+ot'),
        x = r.n(F),
        T = r('AuHH'),
        B = r.n(T),
        N = r('KEM+'),
        j = r.n(N),
        L =
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
        R = r('mC9n'),
        M = r('s4rk'),
        A = r('zI2C'),
        D = r('6ZtA'),
        U = r('es0u'),
        H = (r('hBvt'), r('v6aA')),
        W = r('I/ms'),
        z = r('rxPX'),
        V = r('M0jS'),
        q = function (e, t) {
          return Object(V.c)(e, t.user.id_str)
        },
        J = function (e, t) {
          var r = V.b.select(e, t.user.id_str)
          return null != r && r.refresh_delay_secs ? 1e3 * r.refresh_delay_secs : 1e3 * V.a
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
        G = r('3XMw'),
        Y = r.n(G),
        K = r('B5iK')
      var X = r('TIdA'),
        Q = r('rHpw'),
        Z = r('1I0O'),
        ee = r('jhWN'),
        te = r('cHvH'),
        re = X.a.createLayoutCache(),
        ne = $(function (e) {
          var t,
            r,
            n,
            o,
            s,
            l = e.analytics,
            c = e.createLocalApiErrorHandler,
            u = e.fetchUsersPresence,
            d = e.isOwnProfile,
            p = e.isWithheld,
            f = e.user,
            m = e.userPresencePollingInterval,
            h = e.userSpace,
            b = i.a.useContext(H.a),
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
            P = i.a.useCallback(
              function () {
                var e
                E && (null === (e = u([f.id_str])) || void 0 === e || e.catch(c({})))
              },
              [f.id_str, E, u, c],
            )
          i.a.useEffect(
            function () {
              return P()
            },
            [P],
          ),
            i.a.useEffect(function () {
              w && l.scribe({ element: 'nft_avatar', action: 'impression' })
            }, []),
            (t = function () {
              return P()
            }),
            (r = E ? m : void 0),
            (n = i.a.useRef()),
            i.a.useEffect(
              function () {
                n.current = t
              },
              [t],
            ),
            i.a.useEffect(
              function () {
                if (n.current && r) {
                  var e = new K.b(r).interval(n.current)
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
              ? ((s = h.accessibilityLabel), (o = h.link))
              : _ ||
                (w
                  ? ((s = ae.opensNFTDetails), (o = { pathname: '/'.concat(f.screen_name, '/nft') }))
                  : ((s = ae.opensProfilePhoto), (o = { pathname: '/'.concat(f.screen_name, '/photo') })))
          var k = function (e) {
              l.scribe({ element: w ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            C = function (e) {
              var t = e.windowWidth >= Q.a.theme.breakpoints.medium,
                r = {
                  accessibilityLabel: s,
                  imageLayoutCache: re,
                  link: o,
                  onClick: k,
                  size: 'custom',
                  uri: v,
                  screenName: f.screen_name,
                }
              return h && O
                ? i.a.createElement(Z.a, a()({}, r, { presenceRingType: h.presenceRingType, style: W.a.avatar }))
                : i.a.createElement(
                    ee.a,
                    a()({}, r, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: W.a.avatar,
                    }),
                  )
            }
          return i.a.createElement(te.a, null, C)
        }),
        ae = { opensProfilePhoto: Y.a.f30795df, opensNFTDetails: Y.a.a270100c },
        oe = r('RCZO'),
        ie = r('MWbm'),
        se = r('n4Eu'),
        le = r('cm6r'),
        ce = r('A91F'),
        ue = r('9Xij'),
        de = X.a.createLayoutCache(),
        pe = function (e) {
          var t = e.isOwnProfile,
            r = e.isWithheld,
            n = e.user,
            a = !t && r,
            o = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            s = o && se.a.get(o),
            l = s ? Object(oe.g)(s) : Q.a.theme.colors.gray200
          return !a && n.profile_banner_url
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
        fe = r('3nOA'),
        me = r('I57f'),
        he = r('uIZp'),
        be = r('SOvA'),
        ye = r('vYiB'),
        ge = r('Y49K'),
        _e = r('Irs7'),
        ve = r('/yvb'),
        Ee = r('ACHU'),
        we = r('rsoE'),
        Oe = r('vMjK')
      function Pe(e) {
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
          return x()(this, r)
        }
      }
      var ke = Y.a.h63a5c3b,
        Ce = i.a.createElement(Ee.a, null),
        Se = (function (e) {
          I()(r, e)
          var t = Pe(r)
          function r() {
            var e
            w()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              j()(C()(e), '_renderUserMenu', function (t) {
                var r = e.props,
                  n = r.promotedContent,
                  a = r.user
                return i.a.createElement(Oe.b, { onClose: t, promotedContent: n, user: a, view: 'profile' })
              }),
              e
            )
          }
          return (
            P()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.buttonStyle
                  return i.a.createElement(ve.a, {
                    accessibilityLabel: ke,
                    hoverLabel: { label: ke },
                    icon: Ce,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: we.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            r
          )
        })(i.a.PureComponent),
        Ie = r('pHkl'),
        Fe = Y.a.g7088266,
        xe = Y.a.gd7acb84,
        Te = Y.a.b7636014,
        Be = i.a.createElement(be.a, null),
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
        je = function (e) {
          var t = e.history,
            r = e.isWithheld,
            n = e.loggedInUserId,
            a = e.onFollowButtonOffscreen,
            o = e.promotedContent,
            s = e.user,
            l = Object(_e.b)(),
            c = s.id_str === n,
            u = s.blocked_by,
            d = s.blocking,
            p = r && !c,
            f = s.can_dm && n && !d && !u && !p,
            m = n && s && !c && !p,
            h = s.following && n && !d && !u && !r,
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
            m && i.a.createElement(Se, { buttonStyle: Ne.button, promotedContent: o, user: s }),
            !c &&
              f &&
              i.a.createElement(ve.a, {
                accessibilityLabel: Te,
                hoverLabel: { label: Te },
                icon: Be,
                onPress: function () {
                  if (n) {
                    var e = Object(fe.a)(s.id_str, n)
                    l.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Ie.g.ONE_TO_ONE,
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
              i.a.createElement(me.a, {
                allowPromptForPush: !0,
                isFollowing: s.notifications,
                style: Ne.button,
                userId: s.id_str,
              }),
            !c &&
              !u &&
              !p &&
              i.a.createElement(
                ye.a,
                { onOffscreenChange: a },
                i.a.createElement(he.a, { promotedContent: o, style: Ne.lastButton, userId: s.id_str }),
              ),
          )
        },
        Le = r('tOzk'),
        Re = r('YeIG'),
        Me = r('Je1/'),
        Ae = r('uLiA'),
        De = r('EJJl'),
        Ue = r('WWyu'),
        He = r('LhSm'),
        We = r('t62R'),
        ze = r('GWvE'),
        Ve = r('Lsrn'),
        qe = r('k/Ka')
      function Je(e, t) {
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
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Je(Object(r), !0).forEach(function (t) {
                j()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Je(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Ge = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(qe.a)(
          'svg',
          $e(
            $e({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ve.a.root, e.style], viewBox: '0 0 24 24' },
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
      var Ye = Ge,
        Ke = r('KrGU'),
        Xe = r('I/9y'),
        Qe = r('YUdS'),
        Ze = r('EjKN')
      function et(e, t) {
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
      function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? et(Object(r), !0).forEach(function (t) {
                j()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : et(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var rt = Y.a.a1ea2f12,
        nt = Y.a.g8191e77,
        at = function (e) {
          var t = e.day,
            r = e.month
          if (t && r) {
            var n = new Date()
            return r === n.getMonth() + 1 && t === n.getDate()
          }
        },
        ot = Q.a.create(function (e) {
          return {
            description: { display: 'block', marginBottom: e.spaces.space12 },
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
            noCursor: { cursor: 'inherit' },
          }
        }),
        it = function (e) {
          var t,
            r,
            n,
            a = e.isOwnProfile,
            o = e.professionalCategoryName,
            s = e.user,
            l = i.a.useRef(),
            c = Object(_e.b)(),
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
          return i.a.createElement(
            i.a.Fragment,
            null,
            s.description
              ? i.a.createElement(
                  ie.a,
                  { style: ot.description },
                  i.a.createElement(De.a, {
                    description: s.description,
                    disableTranslation: !s.is_profile_translatable,
                    entities: s.entities,
                    testID: Ae.a.userDescription,
                    userId: s.id_str,
                    withheldDescription: s.withheld_description,
                    withheldEntities: s.withheld_entities,
                  }),
                )
              : null,
            i.a.createElement(
              ie.a,
              { style: ot.details },
              i.a.createElement(
                We.b,
                { style: ot.detailsText, testID: Ae.a.profileHeaderItems },
                o
                  ? i.a.createElement(
                      Me.a,
                      {
                        Icon: Ye,
                        onPress: function () {
                          c.scribe(tt(tt({}, u), R.b()))
                        },
                        style: ot.noCursor,
                        testID: Ae.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      i.a.createElement(We.b, null, o),
                    )
                  : null,
                s.location && !Object(ze.a)(s.location)
                  ? i.a.createElement(
                      Me.a,
                      { Icon: Ke.a, testID: Ae.a.userLocation },
                      i.a.createElement(We.b, null, s.location),
                    )
                  : null,
                d && d.url
                  ? i.a.createElement(
                      Me.a,
                      { Icon: Xe.a, link: { pathname: d.url, external: !0 }, testID: Ae.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !p ||
                  Object(Re.a)(p) ||
                  (p.visibility &&
                    'self' === p.visibility.toLowerCase() &&
                    p.year_visibility &&
                    'self' === p.year_visibility.toLowerCase())
                  ? null
                  : at(p)
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        Me.a,
                        {
                          Icon: Qe.a,
                          onPress: function () {
                            l.current && l.current.launch()
                          },
                        },
                        a ? rt : nt,
                      ),
                      i.a.createElement(Le.a, {
                        setRef: function (e) {
                          l.current = e
                        },
                      }),
                    )
                  : i.a.createElement(
                      Me.a,
                      { Icon: Ze.a, testID: Ae.a.userBirthdate },
                      i.a.createElement(Ue.a, { birthdate: p, withBornPrefixText: !0 }),
                    ),
                i.a.createElement(He.a, { joinDate: s.created_at }),
              ),
            ),
          )
        },
        st = r('mN6z'),
        lt = r('W27K'),
        ct = r('ddV6'),
        ut = r.n(ct),
        dt = r('1YZw'),
        pt = Object(z.a)().propsFromActions(function () {
          return {
            addToast: dt.b,
            createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: f.e.unmute,
          }
        }),
        ft = r('8Usl'),
        mt = r('eb3s'),
        ht = r('P2xQ'),
        bt = Y.a.cef4e8cf,
        yt = Y.a.ec294e62,
        gt = Y.a.df422dfe,
        _t = Q.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        vt = pt(function (e) {
          var t = e.addToast,
            r = e.createLocalApiErrorHandler,
            n = e.unmute,
            a = e.user,
            o = i.a.useState(!1),
            s = ut()(o, 2),
            l = s[0],
            c = s[1],
            u = a.screen_name
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              We.b,
              { color: 'gray700', style: _t.mute },
              gt,
              ' ',
              i.a.createElement(
                We.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: _t.unmuteButton,
                  testID: ft.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                ht.g,
              ),
            ),
            l
              ? i.a.createElement(mt.a, {
                  confirmButtonLabel: ht.g,
                  headline: bt({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(a.id_str).then(function () {
                        return t({ text: Object(ht.d)(a.screen_name) })
                      }, r({ showToast: !0 }))
                  },
                  text: yt,
                })
              : null,
          )
        }),
        Et = r('RgK2'),
        wt = r.n(Et),
        Ot = r('rcen'),
        Pt = 'UserName',
        kt = r('X04g'),
        Ct = r('A7Fw'),
        St = Y.a.e839db39,
        It = Y.a.b74bd6c6,
        Ft = Y.a.f15bfdb3,
        xt = Y.a.i859a9d3,
        Tt = Q.a.create(function (e) {
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
            n = Object(_e.b)()
          i.a.useEffect(
            function () {
              n.scribe({ component: 'blue_badge_education_context', action: 'show' })
            },
            [n],
          )
          var a = i.a.useCallback(
            function () {
              n.scribe({ component: 'blue_badge_education_context', element: 'support_url', action: 'click' })
            },
            [n],
          )
          return i.a.createElement(
            ie.a,
            { style: Tt.content },
            i.a.createElement(Ct.a, { style: Tt.icon }),
            i.a.createElement(We.b, { size: 'title4', style: Tt.text, weight: 'bold' }, Ft),
            i.a.createElement(
              We.b,
              { color: 'gray700', style: Tt.text },
              It,
              ' ',
              i.a.createElement(
                We.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: a },
                xt,
              ),
            ),
            'sheet' === r
              ? i.a.createElement(ve.a, { onClick: t, style: Tt.button, type: 'primaryOutlined' }, St)
              : null,
          )
        },
        Nt = r('jV+4'),
        jt = r('ir4X')
      function Lt(e, t) {
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
      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Lt(Object(r), !0).forEach(function (t) {
                j()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Lt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Mt = function (e) {
          var t,
            r = e.isOwnProfile,
            n = e.isWithheld,
            o = e.namespace,
            s = e.user,
            l = Object(_e.b)(),
            c = i.a.useContext(H.a).featureSwitches,
            u = n ? wt.a : { isProtected: !!s.protected, isVerified: !!s.verified, translatorType: s.translator_type },
            d = s.name && s.screen_name && !(n && !r),
            p = d ? s.name : '@'.concat(s.screen_name),
            f = i.a.useCallback(function (e, t) {
              return i.a.createElement(Bt, { dismiss: e, type: t })
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
                  ? i.a.createElement(Ot.a, {
                      entities: s.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: s.id_str, name: s.screen_name, item_type: kt.a.ItemType.USER }] }
                        l.scribe(Rt(Rt({}, o), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: s.highlightedLabel.longDescription.text,
                    })
                  : (null === (_ = s.highlightedLabel) || void 0 === _ ? void 0 : _.description) || null
            b = h ? Rt(Rt({}, s.highlightedLabel), {}, { description: v }) : null
          }
          return i.a.createElement(
            ie.a,
            { style: W.a.names, testID: Pt },
            i.a.createElement(
              Nt.a,
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
            b ? i.a.createElement(jt.a, { isIconLarge: !0, label: b }) : null,
          )
        },
        At = (r('uFXj'), r('W55q')),
        Dt = r('YeSc'),
        Ut = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Ht = Object(z.a)()
          .propsFromState(function () {
            return { newsletter: Dt.f }
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
                At.c.Subscribed,
              profileUrl: null == n ? void 0 : n.data.revue_account.profile_info.profile_url,
              revueAccountId: null == n ? void 0 : n.config.revue_account_id,
              showNewsletterSubscription: a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_PROFILE_HEADER',
              ),
              fetchUserBizProfileIfNeeded: Dt.c,
            }
          })
          .withAnalytics(Ut),
        Wt = Object(z.a)()
          .propsFromState(function () {
            return { newsletter: Dt.f }
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
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        zt = r('vbJ7'),
        Vt = Y.a.d58baa7e,
        qt = function (e) {
          var t = e.description,
            r = e.isMobileLayout,
            n = e.originalImage,
            a = e.subscriberCount,
            o = e.title,
            s = e.withThumbnail,
            l = parseInt(a, 10) || 0,
            c = Vt(l),
            u = r ? 'subtext2' : 'body'
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              ie.a,
              { style: Jt.contentContainer },
              s && n
                ? i.a.createElement(
                    ie.a,
                    { style: [Jt.newsletterImageContainer, r ? Jt.newsletterImageContainerMobile : void 0] },
                    i.a.createElement(
                      ue.a,
                      { ratio: 1 },
                      i.a.createElement(X.a, { accessibilityLabel: t || '', aspectMode: ce.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              i.a.createElement(
                ie.a,
                { style: [Jt.newsletterInfoContainer, r ? Jt.mobileNewsletterInfoContainer : void 0] },
                i.a.createElement(
                  We.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: r ? Jt.newsletterFieldMobile : Jt.newsletterField,
                    weight: 'bold',
                  },
                  o,
                ),
                i.a.createElement(
                  We.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [Jt.newsletterDescription, r ? Jt.newsletterFieldMobile : Jt.newsletterField],
                  },
                  t,
                ),
                a
                  ? i.a.createElement(
                      We.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: r ? Jt.newsletterFieldMobile : Jt.newsletterField,
                      },
                      i.a.createElement(Y.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: l }),
                    )
                  : null,
              ),
            ),
          )
        }
      qt.defaultProps = { withThumbnail: !0 }
      var Jt = Q.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: zt.a.hexToCss(Q.a.theme.colors.borderColor, 0.7),
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
        $t = Wt(qt),
        Gt = r('Rp9C'),
        Yt = r('I4+6'),
        Kt = Y.a.d834aec4,
        Xt = Y.a.ab0deccf,
        Qt = Y.a.caeab0f7,
        Zt = Q.a.create(function (e) {
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
        er = Ht(function (e) {
          var t = i.a.useContext(H.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
            r = e.analytics,
            n = e.createLocalApiErrorHandler,
            a = e.fetchUserBizProfileIfNeeded,
            o = e.isSubscribed,
            s = e.profileUrl,
            l = e.revueAccountId,
            c = e.screenName,
            u = e.showNewsletterSubscription,
            d = e.user,
            p = e.userId,
            f = t && u,
            m = i.a.useCallback(
              function (e) {
                if (f) {
                  var t = Gt.a.getUserItem(d),
                    n = t.is_user_follows_viewer,
                    a = t.is_viewer_follows_user,
                    i = [{ id: l, is_viewer_follows_user: a, is_user_follows_viewer: n }]
                  r.scribe({ action: e, element: o ? 'start_reading_btn' : 'subscribe_btn', data: { items: i } })
                }
              },
              [r, o, l, f, d],
            )
          i.a.useEffect(
            function () {
              t && a(p).catch(n())
            },
            [n, a, t, p],
          ),
            i.a.useEffect(
              function () {
                m('impression')
              },
              [f],
            )
          var h = function (e) {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                ie.a,
                { style: Zt.moduleLabel },
                i.a.createElement(We.b, { size: 'body', weight: 'bold' }, Kt),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  r = o ? s : t,
                  n = o ? Qt : Xt,
                  a = Q.a.isDarkMode() ? Q.a.theme.colors.gray50 : Q.a.theme.colors.gray0,
                  l = Yt.a.generate({
                    backgroundColor: Q.a.theme.colors.transparent,
                    color: Q.a.theme.colors.primary,
                    customFocusBackgroundColor: a,
                    customHoverBackgroundColor: a,
                    customPressedBackgroundColor: a,
                  })
                return i.a.createElement(
                  le.a,
                  {
                    interactiveStyles: l,
                    link: r,
                    onPress: function () {
                      return m('click')
                    },
                    style: [Zt.moduleContainer, Q.a.isDarkMode() ? Zt.darkModeBackground : Zt.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ie.a,
                      { style: [Zt.contentContainer, Zt.summaryContainer] },
                      i.a.createElement($t, { isMobileLayout: e, userId: p, withThumbnail: !0 }),
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: [Zt.buttonContainer, e ? Zt.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        We.b,
                        {
                          align: 'center',
                          link: r,
                          size: 'body',
                          style: Zt.actionButton,
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
            ? i.a.createElement(te.a, null, function (e) {
                var t = e.windowWidth <= Q.a.theme.breakpoints.small
                return h(t)
              })
            : null
        }),
        tr = r('z+ta'),
        rr = r('7JQg'),
        nr = r('7wqI'),
        ar = r('Jkc4'),
        or = r('wCd/'),
        ir = function (e) {
          var t = e.isActiveCreator,
            r = e.isOwnProfile,
            n = e.superFollowersCount,
            a = e.user,
            o = a.followers_count,
            s = a.friends_count,
            l = a.screen_name
          return i.a.createElement(ar.a, null, function (e) {
            return i.a.createElement(or.a, {
              followersCount: o,
              friendsCount: s,
              onPress: e(),
              screenName: l,
              superFollowersCount: t && r ? n : void 0,
              withLink: Object(nr.b)({ isOwnProfile: r, user: a }),
            })
          })
        }
      function sr(e) {
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
          return x()(this, r)
        }
      }
      var lr = { page: 'profile', section: 'header' },
        cr = (function (e) {
          I()(r, e)
          var t = sr(r)
          function r(e, n) {
            var a
            return (
              w()(this, r),
              (a = t.call(this, e, n)),
              j()(C()(a), '_handleRemoveClusterFollow', function () {
                a.setState({ shouldShowClusterFollow: !1 })
              }),
              (a.state = { shouldShowClusterFollow: !1 }),
              a
            )
          }
          return (
            P()(r, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(st.a)(t, this.state) || !Object(st.a)(e, this.props)
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
                    o = e.superFollowersCount,
                    s = e.user,
                    l = this._isOwnProfile(),
                    c = !l && (s.blocking || s.blocked_by || r),
                    u = !l && (s.blocked_by || r),
                    d = !n || l || s.blocking || s.blocked_by || r || (s.protected && !s.following),
                    p = !n || s.blocking || s.blocked_by || r || (s.protected && !s.following)
                  return i.a.createElement(
                    rr.b,
                    { namespace: lr },
                    i.a.createElement(
                      ie.a,
                      null,
                      i.a.createElement(pe, { isOwnProfile: l, isWithheld: r, user: s }),
                      i.a.createElement(
                        ie.a,
                        { style: [W.a.content, ur.content, c && W.a.withheld] },
                        i.a.createElement(
                          ie.a,
                          { style: W.a.avatarAndButton },
                          i.a.createElement(ne, { isOwnProfile: l, isWithheld: r, user: s }),
                          i.a.createElement(je, {
                            history: this.props.history,
                            isWithheld: r,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: s,
                          }),
                        ),
                        i.a.createElement(Mt, { isOwnProfile: l, isWithheld: r, namespace: lr, user: s }),
                        c ? null : i.a.createElement(it, { isOwnProfile: l, professionalCategoryName: a, user: s }),
                        u
                          ? null
                          : i.a.createElement(ir, {
                              isActiveCreator: t,
                              isOwnProfile: l,
                              superFollowersCount: o,
                              user: s,
                            }),
                        d
                          ? null
                          : i.a.createElement(
                              ie.a,
                              { style: ur.marginTopXSmall },
                              i.a.createElement(lt.a, { userId: s.id_str, userScreenName: s.screen_name }),
                            ),
                        s.muting ? i.a.createElement(vt, { user: s }) : null,
                      ),
                      p ? null : i.a.createElement(er, { screenName: s.screen_name, user: s, userId: s.id_str }),
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
                  return i.a.createElement(tr.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            r
          )
        })(i.a.Component)
      j()(cr, 'contextType', H.a)
      var ur = Q.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        dr = cr,
        pr = r('8UdT'),
        fr = r('dwig'),
        mr = r('GOQE'),
        hr = r('kGix'),
        br = r('v//M'),
        yr = r('0+qk'),
        gr = r('drnk'),
        _r = r('9Bb1'),
        vr = r('iFPY'),
        Er = r('5S/X'),
        wr = r('oQhu'),
        Or = r('xZGM'),
        Pr = function (e, t) {
          return Object(Or.z)(e, Or.v)
        },
        kr = Object(z.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Pr }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Or.w)(Or.v)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        Cr = r.p + 'nft_education_graphic.72be3745.png',
        Sr = r('Wms4'),
        Ir = r('feu+')
      function Fr(e, t) {
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
      function xr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Fr(Object(r), !0).forEach(function (t) {
                j()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Fr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Tr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(qe.a)(
          'svg',
          xr(
            xr({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ve.a.root, e.style], viewBox: '0 0 24 24' },
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
      Tr.metadata = { width: 24, height: 24 }
      var Br = Tr
      function Nr(e, t) {
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
      function jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Nr(Object(r), !0).forEach(function (t) {
                j()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Nr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Lr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(qe.a)(
          'svg',
          jr(
            jr({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ve.a.root, e.style], viewBox: '0 0 24 24' },
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
      Lr.metadata = { width: 24, height: 24 }
      var Rr = Lr,
        Mr = Y.a.ebf5ec25,
        Ar = Y.a.c405ac8d,
        Dr = Y.a.a893d601,
        Ur = Y.a.eb023c93,
        Hr = Y.a.gc65c0a9,
        Wr = Y.a.d17e8aa3,
        zr = Y.a.ff9c6943,
        Vr = Q.a.create(function (e) {
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
        qr = kr(function (e) {
          var t = e.addEducationFlag,
            r = e.analytics,
            n = e.onEducationSheetDismiss,
            a = e.shouldShowEducation,
            o = i.a.useContext(H.a).featureSwitches,
            s = a && !0 === o.getValueWithoutScribeImpression('responsive_web_nft_avatar'),
            l =
              (s && o.getStringValue('responsive_web_nft_avatar_help_link')) ||
              'https://help.twitter.com/managing-your-account/nfts-on-twitter',
            c = function () {
              n(), t()
            }
          i.a.useEffect(
            function () {
              return s && r.scribe({ action: 'impression' }), c
            },
            [s],
          )
          var u = i.a.createElement(
            Y.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            i.a.createElement(
              We.b,
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
            ? i.a.createElement(Ir.a, {
                accessibilityRole: 'dialog',
                actionLabel: Dr,
                contentStyle: Vr.interstitialContent,
                graphic: function () {
                  return i.a.createElement(
                    ie.a,
                    { style: Vr.image },
                    i.a.createElement(X.a, { accessibilityLabel: '', aspectMode: ce.a.exact(2.5), image: Cr }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: Ar,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  r.scribe({ element: 'ok_button', action: 'click' }), c()
                },
                onClose: c,
                subtext: i.a.createElement(
                  ie.a,
                  null,
                  i.a.createElement(
                    ie.a,
                    null,
                    i.a.createElement(
                      We.b,
                      { color: 'normal', size: 'headline2', style: Vr.heading, weight: 'bold' },
                      Ur,
                    ),
                    i.a.createElement(We.b, null, u),
                  ),
                  i.a.createElement(
                    ie.a,
                    null,
                    i.a.createElement(
                      We.b,
                      { color: 'normal', size: 'headline2', style: Vr.heading, weight: 'bold' },
                      Hr,
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: Vr.iconContainer },
                      i.a.createElement(Br, { style: Vr.icon }),
                      i.a.createElement(We.b, null, zr),
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: [Vr.iconContainer, Vr.reducedMarginBottom] },
                      i.a.createElement(Xe.a, { style: Vr.icon }),
                      i.a.createElement(We.b, null, Wr),
                    ),
                    i.a.createElement(
                      ie.a,
                      { style: [Vr.iconContainer, Vr.noMarginTop] },
                      i.a.createElement(ie.a, { style: Vr.icon }),
                      i.a.createElement(
                        Sr.a,
                        { style: Vr.label },
                        i.a.createElement(Rr, { style: Vr.labelIcon }),
                        i.a.createElement(We.b, { color: 'normal', weight: 'bold' }, Mr),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        Jr = r('AJXH'),
        $r = r('rJoH'),
        Gr = r('Y6L+'),
        Yr = r('jS2K'),
        Kr = r('IG4P')
      function Xr(e) {
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
          return x()(this, r)
        }
      }
      var Qr = (function (e) {
          I()(r, e)
          var t = Xr(r)
          function r() {
            return w()(this, r), t.apply(this, arguments)
          }
          return (
            P()(r, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(st.a)(e, this.props)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    r = e.shouldDisplayUserActionSheet
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
                        r && t && i.a.createElement(Se, { buttonStyle: W.a.menuSheetButton, user: t }),
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
                    r = e.restrictedUser,
                    n = t || r,
                    a = n.name && n.screen_name,
                    o = a ? n.name : '@'.concat(n.screen_name)
                  return i.a.createElement(
                    ie.a,
                    { style: W.a.names },
                    i.a.createElement(Nt.a, {
                      name: o,
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
        })(i.a.Component),
        Zr = r('wytG'),
        en = r('VS6U'),
        tn = r('muX9'),
        rn = function (e) {
          var t = e.screenName,
            r = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return i.a.createElement(tn.a, { script: [{ type: 'application/ld+json', innerHTML: r }] })
        },
        nn = r('ipry'),
        an = r('E4zi'),
        on = function (e) {
          var t,
            r,
            n,
            a = e.user,
            o =
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
              author: Object(an.a)(a),
            }
          return (
            o && (s.relatedLink = [o.url, o.expanded_url]),
            i.a.createElement(tn.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(s, null, 2) }],
            })
          )
        },
        sn = r('Qayx'),
        ln = r('G8HL'),
        cn = r('mw9i'),
        un = r('zfvc'),
        dn = r('FIs5'),
        pn = r('Q0VY'),
        fn = r('FiRh'),
        mn = r('0yYu'),
        hn = r('k/OQ'),
        bn = r('Ty5D')
      function yn(e, t) {
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
      function gn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? yn(Object(r), !0).forEach(function (t) {
                j()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yn(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function _n(e) {
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
          return x()(this, r)
        }
      }
      var vn = Y.a.fa98627a,
        En = Y.a.a2811f96,
        wn = Y.a.c6ea308b,
        On = Y.a.d67658c0,
        Pn = Y.a.ccc9153f,
        kn = Y.a.bab1f8b0,
        Cn = Y.a.a52b03a5,
        Sn = Y.a.cc3c6989,
        In = Y.a.add55c97,
        Fn = Y.a.d7b8eba9,
        xn = Y.a.c0098d49,
        Tn = Y.a.b721eb37,
        Bn = Y.a.c4af3561,
        Nn = Y.a.dbcaaab5,
        jn = Y.a.hf162fb6,
        Ln = Y.a.ad7b2b38,
        Rn = Y.a.f19b4073,
        Mn = Y.a.ha62da97,
        An = Y.a.ica87fde,
        Dn = Y.a.e79ed125,
        Un = Y.a.g8475f82,
        Hn = Y.a.c9a1cb5d,
        Wn = Y.a.e7b201dd,
        zn = Y.a.d09e12c4,
        Vn = Y.a.gbf342a4,
        qn = Y.a.eeab4adf,
        Jn = Y.a.i144ee20,
        $n = Y.a.j58e7b00,
        Gn = Y.a.d834ab9c,
        Yn = { section: 'profile_interstitial' },
        Kn = Object(Zr.a)(function () {
          return Promise.all([r.e(0), r.e(109)]).then(r.bind(null, '8KtR'))
        }),
        Xn = Object(Zr.a)(function () {
          return Promise.all([r.e(0), r.e(109)]).then(r.bind(null, 'ivpD'))
        }),
        Qn = Object(Zr.a)(function () {
          return Promise.all([r.e(0), r.e(109)]).then(r.bind(null, 'ylAD'))
        }),
        Zn = 'about',
        ea = 'likes',
        ta = 'media',
        ra = 'reactions',
        na = 'superfollows',
        aa = 'with_replies',
        oa = 36e5,
        ia = Object(wr.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        sa = (function (e) {
          I()(r, e)
          var t = _n(r)
          function r(e, n) {
            var a
            return (
              w()(this, r),
              (a = t.call(this, e, n)),
              j()(
                C()(a),
                '_safetyModeViolatorExperienceEnabled',
                a.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              j()(
                C()(a),
                '_safetyModeUserExperienceEnabled',
                a.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              j()(
                C()(a),
                '_shouldEnableProfessionalCategoryLabelViewing',
                a.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              j()(
                C()(a),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                a.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              j()(
                C()(a),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                a.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              j()(C()(a), '_renderContainer', function () {
                var e = a.props,
                  t = e.fetchStatus,
                  r = e.isNotFound,
                  n = e.isRefreshing,
                  o = e.isSuspended,
                  s = e.screenName,
                  l = o || r
                return i.a.createElement(
                  Kr.a,
                  { isRefreshing: n, onRefresh: a._handlePullToRefresh },
                  i.a.createElement(
                    ie.a,
                    { style: ca.containerGrow },
                    i.a.createElement(
                      cn.a,
                      null,
                      i.a.createElement(br.a, {
                        accessibilityLabel: Pn({ screenName: s }),
                        fetchStatus: l ? hr.a.LOADED : t,
                        onRequestRetry: a._handleRequestRetry,
                        render: a._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              j()(C()(a), '_renderHeaderAndContent', function () {
                var e = a.state.showNftAvatarEducation
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  e && i.a.createElement(qr, { onEducationSheetDismiss: a._handleOnDismissNftAvatarEducation }),
                  a._renderHeader(),
                  a._renderContent(),
                )
              }),
              j()(C()(a), '_renderContent', function () {
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
              j()(C()(a), '_isViewingOwnProfile', function () {
                var e = a.context.loggedInUserId,
                  t = a.props.user
                return t && e === t.id_str
              }),
              j()(C()(a), '_shouldShowProfileInterstitial', function () {
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
                  u = e === nn.a.SensitiveMedia || e === nn.a.OffensiveProfileContent,
                  d = u && (n.following || r || Er.b)
                return !(a._isViewingOwnProfile() || a._isProtectedFromViewer() || l || c || s || d)
              }),
              j()(C()(a), '_isProtectedFromViewer', function () {
                var e = a.props.user
                return e && e.protected && !a._isViewingOwnProfile() && !e.following
              }),
              j()(C()(a), '_handleRequestRetry', function () {
                a._fetchOneUserIfNeeded(a.props)
              }),
              j()(C()(a), '_handlePullToRefresh', function () {
                var e = a.props.user
                e ? a._fetchOneUser(e.id_str) : a._fetchOneUserIfNeeded(a.props)
              }),
              j()(C()(a), '_handleShowActionedTweets', function () {
                var e = a.props,
                  t = e.history,
                  r = e.user
                r && t.push('/settings/safety_mode/actioned_tweets/'.concat(r.id_str))
              }),
              j()(C()(a), '_handleShowBlockedTweets', function () {
                var e = a.props,
                  t = e.scribeAction,
                  r = e.scribeNamespace,
                  n = e.user
                a.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    a._safetyModeUserExperienceEnabled &&
                    t(gn(gn({}, r), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              j()(C()(a), '_handleOnConfirmProfileInterstitial', function () {
                var e = a.props,
                  t = e.scribeAction,
                  r = e.scribeNamespace
                a.setState({ userProfileInterstitialDismissed: !0 }), t(gn(gn(gn({}, r), Yn), {}, { action: 'click' }))
              }),
              j()(C()(a), '_handleOnDismissNftAvatarEducation', function () {
                a.setState({ showNftAvatarEducation: !1 })
              }),
              j()(C()(a), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  r = e.fetchStatus,
                  n = a.props.recordTTFL
                if ((r === hr.a.FAILED && (a._shouldRecordTTFL = !1), a._shouldRecordTTFL && t.length)) {
                  var o = t.some(function (e) {
                    return e.type === pr.b.Tweet
                  })
                  a._shouldRecordTTFL = !1
                  o && n('profile', { source: 'graphql' })
                }
              }),
              j()(C()(a), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                a.setState({ showFollowButtonRightControl: t })
              }),
              j()(C()(a), '_getSmartBlockEndTimeSentence', function () {
                var e = a.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    r = parseInt(e.smart_blocking_expiration, 10),
                    n = r > t ? r - t : 0
                  if (n <= 72e5) return Nn
                  var o = Math.floor(n / oa),
                    i = Math.floor(o / 24),
                    s = o % 24
                  return 0 === i
                    ? Rn({ hourCount: s })
                    : 0 === s
                    ? Ln({ dayCount: i })
                    : jn({ dayCount: i, hourCount: s })
                }
                return ''
              }),
              j()(C()(a), '_getProfessionalCategory', function () {
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
              j()(C()(a), '_shouldDisplayProfessionalCategoryLabel', function () {
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
              j()(C()(a), '_getProfessionalCategoryNameIfDisplayable', function () {
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
            P()(r, [
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
                      a(gn(gn({}, o), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' })),
                      e._isUserAutoblocking() &&
                        a(
                          gn(
                            gn({}, o),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && a(gn(gn({}, o), R.c())),
                    n()
                      .catch(r())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && a(gn(gn(gn({}, o), Yn), {}, { action: 'impression' }))
                      })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.fetchStatus,
                    n = t.recordTTFMC
                  if (e.fetchStatus !== r && r === hr.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (
                    this._shouldRecordTTFMC &&
                    e.fetchStatus !== r &&
                    r === hr.a.LOADED &&
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
                    r = t.screenName,
                    n = t.scribeAction,
                    a = t.scribeNamespace,
                    o = t.userProfileInterstitialType
                  e.screenName !== r
                    ? (this._fetchOneUserIfNeeded(e), this.setState({ userProfileInterstitialDismissed: !1 }))
                    : !o &&
                      this._shouldShowProfileInterstitial(e.userProfileInterstitialType) &&
                      n(gn(gn(gn({}, a), Yn), {}, { action: 'impression' }))
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
                    o = t.isNotFound,
                    s = t.isSuspended,
                    l = t.isWithheld,
                    c = t.location,
                    u = t.screenName,
                    d = t.user,
                    p = t.userLanguage,
                    f = this._isViewingOwnProfile(),
                    m = s || o || (l && !f),
                    h = d ? wn({ screenName: d.screen_name, fullName: d.name }) : void 0,
                    b = f ? '' : '@'.concat((d && d.screen_name) || u || '', ' '),
                    y = m ? null : i.a.createElement(yr.a, { getLocationState: ia(b), history: n }),
                    g =
                      d && !m
                        ? i.a.createElement(Nt.a, {
                            isProtected: d.protected,
                            isVerified: d.verified,
                            name: d.name,
                            screenName: d.screen_name,
                            withScreenName: !1,
                          })
                        : vn,
                    _ = d && !m && r === hr.a.LOADED ? this._renderSubtitle(d) : void 0,
                    v = d && 'twitter://user?screen_name='.concat(d.screen_name),
                    E = d && 'https://twitter.com/'.concat(d.screen_name || ''),
                    w = d && On({ fullName: d.name, screenName: d.screen_name })
                  return i.a.createElement(en.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: b },
                    documentTitle: h,
                    history: n,
                    primaryContent: i.a.createElement(
                      fr.a,
                      { fab: y },
                      i.a.createElement($r.a, {
                        canonical: E,
                        description: null == d ? void 0 : d.description,
                        image: null == d ? void 0 : d.profile_image_url_https,
                        title: w,
                        type: 'profile',
                      }),
                      Er.b && d
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(on, { user: d }),
                            i.a.createElement(_r.a, { description: null == d ? void 0 : d.description }),
                          )
                        : null,
                      i.a.createElement(A.a, { deepLink: v }),
                      i.a.createElement(D.a, {
                        featureSwitches: this.context.featureSwitches,
                        loggedInUserId: e,
                        pageType: 'profile',
                        userLanguage: p,
                      }),
                      E ? i.a.createElement(M.a, { canonical: E }) : null,
                      i.a.createElement(br.a, {
                        accessibilityLabel: Pn({ screenName: u }),
                        fetchStatus: d || m ? hr.a.LOADED : r,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      a
                        ? i.a.createElement(vr.a, { history: n, location: c, userId: null == d ? void 0 : d.id_str })
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
                    ? i.a.createElement(
                        un.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        i.a.createElement(he.a, { promotedContent: t, userId: r.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    r = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(r, '/').concat(ea)) > -1
                    ? i.a.createElement(sn.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(r, '/').concat(ra)) > -1
                    ? i.a.createElement(sn.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(r, '/').concat(ta)) > -1
                    ? i.a.createElement(sn.a, { count: e.media_count, type: 'media' })
                    : i.a.createElement(sn.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? i.a.createElement(Yr.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(nr.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : i.a.createElement(U.a, null)
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
                    o = e.onButtonPress,
                    s = e.onSecondaryButtonPress,
                    l = e.secondaryButtonText,
                    c = e.secondaryButtonType,
                    u = this.props,
                    d = u.isSuspended,
                    p = u.screenName
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    Er.b && d && p
                      ? i.a.createElement(rn, { screenName: p })
                      : Er.b
                      ? i.a.createElement(Jr.a, null)
                      : null,
                    i.a.createElement(dn.a, {
                      buttonText: t,
                      buttonType: r,
                      header: n,
                      message: a,
                      onButtonPress: o,
                      onSecondaryButtonPress: s,
                      secondaryButtonText: l,
                      secondaryButtonType: c,
                      style: ua.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(gr.a)(e),
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
                    r = Dn({ screenName: t }),
                    n = i.a.createElement(
                      Y.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      i.a.createElement(We.b, { link: 'https://support.twitter.com/articles/117063' }, Y.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: r,
                    message: n,
                    buttonText: qn,
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
                    n = Mn({ screenName: r }),
                    a = i.a.createElement(We.b, { color: 'gray700', weight: 'bold' }),
                    o = i.a.createElement(
                      ie.a,
                      null,
                      i.a.createElement(
                        We.b,
                        { color: 'gray700', style: { paddingBottom: Q.a.theme.spaces.space20 } },
                        i.a.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          i.a.cloneElement(a, null, Y.a.g6645d94({ screenName: r })),
                        ),
                      ),
                      i.a.createElement(
                        We.b,
                        { color: 'gray700', style: { paddingBottom: Q.a.theme.spaces.space8 } },
                        i.a.createElement(
                          Y.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          i.a.cloneElement(a, null, Y.a.g08eceae({ screenName: r })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: o,
                    buttonText: Jn,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: $n,
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
                    r = i.a.createElement(
                      Y.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      i.a.createElement(We.b, { link: 'https://support.twitter.com/articles/20172060' }, Y.a.de078c23),
                    )
                  return this._renderEmptyState({ header: An, message: r })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    r = i.a.createElement(We.b, { style: { paddingBottom: Q.a.theme.spaces.space20 } }),
                    n = i.a.createElement(We.b, { weight: 'bold' }),
                    a = i.a.createElement(We.b, { style: { paddingBottom: Q.a.theme.spaces.space4 }, weight: 'bold' }),
                    o = i.a.createElement(
                      ie.a,
                      null,
                      i.a.createElement(
                        We.b,
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
                        i.a.cloneElement(r, null, Y.a.ff050532),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        i.a.createElement(
                          We.b,
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
                        i.a.cloneElement(r, null, Y.a.ia457a19),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        i.a.cloneElement(a, null, Y.a.f5531a44),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        i.a.cloneElement(r, null, Y.a.h173a610),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        i.a.cloneElement(a, null, Y.a.ha985c95),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        i.a.cloneElement(r, null, Y.a.d5d82dd3),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        i.a.cloneElement(a, null, Y.a.i4b9b3d0),
                      ),
                      i.a.createElement(
                        Y.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        i.a.cloneElement(r, null, Y.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: Bn, message: o })
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
                        ? i.a.createElement(Ot.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                        : i.a.createElement(
                            Y.a.I18NFormatMessage,
                            { $i18n: 'f6fa2033' },
                            i.a.createElement(
                              We.b,
                              { link: 'https://support.twitter.com/articles/18311' },
                              Y.a.f3b1bdc1,
                            ),
                          )),
                    this._renderEmptyState({ header: Un, message: e })
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
                  var a = pn.a.descriptionTextParts(t, r),
                    o = i.a.createElement(
                      We.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      a.map(function (e, t) {
                        return i.a.createElement(fn.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: Vn, message: o })
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
                  var a = pn.a.descriptionTextParts(t, r)
                  return i.a.createElement(
                    ie.a,
                    null,
                    i.a.createElement(
                      ie.a,
                      { style: ca.withheldMessageRoot },
                      i.a.createElement(
                        We.b,
                        { align: 'center', size: 'title4', style: ca.withheldMessageHeader, weight: 'bold' },
                        Vn,
                      ),
                      i.a.createElement(
                        We.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        a.map(function (e, t) {
                          return i.a.createElement(fn.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    i.a.createElement(mn.a, null),
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
                    r = i.a.createElement(
                      Y.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      i.a.createElement(We.b, { link: 'https://support.twitter.com/articles/14016' }, Y.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: zn, message: r })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Hn, message: Wn })
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
                  var o = n.screen_name,
                    s = this.state.showBlockedTweets,
                    l = t.query,
                    c = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    u = (this._isViewingOwnProfile() && r) || n.super_following,
                    d = this.context.featureSwitches.isTrue('profile_foundations_about_tab_enabled'),
                    p = function (e) {
                      var r = c ? xn : Fn
                      return [
                        d
                          ? {
                              to: { pathname: '/'.concat(o, '/').concat(Zn), query: l },
                              key: Tn,
                              label: Tn,
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
                          key: kn,
                          label: kn,
                        },
                        { to: { pathname: '/'.concat(o, '/').concat(aa), query: l }, key: Cn, label: Cn },
                        u
                          ? {
                              to: { pathname: '/'.concat(o, '/').concat(na), query: l },
                              key: Sn,
                              label: Sn,
                              color: 'plum500',
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(o, '/').concat(ta), query: l }, key: In, label: In, onClick: e() },
                        {
                          to: { pathname: '/'.concat(o, '/').concat(c ? ra : ea), query: l },
                          key: r,
                          label: r,
                          onClick: e(),
                        },
                      ]
                    },
                    f = { displayBlocked: s, fullName: n.name, screenName: n.screen_name, userId: n.id_str },
                    m = { isActiveCreator: r, isSuperFollowing: n.super_following }
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(ar.a, null, function (e) {
                      return i.a.createElement(hn.a, { accessibilityLabel: En, links: p(e) })
                    }),
                    i.a.createElement(
                      bn.e,
                      null,
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/intent/follow' },
                        i.a.createElement(Kn, a()({}, f, m)),
                      ),
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/intent/user' },
                        i.a.createElement(Kn, a()({}, f, m)),
                      ),
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Gr.J) },
                        i.a.createElement(Kn, a()({}, f, m, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Gr.J, '/').concat(aa) },
                        i.a.createElement(Kn, a()({}, f, m, { mode: 'with_replies' })),
                      ),
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Gr.J, '/').concat(na) },
                        i.a.createElement(Kn, a()({}, f, m, { mode: 'superfollows' })),
                      ),
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Gr.J, '/').concat(ta) },
                        i.a.createElement(Qn, f),
                      ),
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Gr.J, '/(').concat(ea, '|').concat(ra, ')') },
                        i.a.createElement(Xn, f),
                      ),
                      i.a.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Gr.J, '/').concat(Zn) },
                        i.a.createElement(Kn, a()({}, f, m, { onEntriesRendered: this._handleEntriesRendered })),
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
                  return n ? r(n).catch(t(mr.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    r = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(r(mr.a))
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
        })(i.a.Component)
      j()(sa, 'contextType', H.a),
        j()(sa, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return i.a.createElement(dr, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return i.a.createElement(Qr, e)
          },
          recordTTFL: L.c,
          recordTTFMC: L.d,
        })
      var la = Object(ln.a)(sa),
        ca = Q.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        ua = Q.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        da = function (e) {
          return i.a.createElement(v.a, { userId: e.user && e.user.id_str }, function (t) {
            var r = t.scribeNamespace
            return i.a.createElement(la, a()({}, e, { scribeNamespace: r }))
          })
        }
      t.default = _(da)
    },
  },
])
//# sourceMappingURL=WIPED
