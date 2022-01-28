;(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    '/kFL': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'BookmarksScreen', function () {
          return q
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
        b = r.n(y),
        v = r('BQZD'),
        E = r('1LtL'),
        C = r('es0u'),
        F = r('wrlS'),
        A = r('G6rE'),
        _ = r('rxPX'),
        M = r('0KEI'),
        O = function (e) {
          return (function (e) {
            return Object(v.b)(Object(F.d)(e))
          })(e).selectIsEmptyTimeline(e)
        },
        w = Object(_.a)()
          .propsFromState(function () {
            return { isEmpty: O, loggedInUser: A.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.isEmpty,
              r = e.loggedInUser
            return { isEmpty: t, loggedInUserScreenName: null == r ? void 0 : r.screen_name }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)('BOOKMARK_PAGE'),
              removeAll: v.c,
            }
          }),
        R = r('3XMw'),
        L = r.n(R),
        g = r('2G3J'),
        B = r('yoO3'),
        I = r('7JQg'),
        S = r('VS6U'),
        j = r('mjJ+'),
        P = r('eb3s'),
        x = r('yrzJ'),
        H = r('v6aA')
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
          var r,
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var N = { page: 'bookmarks' },
        K = L.a.i3145aa0,
        T = L.a.bcc7e8cf,
        U = L.a.h63a5c3b,
        G = L.a.c8c1fa6d,
        Q = L.a.jf748f4f,
        X = L.a.cc0f2f4f,
        D = L.a.dbd5d40f,
        q = (function (e) {
          s()(r, e)
          var t = J(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              k()(l()(e), 'state', { showConfirmRemoveAll: !1 }),
              k()(l()(e), '_renderMenu', function (t) {
                return b.a.createElement(j.a, {
                  items: [{ text: G, onClick: e._removeAllSelected, isEmphasized: !0 }],
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
                    o = r ? void 0 : b.a.createElement(g.a, { accessibilityLabel: U, renderMenu: this._renderMenu })
                  return b.a.createElement(
                    I.b,
                    { namespace: N },
                    b.a.createElement(
                      B.a,
                      null,
                      b.a.createElement(S.a, {
                        backLocation: '/home',
                        history: t,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: o,
                        sidebarContent: b.a.createElement(C.a, null),
                        subtitle: this._renderSubtitle(n),
                        title: n ? T : K,
                        withBackButton: n,
                      }),
                      this.state.showConfirmRemoveAll
                        ? b.a.createElement(P.a, {
                            confirmButtonLabel: D,
                            confirmButtonType: 'destructiveFilled',
                            headline: Q,
                            onCancel: this._handleClearCancel,
                            onConfirm: this._handleClearConfirmed,
                            text: X,
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
                  return !e && t ? b.a.createElement(x.a, { screenName: t }) : null
                },
              },
              {
                key: '_renderPrimaryContent',
                value: function () {
                  var e = this.props.history
                  return b.a.createElement(E.a, {
                    history: e,
                    title: K,
                    urtModule: Object(v.b)(this.context.featureSwitches),
                  })
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      k()(q, 'contextType', H.a)
      var V = w(q)
      t.default = V
    },
    '1LtL': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = r.n(n),
        a = r('QIgh'),
        c = r('dwig'),
        i = r('0+qk'),
        l = r('3XMw'),
        u = r.n(l),
        s = r('7BdX'),
        m = r('fTQJ'),
        d = r('k89r'),
        f = r('FIs5'),
        h = r('mw9i'),
        p = u.a.e38b760f,
        k = u.a.ea1715cf
      t.a = function (e) {
        var t = e.bookmarkFolderId,
          r = e.history,
          n = e.title,
          l = e.urtModule,
          u = o.a.createElement(i.a, { history: r }),
          y = Object(d.a)()
        return o.a.createElement(
          c.a,
          { component: h.a, fab: u },
          o.a.createElement(m.a, {
            entryConfiguration: Object(a.a)({ withRemoveFromBookmarks: !0, bookmarkFolderId: t }),
            module: l,
            prerollDisplayLocation: s.c.OTHER,
            renderEmptyState: function () {
              return y.scribeAction('empty'), o.a.createElement(f.a, { header: p, message: k })
            },
            title: n,
          }),
        )
      }
    },
    bDBO: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'BookmarkFolderTimelineScreen', function () {
          return N
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
        b = r.n(y),
        v = r('mjJ+'),
        E = r('BQZD'),
        C = r('1LtL'),
        F = r('es0u'),
        A = (r('ho0z'), r('Hja3')),
        _ = r('rxPX'),
        M = r('0KEI'),
        O = function (e, t) {
          var r = t.match.params.bookmarkFolderId,
            n = r ? A.b.select(e, r) : void 0
          return null == n ? void 0 : n.name
        },
        w = Object(_.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: O }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'BOOKMARK_FOLDER_TIMELINE_PAGE',
              ),
              fetchBookmarkFolders: A.c,
            }
          })
          .withAnalytics({ page: 'bookmark_folder' }),
        R = r('3XMw'),
        L = r.n(R),
        g = r('TW8A'),
        B = r('oQhu'),
        I = r('2G3J'),
        S = r('yoO3'),
        j = r('VS6U')
      function P(e) {
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
      var x = L.a.h63a5c3b,
        H = L.a.f075b0e8,
        J = function (e) {
          var t = e.renderMenu
          return b.a.createElement(I.a, { accessibilityLabel: x, renderMenu: t })
        },
        N = (function (e) {
          s()(r, e)
          var t = P(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              k()(l()(e), '_renderPrimaryContent', function (t, r, n) {
                return b.a.createElement(C.a, { bookmarkFolderId: n, history: e.props.history, title: r, urtModule: t })
              }),
              k()(l()(e), '_renderMenu', function (t) {
                return b.a.createElement(v.a, {
                  items: [{ text: H, onClick: e._editFolderModal, Icon: g.a }],
                  onCloseRequested: t,
                })
              }),
              k()(
                l()(e),
                '_getBookmarkFolderModule',
                Object(B.a)(function (e) {
                  if (e) return Object(E.a)(e)
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
                  var a = b.a.createElement(J, { renderMenu: this._renderMenu })
                  return b.a.createElement(
                    S.a,
                    null,
                    b.a.createElement(j.a, {
                      backLocation: '/i/bookmarks',
                      history: r,
                      primaryContent: this._renderPrimaryContent(o, t, n),
                      rightControl: a,
                      sidebarContent: b.a.createElement(F.a, null),
                      title: t,
                      withBackButton: !0,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(b.a.Component),
        K = w(N)
      t.default = K
    },
  },
])
//# sourceMappingURL=WIPED
