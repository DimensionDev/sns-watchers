;(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    '1kbl': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BookmarkFoldersScreen', function () {
          return O
        })
      var r = n('ERkP'),
        o = n.n(r),
        a = n('Eeja'),
        i = n('es0u'),
        l = n('G6rE'),
        c = n('rxPX'),
        s = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: l.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: null == t ? void 0 : t.screen_name }
          })
          .withAnalytics({ page: 'bookmark_folders' }),
        d = n('97Jx'),
        u = n.n(d),
        m = n('m3Bd'),
        p = n.n(m),
        b = n('3XMw'),
        h = n.n(b),
        f = n('ZGdk'),
        k = n('rHpw'),
        g = n('/yvb'),
        v = ['history', 'onCreateButtonClick', 'style', 'testID', 'type'],
        y = k.a.create(function (e) {
          return {
            button: { marginRight: e.spaces.space4 },
            icon: { width: k.a.theme.fontSizes.title3, height: k.a.theme.fontSizes.title3 },
          }
        }),
        _ = h.a.f8fc0b47,
        E = o.a.createElement(f.a, { style: y.icon }),
        F = function (e) {
          var t = e.history,
            n = e.onCreateButtonClick,
            r = e.style,
            a = e.testID,
            i = e.type,
            l = p()(e, v)
          return o.a.createElement(
            g.a,
            u()({ accessibilityLabel: _, hoverLabel: { label: _ } }, l, {
              icon: E,
              onPress: function () {
                n(), t.push({ pathname: '/i/bookmarks/create_folder' })
              },
              pullRight: !0,
              style: [y.button, r],
              testID: a,
              type: i || 'primaryText',
            }),
          )
        },
        w = n('yoO3'),
        I = n('VS6U'),
        x = n('HQ0t'),
        C = n('yrzJ'),
        B = h.a.i3145aa0,
        T = h.a.f8fc0b47,
        O = function (e) {
          var t = e.analytics,
            n = e.history,
            r = e.loggedInUserScreenName,
            l = o.a.useCallback(
              function () {
                n.push({ pathname: '/i/bookmarks/create_folder' })
              },
              [n],
            ),
            c = o.a.createElement(F, {
              accessibilityLabel: T,
              history: n,
              onCreateButtonClick: function () {
                return t.scribe({ element: 'create', action: 'click' })
              },
              testID: 'createNewBookmarkFolderAppBarButton',
            })
          return o.a.createElement(
            w.a,
            null,
            o.a.createElement(I.a, {
              backLocation: '/home',
              history: n,
              primaryContent: o.a.createElement(a.a, { onCreateFolderPress: l }),
              rightControl: c,
              sidebarContent: o.a.createElement(i.a, null),
              subtitle: r ? o.a.createElement(C.a, { screenName: r }) : null,
              title: o.a.createElement(x.a, { text: B }),
              withBackButton: !1,
            }),
          )
        },
        L = s(O)
      t.default = L
    },
    '48TD': function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        a = n('wAC9')
      t.a = function (e, t) {
        return Object(a.a)({
          contextSuffix: 'BOOKMARK_FOLDERS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Bookmarks.fetchBookmarkFoldersSlice
          },
          getEndpointParams: function (e) {
            return o()(o()({}, e), {}, { tweet_id: t })
          },
          sliceKey: 'bookmarkFoldersSlice-'.concat(e),
        })
      }
    },
    '5emT': function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        a = n('ERkP'),
        i = n.n(a),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
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
    BQZD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'd', function () {
          return u
        })
      var r = n('WpDa'),
        o = n('oQhu'),
        a = n('eR3e'),
        i = n('ZNT5'),
        l = 'bookmarks',
        c = function (e) {
          return Object(i.a)({
            timelineId: 'bookmarkFolder-'.concat(e),
            getEndpoint: function (e) {
              return e.Bookmarks.fetchBookmarkFolderTimeline
            },
            getEndpointParams: function (t) {
              var n = t.cursor
              return { cursor: 'string' == typeof n ? n : void 0, bookmark_collection_id: e }
            },
            formatResponse: r.a,
            context: 'FETCH_BOOKMARK_FOLDER_TIMELINE',
            perfKey: 'bookmarkFolderGraphQL',
          })
        },
        s = Object(o.a)(function (e) {
          return e.isTrue('responsive_web_graphql_bookmarks')
            ? Object(i.a)({
                timelineId: l,
                getEndpoint: function (e) {
                  return e.Bookmarks.fetchBookmarksTimeline
                },
                getEndpointParams: function (e) {
                  var t = e.count,
                    n = e.cursor
                  return { count: t, cursor: 'string' == typeof n ? n : void 0 }
                },
                formatResponse: r.a,
                context: 'FETCH_BOOKMARKS_TIMELINE',
                perfKey: 'bookmarksGraphQL',
              })
            : Object(i.a)({
                timelineId: l,
                getEndpoint: function (e) {
                  return e.URT.fetchBookmarks
                },
                getEndpointParams: function (e) {
                  return e
                },
                context: 'FETCH_BOOKMARKS_TIMELINE',
                perfKey: 'bookmarks',
              })
        })
      t.b = s
      var d = function () {
          return function (e, t, n) {
            var r = n.api,
              o = n.featureSwitches
            return (
              o.isTrue('responsive_web_graphql_mutation_bookmarks')
                ? r.Bookmarks.deleteAll
                : r.Tweets.removeAllBookmarks
            )().then(function () {
              return e(s(o).deleteTimeline())
            })
          }
        },
        u = a.q.bind(null, l)
    },
    Eeja: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n.n(r),
        a = n('3XMw'),
        i = n.n(a),
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
        b = function (e) {
          var t = e.onPress,
            n = Object(d.a)()
          return o.a.createElement(c.a, {
            key: 'AllBookmarksCell',
            label: m,
            link: '/i/bookmarks/all',
            onPress: function (e) {
              n.scribe({ element: 'bookmarks', action: 'click' }), t(e)
            },
            thumbnail: o.a.createElement(u.a, { style: p.thumbnail }, o.a.createElement(l.a, { style: p.icon })),
          })
        },
        h = (n('ho0z'), n('Hja3')),
        f = n('rxPX'),
        k = function (e, t) {
          var n = t.bookmarkFolderId
          return n ? h.b.select(e, n) : void 0
        },
        g = Object(f.a)().propsFromState(function () {
          return { bookmarkFolder: k }
        }),
        v = n('U+bB'),
        y = s.a.create(function (e) {
          return { thumbnail: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' } }
        }),
        _ = g(function (e) {
          var t,
            n,
            r = e.bookmarkFolder,
            a = e.onPress,
            i = Object(d.a)()
          return null != r &&
            null !== (t = r.media) &&
            void 0 !== t &&
            null !== (n = t.media_info) &&
            void 0 !== n &&
            n.original_img_url
            ? o.a.createElement(c.a, {
                key: r.id,
                label: r.name,
                link: '/i/bookmarks/'.concat(r.id),
                onPress: function (e) {
                  i.scribe({ element: 'bookmark_folder', action: 'click' }), a(e)
                },
                thumbnail: o.a.createElement(v.a, { source: r.media.media_info.original_img_url, style: y.thumbnail }),
              })
            : null
        }),
        E = n('48TD'),
        F = n('hqKg'),
        w = n('oQhu'),
        I = n('G6rE'),
        x = Object(f.a)()
          .propsFromState(function () {
            return {
              loggedInUser: I.e.selectLoggedInUser,
              sliceModule:
                ((e = Object(w.a)(function (e) {
                  return Object(E.a)(e)
                })),
                Object(F.createSelector)(I.e.selectLoggedInUser, function (t) {
                  return null != t && t.id_str ? e(t.id_str) : void 0
                })),
            }
            var e
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { sliceModule: e.sliceModule, isLoggedInUser: !!t }
          })
          .withAnalytics({ page: 'bookmark_folders' }),
        C = n('FIs5'),
        B = n('FS1z'),
        T = i.a.adad5408,
        O = i.a.be329aab,
        L = i.a.j0a47c9c,
        S = i.a.j45c642d,
        R = x(function (e) {
          var t = e.analytics,
            n = e.isLoggedInUser,
            r = e.onCreateFolderPress,
            a = e.onFolderPress,
            i = e.sliceModule
          i || t.scribeAction('error')
          var l = o.a.useCallback(
              function () {
                return (
                  t.scribePageImpression({ component: 'empty', action: 'impression' }),
                  n && r ? o.a.createElement(C.a, { buttonText: T, header: O, message: L, onButtonPress: r }) : null
                )
              },
              [t, r, n],
            ),
            c = function (e) {
              return function (t) {
                a && (t.preventDefault(), a(e))
              }
            }
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(b, { onPress: c('all') }),
            i
              ? o.a.createElement(B.a, {
                  alwaysFetch: !0,
                  module: i,
                  noItemsRenderer: l,
                  renderer: function (e) {
                    return o.a.createElement(_, { bookmarkFolderId: e, key: e, onPress: c(e) })
                  },
                  retryMessage: S,
                })
              : null,
          )
        })
      t.a = R
    },
    HQ0t: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n.n(r),
        a = n('v6aA'),
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
        var t = o.a.useContext(a.a),
          n = t.featureSwitches,
          r = t.userClaims,
          i = n.isTrue('subscriptions_blue_premium_labeling_enabled'),
          l = r.isTwitterBlueSubscriber(),
          s = e.style,
          m = e.text
        return l && i
          ? o.a.createElement(
              o.a.Fragment,
              null,
              m,
              o.a.createElement(c.a, { accessibilityLabel: d, style: [u.icon, s] }),
            )
          : m
      }
    },
    Hja3: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return E
      }),
        n.d(t, 'a', function () {
          return F
        }),
        n.d(t, 'd', function () {
          return w
        })
      var r = n('KEM+'),
        o = n.n(r),
        a = n('yiKp'),
        i = n.n(a),
        l = (n('yH/f'), n('ho0z'), n('7x/C'), n('JtPf'), n('PiaM')),
        c = n('/kEJ'),
        s = n('48TD'),
        d = n('BQZD'),
        u = n('oEOe'),
        m = n('lMB6'),
        p = n('RqPI'),
        b = n('3zvM'),
        h = n('oQhu'),
        f = n('3A2y'),
        k = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_FAILURE',
        }),
        g = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_FAILURE',
        }),
        v = Object(b.e)({ namespace: 'bookmarkFolders' }),
        y = Object(h.a)(function (e) {
          return Object(s.a)(e)
        }),
        _ = {
          deleteBookmarkFolder: Object(b.c)(v, 'deleteBookmarkFolder', {
            context: 'DELETE_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.deleteBookmarkFolder
            },
            getParams: function (e) {
              return { bookmarkFolderId: e }
            },
            getMeta: function (e) {
              return { entityId: e }
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              if (!e.entities[n]) return e
              var r = Object(f.a)(e.entities, [n])
              return i()(i()({}, e), {}, { entities: r })
            },
            mapResponseToActions: function (e, t, n) {
              return function (t) {
                var r = Object(p.r)(n())
                if (r && e && 'Done' === (null == t ? void 0 : t.bookmark_collection_delete))
                  return [y(r).removeItems([e])]
              }
            },
          }),
          editBookmarkFolder: Object(b.c)(v, 'editBookmarkFolder', {
            context: 'EDIT_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.editBookmarkFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.name
              return { bookmarkFolderId: e, name: n }
            },
            getMeta: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              return { entityId: e, name: t.name }
            },
            mapResponseToActions: function (e, t, n) {
              return function (t) {
                if (t) {
                  var r = null == t ? void 0 : t.bookmark_collection_update,
                    o = Object(p.r)(n())
                  if (o && e && r) return [y(o).injectItems([r.id])]
                }
              }
            },
            reducer: function (e, t) {
              var n = t.meta,
                r = n.entityId,
                a = n.name,
                l = e.entities[r]
              if (!l) return e
              var c = { name: a }
              return i()(i()({}, e), {}, { entities: i()(i()({}, e.entities), {}, o()({}, l.id, i()(i()({}, l), c))) })
            },
          }),
          removeTweetFromBookmarkFolder: Object(b.c)(v, 'removeTweetFromBookmarkFolder', {
            context: 'REMOVE_TWEET_FROM_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.removeTweetFromBookmarkFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.tweetId
              return { bookmarkFolderId: e, tweetId: n }
            },
            mapResponseToActions: function (e, t, n) {
              return function (r) {
                if (r) {
                  if ('Done' !== r.bookmark_collection_tweet_delete) return
                  if (!t.tweetId || !e) return []
                  var a = null == r ? void 0 : r.bookmark_collection_tweet_delete,
                    i = Object(p.r)(n())
                  if (i && e && a) {
                    var l = y(i)
                    return [Object(d.a)(e).removeTweets(o()({}, t.tweetId, !0)), l.injectItems([e])]
                  }
                }
              }
            },
            reducer: function (e, t) {
              return e
            },
          }),
          addTweetToBookmarkFolder: Object(b.c)(v, 'addTweetToBookmarkFolder', {
            context: 'BOOKMARK_TWEET_TO_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.bookmarkTweetToFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.tweetId
              return { bookmark_collection_id: e, tweet_id: n }
            },
            mapResponseToActions: function (e, t, n) {
              return function (r) {
                if (r) {
                  if ('Done' !== r.bookmark_collection_tweet_put) return
                  if (!t.tweetId || !e) return []
                  var o = null == r ? void 0 : r.bookmark_collection_tweet_put,
                    a = Object(p.r)(n())
                  if (a && e && o) {
                    var i = y(a)
                    return [
                      Object(d.a)(e).injectEntry(l.k({ id: t.tweetId, sortIndex: t.tweetId })),
                      i.injectItems([e]),
                    ]
                  }
                }
              }
            },
            reducer: function (e, t) {
              return e
            },
          }),
        },
        E = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.Bookmarks.fetchBookmarkFoldersSlice, params: {} })(
              { actionTypes: k, context: 'FETCH_BOOKMARK_FOLDERS' },
              function (e) {
                if (e) {
                  var t = e.entities
                  return t ? [Object(c.c)(t)] : void 0
                }
              },
            )
          }
        },
        F = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.Bookmarks.createBookmarkFolder, params: { name: e } })(
              { actionTypes: g, context: 'CREATE_BOOKMARK_FOLDER' },
              function (e) {
                if (e) {
                  var t = null == e ? void 0 : e.bookmark_collection_create,
                    r = Object(p.r)(n())
                  if (t && r) {
                    var a = y(r)
                    return [v.add(o()({}, t.id, t)), a.injectItems([t.id])]
                  }
                }
              },
            )
          }
        },
        w = function (e, t, n) {
          return function (r) {
            var a = y(n)
            return Promise.resolve(r([Object(d.a)(e).removeTweets(o()({}, t, !0)), a.injectItems([e])]))
          }
        },
        I = i()(i()(i()({}, v), _), {}, { customActionTypes: Object(b.d)(_) })
      t.b = m.a.register(I)
    },
    Iehm: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddToBookmarkFolderModal', function () {
          return ee
        })
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        m = n.n(u),
        p = n('KEM+'),
        b = n.n(p),
        h = (n('2G9S'), n('ERkP')),
        f = n.n(h),
        k = (n('ho0z'), n('1YZw')),
        g = n('Hja3'),
        v = n('rxPX'),
        y = function (e, t) {
          var n = t.bookmarkFolderId
          return n ? g.b.select(e, n) : void 0
        },
        _ = Object(v.a)()
          .propsFromState(function () {
            return { bookmarkFolder: y }
          })
          .propsFromActions(function () {
            return {
              addToast: k.b,
              addTweetToBookmarkFolder: g.b.addTweetToBookmarkFolder,
              removeTweetFromBookmarkFolder: g.b.removeTweetFromBookmarkFolder,
            }
          }),
        E = n('3XMw'),
        F = n.n(E),
        w = n('IMYl'),
        I = n('U+bB'),
        x = n('Irs7'),
        C = n('htQn'),
        B = n('t62R'),
        T = n('rHpw'),
        O = F.a.e41c9b4f,
        L = F.a.a2e7377e,
        S = _(function (e) {
          var t,
            n,
            r,
            o,
            a = e.addTweetToBookmarkFolder,
            i = e.bookmarkFolder,
            l = e.removeTweetFromBookmarkFolder,
            c = e.tweetId,
            s = Object(x.b)()
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
              null === (r = i.media) || void 0 === r || null === (o = r.media_info) || void 0 === o
                ? void 0
                : o.original_img_url,
            m = (null == i ? void 0 : i.id) || '',
            p = i.contains_requested_tweet
          if (!m || !c) return null
          return f.a.createElement(
            C.a,
            {
              onPress: function () {
                var t = e.addToast,
                  n = e.history
                p
                  ? l(m, { tweetId: c }).then(
                      function () {
                        t({ text: L({ bookmarkFolderName: d }) }),
                          s.scribe({ component: 'bookmark_folder', element: 'remove', action: 'success' })
                      },
                      function () {
                        s.scribe({ component: 'bookmark_folder', element: 'remove', action: 'error' })
                      },
                    )
                  : a(m, { tweetId: c }).then(
                      function () {
                        d &&
                          (t({ text: O({ bookmarkFolderName: d }) }),
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
            f.a.createElement(B.b, { style: R.content }, d),
            p ? f.a.createElement(w.a, { style: R.icon }) : null,
          )
        }),
        R = T.a.create(function (e) {
          return {
            root: {
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              minHeight: 'calc('
                .concat(T.a.theme.lineHeights.headline1, ' + 2 * ')
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
        K = n('48TD'),
        j = n('hqKg'),
        M = n('G6rE'),
        P = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
            ? void 0
            : r.tweet_id
        },
        A = Object(v.a)().propsFromState(function () {
          return {
            sliceModule: Object(j.createSelector)(M.e.selectLoggedInUser, P, function (e, t) {
              return null != e && e.id_str ? Object(K.a)(e.id_str, t) : void 0
            }),
            tweetId: P,
          }
        }),
        D = n('jHSc'),
        H = n('FS1z'),
        z = n('HQ0t'),
        V = n('MWbm'),
        U = n('FIs5'),
        W = n('jtO7'),
        Q = n('cm6r'),
        G = n('ggE+'),
        N = F.a.c2453317,
        q = F.a.bcc7e8cf,
        X = F.a.adad5408,
        J = F.a.be329aab,
        Y = F.a.j0a47c9c,
        Z = F.a.beba2a0d,
        $ = F.a.j45c642d,
        ee = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(c()(e), '_handleCreateFolderPress', function () {
                var t = e.props,
                  n = t.history,
                  r = t.tweetId
                n.push({ pathname: '/i/bookmarks/create_folder', state: { tweet_id: r } })
              }),
              b()(c()(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              b()(c()(e), '_renderEmptyState', function () {
                return f.a.createElement(U.a, {
                  buttonText: X,
                  header: J,
                  message: Y,
                  onButtonPress: e._handleCreateFolderPress,
                })
              }),
              b()(c()(e), '_renderBookmarkFolder', function (t) {
                var n = e.props,
                  r = n.history,
                  o = n.tweetId
                return f.a.createElement(S, { bookmarkFolderId: t, history: r, key: t, tweetId: o })
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
                          documentTitle: N,
                          onBackClick: this._handleBackClick,
                          title: f.a.createElement(z.a, { text: N }),
                        },
                        f.a.createElement(W.a, {
                          align: 'left',
                          color: 'primary',
                          label: Z,
                          onPress: this._handleCreateFolderPress,
                        }),
                        f.a.createElement(
                          Q.a,
                          { style: [ne.root, ne.paddingHorizontal, ne.contentContainer] },
                          f.a.createElement(
                            V.a,
                            { style: ne.thumbnail },
                            f.a.createElement(G.a, { style: ne.allBookmarks }),
                          ),
                          f.a.createElement(B.b, { style: ne.content }, q),
                          f.a.createElement(w.a, { style: ne.checkmark }),
                        ),
                        f.a.createElement(H.a, {
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
        te = A(ee),
        ne =
          ((t.default = te),
          T.a.create(function (e) {
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
          return K
        })
      var r = n('KEM+'),
        o = n.n(r),
        a = n('ddV6'),
        i = n.n(a),
        l = (n('KqXw'), n('WNMA'), n('tVqn'), n('7x/C'), n('JtPf'), n('Qavd'), n('MvUL'), n('ERkP')),
        c = n.n(l),
        s = n('k49u'),
        d = (n('ho0z'), n('1YZw')),
        u = n('Hja3'),
        m = n('rxPX'),
        p = n('0KEI'),
        b = function (e, t) {
          var n = t.match.params.bookmarkFolderId,
            r = n ? u.b.select(e, n) : void 0
          return null == r ? void 0 : r.name
        },
        h = Object(m.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: b }
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
        k = n('3XMw'),
        g = n.n(k),
        v = n('/yvb'),
        y = n('p+r5'),
        _ = n('jtO7'),
        E = n('eb3s'),
        F = g.a.f075b0e8,
        w = g.a.d4e220b3,
        I = g.a.i2209530,
        x = g.a.h18f86a4,
        C = g.a.f4ea9679,
        B = g.a.b670aa62,
        T = g.a.aece5462,
        O = g.a.e3299b93,
        L = g.a.c09ea713,
        S = g.a.gee78815,
        R = { confirmButtonLabel: g.a.d96cf7cd, headline: g.a.h9a5daa1, text: g.a.ga2edf67 },
        K = function (e, t) {
          var n = e.addToast,
            r = e.analytics,
            a = e.bookmarkFolderName,
            l = e.createLocalApiErrorHandler,
            d = e.deleteBookmarkFolder,
            u = e.editBookmarkFolder,
            m = e.history,
            p = e.match,
            b = c.a.useState(a || ''),
            h = i()(b, 2),
            k = h[0],
            g = h[1],
            K = c.a.useState(''),
            j = i()(K, 2),
            M = j[0],
            P = j[1],
            A = c.a.useState(!0),
            D = i()(A, 2),
            H = D[0],
            z = D[1],
            V = c.a.useState(!1),
            U = i()(V, 2),
            W = U[0],
            Q = U[1],
            G = p.params.bookmarkFolderId,
            N = '/i/bookmarks/'.concat(G),
            q = function (e) {
              P(e.message || S)
            }
          return c.a.createElement(
            f.b,
            {
              backButtonType: 'close',
              backLocation: N,
              documentTitle: F,
              history: m,
              onBackClick: function (e) {
                r.scribeAction('cancel'), e()
              },
              rightControl: c.a.createElement(
                v.a,
                {
                  disabled: H,
                  onPress: function () {
                    r.scribeAction('save'),
                      z(!0),
                      u(G, { name: k })
                        .then(function () {
                          n({ text: T }), m.goBack()
                        })
                        .catch(function (e) {
                          l(
                            o()({ defaultToast: { text: O }, showToast: !0 }, s.a.ValidationFailure, {
                              customAction: q,
                            }),
                          )(e),
                            r.scribe({ element: 'delete', action: 'error', data: e })
                        })
                        .finally(function () {
                          return z(!1)
                        })
                  },
                  type: 'primaryFilled',
                },
                I,
              ),
              title: F,
            },
            c.a.createElement(y.a, {
              autoFocus: !0,
              errorText: M,
              invalid: !!M,
              label: w,
              maxLength: 25,
              name: B,
              onChange: function (e) {
                var t = e.target.value
                g(t), z('' === t.trim() || t.trim() === a)
              },
              value: k,
            }),
            c.a.createElement(_.a, {
              color: 'red500',
              label: x,
              onPress: function () {
                Q(!0)
              },
            }),
            W &&
              c.a.createElement(E.a, {
                confirmButtonLabel: R.confirmButtonLabel,
                confirmButtonType: 'destructiveFilled',
                headline: R.headline,
                onCancel: function () {
                  r.scribe({ element: 'delete', action: 'cancel' }), Q(!1)
                },
                onConfirm: function () {
                  r.scribeAction('delete'),
                    d(G)
                      .then(function () {
                        Q(!1), n({ text: C }), m.replace('/i/bookmarks')
                      })
                      .catch(function (e) {
                        l({ defaultToast: { text: L }, showToast: !0 })(e),
                          r.scribe({ element: 'delete', action: 'error', data: e })
                      })
                },
                text: R.text,
              }),
          )
        },
        j = h(K)
      t.default = j
    },
    KQzH: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        a = (n('hBvt'), n('ERkP')),
        i = n.n(a),
        l = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        d = n('t62R')
      t.a = function (e) {
        return i.a.createElement(l.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, o()({ isActive: t }, e, { label: i.a.createElement(d.b, { dir: n }, e.label) }))
        })
      }
    },
    Q3sg: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        a = n('ERkP'),
        i = n.n(a),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
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
    ZGdk: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        a = n('ERkP'),
        i = n.n(a),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
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
                d: 'M18.87 9.538c-.42 0-.75.34-.75.75v7.339l-1.89-1.37V8.618c0-1.16-.94-2.09-2.09-2.09H6.89v-1.06c0-.32.27-.59.59-.59h5.2c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75h-5.2c-1.16 0-2.09.93-2.09 2.09v1.06h-1.3C2.94 6.529 2 7.459 2 8.618v13.627c0 .28.16.54.41.67s.55.11.78-.06l5.93-4.299 5.92 4.299c.13.09.29.14.44.14.12 0 .23-.02.34-.08.25-.13.41-.39.41-.67v-4.139l2.2 1.6c.13.1.28.14.44.14.11 0 .23-.02.34-.08.25-.13.41-.38.41-.67v-8.808c0-.41-.34-.75-.75-.75zm-4.14 11.238l-4.82-3.489-.35-.26c-.14-.1-.29-.14-.44-.14-.16 0-.31.04-.44.14l-3.23 2.34-1.95 1.41V8.618c0-.32.27-.59.59-.59h10.05c.33 0 .59.26.59.59v12.158zM22 4.129c0 .41-.34.75-.75.75h-1.63v1.62c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.62h-1.64c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h1.64V1.75c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1.63h1.63c.41 0 .75.329.75.749z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'ggE+': function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        a = n('ERkP'),
        i = n.n(a),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
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
      var r = n('97Jx'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        l = n('ERkP'),
        c = n.n(l),
        s = n('t62R'),
        d = n('I4+6'),
        u = n('cm6r'),
        m = n('rHpw'),
        p = n('MWbm'),
        b = ['align', 'color', 'label'],
        h = m.a.create(function (e) {
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
          r = e.color,
          a = e.label,
          l = i()(e, b),
          f = d.a.generate({
            backgroundColor: m.a.theme.colors.transparent,
            color: m.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          p.a,
          { style: h.container },
          c.a.createElement(
            u.a,
            o()({}, l, { interactiveStyles: f, style: h.root }),
            c.a.createElement(s.b, { align: n, color: r }, a),
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
      var r = n('97Jx'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        m = n.n(u),
        p = n('5Yy7'),
        b = n.n(p),
        h = n('2VqO'),
        f = n.n(h),
        k = n('KEM+'),
        g = n.n(k),
        v = (n('2G9S'), n('ERkP')),
        y = n.n(v),
        _ = n('38/B'),
        E = n('t62R'),
        F = n('/yvb'),
        w = n('piX5'),
        I = n('3XMw'),
        x = n.n(I),
        C = n('tI3i'),
        B = n.n(C),
        T = n('oQhu'),
        O = n('rHpw'),
        L = n('aITJ'),
        S = n('MWbm'),
        R = n('n5fo'),
        K = n('5emT'),
        j = n('Oib4'),
        M = n('WtWS'),
        P = n('ioan'),
        A = [
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
        H = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D
          return t(e)
        },
        z = x.a.de540c32,
        V = x.a.b4abfdb3,
        U = (function (e) {
          b()(n, e)
          var t = f()(n)
          function n(e) {
            var r
            c()(this, n),
              (r = t.call(this, e)),
              g()(m()(r), '_blurOnBackspaceKeyUpForKaiOS', !1),
              g()(m()(r), '_isLabelLarge', function () {
                var e = r.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              g()(
                m()(r),
                '_getTextInputStyle',
                Object(T.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              g()(m()(r), '_getTextInputType', function () {
                var e = r.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  o = r.state.isPasswordRevealed
                return 'password' === n && t ? (o ? 'text' : 'password') : n
              }),
              g()(m()(r), '_calculateLength', function (e) {
                return H(e, r.props.calculateLength)
              }),
              g()(m()(r), '_shouldRenderDisplayCount', function () {
                var e = r.state.isFocused,
                  t = r._isFormInvalid()
                return Boolean((e || t) && r._getMaxDisplayCount())
              }),
              g()(m()(r), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  o,
                  a,
                  i = r.props.type,
                  l =
                    null === (e = r._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = r._textInput) ||
                    void 0 === n ||
                    null === (o = n.textInputNode) ||
                    void 0 === o ||
                    null === (a = o.validity) ||
                    void 0 === a
                      ? void 0
                      : a.badInput
                return 'number' === i && '' === l && !0 === c
              }),
              g()(m()(r), '_getActualCount', function (e) {
                var t = e.length
                return r._isInvalidNumber() && (t = 1), t
              }),
              g()(m()(r), '_handleBlur', function () {
                var e,
                  t = r.props.onBlur,
                  n = (null === (e = r._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  o = r._calculateLength(n),
                  a = r._getActualCount(n)
                r.setState({ isFocused: !1, displayCount: o, actualCount: a }), t && t()
              }),
              g()(m()(r), '_handleChange', function (e) {
                var t = r.props.onChange,
                  n = r.state.previousValue,
                  o = e.currentTarget.value,
                  a = r._calculateLength(o),
                  i = r._getActualCount(o),
                  l = r._getAdjustedMaxLength()
                void 0 !== l && o.length > l && n.length < o.length
                  ? (e.currentTarget.value = n)
                  : (r.setState({
                      isFocused: !0,
                      displayCount: a,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              g()(m()(r), '_handleFocus', function () {
                var e = r.props.onFocus
                r.setState({ isFocused: !0 }), e && e()
              }),
              g()(m()(r), '_handleKeyPress', function (e) {
                var t = r.props,
                  n = t.multiline,
                  o = t.onKeyPress,
                  a = t.onSubmitEditing
                o && o(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !a || (e.preventDefault(), a(e))
              }),
              g()(m()(r), '_handleKeyDown', function (e) {
                var t = r.props.onKeyDown,
                  n = 0 === r.state.displayCount
                L.b.isKaiOS() && 'Backspace' === e.key && n ? (r._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              g()(m()(r), '_handleKeyUp', function (e) {
                var t = r.props.onKeyUp
                L.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  r._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), r.blur()),
                  t && t(e)
              }),
              g()(m()(r), '_handlePasswordVisibilityClick', function (e) {
                r.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              g()(m()(r), '_setTextInputRef', function (e) {
                r._textInput = e
              }),
              g()(m()(r), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  r = e.onChange,
                  o = e.validLength,
                  a = !!r,
                  i = 'string' == typeof e.value,
                  l = 'string' == typeof t
                B()(
                  !(!l && i && !a),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  B()(!(n && o && o > n), 'Max length should be equal or greater than valid length.'),
                  B()(
                    !((void 0 !== n && n <= 0) || (void 0 !== o && o <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              g()(m()(r), '_exceedsValidLength', function (e) {
                var t = r._getMaxDisplayCount()
                return !!t && e > t
              }),
              g()(m()(r), '_getMaxDisplayCount', function () {
                return r.props.validLength || r.props.maxLength
              }),
              g()(m()(r), '_getAdjustedMaxLength', function () {
                var e = r.props.maxLength,
                  t = r.getValue(),
                  n = r._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              r._checkComponentPropsUsageCorrectness(e)
            var o = e.defaultValue,
              a = e.value || o || ''
            return (
              (r.state = {
                displayCount: r._calculateLength(a),
                actualCount: D(a),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: a,
              }),
              r
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
                      r = t.onChange,
                      o = t.validLength,
                      a = t.value,
                      i = e.maxLength,
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === o && n === i && !!r === !!l && ('string' == typeof a) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      r = e.errorText,
                      o = e.helperText,
                      a = e.style,
                      i = this.state.isFocused,
                      l = this._isFormInvalid()
                    return y.a.createElement(
                      S.a,
                      { style: [Q.root, a] },
                      y.a.createElement(
                        S.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            w.a.border,
                            Q.textInputFormStyle,
                            l && w.a.invalidBorderColor,
                            i && l && w.a.focusedBorderInvalid,
                            i && !l && w.a.focusedBorderValid,
                            !n && w.a.disabled,
                          ],
                        },
                        y.a.createElement(
                          S.a,
                          { style: Q.textInputFormWrapper },
                          y.a.createElement(
                            S.a,
                            { style: Q.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      y.a.createElement(
                        S.a,
                        { style: [Q.sidePadding, Q.underTextInputForm] },
                        y.a.createElement(
                          S.a,
                          { style: Q.subtextWrapper },
                          o ? this._renderHelperText() : null,
                          l && r ? this._renderErrorText() : null,
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
                      r = this._isLabelLarge()
                    return y.a.createElement(
                      E.b,
                      {
                        color: r ? 'gray700' : n,
                        numberOfLines: 1,
                        size: r ? 'headline1' : 'subtext2',
                        style: [
                          Q.textInputHeaderItem,
                          r && Q.placeholderText,
                          !_.a.reducedMotionEnabled && Q.transition,
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
                      r =
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
                      a = (e.style, e.type, e.validLength, i()(e, A))
                    return y.a.createElement(
                      S.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      y.a.createElement(
                        E.b,
                        { size: 'headline1', style: W.wrapper },
                        y.a.createElement(
                          P.a,
                          o()({}, a, {
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
                      r && !this._isLabelLarge() ? this._renderValidationIcon() : null,
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
                      r = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? y.a.createElement(
                          S.a,
                          { style: Q.passwordVisibilityIconContainer },
                          y.a.createElement(F.a, {
                            accessibilityLabel: r ? V : z,
                            focusable: !0,
                            hoverLabel: { label: r ? V : z },
                            icon: r ? y.a.createElement(R.a, null) : y.a.createElement(K.a, null),
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
                      S.a,
                      { accessibilityLiveRegion: 'polite' },
                      y.a.createElement(
                        E.b,
                        { color: 'gray700', size: 'subtext2', style: Q.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return y.a.createElement(
                      S.a,
                      { accessibilityLiveRegion: 'assertive' },
                      y.a.createElement(
                        E.b,
                        { color: 'red500', size: 'subtext2', style: Q.subtext },
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
                      r = t && x.a.ia24dc8c(t),
                      o = x.a.ia24dc8c(e)
                    return y.a.createElement(
                      S.a,
                      { accessibilityLiveRegion: 'polite', style: [Q.textInputHeaderItem, Q.displayCount] },
                      y.a.createElement(
                        E.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        r ? ''.concat(o, ' / ').concat(r) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [Q.icon, t && Q.focusedIcon]
                    return e && y.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? y.a.createElement(j.a, { style: [Q.validationIcon, w.a.invalidColor] })
                      : y.a.createElement(M.a, { style: [Q.validationIcon, w.a.validColor] })
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
                      r = e.value,
                      o = 'string' == typeof r ? H(r, n) : 0
                    return 'string' == typeof r && o !== t.displayCount
                      ? { displayCount: o, actualCount: r.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(y.a.Component)
      g()(U, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (U.propTypes = {})
      var W = O.a.create(function (e) {
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
        Q = O.a.create(function (e) {
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
      var r = n('rHpw').a.create(function (e) {
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
      t.a = r
    },
    sMuS: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateBookmarkFolderModal', function () {
          return O
        })
      var r = n('KEM+'),
        o = n.n(r),
        a = n('ddV6'),
        i = n.n(a),
        l = (n('tVqn'), n('ho0z'), n('ERkP')),
        c = n.n(l),
        s = n('k49u'),
        d = n('1YZw'),
        u = n('Hja3'),
        m = n('rxPX'),
        p = n('0KEI'),
        b = function (e, t) {
          var n, r
          return (
            (null === (n = t.location) || void 0 === n || null === (r = n.state) || void 0 === r
              ? void 0
              : r.tweet_id) || ''
          )
        },
        h = Object(m.a)()
          .propsFromState(function () {
            return { tweetId: b }
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
        k = n('3XMw'),
        g = n.n(k),
        v = n('SrIh'),
        y = n('k89r'),
        _ = n('FGLp'),
        E = n('/yvb'),
        F = n('p+r5'),
        w = g.a.f8fc0b47,
        I = g.a.i6e7e298,
        x = g.a.d4e220b3,
        C = g.a.a0ea2fa5,
        B = g.a.eec37eab,
        T = g.a.e41c9b4f,
        O = function (e) {
          var t = e.addToast,
            n = e.addTweetToBookmarkFolder,
            r = e.createBookmarkFolder,
            a = e.createLocalApiErrorHandler,
            l = e.history,
            d = e.tweetId,
            u = c.a.useState(''),
            m = i()(u, 2),
            p = m[0],
            b = m[1],
            h = Object(y.a)()
          Object(_.a)(function () {
            h.scribePageImpression({ component: 'bookmark_folders_create', action: 'show' })
          })
          var k = function (e) {
              h.scribe({ component: 'bookmark_folders_create', element: 'done', action: 'click' })
              var o = p.trim()
              o &&
                (r(o)
                  .then(function (e) {
                    if (d) {
                      var r,
                        o = null == e || null === (r = e.bookmark_collection_create) || void 0 === r ? void 0 : r.id
                      if (o) {
                        var a
                        n(o, { tweetId: d })
                        var i = T({
                          bookmarkFolderName:
                            (null == e || null === (a = e.bookmark_collection_create) || void 0 === a
                              ? void 0
                              : a.name) || '',
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
              h.scribe({ component: 'bookmark_folders_create', action: 'error' }),
                a(((t = {}), o()(t, s.a.GenericBadRequest, { toast: { text: B } }), o()(t, 'showToast', !0), t))(e)
            }
          return c.a.createElement(
            f.b,
            {
              backButtonType: 'back',
              documentTitle: w,
              onBackClick: function () {
                h.scribe({ component: 'bookmark_folders_create', element: 'cancel', action: 'click' }), l.goBack()
              },
              rightControl: c.a.createElement(
                E.a,
                { disabled: '' === p.trim(), onPress: k, size: 'small', type: 'primaryFilled' },
                I,
              ),
              title: w,
            },
            c.a.createElement(F.a, {
              accessibilityLabel: x,
              autoFocus: !0,
              errorText: C,
              invalid: p.length > 0 && '' === p.trim(),
              label: x,
              maxLength: 25,
              name: 'name',
              onChange: function (e) {
                b(e.target.value)
              },
              onSubmitEditing: k,
            }),
          )
        },
        L = h(O)
      t.default = L
    },
  },
])
//# sourceMappingURL=WIPED
