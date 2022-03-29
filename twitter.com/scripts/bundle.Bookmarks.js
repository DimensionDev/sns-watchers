;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '/kFL': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'BookmarksScreen', function () {
          return W
        })
      var o = r('VrFO'),
        n = r.n(o),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        d = r('2VqO'),
        m = r.n(d),
        k = r('KEM+'),
        f = r.n(k),
        b = (r('2G9S'), r('ERkP')),
        p = r.n(b),
        h = r('BQZD'),
        E = r('1LtL'),
        v = r('es0u'),
        O = r('wrlS'),
        _ = r('G6rE'),
        F = r('rxPX'),
        y = r('0KEI'),
        g = function (e) {
          return (function (e) {
            return Object(h.b)(Object(O.d)(e))
          })(e).selectIsEmptyTimeline(e)
        },
        B = Object(F.a)()
          .propsFromState(function () {
            return { isEmpty: g, loggedInUser: _.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.isEmpty,
              r = e.loggedInUser
            return { isEmpty: t, loggedInUserScreenName: null == r ? void 0 : r.screen_name }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('BOOKMARK_PAGE'),
              removeAll: h.c,
            }
          }),
        w = r('3XMw'),
        R = r.n(w),
        C = r('2G3J'),
        A = r('yoO3'),
        T = r('7JQg'),
        M = r('VS6U'),
        I = r('mjJ+'),
        j = r('eb3s'),
        S = r('yrzJ'),
        L = r('v6aA'),
        K = { page: 'bookmarks' },
        P = R.a.i3145aa0,
        D = R.a.bcc7e8cf,
        x = R.a.h63a5c3b,
        H = R.a.c8c1fa6d,
        U = R.a.jf748f4f,
        Q = R.a.cc0f2f4f,
        N = R.a.dbd5d40f,
        W = (function (e) {
          s()(r, e)
          var t = m()(r)
          function r() {
            var e
            n()(this, r)
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(l()(e), 'state', { showConfirmRemoveAll: !1 }),
              f()(l()(e), '_renderMenu', function (t) {
                return p.a.createElement(I.a, {
                  items: [{ text: H, onClick: e._removeAllSelected, isEmphasized: !0 }],
                  onCloseRequested: t,
                })
              }),
              f()(l()(e), '_removeAllSelected', function (t) {
                t(), e.setState({ showConfirmRemoveAll: !0 })
              }),
              f()(l()(e), '_handleClearCancel', function () {
                return e.setState({ showConfirmRemoveAll: !1 })
              }),
              f()(l()(e), '_handleClearConfirmed', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.removeAll)().catch(r({})), e.setState({ showConfirmRemoveAll: !1 })
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    r = e.isEmpty,
                    o = this.context.userClaims.isTrueAndEnabled('subscriptions_feature_1002'),
                    n = r ? void 0 : p.a.createElement(C.a, { accessibilityLabel: x, renderMenu: this._renderMenu })
                  return p.a.createElement(
                    T.c,
                    { namespace: K },
                    p.a.createElement(
                      A.a,
                      null,
                      p.a.createElement(M.a, {
                        backLocation: '/home',
                        history: t,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: n,
                        sidebarContent: p.a.createElement(v.a, null),
                        subtitle: this._renderSubtitle(o),
                        title: o ? D : P,
                        withBackButton: o,
                      }),
                      this.state.showConfirmRemoveAll
                        ? p.a.createElement(j.a, {
                            confirmButtonLabel: N,
                            confirmButtonType: 'destructiveFilled',
                            headline: U,
                            onCancel: this._handleClearCancel,
                            onConfirm: this._handleClearConfirmed,
                            text: Q,
                          })
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.loggedInUserScreenName
                  return !e && t ? p.a.createElement(S.a, { screenName: t }) : null
                },
              },
              {
                key: '_renderPrimaryContent',
                value: function () {
                  var e = this.props.history
                  return p.a.createElement(E.a, {
                    history: e,
                    title: P,
                    urtModule: Object(h.b)(this.context.featureSwitches),
                  })
                },
              },
            ]),
            r
          )
        })(p.a.Component)
      f()(W, 'contextType', L.a)
      var q = B(W)
      t.default = q
    },
    '1LtL': function (e, t, r) {
      'use strict'
      var o = r('ERkP'),
        n = r.n(o),
        a = r('QIgh'),
        i = r('dwig'),
        c = r('0+qk'),
        l = r('3XMw'),
        u = r.n(l),
        s = r('7BdX'),
        d = r('fTQJ'),
        m = r('k89r'),
        k = r('FIs5'),
        f = r('mw9i'),
        b =
          (r('yH/f'),
          r('2G9S'),
          Object.freeze({
            AlarmClock: 'alarm-clock',
            BabyBirdWithPoolFloat: 'baby-bird-with-pool-float',
            Bell: 'bell',
            Binoculars: 'binoculars',
            BookInBirdCage: 'book-in-bird-cage',
            CalculatorWithEggPaper: 'calculator-with-egg-paper',
            CrackedEggMicrophones: 'cracked-egg-microphones',
            Emoji: 'emoji',
            FallenIceCreamCone: 'fallen-ice-cream-cone',
            GoldfishWithMailbox: 'goldfish-with-mailbox',
            HatchedBabyChick: 'hatched-baby-chick',
            JumperCables: 'jumper-cables',
            MaskedDollHeadWithCamera: 'masked-doll-head-with-camera',
            Megaphone: 'megaphone',
            NoEntrySign: 'no-entry-sign',
            OwlTurnedHead: 'owl-turned-head',
            PaintCoveredHand: 'paint-covered-hand',
            Parrot: 'parrot',
            PortraitBustWearingSunglasses: 'portrait-bust-wearing-sunglasses',
            RoosterHead: 'rooster-head',
            RubberChicken: 'rubber-chicken',
            Turtle: 'turtle',
            UnfinishedPotatoHeads: 'unfinished-potato-heads',
            YellowBirdsPowerLine: 'yellow-birds-power-line',
          }))
      function p(e, t) {
        return 'https://abs.twimg.com/sticky/illustrations/empty-states/'.concat(e, '-').concat(t, '.v1.png')
      }
      var h = u.a.cd343e15,
        E = u.a.f47e39e8
      t.a = function (e) {
        var t = e.bookmarkFolderId,
          r = e.history,
          o = e.title,
          l = e.urtModule,
          u = n.a.createElement(c.a, { history: r }),
          v = Object(m.a)()
        return n.a.createElement(
          i.a,
          { component: f.a, fab: u },
          n.a.createElement(d.a, {
            entryConfiguration: Object(a.a)({ withRemoveFromBookmarks: !0, bookmarkFolderId: t }),
            module: l,
            prerollDisplayLocation: s.c.OTHER,
            renderEmptyState: function () {
              return (
                v.scribeAction('empty'),
                n.a.createElement(k.a, {
                  header: h,
                  imageVariants:
                    ((e = b.BookInBirdCage),
                    [
                      { height: 200, uri: p(e, '400x200'), width: 400 },
                      { height: 400, uri: p(e, '800x400'), width: 800 },
                      { height: 600, uri: p(e, '1200x600'), width: 1200 },
                    ]),
                  message: E,
                })
              )
              var e
            },
            title: o,
          }),
        )
      }
    },
    '48TD': function (e, t, r) {
      'use strict'
      var o = r('yiKp'),
        n = r.n(o),
        a = r('wAC9')
      t.a = function (e, t) {
        return Object(a.a)({
          contextSuffix: 'BOOKMARK_FOLDERS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Bookmarks.fetchBookmarkFoldersSlice
          },
          getEndpointParams: function (e) {
            return n()(n()({}, e), {}, { tweet_id: t })
          },
          sliceKey: 'bookmarkFoldersSlice-'.concat(e),
        })
      }
    },
    BQZD: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return l
      }),
        r.d(t, 'c', function () {
          return s
        }),
        r.d(t, 'd', function () {
          return d
        })
      var o = r('WpDa'),
        n = r('oQhu'),
        a = r('eR3e'),
        i = r('ZNT5'),
        c = 'bookmarks',
        l = function (e) {
          return Object(i.a)({
            timelineId: 'bookmarkFolder-'.concat(e),
            getEndpoint: function (e) {
              return e.Bookmarks.fetchBookmarkFolderTimeline
            },
            getEndpointParams: function (t) {
              var r = t.cursor
              return { cursor: 'string' == typeof r ? r : void 0, bookmark_collection_id: e }
            },
            formatResponse: o.a,
            context: 'FETCH_BOOKMARK_FOLDER_TIMELINE',
            perfKey: 'bookmarkFolderGraphQL',
          })
        },
        u = Object(n.a)(function (e) {
          return e.isTrue('responsive_web_graphql_bookmarks')
            ? Object(i.a)({
                timelineId: c,
                getEndpoint: function (e) {
                  return e.Bookmarks.fetchBookmarksTimeline
                },
                getEndpointParams: function (e) {
                  var t = e.count,
                    r = e.cursor
                  return { count: t, cursor: 'string' == typeof r ? r : void 0 }
                },
                formatResponse: o.a,
                context: 'FETCH_BOOKMARKS_TIMELINE',
                perfKey: 'bookmarksGraphQL',
              })
            : Object(i.a)({
                timelineId: c,
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
      t.b = u
      var s = function () {
          return function (e, t, r) {
            var o = r.api,
              n = r.featureSwitches
            return (
              n.isTrue('responsive_web_graphql_mutation_bookmarks')
                ? o.Bookmarks.deleteAll
                : o.Tweets.removeAllBookmarks
            )().then(function () {
              return e(u(n).deleteTimeline())
            })
          }
        },
        d = a.q.bind(null, c)
    },
    Hja3: function (e, t, r) {
      'use strict'
      r.d(t, 'c', function () {
        return F
      }),
        r.d(t, 'a', function () {
          return y
        }),
        r.d(t, 'd', function () {
          return g
        })
      var o = r('KEM+'),
        n = r.n(o),
        a = r('yiKp'),
        i = r.n(a),
        c = (r('yH/f'), r('ho0z'), r('7x/C'), r('JtPf'), r('PiaM')),
        l = r('/kEJ'),
        u = r('48TD'),
        s = r('BQZD'),
        d = r('oEOe'),
        m = r('lMB6'),
        k = r('RqPI'),
        f = r('3zvM'),
        b = r('oQhu'),
        p = r('3A2y'),
        h = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_FAILURE',
        }),
        E = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_FAILURE',
        }),
        v = Object(f.e)({ namespace: 'bookmarkFolders' }),
        O = Object(b.a)(function (e) {
          return Object(u.a)(e)
        }),
        _ = {
          deleteBookmarkFolder: Object(f.c)(v, 'deleteBookmarkFolder', {
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
              var r = t.meta.entityId
              if (!e.entities[r]) return e
              var o = Object(p.a)(e.entities, [r])
              return i()(i()({}, e), {}, { entities: o })
            },
            mapResponseToActions: function (e, t, r) {
              return function (t) {
                var o = Object(k.r)(r())
                if (o && e && 'Done' === (null == t ? void 0 : t.bookmark_collection_delete))
                  return [O(o).removeItems([e])]
              }
            },
          }),
          editBookmarkFolder: Object(f.c)(v, 'editBookmarkFolder', {
            context: 'EDIT_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.editBookmarkFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.name
              return { bookmarkFolderId: e, name: r }
            },
            getMeta: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              return { entityId: e, name: t.name }
            },
            mapResponseToActions: function (e, t, r) {
              return function (t) {
                if (t) {
                  var o = null == t ? void 0 : t.bookmark_collection_update,
                    n = Object(k.r)(r())
                  if (n && e && o) return [O(n).injectItems([o.id])]
                }
              }
            },
            reducer: function (e, t) {
              var r = t.meta,
                o = r.entityId,
                a = r.name,
                c = e.entities[o]
              if (!c) return e
              var l = { name: a }
              return i()(i()({}, e), {}, { entities: i()(i()({}, e.entities), {}, n()({}, c.id, i()(i()({}, c), l))) })
            },
          }),
          removeTweetFromBookmarkFolder: Object(f.c)(v, 'removeTweetFromBookmarkFolder', {
            context: 'REMOVE_TWEET_FROM_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.removeTweetFromBookmarkFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.tweetId
              return { bookmarkFolderId: e, tweetId: r }
            },
            mapResponseToActions: function (e, t, r) {
              return function (o) {
                if (o) {
                  if ('Done' !== o.bookmark_collection_tweet_delete) return
                  if (!t.tweetId || !e) return []
                  var a = null == o ? void 0 : o.bookmark_collection_tweet_delete,
                    i = Object(k.r)(r())
                  if (i && e && a) {
                    var c = O(i)
                    return [Object(s.a)(e).removeTweets(n()({}, t.tweetId, !0)), c.injectItems([e])]
                  }
                }
              }
            },
            reducer: function (e, t) {
              return e
            },
          }),
          addTweetToBookmarkFolder: Object(f.c)(v, 'addTweetToBookmarkFolder', {
            context: 'BOOKMARK_TWEET_TO_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.bookmarkTweetToFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.tweetId
              return { bookmark_collection_id: e, tweet_id: r }
            },
            mapResponseToActions: function (e, t, r) {
              return function (o) {
                if (o) {
                  if ('Done' !== o.bookmark_collection_tweet_put) return
                  if (!t.tweetId || !e) return []
                  var n = null == o ? void 0 : o.bookmark_collection_tweet_put,
                    a = Object(k.r)(r())
                  if (a && e && n) {
                    var i = O(a)
                    return [
                      Object(s.a)(e).injectEntry(c.k({ id: t.tweetId, sortIndex: t.tweetId })),
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
        F = function () {
          return function (e, t, r) {
            var o = r.api
            return Object(d.b)(e, { request: o.Bookmarks.fetchBookmarkFoldersSlice, params: {} })(
              { actionTypes: h, context: 'FETCH_BOOKMARK_FOLDERS' },
              function (e) {
                if (e) {
                  var t = e.entities
                  return t ? [Object(l.c)(t)] : void 0
                }
              },
            )
          }
        },
        y = function (e) {
          return function (t, r, o) {
            var a = o.api
            return Object(d.b)(t, { request: a.Bookmarks.createBookmarkFolder, params: { name: e } })(
              { actionTypes: E, context: 'CREATE_BOOKMARK_FOLDER' },
              function (e) {
                if (e) {
                  var t = null == e ? void 0 : e.bookmark_collection_create,
                    o = Object(k.r)(r())
                  if (t && o) {
                    var a = O(o)
                    return [v.add(n()({}, t.id, t)), a.injectItems([t.id])]
                  }
                }
              },
            )
          }
        },
        g = function (e, t, r) {
          return function (o) {
            var a = O(r)
            return Promise.resolve(o([Object(s.a)(e).removeTweets(n()({}, t, !0)), a.injectItems([e])]))
          }
        },
        B = i()(i()(i()({}, v), _), {}, { customActionTypes: Object(f.d)(_) })
      t.b = m.a.register(B)
    },
    TW8A: function (e, t, r) {
      'use strict'
      var o = r('yiKp'),
        n = r.n(o),
        a = r('ERkP'),
        i = r.n(a),
        c = r('Lsrn'),
        l = r('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    bDBO: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'BookmarkFolderTimelineScreen', function () {
          return K
        })
      var o = r('VrFO'),
        n = r.n(o),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        l = r.n(c),
        u = r('5Yy7'),
        s = r.n(u),
        d = r('2VqO'),
        m = r.n(d),
        k = r('KEM+'),
        f = r.n(k),
        b = (r('2G9S'), r('KqXw'), r('WNMA'), r('jQ3i'), r('x4t0'), r('MvUL'), r('ERkP')),
        p = r.n(b),
        h = r('mjJ+'),
        E = r('BQZD'),
        v = r('1LtL'),
        O = r('es0u'),
        _ = (r('ho0z'), r('Hja3')),
        F = r('rxPX'),
        y = r('0KEI'),
        g = function (e, t) {
          var r = t.match.params.bookmarkFolderId,
            o = r ? _.b.select(e, r) : void 0
          return null == o ? void 0 : o.name
        },
        B = Object(F.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'BOOKMARK_FOLDER_TIMELINE_PAGE',
              ),
              fetchBookmarkFolders: _.c,
            }
          })
          .withAnalytics({ page: 'bookmark_folder' }),
        w = r('3XMw'),
        R = r.n(w),
        C = r('TW8A'),
        A = r('oQhu'),
        T = r('2G3J'),
        M = r('yoO3'),
        I = r('VS6U'),
        j = R.a.h63a5c3b,
        S = R.a.f075b0e8,
        L = function (e) {
          var t = e.renderMenu
          return p.a.createElement(T.a, { accessibilityLabel: j, renderMenu: t })
        },
        K = (function (e) {
          s()(r, e)
          var t = m()(r)
          function r() {
            var e
            n()(this, r)
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(l()(e), '_renderPrimaryContent', function (t, r, o) {
                return p.a.createElement(v.a, { bookmarkFolderId: o, history: e.props.history, title: r, urtModule: t })
              }),
              f()(l()(e), '_renderMenu', function (t) {
                return p.a.createElement(h.a, {
                  items: [{ text: S, onClick: e._editFolderModal, Icon: C.a }],
                  onCloseRequested: t,
                })
              }),
              f()(
                l()(e),
                '_getBookmarkFolderModule',
                Object(A.a)(function (e) {
                  if (e) return Object(E.a)(e)
                }),
              ),
              f()(l()(e), '_editFolderModal', function (t) {
                var r = e.props,
                  o = r.analytics,
                  n = r.history,
                  a = r.match
                o.scribe({ element: 'edit', action: 'click' }),
                  t(),
                  a.params.bookmarkFolderId &&
                    n.push({ pathname: '/i/bookmarks/'.concat(a.params.bookmarkFolderId, '/edit') })
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.bookmarkFolderName,
                    r = e.fetchBookmarkFolders,
                    o = e.history,
                    n = e.match
                  t ||
                    r().then(function (e) {
                      e.result.includes(n.params.bookmarkFolderId) || o.replace('/i/bookmarks')
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.bookmarkFolderName,
                    r = e.history,
                    o = this.props.match.params.bookmarkFolderId || void 0,
                    n = this._getBookmarkFolderModule(o)
                  if (!t || !n) return null
                  var a = p.a.createElement(L, { renderMenu: this._renderMenu })
                  return p.a.createElement(
                    M.a,
                    null,
                    p.a.createElement(I.a, {
                      backLocation: '/i/bookmarks',
                      history: r,
                      primaryContent: this._renderPrimaryContent(n, t, o),
                      rightControl: a,
                      sidebarContent: p.a.createElement(O.a, null),
                      title: t,
                      withBackButton: !0,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(p.a.Component),
        P = B(K)
      t.default = P
    },
  },
])
//# sourceMappingURL=WIPED
