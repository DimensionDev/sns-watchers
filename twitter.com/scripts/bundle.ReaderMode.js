;(window.webpackJsonp = window.webpackJsonp || []).push([
  [79, 201],
  {
    HQ0t: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        i = n('3XMw'),
        c = n.n(i),
        l = n('Q3sg'),
        s = n('rHpw'),
        u = c.a.g4782c0a,
        d = s.a.create(function (e) {
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
        var t = a.a.useContext(o.a),
          n = t.featureSwitches,
          r = t.userClaims,
          i = n.isTrue('subscriptions_blue_premium_labeling_enabled'),
          c = r.isTwitterBlueSubscriber(),
          s = e.style,
          p = e.text
        return c && i
          ? a.a.createElement(
              a.a.Fragment,
              null,
              p,
              a.a.createElement(l.a, { accessibilityLabel: u, style: [d.icon, s] }),
            )
          : p
      }
    },
    Q3sg: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        a = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return a(this, 'a', 'name', e)
          },
        },
      )
    },
    dgkZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ReaderModeScreen', function () {
          return et
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('WNMA'), n('KqXw'), n('2G9S'), n('MvUL'), n('ERkP')),
        i = n.n(o),
        c = n('v6aA'),
        l = n('XIWT'),
        s = n('MMRb'),
        u = n('1YZw'),
        d = n('XOJV'),
        p = n('G6rE'),
        m = n('rxPX'),
        f = n('0KEI'),
        h = function (e, t) {
          return t.match.params.screenName
        },
        b = function (e, t) {
          var n = h(0, t) || ''
          return p.e.selectByScreenName(e, n)
        },
        g = function (e, t) {
          var n,
            r,
            a = t.location,
            o = t.match
          return null !== (n = o.params) && void 0 !== n && n.tweetId
            ? o.params.tweetId
            : null !== (r = a.query) && void 0 !== r && r.tweet_id && 'string' == typeof a.query.tweet_id
            ? a.query.tweet_id
            : ''
        },
        y = function (e, t) {
          var n = g(0, t),
            r = d.a.selectHydrated(e, n)
          return (null == r ? void 0 : r.conversation_id_str) || ''
        },
        w = function (e, t) {
          var n,
            r = d.a.selectHydrated(e, g(0, t))
          return (null == r || null === (n = r.user) || void 0 === n ? void 0 : n.screen_name) || ''
        },
        v = function (e, t) {
          var n = d.a.selectHydrated(e, g(0, t))
          return (null == n ? void 0 : n.isBookmarked) || !1
        },
        O = Object(m.a)()
          .propsFromState(function () {
            return { authorScreenName: w, focalTweetId: g, isBookmarked: v, rootTweetId: y, screenName: h, user: b }
          })
          .propsFromActions(function () {
            return {
              addToast: u.b,
              bookmark: d.a.bookmark,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('READER_MODE_SCREEN'),
              setDrawerVisibility: s.setDrawerVisibility,
              unbookmark: d.a.unbookmark,
            }
          }),
        E = n('ymux'),
        k = n('AQ79'),
        C = n('3XMw'),
        _ = n.n(C),
        j = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        x = n.n(j),
        R = n('Lsrn'),
        S = n('k/Ka')
      function H(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                x()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(S.a)(
          'svg',
          P(
            P({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [R.a.root, e.style], viewBox: '0 0 24 24' },
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
        M = n('hACr'),
        D = n('lOQR'),
        I = n('yoO3'),
        B = n('wiP2'),
        F = n('MWbm'),
        N = n('rHpw'),
        A = n('I4+6'),
        z = n('fyKl'),
        W = n('CKsB'),
        U = n('cm6r'),
        K = n('t62R'),
        V = n('/yvb'),
        q = n('ML2/'),
        X = n('C25v'),
        Z = n('ZGdk'),
        Q = n('IMYl'),
        J = n('witV'),
        G = n('2lds')
      function Y(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                x()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ee = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(S.a)(
          'svg',
          $(
            $({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [R.a.root, e.style], viewBox: '0 0 39 24' },
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
      ee.metadata = { width: 39, height: 24 }
      var te = ee,
        ne = n('hOZg'),
        re = _.a.gb303813,
        ae = _.a.d6d9aab6,
        oe = _.a.bb89cf45,
        ie = _.a.a739d4ba,
        ce = _.a.d5270434,
        le = _.a.jcf3ff56,
        se = _.a.f1252ac7,
        ue = _.a.daa0da04,
        de = _.a.ba5256b1,
        pe = N.a.isDarkMode() ? N.a.theme.colors.gray50 : N.a.theme.colors.gray0,
        me = 'body',
        fe = 'headline1',
        he = 'title3',
        be = A.a.generate({
          backgroundColor: N.a.theme.colors.primary,
          color: N.a.theme.colors.cellBackground,
          customFocusBackgroundColor: pe,
          customHoverBackgroundColor: pe,
          customPressedBackgroundColor: pe,
        }),
        ge = function (e) {
          var t = e.isBookmarked,
            n = e.isMobileLayout,
            r = e.onAddBookmark,
            o = e.onAddBookmarkFolder,
            l = e.onClose,
            s = e.onFontSizeChange,
            u = e.onRemoveBookmark,
            d = e.tweetTextSize,
            p = i.a.useContext(c.a).featureSwitches.isTrue('responsive_web_reader_extended_menu'),
            m = i.a.useState(!1),
            f = a()(m, 2),
            h = f[0],
            b = f[1],
            g = i.a.useState(!1),
            y = a()(g, 2),
            w = y[0],
            v = y[1],
            O = function () {
              b(!h)
            },
            E = function () {
              v(!w)
            },
            k = function () {
              r(), b(!1)
            },
            C = function () {
              o(), b(!1)
            },
            _ = function () {
              u(), b(!1)
            },
            j = function (e) {
              return function () {
                s(e), v(!1)
              }
            },
            x = function () {
              return h
                ? i.a.createElement(
                    z.default,
                    {
                      isFixed: !0,
                      onDismiss: O,
                      preferredHorizontalOrientation: 'right',
                      preferredVerticalOrientation: 'up',
                    },
                    t
                      ? i.a.createElement(W.a, { Icon: q.a, actionText: oe, onClick: _ })
                      : i.a.createElement(W.a, { Icon: X.a, actionText: ae, onClick: k }),
                    i.a.createElement(W.a, { Icon: Z.a, actionText: ie, onClick: C }),
                  )
                : null
            },
            R = function (e) {
              return e === d
            },
            S = function () {
              return i.a.createElement(F.a, { style: ye.emptyIconSpacer })
            },
            H = function () {
              return w
                ? i.a.createElement(
                    z.default,
                    {
                      isFixed: !0,
                      onDismiss: E,
                      preferredHorizontalOrientation: 'right',
                      preferredVerticalOrientation: 'up',
                    },
                    i.a.createElement(W.a, { Icon: R(me) ? Q.a : S, actionText: ue, onClick: j(me) }),
                    i.a.createElement(W.a, { Icon: R(fe) ? Q.a : S, actionText: se, onClick: j(fe) }),
                    i.a.createElement(W.a, { Icon: R(he) ? Q.a : S, actionText: le, onClick: j(he) }),
                  )
                : null
            },
            P = function () {
              return t
                ? i.a.createElement(J.a, { style: n ? ye.iconMobile : ye.icon })
                : i.a.createElement(G.a, { style: n ? ye.iconMobile : ye.icon })
            }
          return i.a.createElement(
            F.a,
            { style: [ye.actionBarWrapper, n ? ye.actionBarWrapperMobile : void 0] },
            i.a.createElement(
              F.a,
              {
                onClick: function (e) {
                  e.stopPropagation()
                },
                style: n ? ye.outerContainer : void 0,
              },
              i.a.createElement(
                F.a,
                { style: n ? ye.actionBarMobile : ye.actionBar },
                n && p
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        U.a,
                        { accessibilityLabel: ce, interactiveStyles: be, onPress: l, style: ye.actionItem },
                        i.a.createElement(K.b, { color: 'gray700' }, ce),
                      ),
                      i.a.createElement(
                        U.a,
                        { accessibilityLabel: re, interactiveStyles: be, onPress: O, style: ye.actionItem },
                        P(),
                      ),
                      x(),
                      i.a.createElement(
                        U.a,
                        { accessibilityLabel: de, interactiveStyles: be, onPress: E, style: ye.actionItem },
                        i.a.createElement(te, { style: n ? ye.iconMobile : ye.icon }),
                      ),
                      H(),
                    )
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        F.a,
                        { style: ye.buttonContainer },
                        i.a.createElement(V.a, {
                          icon: i.a.createElement(ne.a, { style: n ? ye.iconMobile : ye.icon }),
                          onClick: l,
                          type: 'brandText',
                        }),
                      ),
                      p
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                              F.a,
                              { style: ye.buttonContainer },
                              i.a.createElement(V.a, { icon: P(), onClick: O, type: 'brandText' }),
                              x(),
                            ),
                            i.a.createElement(
                              F.a,
                              null,
                              i.a.createElement(V.a, {
                                icon: i.a.createElement(te, { style: n ? ye.iconMobile : ye.icon }),
                                onClick: E,
                                type: 'brandText',
                              }),
                              H(),
                            ),
                          )
                        : null,
                    ),
              ),
            ),
          )
        },
        ye = N.a.create(function (e) {
          return {
            actionBarWrapper: {
              backfaceVisibility: 'hidden',
              height: '100%',
              width: '100%',
              position: 'fixed',
              left: 0,
              bottom: 0,
            },
            actionBarWrapperMobile: { height: 0 },
            actionBar: {
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'absolute',
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
        we = n('Qwev'),
        ve = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        Oe = function (e, t) {
          return t.module.selectTopFetchStatus(e)
        },
        Ee = Object(m.a)().propsFromState(function () {
          return { moduleInitialFetchStatus: ve, moduleTopFetchStatus: Oe }
        }),
        ke = n('yhJW'),
        Ce = n('MDbM'),
        _e = n('BV3T'),
        je = n('VTxf'),
        xe = n('SrIh'),
        Re = n('fTQJ'),
        Se = n('7n04'),
        He = n('wgnn'),
        Pe = _.a.c299a6cf,
        Te = function (e) {
          return function (t, n) {
            return t && t.content && !!t.content.id && t.content.id === e
          }
        },
        Le = Ee(function (e) {
          var t = e.focalTweetId,
            n = e.module,
            r = e.moduleInitialFetchStatus,
            a = e.moduleTopFetchStatus,
            o = e.rootTweetId,
            c = e.tweetTextSize,
            l = Object(ke.a)({
              isCurrentUserRootAuthor: !0,
              withFocalTweetMedia: !0,
              isTransparentCursorsEnabled: !0,
              isReaderMode: !0,
              tweetTextSize: c,
            }),
            s = (o !== t && r === Ce.a.LOADING) || a === Ce.a.LOADING
          return i.a.createElement(Re.a, {
            anchoring: Se.a,
            entryConfiguration: l,
            header: s ? i.a.createElement(we.a, null) : void 0,
            isInitialFocusEntry: o !== t ? Te(t) : void 0,
            key: c,
            module: n,
            olderAtTop: !0,
            renderEmptyState: function () {
              return i.a.createElement(je.a, null)
            },
            renderUnavailable: function (e) {
              switch (e) {
                case He.a.NOT_FOUND:
                  return i.a.createElement(je.a, null)
                case He.a.NOT_ALLOWED:
                  return i.a.createElement(_e.a, null)
                default:
                  return Object(xe.a)('Unhandled timeline unavailable reason: '.concat(e)), null
              }
            },
            title: Pe,
          })
        }),
        Me = n('Rp9C'),
        De = n('7JQg'),
        Ie = n('N5qz'),
        Be = n('Es6L'),
        Fe = n('HQ0t'),
        Ne = n('k89r'),
        Ae = n('aITJ'),
        ze = n('yw4N'),
        We = n('0FVZ'),
        Ue = n('cHvH'),
        Ke = n('oQhu'),
        Ve = n('fs1G'),
        qe = _.a.b59d8d10,
        Xe = _.a.h5d6c720,
        Ze = _.a.af9c8a3d,
        Qe = _.a.c299a6cf,
        Je = _.a.i9a4ca8a,
        Ge = { page: 'thread', section: 'reader_mode' },
        Ye = Object(Ke.a)(function (e, t, n) {
          return Object(E.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n, timelineIdPrefix: 'reader' })
        }),
        $e = Object(Ke.a)(function (e, t) {
          var n = (t ? Me.a.getUserItem(t) : {}).is_viewer_follows_user,
            r = void 0 !== n && n
          return { items: [Me.a.forThread(e, r)], tweet_id: e }
        }),
        et = function (e) {
          var t = e.addToast,
            n = e.authorScreenName,
            r = e.bookmark,
            o = e.createLocalApiErrorHandler,
            s = e.focalTweetId,
            u = e.history,
            d = e.isBookmarked,
            p = e.location,
            m = e.rootTweetId,
            f = e.screenName,
            h = e.setDrawerVisibility,
            b = e.unbookmark,
            g = e.user,
            y = i.a.useContext(c.a).featureSwitches,
            w = Object(Ne.a)(),
            v = i.a.useState('headline1'),
            O = a()(v, 2),
            E = O[0],
            C = O[1],
            _ = i.a.useCallback(
              function () {
                var e = $e(s, g)
                g &&
                  s &&
                  w.scribe({
                    action: 'impression',
                    element: 'view_thread',
                    page: 'thread',
                    section: 'reader_mode',
                    data: e,
                  })
              },
              [w, s, g],
            )
          i.a.useEffect(
            function () {
              _()
            },
            [_],
          ),
            i.a.useEffect(
              function () {
                h(k.b.CLOSED)
              },
              [h],
            )
          var j = function () {
              u.goBack()
            },
            x = function () {
              w.scribe({
                action: 'click',
                element: 'reader_mode_menu_exit_button',
                page: 'thread',
                section: 'reader_mode',
              }),
                u.goBack()
            },
            R = function (e) {
              e.stopPropagation()
            },
            S = i.a.useCallback(
              function () {
                return !(!f || !n) && f.toLowerCase() !== n.toLowerCase()
              },
              [n, f],
            ),
            H = i.a.useCallback(
              function () {
                var e = n && s ? '/'.concat(n, '/thread/').concat(s) : '/'
                u.replace({ pathname: e, query: p.query, state: p.state })
              },
              [n, s, u, p.query, p.state],
            ),
            P = function () {
              w.scribe({
                action: 'click',
                element: 'reader_mode_header_icon_disable',
                page: 'thread',
                section: 'reader_mode',
              }),
                u.push({ pathname: T(), query: p.query, state: p.state })
            },
            T = function () {
              return n && s ? '/'.concat(n, '/status/').concat(s) : '/'
            }
          i.a.useEffect(
            function () {
              s && n && S() && H()
            },
            [n, s, H, S],
          )
          var L = function () {
              u.push({ pathname: '/i/bookmarks/add/', state: { tweet_id: s } })
            },
            N = function () {
              r(s).then(
                function () {
                  t({ text: qe })
                },
                function (e) {
                  o(l.a)(e)
                },
              )
            },
            A = function () {
              b(s).then(
                function () {
                  t({ text: Xe })
                },
                function (e) {
                  o(l.a)(e)
                },
              )
            },
            z = function (e, t) {
              var n,
                r = Object(Be.a)()
              e && r ? (n = tt.containerOneCol) : e && (n = tt.containerOneColSmall)
              var a = i.a.createElement(ge, {
                isBookmarked: d,
                isMobileLayout: t,
                onAddBookmark: N,
                onAddBookmarkFolder: L,
                onClose: x,
                onFontSizeChange: C,
                onRemoveBookmark: A,
                tweetTextSize: E,
              })
              return i.a.createElement(
                F.a,
                { onClick: j, style: tt.pageWrapper },
                i.a.createElement(
                  ze.a,
                  { accessibilityExpanded: !0, style: tt.viewport },
                  i.a.createElement(
                    F.a,
                    { style: [tt.root, e ? tt.rootMobile : void 0] },
                    e ? null : a,
                    i.a.createElement(
                      F.a,
                      { onClick: R, style: [tt.container, n] },
                      i.a.createElement(
                        F.a,
                        { style: tt.innerWrapper },
                        i.a.createElement(Le, {
                          focalTweetId: s,
                          module: Ye(s, { isReaderMode: !0 }, y),
                          rootTweetId: m,
                          tweetTextSize: E,
                        }),
                        e ? a : null,
                      ),
                    ),
                  ),
                ),
              )
            },
            W = function () {
              return D.a.openApp('twitter://thread/'.concat(s))
            },
            U = function () {
              var e = Ae.b.isMobileOS()
              return i.a.createElement(
                F.a,
                { style: tt.mobileAppBarRightControl },
                e ? i.a.createElement(V.a, { onClick: W }, Ze) : null,
                i.a.createElement(V.a, { accessibilityLabel: Je, icon: nt, onClick: P, type: 'brandText' }),
              )
            }
          return i.a.createElement(Ue.a, null, function (e) {
            return (function (e) {
              var t,
                n = Ie.a.isOneColumnSquishedLayout(e),
                r = n || Ie.a.isOneColumnLayout(e)
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(B.a.Configure, {
                  onBackClick: x,
                  rightControl: U(),
                  sideNav: i.a.createElement(i.a.Fragment, null),
                  title: i.a.createElement(Fe.a, { style: tt.titleIcon, text: Qe }),
                  withForceTopNav: n,
                }),
                i.a.createElement(
                  De.b,
                  { data: { tweet_id: s }, namespace: Ge },
                  i.a.createElement(I.a, null, n ? z(r, n) : i.a.createElement(We.a.Modal, null, z(r, n))),
                ),
                i.a.createElement(M.a, {
                  handlers: {
                    esc:
                      ((t = window.location.pathname.match(/\/@?([_\w+]+)\/thread\/([\d]+)\/?/) || []),
                      a()(t, 1)[0] ? j : Ve.a),
                  },
                }),
              )
            })(e.windowWidth)
          })
        },
        tt = N.a.create(function (e) {
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
            pageWrapper: {
              backgroundColor: e.colors.cellBackground,
              cursor: 'pointer',
              height: '100%',
              left: 0,
              position: 'fixed',
              right: 0,
              width: '100%',
            },
            rightControlAction: { height: '100%' },
            root: { height: '100%', flexDirection: 'row', paddingTop: e.spaces.space56, width: '100%' },
            rootMobile: { paddingTop: 0 },
            titleIcon: { marginBottom: e.spaces.space1 },
            viewport: { backgroundColor: e.colors.cellBackground, overflow: 'auto', width: '100%', maxHeight: '100%' },
          }
        }),
        nt = i.a.createElement(L, { style: tt.icon }),
        rt = O(et)
      t.default = rt
    },
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return N
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        f = n.n(m),
        h = n('AuHH'),
        b = n.n(h),
        g = n('KEM+'),
        y = n.n(g),
        w = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        v = n.n(w),
        O = n('zfvc'),
        E = n('jHwr'),
        k = n('VY6S'),
        C = n('w9LO'),
        _ = n('//dC'),
        j = n('lHOd'),
        x = n('Oe3h'),
        R = n('0FVZ'),
        S = n('7N4s'),
        H = n('cHvH'),
        P = n('rHpw'),
        T = n('i4Oy'),
        L = n('shC7'),
        M = n('MWbm')
      function D(e) {
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
          var n,
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      function I(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var F = P.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: P.a.absoluteFillObject,
            mask: B(B({}, P.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: B(B({}, P.a.absoluteFillObject), {}, { bottom: void 0 }),
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
        N = (function (e) {
          p()(n, e)
          var t = D(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              y()(u()(a), '_handleAnimateComplete', function () {
                var e = a.props.onAnimateComplete
                e && e()
              }),
              y()(u()(a), '_handleEsc', function (e) {
                var t = a.props.onDismiss,
                  n = e.altKey,
                  r = e.ctrlKey,
                  o = e.key,
                  i = e.metaKey
                !(n || r || i) && 'Escape' === o && t()
              }),
              y()(u()(a), '_receiveBodyRectHelperRef', function (e) {
                e && a._bodyRectHelperNode !== e && ((a._bodyRectHelperNode = e), a._scheduleUpdate())
              }),
              y()(u()(a), '_receiveAnchorRef', function (e) {
                e && a._anchorNode !== e && ((a._anchorNode = e), a._scheduleUpdate())
              }),
              y()(u()(a), '_receiveContentRef', function (e) {
                e && a._contentNode !== e && ((a._contentNode = e), a._scheduleUpdate())
              }),
              y()(u()(a), '_updatePosition', function () {
                if (
                  a._mounted &&
                  (a._anchorNode || a.props.position) &&
                  a._contentNode &&
                  a._contentNode instanceof window.HTMLElement &&
                  a._bodyRectHelperNode &&
                  a._bodyRectHelperNode instanceof window.HTMLElement
                ) {
                  var e = a._contentNode.scrollHeight,
                    t = a._contentNode.scrollWidth,
                    n = a._bodyRectHelperNode.getBoundingClientRect(),
                    r = n.left,
                    o = n.top,
                    i = n.width,
                    c = T.a.get('window'),
                    l = c.height,
                    s = c.width,
                    u = { left: 0, top: 0, height: 0, width: 0 }
                  a.props.position
                    ? (u = B(B({}, u), a.props.position))
                    : a._anchorNode &&
                      a._anchorNode instanceof window.HTMLElement &&
                      (u = a._anchorNode.getBoundingClientRect())
                  var d = u,
                    p = d.height,
                    m = d.left,
                    f = d.top,
                    h = d.width,
                    b = s - i,
                    g = m - r,
                    y = f - o,
                    w = m + h >= t,
                    v = f + p >= e,
                    O = s - m >= t,
                    E = l - f >= e,
                    k = a.props.preferredVerticalOrientation,
                    C = (function (e) {
                      return L.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(a.props.preferredHorizontalOrientation),
                    _ =
                      a.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          r = e.verticalPreference
                        return (n && t) || (!n && !t) ? r : n ? 'up' : 'down'
                      })({ verticalPreference: k, canOrientUp: v, canOrientDown: E }),
                    j =
                      a.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          r = e.horizontalPreference
                        return !t || ('left' !== r && n) ? 'right' : 'left'
                      })({ horizontalPreference: C, canOrientLeft: w, canOrientRight: O }),
                    x = a.props.isFixed ? m : g,
                    R = a.props.isFixed ? f : y,
                    S = 'up' === _ ? R + p - e : R,
                    H = 'left' === j ? s - x - h - b : s - x - t - b
                  a.setState({ top: Math.max(S, 0), right: H, verticalOrientation: _, horizontalOrientation: j })
                }
              }),
              (a.state = Object.freeze({})),
              (a._scheduleUpdate = Object(E.a)(a._updatePosition, window.requestAnimationFrame)),
              (a._scheduleDebouncedUpdate = Object(k.a)(a._scheduleUpdate, 250)),
              a
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), T.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), T.a.removeEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.animateInDuration,
                    r = t.animateType,
                    o = t.children,
                    i = t.isFixed,
                    c = t.onDismiss,
                    l = t.withKeyboardNavigation,
                    s = this.state,
                    u = s.right,
                    d = s.top,
                    p = s.verticalOrientation,
                    m = void 0 === d,
                    f = 'calc(100vh - '.concat(d || 0, 'px)'),
                    h = [
                      F.content,
                      m && F.contentInitialRender,
                      i && [F.contentFixed, { maxHeight: f }],
                      {
                        top: d,
                        right: L.a.getConstants().isRTL ? void 0 : u,
                        left: L.a.getConstants().isRTL ? u : void 0,
                      },
                    ]
                  return v.a.createElement(
                    M.a,
                    { ref: this._receiveAnchorRef, style: F.anchor },
                    v.a.createElement(
                      R.a.Dropdown,
                      null,
                      v.a.createElement(j.a.Consumer, null, function (t) {
                        return v.a.createElement(S.b.Consumer, null, function (i) {
                          var s = i.isModal
                          return v.a.createElement(
                            _.a,
                            { history: t, isModal: s, onDismiss: c },
                            v.a.createElement(
                              C.a,
                              { withKeyboardNavigation: l },
                              v.a.createElement(M.a, { onClick: c, style: F.mask }),
                              v.a.createElement(M.a, { ref: e._receiveBodyRectHelperRef, style: F.bodyRectHelper }),
                              v.a.createElement(H.a, null, function (t) {
                                var i = t.windowWidth
                                return v.a.createElement(
                                  M.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: e._handleEsc,
                                    ref: e._receiveContentRef,
                                    style: [i < P.a.theme.breakpoints.medium ? F.rootNarrow : F.rootWide, h],
                                  },
                                  m && 'slide' === r
                                    ? o
                                    : v.a.createElement(
                                        O.b,
                                        {
                                          animateMount: 'up' !== p,
                                          duration: n,
                                          onAnimateComplete: e._handleAnimateComplete,
                                          show: !0,
                                          type: r,
                                        },
                                        function (e) {
                                          var t = e.isAnimating
                                          return v.a.createElement(
                                            x.a,
                                            { id: 'Dropdown', minimizeReporting: t },
                                            function (e, t) {
                                              return v.a.createElement(M.a, a()({ ref: e() }, t({})), o)
                                            },
                                          )
                                        },
                                      ),
                                )
                              }),
                            ),
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
        })(v.a.Component)
      y()(N, 'defaultProps', {
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
          r = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(r)), n
        }
      }
    },
    lOQR: function (e, t, n) {
      'use strict'
      n('hBpG')
      var r = n('6/RC'),
        a = n.n(r),
        o = n('aITJ'),
        i = {
          setLocation: function (e) {
            document.location = e
          },
          getAppStoreURLs: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah',
              t = c(e),
              n = [t.android, t.ios, t.windows],
              r = n.find(function (e) {
                return e.matches()
              })
            return r ? [r] : n
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
            a.a.canUseDOM && i.setLocation(e)
          },
        },
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah'
          return {
            android: {
              platform: 'android',
              matches: function () {
                return o.b.isAndroid()
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
                return o.b.isIOS()
              },
              url: 'itmss://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
              webUrl: 'https://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
            },
            windows: {
              platform: 'windows',
              matches: function () {
                return o.b.isWindowsPhone()
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
