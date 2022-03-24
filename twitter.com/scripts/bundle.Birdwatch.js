;(window.webpackJsonp = window.webpackJsonp || []).push([
  [39, 6, 10, 20, 175],
  {
    '/ZwF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchTweetNotesScreen', function () {
          return he
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('LW0h'), n('7x/C'), n('z84I'), n('uFXj'), n('ERkP')),
        o = n.n(i),
        l = n('v6aA'),
        c = n('ZD0R'),
        s = n('vZpt'),
        d = n('L5MV'),
        u = (n('KqXw'), n('WNMA'), n('MvLc')),
        p = n('XOJV'),
        h = n('G6rE'),
        m = n('rxPX'),
        f = n('0KEI'),
        b = function (e, t) {
          return t.match.params.tweetId
        },
        v = function (e, t) {
          var n = b(0, t)
          return n ? p.a.selectHydrated(e, n) : void 0
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
        _ = Object(m.a)()
          .propsFromState(function () {
            return {
              ownNoteData: w,
              fetchStatus: y,
              loggedInUser: h.e.selectLoggedInUser,
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
        E = n('kGix'),
        C = n('3XMw'),
        T = n.n(C),
        I = n('yoO3'),
        S = n('7JQg'),
        x = n('VS6U'),
        k = n('xZXe'),
        A = n('MWbm'),
        L = n('FIs5'),
        O = n('4zmP'),
        P = n('t62R'),
        B = n('0yYu'),
        R = n('htQn'),
        M = n('6vad'),
        D = n('/yvb'),
        F = n('Qwev'),
        N = n('rHpw'),
        H = n('Nh1N'),
        U = n('yiKp'),
        j = n.n(U),
        z = n('Lsrn'),
        W = n('k/Ka'),
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
        q = n('x0mb'),
        G = T.a.h8335712,
        Q = T.a.fe27c1e1,
        X = T.a.c59107c3,
        Y = T.a.i859a9d3,
        Z = T.a.ib73f867,
        J = T.a.efd14e79,
        $ = T.a.d06b723c,
        ee = T.a.f84bcd3d,
        te = T.a.f10aaf3b,
        ne = T.a.d4f03f72,
        ae = T.a.h98222f4,
        re = T.a.d5c203a5,
        ie = T.a.bd3f064b,
        oe = T.a.c21313b9,
        le = T.a.c2c4012f,
        ce = T.a.ia596d40,
        se = T.a.deff0bdd,
        de = T.a.b95dc58a,
        ue = T.a.a565833d,
        pe = o.a.createElement(L.a, { buttonLink: '/i/birdwatch/about', buttonText: Y, header: Z }),
        he = function (e) {
          var t = o.a.useContext(l.a).featureSwitches,
            n = e.createLocalApiErrorHandler,
            a = e.fetchNotes,
            i = e.fetchStatus,
            u = e.fetchTweet,
            p = e.fetchUserAlias,
            h = e.history,
            m = e.loggedInUser,
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
              g && (a(g).catch(n()), u(g).catch(n()))
            },
            [n, a, u, g],
          ),
            o.a.useEffect(
              function () {
                N(b)
              },
              [b],
            ),
            o.a.useEffect(
              function () {
                p().catch(n())
              },
              [n, p],
            )
          var V,
            Z = o.a.useMemo(
              function () {
                return f.filter(function (e) {
                  return 'CurrentlyRatedNotHelpful' !== e.rating_status
                })
              },
              [f],
            ),
            he = o.a.useMemo(
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
              (null == m ? void 0 : m.id_str) === (null == v ? void 0 : v.user.id_str),
            ge = o.a.createElement(
              A.a,
              { style: me.appealsCallout },
              o.a.createElement(O.a, {
                Icon: H.a,
                action: { label: Y, link: 'https://twitter.github.io/birdwatch/additional-review' },
                headline: re,
                text: ie,
                type: 'primary',
              }),
            ),
            we = o.a.createElement(
              A.a,
              { style: me.actionModuleContainer },
              o.a.createElement(
                A.a,
                { style: me.actionModule },
                y ? o.a.createElement(K, { style: me.icon }) : o.a.createElement(H.a, { style: me.icon }),
                o.a.createElement(P.b, { size: 'headline1', style: me.header, weight: 'bold' }, y ? $ : ne),
                o.a.createElement(P.b, { color: 'gray700' }, y ? ee : ae),
                y
                  ? o.a.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' } },
                      te,
                    )
                  : o.a.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/learn-more/' } },
                      Y,
                    ),
              ),
            ),
            ye = o.a.createElement(
              R.a,
              null,
              o.a.createElement(
                A.a,
                { style: me.contentWrapper },
                o.a.createElement(
                  A.a,
                  { style: me.withBottomBorder },
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
                          o.a.createElement(c.a, {
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
                          o.a.createElement(A.a, { style: me.divider }),
                          o.a.createElement(M.b, { text: Q }),
                          ve ? ge : we,
                          o.a.createElement(B.a, null),
                          Z.map(function (e) {
                            return o.a.createElement(
                              o.a.Fragment,
                              { key: e.rest_id },
                              o.a.createElement(c.a, { note: e }),
                              o.a.createElement(B.a, null),
                            )
                          }),
                          (null == he ? void 0 : he.length) > 0
                            ? ((V = he),
                              z
                                ? V.map(function (e) {
                                    return o.a.createElement(
                                      o.a.Fragment,
                                      { key: e.rest_id },
                                      o.a.createElement(c.a, { note: e }),
                                      o.a.createElement(B.a, null),
                                    )
                                  })
                                : o.a.createElement(
                                    A.a,
                                    { style: [me.hiddenNotesSection, me.withBottomBorder] },
                                    o.a.createElement(
                                      A.a,
                                      { style: me.hiddenNotesHeader },
                                      o.a.createElement(q.a, { style: me.iconHiddenNotes }),
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
                                { style: me.actionModuleContainer },
                                o.a.createElement(
                                  A.a,
                                  { style: me.actionModule },
                                  o.a.createElement(P.b, { style: me.improveText }, w ? ce : de),
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
                  ? o.a.createElement(F.a, { accessibilityLabel: J, size: 'large', style: me.spinner })
                  : pe,
              ),
            )
          return o.a.createElement(
            S.c,
            { namespace: _ },
            o.a.createElement(
              I.a,
              null,
              o.a.createElement(x.a, {
                TabBar: d.a,
                backLocation: '/i/birdwatch',
                history: h,
                logoButton: o.a.createElement(o.a.Fragment, null),
                primaryContent: ye,
                sidebarContent: o.a.createElement(s.a, null),
                title: X,
                withTweetButton: !1,
              }),
            ),
          )
        },
        me = N.a.create(function (e) {
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
        fe = _(he)
      t.default = fe
    },
    '0SuV': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchPrinciples', function () {
          return A
        })
      n('KqXw'), n('MvUL'), n('lTEL'), n('7x/C'), n('kYxP')
      var a = n('ERkP'),
        r = n.n(a),
        i = (n('WNMA'), n('MvLc')),
        o = n('rxPX'),
        l = n('0KEI'),
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
        u = n('3XMw'),
        p = n.n(u),
        h = n('5FtR'),
        m = n('aITJ'),
        f = n('MWbm'),
        b = n('t62R'),
        v = n('h0NW'),
        g = n('feu+'),
        w = n('rHpw'),
        y = n('yygM'),
        _ = n('QDet'),
        E = n('wz7L'),
        C = p.a.gfa725ae,
        T = p.a.c3d89aca,
        I = p.a.h7ad677b,
        S = p.a.eac7b6ab,
        x = p.a.b0381cfb,
        k = p.a.f0addddc,
        A = function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            a = e.fetchNotes,
            i = e.history,
            o = e.ownNoteData,
            l = e.tweetId,
            c = l ? '/i/birdwatch/'.concat(l, '/contribute_complete') : '/'
          r.a.useEffect(
            function () {
              l && a(l).catch(n())
            },
            [n, a, l],
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
                { label: '', decoration: r.a.createElement(y.a, null), description: d(S) },
                { label: '', decoration: r.a.createElement(_.a, null), description: d(x) },
                { label: '', decoration: r.a.createElement(E.a, null), description: d(k) },
              ],
            },
            p = r.a.createElement(f.a, { style: L.values }, r.a.createElement(v.a, u))
          return o
            ? r.a.createElement(h.a, { to: c })
            : r.a.createElement(g.a, {
                actionLabel: T,
                graphicDisplayMode: 'none',
                headline: I,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), l && i.replace('/i/birdwatch/contribute_form/'.concat(l))
                },
                onClose: function () {
                  s('close'), l && i.goBackThroughModals({ fallbackPath: '/i/status/'.concat(l) })
                },
                subtext: p,
                withCloseButton: !m.b.isTwitterApp(),
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
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('TJCb'), n('7x/C'), n('DZ+c'), n('KOtZ'), n('0zG9'), n('KqXw'), n('Ysgh'), n('tQbP'), n('7xRU')
      var a = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return r(n, 0).toString()
        },
        r = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), a = t, r = 0; r < n.length; r++) {
            ;(a = (a << 5) - a + n.charCodeAt(r)), (a &= a)
          }
          return a
        }
    },
    '2Rcs': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    '2qZs': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    '3zeG': function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')
      var a = n('zb92'),
        r = Object(a.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(187)]).then(n.bind(null, 'MzK7'))
          },
        })
      t.a = r
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    '68+r': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        l = n('3XMw'),
        c = n.n(l).a.ed428a75,
        s = ((a = {}), i()(a, o.a.NotMutingTargetUser, { toast: { text: c } }), i()(a, 'showToast', !0), a)
    },
    '6bZg': function (e, t, n) {
      'use strict'
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('OIC0')
      t.a =
        ((a = {}),
        i()(a, o.a.CASHTAG, void 0),
        i()(a, o.a.EMOJI, void 0),
        i()(a, o.a.HASHTAG, 'hashtag_click'),
        i()(a, o.a.INTERACTIVE_HIGHLIGHT, 'highlight_click'),
        i()(a, o.a.MEDIA, void 0),
        i()(a, o.a.MENTION, 'mention_click'),
        i()(a, o.a.TEXT, void 0),
        i()(a, o.a.URL, 'open_link'),
        a)
    },
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return ee
      }),
        n.d(t, 'e', function () {
          return te
        }),
        n.d(t, 'f', function () {
          return ne
        }),
        n.d(t, 'd', function () {
          return ae
        }),
        n.d(t, 'a', function () {
          return oe
        })
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        b = n.n(f),
        v = n('KEM+'),
        g = n.n(v),
        w = n('97Jx'),
        y = n.n(w),
        _ = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        E = n.n(_),
        C = n('6rlp'),
        T = n('zh9S'),
        I = n('G6rE'),
        S = n('rxPX'),
        x = n('0KEI'),
        k = function (e, t) {
          return I.e.select(e, t.userId)
        },
        A = function (e, t) {
          return t.promotedContent
        },
        L = Object(S.a)()
          .propsFromState(function () {
            return { promotedContent: A, user: k }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: C.a,
              scribeAction: T.c,
            }
          }),
        O = n('I57f'),
        P = n('vMjK'),
        B = n('MWbm'),
        R = n('IG7M'),
        M = n('rHpw'),
        D = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return E.a.createElement(
            B.a,
            { style: F.decorationWrapper },
            t,
            E.a.createElement(R.a, {
              renderActionMenu: function (e) {
                return E.a.createElement(P.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: F.actionMenu,
            }),
          )
        },
        F = M.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        N = n('uIZp'),
        H = n('mN6z'),
        U = n('caTy'),
        j = n('3IPs'),
        z = n('Rp9C'),
        W = n('X04g'),
        V = n('Re5t'),
        K = n('TnY3'),
        q = n('hxu0'),
        G = n('v6aA'),
        Q = n('7JQg'),
        X = n('nBUg'),
        Y = n('IMA+'),
        Z = n('cFuS'),
        J = [
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
            ? E.a.createElement(
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
        promotedItemType: Z.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return E.a.createElement(O.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? E.a.createElement(N.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: a })
            : null
        },
        ne = function (e) {
          return E.a.createElement(D, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ae = function (e) {
          return E.a.createElement(R.a, {
            renderActionMenu: function (t) {
              return E.a.createElement(P.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        re = (function (e) {
          m()(n, e)
          var t = b()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.PROFILE_IMAGE_CLICK)
              }),
              g()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  a = t.onClick,
                  r = t.screenName,
                  i = t.user,
                  o = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  a ? a({ user: i, state: o }) : n.push({ pathname: '/'.concat(r), state: o || void 0 })
              }),
              g()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.SCREEN_NAME_CLICK)
              }),
              g()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && a && a(W.a.ItemType.USER) && n({ user: { id: r, type: j.a.User } })
              }),
              g()(p()(e), '_scribeAction', function (t) {
                var n,
                  a = e.props,
                  r = a.promotedContent,
                  i = a.scribeAction,
                  l = a.scribeData,
                  c = a.scribeNamespace,
                  s = a.user,
                  d = a.userId,
                  u =
                    null == l || null === (n = l.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === W.a.ItemType.USER && e.id === d
                        }),
                  p = l.search_details,
                  h = { items: [o()(o()({}, u), z.a.getUserItem(s, r))], profile_id: d, search_details: p }
                i(o()(o()({}, c), t), h)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(H.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.avatarDecoration,
                    a = (t.bottomControl, t.cellClickable),
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
                    l = t.user,
                    c = r()(t, J)
                  return this._shouldRender()
                    ? E.a.createElement(
                        X.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        E.a.createElement(
                          Y.a,
                          y()({}, c, {
                            avatarDecoration: n,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: l.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: a ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: o
                              ? {
                                  contextType: o.contextType,
                                  text: o.text,
                                  link: o.landingUrl ? Object(U.b)(o.landingUrl) : void 0,
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
                    n = this.props,
                    a = n.displayMode,
                    r = n.followRequestReceived,
                    i = n.isAutoblocking,
                    o = n.isBlocking,
                    l = n.isDeviceFollowing,
                    c = n.isFollowing,
                    s = n.promotedContent,
                    d = n.screenName,
                    u = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: a,
                        followRequestReceived: r,
                        isAutoblocking: i,
                        isBlocking: o,
                        isDeviceFollowing: !!l,
                        isFollowing: !!c,
                        loggedInUserId: t,
                        promotedContent: s,
                        screenName: d,
                        user: u,
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
                    n = e.isBlockedBy,
                    a = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (n || a))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    n = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || n ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.promotedItemType
                  return t && n === Z.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.log,
                    r = t.promotedContent,
                    i = t.promotedItemId,
                    o = t.promotedItemType,
                    l = t.userId
                  r &&
                    a({
                      disclosureType: r.disclosure_type,
                      itemId: i || l,
                      itemType: o,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    a = e.promotedContent,
                    r = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    o = e.userId
                  if (a && r === Z.c.USER) {
                    var l = a.disclosure_type,
                      c = a.impression_id
                    n({
                      disclosureType: l,
                      itemId: o,
                      itemType: Z.c.USER,
                      params: { event: Z.b.IMPRESSION, impression_id: c },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      g()(re, 'contextType', G.a), g()(re, 'defaultProps', $.defaultProps)
      var ie = M.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(K.a)(Object(q.a)(L($)))
      t.b = Object(Q.a)({ element: 'user' })(oe)
    },
    '89Im': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    '9B+1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('PbbS'),
        r = function (e) {
          return { topicId: e.topicId, functionalityType: e.functionalityType }
        },
        i = function (e) {
          return e === a.a.Star
            ? a.a.Star
            : e === a.a.Favorite
            ? a.a.Favorite
            : e === a.a.Interested
            ? a.a.Interested
            : a.a.Default
        }
    },
    '9StO': function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('lTEL'), n('7x/C'), n('kYxP'), n('jwue'), n('+oxZ'), n('ERkP')),
        o = n.n(i),
        l = n.p + 'birdwatch_owl.9e2a1755.png',
        c = n('MvLc'),
        s = n('1YZw'),
        d = n('rxPX'),
        u = n('0KEI'),
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
        h = n('W6+M'),
        m = n('3XMw'),
        f = n.n(m),
        b = n('t62R'),
        v = n('h0NW'),
        g = n('feu+'),
        w = n('gSL+'),
        y = n('Qwev'),
        _ = n('4zmP'),
        E = n('rHpw'),
        C = n('j7Bv'),
        T = n('ms2t'),
        I = n('VwDm'),
        S = n('EQ/a'),
        x = n('U+bB'),
        k = n('MWbm'),
        A = f.a.f084f1cd,
        L = f.a.ja0ee36f,
        O = f.a.j761c248,
        P = f.a.h66bd30a,
        B = f.a.j48ab593,
        R = f.a.e17c80bc,
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
          return o.a.createElement(x.a, { source: l, style: q.image })
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
            { label: V(B), decoration: o.a.createElement(T.a, { style: q.icon }), description: R },
            { label: V(M), decoration: o.a.createElement(I.a, { style: q.icon }), description: D },
            { label: V(F), decoration: o.a.createElement(S.a, { style: q.icon }), description: N },
          ],
        },
        X = p(function (e) {
          var t = e.addToast,
            n = e.aliasSelfSelectOptions,
            a = e.createLocalApiErrorHandler,
            i = e.fetchAliasSelfSelectOptions,
            l = e.onAliasSelected,
            c = e.selectAlias,
            s = o.a.useState(!0),
            d = r()(s, 2),
            u = d[0],
            p = d[1],
            m = o.a.useState(''),
            f = r()(m, 2),
            E = f[0],
            C = f[1],
            T = o.a.useState(!1),
            I = r()(T, 2),
            S = I[0],
            x = I[1]
          o.a.useEffect(
            function () {
              i()
                .then(function (e) {
                  e && e[0] ? C(e[0]) : x(!0)
                })
                .catch(a())
            },
            [a, i],
          )
          var A,
            B,
            R = o.a.createElement(
              b.b,
              { color: 'text', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              P,
            ),
            M = o.a.createElement(k.a, { style: q.values }, o.a.createElement(v.a, Q)),
            D = o.a.createElement(g.a, {
              actionLabel: L,
              footer: R,
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
              n
                ? o.a.createElement(
                    k.a,
                    { style: q.aliasSelectContainer },
                    o.a.createElement(w.a, {
                      name: 'example',
                      onChange: F,
                      options:
                        ((A = n),
                        (B = []),
                        A.forEach(function (e) {
                          B.push({ containerStyle: q.optionContainer, label: Object(h.a)(e), value: e, decoration: G })
                        }),
                        B),
                      value: E,
                    }),
                  )
                : o.a.createElement(y.a, null),
              S ? o.a.createElement(_.a, { text: z, type: 'danger' }) : void 0,
            ),
            V = o.a.createElement(g.a, {
              actionLabel: j,
              footer: R,
              graphicDisplayMode: 'none',
              headline: H,
              isFullHeightOnMobile: !0,
              onAction: function () {
                E &&
                  c(E)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (l(!1), t({ text: W, withClearButton: !0 }))
                        : x(!0)
                    })
                    .catch(function (e) {
                      a({ defaultToast: { text: z, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: N,
            })
          return u ? D : V
        })
      t.a = X
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('KOtZ'), n('7x/C'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        b = n.n(f),
        v = n('3XMw'),
        g = n.n(v),
        w = n('oQhu'),
        y = n('mjJ+'),
        _ = n('eb3s'),
        E = g.a.cfd2f35d,
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), 'state', { activeConfirmation: null }),
              m()(c()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              m()(c()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              m()(c()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    n = t.confirmButtonType,
                    a = t.headline,
                    r = t.label,
                    i = t.text,
                    o = t.withCancelButton
                  return b.a.createElement(_.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: n,
                    headline: a,
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
                    n = e.dividerIndices,
                    a = e.onClose
                  return T(t, n, a, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        T = Object(w.a)(function (e, t, n, a) {
          return e.reduce(function (e, r, i) {
            var o = r.Icon,
              l = r.behavioralEventContext,
              c = r.confirmation,
              s = r.disabled,
              d = r.excludeFromActionMenu,
              u = r.isEmphasized,
              p = r.link,
              h = r.onClick,
              m = r.subText,
              f = r.testID,
              b = r.text
            r.withCancelButton
            if (!d) {
              var v = h
                ? function () {
                    c
                      ? c.render
                        ? a({ callback: h, render: c.render })
                        : a({
                            callback: h,
                            text: c.text,
                            headline: c.headline,
                            label: c.label,
                            confirmButtonType: c.confirmButtonType,
                            withCancelButton: c.withCancelButton,
                          })
                      : (h(), n())
                  }
                : n
              e.push({
                behavioralEventContext: l,
                disabled: s,
                Icon: o,
                isEmphasized: u,
                testID: f,
                subText: m,
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
    AOWc: function (e, t, n) {
      'use strict'
      n('ho0z'), n('849X'), n('TJCb')
      function a(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(a.prototype = Object.create(Error.prototype)), (a.prototype.constructor = a)
      t.a = function (e, t) {
        if (!e) throw new a(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
      }
    },
    'B/qP': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    BLtI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Pn
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        l = n('yiKp'),
        c = n.n(l),
        s = n('VrFO'),
        d = n.n(s),
        u = n('Y9Ll'),
        p = n.n(u),
        h = n('1Pcy'),
        m = n.n(h),
        f = n('5Yy7'),
        b = n.n(f),
        v = n('2VqO'),
        g = n.n(v),
        w = n('KEM+'),
        y = n.n(w),
        _ =
          (n('2G9S'),
          n('KqXw'),
          n('WNMA'),
          n('hBvt'),
          n('ho0z'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('849X'),
          n('5BYb'),
          n('uFXj'),
          n('ERkP')),
        E = n.n(_),
        C = n('rcen'),
        T = n('Rp9C'),
        I = n('MWbm'),
        S = n('Irs7'),
        x = n('htQn'),
        k = n('t62R'),
        A = n('OOKO'),
        L = n('/yvb'),
        O = n('rHpw'),
        P = n('v6aA'),
        B = n('Lsrn'),
        R = n('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(R.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
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
          return Object(R.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
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
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(R.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var U = H,
        j = n('7Mjr'),
        z = (function (e) {
          b()(n, e)
          var t = g()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_scribeAction', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.destinationUrl,
                  i = n.note
                a.scribe({ action: t, data: { items: [T.a.getBirdwatchItem(null == i ? void 0 : i.rest_id, r)] } })
              }),
              y()(m()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              y()(m()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return E.a.createElement(D, { style: W.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return E.a.createElement(N, { style: W.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return E.a.createElement(U, { style: W.birdwatchIcon, testID: 'icon-birdwatch-fill' })
                }
              }),
              e
            )
          }
          return (
            p()(n, [
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
                    n = e.destinationUrl,
                    a = e.footer,
                    r = e.iconType,
                    i = e.subtitle,
                    o = e.title,
                    l = '#' === n ? void 0 : { pathname: n, anchorless: !0 },
                    c = l ? this._handlePivotClick : void 0,
                    s = (null == t ? void 0 : t.destinationUrl) || '#',
                    d = '#' === s ? void 0 : s
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(
                      x.a,
                      {
                        link: l,
                        onPress: c,
                        style: W.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!l,
                      },
                      E.a.createElement(
                        I.a,
                        { style: W.headerContainer },
                        E.a.createElement(
                          I.a,
                          { style: [W.headerTextContainer, !t && W.headerTextAndThumbnailContainer] },
                          this._getBirdwatchIcon(r),
                          E.a.createElement(k.b, { size: 'subtext1', style: W.birdwatchLabel, weight: 'bold' }, o),
                        ),
                        t ? null : E.a.createElement(j.a, { style: W.icon, testID: 'icon-arrow-right' }),
                      ),
                      i
                        ? E.a.createElement(C.a, {
                            entities: i.entities,
                            size: 'body',
                            style: W.subtitle,
                            text: i.text,
                          })
                        : null,
                      t
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(A.a, { spacing: 'space2' }),
                            E.a.createElement(
                              I.a,
                              { style: W.callToActionContainer },
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
                    a
                      ? E.a.createElement(C.a, {
                          color: 'gray700',
                          entities: a.entities,
                          size: 'subtext2',
                          style: W.footer,
                          text: a.text,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(z, 'contextType', P.a)
      var W = O.a.create(function (e) {
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
        V = Object(S.a)(z, { element: 'birdwatch_pivot' }),
        K = n('6/RC'),
        q = n('3XMw'),
        G = n.n(q),
        Q = n('5S/X'),
        X = n('Ey+e'),
        Y = n('caTy'),
        Z = n('Y6L+'),
        J = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        $ = Object(J.a)({
          loader: function () {
            return n.e(181).then(n.bind(null, 'mL9d'))
          },
        }),
        ee = n('m3Bd'),
        te = n.n(ee),
        ne = n('xM7j'),
        ae = n('LKCq'),
        re = ['onActionClick'],
        ie = 'inner_tombstone'
      function oe(e) {
        var t,
          n = e.children,
          a = e.config,
          r = e.nativeID,
          i = Object(S.b)()
        if (Q.b) return n
        var l = (null === (t = a.richRevealText) || void 0 === t ? void 0 : t.text) || a.revealText,
          c = a.richText
            ? E.a.createElement(C.a, {
                alignment: a.richText.alignment,
                entities: a.richText.entities,
                onEntityClick: function () {
                  i.scribe({ action: 'open_link', component: ie })
                },
                rtl: a.richText.rtl,
                text: a.richText.text,
              })
            : a.text
        return E.a.createElement(
          I.a,
          { nativeID: r },
          l
            ? E.a.createElement(
                ae.a,
                {
                  label: c,
                  onReveal: function () {
                    i.scribe({ action: 'click', component: ie })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      n = te()(e, re)
                    return E.a.createElement(ne.a, o()({}, n, { inline: !0, onClick: t }))
                  },
                  revealLabel: l,
                },
                n,
              )
            : E.a.createElement(ne.a, { inline: !0 }, c),
        )
      }
      var le = n('PeW/'),
        ce = n('3IPs'),
        se = (n('1t7P'), n('jQ/y'), n('PbbS')),
        de = n('LWCC'),
        ue = n('JUsM'),
        pe = O.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        he = function (e) {
          var t = e.defaultRef,
            n = e.topic,
            a = e.topicFollowPrompt,
            r = (null == a ? void 0 : a.description) || {},
            i = r.entities,
            o = r.text
          return E.a.createElement(
            I.a,
            { style: pe.topicFollowPrompt },
            E.a.createElement(ue.a, {
              containerRef: t,
              primaryAction: E.a.createElement(de.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: se.a.FollowTopic,
                topic: n,
              }),
              text: E.a.createElement(C.a, { entities: i, text: o }),
            }),
          )
        },
        me = n('SrIh'),
        fe = n('gdQ4'),
        be = n('qbku'),
        ve = n('tocL'),
        ge = 'analyticsButton',
        we = 'promotedIndicator',
        ye = 'socialContext',
        _e = 'tweet',
        Ee = n('X04g'),
        Ce = n('v/3V'),
        Te = (n('Ysgh'), n('jwue'), n('+oxZ'), n('RqPI')),
        Ie = n('3zvM'),
        Se = n('lMB6'),
        xe = n('iChn'),
        ke = Object(Ie.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, n) {
              return e.Tweets.fetchTranslation(t, n).then(Ae)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Ae = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(xe.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        Le = Se.a.register(ke),
        Oe = n('rxPX'),
        Pe = n('0KEI'),
        Be = function (e, t) {
          return Le.select(e, t.tweetId)
        },
        Re = function (e, t) {
          return Le.selectFetchStatus(e, t.tweetId)
        },
        Me = Object(Oe.a)()
          .propsFromState(function () {
            return { translation: Be, translationFetchStatus: Re, userLanguage: Te.o }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Pe.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: Le.fetchOneIfNeeded,
            }
          }),
        De = n('PdwO'),
        Fe = n('cTG8'),
        Ne = n('oQhu'),
        He = n('YeIG'),
        Ue = n('Gpeq'),
        je = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'hitHighlights',
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
        ze = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        We = G.a.b4947556,
        Ve = (function (e) {
          b()(n, e)
          var t = g()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_fetchTranslation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(n())
              }),
              y()(m()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  n = t.disableTranslation,
                  a = t.displayTextRange,
                  r = t.entities,
                  i = t.lang,
                  o = t.supplementalLang,
                  l = t.text,
                  c = t.userLanguage
                return e._getMemoizedDisableTranslation(n, a, r, l, i, o, c)
              }),
              y()(m()(e), '_renderTranslation', function () {
                var t = e.props,
                  n =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.hitHighlights,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  a = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, te()(t, je))
                if (n)
                  return E.a.createElement(
                    Fe.a,
                    o()({}, a, {
                      displayTextRange: e._getMemoizedDisplayTextRange(n.text),
                      entities: n.entities,
                      lang: n.destinationLanguage,
                      text: n.text,
                    }),
                  )
              }),
              y()(
                m()(e),
                '_getMemoizedDisplayTextRange',
                Object(Ne.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              y()(
                m()(e),
                '_getMemoizedDisableTranslation',
                Object(Ne.a)(function (e, t, n, a, r, i, o) {
                  var l = o && Object(Ue.c)(r.split('-')[0]) !== Object(Ue.c)(o.split('-')[0])
                  return e || !!i || !l || !Object(Ue.b)({ displayTextRange: t, entities: n, text: a, language: r })
                }),
              ),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.onMediaTranslation,
                    a = t.translation
                  if (e.translation !== a && a) {
                    var r,
                      i = this.context.featureSwitches,
                      o = {}
                    ;((null == a || null === (r = a.entities) || void 0 === r ? void 0 : r.media) || []).forEach(
                      function (e) {
                        e.alt_text && (o[e.id_str] = e.alt_text)
                      },
                    ),
                      n && !Object(He.a)(o) && i.isTrue('responsive_web_alt_text_translations_enabled') && n(o)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    n = (e.onMediaTranslation, e.style),
                    a = (e.supplementalLang, e.translation),
                    r = e.translationFetchStatus,
                    i = e.tweetId,
                    o = (e.userLanguage, e.withOriginalText),
                    l = te()(e, ze)
                  return E.a.createElement(
                    De.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: i,
                      originLanguage: a && a.localizedSourceLanguage,
                      style: n,
                      translateButtonText: We,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: r,
                      withOriginalText: o,
                    },
                    E.a.createElement(Fe.a, l),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(Ve, 'contextType', P.a)
      var Ke = Me(Ve),
        qe = n('2qZs'),
        Ge = n('wwsH'),
        Qe = { viewType: 'birdwatch' },
        Xe = O.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        Ye = function (e) {
          var t = e.onPress,
            n = e.onShow,
            a = e.tweetId,
            r = { pathname: '/i/birdwatch/t/'.concat(a), external: !0 }
          return (
            E.a.useEffect(
              function () {
                n && n()
              },
              [n],
            ),
            E.a.createElement(Ge.a, {
              Icon: qe.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: Qe,
              link: r,
              onPress: t,
              style: Xe.birdwatchIcon,
            })
          )
        },
        Ze = n('xXop'),
        Je = n('xrkw'),
        $e = n('mqpi'),
        et = G.a.g1fa869c,
        tt = (function (e) {
          b()(n, e)
          var t = g()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_shouldDisable', $e.b.bind(null, e.context.featureSwitches)),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.endControl,
                    n = e.loggedInUserId,
                    a = e.onAnalyticsClick,
                    r = e.style,
                    i = e.tweet
                  return !this._shouldDisable(i, $e.a.Analytics) && n === i.user.id_str
                    ? E.a.createElement(
                        I.a,
                        { style: [nt.activityContainerWithChildren, r] },
                        E.a.createElement(
                          x.a,
                          {
                            link: ''.concat(i.permalink, '/analytics'),
                            onPress: a,
                            style: nt.analyticsButton,
                            testID: ge,
                          },
                          E.a.createElement(Je.a, { style: nt.analyticsIcon }),
                          E.a.createElement(k.b, { color: 'gray700' }, et),
                        ),
                        t,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent)
      y()(tt, 'contextType', P.a)
      var nt = O.a.create(function (e) {
          return {
            analyticsIcon: { color: e.colors.gray700, paddingRight: e.spaces.space4 },
            analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: 'row', flexGrow: 1 },
            activityContainerWithChildren: {
              justifyContent: 'space-between',
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              alignItems: 'center',
            },
          }
        }),
        at = tt,
        rt = n('tmUV'),
        it = n('YBcl'),
        ot = n('k89r'),
        lt = function (e) {
          var t = Object(ot.a)()
          return E.a.createElement(
            it.a,
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
              handleHeadsUpImpression: function (e, n) {
                t.scribe({ element: 'heads_up_context', action: n, data: { tweet_id: e } })
              },
            }),
          )
        },
        ct = n('uFYP'),
        st = G.a.g6237a1e,
        dt = G.a.d6b5949e,
        ut = function (e) {
          switch (e) {
            case 'paused':
              return dt
            case 'in-progress':
            default:
              return st
          }
        },
        pt = function (e) {
          var t = e.nativeID,
            n = e.status,
            a = e.style,
            r = 'paused' === n
          return E.a.createElement(
            I.a,
            { style: [ht.root, a] },
            E.a.createElement(ct.a, { style: [ht.icon, r ? ht.withGray700 : null] }),
            E.a.createElement(k.b, { color: r ? 'gray700' : 'text', nativeID: t, size: 'subtext2' }, ut(n)),
          )
        },
        ht = O.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        mt = n('TuTd'),
        ft = function (e, t) {
          return Object(mt.a)(e, t.tweetId)
        },
        bt = Object(Oe.a)()
          .propsFromState(function () {
            return { liveCounts: ft }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        vt = (n('KOtZ'), n('LW0h'), n('tQbP'), n('z84I'), n('Jkc4')),
        gt = n('855f'),
        wt = n('MtXG'),
        yt = n('de1q'),
        _t = n('cHvH'),
        Et = G.a.fd80ffbf,
        Ct = O.a.theme.spacesPx.space20,
        Tt = (function (e) {
          b()(n, e)
          var t = g()(n)
          function n(e, a) {
            var r
            return (
              d()(this, n),
              (r = t.call(this, e, a)),
              y()(
                m()(r),
                '_reactionsLegacyHeartEnabled',
                r.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              y()(m()(r), '_renderQuoteTweetTimelinePivot', function () {
                var e = r.props.permalink
                return E.a.createElement(
                  x.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: r._handleQuoteTweetPivotScribeOnClick,
                    style: It.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  E.a.createElement(k.b, { color: 'primary' }, Et),
                )
              }),
              y()(m()(r), '_updateStateIfChanged', function (e, t) {
                return function (n) {
                  var a = n.nativeEvent.layout.width
                  a !== e() && t(a)
                }
              }),
              y()(
                m()(r),
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
                m()(r),
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
                m()(r),
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
                m()(r),
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
              y()(m()(r), '_handleRetweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              y()(m()(r), '_handleQuoteTweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              y()(m()(r), '_handleQuoteTweetPivotScribeOnClick', function () {
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
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.isNonCompliantTweet,
                    a = e.quoteTweetCount
                  n && t.scribe({ element: 'quote_tweet_pivot', action: 'impression' }),
                    a && a > 0 && t.scribe({ element: 'quote_tweet_stat', action: 'impression' })
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
                    n = this.props.permalink,
                    a = gt.a.getTruncatedCount(e.count),
                    r = { pathname: ''.concat(n, '/reactions'), state: { reactionType: e.type } }
                  return E.a.createElement(
                    I.a,
                    { key: e.type },
                    E.a.createElement(vt.a, null, function (n) {
                      return E.a.createElement(
                        wt.a,
                        { count: e.count, link: r, onPress: n() },
                        E.a.createElement(
                          I.a,
                          { style: It.reactionStat },
                          E.a.createElement(yt.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: It.reaction,
                          }),
                          E.a.createElement(wt.a.Value, { animated: !0, count: e.count, weight: 'normal' }, a),
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
                    n = t.permalink,
                    a = t.reactionCount,
                    r =
                      (a &&
                        a.reduce(function (e, t) {
                          return (t.count || 0) + e
                        }, 0)) ||
                      0
                  if (!r || !a) return null
                  var i = gt.a.getTruncatedCount(r),
                    o = a
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return E.a.createElement(_t.a, null, function (t) {
                    var a = t.windowWidth
                    return E.a.createElement(
                      wt.a.Group,
                      { style: [It.detailItemContainer, It.detailItem] },
                      a > O.a.theme.breakpoints.small
                        ? E.a.createElement(
                            I.a,
                            null,
                            E.a.createElement(vt.a, null, function (e) {
                              return E.a.createElement(
                                wt.a,
                                { count: r, link: ''.concat(n, '/reactions'), onPress: e() },
                                E.a.createElement(
                                  G.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  E.a.createElement(
                                    wt.a.Value,
                                    { animated: !0, count: r },
                                    G.a.b4a4e4aa({ displayCountAll: i }),
                                  ),
                                  E.a.createElement(wt.a.Label, null, G.a.ifa70ada({ count: r })),
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
                  var t = gt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return E.a.createElement(
                    I.a,
                    { onLayout: this._handleLikeStatLayout },
                    E.a.createElement(vt.a, null, function (a) {
                      return E.a.createElement(
                        wt.a,
                        { count: e, link: ''.concat(n, '/likes'), onPress: a() },
                        E.a.createElement(
                          G.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          E.a.createElement(wt.a.Value, { animated: !0, count: e }, G.a.ha054943({ displayCount: t })),
                          E.a.createElement(wt.a.Label, null, G.a.d260af55({ count: e })),
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
                    n = gt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return E.a.createElement(
                    I.a,
                    { onLayout: this._handleRetweetStatLayout },
                    E.a.createElement(vt.a, null, function (r) {
                      return E.a.createElement(
                        wt.a,
                        { count: e, link: ''.concat(a, '/retweets'), onPress: r(t._handleRetweetScribeOnClick) },
                        E.a.createElement(
                          G.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          E.a.createElement(wt.a.Value, { animated: !0, count: e }, G.a.j142cb3f({ displayCount: n })),
                          E.a.createElement(wt.a.Label, null, G.a.e59a4e90({ count: e })),
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
                    n = gt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return E.a.createElement(
                    I.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    E.a.createElement(vt.a, null, function (r) {
                      return E.a.createElement(
                        wt.a,
                        {
                          count: e,
                          link: ''.concat(a, '/retweets/with_comments'),
                          onPress: r(t._handleQuoteTweetScribeOnClick),
                        },
                        E.a.createElement(
                          G.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          E.a.createElement(wt.a.Value, { animated: !0, count: e }, G.a.f6e12705({ displayCount: n })),
                          E.a.createElement(wt.a.Label, null, G.a.e2414184({ count: e })),
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
                    n = e.likeCount,
                    a = e.quoteTweetCount,
                    r = e.reactionCount,
                    i = e.retweetCount,
                    o = e.style,
                    l = e.withReactions,
                    c = this.state,
                    s = c.groupWidth,
                    d = c.likeLabelWidth,
                    u = c.quoteTweetLabelWidth,
                    p = c.retweetLabelWidth,
                    h = p && u && d && s && p + Ct + (l ? 0 : d + Ct) + u > s,
                    m = s,
                    f = l ? void 0 : n
                  return i || f || a || r
                    ? E.a.createElement(
                        I.a,
                        { onLayout: this._handleStatGroupLayout, style: m ? t : It.hidden },
                        l ? this._renderReactionsStatsGroup() : null,
                        i || f || a
                          ? E.a.createElement(
                              wt.a.Group,
                              { style: [It.detailItemContainer, It.detailItem, It.noWrap, o] },
                              i ? this._renderRetweetsStat(i) : null,
                              a ? this._renderQuoteTweetsStat(a) : null,
                              f && !h ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        h && f
                          ? E.a.createElement(
                              wt.a.Group,
                              { style: [It.detailItemContainer, It.detailItem, o] },
                              this._renderLikesStat(f),
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent)
      y()(Tt, 'contextType', P.a)
      var It = O.a.create(function (e) {
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
        St = Object(S.a)(Tt)
      var xt = bt(function (e) {
          var t = e.containerStyle,
            n = e.isNonCompliantTweet,
            a = e.liveLikeCount,
            r = e.liveQuoteCount,
            i = e.liveRetweetCount,
            o = e.tweetLikeCount,
            l = e.tweetPermalink,
            c = e.tweetQuoteTweetCount,
            s = e.tweetReactionCount,
            d = e.tweetRetweetCount,
            u = e.withReactions
          return E.a.createElement(St, {
            containerStyle: t,
            isNonCompliantTweet: n,
            likeCount: a || o,
            permalink: l,
            quoteTweetCount: r || c,
            reactionCount: s,
            retweetCount: i || d,
            withReactions: u,
          })
        }),
        kt = n('avOP'),
        At = function (e) {
          var t = e.children
          return Q.b ? E.a.createElement(kt.a, { itemProp: 'articleBody' }, t) : t
        },
        Lt = n('hqKg'),
        Ot = n('B/Qy'),
        Pt = n('M0jS'),
        Bt = function (e, t) {
          return Pt.b.select(e, t.userId)
        },
        Rt = Object(Oe.a)().propsFromState(function () {
          return {
            userSpace: Object(Lt.createSelector)(Bt, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(Ot.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Mt = n('Sksh'),
        Dt = n('1I0O'),
        Ft = n('jhWN'),
        Nt = function (e) {
          var t = e.avatarRef,
            n = e.imageLayoutCache,
            a = e.nativeID,
            r = e.onClick,
            i = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            c = e.screenName,
            s = e.size,
            d = e.style,
            u = e.uri,
            p = e.userId,
            h = e.userSpace,
            m = e.withHoverCard,
            f = e.withLink
          return (
            E.a.useEffect(
              function () {
                return (
                  Mt.a.registerUserInApp(p),
                  function () {
                    Mt.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            h
              ? E.a.createElement(
                  Dt.a,
                  o()(
                    {
                      avatarRef: t,
                      imageLayoutCache: n,
                      nativeID: a,
                      onClick: r,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: c,
                      size: s,
                      style: d,
                      uri: u,
                      withHoverCard: m,
                      withLink: f,
                    },
                    h,
                  ),
                )
              : E.a.createElement(Ft.a, {
                  avatarRef: t,
                  imageLayoutCache: n,
                  nativeID: a,
                  onClick: r,
                  onHoverCardScreenNameClick: i,
                  promotedContent: l,
                  screenName: c,
                  size: s,
                  style: d,
                  uri: u,
                  withHoverCard: m,
                  withLink: f,
                })
          )
        },
        Ht = Rt(E.a.memo(Nt)),
        Ut = n('FGLp'),
        jt = n('TIdA'),
        zt = n('DNho'),
        Wt = jt.a.createLayoutCache(),
        Vt = O.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        Kt = function (e) {
          var t = Object(S.b)(),
            n = E.a.useContext(P.a).featureSwitches,
            a = e.avatarRef,
            r = e.nativeID,
            i = e.onClick,
            o = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            c = e.screenName,
            s = e.uri,
            d = e.userId,
            u = e.withHoverCard,
            p = void 0 === u || u,
            h = e.withLink,
            m = void 0 === h || h,
            f = e.withNftAvatar,
            b = e.withUserPresence,
            v = void 0 !== b && b
          return (
            Object(Ut.a)(function () {
              f && n.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            E.a.createElement(
              I.a,
              { style: Vt.avatarWrapper },
              E.a.createElement(zt.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return v
                  ? E.a.createElement(Ht, {
                      avatarRef: a,
                      imageLayoutCache: Wt,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: Vt.avatar,
                      uri: s,
                      userId: d,
                      withHoverCard: p,
                      withLink: m,
                    })
                  : E.a.createElement(Ft.a, {
                      avatarRef: a,
                      imageLayoutCache: Wt,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: Vt.avatar,
                      uri: s,
                      withHoverCard: p,
                      withLink: m,
                    })
              }),
            )
          )
        },
        qt = n('aITJ'),
        Gt = n('E0cF'),
        Qt = n('Z6aJ'),
        Xt = n('dCqJ'),
        Yt = n('Olb6'),
        Zt = n('nBUg'),
        Jt = n('r7g+'),
        $t = n('PbQQ'),
        en = n('e5HP'),
        tn = n('JWUO'),
        nn = n('9VO7'),
        an = n('GBcw'),
        rn = n('jV+4'),
        on = n('ir4X'),
        ln = n('aA1u'),
        cn = n('kY28'),
        sn = n('6nXH')
      function dn(e, t, n) {
        var a,
          r = Gt.a.getOriginalTweet(e),
          i = null == r || null === (a = r.entities) || void 0 === a ? void 0 : a.hashtags
        if (Array.isArray(i) && !(i.length < 1)) {
          var o = i[0]
          return n &&
            (function (e) {
              var t = Gt.a.getOriginalTweet(e),
                n = t.extended_entities && t.extended_entities.media
              return (
                !!(n && n.length > 0) &&
                n.some(function (e) {
                  return 'animated_gif' === e.type
                })
              )
            })(e) &&
            t.isTrue('responsive_web_hashtag_highlight_is_enabled')
            ? o.text
            : void 0
        }
      }
      function un(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      n('yH/f')
      var pn = n('9B+1'),
        hn = n('YICZ'),
        mn = n('21zW'),
        fn = n('8bWS'),
        bn = G.a.gf5e9ea6,
        vn = G.a.e2f2b658,
        gn = Object.freeze({
          see_more: G.a.ffd9cfe6,
          discover_more: G.a.d172116a,
          more: G.a.h63a5c3b,
          more_tweets: G.a.iac074c3,
          more_suggestions: G.a.g11ebd34,
          browse: G.a.g4a69019,
          browse_tweets: G.a.b1abb17d,
        })
      var wn = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return E.a.createElement(
            I.a,
            { style: En.tombstone },
            E.a.createElement(ne.a, { actionText: bn, children: vn, inline: !0, onClick: t }),
          )
        },
        yn = Object(S.a)(function (e) {
          var t = e.analytics,
            n = e.bannerText,
            a = e.label,
            r = e.link,
            i = e.linkText,
            o = e.onNotInterestedPress,
            l = e.topic,
            c = e.withRightControl,
            s = n && '' === n.text,
            d = i && '' === i.text,
            u = !d,
            p = !(s || d)
          return E.a.createElement(
            I.a,
            { style: En.topicActions },
            p && E.a.createElement(mn.a, null),
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
                i ? E.a.createElement(C.a, i) : a,
              ),
            c
              ? E.a.createElement(
                  I.a,
                  { style: En.notInterestedButtonWrapper },
                  E.a.createElement(hn.a, {
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
        _n = function (e) {
          var t = e.isExpanded,
            n = e.onNotInterestedPress,
            a = e.topic,
            r = a.following ? En.followingTopicButtonWrapper : En.followTopicButtonWrapper,
            i = [t && r, !t && En.followTopicButtonWrapperNotExpanded],
            o = t ? En.largeNotInterestedButtonWrapper : En.notInterestedButtonWrapper
          return E.a.createElement(
            I.a,
            { style: En.topicActions },
            t ? null : E.a.createElement(mn.a, { style: En.topicMiddot }),
            E.a.createElement(
              I.a,
              { style: i },
              E.a.createElement(de.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: En.followTopicButton,
                textMode: se.a.FollowTopic,
                topic: a,
              }),
            ),
            n || (t && !a.following)
              ? E.a.createElement(
                  I.a,
                  { style: o },
                  E.a.createElement(hn.a, {
                    onPress: n,
                    size: 'small',
                    topicId: a.id,
                    type: t ? 'primaryOutlined' : 'brandText',
                    withIconOnly: !t,
                  }),
                )
              : null,
          )
        }
      var En = O.a.create(function (e) {
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
        Cn = n('0zXz'),
        Tn = n('fs1G'),
        In = O.a.theme.aspectRatios.maxTimelineImage,
        Sn = O.a.theme.aspectRatios.minTimelineImage,
        xn = G.a.f277e949,
        kn = G.a.ee79367a,
        An = G.a.a2a3824a,
        Ln = G.a.c14cdb18,
        On = G.a.e8adeec8,
        Pn = (function (e) {
          b()(n, e)
          var t = g()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_defaultInlinePromptRef', E.a.createRef()),
              y()(m()(e), '_iconContainerRef', E.a.createRef()),
              y()(m()(e), 'state', { mediaAltTranslations: {} }),
              y()(m()(e), '_transformPromotedUrl', Ce.a.bind(null, e.context.featureSwitches)),
              y()(
                m()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              y()(m()(e), '_getWithTopLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.isFocal,
                  r = t.tweet,
                  i = Gt.a.getOriginalTweet(r),
                  o = e._getConversationPosition(),
                  l = e._getIsConversationStart(),
                  c = n && n.ancestorConnector,
                  s = n && n.indents,
                  d = (a && !!i.in_reply_to_status_id_str) || (o && !l)
                return s ? 'top' === c : d
              }),
              y()(m()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.tweet,
                  r = Gt.a.getOriginalTweet(a),
                  i = e._getConversationPosition(),
                  o = n && n.indents,
                  l = n && n.descendantConnector,
                  c = i && !i.isEnd
                return o
                  ? l
                  : !(
                      !r.in_reply_to_status_id_str &&
                      'ancestor' !== (null == i ? void 0 : i.position) &&
                      e._isEdgeToEdgeEnabled
                    ) && c
              }),
              y()(m()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  n = t.onMediaHashtagHighlightClick,
                  a = t.promotedContent,
                  r = t.promotedContentAdvertiser,
                  i = t.tweet,
                  o = e.context.featureSwitches,
                  l = {
                    highlightedHashtag: function () {
                      return dn(i, o, Qt.a.isPromoted(a))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return un(r, o)
                    },
                    shouldUseSmallFontForHashtagHighlight: function () {
                      return o.isTrue('responsive_web_hashtag_highlight_use_small_font')
                    },
                    onMediaHashtagHighlightClick: n,
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
              y()(m()(e), '_renderPromotedDetails', function (t) {
                var n = e.props,
                  a = n.onPoliticalSponsorWebsiteClick,
                  r = n.onPromotedDisclaimerLearnMoreClick,
                  i = n.onPromotedIndicatorClick,
                  o = n.promotedContent,
                  l = n.promotedContentAdvertiser,
                  c = n.tweet
                return r && a && i
                  ? E.a.createElement(Xt.a, {
                      onPoliticalSponsorWebsiteClick: a,
                      onPromotedDisclaimerLearnMoreClick: r,
                      onPromotedIndicatorClick: i,
                      promotedContent: o,
                      promotedContentAdvertiser: l,
                      style: Bn.promotedDetails,
                      testID: we,
                      tweet: c,
                      withCircleIcon: t,
                    })
                  : null
              }),
              y()(m()(e), '_getPromoteButtonOnPress', function (t) {
                var n = e.props,
                  a = n.onPromoteAgainButtonClick,
                  r = n.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? a : r
              }),
              y()(m()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  n = t.tweet,
                  a = t.withBirdwatchPivots,
                  r = Gt.a.getOriginalTweet(n)
                return r.birdwatch_pivot &&
                  a &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? E.a.createElement(V, r.birdwatch_pivot)
                  : null
              }),
              y()(m()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  n = t.hasModeratedReplies,
                  a = t.onModeratedIconClick,
                  r = t.tweet
                return n ? E.a.createElement(Yt.a, { link: ''.concat(r.permalink, '/hidden'), onPress: a }) : null
              }),
              y()(m()(e), '_renderBirdwatchNotesIcon', function () {
                var t = e.props,
                  n = t.onBirdwatchNotesIconClick,
                  a = t.onBirdwatchNotesIconShown,
                  r = t.tweet
                return !(
                  r.birdwatch_pivot &&
                  !0 ===
                    e.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_birdwatch_pivots_enabled')
                ) &&
                  r.has_birdwatch_notes &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_consumption_enabled') &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_contribution_enabled')
                  ? E.a.createElement(Ye, { onPress: n, onShow: a, tweetId: r.id_str })
                  : null
              }),
              y()(m()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              y()(m()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.socialContext
                if (n && r && a && a(Ee.a.ItemType.USER)) {
                  var i,
                    o = (null === (i = r.landingUrl) || void 0 === i ? void 0 : i.url.match(Z.A.id)) || '',
                    l = r.text || ''
                  n({ topic: { id: o && o[0], name: l, description: An, type: ce.a.Topic } })
                }
              }),
              y()(m()(e), '_renderTweetTextHWTweet', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  l = n.linkify,
                  s = n.onEntityClick,
                  d = n.tweet,
                  u = n.tweetTextSize,
                  p = n.withCardLinks,
                  h = n.withInlineMedia,
                  m = n.withQuotedTweetLinks,
                  f = Gt.a.getOriginalTweet(d),
                  b = Gt.a.hasInteractiveText(f),
                  v = u || (b ? 'title4' : t.size),
                  g = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled'),
                  w = c()(
                    c()({}, t),
                    {},
                    {
                      excludeCardUrl: a,
                      hitHighlights: r,
                      linkify: l,
                      onEntityClick: s,
                      size: v,
                      style: b && Bn.interactiveHighlightSpacer,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: f.unmentioned_user_ids,
                      weight: b ? 'heavy' : void 0,
                      withCardLinks: p,
                      withMediaLinks: !h,
                      withQuoteLinks: m || Gt.a.isQuotedTweetUnavailable(f),
                      withUnicodeEmojis: Q.b,
                    },
                  )
                return E.a.createElement(
                  At,
                  null,
                  g
                    ? E.a.createElement(
                        Ke,
                        o()({}, w, {
                          disableTranslation: f.user.protected,
                          lang: f.lang,
                          onMediaTranslation: e._handleMediaTranslations,
                          supplementalLang: f.supplemental_language,
                          text: f.text,
                          tweetId: f.id_str,
                          withOriginalText: i,
                        }),
                      )
                    : E.a.createElement(Fe.a, w),
                )
              }),
              y()(m()(e), '_renderTweetText', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  o = n.linkify,
                  l = n.onEntityClick,
                  c = n.tweet,
                  s = n.tweetTextSize,
                  d = n.withCardLinks,
                  u = n.withInlineMedia,
                  p = n.withQuotedTweetLinks,
                  h = Gt.a.getOriginalTweet(c),
                  m = Gt.a.hasInteractiveText(h),
                  f = s || (i || m ? 'title4' : 'body'),
                  b = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled')
                return E.a.createElement(
                  At,
                  null,
                  i || b
                    ? E.a.createElement(Ke, {
                        disableTranslation: h.user.protected,
                        displayTextRange: h.display_text_range,
                        enrichments: h.enrichments,
                        entities: h.entities,
                        excludeCardUrl: a,
                        hitHighlights: i ? void 0 : r,
                        lang: h.lang,
                        linkify: !!i || o,
                        nativeID: t,
                        onEntityClick: l,
                        onMediaTranslation: e._handleMediaTranslations,
                        quotedTweetId: h.quoted_status && h.quoted_status.id_str,
                        quotedTweetPermalink: h.quoted_status_permalink,
                        size: f,
                        style: i ? Bn.expandedTweetText : m && Bn.interactiveHighlightSpacer,
                        supplementalLang: h.supplemental_language,
                        text: h.text,
                        transformUrl: e._transformUrl,
                        tweetId: h.id_str,
                        unmentionedUserIds: h.unmentioned_user_ids,
                        weight: m ? 'heavy' : void 0,
                        withCardLinks: i ? void 0 : d,
                        withMediaLinks: i ? void 0 : !u,
                        withOriginalText: i,
                        withQuoteLinks: (!i && p) || Gt.a.isQuotedTweetUnavailable(h),
                        withUnicodeEmojis: Q.b,
                      })
                    : E.a.createElement(Fe.a, {
                        displayTextRange: h.display_text_range,
                        enrichments: h.enrichments,
                        entities: h.entities,
                        excludeCardUrl: a,
                        hitHighlights: r,
                        lang: h.lang,
                        linkify: o,
                        nativeID: t,
                        onEntityClick: e.props.onEntityClick,
                        quotedTweetId: h.quoted_status && h.quoted_status.id_str,
                        quotedTweetPermalink: h.quoted_status_permalink,
                        size: f,
                        style: m && Bn.interactiveHighlightSpacer,
                        text: h.text,
                        transformUrl: e._transformUrl,
                        unmentionedUserIds: h.unmentioned_user_ids,
                        weight: m ? 'heavy' : void 0,
                        withCardLinks: d,
                        withMediaLinks: !u,
                        withQuoteLinks: p || Gt.a.isQuotedTweetUnavailable(h),
                        withUnicodeEmojis: Q.b,
                      }),
                )
              }),
              y()(m()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              y()(m()(e), '_transformUrl', function (t) {
                var n
                return e._transformPromotedUrl(
                  t,
                  null === (n = e.props.promotedContent) || void 0 === n ? void 0 : n.click_tracking_info,
                )
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.forwardPivotInfo,
                    i = t.hideConversationControlsEducationText,
                    l = t.hideExclusivityInfoEducationTextInReplies,
                    s = t.hideTrustedFriendsEducationTextInReplies,
                    d = t.isFocal,
                    u = t.loggedInUser,
                    p = t.onBlur,
                    h = t.onClick,
                    m = t.onFocus,
                    f = t.promotedContent,
                    b = t.quotedTweetTombstoneInfo,
                    v = t.readerModeAvailable,
                    g = t.renderCurationActionMenu,
                    w = t.showConversationHeadsUp,
                    y = t.socialContext,
                    _ = t.to,
                    C = t.tweet,
                    T = t.withReaderModeBottomBar,
                    S = t.withTimestamp,
                    x = t.withTimestampLink,
                    A = t.withUnreadStyles,
                    P = Gt.a.getOriginalTweet(C),
                    B = P.has_super_follower,
                    R = P.quick_promote_eligibility,
                    M = P.user,
                    D = null == R ? void 0 : R.eligibility,
                    F = this._getIsQuickPromoteEligible(D),
                    N = Qt.a.isPromoted(f),
                    H = !!N && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    U = !!N && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    j = !(!M.professional || !F),
                    z = 'IneligibleCampaignRunning' === D || 'IneligibleCampaignPaused' === D,
                    W = 'string' == typeof _ ? { pathname: _ } : _,
                    V = n && n.ancestorConnector,
                    q = n && n.indents,
                    G = this._getWithTopLine(),
                    Q = this._getWithBottomLine(),
                    X = G || Q,
                    Z = (X && !d) || !this._isEdgeToEdgeEnabled,
                    J = W ? c()(c()({}, W), {}, { anchorless: !0 }) : void 0,
                    ee = d ? 'detail' : 'inline'
                  return !d &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? E.a.createElement(
                        Zt.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        E.a.createElement(
                          rt.a,
                          { forwardPivotInfo: a, tweet: C },
                          E.a.createElement(Jt.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: K.canUseDOM ? J : void 0,
                            onBlur: p,
                            onFocus: m,
                            onPress: h,
                            promotedContent: f,
                            quotedTweetTombstoneInfo: b,
                            renderActionMenu: g && K.canUseDOM ? g : Cn.a,
                            renderActionsBar: C.isPreview
                              ? function () {
                                  return E.a.createElement($, { previewTweetId: C.id_str })
                                }
                              : function (t) {
                                  return e._renderTweetActions({
                                    actionSize: t.actionSize,
                                    displayStyle: t.displayStyle,
                                    nativeID: t.nativeID,
                                    style: t.style,
                                    withCount: t.withCount,
                                    withAnalyticsAction: !0,
                                  })
                                },
                            renderEducation: function (t) {
                              return E.a.createElement(
                                E.a.Fragment,
                                null,
                                j &&
                                  E.a.createElement(
                                    L.a,
                                    {
                                      link: ''.concat(C.permalink, '/quick_promote_web/intro'),
                                      onPress: e._getPromoteButtonOnPress(D),
                                      style: Bn.promoteButton,
                                      type: 'primaryOutlined',
                                    },
                                    e._getPromoteButtonText(D),
                                  ),
                                E.a.createElement(
                                  lt,
                                  o()({}, t, {
                                    hideConversationControlsEducationText: !!i,
                                    hideExclusivityInfoEducationTextInReplies: !!l,
                                    hideTrustedFriendsEducationTextInReplies: !!s,
                                    loggedInUser: u,
                                  }),
                                ),
                                e.props.withReaderModeBottomBar
                                  ? E.a.createElement(I.a, { style: Bn.readerBottomBar })
                                  : null,
                              )
                            },
                            renderHighlightedUserLabel: function (t) {
                              var n
                              return 'AutomatedLabel' !==
                                (null === (n = t.label) || void 0 === n ? void 0 : n.userLabelType) ||
                                e.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                                ? E.a.createElement(Jt.a.HighlightedUserLabel, t)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return E.a.createElement(Jt.a.PromotedIndicator, o()({}, e, { withCircleIcon: U }))
                            },
                            renderPromotionStatusBadge: z
                              ? function (t) {
                                  return E.a.createElement(pt, {
                                    nativeID: t.nativeID,
                                    status: e._getTweetPromotionStatus(D),
                                    style: Bn.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (t) {
                              return e._renderReplyContext({ nativeID: t.nativeID })
                            },
                            renderRichContent: function (t) {
                              return e._renderRichContent({ nativeID: t.nativeID, withRoundMediaCorners: Z })
                            },
                            renderSelfThreadCTA: function () {
                              return e._renderSelfThreadCTA()
                            },
                            renderSocialContext: function (t) {
                              return e._renderSocialContext({ nativeID: t.nativeID })
                            },
                            renderText: function (t) {
                              return e._renderTweetTextHWTweet(t)
                            },
                            renderTimestamp: S
                              ? function (t) {
                                  return E.a.createElement(
                                    Jt.a.Timestamp,
                                    o()({}, t, {
                                      link: x ? t.link : void 0,
                                      nativeID: e._isEdgeToEdgeEnabled ? void 0 : t.nativeID,
                                    }),
                                  )
                                }
                              : Cn.a,
                            renderTombstone: function (t) {
                              return e._renderTombstoneHWTweet(t)
                            },
                            renderUserAvatar: function (t) {
                              return e._renderAvatar(t.nativeID)
                            },
                            renderUserName: function (t) {
                              return e._renderUserNameHWTweet(t)
                            },
                            socialContext: y
                              ? {
                                  contextType: y.contextType,
                                  isSelfRetweet: y.isSelfRetweet,
                                  link: y.landingUrl ? Object(Y.b)(y.landingUrl) : void 0,
                                  name: y.name,
                                  screenName: y.screenName,
                                  text: y.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: _e,
                            tweet: C,
                            withBottomLine: Q,
                            withTopLine: G,
                            withUnreadStyles: A,
                          }),
                        ),
                      )
                    : E.a.createElement($t.c.UseTweetA11yIds, { tweet: C }, function (t) {
                        var o = r()(t, 2),
                          c = o[0],
                          b = o[1],
                          y = H
                            ? Gt.a.hasInteractiveText(P)
                              ? Bn.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : Bn.promotedIndicatorBelowHeader
                            : Bn.promotedIndicator,
                          _ =
                            f && N
                              ? E.a.createElement(en.a, {
                                  contentAuthorId: M.id_str,
                                  nativeID: c.promotedLabel,
                                  promotedContent: f,
                                  style: y,
                                  withCircleIcon: U,
                                })
                              : null,
                          x = z
                            ? E.a.createElement(pt, {
                                nativeID: c.promotionStatusLabel,
                                status: e._getTweetPromotionStatus(D),
                                style: Bn.promotionStatus,
                              })
                            : null,
                          R = n
                            ? E.a.createElement(
                                k.b,
                                { nativeID: c.conversationLevel, style: O.a.visuallyHidden },
                                kn({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          F = P.tombstoneInfo || C.tombstoneInfo,
                          W = E.a.createElement(
                            E.a.Fragment,
                            null,
                            F ? e._renderTombstone(F) : null,
                            d || !F
                              ? E.a.createElement(
                                  E.a.Fragment,
                                  null,
                                  e._renderReplyContext({ nativeID: c.replyContext }),
                                  E.a.createElement(I.a, null, e._renderTweetText(c.text)),
                                  E.a.createElement(
                                    I.a,
                                    null,
                                    e._renderRichContent({ nativeID: c.richContent, withRoundMediaCorners: Z }),
                                  ),
                                )
                              : null,
                          )
                        return E.a.createElement(
                          Zt.b.Provider,
                          { value: e._getFeatureConfigurationContextProviderValue() },
                          E.a.createElement(
                            rt.a,
                            { forwardPivotInfo: a, tweet: C },
                            E.a.createElement(
                              tn.a,
                              {
                                a11yDomIds: b,
                                actionMenu: g && K.canUseDOM ? g() : null,
                                avatar: e._renderAvatar(c.avatar),
                                footer: e._renderFooter(),
                                header: e._renderHeader(c),
                                indents: q,
                                link: d || !K.canUseDOM ? void 0 : J,
                                onBlur: p,
                                onFocus: m,
                                onPress: h,
                                testID: _e,
                                timestamp:
                                  N || e._getUsernameStackedLayoutEnabled() || !S
                                    ? null
                                    : e._renderTweetRelativeTimestamp(c.timestamp),
                                userFollowIndicators: B ? E.a.createElement(nn.a, { type: 'superFollower' }) : void 0,
                                userLabel: e._renderUserLabel(M, c.userLabel),
                                userName: e._renderUserName(c.username, c.timestamp),
                                withBottomLine: Q,
                                withElbow: q ? 'side' === V : void 0,
                                withFooterGap: !d,
                                withFullWidthChildren: d || (!X && e._isEdgeToEdgeEnabled),
                                withTopLine: G,
                                withUnreadStyles: A,
                              },
                              H && d ? e._renderPromotedDetails(U) : null,
                              H && !d ? _ : null,
                              R,
                              W,
                              j &&
                                'inline' === ee &&
                                E.a.createElement(
                                  L.a,
                                  {
                                    link: ''.concat(C.permalink, '/quick_promote_web/intro'),
                                    onPress: e._getPromoteButtonOnPress(D),
                                    style: Bn.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  e._getPromoteButtonText(D),
                                ),
                              e._renderFocalContent(H, j, x),
                              'inline' === ee &&
                                E.a.createElement(lt, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!s,
                                  loggedInUser: u,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: C,
                                }),
                              C.isPreview
                                ? E.a.createElement($, { previewTweetId: C.id_str })
                                : e._renderTweetActions({
                                    actionSize: d ? 'large' : void 0,
                                    displayStyle: d ? 'block' : void 0,
                                    nativeID: c.actionsBar,
                                    style: [
                                      d ? Bn.actionBarFocalTweet : Bn.actionBar,
                                      d && !v && Bn.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !d,
                                    withCount: !d,
                                  }),
                              e._renderReaderModeButton(),
                              H || d ? null : _,
                              d ? null : x,
                              'detail' === ee &&
                                E.a.createElement(lt, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!s,
                                  loggedInUser: u,
                                  showConversationHeadsUp: w,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: C,
                                }),
                              T ? E.a.createElement(I.a, { style: Bn.readerBottomBar }) : null,
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
                    n = t.promotedContent,
                    a = t.tweet,
                    r = t.withTimestampLink,
                    i = Gt.a.getOriginalTweet(a)
                  return E.a.createElement(an.a, {
                    link: r
                      ? { pathname: i.permalink, state: { contextTweetId: i.id_str, promotedContent: n } }
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
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.tweet,
                    i = t.withUserHoverCard,
                    l = t.withUserName,
                    c = Gt.a.getOriginalTweet(r).user
                  return l
                    ? E.a.createElement(
                        Jt.a.UserName,
                        o()({}, e, {
                          onAvatarClick: n,
                          onLinkClick: a,
                          onScreenNameClick: a,
                          withHoverCard: i && !c.blocking,
                          withLink: !!a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserName',
                value: function (e, t) {
                  var n = this.props,
                    a = n.isFocal,
                    r = n.onAvatarClick,
                    i = n.onScreenNameClick,
                    o = n.promotedContent,
                    l = n.tweet,
                    c = n.withUserHoverCard,
                    s = n.withUserName,
                    d = Gt.a.getOriginalTweet(l).user,
                    u = Qt.a.isPromoted(o)
                  return s
                    ? E.a.createElement(rn.a, {
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
                          u || a || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(),
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
                  var n = e.highlightedLabel,
                    a = 'AutomatedLabel' === (null == n ? void 0 : n.userLabelType),
                    r = !!a && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !n || (a && !r) ? null : E.a.createElement(on.a, { label: n, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, n) {
                  var a = this.props,
                    r = a.isFocal,
                    i = a.onAnalyticsClick,
                    o = a.tweet,
                    l = Gt.a.getOriginalTweet(o),
                    c = l.created_at,
                    s = l.place,
                    d = l.quick_promote_eligibility,
                    u = l.source,
                    p = l.source_name,
                    h = null == d ? void 0 : d.eligibility,
                    m = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                  return r
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(
                          I.a,
                          { style: Bn.footerContainer },
                          E.a.createElement(
                            I.a,
                            { style: Bn.footerContent },
                            E.a.createElement(ln.a, {
                              linkColor: 'gray700',
                              place: s && s.full_name,
                              placeLink: s && s.id ? '/places/'.concat(s.id) : void 0,
                              source: u && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: Bn.timeLocSource,
                              timestamp: c,
                              timestampLink: l.permalink,
                            }),
                            E.a.createElement(
                              I.a,
                              { style: Bn.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          n,
                        ),
                        E.a.createElement(at, {
                          endControl: t
                            ? E.a.createElement(
                                L.a,
                                {
                                  link: ''.concat(o.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(h),
                                  style: Bn.tweetActivityPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(h),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: i,
                          tweet: l,
                        }),
                        E.a.createElement(xt, {
                          isNonCompliantTweet: 'non_compliant' === l.limited_actions,
                          tweetId: l.id_str,
                          tweetLikeCount: l.favorite_count,
                          tweetPermalink: l.permalink,
                          tweetQuoteTweetCount: l.quote_count,
                          tweetReactionCount: l.reaction_count,
                          tweetRetweetCount: l.retweet_count,
                          withReactions: m,
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
                    n = e.topic,
                    a = e.topicFollowPrompt
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    this._renderSelfThreadCTA(),
                    !t && n && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? he({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: a })
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function (e) {
                  var t = this.props,
                    n = t.isFocal,
                    a = t.topic,
                    r = t.topicFollowPrompt
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    n && r && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? he({ defaultRef: this._defaultInlinePromptRef, topic: a, topicFollowPrompt: r })
                      : this._renderSocialContext({ nativeID: e.socialContext }),
                  )
                },
              },
              {
                key: '_renderSelfThreadCTA',
                value: function () {
                  var e = this.props,
                    t = e.onSelfThreadClick,
                    n = e.onSelfThreadImpression,
                    a = e.tweet,
                    r = Gt.a.getOriginalTweet(a),
                    i = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? E.a.createElement(fe.a, {
                        avatarUrl: i ? r.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: n,
                        style: Bn.selfThreadCTA,
                        to: a.permalink,
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
                    n = e.tweet,
                    a = e.withSelfThread,
                    r = Gt.a.getOriginalTweet(n)
                  return a && !t && r.self_thread && !n.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    n = e.tweet,
                    a = Gt.a.getOriginalTweet(n)
                  return this._shouldShowSelfThread() && t && !a.in_reply_to_status_id_str
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
                    n = Gt.a.getOriginalTweet(e)
                  return t && (t.isStart || !n.in_reply_to_status_id_str)
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
                      return Ln
                    case 'EligibleWithPreviousCampaign':
                      return On
                    default:
                      return (
                        Object(me.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        Ln
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
                        Object(me.a)(
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
                    n = this.props,
                    a = n.conversationPosition,
                    r = n.injectedFeedbackItem,
                    i = n.isFocal,
                    l = n.onUndoTopicNotInterestedClick,
                    c = n.promotedContent,
                    s = n.socialContext,
                    d = n.topic
                  if (!n.withSocialContext || !s || Qt.a.isPromoted(c)) return null
                  var u = this.context.featureSwitches,
                    p = a && !this._getIsConversationStart(),
                    h = s.contextType,
                    m = s.isSelfRetweet,
                    f = s.landingUrl,
                    b = s.name,
                    v = s.screenName,
                    g = s.text,
                    w = s.topicContext,
                    y = f ? Object(Y.b)(f) : void 0
                  if (
                    w &&
                    d &&
                    (function (e) {
                      var t = e.featureSwitches,
                        n = e.isExpanded,
                        a = e.topic,
                        r = e.topicContext
                      return (
                        Object(fn.c)(r) &&
                        n &&
                        a.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in gn) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: u, isExpanded: i, topic: d, topicContext: w })
                  )
                    return E.a.createElement(wn, { onUndoTopicNotInterestedClick: l })
                  var _ = {
                      contextType: h,
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
                              n = e.featureSwitches,
                              a = e.iconSize,
                              r = e.injectedFeedbackItem,
                              i = e.isExpanded,
                              o = e.socialContext,
                              l = e.topic,
                              c = e.withLeftPadding,
                              s = o.contextType,
                              d = o.landingUrl,
                              u = o.topicContext,
                              p = d ? Object(Y.b)(d) : void 0,
                              h = u && Object(fn.b)(u),
                              m = u && Object(fn.c)(u),
                              f = n.isTrue('media_edge_to_edge_content_enabled'),
                              b = f ? ve.a.TextOnly : ve.a.Topic,
                              v =
                                null == r || null === (t = r.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              g = u ? Object(pn.a)(u) : void 0,
                              w = null != u && u.bannerText ? E.a.createElement(C.a, u.bannerText) : o.text
                            if (h && n.getStringValue('topics_context_controls_followed_variation') in gn) {
                              var y = gn[n.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: a,
                                contextType: b,
                                rightControl: E.a.createElement(yn, {
                                  bannerText: o.topicContext && o.topicContext.bannerText,
                                  label: y,
                                  link: p,
                                  linkText: o.topicContext && o.topicContext.linkText,
                                  topic: l,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: g,
                                text: w,
                              }
                            }
                            if (m) {
                              if (n.getStringValue('topics_context_controls_implicit_variation') in gn) {
                                var _,
                                  T = gn[n.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: a,
                                  contextType: b,
                                  rightControl: E.a.createElement(yn, {
                                    bannerText: o.topicContext && o.topicContext.bannerText,
                                    label: T,
                                    link: p,
                                    linkText: null === (_ = o.topicContext) || void 0 === _ ? void 0 : _.linkText,
                                    onNotInterestedPress: v,
                                    topic: l,
                                    withRightControl: n.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: g,
                                  text: w,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var I = E.a.createElement(_n, { isExpanded: i, onNotInterestedPress: v, topic: l })
                              return i
                                ? {
                                    bottomControl: I,
                                    contextType: s,
                                    iconSize: 'xLarge',
                                    iconStyle: En.iconStyle,
                                    textColor: 'text',
                                    textSize: 'headline1',
                                    text: o.text,
                                    topicData: void 0,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                                : {
                                    contextType: s,
                                    iconSize: a,
                                    iconStyle: En.iconStyle,
                                    rightControl: I,
                                    topicData: g,
                                    text: o.text,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                            }
                            return { contextType: s, iconSize: a, text: o.text, withLeftPadding: c }
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
                    be.a,
                    o()({}, T, {
                      link: y,
                      nativeID: t,
                      onClick: h === ve.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: b, screenName: v, isSelfRetweet: m },
                      style: Bn.socialContext,
                      testID: ye,
                      weight: 'bold',
                    }),
                  )
                },
              },
              {
                key: '_renderReplyContext',
                value: function (e) {
                  var t,
                    n = e.nativeID,
                    a = this.props,
                    r = a.conversationPosition,
                    i = a.conversationTreeMetadata,
                    o = a.isFocal,
                    l = a.onReplyContextClick,
                    c = a.replyContext,
                    s = a.tweet,
                    d = Gt.a.getOriginalTweet(s),
                    u = d.self_thread
                  return this._shouldShowSelfThread() ||
                    c !== cn.a.ReplyContextTypes.Isolated ||
                    !d.in_reply_to_status_id_str ||
                    (i && !o) ||
                    (u && r && !r.isStart) ||
                    (u && o)
                    ? null
                    : E.a.createElement(cn.a, {
                        displayTextRange: d.display_text_range,
                        inReplyToName: d.in_reply_to_name,
                        inReplyToScreenName: d.in_reply_to_screen_name,
                        inReplyToStatusIdStr: d.in_reply_to_status_id_str,
                        inReplyToUserIdStr: d.in_reply_to_user_id_str,
                        nativeID: n,
                        onClick: l,
                        style: [Bn.replyContext, o && Bn.replyContextBig],
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
                    n = e.tweet
                  return t
                    ? E.a.createElement(
                        I.a,
                        { style: Bn.actionBarWithInlineReply },
                        E.a.createElement(le.a, { focalTweet: n, isExpanded: !0, readerModeAvailable: !!t }),
                      )
                    : null
                },
              },
              {
                key: '_renderTweetActions',
                value: function (e) {
                  var t = e.actionSize,
                    n = e.displayStyle,
                    a = e.nativeID,
                    r = e.style,
                    i = e.withAnalyticsAction,
                    o = e.withCount,
                    l = this.props,
                    c = l.allowDownvote,
                    s = l.bookmarkFolderId,
                    d = l.contextTweet,
                    u = l.enableKeyboardShortcuts,
                    p = l.forwardPivotInfo,
                    h = l.onLikeSuccess,
                    m = l.onReplyPress,
                    f = l.promotedContent,
                    b = l.tweet,
                    v = l.withActionsDisabled,
                    g = l.withRemoveFromBookmarks
                  return this.props.withActions
                    ? E.a.createElement(Ze.a, {
                        actionSize: t,
                        allowDownvote: c,
                        bookmarkFolderId: s,
                        displayStyle: n,
                        enableKeyboardShortcuts: u,
                        forwardPivotInfo: b.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: a,
                        onLikeSuccess: h,
                        onReplyPress: m,
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
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.promotedContent,
                    i = t.tweet,
                    o = t.withAvatarLink,
                    l = t.withUserAvatar,
                    c = t.withUserHoverCard,
                    s = t.withUserPresence,
                    d = Gt.a.getOriginalTweet(i).user,
                    u = Gt.a.getOriginalTweet(i).user.id_str
                  return l
                    ? E.a.createElement(Kt, {
                        avatarRef: this._defaultInlinePromptRef,
                        nativeID: e,
                        onClick: n,
                        onHoverCardScreenNameClick: a,
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
                    n = e.actionText,
                    a = e.children,
                    r = e.style,
                    i = this.props,
                    o = i.conversationTreeMetadata,
                    l = i.onClick
                  return E.a.createElement(
                    I.a,
                    { style: r },
                    E.a.createElement(
                      ne.a,
                      { actionLink: t, actionText: n, conversationTreeMetadata: o, inline: !0, onClick: l },
                      a,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e) {
                  var t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.isFocal,
                    r = t.onClick,
                    i = t.tweet,
                    o = Gt.a.getOriginalTweet(i),
                    l = e.richText
                  return o && e && l
                    ? E.a.createElement(
                        I.a,
                        { style: Bn.spacingVertical },
                        E.a.createElement(
                          ne.a,
                          {
                            actionLink: a ? void 0 : o.permalink,
                            actionText: a ? void 0 : xn,
                            conversationTreeMetadata: n,
                            inline: !0,
                            onClick: a ? void 0 : r,
                          },
                          E.a.createElement(C.a, { entities: l.entities, rtl: l.rtl, text: l.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Gt.a.getOriginalTweet(e),
                    n = t.extended_entities && t.extended_entities.media
                  return (
                    !!(n && n.length > 0) &&
                    n.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_quoteTweetHasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Gt.a.getOriginalTweet(e)
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
                    n = e.withRoundMediaCorners,
                    a = this.context.featureSwitches,
                    r = this.props.withActionsDisabled,
                    i = this.props,
                    o = i.enableKeyboardShortcuts,
                    l = i.forwardPivotInfo,
                    c = i.inlineCalloutInfo,
                    s = i.innerForwardPivotInfo,
                    d = i.isFocal,
                    u = i.linkableQuotedTweet,
                    p = i.onCardLinkClick,
                    h = i.onMediaClick,
                    m = i.onQuoteTweetClick,
                    f = i.preventVideoPlayback,
                    b = i.promotedContent,
                    v = i.quoteTweetSocialContextProps,
                    g = i.quotedTweetTombstoneInfo,
                    w = i.tweet,
                    y = i.withCardLinks,
                    _ = i.withInlineMedia,
                    C = i.withUserHoverCard,
                    T = d ? 'DETAIL' : 'TIMELINE',
                    I = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!qt.b.isDesktopOS() && !d,
                    S = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    x = Gt.a.getOriginalTweet(w)
                  return (
                    (r = r || Object($e.b)(a, x, $e.a.VoteOnPoll)),
                    E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(sn.a, {
                        cardCacheLocationKey: T,
                        displayMediaMetadata: d,
                        enableKeyboardShortcuts: o,
                        forwardPivotInfo: w.softIntervention || l,
                        inlineCalloutInfo: c,
                        innerForwardPivotInfo: s,
                        isMediaMaxHeightEnabled: I,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: T,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: h,
                        onQuoteTweetClick: m,
                        preventVideoPlayback: f,
                        promotedContent: b,
                        quoteTweetSingleImageMinAspectRatio: Sn,
                        quoteTweetSocialContextProps: v,
                        quotedTweetTombstoneInfo: g,
                        renderQuoteTweetTombstone: function (e) {
                          return E.a.createElement(oe, e)
                        },
                        singleImageMaxAspectRatio: In,
                        singleImageMinAspectRatio: d ? 0.1 : Sn,
                        tweet: w,
                        withActionsDisabled: r,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: y,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !d && Gt.a.hasMedia(x, !_),
                        withMediaTagsIcon: d,
                        withQuoteTweetHeaderLinks: !K.canUseDOM,
                        withQuoteTweetLink: u,
                        withQuoteTweetMedia: _,
                        withReactions: S,
                        withRoundMediaCorners: n,
                        withTweetMedia: _,
                        withUserHoverCard: C,
                      }),
                      this._renderBirdwatchPivot(),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(Pn, 'contextType', P.a),
        y()(Pn, 'displayName', 'Tweet'),
        y()(Pn, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: Tn.a,
          onModeratedIconClick: Tn.a,
          onModeratedIconShown: Tn.a,
          replyContext: cn.a.ReplyContextTypes.Isolated,
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
      var Bn = O.a.create(function (e) {
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
          tweetActivityPromoteButton: { marginVertical: e.spaces.space8 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedDetails: { marginTop: e.spaces.space4 },
          promotionStatus: { marginTop: e.spaces.space12 },
          socialContext: { marginBottom: e.spaces.space4, marginTop: '-'.concat(e.spaces.space4) },
          spacingVertical: { marginVertical: e.spaces.space4 },
          followTopicButton: { justifyContent: 'center' },
          expandedTweetText: { marginTop: e.spaces.space12 },
          footerContainer: { marginVertical: e.spaces.space16 },
          footerContent: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          footerIcons: { flexDirection: 'row' },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
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
      t.b = Object(X.a)(Pn)
    },
    'EQ/a': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    'Ey+e': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('ddV6'),
        c = n.n(l),
        s = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('z84I'), n('ho0z'), n('ERkP'), n('AOWc')),
        d = n('6/RC'),
        u = n('E6XO'),
        p = n('sXY3'),
        h = n('tn7R'),
        m = n('+d3d'),
        f = n('oECP'),
        b = n('fs1G'),
        v = {},
        g = 0,
        w = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        y = function () {
          Object(p.a)(v).forEach(function (e, t) {
            var n = c()(e, 2),
              a = n[0],
              r = n[1],
              i = Object(h.a)(r),
              o = i.length
            i.forEach(function (e) {
              Object(p.a)(w).map(function (t) {
                var n = c()(t, 2),
                  r = n[0],
                  i = c()(n[1], 2),
                  l = i[0],
                  s = i[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(o) &&
                  l in e &&
                  s in e &&
                  Object(u.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, r),
                    { duration_ms: e[l] - e[s] },
                  )
              })
            })
          }),
            Object(u.a)(),
            (v = {})
        },
        _ = Object(m.a)(y, 2e4) || y,
        E = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Object(s.a)(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((g += 1), (a = e.__lifecycleIdentifier = g)),
            (v[n] && v[n][a]) || (v[n] = o()(o()({}, v[n]), {}, r()({}, a, {}))),
            [n, a]
          )
        },
        C = function (e, t, n, a) {
          v[e][t][n] = a
        }
      t.a = d.canUseDOM
        ? function (e) {
            var t = {
              UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || b.a,
              componentDidMount: e.prototype.componentDidMount || b.a,
              UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || b.a,
              componentDidUpdate: e.prototype.componentDidUpdate || b.a,
              componentWillUnmount: e.prototype.componentWillUnmount || b.a,
            }
            return (
              (e.prototype.UNSAFE_componentWillMount = function () {
                for (
                  var e = E(this, !0), n = c()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.UNSAFE_componentWillMount.apply(this, o), C(a, r, 'willMount', Date.now())
              }),
              (e.prototype.componentDidMount = function () {
                for (
                  var e = E(this), n = c()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.componentDidMount.apply(this, o), C(a, r, 'didMount', Date.now()), _()
              }),
              (e.prototype.UNSAFE_componentWillUpdate = function () {
                for (
                  var e = E(this, !0), n = c()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.UNSAFE_componentWillUpdate.apply(this, o), C(a, r, 'willUpdate', Date.now())
              }),
              (e.prototype.componentDidUpdate = function () {
                for (
                  var e = E(this), n = c()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.componentDidUpdate.apply(this, o), C(a, r, 'didUpdate', Date.now()), _()
              }),
              (e.prototype.componentWillUnmount = function () {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                t.componentWillUnmount.apply(this, n), _()
              }),
              e
            )
          }
        : f.a
    },
    'IMA+': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        d = n.n(s),
        u = n('5Yy7'),
        p = n.n(u),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        b = n.n(f),
        v = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        g = n('ERkP'),
        w = n.n(g),
        y = n('TIdA'),
        _ = n('t62R'),
        E = n('5mJL'),
        C = n('DNho'),
        T = n('nBUg'),
        I = n('qjak'),
        S = n('ir4X'),
        x = n('htQn'),
        k = n('e5HP'),
        A = n('FBXD'),
        L = n('Nqmc'),
        O = n('rHpw'),
        P = n('jhWN'),
        B = n('1I0O'),
        R = n('pBrB'),
        M = n('jV+4'),
        D = n('MWbm'),
        F = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        N = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        H = y.a.createLayoutCache(),
        U = { viewType: 'user_cell' },
        j = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(d()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.badgeContext,
                  a = t.disabledMessage,
                  r = t.displayNameLabel,
                  i = t.isBlocking,
                  o = t.isDisabled,
                  l = t.isFollowedBy,
                  c = t.isProtected,
                  s = t.isVerified,
                  d = t.name,
                  u = t.onScreenNameClick,
                  p = t.promotedContent,
                  h = t.promotedItemType,
                  m = t.screenName,
                  f = t.screenNameSuffix,
                  b = t.translatorType,
                  v = t.withFollowsYou,
                  g = t.withLink,
                  y = w.a.createElement(M.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: c,
                    isVerified: s,
                    name: d,
                    onLinkClick: u,
                    promotedContent: h === F.TWEET ? p : void 0,
                    screenName: m,
                    screenNameSuffix: f,
                    translatorType: b,
                    withFollowsYou: v && l,
                    withHoverCard: !i && !o && g,
                    withLink: !o && g,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? w.a.createElement(
                      D.a,
                      { style: z.disabledMessageContainer },
                      y,
                      w.a.createElement(_.b, { color: 'gray700' }, a),
                    )
                  : y
              }),
              b()(d()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  a = t.displayMode,
                  r = t.socialContext
                return r
                  ? w.a.createElement(T.b.UseProps, null, function (e) {
                      return w.a.createElement(L.a, {
                        avatarSize: n,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: z.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== N.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              b()(d()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(I.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = n.Icon,
                  r = n.text
                return t
                  ? w.a.createElement(
                      D.a,
                      { style: z.userTypeaheadSocialContext },
                      w.a.createElement(D.a, { style: z.userTypeaheadSocialContextIcon }, a),
                      w.a.createElement(
                        _.b,
                        { color: 'gray700', numberOfLines: 1, style: z.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              b()(d()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? w.a.createElement(S.a, { label: t }) : null
              }),
              b()(d()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [N.UserDetailed, N.UserConcise].indexOf(t)
              }),
              b()(d()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              b()(
                d()(e),
                '_handleClick',
                Object(A.a)(function (t) {
                  var n = e.props.onCellClick
                  t.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.accessibilityState,
                    a = e.avatarDecoration,
                    i = e.avatarSize,
                    o = e.avatarUri,
                    l = e.bottomControl,
                    c = e.decoration,
                    s = e.displayMode,
                    d = e.isBlocking,
                    u = e.isDisabled,
                    p = e.onAvatarClick,
                    h = e.onCellClick,
                    m = e.onScreenNameClick,
                    f = e.presenceIndicator,
                    b = e.promotedContent,
                    g = e.promotedItemType,
                    y = e.screenName,
                    _ = e.style,
                    T = e.testID,
                    I = e.userId,
                    S = e.withDarkerInteractiveBackground,
                    A = e.withInteractiveStyling,
                    L = e.withLink,
                    O = e.withUsernameCenterAligned,
                    R = L && !d,
                    M = s === N.UserCompact || O,
                    j = s === N.ExperimentalUserTypeahead,
                    W =
                      b && g === F.USER && 'earned' !== (b.disclosure_type && b.disclosure_type.toLowerCase())
                        ? w.a.createElement(k.a, { contentAuthorId: I, promotedContent: b, style: z.promotedIndicator })
                        : null,
                    V = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: H,
                      onClick: p,
                      onHoverCardScreenNameClick: m,
                      promotedContent: b,
                      screenName: y,
                      style: z.avatar,
                      uri: o,
                      withHoverCard: R,
                      withLink: L,
                    },
                    K = w.a.createElement(C.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return f
                        ? w.a.createElement(B.a, r()({}, V, f, { size: t }))
                        : w.a.createElement(P.a, r()({ size: t }, V))
                    }),
                    q = n && 'boolean' == typeof n.checked,
                    G = void 0 !== h,
                    Q = (q ? 'radio' : G && 'button') || 'listitem',
                    X = this._renderUserName(),
                    Y = this._renderHighlightedUserLabel(),
                    Z = this._renderBio(),
                    J = Y || Z || W || l,
                    $ = w.a.createElement(
                      w.a.Fragment,
                      null,
                      Y,
                      Z,
                      W,
                      l ? w.a.createElement(D.a, { style: z.bottomControl }, l) : null,
                    )
                  return w.a.createElement(
                    v.a,
                    { behavioralEventContext: U },
                    w.a.createElement(
                      x.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: Q,
                        accessibilityState: n,
                        disabled: !!u,
                        focusable: q || G,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: u ? 'none' : void 0,
                        style: [z.root, _],
                        testID: T,
                        withDarkerInteractiveBackground: S,
                        withInteractiveStyling: null != A ? A : !!h,
                      },
                      j ? null : this._renderSocialContext(),
                      w.a.createElement(
                        E.a,
                        {
                          avatarCell: K,
                          avatarCellStyle: [z.avatarColumn, M && z.bodyColumnCentered],
                          avatarSize: j ? 'xxxLarge' : i,
                          cellStyle: [z.bodyColumn, M && z.bodyColumnCentered],
                        },
                        w.a.createElement(D.a, { style: z.body }, X, c),
                        M ? null : $,
                        j ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      J && M
                        ? w.a.createElement(
                            E.a,
                            { avatarCell: null, avatarCellStyle: z.avatarColumn, cellStyle: z.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.displayMode,
                    a = e.entities,
                    r = e.userId,
                    i = e.withheldDescription,
                    o = e.withheldEntities
                  return a && t && this._isEligibleForBio()
                    ? w.a.createElement(R.a, {
                        description: t,
                        entities: a,
                        isConcise: n === N.UserConcise,
                        style: z.bio,
                        userId: r,
                        withheldDescription: i,
                        withheldEntities: o,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(j, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var z = O.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      t.a = j
    },
    JUsM: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('uFXj'), n('2G9S'), n('ERkP')),
        o = n.n(i),
        l = n('t62R'),
        c = n('rHpw'),
        s = n('shC7'),
        d = n('MWbm'),
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
          n = e.primaryAction,
          a = e.secondaryAction,
          i = e.text,
          c = o.a.useState(void 0),
          p = r()(c, 2),
          h = p[0],
          m = p[1],
          f = s.a.getConstants().isRTL,
          b = o.a.useRef(0),
          v = o.a.useRef(0),
          g = (function () {
            if (null != t && t.current && h) {
              var e = t.current.getBoundingClientRect(),
                n = e.left,
                a = e.top,
                r = e.width
              b.current = a
              var i = n + r / 2 - h
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
                n = t.left,
                a = t.top,
                r = t.width
              ;(v.current = a), m(n + r / 2)
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
          o.a.createElement(d.a, { style: u.actionsContainer }, n, a),
        )
      }
    },
    KqB4: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], a = (0, r.default)(e, t), i = 0; i < a.length; i++) n.push(a[i].url)
          return n
        })
      var r = a(n('vwfs'))
      e.exports = t.default
    },
    Ku87: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchAboutScreen', function () {
          return U
        })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n.p + 'birdwatch_banner.3097f8b5.png',
        l = n('vZpt'),
        c = n('L5MV'),
        s = n('3XMw'),
        d = n.n(s),
        u = n('yoO3'),
        p = n('7JQg'),
        h = n('VS6U'),
        m = n('MWbm'),
        f = n('t62R'),
        b = n('h0NW'),
        v = n('/yvb'),
        g = n('rHpw'),
        w = n('yiKp'),
        y = n.n(w),
        _ = n('Lsrn'),
        E = n('k/Ka'),
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
        I = n('sUoZ'),
        S = n('fBGZ'),
        x = d.a.b721eb37,
        k = d.a.b5711f09,
        A = d.a.df4bead0,
        L = d.a.jdb52860,
        O = d.a.b468ea24,
        P = d.a.b25fcbe4,
        B = d.a.f6d0427f,
        R = d.a.c8c2c891,
        M = d.a.g98ea6c0,
        D = d.a.ff3e0be2,
        F = d.a.i859a9d3,
        N = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        H = { page: 'birdwatch', section: 'about' },
        U = function (e) {
          var t = e.history,
            n = r.a.useContext(i.a).featureSwitches,
            a = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(m.a, { style: [j.header, { backgroundImage: 'url('.concat(o, ')') }] }),
              r.a.createElement(
                m.a,
                { style: j.content },
                r.a.createElement(f.b, { size: 'title4', style: j.textSection, weight: 'heavy' }, k),
                r.a.createElement(f.b, { color: 'gray700', style: j.textSection }, A),
                r.a.createElement(b.a, z),
              ),
              r.a.createElement(m.a, { style: j.learnMore }, r.a.createElement(f.b, { link: N }, F)),
              !n.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                r.a.createElement(
                  m.a,
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
              r.a.createElement(h.a, {
                TabBar: c.a,
                history: t,
                logoButton: r.a.createElement(r.a.Fragment, null),
                primaryContent: a,
                sidebarContent: r.a.createElement(l.a, null),
                title: x,
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
          accessibilityLabel: x,
          containerStyle: j.infoItemContainer,
          items: [
            { label: L, decoration: r.a.createElement(T, { style: j.icon }), description: O },
            { label: P, decoration: r.a.createElement(I.a, { style: j.icon }), description: B },
            { label: R, decoration: r.a.createElement(S.a, { style: j.icon }), description: M },
          ],
        }
      t.default = U
    },
    L5MV: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        v = n('MvLc'),
        g = n('rxPX'),
        w = n('0KEI'),
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
        _ = n('3XMw'),
        E = n.n(_),
        C = n('gASw'),
        T = n('v6aA'),
        I = n('C6f5'),
        S = n('2qZs'),
        x = n('PU7B'),
        k = n('YI7k'),
        A = n('boUI'),
        L = n('6ZHn'),
        O = n('89Im'),
        P = n('yiKp'),
        B = n.n(P),
        R = n('Lsrn'),
        M = n('k/Ka'),
        D = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(M.a)(
            'svg',
            B()(
              B()({}, e),
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
      D.metadata = { width: 24, height: 24 }
      var F = D,
        N = n('6s7X'),
        H = n('Nh1N'),
        U = E.a.d5b2da0a,
        j = E.a.b5711f09,
        z = E.a.ha8209bb,
        W = E.a.ff692d63,
        V = E.a.cb1adfa0,
        K = E.a.b721eb37,
        q = '/i/birdwatch',
        G = function (e, t) {
          return (
            t.pathname === q ||
            t.pathname === ''.concat(q, '/new') ||
            t.pathname === ''.concat(q, '/needs_your_help') ||
            t.pathname === ''.concat(q, '/rated_helpful')
          )
        },
        Q = function () {
          return !1
        },
        X = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_isOwnProfilePageActive', function (t, n) {
                var a = e.props.userAlias
                return !!a && n.pathname === ''.concat(q, '/u/').concat(a)
              }),
              m()(c()(e), '_handleTabClickFactory', function (t) {
                return function (n) {
                  e.props.analytics.scribe({ element: t, action: 'navigate' })
                }
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    n = void 0 === t ? 'horizontal' : t,
                    a = e.wideMode,
                    r = void 0 !== a && a,
                    i = e.withLabel,
                    o = void 0 !== i && i,
                    l = this.context.featureSwitches
                  return b.a.createElement(
                    I.b,
                    { layout: n, primaryLabel: U, wideMode: r },
                    b.a.createElement(C.a, {
                      accessibilityLabel: j,
                      isActive: Q,
                      label: j,
                      layout: n,
                      onClick: this._handleTabClickFactory('home'),
                      path: q,
                      renderIcon: Object(I.c)(S.a, S.a, n),
                      withLabel: o,
                    }),
                    b.a.createElement(C.a, {
                      accessibilityLabel: z,
                      isActive: G,
                      label: z,
                      layout: n,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: q,
                      renderIcon: Object(I.c)(x.a, k.a, n),
                      withLabel: o,
                    }),
                    l.isTrue('responsive_web_birdwatch_note_writing_enabled')
                      ? b.a.createElement(C.a, {
                          accessibilityLabel: W,
                          isActive: this._isOwnProfilePageActive,
                          label: W,
                          layout: n,
                          onClick: this._handleTabClickFactory('user_notes'),
                          path: ''.concat(q, '/u/me'),
                          renderIcon: Object(I.c)(A.a, L.a, n),
                          withLabel: o,
                        })
                      : null,
                    b.a.createElement(C.a, {
                      accessibilityLabel: V,
                      label: V,
                      layout: n,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: ''.concat(q, '/download-data'),
                      renderIcon: Object(I.c)(O.a, F, n),
                      withLabel: o,
                    }),
                    b.a.createElement(C.a, {
                      accessibilityLabel: K,
                      label: K,
                      layout: n,
                      onClick: this._handleTabClickFactory('about'),
                      path: ''.concat(q, '/about'),
                      renderIcon: Object(I.c)(N.a, H.a, n),
                      withLabel: o,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      m()(X, 'contextType', T.a)
      var Y = y(X)
      t.a = Y
    },
    LWCC: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        b = n.n(f),
        v = n('Zejx'),
        g = n('rxPX'),
        w = n('0KEI'),
        y = Object(g.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: v.a.follow,
              unfollow: v.a.unfollow,
            }
          })
          .withAnalytics(),
        _ = n('CGyZ'),
        E = n('PbbS'),
        C = n('3XMw'),
        T = n.n(C),
        I = n('sUoZ'),
        S = n('Tp1h'),
        x = n('Jkc4'),
        k = n('TnY3'),
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
        B = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              m()(c()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case E.a.Favorite:
                  case E.a.Star:
                  case E.a.Interested:
                    return b.a.createElement(I.a, null)
                  case E.a.FollowTopic:
                  case E.a.Default:
                  default:
                    return
                }
              }),
              m()(c()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? b.a.createElement(b.a.Fragment, null) : void 0
              }),
              m()(c()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case E.a.FollowTopic:
                    return { follow: A.follow, unfollow: A.unfollow, following: A.following }
                  case E.a.Favorite:
                    return {
                      follow: O.follow,
                      unfollow: O.unfollow,
                      following: O.following,
                      confirmationHeadline: O.confirmationHeadline && O.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: O.confirmationSheetText,
                    }
                  case E.a.Star:
                    return {
                      follow: L.follow,
                      unfollow: L.unfollow,
                      following: L.following,
                      confirmationHeadline: L.confirmationHeadline && L.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: L.confirmationSheetText,
                    }
                  case E.a.Interested:
                    return {
                      follow: P.follow,
                      unfollow: P.unfollow,
                      following: P.following,
                      confirmationHeadline: P.confirmationHeadline && P.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: P.confirmationSheetText,
                    }
                  case E.a.Default:
                  default:
                    return
                }
              }),
              m()(c()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.educateOnFollow,
                  r = t.follow,
                  i = t.history,
                  o = t.topic
                r(o.id).catch(n()),
                  e._handleScribe('follow'),
                  a && o && i.push({ pathname: '/i/topics/education', state: { topicName: o.name } })
              }),
              m()(c()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.topic
                ;(0, t.unfollow)(a.id).catch(n()), e._handleScribe('unfollow')
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescribedBy,
                    a = t.isTransparent,
                    r = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    o = t.size,
                    l = t.style,
                    c = t.textMode,
                    s = t.topic,
                    d = s.following,
                    u = s.name
                  return b.a.createElement(x.a, { customText: u, displayMode: S.a.topic }, function (t) {
                    return b.a.createElement(_.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(c),
                        followingIcon: e._getFollowingButtonIcon(c),
                      },
                      buttonText: e._getButtonText(c),
                      displayMode: e._getDisplayMode(c),
                      isFollowing: d,
                      isTransparent: a,
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
            n
          )
        })(b.a.Component)
      m()(B, 'defaultProps', { size: 'small', textMode: E.a.Default })
      t.a = Object(k.a)(y(B))
    },
    MvLc: function (e, t, n) {
      'use strict'
      n.d(t, 'r', function () {
        return R
      }),
        n.d(t, 'x', function () {
          return F
        }),
        n.d(t, 'o', function () {
          return N
        }),
        n.d(t, 'u', function () {
          return H
        }),
        n.d(t, 's', function () {
          return U
        }),
        n.d(t, 'y', function () {
          return z
        }),
        n.d(t, 'v', function () {
          return W
        }),
        n.d(t, 'n', function () {
          return V
        }),
        n.d(t, 'p', function () {
          return K
        }),
        n.d(t, 'w', function () {
          return q
        }),
        n.d(t, 't', function () {
          return G
        }),
        n.d(t, 'q', function () {
          return Q
        }),
        n.d(t, 'k', function () {
          return X
        }),
        n.d(t, 'g', function () {
          return Y
        }),
        n.d(t, 'h', function () {
          return Z
        }),
        n.d(t, 'l', function () {
          return J
        }),
        n.d(t, 'j', function () {
          return $
        }),
        n.d(t, 'f', function () {
          return ee
        }),
        n.d(t, 'm', function () {
          return te
        }),
        n.d(t, 'd', function () {
          return ne
        }),
        n.d(t, 'b', function () {
          return ae
        }),
        n.d(t, 'z', function () {
          return re
        }),
        n.d(t, 'c', function () {
          return ie
        }),
        n.d(t, 'e', function () {
          return oe
        }),
        n.d(t, 'a', function () {
          return le
        }),
        n.d(t, 'i', function () {
          return ce
        })
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('KEM+'),
        o = n.n(i),
        l = n('yiKp'),
        c = n.n(l),
        s = (n('yH/f'), n('KOtZ'), n('7x/C'), n('z84I'), n('LW0h'), n('JtPf'), n('/kEJ')),
        d = n('kGix'),
        u = n('Ssj5'),
        p = n('oEOe'),
        h = n('3A2y'),
        m = n('YeIG'),
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
        I = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/CREATE_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/CREATE_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/CREATE_NOTE_FAILURE',
        }),
        x = Object.freeze({
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
            case S.SUCCESS:
              var n,
                a = null === (n = t.payload) || void 0 === n ? void 0 : n.result
              if (a) {
                var i,
                  l,
                  s =
                    null === (i = t.payload) || void 0 === i || null === (l = i.entities) || void 0 === l
                      ? void 0
                      : l.birdwatchNotes[a],
                  u = s.tweet.rest_id
                return c()(
                  c()({}, e),
                  {},
                  {
                    notes: c()(c()({}, e.notes), {}, o()({}, a, s)),
                    tweetNotes: c()(
                      c()({}, e.tweetNotes),
                      {},
                      o()(
                        {},
                        u,
                        c()(c()({}, e.tweetNotes && e.tweetNotes[u]), {}, { ownNoteId: a, fetchStatus: d.a.LOADED }),
                      ),
                    ),
                  },
                )
              }
              return e
            case g.SUCCESS:
              var p,
                b = null === (p = t.meta) || void 0 === p ? void 0 : p.note_id
              return b ? c()(c()({}, e), {}, { notes: Object(h.a)(e.notes, b) }) : e
            case w.SUCCESS:
              var v,
                E = null === (v = t.meta) || void 0 === v ? void 0 : v.note_id,
                B = t.payload
              return E
                ? c()(
                    c()({}, e),
                    {},
                    { notes: c()(c()({}, e.notes), {}, o()({}, E, c()(c()({}, e.notes[E]), {}, { rating: B }))) },
                  )
                : e
            case y.SUCCESS:
              var R,
                M = null === (R = t.meta) || void 0 === R ? void 0 : R.note_id
              if (M) {
                var D = e.notes[M],
                  F = (D.rating, r()(D, f))
                return c()(c()({}, e), {}, { notes: c()(c()({}, e.notes), {}, o()({}, M, c()({}, F))) })
              }
              return e
            case x.REQUEST:
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
            case x.FAILURE:
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
            case x.SUCCESS:
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
                  Y = X.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  Z = X.map(function (e) {
                    return e.rest_id
                  }),
                  J = {}
                return (
                  (J.ids = Z),
                  (J.fetchStatus = d.a.LOADED),
                  null != Q && Q.ownNoteId && (J.ownNoteId = null == Q ? void 0 : Q.ownNoteId),
                  t.meta
                    ? c()(
                        c()({}, e),
                        {},
                        { notes: c()(c()({}, e.notes), Y), tweetNotes: c()(c()({}, e.tweetNotes), {}, o()({}, K, J)) },
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
                ne = null === (te = t.meta) || void 0 === te ? void 0 : te.alias
              return ne
                ? c()(
                    c()({}, e),
                    {},
                    {
                      contributor: c()(
                        c()({}, e.contributor),
                        {},
                        o()({}, ne, c()(c()({}, e.contributor[ne]), {}, { fetchStatus: d.a.FAILED })),
                      ),
                    },
                  )
                : e
            case k.SUCCESS:
              var ae,
                re,
                ie = null === (ae = t.meta) || void 0 === ae ? void 0 : ae.alias,
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
                  he = {
                    helpful: null == se ? void 0 : se.ratings_received_helpful_count,
                    notHelpful: null == se ? void 0 : se.ratings_received_not_helpful_count,
                    somewhatHelpful: null == se ? void 0 : se.ratings_received_somewhat_helpful_count,
                  },
                  me = (null == se ? void 0 : se.badges) || []
                return c()(
                  c()({}, e),
                  {},
                  {
                    notes: c()(c()({}, e.notes), ue),
                    contributor: c()(
                      c()({}, e.contributor),
                      {},
                      o()({}, oe, { badges: me, notes: pe, ratings: he, fetchStatus: d.a.LOADED }),
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
            case I.SUCCESS:
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
              var Ie = t.payload
              return Ie ? c()(c()({}, e), {}, { publicData: Ie }) : e
            case _.SUCCESS:
              var Se,
                xe = null === (Se = t.meta) || void 0 === Se ? void 0 : Se.alias
              return c()(c()({}, e), {}, { contributor: c()(c()({}, e.contributor), {}, { ownAlias: xe }) })
            case O:
              var ke = t.payload
              if (Object(m.a)(ke)) return e
              var Ae = ke.updates,
                Le = ke.tweetId
              return c()(c()({}, e), {}, { drafts: c()(c()({}, e.drafts), {}, o()({}, Le, Ae)) })
            default:
              return e
          }
        }),
      )
      var B = [],
        R = function (e, t) {
          return e.birdwatchNotes.notes[t]
        },
        M = function (e, t) {
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ids
        },
        D = function (e, t) {
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ownNoteId
        },
        F = function (e, t) {
          if (!t) return null
          var n = D(e, t)
          return n ? R(e, n) : null
        },
        N = function (e, t) {
          var n, a
          if (t)
            return null === (n = e.birdwatchNotes) || void 0 === n || null === (a = n.contributor[t]) || void 0 === a
              ? void 0
              : a.badges
        },
        H = function (e) {
          return e.birdwatchNotes.publicData
        },
        U = function (e, t) {
          var n = t ? M(e, t) : void 0
          if (n) {
            var a = D(e, t)
            return (
              a &&
                (n = n.filter(function (e) {
                  return e !== a
                })),
              n
                .map(function (t) {
                  return R(e, t)
                })
                .filter(Boolean)
            )
          }
          return B
        },
        j = function (e, t) {
          var n = e.birdwatchNotes.contributor[t]
          return n ? n.notes : void 0
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
            var n = e.birdwatchNotes.contributor[t]
            return n ? n.ratings : void 0
          }
        },
        q = function (e, t) {
          var n = e.birdwatchNotes.tweetNotes[t]
          return n ? n.fetchStatus : d.a.NONE
        },
        G = function (e, t) {
          var n = e.birdwatchNotes.notes[t]
          return n ? n.fetchStatus : d.a.NONE
        },
        Q = function (e, t) {
          if (t) {
            var n = e.birdwatchNotes.drafts
            return n ? n[t] : void 0
          }
        },
        X = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!M(n(), e),
              i = q(n(), e) === d.a.LOADING
            return r || i
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
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
        Y = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!e && !!j(n(), e),
              i =
                (function (e, t) {
                  var n = e.birdwatchNotes.contributor[t]
                  return n ? n.fetchStatus : d.a.NONE
                })(n(), e) === d.a.LOADING
            return r || i
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
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
        Z = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!R(n(), e),
              i = G(n(), e) === d.a.LOADING
            return r || i
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
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
        J = function () {
          return function (e, t, n) {
            n.api
            return !!z(t())
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var a = n.api
                  return Object(p.b)(e, { request: a.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: T,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        $ = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(p.b)(e, { request: a.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: A,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        ee = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(p.b)(e, { request: a.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: I,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        te = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(p.b)(t, { request: r.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: _,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        ne = function (e) {
          return { meta: { note_id: e }, type: g.SUCCESS }
        },
        ae = function (e, t) {
          return function (n, a, r) {
            var i = r.api
            return Object(p.b)(n, { request: i.Birdwatch.createNote, params: { tweet_id: e, data: t } })({
              actionTypes: S,
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
          return function (n, a, r) {
            var i = r.api
            return Object(p.b)(n, { request: i.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: w,
              context: 'CREATE_RATING',
              meta: { note_id: e },
            })
          }
        },
        oe = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(p.b)(t, { request: r.Birdwatch.deleteRating, params: { note_id: e } })({
              actionTypes: y,
              context: 'DELETE_RATING',
              meta: { note_id: e },
            })
          }
        },
        le = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(p.b)(t, { request: r.Birdwatch.createAppeal, params: { note_id: e } })({
              actionTypes: E,
              context: 'CREATE_APPEAL',
              meta: { note_id: e },
            })
          }
        },
        ce = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(p.b)(e, { request: a.Birdwatch.fetchPublicData, params: {} })({
              actionTypes: C,
              context: 'FETCH_DATA',
              meta: {},
            })
          }
        }
    },
    NPGn: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return l
        })
      var a = n('3XMw'),
        r = n.n(a),
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
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('rHpw'),
        o = n('MWbm')
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
    Olb6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('5cUs'),
        c = n('wwsH'),
        s = o.a.d9fd5570,
        d = { viewType: 'hidden_replies' }
      t.a = function (e) {
        var t = e.link,
          n = e.onPress
        return r.a.createElement(c.a, {
          Icon: l.a,
          accessibilityLabel: s,
          activeColor: 'primary',
          behavioralEventContext: d,
          link: t,
          onPress: n,
        })
      }
    },
    PKU5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchNoteScreen', function () {
          return P
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('ZD0R'),
        c = (n('KqXw'), n('WNMA'), n('MvLc')),
        s = n('rxPX'),
        d = n('0KEI'),
        u = function (e, t) {
          return t.match.params.noteId
        },
        p = function (e, t) {
          return c.r(e, u(0, t))
        },
        h = function (e, t) {
          return c.t(e, u(0, t))
        },
        m = Object(s.a)()
          .propsFromState(function () {
            return { noteData: p, noteId: u, fetchStatus: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: c.h,
            }
          }),
        f = n('kGix'),
        b = n('jHSc'),
        v = n('3XMw'),
        g = n.n(v),
        w = n('0zXz'),
        y = n('aITJ'),
        _ = n('MWbm'),
        E = n('FIs5'),
        C = n('htQn'),
        T = n('rHpw'),
        I = n('Qwev'),
        S = g.a.c87f3cf8,
        x = g.a.i859a9d3,
        k = g.a.efd14e79,
        A = g.a.a5b19492,
        L = o.a.createElement(E.a, { buttonLink: '/i/birdwatch/about', buttonText: x, header: A }),
        O = w.a,
        P = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchOneNoteIfNeeded,
            a = e.fetchStatus,
            i = e.history,
            c = e.noteData,
            s = e.noteId,
            d = o.a.useState(c),
            u = r()(d, 2),
            p = u[0],
            h = u[1]
          o.a.useEffect(
            function () {
              s && n(s).catch(t())
            },
            [t, n, s],
          ),
            o.a.useEffect(
              function () {
                h(c)
              },
              [c],
            )
          var m = o.a.createElement(
            C.a,
            null,
            p && p.data_v1
              ? o.a.createElement(
                  _.a,
                  { style: B.contentWrapper },
                  o.a.createElement(l.a, {
                    handleDelete: function (e) {
                      h(null)
                    },
                    note: p,
                    showPivot: !0,
                    showTweet: !0,
                    withBorder: !0,
                  }),
                )
              : a === f.a.LOADING
              ? R
              : L,
          )
          return o.a.createElement(
            b.b,
            { history: i, renderHeader: y.b.isTwitterApp() ? O : void 0, title: S },
            o.a.createElement(_.a, { style: B.contentWrapper }, m),
          )
        },
        B = T.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        R = o.a.createElement(I.a, { accessibilityLabel: k, size: 'large', style: B.spinner }),
        M = m(P)
      t.default = M
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f'), n('ERkP')
      var a = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    QDet: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    Sksh: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('KEM+'),
        c = n.n(l),
        s = (n('+KXO'), n('849X'), n('TJCb'), n('SrIh')),
        d = n('M0jS'),
        u = n('+d3d'),
        p = n('VY6S'),
        h = (function () {
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
      t.a = new h()
    },
    TZwD: function (e, t, n) {
      'use strict'
      var a = n('EbOo'),
        r = n('u0B7'),
        i = n('24HD')
      t.a = function (e) {
        var t = e.addToast,
          n = e.behavioralEventEntityToken,
          o = e.block,
          l = e.createLocalApiErrorHandler,
          c = e.promotedContent,
          s = e.scribeAction,
          d = e.unblock,
          u = e.user,
          p = function () {
            d(u.id_str, { promotedContent: c }).catch(l(r.a)), s({ element: 'unblock' })
          },
          h = {
            user: u,
            source: i.k.TWEET,
            blockAction: function () {
              o(u.id_str, { promotedContent: c }).then(function () {
                t({
                  action: { label: i.l, onAction: p, behavioralEventViewType: 'unblock' },
                  behavioralEventEntityToken: n,
                  text: i.d,
                })
              }, l(a.a)),
                s({ element: 'block' })
            },
            unblockAction: p,
          }
        return Object(i.g)(h)
      }
    },
    UZjl: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('yiKp'),
        c = n.n(l),
        s = (n('hBpG'), n('7x/C'), n('ERkP')),
        d = n.n(s),
        u = n('es0u'),
        p = n('hqKg'),
        h = n('MDbM'),
        m = n('rxPX'),
        f = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        b = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        v = Object(p.createSelector)(f, b, function (e, t) {
          return t !== h.a.LOADED || (!!e && !!e.tabs)
        }),
        g = Object(m.a)()
          .propsFromState(function () {
            return { hasTabNavigation: v, pageConfiguration: f, initialFetchStatus: b }
          })
          .withAnalytics(),
        w = n('QIgh'),
        y = n('s14A'),
        _ = n('dwig'),
        E = (n('uFXj'), n('7JQg')),
        C = n('rHpw'),
        T = n('GKOv'),
        I = n('Rp9C'),
        S = n('Irs7')
      function x(e, t) {
        var n = Object(S.b)(),
          a = t || {},
          r = a.component,
          i = a.element,
          o = d.a.useMemo(
            function () {
              return { items: [I.a.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          d.a.useEffect(
            function () {
              n.scribe({ component: r, element: i, action: 'impression', data: o })
            },
            [o, r, i, n],
          ),
          { namespace: { component: r, element: i }, data: o }
        )
      }
      var k = n('MWbm')
      function A(e) {
        var t = e.header,
          n = t.clientEventInfo,
          a = t.displayType,
          r = t.facepile,
          i = t.landingContext,
          o = t.topicId,
          l = e.onHeaderVisible,
          c = x(o, n),
          s = c.data,
          u = c.namespace
        return d.a.createElement(
          k.a,
          { style: L.root },
          d.a.createElement(
            E.c,
            { data: s, namespace: u },
            d.a.createElement(T.a, {
              displayType: a,
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
      var L = C.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        O = n('3XMw'),
        P = n.n(O),
        B = (n('1t7P'), n('jQ/y'), n('ho0z'), n('zI2C')),
        R = n('v6aA'),
        M = n('Zejx'),
        D = function (e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return M.a.select(e, n)
        },
        F = Object(m.a)().propsFromState(function () {
          return { topic: D }
        }),
        N = n('PbbS'),
        H = n('LWCC'),
        U = n('IcAo'),
        j = n('rJoH'),
        z = n('I6Uj'),
        W = n('zfvc'),
        V = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        K = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        q = P.a.ed88e742
      var G = C.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        Q = F(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            n = e.isHeaderOffscreen,
            a = e.navBar.clientEventInfo,
            r = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            l = e.withOpenGraphMeta,
            c = d.a.useContext(R.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            s = x(t, a),
            u = s.data,
            p = s.namespace,
            h = Object(U.a)({}, r, p)
          return i
            ? d.a.createElement(
                E.c,
                { data: u, namespace: h },
                d.a.createElement(
                  d.a.Fragment,
                  null,
                  l
                    ? d.a.createElement(j.a, {
                        canonical: V(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? d.a.createElement(B.a, { deepLink: K(t) }) : null,
                  d.a.createElement(
                    k.a,
                    { style: G.rightControl },
                    d.a.createElement(
                      k.a,
                      { style: G.followButtonContainer },
                      d.a.createElement(
                        W.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        d.a.createElement(H.a, { size: 'medium', textMode: N.a.FollowTopic, topic: i }),
                      ),
                    ),
                    c ? d.a.createElement(z.a, { copyLinkShareLabel: q, scribeNamespace: h, url: V(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        X = n('yoO3'),
        Y = n('VrFO'),
        Z = n.n(Y),
        J = n('Y9Ll'),
        $ = n.n(J),
        ee = n('1Pcy'),
        te = n.n(ee),
        ne = n('5Yy7'),
        ae = n.n(ne),
        re = n('2VqO'),
        ie = n.n(re),
        oe = n('KEM+'),
        le = n.n(oe),
        ce = (n('2G9S'), n('v84o')),
        se = n('0KEI'),
        de = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        ue = function (e, t) {
          var n = t.selectedTabId,
            a = de(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        pe = Object(m.a)()
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
        he = n('doI8'),
        me = n('oQhu'),
        fe = n('fTQJ'),
        be = ['entityToken'],
        ve = pe(
          (function (e) {
            ae()(n, e)
            var t = ie()(n)
            function n() {
              var e
              Z()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                le()(te()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    n = t.analytics,
                    a = t.pageConfiguration,
                    r = t.selectedTab,
                    i = (null == r ? void 0 : r.scribeConfig) || (null == a ? void 0 : a.scribeConfig)
                  if (i) {
                    i.entityToken
                    return o()(i, be)
                  }
                  return n.contextualScribeNamespace
                }),
                le()(
                  te()(e),
                  '_getModule',
                  Object(me.a)(function (e, t, n, a) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(ce.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: a })
                      if (null != e && e.graphQLTimelineId) return Object(he.a)(e.graphQLTimelineId)
                    }
                    return n
                  }),
                ),
                le()(te()(e), '_getRefreshIntervalSecForCurrentTab', function () {
                  var t,
                    n = e.props,
                    a = n.pageConfiguration,
                    r = n.selectedTab,
                    i = null == a || null === (t = a.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (r) return r.refreshIntervalSec
                  if (i) {
                    var o,
                      l =
                        null == a || null === (o = a.tabs) || void 0 === o
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
              $()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      a = n.entryConfiguration,
                      r = n.initialModule,
                      i = n.pageConfiguration,
                      o = n.prerollDisplayLocation,
                      l = n.refreshControl,
                      c = n.renderEmptyState,
                      s = n.renderUnavailable,
                      u = n.selectedTab,
                      p = n.timelinePrefix,
                      h = n.title,
                      m = n.withoutHeadroom,
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
                      d.a.createElement(fe.a, {
                        behavioralEventContext: f,
                        entryConfiguration: a,
                        module: b,
                        pollingIntervalMsOverride: g,
                        prerollDisplayLocation: o,
                        refreshControl: l,
                        renderEmptyState: c,
                        renderUnavailable: s,
                        title: h,
                        withoutHeadroom: m,
                      }),
                    )
                  },
                },
              ]),
              n
            )
          })(d.a.Component),
        ),
        ge = (n('z84I'), n('+Kfv')),
        we = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        ye = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        _e = function (e, t) {
          var n = t.selectedTabId,
            a = ye(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        Ee = Object(m.a)()
          .propsFromState(function () {
            return { initialFetchStatus: we, pageConfiguration: ye, selectedTab: _e }
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
        Ce = n('Nhmk'),
        Te = n('k/OQ'),
        Ie = n('G8HL'),
        Se = ['entityToken'],
        xe = { viewType: 'controls' },
        ke = (function (e) {
          ae()(n, e)
          var t = ie()(n)
          function n() {
            var e
            Z()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              le()(te()(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchInitial,
                  i = t.pageConfiguration,
                  o = i ? i.scribeConfig : void 0
                return r().then(function (t) {
                  t.performed && n.scribe(c()(c()({}, e._getScribeNamespace(o)), {}, { action: 'get_initial' }))
                }, a(Ce.a))
              }),
              le()(te()(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.getTabLink,
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
                            n.scribe(
                              e._buildTabNamespace(e._getScribeNamespace(s), e._getScribeNamespace(t.scribeConfig)),
                            )
                          },
                          to: a(t.id),
                          token: null === (i = t.scribeConfig) || void 0 === i ? void 0 : i.entityToken,
                        }
                      )
                    })
                  return d.a.createElement(
                    ge.a,
                    { behavioralEventContext: xe },
                    d.a.createElement(Te.a, { links: u, visibleItemIndex: l }),
                  )
                }
                return null
              }),
              e
            )
          }
          return (
            $()(n, [
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
                  var n
                  return (
                    e && (n = e),
                    t && (n = c()(c()({}, n), t)),
                    c()(c()({}, n), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function (e) {
                  if (e) {
                    e.entityToken
                    return o()(e, Se)
                  }
                },
              },
            ]),
            n
          )
        })(d.a.Component),
        Ae = Ee(Object(Ie.a)(ke)),
        Le = n('VS6U'),
        Oe = n('5Y9N'),
        Pe = n('FIs5'),
        Be = n('cHvH'),
        Re = n('mw9i'),
        Me = ['entityToken'],
        De = ['entityToken'],
        Fe = P.a.e9f1fbcb,
        Ne = d.a.createElement(u.a, null),
        He = Object(me.a)(function (e, t) {
          return c()(c()({}, t), Object(Oe.a)({ isWide: e }))
        }),
        Ue = function (e) {
          var t = e.TabBar,
            n = e.backLocation,
            a = e.behavioralEventViewType,
            i = e.documentTitle,
            l = e.entryConfiguration,
            c = e.fab,
            s = e.getTabLink,
            u = e.hasTabNavigation,
            p = e.history,
            m = e.initialFetchStatus,
            f = e.initialPageNamespace,
            b = e.logoButton,
            v = e.module,
            g = e.onBackClick,
            w = e.pageConfiguration,
            T = e.prerollDisplayLocation,
            I = e.renderEmptyState,
            S = e.renderUnavailable,
            x = e.rightControl,
            k = e.searchBoxRef,
            L = e.selectedTabId,
            O = e.sidebarContent,
            P = e.timelinePrefix,
            B = e.title,
            R = e.withAppLinks,
            M = e.withBottomLoginSignupBar,
            D = e.withDeferredView,
            F = e.withOpenGraphMeta,
            N = e.withSearchBox,
            H = e.withTweetButton,
            j = d.a.useState(!0),
            z = r()(j, 2),
            W = z[0],
            V = z[1],
            K = w || {},
            q = K.header,
            G = K.navBar,
            Y = K.subtitle,
            Z = K.title,
            J = m === h.a.LOADED ? Z || B : '',
            $ = (function (e, t, n) {
              var a = (null == t ? void 0 : t.scribeConfig) || {},
                r = (a.entityToken, o()(a, Me)),
                i = null == t ? void 0 : t.tabs,
                l = e || (null == i ? void 0 : i.initialTabId),
                c =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === l
                      }),
                s = (null == c ? void 0 : c.scribeConfig) || {},
                d = (s.entityToken, o()(s, De))
              return Object(U.a)({}, n, r, d)
            })(L, w, f),
            ee = q ? d.a.createElement(A, { header: q, onHeaderVisible: V }) : null,
            te = G
              ? d.a.createElement(Q, {
                  isHeaderOffscreen: !W,
                  navBar: G,
                  pageNamespace: $,
                  withAppLinks: R,
                  withOpenGraphMeta: F,
                })
              : null,
            ne = D ? y.a : d.a.Fragment,
            ae = d.a.createElement(Be.a, null, function (e) {
              var t = e.windowWidth >= C.a.theme.breakpoints.medium
              return d.a.createElement(
                d.a.Fragment,
                null,
                ee,
                d.a.createElement(
                  ne,
                  null,
                  d.a.createElement(ve, {
                    entryConfiguration: He(t, l),
                    initialModule: v,
                    prerollDisplayLocation: T,
                    renderEmptyState: I,
                    renderUnavailable: S,
                    selectedTabId: L,
                    timelinePrefix: P,
                    title: B,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            re = c ? d.a.createElement(_.a, { component: Re.a, fab: c }, ae) : ae,
            ie = s && u ? d.a.createElement(Ae, { getTabLink: s, module: v, selectedTabId: L }) : void 0
          return d.a.createElement(
            E.c,
            { namespace: $ },
            d.a.createElement(
              X.a,
              { behavioralEventViewType: a },
              d.a.createElement(Le.a, {
                TabBar: t,
                backLocation: n,
                documentTitle: i,
                history: p,
                logoButton: b,
                onBackClick: g,
                primaryContent: re,
                rightControl: te || x,
                searchBoxRef: k,
                secondaryBar: ie,
                sidebarContent: O,
                subtitle: Y,
                title: ee && W ? B : J,
                withBottomLoginSignupBar: M,
                withSearchBox: N,
                withTweetButton: H,
              }),
            ),
          )
        }
      Ue.defaultProps = {
        entryConfiguration: w.default,
        renderEmptyState: function () {
          return d.a.createElement(Pe.a, { header: Fe })
        },
        sidebarContent: Ne,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var je = g(Ue)
      t.a = je
    },
    'W6+M': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('7xRU'), n('z84I'), n('KqXw'), n('Ysgh')
      var a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return e
          .split('-')
          .map(function (e) {
            return t ? e[0].toUpperCase() + e.substring(1) : e
          })
          .join(' ')
      }
    },
    XioW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchForm', function () {
          return Ae
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('KEM+'),
        o = n.n(i),
        l = n('yiKp'),
        c = n.n(l),
        s = n('ddV6'),
        d = n.n(s),
        u =
          (n('2G9S'),
          n('tVqn'),
          n('jwue'),
          n('7x/C'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('z84I'),
          n('TJCb'),
          n('DZ+c'),
          n('0zG9'),
          n('KqXw'),
          n('MvUL'),
          n('+oxZ'),
          n('uFXj'),
          n('ERkP')),
        p = n.n(u),
        h = n('v6aA'),
        m = n('9StO'),
        f = (n('WNMA'), n('MvLc')),
        b = n('1YZw'),
        v = n('XOJV'),
        g = n('rxPX'),
        w = n('0KEI'),
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
        I = n('W6+M'),
        S = n('jHSc'),
        x = n('3XMw'),
        k = n.n(x),
        A = n('5FtR'),
        L = n('SrIh'),
        O = n('0zXz'),
        P = n('Rp9C'),
        B = n('xZXe'),
        R = n('aITJ'),
        M = n('MWbm'),
        D = n('t62R'),
        F = n('XiMS'),
        N = n('fyvP'),
        H = n('p+r5'),
        U = n('4zmP'),
        j = n('/yvb'),
        z = n('feu+'),
        W = n('rHpw'),
        V = n('KqB4'),
        K = n.n(V),
        q = n('S1qy'),
        G = n.n(q),
        Q = n('Oib4'),
        X = n('DlMI'),
        Y = n('ms2t'),
        Z = n('I/9y'),
        J = n('EHV7'),
        $ = n('NPGn'),
        ee = k.a.d39e8b30,
        te = k.a.a91bb144,
        ne = k.a.hb2bf967,
        ae = k.a.dc7a6625,
        re = k.a.af778d9e,
        ie = k.a.ifd2c15f,
        oe = k.a.f24ec219,
        le = k.a.j679dcda,
        ce = { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' },
        se = k.a.b7476596,
        de = k.a.df6c8291,
        ue = k.a.h0e35524,
        pe = ['believable', 'harmful', 'validation'],
        he = ['classification', 'summary', 'trustworthy_sources'],
        me = ['misleading_tags'].concat(pe),
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
        Ie = { explanation: k.a.c097608d, source: k.a.g9cffe15 },
        Se = { explanation: k.a.ba25898c, source: k.a.e764d704 },
        xe = { explanation: k.a.gb67e44c, source: k.a.d6b758a1 },
        ke = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        Ae = function (e) {
          var t = p.a.useContext(h.a).featureSwitches,
            n = e.addToast,
            a = e.analytics,
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
            x = function (e) {
              return G()(e, ke).weightedLength
            },
            k = function (e) {
              if (!e) return _e
              var t = x(e.trim())
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
                    var n
                    e[t] = (n = q[t]) && n.length > 0 ? '' : ye
                  }),
                  (e.summary = k(q.summary)),
                  e
                )
              })(),
            ),
            Pe = d()(Oe, 2),
            Be = Pe[0],
            Re = Pe[1],
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
            Ye = Qe[1],
            Ze = '/i/birdwatch/'.concat(E, '/contribute_complete')
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
                Ye(_)
              },
              [_],
            )
          var Je,
            $e = function (e) {
              var t = P.a.forTweet(E)
              a.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            et = function (e) {
              return function (t, n) {
                $e(e),
                  Ae(function (t) {
                    var a = n
                    'trustworthy_sources' === e && ('true' === n ? (a = !0) : 'false' === n && (a = !1))
                    var r = c()(c()({}, t), {}, o()({}, e, a))
                    return y({ updates: r, tweetId: E }), r
                  }),
                  Re(function (t) {
                    return c()(c()({}, t), {}, o()({}, e, T(n)))
                  })
              }
            },
            tt = function (e) {
              return function (t) {
                return function () {
                  Ae(function (n) {
                    if (!n[e]) {
                      Re(function (t) {
                        return c()(c()({}, t), {}, o()({}, e, ''))
                      })
                      var a = c()(c()({}, n), {}, o()({}, e, [t]))
                      return y({ updates: a, tweetId: E }), a
                    }
                    var i = n[e].includes(t),
                      l = n[e].filter(function (e) {
                        return e !== t
                      })
                    if (i) {
                      Re(function (t) {
                        return l.length > 0 ? c()(c()({}, t), {}, o()({}, e, '')) : c()(c()({}, t), {}, o()({}, e, ye))
                      })
                      var s = c()(c()({}, n), {}, o()({}, e, l))
                      return y({ updates: s, tweetId: E }), s
                    }
                    Re(function (t) {
                      return c()(c()({}, t), {}, o()({}, e, ''))
                    })
                    var d = c()(c()({}, n), {}, o()({}, e, [].concat(r()(n[e]), [t])))
                    return y({ updates: d, tweetId: E }), d
                  })
                }
              }
            },
            nt = (null == q ? void 0 : q.misleading_tags) || [],
            at = (null == q ? void 0 : q.not_misleading_tags) || [],
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
                      checked: nt.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: tt('misleading_tags')(e.value),
                      style: Le.checkbox,
                    })
                  }),
                  rt(Be.misleading_tags),
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
                  rt(Be[e]),
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
                    checked: at.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: tt('not_misleading_tags')(e.value),
                    style: Le.checkbox,
                  })
                }),
                rt(Be.not_misleading_tags),
              ),
            ),
            lt = function (e) {
              return (
                0 ===
                e.filter(function (e) {
                  return !!Be[e]
                }).length
              )
            },
            ct = function () {
              var e = q.summary || ''
              return !(!lt(he) || '' !== k(e)) && !!((dt === $.a && lt(me)) || (dt === $.b && lt(fe)))
            },
            st = function () {
              ze(!0),
                l(E, q)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      n({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(L.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        $e('submit_failed'),
                        ze(!1)
                    } else y({ updates: {}, tweetId: E }), g.replace(Ze)
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
            ht = dt === $.b,
            mt = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            ft = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            bt = C && Object(I.a)(C, !0),
            vt = p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(
                M.a,
                { style: Le.tweetContainer },
                p.a.createElement(B.b, { displayPromotedContent: !1, tweetId: E, withCurationMenu: !1 }),
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
                  rt(Be.classification),
                ),
                dt === $.a && it,
                ht && ot,
                !!dt &&
                  p.a.createElement(
                    p.a.Fragment,
                    null,
                    p.a.createElement(
                      M.a,
                      { style: Le.questionSection },
                      p.a.createElement(
                        M.a,
                        { accessibilityLabel: ht ? oe : ie, accessibilityRole: 'group' },
                        p.a.createElement(D.b, { weight: 'bold' }, ht ? oe : ie),
                        p.a.createElement(D.b, { link: ce }, le),
                        p.a.createElement(H.a, {
                          calculateLength: x,
                          helperText: se,
                          invalid: !!Be.summary && Fe,
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
                              Re(function (e) {
                                return c()(c()({}, e), {}, { summary: k(t) })
                              })
                          },
                          style: Le.textInput,
                          validLength: 280,
                          value: null == q ? void 0 : q.summary,
                        }),
                        rt(Be.summary),
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
                          ((Je = $.c.trustworthy_sources.options),
                          Je.map(function (e) {
                            return { label: e.label, value: e.value.toString() }
                          })),
                        value: pt,
                      }),
                      rt(Be.trustworthy_sources),
                    ),
                    mt &&
                      !ft &&
                      p.a.createElement(M.a, { style: Le.callout }, p.a.createElement(U.a, { Icon: X.a, text: ne })),
                    mt &&
                      ft &&
                      bt &&
                      p.a.createElement(
                        M.a,
                        { style: Le.callout },
                        p.a.createElement(U.a, {
                          Icon: Y.a,
                          headline: ae({ displayAlias: bt }),
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
            ? p.a.createElement(m.a, {
                onAliasSelected: function (e) {
                  Ye(e)
                },
              })
            : w
            ? p.a.createElement(A.a, { to: Ze })
            : Ke
            ? p.a.createElement(z.a, {
                actionLabel: Te,
                graphic: 'source' === Ke ? Z.a : J.a,
                graphicDisplayMode: 'thumbnail',
                headline: Ie[Ke],
                onAction: function () {
                  $e('nudge_edit'), qe(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = P.a.forTweet(E)
                  a.scribe({ element: 'nudge', action: 'show', data: { targets: [e] } })
                },
                onTertiaryAction: function () {
                  $e('nudge_submit'), st()
                },
                subtext: Se[Ke],
                tertiaryActionLabel: xe[Ke],
                withCloseButton: !1,
              })
            : p.a.createElement(
                S.b,
                {
                  history: g,
                  onBackClick: function () {
                    $e('close'), g.goBack()
                  },
                  renderHeader: R.b.isTwitterApp() ? gt : void 0,
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
    YI7k: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
                d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    YICZ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('Zejx'),
        o = n('rxPX'),
        l = n('0KEI'),
        c = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'TOPIC_NOT_INTERESTED_CONTEXT',
            ),
            setNotInterested: i.a.notInterested,
          }
        }),
        s = n('3XMw'),
        d = n.n(s),
        u = n('hOZg'),
        p = n('Jkc4'),
        h = n('Irs7'),
        m = n('/yvb'),
        f = n('rHpw'),
        b = d.a.d9b417c4,
        v = d.a.c29d6806,
        g = d.a.e839db39,
        w = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.nativeID,
            a = e.onPress,
            i = e.setNotInterested,
            o = e.size,
            l = e.style,
            c = e.text,
            s = e.topicId,
            d = e.type,
            u = e.withIconOnly,
            f = Object(h.b)(),
            v = r.a.useCallback(
              function (e) {
                e.preventDefault(),
                  a ? a(e) : (f.scribe({ element: 'topic', action: 'not_interested' }), i(s).catch(t()))
              },
              [f, t, a, i, s],
            )
          return r.a.createElement(p.a, null, function (e) {
            return r.a.createElement(
              m.a,
              {
                accessibilityLabel: b,
                hoverLabel: { label: g },
                icon: u ? _ : void 0,
                nativeID: n,
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
    Yyvu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotAvailablePage', function () {
          return g
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('vZpt'),
        o = n('L5MV'),
        l = n('3XMw'),
        c = n.n(l),
        s = n('VS6U'),
        d = n('MWbm'),
        u = n('FIs5'),
        p = n('rHpw'),
        h = c.a.b5711f09,
        m = c.a.e96677aa,
        f = c.a.f026d2ee,
        b = c.a.i859a9d3,
        v = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        g = function (e) {
          var t = e.history,
            n = r.a.createElement(
              d.a,
              { style: w.contentWrapper },
              r.a.createElement(u.a, {
                buttonLink: v,
                buttonText: b,
                buttonType: 'brandOutlined',
                header: m,
                message: f,
              }),
            )
          return r.a.createElement(s.a, {
            TabBar: o.a,
            history: t,
            logoButton: r.a.createElement(r.a.Fragment, null),
            primaryContent: n,
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
    ZD0R: function (e, t, n) {
      'use strict'
      var a,
        r,
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        d = n.n(s),
        u = n('5Yy7'),
        p = n.n(u),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        b = n.n(f),
        v = n('ddV6'),
        g = n.n(v),
        w = (n('jQ3i'), n('x4t0'), n('2G9S'), n('uFXj'), n('ERkP')),
        y = n.n(w),
        _ = n('RhWx'),
        E = n.n(_),
        C = n('yiKp'),
        T = n.n(C),
        I = (n('z84I'), n('TJCb'), n('7x/C'), n('DZ+c'), n('LW0h'), n('v6aA')),
        S = n('MvLc'),
        x = n('rxPX'),
        k = n('0KEI'),
        A = Object(x.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: S.c,
              deleteRating: S.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        L = n('ACNv'),
        O = n('YeIG'),
        P = n('MWbm'),
        B = n('t62R'),
        R = n('XiMS'),
        M = n('fyvP'),
        D = n('/yvb'),
        F = n('IG7M'),
        N = n('rHpw'),
        H = (n('yH/f'), n('3XMw')),
        U = n.n(H),
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
          ((a = {}),
          b()(a, j.Clear, U.a.dfa44ddd),
          b()(a, j.Empathetic, U.a.hc2b6a7e),
          b()(a, j.GoodSources, U.a.a7bc3191),
          b()(a, j.Informative, U.a.f3e6f0a9),
          b()(a, j.Other, U.a.c365dcc5),
          b()(a, j.UniqueContext, U.a.c5d55592),
          a),
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
        G = n('hiGS'),
        Q = n('TW8A'),
        X = n('WtWS'),
        Y = U.a.ed5156f9,
        Z = [
          { label: U.a.b7ec04f3, value: !0 },
          { label: U.a.i62a03aa, value: !1 },
        ],
        J = {
          helpful: { label: U.a.a7338bc2, options: Z },
          agree: { label: U.a.d93489e6, options: Z },
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
        ne = U.a.j6aa6172,
        ae = U.a.i411275f,
        re = U.a.d1a479a8,
        ie = function (e) {
          return e.map(function (e) {
            return { label: e.label, value: e.value.toString() }
          })
        },
        oe = y.a.createElement(B.b, { weight: 'bold' }),
        le = y.a.createElement(B.b, { weight: 'bold' }),
        ce = y.a.createElement(B.b, { weight: 'bold' }),
        se = y.a.createElement(B.b, { weight: 'bold' }),
        de = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'if77e237' }, y.a.cloneElement(ce, null, U.a.a43beaf2)),
        ue = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, y.a.cloneElement(se, null, U.a.cb1d0ef3)),
        pe = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'j575fa79' }, y.a.cloneElement(oe, null, U.a.he5f1491)),
        he = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, y.a.cloneElement(le, null, U.a.a67e7d91)),
        me = y.a.createElement(
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
            n = e.createLocalApiErrorHandler,
            a = e.createRating,
            r = e.deleteRating,
            i = e.noteId,
            o = e.rating,
            l = y.a.useContext(I.a).featureSwitches,
            c = o || {},
            s = y.a.useState(c),
            d = g()(s, 2),
            u = d[0],
            p = d[1],
            h = y.a.useState(Object(O.a)(o)),
            m = g()(h, 2),
            f = m[0],
            v = m[1],
            w = function (e) {
              return function (t, n) {
                p(function (t) {
                  var a = n
                  return 'true' === n ? (a = !0) : 'false' === n && (a = !1), T()(T()({}, t), {}, b()({}, e, a))
                })
              }
            },
            _ = function (e) {
              var t = u[e] || []
              return y.a.createElement(
                P.a,
                { style: ge.checkboxContainer },
                y.a.createElement(B.b, { weight: 'bold' }, J[e].label),
                J[e].options.map(function (n) {
                  return y.a.createElement(R.a, {
                    checked: t.includes(n.value),
                    key: n.value,
                    label: n.label,
                    onChange: x(e)(n.value),
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
                  .catch(n())
            },
            S = function () {
              k('edit'), v(!0)
            },
            x = function (e) {
              return function (t) {
                return function () {
                  p(function (n) {
                    return n[e]
                      ? n[e].includes(t)
                        ? T()(
                            T()({}, n),
                            {},
                            b()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : T()(T()({}, n), {}, b()({}, e, [].concat(E()(n[e]), [t])))
                      : T()(T()({}, n), {}, b()({}, e, [t]))
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
                  label: J.helpful.label,
                  name: J.helpful.label + i,
                  onChange: w('helpful'),
                  options: ie(Z),
                  value: N,
                }),
                A && (null != u && u.helpful ? _('helpful_tags') : _('not_helpful_tags')),
                y.a.createElement(M.a, {
                  label: J.agree.label,
                  name: J.agree.label + i,
                  onChange: w('agree'),
                  options: ie(Z),
                  value: U,
                }),
                !Object(O.a)(u) &&
                  y.a.createElement(
                    D.a,
                    {
                      onClick: function () {
                        k('submit'),
                          u &&
                            a(i, u)
                              .then(function () {
                                v(!1)
                              })
                              .catch(
                                n({
                                  defaultToast: { text: Y, withAutoDismiss: !1, withClearButton: !0 },
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
                    B.b,
                    { size: 'subtext2' },
                    null != u && u.helpful && !H
                      ? de
                      : (null != u && u.helpful) || H
                      ? null != u && u.agree && !A
                        ? pe
                        : (null != u && u.agree) || A
                        ? null != u && u.helpful && null != u && u.agree
                          ? me
                          : null == u || !u.helpful || (null != u && u.agree)
                          ? (null != u && u.helpful) || null == u || !u.agree
                            ? (null != u && u.helpful) || (null != u && u.agree)
                              ? void 0
                              : ve
                            : be
                          : fe
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
                          confirmation: { label: te, headline: ne, text: ae, confirmButtonType: 'destructiveFilled' },
                          isEmphasized: !0,
                          text: te,
                          Icon: G.a,
                          onClick: C,
                        }),
                        l.isTrue('responsive_web_birdwatch_ratings_v2_enabled')
                          ? t.push({ disabled: !0, text: ee, subText: re, Icon: Q.a })
                          : t.push({ text: ee, Icon: Q.a, onClick: S }),
                        t),
                      onClose: e,
                    })
                    var t
                  },
                }),
              )
        }),
        ye = n('xZGM'),
        _e = n('1YZw'),
        Ee = Object(x.a)()
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
              createRating: S.c,
              deleteRating: S.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        Ce = n('cHvH'),
        Te = n('h0NW'),
        Ie = n('feu+')
      n('+KXO')
      function Se(e) {
        var t,
          n,
          a = U.a.a7bc3191,
          r = U.a.a26f8dc1,
          i = U.a.d89cfe9e,
          o = U.a.faa5f9e7,
          l = U.a.c365dcc5
        return e
          ? ((t = {}),
            b()(t, j.GoodSources, a),
            b()(t, j.Clear, r),
            b()(t, j.AddressesClaim, i),
            b()(t, j.ImportantContext, o),
            b()(t, j.UnbiasedLanguage, U.a.gf3b38f4),
            b()(t, j.Other, l),
            t)
          : ((n = {}),
            b()(n, j.GoodSources, a),
            b()(n, j.Clear, r),
            b()(n, j.AddressesClaim, i),
            b()(n, j.ImportantContext, o),
            b()(n, j.Other, l),
            n)
      }
      function xe(e) {
        return Object.keys(Se(e))
      }
      function ke(e) {
        var t,
          n,
          a = U.a.ef490ae8,
          r = U.a.bf3dc461,
          i = U.a.heb35e12,
          o = U.a.ib117531,
          l = U.a.c365dcc5
        return e
          ? ((t = {}),
            b()(t, V.NoSources, a),
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
          : ((n = {}),
            b()(n, V.NoSources, a),
            b()(n, V.IrrelevantSources, r),
            b()(n, V.Incorrect, i),
            b()(n, V.Unclear, U.a.d60c0063),
            b()(n, V.MissingKeyPoints, U.a.c34e0b2b),
            b()(n, V.Rude, U.a.d24b99ed),
            b()(n, V.TwitterViolationAny, o),
            b()(n, V.Other, l),
            n)
      }
      function Ae(e) {
        return Object.keys(ke(e))
      }
      var Le = n('EQ/a'),
        Oe = n('DlMI'),
        Pe = U.a.ed5156f9,
        Be = [
          { label: U.a.b7ec04f3, value: 'Helpful' },
          { label: U.a.i26425d8, value: 'SomewhatHelpful' },
          { label: U.a.i62a03aa, value: 'NotHelpful' },
        ],
        Re = U.a.a91bb144,
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
        qe = y.a.createElement(B.b, { weight: 'bold' }),
        Ge = y.a.createElement(B.b, {
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
        Xe = y.a.createElement(B.b, { weight: 'bold' }),
        Ye = y.a.createElement(B.b, { weight: 'bold' }),
        Ze = y.a.createElement(B.b, { weight: 'bold' }),
        Je = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'had203a8' }, y.a.cloneElement(Xe, null, U.a.f2ceaed4)),
        $e = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'h42a21df' }, y.a.cloneElement(Ye, null, U.a.i7d91dc8)),
        et = y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'c3d1a1b0' }, y.a.cloneElement(Ze, null, U.a.c206a60f)),
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
        nt = {
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
        at = Ee(function (e) {
          var t = e.addFlag,
            n = e.addToast,
            a = e.analytics,
            r = e.createLocalApiErrorHandler,
            i = e.createRating,
            o = e.deleteRating,
            l = e.noteId,
            c = e.rating,
            s = e.ratingSurvey,
            d = e.shouldShowDataPrivacyPrompt,
            u = y.a.useContext(I.a).featureSwitches,
            p = y.a.useState(c),
            h = g()(p, 2),
            m = h[0],
            f = h[1],
            v = y.a.useState(Object(O.a)(c)),
            w = g()(v, 2),
            _ = w[0],
            C = w[1],
            S = y.a.useState(!1),
            x = g()(S, 2),
            k = x[0],
            A = x[1],
            M = u.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            H = {
              helpful: { label: U.a.a7338bc2, options: Be },
              helpful_tags: {
                label: U.a.ac7f9745,
                options: xe(M).map(function (e) {
                  return { label: Se(M)[e], value: e }
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
              a.scribeAction('click_'.concat(e))
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
              i(l, m)
                .then(function () {
                  C(!1)
                })
                .catch(r({ defaultToast: { text: Pe, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              u.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(O.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = m.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = m.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
                  Math.random() < 0.05) &&
                n({
                  text: He,
                  action: { label: Ue, link: null == s ? void 0 : s.url },
                  withAutoDismiss: !0,
                  withClearButton: !0,
                })
            },
            q = function (e) {
              return function (t) {
                return function () {
                  f(function (n) {
                    return n[e]
                      ? n[e].includes(t)
                        ? T()(
                            T()({}, n),
                            {},
                            b()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : T()(T()({}, n), {}, b()({}, e, [].concat(E()(n[e]), [t])))
                      : T()(T()({}, n), {}, b()({}, e, [t]))
                  })
                }
              }
            },
            Y = function (e) {
              var t = (m && m[e]) || []
              return y.a.createElement(
                P.a,
                { style: tt.checkboxContainer },
                y.a.createElement(B.b, { weight: 'bold' }, H[e].label),
                H[e].options.map(function (n) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == m ? void 0 : m.helpfulness_level) &&
                      n.value === V.TwitterViolationAny
                    ) &&
                    y.a.createElement(R.a, {
                      checked: t.includes(n.value),
                      key: n.value,
                      label: n.label,
                      onChange: q(e)(n.value),
                      style: tt.checkbox,
                    })
                  )
                }),
              )
            },
            Z = y.a.createElement(Ce.a, null, function (e) {
              var t = e.windowWidth <= N.a.theme.breakpoints.small
              return y.a.createElement(
                P.a,
                { style: !t && tt.helpfulContainer },
                y.a.createElement(B.b, { style: t && tt.helpfulQuestionMobile, weight: 'bold' }, H.helpful.label),
                y.a.createElement(
                  P.a,
                  { style: tt.helpfulOptions },
                  Be.map(function (e) {
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
                        type: (null == m ? void 0 : m.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
                      },
                      e.label,
                    )
                    var t
                  }),
                ),
              )
            }),
            J = y.a.createElement(Te.a, nt),
            $ = y.a.createElement(Ie.a, {
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
              subtext: J,
            }),
            ee = void 0 !== (null == m ? void 0 : m.helpfulness_level),
            te =
              ee &&
              ('Helpful' === (null == m ? void 0 : m.helpfulness_level) ||
                'SomewhatHelpful' === (null == m ? void 0 : m.helpfulness_level)),
            ne =
              ee &&
              ('NotHelpful' === (null == m ? void 0 : m.helpfulness_level) ||
                'SomewhatHelpful' === (null == m ? void 0 : m.helpfulness_level))
          return y.a.createElement(
            y.a.Fragment,
            null,
            k ? $ : null,
            _
              ? y.a.createElement(
                  P.a,
                  { style: tt.root },
                  Z,
                  te && Y('helpful_tags'),
                  ne && Y('not_helpful_tags'),
                  !Object(O.a)(m) &&
                    y.a.createElement(
                      D.a,
                      {
                        onClick: function () {
                          d && u.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? A(!0) : m && K()
                        },
                        style: tt.button,
                        type: 'brandFilled',
                      },
                      Re,
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
                      B.b,
                      null,
                      (function () {
                        switch (null == m ? void 0 : m.helpfulness_level) {
                          case 'Helpful':
                            return Je
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
        rt = n('xSpP'),
        it = n('XOJV'),
        ot = function (e, t) {
          var n,
            a = null === (n = t.note) || void 0 === n ? void 0 : n.tweet
          return a ? it.a.selectFetchStatus(e, a.rest_id) : void 0
        },
        lt = Object(x.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: ot, userAlias: S.y }
          })
          .propsFromActions(function () {
            return {
              addToast: _e.b,
              createAppeal: S.a,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: rt.b,
              fetchTweet: it.a.fetchOneIfNeeded,
              fetchUserAlias: S.l,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        ct = n('eqZz'),
        st = n('W6+M'),
        dt = n('yrzJ'),
        ut = n('sgih'),
        pt = U.a.e4579709,
        ht = U.a.df587b98,
        mt = U.a.h201bdc8,
        ft = U.a.fe1f6043,
        bt = U.a.ia5e7487,
        vt = U.a.j58e7b00,
        gt = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.alias,
                    n = e.closeNoteDetails,
                    a = e.created_at,
                    r = e.rest_id,
                    i = e.userBadges,
                    o = this.context.featureSwitches,
                    l = o.isTrue('responsive_web_birdwatch_note_awards_enabled'),
                    c = o.isTrue('responsive_web_birdwatch_aliases_enabled'),
                    s = y.a.createElement(
                      P.a,
                      { style: wt.noteDetailsContainer },
                      y.a.createElement(
                        P.a,
                        { style: wt.noteDetailsHeader },
                        y.a.createElement(B.b, { size: 'headline1', weight: 'bold' }, pt),
                      ),
                      y.a.createElement(
                        P.a,
                        { style: wt.noteDetails },
                        y.a.createElement(
                          P.a,
                          { style: [wt.noteDetailsSection, wt.noteDetailsSectionBorder] },
                          y.a.createElement(B.b, { style: wt.noteDetailsText, weight: 'bold' }, ht),
                          y.a.createElement(B.b, { style: wt.noteDetailsContentText }, r),
                        ),
                        y.a.createElement(
                          P.a,
                          { style: [wt.noteDetailsSection, wt.noteDetailsSectionBorder] },
                          y.a.createElement(B.b, { style: wt.noteDetailsText, weight: 'bold' }, ft),
                          y.a.createElement(
                            B.b,
                            { style: wt.noteDetailsContentText },
                            (function (e) {
                              if (!e) return ''
                              var t = new Date(e).toLocaleString('default', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                }),
                                n = new Date(e).toLocaleString('default', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  second: '2-digit',
                                })
                              return ''.concat(t, ' ').concat(n)
                            })(a),
                          ),
                        ),
                        y.a.createElement(
                          P.a,
                          { style: [wt.noteDetailsSection, wt.noteDetailsSectionLast] },
                          y.a.createElement(B.b, { style: wt.noteDetailsText, weight: 'bold' }, mt),
                          c
                            ? y.a.createElement(
                                B.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: wt.profileText },
                                Object(st.a)(t),
                              )
                            : y.a.createElement(dt.a, { screenName: t }),
                          c &&
                            y.a.createElement(
                              B.b,
                              {
                                color: 'link',
                                link: '/i/birdwatch/u/'.concat(t),
                                onClick: n,
                                style: wt.viewProfileLink,
                              },
                              vt,
                            ),
                          l && i && i.length > 0
                            ? i.map(function (e, t) {
                                return y.a.createElement(ct.a, { badgeType: e, key: t })
                              })
                            : null,
                        ),
                        y.a.createElement(P.a, { style: wt.contentSpacer }),
                      ),
                      y.a.createElement(
                        P.a,
                        { style: wt.noteDetailsButtonSection },
                        y.a.createElement(P.a, { style: wt.buttonSpacer }),
                        y.a.createElement(D.a, { onClick: n, style: wt.noteDetailsButton, type: 'brandFilled' }, bt),
                      ),
                    )
                  return y.a.createElement(Ce.a, null, function (e) {
                    var t = e.windowWidth
                    return y.a.createElement(ut.a, {
                      allowBackNavigation: !0,
                      children: s,
                      onMaskClick: n,
                      type: t >= N.a.theme.breakpoints.medium ? 'center' : 'full',
                      withMask: !0,
                    })
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(gt, 'contextType', I.a)
      var wt = N.a.create(function (e) {
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
        _t = n('b5s6'),
        Et = n('rcen'),
        Ct = n('Rp9C'),
        Tt = 'helpfulRatingTags',
        It = 'notHelpfulRatingTags',
        St = 'ratingStatus',
        xt = n('4zmP'),
        kt = n('pjBI'),
        At = n('GBcw'),
        Lt = n('855f'),
        Ot = n('htQn'),
        Pt = n('zIWA'),
        Bt = n('/WPq'),
        Rt = n('6s7X'),
        Mt = n('sUoZ'),
        Dt = n('x0mb'),
        Ft = n('fBGZ'),
        Nt = n('2Rcs'),
        Ht = n('Nh1N'),
        Ut = n('NPGn'),
        jt = U.a.d96cf7cd,
        zt = U.a.e272836c,
        Wt = U.a.e4579709,
        Vt = U.a.fa0d3ee3,
        Kt = U.a.ccf2f24e,
        qt = U.a.df321fc3,
        Gt = y.a.createElement(B.b, { color: 'primary' }, qt),
        Qt = U.a.b9f18eec,
        Xt = U.a.g2edfc1a,
        Yt = U.a.d6db34cb,
        Zt = U.a.j2c3f3cf,
        Jt = U.a.ac39da02,
        $t = U.a.d1dd62ac,
        en = U.a.b664c554,
        tn = U.a.ab66e1f2,
        nn = U.a.b2792b8c,
        an = U.a.b74df918,
        rn = U.a.hfd2544f,
        on = U.a.b9e1cf02,
        ln = U.a.cfd2f35d,
        cn = U.a.i80c8a83,
        sn = U.a.i859a9d3,
        dn = U.a.i97b83f6,
        un = 'CurrentlyRatedHelpful',
        pn = 'CurrentlyRatedNotHelpful',
        hn = 'NeedsMoreRatings',
        mn = function (e, t, n) {
          return y.a.createElement(
            P.a,
            { style: bn.ratingInfoItem, testID: St },
            y.a.createElement(e, { style: [bn.icon, t] }),
            y.a.createElement(B.b, { size: 'subtext2', weight: 'bold' }, n),
          )
        },
        fn = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n(e, a) {
            var r
            return (
              o()(this, n),
              (r = t.call(this, e, a)),
              b()(d()(r), '_handleFetchTweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweet,
                  a = e.note.tweet,
                  i = null == a ? void 0 : a.rest_id
                i && n(i).catch(t())
              }),
              b()(d()(r), '_isOwner', function () {
                var e,
                  t = r.props,
                  n = t.note,
                  a = t.userAlias,
                  i = null == n || null === (e = n.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!a || !i) && i === a
              }),
              b()(d()(r), '_handleDeleteConfirm', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.deleteNote,
                  a = e.handleDelete,
                  i = e.note,
                  o = i.birdwatch_profile,
                  l = i.rest_id
                r._scribeOnClick('delete')(),
                  null != o &&
                    o.alias &&
                    r._isOwner() &&
                    n(l)
                      .then(function (e) {
                        null == a || a(l)
                      })
                      .catch(t())
              }),
              b()(d()(r), '_getMenuActionItems', function () {
                var e = r.props.note,
                  t = e.birdwatch_profile,
                  n = e.rest_id,
                  a = []
                return (
                  null != t &&
                    t.alias &&
                    r._isOwner() &&
                    a.push({
                      confirmation: { label: jt, headline: zt, text: Vt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: jt,
                      Icon: G.a,
                      onClick: r._handleDeleteConfirm,
                    }),
                  a.push({
                    text: Kt,
                    Icon: Pt.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(n) },
                    onClick: r._scribeOnClick('report'),
                  }),
                  a.push({ text: Wt, Icon: Bt.a, onClick: r._onNoteDetailsClick }),
                  a
                )
              }),
              b()(d()(r), '_onNoteDetailsClick', function () {
                r.setState({ noteDetailsOpen: !0 }), r._scribeOnClick('note_details')
              }),
              b()(d()(r), '_renderCurationActionMenu', function (e) {
                return y.a.createElement(L.default, { actionItems: r._getMenuActionItems(), onClose: e })
              }),
              b()(d()(r), '_scribeOnClick', function (e) {
                return function () {
                  var t = r.props,
                    n = t.analytics,
                    a = t.note.tweet
                  if (a) {
                    var i = Ct.a.forTweet(a.rest_id)
                    n.scribe({ element: e, action: 'click', data: { targets: [i] } })
                  }
                }
              }),
              b()(d()(r), '_handleRequestAppeal', function () {
                var e = r.props,
                  t = e.createAppeal,
                  n = e.createLocalApiErrorHandler
                t(e.note.rest_id)
                  .then(function () {
                    r.setState({ appealsRequestOpen: !1 }), r.setState({ appealRequested: !0 })
                  })
                  .catch(n({ defaultToast: { text: dn, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }))
              }),
              b()(d()(r), '_handleOpenAppealsModal', function () {
                r.setState({ appealsRequestOpen: !0 })
              }),
              b()(d()(r), '_handleCloseAppealsModal', function () {
                r.setState({ appealsRequestOpen: !1 })
              }),
              b()(d()(r), '_renderAppealsModal', function () {
                var e = y.a.createElement(P.a, null, y.a.createElement(B.b, null, tn), y.a.createElement(Te.a, vn))
                return y.a.createElement(Ie.a, {
                  actionLabel: on,
                  graphicDisplayMode: 'none',
                  headline: en,
                  isFullHeightOnMobile: !0,
                  onAction: r._handleRequestAppeal,
                  onSecondaryAction: r._handleCloseAppealsModal,
                  secondaryActionLabel: ln,
                  subtext: e,
                })
              }),
              b()(d()(r), '_renderAppealsStatus', function () {
                var e = r.props,
                  t = e.note.can_appeal,
                  n = e.showTweet,
                  a = y.a.createElement(
                    U.a.I18NFormatMessage,
                    { $i18n: 'c5c4d000' },
                    y.a.createElement(
                      B.b,
                      { onPress: r._handleOpenAppealsModal, withInteractiveStyling: !0, withUnderline: !0 },
                      U.a.c8259b73,
                    ),
                  )
                return r.state.appealRequested
                  ? y.a.createElement(xt.a, {
                      Icon: X.a,
                      action: { label: sn, link: 'https://twitter.github.io/birdwatch/additional-review' },
                      headline: cn,
                      type: 'success',
                    })
                  : t
                  ? y.a.createElement(B.b, { color: 'gray700', size: 'subtext2', style: n && bn.noteWithQT }, a)
                  : void 0
              }),
              b()(d()(r), '_isShownOnTwitter', function () {
                var e = r.props.note,
                  t = e.data_v1
                return e.rating_status === un && (null == t ? void 0 : t.classification) === Ut.a
              }),
              b()(d()(r), '_renderRatingStatus', function (e) {
                switch (e) {
                  case un:
                    var t = y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(
                          kt.a,
                          null,
                          y.a.createElement(B.b, null, Qt),
                          y.a.createElement(B.b, null, Xt),
                        ),
                        y.a.createElement(
                          B.b,
                          { color: 'text', link: 'https://twitter.github.io/birdwatch/notes-on-twitter' },
                          y.a.createElement(Rt.a, { style: [bn.icon, bn.infoIcon] }),
                        ),
                      ),
                      n = r._isShownOnTwitter() ? t : Qt
                    return mn(Mt.a, bn.iconStar, n)
                  case pn:
                    return mn(Dt.a, bn.iconRed, Zt)
                  case hn:
                    return mn(Dt.a, bn.iconGray, Yt)
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
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchUserAlias,
                    a = e.note.tweet,
                    r = e.showTweet
                  n().catch(t()), r && null != a && a.rest_id && this._handleFetchTweet()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    a = this.props,
                    r = a.note,
                    i = r.created_at,
                    o = r.data_v1,
                    l = r.helpful_tags,
                    c = void 0 === l ? [] : l,
                    s = r.impression_count,
                    d = r.not_helpful_tags,
                    u = void 0 === d ? [] : d,
                    p = r.rating,
                    h = r.rating_status,
                    m = r.rating_survey,
                    f = r.rest_id,
                    b = r.tweetId,
                    v = r.tweet,
                    w = a.showPivot,
                    _ = a.showRating,
                    E = a.showTweet,
                    C = a.withBorder,
                    T = this.context.featureSwitches,
                    I = b || (null == v ? void 0 : v.rest_id),
                    S = (null == o || null === (e = o.summary) || void 0 === e ? void 0 : e.text) || '',
                    x = (null == o || null === (t = o.summary) || void 0 === t ? void 0 : t.entities) || [],
                    k = (null == p ? void 0 : p.data_v1) || {},
                    A = (null == p ? void 0 : p.data_v2) || {},
                    L = 2 === (null == p ? void 0 : p.version),
                    R = L ? A : k,
                    M = Object(O.a)(R),
                    D = (T.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && M) || L,
                    H =
                      (T.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        T.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      _,
                    j = T.isTrue('responsive_web_birdwatch_appeals_enabled') && this.state.appealsRequestOpen,
                    z = this.props.note.birdwatch_profile,
                    V = (null == z ? void 0 : z.alias) || '',
                    K = (null == z ? void 0 : z.badges) || [],
                    G = function () {
                      return n.setState({ noteDetailsOpen: !1 })
                    }
                  return y.a.createElement(Ce.a, null, function (e) {
                    var t,
                      a = e.windowWidth
                    return y.a.createElement(
                      P.a,
                      { key: f, style: bn.noteContainer },
                      j && n._renderAppealsModal(),
                      y.a.createElement(
                        P.a,
                        { style: bn.noteTopContainer },
                        E && I
                          ? y.a.createElement(
                              P.a,
                              { style: bn.tweetContainer },
                              y.a.createElement(_t.a, { isCondensed: !0, tweetId: I }),
                            )
                          : null,
                        y.a.createElement(
                          P.a,
                          { style: [bn.noteTop, E && bn.noteWithQT, C && bn.noteWithBorder] },
                          y.a.createElement(
                            P.a,
                            { style: bn.noteBody },
                            y.a.createElement(
                              kt.a,
                              { style: bn.noteInfoMiddots },
                              n._renderRatingStatus(h),
                              i && a >= N.a.theme.breakpoints.medium
                                ? y.a.createElement(At.a, { style: [bn.ratingInfoItem, bn.timestamp], timestamp: i })
                                : null,
                            ),
                            s && T.isTrue('responsive_web_birdwatch_impressions_enabled')
                              ? y.a.createElement(
                                  B.b,
                                  { color: 'gray700', size: 'subtext2', style: bn.subtext },
                                  ((t = Lt.a.getTruncatedCount(s)),
                                  y.a.createElement(U.a.I18NFormatMessage, { $i18n: 'd9f77781', impressions: t })),
                                )
                              : null,
                            h === un && (null == o ? void 0 : o.classification) === Ut.b
                              ? y.a.createElement(B.b, { color: 'gray700', size: 'subtext2', style: bn.subtext }, Jt)
                              : null,
                            y.a.createElement(
                              kt.a,
                              { style: bn.noteInfoMiddots },
                              (function (e, t, n) {
                                switch (e) {
                                  case un:
                                    if (2 === t.length) {
                                      var a = g()(t, 2),
                                        r = a[0],
                                        i = a[1],
                                        o = xe(!0),
                                        l = Se(!0),
                                        c = o.includes(r) ? l[r] : W[r],
                                        s = o.includes(i) ? l[i] : W[i],
                                        d = ''.concat(c, ' · ').concat(s)
                                      return c && s
                                        ? y.a.createElement(B.b, { color: 'gray700', size: 'subtext2', testID: Tt }, d)
                                        : null
                                    }
                                    return null
                                  case pn:
                                    if (2 === n.length) {
                                      var u = g()(n, 2),
                                        p = u[0],
                                        h = u[1],
                                        m = Ae(!0).includes(p) ? ke(!0)[p] : q[p],
                                        f = Ae(!0).includes(h) ? ke(!0)[h] : q[h],
                                        b = ''.concat(m, ' · ').concat(f)
                                      return m && f
                                        ? y.a.createElement(B.b, { color: 'gray700', size: 'subtext2', testID: It }, b)
                                        : null
                                    }
                                    return null
                                  default:
                                    return null
                                }
                              })(h, c, u),
                            ),
                            y.a.createElement(
                              P.a,
                              { style: bn.noteTextSection },
                              y.a.createElement(Et.a, {
                                entities: x,
                                onEntityClick: n._scribeOnClick('link'),
                                text: S,
                              }),
                            ),
                          ),
                          y.a.createElement(F.a, { renderActionMenu: n._renderCurationActionMenu, style: bn.caret }),
                        ),
                        H
                          ? y.a.createElement(
                              P.a,
                              { style: bn.ratingContainer },
                              D
                                ? y.a.createElement(at, { noteId: f, rating: A, ratingSurvey: m })
                                : y.a.createElement(we, { noteId: f, rating: k }),
                            )
                          : null,
                        T.isTrue('responsive_web_birdwatch_appeals_enabled') ? n._renderAppealsStatus() : null,
                      ),
                      w &&
                        I &&
                        T.isTrue('responsive_web_birdwatch_rating_participant_enabled') &&
                        y.a.createElement(
                          Ot.a,
                          null,
                          y.a.createElement(
                            B.b,
                            {
                              link: '/i/birdwatch/t/'.concat(I),
                              onPress: n._scribeOnClick('pivot'),
                              style: [bn.pivot, E && bn.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            Gt,
                          ),
                        ),
                      n.state.noteDetailsOpen &&
                        y.a.createElement(yt, {
                          alias: V,
                          closeNoteDetails: G,
                          created_at: i,
                          rest_id: f,
                          userBadges: K,
                        }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(fn, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), b()(fn, 'contextType', I.a)
      var bn = N.a.create(function (e) {
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
        vn = {
          accessibilityLabel: $t,
          containerStyle: bn.infoItemContainer,
          items: [
            { label: '', decoration: y.a.createElement(Ft.a, { style: bn.iconAppeals }), description: nn },
            { label: '', decoration: y.a.createElement(Nt.a, { style: bn.iconAppeals }), description: an },
            { label: '', decoration: y.a.createElement(Ht.a, { style: bn.iconAppeals }), description: rn },
          ],
        },
        gn = lt(fn)
      t.a = gn
    },
    aA1u: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        v = n('t62R'),
        g = n('21zW'),
        w = n('rHpw'),
        y = n('3XMw'),
        _ = n.n(y),
        E = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_formatTimestamp', function (e) {
                var t = _.a.jade381b,
                  n = _.a.d725a288,
                  a = new Date(e),
                  r = t(a),
                  i = n(a)
                return ''.concat(i, ' · ').concat(r)
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    n = e.onPlaceClick,
                    a = e.onTimestampClick,
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
                          { color: l ? t : void 0, link: l, onClick: a },
                          _.a.e9c24489({ date: c }),
                        ),
                        b.a.createElement(
                          v.b,
                          { color: i ? t : void 0, link: i, onClick: n },
                          _.a.a16de8a4({ place: r }),
                        ),
                      )
                    : b.a.createElement(v.b, { color: l ? t : void 0, link: l, onClick: a }, c)
                },
              },
              {
                key: '_maybeRenderSource',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onSourceClick,
                    a = e.source,
                    r = e.sourceLink
                  return a
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(g.a, null),
                        b.a.createElement(v.b, { color: r ? t : void 0, link: r, onClick: n, style: C.source }, a),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      m()(E, 'defaultProps', { linkColor: 'link' })
      var C = w.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = E
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        c = n.n(l),
        s = n('v6aA'),
        d = n('XOJV'),
        u = n('eSoz'),
        p = n('rxPX'),
        h = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && d.a.select(e, n)
          return a ? Object(u.g)(e, a) : void 0
        },
        b = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: d.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        v = n('YeIG'),
        g = n('uCxL'),
        w = n('x5Pi'),
        y = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        _ = b(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, y)),
            d = c.a.useContext(s.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            h = null == i ? void 0 : i.community_id_str
          c.a.useEffect(
            function () {
              h && Object(v.a)(t) && a(h).catch(n())
            },
            [t, h, n, a],
          )
          var m = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(w.f)(i, p, t),
            b = f && Object(w.e)(f),
            _ = u.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            g.a,
            r()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: m,
              socialContextProps: b,
              tweet: i,
              withReactions: _,
            }),
          )
        })
      t.a = _
    },
    dCqJ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('cm6r'),
        o = n('VrFO'),
        l = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        d = n('1Pcy'),
        u = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        m = n('2VqO'),
        f = n.n(m),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('t62R')),
        w = n('rHpw'),
        y = n('3XMw'),
        _ = n.n(y),
        E = _.a.d7e50a66,
        C = 'INDIRECT',
        T = 'NO_SPONSORSHIP',
        I = 'ISSUE',
        S = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), '_renderDisclaimerDetails', function () {
                var t = e.props,
                  n = t.onPoliticalSponsorWebsiteClick,
                  a = t.promotedContent
                if (!a.adMetadataContainer) return null
                var i = a.adMetadataContainer,
                  o = i.disclaimerType,
                  l = i.sponsorshipCandidate,
                  c = i.sponsorshipOrganization,
                  s = i.sponsorshipOrganizationWebsite,
                  d = i.sponsorshipType,
                  u =
                    s && o !== I
                      ? r.a.createElement(g.b, { link: s, onClick: n })
                      : r.a.createElement(g.b, { color: 'gray700', size: 'subtext2' })
                if (!c) return null
                var p = r.a.createElement(
                    _.a.I18NFormatMessage,
                    { $i18n: 'e1e348dc' },
                    r.a.cloneElement(u, null, _.a.b1e5bc63({ sponsorshipOrganization: c })),
                  ),
                  h = r.a.createElement(
                    _.a.I18NFormatMessage,
                    { $i18n: 'c7dea0d0' },
                    r.a.cloneElement(u, null, _.a.a84fcff2({ sponsorshipOrganization: c })),
                  ),
                  m = l
                    ? r.a.createElement(
                        _.a.I18NFormatMessage,
                        { $i18n: 'b5c2371a', sponsorshipCandidate: l },
                        r.a.cloneElement(u, null, _.a.fd985325({ sponsorshipOrganization: c })),
                      )
                    : null
                return r.a.createElement(
                  g.b,
                  { color: 'gray700', size: 'subtext2' },
                  o === I ? p : d === T ? h : d === C ? m : p,
                )
              }),
              v()(u()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  n = t.onPromotedDisclaimerLearnMoreClick,
                  a = t.promotedContent,
                  i = t.tweet,
                  o = (a.adMetadataContainer || {}).disclaimerType === I ? 'issue_ad' : 'political_ad',
                  l = 'http://ads.twitter.com/transparency/ads/'.concat(i.user.screen_name, '/tweet/').concat(i.id_str)
                return r.a.createElement(g.b, { link: l, onClick: n(o), size: 'subtext2', style: x.learnMore }, E)
              }),
              e
            )
          }
          return (
            s()(n, [
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
            n
          )
        })(r.a.Component),
        x = w.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        k = n('e5HP'),
        A = n('Z6aJ'),
        L = n('MWbm')
      t.a = function (e) {
        var t = e.onPoliticalSponsorWebsiteClick,
          n = e.onPromotedDisclaimerLearnMoreClick,
          a = e.onPromotedIndicatorClick,
          o = e.promotedContent,
          l = e.promotedContentAdvertiser,
          c = e.style,
          s = e.testID,
          d = e.tweet,
          u = e.withCircleIcon,
          p = A.a.isPromoted(o),
          h =
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
                      onPress: a,
                    },
                    r.a.createElement(k.a, { promotedContent: o, withCircleIcon: u }),
                  )
                : !!o && r.a.createElement(k.a, { promotedContent: o }),
              h && o
                ? r.a.createElement(S, {
                    onPoliticalSponsorWebsiteClick: t,
                    onPromotedDisclaimerLearnMoreClick: n,
                    promotedContent: o,
                    tweet: d,
                  })
                : null,
            )
          : null
      }
    },
    dW4k: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SelfUserNotePageRedirect', function () {
          return E
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Qwev'),
        c = n('v6aA'),
        s = n('9StO'),
        d = n('vZpt'),
        u = n('L5MV'),
        p = n('MvLc'),
        h = n('rxPX'),
        m = n('0KEI'),
        f = Object(h.a)()
          .propsFromState(function () {
            return { userAlias: p.y, showAliasSelfSelect: p.v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: p.l,
              fetchShowAliasSelfSelect: p.j,
            }
          }),
        b = n('3XMw'),
        v = n.n(b),
        g = n('5FtR'),
        w = n('VS6U'),
        y = n('nymP'),
        _ = v.a.ff692d63,
        E = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchShowAliasSelfSelect,
            a = e.fetchUserAlias,
            i = e.history,
            p = e.showAliasSelfSelect,
            h = e.userAlias,
            m = o.a.useContext(c.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            f = o.a.useState(!0),
            b = r()(f, 2),
            v = b[0],
            E = b[1]
          o.a.useEffect(
            function () {
              a()
                .then(function () {
                  return E(!1)
                })
                .catch(t())
            },
            [t, a],
          ),
            o.a.useEffect(
              function () {
                n().catch(t())
              },
              [t, n],
            )
          var C = function (e) {
            a()
              .then(function () {
                return E(!1)
              })
              .catch(t())
          }
          return o.a.createElement(w.a, {
            TabBar: u.a,
            history: i,
            logoButton: o.a.createElement(o.a.Fragment, null),
            primaryContent: v
              ? o.a.createElement(l.a, { size: 'large' })
              : h
              ? o.a.createElement(g.a, { to: '/i/birdwatch/u/'.concat(h) })
              : m && p
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
    doI8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('WpDa'),
        o = n('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          n = e.endpointUrl,
          a = e.timelineId
        return Object(o.a)({
          timelineId: a,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var a = e.count,
              i = e.cursor
            return r()(r()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: a, endpointUrl: n })
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
            var n = t.count,
              a = t.cursor
            return { cursor: 'string' == typeof a ? a : void 0, count: n, timelineId: e }
          },
          formatResponse: i.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    eqZz: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('B/qP'),
        c = n('MWbm'),
        s = n('j7Bv'),
        d = n('t62R'),
        u = n('rHpw'),
        p = o.a.c57760e9,
        h = o.a.c45ef9c1,
        m = o.a.g29805f5,
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
          Top10Author: { badgeStyle: v.goldAward, contributorText: m, badgeText: p },
          Top10Rater: { badgeStyle: v.goldAward, contributorText: m, badgeText: h },
          Top25Author: { badgeStyle: v.silverAward, contributorText: f, badgeText: p },
          Top25Rater: { badgeStyle: v.silverAward, contributorText: f, badgeText: h },
        }
      t.a = function (e) {
        var t = e.badgeType,
          n = g[t],
          a = n.badgeStyle,
          i = n.badgeText,
          o = n.contributorText
        return r.a.createElement(
          c.a,
          { style: v.awardSection },
          r.a.createElement(s.a, { Icon: b, size: 'large', style: [v.ratingAward, a] }),
          r.a.createElement(d.b, { style: v.ratingAwardText, weight: 'bold' }, o),
          r.a.createElement(d.b, null, i),
        )
      }
    },
    fBGZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    foB5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        l = n('3XMw'),
        c = n.n(l).a.ee87e71c,
        s = ((a = {}), i()(a, o.a.SelfMuteError, { toast: { text: c } }), i()(a, 'showToast', !0), a)
    },
    gdQ4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return L
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        v = n('tRj+'),
        g = n('3XMw'),
        w = n.n(g),
        y = n('oQhu'),
        _ = n('MWbm'),
        E = n('htQn'),
        C = n('5mJL'),
        T = n('jhWN'),
        I = n('/yvb'),
        S = n('t62R'),
        x = n('rHpw'),
        k = w.a.e3a24e4b,
        A = w.a.i569ff3e,
        L = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(
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
            o()(n, [
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
                    n = e.onClick,
                    a = e.style,
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
                      { link: r, onClick: n, style: [O.root, a] },
                      b.a.createElement(
                        C.a,
                        {
                          avatarCell: c
                            ? b.a.createElement(
                                _.a,
                                { style: [O.avatarColumn, !l && O.avatarColumnWithoutLine] },
                                l ? b.a.createElement(_.a, { style: O.conversationLine }) : null,
                                b.a.createElement(T.a, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: O.conversationConnector,
                          cellStyle: o ? O.buttonContainer : c ? O.labelWithAvatar : O.label,
                        },
                        o
                          ? b.a.createElement(
                              I.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: O.button, type: 'brandOutlined' },
                              k,
                            )
                          : b.a.createElement(S.b, { color: 'link', style: O.enlargeTouchTarget }, A),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      m()(L, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var O = x.a.create(function (e) {
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
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(l.a.Consumer, null, function (n) {
            return o.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    'iCa+': function (e, t, n) {
      'use strict'
      n.r(t)
      n('KqXw'), n('WNMA'), n('MvUL')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('aITJ'),
        c = n('t62R'),
        s = n('h0NW'),
        d = n('feu+'),
        u = n('rHpw'),
        p = n('WtWS'),
        h = n('2Rcs'),
        m = n('sUoZ'),
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
            { label: b, decoration: r.a.createElement(h.a, { style: E.icon }) },
            { label: v, decoration: r.a.createElement(m.a, { style: E.icon }) },
          ],
        }
      t.default = function (e) {
        var t = e.history,
          n = e.match.params.tweetId,
          a = r.a.createElement(c.b, null, y, r.a.createElement(s.a, C))
        return r.a.createElement(d.a, {
          actionLabel: g,
          contentStyle: E.content,
          graphicDisplayMode: 'none',
          headline: w,
          isFullHeightOnMobile: !0,
          onAction: function () {
            t.push('/i/birdwatch/t/'.concat(n))
          },
          onClose: function () {
            l.b.isTwitterApp() || t.replace('/i/status/'.concat(n))
          },
          subtext: a,
          withCloseButton: !l.b.isTwitterApp(),
        })
      }
    },
    j7tW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return f
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = (n('2G9S'), n('oEOe')),
        o = n('PiaM'),
        l = 'rweb/'.concat('pinnedTweets'),
        c = n('x5Pi'),
        s = n('G6rE'),
        d = n('SRyb'),
        u = i.a(l, 'PIN'),
        p = i.a(l, 'UNPIN'),
        h = function (e) {
          return function (t, n, a) {
            var l = a.api,
              p = a.featureSwitches
            return i.c(t, { params: { id: e }, request: l.Tweets.pin })(
              { actionTypes: u, context: 'ACTION_PIN_TWEET', meta: { tweetId: e } },
              function (a) {
                var i = s.e.selectLoggedInUser(n())
                if (void 0 !== i) {
                  var l = i.id_str,
                    u = i.pinned_tweet_ids_str && i.pinned_tweet_ids_str[0]
                  t(s.e.patchUser(l, { pinned_tweet_ids_str: [e] }))
                  var h = Object(d.a)(p, l, 'default'),
                    m = u
                      ? [h.removeTweets(r()({}, u, !0)), h.injectEntry(o.k({ id: u, sortIndex: u }), { atTop: !1 })]
                      : []
                  return [].concat(m, [
                    h.removeTweets(r()({}, e, !0)),
                    h.injectEntry(
                      o.k({ id: e, content: { socialContext: { generalContext: c.a } }, sortIndex: 'NOT_USED' }),
                    ),
                  ])
                }
              },
            )
          }
        },
        m = function (e) {
          return function (t, n, a) {
            var l = a.api,
              c = a.featureSwitches
            return i.c(t, { params: { id: e }, request: l.Tweets.unpin })(
              { actionTypes: p, context: 'ACTION_UNPIN_TWEET', meta: { tweetId: e } },
              function (a) {
                var i = s.e.selectLoggedInUser(n())
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
          var n = s.e.selectLoggedInUser(e)
          return !(null == n || !n.pinned_tweet_ids_str) && n.pinned_tweet_ids_str[0] === t
        }
    },
    jQy5: function (e, t, n) {
      'use strict'
      var a = n('OrGc'),
        r = n('foB5'),
        i = n('1bnC'),
        o = n('68+r'),
        l = n('P2xQ')
      t.a = function (e) {
        var t = e.addToast,
          n = e.behavioralEventEntityToken,
          c = e.createLocalApiErrorHandler,
          s = e.dismissUserFromConversation,
          d = e.mute,
          u = e.promotedContent,
          p = e.scribeAction,
          h = e.unmute,
          m = e.user,
          f = function () {
            h(m.id_str, { promotedContent: u }).then(function () {
              t({ text: Object(l.d)(m.screen_name), behavioralEventEntityToken: n })
            }, c(o.a)),
              p({ element: 'unmute' })
          },
          b = Object(l.a)(
            m,
            function () {
              d(m.id_str, { promotedContent: u }).then(function () {
                s && s({ userId: m.id_str, feedbackKeys: ['UnfollowEntity'] }),
                  t({
                    action: { label: i.a, onAction: f, behavioralEventViewType: 'unmute_person' },
                    behavioralEventEntityToken: n,
                    text: Object(l.b)(m.screen_name),
                  })
              }, c(r.a)),
                p({ element: 'mute' })
            },
            f,
          ),
          v = b.Icon,
          g = b.behavioralEventContext,
          w = b.onClick
        return { behavioralEventContext: g, Icon: v, text: b.text, onClick: w, shortcutKey: a.e.mute }
      }
    },
    mQYW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchNotesUserScreen', function () {
          return ve
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('z84I'), n('uFXj'), n('ERkP')),
        o = n.n(i),
        l = n('v6aA'),
        c = n('9StO'),
        s = n('eqZz'),
        d = n('97Jx'),
        u = n.n(d),
        p = n('m3Bd'),
        h = n.n(p),
        m = n('ZD0R'),
        f = n('xSpP'),
        b = n('rxPX'),
        v = function (e, t) {
          var n = t.noteId
          return f.a.select(e, n)
        },
        g = Object(b.a)().propsFromState(function () {
          return { note: v }
        }),
        w = ['note', 'noteId'],
        y = g(function (e) {
          var t = e.note,
            n = (e.noteId, h()(e, w))
          return t ? o.a.createElement(m.a, u()({ note: t }, n)) : null
        }),
        _ = n('vZpt'),
        E = n('L5MV'),
        C = (n('KqXw'), n('WNMA'), n('MvLc')),
        T = n('yiKp'),
        I = n.n(T),
        S = n('wAC9'),
        x = n('hqKg'),
        k = n('0KEI'),
        A = function (e, t) {
          return t.match.params.alias
        },
        L = function (e, t) {
          return Object(x.createSelector)(A, function (e) {
            return e
              ? (function (e) {
                  return Object(S.a)({
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
        O = function (e, t) {
          return C.p(e, A(0, t))
        },
        P = function (e, t) {
          return C.o(e, A(0, t))
        },
        B = function (e, t) {
          return C.v(e)
        },
        R = Object(b.a)()
          .propsFromState(function () {
            return {
              alias: A,
              notesSlice: L(),
              ratingsData: O,
              contributorBadgeData: P,
              showAliasSelfSelect: B,
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
        M = n('W6+M'),
        D = n('BcsE'),
        F = n('yoO3'),
        N = n('7JQg'),
        H = n('VS6U'),
        U = n('FS1z'),
        j = n('aITJ'),
        z = n('nymP'),
        W = n('MWbm'),
        V = n('t62R'),
        K = n('FIs5'),
        q = n('MtXG'),
        G = n('0yYu'),
        Q = n('/yvb'),
        X = n('j7Bv'),
        Y = n('6vad'),
        Z = n('cHvH'),
        J = n('rHpw'),
        $ = n('3XMw'),
        ee = n.n($),
        te = n('B/qP'),
        ne = n('6s7X'),
        ae = n('ms2t'),
        re = ee.a.ff692d63,
        ie = ee.a.ab28945b,
        oe = ee.a.jaf0d42c,
        le = ee.a.fe27c1e1,
        ce = ee.a.b8b34f54,
        se = ee.a.fd284b08,
        de = ee.a.ff746f63,
        ue = ee.a.hc19704b,
        pe = ee.a.j44125ee,
        he = ee.a.da55067b,
        me = o.a.createElement(
          ee.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.a.createElement(V.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, ee.a.j1a30557),
        ),
        fe = { label: ue, preferredHorizontalOrientation: 'start' },
        be = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        ve = function (e) {
          var t = o.a.useContext(l.a).featureSwitches,
            n = e.alias,
            a = e.contributorBadgeData,
            i = e.createLocalApiErrorHandler,
            d = e.fetchBirdwatchProfile,
            u = e.fetchShowAliasSelfSelect,
            p = e.fetchUserAlias,
            h = e.history,
            m = e.notesSlice,
            f = e.ratingsData,
            b = e.showAliasSelfSelect,
            v = e.userAlias,
            g = o.a.useState(b),
            w = r()(g, 2),
            C = w[0],
            T = w[1],
            I = v === n
          o.a.useEffect(
            function () {
              u().catch(i())
            },
            [i, u],
          ),
            o.a.useEffect(
              function () {
                n && d(n).catch(i())
              },
              [i, d, n],
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
          var S,
            x,
            k,
            A,
            L,
            O,
            P,
            B,
            R,
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
            _e = o.a.createElement(z.a, null),
            Ee = function (e) {
              return o.a.createElement(
                W.a,
                { key: e },
                o.a.createElement(y, { noteId: e, showPivot: I, showRating: !1, showTweet: !0 }),
                o.a.createElement(G.a, null),
              )
            },
            Ce = function () {
              return I ? _e : ye
            },
            Te = I ? re : ie,
            Ie = ve && C && I,
            Se = ve ? void 0 : '@'.concat(n)
          return o.a.createElement(
            N.c,
            { namespace: we },
            o.a.createElement(
              F.a,
              null,
              o.a.createElement(H.a, {
                TabBar: E.a,
                backLocation: '/i/birdwatch',
                history: h,
                logoButton: o.a.createElement(o.a.Fragment, null),
                primaryContent: Ie
                  ? o.a.createElement(c.a, {
                      onAliasSelected: function (e) {
                        h.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((x = null == f ? void 0 : f.helpful),
                    (k = null == f ? void 0 : f.somewhatHelpful),
                    (A = null == f ? void 0 : f.notHelpful),
                    (L = void 0 !== x),
                    (O = L && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (P = a || []),
                    (B = o.a.createElement(ne.a, { style: ge.badgeStandingIcon })),
                    (R = o.a.createElement(Q.a, { hoverLabel: fe, icon: B, link: be, style: ge.badgeStandingButton })),
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
                            Icon: ae.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ge.genericBirdwatchProfileIcon,
                          }),
                          o.a.createElement(Y.b, { style: ge.profileText, text: Object(M.a)(n) }),
                          o.a.createElement(V.b, { color: 'gray700', style: ge.birdwatchAliasDisclaimerText }, me),
                          o.a.createElement(G.a, null),
                        ),
                      O &&
                        o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(Y.b, { rightControl: R, text: se }),
                          o.a.createElement(
                            W.a,
                            { style: ge.awardsContainer },
                            P.length > 0
                              ? o.a.createElement(Z.a, null, function (e) {
                                  var t = e.windowWidth
                                  return o.a.createElement(
                                    W.a,
                                    {
                                      style:
                                        t >= J.a.theme.breakpoints.medium
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
                        I &&
                        o.a.createElement(
                          W.a,
                          { style: ge.ratingsContainer },
                          o.a.createElement(V.b, { style: ge.ratingsReceived, weight: 'bold' }, ce),
                          o.a.createElement(
                            W.a,
                            { style: ge.ratingNumbers },
                            Object(D.a)(x)
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
                                  })(x),
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
                              ? ((S = A),
                                o.a.createElement(
                                  q.a,
                                  null,
                                  o.a.createElement(
                                    ee.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    o.a.createElement(q.a.Value, null, ee.a.d551bc31({ count: S })),
                                    o.a.createElement(q.a.Label, null, ee.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      m
                        ? o.a.createElement(
                            o.a.Fragment,
                            null,
                            o.a.createElement(Y.b, { text: I ? oe : le }),
                            o.a.createElement(U.a, { module: m, noItemsRenderer: Ce, renderer: Ee }),
                          )
                        : null,
                    )),
                sidebarContent: o.a.createElement(_.a, null),
                subtitle: Se,
                title: Te,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ge = J.a.create(function (e) {
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
        we = R(ve)
      t.default = we
    },
    nIpi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchDownloadDataScreen', function () {
          return D
        })
      n('2G9S'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('vZpt'),
        o = n('L5MV'),
        l = n('MvLc'),
        c = n('hqKg'),
        s = n('rxPX'),
        d = n('0KEI'),
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
        h = n('89Im'),
        m = n('tI3i'),
        f = n.n(m),
        b = n('yoO3'),
        v = n('VS6U'),
        g = n('MWbm'),
        w = n('t62R'),
        y = n('/yvb'),
        _ = n('0yYu'),
        E = n('6vad'),
        C = n('rHpw'),
        T = n('3XMw'),
        I = n.n(T),
        S = I.a.cb1adfa0,
        x = I.a.e72533f5,
        k = I.a.g652cada,
        A = I.a.g4d71b5e,
        L = I.a.b8a27fe1,
        O = I.a.j1c99e0f,
        P = I.a.i6f69313,
        B = I.a.h786cd79,
        R = I.a.d0fe8052,
        M = r.a.createElement(
          w.b,
          { color: 'gray700', size: 'subtext2' },
          r.a.createElement(
            I.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            r.a.createElement(
              w.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              I.a.g0cacb73,
            ),
          ),
        ),
        D = function (e) {
          var t,
            n,
            a,
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
            m = null == u || null === (t = u.notes) || void 0 === t ? void 0 : t.urls,
            C = null == m ? void 0 : m.length,
            T = null == u || null === (n = u.ratings) || void 0 === n ? void 0 : n.urls,
            D = null == T ? void 0 : T.length,
            N = null == u || null === (a = u.notes) || void 0 === a ? void 0 : a.created_at,
            H = function (e, t, n, a) {
              return (
                f()(void 0 !== n, 'totalFiles must be defined'),
                r.a.createElement(
                  g.a,
                  { key: t, style: [F.fileSection, t > 1 && F.fileSectionNotFirst] },
                  r.a.createElement(
                    w.b,
                    null,
                    r.a.createElement(I.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: n }),
                  ),
                  r.a.createElement(y.a, {
                    icon: r.a.createElement(h.a, null),
                    link: e,
                    onPress:
                      ((i = ''.concat(a, '_').concat(t)),
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
                r.a.createElement(w.b, { size: 'title4', style: F.textSection, weight: 'heavy' }, x),
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
              m && (null == m ? void 0 : m.length) > 0
                ? m.map(function (e, t) {
                    return H(e, t + 1, C, 'notes')
                  })
                : r.a.createElement(w.b, { color: 'gray700', style: F.emptyData }, B),
              r.a.createElement(_.a, null),
              r.a.createElement(E.b, { text: P }),
              T && (null == T ? void 0 : T.length) > 0
                ? T.map(function (e, t) {
                    return H(e, t + 1, D, 'ratings')
                  })
                : r.a.createElement(w.b, { color: 'gray700', style: F.emptyData }, R),
              r.a.createElement(_.a, null),
              r.a.createElement(
                g.a,
                { style: F.footerText },
                r.a.createElement(
                  w.b,
                  { color: 'gray700', style: F.dateGenerated },
                  r.a.createElement(I.a.I18NFormatMessage, {
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
              logoButton: r.a.createElement(r.a.Fragment, null),
              primaryContent: U,
              sidebarContent: r.a.createElement(i.a, null),
              title: S,
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
    nymP: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('FIs5'),
        l = n('3XMw'),
        c = n.n(l),
        s = { external: !0, pathname: 'https://twitter.github.io/birdwatch/writing-notes' },
        d = c.a.i859a9d3,
        u = c.a.ff3e0be2,
        p = c.a.e9f1fbcb,
        h = c.a.db08295d,
        m = c.a.f4d67927,
        f = c.a.eae6767a
      t.a = function () {
        var e = r.a.useContext(i.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return r.a.createElement(o.a, {
          buttonLink: e ? s : '/i/flow/join-birdwatch',
          buttonText: e ? d : u,
          header: e ? p : h,
          message: e ? f : m,
        })
      }
    },
    owBv: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('lTXM'),
        o = n('m3Bd'),
        l = n.n(o),
        c = (n('z84I'), n('ho0z'), n('YeIG')),
        s = n('kLu5'),
        d = n('7MdP'),
        u = ['__typename', 'facepile', 'topic'],
        p = function (e) {
          var t = Object(s.b)(),
            n = (function (e) {
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
            a = (function (e, t) {
              var n = t.header
              if (n && 'TopicPageHeader' === n.__typename) {
                n.__typename
                var a = n.facepile,
                  i = n.topic,
                  o = l()(n, u),
                  c = a && Object(d.b)(e, a),
                  s = Object(d.a)(e, i)
                return r()(r()({}, o), {}, { topicId: s, facepile: c })
              }
            })(t, e),
            i = (function (e, t) {
              var n = t.navBar
              if (!n) return {}
              switch (n.__typename) {
                case 'TitleNavBar':
                  return { title: n.title, subtitle: n.subtitle }
                case 'TopicPageNavBar':
                  return {
                    navBar: { topicId: Object(d.a)(e, n.topic), clientEventInfo: n.clientEventInfo },
                    title: n.topic.name,
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
              tabs: n,
              header: a,
              navBar: i.navBar && i.navBar,
              title: i.title,
              subtitle: i.subtitle,
              scribeConfig: r()({}, e.scribeConfig),
            },
          }
        },
        h = n('WpDa'),
        m = n('IcAo')
      t.a = function (e) {
        var t,
          n,
          a =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(h.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (n = t.initialTimeline) &&
                void 0 !== n &&
                n.timeline.timeline
              ? Object(h.a)(t.initialTimeline.timeline.timeline)
              : Object(h.a)(i.c),
          o = p(e),
          l = o.globalObjects,
          c = o.pageConfiguration
        return r()(r()({}, a), {}, { globalObjects: Object(m.a)(l, a.globalObjects), pageConfiguration: c })
      }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return W
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        b = n.n(f),
        v = n('KEM+'),
        g = n.n(v),
        w = (n('2G9S'), n('ERkP')),
        y = n.n(w),
        _ = n('38/B'),
        E = n('t62R'),
        C = n('/yvb'),
        T = n('piX5'),
        I = n('3XMw'),
        S = n.n(I),
        x = n('tI3i'),
        k = n.n(x),
        A = n('oQhu'),
        L = n('rHpw'),
        O = n('aITJ'),
        P = n('MWbm'),
        B = n('n5fo'),
        R = n('5emT'),
        M = n('Oib4'),
        D = n('WtWS'),
        F = n('ioan'),
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
        j = S.a.de540c32,
        z = S.a.b4abfdb3,
        W = (function (e) {
          m()(n, e)
          var t = b()(n)
          function n(e) {
            var a
            c()(this, n),
              (a = t.call(this, e)),
              g()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              g()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              g()(
                p()(a),
                '_getTextInputStyle',
                Object(A.a)(function (e) {
                  return [V.root, !e && V.disabled]
                }),
              ),
              g()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              g()(p()(a), '_calculateLength', function (e) {
                return U(e, a.props.calculateLength)
              }),
              g()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              g()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = a.props.type,
                  l =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === c
              }),
              g()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              g()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              g()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  l = a._getAdjustedMaxLength()
                void 0 !== l && r.length > l && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              g()(p()(a), '_handleFocus', function () {
                var e = a.props.onFocus
                a.setState({ isFocused: !0 }), e && e()
              }),
              g()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              g()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                O.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              g()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                O.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              g()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              g()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              g()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  i = !!a,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                k()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  k()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  k()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              g()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              g()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              g()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(i),
                actualCount: H(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              a
            )
          }
          return (
            d()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      a = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === r && n === o && !!a === !!l && ('string' == typeof i) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
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
                            !n && T.a.disabled,
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
                          l && a ? this._renderErrorText() : null,
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
                      n = this._isFormInvalid() ? 'red500' : t,
                      a = this._isLabelLarge()
                    return y.a.createElement(
                      E.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          K.textInputHeaderItem,
                          a && K.placeholderText,
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
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      a =
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
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? y.a.createElement(
                          P.a,
                          { style: K.passwordVisibilityIconContainer },
                          y.a.createElement(C.a, {
                            accessibilityLabel: a ? z : j,
                            focusable: !0,
                            hoverLabel: { label: a ? z : j },
                            icon: a ? y.a.createElement(B.a, null) : y.a.createElement(R.a, null),
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
                      n = this._exceedsValidLength(e),
                      a = t && S.a.ia24dc8c(t),
                      r = S.a.ia24dc8c(e)
                    return y.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [K.textInputHeaderItem, K.displayCount] },
                      y.a.createElement(
                        E.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(r, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [K.icon, t && K.focusedIcon]
                    return e && y.a.createElement(e, { style: n })
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
                    var n = e.calculateLength,
                      a = e.value,
                      r = 'string' == typeof a ? U(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
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
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var a = n('rHpw').a.create(function (e) {
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
      t.a = a
    },
    qbku: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('m3Bd'),
        c = n.n(l),
        s = (n('hBvt'), n('ERkP')),
        d = n.n(s),
        u = n('rxPX'),
        p = Object(u.a)().withAnalytics({ element: 'social_proof' }),
        h = n('aTAq'),
        m = n('Nqmc'),
        f = n('x5Pi'),
        b = ['analytics', 'link'],
        v = p(function (e) {
          var t = d.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var n = e.analytics,
            a = e.link,
            i = c()(e, b),
            l =
              a && !Object(h.a)(a)
                ? o()(
                    o()({}, a),
                    {},
                    {
                      state: o()(
                        o()({}, a.state),
                        {},
                        {
                          referringScribeNamespace: o()(o()({}, n.contextualScribeNamespace), {}, { action: 'click' }),
                        },
                      ),
                    },
                  )
                : a
          return d.a.createElement(
            m.a,
            r()({}, i, {
              link: l,
              onClick: function () {
                var t = e.analytics,
                  n = e.onClick
                t.scribeAction('click'), n && n()
              },
            }),
          )
        })
      t.a = v
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    uw5z: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return R
        })
      var a,
        r = n('ERkP'),
        i = n.n(r),
        o = n('v6aA'),
        l = n('vZpt'),
        c = n('L5MV'),
        s = (n('KqXw'), n('WNMA'), n('owBv')),
        d = n('ZNT5'),
        u = n('hqKg'),
        p = n('rxPX'),
        h = function (e, t) {
          var n, a
          return (
            (null === (n = t.match) || void 0 === n || null === (a = n.params) || void 0 === a ? void 0 : a.tabId) ||
            void 0
          )
        },
        m = function () {
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
        f = Object(p.a)().propsFromState(function () {
          return { module: m(), selectedTabId: h }
        }),
        b = n('yiKp'),
        v = n.n(b),
        g = n('KEM+'),
        w = n.n(g),
        y = n('8UdT'),
        _ = n('ezF+'),
        E =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(231).then(n.bind(null, 'SdtT'))
            },
            loaderKey: 'pivotLabelLoader',
            strategy: n('XBtf').a.Critical,
          }),
        C = _.e(E),
        T = n('S/Qv'),
        I = n('5Y9N'),
        S = n('Yy//'),
        x =
          ((a = {}),
          w()(a, y.b.Label, C),
          w()(a, y.b.Message, Object(T.a)({})),
          w()(a, y.b.Tweet, Object(S.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          a),
        k = v()(v()({}, Object(I.a)({})), x),
        A = n('3XMw'),
        L = n.n(A),
        O = n('UZjl'),
        P = L.a.ha8209bb,
        B = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        R = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = e.history,
            a = e.module,
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
            getTabLink: B,
            history: n,
            initialPageNamespace: d,
            logoButton: i.a.createElement(i.a.Fragment, null),
            module: a,
            selectedTabId: r,
            sidebarContent: i.a.createElement(l.a, null),
            timelinePrefix: 'birdwatch-',
            title: P,
            withTweetButton: !1,
          })
        },
        M = f(R)
      t.default = M
    },
    v84o: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('180P'),
        r = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          l = i.urtEndpointOptions || {},
          c = l.cacheId,
          s = l.requestParams
        return Object(r.b)({
          timelineId: c || ''.concat(n).concat(Object(a.a)(i)),
          endpointUrl: o,
          endpointParams: s || {},
        })
      }
    },
    vZpt: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        l = (n('uFXj'), n('ERkP')),
        c = n.n(l),
        s = n('v6aA'),
        d = n('G6rE'),
        u = n('rxPX'),
        p = n('0KEI'),
        h = function (e, t) {
          return d.e.select(e, '1319036828964454402')
        },
        m = Object(u.a)()
          .propsFromState(function () {
            return { birdwatchAccount: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: d.e.fetchManyIfNeeded,
            }
          }),
        f = n('FQwk'),
        b = n('MWbm'),
        v = n('t62R'),
        g = n('6vad'),
        w = n('/yvb'),
        y = n('h0NW'),
        _ = n('rC8y'),
        E = n('rHpw'),
        C = n('3XMw'),
        T = n.n(C),
        I = n('yygM'),
        S = n('QDet'),
        x = n('wz7L'),
        k = n('88ay'),
        A = T.a.de962615,
        L = T.a.cbfa448b,
        O = T.a.b171d7c4,
        P = '1319036828964454402',
        B = T.a.ab23a972,
        R = T.a.gfa725ae,
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
        z = m(function (e) {
          var t = e.birdwatchAccount,
            n = e.createLocalApiErrorHandler,
            a = e.fetchUsersIfNeeded,
            i = c.a.useContext(s.a).featureSwitches,
            l = c.a.useState(null == t ? void 0 : t.following),
            d = o()(l, 2),
            u = d[0],
            p = d[1],
            h = i.isTrue('responsive_web_birdwatch_note_writing_enabled')
          c.a.useEffect(
            function () {
              a([P])
                .then(function (e) {
                  var t
                  e && p(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(n())
            },
            [n, a],
          )
          var m = c.a.createElement(
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
              c.a.createElement(g.b, { text: B }),
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
              accessibilityLabel: R,
              items: [
                { label: '', decoration: c.a.createElement(I.a, { style: j.valueIcon }), description: C(M) },
                { label: '', decoration: c.a.createElement(S.a, { style: j.valueIcon }), description: C(D) },
                { label: '', decoration: c.a.createElement(x.a, { style: j.valueIcon }), description: C(F) },
              ],
            },
            z = c.a.createElement(
              b.a,
              { style: j.module },
              c.a.createElement(g.b, { text: R }),
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
            h ? null : m,
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
    wz7L: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
    xSpP: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      })
      var a = n('oEOe'),
        r = n('MvLc'),
        i = n('3zvM'),
        o = n('lMB6'),
        l = Object(i.e)({ namespace: 'birdwatchContributorNotes' }),
        c = function (e) {
          return function (t, n, i) {
            var o = i.api
            return a.b(t, { request: o.Birdwatch.deleteNote, params: { note_id: e } })(
              { actionTypes: l.actionTypes.OPTIMISTIC_UPDATE, context: 'DELETE_NOTE' },
              function (t) {
                if (t) return [l.deleteOne(e), Object(r.d)(e)]
              },
            )
          }
        }
      t.a = o.a.register(l)
    },
    xZXe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return We
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        l = n('RhWx'),
        c = n.n(l),
        s = n('VrFO'),
        d = n.n(s),
        u = n('Y9Ll'),
        p = n.n(u),
        h = n('1Pcy'),
        m = n.n(h),
        f = n('5Yy7'),
        b = n.n(f),
        v = n('2VqO'),
        g = n.n(v),
        w = n('KEM+'),
        y = n.n(w),
        _ = n('yiKp'),
        E = n.n(_),
        C =
          (n('2G9S'),
          n('0zG9'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('vrRf'),
          n('ERkP')),
        T = n.n(C),
        I = n('ZyXd'),
        S = n('TZwD'),
        x = (n('ho0z'), n('RqPI')),
        k = n('1YZw'),
        A = n('Ig1G'),
        L = n('6rlp'),
        O = n('0pUJ'),
        P = n('Fmkq'),
        B = n('j7tW'),
        R = n('Zejx'),
        M = n('XOJV'),
        D = n('D5n3'),
        F = n('G6rE'),
        N = n('jL08'),
        H = n('eSoz'),
        U = n('rxPX'),
        j = n('0KEI'),
        z = n('EGrD'),
        W = n('x5Pi'),
        V = n('P1r1'),
        K = function (e, t) {
          var n = t.tweetId
          return Object(B.b)(e, n)
        },
        q = function (e, t) {
          return t.tweetId
        },
        G = function (e, t) {
          var n = t.urtAdvertiser,
            a = t.urtPromotedContent
          if (e && a) {
            var r = e.promoted_content
            return E()(
              E()({}, e),
              {},
              {
                promoted_content: E()(
                  {
                    adMetadataContainer: a.adMetadataContainer,
                    disclosure_type: a.disclosureType,
                    experiment_values: a.experimentValues,
                    impression_id: a.impressionId,
                    advertiser: n ? { id_str: n.id_str } : void 0,
                    advertiser_name: (null == n ? void 0 : n.name) || void 0,
                    click_tracking_info: a.clickTrackingInfo,
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
          var n = t.socialContext,
            a = n && n.topicContext
          return a ? R.a.select(e, a.topicId) : void 0
        },
        Y = function (e, t) {
          var n = t.tweetId,
            a = n && M.a.select(e, n)
          return a ? Object(H.g)(e, a) : void 0
        },
        Z = function (e, t) {
          var n = M.a.createHydratedTweetSelector(q)(e, t),
            a = null == n ? void 0 : n.quoted_status
          return a ? Object(H.g)(e, a) : void 0
        },
        J = function (e, t) {
          return t.urtPromotedContent
        },
        $ = function (e, t) {
          var n = t.urtPromotedContent
          return n ? F.e.select(e, n.advertiserId) : null
        },
        ee = function (e, t) {
          return t.contextTweetId
        },
        te = Object(U.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: z.c,
              articleDomains: N.b,
              community: Y,
              contextTweet: M.a.createHydratedTweetSelector(ee),
              displaySensitiveMedia: V.k,
              explicitSocialContext: Q,
              isNsfwUser: V.t,
              isPinned: K,
              loggedInUser: F.e.selectLoggedInUser,
              quoteTweetCommunity: Z,
              topic: X,
              tweet: M.a.createHydratedTweetSelector(q),
              urtAdvertiser: $,
              urtPromotedContent: J,
              userCountry: x.y,
              userLanguage: x.o,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              a,
              r = e.adFreeArticleDomains,
              i = e.articleDomains,
              o = e.community,
              l = e.contextTweet,
              c = e.displaySensitiveMedia,
              s = e.explicitSocialContext,
              d = e.isNsfwUser,
              u = e.isPinned,
              p = e.loggedInUser,
              h = e.quoteTweetCommunity,
              m = e.topic,
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
                null === (n = t.binding_values) ||
                void 0 === n ||
                null === (a = n.domain) ||
                void 0 === a
                  ? void 0
                  : a.string_value,
              E = Object(N.a)(i, _),
              C = null == f ? void 0 : f.quoted_status,
              T = C ? Object(W.f)(C, null == p ? void 0 : p.id_str, h) : void 0,
              I = T && Object(W.e)(T),
              S = Object(A.c)(null == o ? void 0 : o.role)
            return {
              adFreeArticleDomains: r,
              contextTweet: l,
              displaySensitiveMedia: c,
              isCardArticle: E,
              isNsfwUser: d,
              isPinned: u,
              loggedInUser: p,
              promotedContentAdvertiser: b || void 0,
              quoteTweetSocialContextProps: I,
              socialContext: s || y,
              topic: m,
              tweet: G(f, { urtPromotedContent: v, urtAdvertiser: b }),
              userCountry: g,
              userLanguage: w,
              withCommunityModerationAuthority: S,
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
              fetchTopicIfNeeded: R.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: z.b,
              mute: O.a,
              onUnretweet: D.a,
              richScribeAction: P.richScribeAction,
              setArticlesVisited: N.e,
              undoTopicNotInterested: R.a.undoNotInterested,
              unblock: F.e.unblock,
              unmute: F.e.unmute,
            }
          })
          .withAnalytics(),
        ne = n('6bZg'),
        ae = n('LSr9'),
        re = n('3XMw'),
        ie = n.n(re),
        oe = n('iFPY'),
        le = n('hACr'),
        ce = n('jQy5'),
        se = n('3IPs'),
        de = n('Rp9C'),
        ue = n('uArA'),
        pe = n('X04g'),
        he = n('xM7j'),
        me = n('BLtI'),
        fe = n('3zeG'),
        be = n('IO7v'),
        ve = n('Irs7'),
        ge = n('MWbm'),
        we = n('v6aA'),
        ye = n('E0cF'),
        _e = n('OIC0'),
        Ee = n('+pKb'),
        Ce = n('/Ikv'),
        Te = n('Z6aJ'),
        Ie = n('lHOd'),
        Se = n('7JQg'),
        xe = n('cFuS'),
        ke = n('24HD'),
        Ae = n('4hQ9'),
        Le = n('fz3c'),
        Oe = n('gZV8'),
        Pe = (function (e) {
          b()(n, e)
          var t = g()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_handlePlacementChange', function (t) {
                var n = e.props,
                  a = n.id,
                  r = n.onFullyVisible,
                  i = n.onVisible
                e._lastVisibleId !== a && t.verticalOverlap() >= 1 && ((e._lastVisibleId = a), i(t))
                var o = t.visibleFraction() >= Oe.c,
                  l = t.item.height > t.viewport.height,
                  c = t.verticalOverlap() === t.viewport.height || (l && t.visibleFraction() >= Oe.d)
                e._lastFullyVisibleId !== a && (o || c) && ((e._lastFullyVisibleId = a), r && r(t))
              }),
              y()(m()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout,
                  a = n.height,
                  r = n.width,
                  i = { width: r, height: a }
                if (e._prevLayout && (e._prevLayout.width !== r || e._prevLayout.height !== a)) {
                  var o = e.props.onResize
                  o && o(e._prevLayout, i)
                }
                e._prevLayout = i
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.id
                  return T.a.createElement(
                    Oe.e,
                    { key: n, onLayout: this._handleLayout, onPlacementChange: this._handlePlacementChange },
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(T.a.PureComponent),
        Be = n('fs1G'),
        Re = n('oQhu'),
        Me = n('mN6z'),
        De = n('Cqiq'),
        Fe = ie.a.f277e949,
        Ne = ie.a.e4c6c309,
        He = (function (e) {
          b()(n, e)
          var t = g()(n)
          function n(e, a) {
            var r, i
            d()(this, n),
              (i = t.call(this, e, a)),
              y()(m()(i), '_shouldLogPromotedImpression', je.bind(null, i.context.featureSwitches)),
              y()(m()(i), '_isProbablyRemovedByAdBlocker', Ue.bind(null, i.context.featureSwitches)),
              y()(
                m()(i),
                '_isArticleNudgeEnabled',
                i.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              y()(
                m()(i),
                '_isCompatibilityScribeEnabled',
                i.context.featureSwitches.isTrue('responsive_web_extension_compatibility_scribe'),
              ),
              y()(m()(i), '_isCommunitiesEnabled', i.context.featureSwitches.isTrue('c9s_enabled')),
              y()(
                m()(i),
                '_hasClaimsForAdFreeArticles',
                null === (r = i.context.userClaims) || void 0 === r
                  ? void 0
                  : r.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              y()(m()(i), '_renderBlockOrUnblockConfirmationSheet', function () {
                var e = i.props.tweet.user
                return Object(ke.j)({
                  confirmation: Object(ke.h)(e),
                  onClose: i._handleBlockOrUnblockConfirmClose,
                  handleConfirm: i._handleBlockOrUnblockUserConfirm,
                })
              }),
              y()(m()(i), '_handleShowReportedTweet', function () {
                i.setState({ displayReported: !0, enableKeyboardShortcuts: !1 })
              }),
              y()(m()(i), '_handleUnretweet', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onUnretweet,
                  a = e.tweet
                n(ye.a.getOriginalTweet(a).id_str, { promotedContent: a.promoted_content }).catch(t(be.a))
              }),
              y()(m()(i), '_getShortcutKeyHandlers', function () {
                var e = i._getMuteOrUnmuteAction(),
                  t = e.onClick,
                  n = e.shortcutKey,
                  a = i._getBlockOrUnblockAction().shortcutKey,
                  r = i.context.loggedInUserId === i.props.tweet.user.id_str
                return E()(E()({}, n && y()({}, n, t)), a && !r && y()({}, a, i._handleBlockOrUnblockConfirmOpen))
              }),
              y()(m()(i), '_handleBlockOrUnblockConfirmOpen', function () {
                i.setState({ showBlockOrUnblockConfirmation: !0 })
              }),
              y()(m()(i), '_handleBlockOrUnblockConfirmClose', function () {
                i.setState({ showBlockOrUnblockConfirmation: !1 })
              }),
              y()(m()(i), '_handleBlockOrUnblockUserConfirm', function () {
                var e = i._getBlockOrUnblockAction().onClick
                i._handleBlockOrUnblockConfirmClose(), e && e()
              }),
              y()(m()(i), '_getBaseTweetProps', function () {
                var e = i.props,
                  t = e.contextualClientEventInfo,
                  n = e.conversationTreeMetadata,
                  a = e.feedbackItems,
                  r = e.focalTweetId,
                  o = e.forwardPivotInfo,
                  l = e.isNsfwUser,
                  c = e.isPinned,
                  s = e.onTweetDismiss,
                  d = e.ruxContext,
                  u = e.saveAsRecentSearch,
                  p = e.scribeData,
                  h = e.shouldStoreTypeaheadItem,
                  m = e.socialContext,
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
                  I = e.withViewHiddenReplies,
                  S = ye.a.getOriginalTweet(b),
                  x = i._getPromotedContent(),
                  k = p.items && p.items[0] && p.items[0].suggestion_details,
                  A = i._isSelected(),
                  L = S && S.card && !b.is_quote_status ? S.card.url : void 0,
                  O = i.context.loggedInUserId,
                  P = S.user.id_str === O,
                  B = !S.in_reply_to_status_id_str && P && !S.community_id_str,
                  R = i._renderConversationControlsTooltip()
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
                  promotedContent: x,
                  renderCurationActionMenu:
                    _ && !b.isPreview
                      ? i._getRenderCurationActionMenu(
                          o && o.displayType,
                          a,
                          w,
                          l,
                          c,
                          A,
                          i._handleCaretClick,
                          s,
                          x,
                          S,
                          E,
                          y,
                          C,
                          T,
                          B,
                          I,
                          n,
                          null == t ? void 0 : t.entityToken,
                          R,
                          v,
                          g,
                        )
                      : void 0,
                  saveAsRecentSearch: u,
                  shouldStoreTypeaheadItem: h,
                  to: {
                    state: {
                      focal: S.id_str,
                      socialContext: m,
                      contextualClientEventInfo: t,
                      contextTweetId: b.id_str,
                      promotedContent: x,
                      suggestionDetails: k,
                      topicFollowPrompt: f,
                    },
                    pathname: S.permalink,
                    query: d ? { cxt: d } : void 0,
                  },
                }
              }),
              y()(m()(i), '_getReaderModeTweetProps', function () {
                var e,
                  t = i.props,
                  n = t.contextualClientEventInfo,
                  a = t.ruxContext,
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
                  onAnalyticsClick: Be.a,
                  onAvatarClick: Be.a,
                  onBlur: i._handleBlur,
                  onCardLinkClick: i._handleCardLinkClick,
                  onClick: c.isPreview ? i._handlePreviewClick : i._handleTweetClick,
                  onEntityClick: Be.a,
                  onFocus: i._handleFocus,
                  onMediaClick: i._handleEmbeddedMediaClick,
                  onReplyContextClick: Be.a,
                  to: {
                    state: {
                      focal: d.id_str,
                      socialContext: o,
                      contextualClientEventInfo: n,
                      contextTweetId: c.id_str,
                      promotedContent: u,
                      suggestionDetails: p,
                      topicFollowPrompt: l,
                    },
                    pathname: d.permalink,
                    query: a ? { cxt: a } : void 0,
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
              y()(m()(i), '_getInlineCalloutInfo', function () {
                var e = i.props,
                  t = e.displaySensitiveMedia,
                  n = e.isNsfwUser,
                  a = e.scribeNamespace,
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
                    isNsfwUser: n,
                    loggedInUserId: d,
                    tweet: r,
                    userCountry: o,
                    userLanguage: l,
                  })
                )
                  return Object(Ae.d)(r, a)
              }),
              y()(m()(i), '_getBlockOrUnblockAction', function () {
                var e = i.props,
                  t = e.addToast,
                  n = e.block,
                  a = e.contextualClientEventInfo,
                  r = e.createLocalApiErrorHandler,
                  o = e.tweet,
                  l = e.unblock,
                  c = o.user,
                  s = i._getPromotedContent(),
                  d = {
                    addToast: t,
                    behavioralEventEntityToken: null == a ? void 0 : a.entityToken,
                    createLocalApiErrorHandler: r,
                    scribeAction: function (e) {
                      var t = e.element
                      i._scribeAction({ element: t, action: 'click' })
                    },
                  }
                return Object(S.a)(E()(E()({}, d), {}, { block: n, unblock: l, user: c, promotedContent: s }))
              }),
              y()(m()(i), '_getMuteOrUnmuteAction', function () {
                var e = i.props,
                  t = e.addToast,
                  n = e.contextualClientEventInfo,
                  a = e.createLocalApiErrorHandler,
                  r = e.mute,
                  o = e.tweet,
                  l = e.unmute,
                  c = o.user,
                  s = {
                    addToast: t,
                    behavioralEventEntityToken: null == n ? void 0 : n.entityToken,
                    createLocalApiErrorHandler: a,
                    scribeAction: function (e) {
                      var t = e.element
                      i._scribeAction({ element: t, action: 'click' })
                    },
                  },
                  d = i._getPromotedContent()
                return Object(ce.a)(E()(E()({}, s), {}, { mute: r, unmute: l, user: c, promotedContent: d }))
              }),
              y()(m()(i), '_renderConversationControlsTooltip', function () {
                var e = i.context.loggedInUserId,
                  t = i.props,
                  n = t.showMidConversationControlEducationText,
                  a = t.tweet,
                  r = ye.a.getOriginalTweet(a)
                if (!r) return !1
                var o = !!r.community_id_str,
                  l = r.user.id_str === e,
                  c = r.reply_count > 0
                return !r.in_reply_to_status_id_str && l && c && !o && n
              }),
              y()(
                m()(i),
                '_getRenderCurationActionMenu',
                Object(Re.a)(function (e, t, n, a, r, i, o, l, c, s, d, u, p, h, m, f, b, v, g, w, y) {
                  return function () {
                    return T.a.createElement(fe.a, {
                      behavioralEventEntityToken: v,
                      feedbackItems: t,
                      forwardPivotDisplayType: e,
                      isDisabled: n,
                      isNsfwUser: a,
                      isPinned: r,
                      onMenuClick: o,
                      onTweetDismiss: l,
                      promotedContent: c,
                      tweet: s,
                      userCountry: w,
                      userLanguage: y,
                      withChangeConversationControls: m,
                      withChangeConversationControlsTooltip: g,
                      withCommunityModerationAuthority: u,
                      withHideReply: d,
                      withMuteConversation: p,
                      withUnhideReply: h,
                      withViewHiddenReplies: f,
                    })
                  }
                }),
              ),
              y()(
                m()(i),
                '_getDefaultScribeData',
                Object(Re.a)(function (e, t, n, a, r, o) {
                  var l = (function (e) {
                    var t = e.clickTrackingEmbedDetails,
                      n = e.contextualScribeData,
                      a = e.isSelected,
                      r = e.overflow,
                      i = e.promotedContent,
                      o = e.scribeData,
                      l = e.tweet,
                      c = de.a.addTweetToItems(o ? o.items : [], l, i, a, r)
                    return E()(
                      E()(E()(E()({}, n || {}), o || {}), t && { click_tracking_embed_details: t }),
                      {},
                      { items: c },
                    )
                  })({
                    tweet: e,
                    promotedContent: t,
                    scribeData: n,
                    overflow: a,
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
              y()(m()(i), '_scribeAction', function (e) {
                var t,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  a = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  o = arguments.length > 4 ? arguments[4] : void 0,
                  l = i.props,
                  s = l.analytics,
                  d = l.history,
                  u = l.richScribeAction,
                  p = l.scribeData,
                  h = l.scribeNamespace,
                  m = l.tweet,
                  f = null === (t = d.location.state) || void 0 === t ? void 0 : t.overflow,
                  b = i._getPromotedContent(),
                  v = p
                if (r) {
                  var g = de.a.getUserItem(m.user, b),
                    w = v.items ? [].concat(c()(v.items), [g]) : [g]
                  v = E()(E()({}, v), {}, { items: w })
                }
                if (o) {
                  var y = { article_details: { is_ad_free: o } },
                    _ = v.items ? [].concat(c()(v.items), [y]) : [y]
                  v = E()(E()({}, v), {}, { items: _ })
                }
                var C = i._getDefaultScribeData(ye.a.getOriginalTweet(m), b, v, f, s.contextualScribeData, a)
                u(E()(E()({}, h), e), E()(E()({}, C), n))
              }),
              y()(m()(i), '_handlePoliticalSponsorWebsiteClick', function () {
                i._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
              }),
              y()(m()(i), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
                return function () {
                  i._scribeAction({ component: e, element: 'learn_more', action: 'click' })
                }
              }),
              y()(m()(i), '_handlePromotedIndicatorClick', function () {
                i._handleAsyncPromotedEvent(xe.b.FOOTER_PROFILE)
              }),
              y()(m()(i), '_handleFocus', function () {
                i.setState({ enableKeyboardShortcuts: !0 })
              }),
              y()(m()(i), '_handleBlur', function () {
                i.setState({ enableKeyboardShortcuts: !1 })
              }),
              y()(m()(i), '_getPromotedContent', function () {
                var e = i.props,
                  t = e.displayPromotedContent,
                  n = e.tweet
                return t ? n.promoted_content : void 0
              }),
              y()(m()(i), '_handleImpression', function (e) {
                i._shouldLogPromotedImpression(e) && i._handleAsyncPromotedEvent(xe.b.IMPRESSION)
              }),
              y()(m()(i), '_handleFullyVisible', function (e) {
                i._shouldLogPromotedImpression(e) && i._handleAsyncPromotedEvent(xe.b.DWELL)
              }),
              y()(m()(i), '_handleResize', function (e, t) {
                !i._isProbablyRemovedByAdBlocker(e) &&
                  i._isProbablyRemovedByAdBlocker(t) &&
                  (I.a.recordAdBlockerPresence(),
                  i._isCompatibilityScribeEnabled && i._scribeAction({ action: 'blocked_ad' }))
              }),
              y()(m()(i), '_handleInlineReplyClick', function (e) {
                var t = i.context.loggedInUserId,
                  n = i.props,
                  a = n.history,
                  r = n.tweet,
                  o = i._getPromotedContent()
                e.preventDefault(),
                  i._scribeAction({ element: 'inline_reply', action: 'reply' }),
                  a.push({
                    state: {
                      inReplyToStatusId: r.id_str,
                      isSelfThreadReply: !!t && Object(Ae.c)({ tweet: r, loggedInUserId: t }),
                      promotedContent: o,
                    },
                    pathname: '/compose/tweet',
                  })
              }),
              y()(m()(i), '_handleLikeSuccess', function () {
                if (i.context.featureSwitches.isTrue('home_timeline_like_reactivity_enabled')) {
                  var e = i.props.onLike,
                    t = 'LikeReactionFatigue'
                  try {
                    var n = JSON.parse(window.sessionStorage.getItem(t)) || 0
                    n < i.context.featureSwitches.getNumberValue('home_timeline_like_reactivity_fatigue') &&
                      e &&
                      e().then(function (e) {
                        null != e && e.performed && window.sessionStorage.setItem(t, JSON.stringify(n + 1))
                      })
                  } catch (a) {}
                }
              }),
              y()(m()(i), '_handleReplyContextClick', function (e, t) {
                return i._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
              }),
              y()(m()(i), '_handleAsyncPromotedEvent', function (e, t) {
                var n = i.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.log,
                  o = n.tweet,
                  l = i._getPromotedContent()
                if (l) {
                  var c = l.disclosure_type,
                    s = l.impression_id
                  r({
                    disclosureType: c,
                    itemId: o.id_str,
                    itemType: xe.c.TWEET,
                    params: E()({ event: e, impression_id: s }, t),
                  }).catch(a())
                }
              }),
              y()(m()(i), '_handleModeratedIconClick', function () {
                return i._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
              }),
              y()(m()(i), '_handleModeratedIconShown', function () {
                return i._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
              }),
              y()(m()(i), '_handleBirdwatchNotesIconClick', function () {
                return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
              }),
              y()(m()(i), '_handleBirdwatchNotesIconShown', function () {
                return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
              }),
              y()(m()(i), '_handleAnalyticsClick', function () {
                i._scribeAction({ element: 'analytics', action: 'click' })
              }),
              y()(m()(i), '_handlePromoteButtonClick', function () {
                i._scribeAction({ element: 'promote', action: 'click' })
              }),
              y()(m()(i), '_handlePromoteAgainButtonClick', function () {
                i._scribeAction({ element: 'promote_again', action: 'click' })
              }),
              y()(m()(i), '_handleAvatarClick', function () {
                var e = i.props.tweet
                i._handleSaveAsRecentSearchUser(),
                  i._scribeAction(
                    { element: 'avatar', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  i._handleAsyncPromotedEvent(xe.b.PROFILE_IMAGE_CLICK)
              }),
              y()(m()(i), '_handleCaretClick', function () {
                return i._scribeAction({ element: 'caret', action: 'click' })
              }),
              y()(
                m()(i),
                '_handleTweetClick',
                Object(ue.a)(function (e) {
                  if (!e.defaultPrevented) {
                    if ((e.stopPropagation(), window.getSelection().toString().length)) return
                    i._scribeAction({ element: 'tweet', action: 'click' }),
                      i._handleAsyncPromotedEvent(xe.b.VIEW_DETAILS)
                  }
                }),
              ),
              y()(m()(i), '_handlePreviewClick', function (e) {
                e.preventDefault()
              }),
              y()(m()(i), '_handleEmbeddedMediaPreviewClick', function (e) {
                null == e || e.preventDefault()
              }),
              y()(m()(i), '_handleEmbeddedMediaClick', function () {
                i._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                  i._handleAsyncPromotedEvent(xe.b.EMBEDDED_MEDIA)
              }),
              y()(m()(i), '_handleQuoteTweetClick', function () {
                i._scribeAction({ element: 'tweet', action: 'click' }), i._handleAsyncPromotedEvent(xe.b.VIEW_DETAILS)
              }),
              y()(m()(i), '_handleEntityClick', function (e, t, n) {
                var a = i.props,
                  r = a.adFreeArticleDomains,
                  l = a.createLocalApiErrorHandler,
                  c = a.fetchAdFreeToken,
                  s = a.tweet,
                  d = xe.a[t],
                  u = ne.a[t],
                  p = i._getPromotedContent(),
                  h = de.a.getClickTrackingEmbedDetails(p, n)
                if (d) {
                  var m =
                    d === xe.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                      ? { url: e.currentTarget.href }
                      : void 0
                  i._handleAsyncPromotedEvent(d, m)
                }
                if (t === _e.a.MEDIA) return i._handleTweetClick(e)
                t === _e.a.URL && h && i._scribeAction({ action: Ee.b.CLICK_ID_EMBED }, {}, h)
                var f = !1
                if (i._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                  var b = new URL(n.expandedUrl).hostname,
                    v = new ae.a(c, l()).getAdFreeArticlesClickHandler({
                      destinationUrl: n.embeddedUrl,
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
                  var _ = null != n && n.text ? [{ item_type: pe.a.ItemType.USER, name: n.text, id: n.id_str }] : void 0
                  return i._scribeAction({ action: u }, { targets: _ }, void 0, void 0, f)
                }
                if (t === _e.a.HASHTAG) {
                  var E = null != n && n.text ? [{ name: n.text }] : void 0
                  return i._scribeAction({ action: u }, { targets: E }, void 0, void 0, f)
                }
                if (t === _e.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                  return i._scribeAction(
                    { element: 'interactive_text', action: u },
                    { interactive_text_details: { id: n.id } },
                    void 0,
                    void 0,
                    f,
                  )
                u && i._scribeAction({ action: u }, void 0, void 0, void 0, f)
              }),
              y()(m()(i), '_handleScreenNameClick', function () {
                var e = i.props.tweet
                i._handleSaveAsRecentSearchUser(),
                  i._scribeAction(
                    { element: 'user', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  i._handleAsyncPromotedEvent(xe.b.SCREEN_NAME_CLICK)
              }),
              y()(m()(i), '_handleSelfThreadClick', function () {
                return i._scribeAction({ element: 'self_thread', action: 'click' })
              }),
              y()(m()(i), '_handleSelfThreadImpression', function () {
                return i._scribeAction({ element: 'self_thread', action: 'impression' })
              }),
              y()(m()(i), '_handleTopicFetch', function () {
                var e,
                  t = i.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.fetchTopicIfNeeded,
                  r = t.socialContext,
                  o = r && (null === (e = r.topicContext) || void 0 === e ? void 0 : e.topicId)
                o && a(o).catch(n())
              }),
              y()(m()(i), '_handleCommunityFetch', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCommunityIfNeeded,
                  a = e.tweet
                if (i._isCommunitiesEnabled && a) {
                  var r,
                    o = a.community_id_str,
                    l = null === (r = a.quoted_status) || void 0 === r ? void 0 : r.community_id_str
                  o && n(o).catch(t()), l && n(l).catch(t())
                }
              }),
              y()(m()(i), '_handleUndoTopicNotInterested', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.topic,
                  a = e.undoTopicNotInterested
                i._scribeAction({ element: 'topic', action: 'un_not_interested' }), n && a(n.id).catch(t())
              }),
              y()(m()(i), '_handleCardLinkClick', function (e) {
                var t,
                  n = i.props,
                  a = n.adFreeArticleDomains,
                  r = n.analytics,
                  l = n.createLocalApiErrorHandler,
                  c = n.fetchAdFreeToken,
                  s = n.isCardArticle,
                  d = n.setArticlesVisited,
                  u = n.tweet
                if (s && i._isArticleNudgeEnabled) {
                  var p,
                    h,
                    m = null == u || null === (p = u.card) || void 0 === p ? void 0 : p.url
                  if (m)
                    d(m),
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
                var f = null == u || null === (t = u.card) || void 0 === t ? void 0 : t.binding_values
                if (i._hasClaimsForAdFreeArticles && f) {
                  var b = new ae.a(c, l()).getAdFreeArticlesClickHandler({
                      destinationUrl: Ce.a.getBindingValue(f, 'card_url'),
                      linkDomain: Ce.a.getBindingValue(f, 'domain'),
                      adFreeArticleDomains: a,
                    }),
                    v = o()(b, 2),
                    g = v[0],
                    w = v[1]
                  g && w(e)
                }
              }),
              y()(m()(i), '_handleSaveAsRecentSearchUser', function () {
                var e = i.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  a = e.tweet.user
                t && n && n(pe.a.ItemType.USER) && t({ user: { id: a.id_str, type: se.a.User } })
              }),
              y()(m()(i), '_isSelected', function () {
                var e = i.props,
                  t = e.conversationTreeMetadata,
                  n = e.tweet,
                  a = (t || {}).selectedTweet
                return a && n.id_str === a.selectedTweetId
              }),
              y()(m()(i), '_handleMediaHashtagHighlightClick', function () {
                i._handleAsyncPromotedEvent(xe.b.HASHTAG_CLICK)
              }),
              (i.state = { displayReported: !1, enableKeyboardShortcuts: !1, showBlockOrUnblockConfirmation: !1 })
            var l = i._getPromotedContent()
            return (
              (i._shouldHidePromotedTweet =
                Te.a.isPromoted(l) && I.a.shouldHidePromotedTweets(i.context.featureSwitches)),
              i
            )
          }
          return (
            p()(n, [
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
                    n = t.conversationPosition,
                    a = t.conversationTreeMetadata,
                    r = t.showWithheldBannerOnMyTweets,
                    i = t.tweet
                  if (!this._shouldRender())
                    return a
                      ? T.a.createElement(he.a, { conversationPosition: n, conversationTreeMetadata: a }, Ne)
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
                    n = e.forwardPivotInfo,
                    a = e.history,
                    r = e.tweet,
                    i = e.tweetId
                  if (
                    r &&
                    'focal_module' === (null == t ? void 0 : t.component) &&
                    a.location.pathname.indexOf('/intent/') > -1 &&
                    a.location.query.tweet_id === i
                  )
                    return T.a.createElement(oe.a, {
                      forwardPivotInfo: n,
                      history: a,
                      location: a.location,
                      tweetId: r.id_str,
                    })
                },
              },
              {
                key: '_renderWithheldTweet',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.conversationTreeMetadata,
                    a = e.tweet,
                    r = a.user.id_str,
                    i = ye.a.getOriginalTweet(a),
                    o = this.context.loggedInUserId,
                    l = !!o && o === r && i.retweeted,
                    c = i.withheld_text || i.text,
                    s = i.withheld_entities || i.entities,
                    d = a.user.id_str === o
                  return T.a.createElement(De.a, {
                    conversationPosition: t,
                    conversationTreeMetadata: d ? void 0 : n,
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
                    n = e.conversationTreeMetadata,
                    a = e.tweet,
                    r = ye.a.getOriginalTweet(a),
                    i = Object(Le.c)(r.reportingVisibility)
                  return T.a.createElement(
                    he.a,
                    {
                      actionText: Fe,
                      conversationPosition: t,
                      conversationTreeMetadata: n,
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
                    n = t.allowDownvote,
                    a = t.analytics,
                    r = t.bookmarkFolderId,
                    i = t.contextTweet,
                    o = t.conversationPosition,
                    l = t.conversationTreeMetadata,
                    c = t.displayBlocked,
                    s = t.forwardPivotInfo,
                    d = t.hasModeratedReplies,
                    u = t.hideConversationControlsEducationText,
                    p = t.hideExclusivityInfoEducationTextInReplies,
                    h = t.hideTrustedFriendsEducationTextInReplies,
                    m = t.history,
                    f = t.hitHighlights,
                    b = t.injectedFeedbackItem,
                    v = t.innerForwardPivotInfo,
                    g = t.isReaderMode,
                    w = t.isUnread,
                    y = t.linkify,
                    _ = t.loggedInUser,
                    C = t.promotedContentAdvertiser,
                    I = t.quoteTweetSocialContextProps,
                    S = t.quotedTweetTombstoneInfo,
                    x = t.replyContext,
                    k = t.scribeData,
                    A = t.scribeNamespace,
                    L = t.shouldSelfThreadIncludeAvatar,
                    O = t.socialContext,
                    P = t.topic,
                    B = t.topicFollowPrompt,
                    R = t.tweet,
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
                    q = ye.a.getOriginalTweet(R),
                    G = this._getPromotedContent(),
                    Q = Object(Me.a)(this._cachedScribeNamespace, A)
                      ? this._cachedScribeNamespace
                      : (this._cachedScribeNamespace = A),
                    X = null === (e = m.location.state) || void 0 === e ? void 0 : e.overflow,
                    Y = {
                      allowDownvote: n,
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
                      hideTrustedFriendsEducationTextInReplies: h,
                      hitHighlights: f,
                      injectedFeedbackItem: b,
                      innerForwardPivotInfo: v,
                      linkify: y,
                      loggedInUser: _,
                      promotedContentAdvertiser: C,
                      quotedTweetTombstoneInfo: S,
                      quoteTweetSocialContextProps: I,
                      replyContext: x,
                      shouldSelfThreadIncludeAvatar: L,
                      socialContext: O,
                      topic: P,
                      topicFollowPrompt: B,
                      tweet: R,
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
                    Z = E()(E()({}, Y), g ? this._getReaderModeTweetProps() : this._getBaseTweetProps()),
                    J = T.a.createElement(
                      Se.c,
                      { data: this._getDefaultScribeData(q, G, k, X, a.contextualScribeData, void 0), namespace: Q },
                      T.a.createElement(
                        le.a,
                        { enabled: !!K, handlers: this._getShortcutKeyHandlers() },
                        T.a.createElement(me.b, Z),
                      ),
                    )
                  return G
                    ? T.a.createElement(
                        Pe,
                        {
                          id: R.id_str,
                          onFullyVisible: this._handleFullyVisible,
                          onResize: this._handleResize,
                          onVisible: this._handleImpression,
                        },
                        J,
                      )
                    : J
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
                    n = this.props,
                    a = n.displayBlocked,
                    r = n.focalTweetId,
                    i = n.tweet,
                    o = ye.a.getOriginalTweet(i),
                    l =
                      !(null == i || null === (e = i.user) || void 0 === e || !e.blocking) ||
                      !(null == o || null === (t = o.user) || void 0 === t || !t.blocking)
                  return r !== i.id_str && !a && l
                },
              },
            ]),
            n
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
            n,
            a,
            i = T.a.useContext(Ie.a)
          return (
            (t = e.tweetId),
            (n = e.tweet),
            (a = Object(ve.b)()),
            T.a.useEffect(
              function () {
                n || a.scribe({ action: 'hydration_failed', data: { tweet_id: t } })
              },
              [a, n, t],
            ),
            e.tweet ? T.a.createElement(He, r()({}, e, { history: i, tweet: e.tweet })) : null
          )
        }
      ze.defaultProps = He.defaultProps
      var We = te(ze)
      t.b = Object(Se.a)({ component: 'tweet' })(We)
    },
    yygM: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
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
