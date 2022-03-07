;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '/kFL': function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, 'BookmarksScreen', function () {
          return W
        })
      var a = t('VrFO'),
        n = t.n(a),
        o = t('Y9Ll'),
        i = t.n(o),
        l = t('1Pcy'),
        c = t.n(l),
        s = t('5Yy7'),
        u = t.n(s),
        d = t('2VqO'),
        m = t.n(d),
        h = t('KEM+'),
        p = t.n(h),
        k = (t('2G9S'), t('ERkP')),
        b = t.n(k),
        f = t('BQZD'),
        y = t('1LtL'),
        E = t('es0u'),
        v = t('wrlS'),
        g = t('G6rE'),
        C = t('rxPX'),
        w = t('0KEI'),
        F = function (e) {
          return (function (e) {
            return Object(f.b)(Object(v.d)(e))
          })(e).selectIsEmptyTimeline(e)
        },
        B = Object(C.a)()
          .propsFromState(function () {
            return { isEmpty: F, loggedInUser: g.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var r = e.isEmpty,
              t = e.loggedInUser
            return { isEmpty: r, loggedInUserScreenName: null == t ? void 0 : t.screen_name }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('BOOKMARK_PAGE'),
              removeAll: f.c,
            }
          }),
        M = t('3XMw'),
        A = t.n(M),
        _ = t('2G3J'),
        O = t('yoO3'),
        L = t('7JQg'),
        I = t('VS6U'),
        S = t('mjJ+'),
        j = t('eb3s'),
        P = t('yrzJ'),
        R = t('v6aA'),
        x = { page: 'bookmarks' },
        H = A.a.i3145aa0,
        T = A.a.bcc7e8cf,
        J = A.a.h63a5c3b,
        G = A.a.c8c1fa6d,
        K = A.a.jf748f4f,
        N = A.a.cc0f2f4f,
        U = A.a.dbd5d40f,
        W = (function (e) {
          u()(t, e)
          var r = m()(t)
          function t() {
            var e
            n()(this, t)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = r.call.apply(r, [this].concat(o))),
              p()(c()(e), 'state', { showConfirmRemoveAll: !1 }),
              p()(c()(e), '_renderMenu', function (r) {
                return b.a.createElement(S.a, {
                  items: [{ text: G, onClick: e._removeAllSelected, isEmphasized: !0 }],
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
                    a = this.context.userClaims.isTrueAndEnabled('subscriptions_feature_1002'),
                    n = t ? void 0 : b.a.createElement(_.a, { accessibilityLabel: J, renderMenu: this._renderMenu })
                  return b.a.createElement(
                    L.c,
                    { namespace: x },
                    b.a.createElement(
                      O.a,
                      null,
                      b.a.createElement(I.a, {
                        backLocation: '/home',
                        history: r,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: n,
                        sidebarContent: b.a.createElement(E.a, null),
                        subtitle: this._renderSubtitle(a),
                        title: a ? T : H,
                        withBackButton: a,
                      }),
                      this.state.showConfirmRemoveAll
                        ? b.a.createElement(j.a, {
                            confirmButtonLabel: U,
                            confirmButtonType: 'destructiveFilled',
                            headline: K,
                            onCancel: this._handleClearCancel,
                            onConfirm: this._handleClearConfirmed,
                            text: N,
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
                  return !e && r ? b.a.createElement(P.a, { screenName: r }) : null
                },
              },
              {
                key: '_renderPrimaryContent',
                value: function () {
                  var e = this.props.history
                  return b.a.createElement(y.a, {
                    history: e,
                    title: H,
                    urtModule: Object(f.b)(this.context.featureSwitches),
                  })
                },
              },
            ]),
            t
          )
        })(b.a.Component)
      p()(W, 'contextType', R.a)
      var D = B(W)
      r.default = D
    },
    '1LtL': function (e, r, t) {
      'use strict'
      var a = t('ERkP'),
        n = t.n(a),
        o = t('QIgh'),
        i = t('dwig'),
        l = t('0+qk'),
        c = t('3XMw'),
        s = t.n(c),
        u = t('7BdX'),
        d = t('fTQJ'),
        m = t('k89r'),
        h = t('FIs5'),
        p = t('mw9i'),
        k =
          (t('yH/f'),
          t('2G9S'),
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
      function b(e, r) {
        return 'https://abs.twimg.com/sticky/illustrations/empty-states/'.concat(e, '-').concat(r, '.v1.png')
      }
      var f = s.a.cd343e15,
        y = s.a.f47e39e8
      r.a = function (e) {
        var r = e.bookmarkFolderId,
          t = e.history,
          a = e.title,
          c = e.urtModule,
          s = n.a.createElement(l.a, { history: t }),
          E = Object(m.a)()
        return n.a.createElement(
          i.a,
          { component: p.a, fab: s },
          n.a.createElement(d.a, {
            entryConfiguration: Object(o.a)({ withRemoveFromBookmarks: !0, bookmarkFolderId: r }),
            module: c,
            prerollDisplayLocation: u.c.OTHER,
            renderEmptyState: function () {
              return (
                E.scribeAction('empty'),
                n.a.createElement(h.a, {
                  header: f,
                  imageVariants:
                    ((e = k.BookInBirdCage),
                    [
                      { height: 200, uri: b(e, '400x200'), width: 400 },
                      { height: 400, uri: b(e, '800x400'), width: 800 },
                      { height: 600, uri: b(e, '1200x600'), width: 1200 },
                    ]),
                  message: y,
                })
              )
              var e
            },
            title: a,
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
      var a = t('VrFO'),
        n = t.n(a),
        o = t('Y9Ll'),
        i = t.n(o),
        l = t('1Pcy'),
        c = t.n(l),
        s = t('5Yy7'),
        u = t.n(s),
        d = t('2VqO'),
        m = t.n(d),
        h = t('KEM+'),
        p = t.n(h),
        k = (t('2G9S'), t('KqXw'), t('WNMA'), t('jQ3i'), t('x4t0'), t('MvUL'), t('ERkP')),
        b = t.n(k),
        f = t('mjJ+'),
        y = t('BQZD'),
        E = t('1LtL'),
        v = t('es0u'),
        g = (t('ho0z'), t('Hja3')),
        C = t('rxPX'),
        w = t('0KEI'),
        F = function (e, r) {
          var t = r.match.params.bookmarkFolderId,
            a = t ? g.b.select(e, t) : void 0
          return null == a ? void 0 : a.name
        },
        B = Object(C.a)()
          .propsFromState(function () {
            return { bookmarkFolderName: F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'BOOKMARK_FOLDER_TIMELINE_PAGE',
              ),
              fetchBookmarkFolders: g.c,
            }
          })
          .withAnalytics({ page: 'bookmark_folder' }),
        M = t('3XMw'),
        A = t.n(M),
        _ = t('TW8A'),
        O = t('oQhu'),
        L = t('2G3J'),
        I = t('yoO3'),
        S = t('VS6U'),
        j = A.a.h63a5c3b,
        P = A.a.f075b0e8,
        R = function (e) {
          var r = e.renderMenu
          return b.a.createElement(L.a, { accessibilityLabel: j, renderMenu: r })
        },
        x = (function (e) {
          u()(t, e)
          var r = m()(t)
          function t() {
            var e
            n()(this, t)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = r.call.apply(r, [this].concat(o))),
              p()(c()(e), '_renderPrimaryContent', function (r, t, a) {
                return b.a.createElement(E.a, { bookmarkFolderId: a, history: e.props.history, title: t, urtModule: r })
              }),
              p()(c()(e), '_renderMenu', function (r) {
                return b.a.createElement(f.a, {
                  items: [{ text: P, onClick: e._editFolderModal, Icon: _.a }],
                  onCloseRequested: r,
                })
              }),
              p()(
                c()(e),
                '_getBookmarkFolderModule',
                Object(O.a)(function (e) {
                  if (e) return Object(y.a)(e)
                }),
              ),
              p()(c()(e), '_editFolderModal', function (r) {
                var t = e.props,
                  a = t.analytics,
                  n = t.history,
                  o = t.match
                a.scribe({ element: 'edit', action: 'click' }),
                  r(),
                  o.params.bookmarkFolderId &&
                    n.push({ pathname: '/i/bookmarks/'.concat(o.params.bookmarkFolderId, '/edit') })
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
                    a = e.history,
                    n = e.match
                  r ||
                    t().then(function (e) {
                      e.result.includes(n.params.bookmarkFolderId) || a.replace('/i/bookmarks')
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    r = e.bookmarkFolderName,
                    t = e.history,
                    a = this.props.match.params.bookmarkFolderId || void 0,
                    n = this._getBookmarkFolderModule(a)
                  if (!r || !n) return null
                  var o = b.a.createElement(R, { renderMenu: this._renderMenu })
                  return b.a.createElement(
                    I.a,
                    null,
                    b.a.createElement(S.a, {
                      backLocation: '/i/bookmarks',
                      history: t,
                      primaryContent: this._renderPrimaryContent(n, r, a),
                      rightControl: o,
                      sidebarContent: b.a.createElement(v.a, null),
                      title: r,
                      withBackButton: !0,
                    }),
                  )
                },
              },
            ]),
            t
          )
        })(b.a.Component),
        H = B(x)
      r.default = H
    },
  },
])
//# sourceMappingURL=WIPED
