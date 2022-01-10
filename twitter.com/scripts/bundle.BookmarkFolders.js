;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    '1kbl': function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ERkP'),
        o = r('3XMw'),
        a = r.n(o),
        c = r('ggE+'),
        i = r('KQzH'),
        l = r('rHpw'),
        s = r('k89r'),
        u = r('MWbm'),
        d = a.a.bcc7e8cf,
        m = l.a.create(function (e) {
          return {
            thumbnail: {
              borderRadius: e.borderRadii.infinite,
              backgroundColor: l.a.theme.colors.blue500,
              height: '100%',
              width: '100%',
              padding: l.a.theme.spaces.space12,
              alignItems: 'center',
              justifyContent: 'center',
            },
            icon: {
              color: l.a.theme.colors.white,
              width: l.a.theme.fontSizes.title4,
              height: l.a.theme.fontSizes.title4,
            },
          }
        }),
        f = function () {
          var e = Object(s.a)()
          return n.createElement(i.a, {
            key: 'AllBookmarksCell',
            label: d,
            link: '/i/bookmarks/all',
            onPress: function () {
              e.scribe({ element: 'bookmarks', action: 'click' })
            },
            thumbnail: n.createElement(u.a, { style: m.thumbnail }, n.createElement(c.a, { style: m.icon })),
          })
        },
        b = (r('ho0z'), r('Hja3')),
        h = r('rxPX'),
        p = function (e, t) {
          var r = t.bookmarkFolderId
          return r ? b.b.select(e, r) : void 0
        },
        k = Object(h.a)().propsFromState(function () {
          return { bookmarkFolder: p }
        }),
        y = r('U+bB'),
        v = l.a.create(function (e) {
          return { thumbnail: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' } }
        }),
        g = k(function (e) {
          var t,
            r,
            o = e.bookmarkFolder,
            a = Object(s.a)()
          return null != o &&
            null !== (t = o.media) &&
            void 0 !== t &&
            null !== (r = t.media_info) &&
            void 0 !== r &&
            r.original_img_url
            ? n.createElement(i.a, {
                key: o.id,
                label: o.name,
                link: '/i/bookmarks/'.concat(o.id),
                onPress: function () {
                  a.scribe({ element: 'bookmark_folder', action: 'click' })
                },
                thumbnail: n.createElement(y.a, { source: o.media.media_info.original_img_url, style: v.thumbnail }),
              })
            : null
        }),
        E = r('es0u'),
        w = r('48TD'),
        O = r('hqKg'),
        F = r('oQhu'),
        B = r('G6rE'),
        j = Object(h.a)()
          .propsFromState(function () {
            return {
              loggedInUser: B.e.selectLoggedInUser,
              sliceModule:
                ((e = Object(F.a)(function (e) {
                  return Object(w.a)(e)
                })),
                Object(O.createSelector)(B.e.selectLoggedInUser, function (t) {
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
        C = r.n(_),
        P = r('m3Bd'),
        R = r.n(P),
        I = r('ZGdk'),
        S = r('/yvb'),
        H = l.a.create(function (e) {
          return {
            button: { marginRight: e.spaces.space4 },
            icon: { width: l.a.theme.fontSizes.title3, height: l.a.theme.fontSizes.title3 },
          }
        }),
        x = a.a.f8fc0b47,
        T = n.createElement(I.a, { style: H.icon }),
        L = function (e) {
          var t = e.history,
            r = e.onCreateButtonClick,
            o = e.style,
            a = e.testID,
            c = e.type,
            i = R()(e, ['history', 'onCreateButtonClick', 'style', 'testID', 'type'])
          return n.createElement(
            S.a,
            C()({ accessibilityLabel: x, hoverLabel: { label: x } }, i, {
              icon: T,
              onPress: function () {
                r(), t.push({ pathname: '/i/bookmarks/create_folder' })
              },
              pullRight: !0,
              style: [H.button, o],
              testID: a,
              type: c || 'primaryText',
            }),
          )
        },
        M = r('yoO3'),
        D = r('VS6U'),
        A = r('FS1z'),
        z = r('HQ0t'),
        K = r('FIs5'),
        N = r('yrzJ'),
        U = a.a.i3145aa0,
        V = a.a.f8fc0b47,
        W = a.a.j45c642d,
        X = a.a.adad5408,
        G = a.a.be329aab,
        Y = a.a.j0a47c9c,
        J = j(function (e) {
          var t = e.analytics,
            r = e.history,
            o = e.isLoggedInUser,
            a = e.loggedInUserScreenName,
            c = e.sliceModule,
            i = n.useCallback(
              function () {
                r.push({ pathname: '/i/bookmarks/create_folder' })
              },
              [r],
            ),
            l = n.useCallback(
              function () {
                return (
                  t.scribePageImpression({ component: 'empty', action: 'impression' }),
                  o ? n.createElement(K.a, { buttonText: X, header: G, message: Y, onButtonPress: i }) : null
                )
              },
              [t, i, o],
            ),
            s = function (e) {
              return n.createElement(g, { bookmarkFolderId: e, key: e })
            },
            u = n.useCallback(
              function () {
                return (
                  c || t.scribeAction('error'),
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(f, null),
                    c
                      ? n.createElement(A.a, {
                          alwaysFetch: !0,
                          module: c,
                          noItemsRenderer: l,
                          renderer: s,
                          retryMessage: W,
                        })
                      : null,
                  )
                )
              },
              [c, l, t],
            ),
            d = n.createElement(L, {
              accessibilityLabel: V,
              history: r,
              onCreateButtonClick: function () {
                return t.scribe({ element: 'create', action: 'click' })
              },
            })
          return n.createElement(
            M.a,
            null,
            n.createElement(D.a, {
              backLocation: '/home',
              history: r,
              primaryContent: u(),
              rightControl: d,
              sidebarContent: n.createElement(E.a, null),
              subtitle: a ? n.createElement(N.a, { screenName: a }) : null,
              title: n.createElement(z.a, { text: U }),
              withBackButton: !1,
            }),
          )
        })
      t.default = J
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
        b = r('rHpw'),
        h = r('MWbm')
      function p(e) {
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
      var k = (function (e) {
          l()(r, e)
          var t = p(r)
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
                  return f.createElement(h.a, { style: y.root })
                },
              },
            ]),
            r
          )
        })(f.Component),
        y = b.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = k
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
        b = r('3XMw'),
        h = r.n(b),
        p = r('rHpw'),
        k = r('+/1j'),
        y = r('MWbm')
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
          var r,
            n = m()(e)
          if (t) {
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var g = h.a.e5b0063d,
        E = 0,
        w = (function (e) {
          l()(r, e)
          var t = v(r)
          function r() {
            var e
            return o()(this, r), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(E)), (E += 1), e
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.title,
                    n = g({ title: r })
                  return f.createElement(
                    y.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.createElement(
                      k.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: p.a.visuallyHidden,
                      },
                      r,
                    ),
                    f.createElement(y.a, { accessibilityLabel: n }, t),
                  )
                },
              },
            ]),
            r
          )
        })(f.Component)
      t.a = w
    },
    BUB3: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('m3Bd'),
        c = r.n(a),
        i = r('ERkP'),
        l = r('sNn6'),
        s = r('rHpw'),
        u = r('MWbm')
      function d(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var f = s.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: m(
            m({}, s.a.absoluteFillObject),
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
        return i.createElement(l.a, r, function (e) {
          return i.createElement(
            u.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? i.createElement(u.a, { pointerEvents: 'none', style: f.overlay }) : null,
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
        y = r('rxPX'),
        v = r('0KEI'),
        g = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        w = Object(y.a)()
          .propsFromState(function (e) {
            return { fetchStatus: g, items: E }
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
        O = r('v//M'),
        F = r('sIe2'),
        B = r('3XMw'),
        j = r.n(B),
        _ = r('TEoO')
      function C(e) {
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
      var P = j.a.i9028824,
        R = 'sliceTimeline',
        I = function (e) {
          return e
        },
        S = { viewType: 'timeline' },
        H = (function (e) {
          u()(r, e)
          var t = C(r)
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
                  ? k.createElement(_.a, {
                      cacheKey: R,
                      footer: r,
                      identityFunction: I,
                      items: n,
                      noItemsRenderer: o,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: c,
                      renderer: i,
                      withoutHeadroom: l,
                    })
                  : k.createElement(F.a, {
                      ListEmptyComponent: o,
                      data: n,
                      keyExtractor: I,
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
                    ? k.createElement(O.a, {
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
        })(k.Component)
      p()(H, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var x = w(H)
      t.a = x
    },
    HQ0t: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = r('v6aA'),
        a = r('3XMw'),
        c = r.n(a),
        i = r('Q3sg'),
        l = r('rHpw'),
        s = c.a.g4782c0a,
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
        var t = n.useContext(o.a),
          r = t.featureSwitches,
          a = t.userClaims,
          c = r.isTrue('subscriptions_blue_premium_labeling_enabled'),
          l = a.isTwitterBlueSubscriber(),
          d = e.style,
          m = e.text
        return l && c
          ? n.createElement(n.Fragment, null, m, n.createElement(i.a, { accessibilityLabel: s, style: [u.icon, d] }))
          : m
      }
    },
    Iehm: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'AddToBookmarkFolderModal', function () {
          return re
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
        y = (r('ho0z'), r('1YZw')),
        v = r('Hja3'),
        g = r('rxPX'),
        E = function (e, t) {
          var r = t.bookmarkFolderId
          return r ? v.b.select(e, r) : void 0
        },
        w = Object(g.a)()
          .propsFromState(function () {
            return { bookmarkFolder: E }
          })
          .propsFromActions(function () {
            return {
              addToast: y.b,
              addTweetToBookmarkFolder: v.b.addTweetToBookmarkFolder,
              removeTweetFromBookmarkFolder: v.b.removeTweetFromBookmarkFolder,
            }
          }),
        O = r('3XMw'),
        F = r.n(O),
        B = r('IMYl'),
        j = r('U+bB'),
        _ = r('Irs7'),
        C = r('htQn'),
        P = r('t62R'),
        R = r('rHpw'),
        I = F.a.e41c9b4f,
        S = F.a.a2e7377e,
        H = w(function (e) {
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
          return k.createElement(
            C.a,
            {
              onPress: function () {
                var t = e.addToast,
                  r = e.history,
                  n = e.location
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
                          (t({ text: I({ bookmarkFolderName: u }) }),
                          s.scribe({ component: 'bookmark_folder', element: 'add', action: 'success' }))
                      },
                      function () {
                        s.scribe({ component: 'bookmark_folder', element: 'add', action: 'error' })
                      },
                    ),
                  r.goBackThroughModals({ location: n })
              },
              style: [x.root, x.paddingHorizontal, x.contentContainer],
            },
            d ? k.createElement(j.a, { source: d, style: x.thumbnailContainer }) : null,
            k.createElement(P.b, { style: x.content }, u),
            f ? k.createElement(B.a, { style: x.icon }) : null,
          )
        }),
        x = R.a.create(function (e) {
          return {
            root: {
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              minHeight: 'calc('
                .concat(R.a.theme.lineHeights.headline1, ' + 2 * ')
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
        T = r('48TD'),
        L = r('hqKg'),
        M = r('G6rE'),
        D = function (e, t) {
          var r, n
          return null === (r = t.location) || void 0 === r || null === (n = r.state) || void 0 === n
            ? void 0
            : n.tweet_id
        },
        A = Object(g.a)().propsFromState(function () {
          return {
            sliceModule: Object(L.createSelector)(M.e.selectLoggedInUser, D, function (e, t) {
              return null != e && e.id_str ? Object(T.a)(e.id_str, t) : void 0
            }),
            tweetId: D,
          }
        }),
        z = r('jHSc'),
        K = r('FS1z'),
        N = r('HQ0t'),
        U = r('MWbm'),
        V = r('FIs5'),
        W = r('jtO7'),
        X = r('cm6r'),
        G = r('ggE+')
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
      var J = F.a.c2453317,
        Z = F.a.bcc7e8cf,
        Q = F.a.adad5408,
        q = F.a.be329aab,
        $ = F.a.j0a47c9c,
        ee = F.a.beba2a0d,
        te = F.a.j45c642d,
        re = (function (e) {
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
                return k.createElement(V.a, {
                  buttonText: Q,
                  header: q,
                  message: $,
                  onButtonPress: e._handleCreateFolderPress,
                })
              }),
              p()(l()(e), '_renderBookmarkFolder', function (t) {
                var r = e.props,
                  n = r.history,
                  o = r.location,
                  a = r.tweetId
                return k.createElement(H, { bookmarkFolderId: t, history: n, key: t, location: o, tweetId: a })
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
                    ? k.createElement(
                        z.b,
                        {
                          backButtonType: 'close',
                          documentTitle: J,
                          onBackClick: this._handleBackClick,
                          title: k.createElement(N.a, { text: J }),
                        },
                        k.createElement(W.a, {
                          align: 'left',
                          color: 'primary',
                          label: ee,
                          onPress: this._handleCreateFolderPress,
                        }),
                        k.createElement(
                          X.a,
                          { style: [oe.root, oe.paddingHorizontal, oe.contentContainer] },
                          k.createElement(
                            U.a,
                            { style: oe.thumbnail },
                            k.createElement(G.a, { style: oe.allBookmarks }),
                          ),
                          k.createElement(P.b, { style: oe.content }, Z),
                          k.createElement(B.a, { style: oe.checkmark }),
                        ),
                        k.createElement(K.a, {
                          alwaysFetch: !0,
                          module: e,
                          noItemsRenderer: this._renderEmptyState,
                          renderer: this._renderBookmarkFolder,
                          retryMessage: te,
                        }),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(k.Component),
        ne = A(re),
        oe =
          ((t.default = ne),
          R.a.create(function (e) {
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
          return H
        })
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ddV6'),
        c = r.n(a),
        i = (r('WNMA'), r('KqXw'), r('tVqn'), r('Qavd'), r('JtPf'), r('7x/C'), r('MvUL'), r('ERkP')),
        l = r('k49u'),
        s = (r('ho0z'), r('1YZw')),
        u = r('Hja3'),
        d = r('rxPX'),
        m = r('0KEI'),
        f = function (e, t) {
          var r = t.match.params.bookmarkFolderId,
            n = r ? u.b.select(e, r) : void 0
          return null == n ? void 0 : n.name
        },
        b = Object(d.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: f }
          })
          .propsFromActions(function () {
            return {
              deleteBookmarkFolder: u.b.deleteBookmarkFolder,
              editBookmarkFolder: u.b.editBookmarkFolder,
              addToast: s.b,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'EDIT_BOOKMARK_FOLDER_MODAL',
              ),
            }
          })
          .withAnalytics({ component: 'bookmark_folder_edit' }),
        h = r('jHSc'),
        p = r('3XMw'),
        k = r.n(p),
        y = r('/yvb'),
        v = r('p+r5'),
        g = r('jtO7'),
        E = r('eb3s'),
        w = k.a.f075b0e8,
        O = k.a.d4e220b3,
        F = k.a.i2209530,
        B = k.a.h18f86a4,
        j = k.a.f4ea9679,
        _ = k.a.b670aa62,
        C = k.a.aece5462,
        P = k.a.e3299b93,
        R = k.a.c09ea713,
        I = k.a.gee78815,
        S = { confirmButtonLabel: k.a.d96cf7cd, headline: k.a.h9a5daa1, text: k.a.ga2edf67 },
        H = function (e, t) {
          var r = e.addToast,
            n = e.analytics,
            a = e.bookmarkFolderName,
            s = e.createLocalApiErrorHandler,
            u = e.deleteBookmarkFolder,
            d = e.editBookmarkFolder,
            m = e.history,
            f = e.match,
            b = i.useState(a || ''),
            p = c()(b, 2),
            k = p[0],
            H = p[1],
            x = i.useState(''),
            T = c()(x, 2),
            L = T[0],
            M = T[1],
            D = i.useState(!0),
            A = c()(D, 2),
            z = A[0],
            K = A[1],
            N = i.useState(!1),
            U = c()(N, 2),
            V = U[0],
            W = U[1],
            X = f.params.bookmarkFolderId,
            G = '/i/bookmarks/'.concat(X),
            Y = function (e) {
              M(e.message || I)
            }
          return i.createElement(
            h.b,
            {
              backButtonType: 'close',
              backLocation: G,
              documentTitle: w,
              history: m,
              onBackClick: function (e) {
                n.scribeAction('cancel'), e()
              },
              rightControl: i.createElement(
                y.a,
                {
                  disabled: z,
                  onPress: function () {
                    n.scribeAction('save'),
                      K(!0),
                      d(X, { name: k })
                        .then(function () {
                          r({ text: C }), m.goBack()
                        })
                        .catch(function (e) {
                          s(
                            o()({ defaultToast: { text: P }, showToast: !0 }, l.a.ValidationFailure, {
                              customAction: Y,
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
                F,
              ),
              title: w,
            },
            i.createElement(v.a, {
              autoFocus: !0,
              errorText: L,
              invalid: !!L,
              label: O,
              maxLength: 25,
              name: _,
              onChange: function (e) {
                var t = e.target.value
                H(t), K('' === t.trim() || t.trim() === a)
              },
              value: k,
            }),
            i.createElement(g.a, {
              color: 'red500',
              label: B,
              onPress: function () {
                W(!0)
              },
            }),
            V &&
              i.createElement(E.a, {
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
                        W(!1), r({ text: j }), m.replace('/i/bookmarks')
                      })
                      .catch(function (e) {
                        s({ defaultToast: { text: R }, showToast: !0 })(e),
                          n.scribe({ element: 'delete', action: 'error', data: e })
                      })
                },
                text: S.text,
              }),
          )
        },
        x = b(H)
      t.default = x
    },
    KQzH: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = (r('hBvt'), r('ERkP')),
        c = r('BUB3'),
        i = r('shC7'),
        l = r('csss'),
        s = r('t62R')
      t.a = function (e) {
        return a.createElement(c.a, { exact: !0, path: e.link }, function (t) {
          var r = i.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return a.createElement(l.a, o()({ isActive: t }, e, { label: a.createElement(s.b, { dir: r }, e.label) }))
        })
      }
    },
    Q3sg: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ERkP'),
        c = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
    TEoO: function (e, t, r) {
      'use strict'
      var n = r('m3Bd'),
        o = r.n(n),
        a = r('ERkP'),
        c = r('5UID'),
        i = r('3GUV'),
        l = r('iBK2'),
        s = a.createElement(i.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            r = o()(e, ['accessibilityTitle']),
            n = a.createElement(l.b, r)
          return t ? a.createElement(c.a, { title: t }, n) : n
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    'ggE+': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ERkP'),
        c = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M17.297 8.238v14.037c0 .268-.16.527-.4.646-.24.119-.551.099-.771-.06l-6.477-4.689-6.497 4.689c-.121.089-.281.139-.421.139-.12 0-.24-.03-.33-.079-.261-.12-.401-.378-.401-.646V8.238c0-1.589 1.301-2.901 2.913-2.901h9.461c1.602 0 2.923 1.312 2.923 2.901z',
            }),
            a.createElement('path', {
              d: 'M22 3.98v14.444c0 .278-.16.536-.41.666-.25.119-.561.099-.791-.07l-1.782-1.281V7.825c0-2.195-1.802-3.974-4.005-3.974h-8.74C6.332 2.272 7.644 1 9.266 1h9.731C20.648 1 22 2.341 22 3.98z',
            }),
            a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    sMuS: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'CreateBookmarkFolderModal', function () {
          return C
        })
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ddV6'),
        c = r.n(a),
        i = (r('tVqn'), r('ho0z'), r('ERkP')),
        l = r('k49u'),
        s = r('1YZw'),
        u = r('Hja3'),
        d = r('rxPX'),
        m = r('0KEI'),
        f = function (e, t) {
          var r, n
          return (
            (null === (r = t.location) || void 0 === r || null === (n = r.state) || void 0 === n
              ? void 0
              : n.tweet_id) || ''
          )
        },
        b = Object(d.a)()
          .propsFromState(function () {
            return { tweetId: f }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              addTweetToBookmarkFolder: u.b.addTweetToBookmarkFolder,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'CREATE_BOOKMARK_FOLDER',
              ),
              createBookmarkFolder: u.a,
            }
          }),
        h = r('jHSc'),
        p = r('3XMw'),
        k = r.n(p),
        y = r('SrIh'),
        v = r('k89r'),
        g = r('/yvb'),
        E = r('p+r5'),
        w = k.a.f8fc0b47,
        O = k.a.i6e7e298,
        F = k.a.d4e220b3,
        B = k.a.a0ea2fa5,
        j = k.a.eec37eab,
        _ = k.a.e41c9b4f,
        C = function (e) {
          var t = e.addToast,
            r = e.addTweetToBookmarkFolder,
            n = e.createBookmarkFolder,
            a = e.createLocalApiErrorHandler,
            s = e.history,
            u = e.location,
            d = e.tweetId,
            m = i.useState(''),
            f = c()(m, 2),
            b = f[0],
            p = f[1],
            k = Object(v.a)()
          i.useEffect(function () {
            k.scribePageImpression({ component: 'bookmark_folders_create', action: 'show' })
          }, [])
          var C = function (e) {
              k.scribe({ component: 'bookmark_folders_create', element: 'done', action: 'click' })
              var o = b.trim()
              o &&
                (n(o)
                  .then(function (e) {
                    if (d) {
                      var n,
                        o = null == e || null === (n = e.bookmark_collection_create) || void 0 === n ? void 0 : n.id
                      if (o) {
                        var a
                        r(o, { tweetId: d })
                        var c = _({
                          bookmarkFolderName:
                            (null == e || null === (a = e.bookmark_collection_create) || void 0 === a
                              ? void 0
                              : a.name) || '',
                        })
                        t({ text: c })
                      } else Object(y.a)('CreateBookmarkFolderModal: Missing folderId')
                    }
                  })
                  .catch(function (e) {
                    return P(e)
                  }),
                s.goBackThroughModals({ location: u }))
            },
            P = function (e) {
              var t
              k.scribe({ component: 'bookmark_folders_create', action: 'error' }),
                a(((t = {}), o()(t, l.a.GenericBadRequest, { toast: { text: j } }), o()(t, 'showToast', !0), t))(e)
            }
          return i.createElement(
            h.b,
            {
              backButtonType: 'back',
              documentTitle: w,
              onBackClick: function () {
                k.scribe({ component: 'bookmark_folders_create', element: 'cancel', action: 'click' }), s.goBack()
              },
              rightControl: i.createElement(
                g.a,
                { disabled: '' === b.trim(), onPress: C, size: 'small', type: 'primaryFilled' },
                O,
              ),
              title: w,
            },
            i.createElement(E.a, {
              accessibilityLabel: F,
              autoFocus: !0,
              errorText: B,
              invalid: b.length > 0 && '' === b.trim(),
              label: F,
              maxLength: 25,
              name: 'name',
              onChange: function (e) {
                p(e.target.value)
              },
              onSubmitEditing: C,
            }),
          )
        },
        P = b(C)
      t.default = P
    },
  },
])
//# sourceMappingURL=WIPED
