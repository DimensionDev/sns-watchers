;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '1kbl': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        o = n('3XMw'),
        i = n.n(o),
        l = n('ggE+'),
        c = n('KQzH'),
        s = n('rHpw'),
        d = n('k89r'),
        u = n('MWbm'),
        m = i.a.bcc7e8cf,
        p = s.a.create(function (e) {
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
        h = function () {
          var e = Object(d.a)()
          return r.a.createElement(c.a, {
            key: 'AllBookmarksCell',
            label: m,
            link: '/i/bookmarks/all',
            onPress: function () {
              e.scribe({ element: 'bookmarks', action: 'click' })
            },
            thumbnail: r.a.createElement(u.a, { style: p.thumbnail }, r.a.createElement(l.a, { style: p.icon })),
          })
        },
        b = (n('ho0z'), n('Hja3')),
        f = n('rxPX'),
        y = function (e, t) {
          var n = t.bookmarkFolderId
          return n ? b.b.select(e, n) : void 0
        },
        g = Object(f.a)().propsFromState(function () {
          return { bookmarkFolder: y }
        }),
        v = n('U+bB'),
        k = s.a.create(function (e) {
          return { thumbnail: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' } }
        }),
        E = g(function (e) {
          var t,
            n,
            a = e.bookmarkFolder,
            o = Object(d.a)()
          return null != a &&
            null !== (t = a.media) &&
            void 0 !== t &&
            null !== (n = t.media_info) &&
            void 0 !== n &&
            n.original_img_url
            ? r.a.createElement(c.a, {
                key: a.id,
                label: a.name,
                link: '/i/bookmarks/'.concat(a.id),
                onPress: function () {
                  o.scribe({ element: 'bookmark_folder', action: 'click' })
                },
                thumbnail: r.a.createElement(v.a, { source: a.media.media_info.original_img_url, style: k.thumbnail }),
              })
            : null
        }),
        _ = n('es0u'),
        x = n('48TD'),
        C = n('hqKg'),
        I = n('oQhu'),
        w = n('G6rE'),
        F = Object(f.a)()
          .propsFromState(function () {
            return {
              loggedInUser: w.e.selectLoggedInUser,
              sliceModule:
                ((e = Object(I.a)(function (e) {
                  return Object(x.a)(e)
                })),
                Object(C.createSelector)(w.e.selectLoggedInUser, function (t) {
                  return null != t && t.id_str ? e(t.id_str) : void 0
                })),
            }
            var e
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = e.sliceModule
            return { loggedInUserScreenName: null == t ? void 0 : t.screen_name, sliceModule: n, isLoggedInUser: !!t }
          })
          .withAnalytics({ page: 'bookmark_folders' }),
        L = n('97Jx'),
        B = n.n(L),
        T = n('m3Bd'),
        S = n.n(T),
        P = n('ZGdk'),
        R = n('/yvb'),
        H = ['history', 'onCreateButtonClick', 'style', 'testID', 'type'],
        M = s.a.create(function (e) {
          return {
            button: { marginRight: e.spaces.space4 },
            icon: { width: s.a.theme.fontSizes.title3, height: s.a.theme.fontSizes.title3 },
          }
        }),
        V = i.a.f8fc0b47,
        z = r.a.createElement(P.a, { style: M.icon }),
        O = function (e) {
          var t = e.history,
            n = e.onCreateButtonClick,
            a = e.style,
            o = e.testID,
            i = e.type,
            l = S()(e, H)
          return r.a.createElement(
            R.a,
            B()({ accessibilityLabel: V, hoverLabel: { label: V } }, l, {
              icon: z,
              onPress: function () {
                n(), t.push({ pathname: '/i/bookmarks/create_folder' })
              },
              pullRight: !0,
              style: [M.button, a],
              testID: o,
              type: i || 'primaryText',
            }),
          )
        },
        D = n('yoO3'),
        K = n('VS6U'),
        j = n('FS1z'),
        A = n('HQ0t'),
        U = n('FIs5'),
        W = n('yrzJ'),
        N = i.a.i3145aa0,
        G = i.a.f8fc0b47,
        X = i.a.j45c642d,
        q = i.a.adad5408,
        Y = i.a.be329aab,
        Q = i.a.j0a47c9c,
        J = F(function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.isLoggedInUser,
            o = e.loggedInUserScreenName,
            i = e.sliceModule,
            l = r.a.useCallback(
              function () {
                n.push({ pathname: '/i/bookmarks/create_folder' })
              },
              [n],
            ),
            c = r.a.useCallback(
              function () {
                return (
                  t.scribePageImpression({ component: 'empty', action: 'impression' }),
                  a ? r.a.createElement(U.a, { buttonText: q, header: Y, message: Q, onButtonPress: l }) : null
                )
              },
              [t, l, a],
            ),
            s = function (e) {
              return r.a.createElement(E, { bookmarkFolderId: e, key: e })
            },
            d = r.a.useCallback(
              function () {
                return (
                  i || t.scribeAction('error'),
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(h, null),
                    i
                      ? r.a.createElement(j.a, {
                          alwaysFetch: !0,
                          module: i,
                          noItemsRenderer: c,
                          renderer: s,
                          retryMessage: X,
                        })
                      : null,
                  )
                )
              },
              [i, c, t],
            ),
            u = r.a.createElement(O, {
              accessibilityLabel: G,
              history: n,
              onCreateButtonClick: function () {
                return t.scribe({ element: 'create', action: 'click' })
              },
            })
          return r.a.createElement(
            D.a,
            null,
            r.a.createElement(K.a, {
              backLocation: '/home',
              history: n,
              primaryContent: d(),
              rightControl: u,
              sidebarContent: r.a.createElement(_.a, null),
              subtitle: o ? r.a.createElement(W.a, { screenName: o }) : null,
              title: r.a.createElement(A.a, { text: N }),
              withBackButton: !1,
            }),
          )
        })
      t.default = J
    },
    '3GUV': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        d = n.n(s),
        u = n('ERkP'),
        m = n.n(u),
        p = n('rHpw'),
        h = n('MWbm'),
        b = (function (e) {
          c()(n, e)
          var t = d()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
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
                  return m.a.createElement(h.a, { style: f.root })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        f = p.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = b
    },
    '5UID': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        d = n.n(s),
        u = n('ERkP'),
        m = n.n(u),
        p = n('3XMw'),
        h = n.n(p),
        b = n('rHpw'),
        f = n('+/1j'),
        y = n('MWbm'),
        g = h.a.e5b0063d,
        v = 0,
        k = (function (e) {
          c()(n, e)
          var t = d()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(v)), (v += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = g({ title: n })
                  return m.a.createElement(
                    y.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    m.a.createElement(
                      f.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: b.a.visuallyHidden,
                      },
                      n,
                    ),
                    m.a.createElement(y.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      t.a = k
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              i.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    BUB3: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        l = n('ERkP'),
        c = n.n(l),
        s = n('sNn6'),
        d = n('rHpw'),
        u = n('MWbm'),
        m = ['children'],
        p = d.a.create(function (e) {
          return {
            activeRoot: { backgroundColor: e.colors.gray0 },
            overlay: r()(
              r()({}, d.a.absoluteFillObject),
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
          n = i()(e, m)
        return c.a.createElement(s.a, n, function (e) {
          return c.a.createElement(
            u.a,
            { style: e && p.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? c.a.createElement(u.a, { pointerEvents: 'none', style: p.overlay }) : null,
          )
        })
      }
    },
    FS1z: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        m = n.n(u),
        p = n('KEM+'),
        h = n.n(p),
        b = (n('2G9S'), n('ERkP')),
        f = n.n(b),
        y = n('rxPX'),
        g = n('0KEI'),
        v = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        k = function (e, t) {
          return t.module.selectItems(e)
        },
        E = Object(y.a)()
          .propsFromState(function (e) {
            return { fetchStatus: v, items: k }
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
        x = n('sIe2'),
        C = n('3XMw'),
        I = n.n(C),
        w = n('TEoO'),
        F = I.a.i9028824,
        L = 'sliceTimeline',
        B = function (e) {
          return e
        },
        T = { viewType: 'timeline' },
        S = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  l = t.renderer,
                  c = t.withoutHeadroom
                return !a || o < 1
                  ? null
                  : 1 === o
                  ? f.a.createElement(w.a, {
                      cacheKey: L,
                      footer: n,
                      identityFunction: B,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: l,
                      withoutHeadroom: c,
                    })
                  : f.a.createElement(x.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: B,
                      numColumns: o,
                      renderItem: l,
                    })
              }),
              h()(c()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              h()(c()(e), '_handleFetch', function () {
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
                    a = e.retryMessage
                  return n
                    ? f.a.createElement(_.a, {
                        accessibilityLabel: F,
                        behavioralEventContext: T,
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
        })(f.a.Component)
      h()(S, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var P = E(S)
      t.a = P
    },
    HQ0t: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('v6aA'),
        i = n('3XMw'),
        l = n.n(i),
        c = n('Q3sg'),
        s = n('rHpw'),
        d = l.a.g4782c0a,
        u = s.a.create(function (e) {
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
        var t = r.a.useContext(o.a),
          n = t.featureSwitches,
          a = t.userClaims,
          i = n.isTrue('subscriptions_blue_premium_labeling_enabled'),
          l = a.isTwitterBlueSubscriber(),
          s = e.style,
          m = e.text
        return l && i
          ? r.a.createElement(
              r.a.Fragment,
              null,
              m,
              r.a.createElement(c.a, { accessibilityLabel: d, style: [u.icon, s] }),
            )
          : m
      }
    },
    Iehm: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddToBookmarkFolderModal', function () {
          return ee
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        m = n.n(u),
        p = n('KEM+'),
        h = n.n(p),
        b = (n('2G9S'), n('ERkP')),
        f = n.n(b),
        y = (n('ho0z'), n('1YZw')),
        g = n('Hja3'),
        v = n('rxPX'),
        k = function (e, t) {
          var n = t.bookmarkFolderId
          return n ? g.b.select(e, n) : void 0
        },
        E = Object(v.a)()
          .propsFromState(function () {
            return { bookmarkFolder: k }
          })
          .propsFromActions(function () {
            return {
              addToast: y.b,
              addTweetToBookmarkFolder: g.b.addTweetToBookmarkFolder,
              removeTweetFromBookmarkFolder: g.b.removeTweetFromBookmarkFolder,
            }
          }),
        _ = n('3XMw'),
        x = n.n(_),
        C = n('IMYl'),
        I = n('U+bB'),
        w = n('Irs7'),
        F = n('htQn'),
        L = n('t62R'),
        B = n('rHpw'),
        T = x.a.e41c9b4f,
        S = x.a.a2e7377e,
        P = E(function (e) {
          var t,
            n,
            a,
            r,
            o = e.addTweetToBookmarkFolder,
            i = e.bookmarkFolder,
            l = e.removeTweetFromBookmarkFolder,
            c = e.tweetId,
            s = Object(w.b)()
          if (
            null == i ||
            null === (t = i.media) ||
            void 0 === t ||
            null === (n = t.media_info) ||
            void 0 === n ||
            !n.original_img_url
          )
            return null
          var d = i.name,
            u =
              null === (a = i.media) || void 0 === a || null === (r = a.media_info) || void 0 === r
                ? void 0
                : r.original_img_url,
            m = (null == i ? void 0 : i.id) || '',
            p = i.contains_requested_tweet
          if (!m || !c) return null
          return f.a.createElement(
            F.a,
            {
              onPress: function () {
                var t = e.addToast,
                  n = e.history
                p
                  ? l(m, { tweetId: c }).then(
                      function () {
                        t({ text: S({ bookmarkFolderName: d }) }),
                          s.scribe({ component: 'bookmark_folder', element: 'remove', action: 'success' })
                      },
                      function () {
                        s.scribe({ component: 'bookmark_folder', element: 'remove', action: 'error' })
                      },
                    )
                  : o(m, { tweetId: c }).then(
                      function () {
                        d &&
                          (t({ text: T({ bookmarkFolderName: d }) }),
                          s.scribe({ component: 'bookmark_folder', element: 'add', action: 'success' }))
                      },
                      function () {
                        s.scribe({ component: 'bookmark_folder', element: 'add', action: 'error' })
                      },
                    ),
                  n.goBackThroughModals()
              },
              style: [R.root, R.paddingHorizontal, R.contentContainer],
            },
            u ? f.a.createElement(I.a, { source: u, style: R.thumbnailContainer }) : null,
            f.a.createElement(L.b, { style: R.content }, d),
            p ? f.a.createElement(C.a, { style: R.icon }) : null,
          )
        }),
        R = B.a.create(function (e) {
          return {
            root: {
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              minHeight: 'calc('
                .concat(B.a.theme.lineHeights.headline1, ' + 2 * ')
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
        H = n('48TD'),
        M = n('hqKg'),
        V = n('G6rE'),
        z = function (e, t) {
          var n, a
          return null === (n = t.location) || void 0 === n || null === (a = n.state) || void 0 === a
            ? void 0
            : a.tweet_id
        },
        O = Object(v.a)().propsFromState(function () {
          return {
            sliceModule: Object(M.createSelector)(V.e.selectLoggedInUser, z, function (e, t) {
              return null != e && e.id_str ? Object(H.a)(e.id_str, t) : void 0
            }),
            tweetId: z,
          }
        }),
        D = n('jHSc'),
        K = n('FS1z'),
        j = n('HQ0t'),
        A = n('MWbm'),
        U = n('FIs5'),
        W = n('jtO7'),
        N = n('cm6r'),
        G = n('ggE+'),
        X = x.a.c2453317,
        q = x.a.bcc7e8cf,
        Y = x.a.adad5408,
        Q = x.a.be329aab,
        J = x.a.j0a47c9c,
        Z = x.a.beba2a0d,
        $ = x.a.j45c642d,
        ee = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_handleCreateFolderPress', function () {
                var t = e.props,
                  n = t.history,
                  a = t.tweetId
                n.push({ pathname: '/i/bookmarks/create_folder', state: { tweet_id: a } })
              }),
              h()(c()(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              h()(c()(e), '_renderEmptyState', function () {
                return f.a.createElement(U.a, {
                  buttonText: Y,
                  header: Q,
                  message: J,
                  onButtonPress: e._handleCreateFolderPress,
                })
              }),
              h()(c()(e), '_renderBookmarkFolder', function (t) {
                var n = e.props,
                  a = n.history,
                  r = n.tweetId
                return f.a.createElement(P, { bookmarkFolderId: t, history: a, key: t, tweetId: r })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.sliceModule
                  return e
                    ? f.a.createElement(
                        D.b,
                        {
                          backButtonType: 'close',
                          documentTitle: X,
                          onBackClick: this._handleBackClick,
                          title: f.a.createElement(j.a, { text: X }),
                        },
                        f.a.createElement(W.a, {
                          align: 'left',
                          color: 'primary',
                          label: Z,
                          onPress: this._handleCreateFolderPress,
                        }),
                        f.a.createElement(
                          N.a,
                          { style: [ne.root, ne.paddingHorizontal, ne.contentContainer] },
                          f.a.createElement(
                            A.a,
                            { style: ne.thumbnail },
                            f.a.createElement(G.a, { style: ne.allBookmarks }),
                          ),
                          f.a.createElement(L.b, { style: ne.content }, q),
                          f.a.createElement(C.a, { style: ne.checkmark }),
                        ),
                        f.a.createElement(K.a, {
                          alwaysFetch: !0,
                          module: e,
                          noItemsRenderer: this._renderEmptyState,
                          renderer: this._renderBookmarkFolder,
                          retryMessage: $,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        te = O(ee),
        ne =
          ((t.default = te),
          B.a.create(function (e) {
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
    'Ja/I': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditOrDeleteBookmarkFolderModalScreen', function () {
          return H
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        l = (n('KqXw'), n('WNMA'), n('tVqn'), n('7x/C'), n('JtPf'), n('Qavd'), n('MvUL'), n('ERkP')),
        c = n.n(l),
        s = n('k49u'),
        d = (n('ho0z'), n('1YZw')),
        u = n('Hja3'),
        m = n('rxPX'),
        p = n('0KEI'),
        h = function (e, t) {
          var n = t.match.params.bookmarkFolderId,
            a = n ? u.b.select(e, n) : void 0
          return null == a ? void 0 : a.name
        },
        b = Object(m.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: h }
          })
          .propsFromActions(function () {
            return {
              deleteBookmarkFolder: u.b.deleteBookmarkFolder,
              editBookmarkFolder: u.b.editBookmarkFolder,
              addToast: d.b,
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'EDIT_BOOKMARK_FOLDER_MODAL',
              ),
            }
          })
          .withAnalytics({ component: 'bookmark_folder_edit' }),
        f = n('jHSc'),
        y = n('3XMw'),
        g = n.n(y),
        v = n('/yvb'),
        k = n('p+r5'),
        E = n('jtO7'),
        _ = n('eb3s'),
        x = g.a.f075b0e8,
        C = g.a.d4e220b3,
        I = g.a.i2209530,
        w = g.a.h18f86a4,
        F = g.a.f4ea9679,
        L = g.a.b670aa62,
        B = g.a.aece5462,
        T = g.a.e3299b93,
        S = g.a.c09ea713,
        P = g.a.gee78815,
        R = { confirmButtonLabel: g.a.d96cf7cd, headline: g.a.h9a5daa1, text: g.a.ga2edf67 },
        H = function (e, t) {
          var n = e.addToast,
            a = e.analytics,
            o = e.bookmarkFolderName,
            l = e.createLocalApiErrorHandler,
            d = e.deleteBookmarkFolder,
            u = e.editBookmarkFolder,
            m = e.history,
            p = e.match,
            h = c.a.useState(o || ''),
            b = i()(h, 2),
            y = b[0],
            g = b[1],
            H = c.a.useState(''),
            M = i()(H, 2),
            V = M[0],
            z = M[1],
            O = c.a.useState(!0),
            D = i()(O, 2),
            K = D[0],
            j = D[1],
            A = c.a.useState(!1),
            U = i()(A, 2),
            W = U[0],
            N = U[1],
            G = p.params.bookmarkFolderId,
            X = '/i/bookmarks/'.concat(G),
            q = function (e) {
              z(e.message || P)
            }
          return c.a.createElement(
            f.b,
            {
              backButtonType: 'close',
              backLocation: X,
              documentTitle: x,
              history: m,
              onBackClick: function (e) {
                a.scribeAction('cancel'), e()
              },
              rightControl: c.a.createElement(
                v.a,
                {
                  disabled: K,
                  onPress: function () {
                    a.scribeAction('save'),
                      j(!0),
                      u(G, { name: y })
                        .then(function () {
                          n({ text: B }), m.goBack()
                        })
                        .catch(function (e) {
                          l(
                            r()({ defaultToast: { text: T }, showToast: !0 }, s.a.ValidationFailure, {
                              customAction: q,
                            }),
                          )(e),
                            a.scribe({ element: 'delete', action: 'error', data: e })
                        })
                        .finally(function () {
                          return j(!1)
                        })
                  },
                  type: 'primaryFilled',
                },
                I,
              ),
              title: x,
            },
            c.a.createElement(k.a, {
              autoFocus: !0,
              errorText: V,
              invalid: !!V,
              label: C,
              maxLength: 25,
              name: L,
              onChange: function (e) {
                var t = e.target.value
                g(t), j('' === t.trim() || t.trim() === o)
              },
              value: y,
            }),
            c.a.createElement(E.a, {
              color: 'red500',
              label: w,
              onPress: function () {
                N(!0)
              },
            }),
            W &&
              c.a.createElement(_.a, {
                confirmButtonLabel: R.confirmButtonLabel,
                confirmButtonType: 'destructiveFilled',
                headline: R.headline,
                onCancel: function () {
                  a.scribe({ element: 'delete', action: 'cancel' }), N(!1)
                },
                onConfirm: function () {
                  a.scribeAction('delete'),
                    d(G)
                      .then(function () {
                        N(!1), n({ text: F }), m.replace('/i/bookmarks')
                      })
                      .catch(function (e) {
                        l({ defaultToast: { text: S }, showToast: !0 })(e),
                          a.scribe({ element: 'delete', action: 'error', data: e })
                      })
                },
                text: R.text,
              }),
          )
        },
        M = b(H)
      t.default = M
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = (n('hBvt'), n('ERkP')),
        i = n.n(o),
        l = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        d = n('t62R')
      t.a = function (e) {
        return i.a.createElement(l.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, r()({ isActive: t }, e, { label: i.a.createElement(d.b, { dir: n }, e.label) }))
        })
      }
    },
    Q3sg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        l = n('5UID'),
        c = n('3GUV'),
        s = n('iBK2'),
        d = ['accessibilityTitle'],
        u = i.a.createElement(c.a, null),
        m = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, d),
            a = i.a.createElement(s.b, n)
          return t ? i.a.createElement(l.a, { title: t }, a) : a
        }
      ;(m.defaultProps = { footer: u }), (t.a = m)
    },
    'ggE+': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M17.297 8.238v14.037c0 .268-.16.527-.4.646-.24.119-.551.099-.771-.06l-6.477-4.689-6.497 4.689c-.121.089-.281.139-.421.139-.12 0-.24-.03-.33-.079-.261-.12-.401-.378-.401-.646V8.238c0-1.589 1.301-2.901 2.913-2.901h9.461c1.602 0 2.923 1.312 2.923 2.901z',
              }),
              i.a.createElement('path', {
                d: 'M22 3.98v14.444c0 .278-.16.536-.41.666-.25.119-.561.099-.791-.07l-1.782-1.281V7.825c0-2.195-1.802-3.974-4.005-3.974h-8.74C6.332 2.272 7.644 1 9.266 1h9.731C20.648 1 22 2.341 22 3.98z',
              }),
              i.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        l = n('ERkP'),
        c = n.n(l),
        s = n('t62R'),
        d = n('I4+6'),
        u = n('cm6r'),
        m = n('rHpw'),
        p = n('MWbm'),
        h = ['align', 'color', 'label'],
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
          n = void 0 === t ? 'center' : t,
          a = e.color,
          o = e.label,
          l = i()(e, h),
          f = d.a.generate({
            backgroundColor: m.a.theme.colors.transparent,
            color: m.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          p.a,
          { style: b.container },
          c.a.createElement(
            u.a,
            r()({}, l, { interactiveStyles: f, style: b.root }),
            c.a.createElement(s.b, { align: n, color: a }, o),
          ),
        )
      }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return U
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        m = n.n(u),
        p = n('5Yy7'),
        h = n.n(p),
        b = n('2VqO'),
        f = n.n(b),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('ERkP')),
        k = n.n(v),
        E = n('38/B'),
        _ = n('t62R'),
        x = n('/yvb'),
        C = n('piX5'),
        I = n('3XMw'),
        w = n.n(I),
        F = n('tI3i'),
        L = n.n(F),
        B = n('oQhu'),
        T = n('rHpw'),
        S = n('aITJ'),
        P = n('MWbm'),
        R = n('n5fo'),
        H = n('5emT'),
        M = n('Oib4'),
        V = n('WtWS'),
        z = n('ioan'),
        O = [
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
        D = function (e) {
          return e.length
        },
        K = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D
          return t(e)
        },
        j = w.a.de540c32,
        A = w.a.b4abfdb3,
        U = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            c()(this, n),
              (a = t.call(this, e)),
              g()(m()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              g()(m()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              g()(
                m()(a),
                '_getTextInputStyle',
                Object(B.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              g()(m()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              g()(m()(a), '_calculateLength', function (e) {
                return K(e, a.props.calculateLength)
              }),
              g()(m()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              g()(m()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i = a.props.type,
                  l =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (o = r.validity) ||
                    void 0 === o
                      ? void 0
                      : o.badInput
                return 'number' === i && '' === l && !0 === c
              }),
              g()(m()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              g()(m()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  o = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: o }), t && t(e)
              }),
              g()(m()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  o = a._calculateLength(r),
                  i = a._getActualCount(r),
                  l = a._getAdjustedMaxLength()
                void 0 !== l && r.length > l && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: o,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              g()(m()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
              }),
              g()(m()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  o = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !o || (e.preventDefault(), o(e))
              }),
              g()(m()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                S.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              g()(m()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                S.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              g()(m()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              g()(m()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              g()(m()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  o = !!a,
                  i = 'string' == typeof e.value,
                  l = 'string' == typeof t
                L()(
                  !(!l && i && !o),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  L()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  L()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              g()(m()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              g()(m()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              g()(m()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              o = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(o),
                actualCount: D(o),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: o,
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
                      o = t.value,
                      i = e.maxLength,
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === r && n === i && !!a === !!l && ('string' == typeof o) === ('string' == typeof s)) ||
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
                      o = e.style,
                      i = this.state.isFocused,
                      l = this._isFormInvalid()
                    return k.a.createElement(
                      P.a,
                      { style: [N.root, o] },
                      k.a.createElement(
                        P.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            C.a.border,
                            N.textInputFormStyle,
                            l && C.a.invalidBorderColor,
                            i && l && C.a.focusedBorderInvalid,
                            i && !l && C.a.focusedBorderValid,
                            !n && C.a.disabled,
                          ],
                        },
                        k.a.createElement(
                          P.a,
                          { style: N.textInputFormWrapper },
                          k.a.createElement(
                            P.a,
                            { style: N.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      k.a.createElement(
                        P.a,
                        { style: [N.sidePadding, N.underTextInputForm] },
                        k.a.createElement(
                          P.a,
                          { style: N.subtextWrapper },
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
                    return k.a.createElement(
                      _.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          N.textInputHeaderItem,
                          a && N.placeholderText,
                          !E.a.reducedMotionEnabled && N.transition,
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
                      o = (e.style, e.type, e.validLength, i()(e, O))
                    return k.a.createElement(
                      P.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      k.a.createElement(
                        _.b,
                        { size: 'headline1', style: W.wrapper },
                        k.a.createElement(
                          z.a,
                          r()({}, o, {
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
                      ? k.a.createElement(
                          P.a,
                          { style: N.passwordVisibilityIconContainer },
                          k.a.createElement(x.a, {
                            accessibilityLabel: a ? A : j,
                            focusable: !0,
                            hoverLabel: { label: a ? A : j },
                            icon: a ? k.a.createElement(R.a, null) : k.a.createElement(H.a, null),
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
                    return k.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite' },
                      k.a.createElement(
                        _.b,
                        { color: 'gray700', size: 'subtext2', style: N.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return k.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'assertive' },
                      k.a.createElement(
                        _.b,
                        { color: 'red500', size: 'subtext2', style: N.subtext },
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
                      a = t && w.a.ia24dc8c(t),
                      r = w.a.ia24dc8c(e)
                    return k.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [N.textInputHeaderItem, N.displayCount] },
                      k.a.createElement(
                        _.b,
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
                      n = [N.icon, t && N.focusedIcon]
                    return e && k.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? k.a.createElement(M.a, { style: [N.validationIcon, C.a.invalidColor] })
                      : k.a.createElement(V.a, { style: [N.validationIcon, C.a.validColor] })
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
                      r = 'string' == typeof a ? K(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(k.a.Component)
      g()(U, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (U.propTypes = {})
      var W = T.a.create(function (e) {
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
        N = T.a.create(function (e) {
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
    sMuS: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateBookmarkFolderModal', function () {
          return B
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        l = (n('tVqn'), n('ho0z'), n('ERkP')),
        c = n.n(l),
        s = n('k49u'),
        d = n('1YZw'),
        u = n('Hja3'),
        m = n('rxPX'),
        p = n('0KEI'),
        h = function (e, t) {
          var n, a
          return (
            (null === (n = t.location) || void 0 === n || null === (a = n.state) || void 0 === a
              ? void 0
              : a.tweet_id) || ''
          )
        },
        b = Object(m.a)()
          .propsFromState(function () {
            return { tweetId: h }
          })
          .propsFromActions(function () {
            return {
              addToast: d.b,
              addTweetToBookmarkFolder: u.b.addTweetToBookmarkFolder,
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'CREATE_BOOKMARK_FOLDER',
              ),
              createBookmarkFolder: u.a,
            }
          }),
        f = n('jHSc'),
        y = n('3XMw'),
        g = n.n(y),
        v = n('SrIh'),
        k = n('k89r'),
        E = n('/yvb'),
        _ = n('p+r5'),
        x = g.a.f8fc0b47,
        C = g.a.i6e7e298,
        I = g.a.d4e220b3,
        w = g.a.a0ea2fa5,
        F = g.a.eec37eab,
        L = g.a.e41c9b4f,
        B = function (e) {
          var t = e.addToast,
            n = e.addTweetToBookmarkFolder,
            a = e.createBookmarkFolder,
            o = e.createLocalApiErrorHandler,
            l = e.history,
            d = e.tweetId,
            u = c.a.useState(''),
            m = i()(u, 2),
            p = m[0],
            h = m[1],
            b = Object(k.a)()
          c.a.useEffect(function () {
            b.scribePageImpression({ component: 'bookmark_folders_create', action: 'show' })
          }, [])
          var y = function (e) {
              b.scribe({ component: 'bookmark_folders_create', element: 'done', action: 'click' })
              var r = p.trim()
              r &&
                (a(r)
                  .then(function (e) {
                    if (d) {
                      var a,
                        r = null == e || null === (a = e.bookmark_collection_create) || void 0 === a ? void 0 : a.id
                      if (r) {
                        var o
                        n(r, { tweetId: d })
                        var i = L({
                          bookmarkFolderName:
                            (null == e || null === (o = e.bookmark_collection_create) || void 0 === o
                              ? void 0
                              : o.name) || '',
                        })
                        t({ text: i })
                      } else Object(v.a)('CreateBookmarkFolderModal: Missing folderId')
                    }
                  })
                  .catch(function (e) {
                    return g(e)
                  }),
                l.goBackThroughModals())
            },
            g = function (e) {
              var t
              b.scribe({ component: 'bookmark_folders_create', action: 'error' }),
                o(((t = {}), r()(t, s.a.GenericBadRequest, { toast: { text: F } }), r()(t, 'showToast', !0), t))(e)
            }
          return c.a.createElement(
            f.b,
            {
              backButtonType: 'back',
              documentTitle: x,
              onBackClick: function () {
                b.scribe({ component: 'bookmark_folders_create', element: 'cancel', action: 'click' }), l.goBack()
              },
              rightControl: c.a.createElement(
                E.a,
                { disabled: '' === p.trim(), onPress: y, size: 'small', type: 'primaryFilled' },
                C,
              ),
              title: x,
            },
            c.a.createElement(_.a, {
              accessibilityLabel: I,
              autoFocus: !0,
              errorText: w,
              invalid: p.length > 0 && '' === p.trim(),
              label: I,
              maxLength: 25,
              name: 'name',
              onChange: function (e) {
                h(e.target.value)
              },
              onSubmitEditing: y,
            }),
          )
        },
        T = b(B)
      t.default = T
    },
  },
])
//# sourceMappingURL=WIPED
