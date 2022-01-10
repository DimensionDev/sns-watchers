;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36, 167],
  {
    '/ZwF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchTweetNotesScreen', function () {
          return ae
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
        f = n('rxPX'),
        p = n('0KEI'),
        b = function (e, t) {
          return t.match.params.tweetId
        },
        m = function (e, t) {
          return u.r(e, b(0, t))
        },
        h = function (e, t) {
          return u.w(e, b(0, t))
        },
        v = function (e, t) {
          return u.v(e, b(0, t))
        },
        y = Object(f.a)()
          .propsFromState(function () {
            return { ownNoteData: h, fetchStatus: v, tweetId: b, notes: m }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: u.j,
              fetchTweet: d.a.fetchOneIfNeeded,
              fetchUserAlias: u.k,
            }
          }),
        g = n('kGix'),
        w = n('3XMw'),
        E = n.n(w),
        O = n('yoO3'),
        S = n('7JQg'),
        _ = n('VS6U'),
        C = n('xZXe'),
        j = n('MWbm'),
        T = n('FIs5'),
        I = n('htQn'),
        A = n('6vad'),
        x = n('0yYu'),
        P = n('t62R'),
        L = n('/yvb'),
        D = n('Qwev'),
        R = n('rHpw'),
        k = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        B = n.n(k),
        N = n('Lsrn'),
        F = n('k/Ka')
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                B()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var W = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(F.a)(
          'svg',
          M(
            M({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [N.a.root, e.style], viewBox: '0 0 24 24' },
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
      W.metadata = { width: 24, height: 24 }
      var z = W,
        U = n('Nh1N'),
        K = E.a.h8335712,
        V = E.a.fe27c1e1,
        X = E.a.c59107c3,
        G = E.a.i859a9d3,
        q = E.a.ib73f867,
        Z = E.a.efd14e79,
        Q = E.a.d06b723c,
        Y = E.a.j0790071,
        J = E.a.j679dcda,
        $ = E.a.d4f03f72,
        ee = E.a.d94e246a,
        te = E.a.ia596d40,
        ne = E.a.deff0bdd,
        re = o.createElement(T.a, { buttonLink: '/i/birdwatch/about', buttonText: G, header: q }),
        ae = function (e) {
          var t = o.useContext(i.a).featureSwitches,
            n = e.createLocalApiErrorHandler,
            r = e.fetchNotes,
            u = e.fetchStatus,
            d = e.fetchTweet,
            f = e.fetchUserAlias,
            p = e.history,
            b = e.notes,
            m = e.ownNoteData,
            h = e.tweetId,
            v = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            y =
              t.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
              t.isTrue('responsive_web_birdwatch_rating_crowd_enabled'),
            w = o.useMemo(
              function () {
                return { page: 'birdwatch', section: v ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [v],
            ),
            E = o.useState(m),
            T = a()(E, 2),
            R = T[0],
            k = T[1],
            B = function (e) {
              k(null)
            }
          o.useEffect(
            function () {
              h && (r(h).catch(n()), d(h).catch(n()))
            },
            [n, r, d, h],
          ),
            o.useEffect(
              function () {
                k(m)
              },
              [m],
            ),
            o.useEffect(
              function () {
                f().catch(n())
              },
              [n, f],
            )
          var N, F
          return o.createElement(
            S.b,
            { namespace: w },
            o.createElement(
              O.a,
              null,
              o.createElement(_.a, {
                TabBar: s.a,
                backLocation: '/i/birdwatch',
                history: p,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent:
                  ((N = R || b.length),
                  (F = '/i/birdwatch/contribute/'.concat(h)),
                  o.createElement(
                    I.a,
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
                      N
                        ? o.createElement(
                            o.Fragment,
                            null,
                            R &&
                              o.createElement(
                                j.a,
                                null,
                                o.createElement(A.b, { text: K }),
                                o.createElement(c.a, { handleDelete: B, note: R }),
                              ),
                            !!b.length &&
                              o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(x.a, { withTopBorder: !1 }),
                                o.createElement(A.b, { text: V }),
                                o.createElement(
                                  j.a,
                                  { style: [oe.actionModuleContainer, oe.withBottomBorder] },
                                  o.createElement(
                                    j.a,
                                    { style: oe.actionModule },
                                    y
                                      ? o.createElement(z, { style: oe.icon })
                                      : o.createElement(U.a, { style: oe.icon }),
                                    o.createElement(
                                      P.b,
                                      { size: 'headline1', style: oe.header, weight: 'bold' },
                                      y ? Q : $,
                                    ),
                                    o.createElement(P.b, { color: 'gray700' }, y ? Y : ee),
                                    y
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
                                b.map(function (e) {
                                  return o.createElement(
                                    o.Fragment,
                                    { key: e.rest_id },
                                    o.createElement(c.a, { note: e }),
                                    o.createElement(x.a, { withTopBorder: !1 }),
                                  )
                                }),
                                v && !R
                                  ? o.createElement(
                                      j.a,
                                      { style: oe.actionModuleContainer },
                                      o.createElement(
                                        j.a,
                                        { style: oe.actionModule },
                                        o.createElement(P.b, { style: oe.improveText }, te),
                                        o.createElement(
                                          L.a,
                                          { accessibilityLabel: ne, link: F, type: 'brandOutlined' },
                                          ne,
                                        ),
                                      ),
                                    )
                                  : null,
                              ),
                          )
                        : u === g.a.LOADING
                        ? o.createElement(D.a, { accessibilityLabel: Z, size: 'large', style: oe.spinner })
                        : re,
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
        ie = y(ae)
      t.default = ie
    },
    '0SuV': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchPrinciples', function () {
          return I
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
          return a.w(e, c(0, t))
        },
        s = Object(o.a)()
          .propsFromState(function () {
            return { ownNoteData: l, tweetId: c }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: a.j,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form', component: 'values' }),
        u = n('3XMw'),
        d = n.n(u),
        f = n('5FtR'),
        p = n('aITJ'),
        b = n('MWbm'),
        m = n('t62R'),
        h = n('h0NW'),
        v = n('feu+'),
        y = n('rHpw'),
        g = n('yygM'),
        w = n('QDet'),
        E = n('wz7L'),
        O = d.a.gfa725ae,
        S = d.a.c3d89aca,
        _ = d.a.h7ad677b,
        C = d.a.eac7b6ab,
        j = d.a.b0381cfb,
        T = d.a.f0addddc,
        I = function (e) {
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
              return r.createElement(b.a, { style: A.valueItem }, r.createElement(m.b, { color: 'gray700' }, e))
            },
            d = {
              accessibilityLabel: O,
              items: [
                { label: '', decoration: r.createElement(g.a, null), description: u(C) },
                { label: '', decoration: r.createElement(w.a, null), description: u(j) },
                { label: '', decoration: r.createElement(E.a, null), description: u(T) },
              ],
            },
            y = r.createElement(b.a, { style: A.values }, r.createElement(h.a, d))
          return i
            ? r.createElement(f.a, { to: l })
            : r.createElement(v.a, {
                actionLabel: S,
                graphicDisplayMode: 'none',
                headline: _,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), c && o.replace('/i/birdwatch/contribute_form/'.concat(c))
                },
                onClose: function () {
                  s('close'), c && o.goBackThroughModals({ fallbackPath: '/i/status/'.concat(c) })
                },
                subtext: y,
                withCloseButton: !p.b.isTwitterApp(),
              })
        },
        A = y.a.create(function (e) {
          return {
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        x = s(I)
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
        f = n.n(d),
        p = n('ERkP'),
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var v = (function (e) {
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
                  return p.createElement(m.a, { style: y.root })
                },
              },
            ]),
            n
          )
        })(p.Component),
        y = b.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
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
        f = n.n(d),
        p = n('ERkP'),
        b = n('3XMw'),
        m = n.n(b),
        h = n('rHpw'),
        v = n('+/1j'),
        y = n('MWbm')
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
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
                  return p.createElement(
                    y.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: h.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.createElement(y.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.Component)
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
        f = n.n(d),
        p = n('N+ot'),
        b = n.n(p),
        m = n('AuHH'),
        h = n.n(m),
        v = n('KEM+'),
        y = n.n(v),
        g = n('97Jx'),
        w = n.n(g),
        E = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('ERkP')),
        O = n('6rlp'),
        S = n('zh9S'),
        _ = n('G6rE'),
        C = n('rxPX'),
        j = n('0KEI'),
        T = function (e, t) {
          return _.e.select(e, t.userId)
        },
        I = function (e, t) {
          return t.promotedContent
        },
        A = Object(C.a)()
          .propsFromState(function () {
            return { promotedContent: I, user: T }
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
              scribeAction: S.c,
            }
          }),
        x = n('I57f'),
        P = n('vMjK'),
        L = n('MWbm'),
        D = n('IG7M'),
        R = n('rHpw'),
        k = function (e) {
          var t = e.children,
            n = e.promotedContent,
            r = e.user
          return E.createElement(
            L.a,
            { style: B.decorationWrapper },
            t,
            E.createElement(D.a, {
              renderActionMenu: function (e) {
                return E.createElement(P.b, { onClose: e, promotedContent: n, user: r, view: 'follower' })
              },
              style: B.actionMenu,
            }),
          )
        },
        B = R.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        N = n('uIZp'),
        F = n('mN6z'),
        H = n('caTy'),
        M = n('3IPs'),
        W = n('Rp9C'),
        z = n('X04g'),
        U = n('Re5t'),
        K = n('TnY3'),
        V = n('hxu0'),
        X = n('v6aA'),
        G = n('7JQg'),
        q = n('IMA+'),
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
                y()(e, t, n[t])
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
          return E.createElement(D.a, {
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
          f()(n, e)
          var t = J(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.PROFILE_IMAGE_CLICK)
              }),
              y()(u()(e), '_handleCellClick', function () {
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
              y()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Z.b.SCREEN_NAME_CLICK)
              }),
              y()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  r = t.shouldStoreTypeaheadItem,
                  a = t.userId
                n && r && r(z.a.ItemType.USER) && n({ user: { id: a, type: M.a.User } })
              }),
              y()(u()(e), '_scribeAction', function (t) {
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
                          return e.item_type === z.a.ItemType.USER && e.id === s
                        }),
                  d = i.search_details,
                  f = { items: [Y(Y({}, u), W.a.getUserItem(l, a))], profile_id: s, search_details: d }
                o(Y(Y({}, c), t), f)
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
                  return !Object(F.a)(this.props, e)
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
                        q.a,
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
                    f = n.userId
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
                        userId: f,
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
      y()(ae, 'contextType', X.a), y()(ae, 'defaultProps', $.defaultProps)
      var oe = R.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ie = Object(K.a)(Object(V.a)(A($)))
      t.b = Object(G.c)({ element: 'user' })(ie)
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
            return { aliasSelfSelectOptions: c.m }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchAliasSelfSelectOptions: c.e,
              selectAlias: c.l,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'alias_select' }),
        f = n('W6+M'),
        p = n('3XMw'),
        b = n.n(p),
        m = n('t62R'),
        h = n('h0NW'),
        v = n('feu+'),
        y = n('gSL+'),
        g = n('Qwev'),
        w = n('4zmP'),
        E = n('rHpw'),
        O = n('j7Bv'),
        S = n('ms2t'),
        _ = n('VwDm'),
        C = n('EQ/a'),
        j = n('U+bB'),
        T = n('MWbm'),
        I = b.a.f084f1cd,
        A = b.a.ja0ee36f,
        x = b.a.j761c248,
        P = b.a.h66bd30a,
        L = b.a.j48ab593,
        D = b.a.e17c80bc,
        R = b.a.d939cf16,
        k = b.a.a56f0c32,
        B = b.a.d17c59e4,
        N = b.a.i719f8e1,
        F = b.a.d0e190cd,
        H = b.a.e74a2cd5,
        M = b.a.g9677c6d,
        W = b.a.e4a6e006,
        z = b.a.f83d0446,
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
        X = o.createElement(O.a, { Icon: S.a, color: 'neutral', size: 'large', style: V.aliasIcon }),
        G = {
          accessibilityLabel: I,
          containerStyle: V.infoItemContainer,
          items: [
            { label: U(L), decoration: o.createElement(S.a, { style: V.icon }), description: D },
            { label: U(R), decoration: o.createElement(_.a, { style: V.icon }), description: k },
            { label: U(B), decoration: o.createElement(C.a, { style: V.icon }), description: N },
          ],
        },
        q = d(function (e) {
          var t = e.addToast,
            n = e.aliasSelfSelectOptions,
            r = e.createLocalApiErrorHandler,
            i = e.fetchAliasSelfSelectOptions,
            c = e.onAliasSelected,
            l = e.selectAlias,
            s = o.useState(!0),
            u = a()(s, 2),
            d = u[0],
            p = u[1],
            b = o.useState(''),
            E = a()(b, 2),
            O = E[0],
            S = E[1],
            _ = o.useState(!1),
            C = a()(_, 2),
            j = C[0],
            I = C[1]
          o.useEffect(
            function () {
              i()
                .then(function (e) {
                  e && e[0] ? S(e[0]) : I(!0)
                })
                .catch(r())
            },
            [r, i],
          )
          var L,
            D,
            R = o.createElement(
              m.b,
              { color: 'normal', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              P,
            ),
            k = o.createElement(T.a, { style: V.values }, o.createElement(h.a, G)),
            B = o.createElement(v.a, {
              actionLabel: A,
              footer: R,
              graphic: K,
              graphicDisplayMode: 'illustration',
              headline: x,
              isFullHeightOnMobile: !0,
              onAction: function () {
                p(!1)
              },
              subtext: k,
            }),
            N = o.useCallback(
              function (e, t) {
                S(t)
              },
              [S],
            ),
            U = o.createElement(
              T.a,
              null,
              o.createElement(m.b, { style: V.aliasSubtext }, H),
              n
                ? o.createElement(
                    T.a,
                    { style: V.aliasSelectContainer },
                    o.createElement(y.a, {
                      name: 'example',
                      onChange: N,
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
                : o.createElement(g.a, null),
              j ? o.createElement(w.a, { text: W, type: 'danger' }) : void 0,
            ),
            q = o.createElement(v.a, {
              actionLabel: M,
              footer: R,
              graphicDisplayMode: 'none',
              headline: F,
              isFullHeightOnMobile: !0,
              onAction: function () {
                O &&
                  l(O)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (c(!1), t({ text: z, withClearButton: !0 }))
                        : I(!0)
                    })
                    .catch(function (e) {
                      r({ defaultToast: { text: W, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: U,
            })
          return d ? B : q
        })
      t.a = q
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
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        h = n.n(m),
        v = (n('2G9S'), n('KOtZ'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        y = n('3XMw'),
        g = n.n(y),
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var _ = g.a.cfd2f35d,
        C = (function (e) {
          u()(n, e)
          var t = S(n)
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
                    : v.createElement(E.a, {
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
                    r = t.headline,
                    a = t.label,
                    o = t.text,
                    i = t.withCancelButton
                  return v.createElement(O.a, {
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
        })(v.Component),
        j = Object(w.a)(function (e, t, n, r) {
          return e.reduce(function (e, a, o) {
            var i = a.Icon,
              c = a.behavioralEventContext,
              l = a.confirmation,
              s = a.disabled,
              u = a.excludeFromActionMenu,
              d = a.isEmphasized,
              f = a.link,
              p = a.onClick,
              b = a.subText,
              m = a.testID,
              h = a.text
            a.withCancelButton
            if (!u) {
              var v = p
                ? function () {
                    l
                      ? l.render
                        ? r({ callback: p, render: l.render })
                        : r({
                            callback: p,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (p(), n())
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
                onClick: v,
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
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        h = n.n(m),
        v = (n('2G9S'), n('ERkP')),
        y = n('rxPX'),
        g = n('0KEI'),
        w = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(y.a)()
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
        S = n('v//M'),
        _ = n('sIe2'),
        C = n('3XMw'),
        j = n.n(C),
        T = n('TEoO')
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
          var n,
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var A = j.a.i9028824,
        x = 'sliceTimeline',
        P = function (e) {
          return e
        },
        L = { viewType: 'timeline' },
        D = (function (e) {
          u()(n, e)
          var t = I(n)
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
                  ? v.createElement(T.a, {
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
                  : v.createElement(_.a, {
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
                    ? v.createElement(S.a, {
                        accessibilityLabel: A,
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
        })(v.Component)
      h()(D, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var R = O(D)
      t.a = R
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
        f = n('VS6U'),
        p = n('t62R'),
        b = n('/yvb'),
        m = n('rHpw'),
        h = n('U+bB'),
        v = n('MWbm'),
        y = s.a.b721eb37,
        g = s.a.a225549d,
        w = [s.a.bc203ca1, s.a.iea72310, s.a.c337f3d1],
        E = s.a.ff3e0be2,
        O = s.a.i859a9d3,
        S = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        _ = { page: 'birdwatch', section: 'about' },
        C = function (e) {
          var t = e.history,
            n = r.useContext(a.a).featureSwitches,
            l = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                v.a,
                { style: j.header },
                r.createElement(v.a, { style: j.imageContainer }, r.createElement(h.a, { source: o, style: j.image })),
              ),
              r.createElement(
                v.a,
                { style: j.content },
                r.createElement(p.b, { size: 'title4', style: j.textSection, weight: 'heavy' }, g),
                w.map(function (e, t) {
                  return r.createElement(p.b, { color: 'gray700', key: 'aboutText'.concat(t), style: j.textSection }, e)
                }),
              ),
              r.createElement(v.a, { style: j.learnMore }, r.createElement(p.b, { link: S }, O)),
              !n.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                r.createElement(
                  v.a,
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
            { namespace: _ },
            r.createElement(
              u.a,
              null,
              r.createElement(f.a, {
                TabBar: c.a,
                history: t,
                logoButton: r.createElement(r.Fragment, null),
                primaryContent: l,
                sidebarContent: r.createElement(i.a, null),
                title: y,
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
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        h = n.n(m),
        v = (n('2G9S'), n('ERkP')),
        y = n('MvLc'),
        g = n('rxPX'),
        w = n('0KEI'),
        E = Object(g.a)()
          .propsFromState(function () {
            return { userAlias: y.x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: y.k,
            }
          })
          .withAnalytics({ page: 'birdwatch', component: 'birdwatch_tab_bar' }),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('gASw'),
        C = n('v6aA'),
        j = n('C6f5'),
        T = n('2qZs'),
        I = n('PU7B'),
        A = n('YI7k'),
        x = n('boUI'),
        P = n('6ZHn'),
        L = n('89Im'),
        D = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        R = n('k/Ka')
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
        return Object(R.a)(
          'svg',
          B(
            B({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [D.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.createElement(
            'g',
            null,
            v.createElement('path', {
              d: 'M11.188 14.813c.217.217.506.337.812.337.307 0 .596-.12.813-.337l5-5c.217-.218.337-.507.337-.815 0-.307-.12-.595-.338-.812-.217-.216-.506-.336-.814-.336h-.003c-.307 0-.594.12-.81.337l-3.035 3.037V2c0-.634-.517-1.15-1.15-1.15-.634 0-1.15.516-1.15 1.15v9.225L7.813 8.188C7.596 7.97 7.307 7.85 7 7.85c-.308 0-.596.12-.813.338-.218.22-.337.51-.337.817 0 .306.12.593.337.808l5 5z',
            }),
            v.createElement('path', {
              d: 'M21.25 12.85c-.634 0-1.15.517-1.15 1.15v5.652c0 .216-.176.392-.392.392H4.292c-.216 0-.392-.176-.392-.392V14c0-.634-.516-1.15-1.15-1.15S1.6 13.366 1.6 14v5.652c0 1.484 1.208 2.692 2.692 2.692h15.416c1.484 0 2.692-1.208 2.692-2.692V14c0-.634-.516-1.15-1.15-1.15z',
            }),
          ),
        )
      }
      N.metadata = { width: 24, height: 24 }
      var F = N,
        H = n('6s7X'),
        M = n('Nh1N')
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
          var n,
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var z = S.a.d5b2da0a,
        U = S.a.b5711f09,
        K = S.a.ha8209bb,
        V = S.a.ff692d63,
        X = S.a.cb1adfa0,
        G = S.a.b721eb37,
        q = function (e, t) {
          return (
            '/i/birdwatch' === t.pathname || '/i/birdwatch/all' === t.pathname || '/i/birdwatch/helpful' === t.pathname
          )
        },
        Z = function () {
          return !1
        },
        Q = (function (e) {
          u()(n, e)
          var t = W(n)
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
                    i = void 0 !== o && o
                  return v.createElement(
                    j.b,
                    { layout: n, primaryLabel: z, wideMode: a },
                    v.createElement(_.a, {
                      accessibilityLabel: U,
                      isActive: Z,
                      label: U,
                      layout: n,
                      onClick: this._handleTabClickFactory('home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(T.a, T.a, n),
                      withLabel: i,
                    }),
                    v.createElement(_.a, {
                      accessibilityLabel: K,
                      isActive: q,
                      label: K,
                      layout: n,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(I.a, A.a, n),
                      withLabel: i,
                    }),
                    v.createElement(_.a, {
                      accessibilityLabel: V,
                      label: V,
                      layout: n,
                      onClick: this._handleTabClickFactory('user_notes'),
                      path: '/i/birdwatch/u/me',
                      renderIcon: Object(j.c)(x.a, P.a, n),
                      withLabel: i,
                    }),
                    v.createElement(_.a, {
                      accessibilityLabel: X,
                      label: X,
                      layout: n,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: '/i/birdwatch/download-data',
                      renderIcon: Object(j.c)(L.a, F, n),
                      withLabel: i,
                    }),
                    v.createElement(_.a, {
                      accessibilityLabel: G,
                      label: G,
                      layout: n,
                      onClick: this._handleTabClickFactory('about'),
                      path: '/i/birdwatch/about',
                      renderIcon: Object(j.c)(H.a, M.a, n),
                      withLabel: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.Component)
      h()(Q, 'contextType', C.a)
      var Y = E(Q)
      t.a = Y
    },
    MvLc: function (e, t, n) {
      'use strict'
      n.d(t, 'q', function () {
        return L
      }),
        n.d(t, 'w', function () {
          return k
        }),
        n.d(t, 'n', function () {
          return B
        }),
        n.d(t, 't', function () {
          return N
        }),
        n.d(t, 'r', function () {
          return F
        }),
        n.d(t, 'x', function () {
          return M
        }),
        n.d(t, 'u', function () {
          return W
        }),
        n.d(t, 'm', function () {
          return z
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
          return q
        }),
        n.d(t, 'g', function () {
          return Z
        }),
        n.d(t, 'k', function () {
          return Q
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
          return re
        }),
        n.d(t, 'd', function () {
          return ae
        }),
        n.d(t, 'h', function () {
          return oe
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
        f = n('YeIG')
      function p(e, t) {
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
            ? p(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var m = 'birdwatchNotes',
        h = 'rweb/'.concat(m),
        v = Object(u.a)(h, 'DELETE_NOTE'),
        y = Object(u.a)(h, 'CREATE_RATING'),
        g = Object(u.a)(h, 'DELETE_RATING'),
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
        I = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_NOTE_FAILURE',
        }),
        A = 'rweb/birdwatchNotes/SAVE_FORM_DRAFT',
        x = { drafts: {}, notes: {}, tweetNotes: {}, contributor: {}, publicData: {} }
      s.a.register(
        i()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case _.SUCCESS:
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
            case v.SUCCESS:
              var p,
                m = null === (p = t.meta) || void 0 === p ? void 0 : p.note_id
              return m ? b(b({}, e), {}, { notes: Object(d.a)(e.notes, m) }) : e
            case y.SUCCESS:
              var h,
                P = null === (h = t.meta) || void 0 === h ? void 0 : h.note_id,
                L = t.payload
              return P
                ? b(b({}, e), {}, { notes: b(b({}, e.notes), {}, i()({}, P, b(b({}, e.notes[P]), {}, { rating: L }))) })
                : e
            case g.SUCCESS:
              var D,
                R = null === (D = t.meta) || void 0 === D ? void 0 : D.note_id
              if (R) {
                var k = e.notes[R],
                  B = (k.rating, a()(k, ['rating']))
                return b(b({}, e), {}, { notes: b(b({}, e.notes), {}, i()({}, R, b({}, B))) })
              }
              return e
            case C.REQUEST:
              var N,
                F = null === (N = t.meta) || void 0 === N ? void 0 : N.tweet_id
              return F
                ? b(
                    b({}, e),
                    {},
                    {
                      tweetNotes: b(
                        b({}, e.tweetNotes),
                        {},
                        i()({}, F, b(b({}, e.tweetNotes && e.tweetNotes[F]), {}, { fetchStatus: l.a.LOADING })),
                      ),
                    },
                  )
                : e
            case C.FAILURE:
              var H,
                M = null === (H = t.meta) || void 0 === H ? void 0 : H.tweet_id
              return M
                ? b(
                    b({}, e),
                    {},
                    {
                      tweetNotes: b(
                        b({}, e.tweetNotes),
                        {},
                        i()({}, M, b(b({}, e.tweetNotes[M]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case C.SUCCESS:
              var W,
                z,
                U = null === (W = t.payload) || void 0 === W ? void 0 : W.result,
                K = null === (z = t.meta) || void 0 === z ? void 0 : z.tweet_id
              if (U) {
                var V,
                  X,
                  G =
                    null === (V = t.payload) || void 0 === V || null === (X = V.entities) || void 0 === X
                      ? void 0
                      : X.birdwatchNotes[U],
                  q = (null == G ? void 0 : G.ids) || [],
                  Z = q.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  Q = q.map(function (e) {
                    return e.rest_id
                  }),
                  Y = {}
                return (
                  (Y.ids = Q),
                  (Y.fetchStatus = l.a.LOADED),
                  null != G && G.ownNoteId && (Y.ownNoteId = null == G ? void 0 : G.ownNoteId),
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
                  fe = {
                    helpful: null == le ? void 0 : le.ratings_received_helpful_count,
                    notHelpful: null == le ? void 0 : le.ratings_received_not_helpful_count,
                    somewhatHelpful: null == le ? void 0 : le.ratings_received_somewhat_helpful_count,
                  },
                  pe = (null == le ? void 0 : le.badges) || []
                return b(
                  b({}, e),
                  {},
                  {
                    notes: b(b({}, e.notes), ue),
                    contributor: b(
                      b({}, e.contributor),
                      {},
                      i()({}, oe, { badges: pe, notes: de, ratings: fe, fetchStatus: l.a.LOADED }),
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
            case O.SUCCESS:
              var be = t.payload
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { ownAlias: be }) })
            case T.SUCCESS:
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
              var ve,
                ye = t.payload,
                ge = null == ye ? void 0 : ye.result
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
                              null == ye || null === (ve = ye.entities) || void 0 === ve
                                ? void 0
                                : ve.birdwatchNotes[ge],
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
                Se = null === (Oe = t.meta) || void 0 === Oe ? void 0 : Oe.note_id
              return b(
                b({}, e),
                {},
                { notes: b(b({}, e.notes), {}, i()({}, Se, b(b({}, e.notes[Se]), {}, { fetchStatus: l.a.FAILED }))) },
              )
            case E.SUCCESS:
              var _e = t.payload
              return _e ? b(b({}, e), {}, { publicData: _e }) : e
            case w.SUCCESS:
              var Ce,
                je = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.alias
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { ownAlias: je }) })
            case A:
              var Te = t.payload
              if (Object(f.a)(Te)) return e
              var Ie = Te.updates,
                Ae = Te.tweetId
              return b(b({}, e), {}, { drafts: b(b({}, e.drafts), {}, i()({}, Ae, Ie)) })
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
        k = function (e, t) {
          if (!t) return null
          var n = R(e, t)
          return n ? L(e, n) : null
        },
        B = function (e, t) {
          var n, r
          if (t)
            return null === (n = e.birdwatchNotes) || void 0 === n || null === (r = n.contributor[t]) || void 0 === r
              ? void 0
              : r.badges
        },
        N = function (e) {
          return e.birdwatchNotes.publicData
        },
        F = function (e, t) {
          var n = t ? D(e, t) : void 0
          if (n) {
            var r = R(e, t)
            return (
              r &&
                (n = n.filter(function (e) {
                  return e !== r
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
        H = function (e, t) {
          var n = e.birdwatchNotes.contributor[t]
          return n ? n.notes : void 0
        },
        M = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.ownAlias : void 0
        },
        W = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.showAliasSelfSelect : void 0
        },
        z = function (e) {
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
          return function (t, n, r) {
            r.api
            var a = !!D(n(), e),
              o = K(n(), e) === l.a.LOADING
            return a || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, r) {
                      var a = r.api
                      return Object(u.b)(t, { request: a.Birdwatch.fetchNotes, params: { tweet_id: e } })(
                        { actionTypes: C, context: 'FETCH_TWEET_NOTES', meta: { tweet_id: e } },
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
        q = function (e) {
          return function (t, n, r) {
            r.api
            var a = !!e && !!H(n(), e),
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
        Z = function (e) {
          return function (t, n, r) {
            r.api
            var a = !!L(n(), e),
              o = V(n(), e) === l.a.LOADING
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
        Q = function () {
          return function (e, t, n) {
            n.api
            return !!M(t())
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var r = n.api
                  return Object(u.b)(e, { request: r.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: O,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        Y = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: T,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        J = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: S,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        $ = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: w,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        ee = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.Birdwatch.deleteNote, params: { note_id: e } })({
              actionTypes: v,
              context: 'DELETE_NOTE',
              meta: { note_id: e },
            })
          }
        },
        te = function (e, t) {
          return function (n, r, a) {
            var o = a.api
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
                return { type: A, payload: e }
              })(e),
            )
          }
        },
        re = function (e, t) {
          return function (n, r, a) {
            var o = a.api
            return Object(u.b)(n, { request: o.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: y,
              context: 'CREATE_RATING',
              meta: { note_id: e },
            })
          }
        },
        ae = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.Birdwatch.deleteRating, params: { note_id: e } })({
              actionTypes: g,
              context: 'DELETE_RATING',
              meta: { note_id: e },
            })
          }
        },
        oe = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.Birdwatch.fetchPublicData, params: {} })({
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
          return c.q(e, u(0, t))
        },
        f = function (e, t) {
          return c.s(e, u(0, t))
        },
        p = Object(l.a)()
          .propsFromState(function () {
            return { noteData: d, noteId: u, fetchStatus: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: c.g,
            }
          }),
        b = n('kGix'),
        m = n('jHSc'),
        h = n('3XMw'),
        v = n.n(h),
        y = n('aITJ'),
        g = n('MWbm'),
        w = n('FIs5'),
        E = n('htQn'),
        O = n('rHpw'),
        S = n('Qwev'),
        _ = v.a.c87f3cf8,
        C = v.a.i859a9d3,
        j = v.a.efd14e79,
        T = v.a.a5b19492,
        I = o.createElement(w.a, { buttonLink: '/i/birdwatch/about', buttonText: C, header: T }),
        A = function () {
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
            f = d[0],
            p = d[1]
          o.useEffect(
            function () {
              s && n(s).catch(t())
            },
            [t, n, s],
          ),
            o.useEffect(
              function () {
                p(l)
              },
              [l],
            )
          var h = o.createElement(
            E.a,
            null,
            f && f.data_v1
              ? o.createElement(
                  g.a,
                  { style: P.contentWrapper },
                  o.createElement(i.a, {
                    handleDelete: function (e) {
                      p(null)
                    },
                    note: f,
                    showPivot: !0,
                    showTweet: !0,
                  }),
                )
              : r === b.a.LOADING
              ? L
              : I,
          )
          return o.createElement(
            m.b,
            { history: c, renderHeader: y.b.isTwitterApp() ? A : void 0, title: _ },
            o.createElement(g.a, { style: P.contentWrapper }, h),
          )
        },
        P = O.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        L = o.createElement(S.a, { accessibilityLabel: j, size: 'large', style: P.spinner }),
        D = p(x)
      t.default = D
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
          return Ae
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
        f = (n('WNMA'), n('MvLc')),
        p = n('1YZw'),
        b = n('XOJV'),
        m = n('rxPX'),
        h = n('0KEI'),
        v = function (e, t) {
          return t.match.params.tweetId
        },
        y = function (e, t) {
          return f.w(e, v(0, t))
        },
        g = function (e, t) {
          return f.p(e, v(0, t))
        },
        w = function (e, t) {
          return f.u(e)
        },
        E = Object(m.a)()
          .propsFromState(function () {
            return { draftData: g, ownNoteData: y, tweetId: v, showAliasSelfSelect: w, userAlias: f.x }
          })
          .propsFromActions(function () {
            return {
              addToast: p.b,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: f.a,
              fetchNotes: f.j,
              fetchShowAliasSelfSelect: f.i,
              fetchTweet: b.a.fetchOneIfNeeded,
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
        I = n('Rp9C'),
        A = n('xZXe'),
        x = n('aITJ'),
        P = n('MWbm'),
        L = n('t62R'),
        D = n('XiMS'),
        R = n('fyvP'),
        k = n('p+r5'),
        B = n('4zmP'),
        N = n('/yvb'),
        F = n('feu+'),
        H = n('rHpw'),
        M = n('KqB4'),
        W = n.n(M),
        z = n('S1qy'),
        U = n.n(z),
        K = n('Oib4'),
        V = n('DlMI'),
        X = n('ms2t'),
        G = n('I/9y'),
        q = n('EHV7'),
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
        fe = ['believable', 'harmful', 'validation'],
        pe = ['classification', 'summary', 'trustworthy_sources'],
        be = ['misleading_tags'].concat(fe),
        me = ['not_misleading_tags'],
        he = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ve = ['misleading_tags', 'not_misleading_tags'],
        ye = C.a.b47b5a16,
        ge = C.a.i0e66c5a,
        we = C.a.j8e3e3be,
        Ee = C.a.f1e851ff,
        Oe = C.a.ff5dcac8,
        Se = {
          classification: ge,
          misleading_tags: we,
          believable: ge,
          harmful: ge,
          validation: ge,
          summary: Ee,
          not_misleading_tags: we,
          trustworthy_sources: ge,
        },
        _e = C.a.abdd8d09,
        Ce = { explanation: C.a.c097608d, source: C.a.g9cffe15 },
        je = { explanation: C.a.ba25898c, source: C.a.e764d704 },
        Te = { explanation: C.a.gb67e44c, source: C.a.d6b758a1 },
        Ie = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        Ae = function (e) {
          var t = s.useContext(u.a).featureSwitches,
            n = e.addToast,
            r = e.analytics,
            o = e.createLocalApiErrorHandler,
            c = e.createNote,
            f = e.draftData,
            p = e.fetchNotes,
            b = e.fetchShowAliasSelfSelect,
            m = e.fetchTweet,
            h = e.fetchUserAlias,
            v = e.history,
            y = e.ownNoteData,
            g = e.saveFormData,
            w = e.showAliasSelfSelect,
            E = e.tweetId,
            _ = e.userAlias,
            C = function (e) {
              return void 0 === e ? ge : ''
            },
            H = function (e) {
              return U()(e, Ie).weightedLength
            },
            M = function (e) {
              if (!e) return Ee
              var t = H(e.trim())
              return t <= 0 ? Ee : t >= 280 ? Oe : ''
            },
            z = s.useState(f || {}),
            J = l()(z, 2),
            Ae = J[0],
            Pe = J[1],
            Le = s.useState(
              (function () {
                var e = Se
                return (
                  he.forEach(function (t) {
                    e[t] = C(Ae[t])
                  }),
                  ve.forEach(function (t) {
                    var n
                    e[t] = (n = Ae[t]) && n.length > 0 ? '' : we
                  }),
                  (e.summary = M(Ae.summary)),
                  e
                )
              })(),
            ),
            De = l()(Le, 2),
            Re = De[0],
            ke = De[1],
            Be = s.useState(!1),
            Ne = l()(Be, 2),
            Fe = Ne[0],
            He = Ne[1],
            Me = s.useState(!1),
            We = l()(Me, 2),
            ze = We[0],
            Ue = We[1],
            Ke = s.useState(null),
            Ve = l()(Ke, 2),
            Xe = Ve[0],
            Ge = Ve[1],
            qe = s.useState(w),
            Ze = l()(qe, 2),
            Qe = Ze[0],
            Ye = Ze[1],
            Je = '/i/birdwatch/'.concat(E, '/contribute_complete')
          s.useEffect(
            function () {
              E && (m(E).catch(o()), p(E).catch(o()))
            },
            [o, p, m, E],
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
              var t = I.a.forTweet(E)
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
            rt = (null == Ae ? void 0 : Ae.misleading_tags) || [],
            at = (null == Ae ? void 0 : Ae.not_misleading_tags) || [],
            ot = function (e) {
              return (
                Fe &&
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
                    return s.createElement(D.a, {
                      checked: rt.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: nt('misleading_tags')(e.value),
                      style: xe.checkbox,
                    })
                  }),
                  ot(Re.misleading_tags),
                ),
              ),
              fe.map(function (e) {
                return s.createElement(
                  P.a,
                  { key: Y[e].label, style: xe.questionSection },
                  s.createElement(R.a, {
                    label: Y[e].label,
                    name: e,
                    onChange: tt(e),
                    options: Y[e].options,
                    value: Ae[e],
                  }),
                  ot(Re[e]),
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
                  return s.createElement(D.a, {
                    checked: at.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: nt('not_misleading_tags')(e.value),
                    style: xe.checkbox,
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
              var e = Ae.summary || ''
              return !(!lt(pe) || '' !== M(e)) && !!((dt === Z && lt(be)) || (dt === Q && lt(me)))
            },
            ut = function () {
              Ue(!0),
                c(E, Ae)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      n({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(T.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        et('submit_failed'),
                        Ue(!1)
                    } else g({ updates: {}, tweetId: E }), v.replace(Je)
                  })
                  .catch(function (e) {
                    o({ defaultToast: { text: de, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      Ue(!1),
                      et('submit_failed'),
                      Object(T.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            dt = Ae.classification,
            ft = Ae.trustworthy_sources,
            pt = void 0 === ft ? '' : ft ? 'true' : 'false',
            bt = dt === Q,
            mt = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            ht = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            vt = _ && Object(O.a)(_, !0),
            yt = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                P.a,
                { style: xe.tweetContainer },
                s.createElement(A.b, { displayPromotedContent: !1, tweetId: E, withCurationMenu: !1 }),
              ),
              s.createElement(
                P.a,
                { style: xe.formQuestions },
                s.createElement(
                  P.a,
                  { style: xe.questionSection },
                  s.createElement(R.a, {
                    label: Y.classification.label,
                    name: 'misleading_radio',
                    onChange: tt('classification'),
                    options: Y.classification.options,
                    value: dt,
                  }),
                  ot(Re.classification),
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
                          invalid: !!Re.summary && Fe,
                          label: ue,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            g({ updates: Ae, tweetId: E })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            Pe(function (e) {
                              return $($({}, e), {}, { summary: t })
                            }),
                              ke(function (e) {
                                return $($({}, e), {}, { summary: M(t) })
                              })
                          },
                          style: xe.textInput,
                          validLength: 280,
                          value: null == Ae ? void 0 : Ae.summary,
                        }),
                        ot(Re.summary),
                      ),
                    ),
                    s.createElement(
                      P.a,
                      { style: xe.questionSection },
                      s.createElement(R.a, {
                        label: Y.trustworthy_sources.label,
                        name: 'trustworthy_sources_radio',
                        onChange: tt('trustworthy_sources'),
                        options:
                          (($e = Y.trustworthy_sources.options),
                          $e.map(function (e) {
                            return { label: e.label, value: e.value.toString() }
                          })),
                        value: pt,
                      }),
                      ot(Re.trustworthy_sources),
                    ),
                    mt &&
                      !ht &&
                      s.createElement(P.a, { style: xe.callout }, s.createElement(B.a, { Icon: V.a, text: ne })),
                    mt &&
                      ht &&
                      vt &&
                      s.createElement(
                        P.a,
                        { style: xe.callout },
                        s.createElement(B.a, {
                          Icon: X.a,
                          headline: re({ displayAlias: vt }),
                          text: ae,
                          withThumbnail: !0,
                        }),
                      ),
                    Fe &&
                      !st() &&
                      s.createElement(
                        P.a,
                        { style: xe.callout },
                        s.createElement(B.a, { Icon: K.a, text: ye, type: 'danger' }),
                      ),
                    s.createElement(
                      N.a,
                      {
                        disabled: ze,
                        onPress: function () {
                          et('submit'), He(!0)
                          var e = (function () {
                            var e = W()(Ae.summary)
                            if (0 === (null == e ? void 0 : e.length)) return 'source'
                            var t = Ae.summary
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
            : y
            ? s.createElement(j.a, { to: Je })
            : Xe
            ? s.createElement(F.a, {
                actionLabel: _e,
                graphic: 'source' === Xe ? G.a : q.a,
                graphicDisplayMode: 'thumbnail',
                headline: Ce[Xe],
                onAction: function () {
                  et('nudge_edit'), Ge(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = I.a.forTweet(E)
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
                S.b,
                {
                  history: v,
                  onBackClick: function () {
                    et('close'), v.goBack()
                  },
                  renderHeader: x.b.isTwitterApp()
                    ? function () {
                        return null
                      }
                    : void 0,
                  title: ee,
                },
                s.createElement(P.a, { style: xe.contentWrapper }, yt),
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
        Pe = E(Ae)
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
          return v
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
        f = c.a.b5711f09,
        p = c.a.e96677aa,
        b = c.a.f026d2ee,
        m = c.a.i859a9d3,
        h = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        v = function (e) {
          var t = e.history,
            n = r.createElement(
              s.a,
              { style: y.contentWrapper },
              r.createElement(u.a, {
                buttonLink: h,
                buttonText: m,
                buttonType: 'brandOutlined',
                header: p,
                message: b,
              }),
            )
          return r.createElement(l.a, {
            TabBar: o.a,
            history: t,
            logoButton: r.createElement(r.Fragment, null),
            primaryContent: n,
            sidebarContent: r.createElement(a.a, null),
            title: f,
            withTweetButton: !1,
          })
        },
        y = d.a.create(function (e) {
          return { contentWrapper: { marginHorizontal: '100px' } }
        })
      t.default = v
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
        f = n.n(d),
        p = n('N+ot'),
        b = n.n(p),
        m = n('AuHH'),
        h = n.n(m),
        v = n('KEM+'),
        y = n.n(v),
        g = n('ddV6'),
        w = n.n(g),
        E = (n('jQ3i'), n('x4t0'), n('2G9S'), n('OZaJ'), n('ERkP')),
        O = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        S = n.n(O),
        _ = (n('z84I'), n('7x/C'), n('DZ+c'), n('LW0h'), n('v6aA')),
        C = n('MvLc'),
        j = n('rxPX'),
        T = n('0KEI'),
        I = Object(j.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: C.b,
              deleteRating: C.d,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        A = n('ACNv'),
        x = n('YeIG'),
        P = n('MWbm'),
        L = n('t62R'),
        D = n('XiMS'),
        R = n('fyvP'),
        k = n('/yvb'),
        B = n('IG7M'),
        N = n('rHpw'),
        F = (n('yH/f'), n('3XMw')),
        H = n.n(F),
        M = Object.freeze({
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
        W = [M.Informative, M.Clear, M.Empathetic, M.GoodSources, M.UniqueContext, M.Other],
        z =
          ((r = {}),
          y()(r, M.Clear, H.a.dfa44ddd),
          y()(r, M.Empathetic, H.a.hc2b6a7e),
          y()(r, M.GoodSources, H.a.a7bc3191),
          y()(r, M.Informative, H.a.f3e6f0a9),
          y()(r, M.Other, H.a.c365dcc5),
          y()(r, M.UniqueContext, H.a.c5d55592),
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
          y()(a, U.Biased, H.a.bbe8b4ac),
          y()(a, U.Incorrect, H.a.heb35e12),
          y()(a, U.MissingKeyPoints, H.a.c34e0b2b),
          y()(a, U.NoSources, H.a.a802709f),
          y()(a, U.OffTopic, H.a.dd1f17e9),
          y()(a, U.Outdated, H.a.if966b54),
          y()(a, U.Other, H.a.c365dcc5),
          y()(a, U.Rude, H.a.d0ba7db4),
          y()(a, U.TwitterViolationAny, H.a.aa520d31),
          y()(a, U.Unclear, H.a.e25e5ed1),
          a),
        X = n('hiGS'),
        G = n('TW8A'),
        q = n('WtWS')
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
                y()(e, t, n[t])
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
            options: W.map(function (e) {
              return { label: z[e], value: e }
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
        fe = E.createElement(H.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, E.cloneElement(ue, null, H.a.cb1d0ef3)),
        pe = E.createElement(H.a.I18NFormatMessage, { $i18n: 'j575fa79' }, E.cloneElement(ce, null, H.a.he5f1491)),
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
        ve = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          E.cloneElement(ue, null, H.a.cf87d556),
          E.cloneElement(ce, null, H.a.hec80c95),
        ),
        ye = E.createElement(
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
        we = I(function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.createRating,
            a = e.deleteRating,
            o = e.noteId,
            i = e.rating,
            c = E.useContext(_.a).featureSwitches,
            l = i || {},
            s = E.useState(l),
            u = w()(s, 2),
            d = u[0],
            f = u[1],
            p = E.useState(Object(x.a)(i)),
            b = w()(p, 2),
            m = b[0],
            h = b[1],
            v = function (e) {
              return function (t, n) {
                f(function (t) {
                  var r = n
                  return 'true' === n ? (r = !0) : 'false' === n && (r = !1), Q(Q({}, t), {}, y()({}, e, r))
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
                  return E.createElement(D.a, {
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
                        ? Q(
                            Q({}, n),
                            {},
                            y()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : Q(Q({}, n), {}, y()({}, e, [].concat(S()(n[e]), [t])))
                      : Q(Q({}, n), {}, y()({}, e, [t]))
                  })
                }
              }
            },
            T = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            I = void 0 !== (null == d ? void 0 : d.helpful),
            N = I ? (null != d && d.helpful ? 'true' : 'false') : '',
            F = void 0 !== (null == d ? void 0 : d.agree),
            H = F ? (null != d && d.agree ? 'true' : 'false') : ''
          return m
            ? E.createElement(
                P.a,
                { style: ge.root },
                E.createElement(R.a, {
                  label: $.helpful.label,
                  name: $.helpful.label + o,
                  onChange: v('helpful'),
                  options: ie(J),
                  value: N,
                }),
                I && (null != d && d.helpful ? g('helpful_tags') : g('not_helpful_tags')),
                E.createElement(R.a, {
                  label: $.agree.label,
                  name: $.agree.label + o,
                  onChange: v('agree'),
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
                  E.createElement(q.a, { style: ge.icon }),
                  E.createElement(
                    L.b,
                    { size: 'subtext2' },
                    null != d && d.helpful && !F
                      ? de
                      : (null != d && d.helpful) || F
                      ? null != d && d.agree && !I
                        ? pe
                        : (null != d && d.agree) || I
                        ? null != d && d.helpful && null != d && d.agree
                          ? me
                          : null == d || !d.helpful || (null != d && d.agree)
                          ? (null != d && d.helpful) || null == d || !d.agree
                            ? (null != d && d.helpful) || (null != d && d.agree)
                              ? void 0
                              : ye
                            : ve
                          : he
                        : be
                      : fe,
                  ),
                ),
                E.createElement(B.a, {
                  renderActionMenu: function (e) {
                    return E.createElement(A.default, {
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
          r = H.a.a7bc3191,
          a = H.a.a26f8dc1,
          o = H.a.d89cfe9e,
          i = H.a.faa5f9e7,
          c = H.a.c365dcc5
        return e
          ? ((t = {}),
            y()(t, M.GoodSources, r),
            y()(t, M.Clear, a),
            y()(t, M.AddressesClaim, o),
            y()(t, M.ImportantContext, i),
            y()(t, M.UnbiasedLanguage, H.a.gf3b38f4),
            y()(t, M.Other, c),
            t)
          : ((n = {}),
            y()(n, M.GoodSources, r),
            y()(n, M.Clear, a),
            y()(n, M.AddressesClaim, o),
            y()(n, M.ImportantContext, i),
            y()(n, M.Other, c),
            n)
      }
      function Ie(e) {
        return Object.keys(Te(e))
      }
      function Ae(e) {
        var t,
          n,
          r = H.a.ef490ae8,
          a = H.a.bf3dc461,
          o = H.a.heb35e12,
          i = H.a.ib117531,
          c = H.a.c365dcc5
        return e
          ? ((t = {}),
            y()(t, U.NoSources, r),
            y()(t, U.IrrelevantSources, a),
            y()(t, U.Incorrect, o),
            y()(t, U.OpinionSpeculation, H.a.h7c59ea2),
            y()(t, U.Unclear, H.a.d60c0063),
            y()(t, U.MissingKeyPoints, H.a.e06416c9),
            y()(t, U.Rude, H.a.cff1aa8b),
            y()(t, U.NoteNotNeeded, H.a.cc443e25),
            y()(t, U.TwitterViolationAny, i),
            y()(t, U.Other, c),
            t)
          : ((n = {}),
            y()(n, U.NoSources, r),
            y()(n, U.IrrelevantSources, a),
            y()(n, U.Incorrect, o),
            y()(n, U.Unclear, H.a.d60c0063),
            y()(n, U.MissingKeyPoints, H.a.c34e0b2b),
            y()(n, U.Rude, H.a.d24b99ed),
            y()(n, U.TwitterViolationAny, i),
            y()(n, U.Other, c),
            n)
      }
      function xe(e) {
        return Object.keys(Ae(e))
      }
      var Pe = n('EQ/a'),
        Le = n('DlMI')
      function De(e, t) {
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
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
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
        Fe = H.a.abd845fd,
        He = H.a.d96cf7cd,
        Me = H.a.j6aa6172,
        We = H.a.i411275f,
        ze = H.a.e2988ed0,
        Ue = H.a.c1a50438,
        Ke = H.a.d2ae3d42,
        Ve = H.a.c01f8d12,
        Xe = H.a.e21a6afe,
        Ge = H.a.d57ed9c7,
        qe = H.a.b165ae7b,
        Ze = E.createElement(L.b, { weight: 'bold' }),
        Qe = E.createElement(L.b, {
          link: 'https://twitter.github.io/birdwatch/about/overview/#transparency-and-visibility',
          withInteractiveStyling: !0,
          withUnderline: !0,
        }),
        Ye = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'ca2f5036' },
          E.cloneElement(Ze, null, H.a.e0440086),
          E.cloneElement(Qe, null, H.a.e30eecce),
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
            { label: '', decoration: E.createElement(Pe.a, { style: at.iconDataPrivacy }), description: qe },
            { label: '', decoration: E.createElement(Le.a, { style: at.iconDataPrivacy }), description: Ye },
          ],
        },
        it = Se(function (e) {
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
            d = E.useContext(_.a).featureSwitches,
            f = E.useState(l),
            p = w()(f, 2),
            b = p[0],
            m = p[1],
            h = E.useState(Object(x.a)(l)),
            v = w()(h, 2),
            g = v[0],
            O = v[1],
            C = E.useState(!1),
            j = w()(C, 2),
            T = j[0],
            I = j[1],
            R = d.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            F = {
              helpful: { label: H.a.a7338bc2, options: Be },
              helpful_tags: {
                label: H.a.ac7f9745,
                options: Ie(R).map(function (e) {
                  return { label: Te(R)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: H.a.c7751803,
                options: xe(R).map(function (e) {
                  return { label: Ae(R)[e], value: e }
                }),
              },
            },
            M = function (e) {
              r.scribeAction('click_'.concat(e))
            },
            W = function () {
              M('delete'),
                i(c)
                  .then(function (e) {
                    if ('Done' === e.birdwatchnote_rating_delete) {
                      var t = Object.freeze({})
                      m(t), O(!0)
                    }
                  })
                  .catch(a())
            },
            z = function () {
              M('edit'), O(!0)
            },
            K = function () {
              var e, t
              ;(M('submit'),
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
                  text: ze,
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
                            y()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : Re(Re({}, n), {}, y()({}, e, [].concat(S()(n[e]), [t])))
                      : Re(Re({}, n), {}, y()({}, e, [t]))
                  })
                }
              }
            },
            Z = function (e) {
              var t = (b && b[e]) || []
              return E.createElement(
                P.a,
                { style: at.checkboxContainer },
                E.createElement(L.b, { weight: 'bold' }, F[e].label),
                F[e].options.map(function (n) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level) &&
                      n.value === U.TwitterViolationAny
                    ) &&
                    E.createElement(D.a, {
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
            Q = E.createElement(_e.a, null, function (e) {
              var t = e.windowWidth <= N.a.theme.breakpoints.small
              return E.createElement(
                P.a,
                { style: !t && at.helpfulContainer },
                E.createElement(L.b, { style: t && at.helpfulQuestionMobile, weight: 'bold' }, F.helpful.label),
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
                              return Re(Re({}, e), {}, { helpfulness_level: t })
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
              headline: Ge,
              isFullHeightOnMobile: !0,
              onAction: function () {
                K(), t(Ee.c), I(!1)
              },
              onSecondaryAction: function () {
                return I(!1)
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
                          u && d.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? I(!0) : b && K()
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
                    E.createElement(q.a, { style: at.icon }),
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
                      return E.createElement(A.default, {
                        actionItems:
                          ((t = []),
                          t.push({
                            confirmation: { label: He, headline: Me, text: We, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: He,
                            Icon: X.a,
                            onClick: W,
                          }),
                          t.push({ text: Fe, Icon: G.a, onClick: z }),
                          t),
                        onClose: e,
                      })
                      var t
                    },
                  }),
                ),
          )
        }),
        ct = n('XOJV'),
        lt = function (e, t) {
          var n,
            r = null === (n = t.note) || void 0 === n ? void 0 : n.tweet
          return r ? ct.a.selectFetchStatus(e, r.rest_id) : void 0
        },
        st = Object(j.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: lt, userAlias: C.x }
          })
          .propsFromActions(function () {
            return {
              addToast: Oe.b,
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: C.c,
              fetchTweet: ct.a.fetchOneIfNeeded,
              fetchUserAlias: C.k,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        ut = n('eqZz'),
        dt = n('W6+M'),
        ft = n('yrzJ'),
        pt = n('sgih')
      function bt(e) {
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
      var mt = H.a.e4579709,
        ht = H.a.df587b98,
        vt = H.a.fd284b08,
        yt = H.a.h201bdc8,
        gt = H.a.fe1f6043,
        wt = H.a.ia5e7487,
        Et = H.a.j58e7b00,
        Ot = (function (e) {
          f()(n, e)
          var t = bt(n)
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
                        E.createElement(L.b, { size: 'headline1', weight: 'bold' }, mt),
                      ),
                      E.createElement(
                        P.a,
                        { style: St.noteDetails },
                        E.createElement(
                          P.a,
                          { style: [St.noteDetailsSection, St.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: St.noteDetailsText }, ht),
                          E.createElement(L.b, { style: St.noteDetailsContentText }, a),
                        ),
                        E.createElement(
                          P.a,
                          { style: [St.noteDetailsSection, St.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: St.noteDetailsText }, yt),
                          l
                            ? E.createElement(
                                L.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: St.profileText },
                                Object(dt.a)(t),
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
                              Et,
                            ),
                        ),
                        E.createElement(
                          P.a,
                          {
                            style: [St.noteDetailsSection, s ? St.noteDetailsSectionBorder : St.noteDetailsSectionLast],
                          },
                          E.createElement(L.b, { color: 'normal', style: St.noteDetailsText }, gt),
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
                                  return E.createElement(ut.a, { badgeType: e, key: t })
                                })
                              : null,
                          ),
                        E.createElement(P.a, { style: St.contentSpacer }),
                      ),
                      E.createElement(
                        P.a,
                        { style: St.noteDetailsButtonSection },
                        E.createElement(P.a, { style: St.buttonSpacer }),
                        E.createElement(k.a, { onClick: n, style: St.noteDetailsButton, type: 'brandFilled' }, wt),
                      ),
                    )
                  return E.createElement(_e.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(pt.a, {
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
      y()(Ot, 'contextType', _.a)
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
        _t = Ot,
        Ct = n('b5s6'),
        jt = n('rcen'),
        Tt = n('Rp9C'),
        It = 'helpfulRatingTags',
        At = 'notHelpfulRatingTags',
        xt = 'ratingStatus',
        Pt = n('pjBI'),
        Lt = n('GBcw'),
        Dt = n('htQn'),
        Rt = n('zIWA'),
        kt = n('/WPq'),
        Bt = n('x0mb')
      function Nt(e) {
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
      var Ft = H.a.d96cf7cd,
        Ht = H.a.e272836c,
        Mt = H.a.e4579709,
        Wt = H.a.fa0d3ee3,
        zt = H.a.ccf2f24e,
        Ut = H.a.df321fc3,
        Kt = E.createElement(L.b, { color: 'primary' }, Ut),
        Vt = H.a.gdcbac31,
        Xt = H.a.be86e75d,
        Gt = H.a.f2d93c3d,
        qt = 'CurrentlyRatedHelpful',
        Zt = 'CurrentlyRatedNotHelpful',
        Qt = 'NeedsMoreRatings',
        Yt = function (e, t, n) {
          switch (e) {
            case qt:
              if (2 === t.length) {
                var r = w()(t, 2),
                  a = r[0],
                  o = r[1],
                  i = Ie(!0),
                  c = Te(!0),
                  l = i.includes(a) ? c[a] : z[a],
                  s = i.includes(o) ? c[o] : z[o],
                  u = ''.concat(l, ' · ').concat(s)
                return l && s
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: u }, size: 'subtext2', style: en.ratingTag, testID: It },
                      u,
                    )
                  : null
              }
              return null
            case Zt:
              if (2 === n.length) {
                var d = w()(n, 2),
                  f = d[0],
                  p = d[1],
                  b = xe(!0).includes(f) ? Ae(!0)[f] : V[f],
                  m = xe(!0).includes(p) ? Ae(!0)[p] : V[p],
                  h = ''.concat(b, ' · ').concat(m)
                return b && m
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: h }, size: 'subtext2', style: en.ratingTag, testID: At },
                      h,
                    )
                  : null
              }
              return null
            default:
              return null
          }
        },
        Jt = function (e, t) {
          return E.createElement(
            P.a,
            { style: en.ratingInfoItem, testID: xt },
            tn(e),
            E.createElement(L.b, { size: 'subtext2', weight: 'bold' }, t),
          )
        },
        $t = (function (e) {
          f()(n, e)
          var t = Nt(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              y()(u()(a), '_handleFetchTweet', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweet,
                  r = e.note.tweet,
                  o = null == r ? void 0 : r.rest_id
                o && n(o).catch(t())
              }),
              y()(u()(a), '_isOwner', function () {
                var e,
                  t = a.props,
                  n = t.note,
                  r = t.userAlias,
                  o = null == n || null === (e = n.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!r || !o) && o === r
              }),
              y()(u()(a), '_handleDeleteConfirm', function () {
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
                        r && 'Done' === e.birdwatchnote_delete && r(c)
                      })
                      .catch(t())
              }),
              y()(u()(a), '_getMenuActionItems', function () {
                var e = a.props.note,
                  t = e.birdwatch_profile,
                  n = e.rest_id,
                  r = []
                return (
                  null != t &&
                    t.alias &&
                    a._isOwner() &&
                    r.push({
                      confirmation: { label: Ft, headline: Ht, text: Wt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: Ft,
                      Icon: X.a,
                      onClick: a._handleDeleteConfirm,
                    }),
                  r.push({
                    text: zt,
                    Icon: Rt.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(n) },
                    onClick: a._scribeOnClick('report'),
                  }),
                  r.push({ text: Mt, Icon: kt.a, onClick: a._onNoteDetailsClick }),
                  r
                )
              }),
              y()(u()(a), '_onNoteDetailsClick', function () {
                a.setState({ noteDetailsOpen: !0 }), a._scribeOnClick('note_details')
              }),
              y()(u()(a), '_renderCurationActionMenu', function (e) {
                return E.createElement(A.default, { actionItems: a._getMenuActionItems(), onClose: e })
              }),
              y()(u()(a), '_scribeOnClick', function (e) {
                return function () {
                  var t = a.props,
                    n = t.analytics,
                    r = t.note.tweet
                  if (r) {
                    var o = Tt.a.forTweet(r.rest_id)
                    n.scribe({ element: e, action: 'click', data: { targets: [o] } })
                  }
                }
              }),
              y()(u()(a), '_renderQuoteTweet', function () {
                var e = a.props.note.tweet
                return E.createElement(
                  P.a,
                  { style: en.tweetContainer },
                  E.createElement(Ct.a, { isCondensed: !0, tweetId: null == e ? void 0 : e.rest_id }),
                )
              }),
              (a.state = { noteDetailsOpen: !1 }),
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
                    f = void 0 === d ? [] : d,
                    p = a.rest_id,
                    b = a.data_v1,
                    m = a.tweetId,
                    h = a.tweet,
                    v = r.showPivot,
                    y = r.showRating,
                    g = r.showTweet,
                    w = this.context.featureSwitches,
                    O = m || (null == h ? void 0 : h.rest_id),
                    S = (null == b || null === (e = b.summary) || void 0 === e ? void 0 : e.text) || '',
                    _ = (null == b || null === (t = b.summary) || void 0 === t ? void 0 : t.entities) || [],
                    C = (null == i ? void 0 : i.data_v1) || {},
                    j = (null == i ? void 0 : i.data_v2) || {},
                    T = 2 === (null == i ? void 0 : i.version),
                    I = T ? j : C,
                    A = Object(x.a)(I),
                    D = (w.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && A) || T,
                    R =
                      (w.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        w.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      y,
                    k = this.props.note.birdwatch_profile,
                    F = (null == k ? void 0 : k.alias) || '',
                    H = (null == k ? void 0 : k.badges) || [],
                    M = function () {
                      return n.setState({ noteDetailsOpen: !1 })
                    }
                  return E.createElement(_e.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(
                      P.a,
                      { key: p, style: en.noteContainer },
                      E.createElement(
                        P.a,
                        { style: en.noteTopContainer },
                        g && O
                          ? E.createElement(
                              P.a,
                              { style: en.tweetContainer },
                              E.createElement(Ct.a, { isCondensed: !0, tweetId: O }),
                            )
                          : null,
                        E.createElement(
                          P.a,
                          { style: [en.noteTop, g && en.noteTopWithQT] },
                          E.createElement(
                            P.a,
                            { style: en.noteBody },
                            E.createElement(
                              Pt.a,
                              { style: en.noteInfoMiddots },
                              (function (e) {
                                switch (e) {
                                  case qt:
                                    return Jt(en.iconGreen, Vt)
                                  case Zt:
                                    return Jt(en.iconRed, Gt)
                                  case Qt:
                                    return Jt(en.iconGray, Xt)
                                  default:
                                    return null
                                }
                              })(c),
                              t >= N.a.theme.breakpoints.medium ? Yt(c, u, f) : null,
                              o
                                ? E.createElement(Lt.a, { style: [en.ratingInfoItem, en.timestamp], timestamp: o })
                                : null,
                            ),
                            t < N.a.theme.breakpoints.medium
                              ? E.createElement(Pt.a, { style: en.noteInfoMiddots }, Yt(c, u, f))
                              : null,
                            E.createElement(
                              P.a,
                              { style: en.noteTextSection },
                              E.createElement(jt.a, { entities: _, onEntityClick: n._scribeOnClick('link'), text: S }),
                            ),
                          ),
                          E.createElement(B.a, { renderActionMenu: n._renderCurationActionMenu, style: en.caret }),
                        ),
                        R
                          ? E.createElement(
                              P.a,
                              { style: en.ratingContainer },
                              D
                                ? E.createElement(it, { noteId: p, rating: j, ratingSurvey: l })
                                : E.createElement(we, { noteId: p, rating: C }),
                            )
                          : null,
                      ),
                      v &&
                        O &&
                        E.createElement(
                          Dt.a,
                          null,
                          E.createElement(
                            L.b,
                            {
                              link: '/i/birdwatch/t/'.concat(O),
                              onPress: n._scribeOnClick('pivot'),
                              style: [en.pivot, g && en.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            Kt,
                          ),
                        ),
                      n.state.noteDetailsOpen &&
                        E.createElement(_t, {
                          alias: F,
                          closeNoteDetails: M,
                          created_at: o,
                          rest_id: p,
                          userBadges: H,
                        }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(E.Component)
      y()($t, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), y()($t, 'contextType', _.a)
      var en = N.a.create(function (e) {
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
        tn = function (e) {
          return E.createElement(Bt.a, { style: [en.icon, e] })
        },
        nn = st($t)
      t.a = nn
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
        f = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        b = function (e, t) {
          var n = t.tweetId,
            r = n && s.a.select(e, n)
          return r ? Object(u.f)(e, r) : void 0
        },
        m = Object(d.a)()
          .propsFromState(function () {
            return { community: b, hydratedTweet: s.a.createHydratedTweetSelector(p) }
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
        v = n('uCxL'),
        y = n('x5Pi'),
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
            f = u.loggedInUserId,
            p = null == o ? void 0 : o.community_id_str
          c.useEffect(
            function () {
              p && Object(h.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var b = d.isTrue('responsive_web_alt_text_badge_enabled'),
            m = o && Object(y.f)(o, f, t),
            g = m && Object(y.e)(m),
            w = d.isTrue('responsive_web_reactions_enabled')
          return c.createElement(
            v.a,
            a()({}, s, {
              loggedInUserId: f,
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
        f = n('rxPX'),
        p = n('0KEI'),
        b = Object(f.a)()
          .propsFromState(function () {
            return { userAlias: d.x, showAliasSelfSelect: d.u }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: d.k,
              fetchShowAliasSelfSelect: d.i,
            }
          }),
        m = n('3XMw'),
        h = n.n(m),
        v = n('5FtR'),
        y = n('VS6U'),
        g = n('nymP'),
        w = h.a.ff692d63,
        E = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchShowAliasSelfSelect,
            r = e.fetchUserAlias,
            d = e.history,
            f = e.showAliasSelfSelect,
            p = e.userAlias,
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
          var S = function (e) {
            r()
              .then(function () {
                return O(!1)
              })
              .catch(t())
          }
          return o.createElement(y.a, {
            TabBar: u.a,
            history: d,
            logoButton: o.createElement(o.Fragment, null),
            primaryContent: E
              ? o.createElement(i.a, { size: 'large' })
              : p
              ? o.createElement(v.a, { to: '/i/birdwatch/u/'.concat(p) })
              : b && f
              ? o.createElement(l.a, { onAliasSelected: S })
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
        f = o.a.c45ef9c1,
        p = o.a.g29805f5,
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
        v = {
          Top10Author: { badgeStyle: h.goldAward, contributorText: p, badgeText: d },
          Top10Rater: { badgeStyle: h.goldAward, contributorText: p, badgeText: f },
          Top25Author: { badgeStyle: h.silverAward, contributorText: b, badgeText: d },
          Top25Rater: { badgeStyle: h.silverAward, contributorText: b, badgeText: f },
        }
      t.a = function (e) {
        var t = e.badgeType,
          n = v[t],
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
        f = n('MWbm'),
        p = o.a.a05667aa,
        b = o.a.j5a1d85a,
        m = o.a.ace99891,
        h = function () {
          return r.createElement(d.a, { source: i, style: v.image })
        },
        v = u.a.create(function (e) {
          return { content: { marginVertical: e.spaces.space16 }, image: { height: '189px', width: '152px' } }
        })
      t.default = function (e) {
        var t = e.history,
          n = e.match.params.tweetId,
          a = r.createElement(f.a, null, r.createElement(l.b, null, p))
        return r.createElement(s.a, {
          actionLabel: b,
          contentStyle: v.content,
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
          return ge
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
        f = n.n(d),
        p = n('ZD0R'),
        b = n('3zvM'),
        m = n('lMB6'),
        h = Object(b.f)({ namespace: 'birdwatchContributorNotes' }),
        v = m.a.register(h),
        y = n('rxPX'),
        g = function (e, t) {
          var n = t.noteId
          return v.select(e, n)
        },
        w = Object(y.a)().propsFromState(function () {
          return { note: g }
        })(function (e) {
          var t = e.note,
            n = (e.noteId, f()(e, ['note', 'noteId']))
          return t ? o.createElement(p.a, u()({ note: t }, n)) : null
        }),
        E = n('vZpt'),
        O = n('L5MV'),
        S = (n('WNMA'), n('KqXw'), n('MvLc')),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        C = n.n(_),
        j = n('wAC9')
      function T(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                C()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var A = n('hqKg'),
        x = n('0KEI'),
        P = function (e, t) {
          return t.match.params.alias
        },
        L = function (e, t) {
          return Object(A.createSelector)(P, function (e) {
            return e
              ? (function (e) {
                  return Object(j.a)({
                    contextSuffix: 'BIRDWATCH_CONTRIBUTOR_NOTES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Birdwatch.fetchBirdwatchContributorNotesSlice
                    },
                    getEndpointParams: function (t) {
                      return I(I({}, t), {}, { alias: e })
                    },
                    sliceKey: 'birdwatchContributorNotesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        D = function (e, t) {
          return S.o(e, P(0, t))
        },
        R = function (e, t) {
          return S.n(e, P(0, t))
        },
        k = function (e, t) {
          return S.u(e)
        },
        B = Object(y.a)()
          .propsFromState(function () {
            return {
              alias: P,
              notesSlice: L(),
              ratingsData: D,
              contributorBadgeData: R,
              showAliasSelfSelect: k,
              userAlias: S.x,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchBirdwatchProfile: S.f,
              fetchShowAliasSelfSelect: S.i,
              fetchUserAlias: S.k,
            }
          }),
        N = n('W6+M'),
        F = n('BcsE'),
        H = n('yoO3'),
        M = n('7JQg'),
        W = n('VS6U'),
        z = n('FS1z'),
        U = n('aITJ'),
        K = n('nymP'),
        V = n('MWbm'),
        X = n('t62R'),
        G = n('FIs5'),
        q = n('MtXG'),
        Z = n('0yYu'),
        Q = n('/yvb'),
        Y = n('j7Bv'),
        J = n('6vad'),
        $ = n('cHvH'),
        ee = n('rHpw'),
        te = n('3XMw'),
        ne = n.n(te),
        re = n('B/qP'),
        ae = n('6s7X'),
        oe = n('ms2t'),
        ie = ne.a.ff692d63,
        ce = ne.a.ab28945b,
        le = ne.a.jaf0d42c,
        se = ne.a.fe27c1e1,
        ue = ne.a.b8b34f54,
        de = ne.a.fd284b08,
        fe = ne.a.ff746f63,
        pe = ne.a.hc19704b,
        be = ne.a.j44125ee,
        me = ne.a.da55067b,
        he = o.createElement(
          ne.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.createElement(X.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, ne.a.j1a30557),
        ),
        ve = { label: pe, preferredHorizontalOrientation: 'start' },
        ye = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        ge = function (e) {
          var t = o.useContext(i.a).featureSwitches,
            n = e.alias,
            r = e.contributorBadgeData,
            s = e.createLocalApiErrorHandler,
            u = e.fetchBirdwatchProfile,
            d = e.fetchShowAliasSelfSelect,
            f = e.fetchUserAlias,
            p = e.history,
            b = e.notesSlice,
            m = e.ratingsData,
            h = e.showAliasSelfSelect,
            v = e.userAlias,
            y = o.useState(h),
            g = a()(y, 2),
            S = g[0],
            _ = g[1],
            C = v === n
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
            I,
            A,
            x,
            P,
            L,
            D,
            R,
            k = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            B = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            te = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            pe = o.useMemo(
              function () {
                return { page: 'birdwatch', section: k ? 'user_notes_participant' : 'user_notes' }
              },
              [k],
            ),
            ge = o.createElement(G.a, { header: be, message: me }),
            Ee = o.createElement(K.a, null),
            Oe = function (e) {
              return o.createElement(
                V.a,
                { key: e },
                o.createElement(w, { noteId: e, showPivot: C, showRating: !1, showTweet: !0 }),
                o.createElement(Z.a, { withTopBorder: !1 }),
              )
            },
            Se = function () {
              return C ? Ee : ge
            },
            _e = C ? ie : ce,
            Ce = te && S && C,
            je = te ? void 0 : '@'.concat(n)
          return o.createElement(
            M.b,
            { namespace: pe },
            o.createElement(
              H.a,
              null,
              o.createElement(W.a, {
                TabBar: O.a,
                backLocation: '/i/birdwatch',
                history: p,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent: Ce
                  ? o.createElement(c.a, {
                      onAliasSelected: function (e) {
                        p.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((T = null == m ? void 0 : m.helpful),
                    (I = null == m ? void 0 : m.somewhatHelpful),
                    (A = null == m ? void 0 : m.notHelpful),
                    (x = void 0 !== T),
                    (P = x && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (L = r || []),
                    (D = o.createElement(ae.a, { style: we.badgeStandingIcon })),
                    (R = o.createElement(Q.a, { hoverLabel: ve, icon: D, link: ye, style: we.badgeStandingButton })),
                    o.createElement(
                      V.a,
                      null,
                      U.b.isTwitterApp() &&
                        o.createElement(
                          V.a,
                          { style: we.birdwatchProfileContainer },
                          o.createElement(
                            X.b,
                            { numberOfLines: 1, size: 'headline1', style: we.birdwatchProfileTitle, weight: 'bold' },
                            _e,
                          ),
                          o.createElement(Z.a, null),
                        ),
                      te &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(Y.a, {
                            Icon: oe.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: we.genericBirdwatchProfileIcon,
                          }),
                          o.createElement(J.b, { style: we.profileText, text: Object(N.a)(n) }),
                          o.createElement(X.b, { color: 'gray700', style: we.birdwatchAliasDisclaimerText }, he),
                          o.createElement(Z.a, null),
                        ),
                      P &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(J.b, { rightControl: R, text: de }),
                          o.createElement(
                            V.a,
                            { style: we.awardsContainer },
                            L.length > 0
                              ? o.createElement($.a, null, function (e) {
                                  var t = e.windowWidth
                                  return o.createElement(
                                    V.a,
                                    {
                                      style:
                                        t >= ee.a.theme.breakpoints.medium
                                          ? we.badgeContainerLarge
                                          : we.badgeContainerSmall,
                                    },
                                    L &&
                                      L.map(function (e, t) {
                                        return o.createElement(l.a, { badgeType: e, key: t })
                                      }),
                                  )
                                })
                              : o.createElement(
                                  V.a,
                                  { style: we.awardSection },
                                  o.createElement(Y.a, {
                                    Icon: function () {
                                      return o.createElement(re.a, { style: we.noAward })
                                    },
                                    size: 'large',
                                    style: [we.ratingAward, we.noAwardThumbnail],
                                  }),
                                  o.createElement(X.b, { size: 'subtext1', style: we.noAwardText }, fe),
                                ),
                          ),
                        ),
                      x &&
                        C &&
                        o.createElement(
                          V.a,
                          { style: we.ratingsContainer },
                          o.createElement(X.b, { style: we.ratingsReceived, weight: 'bold' }, ue),
                          o.createElement(
                            V.a,
                            { style: we.ratingNumbers },
                            Object(F.a)(T)
                              ? o.createElement(
                                  V.a,
                                  { style: we.helpfulStats },
                                  (function (e) {
                                    return o.createElement(
                                      q.a,
                                      null,
                                      o.createElement(
                                        ne.a.I18NFormatMessage,
                                        { $i18n: 'g6ea1d54' },
                                        o.createElement(q.a.Value, null, ne.a.b5eb23f9({ count: e })),
                                        o.createElement(q.a.Label, null, ne.a.ebecb73c),
                                      ),
                                    )
                                  })(T),
                                )
                              : null,
                            B && Object(F.a)(I)
                              ? o.createElement(
                                  V.a,
                                  { style: we.helpfulStats },
                                  (function (e) {
                                    return o.createElement(
                                      q.a,
                                      null,
                                      o.createElement(
                                        ne.a.I18NFormatMessage,
                                        { $i18n: 'b93058db' },
                                        o.createElement(q.a.Value, null, ne.a.i1f57cc4({ count: e })),
                                        o.createElement(q.a.Label, null, ne.a.e8907cd9),
                                      ),
                                    )
                                  })(I),
                                )
                              : null,
                            Object(F.a)(A)
                              ? ((j = A),
                                o.createElement(
                                  q.a,
                                  null,
                                  o.createElement(
                                    ne.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    o.createElement(q.a.Value, null, ne.a.d551bc31({ count: j })),
                                    o.createElement(q.a.Label, null, ne.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      b
                        ? o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(J.b, { text: C ? le : se }),
                            o.createElement(z.a, { module: b, noItemsRenderer: Se, renderer: Oe }),
                          )
                        : null,
                    )),
                sidebarContent: o.createElement(E.a, null),
                subtitle: je,
                title: _e,
                withTweetButton: !1,
              }),
            ),
          )
        },
        we = ee.a.create(function (e) {
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
        Ee = B(ge)
      t.default = Ee
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
          return i.t(e)
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
              fetchPublicData: i.h,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'download_data' }),
        f = n('89Im'),
        p = n('tI3i'),
        b = n.n(p),
        m = n('yoO3'),
        h = n('VS6U'),
        v = n('MWbm'),
        y = n('t62R'),
        g = n('/yvb'),
        w = n('0yYu'),
        E = n('6vad'),
        O = n('rHpw'),
        S = n('3XMw'),
        _ = n.n(S),
        C = _.a.cb1adfa0,
        j = _.a.e72533f5,
        T = _.a.g652cada,
        I = _.a.g4d71b5e,
        A = _.a.b8a27fe1,
        x = _.a.j1c99e0f,
        P = _.a.i6f69313,
        L = _.a.h786cd79,
        D = _.a.d0fe8052,
        R = r.createElement(
          y.b,
          { color: 'gray700', size: 'subtext2' },
          r.createElement(
            _.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            r.createElement(
              y.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              _.a.g0cacb73,
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
          var p,
            O = null == d || null === (t = d.notes) || void 0 === t ? void 0 : t.urls,
            S = null == O ? void 0 : O.length,
            k = null == d || null === (n = d.ratings) || void 0 === n ? void 0 : n.urls,
            N = null == k ? void 0 : k.length,
            F = null == d || null === (i = d.notes) || void 0 === i ? void 0 : i.created_at,
            H = function (e, t, n, a) {
              return (
                b()(void 0 !== n, 'totalFiles must be defined'),
                r.createElement(
                  v.a,
                  { key: t, style: [B.fileSection, t > 1 && B.fileSectionNotFirst] },
                  r.createElement(
                    y.b,
                    null,
                    r.createElement(_.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: n }),
                  ),
                  r.createElement(g.a, {
                    icon: r.createElement(f.a, null),
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
            M = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                v.a,
                { style: B.headerWrapper },
                r.createElement(y.b, { size: 'title4', style: B.textSection, weight: 'heavy' }, j),
                r.createElement(y.b, { color: 'gray700', style: B.textSection }, T),
                r.createElement(
                  y.b,
                  { color: 'gray700' },
                  I,
                  r.createElement(
                    y.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    A,
                  ),
                  '.',
                ),
              ),
              r.createElement(w.a, null),
              r.createElement(E.b, { text: x }),
              O && (null == O ? void 0 : O.length) > 0
                ? O.map(function (e, t) {
                    return H(e, t + 1, S, 'notes')
                  })
                : r.createElement(y.b, { color: 'gray700', style: B.emptyData }, L),
              r.createElement(w.a, null),
              r.createElement(E.b, { text: P }),
              k && (null == k ? void 0 : k.length) > 0
                ? k.map(function (e, t) {
                    return H(e, t + 1, N, 'ratings')
                  })
                : r.createElement(y.b, { color: 'gray700', style: B.emptyData }, D),
              r.createElement(w.a, null),
              r.createElement(
                v.a,
                { style: B.footerText },
                r.createElement(
                  y.b,
                  { color: 'gray700', style: B.dateGenerated },
                  r.createElement(_.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((p = F),
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
                R,
              ),
            )
          return r.createElement(
            m.a,
            null,
            r.createElement(h.a, {
              TabBar: o.a,
              history: u,
              logoButton: r.createElement(r.Fragment, null),
              primaryContent: M,
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
        f = c.a.db08295d,
        p = c.a.f4d67927,
        b = c.a.eae6767a
      t.a = function () {
        var e = r.useContext(a.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return r.createElement(o.a, {
          buttonLink: e ? l : '/i/flow/join-birdwatch',
          buttonText: e ? s : u,
          header: e ? d : f,
          message: e ? b : p,
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
      function f(e) {
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
      var p = function (e) {
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
            r = (function (e, t) {
              var n = t.header
              if (n && 'TopicPageHeader' === n.__typename) {
                n.__typename
                var r = n.facepile,
                  a = n.topic,
                  o = c()(n, ['__typename', 'facepile', 'topic']),
                  i = r && Object(u.b)(e, r),
                  l = Object(u.a)(e, a)
                return f(f({}, o), {}, { topicId: l, facepile: i })
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
              scribeConfig: f({}, e.scribeConfig),
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
      function v(e) {
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
          a = p(e),
          i = a.globalObjects,
          c = a.pageConfiguration
        return v(v({}, r), {}, { globalObjects: Object(m.a)(i, r.globalObjects), pageConfiguration: c })
      }
    },
    uw5z: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return W
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
                formatResponse: c.a,
              })
            })(e)
          })
        },
        p = Object(u.a)().propsFromState(function () {
          return { module: f(), selectedTabId: d }
        }),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(b),
        h = n('8UdT'),
        v = n('ezF+'),
        y = n('VPAj'),
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
        S = n('caTy'),
        _ = n('zh9S')
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
        I = v.e(
          v.g({
            component: O,
            bindActions: Object(y.a)({ scribe: _.c }),
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
                link: l && Object(S.b)(l),
                onClick: function () {
                  t(j(j({}, a), {}, { action: 'click_label' }), r)
                },
              }
            },
          }),
        ),
        A = n('S/Qv'),
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
          m()(T, h.b.Label, I),
          m()(T, h.b.Message, Object(A.a)({})),
          m()(T, h.b.Tweet, Object(P.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          T),
        k = D(D({}, Object(x.a)({})), R),
        B = n('3XMw'),
        N = n.n(B),
        F = n('UZjl'),
        H = N.a.ha8209bb,
        M = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        W = function (e) {
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
          return r.createElement(F.a, {
            TabBar: i.a,
            entryConfiguration: k,
            getTabLink: M,
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
        z = p(W)
      t.default = z
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
        f = function (e, t) {
          return s.e.select(e, '1319036828964454402')
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { birdwatchAccount: f }
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
        v = n('6vad'),
        y = n('/yvb'),
        g = n('h0NW'),
        w = n('rC8y'),
        E = n('rHpw'),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('yygM'),
        C = n('QDet'),
        j = n('wz7L'),
        T = n('88ay'),
        I = S.a.de962615,
        A = S.a.cbfa448b,
        x = S.a.b171d7c4,
        P = '1319036828964454402',
        L = S.a.ab23a972,
        D = S.a.gfa725ae,
        R = S.a.eac7b6ab,
        k = S.a.b0381cfb,
        B = S.a.f0addddc,
        N = S.a.c68f3bcf,
        F = S.a.dfb1f498,
        H = c.createElement(
          h.b,
          null,
          c.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            c.createElement(
              h.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              S.a.b8a36128,
            ),
          ),
        ),
        M = E.a.create(function (e) {
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
        W = p(function (e) {
          var t = e.birdwatchAccount,
            n = e.createLocalApiErrorHandler,
            r = e.fetchUsersIfNeeded,
            o = c.useContext(l.a).featureSwitches,
            s = c.useState(null == t ? void 0 : t.following),
            u = i()(s, 2),
            d = u[0],
            f = u[1],
            p = o.isTrue('responsive_web_birdwatch_note_writing_enabled')
          c.useEffect(
            function () {
              r([P])
                .then(function (e) {
                  var t
                  e && f(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(n())
            },
            [n, r],
          )
          var E = c.createElement(
              m.a,
              { style: M.module },
              c.createElement(v.b, { text: I }),
              c.createElement(
                m.a,
                { style: [M.moduleBody, M.row] },
                c.createElement(h.b, { color: 'gray700', style: M.text }, A),
                c.createElement(y.a, { accessibilityLabel: x, link: '/i/flow/join-birdwatch', type: 'brandFilled' }, x),
              ),
            ),
            O = c.createElement(
              m.a,
              { style: M.module },
              c.createElement(v.b, { text: L }),
              c.createElement(
                m.a,
                null,
                c.createElement(T.b, { decoration: T.e, displayMode: 'UserCompact', userId: P, withFollowsYou: !0 }),
              ),
            ),
            S = function (e) {
              return c.createElement(m.a, { style: M.valueItem }, c.createElement(h.b, { color: 'gray700' }, e))
            },
            W = {
              accessibilityLabel: D,
              items: [
                { label: '', decoration: c.createElement(_.a, { style: M.valueIcon }), description: S(R) },
                { label: '', decoration: c.createElement(C.a, { style: M.valueIcon }), description: S(k) },
                { label: '', decoration: c.createElement(j.a, { style: M.valueIcon }), description: S(B) },
              ],
            },
            z = c.createElement(
              m.a,
              { style: M.module },
              c.createElement(v.b, { text: D }),
              c.createElement(
                m.a,
                { style: M.valuesGroup },
                c.createElement(g.a, a()({}, W, { containerStyle: M.infoItemContainer })),
              ),
              c.createElement(
                m.a,
                { style: M.footer },
                c.createElement(w.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: N,
                  withBottomRadius: !0,
                }),
              ),
            ),
            U = c.createElement(
              m.a,
              { style: M.module },
              c.createElement(v.b, { text: F }),
              c.createElement(m.a, { style: M.moduleBody }, H),
            )
          return c.createElement(
            m.a,
            { accessibilityRole: 'complementary', style: M.root },
            p ? null : E,
            d ? null : O,
            z,
            U,
            c.createElement(
              m.a,
              { style: [M.module, M.transparentModule] },
              c.createElement(b.a, { textColor: 'gray700', withOverflow: !0 }),
            ),
          )
        })
      t.a = W
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
