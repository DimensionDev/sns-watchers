;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36, 169],
  {
    '/ZwF': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchTweetNotesScreen', function () {
          return ue
        })
      var n = a('ddV6'),
        r = a.n(n),
        o = (a('z84I'), a('uFXj'), a('ERkP')),
        i = a.n(o),
        c = a('v6aA'),
        l = a('ZD0R'),
        s = a('vZpt'),
        u = a('L5MV'),
        d = (a('WNMA'), a('KqXw'), a('MvLc')),
        p = a('XOJV'),
        f = a('G6rE'),
        b = a('rxPX'),
        m = a('0KEI'),
        h = function (e, t) {
          return t.match.params.tweetId
        },
        y = function (e, t) {
          var a = h(0, t)
          return a ? p.a.selectHydrated(e, a) : void 0
        },
        v = function (e, t) {
          return d.s(e, h(0, t))
        },
        g = function (e, t) {
          return d.x(e, h(0, t))
        },
        w = function (e, t) {
          return d.w(e, h(0, t))
        },
        E = Object(b.a)()
          .propsFromState(function () {
            return {
              ownNoteData: g,
              fetchStatus: w,
              loggedInUser: f.e.selectLoggedInUser,
              tweet: y,
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
        O = a('kGix'),
        _ = a('3XMw'),
        S = a.n(_),
        C = a('yoO3'),
        T = a('7JQg'),
        j = a('VS6U'),
        A = a('xZXe'),
        I = a('MWbm'),
        x = a('FIs5'),
        P = a('4zmP'),
        L = a('t62R'),
        R = a('htQn'),
        D = a('6vad'),
        k = a('0yYu'),
        B = a('/yvb'),
        N = a('Qwev'),
        M = a('rHpw'),
        H = a('Nh1N'),
        F = (a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('KEM+')),
        z = a.n(F),
        W = a('Lsrn'),
        U = a('k/Ka')
      function K(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(a), !0).forEach(function (t) {
                z()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : K(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var X = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(U.a)(
          'svg',
          V(
            V({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [W.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zM9.145 16.033c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.046c0-.414.336-.75.75-.75s.75.336.75.75v5.046zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.95c0-.415.336-.75.75-.75s.75.335.75.75v9.083zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.56c0-.414.336-.75.75-.75s.75.336.75.75v6.56z',
            }),
          ),
        )
      }
      X.metadata = { width: 24, height: 24 }
      var q = X,
        G = S.a.h8335712,
        Z = S.a.fe27c1e1,
        Q = S.a.c59107c3,
        Y = S.a.i859a9d3,
        J = S.a.ib73f867,
        $ = S.a.efd14e79,
        ee = S.a.d06b723c,
        te = S.a.j0790071,
        ae = S.a.j679dcda,
        ne = S.a.d4f03f72,
        re = S.a.d94e246a,
        oe = S.a.d5c203a5,
        ie = S.a.bd3f064b,
        ce = S.a.ia596d40,
        le = S.a.deff0bdd,
        se = i.a.createElement(x.a, { buttonLink: '/i/birdwatch/about', buttonText: Y, header: J }),
        ue = function (e) {
          var t = i.a.useContext(c.a).featureSwitches,
            a = e.createLocalApiErrorHandler,
            n = e.fetchNotes,
            o = e.fetchStatus,
            d = e.fetchTweet,
            p = e.fetchUserAlias,
            f = e.history,
            b = e.loggedInUser,
            m = e.notes,
            h = e.ownNoteData,
            y = e.tweet,
            v = e.tweetId,
            g = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            w =
              t.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
              t.isTrue('responsive_web_birdwatch_rating_crowd_enabled'),
            E = i.a.useMemo(
              function () {
                return { page: 'birdwatch', section: g ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [g],
            ),
            _ = i.a.useState(h),
            S = r()(_, 2),
            x = S[0],
            M = S[1],
            F = function (e) {
              M(null)
            }
          i.a.useEffect(
            function () {
              v && (n(v).catch(a()), d(v).catch(a()))
            },
            [a, n, d, v],
          ),
            i.a.useEffect(
              function () {
                M(h)
              },
              [h],
            ),
            i.a.useEffect(
              function () {
                p().catch(a())
              },
              [a, p],
            )
          var z,
            W,
            U,
            K = i.a.createElement(
              I.a,
              { style: de.appealsCallout },
              i.a.createElement(P.a, {
                Icon: H.a,
                action: { label: Y, link: 'https://twitter.github.io/birdwatch/additional-review' },
                headline: oe,
                text: ie,
                type: 'primary',
              }),
            ),
            V = i.a.createElement(
              I.a,
              { style: de.actionModuleContainer },
              i.a.createElement(
                I.a,
                { style: de.actionModule },
                w ? i.a.createElement(q, { style: de.icon }) : i.a.createElement(H.a, { style: de.icon }),
                i.a.createElement(L.b, { size: 'headline1', style: de.header, weight: 'bold' }, w ? ee : ne),
                i.a.createElement(L.b, { color: 'gray700' }, w ? te : re),
                w
                  ? i.a.createElement(
                      L.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' } },
                      ae,
                    )
                  : i.a.createElement(
                      L.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/overview' } },
                      Y,
                    ),
              ),
            )
          return i.a.createElement(
            T.b,
            { namespace: E },
            i.a.createElement(
              C.a,
              null,
              i.a.createElement(j.a, {
                TabBar: u.a,
                backLocation: '/i/birdwatch',
                history: f,
                logoButton: i.a.createElement(i.a.Fragment, null),
                primaryContent:
                  ((z = x || m.length),
                  (W = '/i/birdwatch/contribute/'.concat(v)),
                  (U =
                    t.isTrue('responsive_web_birdwatch_appeals_enabled') &&
                    (null == b ? void 0 : b.id_str) === (null == y ? void 0 : y.user.id_str)),
                  i.a.createElement(
                    R.a,
                    null,
                    i.a.createElement(
                      I.a,
                      { style: de.contentWrapper },
                      i.a.createElement(
                        I.a,
                        { style: de.withBottomBorder },
                        i.a.createElement(A.b, {
                          displayPromotedContent: !1,
                          tweetId: v,
                          withActions: !0,
                          withActionsDisabled: !0,
                          withBirdwatchPivots: !1,
                          withCurationMenu: !1,
                        }),
                      ),
                      z
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            x &&
                              i.a.createElement(
                                I.a,
                                null,
                                i.a.createElement(D.b, { text: G }),
                                i.a.createElement(l.a, { handleDelete: F, note: x }),
                              ),
                            !!m.length &&
                              i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(I.a, { style: de.divider }),
                                i.a.createElement(D.b, { text: Z }),
                                U ? K : V,
                                i.a.createElement(k.a, null),
                                m.map(function (e) {
                                  return i.a.createElement(
                                    i.a.Fragment,
                                    { key: e.rest_id },
                                    i.a.createElement(l.a, { note: e }),
                                    i.a.createElement(k.a, null),
                                  )
                                }),
                                g && !x
                                  ? i.a.createElement(
                                      I.a,
                                      { style: de.actionModuleContainer },
                                      i.a.createElement(
                                        I.a,
                                        { style: de.actionModule },
                                        i.a.createElement(L.b, { style: de.improveText }, ce),
                                        i.a.createElement(
                                          B.a,
                                          { accessibilityLabel: le, link: W, type: 'brandOutlined' },
                                          le,
                                        ),
                                      ),
                                    )
                                  : null,
                              ),
                          )
                        : o === O.a.LOADING
                        ? i.a.createElement(N.a, { accessibilityLabel: $, size: 'large', style: de.spinner })
                        : se,
                    ),
                  )),
                sidebarContent: i.a.createElement(s.a, null),
                title: Q,
                withTweetButton: !1,
              }),
            ),
          )
        },
        de = M.a.create(function (e) {
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
        pe = E(ue)
      t.default = pe
    },
    '0SuV': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchPrinciples', function () {
          return I
        })
      a('MvUL'), a('KqXw'), a('7x/C'), a('lTEL'), a('kYxP')
      var n = a('ERkP'),
        r = a.n(n),
        o = (a('WNMA'), a('MvLc')),
        i = a('rxPX'),
        c = a('0KEI'),
        l = function (e, t) {
          return t.match.params.tweetId
        },
        s = function (e, t) {
          return o.x(e, l(0, t))
        },
        u = Object(i.a)()
          .propsFromState(function () {
            return { ownNoteData: s, tweetId: l }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: o.k,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form', component: 'values' }),
        d = a('3XMw'),
        p = a.n(d),
        f = a('5FtR'),
        b = a('aITJ'),
        m = a('MWbm'),
        h = a('t62R'),
        y = a('h0NW'),
        v = a('feu+'),
        g = a('rHpw'),
        w = a('yygM'),
        E = a('QDet'),
        O = a('wz7L'),
        _ = p.a.gfa725ae,
        S = p.a.c3d89aca,
        C = p.a.h7ad677b,
        T = p.a.eac7b6ab,
        j = p.a.b0381cfb,
        A = p.a.f0addddc,
        I = function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.fetchNotes,
            o = e.history,
            i = e.ownNoteData,
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
              return r.a.createElement(m.a, { style: x.valueItem }, r.a.createElement(h.b, { color: 'gray700' }, e))
            },
            d = {
              accessibilityLabel: _,
              items: [
                { label: '', decoration: r.a.createElement(w.a, null), description: u(T) },
                { label: '', decoration: r.a.createElement(E.a, null), description: u(j) },
                { label: '', decoration: r.a.createElement(O.a, null), description: u(A) },
              ],
            },
            p = r.a.createElement(m.a, { style: x.values }, r.a.createElement(y.a, d))
          return i
            ? r.a.createElement(f.a, { to: l })
            : r.a.createElement(v.a, {
                actionLabel: S,
                graphicDisplayMode: 'none',
                headline: C,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), c && o.replace('/i/birdwatch/contribute_form/'.concat(c))
                },
                onClose: function () {
                  s('close'), c && o.goBackThroughModals({ fallbackPath: '/i/status/'.concat(c) })
                },
                subtext: p,
                withCloseButton: !b.b.isTwitterApp(),
              })
        },
        x = g.a.create(function (e) {
          return {
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        P = u(I)
      t.default = P
    },
    '3GUV': function (e, t, a) {
      'use strict'
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('5Yy7'),
        l = a.n(c),
        s = a('N+ot'),
        u = a.n(s),
        d = a('AuHH'),
        p = a.n(d),
        f = a('ERkP'),
        b = a.n(f),
        m = a('rHpw'),
        h = a('MWbm')
      function y(e) {
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
          var a,
            n = p()(e)
          if (t) {
            var r = p()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return u()(this, a)
        }
      }
      var v = (function (e) {
          l()(a, e)
          var t = y(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            i()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return b.a.createElement(h.a, { style: g.root })
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        g = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
    },
    '5UID': function (e, t, a) {
      'use strict'
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('5Yy7'),
        l = a.n(c),
        s = a('N+ot'),
        u = a.n(s),
        d = a('AuHH'),
        p = a.n(d),
        f = a('ERkP'),
        b = a.n(f),
        m = a('3XMw'),
        h = a.n(m),
        y = a('rHpw'),
        v = a('+/1j'),
        g = a('MWbm')
      function w(e) {
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
          var a,
            n = p()(e)
          if (t) {
            var r = p()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return u()(this, a)
        }
      }
      var E = h.a.e5b0063d,
        O = 0,
        _ = (function (e) {
          l()(a, e)
          var t = w(a)
          function a() {
            var e
            return r()(this, a), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(O)), (O += 1), e
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.title,
                    n = E({ title: a })
                  return b.a.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    b.a.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      a,
                    ),
                    b.a.createElement(g.a, { accessibilityLabel: n }, t),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      t.a = _
    },
    '88ay': function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return te
      }),
        a.d(t, 'e', function () {
          return ae
        }),
        a.d(t, 'f', function () {
          return ne
        }),
        a.d(t, 'd', function () {
          return re
        }),
        a.d(t, 'a', function () {
          return ce
        })
      a('OZaJ'), a('+KXO'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('m3Bd'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        l = a.n(c),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        p = a.n(d),
        f = a('N+ot'),
        b = a.n(f),
        m = a('AuHH'),
        h = a.n(m),
        y = a('KEM+'),
        v = a.n(y),
        g = a('97Jx'),
        w = a.n(g),
        E = (a('1t7P'), a('jQ/y'), a('ho0z'), a('2G9S'), a('hBpG'), a('ERkP')),
        O = a.n(E),
        _ = a('6rlp'),
        S = a('zh9S'),
        C = a('G6rE'),
        T = a('rxPX'),
        j = a('0KEI'),
        A = function (e, t) {
          return C.e.select(e, t.userId)
        },
        I = function (e, t) {
          return t.promotedContent
        },
        x = Object(T.a)()
          .propsFromState(function () {
            return { promotedContent: I, user: A }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              a = e.user
            return { promotedContent: t || (a ? a.promoted_content : void 0), user: a }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: _.a,
              scribeAction: S.c,
            }
          }),
        P = a('I57f'),
        L = a('vMjK'),
        R = a('MWbm'),
        D = a('IG7M'),
        k = a('rHpw'),
        B = function (e) {
          var t = e.children,
            a = e.promotedContent,
            n = e.user
          return O.a.createElement(
            R.a,
            { style: N.decorationWrapper },
            t,
            O.a.createElement(D.a, {
              renderActionMenu: function (e) {
                return O.a.createElement(L.b, { onClose: e, promotedContent: a, user: n, view: 'follower' })
              },
              style: N.actionMenu,
            }),
          )
        },
        N = k.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        M = a('uIZp'),
        H = a('mN6z'),
        F = a('caTy'),
        z = a('3IPs'),
        W = a('Rp9C'),
        U = a('X04g'),
        K = a('Re5t'),
        V = a('TnY3'),
        X = a('hxu0'),
        q = a('v6aA'),
        G = a('7JQg'),
        Z = a('IMA+'),
        Q = a('cFuS')
      function Y(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Y(Object(a), !0).forEach(function (t) {
                v()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Y(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function $(e) {
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
          var a,
            n = h()(e)
          if (t) {
            var r = h()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return b()(this, a)
        }
      }
      var ee = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? O.a.createElement(
              oe,
              w()({}, e, {
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
      ee.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: K.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Q.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var te = function (e) {
          var t = e.isDeviceFollowing,
            a = e.userId
          return O.a.createElement(P.a, { isFollowing: t, style: ie.followButton, userId: a })
        },
        ae = function (e) {
          var t = e.loggedInUserId,
            a = e.promotedContent,
            n = e.userId
          return t !== n
            ? O.a.createElement(M.a, { promotedContent: a, size: 'small', style: ie.followButton, userId: n })
            : null
        },
        ne = function (e) {
          return O.a.createElement(B, { promotedContent: e.promotedContent, user: e.user }, ae(e))
        },
        re = function (e) {
          return O.a.createElement(D.a, {
            renderActionMenu: function (t) {
              return O.a.createElement(L.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        oe = (function (e) {
          p()(a, e)
          var t = $(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.PROFILE_IMAGE_CLICK)
              }),
              v()(u()(e), '_handleCellClick', function () {
                var t = e.props,
                  a = t.history,
                  n = t.onClick,
                  r = t.screenName,
                  o = t.user,
                  i = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  n ? n({ user: o, state: i }) : a.push({ pathname: '/'.concat(r), state: i || void 0 })
              }),
              v()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.SCREEN_NAME_CLICK)
              }),
              v()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  a = t.saveAsRecentSearch,
                  n = t.shouldStoreTypeaheadItem,
                  r = t.userId
                a && n && n(U.a.ItemType.USER) && a({ user: { id: r, type: z.a.User } })
              }),
              v()(u()(e), '_scribeAction', function (t) {
                var a,
                  n = e.props,
                  r = n.promotedContent,
                  o = n.scribeAction,
                  i = n.scribeData,
                  c = n.scribeNamespace,
                  l = n.user,
                  s = n.userId,
                  u =
                    null == i || null === (a = i.items) || void 0 === a
                      ? void 0
                      : a.find(function (e) {
                          return e.item_type === U.a.ItemType.USER && e.id === s
                        }),
                  d = i.search_details,
                  p = { items: [J(J({}, u), W.a.getUserItem(l, r))], profile_id: s, search_details: d }
                o(J(J({}, c), t), p)
              }),
              e
            )
          }
          return (
            l()(a, [
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
                  var e = this.props,
                    t = e.avatarDecoration,
                    a = (e.bottomControl, e.cellClickable),
                    n =
                      (e.createLocalApiErrorHandler,
                      e.decoration,
                      e.followRequestReceived,
                      e.hideBlocked,
                      e.history,
                      e.isAutoblocking,
                      e.isBlockedBy,
                      e.isBlocking,
                      e.isDeviceFollowing,
                      e.isFollowing,
                      e.isInSidebar),
                    o =
                      (e.location,
                      e.log,
                      e.onClick,
                      e.promotedItemId,
                      e.saveAsRecentSearch,
                      e.scribeAction,
                      e.scribeData,
                      e.scribeNamespace,
                      e.shouldScribeImpression,
                      e.shouldScribeProfileClick,
                      e.shouldStoreTypeaheadItem,
                      e.socialContext),
                    i = e.user,
                    c = r()(e, [
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
                    ])
                  return this._shouldRender()
                    ? O.a.createElement(
                        Z.a,
                        w()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: i.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: a ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: o
                            ? {
                                contextType: o.contextType,
                                text: o.text,
                                link: o.landingUrl ? Object(F.b)(o.landingUrl) : void 0,
                              }
                            : void 0,
                          withDarkerInteractiveBackground: n,
                        }),
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
                    o = a.isAutoblocking,
                    i = a.isBlocking,
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
                        isAutoblocking: o,
                        isBlocking: i,
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
                  return t && a === Q.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler,
                    n = t.log,
                    r = t.promotedContent,
                    o = t.promotedItemId,
                    i = t.promotedItemType,
                    c = t.userId
                  r &&
                    n({
                      disclosureType: r.disclosure_type,
                      itemId: o || c,
                      itemType: i,
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
                    o = e.shouldScribeImpression,
                    i = e.userId
                  if (n && r === Q.c.USER) {
                    var c = n.disclosure_type,
                      l = n.impression_id
                    a({
                      disclosureType: c,
                      itemId: i,
                      itemType: Q.c.USER,
                      params: { event: Q.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else o && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            a
          )
        })(O.a.Component)
      v()(oe, 'contextType', q.a), v()(oe, 'defaultProps', ee.defaultProps)
      var ie = k.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ce = Object(V.a)(Object(X.a)(x(ee)))
      t.b = Object(G.c)({ element: 'user' })(ce)
    },
    '89Im': function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M11.47 14.53c.146.146.338.22.53.22s.384-.073.53-.22l5-5c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.72 3.72V2c0-.414-.337-.75-.75-.75s-.75.336-.75.75v10.19L7.53 8.47c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l5 5z',
            }),
            i.a.createElement('path', {
              d: 'M21.25 13.25c-.414 0-.75.336-.75.75v5.652c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V14c0-.414-.336-.75-.75-.75S2 13.586 2 14v5.652c0 1.264 1.028 2.292 2.292 2.292h15.416c1.264 0 2.292-1.028 2.292-2.292V14c0-.414-.336-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    '9StO': function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        o = (a('7x/C'), a('lTEL'), a('kYxP'), a('jwue'), a('+oxZ'), a('ERkP')),
        i = a.n(o),
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
        f = a('W6+M'),
        b = a('3XMw'),
        m = a.n(b),
        h = a('t62R'),
        y = a('h0NW'),
        v = a('feu+'),
        g = a('gSL+'),
        w = a('Qwev'),
        E = a('4zmP'),
        O = a('rHpw'),
        _ = a('j7Bv'),
        S = a('ms2t'),
        C = a('VwDm'),
        T = a('EQ/a'),
        j = a('U+bB'),
        A = a('MWbm'),
        I = m.a.f084f1cd,
        x = m.a.ja0ee36f,
        P = m.a.j761c248,
        L = m.a.h66bd30a,
        R = m.a.j48ab593,
        D = m.a.e17c80bc,
        k = m.a.d939cf16,
        B = m.a.a56f0c32,
        N = m.a.d17c59e4,
        M = m.a.i719f8e1,
        H = m.a.d0e190cd,
        F = m.a.e74a2cd5,
        z = m.a.g9677c6d,
        W = m.a.e4a6e006,
        U = m.a.f83d0446,
        K = function (e) {
          return i.a.createElement(h.b, { weight: 'bold' }, e)
        },
        V = function () {
          return i.a.createElement(j.a, { source: c, style: X.image })
        },
        X = O.a.create(function (e) {
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
        q = i.a.createElement(_.a, { Icon: S.a, color: 'neutral', size: 'large', style: X.aliasIcon }),
        G = {
          accessibilityLabel: I,
          containerStyle: X.infoItemContainer,
          items: [
            { label: K(R), decoration: i.a.createElement(S.a, { style: X.icon }), description: D },
            { label: K(k), decoration: i.a.createElement(C.a, { style: X.icon }), description: B },
            { label: K(N), decoration: i.a.createElement(T.a, { style: X.icon }), description: M },
          ],
        },
        Z = p(function (e) {
          var t = e.addToast,
            a = e.aliasSelfSelectOptions,
            n = e.createLocalApiErrorHandler,
            o = e.fetchAliasSelfSelectOptions,
            c = e.onAliasSelected,
            l = e.selectAlias,
            s = i.a.useState(!0),
            u = r()(s, 2),
            d = u[0],
            p = u[1],
            b = i.a.useState(''),
            m = r()(b, 2),
            O = m[0],
            _ = m[1],
            S = i.a.useState(!1),
            C = r()(S, 2),
            T = C[0],
            j = C[1]
          i.a.useEffect(
            function () {
              o()
                .then(function (e) {
                  e && e[0] ? _(e[0]) : j(!0)
                })
                .catch(n())
            },
            [n, o],
          )
          var I,
            R,
            D = i.a.createElement(
              h.b,
              { color: 'normal', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              L,
            ),
            k = i.a.createElement(A.a, { style: X.values }, i.a.createElement(y.a, G)),
            B = i.a.createElement(v.a, {
              actionLabel: x,
              footer: D,
              graphic: V,
              graphicDisplayMode: 'illustration',
              headline: P,
              isFullHeightOnMobile: !0,
              onAction: function () {
                p(!1)
              },
              subtext: k,
            }),
            N = i.a.useCallback(
              function (e, t) {
                _(t)
              },
              [_],
            ),
            M = i.a.createElement(
              A.a,
              null,
              i.a.createElement(h.b, { style: X.aliasSubtext }, F),
              a
                ? i.a.createElement(
                    A.a,
                    { style: X.aliasSelectContainer },
                    i.a.createElement(g.a, {
                      name: 'example',
                      onChange: N,
                      options:
                        ((I = a),
                        (R = []),
                        I.forEach(function (e) {
                          R.push({ containerStyle: X.optionContainer, label: Object(f.a)(e), value: e, decoration: q })
                        }),
                        R),
                      value: O,
                    }),
                  )
                : i.a.createElement(w.a, null),
              T ? i.a.createElement(E.a, { text: W, type: 'danger' }) : void 0,
            ),
            K = i.a.createElement(v.a, {
              actionLabel: z,
              footer: D,
              graphicDisplayMode: 'none',
              headline: H,
              isFullHeightOnMobile: !0,
              onAction: function () {
                O &&
                  l(O)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (c(!1), t({ text: U, withClearButton: !0 }))
                        : j(!0)
                    })
                    .catch(function (e) {
                      n({ defaultToast: { text: W, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: M,
            })
          return d ? B : K
        })
      t.a = Z
    },
    ACNv: function (e, t, a) {
      'use strict'
      a.r(t)
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('N+ot'),
        p = a.n(d),
        f = a('AuHH'),
        b = a.n(f),
        m = a('KEM+'),
        h = a.n(m),
        y = (a('2G9S'), a('KOtZ'), a('hBvt'), a('jQ3i'), a('x4t0'), a('ERkP')),
        v = a.n(y),
        g = a('3XMw'),
        w = a.n(g),
        E = a('oQhu'),
        O = a('mjJ+'),
        _ = a('eb3s')
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
          var a,
            n = b()(e)
          if (t) {
            var r = b()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return p()(this, a)
        }
      }
      var C = w.a.cfd2f35d,
        T = (function (e) {
          u()(a, e)
          var t = S(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
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
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : v.a.createElement(O.a, {
                        cancelButtonLabel: C,
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
                    o = t.text,
                    i = t.withCancelButton
                  return v.a.createElement(_.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: a,
                    headline: n,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: o,
                    withCancelButton: i,
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
                  return j(t, a, n, this._handleConfirm)
                },
              },
            ]),
            a
          )
        })(v.a.Component),
        j = Object(E.a)(function (e, t, a, n) {
          return e.reduce(function (e, r, o) {
            var i = r.Icon,
              c = r.behavioralEventContext,
              l = r.confirmation,
              s = r.disabled,
              u = r.excludeFromActionMenu,
              d = r.isEmphasized,
              p = r.link,
              f = r.onClick,
              b = r.subText,
              m = r.testID,
              h = r.text
            r.withCancelButton
            if (!u) {
              var y = f
                ? function () {
                    l
                      ? l.render
                        ? n({ callback: f, render: l.render })
                        : n({
                            callback: f,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (f(), a())
                  }
                : a
              e.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: i,
                isEmphasized: d,
                testID: m,
                subText: b,
                text: h,
                onClick: y,
                link: p,
                withBottomBorder: t && t.includes(o),
              })
            }
            return e
          }, [])
        })
      t.default = T
    },
    'B/qP': function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M11.434 16.22l-3.38 5.3c-.076.116-.21.19-.35.19h-.05c-.16-.018-.292-.127-.34-.277l-.937-2.564-2.72.25c-.168.024-.317-.06-.4-.194-.083-.134-.082-.31.002-.442l3.018-4.725c.1.108.2.208.307.292.1.117.207.21.315.294 1.03.898 2.276 1.505 3.617 1.762.15.026.3.043.45.07.033 0 .058.008.092.008.115.017.24.026.374.035zm9.306 2.8c-.084.134-.235.216-.393.19l-2.725-.28-.956 2.553c-.06.15-.193.257-.352.273h-.042c-.142 0-.275-.077-.35-.194l-3.356-5.335c.133-.008.26-.015.392-.03.025 0 .05-.01.075-.01.15-.023.3-.047.442-.072 1.344-.26 2.597-.86 3.628-1.74.11-.09.21-.19.31-.28.11-.1.21-.2.302-.308l3.026 4.792c.085.133.084.308 0 .44zM18.187 8.446c-.007 1.376-.473 2.65-1.245 3.67-.974 1.304-2.47 2.213-4.182 2.42-.26.032-.517.047-.784.046-.242 0-.483-.02-.725-.054-1.715-.2-3.203-1.11-4.188-2.415-.77-1.046-1.238-2.333-1.23-3.733.02-3.41 2.8-6.154 6.21-6.136 3.41.018 6.164 2.793 6.145 6.202z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    'EQ/a': function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M9.944 10.68H2.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h7.194c.414 0 .75.337.75.75s-.336.75-.75.75zm4.112-4.11H2.75c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h11.306c.414 0 .75.335.75.75s-.336.75-.75.75z',
            }),
            i.a.createElement('path', {
              d: 'M8.917 21.986c-.198 0-.39-.078-.53-.22L2.61 15.99c-.293-.294-.293-.77 0-1.062s.768-.293 1.06 0l5.15 5.147L20.64 3.33c.237-.34.706-.42 1.044-.18.338.238.42.706.18 1.045L9.53 21.67c-.128.18-.33.295-.55.313-.02.002-.042.003-.063.003z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    FS1z: function (e, t, a) {
      'use strict'
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('N+ot'),
        p = a.n(d),
        f = a('AuHH'),
        b = a.n(f),
        m = a('KEM+'),
        h = a.n(m),
        y = (a('2G9S'), a('ERkP')),
        v = a.n(y),
        g = a('rxPX'),
        w = a('0KEI'),
        E = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        O = function (e, t) {
          return t.module.selectItems(e)
        },
        _ = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: E, items: O }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        S = a('v//M'),
        C = a('sIe2'),
        T = a('3XMw'),
        j = a.n(T),
        A = a('TEoO')
      function I(e) {
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
          var a,
            n = b()(e)
          if (t) {
            var r = b()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return p()(this, a)
        }
      }
      var x = j.a.i9028824,
        P = 'sliceTimeline',
        L = function (e) {
          return e
        },
        R = { viewType: 'timeline' },
        D = (function (e) {
          u()(a, e)
          var t = I(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  a = t.footer,
                  n = t.items,
                  r = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  c = t.renderer,
                  l = t.withoutHeadroom
                return !n || o < 1
                  ? null
                  : 1 === o
                  ? v.a.createElement(A.a, {
                      cacheKey: P,
                      footer: a,
                      identityFunction: L,
                      items: n,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: l,
                    })
                  : v.a.createElement(C.a, {
                      ListEmptyComponent: r,
                      data: n,
                      keyExtractor: L,
                      numColumns: o,
                      renderItem: c,
                    })
              }),
              h()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(a())
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  a = t.alwaysFetch,
                  n = t.createLocalApiErrorHandler,
                  r = t.fetch,
                  o = t.fetchIfNeeded
                ;(a ? r : o)().catch(n())
              }),
              e
            )
          }
          return (
            i()(a, [
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
                    a = e.module,
                    n = e.retryMessage
                  return a
                    ? v.a.createElement(S.a, {
                        accessibilityLabel: x,
                        behavioralEventContext: R,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: n,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(v.a.Component)
      h()(D, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var k = _(D)
      t.a = k
    },
    KqB4: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var a = [], n = (0, r.default)(e, t), o = 0; o < n.length; o++) a.push(n[o].url)
          return a
        })
      var r = n(a('vwfs'))
      e.exports = t.default
    },
    Ku87: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchAboutScreen', function () {
          return T
        })
      a('z84I'), a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('v6aA'),
        i = a.p + 'birdwatch_logo.0a5315e5.png',
        c = a('vZpt'),
        l = a('L5MV'),
        s = a('3XMw'),
        u = a.n(s),
        d = a('yoO3'),
        p = a('7JQg'),
        f = a('VS6U'),
        b = a('t62R'),
        m = a('/yvb'),
        h = a('rHpw'),
        y = a('U+bB'),
        v = a('MWbm'),
        g = u.a.b721eb37,
        w = u.a.a225549d,
        E = [u.a.bc203ca1, u.a.iea72310, u.a.c337f3d1],
        O = u.a.ff3e0be2,
        _ = u.a.i859a9d3,
        S = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        C = { page: 'birdwatch', section: 'about' },
        T = function (e) {
          var t = e.history,
            a = r.a.useContext(o.a).featureSwitches,
            n = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                v.a,
                { style: j.header },
                r.a.createElement(
                  v.a,
                  { style: j.imageContainer },
                  r.a.createElement(y.a, { source: i, style: j.image }),
                ),
              ),
              r.a.createElement(
                v.a,
                { style: j.content },
                r.a.createElement(b.b, { size: 'title4', style: j.textSection, weight: 'heavy' }, w),
                E.map(function (e, t) {
                  return r.a.createElement(
                    b.b,
                    { color: 'gray700', key: 'aboutText'.concat(t), style: j.textSection },
                    e,
                  )
                }),
              ),
              r.a.createElement(v.a, { style: j.learnMore }, r.a.createElement(b.b, { link: S }, _)),
              !a.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                r.a.createElement(
                  v.a,
                  { style: j.buttonContainer },
                  r.a.createElement(
                    m.a,
                    { accessibilityLabel: O, link: '/i/flow/join-birdwatch', style: j.button, type: 'brandFilled' },
                    O,
                  ),
                ),
            )
          return r.a.createElement(
            p.b,
            { namespace: C },
            r.a.createElement(
              d.a,
              null,
              r.a.createElement(f.a, {
                TabBar: l.a,
                history: t,
                logoButton: r.a.createElement(r.a.Fragment, null),
                primaryContent: n,
                sidebarContent: r.a.createElement(c.a, null),
                title: g,
                withTweetButton: !1,
              }),
            ),
          )
        },
        j = h.a.create(function (e) {
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
      t.default = T
    },
    L5MV: function (e, t, a) {
      'use strict'
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('N+ot'),
        p = a.n(d),
        f = a('AuHH'),
        b = a.n(f),
        m = a('KEM+'),
        h = a.n(m),
        y = (a('2G9S'), a('ERkP')),
        v = a.n(y),
        g = a('MvLc'),
        w = a('rxPX'),
        E = a('0KEI'),
        O = Object(w.a)()
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
        _ = a('3XMw'),
        S = a.n(_),
        C = a('gASw'),
        T = a('v6aA'),
        j = a('C6f5'),
        A = a('2qZs'),
        I = a('PU7B'),
        x = a('YI7k'),
        P = a('boUI'),
        L = a('6ZHn'),
        R = a('89Im'),
        D = (a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('Lsrn')),
        k = a('k/Ka')
      function B(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(a), !0).forEach(function (t) {
                h()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : B(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var M = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(k.a)(
          'svg',
          N(
            N({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [D.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.a.createElement(
            'g',
            null,
            v.a.createElement('path', {
              d: 'M11.188 14.813c.217.217.506.337.812.337.307 0 .596-.12.813-.337l5-5c.217-.218.337-.507.337-.815 0-.307-.12-.595-.338-.812-.217-.216-.506-.336-.814-.336h-.003c-.307 0-.594.12-.81.337l-3.035 3.037V2c0-.634-.517-1.15-1.15-1.15-.634 0-1.15.516-1.15 1.15v9.225L7.813 8.188C7.596 7.97 7.307 7.85 7 7.85c-.308 0-.596.12-.813.338-.218.22-.337.51-.337.817 0 .306.12.593.337.808l5 5z',
            }),
            v.a.createElement('path', {
              d: 'M21.25 12.85c-.634 0-1.15.517-1.15 1.15v5.652c0 .216-.176.392-.392.392H4.292c-.216 0-.392-.176-.392-.392V14c0-.634-.516-1.15-1.15-1.15S1.6 13.366 1.6 14v5.652c0 1.484 1.208 2.692 2.692 2.692h15.416c1.484 0 2.692-1.208 2.692-2.692V14c0-.634-.516-1.15-1.15-1.15z',
            }),
          ),
        )
      }
      M.metadata = { width: 24, height: 24 }
      var H = M,
        F = a('6s7X'),
        z = a('Nh1N')
      function W(e) {
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
          var a,
            n = b()(e)
          if (t) {
            var r = b()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return p()(this, a)
        }
      }
      var U = S.a.d5b2da0a,
        K = S.a.b5711f09,
        V = S.a.ha8209bb,
        X = S.a.ff692d63,
        q = S.a.cb1adfa0,
        G = S.a.b721eb37,
        Z = function (e, t) {
          return (
            '/i/birdwatch' === t.pathname || '/i/birdwatch/all' === t.pathname || '/i/birdwatch/helpful' === t.pathname
          )
        },
        Q = function () {
          return !1
        },
        Y = (function (e) {
          u()(a, e)
          var t = W(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleTabClickFactory', function (t) {
                return function (a) {
                  e.props.analytics.scribe({ element: t, action: 'navigate' })
                }
              }),
              e
            )
          }
          return (
            i()(a, [
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
                    o = e.withLabel,
                    i = void 0 !== o && o,
                    c = this.context.featureSwitches
                  return v.a.createElement(
                    j.b,
                    { layout: a, primaryLabel: U, wideMode: r },
                    v.a.createElement(C.a, {
                      accessibilityLabel: K,
                      isActive: Q,
                      label: K,
                      layout: a,
                      onClick: this._handleTabClickFactory('home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(A.a, A.a, a),
                      withLabel: i,
                    }),
                    v.a.createElement(C.a, {
                      accessibilityLabel: V,
                      isActive: Z,
                      label: V,
                      layout: a,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(I.a, x.a, a),
                      withLabel: i,
                    }),
                    c.isTrue('responsive_web_birdwatch_note_writing_enabled')
                      ? v.a.createElement(C.a, {
                          accessibilityLabel: X,
                          label: X,
                          layout: a,
                          onClick: this._handleTabClickFactory('user_notes'),
                          path: '/i/birdwatch/u/me',
                          renderIcon: Object(j.c)(P.a, L.a, a),
                          withLabel: i,
                        })
                      : null,
                    v.a.createElement(C.a, {
                      accessibilityLabel: q,
                      label: q,
                      layout: a,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: '/i/birdwatch/download-data',
                      renderIcon: Object(j.c)(R.a, H, a),
                      withLabel: i,
                    }),
                    v.a.createElement(C.a, {
                      accessibilityLabel: G,
                      label: G,
                      layout: a,
                      onClick: this._handleTabClickFactory('about'),
                      path: '/i/birdwatch/about',
                      renderIcon: Object(j.c)(F.a, z.a, a),
                      withLabel: i,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(v.a.Component)
      h()(Y, 'contextType', T.a)
      var J = O(Y)
      t.a = J
    },
    MvLc: function (e, t, a) {
      'use strict'
      a.d(t, 'r', function () {
        return R
      }),
        a.d(t, 'x', function () {
          return B
        }),
        a.d(t, 'o', function () {
          return N
        }),
        a.d(t, 'u', function () {
          return M
        }),
        a.d(t, 's', function () {
          return H
        }),
        a.d(t, 'y', function () {
          return z
        }),
        a.d(t, 'v', function () {
          return W
        }),
        a.d(t, 'n', function () {
          return U
        }),
        a.d(t, 'p', function () {
          return K
        }),
        a.d(t, 'w', function () {
          return V
        }),
        a.d(t, 't', function () {
          return X
        }),
        a.d(t, 'q', function () {
          return q
        }),
        a.d(t, 'k', function () {
          return G
        }),
        a.d(t, 'g', function () {
          return Z
        }),
        a.d(t, 'h', function () {
          return Q
        }),
        a.d(t, 'l', function () {
          return Y
        }),
        a.d(t, 'j', function () {
          return J
        }),
        a.d(t, 'f', function () {
          return $
        }),
        a.d(t, 'm', function () {
          return ee
        }),
        a.d(t, 'd', function () {
          return te
        }),
        a.d(t, 'b', function () {
          return ae
        }),
        a.d(t, 'z', function () {
          return ne
        }),
        a.d(t, 'c', function () {
          return re
        }),
        a.d(t, 'e', function () {
          return oe
        }),
        a.d(t, 'a', function () {
          return ie
        }),
        a.d(t, 'i', function () {
          return ce
        })
      a('+KXO'), a('1t7P'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('m3Bd'),
        r = a.n(n),
        o = a('KEM+'),
        i = a.n(o),
        c = (a('yH/f'), a('KOtZ'), a('z84I'), a('LW0h'), a('JtPf'), a('7x/C'), a('/kEJ')),
        l = a('kGix'),
        s = a('Ssj5'),
        u = a('oEOe'),
        d = a('3A2y'),
        p = a('YeIG')
      function f(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(a), !0).forEach(function (t) {
                i()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : f(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var m = 'birdwatchNotes',
        h = 'rweb/'.concat(m),
        y = Object(u.a)(h, 'DELETE_NOTE'),
        v = Object(u.a)(h, 'CREATE_RATING'),
        g = Object(u.a)(h, 'DELETE_RATING'),
        w = Object(u.a)(h, 'SELECT_ALIAS'),
        E = Object(u.a)(h, 'CREATE_APPEAL'),
        O = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_DATA_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_DATA_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_DATA_FAILURE',
        }),
        _ = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE',
        }),
        C = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/CREATE_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/CREATE_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/CREATE_NOTE_FAILURE',
        }),
        T = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE',
        }),
        j = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE',
        }),
        A = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE',
        }),
        I = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_NOTE_FAILURE',
        }),
        x = 'rweb/birdwatchNotes/SAVE_FORM_DRAFT',
        P = { drafts: {}, notes: {}, tweetNotes: {}, contributor: {}, publicData: {} }
      s.a.register(
        i()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case C.SUCCESS:
              var a,
                n = null === (a = t.payload) || void 0 === a ? void 0 : a.result
              if (n) {
                var o,
                  c,
                  s =
                    null === (o = t.payload) || void 0 === o || null === (c = o.entities) || void 0 === c
                      ? void 0
                      : c.birdwatchNotes[n],
                  u = s.tweet.rest_id
                return b(
                  b({}, e),
                  {},
                  {
                    notes: b(b({}, e.notes), {}, i()({}, n, s)),
                    tweetNotes: b(
                      b({}, e.tweetNotes),
                      {},
                      i()(
                        {},
                        u,
                        b(b({}, e.tweetNotes && e.tweetNotes[u]), {}, { ownNoteId: n, fetchStatus: l.a.LOADED }),
                      ),
                    ),
                  },
                )
              }
              return e
            case y.SUCCESS:
              var f,
                m = null === (f = t.meta) || void 0 === f ? void 0 : f.note_id
              return m ? b(b({}, e), {}, { notes: Object(d.a)(e.notes, m) }) : e
            case v.SUCCESS:
              var h,
                E = null === (h = t.meta) || void 0 === h ? void 0 : h.note_id,
                L = t.payload
              return E
                ? b(b({}, e), {}, { notes: b(b({}, e.notes), {}, i()({}, E, b(b({}, e.notes[E]), {}, { rating: L }))) })
                : e
            case g.SUCCESS:
              var R,
                D = null === (R = t.meta) || void 0 === R ? void 0 : R.note_id
              if (D) {
                var k = e.notes[D],
                  B = (k.rating, r()(k, ['rating']))
                return b(b({}, e), {}, { notes: b(b({}, e.notes), {}, i()({}, D, b({}, B))) })
              }
              return e
            case T.REQUEST:
              var N,
                M = null === (N = t.meta) || void 0 === N ? void 0 : N.tweet_id
              return M
                ? b(
                    b({}, e),
                    {},
                    {
                      tweetNotes: b(
                        b({}, e.tweetNotes),
                        {},
                        i()({}, M, b(b({}, e.tweetNotes && e.tweetNotes[M]), {}, { fetchStatus: l.a.LOADING })),
                      ),
                    },
                  )
                : e
            case T.FAILURE:
              var H,
                F = null === (H = t.meta) || void 0 === H ? void 0 : H.tweet_id
              return F
                ? b(
                    b({}, e),
                    {},
                    {
                      tweetNotes: b(
                        b({}, e.tweetNotes),
                        {},
                        i()({}, F, b(b({}, e.tweetNotes[F]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case T.SUCCESS:
              var z,
                W,
                U = null === (z = t.payload) || void 0 === z ? void 0 : z.result,
                K = null === (W = t.meta) || void 0 === W ? void 0 : W.tweet_id
              if (U) {
                var V,
                  X,
                  q =
                    null === (V = t.payload) || void 0 === V || null === (X = V.entities) || void 0 === X
                      ? void 0
                      : X.birdwatchNotes[U],
                  G = (null == q ? void 0 : q.ids) || [],
                  Z = G.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  Q = G.map(function (e) {
                    return e.rest_id
                  }),
                  Y = {}
                return (
                  (Y.ids = Q),
                  (Y.fetchStatus = l.a.LOADED),
                  null != q && q.ownNoteId && (Y.ownNoteId = null == q ? void 0 : q.ownNoteId),
                  t.meta
                    ? b(
                        b({}, e),
                        {},
                        { notes: b(b({}, e.notes), Z), tweetNotes: b(b({}, e.tweetNotes), {}, i()({}, K, Y)) },
                      )
                    : e
                )
              }
              return K
                ? b(b({}, e), {}, { tweetNotes: b(b({}, e.tweetNotes), {}, i()({}, K, { fetchStatus: l.a.LOADED })) })
                : e
            case j.REQUEST:
              var J,
                $ = null === (J = t.meta) || void 0 === J ? void 0 : J.alias
              return $
                ? b(
                    b({}, e),
                    {},
                    {
                      contributor: b(
                        b({}, e.contributor),
                        {},
                        i()({}, $, b(b({}, e.contributor[$]), {}, { fetchStatus: l.a.LOADING })),
                      ),
                    },
                  )
                : e
            case j.FAILURE:
              var ee,
                te = null === (ee = t.meta) || void 0 === ee ? void 0 : ee.alias
              return te
                ? b(
                    b({}, e),
                    {},
                    {
                      contributor: b(
                        b({}, e.contributor),
                        {},
                        i()({}, te, b(b({}, e.contributor[te]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case j.SUCCESS:
              var ae,
                ne,
                re = null === (ae = t.meta) || void 0 === ae ? void 0 : ae.alias,
                oe = null === (ne = t.payload) || void 0 === ne ? void 0 : ne.result
              if (oe && t.meta) {
                var ie,
                  ce,
                  le =
                    null === (ie = t.payload) || void 0 === ie || null === (ce = ie.entities) || void 0 === ce
                      ? void 0
                      : ce.birdwatchNotes[oe],
                  se = (null == le ? void 0 : le.notes) || [],
                  ue = se.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  de = se.map(function (e) {
                    return e.rest_id
                  }),
                  pe = {
                    helpful: null == le ? void 0 : le.ratings_received_helpful_count,
                    notHelpful: null == le ? void 0 : le.ratings_received_not_helpful_count,
                    somewhatHelpful: null == le ? void 0 : le.ratings_received_somewhat_helpful_count,
                  },
                  fe = (null == le ? void 0 : le.badges) || []
                return b(
                  b({}, e),
                  {},
                  {
                    notes: b(b({}, e.notes), ue),
                    contributor: b(
                      b({}, e.contributor),
                      {},
                      i()({}, oe, { badges: fe, notes: de, ratings: pe, fetchStatus: l.a.LOADED }),
                    ),
                  },
                )
              }
              return re
                ? b(
                    b({}, e),
                    {},
                    {
                      contributor: b(
                        b({}, e.contributor),
                        {},
                        i()({}, re, b(b({}, e.contributor[re]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case _.SUCCESS:
              var be = t.payload
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { ownAlias: be }) })
            case A.SUCCESS:
              var me = t.payload
              return b(
                b({}, e),
                {},
                {
                  contributor: b(
                    b({}, e.contributor),
                    {},
                    { showAliasSelfSelect: (null == me ? void 0 : me.can_select) && !(null != me && me.has_selected) },
                  ),
                },
              )
            case S.SUCCESS:
              var he = t.payload
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { aliasSelfSelectOptions: he }) })
            case I.SUCCESS:
              var ye,
                ve = t.payload,
                ge = null == ve ? void 0 : ve.result
              return ge
                ? b(
                    b({}, e),
                    {},
                    {
                      notes: b(
                        b({}, e.notes),
                        {},
                        i()(
                          {},
                          ge,
                          b(
                            b(
                              {},
                              null == ve || null === (ye = ve.entities) || void 0 === ye
                                ? void 0
                                : ye.birdwatchNotes[ge],
                            ),
                            {},
                            { fetchStatus: l.a.LOADED },
                          ),
                        ),
                      ),
                    },
                  )
                : e
            case I.REQUEST:
              var we,
                Ee = null === (we = t.meta) || void 0 === we ? void 0 : we.note_id
              return b(
                b({}, e),
                {},
                {
                  notes: b(
                    b({}, e.notes),
                    {},
                    i()({}, Ee, b(b({}, e.notes && e.notes[Ee]), {}, { fetchStatus: l.a.LOADING })),
                  ),
                },
              )
            case I.FAILURE:
              var Oe,
                _e = null === (Oe = t.meta) || void 0 === Oe ? void 0 : Oe.note_id
              return b(
                b({}, e),
                {},
                { notes: b(b({}, e.notes), {}, i()({}, _e, b(b({}, e.notes[_e]), {}, { fetchStatus: l.a.FAILED }))) },
              )
            case O.SUCCESS:
              var Se = t.payload
              return Se ? b(b({}, e), {}, { publicData: Se }) : e
            case w.SUCCESS:
              var Ce,
                Te = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.alias
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { ownAlias: Te }) })
            case x:
              var je = t.payload
              if (Object(p.a)(je)) return e
              var Ae = je.updates,
                Ie = je.tweetId
              return b(b({}, e), {}, { drafts: b(b({}, e.drafts), {}, i()({}, Ie, Ae)) })
            default:
              return e
          }
        }),
      )
      var L = [],
        R = function (e, t) {
          return e.birdwatchNotes.notes[t]
        },
        D = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ids
        },
        k = function (e, t) {
          var a
          return null === (a = e.birdwatchNotes.tweetNotes[t]) || void 0 === a ? void 0 : a.ownNoteId
        },
        B = function (e, t) {
          if (!t) return null
          var a = k(e, t)
          return a ? R(e, a) : null
        },
        N = function (e, t) {
          var a, n
          if (t)
            return null === (a = e.birdwatchNotes) || void 0 === a || null === (n = a.contributor[t]) || void 0 === n
              ? void 0
              : n.badges
        },
        M = function (e) {
          return e.birdwatchNotes.publicData
        },
        H = function (e, t) {
          var a = t ? D(e, t) : void 0
          if (a) {
            var n = k(e, t)
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
          return L
        },
        F = function (e, t) {
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
        U = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.aliasSelfSelectOptions : void 0
        },
        K = function (e, t) {
          if (t) {
            var a = e.birdwatchNotes.contributor[t]
            return a ? a.ratings : void 0
          }
        },
        V = function (e, t) {
          var a = e.birdwatchNotes.tweetNotes[t]
          return a ? a.fetchStatus : l.a.NONE
        },
        X = function (e, t) {
          var a = e.birdwatchNotes.notes[t]
          return a ? a.fetchStatus : l.a.NONE
        },
        q = function (e, t) {
          if (t) {
            var a = e.birdwatchNotes.drafts
            return a ? a[t] : void 0
          }
        },
        G = function (e) {
          return function (t, a, n) {
            n.api
            var r = !!D(a(), e),
              o = V(a(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, a, n) {
                      var r = n.api
                      return Object(u.b)(t, { request: r.Birdwatch.fetchNotes, params: { tweet_id: e } })(
                        { actionTypes: T, context: 'FETCH_TWEET_NOTES', meta: { tweet_id: e } },
                        function (e) {
                          if (e) {
                            var t = e.entities
                            return t ? [Object(c.c)(t)] : void 0
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
            var r = !!e && !!F(a(), e),
              o =
                (function (e, t) {
                  var a = e.birdwatchNotes.contributor[t]
                  return a ? a.fetchStatus : l.a.NONE
                })(a(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, a, n) {
                      var r = n.api
                      return e
                        ? Object(u.b)(t, { request: r.Birdwatch.fetchBirdwatchProfile, params: { alias: e } })(
                            { actionTypes: j, context: 'FETCH_BIRDWATCH_PROFILE', meta: { alias: e } },
                            function (e) {
                              if (e) {
                                var t = e.entities
                                return t && [Object(c.c)(t)]
                              }
                            },
                          )
                        : Promise.resolve()
                    }
                  })(e),
                )
          }
        },
        Q = function (e) {
          return function (t, a, n) {
            n.api
            var r = !!R(a(), e),
              o = X(a(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, a, n) {
                      var r = n.api
                      return Object(u.b)(t, { request: r.Birdwatch.fetchOneNote, params: { note_id: e } })({
                        actionTypes: I,
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
                  return Object(u.b)(e, { request: n.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: _,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        J = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(u.b)(e, { request: n.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: A,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        $ = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(u.b)(e, { request: n.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: S,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        ee = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(u.b)(t, { request: r.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: w,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        te = function (e) {
          return { meta: { note_id: e }, type: y.SUCCESS }
        },
        ae = function (e, t) {
          return function (a, n, r) {
            var o = r.api
            return Object(u.b)(a, { request: o.Birdwatch.createNote, params: { tweet_id: e, data: t } })({
              actionTypes: C,
              context: 'CREATE_NOTE',
            })
          }
        },
        ne = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: x, payload: e }
              })(e),
            )
          }
        },
        re = function (e, t) {
          return function (a, n, r) {
            var o = r.api
            return Object(u.b)(a, { request: o.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: v,
              context: 'CREATE_RATING',
              meta: { note_id: e },
            })
          }
        },
        oe = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(u.b)(t, { request: r.Birdwatch.deleteRating, params: { note_id: e } })({
              actionTypes: g,
              context: 'DELETE_RATING',
              meta: { note_id: e },
            })
          }
        },
        ie = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(u.b)(t, { request: r.Birdwatch.createAppeal, params: { note_id: e } })({
              actionTypes: E,
              context: 'CREATE_APPEAL',
              meta: { note_id: e },
            })
          }
        },
        ce = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(u.b)(e, { request: n.Birdwatch.fetchPublicData, params: {} })({
              actionTypes: O,
              context: 'FETCH_DATA',
              meta: {},
            })
          }
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
        o = a('ERkP'),
        i = a.n(o),
        c = a('ZD0R'),
        l = (a('WNMA'), a('KqXw'), a('MvLc')),
        s = a('rxPX'),
        u = a('0KEI'),
        d = function (e, t) {
          return t.match.params.noteId
        },
        p = function (e, t) {
          return l.r(e, d(0, t))
        },
        f = function (e, t) {
          return l.t(e, d(0, t))
        },
        b = Object(s.a)()
          .propsFromState(function () {
            return { noteData: p, noteId: d, fetchStatus: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: l.h,
            }
          }),
        m = a('kGix'),
        h = a('jHSc'),
        y = a('3XMw'),
        v = a.n(y),
        g = a('aITJ'),
        w = a('MWbm'),
        E = a('FIs5'),
        O = a('htQn'),
        _ = a('rHpw'),
        S = a('Qwev'),
        C = v.a.c87f3cf8,
        T = v.a.i859a9d3,
        j = v.a.efd14e79,
        A = v.a.a5b19492,
        I = i.a.createElement(E.a, { buttonLink: '/i/birdwatch/about', buttonText: T, header: A }),
        x = function () {
          return null
        },
        P = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchOneNoteIfNeeded,
            n = e.fetchStatus,
            o = e.history,
            l = e.noteData,
            s = e.noteId,
            u = i.a.useState(l),
            d = r()(u, 2),
            p = d[0],
            f = d[1]
          i.a.useEffect(
            function () {
              s && a(s).catch(t())
            },
            [t, a, s],
          ),
            i.a.useEffect(
              function () {
                f(l)
              },
              [l],
            )
          var b = i.a.createElement(
            O.a,
            null,
            p && p.data_v1
              ? i.a.createElement(
                  w.a,
                  { style: L.contentWrapper },
                  i.a.createElement(c.a, {
                    handleDelete: function (e) {
                      f(null)
                    },
                    note: p,
                    showPivot: !0,
                    showTweet: !0,
                  }),
                )
              : n === m.a.LOADING
              ? R
              : I,
          )
          return i.a.createElement(
            h.b,
            { history: o, renderHeader: g.b.isTwitterApp() ? x : void 0, title: C },
            i.a.createElement(w.a, { style: L.contentWrapper }, b),
          )
        },
        L = _.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        R = i.a.createElement(S.a, { accessibilityLabel: j, size: 'large', style: L.spinner }),
        D = b(P)
      t.default = D
    },
    QDet: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M12 3.413c.45 0 .814-.365.814-.815V1.315a.814.814 0 10-1.628 0v1.284c0 .449.364.814.814.814zm0 17.174a.814.814 0 00-.814.815v1.284a.814.814 0 101.628 0v-1.284a.813.813 0 00-.814-.815zm10.685-9.402h-1.284a.814.814 0 100 1.628h1.284a.814.814 0 100-1.628zm-20.087.001H1.315a.814.814 0 100 1.628h1.284a.814.814 0 10-.001-1.628zm16.626-5.259l.908-.908a.814.814 0 10-1.152-1.152l-.908.907a.814.814 0 101.152 1.153zM4.777 18.072l-.908.908a.814.814 0 101.152 1.152l.908-.908a.814.814 0 10-1.152-1.152zm14.447 0a.814.814 0 10-1.152 1.152l.908.908a.814.814 0 101.152-1.152l-.908-.908zM4.776 5.927a.814.814 0 101.152-1.152l-.908-.907A.814.814 0 103.868 5.02l.908.907zm10.264.372c-1.378 0-2.408.841-3.039 1.621-.631-.78-1.661-1.621-3.039-1.621-2.005 0-3.763 1.866-3.763 3.992 0 4.281 5.042 8.802 6.815 8.834 1.747-.032 6.788-4.553 6.788-8.834 0-2.126-1.759-3.992-3.762-3.992zm-3.025 11.389c-.934-.05-5.378-3.835-5.378-7.397 0-1.337 1.108-2.555 2.326-2.555 1.496 0 2.367 1.781 2.374 1.798.11.269.372.441.663.443h.003a.723.723 0 00.664-.442c.007-.018.879-1.799 2.374-1.799 1.217 0 2.325 1.218 2.325 2.555-.002 3.562-4.445 7.348-5.351 7.397z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    TEoO: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('5UID'),
        l = a('3GUV'),
        s = a('iBK2'),
        u = i.a.createElement(l.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            a = r()(e, ['accessibilityTitle']),
            n = i.a.createElement(s.b, a)
          return t ? i.a.createElement(c.a, { title: t }, n) : n
        }
      ;(d.defaultProps = { footer: u }), (t.a = d)
    },
    'W6+M': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('7xRU'), a('z84I'), a('Ysgh'), a('KqXw')
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
          return xe
        })
      a('+KXO'), a('1t7P'), a('daRM'), a('FtHn')
      var n = a('RhWx'),
        r = a.n(n),
        o = a('KEM+'),
        i = a.n(o),
        c = a('ddV6'),
        l = a.n(c),
        s =
          (a('2G9S'),
          a('tVqn'),
          a('jwue'),
          a('jQ3i'),
          a('x4t0'),
          a('LW0h'),
          a('z84I'),
          a('7x/C'),
          a('DZ+c'),
          a('MvUL'),
          a('KqXw'),
          a('+oxZ'),
          a('uFXj'),
          a('ERkP')),
        u = a.n(s),
        d = a('v6aA'),
        p = a('9StO'),
        f = (a('WNMA'), a('MvLc')),
        b = a('1YZw'),
        m = a('XOJV'),
        h = a('rxPX'),
        y = a('0KEI'),
        v = function (e, t) {
          return t.match.params.tweetId
        },
        g = function (e, t) {
          return f.x(e, v(0, t))
        },
        w = function (e, t) {
          return f.q(e, v(0, t))
        },
        E = function (e, t) {
          return f.v(e)
        },
        O = Object(h.a)()
          .propsFromState(function () {
            return { draftData: w, ownNoteData: g, tweetId: v, showAliasSelfSelect: E, userAlias: f.y }
          })
          .propsFromActions(function () {
            return {
              addToast: b.b,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: f.b,
              fetchNotes: f.k,
              fetchShowAliasSelfSelect: f.j,
              fetchTweet: m.a.fetchOneIfNeeded,
              fetchUserAlias: f.l,
              saveFormData: f.z,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form' }),
        _ = a('W6+M'),
        S = a('jHSc'),
        C = a('3XMw'),
        T = a.n(C),
        j = a('5FtR'),
        A = a('SrIh'),
        I = a('Rp9C'),
        x = a('xZXe'),
        P = a('aITJ'),
        L = a('MWbm'),
        R = a('t62R'),
        D = a('XiMS'),
        k = a('fyvP'),
        B = a('p+r5'),
        N = a('4zmP'),
        M = a('/yvb'),
        H = a('feu+'),
        F = a('rHpw'),
        z = a('KqB4'),
        W = a.n(z),
        U = a('S1qy'),
        K = a.n(U),
        V = a('Oib4'),
        X = a('DlMI'),
        q = a('ms2t'),
        G = a('I/9y'),
        Z = a('EHV7'),
        Q = 'MisinformedOrPotentiallyMisleading',
        Y = 'NotMisleading',
        J = {
          classification: {
            label: T.a.c8a7eee9,
            options: [
              { label: T.a.d4e419f5, value: Q },
              { label: T.a.ha9655c2, value: Y },
            ],
          },
          misleading_tags: {
            label: T.a.a0cf39fc,
            options: [
              { label: T.a.c33bc7d3, value: 'FactualError' },
              { label: T.a.j6e12b24, value: 'ManipulatedMedia' },
              { label: T.a.aadb676b, value: 'OutdatedInformation' },
              { label: T.a.g21a0ef3, value: 'MissingImportantContext' },
              { label: T.a.daf354dd, value: 'DisputedClaimAsFact' },
              { label: T.a.d1d2ef84, value: 'MisinterpretedSatire' },
              { label: T.a.c365dcc5, value: 'Other' },
            ],
          },
          believable: {
            label: T.a.ce5fa5d4,
            options: [
              { label: T.a.d617b1b9, value: 'BelievableByFew' },
              { label: T.a.c5be638b, value: 'BelievableByMany' },
            ],
          },
          harmful: {
            label: T.a.cd06cf1a,
            options: [
              { label: T.a.c23c72e6, value: 'LittleHarm' },
              { label: T.a.ee822d70, value: 'ConsiderableHarm' },
            ],
          },
          validation: {
            label: T.a.d19bf2bc,
            options: [
              { label: T.a.h25771bb, value: 'Easy' },
              { label: T.a.e0830664, value: 'Challenging' },
            ],
          },
          not_misleading_tags: {
            label: T.a.j206b73d,
            options: [
              { label: T.a.g228df26, value: 'FactuallyCorrect' },
              { label: T.a.dd55f821, value: 'OutdatedNowButNotWhenWritten' },
              { label: T.a.hf607a09, value: 'ClearlySatire' },
              { label: T.a.j6ac7741, value: 'PersonalOpinion' },
              { label: T.a.c365dcc5, value: 'Other' },
            ],
          },
          trustworthy_sources: {
            label: T.a.b1d82aae,
            options: [
              { label: T.a.b7ec04f3, value: !0 },
              { label: T.a.i62a03aa, value: !1 },
            ],
          },
        }
      function $(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(a), !0).forEach(function (t) {
                i()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : $(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var te = T.a.d39e8b30,
        ae = T.a.a91bb144,
        ne = T.a.hb2bf967,
        re = T.a.dc7a6625,
        oe = T.a.af778d9e,
        ie = T.a.ifd2c15f,
        ce = T.a.f24ec219,
        le = T.a.j679dcda,
        se = { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' },
        ue = T.a.b7476596,
        de = T.a.df6c8291,
        pe = T.a.h0e35524,
        fe = ['believable', 'harmful', 'validation'],
        be = ['classification', 'summary', 'trustworthy_sources'],
        me = ['misleading_tags'].concat(fe),
        he = ['not_misleading_tags'],
        ye = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ve = ['misleading_tags', 'not_misleading_tags'],
        ge = T.a.b47b5a16,
        we = T.a.i0e66c5a,
        Ee = T.a.j8e3e3be,
        Oe = T.a.f1e851ff,
        _e = T.a.ff5dcac8,
        Se = {
          classification: we,
          misleading_tags: Ee,
          believable: we,
          harmful: we,
          validation: we,
          summary: Oe,
          not_misleading_tags: Ee,
          trustworthy_sources: we,
        },
        Ce = T.a.abdd8d09,
        Te = { explanation: T.a.c097608d, source: T.a.g9cffe15 },
        je = { explanation: T.a.ba25898c, source: T.a.e764d704 },
        Ae = { explanation: T.a.gb67e44c, source: T.a.d6b758a1 },
        Ie = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        xe = function (e) {
          var t = u.a.useContext(d.a).featureSwitches,
            a = e.addToast,
            n = e.analytics,
            o = e.createLocalApiErrorHandler,
            c = e.createNote,
            s = e.draftData,
            f = e.fetchNotes,
            b = e.fetchShowAliasSelfSelect,
            m = e.fetchTweet,
            h = e.fetchUserAlias,
            y = e.history,
            v = e.ownNoteData,
            g = e.saveFormData,
            w = e.showAliasSelfSelect,
            E = e.tweetId,
            O = e.userAlias,
            C = function (e) {
              return void 0 === e ? we : ''
            },
            T = function (e) {
              return K()(e, Ie).weightedLength
            },
            F = function (e) {
              if (!e) return Oe
              var t = T(e.trim())
              return t <= 0 ? Oe : t > 280 ? _e : ''
            },
            z = u.a.useState(s || {}),
            U = l()(z, 2),
            $ = U[0],
            xe = U[1],
            Le = u.a.useState(
              (function () {
                var e = Se
                return (
                  ye.forEach(function (t) {
                    e[t] = C($[t])
                  }),
                  ve.forEach(function (t) {
                    var a
                    e[t] = (a = $[t]) && a.length > 0 ? '' : Ee
                  }),
                  (e.summary = F($.summary)),
                  e
                )
              })(),
            ),
            Re = l()(Le, 2),
            De = Re[0],
            ke = Re[1],
            Be = u.a.useState(!1),
            Ne = l()(Be, 2),
            Me = Ne[0],
            He = Ne[1],
            Fe = u.a.useState(!1),
            ze = l()(Fe, 2),
            We = ze[0],
            Ue = ze[1],
            Ke = u.a.useState(null),
            Ve = l()(Ke, 2),
            Xe = Ve[0],
            qe = Ve[1],
            Ge = u.a.useState(w),
            Ze = l()(Ge, 2),
            Qe = Ze[0],
            Ye = Ze[1],
            Je = '/i/birdwatch/'.concat(E, '/contribute_complete')
          u.a.useEffect(
            function () {
              E && (m(E).catch(o()), f(E).catch(o()))
            },
            [o, f, m, E],
          ),
            u.a.useEffect(
              function () {
                h().catch(o())
              },
              [o, h],
            ),
            u.a.useEffect(
              function () {
                b().catch(o())
              },
              [o, b],
            ),
            u.a.useEffect(
              function () {
                Ye(w)
              },
              [w],
            )
          var $e,
            et = function (e) {
              var t = I.a.forTweet(E)
              n.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            tt = function (e) {
              return function (t, a) {
                et(e),
                  xe(function (t) {
                    var n = a
                    'trustworthy_sources' === e && ('true' === a ? (n = !0) : 'false' === a && (n = !1))
                    var r = ee(ee({}, t), {}, i()({}, e, n))
                    return g({ updates: r, tweetId: E }), r
                  }),
                  ke(function (t) {
                    return ee(ee({}, t), {}, i()({}, e, C(a)))
                  })
              }
            },
            at = function (e) {
              return function (t) {
                return function () {
                  xe(function (a) {
                    if (!a[e]) {
                      ke(function (t) {
                        return ee(ee({}, t), {}, i()({}, e, ''))
                      })
                      var n = ee(ee({}, a), {}, i()({}, e, [t]))
                      return g({ updates: n, tweetId: E }), n
                    }
                    var o = a[e].includes(t),
                      c = a[e].filter(function (e) {
                        return e !== t
                      })
                    if (o) {
                      ke(function (t) {
                        return c.length > 0 ? ee(ee({}, t), {}, i()({}, e, '')) : ee(ee({}, t), {}, i()({}, e, Ee))
                      })
                      var l = ee(ee({}, a), {}, i()({}, e, c))
                      return g({ updates: l, tweetId: E }), l
                    }
                    ke(function (t) {
                      return ee(ee({}, t), {}, i()({}, e, ''))
                    })
                    var s = ee(ee({}, a), {}, i()({}, e, [].concat(r()(a[e]), [t])))
                    return g({ updates: s, tweetId: E }), s
                  })
                }
              }
            },
            nt = (null == $ ? void 0 : $.misleading_tags) || [],
            rt = (null == $ ? void 0 : $.not_misleading_tags) || [],
            ot = function (e) {
              return (
                Me &&
                '' !== e &&
                u.a.createElement(
                  L.a,
                  { style: Pe.errorContainer },
                  u.a.createElement(V.a, { style: Pe.errorIcon }),
                  u.a.createElement(R.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, e),
                )
              )
            },
            it = u.a.createElement(
              L.a,
              null,
              u.a.createElement(
                L.a,
                { style: Pe.questionSection },
                u.a.createElement(
                  L.a,
                  { accessibilityLabel: J.misleading_tags.label, accessibilityRole: 'group' },
                  u.a.createElement(R.b, { weight: 'bold' }, J.misleading_tags.label, ' '),
                  J.misleading_tags.options.map(function (e) {
                    return u.a.createElement(D.a, {
                      checked: nt.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: at('misleading_tags')(e.value),
                      style: Pe.checkbox,
                    })
                  }),
                  ot(De.misleading_tags),
                ),
              ),
              fe.map(function (e) {
                return u.a.createElement(
                  L.a,
                  { key: J[e].label, style: Pe.questionSection },
                  u.a.createElement(k.a, {
                    label: J[e].label,
                    name: e,
                    onChange: tt(e),
                    options: J[e].options,
                    value: $[e],
                  }),
                  ot(De[e]),
                )
              }),
            ),
            ct = u.a.createElement(
              L.a,
              { style: Pe.questionSection },
              u.a.createElement(
                L.a,
                { accessibilityLabel: J.not_misleading_tags.label, accessibilityRole: 'group' },
                u.a.createElement(R.b, { weight: 'bold' }, J.not_misleading_tags.label, ' '),
                J.not_misleading_tags.options.map(function (e) {
                  return u.a.createElement(D.a, {
                    checked: rt.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: at('not_misleading_tags')(e.value),
                    style: Pe.checkbox,
                  })
                }),
                ot(De.not_misleading_tags),
              ),
            ),
            lt = function (e) {
              return (
                0 ===
                e.filter(function (e) {
                  return !!De[e]
                }).length
              )
            },
            st = function () {
              var e = $.summary || ''
              return !(!lt(be) || '' !== F(e)) && !!((dt === Q && lt(me)) || (dt === Y && lt(he)))
            },
            ut = function () {
              Ue(!0),
                c(E, $)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      a({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(A.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        et('submit_failed'),
                        Ue(!1)
                    } else g({ updates: {}, tweetId: E }), y.replace(Je)
                  })
                  .catch(function (e) {
                    o({ defaultToast: { text: pe, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      Ue(!1),
                      et('submit_failed'),
                      Object(A.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            dt = $.classification,
            pt = $.trustworthy_sources,
            ft = void 0 === pt ? '' : pt ? 'true' : 'false',
            bt = dt === Y,
            mt = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            ht = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            yt = O && Object(_.a)(O, !0),
            vt = u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(
                L.a,
                { style: Pe.tweetContainer },
                u.a.createElement(x.b, { displayPromotedContent: !1, tweetId: E, withCurationMenu: !1 }),
              ),
              u.a.createElement(
                L.a,
                { style: Pe.formQuestions },
                u.a.createElement(
                  L.a,
                  { style: Pe.questionSection },
                  u.a.createElement(k.a, {
                    label: J.classification.label,
                    name: 'misleading_radio',
                    onChange: tt('classification'),
                    options: J.classification.options,
                    value: dt,
                  }),
                  ot(De.classification),
                ),
                dt === Q && it,
                bt && ct,
                !!dt &&
                  u.a.createElement(
                    u.a.Fragment,
                    null,
                    u.a.createElement(
                      L.a,
                      { style: Pe.questionSection },
                      u.a.createElement(
                        L.a,
                        { accessibilityLabel: bt ? ce : ie, accessibilityRole: 'group' },
                        u.a.createElement(R.b, { weight: 'bold' }, bt ? ce : ie),
                        u.a.createElement(R.b, { link: se }, le),
                        u.a.createElement(B.a, {
                          calculateLength: T,
                          helperText: ue,
                          invalid: !!De.summary && Me,
                          label: de,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            g({ updates: $, tweetId: E })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            xe(function (e) {
                              return ee(ee({}, e), {}, { summary: t })
                            }),
                              ke(function (e) {
                                return ee(ee({}, e), {}, { summary: F(t) })
                              })
                          },
                          style: Pe.textInput,
                          validLength: 280,
                          value: null == $ ? void 0 : $.summary,
                        }),
                        ot(De.summary),
                      ),
                    ),
                    u.a.createElement(
                      L.a,
                      { style: Pe.questionSection },
                      u.a.createElement(k.a, {
                        label: J.trustworthy_sources.label,
                        name: 'trustworthy_sources_radio',
                        onChange: tt('trustworthy_sources'),
                        options:
                          (($e = J.trustworthy_sources.options),
                          $e.map(function (e) {
                            return { label: e.label, value: e.value.toString() }
                          })),
                        value: ft,
                      }),
                      ot(De.trustworthy_sources),
                    ),
                    mt &&
                      !ht &&
                      u.a.createElement(L.a, { style: Pe.callout }, u.a.createElement(N.a, { Icon: X.a, text: ne })),
                    mt &&
                      ht &&
                      yt &&
                      u.a.createElement(
                        L.a,
                        { style: Pe.callout },
                        u.a.createElement(N.a, {
                          Icon: q.a,
                          headline: re({ displayAlias: yt }),
                          text: oe,
                          withThumbnail: !0,
                        }),
                      ),
                    Me &&
                      !st() &&
                      u.a.createElement(
                        L.a,
                        { style: Pe.callout },
                        u.a.createElement(N.a, { Icon: V.a, text: ge, type: 'danger' }),
                      ),
                    u.a.createElement(
                      M.a,
                      {
                        disabled: We,
                        onPress: function () {
                          et('submit'), He(!0)
                          var e = (function () {
                            var e = W()($.summary)
                            if (0 === (null == e ? void 0 : e.length)) return 'source'
                            var t = $.summary
                            return (
                              e.forEach(function (e) {
                                if (!t) return 'explanation'
                                t = t.replace(e, '')
                              }),
                              t && 0 !== t.trim().length ? null : 'explanation'
                            )
                          })()
                          st() && (e ? qe(e) : ut())
                        },
                        style: Pe.submitButton,
                        type: 'brandFilled',
                      },
                      ae,
                    ),
                  ),
              ),
            )
          return ht && Qe
            ? u.a.createElement(p.a, {
                onAliasSelected: function (e) {
                  Ye(e)
                },
              })
            : v
            ? u.a.createElement(j.a, { to: Je })
            : Xe
            ? u.a.createElement(H.a, {
                actionLabel: Ce,
                graphic: 'source' === Xe ? G.a : Z.a,
                graphicDisplayMode: 'thumbnail',
                headline: Te[Xe],
                onAction: function () {
                  et('nudge_edit'), qe(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = I.a.forTweet(E)
                  n.scribe({ element: 'nudge', action: 'show', data: { targets: [e] } })
                },
                onTertiaryAction: function () {
                  et('nudge_submit'), ut()
                },
                subtext: je[Xe],
                tertiaryActionLabel: Ae[Xe],
                withCloseButton: !1,
              })
            : u.a.createElement(
                S.b,
                {
                  history: y,
                  onBackClick: function () {
                    et('close'), y.goBack()
                  },
                  renderHeader: P.b.isTwitterApp()
                    ? function () {
                        return null
                      }
                    : void 0,
                  title: te,
                },
                u.a.createElement(L.a, { style: Pe.contentWrapper }, vt),
              )
        },
        Pe = F.a.create(function (e) {
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
        Le = O(xe)
      t.default = Le
    },
    YI7k: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    Yyvu: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'NotAvailablePage', function () {
          return v
        })
      var n = a('ERkP'),
        r = a.n(n),
        o = a('vZpt'),
        i = a('L5MV'),
        c = a('3XMw'),
        l = a.n(c),
        s = a('VS6U'),
        u = a('MWbm'),
        d = a('FIs5'),
        p = a('rHpw'),
        f = l.a.b5711f09,
        b = l.a.e96677aa,
        m = l.a.f026d2ee,
        h = l.a.i859a9d3,
        y = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        v = function (e) {
          var t = e.history,
            a = r.a.createElement(
              u.a,
              { style: g.contentWrapper },
              r.a.createElement(d.a, {
                buttonLink: y,
                buttonText: h,
                buttonType: 'brandOutlined',
                header: b,
                message: m,
              }),
            )
          return r.a.createElement(s.a, {
            TabBar: i.a,
            history: t,
            logoButton: r.a.createElement(r.a.Fragment, null),
            primaryContent: a,
            sidebarContent: r.a.createElement(o.a, null),
            title: f,
            withTweetButton: !1,
          })
        },
        g = p.a.create(function (e) {
          return { contentWrapper: { marginHorizontal: '100px' } }
        })
      t.default = v
    },
    ZD0R: function (e, t, a) {
      'use strict'
      var n,
        r,
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        l = a.n(c),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        p = a.n(d),
        f = a('N+ot'),
        b = a.n(f),
        m = a('AuHH'),
        h = a.n(m),
        y = a('KEM+'),
        v = a.n(y),
        g = a('ddV6'),
        w = a.n(g),
        E = (a('jQ3i'), a('x4t0'), a('2G9S'), a('OZaJ'), a('ERkP')),
        O = a.n(E),
        _ = (a('+KXO'), a('1t7P'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('RhWx')),
        S = a.n(_),
        C = (a('z84I'), a('7x/C'), a('DZ+c'), a('LW0h'), a('v6aA')),
        T = a('MvLc'),
        j = a('rxPX'),
        A = a('0KEI'),
        I = Object(j.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: T.c,
              deleteRating: T.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        x = a('ACNv'),
        P = a('YeIG'),
        L = a('MWbm'),
        R = a('t62R'),
        D = a('XiMS'),
        k = a('fyvP'),
        B = a('/yvb'),
        N = a('IG7M'),
        M = a('rHpw'),
        H = (a('yH/f'), a('3XMw')),
        F = a.n(H),
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
        W = [z.Informative, z.Clear, z.Empathetic, z.GoodSources, z.UniqueContext, z.Other],
        U =
          ((n = {}),
          v()(n, z.Clear, F.a.dfa44ddd),
          v()(n, z.Empathetic, F.a.hc2b6a7e),
          v()(n, z.GoodSources, F.a.a7bc3191),
          v()(n, z.Informative, F.a.f3e6f0a9),
          v()(n, z.Other, F.a.c365dcc5),
          v()(n, z.UniqueContext, F.a.c5d55592),
          n),
        K = Object.freeze({
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
        V = [
          K.NoSources,
          K.Incorrect,
          K.Outdated,
          K.Biased,
          K.MissingKeyPoints,
          K.Unclear,
          K.Rude,
          K.OffTopic,
          K.TwitterViolationAny,
          K.Other,
        ],
        X =
          ((r = {}),
          v()(r, K.Biased, F.a.bbe8b4ac),
          v()(r, K.Incorrect, F.a.heb35e12),
          v()(r, K.MissingKeyPoints, F.a.c34e0b2b),
          v()(r, K.NoSources, F.a.a802709f),
          v()(r, K.OffTopic, F.a.dd1f17e9),
          v()(r, K.Outdated, F.a.if966b54),
          v()(r, K.Other, F.a.c365dcc5),
          v()(r, K.Rude, F.a.d0ba7db4),
          v()(r, K.TwitterViolationAny, F.a.aa520d31),
          v()(r, K.Unclear, F.a.e25e5ed1),
          r),
        q = a('hiGS'),
        G = a('TW8A'),
        Z = a('WtWS')
      function Q(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(a), !0).forEach(function (t) {
                v()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Q(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var J = F.a.ed5156f9,
        $ = [
          { label: F.a.b7ec04f3, value: !0 },
          { label: F.a.i62a03aa, value: !1 },
        ],
        ee = {
          helpful: { label: F.a.a7338bc2, options: $ },
          agree: { label: F.a.d93489e6, options: $ },
          helpful_tags: {
            label: F.a.j63844f5,
            options: W.map(function (e) {
              return { label: U[e], value: e }
            }),
          },
          not_helpful_tags: {
            label: F.a.e0806a48,
            options: V.map(function (e) {
              return { label: X[e], value: e }
            }),
          },
        },
        te = F.a.a91bb144,
        ae = F.a.abd845fd,
        ne = F.a.d96cf7cd,
        re = F.a.j6aa6172,
        oe = F.a.i411275f,
        ie = F.a.d1a479a8,
        ce = function (e) {
          return e.map(function (e) {
            return { label: e.label, value: e.value.toString() }
          })
        },
        le = O.a.createElement(R.b, { weight: 'bold' }),
        se = O.a.createElement(R.b, { weight: 'bold' }),
        ue = O.a.createElement(R.b, { weight: 'bold' }),
        de = O.a.createElement(R.b, { weight: 'bold' }),
        pe = O.a.createElement(F.a.I18NFormatMessage, { $i18n: 'if77e237' }, O.a.cloneElement(ue, null, F.a.a43beaf2)),
        fe = O.a.createElement(F.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, O.a.cloneElement(de, null, F.a.cb1d0ef3)),
        be = O.a.createElement(F.a.I18NFormatMessage, { $i18n: 'j575fa79' }, O.a.cloneElement(le, null, F.a.he5f1491)),
        me = O.a.createElement(F.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, O.a.cloneElement(se, null, F.a.a67e7d91)),
        he = O.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'd570f1d9' },
          O.a.cloneElement(ue, null, F.a.c9c4850a),
          O.a.cloneElement(le, null, F.a.ffa975fd),
        ),
        ye = O.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'c6cb9513' },
          O.a.cloneElement(ue, null, F.a.c9701442),
          O.a.cloneElement(se, null, F.a.d2be9800),
        ),
        ve = O.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          O.a.cloneElement(de, null, F.a.cf87d556),
          O.a.cloneElement(le, null, F.a.hec80c95),
        ),
        ge = O.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'gbfec7fd' },
          O.a.cloneElement(de, null, F.a.bfa5f565),
          O.a.cloneElement(se, null, F.a.eb1cc800),
        ),
        we = M.a.create(function (e) {
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
        Ee = I(function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.createRating,
            r = e.deleteRating,
            o = e.noteId,
            i = e.rating,
            c = O.a.useContext(C.a).featureSwitches,
            l = i || {},
            s = O.a.useState(l),
            u = w()(s, 2),
            d = u[0],
            p = u[1],
            f = O.a.useState(Object(P.a)(i)),
            b = w()(f, 2),
            m = b[0],
            h = b[1],
            y = function (e) {
              return function (t, a) {
                p(function (t) {
                  var n = a
                  return 'true' === a ? (n = !0) : 'false' === a && (n = !1), Y(Y({}, t), {}, v()({}, e, n))
                })
              }
            },
            g = function (e) {
              var t = d[e] || []
              return O.a.createElement(
                L.a,
                { style: we.checkboxContainer },
                O.a.createElement(R.b, { weight: 'bold' }, ee[e].label),
                ee[e].options.map(function (a) {
                  return O.a.createElement(D.a, {
                    checked: t.includes(a.value),
                    key: a.value,
                    label: a.label,
                    onChange: T(e)(a.value),
                    style: we.checkbox,
                  })
                }),
              )
            },
            E = function () {
              j('delete'),
                r(o)
                  .then(function (e) {
                    'Done' === e.birdwatchnote_rating_delete && (p({}), h(!0))
                  })
                  .catch(a())
            },
            _ = function () {
              j('edit'), h(!0)
            },
            T = function (e) {
              return function (t) {
                return function () {
                  p(function (a) {
                    return a[e]
                      ? a[e].includes(t)
                        ? Y(
                            Y({}, a),
                            {},
                            v()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : Y(Y({}, a), {}, v()({}, e, [].concat(S()(a[e]), [t])))
                      : Y(Y({}, a), {}, v()({}, e, [t]))
                  })
                }
              }
            },
            j = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            A = void 0 !== (null == d ? void 0 : d.helpful),
            I = A ? (null != d && d.helpful ? 'true' : 'false') : '',
            M = void 0 !== (null == d ? void 0 : d.agree),
            H = M ? (null != d && d.agree ? 'true' : 'false') : ''
          return m
            ? O.a.createElement(
                L.a,
                { style: we.root },
                O.a.createElement(k.a, {
                  label: ee.helpful.label,
                  name: ee.helpful.label + o,
                  onChange: y('helpful'),
                  options: ce($),
                  value: I,
                }),
                A && (null != d && d.helpful ? g('helpful_tags') : g('not_helpful_tags')),
                O.a.createElement(k.a, {
                  label: ee.agree.label,
                  name: ee.agree.label + o,
                  onChange: y('agree'),
                  options: ce($),
                  value: H,
                }),
                !Object(P.a)(d) &&
                  O.a.createElement(
                    B.a,
                    {
                      onClick: function () {
                        j('submit'),
                          d &&
                            n(o, d)
                              .then(function () {
                                h(!1)
                              })
                              .catch(
                                a({
                                  defaultToast: { text: J, withAutoDismiss: !1, withClearButton: !0 },
                                  showToast: !0,
                                }),
                              )
                      },
                      style: we.button,
                      type: 'brandFilled',
                    },
                    te,
                  ),
              )
            : O.a.createElement(
                L.a,
                { style: [we.root, we.showSubmittedRating] },
                O.a.createElement(
                  L.a,
                  { style: we.row },
                  O.a.createElement(Z.a, { style: we.icon }),
                  O.a.createElement(
                    R.b,
                    { size: 'subtext2' },
                    null != d && d.helpful && !M
                      ? pe
                      : (null != d && d.helpful) || M
                      ? null != d && d.agree && !A
                        ? be
                        : (null != d && d.agree) || A
                        ? null != d && d.helpful && null != d && d.agree
                          ? he
                          : null == d || !d.helpful || (null != d && d.agree)
                          ? (null != d && d.helpful) || null == d || !d.agree
                            ? (null != d && d.helpful) || (null != d && d.agree)
                              ? void 0
                              : ge
                            : ve
                          : ye
                        : me
                      : fe,
                  ),
                ),
                O.a.createElement(N.a, {
                  renderActionMenu: function (e) {
                    return O.a.createElement(x.default, {
                      actionItems:
                        ((t = []),
                        t.push({
                          confirmation: { label: ne, headline: re, text: oe, confirmButtonType: 'destructiveFilled' },
                          isEmphasized: !0,
                          text: ne,
                          Icon: q.a,
                          onClick: E,
                        }),
                        c.isTrue('responsive_web_birdwatch_ratings_v2_enabled')
                          ? t.push({ disabled: !0, text: ae, subText: ie, Icon: G.a })
                          : t.push({ text: ae, Icon: G.a, onClick: _ }),
                        t),
                      onClose: e,
                    })
                    var t
                  },
                }),
              )
        }),
        Oe = (a('uFXj'), a('xZGM')),
        _e = a('1YZw'),
        Se = Object(j.a)()
          .propsFromState(function () {
            return {
              shouldShowDataPrivacyPrompt: function (e, t) {
                return Object(Oe.z)(e, Oe.c)
              },
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: Oe.w,
              addToast: _e.b,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: T.c,
              deleteRating: T.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        Ce = a('cHvH'),
        Te = a('h0NW'),
        je = a('feu+')
      function Ae(e) {
        var t,
          a,
          n = F.a.a7bc3191,
          r = F.a.a26f8dc1,
          o = F.a.d89cfe9e,
          i = F.a.faa5f9e7,
          c = F.a.c365dcc5
        return e
          ? ((t = {}),
            v()(t, z.GoodSources, n),
            v()(t, z.Clear, r),
            v()(t, z.AddressesClaim, o),
            v()(t, z.ImportantContext, i),
            v()(t, z.UnbiasedLanguage, F.a.gf3b38f4),
            v()(t, z.Other, c),
            t)
          : ((a = {}),
            v()(a, z.GoodSources, n),
            v()(a, z.Clear, r),
            v()(a, z.AddressesClaim, o),
            v()(a, z.ImportantContext, i),
            v()(a, z.Other, c),
            a)
      }
      function Ie(e) {
        return Object.keys(Ae(e))
      }
      function xe(e) {
        var t,
          a,
          n = F.a.ef490ae8,
          r = F.a.bf3dc461,
          o = F.a.heb35e12,
          i = F.a.ib117531,
          c = F.a.c365dcc5
        return e
          ? ((t = {}),
            v()(t, K.NoSources, n),
            v()(t, K.IrrelevantSources, r),
            v()(t, K.Incorrect, o),
            v()(t, K.OpinionSpeculation, F.a.h7c59ea2),
            v()(t, K.Unclear, F.a.d60c0063),
            v()(t, K.MissingKeyPoints, F.a.e06416c9),
            v()(t, K.Rude, F.a.cff1aa8b),
            v()(t, K.NoteNotNeeded, F.a.cc443e25),
            v()(t, K.TwitterViolationAny, i),
            v()(t, K.Other, c),
            t)
          : ((a = {}),
            v()(a, K.NoSources, n),
            v()(a, K.IrrelevantSources, r),
            v()(a, K.Incorrect, o),
            v()(a, K.Unclear, F.a.d60c0063),
            v()(a, K.MissingKeyPoints, F.a.c34e0b2b),
            v()(a, K.Rude, F.a.d24b99ed),
            v()(a, K.TwitterViolationAny, i),
            v()(a, K.Other, c),
            a)
      }
      function Pe(e) {
        return Object.keys(xe(e))
      }
      var Le = a('EQ/a'),
        Re = a('DlMI')
      function De(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(a), !0).forEach(function (t) {
                v()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : De(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Be = F.a.ed5156f9,
        Ne = [
          { label: F.a.b7ec04f3, value: 'Helpful' },
          { label: F.a.i26425d8, value: 'SomewhatHelpful' },
          { label: F.a.i62a03aa, value: 'NotHelpful' },
        ],
        Me = F.a.a91bb144,
        He = F.a.abd845fd,
        Fe = F.a.d96cf7cd,
        ze = F.a.j6aa6172,
        We = F.a.i411275f,
        Ue = F.a.e2988ed0,
        Ke = F.a.c1a50438,
        Ve = F.a.d2ae3d42,
        Xe = F.a.c4e0c730,
        qe = F.a.cfd2f35d,
        Ge = F.a.b1ea3365,
        Ze = F.a.h1a9d37a,
        Qe = O.a.createElement(R.b, { weight: 'bold' }),
        Ye = O.a.createElement(R.b, {
          link: 'https://twitter.github.io/birdwatch/about/overview/#transparency-and-visibility',
          withInteractiveStyling: !0,
          withUnderline: !0,
        }),
        Je = O.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'ab4d390f' },
          O.a.cloneElement(Qe, null, F.a.iedb2fc7),
          O.a.cloneElement(Ye, null, F.a.cd24d5f5),
        ),
        $e = O.a.createElement(R.b, { weight: 'bold' }),
        et = O.a.createElement(R.b, { weight: 'bold' }),
        tt = O.a.createElement(R.b, { weight: 'bold' }),
        at = O.a.createElement(F.a.I18NFormatMessage, { $i18n: 'had203a8' }, O.a.cloneElement($e, null, F.a.f2ceaed4)),
        nt = O.a.createElement(F.a.I18NFormatMessage, { $i18n: 'h42a21df' }, O.a.cloneElement(et, null, F.a.i7d91dc8)),
        rt = O.a.createElement(F.a.I18NFormatMessage, { $i18n: 'c3d1a1b0' }, O.a.cloneElement(tt, null, F.a.c206a60f)),
        ot = M.a.create(function (e) {
          return {
            button: { alignSelf: 'center' },
            checkbox: { paddingVertical: e.spaces.space8 },
            checkboxContainer: { paddingTop: e.spaces.space12 },
            helpfulButtons: { flex: 'auto', marginHorizontal: e.spaces.space2 },
            helpfulContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            helpfulOptions: { flexDirection: 'row' },
            helpfulQuestionMobile: { paddingBottom: e.spaces.space8 },
            icon: { color: e.colors.normal, paddingRight: e.spaces.space12 },
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
        it = {
          accessibilityLabel: Ve,
          containerStyle: ot.infoItemContainer,
          items: [
            { label: '', decoration: O.a.createElement(Le.a, { style: ot.iconDataPrivacy }), description: Ze },
            {
              label: '',
              decoration: O.a.createElement(Re.a, { style: ot.iconDataPrivacy }),
              description: O.a.createElement(L.a, { style: ot.anonymousCrowdText }, Je),
            },
          ],
        },
        ct = Se(function (e) {
          var t = e.addFlag,
            a = e.addToast,
            n = e.analytics,
            r = e.createLocalApiErrorHandler,
            o = e.createRating,
            i = e.deleteRating,
            c = e.noteId,
            l = e.rating,
            s = e.ratingSurvey,
            u = e.shouldShowDataPrivacyPrompt,
            d = O.a.useContext(C.a).featureSwitches,
            p = O.a.useState(l),
            f = w()(p, 2),
            b = f[0],
            m = f[1],
            h = O.a.useState(Object(P.a)(l)),
            y = w()(h, 2),
            g = y[0],
            E = y[1],
            _ = O.a.useState(!1),
            T = w()(_, 2),
            j = T[0],
            A = T[1],
            I = d.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            k = {
              helpful: { label: F.a.a7338bc2, options: Ne },
              helpful_tags: {
                label: F.a.ac7f9745,
                options: Ie(I).map(function (e) {
                  return { label: Ae(I)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: F.a.c7751803,
                options: Pe(I).map(function (e) {
                  return { label: xe(I)[e], value: e }
                }),
              },
            },
            H = function (e) {
              n.scribeAction('click_'.concat(e))
            },
            z = function () {
              H('delete'),
                i(c)
                  .then(function (e) {
                    if ('Done' === e.birdwatchnote_rating_delete) {
                      var t = Object.freeze({})
                      m(t), E(!0)
                    }
                  })
                  .catch(r())
            },
            W = function () {
              H('edit'), E(!0)
            },
            U = function () {
              var e, t
              ;(H('submit'),
              o(c, b)
                .then(function () {
                  E(!1)
                })
                .catch(r({ defaultToast: { text: Be, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              d.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(P.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = b.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = b.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
                  Math.random() < 0.05) &&
                a({
                  text: Ue,
                  action: { label: Ke, link: null == s ? void 0 : s.url },
                  withAutoDismiss: !0,
                  withClearButton: !0,
                })
            },
            V = function (e) {
              return function (t) {
                return function () {
                  m(function (a) {
                    return a[e]
                      ? a[e].includes(t)
                        ? ke(
                            ke({}, a),
                            {},
                            v()(
                              {},
                              e,
                              a[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : ke(ke({}, a), {}, v()({}, e, [].concat(S()(a[e]), [t])))
                      : ke(ke({}, a), {}, v()({}, e, [t]))
                  })
                }
              }
            },
            X = function (e) {
              var t = (b && b[e]) || []
              return O.a.createElement(
                L.a,
                { style: ot.checkboxContainer },
                O.a.createElement(R.b, { weight: 'bold' }, k[e].label),
                k[e].options.map(function (a) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level) &&
                      a.value === K.TwitterViolationAny
                    ) &&
                    O.a.createElement(D.a, {
                      checked: t.includes(a.value),
                      key: a.value,
                      label: a.label,
                      onChange: V(e)(a.value),
                      style: ot.checkbox,
                    })
                  )
                }),
              )
            },
            Q = O.a.createElement(Ce.a, null, function (e) {
              var t = e.windowWidth <= M.a.theme.breakpoints.small
              return O.a.createElement(
                L.a,
                { style: !t && ot.helpfulContainer },
                O.a.createElement(R.b, { style: t && ot.helpfulQuestionMobile, weight: 'bold' }, k.helpful.label),
                O.a.createElement(
                  L.a,
                  { style: ot.helpfulOptions },
                  Ne.map(function (e) {
                    return O.a.createElement(
                      B.a,
                      {
                        key: e.value,
                        onClick:
                          ((t = e.value),
                          function () {
                            m(function (e) {
                              return ke(ke({}, e), {}, { helpfulness_level: t })
                            })
                          }),
                        size: 'small',
                        style: ot.helpfulButtons,
                        type: (null == b ? void 0 : b.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
                      },
                      e.label,
                    )
                    var t
                  }),
                ),
              )
            }),
            Y = O.a.createElement(Te.a, it),
            J = O.a.createElement(je.a, {
              actionLabel: Xe,
              headline: Ge,
              isFullHeightOnMobile: !0,
              onAction: function () {
                U(), t(Oe.c), A(!1)
              },
              onSecondaryAction: function () {
                return A(!1)
              },
              secondaryActionLabel: qe,
              subtext: Y,
            }),
            $ = void 0 !== (null == b ? void 0 : b.helpfulness_level),
            ee =
              $ &&
              ('Helpful' === (null == b ? void 0 : b.helpfulness_level) ||
                'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level)),
            te =
              $ &&
              ('NotHelpful' === (null == b ? void 0 : b.helpfulness_level) ||
                'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level))
          return O.a.createElement(
            O.a.Fragment,
            null,
            j ? J : null,
            g
              ? O.a.createElement(
                  L.a,
                  { style: ot.root },
                  Q,
                  ee && X('helpful_tags'),
                  te && X('not_helpful_tags'),
                  !Object(P.a)(b) &&
                    O.a.createElement(
                      B.a,
                      {
                        onClick: function () {
                          u && d.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? A(!0) : b && U()
                        },
                        style: ot.button,
                        type: 'brandFilled',
                      },
                      Me,
                    ),
                )
              : O.a.createElement(
                  L.a,
                  { style: [ot.root, ot.showSubmittedRating] },
                  O.a.createElement(
                    L.a,
                    { style: ot.row },
                    O.a.createElement(Z.a, { style: ot.icon }),
                    O.a.createElement(
                      R.b,
                      { size: 'subtext2' },
                      (function () {
                        switch (null == b ? void 0 : b.helpfulness_level) {
                          case 'Helpful':
                            return at
                          case 'SomewhatHelpful':
                            return nt
                          case 'NotHelpful':
                            return rt
                          default:
                            return
                        }
                      })(),
                    ),
                  ),
                  O.a.createElement(N.a, {
                    renderActionMenu: function (e) {
                      return O.a.createElement(x.default, {
                        actionItems:
                          ((t = []),
                          t.push({
                            confirmation: { label: Fe, headline: ze, text: We, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: Fe,
                            Icon: q.a,
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
        lt = a('xSpP'),
        st = a('XOJV'),
        ut = function (e, t) {
          var a,
            n = null === (a = t.note) || void 0 === a ? void 0 : a.tweet
          return n ? st.a.selectFetchStatus(e, n.rest_id) : void 0
        },
        dt = Object(j.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: ut, userAlias: T.y }
          })
          .propsFromActions(function () {
            return {
              addToast: _e.b,
              createAppeal: T.a,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: lt.b,
              fetchTweet: st.a.fetchOneIfNeeded,
              fetchUserAlias: T.l,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        pt = a('eqZz'),
        ft = a('W6+M'),
        bt = a('yrzJ'),
        mt = a('sgih')
      function ht(e) {
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
          var a,
            n = h()(e)
          if (t) {
            var r = h()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return b()(this, a)
        }
      }
      var yt = F.a.e4579709,
        vt = F.a.df587b98,
        gt = F.a.fd284b08,
        wt = F.a.h201bdc8,
        Et = F.a.fe1f6043,
        Ot = F.a.ia5e7487,
        _t = F.a.j58e7b00,
        St = (function (e) {
          p()(a, e)
          var t = ht(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
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
                    o = e.userBadges,
                    i = this.context.featureSwitches,
                    c = i.isTrue('responsive_web_birdwatch_note_awards_enabled'),
                    l = i.isTrue('responsive_web_birdwatch_aliases_enabled'),
                    s = c && o && o.length > 0,
                    u = O.a.createElement(
                      L.a,
                      { style: Ct.noteDetailsContainer },
                      O.a.createElement(
                        L.a,
                        { style: Ct.noteDetailsHeader },
                        O.a.createElement(R.b, { size: 'headline1', weight: 'bold' }, yt),
                      ),
                      O.a.createElement(
                        L.a,
                        { style: Ct.noteDetails },
                        O.a.createElement(
                          L.a,
                          { style: [Ct.noteDetailsSection, Ct.noteDetailsSectionBorder] },
                          O.a.createElement(R.b, { color: 'normal', style: Ct.noteDetailsText }, vt),
                          O.a.createElement(R.b, { style: Ct.noteDetailsContentText }, r),
                        ),
                        O.a.createElement(
                          L.a,
                          { style: [Ct.noteDetailsSection, Ct.noteDetailsSectionBorder] },
                          O.a.createElement(R.b, { color: 'normal', style: Ct.noteDetailsText }, wt),
                          l
                            ? O.a.createElement(
                                R.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: Ct.profileText },
                                Object(ft.a)(t),
                              )
                            : O.a.createElement(bt.a, { screenName: t }),
                          l &&
                            O.a.createElement(
                              R.b,
                              {
                                color: 'link',
                                link: '/i/birdwatch/u/'.concat(t),
                                onClick: a,
                                style: Ct.viewProfileLink,
                              },
                              _t,
                            ),
                        ),
                        O.a.createElement(
                          L.a,
                          {
                            style: [Ct.noteDetailsSection, s ? Ct.noteDetailsSectionBorder : Ct.noteDetailsSectionLast],
                          },
                          O.a.createElement(R.b, { color: 'normal', style: Ct.noteDetailsText }, Et),
                          O.a.createElement(
                            R.b,
                            { style: Ct.noteDetailsContentText },
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
                        s &&
                          O.a.createElement(
                            L.a,
                            { style: [Ct.noteDetailsSection, Ct.noteDetailsSectionLast] },
                            O.a.createElement(R.b, { color: 'normal', style: Ct.awardDetailsText }, gt),
                            o
                              ? o.map(function (e, t) {
                                  return O.a.createElement(pt.a, { badgeType: e, key: t })
                                })
                              : null,
                          ),
                        O.a.createElement(L.a, { style: Ct.contentSpacer }),
                      ),
                      O.a.createElement(
                        L.a,
                        { style: Ct.noteDetailsButtonSection },
                        O.a.createElement(L.a, { style: Ct.buttonSpacer }),
                        O.a.createElement(B.a, { onClick: a, style: Ct.noteDetailsButton, type: 'brandFilled' }, Ot),
                      ),
                    )
                  return O.a.createElement(Ce.a, null, function (e) {
                    var t = e.windowWidth
                    return O.a.createElement(mt.a, {
                      allowBackNavigation: !0,
                      children: u,
                      onMaskClick: a,
                      type: t >= M.a.theme.breakpoints.medium ? 'center' : 'full',
                      withMask: !0,
                    })
                  })
                },
              },
            ]),
            a
          )
        })(O.a.Component)
      v()(St, 'contextType', C.a)
      var Ct = M.a.create(function (e) {
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
        Tt = St,
        jt = a('b5s6'),
        At = a('rcen'),
        It = a('Rp9C'),
        xt = 'helpfulRatingTags',
        Pt = 'notHelpfulRatingTags',
        Lt = 'ratingStatus',
        Rt = a('4zmP'),
        Dt = a('pjBI'),
        kt = a('GBcw'),
        Bt = a('htQn'),
        Nt = a('zIWA'),
        Mt = a('/WPq'),
        Ht = a('x0mb'),
        Ft = a('fBGZ'),
        zt = a('Lsrn'),
        Wt = a('k/Ka')
      function Ut(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function Kt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ut(Object(a), !0).forEach(function (t) {
                v()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Ut(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Vt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Wt.a)(
          'svg',
          Kt(
            Kt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [zt.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          O.a.createElement(
            'g',
            null,
            O.a.createElement('path', {
              d: 'M8 20V5.8l2.7 2.7c.3.3.8.3 1.1 0s.3-.8 0-1.1l-4-4c-.3-.2-.8-.2-1.1.1l-4 4c-.1.1-.2.3-.2.5s.1.4.2.5c.3.3.8.3 1.1 0l2.7-2.7V20c0 .4.3.8.8.8s.7-.4.7-.8zm9.3.5l4-4c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.7 2.7V4c0-.4-.3-.8-.8-.8s-.7.4-.7.8v14.2l-2.7-2.7c-.3-.3-.8-.3-1.1 0-.1.1-.2.3-.2.5s.1.4.2.5l4 4c.3.3.8.3 1.1 0z',
            }),
          ),
        )
      }
      Vt.metadata = { width: 24, height: 24 }
      var Xt = Vt,
        qt = a('Nh1N')
      function Gt(e) {
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
          var a,
            n = h()(e)
          if (t) {
            var r = h()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return b()(this, a)
        }
      }
      var Zt = F.a.d96cf7cd,
        Qt = F.a.e272836c,
        Yt = F.a.e4579709,
        Jt = F.a.fa0d3ee3,
        $t = F.a.ccf2f24e,
        ea = F.a.df321fc3,
        ta = O.a.createElement(R.b, { color: 'primary' }, ea),
        aa = F.a.gdcbac31,
        na = F.a.be86e75d,
        ra = F.a.f2d93c3d,
        oa = F.a.d1dd62ac,
        ia = F.a.b664c554,
        ca = F.a.ab66e1f2,
        la = F.a.b2792b8c,
        sa = F.a.b74df918,
        ua = F.a.hfd2544f,
        da = F.a.b9e1cf02,
        pa = F.a.cfd2f35d,
        fa = F.a.i80c8a83,
        ba = F.a.i859a9d3,
        ma = F.a.i97b83f6,
        ha = 'CurrentlyRatedHelpful',
        ya = 'CurrentlyRatedNotHelpful',
        va = 'NeedsMoreRatings',
        ga = function (e, t, a) {
          switch (e) {
            case ha:
              if (2 === t.length) {
                var n = w()(t, 2),
                  r = n[0],
                  o = n[1],
                  i = Ie(!0),
                  c = Ae(!0),
                  l = i.includes(r) ? c[r] : U[r],
                  s = i.includes(o) ? c[o] : U[o],
                  u = ''.concat(l, ' · ').concat(s)
                return l && s
                  ? O.a.createElement(
                      R.b,
                      { color: 'gray700', hoverLabel: { label: u }, size: 'subtext2', style: Oa.ratingTag, testID: xt },
                      u,
                    )
                  : null
              }
              return null
            case ya:
              if (2 === a.length) {
                var d = w()(a, 2),
                  p = d[0],
                  f = d[1],
                  b = Pe(!0).includes(p) ? xe(!0)[p] : X[p],
                  m = Pe(!0).includes(f) ? xe(!0)[f] : X[f],
                  h = ''.concat(b, ' · ').concat(m)
                return b && m
                  ? O.a.createElement(
                      R.b,
                      { color: 'gray700', hoverLabel: { label: h }, size: 'subtext2', style: Oa.ratingTag, testID: Pt },
                      h,
                    )
                  : null
              }
              return null
            default:
              return null
          }
        },
        wa = function (e, t) {
          return O.a.createElement(
            L.a,
            { style: Oa.ratingInfoItem, testID: Lt },
            _a(e),
            O.a.createElement(R.b, { size: 'subtext2', weight: 'bold' }, t),
          )
        },
        Ea = (function (e) {
          p()(a, e)
          var t = Gt(a)
          function a(e, n) {
            var r
            return (
              i()(this, a),
              (r = t.call(this, e, n)),
              v()(u()(r), '_handleFetchTweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchTweet,
                  n = e.note.tweet,
                  o = null == n ? void 0 : n.rest_id
                o && a(o).catch(t())
              }),
              v()(u()(r), '_isOwner', function () {
                var e,
                  t = r.props,
                  a = t.note,
                  n = t.userAlias,
                  o = null == a || null === (e = a.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!n || !o) && o === n
              }),
              v()(u()(r), '_handleDeleteConfirm', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.deleteNote,
                  n = e.handleDelete,
                  o = e.note,
                  i = o.birdwatch_profile,
                  c = o.rest_id
                r._scribeOnClick('delete')(),
                  null != i &&
                    i.alias &&
                    r._isOwner() &&
                    a(c)
                      .then(function (e) {
                        null == n || n(c)
                      })
                      .catch(t())
              }),
              v()(u()(r), '_getMenuActionItems', function () {
                var e = r.props.note,
                  t = e.birdwatch_profile,
                  a = e.rest_id,
                  n = []
                return (
                  null != t &&
                    t.alias &&
                    r._isOwner() &&
                    n.push({
                      confirmation: { label: Zt, headline: Qt, text: Jt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: Zt,
                      Icon: q.a,
                      onClick: r._handleDeleteConfirm,
                    }),
                  n.push({
                    text: $t,
                    Icon: Nt.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(a) },
                    onClick: r._scribeOnClick('report'),
                  }),
                  n.push({ text: Yt, Icon: Mt.a, onClick: r._onNoteDetailsClick }),
                  n
                )
              }),
              v()(u()(r), '_onNoteDetailsClick', function () {
                r.setState({ noteDetailsOpen: !0 }), r._scribeOnClick('note_details')
              }),
              v()(u()(r), '_renderCurationActionMenu', function (e) {
                return O.a.createElement(x.default, { actionItems: r._getMenuActionItems(), onClose: e })
              }),
              v()(u()(r), '_scribeOnClick', function (e) {
                return function () {
                  var t = r.props,
                    a = t.analytics,
                    n = t.note.tweet
                  if (n) {
                    var o = It.a.forTweet(n.rest_id)
                    a.scribe({ element: e, action: 'click', data: { targets: [o] } })
                  }
                }
              }),
              v()(u()(r), '_handleRequestAppeal', function () {
                var e = r.props,
                  t = e.createAppeal,
                  a = e.createLocalApiErrorHandler
                t(e.note.rest_id)
                  .then(function () {
                    r.setState({ appealsRequestOpen: !1 }), r.setState({ appealRequested: !0 })
                  })
                  .catch(a({ defaultToast: { text: ma, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }))
              }),
              v()(u()(r), '_handleOpenAppealsModal', function () {
                r.setState({ appealsRequestOpen: !0 })
              }),
              v()(u()(r), '_handleCloseAppealsModal', function () {
                r.setState({ appealsRequestOpen: !1 })
              }),
              v()(u()(r), '_renderAppealsModal', function () {
                var e = O.a.createElement(L.a, null, O.a.createElement(R.b, null, ca), O.a.createElement(Te.a, Sa))
                return O.a.createElement(je.a, {
                  actionLabel: da,
                  graphicDisplayMode: 'none',
                  headline: ia,
                  isFullHeightOnMobile: !0,
                  onAction: r._handleRequestAppeal,
                  onSecondaryAction: r._handleCloseAppealsModal,
                  secondaryActionLabel: pa,
                  subtext: e,
                })
              }),
              v()(u()(r), '_renderAppealsStatus', function () {
                var e = r.props,
                  t = e.note.can_appeal,
                  a = e.showTweet,
                  n = O.a.createElement(
                    F.a.I18NFormatMessage,
                    { $i18n: 'c5c4d000' },
                    O.a.createElement(
                      R.b,
                      { onPress: r._handleOpenAppealsModal, withInteractiveStyling: !0, withUnderline: !0 },
                      F.a.c8259b73,
                    ),
                  )
                return r.state.appealRequested
                  ? O.a.createElement(Rt.a, {
                      Icon: Z.a,
                      action: { label: ba, link: 'https://twitter.github.io/birdwatch/additional-review' },
                      headline: fa,
                      type: 'success',
                    })
                  : t
                  ? O.a.createElement(R.b, { color: 'gray700', size: 'subtext2', style: a && Oa.noteWithQT }, n)
                  : void 0
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
                    o = r.created_at,
                    i = r.rating,
                    c = r.rating_status,
                    l = r.rating_survey,
                    s = r.helpful_tags,
                    u = void 0 === s ? [] : s,
                    d = r.not_helpful_tags,
                    p = void 0 === d ? [] : d,
                    f = r.rest_id,
                    b = r.data_v1,
                    m = r.tweetId,
                    h = r.tweet,
                    y = n.showPivot,
                    v = n.showRating,
                    g = n.showTweet,
                    w = this.context.featureSwitches,
                    E = m || (null == h ? void 0 : h.rest_id),
                    _ = (null == b || null === (e = b.summary) || void 0 === e ? void 0 : e.text) || '',
                    S = (null == b || null === (t = b.summary) || void 0 === t ? void 0 : t.entities) || [],
                    C = (null == i ? void 0 : i.data_v1) || {},
                    T = (null == i ? void 0 : i.data_v2) || {},
                    j = 2 === (null == i ? void 0 : i.version),
                    A = j ? T : C,
                    I = Object(P.a)(A),
                    x = (w.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && I) || j,
                    D =
                      (w.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        w.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      v,
                    k = w.isTrue('responsive_web_birdwatch_appeals_enabled') && this.state.appealsRequestOpen,
                    B = this.props.note.birdwatch_profile,
                    H = (null == B ? void 0 : B.alias) || '',
                    F = (null == B ? void 0 : B.badges) || [],
                    z = function () {
                      return a.setState({ noteDetailsOpen: !1 })
                    }
                  return O.a.createElement(Ce.a, null, function (e) {
                    var t = e.windowWidth
                    return O.a.createElement(
                      L.a,
                      { key: f, style: Oa.noteContainer },
                      k && a._renderAppealsModal(),
                      O.a.createElement(
                        L.a,
                        { style: Oa.noteTopContainer },
                        g && E
                          ? O.a.createElement(
                              L.a,
                              { style: Oa.tweetContainer },
                              O.a.createElement(jt.a, { isCondensed: !0, tweetId: E }),
                            )
                          : null,
                        O.a.createElement(
                          L.a,
                          { style: [Oa.noteTop, g && Oa.noteWithQT] },
                          O.a.createElement(
                            L.a,
                            { style: Oa.noteBody },
                            O.a.createElement(
                              Dt.a,
                              { style: Oa.noteInfoMiddots },
                              (function (e) {
                                switch (e) {
                                  case ha:
                                    return wa(Oa.iconGreen, aa)
                                  case ya:
                                    return wa(Oa.iconRed, ra)
                                  case va:
                                    return wa(Oa.iconGray, na)
                                  default:
                                    return null
                                }
                              })(c),
                              t >= M.a.theme.breakpoints.medium ? ga(c, u, p) : null,
                              o
                                ? O.a.createElement(kt.a, { style: [Oa.ratingInfoItem, Oa.timestamp], timestamp: o })
                                : null,
                            ),
                            t < M.a.theme.breakpoints.medium
                              ? O.a.createElement(Dt.a, { style: Oa.noteInfoMiddots }, ga(c, u, p))
                              : null,
                            O.a.createElement(
                              L.a,
                              { style: Oa.noteTextSection },
                              O.a.createElement(At.a, {
                                entities: S,
                                onEntityClick: a._scribeOnClick('link'),
                                text: _,
                              }),
                            ),
                          ),
                          O.a.createElement(N.a, { renderActionMenu: a._renderCurationActionMenu, style: Oa.caret }),
                        ),
                        D
                          ? O.a.createElement(
                              L.a,
                              { style: Oa.ratingContainer },
                              x
                                ? O.a.createElement(ct, { noteId: f, rating: T, ratingSurvey: l })
                                : O.a.createElement(Ee, { noteId: f, rating: C }),
                            )
                          : null,
                        w.isTrue('responsive_web_birdwatch_appeals_enabled') ? a._renderAppealsStatus() : null,
                      ),
                      y &&
                        E &&
                        w.isTrue('responsive_web_birdwatch_rating_participant_enabled') &&
                        O.a.createElement(
                          Bt.a,
                          null,
                          O.a.createElement(
                            R.b,
                            {
                              link: '/i/birdwatch/t/'.concat(E),
                              onPress: a._scribeOnClick('pivot'),
                              style: [Oa.pivot, g && Oa.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            ta,
                          ),
                        ),
                      a.state.noteDetailsOpen &&
                        O.a.createElement(Tt, {
                          alias: H,
                          closeNoteDetails: z,
                          created_at: o,
                          rest_id: f,
                          userBadges: F,
                        }),
                    )
                  })
                },
              },
            ]),
            a
          )
        })(O.a.Component)
      v()(Ea, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), v()(Ea, 'contextType', C.a)
      var Oa = M.a.create(function (e) {
          return {
            caret: { display: 'flex', alignSelf: 'flex-start', flex: 1, flexBasis: '0%', flexDirection: 'row-reverse' },
            classification: { paddingRight: e.spaces.space4 },
            icon: {
              height: e.spaces.space12,
              paddingBottom: e.spaces.space2,
              paddingRight: e.spaces.space8,
              width: e.spaces.space12,
            },
            iconAppeals: {
              height: e.spaces.space20,
              width: e.spaces.space20,
              paddingTop: e.spaces.space4,
              paddingRight: e.spaces.space20,
            },
            iconGreen: { color: e.colors.green500 },
            iconGray: { color: e.colors.gray700 },
            iconRed: { color: e.colors.red500 },
            infoItemContainer: { paddingHorizontal: 0 },
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
            noteTopContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            noteWithQT: { paddingLeft: e.spaces.space12 },
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
        _a = function (e) {
          return O.a.createElement(Ht.a, { style: [Oa.icon, e] })
        },
        Sa = {
          accessibilityLabel: oa,
          containerStyle: Oa.infoItemContainer,
          items: [
            { label: '', decoration: O.a.createElement(Ft.a, { style: Oa.iconAppeals }), description: la },
            { label: '', decoration: O.a.createElement(Xt, { style: Oa.iconAppeals }), description: sa },
            { label: '', decoration: O.a.createElement(qt.a, { style: Oa.iconAppeals }), description: ua },
          ],
        },
        Ca = dt(Ea)
      t.a = Ca
    },
    b5s6: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('m3Bd'),
        i = a.n(o),
        c = a('ERkP'),
        l = a.n(c),
        s = a('v6aA'),
        u = a('XOJV'),
        d = a('eSoz'),
        p = a('rxPX'),
        f = a('0KEI'),
        b = function (e, t) {
          return t.tweetId
        },
        m = function (e, t) {
          var a = t.tweetId,
            n = a && u.a.select(e, a)
          return n ? Object(d.g)(e, n) : void 0
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { community: m, hydratedTweet: u.a.createHydratedTweetSelector(b) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        y = a('YeIG'),
        v = a('uCxL'),
        g = a('x5Pi'),
        w = h(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            c =
              (e.tweetId,
              i()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = l.a.useContext(s.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            f = null == o ? void 0 : o.community_id_str
          l.a.useEffect(
            function () {
              f && Object(y.a)(t) && n(f).catch(a())
            },
            [t, f, a, n],
          )
          var b = d.isTrue('responsive_web_alt_text_badge_enabled'),
            m = o && Object(g.f)(o, p, t),
            h = m && Object(g.e)(m),
            w = d.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            v.a,
            r()({}, c, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: b,
              socialContextProps: h,
              tweet: o,
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
          return O
        })
      var n = a('ddV6'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Qwev'),
        l = a('v6aA'),
        s = a('9StO'),
        u = a('vZpt'),
        d = a('L5MV'),
        p = a('MvLc'),
        f = a('rxPX'),
        b = a('0KEI'),
        m = Object(f.a)()
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
        h = a('3XMw'),
        y = a.n(h),
        v = a('5FtR'),
        g = a('VS6U'),
        w = a('nymP'),
        E = y.a.ff692d63,
        O = function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.fetchShowAliasSelfSelect,
            n = e.fetchUserAlias,
            o = e.history,
            p = e.showAliasSelfSelect,
            f = e.userAlias,
            b = i.a.useContext(l.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            m = i.a.useState(!0),
            h = r()(m, 2),
            y = h[0],
            O = h[1]
          i.a.useEffect(
            function () {
              n()
                .then(function () {
                  return O(!1)
                })
                .catch(t())
            },
            [t, n],
          ),
            i.a.useEffect(
              function () {
                a().catch(t())
              },
              [t, a],
            )
          var _ = function (e) {
            n()
              .then(function () {
                return O(!1)
              })
              .catch(t())
          }
          return i.a.createElement(g.a, {
            TabBar: d.a,
            history: o,
            logoButton: i.a.createElement(i.a.Fragment, null),
            primaryContent: y
              ? i.a.createElement(c.a, { size: 'large' })
              : f
              ? i.a.createElement(v.a, { to: '/i/birdwatch/u/'.concat(f) })
              : b && p
              ? i.a.createElement(s.a, { onAliasSelected: _ })
              : i.a.createElement(w.a, null),
            sidebarContent: i.a.createElement(u.a, null),
            title: E,
            withTweetButton: !1,
          })
        },
        _ = m(O)
      t.default = _
    },
    eqZz: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        o = a('3XMw'),
        i = a.n(o),
        c = a('B/qP'),
        l = a('MWbm'),
        s = a('j7Bv'),
        u = a('t62R'),
        d = a('rHpw'),
        p = i.a.c57760e9,
        f = i.a.c45ef9c1,
        b = i.a.g29805f5,
        m = i.a.b1056323,
        h = function () {
          return r.a.createElement(c.a, { style: y.innerIconColor })
        },
        y = d.a.create(function (e) {
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
          Top10Author: { badgeStyle: y.goldAward, contributorText: b, badgeText: p },
          Top10Rater: { badgeStyle: y.goldAward, contributorText: b, badgeText: f },
          Top25Author: { badgeStyle: y.silverAward, contributorText: m, badgeText: p },
          Top25Rater: { badgeStyle: y.silverAward, contributorText: m, badgeText: f },
        }
      t.a = function (e) {
        var t = e.badgeType,
          a = v[t],
          n = a.badgeStyle,
          o = a.badgeText,
          i = a.contributorText
        return r.a.createElement(
          l.a,
          { style: y.awardSection },
          r.a.createElement(s.a, { Icon: h, size: 'large', style: [y.ratingAward, n] }),
          r.a.createElement(u.b, { style: y.ratingAwardText, weight: 'bold' }, i),
          r.a.createElement(u.b, null, o),
        )
      }
    },
    fBGZ: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M23.53 15.155c0 .716-.58 1.296-1.296 1.296h-4.128c-.034-.144-.077-.29-.136-.425-.05-.145-.102-.29-.17-.426-.444-.948-1.16-1.74-2.082-2.304-.12-.085-.247-.162-.375-.213-.12-.077-.247-.136-.384-.188.118-.18.255-.34.408-.495.86-.853 2.098-1.322 3.497-1.322h.017c2.738 0 4.648 1.68 4.648 4.077zM21.398 7.77c0 .682-.162 1.21-.478 1.578-.52.588-1.322.665-2.038.665-.725 0-1.527-.077-2.038-.665-.435-.495-.58-1.262-.435-2.328.195-1.5 1.116-2.396 2.464-2.396 1.34 0 2.26.895 2.465 2.396.032.264.058.52.058.75zm-9.408 4.52c-.084 0-.17 0-.246.01.077.008.162.008.24.008.084 0 .178 0 .263-.01-.085-.008-.17-.008-.256-.008z',
            }),
            i.a.createElement('path', {
              d: 'M14.806 9.8c0 .768-.18 1.356-.537 1.765-.496.57-1.255.708-1.98.733-.017 0-.026.01-.043 0-.085-.01-.17-.01-.256-.01s-.17 0-.246.01c-.742-.017-1.535-.136-2.047-.733-.486-.554-.64-1.416-.478-2.618.23-1.68 1.26-2.686 2.762-2.686s2.54 1.007 2.763 2.687c.044.307.06.588.06.853zm2.43 8.16c0 .786-.63 1.417-1.416 1.417H8.145c-.776 0-1.416-.63-1.416-1.416 0-1.176.46-2.276 1.287-3.103.972-.972 2.405-1.492 3.974-1.5.922 0 1.75.16 2.466.468.136.05.264.11.384.188.128.06.256.128.375.213.563.358 1.032.82 1.373 1.373.085.135.162.28.23.425.068.136.12.28.17.426.163.47.248.974.248 1.51zM.47 15.155c0 .716.58 1.296 1.296 1.296h4.128c.034-.144.077-.29.136-.425.05-.145.102-.29.17-.426.444-.948 1.16-1.74 2.082-2.304.12-.085.247-.162.375-.213.12-.077.247-.136.384-.188-.118-.18-.255-.34-.408-.495-.86-.853-2.098-1.322-3.497-1.322h-.017c-2.746 0-4.648 1.68-4.648 4.077zM2.602 7.77c0 .682.162 1.21.478 1.578.52.588 1.322.665 2.038.665.725 0 1.527-.077 2.038-.665.435-.495.58-1.262.435-2.328-.204-1.5-1.125-2.397-2.472-2.397-1.34 0-2.26.895-2.465 2.396-.034.264-.05.52-.05.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    hiGS: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            i.a.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    hxu0: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(c.a.Consumer, null, function (a) {
            return i.a.createElement(e, r()({}, t, { isInSidebar: a }))
          })
        }
      }
    },
    'iCa+': function (e, t, a) {
      'use strict'
      a.r(t)
      a('WNMA'), a('KqXw'), a('MvUL')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('3XMw'),
        i = a.n(o),
        c = a.p + 'birdwatch_note_live.b1a67015.png',
        l = a('aITJ'),
        s = a('t62R'),
        u = a('feu+'),
        d = a('rHpw'),
        p = a('U+bB'),
        f = a('MWbm'),
        b = i.a.a05667aa,
        m = i.a.j5a1d85a,
        h = i.a.ace99891,
        y = function () {
          return r.a.createElement(p.a, { source: c, style: v.image })
        },
        v = d.a.create(function (e) {
          return { content: { marginVertical: e.spaces.space16 }, image: { height: '189px', width: '152px' } }
        })
      t.default = function (e) {
        var t = e.history,
          a = e.match.params.tweetId,
          n = r.a.createElement(f.a, null, r.a.createElement(s.b, null, b))
        return r.a.createElement(u.a, {
          actionLabel: m,
          contentStyle: v.content,
          graphic: y,
          graphicDisplayMode: 'illustration',
          headline: h,
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
    mQYW: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchNotesUserScreen', function () {
          return ye
        })
      var n = a('ddV6'),
        r = a.n(n),
        o = (a('z84I'), a('uFXj'), a('ERkP')),
        i = a.n(o),
        c = a('v6aA'),
        l = a('9StO'),
        s = a('eqZz'),
        u = a('97Jx'),
        d = a.n(u),
        p = a('m3Bd'),
        f = a.n(p),
        b = a('ZD0R'),
        m = a('xSpP'),
        h = a('rxPX'),
        y = function (e, t) {
          var a = t.noteId
          return m.a.select(e, a)
        },
        v = Object(h.a)().propsFromState(function () {
          return { note: y }
        })(function (e) {
          var t = e.note,
            a = (e.noteId, f()(e, ['note', 'noteId']))
          return t ? i.a.createElement(b.a, d()({ note: t }, a)) : null
        }),
        g = a('vZpt'),
        w = a('L5MV'),
        E = (a('WNMA'), a('KqXw'), a('MvLc')),
        O = (a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('KEM+')),
        _ = a.n(O),
        S = a('wAC9')
      function C(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(a), !0).forEach(function (t) {
                _()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : C(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var j = a('hqKg'),
        A = a('0KEI'),
        I = function (e, t) {
          return t.match.params.alias
        },
        x = function (e, t) {
          return Object(j.createSelector)(I, function (e) {
            return e
              ? (function (e) {
                  return Object(S.a)({
                    contextSuffix: 'BIRDWATCH_CONTRIBUTOR_NOTES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Birdwatch.fetchBirdwatchContributorNotesSlice
                    },
                    getEndpointParams: function (t) {
                      return T(T({}, t), {}, { alias: e })
                    },
                    sliceKey: 'birdwatchContributorNotesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        P = function (e, t) {
          return E.p(e, I(0, t))
        },
        L = function (e, t) {
          return E.o(e, I(0, t))
        },
        R = function (e, t) {
          return E.v(e)
        },
        D = Object(h.a)()
          .propsFromState(function () {
            return {
              alias: I,
              notesSlice: x(),
              ratingsData: P,
              contributorBadgeData: L,
              showAliasSelfSelect: R,
              userAlias: E.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchBirdwatchProfile: E.g,
              fetchShowAliasSelfSelect: E.j,
              fetchUserAlias: E.l,
            }
          }),
        k = a('W6+M'),
        B = a('BcsE'),
        N = a('yoO3'),
        M = a('7JQg'),
        H = a('VS6U'),
        F = a('FS1z'),
        z = a('aITJ'),
        W = a('nymP'),
        U = a('MWbm'),
        K = a('t62R'),
        V = a('FIs5'),
        X = a('MtXG'),
        q = a('0yYu'),
        G = a('/yvb'),
        Z = a('j7Bv'),
        Q = a('6vad'),
        Y = a('cHvH'),
        J = a('rHpw'),
        $ = a('3XMw'),
        ee = a.n($),
        te = a('B/qP'),
        ae = a('6s7X'),
        ne = a('ms2t'),
        re = ee.a.ff692d63,
        oe = ee.a.ab28945b,
        ie = ee.a.jaf0d42c,
        ce = ee.a.fe27c1e1,
        le = ee.a.b8b34f54,
        se = ee.a.fd284b08,
        ue = ee.a.ff746f63,
        de = ee.a.hc19704b,
        pe = ee.a.j44125ee,
        fe = ee.a.da55067b,
        be = i.a.createElement(
          ee.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          i.a.createElement(K.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, ee.a.j1a30557),
        ),
        me = { label: de, preferredHorizontalOrientation: 'start' },
        he = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        ye = function (e) {
          var t = i.a.useContext(c.a).featureSwitches,
            a = e.alias,
            n = e.contributorBadgeData,
            o = e.createLocalApiErrorHandler,
            u = e.fetchBirdwatchProfile,
            d = e.fetchShowAliasSelfSelect,
            p = e.fetchUserAlias,
            f = e.history,
            b = e.notesSlice,
            m = e.ratingsData,
            h = e.showAliasSelfSelect,
            y = e.userAlias,
            E = i.a.useState(h),
            O = r()(E, 2),
            _ = O[0],
            S = O[1],
            C = y === a
          i.a.useEffect(
            function () {
              d().catch(o())
            },
            [o, d],
          ),
            i.a.useEffect(
              function () {
                a && u(a).catch(o())
              },
              [o, u, a],
            ),
            i.a.useEffect(
              function () {
                p().catch(o())
              },
              [o, p],
            ),
            i.a.useEffect(
              function () {
                S(h)
              },
              [h],
            )
          var T,
            j,
            A,
            I,
            x,
            P,
            L,
            R,
            D,
            $ = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            de = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            ye = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            ge = i.a.useMemo(
              function () {
                return { page: 'birdwatch', section: $ ? 'user_notes_participant' : 'user_notes' }
              },
              [$],
            ),
            we = i.a.createElement(V.a, { header: pe, message: fe }),
            Ee = i.a.createElement(W.a, null),
            Oe = function (e) {
              return i.a.createElement(
                U.a,
                { key: e },
                i.a.createElement(v, { noteId: e, showPivot: C, showRating: !1, showTweet: !0 }),
                i.a.createElement(q.a, null),
              )
            },
            _e = function () {
              return C ? Ee : we
            },
            Se = C ? re : oe,
            Ce = ye && _ && C,
            Te = ye ? void 0 : '@'.concat(a)
          return i.a.createElement(
            M.b,
            { namespace: ge },
            i.a.createElement(
              N.a,
              null,
              i.a.createElement(H.a, {
                TabBar: w.a,
                backLocation: '/i/birdwatch',
                history: f,
                logoButton: i.a.createElement(i.a.Fragment, null),
                primaryContent: Ce
                  ? i.a.createElement(l.a, {
                      onAliasSelected: function (e) {
                        f.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((j = null == m ? void 0 : m.helpful),
                    (A = null == m ? void 0 : m.somewhatHelpful),
                    (I = null == m ? void 0 : m.notHelpful),
                    (x = void 0 !== j),
                    (P = x && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (L = n || []),
                    (R = i.a.createElement(ae.a, { style: ve.badgeStandingIcon })),
                    (D = i.a.createElement(G.a, { hoverLabel: me, icon: R, link: he, style: ve.badgeStandingButton })),
                    i.a.createElement(
                      U.a,
                      null,
                      z.b.isTwitterApp() &&
                        i.a.createElement(
                          U.a,
                          { style: ve.birdwatchProfileContainer },
                          i.a.createElement(
                            K.b,
                            { numberOfLines: 1, size: 'headline1', style: ve.birdwatchProfileTitle, weight: 'bold' },
                            Se,
                          ),
                          i.a.createElement(q.a, null),
                        ),
                      ye &&
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(Z.a, {
                            Icon: ne.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ve.genericBirdwatchProfileIcon,
                          }),
                          i.a.createElement(Q.b, { style: ve.profileText, text: Object(k.a)(a) }),
                          i.a.createElement(K.b, { color: 'gray700', style: ve.birdwatchAliasDisclaimerText }, be),
                          i.a.createElement(q.a, null),
                        ),
                      P &&
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(Q.b, { rightControl: D, text: se }),
                          i.a.createElement(
                            U.a,
                            { style: ve.awardsContainer },
                            L.length > 0
                              ? i.a.createElement(Y.a, null, function (e) {
                                  var t = e.windowWidth
                                  return i.a.createElement(
                                    U.a,
                                    {
                                      style:
                                        t >= J.a.theme.breakpoints.medium
                                          ? ve.badgeContainerLarge
                                          : ve.badgeContainerSmall,
                                    },
                                    L &&
                                      L.map(function (e, t) {
                                        return i.a.createElement(s.a, { badgeType: e, key: t })
                                      }),
                                  )
                                })
                              : i.a.createElement(
                                  U.a,
                                  { style: ve.awardSection },
                                  i.a.createElement(Z.a, {
                                    Icon: function () {
                                      return i.a.createElement(te.a, { style: ve.noAward })
                                    },
                                    size: 'large',
                                    style: [ve.ratingAward, ve.noAwardThumbnail],
                                  }),
                                  i.a.createElement(K.b, { size: 'subtext1', style: ve.noAwardText }, ue),
                                ),
                          ),
                        ),
                      x &&
                        C &&
                        i.a.createElement(
                          U.a,
                          { style: ve.ratingsContainer },
                          i.a.createElement(K.b, { style: ve.ratingsReceived, weight: 'bold' }, le),
                          i.a.createElement(
                            U.a,
                            { style: ve.ratingNumbers },
                            Object(B.a)(j)
                              ? i.a.createElement(
                                  U.a,
                                  { style: ve.helpfulStats },
                                  (function (e) {
                                    return i.a.createElement(
                                      X.a,
                                      null,
                                      i.a.createElement(
                                        ee.a.I18NFormatMessage,
                                        { $i18n: 'g6ea1d54' },
                                        i.a.createElement(X.a.Value, null, ee.a.b5eb23f9({ count: e })),
                                        i.a.createElement(X.a.Label, null, ee.a.ebecb73c),
                                      ),
                                    )
                                  })(j),
                                )
                              : null,
                            de && Object(B.a)(A)
                              ? i.a.createElement(
                                  U.a,
                                  { style: ve.helpfulStats },
                                  (function (e) {
                                    return i.a.createElement(
                                      X.a,
                                      null,
                                      i.a.createElement(
                                        ee.a.I18NFormatMessage,
                                        { $i18n: 'b93058db' },
                                        i.a.createElement(X.a.Value, null, ee.a.i1f57cc4({ count: e })),
                                        i.a.createElement(X.a.Label, null, ee.a.e8907cd9),
                                      ),
                                    )
                                  })(A),
                                )
                              : null,
                            Object(B.a)(I)
                              ? ((T = I),
                                i.a.createElement(
                                  X.a,
                                  null,
                                  i.a.createElement(
                                    ee.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    i.a.createElement(X.a.Value, null, ee.a.d551bc31({ count: T })),
                                    i.a.createElement(X.a.Label, null, ee.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      b
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(Q.b, { text: C ? ie : ce }),
                            i.a.createElement(F.a, { module: b, noItemsRenderer: _e, renderer: Oe }),
                          )
                        : null,
                    )),
                sidebarContent: i.a.createElement(g.a, null),
                subtitle: Te,
                title: Se,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ve = J.a.create(function (e) {
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
        ge = D(ye)
      t.default = ge
    },
    nIpi: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchDownloadDataScreen', function () {
          return B
        })
      a('2G9S'), a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('vZpt'),
        i = a('L5MV'),
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
        f = a('89Im'),
        b = a('tI3i'),
        m = a.n(b),
        h = a('yoO3'),
        y = a('VS6U'),
        v = a('MWbm'),
        g = a('t62R'),
        w = a('/yvb'),
        E = a('0yYu'),
        O = a('6vad'),
        _ = a('rHpw'),
        S = a('3XMw'),
        C = a.n(S),
        T = C.a.cb1adfa0,
        j = C.a.e72533f5,
        A = C.a.g652cada,
        I = C.a.g4d71b5e,
        x = C.a.b8a27fe1,
        P = C.a.j1c99e0f,
        L = C.a.i6f69313,
        R = C.a.h786cd79,
        D = C.a.d0fe8052,
        k = r.a.createElement(
          g.b,
          { color: 'gray700', size: 'subtext2' },
          r.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            r.a.createElement(
              g.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              C.a.g0cacb73,
            ),
          ),
        ),
        B = function (e) {
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
            b = null == d || null === (t = d.notes) || void 0 === t ? void 0 : t.urls,
            _ = null == b ? void 0 : b.length,
            S = null == d || null === (a = d.ratings) || void 0 === a ? void 0 : a.urls,
            B = null == S ? void 0 : S.length,
            M = null == d || null === (n = d.notes) || void 0 === n ? void 0 : n.created_at,
            H = function (e, t, a, n) {
              return (
                m()(void 0 !== a, 'totalFiles must be defined'),
                r.a.createElement(
                  v.a,
                  { key: t, style: [N.fileSection, t > 1 && N.fileSectionNotFirst] },
                  r.a.createElement(
                    g.b,
                    null,
                    r.a.createElement(C.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: a }),
                  ),
                  r.a.createElement(w.a, {
                    icon: r.a.createElement(f.a, null),
                    link: e,
                    onPress:
                      ((o = ''.concat(n, '_').concat(t)),
                      function () {
                        c.scribeAction('click_'.concat(o))
                      }),
                    type: 'brandText',
                  }),
                )
              )
              var o
            },
            F = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                v.a,
                { style: N.headerWrapper },
                r.a.createElement(g.b, { size: 'title4', style: N.textSection, weight: 'heavy' }, j),
                r.a.createElement(g.b, { color: 'gray700', style: N.textSection }, A),
                r.a.createElement(
                  g.b,
                  { color: 'gray700' },
                  I,
                  r.a.createElement(
                    g.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    x,
                  ),
                  '.',
                ),
              ),
              r.a.createElement(E.a, null),
              r.a.createElement(O.b, { text: P }),
              b && (null == b ? void 0 : b.length) > 0
                ? b.map(function (e, t) {
                    return H(e, t + 1, _, 'notes')
                  })
                : r.a.createElement(g.b, { color: 'gray700', style: N.emptyData }, R),
              r.a.createElement(E.a, null),
              r.a.createElement(O.b, { text: L }),
              S && (null == S ? void 0 : S.length) > 0
                ? S.map(function (e, t) {
                    return H(e, t + 1, B, 'ratings')
                  })
                : r.a.createElement(g.b, { color: 'gray700', style: N.emptyData }, D),
              r.a.createElement(E.a, null),
              r.a.createElement(
                v.a,
                { style: N.footerText },
                r.a.createElement(
                  g.b,
                  { color: 'gray700', style: N.dateGenerated },
                  r.a.createElement(C.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((p = M),
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
                k,
              ),
            )
          return r.a.createElement(
            h.a,
            null,
            r.a.createElement(y.a, {
              TabBar: i.a,
              history: u,
              logoButton: r.a.createElement(r.a.Fragment, null),
              primaryContent: F,
              sidebarContent: r.a.createElement(o.a, null),
              title: T,
              withTweetButton: !1,
            }),
          )
        },
        N = _.a.create(function (e) {
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
        M = p(B)
      t.default = M
    },
    nymP: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        o = a('v6aA'),
        i = a('FIs5'),
        c = a('3XMw'),
        l = a.n(c),
        s = { external: !0, pathname: 'https://twitter.github.io/birdwatch/writing-notes' },
        u = l.a.i859a9d3,
        d = l.a.ff3e0be2,
        p = l.a.e9f1fbcb,
        f = l.a.db08295d,
        b = l.a.f4d67927,
        m = l.a.eae6767a
      t.a = function () {
        var e = r.a.useContext(o.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return r.a.createElement(i.a, {
          buttonLink: e ? s : '/i/flow/join-birdwatch',
          buttonText: e ? u : d,
          header: e ? p : f,
          message: e ? m : b,
        })
      }
    },
    owBv: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('lTXM'),
        i = a('m3Bd'),
        c = a.n(i),
        l = (a('z84I'), a('ho0z'), a('YeIG')),
        s = a('kLu5'),
        u = a('7MdP')
      function d(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : d(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var f = function (e) {
          var t = Object(s.b)(),
            a = (function (e) {
              if ('SegmentedTimelines' === e.body.__typename) {
                var t = e.body.timelines.map(function (e) {
                  return {
                    graphQLTimelineId: e.timeline.id,
                    id: e.id,
                    labelText: e.labelText,
                    scribeConfig: Object(l.a)(e.scribeConfig) ? void 0 : p({}, e.scribeConfig),
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
                  r = a.topic,
                  o = c()(a, ['__typename', 'facepile', 'topic']),
                  i = n && Object(u.b)(e, n),
                  l = Object(u.a)(e, r)
                return p(p({}, o), {}, { topicId: l, facepile: i })
              }
            })(t, e),
            r = (function (e, t) {
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
              navBar: r.navBar && r.navBar,
              title: r.title,
              subtitle: r.subtitle,
              scribeConfig: p({}, e.scribeConfig),
            },
          }
        },
        b = a('WpDa'),
        m = a('IcAo')
      function h(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : h(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
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
              : Object(b.a)(o.c),
          r = f(e),
          i = r.globalObjects,
          c = r.pageConfiguration
        return y(y({}, n), {}, { globalObjects: Object(m.a)(i, n.globalObjects), pageConfiguration: c })
      }
    },
    uw5z: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return D
        })
      var n,
        r = a('ERkP'),
        o = a.n(r),
        i = a('v6aA'),
        c = a('vZpt'),
        l = a('L5MV'),
        s = (a('WNMA'), a('KqXw'), a('owBv')),
        u = a('ZNT5'),
        d = a('hqKg'),
        p = a('rxPX'),
        f = function (e, t) {
          var a, n
          return (
            (null === (a = t.match) || void 0 === a || null === (n = a.params) || void 0 === n ? void 0 : n.tabId) ||
            void 0
          )
        },
        b = function () {
          return Object(d.createSelector)(f, function (e) {
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
          return { module: b(), selectedTabId: f }
        }),
        h = (a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('KEM+')),
        y = a.n(h),
        v = a('8UdT'),
        g = a('ezF+'),
        w =
          (a('JtPf'),
          a('7x/C'),
          a('87if'),
          a('lTEL'),
          a('kYxP'),
          {
            loader: function () {
              return a.e(223).then(a.bind(null, 'SdtT'))
            },
            loaderKey: 'pivotLabelLoader',
            strategy: a('XBtf').a.Critical,
          }),
        E = g.e(w),
        O = a('S/Qv'),
        _ = a('5Y9N'),
        S = a('Yy//')
      function C(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(a), !0).forEach(function (t) {
                y()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : C(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var j =
          ((n = {}),
          y()(n, v.b.Label, E),
          y()(n, v.b.Message, Object(O.a)({})),
          y()(n, v.b.Tweet, Object(S.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          n),
        A = T(T({}, Object(_.a)({})), j),
        I = a('3XMw'),
        x = a.n(I),
        P = a('UZjl'),
        L = x.a.ha8209bb,
        R = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        D = function (e) {
          var t = o.a.useContext(i.a).featureSwitches,
            a = e.history,
            n = e.module,
            r = e.selectedTabId,
            s = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            u = o.a.useMemo(
              function () {
                var e = null != r ? r : 'global_timeline'
                return { page: 'birdwatch', section: s ? ''.concat(e, '_participant') : e }
              },
              [s, r],
            )
          return o.a.createElement(P.a, {
            TabBar: l.a,
            entryConfiguration: A,
            getTabLink: R,
            history: a,
            initialPageNamespace: u,
            logoButton: o.a.createElement(o.a.Fragment, null),
            module: n,
            selectedTabId: r,
            sidebarContent: o.a.createElement(c.a, null),
            timelinePrefix: 'birdwatch-',
            title: L,
            withTweetButton: !1,
          })
        },
        k = m(D)
      t.default = k
    },
    vZpt: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('ddV6'),
        i = a.n(o),
        c = (a('uFXj'), a('ERkP')),
        l = a.n(c),
        s = a('v6aA'),
        u = a('G6rE'),
        d = a('rxPX'),
        p = a('0KEI'),
        f = function (e, t) {
          return u.e.select(e, '1319036828964454402')
        },
        b = Object(d.a)()
          .propsFromState(function () {
            return { birdwatchAccount: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: u.e.fetchManyIfNeeded,
            }
          }),
        m = a('FQwk'),
        h = a('MWbm'),
        y = a('t62R'),
        v = a('6vad'),
        g = a('/yvb'),
        w = a('h0NW'),
        E = a('rC8y'),
        O = a('rHpw'),
        _ = a('3XMw'),
        S = a.n(_),
        C = a('yygM'),
        T = a('QDet'),
        j = a('wz7L'),
        A = a('88ay'),
        I = S.a.de962615,
        x = S.a.cbfa448b,
        P = S.a.b171d7c4,
        L = '1319036828964454402',
        R = S.a.ab23a972,
        D = S.a.gfa725ae,
        k = S.a.eac7b6ab,
        B = S.a.b0381cfb,
        N = S.a.f0addddc,
        M = S.a.c68f3bcf,
        H = S.a.dfb1f498,
        F = l.a.createElement(
          y.b,
          null,
          l.a.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            l.a.createElement(
              y.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              S.a.b8a36128,
            ),
          ),
        ),
        z = O.a.create(function (e) {
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
        W = b(function (e) {
          var t = e.birdwatchAccount,
            a = e.createLocalApiErrorHandler,
            n = e.fetchUsersIfNeeded,
            o = l.a.useContext(s.a).featureSwitches,
            c = l.a.useState(null == t ? void 0 : t.following),
            u = i()(c, 2),
            d = u[0],
            p = u[1],
            f = o.isTrue('responsive_web_birdwatch_note_writing_enabled')
          l.a.useEffect(
            function () {
              n([L])
                .then(function (e) {
                  var t
                  e && p(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(a())
            },
            [a, n],
          )
          var b = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: I }),
              l.a.createElement(
                h.a,
                { style: [z.moduleBody, z.row] },
                l.a.createElement(y.b, { color: 'gray700', style: z.text }, x),
                l.a.createElement(
                  g.a,
                  { accessibilityLabel: P, link: '/i/flow/join-birdwatch', type: 'brandFilled' },
                  P,
                ),
              ),
            ),
            O = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: R }),
              l.a.createElement(
                h.a,
                null,
                l.a.createElement(A.b, { decoration: A.e, displayMode: 'UserCompact', userId: L, withFollowsYou: !0 }),
              ),
            ),
            _ = function (e) {
              return l.a.createElement(h.a, { style: z.valueItem }, l.a.createElement(y.b, { color: 'gray700' }, e))
            },
            S = {
              accessibilityLabel: D,
              items: [
                { label: '', decoration: l.a.createElement(C.a, { style: z.valueIcon }), description: _(k) },
                { label: '', decoration: l.a.createElement(T.a, { style: z.valueIcon }), description: _(B) },
                { label: '', decoration: l.a.createElement(j.a, { style: z.valueIcon }), description: _(N) },
              ],
            },
            W = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: D }),
              l.a.createElement(
                h.a,
                { style: z.valuesGroup },
                l.a.createElement(w.a, r()({}, S, { containerStyle: z.infoItemContainer })),
              ),
              l.a.createElement(
                h.a,
                { style: z.footer },
                l.a.createElement(E.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: M,
                  withBottomRadius: !0,
                }),
              ),
            ),
            U = l.a.createElement(
              h.a,
              { style: z.module },
              l.a.createElement(v.b, { text: H }),
              l.a.createElement(h.a, { style: z.moduleBody }, F),
            )
          return l.a.createElement(
            h.a,
            { accessibilityRole: 'complementary', style: z.root },
            f ? null : b,
            d ? null : O,
            W,
            U,
            l.a.createElement(
              h.a,
              { style: [z.module, z.transparentModule] },
              l.a.createElement(m.a, { textColor: 'gray700', withOverflow: !0 }),
            ),
          )
        })
      t.a = W
    },
    wz7L: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    xSpP: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return l
      })
      var n = a('oEOe'),
        r = a('MvLc'),
        o = a('3zvM'),
        i = a('lMB6'),
        c = Object(o.f)({ namespace: 'birdwatchContributorNotes' }),
        l = function (e) {
          return function (t, a, o) {
            var i = o.api
            return n.b(t, { request: i.Birdwatch.deleteNote, params: { note_id: e } })(
              { actionTypes: c.actionTypes.OPTIMISTIC_UPDATE, context: 'DELETE_NOTE' },
              function (t) {
                if (t) return [c.deleteOne(e), Object(r.d)(e)]
              },
            )
          }
        }
      t.a = i.a.register(c)
    },
    yygM: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka')
      function s(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 26 26' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M13 20.673c-.414 0-.75-.336-.75-.75V14.46c0-.414.336-.75.75-.75s.75.336.75.75v5.463c0 .414-.336.75-.75.75z',
            }),
            i.a.createElement('path', {
              d: 'M13 4.5c-4.687 0-8.5 3.813-8.5 8.5 0 3.424 2.037 6.494 5.19 7.83.094.04.196.067.306.067.414 0 .75-.336.75-.75 0-.31-.188-.575-.456-.69C7.685 18.36 6 15.826 6 13c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.825-1.683 5.358-4.288 6.454-.273.112-.467.38-.467.693 0 .414.336.75.75.75.105 0 .204-.022.294-.06C19.455 19.51 21.5 16.433 21.5 13c0-4.687-3.813-8.5-8.5-8.5zM13 3c-.414 0-.75-.34-.75-.757V.757C12.25.34 12.586 0 13 0s.75.34.75.757v1.486c0 .418-.336.757-.75.757zM3 13c0 .414-.34.75-.757.75H.757C.34 13.75 0 13.414 0 13s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zm23 0c0 .414-.34.75-.757.75h-1.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zM5.93 5.93c-.294.292-.77.29-1.067-.006l-1.05-1.05c-.296-.296-.298-.774-.005-1.066s.77-.29 1.066.005l1.05 1.05c.295.296.298.773.005 1.066zm16.262-2.122c.293.293.29.77-.005 1.066l-1.05 1.05c-.296.296-.774.3-1.067.006s-.29-.77.005-1.066l1.05-1.05c.297-.297.775-.3 1.067-.006zM17 22.75c0 .414-.34.75-.757.75H9.757c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h6.486c.418 0 .757.336.757.75zm-1 2.5c0 .414-.34.75-.757.75h-4.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h4.486c.418 0 .757.336.757.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 26, height: 26 }), (t.a = d)
    },
  },
])
//# sourceMappingURL=WIPED
