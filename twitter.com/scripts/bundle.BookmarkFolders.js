;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    '1kbl': function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ERkP'),
        o = r.n(n),
        a = r('3XMw'),
        c = r.n(a),
        i = r('ggE+'),
        l = r('KQzH'),
        s = r('rHpw'),
        u = r('k89r'),
        d = r('MWbm'),
        m = c.a.bcc7e8cf,
        f = s.a.create(function (e) {
          return {
            thumbnail: {
              borderRadius: e.borderRadii.infinite,
              backgroundColor: s.a.theme.colors.blue500,
              height: '100%',
              width: '100%',
              padding: s.a.theme.spaces.space12,
              alignItems: 'center',
              justifyContent: 'center',
            },
            icon: {
              color: s.a.theme.colors.white,
              width: s.a.theme.fontSizes.title4,
              height: s.a.theme.fontSizes.title4,
            },
          }
        }),
        b = function () {
          var e = Object(u.a)()
          return o.a.createElement(l.a, {
            key: 'AllBookmarksCell',
            label: m,
            link: '/i/bookmarks/all',
            onPress: function () {
              e.scribe({ element: 'bookmarks', action: 'click' })
            },
            thumbnail: o.a.createElement(d.a, { style: f.thumbnail }, o.a.createElement(i.a, { style: f.icon })),
          })
        },
        h = (r('ho0z'), r('Hja3')),
        p = r('rxPX'),
        k = function (e, t) {
          var r = t.bookmarkFolderId
          return r ? h.b.select(e, r) : void 0
        },
        y = Object(p.a)().propsFromState(function () {
          return { bookmarkFolder: k }
        }),
        v = r('U+bB'),
        g = s.a.create(function (e) {
          return { thumbnail: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' } }
        }),
        E = y(function (e) {
          var t,
            r,
            n = e.bookmarkFolder,
            a = Object(u.a)()
          return null != n &&
            null !== (t = n.media) &&
            void 0 !== t &&
            null !== (r = t.media_info) &&
            void 0 !== r &&
            r.original_img_url
            ? o.a.createElement(l.a, {
                key: n.id,
                label: n.name,
                link: '/i/bookmarks/'.concat(n.id),
                onPress: function () {
                  a.scribe({ element: 'bookmark_folder', action: 'click' })
                },
                thumbnail: o.a.createElement(v.a, { source: n.media.media_info.original_img_url, style: g.thumbnail }),
              })
            : null
        }),
        w = r('es0u'),
        O = r('48TD'),
        F = r('hqKg'),
        B = r('oQhu'),
        j = r('G6rE'),
        C = Object(p.a)()
          .propsFromState(function () {
            return {
              loggedInUser: j.e.selectLoggedInUser,
              sliceModule:
                ((e = Object(B.a)(function (e) {
                  return Object(O.a)(e)
                })),
                Object(F.createSelector)(j.e.selectLoggedInUser, function (t) {
                  return null != t && t.id_str ? e(t.id_str) : void 0
                })),
            }
            var e
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              r = e.sliceModule
            return { loggedInUserScreenName: null == t ? void 0 : t.screen_name, sliceModule: r, isLoggedInUser: !!t }
          })
          .withAnalytics({ page: 'bookmark_folders' }),
        _ = r('97Jx'),
        R = r.n(_),
        P = r('m3Bd'),
        I = r.n(P),
        H = r('ZGdk'),
        S = r('/yvb'),
        x = s.a.create(function (e) {
          return {
            button: { marginRight: e.spaces.space4 },
            icon: { width: s.a.theme.fontSizes.title3, height: s.a.theme.fontSizes.title3 },
          }
        }),
        T = c.a.f8fc0b47,
        M = o.a.createElement(H.a, { style: x.icon }),
        L = function (e) {
          var t = e.history,
            r = e.onCreateButtonClick,
            n = e.style,
            a = e.testID,
            c = e.type,
            i = I()(e, ['history', 'onCreateButtonClick', 'style', 'testID', 'type'])
          return o.a.createElement(
            S.a,
            R()({ accessibilityLabel: T, hoverLabel: { label: T } }, i, {
              icon: M,
              onPress: function () {
                r(), t.push({ pathname: '/i/bookmarks/create_folder' })
              },
              pullRight: !0,
              style: [x.button, n],
              testID: a,
              type: c || 'primaryText',
            }),
          )
        },
        D = r('yoO3'),
        A = r('VS6U'),
        z = r('FS1z'),
        K = r('HQ0t'),
        V = r('FIs5'),
        N = r('yrzJ'),
        U = c.a.i3145aa0,
        W = c.a.f8fc0b47,
        X = c.a.j45c642d,
        G = c.a.adad5408,
        J = c.a.be329aab,
        Y = c.a.j0a47c9c,
        Z = C(function (e) {
          var t = e.analytics,
            r = e.history,
            n = e.isLoggedInUser,
            a = e.loggedInUserScreenName,
            c = e.sliceModule,
            i = o.a.useCallback(
              function () {
                r.push({ pathname: '/i/bookmarks/create_folder' })
              },
              [r],
            ),
            l = o.a.useCallback(
              function () {
                return (
                  t.scribePageImpression({ component: 'empty', action: 'impression' }),
                  n ? o.a.createElement(V.a, { buttonText: G, header: J, message: Y, onButtonPress: i }) : null
                )
              },
              [t, i, n],
            ),
            s = function (e) {
              return o.a.createElement(E, { bookmarkFolderId: e, key: e })
            },
            u = o.a.useCallback(
              function () {
                return (
                  c || t.scribeAction('error'),
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(b, null),
                    c
                      ? o.a.createElement(z.a, {
                          alwaysFetch: !0,
                          module: c,
                          noItemsRenderer: l,
                          renderer: s,
                          retryMessage: X,
                        })
                      : null,
                  )
                )
              },
              [c, l, t],
            ),
            d = o.a.createElement(L, {
              accessibilityLabel: W,
              history: r,
              onCreateButtonClick: function () {
                return t.scribe({ element: 'create', action: 'click' })
              },
            })
          return o.a.createElement(
            D.a,
            null,
            o.a.createElement(A.a, {
              backLocation: '/home',
              history: r,
              primaryContent: u(),
              rightControl: d,
              sidebarContent: o.a.createElement(w.a, null),
              subtitle: a ? o.a.createElement(N.a, { screenName: a }) : null,
              title: o.a.createElement(K.a, { text: U }),
              withBackButton: !1,
            }),
          )
        })
      t.default = Z
    },
    '3GUV': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('5Yy7'),
        l = r.n(i),
        s = r('N+ot'),
        u = r.n(s),
        d = r('AuHH'),
        m = r.n(d),
        f = r('ERkP'),
        b = r.n(f),
        h = r('rHpw'),
        p = r('MWbm')
      function k(e) {
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
          var r,
            n = m()(e)
          if (t) {
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var y = (function (e) {
          l()(r, e)
          var t = k(r)
          function r() {
            return o()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return b.a.createElement(p.a, { style: v.root })
                },
              },
            ]),
            r
          )
        })(b.a.Component),
        v = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('5Yy7'),
        l = r.n(i),
        s = r('N+ot'),
        u = r.n(s),
        d = r('AuHH'),
        m = r.n(d),
        f = r('ERkP'),
        b = r.n(f),
        h = r('3XMw'),
        p = r.n(h),
        k = r('rHpw'),
        y = r('+/1j'),
        v = r('MWbm')
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
          var r,
            n = m()(e)
          if (t) {
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var E = p.a.e5b0063d,
        w = 0,
        O = (function (e) {
          l()(r, e)
          var t = g(r)
          function r() {
            var e
            return o()(this, r), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(w)), (w += 1), e
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.title,
                    n = E({ title: r })
                  return b.a.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    b.a.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: k.a.visuallyHidden,
                      },
                      r,
                    ),
                    b.a.createElement(v.a, { accessibilityLabel: n }, t),
                  )
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      t.a = O
    },
    BUB3: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('m3Bd'),
        c = r.n(a),
        i = r('ERkP'),
        l = r.n(i),
        s = r('sNn6'),
        u = r('rHpw'),
        d = r('MWbm')
      function m(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var b = u.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: f(
            f({}, u.a.absoluteFillObject),
            {},
            {
              borderRightStyle: 'solid',
              borderRightWidth: e.borderWidths.medium,
              borderRightColor: e.colors.primary,
              zIndex: 1,
            },
          ),
        }
      })
      t.a = function (e) {
        var t = e.children,
          r = c()(e, ['children'])
        return l.a.createElement(s.a, r, function (e) {
          return l.a.createElement(
            d.a,
            { style: e && b.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(d.a, { pointerEvents: 'none', style: b.overlay }) : null,
          )
        })
      }
    },
    FS1z: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        m = r.n(d),
        f = r('AuHH'),
        b = r.n(f),
        h = r('KEM+'),
        p = r.n(h),
        k = (r('2G9S'), r('ERkP')),
        y = r.n(k),
        v = r('rxPX'),
        g = r('0KEI'),
        E = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        w = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(v.a)()
          .propsFromState(function (e) {
            return { fetchStatus: E, items: w }
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
        F = r('v//M'),
        B = r('sIe2'),
        j = r('3XMw'),
        C = r.n(j),
        _ = r('TEoO')
      function R(e) {
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
          var r,
            n = b()(e)
          if (t) {
            var o = b()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return m()(this, r)
        }
      }
      var P = C.a.i9028824,
        I = 'sliceTimeline',
        H = function (e) {
          return e
        },
        S = { viewType: 'timeline' },
        x = (function (e) {
          u()(r, e)
          var t = R(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              p()(l()(e), '_render', function () {
                var t = e.props,
                  r = t.footer,
                  n = t.items,
                  o = t.noItemsRenderer,
                  a = t.numColumns,
                  c = t.onScrollEnd,
                  i = t.renderer,
                  l = t.withoutHeadroom
                return !n || a < 1
                  ? null
                  : 1 === a
                  ? y.a.createElement(_.a, {
                      cacheKey: I,
                      footer: r,
                      identityFunction: H,
                      items: n,
                      noItemsRenderer: o,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: c,
                      renderer: i,
                      withoutHeadroom: l,
                    })
                  : y.a.createElement(B.a, {
                      ListEmptyComponent: o,
                      data: n,
                      keyExtractor: H,
                      numColumns: a,
                      renderItem: i,
                    })
              }),
              p()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(r())
              }),
              p()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.alwaysFetch,
                  n = t.createLocalApiErrorHandler,
                  o = t.fetch,
                  a = t.fetchIfNeeded
                ;(r ? o : a)().catch(n())
              }),
              e
            )
          }
          return (
            c()(r, [
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
                    r = e.module,
                    n = e.retryMessage
                  return r
                    ? y.a.createElement(F.a, {
                        accessibilityLabel: P,
                        behavioralEventContext: S,
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
            r
          )
        })(y.a.Component)
      p()(x, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var T = O(x)
      t.a = T
    },
    HQ0t: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = r.n(n),
        a = r('v6aA'),
        c = r('3XMw'),
        i = r.n(c),
        l = r('Q3sg'),
        s = r('rHpw'),
        u = i.a.g4782c0a,
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
        var t = o.a.useContext(a.a),
          r = t.featureSwitches,
          n = t.userClaims,
          c = r.isTrue('subscriptions_blue_premium_labeling_enabled'),
          i = n.isTwitterBlueSubscriber(),
          s = e.style,
          m = e.text
        return i && c
          ? o.a.createElement(
              o.a.Fragment,
              null,
              m,
              o.a.createElement(l.a, { accessibilityLabel: u, style: [d.icon, s] }),
            )
          : m
      }
    },
    Iehm: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'AddToBookmarkFolderModal', function () {
          return ne
        })
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        m = r.n(d),
        f = r('AuHH'),
        b = r.n(f),
        h = r('KEM+'),
        p = r.n(h),
        k = (r('2G9S'), r('ERkP')),
        y = r.n(k),
        v = (r('ho0z'), r('1YZw')),
        g = r('Hja3'),
        E = r('rxPX'),
        w = function (e, t) {
          var r = t.bookmarkFolderId
          return r ? g.b.select(e, r) : void 0
        },
        O = Object(E.a)()
          .propsFromState(function () {
            return { bookmarkFolder: w }
          })
          .propsFromActions(function () {
            return {
              addToast: v.b,
              addTweetToBookmarkFolder: g.b.addTweetToBookmarkFolder,
              removeTweetFromBookmarkFolder: g.b.removeTweetFromBookmarkFolder,
            }
          }),
        F = r('3XMw'),
        B = r.n(F),
        j = r('IMYl'),
        C = r('U+bB'),
        _ = r('Irs7'),
        R = r('htQn'),
        P = r('t62R'),
        I = r('rHpw'),
        H = B.a.e41c9b4f,
        S = B.a.a2e7377e,
        x = O(function (e) {
          var t,
            r,
            n,
            o,
            a = e.addTweetToBookmarkFolder,
            c = e.bookmarkFolder,
            i = e.removeTweetFromBookmarkFolder,
            l = e.tweetId,
            s = Object(_.b)()
          if (
            null == c ||
            null === (t = c.media) ||
            void 0 === t ||
            null === (r = t.media_info) ||
            void 0 === r ||
            !r.original_img_url
          )
            return null
          var u = c.name,
            d =
              null === (n = c.media) || void 0 === n || null === (o = n.media_info) || void 0 === o
                ? void 0
                : o.original_img_url,
            m = (null == c ? void 0 : c.id) || '',
            f = c.contains_requested_tweet
          if (!m || !l) return null
          return y.a.createElement(
            R.a,
            {
              onPress: function () {
                var t = e.addToast,
                  r = e.history
                f
                  ? i(m, { tweetId: l }).then(
                      function () {
                        t({ text: S({ bookmarkFolderName: u }) }),
                          s.scribe({ component: 'bookmark_folder', element: 'remove', action: 'success' })
                      },
                      function () {
                        s.scribe({ component: 'bookmark_folder', element: 'remove', action: 'error' })
                      },
                    )
                  : a(m, { tweetId: l }).then(
                      function () {
                        u &&
                          (t({ text: H({ bookmarkFolderName: u }) }),
                          s.scribe({ component: 'bookmark_folder', element: 'add', action: 'success' }))
                      },
                      function () {
                        s.scribe({ component: 'bookmark_folder', element: 'add', action: 'error' })
                      },
                    ),
                  r.goBackThroughModals()
              },
              style: [T.root, T.paddingHorizontal, T.contentContainer],
            },
            d ? y.a.createElement(C.a, { source: d, style: T.thumbnailContainer }) : null,
            y.a.createElement(P.b, { style: T.content }, u),
            f ? y.a.createElement(j.a, { style: T.icon }) : null,
          )
        }),
        T = I.a.create(function (e) {
          return {
            root: {
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              minHeight: 'calc('
                .concat(I.a.theme.lineHeights.headline1, ' + 2 * ')
                .concat(e.componentDimensions.gutterVertical, ')'),
            },
            contentContainer: { alignItems: 'center', flexDirection: 'row', flexGrow: 1 },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.blue500, paddingLeft: e.spaces.space12, flexShrink: 0 },
            thumbnailContainer: {
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space48,
              width: e.spaces.space48,
              marginRight: e.spaces.space16,
            },
            paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        M = r('48TD'),
        L = r('hqKg'),
        D = r('G6rE'),
        A = function (e, t) {
          var r, n
          return null === (r = t.location) || void 0 === r || null === (n = r.state) || void 0 === n
            ? void 0
            : n.tweet_id
        },
        z = Object(E.a)().propsFromState(function () {
          return {
            sliceModule: Object(L.createSelector)(D.e.selectLoggedInUser, A, function (e, t) {
              return null != e && e.id_str ? Object(M.a)(e.id_str, t) : void 0
            }),
            tweetId: A,
          }
        }),
        K = r('jHSc'),
        V = r('FS1z'),
        N = r('HQ0t'),
        U = r('MWbm'),
        W = r('FIs5'),
        X = r('jtO7'),
        G = r('cm6r'),
        J = r('ggE+')
      function Y(e) {
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
          var r,
            n = b()(e)
          if (t) {
            var o = b()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return m()(this, r)
        }
      }
      var Z = B.a.c2453317,
        Q = B.a.bcc7e8cf,
        q = B.a.adad5408,
        $ = B.a.be329aab,
        ee = B.a.j0a47c9c,
        te = B.a.beba2a0d,
        re = B.a.j45c642d,
        ne = (function (e) {
          u()(r, e)
          var t = Y(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              p()(l()(e), '_handleCreateFolderPress', function () {
                var t = e.props,
                  r = t.history,
                  n = t.tweetId
                r.push({ pathname: '/i/bookmarks/create_folder', state: { tweet_id: n } })
              }),
              p()(l()(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              p()(l()(e), '_renderEmptyState', function () {
                return y.a.createElement(W.a, {
                  buttonText: q,
                  header: $,
                  message: ee,
                  onButtonPress: e._handleCreateFolderPress,
                })
              }),
              p()(l()(e), '_renderBookmarkFolder', function (t) {
                var r = e.props,
                  n = r.history,
                  o = r.tweetId
                return y.a.createElement(x, { bookmarkFolderId: t, history: n, key: t, tweetId: o })
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.sliceModule
                  return e
                    ? y.a.createElement(
                        K.b,
                        {
                          backButtonType: 'close',
                          documentTitle: Z,
                          onBackClick: this._handleBackClick,
                          title: y.a.createElement(N.a, { text: Z }),
                        },
                        y.a.createElement(X.a, {
                          align: 'left',
                          color: 'primary',
                          label: te,
                          onPress: this._handleCreateFolderPress,
                        }),
                        y.a.createElement(
                          G.a,
                          { style: [ae.root, ae.paddingHorizontal, ae.contentContainer] },
                          y.a.createElement(
                            U.a,
                            { style: ae.thumbnail },
                            y.a.createElement(J.a, { style: ae.allBookmarks }),
                          ),
                          y.a.createElement(P.b, { style: ae.content }, Q),
                          y.a.createElement(j.a, { style: ae.checkmark }),
                        ),
                        y.a.createElement(V.a, {
                          alwaysFetch: !0,
                          module: e,
                          noItemsRenderer: this._renderEmptyState,
                          renderer: this._renderBookmarkFolder,
                          retryMessage: re,
                        }),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(y.a.Component),
        oe = z(ne),
        ae =
          ((t.default = oe),
          I.a.create(function (e) {
            return {
              root: {
                justifyContent: 'space-between',
                paddingVertical: e.componentDimensions.gutterVertical,
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: e.colors.borderColor,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: e.colors.borderColor,
                minHeight: 'calc('
                  .concat(e.lineHeights.headline1, ' + 2 * ')
                  .concat(e.componentDimensions.gutterVertical, ')'),
                maxHeight: 'calc('
                  .concat(e.spaces.space48, ' + 2 * ')
                  .concat(e.componentDimensions.gutterVertical, ')'),
              },
              allBookmarks: { color: e.colors.white, height: e.fontSizes.title4, width: e.fontSizes.title4 },
              contentContainer: { alignItems: 'center', flexDirection: 'row', flexGrow: 1 },
              content: { flexGrow: 1, flexShrink: 1 },
              checkmark: { color: e.colors.blue500, paddingLeft: e.spaces.space12, flexShrink: 0 },
              thumbnail: {
                borderRadius: e.borderRadii.infinite,
                backgroundColor: e.colors.blue500,
                padding: e.spaces.space12,
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginRight: e.spaces.space16,
              },
              paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            }
          }))
    },
    'Ja/I': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'EditOrDeleteBookmarkFolderModalScreen', function () {
          return x
        })
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ddV6'),
        c = r.n(a),
        i = (r('WNMA'), r('KqXw'), r('tVqn'), r('Qavd'), r('JtPf'), r('7x/C'), r('MvUL'), r('ERkP')),
        l = r.n(i),
        s = r('k49u'),
        u = (r('ho0z'), r('1YZw')),
        d = r('Hja3'),
        m = r('rxPX'),
        f = r('0KEI'),
        b = function (e, t) {
          var r = t.match.params.bookmarkFolderId,
            n = r ? d.b.select(e, r) : void 0
          return null == n ? void 0 : n.name
        },
        h = Object(m.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: b }
          })
          .propsFromActions(function () {
            return {
              deleteBookmarkFolder: d.b.deleteBookmarkFolder,
              editBookmarkFolder: d.b.editBookmarkFolder,
              addToast: u.b,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'EDIT_BOOKMARK_FOLDER_MODAL',
              ),
            }
          })
          .withAnalytics({ component: 'bookmark_folder_edit' }),
        p = r('jHSc'),
        k = r('3XMw'),
        y = r.n(k),
        v = r('/yvb'),
        g = r('p+r5'),
        E = r('jtO7'),
        w = r('eb3s'),
        O = y.a.f075b0e8,
        F = y.a.d4e220b3,
        B = y.a.i2209530,
        j = y.a.h18f86a4,
        C = y.a.f4ea9679,
        _ = y.a.b670aa62,
        R = y.a.aece5462,
        P = y.a.e3299b93,
        I = y.a.c09ea713,
        H = y.a.gee78815,
        S = { confirmButtonLabel: y.a.d96cf7cd, headline: y.a.h9a5daa1, text: y.a.ga2edf67 },
        x = function (e, t) {
          var r = e.addToast,
            n = e.analytics,
            a = e.bookmarkFolderName,
            i = e.createLocalApiErrorHandler,
            u = e.deleteBookmarkFolder,
            d = e.editBookmarkFolder,
            m = e.history,
            f = e.match,
            b = l.a.useState(a || ''),
            h = c()(b, 2),
            k = h[0],
            y = h[1],
            x = l.a.useState(''),
            T = c()(x, 2),
            M = T[0],
            L = T[1],
            D = l.a.useState(!0),
            A = c()(D, 2),
            z = A[0],
            K = A[1],
            V = l.a.useState(!1),
            N = c()(V, 2),
            U = N[0],
            W = N[1],
            X = f.params.bookmarkFolderId,
            G = '/i/bookmarks/'.concat(X),
            J = function (e) {
              L(e.message || H)
            }
          return l.a.createElement(
            p.b,
            {
              backButtonType: 'close',
              backLocation: G,
              documentTitle: O,
              history: m,
              onBackClick: function (e) {
                n.scribeAction('cancel'), e()
              },
              rightControl: l.a.createElement(
                v.a,
                {
                  disabled: z,
                  onPress: function () {
                    n.scribeAction('save'),
                      K(!0),
                      d(X, { name: k })
                        .then(function () {
                          r({ text: R }), m.goBack()
                        })
                        .catch(function (e) {
                          i(
                            o()({ defaultToast: { text: P }, showToast: !0 }, s.a.ValidationFailure, {
                              customAction: J,
                            }),
                          )(e),
                            n.scribe({ element: 'delete', action: 'error', data: e })
                        })
                        .finally(function () {
                          return K(!1)
                        })
                  },
                  type: 'primaryFilled',
                },
                B,
              ),
              title: O,
            },
            l.a.createElement(g.a, {
              autoFocus: !0,
              errorText: M,
              invalid: !!M,
              label: F,
              maxLength: 25,
              name: _,
              onChange: function (e) {
                var t = e.target.value
                y(t), K('' === t.trim() || t.trim() === a)
              },
              value: k,
            }),
            l.a.createElement(E.a, {
              color: 'red500',
              label: j,
              onPress: function () {
                W(!0)
              },
            }),
            U &&
              l.a.createElement(w.a, {
                confirmButtonLabel: S.confirmButtonLabel,
                confirmButtonType: 'destructiveFilled',
                headline: S.headline,
                onCancel: function () {
                  n.scribe({ element: 'delete', action: 'cancel' }), W(!1)
                },
                onConfirm: function () {
                  n.scribeAction('delete'),
                    u(X)
                      .then(function () {
                        W(!1), r({ text: C }), m.replace('/i/bookmarks')
                      })
                      .catch(function (e) {
                        i({ defaultToast: { text: I }, showToast: !0 })(e),
                          n.scribe({ element: 'delete', action: 'error', data: e })
                      })
                },
                text: S.text,
              }),
          )
        },
        T = h(x)
      t.default = T
    },
    KQzH: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = (r('hBvt'), r('ERkP')),
        c = r.n(a),
        i = r('BUB3'),
        l = r('shC7'),
        s = r('csss'),
        u = r('t62R')
      t.a = function (e) {
        return c.a.createElement(i.a, { exact: !0, path: e.link }, function (t) {
          var r = l.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return c.a.createElement(s.a, o()({ isActive: t }, e, { label: c.a.createElement(u.b, { dir: r }, e.label) }))
        })
      }
    },
    Q3sg: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ERkP'),
        c = r.n(a),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    TEoO: function (e, t, r) {
      'use strict'
      var n = r('m3Bd'),
        o = r.n(n),
        a = r('ERkP'),
        c = r.n(a),
        i = r('5UID'),
        l = r('3GUV'),
        s = r('iBK2'),
        u = c.a.createElement(l.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            r = o()(e, ['accessibilityTitle']),
            n = c.a.createElement(s.b, r)
          return t ? c.a.createElement(i.a, { title: t }, n) : n
        }
      ;(d.defaultProps = { footer: u }), (t.a = d)
    },
    'ggE+': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ERkP'),
        c = r.n(a),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M17.297 8.238v14.037c0 .268-.16.527-.4.646-.24.119-.551.099-.771-.06l-6.477-4.689-6.497 4.689c-.121.089-.281.139-.421.139-.12 0-.24-.03-.33-.079-.261-.12-.401-.378-.401-.646V8.238c0-1.589 1.301-2.901 2.913-2.901h9.461c1.602 0 2.923 1.312 2.923 2.901z',
            }),
            c.a.createElement('path', {
              d: 'M22 3.98v14.444c0 .278-.16.536-.41.666-.25.119-.561.099-.791-.07l-1.782-1.281V7.825c0-2.195-1.802-3.974-4.005-3.974h-8.74C6.332 2.272 7.644 1 9.266 1h9.731C20.648 1 22 2.341 22 3.98z',
            }),
            c.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    jtO7: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = r('m3Bd'),
        c = r.n(a),
        i = r('ERkP'),
        l = r.n(i),
        s = r('t62R'),
        u = r('I4+6'),
        d = r('cm6r'),
        m = r('rHpw'),
        f = r('MWbm'),
        b = m.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          r = void 0 === t ? 'center' : t,
          n = e.color,
          a = e.label,
          i = c()(e, ['align', 'color', 'label']),
          h = u.a.generate({
            backgroundColor: m.a.theme.colors.transparent,
            color: m.a.theme.colors[n],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          f.a,
          { style: b.container },
          l.a.createElement(
            d.a,
            o()({}, i, { interactiveStyles: h, style: b.root }),
            l.a.createElement(s.b, { align: r, color: n }, a),
          ),
        )
      }
    },
    sMuS: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'CreateBookmarkFolderModal', function () {
          return R
        })
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ddV6'),
        c = r.n(a),
        i = (r('tVqn'), r('ho0z'), r('ERkP')),
        l = r.n(i),
        s = r('k49u'),
        u = r('1YZw'),
        d = r('Hja3'),
        m = r('rxPX'),
        f = r('0KEI'),
        b = function (e, t) {
          var r, n
          return (
            (null === (r = t.location) || void 0 === r || null === (n = r.state) || void 0 === n
              ? void 0
              : n.tweet_id) || ''
          )
        },
        h = Object(m.a)()
          .propsFromState(function () {
            return { tweetId: b }
          })
          .propsFromActions(function () {
            return {
              addToast: u.b,
              addTweetToBookmarkFolder: d.b.addTweetToBookmarkFolder,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'CREATE_BOOKMARK_FOLDER',
              ),
              createBookmarkFolder: d.a,
            }
          }),
        p = r('jHSc'),
        k = r('3XMw'),
        y = r.n(k),
        v = r('SrIh'),
        g = r('k89r'),
        E = r('/yvb'),
        w = r('p+r5'),
        O = y.a.f8fc0b47,
        F = y.a.i6e7e298,
        B = y.a.d4e220b3,
        j = y.a.a0ea2fa5,
        C = y.a.eec37eab,
        _ = y.a.e41c9b4f,
        R = function (e) {
          var t = e.addToast,
            r = e.addTweetToBookmarkFolder,
            n = e.createBookmarkFolder,
            a = e.createLocalApiErrorHandler,
            i = e.history,
            u = e.tweetId,
            d = l.a.useState(''),
            m = c()(d, 2),
            f = m[0],
            b = m[1],
            h = Object(g.a)()
          l.a.useEffect(function () {
            h.scribePageImpression({ component: 'bookmark_folders_create', action: 'show' })
          }, [])
          var k = function (e) {
              h.scribe({ component: 'bookmark_folders_create', element: 'done', action: 'click' })
              var o = f.trim()
              o &&
                (n(o)
                  .then(function (e) {
                    if (u) {
                      var n,
                        o = null == e || null === (n = e.bookmark_collection_create) || void 0 === n ? void 0 : n.id
                      if (o) {
                        var a
                        r(o, { tweetId: u })
                        var c = _({
                          bookmarkFolderName:
                            (null == e || null === (a = e.bookmark_collection_create) || void 0 === a
                              ? void 0
                              : a.name) || '',
                        })
                        t({ text: c })
                      } else Object(v.a)('CreateBookmarkFolderModal: Missing folderId')
                    }
                  })
                  .catch(function (e) {
                    return y(e)
                  }),
                i.goBackThroughModals())
            },
            y = function (e) {
              var t
              h.scribe({ component: 'bookmark_folders_create', action: 'error' }),
                a(((t = {}), o()(t, s.a.GenericBadRequest, { toast: { text: C } }), o()(t, 'showToast', !0), t))(e)
            }
          return l.a.createElement(
            p.b,
            {
              backButtonType: 'back',
              documentTitle: O,
              onBackClick: function () {
                h.scribe({ component: 'bookmark_folders_create', element: 'cancel', action: 'click' }), i.goBack()
              },
              rightControl: l.a.createElement(
                E.a,
                { disabled: '' === f.trim(), onPress: k, size: 'small', type: 'primaryFilled' },
                F,
              ),
              title: O,
            },
            l.a.createElement(w.a, {
              accessibilityLabel: B,
              autoFocus: !0,
              errorText: j,
              invalid: f.length > 0 && '' === f.trim(),
              label: B,
              maxLength: 25,
              name: 'name',
              onChange: function (e) {
                b(e.target.value)
              },
              onSubmitEditing: k,
            }),
          )
        },
        P = h(R)
      t.default = P
    },
  },
])
//# sourceMappingURL=WIPED
