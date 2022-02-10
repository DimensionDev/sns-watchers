;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '1kbl': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ERkP'),
        r = a.n(n),
        o = a('3XMw'),
        i = a.n(o),
        l = a('ggE+'),
        c = a('KQzH'),
        s = a('rHpw'),
        d = a('k89r'),
        u = a('MWbm'),
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
        b = (a('ho0z'), a('Hja3')),
        f = a('rxPX'),
        g = function (e, t) {
          var a = t.bookmarkFolderId
          return a ? b.b.select(e, a) : void 0
        },
        y = Object(f.a)().propsFromState(function () {
          return { bookmarkFolder: g }
        }),
        k = a('U+bB'),
        v = s.a.create(function (e) {
          return { thumbnail: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' } }
        }),
        _ = y(function (e) {
          var t,
            a,
            n = e.bookmarkFolder,
            o = Object(d.a)()
          return null != n &&
            null !== (t = n.media) &&
            void 0 !== t &&
            null !== (a = t.media_info) &&
            void 0 !== a &&
            a.original_img_url
            ? r.a.createElement(c.a, {
                key: n.id,
                label: n.name,
                link: '/i/bookmarks/'.concat(n.id),
                onPress: function () {
                  o.scribe({ element: 'bookmark_folder', action: 'click' })
                },
                thumbnail: r.a.createElement(k.a, { source: n.media.media_info.original_img_url, style: v.thumbnail }),
              })
            : null
        }),
        x = a('es0u'),
        C = a('48TD'),
        w = a('hqKg'),
        E = a('oQhu'),
        I = a('G6rE'),
        F = Object(f.a)()
          .propsFromState(function () {
            return {
              loggedInUser: I.e.selectLoggedInUser,
              sliceModule:
                ((e = Object(E.a)(function (e) {
                  return Object(C.a)(e)
                })),
                Object(w.createSelector)(I.e.selectLoggedInUser, function (t) {
                  return null != t && t.id_str ? e(t.id_str) : void 0
                })),
            }
            var e
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              a = e.sliceModule
            return { loggedInUserScreenName: null == t ? void 0 : t.screen_name, sliceModule: a, isLoggedInUser: !!t }
          })
          .withAnalytics({ page: 'bookmark_folders' }),
        B = a('97Jx'),
        L = a.n(B),
        T = a('m3Bd'),
        S = a.n(T),
        P = a('ZGdk'),
        z = a('/yvb'),
        H = ['history', 'onCreateButtonClick', 'style', 'testID', 'type'],
        R = s.a.create(function (e) {
          return {
            button: { marginRight: e.spaces.space4 },
            icon: { width: s.a.theme.fontSizes.title3, height: s.a.theme.fontSizes.title3 },
          }
        }),
        V = i.a.f8fc0b47,
        M = r.a.createElement(P.a, { style: R.icon }),
        K = function (e) {
          var t = e.history,
            a = e.onCreateButtonClick,
            n = e.style,
            o = e.testID,
            i = e.type,
            l = S()(e, H)
          return r.a.createElement(
            z.a,
            L()({ accessibilityLabel: V, hoverLabel: { label: V } }, l, {
              icon: M,
              onPress: function () {
                a(), t.push({ pathname: '/i/bookmarks/create_folder' })
              },
              pullRight: !0,
              style: [R.button, n],
              testID: o,
              type: i || 'primaryText',
            }),
          )
        },
        j = a('yoO3'),
        O = a('VS6U'),
        D = a('FS1z'),
        A = a('HQ0t'),
        U = a('FIs5'),
        W = a('yrzJ'),
        G = i.a.i3145aa0,
        N = i.a.f8fc0b47,
        X = i.a.j45c642d,
        Q = i.a.adad5408,
        q = i.a.be329aab,
        J = i.a.j0a47c9c,
        Y = F(function (e) {
          var t = e.analytics,
            a = e.history,
            n = e.isLoggedInUser,
            o = e.loggedInUserScreenName,
            i = e.sliceModule,
            l = r.a.useCallback(
              function () {
                a.push({ pathname: '/i/bookmarks/create_folder' })
              },
              [a],
            ),
            c = r.a.useCallback(
              function () {
                return (
                  t.scribePageImpression({ component: 'empty', action: 'impression' }),
                  n ? r.a.createElement(U.a, { buttonText: Q, header: q, message: J, onButtonPress: l }) : null
                )
              },
              [t, l, n],
            ),
            s = function (e) {
              return r.a.createElement(_, { bookmarkFolderId: e, key: e })
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
                      ? r.a.createElement(D.a, {
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
            u = r.a.createElement(K, {
              accessibilityLabel: N,
              history: a,
              onCreateButtonClick: function () {
                return t.scribe({ element: 'create', action: 'click' })
              },
            })
          return r.a.createElement(
            j.a,
            null,
            r.a.createElement(O.a, {
              backLocation: '/home',
              history: a,
              primaryContent: d(),
              rightControl: u,
              sidebarContent: r.a.createElement(x.a, null),
              subtitle: o ? r.a.createElement(W.a, { screenName: o }) : null,
              title: r.a.createElement(A.a, { text: G }),
              withBackButton: !1,
            }),
          )
        })
      t.default = Y
    },
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
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
    HQ0t: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        o = a('v6aA'),
        i = a('3XMw'),
        l = a.n(i),
        c = a('Q3sg'),
        s = a('rHpw'),
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
          a = t.featureSwitches,
          n = t.userClaims,
          i = a.isTrue('subscriptions_blue_premium_labeling_enabled'),
          l = n.isTwitterBlueSubscriber(),
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
    Iehm: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AddToBookmarkFolderModal', function () {
          return ee
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        m = a.n(u),
        p = a('KEM+'),
        h = a.n(p),
        b = (a('2G9S'), a('ERkP')),
        f = a.n(b),
        g = (a('ho0z'), a('1YZw')),
        y = a('Hja3'),
        k = a('rxPX'),
        v = function (e, t) {
          var a = t.bookmarkFolderId
          return a ? y.b.select(e, a) : void 0
        },
        _ = Object(k.a)()
          .propsFromState(function () {
            return { bookmarkFolder: v }
          })
          .propsFromActions(function () {
            return {
              addToast: g.b,
              addTweetToBookmarkFolder: y.b.addTweetToBookmarkFolder,
              removeTweetFromBookmarkFolder: y.b.removeTweetFromBookmarkFolder,
            }
          }),
        x = a('3XMw'),
        C = a.n(x),
        w = a('IMYl'),
        E = a('U+bB'),
        I = a('Irs7'),
        F = a('htQn'),
        B = a('t62R'),
        L = a('rHpw'),
        T = C.a.e41c9b4f,
        S = C.a.a2e7377e,
        P = _(function (e) {
          var t,
            a,
            n,
            r,
            o = e.addTweetToBookmarkFolder,
            i = e.bookmarkFolder,
            l = e.removeTweetFromBookmarkFolder,
            c = e.tweetId,
            s = Object(I.b)()
          if (
            null == i ||
            null === (t = i.media) ||
            void 0 === t ||
            null === (a = t.media_info) ||
            void 0 === a ||
            !a.original_img_url
          )
            return null
          var d = i.name,
            u =
              null === (n = i.media) || void 0 === n || null === (r = n.media_info) || void 0 === r
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
                  a = e.history
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
                  a.goBackThroughModals()
              },
              style: [z.root, z.paddingHorizontal, z.contentContainer],
            },
            u ? f.a.createElement(E.a, { source: u, style: z.thumbnailContainer }) : null,
            f.a.createElement(B.b, { style: z.content }, d),
            p ? f.a.createElement(w.a, { style: z.icon }) : null,
          )
        }),
        z = L.a.create(function (e) {
          return {
            root: {
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              minHeight: 'calc('
                .concat(L.a.theme.lineHeights.headline1, ' + 2 * ')
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
        H = a('48TD'),
        R = a('hqKg'),
        V = a('G6rE'),
        M = function (e, t) {
          var a, n
          return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
            ? void 0
            : n.tweet_id
        },
        K = Object(k.a)().propsFromState(function () {
          return {
            sliceModule: Object(R.createSelector)(V.e.selectLoggedInUser, M, function (e, t) {
              return null != e && e.id_str ? Object(H.a)(e.id_str, t) : void 0
            }),
            tweetId: M,
          }
        }),
        j = a('jHSc'),
        O = a('FS1z'),
        D = a('HQ0t'),
        A = a('MWbm'),
        U = a('FIs5'),
        W = a('jtO7'),
        G = a('cm6r'),
        N = a('ggE+'),
        X = C.a.c2453317,
        Q = C.a.bcc7e8cf,
        q = C.a.adad5408,
        J = C.a.be329aab,
        Y = C.a.j0a47c9c,
        Z = C.a.beba2a0d,
        $ = C.a.j45c642d,
        ee = (function (e) {
          d()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_handleCreateFolderPress', function () {
                var t = e.props,
                  a = t.history,
                  n = t.tweetId
                a.push({ pathname: '/i/bookmarks/create_folder', state: { tweet_id: n } })
              }),
              h()(c()(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              h()(c()(e), '_renderEmptyState', function () {
                return f.a.createElement(U.a, {
                  buttonText: q,
                  header: J,
                  message: Y,
                  onButtonPress: e._handleCreateFolderPress,
                })
              }),
              h()(c()(e), '_renderBookmarkFolder', function (t) {
                var a = e.props,
                  n = a.history,
                  r = a.tweetId
                return f.a.createElement(P, { bookmarkFolderId: t, history: n, key: t, tweetId: r })
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.sliceModule
                  return e
                    ? f.a.createElement(
                        j.b,
                        {
                          backButtonType: 'close',
                          documentTitle: X,
                          onBackClick: this._handleBackClick,
                          title: f.a.createElement(D.a, { text: X }),
                        },
                        f.a.createElement(W.a, {
                          align: 'left',
                          color: 'primary',
                          label: Z,
                          onPress: this._handleCreateFolderPress,
                        }),
                        f.a.createElement(
                          G.a,
                          { style: [ae.root, ae.paddingHorizontal, ae.contentContainer] },
                          f.a.createElement(
                            A.a,
                            { style: ae.thumbnail },
                            f.a.createElement(N.a, { style: ae.allBookmarks }),
                          ),
                          f.a.createElement(B.b, { style: ae.content }, Q),
                          f.a.createElement(w.a, { style: ae.checkmark }),
                        ),
                        f.a.createElement(O.a, {
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
            a
          )
        })(f.a.Component),
        te = K(ee),
        ae =
          ((t.default = te),
          L.a.create(function (e) {
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
    'Ja/I': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'EditOrDeleteBookmarkFolderModalScreen', function () {
          return H
        })
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ddV6'),
        i = a.n(o),
        l = (a('KqXw'), a('WNMA'), a('tVqn'), a('7x/C'), a('JtPf'), a('Qavd'), a('MvUL'), a('ERkP')),
        c = a.n(l),
        s = a('k49u'),
        d = (a('ho0z'), a('1YZw')),
        u = a('Hja3'),
        m = a('rxPX'),
        p = a('0KEI'),
        h = function (e, t) {
          var a = t.match.params.bookmarkFolderId,
            n = a ? u.b.select(e, a) : void 0
          return null == n ? void 0 : n.name
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
        f = a('jHSc'),
        g = a('3XMw'),
        y = a.n(g),
        k = a('/yvb'),
        v = a('p+r5'),
        _ = a('jtO7'),
        x = a('eb3s'),
        C = y.a.f075b0e8,
        w = y.a.d4e220b3,
        E = y.a.i2209530,
        I = y.a.h18f86a4,
        F = y.a.f4ea9679,
        B = y.a.b670aa62,
        L = y.a.aece5462,
        T = y.a.e3299b93,
        S = y.a.c09ea713,
        P = y.a.gee78815,
        z = { confirmButtonLabel: y.a.d96cf7cd, headline: y.a.h9a5daa1, text: y.a.ga2edf67 },
        H = function (e, t) {
          var a = e.addToast,
            n = e.analytics,
            o = e.bookmarkFolderName,
            l = e.createLocalApiErrorHandler,
            d = e.deleteBookmarkFolder,
            u = e.editBookmarkFolder,
            m = e.history,
            p = e.match,
            h = c.a.useState(o || ''),
            b = i()(h, 2),
            g = b[0],
            y = b[1],
            H = c.a.useState(''),
            R = i()(H, 2),
            V = R[0],
            M = R[1],
            K = c.a.useState(!0),
            j = i()(K, 2),
            O = j[0],
            D = j[1],
            A = c.a.useState(!1),
            U = i()(A, 2),
            W = U[0],
            G = U[1],
            N = p.params.bookmarkFolderId,
            X = '/i/bookmarks/'.concat(N),
            Q = function (e) {
              M(e.message || P)
            }
          return c.a.createElement(
            f.b,
            {
              backButtonType: 'close',
              backLocation: X,
              documentTitle: C,
              history: m,
              onBackClick: function (e) {
                n.scribeAction('cancel'), e()
              },
              rightControl: c.a.createElement(
                k.a,
                {
                  disabled: O,
                  onPress: function () {
                    n.scribeAction('save'),
                      D(!0),
                      u(N, { name: g })
                        .then(function () {
                          a({ text: L }), m.goBack()
                        })
                        .catch(function (e) {
                          l(
                            r()({ defaultToast: { text: T }, showToast: !0 }, s.a.ValidationFailure, {
                              customAction: Q,
                            }),
                          )(e),
                            n.scribe({ element: 'delete', action: 'error', data: e })
                        })
                        .finally(function () {
                          return D(!1)
                        })
                  },
                  type: 'primaryFilled',
                },
                E,
              ),
              title: C,
            },
            c.a.createElement(v.a, {
              autoFocus: !0,
              errorText: V,
              invalid: !!V,
              label: w,
              maxLength: 25,
              name: B,
              onChange: function (e) {
                var t = e.target.value
                y(t), D('' === t.trim() || t.trim() === o)
              },
              value: g,
            }),
            c.a.createElement(_.a, {
              color: 'red500',
              label: I,
              onPress: function () {
                G(!0)
              },
            }),
            W &&
              c.a.createElement(x.a, {
                confirmButtonLabel: z.confirmButtonLabel,
                confirmButtonType: 'destructiveFilled',
                headline: z.headline,
                onCancel: function () {
                  n.scribe({ element: 'delete', action: 'cancel' }), G(!1)
                },
                onConfirm: function () {
                  n.scribeAction('delete'),
                    d(N)
                      .then(function () {
                        G(!1), a({ text: F }), m.replace('/i/bookmarks')
                      })
                      .catch(function (e) {
                        l({ defaultToast: { text: S }, showToast: !0 })(e),
                          n.scribe({ element: 'delete', action: 'error', data: e })
                      })
                },
                text: z.text,
              }),
          )
        },
        R = b(H)
      t.default = R
    },
    KQzH: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = (a('hBvt'), a('ERkP')),
        i = a.n(o),
        l = a('BUB3'),
        c = a('shC7'),
        s = a('csss'),
        d = a('t62R')
      t.a = function (e) {
        return i.a.createElement(l.a, { exact: !0, path: e.link }, function (t) {
          var a = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, r()({ isActive: t }, e, { label: i.a.createElement(d.b, { dir: a }, e.label) }))
        })
      }
    },
    Q3sg: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
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
    'ggE+': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
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
    jtO7: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('m3Bd'),
        i = a.n(o),
        l = a('ERkP'),
        c = a.n(l),
        s = a('t62R'),
        d = a('I4+6'),
        u = a('cm6r'),
        m = a('rHpw'),
        p = a('MWbm'),
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
          a = void 0 === t ? 'center' : t,
          n = e.color,
          o = e.label,
          l = i()(e, h),
          f = d.a.generate({
            backgroundColor: m.a.theme.colors.transparent,
            color: m.a.theme.colors[n],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          p.a,
          { style: b.container },
          c.a.createElement(
            u.a,
            r()({}, l, { interactiveStyles: f, style: b.root }),
            c.a.createElement(s.b, { align: a, color: n }, o),
          ),
        )
      }
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return U
      })
      a('yiKp')
      var n = a('97Jx'),
        r = a.n(n),
        o = a('m3Bd'),
        i = a.n(o),
        l = a('VrFO'),
        c = a.n(l),
        s = a('Y9Ll'),
        d = a.n(s),
        u = a('1Pcy'),
        m = a.n(u),
        p = a('5Yy7'),
        h = a.n(p),
        b = a('2VqO'),
        f = a.n(b),
        g = a('KEM+'),
        y = a.n(g),
        k = (a('2G9S'), a('ERkP')),
        v = a.n(k),
        _ = a('38/B'),
        x = a('t62R'),
        C = a('/yvb'),
        w = a('piX5'),
        E = a('3XMw'),
        I = a.n(E),
        F = a('tI3i'),
        B = a.n(F),
        L = a('oQhu'),
        T = a('rHpw'),
        S = a('aITJ'),
        P = a('MWbm'),
        z = a('n5fo'),
        H = a('5emT'),
        R = a('Oib4'),
        V = a('WtWS'),
        M = a('ioan'),
        K = [
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
        j = function (e) {
          return e.length
        },
        O = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j
          return t(e)
        },
        D = I.a.de540c32,
        A = I.a.b4abfdb3,
        U = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            c()(this, a),
              (n = t.call(this, e)),
              y()(m()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              y()(m()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              y()(
                m()(n),
                '_getTextInputStyle',
                Object(L.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              y()(m()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === a && t ? (r ? 'text' : 'password') : a
              }),
              y()(m()(n), '_calculateLength', function (e) {
                return O(e, n.props.calculateLength)
              }),
              y()(m()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              y()(m()(n), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  r,
                  o,
                  i = n.props.type,
                  l =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (r = a.textInputNode) ||
                    void 0 === r ||
                    null === (o = r.validity) ||
                    void 0 === o
                      ? void 0
                      : o.badInput
                return 'number' === i && '' === l && !0 === c
              }),
              y()(m()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              y()(m()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur,
                  a = e.currentTarget.value,
                  r = n._calculateLength(a),
                  o = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: o }), t && t(e)
              }),
              y()(m()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  r = e.currentTarget.value,
                  o = n._calculateLength(r),
                  i = n._getActualCount(r),
                  l = n._getAdjustedMaxLength()
                void 0 !== l && r.length > l && a.length < r.length
                  ? (e.currentTarget.value = a)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: o,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              y()(m()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t(e)
              }),
              y()(m()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  r = t.onKeyPress,
                  o = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !o || (e.preventDefault(), o(e))
              }),
              y()(m()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                S.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              y()(m()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                S.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              y()(m()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              y()(m()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              y()(m()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  r = e.validLength,
                  o = !!n,
                  i = 'string' == typeof e.value,
                  l = 'string' == typeof t
                B()(
                  !(!l && i && !o),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  B()(!(a && r && r > a), 'Max length should be equal or greater than valid length.'),
                  B()(
                    !((void 0 !== a && a <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              y()(m()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              y()(m()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              y()(m()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  t = n.getValue(),
                  a = n._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              o = e.value || r || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(o),
                actualCount: j(o),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: o,
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
                      o = t.value,
                      i = e.maxLength,
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === r && a === i && !!n === !!l && ('string' == typeof o) === ('string' == typeof s)) ||
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
                      o = e.style,
                      i = this.state.isFocused,
                      l = this._isFormInvalid()
                    return v.a.createElement(
                      P.a,
                      { style: [G.root, o] },
                      v.a.createElement(
                        P.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            w.a.border,
                            G.textInputFormStyle,
                            l && w.a.invalidBorderColor,
                            i && l && w.a.focusedBorderInvalid,
                            i && !l && w.a.focusedBorderValid,
                            !a && w.a.disabled,
                          ],
                        },
                        v.a.createElement(
                          P.a,
                          { style: G.textInputFormWrapper },
                          v.a.createElement(
                            P.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      v.a.createElement(
                        P.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        v.a.createElement(
                          P.a,
                          { style: G.subtextWrapper },
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
                    return v.a.createElement(
                      x.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          n && G.placeholderText,
                          !_.a.reducedMotionEnabled && G.transition,
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
                      o = (e.style, e.type, e.validLength, i()(e, K))
                    return v.a.createElement(
                      P.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      v.a.createElement(
                        x.b,
                        { size: 'headline1', style: W.wrapper },
                        v.a.createElement(
                          M.a,
                          r()({}, o, {
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
                      ? v.a.createElement(
                          P.a,
                          { style: G.passwordVisibilityIconContainer },
                          v.a.createElement(C.a, {
                            accessibilityLabel: n ? A : D,
                            focusable: !0,
                            hoverLabel: { label: n ? A : D },
                            icon: n ? v.a.createElement(z.a, null) : v.a.createElement(H.a, null),
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
                    return v.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite' },
                      v.a.createElement(
                        x.b,
                        { color: 'gray700', size: 'subtext2', style: G.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return v.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'assertive' },
                      v.a.createElement(
                        x.b,
                        { color: 'red500', size: 'subtext2', style: G.subtext },
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
                    return v.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      v.a.createElement(
                        x.b,
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
                      a = [G.icon, t && G.focusedIcon]
                    return e && v.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? v.a.createElement(R.a, { style: [G.validationIcon, w.a.invalidColor] })
                      : v.a.createElement(V.a, { style: [G.validationIcon, w.a.validColor] })
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
                      r = 'string' == typeof n ? O(n, a) : 0
                    return 'string' == typeof n && r !== t.displayCount
                      ? { displayCount: r, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            a
          )
        })(v.a.Component)
      y()(U, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
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
        G = T.a.create(function (e) {
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
    sMuS: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'CreateBookmarkFolderModal', function () {
          return L
        })
      var n = a('KEM+'),
        r = a.n(n),
        o = a('ddV6'),
        i = a.n(o),
        l = (a('tVqn'), a('ho0z'), a('ERkP')),
        c = a.n(l),
        s = a('k49u'),
        d = a('1YZw'),
        u = a('Hja3'),
        m = a('rxPX'),
        p = a('0KEI'),
        h = function (e, t) {
          var a, n
          return (
            (null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
              ? void 0
              : n.tweet_id) || ''
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
        f = a('jHSc'),
        g = a('3XMw'),
        y = a.n(g),
        k = a('SrIh'),
        v = a('k89r'),
        _ = a('/yvb'),
        x = a('p+r5'),
        C = y.a.f8fc0b47,
        w = y.a.i6e7e298,
        E = y.a.d4e220b3,
        I = y.a.a0ea2fa5,
        F = y.a.eec37eab,
        B = y.a.e41c9b4f,
        L = function (e) {
          var t = e.addToast,
            a = e.addTweetToBookmarkFolder,
            n = e.createBookmarkFolder,
            o = e.createLocalApiErrorHandler,
            l = e.history,
            d = e.tweetId,
            u = c.a.useState(''),
            m = i()(u, 2),
            p = m[0],
            h = m[1],
            b = Object(v.a)()
          c.a.useEffect(function () {
            b.scribePageImpression({ component: 'bookmark_folders_create', action: 'show' })
          }, [])
          var g = function (e) {
              b.scribe({ component: 'bookmark_folders_create', element: 'done', action: 'click' })
              var r = p.trim()
              r &&
                (n(r)
                  .then(function (e) {
                    if (d) {
                      var n,
                        r = null == e || null === (n = e.bookmark_collection_create) || void 0 === n ? void 0 : n.id
                      if (r) {
                        var o
                        a(r, { tweetId: d })
                        var i = B({
                          bookmarkFolderName:
                            (null == e || null === (o = e.bookmark_collection_create) || void 0 === o
                              ? void 0
                              : o.name) || '',
                        })
                        t({ text: i })
                      } else Object(k.a)('CreateBookmarkFolderModal: Missing folderId')
                    }
                  })
                  .catch(function (e) {
                    return y(e)
                  }),
                l.goBackThroughModals())
            },
            y = function (e) {
              var t
              b.scribe({ component: 'bookmark_folders_create', action: 'error' }),
                o(((t = {}), r()(t, s.a.GenericBadRequest, { toast: { text: F } }), r()(t, 'showToast', !0), t))(e)
            }
          return c.a.createElement(
            f.b,
            {
              backButtonType: 'back',
              documentTitle: C,
              onBackClick: function () {
                b.scribe({ component: 'bookmark_folders_create', element: 'cancel', action: 'click' }), l.goBack()
              },
              rightControl: c.a.createElement(
                _.a,
                { disabled: '' === p.trim(), onPress: g, size: 'small', type: 'primaryFilled' },
                w,
              ),
              title: C,
            },
            c.a.createElement(x.a, {
              accessibilityLabel: E,
              autoFocus: !0,
              errorText: I,
              invalid: p.length > 0 && '' === p.trim(),
              label: E,
              maxLength: 25,
              name: 'name',
              onChange: function (e) {
                h(e.target.value)
              },
              onSubmitEditing: g,
            }),
          )
        },
        T = b(L)
      t.default = T
    },
  },
])
//# sourceMappingURL=WIPED
