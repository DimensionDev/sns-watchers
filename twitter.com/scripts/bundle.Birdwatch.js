;(window.webpackJsonp = window.webpackJsonp || []).push([
  [41, 20, 177],
  {
    '/ZwF': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchTweetNotesScreen', function () {
          return be
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('LW0h'), a('7x/C'), a('z84I'), a('uFXj'), a('ERkP')),
        o = a.n(i),
        c = a('v6aA'),
        l = a('ZD0R'),
        s = a('vZpt'),
        u = a('L5MV'),
        d = (a('KqXw'), a('WNMA'), a('MvLc')),
        p = a('XOJV'),
        b = a('G6rE'),
        f = a('rxPX'),
        m = a('0KEI'),
        h = function (e, t) {
          return t.match.params.tweetId
        },
        g = function (e, t) {
          var a = h(0, t)
          return a ? p.a.selectHydrated(e, a) : void 0
        },
        v = function (e, t) {
          return d.s(e, h(0, t))
        },
        E = function (e, t) {
          return d.x(e, h(0, t))
        },
        y = function (e, t) {
          return d.w(e, h(0, t))
        },
        w = Object(f.a)()
          .propsFromState(function () {
            return {
              ownNoteData: E,
              fetchStatus: y,
              loggedInUser: b.e.selectLoggedInUser,
              tweet: g,
              tweetId: h,
              notes: v,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: d.k,
              fetchTweet: p.a.fetchOneIfNeeded,
              fetchUserAlias: d.l,
            }
          }),
        _ = a('kGix'),
        C = a('3XMw'),
        S = a.n(C),
        I = a('yoO3'),
        T = a('7JQg'),
        x = a('VS6U'),
        A = a('xZXe'),
        L = a('MWbm'),
        O = a('FIs5'),
        k = a('4zmP'),
        B = a('t62R'),
        N = a('0yYu'),
        R = a('htQn'),
        F = a('6vad'),
        M = a('/yvb'),
        D = a('Qwev'),
        H = a('rHpw'),
        P = a('Nh1N'),
        j = a('yiKp'),
        z = a.n(j),
        U = a('Lsrn'),
        W = a('k/Ka'),
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(W.a)(
            'svg',
            z()(
              z()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [U.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zM9.145 16.033c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.046c0-.414.336-.75.75-.75s.75.336.75.75v5.046zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.95c0-.415.336-.75.75-.75s.75.335.75.75v9.083zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.56c0-.414.336-.75.75-.75s.75.336.75.75v6.56z',
              }),
            ),
          )
        }
      V.metadata = { width: 24, height: 24 }
      var K = V,
        G = a('x0mb'),
        q = S.a.h8335712,
        X = S.a.fe27c1e1,
        Q = S.a.c59107c3,
        Z = S.a.i859a9d3,
        J = S.a.ib73f867,
        Y = S.a.efd14e79,
        $ = S.a.d06b723c,
        ee = S.a.f84bcd3d,
        te = S.a.f10aaf3b,
        ae = S.a.d4f03f72,
        ne = S.a.h98222f4,
        re = S.a.d5c203a5,
        ie = S.a.bd3f064b,
        oe = S.a.c21313b9,
        ce = S.a.c2c4012f,
        le = S.a.ia596d40,
        se = S.a.deff0bdd,
        ue = S.a.b95dc58a,
        de = S.a.a565833d,
        pe = o.a.createElement(O.a, { buttonLink: '/i/birdwatch/about', buttonText: Z, header: J }),
        be = function (e) {
          var t = o.a.useContext(c.a).featureSwitches,
            a = e.createLocalApiErrorHandler,
            n = e.fetchNotes,
            i = e.fetchStatus,
            d = e.fetchTweet,
            p = e.fetchUserAlias,
            b = e.history,
            f = e.loggedInUser,
            m = e.notes,
            h = e.ownNoteData,
            g = e.tweet,
            v = e.tweetId,
            E = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            y =
              t.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
              t.isTrue('responsive_web_birdwatch_rating_crowd_enabled'),
            w = o.a.useMemo(
              function () {
                return { page: 'birdwatch', section: E ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [E],
            ),
            C = o.a.useState(h),
            S = r()(C, 2),
            O = S[0],
            H = S[1],
            j = o.a.useState(!1),
            z = r()(j, 2),
            U = z[0],
            W = z[1]
          o.a.useEffect(
            function () {
              v && (n(v).catch(a()), d(v).catch(a()))
            },
            [a, n, d, v],
          ),
            o.a.useEffect(
              function () {
                H(h)
              },
              [h],
            ),
            o.a.useEffect(
              function () {
                p().catch(a())
              },
              [a, p],
            )
          var V,
            J = o.a.useMemo(
              function () {
                return m.filter(function (e) {
                  return 'CurrentlyRatedNotHelpful' !== e.rating_status
                })
              },
              [m],
            ),
            be = o.a.useMemo(
              function () {
                return m.filter(function (e) {
                  return 'CurrentlyRatedNotHelpful' === e.rating_status
                })
              },
              [m],
            ),
            me = O || m.length,
            he = '/i/birdwatch/contribute/'.concat(v),
            ge =
              t.isTrue('responsive_web_birdwatch_appeals_enabled') &&
              (null == f ? void 0 : f.id_str) === (null == g ? void 0 : g.user.id_str),
            ve = o.a.createElement(
              L.a,
              { style: fe.appealsCallout },
              o.a.createElement(k.a, {
                Icon: P.a,
                action: { label: Z, link: 'https://twitter.github.io/birdwatch/additional-review' },
                headline: re,
                text: ie,
                type: 'primary',
              }),
            ),
            Ee = o.a.createElement(
              L.a,
              { style: fe.actionModuleContainer },
              o.a.createElement(
                L.a,
                { style: fe.actionModule },
                y ? o.a.createElement(K, { style: fe.icon }) : o.a.createElement(P.a, { style: fe.icon }),
                o.a.createElement(B.b, { size: 'headline1', style: fe.header, weight: 'bold' }, y ? $ : ae),
                o.a.createElement(B.b, { color: 'gray700' }, y ? ee : ne),
                y
                  ? o.a.createElement(
                      B.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' } },
                      te,
                    )
                  : o.a.createElement(
                      B.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/learn-more/' } },
                      Z,
                    ),
              ),
            ),
            ye = o.a.createElement(
              R.a,
              null,
              o.a.createElement(
                L.a,
                { style: fe.contentWrapper },
                o.a.createElement(
                  L.a,
                  { style: fe.withBottomBorder },
                  o.a.createElement(A.b, {
                    displayPromotedContent: !1,
                    tweetId: v,
                    withActions: !0,
                    withActionsDisabled: !0,
                    withBirdwatchPivots: !1,
                    withCurationMenu: !1,
                  }),
                ),
                me
                  ? o.a.createElement(
                      o.a.Fragment,
                      null,
                      O &&
                        o.a.createElement(
                          L.a,
                          null,
                          o.a.createElement(F.b, { text: q }),
                          o.a.createElement(l.a, {
                            handleDelete: function (e) {
                              H(null)
                            },
                            note: O,
                          }),
                        ),
                      !!m.length &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(L.a, { style: fe.divider }),
                          o.a.createElement(F.b, { text: X }),
                          ge ? ve : Ee,
                          o.a.createElement(N.a, null),
                          J.map(function (e) {
                            return o.a.createElement(
                              o.a.Fragment,
                              { key: e.rest_id },
                              o.a.createElement(l.a, { note: e }),
                              o.a.createElement(N.a, null),
                            )
                          }),
                          (null == be ? void 0 : be.length) > 0
                            ? ((V = be),
                              U
                                ? V.map(function (e) {
                                    return o.a.createElement(
                                      o.a.Fragment,
                                      { key: e.rest_id },
                                      o.a.createElement(l.a, { note: e }),
                                      o.a.createElement(N.a, null),
                                    )
                                  })
                                : o.a.createElement(
                                    L.a,
                                    { style: [fe.hiddenNotesSection, fe.withBottomBorder] },
                                    o.a.createElement(
                                      L.a,
                                      { style: fe.hiddenNotesHeader },
                                      o.a.createElement(G.a, { style: fe.iconHiddenNotes }),
                                      o.a.createElement(B.b, { size: 'subtext2', weight: 'bold' }, oe),
                                    ),
                                    o.a.createElement(
                                      B.b,
                                      {
                                        color: 'primary',
                                        onPress: function () {
                                          return W(!0)
                                        },
                                        size: 'subtext2',
                                        withInteractiveStyling: !0,
                                      },
                                      ce,
                                    ),
                                  ))
                            : null,
                          y && !O
                            ? o.a.createElement(
                                L.a,
                                { style: fe.actionModuleContainer },
                                o.a.createElement(
                                  L.a,
                                  { style: fe.actionModule },
                                  o.a.createElement(B.b, { style: fe.improveText }, E ? le : ue),
                                  o.a.createElement(
                                    M.a,
                                    {
                                      accessibilityLabel: E ? se : de,
                                      link: E ? he : '/i/flow/join-birdwatch',
                                      type: 'brandOutlined',
                                    },
                                    E ? se : de,
                                  ),
                                ),
                              )
                            : null,
                        ),
                    )
                  : i === _.a.LOADING
                  ? o.a.createElement(D.a, { accessibilityLabel: Y, size: 'large', style: fe.spinner })
                  : pe,
              ),
            )
          return o.a.createElement(
            T.c,
            { namespace: w },
            o.a.createElement(
              I.a,
              null,
              o.a.createElement(x.a, {
                TabBar: u.a,
                backLocation: '/i/birdwatch',
                history: b,
                logoButton: o.a.createElement(o.a.Fragment, null),
                primaryContent: ye,
                sidebarContent: o.a.createElement(s.a, null),
                title: Q,
                withTweetButton: !1,
              }),
            ),
          )
        },
        fe = H.a.create(function (e) {
          return {
            actionModule: {
              alignItems: 'center',
              paddingTop: e.spaces.space20,
              paddingBottom: e.spaces.space32,
              textAlign: 'center',
              width: '70%',
            },
            actionModuleContainer: { alignItems: 'center' },
            appealsCallout: { padding: e.spaces.space16, paddingTop: 0 },
            contentWrapper: { backgroundColor: e.colors.cellBackground, paddingBottom: e.spaces.space48 },
            divider: { backgroundColor: e.colors.borderColor, height: e.spaces.space8, marginTop: e.spaces.space4 },
            header: { paddingBottom: e.spaces.space12 },
            hiddenNotesHeader: { alignItems: 'center', flexDirection: 'row', paddingBottom: e.spaces.space4 },
            hiddenNotesSection: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            icon: {
              color: e.colors.primary,
              height: e.spaces.space48,
              marginBottom: e.spaces.space20,
              width: e.spaces.space48,
            },
            iconHiddenNotes: {
              color: e.colors.red500,
              height: e.spaces.space12,
              paddingBottom: e.spaces.space2,
              paddingRight: e.spaces.space4,
              width: e.spaces.space12,
            },
            improveText: { paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 },
            spinner: { paddingTop: e.spaces.space20 },
            withBottomBorder: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
            },
          }
        }),
        me = w(be)
      t.default = me
    },
    '0SuV': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchPrinciples', function () {
          return L
        })
      a('KqXw'), a('MvUL'), a('lTEL'), a('7x/C'), a('kYxP')
      var n = a('ERkP'),
        r = a.n(n),
        i = (a('WNMA'), a('MvLc')),
        o = a('rxPX'),
        c = a('0KEI'),
        l = function (e, t) {
          return t.match.params.tweetId
        },
        s = function (e, t) {
          return i.x(e, l(0, t))
        },
        u = Object(o.a)()
          .propsFromState(function () {
            return { ownNoteData: s, tweetId: l }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: i.k,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form', component: 'values' }),
        d = a('3XMw'),
        p = a.n(d),
        b = a('5FtR'),
        f = a('aITJ'),
        m = a('MWbm'),
        h = a('t62R'),
        g = a('h0NW'),
        v = a('feu+'),
        E = a('rHpw'),
        y = a('yygM'),
        w = a('QDet'),
        _ = a('wz7L'),
        C = p.a.gfa725ae,
        S = p.a.c3d89aca,
        I = p.a.h7ad677b,
        T = p.a.eac7b6ab,
        x = p.a.b0381cfb,
        A = p.a.f0addddc,
        L = function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.fetchNotes,
            i = e.history,
            o = e.ownNoteData,
            c = e.tweetId,
            l = c ? '/i/birdwatch/'.concat(c, '/contribute_complete') : '/'
          r.a.useEffect(
            function () {
              c && n(c).catch(a())
            },
            [a, n, c],
          )
          var s = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            u = function (e) {
              return r.a.createElement(m.a, { style: O.valueItem }, r.a.createElement(h.b, { color: 'gray700' }, e))
            },
            d = {
              accessibilityLabel: C,
              containerStyle: O.infoItemContainer,
              items: [
                { label: '', decoration: r.a.createElement(y.a, null), description: u(T) },
                { label: '', decoration: r.a.createElement(w.a, null), description: u(x) },
                { label: '', decoration: r.a.createElement(_.a, null), description: u(A) },
              ],
            },
            p = r.a.createElement(m.a, { style: O.values }, r.a.createElement(g.a, d))
          return o
            ? r.a.createElement(b.a, { to: l })
            : r.a.createElement(v.a, {
                actionLabel: S,
                graphicDisplayMode: 'none',
                headline: I,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), c && i.replace('/i/birdwatch/contribute_form/'.concat(c))
                },
                onClose: function () {
                  s('close'), c && i.goBackThroughModals({ fallbackPath: '/i/status/'.concat(c) })
                },
                subtext: p,
                withCloseButton: !f.b.isTwitterApp(),
              })
        },
        O = E.a.create(function (e) {
          return {
            infoItemContainer: { paddingHorizontal: 0 },
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        k = u(L)
      t.default = k
    },
    '180P': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('TJCb'), a('7x/C'), a('DZ+c'), a('KOtZ'), a('0zG9'), a('KqXw'), a('Ysgh'), a('tQbP'), a('7xRU')
      var n = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var a = t.join('')
          return r(a, 0).toString()
        },
        r = function (e, t) {
          for (var a = 'string' == typeof e ? e : String(e), n = t, r = 0; r < a.length; r++) {
            ;(n = (n << 5) - n + a.charCodeAt(r)), (n &= n)
          }
          return n
        }
    },
    '2Rcs': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M8 20V5.8l2.7 2.7c.3.3.8.3 1.1 0s.3-.8 0-1.1l-4-4c-.3-.2-.8-.2-1.1.1l-4 4c-.1.1-.2.3-.2.5s.1.4.2.5c.3.3.8.3 1.1 0l2.7-2.7V20c0 .4.3.8.8.8s.7-.4.7-.8zm9.3.5l4-4c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.7 2.7V4c0-.4-.3-.8-.8-.8s-.7.4-.7.8v14.2l-2.7-2.7c-.3-.3-.8-.3-1.1 0-.1.1-.2.3-.2.5s.1.4.2.5l4 4c.3.3.8.3 1.1 0z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '88ay': function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return ee
      }),
        a.d(t, 'e', function () {
          return te
        }),
        a.d(t, 'f', function () {
          return ae
        }),
        a.d(t, 'd', function () {
          return ne
        }),
        a.d(t, 'a', function () {
          return oe
        })
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        c = a('VrFO'),
        l = a.n(c),
        s = a('Y9Ll'),
        u = a.n(s),
        d = a('1Pcy'),
        p = a.n(d),
        b = a('5Yy7'),
        f = a.n(b),
        m = a('2VqO'),
        h = a.n(m),
        g = a('KEM+'),
        v = a.n(g),
        E = a('97Jx'),
        y = a.n(E),
        w = (a('1t7P'), a('jQ/y'), a('ho0z'), a('2G9S'), a('hBpG'), a('7x/C'), a('ERkP')),
        _ = a.n(w),
        C = a('6rlp'),
        S = a('zh9S'),
        I = a('G6rE'),
        T = a('rxPX'),
        x = a('0KEI'),
        A = function (e, t) {
          return I.e.select(e, t.userId)
        },
        L = function (e, t) {
          return t.promotedContent
        },
        O = Object(T.a)()
          .propsFromState(function () {
            return { promotedContent: L, user: A }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              a = e.user
            return { promotedContent: t || (a ? a.promoted_content : void 0), user: a }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: C.a,
              scribeAction: S.c,
            }
          }),
        k = a('I57f'),
        B = a('vMjK'),
        N = a('MWbm'),
        R = a('IG7M'),
        F = a('rHpw'),
        M = function (e) {
          var t = e.children,
            a = e.promotedContent,
            n = e.user
          return _.a.createElement(
            N.a,
            { style: D.decorationWrapper },
            t,
            _.a.createElement(R.a, {
              renderActionMenu: function (e) {
                return _.a.createElement(B.b, { onClose: e, promotedContent: a, user: n, view: 'follower' })
              },
              style: D.actionMenu,
            }),
          )
        },
        D = F.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        H = a('uIZp'),
        P = a('mN6z'),
        j = a('caTy'),
        z = a('3IPs'),
        U = a('Rp9C'),
        W = a('X04g'),
        V = a('Re5t'),
        K = a('TnY3'),
        G = a('hxu0'),
        q = a('v6aA'),
        X = a('7JQg'),
        Q = a('nBUg'),
        Z = a('IMA+'),
        J = a('cFuS'),
        Y = [
          'avatarDecoration',
          'bottomControl',
          'cellClickable',
          'createLocalApiErrorHandler',
          'decoration',
          'followRequestReceived',
          'hideBlocked',
          'history',
          'isAutoblocking',
          'isBlockedBy',
          'isBlocking',
          'isDeviceFollowing',
          'isFollowing',
          'isInSidebar',
          'location',
          'log',
          'onClick',
          'promotedItemId',
          'saveAsRecentSearch',
          'scribeAction',
          'scribeData',
          'scribeNamespace',
          'shouldScribeImpression',
          'shouldScribeProfileClick',
          'shouldStoreTypeaheadItem',
          'socialContext',
          'user',
        ],
        $ = function (e) {
          var t = e.user
          return t && t.profile_image_url_https
            ? _.a.createElement(
                re,
                y()({}, e, {
                  avatarUri: t.profile_image_url_https,
                  description: t.description,
                  entities: t.entities,
                  followRequestReceived: t.follow_request_received,
                  highlightedLabel: t.highlightedLabel,
                  isAutoblocking: t.smart_blocking,
                  isBlockedBy: t.blocked_by,
                  isBlocking: t.blocking,
                  isDeviceFollowing: t.notifications,
                  isFollowedBy: t.followed_by,
                  isFollowing: t.following,
                  isProtected: t.protected,
                  isVerified: t.verified,
                  name: t.name,
                  screenName: t.screen_name,
                  translatorType: t.translator_type,
                  user: t,
                  withheldDescription: t.withheld_description,
                  withheldEntities: t.withheld_entities,
                }),
              )
            : null
        }
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: V.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: J.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            a = e.userId
          return _.a.createElement(k.a, { isFollowing: t, style: ie.followButton, userId: a })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            a = e.promotedContent,
            n = e.userId
          return t !== n
            ? _.a.createElement(H.a, { promotedContent: a, size: 'small', style: ie.followButton, userId: n })
            : null
        },
        ae = function (e) {
          return _.a.createElement(M, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ne = function (e) {
          return _.a.createElement(R.a, {
            renderActionMenu: function (t) {
              return _.a.createElement(B.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        re = (function (e) {
          f()(a, e)
          var t = h()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(J.b.PROFILE_IMAGE_CLICK)
              }),
              v()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  a = t.history,
                  n = t.onClick,
                  r = t.screenName,
                  i = t.user,
                  o = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  n ? n({ user: i, state: o }) : a.push({ pathname: '/'.concat(r), state: o || void 0 })
              }),
              v()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(J.b.SCREEN_NAME_CLICK)
              }),
              v()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  a = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  r = t.userId
                a && n && n(W.a.ItemType.USER) && a({ user: { id: r, type: z.a.User } })
              }),
              v()(p()(e), '_scribeAction', function (t) {
                var a,
                  n = e.props,
                  r = n.promotedContent,
                  i = n.scribeAction,
                  c = n.scribeData,
                  l = n.scribeNamespace,
                  s = n.user,
                  u = n.userId,
                  d =
                    null == c || null === (a = c.items) || void 0 === a
                      ? void 0
                      : a.find(function (e) {
                          return e.item_type === W.a.ItemType.USER && e.id === u
                        }),
                  p = c.search_details,
                  b = { items: [o()(o()({}, d), U.a.getUserItem(s, r))], profile_id: u, search_details: p }
                i(o()(o()({}, l), t), b)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(P.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarDecoration,
                    n = (t.bottomControl, t.cellClickable),
                    i =
                      (t.createLocalApiErrorHandler,
                      t.decoration,
                      t.followRequestReceived,
                      t.hideBlocked,
                      t.history,
                      t.isAutoblocking,
                      t.isBlockedBy,
                      t.isBlocking,
                      t.isDeviceFollowing,
                      t.isFollowing,
                      t.isInSidebar),
                    o =
                      (t.location,
                      t.log,
                      t.onClick,
                      t.promotedItemId,
                      t.saveAsRecentSearch,
                      t.scribeAction,
                      t.scribeData,
                      t.scribeNamespace,
                      t.shouldScribeImpression,
                      t.shouldScribeProfileClick,
                      t.shouldStoreTypeaheadItem,
                      t.socialContext),
                    c = t.user,
                    l = r()(t, Y)
                  return this._shouldRender()
                    ? _.a.createElement(
                        Q.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        _.a.createElement(
                          Z.a,
                          y()({}, l, {
                            avatarDecoration: a,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: c.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: n ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: o
                              ? {
                                  contextType: o.contextType,
                                  text: o.text,
                                  link: o.landingUrl ? Object(j.b)(o.landingUrl) : void 0,
                                }
                              : void 0,
                            withDarkerInteractiveBackground: i,
                          }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderBottomControl',
                value: function () {
                  return this._renderControl(this.props.bottomControl || null)
                },
              },
              {
                key: '_renderDecoration',
                value: function () {
                  return this._renderControl(this.props.decoration)
                },
              },
              {
                key: '_renderControl',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    a = this.props,
                    n = a.displayMode,
                    r = a.followRequestReceived,
                    i = a.isAutoblocking,
                    o = a.isBlocking,
                    c = a.isDeviceFollowing,
                    l = a.isFollowing,
                    s = a.promotedContent,
                    u = a.screenName,
                    d = a.user,
                    p = a.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: n,
                        followRequestReceived: r,
                        isAutoblocking: i,
                        isBlocking: o,
                        isDeviceFollowing: !!c,
                        isFollowing: !!l,
                        loggedInUserId: t,
                        promotedContent: s,
                        screenName: u,
                        user: d,
                        userId: p,
                      })
                    : e
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props,
                    t = e.hideBlocked,
                    a = e.isBlockedBy,
                    n = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (a || n))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    a = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || a ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    a = e.promotedItemType
                  return t && a === J.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler,
                    n = t.log,
                    r = t.promotedContent,
                    i = t.promotedItemId,
                    o = t.promotedItemType,
                    c = t.userId
                  r &&
                    n({
                      disclosureType: r.disclosure_type,
                      itemId: i || c,
                      itemType: o,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(a())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    a = e.log,
                    n = e.promotedContent,
                    r = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    o = e.userId
                  if (n && r === J.c.USER) {
                    var c = n.disclosure_type,
                      l = n.impression_id
                    a({
                      disclosureType: c,
                      itemId: o,
                      itemType: J.c.USER,
                      params: { event: J.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            a
          )
        })(_.a.Component)
      v()(re, 'contextType', q.a), v()(re, 'defaultProps', $.defaultProps)
      var ie = F.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(K.a)(Object(G.a)(O($)))
      t.b = Object(X.a)({ element: 'user' })(oe)
    },
    '89Im': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M11.47 14.53c.146.146.338.22.53.22s.384-.073.53-.22l5-5c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.72 3.72V2c0-.414-.337-.75-.75-.75s-.75.336-.75.75v10.19L7.53 8.47c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l5 5z',
              }),
              o.a.createElement('path', {
                d: 'M21.25 13.25c-.414 0-.75.336-.75.75v5.652c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V14c0-.414-.336-.75-.75-.75S2 13.586 2 14v5.652c0 1.264 1.028 2.292 2.292 2.292h15.416c1.264 0 2.292-1.028 2.292-2.292V14c0-.414-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '9StO': function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('lTEL'), a('7x/C'), a('kYxP'), a('jwue'), a('+oxZ'), a('ERkP')),
        o = a.n(i),
        c = a.p + 'birdwatch_owl.9e2a1755.png',
        l = a('MvLc'),
        s = a('1YZw'),
        u = a('rxPX'),
        d = a('0KEI'),
        p = Object(u.a)()
          .propsFromState(function () {
            return { aliasSelfSelectOptions: l.n }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchAliasSelfSelectOptions: l.f,
              selectAlias: l.m,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'alias_select' }),
        b = a('W6+M'),
        f = a('3XMw'),
        m = a.n(f),
        h = a('t62R'),
        g = a('h0NW'),
        v = a('feu+'),
        E = a('gSL+'),
        y = a('Qwev'),
        w = a('4zmP'),
        _ = a('rHpw'),
        C = a('j7Bv'),
        S = a('ms2t'),
        I = a('VwDm'),
        T = a('EQ/a'),
        x = a('U+bB'),
        A = a('MWbm'),
        L = m.a.f084f1cd,
        O = m.a.ja0ee36f,
        k = m.a.j761c248,
        B = m.a.h66bd30a,
        N = m.a.j48ab593,
        R = m.a.e17c80bc,
        F = m.a.d939cf16,
        M = m.a.a56f0c32,
        D = m.a.d17c59e4,
        H = m.a.i719f8e1,
        P = m.a.d0e190cd,
        j = m.a.e74a2cd5,
        z = m.a.g9677c6d,
        U = m.a.e4a6e006,
        W = m.a.f83d0446,
        V = function (e) {
          return o.a.createElement(h.b, { weight: 'bold' }, e)
        },
        K = function () {
          return o.a.createElement(x.a, { source: c, style: G.image })
        },
        G = _.a.create(function (e) {
          return {
            aliasIcon: { marginRight: e.spaces.space12 },
            aliasSelectContainer: { paddingVertical: e.spaces.space16 },
            aliasSubtext: { paddingTop: e.spaces.space8 },
            icon: { color: e.colors.primary, marginRight: e.spaces.space20 },
            image: { height: '125px', width: '125px' },
            infoItemContainer: { paddingHorizontal: 0 },
            optionContainer: { color: e.colors.text, paddingLeft: 0, textTransform: 'capitalize' },
            subtextContainer: { paddingTop: e.spaces.space12 },
            values: { color: e.colors.text, textAlign: 'left', width: '100%' },
          }
        }),
        q = o.a.createElement(C.a, { Icon: S.a, color: 'neutral', size: 'large', style: G.aliasIcon }),
        X = {
          accessibilityLabel: L,
          containerStyle: G.infoItemContainer,
          items: [
            { label: V(N), decoration: o.a.createElement(S.a, { style: G.icon }), description: R },
            { label: V(F), decoration: o.a.createElement(I.a, { style: G.icon }), description: M },
            { label: V(D), decoration: o.a.createElement(T.a, { style: G.icon }), description: H },
          ],
        },
        Q = p(function (e) {
          var t = e.addToast,
            a = e.aliasSelfSelectOptions,
            n = e.createLocalApiErrorHandler,
            i = e.fetchAliasSelfSelectOptions,
            c = e.onAliasSelected,
            l = e.selectAlias,
            s = o.a.useState(!0),
            u = r()(s, 2),
            d = u[0],
            p = u[1],
            f = o.a.useState(''),
            m = r()(f, 2),
            _ = m[0],
            C = m[1],
            S = o.a.useState(!1),
            I = r()(S, 2),
            T = I[0],
            x = I[1]
          o.a.useEffect(
            function () {
              i()
                .then(function (e) {
                  e && e[0] ? C(e[0]) : x(!0)
                })
                .catch(n())
            },
            [n, i],
          )
          var L,
            N,
            R = o.a.createElement(
              h.b,
              { color: 'text', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              B,
            ),
            F = o.a.createElement(A.a, { style: G.values }, o.a.createElement(g.a, X)),
            M = o.a.createElement(v.a, {
              actionLabel: O,
              footer: R,
              graphic: K,
              graphicDisplayMode: 'illustration',
              headline: k,
              isFullHeightOnMobile: !0,
              onAction: function () {
                p(!1)
              },
              subtext: F,
            }),
            D = o.a.useCallback(
              function (e, t) {
                C(t)
              },
              [C],
            ),
            H = o.a.createElement(
              A.a,
              null,
              o.a.createElement(h.b, { style: G.aliasSubtext }, j),
              a
                ? o.a.createElement(
                    A.a,
                    { style: G.aliasSelectContainer },
                    o.a.createElement(E.a, {
                      name: 'example',
                      onChange: D,
                      options:
                        ((L = a),
                        (N = []),
                        L.forEach(function (e) {
                          N.push({ containerStyle: G.optionContainer, label: Object(b.a)(e), value: e, decoration: q })
                        }),
                        N),
                      value: _,
                    }),
                  )
                : o.a.createElement(y.a, null),
              T ? o.a.createElement(w.a, { text: U, type: 'danger' }) : void 0,
            ),
            V = o.a.createElement(v.a, {
              actionLabel: z,
              footer: R,
              graphicDisplayMode: 'none',
              headline: P,
              isFullHeightOnMobile: !0,
              onAction: function () {
                _ &&
                  l(_)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (c(!1), t({ text: W, withClearButton: !0 }))
                        : x(!0)
                    })
                    .catch(function (e) {
                      n({ defaultToast: { text: U, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: H,
            })
          return d ? M : V
        })
      t.a = Q
    },
    ACNv: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        b = a('KEM+'),
        f = a.n(b),
        m = (a('2G9S'), a('KOtZ'), a('7x/C'), a('hBvt'), a('jQ3i'), a('x4t0'), a('ERkP')),
        h = a.n(m),
        g = a('3XMw'),
        v = a.n(g),
        E = a('oQhu'),
        y = a('mjJ+'),
        w = a('eb3s'),
        _ = v.a.cfd2f35d,
        C = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(l()(e), 'state', { activeConfirmation: null }),
              f()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              f()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              f()(l()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : h.a.createElement(y.a, {
                        cancelButtonLabel: _,
                        items: this._getProcessedActionItems(),
                        onCloseRequested: e,
                      })
                },
              },
              {
                key: '_renderConfirmation',
                value: function (e) {
                  if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm)
                  var t = e || {},
                    a = t.confirmButtonType,
                    n = t.headline,
                    r = t.label,
                    i = t.text,
                    o = t.withCancelButton
                  return h.a.createElement(w.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: a,
                    headline: n,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: i,
                    withCancelButton: o,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var e = this.props,
                    t = e.actionItems,
                    a = e.dividerIndices,
                    n = e.onClose
                  return S(t, a, n, this._handleConfirm)
                },
              },
            ]),
            a
          )
        })(h.a.Component),
        S = Object(E.a)(function (e, t, a, n) {
          return e.reduce(function (e, r, i) {
            var o = r.Icon,
              c = r.behavioralEventContext,
              l = r.confirmation,
              s = r.disabled,
              u = r.excludeFromActionMenu,
              d = r.isEmphasized,
              p = r.link,
              b = r.onClick,
              f = r.subText,
              m = r.testID,
              h = r.text
            r.withCancelButton
            if (!u) {
              var g = b
                ? function () {
                    l
                      ? l.render
                        ? n({ callback: b, render: l.render })
                        : n({
                            callback: b,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (b(), a())
                  }
                : a
              e.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: o,
                isEmphasized: d,
                testID: m,
                subText: f,
                text: h,
                onClick: g,
                link: p,
                withBottomBorder: t && t.includes(i),
              })
            }
            return e
          }, [])
        })
      t.default = C
    },
    'B/qP': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M11.434 16.22l-3.38 5.3c-.076.116-.21.19-.35.19h-.05c-.16-.018-.292-.127-.34-.277l-.937-2.564-2.72.25c-.168.024-.317-.06-.4-.194-.083-.134-.082-.31.002-.442l3.018-4.725c.1.108.2.208.307.292.1.117.207.21.315.294 1.03.898 2.276 1.505 3.617 1.762.15.026.3.043.45.07.033 0 .058.008.092.008.115.017.24.026.374.035zm9.306 2.8c-.084.134-.235.216-.393.19l-2.725-.28-.956 2.553c-.06.15-.193.257-.352.273h-.042c-.142 0-.275-.077-.35-.194l-3.356-5.335c.133-.008.26-.015.392-.03.025 0 .05-.01.075-.01.15-.023.3-.047.442-.072 1.344-.26 2.597-.86 3.628-1.74.11-.09.21-.19.31-.28.11-.1.21-.2.302-.308l3.026 4.792c.085.133.084.308 0 .44zM18.187 8.446c-.007 1.376-.473 2.65-1.245 3.67-.974 1.304-2.47 2.213-4.182 2.42-.26.032-.517.047-.784.046-.242 0-.483-.02-.725-.054-1.715-.2-3.203-1.11-4.188-2.415-.77-1.046-1.238-2.333-1.23-3.733.02-3.41 2.8-6.154 6.21-6.136 3.41.018 6.164 2.793 6.145 6.202z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'EQ/a': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M9.944 10.68H2.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h7.194c.414 0 .75.337.75.75s-.336.75-.75.75zm4.112-4.11H2.75c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h11.306c.414 0 .75.335.75.75s-.336.75-.75.75z',
              }),
              o.a.createElement('path', {
                d: 'M8.917 21.986c-.198 0-.39-.078-.53-.22L2.61 15.99c-.293-.294-.293-.77 0-1.062s.768-.293 1.06 0l5.15 5.147L20.64 3.33c.237-.34.706-.42 1.044-.18.338.238.42.706.18 1.045L9.53 21.67c-.128.18-.33.295-.55.313-.02.002-.042.003-.063.003z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    I6Uj: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n)
      function i(e) {
        return null
      }
      var o = a('97Jx'),
        c = a.n(o),
        l = a('yiKp'),
        s = a.n(l),
        u = (a('jwue'), a('7x/C'), a('+oxZ'), a('3XMw')),
        d = a.n(u),
        p = a('/yvb'),
        b = a('fn9Y'),
        f = d.a.c0530da5,
        m = d.a.ifea3114
      var h = function (e) {
          return r.a.createElement(p.a, {
            accessibilityLabel: f,
            hoverLabel: { label: m },
            icon: r.a.createElement(b.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        g = 'share-button',
        v = 'share-by-tweet',
        E = a('m3Bd'),
        y = a.n(E),
        w = a('1YZw'),
        _ = a('CaKu'),
        C = a('y+lG'),
        S = a('SrIh'),
        I = a('Irs7'),
        T = a('uDfI'),
        x = a('zCf4'),
        A = a('jwTb'),
        L = a('SOvA'),
        O = a('I/9y'),
        k = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: A.a,
            text: d.a.fcc684a9,
            testID: v,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: L.a,
            text: d.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return _.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: O.a,
            text: d.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: b.a,
            text: d.a.if23a251,
          },
        },
        B = ['isAvailable', 'scribeAction']
      function N(e) {
        var t = Object(I.b)()
        return {
          getActionItem: (function (e, t) {
            var a = Object(T.c)(),
              n = Object(x.f)()
            return r.a.useMemo(
              function () {
                return function (r) {
                  var i = k[r.type],
                    o = i.isAvailable,
                    c = i.scribeAction,
                    l = y()(i, B)
                  if (!o()) return null
                  var u = s()({}, l)
                  function d() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      l = s()(s()({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      u = { text: i, url: o },
                      d = { analytics: t, dispatch: a, history: n, mergedScribeNamespace: l }
                    !(function (e, t, a) {
                      var n = function () {
                        return a.analytics.scribe(a.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return n(), void a.history.push(s()(s()({}, F(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            _.a.setString(Object(C.a)(t.url)),
                            n(),
                            void a.dispatch(Object(w.b)({ text: R.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            n(),
                            void a.history.push(
                              s()(
                                s()({ pathname: '/compose/tweet' }, F(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(C.a)(t.url) })
                            .then(n)
                            .catch(function () {
                              a.analytics.scribe(s()(s()({}, a.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(S.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, u, d)
                  }
                  return r.label && (u.text = r.label), s()(s()({}, u), {}, { onClick: d })
                }
              },
              [t, a, n, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var R = { copyLinkSuccessMessage: d.a.f88553c8, shareTextPrefixFormatter: d.a.gb5851d7 }
      function F(e) {
        var t = e.url,
          a = e.text
        return { query: { text: a ? R.shareTextPrefixFormatter({ prefix: a, url: t }) : t } }
      }
      var M = a('mN6z')
      var D = a('mjJ+'),
        H = a('rHpw'),
        P = { element: 'share' }
      function j(e) {
        var t = (function (e) {
            var t = r.a.useRef({ previous: void 0 })
            function a(e) {
              return (t.current.previous = e), e
            }
            var n = t.current.previous
            return n && (e === n || Object(M.a)(e, n)) ? n : a(e)
          })(s()(s()({}, P), e.scribeNamespace)),
          a = N(s()(s()({}, e), {}, { scribeNamespace: t })),
          n = a.analytics,
          i = a.getActionItem
        var o = e.ButtonComponent || z
        return r.a.createElement(o, {
          onPress: function () {
            var e = s()(s()({}, t), {}, { action: 'share_menu_click' })
            n.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var a = []
            return (
              e.children
                ? r.a.Children.forEach(e.children, function (e) {
                    if (r.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && a.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && a.push(t)
                  }),
              r.a.createElement(D.a, { isFixed: e.isFixed, items: a, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function z(e) {
        return r.a.createElement(h, c()({}, e, { style: U.button, testID: g }))
      }
      var U = H.a.create(function (e) {
          return { button: { marginRight: e.spaces.space4 } }
        }),
        W = ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel']
      function V(e) {
        var t = e.copyLinkShareLabel,
          a = e.dmShareLabel,
          n = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = y()(e, W)
        return r.a.createElement(
          j,
          c,
          r.a.createElement(i, { label: o, type: 'tweet' }),
          r.a.createElement(i, { label: a, type: 'dm' }),
          r.a.createElement(i, { label: t, type: 'copy' }),
          r.a.createElement(i, { label: n, type: 'via' }),
        )
      }
      ;(V.Action = i), (V.Custom = j)
      t.a = V
    },
    KqB4: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var a = [], n = (0, r.default)(e, t), i = 0; i < n.length; i++) a.push(n[i].url)
          return a
        })
      var r = n(a('vwfs'))
      e.exports = t.default
    },
    Ku87: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchAboutScreen', function () {
          return j
        })
      a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('v6aA'),
        o = a.p + 'birdwatch_banner.3097f8b5.png',
        c = a('vZpt'),
        l = a('L5MV'),
        s = a('3XMw'),
        u = a.n(s),
        d = a('yoO3'),
        p = a('7JQg'),
        b = a('VS6U'),
        f = a('MWbm'),
        m = a('t62R'),
        h = a('h0NW'),
        g = a('/yvb'),
        v = a('rHpw'),
        E = a('yiKp'),
        y = a.n(E),
        w = a('Lsrn'),
        _ = a('k/Ka'),
        C = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(_.a)(
            'svg',
            y()(
              y()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm16.235-8.16l-1.15 1.15-4.595-4.596 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      C.metadata = { width: 24, height: 24 }
      var S = C,
        I = a('sUoZ'),
        T = a('fBGZ'),
        x = u.a.b721eb37,
        A = u.a.b5711f09,
        L = u.a.df4bead0,
        O = u.a.jdb52860,
        k = u.a.b468ea24,
        B = u.a.b25fcbe4,
        N = u.a.f6d0427f,
        R = u.a.c8c2c891,
        F = u.a.g98ea6c0,
        M = u.a.ff3e0be2,
        D = u.a.i859a9d3,
        H = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        P = { page: 'birdwatch', section: 'about' },
        j = function (e) {
          var t = e.history,
            a = r.a.useContext(i.a).featureSwitches,
            n = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(f.a, { style: [z.header, { backgroundImage: 'url('.concat(o, ')') }] }),
              r.a.createElement(
                f.a,
                { style: z.content },
                r.a.createElement(m.b, { size: 'title4', style: z.textSection, weight: 'heavy' }, A),
                r.a.createElement(m.b, { color: 'gray700', style: z.textSection }, L),
                r.a.createElement(h.a, U),
              ),
              r.a.createElement(f.a, { style: z.learnMore }, r.a.createElement(m.b, { link: H }, D)),
              !a.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                r.a.createElement(
                  f.a,
                  { style: z.buttonContainer },
                  r.a.createElement(
                    g.a,
                    { accessibilityLabel: M, link: '/i/flow/join-birdwatch', style: z.button, type: 'brandFilled' },
                    M,
                  ),
                ),
            )
          return r.a.createElement(
            p.c,
            { namespace: P },
            r.a.createElement(
              d.a,
              null,
              r.a.createElement(b.a, {
                TabBar: l.a,
                history: t,
                logoButton: r.a.createElement(r.a.Fragment, null),
                primaryContent: n,
                sidebarContent: r.a.createElement(c.a, null),
                title: x,
                withTweetButton: !1,
              }),
            ),
          )
        },
        z = v.a.create(function (e) {
          return {
            button: { marginTop: e.spaces.space20 },
            buttonContainer: { alignItems: 'center' },
            content: { margin: e.spaces.space20 },
            header: {
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              height: '167px',
              justifyContent: 'center',
              width: '100%',
            },
            icon: {
              backgroundColor: e.colors.primary,
              color: e.colors.white,
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space16,
              marginRight: e.spaces.space12,
              padding: e.spaces.space8,
              width: e.spaces.space16,
            },
            infoItemContainer: { paddingHorizontal: 0 },
            learnMore: {
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderTopWidth: e.borderWidths.small,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            textSection: { marginBottom: e.spaces.space16 },
          }
        }),
        U = {
          accessibilityLabel: x,
          containerStyle: z.infoItemContainer,
          items: [
            { label: O, decoration: r.a.createElement(S, { style: z.icon }), description: k },
            { label: B, decoration: r.a.createElement(I.a, { style: z.icon }), description: N },
            { label: R, decoration: r.a.createElement(T.a, { style: z.icon }), description: F },
          ],
        }
      t.default = j
    },
    L5MV: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        b = a('KEM+'),
        f = a.n(b),
        m = (a('2G9S'), a('ERkP')),
        h = a.n(m),
        g = a('MvLc'),
        v = a('rxPX'),
        E = a('0KEI'),
        y = Object(v.a)()
          .propsFromState(function () {
            return { userAlias: g.y }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: g.l,
            }
          })
          .withAnalytics({ page: 'birdwatch', component: 'birdwatch_tab_bar' }),
        w = a('3XMw'),
        _ = a.n(w),
        C = a('gASw'),
        S = a('v6aA'),
        I = a('C6f5'),
        T = a('2qZs'),
        x = a('PU7B'),
        A = a('YI7k'),
        L = a('boUI'),
        O = a('6ZHn'),
        k = a('89Im'),
        B = a('yiKp'),
        N = a.n(B),
        R = a('Lsrn'),
        F = a('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            h.a.createElement(
              'g',
              null,
              h.a.createElement('path', {
                d: 'M11.188 14.813c.217.217.506.337.812.337.307 0 .596-.12.813-.337l5-5c.217-.218.337-.507.337-.815 0-.307-.12-.595-.338-.812-.217-.216-.506-.336-.814-.336h-.003c-.307 0-.594.12-.81.337l-3.035 3.037V2c0-.634-.517-1.15-1.15-1.15-.634 0-1.15.516-1.15 1.15v9.225L7.813 8.188C7.596 7.97 7.307 7.85 7 7.85c-.308 0-.596.12-.813.338-.218.22-.337.51-.337.817 0 .306.12.593.337.808l5 5z',
              }),
              h.a.createElement('path', {
                d: 'M21.25 12.85c-.634 0-1.15.517-1.15 1.15v5.652c0 .216-.176.392-.392.392H4.292c-.216 0-.392-.176-.392-.392V14c0-.634-.516-1.15-1.15-1.15S1.6 13.366 1.6 14v5.652c0 1.484 1.208 2.692 2.692 2.692h15.416c1.484 0 2.692-1.208 2.692-2.692V14c0-.634-.516-1.15-1.15-1.15z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var D = M,
        H = a('6s7X'),
        P = a('Nh1N'),
        j = _.a.d5b2da0a,
        z = _.a.b5711f09,
        U = _.a.ha8209bb,
        W = _.a.ff692d63,
        V = _.a.cb1adfa0,
        K = _.a.b721eb37,
        G = '/i/birdwatch',
        q = function (e, t) {
          return (
            t.pathname === G ||
            t.pathname === ''.concat(G, '/new') ||
            t.pathname === ''.concat(G, '/needs_your_help') ||
            t.pathname === ''.concat(G, '/rated_helpful')
          )
        },
        X = function () {
          return !1
        },
        Q = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(l()(e), '_isOwnProfilePageActive', function (t, a) {
                var n = e.props.userAlias
                return !!n && a.pathname === ''.concat(G, '/u/').concat(n)
              }),
              f()(l()(e), '_handleTabClickFactory', function (t) {
                return function (a) {
                  e.props.analytics.scribe({ element: t, action: 'navigate' })
                }
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchUserAlias)().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.layout,
                    a = void 0 === t ? 'horizontal' : t,
                    n = e.wideMode,
                    r = void 0 !== n && n,
                    i = e.withLabel,
                    o = void 0 !== i && i,
                    c = this.context.featureSwitches
                  return h.a.createElement(
                    I.b,
                    { layout: a, primaryLabel: j, wideMode: r },
                    h.a.createElement(C.a, {
                      accessibilityLabel: z,
                      isActive: X,
                      label: z,
                      layout: a,
                      onClick: this._handleTabClickFactory('home'),
                      path: G,
                      renderIcon: Object(I.c)(T.a, T.a, a),
                      withLabel: o,
                    }),
                    h.a.createElement(C.a, {
                      accessibilityLabel: U,
                      isActive: q,
                      label: U,
                      layout: a,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: G,
                      renderIcon: Object(I.c)(x.a, A.a, a),
                      withLabel: o,
                    }),
                    c.isTrue('responsive_web_birdwatch_note_writing_enabled')
                      ? h.a.createElement(C.a, {
                          accessibilityLabel: W,
                          isActive: this._isOwnProfilePageActive,
                          label: W,
                          layout: a,
                          onClick: this._handleTabClickFactory('user_notes'),
                          path: ''.concat(G, '/u/me'),
                          renderIcon: Object(I.c)(L.a, O.a, a),
                          withLabel: o,
                        })
                      : null,
                    h.a.createElement(C.a, {
                      accessibilityLabel: V,
                      label: V,
                      layout: a,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: ''.concat(G, '/download-data'),
                      renderIcon: Object(I.c)(k.a, D, a),
                      withLabel: o,
                    }),
                    h.a.createElement(C.a, {
                      accessibilityLabel: K,
                      label: K,
                      layout: a,
                      onClick: this._handleTabClickFactory('about'),
                      path: ''.concat(G, '/about'),
                      renderIcon: Object(I.c)(H.a, P.a, a),
                      withLabel: o,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      f()(Q, 'contextType', S.a)
      var Z = y(Q)
      t.a = Z
    },
    MvLc: function (e, t, a) {
      'use strict'
      a.d(t, 'r', function () {
        return R
      }),
        a.d(t, 'x', function () {
          return D
        }),
        a.d(t, 'o', function () {
          return H
        }),
        a.d(t, 'u', function () {
          return P
        }),
        a.d(t, 's', function () {
          return j
        }),
        a.d(t, 'y', function () {
          return U
        }),
        a.d(t, 'v', function () {
          return W
        }),
        a.d(t, 'n', function () {
          return V
        }),
        a.d(t, 'p', function () {
          return K
        }),
        a.d(t, 'w', function () {
          return G
        }),
        a.d(t, 't', function () {
          return q
        }),
        a.d(t, 'q', function () {
          return X
        }),
        a.d(t, 'k', function () {
          return Q
        }),
        a.d(t, 'g', function () {
          return Z
        }),
        a.d(t, 'h', function () {
          return J
        }),
        a.d(t, 'l', function () {
          return Y
        }),
        a.d(t, 'j', function () {
          return $
        }),
        a.d(t, 'f', function () {
          return ee
        }),
        a.d(t, 'm', function () {
          return te
        }),
        a.d(t, 'd', function () {
          return ae
        }),
        a.d(t, 'b', function () {
          return ne
        }),
        a.d(t, 'z', function () {
          return re
        }),
        a.d(t, 'c', function () {
          return ie
        }),
        a.d(t, 'e', function () {
          return oe
        }),
        a.d(t, 'a', function () {
          return ce
        }),
        a.d(t, 'i', function () {
          return le
        })
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        c = a('yiKp'),
        l = a.n(c),
        s = (a('yH/f'), a('KOtZ'), a('7x/C'), a('z84I'), a('LW0h'), a('JtPf'), a('/kEJ')),
        u = a('kGix'),
        d = a('Ssj5'),
        p = a('oEOe'),
        b = a('3A2y'),
        f = a('YeIG'),
        m = ['rating'],
        h = 'birdwatchNotes',
        g = 'rweb/'.concat(h),
        v = Object(p.a)(g, 'DELETE_NOTE'),
        E = Object(p.a)(g, 'CREATE_RATING'),
        y = Object(p.a)(g, 'DELETE_RATING'),
        w = Object(p.a)(g, 'SELECT_ALIAS'),
        _ = Object(p.a)(g, 'CREATE_APPEAL'),
        C = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_DATA_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_DATA_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_DATA_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_FAILURE',
        }),
        I = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE',
        }),
        T = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/CREATE_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/CREATE_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/CREATE_NOTE_FAILURE',
        }),
        x = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE',
        }),
        A = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE',
        }),
        L = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE',
        }),
        O = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_NOTE_FAILURE',
        }),
        k = 'rweb/birdwatchNotes/SAVE_FORM_DRAFT',
        B = { drafts: {}, notes: {}, tweetNotes: {}, contributor: {}, publicData: {} }
      d.a.register(
        o()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case T.SUCCESS:
              var a,
                n = null === (a = t.payload) || void 0 === a ? void 0 : a.result
              if (n) {
                var i,
                  c,
                  s =
                    null === (i = t.payload) || void 0 === i || null === (c = i.entities) || void 0 === c
                      ? void 0
                      : c.birdwatchNotes[n],
                  d = s.tweet.rest_id
                return l()(
                  l()({}, e),
                  {},
                  {
                    notes: l()(l()({}, e.notes), {}, o()({}, n, s)),
                    tweetNotes: l()(
                      l()({}, e.tweetNotes),
                      {},
                      o()(
                        {},
                        d,
                        l()(l()({}, e.tweetNotes && e.tweetNotes[d]), {}, { ownNoteId: n, fetchStatus: u.a.LOADED }),
                      ),
                    ),
                  },
                )
              }
              return e
            case v.SUCCESS:
              var p,
                h = null === (p = t.meta) || void 0 === p ? void 0 : p.note_id
              return h ? l()(l()({}, e), {}, { notes: Object(b.a)(e.notes, h) }) : e
            case E.SUCCESS:
              var g,
                _ = null === (g = t.meta) || void 0 === g ? void 0 : g.note_id,
                N = t.payload
              return _
                ? l()(
                    l()({}, e),
                    {},
                    { notes: l()(l()({}, e.notes), {}, o()({}, _, l()(l()({}, e.notes[_]), {}, { rating: N }))) },
                  )
                : e
            case y.SUCCESS:
              var R,
                F = null === (R = t.meta) || void 0 === R ? void 0 : R.note_id
              if (F) {
                var M = e.notes[F],
                  D = (M.rating, r()(M, m))
                return l()(l()({}, e), {}, { notes: l()(l()({}, e.notes), {}, o()({}, F, l()({}, D))) })
              }
              return e
            case x.REQUEST:
              var H,
                P = null === (H = t.meta) || void 0 === H ? void 0 : H.tweet_id
              return P
                ? l()(
                    l()({}, e),
                    {},
                    {
                      tweetNotes: l()(
                        l()({}, e.tweetNotes),
                        {},
                        o()({}, P, l()(l()({}, e.tweetNotes && e.tweetNotes[P]), {}, { fetchStatus: u.a.LOADING })),
                      ),
                    },
                  )
                : e
            case x.FAILURE:
              var j,
                z = null === (j = t.meta) || void 0 === j ? void 0 : j.tweet_id
              return z
                ? l()(
                    l()({}, e),
                    {},
                    {
                      tweetNotes: l()(
                        l()({}, e.tweetNotes),
                        {},
                        o()({}, z, l()(l()({}, e.tweetNotes[z]), {}, { fetchStatus: u.a.FAILED })),
                      ),
                    },
                  )
                : e
            case x.SUCCESS:
              var U,
                W,
                V = null === (U = t.payload) || void 0 === U ? void 0 : U.result,
                K = null === (W = t.meta) || void 0 === W ? void 0 : W.tweet_id
              if (V) {
                var G,
                  q,
                  X =
                    null === (G = t.payload) || void 0 === G || null === (q = G.entities) || void 0 === q
                      ? void 0
                      : q.birdwatchNotes[V],
                  Q = (null == X ? void 0 : X.ids) || [],
                  Z = Q.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  J = Q.map(function (e) {
                    return e.rest_id
                  }),
                  Y = {}
                return (
                  (Y.ids = J),
                  (Y.fetchStatus = u.a.LOADED),
                  null != X && X.ownNoteId && (Y.ownNoteId = null == X ? void 0 : X.ownNoteId),
                  t.meta
                    ? l()(
                        l()({}, e),
                        {},
                        { notes: l()(l()({}, e.notes), Z), tweetNotes: l()(l()({}, e.tweetNotes), {}, o()({}, K, Y)) },
                      )
                    : e
                )
              }
              return K
                ? l()(
                    l()({}, e),
                    {},
                    { tweetNotes: l()(l()({}, e.tweetNotes), {}, o()({}, K, { fetchStatus: u.a.LOADED })) },
                  )
                : e
            case A.REQUEST:
              var $,
                ee = null === ($ = t.meta) || void 0 === $ ? void 0 : $.alias
              return ee
                ? l()(
                    l()({}, e),
                    {},
                    {
                      contributor: l()(
                        l()({}, e.contributor),
                        {},
                        o()({}, ee, l()(l()({}, e.contributor[ee]), {}, { fetchStatus: u.a.LOADING })),
                      ),
                    },
                  )
                : e
            case A.FAILURE:
              var te,
                ae = null === (te = t.meta) || void 0 === te ? void 0 : te.alias
              return ae
                ? l()(
                    l()({}, e),
                    {},
                    {
                      contributor: l()(
                        l()({}, e.contributor),
                        {},
                        o()({}, ae, l()(l()({}, e.contributor[ae]), {}, { fetchStatus: u.a.FAILED })),
                      ),
                    },
                  )
                : e
            case A.SUCCESS:
              var ne,
                re,
                ie = null === (ne = t.meta) || void 0 === ne ? void 0 : ne.alias,
                oe = null === (re = t.payload) || void 0 === re ? void 0 : re.result
              if (oe && t.meta) {
                var ce,
                  le,
                  se =
                    null === (ce = t.payload) || void 0 === ce || null === (le = ce.entities) || void 0 === le
                      ? void 0
                      : le.birdwatchNotes[oe],
                  ue = (null == se ? void 0 : se.notes) || [],
                  de = ue.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  pe = ue.map(function (e) {
                    return e.rest_id
                  }),
                  be = {
                    helpful: null == se ? void 0 : se.ratings_received_helpful_count,
                    notHelpful: null == se ? void 0 : se.ratings_received_not_helpful_count,
                    somewhatHelpful: null == se ? void 0 : se.ratings_received_somewhat_helpful_count,
                  },
                  fe = (null == se ? void 0 : se.badges) || []
                return l()(
                  l()({}, e),
                  {},
                  {
                    notes: l()(l()({}, e.notes), de),
                    contributor: l()(
                      l()({}, e.contributor),
                      {},
                      o()({}, oe, { badges: fe, notes: pe, ratings: be, fetchStatus: u.a.LOADED }),
                    ),
                  },
                )
              }
              return ie
                ? l()(
                    l()({}, e),
                    {},
                    {
                      contributor: l()(
                        l()({}, e.contributor),
                        {},
                        o()({}, ie, l()(l()({}, e.contributor[ie]), {}, { fetchStatus: u.a.FAILED })),
                      ),
                    },
                  )
                : e
            case S.SUCCESS:
              var me = t.payload
              return l()(l()({}, e), {}, { contributor: l()(l()({}, e.contributor), {}, { ownAlias: me }) })
            case L.SUCCESS:
              var he = t.payload
              return l()(
                l()({}, e),
                {},
                {
                  contributor: l()(
                    l()({}, e.contributor),
                    {},
                    { showAliasSelfSelect: (null == he ? void 0 : he.can_select) && !(null != he && he.has_selected) },
                  ),
                },
              )
            case I.SUCCESS:
              var ge = t.payload
              return l()(
                l()({}, e),
                {},
                { contributor: l()(l()({}, e.contributor), {}, { aliasSelfSelectOptions: ge }) },
              )
            case O.SUCCESS:
              var ve,
                Ee = t.payload,
                ye = null == Ee ? void 0 : Ee.result
              return ye
                ? l()(
                    l()({}, e),
                    {},
                    {
                      notes: l()(
                        l()({}, e.notes),
                        {},
                        o()(
                          {},
                          ye,
                          l()(
                            l()(
                              {},
                              null == Ee || null === (ve = Ee.entities) || void 0 === ve
                                ? void 0
                                : ve.birdwatchNotes[ye],
                            ),
                            {},
                            { fetchStatus: u.a.LOADED },
                          ),
                        ),
                      ),
                    },
                  )
                : e
            case O.REQUEST:
              var we,
                _e = null === (we = t.meta) || void 0 === we ? void 0 : we.note_id
              return l()(
                l()({}, e),
                {},
                {
                  notes: l()(
                    l()({}, e.notes),
                    {},
                    o()({}, _e, l()(l()({}, e.notes && e.notes[_e]), {}, { fetchStatus: u.a.LOADING })),
                  ),
                },
              )
            case O.FAILURE:
              var Ce,
                Se = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.note_id
              return l()(
                l()({}, e),
                {},
                {
                  notes: l()(
                    l()({}, e.notes),
                    {},
                    o()({}, Se, l()(l()({}, e.notes[Se]), {}, { fetchStatus: u.a.FAILED })),
                  ),
                },
              )
            case C.SUCCESS:
              var Ie = t.payload
              return Ie ? l()(l()({}, e), {}, { publicData: Ie }) : e
            case w.SUCCESS:
              var Te,
                xe = null === (Te = t.meta) || void 0 === Te ? void 0 : Te.alias
              return l()(l()({}, e), {}, { contributor: l()(l()({}, e.contributor), {}, { ownAlias: xe }) })
            case k:
              var Ae = t.payload
              if (Object(f.a)(Ae)) return e
              var Le = Ae.updates,
                Oe = Ae.tweetId
              return l()(l()({}, e), {}, { drafts: l()(l()({}, e.drafts), {}, o()({}, Oe, Le)) })
            default:
              return e
          }
        }),
      )
      var N = [],
        R = function (e, t) {
          return e.birdwatchNotes.notes[t]
        },
        F = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ids
        },
        M = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ownNoteId
        },
        D = function (e, t) {
          if (!t) return null
          var a = M(e, t)
          return a ? R(e, a) : null
        },
        H = function (e, t) {
          var a, n
          if (t)
            return null === (a = e.birdwatchNotes) || void 0 === a || null === (n = a.contributor[t]) || void 0 === n
              ? void 0
              : n.badges
        },
        P = function (e) {
          return e.birdwatchNotes.publicData
        },
        j = function (e, t) {
          var a = t ? F(e, t) : void 0
          if (a) {
            var n = M(e, t)
            return (
              n &&
                (a = a.filter(function (e) {
                  return e !== n
                })),
              a
                .map(function (t) {
                  return R(e, t)
                })
                .filter(Boolean)
            )
          }
          return N
        },
        z = function (e, t) {
          var a = e.birdwatchNotes.contributor[t]
          return a ? a.notes : void 0
        },
        U = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.ownAlias : void 0
        },
        W = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.showAliasSelfSelect : void 0
        },
        V = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.aliasSelfSelectOptions : void 0
        },
        K = function (e, t) {
          if (t) {
            var a = e.birdwatchNotes.contributor[t]
            return a ? a.ratings : void 0
          }
        },
        G = function (e, t) {
          var a = e.birdwatchNotes.tweetNotes[t]
          return a ? a.fetchStatus : u.a.NONE
        },
        q = function (e, t) {
          var a = e.birdwatchNotes.notes[t]
          return a ? a.fetchStatus : u.a.NONE
        },
        X = function (e, t) {
          if (t) {
            var a = e.birdwatchNotes.drafts
            return a ? a[t] : void 0
          }
        },
        Q = function (e) {
          return function (t, a, n) {
            n.api
            var r = !!F(a(), e),
              i = G(a(), e) === u.a.LOADING
            return r || i
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, a, n) {
                      var r = n.api
                      return Object(p.b)(t, { request: r.Birdwatch.fetchNotes, params: { tweet_id: e } })(
                        { actionTypes: x, context: 'FETCH_TWEET_NOTES', meta: { tweet_id: e } },
                        function (e) {
                          if (e) {
                            var t = e.entities
                            return t ? [Object(s.c)(t)] : void 0
                          }
                        },
                      )
                    }
                  })(e),
                )
          }
        },
        Z = function (e) {
          return function (t, a, n) {
            n.api
            var r = !!e && !!z(a(), e),
              i =
                (function (e, t) {
                  var a = e.birdwatchNotes.contributor[t]
                  return a ? a.fetchStatus : u.a.NONE
                })(a(), e) === u.a.LOADING
            return r || i
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, a, n) {
                      var r = n.api
                      return e
                        ? Object(p.b)(t, { request: r.Birdwatch.fetchBirdwatchProfile, params: { alias: e } })(
                            { actionTypes: A, context: 'FETCH_BIRDWATCH_PROFILE', meta: { alias: e } },
                            function (e) {
                              if (e) {
                                var t = e.entities
                                return t && [Object(s.c)(t)]
                              }
                            },
                          )
                        : Promise.resolve()
                    }
                  })(e),
                )
          }
        },
        J = function (e) {
          return function (t, a, n) {
            n.api
            var r = !!R(a(), e),
              i = q(a(), e) === u.a.LOADING
            return r || i
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, a, n) {
                      var r = n.api
                      return Object(p.b)(t, { request: r.Birdwatch.fetchOneNote, params: { note_id: e } })({
                        actionTypes: O,
                        context: 'FETCH_NOTE',
                        meta: { note_id: e },
                      })
                    }
                  })(e),
                )
          }
        },
        Y = function () {
          return function (e, t, a) {
            a.api
            return !!U(t())
              ? Promise.resolve()
              : e(function (e, t, a) {
                  var n = a.api
                  return Object(p.b)(e, { request: n.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: S,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        $ = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(p.b)(e, { request: n.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: L,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        ee = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(p.b)(e, { request: n.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: I,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        te = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(p.b)(t, { request: r.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: w,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        ae = function (e) {
          return { meta: { note_id: e }, type: v.SUCCESS }
        },
        ne = function (e, t) {
          return function (a, n, r) {
            var i = r.api
            return Object(p.b)(a, { request: i.Birdwatch.createNote, params: { tweet_id: e, data: t } })({
              actionTypes: T,
              context: 'CREATE_NOTE',
            })
          }
        },
        re = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: k, payload: e }
              })(e),
            )
          }
        },
        ie = function (e, t) {
          return function (a, n, r) {
            var i = r.api
            return Object(p.b)(a, { request: i.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: E,
              context: 'CREATE_RATING',
              meta: { note_id: e },
            })
          }
        },
        oe = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(p.b)(t, { request: r.Birdwatch.deleteRating, params: { note_id: e } })({
              actionTypes: y,
              context: 'DELETE_RATING',
              meta: { note_id: e },
            })
          }
        },
        ce = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(p.b)(t, { request: r.Birdwatch.createAppeal, params: { note_id: e } })({
              actionTypes: _,
              context: 'CREATE_APPEAL',
              meta: { note_id: e },
            })
          }
        },
        le = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(p.b)(e, { request: n.Birdwatch.fetchPublicData, params: {} })({
              actionTypes: C,
              context: 'FETCH_DATA',
              meta: {},
            })
          }
        }
    },
    NPGn: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return i
      }),
        a.d(t, 'b', function () {
          return o
        }),
        a.d(t, 'c', function () {
          return c
        })
      var n = a('3XMw'),
        r = a.n(n),
        i = 'MisinformedOrPotentiallyMisleading',
        o = 'NotMisleading',
        c = {
          classification: {
            label: r.a.c8a7eee9,
            options: [
              { label: r.a.d4e419f5, value: i },
              { label: r.a.ha9655c2, value: o },
            ],
          },
          misleading_tags: {
            label: r.a.a0cf39fc,
            options: [
              { label: r.a.c33bc7d3, value: 'FactualError' },
              { label: r.a.j6e12b24, value: 'ManipulatedMedia' },
              { label: r.a.aadb676b, value: 'OutdatedInformation' },
              { label: r.a.g21a0ef3, value: 'MissingImportantContext' },
              { label: r.a.daf354dd, value: 'DisputedClaimAsFact' },
              { label: r.a.d1d2ef84, value: 'MisinterpretedSatire' },
              { label: r.a.c365dcc5, value: 'Other' },
            ],
          },
          believable: {
            label: r.a.ce5fa5d4,
            options: [
              { label: r.a.d617b1b9, value: 'BelievableByFew' },
              { label: r.a.c5be638b, value: 'BelievableByMany' },
            ],
          },
          harmful: {
            label: r.a.cd06cf1a,
            options: [
              { label: r.a.c23c72e6, value: 'LittleHarm' },
              { label: r.a.ee822d70, value: 'ConsiderableHarm' },
            ],
          },
          validation: {
            label: r.a.d19bf2bc,
            options: [
              { label: r.a.h25771bb, value: 'Easy' },
              { label: r.a.e0830664, value: 'Challenging' },
            ],
          },
          not_misleading_tags: {
            label: r.a.j206b73d,
            options: [
              { label: r.a.g228df26, value: 'FactuallyCorrect' },
              { label: r.a.dd55f821, value: 'OutdatedNowButNotWhenWritten' },
              { label: r.a.hf607a09, value: 'ClearlySatire' },
              { label: r.a.j6ac7741, value: 'PersonalOpinion' },
              { label: r.a.c365dcc5, value: 'Other' },
            ],
          },
          trustworthy_sources: {
            label: r.a.b1d82aae,
            options: [
              { label: r.a.b7ec04f3, value: !0 },
              { label: r.a.i62a03aa, value: !1 },
            ],
          },
        }
    },
    PKU5: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchNoteScreen', function () {
          return B
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('ZD0R'),
        l = (a('KqXw'), a('WNMA'), a('MvLc')),
        s = a('rxPX'),
        u = a('0KEI'),
        d = function (e, t) {
          return t.match.params.noteId
        },
        p = function (e, t) {
          return l.r(e, d(0, t))
        },
        b = function (e, t) {
          return l.t(e, d(0, t))
        },
        f = Object(s.a)()
          .propsFromState(function () {
            return { noteData: p, noteId: d, fetchStatus: b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: l.h,
            }
          }),
        m = a('kGix'),
        h = a('jHSc'),
        g = a('3XMw'),
        v = a.n(g),
        E = a('0zXz'),
        y = a('aITJ'),
        w = a('MWbm'),
        _ = a('FIs5'),
        C = a('htQn'),
        S = a('rHpw'),
        I = a('Qwev'),
        T = v.a.c87f3cf8,
        x = v.a.i859a9d3,
        A = v.a.efd14e79,
        L = v.a.a5b19492,
        O = o.a.createElement(_.a, { buttonLink: '/i/birdwatch/about', buttonText: x, header: L }),
        k = E.a,
        B = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchOneNoteIfNeeded,
            n = e.fetchStatus,
            i = e.history,
            l = e.noteData,
            s = e.noteId,
            u = o.a.useState(l),
            d = r()(u, 2),
            p = d[0],
            b = d[1]
          o.a.useEffect(
            function () {
              s && a(s).catch(t())
            },
            [t, a, s],
          ),
            o.a.useEffect(
              function () {
                b(l)
              },
              [l],
            )
          var f = o.a.createElement(
            C.a,
            null,
            p && p.data_v1
              ? o.a.createElement(
                  w.a,
                  { style: N.contentWrapper },
                  o.a.createElement(c.a, {
                    handleDelete: function (e) {
                      b(null)
                    },
                    note: p,
                    showPivot: !0,
                    showTweet: !0,
                  }),
                )
              : n === m.a.LOADING
              ? R
              : O,
          )
          return o.a.createElement(
            h.b,
            { history: i, renderHeader: y.b.isTwitterApp() ? k : void 0, title: T },
            o.a.createElement(w.a, { style: N.contentWrapper }, f),
          )
        },
        N = S.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        R = o.a.createElement(I.a, { accessibilityLabel: A, size: 'large', style: N.spinner }),
        F = f(B)
      t.default = F
    },
    QDet: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 3.413c.45 0 .814-.365.814-.815V1.315a.814.814 0 10-1.628 0v1.284c0 .449.364.814.814.814zm0 17.174a.814.814 0 00-.814.815v1.284a.814.814 0 101.628 0v-1.284a.813.813 0 00-.814-.815zm10.685-9.402h-1.284a.814.814 0 100 1.628h1.284a.814.814 0 100-1.628zm-20.087.001H1.315a.814.814 0 100 1.628h1.284a.814.814 0 10-.001-1.628zm16.626-5.259l.908-.908a.814.814 0 10-1.152-1.152l-.908.907a.814.814 0 101.152 1.153zM4.777 18.072l-.908.908a.814.814 0 101.152 1.152l.908-.908a.814.814 0 10-1.152-1.152zm14.447 0a.814.814 0 10-1.152 1.152l.908.908a.814.814 0 101.152-1.152l-.908-.908zM4.776 5.927a.814.814 0 101.152-1.152l-.908-.907A.814.814 0 103.868 5.02l.908.907zm10.264.372c-1.378 0-2.408.841-3.039 1.621-.631-.78-1.661-1.621-3.039-1.621-2.005 0-3.763 1.866-3.763 3.992 0 4.281 5.042 8.802 6.815 8.834 1.747-.032 6.788-4.553 6.788-8.834 0-2.126-1.759-3.992-3.762-3.992zm-3.025 11.389c-.934-.05-5.378-3.835-5.378-7.397 0-1.337 1.108-2.555 2.326-2.555 1.496 0 2.367 1.781 2.374 1.798.11.269.372.441.663.443h.003a.723.723 0 00.664-.442c.007-.018.879-1.799 2.374-1.799 1.217 0 2.325 1.218 2.325 2.555-.002 3.562-4.445 7.348-5.351 7.397z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    UZjl: function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        c = a('yiKp'),
        l = a.n(c),
        s = (a('hBpG'), a('7x/C'), a('ERkP')),
        u = a.n(s),
        d = a('es0u'),
        p = a('hqKg'),
        b = a('MDbM'),
        f = a('rxPX'),
        m = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        h = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        g = Object(p.createSelector)(m, h, function (e, t) {
          return t !== b.a.LOADED || (!!e && !!e.tabs)
        }),
        v = Object(f.a)()
          .propsFromState(function () {
            return { hasTabNavigation: g, pageConfiguration: m, initialFetchStatus: h }
          })
          .withAnalytics(),
        E = a('QIgh'),
        y = a('s14A'),
        w = a('dwig'),
        _ = (a('uFXj'), a('7JQg')),
        C = a('rHpw'),
        S = a('GKOv'),
        I = a('Rp9C'),
        T = a('Irs7')
      function x(e, t) {
        var a = Object(T.b)(),
          n = t || {},
          r = n.component,
          i = n.element,
          o = u.a.useMemo(
            function () {
              return { items: [I.a.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          u.a.useEffect(
            function () {
              a.scribe({ component: r, element: i, action: 'impression', data: o })
            },
            [o, r, i, a],
          ),
          { namespace: { component: r, element: i }, data: o }
        )
      }
      var A = a('MWbm')
      function L(e) {
        var t = e.header,
          a = t.clientEventInfo,
          n = t.displayType,
          r = t.facepile,
          i = t.landingContext,
          o = t.topicId,
          c = e.onHeaderVisible,
          l = x(o, a),
          s = l.data,
          d = l.namespace
        return u.a.createElement(
          A.a,
          { style: O.root },
          u.a.createElement(
            _.c,
            { data: s, namespace: d },
            u.a.createElement(S.a, {
              displayType: n,
              facepile: r,
              onFollowHeaderOffscreen: function (e) {
                var t = e.isOffscreen
                return c(!t)
              },
              topicId: o,
              topicLandingContext: i,
              withDivider: !0,
            }),
          ),
        )
      }
      var O = C.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        k = a('3XMw'),
        B = a.n(k),
        N = (a('1t7P'), a('jQ/y'), a('ho0z'), a('zI2C')),
        R = a('v6aA'),
        F = a('Zejx'),
        M = function (e, t) {
          var a = t.navBar.topicId ? t.navBar.topicId : ''
          return F.a.select(e, a)
        },
        D = Object(f.a)().propsFromState(function () {
          return { topic: M }
        }),
        H = a('PbbS'),
        P = a('LWCC'),
        j = a('IcAo'),
        z = a('rJoH'),
        U = a('I6Uj'),
        W = a('zfvc'),
        V = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        K = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        G = B.a.ed88e742
      var q = C.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        X = D(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            a = e.isHeaderOffscreen,
            n = e.navBar.clientEventInfo,
            r = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            c = e.withOpenGraphMeta,
            l = u.a.useContext(R.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            s = x(t, n),
            d = s.data,
            p = s.namespace,
            b = Object(j.a)({}, r, p)
          return i
            ? u.a.createElement(
                _.c,
                { data: d, namespace: b },
                u.a.createElement(
                  u.a.Fragment,
                  null,
                  c
                    ? u.a.createElement(z.a, {
                        canonical: V(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? u.a.createElement(N.a, { deepLink: K(t) }) : null,
                  u.a.createElement(
                    A.a,
                    { style: q.rightControl },
                    u.a.createElement(
                      A.a,
                      { style: q.followButtonContainer },
                      u.a.createElement(
                        W.b,
                        { animateMount: !0, show: a, type: 'fade' },
                        u.a.createElement(P.a, { size: 'medium', textMode: H.a.FollowTopic, topic: i }),
                      ),
                    ),
                    l ? u.a.createElement(U.a, { copyLinkShareLabel: G, scribeNamespace: b, url: V(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        Q = a('yoO3'),
        Z = a('VrFO'),
        J = a.n(Z),
        Y = a('Y9Ll'),
        $ = a.n(Y),
        ee = a('1Pcy'),
        te = a.n(ee),
        ae = a('5Yy7'),
        ne = a.n(ae),
        re = a('2VqO'),
        ie = a.n(re),
        oe = a('KEM+'),
        ce = a.n(oe),
        le = (a('2G9S'), a('v84o')),
        se = a('0KEI'),
        ue = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        de = function (e, t) {
          var a = t.selectedTabId,
            n = ue(e, t)
          return (
            n &&
            n.tabs &&
            n.tabs.tabs.find(function (e) {
              return e.id === a
            })
          )
        },
        pe = Object(f.a)()
          .propsFromState(function () {
            return { pageConfiguration: ue, selectedTab: de }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(se.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
            }
          })
          .withAnalytics(),
        be = a('doI8'),
        fe = a('oQhu'),
        me = a('fTQJ'),
        he = ['entityToken'],
        ge = pe(
          (function (e) {
            ne()(a, e)
            var t = ie()(a)
            function a() {
              var e
              J()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                ce()(te()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    a = t.analytics,
                    n = t.pageConfiguration,
                    r = t.selectedTab,
                    i = (null == r ? void 0 : r.scribeConfig) || (null == n ? void 0 : n.scribeConfig)
                  if (i) {
                    i.entityToken
                    return o()(i, he)
                  }
                  return a.contextualScribeNamespace
                }),
                ce()(
                  te()(e),
                  '_getModule',
                  Object(fe.a)(function (e, t, a, n) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(le.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: n })
                      if (null != e && e.graphQLTimelineId) return Object(be.a)(e.graphQLTimelineId)
                    }
                    return a
                  }),
                ),
                ce()(te()(e), '_getRefreshIntervalSecForCurrentTab', function () {
                  var t,
                    a = e.props,
                    n = a.pageConfiguration,
                    r = a.selectedTab,
                    i = null == n || null === (t = n.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (r) return r.refreshIntervalSec
                  if (i) {
                    var o,
                      c =
                        null == n || null === (o = n.tabs) || void 0 === o
                          ? void 0
                          : o.tabs.find(function (e) {
                              return i === e.id
                            })
                    return null == c ? void 0 : c.refreshIntervalSec
                  }
                }),
                e
              )
            }
            return (
              $()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t,
                      a = this.props,
                      n = a.entryConfiguration,
                      r = a.initialModule,
                      i = a.pageConfiguration,
                      o = a.prerollDisplayLocation,
                      c = a.refreshControl,
                      l = a.renderEmptyState,
                      s = a.renderUnavailable,
                      d = a.selectedTab,
                      p = a.timelinePrefix,
                      b = a.title,
                      f = a.withoutHeadroom,
                      m = {
                        token: null == i || null === (e = i.scribeConfig) || void 0 === e ? void 0 : e.entityToken,
                      },
                      h = this._getModule(
                        d,
                        null == i || null === (t = i.tabs) || void 0 === t ? void 0 : t.initialTabId,
                        r,
                        p,
                      ),
                      g = this._getRefreshIntervalSecForCurrentTab(),
                      v = g ? 1e3 * g : void 0
                    return u.a.createElement(
                      _.c,
                      { namespace: this._getTimelineNamespace() },
                      u.a.createElement(me.a, {
                        behavioralEventContext: m,
                        entryConfiguration: n,
                        module: h,
                        pollingIntervalMsOverride: v,
                        prerollDisplayLocation: o,
                        refreshControl: c,
                        renderEmptyState: l,
                        renderUnavailable: s,
                        title: b,
                        withoutHeadroom: f,
                      }),
                    )
                  },
                },
              ]),
              a
            )
          })(u.a.Component),
        ),
        ve = (a('z84I'), a('+Kfv')),
        Ee = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        ye = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        we = function (e, t) {
          var a = t.selectedTabId,
            n = ye(e, t)
          return (
            n &&
            n.tabs &&
            n.tabs.tabs.find(function (e) {
              return e.id === a
            })
          )
        },
        _e = Object(f.a)()
          .propsFromState(function () {
            return { initialFetchStatus: Ee, pageConfiguration: ye, selectedTab: we }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(se.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
              fetchInitial: t.fetchInitial,
            }
          })
          .withAnalytics(),
        Ce = a('Nhmk'),
        Se = a('k/OQ'),
        Ie = a('G8HL'),
        Te = ['entityToken'],
        xe = { viewType: 'controls' },
        Ae = (function (e) {
          ne()(a, e)
          var t = ie()(a)
          function a() {
            var e
            J()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              ce()(te()(e), '_fetchPageModule', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.createLocalApiErrorHandler,
                  r = t.fetchInitial,
                  i = t.pageConfiguration,
                  o = i ? i.scribeConfig : void 0
                return r().then(function (t) {
                  t.performed && a.scribe(l()(l()({}, e._getScribeNamespace(o)), {}, { action: 'get_initial' }))
                }, n(Ce.a))
              }),
              ce()(te()(e), '_render', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.getTabLink,
                  r = t.pageConfiguration,
                  i = t.selectedTab,
                  o = null == r ? void 0 : r.tabs
                if (o && o.tabs) {
                  var c,
                    l = (i && i.id) || o.initialTabId,
                    s = r ? r.scribeConfig : void 0,
                    d = o.tabs.map(function (t, r) {
                      var i,
                        o = t.id === l
                      return (
                        o && (c = r),
                        {
                          isActive: function () {
                            return o
                          },
                          key: t.labelText,
                          label: t.labelText,
                          onClick: function () {
                            a.scribe(
                              e._buildTabNamespace(e._getScribeNamespace(s), e._getScribeNamespace(t.scribeConfig)),
                            )
                          },
                          to: n(t.id),
                          token: null === (i = t.scribeConfig) || void 0 === i ? void 0 : i.entityToken,
                        }
                      )
                    })
                  return u.a.createElement(
                    ve.a,
                    { behavioralEventContext: xe },
                    u.a.createElement(Se.a, { links: d, visibleItemIndex: c }),
                  )
                }
                return null
              }),
              e
            )
          }
          return (
            $()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchPageModule()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(e.module === this.props.module && this.props.initialFetchStatus) || this._fetchPageModule()
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.initialFetchStatus === b.a.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function (e, t) {
                  var a
                  return (
                    e && (a = e),
                    t && (a = l()(l()({}, a), t)),
                    l()(l()({}, a), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function (e) {
                  if (e) {
                    e.entityToken
                    return o()(e, Te)
                  }
                },
              },
            ]),
            a
          )
        })(u.a.Component),
        Le = _e(Object(Ie.a)(Ae)),
        Oe = a('VS6U'),
        ke = a('5Y9N'),
        Be = a('FIs5'),
        Ne = a('cHvH'),
        Re = a('mw9i'),
        Fe = ['entityToken'],
        Me = ['entityToken'],
        De = B.a.e9f1fbcb,
        He = u.a.createElement(d.a, null),
        Pe = Object(fe.a)(function (e, t) {
          return l()(l()({}, t), Object(ke.a)({ isWide: e }))
        }),
        je = function (e) {
          var t = e.TabBar,
            a = e.backLocation,
            n = e.behavioralEventViewType,
            i = e.documentTitle,
            c = e.entryConfiguration,
            l = e.fab,
            s = e.getTabLink,
            d = e.hasTabNavigation,
            p = e.history,
            f = e.initialFetchStatus,
            m = e.initialPageNamespace,
            h = e.logoButton,
            g = e.module,
            v = e.onBackClick,
            E = e.pageConfiguration,
            S = e.prerollDisplayLocation,
            I = e.renderEmptyState,
            T = e.renderUnavailable,
            x = e.rightControl,
            A = e.searchBoxRef,
            O = e.selectedTabId,
            k = e.sidebarContent,
            B = e.timelinePrefix,
            N = e.title,
            R = e.withAppLinks,
            F = e.withBottomLoginSignupBar,
            M = e.withDeferredView,
            D = e.withOpenGraphMeta,
            H = e.withSearchBox,
            P = e.withTweetButton,
            z = u.a.useState(!0),
            U = r()(z, 2),
            W = U[0],
            V = U[1],
            K = E || {},
            G = K.header,
            q = K.navBar,
            Z = K.subtitle,
            J = K.title,
            Y = f === b.a.LOADED ? J || N : '',
            $ = (function (e, t, a) {
              var n = (null == t ? void 0 : t.scribeConfig) || {},
                r = (n.entityToken, o()(n, Fe)),
                i = null == t ? void 0 : t.tabs,
                c = e || (null == i ? void 0 : i.initialTabId),
                l =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === c
                      }),
                s = (null == l ? void 0 : l.scribeConfig) || {},
                u = (s.entityToken, o()(s, Me))
              return Object(j.a)({}, a, r, u)
            })(O, E, m),
            ee = G ? u.a.createElement(L, { header: G, onHeaderVisible: V }) : null,
            te = q
              ? u.a.createElement(X, {
                  isHeaderOffscreen: !W,
                  navBar: q,
                  pageNamespace: $,
                  withAppLinks: R,
                  withOpenGraphMeta: D,
                })
              : null,
            ae = M ? y.a : u.a.Fragment,
            ne = u.a.createElement(Ne.a, null, function (e) {
              var t = e.windowWidth >= C.a.theme.breakpoints.medium
              return u.a.createElement(
                u.a.Fragment,
                null,
                ee,
                u.a.createElement(
                  ae,
                  null,
                  u.a.createElement(ge, {
                    entryConfiguration: Pe(t, c),
                    initialModule: g,
                    prerollDisplayLocation: S,
                    renderEmptyState: I,
                    renderUnavailable: T,
                    selectedTabId: O,
                    timelinePrefix: B,
                    title: N,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            re = l ? u.a.createElement(w.a, { component: Re.a, fab: l }, ne) : ne,
            ie = s && d ? u.a.createElement(Le, { getTabLink: s, module: g, selectedTabId: O }) : void 0
          return u.a.createElement(
            _.c,
            { namespace: $ },
            u.a.createElement(
              Q.a,
              { behavioralEventViewType: n },
              u.a.createElement(Oe.a, {
                TabBar: t,
                backLocation: a,
                documentTitle: i,
                history: p,
                logoButton: h,
                onBackClick: v,
                primaryContent: re,
                rightControl: te || x,
                searchBoxRef: A,
                secondaryBar: ie,
                sidebarContent: k,
                subtitle: Z,
                title: ee && W ? N : Y,
                withBottomLoginSignupBar: F,
                withSearchBox: H,
                withTweetButton: P,
              }),
            ),
          )
        }
      je.defaultProps = {
        entryConfiguration: E.b,
        renderEmptyState: function () {
          return u.a.createElement(Be.a, { header: De })
        },
        sidebarContent: He,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var ze = v(je)
      t.a = ze
    },
    'W6+M': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('7xRU'), a('z84I'), a('KqXw'), a('Ysgh')
      var n = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return e
          .split('-')
          .map(function (e) {
            return t ? e[0].toUpperCase() + e.substring(1) : e
          })
          .join(' ')
      }
    },
    XioW: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchForm', function () {
          return Le
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        c = a('yiKp'),
        l = a.n(c),
        s = a('ddV6'),
        u = a.n(s),
        d =
          (a('2G9S'),
          a('tVqn'),
          a('jwue'),
          a('7x/C'),
          a('jQ3i'),
          a('x4t0'),
          a('LW0h'),
          a('z84I'),
          a('TJCb'),
          a('DZ+c'),
          a('0zG9'),
          a('KqXw'),
          a('MvUL'),
          a('+oxZ'),
          a('uFXj'),
          a('ERkP')),
        p = a.n(d),
        b = a('v6aA'),
        f = a('9StO'),
        m = (a('WNMA'), a('MvLc')),
        h = a('1YZw'),
        g = a('XOJV'),
        v = a('rxPX'),
        E = a('0KEI'),
        y = function (e, t) {
          return t.match.params.tweetId
        },
        w = function (e, t) {
          return m.x(e, y(0, t))
        },
        _ = function (e, t) {
          return m.q(e, y(0, t))
        },
        C = function (e, t) {
          return m.v(e)
        },
        S = Object(v.a)()
          .propsFromState(function () {
            return { draftData: _, ownNoteData: w, tweetId: y, showAliasSelfSelect: C, userAlias: m.y }
          })
          .propsFromActions(function () {
            return {
              addToast: h.b,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: m.b,
              fetchNotes: m.k,
              fetchShowAliasSelfSelect: m.j,
              fetchTweet: g.a.fetchOneIfNeeded,
              fetchUserAlias: m.l,
              saveFormData: m.z,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form' }),
        I = a('W6+M'),
        T = a('jHSc'),
        x = a('3XMw'),
        A = a.n(x),
        L = a('5FtR'),
        O = a('SrIh'),
        k = a('0zXz'),
        B = a('Rp9C'),
        N = a('xZXe'),
        R = a('aITJ'),
        F = a('MWbm'),
        M = a('t62R'),
        D = a('XiMS'),
        H = a('fyvP'),
        P = a('p+r5'),
        j = a('4zmP'),
        z = a('/yvb'),
        U = a('feu+'),
        W = a('rHpw'),
        V = a('KqB4'),
        K = a.n(V),
        G = a('S1qy'),
        q = a.n(G),
        X = a('Oib4'),
        Q = a('DlMI'),
        Z = a('ms2t'),
        J = a('I/9y'),
        Y = a('EHV7'),
        $ = a('NPGn'),
        ee = A.a.d39e8b30,
        te = A.a.a91bb144,
        ae = A.a.hb2bf967,
        ne = A.a.dc7a6625,
        re = A.a.af778d9e,
        ie = A.a.ifd2c15f,
        oe = A.a.f24ec219,
        ce = A.a.j679dcda,
        le = { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' },
        se = A.a.b7476596,
        ue = A.a.df6c8291,
        de = A.a.h0e35524,
        pe = ['believable', 'harmful', 'validation'],
        be = ['classification', 'summary', 'trustworthy_sources'],
        fe = ['misleading_tags'].concat(pe),
        me = ['not_misleading_tags'],
        he = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ge = ['misleading_tags', 'not_misleading_tags'],
        ve = A.a.b47b5a16,
        Ee = A.a.i0e66c5a,
        ye = A.a.j8e3e3be,
        we = A.a.f1e851ff,
        _e = A.a.ff5dcac8,
        Ce = {
          classification: Ee,
          misleading_tags: ye,
          believable: Ee,
          harmful: Ee,
          validation: Ee,
          summary: we,
          not_misleading_tags: ye,
          trustworthy_sources: Ee,
        },
        Se = A.a.abdd8d09,
        Ie = { explanation: A.a.c097608d, source: A.a.g9cffe15 },
        Te = { explanation: A.a.ba25898c, source: A.a.e764d704 },
        xe = { explanation: A.a.gb67e44c, source: A.a.d6b758a1 },
        Ae = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        Le = function (e) {
          var t = p.a.useContext(b.a).featureSwitches,
            a = e.addToast,
            n = e.analytics,
            i = e.createLocalApiErrorHandler,
            c = e.createNote,
            s = e.draftData,
            d = e.fetchNotes,
            m = e.fetchShowAliasSelfSelect,
            h = e.fetchTweet,
            g = e.fetchUserAlias,
            v = e.history,
            E = e.ownNoteData,
            y = e.saveFormData,
            w = e.showAliasSelfSelect,
            _ = e.tweetId,
            C = e.userAlias,
            S = function (e) {
              return void 0 === e ? Ee : ''
            },
            x = function (e) {
              return q()(e, Ae).weightedLength
            },
            A = function (e) {
              if (!e) return we
              var t = x(e.trim())
              return t <= 0 ? we : t > 280 ? _e : ''
            },
            W = p.a.useState(s || {}),
            V = u()(W, 2),
            G = V[0],
            Le = V[1],
            ke = p.a.useState(
              (function () {
                var e = Ce
                return (
                  he.forEach(function (t) {
                    e[t] = S(G[t])
                  }),
                  ge.forEach(function (t) {
                    var a
                    e[t] = (a = G[t]) && a.length > 0 ? '' : ye
                  }),
                  (e.summary = A(G.summary)),
                  e
                )
              })(),
            ),
            Be = u()(ke, 2),
            Ne = Be[0],
            Re = Be[1],
            Fe = p.a.useState(!1),
            Me = u()(Fe, 2),
            De = Me[0],
            He = Me[1],
            Pe = p.a.useState(!1),
            je = u()(Pe, 2),
            ze = je[0],
            Ue = je[1],
            We = p.a.useState(null),
            Ve = u()(We, 2),
            Ke = Ve[0],
            Ge = Ve[1],
            qe = p.a.useState(w),
            Xe = u()(qe, 2),
            Qe = Xe[0],
            Ze = Xe[1],
            Je = '/i/birdwatch/'.concat(_, '/contribute_complete')
          p.a.useEffect(
            function () {
              _ && (h(_).catch(i()), d(_).catch(i()))
            },
            [i, d, h, _],
          ),
            p.a.useEffect(
              function () {
                g().catch(i())
              },
              [i, g],
            ),
            p.a.useEffect(
              function () {
                m().catch(i())
              },
              [i, m],
            ),
            p.a.useEffect(
              function () {
                Ze(w)
              },
              [w],
            )
          var Ye,
            $e = function (e) {
              var t = B.a.forTweet(_)
              n.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            et = function (e) {
              return function (t, a) {
                $e(e),
                  Le(function (t) {
                    var n = a
                    'trustworthy_sources' === e && ('true' === a ? (n = !0) : 'false' === a && (n = !1))
                    var r = l()(l()({}, t), {}, o()({}, e, n))
                    return y({ updates: r, tweetId: _ }), r
                  }),
                  Re(function (t) {
                    return l()(l()({}, t), {}, o()({}, e, S(a)))
                  })
              }
            },
            tt = function (e) {
              return function (t) {
                return function () {
                  Le(function (a) {
                    if (!a[e]) {
                      Re(function (t) {
                        return l()(l()({}, t), {}, o()({}, e, ''))
                      })
                      var n = l()(l()({}, a), {}, o()({}, e, [t]))
                      return y({ updates: n, tweetId: _ }), n
                    }
                    var i = a[e].includes(t),
                      c = a[e].filter(function (e) {
                        return e !== t
                      })
                    if (i) {
                      Re(function (t) {
                        return c.length > 0 ? l()(l()({}, t), {}, o()({}, e, '')) : l()(l()({}, t), {}, o()({}, e, ye))
                      })
                      var s = l()(l()({}, a), {}, o()({}, e, c))
                      return y({ updates: s, tweetId: _ }), s
                    }
                    Re(function (t) {
                      return l()(l()({}, t), {}, o()({}, e, ''))
                    })
                    var u = l()(l()({}, a), {}, o()({}, e, [].concat(r()(a[e]), [t])))
                    return y({ updates: u, tweetId: _ }), u
                  })
                }
              }
            },
            at = (null == G ? void 0 : G.misleading_tags) || [],
            nt = (null == G ? void 0 : G.not_misleading_tags) || [],
            rt = function (e) {
              return (
                De &&
                '' !== e &&
                p.a.createElement(
                  F.a,
                  { style: Oe.errorContainer },
                  p.a.createElement(X.a, { style: Oe.errorIcon }),
                  p.a.createElement(M.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, e),
                )
              )
            },
            it = p.a.createElement(
              F.a,
              null,
              p.a.createElement(
                F.a,
                { style: Oe.questionSection },
                p.a.createElement(
                  F.a,
                  { accessibilityLabel: $.c.misleading_tags.label, accessibilityRole: 'group' },
                  p.a.createElement(M.b, { weight: 'bold' }, $.c.misleading_tags.label, ' '),
                  $.c.misleading_tags.options.map(function (e) {
                    return p.a.createElement(D.a, {
                      checked: at.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: tt('misleading_tags')(e.value),
                      style: Oe.checkbox,
                    })
                  }),
                  rt(Ne.misleading_tags),
                ),
              ),
              pe.map(function (e) {
                return p.a.createElement(
                  F.a,
                  { key: $.c[e].label, style: Oe.questionSection },
                  p.a.createElement(H.a, {
                    label: $.c[e].label,
                    name: e,
                    onChange: et(e),
                    options: $.c[e].options,
                    value: G[e],
                  }),
                  rt(Ne[e]),
                )
              }),
            ),
            ot = p.a.createElement(
              F.a,
              { style: Oe.questionSection },
              p.a.createElement(
                F.a,
                { accessibilityLabel: $.c.not_misleading_tags.label, accessibilityRole: 'group' },
                p.a.createElement(M.b, { weight: 'bold' }, $.c.not_misleading_tags.label, ' '),
                $.c.not_misleading_tags.options.map(function (e) {
                  return p.a.createElement(D.a, {
                    checked: nt.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: tt('not_misleading_tags')(e.value),
                    style: Oe.checkbox,
                  })
                }),
                rt(Ne.not_misleading_tags),
              ),
            ),
            ct = function (e) {
              return (
                0 ===
                e.filter(function (e) {
                  return !!Ne[e]
                }).length
              )
            },
            lt = function () {
              var e = G.summary || ''
              return !(!ct(be) || '' !== A(e)) && !!((ut === $.a && ct(fe)) || (ut === $.b && ct(me)))
            },
            st = function () {
              Ue(!0),
                c(_, G)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      a({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(O.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        $e('submit_failed'),
                        Ue(!1)
                    } else y({ updates: {}, tweetId: _ }), v.replace(Je)
                  })
                  .catch(function (e) {
                    i({ defaultToast: { text: de, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      Ue(!1),
                      $e('submit_failed'),
                      Object(O.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            ut = G.classification,
            dt = G.trustworthy_sources,
            pt = void 0 === dt ? '' : dt ? 'true' : 'false',
            bt = ut === $.b,
            ft = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            mt = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            ht = C && Object(I.a)(C, !0),
            gt = p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(
                F.a,
                { style: Oe.tweetContainer },
                p.a.createElement(N.b, { displayPromotedContent: !1, tweetId: _, withCurationMenu: !1 }),
              ),
              p.a.createElement(
                F.a,
                { style: Oe.formQuestions },
                p.a.createElement(
                  F.a,
                  { style: Oe.questionSection },
                  p.a.createElement(H.a, {
                    label: $.c.classification.label,
                    name: 'misleading_radio',
                    onChange: et('classification'),
                    options: $.c.classification.options,
                    value: ut,
                  }),
                  rt(Ne.classification),
                ),
                ut === $.a && it,
                bt && ot,
                !!ut &&
                  p.a.createElement(
                    p.a.Fragment,
                    null,
                    p.a.createElement(
                      F.a,
                      { style: Oe.questionSection },
                      p.a.createElement(
                        F.a,
                        { accessibilityLabel: bt ? oe : ie, accessibilityRole: 'group' },
                        p.a.createElement(M.b, { weight: 'bold' }, bt ? oe : ie),
                        p.a.createElement(M.b, { link: le }, ce),
                        p.a.createElement(P.a, {
                          calculateLength: x,
                          helperText: se,
                          invalid: !!Ne.summary && De,
                          label: ue,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            y({ updates: G, tweetId: _ })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            Le(function (e) {
                              return l()(l()({}, e), {}, { summary: t })
                            }),
                              Re(function (e) {
                                return l()(l()({}, e), {}, { summary: A(t) })
                              })
                          },
                          style: Oe.textInput,
                          validLength: 280,
                          value: null == G ? void 0 : G.summary,
                        }),
                        rt(Ne.summary),
                      ),
                    ),
                    p.a.createElement(
                      F.a,
                      { style: Oe.questionSection },
                      p.a.createElement(H.a, {
                        label: $.c.trustworthy_sources.label,
                        name: 'trustworthy_sources_radio',
                        onChange: et('trustworthy_sources'),
                        options:
                          ((Ye = $.c.trustworthy_sources.options),
                          Ye.map(function (e) {
                            return { label: e.label, value: e.value.toString() }
                          })),
                        value: pt,
                      }),
                      rt(Ne.trustworthy_sources),
                    ),
                    ft &&
                      !mt &&
                      p.a.createElement(F.a, { style: Oe.callout }, p.a.createElement(j.a, { Icon: Q.a, text: ae })),
                    ft &&
                      mt &&
                      ht &&
                      p.a.createElement(
                        F.a,
                        { style: Oe.callout },
                        p.a.createElement(j.a, {
                          Icon: Z.a,
                          headline: ne({ displayAlias: ht }),
                          text: re,
                          withThumbnail: !0,
                        }),
                      ),
                    De &&
                      !lt() &&
                      p.a.createElement(
                        F.a,
                        { style: Oe.callout },
                        p.a.createElement(j.a, { Icon: X.a, text: ve, type: 'danger' }),
                      ),
                    p.a.createElement(
                      z.a,
                      {
                        disabled: ze,
                        onPress: function () {
                          $e('submit'), He(!0)
                          var e = (function () {
                            var e = K()(G.summary)
                            if (0 === (null == e ? void 0 : e.length)) return 'source'
                            var t = G.summary
                            return (
                              e.forEach(function (e) {
                                if (!t) return 'explanation'
                                t = t.replace(e, '')
                              }),
                              t && 0 !== t.trim().length ? null : 'explanation'
                            )
                          })()
                          lt() && (e ? Ge(e) : st())
                        },
                        style: Oe.submitButton,
                        type: 'brandFilled',
                      },
                      te,
                    ),
                  ),
              ),
            ),
            vt = k.a
          return mt && Qe
            ? p.a.createElement(f.a, {
                onAliasSelected: function (e) {
                  Ze(e)
                },
              })
            : E
            ? p.a.createElement(L.a, { to: Je })
            : Ke
            ? p.a.createElement(U.a, {
                actionLabel: Se,
                graphic: 'source' === Ke ? J.a : Y.a,
                graphicDisplayMode: 'thumbnail',
                headline: Ie[Ke],
                onAction: function () {
                  $e('nudge_edit'), Ge(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = B.a.forTweet(_)
                  n.scribe({ element: 'nudge', action: 'show', data: { targets: [e] } })
                },
                onTertiaryAction: function () {
                  $e('nudge_submit'), st()
                },
                subtext: Te[Ke],
                tertiaryActionLabel: xe[Ke],
                withCloseButton: !1,
              })
            : p.a.createElement(
                T.b,
                {
                  history: v,
                  onBackClick: function () {
                    $e('close'), v.goBack()
                  },
                  renderHeader: R.b.isTwitterApp() ? vt : void 0,
                  title: ee,
                },
                p.a.createElement(F.a, { style: Oe.contentWrapper }, gt),
              )
        },
        Oe = W.a.create(function (e) {
          return {
            callout: { marginTop: e.spaces.space12 },
            checkbox: { paddingVertical: e.spaces.space8 },
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            errorContainer: { flexDirection: 'row' },
            errorIcon: { color: e.colors.magenta500, paddingRight: e.spaces.space8 },
            formQuestions: { paddingHorizontal: e.spaces.space36, paddingVertical: e.spaces.space16 },
            noteText: { backgroundColor: e.colors.gray50, padding: e.spaces.space12 },
            questionSection: { paddingBottom: e.spaces.space20 },
            submitButton: { marginVertical: e.spaces.space16 },
            textInput: { paddingHorizontal: 0 },
            tweetContainer: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
          }
        }),
        ke = S(Le)
      t.default = ke
    },
    YI7k: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    Yyvu: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'NotAvailablePage', function () {
          return v
        })
      var n = a('ERkP'),
        r = a.n(n),
        i = a('vZpt'),
        o = a('L5MV'),
        c = a('3XMw'),
        l = a.n(c),
        s = a('VS6U'),
        u = a('MWbm'),
        d = a('FIs5'),
        p = a('rHpw'),
        b = l.a.b5711f09,
        f = l.a.e96677aa,
        m = l.a.f026d2ee,
        h = l.a.i859a9d3,
        g = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        v = function (e) {
          var t = e.history,
            a = r.a.createElement(
              u.a,
              { style: E.contentWrapper },
              r.a.createElement(d.a, {
                buttonLink: g,
                buttonText: h,
                buttonType: 'brandOutlined',
                header: f,
                message: m,
              }),
            )
          return r.a.createElement(s.a, {
            TabBar: o.a,
            history: t,
            logoButton: r.a.createElement(r.a.Fragment, null),
            primaryContent: a,
            sidebarContent: r.a.createElement(i.a, null),
            title: b,
            withTweetButton: !1,
          })
        },
        E = p.a.create(function (e) {
          return { contentWrapper: { marginHorizontal: '100px' } }
        })
      t.default = v
    },
    ZD0R: function (e, t, a) {
      'use strict'
      var n,
        r,
        i = a('VrFO'),
        o = a.n(i),
        c = a('Y9Ll'),
        l = a.n(c),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        p = a.n(d),
        b = a('2VqO'),
        f = a.n(b),
        m = a('KEM+'),
        h = a.n(m),
        g = a('ddV6'),
        v = a.n(g),
        E = (a('jQ3i'), a('x4t0'), a('2G9S'), a('ERkP')),
        y = a.n(E),
        w = a('RhWx'),
        _ = a.n(w),
        C = a('yiKp'),
        S = a.n(C),
        I = (a('z84I'), a('TJCb'), a('7x/C'), a('DZ+c'), a('LW0h'), a('v6aA')),
        T = a('MvLc'),
        x = a('rxPX'),
        A = a('0KEI'),
        L = Object(x.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: T.c,
              deleteRating: T.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        O = a('ACNv'),
        k = a('YeIG'),
        B = a('MWbm'),
        N = a('t62R'),
        R = a('XiMS'),
        F = a('fyvP'),
        M = a('/yvb'),
        D = a('IG7M'),
        H = a('rHpw'),
        P = (a('yH/f'), a('3XMw')),
        j = a.n(P),
        z = Object.freeze({
          Informative: 'Informative',
          Clear: 'Clear',
          Empathetic: 'Empathetic',
          GoodSources: 'GoodSources',
          UniqueContext: 'UniqueContext',
          AddressesClaim: 'AddressesClaim',
          ImportantContext: 'ImportantContext',
          UnbiasedLanguage: 'UnbiasedLanguage',
          Other: 'Other',
        }),
        U = [z.Informative, z.Clear, z.Empathetic, z.GoodSources, z.UniqueContext, z.Other],
        W =
          ((n = {}),
          h()(n, z.Clear, j.a.dfa44ddd),
          h()(n, z.Empathetic, j.a.hc2b6a7e),
          h()(n, z.GoodSources, j.a.a7bc3191),
          h()(n, z.Informative, j.a.f3e6f0a9),
          h()(n, z.Other, j.a.c365dcc5),
          h()(n, z.UniqueContext, j.a.c5d55592),
          n),
        V = Object.freeze({
          NoSources: 'NoSources',
          Incorrect: 'Incorrect',
          Outdated: 'Outdated',
          Biased: 'Biased',
          MissingKeyPoints: 'MissingKeyPoints',
          Unclear: 'Unclear',
          Rude: 'Rude',
          OffTopic: 'OffTopic',
          TwitterViolationAny: 'TwitterViolationAny',
          IrrelevantSources: 'IrrelevantSources',
          OpinionSpeculation: 'OpinionSpeculation',
          NoteNotNeeded: 'NoteNotNeeded',
          Other: 'Other',
        }),
        K = [
          V.NoSources,
          V.Incorrect,
          V.Outdated,
          V.Biased,
          V.MissingKeyPoints,
          V.Unclear,
          V.Rude,
          V.OffTopic,
          V.TwitterViolationAny,
          V.Other,
        ],
        G =
          ((r = {}),
          h()(r, V.Biased, j.a.bbe8b4ac),
          h()(r, V.Incorrect, j.a.heb35e12),
          h()(r, V.MissingKeyPoints, j.a.c34e0b2b),
          h()(r, V.NoSources, j.a.a802709f),
          h()(r, V.OffTopic, j.a.dd1f17e9),
          h()(r, V.Outdated, j.a.if966b54),
          h()(r, V.Other, j.a.c365dcc5),
          h()(r, V.Rude, j.a.d0ba7db4),
          h()(r, V.TwitterViolationAny, j.a.aa520d31),
          h()(r, V.Unclear, j.a.e25e5ed1),
          r),
        q = a('hiGS'),
        X = a('TW8A'),
        Q = a('WtWS'),
        Z = j.a.ed5156f9,
        J = [
          { label: j.a.b7ec04f3, value: !0 },
          { label: j.a.i62a03aa, value: !1 },
        ],
        Y = {
          helpful: { label: j.a.a7338bc2, options: J },
          agree: { label: j.a.d93489e6, options: J },
          helpful_tags: {
            label: j.a.j63844f5,
            options: U.map(function (e) {
              return { label: W[e], value: e }
            }),
          },
          not_helpful_tags: {
            label: j.a.e0806a48,
            options: K.map(function (e) {
              return { label: G[e], value: e }
            }),
          },
        },
        $ = j.a.a91bb144,
        ee = j.a.abd845fd,
        te = j.a.d96cf7cd,
        ae = j.a.j6aa6172,
        ne = j.a.i411275f,
        re = j.a.d1a479a8,
        ie = function (e) {
          return e.map(function (e) {
            return { label: e.label, value: e.value.toString() }
          })
        },
        oe = y.a.createElement(N.b, { weight: 'bold' }),
        ce = y.a.createElement(N.b, { weight: 'bold' }),
        le = y.a.createElement(N.b, { weight: 'bold' }),
        se = y.a.createElement(N.b, { weight: 'bold' }),
        ue = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'if77e237' }, y.a.cloneElement(le, null, j.a.a43beaf2)),
        de = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, y.a.cloneElement(se, null, j.a.cb1d0ef3)),
        pe = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'j575fa79' }, y.a.cloneElement(oe, null, j.a.he5f1491)),
        be = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, y.a.cloneElement(ce, null, j.a.a67e7d91)),
        fe = y.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'd570f1d9' },
          y.a.cloneElement(le, null, j.a.c9c4850a),
          y.a.cloneElement(oe, null, j.a.ffa975fd),
        ),
        me = y.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'c6cb9513' },
          y.a.cloneElement(le, null, j.a.c9701442),
          y.a.cloneElement(ce, null, j.a.d2be9800),
        ),
        he = y.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          y.a.cloneElement(se, null, j.a.cf87d556),
          y.a.cloneElement(oe, null, j.a.hec80c95),
        ),
        ge = y.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'gbfec7fd' },
          y.a.cloneElement(se, null, j.a.bfa5f565),
          y.a.cloneElement(ce, null, j.a.eb1cc800),
        ),
        ve = H.a.create(function (e) {
          return {
            button: { alignSelf: 'center' },
            checkbox: { paddingVertical: e.spaces.space8 },
            checkboxContainer: { paddingTop: e.spaces.space12 },
            icon: { color: e.colors.primary, paddingRight: e.spaces.space12 },
            root: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.xLarge, padding: e.spaces.space16 },
            row: { flex: 1, flexDirection: 'row', width: '100%' },
            showSubmittedRating: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        Ee = L(function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.createRating,
            r = e.deleteRating,
            i = e.noteId,
            o = e.rating,
            c = y.a.useContext(I.a).featureSwitches,
            l = o || {},
            s = y.a.useState(l),
            u = v()(s, 2),
            d = u[0],
            p = u[1],
            b = y.a.useState(Object(k.a)(o)),
            f = v()(b, 2),
            m = f[0],
            g = f[1],
            E = function (e) {
              return function (t, a) {
                p(function (t) {
                  var n = a
                  return 'true' === a ? (n = !0) : 'false' === a && (n = !1), S()(S()({}, t), {}, h()({}, e, n))
                })
              }
            },
            w = function (e) {
              var t = d[e] || []
              return y.a.createElement(
                B.a,
                { style: ve.checkboxContainer },
                y.a.createElement(N.b, { weight: 'bold' }, Y[e].label),
                Y[e].options.map(function (a) {
                  return y.a.createElement(R.a, {
                    checked: t.includes(a.value),
                    key: a.value,
                    label: a.label,
                    onChange: x(e)(a.value),
                    style: ve.checkbox,
                  })
                }),
              )
            },
            C = function () {
              A('delete'),
                r(i)
                  .then(function (e) {
                    'Done' === e.birdwatchnote_rating_delete && (p({}), g(!0))
                  })
                  .catch(a())
            },
            T = function () {
              A('edit'), g(!0)
            },
            x = function (e) {
              return function (t) {
                return function () {
                  p(function (a) {
                    return a[e]
                      ? a[e].includes(t)
                        ? S()(
                            S()({}, a),
                            {},
                            h()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : S()(S()({}, a), {}, h()({}, e, [].concat(_()(a[e]), [t])))
                      : S()(S()({}, a), {}, h()({}, e, [t]))
                  })
                }
              }
            },
            A = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            L = void 0 !== (null == d ? void 0 : d.helpful),
            H = L ? (null != d && d.helpful ? 'true' : 'false') : '',
            P = void 0 !== (null == d ? void 0 : d.agree),
            j = P ? (null != d && d.agree ? 'true' : 'false') : ''
          return m
            ? y.a.createElement(
                B.a,
                { style: ve.root },
                y.a.createElement(F.a, {
                  label: Y.helpful.label,
                  name: Y.helpful.label + i,
                  onChange: E('helpful'),
                  options: ie(J),
                  value: H,
                }),
                L && (null != d && d.helpful ? w('helpful_tags') : w('not_helpful_tags')),
                y.a.createElement(F.a, {
                  label: Y.agree.label,
                  name: Y.agree.label + i,
                  onChange: E('agree'),
                  options: ie(J),
                  value: j,
                }),
                !Object(k.a)(d) &&
                  y.a.createElement(
                    M.a,
                    {
                      onClick: function () {
                        A('submit'),
                          d &&
                            n(i, d)
                              .then(function () {
                                g(!1)
                              })
                              .catch(
                                a({
                                  defaultToast: { text: Z, withAutoDismiss: !1, withClearButton: !0 },
                                  showToast: !0,
                                }),
                              )
                      },
                      style: ve.button,
                      type: 'brandFilled',
                    },
                    $,
                  ),
              )
            : y.a.createElement(
                B.a,
                { style: [ve.root, ve.showSubmittedRating] },
                y.a.createElement(
                  B.a,
                  { style: ve.row },
                  y.a.createElement(Q.a, { style: ve.icon }),
                  y.a.createElement(
                    N.b,
                    { size: 'subtext2' },
                    null != d && d.helpful && !P
                      ? ue
                      : (null != d && d.helpful) || P
                      ? null != d && d.agree && !L
                        ? pe
                        : (null != d && d.agree) || L
                        ? null != d && d.helpful && null != d && d.agree
                          ? fe
                          : null == d || !d.helpful || (null != d && d.agree)
                          ? (null != d && d.helpful) || null == d || !d.agree
                            ? (null != d && d.helpful) || (null != d && d.agree)
                              ? void 0
                              : ge
                            : he
                          : me
                        : be
                      : de,
                  ),
                ),
                y.a.createElement(D.a, {
                  renderActionMenu: function (e) {
                    return y.a.createElement(O.default, {
                      actionItems:
                        ((t = []),
                        t.push({
                          confirmation: { label: te, headline: ae, text: ne, confirmButtonType: 'destructiveFilled' },
                          isEmphasized: !0,
                          text: te,
                          Icon: q.a,
                          onClick: C,
                        }),
                        c.isTrue('responsive_web_birdwatch_ratings_v2_enabled')
                          ? t.push({ disabled: !0, text: ee, subText: re, Icon: X.a })
                          : t.push({ text: ee, Icon: X.a, onClick: T }),
                        t),
                      onClose: e,
                    })
                    var t
                  },
                }),
              )
        }),
        ye = (a('uFXj'), a('xZGM')),
        we = a('1YZw'),
        _e = Object(x.a)()
          .propsFromState(function () {
            return {
              shouldShowDataPrivacyPrompt: function (e, t) {
                return Object(ye.A)(e, ye.c)
              },
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: ye.w,
              addToast: we.b,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: T.c,
              deleteRating: T.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        Ce = a('cHvH'),
        Se = a('h0NW'),
        Ie = a('feu+')
      a('+KXO')
      function Te(e) {
        var t,
          a,
          n = j.a.a7bc3191,
          r = j.a.a26f8dc1,
          i = j.a.d89cfe9e,
          o = j.a.faa5f9e7,
          c = j.a.c365dcc5
        return e
          ? ((t = {}),
            h()(t, z.GoodSources, n),
            h()(t, z.Clear, r),
            h()(t, z.AddressesClaim, i),
            h()(t, z.ImportantContext, o),
            h()(t, z.UnbiasedLanguage, j.a.gf3b38f4),
            h()(t, z.Other, c),
            t)
          : ((a = {}),
            h()(a, z.GoodSources, n),
            h()(a, z.Clear, r),
            h()(a, z.AddressesClaim, i),
            h()(a, z.ImportantContext, o),
            h()(a, z.Other, c),
            a)
      }
      function xe(e) {
        return Object.keys(Te(e))
      }
      function Ae(e) {
        var t,
          a,
          n = j.a.ef490ae8,
          r = j.a.bf3dc461,
          i = j.a.heb35e12,
          o = j.a.ib117531,
          c = j.a.c365dcc5
        return e
          ? ((t = {}),
            h()(t, V.NoSources, n),
            h()(t, V.IrrelevantSources, r),
            h()(t, V.Incorrect, i),
            h()(t, V.OpinionSpeculation, j.a.h7c59ea2),
            h()(t, V.Unclear, j.a.d60c0063),
            h()(t, V.MissingKeyPoints, j.a.e06416c9),
            h()(t, V.Rude, j.a.cff1aa8b),
            h()(t, V.NoteNotNeeded, j.a.cc443e25),
            h()(t, V.TwitterViolationAny, o),
            h()(t, V.Other, c),
            t)
          : ((a = {}),
            h()(a, V.NoSources, n),
            h()(a, V.IrrelevantSources, r),
            h()(a, V.Incorrect, i),
            h()(a, V.Unclear, j.a.d60c0063),
            h()(a, V.MissingKeyPoints, j.a.c34e0b2b),
            h()(a, V.Rude, j.a.d24b99ed),
            h()(a, V.TwitterViolationAny, o),
            h()(a, V.Other, c),
            a)
      }
      function Le(e) {
        return Object.keys(Ae(e))
      }
      var Oe = a('EQ/a'),
        ke = a('DlMI'),
        Be = j.a.ed5156f9,
        Ne = [
          { label: j.a.b7ec04f3, value: 'Helpful' },
          { label: j.a.i26425d8, value: 'SomewhatHelpful' },
          { label: j.a.i62a03aa, value: 'NotHelpful' },
        ],
        Re = j.a.a91bb144,
        Fe = j.a.abd845fd,
        Me = j.a.d96cf7cd,
        De = j.a.j6aa6172,
        He = j.a.i411275f,
        Pe = j.a.e2988ed0,
        je = j.a.c1a50438,
        ze = j.a.d2ae3d42,
        Ue = j.a.c4e0c730,
        We = j.a.cfd2f35d,
        Ve = j.a.b1ea3365,
        Ke = j.a.h1a9d37a,
        Ge = y.a.createElement(N.b, { weight: 'bold' }),
        qe = y.a.createElement(N.b, {
          link: 'https://twitter.github.io/birdwatch/about/overview/#transparency-and-visibility',
          withInteractiveStyling: !0,
          withUnderline: !0,
        }),
        Xe = y.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'ab4d390f' },
          y.a.cloneElement(Ge, null, j.a.iedb2fc7),
          y.a.cloneElement(qe, null, j.a.cd24d5f5),
        ),
        Qe = y.a.createElement(N.b, { weight: 'bold' }),
        Ze = y.a.createElement(N.b, { weight: 'bold' }),
        Je = y.a.createElement(N.b, { weight: 'bold' }),
        Ye = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'had203a8' }, y.a.cloneElement(Qe, null, j.a.f2ceaed4)),
        $e = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'h42a21df' }, y.a.cloneElement(Ze, null, j.a.i7d91dc8)),
        et = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'c3d1a1b0' }, y.a.cloneElement(Je, null, j.a.c206a60f)),
        tt = H.a.create(function (e) {
          return {
            button: { alignSelf: 'center' },
            checkbox: { paddingVertical: e.spaces.space8 },
            checkboxContainer: { paddingTop: e.spaces.space12 },
            helpfulButtons: { flex: 'auto', marginHorizontal: e.spaces.space2 },
            helpfulContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            helpfulOptions: { flexDirection: 'row' },
            helpfulQuestionMobile: { paddingBottom: e.spaces.space8 },
            icon: { color: e.colors.text, paddingRight: e.spaces.space12 },
            iconDataPrivacy: {
              color: e.colors.primary,
              height: e.spaces.space20,
              width: e.spaces.space20,
              paddingTop: e.spaces.space4,
              paddingRight: e.spaces.space20,
            },
            anonymousCrowdText: { display: 'inline' },
            infoItemContainer: { paddingHorizontal: 0 },
            root: {
              backgroundColor: e.colors.gray0,
              borderRadius: e.borderRadii.medium,
              marginTop: e.spaces.space4,
              padding: e.spaces.space16,
            },
            row: { alignItems: 'center', flex: 1, flexDirection: 'row', width: '100%' },
            showSubmittedRating: {
              backgroundColor: e.colors.green0,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          }
        }),
        at = {
          accessibilityLabel: ze,
          containerStyle: tt.infoItemContainer,
          items: [
            { label: '', decoration: y.a.createElement(Oe.a, { style: tt.iconDataPrivacy }), description: Ke },
            {
              label: '',
              decoration: y.a.createElement(ke.a, { style: tt.iconDataPrivacy }),
              description: y.a.createElement(B.a, { style: tt.anonymousCrowdText }, Xe),
            },
          ],
        },
        nt = _e(function (e) {
          var t = e.addFlag,
            a = e.addToast,
            n = e.analytics,
            r = e.createLocalApiErrorHandler,
            i = e.createRating,
            o = e.deleteRating,
            c = e.noteId,
            l = e.rating,
            s = e.ratingSurvey,
            u = e.shouldShowDataPrivacyPrompt,
            d = y.a.useContext(I.a).featureSwitches,
            p = y.a.useState(l),
            b = v()(p, 2),
            f = b[0],
            m = b[1],
            g = y.a.useState(Object(k.a)(l)),
            E = v()(g, 2),
            w = E[0],
            C = E[1],
            T = y.a.useState(!1),
            x = v()(T, 2),
            A = x[0],
            L = x[1],
            F = d.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            P = {
              helpful: { label: j.a.a7338bc2, options: Ne },
              helpful_tags: {
                label: j.a.ac7f9745,
                options: xe(F).map(function (e) {
                  return { label: Te(F)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: j.a.c7751803,
                options: Le(F).map(function (e) {
                  return { label: Ae(F)[e], value: e }
                }),
              },
            },
            z = function (e) {
              n.scribeAction('click_'.concat(e))
            },
            U = function () {
              z('delete'),
                o(c)
                  .then(function (e) {
                    if ('Done' === e.birdwatchnote_rating_delete) {
                      var t = Object.freeze({})
                      m(t), C(!0)
                    }
                  })
                  .catch(r())
            },
            W = function () {
              z('edit'), C(!0)
            },
            K = function () {
              var e, t
              ;(z('submit'),
              i(c, f)
                .then(function () {
                  C(!1)
                })
                .catch(r({ defaultToast: { text: Be, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              d.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(k.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = f.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = f.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
                  Math.random() < 0.05) &&
                a({
                  text: Pe,
                  action: { label: je, link: null == s ? void 0 : s.url },
                  withAutoDismiss: !0,
                  withClearButton: !0,
                })
            },
            G = function (e) {
              return function (t) {
                return function () {
                  m(function (a) {
                    return a[e]
                      ? a[e].includes(t)
                        ? S()(
                            S()({}, a),
                            {},
                            h()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : S()(S()({}, a), {}, h()({}, e, [].concat(_()(a[e]), [t])))
                      : S()(S()({}, a), {}, h()({}, e, [t]))
                  })
                }
              }
            },
            Z = function (e) {
              var t = (f && f[e]) || []
              return y.a.createElement(
                B.a,
                { style: tt.checkboxContainer },
                y.a.createElement(N.b, { weight: 'bold' }, P[e].label),
                P[e].options.map(function (a) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == f ? void 0 : f.helpfulness_level) &&
                      a.value === V.TwitterViolationAny
                    ) &&
                    y.a.createElement(R.a, {
                      checked: t.includes(a.value),
                      key: a.value,
                      label: a.label,
                      onChange: G(e)(a.value),
                      style: tt.checkbox,
                    })
                  )
                }),
              )
            },
            J = y.a.createElement(Ce.a, null, function (e) {
              var t = e.windowWidth <= H.a.theme.breakpoints.small
              return y.a.createElement(
                B.a,
                { style: !t && tt.helpfulContainer },
                y.a.createElement(N.b, { style: t && tt.helpfulQuestionMobile, weight: 'bold' }, P.helpful.label),
                y.a.createElement(
                  B.a,
                  { style: tt.helpfulOptions },
                  Ne.map(function (e) {
                    return y.a.createElement(
                      M.a,
                      {
                        key: e.value,
                        onClick:
                          ((t = e.value),
                          function () {
                            m(function (e) {
                              return S()(S()({}, e), {}, { helpfulness_level: t })
                            })
                          }),
                        size: 'small',
                        style: tt.helpfulButtons,
                        type: (null == f ? void 0 : f.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
                      },
                      e.label,
                    )
                    var t
                  }),
                ),
              )
            }),
            Y = y.a.createElement(Se.a, at),
            $ = y.a.createElement(Ie.a, {
              actionLabel: Ue,
              headline: Ve,
              isFullHeightOnMobile: !0,
              onAction: function () {
                K(), t(ye.c), L(!1)
              },
              onSecondaryAction: function () {
                return L(!1)
              },
              secondaryActionLabel: We,
              subtext: Y,
            }),
            ee = void 0 !== (null == f ? void 0 : f.helpfulness_level),
            te =
              ee &&
              ('Helpful' === (null == f ? void 0 : f.helpfulness_level) ||
                'SomewhatHelpful' === (null == f ? void 0 : f.helpfulness_level)),
            ae =
              ee &&
              ('NotHelpful' === (null == f ? void 0 : f.helpfulness_level) ||
                'SomewhatHelpful' === (null == f ? void 0 : f.helpfulness_level))
          return y.a.createElement(
            y.a.Fragment,
            null,
            A ? $ : null,
            w
              ? y.a.createElement(
                  B.a,
                  { style: tt.root },
                  J,
                  te && Z('helpful_tags'),
                  ae && Z('not_helpful_tags'),
                  !Object(k.a)(f) &&
                    y.a.createElement(
                      M.a,
                      {
                        onClick: function () {
                          u && d.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? L(!0) : f && K()
                        },
                        style: tt.button,
                        type: 'brandFilled',
                      },
                      Re,
                    ),
                )
              : y.a.createElement(
                  B.a,
                  { style: [tt.root, tt.showSubmittedRating] },
                  y.a.createElement(
                    B.a,
                    { style: tt.row },
                    y.a.createElement(Q.a, { style: tt.icon }),
                    y.a.createElement(
                      N.b,
                      null,
                      (function () {
                        switch (null == f ? void 0 : f.helpfulness_level) {
                          case 'Helpful':
                            return Ye
                          case 'SomewhatHelpful':
                            return $e
                          case 'NotHelpful':
                            return et
                          default:
                            return
                        }
                      })(),
                    ),
                  ),
                  y.a.createElement(D.a, {
                    renderActionMenu: function (e) {
                      return y.a.createElement(O.default, {
                        actionItems:
                          ((t = []),
                          t.push({
                            confirmation: { label: Me, headline: De, text: He, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: Me,
                            Icon: q.a,
                            onClick: U,
                          }),
                          t.push({ text: Fe, Icon: X.a, onClick: W }),
                          t),
                        onClose: e,
                      })
                      var t
                    },
                  }),
                ),
          )
        }),
        rt = a('xSpP'),
        it = a('XOJV'),
        ot = function (e, t) {
          var a,
            n = null === (a = t.note) || void 0 === a ? void 0 : a.tweet
          return n ? it.a.selectFetchStatus(e, n.rest_id) : void 0
        },
        ct = Object(x.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: ot, userAlias: T.y }
          })
          .propsFromActions(function () {
            return {
              addToast: we.b,
              createAppeal: T.a,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: rt.b,
              fetchTweet: it.a.fetchOneIfNeeded,
              fetchUserAlias: T.l,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        lt = a('eqZz'),
        st = a('W6+M'),
        ut = a('yrzJ'),
        dt = a('sgih'),
        pt = j.a.e4579709,
        bt = j.a.df587b98,
        ft = j.a.h201bdc8,
        mt = j.a.fe1f6043,
        ht = j.a.ia5e7487,
        gt = j.a.j58e7b00,
        vt = (function (e) {
          p()(a, e)
          var t = f()(a)
          function a() {
            return o()(this, a), t.apply(this, arguments)
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.alias,
                    a = e.closeNoteDetails,
                    n = e.created_at,
                    r = e.rest_id,
                    i = e.userBadges,
                    o = this.context.featureSwitches,
                    c = o.isTrue('responsive_web_birdwatch_note_awards_enabled'),
                    l = o.isTrue('responsive_web_birdwatch_aliases_enabled'),
                    s = y.a.createElement(
                      B.a,
                      { style: Et.noteDetailsContainer },
                      y.a.createElement(
                        B.a,
                        { style: Et.noteDetailsHeader },
                        y.a.createElement(N.b, { size: 'headline1', weight: 'bold' }, pt),
                      ),
                      y.a.createElement(
                        B.a,
                        { style: Et.noteDetails },
                        y.a.createElement(
                          B.a,
                          { style: [Et.noteDetailsSection, Et.noteDetailsSectionBorder] },
                          y.a.createElement(N.b, { style: Et.noteDetailsText, weight: 'bold' }, bt),
                          y.a.createElement(N.b, { style: Et.noteDetailsContentText }, r),
                        ),
                        y.a.createElement(
                          B.a,
                          { style: [Et.noteDetailsSection, Et.noteDetailsSectionBorder] },
                          y.a.createElement(N.b, { style: Et.noteDetailsText, weight: 'bold' }, mt),
                          y.a.createElement(
                            N.b,
                            { style: Et.noteDetailsContentText },
                            (function (e) {
                              if (!e) return ''
                              var t = new Date(e).toLocaleString('default', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                }),
                                a = new Date(e).toLocaleString('default', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  second: '2-digit',
                                })
                              return ''.concat(t, ' ').concat(a)
                            })(n),
                          ),
                        ),
                        y.a.createElement(
                          B.a,
                          { style: [Et.noteDetailsSection, Et.noteDetailsSectionLast] },
                          y.a.createElement(N.b, { style: Et.noteDetailsText, weight: 'bold' }, ft),
                          l
                            ? y.a.createElement(
                                N.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: Et.profileText },
                                Object(st.a)(t),
                              )
                            : y.a.createElement(ut.a, { screenName: t }),
                          l &&
                            y.a.createElement(
                              N.b,
                              {
                                color: 'link',
                                link: '/i/birdwatch/u/'.concat(t),
                                onClick: a,
                                style: Et.viewProfileLink,
                              },
                              gt,
                            ),
                          c && i && i.length > 0
                            ? i.map(function (e, t) {
                                return y.a.createElement(lt.a, { badgeType: e, key: t })
                              })
                            : null,
                        ),
                        y.a.createElement(B.a, { style: Et.contentSpacer }),
                      ),
                      y.a.createElement(
                        B.a,
                        { style: Et.noteDetailsButtonSection },
                        y.a.createElement(B.a, { style: Et.buttonSpacer }),
                        y.a.createElement(M.a, { onClick: a, style: Et.noteDetailsButton, type: 'brandFilled' }, ht),
                      ),
                    )
                  return y.a.createElement(Ce.a, null, function (e) {
                    var t = e.windowWidth
                    return y.a.createElement(dt.a, {
                      allowBackNavigation: !0,
                      children: s,
                      onMaskClick: a,
                      type: t >= H.a.theme.breakpoints.medium ? 'center' : 'full',
                      withMask: !0,
                    })
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      h()(vt, 'contextType', I.a)
      var Et = H.a.create(function (e) {
          return {
            awardDetailsText: { marginBottom: e.spaces.space8 },
            noteDetails: { alignItems: 'flex-start', display: 'flex', paddingHorizontal: e.spaces.space8 },
            noteDetailsButton: { width: '100%' },
            noteDetailsButtonSection: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
              padding: e.spaces.space16,
            },
            noteDetailsContainer: { display: 'flex', height: '100%' },
            noteDetailsContentText: { color: e.colors.gray700 },
            noteDetailsHeader: { textAlign: 'center', marginTop: e.spaces.space32, marginBottom: e.spaces.space16 },
            noteDetailsSection: { alignItems: 'flex-start', padding: e.spaces.space16, width: '100%' },
            noteDetailsSectionBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            noteDetailsSectionLast: { paddingBottom: 0 },
            noteDetailsText: { marginBottom: e.spaces.space4 },
            viewProfileLink: { marginVertical: e.spaces.space4 },
            contentSpacer: { flex: 1, minHeight: e.spaces.space32 },
            buttonSpacer: { flex: 1 },
            profileText: { textTransform: 'capitalize' },
          }
        }),
        yt = vt,
        wt = a('b5s6'),
        _t = a('rcen'),
        Ct = a('Rp9C'),
        St = 'helpfulRatingTags',
        It = 'notHelpfulRatingTags',
        Tt = 'ratingStatus',
        xt = a('4zmP'),
        At = a('pjBI'),
        Lt = a('GBcw'),
        Ot = a('855f'),
        kt = a('htQn'),
        Bt = a('zIWA'),
        Nt = a('/WPq'),
        Rt = a('6s7X'),
        Ft = a('sUoZ'),
        Mt = a('x0mb'),
        Dt = a('fBGZ'),
        Ht = a('2Rcs'),
        Pt = a('Nh1N'),
        jt = a('NPGn'),
        zt = j.a.d96cf7cd,
        Ut = j.a.e272836c,
        Wt = j.a.e4579709,
        Vt = j.a.fa0d3ee3,
        Kt = j.a.ccf2f24e,
        Gt = j.a.df321fc3,
        qt = y.a.createElement(N.b, { color: 'primary' }, Gt),
        Xt = j.a.b9f18eec,
        Qt = j.a.g2edfc1a,
        Zt = j.a.d6db34cb,
        Jt = j.a.j2c3f3cf,
        Yt = j.a.ac39da02,
        $t = j.a.d1dd62ac,
        ea = j.a.b664c554,
        ta = j.a.ab66e1f2,
        aa = j.a.b2792b8c,
        na = j.a.b74df918,
        ra = j.a.hfd2544f,
        ia = j.a.b9e1cf02,
        oa = j.a.cfd2f35d,
        ca = j.a.i80c8a83,
        la = j.a.i859a9d3,
        sa = j.a.i97b83f6,
        ua = 'CurrentlyRatedHelpful',
        da = 'CurrentlyRatedNotHelpful',
        pa = 'NeedsMoreRatings',
        ba = function (e, t, a) {
          return y.a.createElement(
            B.a,
            { style: ma.ratingInfoItem, testID: Tt },
            y.a.createElement(e, { style: [ma.icon, t] }),
            y.a.createElement(N.b, { size: 'subtext2', weight: 'bold' }, a),
          )
        },
        fa = (function (e) {
          p()(a, e)
          var t = f()(a)
          function a(e, n) {
            var r
            return (
              o()(this, a),
              (r = t.call(this, e, n)),
              h()(u()(r), '_handleFetchTweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchTweet,
                  n = e.note.tweet,
                  i = null == n ? void 0 : n.rest_id
                i && a(i).catch(t())
              }),
              h()(u()(r), '_isOwner', function () {
                var e,
                  t = r.props,
                  a = t.note,
                  n = t.userAlias,
                  i = null == a || null === (e = a.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!n || !i) && i === n
              }),
              h()(u()(r), '_handleDeleteConfirm', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.deleteNote,
                  n = e.handleDelete,
                  i = e.note,
                  o = i.birdwatch_profile,
                  c = i.rest_id
                r._scribeOnClick('delete')(),
                  null != o &&
                    o.alias &&
                    r._isOwner() &&
                    a(c)
                      .then(function (e) {
                        null == n || n(c)
                      })
                      .catch(t())
              }),
              h()(u()(r), '_getMenuActionItems', function () {
                var e = r.props.note,
                  t = e.birdwatch_profile,
                  a = e.rest_id,
                  n = []
                return (
                  null != t &&
                    t.alias &&
                    r._isOwner() &&
                    n.push({
                      confirmation: { label: zt, headline: Ut, text: Vt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: zt,
                      Icon: q.a,
                      onClick: r._handleDeleteConfirm,
                    }),
                  n.push({
                    text: Kt,
                    Icon: Bt.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(a) },
                    onClick: r._scribeOnClick('report'),
                  }),
                  n.push({ text: Wt, Icon: Nt.a, onClick: r._onNoteDetailsClick }),
                  n
                )
              }),
              h()(u()(r), '_onNoteDetailsClick', function () {
                r.setState({ noteDetailsOpen: !0 }), r._scribeOnClick('note_details')
              }),
              h()(u()(r), '_renderCurationActionMenu', function (e) {
                return y.a.createElement(O.default, { actionItems: r._getMenuActionItems(), onClose: e })
              }),
              h()(u()(r), '_scribeOnClick', function (e) {
                return function () {
                  var t = r.props,
                    a = t.analytics,
                    n = t.note.tweet
                  if (n) {
                    var i = Ct.a.forTweet(n.rest_id)
                    a.scribe({ element: e, action: 'click', data: { targets: [i] } })
                  }
                }
              }),
              h()(u()(r), '_handleRequestAppeal', function () {
                var e = r.props,
                  t = e.createAppeal,
                  a = e.createLocalApiErrorHandler
                t(e.note.rest_id)
                  .then(function () {
                    r.setState({ appealsRequestOpen: !1 }), r.setState({ appealRequested: !0 })
                  })
                  .catch(a({ defaultToast: { text: sa, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }))
              }),
              h()(u()(r), '_handleOpenAppealsModal', function () {
                r.setState({ appealsRequestOpen: !0 })
              }),
              h()(u()(r), '_handleCloseAppealsModal', function () {
                r.setState({ appealsRequestOpen: !1 })
              }),
              h()(u()(r), '_renderAppealsModal', function () {
                var e = y.a.createElement(B.a, null, y.a.createElement(N.b, null, ta), y.a.createElement(Se.a, ha))
                return y.a.createElement(Ie.a, {
                  actionLabel: ia,
                  graphicDisplayMode: 'none',
                  headline: ea,
                  isFullHeightOnMobile: !0,
                  onAction: r._handleRequestAppeal,
                  onSecondaryAction: r._handleCloseAppealsModal,
                  secondaryActionLabel: oa,
                  subtext: e,
                })
              }),
              h()(u()(r), '_renderAppealsStatus', function () {
                var e = r.props,
                  t = e.note.can_appeal,
                  a = e.showTweet,
                  n = y.a.createElement(
                    j.a.I18NFormatMessage,
                    { $i18n: 'c5c4d000' },
                    y.a.createElement(
                      N.b,
                      { onPress: r._handleOpenAppealsModal, withInteractiveStyling: !0, withUnderline: !0 },
                      j.a.c8259b73,
                    ),
                  )
                return r.state.appealRequested
                  ? y.a.createElement(xt.a, {
                      Icon: Q.a,
                      action: { label: la, link: 'https://twitter.github.io/birdwatch/additional-review' },
                      headline: ca,
                      type: 'success',
                    })
                  : t
                  ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2', style: a && ma.noteWithQT }, n)
                  : void 0
              }),
              h()(u()(r), '_isShownOnTwitter', function () {
                var e = r.props.note,
                  t = e.data_v1
                return e.rating_status === ua && (null == t ? void 0 : t.classification) === jt.a
              }),
              h()(u()(r), '_renderRatingStatus', function (e) {
                switch (e) {
                  case ua:
                    var t = y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(
                          At.a,
                          null,
                          y.a.createElement(N.b, null, Xt),
                          y.a.createElement(N.b, null, Qt),
                        ),
                        y.a.createElement(
                          N.b,
                          { color: 'text', link: 'https://twitter.github.io/birdwatch/notes-on-twitter' },
                          y.a.createElement(Rt.a, { style: [ma.icon, ma.infoIcon] }),
                        ),
                      ),
                      a = r._isShownOnTwitter() ? t : Xt
                    return ba(Ft.a, ma.iconStar, a)
                  case da:
                    return ba(Mt.a, ma.iconRed, Jt)
                  case pa:
                    return ba(Mt.a, ma.iconGray, Zt)
                  default:
                    return null
                }
              }),
              (r.state = {
                noteDetailsOpen: !1,
                appealsRequestOpen: !1,
                appealRequested: 'AppealReceived' === e.note.appeal_status,
              }),
              r
            )
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    a = e.fetchUserAlias,
                    n = e.note.tweet,
                    r = e.showTweet
                  a().catch(t()), r && null != n && n.rest_id && this._handleFetchTweet()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a = this,
                    n = this.props,
                    r = n.note,
                    i = r.created_at,
                    o = r.data_v1,
                    c = r.helpful_tags,
                    l = void 0 === c ? [] : c,
                    s = r.impression_count,
                    u = r.not_helpful_tags,
                    d = void 0 === u ? [] : u,
                    p = r.rating,
                    b = r.rating_status,
                    f = r.rating_survey,
                    m = r.rest_id,
                    h = r.tweetId,
                    g = r.tweet,
                    E = n.showPivot,
                    w = n.showRating,
                    _ = n.showTweet,
                    C = this.context.featureSwitches,
                    S = h || (null == g ? void 0 : g.rest_id),
                    I = (null == o || null === (e = o.summary) || void 0 === e ? void 0 : e.text) || '',
                    T = (null == o || null === (t = o.summary) || void 0 === t ? void 0 : t.entities) || [],
                    x = (null == p ? void 0 : p.data_v1) || {},
                    A = (null == p ? void 0 : p.data_v2) || {},
                    L = 2 === (null == p ? void 0 : p.version),
                    O = L ? A : x,
                    R = Object(k.a)(O),
                    F = (C.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && R) || L,
                    M =
                      (C.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        C.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      w,
                    P = C.isTrue('responsive_web_birdwatch_appeals_enabled') && this.state.appealsRequestOpen,
                    z = this.props.note.birdwatch_profile,
                    U = (null == z ? void 0 : z.alias) || '',
                    V = (null == z ? void 0 : z.badges) || [],
                    K = function () {
                      return a.setState({ noteDetailsOpen: !1 })
                    }
                  return y.a.createElement(Ce.a, null, function (e) {
                    var t,
                      n = e.windowWidth
                    return y.a.createElement(
                      B.a,
                      { key: m, style: ma.noteContainer },
                      P && a._renderAppealsModal(),
                      y.a.createElement(
                        B.a,
                        { style: ma.noteTopContainer },
                        _ && S
                          ? y.a.createElement(
                              B.a,
                              { style: ma.tweetContainer },
                              y.a.createElement(wt.a, { isCondensed: !0, tweetId: S }),
                            )
                          : null,
                        y.a.createElement(
                          B.a,
                          { style: [ma.noteTop, _ && ma.noteWithQT] },
                          y.a.createElement(
                            B.a,
                            { style: ma.noteBody },
                            y.a.createElement(
                              At.a,
                              { style: ma.noteInfoMiddots },
                              a._renderRatingStatus(b),
                              i && n >= H.a.theme.breakpoints.medium
                                ? y.a.createElement(Lt.a, { style: [ma.ratingInfoItem, ma.timestamp], timestamp: i })
                                : null,
                            ),
                            s && C.isTrue('responsive_web_birdwatch_impressions_enabled')
                              ? y.a.createElement(
                                  N.b,
                                  { color: 'gray700', size: 'subtext2', style: ma.subtext },
                                  ((t = Ot.a.getTruncatedCount(s)),
                                  y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'd9f77781', impressions: t })),
                                )
                              : null,
                            b === ua && (null == o ? void 0 : o.classification) === jt.b
                              ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2', style: ma.subtext }, Yt)
                              : null,
                            y.a.createElement(
                              At.a,
                              { style: ma.noteInfoMiddots },
                              (function (e, t, a) {
                                switch (e) {
                                  case ua:
                                    if (2 === t.length) {
                                      var n = v()(t, 2),
                                        r = n[0],
                                        i = n[1],
                                        o = xe(!0),
                                        c = Te(!0),
                                        l = o.includes(r) ? c[r] : W[r],
                                        s = o.includes(i) ? c[i] : W[i],
                                        u = ''.concat(l, ' · ').concat(s)
                                      return l && s
                                        ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2', testID: St }, u)
                                        : null
                                    }
                                    return null
                                  case da:
                                    if (2 === a.length) {
                                      var d = v()(a, 2),
                                        p = d[0],
                                        b = d[1],
                                        f = Le(!0).includes(p) ? Ae(!0)[p] : G[p],
                                        m = Le(!0).includes(b) ? Ae(!0)[b] : G[b],
                                        h = ''.concat(f, ' · ').concat(m)
                                      return f && m
                                        ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2', testID: It }, h)
                                        : null
                                    }
                                    return null
                                  default:
                                    return null
                                }
                              })(b, l, d),
                            ),
                            y.a.createElement(
                              B.a,
                              { style: ma.noteTextSection },
                              y.a.createElement(_t.a, {
                                entities: T,
                                onEntityClick: a._scribeOnClick('link'),
                                text: I,
                              }),
                            ),
                          ),
                          y.a.createElement(D.a, { renderActionMenu: a._renderCurationActionMenu, style: ma.caret }),
                        ),
                        M
                          ? y.a.createElement(
                              B.a,
                              { style: ma.ratingContainer },
                              F
                                ? y.a.createElement(nt, { noteId: m, rating: A, ratingSurvey: f })
                                : y.a.createElement(Ee, { noteId: m, rating: x }),
                            )
                          : null,
                        C.isTrue('responsive_web_birdwatch_appeals_enabled') ? a._renderAppealsStatus() : null,
                      ),
                      E &&
                        S &&
                        C.isTrue('responsive_web_birdwatch_rating_participant_enabled') &&
                        y.a.createElement(
                          kt.a,
                          null,
                          y.a.createElement(
                            N.b,
                            {
                              link: '/i/birdwatch/t/'.concat(S),
                              onPress: a._scribeOnClick('pivot'),
                              style: [ma.pivot, _ && ma.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            qt,
                          ),
                        ),
                      a.state.noteDetailsOpen &&
                        y.a.createElement(yt, {
                          alias: U,
                          closeNoteDetails: K,
                          created_at: i,
                          rest_id: m,
                          userBadges: V,
                        }),
                    )
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      h()(fa, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), h()(fa, 'contextType', I.a)
      var ma = H.a.create(function (e) {
          return {
            caret: { display: 'flex', alignSelf: 'flex-start', flex: 1, flexBasis: '0%', flexDirection: 'row-reverse' },
            classification: { paddingRight: e.spaces.space4 },
            icon: {
              height: e.spaces.space12,
              paddingBottom: e.spaces.space2,
              paddingRight: e.spaces.space4,
              width: e.spaces.space12,
            },
            iconAppeals: {
              height: e.spaces.space20,
              width: e.spaces.space20,
              paddingTop: e.spaces.space4,
              paddingRight: e.spaces.space20,
            },
            iconGray: { color: e.colors.gray700 },
            iconRed: { color: e.colors.red500 },
            iconStar: {
              color: e.colors.green500,
              height: e.spaces.space12,
              paddingRight: e.spaces.space4,
              width: e.spaces.space12,
            },
            infoIcon: { paddingLeft: e.spaces.space4, paddingRight: 0 },
            infoItemContainer: { paddingHorizontal: 0 },
            noteBody: { flex: 9, flexBasis: '0%' },
            noteContainer: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8 },
            noteHeader: { flexDirection: 'row', flexWrap: 'wrap', paddingBottom: e.spaces.space8 },
            noteInfoMiddots: {
              alignItems: 'center',
              flexDirection: 'row',
              overflow: 'hidden',
              paddingBottom: e.spaces.space4,
            },
            noteTextSection: {
              display: 'inline',
              flexDirection: 'row',
              paddingBottom: e.spaces.space4,
              paddingTop: e.spaces.space4,
            },
            noteTop: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
            noteTopContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            noteWithQT: { paddingLeft: e.spaces.space12 },
            pivot: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            pivotWithQT: { paddingHorizontal: e.spaces.space28 },
            ratingContainer: { paddingBottom: e.spaces.space16 },
            ratingInfoItem: { alignItems: 'center', flexDirection: 'row' },
            subtext: { paddingBottom: e.spaces.space4 },
            timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 },
            tweetContainer: { marginBottom: e.spaces.space12 },
          }
        }),
        ha = {
          accessibilityLabel: $t,
          containerStyle: ma.infoItemContainer,
          items: [
            { label: '', decoration: y.a.createElement(Dt.a, { style: ma.iconAppeals }), description: aa },
            { label: '', decoration: y.a.createElement(Ht.a, { style: ma.iconAppeals }), description: na },
            { label: '', decoration: y.a.createElement(Pt.a, { style: ma.iconAppeals }), description: ra },
          ],
        },
        ga = ct(fa)
      t.a = ga
    },
    b5s6: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        c = a('ERkP'),
        l = a.n(c),
        s = a('v6aA'),
        u = a('XOJV'),
        d = a('eSoz'),
        p = a('rxPX'),
        b = a('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        m = function (e, t) {
          var a = t.tweetId,
            n = a && u.a.select(e, a)
          return n ? Object(d.g)(e, n) : void 0
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { community: m, hydratedTweet: u.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        g = a('YeIG'),
        v = a('uCxL'),
        E = a('x5Pi'),
        y = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        w = h(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            c = (e.tweetId, o()(e, y)),
            u = l.a.useContext(s.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            b = null == i ? void 0 : i.community_id_str
          l.a.useEffect(
            function () {
              b && Object(g.a)(t) && n(b).catch(a())
            },
            [t, b, a, n],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            m = i && Object(E.f)(i, p, t),
            h = m && Object(E.e)(m),
            w = d.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            v.a,
            r()({}, c, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: f,
              socialContextProps: h,
              tweet: i,
              withReactions: w,
            }),
          )
        })
      t.a = w
    },
    dW4k: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SelfUserNotePageRedirect', function () {
          return _
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Qwev'),
        l = a('v6aA'),
        s = a('9StO'),
        u = a('vZpt'),
        d = a('L5MV'),
        p = a('MvLc'),
        b = a('rxPX'),
        f = a('0KEI'),
        m = Object(b.a)()
          .propsFromState(function () {
            return { userAlias: p.y, showAliasSelfSelect: p.v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: p.l,
              fetchShowAliasSelfSelect: p.j,
            }
          }),
        h = a('3XMw'),
        g = a.n(h),
        v = a('5FtR'),
        E = a('VS6U'),
        y = a('nymP'),
        w = g.a.ff692d63,
        _ = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchShowAliasSelfSelect,
            n = e.fetchUserAlias,
            i = e.history,
            p = e.showAliasSelfSelect,
            b = e.userAlias,
            f = o.a.useContext(l.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            m = o.a.useState(!0),
            h = r()(m, 2),
            g = h[0],
            _ = h[1]
          o.a.useEffect(
            function () {
              n()
                .then(function () {
                  return _(!1)
                })
                .catch(t())
            },
            [t, n],
          ),
            o.a.useEffect(
              function () {
                a().catch(t())
              },
              [t, a],
            )
          var C = function (e) {
            n()
              .then(function () {
                return _(!1)
              })
              .catch(t())
          }
          return o.a.createElement(E.a, {
            TabBar: d.a,
            history: i,
            logoButton: o.a.createElement(o.a.Fragment, null),
            primaryContent: g
              ? o.a.createElement(c.a, { size: 'large' })
              : b
              ? o.a.createElement(v.a, { to: '/i/birdwatch/u/'.concat(b) })
              : f && p
              ? o.a.createElement(s.a, { onAliasSelected: C })
              : o.a.createElement(y.a, null),
            sidebarContent: o.a.createElement(u.a, null),
            title: w,
            withTweetButton: !1,
          })
        },
        C = m(_)
      t.default = C
    },
    doI8: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('WpDa'),
        o = a('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          a = e.endpointUrl,
          n = e.timelineId
        return Object(o.a)({
          timelineId: n,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var n = e.count,
              i = e.cursor
            return r()(r()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: n, endpointUrl: a })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var c = function (e) {
        return Object(o.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var a = t.count,
              n = t.cursor
            return { cursor: 'string' == typeof n ? n : void 0, count: a, timelineId: e }
          },
          formatResponse: i.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    eqZz: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        o = a.n(i),
        c = a('B/qP'),
        l = a('MWbm'),
        s = a('j7Bv'),
        u = a('t62R'),
        d = a('rHpw'),
        p = o.a.c57760e9,
        b = o.a.c45ef9c1,
        f = o.a.g29805f5,
        m = o.a.b1056323,
        h = function () {
          return r.a.createElement(c.a, { style: g.innerIconColor })
        },
        g = d.a.create(function (e) {
          return {
            awardSection: { flexDirection: 'row', marginBottom: e.spaces.space8, alignItems: 'center' },
            goldAward: { backgroundColor: e.colors.yellow500 },
            innerIconColor: { color: e.colors.buttonAlwaysBlack },
            ratingAward: { marginRight: e.spaces.space8 },
            ratingAwardText: { color: e.colors.text, marginRight: e.spaces.space4 },
            silverAward: { backgroundColor: e.colors.gray300 },
          }
        }),
        v = {
          Top10Author: { badgeStyle: g.goldAward, contributorText: f, badgeText: p },
          Top10Rater: { badgeStyle: g.goldAward, contributorText: f, badgeText: b },
          Top25Author: { badgeStyle: g.silverAward, contributorText: m, badgeText: p },
          Top25Rater: { badgeStyle: g.silverAward, contributorText: m, badgeText: b },
        }
      t.a = function (e) {
        var t = e.badgeType,
          a = v[t],
          n = a.badgeStyle,
          i = a.badgeText,
          o = a.contributorText
        return r.a.createElement(
          l.a,
          { style: g.awardSection },
          r.a.createElement(s.a, { Icon: h, size: 'large', style: [g.ratingAward, n] }),
          r.a.createElement(u.b, { style: g.ratingAwardText, weight: 'bold' }, o),
          r.a.createElement(u.b, null, i),
        )
      }
    },
    fBGZ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M23.53 15.155c0 .716-.58 1.296-1.296 1.296h-4.128c-.034-.144-.077-.29-.136-.425-.05-.145-.102-.29-.17-.426-.444-.948-1.16-1.74-2.082-2.304-.12-.085-.247-.162-.375-.213-.12-.077-.247-.136-.384-.188.118-.18.255-.34.408-.495.86-.853 2.098-1.322 3.497-1.322h.017c2.738 0 4.648 1.68 4.648 4.077zM21.398 7.77c0 .682-.162 1.21-.478 1.578-.52.588-1.322.665-2.038.665-.725 0-1.527-.077-2.038-.665-.435-.495-.58-1.262-.435-2.328.195-1.5 1.116-2.396 2.464-2.396 1.34 0 2.26.895 2.465 2.396.032.264.058.52.058.75zm-9.408 4.52c-.084 0-.17 0-.246.01.077.008.162.008.24.008.084 0 .178 0 .263-.01-.085-.008-.17-.008-.256-.008z',
              }),
              o.a.createElement('path', {
                d: 'M14.806 9.8c0 .768-.18 1.356-.537 1.765-.496.57-1.255.708-1.98.733-.017 0-.026.01-.043 0-.085-.01-.17-.01-.256-.01s-.17 0-.246.01c-.742-.017-1.535-.136-2.047-.733-.486-.554-.64-1.416-.478-2.618.23-1.68 1.26-2.686 2.762-2.686s2.54 1.007 2.763 2.687c.044.307.06.588.06.853zm2.43 8.16c0 .786-.63 1.417-1.416 1.417H8.145c-.776 0-1.416-.63-1.416-1.416 0-1.176.46-2.276 1.287-3.103.972-.972 2.405-1.492 3.974-1.5.922 0 1.75.16 2.466.468.136.05.264.11.384.188.128.06.256.128.375.213.563.358 1.032.82 1.373 1.373.085.135.162.28.23.425.068.136.12.28.17.426.163.47.248.974.248 1.51zM.47 15.155c0 .716.58 1.296 1.296 1.296h4.128c.034-.144.077-.29.136-.425.05-.145.102-.29.17-.426.444-.948 1.16-1.74 2.082-2.304.12-.085.247-.162.375-.213.12-.077.247-.136.384-.188-.118-.18-.255-.34-.408-.495-.86-.853-2.098-1.322-3.497-1.322h-.017c-2.746 0-4.648 1.68-4.648 4.077zM2.602 7.77c0 .682.162 1.21.478 1.578.52.588 1.322.665 2.038.665.725 0 1.527-.077 2.038-.665.435-.495.58-1.262.435-2.328-.204-1.5-1.125-2.397-2.472-2.397-1.34 0-2.26.895-2.465 2.396-.034.264-.05.52-.05.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    hiGS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              o.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    hxu0: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(c.a.Consumer, null, function (a) {
            return o.a.createElement(e, r()({}, t, { isInSidebar: a }))
          })
        }
      }
    },
    'iCa+': function (e, t, a) {
      'use strict'
      a.r(t)
      a('KqXw'), a('WNMA'), a('MvUL')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        o = a.n(i),
        c = a('aITJ'),
        l = a('t62R'),
        s = a('h0NW'),
        u = a('feu+'),
        d = a('rHpw'),
        p = a('WtWS'),
        b = a('2Rcs'),
        f = a('sUoZ'),
        m = o.a.cc42580e,
        h = o.a.gc1a5bce,
        g = o.a.bd9e5451,
        v = o.a.j5a1d85a,
        E = o.a.b25b64d5,
        y = o.a.a4ec7003,
        w = o.a.cb67d37a,
        _ = d.a.create(function (e) {
          return {
            content: { marginVertical: e.spaces.space16 },
            icon: {
              height: e.spaces.space20,
              width: e.spaces.space20,
              paddingTop: e.spaces.space4,
              paddingRight: e.spaces.space20,
            },
            iconGreen: { color: e.colors.green500 },
            infoItemContainer: { paddingHorizontal: 0, marginVertical: e.spaces.space4 },
          }
        }),
        C = {
          accessibilityLabel: w,
          containerStyle: _.infoItemContainer,
          items: [
            { label: m, decoration: r.a.createElement(p.a, { style: [_.icon, _.iconGreen] }) },
            { label: h, decoration: r.a.createElement(b.a, { style: _.icon }) },
            { label: g, decoration: r.a.createElement(f.a, { style: _.icon }) },
          ],
        }
      t.default = function (e) {
        var t = e.history,
          a = e.match.params.tweetId,
          n = r.a.createElement(l.b, null, y, r.a.createElement(s.a, C))
        return r.a.createElement(u.a, {
          actionLabel: v,
          contentStyle: _.content,
          graphicDisplayMode: 'none',
          headline: E,
          isFullHeightOnMobile: !0,
          onAction: function () {
            t.push('/i/birdwatch/t/'.concat(a))
          },
          onClose: function () {
            c.b.isTwitterApp() || t.replace('/i/status/'.concat(a))
          },
          subtext: n,
          withCloseButton: !c.b.isTwitterApp(),
        })
      }
    },
    mQYW: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchNotesUserScreen', function () {
          return ge
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('z84I'), a('uFXj'), a('ERkP')),
        o = a.n(i),
        c = a('v6aA'),
        l = a('9StO'),
        s = a('eqZz'),
        u = a('97Jx'),
        d = a.n(u),
        p = a('m3Bd'),
        b = a.n(p),
        f = a('ZD0R'),
        m = a('xSpP'),
        h = a('rxPX'),
        g = function (e, t) {
          var a = t.noteId
          return m.a.select(e, a)
        },
        v = Object(h.a)().propsFromState(function () {
          return { note: g }
        }),
        E = ['note', 'noteId'],
        y = v(function (e) {
          var t = e.note,
            a = (e.noteId, b()(e, E))
          return t ? o.a.createElement(f.a, d()({ note: t }, a)) : null
        }),
        w = a('vZpt'),
        _ = a('L5MV'),
        C = (a('KqXw'), a('WNMA'), a('MvLc')),
        S = a('yiKp'),
        I = a.n(S),
        T = a('wAC9'),
        x = a('hqKg'),
        A = a('0KEI'),
        L = function (e, t) {
          return t.match.params.alias
        },
        O = function (e, t) {
          return Object(x.createSelector)(L, function (e) {
            return e
              ? (function (e) {
                  return Object(T.a)({
                    contextSuffix: 'BIRDWATCH_CONTRIBUTOR_NOTES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Birdwatch.fetchBirdwatchContributorNotesSlice
                    },
                    getEndpointParams: function (t) {
                      return I()(I()({}, t), {}, { alias: e })
                    },
                    sliceKey: 'birdwatchContributorNotesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        k = function (e, t) {
          return C.p(e, L(0, t))
        },
        B = function (e, t) {
          return C.o(e, L(0, t))
        },
        N = function (e, t) {
          return C.v(e)
        },
        R = Object(h.a)()
          .propsFromState(function () {
            return {
              alias: L,
              notesSlice: O(),
              ratingsData: k,
              contributorBadgeData: B,
              showAliasSelfSelect: N,
              userAlias: C.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchBirdwatchProfile: C.g,
              fetchShowAliasSelfSelect: C.j,
              fetchUserAlias: C.l,
            }
          }),
        F = a('W6+M'),
        M = a('BcsE'),
        D = a('yoO3'),
        H = a('7JQg'),
        P = a('VS6U'),
        j = a('FS1z'),
        z = a('aITJ'),
        U = a('nymP'),
        W = a('MWbm'),
        V = a('t62R'),
        K = a('FIs5'),
        G = a('MtXG'),
        q = a('0yYu'),
        X = a('/yvb'),
        Q = a('j7Bv'),
        Z = a('6vad'),
        J = a('cHvH'),
        Y = a('rHpw'),
        $ = a('3XMw'),
        ee = a.n($),
        te = a('B/qP'),
        ae = a('6s7X'),
        ne = a('ms2t'),
        re = ee.a.ff692d63,
        ie = ee.a.ab28945b,
        oe = ee.a.jaf0d42c,
        ce = ee.a.fe27c1e1,
        le = ee.a.b8b34f54,
        se = ee.a.fd284b08,
        ue = ee.a.ff746f63,
        de = ee.a.hc19704b,
        pe = ee.a.j44125ee,
        be = ee.a.da55067b,
        fe = o.a.createElement(
          ee.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.a.createElement(V.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, ee.a.j1a30557),
        ),
        me = { label: de, preferredHorizontalOrientation: 'start' },
        he = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        ge = function (e) {
          var t = o.a.useContext(c.a).featureSwitches,
            a = e.alias,
            n = e.contributorBadgeData,
            i = e.createLocalApiErrorHandler,
            u = e.fetchBirdwatchProfile,
            d = e.fetchShowAliasSelfSelect,
            p = e.fetchUserAlias,
            b = e.history,
            f = e.notesSlice,
            m = e.ratingsData,
            h = e.showAliasSelfSelect,
            g = e.userAlias,
            v = o.a.useState(h),
            E = r()(v, 2),
            C = E[0],
            S = E[1],
            I = g === a
          o.a.useEffect(
            function () {
              d().catch(i())
            },
            [i, d],
          ),
            o.a.useEffect(
              function () {
                a && u(a).catch(i())
              },
              [i, u, a],
            ),
            o.a.useEffect(
              function () {
                p().catch(i())
              },
              [i, p],
            ),
            o.a.useEffect(
              function () {
                S(h)
              },
              [h],
            )
          var T,
            x,
            A,
            L,
            O,
            k,
            B,
            N,
            R,
            $ = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            de = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            ge = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            Ee = o.a.useMemo(
              function () {
                return { page: 'birdwatch', section: $ ? 'user_notes_participant' : 'user_notes' }
              },
              [$],
            ),
            ye = o.a.createElement(K.a, { header: pe, message: be }),
            we = o.a.createElement(U.a, null),
            _e = function (e) {
              return o.a.createElement(
                W.a,
                { key: e },
                o.a.createElement(y, { noteId: e, showPivot: I, showRating: !1, showTweet: !0 }),
                o.a.createElement(q.a, null),
              )
            },
            Ce = function () {
              return I ? we : ye
            },
            Se = I ? re : ie,
            Ie = ge && C && I,
            Te = ge ? void 0 : '@'.concat(a)
          return o.a.createElement(
            H.c,
            { namespace: Ee },
            o.a.createElement(
              D.a,
              null,
              o.a.createElement(P.a, {
                TabBar: _.a,
                backLocation: '/i/birdwatch',
                history: b,
                logoButton: o.a.createElement(o.a.Fragment, null),
                primaryContent: Ie
                  ? o.a.createElement(l.a, {
                      onAliasSelected: function (e) {
                        b.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((x = null == m ? void 0 : m.helpful),
                    (A = null == m ? void 0 : m.somewhatHelpful),
                    (L = null == m ? void 0 : m.notHelpful),
                    (O = void 0 !== x),
                    (k = O && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (B = n || []),
                    (N = o.a.createElement(ae.a, { style: ve.badgeStandingIcon })),
                    (R = o.a.createElement(X.a, { hoverLabel: me, icon: N, link: he, style: ve.badgeStandingButton })),
                    o.a.createElement(
                      W.a,
                      null,
                      z.b.isTwitterApp() &&
                        o.a.createElement(
                          W.a,
                          { style: ve.birdwatchProfileContainer },
                          o.a.createElement(
                            V.b,
                            { numberOfLines: 1, size: 'headline1', style: ve.birdwatchProfileTitle, weight: 'bold' },
                            Se,
                          ),
                          o.a.createElement(q.a, null),
                        ),
                      ge &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(Q.a, {
                            Icon: ne.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ve.genericBirdwatchProfileIcon,
                          }),
                          o.a.createElement(Z.b, { style: ve.profileText, text: Object(F.a)(a) }),
                          o.a.createElement(V.b, { color: 'gray700', style: ve.birdwatchAliasDisclaimerText }, fe),
                          o.a.createElement(q.a, null),
                        ),
                      k &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(Z.b, { rightControl: R, text: se }),
                          o.a.createElement(
                            W.a,
                            { style: ve.awardsContainer },
                            B.length > 0
                              ? o.a.createElement(J.a, null, function (e) {
                                  var t = e.windowWidth
                                  return o.a.createElement(
                                    W.a,
                                    {
                                      style:
                                        t >= Y.a.theme.breakpoints.medium
                                          ? ve.badgeContainerLarge
                                          : ve.badgeContainerSmall,
                                    },
                                    B &&
                                      B.map(function (e, t) {
                                        return o.a.createElement(s.a, { badgeType: e, key: t })
                                      }),
                                  )
                                })
                              : o.a.createElement(
                                  W.a,
                                  { style: ve.awardSection },
                                  o.a.createElement(Q.a, {
                                    Icon: function () {
                                      return o.a.createElement(te.a, { style: ve.noAward })
                                    },
                                    size: 'large',
                                    style: [ve.ratingAward, ve.noAwardThumbnail],
                                  }),
                                  o.a.createElement(V.b, { size: 'subtext1', style: ve.noAwardText }, ue),
                                ),
                          ),
                        ),
                      O &&
                        I &&
                        o.a.createElement(
                          W.a,
                          { style: ve.ratingsContainer },
                          o.a.createElement(V.b, { style: ve.ratingsReceived, weight: 'bold' }, le),
                          o.a.createElement(
                            W.a,
                            { style: ve.ratingNumbers },
                            Object(M.a)(x)
                              ? o.a.createElement(
                                  W.a,
                                  { style: ve.helpfulStats },
                                  (function (e) {
                                    return o.a.createElement(
                                      G.a,
                                      null,
                                      o.a.createElement(
                                        ee.a.I18NFormatMessage,
                                        { $i18n: 'g6ea1d54' },
                                        o.a.createElement(G.a.Value, null, ee.a.b5eb23f9({ count: e })),
                                        o.a.createElement(G.a.Label, null, ee.a.ebecb73c),
                                      ),
                                    )
                                  })(x),
                                )
                              : null,
                            de && Object(M.a)(A)
                              ? o.a.createElement(
                                  W.a,
                                  { style: ve.helpfulStats },
                                  (function (e) {
                                    return o.a.createElement(
                                      G.a,
                                      null,
                                      o.a.createElement(
                                        ee.a.I18NFormatMessage,
                                        { $i18n: 'b93058db' },
                                        o.a.createElement(G.a.Value, null, ee.a.i1f57cc4({ count: e })),
                                        o.a.createElement(G.a.Label, null, ee.a.e8907cd9),
                                      ),
                                    )
                                  })(A),
                                )
                              : null,
                            Object(M.a)(L)
                              ? ((T = L),
                                o.a.createElement(
                                  G.a,
                                  null,
                                  o.a.createElement(
                                    ee.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    o.a.createElement(G.a.Value, null, ee.a.d551bc31({ count: T })),
                                    o.a.createElement(G.a.Label, null, ee.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      f
                        ? o.a.createElement(
                            o.a.Fragment,
                            null,
                            o.a.createElement(Z.b, { text: I ? oe : ce }),
                            o.a.createElement(j.a, { module: f, noItemsRenderer: Ce, renderer: _e }),
                          )
                        : null,
                    )),
                sidebarContent: o.a.createElement(w.a, null),
                subtitle: Te,
                title: Se,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ve = Y.a.create(function (e) {
          return {
            awardsContainer: { paddingLeft: e.spaces.space12 },
            awardSection: {
              display: 'flex',
              flexDirection: 'row',
              marginBottom: e.spaces.space4,
              alignItems: 'center',
            },
            badgeContainerLarge: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: e.spaces.space8,
            },
            badgeContainerSmall: { display: 'flex' },
            badgeStandingButton: { border: 'none' },
            badgeStandingIcon: { color: e.colors.gray300 },
            helpfulStats: { paddingRight: e.spaces.space12 },
            noAward: { color: e.colors.gray300 },
            noAwardText: { color: e.colors.gray700 },
            noAwardThumbnail: {
              backgroundColor: e.colors.transparent,
              borderStyle: 'dashed',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderRadius: e.borderRadii.infinite,
            },
            ratingAward: { marginRight: e.spaces.space8 },
            genericBirdwatchProfileIcon: {
              color: e.colors.gray600,
              backgroundColor: e.colors.gray100,
              marginLeft: e.componentDimensions.gutterHorizontal,
            },
            ratingNumbers: { flexDirection: 'row' },
            ratingsContainer: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space20,
            },
            ratingsReceived: { paddingBottom: e.spaces.space4 },
            spinner: { paddingTop: e.spaces.space20 },
            profileText: { textTransform: 'capitalize' },
            birdwatchAliasDisclaimerText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingBottom: e.spaces.space12,
            },
            birdwatchProfileTitle: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingBottom: e.spaces.space12,
            },
            birdwatchProfileContainer: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space12 },
          }
        }),
        Ee = R(ge)
      t.default = Ee
    },
    nIpi: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchDownloadDataScreen', function () {
          return M
        })
      a('2G9S'), a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('vZpt'),
        o = a('L5MV'),
        c = a('MvLc'),
        l = a('hqKg'),
        s = a('rxPX'),
        u = a('0KEI'),
        d = function (e, t) {
          return c.u(e)
        },
        p = Object(s.a)()
          .propsFromState(function () {
            return {
              publicData: Object(l.createSelector)(d, function (e) {
                return e
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchPublicData: c.i,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'download_data' }),
        b = a('89Im'),
        f = a('tI3i'),
        m = a.n(f),
        h = a('yoO3'),
        g = a('VS6U'),
        v = a('MWbm'),
        E = a('t62R'),
        y = a('/yvb'),
        w = a('0yYu'),
        _ = a('6vad'),
        C = a('rHpw'),
        S = a('3XMw'),
        I = a.n(S),
        T = I.a.cb1adfa0,
        x = I.a.e72533f5,
        A = I.a.g652cada,
        L = I.a.g4d71b5e,
        O = I.a.b8a27fe1,
        k = I.a.j1c99e0f,
        B = I.a.i6f69313,
        N = I.a.h786cd79,
        R = I.a.d0fe8052,
        F = r.a.createElement(
          E.b,
          { color: 'gray700', size: 'subtext2' },
          r.a.createElement(
            I.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            r.a.createElement(
              E.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              I.a.g0cacb73,
            ),
          ),
        ),
        M = function (e) {
          var t,
            a,
            n,
            c = e.analytics,
            l = e.createLocalApiErrorHandler,
            s = e.fetchPublicData,
            u = e.history,
            d = e.publicData
          r.a.useEffect(
            function () {
              s().catch(l())
            },
            [l, s],
          )
          var p,
            f = null == d || null === (t = d.notes) || void 0 === t ? void 0 : t.urls,
            C = null == f ? void 0 : f.length,
            S = null == d || null === (a = d.ratings) || void 0 === a ? void 0 : a.urls,
            M = null == S ? void 0 : S.length,
            H = null == d || null === (n = d.notes) || void 0 === n ? void 0 : n.created_at,
            P = function (e, t, a, n) {
              return (
                m()(void 0 !== a, 'totalFiles must be defined'),
                r.a.createElement(
                  v.a,
                  { key: t, style: [D.fileSection, t > 1 && D.fileSectionNotFirst] },
                  r.a.createElement(
                    E.b,
                    null,
                    r.a.createElement(I.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: a }),
                  ),
                  r.a.createElement(y.a, {
                    icon: r.a.createElement(b.a, null),
                    link: e,
                    onPress:
                      ((i = ''.concat(n, '_').concat(t)),
                      function () {
                        c.scribeAction('click_'.concat(i))
                      }),
                    type: 'brandText',
                  }),
                )
              )
              var i
            },
            j = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                v.a,
                { style: D.headerWrapper },
                r.a.createElement(E.b, { size: 'title4', style: D.textSection, weight: 'heavy' }, x),
                r.a.createElement(E.b, { color: 'gray700', style: D.textSection }, A),
                r.a.createElement(
                  E.b,
                  { color: 'gray700' },
                  L,
                  r.a.createElement(
                    E.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    O,
                  ),
                  '.',
                ),
              ),
              r.a.createElement(w.a, null),
              r.a.createElement(_.b, { text: k }),
              f && (null == f ? void 0 : f.length) > 0
                ? f.map(function (e, t) {
                    return P(e, t + 1, C, 'notes')
                  })
                : r.a.createElement(E.b, { color: 'gray700', style: D.emptyData }, N),
              r.a.createElement(w.a, null),
              r.a.createElement(_.b, { text: B }),
              S && (null == S ? void 0 : S.length) > 0
                ? S.map(function (e, t) {
                    return P(e, t + 1, M, 'ratings')
                  })
                : r.a.createElement(E.b, { color: 'gray700', style: D.emptyData }, R),
              r.a.createElement(w.a, null),
              r.a.createElement(
                v.a,
                { style: D.footerText },
                r.a.createElement(
                  E.b,
                  { color: 'gray700', style: D.dateGenerated },
                  r.a.createElement(I.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((p = H),
                      p
                        ? new Date(p).toLocaleString('default', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : ''),
                  }),
                ),
                F,
              ),
            )
          return r.a.createElement(
            h.a,
            null,
            r.a.createElement(g.a, {
              TabBar: o.a,
              history: u,
              logoButton: r.a.createElement(r.a.Fragment, null),
              primaryContent: j,
              sidebarContent: r.a.createElement(i.a, null),
              title: T,
              withTweetButton: !1,
            }),
          )
        },
        D = C.a.create(function (e) {
          return {
            dateGenerated: { paddingBottom: e.spaces.space16 },
            emptyData: {
              display: 'flex',
              justifyContent: 'center',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            fileSection: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space4,
            },
            fileSectionNotFirst: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
            },
            footerText: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            headerWrapper: { alignItems: 'center', margin: e.spaces.space32, textAlign: 'center' },
            textSection: { marginBottom: e.spaces.space16 },
          }
        }),
        H = p(M)
      t.default = H
    },
    nymP: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('v6aA'),
        o = a('FIs5'),
        c = a('3XMw'),
        l = a.n(c),
        s = { external: !0, pathname: 'https://twitter.github.io/birdwatch/writing-notes' },
        u = l.a.i859a9d3,
        d = l.a.ff3e0be2,
        p = l.a.e9f1fbcb,
        b = l.a.db08295d,
        f = l.a.f4d67927,
        m = l.a.eae6767a
      t.a = function () {
        var e = r.a.useContext(i.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return r.a.createElement(o.a, {
          buttonLink: e ? s : '/i/flow/join-birdwatch',
          buttonText: e ? u : d,
          header: e ? p : b,
          message: e ? m : f,
        })
      }
    },
    owBv: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('lTXM'),
        o = a('m3Bd'),
        c = a.n(o),
        l = (a('z84I'), a('ho0z'), a('YeIG')),
        s = a('kLu5'),
        u = a('7MdP'),
        d = ['__typename', 'facepile', 'topic'],
        p = function (e) {
          var t = Object(s.b)(),
            a = (function (e) {
              if ('SegmentedTimelines' === e.body.__typename) {
                var t = e.body.timelines.map(function (e) {
                  return {
                    graphQLTimelineId: e.timeline.id,
                    id: e.id,
                    labelText: e.labelText,
                    scribeConfig: Object(l.a)(e.scribeConfig) ? void 0 : r()({}, e.scribeConfig),
                    refreshIntervalSec: e.refreshIntervalSec,
                  }
                })
                return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t }
              }
            })(e),
            n = (function (e, t) {
              var a = t.header
              if (a && 'TopicPageHeader' === a.__typename) {
                a.__typename
                var n = a.facepile,
                  i = a.topic,
                  o = c()(a, d),
                  l = n && Object(u.b)(e, n),
                  s = Object(u.a)(e, i)
                return r()(r()({}, o), {}, { topicId: s, facepile: l })
              }
            })(t, e),
            i = (function (e, t) {
              var a = t.navBar
              if (!a) return {}
              switch (a.__typename) {
                case 'TitleNavBar':
                  return { title: a.title, subtitle: a.subtitle }
                case 'TopicPageNavBar':
                  return {
                    navBar: { topicId: Object(u.a)(e, a.topic), clientEventInfo: a.clientEventInfo },
                    title: a.topic.name,
                    subtitle: void 0,
                  }
                default:
                  return {}
              }
            })(t, e)
          return {
            globalObjects: t,
            pageConfiguration: {
              id: e.id,
              tabs: a,
              header: n,
              navBar: i.navBar && i.navBar,
              title: i.title,
              subtitle: i.subtitle,
              scribeConfig: r()({}, e.scribeConfig),
            },
          }
        },
        b = a('WpDa'),
        f = a('IcAo')
      t.a = function (e) {
        var t,
          a,
          n =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(b.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (a = t.initialTimeline) &&
                void 0 !== a &&
                a.timeline.timeline
              ? Object(b.a)(t.initialTimeline.timeline.timeline)
              : Object(b.a)(i.c),
          o = p(e),
          c = o.globalObjects,
          l = o.pageConfiguration
        return r()(r()({}, n), {}, { globalObjects: Object(f.a)(c, n.globalObjects), pageConfiguration: l })
      }
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return W
      })
      a('yiKp')
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        c = a('VrFO'),
        l = a.n(c),
        s = a('Y9Ll'),
        u = a.n(s),
        d = a('1Pcy'),
        p = a.n(d),
        b = a('5Yy7'),
        f = a.n(b),
        m = a('2VqO'),
        h = a.n(m),
        g = a('KEM+'),
        v = a.n(g),
        E = (a('2G9S'), a('ERkP')),
        y = a.n(E),
        w = a('38/B'),
        _ = a('t62R'),
        C = a('/yvb'),
        S = a('piX5'),
        I = a('3XMw'),
        T = a.n(I),
        x = a('tI3i'),
        A = a.n(x),
        L = a('oQhu'),
        O = a('rHpw'),
        k = a('aITJ'),
        B = a('MWbm'),
        N = a('n5fo'),
        R = a('5emT'),
        F = a('Oib4'),
        M = a('WtWS'),
        D = a('ioan'),
        H = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        P = function (e) {
          return e.length
        },
        j = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P
          return t(e)
        },
        z = T.a.de540c32,
        U = T.a.b4abfdb3,
        W = (function (e) {
          f()(a, e)
          var t = h()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              v()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              v()(
                p()(n),
                '_getTextInputStyle',
                Object(L.a)(function (e) {
                  return [V.root, !e && V.disabled]
                }),
              ),
              v()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === a && t ? (r ? 'text' : 'password') : a
              }),
              v()(p()(n), '_calculateLength', function (e) {
                return j(e, n.props.calculateLength)
              }),
              v()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              v()(p()(n), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  r,
                  i,
                  o = n.props.type,
                  c =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (r = a.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === c && !0 === l
              }),
              v()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              v()(p()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur,
                  a = e.currentTarget.value,
                  r = n._calculateLength(a),
                  i = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              v()(p()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  r = e.currentTarget.value,
                  i = n._calculateLength(r),
                  o = n._getActualCount(r),
                  c = n._getAdjustedMaxLength()
                void 0 !== c && r.length > c && a.length < r.length
                  ? (e.currentTarget.value = a)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              v()(p()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t(e)
              }),
              v()(p()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !i || (e.preventDefault(), i(e))
              }),
              v()(p()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                k.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              v()(p()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                k.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              v()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              v()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              v()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  r = e.validLength,
                  i = !!n,
                  o = 'string' == typeof e.value,
                  c = 'string' == typeof t
                A()(
                  !(!c && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  A()(!(a && r && r > a), 'Max length should be equal or greater than valid length.'),
                  A()(
                    !((void 0 !== a && a <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              v()(p()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              v()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              v()(p()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  t = n.getValue(),
                  a = n._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(i),
                actualCount: P(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              n
            )
          }
          return (
            u()(
              a,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.maxLength,
                      n = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      c = e.onChange,
                      l = e.validLength,
                      s = e.value
                    ;(l === r && a === o && !!n === !!c && ('string' == typeof i) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      a = e.editable,
                      n = e.errorText,
                      r = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      c = this._isFormInvalid()
                    return y.a.createElement(
                      B.a,
                      { style: [K.root, i] },
                      y.a.createElement(
                        B.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            S.a.border,
                            K.textInputFormStyle,
                            c && S.a.invalidBorderColor,
                            o && c && S.a.focusedBorderInvalid,
                            o && !c && S.a.focusedBorderValid,
                            !a && S.a.disabled,
                          ],
                        },
                        y.a.createElement(
                          B.a,
                          { style: K.textInputFormWrapper },
                          y.a.createElement(
                            B.a,
                            { style: K.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      y.a.createElement(
                        B.a,
                        { style: [K.sidePadding, K.underTextInputForm] },
                        y.a.createElement(
                          B.a,
                          { style: K.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          c && n ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      a = this._isFormInvalid() ? 'red500' : t,
                      n = this._isLabelLarge()
                    return y.a.createElement(
                      _.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          K.textInputHeaderItem,
                          n && K.placeholderText,
                          !w.a.reducedMotionEnabled && K.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      a = (e.accessibilityLabel, e.calculateLength, e.editable),
                      n =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      i = (e.style, e.type, e.validLength, o()(e, H))
                    return y.a.createElement(
                      B.a,
                      { style: V.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      y.a.createElement(
                        _.b,
                        { size: 'headline1', style: V.wrapper },
                        y.a.createElement(
                          D.a,
                          r()({}, i, {
                            editable: a,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(a),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      n && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      a = e.type,
                      n = this.state.isPasswordRevealed
                    return 'password' === a && t
                      ? y.a.createElement(
                          B.a,
                          { style: K.passwordVisibilityIconContainer },
                          y.a.createElement(C.a, {
                            accessibilityLabel: n ? U : z,
                            focusable: !0,
                            hoverLabel: { label: n ? U : z },
                            icon: n ? y.a.createElement(N.a, null) : y.a.createElement(R.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return y.a.createElement(
                      B.a,
                      { accessibilityLiveRegion: 'polite' },
                      y.a.createElement(
                        _.b,
                        { color: 'gray700', size: 'subtext2', style: K.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return y.a.createElement(
                      B.a,
                      { accessibilityLiveRegion: 'assertive' },
                      y.a.createElement(
                        _.b,
                        { color: 'red500', size: 'subtext2', style: K.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      a = this._exceedsValidLength(e),
                      n = t && T.a.ia24dc8c(t),
                      r = T.a.ia24dc8c(e)
                    return y.a.createElement(
                      B.a,
                      { accessibilityLiveRegion: 'polite', style: [K.textInputHeaderItem, K.displayCount] },
                      y.a.createElement(
                        _.b,
                        { color: a ? 'red500' : 'gray700', size: 'subtext2' },
                        n ? ''.concat(r, ' / ').concat(n) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      a = [K.icon, t && K.focusedIcon]
                    return e && y.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? y.a.createElement(F.a, { style: [K.validationIcon, S.a.invalidColor] })
                      : y.a.createElement(M.a, { style: [K.validationIcon, S.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var a = e.calculateLength,
                      n = e.value,
                      r = 'string' == typeof n ? j(n, a) : 0
                    return 'string' == typeof n && r !== t.displayCount
                      ? { displayCount: r, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            a
          )
        })(y.a.Component)
      v()(W, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (W.propTypes = {})
      var V = O.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        K = O.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    piX5: function (e, t, a) {
      'use strict'
      a('uFXj'), a('2G9S')
      var n = a('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = n
    },
    uw5z: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return R
        })
      var n,
        r = a('ERkP'),
        i = a.n(r),
        o = a('v6aA'),
        c = a('vZpt'),
        l = a('L5MV'),
        s = (a('KqXw'), a('WNMA'), a('owBv')),
        u = a('ZNT5'),
        d = a('hqKg'),
        p = a('rxPX'),
        b = function (e, t) {
          var a, n
          return (
            (null === (a = t.match) || void 0 === a || null === (n = a.params) || void 0 === n ? void 0 : n.tabId) ||
            void 0
          )
        },
        f = function () {
          return Object(d.createSelector)(b, function (e) {
            return (function (e) {
              return Object(u.a)({
                timelineId: 'birdwatch-global-timeline',
                getEndpoint: function (e) {
                  return e.Birdwatch.fetchGlobalTimeline
                },
                getEndpointParams: function () {
                  return { tabId: e }
                },
                context: 'FETCH_BIRDWATCH_GLOBAL_TIMELINE',
                perfKey: 'birdwatch-global-timeline',
                formatResponse: s.a,
              })
            })(e)
          })
        },
        m = Object(p.a)().propsFromState(function () {
          return { module: f(), selectedTabId: b }
        }),
        h = a('yiKp'),
        g = a.n(h),
        v = a('KEM+'),
        E = a.n(v),
        y = a('8UdT'),
        w = a('ezF+'),
        _ =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          {
            loader: function () {
              return a.e(231).then(a.bind(null, 'SdtT'))
            },
            loaderKey: 'pivotLabelLoader',
            strategy: a('XBtf').a.Critical,
          }),
        C = w.e(_),
        S = a('S/Qv'),
        I = a('5Y9N'),
        T = a('Yy//'),
        x =
          ((n = {}),
          E()(n, y.b.Label, C),
          E()(n, y.b.Message, Object(S.a)({})),
          E()(n, y.b.Tweet, Object(T.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          n),
        A = g()(g()({}, Object(I.a)({})), x),
        L = a('3XMw'),
        O = a.n(L),
        k = a('UZjl'),
        B = O.a.ha8209bb,
        N = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        R = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            a = e.history,
            n = e.module,
            r = e.selectedTabId,
            s = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            u = i.a.useMemo(
              function () {
                var e = null != r ? r : 'global_timeline'
                return { page: 'birdwatch', section: s ? ''.concat(e, '_participant') : e }
              },
              [s, r],
            )
          return i.a.createElement(k.a, {
            TabBar: l.a,
            entryConfiguration: A,
            getTabLink: N,
            history: a,
            initialPageNamespace: u,
            logoButton: i.a.createElement(i.a.Fragment, null),
            module: n,
            selectedTabId: r,
            sidebarContent: i.a.createElement(c.a, null),
            timelinePrefix: 'birdwatch-',
            title: B,
            withTweetButton: !1,
          })
        },
        F = m(R)
      t.default = F
    },
    v84o: function (e, t, a) {
      'use strict'
      a('2G9S')
      var n = a('180P'),
        r = a('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          a = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          c = i.urtEndpointOptions || {},
          l = c.cacheId,
          s = c.requestParams
        return Object(r.b)({
          timelineId: l || ''.concat(a).concat(Object(n.a)(i)),
          endpointUrl: o,
          endpointParams: s || {},
        })
      }
    },
    vZpt: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        c = (a('uFXj'), a('ERkP')),
        l = a.n(c),
        s = a('v6aA'),
        u = a('G6rE'),
        d = a('rxPX'),
        p = a('0KEI'),
        b = function (e, t) {
          return u.e.select(e, '1319036828964454402')
        },
        f = Object(d.a)()
          .propsFromState(function () {
            return { birdwatchAccount: b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: u.e.fetchManyIfNeeded,
            }
          }),
        m = a('FQwk'),
        h = a('MWbm'),
        g = a('t62R'),
        v = a('6vad'),
        E = a('/yvb'),
        y = a('h0NW'),
        w = a('rC8y'),
        _ = a('rHpw'),
        C = a('3XMw'),
        S = a.n(C),
        I = a('yygM'),
        T = a('QDet'),
        x = a('wz7L'),
        A = a('88ay'),
        L = S.a.de962615,
        O = S.a.cbfa448b,
        k = S.a.b171d7c4,
        B = '1319036828964454402',
        N = S.a.ab23a972,
        R = S.a.gfa725ae,
        F = S.a.eac7b6ab,
        M = S.a.b0381cfb,
        D = S.a.f0addddc,
        H = S.a.c68f3bcf,
        P = S.a.dfb1f498,
        j = l.a.createElement(
          g.b,
          null,
          l.a.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            l.a.createElement(
              g.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              S.a.b8a36128,
            ),
          ),
        ),
        z = _.a.create(function (e) {
          return {
            root: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 },
            footer: {
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
            },
            infoItemContainer: { paddingLeft: e.spaces.space16, paddingRight: 0 },
            module: {
              backgroundColor: e.colors.cellBackground,
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.xLarge,
              marginBottom: e.spaces.space16,
              overflow: 'hidden',
            },
            moduleBody: { padding: e.spaces.space16 },
            row: { flexDirection: 'row' },
            text: { paddingRight: e.spaces.space16 },
            transparentModule: { backgroundColor: 'transparent', borderWidth: 0 },
            valuesGroup: { paddingBottom: e.spaces.space20, paddingTop: e.spaces.space20 },
            valueIcon: { color: e.colors.gray700 },
            valueItem: {
              textAlign: 'left',
              flexDirection: 'row',
              marginLeft: e.spaces.space16,
              color: e.colors.gray700,
            },
          }
        }),
        U = f(function (e) {
          var t = e.birdwatchAccount,
            a = e.createLocalApiErrorHandler,
            n = e.fetchUsersIfNeeded,
            i = l.a.useContext(s.a).featureSwitches,
            c = l.a.useState(null == t ? void 0 : t.following),
            u = o()(c, 2),
            d = u[0],
            p = u[1],
            b = i.isTrue('responsive_web_birdwatch_note_writing_enabled')
          l.a.useEffect(
            function () {
              n([B])
                .then(function (e) {
                  var t
                  e && p(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(a())
            },
            [a, n],
          )
          var f = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: L }),
              l.a.createElement(
                h.a,
                { style: [z.moduleBody, z.row] },
                l.a.createElement(g.b, { color: 'gray700', style: z.text }, O),
                l.a.createElement(
                  E.a,
                  { accessibilityLabel: k, link: '/i/flow/join-birdwatch', type: 'brandFilled' },
                  k,
                ),
              ),
            ),
            _ = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: N }),
              l.a.createElement(
                h.a,
                null,
                l.a.createElement(A.b, { decoration: A.e, displayMode: 'UserCompact', userId: B, withFollowsYou: !0 }),
              ),
            ),
            C = function (e) {
              return l.a.createElement(h.a, { style: z.valueItem }, l.a.createElement(g.b, { color: 'gray700' }, e))
            },
            S = {
              accessibilityLabel: R,
              items: [
                { label: '', decoration: l.a.createElement(I.a, { style: z.valueIcon }), description: C(F) },
                { label: '', decoration: l.a.createElement(T.a, { style: z.valueIcon }), description: C(M) },
                { label: '', decoration: l.a.createElement(x.a, { style: z.valueIcon }), description: C(D) },
              ],
            },
            U = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: R }),
              l.a.createElement(
                h.a,
                { style: z.valuesGroup },
                l.a.createElement(y.a, r()({}, S, { containerStyle: z.infoItemContainer })),
              ),
              l.a.createElement(
                h.a,
                { style: z.footer },
                l.a.createElement(w.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: H,
                  withBottomRadius: !0,
                }),
              ),
            ),
            W = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: P }),
              l.a.createElement(h.a, { style: z.moduleBody }, j),
            )
          return l.a.createElement(
            h.a,
            { accessibilityRole: 'complementary', style: z.root },
            b ? null : f,
            d ? null : _,
            U,
            W,
            l.a.createElement(
              h.a,
              { style: [z.module, z.transparentModule] },
              l.a.createElement(m.a, { textColor: 'gray700', withOverflow: !0 }),
            ),
          )
        })
      t.a = U
    },
    wz7L: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    xSpP: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return l
      })
      var n = a('oEOe'),
        r = a('MvLc'),
        i = a('3zvM'),
        o = a('lMB6'),
        c = Object(i.e)({ namespace: 'birdwatchContributorNotes' }),
        l = function (e) {
          return function (t, a, i) {
            var o = i.api
            return n.b(t, { request: o.Birdwatch.deleteNote, params: { note_id: e } })(
              { actionTypes: c.actionTypes.OPTIMISTIC_UPDATE, context: 'DELETE_NOTE' },
              function (t) {
                if (t) return [c.deleteOne(e), Object(r.d)(e)]
              },
            )
          }
        }
      t.a = o.a.register(c)
    },
    yygM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 26 26',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M13 20.673c-.414 0-.75-.336-.75-.75V14.46c0-.414.336-.75.75-.75s.75.336.75.75v5.463c0 .414-.336.75-.75.75z',
              }),
              o.a.createElement('path', {
                d: 'M13 4.5c-4.687 0-8.5 3.813-8.5 8.5 0 3.424 2.037 6.494 5.19 7.83.094.04.196.067.306.067.414 0 .75-.336.75-.75 0-.31-.188-.575-.456-.69C7.685 18.36 6 15.826 6 13c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.825-1.683 5.358-4.288 6.454-.273.112-.467.38-.467.693 0 .414.336.75.75.75.105 0 .204-.022.294-.06C19.455 19.51 21.5 16.433 21.5 13c0-4.687-3.813-8.5-8.5-8.5zM13 3c-.414 0-.75-.34-.75-.757V.757C12.25.34 12.586 0 13 0s.75.34.75.757v1.486c0 .418-.336.757-.75.757zM3 13c0 .414-.34.75-.757.75H.757C.34 13.75 0 13.414 0 13s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zm23 0c0 .414-.34.75-.757.75h-1.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zM5.93 5.93c-.294.292-.77.29-1.067-.006l-1.05-1.05c-.296-.296-.298-.774-.005-1.066s.77-.29 1.066.005l1.05 1.05c.295.296.298.773.005 1.066zm16.262-2.122c.293.293.29.77-.005 1.066l-1.05 1.05c-.296.296-.774.3-1.067.006s-.29-.77.005-1.066l1.05-1.05c.297-.297.775-.3 1.067-.006zM17 22.75c0 .414-.34.75-.757.75H9.757c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h6.486c.418 0 .757.336.757.75zm-1 2.5c0 .414-.34.75-.757.75h-4.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h4.486c.418 0 .757.336.757.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 26, height: 26 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
