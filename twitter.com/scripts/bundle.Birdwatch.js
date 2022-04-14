;(window.webpackJsonp = window.webpackJsonp || []).push([
  [38, 7, 19, 174],
  {
    '/ZwF': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchTweetNotesScreen', function () {
          return me
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('LW0h'), a('7x/C'), a('z84I'), a('uFXj'), a('ERkP')),
        o = a.n(i),
        l = a('v6aA'),
        c = a('ZD0R'),
        s = a('vZpt'),
        d = a('L5MV'),
        u = (a('KqXw'), a('WNMA'), a('MvLc')),
        p = a('XOJV'),
        m = a('G6rE'),
        h = a('rxPX'),
        f = a('0KEI'),
        b = function (e, t) {
          return t.match.params.tweetId
        },
        v = function (e, t) {
          var a = b(0, t)
          return a ? p.a.selectHydrated(e, a) : void 0
        },
        g = function (e, t) {
          return u.s(e, b(0, t))
        },
        w = function (e, t) {
          return u.x(e, b(0, t))
        },
        y = function (e, t) {
          return u.w(e, b(0, t))
        },
        _ = Object(h.a)()
          .propsFromState(function () {
            return {
              ownNoteData: w,
              fetchStatus: y,
              loggedInUser: m.e.selectLoggedInUser,
              tweet: v,
              tweetId: b,
              notes: g,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: u.k,
              fetchTweet: p.a.fetchOneIfNeeded,
              fetchUserAlias: u.l,
            }
          }),
        E = a('kGix'),
        C = a('3XMw'),
        T = a.n(C),
        x = a('yoO3'),
        I = a('7JQg'),
        S = a('VS6U'),
        k = a('xZXe'),
        A = a('MWbm'),
        L = a('FIs5'),
        O = a('4zmP'),
        P = a('t62R'),
        R = a('0yYu'),
        B = a('htQn'),
        M = a('6vad'),
        D = a('/yvb'),
        F = a('Qwev'),
        N = a('rHpw'),
        H = a('Nh1N'),
        U = a('yiKp'),
        j = a.n(U),
        z = a('Lsrn'),
        W = a('k/Ka'),
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(W.a)(
            'svg',
            j()(
              j()({}, e),
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
        q = a('EaI7'),
        G = T.a.h8335712,
        Q = T.a.fe27c1e1,
        X = T.a.c59107c3,
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
        le = T.a.c2c4012f,
        ce = T.a.ia596d40,
        se = T.a.deff0bdd,
        de = T.a.b95dc58a,
        ue = T.a.a565833d,
        pe = o.a.createElement(L.a, { buttonLink: '/i/birdwatch/about', buttonText: Z, header: J }),
        me = function (e) {
          var t = o.a.useContext(l.a).featureSwitches,
            a = e.createLocalApiErrorHandler,
            n = e.fetchNotes,
            i = e.fetchStatus,
            u = e.fetchTweet,
            p = e.fetchUserAlias,
            m = e.history,
            h = e.loggedInUser,
            f = e.notes,
            b = e.ownNoteData,
            v = e.tweet,
            g = e.tweetId,
            w = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            y =
              t.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
              t.isTrue('responsive_web_birdwatch_rating_crowd_enabled'),
            _ = o.a.useMemo(
              function () {
                return { page: 'birdwatch', section: w ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [w],
            ),
            C = o.a.useState(b),
            T = r()(C, 2),
            L = T[0],
            N = T[1],
            U = o.a.useState(!1),
            j = r()(U, 2),
            z = j[0],
            W = j[1]
          o.a.useEffect(
            function () {
              g && (n(g).catch(a()), u(g).catch(a()))
            },
            [a, n, u, g],
          ),
            o.a.useEffect(
              function () {
                N(b)
              },
              [b],
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
                return f.filter(function (e) {
                  return 'CurrentlyRatedNotHelpful' !== e.rating_status
                })
              },
              [f],
            ),
            me = o.a.useMemo(
              function () {
                return f.filter(function (e) {
                  return 'CurrentlyRatedNotHelpful' === e.rating_status
                })
              },
              [f],
            ),
            fe = L || f.length,
            be = '/i/birdwatch/contribute/'.concat(g),
            ve =
              t.isTrue('responsive_web_birdwatch_appeals_enabled') &&
              (null == h ? void 0 : h.id_str) === (null == v ? void 0 : v.user.id_str),
            ge = o.a.createElement(
              A.a,
              { style: he.appealsCallout },
              o.a.createElement(O.a, {
                Icon: H.a,
                action: { label: Z, link: 'https://twitter.github.io/birdwatch/additional-review' },
                headline: re,
                text: ie,
                type: 'primary',
              }),
            ),
            we = o.a.createElement(
              A.a,
              { style: he.actionModuleContainer },
              o.a.createElement(
                A.a,
                { style: he.actionModule },
                y ? o.a.createElement(K, { style: he.icon }) : o.a.createElement(H.a, { style: he.icon }),
                o.a.createElement(P.b, { size: 'headline1', style: he.header, weight: 'bold' }, y ? $ : ae),
                o.a.createElement(P.b, { color: 'gray700' }, y ? ee : ne),
                y
                  ? o.a.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' } },
                      te,
                    )
                  : o.a.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/learn-more/' } },
                      Z,
                    ),
              ),
            ),
            ye = o.a.createElement(
              B.a,
              null,
              o.a.createElement(
                A.a,
                { style: he.contentWrapper },
                o.a.createElement(
                  A.a,
                  { style: he.withBottomBorder },
                  o.a.createElement(k.b, {
                    displayPromotedContent: !1,
                    tweetId: g,
                    withActions: !0,
                    withActionsDisabled: !0,
                    withBirdwatchPivots: !1,
                    withCurationMenu: !1,
                  }),
                ),
                fe
                  ? o.a.createElement(
                      o.a.Fragment,
                      null,
                      L &&
                        o.a.createElement(
                          A.a,
                          null,
                          o.a.createElement(M.b, { text: G }),
                          o.a.createElement(c.b, {
                            handleDelete: function (e) {
                              N(null)
                            },
                            note: L,
                          }),
                        ),
                      !!f.length &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(A.a, { style: he.divider }),
                          o.a.createElement(M.b, { text: Q }),
                          ve ? ge : we,
                          o.a.createElement(R.a, null),
                          J.map(function (e) {
                            return o.a.createElement(
                              o.a.Fragment,
                              { key: e.rest_id },
                              o.a.createElement(c.b, { note: e }),
                              o.a.createElement(R.a, null),
                            )
                          }),
                          (null == me ? void 0 : me.length) > 0
                            ? ((V = me),
                              z
                                ? V.map(function (e) {
                                    return o.a.createElement(
                                      o.a.Fragment,
                                      { key: e.rest_id },
                                      o.a.createElement(c.b, { note: e }),
                                      o.a.createElement(R.a, null),
                                    )
                                  })
                                : o.a.createElement(
                                    A.a,
                                    { style: [he.hiddenNotesSection, he.withBottomBorder] },
                                    o.a.createElement(
                                      A.a,
                                      { style: he.hiddenNotesHeader },
                                      o.a.createElement(q.a, { style: he.iconHiddenNotes }),
                                      o.a.createElement(P.b, { size: 'subtext2', weight: 'bold' }, oe),
                                    ),
                                    o.a.createElement(
                                      P.b,
                                      {
                                        color: 'primary',
                                        onPress: function () {
                                          return W(!0)
                                        },
                                        size: 'subtext2',
                                        withInteractiveStyling: !0,
                                      },
                                      le,
                                    ),
                                  ))
                            : null,
                          y && !L
                            ? o.a.createElement(
                                A.a,
                                { style: he.actionModuleContainer },
                                o.a.createElement(
                                  A.a,
                                  { style: he.actionModule },
                                  o.a.createElement(P.b, { style: he.improveText }, w ? ce : de),
                                  o.a.createElement(
                                    D.a,
                                    {
                                      accessibilityLabel: w ? se : ue,
                                      link: w ? be : '/i/flow/join-birdwatch',
                                      type: 'brandOutlined',
                                    },
                                    w ? se : ue,
                                  ),
                                ),
                              )
                            : null,
                        ),
                    )
                  : i === E.a.LOADING
                  ? o.a.createElement(F.a, { accessibilityLabel: Y, size: 'large', style: he.spinner })
                  : pe,
              ),
            )
          return o.a.createElement(
            I.c,
            { namespace: _ },
            o.a.createElement(
              x.a,
              null,
              o.a.createElement(S.a, {
                TabBar: d.a,
                backLocation: '/i/birdwatch',
                history: m,
                primaryContent: ye,
                sidebarContent: o.a.createElement(s.a, null),
                title: X,
                withTweetButton: !1,
              }),
            ),
          )
        },
        he = N.a.create(function (e) {
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
        fe = _(me)
      t.default = fe
    },
    '0SuV': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchPrinciples', function () {
          return A
        })
      a('KqXw'), a('MvUL'), a('lTEL'), a('7x/C'), a('kYxP')
      var n = a('ERkP'),
        r = a.n(n),
        i = (a('WNMA'), a('MvLc')),
        o = a('rxPX'),
        l = a('0KEI'),
        c = function (e, t) {
          return t.match.params.tweetId
        },
        s = function (e, t) {
          return i.x(e, c(0, t))
        },
        d = Object(o.a)()
          .propsFromState(function () {
            return { ownNoteData: s, tweetId: c }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: i.k,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form', component: 'values' }),
        u = a('3XMw'),
        p = a.n(u),
        m = a('5FtR'),
        h = a('aITJ'),
        f = a('MWbm'),
        b = a('t62R'),
        v = a('h0NW'),
        g = a('feu+'),
        w = a('rHpw'),
        y = a('yygM'),
        _ = a('QDet'),
        E = a('wz7L'),
        C = p.a.gfa725ae,
        T = p.a.c3d89aca,
        x = p.a.h7ad677b,
        I = p.a.eac7b6ab,
        S = p.a.b0381cfb,
        k = p.a.f0addddc,
        A = function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.fetchNotes,
            i = e.history,
            o = e.ownNoteData,
            l = e.tweetId,
            c = l ? '/i/birdwatch/'.concat(l, '/contribute_complete') : '/'
          r.a.useEffect(
            function () {
              l && n(l).catch(a())
            },
            [a, n, l],
          )
          var s = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            d = function (e) {
              return r.a.createElement(f.a, { style: L.valueItem }, r.a.createElement(b.b, { color: 'gray700' }, e))
            },
            u = {
              accessibilityLabel: C,
              containerStyle: L.infoItemContainer,
              items: [
                { label: '', decoration: r.a.createElement(y.a, null), description: d(I) },
                { label: '', decoration: r.a.createElement(_.a, null), description: d(S) },
                { label: '', decoration: r.a.createElement(E.a, null), description: d(k) },
              ],
            },
            p = r.a.createElement(f.a, { style: L.values }, r.a.createElement(v.a, u))
          return o
            ? r.a.createElement(m.a, { to: c })
            : r.a.createElement(g.a, {
                actionLabel: T,
                graphicDisplayMode: 'none',
                headline: x,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), l && i.replace('/i/birdwatch/contribute_form/'.concat(l))
                },
                onClose: function () {
                  s('close'), l && i.goBackThroughModals({ fallbackPath: '/i/status/'.concat(l) })
                },
                subtext: p,
                withCloseButton: !h.b.isTwitterApp(),
              })
        },
        L = w.a.create(function (e) {
          return {
            infoItemContainer: { paddingHorizontal: 0 },
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        O = d(A)
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
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    '2qZs': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M2.264 22.983c-.322 0-.638-.126-.88-.368-.374-.374-.473-.926-.25-1.405L2.8 17.58c-1.017-1.7-1.55-3.62-1.55-5.58C1.25 6.072 6.072 1.25 12 1.25S22.75 6.072 22.75 12 17.928 22.75 12 22.75c-1.957 0-3.876-.533-5.55-1.54l-3.66 1.657c-.17.078-.35.116-.526.116zm4.158-3.286c.278 0 .558.077.807.23 1.434.864 3.085 1.323 4.77 1.323 5.1 0 9.25-4.15 9.25-9.25S17.1 2.75 12 2.75 2.75 6.9 2.75 12c0 1.688.458 3.338 1.326 4.774.266.44.298.977.086 1.434l-1.384 3.014 3.016-1.386c.2-.093.413-.14.628-.14z',
              }),
              o.a.createElement('path', {
                d: 'M12 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25zm0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25z',
              }),
              o.a.createElement('path', {
                d: 'M14.5 12.75c-.414 0-.75-.336-.75-.75 0-.965-.785-1.75-1.75-1.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.792 0 3.25 1.458 3.25 3.25 0 .414-.336.75-.75.75z',
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
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = a('3XMw'),
        c = a.n(l).a.ed428a75,
        s = ((n = {}), i()(n, o.a.NotMutingTargetUser, { toast: { text: c } }), i()(n, 'showToast', !0), n)
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
    '6vad': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      })
      a('yH/f')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('t62R'),
        o = a('EHV7'),
        l = a('rHpw'),
        c = l.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        s = a('7Mjr'),
        d = a('I4+6'),
        u = a('cm6r'),
        p = a('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var h = l.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          a = e.landingUrl,
          n = e.nativeID,
          f = e.rightControl,
          b = e.style,
          v = e.subtext,
          g = e.testID,
          w = e.text,
          y = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(o.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          _ = v ? null : h.withSubtext,
          E = d.a.generate({
            backgroundColor: l.a.theme.colors.gray0,
            color: l.a.theme.colors.cellBackground,
            customFocusBackgroundColor: l.a.theme.colors.gray0,
            customHoverBackgroundColor: l.a.theme.colors.gray0,
            customPressedBackgroundColor: l.a.theme.colors.gray0,
          })
        return r.a.createElement(
          u.a,
          {
            interactiveStyles: a ? E : null,
            link: null == a ? void 0 : a.url,
            nativeID: n,
            style: [h.root, b],
            testID: g,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            r.a.createElement(p.a, { style: h.icon }, y),
            r.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: _, weight: 'heavy', withHashflags: !0 },
              w,
            ),
            r.a.createElement(
              p.a,
              { style: h.rightControlGroup },
              a ? r.a.createElement(p.a, { style: _ }, r.a.createElement(s.a, { style: h.iconArrow })) : null,
              f ? r.a.createElement(p.a, null, f) : null,
            ),
          ),
          v
            ? r.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                v,
              )
            : null,
        )
      }
    },
    '89Im': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    '9B+1': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      }),
        a.d(t, 'b', function () {
          return i
        })
      var n = a('PbbS'),
        r = function (e) {
          return { topicId: e.topicId, functionalityType: e.functionalityType }
        },
        i = function (e) {
          return e === n.a.Star
            ? n.a.Star
            : e === n.a.Favorite
            ? n.a.Favorite
            : e === n.a.Interested
            ? n.a.Interested
            : n.a.Default
        }
    },
    '9StO': function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('lTEL'), a('7x/C'), a('kYxP'), a('jwue'), a('+oxZ'), a('ERkP')),
        o = a.n(i),
        l = a.p + 'birdwatch_owl.9e2a1755.png',
        c = a('MvLc'),
        s = a('1YZw'),
        d = a('rxPX'),
        u = a('0KEI'),
        p = Object(d.a)()
          .propsFromState(function () {
            return { aliasSelfSelectOptions: c.n }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchAliasSelfSelectOptions: c.f,
              selectAlias: c.m,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'alias_select' }),
        m = a('W6+M'),
        h = a('3XMw'),
        f = a.n(h),
        b = a('t62R'),
        v = a('h0NW'),
        g = a('feu+'),
        w = a('gSL+'),
        y = a('Qwev'),
        _ = a('4zmP'),
        E = a('rHpw'),
        C = a('j7Bv'),
        T = a('ms2t'),
        x = a('VwDm'),
        I = a('EQ/a'),
        S = a('U+bB'),
        k = a('MWbm'),
        A = f.a.f084f1cd,
        L = f.a.ja0ee36f,
        O = f.a.j761c248,
        P = f.a.h66bd30a,
        R = f.a.j48ab593,
        B = f.a.e17c80bc,
        M = f.a.d939cf16,
        D = f.a.a56f0c32,
        F = f.a.d17c59e4,
        N = f.a.i719f8e1,
        H = f.a.d0e190cd,
        U = f.a.e74a2cd5,
        j = f.a.g9677c6d,
        z = f.a.e4a6e006,
        W = f.a.f83d0446,
        V = function (e) {
          return o.a.createElement(b.b, { weight: 'bold' }, e)
        },
        K = function () {
          return o.a.createElement(S.a, { source: l, style: q.image })
        },
        q = E.a.create(function (e) {
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
        G = o.a.createElement(C.a, { Icon: T.a, color: 'neutral', size: 'large', style: q.aliasIcon }),
        Q = {
          accessibilityLabel: A,
          containerStyle: q.infoItemContainer,
          items: [
            { label: V(R), decoration: o.a.createElement(T.a, { style: q.icon }), description: B },
            { label: V(M), decoration: o.a.createElement(x.a, { style: q.icon }), description: D },
            { label: V(F), decoration: o.a.createElement(I.a, { style: q.icon }), description: N },
          ],
        },
        X = p(function (e) {
          var t = e.addToast,
            a = e.aliasSelfSelectOptions,
            n = e.createLocalApiErrorHandler,
            i = e.fetchAliasSelfSelectOptions,
            l = e.onAliasSelected,
            c = e.selectAlias,
            s = o.a.useState(!0),
            d = r()(s, 2),
            u = d[0],
            p = d[1],
            h = o.a.useState(''),
            f = r()(h, 2),
            E = f[0],
            C = f[1],
            T = o.a.useState(!1),
            x = r()(T, 2),
            I = x[0],
            S = x[1]
          o.a.useEffect(
            function () {
              i()
                .then(function (e) {
                  e && e[0] ? C(e[0]) : S(!0)
                })
                .catch(n())
            },
            [n, i],
          )
          var A,
            R,
            B = o.a.createElement(
              b.b,
              { color: 'text', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              P,
            ),
            M = o.a.createElement(k.a, { style: q.values }, o.a.createElement(v.a, Q)),
            D = o.a.createElement(g.a, {
              actionLabel: L,
              footer: B,
              graphic: K,
              graphicDisplayMode: 'illustration',
              headline: O,
              isFullHeightOnMobile: !0,
              onAction: function () {
                p(!1)
              },
              subtext: M,
            }),
            F = o.a.useCallback(
              function (e, t) {
                C(t)
              },
              [C],
            ),
            N = o.a.createElement(
              k.a,
              null,
              o.a.createElement(b.b, { style: q.aliasSubtext }, U),
              a
                ? o.a.createElement(
                    k.a,
                    { style: q.aliasSelectContainer },
                    o.a.createElement(w.a, {
                      name: 'example',
                      onChange: F,
                      options:
                        ((A = a),
                        (R = []),
                        A.forEach(function (e) {
                          R.push({ containerStyle: q.optionContainer, label: Object(m.a)(e), value: e, decoration: G })
                        }),
                        R),
                      value: E,
                    }),
                  )
                : o.a.createElement(y.a, null),
              I ? o.a.createElement(_.a, { text: z, type: 'danger' }) : void 0,
            ),
            V = o.a.createElement(g.a, {
              actionLabel: j,
              footer: B,
              graphicDisplayMode: 'none',
              headline: H,
              isFullHeightOnMobile: !0,
              onAction: function () {
                E &&
                  c(E)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (l(!1), t({ text: W, withClearButton: !0 }))
                        : S(!0)
                    })
                    .catch(function (e) {
                      n({ defaultToast: { text: z, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: N,
            })
          return u ? D : V
        })
      t.a = X
    },
    ACNv: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('2G9S'), a('KOtZ'), a('7x/C'), a('hBvt'), a('jQ3i'), a('x4t0'), a('ERkP')),
        b = a.n(f),
        v = a('3XMw'),
        g = a.n(v),
        w = a('oQhu'),
        y = a('mjJ+'),
        _ = a('eb3s'),
        E = g.a.cfd2f35d,
        C = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { activeConfirmation: null }),
              h()(c()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              h()(c()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              h()(c()(e), '_handleCancelConfirm', function () {
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
                    : b.a.createElement(y.a, {
                        cancelButtonLabel: E,
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
                  return b.a.createElement(_.a, {
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
        })(b.a.Component),
        T = Object(w.a)(function (e, t, a, n) {
          return e.reduce(function (e, r, i) {
            var o = r.Icon,
              l = r.behavioralEventContext,
              c = r.confirmation,
              s = r.disabled,
              d = r.excludeFromActionMenu,
              u = r.isEmphasized,
              p = r.link,
              m = r.onClick,
              h = r.subText,
              f = r.testID,
              b = r.text
            r.withCancelButton
            if (!d) {
              var v = m
                ? function () {
                    c
                      ? c.render
                        ? n({ callback: m, render: c.render })
                        : n({
                            callback: m,
                            text: c.text,
                            headline: c.headline,
                            label: c.label,
                            confirmButtonType: c.confirmButtonType,
                            withCancelButton: c.withCancelButton,
                          })
                      : (m(), a())
                  }
                : a
              e.push({
                behavioralEventContext: l,
                disabled: s,
                Icon: o,
                isEmphasized: u,
                testID: f,
                subText: h,
                text: b,
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
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    BLtI: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return qa
      })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('97Jx'),
        o = a.n(i),
        l = a('yiKp'),
        c = a.n(l),
        s = a('VrFO'),
        d = a.n(s),
        u = a('Y9Ll'),
        p = a.n(u),
        m = a('1Pcy'),
        h = a.n(m),
        f = a('5Yy7'),
        b = a.n(f),
        v = a('2VqO'),
        g = a.n(v),
        w = a('KEM+'),
        y = a.n(w),
        _ =
          (a('2G9S'),
          a('KqXw'),
          a('WNMA'),
          a('hBvt'),
          a('ho0z'),
          a('TJCb'),
          a('7x/C'),
          a('DZ+c'),
          a('1t7P'),
          a('jQ/y'),
          a('849X'),
          a('5BYb'),
          a('uFXj'),
          a('ERkP')),
        E = a.n(_),
        C = a('rcen'),
        T = a('Rp9C'),
        x = a('MWbm'),
        I = a('Irs7'),
        S = a('htQn'),
        k = a('t62R'),
        A = a('OOKO'),
        L = a('/yvb'),
        O = a('rHpw'),
        P = a('v6aA'),
        R = a('Lsrn'),
        B = a('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M20.937 3.223c-.403-.263-.948-.375-1.48-.195-.726.247-1.906.534-3.457.534-1.38 0-2.286-.225-3.273-.472l-.01-.003c-1.01-.252-2.1-.525-3.717-.525-1.67 0-3.235.484-4.357.946-.16.066-.312.132-.455.197V2.75c0-.518-.42-.938-.938-.938s-.937.42-.937.938v18.5c0 .518.42.938.938.938s.94-.42.94-.938v-2.457c.28-.15.682-.35 1.168-.55 1.002-.414 2.312-.806 3.642-.806 1.38 0 2.286.225 3.273.472l.01.002c1.01.253 2.102.525 3.717.525 2.4 0 4.075-.6 4.804-.922.58-.257.883-.823.883-1.378V4.577c0-.612-.343-1.088-.75-1.354zm-3.28 8.717c-.465.226-1.026.03-1.25-.435-.71-1.462-2.598-1.42-3.234.113l-.307.74c-.145.35-.487.58-.866.58-.38 0-.72-.23-.866-.58l-.308-.74c-.636-1.532-2.525-1.576-3.233-.113-.226.466-.786.66-1.252.435-.465-.226-.66-.786-.434-1.252C7.16 8.1 10.392 7.905 12 9.94c1.608-2.035 4.84-1.84 6.094.748.225.466.03 1.026-.436 1.252z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var D = M,
        F = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M3.25 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v1.247C5.144 3.453 7.007 2.75 9 2.75c1.592 0 2.655.266 3.682.522.982.246 1.91.478 3.318.478 1.687 0 2.945-.332 3.704-.61.41-.15.87-.086 1.235.168.35.244.56.64.56 1.054V16.21c0 .474-.272.905-.694 1.1-.62.284-2.325.94-4.806.94-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433v2.567c0 .414-.336.75-.75.75zM4 5.683v11.314c1.144-.544 3.007-1.247 5-1.247 1.592 0 2.655.266 3.682.522.982.245 1.91.478 3.318.478 1.975 0 3.36-.458 4-.725v-11.4c-.887.302-2.246.625-4 .625-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433z',
              }),
              E.a.createElement('path', {
                d: 'M17.925 10.77c-1.23-2.543-4.46-2.65-5.925-.496-1.465-2.153-4.695-2.047-5.925.495-.18.372-.025.82.348 1 .373.182.82.026 1.002-.347.78-1.61 2.878-1.556 3.575.123l.308.74c.116.28.39.464.693.464s.578-.182.694-.463l.306-.74c.697-1.68 2.795-1.734 3.575-.124.18.373.63.53 1.002.348.373-.18.53-.628.348-1z',
              }),
            ),
          )
        }
      F.metadata = { width: 24, height: 24 }
      var N = F,
        H = a('OKMS'),
        U = a('7Mjr'),
        j = (function (e) {
          b()(a, e)
          var t = g()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_scribeAction', function (t) {
                var a = e.props,
                  n = a.analytics,
                  r = a.destinationUrl,
                  i = a.note
                n.scribe({ action: t, data: { items: [T.a.getBirdwatchItem(null == i ? void 0 : i.rest_id, r)] } })
              }),
              y()(h()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              y()(h()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return E.a.createElement(D, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return E.a.createElement(N, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return E.a.createElement(H.a, { style: z.birdwatchIcon, testID: 'icon-birdwatch-fill' })
                }
              }),
              e
            )
          }
          return (
            p()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.callToAction,
                    a = e.destinationUrl,
                    n = e.footer,
                    r = e.iconType,
                    i = e.subtitle,
                    o = e.title,
                    l = '#' === a ? void 0 : { pathname: a, anchorless: !0 },
                    c = l ? this._handlePivotClick : void 0,
                    s = (null == t ? void 0 : t.destinationUrl) || '#',
                    d = '#' === s ? void 0 : s
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(
                      S.a,
                      {
                        link: l,
                        onPress: c,
                        style: z.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!l,
                      },
                      E.a.createElement(
                        x.a,
                        { style: z.headerContainer },
                        E.a.createElement(
                          x.a,
                          { style: [z.headerTextContainer, !t && z.headerTextAndThumbnailContainer] },
                          this._getBirdwatchIcon(r),
                          E.a.createElement(k.b, { size: 'subtext1', style: z.birdwatchLabel, weight: 'bold' }, o),
                        ),
                        t ? null : E.a.createElement(U.a, { style: z.icon, testID: 'icon-arrow-right' }),
                      ),
                      i
                        ? E.a.createElement(C.a, {
                            entities: i.entities,
                            size: 'body',
                            style: z.subtitle,
                            text: i.text,
                          })
                        : null,
                      t
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(A.a, { spacing: 'space2' }),
                            E.a.createElement(
                              x.a,
                              { style: z.callToActionContainer },
                              E.a.createElement(k.b, { size: 'subtext1' }, t.prompt),
                              E.a.createElement(
                                L.a,
                                { link: d, onPress: this._handlePivotClick, size: 'small', type: 'primaryOutlined' },
                                t.title,
                              ),
                            ),
                          )
                        : null,
                    ),
                    n
                      ? E.a.createElement(C.a, {
                          color: 'gray700',
                          entities: n.entities,
                          size: 'subtext2',
                          style: z.footer,
                          text: n.text,
                        })
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      y()(j, 'contextType', P.a)
      var z = O.a.create(function (e) {
          return {
            birdwatchLabel: { display: 'flex', alignItems: 'center' },
            footer: { paddingVertical: e.spaces.space12 },
            pivotContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space12,
              overflow: 'hidden',
            },
            headerContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              backgroundColor: e.colors.hoverBlack,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            headerTextContainer: { flexDirection: 'row', width: '100%' },
            headerTextAndThumbnailContainer: { width: '80%' },
            callToActionContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            icon: { color: e.colors.text, paddingLeft: e.spaces.space12, flexShrink: 0 },
            birdwatchIcon: {
              marginRight: e.spacesPx.space4,
              padding: e.spacesPx.space2,
              color: e.colors.primary,
              flexShrink: 0,
            },
            thumbnail: { color: e.colors.whiteOnColor },
            subtitle: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12 },
          }
        }),
        W = Object(I.a)(j, { element: 'birdwatch_pivot' }),
        V = a('6/RC'),
        K = a('uIZp'),
        q = a('3XMw'),
        G = a.n(q),
        Q = a('5S/X')
      a('jwue'), a('+oxZ'), a('z84I')
      function X(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(X.prototype = Object.create(Error.prototype)), (X.prototype.constructor = X)
      var Z = function (e, t) {
          if (!e) throw new X(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
        },
        J = a('E6XO'),
        Y = a('sXY3'),
        $ = a('tn7R'),
        ee = a('+d3d'),
        te = a('oECP'),
        ae = a('fs1G'),
        ne = {},
        re = 0,
        ie = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        oe = function () {
          Object(Y.a)(ne).forEach(function (e, t) {
            var a = r()(e, 2),
              n = a[0],
              i = a[1],
              o = Object($.a)(i),
              l = o.length
            o.forEach(function (e) {
              Object(Y.a)(ie).map(function (t) {
                var a = r()(t, 2),
                  i = a[0],
                  o = r()(a[1], 2),
                  c = o[0],
                  s = o[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(l) &&
                  c in e &&
                  s in e &&
                  Object(J.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(n, i),
                    { duration_ms: e[c] - e[s] },
                  )
              })
            })
          }),
            Object(J.a)(),
            (ne = {})
        },
        le = Object(ee.a)(oe, 2e4) || oe,
        ce = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = e.constructor.displayName
          Z(a, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var n = e.__lifecycleIdentifier
          return (
            !n && t && ((re += 1), (n = e.__lifecycleIdentifier = re)),
            (ne[a] && ne[a][n]) || (ne[a] = c()(c()({}, ne[a]), {}, y()({}, n, {}))),
            [a, n]
          )
        },
        se = function (e, t, a, n) {
          ne[e][t][a] = n
        },
        de = V.canUseDOM
          ? function (e) {
              var t = {
                UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || ae.a,
                componentDidMount: e.prototype.componentDidMount || ae.a,
                UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || ae.a,
                componentDidUpdate: e.prototype.componentDidUpdate || ae.a,
                componentWillUnmount: e.prototype.componentWillUnmount || ae.a,
              }
              return (
                (e.prototype.UNSAFE_componentWillMount = function () {
                  for (
                    var e = ce(this, !0),
                      a = r()(e, 2),
                      n = a[0],
                      i = a[1],
                      o = arguments.length,
                      l = new Array(o),
                      c = 0;
                    c < o;
                    c++
                  )
                    l[c] = arguments[c]
                  t.UNSAFE_componentWillMount.apply(this, l), se(n, i, 'willMount', Date.now())
                }),
                (e.prototype.componentDidMount = function () {
                  for (
                    var e = ce(this), a = r()(e, 2), n = a[0], i = a[1], o = arguments.length, l = new Array(o), c = 0;
                    c < o;
                    c++
                  )
                    l[c] = arguments[c]
                  t.componentDidMount.apply(this, l), se(n, i, 'didMount', Date.now()), le()
                }),
                (e.prototype.UNSAFE_componentWillUpdate = function () {
                  for (
                    var e = ce(this, !0),
                      a = r()(e, 2),
                      n = a[0],
                      i = a[1],
                      o = arguments.length,
                      l = new Array(o),
                      c = 0;
                    c < o;
                    c++
                  )
                    l[c] = arguments[c]
                  t.UNSAFE_componentWillUpdate.apply(this, l), se(n, i, 'willUpdate', Date.now())
                }),
                (e.prototype.componentDidUpdate = function () {
                  for (
                    var e = ce(this), a = r()(e, 2), n = a[0], i = a[1], o = arguments.length, l = new Array(o), c = 0;
                    c < o;
                    c++
                  )
                    l[c] = arguments[c]
                  t.componentDidUpdate.apply(this, l), se(n, i, 'didUpdate', Date.now()), le()
                }),
                (e.prototype.componentWillUnmount = function () {
                  for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n]
                  t.componentWillUnmount.apply(this, a), le()
                }),
                e
              )
            }
          : te.a,
        ue = a('caTy'),
        pe = a('Y6L+'),
        me = (a('lTEL'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        he = Object(me.a)({
          loader: function () {
            return a.e(180).then(a.bind(null, 'mL9d'))
          },
        }),
        fe = a('m3Bd'),
        be = a.n(fe),
        ve = a('xM7j'),
        ge = a('LKCq'),
        we = ['onActionClick'],
        ye = 'inner_tombstone'
      function _e(e) {
        var t,
          a = e.children,
          n = e.config,
          r = e.nativeID,
          i = Object(I.b)()
        if (Q.b) return a
        var l = (null === (t = n.richRevealText) || void 0 === t ? void 0 : t.text) || n.revealText,
          c = n.richText
            ? E.a.createElement(C.a, {
                alignment: n.richText.alignment,
                entities: n.richText.entities,
                onEntityClick: function () {
                  i.scribe({ action: 'open_link', component: ye })
                },
                rtl: n.richText.rtl,
                text: n.richText.text,
              })
            : n.text
        return E.a.createElement(
          x.a,
          { nativeID: r },
          l
            ? E.a.createElement(
                ge.a,
                {
                  label: c,
                  onReveal: function () {
                    i.scribe({ action: 'click', component: ye })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      a = be()(e, we)
                    return E.a.createElement(ve.a, o()({}, a, { inline: !0, onClick: t }))
                  },
                  revealLabel: l,
                },
                a,
              )
            : E.a.createElement(ve.a, { inline: !0 }, c),
        )
      }
      var Ee = a('PeW/'),
        Ce = a('3IPs'),
        Te = a('PbbS'),
        xe = a('LWCC'),
        Ie = a('JUsM'),
        Se = O.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        ke = function (e) {
          var t = e.defaultRef,
            a = e.topic,
            n = e.topicFollowPrompt,
            r = (null == n ? void 0 : n.description) || {},
            i = r.entities,
            o = r.text
          return E.a.createElement(
            x.a,
            { style: Se.topicFollowPrompt },
            E.a.createElement(Ie.a, {
              containerRef: t,
              primaryAction: E.a.createElement(xe.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: Te.a.FollowTopic,
                topic: a,
              }),
              text: E.a.createElement(C.a, { entities: i, text: o }),
            }),
          )
        },
        Ae = a('SrIh'),
        Le = a('gdQ4'),
        Oe = a('qbku'),
        Pe = a('tocL'),
        Re = 'analyticsButton',
        Be = 'promotedIndicator',
        Me = 'readerModeBottomBar',
        De = 'socialContext',
        Fe = 'tweet',
        Ne = a('X04g'),
        He = a('v/3V'),
        Ue = (a('Ysgh'), a('RqPI')),
        je = a('3zvM'),
        ze = a('lMB6'),
        We = a('iChn'),
        Ve = Object(je.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, a) {
              return e.Tweets.fetchTranslation(t, a).then(Ke)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Ke = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(We.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        qe = ze.a.register(Ve),
        Ge = a('rxPX'),
        Qe = a('0KEI'),
        Xe = function (e, t) {
          return qe.select(e, t.tweetId)
        },
        Ze = function (e, t) {
          return qe.selectFetchStatus(e, t.tweetId)
        },
        Je = Object(Ge.a)()
          .propsFromState(function () {
            return { translation: Xe, translationFetchStatus: Ze, userLanguage: Ue.p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Qe.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: qe.fetchOneIfNeeded,
            }
          }),
        Ye = a('PdwO'),
        $e = a('cTG8'),
        et = a('oQhu'),
        tt = a('YeIG'),
        at = a('Gpeq'),
        nt = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'hitHighlights',
          'isFocal',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'weight',
          'withOriginalText',
        ],
        rt = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'isFocal',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        it = G.a.b4947556,
        ot = (function (e) {
          b()(a, e)
          var t = g()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_fetchTranslation', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(a())
              }),
              y()(h()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  a = t.disableTranslation,
                  n = t.displayTextRange,
                  r = t.entities,
                  i = t.isFocal,
                  o = t.lang,
                  l = t.supplementalLang,
                  c = t.text,
                  s = t.userLanguage
                return (
                  e._getMemoizedDisableTranslation(a, n, r, c, o, l, s) ||
                  !(i || e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled'))
                )
              }),
              y()(h()(e), '_renderTranslation', function () {
                var t = e.props,
                  a =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.hitHighlights,
                    t.isFocal,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  n = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, be()(t, nt))
                if (a)
                  return E.a.createElement(
                    $e.a,
                    o()({}, n, {
                      displayTextRange: e._getMemoizedDisplayTextRange(a.text),
                      entities: a.entities,
                      lang: a.destinationLanguage,
                      text: a.text,
                    }),
                  )
              }),
              y()(
                h()(e),
                '_getMemoizedDisplayTextRange',
                Object(et.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              y()(
                h()(e),
                '_getMemoizedDisableTranslation',
                Object(et.a)(function (e, t, a, n, r, i, o) {
                  var l = o && Object(at.c)(r.split('-')[0]) !== Object(at.c)(o.split('-')[0])
                  return e || !!i || !l || !Object(at.b)({ displayTextRange: t, entities: a, text: n, language: r })
                }),
              ),
              e
            )
          }
          return (
            p()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.onMediaTranslation,
                    n = t.translation
                  if (e.translation !== n && n) {
                    var r,
                      i = this.context.featureSwitches,
                      o = {}
                    ;((null == n || null === (r = n.entities) || void 0 === r ? void 0 : r.media) || []).forEach(
                      function (e) {
                        e.alt_text && (o[e.id_str] = e.alt_text)
                      },
                    ),
                      a && !Object(tt.a)(o) && i.isTrue('responsive_web_alt_text_translations_enabled') && a(o)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    a = (e.isFocal, e.onMediaTranslation, e.style),
                    n = (e.supplementalLang, e.translation),
                    r = e.translationFetchStatus,
                    i = e.tweetId,
                    o = (e.userLanguage, e.withOriginalText),
                    l = be()(e, rt)
                  return E.a.createElement(
                    Ye.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: i,
                      originLanguage: n && n.localizedSourceLanguage,
                      style: a,
                      translateButtonText: it,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: r,
                      withOriginalText: o,
                    },
                    E.a.createElement($e.a, l),
                  )
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      y()(ot, 'contextType', P.a)
      var lt = Je(ot),
        ct = a('2qZs'),
        st = a('wwsH'),
        dt = { viewType: 'birdwatch' },
        ut = O.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        pt = function (e) {
          var t = e.onPress,
            a = e.onShow,
            n = e.tweetId,
            r = { pathname: '/i/birdwatch/t/'.concat(n), external: !0 }
          return (
            E.a.useEffect(
              function () {
                a && a()
              },
              [a],
            ),
            E.a.createElement(st.a, {
              Icon: ct.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: dt,
              link: r,
              onPress: t,
              style: ut.birdwatchIcon,
            })
          )
        },
        mt = a('xXop'),
        ht = a('xrkw'),
        ft = a('mqpi'),
        bt = G.a.e6901eeb,
        vt = (function (e) {
          b()(a, e)
          var t = g()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_shouldDisable', ft.b.bind(null, e.context.featureSwitches)),
              e
            )
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.endControl,
                    a = e.loggedInUserId,
                    n = e.onAnalyticsClick,
                    r = e.style,
                    i = e.tweet
                  return !this._shouldDisable(i, ft.a.Analytics) && a === i.user.id_str
                    ? E.a.createElement(
                        x.a,
                        { style: [gt.analyticsContainerWithChildren, r] },
                        E.a.createElement(
                          S.a,
                          {
                            link: ''.concat(i.permalink, '/analytics'),
                            onPress: n,
                            style: gt.analyticsButton,
                            testID: Re,
                          },
                          E.a.createElement(ht.a, { style: gt.analyticsIcon }),
                          E.a.createElement(k.b, { color: 'gray700' }, bt),
                        ),
                        t,
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(E.a.PureComponent)
      y()(vt, 'contextType', P.a)
      var gt = O.a.create(function (e) {
          return {
            analyticsIcon: { color: e.colors.gray700, paddingRight: e.spaces.space4 },
            analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: 'row', flexGrow: 1 },
            analyticsContainerWithChildren: {
              justifyContent: 'space-between',
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              alignItems: 'center',
            },
          }
        }),
        wt = vt,
        yt = a('tmUV'),
        _t = a('YBcl'),
        Et = a('k89r'),
        Ct = function (e) {
          var t = Object(Et.a)()
          return E.a.createElement(
            _t.a,
            o()({}, e, {
              handleAnchorAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              handleAnchorOpen: function (e) {
                t.scribe({ element: e, action: 'click' })
              },
              handleAnchorSecondaryAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
              handleHeadsUpImpression: function (e, a) {
                t.scribe({ element: 'heads_up_context', action: a, data: { tweet_id: e } })
              },
            }),
          )
        },
        Tt = a('uFYP'),
        xt = G.a.g6237a1e,
        It = G.a.d6b5949e,
        St = function (e) {
          switch (e) {
            case 'paused':
              return It
            case 'in-progress':
            default:
              return xt
          }
        },
        kt = function (e) {
          var t = e.nativeID,
            a = e.status,
            n = e.style,
            r = 'paused' === a
          return E.a.createElement(
            x.a,
            { style: [At.root, n] },
            E.a.createElement(Tt.a, { style: [At.icon, r ? At.withGray700 : null] }),
            E.a.createElement(k.b, { color: r ? 'gray700' : 'text', nativeID: t, size: 'subtext2' }, St(a)),
          )
        },
        At = O.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        Lt = a('TuTd'),
        Ot = function (e, t) {
          return Object(Lt.a)(e, t.tweetId)
        },
        Pt = Object(Ge.a)()
          .propsFromState(function () {
            return { liveCounts: Ot }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        Rt = (a('KOtZ'), a('LW0h'), a('tQbP'), a('Jkc4')),
        Bt = a('855f'),
        Mt = a('MtXG'),
        Dt = a('de1q'),
        Ft = a('cHvH'),
        Nt = G.a.fd80ffbf,
        Ht = O.a.theme.spacesPx.space20,
        Ut = (function (e) {
          b()(a, e)
          var t = g()(a)
          function a(e, n) {
            var r
            return (
              d()(this, a),
              (r = t.call(this, e, n)),
              y()(
                h()(r),
                '_reactionsLegacyHeartEnabled',
                r.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              y()(h()(r), '_renderQuoteTweetTimelinePivot', function () {
                var e = r.props.permalink
                return E.a.createElement(
                  S.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: r._handleQuoteTweetPivotScribeOnClick,
                    style: jt.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  E.a.createElement(k.b, { color: 'primary' }, Nt),
                )
              }),
              y()(h()(r), '_updateStateIfChanged', function (e, t) {
                return function (a) {
                  var n = a.nativeEvent.layout.width
                  n !== e() && t(n)
                }
              }),
              y()(
                h()(r),
                '_handleQuoteTweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.quoteTweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ quoteTweetLabelWidth: e })
                  },
                ),
              ),
              y()(
                h()(r),
                '_handleRetweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.retweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ retweetLabelWidth: e })
                  },
                ),
              ),
              y()(
                h()(r),
                '_handleLikeStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.likeLabelWidth
                  },
                  function (e) {
                    return r.setState({ likeLabelWidth: e })
                  },
                ),
              ),
              y()(
                h()(r),
                '_handleStatGroupLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.groupWidth
                  },
                  function (e) {
                    return r.setState({ groupWidth: e })
                  },
                ),
              ),
              y()(h()(r), '_handleRetweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              y()(h()(r), '_handleQuoteTweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              y()(h()(r), '_handleQuoteTweetPivotScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_pivot', action: 'click' })
              }),
              (r.state = {
                retweetLabelWidth: void 0,
                likeLabelWidth: void 0,
                quoteTweetLabelWidth: void 0,
                groupWidth: void 0,
              }),
              r
            )
          }
          return (
            p()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    a = e.isNonCompliantTweet,
                    n = e.quoteTweetCount
                  a && t.scribe({ element: 'quote_tweet_pivot', action: 'impression' }),
                    n && n > 0 && t.scribe({ element: 'quote_tweet_stat', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.isNonCompliantTweet ? this._renderQuoteTweetTimelinePivot() : this._renderStats()
                },
              },
              {
                key: '_renderReaction',
                value: function (e) {
                  var t = this,
                    a = this.props.permalink,
                    n = Bt.a.getTruncatedCount(e.count),
                    r = { pathname: ''.concat(a, '/reactions'), state: { reactionType: e.type } }
                  return E.a.createElement(
                    x.a,
                    { key: e.type },
                    E.a.createElement(Rt.a, null, function (a) {
                      return E.a.createElement(
                        Mt.a,
                        { count: e.count, link: r, onPress: a() },
                        E.a.createElement(
                          x.a,
                          { style: jt.reactionStat },
                          E.a.createElement(Dt.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: jt.reaction,
                          }),
                          E.a.createElement(Mt.a.Value, { animated: !0, count: e.count, weight: 'normal' }, n),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderReactionsStatsGroup',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.permalink,
                    n = t.reactionCount,
                    r =
                      (n &&
                        n.reduce(function (e, t) {
                          return (t.count || 0) + e
                        }, 0)) ||
                      0
                  if (!r || !n) return null
                  var i = Bt.a.getTruncatedCount(r),
                    o = n
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return E.a.createElement(Ft.a, null, function (t) {
                    var n = t.windowWidth
                    return E.a.createElement(
                      Mt.a.Group,
                      { style: [jt.detailItemContainer, jt.detailItem] },
                      n > O.a.theme.breakpoints.small
                        ? E.a.createElement(
                            x.a,
                            null,
                            E.a.createElement(Rt.a, null, function (e) {
                              return E.a.createElement(
                                Mt.a,
                                { count: r, link: ''.concat(a, '/reactions'), onPress: e() },
                                E.a.createElement(
                                  G.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  E.a.createElement(
                                    Mt.a.Value,
                                    { animated: !0, count: r },
                                    G.a.b4a4e4aa({ displayCountAll: i }),
                                  ),
                                  E.a.createElement(Mt.a.Label, null, G.a.ifa70ada({ count: r })),
                                ),
                              )
                            }),
                          )
                        : null,
                      o.map(function (t) {
                        return e._renderReaction(t)
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderLikesStat',
                value: function (e) {
                  var t = Bt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return E.a.createElement(
                    x.a,
                    { onLayout: this._handleLikeStatLayout },
                    E.a.createElement(Rt.a, null, function (n) {
                      return E.a.createElement(
                        Mt.a,
                        { count: e, link: ''.concat(a, '/likes'), onPress: n() },
                        E.a.createElement(
                          G.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          E.a.createElement(Mt.a.Value, { animated: !0, count: e }, G.a.ha054943({ displayCount: t })),
                          E.a.createElement(Mt.a.Label, null, G.a.d260af55({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderRetweetsStat',
                value: function (e) {
                  var t = this,
                    a = Bt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return E.a.createElement(
                    x.a,
                    { onLayout: this._handleRetweetStatLayout },
                    E.a.createElement(Rt.a, null, function (r) {
                      return E.a.createElement(
                        Mt.a,
                        { count: e, link: ''.concat(n, '/retweets'), onPress: r(t._handleRetweetScribeOnClick) },
                        E.a.createElement(
                          G.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          E.a.createElement(Mt.a.Value, { animated: !0, count: e }, G.a.j142cb3f({ displayCount: a })),
                          E.a.createElement(Mt.a.Label, null, G.a.e59a4e90({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderQuoteTweetsStat',
                value: function (e) {
                  var t = this,
                    a = Bt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return E.a.createElement(
                    x.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    E.a.createElement(Rt.a, null, function (r) {
                      return E.a.createElement(
                        Mt.a,
                        {
                          count: e,
                          link: ''.concat(n, '/retweets/with_comments'),
                          onPress: r(t._handleQuoteTweetScribeOnClick),
                        },
                        E.a.createElement(
                          G.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          E.a.createElement(Mt.a.Value, { animated: !0, count: e }, G.a.f6e12705({ displayCount: a })),
                          E.a.createElement(Mt.a.Label, null, G.a.e2414184({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderStats',
                value: function () {
                  var e = this.props,
                    t = e.containerStyle,
                    a = e.likeCount,
                    n = e.quoteTweetCount,
                    r = e.reactionCount,
                    i = e.retweetCount,
                    o = e.style,
                    l = e.withReactions,
                    c = this.state,
                    s = c.groupWidth,
                    d = c.likeLabelWidth,
                    u = c.quoteTweetLabelWidth,
                    p = c.retweetLabelWidth,
                    m = p && u && d && s && p + Ht + (l ? 0 : d + Ht) + u > s,
                    h = s,
                    f = l ? void 0 : a
                  return i || f || n || r
                    ? E.a.createElement(
                        x.a,
                        { onLayout: this._handleStatGroupLayout, style: h ? t : jt.hidden },
                        l ? this._renderReactionsStatsGroup() : null,
                        i || f || n
                          ? E.a.createElement(
                              Mt.a.Group,
                              { style: [jt.detailItemContainer, jt.detailItem, jt.noWrap, o] },
                              i ? this._renderRetweetsStat(i) : null,
                              n ? this._renderQuoteTweetsStat(n) : null,
                              f && !m ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        m && f
                          ? E.a.createElement(
                              Mt.a.Group,
                              { style: [jt.detailItemContainer, jt.detailItem, o] },
                              this._renderLikesStat(f),
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(E.a.PureComponent)
      y()(Ut, 'contextType', P.a)
      var jt = O.a.create(function (e) {
          return {
            detailItem: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space16 },
            detailItemContainer: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
            },
            hidden: { visibility: 'hidden' },
            noWrap: { flexWrap: 'nowrap' },
            quoteTweetPivot: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space16,
            },
            reaction: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
            reactionStat: { flexDirection: 'row', alignItems: 'center', display: 'inline-flex' },
          }
        }),
        zt = Object(I.a)(Ut)
      var Wt = Pt(function (e) {
          var t = e.containerStyle,
            a = e.isNonCompliantTweet,
            n = e.liveLikeCount,
            r = e.liveQuoteCount,
            i = e.liveRetweetCount,
            o = e.tweetLikeCount,
            l = e.tweetPermalink,
            c = e.tweetQuoteTweetCount,
            s = e.tweetReactionCount,
            d = e.tweetRetweetCount,
            u = e.withReactions
          return E.a.createElement(zt, {
            containerStyle: t,
            isNonCompliantTweet: a,
            likeCount: n || o,
            permalink: l,
            quoteTweetCount: r || c,
            reactionCount: s,
            retweetCount: i || d,
            withReactions: u,
          })
        }),
        Vt = a('avOP'),
        Kt = function (e) {
          var t = e.children
          return Q.b ? E.a.createElement(Vt.a, { itemProp: 'articleBody' }, t) : t
        },
        qt = a('hqKg'),
        Gt = a('B/Qy'),
        Qt = a('M0jS'),
        Xt = function (e, t) {
          return Qt.b.select(e, t.userId)
        },
        Zt = Object(Ge.a)().propsFromState(function () {
          return {
            userSpace: Object(qt.createSelector)(Xt, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(Gt.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Jt = a('Sksh'),
        Yt = a('1I0O'),
        $t = a('oSwX'),
        ea = function (e) {
          var t = e.avatarRef,
            a = e.imageLayoutCache,
            n = e.nativeID,
            r = e.onClick,
            i = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            c = e.screenName,
            s = e.size,
            d = e.style,
            u = e.uri,
            p = e.userId,
            m = e.userSpace,
            h = e.withHoverCard,
            f = e.withLink
          return (
            E.a.useEffect(
              function () {
                return (
                  Jt.a.registerUserInApp(p),
                  function () {
                    Jt.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            m
              ? E.a.createElement(
                  Yt.a,
                  o()(
                    {
                      avatarRef: t,
                      imageLayoutCache: a,
                      nativeID: n,
                      onClick: r,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: c,
                      size: s,
                      style: d,
                      uri: u,
                      withHoverCard: h,
                      withLink: f,
                    },
                    m,
                  ),
                )
              : E.a.createElement($t.default, {
                  avatarRef: t,
                  imageLayoutCache: a,
                  nativeID: n,
                  onClick: r,
                  onHoverCardScreenNameClick: i,
                  promotedContent: l,
                  screenName: c,
                  size: s,
                  style: d,
                  uri: u,
                  withHoverCard: h,
                  withLink: f,
                })
          )
        },
        ta = Zt(E.a.memo(ea)),
        aa = a('FGLp'),
        na = a('TIdA'),
        ra = a('DNho'),
        ia = na.a.createLayoutCache(),
        oa = O.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        la = function (e) {
          var t = Object(I.b)(),
            a = E.a.useContext(P.a).featureSwitches,
            n = e.avatarRef,
            r = e.nativeID,
            i = e.onClick,
            o = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            c = e.screenName,
            s = e.uri,
            d = e.userId,
            u = e.withHoverCard,
            p = void 0 === u || u,
            m = e.withLink,
            h = void 0 === m || m,
            f = e.withNftAvatar,
            b = e.withUserPresence,
            v = void 0 !== b && b
          return (
            Object(aa.a)(function () {
              f && a.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            E.a.createElement(
              x.a,
              { style: oa.avatarWrapper },
              E.a.createElement(ra.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return v
                  ? E.a.createElement(ta, {
                      avatarRef: n,
                      imageLayoutCache: ia,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: oa.avatar,
                      uri: s,
                      userId: d,
                      withHoverCard: p,
                      withLink: h,
                    })
                  : E.a.createElement($t.default, {
                      avatarRef: n,
                      imageLayoutCache: ia,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: oa.avatar,
                      uri: s,
                      withHoverCard: p,
                      withLink: h,
                    })
              }),
            )
          )
        },
        ca = a('aITJ'),
        sa = a('E0cF'),
        da = a('Z6aJ'),
        ua = a('dCqJ'),
        pa = a('Olb6'),
        ma = a('nBUg'),
        ha = a('r7g+'),
        fa = a('PbQQ'),
        ba = a('e5HP'),
        va = a('JWUO'),
        ga = a('9VO7'),
        wa = a('GBcw'),
        ya = a('jV+4'),
        _a = a('ir4X'),
        Ea = a('aA1u'),
        Ca = a('kY28'),
        Ta = a('6nXH')
      function xa(e, t, a) {
        var n,
          r = sa.a.getOriginalTweet(e),
          i = null == r || null === (n = r.entities) || void 0 === n ? void 0 : n.hashtags
        if (Array.isArray(i) && !(i.length < 1)) {
          var o = i[0]
          return a &&
            (function (e) {
              var t = sa.a.getOriginalTweet(e),
                a = t.extended_entities && t.extended_entities.media
              return (
                !!(a && a.length > 0) &&
                a.some(function (e) {
                  return 'animated_gif' === e.type
                })
              )
            })(e) &&
            t.isTrue('responsive_web_hashtag_highlight_is_enabled')
            ? o.text
            : void 0
        }
      }
      function Ia(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      a('yH/f')
      var Sa = a('9B+1'),
        ka = a('YICZ'),
        Aa = a('21zW'),
        La = a('8bWS'),
        Oa = G.a.gf5e9ea6,
        Pa = G.a.e2f2b658,
        Ra = Object.freeze({
          see_more: G.a.ffd9cfe6,
          discover_more: G.a.d172116a,
          more: G.a.h63a5c3b,
          more_tweets: G.a.iac074c3,
          more_suggestions: G.a.g11ebd34,
          browse: G.a.g4a69019,
          browse_tweets: G.a.b1abb17d,
        })
      var Ba = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return E.a.createElement(
            x.a,
            { style: Fa.tombstone },
            E.a.createElement(ve.a, { actionText: Oa, children: Pa, inline: !0, onClick: t }),
          )
        },
        Ma = Object(I.a)(function (e) {
          var t = e.analytics,
            a = e.bannerText,
            n = e.label,
            r = e.link,
            i = e.linkText,
            o = e.onNotInterestedPress,
            l = e.topic,
            c = e.withRightControl,
            s = a && '' === a.text,
            d = i && '' === i.text,
            u = !d,
            p = !(s || d)
          return E.a.createElement(
            x.a,
            { style: Fa.topicActions },
            p && E.a.createElement(Aa.a, null),
            u &&
              E.a.createElement(
                k.b,
                {
                  color: 'primary',
                  link: r,
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  size: 'subtext2',
                  weight: 'bold',
                },
                i ? E.a.createElement(C.a, i) : n,
              ),
            c
              ? E.a.createElement(
                  x.a,
                  { style: Fa.notInterestedButtonWrapper },
                  E.a.createElement(ka.a, {
                    onPress: o,
                    size: 'small',
                    topicId: l.id,
                    type: 'brandText',
                    withIconOnly: !0,
                  }),
                )
              : null,
          )
        }),
        Da = function (e) {
          var t = e.isExpanded,
            a = e.onNotInterestedPress,
            n = e.topic,
            r = n.following ? Fa.followingTopicButtonWrapper : Fa.followTopicButtonWrapper,
            i = [t && r, !t && Fa.followTopicButtonWrapperNotExpanded],
            o = t ? Fa.largeNotInterestedButtonWrapper : Fa.notInterestedButtonWrapper
          return E.a.createElement(
            x.a,
            { style: Fa.topicActions },
            t ? null : E.a.createElement(Aa.a, { style: Fa.topicMiddot }),
            E.a.createElement(
              x.a,
              { style: i },
              E.a.createElement(xe.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: Fa.followTopicButton,
                textMode: Te.a.FollowTopic,
                topic: n,
              }),
            ),
            a || (t && !n.following)
              ? E.a.createElement(
                  x.a,
                  { style: o },
                  E.a.createElement(ka.a, {
                    onPress: a,
                    size: 'small',
                    topicId: n.id,
                    type: t ? 'primaryOutlined' : 'brandText',
                    withIconOnly: !t,
                  }),
                )
              : null,
          )
        }
      var Fa = O.a.create(function (e) {
          return {
            tombstone: { paddingBottom: e.componentDimensions.gutterVertical },
            iconStyle: {
              paddingBottom: 'calc('.concat(e.spaces.space2, ' + ').concat(e.spaces.space1, ')'),
              marginBottom: e.spaces.space4,
            },
            topicActions: { flexDirection: 'row', flexGrow: 1, alignItems: 'center', minHeight: e.spaces.space32 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            followTopicButton: { marginTop: e.spaces.space1 },
            followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 },
            followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingRight: e.spaces.space4, width: '50%' },
            followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: '100%' },
            notInterestedButtonWrapper: { alignItems: 'flex-end', flexGrow: 1 },
            largeNotInterestedButtonWrapper: {
              marginVertical: e.spaces.space4,
              paddingLeft: e.spaces.space4,
              width: '50%',
            },
          }
        }),
        Na = a('0zXz'),
        Ha = O.a.theme.aspectRatios.maxTimelineImage,
        Ua = O.a.theme.aspectRatios.minTimelineImage,
        ja = G.a.f277e949,
        za = G.a.ee79367a,
        Wa = G.a.a2a3824a,
        Va = G.a.c14cdb18,
        Ka = G.a.e8adeec8,
        qa = (function (e) {
          b()(a, e)
          var t = g()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_defaultInlinePromptRef', E.a.createRef()),
              y()(h()(e), '_iconContainerRef', E.a.createRef()),
              y()(h()(e), 'state', { mediaAltTranslations: {} }),
              y()(h()(e), '_transformPromotedUrl', He.a.bind(null, e.context.featureSwitches)),
              y()(
                h()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              y()(h()(e), '_getWithTopLine', function () {
                var t = e.props,
                  a = t.conversationTreeMetadata,
                  n = t.isFocal,
                  r = t.tweet,
                  i = sa.a.getOriginalTweet(r),
                  o = e._getConversationPosition(),
                  l = e._getIsConversationStart(),
                  c = a && a.ancestorConnector,
                  s = a && a.indents,
                  d = (n && !!i.in_reply_to_status_id_str) || (o && !l)
                return s ? 'top' === c : d
              }),
              y()(h()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  a = t.conversationTreeMetadata,
                  n = t.tweet,
                  r = sa.a.getOriginalTweet(n),
                  i = e._getConversationPosition(),
                  o = a && a.indents,
                  l = a && a.descendantConnector,
                  c = i && !i.isEnd
                return o
                  ? l
                  : !(
                      !r.in_reply_to_status_id_str &&
                      'ancestor' !== (null == i ? void 0 : i.position) &&
                      e._isEdgeToEdgeEnabled
                    ) && c
              }),
              y()(h()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  a = t.onMediaHashtagHighlightClick,
                  n = t.promotedContent,
                  r = t.promotedContentAdvertiser,
                  i = t.tweet,
                  o = e.context.featureSwitches,
                  l = {
                    highlightedHashtag: function () {
                      return xa(i, o, da.a.isPromoted(n))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return Ia(r, o)
                    },
                    shouldUseSmallFontForHashtagHighlight: function () {
                      return o.isTrue('responsive_web_hashtag_highlight_use_small_font')
                    },
                    onMediaHashtagHighlightClick: a,
                  },
                  s = {
                    c9sEnabled: function () {
                      return o.isTrue('c9s_enabled')
                    },
                    trustedFriendsEnabled: function () {
                      return o.isTrue('trusted_friends_consumption_enabled')
                    },
                  },
                  d = e._getWithTopLine(),
                  u = e._getWithBottomLine(),
                  p = !e.props.isFocal && (d || u)
                return c()(
                  c()(c()({}, l), s),
                  {},
                  {
                    withEdgeToEdgeContent: function () {
                      return !p && o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    withEdgeToEdgeTweetAnatomy: function () {
                      return o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    headsUpVariant: function () {
                      return o.getStringValue('conversational_safety_heads_up_treatment_A_enabled')
                    },
                    misinfoLabelRevampTweaksEnabled: function () {
                      return o.isTrue('responsive_web_misinfo_label_revamp_tweaks_enabled')
                    },
                    sensitiveMediaWarningsEnabled: function () {
                      return o.isTrue('sensitive_tweet_warnings_enabled')
                    },
                    tweetRendersPromotedContentBadgeBelowHeader: function () {
                      return o.isTrue('responsive_web_promoted_badge_below_header')
                    },
                    socialContextRefreshEnabled: function () {
                      return e.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                    },
                  },
                )
              }),
              y()(h()(e), '_renderPromotedDetails', function (t) {
                var a = e.props,
                  n = a.onPoliticalSponsorWebsiteClick,
                  r = a.onPromotedDisclaimerLearnMoreClick,
                  i = a.onPromotedIndicatorClick,
                  o = a.promotedContent,
                  l = a.promotedContentAdvertiser,
                  c = a.tweet
                return r && n && i
                  ? E.a.createElement(ua.a, {
                      onPoliticalSponsorWebsiteClick: n,
                      onPromotedDisclaimerLearnMoreClick: r,
                      onPromotedIndicatorClick: i,
                      promotedContent: o,
                      promotedContentAdvertiser: l,
                      style: Ga.promotedDetails,
                      testID: Be,
                      tweet: c,
                      withCircleIcon: t,
                    })
                  : null
              }),
              y()(h()(e), '_getPromoteButtonOnPress', function (t) {
                var a = e.props,
                  n = a.onPromoteAgainButtonClick,
                  r = a.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? n : r
              }),
              y()(h()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  a = t.tweet,
                  n = t.withBirdwatchPivots,
                  r = sa.a.getOriginalTweet(a)
                return r.birdwatch_pivot &&
                  n &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? E.a.createElement(W, r.birdwatch_pivot)
                  : null
              }),
              y()(h()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  a = t.hasModeratedReplies,
                  n = t.onModeratedIconClick,
                  r = t.tweet
                return a ? E.a.createElement(pa.a, { link: ''.concat(r.permalink, '/hidden'), onPress: n }) : null
              }),
              y()(h()(e), '_renderBirdwatchNotesIcon', function () {
                var t = e.props,
                  a = t.onBirdwatchNotesIconClick,
                  n = t.onBirdwatchNotesIconShown,
                  r = t.tweet
                return !(
                  r.birdwatch_pivot &&
                  !0 ===
                    e.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_birdwatch_pivots_enabled')
                ) &&
                  r.has_birdwatch_notes &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_consumption_enabled') &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_contribution_enabled')
                  ? E.a.createElement(pt, { onPress: a, onShow: n, tweetId: r.id_str })
                  : null
              }),
              y()(h()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              y()(h()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  a = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  r = t.socialContext
                if (a && r && n && n(Ne.a.ItemType.USER)) {
                  var i,
                    o = (null === (i = r.landingUrl) || void 0 === i ? void 0 : i.url.match(pe.A.id)) || '',
                    l = r.text || ''
                  a({ topic: { id: o && o[0], name: l, description: Wa, type: Ce.a.Topic } })
                }
              }),
              y()(h()(e), '_renderTweetTextHWTweet', function (t) {
                var a = e.props,
                  n = a.excludeCardUrl,
                  r = a.hitHighlights,
                  i = a.isFocal,
                  l = a.linkify,
                  s = a.onEntityClick,
                  d = a.tweet,
                  u = a.tweetTextSize,
                  p = a.withCardLinks,
                  m = a.withInlineMedia,
                  h = a.withQuotedTweetLinks,
                  f = sa.a.getOriginalTweet(d),
                  b = sa.a.hasInteractiveText(f),
                  v = u || (b ? 'title4' : t.size),
                  g = c()(
                    c()({}, t),
                    {},
                    {
                      excludeCardUrl: n,
                      hitHighlights: r,
                      linkify: l,
                      onEntityClick: s,
                      size: v,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: f.unmentioned_user_ids,
                      weight: b ? 'heavy' : void 0,
                      withCardLinks: p,
                      withMediaLinks: !m,
                      withQuoteLinks: h || sa.a.isQuotedTweetUnavailable(f),
                      withUnicodeEmojis: Q.b,
                    },
                  )
                return E.a.createElement(
                  Kt,
                  null,
                  E.a.createElement(
                    lt,
                    o()({}, g, {
                      disableTranslation: f.user.protected,
                      isFocal: i,
                      lang: f.lang,
                      onMediaTranslation: e._handleMediaTranslations,
                      supplementalLang: f.supplemental_language,
                      text: f.text,
                      tweetId: f.id_str,
                      withOriginalText: i,
                    }),
                  ),
                )
              }),
              y()(h()(e), '_renderTweetText', function (t) {
                var a = e.props,
                  n = a.excludeCardUrl,
                  r = a.hitHighlights,
                  i = a.isFocal,
                  o = a.linkify,
                  l = a.onEntityClick,
                  c = a.tweet,
                  s = a.tweetTextSize,
                  d = a.withCardLinks,
                  u = a.withInlineMedia,
                  p = a.withQuotedTweetLinks,
                  m = sa.a.getOriginalTweet(c),
                  h = sa.a.hasInteractiveText(m),
                  f = s || (i || h ? 'title4' : 'body'),
                  b = (h && Ga.interactiveHighlightSpacer) || (e._isEdgeToEdgeEnabled && Ga.edgeToEdgeTextSpacer),
                  v = i ? Ga.expandedTweetText : b
                return E.a.createElement(
                  Kt,
                  null,
                  E.a.createElement(lt, {
                    disableTranslation: m.user.protected,
                    displayTextRange: m.display_text_range,
                    enrichments: m.enrichments,
                    entities: m.entities,
                    excludeCardUrl: n,
                    hitHighlights: i ? void 0 : r,
                    isFocal: i,
                    lang: m.lang,
                    linkify: !!i || o,
                    nativeID: t,
                    onEntityClick: l,
                    onMediaTranslation: e._handleMediaTranslations,
                    quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                    quotedTweetPermalink: m.quoted_status_permalink,
                    size: f,
                    style: v,
                    supplementalLang: m.supplemental_language,
                    text: m.text,
                    transformUrl: e._transformUrl,
                    tweetId: m.id_str,
                    unmentionedUserIds: m.unmentioned_user_ids,
                    weight: h ? 'heavy' : void 0,
                    withCardLinks: i ? void 0 : d,
                    withMediaLinks: i ? void 0 : !u,
                    withOriginalText: i,
                    withQuoteLinks: (!i && p) || sa.a.isQuotedTweetUnavailable(m),
                    withUnicodeEmojis: Q.b,
                  }),
                )
              }),
              y()(h()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              y()(h()(e), '_transformUrl', function (t) {
                var a
                return e._transformPromotedUrl(
                  t,
                  null === (a = e.props.promotedContent) || void 0 === a ? void 0 : a.click_tracking_info,
                )
              }),
              e
            )
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    a = this.props,
                    n = a.conversationTreeMetadata,
                    i = a.forwardPivotInfo,
                    l = a.hideConversationControlsEducationText,
                    s = a.hideExclusivityInfoEducationTextInReplies,
                    d = a.hideTrustedFriendsEducationTextInReplies,
                    u = a.isFocal,
                    p = a.loggedInUser,
                    m = a.onAvatarClick,
                    h = a.onBlur,
                    f = a.onClick,
                    b = a.onFocus,
                    v = a.onScreenNameClick,
                    g = a.promotedContent,
                    w = a.quotedTweetTombstoneInfo,
                    y = a.readerModeAvailable,
                    _ = a.renderCurationActionMenu,
                    C = a.showConversationHeadsUp,
                    T = a.socialContext,
                    I = a.to,
                    S = a.tweet,
                    A = a.withReaderModeBottomBar,
                    P = a.withTimestamp,
                    R = a.withTimestampLink,
                    B = a.withUnreadStyles,
                    M = sa.a.getOriginalTweet(S),
                    D = M.has_super_follower,
                    F = M.quick_promote_eligibility,
                    N = M.user,
                    H = null == F ? void 0 : F.eligibility,
                    U = this._getIsQuickPromoteEligible(H),
                    j = da.a.isPromoted(g),
                    z =
                      'true' ===
                        (null == g || null === (e = g.experiment_values) || void 0 === e
                          ? void 0
                          : e.pac_in_timeline) &&
                      this.context.featureSwitches.isTrue('responsive_web_promoted_account_card_enabled'),
                    W = !!j && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    q = !!j && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    G = !(!N.professional || !U),
                    Q = 'IneligibleCampaignRunning' === H || 'IneligibleCampaignPaused' === H,
                    X = 'string' == typeof I ? { pathname: I } : I,
                    Z = n && n.ancestorConnector,
                    J = n && n.indents,
                    Y = this._getWithTopLine(),
                    $ = this._getWithBottomLine(),
                    ee = Y || $,
                    te = (ee && !u) || !this._isEdgeToEdgeEnabled,
                    ae = X ? c()(c()({}, X), {}, { anchorless: !0 }) : void 0,
                    ne = u ? 'detail' : 'inline'
                  return !u &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? E.a.createElement(
                        ma.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        E.a.createElement(
                          yt.a,
                          { forwardPivotInfo: i, tweet: S },
                          E.a.createElement(ha.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: V.canUseDOM ? ae : void 0,
                            onBlur: h,
                            onFocus: b,
                            onPress: f,
                            promotedContent: g,
                            quotedTweetTombstoneInfo: w,
                            renderActionMenu: _ && V.canUseDOM ? _ : Na.a,
                            renderActionsBar: S.isPreview
                              ? function () {
                                  return E.a.createElement(he, { previewTweetId: S.id_str })
                                }
                              : function (e) {
                                  return E.a.createElement(
                                    E.a.Fragment,
                                    null,
                                    t._renderTweetActions({
                                      actionSize: e.actionSize,
                                      displayStyle: e.displayStyle,
                                      nativeID: e.nativeID,
                                      style: e.style,
                                      withCount: e.withCount,
                                      withAnalyticsAction: !0,
                                    }),
                                    t.props.withReaderModeBottomBar
                                      ? E.a.createElement(x.a, { style: Ga.readerBottomBar, testID: Me })
                                      : null,
                                  )
                                },
                            renderEducation: function (e) {
                              return E.a.createElement(
                                E.a.Fragment,
                                null,
                                G &&
                                  E.a.createElement(
                                    L.a,
                                    {
                                      link: ''.concat(S.permalink, '/quick_promote_web/intro'),
                                      onPress: t._getPromoteButtonOnPress(H),
                                      style: Ga.promoteButton,
                                      type: 'primaryOutlined',
                                    },
                                    t._getPromoteButtonText(H),
                                  ),
                                E.a.createElement(
                                  Ct,
                                  o()({}, e, {
                                    hideConversationControlsEducationText: !!l,
                                    hideExclusivityInfoEducationTextInReplies: !!s,
                                    hideTrustedFriendsEducationTextInReplies: !!d,
                                    loggedInUser: p,
                                  }),
                                ),
                              )
                            },
                            renderHighlightedUserLabel: function (e) {
                              var a
                              return 'AutomatedLabel' !==
                                (null === (a = e.label) || void 0 === a ? void 0 : a.userLabelType) ||
                                t.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                                ? E.a.createElement(ha.a.HighlightedUserLabel, e)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return E.a.createElement(ha.a.PromotedIndicator, o()({}, e, { withCircleIcon: q }))
                            },
                            renderPromotedUserProfileCard: function (e) {
                              return z
                                ? E.a.createElement(
                                    ha.a.PromotedUserProfileCard,
                                    o()({}, e, {
                                      followButton: E.a.createElement(K.a, { promotedContent: g, userId: e.userId }),
                                      link: { pathname: '/'.concat(M.user.screen_name), anchorless: !0 },
                                      onAvatarClick: m,
                                      onScreenNameClick: v,
                                      style: Ga.promotedUserCard,
                                    }),
                                  )
                                : null
                            },
                            renderPromotionStatusBadge: Q
                              ? function (e) {
                                  return E.a.createElement(kt, {
                                    nativeID: e.nativeID,
                                    status: t._getTweetPromotionStatus(H),
                                    style: Ga.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (e) {
                              return t._renderReplyContext({ nativeID: e.nativeID })
                            },
                            renderRichContent: function (e) {
                              return t._renderRichContent({ nativeID: e.nativeID, withRoundMediaCorners: te })
                            },
                            renderSelfThreadCTA: function () {
                              return t._renderSelfThreadCTA()
                            },
                            renderSocialContext: function (e) {
                              return t._renderSocialContext({ nativeID: e.nativeID })
                            },
                            renderText: function (e) {
                              return t._renderTweetTextHWTweet(e)
                            },
                            renderTimestamp: P
                              ? function (e) {
                                  return E.a.createElement(
                                    ha.a.Timestamp,
                                    o()({}, e, {
                                      link: R ? e.link : void 0,
                                      nativeID: t._isEdgeToEdgeEnabled ? void 0 : e.nativeID,
                                    }),
                                  )
                                }
                              : Na.a,
                            renderTombstone: function (e) {
                              return t._renderTombstoneHWTweet(e)
                            },
                            renderUserAvatar: function (e) {
                              return t._renderAvatar(e.nativeID)
                            },
                            renderUserName: function (e) {
                              return t._renderUserNameHWTweet(e)
                            },
                            socialContext: T
                              ? {
                                  contextType: T.contextType,
                                  isSelfRetweet: T.isSelfRetweet,
                                  link: T.landingUrl ? Object(ue.b)(T.landingUrl) : void 0,
                                  name: T.name,
                                  screenName: T.screenName,
                                  text: T.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: Fe,
                            tweet: S,
                            withBottomLine: $,
                            withTopLine: Y,
                            withUnreadStyles: B,
                          }),
                        ),
                      )
                    : E.a.createElement(fa.c.UseTweetA11yIds, { tweet: S }, function (e) {
                        var a = r()(e, 2),
                          o = a[0],
                          c = a[1],
                          w = W
                            ? sa.a.hasInteractiveText(M)
                              ? Ga.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : Ga.promotedIndicatorBelowHeader
                            : Ga.promotedIndicator,
                          T =
                            g && j
                              ? E.a.createElement(ba.a, {
                                  contentAuthorId: N.id_str,
                                  nativeID: o.promotedLabel,
                                  promotedContent: g,
                                  style: w,
                                  withCircleIcon: q,
                                })
                              : null,
                          I = Q
                            ? E.a.createElement(kt, {
                                nativeID: o.promotionStatusLabel,
                                status: t._getTweetPromotionStatus(H),
                                style: Ga.promotionStatus,
                              })
                            : null,
                          R = n
                            ? E.a.createElement(
                                k.b,
                                { nativeID: o.conversationLevel, style: O.a.visuallyHidden },
                                za({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          F = M.tombstoneInfo || S.tombstoneInfo,
                          U = E.a.createElement(
                            E.a.Fragment,
                            null,
                            F ? t._renderTombstone(o.tombstone, F) : null,
                            u || !F
                              ? E.a.createElement(
                                  E.a.Fragment,
                                  null,
                                  t._renderReplyContext({ nativeID: o.replyContext }),
                                  E.a.createElement(x.a, null, t._renderTweetText(o.text)),
                                  E.a.createElement(
                                    x.a,
                                    null,
                                    t._renderRichContent({ nativeID: o.richContent, withRoundMediaCorners: te }),
                                  ),
                                )
                              : null,
                          )
                        return E.a.createElement(
                          ma.b.Provider,
                          { value: t._getFeatureConfigurationContextProviderValue() },
                          E.a.createElement(
                            yt.a,
                            { forwardPivotInfo: i, tweet: S },
                            E.a.createElement(
                              va.a,
                              {
                                a11yDomIds: c,
                                actionMenu: _ && V.canUseDOM ? _() : null,
                                avatar: t._renderAvatar(o.avatar),
                                footer: t._renderFooter(),
                                header: t._renderHeader(o),
                                indents: J,
                                link: u || !V.canUseDOM ? void 0 : ae,
                                onBlur: h,
                                onFocus: b,
                                onPress: f,
                                testID: Fe,
                                timestamp:
                                  j || t._getUsernameStackedLayoutEnabled() || !P
                                    ? null
                                    : t._renderTweetRelativeTimestamp(o.timestamp),
                                userFollowIndicators: D ? E.a.createElement(ga.a, { type: 'superFollower' }) : void 0,
                                userLabel: t._renderUserLabel(N, o.userLabel),
                                userName: t._renderUserName(o.username, o.timestamp),
                                withBottomLine: $,
                                withElbow: J ? 'side' === Z : void 0,
                                withFooterGap: !u,
                                withFullWidthChildren: u || (!ee && t._isEdgeToEdgeEnabled),
                                withTopLine: Y,
                                withUnreadStyles: B,
                              },
                              W && u ? t._renderPromotedDetails(q) : null,
                              W && !u ? T : null,
                              R,
                              U,
                              G &&
                                'inline' === ne &&
                                E.a.createElement(
                                  L.a,
                                  {
                                    link: ''.concat(S.permalink, '/quick_promote_web/intro'),
                                    onPress: t._getPromoteButtonOnPress(H),
                                    style: Ga.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  t._getPromoteButtonText(H),
                                ),
                              t._renderFocalContent(W, G, I),
                              'inline' === ne &&
                                E.a.createElement(Ct, {
                                  conversationControlLabelNativeID: o.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: o.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!l,
                                  hideExclusivityInfoEducationTextInReplies: !!s,
                                  hideTrustedFriendsEducationTextInReplies: !!d,
                                  loggedInUser: p,
                                  trustedFriendsLabelNativeID: o.trustedFriendsLabel,
                                  tweet: S,
                                }),
                              z
                                ? E.a.createElement(ha.a.PromotedUserProfileCard, {
                                    followButton: E.a.createElement(K.a, { promotedContent: g, userId: M.user.id_str }),
                                    isUserProtected: M.user.protected,
                                    isUserVerified: M.user.verified,
                                    link: { pathname: '/'.concat(M.user.screen_name), anchorless: !0 },
                                    onAvatarClick: m,
                                    onScreenNameClick: v,
                                    promotedContent: g,
                                    style: Ga.promotedUserCard,
                                    userDescription: M.user.description,
                                    userId: M.user.id_str,
                                    userName: M.user.name,
                                    userScreenName: M.user.screen_name,
                                  })
                                : null,
                              S.isPreview
                                ? E.a.createElement(he, { previewTweetId: S.id_str })
                                : t._renderTweetActions({
                                    actionSize: u ? 'large' : void 0,
                                    displayStyle: u ? 'block' : void 0,
                                    nativeID: o.actionsBar,
                                    style: [
                                      u ? Ga.actionBarFocalTweet : Ga.actionBar,
                                      u && !y && Ga.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !u,
                                    withCount: !u,
                                  }),
                              t._renderReaderModeButton(),
                              W || u ? null : T,
                              u ? null : I,
                              'detail' === ne &&
                                E.a.createElement(Ct, {
                                  conversationControlLabelNativeID: o.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: o.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!l,
                                  hideExclusivityInfoEducationTextInReplies: !!s,
                                  hideTrustedFriendsEducationTextInReplies: !!d,
                                  loggedInUser: p,
                                  showConversationHeadsUp: C,
                                  trustedFriendsLabelNativeID: o.trustedFriendsLabel,
                                  tweet: S,
                                }),
                              A ? E.a.createElement(x.a, { style: Ga.readerBottomBar, testID: Me }) : null,
                            ),
                          ),
                        )
                      })
                },
              },
              {
                key: '_renderTweetRelativeTimestamp',
                value: function (e) {
                  var t = this.props,
                    a = t.promotedContent,
                    n = t.tweet,
                    r = t.withTimestampLink,
                    i = sa.a.getOriginalTweet(n)
                  return E.a.createElement(wa.a, {
                    link: r
                      ? { pathname: i.permalink, state: { contextTweetId: i.id_str, promotedContent: a } }
                      : void 0,
                    nativeID: e,
                    timestamp: i.created_at,
                  })
                },
              },
              {
                key: '_renderUserNameHWTweet',
                value: function (e) {
                  var t = this.props,
                    a = t.onAvatarClick,
                    n = t.onScreenNameClick,
                    r = t.tweet,
                    i = t.withUserHoverCard,
                    l = t.withUserName,
                    c = sa.a.getOriginalTweet(r).user
                  return l
                    ? E.a.createElement(
                        ha.a.UserName,
                        o()({}, e, {
                          onAvatarClick: a,
                          onLinkClick: n,
                          onScreenNameClick: n,
                          withHoverCard: i && !c.blocking,
                          withLink: !!n,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserName',
                value: function (e, t) {
                  var a = this.props,
                    n = a.isFocal,
                    r = a.onAvatarClick,
                    i = a.onScreenNameClick,
                    o = a.promotedContent,
                    l = a.tweet,
                    c = a.withUserHoverCard,
                    s = a.withUserName,
                    d = sa.a.getOriginalTweet(l).user,
                    u = da.a.isPromoted(o)
                  return s
                    ? E.a.createElement(ya.a, {
                        isProtected: d.protected,
                        isVerified: d.verified,
                        name: d.name,
                        nativeID: e,
                        onAvatarClick: r,
                        onLinkClick: i,
                        onScreenNameClick: i,
                        promotedContent: o,
                        screenName: d.screen_name,
                        screenNameSuffix:
                          u || n || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(),
                        withHoverCard: c && !d.blocking,
                        withLink: !!i,
                        withStackedLayout: this._getUsernameStackedLayoutEnabled(),
                      })
                    : null
                },
              },
              {
                key: '_renderUserLabel',
                value: function (e, t) {
                  var a = e.highlightedLabel,
                    n = 'AutomatedLabel' === (null == a ? void 0 : a.userLabelType),
                    r = !!n && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !a || (n && !r) ? null : E.a.createElement(_a.a, { label: a, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, a) {
                  var n = this.props,
                    r = n.isFocal,
                    i = n.onAnalyticsClick,
                    o = n.tweet,
                    l = sa.a.getOriginalTweet(o),
                    c = l.created_at,
                    s = l.place,
                    d = l.quick_promote_eligibility,
                    u = l.source,
                    p = l.source_name,
                    m = null == d ? void 0 : d.eligibility,
                    h = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                  return r
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(
                          x.a,
                          { style: Ga.footerContainer },
                          E.a.createElement(
                            x.a,
                            { style: Ga.footerContent },
                            E.a.createElement(Ea.a, {
                              linkColor: 'gray700',
                              place: s && s.full_name,
                              placeLink: s && s.id ? '/places/'.concat(s.id) : void 0,
                              source: u && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: Ga.timeLocSource,
                              timestamp: c,
                              timestampLink: l.permalink,
                            }),
                            E.a.createElement(
                              x.a,
                              { style: Ga.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          a,
                        ),
                        E.a.createElement(wt, {
                          endControl: t
                            ? E.a.createElement(
                                L.a,
                                {
                                  link: ''.concat(o.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(m),
                                  style: Ga.tweetAnalyticsPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(m),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: i,
                          tweet: l,
                        }),
                        E.a.createElement(Wt, {
                          isNonCompliantTweet: 'non_compliant' === l.limited_actions,
                          tweetId: l.id_str,
                          tweetLikeCount: l.favorite_count,
                          tweetPermalink: l.permalink,
                          tweetQuoteTweetCount: l.quote_count,
                          tweetReactionCount: l.reaction_count,
                          tweetRetweetCount: l.retweet_count,
                          withReactions: h,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderFooter',
                value: function () {
                  var e = this.props,
                    t = e.isFocal,
                    a = e.topic,
                    n = e.topicFollowPrompt
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    this._renderSelfThreadCTA(),
                    !t && a && n && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? ke({ defaultRef: this._defaultInlinePromptRef, topic: a, topicFollowPrompt: n })
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function (e) {
                  var t = this.props,
                    a = t.isFocal,
                    n = t.topic,
                    r = t.topicFollowPrompt
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    a && r && n && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? ke({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: r })
                      : this._renderSocialContext({ nativeID: e.socialContext }),
                  )
                },
              },
              {
                key: '_renderSelfThreadCTA',
                value: function () {
                  var e = this.props,
                    t = e.onSelfThreadClick,
                    a = e.onSelfThreadImpression,
                    n = e.tweet,
                    r = sa.a.getOriginalTweet(n),
                    i = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? E.a.createElement(Le.a, {
                        avatarUrl: i ? r.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: a,
                        style: Ga.selfThreadCTA,
                        to: n.permalink,
                        userName: r.user.screen_name,
                        withConversationLine: i,
                      })
                    : null
                },
              },
              {
                key: '_shouldShowSelfThread',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    a = e.tweet,
                    n = e.withSelfThread,
                    r = sa.a.getOriginalTweet(a)
                  return n && !t && r.self_thread && !a.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    a = e.tweet,
                    n = sa.a.getOriginalTweet(a)
                  return this._shouldShowSelfThread() && t && !n.in_reply_to_status_id_str
                },
              },
              {
                key: '_getConversationPosition',
                value: function () {
                  return this._shouldShowSelfThreadWithAvatar()
                    ? { isStart: !0, isEnd: !1 }
                    : this.props.conversationPosition
                },
              },
              {
                key: '_getIsConversationStart',
                value: function () {
                  var e = this.props.tweet,
                    t = this._getConversationPosition(),
                    a = sa.a.getOriginalTweet(e)
                  return t && (t.isStart || !a.in_reply_to_status_id_str)
                },
              },
              {
                key: '_getIsQuickPromoteEligible',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                    case 'EligibleWithPreviousCampaign':
                      return !0
                    default:
                      return !1
                  }
                },
              },
              {
                key: '_getPromoteButtonText',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                      return Va
                    case 'EligibleWithPreviousCampaign':
                      return Ka
                    default:
                      return (
                        Object(Ae.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        Va
                      )
                  }
                },
              },
              {
                key: '_getTweetPromotionStatus',
                value: function (e) {
                  switch (e) {
                    case 'IneligibleCampaignRunning':
                      return 'in-progress'
                    case 'IneligibleCampaignPaused':
                      return 'paused'
                    default:
                      return (
                        Object(Ae.a)(
                          new Error(
                            'Tweet promotion badge should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        'in-progress'
                      )
                  }
                },
              },
              {
                key: '_renderSocialContext',
                value: function (e) {
                  var t = e.nativeID,
                    a = this.props,
                    n = a.conversationPosition,
                    r = a.injectedFeedbackItem,
                    i = a.isFocal,
                    l = a.onUndoTopicNotInterestedClick,
                    c = a.promotedContent,
                    s = a.socialContext,
                    d = a.topic
                  if (!a.withSocialContext || !s || da.a.isPromoted(c)) return null
                  var u = this.context.featureSwitches,
                    p = n && !this._getIsConversationStart(),
                    m = s.contextType,
                    h = s.isSelfRetweet,
                    f = s.landingUrl,
                    b = s.name,
                    v = s.screenName,
                    g = s.text,
                    w = s.topicContext,
                    y = f ? Object(ue.b)(f) : void 0
                  if (
                    w &&
                    d &&
                    (function (e) {
                      var t = e.featureSwitches,
                        a = e.isExpanded,
                        n = e.topic,
                        r = e.topicContext
                      return (
                        Object(La.c)(r) &&
                        a &&
                        n.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in Ra) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: u, isExpanded: i, topic: d, topicContext: w })
                  )
                    return E.a.createElement(Ba, { onUndoTopicNotInterestedClick: l })
                  var _ = {
                      contextType: m,
                      iconSize: 'large',
                      withLeftPadding: this.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                        ? p || !1
                        : !p && !i,
                      text: g,
                    },
                    T =
                      w && d
                        ? (function (e) {
                            var t,
                              a = e.featureSwitches,
                              n = e.iconSize,
                              r = e.injectedFeedbackItem,
                              i = e.isExpanded,
                              o = e.socialContext,
                              l = e.topic,
                              c = e.withLeftPadding,
                              s = o.contextType,
                              d = o.landingUrl,
                              u = o.topicContext,
                              p = d ? Object(ue.b)(d) : void 0,
                              m = u && Object(La.b)(u),
                              h = u && Object(La.c)(u),
                              f = a.isTrue('media_edge_to_edge_content_enabled'),
                              b = f ? Pe.a.TextOnly : Pe.a.Topic,
                              v =
                                null == r || null === (t = r.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              g = u ? Object(Sa.a)(u) : void 0,
                              w = null != u && u.bannerText ? E.a.createElement(C.a, u.bannerText) : o.text
                            if (m && a.getStringValue('topics_context_controls_followed_variation') in Ra) {
                              var y = Ra[a.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: n,
                                contextType: b,
                                rightControl: E.a.createElement(Ma, {
                                  bannerText: o.topicContext && o.topicContext.bannerText,
                                  label: y,
                                  link: p,
                                  linkText: o.topicContext && o.topicContext.linkText,
                                  topic: l,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  a.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: g,
                                text: w,
                              }
                            }
                            if (h) {
                              if (a.getStringValue('topics_context_controls_implicit_variation') in Ra) {
                                var _,
                                  T = Ra[a.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: n,
                                  contextType: b,
                                  rightControl: E.a.createElement(Ma, {
                                    bannerText: o.topicContext && o.topicContext.bannerText,
                                    label: T,
                                    link: p,
                                    linkText: null === (_ = o.topicContext) || void 0 === _ ? void 0 : _.linkText,
                                    onNotInterestedPress: v,
                                    topic: l,
                                    withRightControl: a.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: g,
                                  text: w,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    a.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var x = E.a.createElement(Da, { isExpanded: i, onNotInterestedPress: v, topic: l })
                              return i
                                ? {
                                    bottomControl: x,
                                    contextType: s,
                                    iconSize: 'xLarge',
                                    iconStyle: Fa.iconStyle,
                                    textColor: 'text',
                                    textSize: 'headline1',
                                    text: o.text,
                                    topicData: void 0,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                                : {
                                    contextType: s,
                                    iconSize: n,
                                    iconStyle: Fa.iconStyle,
                                    rightControl: x,
                                    topicData: g,
                                    text: o.text,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                            }
                            return { contextType: s, iconSize: n, text: o.text, withLeftPadding: c }
                          })({
                            featureSwitches: u,
                            iconSize: _.iconSize,
                            injectedFeedbackItem: r,
                            isExpanded: i,
                            socialContext: s,
                            topic: d,
                            withLeftPadding: _.withLeftPadding,
                          })
                        : _
                  return E.a.createElement(
                    Oe.a,
                    o()({}, T, {
                      link: y,
                      nativeID: t,
                      onClick: m === Pe.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: b, screenName: v, isSelfRetweet: h },
                      style: Ga.socialContext,
                      testID: De,
                      weight: 'bold',
                    }),
                  )
                },
              },
              {
                key: '_renderReplyContext',
                value: function (e) {
                  var t,
                    a = e.nativeID,
                    n = this.props,
                    r = n.conversationPosition,
                    i = n.conversationTreeMetadata,
                    o = n.isFocal,
                    l = n.onReplyContextClick,
                    c = n.replyContext,
                    s = n.tweet,
                    d = sa.a.getOriginalTweet(s),
                    u = d.self_thread
                  return this._shouldShowSelfThread() ||
                    c !== Ca.a.ReplyContextTypes.Isolated ||
                    !d.in_reply_to_status_id_str ||
                    (i && !o) ||
                    (u && r && !r.isStart) ||
                    (u && o)
                    ? null
                    : E.a.createElement(Ca.a, {
                        displayTextRange: d.display_text_range,
                        inReplyToName: d.in_reply_to_name,
                        inReplyToScreenName: d.in_reply_to_screen_name,
                        inReplyToStatusIdStr: d.in_reply_to_status_id_str,
                        inReplyToUserIdStr: d.in_reply_to_user_id_str,
                        nativeID: a,
                        onClick: l,
                        style: [Ga.replyContext, o && Ga.replyContextBig],
                        tweetPermalink: d.permalink,
                        unmentionedUserIds: d.unmentioned_user_ids,
                        userMentionsEntities: null === (t = d.entities) || void 0 === t ? void 0 : t.user_mentions,
                      })
                },
              },
              {
                key: '_renderReaderModeButton',
                value: function () {
                  var e = this.props,
                    t = e.readerModeAvailable,
                    a = e.tweet
                  return t
                    ? E.a.createElement(
                        x.a,
                        { style: Ga.actionBarWithInlineReply },
                        E.a.createElement(Ee.a, { focalTweet: a, isExpanded: !0, readerModeAvailable: !!t }),
                      )
                    : null
                },
              },
              {
                key: '_renderTweetActions',
                value: function (e) {
                  var t = e.actionSize,
                    a = e.displayStyle,
                    n = e.nativeID,
                    r = e.style,
                    i = e.withAnalyticsAction,
                    o = e.withCount,
                    l = this.props,
                    c = l.allowDownvote,
                    s = l.bookmarkFolderId,
                    d = l.contextTweet,
                    u = l.enableKeyboardShortcuts,
                    p = l.forwardPivotInfo,
                    m = l.onLikeSuccess,
                    h = l.onReplyPress,
                    f = l.promotedContent,
                    b = l.tweet,
                    v = l.withActionsDisabled,
                    g = l.withRemoveFromBookmarks
                  return this.props.withActions
                    ? E.a.createElement(mt.a, {
                        actionSize: t,
                        allowDownvote: c,
                        bookmarkFolderId: s,
                        displayStyle: a,
                        enableKeyboardShortcuts: u,
                        forwardPivotInfo: b.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: n,
                        onLikeSuccess: m,
                        onReplyPress: h,
                        promotedContent: f,
                        style: r,
                        tweet: d || b,
                        withActionsDisabled: v,
                        withAnalyticsAction: i,
                        withCount: o,
                        withRemoveFromBookmarks: g,
                      })
                    : null
                },
              },
              {
                key: '_renderAvatar',
                value: function (e) {
                  var t = this.props,
                    a = t.onAvatarClick,
                    n = t.onScreenNameClick,
                    r = t.promotedContent,
                    i = t.tweet,
                    o = t.withAvatarLink,
                    l = t.withUserAvatar,
                    c = t.withUserHoverCard,
                    s = t.withUserPresence,
                    d = sa.a.getOriginalTweet(i).user,
                    u = sa.a.getOriginalTweet(i).user.id_str
                  return l
                    ? E.a.createElement(la, {
                        avatarRef: this._defaultInlinePromptRef,
                        nativeID: e,
                        onClick: a,
                        onHoverCardScreenNameClick: n,
                        promotedContent: r,
                        screenName: d.screen_name,
                        uri: d.profile_image_url_https,
                        userId: u,
                        withHoverCard: c && !d.blocking,
                        withLink: o,
                        withNftAvatar: d.has_nft_avatar,
                        withUserPresence: s,
                      })
                    : null
                },
              },
              {
                key: '_renderTombstoneHWTweet',
                value: function (e) {
                  var t = e.actionLink,
                    a = e.actionText,
                    n = e.children,
                    r = e.nativeID,
                    i = e.style,
                    o = this.props,
                    l = o.conversationTreeMetadata,
                    c = o.onClick
                  return E.a.createElement(
                    x.a,
                    { nativeID: r, style: i },
                    E.a.createElement(
                      ve.a,
                      { actionLink: t, actionText: a, conversationTreeMetadata: l, inline: !0, onClick: c },
                      n,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e, t) {
                  var a = this.props,
                    n = a.conversationTreeMetadata,
                    r = a.isFocal,
                    i = a.onClick,
                    o = a.tweet,
                    l = sa.a.getOriginalTweet(o),
                    c = t.richText
                  return l && t && c
                    ? E.a.createElement(
                        x.a,
                        { nativeID: e, style: Ga.spacingVertical },
                        E.a.createElement(
                          ve.a,
                          {
                            actionLink: r ? void 0 : l.permalink,
                            actionText: r ? void 0 : ja,
                            conversationTreeMetadata: n,
                            inline: !0,
                            onClick: r ? void 0 : i,
                          },
                          E.a.createElement(C.a, { entities: c.entities, rtl: c.rtl, text: c.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = sa.a.getOriginalTweet(e),
                    a = t.extended_entities && t.extended_entities.media
                  return (
                    !!(a && a.length > 0) &&
                    a.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_quoteTweetHasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = sa.a.getOriginalTweet(e)
                  return !!(
                    t.quoted_status &&
                    t.quoted_status.entities &&
                    t.quoted_status.entities.media &&
                    t.quoted_status.entities.media.length > 0 &&
                    t.quoted_status.entities.media.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_renderRichContent',
                value: function (e) {
                  var t = e.nativeID,
                    a = e.withRoundMediaCorners,
                    n = this.context.featureSwitches,
                    r = this.props.withActionsDisabled,
                    i = this.props,
                    o = i.enableKeyboardShortcuts,
                    l = i.forwardPivotInfo,
                    c = i.inlineCalloutInfo,
                    s = i.innerForwardPivotInfo,
                    d = i.isFocal,
                    u = i.linkableQuotedTweet,
                    p = i.onCardLinkClick,
                    m = i.onMediaClick,
                    h = i.onQuoteTweetClick,
                    f = i.preventVideoPlayback,
                    b = i.promotedContent,
                    v = i.quoteTweetSocialContextProps,
                    g = i.quotedTweetTombstoneInfo,
                    w = i.tweet,
                    y = i.withCardLinks,
                    _ = i.withInlineMedia,
                    C = i.withUserHoverCard,
                    T = d ? 'DETAIL' : 'TIMELINE',
                    x = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!ca.b.isDesktopOS() && !d,
                    I = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    S = sa.a.getOriginalTweet(w)
                  return (
                    (r = r || Object(ft.b)(n, S, ft.a.VoteOnPoll)),
                    E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(Ta.a, {
                        cardCacheLocationKey: T,
                        displayMediaMetadata: d,
                        enableKeyboardShortcuts: o,
                        forwardPivotInfo: w.softIntervention || l,
                        inlineCalloutInfo: c,
                        innerForwardPivotInfo: s,
                        isMediaMaxHeightEnabled: x,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: T,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: m,
                        onQuoteTweetClick: h,
                        preventVideoPlayback: f,
                        promotedContent: b,
                        quoteTweetSingleImageMinAspectRatio: Ua,
                        quoteTweetSocialContextProps: v,
                        quotedTweetTombstoneInfo: g,
                        renderQuoteTweetTombstone: function (e) {
                          return E.a.createElement(_e, e)
                        },
                        singleImageMaxAspectRatio: Ha,
                        singleImageMinAspectRatio: d ? 0.1 : Ua,
                        tweet: w,
                        withActionsDisabled: r,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: y,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !d && sa.a.hasMedia(S, !_),
                        withMediaTagsIcon: d,
                        withQuoteTweetHeaderLinks: !V.canUseDOM,
                        withQuoteTweetLink: u,
                        withQuoteTweetMedia: _,
                        withReactions: I,
                        withRoundMediaCorners: a,
                        withTweetMedia: _,
                        withUserHoverCard: C,
                      }),
                      this._renderBirdwatchPivot(),
                    )
                  )
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      y()(qa, 'contextType', P.a),
        y()(qa, 'displayName', 'Tweet'),
        y()(qa, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: ae.a,
          onModeratedIconClick: ae.a,
          onModeratedIconShown: ae.a,
          replyContext: Ca.a.ReplyContextTypes.Isolated,
          withActions: !1,
          withAvatarLink: !0,
          withBirdwatchPivots: !0,
          withCardLinks: !1,
          withInlineMedia: !0,
          withQuotedTweetLinks: !1,
          withRemoveFromBookmarks: !1,
          withSocialContext: !1,
          withTimestampLink: !0,
          withUserHoverCard: !0,
          withUserAvatar: !0,
          withUserName: !0,
          withTimestamp: !0,
        })
      var Ga = O.a.create(function (e) {
        return {
          replyContextBig: { marginTop: e.spaces.space12, marginBottom: 0 },
          replyContext: { marginBottom: e.spaces.space2 },
          selfThreadCTA: { marginHorizontal: 'calc(-1 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
          innerRow: { alignItems: 'baseline', flexDirection: 'row', flexShrink: 1 },
          actionBar: { marginTop: e.spaces.space12 },
          actionBarFocalTweet: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            height: e.spaces.space48,
          },
          actionsBarNarrow: { minWidth: 250, marginRight: 'auto' },
          actionBarWithInlineReply: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
          },
          promoteButton: { marginTop: e.spaces.space12 },
          tweetAnalyticsPromoteButton: { marginVertical: e.spaces.space8 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedDetails: { marginTop: e.spaces.space4 },
          promotionStatus: { marginTop: e.spaces.space12 },
          promotedUserCard: { marginTop: e.spaces.space8 },
          socialContext: { marginBottom: e.spaces.space4, marginTop: '-'.concat(e.spaces.space4) },
          spacingVertical: { marginVertical: e.spaces.space4 },
          followTopicButton: { justifyContent: 'center' },
          expandedTweetText: { marginTop: e.spaces.space12 },
          footerContainer: { marginVertical: e.spaces.space16 },
          footerContent: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          footerIcons: { flexDirection: 'row' },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
          edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 },
          readerBottomBar: {
            borderBottomColor: e.colors.nestedBorderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            marginTop: e.spaces.space20,
            width: e.spaces.space32,
          },
          timeLocSource: { marginRight: e.spaces.space12 },
          topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) },
        }
      })
      t.b = de(qa)
    },
    'EQ/a': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = a.n(o),
        c = a('yiKp'),
        s = a.n(c),
        d = (a('jwue'), a('7x/C'), a('+oxZ'), a('3XMw')),
        u = a.n(d),
        p = a('/yvb'),
        m = a('fn9Y'),
        h = u.a.c0530da5,
        f = u.a.ifea3114
      var b = function (e) {
          return r.a.createElement(p.a, {
            accessibilityLabel: h,
            hoverLabel: { label: f },
            icon: r.a.createElement(m.a, null),
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
        _ = a('1YZw'),
        E = a('CaKu'),
        C = a('y+lG'),
        T = a('SrIh'),
        x = a('Irs7'),
        I = a('uDfI'),
        S = a('zCf4'),
        k = a('jwTb'),
        A = a('SOvA'),
        L = a('I/9y'),
        O = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: k.a,
            text: u.a.fcc684a9,
            testID: g,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: A.a,
            text: u.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return E.a.isAvailable()
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
            Icon: m.a,
            text: u.a.if23a251,
          },
        },
        P = ['isAvailable', 'scribeAction']
      function R(e) {
        var t = Object(x.b)()
        return {
          getActionItem: (function (e, t) {
            var a = Object(I.c)(),
              n = Object(S.f)()
            return r.a.useMemo(
              function () {
                return function (r) {
                  var i = O[r.type],
                    o = i.isAvailable,
                    l = i.scribeAction,
                    c = y()(i, P)
                  if (!o()) return null
                  var d = s()({}, c)
                  function u() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      c = s()(s()({}, e.scribeNamespace), {}, { action: l }, r.scribeNamespace),
                      d = { text: i, url: o },
                      u = { analytics: t, dispatch: a, history: n, mergedScribeNamespace: c }
                    !(function (e, t, a) {
                      var n = function () {
                        return a.analytics.scribe(a.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return n(), void a.history.push(s()(s()({}, M(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            E.a.setString(Object(C.a)(t.url)),
                            n(),
                            void a.dispatch(Object(_.b)({ text: B.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            n(),
                            void a.history.push(
                              s()(
                                s()({ pathname: '/compose/tweet' }, M(t)),
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
      var B = { copyLinkSuccessMessage: u.a.f88553c8, shareTextPrefixFormatter: u.a.gb5851d7 }
      function M(e) {
        var t = e.url,
          a = e.text
        return { query: { text: a ? B.shareTextPrefixFormatter({ prefix: a, url: t }) : t } }
      }
      var D = a('mN6z')
      var F = a('mjJ+'),
        N = a('rHpw'),
        H = { element: 'share' }
      function U(e) {
        var t = (function (e) {
            var t = r.a.useRef({ previous: void 0 })
            function a(e) {
              return (t.current.previous = e), e
            }
            var n = t.current.previous
            return n && (e === n || Object(D.a)(e, n)) ? n : a(e)
          })(s()(s()({}, H), e.scribeNamespace)),
          a = R(s()(s()({}, e), {}, { scribeNamespace: t })),
          n = a.analytics,
          i = a.getActionItem
        var o = e.ButtonComponent || j
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
      function j(e) {
        return r.a.createElement(b, l()({}, e, { style: z.button, testID: v }))
      }
      var z = N.a.create(function (e) {
          return { button: { marginRight: e.spaces.space4 } }
        }),
        W = ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel']
      function V(e) {
        var t = e.copyLinkShareLabel,
          a = e.dmShareLabel,
          n = e.externalShareLabel,
          o = e.tweetShareLabel,
          l = y()(e, W)
        return r.a.createElement(
          U,
          l,
          r.a.createElement(i, { label: o, type: 'tweet' }),
          r.a.createElement(i, { label: a, type: 'dm' }),
          r.a.createElement(i, { label: t, type: 'copy' }),
          r.a.createElement(i, { label: n, type: 'via' }),
        )
      }
      ;(V.Action = i), (V.Custom = U)
      t.a = V
    },
    JUsM: function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('uFXj'), a('2G9S'), a('ERkP')),
        o = a.n(i),
        l = a('t62R'),
        c = a('rHpw'),
        s = a('shC7'),
        d = a('MWbm'),
        u = c.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              backgroundColor: e.colors.navigationBackground,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              borderColor: e.colors.gray50,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            containerDown: { marginTop: e.spaces.space12 },
            containerUp: { marginTop: e.spaces.space20 },
            text: { flexShrink: 1, alignSelf: 'center', alignItems: 'flex-start' },
            actionsContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: e.spaces.space12 },
            arrowContainer: { position: 'absolute', display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrowDirectionDown: { bottom: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrow: {
              borderStyle: 'solid',
              borderTopWidth: 0,
              borderRightWidth: e.spaces.space1,
              borderBottomWidth: e.spaces.space1,
              borderLeftWidth: 0,
              borderColor: e.colors.gray50,
              width: e.spaces.space12,
              height: e.spaces.space12,
              backgroundColor: e.colors.navigationBackground,
            },
          }
        })
      t.a = function (e) {
        var t = e.containerRef,
          a = e.primaryAction,
          n = e.secondaryAction,
          i = e.text,
          c = o.a.useState(void 0),
          p = r()(c, 2),
          m = p[0],
          h = p[1],
          f = s.a.getConstants().isRTL,
          b = o.a.useRef(0),
          v = o.a.useRef(0),
          g = (function () {
            if (null != t && t.current && m) {
              var e = t.current.getBoundingClientRect(),
                a = e.left,
                n = e.top,
                r = e.width
              b.current = n
              var i = a + r / 2 - m
              return { left: f ? void 0 : i, right: f ? i : void 0 }
            }
          })(),
          w = v.current < b.current,
          y = w ? [u.arrowDirectionDown] : [u.arrowDirectionUp],
          _ = w
            ? f
              ? { transform: 'rotate(-45deg)' }
              : { transform: 'rotate(45deg)' }
            : f
            ? { transform: 'rotate(135deg)' }
            : { transform: 'rotate(-135deg)' },
          E = w ? [u.containerDown] : [u.containerUp]
        return o.a.createElement(
          d.a,
          {
            accessibilityRole: 'text',
            onLayout: function (e) {
              var t = e.nativeEvent.layout,
                a = t.left,
                n = t.top,
                r = t.width
              ;(v.current = n), h(a + r / 2)
            },
            style: [u.root, E],
          },
          null != t && t.current
            ? o.a.createElement(
                d.a,
                { style: [y, u.arrowContainer, g] },
                o.a.createElement(d.a, { style: [u.arrow, _] }),
              )
            : null,
          o.a.createElement(l.b, { style: u.text }, i),
          o.a.createElement(d.a, { style: u.actionsContainer }, a, n),
        )
      }
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
          return U
        })
      a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('v6aA'),
        o = a.p + 'birdwatch_banner.47997385.jpg',
        l = a('vZpt'),
        c = a('L5MV'),
        s = a('3XMw'),
        d = a.n(s),
        u = a('yoO3'),
        p = a('7JQg'),
        m = a('VS6U'),
        h = a('MWbm'),
        f = a('t62R'),
        b = a('h0NW'),
        v = a('/yvb'),
        g = a('rHpw'),
        w = a('yiKp'),
        y = a.n(w),
        _ = a('Lsrn'),
        E = a('k/Ka'),
        C = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            y()(
              y()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
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
        x = a('sUoZ'),
        I = a('fBGZ'),
        S = d.a.b721eb37,
        k = d.a.b5711f09,
        A = d.a.df4bead0,
        L = d.a.jdb52860,
        O = d.a.b468ea24,
        P = d.a.b25fcbe4,
        R = d.a.f6d0427f,
        B = d.a.c8c2c891,
        M = d.a.g98ea6c0,
        D = d.a.ff3e0be2,
        F = d.a.i859a9d3,
        N = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        H = { page: 'birdwatch', section: 'about' },
        U = function (e) {
          var t = e.history,
            a = r.a.useContext(i.a).featureSwitches,
            n = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(h.a, { style: [j.header, { backgroundImage: 'url('.concat(o, ')') }] }),
              r.a.createElement(
                h.a,
                { style: j.content },
                r.a.createElement(f.b, { size: 'title4', style: j.textSection, weight: 'heavy' }, k),
                r.a.createElement(f.b, { color: 'gray700', style: j.textSection }, A),
                r.a.createElement(b.a, z),
              ),
              r.a.createElement(h.a, { style: j.learnMore }, r.a.createElement(f.b, { link: N }, F)),
              !a.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                r.a.createElement(
                  h.a,
                  { style: j.buttonContainer },
                  r.a.createElement(
                    v.a,
                    { accessibilityLabel: D, link: '/i/flow/join-birdwatch', style: j.button, type: 'brandFilled' },
                    D,
                  ),
                ),
            )
          return r.a.createElement(
            p.c,
            { namespace: H },
            r.a.createElement(
              u.a,
              null,
              r.a.createElement(m.a, {
                TabBar: c.a,
                history: t,
                primaryContent: n,
                sidebarContent: r.a.createElement(l.a, null),
                title: S,
                withTweetButton: !1,
              }),
            ),
          )
        },
        j = g.a.create(function (e) {
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
          accessibilityLabel: S,
          containerStyle: j.infoItemContainer,
          items: [
            { label: L, decoration: r.a.createElement(T, { style: j.icon }), description: O },
            { label: P, decoration: r.a.createElement(x.a, { style: j.icon }), description: R },
            { label: B, decoration: r.a.createElement(I.a, { style: j.icon }), description: M },
          ],
        }
      t.default = U
    },
    L5MV: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('2G9S'), a('ERkP')),
        b = a.n(f),
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
        _ = a('3XMw'),
        E = a.n(_),
        C = a('gASw'),
        T = a('v6aA'),
        x = a('C6f5'),
        I = a('2qZs'),
        S = a('OKMS'),
        k = a('boUI'),
        A = a('6ZHn'),
        L = a('89Im'),
        O = a('yiKp'),
        P = a.n(O),
        R = a('Lsrn'),
        B = a('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            P()(
              P()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
                d: 'M11.188 14.813c.217.217.506.337.812.337.307 0 .596-.12.813-.337l5-5c.217-.218.337-.507.337-.815 0-.307-.12-.595-.338-.812-.217-.216-.506-.336-.814-.336h-.003c-.307 0-.594.12-.81.337l-3.035 3.037V2c0-.634-.517-1.15-1.15-1.15-.634 0-1.15.516-1.15 1.15v9.225L7.813 8.188C7.596 7.97 7.307 7.85 7 7.85c-.308 0-.596.12-.813.338-.218.22-.337.51-.337.817 0 .306.12.593.337.808l5 5z',
              }),
              b.a.createElement('path', {
                d: 'M21.25 12.85c-.634 0-1.15.517-1.15 1.15v5.652c0 .216-.176.392-.392.392H4.292c-.216 0-.392-.176-.392-.392V14c0-.634-.516-1.15-1.15-1.15S1.6 13.366 1.6 14v5.652c0 1.484 1.208 2.692 2.692 2.692h15.416c1.484 0 2.692-1.208 2.692-2.692V14c0-.634-.516-1.15-1.15-1.15z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var D = M,
        F = a('6s7X'),
        N = a('Nh1N'),
        H = E.a.d5b2da0a,
        U = E.a.b5711f09,
        j = E.a.ff692d63,
        z = E.a.cb1adfa0,
        W = E.a.b721eb37,
        V = '/i/birdwatch',
        K = function (e, t) {
          return (
            t.pathname === V ||
            t.pathname === ''.concat(V, '/new') ||
            t.pathname === ''.concat(V, '/needs_your_help') ||
            t.pathname === ''.concat(V, '/rated_helpful')
          )
        },
        q = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_isOwnProfilePageActive', function (t, a) {
                var n = e.props.userAlias
                return !!n && a.pathname === ''.concat(V, '/u/').concat(n)
              }),
              h()(c()(e), '_handleTabClickFactory', function (t) {
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
                    l = this.context.featureSwitches
                  return b.a.createElement(
                    x.b,
                    { layout: a, primaryLabel: H, wideMode: r },
                    b.a.createElement(C.a, {
                      accessibilityLabel: U,
                      isActive: K,
                      label: U,
                      layout: a,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: V,
                      renderIcon: Object(x.c)(I.a, S.a, a),
                      withLabel: o,
                    }),
                    l.isTrue('responsive_web_birdwatch_note_writing_enabled')
                      ? b.a.createElement(C.a, {
                          accessibilityLabel: j,
                          isActive: this._isOwnProfilePageActive,
                          label: j,
                          layout: a,
                          onClick: this._handleTabClickFactory('user_notes'),
                          path: ''.concat(V, '/u/me'),
                          renderIcon: Object(x.c)(k.a, A.a, a),
                          withLabel: o,
                        })
                      : null,
                    b.a.createElement(C.a, {
                      accessibilityLabel: z,
                      label: z,
                      layout: a,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: ''.concat(V, '/download-data'),
                      renderIcon: Object(x.c)(L.a, D, a),
                      withLabel: o,
                    }),
                    b.a.createElement(C.a, {
                      accessibilityLabel: W,
                      label: W,
                      layout: a,
                      onClick: this._handleTabClickFactory('about'),
                      path: ''.concat(V, '/about'),
                      renderIcon: Object(x.c)(F.a, N.a, a),
                      withLabel: o,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      h()(q, 'contextType', T.a)
      var G = y(q)
      t.a = G
    },
    LWCC: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('yH/f'), a('2G9S'), a('ho0z'), a('ERkP')),
        b = a.n(f),
        v = a('Zejx'),
        g = a('rxPX'),
        w = a('0KEI'),
        y = Object(g.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: v.a.follow,
              unfollow: v.a.unfollow,
            }
          })
          .withAnalytics(),
        _ = a('CGyZ'),
        E = a('PbbS'),
        C = a('3XMw'),
        T = a.n(C),
        x = a('sUoZ'),
        I = a('Tp1h'),
        S = a('Jkc4'),
        k = a('TnY3'),
        A = Object.freeze({ follow: T.a.i79ab12a, following: T.a.d960b55b, unfollow: T.a.c0f56044 }),
        L = Object.freeze({
          follow: T.a.fcf51fe6,
          following: T.a.e9a90d71,
          unfollow: T.a.bf403715,
          confirmationHeadline: T.a.c9f08e28,
          confirmationSheetText: T.a.abc600f3,
        }),
        O = Object.freeze({
          follow: T.a.cd876e01,
          following: T.a.f2816e02,
          unfollow: T.a.f5b04fbb,
          confirmationHeadline: T.a.c481ae3f,
          confirmationSheetText: T.a.aa3ba123,
        }),
        P = Object.freeze({
          follow: T.a.e0e730b0,
          following: T.a.e0e730b0,
          unfollow: T.a.b1850062,
          confirmationHeadline: T.a.gd3f996f,
          confirmationSheetText: T.a.i36c403c,
        }),
        R = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              h()(c()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case E.a.Favorite:
                  case E.a.Star:
                  case E.a.Interested:
                    return b.a.createElement(x.a, null)
                  case E.a.FollowTopic:
                  case E.a.Default:
                  default:
                    return
                }
              }),
              h()(c()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? b.a.createElement(b.a.Fragment, null) : void 0
              }),
              h()(c()(e), '_getButtonText', function (t) {
                var a = e.props.topic
                switch (t) {
                  case E.a.FollowTopic:
                    return { follow: A.follow, unfollow: A.unfollow, following: A.following }
                  case E.a.Favorite:
                    return {
                      follow: O.follow,
                      unfollow: O.unfollow,
                      following: O.following,
                      confirmationHeadline: O.confirmationHeadline && O.confirmationHeadline({ title: a.name }),
                      confirmationSheetText: O.confirmationSheetText,
                    }
                  case E.a.Star:
                    return {
                      follow: L.follow,
                      unfollow: L.unfollow,
                      following: L.following,
                      confirmationHeadline: L.confirmationHeadline && L.confirmationHeadline({ title: a.name }),
                      confirmationSheetText: L.confirmationSheetText,
                    }
                  case E.a.Interested:
                    return {
                      follow: P.follow,
                      unfollow: P.unfollow,
                      following: P.following,
                      confirmationHeadline: P.confirmationHeadline && P.confirmationHeadline({ title: a.name }),
                      confirmationSheetText: P.confirmationSheetText,
                    }
                  case E.a.Default:
                  default:
                    return
                }
              }),
              h()(c()(e), '_handleOnFollow', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.educateOnFollow,
                  r = t.follow,
                  i = t.history,
                  o = t.topic
                r(o.id).catch(a()),
                  e._handleScribe('follow'),
                  n && o && i.push({ pathname: '/i/topics/education', state: { topicName: o.name } })
              }),
              h()(c()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.topic
                ;(0, t.unfollow)(n.id).catch(a()), e._handleScribe('unfollow')
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.ariaDescribedBy,
                    n = t.isTransparent,
                    r = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    o = t.size,
                    l = t.style,
                    c = t.textMode,
                    s = t.topic,
                    d = s.following,
                    u = s.name
                  return b.a.createElement(S.a, { customText: u, displayMode: I.a.topic }, function (t) {
                    return b.a.createElement(_.a, {
                      ariaDescribedBy: a,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(c),
                        followingIcon: e._getFollowingButtonIcon(c),
                      },
                      buttonText: e._getButtonText(c),
                      displayMode: e._getDisplayMode(c),
                      isFollowing: d,
                      isTransparent: n,
                      name: u,
                      nativeID: r,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: o,
                      style: l,
                      type: 'topic',
                      withConfirmationSheetText: d,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      h()(R, 'defaultProps', { size: 'small', textMode: E.a.Default })
      t.a = Object(k.a)(y(R))
    },
    MvLc: function (e, t, a) {
      'use strict'
      a.d(t, 'r', function () {
        return B
      }),
        a.d(t, 'x', function () {
          return F
        }),
        a.d(t, 'o', function () {
          return N
        }),
        a.d(t, 'u', function () {
          return H
        }),
        a.d(t, 's', function () {
          return U
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
          return q
        }),
        a.d(t, 't', function () {
          return G
        }),
        a.d(t, 'q', function () {
          return Q
        }),
        a.d(t, 'k', function () {
          return X
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
          return le
        }),
        a.d(t, 'i', function () {
          return ce
        })
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        l = a('yiKp'),
        c = a.n(l),
        s = (a('yH/f'), a('KOtZ'), a('7x/C'), a('z84I'), a('LW0h'), a('JtPf'), a('/kEJ')),
        d = a('kGix'),
        u = a('Ssj5'),
        p = a('oEOe'),
        m = a('3A2y'),
        h = a('YeIG'),
        f = ['rating'],
        b = 'birdwatchNotes',
        v = 'rweb/'.concat(b),
        g = Object(p.a)(v, 'DELETE_NOTE'),
        w = Object(p.a)(v, 'CREATE_RATING'),
        y = Object(p.a)(v, 'DELETE_RATING'),
        _ = Object(p.a)(v, 'SELECT_ALIAS'),
        E = Object(p.a)(v, 'CREATE_APPEAL'),
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
        x = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE',
        }),
        I = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/CREATE_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/CREATE_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/CREATE_NOTE_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE',
        }),
        k = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE',
        }),
        A = Object.freeze({
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
        P = { drafts: {}, notes: {}, tweetNotes: {}, contributor: {}, publicData: {} }
      u.a.register(
        o()({}, b, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case I.SUCCESS:
              var a,
                n = null === (a = t.payload) || void 0 === a ? void 0 : a.result
              if (n) {
                var i,
                  l,
                  s =
                    null === (i = t.payload) || void 0 === i || null === (l = i.entities) || void 0 === l
                      ? void 0
                      : l.birdwatchNotes[n],
                  u = s.tweet.rest_id
                return c()(
                  c()({}, e),
                  {},
                  {
                    notes: c()(c()({}, e.notes), {}, o()({}, n, s)),
                    tweetNotes: c()(
                      c()({}, e.tweetNotes),
                      {},
                      o()(
                        {},
                        u,
                        c()(c()({}, e.tweetNotes && e.tweetNotes[u]), {}, { ownNoteId: n, fetchStatus: d.a.LOADED }),
                      ),
                    ),
                  },
                )
              }
              return e
            case g.SUCCESS:
              var p,
                b = null === (p = t.meta) || void 0 === p ? void 0 : p.note_id
              return b ? c()(c()({}, e), {}, { notes: Object(m.a)(e.notes, b) }) : e
            case w.SUCCESS:
              var v,
                E = null === (v = t.meta) || void 0 === v ? void 0 : v.note_id,
                R = t.payload
              return E
                ? c()(
                    c()({}, e),
                    {},
                    { notes: c()(c()({}, e.notes), {}, o()({}, E, c()(c()({}, e.notes[E]), {}, { rating: R }))) },
                  )
                : e
            case y.SUCCESS:
              var B,
                M = null === (B = t.meta) || void 0 === B ? void 0 : B.note_id
              if (M) {
                var D = e.notes[M],
                  F = (D.rating, r()(D, f))
                return c()(c()({}, e), {}, { notes: c()(c()({}, e.notes), {}, o()({}, M, c()({}, F))) })
              }
              return e
            case S.REQUEST:
              var N,
                H = null === (N = t.meta) || void 0 === N ? void 0 : N.tweet_id
              return H
                ? c()(
                    c()({}, e),
                    {},
                    {
                      tweetNotes: c()(
                        c()({}, e.tweetNotes),
                        {},
                        o()({}, H, c()(c()({}, e.tweetNotes && e.tweetNotes[H]), {}, { fetchStatus: d.a.LOADING })),
                      ),
                    },
                  )
                : e
            case S.FAILURE:
              var U,
                j = null === (U = t.meta) || void 0 === U ? void 0 : U.tweet_id
              return j
                ? c()(
                    c()({}, e),
                    {},
                    {
                      tweetNotes: c()(
                        c()({}, e.tweetNotes),
                        {},
                        o()({}, j, c()(c()({}, e.tweetNotes[j]), {}, { fetchStatus: d.a.FAILED })),
                      ),
                    },
                  )
                : e
            case S.SUCCESS:
              var z,
                W,
                V = null === (z = t.payload) || void 0 === z ? void 0 : z.result,
                K = null === (W = t.meta) || void 0 === W ? void 0 : W.tweet_id
              if (V) {
                var q,
                  G,
                  Q =
                    null === (q = t.payload) || void 0 === q || null === (G = q.entities) || void 0 === G
                      ? void 0
                      : G.birdwatchNotes[V],
                  X = (null == Q ? void 0 : Q.ids) || [],
                  Z = X.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  J = X.map(function (e) {
                    return e.rest_id
                  }),
                  Y = {}
                return (
                  (Y.ids = J),
                  (Y.fetchStatus = d.a.LOADED),
                  null != Q && Q.ownNoteId && (Y.ownNoteId = null == Q ? void 0 : Q.ownNoteId),
                  t.meta
                    ? c()(
                        c()({}, e),
                        {},
                        { notes: c()(c()({}, e.notes), Z), tweetNotes: c()(c()({}, e.tweetNotes), {}, o()({}, K, Y)) },
                      )
                    : e
                )
              }
              return K
                ? c()(
                    c()({}, e),
                    {},
                    { tweetNotes: c()(c()({}, e.tweetNotes), {}, o()({}, K, { fetchStatus: d.a.LOADED })) },
                  )
                : e
            case k.REQUEST:
              var $,
                ee = null === ($ = t.meta) || void 0 === $ ? void 0 : $.alias
              return ee
                ? c()(
                    c()({}, e),
                    {},
                    {
                      contributor: c()(
                        c()({}, e.contributor),
                        {},
                        o()({}, ee, c()(c()({}, e.contributor[ee]), {}, { fetchStatus: d.a.LOADING })),
                      ),
                    },
                  )
                : e
            case k.FAILURE:
              var te,
                ae = null === (te = t.meta) || void 0 === te ? void 0 : te.alias
              return ae
                ? c()(
                    c()({}, e),
                    {},
                    {
                      contributor: c()(
                        c()({}, e.contributor),
                        {},
                        o()({}, ae, c()(c()({}, e.contributor[ae]), {}, { fetchStatus: d.a.FAILED })),
                      ),
                    },
                  )
                : e
            case k.SUCCESS:
              var ne,
                re,
                ie = null === (ne = t.meta) || void 0 === ne ? void 0 : ne.alias,
                oe = null === (re = t.payload) || void 0 === re ? void 0 : re.result
              if (oe && t.meta) {
                var le,
                  ce,
                  se =
                    null === (le = t.payload) || void 0 === le || null === (ce = le.entities) || void 0 === ce
                      ? void 0
                      : ce.birdwatchNotes[oe],
                  de = (null == se ? void 0 : se.notes) || [],
                  ue = de.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  pe = de.map(function (e) {
                    return e.rest_id
                  }),
                  me = {
                    helpful: null == se ? void 0 : se.ratings_received_helpful_count,
                    notHelpful: null == se ? void 0 : se.ratings_received_not_helpful_count,
                    somewhatHelpful: null == se ? void 0 : se.ratings_received_somewhat_helpful_count,
                  },
                  he = (null == se ? void 0 : se.badges) || []
                return c()(
                  c()({}, e),
                  {},
                  {
                    notes: c()(c()({}, e.notes), ue),
                    contributor: c()(
                      c()({}, e.contributor),
                      {},
                      o()({}, oe, { badges: he, notes: pe, ratings: me, fetchStatus: d.a.LOADED }),
                    ),
                  },
                )
              }
              return ie
                ? c()(
                    c()({}, e),
                    {},
                    {
                      contributor: c()(
                        c()({}, e.contributor),
                        {},
                        o()({}, ie, c()(c()({}, e.contributor[ie]), {}, { fetchStatus: d.a.FAILED })),
                      ),
                    },
                  )
                : e
            case T.SUCCESS:
              var fe = t.payload
              return c()(c()({}, e), {}, { contributor: c()(c()({}, e.contributor), {}, { ownAlias: fe }) })
            case A.SUCCESS:
              var be = t.payload
              return c()(
                c()({}, e),
                {},
                {
                  contributor: c()(
                    c()({}, e.contributor),
                    {},
                    { showAliasSelfSelect: (null == be ? void 0 : be.can_select) && !(null != be && be.has_selected) },
                  ),
                },
              )
            case x.SUCCESS:
              var ve = t.payload
              return c()(
                c()({}, e),
                {},
                { contributor: c()(c()({}, e.contributor), {}, { aliasSelfSelectOptions: ve }) },
              )
            case L.SUCCESS:
              var ge,
                we = t.payload,
                ye = null == we ? void 0 : we.result
              return ye
                ? c()(
                    c()({}, e),
                    {},
                    {
                      notes: c()(
                        c()({}, e.notes),
                        {},
                        o()(
                          {},
                          ye,
                          c()(
                            c()(
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
              var _e,
                Ee = null === (_e = t.meta) || void 0 === _e ? void 0 : _e.note_id
              return c()(
                c()({}, e),
                {},
                {
                  notes: c()(
                    c()({}, e.notes),
                    {},
                    o()({}, Ee, c()(c()({}, e.notes && e.notes[Ee]), {}, { fetchStatus: d.a.LOADING })),
                  ),
                },
              )
            case L.FAILURE:
              var Ce,
                Te = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.note_id
              return c()(
                c()({}, e),
                {},
                {
                  notes: c()(
                    c()({}, e.notes),
                    {},
                    o()({}, Te, c()(c()({}, e.notes[Te]), {}, { fetchStatus: d.a.FAILED })),
                  ),
                },
              )
            case C.SUCCESS:
              var xe = t.payload
              return xe ? c()(c()({}, e), {}, { publicData: xe }) : e
            case _.SUCCESS:
              var Ie,
                Se = null === (Ie = t.meta) || void 0 === Ie ? void 0 : Ie.alias
              return c()(c()({}, e), {}, { contributor: c()(c()({}, e.contributor), {}, { ownAlias: Se }) })
            case O:
              var ke = t.payload
              if (Object(h.a)(ke)) return e
              var Ae = ke.updates,
                Le = ke.tweetId
              return c()(c()({}, e), {}, { drafts: c()(c()({}, e.drafts), {}, o()({}, Le, Ae)) })
            default:
              return e
          }
        }),
      )
      var R = [],
        B = function (e, t) {
          return e.birdwatchNotes.notes[t]
        },
        M = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ids
        },
        D = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ownNoteId
        },
        F = function (e, t) {
          if (!t) return null
          var a = D(e, t)
          return a ? B(e, a) : null
        },
        N = function (e, t) {
          var a, n
          if (t)
            return null === (a = e.birdwatchNotes) || void 0 === a || null === (n = a.contributor[t]) || void 0 === n
              ? void 0
              : n.badges
        },
        H = function (e) {
          return e.birdwatchNotes.publicData
        },
        U = function (e, t) {
          var a = t ? M(e, t) : void 0
          if (a) {
            var n = D(e, t)
            return (
              n &&
                (a = a.filter(function (e) {
                  return e !== n
                })),
              a
                .map(function (t) {
                  return B(e, t)
                })
                .filter(Boolean)
            )
          }
          return R
        },
        j = function (e, t) {
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
        q = function (e, t) {
          var a = e.birdwatchNotes.tweetNotes[t]
          return a ? a.fetchStatus : d.a.NONE
        },
        G = function (e, t) {
          var a = e.birdwatchNotes.notes[t]
          return a ? a.fetchStatus : d.a.NONE
        },
        Q = function (e, t) {
          if (t) {
            var a = e.birdwatchNotes.drafts
            return a ? a[t] : void 0
          }
        },
        X = function (e) {
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
                      return Object(p.b)(t, { request: r.Birdwatch.fetchNotes, params: { tweet_id: e } })(
                        { actionTypes: S, context: 'FETCH_TWEET_NOTES', meta: { tweet_id: e } },
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
            var r = !!e && !!j(a(), e),
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
                            { actionTypes: k, context: 'FETCH_BIRDWATCH_PROFILE', meta: { alias: e } },
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
            var r = !!B(a(), e),
              i = G(a(), e) === d.a.LOADING
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
              actionTypes: A,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        ee = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(p.b)(e, { request: n.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: x,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        te = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(p.b)(t, { request: r.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: _,
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
        le = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(p.b)(t, { request: r.Birdwatch.createAppeal, params: { note_id: e } })({
              actionTypes: E,
              context: 'CREATE_APPEAL',
              meta: { note_id: e },
            })
          }
        },
        ce = function () {
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
          return l
        })
      var n = a('3XMw'),
        r = a.n(n),
        i = 'MisinformedOrPotentiallyMisleading',
        o = 'NotMisleading',
        l = {
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
    OKMS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    OOKO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      })
      a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('rHpw'),
        o = a('MWbm')
      function l(e) {
        var t = e.spacing
        return r.a.createElement(o.a, {
          accessibilityRole: 'separator',
          style: [c.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var c = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    Olb6: function (e, t, a) {
      'use strict'
      a('hBvt')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        o = a.n(i),
        l = a('5cUs'),
        c = a('wwsH'),
        s = o.a.d9fd5570,
        d = { viewType: 'hidden_replies' }
      t.a = function (e) {
        var t = e.link,
          a = e.onPress
        return r.a.createElement(c.a, {
          Icon: l.a,
          accessibilityLabel: s,
          activeColor: 'primary',
          behavioralEventContext: d,
          link: t,
          onPress: a,
        })
      }
    },
    PKU5: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchNoteScreen', function () {
          return P
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('ZD0R'),
        c = (a('KqXw'), a('WNMA'), a('MvLc')),
        s = a('rxPX'),
        d = a('0KEI'),
        u = function (e, t) {
          return t.match.params.noteId
        },
        p = function (e, t) {
          return c.r(e, u(0, t))
        },
        m = function (e, t) {
          return c.t(e, u(0, t))
        },
        h = Object(s.a)()
          .propsFromState(function () {
            return { noteData: p, noteId: u, fetchStatus: m }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: c.h,
            }
          }),
        f = a('kGix'),
        b = a('jHSc'),
        v = a('3XMw'),
        g = a.n(v),
        w = a('0zXz'),
        y = a('aITJ'),
        _ = a('MWbm'),
        E = a('FIs5'),
        C = a('htQn'),
        T = a('rHpw'),
        x = a('Qwev'),
        I = g.a.c87f3cf8,
        S = g.a.i859a9d3,
        k = g.a.efd14e79,
        A = g.a.a5b19492,
        L = o.a.createElement(E.a, { buttonLink: '/i/birdwatch/about', buttonText: S, header: A }),
        O = w.a,
        P = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchOneNoteIfNeeded,
            n = e.fetchStatus,
            i = e.history,
            c = e.noteData,
            s = e.noteId,
            d = o.a.useState(c),
            u = r()(d, 2),
            p = u[0],
            m = u[1]
          o.a.useEffect(
            function () {
              s && a(s).catch(t())
            },
            [t, a, s],
          ),
            o.a.useEffect(
              function () {
                m(c)
              },
              [c],
            )
          var h = o.a.createElement(
            C.a,
            null,
            p && p.data_v1
              ? o.a.createElement(
                  _.a,
                  { style: R.contentWrapper },
                  o.a.createElement(l.b, {
                    handleDelete: function (e) {
                      m(null)
                    },
                    note: p,
                    showPivot: !0,
                    showTweet: !0,
                    withBorder: !0,
                  }),
                )
              : n === f.a.LOADING
              ? B
              : L,
          )
          return o.a.createElement(
            b.b,
            { history: i, renderHeader: y.b.isTwitterApp() ? O : void 0, title: I },
            o.a.createElement(_.a, { style: R.contentWrapper }, h),
          )
        },
        R = T.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        B = o.a.createElement(x.a, { accessibilityLabel: k, size: 'large', style: R.spinner }),
        M = h(P)
      t.default = M
    },
    PbbS: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f'), a('ERkP')
      var n = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    QDet: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    Sksh: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('KEM+'),
        c = a.n(l),
        s = (a('+KXO'), a('849X'), a('TJCb'), a('SrIh')),
        d = a('M0jS'),
        u = a('+d3d'),
        p = a('VY6S'),
        m = (function () {
          function e() {
            var t = this
            r()(this, e),
              c()(this, 'usersInApp', {}),
              c()(
                this,
                '_throttledInitialFetch',
                Object(u.a)(function () {
                  t.store.dispatch(d.b.fetchManyIfNeeded(Object.keys(t.usersInApp)))
                }, 1500),
              )
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  this.store = e
                },
              },
              {
                key: 'registerUserInApp',
                value: function (e) {
                  Object.keys(this.usersInApp).length > 50 &&
                    ((this.usersInApp = {}),
                    Object(s.a)(new Error('Registered users in app has exceeded 50'), { level: 'warning' })),
                    this.usersInApp[e]
                      ? (this.usersInApp[e] = this.usersInApp[e] + 1)
                      : ((this.usersInApp[e] = 1), Object(p.a)(this._throttledInitialFetch(), 100))
                },
              },
              {
                key: 'deregisterUserInApp',
                value: function (e) {
                  this.usersInApp[e] && this.usersInApp[e] > 1
                    ? (this.usersInApp[e] = this.usersInApp[e] - 1)
                    : delete this.usersInApp[e]
                },
              },
            ]),
            e
          )
        })()
      t.a = new m()
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
          l = e.createLocalApiErrorHandler,
          c = e.promotedContent,
          s = e.scribeAction,
          d = e.unblock,
          u = e.user,
          p = function () {
            d(u.id_str, { promotedContent: c }).catch(l(r.a)), s({ element: 'unblock' })
          },
          m = {
            user: u,
            source: i.k.TWEET,
            blockAction: function () {
              o(u.id_str, { promotedContent: c }).then(function () {
                t({
                  action: { label: i.l, onAction: p, behavioralEventViewType: 'unblock' },
                  behavioralEventEntityToken: a,
                  text: i.d,
                })
              }, l(n.a)),
                s({ element: 'block' })
            },
            unblockAction: p,
          }
        return Object(i.g)(m)
      }
    },
    UZjl: function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        l = a('m3Bd'),
        c = a.n(l),
        s = (a('hBpG'), a('7x/C'), a('ERkP')),
        d = a.n(s),
        u = a('es0u'),
        p = a('hqKg'),
        m = a('MDbM'),
        h = a('rxPX'),
        f = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        b = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        v = Object(p.createSelector)(f, b, function (e, t) {
          return t !== m.a.LOADED || (!!e && !!e.tabs)
        }),
        g = Object(h.a)()
          .propsFromState(function () {
            return { hasTabNavigation: v, pageConfiguration: f, initialFetchStatus: b }
          })
          .withAnalytics(),
        w = a('QIgh'),
        y = a('s14A'),
        _ = a('dwig'),
        E = (a('uFXj'), a('7JQg')),
        C = a('rHpw'),
        T = a('GKOv'),
        x = a('Rp9C'),
        I = a('Irs7'),
        S = a('FGLp')
      function k(e, t) {
        var a = Object(I.b)(),
          n = t || {},
          r = n.component,
          i = n.element,
          o = d.a.useMemo(
            function () {
              return { items: [x.a.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          Object(S.a)(function () {
            a.scribe({ component: r, element: i, action: 'impression', data: o })
          }),
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
          l = e.onHeaderVisible,
          c = k(o, a),
          s = c.data,
          u = c.namespace
        return d.a.createElement(
          A.a,
          { style: O.root },
          d.a.createElement(
            E.c,
            { data: s, namespace: u },
            d.a.createElement(T.a, {
              displayType: n,
              facepile: r,
              onFollowHeaderOffscreen: function (e) {
                var t = e.isOffscreen
                return l(!t)
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
        P = a('3XMw'),
        R = a.n(P),
        B = (a('1t7P'), a('jQ/y'), a('ho0z'), a('zI2C')),
        M = a('v6aA'),
        D = a('Zejx'),
        F = function (e, t) {
          var a = t.navBar.topicId ? t.navBar.topicId : ''
          return D.a.select(e, a)
        },
        N = Object(h.a)().propsFromState(function () {
          return { topic: F }
        }),
        H = a('PbbS'),
        U = a('LWCC'),
        j = a('IcAo'),
        z = a('rJoH'),
        W = a('I6Uj'),
        V = a('zfvc'),
        K = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        q = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        G = R.a.ed88e742
      var Q = C.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        X = N(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            a = e.isHeaderOffscreen,
            n = e.navBar.clientEventInfo,
            r = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            l = e.withOpenGraphMeta,
            c = d.a.useContext(M.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            s = k(t, n),
            u = s.data,
            p = s.namespace,
            m = Object(j.a)({}, r, p)
          return i
            ? d.a.createElement(
                E.c,
                { data: u, namespace: m },
                d.a.createElement(
                  d.a.Fragment,
                  null,
                  l
                    ? d.a.createElement(z.a, {
                        canonical: K(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? d.a.createElement(B.a, { deepLink: q(t) }) : null,
                  d.a.createElement(
                    A.a,
                    { style: Q.rightControl },
                    d.a.createElement(
                      A.a,
                      { style: Q.followButtonContainer },
                      d.a.createElement(
                        V.b,
                        { animateMount: !0, show: a, type: 'fade' },
                        d.a.createElement(U.a, { size: 'medium', textMode: H.a.FollowTopic, topic: i }),
                      ),
                    ),
                    c ? d.a.createElement(W.a, { copyLinkShareLabel: G, scribeNamespace: m, url: K(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        Z = a('yoO3'),
        J = a('VrFO'),
        Y = a.n(J),
        $ = a('Y9Ll'),
        ee = a.n($),
        te = a('1Pcy'),
        ae = a.n(te),
        ne = a('5Yy7'),
        re = a.n(ne),
        ie = a('2VqO'),
        oe = a.n(ie),
        le = a('KEM+'),
        ce = a.n(le),
        se = (a('2G9S'), a('v84o')),
        de = a('0KEI'),
        ue = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        pe = function (e, t) {
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
        me = Object(h.a)()
          .propsFromState(function () {
            return { pageConfiguration: ue, selectedTab: pe }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
            }
          })
          .withAnalytics(),
        he = a('doI8'),
        fe = a('oQhu'),
        be = a('fTQJ'),
        ve = ['entityToken'],
        ge = me(
          (function (e) {
            re()(a, e)
            var t = oe()(a)
            function a() {
              var e
              Y()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                ce()(ae()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    a = t.analytics,
                    n = t.pageConfiguration,
                    r = t.selectedTab,
                    i = (null == r ? void 0 : r.scribeConfig) || (null == n ? void 0 : n.scribeConfig)
                  if (i) {
                    i.entityToken
                    return c()(i, ve)
                  }
                  return a.contextualScribeNamespace
                }),
                ce()(
                  ae()(e),
                  '_getModule',
                  Object(fe.a)(function (e, t, a, n) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(se.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: n })
                      if (null != e && e.graphQLTimelineId) return Object(he.a)(e.graphQLTimelineId)
                    }
                    return a
                  }),
                ),
                ce()(ae()(e), '_getRefreshIntervalSecForCurrentTab', function () {
                  var t,
                    a = e.props,
                    n = a.pageConfiguration,
                    r = a.selectedTab,
                    i = null == n || null === (t = n.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (r) return r.refreshIntervalSec
                  if (i) {
                    var o,
                      l =
                        null == n || null === (o = n.tabs) || void 0 === o
                          ? void 0
                          : o.tabs.find(function (e) {
                              return i === e.id
                            })
                    return null == l ? void 0 : l.refreshIntervalSec
                  }
                }),
                e
              )
            }
            return (
              ee()(a, [
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
                      l = a.refreshControl,
                      c = a.renderEmptyState,
                      s = a.renderUnavailable,
                      u = a.selectedTab,
                      p = a.timelinePrefix,
                      m = a.title,
                      h = a.withoutHeadroom,
                      f = {
                        token: null == i || null === (e = i.scribeConfig) || void 0 === e ? void 0 : e.entityToken,
                      },
                      b = this._getModule(
                        u,
                        null == i || null === (t = i.tabs) || void 0 === t ? void 0 : t.initialTabId,
                        r,
                        p,
                      ),
                      v = this._getRefreshIntervalSecForCurrentTab(),
                      g = v ? 1e3 * v : void 0
                    return d.a.createElement(
                      E.c,
                      { namespace: this._getTimelineNamespace() },
                      d.a.createElement(be.a, {
                        behavioralEventContext: f,
                        entryConfiguration: n,
                        module: b,
                        pollingIntervalMsOverride: g,
                        prerollDisplayLocation: o,
                        refreshControl: l,
                        renderEmptyState: c,
                        renderUnavailable: s,
                        title: m,
                        withoutHeadroom: h,
                      }),
                    )
                  },
                },
              ]),
              a
            )
          })(d.a.Component),
        ),
        we = (a('z84I'), a('+Kfv')),
        ye = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        _e = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        Ee = function (e, t) {
          var a = t.selectedTabId,
            n = _e(e, t)
          return (
            n &&
            n.tabs &&
            n.tabs.tabs.find(function (e) {
              return e.id === a
            })
          )
        },
        Ce = Object(h.a)()
          .propsFromState(function () {
            return { initialFetchStatus: ye, pageConfiguration: _e, selectedTab: Ee }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
              fetchInitial: t.fetchInitial,
            }
          })
          .withAnalytics(),
        Te = a('Nhmk'),
        xe = a('k/OQ'),
        Ie = a('G8HL'),
        Se = ['entityToken'],
        ke = { viewType: 'controls' },
        Ae = (function (e) {
          re()(a, e)
          var t = oe()(a)
          function a() {
            var e
            Y()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              ce()(ae()(e), '_fetchPageModule', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.createLocalApiErrorHandler,
                  r = t.fetchInitial,
                  i = t.pageConfiguration,
                  l = i ? i.scribeConfig : void 0
                return r().then(function (t) {
                  t.performed && a.scribe(o()(o()({}, e._getScribeNamespace(l)), {}, { action: 'get_initial' }))
                }, n(Te.a))
              }),
              ce()(ae()(e), '_render', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.getTabLink,
                  r = t.pageConfiguration,
                  i = t.selectedTab,
                  o = null == r ? void 0 : r.tabs
                if (o && o.tabs) {
                  var l,
                    c = (i && i.id) || o.initialTabId,
                    s = r ? r.scribeConfig : void 0,
                    u = o.tabs.map(function (t, r) {
                      var i,
                        o = t.id === c
                      return (
                        o && (l = r),
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
                    we.a,
                    { behavioralEventContext: ke },
                    d.a.createElement(xe.a, { links: u, visibleItemIndex: l }),
                  )
                }
                return null
              }),
              e
            )
          }
          return (
            ee()(a, [
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
                  return this.props.initialFetchStatus === m.a.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function (e, t) {
                  var a
                  return (
                    e && (a = e),
                    t && (a = o()(o()({}, a), t)),
                    o()(o()({}, a), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function (e) {
                  if (e) {
                    e.entityToken
                    return c()(e, Se)
                  }
                },
              },
            ]),
            a
          )
        })(d.a.Component),
        Le = Ce(Object(Ie.a)(Ae)),
        Oe = a('VS6U'),
        Pe = a('5Y9N'),
        Re = a('FIs5'),
        Be = a('cHvH'),
        Me = a('mw9i'),
        De = ['entityToken'],
        Fe = ['entityToken'],
        Ne = R.a.e9f1fbcb,
        He = d.a.createElement(u.a, null),
        Ue = function (e) {
          var t = e.TabBar,
            a = e.backLocation,
            n = e.behavioralEventViewType,
            i = e.documentTitle,
            l = e.entryConfiguration,
            s = e.fab,
            u = e.getTabLink,
            p = e.hasTabNavigation,
            h = e.history,
            f = e.initialFetchStatus,
            b = e.initialPageNamespace,
            v = e.logoButton,
            g = e.module,
            w = e.onBackClick,
            T = e.pageConfiguration,
            x = e.prerollDisplayLocation,
            I = e.renderEmptyState,
            S = e.renderUnavailable,
            k = e.rightControl,
            A = e.searchBoxRef,
            O = e.selectedTabId,
            P = e.sidebarContent,
            R = e.timelinePrefix,
            B = e.title,
            M = e.withAppLinks,
            D = e.withBottomLoginSignupBar,
            F = e.withDeferredView,
            N = e.withOpenGraphMeta,
            H = e.withSearchBox,
            U = e.withTweetButton,
            z = d.a.useRef(
              Object(fe.a)(function (e, t) {
                return o()(o()({}, t), Object(Pe.a)({ isWide: e }))
              }),
            ).current,
            W = d.a.useState(!0),
            V = r()(W, 2),
            K = V[0],
            q = V[1],
            G = T || {},
            Q = G.header,
            J = G.navBar,
            Y = G.subtitle,
            $ = G.title,
            ee = f === m.a.LOADED ? $ || B : '',
            te = (function (e, t, a) {
              var n = (null == t ? void 0 : t.scribeConfig) || {},
                r = (n.entityToken, c()(n, De)),
                i = null == t ? void 0 : t.tabs,
                o = e || (null == i ? void 0 : i.initialTabId),
                l =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === o
                      }),
                s = (null == l ? void 0 : l.scribeConfig) || {},
                d = (s.entityToken, c()(s, Fe))
              return Object(j.a)({}, a, r, d)
            })(O, T, b),
            ae = Q ? d.a.createElement(L, { header: Q, onHeaderVisible: q }) : null,
            ne = J
              ? d.a.createElement(X, {
                  isHeaderOffscreen: !K,
                  navBar: J,
                  pageNamespace: te,
                  withAppLinks: M,
                  withOpenGraphMeta: N,
                })
              : null,
            re = F ? y.a : d.a.Fragment,
            ie = d.a.createElement(Be.a, null, function (e) {
              var t = e.windowWidth >= C.a.theme.breakpoints.medium
              return d.a.createElement(
                d.a.Fragment,
                null,
                ae,
                d.a.createElement(
                  re,
                  null,
                  d.a.createElement(ge, {
                    entryConfiguration: z(t, l),
                    initialModule: g,
                    prerollDisplayLocation: x,
                    renderEmptyState: I,
                    renderUnavailable: S,
                    selectedTabId: O,
                    timelinePrefix: R,
                    title: B,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            oe = s ? d.a.createElement(_.a, { component: Me.a, fab: s }, ie) : ie,
            le = u && p ? d.a.createElement(Le, { getTabLink: u, module: g, selectedTabId: O }) : void 0
          return d.a.createElement(
            E.c,
            { namespace: te },
            d.a.createElement(
              Z.a,
              { behavioralEventViewType: n },
              d.a.createElement(Oe.a, {
                TabBar: t,
                backLocation: a,
                documentTitle: i,
                history: h,
                logoButton: v,
                onBackClick: w,
                primaryContent: oe,
                rightControl: ne || k,
                searchBoxRef: A,
                secondaryBar: le,
                sidebarContent: P,
                subtitle: Y,
                title: ae && K ? B : ee,
                withBottomLoginSignupBar: D,
                withSearchBox: H,
                withTweetButton: U,
              }),
            ),
          )
        }
      Ue.defaultProps = {
        entryConfiguration: w.default,
        renderEmptyState: function () {
          return d.a.createElement(Re.a, { header: Ne })
        },
        sidebarContent: He,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var je = g(Ue)
      t.a = je
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
          return Ae
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        l = a('yiKp'),
        c = a.n(l),
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
        m = a('v6aA'),
        h = a('9StO'),
        f = (a('WNMA'), a('MvLc')),
        b = a('1YZw'),
        v = a('XOJV'),
        g = a('rxPX'),
        w = a('0KEI'),
        y = function (e, t) {
          return t.match.params.tweetId
        },
        _ = function (e, t) {
          return f.x(e, y(0, t))
        },
        E = function (e, t) {
          return f.q(e, y(0, t))
        },
        C = function (e, t) {
          return f.v(e)
        },
        T = Object(g.a)()
          .propsFromState(function () {
            return { draftData: E, ownNoteData: _, tweetId: y, showAliasSelfSelect: C, userAlias: f.y }
          })
          .propsFromActions(function () {
            return {
              addToast: b.b,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: f.b,
              fetchNotes: f.k,
              fetchShowAliasSelfSelect: f.j,
              fetchTweet: v.a.fetchOneIfNeeded,
              fetchUserAlias: f.l,
              saveFormData: f.z,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form' }),
        x = a('W6+M'),
        I = a('jHSc'),
        S = a('3XMw'),
        k = a.n(S),
        A = a('5FtR'),
        L = a('SrIh'),
        O = a('0zXz'),
        P = a('Rp9C'),
        R = a('xZXe'),
        B = a('aITJ'),
        M = a('MWbm'),
        D = a('t62R'),
        F = a('XiMS'),
        N = a('fyvP'),
        H = a('p+r5'),
        U = a('4zmP'),
        j = a('/yvb'),
        z = a('feu+'),
        W = a('rHpw'),
        V = a('KqB4'),
        K = a.n(V),
        q = a('S1qy'),
        G = a.n(q),
        Q = a('Oib4'),
        X = a('DlMI'),
        Z = a('ms2t'),
        J = a('I/9y'),
        Y = a('EHV7'),
        $ = a('NPGn'),
        ee = k.a.d39e8b30,
        te = k.a.a91bb144,
        ae = k.a.hb2bf967,
        ne = k.a.dc7a6625,
        re = k.a.af778d9e,
        ie = k.a.ifd2c15f,
        oe = k.a.f24ec219,
        le = k.a.j679dcda,
        ce = { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' },
        se = k.a.b7476596,
        de = k.a.df6c8291,
        ue = k.a.h0e35524,
        pe = ['believable', 'harmful', 'validation'],
        me = ['classification', 'summary', 'trustworthy_sources'],
        he = ['misleading_tags'].concat(pe),
        fe = ['not_misleading_tags'],
        be = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ve = ['misleading_tags', 'not_misleading_tags'],
        ge = k.a.b47b5a16,
        we = k.a.i0e66c5a,
        ye = k.a.j8e3e3be,
        _e = k.a.f1e851ff,
        Ee = k.a.ff5dcac8,
        Ce = {
          classification: we,
          misleading_tags: ye,
          believable: we,
          harmful: we,
          validation: we,
          summary: _e,
          not_misleading_tags: ye,
          trustworthy_sources: we,
        },
        Te = k.a.abdd8d09,
        xe = { explanation: k.a.c097608d, source: k.a.g9cffe15 },
        Ie = { explanation: k.a.ba25898c, source: k.a.e764d704 },
        Se = { explanation: k.a.gb67e44c, source: k.a.d6b758a1 },
        ke = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        Ae = function (e) {
          var t = p.a.useContext(m.a).featureSwitches,
            a = e.addToast,
            n = e.analytics,
            i = e.createLocalApiErrorHandler,
            l = e.createNote,
            s = e.draftData,
            u = e.fetchNotes,
            f = e.fetchShowAliasSelfSelect,
            b = e.fetchTweet,
            v = e.fetchUserAlias,
            g = e.history,
            w = e.ownNoteData,
            y = e.saveFormData,
            _ = e.showAliasSelfSelect,
            E = e.tweetId,
            C = e.userAlias,
            T = function (e) {
              return void 0 === e ? we : ''
            },
            S = function (e) {
              return G()(e, ke).weightedLength
            },
            k = function (e) {
              if (!e) return _e
              var t = S(e.trim())
              return t <= 0 ? _e : t > 280 ? Ee : ''
            },
            W = p.a.useState(s || {}),
            V = d()(W, 2),
            q = V[0],
            Ae = V[1],
            Oe = p.a.useState(
              (function () {
                var e = Ce
                return (
                  be.forEach(function (t) {
                    e[t] = T(q[t])
                  }),
                  ve.forEach(function (t) {
                    var a
                    e[t] = (a = q[t]) && a.length > 0 ? '' : ye
                  }),
                  (e.summary = k(q.summary)),
                  e
                )
              })(),
            ),
            Pe = d()(Oe, 2),
            Re = Pe[0],
            Be = Pe[1],
            Me = p.a.useState(!1),
            De = d()(Me, 2),
            Fe = De[0],
            Ne = De[1],
            He = p.a.useState(!1),
            Ue = d()(He, 2),
            je = Ue[0],
            ze = Ue[1],
            We = p.a.useState(null),
            Ve = d()(We, 2),
            Ke = Ve[0],
            qe = Ve[1],
            Ge = p.a.useState(_),
            Qe = d()(Ge, 2),
            Xe = Qe[0],
            Ze = Qe[1],
            Je = '/i/birdwatch/'.concat(E, '/contribute_complete')
          p.a.useEffect(
            function () {
              E && (b(E).catch(i()), u(E).catch(i()))
            },
            [i, u, b, E],
          ),
            p.a.useEffect(
              function () {
                v().catch(i())
              },
              [i, v],
            ),
            p.a.useEffect(
              function () {
                f().catch(i())
              },
              [i, f],
            ),
            p.a.useEffect(
              function () {
                Ze(_)
              },
              [_],
            )
          var Ye,
            $e = function (e) {
              var t = P.a.forTweet(E)
              n.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            et = function (e) {
              return function (t, a) {
                $e(e),
                  Ae(function (t) {
                    var n = a
                    'trustworthy_sources' === e && ('true' === a ? (n = !0) : 'false' === a && (n = !1))
                    var r = c()(c()({}, t), {}, o()({}, e, n))
                    return y({ updates: r, tweetId: E }), r
                  }),
                  Be(function (t) {
                    return c()(c()({}, t), {}, o()({}, e, T(a)))
                  })
              }
            },
            tt = function (e) {
              return function (t) {
                return function () {
                  Ae(function (a) {
                    if (!a[e]) {
                      Be(function (t) {
                        return c()(c()({}, t), {}, o()({}, e, ''))
                      })
                      var n = c()(c()({}, a), {}, o()({}, e, [t]))
                      return y({ updates: n, tweetId: E }), n
                    }
                    var i = a[e].includes(t),
                      l = a[e].filter(function (e) {
                        return e !== t
                      })
                    if (i) {
                      Be(function (t) {
                        return l.length > 0 ? c()(c()({}, t), {}, o()({}, e, '')) : c()(c()({}, t), {}, o()({}, e, ye))
                      })
                      var s = c()(c()({}, a), {}, o()({}, e, l))
                      return y({ updates: s, tweetId: E }), s
                    }
                    Be(function (t) {
                      return c()(c()({}, t), {}, o()({}, e, ''))
                    })
                    var d = c()(c()({}, a), {}, o()({}, e, [].concat(r()(a[e]), [t])))
                    return y({ updates: d, tweetId: E }), d
                  })
                }
              }
            },
            at = (null == q ? void 0 : q.misleading_tags) || [],
            nt = (null == q ? void 0 : q.not_misleading_tags) || [],
            rt = function (e) {
              return (
                Fe &&
                '' !== e &&
                p.a.createElement(
                  M.a,
                  { style: Le.errorContainer },
                  p.a.createElement(Q.a, { style: Le.errorIcon }),
                  p.a.createElement(D.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, e),
                )
              )
            },
            it = p.a.createElement(
              M.a,
              null,
              p.a.createElement(
                M.a,
                { style: Le.questionSection },
                p.a.createElement(
                  M.a,
                  { accessibilityLabel: $.c.misleading_tags.label, accessibilityRole: 'group' },
                  p.a.createElement(D.b, { weight: 'bold' }, $.c.misleading_tags.label, ' '),
                  $.c.misleading_tags.options.map(function (e) {
                    return p.a.createElement(F.a, {
                      checked: at.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: tt('misleading_tags')(e.value),
                      style: Le.checkbox,
                    })
                  }),
                  rt(Re.misleading_tags),
                ),
              ),
              pe.map(function (e) {
                return p.a.createElement(
                  M.a,
                  { key: $.c[e].label, style: Le.questionSection },
                  p.a.createElement(N.a, {
                    label: $.c[e].label,
                    name: e,
                    onChange: et(e),
                    options: $.c[e].options,
                    value: q[e],
                  }),
                  rt(Re[e]),
                )
              }),
            ),
            ot = p.a.createElement(
              M.a,
              { style: Le.questionSection },
              p.a.createElement(
                M.a,
                { accessibilityLabel: $.c.not_misleading_tags.label, accessibilityRole: 'group' },
                p.a.createElement(D.b, { weight: 'bold' }, $.c.not_misleading_tags.label, ' '),
                $.c.not_misleading_tags.options.map(function (e) {
                  return p.a.createElement(F.a, {
                    checked: nt.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: tt('not_misleading_tags')(e.value),
                    style: Le.checkbox,
                  })
                }),
                rt(Re.not_misleading_tags),
              ),
            ),
            lt = function (e) {
              return (
                0 ===
                e.filter(function (e) {
                  return !!Re[e]
                }).length
              )
            },
            ct = function () {
              var e = q.summary || ''
              return !(!lt(me) || '' !== k(e)) && !!((dt === $.a && lt(he)) || (dt === $.b && lt(fe)))
            },
            st = function () {
              ze(!0),
                l(E, q)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      a({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(L.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        $e('submit_failed'),
                        ze(!1)
                    } else y({ updates: {}, tweetId: E }), g.replace(Je)
                  })
                  .catch(function (e) {
                    i({ defaultToast: { text: ue, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      ze(!1),
                      $e('submit_failed'),
                      Object(L.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            dt = q.classification,
            ut = q.trustworthy_sources,
            pt = void 0 === ut ? '' : ut ? 'true' : 'false',
            mt = dt === $.b,
            ht = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            ft = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            bt = C && Object(x.a)(C, !0),
            vt = p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(
                M.a,
                { style: Le.tweetContainer },
                p.a.createElement(R.b, { displayPromotedContent: !1, tweetId: E, withCurationMenu: !1 }),
              ),
              p.a.createElement(
                M.a,
                { style: Le.formQuestions },
                p.a.createElement(
                  M.a,
                  { style: Le.questionSection },
                  p.a.createElement(N.a, {
                    label: $.c.classification.label,
                    name: 'misleading_radio',
                    onChange: et('classification'),
                    options: $.c.classification.options,
                    value: dt,
                  }),
                  rt(Re.classification),
                ),
                dt === $.a && it,
                mt && ot,
                !!dt &&
                  p.a.createElement(
                    p.a.Fragment,
                    null,
                    p.a.createElement(
                      M.a,
                      { style: Le.questionSection },
                      p.a.createElement(
                        M.a,
                        { accessibilityLabel: mt ? oe : ie, accessibilityRole: 'group' },
                        p.a.createElement(D.b, { weight: 'bold' }, mt ? oe : ie),
                        p.a.createElement(D.b, { link: ce }, le),
                        p.a.createElement(H.a, {
                          calculateLength: S,
                          helperText: se,
                          invalid: !!Re.summary && Fe,
                          label: de,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            y({ updates: q, tweetId: E })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            Ae(function (e) {
                              return c()(c()({}, e), {}, { summary: t })
                            }),
                              Be(function (e) {
                                return c()(c()({}, e), {}, { summary: k(t) })
                              })
                          },
                          style: Le.textInput,
                          validLength: 280,
                          value: null == q ? void 0 : q.summary,
                        }),
                        rt(Re.summary),
                      ),
                    ),
                    p.a.createElement(
                      M.a,
                      { style: Le.questionSection },
                      p.a.createElement(N.a, {
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
                      rt(Re.trustworthy_sources),
                    ),
                    ht &&
                      !ft &&
                      p.a.createElement(M.a, { style: Le.callout }, p.a.createElement(U.a, { Icon: X.a, text: ae })),
                    ht &&
                      ft &&
                      bt &&
                      p.a.createElement(
                        M.a,
                        { style: Le.callout },
                        p.a.createElement(U.a, {
                          Icon: Z.a,
                          headline: ne({ displayAlias: bt }),
                          text: re,
                          withThumbnail: !0,
                        }),
                      ),
                    Fe &&
                      !ct() &&
                      p.a.createElement(
                        M.a,
                        { style: Le.callout },
                        p.a.createElement(U.a, { Icon: Q.a, text: ge, type: 'danger' }),
                      ),
                    p.a.createElement(
                      j.a,
                      {
                        disabled: je,
                        onPress: function () {
                          $e('submit'), Ne(!0)
                          var e = (function () {
                            var e = K()(q.summary)
                            if (0 === (null == e ? void 0 : e.length)) return 'source'
                            var t = q.summary
                            return (
                              e.forEach(function (e) {
                                if (!t) return 'explanation'
                                t = t.replace(e, '')
                              }),
                              t && 0 !== t.trim().length ? null : 'explanation'
                            )
                          })()
                          ct() && (e ? qe(e) : st())
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
          return ft && Xe
            ? p.a.createElement(h.a, {
                onAliasSelected: function (e) {
                  Ze(e)
                },
              })
            : w
            ? p.a.createElement(A.a, { to: Je })
            : Ke
            ? p.a.createElement(z.a, {
                actionLabel: Te,
                graphic: 'source' === Ke ? J.a : Y.a,
                graphicDisplayMode: 'thumbnail',
                headline: xe[Ke],
                onAction: function () {
                  $e('nudge_edit'), qe(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = P.a.forTweet(E)
                  n.scribe({ element: 'nudge', action: 'show', data: { targets: [e] } })
                },
                onTertiaryAction: function () {
                  $e('nudge_submit'), st()
                },
                subtext: Ie[Ke],
                tertiaryActionLabel: Se[Ke],
                withCloseButton: !1,
              })
            : p.a.createElement(
                I.b,
                {
                  history: g,
                  onBackClick: function () {
                    $e('close'), g.goBack()
                  },
                  renderHeader: B.b.isTwitterApp() ? gt : void 0,
                  title: ee,
                },
                p.a.createElement(M.a, { style: Le.contentWrapper }, vt),
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
        Oe = T(Ae)
      t.default = Oe
    },
    YICZ: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('Zejx'),
        o = a('rxPX'),
        l = a('0KEI'),
        c = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'TOPIC_NOT_INTERESTED_CONTEXT',
            ),
            setNotInterested: i.a.notInterested,
          }
        }),
        s = a('3XMw'),
        d = a.n(s),
        u = a('hOZg'),
        p = a('Jkc4'),
        m = a('Irs7'),
        h = a('/yvb'),
        f = a('rHpw'),
        b = d.a.d9b417c4,
        v = d.a.c29d6806,
        g = d.a.e839db39,
        w = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.nativeID,
            n = e.onPress,
            i = e.setNotInterested,
            o = e.size,
            l = e.style,
            c = e.text,
            s = e.topicId,
            d = e.type,
            u = e.withIconOnly,
            f = Object(m.b)(),
            v = r.a.useCallback(
              function (e) {
                e.preventDefault(),
                  n ? n(e) : (f.scribe({ element: 'topic', action: 'not_interested' }), i(s).catch(t()))
              },
              [f, t, n, i, s],
            )
          return r.a.createElement(p.a, null, function (e) {
            return r.a.createElement(
              h.a,
              {
                accessibilityLabel: b,
                hoverLabel: { label: g },
                icon: u ? _ : void 0,
                nativeID: a,
                onPress: e(v),
                pullRight: u,
                size: o,
                style: l,
                type: d,
              },
              u ? null : c,
            )
          })
        }
      w.defaultProps = { size: 'small', text: v, type: 'brandText', withIconOnly: !0 }
      var y = f.a.create(function (e) {
          return { closeIcon: { color: e.colors.gray700 } }
        }),
        _ = r.a.createElement(u.a, { style: y.closeIcon }),
        E = c(w)
      t.a = E
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
        l = a('3XMw'),
        c = a.n(l),
        s = a('VS6U'),
        d = a('MWbm'),
        u = a('FIs5'),
        p = a('rHpw'),
        m = c.a.b5711f09,
        h = c.a.e96677aa,
        f = c.a.f026d2ee,
        b = c.a.i859a9d3,
        v = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        g = function (e) {
          var t = e.history,
            a = r.a.createElement(
              d.a,
              { style: w.contentWrapper },
              r.a.createElement(u.a, {
                buttonLink: v,
                buttonText: b,
                buttonType: 'brandOutlined',
                header: h,
                message: f,
              }),
            )
          return r.a.createElement(s.a, {
            TabBar: o.a,
            history: t,
            primaryContent: a,
            sidebarContent: r.a.createElement(i.a, null),
            title: m,
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
      a.d(t, 'a', function () {
        return ka
      })
      var n,
        r,
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        p = a.n(u),
        m = a('2VqO'),
        h = a.n(m),
        f = a('KEM+'),
        b = a.n(f),
        v = a('ddV6'),
        g = a.n(v),
        w = (a('jQ3i'), a('x4t0'), a('2G9S'), a('uFXj'), a('ERkP')),
        y = a.n(w),
        _ = a('RhWx'),
        E = a.n(_),
        C = a('yiKp'),
        T = a.n(C),
        x = (a('z84I'), a('TJCb'), a('7x/C'), a('DZ+c'), a('LW0h'), a('v6aA')),
        I = a('MvLc'),
        S = a('rxPX'),
        k = a('0KEI'),
        A = Object(S.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: I.c,
              deleteRating: I.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        L = a('ACNv'),
        O = a('YeIG'),
        P = a('MWbm'),
        R = a('t62R'),
        B = a('XiMS'),
        M = a('fyvP'),
        D = a('/yvb'),
        F = a('IG7M'),
        N = a('rHpw'),
        H = (a('yH/f'), a('3XMw')),
        U = a.n(H),
        j = Object.freeze({
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
        z = [j.Informative, j.Clear, j.Empathetic, j.GoodSources, j.UniqueContext, j.Other],
        W =
          ((n = {}),
          b()(n, j.Clear, U.a.dfa44ddd),
          b()(n, j.Empathetic, U.a.hc2b6a7e),
          b()(n, j.GoodSources, U.a.a7bc3191),
          b()(n, j.Informative, U.a.f3e6f0a9),
          b()(n, j.Other, U.a.c365dcc5),
          b()(n, j.UniqueContext, U.a.c5d55592),
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
        q =
          ((r = {}),
          b()(r, V.Biased, U.a.bbe8b4ac),
          b()(r, V.Incorrect, U.a.heb35e12),
          b()(r, V.MissingKeyPoints, U.a.c34e0b2b),
          b()(r, V.NoSources, U.a.a802709f),
          b()(r, V.OffTopic, U.a.dd1f17e9),
          b()(r, V.Outdated, U.a.if966b54),
          b()(r, V.Other, U.a.c365dcc5),
          b()(r, V.Rude, U.a.d0ba7db4),
          b()(r, V.TwitterViolationAny, U.a.aa520d31),
          b()(r, V.Unclear, U.a.e25e5ed1),
          r),
        G = a('hiGS'),
        Q = a('TW8A'),
        X = a('WtWS'),
        Z = U.a.ed5156f9,
        J = [
          { label: U.a.b7ec04f3, value: !0 },
          { label: U.a.i62a03aa, value: !1 },
        ],
        Y = {
          helpful: { label: U.a.a7338bc2, options: J },
          agree: { label: U.a.d93489e6, options: J },
          helpful_tags: {
            label: U.a.j63844f5,
            options: z.map(function (e) {
              return { label: W[e], value: e }
            }),
          },
          not_helpful_tags: {
            label: U.a.e0806a48,
            options: K.map(function (e) {
              return { label: q[e], value: e }
            }),
          },
        },
        $ = U.a.a91bb144,
        ee = U.a.abd845fd,
        te = U.a.d96cf7cd,
        ae = U.a.j6aa6172,
        ne = U.a.i411275f,
        re = U.a.d1a479a8,
        ie = function (e) {
          return e.map(function (e) {
            return { label: e.label, value: e.value.toString() }
          })
        },
        oe = y.a.createElement(R.b, { weight: 'bold' }),
        le = y.a.createElement(R.b, { weight: 'bold' }),
        ce = y.a.createElement(R.b, { weight: 'bold' }),
        se = y.a.createElement(R.b, { weight: 'bold' }),
        de = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'if77e237' }, y.a.cloneElement(ce, null, U.a.a43beaf2)),
        ue = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, y.a.cloneElement(se, null, U.a.cb1d0ef3)),
        pe = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'j575fa79' }, y.a.cloneElement(oe, null, U.a.he5f1491)),
        me = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, y.a.cloneElement(le, null, U.a.a67e7d91)),
        he = y.a.createElement(
          U.a.I18NFormatMessage,
          { $i18n: 'd570f1d9' },
          y.a.cloneElement(ce, null, U.a.c9c4850a),
          y.a.cloneElement(oe, null, U.a.ffa975fd),
        ),
        fe = y.a.createElement(
          U.a.I18NFormatMessage,
          { $i18n: 'c6cb9513' },
          y.a.cloneElement(ce, null, U.a.c9701442),
          y.a.cloneElement(le, null, U.a.d2be9800),
        ),
        be = y.a.createElement(
          U.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          y.a.cloneElement(se, null, U.a.cf87d556),
          y.a.cloneElement(oe, null, U.a.hec80c95),
        ),
        ve = y.a.createElement(
          U.a.I18NFormatMessage,
          { $i18n: 'gbfec7fd' },
          y.a.cloneElement(se, null, U.a.bfa5f565),
          y.a.cloneElement(le, null, U.a.eb1cc800),
        ),
        ge = N.a.create(function (e) {
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
        we = A(function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.createRating,
            r = e.deleteRating,
            i = e.noteId,
            o = e.rating,
            l = y.a.useContext(x.a).featureSwitches,
            c = o || {},
            s = y.a.useState(c),
            d = g()(s, 2),
            u = d[0],
            p = d[1],
            m = y.a.useState(Object(O.a)(o)),
            h = g()(m, 2),
            f = h[0],
            v = h[1],
            w = function (e) {
              return function (t, a) {
                p(function (t) {
                  var n = a
                  return 'true' === a ? (n = !0) : 'false' === a && (n = !1), T()(T()({}, t), {}, b()({}, e, n))
                })
              }
            },
            _ = function (e) {
              var t = u[e] || []
              return y.a.createElement(
                P.a,
                { style: ge.checkboxContainer },
                y.a.createElement(R.b, { weight: 'bold' }, Y[e].label),
                Y[e].options.map(function (a) {
                  return y.a.createElement(B.a, {
                    checked: t.includes(a.value),
                    key: a.value,
                    label: a.label,
                    onChange: S(e)(a.value),
                    style: ge.checkbox,
                  })
                }),
              )
            },
            C = function () {
              k('delete'),
                r(i)
                  .then(function (e) {
                    'Done' === e.birdwatchnote_rating_delete && (p({}), v(!0))
                  })
                  .catch(a())
            },
            I = function () {
              k('edit'), v(!0)
            },
            S = function (e) {
              return function (t) {
                return function () {
                  p(function (a) {
                    return a[e]
                      ? a[e].includes(t)
                        ? T()(
                            T()({}, a),
                            {},
                            b()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : T()(T()({}, a), {}, b()({}, e, [].concat(E()(a[e]), [t])))
                      : T()(T()({}, a), {}, b()({}, e, [t]))
                  })
                }
              }
            },
            k = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            A = void 0 !== (null == u ? void 0 : u.helpful),
            N = A ? (null != u && u.helpful ? 'true' : 'false') : '',
            H = void 0 !== (null == u ? void 0 : u.agree),
            U = H ? (null != u && u.agree ? 'true' : 'false') : ''
          return f
            ? y.a.createElement(
                P.a,
                { style: ge.root },
                y.a.createElement(M.a, {
                  label: Y.helpful.label,
                  name: Y.helpful.label + i,
                  onChange: w('helpful'),
                  options: ie(J),
                  value: N,
                }),
                A && (null != u && u.helpful ? _('helpful_tags') : _('not_helpful_tags')),
                y.a.createElement(M.a, {
                  label: Y.agree.label,
                  name: Y.agree.label + i,
                  onChange: w('agree'),
                  options: ie(J),
                  value: U,
                }),
                !Object(O.a)(u) &&
                  y.a.createElement(
                    D.a,
                    {
                      onClick: function () {
                        k('submit'),
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
                P.a,
                { style: [ge.root, ge.showSubmittedRating] },
                y.a.createElement(
                  P.a,
                  { style: ge.row },
                  y.a.createElement(X.a, { style: ge.icon }),
                  y.a.createElement(
                    R.b,
                    { size: 'subtext2' },
                    null != u && u.helpful && !H
                      ? de
                      : (null != u && u.helpful) || H
                      ? null != u && u.agree && !A
                        ? pe
                        : (null != u && u.agree) || A
                        ? null != u && u.helpful && null != u && u.agree
                          ? he
                          : null == u || !u.helpful || (null != u && u.agree)
                          ? (null != u && u.helpful) || null == u || !u.agree
                            ? (null != u && u.helpful) || (null != u && u.agree)
                              ? void 0
                              : ve
                            : be
                          : fe
                        : me
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
                          Icon: G.a,
                          onClick: C,
                        }),
                        l.isTrue('responsive_web_birdwatch_ratings_v2_enabled')
                          ? t.push({ disabled: !0, text: ee, subText: re, Icon: Q.a })
                          : t.push({ text: ee, Icon: Q.a, onClick: I }),
                        t),
                      onClose: e,
                    })
                    var t
                  },
                }),
              )
        }),
        ye = a('xZGM'),
        _e = a('1YZw'),
        Ee = Object(S.a)()
          .propsFromState(function () {
            return {
              shouldShowDataPrivacyPrompt: function (e, t) {
                return Object(ye.D)(e, ye.c)
              },
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: ye.z,
              addToast: _e.b,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: I.c,
              deleteRating: I.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        Ce = a('cHvH'),
        Te = a('h0NW'),
        xe = a('feu+')
      a('+KXO')
      function Ie(e) {
        var t,
          a,
          n = U.a.a7bc3191,
          r = U.a.a26f8dc1,
          i = U.a.d89cfe9e,
          o = U.a.faa5f9e7,
          l = U.a.c365dcc5
        return e
          ? ((t = {}),
            b()(t, j.GoodSources, n),
            b()(t, j.Clear, r),
            b()(t, j.AddressesClaim, i),
            b()(t, j.ImportantContext, o),
            b()(t, j.UnbiasedLanguage, U.a.gf3b38f4),
            b()(t, j.Other, l),
            t)
          : ((a = {}),
            b()(a, j.GoodSources, n),
            b()(a, j.Clear, r),
            b()(a, j.AddressesClaim, i),
            b()(a, j.ImportantContext, o),
            b()(a, j.Other, l),
            a)
      }
      function Se(e) {
        return Object.keys(Ie(e))
      }
      function ke(e) {
        var t,
          a,
          n = U.a.ef490ae8,
          r = U.a.bf3dc461,
          i = U.a.heb35e12,
          o = U.a.ib117531,
          l = U.a.c365dcc5
        return e
          ? ((t = {}),
            b()(t, V.NoSources, n),
            b()(t, V.IrrelevantSources, r),
            b()(t, V.Incorrect, i),
            b()(t, V.OpinionSpeculation, U.a.h7c59ea2),
            b()(t, V.Unclear, U.a.d60c0063),
            b()(t, V.MissingKeyPoints, U.a.e06416c9),
            b()(t, V.Rude, U.a.cff1aa8b),
            b()(t, V.NoteNotNeeded, U.a.cc443e25),
            b()(t, V.TwitterViolationAny, o),
            b()(t, V.Other, l),
            t)
          : ((a = {}),
            b()(a, V.NoSources, n),
            b()(a, V.IrrelevantSources, r),
            b()(a, V.Incorrect, i),
            b()(a, V.Unclear, U.a.d60c0063),
            b()(a, V.MissingKeyPoints, U.a.c34e0b2b),
            b()(a, V.Rude, U.a.d24b99ed),
            b()(a, V.TwitterViolationAny, o),
            b()(a, V.Other, l),
            a)
      }
      function Ae(e) {
        return Object.keys(ke(e))
      }
      var Le = a('EQ/a'),
        Oe = a('DlMI'),
        Pe = U.a.ed5156f9,
        Re = [
          { label: U.a.b7ec04f3, value: 'Helpful' },
          { label: U.a.i26425d8, value: 'SomewhatHelpful' },
          { label: U.a.i62a03aa, value: 'NotHelpful' },
        ],
        Be = U.a.a91bb144,
        Me = U.a.abd845fd,
        De = U.a.d96cf7cd,
        Fe = U.a.j6aa6172,
        Ne = U.a.i411275f,
        He = U.a.e2988ed0,
        Ue = U.a.c1a50438,
        je = U.a.d2ae3d42,
        ze = U.a.c4e0c730,
        We = U.a.cfd2f35d,
        Ve = U.a.b1ea3365,
        Ke = U.a.h1a9d37a,
        qe = y.a.createElement(R.b, { weight: 'bold' }),
        Ge = y.a.createElement(R.b, {
          link: 'https://twitter.github.io/birdwatch/about/overview/#transparency-and-visibility',
          withInteractiveStyling: !0,
          withUnderline: !0,
        }),
        Qe = y.a.createElement(
          U.a.I18NFormatMessage,
          { $i18n: 'ab4d390f' },
          y.a.cloneElement(qe, null, U.a.iedb2fc7),
          y.a.cloneElement(Ge, null, U.a.cd24d5f5),
        ),
        Xe = y.a.createElement(R.b, { weight: 'bold' }),
        Ze = y.a.createElement(R.b, { weight: 'bold' }),
        Je = y.a.createElement(R.b, { weight: 'bold' }),
        Ye = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'had203a8' }, y.a.cloneElement(Xe, null, U.a.f2ceaed4)),
        $e = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'h42a21df' }, y.a.cloneElement(Ze, null, U.a.i7d91dc8)),
        et = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'c3d1a1b0' }, y.a.cloneElement(Je, null, U.a.c206a60f)),
        tt = N.a.create(function (e) {
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
          accessibilityLabel: je,
          containerStyle: tt.infoItemContainer,
          items: [
            { label: '', decoration: y.a.createElement(Le.a, { style: tt.iconDataPrivacy }), description: Ke },
            {
              label: '',
              decoration: y.a.createElement(Oe.a, { style: tt.iconDataPrivacy }),
              description: y.a.createElement(P.a, { style: tt.anonymousCrowdText }, Qe),
            },
          ],
        },
        nt = Ee(function (e) {
          var t = e.addFlag,
            a = e.addToast,
            n = e.analytics,
            r = e.createLocalApiErrorHandler,
            i = e.createRating,
            o = e.deleteRating,
            l = e.noteId,
            c = e.rating,
            s = e.ratingSurvey,
            d = e.shouldShowDataPrivacyPrompt,
            u = y.a.useContext(x.a).featureSwitches,
            p = y.a.useState(c),
            m = g()(p, 2),
            h = m[0],
            f = m[1],
            v = y.a.useState(Object(O.a)(c)),
            w = g()(v, 2),
            _ = w[0],
            C = w[1],
            I = y.a.useState(!1),
            S = g()(I, 2),
            k = S[0],
            A = S[1],
            M = u.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            H = {
              helpful: { label: U.a.a7338bc2, options: Re },
              helpful_tags: {
                label: U.a.ac7f9745,
                options: Se(M).map(function (e) {
                  return { label: Ie(M)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: U.a.c7751803,
                options: Ae(M).map(function (e) {
                  return { label: ke(M)[e], value: e }
                }),
              },
            },
            j = function (e) {
              n.scribeAction('click_'.concat(e))
            },
            z = function () {
              j('delete'),
                o(l)
                  .then(function (e) {
                    if ('Done' === e.birdwatchnote_rating_delete) {
                      var t = Object.freeze({})
                      f(t), C(!0)
                    }
                  })
                  .catch(r())
            },
            W = function () {
              j('edit'), C(!0)
            },
            K = function () {
              var e, t
              ;(j('submit'),
              i(l, h)
                .then(function () {
                  C(!1)
                })
                .catch(r({ defaultToast: { text: Pe, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              u.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(O.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = h.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = h.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
                  Math.random() < 0.05) &&
                a({
                  text: He,
                  action: { label: Ue, link: null == s ? void 0 : s.url },
                  withAutoDismiss: !0,
                  withClearButton: !0,
                })
            },
            q = function (e) {
              return function (t) {
                return function () {
                  f(function (a) {
                    return a[e]
                      ? a[e].includes(t)
                        ? T()(
                            T()({}, a),
                            {},
                            b()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : T()(T()({}, a), {}, b()({}, e, [].concat(E()(a[e]), [t])))
                      : T()(T()({}, a), {}, b()({}, e, [t]))
                  })
                }
              }
            },
            Z = function (e) {
              var t = (h && h[e]) || []
              return y.a.createElement(
                P.a,
                { style: tt.checkboxContainer },
                y.a.createElement(R.b, { weight: 'bold' }, H[e].label),
                H[e].options.map(function (a) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == h ? void 0 : h.helpfulness_level) &&
                      a.value === V.TwitterViolationAny
                    ) &&
                    y.a.createElement(B.a, {
                      checked: t.includes(a.value),
                      key: a.value,
                      label: a.label,
                      onChange: q(e)(a.value),
                      style: tt.checkbox,
                    })
                  )
                }),
              )
            },
            J = y.a.createElement(Ce.a, null, function (e) {
              var t = e.windowWidth <= N.a.theme.breakpoints.small
              return y.a.createElement(
                P.a,
                { style: !t && tt.helpfulContainer },
                y.a.createElement(R.b, { style: t && tt.helpfulQuestionMobile, weight: 'bold' }, H.helpful.label),
                y.a.createElement(
                  P.a,
                  { style: tt.helpfulOptions },
                  Re.map(function (e) {
                    return y.a.createElement(
                      D.a,
                      {
                        key: e.value,
                        onClick:
                          ((t = e.value),
                          function () {
                            f(function (e) {
                              return T()(T()({}, e), {}, { helpfulness_level: t })
                            })
                          }),
                        size: 'small',
                        style: tt.helpfulButtons,
                        type: (null == h ? void 0 : h.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
                      },
                      e.label,
                    )
                    var t
                  }),
                ),
              )
            }),
            Y = y.a.createElement(Te.a, at),
            $ = y.a.createElement(xe.a, {
              actionLabel: ze,
              headline: Ve,
              isFullHeightOnMobile: !0,
              onAction: function () {
                K(), t(ye.c), A(!1)
              },
              onSecondaryAction: function () {
                return A(!1)
              },
              secondaryActionLabel: We,
              subtext: Y,
            }),
            ee = void 0 !== (null == h ? void 0 : h.helpfulness_level),
            te =
              ee &&
              ('Helpful' === (null == h ? void 0 : h.helpfulness_level) ||
                'SomewhatHelpful' === (null == h ? void 0 : h.helpfulness_level)),
            ae =
              ee &&
              ('NotHelpful' === (null == h ? void 0 : h.helpfulness_level) ||
                'SomewhatHelpful' === (null == h ? void 0 : h.helpfulness_level))
          return y.a.createElement(
            y.a.Fragment,
            null,
            k ? $ : null,
            _
              ? y.a.createElement(
                  P.a,
                  { style: tt.root },
                  J,
                  te && Z('helpful_tags'),
                  ae && Z('not_helpful_tags'),
                  !Object(O.a)(h) &&
                    y.a.createElement(
                      D.a,
                      {
                        onClick: function () {
                          d && u.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? A(!0) : h && K()
                        },
                        style: tt.button,
                        type: 'brandFilled',
                      },
                      Be,
                    ),
                )
              : y.a.createElement(
                  P.a,
                  { style: [tt.root, tt.showSubmittedRating] },
                  y.a.createElement(
                    P.a,
                    { style: tt.row },
                    y.a.createElement(X.a, { style: tt.icon }),
                    y.a.createElement(
                      R.b,
                      null,
                      (function () {
                        switch (null == h ? void 0 : h.helpfulness_level) {
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
                            confirmation: { label: De, headline: Fe, text: Ne, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: De,
                            Icon: G.a,
                            onClick: z,
                          }),
                          t.push({ text: Me, Icon: Q.a, onClick: W }),
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
        lt = Object(S.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: ot, userAlias: I.y }
          })
          .propsFromActions(function () {
            return {
              addToast: _e.b,
              createAppeal: I.a,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: rt.b,
              fetchTweet: it.a.fetchOneIfNeeded,
              fetchUserAlias: I.l,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        ct = a('eqZz'),
        st = a('W6+M'),
        dt = a('NPGn'),
        ut = a('pjBI'),
        pt = a('xKuM'),
        mt = a('5Vk4'),
        ht = a('855f'),
        ft = a('yrzJ'),
        bt = a('sgih'),
        vt = a('sUoZ'),
        gt = a('EaI7'),
        wt = a('x0mb'),
        yt = a('6Rrp'),
        _t = a('5oT/'),
        Et = a('5emT'),
        Ct = a('ms2t'),
        Tt = U.a.e4579709,
        xt = U.a.df587b98,
        It = U.a.h201bdc8,
        St = U.a.j58e7b00,
        kt = U.a.h74b96bf,
        At = U.a.i859a9d3,
        Lt = U.a.ge258489,
        Ot = U.a.fe4fd310,
        Pt = U.a.g2edfc1a,
        Rt = U.a.d6db34cb,
        Bt = U.a.ce8b505e,
        Mt = U.a.j21902fc,
        Dt = U.a.hef420c1,
        Ft = U.a.j3af43c4,
        Nt = U.a.caf7aebd,
        Ht = U.a.fc6e4593,
        Ut = function (e, t, a, n) {
          return y.a.createElement(
            P.a,
            { style: zt.ratingInfoItem },
            y.a.createElement(e, { style: [zt.icon, t] }),
            y.a.createElement(
              P.a,
              { style: zt.ratingStatusTextSection },
              y.a.createElement(R.b, { size: 'subtext1', style: zt.ratingStatusText }, a),
              y.a.createElement(R.b, { color: 'gray700', size: 'subtext1', style: zt.ratingStatusText }, n),
              y.a.createElement(
                R.b,
                { link: 'https://twitter.github.io/birdwatch/diversity-of-perspectives', size: 'subtext1' },
                At,
              ),
            ),
          )
        },
        jt = (function (e) {
          p()(a, e)
          var t = h()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(d()(e), '_isShownOnTwitter', function () {
                var t = e.props.note,
                  a = t.data_v1
                return t.rating_status === ka.CurrentlyRatedHelpful && (null == a ? void 0 : a.classification) === dt.a
              }),
              b()(d()(e), '_renderRatingStatus', function (t) {
                switch (t) {
                  case ka.CurrentlyRatedHelpful:
                    var a = y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(
                          ut.a,
                          null,
                          y.a.createElement(R.b, null, Ot),
                          y.a.createElement(R.b, null, Pt),
                        ),
                      ),
                      n = e._isShownOnTwitter() ? a : Ot
                    return Ut(vt.a, zt.iconStar, n, Mt)
                  case ka.CurrentlyRatedNotHelpful:
                    return Ut(gt.a, zt.iconRed, Bt, Ft)
                  case ka.NeedsMoreRatings:
                    return Ut(wt.a, zt.iconGray, Rt, Dt)
                  default:
                    return null
                }
              }),
              b()(d()(e), '_renderRatingTags', function (t) {
                var a = e.context.featureSwitches.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled')
                return t.helpful_tags
                  ? t.helpful_tags.map(function (e) {
                      return y.a.createElement(
                        P.a,
                        { key: e, style: zt.ratingTag },
                        y.a.createElement(yt.a, { style: [zt.icon, zt.iconGreen] }),
                        y.a.createElement(R.b, { size: 'subtext1' }, Ie(a)[e]),
                      )
                    })
                  : t.not_helpful_tags
                  ? t.not_helpful_tags.map(function (e) {
                      return y.a.createElement(
                        P.a,
                        { key: e, style: zt.ratingTag },
                        y.a.createElement(_t.a, { style: [zt.icon, zt.iconRed] }),
                        y.a.createElement(R.b, { size: 'subtext1' }, ke(a)[e]),
                      )
                    })
                  : void 0
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.alias,
                    n = t.closeNoteDetails,
                    r = t.created_at,
                    i = t.note,
                    o = t.rest_id,
                    l = t.userBadges,
                    c = this.context.featureSwitches,
                    s = c.isTrue('responsive_web_birdwatch_note_awards_enabled'),
                    d = c.isTrue('responsive_web_birdwatch_aliases_enabled'),
                    u = i.helpful_tags || i.not_helpful_tags,
                    p = y.a.createElement(
                      P.a,
                      { style: zt.noteDetailsContainer },
                      y.a.createElement(pt.a, {
                        leftControl: y.a.createElement(mt.a, { backButtonType: 'close', onClick: n }),
                        title: Tt,
                      }),
                      y.a.createElement(
                        P.a,
                        { style: zt.noteDetails },
                        y.a.createElement(
                          P.a,
                          { style: zt.noteDetailsSection },
                          y.a.createElement(R.b, { style: zt.noteDetailsText, weight: 'bold' }, Lt),
                          this._renderRatingStatus(i.rating_status),
                          i.impression_count && c.isTrue('responsive_web_birdwatch_impressions_enabled')
                            ? y.a.createElement(
                                P.a,
                                { style: [zt.ratingInfoItem, zt.impressionSection] },
                                y.a.createElement(Et.a, { style: [zt.icon, zt.iconBlack] }),
                                y.a.createElement(
                                  P.a,
                                  { style: zt.ratingStatusTextSection },
                                  y.a.createElement(
                                    R.b,
                                    { size: 'subtext1', style: zt.ratingStatusText },
                                    ((e = ht.a.getTruncatedCount(i.impression_count)),
                                    y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'd9f77781', impressions: e })),
                                  ),
                                  y.a.createElement(
                                    R.b,
                                    { color: 'gray700', size: 'subtext1', style: zt.ratingStatusText },
                                    Nt,
                                  ),
                                  y.a.createElement(
                                    R.b,
                                    { link: 'https://twitter.github.io/birdwatch/notes-on-twitter', size: 'subtext1' },
                                    At,
                                  ),
                                ),
                              )
                            : null,
                        ),
                        u
                          ? y.a.createElement(
                              P.a,
                              { style: zt.noteDetailsSection },
                              y.a.createElement(R.b, { style: zt.noteDetailsText, weight: 'bold' }, Ht),
                              this._renderRatingTags(i),
                            )
                          : null,
                        y.a.createElement(
                          P.a,
                          { style: [zt.noteDetailsSection, zt.noteDetailsSectionBorder] },
                          y.a.createElement(R.b, { style: zt.noteDetailsText, weight: 'bold' }, It),
                          d
                            ? y.a.createElement(
                                P.a,
                                { style: zt.noteAuthor },
                                y.a.createElement(Ct.a, { style: [zt.icon, zt.iconBlack] }),
                                y.a.createElement(
                                  P.a,
                                  null,
                                  y.a.createElement(
                                    R.b,
                                    { dir: 'ltr', numberOfLines: 1, size: 'subtext1', style: zt.profileText },
                                    Object(st.a)(a),
                                  ),
                                  d &&
                                    y.a.createElement(
                                      R.b,
                                      {
                                        color: 'link',
                                        link: '/i/birdwatch/u/'.concat(a),
                                        onClick: n,
                                        size: 'subtext1',
                                        style: zt.viewProfileLink,
                                      },
                                      St,
                                    ),
                                ),
                              )
                            : y.a.createElement(ft.a, { screenName: a }),
                          s && l && l.length > 0
                            ? l.map(function (e, t) {
                                return y.a.createElement(ct.a, { badgeType: e, key: t })
                              })
                            : null,
                        ),
                      ),
                      y.a.createElement(
                        P.a,
                        { style: [zt.noteDetailsSection, zt.noteDetailsSectionLast] },
                        y.a.createElement(
                          R.b,
                          { size: 'subtext1', style: zt.noteDetailsContentText },
                          ''
                            .concat(kt, ' ')
                            .concat(
                              (function (e) {
                                if (!e) return ''
                                var t = new Date(e).toLocaleString('default', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                  }),
                                  a = new Date(e).toLocaleString('default', { hour: '2-digit', minute: '2-digit' })
                                return ''.concat(a, ' · ').concat(t, ' ')
                              })(r),
                              ' · ',
                            )
                            .concat(xt, ' ')
                            .concat(o),
                        ),
                      ),
                    )
                  return y.a.createElement(bt.a, {
                    allowBackNavigation: !0,
                    children: p,
                    onMaskClick: n,
                    type: 'full',
                    withMask: !0,
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      b()(jt, 'contextType', x.a)
      var zt = N.a.create(function (e) {
          return {
            awardDetailsText: { marginBottom: e.spaces.space8 },
            genericBirdwatchProfileIcon: {
              color: e.colors.gray600,
              backgroundColor: e.colors.gray100,
              marginRight: e.spaces.space8,
            },
            icon: {
              height: e.spaces.space12,
              flexShrink: 0,
              paddingBottom: e.spaces.space2,
              paddingRight: e.spaces.space8,
              paddingTop: e.spaces.space2,
              width: e.spaces.space12,
            },
            iconBlack: { color: e.colors.text },
            iconGray: { color: e.colors.gray700 },
            iconRed: { color: e.colors.red500 },
            iconGreen: { color: e.colors.green500 },
            iconStar: { color: e.colors.green500, height: e.spaces.space12, width: e.spaces.space12 },
            impressionSection: { paddingTop: e.spaces.space12 },
            noteAuthor: { flexDirection: 'row' },
            noteDetails: { alignItems: 'flex-start', display: 'flex', paddingHorizontal: e.spaces.space8 },
            noteDetailsContainer: { display: 'flex', height: '100%', paddingBottom: e.spaces.space12 },
            noteDetailsContentText: { color: e.colors.gray700, paddingTop: e.spaces.space8 },
            noteDetailsHeader: { textAlign: 'center', marginTop: e.spaces.space32, marginBottom: e.spaces.space16 },
            noteDetailsSection: {
              alignItems: 'flex-start',
              padding: e.spaces.space16,
              paddingTop: e.spaces.space4,
              width: '100%',
            },
            noteDetailsSectionBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            noteDetailsSectionLast: { paddingBottom: 0 },
            noteDetailsText: { marginBottom: e.spaces.space8 },
            profileText: { textTransform: 'capitalize' },
            ratingInfoItem: { alignItems: 'flex-start', flexDirection: 'row', paddingBottom: e.spaces.space4 },
            ratingStatusText: { paddingBottom: e.spaces.space4 },
            ratingStatusTextSection: { flex: 1, width: '100%' },
            ratingTag: { flexDirection: 'row', paddingBottom: e.spaces.space4 },
            viewProfileLink: { marginVertical: e.spaces.space4 },
          }
        }),
        Wt = jt,
        Vt = a('b5s6'),
        Kt = a('rcen'),
        qt = a('Rp9C'),
        Gt = 'helpfulRatingTags',
        Qt = 'notHelpfulRatingTags',
        Xt = 'ratingStatus',
        Zt = a('4zmP'),
        Jt = a('GBcw'),
        Yt = a('htQn'),
        $t = a('zIWA'),
        ea = a('/WPq'),
        ta = a('6s7X'),
        aa = a('fBGZ'),
        na = a('2Rcs'),
        ra = a('Nh1N'),
        ia = U.a.d96cf7cd,
        oa = U.a.e272836c,
        la = U.a.e4579709,
        ca = U.a.fa0d3ee3,
        sa = U.a.ccf2f24e,
        da = U.a.df321fc3,
        ua = y.a.createElement(R.b, { color: 'primary' }, da),
        pa = U.a.b9f18eec,
        ma = U.a.g2edfc1a,
        ha = U.a.d6db34cb,
        fa = U.a.j2c3f3cf,
        ba = U.a.ac39da02,
        va = U.a.d1dd62ac,
        ga = U.a.b664c554,
        wa = U.a.ab66e1f2,
        ya = U.a.b2792b8c,
        _a = U.a.b74df918,
        Ea = U.a.hfd2544f,
        Ca = U.a.b9e1cf02,
        Ta = U.a.cfd2f35d,
        xa = U.a.i80c8a83,
        Ia = U.a.i859a9d3,
        Sa = U.a.i97b83f6,
        ka = {
          CurrentlyRatedHelpful: 'CurrentlyRatedHelpful',
          CurrentlyRatedNotHelpful: 'CurrentlyRatedNotHelpful',
          NeedsMoreRatings: 'NeedsMoreRatings',
        },
        Aa = (function (e) {
          p()(a, e)
          var t = h()(a)
          function a(e, n) {
            var r
            return (
              o()(this, a),
              (r = t.call(this, e, n)),
              b()(d()(r), '_handleFetchTweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchTweet,
                  n = e.note.tweet,
                  i = null == n ? void 0 : n.rest_id
                i && a(i).catch(t())
              }),
              b()(d()(r), '_isOwner', function () {
                var e,
                  t = r.props,
                  a = t.note,
                  n = t.userAlias,
                  i = null == a || null === (e = a.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!n || !i) && i === n
              }),
              b()(d()(r), '_handleDeleteConfirm', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.deleteNote,
                  n = e.handleDelete,
                  i = e.note,
                  o = i.birdwatch_profile,
                  l = i.rest_id
                r._scribeOnClick('delete')(),
                  null != o &&
                    o.alias &&
                    r._isOwner() &&
                    a(l)
                      .then(function (e) {
                        null == n || n(l)
                      })
                      .catch(t())
              }),
              b()(d()(r), '_getMenuActionItems', function () {
                var e = r.props.note,
                  t = e.birdwatch_profile,
                  a = e.rest_id,
                  n = []
                return (
                  null != t &&
                    t.alias &&
                    r._isOwner() &&
                    n.push({
                      confirmation: { label: ia, headline: oa, text: ca, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: ia,
                      Icon: G.a,
                      onClick: r._handleDeleteConfirm,
                    }),
                  n.push({
                    text: sa,
                    Icon: $t.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(a) },
                    onClick: r._scribeOnClick('report'),
                  }),
                  n.push({ text: la, Icon: ea.a, onClick: r._onNoteDetailsClick }),
                  n
                )
              }),
              b()(d()(r), '_onNoteDetailsClick', function () {
                r.setState({ noteDetailsOpen: !0 }), r._scribeOnClick('note_details')()
              }),
              b()(d()(r), '_renderCurationActionMenu', function (e) {
                return y.a.createElement(L.default, { actionItems: r._getMenuActionItems(), onClose: e })
              }),
              b()(d()(r), '_scribeOnClick', function (e) {
                return function () {
                  var t = r.props,
                    a = t.analytics,
                    n = t.note.tweet
                  if (n) {
                    var i = qt.a.forTweet(n.rest_id)
                    a.scribe({ element: e, action: 'click', data: { targets: [i] } })
                  }
                }
              }),
              b()(d()(r), '_handleRequestAppeal', function () {
                var e = r.props,
                  t = e.createAppeal,
                  a = e.createLocalApiErrorHandler
                t(e.note.rest_id)
                  .then(function () {
                    r.setState({ appealsRequestOpen: !1 }), r.setState({ appealRequested: !0 })
                  })
                  .catch(a({ defaultToast: { text: Sa, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }))
              }),
              b()(d()(r), '_handleOpenAppealsModal', function () {
                r.setState({ appealsRequestOpen: !0 })
              }),
              b()(d()(r), '_handleCloseAppealsModal', function () {
                r.setState({ appealsRequestOpen: !1 })
              }),
              b()(d()(r), '_renderAppealsModal', function () {
                var e = y.a.createElement(P.a, null, y.a.createElement(R.b, null, wa), y.a.createElement(Te.a, Oa))
                return y.a.createElement(xe.a, {
                  actionLabel: Ca,
                  graphicDisplayMode: 'none',
                  headline: ga,
                  isFullHeightOnMobile: !0,
                  onAction: r._handleRequestAppeal,
                  onSecondaryAction: r._handleCloseAppealsModal,
                  secondaryActionLabel: Ta,
                  subtext: e,
                })
              }),
              b()(d()(r), '_renderAppealsStatus', function () {
                var e = r.props,
                  t = e.note.can_appeal,
                  a = e.showTweet,
                  n = y.a.createElement(
                    U.a.I18NFormatMessage,
                    { $i18n: 'c5c4d000' },
                    y.a.createElement(
                      R.b,
                      { onPress: r._handleOpenAppealsModal, withInteractiveStyling: !0, withUnderline: !0 },
                      U.a.c8259b73,
                    ),
                  )
                return r.state.appealRequested
                  ? y.a.createElement(Zt.a, {
                      Icon: X.a,
                      action: { label: Ia, link: 'https://twitter.github.io/birdwatch/additional-review' },
                      headline: xa,
                      type: 'success',
                    })
                  : t
                  ? y.a.createElement(R.b, { color: 'gray700', size: 'subtext2', style: a && La.noteWithQT }, n)
                  : void 0
              }),
              b()(d()(r), '_isShownOnTwitter', function () {
                var e = r.props.note,
                  t = e.data_v1
                return e.rating_status === ka.CurrentlyRatedHelpful && (null == t ? void 0 : t.classification) === dt.a
              }),
              b()(d()(r), '_getRatingStatusText', function (e, t, a) {
                return y.a.createElement(
                  P.a,
                  { style: La.ratingInfoItem, testID: Xt },
                  y.a.createElement(e, { style: [La.icon, t] }),
                  y.a.createElement(R.b, { size: 'subtext2', weight: 'bold' }, a),
                  y.a.createElement(
                    R.b,
                    { color: 'text', onPress: r._onNoteDetailsClick },
                    y.a.createElement(ta.a, { style: [La.icon, La.infoIcon] }),
                  ),
                )
              }),
              b()(d()(r), '_renderRatingStatus', function (e) {
                switch (e) {
                  case ka.CurrentlyRatedHelpful:
                    var t = y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(
                          ut.a,
                          null,
                          y.a.createElement(R.b, null, pa),
                          y.a.createElement(R.b, null, ma),
                        ),
                      ),
                      a = r._isShownOnTwitter() ? t : pa
                    return r._getRatingStatusText(vt.a, La.iconStar, a)
                  case ka.CurrentlyRatedNotHelpful:
                    return r._getRatingStatusText(gt.a, La.iconRed, fa)
                  case ka.NeedsMoreRatings:
                    return r._getRatingStatusText(wt.a, La.iconGray, ha)
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
            c()(a, [
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
                    i = n.note,
                    o = i.created_at,
                    l = i.data_v1,
                    c = i.helpful_tags,
                    s = void 0 === c ? [] : c,
                    d = i.impression_count,
                    u = i.not_helpful_tags,
                    p = void 0 === u ? [] : u,
                    m = i.rating,
                    h = i.rating_status,
                    f = i.rating_survey,
                    b = i.rest_id,
                    v = i.tweetId,
                    w = i.tweet,
                    _ = n.showPivot,
                    E = n.showRating,
                    C = n.showTweet,
                    T = n.withBorder,
                    x = this.context.featureSwitches,
                    I = v || (null == w ? void 0 : w.rest_id),
                    S = (null == l || null === (e = l.summary) || void 0 === e ? void 0 : e.text) || '',
                    k = (null == l || null === (t = l.summary) || void 0 === t ? void 0 : t.entities) || [],
                    A = (null == m ? void 0 : m.data_v1) || {},
                    L = (null == m ? void 0 : m.data_v2) || {},
                    B = 2 === (null == m ? void 0 : m.version),
                    M = B ? L : A,
                    D = Object(O.a)(M),
                    H = (x.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && D) || B,
                    j =
                      (x.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        x.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      E,
                    z = x.isTrue('responsive_web_birdwatch_appeals_enabled') && this.state.appealsRequestOpen,
                    V = this.props.note.birdwatch_profile,
                    K = (null == V ? void 0 : V.alias) || '',
                    G = (null == V ? void 0 : V.badges) || [],
                    Q = function () {
                      return a.setState({ noteDetailsOpen: !1 })
                    }
                  return y.a.createElement(Ce.a, null, function (e) {
                    var t,
                      n = e.windowWidth
                    return y.a.createElement(
                      P.a,
                      { key: b, style: La.noteContainer },
                      z && a._renderAppealsModal(),
                      y.a.createElement(
                        P.a,
                        { style: La.noteTopContainer },
                        C && I
                          ? y.a.createElement(
                              P.a,
                              { style: La.tweetContainer },
                              y.a.createElement(Vt.a, { isCondensed: !0, tweetId: I }),
                            )
                          : null,
                        y.a.createElement(
                          P.a,
                          { style: [La.noteTop, C && La.noteWithQT, T && La.noteWithBorder] },
                          y.a.createElement(
                            P.a,
                            { style: La.noteBody },
                            y.a.createElement(
                              ut.a,
                              { style: La.noteInfoMiddots },
                              a._renderRatingStatus(h),
                              o && n >= N.a.theme.breakpoints.medium
                                ? y.a.createElement(Jt.a, { style: [La.ratingInfoItem, La.timestamp], timestamp: o })
                                : null,
                            ),
                            d && x.isTrue('responsive_web_birdwatch_impressions_enabled')
                              ? y.a.createElement(
                                  R.b,
                                  { color: 'gray700', size: 'subtext2', style: La.subtext },
                                  ((t = ht.a.getTruncatedCount(d)),
                                  y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'd9f77781', impressions: t })),
                                )
                              : null,
                            h === ka.CurrentlyRatedHelpful && (null == l ? void 0 : l.classification) === dt.b
                              ? y.a.createElement(R.b, { color: 'gray700', size: 'subtext2', style: La.subtext }, ba)
                              : null,
                            y.a.createElement(
                              ut.a,
                              { style: La.noteInfoMiddots },
                              (function (e, t, a) {
                                switch (e) {
                                  case ka.CurrentlyRatedHelpful:
                                    if (2 === t.length) {
                                      var n = g()(t, 2),
                                        r = n[0],
                                        i = n[1],
                                        o = Se(!0),
                                        l = Ie(!0),
                                        c = o.includes(r) ? l[r] : W[r],
                                        s = o.includes(i) ? l[i] : W[i],
                                        d = ''.concat(c, ' · ').concat(s)
                                      return c && s
                                        ? y.a.createElement(R.b, { color: 'gray700', size: 'subtext2', testID: Gt }, d)
                                        : null
                                    }
                                    return null
                                  case ka.CurrentlyRatedNotHelpful:
                                    if (2 === a.length) {
                                      var u = g()(a, 2),
                                        p = u[0],
                                        m = u[1],
                                        h = Ae(!0).includes(p) ? ke(!0)[p] : q[p],
                                        f = Ae(!0).includes(m) ? ke(!0)[m] : q[m],
                                        b = ''.concat(h, ' · ').concat(f)
                                      return h && f
                                        ? y.a.createElement(R.b, { color: 'gray700', size: 'subtext2', testID: Qt }, b)
                                        : null
                                    }
                                    return null
                                  default:
                                    return null
                                }
                              })(h, s, p),
                            ),
                            y.a.createElement(
                              P.a,
                              { style: La.noteTextSection },
                              y.a.createElement(Kt.a, {
                                entities: k,
                                onEntityClick: a._scribeOnClick('link'),
                                text: S,
                              }),
                            ),
                          ),
                          y.a.createElement(F.a, { renderActionMenu: a._renderCurationActionMenu, style: La.caret }),
                        ),
                        j
                          ? y.a.createElement(
                              P.a,
                              { style: La.ratingContainer },
                              H
                                ? y.a.createElement(nt, { noteId: b, rating: L, ratingSurvey: f })
                                : y.a.createElement(we, { noteId: b, rating: A }),
                            )
                          : null,
                        x.isTrue('responsive_web_birdwatch_appeals_enabled') ? a._renderAppealsStatus() : null,
                      ),
                      _ &&
                        I &&
                        x.isTrue('responsive_web_birdwatch_rating_participant_enabled') &&
                        y.a.createElement(
                          Yt.a,
                          null,
                          y.a.createElement(
                            R.b,
                            {
                              link: '/i/birdwatch/t/'.concat(I),
                              onPress: a._scribeOnClick('pivot'),
                              style: [La.pivot, C && La.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            ua,
                          ),
                        ),
                      a.state.noteDetailsOpen &&
                        y.a.createElement(Wt, {
                          alias: K,
                          closeNoteDetails: Q,
                          created_at: o,
                          note: r,
                          rest_id: b,
                          userBadges: G,
                        }),
                    )
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      b()(Aa, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), b()(Aa, 'contextType', x.a)
      var La = N.a.create(function (e) {
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
            infoIcon: { marginBottom: e.spaces.space2, paddingLeft: e.spaces.space4, paddingRight: 0 },
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
        Oa = {
          accessibilityLabel: va,
          containerStyle: La.infoItemContainer,
          items: [
            { label: '', decoration: y.a.createElement(aa.a, { style: La.iconAppeals }), description: ya },
            { label: '', decoration: y.a.createElement(na.a, { style: La.iconAppeals }), description: _a },
            { label: '', decoration: y.a.createElement(ra.a, { style: La.iconAppeals }), description: Ea },
          ],
        },
        Pa = lt(Aa)
      t.b = Pa
    },
    aA1u: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('2G9S'), a('ERkP')),
        b = a.n(f),
        v = a('t62R'),
        g = a('21zW'),
        w = a('rHpw'),
        y = a('3XMw'),
        _ = a.n(y),
        E = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_formatTimestamp', function (e) {
                var t = _.a.jade381b,
                  a = _.a.d725a288,
                  n = new Date(e),
                  r = t(n),
                  i = a(n)
                return ''.concat(i, ' · ').concat(r)
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.style
                  return b.a.createElement(
                    v.b,
                    { color: 'gray700', style: e },
                    this._renderTimestampAndMaybePlace(),
                    this._maybeRenderSource(),
                  )
                },
              },
              {
                key: '_renderTimestampAndMaybePlace',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    a = e.onPlaceClick,
                    n = e.onTimestampClick,
                    r = e.place,
                    i = e.placeLink,
                    o = e.timestamp,
                    l = e.timestampLink,
                    c = this._formatTimestamp(o)
                  return r
                    ? b.a.createElement(
                        _.a.I18NFormatMessage,
                        { $i18n: 'ba64a3b2' },
                        b.a.createElement(
                          v.b,
                          { color: l ? t : void 0, link: l, onClick: n },
                          _.a.e9c24489({ date: c }),
                        ),
                        b.a.createElement(
                          v.b,
                          { color: i ? t : void 0, link: i, onClick: a },
                          _.a.a16de8a4({ place: r }),
                        ),
                      )
                    : b.a.createElement(v.b, { color: l ? t : void 0, link: l, onClick: n }, c)
                },
              },
              {
                key: '_maybeRenderSource',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    a = e.onSourceClick,
                    n = e.source,
                    r = e.sourceLink
                  return n
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(g.a, null),
                        b.a.createElement(v.b, { color: r ? t : void 0, link: r, onClick: a, style: C.source }, n),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      h()(E, 'defaultProps', { linkColor: 'link' })
      var C = w.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = E
    },
    b5s6: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        l = a('ERkP'),
        c = a.n(l),
        s = a('v6aA'),
        d = a('XOJV'),
        u = a('eSoz'),
        p = a('rxPX'),
        m = a('0KEI'),
        h = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var a = t.tweetId,
            n = a && d.a.select(e, a)
          return n ? Object(u.g)(e, n) : void 0
        },
        b = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: d.a.createHydratedTweetSelector(h) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        v = a('YeIG'),
        g = a('uCxL'),
        w = a('x5Pi'),
        y = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        _ = b(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, y)),
            d = c.a.useContext(s.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          c.a.useEffect(
            function () {
              m && Object(v.a)(t) && n(m).catch(a())
            },
            [t, m, a, n],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(w.f)(i, p, t),
            b = f && Object(w.e)(f),
            _ = u.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            g.a,
            r()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: b,
              tweet: i,
              withReactions: _,
            }),
          )
        })
      t.a = _
    },
    dCqJ: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('cm6r'),
        o = a('VrFO'),
        l = a.n(o),
        c = a('Y9Ll'),
        s = a.n(c),
        d = a('1Pcy'),
        u = a.n(d),
        p = a('5Yy7'),
        m = a.n(p),
        h = a('2VqO'),
        f = a.n(h),
        b = a('KEM+'),
        v = a.n(b),
        g = (a('2G9S'), a('t62R')),
        w = a('rHpw'),
        y = a('3XMw'),
        _ = a.n(y),
        E = _.a.d7e50a66,
        C = 'INDIRECT',
        T = 'NO_SPONSORSHIP',
        x = 'ISSUE',
        I = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), '_renderDisclaimerDetails', function () {
                var t = e.props,
                  a = t.onPoliticalSponsorWebsiteClick,
                  n = t.promotedContent
                if (!n.adMetadataContainer) return null
                var i = n.adMetadataContainer,
                  o = i.disclaimerType,
                  l = i.sponsorshipCandidate,
                  c = i.sponsorshipOrganization,
                  s = i.sponsorshipOrganizationWebsite,
                  d = i.sponsorshipType,
                  u =
                    s && o !== x
                      ? r.a.createElement(g.b, { link: s, onClick: a })
                      : r.a.createElement(g.b, { color: 'gray700', size: 'subtext2' })
                if (!c) return null
                var p = r.a.createElement(
                    _.a.I18NFormatMessage,
                    { $i18n: 'e1e348dc' },
                    r.a.cloneElement(u, null, _.a.b1e5bc63({ sponsorshipOrganization: c })),
                  ),
                  m = r.a.createElement(
                    _.a.I18NFormatMessage,
                    { $i18n: 'c7dea0d0' },
                    r.a.cloneElement(u, null, _.a.a84fcff2({ sponsorshipOrganization: c })),
                  ),
                  h = l
                    ? r.a.createElement(
                        _.a.I18NFormatMessage,
                        { $i18n: 'b5c2371a', sponsorshipCandidate: l },
                        r.a.cloneElement(u, null, _.a.fd985325({ sponsorshipOrganization: c })),
                      )
                    : null
                return r.a.createElement(
                  g.b,
                  { color: 'gray700', size: 'subtext2' },
                  o === x ? p : d === T ? m : d === C ? h : p,
                )
              }),
              v()(u()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  a = t.onPromotedDisclaimerLearnMoreClick,
                  n = t.promotedContent,
                  i = t.tweet,
                  o = (n.adMetadataContainer || {}).disclaimerType === x ? 'issue_ad' : 'political_ad',
                  l = 'http://ads.twitter.com/transparency/ads/'.concat(i.user.screen_name, '/tweet/').concat(i.id_str)
                return r.a.createElement(g.b, { link: l, onClick: a(o), size: 'subtext2', style: S.learnMore }, E)
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this._renderDisclaimerDetails(),
                    this._renderLearnMoreLink(),
                  )
                },
              },
            ]),
            a
          )
        })(r.a.Component),
        S = w.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        k = a('e5HP'),
        A = a('Z6aJ'),
        L = a('MWbm')
      t.a = function (e) {
        var t = e.onPoliticalSponsorWebsiteClick,
          a = e.onPromotedDisclaimerLearnMoreClick,
          n = e.onPromotedIndicatorClick,
          o = e.promotedContent,
          l = e.promotedContentAdvertiser,
          c = e.style,
          s = e.testID,
          d = e.tweet,
          u = e.withCircleIcon,
          p = A.a.isPromoted(o),
          m =
            !!o &&
            ((o.adMetadataContainer &&
              ('POLITICAL' === o.adMetadataContainer.disclaimerType ||
                'ISSUE' === o.adMetadataContainer.disclaimerType)) ||
              'political' === A.a.getDisclosureType(o) ||
              'issue' === A.a.getDisclosureType(o))
        return p
          ? r.a.createElement(
              L.a,
              { style: c, testID: s },
              l && o
                ? r.a.createElement(
                    i.a,
                    {
                      interactiveStyles: null,
                      link: {
                        pathname: 'https://twitter.com/'.concat(l.screen_name),
                        state: { promotedTweetState: o },
                      },
                      onPress: n,
                    },
                    r.a.createElement(k.a, { promotedContent: o, withCircleIcon: u }),
                  )
                : !!o && r.a.createElement(k.a, { promotedContent: o }),
              m && o
                ? r.a.createElement(I, {
                    onPoliticalSponsorWebsiteClick: t,
                    onPromotedDisclaimerLearnMoreClick: a,
                    promotedContent: o,
                    tweet: d,
                  })
                : null,
            )
          : null
      }
    },
    dW4k: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SelfUserNotePageRedirect', function () {
          return E
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Qwev'),
        c = a('v6aA'),
        s = a('9StO'),
        d = a('vZpt'),
        u = a('L5MV'),
        p = a('MvLc'),
        m = a('rxPX'),
        h = a('0KEI'),
        f = Object(m.a)()
          .propsFromState(function () {
            return { userAlias: p.y, showAliasSelfSelect: p.v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: p.l,
              fetchShowAliasSelfSelect: p.j,
            }
          }),
        b = a('3XMw'),
        v = a.n(b),
        g = a('5FtR'),
        w = a('VS6U'),
        y = a('nymP'),
        _ = v.a.ff692d63,
        E = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchShowAliasSelfSelect,
            n = e.fetchUserAlias,
            i = e.history,
            p = e.showAliasSelfSelect,
            m = e.userAlias,
            h = o.a.useContext(c.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            f = o.a.useState(!0),
            b = r()(f, 2),
            v = b[0],
            E = b[1]
          o.a.useEffect(
            function () {
              n()
                .then(function () {
                  return E(!1)
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
                return E(!1)
              })
              .catch(t())
          }
          return o.a.createElement(w.a, {
            TabBar: u.a,
            history: i,
            primaryContent: v
              ? o.a.createElement(l.a, { size: 'large' })
              : m
              ? o.a.createElement(g.a, { to: '/i/birdwatch/u/'.concat(m) })
              : h && p
              ? o.a.createElement(s.a, { onAliasSelected: C })
              : o.a.createElement(y.a, null),
            sidebarContent: o.a.createElement(d.a, null),
            title: _,
            withTweetButton: !1,
          })
        },
        C = f(E)
      t.default = C
    },
    doI8: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
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
      var l = function (e) {
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
        l = a('B/qP'),
        c = a('MWbm'),
        s = a('j7Bv'),
        d = a('t62R'),
        u = a('rHpw'),
        p = o.a.c57760e9,
        m = o.a.c45ef9c1,
        h = o.a.g29805f5,
        f = o.a.b1056323,
        b = function () {
          return r.a.createElement(l.a, { style: v.innerIconColor })
        },
        v = u.a.create(function (e) {
          return {
            awardSection: { flexDirection: 'row', marginBottom: e.spaces.space8, alignItems: 'center' },
            goldAward: { backgroundColor: e.colors.yellow500 },
            innerIconColor: { color: e.colors.alwaysBaseGray1100 },
            ratingAward: { marginRight: e.spaces.space8 },
            ratingAwardText: { color: e.colors.text, marginRight: e.spaces.space4 },
            silverAward: { backgroundColor: e.colors.gray300 },
          }
        }),
        g = {
          Top10Author: { badgeStyle: v.goldAward, contributorText: h, badgeText: p },
          Top10Rater: { badgeStyle: v.goldAward, contributorText: h, badgeText: m },
          Top25Author: { badgeStyle: v.silverAward, contributorText: f, badgeText: p },
          Top25Rater: { badgeStyle: v.silverAward, contributorText: f, badgeText: m },
        }
      t.a = function (e) {
        var t = e.badgeType,
          a = g[t],
          n = a.badgeStyle,
          i = a.badgeText,
          o = a.contributorText
        return r.a.createElement(
          c.a,
          { style: v.awardSection },
          r.a.createElement(s.a, { Icon: b, size: 'large', style: [v.ratingAward, n] }),
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
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = a('3XMw'),
        c = a.n(l).a.ee87e71c,
        s = ((n = {}), i()(n, o.a.SelfMuteError, { toast: { text: c } }), i()(n, 'showToast', !0), n)
    },
    gdQ4: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return L
      })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('2G9S'), a('ERkP')),
        b = a.n(f),
        v = a('tRj+'),
        g = a('3XMw'),
        w = a.n(g),
        y = a('oQhu'),
        _ = a('MWbm'),
        E = a('htQn'),
        C = a('5mJL'),
        T = a('oSwX'),
        x = a('/yvb'),
        I = a('t62R'),
        S = a('rHpw'),
        k = w.a.e3a24e4b,
        A = w.a.i569ff3e,
        L = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(
                c()(e),
                '_getMemoizedBehavioralEventContext',
                Object(y.a)(function (e) {
                  return { viewType: e }
                }),
              ),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUrl,
                    a = e.onClick,
                    n = e.style,
                    r = e.to,
                    i = e.userName,
                    o = e.withButton,
                    l = e.withConversationLine,
                    c = t && i,
                    s = o ? 'add_tweet' : 'see_more',
                    d = this._getMemoizedBehavioralEventContext(s)
                  return b.a.createElement(
                    v.a,
                    { behavioralEventContext: d },
                    b.a.createElement(
                      E.a,
                      { link: r, onClick: a, style: [O.root, n] },
                      b.a.createElement(
                        C.a,
                        {
                          avatarCell: c
                            ? b.a.createElement(
                                _.a,
                                { style: [O.avatarColumn, !l && O.avatarColumnWithoutLine] },
                                l ? b.a.createElement(_.a, { style: O.conversationLine }) : null,
                                b.a.createElement(T.default, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: O.conversationConnector,
                          cellStyle: o ? O.buttonContainer : c ? O.labelWithAvatar : O.label,
                        },
                        o
                          ? b.a.createElement(
                              x.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: O.button, type: 'brandOutlined' },
                              k,
                            )
                          : b.a.createElement(I.b, { color: 'link', style: O.enlargeTouchTarget }, A),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      h()(L, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var O = S.a.create(function (e) {
        return {
          root: {
            overflow: 'hidden',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space2,
          },
          avatarColumn: { flexDirection: 'column', flexGrow: 0, alignItems: 'center', paddingBottom: e.spaces.space4 },
          avatarColumnWithoutLine: { paddingTop: e.spaces.space12 },
          conversationConnector: { alignItems: 'center', display: 'flex', position: 'relative' },
          label: { flexGrow: 1, paddingVertical: e.spaces.space4 },
          labelWithAvatar: { flexGrow: 1, justifyContent: 'center' },
          conversationLine: {
            backgroundColor: e.colors.gray200,
            flexGrow: 1,
            flexShrink: 1,
            width: e.componentDimensions.conversationLineWidth,
            marginBottom: e.spaces.space4,
          },
          buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: 'row', flexGrow: 1 },
          button: { marginVertical: e.spaces.space4 },
          enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
        }
      })
    },
    hiGS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = a('aITJ'),
        c = a('t62R'),
        s = a('h0NW'),
        d = a('feu+'),
        u = a('rHpw'),
        p = a('WtWS'),
        m = a('2Rcs'),
        h = a('sUoZ'),
        f = o.a.cc42580e,
        b = o.a.gc1a5bce,
        v = o.a.bd9e5451,
        g = o.a.j5a1d85a,
        w = o.a.b25b64d5,
        y = o.a.a4ec7003,
        _ = o.a.cb67d37a,
        E = u.a.create(function (e) {
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
          accessibilityLabel: _,
          containerStyle: E.infoItemContainer,
          items: [
            { label: f, decoration: r.a.createElement(p.a, { style: [E.icon, E.iconGreen] }) },
            { label: b, decoration: r.a.createElement(m.a, { style: E.icon }) },
            { label: v, decoration: r.a.createElement(h.a, { style: E.icon }) },
          ],
        }
      t.default = function (e) {
        var t = e.history,
          a = e.match.params.tweetId,
          n = r.a.createElement(c.b, null, y, r.a.createElement(s.a, C))
        return r.a.createElement(d.a, {
          actionLabel: g,
          contentStyle: E.content,
          graphicDisplayMode: 'none',
          headline: w,
          isFullHeightOnMobile: !0,
          onAction: function () {
            t.push('/i/birdwatch/t/'.concat(a))
          },
          onClose: function () {
            l.b.isTwitterApp() || t.replace('/i/status/'.concat(a))
          },
          subtext: n,
          withCloseButton: !l.b.isTwitterApp(),
        })
      }
    },
    j7tW: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      }),
        a.d(t, 'c', function () {
          return h
        }),
        a.d(t, 'b', function () {
          return f
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = (a('2G9S'), a('oEOe')),
        o = a('PiaM'),
        l = 'rweb/'.concat('pinnedTweets'),
        c = a('x5Pi'),
        s = a('G6rE'),
        d = a('SRyb'),
        u = i.a(l, 'PIN'),
        p = i.a(l, 'UNPIN'),
        m = function (e) {
          return function (t, a, n) {
            var l = n.api,
              p = n.featureSwitches
            return i.c(t, { params: { id: e }, request: l.Tweets.pin })(
              { actionTypes: u, context: 'ACTION_PIN_TWEET', meta: { tweetId: e } },
              function (n) {
                var i = s.e.selectLoggedInUser(a())
                if (void 0 !== i) {
                  var l = i.id_str,
                    u = i.pinned_tweet_ids_str && i.pinned_tweet_ids_str[0]
                  t(s.e.patchUser(l, { pinned_tweet_ids_str: [e] }))
                  var m = Object(d.a)(p, l, 'default'),
                    h = u
                      ? [m.removeTweets(r()({}, u, !0)), m.injectEntry(o.k({ id: u, sortIndex: u }), { atTop: !1 })]
                      : []
                  return [].concat(h, [
                    m.removeTweets(r()({}, e, !0)),
                    m.injectEntry(
                      o.k({ id: e, content: { socialContext: { generalContext: c.a } }, sortIndex: 'NOT_USED' }),
                    ),
                  ])
                }
              },
            )
          }
        },
        h = function (e) {
          return function (t, a, n) {
            var l = n.api,
              c = n.featureSwitches
            return i.c(t, { params: { id: e }, request: l.Tweets.unpin })(
              { actionTypes: p, context: 'ACTION_UNPIN_TWEET', meta: { tweetId: e } },
              function (n) {
                var i = s.e.selectLoggedInUser(a())
                if (void 0 !== i) {
                  var l = i.id_str
                  return (
                    t(s.e.patchUser(l, { pinned_tweet_ids_str: [] })),
                    [
                      Object(d.a)(c, l, 'default').removeTweets(r()({}, e, !0)),
                      Object(d.a)(c, l, 'default').injectEntry(o.k({ id: e, sortIndex: e }), { atTop: !1 }),
                    ]
                  )
                }
              },
            )
          }
        },
        f = function (e, t) {
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
        l = a('P2xQ')
      t.a = function (e) {
        var t = e.addToast,
          a = e.behavioralEventEntityToken,
          c = e.createLocalApiErrorHandler,
          s = e.dismissUserFromConversation,
          d = e.mute,
          u = e.promotedContent,
          p = e.scribeAction,
          m = e.unmute,
          h = e.user,
          f = function () {
            m(h.id_str, { promotedContent: u }).then(function () {
              t({ text: Object(l.d)(h.screen_name), behavioralEventEntityToken: a })
            }, c(o.a)),
              p({ element: 'unmute' })
          },
          b = Object(l.a)(
            h,
            function () {
              d(h.id_str, { promotedContent: u }).then(function () {
                s && s({ userId: h.id_str, feedbackKeys: ['UnfollowEntity'] }),
                  t({
                    action: { label: i.a, onAction: f, behavioralEventViewType: 'unmute_person' },
                    behavioralEventEntityToken: a,
                    text: Object(l.b)(h.screen_name),
                  })
              }, c(r.a)),
                p({ element: 'mute' })
            },
            f,
          ),
          v = b.Icon,
          g = b.behavioralEventContext,
          w = b.onClick
        return { behavioralEventContext: g, Icon: v, text: b.text, onClick: w, shortcutKey: n.e.mute }
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
        l = a('v6aA'),
        c = a('9StO'),
        s = a('eqZz'),
        d = a('97Jx'),
        u = a.n(d),
        p = a('m3Bd'),
        m = a.n(p),
        h = a('ZD0R'),
        f = a('xSpP'),
        b = a('rxPX'),
        v = function (e, t) {
          var a = t.noteId
          return f.a.select(e, a)
        },
        g = Object(b.a)().propsFromState(function () {
          return { note: v }
        }),
        w = ['note', 'noteId'],
        y = g(function (e) {
          var t = e.note,
            a = (e.noteId, m()(e, w))
          return t ? o.a.createElement(h.b, u()({ note: t }, a)) : null
        }),
        _ = a('vZpt'),
        E = a('L5MV'),
        C = (a('KqXw'), a('WNMA'), a('MvLc')),
        T = a('yiKp'),
        x = a.n(T),
        I = a('wAC9'),
        S = a('hqKg'),
        k = a('0KEI'),
        A = function (e, t) {
          return t.match.params.alias
        },
        L = function (e, t) {
          return Object(S.createSelector)(A, function (e) {
            return e
              ? (function (e) {
                  return Object(I.a)({
                    contextSuffix: 'BIRDWATCH_CONTRIBUTOR_NOTES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Birdwatch.fetchBirdwatchContributorNotesSlice
                    },
                    getEndpointParams: function (t) {
                      return x()(x()({}, t), {}, { alias: e })
                    },
                    sliceKey: 'birdwatchContributorNotesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        O = function (e, t) {
          return C.p(e, A(0, t))
        },
        P = function (e, t) {
          return C.o(e, A(0, t))
        },
        R = function (e, t) {
          return C.v(e)
        },
        B = Object(b.a)()
          .propsFromState(function () {
            return {
              alias: A,
              notesSlice: L(),
              ratingsData: O,
              contributorBadgeData: P,
              showAliasSelfSelect: R,
              userAlias: C.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchBirdwatchProfile: C.g,
              fetchShowAliasSelfSelect: C.j,
              fetchUserAlias: C.l,
            }
          }),
        M = a('W6+M'),
        D = a('BcsE'),
        F = a('yoO3'),
        N = a('7JQg'),
        H = a('VS6U'),
        U = a('FS1z'),
        j = a('aITJ'),
        z = a('nymP'),
        W = a('MWbm'),
        V = a('t62R'),
        K = a('FIs5'),
        q = a('MtXG'),
        G = a('0yYu'),
        Q = a('/yvb'),
        X = a('j7Bv'),
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
        le = ee.a.fe27c1e1,
        ce = ee.a.b8b34f54,
        se = ee.a.fd284b08,
        de = ee.a.ff746f63,
        ue = ee.a.hc19704b,
        pe = ee.a.j44125ee,
        me = ee.a.da55067b,
        he = o.a.createElement(
          ee.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.a.createElement(V.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, ee.a.j1a30557),
        ),
        fe = { label: ue, preferredHorizontalOrientation: 'start' },
        be = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        ve = function (e) {
          var t = o.a.useContext(l.a).featureSwitches,
            a = e.alias,
            n = e.contributorBadgeData,
            i = e.createLocalApiErrorHandler,
            d = e.fetchBirdwatchProfile,
            u = e.fetchShowAliasSelfSelect,
            p = e.fetchUserAlias,
            m = e.history,
            h = e.notesSlice,
            f = e.ratingsData,
            b = e.showAliasSelfSelect,
            v = e.userAlias,
            g = o.a.useState(b),
            w = r()(g, 2),
            C = w[0],
            T = w[1],
            x = v === a
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
                T(b)
              },
              [b],
            )
          var I,
            S,
            k,
            A,
            L,
            O,
            P,
            R,
            B,
            $ = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            ue = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            ve = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            we = o.a.useMemo(
              function () {
                return { page: 'birdwatch', section: $ ? 'user_notes_participant' : 'user_notes' }
              },
              [$],
            ),
            ye = o.a.createElement(K.a, { header: pe, message: me }),
            _e = o.a.createElement(z.a, null),
            Ee = function (e) {
              return o.a.createElement(
                W.a,
                { key: e },
                o.a.createElement(y, { noteId: e, showPivot: x, showRating: !1, showTweet: !0 }),
                o.a.createElement(G.a, null),
              )
            },
            Ce = function () {
              return x ? _e : ye
            },
            Te = x ? re : ie,
            xe = ve && C && x,
            Ie = ve ? void 0 : '@'.concat(a)
          return o.a.createElement(
            N.c,
            { namespace: we },
            o.a.createElement(
              F.a,
              null,
              o.a.createElement(H.a, {
                TabBar: E.a,
                backLocation: '/i/birdwatch',
                history: m,
                primaryContent: xe
                  ? o.a.createElement(c.a, {
                      onAliasSelected: function (e) {
                        m.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((S = null == f ? void 0 : f.helpful),
                    (k = null == f ? void 0 : f.somewhatHelpful),
                    (A = null == f ? void 0 : f.notHelpful),
                    (L = void 0 !== S),
                    (O = L && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (P = n || []),
                    (R = o.a.createElement(ae.a, { style: ge.badgeStandingIcon })),
                    (B = o.a.createElement(Q.a, { hoverLabel: fe, icon: R, link: be, style: ge.badgeStandingButton })),
                    o.a.createElement(
                      W.a,
                      null,
                      j.b.isTwitterApp() &&
                        o.a.createElement(
                          W.a,
                          { style: ge.birdwatchProfileContainer },
                          o.a.createElement(
                            V.b,
                            { numberOfLines: 1, size: 'headline1', style: ge.birdwatchProfileTitle, weight: 'bold' },
                            Te,
                          ),
                          o.a.createElement(G.a, null),
                        ),
                      ve &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(X.a, {
                            Icon: ne.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ge.genericBirdwatchProfileIcon,
                          }),
                          o.a.createElement(Z.b, { style: ge.profileText, text: Object(M.a)(a) }),
                          o.a.createElement(V.b, { color: 'gray700', style: ge.birdwatchAliasDisclaimerText }, he),
                          o.a.createElement(G.a, null),
                        ),
                      O &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(Z.b, { rightControl: B, text: se }),
                          o.a.createElement(
                            W.a,
                            { style: ge.awardsContainer },
                            P.length > 0
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
                                    P &&
                                      P.map(function (e, t) {
                                        return o.a.createElement(s.a, { badgeType: e, key: t })
                                      }),
                                  )
                                })
                              : o.a.createElement(
                                  W.a,
                                  { style: ge.awardSection },
                                  o.a.createElement(X.a, {
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
                        x &&
                        o.a.createElement(
                          W.a,
                          { style: ge.ratingsContainer },
                          o.a.createElement(V.b, { style: ge.ratingsReceived, weight: 'bold' }, ce),
                          o.a.createElement(
                            W.a,
                            { style: ge.ratingNumbers },
                            Object(D.a)(S)
                              ? o.a.createElement(
                                  W.a,
                                  { style: ge.helpfulStats },
                                  (function (e) {
                                    return o.a.createElement(
                                      q.a,
                                      null,
                                      o.a.createElement(
                                        ee.a.I18NFormatMessage,
                                        { $i18n: 'g6ea1d54' },
                                        o.a.createElement(q.a.Value, null, ee.a.b5eb23f9({ count: e })),
                                        o.a.createElement(q.a.Label, null, ee.a.ebecb73c),
                                      ),
                                    )
                                  })(S),
                                )
                              : null,
                            ue && Object(D.a)(k)
                              ? o.a.createElement(
                                  W.a,
                                  { style: ge.helpfulStats },
                                  (function (e) {
                                    return o.a.createElement(
                                      q.a,
                                      null,
                                      o.a.createElement(
                                        ee.a.I18NFormatMessage,
                                        { $i18n: 'b93058db' },
                                        o.a.createElement(q.a.Value, null, ee.a.i1f57cc4({ count: e })),
                                        o.a.createElement(q.a.Label, null, ee.a.e8907cd9),
                                      ),
                                    )
                                  })(k),
                                )
                              : null,
                            Object(D.a)(A)
                              ? ((I = A),
                                o.a.createElement(
                                  q.a,
                                  null,
                                  o.a.createElement(
                                    ee.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    o.a.createElement(q.a.Value, null, ee.a.d551bc31({ count: I })),
                                    o.a.createElement(q.a.Label, null, ee.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      h
                        ? o.a.createElement(
                            o.a.Fragment,
                            null,
                            o.a.createElement(Z.b, { text: x ? oe : le }),
                            o.a.createElement(U.a, { module: h, noItemsRenderer: Ce, renderer: Ee }),
                          )
                        : null,
                    )),
                sidebarContent: o.a.createElement(_.a, null),
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
        we = B(ve)
      t.default = we
    },
    nIpi: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchDownloadDataScreen', function () {
          return D
        })
      a('2G9S'), a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('vZpt'),
        o = a('L5MV'),
        l = a('MvLc'),
        c = a('hqKg'),
        s = a('rxPX'),
        d = a('0KEI'),
        u = function (e, t) {
          return l.u(e)
        },
        p = Object(s.a)()
          .propsFromState(function () {
            return {
              publicData: Object(c.createSelector)(u, function (e) {
                return e
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchPublicData: l.i,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'download_data' }),
        m = a('89Im'),
        h = a('tI3i'),
        f = a.n(h),
        b = a('yoO3'),
        v = a('VS6U'),
        g = a('MWbm'),
        w = a('t62R'),
        y = a('/yvb'),
        _ = a('0yYu'),
        E = a('6vad'),
        C = a('rHpw'),
        T = a('3XMw'),
        x = a.n(T),
        I = x.a.cb1adfa0,
        S = x.a.e72533f5,
        k = x.a.g652cada,
        A = x.a.g4d71b5e,
        L = x.a.b8a27fe1,
        O = x.a.j1c99e0f,
        P = x.a.i6f69313,
        R = x.a.h786cd79,
        B = x.a.d0fe8052,
        M = r.a.createElement(
          w.b,
          { color: 'gray700', size: 'subtext2' },
          r.a.createElement(
            x.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            r.a.createElement(
              w.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              x.a.g0cacb73,
            ),
          ),
        ),
        D = function (e) {
          var t,
            a,
            n,
            l = e.analytics,
            c = e.createLocalApiErrorHandler,
            s = e.fetchPublicData,
            d = e.history,
            u = e.publicData
          r.a.useEffect(
            function () {
              s().catch(c())
            },
            [c, s],
          )
          var p,
            h = null == u || null === (t = u.notes) || void 0 === t ? void 0 : t.urls,
            C = null == h ? void 0 : h.length,
            T = null == u || null === (a = u.ratings) || void 0 === a ? void 0 : a.urls,
            D = null == T ? void 0 : T.length,
            N = null == u || null === (n = u.notes) || void 0 === n ? void 0 : n.created_at,
            H = function (e, t, a, n) {
              return (
                f()(void 0 !== a, 'totalFiles must be defined'),
                r.a.createElement(
                  g.a,
                  { key: t, style: [F.fileSection, t > 1 && F.fileSectionNotFirst] },
                  r.a.createElement(
                    w.b,
                    null,
                    r.a.createElement(x.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: a }),
                  ),
                  r.a.createElement(y.a, {
                    icon: r.a.createElement(m.a, null),
                    link: e,
                    onPress:
                      ((i = ''.concat(n, '_').concat(t)),
                      function () {
                        l.scribeAction('click_'.concat(i))
                      }),
                    type: 'brandText',
                  }),
                )
              )
              var i
            },
            U = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                g.a,
                { style: F.headerWrapper },
                r.a.createElement(w.b, { size: 'title4', style: F.textSection, weight: 'heavy' }, S),
                r.a.createElement(w.b, { color: 'gray700', style: F.textSection }, k),
                r.a.createElement(
                  w.b,
                  { color: 'gray700' },
                  A,
                  r.a.createElement(
                    w.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    L,
                  ),
                  '.',
                ),
              ),
              r.a.createElement(_.a, null),
              r.a.createElement(E.b, { text: O }),
              h && (null == h ? void 0 : h.length) > 0
                ? h.map(function (e, t) {
                    return H(e, t + 1, C, 'notes')
                  })
                : r.a.createElement(w.b, { color: 'gray700', style: F.emptyData }, R),
              r.a.createElement(_.a, null),
              r.a.createElement(E.b, { text: P }),
              T && (null == T ? void 0 : T.length) > 0
                ? T.map(function (e, t) {
                    return H(e, t + 1, D, 'ratings')
                  })
                : r.a.createElement(w.b, { color: 'gray700', style: F.emptyData }, B),
              r.a.createElement(_.a, null),
              r.a.createElement(
                g.a,
                { style: F.footerText },
                r.a.createElement(
                  w.b,
                  { color: 'gray700', style: F.dateGenerated },
                  r.a.createElement(x.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((p = N),
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
                M,
              ),
            )
          return r.a.createElement(
            b.a,
            null,
            r.a.createElement(v.a, {
              TabBar: o.a,
              history: d,
              primaryContent: U,
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
        N = p(D)
      t.default = N
    },
    nymP: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('v6aA'),
        o = a('FIs5'),
        l = a('3XMw'),
        c = a.n(l),
        s = { external: !0, pathname: 'https://twitter.github.io/birdwatch/writing-notes' },
        d = c.a.i859a9d3,
        u = c.a.ff3e0be2,
        p = c.a.e9f1fbcb,
        m = c.a.db08295d,
        h = c.a.f4d67927,
        f = c.a.eae6767a
      t.a = function () {
        var e = r.a.useContext(i.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return r.a.createElement(o.a, {
          buttonLink: e ? s : '/i/flow/join-birdwatch',
          buttonText: e ? d : u,
          header: e ? p : m,
          message: e ? f : h,
        })
      }
    },
    owBv: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('lTXM'),
        o = a('m3Bd'),
        l = a.n(o),
        c = (a('z84I'), a('ho0z'), a('YeIG')),
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
                    scribeConfig: Object(c.a)(e.scribeConfig) ? void 0 : r()({}, e.scribeConfig),
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
                  o = l()(a, u),
                  c = n && Object(d.b)(e, n),
                  s = Object(d.a)(e, i)
                return r()(r()({}, o), {}, { topicId: s, facepile: c })
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
        m = a('WpDa'),
        h = a('IcAo')
      t.a = function (e) {
        var t,
          a,
          n =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(m.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (a = t.initialTimeline) &&
                void 0 !== a &&
                a.timeline.timeline
              ? Object(m.a)(t.initialTimeline.timeline.timeline)
              : Object(m.a)(i.c),
          o = p(e),
          l = o.globalObjects,
          c = o.pageConfiguration
        return r()(r()({}, n), {}, { globalObjects: Object(h.a)(l, n.globalObjects), pageConfiguration: c })
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
        l = a('VrFO'),
        c = a.n(l),
        s = a('Y9Ll'),
        d = a.n(s),
        u = a('1Pcy'),
        p = a.n(u),
        m = a('5Yy7'),
        h = a.n(m),
        f = a('2VqO'),
        b = a.n(f),
        v = a('KEM+'),
        g = a.n(v),
        w = (a('2G9S'), a('ERkP')),
        y = a.n(w),
        _ = a('38/B'),
        E = a('t62R'),
        C = a('/yvb'),
        T = a('piX5'),
        x = a('3XMw'),
        I = a.n(x),
        S = a('tI3i'),
        k = a.n(S),
        A = a('oQhu'),
        L = a('rHpw'),
        O = a('aITJ'),
        P = a('MWbm'),
        R = a('n5fo'),
        B = a('5emT'),
        M = a('Oib4'),
        D = a('WtWS'),
        F = a('ioan'),
        N = [
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
        U = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H
          return t(e)
        },
        j = I.a.de540c32,
        z = I.a.b4abfdb3,
        W = (function (e) {
          h()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            c()(this, a),
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
                Object(A.a)(function (e) {
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
                return U(e, n.props.calculateLength)
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
                  l =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (r = a.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === c
              }),
              g()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              g()(p()(n), '_handleBlur', function () {
                var e,
                  t = n.props.onBlur,
                  a = (null === (e = n._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  r = n._calculateLength(a),
                  i = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t()
              }),
              g()(p()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  r = e.currentTarget.value,
                  i = n._calculateLength(r),
                  o = n._getActualCount(r),
                  l = n._getAdjustedMaxLength()
                void 0 !== l && r.length > l && a.length < r.length
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
                  l = 'string' == typeof t
                k()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  k()(!(a && r && r > a), 'Max length should be equal or greater than valid length.'),
                  k()(
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
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === r && a === o && !!n === !!l && ('string' == typeof i) === ('string' == typeof s)) ||
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
                      l = this._isFormInvalid()
                    return y.a.createElement(
                      P.a,
                      { style: [K.root, i] },
                      y.a.createElement(
                        P.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            T.a.border,
                            K.textInputFormStyle,
                            l && T.a.invalidBorderColor,
                            o && l && T.a.focusedBorderInvalid,
                            o && !l && T.a.focusedBorderValid,
                            !a && T.a.disabled,
                          ],
                        },
                        y.a.createElement(
                          P.a,
                          { style: K.textInputFormWrapper },
                          y.a.createElement(
                            P.a,
                            { style: K.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      y.a.createElement(
                        P.a,
                        { style: [K.sidePadding, K.underTextInputForm] },
                        y.a.createElement(
                          P.a,
                          { style: K.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          l && n ? this._renderErrorText() : null,
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
                      E.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          K.textInputHeaderItem,
                          n && K.placeholderText,
                          !_.a.reducedMotionEnabled && K.transition,
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
                      i = (e.style, e.type, e.validLength, o()(e, N))
                    return y.a.createElement(
                      P.a,
                      { style: V.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      y.a.createElement(
                        E.b,
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
                          P.a,
                          { style: K.passwordVisibilityIconContainer },
                          y.a.createElement(C.a, {
                            accessibilityLabel: n ? z : j,
                            focusable: !0,
                            hoverLabel: { label: n ? z : j },
                            icon: n ? y.a.createElement(R.a, null) : y.a.createElement(B.a, null),
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
                      P.a,
                      { accessibilityLiveRegion: 'polite' },
                      y.a.createElement(
                        E.b,
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
                      P.a,
                      { accessibilityLiveRegion: 'assertive' },
                      y.a.createElement(
                        E.b,
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
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [K.textInputHeaderItem, K.displayCount] },
                      y.a.createElement(
                        E.b,
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
                      ? y.a.createElement(M.a, { style: [K.validationIcon, T.a.invalidColor] })
                      : y.a.createElement(D.a, { style: [K.validationIcon, T.a.validColor] })
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
                      r = 'string' == typeof n ? U(n, a) : 0
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
    qbku: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        l = a('m3Bd'),
        c = a.n(l),
        s = (a('hBvt'), a('ERkP')),
        d = a.n(s),
        u = a('rxPX'),
        p = Object(u.a)().withAnalytics({ element: 'social_proof' }),
        m = a('aTAq'),
        h = a('Nqmc'),
        f = a('x5Pi'),
        b = ['analytics', 'link'],
        v = p(function (e) {
          var t = d.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var a = e.analytics,
            n = e.link,
            i = c()(e, b),
            l =
              n && !Object(m.a)(n)
                ? o()(
                    o()({}, n),
                    {},
                    {
                      state: o()(
                        o()({}, n.state),
                        {},
                        {
                          referringScribeNamespace: o()(o()({}, a.contextualScribeNamespace), {}, { action: 'click' }),
                        },
                      ),
                    },
                  )
                : n
          return d.a.createElement(
            h.a,
            r()({}, i, {
              link: l,
              onClick: function () {
                var t = e.analytics,
                  a = e.onClick
                t.scribeAction('click'), a && a()
              },
            }),
          )
        })
      t.a = v
    },
    rC8y: function (e, t, a) {
      'use strict'
      a('hBvt')
      var n = a('SV7d'),
        r = a('ERkP'),
        i = a.n(r),
        o = a('t62R'),
        l = a('htQn'),
        c = a('rHpw'),
        s = { viewType: 'module_footer' }
      var d = c.a.create(function (e) {
        return {
          root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          withBottomRadius: {
            borderBottomLeftRadius: e.borderRadii.xLarge,
            borderBottomRightRadius: e.borderRadii.xLarge,
          },
        }
      })
      t.a = function (e) {
        var t = e.align,
          a = e.link,
          r = e.onPress,
          c = e.text,
          u = e.weight,
          p = e.withBottomRadius,
          m = e.withDarkerInteractiveBackground
        return i.a.createElement(
          n.a,
          { behavioralEventContext: s },
          i.a.createElement(
            l.a,
            { link: a, onPress: r, style: [d.root, p && d.withBottomRadius], withDarkerInteractiveBackground: m },
            i.a.createElement(o.b, { align: t, color: 'primary', weight: u }, c),
          ),
        )
      }
    },
    sUoZ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    uw5z: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return B
        })
      var n,
        r = a('ERkP'),
        i = a.n(r),
        o = a('v6aA'),
        l = a('vZpt'),
        c = a('L5MV'),
        s = (a('KqXw'), a('WNMA'), a('owBv')),
        d = a('ZNT5'),
        u = a('hqKg'),
        p = a('rxPX'),
        m = function (e, t) {
          var a, n
          return (
            (null === (a = t.match) || void 0 === a || null === (n = a.params) || void 0 === n ? void 0 : n.tabId) ||
            void 0
          )
        },
        h = function () {
          return Object(u.createSelector)(m, function (e) {
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
        f = Object(p.a)().propsFromState(function () {
          return { module: h(), selectedTabId: m }
        }),
        b = a('yiKp'),
        v = a.n(b),
        g = a('KEM+'),
        w = a.n(g),
        y = a('8UdT'),
        _ = a('ezF+'),
        E =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          {
            loader: function () {
              return Promise.all([a.e(0), a.e(229)]).then(a.bind(null, 'SdtT'))
            },
            loaderKey: 'pivotLabelLoader',
            strategy: a('XBtf').a.Critical,
          }),
        C = _.e(E),
        T = a('S/Qv'),
        x = a('5Y9N'),
        I = a('Yy//'),
        S =
          ((n = {}),
          w()(n, y.b.Label, C),
          w()(n, y.b.Message, Object(T.a)({})),
          w()(n, y.b.Tweet, Object(I.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          n),
        k = v()(v()({}, Object(x.a)({})), S),
        A = a('3XMw'),
        L = a.n(A),
        O = a('UZjl'),
        P = L.a.ha8209bb,
        R = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        B = function (e) {
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
            TabBar: c.a,
            entryConfiguration: k,
            getTabLink: R,
            history: a,
            initialPageNamespace: d,
            module: n,
            selectedTabId: r,
            sidebarContent: i.a.createElement(l.a, null),
            timelinePrefix: 'birdwatch-',
            title: P,
            withTweetButton: !1,
          })
        },
        M = f(B)
      t.default = M
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
          l = i.urtEndpointOptions || {},
          c = l.cacheId,
          s = l.requestParams
        return Object(r.b)({
          timelineId: c || ''.concat(a).concat(Object(n.a)(i)),
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
        l = (a('uFXj'), a('ERkP')),
        c = a.n(l),
        s = a('v6aA'),
        d = a('G6rE'),
        u = a('rxPX'),
        p = a('0KEI'),
        m = function (e, t) {
          return d.e.select(e, '1319036828964454402')
        },
        h = Object(u.a)()
          .propsFromState(function () {
            return { birdwatchAccount: m }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: d.e.fetchManyIfNeeded,
            }
          }),
        f = a('FQwk'),
        b = a('MWbm'),
        v = a('t62R'),
        g = a('6vad'),
        w = a('/yvb'),
        y = a('h0NW'),
        _ = a('rC8y'),
        E = a('rHpw'),
        C = a('3XMw'),
        T = a.n(C),
        x = a('yygM'),
        I = a('QDet'),
        S = a('wz7L'),
        k = a('88ay'),
        A = T.a.de962615,
        L = T.a.cbfa448b,
        O = T.a.b171d7c4,
        P = '1319036828964454402',
        R = T.a.ab23a972,
        B = T.a.gfa725ae,
        M = T.a.eac7b6ab,
        D = T.a.b0381cfb,
        F = T.a.f0addddc,
        N = T.a.c68f3bcf,
        H = T.a.dfb1f498,
        U = c.a.createElement(
          v.b,
          null,
          c.a.createElement(
            T.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            c.a.createElement(
              v.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              T.a.b8a36128,
            ),
          ),
        ),
        j = E.a.create(function (e) {
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
        z = h(function (e) {
          var t = e.birdwatchAccount,
            a = e.createLocalApiErrorHandler,
            n = e.fetchUsersIfNeeded,
            i = c.a.useContext(s.a).featureSwitches,
            l = c.a.useState(null == t ? void 0 : t.following),
            d = o()(l, 2),
            u = d[0],
            p = d[1],
            m = i.isTrue('responsive_web_birdwatch_note_writing_enabled')
          c.a.useEffect(
            function () {
              n([P])
                .then(function (e) {
                  var t
                  e && p(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(a())
            },
            [a, n],
          )
          var h = c.a.createElement(
              b.a,
              { style: j.module },
              c.a.createElement(g.b, { text: A }),
              c.a.createElement(
                b.a,
                { style: [j.moduleBody, j.row] },
                c.a.createElement(v.b, { color: 'gray700', style: j.text }, L),
                c.a.createElement(
                  w.a,
                  { accessibilityLabel: O, link: '/i/flow/join-birdwatch', type: 'brandFilled' },
                  O,
                ),
              ),
            ),
            E = c.a.createElement(
              b.a,
              { style: j.module },
              c.a.createElement(g.b, { text: R }),
              c.a.createElement(
                b.a,
                null,
                c.a.createElement(k.b, { decoration: k.e, displayMode: 'UserCompact', userId: P, withFollowsYou: !0 }),
              ),
            ),
            C = function (e) {
              return c.a.createElement(b.a, { style: j.valueItem }, c.a.createElement(v.b, { color: 'gray700' }, e))
            },
            T = {
              accessibilityLabel: B,
              items: [
                { label: '', decoration: c.a.createElement(x.a, { style: j.valueIcon }), description: C(M) },
                { label: '', decoration: c.a.createElement(I.a, { style: j.valueIcon }), description: C(D) },
                { label: '', decoration: c.a.createElement(S.a, { style: j.valueIcon }), description: C(F) },
              ],
            },
            z = c.a.createElement(
              b.a,
              { style: j.module },
              c.a.createElement(g.b, { text: B }),
              c.a.createElement(
                b.a,
                { style: j.valuesGroup },
                c.a.createElement(y.a, r()({}, T, { containerStyle: j.infoItemContainer })),
              ),
              c.a.createElement(
                b.a,
                { style: j.footer },
                c.a.createElement(_.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: N,
                  withBottomRadius: !0,
                }),
              ),
            ),
            W = c.a.createElement(
              b.a,
              { style: j.module },
              c.a.createElement(g.b, { text: H }),
              c.a.createElement(b.a, { style: j.moduleBody }, U),
            )
          return c.a.createElement(
            b.a,
            { accessibilityRole: 'complementary', style: j.root },
            m ? null : h,
            u ? null : E,
            z,
            W,
            c.a.createElement(
              b.a,
              { style: [j.module, j.transparentModule] },
              c.a.createElement(f.a, { textColor: 'gray700', withOverflow: !0 }),
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
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        return c
      })
      var n = a('oEOe'),
        r = a('MvLc'),
        i = a('3zvM'),
        o = a('lMB6'),
        l = Object(i.e)({ namespace: 'birdwatchContributorNotes' }),
        c = function (e) {
          return function (t, a, i) {
            var o = i.api
            return n.b(t, { request: o.Birdwatch.deleteNote, params: { note_id: e } })(
              { actionTypes: l.actionTypes.OPTIMISTIC_UPDATE, context: 'DELETE_NOTE' },
              function (t) {
                if (t) return [l.deleteOne(e), Object(r.d)(e)]
              },
            )
          }
        }
      t.a = o.a.register(l)
    },
    xZXe: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return We
      })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        l = a('RhWx'),
        c = a.n(l),
        s = a('VrFO'),
        d = a.n(s),
        u = a('Y9Ll'),
        p = a.n(u),
        m = a('1Pcy'),
        h = a.n(m),
        f = a('5Yy7'),
        b = a.n(f),
        v = a('2VqO'),
        g = a.n(v),
        w = a('KEM+'),
        y = a.n(w),
        _ = a('yiKp'),
        E = a.n(_),
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
        x = a('ZyXd'),
        I = a('TZwD'),
        S = (a('ho0z'), a('RqPI')),
        k = a('1YZw'),
        A = a('Ig1G'),
        L = a('6rlp'),
        O = a('0pUJ'),
        P = a('Fmkq'),
        R = a('j7tW'),
        B = a('Zejx'),
        M = a('XOJV'),
        D = a('D5n3'),
        F = a('G6rE'),
        N = a('jL08'),
        H = a('eSoz'),
        U = a('rxPX'),
        j = a('0KEI'),
        z = a('EGrD'),
        W = a('x5Pi'),
        V = a('P1r1'),
        K = function (e, t) {
          var a = t.tweetId
          return Object(R.b)(e, a)
        },
        q = function (e, t) {
          return t.tweetId
        },
        G = function (e, t) {
          var a = t.urtAdvertiser,
            n = t.urtPromotedContent
          if (e && n) {
            var r = e.promoted_content
            return E()(
              E()({}, e),
              {},
              {
                promoted_content: E()(
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
        Q = function (e, t) {
          return t.socialContext
        },
        X = function (e, t) {
          var a = t.socialContext,
            n = a && a.topicContext
          return n ? B.a.select(e, n.topicId) : void 0
        },
        Z = function (e, t) {
          var a = t.tweetId,
            n = a && M.a.select(e, a)
          return n ? Object(H.g)(e, n) : void 0
        },
        J = function (e, t) {
          var a = M.a.createHydratedTweetSelector(q)(e, t),
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
        te = Object(U.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: z.c,
              articleDomains: N.b,
              community: Z,
              contextTweet: M.a.createHydratedTweetSelector(ee),
              displaySensitiveMedia: V.k,
              explicitSocialContext: Q,
              isNsfwUser: V.t,
              isPinned: K,
              loggedInUser: F.e.selectLoggedInUser,
              quoteTweetCommunity: J,
              topic: X,
              tweet: M.a.createHydratedTweetSelector(q),
              urtAdvertiser: $,
              urtPromotedContent: Y,
              userCountry: S.z,
              userLanguage: S.p,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n,
              r = e.adFreeArticleDomains,
              i = e.articleDomains,
              o = e.community,
              l = e.contextTweet,
              c = e.displaySensitiveMedia,
              s = e.explicitSocialContext,
              d = e.isNsfwUser,
              u = e.isPinned,
              p = e.loggedInUser,
              m = e.quoteTweetCommunity,
              h = e.topic,
              f = e.tweet,
              b = e.urtAdvertiser,
              v = e.urtPromotedContent,
              g = e.userCountry,
              w = e.userLanguage,
              y = f && Object(W.f)(f, null == p ? void 0 : p.id_str),
              _ =
                null == f ||
                null === (t = f.card) ||
                void 0 === t ||
                null === (a = t.binding_values) ||
                void 0 === a ||
                null === (n = a.domain) ||
                void 0 === n
                  ? void 0
                  : n.string_value,
              E = Object(N.a)(i, _),
              C = null == f ? void 0 : f.quoted_status,
              T = C ? Object(W.f)(C, null == p ? void 0 : p.id_str, m) : void 0,
              x = T && Object(W.e)(T),
              I = Object(A.c)(null == o ? void 0 : o.role)
            return {
              adFreeArticleDomains: r,
              contextTweet: l,
              displaySensitiveMedia: c,
              isCardArticle: E,
              isNsfwUser: d,
              isPinned: u,
              loggedInUser: p,
              promotedContentAdvertiser: b || void 0,
              quoteTweetSocialContextProps: x,
              socialContext: s || y,
              topic: h,
              tweet: G(f, { urtPromotedContent: v, urtAdvertiser: b }),
              userCountry: g,
              userLanguage: w,
              withCommunityModerationAuthority: I,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: k.b,
              block: F.e.block,
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_CONTAINER_CONTEXT',
              ),
              log: L.a,
              fetchAdFreeToken: z.a,
              fetchCommunityIfNeeded: H.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: B.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: z.b,
              mute: O.a,
              onUnretweet: D.a,
              richScribeAction: P.richScribeAction,
              setArticlesVisited: N.e,
              undoTopicNotInterested: B.a.undoNotInterested,
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
        le = a('hACr'),
        ce = a('jQy5'),
        se = a('3IPs'),
        de = a('Rp9C'),
        ue = a('uArA'),
        pe = a('X04g'),
        me = a('xM7j'),
        he = a('BLtI'),
        fe = a('3zeG'),
        be = a('IO7v'),
        ve = a('Irs7'),
        ge = a('MWbm'),
        we = a('v6aA'),
        ye = a('E0cF'),
        _e = a('OIC0'),
        Ee = a('+pKb'),
        Ce = a('/Ikv'),
        Te = a('Z6aJ'),
        xe = a('lHOd'),
        Ie = a('7JQg'),
        Se = a('cFuS'),
        ke = a('24HD'),
        Ae = a('4hQ9'),
        Le = a('fz3c'),
        Oe = a('gZV8'),
        Pe = (function (e) {
          b()(a, e)
          var t = g()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_handlePlacementChange', function (t) {
                var a = e.props,
                  n = a.id,
                  r = a.onFullyVisible,
                  i = a.onVisible
                e._lastVisibleId !== n && t.verticalOverlap() >= 1 && ((e._lastVisibleId = n), i(t))
                var o = t.visibleFraction() >= Oe.c,
                  l = t.item.height > t.viewport.height,
                  c = t.verticalOverlap() === t.viewport.height || (l && t.visibleFraction() >= Oe.d)
                e._lastFullyVisibleId !== n && (o || c) && ((e._lastFullyVisibleId = n), r && r(t))
              }),
              y()(h()(e), '_handleLayout', function (t) {
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
                    Oe.e,
                    { key: a, onLayout: this._handleLayout, onPlacementChange: this._handlePlacementChange },
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(T.a.PureComponent),
        Re = a('fs1G'),
        Be = a('oQhu'),
        Me = a('mN6z'),
        De = a('Cqiq'),
        Fe = ie.a.f277e949,
        Ne = ie.a.e4c6c309,
        He = (function (e) {
          b()(a, e)
          var t = g()(a)
          function a(e, n) {
            var r, i
            d()(this, a),
              (i = t.call(this, e, n)),
              y()(h()(i), '_shouldLogPromotedImpression', je.bind(null, i.context.featureSwitches)),
              y()(h()(i), '_isProbablyRemovedByAdBlocker', Ue.bind(null, i.context.featureSwitches)),
              y()(
                h()(i),
                '_isArticleNudgeEnabled',
                i.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              y()(
                h()(i),
                '_isCompatibilityScribeEnabled',
                i.context.featureSwitches.isTrue('responsive_web_extension_compatibility_scribe'),
              ),
              y()(h()(i), '_isCommunitiesEnabled', i.context.featureSwitches.isTrue('c9s_enabled')),
              y()(
                h()(i),
                '_hasClaimsForAdFreeArticles',
                null === (r = i.context.userClaims) || void 0 === r
                  ? void 0
                  : r.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              y()(h()(i), '_renderBlockOrUnblockConfirmationSheet', function () {
                var e = i.props.tweet.user
                return Object(ke.j)({
                  confirmation: Object(ke.h)(e),
                  onClose: i._handleBlockOrUnblockConfirmClose,
                  handleConfirm: i._handleBlockOrUnblockUserConfirm,
                })
              }),
              y()(h()(i), '_handleShowReportedTweet', function () {
                i.setState({ displayReported: !0, enableKeyboardShortcuts: !1 })
              }),
              y()(h()(i), '_handleUnretweet', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.onUnretweet,
                  n = e.tweet
                a(ye.a.getOriginalTweet(n).id_str, { promotedContent: n.promoted_content }).catch(t(be.a))
              }),
              y()(h()(i), '_getShortcutKeyHandlers', function () {
                var e = i._getMuteOrUnmuteAction(),
                  t = e.onClick,
                  a = e.shortcutKey,
                  n = i._getBlockOrUnblockAction().shortcutKey,
                  r = i.context.loggedInUserId === i.props.tweet.user.id_str
                return E()(E()({}, a && y()({}, a, t)), n && !r && y()({}, n, i._handleBlockOrUnblockConfirmOpen))
              }),
              y()(h()(i), '_handleBlockOrUnblockConfirmOpen', function () {
                i.setState({ showBlockOrUnblockConfirmation: !0 })
              }),
              y()(h()(i), '_handleBlockOrUnblockConfirmClose', function () {
                i.setState({ showBlockOrUnblockConfirmation: !1 })
              }),
              y()(h()(i), '_handleBlockOrUnblockUserConfirm', function () {
                var e = i._getBlockOrUnblockAction().onClick
                i._handleBlockOrUnblockConfirmClose(), e && e()
              }),
              y()(h()(i), '_getBaseTweetProps', function () {
                var e = i.props,
                  t = e.contextualClientEventInfo,
                  a = e.conversationTreeMetadata,
                  n = e.feedbackItems,
                  r = e.focalTweetId,
                  o = e.forwardPivotInfo,
                  l = e.isNsfwUser,
                  c = e.isPinned,
                  s = e.onTweetDismiss,
                  d = e.ruxContext,
                  u = e.saveAsRecentSearch,
                  p = e.scribeData,
                  m = e.shouldStoreTypeaheadItem,
                  h = e.socialContext,
                  f = e.topicFollowPrompt,
                  b = e.tweet,
                  v = e.userCountry,
                  g = e.userLanguage,
                  w = e.withActionsDisabled,
                  y = e.withCommunityModerationAuthority,
                  _ = e.withCurationMenu,
                  E = e.withHideReply,
                  C = e.withMuteConversation,
                  T = e.withUnhideReply,
                  x = e.withViewHiddenReplies,
                  I = ye.a.getOriginalTweet(b),
                  S = i._getPromotedContent(),
                  k = p.items && p.items[0] && p.items[0].suggestion_details,
                  A = i._isSelected(),
                  L = I && I.card && !b.is_quote_status ? I.card.url : void 0,
                  O = i.context.loggedInUserId,
                  P = I.user.id_str === O,
                  R = !I.in_reply_to_status_id_str && P && !I.community_id_str,
                  B = i._renderConversationControlsTooltip()
                return {
                  excludeCardUrl: L,
                  inlineCalloutInfo: i._getInlineCalloutInfo(),
                  isFocal: r === b.id_str,
                  onAnalyticsClick: i._handleAnalyticsClick,
                  onAvatarClick: i._handleAvatarClick,
                  onBirdwatchNotesIconClick: i._handleBirdwatchNotesIconClick,
                  onBirdwatchNotesIconShown: i._handleBirdwatchNotesIconShown,
                  onBlur: i._handleBlur,
                  onCardLinkClick: i._handleCardLinkClick,
                  onClick: b.isPreview ? i._handlePreviewClick : i._handleTweetClick,
                  onEntityClick: i._handleEntityClick,
                  onFocus: i._handleFocus,
                  onLikeSuccess: i._handleLikeSuccess,
                  onMediaClick: b.isPreview ? i._handleEmbeddedMediaPreviewClick : i._handleEmbeddedMediaClick,
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
                  promotedContent: S,
                  renderCurationActionMenu:
                    _ && !b.isPreview
                      ? i._getRenderCurationActionMenu(
                          o && o.displayType,
                          n,
                          w,
                          l,
                          c,
                          A,
                          i._handleCaretClick,
                          s,
                          S,
                          I,
                          E,
                          y,
                          C,
                          T,
                          R,
                          x,
                          a,
                          null == t ? void 0 : t.entityToken,
                          B,
                          v,
                          g,
                        )
                      : void 0,
                  saveAsRecentSearch: u,
                  shouldStoreTypeaheadItem: m,
                  to: {
                    state: {
                      focal: I.id_str,
                      socialContext: h,
                      contextualClientEventInfo: t,
                      contextTweetId: b.id_str,
                      promotedContent: S,
                      suggestionDetails: k,
                      topicFollowPrompt: f,
                    },
                    pathname: I.permalink,
                    query: d ? { cxt: d } : void 0,
                  },
                }
              }),
              y()(h()(i), '_getReaderModeTweetProps', function () {
                var e,
                  t = i.props,
                  a = t.contextualClientEventInfo,
                  n = t.ruxContext,
                  r = t.scribeData,
                  o = t.socialContext,
                  l = t.topicFollowPrompt,
                  c = t.tweet,
                  s = t.tweetTextSize,
                  d = ye.a.getOriginalTweet(c),
                  u = i._getPromotedContent(),
                  p = r.items && r.items[0] && r.items[0].suggestion_details
                return {
                  excludeCardUrl: null === (e = c.card) || void 0 === e ? void 0 : e.url,
                  onAnalyticsClick: Re.a,
                  onAvatarClick: Re.a,
                  onBlur: i._handleBlur,
                  onCardLinkClick: i._handleCardLinkClick,
                  onClick: c.isPreview ? i._handlePreviewClick : i._handleTweetClick,
                  onEntityClick: Re.a,
                  onFocus: i._handleFocus,
                  onMediaClick: i._handleEmbeddedMediaClick,
                  onReplyContextClick: Re.a,
                  to: {
                    state: {
                      focal: d.id_str,
                      socialContext: o,
                      contextualClientEventInfo: a,
                      contextTweetId: c.id_str,
                      promotedContent: u,
                      suggestionDetails: p,
                      topicFollowPrompt: l,
                    },
                    pathname: d.permalink,
                    query: n ? { cxt: n } : void 0,
                  },
                  tweet: c,
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
              y()(h()(i), '_getInlineCalloutInfo', function () {
                var e = i.props,
                  t = e.displaySensitiveMedia,
                  a = e.isNsfwUser,
                  n = e.scribeNamespace,
                  r = e.tweet,
                  o = e.userCountry,
                  l = e.userLanguage,
                  c = i.context,
                  s = c.featureSwitches,
                  d = c.loggedInUserId
                if (
                  Object(Ae.e)({
                    displaySensitiveMedia: t,
                    featureSwitches: s,
                    isNsfwUser: a,
                    loggedInUserId: d,
                    tweet: r,
                    userCountry: o,
                    userLanguage: l,
                  })
                )
                  return Object(Ae.d)(r, n, s)
              }),
              y()(h()(i), '_getBlockOrUnblockAction', function () {
                var e = i.props,
                  t = e.addToast,
                  a = e.block,
                  n = e.contextualClientEventInfo,
                  r = e.createLocalApiErrorHandler,
                  o = e.tweet,
                  l = e.unblock,
                  c = o.user,
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
                return Object(I.a)(E()(E()({}, d), {}, { block: a, unblock: l, user: c, promotedContent: s }))
              }),
              y()(h()(i), '_getMuteOrUnmuteAction', function () {
                var e = i.props,
                  t = e.addToast,
                  a = e.contextualClientEventInfo,
                  n = e.createLocalApiErrorHandler,
                  r = e.mute,
                  o = e.tweet,
                  l = e.unmute,
                  c = o.user,
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
                return Object(ce.a)(E()(E()({}, s), {}, { mute: r, unmute: l, user: c, promotedContent: d }))
              }),
              y()(h()(i), '_renderConversationControlsTooltip', function () {
                var e = i.context.loggedInUserId,
                  t = i.props,
                  a = t.showMidConversationControlEducationText,
                  n = t.tweet,
                  r = ye.a.getOriginalTweet(n)
                if (!r) return !1
                var o = !!r.community_id_str,
                  l = r.user.id_str === e,
                  c = r.reply_count > 0
                return !r.in_reply_to_status_id_str && l && c && !o && a
              }),
              y()(
                h()(i),
                '_getRenderCurationActionMenu',
                Object(Be.a)(function (e, t, a, n, r, i, o, l, c, s, d, u, p, m, h, f, b, v, g, w, y) {
                  return function () {
                    return T.a.createElement(fe.a, {
                      behavioralEventEntityToken: v,
                      feedbackItems: t,
                      forwardPivotDisplayType: e,
                      isDisabled: a,
                      isNsfwUser: n,
                      isPinned: r,
                      onMenuClick: o,
                      onTweetDismiss: l,
                      promotedContent: c,
                      tweet: s,
                      userCountry: w,
                      userLanguage: y,
                      withChangeConversationControls: h,
                      withChangeConversationControlsTooltip: g,
                      withCommunityModerationAuthority: u,
                      withHideReply: d,
                      withMuteConversation: p,
                      withUnhideReply: m,
                      withViewHiddenReplies: f,
                    })
                  }
                }),
              ),
              y()(
                h()(i),
                '_getDefaultScribeData',
                Object(Be.a)(function (e, t, a, n, r, o) {
                  var l = (function (e) {
                    var t = e.clickTrackingEmbedDetails,
                      a = e.contextualScribeData,
                      n = e.isSelected,
                      r = e.overflow,
                      i = e.promotedContent,
                      o = e.scribeData,
                      l = e.tweet,
                      c = de.a.addTweetToItems(o ? o.items : [], l, i, n, r)
                    return E()(
                      E()(E()(E()({}, a || {}), o || {}), t && { click_tracking_embed_details: t }),
                      {},
                      { items: c },
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
                    (i._cachedFinalScribeData && Object(Me.a)(l, i._cachedFinalScribeData)) ||
                      (i._cachedFinalScribeData = l),
                    i._cachedFinalScribeData
                  )
                }),
              ),
              y()(h()(i), '_scribeAction', function (e) {
                var t,
                  a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  o = arguments.length > 4 ? arguments[4] : void 0,
                  l = i.props,
                  s = l.analytics,
                  d = l.history,
                  u = l.richScribeAction,
                  p = l.scribeData,
                  m = l.scribeNamespace,
                  h = l.tweet,
                  f = null === (t = d.location.state) || void 0 === t ? void 0 : t.overflow,
                  b = i._getPromotedContent(),
                  v = p
                if (r) {
                  var g = de.a.getUserItem(h.user, b),
                    w = v.items ? [].concat(c()(v.items), [g]) : [g]
                  v = E()(E()({}, v), {}, { items: w })
                }
                if (o) {
                  var y = { article_details: { is_ad_free: o } },
                    _ = v.items ? [].concat(c()(v.items), [y]) : [y]
                  v = E()(E()({}, v), {}, { items: _ })
                }
                var C = i._getDefaultScribeData(ye.a.getOriginalTweet(h), b, v, f, s.contextualScribeData, n)
                u(E()(E()({}, m), e), E()(E()({}, C), a))
              }),
              y()(h()(i), '_handlePoliticalSponsorWebsiteClick', function () {
                i._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
              }),
              y()(h()(i), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
                return function () {
                  i._scribeAction({ component: e, element: 'learn_more', action: 'click' })
                }
              }),
              y()(h()(i), '_handlePromotedIndicatorClick', function () {
                i._handleAsyncPromotedEvent(Se.b.FOOTER_PROFILE)
              }),
              y()(h()(i), '_handleFocus', function () {
                i.setState({ enableKeyboardShortcuts: !0 })
              }),
              y()(h()(i), '_handleBlur', function () {
                i.setState({ enableKeyboardShortcuts: !1 })
              }),
              y()(h()(i), '_getPromotedContent', function () {
                var e = i.props,
                  t = e.displayPromotedContent,
                  a = e.tweet
                return t ? a.promoted_content : void 0
              }),
              y()(h()(i), '_handleImpression', function (e) {
                i._shouldLogPromotedImpression(e) && i._handleAsyncPromotedEvent(Se.b.IMPRESSION)
              }),
              y()(h()(i), '_handleFullyVisible', function (e) {
                i._shouldLogPromotedImpression(e) && i._handleAsyncPromotedEvent(Se.b.DWELL)
              }),
              y()(h()(i), '_handleResize', function (e, t) {
                !i._isProbablyRemovedByAdBlocker(e) &&
                  i._isProbablyRemovedByAdBlocker(t) &&
                  (x.a.recordAdBlockerPresence(),
                  i._isCompatibilityScribeEnabled && i._scribeAction({ action: 'blocked_ad' }))
              }),
              y()(h()(i), '_handleInlineReplyClick', function (e) {
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
              y()(h()(i), '_handleLikeSuccess', function () {
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
              y()(h()(i), '_handleReplyContextClick', function (e, t) {
                return i._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
              }),
              y()(h()(i), '_handleAsyncPromotedEvent', function (e, t) {
                var a = i.props,
                  n = a.createLocalApiErrorHandler,
                  r = a.log,
                  o = a.tweet,
                  l = i._getPromotedContent()
                if (l) {
                  var c = l.disclosure_type,
                    s = l.impression_id
                  r({
                    disclosureType: c,
                    itemId: o.id_str,
                    itemType: Se.c.TWEET,
                    params: E()({ event: e, impression_id: s }, t),
                  }).catch(n())
                }
              }),
              y()(h()(i), '_handleModeratedIconClick', function () {
                return i._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
              }),
              y()(h()(i), '_handleModeratedIconShown', function () {
                return i._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
              }),
              y()(h()(i), '_handleBirdwatchNotesIconClick', function () {
                return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
              }),
              y()(h()(i), '_handleBirdwatchNotesIconShown', function () {
                return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
              }),
              y()(h()(i), '_handleAnalyticsClick', function () {
                i._scribeAction({ element: 'analytics', action: 'click' })
              }),
              y()(h()(i), '_handlePromoteButtonClick', function () {
                i._scribeAction({ element: 'promote', action: 'click' })
              }),
              y()(h()(i), '_handlePromoteAgainButtonClick', function () {
                i._scribeAction({ element: 'promote_again', action: 'click' })
              }),
              y()(h()(i), '_handleAvatarClick', function () {
                var e = i.props.tweet
                i._handleSaveAsRecentSearchUser(),
                  i._scribeAction(
                    { element: 'avatar', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  i._handleAsyncPromotedEvent(Se.b.PROFILE_IMAGE_CLICK)
              }),
              y()(h()(i), '_handleCaretClick', function () {
                return i._scribeAction({ element: 'caret', action: 'click' })
              }),
              y()(
                h()(i),
                '_handleTweetClick',
                Object(ue.a)(function (e) {
                  if (!e.defaultPrevented) {
                    if ((e.stopPropagation(), window.getSelection().toString().length)) return
                    i._scribeAction({ element: 'tweet', action: 'click' }),
                      i._handleAsyncPromotedEvent(Se.b.VIEW_DETAILS)
                  }
                }),
              ),
              y()(h()(i), '_handlePreviewClick', function (e) {
                e.preventDefault()
              }),
              y()(h()(i), '_handleEmbeddedMediaPreviewClick', function (e) {
                null == e || e.preventDefault()
              }),
              y()(h()(i), '_handleEmbeddedMediaClick', function () {
                i._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                  i._handleAsyncPromotedEvent(Se.b.EMBEDDED_MEDIA)
              }),
              y()(h()(i), '_handleQuoteTweetClick', function () {
                i._scribeAction({ element: 'tweet', action: 'click' }), i._handleAsyncPromotedEvent(Se.b.VIEW_DETAILS)
              }),
              y()(h()(i), '_handleEntityClick', function (e, t, a) {
                var n = i.props,
                  r = n.adFreeArticleDomains,
                  l = n.createLocalApiErrorHandler,
                  c = n.fetchAdFreeToken,
                  s = n.tweet,
                  d = Se.a[t],
                  u = ae.a[t],
                  p = i._getPromotedContent(),
                  m = de.a.getClickTrackingEmbedDetails(p, a)
                if (d) {
                  var h =
                    d === Se.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                      ? { url: e.currentTarget.href }
                      : void 0
                  i._handleAsyncPromotedEvent(d, h)
                }
                if (t === _e.a.MEDIA) return i._handleTweetClick(e)
                t === _e.a.URL && m && i._scribeAction({ action: Ee.b.CLICK_ID_EMBED }, {}, m)
                var f = !1
                if (i._hasClaimsForAdFreeArticles && null != a && a.expandedUrl) {
                  var b = new URL(a.expandedUrl).hostname,
                    v = new ne.a(c, l()).getAdFreeArticlesClickHandler({
                      destinationUrl: a.embeddedUrl,
                      linkDomain: b,
                      adFreeArticleDomains: r,
                      tweetAuthorUserId: s.user.id_str,
                    }),
                    g = o()(v, 2),
                    w = g[0],
                    y = g[1]
                  w && (y(e), (f = !0))
                }
                if (t === _e.a.MENTION) {
                  var _ = null != a && a.text ? [{ item_type: pe.a.ItemType.USER, name: a.text, id: a.id_str }] : void 0
                  return i._scribeAction({ action: u }, { targets: _ }, void 0, void 0, f)
                }
                if (t === _e.a.HASHTAG) {
                  var E = null != a && a.text ? [{ name: a.text }] : void 0
                  return i._scribeAction({ action: u }, { targets: E }, void 0, void 0, f)
                }
                if (t === _e.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == a ? void 0 : a.id))
                  return i._scribeAction(
                    { element: 'interactive_text', action: u },
                    { interactive_text_details: { id: a.id } },
                    void 0,
                    void 0,
                    f,
                  )
                u && i._scribeAction({ action: u }, void 0, void 0, void 0, f)
              }),
              y()(h()(i), '_handleScreenNameClick', function () {
                var e = i.props.tweet
                i._handleSaveAsRecentSearchUser(),
                  i._scribeAction(
                    { element: 'user', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  i._handleAsyncPromotedEvent(Se.b.SCREEN_NAME_CLICK)
              }),
              y()(h()(i), '_handleSelfThreadClick', function () {
                return i._scribeAction({ element: 'self_thread', action: 'click' })
              }),
              y()(h()(i), '_handleSelfThreadImpression', function () {
                return i._scribeAction({ element: 'self_thread', action: 'impression' })
              }),
              y()(h()(i), '_handleTopicFetch', function () {
                var e,
                  t = i.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.fetchTopicIfNeeded,
                  r = t.socialContext,
                  o = r && (null === (e = r.topicContext) || void 0 === e ? void 0 : e.topicId)
                o && n(o).catch(a())
              }),
              y()(h()(i), '_handleCommunityFetch', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchCommunityIfNeeded,
                  n = e.tweet
                if (i._isCommunitiesEnabled && n) {
                  var r,
                    o = n.community_id_str,
                    l = null === (r = n.quoted_status) || void 0 === r ? void 0 : r.community_id_str
                  o && a(o).catch(t()), l && a(l).catch(t())
                }
              }),
              y()(h()(i), '_handleUndoTopicNotInterested', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.topic,
                  n = e.undoTopicNotInterested
                i._scribeAction({ element: 'topic', action: 'un_not_interested' }), a && n(a.id).catch(t())
              }),
              y()(h()(i), '_handleCardLinkClick', function (e) {
                var t,
                  a = i.props,
                  n = a.adFreeArticleDomains,
                  r = a.analytics,
                  l = a.createLocalApiErrorHandler,
                  c = a.fetchAdFreeToken,
                  s = a.isCardArticle,
                  d = a.setArticlesVisited,
                  u = a.tweet
                if (s && i._isArticleNudgeEnabled) {
                  var p,
                    m,
                    h = null == u || null === (p = u.card) || void 0 === p ? void 0 : p.url
                  if (h)
                    d(h),
                      r.scribe({
                        component: 'article_nudge',
                        element: 'read_article',
                        action: 'click',
                        data: {
                          items: [
                            {
                              token: null == u || null === (m = u.card) || void 0 === m ? void 0 : m.url,
                              in_reply_to_tweet_id: u.id_str,
                            },
                          ],
                        },
                      })
                }
                var f = null == u || null === (t = u.card) || void 0 === t ? void 0 : t.binding_values
                if (i._hasClaimsForAdFreeArticles && f) {
                  var b = new ne.a(c, l()).getAdFreeArticlesClickHandler({
                      destinationUrl: Ce.a.getBindingValue(f, 'card_url'),
                      linkDomain: Ce.a.getBindingValue(f, 'domain'),
                      adFreeArticleDomains: n,
                    }),
                    v = o()(b, 2),
                    g = v[0],
                    w = v[1]
                  g && w(e)
                }
              }),
              y()(h()(i), '_handleSaveAsRecentSearchUser', function () {
                var e = i.props,
                  t = e.saveAsRecentSearch,
                  a = e.shouldStoreTypeaheadItem,
                  n = e.tweet.user
                t && a && a(pe.a.ItemType.USER) && t({ user: { id: n.id_str, type: se.a.User } })
              }),
              y()(h()(i), '_isSelected', function () {
                var e = i.props,
                  t = e.conversationTreeMetadata,
                  a = e.tweet,
                  n = (t || {}).selectedTweet
                return n && a.id_str === n.selectedTweetId
              }),
              y()(h()(i), '_handleMediaHashtagHighlightClick', function () {
                i._handleAsyncPromotedEvent(Se.b.HASHTAG_CLICK)
              }),
              (i.state = { displayReported: !1, enableKeyboardShortcuts: !1, showBlockOrUnblockConfirmation: !1 })
            var l = i._getPromotedContent()
            return (
              (i._shouldHidePromotedTweet =
                Te.a.isPromoted(l) && x.a.shouldHidePromotedTweets(i.context.featureSwitches)),
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
                      ? T.a.createElement(me.a, { conversationPosition: a, conversationTreeMetadata: n }, Ne)
                      : null
                  var o = i.user.id_str === e,
                    l = Object(De.b)(ye.a.getOriginalTweet(i).withheld_scope),
                    c = o && !i.retweeted_status,
                    s = c && 'user' === ye.a.getOriginalTweet(i).withheld_scope && !r,
                    d = Object(Le.h)(i) && !this.state.displayReported
                  return T.a.createElement(
                    T.a.Fragment,
                    null,
                    l
                      ? T.a.createElement(
                          ge.a,
                          null,
                          s ? null : this._renderWithheldTweet(),
                          c ? this._renderContent() : null,
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
                    i = ye.a.getOriginalTweet(n),
                    o = this.context.loggedInUserId,
                    l = !!o && o === r && i.retweeted,
                    c = i.withheld_text || i.text,
                    s = i.withheld_entities || i.entities,
                    d = n.user.id_str === o
                  return T.a.createElement(De.a, {
                    conversationPosition: t,
                    conversationTreeMetadata: d ? void 0 : a,
                    displayTextRange: i.display_text_range,
                    entities: s,
                    lang: i.lang,
                    onUnretweet: l ? this._handleUnretweet : void 0,
                    showUnretweetButton: l,
                    text: c,
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
                    r = ye.a.getOriginalTweet(n),
                    i = Object(Le.c)(r.reportingVisibility)
                  return T.a.createElement(
                    me.a,
                    {
                      actionText: Fe,
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
                    l = t.conversationTreeMetadata,
                    c = t.displayBlocked,
                    s = t.forwardPivotInfo,
                    d = t.hasModeratedReplies,
                    u = t.hideConversationControlsEducationText,
                    p = t.hideExclusivityInfoEducationTextInReplies,
                    m = t.hideTrustedFriendsEducationTextInReplies,
                    h = t.history,
                    f = t.hitHighlights,
                    b = t.injectedFeedbackItem,
                    v = t.innerForwardPivotInfo,
                    g = t.isReaderMode,
                    w = t.isUnread,
                    y = t.linkify,
                    _ = t.loggedInUser,
                    C = t.promotedContentAdvertiser,
                    x = t.quoteTweetSocialContextProps,
                    I = t.quotedTweetTombstoneInfo,
                    S = t.replyContext,
                    k = t.scribeData,
                    A = t.scribeNamespace,
                    L = t.shouldSelfThreadIncludeAvatar,
                    O = t.socialContext,
                    P = t.topic,
                    R = t.topicFollowPrompt,
                    B = t.tweet,
                    M = t.withActions,
                    D = t.withActionsDisabled,
                    F = t.withBirdwatchPivots,
                    N = t.withCardLinks,
                    H = t.withInlineMedia,
                    U = t.withQuotedTweetLinks,
                    j = t.withRemoveFromBookmarks,
                    z = t.withSelfThread,
                    W = t.withSocialContext,
                    V = t.withUserPresence,
                    K = this.state.enableKeyboardShortcuts,
                    q = ye.a.getOriginalTweet(B),
                    G = this._getPromotedContent(),
                    Q = Object(Me.a)(this._cachedScribeNamespace, A)
                      ? this._cachedScribeNamespace
                      : (this._cachedScribeNamespace = A),
                    X = null === (e = h.location.state) || void 0 === e ? void 0 : e.overflow,
                    Z = {
                      allowDownvote: a,
                      bookmarkFolderId: r,
                      contextTweet: i,
                      conversationPosition: o,
                      conversationTreeMetadata: l,
                      displayBlocked: c,
                      enableKeyboardShortcuts: K,
                      forwardPivotInfo: s,
                      hasModeratedReplies: d,
                      hideConversationControlsEducationText: u,
                      hideExclusivityInfoEducationTextInReplies: p,
                      hideTrustedFriendsEducationTextInReplies: m,
                      hitHighlights: f,
                      injectedFeedbackItem: b,
                      innerForwardPivotInfo: v,
                      linkify: y,
                      loggedInUser: _,
                      promotedContentAdvertiser: C,
                      quotedTweetTombstoneInfo: I,
                      quoteTweetSocialContextProps: x,
                      replyContext: S,
                      shouldSelfThreadIncludeAvatar: L,
                      socialContext: O,
                      topic: P,
                      topicFollowPrompt: R,
                      tweet: B,
                      withActions: M,
                      withActionsDisabled: D,
                      withBirdwatchPivots: F,
                      withCardLinks: N,
                      withInlineMedia: H,
                      withQuotedTweetLinks: U,
                      withRemoveFromBookmarks: j,
                      withSelfThread: z,
                      withSocialContext: W,
                      withUnreadStyles: w,
                      withUserPresence: V,
                    },
                    J = E()(E()({}, Z), g ? this._getReaderModeTweetProps() : this._getBaseTweetProps()),
                    Y = T.a.createElement(
                      Ie.c,
                      { data: this._getDefaultScribeData(q, G, k, X, n.contextualScribeData, void 0), namespace: Q },
                      T.a.createElement(
                        le.a,
                        { enabled: !!K, handlers: this._getShortcutKeyHandlers() },
                        T.a.createElement(he.b, J),
                      ),
                    )
                  return G
                    ? T.a.createElement(
                        Pe,
                        {
                          id: B.id_str,
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
                    Object(Le.f)(e)
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
                    o = ye.a.getOriginalTweet(i),
                    l =
                      !(null == i || null === (e = i.user) || void 0 === e || !e.blocking) ||
                      !(null == o || null === (t = o.user) || void 0 === t || !t.blocking)
                  return r !== i.id_str && !n && l
                },
              },
            ]),
            a
          )
        })(T.a.Component)
      y()(He, 'defaultProps', {
        displayBlocked: !1,
        shouldSelfThreadIncludeAvatar: !1,
        showWithheldBannerOnMyTweets: !0,
        withCardLinks: !1,
        withCurationMenu: !0,
        withRemoveFromBookmarks: !1,
        withMuteConversation: !1,
      }),
        y()(He, 'contextType', we.a)
      var Ue = function (e, t) {
          return t.height <= e.getNumberValue('responsive_web_extension_compatibility_size_threshold', 50)
        },
        je = function (e, t) {
          return !(e.isTrue('responsive_web_extension_compatibility_impression_guard') && Ue(e, t.item))
        },
        ze = function (e) {
          var t,
            a,
            n,
            i = T.a.useContext(xe.a)
          return (
            (t = e.tweetId),
            (a = e.tweet),
            (n = Object(ve.b)()),
            T.a.useEffect(
              function () {
                a || n.scribe({ action: 'hydration_failed', data: { tweet_id: t } })
              },
              [n, a, t],
            ),
            e.tweet ? T.a.createElement(He, r()({}, e, { history: i, tweet: e.tweet })) : null
          )
        }
      ze.defaultProps = He.defaultProps
      var We = te(ze)
      t.b = Object(Ie.a)({ component: 'tweet' })(We)
    },
    yygM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
