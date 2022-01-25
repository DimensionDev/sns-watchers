;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    '/kFL': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'BookmarksScreen', function () {
          return D
        })
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        u = r('5Yy7'),
        s = r.n(u),
        m = r('N+ot'),
        d = r.n(m),
        f = r('AuHH'),
        h = r.n(f),
        p = r('KEM+'),
        k = r.n(p),
        y = (r('2G9S'), r('ERkP')),
        b = r('BQZD'),
        v = r('1LtL'),
        E = r('es0u'),
        C = r('wrlS'),
        F = r('G6rE'),
        A = r('rxPX'),
        _ = r('0KEI'),
        M = function (e) {
          return (function (e) {
            return Object(b.b)(Object(C.d)(e))
          })(e).selectIsEmptyTimeline(e)
        },
        O = Object(A.a)()
          .propsFromState(function () {
            return { isEmpty: M, loggedInUser: F.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.isEmpty,
              r = e.loggedInUser
            return { isEmpty: t, loggedInUserScreenName: null == r ? void 0 : r.screen_name }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('BOOKMARK_PAGE'),
              removeAll: b.c,
            }
          }),
        w = r('3XMw'),
        R = r.n(w),
        L = r('2G3J'),
        g = r('yoO3'),
        B = r('7JQg'),
        I = r('VS6U'),
        S = r('mjJ+'),
        j = r('eb3s'),
        P = r('yrzJ'),
        x = r('v6aA')
      function H(e) {
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
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var J = { page: 'bookmarks' },
        N = R.a.i3145aa0,
        K = R.a.bcc7e8cf,
        T = R.a.h63a5c3b,
        U = R.a.c8c1fa6d,
        G = R.a.jf748f4f,
        Q = R.a.cc0f2f4f,
        X = R.a.dbd5d40f,
        D = (function (e) {
          s()(r, e)
          var t = H(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              k()(l()(e), 'state', { showConfirmRemoveAll: !1 }),
              k()(l()(e), '_renderMenu', function (t) {
                return y.createElement(S.a, {
                  items: [{ text: U, onClick: e._removeAllSelected, isEmphasized: !0 }],
                  onCloseRequested: t,
                })
              }),
              k()(l()(e), '_removeAllSelected', function (t) {
                t(), e.setState({ showConfirmRemoveAll: !0 })
              }),
              k()(l()(e), '_handleClearCancel', function () {
                return e.setState({ showConfirmRemoveAll: !1 })
              }),
              k()(l()(e), '_handleClearConfirmed', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.removeAll)().catch(r({})), e.setState({ showConfirmRemoveAll: !1 })
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    r = e.isEmpty,
                    n = this.context.userClaims.isTrueAndEnabled('subscriptions_feature_1002'),
                    o = r ? void 0 : y.createElement(L.a, { accessibilityLabel: T, renderMenu: this._renderMenu })
                  return y.createElement(
                    B.b,
                    { namespace: J },
                    y.createElement(
                      g.a,
                      null,
                      y.createElement(I.a, {
                        backLocation: '/home',
                        history: t,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: o,
                        sidebarContent: y.createElement(E.a, null),
                        subtitle: this._renderSubtitle(n),
                        title: n ? K : N,
                        withBackButton: n,
                      }),
                      this.state.showConfirmRemoveAll
                        ? y.createElement(j.a, {
                            confirmButtonLabel: X,
                            confirmButtonType: 'destructiveFilled',
                            headline: G,
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
                  return !e && t ? y.createElement(P.a, { screenName: t }) : null
                },
              },
              {
                key: '_renderPrimaryContent',
                value: function () {
                  var e = this.props.history
                  return y.createElement(v.a, {
                    history: e,
                    title: N,
                    urtModule: Object(b.b)(this.context.featureSwitches),
                  })
                },
              },
            ]),
            r
          )
        })(y.Component)
      k()(D, 'contextType', x.a)
      var q = O(D)
      t.default = q
    },
    '1LtL': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = r('QIgh'),
        a = r('dwig'),
        c = r('0+qk'),
        i = r('3XMw'),
        l = r.n(i),
        u = r('7BdX'),
        s = r('fTQJ'),
        m = r('k89r'),
        d = r('FIs5'),
        f = r('mw9i'),
        h = l.a.e38b760f,
        p = l.a.ea1715cf
      t.a = function (e) {
        var t = e.bookmarkFolderId,
          r = e.history,
          i = e.title,
          l = e.urtModule,
          k = n.createElement(c.a, { history: r }),
          y = Object(m.a)()
        return n.createElement(
          a.a,
          { component: f.a, fab: k },
          n.createElement(s.a, {
            entryConfiguration: Object(o.a)({ withRemoveFromBookmarks: !0, bookmarkFolderId: t }),
            module: l,
            prerollDisplayLocation: u.c.OTHER,
            renderEmptyState: function () {
              return y.scribeAction('empty'), n.createElement(d.a, { header: h, message: p })
            },
            title: i,
          }),
        )
      }
    },
    bDBO: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'BookmarkFolderTimelineScreen', function () {
          return J
        })
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        u = r('5Yy7'),
        s = r.n(u),
        m = r('N+ot'),
        d = r.n(m),
        f = r('AuHH'),
        h = r.n(f),
        p = r('KEM+'),
        k = r.n(p),
        y = (r('2G9S'), r('WNMA'), r('KqXw'), r('jQ3i'), r('x4t0'), r('MvUL'), r('ERkP')),
        b = r('mjJ+'),
        v = r('BQZD'),
        E = r('1LtL'),
        C = r('es0u'),
        F = (r('ho0z'), r('Hja3')),
        A = r('rxPX'),
        _ = r('0KEI'),
        M = function (e, t) {
          var r = t.match.params.bookmarkFolderId,
            n = r ? F.b.select(e, r) : void 0
          return null == n ? void 0 : n.name
        },
        O = Object(A.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: M }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'BOOKMARK_FOLDER_TIMELINE_PAGE',
              ),
              fetchBookmarkFolders: F.c,
            }
          })
          .withAnalytics({ page: 'bookmark_folder' }),
        w = r('3XMw'),
        R = r.n(w),
        L = r('TW8A'),
        g = r('oQhu'),
        B = r('2G3J'),
        I = r('yoO3'),
        S = r('VS6U')
      function j(e) {
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
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var P = R.a.h63a5c3b,
        x = R.a.f075b0e8,
        H = function (e) {
          var t = e.renderMenu
          return y.createElement(B.a, { accessibilityLabel: P, renderMenu: t })
        },
        J = (function (e) {
          s()(r, e)
          var t = j(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              k()(l()(e), '_renderPrimaryContent', function (t, r, n) {
                return y.createElement(E.a, { bookmarkFolderId: n, history: e.props.history, title: r, urtModule: t })
              }),
              k()(l()(e), '_renderMenu', function (t) {
                return y.createElement(b.a, {
                  items: [{ text: x, onClick: e._editFolderModal, Icon: L.a }],
                  onCloseRequested: t,
                })
              }),
              k()(
                l()(e),
                '_getBookmarkFolderModule',
                Object(g.a)(function (e) {
                  if (e) return Object(v.a)(e)
                }),
              ),
              k()(l()(e), '_editFolderModal', function (t) {
                var r = e.props,
                  n = r.analytics,
                  o = r.history,
                  a = r.match
                n.scribe({ element: 'edit', action: 'click' }),
                  t(),
                  a.params.bookmarkFolderId &&
                    o.push({ pathname: '/i/bookmarks/'.concat(a.params.bookmarkFolderId, '/edit') })
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.bookmarkFolderName,
                    r = e.fetchBookmarkFolders,
                    n = e.history,
                    o = e.match
                  t ||
                    r().then(function (e) {
                      e.result.includes(o.params.bookmarkFolderId) || n.replace('/i/bookmarks')
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.bookmarkFolderName,
                    r = e.history,
                    n = this.props.match.params.bookmarkFolderId || void 0,
                    o = this._getBookmarkFolderModule(n)
                  if (!t || !o) return null
                  var a = y.createElement(H, { renderMenu: this._renderMenu })
                  return y.createElement(
                    I.a,
                    null,
                    y.createElement(S.a, {
                      backLocation: '/i/bookmarks',
                      history: r,
                      primaryContent: this._renderPrimaryContent(o, t, n),
                      rightControl: a,
                      sidebarContent: y.createElement(C.a, null),
                      title: t,
                      withBackButton: !0,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(y.Component),
        N = O(J)
      t.default = N
    },
  },
])
//# sourceMappingURL=WIPED
