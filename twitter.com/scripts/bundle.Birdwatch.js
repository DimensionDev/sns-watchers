;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36, 167],
  {
    '/ZwF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchTweetNotesScreen', function () {
          return se
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('z84I'), n('uFXj'), n('ERkP')),
        i = n('v6aA'),
        c = n('ZD0R'),
        l = n('vZpt'),
        s = n('L5MV'),
        u = (n('WNMA'), n('KqXw'), n('MvLc')),
        d = n('XOJV'),
        p = n('G6rE'),
        f = n('rxPX'),
        b = n('0KEI'),
        m = function (e, t) {
          return t.match.params.tweetId
        },
        h = function (e, t) {
          var n = m(0, t)
          return n ? d.a.selectHydrated(e, n) : void 0
        },
        y = function (e, t) {
          return u.s(e, m(0, t))
        },
        v = function (e, t) {
          return u.x(e, m(0, t))
        },
        g = function (e, t) {
          return u.w(e, m(0, t))
        },
        w = Object(f.a)()
          .propsFromState(function () {
            return {
              ownNoteData: v,
              fetchStatus: g,
              loggedInUser: p.e.selectLoggedInUser,
              tweet: h,
              tweetId: m,
              notes: y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: u.k,
              fetchTweet: d.a.fetchOneIfNeeded,
              fetchUserAlias: u.l,
            }
          }),
        E = n('kGix'),
        O = n('3XMw'),
        _ = n.n(O),
        S = n('yoO3'),
        C = n('7JQg'),
        j = n('VS6U'),
        T = n('xZXe'),
        A = n('MWbm'),
        I = n('FIs5'),
        x = n('4zmP'),
        P = n('t62R'),
        L = n('htQn'),
        R = n('6vad'),
        D = n('0yYu'),
        k = n('/yvb'),
        B = n('Qwev'),
        N = n('rHpw'),
        M = n('Nh1N'),
        H = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        F = n.n(H),
        z = n('Lsrn'),
        W = n('k/Ka')
      function U(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                F()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var V = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(W.a)(
          'svg',
          K(
            K({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [z.a.root, e.style], viewBox: '0 0 24 24' },
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
      V.metadata = { width: 24, height: 24 }
      var X = V,
        q = _.a.h8335712,
        G = _.a.fe27c1e1,
        Z = _.a.c59107c3,
        Q = _.a.i859a9d3,
        Y = _.a.ib73f867,
        J = _.a.efd14e79,
        $ = _.a.d06b723c,
        ee = _.a.j0790071,
        te = _.a.j679dcda,
        ne = _.a.d4f03f72,
        re = _.a.d94e246a,
        ae = _.a.d5c203a5,
        oe = _.a.bd3f064b,
        ie = _.a.ia596d40,
        ce = _.a.deff0bdd,
        le = o.createElement(I.a, { buttonLink: '/i/birdwatch/about', buttonText: Q, header: Y }),
        se = function (e) {
          var t = o.useContext(i.a).featureSwitches,
            n = e.createLocalApiErrorHandler,
            r = e.fetchNotes,
            u = e.fetchStatus,
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
            O = o.useMemo(
              function () {
                return { page: 'birdwatch', section: g ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [g],
            ),
            _ = o.useState(h),
            I = a()(_, 2),
            N = I[0],
            H = I[1],
            F = function (e) {
              H(null)
            }
          o.useEffect(
            function () {
              v && (r(v).catch(n()), d(v).catch(n()))
            },
            [n, r, d, v],
          ),
            o.useEffect(
              function () {
                H(h)
              },
              [h],
            ),
            o.useEffect(
              function () {
                p().catch(n())
              },
              [n, p],
            )
          var z,
            W,
            U,
            K = o.createElement(
              A.a,
              { style: ue.appealsCallout },
              o.createElement(x.a, {
                Icon: M.a,
                action: { label: Q, link: 'https://twitter.github.io/birdwatch/additional-review' },
                headline: ae,
                text: oe,
                type: 'primary',
              }),
            ),
            V = o.createElement(
              A.a,
              { style: ue.actionModuleContainer },
              o.createElement(
                A.a,
                { style: ue.actionModule },
                w ? o.createElement(X, { style: ue.icon }) : o.createElement(M.a, { style: ue.icon }),
                o.createElement(P.b, { size: 'headline1', style: ue.header, weight: 'bold' }, w ? $ : ne),
                o.createElement(P.b, { color: 'gray700' }, w ? ee : re),
                w
                  ? o.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' } },
                      te,
                    )
                  : o.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/overview' } },
                      Q,
                    ),
              ),
            )
          return o.createElement(
            C.b,
            { namespace: O },
            o.createElement(
              S.a,
              null,
              o.createElement(j.a, {
                TabBar: s.a,
                backLocation: '/i/birdwatch',
                history: f,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent:
                  ((z = N || m.length),
                  (W = '/i/birdwatch/contribute/'.concat(v)),
                  (U =
                    t.isTrue('responsive_web_birdwatch_appeals_enabled') &&
                    (null == b ? void 0 : b.id_str) === (null == y ? void 0 : y.user.id_str)),
                  o.createElement(
                    L.a,
                    null,
                    o.createElement(
                      A.a,
                      { style: ue.contentWrapper },
                      o.createElement(
                        A.a,
                        { style: ue.withBottomBorder },
                        o.createElement(T.b, {
                          displayPromotedContent: !1,
                          tweetId: v,
                          withActions: !0,
                          withActionsDisabled: !0,
                          withBirdwatchPivots: !1,
                          withCurationMenu: !1,
                        }),
                      ),
                      z
                        ? o.createElement(
                            o.Fragment,
                            null,
                            N &&
                              o.createElement(
                                A.a,
                                null,
                                o.createElement(R.b, { text: q }),
                                o.createElement(c.a, { handleDelete: F, note: N }),
                              ),
                            !!m.length &&
                              o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(A.a, { style: ue.divider }),
                                o.createElement(R.b, { text: G }),
                                U ? K : V,
                                o.createElement(D.a, null),
                                m.map(function (e) {
                                  return o.createElement(
                                    o.Fragment,
                                    { key: e.rest_id },
                                    o.createElement(c.a, { note: e }),
                                    o.createElement(D.a, null),
                                  )
                                }),
                                g && !N
                                  ? o.createElement(
                                      A.a,
                                      { style: ue.actionModuleContainer },
                                      o.createElement(
                                        A.a,
                                        { style: ue.actionModule },
                                        o.createElement(P.b, { style: ue.improveText }, ie),
                                        o.createElement(
                                          k.a,
                                          { accessibilityLabel: ce, link: W, type: 'brandOutlined' },
                                          ce,
                                        ),
                                      ),
                                    )
                                  : null,
                              ),
                          )
                        : u === E.a.LOADING
                        ? o.createElement(B.a, { accessibilityLabel: J, size: 'large', style: ue.spinner })
                        : le,
                    ),
                  )),
                sidebarContent: o.createElement(l.a, null),
                title: Z,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ue = N.a.create(function (e) {
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
        de = w(se)
      t.default = de
    },
    '0SuV': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchPrinciples', function () {
          return A
        })
      n('MvUL'), n('KqXw'), n('7x/C'), n('lTEL'), n('kYxP')
      var r = n('ERkP'),
        a = (n('WNMA'), n('MvLc')),
        o = n('rxPX'),
        i = n('0KEI'),
        c = function (e, t) {
          return t.match.params.tweetId
        },
        l = function (e, t) {
          return a.x(e, c(0, t))
        },
        s = Object(o.a)()
          .propsFromState(function () {
            return { ownNoteData: l, tweetId: c }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: a.k,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form', component: 'values' }),
        u = n('3XMw'),
        d = n.n(u),
        p = n('5FtR'),
        f = n('aITJ'),
        b = n('MWbm'),
        m = n('t62R'),
        h = n('h0NW'),
        y = n('feu+'),
        v = n('rHpw'),
        g = n('yygM'),
        w = n('QDet'),
        E = n('wz7L'),
        O = d.a.gfa725ae,
        _ = d.a.c3d89aca,
        S = d.a.h7ad677b,
        C = d.a.eac7b6ab,
        j = d.a.b0381cfb,
        T = d.a.f0addddc,
        A = function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            a = e.fetchNotes,
            o = e.history,
            i = e.ownNoteData,
            c = e.tweetId,
            l = c ? '/i/birdwatch/'.concat(c, '/contribute_complete') : '/'
          r.useEffect(
            function () {
              c && a(c).catch(n())
            },
            [n, a, c],
          )
          var s = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            u = function (e) {
              return r.createElement(b.a, { style: I.valueItem }, r.createElement(m.b, { color: 'gray700' }, e))
            },
            d = {
              accessibilityLabel: O,
              items: [
                { label: '', decoration: r.createElement(g.a, null), description: u(C) },
                { label: '', decoration: r.createElement(w.a, null), description: u(j) },
                { label: '', decoration: r.createElement(E.a, null), description: u(T) },
              ],
            },
            v = r.createElement(b.a, { style: I.values }, r.createElement(h.a, d))
          return i
            ? r.createElement(p.a, { to: l })
            : r.createElement(y.a, {
                actionLabel: _,
                graphicDisplayMode: 'none',
                headline: S,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), c && o.replace('/i/birdwatch/contribute_form/'.concat(c))
                },
                onClose: function () {
                  s('close'), c && o.goBackThroughModals({ fallbackPath: '/i/status/'.concat(c) })
                },
                subtext: v,
                withCloseButton: !f.b.isTwitterApp(),
              })
        },
        I = v.a.create(function (e) {
          return {
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        x = s(A)
      t.default = x
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        b = n('rHpw'),
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          l()(n, e)
          var t = h(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(m.a, { style: v.root })
                },
              },
            ]),
            n
          )
        })(f.Component),
        v = b.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        b = n('3XMw'),
        m = n.n(b),
        h = n('rHpw'),
        y = n('+/1j'),
        v = n('MWbm')
      function g(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var w = m.a.e5b0063d,
        E = 0,
        O = (function (e) {
          l()(n, e)
          var t = g(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(E)), (E += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = w({ title: n })
                  return f.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: h.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.createElement(v.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.Component)
      t.a = O
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
          return re
        }),
        n.d(t, 'a', function () {
          return ie
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        b = n.n(f),
        m = n('AuHH'),
        h = n.n(m),
        y = n('KEM+'),
        v = n.n(y),
        g = n('97Jx'),
        w = n.n(g),
        E = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('ERkP')),
        O = n('6rlp'),
        _ = n('zh9S'),
        S = n('G6rE'),
        C = n('rxPX'),
        j = n('0KEI'),
        T = function (e, t) {
          return S.e.select(e, t.userId)
        },
        A = function (e, t) {
          return t.promotedContent
        },
        I = Object(C.a)()
          .propsFromState(function () {
            return { promotedContent: A, user: T }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: O.a,
              scribeAction: _.c,
            }
          }),
        x = n('I57f'),
        P = n('vMjK'),
        L = n('MWbm'),
        R = n('IG7M'),
        D = n('rHpw'),
        k = function (e) {
          var t = e.children,
            n = e.promotedContent,
            r = e.user
          return E.createElement(
            L.a,
            { style: B.decorationWrapper },
            t,
            E.createElement(R.a, {
              renderActionMenu: function (e) {
                return E.createElement(P.b, { onClose: e, promotedContent: n, user: r, view: 'follower' })
              },
              style: B.actionMenu,
            }),
          )
        },
        B = D.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        N = n('uIZp'),
        M = n('mN6z'),
        H = n('caTy'),
        F = n('3IPs'),
        z = n('Rp9C'),
        W = n('X04g'),
        U = n('Re5t'),
        K = n('TnY3'),
        V = n('hxu0'),
        X = n('v6aA'),
        q = n('7JQg'),
        G = n('IMA+'),
        Z = n('cFuS')
      function Q(e, t) {
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
            ? Q(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function J(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var $ = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? E.createElement(
              ae,
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
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: U.a.UserCompact,
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
          return E.createElement(x.a, { isFollowing: t, style: oe.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            r = e.userId
          return t !== r
            ? E.createElement(N.a, { promotedContent: n, size: 'small', style: oe.followButton, userId: r })
            : null
        },
        ne = function (e) {
          return E.createElement(k, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        re = function (e) {
          return E.createElement(R.a, {
            renderActionMenu: function (t) {
              return E.createElement(P.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ae = (function (e) {
          p()(n, e)
          var t = J(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.PROFILE_IMAGE_CLICK)
              }),
              v()(u()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  r = t.onClick,
                  a = t.screenName,
                  o = t.user,
                  i = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  r ? r({ user: o, state: i }) : n.push({ pathname: '/'.concat(a), state: i || void 0 })
              }),
              v()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.SCREEN_NAME_CLICK)
              }),
              v()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  a = t.userId
                n && r && r(W.a.ItemType.USER) && n({ user: { id: a, type: F.a.User } })
              }),
              v()(u()(e), '_scribeAction', function (t) {
                var n,
                  r = e.props,
                  a = r.promotedContent,
                  o = r.scribeAction,
                  i = r.scribeData,
                  c = r.scribeNamespace,
                  l = r.user,
                  s = r.userId,
                  u =
                    null == i || null === (n = i.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === W.a.ItemType.USER && e.id === s
                        }),
                  d = i.search_details,
                  p = { items: [Y(Y({}, u), z.a.getUserItem(l, a))], profile_id: s, search_details: d }
                o(Y(Y({}, c), t), p)
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(M.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarDecoration,
                    n = (e.bottomControl, e.cellClickable),
                    r =
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
                    c = a()(e, [
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
                    ? E.createElement(
                        G.a,
                        w()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: i.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: n ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: o
                            ? {
                                contextType: o.contextType,
                                text: o.text,
                                link: o.landingUrl ? Object(H.b)(o.landingUrl) : void 0,
                              }
                            : void 0,
                          withDarkerInteractiveBackground: r,
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
                    n = this.props,
                    r = n.displayMode,
                    a = n.followRequestReceived,
                    o = n.isAutoblocking,
                    i = n.isBlocking,
                    c = n.isDeviceFollowing,
                    l = n.isFollowing,
                    s = n.promotedContent,
                    u = n.screenName,
                    d = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: r,
                        followRequestReceived: a,
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
                    n = e.isBlockedBy,
                    r = e.isBlocking,
                    a = e.screenName
                  return e.userId && a && !(t && (n || r))
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
                    r = t.log,
                    a = t.promotedContent,
                    o = t.promotedItemId,
                    i = t.promotedItemType,
                    c = t.userId
                  a &&
                    r({
                      disclosureType: a.disclosure_type,
                      itemId: o || c,
                      itemType: i,
                      params: { event: e, impression_id: a.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    r = e.promotedContent,
                    a = e.promotedItemType,
                    o = e.shouldScribeImpression,
                    i = e.userId
                  if (r && a === Z.c.USER) {
                    var c = r.disclosure_type,
                      l = r.impression_id
                    n({
                      disclosureType: c,
                      itemId: i,
                      itemType: Z.c.USER,
                      params: { event: Z.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else o && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(E.Component)
      v()(ae, 'contextType', X.a), v()(ae, 'defaultProps', $.defaultProps)
      var oe = D.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ie = Object(K.a)(Object(V.a)(I($)))
      t.b = Object(q.c)({ element: 'user' })(ie)
    },
    '89Im': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('7x/C'), n('lTEL'), n('kYxP'), n('jwue'), n('+oxZ'), n('ERkP')),
        i = n.p + 'birdwatch_owl.9e2a1755.png',
        c = n('MvLc'),
        l = n('1YZw'),
        s = n('rxPX'),
        u = n('0KEI'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { aliasSelfSelectOptions: c.n }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchAliasSelfSelectOptions: c.f,
              selectAlias: c.m,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'alias_select' }),
        p = n('W6+M'),
        f = n('3XMw'),
        b = n.n(f),
        m = n('t62R'),
        h = n('h0NW'),
        y = n('feu+'),
        v = n('gSL+'),
        g = n('Qwev'),
        w = n('4zmP'),
        E = n('rHpw'),
        O = n('j7Bv'),
        _ = n('ms2t'),
        S = n('VwDm'),
        C = n('EQ/a'),
        j = n('U+bB'),
        T = n('MWbm'),
        A = b.a.f084f1cd,
        I = b.a.ja0ee36f,
        x = b.a.j761c248,
        P = b.a.h66bd30a,
        L = b.a.j48ab593,
        R = b.a.e17c80bc,
        D = b.a.d939cf16,
        k = b.a.a56f0c32,
        B = b.a.d17c59e4,
        N = b.a.i719f8e1,
        M = b.a.d0e190cd,
        H = b.a.e74a2cd5,
        F = b.a.g9677c6d,
        z = b.a.e4a6e006,
        W = b.a.f83d0446,
        U = function (e) {
          return o.createElement(m.b, { weight: 'bold' }, e)
        },
        K = function () {
          return o.createElement(j.a, { source: i, style: V.image })
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
        X = o.createElement(O.a, { Icon: _.a, color: 'neutral', size: 'large', style: V.aliasIcon }),
        q = {
          accessibilityLabel: A,
          containerStyle: V.infoItemContainer,
          items: [
            { label: U(L), decoration: o.createElement(_.a, { style: V.icon }), description: R },
            { label: U(D), decoration: o.createElement(S.a, { style: V.icon }), description: k },
            { label: U(B), decoration: o.createElement(C.a, { style: V.icon }), description: N },
          ],
        },
        G = d(function (e) {
          var t = e.addToast,
            n = e.aliasSelfSelectOptions,
            r = e.createLocalApiErrorHandler,
            i = e.fetchAliasSelfSelectOptions,
            c = e.onAliasSelected,
            l = e.selectAlias,
            s = o.useState(!0),
            u = a()(s, 2),
            d = u[0],
            f = u[1],
            b = o.useState(''),
            E = a()(b, 2),
            O = E[0],
            _ = E[1],
            S = o.useState(!1),
            C = a()(S, 2),
            j = C[0],
            A = C[1]
          o.useEffect(
            function () {
              i()
                .then(function (e) {
                  e && e[0] ? _(e[0]) : A(!0)
                })
                .catch(r())
            },
            [r, i],
          )
          var L,
            R,
            D = o.createElement(
              m.b,
              { color: 'normal', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              P,
            ),
            k = o.createElement(T.a, { style: V.values }, o.createElement(h.a, q)),
            B = o.createElement(y.a, {
              actionLabel: I,
              footer: D,
              graphic: K,
              graphicDisplayMode: 'illustration',
              headline: x,
              isFullHeightOnMobile: !0,
              onAction: function () {
                f(!1)
              },
              subtext: k,
            }),
            N = o.useCallback(
              function (e, t) {
                _(t)
              },
              [_],
            ),
            U = o.createElement(
              T.a,
              null,
              o.createElement(m.b, { style: V.aliasSubtext }, H),
              n
                ? o.createElement(
                    T.a,
                    { style: V.aliasSelectContainer },
                    o.createElement(v.a, {
                      name: 'example',
                      onChange: N,
                      options:
                        ((L = n),
                        (R = []),
                        L.forEach(function (e) {
                          R.push({ containerStyle: V.optionContainer, label: Object(p.a)(e), value: e, decoration: X })
                        }),
                        R),
                      value: O,
                    }),
                  )
                : o.createElement(g.a, null),
              j ? o.createElement(w.a, { text: z, type: 'danger' }) : void 0,
            ),
            G = o.createElement(y.a, {
              actionLabel: F,
              footer: D,
              graphicDisplayMode: 'none',
              headline: M,
              isFullHeightOnMobile: !0,
              onAction: function () {
                O &&
                  l(O)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (c(!1), t({ text: W, withClearButton: !0 }))
                        : A(!0)
                    })
                    .catch(function (e) {
                      r({ defaultToast: { text: z, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: U,
            })
          return d ? B : G
        })
      t.a = G
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        b = n.n(f),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('KOtZ'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        v = n('3XMw'),
        g = n.n(v),
        w = n('oQhu'),
        E = n('mjJ+'),
        O = n('eb3s')
      function _(e) {
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
          return p()(this, n)
        }
      }
      var S = g.a.cfd2f35d,
        C = (function (e) {
          u()(n, e)
          var t = _(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : y.createElement(E.a, {
                        cancelButtonLabel: S,
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
                    r = t.headline,
                    a = t.label,
                    o = t.text,
                    i = t.withCancelButton
                  return y.createElement(O.a, {
                    confirmButtonLabel: a,
                    confirmButtonType: n,
                    headline: r,
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
                    n = e.dividerIndices,
                    r = e.onClose
                  return j(t, n, r, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(y.Component),
        j = Object(w.a)(function (e, t, n, r) {
          return e.reduce(function (e, a, o) {
            var i = a.Icon,
              c = a.behavioralEventContext,
              l = a.confirmation,
              s = a.disabled,
              u = a.excludeFromActionMenu,
              d = a.isEmphasized,
              p = a.link,
              f = a.onClick,
              b = a.subText,
              m = a.testID,
              h = a.text
            a.withCancelButton
            if (!u) {
              var y = f
                ? function () {
                    l
                      ? l.render
                        ? r({ callback: f, render: l.render })
                        : r({
                            callback: f,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (f(), n())
                  }
                : n
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
      t.default = C
    },
    'B/qP': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        b = n.n(f),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        v = n('rxPX'),
        g = n('0KEI'),
        w = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(v.a)()
          .propsFromState(function (e) {
            return { fetchStatus: w, items: E }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        _ = n('v//M'),
        S = n('sIe2'),
        C = n('3XMw'),
        j = n.n(C),
        T = n('TEoO')
      function A(e) {
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
          return p()(this, n)
        }
      }
      var I = j.a.i9028824,
        x = 'sliceTimeline',
        P = function (e) {
          return e
        },
        L = { viewType: 'timeline' },
        R = (function (e) {
          u()(n, e)
          var t = A(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  c = t.renderer,
                  l = t.withoutHeadroom
                return !r || o < 1
                  ? null
                  : 1 === o
                  ? y.createElement(T.a, {
                      cacheKey: x,
                      footer: n,
                      identityFunction: P,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: l,
                    })
                  : y.createElement(S.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: P,
                      numColumns: o,
                      renderItem: c,
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
                  r = t.createLocalApiErrorHandler,
                  a = t.fetch,
                  o = t.fetchIfNeeded
                ;(n ? a : o)().catch(r())
              }),
              e
            )
          }
          return (
            i()(n, [
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
                    r = e.retryMessage
                  return n
                    ? y.createElement(_.a, {
                        accessibilityLabel: I,
                        behavioralEventContext: L,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: r,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      h()(R, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var D = O(R)
      t.a = D
    },
    KqB4: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], r = (0, a.default)(e, t), o = 0; o < r.length; o++) n.push(r[o].url)
          return n
        })
      var a = r(n('vwfs'))
      e.exports = t.default
    },
    Ku87: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchAboutScreen', function () {
          return C
        })
      n('z84I'), n('uFXj')
      var r = n('ERkP'),
        a = n('v6aA'),
        o = n.p + 'birdwatch_logo.0a5315e5.png',
        i = n('vZpt'),
        c = n('L5MV'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('yoO3'),
        d = n('7JQg'),
        p = n('VS6U'),
        f = n('t62R'),
        b = n('/yvb'),
        m = n('rHpw'),
        h = n('U+bB'),
        y = n('MWbm'),
        v = s.a.b721eb37,
        g = s.a.a225549d,
        w = [s.a.bc203ca1, s.a.iea72310, s.a.c337f3d1],
        E = s.a.ff3e0be2,
        O = s.a.i859a9d3,
        _ = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        S = { page: 'birdwatch', section: 'about' },
        C = function (e) {
          var t = e.history,
            n = r.useContext(a.a).featureSwitches,
            l = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                y.a,
                { style: j.header },
                r.createElement(y.a, { style: j.imageContainer }, r.createElement(h.a, { source: o, style: j.image })),
              ),
              r.createElement(
                y.a,
                { style: j.content },
                r.createElement(f.b, { size: 'title4', style: j.textSection, weight: 'heavy' }, g),
                w.map(function (e, t) {
                  return r.createElement(f.b, { color: 'gray700', key: 'aboutText'.concat(t), style: j.textSection }, e)
                }),
              ),
              r.createElement(y.a, { style: j.learnMore }, r.createElement(f.b, { link: _ }, O)),
              !n.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                r.createElement(
                  y.a,
                  { style: j.buttonContainer },
                  r.createElement(
                    b.a,
                    { accessibilityLabel: E, link: '/i/flow/join-birdwatch', style: j.button, type: 'brandFilled' },
                    E,
                  ),
                ),
            )
          return r.createElement(
            d.b,
            { namespace: S },
            r.createElement(
              u.a,
              null,
              r.createElement(p.a, {
                TabBar: c.a,
                history: t,
                logoButton: r.createElement(r.Fragment, null),
                primaryContent: l,
                sidebarContent: r.createElement(i.a, null),
                title: v,
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
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        b = n.n(f),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        v = n('MvLc'),
        g = n('rxPX'),
        w = n('0KEI'),
        E = Object(g.a)()
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
        O = n('3XMw'),
        _ = n.n(O),
        S = n('gASw'),
        C = n('v6aA'),
        j = n('C6f5'),
        T = n('2qZs'),
        A = n('PU7B'),
        I = n('YI7k'),
        x = n('boUI'),
        P = n('6ZHn'),
        L = n('89Im'),
        R = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        D = n('k/Ka')
      function k(e, t) {
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
            ? k(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var N = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(D.a)(
          'svg',
          B(
            B({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [R.a.root, e.style], viewBox: '0 0 24 24' },
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
      N.metadata = { width: 24, height: 24 }
      var M = N,
        H = n('6s7X'),
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var W = _.a.d5b2da0a,
        U = _.a.b5711f09,
        K = _.a.ha8209bb,
        V = _.a.ff692d63,
        X = _.a.cb1adfa0,
        q = _.a.b721eb37,
        G = function (e, t) {
          return (
            '/i/birdwatch' === t.pathname || '/i/birdwatch/all' === t.pathname || '/i/birdwatch/helpful' === t.pathname
          )
        },
        Z = function () {
          return !1
        },
        Q = (function (e) {
          u()(n, e)
          var t = z(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
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
            i()(n, [
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
                    r = e.wideMode,
                    a = void 0 !== r && r,
                    o = e.withLabel,
                    i = void 0 !== o && o,
                    c = this.context.featureSwitches
                  return y.createElement(
                    j.b,
                    { layout: n, primaryLabel: W, wideMode: a },
                    y.createElement(S.a, {
                      accessibilityLabel: U,
                      isActive: Z,
                      label: U,
                      layout: n,
                      onClick: this._handleTabClickFactory('home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(T.a, T.a, n),
                      withLabel: i,
                    }),
                    y.createElement(S.a, {
                      accessibilityLabel: K,
                      isActive: G,
                      label: K,
                      layout: n,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(A.a, I.a, n),
                      withLabel: i,
                    }),
                    c.isTrue('responsive_web_birdwatch_note_writing_enabled')
                      ? y.createElement(S.a, {
                          accessibilityLabel: V,
                          label: V,
                          layout: n,
                          onClick: this._handleTabClickFactory('user_notes'),
                          path: '/i/birdwatch/u/me',
                          renderIcon: Object(j.c)(x.a, P.a, n),
                          withLabel: i,
                        })
                      : null,
                    y.createElement(S.a, {
                      accessibilityLabel: X,
                      label: X,
                      layout: n,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: '/i/birdwatch/download-data',
                      renderIcon: Object(j.c)(L.a, M, n),
                      withLabel: i,
                    }),
                    y.createElement(S.a, {
                      accessibilityLabel: q,
                      label: q,
                      layout: n,
                      onClick: this._handleTabClickFactory('about'),
                      path: '/i/birdwatch/about',
                      renderIcon: Object(j.c)(H.a, F.a, n),
                      withLabel: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      h()(Q, 'contextType', C.a)
      var Y = E(Q)
      t.a = Y
    },
    MvLc: function (e, t, n) {
      'use strict'
      n.d(t, 'r', function () {
        return R
      }),
        n.d(t, 'x', function () {
          return B
        }),
        n.d(t, 'o', function () {
          return N
        }),
        n.d(t, 'u', function () {
          return M
        }),
        n.d(t, 's', function () {
          return H
        }),
        n.d(t, 'y', function () {
          return z
        }),
        n.d(t, 'v', function () {
          return W
        }),
        n.d(t, 'n', function () {
          return U
        }),
        n.d(t, 'p', function () {
          return K
        }),
        n.d(t, 'w', function () {
          return V
        }),
        n.d(t, 't', function () {
          return X
        }),
        n.d(t, 'q', function () {
          return q
        }),
        n.d(t, 'k', function () {
          return G
        }),
        n.d(t, 'g', function () {
          return Z
        }),
        n.d(t, 'h', function () {
          return Q
        }),
        n.d(t, 'l', function () {
          return Y
        }),
        n.d(t, 'j', function () {
          return J
        }),
        n.d(t, 'f', function () {
          return $
        }),
        n.d(t, 'm', function () {
          return ee
        }),
        n.d(t, 'd', function () {
          return te
        }),
        n.d(t, 'b', function () {
          return ne
        }),
        n.d(t, 'z', function () {
          return re
        }),
        n.d(t, 'c', function () {
          return ae
        }),
        n.d(t, 'e', function () {
          return oe
        }),
        n.d(t, 'a', function () {
          return ie
        }),
        n.d(t, 'i', function () {
          return ce
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('KEM+'),
        i = n.n(o),
        c = (n('yH/f'), n('KOtZ'), n('z84I'), n('LW0h'), n('JtPf'), n('7x/C'), n('/kEJ')),
        l = n('kGix'),
        s = n('Ssj5'),
        u = n('oEOe'),
        d = n('3A2y'),
        p = n('YeIG')
      function f(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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
        j = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE',
        }),
        T = Object.freeze({
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
              var n,
                r = null === (n = t.payload) || void 0 === n ? void 0 : n.result
              if (r) {
                var o,
                  c,
                  s =
                    null === (o = t.payload) || void 0 === o || null === (c = o.entities) || void 0 === c
                      ? void 0
                      : c.birdwatchNotes[r],
                  u = s.tweet.rest_id
                return b(
                  b({}, e),
                  {},
                  {
                    notes: b(b({}, e.notes), {}, i()({}, r, s)),
                    tweetNotes: b(
                      b({}, e.tweetNotes),
                      {},
                      i()(
                        {},
                        u,
                        b(b({}, e.tweetNotes && e.tweetNotes[u]), {}, { ownNoteId: r, fetchStatus: l.a.LOADED }),
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
                  B = (k.rating, a()(k, ['rating']))
                return b(b({}, e), {}, { notes: b(b({}, e.notes), {}, i()({}, D, b({}, B))) })
              }
              return e
            case j.REQUEST:
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
            case j.FAILURE:
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
            case j.SUCCESS:
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
            case T.REQUEST:
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
            case T.FAILURE:
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
            case T.SUCCESS:
              var ne,
                re,
                ae = null === (ne = t.meta) || void 0 === ne ? void 0 : ne.alias,
                oe = null === (re = t.payload) || void 0 === re ? void 0 : re.result
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
              return ae
                ? b(
                    b({}, e),
                    {},
                    {
                      contributor: b(
                        b({}, e.contributor),
                        {},
                        i()({}, ae, b(b({}, e.contributor[ae]), {}, { fetchStatus: l.a.FAILED })),
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
                je = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.alias
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { ownAlias: je }) })
            case x:
              var Te = t.payload
              if (Object(p.a)(Te)) return e
              var Ae = Te.updates,
                Ie = Te.tweetId
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
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ids
        },
        k = function (e, t) {
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ownNoteId
        },
        B = function (e, t) {
          if (!t) return null
          var n = k(e, t)
          return n ? R(e, n) : null
        },
        N = function (e, t) {
          var n, r
          if (t)
            return null === (n = e.birdwatchNotes) || void 0 === n || null === (r = n.contributor[t]) || void 0 === r
              ? void 0
              : r.badges
        },
        M = function (e) {
          return e.birdwatchNotes.publicData
        },
        H = function (e, t) {
          var n = t ? D(e, t) : void 0
          if (n) {
            var r = k(e, t)
            return (
              r &&
                (n = n.filter(function (e) {
                  return e !== r
                })),
              n
                .map(function (t) {
                  return R(e, t)
                })
                .filter(Boolean)
            )
          }
          return L
        },
        F = function (e, t) {
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
        U = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.aliasSelfSelectOptions : void 0
        },
        K = function (e, t) {
          if (t) {
            var n = e.birdwatchNotes.contributor[t]
            return n ? n.ratings : void 0
          }
        },
        V = function (e, t) {
          var n = e.birdwatchNotes.tweetNotes[t]
          return n ? n.fetchStatus : l.a.NONE
        },
        X = function (e, t) {
          var n = e.birdwatchNotes.notes[t]
          return n ? n.fetchStatus : l.a.NONE
        },
        q = function (e, t) {
          if (t) {
            var n = e.birdwatchNotes.drafts
            return n ? n[t] : void 0
          }
        },
        G = function (e) {
          return function (t, n, r) {
            r.api
            var a = !!D(n(), e),
              o = V(n(), e) === l.a.LOADING
            return a || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, r) {
                      var a = r.api
                      return Object(u.b)(t, { request: a.Birdwatch.fetchNotes, params: { tweet_id: e } })(
                        { actionTypes: j, context: 'FETCH_TWEET_NOTES', meta: { tweet_id: e } },
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
          return function (t, n, r) {
            r.api
            var a = !!e && !!F(n(), e),
              o =
                (function (e, t) {
                  var n = e.birdwatchNotes.contributor[t]
                  return n ? n.fetchStatus : l.a.NONE
                })(n(), e) === l.a.LOADING
            return a || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, r) {
                      var a = r.api
                      return e
                        ? Object(u.b)(t, { request: a.Birdwatch.fetchBirdwatchProfile, params: { alias: e } })(
                            { actionTypes: T, context: 'FETCH_BIRDWATCH_PROFILE', meta: { alias: e } },
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
          return function (t, n, r) {
            r.api
            var a = !!R(n(), e),
              o = X(n(), e) === l.a.LOADING
            return a || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, r) {
                      var a = r.api
                      return Object(u.b)(t, { request: a.Birdwatch.fetchOneNote, params: { note_id: e } })({
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
          return function (e, t, n) {
            n.api
            return !!z(t())
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var r = n.api
                  return Object(u.b)(e, { request: r.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: _,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        J = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: A,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        $ = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: S,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        ee = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: w,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        te = function (e) {
          return { meta: { note_id: e }, type: y.SUCCESS }
        },
        ne = function (e, t) {
          return function (n, r, a) {
            var o = a.api
            return Object(u.b)(n, { request: o.Birdwatch.createNote, params: { tweet_id: e, data: t } })({
              actionTypes: C,
              context: 'CREATE_NOTE',
            })
          }
        },
        re = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: x, payload: e }
              })(e),
            )
          }
        },
        ae = function (e, t) {
          return function (n, r, a) {
            var o = a.api
            return Object(u.b)(n, { request: o.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: v,
              context: 'CREATE_RATING',
              meta: { note_id: e },
            })
          }
        },
        oe = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.Birdwatch.deleteRating, params: { note_id: e } })({
              actionTypes: g,
              context: 'DELETE_RATING',
              meta: { note_id: e },
            })
          }
        },
        ie = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.Birdwatch.createAppeal, params: { note_id: e } })({
              actionTypes: E,
              context: 'CREATE_APPEAL',
              meta: { note_id: e },
            })
          }
        },
        ce = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.Birdwatch.fetchPublicData, params: {} })({
              actionTypes: O,
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
          return x
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('ZD0R'),
        c = (n('WNMA'), n('KqXw'), n('MvLc')),
        l = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          return t.match.params.noteId
        },
        d = function (e, t) {
          return c.r(e, u(0, t))
        },
        p = function (e, t) {
          return c.t(e, u(0, t))
        },
        f = Object(l.a)()
          .propsFromState(function () {
            return { noteData: d, noteId: u, fetchStatus: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: c.h,
            }
          }),
        b = n('kGix'),
        m = n('jHSc'),
        h = n('3XMw'),
        y = n.n(h),
        v = n('aITJ'),
        g = n('MWbm'),
        w = n('FIs5'),
        E = n('htQn'),
        O = n('rHpw'),
        _ = n('Qwev'),
        S = y.a.c87f3cf8,
        C = y.a.i859a9d3,
        j = y.a.efd14e79,
        T = y.a.a5b19492,
        A = o.createElement(w.a, { buttonLink: '/i/birdwatch/about', buttonText: C, header: T }),
        I = function () {
          return null
        },
        x = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchOneNoteIfNeeded,
            r = e.fetchStatus,
            c = e.history,
            l = e.noteData,
            s = e.noteId,
            u = o.useState(l),
            d = a()(u, 2),
            p = d[0],
            f = d[1]
          o.useEffect(
            function () {
              s && n(s).catch(t())
            },
            [t, n, s],
          ),
            o.useEffect(
              function () {
                f(l)
              },
              [l],
            )
          var h = o.createElement(
            E.a,
            null,
            p && p.data_v1
              ? o.createElement(
                  g.a,
                  { style: P.contentWrapper },
                  o.createElement(i.a, {
                    handleDelete: function (e) {
                      f(null)
                    },
                    note: p,
                    showPivot: !0,
                    showTweet: !0,
                  }),
                )
              : r === b.a.LOADING
              ? L
              : A,
          )
          return o.createElement(
            m.b,
            { history: c, renderHeader: v.b.isTwitterApp() ? I : void 0, title: S },
            o.createElement(g.a, { style: P.contentWrapper }, h),
          )
        },
        P = O.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        L = o.createElement(_.a, { accessibilityLabel: j, size: 'large', style: P.spinner }),
        R = f(x)
      t.default = R
    },
    QDet: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('5UID'),
        c = n('3GUV'),
        l = n('iBK2'),
        s = o.createElement(c.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.createElement(l.b, n)
          return t ? o.createElement(i.a, { title: t }, r) : r
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    'W6+M': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('7xRU'), n('z84I'), n('Ysgh'), n('KqXw')
      var r = function (e) {
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
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        i = n.n(o),
        c = n('ddV6'),
        l = n.n(c),
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
        p = (n('WNMA'), n('MvLc')),
        f = n('1YZw'),
        b = n('XOJV'),
        m = n('rxPX'),
        h = n('0KEI'),
        y = function (e, t) {
          return t.match.params.tweetId
        },
        v = function (e, t) {
          return p.x(e, y(0, t))
        },
        g = function (e, t) {
          return p.q(e, y(0, t))
        },
        w = function (e, t) {
          return p.v(e)
        },
        E = Object(m.a)()
          .propsFromState(function () {
            return { draftData: g, ownNoteData: v, tweetId: y, showAliasSelfSelect: w, userAlias: p.y }
          })
          .propsFromActions(function () {
            return {
              addToast: f.b,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: p.b,
              fetchNotes: p.k,
              fetchShowAliasSelfSelect: p.j,
              fetchTweet: b.a.fetchOneIfNeeded,
              fetchUserAlias: p.l,
              saveFormData: p.z,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form' }),
        O = n('W6+M'),
        _ = n('jHSc'),
        S = n('3XMw'),
        C = n.n(S),
        j = n('5FtR'),
        T = n('SrIh'),
        A = n('Rp9C'),
        I = n('xZXe'),
        x = n('aITJ'),
        P = n('MWbm'),
        L = n('t62R'),
        R = n('XiMS'),
        D = n('fyvP'),
        k = n('p+r5'),
        B = n('4zmP'),
        N = n('/yvb'),
        M = n('feu+'),
        H = n('rHpw'),
        F = n('KqB4'),
        z = n.n(F),
        W = n('S1qy'),
        U = n.n(W),
        K = n('Oib4'),
        V = n('DlMI'),
        X = n('ms2t'),
        q = n('I/9y'),
        G = n('EHV7'),
        Z = 'MisinformedOrPotentiallyMisleading',
        Q = 'NotMisleading',
        Y = {
          classification: {
            label: C.a.c8a7eee9,
            options: [
              { label: C.a.d4e419f5, value: Z },
              { label: C.a.ha9655c2, value: Q },
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
            ? J(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
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
        re = C.a.dc7a6625,
        ae = C.a.af778d9e,
        oe = C.a.ifd2c15f,
        ie = C.a.f24ec219,
        ce = C.a.j679dcda,
        le = { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' },
        se = C.a.b7476596,
        ue = C.a.df6c8291,
        de = C.a.h0e35524,
        pe = ['believable', 'harmful', 'validation'],
        fe = ['classification', 'summary', 'trustworthy_sources'],
        be = ['misleading_tags'].concat(pe),
        me = ['not_misleading_tags'],
        he = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ye = ['misleading_tags', 'not_misleading_tags'],
        ve = C.a.b47b5a16,
        ge = C.a.i0e66c5a,
        we = C.a.j8e3e3be,
        Ee = C.a.f1e851ff,
        Oe = C.a.ff5dcac8,
        _e = {
          classification: ge,
          misleading_tags: we,
          believable: ge,
          harmful: ge,
          validation: ge,
          summary: Ee,
          not_misleading_tags: we,
          trustworthy_sources: ge,
        },
        Se = C.a.abdd8d09,
        Ce = { explanation: C.a.c097608d, source: C.a.g9cffe15 },
        je = { explanation: C.a.ba25898c, source: C.a.e764d704 },
        Te = { explanation: C.a.gb67e44c, source: C.a.d6b758a1 },
        Ae = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        Ie = function (e) {
          var t = s.useContext(u.a).featureSwitches,
            n = e.addToast,
            r = e.analytics,
            o = e.createLocalApiErrorHandler,
            c = e.createNote,
            p = e.draftData,
            f = e.fetchNotes,
            b = e.fetchShowAliasSelfSelect,
            m = e.fetchTweet,
            h = e.fetchUserAlias,
            y = e.history,
            v = e.ownNoteData,
            g = e.saveFormData,
            w = e.showAliasSelfSelect,
            E = e.tweetId,
            S = e.userAlias,
            C = function (e) {
              return void 0 === e ? ge : ''
            },
            H = function (e) {
              return U()(e, Ae).weightedLength
            },
            F = function (e) {
              if (!e) return Ee
              var t = H(e.trim())
              return t <= 0 ? Ee : t > 280 ? Oe : ''
            },
            W = s.useState(p || {}),
            J = l()(W, 2),
            Ie = J[0],
            Pe = J[1],
            Le = s.useState(
              (function () {
                var e = _e
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
            Re = l()(Le, 2),
            De = Re[0],
            ke = Re[1],
            Be = s.useState(!1),
            Ne = l()(Be, 2),
            Me = Ne[0],
            He = Ne[1],
            Fe = s.useState(!1),
            ze = l()(Fe, 2),
            We = ze[0],
            Ue = ze[1],
            Ke = s.useState(null),
            Ve = l()(Ke, 2),
            Xe = Ve[0],
            qe = Ve[1],
            Ge = s.useState(w),
            Ze = l()(Ge, 2),
            Qe = Ze[0],
            Ye = Ze[1],
            Je = '/i/birdwatch/'.concat(E, '/contribute_complete')
          s.useEffect(
            function () {
              E && (m(E).catch(o()), f(E).catch(o()))
            },
            [o, f, m, E],
          ),
            s.useEffect(
              function () {
                h().catch(o())
              },
              [o, h],
            ),
            s.useEffect(
              function () {
                b().catch(o())
              },
              [o, b],
            ),
            s.useEffect(
              function () {
                Ye(w)
              },
              [w],
            )
          var $e,
            et = function (e) {
              var t = A.a.forTweet(E)
              r.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            tt = function (e) {
              return function (t, n) {
                et(e),
                  Pe(function (t) {
                    var r = n
                    'trustworthy_sources' === e && ('true' === n ? (r = !0) : 'false' === n && (r = !1))
                    var a = $($({}, t), {}, i()({}, e, r))
                    return g({ updates: a, tweetId: E }), a
                  }),
                  ke(function (t) {
                    return $($({}, t), {}, i()({}, e, C(n)))
                  })
              }
            },
            nt = function (e) {
              return function (t) {
                return function () {
                  Pe(function (n) {
                    if (!n[e]) {
                      ke(function (t) {
                        return $($({}, t), {}, i()({}, e, ''))
                      })
                      var r = $($({}, n), {}, i()({}, e, [t]))
                      return g({ updates: r, tweetId: E }), r
                    }
                    var o = n[e].includes(t),
                      c = n[e].filter(function (e) {
                        return e !== t
                      })
                    if (o) {
                      ke(function (t) {
                        return c.length > 0 ? $($({}, t), {}, i()({}, e, '')) : $($({}, t), {}, i()({}, e, we))
                      })
                      var l = $($({}, n), {}, i()({}, e, c))
                      return g({ updates: l, tweetId: E }), l
                    }
                    ke(function (t) {
                      return $($({}, t), {}, i()({}, e, ''))
                    })
                    var s = $($({}, n), {}, i()({}, e, [].concat(a()(n[e]), [t])))
                    return g({ updates: s, tweetId: E }), s
                  })
                }
              }
            },
            rt = (null == Ie ? void 0 : Ie.misleading_tags) || [],
            at = (null == Ie ? void 0 : Ie.not_misleading_tags) || [],
            ot = function (e) {
              return (
                Me &&
                '' !== e &&
                s.createElement(
                  P.a,
                  { style: xe.errorContainer },
                  s.createElement(K.a, { style: xe.errorIcon }),
                  s.createElement(L.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, e),
                )
              )
            },
            it = s.createElement(
              P.a,
              null,
              s.createElement(
                P.a,
                { style: xe.questionSection },
                s.createElement(
                  P.a,
                  { accessibilityLabel: Y.misleading_tags.label, accessibilityRole: 'group' },
                  s.createElement(L.b, { weight: 'bold' }, Y.misleading_tags.label, ' '),
                  Y.misleading_tags.options.map(function (e) {
                    return s.createElement(R.a, {
                      checked: rt.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: nt('misleading_tags')(e.value),
                      style: xe.checkbox,
                    })
                  }),
                  ot(De.misleading_tags),
                ),
              ),
              pe.map(function (e) {
                return s.createElement(
                  P.a,
                  { key: Y[e].label, style: xe.questionSection },
                  s.createElement(D.a, {
                    label: Y[e].label,
                    name: e,
                    onChange: tt(e),
                    options: Y[e].options,
                    value: Ie[e],
                  }),
                  ot(De[e]),
                )
              }),
            ),
            ct = s.createElement(
              P.a,
              { style: xe.questionSection },
              s.createElement(
                P.a,
                { accessibilityLabel: Y.not_misleading_tags.label, accessibilityRole: 'group' },
                s.createElement(L.b, { weight: 'bold' }, Y.not_misleading_tags.label, ' '),
                Y.not_misleading_tags.options.map(function (e) {
                  return s.createElement(R.a, {
                    checked: at.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: nt('not_misleading_tags')(e.value),
                    style: xe.checkbox,
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
              var e = Ie.summary || ''
              return !(!lt(fe) || '' !== F(e)) && !!((dt === Z && lt(be)) || (dt === Q && lt(me)))
            },
            ut = function () {
              Ue(!0),
                c(E, Ie)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      n({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(T.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        et('submit_failed'),
                        Ue(!1)
                    } else g({ updates: {}, tweetId: E }), y.replace(Je)
                  })
                  .catch(function (e) {
                    o({ defaultToast: { text: de, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      Ue(!1),
                      et('submit_failed'),
                      Object(T.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            dt = Ie.classification,
            pt = Ie.trustworthy_sources,
            ft = void 0 === pt ? '' : pt ? 'true' : 'false',
            bt = dt === Q,
            mt = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            ht = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            yt = S && Object(O.a)(S, !0),
            vt = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                P.a,
                { style: xe.tweetContainer },
                s.createElement(I.b, { displayPromotedContent: !1, tweetId: E, withCurationMenu: !1 }),
              ),
              s.createElement(
                P.a,
                { style: xe.formQuestions },
                s.createElement(
                  P.a,
                  { style: xe.questionSection },
                  s.createElement(D.a, {
                    label: Y.classification.label,
                    name: 'misleading_radio',
                    onChange: tt('classification'),
                    options: Y.classification.options,
                    value: dt,
                  }),
                  ot(De.classification),
                ),
                dt === Z && it,
                bt && ct,
                !!dt &&
                  s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      P.a,
                      { style: xe.questionSection },
                      s.createElement(
                        P.a,
                        { accessibilityLabel: bt ? ie : oe, accessibilityRole: 'group' },
                        s.createElement(L.b, { weight: 'bold' }, bt ? ie : oe),
                        s.createElement(L.b, { link: le }, ce),
                        s.createElement(k.a, {
                          calculateLength: H,
                          helperText: se,
                          invalid: !!De.summary && Me,
                          label: ue,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            g({ updates: Ie, tweetId: E })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            Pe(function (e) {
                              return $($({}, e), {}, { summary: t })
                            }),
                              ke(function (e) {
                                return $($({}, e), {}, { summary: F(t) })
                              })
                          },
                          style: xe.textInput,
                          validLength: 280,
                          value: null == Ie ? void 0 : Ie.summary,
                        }),
                        ot(De.summary),
                      ),
                    ),
                    s.createElement(
                      P.a,
                      { style: xe.questionSection },
                      s.createElement(D.a, {
                        label: Y.trustworthy_sources.label,
                        name: 'trustworthy_sources_radio',
                        onChange: tt('trustworthy_sources'),
                        options:
                          (($e = Y.trustworthy_sources.options),
                          $e.map(function (e) {
                            return { label: e.label, value: e.value.toString() }
                          })),
                        value: ft,
                      }),
                      ot(De.trustworthy_sources),
                    ),
                    mt &&
                      !ht &&
                      s.createElement(P.a, { style: xe.callout }, s.createElement(B.a, { Icon: V.a, text: ne })),
                    mt &&
                      ht &&
                      yt &&
                      s.createElement(
                        P.a,
                        { style: xe.callout },
                        s.createElement(B.a, {
                          Icon: X.a,
                          headline: re({ displayAlias: yt }),
                          text: ae,
                          withThumbnail: !0,
                        }),
                      ),
                    Me &&
                      !st() &&
                      s.createElement(
                        P.a,
                        { style: xe.callout },
                        s.createElement(B.a, { Icon: K.a, text: ve, type: 'danger' }),
                      ),
                    s.createElement(
                      N.a,
                      {
                        disabled: We,
                        onPress: function () {
                          et('submit'), He(!0)
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
                          st() && (e ? qe(e) : ut())
                        },
                        style: xe.submitButton,
                        type: 'brandFilled',
                      },
                      te,
                    ),
                  ),
              ),
            )
          return ht && Qe
            ? s.createElement(d.a, {
                onAliasSelected: function (e) {
                  Ye(e)
                },
              })
            : v
            ? s.createElement(j.a, { to: Je })
            : Xe
            ? s.createElement(M.a, {
                actionLabel: Se,
                graphic: 'source' === Xe ? q.a : G.a,
                graphicDisplayMode: 'thumbnail',
                headline: Ce[Xe],
                onAction: function () {
                  et('nudge_edit'), qe(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = A.a.forTweet(E)
                  r.scribe({ element: 'nudge', action: 'show', data: { targets: [e] } })
                },
                onTertiaryAction: function () {
                  et('nudge_submit'), ut()
                },
                subtext: je[Xe],
                tertiaryActionLabel: Te[Xe],
                withCloseButton: !1,
              })
            : s.createElement(
                _.b,
                {
                  history: y,
                  onBackClick: function () {
                    et('close'), y.goBack()
                  },
                  renderHeader: x.b.isTwitterApp()
                    ? function () {
                        return null
                      }
                    : void 0,
                  title: ee,
                },
                s.createElement(P.a, { style: xe.contentWrapper }, vt),
              )
        },
        xe = H.a.create(function (e) {
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
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
      var r = n('ERkP'),
        a = n('vZpt'),
        o = n('L5MV'),
        i = n('3XMw'),
        c = n.n(i),
        l = n('VS6U'),
        s = n('MWbm'),
        u = n('FIs5'),
        d = n('rHpw'),
        p = c.a.b5711f09,
        f = c.a.e96677aa,
        b = c.a.f026d2ee,
        m = c.a.i859a9d3,
        h = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        y = function (e) {
          var t = e.history,
            n = r.createElement(
              s.a,
              { style: v.contentWrapper },
              r.createElement(u.a, {
                buttonLink: h,
                buttonText: m,
                buttonType: 'brandOutlined',
                header: f,
                message: b,
              }),
            )
          return r.createElement(l.a, {
            TabBar: o.a,
            history: t,
            logoButton: r.createElement(r.Fragment, null),
            primaryContent: n,
            sidebarContent: r.createElement(a.a, null),
            title: p,
            withTweetButton: !1,
          })
        },
        v = d.a.create(function (e) {
          return { contentWrapper: { marginHorizontal: '100px' } }
        })
      t.default = y
    },
    ZD0R: function (e, t, n) {
      'use strict'
      var r,
        a,
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        b = n.n(f),
        m = n('AuHH'),
        h = n.n(m),
        y = n('KEM+'),
        v = n.n(y),
        g = n('ddV6'),
        w = n.n(g),
        E = (n('jQ3i'), n('x4t0'), n('2G9S'), n('OZaJ'), n('ERkP')),
        O = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        _ = n.n(O),
        S = (n('z84I'), n('7x/C'), n('DZ+c'), n('LW0h'), n('v6aA')),
        C = n('MvLc'),
        j = n('rxPX'),
        T = n('0KEI'),
        A = Object(j.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: C.c,
              deleteRating: C.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        I = n('ACNv'),
        x = n('YeIG'),
        P = n('MWbm'),
        L = n('t62R'),
        R = n('XiMS'),
        D = n('fyvP'),
        k = n('/yvb'),
        B = n('IG7M'),
        N = n('rHpw'),
        M = (n('yH/f'), n('3XMw')),
        H = n.n(M),
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
          ((r = {}),
          v()(r, F.Clear, H.a.dfa44ddd),
          v()(r, F.Empathetic, H.a.hc2b6a7e),
          v()(r, F.GoodSources, H.a.a7bc3191),
          v()(r, F.Informative, H.a.f3e6f0a9),
          v()(r, F.Other, H.a.c365dcc5),
          v()(r, F.UniqueContext, H.a.c5d55592),
          r),
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
          ((a = {}),
          v()(a, U.Biased, H.a.bbe8b4ac),
          v()(a, U.Incorrect, H.a.heb35e12),
          v()(a, U.MissingKeyPoints, H.a.c34e0b2b),
          v()(a, U.NoSources, H.a.a802709f),
          v()(a, U.OffTopic, H.a.dd1f17e9),
          v()(a, U.Outdated, H.a.if966b54),
          v()(a, U.Other, H.a.c365dcc5),
          v()(a, U.Rude, H.a.d0ba7db4),
          v()(a, U.TwitterViolationAny, H.a.aa520d31),
          v()(a, U.Unclear, H.a.e25e5ed1),
          a),
        X = n('hiGS'),
        q = n('TW8A'),
        G = n('WtWS')
      function Z(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Y = H.a.ed5156f9,
        J = [
          { label: H.a.b7ec04f3, value: !0 },
          { label: H.a.i62a03aa, value: !1 },
        ],
        $ = {
          helpful: { label: H.a.a7338bc2, options: J },
          agree: { label: H.a.d93489e6, options: J },
          helpful_tags: {
            label: H.a.j63844f5,
            options: z.map(function (e) {
              return { label: W[e], value: e }
            }),
          },
          not_helpful_tags: {
            label: H.a.e0806a48,
            options: K.map(function (e) {
              return { label: V[e], value: e }
            }),
          },
        },
        ee = H.a.a91bb144,
        te = H.a.abd845fd,
        ne = H.a.d96cf7cd,
        re = H.a.j6aa6172,
        ae = H.a.i411275f,
        oe = H.a.d1a479a8,
        ie = function (e) {
          return e.map(function (e) {
            return { label: e.label, value: e.value.toString() }
          })
        },
        ce = E.createElement(L.b, { weight: 'bold' }),
        le = E.createElement(L.b, { weight: 'bold' }),
        se = E.createElement(L.b, { weight: 'bold' }),
        ue = E.createElement(L.b, { weight: 'bold' }),
        de = E.createElement(H.a.I18NFormatMessage, { $i18n: 'if77e237' }, E.cloneElement(se, null, H.a.a43beaf2)),
        pe = E.createElement(H.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, E.cloneElement(ue, null, H.a.cb1d0ef3)),
        fe = E.createElement(H.a.I18NFormatMessage, { $i18n: 'j575fa79' }, E.cloneElement(ce, null, H.a.he5f1491)),
        be = E.createElement(H.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, E.cloneElement(le, null, H.a.a67e7d91)),
        me = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'd570f1d9' },
          E.cloneElement(se, null, H.a.c9c4850a),
          E.cloneElement(ce, null, H.a.ffa975fd),
        ),
        he = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'c6cb9513' },
          E.cloneElement(se, null, H.a.c9701442),
          E.cloneElement(le, null, H.a.d2be9800),
        ),
        ye = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          E.cloneElement(ue, null, H.a.cf87d556),
          E.cloneElement(ce, null, H.a.hec80c95),
        ),
        ve = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'gbfec7fd' },
          E.cloneElement(ue, null, H.a.bfa5f565),
          E.cloneElement(le, null, H.a.eb1cc800),
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
            r = e.createRating,
            a = e.deleteRating,
            o = e.noteId,
            i = e.rating,
            c = E.useContext(S.a).featureSwitches,
            l = i || {},
            s = E.useState(l),
            u = w()(s, 2),
            d = u[0],
            p = u[1],
            f = E.useState(Object(x.a)(i)),
            b = w()(f, 2),
            m = b[0],
            h = b[1],
            y = function (e) {
              return function (t, n) {
                p(function (t) {
                  var r = n
                  return 'true' === n ? (r = !0) : 'false' === n && (r = !1), Q(Q({}, t), {}, v()({}, e, r))
                })
              }
            },
            g = function (e) {
              var t = d[e] || []
              return E.createElement(
                P.a,
                { style: ge.checkboxContainer },
                E.createElement(L.b, { weight: 'bold' }, $[e].label),
                $[e].options.map(function (n) {
                  return E.createElement(R.a, {
                    checked: t.includes(n.value),
                    key: n.value,
                    label: n.label,
                    onChange: j(e)(n.value),
                    style: ge.checkbox,
                  })
                }),
              )
            },
            O = function () {
              T('delete'),
                a(o)
                  .then(function (e) {
                    'Done' === e.birdwatchnote_rating_delete && (p({}), h(!0))
                  })
                  .catch(n())
            },
            C = function () {
              T('edit'), h(!0)
            },
            j = function (e) {
              return function (t) {
                return function () {
                  p(function (n) {
                    return n[e]
                      ? n[e].includes(t)
                        ? Q(
                            Q({}, n),
                            {},
                            v()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : Q(Q({}, n), {}, v()({}, e, [].concat(_()(n[e]), [t])))
                      : Q(Q({}, n), {}, v()({}, e, [t]))
                  })
                }
              }
            },
            T = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            A = void 0 !== (null == d ? void 0 : d.helpful),
            N = A ? (null != d && d.helpful ? 'true' : 'false') : '',
            M = void 0 !== (null == d ? void 0 : d.agree),
            H = M ? (null != d && d.agree ? 'true' : 'false') : ''
          return m
            ? E.createElement(
                P.a,
                { style: ge.root },
                E.createElement(D.a, {
                  label: $.helpful.label,
                  name: $.helpful.label + o,
                  onChange: y('helpful'),
                  options: ie(J),
                  value: N,
                }),
                A && (null != d && d.helpful ? g('helpful_tags') : g('not_helpful_tags')),
                E.createElement(D.a, {
                  label: $.agree.label,
                  name: $.agree.label + o,
                  onChange: y('agree'),
                  options: ie(J),
                  value: H,
                }),
                !Object(x.a)(d) &&
                  E.createElement(
                    k.a,
                    {
                      onClick: function () {
                        T('submit'),
                          d &&
                            r(o, d)
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
                      style: ge.button,
                      type: 'brandFilled',
                    },
                    ee,
                  ),
              )
            : E.createElement(
                P.a,
                { style: [ge.root, ge.showSubmittedRating] },
                E.createElement(
                  P.a,
                  { style: ge.row },
                  E.createElement(G.a, { style: ge.icon }),
                  E.createElement(
                    L.b,
                    { size: 'subtext2' },
                    null != d && d.helpful && !M
                      ? de
                      : (null != d && d.helpful) || M
                      ? null != d && d.agree && !A
                        ? fe
                        : (null != d && d.agree) || A
                        ? null != d && d.helpful && null != d && d.agree
                          ? me
                          : null == d || !d.helpful || (null != d && d.agree)
                          ? (null != d && d.helpful) || null == d || !d.agree
                            ? (null != d && d.helpful) || (null != d && d.agree)
                              ? void 0
                              : ve
                            : ye
                          : he
                        : be
                      : pe,
                  ),
                ),
                E.createElement(B.a, {
                  renderActionMenu: function (e) {
                    return E.createElement(I.default, {
                      actionItems:
                        ((t = []),
                        t.push({
                          confirmation: { label: ne, headline: re, text: ae, confirmButtonType: 'destructiveFilled' },
                          isEmphasized: !0,
                          text: ne,
                          Icon: X.a,
                          onClick: O,
                        }),
                        c.isTrue('responsive_web_birdwatch_ratings_v2_enabled')
                          ? t.push({ disabled: !0, text: te, subText: oe, Icon: q.a })
                          : t.push({ text: te, Icon: q.a, onClick: C }),
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
        _e = Object(j.a)()
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
              createRating: C.c,
              deleteRating: C.e,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        Se = n('cHvH'),
        Ce = n('h0NW'),
        je = n('feu+')
      function Te(e) {
        var t,
          n,
          r = H.a.a7bc3191,
          a = H.a.a26f8dc1,
          o = H.a.d89cfe9e,
          i = H.a.faa5f9e7,
          c = H.a.c365dcc5
        return e
          ? ((t = {}),
            v()(t, F.GoodSources, r),
            v()(t, F.Clear, a),
            v()(t, F.AddressesClaim, o),
            v()(t, F.ImportantContext, i),
            v()(t, F.UnbiasedLanguage, H.a.gf3b38f4),
            v()(t, F.Other, c),
            t)
          : ((n = {}),
            v()(n, F.GoodSources, r),
            v()(n, F.Clear, a),
            v()(n, F.AddressesClaim, o),
            v()(n, F.ImportantContext, i),
            v()(n, F.Other, c),
            n)
      }
      function Ae(e) {
        return Object.keys(Te(e))
      }
      function Ie(e) {
        var t,
          n,
          r = H.a.ef490ae8,
          a = H.a.bf3dc461,
          o = H.a.heb35e12,
          i = H.a.ib117531,
          c = H.a.c365dcc5
        return e
          ? ((t = {}),
            v()(t, U.NoSources, r),
            v()(t, U.IrrelevantSources, a),
            v()(t, U.Incorrect, o),
            v()(t, U.OpinionSpeculation, H.a.h7c59ea2),
            v()(t, U.Unclear, H.a.d60c0063),
            v()(t, U.MissingKeyPoints, H.a.e06416c9),
            v()(t, U.Rude, H.a.cff1aa8b),
            v()(t, U.NoteNotNeeded, H.a.cc443e25),
            v()(t, U.TwitterViolationAny, i),
            v()(t, U.Other, c),
            t)
          : ((n = {}),
            v()(n, U.NoSources, r),
            v()(n, U.IrrelevantSources, a),
            v()(n, U.Incorrect, o),
            v()(n, U.Unclear, H.a.d60c0063),
            v()(n, U.MissingKeyPoints, H.a.c34e0b2b),
            v()(n, U.Rude, H.a.d24b99ed),
            v()(n, U.TwitterViolationAny, i),
            v()(n, U.Other, c),
            n)
      }
      function xe(e) {
        return Object.keys(Ie(e))
      }
      var Pe = n('EQ/a'),
        Le = n('DlMI')
      function Re(e, t) {
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
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Re(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Re(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ke = H.a.ed5156f9,
        Be = [
          { label: H.a.b7ec04f3, value: 'Helpful' },
          { label: H.a.i26425d8, value: 'SomewhatHelpful' },
          { label: H.a.i62a03aa, value: 'NotHelpful' },
        ],
        Ne = H.a.a91bb144,
        Me = H.a.abd845fd,
        He = H.a.d96cf7cd,
        Fe = H.a.j6aa6172,
        ze = H.a.i411275f,
        We = H.a.e2988ed0,
        Ue = H.a.c1a50438,
        Ke = H.a.d2ae3d42,
        Ve = H.a.c4e0c730,
        Xe = H.a.cfd2f35d,
        qe = H.a.b1ea3365,
        Ge = H.a.h1a9d37a,
        Ze = E.createElement(L.b, { weight: 'bold' }),
        Qe = E.createElement(L.b, {
          link: 'https://twitter.github.io/birdwatch/about/overview/#transparency-and-visibility',
          withInteractiveStyling: !0,
          withUnderline: !0,
        }),
        Ye = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'ab4d390f' },
          E.cloneElement(Ze, null, H.a.iedb2fc7),
          E.cloneElement(Qe, null, H.a.cd24d5f5),
        ),
        Je = E.createElement(L.b, { weight: 'bold' }),
        $e = E.createElement(L.b, { weight: 'bold' }),
        et = E.createElement(L.b, { weight: 'bold' }),
        tt = E.createElement(H.a.I18NFormatMessage, { $i18n: 'had203a8' }, E.cloneElement(Je, null, H.a.f2ceaed4)),
        nt = E.createElement(H.a.I18NFormatMessage, { $i18n: 'h42a21df' }, E.cloneElement($e, null, H.a.i7d91dc8)),
        rt = E.createElement(H.a.I18NFormatMessage, { $i18n: 'c3d1a1b0' }, E.cloneElement(et, null, H.a.c206a60f)),
        at = N.a.create(function (e) {
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
            anonymousCrowdText: { display: 'inline' },
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
          containerStyle: at.infoItemContainer,
          items: [
            { label: '', decoration: E.createElement(Pe.a, { style: at.iconDataPrivacy }), description: Ge },
            {
              label: '',
              decoration: E.createElement(Le.a, { style: at.iconDataPrivacy }),
              description: E.createElement(P.a, { style: at.anonymousCrowdText }, Ye),
            },
          ],
        },
        it = _e(function (e) {
          var t = e.addFlag,
            n = e.addToast,
            r = e.analytics,
            a = e.createLocalApiErrorHandler,
            o = e.createRating,
            i = e.deleteRating,
            c = e.noteId,
            l = e.rating,
            s = e.ratingSurvey,
            u = e.shouldShowDataPrivacyPrompt,
            d = E.useContext(S.a).featureSwitches,
            p = E.useState(l),
            f = w()(p, 2),
            b = f[0],
            m = f[1],
            h = E.useState(Object(x.a)(l)),
            y = w()(h, 2),
            g = y[0],
            O = y[1],
            C = E.useState(!1),
            j = w()(C, 2),
            T = j[0],
            A = j[1],
            D = d.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            M = {
              helpful: { label: H.a.a7338bc2, options: Be },
              helpful_tags: {
                label: H.a.ac7f9745,
                options: Ae(D).map(function (e) {
                  return { label: Te(D)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: H.a.c7751803,
                options: xe(D).map(function (e) {
                  return { label: Ie(D)[e], value: e }
                }),
              },
            },
            F = function (e) {
              r.scribeAction('click_'.concat(e))
            },
            z = function () {
              F('delete'),
                i(c)
                  .then(function (e) {
                    if ('Done' === e.birdwatchnote_rating_delete) {
                      var t = Object.freeze({})
                      m(t), O(!0)
                    }
                  })
                  .catch(a())
            },
            W = function () {
              F('edit'), O(!0)
            },
            K = function () {
              var e, t
              ;(F('submit'),
              o(c, b)
                .then(function () {
                  O(!1)
                })
                .catch(a({ defaultToast: { text: ke, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              d.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(x.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = b.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = b.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
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
                        ? De(
                            De({}, n),
                            {},
                            v()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : De(De({}, n), {}, v()({}, e, [].concat(_()(n[e]), [t])))
                      : De(De({}, n), {}, v()({}, e, [t]))
                  })
                }
              }
            },
            Z = function (e) {
              var t = (b && b[e]) || []
              return E.createElement(
                P.a,
                { style: at.checkboxContainer },
                E.createElement(L.b, { weight: 'bold' }, M[e].label),
                M[e].options.map(function (n) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level) &&
                      n.value === U.TwitterViolationAny
                    ) &&
                    E.createElement(R.a, {
                      checked: t.includes(n.value),
                      key: n.value,
                      label: n.label,
                      onChange: V(e)(n.value),
                      style: at.checkbox,
                    })
                  )
                }),
              )
            },
            Q = E.createElement(Se.a, null, function (e) {
              var t = e.windowWidth <= N.a.theme.breakpoints.small
              return E.createElement(
                P.a,
                { style: !t && at.helpfulContainer },
                E.createElement(L.b, { style: t && at.helpfulQuestionMobile, weight: 'bold' }, M.helpful.label),
                E.createElement(
                  P.a,
                  { style: at.helpfulOptions },
                  Be.map(function (e) {
                    return E.createElement(
                      k.a,
                      {
                        key: e.value,
                        onClick:
                          ((t = e.value),
                          function () {
                            m(function (e) {
                              return De(De({}, e), {}, { helpfulness_level: t })
                            })
                          }),
                        size: 'small',
                        style: at.helpfulButtons,
                        type: (null == b ? void 0 : b.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
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
              headline: qe,
              isFullHeightOnMobile: !0,
              onAction: function () {
                K(), t(Ee.c), A(!1)
              },
              onSecondaryAction: function () {
                return A(!1)
              },
              secondaryActionLabel: Xe,
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
          return E.createElement(
            E.Fragment,
            null,
            T ? J : null,
            g
              ? E.createElement(
                  P.a,
                  { style: at.root },
                  Q,
                  ee && Z('helpful_tags'),
                  te && Z('not_helpful_tags'),
                  !Object(x.a)(b) &&
                    E.createElement(
                      k.a,
                      {
                        onClick: function () {
                          u && d.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? A(!0) : b && K()
                        },
                        style: at.button,
                        type: 'brandFilled',
                      },
                      Ne,
                    ),
                )
              : E.createElement(
                  P.a,
                  { style: [at.root, at.showSubmittedRating] },
                  E.createElement(
                    P.a,
                    { style: at.row },
                    E.createElement(G.a, { style: at.icon }),
                    E.createElement(
                      L.b,
                      { size: 'subtext2' },
                      (function () {
                        switch (null == b ? void 0 : b.helpfulness_level) {
                          case 'Helpful':
                            return tt
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
                  E.createElement(B.a, {
                    renderActionMenu: function (e) {
                      return E.createElement(I.default, {
                        actionItems:
                          ((t = []),
                          t.push({
                            confirmation: { label: He, headline: Fe, text: ze, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: He,
                            Icon: X.a,
                            onClick: z,
                          }),
                          t.push({ text: Me, Icon: q.a, onClick: W }),
                          t),
                        onClose: e,
                      })
                      var t
                    },
                  }),
                ),
          )
        }),
        ct = n('xSpP'),
        lt = n('XOJV'),
        st = function (e, t) {
          var n,
            r = null === (n = t.note) || void 0 === n ? void 0 : n.tweet
          return r ? lt.a.selectFetchStatus(e, r.rest_id) : void 0
        },
        ut = Object(j.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: st, userAlias: C.y }
          })
          .propsFromActions(function () {
            return {
              addToast: Oe.b,
              createAppeal: C.a,
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: ct.b,
              fetchTweet: lt.a.fetchOneIfNeeded,
              fetchUserAlias: C.l,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        dt = n('eqZz'),
        pt = n('W6+M'),
        ft = n('yrzJ'),
        bt = n('sgih')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var ht = H.a.e4579709,
        yt = H.a.df587b98,
        vt = H.a.fd284b08,
        gt = H.a.h201bdc8,
        wt = H.a.fe1f6043,
        Et = H.a.ia5e7487,
        Ot = H.a.j58e7b00,
        _t = (function (e) {
          p()(n, e)
          var t = mt(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.alias,
                    n = e.closeNoteDetails,
                    r = e.created_at,
                    a = e.rest_id,
                    o = e.userBadges,
                    i = this.context.featureSwitches,
                    c = i.isTrue('responsive_web_birdwatch_note_awards_enabled'),
                    l = i.isTrue('responsive_web_birdwatch_aliases_enabled'),
                    s = c && o && o.length > 0,
                    u = E.createElement(
                      P.a,
                      { style: St.noteDetailsContainer },
                      E.createElement(
                        P.a,
                        { style: St.noteDetailsHeader },
                        E.createElement(L.b, { size: 'headline1', weight: 'bold' }, ht),
                      ),
                      E.createElement(
                        P.a,
                        { style: St.noteDetails },
                        E.createElement(
                          P.a,
                          { style: [St.noteDetailsSection, St.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: St.noteDetailsText }, yt),
                          E.createElement(L.b, { style: St.noteDetailsContentText }, a),
                        ),
                        E.createElement(
                          P.a,
                          { style: [St.noteDetailsSection, St.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: St.noteDetailsText }, gt),
                          l
                            ? E.createElement(
                                L.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: St.profileText },
                                Object(pt.a)(t),
                              )
                            : E.createElement(ft.a, { screenName: t }),
                          l &&
                            E.createElement(
                              L.b,
                              {
                                color: 'link',
                                link: '/i/birdwatch/u/'.concat(t),
                                onClick: n,
                                style: St.viewProfileLink,
                              },
                              Ot,
                            ),
                        ),
                        E.createElement(
                          P.a,
                          {
                            style: [St.noteDetailsSection, s ? St.noteDetailsSectionBorder : St.noteDetailsSectionLast],
                          },
                          E.createElement(L.b, { color: 'normal', style: St.noteDetailsText }, wt),
                          E.createElement(
                            L.b,
                            { style: St.noteDetailsContentText },
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
                            })(r),
                          ),
                        ),
                        s &&
                          E.createElement(
                            P.a,
                            { style: [St.noteDetailsSection, St.noteDetailsSectionLast] },
                            E.createElement(L.b, { color: 'normal', style: St.awardDetailsText }, vt),
                            o
                              ? o.map(function (e, t) {
                                  return E.createElement(dt.a, { badgeType: e, key: t })
                                })
                              : null,
                          ),
                        E.createElement(P.a, { style: St.contentSpacer }),
                      ),
                      E.createElement(
                        P.a,
                        { style: St.noteDetailsButtonSection },
                        E.createElement(P.a, { style: St.buttonSpacer }),
                        E.createElement(k.a, { onClick: n, style: St.noteDetailsButton, type: 'brandFilled' }, Et),
                      ),
                    )
                  return E.createElement(Se.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(bt.a, {
                      allowBackNavigation: !0,
                      children: u,
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
        })(E.Component)
      v()(_t, 'contextType', S.a)
      var St = N.a.create(function (e) {
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
        Ct = _t,
        jt = n('b5s6'),
        Tt = n('rcen'),
        At = n('Rp9C'),
        It = 'helpfulRatingTags',
        xt = 'notHelpfulRatingTags',
        Pt = 'ratingStatus',
        Lt = n('4zmP'),
        Rt = n('pjBI'),
        Dt = n('GBcw'),
        kt = n('htQn'),
        Bt = n('zIWA'),
        Nt = n('/WPq'),
        Mt = n('x0mb'),
        Ht = n('fBGZ'),
        Ft = n('Lsrn'),
        zt = n('k/Ka')
      function Wt(e, t) {
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
      function Ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Wt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Wt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Kt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(zt.a)(
          'svg',
          Ut(
            Ut({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ft.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          E.createElement(
            'g',
            null,
            E.createElement('path', {
              d: 'M8 20V5.8l2.7 2.7c.3.3.8.3 1.1 0s.3-.8 0-1.1l-4-4c-.3-.2-.8-.2-1.1.1l-4 4c-.1.1-.2.3-.2.5s.1.4.2.5c.3.3.8.3 1.1 0l2.7-2.7V20c0 .4.3.8.8.8s.7-.4.7-.8zm9.3.5l4-4c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.7 2.7V4c0-.4-.3-.8-.8-.8s-.7.4-.7.8v14.2l-2.7-2.7c-.3-.3-.8-.3-1.1 0-.1.1-.2.3-.2.5s.1.4.2.5l4 4c.3.3.8.3 1.1 0z',
            }),
          ),
        )
      }
      Kt.metadata = { width: 24, height: 24 }
      var Vt = Kt,
        Xt = n('Nh1N')
      function qt(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var Gt = H.a.d96cf7cd,
        Zt = H.a.e272836c,
        Qt = H.a.e4579709,
        Yt = H.a.fa0d3ee3,
        Jt = H.a.ccf2f24e,
        $t = H.a.df321fc3,
        en = E.createElement(L.b, { color: 'primary' }, $t),
        tn = H.a.gdcbac31,
        nn = H.a.be86e75d,
        rn = H.a.f2d93c3d,
        an = H.a.d1dd62ac,
        on = H.a.b664c554,
        cn = H.a.ab66e1f2,
        ln = H.a.b2792b8c,
        sn = H.a.d49cbe9f,
        un = H.a.hfd2544f,
        dn = H.a.b9e1cf02,
        pn = H.a.cfd2f35d,
        fn = H.a.i80c8a83,
        bn = H.a.i859a9d3,
        mn = H.a.i97b83f6,
        hn = 'CurrentlyRatedHelpful',
        yn = 'CurrentlyRatedNotHelpful',
        vn = 'NeedsMoreRatings',
        gn = function (e, t, n) {
          switch (e) {
            case hn:
              if (2 === t.length) {
                var r = w()(t, 2),
                  a = r[0],
                  o = r[1],
                  i = Ae(!0),
                  c = Te(!0),
                  l = i.includes(a) ? c[a] : W[a],
                  s = i.includes(o) ? c[o] : W[o],
                  u = ''.concat(l, ' · ').concat(s)
                return l && s
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: u }, size: 'subtext2', style: On.ratingTag, testID: It },
                      u,
                    )
                  : null
              }
              return null
            case yn:
              if (2 === n.length) {
                var d = w()(n, 2),
                  p = d[0],
                  f = d[1],
                  b = xe(!0).includes(p) ? Ie(!0)[p] : V[p],
                  m = xe(!0).includes(f) ? Ie(!0)[f] : V[f],
                  h = ''.concat(b, ' · ').concat(m)
                return b && m
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: h }, size: 'subtext2', style: On.ratingTag, testID: xt },
                      h,
                    )
                  : null
              }
              return null
            default:
              return null
          }
        },
        wn = function (e, t) {
          return E.createElement(
            P.a,
            { style: On.ratingInfoItem, testID: Pt },
            _n(e),
            E.createElement(L.b, { size: 'subtext2', weight: 'bold' }, t),
          )
        },
        En = (function (e) {
          p()(n, e)
          var t = qt(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(u()(a), '_handleFetchTweet', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweet,
                  r = e.note.tweet,
                  o = null == r ? void 0 : r.rest_id
                o && n(o).catch(t())
              }),
              v()(u()(a), '_isOwner', function () {
                var e,
                  t = a.props,
                  n = t.note,
                  r = t.userAlias,
                  o = null == n || null === (e = n.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!r || !o) && o === r
              }),
              v()(u()(a), '_handleDeleteConfirm', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.deleteNote,
                  r = e.handleDelete,
                  o = e.note,
                  i = o.birdwatch_profile,
                  c = o.rest_id
                a._scribeOnClick('delete')(),
                  null != i &&
                    i.alias &&
                    a._isOwner() &&
                    n(c)
                      .then(function (e) {
                        null == r || r(c)
                      })
                      .catch(t())
              }),
              v()(u()(a), '_getMenuActionItems', function () {
                var e = a.props.note,
                  t = e.birdwatch_profile,
                  n = e.rest_id,
                  r = []
                return (
                  null != t &&
                    t.alias &&
                    a._isOwner() &&
                    r.push({
                      confirmation: { label: Gt, headline: Zt, text: Yt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: Gt,
                      Icon: X.a,
                      onClick: a._handleDeleteConfirm,
                    }),
                  r.push({
                    text: Jt,
                    Icon: Bt.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(n) },
                    onClick: a._scribeOnClick('report'),
                  }),
                  r.push({ text: Qt, Icon: Nt.a, onClick: a._onNoteDetailsClick }),
                  r
                )
              }),
              v()(u()(a), '_onNoteDetailsClick', function () {
                a.setState({ noteDetailsOpen: !0 }), a._scribeOnClick('note_details')
              }),
              v()(u()(a), '_renderCurationActionMenu', function (e) {
                return E.createElement(I.default, { actionItems: a._getMenuActionItems(), onClose: e })
              }),
              v()(u()(a), '_scribeOnClick', function (e) {
                return function () {
                  var t = a.props,
                    n = t.analytics,
                    r = t.note.tweet
                  if (r) {
                    var o = At.a.forTweet(r.rest_id)
                    n.scribe({ element: e, action: 'click', data: { targets: [o] } })
                  }
                }
              }),
              v()(u()(a), '_handleRequestAppeal', function () {
                var e = a.props,
                  t = e.createAppeal,
                  n = e.createLocalApiErrorHandler
                t(e.note.rest_id)
                  .then(function () {
                    a.setState({ appealsRequestOpen: !1 }), a.setState({ appealRequested: !0 })
                  })
                  .catch(n({ defaultToast: { text: mn, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 }))
              }),
              v()(u()(a), '_handleOpenAppealsModal', function () {
                a.setState({ appealsRequestOpen: !0 })
              }),
              v()(u()(a), '_handleCloseAppealsModal', function () {
                a.setState({ appealsRequestOpen: !1 })
              }),
              v()(u()(a), '_renderAppealsModal', function () {
                var e = E.createElement(P.a, null, E.createElement(L.b, null, cn), E.createElement(Ce.a, Sn))
                return E.createElement(je.a, {
                  actionLabel: dn,
                  graphicDisplayMode: 'none',
                  headline: on,
                  isFullHeightOnMobile: !0,
                  onAction: a._handleRequestAppeal,
                  onSecondaryAction: a._handleCloseAppealsModal,
                  secondaryActionLabel: pn,
                  subtext: e,
                })
              }),
              v()(u()(a), '_renderAppealsStatus', function () {
                var e = a.props.note.can_appeal,
                  t = E.createElement(
                    H.a.I18NFormatMessage,
                    { $i18n: 'c5c4d000' },
                    E.createElement(
                      L.b,
                      { onPress: a._handleOpenAppealsModal, withInteractiveStyling: !0, withUnderline: !0 },
                      H.a.c8259b73,
                    ),
                  )
                return a.state.appealRequested
                  ? E.createElement(Lt.a, {
                      Icon: G.a,
                      action: { label: bn, link: 'https://twitter.github.io/birdwatch/additional-review' },
                      headline: fn,
                      type: 'success',
                    })
                  : e
                  ? E.createElement(L.b, { color: 'gray700', size: 'subtext2' }, t)
                  : void 0
              }),
              (a.state = {
                noteDetailsOpen: !1,
                appealsRequestOpen: !1,
                appealRequested: 'AppealReceived' === e.note.appeal_status,
              }),
              a
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
                    r = e.note.tweet,
                    a = e.showTweet
                  n().catch(t()), a && null != r && r.rest_id && this._handleFetchTweet()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    r = this.props,
                    a = r.note,
                    o = a.created_at,
                    i = a.rating,
                    c = a.rating_status,
                    l = a.rating_survey,
                    s = a.helpful_tags,
                    u = void 0 === s ? [] : s,
                    d = a.not_helpful_tags,
                    p = void 0 === d ? [] : d,
                    f = a.rest_id,
                    b = a.data_v1,
                    m = a.tweetId,
                    h = a.tweet,
                    y = r.showPivot,
                    v = r.showRating,
                    g = r.showTweet,
                    w = this.context.featureSwitches,
                    O = m || (null == h ? void 0 : h.rest_id),
                    _ = (null == b || null === (e = b.summary) || void 0 === e ? void 0 : e.text) || '',
                    S = (null == b || null === (t = b.summary) || void 0 === t ? void 0 : t.entities) || [],
                    C = (null == i ? void 0 : i.data_v1) || {},
                    j = (null == i ? void 0 : i.data_v2) || {},
                    T = 2 === (null == i ? void 0 : i.version),
                    A = T ? j : C,
                    I = Object(x.a)(A),
                    R = (w.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && I) || T,
                    D =
                      (w.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        w.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      v,
                    k = w.isTrue('responsive_web_birdwatch_appeals_enabled') && this.state.appealsRequestOpen,
                    M = this.props.note.birdwatch_profile,
                    H = (null == M ? void 0 : M.alias) || '',
                    F = (null == M ? void 0 : M.badges) || [],
                    z = function () {
                      return n.setState({ noteDetailsOpen: !1 })
                    }
                  return E.createElement(Se.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(
                      P.a,
                      { key: f, style: On.noteContainer },
                      k && n._renderAppealsModal(),
                      E.createElement(
                        P.a,
                        { style: On.noteTopContainer },
                        g && O
                          ? E.createElement(
                              P.a,
                              { style: On.tweetContainer },
                              E.createElement(jt.a, { isCondensed: !0, tweetId: O }),
                            )
                          : null,
                        E.createElement(
                          P.a,
                          { style: [On.noteTop, g && On.noteTopWithQT] },
                          E.createElement(
                            P.a,
                            { style: On.noteBody },
                            E.createElement(
                              Rt.a,
                              { style: On.noteInfoMiddots },
                              (function (e) {
                                switch (e) {
                                  case hn:
                                    return wn(On.iconGreen, tn)
                                  case yn:
                                    return wn(On.iconRed, rn)
                                  case vn:
                                    return wn(On.iconGray, nn)
                                  default:
                                    return null
                                }
                              })(c),
                              t >= N.a.theme.breakpoints.medium ? gn(c, u, p) : null,
                              o
                                ? E.createElement(Dt.a, { style: [On.ratingInfoItem, On.timestamp], timestamp: o })
                                : null,
                            ),
                            t < N.a.theme.breakpoints.medium
                              ? E.createElement(Rt.a, { style: On.noteInfoMiddots }, gn(c, u, p))
                              : null,
                            E.createElement(
                              P.a,
                              { style: On.noteTextSection },
                              E.createElement(Tt.a, { entities: S, onEntityClick: n._scribeOnClick('link'), text: _ }),
                            ),
                          ),
                          E.createElement(B.a, { renderActionMenu: n._renderCurationActionMenu, style: On.caret }),
                        ),
                        D
                          ? E.createElement(
                              P.a,
                              { style: On.ratingContainer },
                              R
                                ? E.createElement(it, { noteId: f, rating: j, ratingSurvey: l })
                                : E.createElement(we, { noteId: f, rating: C }),
                            )
                          : null,
                        w.isTrue('responsive_web_birdwatch_appeals_enabled') ? n._renderAppealsStatus() : null,
                      ),
                      y &&
                        O &&
                        w.isTrue('responsive_web_birdwatch_rating_participant_enabled') &&
                        E.createElement(
                          kt.a,
                          null,
                          E.createElement(
                            L.b,
                            {
                              link: '/i/birdwatch/t/'.concat(O),
                              onPress: n._scribeOnClick('pivot'),
                              style: [On.pivot, g && On.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            en,
                          ),
                        ),
                      n.state.noteDetailsOpen &&
                        E.createElement(Ct, {
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
            n
          )
        })(E.Component)
      v()(En, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), v()(En, 'contextType', S.a)
      var On = N.a.create(function (e) {
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
        _n = function (e) {
          return E.createElement(Mt.a, { style: [On.icon, e] })
        },
        Sn = {
          accessibilityLabel: an,
          containerStyle: On.infoItemContainer,
          items: [
            { label: '', decoration: E.createElement(Ht.a, { style: On.iconAppeals }), description: ln },
            { label: '', decoration: E.createElement(Vt, { style: On.iconAppeals }), description: sn },
            { label: '', decoration: E.createElement(Xt.a, { style: On.iconAppeals }), description: un },
          ],
        },
        Cn = ut(En)
      t.a = Cn
    },
    b5s6: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n('v6aA'),
        s = n('XOJV'),
        u = n('eSoz'),
        d = n('rxPX'),
        p = n('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        b = function (e, t) {
          var n = t.tweetId,
            r = n && s.a.select(e, n)
          return r ? Object(u.g)(e, r) : void 0
        },
        m = Object(d.a)()
          .propsFromState(function () {
            return { community: b, hydratedTweet: s.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        y = n('uCxL'),
        v = n('x5Pi'),
        g = m(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            s =
              (e.tweetId,
              i()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = c.useContext(l.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            f = null == o ? void 0 : o.community_id_str
          c.useEffect(
            function () {
              f && Object(h.a)(t) && r(f).catch(n())
            },
            [t, f, n, r],
          )
          var b = d.isTrue('responsive_web_alt_text_badge_enabled'),
            m = o && Object(v.f)(o, p, t),
            g = m && Object(v.e)(m),
            w = d.isTrue('responsive_web_reactions_enabled')
          return c.createElement(
            y.a,
            a()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: b,
              socialContextProps: g,
              tweet: o,
              withReactions: w,
            }),
          )
        })
      t.a = g
    },
    dW4k: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SelfUserNotePageRedirect', function () {
          return E
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Qwev'),
        c = n('v6aA'),
        l = n('9StO'),
        s = n('vZpt'),
        u = n('L5MV'),
        d = n('MvLc'),
        p = n('rxPX'),
        f = n('0KEI'),
        b = Object(p.a)()
          .propsFromState(function () {
            return { userAlias: d.y, showAliasSelfSelect: d.v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: d.l,
              fetchShowAliasSelfSelect: d.j,
            }
          }),
        m = n('3XMw'),
        h = n.n(m),
        y = n('5FtR'),
        v = n('VS6U'),
        g = n('nymP'),
        w = h.a.ff692d63,
        E = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchShowAliasSelfSelect,
            r = e.fetchUserAlias,
            d = e.history,
            p = e.showAliasSelfSelect,
            f = e.userAlias,
            b = o.useContext(c.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            m = o.useState(!0),
            h = a()(m, 2),
            E = h[0],
            O = h[1]
          o.useEffect(
            function () {
              r()
                .then(function () {
                  return O(!1)
                })
                .catch(t())
            },
            [t, r],
          ),
            o.useEffect(
              function () {
                n().catch(t())
              },
              [t, n],
            )
          var _ = function (e) {
            r()
              .then(function () {
                return O(!1)
              })
              .catch(t())
          }
          return o.createElement(v.a, {
            TabBar: u.a,
            history: d,
            logoButton: o.createElement(o.Fragment, null),
            primaryContent: E
              ? o.createElement(i.a, { size: 'large' })
              : f
              ? o.createElement(y.a, { to: '/i/birdwatch/u/'.concat(f) })
              : b && p
              ? o.createElement(l.a, { onAliasSelected: _ })
              : o.createElement(g.a, null),
            sidebarContent: o.createElement(s.a, null),
            title: w,
            withTweetButton: !1,
          })
        },
        O = b(E)
      t.default = O
    },
    eqZz: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        i = n('B/qP'),
        c = n('MWbm'),
        l = n('j7Bv'),
        s = n('t62R'),
        u = n('rHpw'),
        d = o.a.c57760e9,
        p = o.a.c45ef9c1,
        f = o.a.g29805f5,
        b = o.a.b1056323,
        m = function () {
          return r.createElement(i.a, { style: h.innerIconColor })
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
          Top10Author: { badgeStyle: h.goldAward, contributorText: f, badgeText: d },
          Top10Rater: { badgeStyle: h.goldAward, contributorText: f, badgeText: p },
          Top25Author: { badgeStyle: h.silverAward, contributorText: b, badgeText: d },
          Top25Rater: { badgeStyle: h.silverAward, contributorText: b, badgeText: p },
        }
      t.a = function (e) {
        var t = e.badgeType,
          n = y[t],
          a = n.badgeStyle,
          o = n.badgeText,
          i = n.contributorText
        return r.createElement(
          c.a,
          { style: h.awardSection },
          r.createElement(l.a, { Icon: m, size: 'large', style: [h.ratingAward, a] }),
          r.createElement(s.b, { style: h.ratingAwardText, weight: 'bold' }, i),
          r.createElement(s.b, null, o),
        )
      }
    },
    fBGZ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M23.53 15.155c0 .716-.58 1.296-1.296 1.296h-4.128c-.034-.144-.077-.29-.136-.425-.05-.145-.102-.29-.17-.426-.444-.948-1.16-1.74-2.082-2.304-.12-.085-.247-.162-.375-.213-.12-.077-.247-.136-.384-.188.118-.18.255-.34.408-.495.86-.853 2.098-1.322 3.497-1.322h.017c2.738 0 4.648 1.68 4.648 4.077zM21.398 7.77c0 .682-.162 1.21-.478 1.578-.52.588-1.322.665-2.038.665-.725 0-1.527-.077-2.038-.665-.435-.495-.58-1.262-.435-2.328.195-1.5 1.116-2.396 2.464-2.396 1.34 0 2.26.895 2.465 2.396.032.264.058.52.058.75zm-9.408 4.52c-.084 0-.17 0-.246.01.077.008.162.008.24.008.084 0 .178 0 .263-.01-.085-.008-.17-.008-.256-.008z',
            }),
            o.createElement('path', {
              d: 'M14.806 9.8c0 .768-.18 1.356-.537 1.765-.496.57-1.255.708-1.98.733-.017 0-.026.01-.043 0-.085-.01-.17-.01-.256-.01s-.17 0-.246.01c-.742-.017-1.535-.136-2.047-.733-.486-.554-.64-1.416-.478-2.618.23-1.68 1.26-2.686 2.762-2.686s2.54 1.007 2.763 2.687c.044.307.06.588.06.853zm2.43 8.16c0 .786-.63 1.417-1.416 1.417H8.145c-.776 0-1.416-.63-1.416-1.416 0-1.176.46-2.276 1.287-3.103.972-.972 2.405-1.492 3.974-1.5.922 0 1.75.16 2.466.468.136.05.264.11.384.188.128.06.256.128.375.213.563.358 1.032.82 1.373 1.373.085.135.162.28.23.425.068.136.12.28.17.426.163.47.248.974.248 1.51zM.47 15.155c0 .716.58 1.296 1.296 1.296h4.128c.034-.144.077-.29.136-.425.05-.145.102-.29.17-.426.444-.948 1.16-1.74 2.082-2.304.12-.085.247-.162.375-.213.12-.077.247-.136.384-.188-.118-.18-.255-.34-.408-.495-.86-.853-2.098-1.322-3.497-1.322h-.017c-2.746 0-4.648 1.68-4.648 4.077zM2.602 7.77c0 .682.162 1.21.478 1.578.52.588 1.322.665 2.038.665.725 0 1.527-.077 2.038-.665.435-.495.58-1.262.435-2.328-.204-1.5-1.125-2.397-2.472-2.397-1.34 0-2.26.895-2.465 2.396-.034.264-.05.52-.05.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.createElement(i.a.Consumer, null, function (n) {
            return o.createElement(e, a()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    'iCa+': function (e, t, n) {
      'use strict'
      n.r(t)
      n('WNMA'), n('KqXw'), n('MvUL')
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        i = n.p + 'birdwatch_note_live.b1a67015.png',
        c = n('aITJ'),
        l = n('t62R'),
        s = n('feu+'),
        u = n('rHpw'),
        d = n('U+bB'),
        p = n('MWbm'),
        f = o.a.a05667aa,
        b = o.a.j5a1d85a,
        m = o.a.ace99891,
        h = function () {
          return r.createElement(d.a, { source: i, style: y.image })
        },
        y = u.a.create(function (e) {
          return { content: { marginVertical: e.spaces.space16 }, image: { height: '189px', width: '152px' } }
        })
      t.default = function (e) {
        var t = e.history,
          n = e.match.params.tweetId,
          a = r.createElement(p.a, null, r.createElement(l.b, null, f))
        return r.createElement(s.a, {
          actionLabel: b,
          contentStyle: y.content,
          graphic: h,
          graphicDisplayMode: 'illustration',
          headline: m,
          isFullHeightOnMobile: !0,
          onAction: function () {
            t.push('/i/birdwatch/t/'.concat(n))
          },
          onClose: function () {
            c.b.isTwitterApp() || t.replace('/i/status/'.concat(n))
          },
          subtext: a,
          withCloseButton: !c.b.isTwitterApp(),
        })
      }
    },
    mQYW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchNotesUserScreen', function () {
          return he
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('z84I'), n('uFXj'), n('ERkP')),
        i = n('v6aA'),
        c = n('9StO'),
        l = n('eqZz'),
        s = n('97Jx'),
        u = n.n(s),
        d = n('m3Bd'),
        p = n.n(d),
        f = n('ZD0R'),
        b = n('xSpP'),
        m = n('rxPX'),
        h = function (e, t) {
          var n = t.noteId
          return b.a.select(e, n)
        },
        y = Object(m.a)().propsFromState(function () {
          return { note: h }
        })(function (e) {
          var t = e.note,
            n = (e.noteId, p()(e, ['note', 'noteId']))
          return t ? o.createElement(f.a, u()({ note: t }, n)) : null
        }),
        v = n('vZpt'),
        g = n('L5MV'),
        w = (n('WNMA'), n('KqXw'), n('MvLc')),
        E = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        O = n.n(E),
        _ = n('wAC9')
      function S(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j = n('hqKg'),
        T = n('0KEI'),
        A = function (e, t) {
          return t.match.params.alias
        },
        I = function (e, t) {
          return Object(j.createSelector)(A, function (e) {
            return e
              ? (function (e) {
                  return Object(_.a)({
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
        x = function (e, t) {
          return w.p(e, A(0, t))
        },
        P = function (e, t) {
          return w.o(e, A(0, t))
        },
        L = function (e, t) {
          return w.v(e)
        },
        R = Object(m.a)()
          .propsFromState(function () {
            return {
              alias: A,
              notesSlice: I(),
              ratingsData: x,
              contributorBadgeData: P,
              showAliasSelfSelect: L,
              userAlias: w.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchBirdwatchProfile: w.g,
              fetchShowAliasSelfSelect: w.j,
              fetchUserAlias: w.l,
            }
          }),
        D = n('W6+M'),
        k = n('BcsE'),
        B = n('yoO3'),
        N = n('7JQg'),
        M = n('VS6U'),
        H = n('FS1z'),
        F = n('aITJ'),
        z = n('nymP'),
        W = n('MWbm'),
        U = n('t62R'),
        K = n('FIs5'),
        V = n('MtXG'),
        X = n('0yYu'),
        q = n('/yvb'),
        G = n('j7Bv'),
        Z = n('6vad'),
        Q = n('cHvH'),
        Y = n('rHpw'),
        J = n('3XMw'),
        $ = n.n(J),
        ee = n('B/qP'),
        te = n('6s7X'),
        ne = n('ms2t'),
        re = $.a.ff692d63,
        ae = $.a.ab28945b,
        oe = $.a.jaf0d42c,
        ie = $.a.fe27c1e1,
        ce = $.a.b8b34f54,
        le = $.a.fd284b08,
        se = $.a.ff746f63,
        ue = $.a.hc19704b,
        de = $.a.j44125ee,
        pe = $.a.da55067b,
        fe = o.createElement(
          $.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.createElement(U.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, $.a.j1a30557),
        ),
        be = { label: ue, preferredHorizontalOrientation: 'start' },
        me = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        he = function (e) {
          var t = o.useContext(i.a).featureSwitches,
            n = e.alias,
            r = e.contributorBadgeData,
            s = e.createLocalApiErrorHandler,
            u = e.fetchBirdwatchProfile,
            d = e.fetchShowAliasSelfSelect,
            p = e.fetchUserAlias,
            f = e.history,
            b = e.notesSlice,
            m = e.ratingsData,
            h = e.showAliasSelfSelect,
            w = e.userAlias,
            E = o.useState(h),
            O = a()(E, 2),
            _ = O[0],
            S = O[1],
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
                p().catch(s())
              },
              [s, p],
            ),
            o.useEffect(
              function () {
                S(h)
              },
              [h],
            )
          var j,
            T,
            A,
            I,
            x,
            P,
            L,
            R,
            J,
            ue = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            he = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            ve = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            ge = o.useMemo(
              function () {
                return { page: 'birdwatch', section: ue ? 'user_notes_participant' : 'user_notes' }
              },
              [ue],
            ),
            we = o.createElement(K.a, { header: de, message: pe }),
            Ee = o.createElement(z.a, null),
            Oe = function (e) {
              return o.createElement(
                W.a,
                { key: e },
                o.createElement(y, { noteId: e, showPivot: C, showRating: !1, showTweet: !0 }),
                o.createElement(X.a, null),
              )
            },
            _e = function () {
              return C ? Ee : we
            },
            Se = C ? re : ae,
            Ce = ve && _ && C,
            je = ve ? void 0 : '@'.concat(n)
          return o.createElement(
            N.b,
            { namespace: ge },
            o.createElement(
              B.a,
              null,
              o.createElement(M.a, {
                TabBar: g.a,
                backLocation: '/i/birdwatch',
                history: f,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent: Ce
                  ? o.createElement(c.a, {
                      onAliasSelected: function (e) {
                        f.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((T = null == m ? void 0 : m.helpful),
                    (A = null == m ? void 0 : m.somewhatHelpful),
                    (I = null == m ? void 0 : m.notHelpful),
                    (x = void 0 !== T),
                    (P = x && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (L = r || []),
                    (R = o.createElement(te.a, { style: ye.badgeStandingIcon })),
                    (J = o.createElement(q.a, { hoverLabel: be, icon: R, link: me, style: ye.badgeStandingButton })),
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
                            Se,
                          ),
                          o.createElement(X.a, null),
                        ),
                      ve &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(G.a, {
                            Icon: ne.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ye.genericBirdwatchProfileIcon,
                          }),
                          o.createElement(Z.b, { style: ye.profileText, text: Object(D.a)(n) }),
                          o.createElement(U.b, { color: 'gray700', style: ye.birdwatchAliasDisclaimerText }, fe),
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
                              ? o.createElement(Q.a, null, function (e) {
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
                                  o.createElement(G.a, {
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
                      x &&
                        C &&
                        o.createElement(
                          W.a,
                          { style: ye.ratingsContainer },
                          o.createElement(U.b, { style: ye.ratingsReceived, weight: 'bold' }, ce),
                          o.createElement(
                            W.a,
                            { style: ye.ratingNumbers },
                            Object(k.a)(T)
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
                            he && Object(k.a)(A)
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
                                  })(A),
                                )
                              : null,
                            Object(k.a)(I)
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
                      b
                        ? o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(Z.b, { text: C ? oe : ie }),
                            o.createElement(H.a, { module: b, noItemsRenderer: _e, renderer: Oe }),
                          )
                        : null,
                    )),
                sidebarContent: o.createElement(v.a, null),
                subtitle: je,
                title: Se,
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
        ve = R(he)
      t.default = ve
    },
    nIpi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchDownloadDataScreen', function () {
          return k
        })
      n('2G9S'), n('z84I')
      var r = n('ERkP'),
        a = n('vZpt'),
        o = n('L5MV'),
        i = n('MvLc'),
        c = n('hqKg'),
        l = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          return i.u(e)
        },
        d = Object(l.a)()
          .propsFromState(function () {
            return {
              publicData: Object(c.createSelector)(u, function (e) {
                return e
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchPublicData: i.i,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'download_data' }),
        p = n('89Im'),
        f = n('tI3i'),
        b = n.n(f),
        m = n('yoO3'),
        h = n('VS6U'),
        y = n('MWbm'),
        v = n('t62R'),
        g = n('/yvb'),
        w = n('0yYu'),
        E = n('6vad'),
        O = n('rHpw'),
        _ = n('3XMw'),
        S = n.n(_),
        C = S.a.cb1adfa0,
        j = S.a.e72533f5,
        T = S.a.g652cada,
        A = S.a.g4d71b5e,
        I = S.a.b8a27fe1,
        x = S.a.j1c99e0f,
        P = S.a.i6f69313,
        L = S.a.h786cd79,
        R = S.a.d0fe8052,
        D = r.createElement(
          v.b,
          { color: 'gray700', size: 'subtext2' },
          r.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            r.createElement(
              v.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              S.a.g0cacb73,
            ),
          ),
        ),
        k = function (e) {
          var t,
            n,
            i,
            c = e.analytics,
            l = e.createLocalApiErrorHandler,
            s = e.fetchPublicData,
            u = e.history,
            d = e.publicData
          r.useEffect(
            function () {
              s().catch(l())
            },
            [l, s],
          )
          var f,
            O = null == d || null === (t = d.notes) || void 0 === t ? void 0 : t.urls,
            _ = null == O ? void 0 : O.length,
            k = null == d || null === (n = d.ratings) || void 0 === n ? void 0 : n.urls,
            N = null == k ? void 0 : k.length,
            M = null == d || null === (i = d.notes) || void 0 === i ? void 0 : i.created_at,
            H = function (e, t, n, a) {
              return (
                b()(void 0 !== n, 'totalFiles must be defined'),
                r.createElement(
                  y.a,
                  { key: t, style: [B.fileSection, t > 1 && B.fileSectionNotFirst] },
                  r.createElement(
                    v.b,
                    null,
                    r.createElement(S.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: n }),
                  ),
                  r.createElement(g.a, {
                    icon: r.createElement(p.a, null),
                    link: e,
                    onPress:
                      ((o = ''.concat(a, '_').concat(t)),
                      function () {
                        c.scribeAction('click_'.concat(o))
                      }),
                    type: 'brandText',
                  }),
                )
              )
              var o
            },
            F = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                y.a,
                { style: B.headerWrapper },
                r.createElement(v.b, { size: 'title4', style: B.textSection, weight: 'heavy' }, j),
                r.createElement(v.b, { color: 'gray700', style: B.textSection }, T),
                r.createElement(
                  v.b,
                  { color: 'gray700' },
                  A,
                  r.createElement(
                    v.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    I,
                  ),
                  '.',
                ),
              ),
              r.createElement(w.a, null),
              r.createElement(E.b, { text: x }),
              O && (null == O ? void 0 : O.length) > 0
                ? O.map(function (e, t) {
                    return H(e, t + 1, _, 'notes')
                  })
                : r.createElement(v.b, { color: 'gray700', style: B.emptyData }, L),
              r.createElement(w.a, null),
              r.createElement(E.b, { text: P }),
              k && (null == k ? void 0 : k.length) > 0
                ? k.map(function (e, t) {
                    return H(e, t + 1, N, 'ratings')
                  })
                : r.createElement(v.b, { color: 'gray700', style: B.emptyData }, R),
              r.createElement(w.a, null),
              r.createElement(
                y.a,
                { style: B.footerText },
                r.createElement(
                  v.b,
                  { color: 'gray700', style: B.dateGenerated },
                  r.createElement(S.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((f = M),
                      f
                        ? new Date(f).toLocaleString('default', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : ''),
                  }),
                ),
                D,
              ),
            )
          return r.createElement(
            m.a,
            null,
            r.createElement(h.a, {
              TabBar: o.a,
              history: u,
              logoButton: r.createElement(r.Fragment, null),
              primaryContent: F,
              sidebarContent: r.createElement(a.a, null),
              title: C,
              withTweetButton: !1,
            }),
          )
        },
        B = O.a.create(function (e) {
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
        N = d(k)
      t.default = N
    },
    nymP: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('v6aA'),
        o = n('FIs5'),
        i = n('3XMw'),
        c = n.n(i),
        l = { external: !0, pathname: 'https://twitter.github.io/birdwatch/writing-notes' },
        s = c.a.i859a9d3,
        u = c.a.ff3e0be2,
        d = c.a.e9f1fbcb,
        p = c.a.db08295d,
        f = c.a.f4d67927,
        b = c.a.eae6767a
      t.a = function () {
        var e = r.useContext(a.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return r.createElement(o.a, {
          buttonLink: e ? l : '/i/flow/join-birdwatch',
          buttonText: e ? s : u,
          header: e ? d : p,
          message: e ? b : f,
        })
      }
    },
    owBv: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('lTXM'),
        i = n('m3Bd'),
        c = n.n(i),
        l = (n('z84I'), n('ho0z'), n('YeIG')),
        s = n('kLu5'),
        u = n('7MdP')
      function d(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = function (e) {
          var t = Object(s.b)(),
            n = (function (e) {
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
            r = (function (e, t) {
              var n = t.header
              if (n && 'TopicPageHeader' === n.__typename) {
                n.__typename
                var r = n.facepile,
                  a = n.topic,
                  o = c()(n, ['__typename', 'facepile', 'topic']),
                  i = r && Object(u.b)(e, r),
                  l = Object(u.a)(e, a)
                return p(p({}, o), {}, { topicId: l, facepile: i })
              }
            })(t, e),
            a = (function (e, t) {
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
              header: r,
              navBar: a.navBar && a.navBar,
              title: a.title,
              subtitle: a.subtitle,
              scribeConfig: p({}, e.scribeConfig),
            },
          }
        },
        b = n('WpDa'),
        m = n('IcAo')
      function h(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
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
          r =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(b.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (n = t.initialTimeline) &&
                void 0 !== n &&
                n.timeline.timeline
              ? Object(b.a)(t.initialTimeline.timeline.timeline)
              : Object(b.a)(o.c),
          a = f(e),
          i = a.globalObjects,
          c = a.pageConfiguration
        return y(y({}, r), {}, { globalObjects: Object(m.a)(i, r.globalObjects), pageConfiguration: c })
      }
    },
    uw5z: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return z
        })
      var r = n('ERkP'),
        a = n('v6aA'),
        o = n('vZpt'),
        i = n('L5MV'),
        c = (n('WNMA'), n('KqXw'), n('owBv')),
        l = n('ZNT5'),
        s = n('hqKg'),
        u = n('rxPX'),
        d = function (e, t) {
          var n, r
          return (
            (null === (n = t.match) || void 0 === n || null === (r = n.params) || void 0 === r ? void 0 : r.tabId) ||
            void 0
          )
        },
        p = function () {
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
                formatResponse: c.a,
              })
            })(e)
          })
        },
        f = Object(u.a)().propsFromState(function () {
          return { module: p(), selectedTabId: d }
        }),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(b),
        h = n('8UdT'),
        y = n('ezF+'),
        v = n('VPAj'),
        g = (n('hBvt'), n('fs1G')),
        w = n('t62R'),
        E = n('csss'),
        O = function (e) {
          var t = e.link,
            n = e.onClick,
            a = void 0 === n ? g.a : n,
            o = e.subtext,
            i = e.text,
            c = r.createElement(w.b, { color: t ? 'primary' : 'normal' }, i)
          return r.createElement(E.a, { description: o, label: c, link: t, onPress: a })
        },
        _ = n('caTy'),
        S = n('zh9S')
      function C(e, t) {
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
        A = y.e(
          y.g({
            component: O,
            bindActions: Object(v.a)({ scribe: S.c }),
            createProps: function (e) {
              var t = e.actions.scribe,
                n = e.entry,
                r = e.scribeData,
                a = e.scribeNamespace,
                o = n.content,
                i = o.subtext,
                c = o.text,
                l = o.url
              return {
                subtext: i,
                text: c,
                link: l && Object(_.b)(l),
                onClick: function () {
                  t(j(j({}, a), {}, { action: 'click_label' }), r)
                },
              }
            },
          }),
        ),
        I = n('S/Qv'),
        x = n('5Y9N'),
        P = n('Yy//')
      function L(e, t) {
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
      function R(e) {
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
      var D =
          ((T = {}),
          m()(T, h.b.Label, A),
          m()(T, h.b.Message, Object(I.a)({})),
          m()(T, h.b.Tweet, Object(P.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          T),
        k = R(R({}, Object(x.a)({})), D),
        B = n('3XMw'),
        N = n.n(B),
        M = n('UZjl'),
        H = N.a.ha8209bb,
        F = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        z = function (e) {
          var t = r.useContext(a.a).featureSwitches,
            n = e.history,
            c = e.module,
            l = e.selectedTabId,
            s = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            u = r.useMemo(
              function () {
                var e = null != l ? l : 'global_timeline'
                return { page: 'birdwatch', section: s ? ''.concat(e, '_participant') : e }
              },
              [s, l],
            )
          return r.createElement(M.a, {
            TabBar: i.a,
            entryConfiguration: k,
            getTabLink: F,
            history: n,
            initialPageNamespace: u,
            logoButton: r.createElement(r.Fragment, null),
            module: c,
            selectedTabId: l,
            sidebarContent: r.createElement(o.a, null),
            timelinePrefix: 'birdwatch-',
            title: H,
            withTweetButton: !1,
          })
        },
        W = f(z)
      t.default = W
    },
    vZpt: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = (n('uFXj'), n('ERkP')),
        l = n('v6aA'),
        s = n('G6rE'),
        u = n('rxPX'),
        d = n('0KEI'),
        p = function (e, t) {
          return s.e.select(e, '1319036828964454402')
        },
        f = Object(u.a)()
          .propsFromState(function () {
            return { birdwatchAccount: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: s.e.fetchManyIfNeeded,
            }
          }),
        b = n('FQwk'),
        m = n('MWbm'),
        h = n('t62R'),
        y = n('6vad'),
        v = n('/yvb'),
        g = n('h0NW'),
        w = n('rC8y'),
        E = n('rHpw'),
        O = n('3XMw'),
        _ = n.n(O),
        S = n('yygM'),
        C = n('QDet'),
        j = n('wz7L'),
        T = n('88ay'),
        A = _.a.de962615,
        I = _.a.cbfa448b,
        x = _.a.b171d7c4,
        P = '1319036828964454402',
        L = _.a.ab23a972,
        R = _.a.gfa725ae,
        D = _.a.eac7b6ab,
        k = _.a.b0381cfb,
        B = _.a.f0addddc,
        N = _.a.c68f3bcf,
        M = _.a.dfb1f498,
        H = c.createElement(
          h.b,
          null,
          c.createElement(
            _.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            c.createElement(
              h.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              _.a.b8a36128,
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
        z = f(function (e) {
          var t = e.birdwatchAccount,
            n = e.createLocalApiErrorHandler,
            r = e.fetchUsersIfNeeded,
            o = c.useContext(l.a).featureSwitches,
            s = c.useState(null == t ? void 0 : t.following),
            u = i()(s, 2),
            d = u[0],
            p = u[1],
            f = o.isTrue('responsive_web_birdwatch_note_writing_enabled')
          c.useEffect(
            function () {
              r([P])
                .then(function (e) {
                  var t
                  e && p(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(n())
            },
            [n, r],
          )
          var E = c.createElement(
              m.a,
              { style: F.module },
              c.createElement(y.b, { text: A }),
              c.createElement(
                m.a,
                { style: [F.moduleBody, F.row] },
                c.createElement(h.b, { color: 'gray700', style: F.text }, I),
                c.createElement(v.a, { accessibilityLabel: x, link: '/i/flow/join-birdwatch', type: 'brandFilled' }, x),
              ),
            ),
            O = c.createElement(
              m.a,
              { style: F.module },
              c.createElement(y.b, { text: L }),
              c.createElement(
                m.a,
                null,
                c.createElement(T.b, { decoration: T.e, displayMode: 'UserCompact', userId: P, withFollowsYou: !0 }),
              ),
            ),
            _ = function (e) {
              return c.createElement(m.a, { style: F.valueItem }, c.createElement(h.b, { color: 'gray700' }, e))
            },
            z = {
              accessibilityLabel: R,
              items: [
                { label: '', decoration: c.createElement(S.a, { style: F.valueIcon }), description: _(D) },
                { label: '', decoration: c.createElement(C.a, { style: F.valueIcon }), description: _(k) },
                { label: '', decoration: c.createElement(j.a, { style: F.valueIcon }), description: _(B) },
              ],
            },
            W = c.createElement(
              m.a,
              { style: F.module },
              c.createElement(y.b, { text: R }),
              c.createElement(
                m.a,
                { style: F.valuesGroup },
                c.createElement(g.a, a()({}, z, { containerStyle: F.infoItemContainer })),
              ),
              c.createElement(
                m.a,
                { style: F.footer },
                c.createElement(w.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: N,
                  withBottomRadius: !0,
                }),
              ),
            ),
            U = c.createElement(
              m.a,
              { style: F.module },
              c.createElement(y.b, { text: M }),
              c.createElement(m.a, { style: F.moduleBody }, H),
            )
          return c.createElement(
            m.a,
            { accessibilityRole: 'complementary', style: F.root },
            f ? null : E,
            d ? null : O,
            W,
            U,
            c.createElement(
              m.a,
              { style: [F.module, F.transparentModule] },
              c.createElement(b.a, { textColor: 'gray700', withOverflow: !0 }),
            ),
          )
        })
      t.a = z
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
      var r = n('oEOe'),
        a = n('MvLc'),
        o = n('3zvM'),
        i = n('lMB6'),
        c = Object(o.f)({ namespace: 'birdwatchContributorNotes' }),
        l = function (e) {
          return function (t, n, o) {
            var i = o.api
            return r.b(t, { request: i.Birdwatch.deleteNote, params: { note_id: e } })(
              { actionTypes: c.actionTypes.OPTIMISTIC_UPDATE, context: 'DELETE_NOTE' },
              function (t) {
                if (t) return [c.deleteOne(e), Object(a.d)(e)]
              },
            )
          }
        }
      t.a = i.a.register(c)
    },
    yygM: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
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
                a()(e, t, n[t])
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 26 26' },
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
