;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    'll/Q': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserProfileScreenContainer', function () {
          return ca
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
          d.k,
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
          d.u,
          m,
          function (e, t) {
            var r = m(e, t)
            return r && r.profile_interstitial_type ? r.profile_interstitial_type : null
          },
          d.n,
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
        y = Object(u.g)(b, g),
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
        j = r.n(x),
        B = r('KEM+'),
        N = r.n(B),
        T =
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
        U = r('v6aA'),
        H = r('I/ms'),
        W = r('rxPX'),
        z = r('M0jS'),
        V = function (e, t) {
          return Object(z.d)(e, t.user.id_str)
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
        $ = r('B5iK')
      var Y = r('TIdA'),
        J = r('rHpw'),
        K = r('1I0O'),
        Q = r('jhWN'),
        X = r('cHvH'),
        Z = Y.a.createLayoutCache(),
        ee = G(function (e) {
          var t,
            r,
            n,
            i = e.analytics,
            s = e.createLocalApiErrorHandler,
            l = e.fetchUsersPresence,
            c = e.isOwnProfile,
            u = e.isWithheld,
            d = e.user,
            p = e.userPresencePollingInterval,
            f = e.userSpace,
            m = o.useContext(U.a),
            h = m.featureSwitches,
            b = m.loggedInUserId,
            g = !c && u,
            y = g || !d.profile_image_url_https ? void 0 : d.profile_image_url_https,
            _ =
              b &&
              (h.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ||
                h.isTrue('voice_rooms_typeahead_audiospace_ring_enabled')),
            v = d.has_nft_avatar && h.isTrue('responsive_web_nft_avatar'),
            E = f && _,
            w = o.useCallback(
              function () {
                var e
                _ && (null === (e = l([d.id_str])) || void 0 === e || e.catch(s({})))
              },
              [d.id_str, _, l, s],
            )
          o.useEffect(
            function () {
              return w()
            },
            [w],
          ),
            o.useEffect(function () {
              v && i.scribe({ element: 'nft_avatar', action: 'impression' })
            }, []),
            (t = function () {
              return w()
            }),
            (r = _ ? p : void 0),
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
                  var e = new $.b(r).interval(n.current)
                  return (
                    e.start(),
                    function () {
                      return e.stop()
                    }
                  )
                }
              },
              [r],
            )
          var O = v ? 'nft' : 'photo',
            P = g || E ? void 0 : { pathname: '/'.concat(d.screen_name, '/').concat(O) },
            k = function (e) {
              i.scribe({ element: v ? 'nft_avatar' : 'avatar', action: 'click' })
            }
          return o.createElement(X.a, null, function (e) {
            var t = e.windowWidth
            return o.createElement(
              o.Fragment,
              null,
              (function (e) {
                var t = e >= J.a.theme.breakpoints.medium,
                  r = { imageLayoutCache: Z, link: P, onClick: k, size: 'custom', uri: y, screenName: d.screen_name }
                return f && E
                  ? o.createElement(K.a, a()({}, r, f, { style: H.a.avatar }))
                  : o.createElement(
                      Q.a,
                      a()({}, r, {
                        borderColor: 'cellBackground',
                        borderWidth: t ? 'large' : 'medium',
                        style: H.a.avatar,
                      }),
                    )
              })(t),
            )
          })
        }),
        te = r('RCZO'),
        re = r('MWbm'),
        ne = r('n4Eu'),
        ae = r('cm6r'),
        oe = r('A91F'),
        ie = r('9Xij'),
        se = Y.a.createLayoutCache(),
        le = function (e) {
          var t = e.isOwnProfile,
            r = e.isWithheld,
            n = e.user,
            a = !t && r,
            i = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            s = i && ne.a.get(i),
            l = s ? Object(te.g)(s) : J.a.theme.colors.gray200
          return !a && n.profile_banner_url
            ? o.createElement(
                ae.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                o.createElement(Y.a, {
                  accessibilityLabel: '',
                  aspectMode: oe.a.exact(J.a.theme.aspectRatios.profileBanner),
                  backgroundColor: l,
                  image: n.profile_banner_url,
                  layoutCache: se,
                }),
              )
            : o.createElement(
                re.a,
                { style: H.a.banner },
                o.createElement(ie.a, { ratio: J.a.theme.aspectRatios.profileBanner, style: { backgroundColor: l } }),
              )
        },
        ce = r('3nOA'),
        ue = r('I57f'),
        de = r('uIZp'),
        pe = r('3XMw'),
        fe = r.n(pe),
        me = r('SOvA'),
        he = r('vYiB'),
        be = r('Y49K'),
        ge = r('Irs7'),
        ye = r('/yvb'),
        _e = r('ACHU'),
        ve = r('rsoE'),
        Ee = r('vMjK')
      function we(e) {
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
            n = j()(e)
          if (t) {
            var a = j()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var Oe = fe.a.h63a5c3b,
        Pe = o.createElement(_e.a, null),
        ke = (function (e) {
          S()(r, e)
          var t = we(r)
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
                return o.createElement(Ee.b, { onClose: t, promotedContent: n, user: a, view: 'profile' })
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
                  return o.createElement(ye.a, {
                    accessibilityLabel: Oe,
                    hoverLabel: { label: Oe },
                    icon: Pe,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: ve.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            r
          )
        })(o.PureComponent),
        Ce = r('pHkl'),
        Se = fe.a.g7088266,
        Ie = fe.a.gd7acb84,
        Fe = fe.a.b7636014,
        xe = o.createElement(me.a, null),
        je = J.a.create(function (e) {
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
            re.a,
            { style: je.buttons },
            n && c
              ? o.createElement(
                  ye.a,
                  {
                    link: b ? '/i/flow/setup_profile' : '/settings/profile',
                    style: je.lastButton,
                    type: 'primaryOutlined',
                  },
                  b ? Ie : Se,
                )
              : null,
            m && o.createElement(ke, { buttonStyle: je.button, promotedContent: i, user: s }),
            !c &&
              f &&
              o.createElement(ye.a, {
                accessibilityLabel: Fe,
                hoverLabel: { label: Fe },
                icon: xe,
                onPress: function () {
                  if (n) {
                    var e = Object(ce.a)(s.id_str, n)
                    l.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Ce.g.ONE_TO_ONE,
                        inbox_type: Ce.c.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: je.button,
                testID: be.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              h &&
              o.createElement(ue.a, {
                allowPromptForPush: !0,
                isFollowing: s.notifications,
                style: je.button,
                userId: s.id_str,
              }),
            !c &&
              !u &&
              !p &&
              o.createElement(
                he.a,
                { onOffscreenChange: a },
                o.createElement(de.a, { promotedContent: i, style: je.lastButton, userId: s.id_str }),
              ),
          )
        },
        Ne = r('tOzk'),
        Te = r('YeIG'),
        Le = r('Je1/'),
        Re = r('uLiA'),
        Me = r('EJJl'),
        Ae = r('WWyu'),
        De = r('LhSm'),
        Ue = r('t62R'),
        He = r('GWvE'),
        We = r('Lsrn'),
        ze = r('k/Ka')
      function Ve(e, t) {
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
      function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ve(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ve(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Ge = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ze.a)(
          'svg',
          qe(
            qe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [We.a.root, e.style], viewBox: '0 0 24 24' },
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
      Ge.metadata = { width: 24, height: 24 }
      var $e = Ge,
        Ye = r('KrGU'),
        Je = r('I/9y'),
        Ke = r('YUdS'),
        Qe = r('EjKN')
      function Xe(e, t) {
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
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xe(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Xe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var et = fe.a.a1ea2f12,
        tt = fe.a.g8191e77,
        rt = function (e) {
          var t = e.day,
            r = e.month
          if (t && r) {
            var n = new Date()
            return r === n.getMonth() + 1 && t === n.getDate()
          }
        },
        nt = J.a.create(function (e) {
          return {
            description: { display: 'block', marginBottom: e.spaces.space12 },
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
            noCursor: { cursor: 'inherit' },
          }
        }),
        at = function (e) {
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
                  re.a,
                  { style: nt.description },
                  o.createElement(Me.a, {
                    description: s.description,
                    disableTranslation: !s.is_profile_translatable,
                    entities: s.entities,
                    testID: Re.a.userDescription,
                    userId: s.id_str,
                    withheldDescription: s.withheld_description,
                    withheldEntities: s.withheld_entities,
                  }),
                )
              : null,
            o.createElement(
              re.a,
              { style: nt.details },
              o.createElement(
                Ue.b,
                { style: nt.detailsText, testID: Re.a.profileHeaderItems },
                i
                  ? o.createElement(
                      Le.a,
                      {
                        Icon: $e,
                        onPress: function () {
                          c.scribe(Ze(Ze({}, u), L.b()))
                        },
                        style: nt.noCursor,
                        testID: Re.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      o.createElement(Ue.b, null, i),
                    )
                  : null,
                s.location && !Object(He.a)(s.location)
                  ? o.createElement(
                      Le.a,
                      { Icon: Ye.a, testID: Re.a.userLocation },
                      o.createElement(Ue.b, null, s.location),
                    )
                  : null,
                d && d.url
                  ? o.createElement(
                      Le.a,
                      { Icon: Je.a, link: { pathname: d.url, external: !0 }, testID: Re.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !p ||
                  Object(Te.a)(p) ||
                  (p.visibility &&
                    'self' === p.visibility.toLowerCase() &&
                    p.year_visibility &&
                    'self' === p.year_visibility.toLowerCase())
                  ? null
                  : rt(p)
                  ? o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(
                        Le.a,
                        {
                          Icon: Ke.a,
                          onPress: function () {
                            l.current && l.current.launch()
                          },
                        },
                        a ? et : tt,
                      ),
                      o.createElement(Ne.a, {
                        setRef: function (e) {
                          l.current = e
                        },
                      }),
                    )
                  : o.createElement(
                      Le.a,
                      { Icon: Qe.a, testID: Re.a.userBirthdate },
                      o.createElement(Ae.a, { birthdate: p, withBornPrefixText: !0 }),
                    ),
                o.createElement(De.a, { joinDate: s.created_at }),
              ),
            ),
          )
        },
        ot = r('mN6z'),
        it = r('W27K'),
        st = r('ddV6'),
        lt = r.n(st),
        ct = r('1YZw'),
        ut = Object(W.a)().propsFromActions(function () {
          return {
            addToast: ct.b,
            createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: p.e.unmute,
          }
        }),
        dt = r('8Usl'),
        pt = r('eb3s'),
        ft = r('P2xQ'),
        mt = fe.a.cef4e8cf,
        ht = fe.a.ec294e62,
        bt = fe.a.df422dfe,
        gt = J.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        yt = ut(function (e) {
          var t = e.addToast,
            r = e.createLocalApiErrorHandler,
            n = e.unmute,
            a = e.user,
            i = o.useState(!1),
            s = lt()(i, 2),
            l = s[0],
            c = s[1],
            u = a.screen_name
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              Ue.b,
              { color: 'gray700', style: gt.mute },
              bt,
              ' ',
              o.createElement(
                Ue.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: gt.unmuteButton,
                  testID: dt.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                ft.g,
              ),
            ),
            l
              ? o.createElement(pt.a, {
                  confirmButtonLabel: ft.g,
                  headline: mt({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(a.id_str).then(function () {
                        return t({ text: Object(ft.d)(a.screen_name) })
                      }, r({ showToast: !0 }))
                  },
                  text: ht,
                })
              : null,
          )
        }),
        _t = r('RgK2'),
        vt = r.n(_t),
        Et = r('rcen'),
        wt = 'UserName',
        Ot = r('X04g'),
        Pt = r('A7Fw'),
        kt = fe.a.e839db39,
        Ct = fe.a.b74bd6c6,
        St = fe.a.f15bfdb3,
        It = fe.a.i859a9d3,
        Ft = J.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        xt = function (e) {
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
            re.a,
            { style: Ft.content },
            o.createElement(Pt.a, { style: Ft.icon }),
            o.createElement(Ue.b, { size: 'title4', style: Ft.text, weight: 'bold' }, St),
            o.createElement(
              Ue.b,
              { color: 'gray700', style: Ft.text },
              Ct,
              ' ',
              o.createElement(
                Ue.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: a },
                It,
              ),
            ),
            'sheet' === r ? o.createElement(ye.a, { onClick: t, style: Ft.button, type: 'primaryOutlined' }, kt) : null,
          )
        },
        jt = r('jV+4'),
        Bt = r('ir4X')
      function Nt(e, t) {
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
      function Tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Nt(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Nt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Lt = function (e) {
          var t,
            r = e.isOwnProfile,
            n = e.isWithheld,
            i = e.namespace,
            s = e.user,
            l = Object(ge.b)(),
            c = o.useContext(U.a).featureSwitches,
            u = n ? vt.a : { isProtected: !!s.protected, isVerified: !!s.verified, translatorType: s.translator_type },
            d = s.name && s.screen_name && !(n && !r),
            p = d ? s.name : '@'.concat(s.screen_name),
            f = o.useCallback(function (e, t) {
              return o.createElement(xt, { dismiss: e, type: t })
            }, []),
            m = c.isTrue('identity_verification_educational_prompt_enabled'),
            h = c.isTrue('account_taxonomy_automated_label_enabled'),
            b = s.highlightedLabel
          if ('AutomatedLabel' === (null === (t = s.highlightedLabel) || void 0 === t ? void 0 : t.userLabelType)) {
            var g,
              y,
              _,
              v =
                null !== (g = s.highlightedLabel) &&
                void 0 !== g &&
                null !== (y = g.longDescription) &&
                void 0 !== y &&
                y.entities
                  ? o.createElement(Et.a, {
                      entities: s.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: s.id_str, name: s.screen_name, item_type: Ot.a.ItemType.USER }] }
                        l.scribe(Tt(Tt({}, i), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: s.highlightedLabel.longDescription.text,
                    })
                  : (null === (_ = s.highlightedLabel) || void 0 === _ ? void 0 : _.description) || null
            b = h ? Tt(Tt({}, s.highlightedLabel), {}, { description: v }) : null
          }
          return o.createElement(
            re.a,
            { style: H.a.names, testID: wt },
            o.createElement(
              jt.a,
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
            b ? o.createElement(Bt.a, { isIconLarge: !0, label: b }) : null,
          )
        },
        Rt = (r('uFXj'), r('W55q')),
        Mt = r('YeSc'),
        At = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Dt = Object(W.a)()
          .propsFromState(function () {
            return { newsletter: Mt.f }
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
                Rt.c.Subscribed,
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
              fetchUserBizProfileIfNeeded: Mt.c,
            }
          })
          .withAnalytics(At),
        Ut = Object(W.a)()
          .propsFromState(function () {
            return { newsletter: Mt.f }
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
              g,
              y = e.newsletter,
              _ =
                null == y ||
                null === (t = y.data) ||
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
                null == y ||
                null === (i = y.data) ||
                void 0 === i ||
                null === (s = i.revue_account) ||
                void 0 === s ||
                null === (l = s.newsletter_info) ||
                void 0 === l
                  ? void 0
                  : l.description,
              imageVariants: _,
              originalImage:
                null == y ||
                null === (c = y.data) ||
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
                null == y ||
                null === (f = y.data) ||
                void 0 === f ||
                null === (m = f.revue_account) ||
                void 0 === m ||
                null === (h = m.newsletter_info) ||
                void 0 === h
                  ? void 0
                  : h.title,
              subscriberCount:
                null == y || null === (b = y.data) || void 0 === b || null === (g = b.account_analytics) || void 0 === g
                  ? void 0
                  : g.subscriber_count,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        Ht = r('vbJ7'),
        Wt = fe.a.d58baa7e,
        zt = function (e) {
          var t = e.description,
            r = e.isMobileLayout,
            n = e.originalImage,
            a = e.subscriberCount,
            i = e.title,
            s = e.withThumbnail,
            l = parseInt(a, 10) || 0,
            c = Wt(l),
            u = r ? 'subtext2' : 'body'
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              re.a,
              { style: Vt.contentContainer },
              s && n
                ? o.createElement(
                    re.a,
                    { style: [Vt.newsletterImageContainer, r ? Vt.newsletterImageContainerMobile : void 0] },
                    o.createElement(
                      ie.a,
                      { ratio: 1 },
                      o.createElement(Y.a, { accessibilityLabel: t || '', aspectMode: oe.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              o.createElement(
                re.a,
                { style: [Vt.newsletterInfoContainer, r ? Vt.mobileNewsletterInfoContainer : void 0] },
                o.createElement(
                  Ue.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: r ? Vt.newsletterFieldMobile : Vt.newsletterField,
                    weight: 'bold',
                  },
                  i,
                ),
                o.createElement(
                  Ue.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [Vt.newsletterDescription, r ? Vt.newsletterFieldMobile : Vt.newsletterField],
                  },
                  t,
                ),
                a
                  ? o.createElement(
                      Ue.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: r ? Vt.newsletterFieldMobile : Vt.newsletterField,
                      },
                      o.createElement(fe.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: l }),
                    )
                  : null,
              ),
            ),
          )
        }
      zt.defaultProps = { withThumbnail: !0 }
      var Vt = J.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Ht.a.hexToCss(J.a.theme.colors.borderColor, 0.7),
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
        qt = Ut(zt),
        Gt = r('Rp9C'),
        $t = r('I4+6'),
        Yt = fe.a.d834aec4,
        Jt = fe.a.ab0deccf,
        Kt = fe.a.caeab0f7,
        Qt = J.a.create(function (e) {
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
        Xt = Dt(function (e) {
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
                  var t = Gt.a.getUserItem(d),
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
                re.a,
                { style: Qt.moduleLabel },
                o.createElement(Ue.b, { size: 'body', weight: 'bold' }, Yt),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  r = i ? s : t,
                  n = i ? Kt : Jt,
                  a = J.a.isDarkMode() ? J.a.theme.colors.gray50 : J.a.theme.colors.gray0,
                  l = $t.a.generate({
                    backgroundColor: J.a.theme.colors.transparent,
                    color: J.a.theme.colors.primary,
                    customFocusBackgroundColor: a,
                    customHoverBackgroundColor: a,
                    customPressedBackgroundColor: a,
                  })
                return o.createElement(
                  ae.a,
                  {
                    interactiveStyles: l,
                    link: r,
                    onPress: function () {
                      return m('click')
                    },
                    style: [Qt.moduleContainer, J.a.isDarkMode() ? Qt.darkModeBackground : Qt.defaultBackground],
                  },
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      re.a,
                      { style: [Qt.contentContainer, Qt.summaryContainer] },
                      o.createElement(qt, { isMobileLayout: e, userId: p, withThumbnail: !0 }),
                    ),
                    o.createElement(
                      re.a,
                      { style: [Qt.buttonContainer, e ? Qt.mobileButtonContainer : void 0] },
                      o.createElement(
                        Ue.b,
                        {
                          align: 'center',
                          link: r,
                          size: 'body',
                          style: Qt.actionButton,
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
            ? o.createElement(X.a, null, function (e) {
                var t = e.windowWidth <= J.a.theme.breakpoints.small
                return h(t)
              })
            : null
        }),
        Zt = r('z+ta'),
        er = r('7JQg'),
        tr = r('7wqI'),
        rr = r('Jkc4'),
        nr = r('wCd/'),
        ar = function (e) {
          var t = e.isActiveCreator,
            r = e.isOwnProfile,
            n = e.superFollowersCount,
            a = e.user,
            i = a.followers_count,
            s = a.friends_count,
            l = a.screen_name
          return o.createElement(rr.a, null, function (e) {
            return o.createElement(nr.a, {
              followersCount: i,
              friendsCount: s,
              onPress: e(),
              screenName: l,
              superFollowersCount: t && r ? n : void 0,
              withLink: Object(tr.b)({ isOwnProfile: r, user: a }),
            })
          })
        }
      function or(e) {
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
            n = j()(e)
          if (t) {
            var a = j()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var ir = { page: 'profile', section: 'header' },
        sr = (function (e) {
          S()(r, e)
          var t = or(r)
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
                    er.b,
                    { namespace: ir },
                    o.createElement(
                      re.a,
                      null,
                      o.createElement(le, { isOwnProfile: l, isWithheld: r, user: s }),
                      o.createElement(
                        re.a,
                        { style: [H.a.content, lr.content, c && H.a.withheld] },
                        o.createElement(
                          re.a,
                          { style: H.a.avatarAndButton },
                          o.createElement(ee, { isOwnProfile: l, isWithheld: r, user: s }),
                          o.createElement(Be, {
                            history: this.props.history,
                            isWithheld: r,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: s,
                          }),
                        ),
                        o.createElement(Lt, { isOwnProfile: l, isWithheld: r, namespace: ir, user: s }),
                        c ? null : o.createElement(at, { isOwnProfile: l, professionalCategoryName: a, user: s }),
                        u
                          ? null
                          : o.createElement(ar, {
                              isActiveCreator: t,
                              isOwnProfile: l,
                              superFollowersCount: i,
                              user: s,
                            }),
                        d
                          ? null
                          : o.createElement(
                              re.a,
                              { style: lr.marginTopXSmall },
                              o.createElement(it.a, { userId: s.id_str, userScreenName: s.screen_name }),
                            ),
                        s.muting ? o.createElement(yt, { user: s }) : null,
                      ),
                      p ? null : o.createElement(Xt, { screenName: s.screen_name, user: s, userId: s.id_str }),
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
                  return o.createElement(Zt.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            r
          )
        })(o.Component)
      N()(sr, 'contextType', U.a)
      var lr = J.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        cr = sr,
        ur = r('8UdT'),
        dr = r('dwig'),
        pr = r('GOQE'),
        fr = r('kGix'),
        mr = r('v//M'),
        hr = r('0+qk'),
        br = r('drnk'),
        gr = r('9Bb1'),
        yr = r('iFPY'),
        _r = r('5S/X'),
        vr = r('oQhu'),
        Er = r('xZGM'),
        wr = function (e, t) {
          return Object(Er.y)(e, Er.u)
        },
        Or = Object(W.a)()
          .propsFromState(function () {
            return { shouldShowEducation: wr }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Er.v)(Er.u)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        Pr = r.p + 'nft_education_graphic.72be3745.png',
        kr = r('Wms4'),
        Cr = r('feu+')
      function Sr(e, t) {
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
      function Ir(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Sr(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Sr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Fr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ze.a)(
          'svg',
          Ir(
            Ir({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [We.a.root, e.style], viewBox: '0 0 24 24' },
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
      Fr.metadata = { width: 24, height: 24 }
      var xr = Fr
      function jr(e, t) {
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
      function Br(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? jr(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : jr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Nr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ze.a)(
          'svg',
          Br(
            Br({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [We.a.root, e.style], viewBox: '0 0 24 24' },
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
      Nr.metadata = { width: 24, height: 24 }
      var Tr = Nr,
        Lr = fe.a.ebf5ec25,
        Rr = fe.a.c405ac8d,
        Mr = fe.a.a893d601,
        Ar = fe.a.eb023c93,
        Dr = fe.a.ad5dfe8f,
        Ur = fe.a.gc65c0a9,
        Hr = fe.a.d17e8aa3,
        Wr = fe.a.ff9c6943,
        zr = fe.a.i859a9d3,
        Vr = J.a.create(function (e) {
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
            learnMore: { marginTop: e.spaces.space16 },
            interstitialContent: { marginBottom: e.spaces.space16 },
          }
        }),
        qr = Or(function (e) {
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
          var u = function () {
            r.scribe({ element: 'learn_more', action: 'click' })
          }
          return s
            ? o.createElement(Cr.a, {
                accessibilityRole: 'dialog',
                actionLabel: Mr,
                contentStyle: Vr.interstitialContent,
                graphic: function () {
                  return o.createElement(
                    re.a,
                    { style: Vr.image },
                    o.createElement(Y.a, { accessibilityLabel: '', aspectMode: oe.a.exact(2.5), image: Pr }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: Rr,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  r.scribe({ element: 'ok_button', action: 'click' }), c()
                },
                onClose: c,
                subtext: o.createElement(
                  re.a,
                  null,
                  o.createElement(
                    re.a,
                    null,
                    o.createElement(
                      Ue.b,
                      { color: 'normal', size: 'headline2', style: Vr.heading, weight: 'bold' },
                      Ar,
                    ),
                    o.createElement(Ue.b, null, Dr),
                  ),
                  o.createElement(
                    re.a,
                    null,
                    o.createElement(
                      Ue.b,
                      { color: 'normal', size: 'headline2', style: Vr.heading, weight: 'bold' },
                      Ur,
                    ),
                    o.createElement(
                      re.a,
                      { style: Vr.iconContainer },
                      o.createElement(xr, { style: Vr.icon }),
                      o.createElement(Ue.b, null, Wr),
                    ),
                    o.createElement(
                      re.a,
                      { style: [Vr.iconContainer, Vr.reducedMarginBottom] },
                      o.createElement(Je.a, { style: Vr.icon }),
                      o.createElement(Ue.b, null, Hr),
                    ),
                    o.createElement(
                      re.a,
                      { style: [Vr.iconContainer, Vr.noMarginTop] },
                      o.createElement(re.a, { style: Vr.icon }),
                      o.createElement(
                        kr.a,
                        { style: Vr.label },
                        o.createElement(Tr, { style: Vr.labelIcon }),
                        o.createElement(Ue.b, { color: 'normal', weight: 'bold' }, Lr),
                      ),
                    ),
                  ),
                  o.createElement(
                    Ue.b,
                    {
                      align: 'center',
                      color: 'normal',
                      link: l,
                      onPress: u,
                      style: Vr.learnMore,
                      testID: 'learnMore',
                      weight: 'bold',
                    },
                    zr,
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        Gr = r('AJXH'),
        $r = r('rJoH'),
        Yr = r('Y6L+'),
        Jr = r('jS2K'),
        Kr = r('IG4P')
      function Qr(e) {
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
            n = j()(e)
          if (t) {
            var a = j()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var Xr = (function (e) {
          S()(r, e)
          var t = Qr(r)
          function r() {
            return E()(this, r), t.apply(this, arguments)
          }
          return (
            O()(r, [
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
                    r = e.shouldDisplayUserActionSheet
                  return o.createElement(
                    re.a,
                    null,
                    this._renderBanner(),
                    o.createElement(
                      re.a,
                      { style: [H.a.content, H.a.withheld] },
                      o.createElement(
                        re.a,
                        { style: H.a.avatarAndButton },
                        this._renderAvatar(),
                        o.createElement(re.a, { style: H.a.buttonAffordance }),
                        r && t && o.createElement(ke, { buttonStyle: H.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return o.createElement(X.a, null, function (e) {
                    var t = e.windowWidth >= J.a.theme.breakpoints.medium
                    return o.createElement(
                      re.a,
                      { accessibilityState: { hidden: !0 }, style: H.a.avatar },
                      o.createElement(Q.a, {
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
                    re.a,
                    { style: H.a.banner },
                    o.createElement(ie.a, { ratio: J.a.theme.aspectRatios.profileBanner }),
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
                    re.a,
                    { style: H.a.names },
                    o.createElement(jt.a, {
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
          return o.createElement(tn.a, { script: [{ type: 'application/ld+json', innerHTML: r }] })
        },
        nn = r('ipry'),
        an = r('E4zi'),
        on = function (e) {
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
              author: Object(an.a)(a),
            }
          return (
            i && (s.relatedLink = [i.url, i.expanded_url]),
            o.createElement(tn.a, { script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(s, null, 2) }] })
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
        bn = r('zCf4')
      function gn(e, t) {
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
            ? gn(Object(r), !0).forEach(function (t) {
                N()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : gn(Object(r)).forEach(function (t) {
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
            n = j()(e)
          if (t) {
            var a = j()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      var vn = fe.a.fa98627a,
        En = fe.a.a2811f96,
        wn = fe.a.c6ea308b,
        On = fe.a.d67658c0,
        Pn = fe.a.ccc9153f,
        kn = fe.a.bab1f8b0,
        Cn = fe.a.a52b03a5,
        Sn = fe.a.cc3c6989,
        In = fe.a.add55c97,
        Fn = fe.a.d7b8eba9,
        xn = fe.a.c0098d49,
        jn = fe.a.c4af3561,
        Bn = fe.a.dbcaaab5,
        Nn = fe.a.hf162fb6,
        Tn = fe.a.ad7b2b38,
        Ln = fe.a.f19b4073,
        Rn = fe.a.ha62da97,
        Mn = fe.a.ica87fde,
        An = fe.a.e79ed125,
        Dn = fe.a.g8475f82,
        Un = fe.a.c9a1cb5d,
        Hn = fe.a.e7b201dd,
        Wn = fe.a.d09e12c4,
        zn = fe.a.gbf342a4,
        Vn = fe.a.eeab4adf,
        qn = fe.a.i144ee20,
        Gn = fe.a.j58e7b00,
        $n = fe.a.d834ab9c,
        Yn = { section: 'profile_interstitial' },
        Jn = Object(Zr.a)(function () {
          return Promise.all([r.e(0), r.e(106)]).then(r.bind(null, '8KtR'))
        }),
        Kn = Object(Zr.a)(function () {
          return Promise.all([r.e(0), r.e(106)]).then(r.bind(null, 'ivpD'))
        }),
        Qn = Object(Zr.a)(function () {
          return Promise.all([r.e(0), r.e(106)]).then(r.bind(null, 'ylAD'))
        }),
        Xn = 'likes',
        Zn = 'media',
        ea = 'reactions',
        ta = 'superfollows',
        ra = 'with_replies',
        na = 36e5,
        aa = Object(vr.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        oa = (function (e) {
          S()(r, e)
          var t = _n(r)
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
                  Kr.a,
                  { isRefreshing: n, onRefresh: a._handlePullToRefresh },
                  o.createElement(
                    re.a,
                    { style: sa.containerGrow },
                    o.createElement(
                      cn.a,
                      null,
                      o.createElement(mr.a, {
                        accessibilityLabel: Pn({ screenName: s }),
                        fetchStatus: l ? fr.a.LOADED : t,
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
                  e && o.createElement(qr, { onEducationSheetDismiss: a._handleOnDismissNftAvatarEducation }),
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
                  u = e === nn.a.SensitiveMedia || e === nn.a.OffensiveProfileContent,
                  d = u && (n.following || r || _r.b)
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
                a.setState({ userProfileInterstitialDismissed: !0 }), t(yn(yn(yn({}, r), Yn), {}, { action: 'click' }))
              }),
              N()(k()(a), '_handleOnDismissNftAvatarEducation', function () {
                a.setState({ showNftAvatarEducation: !1 })
              }),
              N()(k()(a), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  r = e.fetchStatus,
                  n = a.props.recordTTFL
                if ((r === fr.a.FAILED && (a._shouldRecordTTFL = !1), a._shouldRecordTTFL && t.length)) {
                  var o = t.some(function (e) {
                    return e.type === ur.b.Tweet
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
                  var o = Math.floor(n / na),
                    i = Math.floor(o / 24),
                    s = o % 24
                  return 0 === i
                    ? Ln({ hourCount: s })
                    : 0 === s
                    ? Tn({ dayCount: i })
                    : Nn({ dayCount: i, hourCount: s })
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
                        e._shouldShowProfileInterstitial() && a(yn(yn(yn({}, o), Yn), {}, { action: 'impression' }))
                      })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.fetchStatus,
                    n = t.recordTTFMC
                  if (e.fetchStatus !== r && r === fr.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (this._shouldRecordTTFMC && e.fetchStatus !== r && r === fr.a.LOADED) {
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
                      n(yn(yn(yn({}, a), Yn), {}, { action: 'impression' }))
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
                    h = d ? wn({ screenName: d.screen_name, fullName: d.name }) : void 0,
                    b = f ? '' : '@'.concat((d && d.screen_name) || u || '', ' '),
                    g = m ? null : o.createElement(hr.a, { getLocationState: aa(b), history: n }),
                    y =
                      d && !m
                        ? o.createElement(jt.a, {
                            isProtected: d.protected,
                            isVerified: d.verified,
                            name: d.name,
                            screenName: d.screen_name,
                            withScreenName: !1,
                          })
                        : vn,
                    _ = d && !m && r === fr.a.LOADED ? this._renderSubtitle(d) : void 0,
                    v = d && 'twitter://user?screen_name='.concat(d.screen_name),
                    E = d && 'https://twitter.com/'.concat(d.screen_name || ''),
                    w = d && On({ fullName: d.name, screenName: d.screen_name })
                  return o.createElement(en.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: b },
                    documentTitle: h,
                    history: n,
                    primaryContent: o.createElement(
                      dr.a,
                      { fab: g },
                      o.createElement($r.a, {
                        canonical: E,
                        description: null == d ? void 0 : d.description,
                        image: null == d ? void 0 : d.profile_image_url_https,
                        title: w,
                        type: 'profile',
                      }),
                      _r.b && d
                        ? o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(on, { user: d }),
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
                      o.createElement(mr.a, {
                        accessibilityLabel: Pn({ screenName: u }),
                        fetchStatus: d || m ? fr.a.LOADED : r,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      a
                        ? o.createElement(yr.a, { history: n, location: c, userId: null == d ? void 0 : d.id_str })
                        : null,
                    ),
                    rightControl: this._renderRightControl(),
                    sidebarContent: this._renderSidebarContent(),
                    subtitle: _,
                    title: y,
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
                        un.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        o.createElement(de.a, { promotedContent: t, userId: r.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    r = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(r, '/').concat(Xn)) > -1
                    ? o.createElement(sn.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(r, '/').concat(ea)) > -1
                    ? o.createElement(sn.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(r, '/').concat(Zn)) > -1
                    ? o.createElement(sn.a, { count: e.media_count, type: 'media' })
                    : o.createElement(sn.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? o.createElement(Jr.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(tr.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
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
                    _r.b && d && p ? o.createElement(rn, { screenName: p }) : _r.b ? o.createElement(Gr.a, null) : null,
                    o.createElement(dn.a, {
                      buttonText: t,
                      buttonType: r,
                      header: n,
                      message: a,
                      onButtonPress: i,
                      onSecondaryButtonPress: s,
                      secondaryButtonText: l,
                      secondaryButtonType: c,
                      style: la.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(br.a)(e),
                    r = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: r,
                    message: n,
                    buttonText: $n,
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
                    r = An({ screenName: t }),
                    n = o.createElement(
                      fe.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      o.createElement(Ue.b, { link: 'https://support.twitter.com/articles/117063' }, fe.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: r,
                    message: n,
                    buttonText: Vn,
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
                    n = Rn({ screenName: r }),
                    a = o.createElement(Ue.b, { color: 'gray700', weight: 'bold' }),
                    i = o.createElement(
                      re.a,
                      null,
                      o.createElement(
                        Ue.b,
                        { color: 'gray700', style: { paddingBottom: J.a.theme.spaces.space20 } },
                        o.createElement(
                          fe.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          o.cloneElement(a, null, fe.a.g6645d94({ screenName: r })),
                        ),
                      ),
                      o.createElement(
                        Ue.b,
                        { color: 'gray700', style: { paddingBottom: J.a.theme.spaces.space8 } },
                        o.createElement(
                          fe.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          o.cloneElement(a, null, fe.a.g08eceae({ screenName: r })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: i,
                    buttonText: qn,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: Gn,
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
                      fe.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      o.createElement(Ue.b, { link: 'https://support.twitter.com/articles/20172060' }, fe.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Mn, message: r })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    r = o.createElement(Ue.b, { style: { paddingBottom: J.a.theme.spaces.space20 } }),
                    n = o.createElement(Ue.b, { weight: 'bold' }),
                    a = o.createElement(Ue.b, { style: { paddingBottom: J.a.theme.spaces.space4 }, weight: 'bold' }),
                    i = o.createElement(
                      re.a,
                      null,
                      o.createElement(
                        Ue.b,
                        { style: { paddingBottom: J.a.theme.spaces.space20 } },
                        o.createElement(
                          fe.a.I18NFormatMessage,
                          { $i18n: 'a496f1c8' },
                          o.cloneElement(n, null, fe.a.e8bc24ae({ screenName: t })),
                        ),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'd0271e51' },
                        o.cloneElement(r, null, fe.a.ff050532),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        o.createElement(
                          Ue.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: J.a.theme.spaces.space20 },
                          },
                          fe.a.b48bd8bf,
                        ),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'h9bd2805' },
                        o.cloneElement(r, null, fe.a.ia457a19),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        o.cloneElement(a, null, fe.a.f5531a44),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        o.cloneElement(r, null, fe.a.h173a610),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        o.cloneElement(a, null, fe.a.ha985c95),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        o.cloneElement(r, null, fe.a.d5d82dd3),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        o.cloneElement(a, null, fe.a.i4b9b3d0),
                      ),
                      o.createElement(
                        fe.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        o.cloneElement(r, null, fe.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: jn, message: i })
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
                        ? o.createElement(Et.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                        : o.createElement(
                            fe.a.I18NFormatMessage,
                            { $i18n: 'f6fa2033' },
                            o.createElement(
                              Ue.b,
                              { link: 'https://support.twitter.com/articles/18311' },
                              fe.a.f3b1bdc1,
                            ),
                          )),
                    this._renderEmptyState({ header: Dn, message: e })
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
                    i = o.createElement(
                      Ue.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      a.map(function (e, t) {
                        return o.createElement(fn.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: zn, message: i })
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
                  return o.createElement(
                    re.a,
                    null,
                    o.createElement(
                      re.a,
                      { style: sa.withheldMessageRoot },
                      o.createElement(
                        Ue.b,
                        { align: 'center', size: 'title4', style: sa.withheldMessageHeader, weight: 'bold' },
                        zn,
                      ),
                      o.createElement(
                        Ue.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        a.map(function (e, t) {
                          return o.createElement(fn.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    o.createElement(mn.a, null),
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
                      fe.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      o.createElement(Ue.b, { link: 'https://support.twitter.com/articles/14016' }, fe.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: Wn, message: r })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Un, message: Hn })
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
                      var r = c ? xn : Fn
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
                          key: kn,
                          label: kn,
                        },
                        { to: { pathname: '/'.concat(i, '/').concat(ra), query: l }, key: Cn, label: Cn },
                        u
                          ? {
                              to: { pathname: '/'.concat(i, '/').concat(ta), query: l },
                              key: Sn,
                              label: Sn,
                              color: 'plum500',
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(i, '/').concat(Zn), query: l }, key: In, label: In, onClick: e() },
                        {
                          to: { pathname: '/'.concat(i, '/').concat(c ? ea : Xn), query: l },
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
                    o.createElement(rr.a, null, function (e) {
                      return o.createElement(hn.a, { accessibilityLabel: En, links: d(e) })
                    }),
                    o.createElement(
                      bn.e,
                      null,
                      o.createElement(bn.c, { exact: !0, path: '/intent/follow' }, o.createElement(Jn, a()({}, p, f))),
                      o.createElement(bn.c, { exact: !0, path: '/intent/user' }, o.createElement(Jn, a()({}, p, f))),
                      o.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Yr.H) },
                        o.createElement(Jn, a()({}, p, f, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      o.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Yr.H, '/').concat(ra) },
                        o.createElement(Jn, a()({}, p, f, { mode: 'with_replies' })),
                      ),
                      o.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Yr.H, '/').concat(ta) },
                        o.createElement(Jn, a()({}, p, f, { mode: 'superfollows' })),
                      ),
                      o.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Yr.H, '/').concat(Zn) },
                        o.createElement(Qn, p),
                      ),
                      o.createElement(
                        bn.c,
                        { exact: !0, path: '/'.concat(Yr.H, '/(').concat(Xn, '|').concat(ea, ')') },
                        o.createElement(Kn, p),
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
                  return n ? r(n).catch(t(pr.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    r = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(r(pr.a))
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
      N()(oa, 'contextType', U.a),
        N()(oa, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return o.createElement(cr, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return o.createElement(Xr, e)
          },
          recordTTFL: T.c,
          recordTTFMC: T.d,
        })
      var ia = Object(ln.a)(oa),
        sa = J.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        la = J.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        ca = function (e) {
          return o.createElement(_.a, { userId: e.user && e.user.id_str }, function (t) {
            var r = t.scribeNamespace
            return o.createElement(ia, a()({}, e, { scribeNamespace: r }))
          })
        }
      t.default = y(ca)
    },
  },
])
//# sourceMappingURL=WIPED
