;(window.webpackJsonp = window.webpackJsonp || []).push([
  [78, 196],
  {
    HQ0t: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('v6aA'),
        a = n('3XMw'),
        i = n.n(a),
        c = n('Q3sg'),
        l = n('rHpw'),
        s = i.a.g4782c0a,
        u = l.a.create(function (e) {
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
        var t = r.useContext(o.a),
          n = t.featureSwitches,
          a = t.userClaims,
          i = n.isTrue('subscriptions_blue_premium_labeling_enabled'),
          l = a.isTwitterBlueSubscriber(),
          d = e.style,
          p = e.text
        return l && i
          ? r.createElement(r.Fragment, null, p, r.createElement(c.a, { accessibilityLabel: s, style: [u.icon, d] }))
          : p
      }
    },
    Q3sg: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        o = n('gIHd')
      r(
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
          return qe
        })
      var r = n('ddV6'),
        o = n.n(r),
        a = (n('WNMA'), n('KqXw'), n('2G9S'), n('MvUL'), n('ERkP')),
        i = n('v6aA'),
        c = n('XIWT'),
        l = n('MMRb'),
        s = n('1YZw'),
        u = n('XOJV'),
        d = n('G6rE'),
        p = n('rxPX'),
        m = n('0KEI'),
        f = function (e, t) {
          return t.match.params.screenName
        },
        h = function (e, t) {
          var n = f(0, t) || ''
          return d.e.selectByScreenName(e, n)
        },
        b = function (e, t) {
          var n,
            r,
            o = t.location,
            a = t.match
          return null !== (n = a.params) && void 0 !== n && n.tweetId
            ? a.params.tweetId
            : null !== (r = o.query) && void 0 !== r && r.tweet_id && 'string' == typeof o.query.tweet_id
            ? o.query.tweet_id
            : ''
        },
        g = function (e, t) {
          var n = b(0, t),
            r = u.a.selectHydrated(e, n)
          return (null == r ? void 0 : r.conversation_id_str) || ''
        },
        y = function (e, t) {
          var n,
            r = u.a.selectHydrated(e, b(0, t))
          return (null == r || null === (n = r.user) || void 0 === n ? void 0 : n.screen_name) || ''
        },
        w = function (e, t) {
          var n = u.a.selectHydrated(e, b(0, t))
          return (null == n ? void 0 : n.isBookmarked) || !1
        },
        v = Object(p.a)()
          .propsFromState(function () {
            return { authorScreenName: y, focalTweetId: b, isBookmarked: w, rootTweetId: g, screenName: f, user: h }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              bookmark: u.a.bookmark,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('READER_MODE_SCREEN'),
              setDrawerVisibility: l.setDrawerVisibility,
              unbookmark: u.a.unbookmark,
            }
          }),
        O = n('ymux'),
        E = n('AQ79'),
        k = n('3XMw'),
        C = n.n(k),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        j = n.n(_),
        R = n('Lsrn'),
        x = n('k/Ka')
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
                j()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var L = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(x.a)(
          'svg',
          P(
            P({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [R.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M20.75 3.25h-6.49c-.9 0-1.71.39-2.26 1.01-.55-.62-1.36-1.01-2.25-1.01H3.26C2.01 3.25 1 4.25 1 5.48v11.97c0 1.21 1.01 2.21 2.26 2.21h6.62c.57 0 1.16.16 1.47.73.03.04.2.36.65.36s.6-.33.62-.36c.23-.46.66-.75 1.51-.73h6.62c1.24 0 2.25-1 2.25-2.21V5.48c0-1.23-1.01-2.23-2.25-2.23zM8.9 15.28H4.86c-.42 0-.75-.33-.75-.74s.33-.75.75-.75H8.9c.41 0 .75.34.75.75s-.34.74-.75.74zm0-3.08H4.86c-.42 0-.75-.34-.75-.74 0-.42.33-.75.75-.75H8.9c.41 0 .75.33.75.75 0 .4-.34.74-.75.74zm0-3.08H4.86c-.42 0-.75-.33-.75-.74s.33-.75.75-.75H8.9c.41 0 .75.34.75.75s-.34.74-.75.74zm10.24 6.16h-4.03c-.42 0-.75-.33-.75-.74s.33-.75.75-.75h4.03c.42 0 .75.34.75.75s-.33.74-.75.74zm0-3.08h-4.03c-.42 0-.75-.34-.75-.74 0-.42.33-.75.75-.75h4.03c.42 0 .75.33.75.75 0 .4-.33.74-.75.74zm0-3.08h-4.03c-.42 0-.75-.34-.75-.74 0-.41.33-.75.75-.75h4.03c.42 0 .75.34.75.75 0 .4-.33.74-.75.74z',
            }),
          ),
        )
      }
      L.metadata = { width: 24, height: 24 }
      var M = L,
        S = n('hACr'),
        D = n('lOQR'),
        B = n('yoO3'),
        T = n('wiP2'),
        I = n('fs1G'),
        N = n('MWbm'),
        A = n('rHpw'),
        F = n('I4+6'),
        z = n('fyKl'),
        W = n('CKsB'),
        U = n('cm6r'),
        K = n('t62R'),
        V = n('/yvb'),
        q = n('ML2/'),
        X = n('C25v'),
        Z = n('ZGdk'),
        Q = n('witV'),
        J = n('2lds')
      function G(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                j()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var $ = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(x.a)(
          'svg',
          Y(
            Y({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [R.a.root, e.style], viewBox: '0 0 39 24' },
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M30 2.17h-5.79l-7.2 19.66h5.01l1.44-4.43h7.25l1.44 4.43h5.05L30 2.17zm-5.4 11.79l1.69-5.17c.27-.92.58-1.92.77-2.99h.06c.19 1.07.5 2.07.77 2.99l1.69 5.17H24.6zM10.62 8.49H6.69L1.8 21.83h3.4l.98-3h4.92l.97 3h3.43L10.62 8.49zM6.95 16.5l1.15-3.52c.18-.62.39-1.29.52-2.03h.04c.13.74.34 1.41.52 2.03l1.15 3.52H6.95z',
            }),
          ),
        )
      }
      $.metadata = { width: 39, height: 24 }
      var ee = $,
        te = n('hOZg'),
        ne = C.a.gb303813,
        re = C.a.d6d9aab6,
        oe = C.a.bb89cf45,
        ae = C.a.a739d4ba,
        ie = C.a.d5270434,
        ce = C.a.ba5256b1,
        le = A.a.isDarkMode() ? A.a.theme.colors.gray50 : A.a.theme.colors.gray0,
        se = F.a.generate({
          backgroundColor: A.a.theme.colors.primary,
          color: A.a.theme.colors.cellBackground,
          customFocusBackgroundColor: le,
          customHoverBackgroundColor: le,
          customPressedBackgroundColor: le,
        }),
        ue = function (e) {
          var t = e.isBookmarked,
            n = e.isMobileLayout,
            r = e.onAddBookmark,
            c = e.onAddBookmarkFolder,
            l = e.onClose,
            s = e.onRemoveBookmark,
            u = a.useContext(i.a).featureSwitches.isTrue('responsive_web_reader_extended_menu'),
            d = a.useState(!1),
            p = o()(d, 2),
            m = p[0],
            f = p[1],
            h = function () {
              f(!m)
            },
            b = function () {
              r(), f(!1)
            },
            g = function () {
              c(), f(!1)
            },
            y = function () {
              s(), f(!1)
            },
            w = function () {
              return m
                ? a.createElement(
                    z.default,
                    {
                      isFixed: !0,
                      onDismiss: h,
                      preferredHorizontalOrientation: 'right',
                      preferredVerticalOrientation: 'up',
                    },
                    t
                      ? a.createElement(W.a, { Icon: q.a, actionText: oe, onClick: y })
                      : a.createElement(W.a, { Icon: X.a, actionText: re, onClick: b }),
                    a.createElement(W.a, { Icon: Z.a, actionText: ae, onClick: g }),
                  )
                : null
            },
            v = function () {
              return t
                ? a.createElement(Q.a, { style: n ? de.iconMobile : de.icon })
                : a.createElement(J.a, { style: n ? de.iconMobile : de.icon })
            }
          return a.createElement(
            N.a,
            { style: [de.actionBarWrapper, n ? de.actionBarWrapperMobile : void 0] },
            a.createElement(
              N.a,
              {
                onClick: function (e) {
                  e.stopPropagation()
                },
                style: n ? de.outerContainer : void 0,
              },
              a.createElement(
                N.a,
                { style: n ? de.actionBarMobile : de.actionBar },
                n && u
                  ? a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(
                        U.a,
                        { accessibilityLabel: ie, interactiveStyles: se, onPress: l, style: de.actionItem },
                        a.createElement(K.b, { color: 'gray700' }, ie),
                      ),
                      a.createElement(
                        U.a,
                        { accessibilityLabel: ne, interactiveStyles: se, onPress: h, style: de.actionItem },
                        v(),
                      ),
                      w(),
                      a.createElement(
                        U.a,
                        { accessibilityLabel: ce, interactiveStyles: se, onPress: I.a, style: de.actionItem },
                        a.createElement(ee, { style: n ? de.iconMobile : de.icon }),
                      ),
                    )
                  : a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(
                        N.a,
                        { style: de.buttonContainer },
                        a.createElement(V.a, {
                          icon: a.createElement(te.a, { style: n ? de.iconMobile : de.icon }),
                          onClick: l,
                          type: 'brandText',
                        }),
                      ),
                      u
                        ? a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                              N.a,
                              { style: de.buttonContainer },
                              a.createElement(V.a, { icon: v(), onClick: h, type: 'brandText' }),
                              w(),
                            ),
                            a.createElement(
                              N.a,
                              null,
                              a.createElement(V.a, {
                                icon: a.createElement(ee, { style: n ? de.iconMobile : de.icon }),
                                onClick: I.a,
                                type: 'brandText',
                              }),
                            ),
                          )
                        : null,
                    ),
              ),
            ),
          )
        },
        de = A.a.create(function (e) {
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
        pe = n('Qwev'),
        me = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        fe = function (e, t) {
          return t.module.selectTopFetchStatus(e)
        },
        he = Object(p.a)().propsFromState(function () {
          return { moduleInitialFetchStatus: me, moduleTopFetchStatus: fe }
        }),
        be = n('yhJW'),
        ge = n('MDbM'),
        ye = n('BV3T'),
        we = n('VTxf'),
        ve = n('SrIh'),
        Oe = n('fTQJ'),
        Ee = n('7n04'),
        ke = n('wgnn'),
        Ce = C.a.c299a6cf,
        _e = function (e) {
          return function (t, n) {
            return t && t.content && !!t.content.id && t.content.id === e
          }
        },
        je = he(function (e) {
          var t = e.focalTweetId,
            n = e.module,
            r = e.moduleInitialFetchStatus,
            o = e.moduleTopFetchStatus,
            i = e.rootTweetId,
            c = Object(be.a)({
              isCurrentUserRootAuthor: !0,
              withFocalTweetMedia: !0,
              isTransparentCursorsEnabled: !0,
              isReaderMode: !0,
            }),
            l = (i !== t && r === ge.a.LOADING) || o === ge.a.LOADING
          return a.createElement(Oe.a, {
            anchoring: Ee.a,
            entryConfiguration: c,
            header: l ? a.createElement(pe.a, null) : void 0,
            isInitialFocusEntry: i !== t ? _e(t) : void 0,
            module: n,
            olderAtTop: !0,
            renderEmptyState: function () {
              return a.createElement(we.a, null)
            },
            renderUnavailable: function (e) {
              switch (e) {
                case ke.a.NOT_FOUND:
                  return a.createElement(we.a, null)
                case ke.a.NOT_ALLOWED:
                  return a.createElement(ye.a, null)
                default:
                  return Object(ve.a)('Unhandled timeline unavailable reason: '.concat(e)), null
              }
            },
            title: Ce,
          })
        }),
        Re = n('Rp9C'),
        xe = n('7JQg'),
        He = n('N5qz'),
        Pe = n('Es6L'),
        Le = n('HQ0t'),
        Me = n('k89r'),
        Se = n('aITJ'),
        De = n('yw4N'),
        Be = n('0FVZ'),
        Te = n('cHvH'),
        Ie = n('oQhu'),
        Ne = C.a.b59d8d10,
        Ae = C.a.h5d6c720,
        Fe = C.a.af9c8a3d,
        ze = C.a.c299a6cf,
        We = C.a.i9a4ca8a,
        Ue = { page: 'thread', section: 'reader_mode' },
        Ke = Object(Ie.a)(function (e, t, n) {
          return Object(O.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n, timelineIdPrefix: 'reader' })
        }),
        Ve = Object(Ie.a)(function (e, t) {
          var n = (t ? Re.a.getUserItem(t) : {}).is_viewer_follows_user,
            r = void 0 !== n && n
          return { items: [Re.a.forThread(e, r)], tweet_id: e }
        }),
        qe = function (e) {
          var t = e.addToast,
            n = e.authorScreenName,
            r = e.bookmark,
            l = e.createLocalApiErrorHandler,
            s = e.focalTweetId,
            u = e.history,
            d = e.isBookmarked,
            p = e.location,
            m = e.rootTweetId,
            f = e.screenName,
            h = e.setDrawerVisibility,
            b = e.unbookmark,
            g = e.user,
            y = a.useContext(i.a).featureSwitches,
            w = Object(Me.a)(),
            v = a.useCallback(
              function () {
                var e = Ve(s, g)
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
          a.useEffect(
            function () {
              v()
            },
            [v],
          ),
            a.useEffect(
              function () {
                h(E.a.CLOSED)
              },
              [h],
            )
          var O = function () {
              u.goBack()
            },
            k = function () {
              w.scribe({
                action: 'click',
                element: 'reader_mode_menu_exit_button',
                page: 'thread',
                section: 'reader_mode',
              }),
                u.goBack()
            },
            C = function (e) {
              e.stopPropagation()
            },
            _ = a.useCallback(
              function () {
                return !(!f || !n) && f.toLowerCase() !== n.toLowerCase()
              },
              [n, f],
            ),
            j = a.useCallback(
              function () {
                var e = n && s ? '/'.concat(n, '/thread/').concat(s) : '/'
                u.replace({ pathname: e, query: p.query, state: p.state })
              },
              [n, s, u, p.query, p.state],
            ),
            R = function () {
              w.scribe({
                action: 'click',
                element: 'reader_mode_header_icon_disable',
                page: 'thread',
                section: 'reader_mode',
              }),
                u.push({ pathname: x(), query: p.query, state: p.state })
            },
            x = function () {
              return n && s ? '/'.concat(n, '/status/').concat(s) : '/'
            }
          a.useEffect(
            function () {
              s && n && _() && j()
            },
            [n, s, j, _],
          )
          var H = function () {
              u.push({ pathname: '/i/bookmarks/add/', state: { tweet_id: s } })
            },
            P = function () {
              r(s).then(
                function () {
                  t({ text: Ne })
                },
                function (e) {
                  l(c.a)(e)
                },
              )
            },
            L = function () {
              b(s).then(
                function () {
                  t({ text: Ae })
                },
                function (e) {
                  l(c.a)(e)
                },
              )
            },
            M = function (e, t) {
              var n,
                r = Object(Pe.a)()
              e && r ? (n = Xe.containerOneCol) : e && (n = Xe.containerOneColSmall)
              var o = a.createElement(ue, {
                isBookmarked: d,
                isMobileLayout: t,
                onAddBookmark: P,
                onAddBookmarkFolder: H,
                onClose: k,
                onRemoveBookmark: L,
              })
              return a.createElement(
                N.a,
                { onClick: O, style: Xe.pageWrapper },
                a.createElement(
                  De.a,
                  { accessibilityExpanded: !0, style: Xe.viewport },
                  a.createElement(
                    N.a,
                    { style: [Xe.root, e ? Xe.rootMobile : void 0] },
                    e ? null : o,
                    a.createElement(
                      N.a,
                      { onClick: C, style: [Xe.container, n] },
                      a.createElement(
                        N.a,
                        { style: Xe.innerWrapper },
                        a.createElement(je, {
                          focalTweetId: s,
                          module: Ke(s, { isReaderMode: !0 }, y),
                          rootTweetId: m,
                        }),
                        e ? o : null,
                      ),
                    ),
                  ),
                ),
              )
            },
            A = function () {
              return D.a.openApp('twitter://thread/'.concat(s))
            },
            F = function () {
              var e = Se.b.isMobileOS()
              return a.createElement(
                N.a,
                { style: Xe.mobileAppBarRightControl },
                e ? a.createElement(V.a, { onClick: A }, Fe) : null,
                a.createElement(V.a, { accessibilityLabel: We, icon: Ze, onClick: R, type: 'brandText' }),
              )
            }
          return a.createElement(Te.a, null, function (e) {
            return (function (e) {
              var t,
                n = He.a.isOneColumnSquishedLayout(e),
                r = n || He.a.isOneColumnLayout(e)
              return a.createElement(
                a.Fragment,
                null,
                a.createElement(T.a.Configure, {
                  onBackClick: k,
                  rightControl: F(),
                  sideNav: a.createElement(a.Fragment, null),
                  title: a.createElement(Le.a, { style: Xe.titleIcon, text: ze }),
                  withForceTopNav: n,
                }),
                a.createElement(
                  xe.b,
                  { data: { tweet_id: s }, namespace: Ue },
                  a.createElement(B.a, null, n ? M(r, n) : a.createElement(Be.a.Modal, null, M(r, n))),
                ),
                a.createElement(S.a, {
                  handlers: {
                    esc:
                      ((t = window.location.pathname.match(/\/@?([_\w+]+)\/thread\/([\d]+)\/?/) || []),
                      o()(t, 1)[0] ? O : I.a),
                  },
                }),
              )
            })(e.windowWidth)
          })
        },
        Xe = A.a.create(function (e) {
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
        Ze = a.createElement(M, { style: Xe.icon }),
        Qe = v(qe)
      t.default = Qe
    },
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return N
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var r = n('97Jx'),
        o = n.n(r),
        a = n('VrFO'),
        i = n.n(a),
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
        v = n('zfvc'),
        O = n('jHwr'),
        E = n('VY6S'),
        k = n('w9LO'),
        C = n('//dC'),
        _ = n('lHOd'),
        j = n('Oe3h'),
        R = n('0FVZ'),
        x = n('7N4s'),
        H = n('cHvH'),
        P = n('rHpw'),
        L = n('i4Oy'),
        M = n('shC7'),
        S = n('MWbm')
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
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      function B(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var I = P.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: P.a.absoluteFillObject,
            mask: T(T({}, P.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: T(T({}, P.a.absoluteFillObject), {}, { bottom: void 0 }),
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
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, r)),
              y()(u()(o), '_handleAnimateComplete', function () {
                var e = o.props.onAnimateComplete
                e && e()
              }),
              y()(u()(o), '_handleEsc', function (e) {
                var t = o.props.onDismiss,
                  n = e.altKey,
                  r = e.ctrlKey,
                  a = e.key,
                  i = e.metaKey
                !(n || r || i) && 'Escape' === a && t()
              }),
              y()(u()(o), '_receiveBodyRectHelperRef', function (e) {
                e && o._bodyRectHelperNode !== e && ((o._bodyRectHelperNode = e), o._scheduleUpdate())
              }),
              y()(u()(o), '_receiveAnchorRef', function (e) {
                e && o._anchorNode !== e && ((o._anchorNode = e), o._scheduleUpdate())
              }),
              y()(u()(o), '_receiveContentRef', function (e) {
                e && o._contentNode !== e && ((o._contentNode = e), o._scheduleUpdate())
              }),
              y()(u()(o), '_updatePosition', function () {
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
                    r = n.left,
                    a = n.top,
                    i = n.width,
                    c = L.a.get('window'),
                    l = c.height,
                    s = c.width,
                    u = { left: 0, top: 0, height: 0, width: 0 }
                  o.props.position
                    ? (u = T(T({}, u), o.props.position))
                    : o._anchorNode &&
                      o._anchorNode instanceof window.HTMLElement &&
                      (u = o._anchorNode.getBoundingClientRect())
                  var d = u,
                    p = d.height,
                    m = d.left,
                    f = d.top,
                    h = d.width,
                    b = s - i,
                    g = m - r,
                    y = f - a,
                    w = m + h >= t,
                    v = f + p >= e,
                    O = s - m >= t,
                    E = l - f >= e,
                    k = o.props.preferredVerticalOrientation,
                    C = (function (e) {
                      return M.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(o.props.preferredHorizontalOrientation),
                    _ =
                      o.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          r = e.verticalPreference
                        return (n && t) || (!n && !t) ? r : n ? 'up' : 'down'
                      })({ verticalPreference: k, canOrientUp: v, canOrientDown: E }),
                    j =
                      o.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          r = e.horizontalPreference
                        return !t || ('left' !== r && n) ? 'right' : 'left'
                      })({ horizontalPreference: C, canOrientLeft: w, canOrientRight: O }),
                    R = o.props.isFixed ? m : g,
                    x = o.props.isFixed ? f : y,
                    H = 'up' === _ ? x + p - e : x,
                    P = 'left' === j ? s - R - h - b : s - R - t - b
                  o.setState({ top: Math.max(H, 0), right: P, verticalOrientation: _, horizontalOrientation: j })
                }
              }),
              (o.state = Object.freeze({})),
              (o._scheduleUpdate = Object(O.a)(o._updatePosition, window.requestAnimationFrame)),
              (o._scheduleDebouncedUpdate = Object(E.a)(o._scheduleUpdate, 250)),
              o
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), L.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), L.a.removeEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.animateInDuration,
                    r = t.animateType,
                    a = t.children,
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
                      I.content,
                      m && I.contentInitialRender,
                      i && [I.contentFixed, { maxHeight: f }],
                      {
                        top: d,
                        right: M.a.getConstants().isRTL ? void 0 : u,
                        left: M.a.getConstants().isRTL ? u : void 0,
                      },
                    ]
                  return w.createElement(
                    S.a,
                    { ref: this._receiveAnchorRef, style: I.anchor },
                    w.createElement(
                      R.a.Dropdown,
                      null,
                      w.createElement(_.a.Consumer, null, function (t) {
                        return w.createElement(x.a.Consumer, null, function (i) {
                          var s = i.isModal
                          return w.createElement(
                            C.a,
                            { history: t, isModal: s, onDismiss: c },
                            w.createElement(
                              k.a,
                              { withKeyboardNavigation: l },
                              w.createElement(S.a, { onClick: c, style: I.mask }),
                              w.createElement(S.a, { ref: e._receiveBodyRectHelperRef, style: I.bodyRectHelper }),
                              w.createElement(H.a, null, function (t) {
                                var i = t.windowWidth
                                return w.createElement(
                                  S.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: e._handleEsc,
                                    ref: e._receiveContentRef,
                                    style: [i < P.a.theme.breakpoints.medium ? I.rootNarrow : I.rootWide, h],
                                  },
                                  m && 'slide' === r
                                    ? a
                                    : w.createElement(
                                        v.b,
                                        {
                                          animateMount: 'up' !== p,
                                          duration: n,
                                          onAnimateComplete: e._handleAnimateComplete,
                                          show: !0,
                                          type: r,
                                        },
                                        function (e) {
                                          var t = e.isAnimating
                                          return w.createElement(
                                            j.a,
                                            { id: 'Dropdown', minimizeReporting: t },
                                            function (e, t) {
                                              return w.createElement(S.a, o()({ ref: e() }, t({})), a)
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
        })(w.Component)
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
        o = n.n(r),
        a = n('aITJ'),
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
            o.a.canUseDOM && i.setLocation(e)
          },
        },
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah'
          return {
            android: {
              platform: 'android',
              matches: function () {
                return a.b.isAndroid()
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
                return a.b.isIOS()
              },
              url: 'itmss://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
              webUrl: 'https://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
            },
            windows: {
              platform: 'windows',
              matches: function () {
                return a.b.isWindowsPhone()
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
