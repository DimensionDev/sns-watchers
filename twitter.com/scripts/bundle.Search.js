;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84, 61, 186],
  {
    '0+0m': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return o
        }),
        n.d(t, 'f', function () {
          return c
        }),
        n.d(t, 'd', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return s
        })
      n('yH/f')
      var r = 'com.twitter.twitter.siwa',
        a = '49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com',
        o = 300,
        c = 'popup_closed_by_user',
        i = Object.freeze({ SignUp: 'signup_with', SignIn: 'signin_with' }),
        s = Object.freeze({ Button: 'button', Prompt: 'prompt' })
    },
    '0E8n': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchScreen', function () {
          return dt
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('vfdX'), n('z84I'), n('hBvt'), n('ERkP')),
        v = n.n(b),
        g = n('HPNB'),
        S = n('es0u'),
        _ = (n('WNMA'), n('KqXw'), n('vrRf'), n('zh9S')),
        O = n('1YZw'),
        w = n('hqKg'),
        E = n('3IPs'),
        P = n('rxPX'),
        k = n('0KEI'),
        C = n('v4XE'),
        I = n('Hw0q'),
        j = function (e, t) {
          var n = t.location
          return n.query && n.query.src && 'string' == typeof n.query.src ? n.query.src : ''
        },
        R = function (e, t) {
          var n = t.location,
            r = t.match.params
          return r && r.unsafeHashtagQuery && 'string' == typeof r.unsafeHashtagQuery
            ? '#'.concat(r.unsafeHashtagQuery)
            : (n && n.query && n.query.q && Object(I.a)(n.query.q)) || ''
        },
        x = function (e, t) {
          return 0 === t.location.pathname.indexOf('/search') ? 'search' : 'hashtag'
        },
        T = function (e, t) {
          return !!(t.location.state || {}).searchFocused
        },
        D = Object(w.createSelector)(Object(I.b)('pf'), Object(I.b)('lf'), function (e, t) {
          return { peopleFilter: e, locationFilter: t }
        }),
        L = Object(P.a)()
          .propsFromState(function () {
            return {
              searchFocused: T,
              query: R,
              querySrc: j,
              isQueryAlreadySaved: Object(w.createSelector)(R, C.d, function (e, t) {
                return (
                  t
                    .map(function (e) {
                      return e.query
                    })
                    .indexOf(e) > -1
                )
              }),
              searchType: x,
              searchFilters: D,
              mode: E.k,
              savedSearches: C.d,
              vertical: Object(I.b)('vertical'),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: O.b,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('SEARCH_SCREEN'),
              deleteSavedSearch: C.a,
              fetchSavedSearchesIfNeeded: C.b,
              saveSearch: C.c,
              scribeAction: _.c,
            }
          })
          .withAnalytics({ page: 'search' }),
        A = n('sYRn'),
        B = n('3XMw'),
        F = n.n(B),
        z = n('oQhu'),
        N = n('2G3J'),
        H = n('yoO3'),
        M = n('7nmT'),
        U = n.n(M),
        q = n('5FtR'),
        V = n('Rp9C'),
        W = n('7JQg'),
        K = n('L7to'),
        Q = n('3rEN'),
        G = (n('muX9'), F.a.a8399d5b, F.a.ge893905, n('mjJ+')),
        X = n('3A2y'),
        Z = 'searchFilters-overflow',
        J = 'advancedSearch-overflow',
        Y = 'searchSettings-overflow',
        $ = 'saveSearch-overflow',
        ee = 'deleteSavedSearch-overflow',
        te = n('+RfI'),
        ne = n('VwDm'),
        re = n('M2x3'),
        ae = n('g9w/'),
        oe = n('hiGS')
      function ce(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function se(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ue = F.a.h1ef00db,
        le = F.a.aea62567,
        de = F.a.j622effd,
        pe = F.a.h4912b5e,
        fe = F.a.b9bc69ca,
        he = (function (e) {
          l()(n, e)
          var t = se(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.deleteSavedSearch,
                  r = t.isLoggedIn,
                  a = t.isQueryAlreadySaved,
                  o = t.isTwoColumn,
                  c = t.location,
                  i = t.saveSearch,
                  s = []
                return (
                  o ||
                    s.push({
                      Icon: te.a,
                      testID: Z,
                      text: le,
                      link: { pathname: '/i/search_filters', query: c.query },
                    }),
                  s.push({
                    Icon: ne.a,
                    testID: J,
                    text: de,
                    link: { pathname: '/search-advanced', query: ie({}, Object(X.a)(c.query, ['q', 'src'])) },
                  }),
                  r &&
                    (s.unshift({ Icon: re.a, testID: Y, text: ue, link: '/settings/search' }),
                    a
                      ? s.push({
                          Icon: oe.a,
                          isEmphasized: !0,
                          testID: ee,
                          text: fe,
                          onClick: function (e) {
                            e(), n()
                          },
                        })
                      : s.push({
                          Icon: ae.a,
                          testID: $,
                          text: pe,
                          onClick: function (e) {
                            e(), i()
                          },
                        })),
                  s
                )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return v.a.createElement(G.a, { items: this._getActionItems(), onCloseRequested: this.props.onClose })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        me = n('VS6U'),
        ye = n('LsPn'),
        be = 'searchBoxOverflowButton',
        ve = n('aITJ'),
        ge = n('MWbm'),
        Se = n('v6aA'),
        _e = F.a.f9d35b98,
        Oe = F.a.ha925ad3,
        we = F.a.h0a9931b,
        Ee = {
          customErrorHandler: function () {
            return Object(O.b)({ text: Oe })
          },
          showToast: !0,
        },
        Pe = {
          customErrorHandler: function () {
            return Object(O.b)({ text: _e })
          },
          showToast: !0,
        },
        ke = {
          customErrorHandler: function () {
            return Object(O.b)({ text: we })
          },
          showToast: !0,
        },
        Ce = n('cHvH'),
        Ie = n('6vad'),
        je = n('k/OQ'),
        Re = n('8Lfv'),
        xe = function (e, t) {
          return 'POP' === t.history.action
        },
        Te = function (e, t) {
          var n,
            r = t.location
          return null == r || null === (n = r.state) || void 0 === n ? void 0 : n.urtEndpointOptions
        },
        De = Object(P.a)()
          .propsFromState(function () {
            return { dataLookupId: E.j, isBackNavigation: xe, searchMode: E.k, urtEndpointOptions: Te }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: function (e) {
                var t = e.fetchOptions,
                  n = e.module
                return Object(Re.a)(n, t)
              },
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'SEARCH_RESULTS_SCREEN',
              ),
              googleAnalyticsPageView: _.a,
              scribePageImpression: _.d,
            }
          }),
        Le = n('s14A'),
        Ae = n('dwig'),
        Be = n('3X8/'),
        Fe = n('0+qk'),
        ze = n('Ds5i'),
        Ne = n.n(ze),
        He = n('h2mu'),
        Me = n('i6OR'),
        Ue = n('pQ3Z'),
        qe = n.n(Ue)
      function Ve(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ve(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ve(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ke(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Qe = function (e) {
          return e && Ne()(e) ? { defaultText: ' '.concat(e), positionCursorAtBeginning: !0 } : void 0
        },
        Ge = (function (e) {
          l()(n, e)
          var t = Ke(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_getFabState', function () {
                var t = e.props.query
                return e._getMemoizedComposeLocationState(t)
              }),
              y()(s()(e), '_getTimelineScribeNamespace', function () {
                var t = e.props,
                  n = t.scribeNamespace,
                  r = t.searchMode,
                  a = t.vertical
                return e._getMemoizedTimelineScribeNamespace(n, r, a)
              }),
              y()(
                s()(e),
                '_getMemoizedTimelineScribeNamespace',
                Object(z.a)(function (e, t, n) {
                  var r = n === E.d.Topics ? '_topics' : '',
                    a = 'search_filter_'.concat(t).concat(r)
                  return We(We({}, e), {}, { section: a })
                }),
              ),
              y()(s()(e), '_getMemoizedComposeLocationState', Object(z.a)(Qe)),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.isBackNavigation
                  ;(0, e.scribePageImpression)(this._getTimelineScribeNamespace()),
                    t(this._getTimelineScribeNamespace()),
                    n || this._clearTimelineCache()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.isBackNavigation,
                    r = t.query,
                    a = t.querySrc,
                    o = t.searchFilters,
                    c = t.shouldClearTimelineCache
                  n ||
                    (!c && e.query === r && e.querySrc === a && qe()(e.searchFilters, o)) ||
                    this._clearTimelineCache()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.query,
                    n = e.querySrc,
                    r = e.searchFilters,
                    a = e.searchFocused,
                    o = e.searchMode,
                    c = e.urtEndpointOptions,
                    i = e.vertical,
                    s = this.context,
                    u = s.featureSwitches,
                    l = !(!s.loggedInUserId || !u.isTrue('voice_rooms_search_results_page_audiospace_ring_enabled'))
                  return v.a.createElement(
                    Ae.a,
                    { component: Le.a, fab: this._renderFloatingComposeButton(), shouldRenderFab: !a },
                    v.a.createElement(
                      W.b,
                      { namespace: this._getTimelineScribeNamespace() },
                      v.a.createElement(He.a, {
                        fetchOptions: this._getFetchOptions(),
                        query: t,
                        querySrc: n,
                        searchFilters: r,
                        searchMode: o,
                        urtEndpointOptions: c,
                        vertical: i,
                        withUserPresence: l,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return v.a.createElement(Fe.a, { getLocationState: this._getFabState, history: e })
                },
              },
              {
                key: '_getFetchOptions',
                value: function () {
                  var e = this.props,
                    t = e.dataLookupId
                  return { query_source: e.querySrc, data_lookup_id: t }
                },
              },
              {
                key: '_clearTimelineCache',
                value: function () {
                  var e = this.props,
                    t = e.clearTimelineCache,
                    n = e.createLocalApiErrorHandler,
                    r = e.query,
                    a = e.querySrc,
                    o = e.searchFilters,
                    c = e.searchMode,
                    i = e.urtEndpointOptions
                  t({
                    module: Object(Me.b)({
                      query: r,
                      querySource: a,
                      searchMode: c,
                      searchFilters: o,
                      urtEndpointOptions: i,
                    }),
                    fetchOptions: this._getFetchOptions(),
                  }).catch(n(Be.a))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(Ge, 'contextType', Se.a)
      var Xe = Object(W.c)({ page: 'search', section: 'universal' })(De(Ge))
      function Ze(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ze(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ze(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ye(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var $e = F.a.eb0ecd1d,
        et = F.a.cceeb26b,
        tt = F.a.i66136a9,
        nt = F.a.d601fc2f,
        rt = F.a.g2fd3205,
        at = F.a.ac4fb0f3,
        ot = F.a.a9ae1e78,
        ct = F.a.bb967f9e,
        it = F.a.aea62567,
        st = F.a.gfcfbf8b,
        ut = F.a.a4645d91,
        lt = [
          { type: E.c.Top, label: tt },
          { type: E.c.Live, label: nt },
          { type: E.c.User, label: rt },
          { type: E.c.Image, label: at },
          { type: E.c.Video, label: ct },
        ],
        dt = (function (e) {
          l()(n, e)
          var t = Ye(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(
                s()(e),
                '_searchHomePageVariation',
                e.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
              ),
              y()(s()(e), '_loggedInUserId', e.context.loggedInUserId),
              y()(s()(e), 'state', { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
              y()(
                s()(e),
                '_getScribeData',
                Object(z.a)(function (e, t, n, r, a) {
                  return {
                    search_details: Je(
                      {},
                      Object(E.f)({ query: e, querySrc: t, searchFilters: n, modeValue: r, vertical: a }),
                    ),
                  }
                }),
              ),
              y()(s()(e), '_renderRightControl', function (t) {
                var n = t.isTwoColumn,
                  r = t.searchFocused
                return n || !r
                  ? v.a.createElement(N.a, {
                      onClick: e._handleOverflowMenuClick,
                      renderMenu: e._renderMenu,
                      testID: be,
                    })
                  : void 0
              }),
              y()(s()(e), '_renderMenu', function (t) {
                var n = e.props,
                  r = n.history,
                  a = n.isQueryAlreadySaved,
                  o = n.location,
                  c = !!e.context.loggedInUserId
                return v.a.createElement(Ce.a, null, function (n) {
                  var i = n.windowWidth,
                    s = g.a.isTwoColumnLayout(i)
                  return v.a.createElement(he, {
                    deleteSavedSearch: e._onDeleteSavedSearchMenuClick,
                    history: r,
                    isLoggedIn: c,
                    isQueryAlreadySaved: a,
                    isTwoColumn: s,
                    location: o,
                    onClose: t,
                    saveSearch: e._onSaveSearch,
                  })
                })
              }),
              y()(s()(e), '_onSaveSearch', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  o = t.query,
                  c = t.saveSearch,
                  i = t.savedSearches.length
                o &&
                  c(o)
                    .then(function () {
                      return n({ text: st })
                    })
                    .catch(a(i < 25 ? Ee : Pe))
                var s = V.a.forSavedSearchResult(o, i)
                r.scribe({ element: 'saved_search', action: 'add', data: { items: [s] } })
              }),
              y()(s()(e), '_handleOnDeleteSavedSearchConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  o = t.deleteSavedSearch,
                  c = t.query,
                  i = t.savedSearches,
                  s = i.findIndex(function (e) {
                    return e.query === c
                  }),
                  u = i[s]
                if (u) {
                  o(u.id_str)
                    .then(function () {
                      return n({ text: ut })
                    })
                    .catch(a(ke))
                  var l = V.a.forSavedSearchResult(u.query, s)
                  r.scribe({ element: 'saved_search', action: 'delete', data: { items: [l] } }),
                    e.setState({ shouldShowDeleteSearchConfirmation: !1 })
                }
              }),
              y()(s()(e), '_handleOnDeleteSavedSearchCancel', function () {
                e.setState({ shouldShowDeleteSearchConfirmation: !1 })
              }),
              y()(s()(e), '_onDeleteSavedSearchMenuClick', function () {
                e.setState({ shouldShowDeleteSearchConfirmation: !0 })
              }),
              y()(s()(e), '_handleOverflowMenuClick', function () {
                e.props.analytics.scribe({ element: 'overflow_menu', action: 'click' })
              }),
              y()(s()(e), '_renderPrimaryContent', function (t) {
                var n = e.state.shouldShowDeleteSearchConfirmation
                return v.a.createElement(
                  ge.a,
                  null,
                  v.a.createElement(Xe, t),
                  n
                    ? v.a.createElement(A.a, {
                        onCancel: e._handleOnDeleteSavedSearchCancel,
                        onConfirm: e._handleOnDeleteSavedSearchConfirm,
                      })
                    : null,
                )
              }),
              y()(s()(e), '_renderSidebarContent', function () {
                var t = e.props,
                  n = t.history,
                  r = t.location,
                  a = t.query
                return v.a.createElement(
                  S.a,
                  { withSearchBox: !1, withTrends: !!a },
                  v.a.createElement(
                    ge.a,
                    null,
                    v.a.createElement(Ie.b, { text: it }),
                    v.a.createElement(K.b, { history: n, key: r.key, location: r }),
                  ),
                )
              }),
              y()(s()(e), '_renderModesBar', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.query,
                  a = t.querySrc,
                  o = t.searchFilters,
                  c = n.contextualScribeNamespace,
                  i = e._getModeLinks().map(function (t) {
                    var i = t.isActive,
                      s = t.label,
                      u = t.link,
                      l = t.modeType
                    return {
                      isActive: i,
                      key: l,
                      to: u,
                      label: s,
                      onClick: function () {
                        i() ||
                          n.scribe(
                            Je(
                              Je({}, c),
                              {},
                              {
                                element: 'search_filter_'.concat(l),
                                action: 'navigate',
                                data: e._getScribeData(r, a, o),
                              },
                            ),
                          )
                      },
                    }
                  })
                return v.a.createElement(je.a, { links: i })
              }),
              y()(s()(e), '_getModeLinks', function () {
                var t = e.props,
                  n = t.mode,
                  r = t.query,
                  a = t.querySrc,
                  o = t.searchFilters,
                  c = t.searchType,
                  i = t.vertical
                return e._getMemoizedModeLinks(r, a, c, o, n, i, function (e, t) {
                  return function () {
                    return E.i[t] === e
                  }
                })
              }),
              y()(
                s()(e),
                '_getMemoizedModeLinks',
                Object(z.a)(function (e, t, n, r, a, o, c) {
                  return lt.map(function (i) {
                    var s = E.i[i.type]
                    return {
                      link: Object(E.e)({
                        query: e,
                        querySrc: t,
                        modeValue: s,
                        searchType: n,
                        searchFilters: r,
                        vertical: o,
                      }),
                      isActive: c(s, a),
                      label: i.label,
                      modeType: i.type,
                    }
                  })
                }),
              ),
              y()(s()(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              y()(s()(e), '_handleSoftLeftClick', function () {
                var t = U.a.findDOMNode(e._searchBoxRef)
                t && t instanceof window.HTMLElement && t.querySelector('input').focus()
              }),
              y()(s()(e), '_handleSearchBoxSubmit', function (t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  a = e.props.analytics
                a.scribe({ section: 'trendsplus', action: 'search' }),
                  r &&
                    e.setState({ shouldClearTimelineCache: !0 }, function () {
                      e.setState({ shouldClearTimelineCache: !1 })
                    })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchSavedSearchesIfNeeded)().catch(t({}))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.history,
                    r = t.location,
                    a = t.mode,
                    o = t.query,
                    c = t.querySrc,
                    i = t.searchFilters,
                    s = t.searchFocused,
                    u = (t.searchType, t.vertical),
                    l = this.state.shouldClearTimelineCache,
                    d = !!o,
                    p = d ? et({ query: o }) : $e,
                    f = {
                      history: n,
                      location: r,
                      query: o,
                      querySrc: c,
                      searchFilters: i,
                      searchFocused: s,
                      vertical: u,
                      shouldClearTimelineCache: l,
                    },
                    h = this._renderPrimaryContent(f),
                    m = { initialValue: o, mode: a, onSubmit: this._handleSearchBoxSubmit, searchFilters: i }
                  return d
                    ? v.a.createElement(
                        W.b,
                        { data: this._getScribeData(o, c, i, a, u) },
                        v.a.createElement(
                          H.a,
                          null,
                          null,
                          v.a.createElement(Ce.a, null, function (t) {
                            var r = t.windowWidth,
                              a = g.a.isTwoColumnLayout(r),
                              c = e._renderRightControl({ isTwoColumn: a, searchFocused: s })
                            return v.a.createElement(me.a, {
                              backLocation: '/explore',
                              composeOptions: Qe(o),
                              documentTitle: p,
                              history: n,
                              primaryContent: h,
                              rightControl: c,
                              searchBoxOptions: m,
                              searchBoxRef: e._setSearchBoxRef,
                              secondaryBar: e._renderModesBar(),
                              sidebarContent: e._renderSidebarContent(),
                              title: o,
                              withBottomLoginSignupBar: !0,
                              withSearchBox: !0,
                            })
                          }),
                          ve.b.isKaiOS() &&
                            v.a.createElement(ye.a, { leftText: ot, onLeftClick: this._handleSoftLeftClick }),
                        ),
                      )
                    : Q.a[this._searchHomePageVariation] && !this._loggedInUserId
                    ? v.a.createElement(q.a, { to: '/' })
                    : v.a.createElement(q.a, { to: '/explore' })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(dt, 'contextType', Se.a)
      var pt = L(dt)
      t.default = pt
    },
    '1zbE': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return u
        }),
        n.d(t, 'c', function () {
          return l
        })
      n('yH/f')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        c = n('3XMw'),
        i = n.n(c),
        s = 'phone_email',
        u = Object.freeze({ LogIn: 'login', SignUp: 'signup' }),
        l = a.a.createElement(
          i.a.I18NFormatMessage,
          { $i18n: 'c4d3d078' },
          a.a.createElement(o.b, { link: 'https://twitter.com/tos' }, i.a.c8c5faad),
          a.a.createElement(o.b, { link: 'https://twitter.com/privacy' }, i.a.ba5b7ecb),
          a.a.createElement(o.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-cookies' }, i.a.f4fe46c3),
        )
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        c = n('Ud88'),
        i = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        u = s.fetchQueryDeduped,
        l = s.fetchQuery
      e.exports = function (e, t, n) {
        i()
        var s,
          d = c(),
          p = t.fetchKey,
          f = t.fetchPolicy,
          h = t.source,
          m = t.variables,
          y = t.networkCacheConfig,
          b = o(e, m, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && r(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: u(d, b.request.identifier, function () {
                return d === t.environment && null != h
                  ? d.executeWithSource({ operation: b, source: h })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: f,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var v = l(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != h && d === t.environment ? h.ifEmpty(v) : (t.environment, v),
            fetchKey: p,
            fetchPolicy: f,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(s)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        o = r.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          a(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '3X8/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = n('k49u'),
        i = n('LVU8'),
        s = n('3XMw'),
        u = n.n(s).a.i1801686,
        l =
          ((r = {}),
          o()(r, c.a.GenericForbidden, { toast: Object(i.a)() }),
          o()(r, c.a.InvalidRequestUrl, { toast: { text: u, withClearButton: !0 } }),
          o()(r, 'showToast', !0),
          r)
    },
    '3rEN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return H
      })
      n('yH/f')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('Hde2'),
        c = n('bojF'),
        i = n('3XMw'),
        s = n.n(i),
        u = n('lUZE'),
        l = n('1f8Q'),
        d = n('72nz'),
        p = n('rHpw'),
        f = n('MWbm'),
        h = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(h),
        y = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        b = n('iCMz'),
        v = n('Rp9C'),
        g = n('Irs7'),
        S = n('htQn'),
        _ = n('t62R')
      function O(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var E,
        P = s.a.d228a9a0,
        k = s.a.jae84f3a,
        C = { section: 'logged_out_search', component: 'trend' },
        I = function (e) {
          var t = e.position,
            n = e.trend,
            r = Object(g.b)(),
            o = a.a.useMemo(
              function () {
                return [w(w({}, v.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          a.a.useEffect(
            function () {
              r.scribe(w(w({}, C), {}, { action: 'impression', data: { items: o } }))
            },
            [r, o],
          )
          var c = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return a.a.createElement(
            S.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return r.scribe(w(w({}, C), {}, { action: 'click', data: { items: o } }))
              },
              withInteractiveStyling: !1,
            },
            a.a.createElement(_.b, { color: 'gray700', key: n, link: c, style: R.searchTrend }, n),
          )
        },
        j = function (e) {
          var t = e.deviceSize,
            n = e.trendResults.slice(0, 5)
          return a.a.createElement(
            f.a,
            {
              accessibilityLabel: k,
              accessibilityRole: 'list',
              style: [R.searchTrends, 'desktop' === t && R.searchTrendsWide],
            },
            n.map(function (e, t) {
              return a.a.createElement(I, { key: e, position: t, trend: e })
            }),
            a.a.createElement(
              S.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              a.a.createElement(_.b, { link: '/explore', style: R.searchTrend }, P),
            ),
          )
        },
        R = p.a.create(function (e) {
          return {
            bottomBarForMobile: {
              backgroundColor: e.colors.navigationBackground,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              padding: 'calc('.concat(e.spaces.space16, ' + ').concat(p.a.iPhoneOffsetBottom, ')'),
            },
            searchHomeFooter: { backgroundColor: e.colors.gray50 },
            searchHomeFooterMobile: {
              marginBottom: 'calc('.concat(e.spaces.space56, ' + ').concat(e.spaces.space4, ')'),
            },
            searchRoot: { flex: 1, alignItems: 'center', marginTop: '25vh', zIndex: 1 },
            searchRootMobile: { marginBottom: '55vh' },
            searchBox: {
              height: e.spaces.space40,
              width: 'calc(100% - '.concat(e.spaces.space32, ')'),
              marginBottom: e.spaces.space12,
              zIndex: 1,
            },
            searchBoxWide: { width: 'calc('.concat(e.spaces.space48, ' * 10)') },
            searchNavBar: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space2, ')'),
            },
            searchNavButtons: { flexDirection: 'row' },
            searchTrend: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space8 },
            searchTrends: {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: 'calc(100% - '.concat(e.spaces.space32, ')'),
            },
            searchTrendsWide: { width: 'calc('.concat(e.spaces.space48, ' * 10)') },
            twitterIconSearch: {
              alignSelf: 'center',
              color: e.colors.brandColor,
              marginBottom: 'calc('.concat(e.spaces.space36, ' + ').concat(e.spaces.space2, ')'),
              height: e.spaces.space48,
            },
          }
        }),
        x = function (e) {
          var t = e.deviceSize,
            n = e.scribeNamespace,
            r = e.trendResults,
            i = function () {
              return a.a.createElement(b.a, {
                buttonSize: 'large',
                loginButtonType: 'primaryOutlined',
                scribeNamespace: w(w({}, n), {}, { component: 'signup_callout', element: 'form', section: 'front' }),
                signupButtonType: 'primaryFilled',
              })
            }
          return a.a.createElement(
            a.a.Fragment,
            null,
            'desktop' !== t
              ? a.a.createElement(o.a, { style: R.bottomBarForMobile }, i())
              : a.a.createElement(
                  f.a,
                  { style: R.searchNavBar },
                  a.a.createElement(f.a, { style: R.searchNavButtons }, i()),
                ),
            a.a.createElement(
              f.a,
              { style: [R.searchRoot, 'desktop' !== t && R.searchRootMobile] },
              a.a.createElement(u.a, { style: R.twitterIconSearch }),
              a.a.createElement(
                f.a,
                { style: [R.searchBox, 'desktop' === t && R.searchBoxWide] },
                a.a.createElement(d.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
              ),
              r && a.a.createElement(j, { deviceSize: t, trendResults: r }),
            ),
            a.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                f.a,
                { style: [R.searchHomeFooter, 'desktop' !== t && R.searchHomeFooterMobile] },
                a.a.createElement(y.a, { align: 'center' }),
              ),
            ),
          )
        },
        T = s.a.g0ff1ca8,
        D = s.a.g3aa4a89,
        L = p.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: p.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        A = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              f.a,
              { style: [R.searchRoot, 'desktop' !== t && R.searchRootMobile, L.searchRootWithBanner] },
              a.a.createElement(u.a, { style: R.twitterIconSearch }),
              a.a.createElement(
                f.a,
                { style: [R.searchBox, 'desktop' === t && R.searchBoxWide] },
                a.a.createElement(d.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
              ),
              n && a.a.createElement(j, { deviceSize: t, trendResults: n }),
            ),
            a.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                o.a,
                { style: L.bottomBarBanner },
                a.a.createElement(l.a, { buttonSize: 'large', fullWidth: !0, subtext: D, text: T }),
              ),
            ),
          )
        },
        B = n('n0Rl'),
        F = n('RgK2'),
        z = n.n(F),
        N = n('kGix'),
        H = (n('enFi'), Object.freeze({ original: 'original', banner: 'banner', split: 'split' })),
        M = void 0 !== E ? E : (E = n('x1T0')),
        U = Object(B.b)(M, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.deviceSize,
          n = e.scribeNamespace,
          r = e.variation
        return a.a.createElement(U, {
          render: function (e) {
            var o,
              c = e.data,
              i = e.fetchStatus,
              s =
                (e.retry,
                i === N.a.LOADED
                  ? null == c || null === (o = c.logged_out_trends_list) || void 0 === o
                    ? void 0
                    : o.trends
                  : void 0)
            return r === H.original
              ? a.a.createElement(x, { deviceSize: t, scribeNamespace: n, trendResults: s })
              : r === H.banner
              ? a.a.createElement(A, { deviceSize: t, trendResults: s })
              : null
          },
          variables: z.a,
        })
      }
    },
    '4ZbN': function (e, t, n) {
      'use strict'
      t.a = {
        deleteRecentSearchesDialog: 'deleteRecentSearchesDialog',
        deleteSavedSearchDialog: 'deleteSavedSearchDialog',
        typeaheadEmptySearch: 'typeaheadEmptySearch',
        typeaheadRecentSearchesHeader: 'typeaheadRecentSearchesHeader',
        typeaheadRecentSearchesItem: 'typeaheadRecentSearchesItem',
        typeaheadSavedSearchesContainer: 'typeaheadSavedSearchesContainer',
        typeaheadSavedSearchesHeader: 'typeaheadSavedSearchesHeader',
        typeaheadSavedSearchesItem: 'typeaheadSavedSearchesItem',
      }
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        S = n.n(g),
        _ = n('3XMw'),
        O = n.n(_),
        w = n('cnVF'),
        E = n('Ukpf'),
        P = n('BTou'),
        k = n('mrHL'),
        C = 'LoginForm_Login_Button',
        I = n('fEA7'),
        j = n.n(I),
        R = n('MWbm'),
        x = n('Irs7'),
        T = n('v6aA'),
        D = n('/yvb'),
        L = n('rHpw')
      function A(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var B = O.a.e919c3bc,
        F = (function (e) {
          p()(n, e)
          var t = A(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_mobileLoginToken', j.a.v1().replace(/-/g, '')),
              v()(l()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), P.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              v()(l()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              v()(l()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              v()(l()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(k.e)(w.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  E.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    r = e.hideSubmitButton,
                    o = e.horizontalLayout,
                    c = e.loginReturnPath,
                    i = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    u = e.submitButtonSize,
                    l = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof c ? c.split('?') : [],
                    f = a()(p, 2),
                    h = f[0],
                    m = f[1],
                    y = encodeURI(h || '/'),
                    b = m ? '?'.concat(m) : '',
                    v = ''.concat('').concat(y).concat(b),
                    g = S.a.createElement(
                      R.a,
                      { style: o && z.horizontalFields },
                      S.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: v }),
                      S.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      S.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      S.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      S.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : S.a.createElement(
                            R.a,
                            { style: o && z.loginButtonContainer },
                            S.a.createElement(
                              D.a,
                              {
                                disabled: i,
                                onPress: this._handleSubmitButtonClick,
                                size: u,
                                style: l,
                                testID: C,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return S.a.createElement(
                    R.a,
                    { style: z.loginForm },
                    S.a.createElement('form', {
                      action: n,
                      children: g,
                      method: 'post',
                      noValidate: !0,
                      onSubmit: this._handleSubmit,
                      ref: this._setFormRef,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      v()(F, 'contextType', T.a),
        v()(F, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: B,
          submitButtonType: 'brandFilled',
        })
      var z = L.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(x.a)(F, { element: 'inline_login_form' })
    },
    '72nz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchBoxContainer', function () {
          return gt
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('hBvt'), n('ho0z'), n('WNMA'), n('KqXw'), n('MvUL'), n('ERkP')),
        S = n.n(g),
        _ = n('+Kfv'),
        O = n('lnti'),
        w = n('wtjx'),
        E = n('rxPX'),
        P = Object(E.a)()
          .propsFromActions(function () {
            return { addQuery: w.a }
          })
          .withAnalytics({ component: 'search_box' }),
        k = n('Hw0q'),
        C = n('3XMw'),
        I = n.n(C),
        j = n('8jkQ'),
        R = n('u3ZE'),
        x = n('rRIm'),
        T = n('Rp9C'),
        D = n('RhWx'),
        L = n.n(D),
        A =
          (n('z84I'),
          n('vrRf'),
          n('2G9S'),
          n('5BYb'),
          n('jQ3i'),
          n('x4t0'),
          n('M+/F'),
          n('wFPu'),
          n('vfdX'),
          n('hqKg')),
        B = n('3IPs'),
        F = n('M0jS'),
        z = n('G6rE'),
        N = n('k49u'),
        H = n('J4ZH'),
        M = n('0KEI'),
        U = n('v4XE'),
        q = n('kGix')
      function V(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var K = function (e) {
          return (
            Object(N.c)(e, N.a.GenericUserNotFound) ||
            Object(N.c)(e, N.a.OtherUserSuspended) ||
            Object(N.c)(e, N.a.AddressBookLookupNotFound)
          )
        },
        Q = Object(E.a)()
          .propsFromState(function () {
            var e = Object(A.createSelector)(w.g, z.e.selectFetchStatuses, function (e, t) {
                var n = Object(O.a)(
                  e.map(function (e) {
                    var n,
                      r = null === (n = e.user) || void 0 === n ? void 0 : n.id
                    return r && t[r] ? { id: r, fetchStatus: t[r] } : void 0
                  }),
                )
                return Object(H.a)(n, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(A.createSelector)(e, function (e) {
                return (e[q.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(A.createSelector)(e, z.e.selectErrors, function (e, t) {
                return (e[q.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return K(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              r = Object(A.createSelector)(e, z.e.selectErrors, function (e, t) {
                var n = (e[q.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !K(t[n] || {})
                })
                return (e[q.a.LOADING] || []).length > 0
                  ? q.a.LOADING
                  : (e[q.a.LOADED] || []).length > 0
                  ? q.a.LOADED
                  : n.length > 0
                  ? q.a.FAILED
                  : q.a.NONE
              }),
              a = Object(A.createSelector)(w.g, function (e) {
                return e.map(function (e) {
                  return W(W({}, e), {}, { category: B.b.RecentSearch })
                })
              }),
              o = Object(A.createSelector)(U.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: B.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: w.e,
              recentSearches: a,
              usersFetchStatus: r,
              invalidRecentSearchUserIds: n,
              failedRecentSearchUserIds: t,
              savedSearches: o,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              n = e.invalidRecentSearchUserIds,
              r = e.isRecentSearchDataLoaded,
              a = e.recentSearches,
              o = e.savedSearches,
              c = e.usersFetchStatus,
              i = !a.filter(function (e) {
                var t = e.user
                return t && n.indexOf(t.id) < 0
              }).length,
              s = c !== q.a.LOADING && r && i ? q.a.LOADED : c
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: n,
              recentSearches: a,
              fetchStatus: s,
              savedSearches: o,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: w.b,
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: U.a,
              fetchRecentSearchesIfNeeded: w.c,
              fetchSavedSearchesIfNeeded: U.b,
              fetchUsersIfNeeded: z.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: F.b.fetchManyIfNeeded,
              removeQuery: w.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        G = n('sYRn'),
        X = n('v//M'),
        Z = n('7nmT'),
        J = n.n(Z),
        Y = (n('jQ/y'), n('m3Bd')),
        $ = n.n(Y),
        ee = n('hOZg'),
        te = n('5T6p'),
        ne = n('MWbm'),
        re = n('/yvb'),
        ae = n('rHpw')
      function oe(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ce = I.a.e68b09b4,
        ie = (function (e) {
          p()(n, e)
          var t = oe(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.onRemove,
                    r = $()(e, ['id', 'onRemove'])
                  return t
                    ? S.a.createElement(
                        ne.a,
                        { style: se.root },
                        S.a.createElement(te.a, r),
                        S.a.createElement(re.a, {
                          accessibilityLabel: ce,
                          icon: S.a.createElement(ee.a, null),
                          onPress: n,
                          size: 'small',
                          style: se.button,
                          type: 'brandText',
                        }),
                      )
                    : null
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.image,
                    r = e.supportText,
                    a = e.title
                  return {
                    category: B.b.RecentSearch,
                    query: t,
                    recentSearchType: B.a.Event,
                    queryMetadata: { id: t, image: n, title: a, supportText: r },
                  }
                },
              },
            ]),
            n
          )
        })(S.a.PureComponent),
        se = ae.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        ue = ie,
        le = n('j7Bv'),
        de = n('5mJL'),
        pe = n('t62R'),
        fe = n('EHV7')
      function he(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var me = S.a.createElement(ee.a, null),
        ye = I.a.e68b09b4,
        be = (function (e) {
          p()(n, e)
          var t = he(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.id,
                    r = e.name,
                    a = e.onRemove,
                    o = e.withNewTypeaheadUI
                  if (!n) return null
                  var c = o ? 'xxxLarge' : 'xLarge',
                    i = S.a.createElement(le.a, { Icon: fe.a, color: 'primary', size: c, style: ve.searchIcon })
                  return S.a.createElement(
                    de.a,
                    { avatarCell: i, avatarSize: c, cellStyle: ve.bodyColumn },
                    S.a.createElement(
                      ne.a,
                      null,
                      S.a.createElement(pe.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, r),
                      S.a.createElement(pe.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    S.a.createElement(re.a, {
                      accessibilityLabel: ye,
                      icon: me,
                      onPress: a,
                      size: 'small',
                      type: 'brandText',
                    }),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.id,
                    r = e.name
                  return n
                    ? {
                        category: B.b.RecentSearch,
                        query: n,
                        recentSearchType: B.a.Topic,
                        queryMetadata: { id: n, name: r, description: t },
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(S.a.Component),
        ve = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ge = function (e, t) {
          return z.e.select(e, t.id)
        },
        Se = function (e, t) {
          return Object(F.c)(e, t.id)
        },
        _e = Object(E.a)().propsFromState(function () {
          return { user: ge, userSpace: Se }
        }),
        Oe = n('v6aA'),
        we = n('IMA+')
      function Ee(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Pe = S.a.createElement(ee.a, null),
        ke = I.a.e68b09b4,
        Ce = I.a.fd06b02f,
        Ie = (function (e) {
          p()(n, e)
          var t = Ee(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              v()(l()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.index,
                  r = t.onItemClick,
                  a = e.searchItemData
                a && r(a, n)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.style,
                    r = e.user,
                    a = e.userSpace,
                    o = e.withNewTypeaheadUI,
                    c = this.context.featureSwitches
                  if (!r) return null
                  var i = a && c.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? a : void 0
                  i && (i.accessibilityLabel = Ce({ screenName: r.screen_name }))
                  var s = S.a.createElement(re.a, {
                    accessibilityLabel: ke,
                    icon: Pe,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return S.a.createElement(we.a, {
                    avatarSize: 'xLarge',
                    avatarUri: r.profile_image_url_https,
                    decoration: s,
                    displayMode: o ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: i,
                    screenName: r.screen_name,
                    style: n,
                    userId: r.id_str,
                    withInteractiveStyling: !1,
                    withLink: !1,
                    withUsernameCenterAligned: !0,
                  })
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  return this.props.user
                    ? {
                        category: B.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: B.a.User,
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      v()(Ie, 'contextType', Oe.a)
      var je = _e.forwardRef(Ie),
        Re = n('oQhu'),
        xe = n('hiGS'),
        Te = n('VwDm')
      function De(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Le = S.a.createElement(ee.a, null),
        Ae = S.a.createElement(xe.a, null),
        Be = Object(Re.a)(function (e) {
          return e === B.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Fe = Object(Re.a)(function (e) {
          return e === B.b.SavedSearch ? Ae : Le
        }),
        ze = (function (e) {
          p()(n, e)
          var t = De(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_getButtonType', function () {
                var t = e.props.category
                return Be(t)
              }),
              v()(l()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Fe(t)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.query,
                    r = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    a = S.a.createElement(le.a, { Icon: Te.a, color: 'neutral', size: r, style: Ne.searchIcon })
                  return S.a.createElement(
                    de.a,
                    { avatarCell: a, avatarSize: r, cellStyle: Ne.bodyColumn },
                    S.a.createElement(pe.b, { numberOfLines: 1, withHashflags: !0 }, n),
                    S.a.createElement(re.a, {
                      accessibilityLabel: '',
                      icon: this._getRemoveIcon(),
                      onPress: t,
                      size: 'small',
                      type: this._getButtonType(),
                    }),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.category
                  return {
                    category: t,
                    query: e.query,
                    recentSearchType: t === B.b.RecentSearch ? B.a.Keyword : void 0,
                  }
                },
              },
            ]),
            n
          )
        })(S.a.Component),
        Ne = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        He = ze,
        Me = n('htQn')
      function Ue(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var qe = (function (e) {
        p()(n, e)
        var t = Ue(n)
        function n(e, r) {
          var a
          return (
            c()(this, n),
            (a = t.call(this, e, r)),
            v()(l()(a), '_renderSearchItem', function () {
              var e = a.props,
                t = e.index,
                n = e.item,
                r = e.onItemClick
              return n.keyword
                ? S.a.createElement(He, {
                    category: n.category,
                    onRemove: a._handleOnRemove,
                    query: n.keyword.query,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.user
                ? S.a.createElement(je, {
                    id: n.user.id || '',
                    index: t,
                    onItemClick: r,
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    style: Ve.itemPadding,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.topic
                ? S.a.createElement(be, {
                    description: n.topic.description || '',
                    id: n.topic.id,
                    name: n.topic.name || '',
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.event
                ? S.a.createElement(ue, {
                    id: n.event.id,
                    image: n.event.image || { url: '', height: 0, width: 0 },
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    supportText: n.event.supportText || '',
                    title: n.event.title || '',
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : null
            }),
            v()(l()(a), '_handleItemRef', function (e) {
              a._itemRef = e
            }),
            v()(l()(a), '_handleOnRemove', function (e) {
              var t = a.props,
                n = t.index,
                r = t.item
              ;(0, t.onRemoveQuery)(r, n), e.stopPropagation()
            }),
            v()(l()(a), '_handleOnClick', function () {
              var e = a.props,
                t = e.index,
                n = e.item,
                r = e.onItemClick
              n.user || (a.searchItemData && r(a.searchItemData, t))
            }),
            (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
              'responsive_web_account_search_readability_enabled',
            )),
            a
          )
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  n = e.item,
                  r = e.testID
                return S.a.createElement(
                  _.a,
                  { viewType: 'search_item' },
                  S.a.createElement(
                    Me.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: { selected: !!t },
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [Ve.root, t && Ve.focused, !(null != n && n.user) && Ve.itemPadding],
                      testID: r,
                    },
                    this._renderSearchItem(),
                  ),
                )
              },
            },
            {
              key: 'searchItemData',
              get: function () {
                return this._itemRef ? this._itemRef.searchItemData : null
              },
            },
          ]),
          n
        )
      })(S.a.Component)
      v()(qe, 'contextType', Oe.a)
      var Ve = ae.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        We = qe,
        Ke = n('4ZbN'),
        Qe = n('eb3s'),
        Ge = n('MXDK')
      function Xe(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Je(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ye = I.a.ee295fbe,
        $e = { headline: I.a.f45c425f, text: I.a.caae4dd9, confirmButtonLabel: I.a.dbd5d40f },
        et = I.a.a8d68f61,
        tt = I.a.c6530778,
        nt = I.a.e047b8fa,
        rt = ['user', 'keyword'],
        at = (function (e) {
          p()(n, e)
          var t = Je(n)
          function n(e, r) {
            var a
            c()(this, n),
              (a = t.call(this, e, r)),
              v()(l()(a), '_withNewTypeaheadUI', !1),
              v()(l()(a), '_getRecentSearchItems', function () {
                var e = a.props,
                  t = e.failedRecentSearchUserIds,
                  n = e.recentSearches,
                  r = a.state.allowedRecentSearchItems,
                  o = n
                    .filter(function (e) {
                      var n = e.user
                      return !n || t.indexOf(n.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return r.includes(e)
                      })
                    })
                return o.length > 15 ? o.slice(0, 15) : o
              }),
              v()(l()(a), '_render', function () {
                var e = a.props,
                  t = e.domId,
                  n = e.savedSearches,
                  r = 0 === a._getNumOfSearchItems(),
                  o = a._getRecentSearchItems()
                return r
                  ? S.a.createElement(
                      ne.a,
                      { style: ot.emptyState, testID: Ke.a.typeaheadEmptySearch },
                      S.a.createElement(pe.b, { align: 'center', color: 'gray700' }, Ye),
                    )
                  : S.a.createElement(
                      ne.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      o.length > 0
                        ? S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              ne.a,
                              { style: ot.header, testID: Ke.a.typeaheadRecentSearchesHeader },
                              S.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, et),
                              S.a.createElement(
                                re.a,
                                { onPress: a._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                nt,
                              ),
                            ),
                            o.map(function (e, t) {
                              return a._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      n.length > 0
                        ? S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              ne.a,
                              {
                                accessibilityHidden: !0,
                                style: [ot.header, ot.borderTop],
                                testID: Ke.a.typeaheadSavedSearchesHeader,
                              },
                              S.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, tt),
                            ),
                            a._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              v()(l()(a), '_renderRecentSearchItem', function (e, t) {
                var n = a.props.ariaDescendantId,
                  r = a.state.focusIndex === t
                return S.a.createElement(We, {
                  domId: r ? n : void 0,
                  index: t,
                  item: e,
                  key: a._chooseKeyType(e, t),
                  onItemClick: a._handleOnItemClick,
                  onRemoveQuery: a._handleRemoveQuery,
                  ref: r ? a._setFocusedItemRef : void 0,
                  testID: Ke.a.typeaheadRecentSearchesItem,
                })
              }),
              v()(l()(a), '_chooseKeyType', function (e, t) {
                return e.keyword
                  ? 'keyword_'.concat(e.keyword.query)
                  : e.user
                  ? 'user_'.concat(e.user.id)
                  : e.topic
                  ? 'topic_'.concat(e.topic.id)
                  : e.event
                  ? 'event_'.concat(e.event.id)
                  : ''.concat(t)
              }),
              v()(l()(a), '_renderSavedSearches', function () {
                var e = a.props,
                  t = e.ariaDescendantId,
                  n = e.savedSearches,
                  r = a.state.focusIndex,
                  o = a._getRecentSearchItems(),
                  c = L()(n)
                return (
                  c.reverse(),
                  S.a.createElement(
                    ne.a,
                    { testID: Ke.a.typeaheadSavedSearchesContainer },
                    c.map(function (e, n) {
                      var c = r === n + o.length
                      return S.a.createElement(We, {
                        domId: c ? t : void 0,
                        index: n,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: a._handleOnItemClick,
                        onRemoveQuery: a._handleRemoveQuery,
                        ref: c ? a._setFocusedItemRef : void 0,
                        testID: Ke.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              v()(l()(a), '_getNumOfSearchItems', function () {
                var e = a.props.savedSearches,
                  t = a._getRecentSearchItems()
                return e.length + t.length
              }),
              v()(l()(a), '_handleUsersRetry', function () {
                a._fetchUsersDetailsIfNeeded()
              }),
              v()(l()(a), '_fetchUsersDetailsIfNeeded', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUsersIfNeeded,
                  r = e.fetchUsersPresenceIfNeeded,
                  o = e.invalidRecentSearchUserIds,
                  c = e.recentSearches,
                  i = a.context,
                  s = i.featureSwitches,
                  u = i.loggedInUserId,
                  l = (function (e, t) {
                    return e
                      .map(function (e) {
                        var t
                        return null == e || null === (t = e.user) || void 0 === t ? void 0 : t.id
                      })
                      .filter(Boolean)
                      .filter(function (e) {
                        return t.indexOf(e) < 0
                      })
                  })(c, o)
                n(l).catch(t({})),
                  u && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && r(l).catch(t({}))
              }),
              v()(l()(a), '_handleRemoveQuery', function (e, t) {
                var n = a.props,
                  r = n.analytics,
                  o = n.removeQuery
                switch (e.category) {
                  case B.b.RecentSearch:
                    var c = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    o(c), a._resetFocus()
                    var i = T.a.forRecentSearchResult(c, t),
                      s = a._handleRemoveAction(e)
                    i && r.scribe({ action: s, data: { items: [i] } })
                    break
                  case B.b.SavedSearch:
                    a.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              v()(l()(a), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              v()(l()(a), '_handleClearAllClick', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              v()(l()(a), '_handleOnClearAllConfirm', function () {
                var e = a.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              v()(l()(a), '_handleOnClearAllCancel', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              v()(l()(a), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.deleteSavedSearch,
                  r = e.savedSearches,
                  o = a.state.savedSearchIdToDelete,
                  c = r.findIndex(function (e) {
                    return e.savedSearchId === o
                  }),
                  i = r[c]
                if (o) {
                  n(o)
                  var s = i && T.a.forSavedSearchResult(i.keyword.query, c)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              v()(l()(a), '_handleOnDeleteSavedSearchCancel', function () {
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              v()(l()(a), '_handleOnItemClick', function (e, t) {
                var n = a.props,
                  r = n.onDismiss
                ;(0, n.onItemClick)(e, t), a._scribeClick(e, t), r && r()
              }),
              v()(l()(a), '_scribeRecentSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.recentSearches
                if (n && n.length) {
                  var r = Object(O.a)(
                    n.map(function (e, t) {
                      return T.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: r } })
                }
              }),
              v()(l()(a), '_scribeSavedSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.savedSearches
                if (n && n.length) {
                  var r = Object(O.a)(
                    n.map(function (e, t) {
                      return T.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: r } })
                }
              }),
              v()(l()(a), '_scribeClick', function (e, t) {
                var n = a.props.analytics
                switch (e.category) {
                  case B.b.SavedSearch:
                    var r = T.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [r] } })
                    break
                  case B.b.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === B.a.User
                          ? { user: { type: B.a.User, id: e.query } }
                          : e.recentSearchType === B.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: Ze(Ze({}, e.queryMetadata), {}, { type: B.a.Event, id: e.query }) }
                          : e.recentSearchType === B.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: Ze(Ze({}, e.queryMetadata), {}, { type: B.a.Topic, id: e.query }) }
                          : { keyword: { type: B.a.Keyword, query: e.query } })
                    var c = o && T.a.forRecentSearchResult(o, t)
                    c && n.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              v()(l()(a), '_setFocusedItemRef', function (e) {
                ;(a._focusedItemRef = e),
                  e &&
                    a._shouldScrollToFocusedItem &&
                    (Object(Ge.c)(a._getScrollParent(), a._getFocusedItem()), (a._shouldScrollToFocusedItem = !1))
              }),
              v()(l()(a), 'hasFocusedItem', function () {
                return a._getNumOfSearchItems() > 0
              }),
              v()(l()(a), 'selectFocusedItem', function () {
                if (a.hasFocusedItem()) {
                  var e = a._focusedItemRef && a._focusedItemRef.searchItemData
                  e && a._handleOnItemClick(e, a.state.focusIndex)
                }
              }),
              v()(l()(a), '_setFocusIndex', function (e, t) {
                var n = a.props.onItemFocusChanged
                ;(a._shouldScrollToFocusedItem = t), a.setState({ focusIndex: e }), n && n()
              }),
              v()(l()(a), '_resetFocus', function () {
                a._setFocusIndex(-1)
              }),
              v()(l()(a), 'focusNext', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  a._setFocusIndex(n, !0)
                }
              }),
              v()(l()(a), 'focusPrevious', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  a._setFocusIndex(n, !0)
                }
              })
            var o,
              i,
              s = a.context.featureSwitches
            return (
              (a.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((o = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (i = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(rt, [o ? 'topic' : '', i ? 'event' : ''])),
              }),
              (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchRecentSearchesIfNeeded,
                    r = e.fetchSavedSearchesIfNeeded,
                    a = e.recentSearches,
                    o = e.savedSearches
                  n(),
                    r().catch(t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((a && a.length) || (o && o.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.recentSearches,
                    r = t.savedSearches
                  e.recentSearches !== n &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== r && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.style,
                    r = this.state,
                    a = r.shouldShowClearAllConfirmationSheet,
                    o = r.shouldShowDeleteSavedSearchConfirmation
                  return S.a.createElement(
                    ne.a,
                    { style: n },
                    S.a.createElement(X.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? S.a.createElement(Qe.a, {
                          confirmButtonLabel: $e.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: $e.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Ke.a.deleteRecentSearchesDialog,
                          text: $e.text,
                        })
                      : null,
                    o
                      ? S.a.createElement(G.a, {
                          onCancel: this._handleOnDeleteSavedSearchCancel,
                          onConfirm: this._handleOnDeleteSavedSearchConfirm,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(Ge.a)(J.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function () {
                  var e = this._focusedItemRef && J.a.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      v()(at, 'contextType', Oe.a)
      var ot = ae.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            borderTop: { borderTopColor: e.colors.borderColor, borderTopStyle: 'solid', borderTopWidth: 1 },
            header: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        ct = Q.forwardRef(at),
        it = 'SearchBox_Search_Input',
        st = n('TnY3'),
        ut = n('GZwR'),
        lt = n('4e/K')
      function dt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ft(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ht = I.a.ib2e46ee,
        mt = I.a.hbc99b02,
        yt = /^(\w+)$/,
        bt = [ut.a.Events, ut.a.Users, ut.a.Topics],
        vt = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        gt = (function (e) {
          p()(n, e)
          var t = ft(n)
          function n(e, r) {
            var o, i
            return (
              c()(this, n),
              (i = t.call(this, e, r)),
              v()(l()(i), '_withNewTypeaheadUI', !1),
              v()(l()(i), '_reorderResults', function (e, t, n, r) {
                return Object(O.a)([e, t.length ? t : void 0, n.length ? n : void 0, r.length ? r : void 0])
              }),
              v()(l()(i), '_renderSearchBoxEmptyState', function (e) {
                return S.a.createElement(ct, a()({}, e, { onItemClick: i._handleSearchItemClick }))
              }),
              v()(l()(i), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  r = e.query,
                  a = e.queryMetadata,
                  o = e.recentSearchType,
                  c = i.props.addQuery
                t === B.b.SavedSearch
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !1, src: R.a.SavedSearchClick })
                  : o === B.a.Keyword
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: R.a.RecentSearchClick })
                  : o === B.a.Event
                  ? (i._routeTransition({ pathname: '/i/events/'.concat(r) }),
                    a && a.title && c({ event: pt(pt({}, a), {}, { id: r, type: B.a.Event }) }))
                  : o === B.a.Topic
                  ? (i._routeTransition({ pathname: '/i/topics/'.concat(r) }),
                    a && a.name && c({ topic: pt(pt({}, a), {}, { id: r, type: B.a.Topic }) }))
                  : n && (i._routeTransition({ pathname: '/'.concat(n) }), c({ user: { id: r, type: B.a.User } }))
              }),
              v()(l()(i), '_handleSearchShortcut', function (e) {
                var t = i._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              v()(l()(i), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = vt(t)
                if (n.match(yt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: ut.b.NoResult,
                    data: { text: mt({ screenName: n }), type: 'user' },
                  }
              }),
              v()(l()(i), '_handleOnDismiss', function () {
                var e = i.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var r = pt(pt({}, t), {}, { state: pt(pt({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(r)
                }
              }),
              v()(l()(i), '_handleOnFocus', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  r = n.location,
                  a = r.state || {}
                if (!a.searchFocused) {
                  var o = pt(pt({}, r), {}, { state: pt(pt({}, a), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), n.push(o)
                }
              }),
              v()(l()(i), '_handleChange', function (e) {
                i.setState({ query: e })
              }),
              v()(l()(i), '_handleTypeaheadSubmit', function () {
                var e = i.state,
                  t = e.items,
                  n = e.query,
                  r = i.props.analytics
                ;/^\s*$/.test(n) ||
                  (r.scribe({
                    action: 'search',
                    data: { items: T.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  i._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              v()(l()(i), '_handleItemClick', function (e, t) {
                var n = i.props.addQuery,
                  r = i.state.query
                switch (e.type) {
                  case ut.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: B.a.User } })
                    i._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case ut.b.Topic:
                  case ut.b.Hashtag:
                    i._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: R.a.TypeaheadClick })
                    break
                  case ut.b.Event:
                    e.data && e.data.url
                      ? i._routeTransition({ pathname: j.b.parseInternalUrl(e.data.url) })
                      : i._submitQuery({ query: e.data.topic, src: R.a.TypeaheadClick })
                    break
                  case ut.b.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? i._routeTransition({ pathname: '/'.concat(vt(r)) })
                      : 'topic' === a &&
                        i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: R.a.TypeaheadClick })
                }
              }),
              v()(l()(i), '_handleItemsChanged', function (e) {
                i.setState({ items: e })
              }),
              v()(l()(i), '_routeTransition', function (e) {
                var t = e.params,
                  n = e.pathname,
                  r = e.query,
                  a = e.src,
                  o = i.props,
                  c = o.history,
                  s = o.location,
                  u = pt(
                    pt({}, s),
                    {},
                    {
                      pathname: n,
                      search: '',
                      query: t || (r ? { q: r, src: a } : {}),
                      state: pt(pt({}, s.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                c.replace(u)
              }),
              v()(l()(i), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  r = void 0 !== n && n,
                  a = e.src,
                  o = void 0 === a ? R.a.Typed : a,
                  c = i.props,
                  s = c.addQuery,
                  u = c.mode,
                  l = c.onSubmit,
                  d = c.searchFilters,
                  p = c.searchRoute
                ;(l && l(t, o, i.state.lastSubmittedQuery === t), r) && s({ keyword: { query: t, type: B.a.Keyword } })
                var f = Object(B.g)({ query: t, querySrc: o, mode: u, searchFilters: d })
                i._routeTransition({ pathname: p, params: f, src: o }), i.setState({ lastSubmittedQuery: t })
              }),
              v()(l()(i), '_setInputRef', function (e) {
                i._inputRef = e
              }),
              (i.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(k.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
              }),
              (i._withNewTypeaheadUI = i.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(x.b)(this._handleSearchShortcut))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unregisterSearchShortcutHandler && this._unregisterSearchShortcutHandler()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.forceVdlDisable,
                    r = t.history,
                    a = t.isCompact,
                    o = t.isInSidebar,
                    c = t.isOnHomepage,
                    i = t.location,
                    s = t.placeholder,
                    u = this.state.query,
                    l = r.location.state || {},
                    d = (i.state || {}).searchPrefill,
                    p = this.props.initialValue || d,
                    f = !!i.state && !!i.state.searchFocused
                  return (
                    l.searchFocused &&
                      (e = this.context.featureSwitches.isTrue(
                        'responsive_web_search_reorder_typeahead_results_enabled',
                      )),
                    S.a.createElement(
                      _.a,
                      { viewType: 'search_field' },
                      S.a.createElement(
                        ne.a,
                        { style: St.root },
                        S.a.createElement(lt.default, {
                          filter: bt,
                          forceVdlDisable: n,
                          getTopicExactMatch: u ? ut.f : void 0,
                          getUserExactMatch: u ? this._getUserExactMatch : void 0,
                          initialValue: p,
                          inputStyle: St.input,
                          isCompact: a,
                          isInSidebar: o,
                          isOnHomepage: c,
                          onDismiss: this._handleOnDismiss,
                          onFocus: this._handleOnFocus,
                          onItemClick: this._handleItemClick,
                          onItemsChanged: this._handleItemsChanged,
                          onQueryChange: this._handleChange,
                          onSubmit: this._handleTypeaheadSubmit,
                          orderResults: e ? this._reorderResults : void 0,
                          placeholder: s,
                          ref: this._setInputRef,
                          renderEmptyState: this._renderSearchBoxEmptyState,
                          rounded: !0,
                          shouldAutoFocus: f,
                          shouldClearOnSelect: !0,
                          shouldDeferPrefetch: !0,
                          source: ut.d.SearchBox,
                          testID: it,
                          withFixedPositioning: !0,
                          withFocusStyling: !0,
                          withSectionDivider: !this._withNewTypeaheadUI,
                        }),
                      ),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      v()(gt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: ht,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        v()(gt, 'contextType', Oe.a)
      var St = ae.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(st.a)(P(gt))
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'd', function () {
          return u
        }),
        n.d(t, 'e', function () {
          return p
        })
      n('yH/f')
      var r = n('SrIh'),
        a = n('JbbX'),
        o = 1e3,
        c = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function i(e) {
        var t = Object(a.a)(e)
        return t
          ? l(t)
            ? d(t)
              ? t[1]
                ? c.AcceptAllCookies
                : t[2]
                ? c.RefuseNonEssentialCookies
                : (Object(r.a)('Invalid consent signal state'), c.Invalid)
              : c.NotSet
            : c.Invalid
          : c.NotSet
      }
      function s(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function u(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function l(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(a.a)(e)
        return !t || !l(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    Chb3: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('jQ3i'), n('ERkP')),
        c = n.n(o),
        i = n('Hde2'),
        s = n('H1k/'),
        u = n('Ty5D'),
        l = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(u.h)(),
          t = c.a.useState(function () {
            return d(e.pathname)
          }),
          n = a()(t, 2),
          r = n[0],
          o = n[1]
        return (
          c.a.useEffect(
            function () {
              o(d(e.pathname))
            },
            [o, e],
          ),
          r
        )
      }
      t.a = Object(l.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = p()
        return !e.hideCookieBannerPicker && t ? c.a.createElement(i.a, null, c.a.createElement(s.a, null)) : null
      })
    },
    Ds5i: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      n('M+/F'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          if (!e) return !1
          var t = (0, a.default)(e)
          return 1 === t.length && t[0] === e.slice(1)
        })
      var a = r(n('nmVb'))
      e.exports = t.default
    },
    'H1k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return oe
      })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        c = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        i = n.n(c),
        s = n('ddV6'),
        u = n.n(s),
        l = n('AS3p'),
        d = n('KUGV'),
        p = n('Irs7'),
        f = n('MWbm'),
        h = n('t62R'),
        m = n('cHvH'),
        y = n('rHpw'),
        b = n('/yvb'),
        v = n('3XMw'),
        g = n.n(v)
      function S(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O = g.a.d8817e36,
        w = g.a.b9288ee6,
        E = g.a.i1390ec2,
        P = { page: 'cookie_compliance_banner' }
      function k() {
        var e = a.a.createElement(
          g.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          a.a.createElement(
            h.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            g.a.id7ef73f,
          ),
        )
        return a.a.createElement(I, { body: e, title: E })
      }
      function C(e) {
        var t = a.a.createElement(
          g.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          a.a.createElement(
            h.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            g.a.gfb2ba0f,
          ),
        )
        return a.a.createElement(I, { body: t, title: E })
      }
      function I(e) {
        return a.a.createElement(
          f.a,
          { style: R.cookieComplianceMessageWrap },
          a.a.createElement(h.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          a.a.createElement(
            h.b,
            { color: 'buttonWhite', size: 'subtext2', style: R.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var j = a.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          a.a.useEffect(
            function () {
              n.scribe(_(_({}, P), {}, { action: 'impression' }))
            },
            [n],
          )
          var r = (function () {
              var e = a.a.useState(!1),
                t = u()(e, 2),
                n = t[0],
                r = t[1],
                o = Object(p.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(_(_({}, P), {}, { action: 'click', element: 'expand_message' })), r(!0)
                },
              }
            })(),
            c = r.expand,
            i = r.isExpanded,
            s = (function () {
              var e = Object(p.b)(),
                t = a.a.useContext(o.a).featureSwitches,
                n = a.a.useState(function () {
                  return l.e(t) && !Object(d.a)()
                }),
                r = u()(n, 2),
                c = r[0],
                i = r[1]
              return {
                isBannerOpen: c,
                acceptAllCookies: function () {
                  e.scribe(_(_({}, P), {}, { action: 'click', element: 'accept_all' })), l.b(t), i(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(_(_({}, P), {}, { action: 'click', element: 'refuse_non_essential' })), l.d(t), i(!1)
                },
              }
            })(),
            h = s.acceptAllCookies,
            v = s.isBannerOpen,
            g = s.refuseNonEssentialCookies
          return v
            ? a.a.createElement(m.a, null, function (e) {
                var n = e.windowWidth < y.a.theme.breakpoints.xLarge
                return a.a.createElement(
                  f.a,
                  { ref: t, style: [R.root, n && R.rootNarrow] },
                  i ? a.a.createElement(k, null) : a.a.createElement(C, { onExpand: c }),
                  a.a.createElement(
                    f.a,
                    { style: [R.buttonContainer, n && R.buttonContainerNarrow] },
                    a.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: h,
                        size: 'medium',
                        style: [R.ctaButton, n && R.ctaButtonNarrow],
                        type: y.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      O,
                    ),
                    a.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: g,
                        size: 'medium',
                        style: [R.ctaButton, n && R.ctaButtonNarrow],
                        type: y.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      w,
                    ),
                  ),
                )
              })
            : null
        }),
        R = y.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.xSmall,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              backgroundColor: e.colors.buttonBlack,
            },
            rootNarrow: {
              flexDirection: 'column',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingTop: e.spaces.space20,
              backgroundColor: e.colors.buttonBlack,
            },
            buttonContainer: {
              flexDirection: 'column',
              marginVertical: e.spaces.space16,
              marginLeft: e.spaces.space20,
            },
            buttonContainerNarrow: {
              width: '100%',
              maxWidth: 550,
              marginLeft: 0,
              flexDirection: 'column',
              flexWrap: 'wrap',
            },
            ctaButton: {
              height: e.spaces.space40,
              marginBottom: e.spaces.space8,
              width: 420,
              flexGrow: 0,
              flexShrink: 0,
            },
            ctaButtonNarrow: { marginLeft: 0, width: '100%' },
            cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 },
            cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 },
            background: { backgroundColor: e.colors.buttonBlack },
          }
        }),
        x = (n('OZaJ'), n('97Jx')),
        T = n.n(x),
        D = n('VrFO'),
        L = n.n(D),
        A = n('Y9Ll'),
        B = n.n(A),
        F = n('1Pcy'),
        z = n.n(F),
        N = n('5Yy7'),
        H = n.n(N),
        M = n('N+ot'),
        U = n.n(M),
        q = n('AuHH'),
        V = n.n(q),
        W = (n('hBvt'), n('RqPI')),
        K = n('rxPX'),
        Q = Object(K.a)().propsFromState(function () {
          return { currentCountry: W.y }
        }),
        G = n('cnVF'),
        X = n('mrHL'),
        Z =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          })
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
          var n,
            r = V()(e)
          if (t) {
            var a = V()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return U()(this, n)
        }
      }
      var Y = g.a.ia5e7487,
        $ = (function (e) {
          H()(n, e)
          var t = J(n)
          function n(e, r) {
            var o
            L()(this, n),
              (o = t.call(this, e, r)),
              i()(z()(o), 'state', { euWarningIsOpen: !1 }),
              i()(z()(o), '_renderMessage', function () {
                return a.a.createElement(
                  h.b,
                  { color: 'white', size: 'subtext2' },
                  a.a.createElement(
                    g.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    a.a.createElement(
                      h.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: ee.link,
                      },
                      g.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              i()(z()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(X.e)(G.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var c = o.props.currentCountry,
              s = o.context.featureSwitches,
              u = s.getArrayValue('responsive_web_eu_countries', []),
              l = Object(X.d)({ featureSwitches: s, cookieName: G.k })
            return (o.state = { euWarningIsOpen: !!c && Z(u, c, l) }), o
          }
          return (
            B()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? a.a.createElement(m.a, null, function (t) {
                        var n = t.windowWidth < y.a.theme.breakpoints.medium
                        return a.a.createElement(
                          f.a,
                          { ref: e.props.innerRef, style: [ee.root, n && ee.rootNarrow] },
                          e._renderMessage(),
                          a.a.createElement(
                            b.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [ee.closeButton, n && ee.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            Y,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(a.a.Component)
      i()($, 'contextType', o.a)
      var ee = y.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              backgroundColor: e.colors.gray1100,
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spaces.space20,
            },
            rootNarrow: { flexDirection: 'column' },
            container: { alignItems: 'center', flexShrink: 1 },
            closeButton: { marginLeft: e.spaces.space12, marginTop: 0, flexGrow: 0, flexShrink: 0 },
            closeButtonNarrow: { marginLeft: 0, marginTop: e.spaces.space12, width: '100%' },
            link: { textDecorationLine: 'underline' },
          }
        }),
        te = a.a.forwardRef(function (e, t) {
          return a.a.createElement($, T()({}, e, { innerRef: t }))
        }),
        ne = Q.forwardRef(te),
        re = n('+d3d')
      function ae(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = a.a.useCallback(
            Object(re.a)(function (t) {
              if (e)
                if (t) {
                  var n = t.getBoundingClientRect()
                  n && e(n)
                } else e(null)
            }, t),
            [e, t],
          )
        return a.a.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var r,
                a = n.bind(null, t)
              return (
                a(),
                window.addEventListener('resize', a),
                t && (r = new ResizeObserver(a)).observe(t),
                function () {
                  window.removeEventListener('resize', a), r && r.disconnect(), n.cancel()
                }
              )
            }
          },
          [e, n],
        )
      }
      function oe(e) {
        var t,
          n = a.a.useContext(o.a).featureSwitches,
          r =
            ((t = e.onHeightChange),
            ae(
              a.a.useMemo(
                function () {
                  return 'function' == typeof t
                    ? function (e) {
                        t(e ? e.height : null)
                      }
                    : void 0
                },
                [t],
              ),
            ))
        return n.isTrue('responsive_web_cookie_compliance_banner_enabled')
          ? a.a.createElement(j, { ref: r })
          : a.a.createElement(ne, { ref: r })
      }
    },
    L7to: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Q
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('z84I'), n('ho0z'), n('MvUL'), n('KqXw'), n('jQ3i'), n('x4t0'), n('vrRf'), n('uFXj'), n('ERkP')),
        v = n.n(b),
        g = n('3XMw'),
        S = n.n(g),
        _ = n('RxYA'),
        O = (n('yH/f'), Object.freeze({ People: 'People', Location: 'Location' })),
        w = 'searchFiltersAdvancedSearch',
        E = n('MWbm'),
        P = n('Irs7'),
        k = n('v6aA'),
        C = n('fyvP'),
        I = n('rC8y'),
        j = n('rHpw'),
        R = n('3A2y'),
        x = n('Zkey')
      function T(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function L(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = S.a.j622effd,
        B = S.a.g2fd3205,
        F = S.a.defb4aa9,
        z = S.a.af293dc2,
        N = S.a.jaaa8984,
        H = S.a.i5045e73,
        M = S.a.h2388753,
        U = 'anyone',
        q = 'youFollow',
        V = 'anywhere',
        W = 'nearYou',
        K = [
          {
            label: B,
            name: O.People,
            options: [
              { label: F, value: U },
              { label: z, value: q },
            ],
          },
          {
            label: N,
            name: O.Location,
            options: [
              { label: H, value: V },
              { label: M, value: W },
            ],
          },
        ],
        Q = (function (e) {
          l()(n, e)
          var t = L(n)
          function n(e, r) {
            var o
            a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_renderFilters', function () {
                return K.map(function (e, t) {
                  return v.a.createElement(
                    E.a,
                    { key: e.name, style: t > 0 && G.paddingTop },
                    v.a.createElement(C.a, {
                      label: e.label,
                      name: e.name,
                      onChange: o._handleFilterChange,
                      options: e.options,
                      value: o._getCurrentValue(e.name),
                    }),
                  )
                })
              }),
              y()(s()(o), '_getCurrentValue', function (e) {
                switch (e) {
                  case O.People:
                    return o.state.peopleFilter
                  case O.Location:
                    return o.state.locationFilter
                  default:
                    return ''
                }
              }),
              y()(s()(o), '_handleFilterChange', function (e, t) {
                var n = o.context.loggedInUserId,
                  r = o.props.location.query
                switch (e) {
                  case O.People:
                    if (n) {
                      o.setState({ peopleFilter: t })
                      var a = { pf: t === q ? 'on' : void 0, lf: 'on' === r.lf ? r.lf : void 0 }
                      o._executeSearch(a, 'people')
                    } else o.setState({ shouldShowLoginSheet: !0 })
                    break
                  case O.Location:
                    o.setState({ locationFilter: t })
                    var c = { lf: t === W ? 'on' : void 0, pf: 'on' === r.pf ? r.pf : void 0 }
                    o._executeSearch(c, 'location')
                }
              }),
              y()(s()(o), '_getAdvancedSearchLink', function () {
                var e = o.props.location
                return { pathname: '/search-advanced', query: D({}, Object(R.a)(e.query, ['q', 'src'])) }
              }),
              y()(s()(o), '_handleFooterPress', function () {
                o._scribeAction('advanced_search')
              }),
              y()(s()(o), '_scribeAction', function (e) {
                o.props.analytics.scribe({ element: e, action: 'click' })
              }),
              y()(s()(o), '_executeSearch', function (e, t) {
                var n = o.props,
                  r = n.history,
                  a = n.location
                o._scribeAction(t)
                var c = o._getPathname()
                r.replace({ pathname: c, query: Object(x.a)(D(D({}, a.query), e)) })
              }),
              y()(s()(o), '_getPathname', function () {
                var e = o.props.location
                if (e.pathname.includes('/hashtag/')) return e.pathname
                if (
                  e.state &&
                  e.state.previousPath &&
                  e.state.previousPath.includes('/hashtag/') &&
                  '/search' !== e.pathname
                ) {
                  var t = e.state.previousPath,
                    n = t.indexOf('?') > -1 ? t.indexOf('?') : t.length
                  return t.substring(0, n)
                }
                return '/search'
              }),
              y()(s()(o), '_handleHideLoginSheet', function () {
                o.setState({ shouldShowLoginSheet: !1 })
              })
            var c = o.context.loggedInUserId,
              i = e.location.query,
              u = c && i && i.pf ? q : U,
              l = i && i.lf ? W : V
            return (o.state = { peopleFilter: u, locationFilter: l, shouldShowLoginSheet: !1 }), o
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.analytics.scribe({ action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.withBottomBorder,
                    t = this.state.shouldShowLoginSheet
                  return v.a.createElement(
                    E.a,
                    null,
                    v.a.createElement(E.a, { style: G.content }, this._renderFilters()),
                    v.a.createElement(
                      E.a,
                      { style: e && G.bottomBorder, testID: w },
                      v.a.createElement(I.a, {
                        link: this._getAdvancedSearchLink(),
                        onPress: this._handleFooterPress,
                        text: A,
                      }),
                    ),
                    t ? v.a.createElement(_.a, { onClose: this._handleHideLoginSheet }) : null,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(Q, 'contextType', k.a), y()(Q, 'defaultProps', { withBottomBorder: !1 })
      var G = j.a.create(function (e) {
        return {
          content: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space16 },
          bottomBorder: {
            borderBottomColor: e.colors.gray50,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
          },
          paddingTop: { paddingTop: e.spaces.space4 },
        }
      })
      t.b = Object(P.a)(Q, { page: 'search_filters' })
    },
    NeAX: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return I
        }),
        n.d(t, 'selectPreferences', function () {
          return T
        }),
        n.d(t, 'selectData', function () {
          return D
        }),
        n.d(t, 'selectUserPreferences', function () {
          return L
        }),
        n.d(t, 'selectPreferencesFetchStatus', function () {
          return A
        }),
        n.d(t, 'selectFetchDataStatus', function () {
          return B
        }),
        n.d(t, 'selectAge', function () {
          return F
        }),
        n.d(t, 'selectBirthdate', function () {
          return z
        }),
        n.d(t, 'selectHasExactAge', function () {
          return N
        }),
        n.d(t, 'selectGender', function () {
          return H
        }),
        n.d(t, 'selectLanguage', function () {
          return M
        }),
        n.d(t, 'selectSignupDetails', function () {
          return U
        }),
        n.d(t, 'selectTwitterInterests', function () {
          return q
        }),
        n.d(t, 'selectFetchTwitterInterestsStatus', function () {
          return V
        }),
        n.d(t, 'selectPartnerInterests', function () {
          return W
        }),
        n.d(t, 'selectFetchPartnerInterestsStatus', function () {
          return K
        }),
        n.d(t, 'clearLocations', function () {
          return Q
        }),
        n.d(t, 'updateGender', function () {
          return G
        }),
        n.d(t, 'updateLanguage', function () {
          return X
        }),
        n.d(t, 'updateInterest', function () {
          return Z
        }),
        n.d(t, 'fetchPreferencesIfNeeded', function () {
          return J
        }),
        n.d(t, 'updatePreferences', function () {
          return $
        }),
        n.d(t, 'updateSettings', function () {
          return ee
        }),
        n.d(t, 'fetchDataIfNeeded', function () {
          return ne
        }),
        n.d(t, 'createAudienceDownload', function () {
          return ae
        }),
        n.d(t, 'createDataDownload', function () {
          return oe
        }),
        n.d(t, 'fetchTwitterInterestsIfNeeded', function () {
          return ce
        }),
        n.d(t, 'fetchPartnerInterestsIfNeeded', function () {
          return se
        }),
        n.d(t, 'syncSettings', function () {
          return de
        })
      n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i = (n('KOtZ'), n('+KXO'), n('JtPf'), n('7x/C'), n('vrRf'), n('Ee2X'), n('RqPI')),
        s = n('P1r1'),
        u = n('cmwl'),
        l = n('hqKg'),
        d = n('kGix'),
        p = n('YeIG'),
        f = n('Ssj5'),
        h = n('oEOe')
      function m(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var b,
        v = 'personalization',
        g = 'rweb/'.concat(v),
        S = Object(h.a)(g, 'FETCH_PREFERENCES'),
        _ = Object(h.a)(g, 'UPDATE_PREFERENCES'),
        O = Object(h.a)(g, 'FETCH_DATA'),
        w = Object(h.a)(g, 'UPDATE_COOKIES'),
        E = Object(h.a)(g, 'FETCH_TWITTER_INTERESTS'),
        P = Object(h.a)(g, 'FETCH_PARTNER_INTERESTS'),
        k = ((b = 'CLEAR_LOCATIONS'), ''.concat(g, '/').concat(b)),
        C = {
          preferences: { data: {}, fetchStatus: d.a.NONE },
          data: { data: {}, fetchStatus: d.a.NONE },
          twitter_interests: { data: {}, fetchStatus: d.a.NONE },
          partner_interests: { data: {}, fetchStatus: d.a.NONE },
        }
      function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case S.REQUEST:
            return y(y({}, e), {}, { preferences: y(y({}, e.preferences), {}, { fetchStatus: d.a.LOADING }) })
          case S.SUCCESS:
            return y(
              y({}, e),
              {},
              { preferences: { data: y(y({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case S.FAILURE:
            return y(
              y({}, e),
              {},
              { preferences: y(y({}, e.preferences), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case _.REQUEST:
            return y(
              y({}, e),
              {},
              { preferences: { data: y(y({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case O.REQUEST:
            return y(y({}, e), {}, { data: y(y({}, e.data), {}, { fetchStatus: d.a.LOADING }) })
          case O.SUCCESS:
            return y(
              y({}, e),
              {},
              { data: { data: y(y({}, e.data.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case O.FAILURE:
            return y(y({}, e), {}, { data: y(y({}, e.data), {}, { error: t.payload, fetchStatus: d.a.FAILED }) })
          case E.REQUEST:
            return y(
              y({}, e),
              {},
              { twitter_interests: y(y({}, e.twitter_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case E.SUCCESS:
            return y(
              y({}, e),
              {},
              {
                twitter_interests: {
                  data: y(y({}, e.twitter_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case E.FAILURE:
            return y(
              y({}, e),
              {},
              { twitter_interests: y(y({}, e.twitter_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case P.REQUEST:
            return y(
              y({}, e),
              {},
              { partner_interests: y(y({}, e.partner_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case P.SUCCESS:
            return y(
              y({}, e),
              {},
              {
                partner_interests: {
                  data: y(y({}, e.partner_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case P.FAILURE:
            return y(
              y({}, e),
              {},
              { partner_interests: y(y({}, e.partner_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case k:
            return y(
              y({}, e),
              {},
              { data: y(y({}, e.data), {}, { data: y(y({}, e.data.data), {}, { location_history: [] }) }) },
            )
          default:
            return e
        }
      }
      f.a.register(c()({}, v, I))
      var j = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'allow_logged_out_device_personalization',
          allowLocationHistoryUse: 'allow_location_history_personalization',
          allowPartnerships: 'allow_sharing_data_for_third_party_personalization',
          allowPersonalization: 'allow_ads_personalization',
        },
        R = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'link_logged_out_devices',
          allowPartnerships: 'share_data_with_third_party',
          allowPersonalization: 'allow_ads_personalization',
        },
        x = { use_age_for_personalization: 'age_preferences', use_gender_for_personalization: 'gender_preferences' },
        T = function (e) {
          return e.personalization.preferences.data
        },
        D = function (e) {
          return e.personalization.data.data
        },
        L = Object(l.createSelector)(i.m, T, s.g, function (e, t, n) {
          var r = e ? [j, n] : [R, t],
            o = a()(r, 2),
            c = o[0],
            i = o[1]
          return Object.keys(c).reduce(function (e, t) {
            return (e[t] = i[c[t]]), e
          }, {})
        }),
        A = function (e) {
          var t = T(e)
          return Object(p.a)(t) ? e.personalization.preferences.fetchStatus : d.a.LOADED
        },
        B = function (e) {
          return e.personalization.data.fetchStatus
        },
        F = function (e) {
          return e.personalization.data.data.age ? e.personalization.data.data.age : []
        },
        z = function (e) {
          return e.personalization.data.data.birth_date ? e.personalization.data.data.birth_date : ''
        },
        N = function (e) {
          return !!e.personalization.data.data.has_exact_age
        },
        H = function (e) {
          var t = D(e),
            n = T(e),
            r = n.gender_preferences && n.gender_preferences.gender_override
          return r && r.type ? r : { type: t.gender, value: t.gender }
        },
        M = function (e) {
          return e.personalization.data.data.languages ? e.personalization.data.data.languages : []
        },
        U = function (e) {
          return e.personalization.data.data.sign_up_details ? e.personalization.data.data.sign_up_details : {}
        },
        q = function (e) {
          return e.personalization.twitter_interests.data
        },
        V = function (e) {
          return e.personalization.twitter_interests.fetchStatus
        },
        W = function (e) {
          return e.personalization.partner_interests.data
        },
        K = function (e) {
          return e.personalization.partner_interests.fetchStatus
        },
        Q = function () {
          return function (e, t) {
            var n = t(),
              r = T(n),
              a = Date.now(),
              o = { location_preferences: y(y({}, r.location_preferences), {}, { override_times: [a] }) }
            return e($(o)).then(function () {
              return e({ type: k })
            })
          }
        },
        G = function (e) {
          return function (t, n) {
            var r = n(),
              a = { gender_preferences: y(y({}, T(r).gender_preferences), {}, { gender_override: e }) }
            return t($(a))
          }
        },
        X = function (e, t) {
          return function (n, r) {
            if (Object(p.a)(e)) return Promise.resolve()
            var a = r(),
              o = T(a),
              c = o.language_preferences.disabled_languages || [],
              i = c.indexOf(e),
              s = i > -1
            if (s && t) c.splice(i, 1)
            else {
              if (s || t) return Promise.resolve()
              c.push(e)
            }
            var u = { language_preferences: y(y({}, o.language_preferences), {}, { disabled_languages: c }) }
            return n($(u))
          }
        },
        Z = function (e, t, n) {
          return function (r, a) {
            if (Object(p.a)(e) || -1 === ['ads', 'partner'].indexOf(n)) return Promise.resolve()
            var o = 'partner' === n,
              i = a(),
              s = T(i).interest_preferences,
              u = o ? 'disabled_partner_interests' : 'disabled_interests',
              l = s[u],
              d = l.indexOf(e),
              f = d > -1
            if (f && t) l.splice(d, 1)
            else {
              if (f || t) return Promise.resolve()
              l.push(e)
            }
            var h = {
              interest_preferences: c()(
                { disabled_interests: s.disabled_interests, disabled_partner_interests: s.disabled_partner_interests },
                u,
                l,
              ),
            }
            return r($(h))
          }
        },
        J = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.preferences
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(Y()) : Promise.resolve()
          }
        },
        Y = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchPreferences })({
              actionTypes: S,
              context: 'FETCH_PERSONALIZATION_PREFERENCES',
            })
          }
        },
        $ = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(p.a)(e)
              ? Promise.resolve()
              : Object(h.c)(t, { params: { preferences: e }, request: a.Personalization.updatePreferences })({
                  actionTypes: _,
                  context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
                  payload: e,
                })
          }
        },
        ee = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = r.featureSwitches
            if (Object(p.a)(e)) return Promise.resolve()
            var l = n(),
              d = i.m(l),
              f = d ? j : R,
              h = Object.keys(e).reduce(function (t, n) {
                n in f && (t[f[n]] = e[n])
                n in x && (t[x[n]] = c()({}, n, e[n]))
                return t
              }, {})
            return d
              ? t(s.L(h)).then(function () {
                  Object(u.a)().then(function (e) {
                    e.updateBranchTracking(o, a)
                  }),
                    t(le(h))
                })
              : te(o, t, h, a)
          }
        },
        te = function (e, t, n, r) {
          return Object(h.c)(t, { params: { preferences: n }, request: r.Personalization.updatePreferences })({
            actionTypes: _,
            context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
            payload: n,
          }).then(function () {
            Object(u.a)().then(function (t) {
              t.updateBranchTracking(e, r)
            })
          })
        },
        ne = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.data
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(re()) : Promise.resolve()
          }
        },
        re = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchData })({
              actionTypes: O,
              context: 'FETCH_PERSONALIZATION_DATA',
            })
          }
        },
        ae = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.createAudienceDownload })('CREATE_AUDIENCE_DOWNLOAD')
          }
        },
        oe = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.createDataDownload })('CREATE_DATA_DOWNLOAD')
          }
        },
        ce = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.twitter_interests
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(ie()) : Promise.resolve()
          }
        },
        ie = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchTwitterInterests })({
              actionTypes: E,
              context: 'FETCH_PERSONALIZATION_TWITTER_INTERESTS',
            })
          }
        },
        se = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.partner_interests
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(ue()) : Promise.resolve()
          }
        },
        ue = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchPartnerInterests })({
              actionTypes: P,
              context: 'FETCH_PERSONALIZATION_PARTNER_INTERESTS',
            })
          }
        },
        le = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = {}
            return (
              e.hasOwnProperty('use_cookie_personalization') &&
                (o.use_cookie_personalization = e.use_cookie_personalization),
              e.hasOwnProperty('allow_ads_personalization') &&
                (o.allow_ads_personalization = e.allow_ads_personalization),
              Object(p.a)(o)
                ? Promise.resolve()
                : Object(h.b)(t, { params: o, request: a.Personalization.updateCookies })({
                    actionTypes: w,
                    context: 'APP_UPDATE_PERSONALIZATION_COOKIES',
                    params: o,
                  })
            )
          }
        },
        de = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.syncSettings })('SYNC_SETTINGS')
          }
        }
    },
    PH3B: function (e, t, n) {
      'use strict'
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = n('ezF+'),
        i = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        s = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(342)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: s.a.Critical,
        },
        l = {
          loader: function () {
            return Promise.all([n.e(0), n.e(344)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: s.a.Critical,
        }
      t.a = c.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((r = {}), o()(r, i.Cell, u), o()(r, i.PreviewCard, l), r),
      })
    },
    Ukpf: function (e, t, n) {
      'use strict'
      var r = {
        inject: function (e) {
          var t = e.callback,
            n = e.scriptId,
            r = e.src
          if (document.getElementById(n)) t && t()
          else {
            var a = document.createElement('script')
            ;(a.src = r),
              (a.id = n),
              (a.async = !0),
              (a.defer = !0),
              document.body.appendChild(a),
              (a.onload = function () {
                t && t()
              })
          }
        },
        replace: function (e) {
          var t,
            n = e.callback,
            a = e.scriptId,
            o = e.src,
            c = document.getElementById(a)
          c && (null === (t = c.parentNode) || void 0 === t || t.removeChild(c))
          r.inject({ callback: n, scriptId: a, src: o })
        },
      }
      t.a = r
    },
    UpKB: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ho0z'), n('ERkP')),
        v = n.n(b),
        g = n('/yvb'),
        S = n('hUVV'),
        _ = n('3XMw'),
        O = n.n(_),
        w = n('iKTg'),
        E = n('TaB8'),
        P = n('1zbE'),
        k = n('Ukpf'),
        C = n('cnVF'),
        I = n('TnY3'),
        j = n('0+0m'),
        R = n('v6aA'),
        x = n('2qJZ')
      function T(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function L(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = O.a.ib65b1c6,
        B = O.a.f55cebb7,
        F = O.a.g61ed8a4,
        z = { clientId: j.a, scope: 'name email', usePopup: !0 },
        N = (function (e) {
          l()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { isScriptLoaded: !1 }),
              y()(
                s()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(E.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              y()(s()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  r = Object(x.c)(e.context.featureSwitches) ? 'https://'.concat(x.b) : 'https://'.concat(x.a)
                t &&
                  n(C.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(D(D({}, z), {}, { redirectURI: r, state: n }))
                  })
              }),
              y()(s()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  r = n.analytics,
                  a = n.buttonState,
                  o = n.history,
                  c = n.personalizationSettings,
                  i = n.shouldPropagateP13nSettings,
                  s = n.ssoInitTokens,
                  u = c || {},
                  l = u.allowCookieUse,
                  d = u.allowDeviceAccess,
                  p = u.allowPartnerships,
                  f = u.allowPersonalization
                r.scribe({ component: 'apple_sign_in', element: a, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      r.scribe({ component: 'apple_sign_in', element: a, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: i && {
                              allow_cookie_use: !!l,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!f,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: C.A.Apple,
                              state: s[C.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== j.f
                        ? (r.scribe({ component: 'apple_sign_in', element: a, action: 'failure' }), n({ text: F }))
                        : r.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    k.a.inject({
                      callback: function () {
                        e._initAppleIDAuth(), e.setState({ isScriptLoaded: !0 })
                      },
                      scriptId: 'signInWithAppleJsLibrary',
                      src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.buttonSize,
                    n = e.buttonState,
                    r = e.style,
                    a = this.state.isScriptLoaded,
                    o = n === P.a.SignUp ? A : B
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : v.a.createElement(g.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !a,
                        icon: v.a.createElement(w.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: r,
                      })
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      y()(N, 'contextType', R.a),
        y()(N, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(I.a)(Object(S.a)(N)))
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return C
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        s = n.n(i),
        u = n('t62R'),
        l = n('3XMw'),
        d = n.n(l),
        p = (n('yH/f'), n('ho0z'), n('p+r5')),
        f = Object.freeze({ password: 'password', username: 'username_or_email' }),
        h = function (e) {
          var t = e.name,
            n = c()(e, ['name'])
          return s.a.createElement(
            p.a,
            a()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        m = d.a.d1091f50,
        y = s.a.createElement(
          u.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          m,
        ),
        b = d.a.dec3c9b8,
        v = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = c()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return s.a.createElement(
            h,
            a()({}, o, { helperText: r ? y : t, label: n || b, name: f.password, type: 'password' }),
          )
        }
      v.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var g = v,
        S = n('v6aA'),
        _ = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        O = d.a.e1ec8c17,
        w = d.a.d0a750f2,
        E = d.a.e2dd29b5,
        P = d.a.jb4eb245,
        k = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            i = e.withUsernameDisabled,
            u = c()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            l = s.a.useContext(S.a).featureSwitches,
            d = O
          return (
            i ? (d = w) : o ? (d = P) : r && (d = E),
            s.a.createElement(h, a()({}, u, { autoFocus: t, label: n || d, name: f.username, type: _(l) }))
          )
        }
      k.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var C = k
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        o = n('Ud88'),
        c = n('aQQo'),
        i = c.loadQuery,
        s = c.useTrackLoadQueryInRender,
        u = n('ERkP'),
        l = u.useCallback,
        d = u.useEffect,
        p = u.useRef,
        f = u.useState,
        h = n('K1lQ').getRequest,
        m = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== h(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : m,
          c = o()
        s()
        var u = a(),
          h = p(new Set([n])),
          b = f(function () {
            return n
          }),
          v = b[0],
          g = b[1],
          S = f(function () {
            return n
          }),
          _ = S[0],
          O = S[1]
        n !== _ && (h.current.add(n), O(n), g(n))
        var w = l(
            function () {
              u.current && (h.current.add(m), g(m))
            },
            [u],
          ),
          E = l(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (u.current) {
                var a,
                  o = i(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : c, e, t, r)
                h.current.add(o), g(o)
              }
            },
            [c, e, g, u],
          ),
          P = p(!1)
        return (
          d(function () {
            return function () {
              P.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === P.current)
                return (
                  (P.current = !1),
                  void (
                    'NullQueryReference' !== v.kind &&
                    E(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var t = h.current
              if (u.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var o = n.value
                    if (o === v) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (y(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (c) {
                  a.e(c)
                } finally {
                  a.f()
                }
              }
            },
            [v, u, E, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(h.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (o) {
                  n.e(o)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === v.kind ? null : v, E, w]
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return Re
        }),
        n.d(t, 'LoggedOutHome', function () {
          return xe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ddV6'),
        v = n.n(b),
        g = (n('z84I'), n('ERkP')),
        S = n.n(g),
        _ = n('UpKB'),
        O = n('zI2C'),
        w = n('Hde2'),
        E = n('Chb3'),
        P = n('zh9S'),
        k = n('RqPI'),
        C = n('rxPX'),
        I = Object(C.a)()
          .propsFromState(function () {
            return { userLanguage: k.o }
          })
          .propsFromActions(function () {
            return { scribeAction: P.c }
          }),
        j = n('H1k/'),
        R = n('SrtL'),
        x = n('FQwk'),
        T = n('0+0m'),
        D = n('kG2l'),
        L = n('muX9'),
        A = n('6oVL'),
        B = n('rJoH'),
        F = n('yoO3'),
        z = n('Es6L'),
        N = 'signupButton',
        H = 'loginButton',
        M = 'logInSignUpFooter',
        U = n('MWbm'),
        q = n('t62R'),
        V = n('/yvb'),
        W = n('0yYu'),
        K = n('cHvH'),
        Q = n('TIdA'),
        G = n('A91F'),
        X = n('rHpw'),
        Z = n('pxuL'),
        J = (n('3voH'), 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png'),
        Y = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        $ = 380,
        ee = 500,
        te = 1e3,
        ne = n('7JQg'),
        re = n('AS3p'),
        ae = n('3XMw'),
        oe = n.n(ae),
        ce = n('VwDm'),
        ie = n('wz7L'),
        se = n('dFWS'),
        ue = n('lUZE'),
        le = n('3rEN'),
        de = n('1zbE'),
        pe = n('XJCT')
      function fe(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function me(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ye = [
          { text: oe.a.a62c9c33, Icon: ce.a },
          { text: oe.a.cf39fca2, Icon: ie.a },
          { text: oe.a.j86184fd, Icon: se.a },
        ],
        be = oe.a.d1091f50,
        ve = oe.a.d9e109ae,
        ge = oe.a.f86f23b5,
        Se = oe.a.eba1b197,
        _e = oe.a.a565833d,
        Oe = oe.a.aa95ddc0,
        we = oe.a.fa811c30,
        Ee = oe.a.e919c3bc,
        Pe = oe.a.b0dbe914,
        ke = oe.a.e5b0e543,
        Ce = oe.a.h0ff39da,
        Ie = oe.a.j3f49ff6,
        je = oe.a.ca86b62c
      function Re(e) {
        var t = S.a.useState(0),
          n = v()(t, 2),
          r = n[0],
          a = n[1],
          o = S.a.useCallback(function (e) {
            a(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(E.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(w.a, null, S.a.createElement(j.a, { onHeightChange: o })),
          S.a.createElement(U.a, { style: [{ marginBottom: r }, De.bannerPadderChildren] }, e.children),
        )
      }
      var xe = (function (e) {
        l()(n, e)
        var t = me(n)
        function n(e, r) {
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            y()(
              s()(o),
              '_thirdPartySsoButtonsEnabled',
              o.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            y()(
              s()(o),
              '_ssoInSliShowProminentLoginButton',
              o.context.featureSwitches.isTrue('responsive_web_sso_in_sli_show_prominent_login_button'),
            ),
            y()(
              s()(o),
              '_isPlaceholderSIWGButtonEnabled',
              o.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            y()(
              s()(o),
              '_cookieComplianceGingersnapEnabled',
              o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            y()(
              s()(o),
              '_searchHomePageVariation',
              o.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            y()(s()(o), '_renderLoginSignupButtons', function (e) {
              var t = e ? De.ctaButton : De.ctaButtonMobile
              return S.a.createElement(
                U.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && De.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? S.a.createElement(
                      S.a.Fragment,
                      null,
                      o._renderSSOButtons(e),
                      o._ssoInSliShowProminentLoginButton
                        ? o._renderProminentLoginButtonVariation(e)
                        : o._renderLessProminentLoginButtonVariation(e),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(
                        V.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [t, 'tablet' === e && De.ctaButtonSplitSpacing],
                          testID: N,
                          type: 'brandFilled',
                        },
                        _e,
                      ),
                      S.a.createElement(
                        V.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: t,
                          testID: H,
                          type: 'brandOutlined',
                        },
                        Ee,
                      ),
                    ),
              )
            }),
            y()(s()(o), '_renderSSOButtons', function (e) {
              var t = o.state,
                n = t.buttonState,
                r = t.isCookieCompliant,
                a = e ? De.ctaButton : De.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(D.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? r : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [a, 'tablet' === e && De.ctaButtonSplitSpacing, De.ssoButtonStyles],
                }),
                S.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [
                    a,
                    'tablet' === e && De.ctaButtonSplitSpacing,
                    De.ssoButtonStyles,
                    o._ssoInSliShowProminentLoginButton && { marginBottom: 0 },
                  ],
                }),
              )
            }),
            y()(s()(o), '_renderProminentLoginButtonVariation', function (e) {
              var t = e ? De.ctaButton : De.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  U.a,
                  { style: De.gapContainer },
                  S.a.createElement(W.a, { label: S.a.createElement(q.b, { children: je }) }),
                ),
                S.a.createElement(
                  V.a,
                  {
                    link: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: de.b }) } },
                    },
                    onPress: o._handleSignupButton,
                    size: 'medium',
                    style: [t, 'tablet' === e && De.ctaButtonSplitSpacing, De.ssoButtonStyles],
                    testID: N,
                    type: 'brandFilled',
                  },
                  Oe,
                ),
                S.a.createElement(q.b, { color: 'gray700', size: 'subtext3', style: [t, { width: T.b }] }, de.c),
                S.a.createElement(
                  U.a,
                  { style: De.signInButtonContainer },
                  S.a.createElement(q.b, { size: 'headline2', style: t, weight: 'bold' }, we),
                  S.a.createElement(
                    V.a,
                    {
                      link: '/login',
                      onPress: o._handleLoginButton,
                      size: 'medium',
                      style: [t, 'tablet' === e && De.ctaButtonSplitSpacing, De.ssoButtonStyles],
                      testID: H,
                      type: 'brandOutlined',
                    },
                    ke,
                  ),
                ),
              )
            }),
            y()(s()(o), '_renderLessProminentLoginButtonVariation', function (e) {
              var t = o.state.buttonState,
                n = e ? De.ctaButton : De.ctaButtonMobile,
                r = o._getLoginSignupProps() || {},
                a = r.handleLoginSignUpButton,
                c = r.loginSignUpButtonLabel,
                i = r.loginSignUpButtonLink
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  V.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: i,
                    onPress: a,
                    size: 'medium',
                    style: [n, 'tablet' === e && De.ctaButtonSplitSpacing, De.ssoButtonStyles],
                    testID: t === de.a.LogIn ? H : N,
                  },
                  c,
                ),
                t === de.a.SignUp
                  ? S.a.createElement(q.b, { color: 'gray700', size: 'subtext2', style: n }, de.c)
                  : null,
                S.a.createElement(q.b, { testID: M }, o._getLoginSignupFooter()),
              )
            }),
            y()(s()(o), '_renderUsernameInputField', function () {
              return S.a.createElement(
                U.a,
                { style: Te.inputContainer },
                S.a.createElement(pe.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: Te.input,
                }),
              )
            }),
            y()(s()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return S.a.createElement(
                U.a,
                { style: [Te.container, Te.halfForm] },
                o._renderUsernameInputField(),
                S.a.createElement(
                  V.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: Te.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  Ee,
                ),
              )
            }),
            y()(s()(o), '_getLoginSignupProps', function () {
              switch (o.state.buttonState) {
                case de.a.SignUp:
                  return {
                    loginSignUpButtonLabel: Oe,
                    loginSignUpButtonLink: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: de.b }) } },
                    },
                    handleLoginSignUpButton: o._handleSignupButton,
                  }
                case de.a.LogIn:
                  return {
                    loginSignUpButtonLabel: Pe,
                    loginSignUpButtonLink: '/login',
                    handleLoginSignUpButton: o._handleLoginButton,
                  }
                default:
                  return
              }
            }),
            y()(s()(o), '_getLoginSignupFooter', function () {
              var e
              switch (o.state.buttonState) {
                case de.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return o.setState({ buttonState: de.a.LogIn })
                      },
                    }.onPress),
                    S.a.createElement(
                      oe.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      S.a.createElement(q.b, { color: 'link', onPress: e }, oe.a.fb9dd9b0),
                    )
                  )
                case de.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return S.a.createElement(
                      oe.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      S.a.createElement(q.b, { color: 'link', onPress: t }, oe.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return o.setState({ buttonState: de.a.SignUp })
                    },
                  })
                default:
                  return
              }
            }),
            y()(s()(o), '_handleHalfFormLoginClick', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(he(he({}, e.scribeNamespace), {}, { component: 'half_form', element: 'login', action: 'click' }))
            }),
            y()(s()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            y()(s()(o), '_handleSignupButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(he(he({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' }))
            }),
            y()(s()(o), '_handleLoginButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(he(he({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'login' }))
            }),
            y()(s()(o), '_handleUsernameChange', function (e) {
              o.setState({ usernameValue: e.target.value })
            }),
            y()(s()(o), '_handleCookieCompliance', function () {
              o.setState({ isCookieCompliant: !0 })
            }),
            (o.state = {
              autoSubmit: !1,
              buttonState: 'signup',
              isCookieCompliant: Object(re.c)(o.context.featureSwitches) === re.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(z.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(z.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.scribeNamespace,
                  n = !!le.a[this._searchHomePageVariation]
                return S.a.createElement(
                  F.a,
                  null,
                  S.a.createElement(R.a, { title: Ce }),
                  S.a.createElement(B.a, {
                    canonical: 'https://twitter.com/',
                    description: Ie,
                    title: Ce,
                    type: 'website',
                  }),
                  S.a.createElement(O.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    L.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: Ie, name: 'description' }),
                  ),
                  S.a.createElement(K.a, null, function (r) {
                    var a = r.windowHeight,
                      o = (function (e, t) {
                        return {
                          deviceSize: e > te ? 'desktop' : e > ee ? 'tablet' : void 0,
                          showLoginForm: e / 2 > 500 && t >= 750,
                        }
                      })(r.windowWidth, a),
                      c = o.deviceSize,
                      i = o.showLoginForm
                    return S.a.createElement(
                      U.a,
                      { style: De.root },
                      n
                        ? S.a.createElement(le.b, {
                            deviceSize: c,
                            scribeNamespace: t,
                            variation: le.a[e._searchHomePageVariation],
                          })
                        : S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              U.a,
                              { style: [De.main, 'desktop' === c && De.mainWide] },
                              e._renderCTA({ deviceSize: c, showLoginForm: i }),
                              e._renderHero(c),
                            ),
                            S.a.createElement(Re, null, S.a.createElement(x.a, { align: 'center' })),
                          ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function (e) {
                var t,
                  n,
                  r =
                    ((t = this.props.userLanguage),
                    {
                      variants: [
                        {
                          uri: (n = null == t ? void 0 : t.startsWith('en'))
                            ? 'https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png'
                            : 'https://abs.twimg.com/sticky/illustrations/lohp_850x623.png',
                          width: 850,
                          height: 623,
                        },
                        { uri: n ? J : Y, width: 1302, height: 955 },
                      ],
                      original: { url: n ? J : Y, width: 1302, height: 958 },
                    }),
                  a = r.original,
                  o = r.variants
                return S.a.createElement(
                  U.a,
                  { style: [De.block, De.communication, De.blockHero] },
                  S.a.createElement(
                    U.a,
                    { style: De.blockImg },
                    S.a.createElement(Q.a, {
                      accessibilityLabel: '',
                      aspectMode: G.a.COVER,
                      backgroundColor: X.a.theme.colors.blue500,
                      customVariants: o,
                      draggable: !1,
                      image: a,
                    }),
                    S.a.createElement(ue.a, { style: [De.twitterIconHero, 'desktop' === e && De.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = ye.length
                return S.a.createElement(
                  U.a,
                  { style: De.communicationItems },
                  ye.map(function (t, n) {
                    var r = t.Icon,
                      a = t.text,
                      o = n + 1 === e
                    return S.a.createElement(
                      U.a,
                      { key: a, style: [De.communicationItem, o && De.communicationItemLast] },
                      S.a.createElement(r, { style: De.communicationItemIcon }),
                      S.a.createElement(
                        q.b,
                        { color: 'white', size: 'headline1', style: De.communicationItemText, weight: 'bold' },
                        a,
                      ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderCTA',
              value: function (e) {
                var t = e.deviceSize,
                  n = e.showLoginForm,
                  r = this.state.buttonState
                return S.a.createElement(
                  U.a,
                  { style: [De.block, De.blockCTA, 'tablet' === t && De.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  S.a.createElement(
                    U.a,
                    { style: [De.blockInnerWrapper, 'desktop' === t && De.blockInnerWrapperWide] },
                    S.a.createElement(ue.a, { style: De.twitterIcon }),
                    S.a.createElement(
                      q.b,
                      { extendedWidth: !0, style: t ? De.ctaTitleLarge : De.ctaTitle, weight: 'bold' },
                      Se,
                    ),
                    S.a.createElement(
                      q.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? De.ctaTextLarge : De.ctaText,
                        weight: 'bold',
                      },
                      this._thirdPartySsoButtonsEnabled ? (r === de.a.SignUp ? ve : ge) : ve,
                    ),
                    this._renderLoginSignupButtons(t),
                  ),
                )
              },
            },
            {
              key: '_renderLoginForm',
              value: function () {
                var e = this.state,
                  t = e.autoSubmit,
                  n = e.usernameValue,
                  r = n ? '?account_identifier='.concat(n) : '',
                  a = this.context.featureSwitches.getValue('responsive_web_inline_login_box_enabled'),
                  o = 'full' === a
                return 'none' === a
                  ? null
                  : 'half' === a
                  ? this._renderHalfForm()
                  : o
                  ? S.a.createElement(
                      U.a,
                      { style: Te.container },
                      S.a.createElement(
                        A.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: Te.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          U.a,
                          { style: Te.inputContainer },
                          S.a.createElement(pe.a, { onSubmitEditing: this._handleSubmitEditing, style: Te.input }),
                          S.a.createElement(
                            q.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(r),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: Te.forgotPassword,
                            },
                            be,
                          ),
                        ),
                      ),
                    )
                  : void 0
              },
            },
          ]),
          n
        )
      })(S.a.Component)
      y()(xe, 'contextType', Z.a)
      var Te = X.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              paddingHorizontal: e.spaces.space32,
              position: 'absolute',
              top: e.spaces.space16,
              left: '0px',
              maxWidth: '100%',
            },
            submitButtonStyle: { marginBottom: e.spaces.space4 },
            halfForm: { flexDirection: 'row', justifyContent: 'center' },
            inputContainer: { flexShrink: 1, width: '225px' },
            input: { paddingLeft: 0, paddingTop: 0, paddingBottom: 0 },
            forgotPassword: {
              height: 0,
              overflowY: 'visible',
              marginLeft: e.spaces.space12,
              marginTop: e.spaces.space4,
            },
          }
        }),
        De = X.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: he(
              he({}, X.a.absoluteFillObject),
              {},
              { flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: e.colors.primary },
            ),
            blockCTA: { minWidth: '45vw' },
            blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
            blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
            blockInnerWrapperWide: { minWidth: ''.concat(436.99999999999994, 'px'), maxWidth: ''.concat(760, 'px') },
            bottomButton: { flexGrow: 1, maxWidth: '180px' },
            bottomButtonLeft: { marginRight: '10px' },
            bottomButtonRight: { marginLeft: '10px' },
            bottomButtonsBlock: { flexDirection: 'row', paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 },
            communication: { backgroundColor: e.colors.blue300, overflow: 'hidden' },
            communicationItem: { flexDirection: 'row', marginBottom: '40px' },
            communicationItemIcon: { color: e.colors.white, flexShrink: 0, fontSize: e.fontSizes.title4 },
            communicationItemLast: { marginBottom: 0 },
            communicationItems: {
              alignSelf: 'center',
              maxWidth: ''.concat($, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(X.a.theme.spacesPx.space40 + X.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(X.a.theme.spacesPx.space64 + X.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat($, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: T.b, height: e.spaces.space40, flex: 'none' },
            signInButtonContainer: { marginTop: X.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat($, 'px'), width: T.b },
            ctaButtonMobile: { marginBottom: e.spaces.space16 },
            ctaButtonSplitSpacing: { marginRight: e.spaces.space20 },
            twitterIcon: {
              alignSelf: 'flex-start',
              color: e.colors.brandColor,
              height: '3rem',
              paddingBottom: e.spaces.space12,
            },
            twitterIconBg: { color: e.colors.blue500, maxWidth: 'none', position: 'absolute' },
            twitterIconBgNarrow: { height: '60vh', top: '-10vh', right: '-10vh' },
            twitterIconBgWide: { height: '160vh', top: '-30vh', right: '-50vh' },
            twitterIconHero: {
              color: e.colors.whiteOnColor,
              justifyContent: 'center',
              height: 'fit-content',
              padding: e.spaces.space32,
            },
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat($, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        })
      t.default = Object(ne.c)({ page: 'front' })(I(xe))
    },
    'g9w/': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M16 11.25h-3.25V8c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.25H8c-.414 0-.75.336-.75.75s.336.75.75.75h3.25V16c0 .414.336.75.75.75s.75-.336.75-.75v-3.25H16c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            c.a.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    h2mu: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r,
        a = n('VrFO'),
        o = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        p = n('N+ot'),
        f = n.n(p),
        h = n('AuHH'),
        m = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        v = (n('2G9S'), n('ERkP')),
        g = n.n(v),
        S = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        _ = n('QIgh'),
        O = n('8UdT'),
        w = n('iu0J'),
        E = n('zgaL'),
        P = n('PH3B'),
        k = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        C = {
          loader: function () {
            return n.e(226).then(n.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: k.a.Critical,
        },
        I = S.e(C),
        j = (n('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        R = {
          loader: function () {
            return n.e(347).then(n.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: k.a.Critical,
        },
        x = {
          loader: function () {
            return n.e(347).then(n.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: k.a.Critical,
        },
        T = {
          loader: function () {
            return n.e(347).then(n.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: k.a.Critical,
        },
        D = S.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((r = {}), b()(r, j.Expand, R), b()(r, j.Replace, x), b()(r, j.Suggest, T), r),
        })
      function L(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var B = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            n = e.withUserPresence
          return A(
            A(
              {},
              Object(_.a)({
                tweetDismissable: !0,
                displayBlocked: !0,
                shouldStoreTypeaheadItem: t,
                withUserPresence: n,
              }),
            ),
            (function (e) {
              var t,
                n = e.shouldStoreTypeaheadItem
              return (
                (t = {}),
                b()(t, O.b.News, P.a),
                b()(t, O.b.EventSummary, Object(w.a)({ errorContext: 'SEARCH_SCREEN', shouldStoreTypeaheadItem: n })),
                b()(t, O.b.RelatedSearch, I),
                b()(t, O.b.FollowSearch, S.e(S.a())),
                b()(t, O.b.FollowSearchAction, S.e(S.a())),
                b()(t, O.b.Place, S.e(S.a())),
                b()(t, O.b.MomentAnnotation, E.a),
                b()(t, O.b.Spelling, D),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        F = n('3X8/'),
        z = n('oQhu'),
        N = n('EUHl'),
        H = n('7BdX'),
        M = n('fTQJ'),
        U = n('i6OR'),
        q = n('X04g'),
        V = n('t62R'),
        W = n('FIs5'),
        K = n('v6aA'),
        Q = n('3XMw'),
        G = n.n(Q)
      function X(e) {
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
          var n,
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Z = G.a.c09de2d4,
        J = g.a.createElement(
          G.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          g.a.createElement(V.b, { link: '/settings/search' }, G.a.d2918e88),
        ),
        Y = G.a.ae111c99,
        $ = (function (e) {
          d()(n, e)
          var t = X(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(u()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case q.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case q.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case q.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              b()(u()(e), '_getModule', function () {
                var t = e.props,
                  n = t.query,
                  r = t.querySrc,
                  a = t.searchFilters,
                  o = t.searchMode,
                  c = t.urtEndpointOptions,
                  i = t.vertical
                return e._getMemoizedModule(n, r, o, a, i, c)
              }),
              b()(u()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  n = t.emptyStateComponent,
                  r = t.query
                return n || g.a.createElement(W.a, { header: Y({ query: r }), message: J })
              }),
              b()(
                u()(e),
                '_getMemoizedModule',
                Object(z.a)(function (e, t, n, r, a, o) {
                  return Object(U.b)({
                    query: e,
                    searchMode: n,
                    querySource: t,
                    searchFilters: r,
                    vertical: a,
                    urtEndpointOptions: o,
                  })
                }),
              ),
              b()(
                u()(e),
                '_getMemoizedEntryConfiguration',
                Object(z.a)(function (t) {
                  return B({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(M.a, {
                    apiErrorHandlerMap: F.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: N.a.CLIENT,
                    prerollDisplayLocation: H.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: Z,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()($, 'contextType', K.a)
      t.a = $
    },
    hUVV: function (e, t, n) {
      'use strict'
      var r = n('NeAX'),
        a = n('1YZw'),
        o = n('rxPX'),
        c = n('RqPI')
      t.a = Object(o.a)()
        .propsFromState(function () {
          return {
            personalizationPreferences: r.selectPreferences,
            personalizationSettings: r.selectUserPreferences,
            ssoInitTokens: c.w,
            userLanguage: c.o,
          }
        })
        .adjustStateProps(function (e) {
          var t = e.personalizationPreferences,
            n = e.personalizationSettings,
            r = e.ssoInitTokens,
            a = e.userLanguage
          return {
            personalizationSettings: n,
            shouldPropagateP13nSettings: !t.is_eu_country,
            ssoInitTokens: r,
            userLanguage: a,
          }
        })
        .propsFromActions(function () {
          return { addToast: a.b, fetchSsoInitToken: c.e }
        })
        .withAnalytics()
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            c.a.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    i6OR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = (n('jQ3i'), n('x4t0'), n('2G9S'), n('IAdD'), n('LW0h'), n('vrRf'), n('z84I'), n('u3ZE')),
        i = n('3IPs'),
        s = n('ZNT5'),
        u = n('eR3e'),
        l = 'search-',
        d = ' near:me',
        p =
          ((r = {}),
          o()(r, i.c.Top, {}),
          o()(r, i.c.Live, { tweet_search_mode: i.c.Live }),
          o()(r, i.c.User, { result_filter: i.c.User }),
          o()(r, i.c.Image, { result_filter: i.c.Image }),
          o()(r, i.c.Video, { result_filter: i.c.Video }),
          r),
        f = function (e) {
          return (function (e) {
            return e === c.a.SpellingCorrectionRevertClick || e === c.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        h = function () {
          return function (e, t) {
            e(
              Object(u.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(l)
                })
                .map(function (e) {
                  return Object(u.g)(e)
                }),
            )
          }
        }
      t.b = function (e) {
        var t = e.query,
          n = e.searchMode,
          r = void 0 === n ? i.c.Top : n,
          a = e.querySource,
          o = e.searchFilters,
          c = e.vertical,
          u = e.urtEndpointOptions,
          h = f(a),
          m = o && o.peopleFilter ? 'searcher_follows' : void 0,
          y = m ? '-pf' : '',
          b = o && o.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          v = ''.concat(l).concat(b, '-').concat(r).concat(h).concat(y)
        return Object(s.a)({
          timelineId: v,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == u ? void 0 : u.requestParams,
              { q: b, social_filter: m, vertical: c },
              p[r],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: r === i.c.Live ? 5e3 : void 0,
          timelineType: 'search',
        })
      }
    },
    iKTg: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    jmcQ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z',
              fill: '#EA4335',
            }),
            c.a.createElement('path', {
              d: 'M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z',
              fill: '#FBBC05',
            }),
            c.a.createElement('path', {
              d: 'M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z',
              fill: '#34A853',
            }),
            c.a.createElement('path', {
              d: 'M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z',
              fill: '#4285F4',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    kG2l: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ERkP'),
        v = n.n(b),
        g = n('hUVV'),
        S = n('3XMw'),
        _ = n.n(S),
        O = n('jmcQ'),
        w = n('TaB8'),
        E = n('1zbE'),
        P = n('Ukpf'),
        k = n('cnVF'),
        C = n('aITJ'),
        I = n('MWbm'),
        j = n('TnY3'),
        R = n('/yvb'),
        x = n('Qwev'),
        T = n('v6aA'),
        D = n('0+0m')
      function L(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = _.a.e0870f25,
        B = _.a.gfeffd69,
        F = (function (e) {
          l()(n, e)
          var t = L(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_buttonInitialized', !1),
              y()(s()(o), '_viewRef', v.a.createRef()),
              y()(
                s()(o),
                '_is3rdPartyIntegrationDisabled',
                Object(w.a)('responsive_web_3rd_party_category_google_platform', o.context.featureSwitches),
              ),
              y()(s()(o), '_initGoogleClient', function () {
                var e = window.google
                o._buttonInitialized ||
                  (e &&
                    (e.accounts.id.initialize({ client_id: D.c, callback: o._handleOnPress }),
                    (o._buttonInitialized = !0)))
              }),
              y()(s()(o), '_renderGoogleSignInButton', function () {
                var e = window.google,
                  t = o.props,
                  n = t.buttonState,
                  r = t.displayType,
                  a = t.userLanguage,
                  c = n === E.a.SignUp ? D.d.SignUp : D.d.SignIn,
                  i = r !== D.e.Prompt && o._buttonInitialized
                e &&
                  i &&
                  e.accounts.id.renderButton(o._viewRef.current, {
                    theme: 'outline',
                    size: 'large',
                    shape: 'circle',
                    locale: a,
                    logo_alignment: 'center',
                    text: c,
                    width: D.b,
                  })
              }),
              y()(s()(o), '_renderGoogleOneTapPrompt', function () {
                var e = window.google,
                  t = o.props,
                  n = t.analytics,
                  r = t.displayType,
                  a = t.isCookieCompliant,
                  c = !C.b.isIOS() && !C.b.isSafari(),
                  i = r !== D.e.Button && c && a
                e &&
                  i &&
                  e.accounts.id.prompt(function (e) {
                    n.scribe({ component: 'google_sign_in', element: 'one_tap', action: e.getMomentType() })
                  })
              }),
              y()(s()(o), '_renderPlaceholderButton', function () {
                var e = o.props,
                  t = e.buttonSize,
                  n = e.buttonState,
                  r = e.onPress,
                  a = e.style,
                  c = n === E.a.SignUp ? A : B
                return v.a.createElement(R.a, {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  children: c,
                  color: 'gray1100',
                  icon: v.a.createElement(O.a, null),
                  onPress: r,
                  size: t,
                  style: a,
                })
              }),
              y()(s()(o), '_injectGoogleGsiLibraryScript', function () {
                P.a.inject({
                  callback: function () {
                    o.setState({ isScriptLoaded: !0 }, function () {
                      o._initGoogleClient(), o._renderGoogleSignInButton(), o._renderGoogleOneTapPrompt()
                    })
                  },
                  scriptId: 'googleGSILibrary',
                  src: 'https://accounts.google.com/gsi/client',
                })
              }),
              y()(s()(o), '_handleOnPress', function (e) {
                var t = o.props,
                  n = t.analytics,
                  r = t.buttonState,
                  a = t.fetchSsoInitToken
                n.scribe({ component: 'google_sign_in', element: r, action: 'click' }),
                  a(k.A.Google).then(function () {
                    o._handleGoogleAccSignInSuccess(e)
                  })
              }),
              y()(s()(o), '_handleGoogleAccSignInSuccess', function (e) {
                var t = o.props,
                  n = t.analytics,
                  r = t.buttonState,
                  a = t.history,
                  c = t.personalizationSettings,
                  i = t.shouldPropagateP13nSettings,
                  s = t.ssoInitTokens,
                  u = c || {},
                  l = u.allowCookieUse,
                  d = u.allowDeviceAccess,
                  p = u.allowPartnerships,
                  f = u.allowPersonalization
                n.scribe({ component: 'google_sign_in', element: r, action: 'success' }),
                  a.push({
                    pathname: '/i/flow/single_sign_on',
                    state: {
                      input: {
                        cookie_personalization_settings: i && {
                          allow_cookie_use: !!l,
                          allow_device_personalization: !!d,
                          allow_partnerships: !!p,
                          allow_ads_personalization: !!f,
                        },
                        requested_variant: JSON.stringify({
                          id_token: e.credential,
                          provider: k.A.Google,
                          state: s[k.A.Google],
                        }),
                      },
                    },
                  })
              }),
              (o.state = { isScriptLoaded: !1 }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.isCookieCompliant
                  !this._is3rdPartyIntegrationDisabled && e && this._injectGoogleGsiLibraryScript()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.isCookieCompliant,
                    n = this.state.isScriptLoaded
                  n &&
                    this._buttonInitialized &&
                    (e.userLanguage !== this.props.userLanguage || e.buttonState !== this.props.buttonState) &&
                    this._renderGoogleSignInButton(),
                    !n && t && this._injectGoogleGsiLibraryScript()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isScriptLoaded,
                    t = this.props,
                    n = t.isCookieCompliant,
                    r = t.style
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : n
                    ? e
                      ? v.a.createElement(I.a, { ref: this._viewRef, style: r })
                      : v.a.createElement(x.a, { style: [r, { width: D.b }] })
                    : this._renderPlaceholderButton()
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      y()(F, 'defaultProps', { buttonState: 'signup', isCookieCompliant: !0 }),
        y()(F, 'contextType', T.a),
        (t.a = Object(j.a)(Object(g.a)(F)))
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('0vv5'),
        a = 500,
        o = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    kix0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchFiltersScreen', function () {
          return f
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('jHSc'),
        s = n('3XMw'),
        u = n.n(s),
        l = n('L7to'),
        d = n('Irs7'),
        p = u.a.aea62567
      function f(e) {
        var t = e.history,
          n = e.location
        return c.a.createElement(
          i.b,
          { documentTitle: p, history: t, title: p },
          c.a.createElement(l.a, a()({}, e, { key: n.key, withBottomBorder: !0 })),
        )
      }
      t.default = Object(d.a)(f, { page: 'search_filters' })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return H
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        S = n.n(g),
        _ = n('pXBW'),
        O = n('6/RC'),
        w = n('UIzd'),
        E = n.n(w),
        P = n('kGix')
      n.d(t, 'a', function () {
        return P.a
      })
      var k = n('fs1G'),
        C = n('0KEI'),
        I = n('lU4h'),
        j = n.n(I),
        R = n('21nk'),
        x = n.n(R),
        T = n('bCEw'),
        D = n.n(T),
        L = n('Ud88'),
        A = n.n(L)
      function B(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var F = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: k.a })
        },
        z = (function (e) {
          p()(n, e)
          var t = B(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(a))), v()(l()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof _.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(S.a.Component),
        N = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = x()(t, n)
          return r({ fetchStatus: P.a.LOADED, data: a, error: null, retry: k.a })
        },
        H = function (e, t) {
          if (O.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                o = void 0 === r ? 'store-or-network' : r,
                c = n.render,
                i = n.variables,
                s = D()(e),
                u = a()(s, 2),
                l = u[0],
                d = u[1],
                p = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                f = j()(i),
                h = a()(f, 1)[0],
                m = S.a.useCallback(
                  function () {
                    d(h, { fetchPolicy: 'network-only' })
                  },
                  [d, h],
                )
              return (
                S.a.useLayoutEffect(
                  function () {
                    d(h, { fetchPolicy: o })
                  },
                  [o, d, h],
                ),
                l
                  ? S.a.createElement(
                      S.a.Suspense,
                      { fallback: S.a.createElement(F, { render: c }) },
                      S.a.createElement(
                        z,
                        { errorHandler: p(t.errorConfig.options || {}), key: l.fetchKey, retry: m },
                        function (t, n) {
                          return t
                            ? c({ fetchStatus: P.a.FAILED, error: t, data: null, retry: n })
                            : S.a.createElement(N, { query: e, queryRef: l, render: c })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var o = r.render,
              c = r.variables,
              i = A()(),
              s = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              u = j()(c),
              l = a()(u, 1)[0],
              d = n.get(i)
            if (d) return d
            var p = S.a.lazy(function () {
              return E()(i, e, l)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: P.a.LOADED, data: e, error: null, retry: k.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: P.a.FAILED, data: null, error: e, retry: k.a }))
                      : S.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(i, e).get.bind(n, i) }
                })
            })
            return S.a.createElement(S.a.Suspense, null, S.a.createElement(p, null))
          }
        }
    },
    nmVb: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, a.default)(e), r = 0; r < n.length; r++) t.push(n[r].hashtag)
          return t
        })
      var a = r(n('yyPN'))
      e.exports = t.default
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return p
      }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'd', function () {
          return b
        }),
        n.d(t, 'f', function () {
          return g
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i =
          (n('hBpG'),
          n('vrRf'),
          n('WNMA'),
          n('KqXw'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        s = n('kIAd'),
        u = n('rHpw')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function p(e, t) {
        var n,
          r = s.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? d(d({}, r.scope), {}, { src: t, q: a }) : null
      }
      function f(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(s.b.WordEnd),
          o = a >= 0 ? n.slice(a) : '',
          c = r.search(s.b.WordBoundary),
          i = o + r.slice(0, c)
        return i.trim() ? { start: a, end: e + c, word: i } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function y(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(o))
      }
      var b = Object(i.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(u.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        v = 0,
        g = function () {
          return 'typeaheadDropdown-'.concat((v += 1))
        }
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return K
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('LJOr'), n('KqXw'), n('ERkP')),
        v = n.n(b),
        g = n('sTyV'),
        S = n('6/RC'),
        _ = n('sebV'),
        O = n('G6rE'),
        w = n('rxPX'),
        E = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: O.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        P = n('3XMw'),
        k = n.n(P),
        C = n('OrGc'),
        I = n('QK5w'),
        j = n('aITJ'),
        R = n('MWbm'),
        x = n('TnY3'),
        T = n('rHpw'),
        D = n('t62R'),
        L = n('v6aA'),
        A = n('uScj'),
        B = n('fs1G'),
        F = n('BcsE'),
        z = n('VPAj')
      function N(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function M(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var U = k.a.b47e760d,
        q = k.a.fd2c7b43,
        V = new A.a(),
        W = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        K = function (e) {
          return S.canUseDOM ? V.subscribe(e).unsubscribe : B.a
        },
        Q = (function (e) {
          l()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.history,
                  o = r.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        V.getListeners().length
                          ? V.notify(e)
                          : a.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  i =
                    ((t = {}),
                    y()(t, C.e.search, c()),
                    y()(t, C.e.goToUser, c('@')),
                    y()(t, C.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    y()(t, C.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    y()(t, C.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      y()(t, C.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      y()(t, C.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      y()(t, C.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    o && u
                      ? H(
                          H({}, s(o)),
                          {},
                          y()({}, C.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : o
                      ? s(o)
                      : {},
                  d = H(
                    H(H({}, i), l),
                    {},
                    ((n = {}),
                    y()(n, C.e.goHome, function () {
                      return a.push('/home')
                    }),
                    y()(n, C.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    y()(n, C.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    y()(n, C.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    y()(n, C.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    y()(n, C.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    y()(n, C.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    y()(n, C.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    y()(n, C.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? d : i
                e._unbindKeyboardShortcuts = Object(g.a)(p)
              }),
              y()(s()(e), '_handleKeyDown', function (t) {
                W(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              y()(s()(e), '_handleKeyUp', function (t) {
                if (!W(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(F.a)(n) && Date.now() - n < 500,
                    a = Object(I.a)({}, { location: e.props.location })
                  r && a ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    j.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    j.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? v.a.createElement(
                        R.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: T.a.visuallyHidden },
                        v.a.createElement(D.b, null, U),
                        v.a.createElement(D.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, q),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(Q, 'contextType', L.a)
      var G = E(Q),
        X = S.canUseDOM ? Object(x.a)(G) : Object(z.a)(null)
      t.a = X
    },
    sYRn: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('eb3s'),
        c = n('3XMw'),
        i = n.n(c),
        s = n('4ZbN'),
        u = i.a.hffea05c,
        l = i.a.j037e373,
        d = i.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          n = e.onConfirm
        return a.a.createElement(o.a, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: u,
          onCancel: t,
          onConfirm: n,
          testID: s.a.deleteSavedSearchDialog,
          text: l,
        })
      }
    },
    u3ZE: function (e, t, n) {
      'use strict'
      t.a = {
        AdvancedSearchPage: 'advanced_search_page',
        CashtagClick: 'cashtag_click',
        HashtagClick: 'hashtag_click',
        PromotedTrendClick: 'promoted_trend_click',
        RecentSearchClick: 'recent_search_click',
        SavedSearchClick: 'saved_search_click',
        RelatedQueryClick: 'related_query_click',
        SpellingCorrectionClick: 'spelling_correction_click',
        SpellingCorrectionRevertClick: 'spelling_suggestion_revert_click',
        SpellingExpansionClick: 'spelling_expansion_click',
        SpellingExpansionRevertClick: 'spelling_expansion_revert_click',
        SpellingSuggestionClick: 'spelling_suggestion_click',
        TrendClick: 'trend_click',
        TrendView: 'trend_view',
        TypeaheadClick: 'typeahead_click',
        Typed: 'typed_query',
        TweetDetailQuoteTweet: 'tdqt',
      }
    },
    v4XE: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return O
      }),
        n.d(t, 'c', function () {
          return w
        }),
        n.d(t, 'a', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return P
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i = n('T0aG'),
        s = n.n(i),
        u = (n('yH/f'), n('2G9S'), n('LW0h'), n('JtPf'), n('7x/C'), n('oEOe')),
        l = n('kGix'),
        d = n('Ssj5'),
        p = n('SrIh'),
        f = n('RqPI')
      function h(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y = 'savedSearches',
        b = { fetchStatus: l.a.NONE, savedSearches: [] },
        v = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        g = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function _() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case v.SUCCESS:
            var n = t.payload,
              r = Array.isArray(n)
            return (
              r ||
                Object(p.a)('Saved search results are not type array', { extra: { savedSearchResultsType: s()(n) } }),
              m(m({}, e), {}, { fetchStatus: l.a.LOADED, savedSearches: r && n ? n : [] })
            )
          case v.FAILURE:
            return m(m({}, e), {}, { fetchStatus: l.a.FAILED })
          case g.SUCCESS:
            return m(
              m({}, e),
              {},
              { savedSearches: t.payload ? [].concat(a()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case S.SUCCESS:
            return t.payload
              ? m(
                  m({}, e),
                  {},
                  {
                    savedSearches: e.savedSearches.filter(function (e) {
                      return e.id_str !== t.payload.id_str
                    }),
                  },
                )
              : e
          default:
            return e
        }
      }
      d.a.register(c()({}, y, _))
      var O = function (e) {
          return e.savedSearches.savedSearches
        },
        w = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: g,
              context: 'SAVE_SEARCH',
            })
          }
        },
        E = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
              actionTypes: S,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        P = function () {
          return function (e, t, n) {
            n.api
            var r = t()
            return Object(f.m)(r)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(r) === l.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, n) {
                    var r = n.api
                    return Object(u.b)(e, { request: r.SavedSearches.fetch, params: {} })({
                      actionTypes: v,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    x1T0: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: (r = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 21 }],
                concreteType: 'LoggedOutTrendsList',
                kind: 'LinkedField',
                name: 'logged_out_trends_list',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'trends', storageKey: null }],
                storageKey: 'logged_out_trends_list(s:21)',
              },
            ]),
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: r,
          },
          params: {
            id: 'jFSVxO6XekDkqa9LhEqxug',
            metadata: {},
            name: 'LoggedOutSearchHomeTrendsListQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(a.hash = 'd776a0f7400b83db0b925f0352d2b751'), (t.default = a)
    },
    zgaL: function (e, t, n) {
      'use strict'
      var r = n('ezF+'),
        a =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(218).then(n.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = r.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
