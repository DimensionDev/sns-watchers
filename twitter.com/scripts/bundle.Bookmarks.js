;(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    '/kFL': function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, 'BookmarksScreen', function () {
          return Q
        })
      var n = t('VrFO'),
        a = t.n(n),
        o = t('Y9Ll'),
        i = t.n(o),
        l = t('1Pcy'),
        c = t.n(l),
        s = t('5Yy7'),
        u = t.n(s),
        m = t('2VqO'),
        d = t.n(m),
        h = t('KEM+'),
        p = t.n(h),
        f = (t('2G9S'), t('ERkP')),
        k = t.n(f),
        b = t('BQZD'),
        y = t('1LtL'),
        E = t('es0u'),
        v = t('wrlS'),
        C = t('G6rE'),
        F = t('rxPX'),
        A = t('0KEI'),
        _ = function (e) {
          return (function (e) {
            return Object(b.b)(Object(v.d)(e))
          })(e).selectIsEmptyTimeline(e)
        },
        M = Object(F.a)()
          .propsFromState(function () {
            return { isEmpty: _, loggedInUser: C.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var r = e.isEmpty,
              t = e.loggedInUser
            return { isEmpty: r, loggedInUserScreenName: null == t ? void 0 : t.screen_name }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('BOOKMARK_PAGE'),
              removeAll: b.c,
            }
          }),
        w = t('3XMw'),
        L = t.n(w),
        O = t('2G3J'),
        g = t('yoO3'),
        I = t('7JQg'),
        S = t('VS6U'),
        B = t('mjJ+'),
        j = t('eb3s'),
        R = t('yrzJ'),
        P = t('v6aA'),
        x = { page: 'bookmarks' },
        J = L.a.i3145aa0,
        K = L.a.bcc7e8cf,
        T = L.a.h63a5c3b,
        N = L.a.c8c1fa6d,
        U = L.a.jf748f4f,
        G = L.a.cc0f2f4f,
        H = L.a.dbd5d40f,
        Q = (function (e) {
          u()(t, e)
          var r = d()(t)
          function t() {
            var e
            a()(this, t)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = r.call.apply(r, [this].concat(o))),
              p()(c()(e), 'state', { showConfirmRemoveAll: !1 }),
              p()(c()(e), '_renderMenu', function (r) {
                return k.a.createElement(B.a, {
                  items: [{ text: N, onClick: e._removeAllSelected, isEmphasized: !0 }],
                  onCloseRequested: r,
                })
              }),
              p()(c()(e), '_removeAllSelected', function (r) {
                r(), e.setState({ showConfirmRemoveAll: !0 })
              }),
              p()(c()(e), '_handleClearCancel', function () {
                return e.setState({ showConfirmRemoveAll: !1 })
              }),
              p()(c()(e), '_handleClearConfirmed', function () {
                var r = e.props,
                  t = r.createLocalApiErrorHandler
                ;(0, r.removeAll)().catch(t({})), e.setState({ showConfirmRemoveAll: !1 })
              }),
              e
            )
          }
          return (
            i()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    r = e.history,
                    t = e.isEmpty,
                    n = this.context.userClaims.isTrueAndEnabled('subscriptions_feature_1002'),
                    a = t ? void 0 : k.a.createElement(O.a, { accessibilityLabel: T, renderMenu: this._renderMenu })
                  return k.a.createElement(
                    I.b,
                    { namespace: x },
                    k.a.createElement(
                      g.a,
                      null,
                      k.a.createElement(S.a, {
                        backLocation: '/home',
                        history: r,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: a,
                        sidebarContent: k.a.createElement(E.a, null),
                        subtitle: this._renderSubtitle(n),
                        title: n ? K : J,
                        withBackButton: n,
                      }),
                      this.state.showConfirmRemoveAll
                        ? k.a.createElement(j.a, {
                            confirmButtonLabel: H,
                            confirmButtonType: 'destructiveFilled',
                            headline: U,
                            onCancel: this._handleClearCancel,
                            onConfirm: this._handleClearConfirmed,
                            text: G,
                          })
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var r = this.props.loggedInUserScreenName
                  return !e && r ? k.a.createElement(R.a, { screenName: r }) : null
                },
              },
              {
                key: '_renderPrimaryContent',
                value: function () {
                  var e = this.props.history
                  return k.a.createElement(y.a, {
                    history: e,
                    title: J,
                    urtModule: Object(b.b)(this.context.featureSwitches),
                  })
                },
              },
            ]),
            t
          )
        })(k.a.Component)
      p()(Q, 'contextType', P.a)
      var X = M(Q)
      r.default = X
    },
    '1LtL': function (e, r, t) {
      'use strict'
      var n = t('ERkP'),
        a = t.n(n),
        o = t('QIgh'),
        i = t('dwig'),
        l = t('0+qk'),
        c = t('3XMw'),
        s = t.n(c),
        u = t('7BdX'),
        m = t('fTQJ'),
        d = t('k89r'),
        h = t('FIs5'),
        p = t('mw9i'),
        f = s.a.e38b760f,
        k = s.a.ea1715cf
      r.a = function (e) {
        var r = e.bookmarkFolderId,
          t = e.history,
          n = e.title,
          c = e.urtModule,
          s = a.a.createElement(l.a, { history: t }),
          b = Object(d.a)()
        return a.a.createElement(
          i.a,
          { component: p.a, fab: s },
          a.a.createElement(m.a, {
            entryConfiguration: Object(o.a)({ withRemoveFromBookmarks: !0, bookmarkFolderId: r }),
            module: c,
            prerollDisplayLocation: u.c.OTHER,
            renderEmptyState: function () {
              return b.scribeAction('empty'), a.a.createElement(h.a, { header: f, message: k })
            },
            title: n,
          }),
        )
      }
    },
    bDBO: function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, 'BookmarkFolderTimelineScreen', function () {
          return x
        })
      var n = t('VrFO'),
        a = t.n(n),
        o = t('Y9Ll'),
        i = t.n(o),
        l = t('1Pcy'),
        c = t.n(l),
        s = t('5Yy7'),
        u = t.n(s),
        m = t('2VqO'),
        d = t.n(m),
        h = t('KEM+'),
        p = t.n(h),
        f = (t('2G9S'), t('KqXw'), t('WNMA'), t('jQ3i'), t('x4t0'), t('MvUL'), t('ERkP')),
        k = t.n(f),
        b = t('mjJ+'),
        y = t('BQZD'),
        E = t('1LtL'),
        v = t('es0u'),
        C = (t('ho0z'), t('Hja3')),
        F = t('rxPX'),
        A = t('0KEI'),
        _ = function (e, r) {
          var t = r.match.params.bookmarkFolderId,
            n = t ? C.b.select(e, t) : void 0
          return null == n ? void 0 : n.name
        },
        M = Object(F.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: _ }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'BOOKMARK_FOLDER_TIMELINE_PAGE',
              ),
              fetchBookmarkFolders: C.c,
            }
          })
          .withAnalytics({ page: 'bookmark_folder' }),
        w = t('3XMw'),
        L = t.n(w),
        O = t('TW8A'),
        g = t('oQhu'),
        I = t('2G3J'),
        S = t('yoO3'),
        B = t('VS6U'),
        j = L.a.h63a5c3b,
        R = L.a.f075b0e8,
        P = function (e) {
          var r = e.renderMenu
          return k.a.createElement(I.a, { accessibilityLabel: j, renderMenu: r })
        },
        x = (function (e) {
          u()(t, e)
          var r = d()(t)
          function t() {
            var e
            a()(this, t)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = r.call.apply(r, [this].concat(o))),
              p()(c()(e), '_renderPrimaryContent', function (r, t, n) {
                return k.a.createElement(E.a, { bookmarkFolderId: n, history: e.props.history, title: t, urtModule: r })
              }),
              p()(c()(e), '_renderMenu', function (r) {
                return k.a.createElement(b.a, {
                  items: [{ text: R, onClick: e._editFolderModal, Icon: O.a }],
                  onCloseRequested: r,
                })
              }),
              p()(
                c()(e),
                '_getBookmarkFolderModule',
                Object(g.a)(function (e) {
                  if (e) return Object(y.a)(e)
                }),
              ),
              p()(c()(e), '_editFolderModal', function (r) {
                var t = e.props,
                  n = t.analytics,
                  a = t.history,
                  o = t.match
                n.scribe({ element: 'edit', action: 'click' }),
                  r(),
                  o.params.bookmarkFolderId &&
                    a.push({ pathname: '/i/bookmarks/'.concat(o.params.bookmarkFolderId, '/edit') })
              }),
              e
            )
          }
          return (
            i()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    r = e.bookmarkFolderName,
                    t = e.fetchBookmarkFolders,
                    n = e.history,
                    a = e.match
                  r ||
                    t().then(function (e) {
                      e.result.includes(a.params.bookmarkFolderId) || n.replace('/i/bookmarks')
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    r = e.bookmarkFolderName,
                    t = e.history,
                    n = this.props.match.params.bookmarkFolderId || void 0,
                    a = this._getBookmarkFolderModule(n)
                  if (!r || !a) return null
                  var o = k.a.createElement(P, { renderMenu: this._renderMenu })
                  return k.a.createElement(
                    S.a,
                    null,
                    k.a.createElement(B.a, {
                      backLocation: '/i/bookmarks',
                      history: t,
                      primaryContent: this._renderPrimaryContent(a, r, n),
                      rightControl: o,
                      sidebarContent: k.a.createElement(v.a, null),
                      title: r,
                      withBackButton: !0,
                    }),
                  )
                },
              },
            ]),
            t
          )
        })(k.a.Component),
        J = M(x)
      r.default = J
    },
  },
])
//# sourceMappingURL=WIPED
