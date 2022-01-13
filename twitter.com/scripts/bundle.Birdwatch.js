;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36, 167],
  {
    '/ZwF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchTweetNotesScreen', function () {
          return re
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('z84I'), n('uFXj'), n('ERkP')),
        c = n('v6aA'),
        i = n('ZD0R'),
        l = n('vZpt'),
        s = n('L5MV'),
        u = (n('WNMA'), n('KqXw'), n('MvLc')),
        d = n('XOJV'),
        f = n('rxPX'),
        b = n('0KEI'),
        p = function (e, t) {
          return t.match.params.tweetId
        },
        m = function (e, t) {
          return u.r(e, p(0, t))
        },
        h = function (e, t) {
          return u.w(e, p(0, t))
        },
        y = function (e, t) {
          return u.v(e, p(0, t))
        },
        g = Object(f.a)()
          .propsFromState(function () {
            return { ownNoteData: h, fetchStatus: y, tweetId: p, notes: m }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: u.j,
              fetchTweet: d.a.fetchOneIfNeeded,
              fetchUserAlias: u.k,
            }
          }),
        v = n('kGix'),
        w = n('3XMw'),
        E = n.n(w),
        O = n('yoO3'),
        S = n('7JQg'),
        _ = n('VS6U'),
        C = n('xZXe'),
        j = n('MWbm'),
        T = n('FIs5'),
        x = n('htQn'),
        I = n('6vad'),
        A = n('0yYu'),
        P = n('t62R'),
        L = n('/yvb'),
        D = n('Qwev'),
        R = n('rHpw'),
        B = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        N = n.n(B),
        k = n('Lsrn'),
        H = n('k/Ka')
      function M(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                N()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(H.a)(
          'svg',
          F(
            F({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [k.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zM9.145 16.033c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.046c0-.414.336-.75.75-.75s.75.336.75.75v5.046zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.95c0-.415.336-.75.75-.75s.75.335.75.75v9.083zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.56c0-.414.336-.75.75-.75s.75.336.75.75v6.56z',
            }),
          ),
        )
      }
      z.metadata = { width: 24, height: 24 }
      var W = z,
        U = n('Nh1N'),
        K = E.a.h8335712,
        V = E.a.fe27c1e1,
        X = E.a.c59107c3,
        G = E.a.i859a9d3,
        Q = E.a.ib73f867,
        Z = E.a.efd14e79,
        q = E.a.d06b723c,
        Y = E.a.j0790071,
        J = E.a.j679dcda,
        $ = E.a.d4f03f72,
        ee = E.a.d94e246a,
        te = E.a.ia596d40,
        ne = E.a.deff0bdd,
        ae = o.createElement(T.a, { buttonLink: '/i/birdwatch/about', buttonText: G, header: Q }),
        re = function (e) {
          var t = o.useContext(c.a).featureSwitches,
            n = e.createLocalApiErrorHandler,
            a = e.fetchNotes,
            u = e.fetchStatus,
            d = e.fetchTweet,
            f = e.fetchUserAlias,
            b = e.history,
            p = e.notes,
            m = e.ownNoteData,
            h = e.tweetId,
            y = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            g =
              t.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
              t.isTrue('responsive_web_birdwatch_rating_crowd_enabled'),
            w = o.useMemo(
              function () {
                return { page: 'birdwatch', section: y ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [y],
            ),
            E = o.useState(m),
            T = r()(E, 2),
            R = T[0],
            B = T[1],
            N = function (e) {
              B(null)
            }
          o.useEffect(
            function () {
              h && (a(h).catch(n()), d(h).catch(n()))
            },
            [n, a, d, h],
          ),
            o.useEffect(
              function () {
                B(m)
              },
              [m],
            ),
            o.useEffect(
              function () {
                f().catch(n())
              },
              [n, f],
            )
          var k, H
          return o.createElement(
            S.b,
            { namespace: w },
            o.createElement(
              O.a,
              null,
              o.createElement(_.a, {
                TabBar: s.a,
                backLocation: '/i/birdwatch',
                history: b,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent:
                  ((k = R || p.length),
                  (H = '/i/birdwatch/contribute/'.concat(h)),
                  o.createElement(
                    x.a,
                    null,
                    o.createElement(
                      j.a,
                      { style: oe.contentWrapper },
                      o.createElement(
                        j.a,
                        { style: oe.withBottomBorder },
                        o.createElement(C.b, {
                          displayPromotedContent: !1,
                          tweetId: h,
                          withActions: !0,
                          withActionsDisabled: !0,
                          withBirdwatchPivots: !1,
                          withCurationMenu: !1,
                        }),
                      ),
                      k
                        ? o.createElement(
                            o.Fragment,
                            null,
                            R &&
                              o.createElement(
                                j.a,
                                null,
                                o.createElement(I.b, { text: K }),
                                o.createElement(i.a, { handleDelete: N, note: R }),
                              ),
                            !!p.length &&
                              o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(A.a, { withTopBorder: !1 }),
                                o.createElement(I.b, { text: V }),
                                o.createElement(
                                  j.a,
                                  { style: [oe.actionModuleContainer, oe.withBottomBorder] },
                                  o.createElement(
                                    j.a,
                                    { style: oe.actionModule },
                                    g
                                      ? o.createElement(W, { style: oe.icon })
                                      : o.createElement(U.a, { style: oe.icon }),
                                    o.createElement(
                                      P.b,
                                      { size: 'headline1', style: oe.header, weight: 'bold' },
                                      g ? q : $,
                                    ),
                                    o.createElement(P.b, { color: 'gray700' }, g ? Y : ee),
                                    g
                                      ? o.createElement(
                                          P.b,
                                          {
                                            link: {
                                              external: !0,
                                              pathname: 'https://twitter.github.io/birdwatch/note-examples',
                                            },
                                          },
                                          J,
                                        )
                                      : o.createElement(
                                          P.b,
                                          {
                                            link: {
                                              external: !0,
                                              pathname: 'https://twitter.github.io/birdwatch/overview',
                                            },
                                          },
                                          G,
                                        ),
                                  ),
                                ),
                                p.map(function (e) {
                                  return o.createElement(
                                    o.Fragment,
                                    { key: e.rest_id },
                                    o.createElement(i.a, { note: e }),
                                    o.createElement(A.a, { withTopBorder: !1 }),
                                  )
                                }),
                                y && !R
                                  ? o.createElement(
                                      j.a,
                                      { style: oe.actionModuleContainer },
                                      o.createElement(
                                        j.a,
                                        { style: oe.actionModule },
                                        o.createElement(P.b, { style: oe.improveText }, te),
                                        o.createElement(
                                          L.a,
                                          { accessibilityLabel: ne, link: H, type: 'brandOutlined' },
                                          ne,
                                        ),
                                      ),
                                    )
                                  : null,
                              ),
                          )
                        : u === v.a.LOADING
                        ? o.createElement(D.a, { accessibilityLabel: Z, size: 'large', style: oe.spinner })
                        : ae,
                    ),
                  )),
                sidebarContent: o.createElement(l.a, null),
                title: X,
                withTweetButton: !1,
              }),
            ),
          )
        },
        oe = R.a.create(function (e) {
          return {
            actionModule: {
              alignItems: 'center',
              paddingTop: e.spaces.space20,
              paddingBottom: e.spaces.space32,
              textAlign: 'center',
              width: '70%',
            },
            actionModuleContainer: { alignItems: 'center' },
            contentWrapper: { backgroundColor: e.colors.cellBackground, paddingBottom: e.spaces.space48 },
            header: { paddingBottom: e.spaces.space12 },
            icon: {
              color: e.colors.primary,
              height: e.spaces.space48,
              marginBottom: e.spaces.space20,
              width: e.spaces.space48,
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
        ce = g(re)
      t.default = ce
    },
    '0SuV': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchPrinciples', function () {
          return x
        })
      n('MvUL'), n('KqXw'), n('7x/C'), n('lTEL'), n('kYxP')
      var a = n('ERkP'),
        r = (n('WNMA'), n('MvLc')),
        o = n('rxPX'),
        c = n('0KEI'),
        i = function (e, t) {
          return t.match.params.tweetId
        },
        l = function (e, t) {
          return r.w(e, i(0, t))
        },
        s = Object(o.a)()
          .propsFromState(function () {
            return { ownNoteData: l, tweetId: i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: r.j,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form', component: 'values' }),
        u = n('3XMw'),
        d = n.n(u),
        f = n('5FtR'),
        b = n('aITJ'),
        p = n('MWbm'),
        m = n('t62R'),
        h = n('h0NW'),
        y = n('feu+'),
        g = n('rHpw'),
        v = n('yygM'),
        w = n('QDet'),
        E = n('wz7L'),
        O = d.a.gfa725ae,
        S = d.a.c3d89aca,
        _ = d.a.h7ad677b,
        C = d.a.eac7b6ab,
        j = d.a.b0381cfb,
        T = d.a.f0addddc,
        x = function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.fetchNotes,
            o = e.history,
            c = e.ownNoteData,
            i = e.tweetId,
            l = i ? '/i/birdwatch/'.concat(i, '/contribute_complete') : '/'
          a.useEffect(
            function () {
              i && r(i).catch(n())
            },
            [n, r, i],
          )
          var s = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            u = function (e) {
              return a.createElement(p.a, { style: I.valueItem }, a.createElement(m.b, { color: 'gray700' }, e))
            },
            d = {
              accessibilityLabel: O,
              items: [
                { label: '', decoration: a.createElement(v.a, null), description: u(C) },
                { label: '', decoration: a.createElement(w.a, null), description: u(j) },
                { label: '', decoration: a.createElement(E.a, null), description: u(T) },
              ],
            },
            g = a.createElement(p.a, { style: I.values }, a.createElement(h.a, d))
          return c
            ? a.createElement(f.a, { to: l })
            : a.createElement(y.a, {
                actionLabel: S,
                graphicDisplayMode: 'none',
                headline: _,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), i && o.replace('/i/birdwatch/contribute_form/'.concat(i))
                },
                onClose: function () {
                  s('close'), i && o.goBackThroughModals({ fallbackPath: '/i/status/'.concat(i) })
                },
                subtext: g,
                withCloseButton: !b.b.isTwitterApp(),
              })
        },
        I = g.a.create(function (e) {
          return {
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        A = s(x)
      t.default = A
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        l = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        f = n.n(d),
        b = n('ERkP'),
        p = n('rHpw'),
        m = n('MWbm')
      function h(e) {
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          l()(n, e)
          var t = h(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return b.createElement(m.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(b.Component),
        g = p.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        l = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        f = n.n(d),
        b = n('ERkP'),
        p = n('3XMw'),
        m = n.n(p),
        h = n('rHpw'),
        y = n('+/1j'),
        g = n('MWbm')
      function v(e) {
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var w = m.a.e5b0063d,
        E = 0,
        O = (function (e) {
          l()(n, e)
          var t = v(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(E)), (E += 1), e
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = w({ title: n })
                  return b.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    b.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: h.a.visuallyHidden,
                      },
                      n,
                    ),
                    b.createElement(g.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.a = O
    },
    '89Im': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M11.47 14.53c.146.146.338.22.53.22s.384-.073.53-.22l5-5c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.72 3.72V2c0-.414-.337-.75-.75-.75s-.75.336-.75.75v10.19L7.53 8.47c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l5 5z',
            }),
            o.createElement('path', {
              d: 'M21.25 13.25c-.414 0-.75.336-.75.75v5.652c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V14c0-.414-.336-.75-.75-.75S2 13.586 2 14v5.652c0 1.264 1.028 2.292 2.292 2.292h15.416c1.264 0 2.292-1.028 2.292-2.292V14c0-.414-.336-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    '9StO': function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('7x/C'), n('lTEL'), n('kYxP'), n('jwue'), n('+oxZ'), n('ERkP')),
        c = n.p + 'birdwatch_owl.9e2a1755.png',
        i = n('MvLc'),
        l = n('1YZw'),
        s = n('rxPX'),
        u = n('0KEI'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { aliasSelfSelectOptions: i.m }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchAliasSelfSelectOptions: i.e,
              selectAlias: i.l,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'alias_select' }),
        f = n('W6+M'),
        b = n('3XMw'),
        p = n.n(b),
        m = n('t62R'),
        h = n('h0NW'),
        y = n('feu+'),
        g = n('gSL+'),
        v = n('Qwev'),
        w = n('4zmP'),
        E = n('rHpw'),
        O = n('j7Bv'),
        S = n('ms2t'),
        _ = n('VwDm'),
        C = n('EQ/a'),
        j = n('U+bB'),
        T = n('MWbm'),
        x = p.a.f084f1cd,
        I = p.a.ja0ee36f,
        A = p.a.j761c248,
        P = p.a.h66bd30a,
        L = p.a.j48ab593,
        D = p.a.e17c80bc,
        R = p.a.d939cf16,
        B = p.a.a56f0c32,
        N = p.a.d17c59e4,
        k = p.a.i719f8e1,
        H = p.a.d0e190cd,
        M = p.a.e74a2cd5,
        F = p.a.g9677c6d,
        z = p.a.e4a6e006,
        W = p.a.f83d0446,
        U = function (e) {
          return o.createElement(m.b, { weight: 'bold' }, e)
        },
        K = function () {
          return o.createElement(j.a, { source: c, style: V.image })
        },
        V = E.a.create(function (e) {
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
        X = o.createElement(O.a, { Icon: S.a, color: 'neutral', size: 'large', style: V.aliasIcon }),
        G = {
          accessibilityLabel: x,
          containerStyle: V.infoItemContainer,
          items: [
            { label: U(L), decoration: o.createElement(S.a, { style: V.icon }), description: D },
            { label: U(R), decoration: o.createElement(_.a, { style: V.icon }), description: B },
            { label: U(N), decoration: o.createElement(C.a, { style: V.icon }), description: k },
          ],
        },
        Q = d(function (e) {
          var t = e.addToast,
            n = e.aliasSelfSelectOptions,
            a = e.createLocalApiErrorHandler,
            c = e.fetchAliasSelfSelectOptions,
            i = e.onAliasSelected,
            l = e.selectAlias,
            s = o.useState(!0),
            u = r()(s, 2),
            d = u[0],
            b = u[1],
            p = o.useState(''),
            E = r()(p, 2),
            O = E[0],
            S = E[1],
            _ = o.useState(!1),
            C = r()(_, 2),
            j = C[0],
            x = C[1]
          o.useEffect(
            function () {
              c()
                .then(function (e) {
                  e && e[0] ? S(e[0]) : x(!0)
                })
                .catch(a())
            },
            [a, c],
          )
          var L,
            D,
            R = o.createElement(
              m.b,
              { color: 'normal', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              P,
            ),
            B = o.createElement(T.a, { style: V.values }, o.createElement(h.a, G)),
            N = o.createElement(y.a, {
              actionLabel: I,
              footer: R,
              graphic: K,
              graphicDisplayMode: 'illustration',
              headline: A,
              isFullHeightOnMobile: !0,
              onAction: function () {
                b(!1)
              },
              subtext: B,
            }),
            k = o.useCallback(
              function (e, t) {
                S(t)
              },
              [S],
            ),
            U = o.createElement(
              T.a,
              null,
              o.createElement(m.b, { style: V.aliasSubtext }, M),
              n
                ? o.createElement(
                    T.a,
                    { style: V.aliasSelectContainer },
                    o.createElement(g.a, {
                      name: 'example',
                      onChange: k,
                      options:
                        ((L = n),
                        (D = []),
                        L.forEach(function (e) {
                          D.push({ containerStyle: V.optionContainer, label: Object(f.a)(e), value: e, decoration: X })
                        }),
                        D),
                      value: O,
                    }),
                  )
                : o.createElement(v.a, null),
              j ? o.createElement(w.a, { text: z, type: 'danger' }) : void 0,
            ),
            Q = o.createElement(y.a, {
              actionLabel: F,
              footer: R,
              graphicDisplayMode: 'none',
              headline: H,
              isFullHeightOnMobile: !0,
              onAction: function () {
                O &&
                  l(O)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (i(!1), t({ text: W, withClearButton: !0 }))
                        : x(!0)
                    })
                    .catch(function (e) {
                      a({ defaultToast: { text: z, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: U,
            })
          return d ? N : Q
        })
      t.a = Q
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('KOtZ'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        g = n('3XMw'),
        v = n.n(g),
        w = n('oQhu'),
        E = n('mjJ+'),
        O = n('eb3s')
      function S(e) {
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var _ = v.a.cfd2f35d,
        C = (function (e) {
          u()(n, e)
          var t = S(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { activeConfirmation: null }),
              h()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              h()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              h()(l()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : y.createElement(E.a, {
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
                    n = t.confirmButtonType,
                    a = t.headline,
                    r = t.label,
                    o = t.text,
                    c = t.withCancelButton
                  return y.createElement(O.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: n,
                    headline: a,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: o,
                    withCancelButton: c,
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
                  return j(t, n, a, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(y.Component),
        j = Object(w.a)(function (e, t, n, a) {
          return e.reduce(function (e, r, o) {
            var c = r.Icon,
              i = r.behavioralEventContext,
              l = r.confirmation,
              s = r.disabled,
              u = r.excludeFromActionMenu,
              d = r.isEmphasized,
              f = r.link,
              b = r.onClick,
              p = r.subText,
              m = r.testID,
              h = r.text
            r.withCancelButton
            if (!u) {
              var y = b
                ? function () {
                    l
                      ? l.render
                        ? a({ callback: b, render: l.render })
                        : a({
                            callback: b,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (b(), n())
                  }
                : n
              e.push({
                behavioralEventContext: i,
                disabled: s,
                Icon: c,
                isEmphasized: d,
                testID: m,
                subText: p,
                text: h,
                onClick: y,
                link: f,
                withBottomBorder: t && t.includes(o),
              })
            }
            return e
          }, [])
        })
      t.default = C
    },
    'B/qP': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M11.434 16.22l-3.38 5.3c-.076.116-.21.19-.35.19h-.05c-.16-.018-.292-.127-.34-.277l-.937-2.564-2.72.25c-.168.024-.317-.06-.4-.194-.083-.134-.082-.31.002-.442l3.018-4.725c.1.108.2.208.307.292.1.117.207.21.315.294 1.03.898 2.276 1.505 3.617 1.762.15.026.3.043.45.07.033 0 .058.008.092.008.115.017.24.026.374.035zm9.306 2.8c-.084.134-.235.216-.393.19l-2.725-.28-.956 2.553c-.06.15-.193.257-.352.273h-.042c-.142 0-.275-.077-.35-.194l-3.356-5.335c.133-.008.26-.015.392-.03.025 0 .05-.01.075-.01.15-.023.3-.047.442-.072 1.344-.26 2.597-.86 3.628-1.74.11-.09.21-.19.31-.28.11-.1.21-.2.302-.308l3.026 4.792c.085.133.084.308 0 .44zM18.187 8.446c-.007 1.376-.473 2.65-1.245 3.67-.974 1.304-2.47 2.213-4.182 2.42-.26.032-.517.047-.784.046-.242 0-.483-.02-.725-.054-1.715-.2-3.203-1.11-4.188-2.415-.77-1.046-1.238-2.333-1.23-3.733.02-3.41 2.8-6.154 6.21-6.136 3.41.018 6.164 2.793 6.145 6.202z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    'EQ/a': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M9.944 10.68H2.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h7.194c.414 0 .75.337.75.75s-.336.75-.75.75zm4.112-4.11H2.75c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h11.306c.414 0 .75.335.75.75s-.336.75-.75.75z',
            }),
            o.createElement('path', {
              d: 'M8.917 21.986c-.198 0-.39-.078-.53-.22L2.61 15.99c-.293-.294-.293-.77 0-1.062s.768-.293 1.06 0l5.15 5.147L20.64 3.33c.237-.34.706-.42 1.044-.18.338.238.42.706.18 1.045L9.53 21.67c-.128.18-.33.295-.55.313-.02.002-.042.003-.063.003z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    FS1z: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n('rxPX'),
        v = n('0KEI'),
        w = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: w, items: E }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        S = n('v//M'),
        _ = n('sIe2'),
        C = n('3XMw'),
        j = n.n(C),
        T = n('TEoO')
      function x(e) {
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var I = j.a.i9028824,
        A = 'sliceTimeline',
        P = function (e) {
          return e
        },
        L = { viewType: 'timeline' },
        D = (function (e) {
          u()(n, e)
          var t = x(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  o = t.numColumns,
                  c = t.onScrollEnd,
                  i = t.renderer,
                  l = t.withoutHeadroom
                return !a || o < 1
                  ? null
                  : 1 === o
                  ? y.createElement(T.a, {
                      cacheKey: A,
                      footer: n,
                      identityFunction: P,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: c,
                      renderer: i,
                      withoutHeadroom: l,
                    })
                  : y.createElement(_.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: P,
                      numColumns: o,
                      renderItem: i,
                    })
              }),
              h()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetch,
                  o = t.fetchIfNeeded
                ;(n ? r : o)().catch(a())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.module
                  e.module !== t && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.module,
                    a = e.retryMessage
                  return n
                    ? y.createElement(S.a, {
                        accessibilityLabel: I,
                        behavioralEventContext: L,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: a,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      h()(D, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var R = O(D)
      t.a = R
    },
    KqB4: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], a = (0, r.default)(e, t), o = 0; o < a.length; o++) n.push(a[o].url)
          return n
        })
      var r = a(n('vwfs'))
      e.exports = t.default
    },
    Ku87: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchAboutScreen', function () {
          return C
        })
      n('z84I'), n('uFXj')
      var a = n('ERkP'),
        r = n('v6aA'),
        o = n.p + 'birdwatch_logo.0a5315e5.png',
        c = n('vZpt'),
        i = n('L5MV'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('VS6U'),
        b = n('t62R'),
        p = n('/yvb'),
        m = n('rHpw'),
        h = n('U+bB'),
        y = n('MWbm'),
        g = s.a.b721eb37,
        v = s.a.a225549d,
        w = [s.a.bc203ca1, s.a.iea72310, s.a.c337f3d1],
        E = s.a.ff3e0be2,
        O = s.a.i859a9d3,
        S = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        _ = { page: 'birdwatch', section: 'about' },
        C = function (e) {
          var t = e.history,
            n = a.useContext(r.a).featureSwitches,
            l = a.createElement(
              a.Fragment,
              null,
              a.createElement(
                y.a,
                { style: j.header },
                a.createElement(y.a, { style: j.imageContainer }, a.createElement(h.a, { source: o, style: j.image })),
              ),
              a.createElement(
                y.a,
                { style: j.content },
                a.createElement(b.b, { size: 'title4', style: j.textSection, weight: 'heavy' }, v),
                w.map(function (e, t) {
                  return a.createElement(b.b, { color: 'gray700', key: 'aboutText'.concat(t), style: j.textSection }, e)
                }),
              ),
              a.createElement(y.a, { style: j.learnMore }, a.createElement(b.b, { link: S }, O)),
              !n.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                a.createElement(
                  y.a,
                  { style: j.buttonContainer },
                  a.createElement(
                    p.a,
                    { accessibilityLabel: E, link: '/i/flow/join-birdwatch', style: j.button, type: 'brandFilled' },
                    E,
                  ),
                ),
            )
          return a.createElement(
            d.b,
            { namespace: _ },
            a.createElement(
              u.a,
              null,
              a.createElement(f.a, {
                TabBar: i.a,
                history: t,
                logoButton: a.createElement(a.Fragment, null),
                primaryContent: l,
                sidebarContent: a.createElement(c.a, null),
                title: g,
                withTweetButton: !1,
              }),
            ),
          )
        },
        j = m.a.create(function (e) {
          return {
            button: { marginTop: e.spaces.space20 },
            buttonContainer: { alignItems: 'center' },
            content: { margin: e.spaces.space20 },
            header: {
              alignItems: 'center',
              backgroundColor: '#EAF5FD',
              height: '167px',
              justifyContent: 'center',
              width: '100%',
            },
            image: { height: '100%', width: '100%' },
            imageContainer: { height: '90px', width: '90px' },
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
        })
      t.default = C
    },
    L5MV: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n('MvLc'),
        v = n('rxPX'),
        w = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { userAlias: g.x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: g.k,
            }
          })
          .withAnalytics({ page: 'birdwatch', component: 'birdwatch_tab_bar' }),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('gASw'),
        C = n('v6aA'),
        j = n('C6f5'),
        T = n('2qZs'),
        x = n('PU7B'),
        I = n('YI7k'),
        A = n('boUI'),
        P = n('6ZHn'),
        L = n('89Im'),
        D = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        R = n('k/Ka')
      function B(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          N(
            N({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [D.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M11.188 14.813c.217.217.506.337.812.337.307 0 .596-.12.813-.337l5-5c.217-.218.337-.507.337-.815 0-.307-.12-.595-.338-.812-.217-.216-.506-.336-.814-.336h-.003c-.307 0-.594.12-.81.337l-3.035 3.037V2c0-.634-.517-1.15-1.15-1.15-.634 0-1.15.516-1.15 1.15v9.225L7.813 8.188C7.596 7.97 7.307 7.85 7 7.85c-.308 0-.596.12-.813.338-.218.22-.337.51-.337.817 0 .306.12.593.337.808l5 5z',
            }),
            y.createElement('path', {
              d: 'M21.25 12.85c-.634 0-1.15.517-1.15 1.15v5.652c0 .216-.176.392-.392.392H4.292c-.216 0-.392-.176-.392-.392V14c0-.634-.516-1.15-1.15-1.15S1.6 13.366 1.6 14v5.652c0 1.484 1.208 2.692 2.692 2.692h15.416c1.484 0 2.692-1.208 2.692-2.692V14c0-.634-.516-1.15-1.15-1.15z',
            }),
          ),
        )
      }
      k.metadata = { width: 24, height: 24 }
      var H = k,
        M = n('6s7X'),
        F = n('Nh1N')
      function z(e) {
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var W = S.a.d5b2da0a,
        U = S.a.b5711f09,
        K = S.a.ha8209bb,
        V = S.a.ff692d63,
        X = S.a.cb1adfa0,
        G = S.a.b721eb37,
        Q = function (e, t) {
          return (
            '/i/birdwatch' === t.pathname || '/i/birdwatch/all' === t.pathname || '/i/birdwatch/helpful' === t.pathname
          )
        },
        Z = function () {
          return !1
        },
        q = (function (e) {
          u()(n, e)
          var t = z(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleTabClickFactory', function (t) {
                return function (n) {
                  e.props.analytics.scribe({ element: t, action: 'navigate' })
                }
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    o = e.withLabel,
                    c = void 0 !== o && o
                  return y.createElement(
                    j.b,
                    { layout: n, primaryLabel: W, wideMode: r },
                    y.createElement(_.a, {
                      accessibilityLabel: U,
                      isActive: Z,
                      label: U,
                      layout: n,
                      onClick: this._handleTabClickFactory('home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(T.a, T.a, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: K,
                      isActive: Q,
                      label: K,
                      layout: n,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(x.a, I.a, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: V,
                      label: V,
                      layout: n,
                      onClick: this._handleTabClickFactory('user_notes'),
                      path: '/i/birdwatch/u/me',
                      renderIcon: Object(j.c)(A.a, P.a, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: X,
                      label: X,
                      layout: n,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: '/i/birdwatch/download-data',
                      renderIcon: Object(j.c)(L.a, H, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: G,
                      label: G,
                      layout: n,
                      onClick: this._handleTabClickFactory('about'),
                      path: '/i/birdwatch/about',
                      renderIcon: Object(j.c)(M.a, F.a, n),
                      withLabel: c,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      h()(q, 'contextType', C.a)
      var Y = E(q)
      t.a = Y
    },
    MvLc: function (e, t, n) {
      'use strict'
      n.d(t, 'q', function () {
        return L
      }),
        n.d(t, 'w', function () {
          return B
        }),
        n.d(t, 'n', function () {
          return N
        }),
        n.d(t, 't', function () {
          return k
        }),
        n.d(t, 'r', function () {
          return H
        }),
        n.d(t, 'x', function () {
          return F
        }),
        n.d(t, 'u', function () {
          return z
        }),
        n.d(t, 'm', function () {
          return W
        }),
        n.d(t, 'o', function () {
          return U
        }),
        n.d(t, 'v', function () {
          return K
        }),
        n.d(t, 's', function () {
          return V
        }),
        n.d(t, 'p', function () {
          return X
        }),
        n.d(t, 'j', function () {
          return G
        }),
        n.d(t, 'f', function () {
          return Q
        }),
        n.d(t, 'g', function () {
          return Z
        }),
        n.d(t, 'k', function () {
          return q
        }),
        n.d(t, 'i', function () {
          return Y
        }),
        n.d(t, 'e', function () {
          return J
        }),
        n.d(t, 'l', function () {
          return $
        }),
        n.d(t, 'c', function () {
          return ee
        }),
        n.d(t, 'a', function () {
          return te
        }),
        n.d(t, 'y', function () {
          return ne
        }),
        n.d(t, 'b', function () {
          return ae
        }),
        n.d(t, 'd', function () {
          return re
        }),
        n.d(t, 'h', function () {
          return oe
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('KEM+'),
        c = n.n(o),
        i = (n('yH/f'), n('KOtZ'), n('z84I'), n('LW0h'), n('JtPf'), n('7x/C'), n('/kEJ')),
        l = n('kGix'),
        s = n('Ssj5'),
        u = n('oEOe'),
        d = n('3A2y'),
        f = n('YeIG')
      function b(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var m = 'birdwatchNotes',
        h = 'rweb/'.concat(m),
        y = Object(u.a)(h, 'DELETE_NOTE'),
        g = Object(u.a)(h, 'CREATE_RATING'),
        v = Object(u.a)(h, 'DELETE_RATING'),
        w = Object(u.a)(h, 'SELECT_ALIAS'),
        E = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_DATA_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_DATA_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_DATA_FAILURE',
        }),
        O = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE',
        }),
        _ = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/CREATE_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/CREATE_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/CREATE_NOTE_FAILURE',
        }),
        C = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE',
        }),
        j = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE',
        }),
        T = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE',
        }),
        x = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_NOTE_FAILURE',
        }),
        I = 'rweb/birdwatchNotes/SAVE_FORM_DRAFT',
        A = { drafts: {}, notes: {}, tweetNotes: {}, contributor: {}, publicData: {} }
      s.a.register(
        c()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case _.SUCCESS:
              var n,
                a = null === (n = t.payload) || void 0 === n ? void 0 : n.result
              if (a) {
                var o,
                  i,
                  s =
                    null === (o = t.payload) || void 0 === o || null === (i = o.entities) || void 0 === i
                      ? void 0
                      : i.birdwatchNotes[a],
                  u = s.tweet.rest_id
                return p(
                  p({}, e),
                  {},
                  {
                    notes: p(p({}, e.notes), {}, c()({}, a, s)),
                    tweetNotes: p(
                      p({}, e.tweetNotes),
                      {},
                      c()(
                        {},
                        u,
                        p(p({}, e.tweetNotes && e.tweetNotes[u]), {}, { ownNoteId: a, fetchStatus: l.a.LOADED }),
                      ),
                    ),
                  },
                )
              }
              return e
            case y.SUCCESS:
              var b,
                m = null === (b = t.meta) || void 0 === b ? void 0 : b.note_id
              return m ? p(p({}, e), {}, { notes: Object(d.a)(e.notes, m) }) : e
            case g.SUCCESS:
              var h,
                P = null === (h = t.meta) || void 0 === h ? void 0 : h.note_id,
                L = t.payload
              return P
                ? p(p({}, e), {}, { notes: p(p({}, e.notes), {}, c()({}, P, p(p({}, e.notes[P]), {}, { rating: L }))) })
                : e
            case v.SUCCESS:
              var D,
                R = null === (D = t.meta) || void 0 === D ? void 0 : D.note_id
              if (R) {
                var B = e.notes[R],
                  N = (B.rating, r()(B, ['rating']))
                return p(p({}, e), {}, { notes: p(p({}, e.notes), {}, c()({}, R, p({}, N))) })
              }
              return e
            case C.REQUEST:
              var k,
                H = null === (k = t.meta) || void 0 === k ? void 0 : k.tweet_id
              return H
                ? p(
                    p({}, e),
                    {},
                    {
                      tweetNotes: p(
                        p({}, e.tweetNotes),
                        {},
                        c()({}, H, p(p({}, e.tweetNotes && e.tweetNotes[H]), {}, { fetchStatus: l.a.LOADING })),
                      ),
                    },
                  )
                : e
            case C.FAILURE:
              var M,
                F = null === (M = t.meta) || void 0 === M ? void 0 : M.tweet_id
              return F
                ? p(
                    p({}, e),
                    {},
                    {
                      tweetNotes: p(
                        p({}, e.tweetNotes),
                        {},
                        c()({}, F, p(p({}, e.tweetNotes[F]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case C.SUCCESS:
              var z,
                W,
                U = null === (z = t.payload) || void 0 === z ? void 0 : z.result,
                K = null === (W = t.meta) || void 0 === W ? void 0 : W.tweet_id
              if (U) {
                var V,
                  X,
                  G =
                    null === (V = t.payload) || void 0 === V || null === (X = V.entities) || void 0 === X
                      ? void 0
                      : X.birdwatchNotes[U],
                  Q = (null == G ? void 0 : G.ids) || [],
                  Z = Q.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  q = Q.map(function (e) {
                    return e.rest_id
                  }),
                  Y = {}
                return (
                  (Y.ids = q),
                  (Y.fetchStatus = l.a.LOADED),
                  null != G && G.ownNoteId && (Y.ownNoteId = null == G ? void 0 : G.ownNoteId),
                  t.meta
                    ? p(
                        p({}, e),
                        {},
                        { notes: p(p({}, e.notes), Z), tweetNotes: p(p({}, e.tweetNotes), {}, c()({}, K, Y)) },
                      )
                    : e
                )
              }
              return K
                ? p(p({}, e), {}, { tweetNotes: p(p({}, e.tweetNotes), {}, c()({}, K, { fetchStatus: l.a.LOADED })) })
                : e
            case j.REQUEST:
              var J,
                $ = null === (J = t.meta) || void 0 === J ? void 0 : J.alias
              return $
                ? p(
                    p({}, e),
                    {},
                    {
                      contributor: p(
                        p({}, e.contributor),
                        {},
                        c()({}, $, p(p({}, e.contributor[$]), {}, { fetchStatus: l.a.LOADING })),
                      ),
                    },
                  )
                : e
            case j.FAILURE:
              var ee,
                te = null === (ee = t.meta) || void 0 === ee ? void 0 : ee.alias
              return te
                ? p(
                    p({}, e),
                    {},
                    {
                      contributor: p(
                        p({}, e.contributor),
                        {},
                        c()({}, te, p(p({}, e.contributor[te]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case j.SUCCESS:
              var ne,
                ae,
                re = null === (ne = t.meta) || void 0 === ne ? void 0 : ne.alias,
                oe = null === (ae = t.payload) || void 0 === ae ? void 0 : ae.result
              if (oe && t.meta) {
                var ce,
                  ie,
                  le =
                    null === (ce = t.payload) || void 0 === ce || null === (ie = ce.entities) || void 0 === ie
                      ? void 0
                      : ie.birdwatchNotes[oe],
                  se = (null == le ? void 0 : le.notes) || [],
                  ue = se.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  de = se.map(function (e) {
                    return e.rest_id
                  }),
                  fe = {
                    helpful: null == le ? void 0 : le.ratings_received_helpful_count,
                    notHelpful: null == le ? void 0 : le.ratings_received_not_helpful_count,
                    somewhatHelpful: null == le ? void 0 : le.ratings_received_somewhat_helpful_count,
                  },
                  be = (null == le ? void 0 : le.badges) || []
                return p(
                  p({}, e),
                  {},
                  {
                    notes: p(p({}, e.notes), ue),
                    contributor: p(
                      p({}, e.contributor),
                      {},
                      c()({}, oe, { badges: be, notes: de, ratings: fe, fetchStatus: l.a.LOADED }),
                    ),
                  },
                )
              }
              return re
                ? p(
                    p({}, e),
                    {},
                    {
                      contributor: p(
                        p({}, e.contributor),
                        {},
                        c()({}, re, p(p({}, e.contributor[re]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case O.SUCCESS:
              var pe = t.payload
              return p(p({}, e), {}, { contributor: p(p({}, e.contributor), {}, { ownAlias: pe }) })
            case T.SUCCESS:
              var me = t.payload
              return p(
                p({}, e),
                {},
                {
                  contributor: p(
                    p({}, e.contributor),
                    {},
                    { showAliasSelfSelect: (null == me ? void 0 : me.can_select) && !(null != me && me.has_selected) },
                  ),
                },
              )
            case S.SUCCESS:
              var he = t.payload
              return p(p({}, e), {}, { contributor: p(p({}, e.contributor), {}, { aliasSelfSelectOptions: he }) })
            case x.SUCCESS:
              var ye,
                ge = t.payload,
                ve = null == ge ? void 0 : ge.result
              return ve
                ? p(
                    p({}, e),
                    {},
                    {
                      notes: p(
                        p({}, e.notes),
                        {},
                        c()(
                          {},
                          ve,
                          p(
                            p(
                              {},
                              null == ge || null === (ye = ge.entities) || void 0 === ye
                                ? void 0
                                : ye.birdwatchNotes[ve],
                            ),
                            {},
                            { fetchStatus: l.a.LOADED },
                          ),
                        ),
                      ),
                    },
                  )
                : e
            case x.REQUEST:
              var we,
                Ee = null === (we = t.meta) || void 0 === we ? void 0 : we.note_id
              return p(
                p({}, e),
                {},
                {
                  notes: p(
                    p({}, e.notes),
                    {},
                    c()({}, Ee, p(p({}, e.notes && e.notes[Ee]), {}, { fetchStatus: l.a.LOADING })),
                  ),
                },
              )
            case x.FAILURE:
              var Oe,
                Se = null === (Oe = t.meta) || void 0 === Oe ? void 0 : Oe.note_id
              return p(
                p({}, e),
                {},
                { notes: p(p({}, e.notes), {}, c()({}, Se, p(p({}, e.notes[Se]), {}, { fetchStatus: l.a.FAILED }))) },
              )
            case E.SUCCESS:
              var _e = t.payload
              return _e ? p(p({}, e), {}, { publicData: _e }) : e
            case w.SUCCESS:
              var Ce,
                je = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.alias
              return p(p({}, e), {}, { contributor: p(p({}, e.contributor), {}, { ownAlias: je }) })
            case I:
              var Te = t.payload
              if (Object(f.a)(Te)) return e
              var xe = Te.updates,
                Ie = Te.tweetId
              return p(p({}, e), {}, { drafts: p(p({}, e.drafts), {}, c()({}, Ie, xe)) })
            default:
              return e
          }
        }),
      )
      var P = [],
        L = function (e, t) {
          return e.birdwatchNotes.notes[t]
        },
        D = function (e, t) {
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ids
        },
        R = function (e, t) {
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ownNoteId
        },
        B = function (e, t) {
          if (!t) return null
          var n = R(e, t)
          return n ? L(e, n) : null
        },
        N = function (e, t) {
          var n, a
          if (t)
            return null === (n = e.birdwatchNotes) || void 0 === n || null === (a = n.contributor[t]) || void 0 === a
              ? void 0
              : a.badges
        },
        k = function (e) {
          return e.birdwatchNotes.publicData
        },
        H = function (e, t) {
          var n = t ? D(e, t) : void 0
          if (n) {
            var a = R(e, t)
            return (
              a &&
                (n = n.filter(function (e) {
                  return e !== a
                })),
              n
                .map(function (t) {
                  return L(e, t)
                })
                .filter(Boolean)
            )
          }
          return P
        },
        M = function (e, t) {
          var n = e.birdwatchNotes.contributor[t]
          return n ? n.notes : void 0
        },
        F = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.ownAlias : void 0
        },
        z = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.showAliasSelfSelect : void 0
        },
        W = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.aliasSelfSelectOptions : void 0
        },
        U = function (e, t) {
          if (t) {
            var n = e.birdwatchNotes.contributor[t]
            return n ? n.ratings : void 0
          }
        },
        K = function (e, t) {
          var n = e.birdwatchNotes.tweetNotes[t]
          return n ? n.fetchStatus : l.a.NONE
        },
        V = function (e, t) {
          var n = e.birdwatchNotes.notes[t]
          return n ? n.fetchStatus : l.a.NONE
        },
        X = function (e, t) {
          if (t) {
            var n = e.birdwatchNotes.drafts
            return n ? n[t] : void 0
          }
        },
        G = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!D(n(), e),
              o = K(n(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
                      return Object(u.b)(t, { request: r.Birdwatch.fetchNotes, params: { tweet_id: e } })(
                        { actionTypes: C, context: 'FETCH_TWEET_NOTES', meta: { tweet_id: e } },
                        function (e) {
                          if (e) {
                            var t = e.entities
                            return t ? [Object(i.c)(t)] : void 0
                          }
                        },
                      )
                    }
                  })(e),
                )
          }
        },
        Q = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!e && !!M(n(), e),
              o =
                (function (e, t) {
                  var n = e.birdwatchNotes.contributor[t]
                  return n ? n.fetchStatus : l.a.NONE
                })(n(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
                      return e
                        ? Object(u.b)(t, { request: r.Birdwatch.fetchBirdwatchProfile, params: { alias: e } })(
                            { actionTypes: j, context: 'FETCH_BIRDWATCH_PROFILE', meta: { alias: e } },
                            function (e) {
                              if (e) {
                                var t = e.entities
                                return t && [Object(i.c)(t)]
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
            var r = !!L(n(), e),
              o = V(n(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
                      return Object(u.b)(t, { request: r.Birdwatch.fetchOneNote, params: { note_id: e } })({
                        actionTypes: x,
                        context: 'FETCH_NOTE',
                        meta: { note_id: e },
                      })
                    }
                  })(e),
                )
          }
        },
        q = function () {
          return function (e, t, n) {
            n.api
            return !!F(t())
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var a = n.api
                  return Object(u.b)(e, { request: a.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: O,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        Y = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: T,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        J = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: S,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        $ = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(u.b)(t, { request: r.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: w,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        ee = function (e) {
          return { meta: { note_id: e }, type: y.SUCCESS }
        },
        te = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            return Object(u.b)(n, { request: o.Birdwatch.createNote, params: { tweet_id: e, data: t } })({
              actionTypes: _,
              context: 'CREATE_NOTE',
            })
          }
        },
        ne = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: I, payload: e }
              })(e),
            )
          }
        },
        ae = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            return Object(u.b)(n, { request: o.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: g,
              context: 'CREATE_RATING',
              meta: { note_id: e },
            })
          }
        },
        re = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(u.b)(t, { request: r.Birdwatch.deleteRating, params: { note_id: e } })({
              actionTypes: v,
              context: 'DELETE_RATING',
              meta: { note_id: e },
            })
          }
        },
        oe = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.Birdwatch.fetchPublicData, params: {} })({
              actionTypes: E,
              context: 'FETCH_DATA',
              meta: {},
            })
          }
        }
    },
    PKU5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchNoteScreen', function () {
          return A
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('ZD0R'),
        i = (n('WNMA'), n('KqXw'), n('MvLc')),
        l = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          return t.match.params.noteId
        },
        d = function (e, t) {
          return i.q(e, u(0, t))
        },
        f = function (e, t) {
          return i.s(e, u(0, t))
        },
        b = Object(l.a)()
          .propsFromState(function () {
            return { noteData: d, noteId: u, fetchStatus: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: i.g,
            }
          }),
        p = n('kGix'),
        m = n('jHSc'),
        h = n('3XMw'),
        y = n.n(h),
        g = n('aITJ'),
        v = n('MWbm'),
        w = n('FIs5'),
        E = n('htQn'),
        O = n('rHpw'),
        S = n('Qwev'),
        _ = y.a.c87f3cf8,
        C = y.a.i859a9d3,
        j = y.a.efd14e79,
        T = y.a.a5b19492,
        x = o.createElement(w.a, { buttonLink: '/i/birdwatch/about', buttonText: C, header: T }),
        I = function () {
          return null
        },
        A = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchOneNoteIfNeeded,
            a = e.fetchStatus,
            i = e.history,
            l = e.noteData,
            s = e.noteId,
            u = o.useState(l),
            d = r()(u, 2),
            f = d[0],
            b = d[1]
          o.useEffect(
            function () {
              s && n(s).catch(t())
            },
            [t, n, s],
          ),
            o.useEffect(
              function () {
                b(l)
              },
              [l],
            )
          var h = o.createElement(
            E.a,
            null,
            f && f.data_v1
              ? o.createElement(
                  v.a,
                  { style: P.contentWrapper },
                  o.createElement(c.a, {
                    handleDelete: function (e) {
                      b(null)
                    },
                    note: f,
                    showPivot: !0,
                    showTweet: !0,
                  }),
                )
              : a === p.a.LOADING
              ? L
              : x,
          )
          return o.createElement(
            m.b,
            { history: i, renderHeader: g.b.isTwitterApp() ? I : void 0, title: _ },
            o.createElement(v.a, { style: P.contentWrapper }, h),
          )
        },
        P = O.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        L = o.createElement(S.a, { accessibilityLabel: j, size: 'large', style: P.spinner }),
        D = b(A)
      t.default = D
    },
    QDet: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M12 3.413c.45 0 .814-.365.814-.815V1.315a.814.814 0 10-1.628 0v1.284c0 .449.364.814.814.814zm0 17.174a.814.814 0 00-.814.815v1.284a.814.814 0 101.628 0v-1.284a.813.813 0 00-.814-.815zm10.685-9.402h-1.284a.814.814 0 100 1.628h1.284a.814.814 0 100-1.628zm-20.087.001H1.315a.814.814 0 100 1.628h1.284a.814.814 0 10-.001-1.628zm16.626-5.259l.908-.908a.814.814 0 10-1.152-1.152l-.908.907a.814.814 0 101.152 1.153zM4.777 18.072l-.908.908a.814.814 0 101.152 1.152l.908-.908a.814.814 0 10-1.152-1.152zm14.447 0a.814.814 0 10-1.152 1.152l.908.908a.814.814 0 101.152-1.152l-.908-.908zM4.776 5.927a.814.814 0 101.152-1.152l-.908-.907A.814.814 0 103.868 5.02l.908.907zm10.264.372c-1.378 0-2.408.841-3.039 1.621-.631-.78-1.661-1.621-3.039-1.621-2.005 0-3.763 1.866-3.763 3.992 0 4.281 5.042 8.802 6.815 8.834 1.747-.032 6.788-4.553 6.788-8.834 0-2.126-1.759-3.992-3.762-3.992zm-3.025 11.389c-.934-.05-5.378-3.835-5.378-7.397 0-1.337 1.108-2.555 2.326-2.555 1.496 0 2.367 1.781 2.374 1.798.11.269.372.441.663.443h.003a.723.723 0 00.664-.442c.007-.018.879-1.799 2.374-1.799 1.217 0 2.325 1.218 2.325 2.555-.002 3.562-4.445 7.348-5.351 7.397z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('5UID'),
        i = n('3GUV'),
        l = n('iBK2'),
        s = o.createElement(i.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, ['accessibilityTitle']),
            a = o.createElement(l.b, n)
          return t ? o.createElement(c.a, { title: t }, a) : a
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    'W6+M': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('7xRU'), n('z84I'), n('Ysgh'), n('KqXw')
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
          return Ie
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var a = n('RhWx'),
        r = n.n(a),
        o = n('KEM+'),
        c = n.n(o),
        i = n('ddV6'),
        l = n.n(i),
        s =
          (n('2G9S'),
          n('tVqn'),
          n('jwue'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('z84I'),
          n('7x/C'),
          n('DZ+c'),
          n('MvUL'),
          n('KqXw'),
          n('+oxZ'),
          n('uFXj'),
          n('ERkP')),
        u = n('v6aA'),
        d = n('9StO'),
        f = (n('WNMA'), n('MvLc')),
        b = n('1YZw'),
        p = n('XOJV'),
        m = n('rxPX'),
        h = n('0KEI'),
        y = function (e, t) {
          return t.match.params.tweetId
        },
        g = function (e, t) {
          return f.w(e, y(0, t))
        },
        v = function (e, t) {
          return f.p(e, y(0, t))
        },
        w = function (e, t) {
          return f.u(e)
        },
        E = Object(m.a)()
          .propsFromState(function () {
            return { draftData: v, ownNoteData: g, tweetId: y, showAliasSelfSelect: w, userAlias: f.x }
          })
          .propsFromActions(function () {
            return {
              addToast: b.b,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: f.a,
              fetchNotes: f.j,
              fetchShowAliasSelfSelect: f.i,
              fetchTweet: p.a.fetchOneIfNeeded,
              fetchUserAlias: f.k,
              saveFormData: f.y,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form' }),
        O = n('W6+M'),
        S = n('jHSc'),
        _ = n('3XMw'),
        C = n.n(_),
        j = n('5FtR'),
        T = n('SrIh'),
        x = n('Rp9C'),
        I = n('xZXe'),
        A = n('aITJ'),
        P = n('MWbm'),
        L = n('t62R'),
        D = n('XiMS'),
        R = n('fyvP'),
        B = n('p+r5'),
        N = n('4zmP'),
        k = n('/yvb'),
        H = n('feu+'),
        M = n('rHpw'),
        F = n('KqB4'),
        z = n.n(F),
        W = n('S1qy'),
        U = n.n(W),
        K = n('Oib4'),
        V = n('DlMI'),
        X = n('ms2t'),
        G = n('I/9y'),
        Q = n('EHV7'),
        Z = 'MisinformedOrPotentiallyMisleading',
        q = 'NotMisleading',
        Y = {
          classification: {
            label: C.a.c8a7eee9,
            options: [
              { label: C.a.d4e419f5, value: Z },
              { label: C.a.ha9655c2, value: q },
            ],
          },
          misleading_tags: {
            label: C.a.a0cf39fc,
            options: [
              { label: C.a.c33bc7d3, value: 'FactualError' },
              { label: C.a.j6e12b24, value: 'ManipulatedMedia' },
              { label: C.a.aadb676b, value: 'OutdatedInformation' },
              { label: C.a.g21a0ef3, value: 'MissingImportantContext' },
              { label: C.a.daf354dd, value: 'DisputedClaimAsFact' },
              { label: C.a.d1d2ef84, value: 'MisinterpretedSatire' },
              { label: C.a.c365dcc5, value: 'Other' },
            ],
          },
          believable: {
            label: C.a.ce5fa5d4,
            options: [
              { label: C.a.d617b1b9, value: 'BelievableByFew' },
              { label: C.a.c5be638b, value: 'BelievableByMany' },
            ],
          },
          harmful: {
            label: C.a.cd06cf1a,
            options: [
              { label: C.a.c23c72e6, value: 'LittleHarm' },
              { label: C.a.ee822d70, value: 'ConsiderableHarm' },
            ],
          },
          validation: {
            label: C.a.d19bf2bc,
            options: [
              { label: C.a.h25771bb, value: 'Easy' },
              { label: C.a.e0830664, value: 'Challenging' },
            ],
          },
          not_misleading_tags: {
            label: C.a.j206b73d,
            options: [
              { label: C.a.g228df26, value: 'FactuallyCorrect' },
              { label: C.a.dd55f821, value: 'OutdatedNowButNotWhenWritten' },
              { label: C.a.hf607a09, value: 'ClearlySatire' },
              { label: C.a.j6ac7741, value: 'PersonalOpinion' },
              { label: C.a.c365dcc5, value: 'Other' },
            ],
          },
          trustworthy_sources: {
            label: C.a.b1d82aae,
            options: [
              { label: C.a.b7ec04f3, value: !0 },
              { label: C.a.i62a03aa, value: !1 },
            ],
          },
        }
      function J(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ee = C.a.d39e8b30,
        te = C.a.a91bb144,
        ne = C.a.hb2bf967,
        ae = C.a.dc7a6625,
        re = C.a.af778d9e,
        oe = C.a.ifd2c15f,
        ce = C.a.f24ec219,
        ie = C.a.j679dcda,
        le = { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' },
        se = C.a.b7476596,
        ue = C.a.df6c8291,
        de = C.a.h0e35524,
        fe = ['believable', 'harmful', 'validation'],
        be = ['classification', 'summary', 'trustworthy_sources'],
        pe = ['misleading_tags'].concat(fe),
        me = ['not_misleading_tags'],
        he = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ye = ['misleading_tags', 'not_misleading_tags'],
        ge = C.a.b47b5a16,
        ve = C.a.i0e66c5a,
        we = C.a.j8e3e3be,
        Ee = C.a.f1e851ff,
        Oe = C.a.ff5dcac8,
        Se = {
          classification: ve,
          misleading_tags: we,
          believable: ve,
          harmful: ve,
          validation: ve,
          summary: Ee,
          not_misleading_tags: we,
          trustworthy_sources: ve,
        },
        _e = C.a.abdd8d09,
        Ce = { explanation: C.a.c097608d, source: C.a.g9cffe15 },
        je = { explanation: C.a.ba25898c, source: C.a.e764d704 },
        Te = { explanation: C.a.gb67e44c, source: C.a.d6b758a1 },
        xe = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        Ie = function (e) {
          var t = s.useContext(u.a).featureSwitches,
            n = e.addToast,
            a = e.analytics,
            o = e.createLocalApiErrorHandler,
            i = e.createNote,
            f = e.draftData,
            b = e.fetchNotes,
            p = e.fetchShowAliasSelfSelect,
            m = e.fetchTweet,
            h = e.fetchUserAlias,
            y = e.history,
            g = e.ownNoteData,
            v = e.saveFormData,
            w = e.showAliasSelfSelect,
            E = e.tweetId,
            _ = e.userAlias,
            C = function (e) {
              return void 0 === e ? ve : ''
            },
            M = function (e) {
              return U()(e, xe).weightedLength
            },
            F = function (e) {
              if (!e) return Ee
              var t = M(e.trim())
              return t <= 0 ? Ee : t > 280 ? Oe : ''
            },
            W = s.useState(f || {}),
            J = l()(W, 2),
            Ie = J[0],
            Pe = J[1],
            Le = s.useState(
              (function () {
                var e = Se
                return (
                  he.forEach(function (t) {
                    e[t] = C(Ie[t])
                  }),
                  ye.forEach(function (t) {
                    var n
                    e[t] = (n = Ie[t]) && n.length > 0 ? '' : we
                  }),
                  (e.summary = F(Ie.summary)),
                  e
                )
              })(),
            ),
            De = l()(Le, 2),
            Re = De[0],
            Be = De[1],
            Ne = s.useState(!1),
            ke = l()(Ne, 2),
            He = ke[0],
            Me = ke[1],
            Fe = s.useState(!1),
            ze = l()(Fe, 2),
            We = ze[0],
            Ue = ze[1],
            Ke = s.useState(null),
            Ve = l()(Ke, 2),
            Xe = Ve[0],
            Ge = Ve[1],
            Qe = s.useState(w),
            Ze = l()(Qe, 2),
            qe = Ze[0],
            Ye = Ze[1],
            Je = '/i/birdwatch/'.concat(E, '/contribute_complete')
          s.useEffect(
            function () {
              E && (m(E).catch(o()), b(E).catch(o()))
            },
            [o, b, m, E],
          ),
            s.useEffect(
              function () {
                h().catch(o())
              },
              [o, h],
            ),
            s.useEffect(
              function () {
                p().catch(o())
              },
              [o, p],
            ),
            s.useEffect(
              function () {
                Ye(w)
              },
              [w],
            )
          var $e,
            et = function (e) {
              var t = x.a.forTweet(E)
              a.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            tt = function (e) {
              return function (t, n) {
                et(e),
                  Pe(function (t) {
                    var a = n
                    'trustworthy_sources' === e && ('true' === n ? (a = !0) : 'false' === n && (a = !1))
                    var r = $($({}, t), {}, c()({}, e, a))
                    return v({ updates: r, tweetId: E }), r
                  }),
                  Be(function (t) {
                    return $($({}, t), {}, c()({}, e, C(n)))
                  })
              }
            },
            nt = function (e) {
              return function (t) {
                return function () {
                  Pe(function (n) {
                    if (!n[e]) {
                      Be(function (t) {
                        return $($({}, t), {}, c()({}, e, ''))
                      })
                      var a = $($({}, n), {}, c()({}, e, [t]))
                      return v({ updates: a, tweetId: E }), a
                    }
                    var o = n[e].includes(t),
                      i = n[e].filter(function (e) {
                        return e !== t
                      })
                    if (o) {
                      Be(function (t) {
                        return i.length > 0 ? $($({}, t), {}, c()({}, e, '')) : $($({}, t), {}, c()({}, e, we))
                      })
                      var l = $($({}, n), {}, c()({}, e, i))
                      return v({ updates: l, tweetId: E }), l
                    }
                    Be(function (t) {
                      return $($({}, t), {}, c()({}, e, ''))
                    })
                    var s = $($({}, n), {}, c()({}, e, [].concat(r()(n[e]), [t])))
                    return v({ updates: s, tweetId: E }), s
                  })
                }
              }
            },
            at = (null == Ie ? void 0 : Ie.misleading_tags) || [],
            rt = (null == Ie ? void 0 : Ie.not_misleading_tags) || [],
            ot = function (e) {
              return (
                He &&
                '' !== e &&
                s.createElement(
                  P.a,
                  { style: Ae.errorContainer },
                  s.createElement(K.a, { style: Ae.errorIcon }),
                  s.createElement(L.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, e),
                )
              )
            },
            ct = s.createElement(
              P.a,
              null,
              s.createElement(
                P.a,
                { style: Ae.questionSection },
                s.createElement(
                  P.a,
                  { accessibilityLabel: Y.misleading_tags.label, accessibilityRole: 'group' },
                  s.createElement(L.b, { weight: 'bold' }, Y.misleading_tags.label, ' '),
                  Y.misleading_tags.options.map(function (e) {
                    return s.createElement(D.a, {
                      checked: at.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: nt('misleading_tags')(e.value),
                      style: Ae.checkbox,
                    })
                  }),
                  ot(Re.misleading_tags),
                ),
              ),
              fe.map(function (e) {
                return s.createElement(
                  P.a,
                  { key: Y[e].label, style: Ae.questionSection },
                  s.createElement(R.a, {
                    label: Y[e].label,
                    name: e,
                    onChange: tt(e),
                    options: Y[e].options,
                    value: Ie[e],
                  }),
                  ot(Re[e]),
                )
              }),
            ),
            it = s.createElement(
              P.a,
              { style: Ae.questionSection },
              s.createElement(
                P.a,
                { accessibilityLabel: Y.not_misleading_tags.label, accessibilityRole: 'group' },
                s.createElement(L.b, { weight: 'bold' }, Y.not_misleading_tags.label, ' '),
                Y.not_misleading_tags.options.map(function (e) {
                  return s.createElement(D.a, {
                    checked: rt.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: nt('not_misleading_tags')(e.value),
                    style: Ae.checkbox,
                  })
                }),
                ot(Re.not_misleading_tags),
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
            st = function () {
              var e = Ie.summary || ''
              return !(!lt(be) || '' !== F(e)) && !!((dt === Z && lt(pe)) || (dt === q && lt(me)))
            },
            ut = function () {
              Ue(!0),
                i(E, Ie)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      n({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(T.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        et('submit_failed'),
                        Ue(!1)
                    } else v({ updates: {}, tweetId: E }), y.replace(Je)
                  })
                  .catch(function (e) {
                    o({ defaultToast: { text: de, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      Ue(!1),
                      et('submit_failed'),
                      Object(T.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            dt = Ie.classification,
            ft = Ie.trustworthy_sources,
            bt = void 0 === ft ? '' : ft ? 'true' : 'false',
            pt = dt === q,
            mt = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            ht = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            yt = _ && Object(O.a)(_, !0),
            gt = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                P.a,
                { style: Ae.tweetContainer },
                s.createElement(I.b, { displayPromotedContent: !1, tweetId: E, withCurationMenu: !1 }),
              ),
              s.createElement(
                P.a,
                { style: Ae.formQuestions },
                s.createElement(
                  P.a,
                  { style: Ae.questionSection },
                  s.createElement(R.a, {
                    label: Y.classification.label,
                    name: 'misleading_radio',
                    onChange: tt('classification'),
                    options: Y.classification.options,
                    value: dt,
                  }),
                  ot(Re.classification),
                ),
                dt === Z && ct,
                pt && it,
                !!dt &&
                  s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      P.a,
                      { style: Ae.questionSection },
                      s.createElement(
                        P.a,
                        { accessibilityLabel: pt ? ce : oe, accessibilityRole: 'group' },
                        s.createElement(L.b, { weight: 'bold' }, pt ? ce : oe),
                        s.createElement(L.b, { link: le }, ie),
                        s.createElement(B.a, {
                          calculateLength: M,
                          helperText: se,
                          invalid: !!Re.summary && He,
                          label: ue,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            v({ updates: Ie, tweetId: E })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            Pe(function (e) {
                              return $($({}, e), {}, { summary: t })
                            }),
                              Be(function (e) {
                                return $($({}, e), {}, { summary: F(t) })
                              })
                          },
                          style: Ae.textInput,
                          validLength: 280,
                          value: null == Ie ? void 0 : Ie.summary,
                        }),
                        ot(Re.summary),
                      ),
                    ),
                    s.createElement(
                      P.a,
                      { style: Ae.questionSection },
                      s.createElement(R.a, {
                        label: Y.trustworthy_sources.label,
                        name: 'trustworthy_sources_radio',
                        onChange: tt('trustworthy_sources'),
                        options:
                          (($e = Y.trustworthy_sources.options),
                          $e.map(function (e) {
                            return { label: e.label, value: e.value.toString() }
                          })),
                        value: bt,
                      }),
                      ot(Re.trustworthy_sources),
                    ),
                    mt &&
                      !ht &&
                      s.createElement(P.a, { style: Ae.callout }, s.createElement(N.a, { Icon: V.a, text: ne })),
                    mt &&
                      ht &&
                      yt &&
                      s.createElement(
                        P.a,
                        { style: Ae.callout },
                        s.createElement(N.a, {
                          Icon: X.a,
                          headline: ae({ displayAlias: yt }),
                          text: re,
                          withThumbnail: !0,
                        }),
                      ),
                    He &&
                      !st() &&
                      s.createElement(
                        P.a,
                        { style: Ae.callout },
                        s.createElement(N.a, { Icon: K.a, text: ge, type: 'danger' }),
                      ),
                    s.createElement(
                      k.a,
                      {
                        disabled: We,
                        onPress: function () {
                          et('submit'), Me(!0)
                          var e = (function () {
                            var e = z()(Ie.summary)
                            if (0 === (null == e ? void 0 : e.length)) return 'source'
                            var t = Ie.summary
                            return (
                              e.forEach(function (e) {
                                if (!t) return 'explanation'
                                t = t.replace(e, '')
                              }),
                              t && 0 !== t.trim().length ? null : 'explanation'
                            )
                          })()
                          st() && (e ? Ge(e) : ut())
                        },
                        style: Ae.submitButton,
                        type: 'brandFilled',
                      },
                      te,
                    ),
                  ),
              ),
            )
          return ht && qe
            ? s.createElement(d.a, {
                onAliasSelected: function (e) {
                  Ye(e)
                },
              })
            : g
            ? s.createElement(j.a, { to: Je })
            : Xe
            ? s.createElement(H.a, {
                actionLabel: _e,
                graphic: 'source' === Xe ? G.a : Q.a,
                graphicDisplayMode: 'thumbnail',
                headline: Ce[Xe],
                onAction: function () {
                  et('nudge_edit'), Ge(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = x.a.forTweet(E)
                  a.scribe({ element: 'nudge', action: 'show', data: { targets: [e] } })
                },
                onTertiaryAction: function () {
                  et('nudge_submit'), ut()
                },
                subtext: je[Xe],
                tertiaryActionLabel: Te[Xe],
                withCloseButton: !1,
              })
            : s.createElement(
                S.b,
                {
                  history: y,
                  onBackClick: function () {
                    et('close'), y.goBack()
                  },
                  renderHeader: A.b.isTwitterApp()
                    ? function () {
                        return null
                      }
                    : void 0,
                  title: ee,
                },
                s.createElement(P.a, { style: Ae.contentWrapper }, gt),
              )
        },
        Ae = M.a.create(function (e) {
          return {
            callout: { marginTop: e.spaces.space12 },
            checkbox: { paddingVertical: e.spaces.space8 },
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            errorContainer: { flexDirection: 'row' },
            errorIcon: { color: e.colors.magenta500, paddingRight: e.spaces.space12 },
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
        Pe = E(Ie)
      t.default = Pe
    },
    YI7k: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    Yyvu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotAvailablePage', function () {
          return y
        })
      var a = n('ERkP'),
        r = n('vZpt'),
        o = n('L5MV'),
        c = n('3XMw'),
        i = n.n(c),
        l = n('VS6U'),
        s = n('MWbm'),
        u = n('FIs5'),
        d = n('rHpw'),
        f = i.a.b5711f09,
        b = i.a.e96677aa,
        p = i.a.f026d2ee,
        m = i.a.i859a9d3,
        h = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        y = function (e) {
          var t = e.history,
            n = a.createElement(
              s.a,
              { style: g.contentWrapper },
              a.createElement(u.a, {
                buttonLink: h,
                buttonText: m,
                buttonType: 'brandOutlined',
                header: b,
                message: p,
              }),
            )
          return a.createElement(l.a, {
            TabBar: o.a,
            history: t,
            logoButton: a.createElement(a.Fragment, null),
            primaryContent: n,
            sidebarContent: a.createElement(r.a, null),
            title: f,
            withTweetButton: !1,
          })
        },
        g = d.a.create(function (e) {
          return { contentWrapper: { marginHorizontal: '100px' } }
        })
      t.default = y
    },
    ZD0R: function (e, t, n) {
      'use strict'
      var a,
        r,
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        b = n('N+ot'),
        p = n.n(b),
        m = n('AuHH'),
        h = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = n('ddV6'),
        w = n.n(v),
        E = (n('jQ3i'), n('x4t0'), n('2G9S'), n('OZaJ'), n('ERkP')),
        O = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        S = n.n(O),
        _ = (n('z84I'), n('7x/C'), n('DZ+c'), n('LW0h'), n('v6aA')),
        C = n('MvLc'),
        j = n('rxPX'),
        T = n('0KEI'),
        x = Object(j.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: C.b,
              deleteRating: C.d,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        I = n('ACNv'),
        A = n('YeIG'),
        P = n('MWbm'),
        L = n('t62R'),
        D = n('XiMS'),
        R = n('fyvP'),
        B = n('/yvb'),
        N = n('IG7M'),
        k = n('rHpw'),
        H = (n('yH/f'), n('3XMw')),
        M = n.n(H),
        F = Object.freeze({
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
        z = [F.Informative, F.Clear, F.Empathetic, F.GoodSources, F.UniqueContext, F.Other],
        W =
          ((a = {}),
          g()(a, F.Clear, M.a.dfa44ddd),
          g()(a, F.Empathetic, M.a.hc2b6a7e),
          g()(a, F.GoodSources, M.a.a7bc3191),
          g()(a, F.Informative, M.a.f3e6f0a9),
          g()(a, F.Other, M.a.c365dcc5),
          g()(a, F.UniqueContext, M.a.c5d55592),
          a),
        U = Object.freeze({
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
          U.NoSources,
          U.Incorrect,
          U.Outdated,
          U.Biased,
          U.MissingKeyPoints,
          U.Unclear,
          U.Rude,
          U.OffTopic,
          U.TwitterViolationAny,
          U.Other,
        ],
        V =
          ((r = {}),
          g()(r, U.Biased, M.a.bbe8b4ac),
          g()(r, U.Incorrect, M.a.heb35e12),
          g()(r, U.MissingKeyPoints, M.a.c34e0b2b),
          g()(r, U.NoSources, M.a.a802709f),
          g()(r, U.OffTopic, M.a.dd1f17e9),
          g()(r, U.Outdated, M.a.if966b54),
          g()(r, U.Other, M.a.c365dcc5),
          g()(r, U.Rude, M.a.d0ba7db4),
          g()(r, U.TwitterViolationAny, M.a.aa520d31),
          g()(r, U.Unclear, M.a.e25e5ed1),
          r),
        X = n('hiGS'),
        G = n('TW8A'),
        Q = n('WtWS')
      function Z(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Y = M.a.ed5156f9,
        J = [
          { label: M.a.b7ec04f3, value: !0 },
          { label: M.a.i62a03aa, value: !1 },
        ],
        $ = {
          helpful: { label: M.a.a7338bc2, options: J },
          agree: { label: M.a.d93489e6, options: J },
          helpful_tags: {
            label: M.a.j63844f5,
            options: z.map(function (e) {
              return { label: W[e], value: e }
            }),
          },
          not_helpful_tags: {
            label: M.a.e0806a48,
            options: K.map(function (e) {
              return { label: V[e], value: e }
            }),
          },
        },
        ee = M.a.a91bb144,
        te = M.a.abd845fd,
        ne = M.a.d96cf7cd,
        ae = M.a.j6aa6172,
        re = M.a.i411275f,
        oe = M.a.d1a479a8,
        ce = function (e) {
          return e.map(function (e) {
            return { label: e.label, value: e.value.toString() }
          })
        },
        ie = E.createElement(L.b, { weight: 'bold' }),
        le = E.createElement(L.b, { weight: 'bold' }),
        se = E.createElement(L.b, { weight: 'bold' }),
        ue = E.createElement(L.b, { weight: 'bold' }),
        de = E.createElement(M.a.I18NFormatMessage, { $i18n: 'if77e237' }, E.cloneElement(se, null, M.a.a43beaf2)),
        fe = E.createElement(M.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, E.cloneElement(ue, null, M.a.cb1d0ef3)),
        be = E.createElement(M.a.I18NFormatMessage, { $i18n: 'j575fa79' }, E.cloneElement(ie, null, M.a.he5f1491)),
        pe = E.createElement(M.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, E.cloneElement(le, null, M.a.a67e7d91)),
        me = E.createElement(
          M.a.I18NFormatMessage,
          { $i18n: 'd570f1d9' },
          E.cloneElement(se, null, M.a.c9c4850a),
          E.cloneElement(ie, null, M.a.ffa975fd),
        ),
        he = E.createElement(
          M.a.I18NFormatMessage,
          { $i18n: 'c6cb9513' },
          E.cloneElement(se, null, M.a.c9701442),
          E.cloneElement(le, null, M.a.d2be9800),
        ),
        ye = E.createElement(
          M.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          E.cloneElement(ue, null, M.a.cf87d556),
          E.cloneElement(ie, null, M.a.hec80c95),
        ),
        ge = E.createElement(
          M.a.I18NFormatMessage,
          { $i18n: 'gbfec7fd' },
          E.cloneElement(ue, null, M.a.bfa5f565),
          E.cloneElement(le, null, M.a.eb1cc800),
        ),
        ve = k.a.create(function (e) {
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
        we = x(function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            a = e.createRating,
            r = e.deleteRating,
            o = e.noteId,
            c = e.rating,
            i = E.useContext(_.a).featureSwitches,
            l = c || {},
            s = E.useState(l),
            u = w()(s, 2),
            d = u[0],
            f = u[1],
            b = E.useState(Object(A.a)(c)),
            p = w()(b, 2),
            m = p[0],
            h = p[1],
            y = function (e) {
              return function (t, n) {
                f(function (t) {
                  var a = n
                  return 'true' === n ? (a = !0) : 'false' === n && (a = !1), q(q({}, t), {}, g()({}, e, a))
                })
              }
            },
            v = function (e) {
              var t = d[e] || []
              return E.createElement(
                P.a,
                { style: ve.checkboxContainer },
                E.createElement(L.b, { weight: 'bold' }, $[e].label),
                $[e].options.map(function (n) {
                  return E.createElement(D.a, {
                    checked: t.includes(n.value),
                    key: n.value,
                    label: n.label,
                    onChange: j(e)(n.value),
                    style: ve.checkbox,
                  })
                }),
              )
            },
            O = function () {
              T('delete'),
                r(o)
                  .then(function (e) {
                    'Done' === e.birdwatchnote_rating_delete && (f({}), h(!0))
                  })
                  .catch(n())
            },
            C = function () {
              T('edit'), h(!0)
            },
            j = function (e) {
              return function (t) {
                return function () {
                  f(function (n) {
                    return n[e]
                      ? n[e].includes(t)
                        ? q(
                            q({}, n),
                            {},
                            g()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : q(q({}, n), {}, g()({}, e, [].concat(S()(n[e]), [t])))
                      : q(q({}, n), {}, g()({}, e, [t]))
                  })
                }
              }
            },
            T = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            x = void 0 !== (null == d ? void 0 : d.helpful),
            k = x ? (null != d && d.helpful ? 'true' : 'false') : '',
            H = void 0 !== (null == d ? void 0 : d.agree),
            M = H ? (null != d && d.agree ? 'true' : 'false') : ''
          return m
            ? E.createElement(
                P.a,
                { style: ve.root },
                E.createElement(R.a, {
                  label: $.helpful.label,
                  name: $.helpful.label + o,
                  onChange: y('helpful'),
                  options: ce(J),
                  value: k,
                }),
                x && (null != d && d.helpful ? v('helpful_tags') : v('not_helpful_tags')),
                E.createElement(R.a, {
                  label: $.agree.label,
                  name: $.agree.label + o,
                  onChange: y('agree'),
                  options: ce(J),
                  value: M,
                }),
                !Object(A.a)(d) &&
                  E.createElement(
                    B.a,
                    {
                      onClick: function () {
                        T('submit'),
                          d &&
                            a(o, d)
                              .then(function () {
                                h(!1)
                              })
                              .catch(
                                n({
                                  defaultToast: { text: Y, withAutoDismiss: !1, withClearButton: !0 },
                                  showToast: !0,
                                }),
                              )
                      },
                      style: ve.button,
                      type: 'brandFilled',
                    },
                    ee,
                  ),
              )
            : E.createElement(
                P.a,
                { style: [ve.root, ve.showSubmittedRating] },
                E.createElement(
                  P.a,
                  { style: ve.row },
                  E.createElement(Q.a, { style: ve.icon }),
                  E.createElement(
                    L.b,
                    { size: 'subtext2' },
                    null != d && d.helpful && !H
                      ? de
                      : (null != d && d.helpful) || H
                      ? null != d && d.agree && !x
                        ? be
                        : (null != d && d.agree) || x
                        ? null != d && d.helpful && null != d && d.agree
                          ? me
                          : null == d || !d.helpful || (null != d && d.agree)
                          ? (null != d && d.helpful) || null == d || !d.agree
                            ? (null != d && d.helpful) || (null != d && d.agree)
                              ? void 0
                              : ge
                            : ye
                          : he
                        : pe
                      : fe,
                  ),
                ),
                E.createElement(N.a, {
                  renderActionMenu: function (e) {
                    return E.createElement(I.default, {
                      actionItems:
                        ((t = []),
                        t.push({
                          confirmation: { label: ne, headline: ae, text: re, confirmButtonType: 'destructiveFilled' },
                          isEmphasized: !0,
                          text: ne,
                          Icon: X.a,
                          onClick: O,
                        }),
                        i.isTrue('responsive_web_birdwatch_ratings_v2_enabled')
                          ? t.push({ disabled: !0, text: te, subText: oe, Icon: G.a })
                          : t.push({ text: te, Icon: G.a, onClick: C }),
                        t),
                      onClose: e,
                    })
                    var t
                  },
                }),
              )
        }),
        Ee = (n('uFXj'), n('xZGM')),
        Oe = n('1YZw'),
        Se = Object(j.a)()
          .propsFromState(function () {
            return {
              shouldShowDataPrivacyPrompt: function (e, t) {
                return Object(Ee.y)(e, Ee.c)
              },
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: Ee.v,
              addToast: Oe.b,
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: C.b,
              deleteRating: C.d,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        _e = n('cHvH'),
        Ce = n('h0NW'),
        je = n('feu+')
      function Te(e) {
        var t,
          n,
          a = M.a.a7bc3191,
          r = M.a.a26f8dc1,
          o = M.a.d89cfe9e,
          c = M.a.faa5f9e7,
          i = M.a.c365dcc5
        return e
          ? ((t = {}),
            g()(t, F.GoodSources, a),
            g()(t, F.Clear, r),
            g()(t, F.AddressesClaim, o),
            g()(t, F.ImportantContext, c),
            g()(t, F.UnbiasedLanguage, M.a.gf3b38f4),
            g()(t, F.Other, i),
            t)
          : ((n = {}),
            g()(n, F.GoodSources, a),
            g()(n, F.Clear, r),
            g()(n, F.AddressesClaim, o),
            g()(n, F.ImportantContext, c),
            g()(n, F.Other, i),
            n)
      }
      function xe(e) {
        return Object.keys(Te(e))
      }
      function Ie(e) {
        var t,
          n,
          a = M.a.ef490ae8,
          r = M.a.bf3dc461,
          o = M.a.heb35e12,
          c = M.a.ib117531,
          i = M.a.c365dcc5
        return e
          ? ((t = {}),
            g()(t, U.NoSources, a),
            g()(t, U.IrrelevantSources, r),
            g()(t, U.Incorrect, o),
            g()(t, U.OpinionSpeculation, M.a.h7c59ea2),
            g()(t, U.Unclear, M.a.d60c0063),
            g()(t, U.MissingKeyPoints, M.a.e06416c9),
            g()(t, U.Rude, M.a.cff1aa8b),
            g()(t, U.NoteNotNeeded, M.a.cc443e25),
            g()(t, U.TwitterViolationAny, c),
            g()(t, U.Other, i),
            t)
          : ((n = {}),
            g()(n, U.NoSources, a),
            g()(n, U.IrrelevantSources, r),
            g()(n, U.Incorrect, o),
            g()(n, U.Unclear, M.a.d60c0063),
            g()(n, U.MissingKeyPoints, M.a.c34e0b2b),
            g()(n, U.Rude, M.a.d24b99ed),
            g()(n, U.TwitterViolationAny, c),
            g()(n, U.Other, i),
            n)
      }
      function Ae(e) {
        return Object.keys(Ie(e))
      }
      var Pe = n('EQ/a'),
        Le = n('DlMI')
      function De(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Be = M.a.ed5156f9,
        Ne = [
          { label: M.a.b7ec04f3, value: 'Helpful' },
          { label: M.a.i26425d8, value: 'SomewhatHelpful' },
          { label: M.a.i62a03aa, value: 'NotHelpful' },
        ],
        ke = M.a.a91bb144,
        He = M.a.abd845fd,
        Me = M.a.d96cf7cd,
        Fe = M.a.j6aa6172,
        ze = M.a.i411275f,
        We = M.a.e2988ed0,
        Ue = M.a.c1a50438,
        Ke = M.a.d2ae3d42,
        Ve = M.a.c01f8d12,
        Xe = M.a.e21a6afe,
        Ge = M.a.d57ed9c7,
        Qe = M.a.b165ae7b,
        Ze = E.createElement(L.b, { weight: 'bold' }),
        qe = E.createElement(L.b, {
          link: 'https://twitter.github.io/birdwatch/about/overview/#transparency-and-visibility',
          withInteractiveStyling: !0,
          withUnderline: !0,
        }),
        Ye = E.createElement(
          M.a.I18NFormatMessage,
          { $i18n: 'ca2f5036' },
          E.cloneElement(Ze, null, M.a.e0440086),
          E.cloneElement(qe, null, M.a.e30eecce),
        ),
        Je = E.createElement(L.b, { weight: 'bold' }),
        $e = E.createElement(L.b, { weight: 'bold' }),
        et = E.createElement(L.b, { weight: 'bold' }),
        tt = E.createElement(M.a.I18NFormatMessage, { $i18n: 'had203a8' }, E.cloneElement(Je, null, M.a.f2ceaed4)),
        nt = E.createElement(M.a.I18NFormatMessage, { $i18n: 'h42a21df' }, E.cloneElement($e, null, M.a.i7d91dc8)),
        at = E.createElement(M.a.I18NFormatMessage, { $i18n: 'c3d1a1b0' }, E.cloneElement(et, null, M.a.c206a60f)),
        rt = k.a.create(function (e) {
          return {
            button: { alignSelf: 'center' },
            checkbox: { paddingVertical: e.spaces.space8 },
            checkboxContainer: { paddingTop: e.spaces.space12 },
            helpfulButtons: { flex: 'auto', marginHorizontal: e.spaces.space2 },
            helpfulContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            helpfulOptions: { flexDirection: 'row' },
            helpfulQuestionMobile: { paddingBottom: e.spaces.space8 },
            icon: { color: e.colors.primary, paddingRight: e.spaces.space12 },
            iconDataPrivacy: {
              color: e.colors.primary,
              height: e.spaces.space20,
              width: e.spaces.space20,
              paddingTop: e.spaces.space4,
              paddingRight: e.spaces.space20,
            },
            infoItemContainer: { paddingHorizontal: 0 },
            root: {
              backgroundColor: e.colors.gray0,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space4,
              padding: e.spaces.space16,
            },
            row: { alignItems: 'center', flex: 1, flexDirection: 'row', width: '100%' },
            showSubmittedRating: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        ot = {
          accessibilityLabel: Ke,
          containerStyle: rt.infoItemContainer,
          items: [
            { label: '', decoration: E.createElement(Pe.a, { style: rt.iconDataPrivacy }), description: Qe },
            { label: '', decoration: E.createElement(Le.a, { style: rt.iconDataPrivacy }), description: Ye },
          ],
        },
        ct = Se(function (e) {
          var t = e.addFlag,
            n = e.addToast,
            a = e.analytics,
            r = e.createLocalApiErrorHandler,
            o = e.createRating,
            c = e.deleteRating,
            i = e.noteId,
            l = e.rating,
            s = e.ratingSurvey,
            u = e.shouldShowDataPrivacyPrompt,
            d = E.useContext(_.a).featureSwitches,
            f = E.useState(l),
            b = w()(f, 2),
            p = b[0],
            m = b[1],
            h = E.useState(Object(A.a)(l)),
            y = w()(h, 2),
            v = y[0],
            O = y[1],
            C = E.useState(!1),
            j = w()(C, 2),
            T = j[0],
            x = j[1],
            R = d.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            H = {
              helpful: { label: M.a.a7338bc2, options: Ne },
              helpful_tags: {
                label: M.a.ac7f9745,
                options: xe(R).map(function (e) {
                  return { label: Te(R)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: M.a.c7751803,
                options: Ae(R).map(function (e) {
                  return { label: Ie(R)[e], value: e }
                }),
              },
            },
            F = function (e) {
              a.scribeAction('click_'.concat(e))
            },
            z = function () {
              F('delete'),
                c(i)
                  .then(function (e) {
                    if ('Done' === e.birdwatchnote_rating_delete) {
                      var t = Object.freeze({})
                      m(t), O(!0)
                    }
                  })
                  .catch(r())
            },
            W = function () {
              F('edit'), O(!0)
            },
            K = function () {
              var e, t
              ;(F('submit'),
              o(i, p)
                .then(function () {
                  O(!1)
                })
                .catch(r({ defaultToast: { text: Be, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              d.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(A.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = p.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = p.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
                  Math.random() < 0.05) &&
                n({
                  text: We,
                  action: { label: Ue, link: null == s ? void 0 : s.url },
                  withAutoDismiss: !0,
                  withClearButton: !0,
                })
            },
            V = function (e) {
              return function (t) {
                return function () {
                  m(function (n) {
                    return n[e]
                      ? n[e].includes(t)
                        ? Re(
                            Re({}, n),
                            {},
                            g()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : Re(Re({}, n), {}, g()({}, e, [].concat(S()(n[e]), [t])))
                      : Re(Re({}, n), {}, g()({}, e, [t]))
                  })
                }
              }
            },
            Z = function (e) {
              var t = (p && p[e]) || []
              return E.createElement(
                P.a,
                { style: rt.checkboxContainer },
                E.createElement(L.b, { weight: 'bold' }, H[e].label),
                H[e].options.map(function (n) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == p ? void 0 : p.helpfulness_level) &&
                      n.value === U.TwitterViolationAny
                    ) &&
                    E.createElement(D.a, {
                      checked: t.includes(n.value),
                      key: n.value,
                      label: n.label,
                      onChange: V(e)(n.value),
                      style: rt.checkbox,
                    })
                  )
                }),
              )
            },
            q = E.createElement(_e.a, null, function (e) {
              var t = e.windowWidth <= k.a.theme.breakpoints.small
              return E.createElement(
                P.a,
                { style: !t && rt.helpfulContainer },
                E.createElement(L.b, { style: t && rt.helpfulQuestionMobile, weight: 'bold' }, H.helpful.label),
                E.createElement(
                  P.a,
                  { style: rt.helpfulOptions },
                  Ne.map(function (e) {
                    return E.createElement(
                      B.a,
                      {
                        key: e.value,
                        onClick:
                          ((t = e.value),
                          function () {
                            m(function (e) {
                              return Re(Re({}, e), {}, { helpfulness_level: t })
                            })
                          }),
                        size: 'small',
                        style: rt.helpfulButtons,
                        type: (null == p ? void 0 : p.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
                      },
                      e.label,
                    )
                    var t
                  }),
                ),
              )
            }),
            Y = E.createElement(Ce.a, ot),
            J = E.createElement(je.a, {
              actionLabel: Ve,
              headline: Ge,
              isFullHeightOnMobile: !0,
              onAction: function () {
                K(), t(Ee.c), x(!1)
              },
              onSecondaryAction: function () {
                return x(!1)
              },
              secondaryActionLabel: Xe,
              subtext: Y,
            }),
            $ = void 0 !== (null == p ? void 0 : p.helpfulness_level),
            ee =
              $ &&
              ('Helpful' === (null == p ? void 0 : p.helpfulness_level) ||
                'SomewhatHelpful' === (null == p ? void 0 : p.helpfulness_level)),
            te =
              $ &&
              ('NotHelpful' === (null == p ? void 0 : p.helpfulness_level) ||
                'SomewhatHelpful' === (null == p ? void 0 : p.helpfulness_level))
          return E.createElement(
            E.Fragment,
            null,
            T ? J : null,
            v
              ? E.createElement(
                  P.a,
                  { style: rt.root },
                  q,
                  ee && Z('helpful_tags'),
                  te && Z('not_helpful_tags'),
                  !Object(A.a)(p) &&
                    E.createElement(
                      B.a,
                      {
                        onClick: function () {
                          u && d.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? x(!0) : p && K()
                        },
                        style: rt.button,
                        type: 'brandFilled',
                      },
                      ke,
                    ),
                )
              : E.createElement(
                  P.a,
                  { style: [rt.root, rt.showSubmittedRating] },
                  E.createElement(
                    P.a,
                    { style: rt.row },
                    E.createElement(Q.a, { style: rt.icon }),
                    E.createElement(
                      L.b,
                      { size: 'subtext2' },
                      (function () {
                        switch (null == p ? void 0 : p.helpfulness_level) {
                          case 'Helpful':
                            return tt
                          case 'SomewhatHelpful':
                            return nt
                          case 'NotHelpful':
                            return at
                          default:
                            return
                        }
                      })(),
                    ),
                  ),
                  E.createElement(N.a, {
                    renderActionMenu: function (e) {
                      return E.createElement(I.default, {
                        actionItems:
                          ((t = []),
                          t.push({
                            confirmation: { label: Me, headline: Fe, text: ze, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: Me,
                            Icon: X.a,
                            onClick: z,
                          }),
                          t.push({ text: He, Icon: G.a, onClick: W }),
                          t),
                        onClose: e,
                      })
                      var t
                    },
                  }),
                ),
          )
        }),
        it = n('xSpP'),
        lt = n('XOJV'),
        st = function (e, t) {
          var n,
            a = null === (n = t.note) || void 0 === n ? void 0 : n.tweet
          return a ? lt.a.selectFetchStatus(e, a.rest_id) : void 0
        },
        ut = Object(j.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: st, userAlias: C.x }
          })
          .propsFromActions(function () {
            return {
              addToast: Oe.b,
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: it.b,
              fetchTweet: lt.a.fetchOneIfNeeded,
              fetchUserAlias: C.k,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        dt = n('eqZz'),
        ft = n('W6+M'),
        bt = n('yrzJ'),
        pt = n('sgih')
      function mt(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ht = M.a.e4579709,
        yt = M.a.df587b98,
        gt = M.a.fd284b08,
        vt = M.a.h201bdc8,
        wt = M.a.fe1f6043,
        Et = M.a.ia5e7487,
        Ot = M.a.j58e7b00,
        St = (function (e) {
          f()(n, e)
          var t = mt(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.alias,
                    n = e.closeNoteDetails,
                    a = e.created_at,
                    r = e.rest_id,
                    o = e.userBadges,
                    c = this.context.featureSwitches,
                    i = c.isTrue('responsive_web_birdwatch_note_awards_enabled'),
                    l = c.isTrue('responsive_web_birdwatch_aliases_enabled'),
                    s = i && o && o.length > 0,
                    u = E.createElement(
                      P.a,
                      { style: _t.noteDetailsContainer },
                      E.createElement(
                        P.a,
                        { style: _t.noteDetailsHeader },
                        E.createElement(L.b, { size: 'headline1', weight: 'bold' }, ht),
                      ),
                      E.createElement(
                        P.a,
                        { style: _t.noteDetails },
                        E.createElement(
                          P.a,
                          { style: [_t.noteDetailsSection, _t.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: _t.noteDetailsText }, yt),
                          E.createElement(L.b, { style: _t.noteDetailsContentText }, r),
                        ),
                        E.createElement(
                          P.a,
                          { style: [_t.noteDetailsSection, _t.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: _t.noteDetailsText }, vt),
                          l
                            ? E.createElement(
                                L.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: _t.profileText },
                                Object(ft.a)(t),
                              )
                            : E.createElement(bt.a, { screenName: t }),
                          l &&
                            E.createElement(
                              L.b,
                              {
                                color: 'link',
                                link: '/i/birdwatch/u/'.concat(t),
                                onClick: n,
                                style: _t.viewProfileLink,
                              },
                              Ot,
                            ),
                        ),
                        E.createElement(
                          P.a,
                          {
                            style: [_t.noteDetailsSection, s ? _t.noteDetailsSectionBorder : _t.noteDetailsSectionLast],
                          },
                          E.createElement(L.b, { color: 'normal', style: _t.noteDetailsText }, wt),
                          E.createElement(
                            L.b,
                            { style: _t.noteDetailsContentText },
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
                        s &&
                          E.createElement(
                            P.a,
                            { style: [_t.noteDetailsSection, _t.noteDetailsSectionLast] },
                            E.createElement(L.b, { color: 'normal', style: _t.awardDetailsText }, gt),
                            o
                              ? o.map(function (e, t) {
                                  return E.createElement(dt.a, { badgeType: e, key: t })
                                })
                              : null,
                          ),
                        E.createElement(P.a, { style: _t.contentSpacer }),
                      ),
                      E.createElement(
                        P.a,
                        { style: _t.noteDetailsButtonSection },
                        E.createElement(P.a, { style: _t.buttonSpacer }),
                        E.createElement(B.a, { onClick: n, style: _t.noteDetailsButton, type: 'brandFilled' }, Et),
                      ),
                    )
                  return E.createElement(_e.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(pt.a, {
                      allowBackNavigation: !0,
                      children: u,
                      onMaskClick: n,
                      type: t >= k.a.theme.breakpoints.medium ? 'center' : 'full',
                      withMask: !0,
                    })
                  })
                },
              },
            ]),
            n
          )
        })(E.Component)
      g()(St, 'contextType', _.a)
      var _t = k.a.create(function (e) {
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
            viewProfileLink: { marginTop: e.spaces.space4 },
            contentSpacer: { flex: 1, minHeight: e.spaces.space32 },
            buttonSpacer: { flex: 1 },
            profileText: { textTransform: 'capitalize' },
          }
        }),
        Ct = St,
        jt = n('b5s6'),
        Tt = n('rcen'),
        xt = n('Rp9C'),
        It = 'helpfulRatingTags',
        At = 'notHelpfulRatingTags',
        Pt = 'ratingStatus',
        Lt = n('pjBI'),
        Dt = n('GBcw'),
        Rt = n('htQn'),
        Bt = n('zIWA'),
        Nt = n('/WPq'),
        kt = n('x0mb')
      function Ht(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Mt = M.a.d96cf7cd,
        Ft = M.a.e272836c,
        zt = M.a.e4579709,
        Wt = M.a.fa0d3ee3,
        Ut = M.a.ccf2f24e,
        Kt = M.a.df321fc3,
        Vt = E.createElement(L.b, { color: 'primary' }, Kt),
        Xt = M.a.gdcbac31,
        Gt = M.a.be86e75d,
        Qt = M.a.f2d93c3d,
        Zt = 'CurrentlyRatedHelpful',
        qt = 'CurrentlyRatedNotHelpful',
        Yt = 'NeedsMoreRatings',
        Jt = function (e, t, n) {
          switch (e) {
            case Zt:
              if (2 === t.length) {
                var a = w()(t, 2),
                  r = a[0],
                  o = a[1],
                  c = xe(!0),
                  i = Te(!0),
                  l = c.includes(r) ? i[r] : W[r],
                  s = c.includes(o) ? i[o] : W[o],
                  u = ''.concat(l, ' · ').concat(s)
                return l && s
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: u }, size: 'subtext2', style: tn.ratingTag, testID: It },
                      u,
                    )
                  : null
              }
              return null
            case qt:
              if (2 === n.length) {
                var d = w()(n, 2),
                  f = d[0],
                  b = d[1],
                  p = Ae(!0).includes(f) ? Ie(!0)[f] : V[f],
                  m = Ae(!0).includes(b) ? Ie(!0)[b] : V[b],
                  h = ''.concat(p, ' · ').concat(m)
                return p && m
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: h }, size: 'subtext2', style: tn.ratingTag, testID: At },
                      h,
                    )
                  : null
              }
              return null
            default:
              return null
          }
        },
        $t = function (e, t) {
          return E.createElement(
            P.a,
            { style: tn.ratingInfoItem, testID: Pt },
            nn(e),
            E.createElement(L.b, { size: 'subtext2', weight: 'bold' }, t),
          )
        },
        en = (function (e) {
          f()(n, e)
          var t = Ht(n)
          function n(e, a) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, a)),
              g()(u()(r), '_handleFetchTweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweet,
                  a = e.note.tweet,
                  o = null == a ? void 0 : a.rest_id
                o && n(o).catch(t())
              }),
              g()(u()(r), '_isOwner', function () {
                var e,
                  t = r.props,
                  n = t.note,
                  a = t.userAlias,
                  o = null == n || null === (e = n.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!a || !o) && o === a
              }),
              g()(u()(r), '_handleDeleteConfirm', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.deleteNote,
                  a = e.handleDelete,
                  o = e.note,
                  c = o.birdwatch_profile,
                  i = o.rest_id
                r._scribeOnClick('delete')(),
                  null != c &&
                    c.alias &&
                    r._isOwner() &&
                    n(i)
                      .then(function (e) {
                        null == a || a(i)
                      })
                      .catch(t())
              }),
              g()(u()(r), '_getMenuActionItems', function () {
                var e = r.props.note,
                  t = e.birdwatch_profile,
                  n = e.rest_id,
                  a = []
                return (
                  null != t &&
                    t.alias &&
                    r._isOwner() &&
                    a.push({
                      confirmation: { label: Mt, headline: Ft, text: Wt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: Mt,
                      Icon: X.a,
                      onClick: r._handleDeleteConfirm,
                    }),
                  a.push({
                    text: Ut,
                    Icon: Bt.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(n) },
                    onClick: r._scribeOnClick('report'),
                  }),
                  a.push({ text: zt, Icon: Nt.a, onClick: r._onNoteDetailsClick }),
                  a
                )
              }),
              g()(u()(r), '_onNoteDetailsClick', function () {
                r.setState({ noteDetailsOpen: !0 }), r._scribeOnClick('note_details')
              }),
              g()(u()(r), '_renderCurationActionMenu', function (e) {
                return E.createElement(I.default, { actionItems: r._getMenuActionItems(), onClose: e })
              }),
              g()(u()(r), '_scribeOnClick', function (e) {
                return function () {
                  var t = r.props,
                    n = t.analytics,
                    a = t.note.tweet
                  if (a) {
                    var o = xt.a.forTweet(a.rest_id)
                    n.scribe({ element: e, action: 'click', data: { targets: [o] } })
                  }
                }
              }),
              g()(u()(r), '_renderQuoteTweet', function () {
                var e = r.props.note.tweet
                return E.createElement(
                  P.a,
                  { style: tn.tweetContainer },
                  E.createElement(jt.a, { isCondensed: !0, tweetId: null == e ? void 0 : e.rest_id }),
                )
              }),
              (r.state = { noteDetailsOpen: !1 }),
              r
            )
          }
          return (
            l()(n, [
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
                    o = r.created_at,
                    c = r.rating,
                    i = r.rating_status,
                    l = r.rating_survey,
                    s = r.helpful_tags,
                    u = void 0 === s ? [] : s,
                    d = r.not_helpful_tags,
                    f = void 0 === d ? [] : d,
                    b = r.rest_id,
                    p = r.data_v1,
                    m = r.tweetId,
                    h = r.tweet,
                    y = a.showPivot,
                    g = a.showRating,
                    v = a.showTweet,
                    w = this.context.featureSwitches,
                    O = m || (null == h ? void 0 : h.rest_id),
                    S = (null == p || null === (e = p.summary) || void 0 === e ? void 0 : e.text) || '',
                    _ = (null == p || null === (t = p.summary) || void 0 === t ? void 0 : t.entities) || [],
                    C = (null == c ? void 0 : c.data_v1) || {},
                    j = (null == c ? void 0 : c.data_v2) || {},
                    T = 2 === (null == c ? void 0 : c.version),
                    x = T ? j : C,
                    I = Object(A.a)(x),
                    D = (w.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && I) || T,
                    R =
                      (w.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        w.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      g,
                    B = this.props.note.birdwatch_profile,
                    H = (null == B ? void 0 : B.alias) || '',
                    M = (null == B ? void 0 : B.badges) || [],
                    F = function () {
                      return n.setState({ noteDetailsOpen: !1 })
                    }
                  return E.createElement(_e.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(
                      P.a,
                      { key: b, style: tn.noteContainer },
                      E.createElement(
                        P.a,
                        { style: tn.noteTopContainer },
                        v && O
                          ? E.createElement(
                              P.a,
                              { style: tn.tweetContainer },
                              E.createElement(jt.a, { isCondensed: !0, tweetId: O }),
                            )
                          : null,
                        E.createElement(
                          P.a,
                          { style: [tn.noteTop, v && tn.noteTopWithQT] },
                          E.createElement(
                            P.a,
                            { style: tn.noteBody },
                            E.createElement(
                              Lt.a,
                              { style: tn.noteInfoMiddots },
                              (function (e) {
                                switch (e) {
                                  case Zt:
                                    return $t(tn.iconGreen, Xt)
                                  case qt:
                                    return $t(tn.iconRed, Qt)
                                  case Yt:
                                    return $t(tn.iconGray, Gt)
                                  default:
                                    return null
                                }
                              })(i),
                              t >= k.a.theme.breakpoints.medium ? Jt(i, u, f) : null,
                              o
                                ? E.createElement(Dt.a, { style: [tn.ratingInfoItem, tn.timestamp], timestamp: o })
                                : null,
                            ),
                            t < k.a.theme.breakpoints.medium
                              ? E.createElement(Lt.a, { style: tn.noteInfoMiddots }, Jt(i, u, f))
                              : null,
                            E.createElement(
                              P.a,
                              { style: tn.noteTextSection },
                              E.createElement(Tt.a, { entities: _, onEntityClick: n._scribeOnClick('link'), text: S }),
                            ),
                          ),
                          E.createElement(N.a, { renderActionMenu: n._renderCurationActionMenu, style: tn.caret }),
                        ),
                        R
                          ? E.createElement(
                              P.a,
                              { style: tn.ratingContainer },
                              D
                                ? E.createElement(ct, { noteId: b, rating: j, ratingSurvey: l })
                                : E.createElement(we, { noteId: b, rating: C }),
                            )
                          : null,
                      ),
                      y &&
                        O &&
                        E.createElement(
                          Rt.a,
                          null,
                          E.createElement(
                            L.b,
                            {
                              link: '/i/birdwatch/t/'.concat(O),
                              onPress: n._scribeOnClick('pivot'),
                              style: [tn.pivot, v && tn.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            Vt,
                          ),
                        ),
                      n.state.noteDetailsOpen &&
                        E.createElement(Ct, {
                          alias: H,
                          closeNoteDetails: F,
                          created_at: o,
                          rest_id: b,
                          userBadges: M,
                        }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(E.Component)
      g()(en, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), g()(en, 'contextType', _.a)
      var tn = k.a.create(function (e) {
          return {
            caret: { display: 'flex', alignSelf: 'flex-start', flex: 1, flexBasis: '0%', flexDirection: 'row-reverse' },
            classification: { paddingRight: e.spaces.space4 },
            icon: {
              height: e.spaces.space12,
              paddingBottom: e.spaces.space2,
              paddingRight: e.spaces.space8,
              width: e.spaces.space12,
            },
            iconGreen: { color: e.colors.green500 },
            iconGray: { color: e.colors.gray700 },
            iconRed: { color: e.colors.red500 },
            noteBody: { flex: 9, flexBasis: '0%' },
            noteContainer: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8 },
            noteHeader: { flexDirection: 'row', flexWrap: 'wrap', paddingBottom: e.spaces.space8 },
            noteTextSection: {
              display: 'inline',
              flexDirection: 'row',
              paddingBottom: e.spaces.space4,
              paddingTop: e.spaces.space4,
            },
            noteTop: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
            noteTopWithQT: { paddingLeft: e.spaces.space12 },
            noteTopContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            ratingContainer: { paddingBottom: e.spaces.space16 },
            ratingTag: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' },
            ratingInfoItem: { alignItems: 'center', flexDirection: 'row' },
            noteInfoMiddots: {
              alignItems: 'center',
              flexDirection: 'row',
              overflow: 'hidden',
              paddingBottom: e.spaces.space4,
            },
            pivot: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            pivotWithQT: { paddingHorizontal: e.spaces.space28 },
            timestamp: { fontSize: e.fontSizes.subtext2 },
            tweetContainer: { marginBottom: e.spaces.space12 },
          }
        }),
        nn = function (e) {
          return E.createElement(kt.a, { style: [tn.icon, e] })
        },
        an = ut(en)
      t.a = an
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        l = n('v6aA'),
        s = n('XOJV'),
        u = n('eSoz'),
        d = n('rxPX'),
        f = n('0KEI'),
        b = function (e, t) {
          return t.tweetId
        },
        p = function (e, t) {
          var n = t.tweetId,
            a = n && s.a.select(e, n)
          return a ? Object(u.f)(e, a) : void 0
        },
        m = Object(d.a)()
          .propsFromState(function () {
            return { community: p, hydratedTweet: s.a.createHydratedTweetSelector(b) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.b.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        y = n('uCxL'),
        g = n('x5Pi'),
        v = m(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            s =
              (e.tweetId,
              c()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = i.useContext(l.a),
            d = u.featureSwitches,
            f = u.loggedInUserId,
            b = null == o ? void 0 : o.community_id_str
          i.useEffect(
            function () {
              b && Object(h.a)(t) && a(b).catch(n())
            },
            [t, b, n, a],
          )
          var p = d.isTrue('responsive_web_alt_text_badge_enabled'),
            m = o && Object(g.f)(o, f, t),
            v = m && Object(g.e)(m),
            w = d.isTrue('responsive_web_reactions_enabled')
          return i.createElement(
            y.a,
            r()({}, s, {
              loggedInUserId: f,
              shouldShowAltLabelAlways: p,
              socialContextProps: v,
              tweet: o,
              withReactions: w,
            }),
          )
        })
      t.a = v
    },
    dW4k: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SelfUserNotePageRedirect', function () {
          return E
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Qwev'),
        i = n('v6aA'),
        l = n('9StO'),
        s = n('vZpt'),
        u = n('L5MV'),
        d = n('MvLc'),
        f = n('rxPX'),
        b = n('0KEI'),
        p = Object(f.a)()
          .propsFromState(function () {
            return { userAlias: d.x, showAliasSelfSelect: d.u }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: d.k,
              fetchShowAliasSelfSelect: d.i,
            }
          }),
        m = n('3XMw'),
        h = n.n(m),
        y = n('5FtR'),
        g = n('VS6U'),
        v = n('nymP'),
        w = h.a.ff692d63,
        E = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchShowAliasSelfSelect,
            a = e.fetchUserAlias,
            d = e.history,
            f = e.showAliasSelfSelect,
            b = e.userAlias,
            p = o.useContext(i.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            m = o.useState(!0),
            h = r()(m, 2),
            E = h[0],
            O = h[1]
          o.useEffect(
            function () {
              a()
                .then(function () {
                  return O(!1)
                })
                .catch(t())
            },
            [t, a],
          ),
            o.useEffect(
              function () {
                n().catch(t())
              },
              [t, n],
            )
          var S = function (e) {
            a()
              .then(function () {
                return O(!1)
              })
              .catch(t())
          }
          return o.createElement(g.a, {
            TabBar: u.a,
            history: d,
            logoButton: o.createElement(o.Fragment, null),
            primaryContent: E
              ? o.createElement(c.a, { size: 'large' })
              : b
              ? o.createElement(y.a, { to: '/i/birdwatch/u/'.concat(b) })
              : p && f
              ? o.createElement(l.a, { onAliasSelected: S })
              : o.createElement(v.a, null),
            sidebarContent: o.createElement(s.a, null),
            title: w,
            withTweetButton: !1,
          })
        },
        O = p(E)
      t.default = O
    },
    eqZz: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n('3XMw'),
        o = n.n(r),
        c = n('B/qP'),
        i = n('MWbm'),
        l = n('j7Bv'),
        s = n('t62R'),
        u = n('rHpw'),
        d = o.a.c57760e9,
        f = o.a.c45ef9c1,
        b = o.a.g29805f5,
        p = o.a.b1056323,
        m = function () {
          return a.createElement(c.a, { style: h.innerIconColor })
        },
        h = u.a.create(function (e) {
          return {
            awardSection: { flexDirection: 'row', marginBottom: e.spaces.space8, alignItems: 'center' },
            goldAward: { backgroundColor: e.colors.yellow500 },
            innerIconColor: { color: e.colors.buttonAlwaysBlack },
            ratingAward: { marginRight: e.spaces.space8 },
            ratingAwardText: { color: e.colors.text, marginRight: e.spaces.space4 },
            silverAward: { backgroundColor: e.colors.gray300 },
          }
        }),
        y = {
          Top10Author: { badgeStyle: h.goldAward, contributorText: b, badgeText: d },
          Top10Rater: { badgeStyle: h.goldAward, contributorText: b, badgeText: f },
          Top25Author: { badgeStyle: h.silverAward, contributorText: p, badgeText: d },
          Top25Rater: { badgeStyle: h.silverAward, contributorText: p, badgeText: f },
        }
      t.a = function (e) {
        var t = e.badgeType,
          n = y[t],
          r = n.badgeStyle,
          o = n.badgeText,
          c = n.contributorText
        return a.createElement(
          i.a,
          { style: h.awardSection },
          a.createElement(l.a, { Icon: m, size: 'large', style: [h.ratingAward, r] }),
          a.createElement(s.b, { style: h.ratingAwardText, weight: 'bold' }, c),
          a.createElement(s.b, null, o),
        )
      }
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            o.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    'iCa+': function (e, t, n) {
      'use strict'
      n.r(t)
      n('WNMA'), n('KqXw'), n('MvUL')
      var a = n('ERkP'),
        r = n('3XMw'),
        o = n.n(r),
        c = n.p + 'birdwatch_note_live.b1a67015.png',
        i = n('aITJ'),
        l = n('t62R'),
        s = n('feu+'),
        u = n('rHpw'),
        d = n('U+bB'),
        f = n('MWbm'),
        b = o.a.a05667aa,
        p = o.a.j5a1d85a,
        m = o.a.ace99891,
        h = function () {
          return a.createElement(d.a, { source: c, style: y.image })
        },
        y = u.a.create(function (e) {
          return { content: { marginVertical: e.spaces.space16 }, image: { height: '189px', width: '152px' } }
        })
      t.default = function (e) {
        var t = e.history,
          n = e.match.params.tweetId,
          r = a.createElement(f.a, null, a.createElement(l.b, null, b))
        return a.createElement(s.a, {
          actionLabel: p,
          contentStyle: y.content,
          graphic: h,
          graphicDisplayMode: 'illustration',
          headline: m,
          isFullHeightOnMobile: !0,
          onAction: function () {
            t.push('/i/birdwatch/t/'.concat(n))
          },
          onClose: function () {
            i.b.isTwitterApp() || t.replace('/i/status/'.concat(n))
          },
          subtext: r,
          withCloseButton: !i.b.isTwitterApp(),
        })
      }
    },
    mQYW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchNotesUserScreen', function () {
          return he
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('z84I'), n('uFXj'), n('ERkP')),
        c = n('v6aA'),
        i = n('9StO'),
        l = n('eqZz'),
        s = n('97Jx'),
        u = n.n(s),
        d = n('m3Bd'),
        f = n.n(d),
        b = n('ZD0R'),
        p = n('xSpP'),
        m = n('rxPX'),
        h = function (e, t) {
          var n = t.noteId
          return p.a.select(e, n)
        },
        y = Object(m.a)().propsFromState(function () {
          return { note: h }
        })(function (e) {
          var t = e.note,
            n = (e.noteId, f()(e, ['note', 'noteId']))
          return t ? o.createElement(b.a, u()({ note: t }, n)) : null
        }),
        g = n('vZpt'),
        v = n('L5MV'),
        w = (n('WNMA'), n('KqXw'), n('MvLc')),
        E = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        O = n.n(E),
        S = n('wAC9')
      function _(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j = n('hqKg'),
        T = n('0KEI'),
        x = function (e, t) {
          return t.match.params.alias
        },
        I = function (e, t) {
          return Object(j.createSelector)(x, function (e) {
            return e
              ? (function (e) {
                  return Object(S.a)({
                    contextSuffix: 'BIRDWATCH_CONTRIBUTOR_NOTES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Birdwatch.fetchBirdwatchContributorNotesSlice
                    },
                    getEndpointParams: function (t) {
                      return C(C({}, t), {}, { alias: e })
                    },
                    sliceKey: 'birdwatchContributorNotesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        A = function (e, t) {
          return w.o(e, x(0, t))
        },
        P = function (e, t) {
          return w.n(e, x(0, t))
        },
        L = function (e, t) {
          return w.u(e)
        },
        D = Object(m.a)()
          .propsFromState(function () {
            return {
              alias: x,
              notesSlice: I(),
              ratingsData: A,
              contributorBadgeData: P,
              showAliasSelfSelect: L,
              userAlias: w.x,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchBirdwatchProfile: w.f,
              fetchShowAliasSelfSelect: w.i,
              fetchUserAlias: w.k,
            }
          }),
        R = n('W6+M'),
        B = n('BcsE'),
        N = n('yoO3'),
        k = n('7JQg'),
        H = n('VS6U'),
        M = n('FS1z'),
        F = n('aITJ'),
        z = n('nymP'),
        W = n('MWbm'),
        U = n('t62R'),
        K = n('FIs5'),
        V = n('MtXG'),
        X = n('0yYu'),
        G = n('/yvb'),
        Q = n('j7Bv'),
        Z = n('6vad'),
        q = n('cHvH'),
        Y = n('rHpw'),
        J = n('3XMw'),
        $ = n.n(J),
        ee = n('B/qP'),
        te = n('6s7X'),
        ne = n('ms2t'),
        ae = $.a.ff692d63,
        re = $.a.ab28945b,
        oe = $.a.jaf0d42c,
        ce = $.a.fe27c1e1,
        ie = $.a.b8b34f54,
        le = $.a.fd284b08,
        se = $.a.ff746f63,
        ue = $.a.hc19704b,
        de = $.a.j44125ee,
        fe = $.a.da55067b,
        be = o.createElement(
          $.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.createElement(U.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, $.a.j1a30557),
        ),
        pe = { label: ue, preferredHorizontalOrientation: 'start' },
        me = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        he = function (e) {
          var t = o.useContext(c.a).featureSwitches,
            n = e.alias,
            a = e.contributorBadgeData,
            s = e.createLocalApiErrorHandler,
            u = e.fetchBirdwatchProfile,
            d = e.fetchShowAliasSelfSelect,
            f = e.fetchUserAlias,
            b = e.history,
            p = e.notesSlice,
            m = e.ratingsData,
            h = e.showAliasSelfSelect,
            w = e.userAlias,
            E = o.useState(h),
            O = r()(E, 2),
            S = O[0],
            _ = O[1],
            C = w === n
          o.useEffect(
            function () {
              d().catch(s())
            },
            [s, d],
          ),
            o.useEffect(
              function () {
                n && u(n).catch(s())
              },
              [s, u, n],
            ),
            o.useEffect(
              function () {
                f().catch(s())
              },
              [s, f],
            ),
            o.useEffect(
              function () {
                _(h)
              },
              [h],
            )
          var j,
            T,
            x,
            I,
            A,
            P,
            L,
            D,
            J,
            ue = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            he = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            ge = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            ve = o.useMemo(
              function () {
                return { page: 'birdwatch', section: ue ? 'user_notes_participant' : 'user_notes' }
              },
              [ue],
            ),
            we = o.createElement(K.a, { header: de, message: fe }),
            Ee = o.createElement(z.a, null),
            Oe = function (e) {
              return o.createElement(
                W.a,
                { key: e },
                o.createElement(y, { noteId: e, showPivot: C, showRating: !1, showTweet: !0 }),
                o.createElement(X.a, { withTopBorder: !1 }),
              )
            },
            Se = function () {
              return C ? Ee : we
            },
            _e = C ? ae : re,
            Ce = ge && S && C,
            je = ge ? void 0 : '@'.concat(n)
          return o.createElement(
            k.b,
            { namespace: ve },
            o.createElement(
              N.a,
              null,
              o.createElement(H.a, {
                TabBar: v.a,
                backLocation: '/i/birdwatch',
                history: b,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent: Ce
                  ? o.createElement(i.a, {
                      onAliasSelected: function (e) {
                        b.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((T = null == m ? void 0 : m.helpful),
                    (x = null == m ? void 0 : m.somewhatHelpful),
                    (I = null == m ? void 0 : m.notHelpful),
                    (A = void 0 !== T),
                    (P = A && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (L = a || []),
                    (D = o.createElement(te.a, { style: ye.badgeStandingIcon })),
                    (J = o.createElement(G.a, { hoverLabel: pe, icon: D, link: me, style: ye.badgeStandingButton })),
                    o.createElement(
                      W.a,
                      null,
                      F.b.isTwitterApp() &&
                        o.createElement(
                          W.a,
                          { style: ye.birdwatchProfileContainer },
                          o.createElement(
                            U.b,
                            { numberOfLines: 1, size: 'headline1', style: ye.birdwatchProfileTitle, weight: 'bold' },
                            _e,
                          ),
                          o.createElement(X.a, null),
                        ),
                      ge &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(Q.a, {
                            Icon: ne.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ye.genericBirdwatchProfileIcon,
                          }),
                          o.createElement(Z.b, { style: ye.profileText, text: Object(R.a)(n) }),
                          o.createElement(U.b, { color: 'gray700', style: ye.birdwatchAliasDisclaimerText }, be),
                          o.createElement(X.a, null),
                        ),
                      P &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(Z.b, { rightControl: J, text: le }),
                          o.createElement(
                            W.a,
                            { style: ye.awardsContainer },
                            L.length > 0
                              ? o.createElement(q.a, null, function (e) {
                                  var t = e.windowWidth
                                  return o.createElement(
                                    W.a,
                                    {
                                      style:
                                        t >= Y.a.theme.breakpoints.medium
                                          ? ye.badgeContainerLarge
                                          : ye.badgeContainerSmall,
                                    },
                                    L &&
                                      L.map(function (e, t) {
                                        return o.createElement(l.a, { badgeType: e, key: t })
                                      }),
                                  )
                                })
                              : o.createElement(
                                  W.a,
                                  { style: ye.awardSection },
                                  o.createElement(Q.a, {
                                    Icon: function () {
                                      return o.createElement(ee.a, { style: ye.noAward })
                                    },
                                    size: 'large',
                                    style: [ye.ratingAward, ye.noAwardThumbnail],
                                  }),
                                  o.createElement(U.b, { size: 'subtext1', style: ye.noAwardText }, se),
                                ),
                          ),
                        ),
                      A &&
                        C &&
                        o.createElement(
                          W.a,
                          { style: ye.ratingsContainer },
                          o.createElement(U.b, { style: ye.ratingsReceived, weight: 'bold' }, ie),
                          o.createElement(
                            W.a,
                            { style: ye.ratingNumbers },
                            Object(B.a)(T)
                              ? o.createElement(
                                  W.a,
                                  { style: ye.helpfulStats },
                                  (function (e) {
                                    return o.createElement(
                                      V.a,
                                      null,
                                      o.createElement(
                                        $.a.I18NFormatMessage,
                                        { $i18n: 'g6ea1d54' },
                                        o.createElement(V.a.Value, null, $.a.b5eb23f9({ count: e })),
                                        o.createElement(V.a.Label, null, $.a.ebecb73c),
                                      ),
                                    )
                                  })(T),
                                )
                              : null,
                            he && Object(B.a)(x)
                              ? o.createElement(
                                  W.a,
                                  { style: ye.helpfulStats },
                                  (function (e) {
                                    return o.createElement(
                                      V.a,
                                      null,
                                      o.createElement(
                                        $.a.I18NFormatMessage,
                                        { $i18n: 'b93058db' },
                                        o.createElement(V.a.Value, null, $.a.i1f57cc4({ count: e })),
                                        o.createElement(V.a.Label, null, $.a.e8907cd9),
                                      ),
                                    )
                                  })(x),
                                )
                              : null,
                            Object(B.a)(I)
                              ? ((j = I),
                                o.createElement(
                                  V.a,
                                  null,
                                  o.createElement(
                                    $.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    o.createElement(V.a.Value, null, $.a.d551bc31({ count: j })),
                                    o.createElement(V.a.Label, null, $.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      p
                        ? o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(Z.b, { text: C ? oe : ce }),
                            o.createElement(M.a, { module: p, noItemsRenderer: Se, renderer: Oe }),
                          )
                        : null,
                    )),
                sidebarContent: o.createElement(g.a, null),
                subtitle: je,
                title: _e,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ye = Y.a.create(function (e) {
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
        ge = D(he)
      t.default = ge
    },
    nIpi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchDownloadDataScreen', function () {
          return B
        })
      n('2G9S'), n('z84I')
      var a = n('ERkP'),
        r = n('vZpt'),
        o = n('L5MV'),
        c = n('MvLc'),
        i = n('hqKg'),
        l = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          return c.t(e)
        },
        d = Object(l.a)()
          .propsFromState(function () {
            return {
              publicData: Object(i.createSelector)(u, function (e) {
                return e
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchPublicData: c.h,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'download_data' }),
        f = n('89Im'),
        b = n('tI3i'),
        p = n.n(b),
        m = n('yoO3'),
        h = n('VS6U'),
        y = n('MWbm'),
        g = n('t62R'),
        v = n('/yvb'),
        w = n('0yYu'),
        E = n('6vad'),
        O = n('rHpw'),
        S = n('3XMw'),
        _ = n.n(S),
        C = _.a.cb1adfa0,
        j = _.a.e72533f5,
        T = _.a.g652cada,
        x = _.a.g4d71b5e,
        I = _.a.b8a27fe1,
        A = _.a.j1c99e0f,
        P = _.a.i6f69313,
        L = _.a.h786cd79,
        D = _.a.d0fe8052,
        R = a.createElement(
          g.b,
          { color: 'gray700', size: 'subtext2' },
          a.createElement(
            _.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            a.createElement(
              g.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              _.a.g0cacb73,
            ),
          ),
        ),
        B = function (e) {
          var t,
            n,
            c,
            i = e.analytics,
            l = e.createLocalApiErrorHandler,
            s = e.fetchPublicData,
            u = e.history,
            d = e.publicData
          a.useEffect(
            function () {
              s().catch(l())
            },
            [l, s],
          )
          var b,
            O = null == d || null === (t = d.notes) || void 0 === t ? void 0 : t.urls,
            S = null == O ? void 0 : O.length,
            B = null == d || null === (n = d.ratings) || void 0 === n ? void 0 : n.urls,
            k = null == B ? void 0 : B.length,
            H = null == d || null === (c = d.notes) || void 0 === c ? void 0 : c.created_at,
            M = function (e, t, n, r) {
              return (
                p()(void 0 !== n, 'totalFiles must be defined'),
                a.createElement(
                  y.a,
                  { key: t, style: [N.fileSection, t > 1 && N.fileSectionNotFirst] },
                  a.createElement(
                    g.b,
                    null,
                    a.createElement(_.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: n }),
                  ),
                  a.createElement(v.a, {
                    icon: a.createElement(f.a, null),
                    link: e,
                    onPress:
                      ((o = ''.concat(r, '_').concat(t)),
                      function () {
                        i.scribeAction('click_'.concat(o))
                      }),
                    type: 'brandText',
                  }),
                )
              )
              var o
            },
            F = a.createElement(
              a.Fragment,
              null,
              a.createElement(
                y.a,
                { style: N.headerWrapper },
                a.createElement(g.b, { size: 'title4', style: N.textSection, weight: 'heavy' }, j),
                a.createElement(g.b, { color: 'gray700', style: N.textSection }, T),
                a.createElement(
                  g.b,
                  { color: 'gray700' },
                  x,
                  a.createElement(
                    g.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    I,
                  ),
                  '.',
                ),
              ),
              a.createElement(w.a, null),
              a.createElement(E.b, { text: A }),
              O && (null == O ? void 0 : O.length) > 0
                ? O.map(function (e, t) {
                    return M(e, t + 1, S, 'notes')
                  })
                : a.createElement(g.b, { color: 'gray700', style: N.emptyData }, L),
              a.createElement(w.a, null),
              a.createElement(E.b, { text: P }),
              B && (null == B ? void 0 : B.length) > 0
                ? B.map(function (e, t) {
                    return M(e, t + 1, k, 'ratings')
                  })
                : a.createElement(g.b, { color: 'gray700', style: N.emptyData }, D),
              a.createElement(w.a, null),
              a.createElement(
                y.a,
                { style: N.footerText },
                a.createElement(
                  g.b,
                  { color: 'gray700', style: N.dateGenerated },
                  a.createElement(_.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((b = H),
                      b
                        ? new Date(b).toLocaleString('default', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : ''),
                  }),
                ),
                R,
              ),
            )
          return a.createElement(
            m.a,
            null,
            a.createElement(h.a, {
              TabBar: o.a,
              history: u,
              logoButton: a.createElement(a.Fragment, null),
              primaryContent: F,
              sidebarContent: a.createElement(r.a, null),
              title: C,
              withTweetButton: !1,
            }),
          )
        },
        N = O.a.create(function (e) {
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
        k = d(B)
      t.default = k
    },
    nymP: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n('v6aA'),
        o = n('FIs5'),
        c = n('3XMw'),
        i = n.n(c),
        l = { external: !0, pathname: 'https://twitter.github.io/birdwatch/writing-notes' },
        s = i.a.i859a9d3,
        u = i.a.ff3e0be2,
        d = i.a.e9f1fbcb,
        f = i.a.db08295d,
        b = i.a.f4d67927,
        p = i.a.eae6767a
      t.a = function () {
        var e = a.useContext(r.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return a.createElement(o.a, {
          buttonLink: e ? l : '/i/flow/join-birdwatch',
          buttonText: e ? s : u,
          header: e ? d : f,
          message: e ? p : b,
        })
      }
    },
    owBv: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('lTXM'),
        c = n('m3Bd'),
        i = n.n(c),
        l = (n('z84I'), n('ho0z'), n('YeIG')),
        s = n('kLu5'),
        u = n('7MdP')
      function d(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var b = function (e) {
          var t = Object(s.b)(),
            n = (function (e) {
              if ('SegmentedTimelines' === e.body.__typename) {
                var t = e.body.timelines.map(function (e) {
                  return {
                    graphQLTimelineId: e.timeline.id,
                    id: e.id,
                    labelText: e.labelText,
                    scribeConfig: Object(l.a)(e.scribeConfig) ? void 0 : f({}, e.scribeConfig),
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
                  r = n.topic,
                  o = i()(n, ['__typename', 'facepile', 'topic']),
                  c = a && Object(u.b)(e, a),
                  l = Object(u.a)(e, r)
                return f(f({}, o), {}, { topicId: l, facepile: c })
              }
            })(t, e),
            r = (function (e, t) {
              var n = t.navBar
              if (!n) return {}
              switch (n.__typename) {
                case 'TitleNavBar':
                  return { title: n.title, subtitle: n.subtitle }
                case 'TopicPageNavBar':
                  return {
                    navBar: { topicId: Object(u.a)(e, n.topic), clientEventInfo: n.clientEventInfo },
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
              navBar: r.navBar && r.navBar,
              title: r.title,
              subtitle: r.subtitle,
              scribeConfig: f({}, e.scribeConfig),
            },
          }
        },
        p = n('WpDa'),
        m = n('IcAo')
      function h(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t,
          n,
          a =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(p.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (n = t.initialTimeline) &&
                void 0 !== n &&
                n.timeline.timeline
              ? Object(p.a)(t.initialTimeline.timeline.timeline)
              : Object(p.a)(o.c),
          r = b(e),
          c = r.globalObjects,
          i = r.pageConfiguration
        return y(y({}, a), {}, { globalObjects: Object(m.a)(c, a.globalObjects), pageConfiguration: i })
      }
    },
    uw5z: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return z
        })
      var a = n('ERkP'),
        r = n('v6aA'),
        o = n('vZpt'),
        c = n('L5MV'),
        i = (n('WNMA'), n('KqXw'), n('owBv')),
        l = n('ZNT5'),
        s = n('hqKg'),
        u = n('rxPX'),
        d = function (e, t) {
          var n, a
          return (
            (null === (n = t.match) || void 0 === n || null === (a = n.params) || void 0 === a ? void 0 : a.tabId) ||
            void 0
          )
        },
        f = function () {
          return Object(s.createSelector)(d, function (e) {
            return (function (e) {
              return Object(l.a)({
                timelineId: 'birdwatch-global-timeline',
                getEndpoint: function (e) {
                  return e.Birdwatch.fetchGlobalTimeline
                },
                getEndpointParams: function () {
                  return { tabId: e }
                },
                context: 'FETCH_BIRDWATCH_GLOBAL_TIMELINE',
                perfKey: 'birdwatch-global-timeline',
                formatResponse: i.a,
              })
            })(e)
          })
        },
        b = Object(u.a)().propsFromState(function () {
          return { module: f(), selectedTabId: d }
        }),
        p = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(p),
        h = n('8UdT'),
        y = n('ezF+'),
        g = n('VPAj'),
        v = (n('hBvt'), n('fs1G')),
        w = n('t62R'),
        E = n('csss'),
        O = function (e) {
          var t = e.link,
            n = e.onClick,
            r = void 0 === n ? v.a : n,
            o = e.subtext,
            c = e.text,
            i = a.createElement(w.b, { color: t ? 'primary' : 'normal' }, c)
          return a.createElement(E.a, { description: o, label: i, link: t, onPress: r })
        },
        S = n('caTy'),
        _ = n('zh9S')
      function C(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T,
        x = y.e(
          y.g({
            component: O,
            bindActions: Object(g.a)({ scribe: _.c }),
            createProps: function (e) {
              var t = e.actions.scribe,
                n = e.entry,
                a = e.scribeData,
                r = e.scribeNamespace,
                o = n.content,
                c = o.subtext,
                i = o.text,
                l = o.url
              return {
                subtext: c,
                text: i,
                link: l && Object(S.b)(l),
                onClick: function () {
                  t(j(j({}, r), {}, { action: 'click_label' }), a)
                },
              }
            },
          }),
        ),
        I = n('S/Qv'),
        A = n('5Y9N'),
        P = n('Yy//')
      function L(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var R =
          ((T = {}),
          m()(T, h.b.Label, x),
          m()(T, h.b.Message, Object(I.a)({})),
          m()(T, h.b.Tweet, Object(P.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          T),
        B = D(D({}, Object(A.a)({})), R),
        N = n('3XMw'),
        k = n.n(N),
        H = n('UZjl'),
        M = k.a.ha8209bb,
        F = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        z = function (e) {
          var t = a.useContext(r.a).featureSwitches,
            n = e.history,
            i = e.module,
            l = e.selectedTabId,
            s = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            u = a.useMemo(
              function () {
                var e = null != l ? l : 'global_timeline'
                return { page: 'birdwatch', section: s ? ''.concat(e, '_participant') : e }
              },
              [s, l],
            )
          return a.createElement(H.a, {
            TabBar: c.a,
            entryConfiguration: B,
            getTabLink: F,
            history: n,
            initialPageNamespace: u,
            logoButton: a.createElement(a.Fragment, null),
            module: i,
            selectedTabId: l,
            sidebarContent: a.createElement(o.a, null),
            timelinePrefix: 'birdwatch-',
            title: M,
            withTweetButton: !1,
          })
        },
        W = b(z)
      t.default = W
    },
    vZpt: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ddV6'),
        c = n.n(o),
        i = (n('uFXj'), n('ERkP')),
        l = n('v6aA'),
        s = n('G6rE'),
        u = n('rxPX'),
        d = n('0KEI'),
        f = function (e, t) {
          return s.e.select(e, '1319036828964454402')
        },
        b = Object(u.a)()
          .propsFromState(function () {
            return { birdwatchAccount: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: s.e.fetchManyIfNeeded,
            }
          }),
        p = n('FQwk'),
        m = n('MWbm'),
        h = n('t62R'),
        y = n('6vad'),
        g = n('/yvb'),
        v = n('h0NW'),
        w = n('rC8y'),
        E = n('rHpw'),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('yygM'),
        C = n('QDet'),
        j = n('wz7L'),
        T = n('88ay'),
        x = S.a.de962615,
        I = S.a.cbfa448b,
        A = S.a.b171d7c4,
        P = '1319036828964454402',
        L = S.a.ab23a972,
        D = S.a.gfa725ae,
        R = S.a.eac7b6ab,
        B = S.a.b0381cfb,
        N = S.a.f0addddc,
        k = S.a.c68f3bcf,
        H = S.a.dfb1f498,
        M = i.createElement(
          h.b,
          null,
          i.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            i.createElement(
              h.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              S.a.b8a36128,
            ),
          ),
        ),
        F = E.a.create(function (e) {
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
            n = e.createLocalApiErrorHandler,
            a = e.fetchUsersIfNeeded,
            o = i.useContext(l.a).featureSwitches,
            s = i.useState(null == t ? void 0 : t.following),
            u = c()(s, 2),
            d = u[0],
            f = u[1],
            b = o.isTrue('responsive_web_birdwatch_note_writing_enabled')
          i.useEffect(
            function () {
              a([P])
                .then(function (e) {
                  var t
                  e && f(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(n())
            },
            [n, a],
          )
          var E = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: x }),
              i.createElement(
                m.a,
                { style: [F.moduleBody, F.row] },
                i.createElement(h.b, { color: 'gray700', style: F.text }, I),
                i.createElement(g.a, { accessibilityLabel: A, link: '/i/flow/join-birdwatch', type: 'brandFilled' }, A),
              ),
            ),
            O = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: L }),
              i.createElement(
                m.a,
                null,
                i.createElement(T.b, { decoration: T.e, displayMode: 'UserCompact', userId: P, withFollowsYou: !0 }),
              ),
            ),
            S = function (e) {
              return i.createElement(m.a, { style: F.valueItem }, i.createElement(h.b, { color: 'gray700' }, e))
            },
            z = {
              accessibilityLabel: D,
              items: [
                { label: '', decoration: i.createElement(_.a, { style: F.valueIcon }), description: S(R) },
                { label: '', decoration: i.createElement(C.a, { style: F.valueIcon }), description: S(B) },
                { label: '', decoration: i.createElement(j.a, { style: F.valueIcon }), description: S(N) },
              ],
            },
            W = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: D }),
              i.createElement(
                m.a,
                { style: F.valuesGroup },
                i.createElement(v.a, r()({}, z, { containerStyle: F.infoItemContainer })),
              ),
              i.createElement(
                m.a,
                { style: F.footer },
                i.createElement(w.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: k,
                  withBottomRadius: !0,
                }),
              ),
            ),
            U = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: H }),
              i.createElement(m.a, { style: F.moduleBody }, M),
            )
          return i.createElement(
            m.a,
            { accessibilityRole: 'complementary', style: F.root },
            b ? null : E,
            d ? null : O,
            W,
            U,
            i.createElement(
              m.a,
              { style: [F.module, F.transparentModule] },
              i.createElement(p.a, { textColor: 'gray700', withOverflow: !0 }),
            ),
          )
        })
      t.a = z
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    xSpP: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
      })
      var a = n('oEOe'),
        r = n('MvLc'),
        o = n('3zvM'),
        c = n('lMB6'),
        i = Object(o.f)({ namespace: 'birdwatchContributorNotes' }),
        l = function (e) {
          return function (t, n, o) {
            var c = o.api
            return a.b(t, { request: c.Birdwatch.deleteNote, params: { note_id: e } })(
              { actionTypes: i.actionTypes.OPTIMISTIC_UPDATE, context: 'DELETE_NOTE' },
              function (t) {
                if (t) return [i.deleteOne(e), Object(r.c)(e)]
              },
            )
          }
        }
      t.a = c.a.register(i)
    },
    yygM: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 26 26' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M13 20.673c-.414 0-.75-.336-.75-.75V14.46c0-.414.336-.75.75-.75s.75.336.75.75v5.463c0 .414-.336.75-.75.75z',
            }),
            o.createElement('path', {
              d: 'M13 4.5c-4.687 0-8.5 3.813-8.5 8.5 0 3.424 2.037 6.494 5.19 7.83.094.04.196.067.306.067.414 0 .75-.336.75-.75 0-.31-.188-.575-.456-.69C7.685 18.36 6 15.826 6 13c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.825-1.683 5.358-4.288 6.454-.273.112-.467.38-.467.693 0 .414.336.75.75.75.105 0 .204-.022.294-.06C19.455 19.51 21.5 16.433 21.5 13c0-4.687-3.813-8.5-8.5-8.5zM13 3c-.414 0-.75-.34-.75-.757V.757C12.25.34 12.586 0 13 0s.75.34.75.757v1.486c0 .418-.336.757-.75.757zM3 13c0 .414-.34.75-.757.75H.757C.34 13.75 0 13.414 0 13s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zm23 0c0 .414-.34.75-.757.75h-1.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zM5.93 5.93c-.294.292-.77.29-1.067-.006l-1.05-1.05c-.296-.296-.298-.774-.005-1.066s.77-.29 1.066.005l1.05 1.05c.295.296.298.773.005 1.066zm16.262-2.122c.293.293.29.77-.005 1.066l-1.05 1.05c-.296.296-.774.3-1.067.006s-.29-.77.005-1.066l1.05-1.05c.297-.297.775-.3 1.067-.006zM17 22.75c0 .414-.34.75-.757.75H9.757c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h6.486c.418 0 .757.336.757.75zm-1 2.5c0 .414-.34.75-.757.75h-4.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h4.486c.418 0 .757.336.757.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 26, height: 26 }), (t.a = u)
    },
  },
])
//# sourceMappingURL=WIPED
