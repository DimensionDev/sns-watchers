;(window.webpackJsonp = window.webpackJsonp || []).push([
  [38, 17, 174],
  {
    '/ZwF': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchTweetNotesScreen', function () {
          return he
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('LW0h'), a('7x/C'), a('z84I'), a('uFXj'), a('ERkP')),
        o = a.n(i),
        c = a('v6aA'),
        l = a('ZD0R'),
        s = a('vZpt'),
        d = a('L5MV'),
        u = (a('KqXw'), a('WNMA'), a('MvLc')),
        p = a('XOJV'),
        h = a('G6rE'),
        b = a('rxPX'),
        m = a('0KEI'),
        f = function (e, t) {
          return t.match.params.tweetId
        },
        v = function (e, t) {
          var a = f(0, t)
          return a ? p.a.selectHydrated(e, a) : void 0
        },
        g = function (e, t) {
          return u.s(e, f(0, t))
        },
        w = function (e, t) {
          return u.x(e, f(0, t))
        },
        y = function (e, t) {
          return u.w(e, f(0, t))
        },
        E = Object(b.a)()
          .propsFromState(function () {
            return {
              ownNoteData: w,
              fetchStatus: y,
              loggedInUser: h.e.selectLoggedInUser,
              tweet: v,
              tweetId: f,
              notes: g,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: u.k,
              fetchTweet: p.a.fetchOneIfNeeded,
              fetchUserAlias: u.l,
            }
          }),
        _ = a('kGix'),
        C = a('3XMw'),
        T = a.n(C),
        S = a('yoO3'),
        I = a('7JQg'),
        x = a('VS6U'),
        A = a('xZXe'),
        k = a('MWbm'),
        L = a('FIs5'),
        O = a('4zmP'),
        B = a('t62R'),
        N = a('0yYu'),
        M = a('htQn'),
        P = a('6vad'),
        R = a('/yvb'),
        F = a('Qwev'),
        D = a('rHpw'),
        H = a('Nh1N'),
        j = a('yiKp'),
        U = a.n(j),
        z = a('Lsrn'),
        W = a('k/Ka'),
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(W.a)(
            'svg',
            U()(
              U()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [z.a.root, e.style],
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
        q = T.a.h8335712,
        X = T.a.fe27c1e1,
        Q = T.a.c59107c3,
        Z = T.a.i859a9d3,
        J = T.a.ib73f867,
        Y = T.a.efd14e79,
        $ = T.a.d06b723c,
        ee = T.a.f84bcd3d,
        te = T.a.f10aaf3b,
        ae = T.a.d4f03f72,
        ne = T.a.h98222f4,
        re = T.a.d5c203a5,
        ie = T.a.bd3f064b,
        oe = T.a.c21313b9,
        ce = T.a.c2c4012f,
        le = T.a.ia596d40,
        se = T.a.deff0bdd,
        de = T.a.b95dc58a,
        ue = T.a.a565833d,
        pe = o.a.createElement(L.a, { buttonLink: '/i/birdwatch/about', buttonText: Z, header: J }),
        he = function (e) {
          var t = o.a.useContext(c.a).featureSwitches,
            a = e.createLocalApiErrorHandler,
            n = e.fetchNotes,
            i = e.fetchStatus,
            u = e.fetchTweet,
            p = e.fetchUserAlias,
            h = e.history,
            b = e.loggedInUser,
            m = e.notes,
            f = e.ownNoteData,
            v = e.tweet,
            g = e.tweetId,
            w = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            y =
              t.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
              t.isTrue('responsive_web_birdwatch_rating_crowd_enabled'),
            E = o.a.useMemo(
              function () {
                return { page: 'birdwatch', section: w ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [w],
            ),
            C = o.a.useState(f),
            T = r()(C, 2),
            L = T[0],
            D = T[1],
            j = o.a.useState(!1),
            U = r()(j, 2),
            z = U[0],
            W = U[1]
          o.a.useEffect(
            function () {
              g && (n(g).catch(a()), u(g).catch(a()))
            },
            [a, n, u, g],
          ),
            o.a.useEffect(
              function () {
                D(f)
              },
              [f],
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
            he = o.a.useMemo(
              function () {
                return m.filter(function (e) {
                  return 'CurrentlyRatedNotHelpful' === e.rating_status
                })
              },
              [m],
            ),
            me = L || m.length,
            fe = '/i/birdwatch/contribute/'.concat(g),
            ve =
              t.isTrue('responsive_web_birdwatch_appeals_enabled') &&
              (null == b ? void 0 : b.id_str) === (null == v ? void 0 : v.user.id_str),
            ge = o.a.createElement(
              k.a,
              { style: be.appealsCallout },
              o.a.createElement(O.a, {
                Icon: H.a,
                action: { label: Z, link: 'https://twitter.github.io/birdwatch/additional-review' },
                headline: re,
                text: ie,
                type: 'primary',
              }),
            ),
            we = o.a.createElement(
              k.a,
              { style: be.actionModuleContainer },
              o.a.createElement(
                k.a,
                { style: be.actionModule },
                y ? o.a.createElement(K, { style: be.icon }) : o.a.createElement(H.a, { style: be.icon }),
                o.a.createElement(B.b, { size: 'headline1', style: be.header, weight: 'bold' }, y ? $ : ae),
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
              M.a,
              null,
              o.a.createElement(
                k.a,
                { style: be.contentWrapper },
                o.a.createElement(
                  k.a,
                  { style: be.withBottomBorder },
                  o.a.createElement(A.b, {
                    displayPromotedContent: !1,
                    tweetId: g,
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
                      L &&
                        o.a.createElement(
                          k.a,
                          null,
                          o.a.createElement(P.b, { text: q }),
                          o.a.createElement(l.a, {
                            handleDelete: function (e) {
                              D(null)
                            },
                            note: L,
                          }),
                        ),
                      !!m.length &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(k.a, { style: be.divider }),
                          o.a.createElement(P.b, { text: X }),
                          ve ? ge : we,
                          o.a.createElement(N.a, null),
                          J.map(function (e) {
                            return o.a.createElement(
                              o.a.Fragment,
                              { key: e.rest_id },
                              o.a.createElement(l.a, { note: e }),
                              o.a.createElement(N.a, null),
                            )
                          }),
                          (null == he ? void 0 : he.length) > 0
                            ? ((V = he),
                              z
                                ? V.map(function (e) {
                                    return o.a.createElement(
                                      o.a.Fragment,
                                      { key: e.rest_id },
                                      o.a.createElement(l.a, { note: e }),
                                      o.a.createElement(N.a, null),
                                    )
                                  })
                                : o.a.createElement(
                                    k.a,
                                    { style: [be.hiddenNotesSection, be.withBottomBorder] },
                                    o.a.createElement(
                                      k.a,
                                      { style: be.hiddenNotesHeader },
                                      o.a.createElement(G.a, { style: be.iconHiddenNotes }),
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
                          y && !L
                            ? o.a.createElement(
                                k.a,
                                { style: be.actionModuleContainer },
                                o.a.createElement(
                                  k.a,
                                  { style: be.actionModule },
                                  o.a.createElement(B.b, { style: be.improveText }, w ? le : de),
                                  o.a.createElement(
                                    R.a,
                                    {
                                      accessibilityLabel: w ? se : ue,
                                      link: w ? fe : '/i/flow/join-birdwatch',
                                      type: 'brandOutlined',
                                    },
                                    w ? se : ue,
                                  ),
                                ),
                              )
                            : null,
                        ),
                    )
                  : i === _.a.LOADING
                  ? o.a.createElement(F.a, { accessibilityLabel: Y, size: 'large', style: be.spinner })
                  : pe,
              ),
            )
          return o.a.createElement(
            I.c,
            { namespace: E },
            o.a.createElement(
              S.a,
              null,
              o.a.createElement(x.a, {
                TabBar: d.a,
                backLocation: '/i/birdwatch',
                history: h,
                logoButton: o.a.createElement(o.a.Fragment, null),
                primaryContent: ye,
                sidebarContent: o.a.createElement(s.a, null),
                title: Q,
                withTweetButton: !1,
              }),
            ),
          )
        },
        be = D.a.create(function (e) {
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
        me = E(he)
      t.default = me
    },
    '0SuV': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchPrinciples', function () {
          return k
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
        d = Object(o.a)()
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
        u = a('3XMw'),
        p = a.n(u),
        h = a('5FtR'),
        b = a('aITJ'),
        m = a('MWbm'),
        f = a('t62R'),
        v = a('h0NW'),
        g = a('feu+'),
        w = a('rHpw'),
        y = a('yygM'),
        E = a('QDet'),
        _ = a('wz7L'),
        C = p.a.gfa725ae,
        T = p.a.c3d89aca,
        S = p.a.h7ad677b,
        I = p.a.eac7b6ab,
        x = p.a.b0381cfb,
        A = p.a.f0addddc,
        k = function (e) {
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
            d = function (e) {
              return r.a.createElement(m.a, { style: L.valueItem }, r.a.createElement(f.b, { color: 'gray700' }, e))
            },
            u = {
              accessibilityLabel: C,
              containerStyle: L.infoItemContainer,
              items: [
                { label: '', decoration: r.a.createElement(y.a, null), description: d(I) },
                { label: '', decoration: r.a.createElement(E.a, null), description: d(x) },
                { label: '', decoration: r.a.createElement(_.a, null), description: d(A) },
              ],
            },
            p = r.a.createElement(m.a, { style: L.values }, r.a.createElement(v.a, u))
          return o
            ? r.a.createElement(h.a, { to: l })
            : r.a.createElement(g.a, {
                actionLabel: T,
                graphicDisplayMode: 'none',
                headline: S,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), c && i.replace('/i/birdwatch/contribute_form/'.concat(c))
                },
                onClose: function () {
                  s('close'), c && i.goBackThroughModals({ fallbackPath: '/i/status/'.concat(c) })
                },
                subtext: p,
                withCloseButton: !b.b.isTwitterApp(),
              })
        },
        L = w.a.create(function (e) {
          return {
            infoItemContainer: { paddingHorizontal: 0 },
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        O = d(k)
      t.default = O
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
    '3zeG': function (e, t, a) {
      'use strict'
      a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('ERkP')
      var n = a('zb92'),
        r = Object(n.a)({
          loader: function () {
            return Promise.all([a.e(0), a.e(186)]).then(a.bind(null, 'MzK7'))
          },
        })
      t.a = r
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
    '68+r': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o = a('k49u'),
        c = a('3XMw'),
        l = a.n(c).a.ed428a75,
        s = ((n = {}), i()(n, o.a.NotMutingTargetUser, { toast: { text: l } }), i()(n, 'showToast', !0), n)
    },
    '6bZg': function (e, t, a) {
      'use strict'
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o = a('OIC0')
      t.a =
        ((n = {}),
        i()(n, o.a.CASHTAG, void 0),
        i()(n, o.a.EMOJI, void 0),
        i()(n, o.a.HASHTAG, 'hashtag_click'),
        i()(n, o.a.INTERACTIVE_HIGHLIGHT, 'highlight_click'),
        i()(n, o.a.MEDIA, void 0),
        i()(n, o.a.MENTION, 'mention_click'),
        i()(n, o.a.TEXT, void 0),
        i()(n, o.a.URL, 'open_link'),
        n)
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
        d = a('rxPX'),
        u = a('0KEI'),
        p = Object(d.a)()
          .propsFromState(function () {
            return { aliasSelfSelectOptions: l.n }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchAliasSelfSelectOptions: l.f,
              selectAlias: l.m,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'alias_select' }),
        h = a('W6+M'),
        b = a('3XMw'),
        m = a.n(b),
        f = a('t62R'),
        v = a('h0NW'),
        g = a('feu+'),
        w = a('gSL+'),
        y = a('Qwev'),
        E = a('4zmP'),
        _ = a('rHpw'),
        C = a('j7Bv'),
        T = a('ms2t'),
        S = a('VwDm'),
        I = a('EQ/a'),
        x = a('U+bB'),
        A = a('MWbm'),
        k = m.a.f084f1cd,
        L = m.a.ja0ee36f,
        O = m.a.j761c248,
        B = m.a.h66bd30a,
        N = m.a.j48ab593,
        M = m.a.e17c80bc,
        P = m.a.d939cf16,
        R = m.a.a56f0c32,
        F = m.a.d17c59e4,
        D = m.a.i719f8e1,
        H = m.a.d0e190cd,
        j = m.a.e74a2cd5,
        U = m.a.g9677c6d,
        z = m.a.e4a6e006,
        W = m.a.f83d0446,
        V = function (e) {
          return o.a.createElement(f.b, { weight: 'bold' }, e)
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
        q = o.a.createElement(C.a, { Icon: T.a, color: 'neutral', size: 'large', style: G.aliasIcon }),
        X = {
          accessibilityLabel: k,
          containerStyle: G.infoItemContainer,
          items: [
            { label: V(N), decoration: o.a.createElement(T.a, { style: G.icon }), description: M },
            { label: V(P), decoration: o.a.createElement(S.a, { style: G.icon }), description: R },
            { label: V(F), decoration: o.a.createElement(I.a, { style: G.icon }), description: D },
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
            d = r()(s, 2),
            u = d[0],
            p = d[1],
            b = o.a.useState(''),
            m = r()(b, 2),
            _ = m[0],
            C = m[1],
            T = o.a.useState(!1),
            S = r()(T, 2),
            I = S[0],
            x = S[1]
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
          var k,
            N,
            M = o.a.createElement(
              f.b,
              { color: 'text', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              B,
            ),
            P = o.a.createElement(A.a, { style: G.values }, o.a.createElement(v.a, X)),
            R = o.a.createElement(g.a, {
              actionLabel: L,
              footer: M,
              graphic: K,
              graphicDisplayMode: 'illustration',
              headline: O,
              isFullHeightOnMobile: !0,
              onAction: function () {
                p(!1)
              },
              subtext: P,
            }),
            F = o.a.useCallback(
              function (e, t) {
                C(t)
              },
              [C],
            ),
            D = o.a.createElement(
              A.a,
              null,
              o.a.createElement(f.b, { style: G.aliasSubtext }, j),
              a
                ? o.a.createElement(
                    A.a,
                    { style: G.aliasSelectContainer },
                    o.a.createElement(w.a, {
                      name: 'example',
                      onChange: F,
                      options:
                        ((k = a),
                        (N = []),
                        k.forEach(function (e) {
                          N.push({ containerStyle: G.optionContainer, label: Object(h.a)(e), value: e, decoration: q })
                        }),
                        N),
                      value: _,
                    }),
                  )
                : o.a.createElement(y.a, null),
              I ? o.a.createElement(E.a, { text: z, type: 'danger' }) : void 0,
            ),
            V = o.a.createElement(g.a, {
              actionLabel: U,
              footer: M,
              graphicDisplayMode: 'none',
              headline: H,
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
                      n({ defaultToast: { text: z, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: D,
            })
          return u ? R : V
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
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        h = a('KEM+'),
        b = a.n(h),
        m = (a('2G9S'), a('KOtZ'), a('7x/C'), a('hBvt'), a('jQ3i'), a('x4t0'), a('ERkP')),
        f = a.n(m),
        v = a('3XMw'),
        g = a.n(v),
        w = a('oQhu'),
        y = a('mjJ+'),
        E = a('eb3s'),
        _ = g.a.cfd2f35d,
        C = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(l()(e), 'state', { activeConfirmation: null }),
              b()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              b()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              b()(l()(e), '_handleCancelConfirm', function () {
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
                    : f.a.createElement(y.a, {
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
                  return f.a.createElement(E.a, {
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
                  return T(t, a, n, this._handleConfirm)
                },
              },
            ]),
            a
          )
        })(f.a.Component),
        T = Object(w.a)(function (e, t, a, n) {
          return e.reduce(function (e, r, i) {
            var o = r.Icon,
              c = r.behavioralEventContext,
              l = r.confirmation,
              s = r.disabled,
              d = r.excludeFromActionMenu,
              u = r.isEmphasized,
              p = r.link,
              h = r.onClick,
              b = r.subText,
              m = r.testID,
              f = r.text
            r.withCancelButton
            if (!d) {
              var v = h
                ? function () {
                    l
                      ? l.render
                        ? n({ callback: h, render: l.render })
                        : n({
                            callback: h,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (h(), a())
                  }
                : a
              e.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: o,
                isEmphasized: u,
                testID: m,
                subText: b,
                text: f,
                onClick: v,
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
        d = (a('jwue'), a('7x/C'), a('+oxZ'), a('3XMw')),
        u = a.n(d),
        p = a('/yvb'),
        h = a('fn9Y'),
        b = u.a.c0530da5,
        m = u.a.ifea3114
      var f = function (e) {
          return r.a.createElement(p.a, {
            accessibilityLabel: b,
            hoverLabel: { label: m },
            icon: r.a.createElement(h.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        v = 'share-button',
        g = 'share-by-tweet',
        w = a('m3Bd'),
        y = a.n(w),
        E = a('1YZw'),
        _ = a('CaKu'),
        C = a('y+lG'),
        T = a('SrIh'),
        S = a('Irs7'),
        I = a('uDfI'),
        x = a('zCf4'),
        A = a('jwTb'),
        k = a('SOvA'),
        L = a('I/9y'),
        O = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: A.a,
            text: u.a.fcc684a9,
            testID: g,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: k.a,
            text: u.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return _.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: L.a,
            text: u.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: h.a,
            text: u.a.if23a251,
          },
        },
        B = ['isAvailable', 'scribeAction']
      function N(e) {
        var t = Object(S.b)()
        return {
          getActionItem: (function (e, t) {
            var a = Object(I.c)(),
              n = Object(x.f)()
            return r.a.useMemo(
              function () {
                return function (r) {
                  var i = O[r.type],
                    o = i.isAvailable,
                    c = i.scribeAction,
                    l = y()(i, B)
                  if (!o()) return null
                  var d = s()({}, l)
                  function u() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      l = s()(s()({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      d = { text: i, url: o },
                      u = { analytics: t, dispatch: a, history: n, mergedScribeNamespace: l }
                    !(function (e, t, a) {
                      var n = function () {
                        return a.analytics.scribe(a.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return n(), void a.history.push(s()(s()({}, P(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            _.a.setString(Object(C.a)(t.url)),
                            n(),
                            void a.dispatch(Object(E.b)({ text: M.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            n(),
                            void a.history.push(
                              s()(
                                s()({ pathname: '/compose/tweet' }, P(t)),
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
                          Object(T.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, d, u)
                  }
                  return r.label && (d.text = r.label), s()(s()({}, d), {}, { onClick: u })
                }
              },
              [t, a, n, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var M = { copyLinkSuccessMessage: u.a.f88553c8, shareTextPrefixFormatter: u.a.gb5851d7 }
      function P(e) {
        var t = e.url,
          a = e.text
        return { query: { text: a ? M.shareTextPrefixFormatter({ prefix: a, url: t }) : t } }
      }
      var R = a('mN6z')
      var F = a('mjJ+'),
        D = a('rHpw'),
        H = { element: 'share' }
      function j(e) {
        var t = (function (e) {
            var t = r.a.useRef({ previous: void 0 })
            function a(e) {
              return (t.current.previous = e), e
            }
            var n = t.current.previous
            return n && (e === n || Object(R.a)(e, n)) ? n : a(e)
          })(s()(s()({}, H), e.scribeNamespace)),
          a = N(s()(s()({}, e), {}, { scribeNamespace: t })),
          n = a.analytics,
          i = a.getActionItem
        var o = e.ButtonComponent || U
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
              r.a.createElement(F.a, { isFixed: e.isFixed, items: a, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function U(e) {
        return r.a.createElement(f, c()({}, e, { style: z.button, testID: v }))
      }
      var z = D.a.create(function (e) {
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
        d = a.n(s),
        u = a('yoO3'),
        p = a('7JQg'),
        h = a('VS6U'),
        b = a('MWbm'),
        m = a('t62R'),
        f = a('h0NW'),
        v = a('/yvb'),
        g = a('rHpw'),
        w = a('yiKp'),
        y = a.n(w),
        E = a('Lsrn'),
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
                style: [E.a.root, e.style],
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
      var T = C,
        S = a('sUoZ'),
        I = a('fBGZ'),
        x = d.a.b721eb37,
        A = d.a.b5711f09,
        k = d.a.df4bead0,
        L = d.a.jdb52860,
        O = d.a.b468ea24,
        B = d.a.b25fcbe4,
        N = d.a.f6d0427f,
        M = d.a.c8c2c891,
        P = d.a.g98ea6c0,
        R = d.a.ff3e0be2,
        F = d.a.i859a9d3,
        D = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        H = { page: 'birdwatch', section: 'about' },
        j = function (e) {
          var t = e.history,
            a = r.a.useContext(i.a).featureSwitches,
            n = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(b.a, { style: [U.header, { backgroundImage: 'url('.concat(o, ')') }] }),
              r.a.createElement(
                b.a,
                { style: U.content },
                r.a.createElement(m.b, { size: 'title4', style: U.textSection, weight: 'heavy' }, A),
                r.a.createElement(m.b, { color: 'gray700', style: U.textSection }, k),
                r.a.createElement(f.a, z),
              ),
              r.a.createElement(b.a, { style: U.learnMore }, r.a.createElement(m.b, { link: D }, F)),
              !a.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                r.a.createElement(
                  b.a,
                  { style: U.buttonContainer },
                  r.a.createElement(
                    v.a,
                    { accessibilityLabel: R, link: '/i/flow/join-birdwatch', style: U.button, type: 'brandFilled' },
                    R,
                  ),
                ),
            )
          return r.a.createElement(
            p.c,
            { namespace: H },
            r.a.createElement(
              u.a,
              null,
              r.a.createElement(h.a, {
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
        U = g.a.create(function (e) {
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
        z = {
          accessibilityLabel: x,
          containerStyle: U.infoItemContainer,
          items: [
            { label: L, decoration: r.a.createElement(T, { style: U.icon }), description: O },
            { label: B, decoration: r.a.createElement(S.a, { style: U.icon }), description: N },
            { label: M, decoration: r.a.createElement(I.a, { style: U.icon }), description: P },
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
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        h = a('KEM+'),
        b = a.n(h),
        m = (a('2G9S'), a('ERkP')),
        f = a.n(m),
        v = a('MvLc'),
        g = a('rxPX'),
        w = a('0KEI'),
        y = Object(g.a)()
          .propsFromState(function () {
            return { userAlias: v.y }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: v.l,
            }
          })
          .withAnalytics({ page: 'birdwatch', component: 'birdwatch_tab_bar' }),
        E = a('3XMw'),
        _ = a.n(E),
        C = a('gASw'),
        T = a('v6aA'),
        S = a('C6f5'),
        I = a('2qZs'),
        x = a('PU7B'),
        A = a('YI7k'),
        k = a('boUI'),
        L = a('6ZHn'),
        O = a('89Im'),
        B = a('yiKp'),
        N = a.n(B),
        M = a('Lsrn'),
        P = a('k/Ka'),
        R = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(P.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M11.188 14.813c.217.217.506.337.812.337.307 0 .596-.12.813-.337l5-5c.217-.218.337-.507.337-.815 0-.307-.12-.595-.338-.812-.217-.216-.506-.336-.814-.336h-.003c-.307 0-.594.12-.81.337l-3.035 3.037V2c0-.634-.517-1.15-1.15-1.15-.634 0-1.15.516-1.15 1.15v9.225L7.813 8.188C7.596 7.97 7.307 7.85 7 7.85c-.308 0-.596.12-.813.338-.218.22-.337.51-.337.817 0 .306.12.593.337.808l5 5z',
              }),
              f.a.createElement('path', {
                d: 'M21.25 12.85c-.634 0-1.15.517-1.15 1.15v5.652c0 .216-.176.392-.392.392H4.292c-.216 0-.392-.176-.392-.392V14c0-.634-.516-1.15-1.15-1.15S1.6 13.366 1.6 14v5.652c0 1.484 1.208 2.692 2.692 2.692h15.416c1.484 0 2.692-1.208 2.692-2.692V14c0-.634-.516-1.15-1.15-1.15z',
              }),
            ),
          )
        }
      R.metadata = { width: 24, height: 24 }
      var F = R,
        D = a('6s7X'),
        H = a('Nh1N'),
        j = _.a.d5b2da0a,
        U = _.a.b5711f09,
        z = _.a.ha8209bb,
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
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(l()(e), '_isOwnProfilePageActive', function (t, a) {
                var n = e.props.userAlias
                return !!n && a.pathname === ''.concat(G, '/u/').concat(n)
              }),
              b()(l()(e), '_handleTabClickFactory', function (t) {
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
                  return f.a.createElement(
                    S.b,
                    { layout: a, primaryLabel: j, wideMode: r },
                    f.a.createElement(C.a, {
                      accessibilityLabel: U,
                      isActive: X,
                      label: U,
                      layout: a,
                      onClick: this._handleTabClickFactory('home'),
                      path: G,
                      renderIcon: Object(S.c)(I.a, I.a, a),
                      withLabel: o,
                    }),
                    f.a.createElement(C.a, {
                      accessibilityLabel: z,
                      isActive: q,
                      label: z,
                      layout: a,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: G,
                      renderIcon: Object(S.c)(x.a, A.a, a),
                      withLabel: o,
                    }),
                    c.isTrue('responsive_web_birdwatch_note_writing_enabled')
                      ? f.a.createElement(C.a, {
                          accessibilityLabel: W,
                          isActive: this._isOwnProfilePageActive,
                          label: W,
                          layout: a,
                          onClick: this._handleTabClickFactory('user_notes'),
                          path: ''.concat(G, '/u/me'),
                          renderIcon: Object(S.c)(k.a, L.a, a),
                          withLabel: o,
                        })
                      : null,
                    f.a.createElement(C.a, {
                      accessibilityLabel: V,
                      label: V,
                      layout: a,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: ''.concat(G, '/download-data'),
                      renderIcon: Object(S.c)(O.a, F, a),
                      withLabel: o,
                    }),
                    f.a.createElement(C.a, {
                      accessibilityLabel: K,
                      label: K,
                      layout: a,
                      onClick: this._handleTabClickFactory('about'),
                      path: ''.concat(G, '/about'),
                      renderIcon: Object(S.c)(D.a, H.a, a),
                      withLabel: o,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      b()(Q, 'contextType', T.a)
      var Z = y(Q)
      t.a = Z
    },
    MvLc: function (e, t, a) {
      'use strict'
      a.d(t, 'r', function () {
        return M
      }),
        a.d(t, 'x', function () {
          return F
        }),
        a.d(t, 'o', function () {
          return D
        }),
        a.d(t, 'u', function () {
          return H
        }),
        a.d(t, 's', function () {
          return j
        }),
        a.d(t, 'y', function () {
          return z
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
        d = a('kGix'),
        u = a('Ssj5'),
        p = a('oEOe'),
        h = a('3A2y'),
        b = a('YeIG'),
        m = ['rating'],
        f = 'birdwatchNotes',
        v = 'rweb/'.concat(f),
        g = Object(p.a)(v, 'DELETE_NOTE'),
        w = Object(p.a)(v, 'CREATE_RATING'),
        y = Object(p.a)(v, 'DELETE_RATING'),
        E = Object(p.a)(v, 'SELECT_ALIAS'),
        _ = Object(p.a)(v, 'CREATE_APPEAL'),
        C = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_DATA_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_DATA_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_DATA_FAILURE',
        }),
        T = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE',
        }),
        I = Object.freeze({
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
        k = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE',
        }),
        L = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_NOTE_FAILURE',
        }),
        O = 'rweb/birdwatchNotes/SAVE_FORM_DRAFT',
        B = { drafts: {}, notes: {}, tweetNotes: {}, contributor: {}, publicData: {} }
      u.a.register(
        o()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case I.SUCCESS:
              var a,
                n = null === (a = t.payload) || void 0 === a ? void 0 : a.result
              if (n) {
                var i,
                  c,
                  s =
                    null === (i = t.payload) || void 0 === i || null === (c = i.entities) || void 0 === c
                      ? void 0
                      : c.birdwatchNotes[n],
                  u = s.tweet.rest_id
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
                        u,
                        l()(l()({}, e.tweetNotes && e.tweetNotes[u]), {}, { ownNoteId: n, fetchStatus: d.a.LOADED }),
                      ),
                    ),
                  },
                )
              }
              return e
            case g.SUCCESS:
              var p,
                f = null === (p = t.meta) || void 0 === p ? void 0 : p.note_id
              return f ? l()(l()({}, e), {}, { notes: Object(h.a)(e.notes, f) }) : e
            case w.SUCCESS:
              var v,
                _ = null === (v = t.meta) || void 0 === v ? void 0 : v.note_id,
                N = t.payload
              return _
                ? l()(
                    l()({}, e),
                    {},
                    { notes: l()(l()({}, e.notes), {}, o()({}, _, l()(l()({}, e.notes[_]), {}, { rating: N }))) },
                  )
                : e
            case y.SUCCESS:
              var M,
                P = null === (M = t.meta) || void 0 === M ? void 0 : M.note_id
              if (P) {
                var R = e.notes[P],
                  F = (R.rating, r()(R, m))
                return l()(l()({}, e), {}, { notes: l()(l()({}, e.notes), {}, o()({}, P, l()({}, F))) })
              }
              return e
            case x.REQUEST:
              var D,
                H = null === (D = t.meta) || void 0 === D ? void 0 : D.tweet_id
              return H
                ? l()(
                    l()({}, e),
                    {},
                    {
                      tweetNotes: l()(
                        l()({}, e.tweetNotes),
                        {},
                        o()({}, H, l()(l()({}, e.tweetNotes && e.tweetNotes[H]), {}, { fetchStatus: d.a.LOADING })),
                      ),
                    },
                  )
                : e
            case x.FAILURE:
              var j,
                U = null === (j = t.meta) || void 0 === j ? void 0 : j.tweet_id
              return U
                ? l()(
                    l()({}, e),
                    {},
                    {
                      tweetNotes: l()(
                        l()({}, e.tweetNotes),
                        {},
                        o()({}, U, l()(l()({}, e.tweetNotes[U]), {}, { fetchStatus: d.a.FAILED })),
                      ),
                    },
                  )
                : e
            case x.SUCCESS:
              var z,
                W,
                V = null === (z = t.payload) || void 0 === z ? void 0 : z.result,
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
                  (Y.fetchStatus = d.a.LOADED),
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
                    { tweetNotes: l()(l()({}, e.tweetNotes), {}, o()({}, K, { fetchStatus: d.a.LOADED })) },
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
                        o()({}, ee, l()(l()({}, e.contributor[ee]), {}, { fetchStatus: d.a.LOADING })),
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
                        o()({}, ae, l()(l()({}, e.contributor[ae]), {}, { fetchStatus: d.a.FAILED })),
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
                  de = (null == se ? void 0 : se.notes) || [],
                  ue = de.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  pe = de.map(function (e) {
                    return e.rest_id
                  }),
                  he = {
                    helpful: null == se ? void 0 : se.ratings_received_helpful_count,
                    notHelpful: null == se ? void 0 : se.ratings_received_not_helpful_count,
                    somewhatHelpful: null == se ? void 0 : se.ratings_received_somewhat_helpful_count,
                  },
                  be = (null == se ? void 0 : se.badges) || []
                return l()(
                  l()({}, e),
                  {},
                  {
                    notes: l()(l()({}, e.notes), ue),
                    contributor: l()(
                      l()({}, e.contributor),
                      {},
                      o()({}, oe, { badges: be, notes: pe, ratings: he, fetchStatus: d.a.LOADED }),
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
                        o()({}, ie, l()(l()({}, e.contributor[ie]), {}, { fetchStatus: d.a.FAILED })),
                      ),
                    },
                  )
                : e
            case T.SUCCESS:
              var me = t.payload
              return l()(l()({}, e), {}, { contributor: l()(l()({}, e.contributor), {}, { ownAlias: me }) })
            case k.SUCCESS:
              var fe = t.payload
              return l()(
                l()({}, e),
                {},
                {
                  contributor: l()(
                    l()({}, e.contributor),
                    {},
                    { showAliasSelfSelect: (null == fe ? void 0 : fe.can_select) && !(null != fe && fe.has_selected) },
                  ),
                },
              )
            case S.SUCCESS:
              var ve = t.payload
              return l()(
                l()({}, e),
                {},
                { contributor: l()(l()({}, e.contributor), {}, { aliasSelfSelectOptions: ve }) },
              )
            case L.SUCCESS:
              var ge,
                we = t.payload,
                ye = null == we ? void 0 : we.result
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
                              null == we || null === (ge = we.entities) || void 0 === ge
                                ? void 0
                                : ge.birdwatchNotes[ye],
                            ),
                            {},
                            { fetchStatus: d.a.LOADED },
                          ),
                        ),
                      ),
                    },
                  )
                : e
            case L.REQUEST:
              var Ee,
                _e = null === (Ee = t.meta) || void 0 === Ee ? void 0 : Ee.note_id
              return l()(
                l()({}, e),
                {},
                {
                  notes: l()(
                    l()({}, e.notes),
                    {},
                    o()({}, _e, l()(l()({}, e.notes && e.notes[_e]), {}, { fetchStatus: d.a.LOADING })),
                  ),
                },
              )
            case L.FAILURE:
              var Ce,
                Te = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.note_id
              return l()(
                l()({}, e),
                {},
                {
                  notes: l()(
                    l()({}, e.notes),
                    {},
                    o()({}, Te, l()(l()({}, e.notes[Te]), {}, { fetchStatus: d.a.FAILED })),
                  ),
                },
              )
            case C.SUCCESS:
              var Se = t.payload
              return Se ? l()(l()({}, e), {}, { publicData: Se }) : e
            case E.SUCCESS:
              var Ie,
                xe = null === (Ie = t.meta) || void 0 === Ie ? void 0 : Ie.alias
              return l()(l()({}, e), {}, { contributor: l()(l()({}, e.contributor), {}, { ownAlias: xe }) })
            case O:
              var Ae = t.payload
              if (Object(b.a)(Ae)) return e
              var ke = Ae.updates,
                Le = Ae.tweetId
              return l()(l()({}, e), {}, { drafts: l()(l()({}, e.drafts), {}, o()({}, Le, ke)) })
            default:
              return e
          }
        }),
      )
      var N = [],
        M = function (e, t) {
          return e.birdwatchNotes.notes[t]
        },
        P = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ids
        },
        R = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ownNoteId
        },
        F = function (e, t) {
          if (!t) return null
          var a = R(e, t)
          return a ? M(e, a) : null
        },
        D = function (e, t) {
          var a, n
          if (t)
            return null === (a = e.birdwatchNotes) || void 0 === a || null === (n = a.contributor[t]) || void 0 === n
              ? void 0
              : n.badges
        },
        H = function (e) {
          return e.birdwatchNotes.publicData
        },
        j = function (e, t) {
          var a = t ? P(e, t) : void 0
          if (a) {
            var n = R(e, t)
            return (
              n &&
                (a = a.filter(function (e) {
                  return e !== n
                })),
              a
                .map(function (t) {
                  return M(e, t)
                })
                .filter(Boolean)
            )
          }
          return N
        },
        U = function (e, t) {
          var a = e.birdwatchNotes.contributor[t]
          return a ? a.notes : void 0
        },
        z = function (e) {
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
          return a ? a.fetchStatus : d.a.NONE
        },
        q = function (e, t) {
          var a = e.birdwatchNotes.notes[t]
          return a ? a.fetchStatus : d.a.NONE
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
            var r = !!P(a(), e),
              i = G(a(), e) === d.a.LOADING
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
            var r = !!e && !!U(a(), e),
              i =
                (function (e, t) {
                  var a = e.birdwatchNotes.contributor[t]
                  return a ? a.fetchStatus : d.a.NONE
                })(a(), e) === d.a.LOADING
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
            var r = !!M(a(), e),
              i = q(a(), e) === d.a.LOADING
            return r || i
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, a, n) {
                      var r = n.api
                      return Object(p.b)(t, { request: r.Birdwatch.fetchOneNote, params: { note_id: e } })({
                        actionTypes: L,
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
            return !!z(t())
              ? Promise.resolve()
              : e(function (e, t, a) {
                  var n = a.api
                  return Object(p.b)(e, { request: n.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: T,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        $ = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(p.b)(e, { request: n.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: k,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        ee = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(p.b)(e, { request: n.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: S,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        te = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(p.b)(t, { request: r.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: E,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        ae = function (e) {
          return { meta: { note_id: e }, type: g.SUCCESS }
        },
        ne = function (e, t) {
          return function (a, n, r) {
            var i = r.api
            return Object(p.b)(a, { request: i.Birdwatch.createNote, params: { tweet_id: e, data: t } })({
              actionTypes: I,
              context: 'CREATE_NOTE',
            })
          }
        },
        re = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: O, payload: e }
              })(e),
            )
          }
        },
        ie = function (e, t) {
          return function (a, n, r) {
            var i = r.api
            return Object(p.b)(a, { request: i.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: w,
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
        d = a('0KEI'),
        u = function (e, t) {
          return t.match.params.noteId
        },
        p = function (e, t) {
          return l.r(e, u(0, t))
        },
        h = function (e, t) {
          return l.t(e, u(0, t))
        },
        b = Object(s.a)()
          .propsFromState(function () {
            return { noteData: p, noteId: u, fetchStatus: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: l.h,
            }
          }),
        m = a('kGix'),
        f = a('jHSc'),
        v = a('3XMw'),
        g = a.n(v),
        w = a('0zXz'),
        y = a('aITJ'),
        E = a('MWbm'),
        _ = a('FIs5'),
        C = a('htQn'),
        T = a('rHpw'),
        S = a('Qwev'),
        I = g.a.c87f3cf8,
        x = g.a.i859a9d3,
        A = g.a.efd14e79,
        k = g.a.a5b19492,
        L = o.a.createElement(_.a, { buttonLink: '/i/birdwatch/about', buttonText: x, header: k }),
        O = w.a,
        B = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchOneNoteIfNeeded,
            n = e.fetchStatus,
            i = e.history,
            l = e.noteData,
            s = e.noteId,
            d = o.a.useState(l),
            u = r()(d, 2),
            p = u[0],
            h = u[1]
          o.a.useEffect(
            function () {
              s && a(s).catch(t())
            },
            [t, a, s],
          ),
            o.a.useEffect(
              function () {
                h(l)
              },
              [l],
            )
          var b = o.a.createElement(
            C.a,
            null,
            p && p.data_v1
              ? o.a.createElement(
                  E.a,
                  { style: N.contentWrapper },
                  o.a.createElement(c.a, {
                    handleDelete: function (e) {
                      h(null)
                    },
                    note: p,
                    showPivot: !0,
                    showTweet: !0,
                    withBorder: !0,
                  }),
                )
              : n === m.a.LOADING
              ? M
              : L,
          )
          return o.a.createElement(
            f.b,
            { history: i, renderHeader: y.b.isTwitterApp() ? O : void 0, title: I },
            o.a.createElement(E.a, { style: N.contentWrapper }, b),
          )
        },
        N = T.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        M = o.a.createElement(S.a, { accessibilityLabel: A, size: 'large', style: N.spinner }),
        P = b(B)
      t.default = P
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
    TZwD: function (e, t, a) {
      'use strict'
      var n = a('EbOo'),
        r = a('u0B7'),
        i = a('24HD')
      t.a = function (e) {
        var t = e.addToast,
          a = e.behavioralEventEntityToken,
          o = e.block,
          c = e.createLocalApiErrorHandler,
          l = e.promotedContent,
          s = e.scribeAction,
          d = e.unblock,
          u = e.user,
          p = function () {
            d(u.id_str, { promotedContent: l }).catch(c(r.a)), s({ element: 'unblock' })
          },
          h = {
            user: u,
            source: i.k.TWEET,
            blockAction: function () {
              o(u.id_str, { promotedContent: l }).then(function () {
                t({
                  action: { label: i.l, onAction: p, behavioralEventViewType: 'unblock' },
                  behavioralEventEntityToken: a,
                  text: i.d,
                })
              }, c(n.a)),
                s({ element: 'block' })
            },
            unblockAction: p,
          }
        return Object(i.g)(h)
      }
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
        d = a.n(s),
        u = a('es0u'),
        p = a('hqKg'),
        h = a('MDbM'),
        b = a('rxPX'),
        m = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        f = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        v = Object(p.createSelector)(m, f, function (e, t) {
          return t !== h.a.LOADED || (!!e && !!e.tabs)
        }),
        g = Object(b.a)()
          .propsFromState(function () {
            return { hasTabNavigation: v, pageConfiguration: m, initialFetchStatus: f }
          })
          .withAnalytics(),
        w = a('QIgh'),
        y = a('s14A'),
        E = a('dwig'),
        _ = (a('uFXj'), a('7JQg')),
        C = a('rHpw'),
        T = a('GKOv'),
        S = a('Rp9C'),
        I = a('Irs7')
      function x(e, t) {
        var a = Object(I.b)(),
          n = t || {},
          r = n.component,
          i = n.element,
          o = d.a.useMemo(
            function () {
              return { items: [S.a.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          d.a.useEffect(
            function () {
              a.scribe({ component: r, element: i, action: 'impression', data: o })
            },
            [o, r, i, a],
          ),
          { namespace: { component: r, element: i }, data: o }
        )
      }
      var A = a('MWbm')
      function k(e) {
        var t = e.header,
          a = t.clientEventInfo,
          n = t.displayType,
          r = t.facepile,
          i = t.landingContext,
          o = t.topicId,
          c = e.onHeaderVisible,
          l = x(o, a),
          s = l.data,
          u = l.namespace
        return d.a.createElement(
          A.a,
          { style: L.root },
          d.a.createElement(
            _.c,
            { data: s, namespace: u },
            d.a.createElement(T.a, {
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
      var L = C.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        O = a('3XMw'),
        B = a.n(O),
        N = (a('1t7P'), a('jQ/y'), a('ho0z'), a('zI2C')),
        M = a('v6aA'),
        P = a('Zejx'),
        R = function (e, t) {
          var a = t.navBar.topicId ? t.navBar.topicId : ''
          return P.a.select(e, a)
        },
        F = Object(b.a)().propsFromState(function () {
          return { topic: R }
        }),
        D = a('PbbS'),
        H = a('LWCC'),
        j = a('IcAo'),
        U = a('rJoH'),
        z = a('I6Uj'),
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
        X = F(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            a = e.isHeaderOffscreen,
            n = e.navBar.clientEventInfo,
            r = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            c = e.withOpenGraphMeta,
            l = d.a.useContext(M.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            s = x(t, n),
            u = s.data,
            p = s.namespace,
            h = Object(j.a)({}, r, p)
          return i
            ? d.a.createElement(
                _.c,
                { data: u, namespace: h },
                d.a.createElement(
                  d.a.Fragment,
                  null,
                  c
                    ? d.a.createElement(U.a, {
                        canonical: V(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? d.a.createElement(N.a, { deepLink: K(t) }) : null,
                  d.a.createElement(
                    A.a,
                    { style: q.rightControl },
                    d.a.createElement(
                      A.a,
                      { style: q.followButtonContainer },
                      d.a.createElement(
                        W.b,
                        { animateMount: !0, show: a, type: 'fade' },
                        d.a.createElement(H.a, { size: 'medium', textMode: D.a.FollowTopic, topic: i }),
                      ),
                    ),
                    l ? d.a.createElement(z.a, { copyLinkShareLabel: G, scribeNamespace: h, url: V(t) }) : null,
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
        de = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        ue = function (e, t) {
          var a = t.selectedTabId,
            n = de(e, t)
          return (
            n &&
            n.tabs &&
            n.tabs.tabs.find(function (e) {
              return e.id === a
            })
          )
        },
        pe = Object(b.a)()
          .propsFromState(function () {
            return { pageConfiguration: de, selectedTab: ue }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(se.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
            }
          })
          .withAnalytics(),
        he = a('doI8'),
        be = a('oQhu'),
        me = a('fTQJ'),
        fe = ['entityToken'],
        ve = pe(
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
                    return o()(i, fe)
                  }
                  return a.contextualScribeNamespace
                }),
                ce()(
                  te()(e),
                  '_getModule',
                  Object(be.a)(function (e, t, a, n) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(le.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: n })
                      if (null != e && e.graphQLTimelineId) return Object(he.a)(e.graphQLTimelineId)
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
                      u = a.selectedTab,
                      p = a.timelinePrefix,
                      h = a.title,
                      b = a.withoutHeadroom,
                      m = {
                        token: null == i || null === (e = i.scribeConfig) || void 0 === e ? void 0 : e.entityToken,
                      },
                      f = this._getModule(
                        u,
                        null == i || null === (t = i.tabs) || void 0 === t ? void 0 : t.initialTabId,
                        r,
                        p,
                      ),
                      v = this._getRefreshIntervalSecForCurrentTab(),
                      g = v ? 1e3 * v : void 0
                    return d.a.createElement(
                      _.c,
                      { namespace: this._getTimelineNamespace() },
                      d.a.createElement(me.a, {
                        behavioralEventContext: m,
                        entryConfiguration: n,
                        module: f,
                        pollingIntervalMsOverride: g,
                        prerollDisplayLocation: o,
                        refreshControl: c,
                        renderEmptyState: l,
                        renderUnavailable: s,
                        title: h,
                        withoutHeadroom: b,
                      }),
                    )
                  },
                },
              ]),
              a
            )
          })(d.a.Component),
        ),
        ge = (a('z84I'), a('+Kfv')),
        we = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        ye = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        Ee = function (e, t) {
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
        _e = Object(b.a)()
          .propsFromState(function () {
            return { initialFetchStatus: we, pageConfiguration: ye, selectedTab: Ee }
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
        Te = a('k/OQ'),
        Se = a('G8HL'),
        Ie = ['entityToken'],
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
                    u = o.tabs.map(function (t, r) {
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
                  return d.a.createElement(
                    ge.a,
                    { behavioralEventContext: xe },
                    d.a.createElement(Te.a, { links: u, visibleItemIndex: c }),
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
                  return this.props.initialFetchStatus === h.a.LOADED ? this._render() : null
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
                    return o()(e, Ie)
                  }
                },
              },
            ]),
            a
          )
        })(d.a.Component),
        ke = _e(Object(Se.a)(Ae)),
        Le = a('VS6U'),
        Oe = a('5Y9N'),
        Be = a('FIs5'),
        Ne = a('cHvH'),
        Me = a('mw9i'),
        Pe = ['entityToken'],
        Re = ['entityToken'],
        Fe = B.a.e9f1fbcb,
        De = d.a.createElement(u.a, null),
        He = Object(be.a)(function (e, t) {
          return l()(l()({}, t), Object(Oe.a)({ isWide: e }))
        }),
        je = function (e) {
          var t = e.TabBar,
            a = e.backLocation,
            n = e.behavioralEventViewType,
            i = e.documentTitle,
            c = e.entryConfiguration,
            l = e.fab,
            s = e.getTabLink,
            u = e.hasTabNavigation,
            p = e.history,
            b = e.initialFetchStatus,
            m = e.initialPageNamespace,
            f = e.logoButton,
            v = e.module,
            g = e.onBackClick,
            w = e.pageConfiguration,
            T = e.prerollDisplayLocation,
            S = e.renderEmptyState,
            I = e.renderUnavailable,
            x = e.rightControl,
            A = e.searchBoxRef,
            L = e.selectedTabId,
            O = e.sidebarContent,
            B = e.timelinePrefix,
            N = e.title,
            M = e.withAppLinks,
            P = e.withBottomLoginSignupBar,
            R = e.withDeferredView,
            F = e.withOpenGraphMeta,
            D = e.withSearchBox,
            H = e.withTweetButton,
            U = d.a.useState(!0),
            z = r()(U, 2),
            W = z[0],
            V = z[1],
            K = w || {},
            G = K.header,
            q = K.navBar,
            Z = K.subtitle,
            J = K.title,
            Y = b === h.a.LOADED ? J || N : '',
            $ = (function (e, t, a) {
              var n = (null == t ? void 0 : t.scribeConfig) || {},
                r = (n.entityToken, o()(n, Pe)),
                i = null == t ? void 0 : t.tabs,
                c = e || (null == i ? void 0 : i.initialTabId),
                l =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === c
                      }),
                s = (null == l ? void 0 : l.scribeConfig) || {},
                d = (s.entityToken, o()(s, Re))
              return Object(j.a)({}, a, r, d)
            })(L, w, m),
            ee = G ? d.a.createElement(k, { header: G, onHeaderVisible: V }) : null,
            te = q
              ? d.a.createElement(X, {
                  isHeaderOffscreen: !W,
                  navBar: q,
                  pageNamespace: $,
                  withAppLinks: M,
                  withOpenGraphMeta: F,
                })
              : null,
            ae = R ? y.a : d.a.Fragment,
            ne = d.a.createElement(Ne.a, null, function (e) {
              var t = e.windowWidth >= C.a.theme.breakpoints.medium
              return d.a.createElement(
                d.a.Fragment,
                null,
                ee,
                d.a.createElement(
                  ae,
                  null,
                  d.a.createElement(ve, {
                    entryConfiguration: He(t, c),
                    initialModule: v,
                    prerollDisplayLocation: T,
                    renderEmptyState: S,
                    renderUnavailable: I,
                    selectedTabId: L,
                    timelinePrefix: B,
                    title: N,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            re = l ? d.a.createElement(E.a, { component: Me.a, fab: l }, ne) : ne,
            ie = s && u ? d.a.createElement(ke, { getTabLink: s, module: v, selectedTabId: L }) : void 0
          return d.a.createElement(
            _.c,
            { namespace: $ },
            d.a.createElement(
              Q.a,
              { behavioralEventViewType: n },
              d.a.createElement(Le.a, {
                TabBar: t,
                backLocation: a,
                documentTitle: i,
                history: p,
                logoButton: f,
                onBackClick: g,
                primaryContent: re,
                rightControl: te || x,
                searchBoxRef: A,
                secondaryBar: ie,
                sidebarContent: O,
                subtitle: Z,
                title: ee && W ? N : Y,
                withBottomLoginSignupBar: P,
                withSearchBox: D,
                withTweetButton: H,
              }),
            ),
          )
        }
      je.defaultProps = {
        entryConfiguration: w.b,
        renderEmptyState: function () {
          return d.a.createElement(Be.a, { header: Fe })
        },
        sidebarContent: De,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var Ue = g(je)
      t.a = Ue
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
          return ke
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        c = a('yiKp'),
        l = a.n(c),
        s = a('ddV6'),
        d = a.n(s),
        u =
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
        p = a.n(u),
        h = a('v6aA'),
        b = a('9StO'),
        m = (a('WNMA'), a('MvLc')),
        f = a('1YZw'),
        v = a('XOJV'),
        g = a('rxPX'),
        w = a('0KEI'),
        y = function (e, t) {
          return t.match.params.tweetId
        },
        E = function (e, t) {
          return m.x(e, y(0, t))
        },
        _ = function (e, t) {
          return m.q(e, y(0, t))
        },
        C = function (e, t) {
          return m.v(e)
        },
        T = Object(g.a)()
          .propsFromState(function () {
            return { draftData: _, ownNoteData: E, tweetId: y, showAliasSelfSelect: C, userAlias: m.y }
          })
          .propsFromActions(function () {
            return {
              addToast: f.b,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: m.b,
              fetchNotes: m.k,
              fetchShowAliasSelfSelect: m.j,
              fetchTweet: v.a.fetchOneIfNeeded,
              fetchUserAlias: m.l,
              saveFormData: m.z,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form' }),
        S = a('W6+M'),
        I = a('jHSc'),
        x = a('3XMw'),
        A = a.n(x),
        k = a('5FtR'),
        L = a('SrIh'),
        O = a('0zXz'),
        B = a('Rp9C'),
        N = a('xZXe'),
        M = a('aITJ'),
        P = a('MWbm'),
        R = a('t62R'),
        F = a('XiMS'),
        D = a('fyvP'),
        H = a('p+r5'),
        j = a('4zmP'),
        U = a('/yvb'),
        z = a('feu+'),
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
        de = A.a.df6c8291,
        ue = A.a.h0e35524,
        pe = ['believable', 'harmful', 'validation'],
        he = ['classification', 'summary', 'trustworthy_sources'],
        be = ['misleading_tags'].concat(pe),
        me = ['not_misleading_tags'],
        fe = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ve = ['misleading_tags', 'not_misleading_tags'],
        ge = A.a.b47b5a16,
        we = A.a.i0e66c5a,
        ye = A.a.j8e3e3be,
        Ee = A.a.f1e851ff,
        _e = A.a.ff5dcac8,
        Ce = {
          classification: we,
          misleading_tags: ye,
          believable: we,
          harmful: we,
          validation: we,
          summary: Ee,
          not_misleading_tags: ye,
          trustworthy_sources: we,
        },
        Te = A.a.abdd8d09,
        Se = { explanation: A.a.c097608d, source: A.a.g9cffe15 },
        Ie = { explanation: A.a.ba25898c, source: A.a.e764d704 },
        xe = { explanation: A.a.gb67e44c, source: A.a.d6b758a1 },
        Ae = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        ke = function (e) {
          var t = p.a.useContext(h.a).featureSwitches,
            a = e.addToast,
            n = e.analytics,
            i = e.createLocalApiErrorHandler,
            c = e.createNote,
            s = e.draftData,
            u = e.fetchNotes,
            m = e.fetchShowAliasSelfSelect,
            f = e.fetchTweet,
            v = e.fetchUserAlias,
            g = e.history,
            w = e.ownNoteData,
            y = e.saveFormData,
            E = e.showAliasSelfSelect,
            _ = e.tweetId,
            C = e.userAlias,
            T = function (e) {
              return void 0 === e ? we : ''
            },
            x = function (e) {
              return q()(e, Ae).weightedLength
            },
            A = function (e) {
              if (!e) return Ee
              var t = x(e.trim())
              return t <= 0 ? Ee : t > 280 ? _e : ''
            },
            W = p.a.useState(s || {}),
            V = d()(W, 2),
            G = V[0],
            ke = V[1],
            Oe = p.a.useState(
              (function () {
                var e = Ce
                return (
                  fe.forEach(function (t) {
                    e[t] = T(G[t])
                  }),
                  ve.forEach(function (t) {
                    var a
                    e[t] = (a = G[t]) && a.length > 0 ? '' : ye
                  }),
                  (e.summary = A(G.summary)),
                  e
                )
              })(),
            ),
            Be = d()(Oe, 2),
            Ne = Be[0],
            Me = Be[1],
            Pe = p.a.useState(!1),
            Re = d()(Pe, 2),
            Fe = Re[0],
            De = Re[1],
            He = p.a.useState(!1),
            je = d()(He, 2),
            Ue = je[0],
            ze = je[1],
            We = p.a.useState(null),
            Ve = d()(We, 2),
            Ke = Ve[0],
            Ge = Ve[1],
            qe = p.a.useState(E),
            Xe = d()(qe, 2),
            Qe = Xe[0],
            Ze = Xe[1],
            Je = '/i/birdwatch/'.concat(_, '/contribute_complete')
          p.a.useEffect(
            function () {
              _ && (f(_).catch(i()), u(_).catch(i()))
            },
            [i, u, f, _],
          ),
            p.a.useEffect(
              function () {
                v().catch(i())
              },
              [i, v],
            ),
            p.a.useEffect(
              function () {
                m().catch(i())
              },
              [i, m],
            ),
            p.a.useEffect(
              function () {
                Ze(E)
              },
              [E],
            )
          var Ye,
            $e = function (e) {
              var t = B.a.forTweet(_)
              n.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            et = function (e) {
              return function (t, a) {
                $e(e),
                  ke(function (t) {
                    var n = a
                    'trustworthy_sources' === e && ('true' === a ? (n = !0) : 'false' === a && (n = !1))
                    var r = l()(l()({}, t), {}, o()({}, e, n))
                    return y({ updates: r, tweetId: _ }), r
                  }),
                  Me(function (t) {
                    return l()(l()({}, t), {}, o()({}, e, T(a)))
                  })
              }
            },
            tt = function (e) {
              return function (t) {
                return function () {
                  ke(function (a) {
                    if (!a[e]) {
                      Me(function (t) {
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
                      Me(function (t) {
                        return c.length > 0 ? l()(l()({}, t), {}, o()({}, e, '')) : l()(l()({}, t), {}, o()({}, e, ye))
                      })
                      var s = l()(l()({}, a), {}, o()({}, e, c))
                      return y({ updates: s, tweetId: _ }), s
                    }
                    Me(function (t) {
                      return l()(l()({}, t), {}, o()({}, e, ''))
                    })
                    var d = l()(l()({}, a), {}, o()({}, e, [].concat(r()(a[e]), [t])))
                    return y({ updates: d, tweetId: _ }), d
                  })
                }
              }
            },
            at = (null == G ? void 0 : G.misleading_tags) || [],
            nt = (null == G ? void 0 : G.not_misleading_tags) || [],
            rt = function (e) {
              return (
                Fe &&
                '' !== e &&
                p.a.createElement(
                  P.a,
                  { style: Le.errorContainer },
                  p.a.createElement(X.a, { style: Le.errorIcon }),
                  p.a.createElement(R.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, e),
                )
              )
            },
            it = p.a.createElement(
              P.a,
              null,
              p.a.createElement(
                P.a,
                { style: Le.questionSection },
                p.a.createElement(
                  P.a,
                  { accessibilityLabel: $.c.misleading_tags.label, accessibilityRole: 'group' },
                  p.a.createElement(R.b, { weight: 'bold' }, $.c.misleading_tags.label, ' '),
                  $.c.misleading_tags.options.map(function (e) {
                    return p.a.createElement(F.a, {
                      checked: at.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: tt('misleading_tags')(e.value),
                      style: Le.checkbox,
                    })
                  }),
                  rt(Ne.misleading_tags),
                ),
              ),
              pe.map(function (e) {
                return p.a.createElement(
                  P.a,
                  { key: $.c[e].label, style: Le.questionSection },
                  p.a.createElement(D.a, {
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
              P.a,
              { style: Le.questionSection },
              p.a.createElement(
                P.a,
                { accessibilityLabel: $.c.not_misleading_tags.label, accessibilityRole: 'group' },
                p.a.createElement(R.b, { weight: 'bold' }, $.c.not_misleading_tags.label, ' '),
                $.c.not_misleading_tags.options.map(function (e) {
                  return p.a.createElement(F.a, {
                    checked: nt.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: tt('not_misleading_tags')(e.value),
                    style: Le.checkbox,
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
              return !(!ct(he) || '' !== A(e)) && !!((dt === $.a && ct(be)) || (dt === $.b && ct(me)))
            },
            st = function () {
              ze(!0),
                c(_, G)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      a({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(L.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        $e('submit_failed'),
                        ze(!1)
                    } else y({ updates: {}, tweetId: _ }), g.replace(Je)
                  })
                  .catch(function (e) {
                    i({ defaultToast: { text: ue, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      ze(!1),
                      $e('submit_failed'),
                      Object(L.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            dt = G.classification,
            ut = G.trustworthy_sources,
            pt = void 0 === ut ? '' : ut ? 'true' : 'false',
            ht = dt === $.b,
            bt = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            mt = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            ft = C && Object(S.a)(C, !0),
            vt = p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(
                P.a,
                { style: Le.tweetContainer },
                p.a.createElement(N.b, { displayPromotedContent: !1, tweetId: _, withCurationMenu: !1 }),
              ),
              p.a.createElement(
                P.a,
                { style: Le.formQuestions },
                p.a.createElement(
                  P.a,
                  { style: Le.questionSection },
                  p.a.createElement(D.a, {
                    label: $.c.classification.label,
                    name: 'misleading_radio',
                    onChange: et('classification'),
                    options: $.c.classification.options,
                    value: dt,
                  }),
                  rt(Ne.classification),
                ),
                dt === $.a && it,
                ht && ot,
                !!dt &&
                  p.a.createElement(
                    p.a.Fragment,
                    null,
                    p.a.createElement(
                      P.a,
                      { style: Le.questionSection },
                      p.a.createElement(
                        P.a,
                        { accessibilityLabel: ht ? oe : ie, accessibilityRole: 'group' },
                        p.a.createElement(R.b, { weight: 'bold' }, ht ? oe : ie),
                        p.a.createElement(R.b, { link: le }, ce),
                        p.a.createElement(H.a, {
                          calculateLength: x,
                          helperText: se,
                          invalid: !!Ne.summary && Fe,
                          label: de,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            y({ updates: G, tweetId: _ })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            ke(function (e) {
                              return l()(l()({}, e), {}, { summary: t })
                            }),
                              Me(function (e) {
                                return l()(l()({}, e), {}, { summary: A(t) })
                              })
                          },
                          style: Le.textInput,
                          validLength: 280,
                          value: null == G ? void 0 : G.summary,
                        }),
                        rt(Ne.summary),
                      ),
                    ),
                    p.a.createElement(
                      P.a,
                      { style: Le.questionSection },
                      p.a.createElement(D.a, {
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
                    bt &&
                      !mt &&
                      p.a.createElement(P.a, { style: Le.callout }, p.a.createElement(j.a, { Icon: Q.a, text: ae })),
                    bt &&
                      mt &&
                      ft &&
                      p.a.createElement(
                        P.a,
                        { style: Le.callout },
                        p.a.createElement(j.a, {
                          Icon: Z.a,
                          headline: ne({ displayAlias: ft }),
                          text: re,
                          withThumbnail: !0,
                        }),
                      ),
                    Fe &&
                      !lt() &&
                      p.a.createElement(
                        P.a,
                        { style: Le.callout },
                        p.a.createElement(j.a, { Icon: X.a, text: ge, type: 'danger' }),
                      ),
                    p.a.createElement(
                      U.a,
                      {
                        disabled: Ue,
                        onPress: function () {
                          $e('submit'), De(!0)
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
                        style: Le.submitButton,
                        type: 'brandFilled',
                      },
                      te,
                    ),
                  ),
              ),
            ),
            gt = O.a
          return mt && Qe
            ? p.a.createElement(b.a, {
                onAliasSelected: function (e) {
                  Ze(e)
                },
              })
            : w
            ? p.a.createElement(k.a, { to: Je })
            : Ke
            ? p.a.createElement(z.a, {
                actionLabel: Te,
                graphic: 'source' === Ke ? J.a : Y.a,
                graphicDisplayMode: 'thumbnail',
                headline: Se[Ke],
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
                subtext: Ie[Ke],
                tertiaryActionLabel: xe[Ke],
                withCloseButton: !1,
              })
            : p.a.createElement(
                I.b,
                {
                  history: g,
                  onBackClick: function () {
                    $e('close'), g.goBack()
                  },
                  renderHeader: M.b.isTwitterApp() ? gt : void 0,
                  title: ee,
                },
                p.a.createElement(P.a, { style: Le.contentWrapper }, vt),
              )
        },
        Le = W.a.create(function (e) {
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
        Oe = T(ke)
      t.default = Oe
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
          return g
        })
      var n = a('ERkP'),
        r = a.n(n),
        i = a('vZpt'),
        o = a('L5MV'),
        c = a('3XMw'),
        l = a.n(c),
        s = a('VS6U'),
        d = a('MWbm'),
        u = a('FIs5'),
        p = a('rHpw'),
        h = l.a.b5711f09,
        b = l.a.e96677aa,
        m = l.a.f026d2ee,
        f = l.a.i859a9d3,
        v = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        g = function (e) {
          var t = e.history,
            a = r.a.createElement(
              d.a,
              { style: w.contentWrapper },
              r.a.createElement(u.a, {
                buttonLink: v,
                buttonText: f,
                buttonType: 'brandOutlined',
                header: b,
                message: m,
              }),
            )
          return r.a.createElement(s.a, {
            TabBar: o.a,
            history: t,
            logoButton: r.a.createElement(r.a.Fragment, null),
            primaryContent: a,
            sidebarContent: r.a.createElement(i.a, null),
            title: h,
            withTweetButton: !1,
          })
        },
        w = p.a.create(function (e) {
          return { contentWrapper: { marginHorizontal: '100px' } }
        })
      t.default = g
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
        d = a.n(s),
        u = a('5Yy7'),
        p = a.n(u),
        h = a('2VqO'),
        b = a.n(h),
        m = a('KEM+'),
        f = a.n(m),
        v = a('ddV6'),
        g = a.n(v),
        w = (a('jQ3i'), a('x4t0'), a('2G9S'), a('uFXj'), a('ERkP')),
        y = a.n(w),
        E = a('RhWx'),
        _ = a.n(E),
        C = a('yiKp'),
        T = a.n(C),
        S = (a('z84I'), a('TJCb'), a('7x/C'), a('DZ+c'), a('LW0h'), a('v6aA')),
        I = a('MvLc'),
        x = a('rxPX'),
        A = a('0KEI'),
        k = Object(x.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: I.c,
              deleteRating: I.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        L = a('ACNv'),
        O = a('YeIG'),
        B = a('MWbm'),
        N = a('t62R'),
        M = a('XiMS'),
        P = a('fyvP'),
        R = a('/yvb'),
        F = a('IG7M'),
        D = a('rHpw'),
        H = (a('yH/f'), a('3XMw')),
        j = a.n(H),
        U = Object.freeze({
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
        z = [U.Informative, U.Clear, U.Empathetic, U.GoodSources, U.UniqueContext, U.Other],
        W =
          ((n = {}),
          f()(n, U.Clear, j.a.dfa44ddd),
          f()(n, U.Empathetic, j.a.hc2b6a7e),
          f()(n, U.GoodSources, j.a.a7bc3191),
          f()(n, U.Informative, j.a.f3e6f0a9),
          f()(n, U.Other, j.a.c365dcc5),
          f()(n, U.UniqueContext, j.a.c5d55592),
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
          f()(r, V.Biased, j.a.bbe8b4ac),
          f()(r, V.Incorrect, j.a.heb35e12),
          f()(r, V.MissingKeyPoints, j.a.c34e0b2b),
          f()(r, V.NoSources, j.a.a802709f),
          f()(r, V.OffTopic, j.a.dd1f17e9),
          f()(r, V.Outdated, j.a.if966b54),
          f()(r, V.Other, j.a.c365dcc5),
          f()(r, V.Rude, j.a.d0ba7db4),
          f()(r, V.TwitterViolationAny, j.a.aa520d31),
          f()(r, V.Unclear, j.a.e25e5ed1),
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
            options: z.map(function (e) {
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
        de = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'if77e237' }, y.a.cloneElement(le, null, j.a.a43beaf2)),
        ue = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, y.a.cloneElement(se, null, j.a.cb1d0ef3)),
        pe = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'j575fa79' }, y.a.cloneElement(oe, null, j.a.he5f1491)),
        he = y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, y.a.cloneElement(ce, null, j.a.a67e7d91)),
        be = y.a.createElement(
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
        fe = y.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          y.a.cloneElement(se, null, j.a.cf87d556),
          y.a.cloneElement(oe, null, j.a.hec80c95),
        ),
        ve = y.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'gbfec7fd' },
          y.a.cloneElement(se, null, j.a.bfa5f565),
          y.a.cloneElement(ce, null, j.a.eb1cc800),
        ),
        ge = D.a.create(function (e) {
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
        we = k(function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.createRating,
            r = e.deleteRating,
            i = e.noteId,
            o = e.rating,
            c = y.a.useContext(S.a).featureSwitches,
            l = o || {},
            s = y.a.useState(l),
            d = g()(s, 2),
            u = d[0],
            p = d[1],
            h = y.a.useState(Object(O.a)(o)),
            b = g()(h, 2),
            m = b[0],
            v = b[1],
            w = function (e) {
              return function (t, a) {
                p(function (t) {
                  var n = a
                  return 'true' === a ? (n = !0) : 'false' === a && (n = !1), T()(T()({}, t), {}, f()({}, e, n))
                })
              }
            },
            E = function (e) {
              var t = u[e] || []
              return y.a.createElement(
                B.a,
                { style: ge.checkboxContainer },
                y.a.createElement(N.b, { weight: 'bold' }, Y[e].label),
                Y[e].options.map(function (a) {
                  return y.a.createElement(M.a, {
                    checked: t.includes(a.value),
                    key: a.value,
                    label: a.label,
                    onChange: x(e)(a.value),
                    style: ge.checkbox,
                  })
                }),
              )
            },
            C = function () {
              A('delete'),
                r(i)
                  .then(function (e) {
                    'Done' === e.birdwatchnote_rating_delete && (p({}), v(!0))
                  })
                  .catch(a())
            },
            I = function () {
              A('edit'), v(!0)
            },
            x = function (e) {
              return function (t) {
                return function () {
                  p(function (a) {
                    return a[e]
                      ? a[e].includes(t)
                        ? T()(
                            T()({}, a),
                            {},
                            f()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : T()(T()({}, a), {}, f()({}, e, [].concat(_()(a[e]), [t])))
                      : T()(T()({}, a), {}, f()({}, e, [t]))
                  })
                }
              }
            },
            A = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            k = void 0 !== (null == u ? void 0 : u.helpful),
            D = k ? (null != u && u.helpful ? 'true' : 'false') : '',
            H = void 0 !== (null == u ? void 0 : u.agree),
            j = H ? (null != u && u.agree ? 'true' : 'false') : ''
          return m
            ? y.a.createElement(
                B.a,
                { style: ge.root },
                y.a.createElement(P.a, {
                  label: Y.helpful.label,
                  name: Y.helpful.label + i,
                  onChange: w('helpful'),
                  options: ie(J),
                  value: D,
                }),
                k && (null != u && u.helpful ? E('helpful_tags') : E('not_helpful_tags')),
                y.a.createElement(P.a, {
                  label: Y.agree.label,
                  name: Y.agree.label + i,
                  onChange: w('agree'),
                  options: ie(J),
                  value: j,
                }),
                !Object(O.a)(u) &&
                  y.a.createElement(
                    R.a,
                    {
                      onClick: function () {
                        A('submit'),
                          u &&
                            n(i, u)
                              .then(function () {
                                v(!1)
                              })
                              .catch(
                                a({
                                  defaultToast: { text: Z, withAutoDismiss: !1, withClearButton: !0 },
                                  showToast: !0,
                                }),
                              )
                      },
                      style: ge.button,
                      type: 'brandFilled',
                    },
                    $,
                  ),
              )
            : y.a.createElement(
                B.a,
                { style: [ge.root, ge.showSubmittedRating] },
                y.a.createElement(
                  B.a,
                  { style: ge.row },
                  y.a.createElement(Q.a, { style: ge.icon }),
                  y.a.createElement(
                    N.b,
                    { size: 'subtext2' },
                    null != u && u.helpful && !H
                      ? de
                      : (null != u && u.helpful) || H
                      ? null != u && u.agree && !k
                        ? pe
                        : (null != u && u.agree) || k
                        ? null != u && u.helpful && null != u && u.agree
                          ? be
                          : null == u || !u.helpful || (null != u && u.agree)
                          ? (null != u && u.helpful) || null == u || !u.agree
                            ? (null != u && u.helpful) || (null != u && u.agree)
                              ? void 0
                              : ve
                            : fe
                          : me
                        : he
                      : ue,
                  ),
                ),
                y.a.createElement(F.a, {
                  renderActionMenu: function (e) {
                    return y.a.createElement(L.default, {
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
                          : t.push({ text: ee, Icon: X.a, onClick: I }),
                        t),
                      onClose: e,
                    })
                    var t
                  },
                }),
              )
        }),
        ye = a('xZGM'),
        Ee = a('1YZw'),
        _e = Object(x.a)()
          .propsFromState(function () {
            return {
              shouldShowDataPrivacyPrompt: function (e, t) {
                return Object(ye.C)(e, ye.c)
              },
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: ye.y,
              addToast: Ee.b,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: I.c,
              deleteRating: I.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        Ce = a('cHvH'),
        Te = a('h0NW'),
        Se = a('feu+')
      a('+KXO')
      function Ie(e) {
        var t,
          a,
          n = j.a.a7bc3191,
          r = j.a.a26f8dc1,
          i = j.a.d89cfe9e,
          o = j.a.faa5f9e7,
          c = j.a.c365dcc5
        return e
          ? ((t = {}),
            f()(t, U.GoodSources, n),
            f()(t, U.Clear, r),
            f()(t, U.AddressesClaim, i),
            f()(t, U.ImportantContext, o),
            f()(t, U.UnbiasedLanguage, j.a.gf3b38f4),
            f()(t, U.Other, c),
            t)
          : ((a = {}),
            f()(a, U.GoodSources, n),
            f()(a, U.Clear, r),
            f()(a, U.AddressesClaim, i),
            f()(a, U.ImportantContext, o),
            f()(a, U.Other, c),
            a)
      }
      function xe(e) {
        return Object.keys(Ie(e))
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
            f()(t, V.NoSources, n),
            f()(t, V.IrrelevantSources, r),
            f()(t, V.Incorrect, i),
            f()(t, V.OpinionSpeculation, j.a.h7c59ea2),
            f()(t, V.Unclear, j.a.d60c0063),
            f()(t, V.MissingKeyPoints, j.a.e06416c9),
            f()(t, V.Rude, j.a.cff1aa8b),
            f()(t, V.NoteNotNeeded, j.a.cc443e25),
            f()(t, V.TwitterViolationAny, o),
            f()(t, V.Other, c),
            t)
          : ((a = {}),
            f()(a, V.NoSources, n),
            f()(a, V.IrrelevantSources, r),
            f()(a, V.Incorrect, i),
            f()(a, V.Unclear, j.a.d60c0063),
            f()(a, V.MissingKeyPoints, j.a.c34e0b2b),
            f()(a, V.Rude, j.a.d24b99ed),
            f()(a, V.TwitterViolationAny, o),
            f()(a, V.Other, c),
            a)
      }
      function ke(e) {
        return Object.keys(Ae(e))
      }
      var Le = a('EQ/a'),
        Oe = a('DlMI'),
        Be = j.a.ed5156f9,
        Ne = [
          { label: j.a.b7ec04f3, value: 'Helpful' },
          { label: j.a.i26425d8, value: 'SomewhatHelpful' },
          { label: j.a.i62a03aa, value: 'NotHelpful' },
        ],
        Me = j.a.a91bb144,
        Pe = j.a.abd845fd,
        Re = j.a.d96cf7cd,
        Fe = j.a.j6aa6172,
        De = j.a.i411275f,
        He = j.a.e2988ed0,
        je = j.a.c1a50438,
        Ue = j.a.d2ae3d42,
        ze = j.a.c4e0c730,
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
        tt = D.a.create(function (e) {
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
          accessibilityLabel: Ue,
          containerStyle: tt.infoItemContainer,
          items: [
            { label: '', decoration: y.a.createElement(Le.a, { style: tt.iconDataPrivacy }), description: Ke },
            {
              label: '',
              decoration: y.a.createElement(Oe.a, { style: tt.iconDataPrivacy }),
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
            d = e.shouldShowDataPrivacyPrompt,
            u = y.a.useContext(S.a).featureSwitches,
            p = y.a.useState(l),
            h = g()(p, 2),
            b = h[0],
            m = h[1],
            v = y.a.useState(Object(O.a)(l)),
            w = g()(v, 2),
            E = w[0],
            C = w[1],
            I = y.a.useState(!1),
            x = g()(I, 2),
            A = x[0],
            k = x[1],
            P = u.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            H = {
              helpful: { label: j.a.a7338bc2, options: Ne },
              helpful_tags: {
                label: j.a.ac7f9745,
                options: xe(P).map(function (e) {
                  return { label: Ie(P)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: j.a.c7751803,
                options: ke(P).map(function (e) {
                  return { label: Ae(P)[e], value: e }
                }),
              },
            },
            U = function (e) {
              n.scribeAction('click_'.concat(e))
            },
            z = function () {
              U('delete'),
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
              U('edit'), C(!0)
            },
            K = function () {
              var e, t
              ;(U('submit'),
              i(c, b)
                .then(function () {
                  C(!1)
                })
                .catch(r({ defaultToast: { text: Be, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              u.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(O.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = b.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = b.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
                  Math.random() < 0.05) &&
                a({
                  text: He,
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
                        ? T()(
                            T()({}, a),
                            {},
                            f()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : T()(T()({}, a), {}, f()({}, e, [].concat(_()(a[e]), [t])))
                      : T()(T()({}, a), {}, f()({}, e, [t]))
                  })
                }
              }
            },
            Z = function (e) {
              var t = (b && b[e]) || []
              return y.a.createElement(
                B.a,
                { style: tt.checkboxContainer },
                y.a.createElement(N.b, { weight: 'bold' }, H[e].label),
                H[e].options.map(function (a) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level) &&
                      a.value === V.TwitterViolationAny
                    ) &&
                    y.a.createElement(M.a, {
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
              var t = e.windowWidth <= D.a.theme.breakpoints.small
              return y.a.createElement(
                B.a,
                { style: !t && tt.helpfulContainer },
                y.a.createElement(N.b, { style: t && tt.helpfulQuestionMobile, weight: 'bold' }, H.helpful.label),
                y.a.createElement(
                  B.a,
                  { style: tt.helpfulOptions },
                  Ne.map(function (e) {
                    return y.a.createElement(
                      R.a,
                      {
                        key: e.value,
                        onClick:
                          ((t = e.value),
                          function () {
                            m(function (e) {
                              return T()(T()({}, e), {}, { helpfulness_level: t })
                            })
                          }),
                        size: 'small',
                        style: tt.helpfulButtons,
                        type: (null == b ? void 0 : b.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
                      },
                      e.label,
                    )
                    var t
                  }),
                ),
              )
            }),
            Y = y.a.createElement(Te.a, at),
            $ = y.a.createElement(Se.a, {
              actionLabel: ze,
              headline: Ve,
              isFullHeightOnMobile: !0,
              onAction: function () {
                K(), t(ye.c), k(!1)
              },
              onSecondaryAction: function () {
                return k(!1)
              },
              secondaryActionLabel: We,
              subtext: Y,
            }),
            ee = void 0 !== (null == b ? void 0 : b.helpfulness_level),
            te =
              ee &&
              ('Helpful' === (null == b ? void 0 : b.helpfulness_level) ||
                'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level)),
            ae =
              ee &&
              ('NotHelpful' === (null == b ? void 0 : b.helpfulness_level) ||
                'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level))
          return y.a.createElement(
            y.a.Fragment,
            null,
            A ? $ : null,
            E
              ? y.a.createElement(
                  B.a,
                  { style: tt.root },
                  J,
                  te && Z('helpful_tags'),
                  ae && Z('not_helpful_tags'),
                  !Object(O.a)(b) &&
                    y.a.createElement(
                      R.a,
                      {
                        onClick: function () {
                          d && u.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? k(!0) : b && K()
                        },
                        style: tt.button,
                        type: 'brandFilled',
                      },
                      Me,
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
                        switch (null == b ? void 0 : b.helpfulness_level) {
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
                  y.a.createElement(F.a, {
                    renderActionMenu: function (e) {
                      return y.a.createElement(L.default, {
                        actionItems:
                          ((t = []),
                          t.push({
                            confirmation: { label: Re, headline: Fe, text: De, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: Re,
                            Icon: q.a,
                            onClick: z,
                          }),
                          t.push({ text: Pe, Icon: X.a, onClick: W }),
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
            return { tweetFetchStatus: ot, userAlias: I.y }
          })
          .propsFromActions(function () {
            return {
              addToast: Ee.b,
              createAppeal: I.a,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: rt.b,
              fetchTweet: it.a.fetchOneIfNeeded,
              fetchUserAlias: I.l,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        lt = a('eqZz'),
        st = a('W6+M'),
        dt = a('yrzJ'),
        ut = a('sgih'),
        pt = j.a.e4579709,
        ht = j.a.df587b98,
        bt = j.a.h201bdc8,
        mt = j.a.fe1f6043,
        ft = j.a.ia5e7487,
        vt = j.a.j58e7b00,
        gt = (function (e) {
          p()(a, e)
          var t = b()(a)
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
                      { style: wt.noteDetailsContainer },
                      y.a.createElement(
                        B.a,
                        { style: wt.noteDetailsHeader },
                        y.a.createElement(N.b, { size: 'headline1', weight: 'bold' }, pt),
                      ),
                      y.a.createElement(
                        B.a,
                        { style: wt.noteDetails },
                        y.a.createElement(
                          B.a,
                          { style: [wt.noteDetailsSection, wt.noteDetailsSectionBorder] },
                          y.a.createElement(N.b, { style: wt.noteDetailsText, weight: 'bold' }, ht),
                          y.a.createElement(N.b, { style: wt.noteDetailsContentText }, r),
                        ),
                        y.a.createElement(
                          B.a,
                          { style: [wt.noteDetailsSection, wt.noteDetailsSectionBorder] },
                          y.a.createElement(N.b, { style: wt.noteDetailsText, weight: 'bold' }, mt),
                          y.a.createElement(
                            N.b,
                            { style: wt.noteDetailsContentText },
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
                          { style: [wt.noteDetailsSection, wt.noteDetailsSectionLast] },
                          y.a.createElement(N.b, { style: wt.noteDetailsText, weight: 'bold' }, bt),
                          l
                            ? y.a.createElement(
                                N.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: wt.profileText },
                                Object(st.a)(t),
                              )
                            : y.a.createElement(dt.a, { screenName: t }),
                          l &&
                            y.a.createElement(
                              N.b,
                              {
                                color: 'link',
                                link: '/i/birdwatch/u/'.concat(t),
                                onClick: a,
                                style: wt.viewProfileLink,
                              },
                              vt,
                            ),
                          c && i && i.length > 0
                            ? i.map(function (e, t) {
                                return y.a.createElement(lt.a, { badgeType: e, key: t })
                              })
                            : null,
                        ),
                        y.a.createElement(B.a, { style: wt.contentSpacer }),
                      ),
                      y.a.createElement(
                        B.a,
                        { style: wt.noteDetailsButtonSection },
                        y.a.createElement(B.a, { style: wt.buttonSpacer }),
                        y.a.createElement(R.a, { onClick: a, style: wt.noteDetailsButton, type: 'brandFilled' }, ft),
                      ),
                    )
                  return y.a.createElement(Ce.a, null, function (e) {
                    var t = e.windowWidth
                    return y.a.createElement(ut.a, {
                      allowBackNavigation: !0,
                      children: s,
                      onMaskClick: a,
                      type: t >= D.a.theme.breakpoints.medium ? 'center' : 'full',
                      withMask: !0,
                    })
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      f()(gt, 'contextType', S.a)
      var wt = D.a.create(function (e) {
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
        yt = gt,
        Et = a('b5s6'),
        _t = a('rcen'),
        Ct = a('Rp9C'),
        Tt = 'helpfulRatingTags',
        St = 'notHelpfulRatingTags',
        It = 'ratingStatus',
        xt = a('4zmP'),
        At = a('pjBI'),
        kt = a('GBcw'),
        Lt = a('855f'),
        Ot = a('htQn'),
        Bt = a('zIWA'),
        Nt = a('/WPq'),
        Mt = a('6s7X'),
        Pt = a('sUoZ'),
        Rt = a('x0mb'),
        Ft = a('fBGZ'),
        Dt = a('2Rcs'),
        Ht = a('Nh1N'),
        jt = a('NPGn'),
        Ut = j.a.d96cf7cd,
        zt = j.a.e272836c,
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
        da = 'CurrentlyRatedHelpful',
        ua = 'CurrentlyRatedNotHelpful',
        pa = 'NeedsMoreRatings',
        ha = function (e, t, a) {
          return y.a.createElement(
            B.a,
            { style: ma.ratingInfoItem, testID: It },
            y.a.createElement(e, { style: [ma.icon, t] }),
            y.a.createElement(N.b, { size: 'subtext2', weight: 'bold' }, a),
          )
        },
        ba = (function (e) {
          p()(a, e)
          var t = b()(a)
          function a(e, n) {
            var r
            return (
              o()(this, a),
              (r = t.call(this, e, n)),
              f()(d()(r), '_handleFetchTweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchTweet,
                  n = e.note.tweet,
                  i = null == n ? void 0 : n.rest_id
                i && a(i).catch(t())
              }),
              f()(d()(r), '_isOwner', function () {
                var e,
                  t = r.props,
                  a = t.note,
                  n = t.userAlias,
                  i = null == a || null === (e = a.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!n || !i) && i === n
              }),
              f()(d()(r), '_handleDeleteConfirm', function () {
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
              f()(d()(r), '_getMenuActionItems', function () {
                var e = r.props.note,
                  t = e.birdwatch_profile,
                  a = e.rest_id,
                  n = []
                return (
                  null != t &&
                    t.alias &&
                    r._isOwner() &&
                    n.push({
                      confirmation: { label: Ut, headline: zt, text: Vt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: Ut,
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
              f()(d()(r), '_onNoteDetailsClick', function () {
                r.setState({ noteDetailsOpen: !0 }), r._scribeOnClick('note_details')
              }),
              f()(d()(r), '_renderCurationActionMenu', function (e) {
                return y.a.createElement(L.default, { actionItems: r._getMenuActionItems(), onClose: e })
              }),
              f()(d()(r), '_scribeOnClick', function (e) {
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
              f()(d()(r), '_handleRequestAppeal', function () {
                var e = r.props,
                  t = e.createAppeal,
                  a = e.createLocalApiErrorHandler
                t(e.note.rest_id)
                  .then(function () {
                    r.setState({ appealsRequestOpen: !1 }), r.setState({ appealRequested: !0 })
                  })
                  .catch(a({ defaultToast: { text: sa, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }))
              }),
              f()(d()(r), '_handleOpenAppealsModal', function () {
                r.setState({ appealsRequestOpen: !0 })
              }),
              f()(d()(r), '_handleCloseAppealsModal', function () {
                r.setState({ appealsRequestOpen: !1 })
              }),
              f()(d()(r), '_renderAppealsModal', function () {
                var e = y.a.createElement(B.a, null, y.a.createElement(N.b, null, ta), y.a.createElement(Te.a, fa))
                return y.a.createElement(Se.a, {
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
              f()(d()(r), '_renderAppealsStatus', function () {
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
              f()(d()(r), '_isShownOnTwitter', function () {
                var e = r.props.note,
                  t = e.data_v1
                return e.rating_status === da && (null == t ? void 0 : t.classification) === jt.a
              }),
              f()(d()(r), '_renderRatingStatus', function (e) {
                switch (e) {
                  case da:
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
                          y.a.createElement(Mt.a, { style: [ma.icon, ma.infoIcon] }),
                        ),
                      ),
                      a = r._isShownOnTwitter() ? t : Xt
                    return ha(Pt.a, ma.iconStar, a)
                  case ua:
                    return ha(Rt.a, ma.iconRed, Jt)
                  case pa:
                    return ha(Rt.a, ma.iconGray, Zt)
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
                    d = r.not_helpful_tags,
                    u = void 0 === d ? [] : d,
                    p = r.rating,
                    h = r.rating_status,
                    b = r.rating_survey,
                    m = r.rest_id,
                    f = r.tweetId,
                    v = r.tweet,
                    w = n.showPivot,
                    E = n.showRating,
                    _ = n.showTweet,
                    C = n.withBorder,
                    T = this.context.featureSwitches,
                    S = f || (null == v ? void 0 : v.rest_id),
                    I = (null == o || null === (e = o.summary) || void 0 === e ? void 0 : e.text) || '',
                    x = (null == o || null === (t = o.summary) || void 0 === t ? void 0 : t.entities) || [],
                    A = (null == p ? void 0 : p.data_v1) || {},
                    k = (null == p ? void 0 : p.data_v2) || {},
                    L = 2 === (null == p ? void 0 : p.version),
                    M = L ? k : A,
                    P = Object(O.a)(M),
                    R = (T.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && P) || L,
                    H =
                      (T.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        T.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      E,
                    U = T.isTrue('responsive_web_birdwatch_appeals_enabled') && this.state.appealsRequestOpen,
                    z = this.props.note.birdwatch_profile,
                    V = (null == z ? void 0 : z.alias) || '',
                    K = (null == z ? void 0 : z.badges) || [],
                    q = function () {
                      return a.setState({ noteDetailsOpen: !1 })
                    }
                  return y.a.createElement(Ce.a, null, function (e) {
                    var t,
                      n = e.windowWidth
                    return y.a.createElement(
                      B.a,
                      { key: m, style: ma.noteContainer },
                      U && a._renderAppealsModal(),
                      y.a.createElement(
                        B.a,
                        { style: ma.noteTopContainer },
                        _ && S
                          ? y.a.createElement(
                              B.a,
                              { style: ma.tweetContainer },
                              y.a.createElement(Et.a, { isCondensed: !0, tweetId: S }),
                            )
                          : null,
                        y.a.createElement(
                          B.a,
                          { style: [ma.noteTop, _ && ma.noteWithQT, C && ma.noteWithBorder] },
                          y.a.createElement(
                            B.a,
                            { style: ma.noteBody },
                            y.a.createElement(
                              At.a,
                              { style: ma.noteInfoMiddots },
                              a._renderRatingStatus(h),
                              i && n >= D.a.theme.breakpoints.medium
                                ? y.a.createElement(kt.a, { style: [ma.ratingInfoItem, ma.timestamp], timestamp: i })
                                : null,
                            ),
                            s && T.isTrue('responsive_web_birdwatch_impressions_enabled')
                              ? y.a.createElement(
                                  N.b,
                                  { color: 'gray700', size: 'subtext2', style: ma.subtext },
                                  ((t = Lt.a.getTruncatedCount(s)),
                                  y.a.createElement(j.a.I18NFormatMessage, { $i18n: 'd9f77781', impressions: t })),
                                )
                              : null,
                            h === da && (null == o ? void 0 : o.classification) === jt.b
                              ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2', style: ma.subtext }, Yt)
                              : null,
                            y.a.createElement(
                              At.a,
                              { style: ma.noteInfoMiddots },
                              (function (e, t, a) {
                                switch (e) {
                                  case da:
                                    if (2 === t.length) {
                                      var n = g()(t, 2),
                                        r = n[0],
                                        i = n[1],
                                        o = xe(!0),
                                        c = Ie(!0),
                                        l = o.includes(r) ? c[r] : W[r],
                                        s = o.includes(i) ? c[i] : W[i],
                                        d = ''.concat(l, ' · ').concat(s)
                                      return l && s
                                        ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2', testID: Tt }, d)
                                        : null
                                    }
                                    return null
                                  case ua:
                                    if (2 === a.length) {
                                      var u = g()(a, 2),
                                        p = u[0],
                                        h = u[1],
                                        b = ke(!0).includes(p) ? Ae(!0)[p] : G[p],
                                        m = ke(!0).includes(h) ? Ae(!0)[h] : G[h],
                                        f = ''.concat(b, ' · ').concat(m)
                                      return b && m
                                        ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2', testID: St }, f)
                                        : null
                                    }
                                    return null
                                  default:
                                    return null
                                }
                              })(h, l, u),
                            ),
                            y.a.createElement(
                              B.a,
                              { style: ma.noteTextSection },
                              y.a.createElement(_t.a, {
                                entities: x,
                                onEntityClick: a._scribeOnClick('link'),
                                text: I,
                              }),
                            ),
                          ),
                          y.a.createElement(F.a, { renderActionMenu: a._renderCurationActionMenu, style: ma.caret }),
                        ),
                        H
                          ? y.a.createElement(
                              B.a,
                              { style: ma.ratingContainer },
                              R
                                ? y.a.createElement(nt, { noteId: m, rating: k, ratingSurvey: b })
                                : y.a.createElement(we, { noteId: m, rating: A }),
                            )
                          : null,
                        T.isTrue('responsive_web_birdwatch_appeals_enabled') ? a._renderAppealsStatus() : null,
                      ),
                      w &&
                        S &&
                        T.isTrue('responsive_web_birdwatch_rating_participant_enabled') &&
                        y.a.createElement(
                          Ot.a,
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
                          alias: V,
                          closeNoteDetails: q,
                          created_at: i,
                          rest_id: m,
                          userBadges: K,
                        }),
                    )
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      f()(ba, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), f()(ba, 'contextType', S.a)
      var ma = D.a.create(function (e) {
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
            noteWithBorder: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              marginBottom: e.spaces.space8,
              padding: e.spaces.space12,
            },
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
        fa = {
          accessibilityLabel: $t,
          containerStyle: ma.infoItemContainer,
          items: [
            { label: '', decoration: y.a.createElement(Ft.a, { style: ma.iconAppeals }), description: aa },
            { label: '', decoration: y.a.createElement(Dt.a, { style: ma.iconAppeals }), description: na },
            { label: '', decoration: y.a.createElement(Ht.a, { style: ma.iconAppeals }), description: ra },
          ],
        },
        va = ct(ba)
      t.a = va
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
        d = a('XOJV'),
        u = a('eSoz'),
        p = a('rxPX'),
        h = a('0KEI'),
        b = function (e, t) {
          return t.tweetId
        },
        m = function (e, t) {
          var a = t.tweetId,
            n = a && d.a.select(e, a)
          return n ? Object(u.g)(e, n) : void 0
        },
        f = Object(p.a)()
          .propsFromState(function () {
            return { community: m, hydratedTweet: d.a.createHydratedTweetSelector(b) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        v = a('YeIG'),
        g = a('uCxL'),
        w = a('x5Pi'),
        y = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        E = f(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            c = (e.tweetId, o()(e, y)),
            d = l.a.useContext(s.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            h = null == i ? void 0 : i.community_id_str
          l.a.useEffect(
            function () {
              h && Object(v.a)(t) && n(h).catch(a())
            },
            [t, h, a, n],
          )
          var b = u.isTrue('responsive_web_alt_text_badge_enabled'),
            m = i && Object(w.f)(i, p, t),
            f = m && Object(w.e)(m),
            E = u.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            g.a,
            r()({}, c, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: b,
              socialContextProps: f,
              tweet: i,
              withReactions: E,
            }),
          )
        })
      t.a = E
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
        d = a('vZpt'),
        u = a('L5MV'),
        p = a('MvLc'),
        h = a('rxPX'),
        b = a('0KEI'),
        m = Object(h.a)()
          .propsFromState(function () {
            return { userAlias: p.y, showAliasSelfSelect: p.v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: p.l,
              fetchShowAliasSelfSelect: p.j,
            }
          }),
        f = a('3XMw'),
        v = a.n(f),
        g = a('5FtR'),
        w = a('VS6U'),
        y = a('nymP'),
        E = v.a.ff692d63,
        _ = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchShowAliasSelfSelect,
            n = e.fetchUserAlias,
            i = e.history,
            p = e.showAliasSelfSelect,
            h = e.userAlias,
            b = o.a.useContext(l.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            m = o.a.useState(!0),
            f = r()(m, 2),
            v = f[0],
            _ = f[1]
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
          return o.a.createElement(w.a, {
            TabBar: u.a,
            history: i,
            logoButton: o.a.createElement(o.a.Fragment, null),
            primaryContent: v
              ? o.a.createElement(c.a, { size: 'large' })
              : h
              ? o.a.createElement(g.a, { to: '/i/birdwatch/u/'.concat(h) })
              : b && p
              ? o.a.createElement(s.a, { onAliasSelected: C })
              : o.a.createElement(y.a, null),
            sidebarContent: o.a.createElement(d.a, null),
            title: E,
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
        d = a('t62R'),
        u = a('rHpw'),
        p = o.a.c57760e9,
        h = o.a.c45ef9c1,
        b = o.a.g29805f5,
        m = o.a.b1056323,
        f = function () {
          return r.a.createElement(c.a, { style: v.innerIconColor })
        },
        v = u.a.create(function (e) {
          return {
            awardSection: { flexDirection: 'row', marginBottom: e.spaces.space8, alignItems: 'center' },
            goldAward: { backgroundColor: e.colors.yellow500 },
            innerIconColor: { color: e.colors.buttonAlwaysBlack },
            ratingAward: { marginRight: e.spaces.space8 },
            ratingAwardText: { color: e.colors.text, marginRight: e.spaces.space4 },
            silverAward: { backgroundColor: e.colors.gray300 },
          }
        }),
        g = {
          Top10Author: { badgeStyle: v.goldAward, contributorText: b, badgeText: p },
          Top10Rater: { badgeStyle: v.goldAward, contributorText: b, badgeText: h },
          Top25Author: { badgeStyle: v.silverAward, contributorText: m, badgeText: p },
          Top25Rater: { badgeStyle: v.silverAward, contributorText: m, badgeText: h },
        }
      t.a = function (e) {
        var t = e.badgeType,
          a = g[t],
          n = a.badgeStyle,
          i = a.badgeText,
          o = a.contributorText
        return r.a.createElement(
          l.a,
          { style: v.awardSection },
          r.a.createElement(s.a, { Icon: f, size: 'large', style: [v.ratingAward, n] }),
          r.a.createElement(d.b, { style: v.ratingAwardText, weight: 'bold' }, o),
          r.a.createElement(d.b, null, i),
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
    foB5: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o = a('k49u'),
        c = a('3XMw'),
        l = a.n(c).a.ee87e71c,
        s = ((n = {}), i()(n, o.a.SelfMuteError, { toast: { text: l } }), i()(n, 'showToast', !0), n)
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
        d = a('feu+'),
        u = a('rHpw'),
        p = a('WtWS'),
        h = a('2Rcs'),
        b = a('sUoZ'),
        m = o.a.cc42580e,
        f = o.a.gc1a5bce,
        v = o.a.bd9e5451,
        g = o.a.j5a1d85a,
        w = o.a.b25b64d5,
        y = o.a.a4ec7003,
        E = o.a.cb67d37a,
        _ = u.a.create(function (e) {
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
          accessibilityLabel: E,
          containerStyle: _.infoItemContainer,
          items: [
            { label: m, decoration: r.a.createElement(p.a, { style: [_.icon, _.iconGreen] }) },
            { label: f, decoration: r.a.createElement(h.a, { style: _.icon }) },
            { label: v, decoration: r.a.createElement(b.a, { style: _.icon }) },
          ],
        }
      t.default = function (e) {
        var t = e.history,
          a = e.match.params.tweetId,
          n = r.a.createElement(l.b, null, y, r.a.createElement(s.a, C))
        return r.a.createElement(d.a, {
          actionLabel: g,
          contentStyle: _.content,
          graphicDisplayMode: 'none',
          headline: w,
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
    j7tW: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return h
      }),
        a.d(t, 'c', function () {
          return b
        }),
        a.d(t, 'b', function () {
          return m
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = (a('2G9S'), a('oEOe')),
        o = a('PiaM'),
        c = 'rweb/'.concat('pinnedTweets'),
        l = a('x5Pi'),
        s = a('G6rE'),
        d = a('SRyb'),
        u = i.a(c, 'PIN'),
        p = i.a(c, 'UNPIN'),
        h = function (e) {
          return function (t, a, n) {
            var c = n.api,
              p = n.featureSwitches
            return i.c(t, { params: { id: e }, request: c.Tweets.pin })(
              { actionTypes: u, context: 'ACTION_PIN_TWEET', meta: { tweetId: e } },
              function (n) {
                var i = s.e.selectLoggedInUser(a())
                if (void 0 !== i) {
                  var c = i.id_str,
                    u = i.pinned_tweet_ids_str && i.pinned_tweet_ids_str[0]
                  t(s.e.patchUser(c, { pinned_tweet_ids_str: [e] }))
                  var h = Object(d.a)(p, c, 'default'),
                    b = u
                      ? [h.removeTweets(r()({}, u, !0)), h.injectEntry(o.k({ id: u, sortIndex: u }), { atTop: !1 })]
                      : []
                  return [].concat(b, [
                    h.removeTweets(r()({}, e, !0)),
                    h.injectEntry(
                      o.k({ id: e, content: { socialContext: { generalContext: l.a } }, sortIndex: 'NOT_USED' }),
                    ),
                  ])
                }
              },
            )
          }
        },
        b = function (e) {
          return function (t, a, n) {
            var c = n.api,
              l = n.featureSwitches
            return i.c(t, { params: { id: e }, request: c.Tweets.unpin })(
              { actionTypes: p, context: 'ACTION_UNPIN_TWEET', meta: { tweetId: e } },
              function (n) {
                var i = s.e.selectLoggedInUser(a())
                if (void 0 !== i) {
                  var c = i.id_str
                  return (
                    t(s.e.patchUser(c, { pinned_tweet_ids_str: [] })),
                    [
                      Object(d.a)(l, c, 'default').removeTweets(r()({}, e, !0)),
                      Object(d.a)(l, c, 'default').injectEntry(o.k({ id: e, sortIndex: e }), { atTop: !1 }),
                    ]
                  )
                }
              },
            )
          }
        },
        m = function (e, t) {
          var a = s.e.selectLoggedInUser(e)
          return !(null == a || !a.pinned_tweet_ids_str) && a.pinned_tweet_ids_str[0] === t
        }
    },
    jQy5: function (e, t, a) {
      'use strict'
      var n = a('OrGc'),
        r = a('foB5'),
        i = a('1bnC'),
        o = a('68+r'),
        c = a('P2xQ')
      t.a = function (e) {
        var t = e.addToast,
          a = e.behavioralEventEntityToken,
          l = e.createLocalApiErrorHandler,
          s = e.dismissUserFromConversation,
          d = e.mute,
          u = e.promotedContent,
          p = e.scribeAction,
          h = e.unmute,
          b = e.user,
          m = function () {
            h(b.id_str, { promotedContent: u }).then(function () {
              t({ text: Object(c.d)(b.screen_name), behavioralEventEntityToken: a })
            }, l(o.a)),
              p({ element: 'unmute' })
          },
          f = Object(c.a)(
            b,
            function () {
              d(b.id_str, { promotedContent: u }).then(function () {
                s && s({ userId: b.id_str, feedbackKeys: ['UnfollowEntity'] }),
                  t({
                    action: { label: i.a, onAction: m, behavioralEventViewType: 'unmute_person' },
                    behavioralEventEntityToken: a,
                    text: Object(c.b)(b.screen_name),
                  })
              }, l(r.a)),
                p({ element: 'mute' })
            },
            m,
          ),
          v = f.Icon,
          g = f.behavioralEventContext,
          w = f.onClick
        return { behavioralEventContext: g, Icon: v, text: f.text, onClick: w, shortcutKey: n.e.mute }
      }
    },
    mQYW: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchNotesUserScreen', function () {
          return ve
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('z84I'), a('uFXj'), a('ERkP')),
        o = a.n(i),
        c = a('v6aA'),
        l = a('9StO'),
        s = a('eqZz'),
        d = a('97Jx'),
        u = a.n(d),
        p = a('m3Bd'),
        h = a.n(p),
        b = a('ZD0R'),
        m = a('xSpP'),
        f = a('rxPX'),
        v = function (e, t) {
          var a = t.noteId
          return m.a.select(e, a)
        },
        g = Object(f.a)().propsFromState(function () {
          return { note: v }
        }),
        w = ['note', 'noteId'],
        y = g(function (e) {
          var t = e.note,
            a = (e.noteId, h()(e, w))
          return t ? o.a.createElement(b.a, u()({ note: t }, a)) : null
        }),
        E = a('vZpt'),
        _ = a('L5MV'),
        C = (a('KqXw'), a('WNMA'), a('MvLc')),
        T = a('yiKp'),
        S = a.n(T),
        I = a('wAC9'),
        x = a('hqKg'),
        A = a('0KEI'),
        k = function (e, t) {
          return t.match.params.alias
        },
        L = function (e, t) {
          return Object(x.createSelector)(k, function (e) {
            return e
              ? (function (e) {
                  return Object(I.a)({
                    contextSuffix: 'BIRDWATCH_CONTRIBUTOR_NOTES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Birdwatch.fetchBirdwatchContributorNotesSlice
                    },
                    getEndpointParams: function (t) {
                      return S()(S()({}, t), {}, { alias: e })
                    },
                    sliceKey: 'birdwatchContributorNotesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        O = function (e, t) {
          return C.p(e, k(0, t))
        },
        B = function (e, t) {
          return C.o(e, k(0, t))
        },
        N = function (e, t) {
          return C.v(e)
        },
        M = Object(f.a)()
          .propsFromState(function () {
            return {
              alias: k,
              notesSlice: L(),
              ratingsData: O,
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
        P = a('W6+M'),
        R = a('BcsE'),
        F = a('yoO3'),
        D = a('7JQg'),
        H = a('VS6U'),
        j = a('FS1z'),
        U = a('aITJ'),
        z = a('nymP'),
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
        de = ee.a.ff746f63,
        ue = ee.a.hc19704b,
        pe = ee.a.j44125ee,
        he = ee.a.da55067b,
        be = o.a.createElement(
          ee.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.a.createElement(V.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, ee.a.j1a30557),
        ),
        me = { label: ue, preferredHorizontalOrientation: 'start' },
        fe = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        ve = function (e) {
          var t = o.a.useContext(c.a).featureSwitches,
            a = e.alias,
            n = e.contributorBadgeData,
            i = e.createLocalApiErrorHandler,
            d = e.fetchBirdwatchProfile,
            u = e.fetchShowAliasSelfSelect,
            p = e.fetchUserAlias,
            h = e.history,
            b = e.notesSlice,
            m = e.ratingsData,
            f = e.showAliasSelfSelect,
            v = e.userAlias,
            g = o.a.useState(f),
            w = r()(g, 2),
            C = w[0],
            T = w[1],
            S = v === a
          o.a.useEffect(
            function () {
              u().catch(i())
            },
            [i, u],
          ),
            o.a.useEffect(
              function () {
                a && d(a).catch(i())
              },
              [i, d, a],
            ),
            o.a.useEffect(
              function () {
                p().catch(i())
              },
              [i, p],
            ),
            o.a.useEffect(
              function () {
                T(f)
              },
              [f],
            )
          var I,
            x,
            A,
            k,
            L,
            O,
            B,
            N,
            M,
            $ = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            ue = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            ve = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            we = o.a.useMemo(
              function () {
                return { page: 'birdwatch', section: $ ? 'user_notes_participant' : 'user_notes' }
              },
              [$],
            ),
            ye = o.a.createElement(K.a, { header: pe, message: he }),
            Ee = o.a.createElement(z.a, null),
            _e = function (e) {
              return o.a.createElement(
                W.a,
                { key: e },
                o.a.createElement(y, { noteId: e, showPivot: S, showRating: !1, showTweet: !0 }),
                o.a.createElement(q.a, null),
              )
            },
            Ce = function () {
              return S ? Ee : ye
            },
            Te = S ? re : ie,
            Se = ve && C && S,
            Ie = ve ? void 0 : '@'.concat(a)
          return o.a.createElement(
            D.c,
            { namespace: we },
            o.a.createElement(
              F.a,
              null,
              o.a.createElement(H.a, {
                TabBar: _.a,
                backLocation: '/i/birdwatch',
                history: h,
                logoButton: o.a.createElement(o.a.Fragment, null),
                primaryContent: Se
                  ? o.a.createElement(l.a, {
                      onAliasSelected: function (e) {
                        h.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((x = null == m ? void 0 : m.helpful),
                    (A = null == m ? void 0 : m.somewhatHelpful),
                    (k = null == m ? void 0 : m.notHelpful),
                    (L = void 0 !== x),
                    (O = L && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (B = n || []),
                    (N = o.a.createElement(ae.a, { style: ge.badgeStandingIcon })),
                    (M = o.a.createElement(X.a, { hoverLabel: me, icon: N, link: fe, style: ge.badgeStandingButton })),
                    o.a.createElement(
                      W.a,
                      null,
                      U.b.isTwitterApp() &&
                        o.a.createElement(
                          W.a,
                          { style: ge.birdwatchProfileContainer },
                          o.a.createElement(
                            V.b,
                            { numberOfLines: 1, size: 'headline1', style: ge.birdwatchProfileTitle, weight: 'bold' },
                            Te,
                          ),
                          o.a.createElement(q.a, null),
                        ),
                      ve &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(Q.a, {
                            Icon: ne.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ge.genericBirdwatchProfileIcon,
                          }),
                          o.a.createElement(Z.b, { style: ge.profileText, text: Object(P.a)(a) }),
                          o.a.createElement(V.b, { color: 'gray700', style: ge.birdwatchAliasDisclaimerText }, be),
                          o.a.createElement(q.a, null),
                        ),
                      O &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(Z.b, { rightControl: M, text: se }),
                          o.a.createElement(
                            W.a,
                            { style: ge.awardsContainer },
                            B.length > 0
                              ? o.a.createElement(J.a, null, function (e) {
                                  var t = e.windowWidth
                                  return o.a.createElement(
                                    W.a,
                                    {
                                      style:
                                        t >= Y.a.theme.breakpoints.medium
                                          ? ge.badgeContainerLarge
                                          : ge.badgeContainerSmall,
                                    },
                                    B &&
                                      B.map(function (e, t) {
                                        return o.a.createElement(s.a, { badgeType: e, key: t })
                                      }),
                                  )
                                })
                              : o.a.createElement(
                                  W.a,
                                  { style: ge.awardSection },
                                  o.a.createElement(Q.a, {
                                    Icon: function () {
                                      return o.a.createElement(te.a, { style: ge.noAward })
                                    },
                                    size: 'large',
                                    style: [ge.ratingAward, ge.noAwardThumbnail],
                                  }),
                                  o.a.createElement(V.b, { size: 'subtext1', style: ge.noAwardText }, de),
                                ),
                          ),
                        ),
                      L &&
                        S &&
                        o.a.createElement(
                          W.a,
                          { style: ge.ratingsContainer },
                          o.a.createElement(V.b, { style: ge.ratingsReceived, weight: 'bold' }, le),
                          o.a.createElement(
                            W.a,
                            { style: ge.ratingNumbers },
                            Object(R.a)(x)
                              ? o.a.createElement(
                                  W.a,
                                  { style: ge.helpfulStats },
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
                            ue && Object(R.a)(A)
                              ? o.a.createElement(
                                  W.a,
                                  { style: ge.helpfulStats },
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
                            Object(R.a)(k)
                              ? ((I = k),
                                o.a.createElement(
                                  G.a,
                                  null,
                                  o.a.createElement(
                                    ee.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    o.a.createElement(G.a.Value, null, ee.a.d551bc31({ count: I })),
                                    o.a.createElement(G.a.Label, null, ee.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      b
                        ? o.a.createElement(
                            o.a.Fragment,
                            null,
                            o.a.createElement(Z.b, { text: S ? oe : ce }),
                            o.a.createElement(j.a, { module: b, noItemsRenderer: Ce, renderer: _e }),
                          )
                        : null,
                    )),
                sidebarContent: o.a.createElement(E.a, null),
                subtitle: Ie,
                title: Te,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ge = Y.a.create(function (e) {
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
        we = M(ve)
      t.default = we
    },
    nIpi: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchDownloadDataScreen', function () {
          return R
        })
      a('2G9S'), a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('vZpt'),
        o = a('L5MV'),
        c = a('MvLc'),
        l = a('hqKg'),
        s = a('rxPX'),
        d = a('0KEI'),
        u = function (e, t) {
          return c.u(e)
        },
        p = Object(s.a)()
          .propsFromState(function () {
            return {
              publicData: Object(l.createSelector)(u, function (e) {
                return e
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchPublicData: c.i,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'download_data' }),
        h = a('89Im'),
        b = a('tI3i'),
        m = a.n(b),
        f = a('yoO3'),
        v = a('VS6U'),
        g = a('MWbm'),
        w = a('t62R'),
        y = a('/yvb'),
        E = a('0yYu'),
        _ = a('6vad'),
        C = a('rHpw'),
        T = a('3XMw'),
        S = a.n(T),
        I = S.a.cb1adfa0,
        x = S.a.e72533f5,
        A = S.a.g652cada,
        k = S.a.g4d71b5e,
        L = S.a.b8a27fe1,
        O = S.a.j1c99e0f,
        B = S.a.i6f69313,
        N = S.a.h786cd79,
        M = S.a.d0fe8052,
        P = r.a.createElement(
          w.b,
          { color: 'gray700', size: 'subtext2' },
          r.a.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            r.a.createElement(
              w.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              S.a.g0cacb73,
            ),
          ),
        ),
        R = function (e) {
          var t,
            a,
            n,
            c = e.analytics,
            l = e.createLocalApiErrorHandler,
            s = e.fetchPublicData,
            d = e.history,
            u = e.publicData
          r.a.useEffect(
            function () {
              s().catch(l())
            },
            [l, s],
          )
          var p,
            b = null == u || null === (t = u.notes) || void 0 === t ? void 0 : t.urls,
            C = null == b ? void 0 : b.length,
            T = null == u || null === (a = u.ratings) || void 0 === a ? void 0 : a.urls,
            R = null == T ? void 0 : T.length,
            D = null == u || null === (n = u.notes) || void 0 === n ? void 0 : n.created_at,
            H = function (e, t, a, n) {
              return (
                m()(void 0 !== a, 'totalFiles must be defined'),
                r.a.createElement(
                  g.a,
                  { key: t, style: [F.fileSection, t > 1 && F.fileSectionNotFirst] },
                  r.a.createElement(
                    w.b,
                    null,
                    r.a.createElement(S.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: a }),
                  ),
                  r.a.createElement(y.a, {
                    icon: r.a.createElement(h.a, null),
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
                g.a,
                { style: F.headerWrapper },
                r.a.createElement(w.b, { size: 'title4', style: F.textSection, weight: 'heavy' }, x),
                r.a.createElement(w.b, { color: 'gray700', style: F.textSection }, A),
                r.a.createElement(
                  w.b,
                  { color: 'gray700' },
                  k,
                  r.a.createElement(
                    w.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    L,
                  ),
                  '.',
                ),
              ),
              r.a.createElement(E.a, null),
              r.a.createElement(_.b, { text: O }),
              b && (null == b ? void 0 : b.length) > 0
                ? b.map(function (e, t) {
                    return H(e, t + 1, C, 'notes')
                  })
                : r.a.createElement(w.b, { color: 'gray700', style: F.emptyData }, N),
              r.a.createElement(E.a, null),
              r.a.createElement(_.b, { text: B }),
              T && (null == T ? void 0 : T.length) > 0
                ? T.map(function (e, t) {
                    return H(e, t + 1, R, 'ratings')
                  })
                : r.a.createElement(w.b, { color: 'gray700', style: F.emptyData }, M),
              r.a.createElement(E.a, null),
              r.a.createElement(
                g.a,
                { style: F.footerText },
                r.a.createElement(
                  w.b,
                  { color: 'gray700', style: F.dateGenerated },
                  r.a.createElement(S.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((p = D),
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
                P,
              ),
            )
          return r.a.createElement(
            f.a,
            null,
            r.a.createElement(v.a, {
              TabBar: o.a,
              history: d,
              logoButton: r.a.createElement(r.a.Fragment, null),
              primaryContent: j,
              sidebarContent: r.a.createElement(i.a, null),
              title: I,
              withTweetButton: !1,
            }),
          )
        },
        F = C.a.create(function (e) {
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
        D = p(R)
      t.default = D
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
        d = l.a.i859a9d3,
        u = l.a.ff3e0be2,
        p = l.a.e9f1fbcb,
        h = l.a.db08295d,
        b = l.a.f4d67927,
        m = l.a.eae6767a
      t.a = function () {
        var e = r.a.useContext(i.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return r.a.createElement(o.a, {
          buttonLink: e ? s : '/i/flow/join-birdwatch',
          buttonText: e ? d : u,
          header: e ? p : h,
          message: e ? m : b,
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
        d = a('7MdP'),
        u = ['__typename', 'facepile', 'topic'],
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
                  o = c()(a, u),
                  l = n && Object(d.b)(e, n),
                  s = Object(d.a)(e, i)
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
                    navBar: { topicId: Object(d.a)(e, a.topic), clientEventInfo: a.clientEventInfo },
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
        h = a('WpDa'),
        b = a('IcAo')
      t.a = function (e) {
        var t,
          a,
          n =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(h.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (a = t.initialTimeline) &&
                void 0 !== a &&
                a.timeline.timeline
              ? Object(h.a)(t.initialTimeline.timeline.timeline)
              : Object(h.a)(i.c),
          o = p(e),
          c = o.globalObjects,
          l = o.pageConfiguration
        return r()(r()({}, n), {}, { globalObjects: Object(b.a)(c, n.globalObjects), pageConfiguration: l })
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
        d = a.n(s),
        u = a('1Pcy'),
        p = a.n(u),
        h = a('5Yy7'),
        b = a.n(h),
        m = a('2VqO'),
        f = a.n(m),
        v = a('KEM+'),
        g = a.n(v),
        w = (a('2G9S'), a('ERkP')),
        y = a.n(w),
        E = a('38/B'),
        _ = a('t62R'),
        C = a('/yvb'),
        T = a('piX5'),
        S = a('3XMw'),
        I = a.n(S),
        x = a('tI3i'),
        A = a.n(x),
        k = a('oQhu'),
        L = a('rHpw'),
        O = a('aITJ'),
        B = a('MWbm'),
        N = a('n5fo'),
        M = a('5emT'),
        P = a('Oib4'),
        R = a('WtWS'),
        F = a('ioan'),
        D = [
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
        H = function (e) {
          return e.length
        },
        j = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H
          return t(e)
        },
        U = I.a.de540c32,
        z = I.a.b4abfdb3,
        W = (function (e) {
          b()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              g()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              g()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              g()(
                p()(n),
                '_getTextInputStyle',
                Object(k.a)(function (e) {
                  return [V.root, !e && V.disabled]
                }),
              ),
              g()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === a && t ? (r ? 'text' : 'password') : a
              }),
              g()(p()(n), '_calculateLength', function (e) {
                return j(e, n.props.calculateLength)
              }),
              g()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              g()(p()(n), '_isInvalidNumber', function () {
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
              g()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              g()(p()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur,
                  a = e.currentTarget.value,
                  r = n._calculateLength(a),
                  i = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              g()(p()(n), '_handleChange', function (e) {
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
              g()(p()(n), '_handleFocus', function () {
                var e = n.props.onFocus
                n.setState({ isFocused: !0 }), e && e()
              }),
              g()(p()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !i || (e.preventDefault(), i(e))
              }),
              g()(p()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                O.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              g()(p()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                O.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              g()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              g()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              g()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
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
              g()(p()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              g()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              g()(p()(n), '_getAdjustedMaxLength', function () {
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
                actualCount: H(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              n
            )
          }
          return (
            d()(
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
                            T.a.border,
                            K.textInputFormStyle,
                            c && T.a.invalidBorderColor,
                            o && c && T.a.focusedBorderInvalid,
                            o && !c && T.a.focusedBorderValid,
                            !a && T.a.disabled,
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
                          !E.a.reducedMotionEnabled && K.transition,
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
                      i = (e.style, e.type, e.validLength, o()(e, D))
                    return y.a.createElement(
                      B.a,
                      { style: V.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      y.a.createElement(
                        _.b,
                        { size: 'headline1', style: V.wrapper },
                        y.a.createElement(
                          F.a,
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
                            accessibilityLabel: n ? z : U,
                            focusable: !0,
                            hoverLabel: { label: n ? z : U },
                            icon: n ? y.a.createElement(N.a, null) : y.a.createElement(M.a, null),
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
                      n = t && I.a.ia24dc8c(t),
                      r = I.a.ia24dc8c(e)
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
                      ? y.a.createElement(P.a, { style: [K.validationIcon, T.a.invalidColor] })
                      : y.a.createElement(R.a, { style: [K.validationIcon, T.a.validColor] })
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
      g()(W, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (W.propTypes = {})
      var V = L.a.create(function (e) {
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
        K = L.a.create(function (e) {
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
          return M
        })
      var n,
        r = a('ERkP'),
        i = a.n(r),
        o = a('v6aA'),
        c = a('vZpt'),
        l = a('L5MV'),
        s = (a('KqXw'), a('WNMA'), a('owBv')),
        d = a('ZNT5'),
        u = a('hqKg'),
        p = a('rxPX'),
        h = function (e, t) {
          var a, n
          return (
            (null === (a = t.match) || void 0 === a || null === (n = a.params) || void 0 === n ? void 0 : n.tabId) ||
            void 0
          )
        },
        b = function () {
          return Object(u.createSelector)(h, function (e) {
            return (function (e) {
              return Object(d.a)({
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
          return { module: b(), selectedTabId: h }
        }),
        f = a('yiKp'),
        v = a.n(f),
        g = a('KEM+'),
        w = a.n(g),
        y = a('8UdT'),
        E = a('ezF+'),
        _ =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          {
            loader: function () {
              return a.e(230).then(a.bind(null, 'SdtT'))
            },
            loaderKey: 'pivotLabelLoader',
            strategy: a('XBtf').a.Critical,
          }),
        C = E.e(_),
        T = a('S/Qv'),
        S = a('5Y9N'),
        I = a('Yy//'),
        x =
          ((n = {}),
          w()(n, y.b.Label, C),
          w()(n, y.b.Message, Object(T.a)({})),
          w()(n, y.b.Tweet, Object(I.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          n),
        A = v()(v()({}, Object(S.a)({})), x),
        k = a('3XMw'),
        L = a.n(k),
        O = a('UZjl'),
        B = L.a.ha8209bb,
        N = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        M = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            a = e.history,
            n = e.module,
            r = e.selectedTabId,
            s = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            d = i.a.useMemo(
              function () {
                var e = null != r ? r : 'global_timeline'
                return { page: 'birdwatch', section: s ? ''.concat(e, '_participant') : e }
              },
              [s, r],
            )
          return i.a.createElement(O.a, {
            TabBar: l.a,
            entryConfiguration: A,
            getTabLink: N,
            history: a,
            initialPageNamespace: d,
            logoButton: i.a.createElement(i.a.Fragment, null),
            module: n,
            selectedTabId: r,
            sidebarContent: i.a.createElement(c.a, null),
            timelinePrefix: 'birdwatch-',
            title: B,
            withTweetButton: !1,
          })
        },
        P = m(M)
      t.default = P
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
        d = a('G6rE'),
        u = a('rxPX'),
        p = a('0KEI'),
        h = function (e, t) {
          return d.e.select(e, '1319036828964454402')
        },
        b = Object(u.a)()
          .propsFromState(function () {
            return { birdwatchAccount: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: d.e.fetchManyIfNeeded,
            }
          }),
        m = a('FQwk'),
        f = a('MWbm'),
        v = a('t62R'),
        g = a('6vad'),
        w = a('/yvb'),
        y = a('h0NW'),
        E = a('rC8y'),
        _ = a('rHpw'),
        C = a('3XMw'),
        T = a.n(C),
        S = a('yygM'),
        I = a('QDet'),
        x = a('wz7L'),
        A = a('88ay'),
        k = T.a.de962615,
        L = T.a.cbfa448b,
        O = T.a.b171d7c4,
        B = '1319036828964454402',
        N = T.a.ab23a972,
        M = T.a.gfa725ae,
        P = T.a.eac7b6ab,
        R = T.a.b0381cfb,
        F = T.a.f0addddc,
        D = T.a.c68f3bcf,
        H = T.a.dfb1f498,
        j = l.a.createElement(
          v.b,
          null,
          l.a.createElement(
            T.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            l.a.createElement(
              v.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              T.a.b8a36128,
            ),
          ),
        ),
        U = _.a.create(function (e) {
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
        z = b(function (e) {
          var t = e.birdwatchAccount,
            a = e.createLocalApiErrorHandler,
            n = e.fetchUsersIfNeeded,
            i = l.a.useContext(s.a).featureSwitches,
            c = l.a.useState(null == t ? void 0 : t.following),
            d = o()(c, 2),
            u = d[0],
            p = d[1],
            h = i.isTrue('responsive_web_birdwatch_note_writing_enabled')
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
          var b = l.a.createElement(
              f.a,
              { style: U.module },
              l.a.createElement(g.b, { text: k }),
              l.a.createElement(
                f.a,
                { style: [U.moduleBody, U.row] },
                l.a.createElement(v.b, { color: 'gray700', style: U.text }, L),
                l.a.createElement(
                  w.a,
                  { accessibilityLabel: O, link: '/i/flow/join-birdwatch', type: 'brandFilled' },
                  O,
                ),
              ),
            ),
            _ = l.a.createElement(
              f.a,
              { style: U.module },
              l.a.createElement(g.b, { text: N }),
              l.a.createElement(
                f.a,
                null,
                l.a.createElement(A.b, { decoration: A.e, displayMode: 'UserCompact', userId: B, withFollowsYou: !0 }),
              ),
            ),
            C = function (e) {
              return l.a.createElement(f.a, { style: U.valueItem }, l.a.createElement(v.b, { color: 'gray700' }, e))
            },
            T = {
              accessibilityLabel: M,
              items: [
                { label: '', decoration: l.a.createElement(S.a, { style: U.valueIcon }), description: C(P) },
                { label: '', decoration: l.a.createElement(I.a, { style: U.valueIcon }), description: C(R) },
                { label: '', decoration: l.a.createElement(x.a, { style: U.valueIcon }), description: C(F) },
              ],
            },
            z = l.a.createElement(
              f.a,
              { style: U.module },
              l.a.createElement(g.b, { text: M }),
              l.a.createElement(
                f.a,
                { style: U.valuesGroup },
                l.a.createElement(y.a, r()({}, T, { containerStyle: U.infoItemContainer })),
              ),
              l.a.createElement(
                f.a,
                { style: U.footer },
                l.a.createElement(E.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: D,
                  withBottomRadius: !0,
                }),
              ),
            ),
            W = l.a.createElement(
              f.a,
              { style: U.module },
              l.a.createElement(g.b, { text: H }),
              l.a.createElement(f.a, { style: U.moduleBody }, j),
            )
          return l.a.createElement(
            f.a,
            { accessibilityRole: 'complementary', style: U.root },
            h ? null : b,
            u ? null : _,
            z,
            W,
            l.a.createElement(
              f.a,
              { style: [U.module, U.transparentModule] },
              l.a.createElement(m.a, { textColor: 'gray700', withOverflow: !0 }),
            ),
          )
        })
      t.a = z
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
    xZXe: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return ze
      })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        c = a('RhWx'),
        l = a.n(c),
        s = a('VrFO'),
        d = a.n(s),
        u = a('Y9Ll'),
        p = a.n(u),
        h = a('1Pcy'),
        b = a.n(h),
        m = a('5Yy7'),
        f = a.n(m),
        v = a('2VqO'),
        g = a.n(v),
        w = a('KEM+'),
        y = a.n(w),
        E = a('yiKp'),
        _ = a.n(E),
        C =
          (a('2G9S'),
          a('0zG9'),
          a('TJCb'),
          a('7x/C'),
          a('DZ+c'),
          a('lTEL'),
          a('87if'),
          a('kYxP'),
          a('Cm4o'),
          a('KrtT'),
          a('vrRf'),
          a('ERkP')),
        T = a.n(C),
        S = a('ZyXd'),
        I = a('TZwD'),
        x = (a('ho0z'), a('RqPI')),
        A = a('1YZw'),
        k = a('Ig1G'),
        L = a('6rlp'),
        O = a('0pUJ'),
        B = a('Fmkq'),
        N = a('j7tW'),
        M = a('Zejx'),
        P = a('XOJV'),
        R = a('D5n3'),
        F = a('G6rE'),
        D = a('jL08'),
        H = a('eSoz'),
        j = a('rxPX'),
        U = a('0KEI'),
        z = a('EGrD'),
        W = a('x5Pi'),
        V = a('P1r1'),
        K = function (e, t) {
          var a = t.tweetId
          return Object(N.b)(e, a)
        },
        G = function (e, t) {
          return t.tweetId
        },
        q = function (e, t) {
          var a = t.urtAdvertiser,
            n = t.urtPromotedContent
          if (e && n) {
            var r = e.promoted_content
            return _()(
              _()({}, e),
              {},
              {
                promoted_content: _()(
                  {
                    adMetadataContainer: n.adMetadataContainer,
                    disclosure_type: n.disclosureType,
                    experiment_values: n.experimentValues,
                    impression_id: n.impressionId,
                    advertiser: a ? { id_str: a.id_str } : void 0,
                    advertiser_name: (null == a ? void 0 : a.name) || void 0,
                    click_tracking_info: n.clickTrackingInfo,
                  },
                  r,
                ),
              },
            )
          }
          return e
        },
        X = function (e, t) {
          return t.socialContext
        },
        Q = function (e, t) {
          var a = t.socialContext,
            n = a && a.topicContext
          return n ? M.a.select(e, n.topicId) : void 0
        },
        Z = function (e, t) {
          var a = t.tweetId,
            n = a && P.a.select(e, a)
          return n ? Object(H.g)(e, n) : void 0
        },
        J = function (e, t) {
          var a = P.a.createHydratedTweetSelector(G)(e, t),
            n = null == a ? void 0 : a.quoted_status
          return n ? Object(H.g)(e, n) : void 0
        },
        Y = function (e, t) {
          return t.urtPromotedContent
        },
        $ = function (e, t) {
          var a = t.urtPromotedContent
          return a ? F.e.select(e, a.advertiserId) : null
        },
        ee = function (e, t) {
          return t.contextTweetId
        },
        te = Object(j.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: z.c,
              articleDomains: D.b,
              community: Z,
              contextTweet: P.a.createHydratedTweetSelector(ee),
              displaySensitiveMedia: V.k,
              explicitSocialContext: X,
              isNsfwUser: V.t,
              isPinned: K,
              loggedInUser: F.e.selectLoggedInUser,
              quoteTweetCommunity: J,
              topic: Q,
              tweet: P.a.createHydratedTweetSelector(G),
              urtAdvertiser: $,
              urtPromotedContent: Y,
              userCountry: x.y,
              userLanguage: x.o,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n,
              r = e.adFreeArticleDomains,
              i = e.articleDomains,
              o = e.community,
              c = e.contextTweet,
              l = e.displaySensitiveMedia,
              s = e.explicitSocialContext,
              d = e.isNsfwUser,
              u = e.isPinned,
              p = e.loggedInUser,
              h = e.quoteTweetCommunity,
              b = e.topic,
              m = e.tweet,
              f = e.urtAdvertiser,
              v = e.urtPromotedContent,
              g = e.userCountry,
              w = e.userLanguage,
              y = m && Object(W.f)(m, null == p ? void 0 : p.id_str),
              E =
                null == m ||
                null === (t = m.card) ||
                void 0 === t ||
                null === (a = t.binding_values) ||
                void 0 === a ||
                null === (n = a.domain) ||
                void 0 === n
                  ? void 0
                  : n.string_value,
              _ = Object(D.a)(i, E),
              C = null == m ? void 0 : m.quoted_status,
              T = C ? Object(W.f)(C, null == p ? void 0 : p.id_str, h) : void 0,
              S = T && Object(W.e)(T),
              I = Object(k.c)(null == o ? void 0 : o.role)
            return {
              adFreeArticleDomains: r,
              contextTweet: c,
              displaySensitiveMedia: l,
              isCardArticle: _,
              isNsfwUser: d,
              isPinned: u,
              loggedInUser: p,
              promotedContentAdvertiser: f || void 0,
              quoteTweetSocialContextProps: S,
              socialContext: s || y,
              topic: b,
              tweet: q(m, { urtPromotedContent: v, urtAdvertiser: f }),
              userCountry: g,
              userLanguage: w,
              withCommunityModerationAuthority: I,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: A.b,
              block: F.e.block,
              createLocalApiErrorHandler: Object(U.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_CONTAINER_CONTEXT',
              ),
              log: L.a,
              fetchAdFreeToken: z.a,
              fetchCommunityIfNeeded: H.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: M.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: z.b,
              mute: O.a,
              onUnretweet: R.a,
              richScribeAction: B.richScribeAction,
              setArticlesVisited: D.e,
              undoTopicNotInterested: M.a.undoNotInterested,
              unblock: F.e.unblock,
              unmute: F.e.unmute,
            }
          })
          .withAnalytics(),
        ae = a('6bZg'),
        ne = a('LSr9'),
        re = a('3XMw'),
        ie = a.n(re),
        oe = a('iFPY'),
        ce = a('hACr'),
        le = a('jQy5'),
        se = a('3IPs'),
        de = a('Rp9C'),
        ue = a('uArA'),
        pe = a('X04g'),
        he = a('xM7j'),
        be = a('BLtI'),
        me = a('3zeG'),
        fe = a('IO7v'),
        ve = a('MWbm'),
        ge = a('v6aA'),
        we = a('E0cF'),
        ye = a('OIC0'),
        Ee = a('+pKb'),
        _e = a('/Ikv'),
        Ce = a('Z6aJ'),
        Te = a('lHOd'),
        Se = a('7JQg'),
        Ie = a('cFuS'),
        xe = a('24HD'),
        Ae = a('4hQ9'),
        ke = a('fz3c'),
        Le = a('gZV8'),
        Oe = (function (e) {
          f()(a, e)
          var t = g()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(b()(e), '_handlePlacementChange', function (t) {
                var a = e.props,
                  n = a.id,
                  r = a.onFullyVisible,
                  i = a.onVisible
                e._lastVisibleId !== n && t.verticalOverlap() >= 1 && ((e._lastVisibleId = n), i(t))
                var o = t.visibleFraction() >= Le.c,
                  c = t.item.height > t.viewport.height,
                  l = t.verticalOverlap() === t.viewport.height || (c && t.visibleFraction() >= Le.d)
                e._lastFullyVisibleId !== n && (o || l) && ((e._lastFullyVisibleId = n), r && r(t))
              }),
              y()(b()(e), '_handleLayout', function (t) {
                var a = t.nativeEvent.layout,
                  n = a.height,
                  r = a.width,
                  i = { width: r, height: n }
                if (e._prevLayout && (e._prevLayout.width !== r || e._prevLayout.height !== n)) {
                  var o = e.props.onResize
                  o && o(e._prevLayout, i)
                }
                e._prevLayout = i
              }),
              e
            )
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.id
                  return T.a.createElement(
                    Le.e,
                    { key: a, onLayout: this._handleLayout, onPlacementChange: this._handlePlacementChange },
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(T.a.PureComponent),
        Be = a('fs1G'),
        Ne = a('oQhu'),
        Me = a('mN6z'),
        Pe = a('Cqiq'),
        Re = ie.a.f277e949,
        Fe = ie.a.e4c6c309,
        De = (function (e) {
          f()(a, e)
          var t = g()(a)
          function a(e, n) {
            var r, i
            d()(this, a),
              (i = t.call(this, e, n)),
              y()(b()(i), '_shouldLogPromotedImpression', je.bind(null, i.context.featureSwitches)),
              y()(b()(i), '_isProbablyRemovedByAdBlocker', He.bind(null, i.context.featureSwitches)),
              y()(
                b()(i),
                '_isArticleNudgeEnabled',
                i.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              y()(
                b()(i),
                '_isCompatibilityScribeEnabled',
                i.context.featureSwitches.isTrue('responsive_web_extension_compatibility_scribe'),
              ),
              y()(b()(i), '_isCommunitiesEnabled', i.context.featureSwitches.isTrue('c9s_enabled')),
              y()(
                b()(i),
                '_hasClaimsForAdFreeArticles',
                null === (r = i.context.userClaims) || void 0 === r
                  ? void 0
                  : r.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              y()(b()(i), '_renderBlockOrUnblockConfirmationSheet', function () {
                var e = i.props.tweet.user
                return Object(xe.j)({
                  confirmation: Object(xe.h)(e),
                  onClose: i._handleBlockOrUnblockConfirmClose,
                  handleConfirm: i._handleBlockOrUnblockUserConfirm,
                })
              }),
              y()(b()(i), '_handleShowReportedTweet', function () {
                i.setState({ displayReported: !0, enableKeyboardShortcuts: !1 })
              }),
              y()(b()(i), '_handleUnretweet', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.onUnretweet,
                  n = e.tweet
                a(we.a.getOriginalTweet(n).id_str, { promotedContent: n.promoted_content }).catch(t(fe.a))
              }),
              y()(b()(i), '_getShortcutKeyHandlers', function () {
                var e = i._getMuteOrUnmuteAction(),
                  t = e.onClick,
                  a = e.shortcutKey,
                  n = i._getBlockOrUnblockAction().shortcutKey,
                  r = i.context.loggedInUserId === i.props.tweet.user.id_str
                return _()(_()({}, a && y()({}, a, t)), n && !r && y()({}, n, i._handleBlockOrUnblockConfirmOpen))
              }),
              y()(b()(i), '_handleBlockOrUnblockConfirmOpen', function () {
                i.setState({ showBlockOrUnblockConfirmation: !0 })
              }),
              y()(b()(i), '_handleBlockOrUnblockConfirmClose', function () {
                i.setState({ showBlockOrUnblockConfirmation: !1 })
              }),
              y()(b()(i), '_handleBlockOrUnblockUserConfirm', function () {
                var e = i._getBlockOrUnblockAction().onClick
                i._handleBlockOrUnblockConfirmClose(), e && e()
              }),
              y()(b()(i), '_getBaseTweetProps', function () {
                var e = i.props,
                  t = e.contextualClientEventInfo,
                  a = e.conversationTreeMetadata,
                  n = e.feedbackItems,
                  r = e.focalTweetId,
                  o = e.forwardPivotInfo,
                  c = e.isNsfwUser,
                  l = e.isPinned,
                  s = e.onTweetDismiss,
                  d = e.ruxContext,
                  u = e.saveAsRecentSearch,
                  p = e.scribeData,
                  h = e.shouldStoreTypeaheadItem,
                  b = e.socialContext,
                  m = e.topicFollowPrompt,
                  f = e.tweet,
                  v = e.userCountry,
                  g = e.userLanguage,
                  w = e.withActionsDisabled,
                  y = e.withCommunityModerationAuthority,
                  E = e.withCurationMenu,
                  _ = e.withHideReply,
                  C = e.withMuteConversation,
                  T = e.withUnhideReply,
                  S = e.withViewHiddenReplies,
                  I = we.a.getOriginalTweet(f),
                  x = i._getPromotedContent(),
                  A = p.items && p.items[0] && p.items[0].suggestion_details,
                  k = i._isSelected(),
                  L = I && I.card && !f.is_quote_status ? I.card.url : void 0,
                  O = i.context.loggedInUserId,
                  B = I.user.id_str === O,
                  N = !I.in_reply_to_status_id_str && B && !I.community_id_str,
                  M = i._renderConversationControlsTooltip()
                return {
                  excludeCardUrl: L,
                  inlineCalloutInfo: i._getInlineCalloutInfo(),
                  isFocal: r === f.id_str,
                  onAnalyticsClick: i._handleAnalyticsClick,
                  onAvatarClick: i._handleAvatarClick,
                  onBirdwatchNotesIconClick: i._handleBirdwatchNotesIconClick,
                  onBirdwatchNotesIconShown: i._handleBirdwatchNotesIconShown,
                  onBlur: i._handleBlur,
                  onCardLinkClick: i._handleCardLinkClick,
                  onClick: f.isPreview ? i._handlePreviewClick : i._handleTweetClick,
                  onEntityClick: i._handleEntityClick,
                  onFocus: i._handleFocus,
                  onLikeSuccess: i._handleLikeSuccess,
                  onMediaClick: f.isPreview ? i._handleEmbeddedMediaPreviewClick : i._handleEmbeddedMediaClick,
                  onMediaHashtagHighlightClick: i._handleMediaHashtagHighlightClick,
                  onModeratedIconClick: i._handleModeratedIconClick,
                  onModeratedIconShown: i._handleModeratedIconShown,
                  onPoliticalSponsorWebsiteClick: i._handlePoliticalSponsorWebsiteClick,
                  onPromoteButtonClick: i._handlePromoteButtonClick,
                  onPromoteAgainButtonClick: i._handlePromoteAgainButtonClick,
                  onPromotedDisclaimerLearnMoreClick: i._handlePromotedDisclaimerLearnMoreClick,
                  onPromotedIndicatorClick: i._handlePromotedIndicatorClick,
                  onQuoteTweetClick: i._handleQuoteTweetClick,
                  onReply: i._handleInlineReplyClick,
                  onReplyContextClick: i._handleReplyContextClick,
                  onScreenNameClick: i._handleScreenNameClick,
                  onSelfThreadClick: i._handleSelfThreadClick,
                  onSelfThreadImpression: i._handleSelfThreadImpression,
                  onUndoTopicNotInterestedClick: i._handleUndoTopicNotInterested,
                  promotedContent: x,
                  renderCurationActionMenu:
                    E && !f.isPreview
                      ? i._getRenderCurationActionMenu(
                          o && o.displayType,
                          n,
                          w,
                          c,
                          l,
                          k,
                          i._handleCaretClick,
                          s,
                          x,
                          I,
                          _,
                          y,
                          C,
                          T,
                          N,
                          S,
                          a,
                          null == t ? void 0 : t.entityToken,
                          M,
                          v,
                          g,
                        )
                      : void 0,
                  saveAsRecentSearch: u,
                  shouldStoreTypeaheadItem: h,
                  to: {
                    state: {
                      focal: I.id_str,
                      socialContext: b,
                      contextualClientEventInfo: t,
                      contextTweetId: f.id_str,
                      promotedContent: x,
                      suggestionDetails: A,
                      topicFollowPrompt: m,
                    },
                    pathname: I.permalink,
                    query: d ? { cxt: d } : void 0,
                  },
                }
              }),
              y()(b()(i), '_getReaderModeTweetProps', function () {
                var e,
                  t = i.props,
                  a = t.contextualClientEventInfo,
                  n = t.ruxContext,
                  r = t.scribeData,
                  o = t.socialContext,
                  c = t.topicFollowPrompt,
                  l = t.tweet,
                  s = t.tweetTextSize,
                  d = we.a.getOriginalTweet(l),
                  u = i._getPromotedContent(),
                  p = r.items && r.items[0] && r.items[0].suggestion_details
                return {
                  excludeCardUrl: null === (e = l.card) || void 0 === e ? void 0 : e.url,
                  onAnalyticsClick: Be.a,
                  onAvatarClick: Be.a,
                  onBlur: i._handleBlur,
                  onCardLinkClick: i._handleCardLinkClick,
                  onClick: l.isPreview ? i._handlePreviewClick : i._handleTweetClick,
                  onEntityClick: Be.a,
                  onFocus: i._handleFocus,
                  onMediaClick: i._handleEmbeddedMediaClick,
                  onReplyContextClick: Be.a,
                  to: {
                    state: {
                      focal: d.id_str,
                      socialContext: o,
                      contextualClientEventInfo: a,
                      contextTweetId: l.id_str,
                      promotedContent: u,
                      suggestionDetails: p,
                      topicFollowPrompt: c,
                    },
                    pathname: d.permalink,
                    query: n ? { cxt: n } : void 0,
                  },
                  tweet: l,
                  tweetTextSize: s || 'headline1',
                  withActions: !1,
                  withAvatarLink: !1,
                  withReaderModeBottomBar: !0,
                  withUserAvatar: !1,
                  withUserHoverCard: !1,
                  withUserName: !1,
                  withTimestamp: !1,
                }
              }),
              y()(b()(i), '_getInlineCalloutInfo', function () {
                var e = i.props,
                  t = e.displaySensitiveMedia,
                  a = e.isNsfwUser,
                  n = e.scribeNamespace,
                  r = e.tweet,
                  o = e.userCountry,
                  c = e.userLanguage,
                  l = i.context,
                  s = l.featureSwitches,
                  d = l.loggedInUserId
                if (
                  Object(Ae.e)({
                    displaySensitiveMedia: t,
                    featureSwitches: s,
                    isNsfwUser: a,
                    loggedInUserId: d,
                    tweet: r,
                    userCountry: o,
                    userLanguage: c,
                  })
                )
                  return Object(Ae.d)(r, n)
              }),
              y()(b()(i), '_getBlockOrUnblockAction', function () {
                var e = i.props,
                  t = e.addToast,
                  a = e.block,
                  n = e.contextualClientEventInfo,
                  r = e.createLocalApiErrorHandler,
                  o = e.tweet,
                  c = e.unblock,
                  l = o.user,
                  s = i._getPromotedContent(),
                  d = {
                    addToast: t,
                    behavioralEventEntityToken: null == n ? void 0 : n.entityToken,
                    createLocalApiErrorHandler: r,
                    scribeAction: function (e) {
                      var t = e.element
                      i._scribeAction({ element: t, action: 'click' })
                    },
                  }
                return Object(I.a)(_()(_()({}, d), {}, { block: a, unblock: c, user: l, promotedContent: s }))
              }),
              y()(b()(i), '_getMuteOrUnmuteAction', function () {
                var e = i.props,
                  t = e.addToast,
                  a = e.contextualClientEventInfo,
                  n = e.createLocalApiErrorHandler,
                  r = e.mute,
                  o = e.tweet,
                  c = e.unmute,
                  l = o.user,
                  s = {
                    addToast: t,
                    behavioralEventEntityToken: null == a ? void 0 : a.entityToken,
                    createLocalApiErrorHandler: n,
                    scribeAction: function (e) {
                      var t = e.element
                      i._scribeAction({ element: t, action: 'click' })
                    },
                  },
                  d = i._getPromotedContent()
                return Object(le.a)(_()(_()({}, s), {}, { mute: r, unmute: c, user: l, promotedContent: d }))
              }),
              y()(b()(i), '_renderConversationControlsTooltip', function () {
                var e = i.context.loggedInUserId,
                  t = i.props,
                  a = t.showMidConversationControlEducationText,
                  n = t.tweet,
                  r = we.a.getOriginalTweet(n)
                if (!r) return !1
                var o = !!r.community_id_str,
                  c = r.user.id_str === e,
                  l = r.reply_count > 0
                return !r.in_reply_to_status_id_str && c && l && !o && a
              }),
              y()(
                b()(i),
                '_getRenderCurationActionMenu',
                Object(Ne.a)(function (e, t, a, n, r, i, o, c, l, s, d, u, p, h, b, m, f, v, g, w, y) {
                  return function () {
                    return T.a.createElement(me.a, {
                      behavioralEventEntityToken: v,
                      feedbackItems: t,
                      forwardPivotDisplayType: e,
                      isDisabled: a,
                      isNsfwUser: n,
                      isPinned: r,
                      onMenuClick: o,
                      onTweetDismiss: c,
                      promotedContent: l,
                      tweet: s,
                      userCountry: w,
                      userLanguage: y,
                      withChangeConversationControls: b,
                      withChangeConversationControlsTooltip: g,
                      withCommunityModerationAuthority: u,
                      withHideReply: d,
                      withMuteConversation: p,
                      withUnhideReply: h,
                      withViewHiddenReplies: m,
                    })
                  }
                }),
              ),
              y()(
                b()(i),
                '_getDefaultScribeData',
                Object(Ne.a)(function (e, t, a, n, r, o) {
                  var c = (function (e) {
                    var t = e.clickTrackingEmbedDetails,
                      a = e.contextualScribeData,
                      n = e.isSelected,
                      r = e.overflow,
                      i = e.promotedContent,
                      o = e.scribeData,
                      c = e.tweet,
                      l = de.a.addTweetToItems(o ? o.items : [], c, i, n, r)
                    return _()(
                      _()(_()(_()({}, a || {}), o || {}), t && { click_tracking_embed_details: t }),
                      {},
                      { items: l },
                    )
                  })({
                    tweet: e,
                    promotedContent: t,
                    scribeData: a,
                    overflow: n,
                    isSelected: i._isSelected(),
                    contextualScribeData: r,
                    clickTrackingEmbedDetails: o,
                  })
                  return (
                    (i._cachedFinalScribeData && Object(Me.a)(c, i._cachedFinalScribeData)) ||
                      (i._cachedFinalScribeData = c),
                    i._cachedFinalScribeData
                  )
                }),
              ),
              y()(b()(i), '_scribeAction', function (e) {
                var t,
                  a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  o = arguments.length > 4 ? arguments[4] : void 0,
                  c = i.props,
                  s = c.analytics,
                  d = c.history,
                  u = c.richScribeAction,
                  p = c.scribeData,
                  h = c.scribeNamespace,
                  b = c.tweet,
                  m = null === (t = d.location.state) || void 0 === t ? void 0 : t.overflow,
                  f = i._getPromotedContent(),
                  v = p
                if (r) {
                  var g = de.a.getUserItem(b.user, f),
                    w = v.items ? [].concat(l()(v.items), [g]) : [g]
                  v = _()(_()({}, v), {}, { items: w })
                }
                if (o) {
                  var y = { article_details: { is_ad_free: o } },
                    E = v.items ? [].concat(l()(v.items), [y]) : [y]
                  v = _()(_()({}, v), {}, { items: E })
                }
                var C = i._getDefaultScribeData(we.a.getOriginalTweet(b), f, v, m, s.contextualScribeData, n)
                u(_()(_()({}, h), e), _()(_()({}, C), a))
              }),
              y()(b()(i), '_handlePoliticalSponsorWebsiteClick', function () {
                i._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
              }),
              y()(b()(i), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
                return function () {
                  i._scribeAction({ component: e, element: 'learn_more', action: 'click' })
                }
              }),
              y()(b()(i), '_handlePromotedIndicatorClick', function () {
                i._handleAsyncPromotedEvent(Ie.b.FOOTER_PROFILE)
              }),
              y()(b()(i), '_handleFocus', function () {
                i.setState({ enableKeyboardShortcuts: !0 })
              }),
              y()(b()(i), '_handleBlur', function () {
                i.setState({ enableKeyboardShortcuts: !1 })
              }),
              y()(b()(i), '_getPromotedContent', function () {
                var e = i.props,
                  t = e.displayPromotedContent,
                  a = e.tweet
                return t ? a.promoted_content : void 0
              }),
              y()(b()(i), '_handleImpression', function (e) {
                i._shouldLogPromotedImpression(e) && i._handleAsyncPromotedEvent(Ie.b.IMPRESSION)
              }),
              y()(b()(i), '_handleFullyVisible', function (e) {
                i._shouldLogPromotedImpression(e) && i._handleAsyncPromotedEvent(Ie.b.DWELL)
              }),
              y()(b()(i), '_handleResize', function (e, t) {
                !i._isProbablyRemovedByAdBlocker(e) &&
                  i._isProbablyRemovedByAdBlocker(t) &&
                  (S.a.recordAdBlockerPresence(),
                  i._isCompatibilityScribeEnabled && i._scribeAction({ action: 'blocked_ad' }))
              }),
              y()(b()(i), '_handleInlineReplyClick', function (e) {
                var t = i.context.loggedInUserId,
                  a = i.props,
                  n = a.history,
                  r = a.tweet,
                  o = i._getPromotedContent()
                e.preventDefault(),
                  i._scribeAction({ element: 'inline_reply', action: 'reply' }),
                  n.push({
                    state: {
                      inReplyToStatusId: r.id_str,
                      isSelfThreadReply: !!t && Object(Ae.c)({ tweet: r, loggedInUserId: t }),
                      promotedContent: o,
                    },
                    pathname: '/compose/tweet',
                  })
              }),
              y()(b()(i), '_handleLikeSuccess', function () {
                if (i.context.featureSwitches.isTrue('home_timeline_like_reactivity_enabled')) {
                  var e = i.props.onLike,
                    t = 'LikeReactionFatigue'
                  try {
                    var a = JSON.parse(window.sessionStorage.getItem(t)) || 0
                    a < i.context.featureSwitches.getNumberValue('home_timeline_like_reactivity_fatigue') &&
                      e &&
                      e().then(function (e) {
                        null != e && e.performed && window.sessionStorage.setItem(t, JSON.stringify(a + 1))
                      })
                  } catch (n) {}
                }
              }),
              y()(b()(i), '_handleReplyContextClick', function (e, t) {
                return i._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
              }),
              y()(b()(i), '_handleAsyncPromotedEvent', function (e, t) {
                var a = i.props,
                  n = a.createLocalApiErrorHandler,
                  r = a.log,
                  o = a.tweet,
                  c = i._getPromotedContent()
                if (c) {
                  var l = c.disclosure_type,
                    s = c.impression_id
                  r({
                    disclosureType: l,
                    itemId: o.id_str,
                    itemType: Ie.c.TWEET,
                    params: _()({ event: e, impression_id: s }, t),
                  }).catch(n())
                }
              }),
              y()(b()(i), '_handleModeratedIconClick', function () {
                return i._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
              }),
              y()(b()(i), '_handleModeratedIconShown', function () {
                return i._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
              }),
              y()(b()(i), '_handleBirdwatchNotesIconClick', function () {
                return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
              }),
              y()(b()(i), '_handleBirdwatchNotesIconShown', function () {
                return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
              }),
              y()(b()(i), '_handleAnalyticsClick', function () {
                i._scribeAction({ element: 'analytics', action: 'click' })
              }),
              y()(b()(i), '_handlePromoteButtonClick', function () {
                i._scribeAction({ element: 'promote', action: 'click' })
              }),
              y()(b()(i), '_handlePromoteAgainButtonClick', function () {
                i._scribeAction({ element: 'promote_again', action: 'click' })
              }),
              y()(b()(i), '_handleAvatarClick', function () {
                var e = i.props.tweet
                i._handleSaveAsRecentSearchUser(),
                  i._scribeAction(
                    { element: 'avatar', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  i._handleAsyncPromotedEvent(Ie.b.PROFILE_IMAGE_CLICK)
              }),
              y()(b()(i), '_handleCaretClick', function () {
                return i._scribeAction({ element: 'caret', action: 'click' })
              }),
              y()(
                b()(i),
                '_handleTweetClick',
                Object(ue.a)(function (e) {
                  if (!e.defaultPrevented) {
                    if ((e.stopPropagation(), window.getSelection().toString().length)) return
                    i._scribeAction({ element: 'tweet', action: 'click' }),
                      i._handleAsyncPromotedEvent(Ie.b.VIEW_DETAILS)
                  }
                }),
              ),
              y()(b()(i), '_handlePreviewClick', function (e) {
                e.preventDefault()
              }),
              y()(b()(i), '_handleEmbeddedMediaPreviewClick', function (e) {
                null == e || e.preventDefault()
              }),
              y()(b()(i), '_handleEmbeddedMediaClick', function () {
                i._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                  i._handleAsyncPromotedEvent(Ie.b.EMBEDDED_MEDIA)
              }),
              y()(b()(i), '_handleQuoteTweetClick', function () {
                i._scribeAction({ element: 'tweet', action: 'click' }), i._handleAsyncPromotedEvent(Ie.b.VIEW_DETAILS)
              }),
              y()(b()(i), '_handleEntityClick', function (e, t, a) {
                var n = i.props,
                  r = n.adFreeArticleDomains,
                  c = n.createLocalApiErrorHandler,
                  l = n.fetchAdFreeToken,
                  s = n.tweet,
                  d = Ie.a[t],
                  u = ae.a[t],
                  p = i._getPromotedContent(),
                  h = de.a.getClickTrackingEmbedDetails(p, a)
                if (d) {
                  var b =
                    d === Ie.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                      ? { url: e.currentTarget.href }
                      : void 0
                  i._handleAsyncPromotedEvent(d, b)
                }
                if (t === ye.a.MEDIA) return i._handleTweetClick(e)
                t === ye.a.URL && h && i._scribeAction({ action: Ee.b.CLICK_ID_EMBED }, {}, h)
                var m = !1
                if (i._hasClaimsForAdFreeArticles && null != a && a.expandedUrl) {
                  var f = new URL(a.expandedUrl).hostname,
                    v = new ne.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: a.embeddedUrl,
                      linkDomain: f,
                      adFreeArticleDomains: r,
                      tweetAuthorUserId: s.user.id_str,
                    }),
                    g = o()(v, 2),
                    w = g[0],
                    y = g[1]
                  w && (y(e), (m = !0))
                }
                if (t === ye.a.MENTION) {
                  var E = null != a && a.text ? [{ item_type: pe.a.ItemType.USER, name: a.text, id: a.id_str }] : void 0
                  return i._scribeAction({ action: u }, { targets: E }, void 0, void 0, m)
                }
                if (t === ye.a.HASHTAG) {
                  var _ = null != a && a.text ? [{ name: a.text }] : void 0
                  return i._scribeAction({ action: u }, { targets: _ }, void 0, void 0, m)
                }
                if (t === ye.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == a ? void 0 : a.id))
                  return i._scribeAction(
                    { element: 'interactive_text', action: u },
                    { interactive_text_details: { id: a.id } },
                    void 0,
                    void 0,
                    m,
                  )
                u && i._scribeAction({ action: u }, void 0, void 0, void 0, m)
              }),
              y()(b()(i), '_handleScreenNameClick', function () {
                var e = i.props.tweet
                i._handleSaveAsRecentSearchUser(),
                  i._scribeAction(
                    { element: 'user', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  i._handleAsyncPromotedEvent(Ie.b.SCREEN_NAME_CLICK)
              }),
              y()(b()(i), '_handleSelfThreadClick', function () {
                return i._scribeAction({ element: 'self_thread', action: 'click' })
              }),
              y()(b()(i), '_handleSelfThreadImpression', function () {
                return i._scribeAction({ element: 'self_thread', action: 'impression' })
              }),
              y()(b()(i), '_handleTopicFetch', function () {
                var e,
                  t = i.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.fetchTopicIfNeeded,
                  r = t.socialContext,
                  o = r && (null === (e = r.topicContext) || void 0 === e ? void 0 : e.topicId)
                o && n(o).catch(a())
              }),
              y()(b()(i), '_handleCommunityFetch', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchCommunityIfNeeded,
                  n = e.tweet
                if (i._isCommunitiesEnabled && n) {
                  var r,
                    o = n.community_id_str,
                    c = null === (r = n.quoted_status) || void 0 === r ? void 0 : r.community_id_str
                  o && a(o).catch(t()), c && a(c).catch(t())
                }
              }),
              y()(b()(i), '_handleUndoTopicNotInterested', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.topic,
                  n = e.undoTopicNotInterested
                i._scribeAction({ element: 'topic', action: 'un_not_interested' }), a && n(a.id).catch(t())
              }),
              y()(b()(i), '_handleCardLinkClick', function (e) {
                var t,
                  a = i.props,
                  n = a.adFreeArticleDomains,
                  r = a.analytics,
                  c = a.createLocalApiErrorHandler,
                  l = a.fetchAdFreeToken,
                  s = a.isCardArticle,
                  d = a.setArticlesVisited,
                  u = a.tweet
                if (s && i._isArticleNudgeEnabled) {
                  var p,
                    h,
                    b = null == u || null === (p = u.card) || void 0 === p ? void 0 : p.url
                  if (b)
                    d(b),
                      r.scribe({
                        component: 'article_nudge',
                        element: 'read_article',
                        action: 'click',
                        data: {
                          items: [
                            {
                              token: null == u || null === (h = u.card) || void 0 === h ? void 0 : h.url,
                              in_reply_to_tweet_id: u.id_str,
                            },
                          ],
                        },
                      })
                }
                var m = null == u || null === (t = u.card) || void 0 === t ? void 0 : t.binding_values
                if (i._hasClaimsForAdFreeArticles && m) {
                  var f = new ne.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: _e.a.getBindingValue(m, 'card_url'),
                      linkDomain: _e.a.getBindingValue(m, 'domain'),
                      adFreeArticleDomains: n,
                    }),
                    v = o()(f, 2),
                    g = v[0],
                    w = v[1]
                  g && w(e)
                }
              }),
              y()(b()(i), '_handleSaveAsRecentSearchUser', function () {
                var e = i.props,
                  t = e.saveAsRecentSearch,
                  a = e.shouldStoreTypeaheadItem,
                  n = e.tweet.user
                t && a && a(pe.a.ItemType.USER) && t({ user: { id: n.id_str, type: se.a.User } })
              }),
              y()(b()(i), '_isSelected', function () {
                var e = i.props,
                  t = e.conversationTreeMetadata,
                  a = e.tweet,
                  n = (t || {}).selectedTweet
                return n && a.id_str === n.selectedTweetId
              }),
              y()(b()(i), '_handleMediaHashtagHighlightClick', function () {
                i._handleAsyncPromotedEvent(Ie.b.HASHTAG_CLICK)
              }),
              (i.state = { displayReported: !1, enableKeyboardShortcuts: !1, showBlockOrUnblockConfirmation: !1 })
            var c = i._getPromotedContent()
            return (
              (i._shouldHidePromotedTweet =
                Ce.a.isPromoted(c) && S.a.shouldHidePromotedTweets(i.context.featureSwitches)),
              i
            )
          }
          return (
            p()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(Me.a)(this.props, e) || !Object(Me.a)(this.state, t)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldHidePromotedTweet &&
                    this._isCompatibilityScribeEnabled &&
                    this._scribeAction({ action: 'hide_promoted' }),
                    this._handleTopicFetch(),
                    this._handleCommunityFetch(),
                    this._hasClaimsForAdFreeArticles && this.props.loadAdFreeArticleDomainsFromPersistence()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    a = t.conversationPosition,
                    n = t.conversationTreeMetadata,
                    r = t.showWithheldBannerOnMyTweets,
                    i = t.tweet
                  if (!this._shouldRender())
                    return n
                      ? T.a.createElement(he.a, { conversationPosition: a, conversationTreeMetadata: n }, Fe)
                      : null
                  var o = i.user.id_str === e,
                    c = Object(Pe.b)(we.a.getOriginalTweet(i).withheld_scope),
                    l = o && !i.retweeted_status,
                    s = l && 'user' === we.a.getOriginalTweet(i).withheld_scope && !r,
                    d = Object(ke.h)(i) && !this.state.displayReported
                  return T.a.createElement(
                    T.a.Fragment,
                    null,
                    c
                      ? T.a.createElement(
                          ve.a,
                          null,
                          s ? null : this._renderWithheldTweet(),
                          l ? this._renderContent() : null,
                        )
                      : d
                      ? this._renderReportedTombstone()
                      : this._renderContent(),
                    this._renderIntentPrompt(),
                    this.state.showBlockOrUnblockConfirmation ? this._renderBlockOrUnblockConfirmationSheet() : null,
                  )
                },
              },
              {
                key: '_renderIntentPrompt',
                value: function () {
                  var e = this.props,
                    t = e.contextualClientEventInfo,
                    a = e.forwardPivotInfo,
                    n = e.history,
                    r = e.tweet,
                    i = e.tweetId
                  if (
                    r &&
                    'focal_module' === (null == t ? void 0 : t.component) &&
                    n.location.pathname.indexOf('/intent/') > -1 &&
                    n.location.query.tweet_id === i
                  )
                    return T.a.createElement(oe.a, {
                      forwardPivotInfo: a,
                      history: n,
                      location: n.location,
                      tweetId: r.id_str,
                    })
                },
              },
              {
                key: '_renderWithheldTweet',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    a = e.conversationTreeMetadata,
                    n = e.tweet,
                    r = n.user.id_str,
                    i = we.a.getOriginalTweet(n),
                    o = this.context.loggedInUserId,
                    c = !!o && o === r && i.retweeted,
                    l = i.withheld_text || i.text,
                    s = i.withheld_entities || i.entities,
                    d = n.user.id_str === o
                  return T.a.createElement(Pe.a, {
                    conversationPosition: t,
                    conversationTreeMetadata: d ? void 0 : a,
                    displayTextRange: i.display_text_range,
                    entities: s,
                    lang: i.lang,
                    onUnretweet: c ? this._handleUnretweet : void 0,
                    showUnretweetButton: c,
                    text: l,
                  })
                },
              },
              {
                key: '_renderReportedTombstone',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    a = e.conversationTreeMetadata,
                    n = e.tweet,
                    r = we.a.getOriginalTweet(n),
                    i = Object(ke.c)(r.reportingVisibility)
                  return T.a.createElement(
                    he.a,
                    {
                      actionText: Re,
                      conversationPosition: t,
                      conversationTreeMetadata: a,
                      lang: r.lang,
                      onClick: this._handleShowReportedTweet,
                    },
                    i,
                  )
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.allowDownvote,
                    n = t.analytics,
                    r = t.bookmarkFolderId,
                    i = t.contextTweet,
                    o = t.conversationPosition,
                    c = t.conversationTreeMetadata,
                    l = t.displayBlocked,
                    s = t.forwardPivotInfo,
                    d = t.hasModeratedReplies,
                    u = t.hideConversationControlsEducationText,
                    p = t.hideExclusivityInfoEducationTextInReplies,
                    h = t.hideTrustedFriendsEducationTextInReplies,
                    b = t.history,
                    m = t.hitHighlights,
                    f = t.injectedFeedbackItem,
                    v = t.innerForwardPivotInfo,
                    g = t.isReaderMode,
                    w = t.isUnread,
                    y = t.linkify,
                    E = t.loggedInUser,
                    C = t.promotedContentAdvertiser,
                    S = t.quoteTweetSocialContextProps,
                    I = t.quotedTweetTombstoneInfo,
                    x = t.replyContext,
                    A = t.scribeData,
                    k = t.scribeNamespace,
                    L = t.shouldSelfThreadIncludeAvatar,
                    O = t.socialContext,
                    B = t.topic,
                    N = t.topicFollowPrompt,
                    M = t.tweet,
                    P = t.withActions,
                    R = t.withActionsDisabled,
                    F = t.withBirdwatchPivots,
                    D = t.withCardLinks,
                    H = t.withInlineMedia,
                    j = t.withQuotedTweetLinks,
                    U = t.withRemoveFromBookmarks,
                    z = t.withSelfThread,
                    W = t.withSocialContext,
                    V = t.withUserPresence,
                    K = this.state.enableKeyboardShortcuts,
                    G = we.a.getOriginalTweet(M),
                    q = this._getPromotedContent(),
                    X = Object(Me.a)(this._cachedScribeNamespace, k)
                      ? this._cachedScribeNamespace
                      : (this._cachedScribeNamespace = k),
                    Q = null === (e = b.location.state) || void 0 === e ? void 0 : e.overflow,
                    Z = {
                      allowDownvote: a,
                      bookmarkFolderId: r,
                      contextTweet: i,
                      conversationPosition: o,
                      conversationTreeMetadata: c,
                      displayBlocked: l,
                      enableKeyboardShortcuts: K,
                      forwardPivotInfo: s,
                      hasModeratedReplies: d,
                      hideConversationControlsEducationText: u,
                      hideExclusivityInfoEducationTextInReplies: p,
                      hideTrustedFriendsEducationTextInReplies: h,
                      hitHighlights: m,
                      injectedFeedbackItem: f,
                      innerForwardPivotInfo: v,
                      linkify: y,
                      loggedInUser: E,
                      promotedContentAdvertiser: C,
                      quotedTweetTombstoneInfo: I,
                      quoteTweetSocialContextProps: S,
                      replyContext: x,
                      shouldSelfThreadIncludeAvatar: L,
                      socialContext: O,
                      topic: B,
                      topicFollowPrompt: N,
                      tweet: M,
                      withActions: P,
                      withActionsDisabled: R,
                      withBirdwatchPivots: F,
                      withCardLinks: D,
                      withInlineMedia: H,
                      withQuotedTweetLinks: j,
                      withRemoveFromBookmarks: U,
                      withSelfThread: z,
                      withSocialContext: W,
                      withUnreadStyles: w,
                      withUserPresence: V,
                    },
                    J = _()(_()({}, Z), g ? this._getReaderModeTweetProps() : this._getBaseTweetProps()),
                    Y = T.a.createElement(
                      Se.c,
                      { data: this._getDefaultScribeData(G, q, A, Q, n.contextualScribeData, void 0), namespace: X },
                      T.a.createElement(
                        ce.a,
                        { enabled: !!K, handlers: this._getShortcutKeyHandlers() },
                        T.a.createElement(be.b, J),
                      ),
                    )
                  return q
                    ? T.a.createElement(
                        Oe,
                        {
                          id: M.id_str,
                          onFullyVisible: this._handleFullyVisible,
                          onResize: this._handleResize,
                          onVisible: this._handleImpression,
                        },
                        Y,
                      )
                    : Y
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props.tweet
                  return !(
                    this._shouldHidePromotedTweet ||
                    this._tweetIsDeleted() ||
                    this._shouldHideBlockedTweet() ||
                    Object(ke.f)(e)
                  )
                },
              },
              {
                key: '_tweetIsDeleted',
                value: function () {
                  var e = this.props.tweet,
                    t = e.retweeted_status
                  return e.isDeleted || (t && t.isDeleted)
                },
              },
              {
                key: '_shouldHideBlockedTweet',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.displayBlocked,
                    r = a.focalTweetId,
                    i = a.tweet,
                    o = we.a.getOriginalTweet(i),
                    c =
                      !(null == i || null === (e = i.user) || void 0 === e || !e.blocking) ||
                      !(null == o || null === (t = o.user) || void 0 === t || !t.blocking)
                  return r !== i.id_str && !n && c
                },
              },
            ]),
            a
          )
        })(T.a.Component)
      y()(De, 'defaultProps', {
        displayBlocked: !1,
        shouldSelfThreadIncludeAvatar: !1,
        showWithheldBannerOnMyTweets: !0,
        withCardLinks: !1,
        withCurationMenu: !0,
        withRemoveFromBookmarks: !1,
        withMuteConversation: !1,
      }),
        y()(De, 'contextType', ge.a)
      var He = function (e, t) {
          return t.height <= e.getNumberValue('responsive_web_extension_compatibility_size_threshold', 50)
        },
        je = function (e, t) {
          return !(e.isTrue('responsive_web_extension_compatibility_impression_guard') && He(e, t.item))
        },
        Ue = function (e) {
          var t = T.a.useContext(Te.a)
          return e.tweet ? T.a.createElement(De, r()({}, e, { history: t, tweet: e.tweet })) : null
        }
      Ue.defaultProps = De.defaultProps
      var ze = te(Ue)
      t.b = Object(Se.a)({ component: 'tweet' })(ze)
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
