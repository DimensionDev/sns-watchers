;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    e5HP: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return M
      })
      var n = r('VrFO'),
        a = r.n(n),
        s = r('Y9Ll'),
        c = r.n(s),
        i = r('5Yy7'),
        o = r.n(i),
        l = r('2VqO'),
        u = r.n(l),
        d = r('KEM+'),
        f = r.n(d),
        h = r('ERkP'),
        p = r.n(h),
        v = r('t62R'),
        m = r('3XMw'),
        I = r.n(m),
        y = r('rHpw'),
        b = r('MWbm'),
        E = r('yiKp'),
        w = r.n(E),
        L = r('Lsrn'),
        _ = r('k/Ka'),
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(_.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [L.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      S.metadata = { width: 24, height: 24 }
      var U = S,
        O = r('uFYP'),
        C = I.a.f1a1b790,
        N = I.a.if2bf8b3,
        A = I.a.f3624b5c,
        g = I.a.b4b3b113,
        k = I.a.be22205f,
        F = I.a.hcbbe447,
        M = (function (e) {
          o()(r, e)
          var t = u()(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    r = e.nativeID,
                    n = e.style,
                    a = e.withCircleIcon ? U : O.a
                  return p.a.createElement(
                    b.a,
                    { style: [P.root, n] },
                    p.a.createElement(a, { style: [P.icon, t && P[t]] }),
                    p.a.createElement(v.b, { color: t, nativeID: r, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    r = e.label,
                    n = e.promotedContent,
                    a = n.adMetadataContainer,
                    s = n.advertiser,
                    c = n.advertiser_name,
                    i = n.disclosure_type,
                    o = t && s && t === s.id_str,
                    l = 'string' == typeof i && 'political' === i.toLowerCase(),
                    u = 'string' == typeof i && 'issue' === i.toLowerCase(),
                    d = !(!a || 'POLITICAL' !== a.disclaimerType) || l,
                    f = !(!a || 'ISSUE' !== a.disclaimerType) || u,
                    h = (a || {}).removePromotedAttributionForPreroll
                  return (
                    r ||
                    (!c || o || h
                      ? d
                        ? A
                        : f
                        ? k
                        : N
                      : d
                      ? g({ fullName: c })
                      : f
                      ? F({ fullName: c })
                      : C({ fullName: c }))
                  )
                },
              },
            ]),
            r
          )
        })(p.a.Component)
      f()(M, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var P = y.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    gLwk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ConversationParticipantsScreen', function () {
          return K
        })
      var n = r('VrFO'),
        a = r.n(n),
        s = r('Y9Ll'),
        c = r.n(s),
        i = r('1Pcy'),
        o = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        d = r('2VqO'),
        f = r.n(d),
        h = r('KEM+'),
        p = r.n(h),
        v = (r('2G9S'), r('jQ3i'), r('x4t0'), r('ERkP')),
        m = r.n(v),
        I = r('RhWx'),
        y = r.n(I),
        b = (r('KqXw'), r('WNMA'), r('LW0h'), r('7x/C'), r('z84I'), r('hqKg')),
        E = r('XOJV'),
        w = r('lnti'),
        L = r('s1N3'),
        _ = r('rxPX'),
        S = r('0KEI'),
        U = function (e, t) {
          return t.match.params.screenName
        },
        O = function (e, t) {
          return t.match.params.statusId
        },
        C = function (e, t) {
          return E.a.selectHydrated(e, t.match.params.statusId)
        },
        N = function (e, t) {
          return E.a.selectFetchStatus(e, t.match.params.statusId)
        },
        A = Object(_.a)()
          .propsFromState(function () {
            return {
              fetchStatus: N,
              screenName: U,
              statusId: O,
              participantIds: Object(b.createSelector)(C, function (e) {
                if (!e) return []
                var t = (e.entities || {}).user_mentions,
                  r = void 0 === t ? [] : t,
                  n = { id_str: e.in_reply_to_user_id_str },
                  a = r.filter(function (t) {
                    return t.indices[0] < e.display_text_range[0]
                  }),
                  s = [n].concat(y()(a))
                return Object(w.a)(
                  Object(L.a)(
                    s.map(function (e) {
                      return e.id_str
                    }),
                  ),
                )
              }),
              unmentionedUserIds: Object(b.createSelector)(C, function (e) {
                var t
                return null !== (t = null == e ? void 0 : e.unmentioned_user_ids) && void 0 !== t ? t : []
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'CONVERSATION_PARTICIPANTS_SCREEN',
              ),
              fetchTweetIfNeeded: E.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'conversation_participants' }),
        g = r('v//M'),
        k = r('W5XZ'),
        F = r('jHSc'),
        M = r('3XMw'),
        P = r.n(M),
        R = r('cFuS'),
        D = r('Re5t'),
        x = r('hqDb'),
        H = r('88ay'),
        j = P.a.cdd4aafe,
        T = P.a.aac3fad1,
        K = (function (e) {
          u()(r, e)
          var t = f()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(s))),
              p()(o()(e), '_renderUserCell', function (t) {
                var r = e.props.unmentionedUserIds.includes(t)
                return m.a.createElement(H.b, {
                  cellClickable: !r,
                  decoration: r ? null : H.e,
                  displayMode: D.a.UserDetailed,
                  key: t,
                  promotedItemType: R.c.USER,
                  userId: t,
                  withFollowsYou: !0,
                  withLink: !r,
                })
              }),
              p()(o()(e), '_renderList', function () {
                return m.a.createElement(x.a, {
                  renderUserCell: e._renderUserCell,
                  userIds: e.props.participantIds,
                  withItemBorder: !0,
                })
              }),
              p()(o()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(r(k.a))
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
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    r = e.history,
                    n = e.screenName,
                    a = e.statusId
                  return m.a.createElement(
                    F.b,
                    { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(a), history: r, title: T },
                    m.a.createElement(g.a, {
                      accessibilityLabel: j,
                      fetchStatus: t,
                      onRequestRetry: this._handleFetch,
                      render: this._renderList,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(m.a.Component),
        V = A(K)
      t.default = V
    },
    hqDb: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        a = r.n(n),
        s = r('m3Bd'),
        c = r.n(s),
        i = r('VrFO'),
        o = r.n(i),
        l = r('Y9Ll'),
        u = r.n(l),
        d = r('1Pcy'),
        f = r.n(d),
        h = r('5Yy7'),
        p = r.n(h),
        v = r('2VqO'),
        m = r.n(v),
        I = r('KEM+'),
        y = r.n(I),
        b = (r('2G9S'), r('ERkP')),
        E = r.n(b),
        w = r('k49u'),
        L = (r('LW0h'), r('7x/C'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        _ = r('kGix'),
        S = r('G6rE'),
        U = r('rxPX'),
        O = r('0KEI'),
        C = function (e, t) {
          return t.userIds
        },
        N = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!S.e.select(e, t)
          })
        },
        A = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = S.e.selectFetchStatus(e, r)
            return (t[r] = n === _.a.NONE ? _.a.LOADING : n), t
          }, {})
        },
        g = Object(U.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(L.a)(N, function (e) {
                return e
              }),
              fetchStatus: Object(L.a)(N, A, C, function (e, t, r) {
                for (var n = _.a.LOADED, a = 0; a < r.length; a++) {
                  var s = r[a]
                  if (-1 === e.indexOf(s)) {
                    var c = t[s] || _.a.LOADING
                    n = n === _.a.LOADED ? c : n
                  }
                  if (n === _.a.LOADED) break
                }
                return n
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: S.e.fetchManyIfNeeded,
            }
          }),
        k = r('v//M'),
        F = r('3XMw'),
        M = r.n(F),
        P = r('pQ3Z'),
        R = r.n(P),
        D = (r('z84I'), r('cFuS')),
        x = r('Re5t'),
        H = r('MWbm'),
        j = r('88ay'),
        T = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            n = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return E.a.createElement(
            H.a,
            null,
            n.map(function (e, n) {
              return r
                ? r(e)
                : E.a.createElement(j.b, {
                    decoration: j.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: D.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      T.defaultProps = { displayMode: x.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var K = T,
        V = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        Y = M.a.f5b426c2,
        q = { viewType: 'user_list' },
        B = g(
          (function (e) {
            p()(r, e)
            var t = m()(r)
            function r() {
              var e
              o()(this, r)
              for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(s))),
                y()(f()(e), 'state', { allUsersUnavailable: !1 }),
                y()(f()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    n = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, c()(t, V))
                  return E.a.createElement(K, a()({}, n, { userIds: r }))
                }),
                y()(f()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(r, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    R()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return E.a.createElement(k.a, {
                      accessibilityLabel: Y,
                      behavioralEventContext: q,
                      fetchStatus: this.state.allUsersUnavailable ? _.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      r = this.props,
                      n = r.availableUserIds,
                      a = r.createLocalApiErrorHandler
                    ;(0, r.fetchUsersIfNeeded)(r.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      a(
                        ((e = {}),
                        y()(e, w.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        y()(e, w.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              r
            )
          })(E.a.Component),
        )
      t.a = B
    },
    uFYP: function (e, t, r) {
      'use strict'
      var n = r('yiKp'),
        a = r.n(n),
        s = r('ERkP'),
        c = r.n(s),
        i = r('Lsrn'),
        o = r('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
