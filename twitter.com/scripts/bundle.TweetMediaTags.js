;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    e5HP: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return M
      })
      var a = r('VrFO'),
        n = r.n(a),
        c = r('Y9Ll'),
        s = r.n(c),
        i = r('5Yy7'),
        o = r.n(i),
        l = r('2VqO'),
        u = r.n(l),
        d = r('KEM+'),
        f = r.n(d),
        h = r('ERkP'),
        p = r.n(h),
        b = r('t62R'),
        m = r('3XMw'),
        v = r.n(m),
        I = r('rHpw'),
        y = r('MWbm'),
        E = r('yiKp'),
        w = r.n(E),
        g = r('Lsrn'),
        L = r('k/Ka'),
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(L.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
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
      var A = S,
        U = r('uFYP'),
        O = v.a.f1a1b790,
        k = v.a.if2bf8b3,
        N = v.a.f3624b5c,
        C = v.a.b4b3b113,
        _ = v.a.be22205f,
        F = v.a.hcbbe447,
        M = (function (e) {
          o()(r, e)
          var t = u()(r)
          function r() {
            return n()(this, r), t.apply(this, arguments)
          }
          return (
            s()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    r = e.nativeID,
                    a = e.style,
                    n = e.withCircleIcon ? A : U.a
                  return p.a.createElement(
                    y.a,
                    { style: [D.root, a] },
                    p.a.createElement(n, { style: [D.icon, t && D[t]] }),
                    p.a.createElement(b.b, { color: t, nativeID: r, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    r = e.label,
                    a = e.promotedContent,
                    n = a.adMetadataContainer,
                    c = a.advertiser,
                    s = a.advertiser_name,
                    i = a.disclosure_type,
                    o = t && c && t === c.id_str,
                    l = 'string' == typeof i && 'political' === i.toLowerCase(),
                    u = 'string' == typeof i && 'issue' === i.toLowerCase(),
                    d = !(!n || 'POLITICAL' !== n.disclaimerType) || l,
                    f = !(!n || 'ISSUE' !== n.disclaimerType) || u,
                    h = (n || {}).removePromotedAttributionForPreroll
                  return (
                    r ||
                    (!s || o || h
                      ? d
                        ? N
                        : f
                        ? _
                        : k
                      : d
                      ? C({ fullName: s })
                      : f
                      ? F({ fullName: s })
                      : O({ fullName: s }))
                  )
                },
              },
            ]),
            r
          )
        })(p.a.Component)
      f()(M, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var D = I.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    hqDb: function (e, t, r) {
      'use strict'
      var a = r('97Jx'),
        n = r.n(a),
        c = r('m3Bd'),
        s = r.n(c),
        i = r('VrFO'),
        o = r.n(i),
        l = r('Y9Ll'),
        u = r.n(l),
        d = r('1Pcy'),
        f = r.n(d),
        h = r('5Yy7'),
        p = r.n(h),
        b = r('2VqO'),
        m = r.n(b),
        v = r('KEM+'),
        I = r.n(v),
        y = (r('2G9S'), r('ERkP')),
        E = r.n(y),
        w = r('k49u'),
        g = (r('LW0h'), r('7x/C'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        L = r('kGix'),
        S = r('G6rE'),
        A = r('rxPX'),
        U = r('0KEI'),
        O = function (e, t) {
          return t.userIds
        },
        k = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!S.e.select(e, t)
          })
        },
        N = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var a = S.e.selectFetchStatus(e, r)
            return (t[r] = a === L.a.NONE ? L.a.LOADING : a), t
          }, {})
        },
        C = Object(A.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(g.a)(k, function (e) {
                return e
              }),
              fetchStatus: Object(g.a)(k, N, O, function (e, t, r) {
                for (var a = L.a.LOADED, n = 0; n < r.length; n++) {
                  var c = r[n]
                  if (-1 === e.indexOf(c)) {
                    var s = t[c] || L.a.LOADING
                    a = a === L.a.LOADED ? s : a
                  }
                  if (a === L.a.LOADED) break
                }
                return a
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(U.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: S.e.fetchManyIfNeeded,
            }
          }),
        _ = r('v//M'),
        F = r('3XMw'),
        M = r.n(F),
        D = r('pQ3Z'),
        x = r.n(D),
        P = (r('z84I'), r('cFuS')),
        R = r('Re5t'),
        H = r('MWbm'),
        j = r('88ay'),
        T = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return E.a.createElement(
            H.a,
            null,
            a.map(function (e, a) {
              return r
                ? r(e)
                : E.a.createElement(j.b, {
                    decoration: j.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: P.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      T.defaultProps = { displayMode: R.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var V = T,
        z = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        K = M.a.f5b426c2,
        B = { viewType: 'user_list' },
        X = C(
          (function (e) {
            p()(r, e)
            var t = m()(r)
            function r() {
              var e
              o()(this, r)
              for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(c))),
                I()(f()(e), 'state', { allUsersUnavailable: !1 }),
                I()(f()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, s()(t, z))
                  return E.a.createElement(V, n()({}, a, { userIds: r }))
                }),
                I()(f()(e), '_handleFetch', function () {
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
                    x()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return E.a.createElement(_.a, {
                      accessibilityLabel: K,
                      behavioralEventContext: B,
                      fetchStatus: this.state.allUsersUnavailable ? L.a.LOADED : this.props.fetchStatus,
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
                      a = r.availableUserIds,
                      n = r.createLocalApiErrorHandler
                    ;(0, r.fetchUsersIfNeeded)(r.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      n(
                        ((e = {}),
                        I()(e, w.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        I()(e, w.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
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
      t.a = X
    },
    nDeN: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'MediaTagsScreen', function () {
          return N
        })
      var a = r('ddV6'),
        n = r.n(a),
        c = (r('z84I'), r('ERkP')),
        s = r.n(c),
        i = (r('KqXw'), r('WNMA'), r('o52z')),
        o = r('XOJV'),
        l = r('rxPX'),
        u = r('0KEI'),
        d = function (e, t) {
          var r = h(e, t) || {}
          return (r.extended_entities && r.extended_entities.media) || Object(i.a)()
        },
        f = function (e, t) {
          return t.match.params.statusId
        },
        h = function (e, t) {
          return o.a.selectHydrated(e, f(0, t))
        },
        p = function (e, t) {
          return o.a.selectFetchStatus(e, f(0, t))
        },
        b = Object(l.a)()
          .propsFromState(function () {
            return { fetchStatus: p, mediaItems: d, statusId: f, tweet: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('MEDIA_TAGS_SCREEN'),
              fetchTweetIfNeeded: o.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media_tags' }),
        m = r('v//M'),
        v = r('W5XZ'),
        I = r('jHSc'),
        y = r('3XMw'),
        E = r.n(y),
        w = r('VTxf'),
        g = r('hqDb'),
        L = r('VAyw'),
        S = r('t62R'),
        A = E.a.b98764b1,
        U = E.a.cb2054fa,
        O = E.a.e4ad6bda,
        k = function () {
          return s.a.createElement(w.a, null)
        }
      function N(e) {
        var t = e.createLocalApiErrorHandler,
          r = e.fetchStatus,
          a = e.fetchTweetIfNeeded,
          c = e.history,
          i = e.mediaItems,
          o = e.statusId,
          l = e.tweet,
          u = s.a.useState(!1),
          d = n()(u, 2),
          f = d[0],
          h = d[1],
          p = s.a.useCallback(
            function () {
              a(o).catch(function (e) {
                t(v.a)(e), e && e.status && h(!0)
              })
            },
            [o, a, t, h],
          )
        s.a.useEffect(
          function () {
            p()
          },
          [p],
        )
        var b = s.a.useCallback(
            function () {
              var e = L.a.mergeTaggedUsers(i).map(function (e) {
                return e.user_id
              })
              return e.length
                ? s.a.createElement(g.a, { userIds: e, withItemBorder: !0 })
                : s.a.createElement(S.b, { align: 'center', color: 'gray700', size: 'headline1' }, A)
            },
            [i],
          ),
          y = l ? l.permalink : '/'
        return s.a.createElement(
          I.b,
          { backLocation: y, history: c, title: O },
          s.a.createElement(m.a, {
            accessibilityLabel: U,
            fetchStatus: r,
            onRequestRetry: p,
            render: b,
            renderFailure: k,
            retryable: !f,
          }),
        )
      }
      t.default = b(N)
    },
    o52z: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      var a = r('VPAj'),
        n = Object(a.a)([])
      Object(a.a)({})
    },
    uFYP: function (e, t, r) {
      'use strict'
      var a = r('yiKp'),
        n = r.n(a),
        c = r('ERkP'),
        s = r.n(c),
        i = r('Lsrn'),
        o = r('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            s.a.createElement(
              'g',
              null,
              s.a.createElement('path', {
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
