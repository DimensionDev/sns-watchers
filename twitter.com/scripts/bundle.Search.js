;(window.webpackJsonp = window.webpackJsonp || []).push([
  [83, 61, 184],
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
          return lt
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
        v = n('HPNB'),
        g = n('es0u'),
        S = (n('WNMA'), n('KqXw'), n('vrRf'), n('zh9S')),
        _ = n('1YZw'),
        O = n('hqKg'),
        w = n('3IPs'),
        E = n('rxPX'),
        P = n('0KEI'),
        k = n('v4XE'),
        C = n('Hw0q'),
        I = function (e, t) {
          var n = t.location
          return n.query && n.query.src && 'string' == typeof n.query.src ? n.query.src : ''
        },
        j = function (e, t) {
          var n = t.location,
            r = t.match.params
          return r && r.unsafeHashtagQuery && 'string' == typeof r.unsafeHashtagQuery
            ? '#'.concat(r.unsafeHashtagQuery)
            : (n && n.query && n.query.q && Object(C.a)(n.query.q)) || ''
        },
        R = function (e, t) {
          return 0 === t.location.pathname.indexOf('/search') ? 'search' : 'hashtag'
        },
        x = function (e, t) {
          return !!(t.location.state || {}).searchFocused
        },
        T = Object(O.createSelector)(Object(C.b)('pf'), Object(C.b)('lf'), function (e, t) {
          return { peopleFilter: e, locationFilter: t }
        }),
        D = Object(E.a)()
          .propsFromState(function () {
            return {
              searchFocused: x,
              query: j,
              querySrc: I,
              isQueryAlreadySaved: Object(O.createSelector)(j, k.d, function (e, t) {
                return (
                  t
                    .map(function (e) {
                      return e.query
                    })
                    .indexOf(e) > -1
                )
              }),
              searchType: R,
              searchFilters: T,
              mode: w.k,
              savedSearches: k.d,
              vertical: Object(C.b)('vertical'),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('SEARCH_SCREEN'),
              deleteSavedSearch: k.a,
              fetchSavedSearchesIfNeeded: k.b,
              saveSearch: k.c,
              scribeAction: S.c,
            }
          })
          .withAnalytics({ page: 'search' }),
        L = n('sYRn'),
        A = n('3XMw'),
        B = n.n(A),
        F = n('oQhu'),
        z = n('2G3J'),
        N = n('yoO3'),
        H = n('7nmT'),
        M = n.n(H),
        U = n('5FtR'),
        q = n('Rp9C'),
        V = n('7JQg'),
        W = n('L7to'),
        K = n('3rEN'),
        Q = (n('muX9'), B.a.a8399d5b, B.a.ge893905, n('mjJ+')),
        G = n('3A2y'),
        X = 'searchFilters-overflow',
        Z = 'advancedSearch-overflow',
        J = 'searchSettings-overflow',
        Y = 'saveSearch-overflow',
        $ = 'deleteSavedSearch-overflow',
        ee = n('+RfI'),
        te = n('VwDm'),
        ne = n('M2x3'),
        re = n('g9w/'),
        ae = n('hiGS')
      function oe(e, t) {
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
      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? oe(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ie(e) {
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
      var se = B.a.h1ef00db,
        ue = B.a.aea62567,
        le = B.a.j622effd,
        de = B.a.h4912b5e,
        pe = B.a.b9bc69ca,
        fe = (function (e) {
          l()(n, e)
          var t = ie(n)
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
                      Icon: ee.a,
                      testID: X,
                      text: ue,
                      link: { pathname: '/i/search_filters', query: c.query },
                    }),
                  s.push({
                    Icon: te.a,
                    testID: Z,
                    text: le,
                    link: { pathname: '/search-advanced', query: ce({}, Object(G.a)(c.query, ['q', 'src'])) },
                  }),
                  r &&
                    (s.unshift({ Icon: ne.a, testID: J, text: se, link: '/settings/search' }),
                    a
                      ? s.push({
                          Icon: ae.a,
                          isEmphasized: !0,
                          testID: $,
                          text: pe,
                          onClick: function (e) {
                            e(), n()
                          },
                        })
                      : s.push({
                          Icon: re.a,
                          testID: Y,
                          text: de,
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
                  return b.createElement(Q.a, { items: this._getActionItems(), onCloseRequested: this.props.onClose })
                },
              },
            ]),
            n
          )
        })(b.Component),
        he = n('VS6U'),
        me = n('LsPn'),
        ye = 'searchBoxOverflowButton',
        be = n('aITJ'),
        ve = n('MWbm'),
        ge = n('v6aA'),
        Se = B.a.f9d35b98,
        _e = B.a.ha925ad3,
        Oe = B.a.h0a9931b,
        we = {
          customErrorHandler: function () {
            return Object(_.b)({ text: _e })
          },
          showToast: !0,
        },
        Ee = {
          customErrorHandler: function () {
            return Object(_.b)({ text: Se })
          },
          showToast: !0,
        },
        Pe = {
          customErrorHandler: function () {
            return Object(_.b)({ text: Oe })
          },
          showToast: !0,
        },
        ke = n('cHvH'),
        Ce = n('6vad'),
        Ie = n('k/OQ'),
        je = n('8Lfv'),
        Re = function (e, t) {
          return 'POP' === t.history.action
        },
        xe = function (e, t) {
          var n,
            r = t.location
          return null == r || null === (n = r.state) || void 0 === n ? void 0 : n.urtEndpointOptions
        },
        Te = Object(E.a)()
          .propsFromState(function () {
            return { dataLookupId: w.j, isBackNavigation: Re, searchMode: w.k, urtEndpointOptions: xe }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: function (e) {
                var t = e.fetchOptions,
                  n = e.module
                return Object(je.a)(n, t)
              },
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'SEARCH_RESULTS_SCREEN',
              ),
              googleAnalyticsPageView: S.a,
              scribePageImpression: S.d,
            }
          }),
        De = n('s14A'),
        Le = n('dwig'),
        Ae = n('3X8/'),
        Be = n('0+qk'),
        Fe = n('Ds5i'),
        ze = n.n(Fe),
        Ne = n('h2mu'),
        He = n('i6OR'),
        Me = n('pQ3Z'),
        Ue = n.n(Me)
      function qe(e, t) {
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
      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qe(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : qe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function We(e) {
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
      var Ke = function (e) {
          return e && ze()(e) ? { defaultText: ' '.concat(e), positionCursorAtBeginning: !0 } : void 0
        },
        Qe = (function (e) {
          l()(n, e)
          var t = We(n)
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
                Object(F.a)(function (e, t, n) {
                  var r = n === w.d.Topics ? '_topics' : '',
                    a = 'search_filter_'.concat(t).concat(r)
                  return Ve(Ve({}, e), {}, { section: a })
                }),
              ),
              y()(s()(e), '_getMemoizedComposeLocationState', Object(F.a)(Ke)),
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
                    (!c && e.query === r && e.querySrc === a && Ue()(e.searchFilters, o)) ||
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
                  return b.createElement(
                    Le.a,
                    { component: De.a, fab: this._renderFloatingComposeButton(), shouldRenderFab: !a },
                    b.createElement(
                      V.b,
                      { namespace: this._getTimelineScribeNamespace() },
                      b.createElement(Ne.a, {
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
                  return b.createElement(Be.a, { getLocationState: this._getFabState, history: e })
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
                    module: Object(He.b)({
                      query: r,
                      querySource: a,
                      searchMode: c,
                      searchFilters: o,
                      urtEndpointOptions: i,
                    }),
                    fetchOptions: this._getFetchOptions(),
                  }).catch(n(Ae.a))
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(Qe, 'contextType', ge.a)
      var Ge = Object(V.c)({ page: 'search', section: 'universal' })(Te(Qe))
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
                y()(e, t, n[t])
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ye = B.a.eb0ecd1d,
        $e = B.a.cceeb26b,
        et = B.a.i66136a9,
        tt = B.a.d601fc2f,
        nt = B.a.g2fd3205,
        rt = B.a.ac4fb0f3,
        at = B.a.a9ae1e78,
        ot = B.a.bb967f9e,
        ct = B.a.aea62567,
        it = B.a.gfcfbf8b,
        st = B.a.a4645d91,
        ut = [
          { type: w.c.Top, label: et },
          { type: w.c.Live, label: tt },
          { type: w.c.User, label: nt },
          { type: w.c.Image, label: rt },
          { type: w.c.Video, label: ot },
        ],
        lt = (function (e) {
          l()(n, e)
          var t = Je(n)
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
                Object(F.a)(function (e, t, n, r, a) {
                  return {
                    search_details: Ze(
                      {},
                      Object(w.f)({ query: e, querySrc: t, searchFilters: n, modeValue: r, vertical: a }),
                    ),
                  }
                }),
              ),
              y()(s()(e), '_renderRightControl', function (t) {
                var n = t.isTwoColumn,
                  r = t.searchFocused
                return n || !r
                  ? b.createElement(z.a, { onClick: e._handleOverflowMenuClick, renderMenu: e._renderMenu, testID: ye })
                  : void 0
              }),
              y()(s()(e), '_renderMenu', function (t) {
                var n = e.props,
                  r = n.history,
                  a = n.isQueryAlreadySaved,
                  o = n.location,
                  c = !!e.context.loggedInUserId
                return b.createElement(ke.a, null, function (n) {
                  var i = n.windowWidth,
                    s = v.a.isTwoColumnLayout(i)
                  return b.createElement(fe, {
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
                      return n({ text: it })
                    })
                    .catch(a(i < 25 ? we : Ee))
                var s = q.a.forSavedSearchResult(o, i)
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
                      return n({ text: st })
                    })
                    .catch(a(Pe))
                  var l = q.a.forSavedSearchResult(u.query, s)
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
                return b.createElement(
                  ve.a,
                  null,
                  b.createElement(Ge, t),
                  n
                    ? b.createElement(L.a, {
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
                return b.createElement(
                  g.a,
                  { withSearchBox: !1, withTrends: !!a },
                  b.createElement(
                    ve.a,
                    null,
                    b.createElement(Ce.b, { text: ct }),
                    b.createElement(W.b, { history: n, key: r.key, location: r }),
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
                            Ze(
                              Ze({}, c),
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
                return b.createElement(Ie.a, { links: i })
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
                    return w.i[t] === e
                  }
                })
              }),
              y()(
                s()(e),
                '_getMemoizedModeLinks',
                Object(F.a)(function (e, t, n, r, a, o, c) {
                  return ut.map(function (i) {
                    var s = w.i[i.type]
                    return {
                      link: Object(w.e)({
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
                var t = M.a.findDOMNode(e._searchBoxRef)
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
                    p = d ? $e({ query: o }) : Ye,
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
                    ? b.createElement(
                        V.b,
                        { data: this._getScribeData(o, c, i, a, u) },
                        b.createElement(
                          N.a,
                          null,
                          null,
                          b.createElement(ke.a, null, function (t) {
                            var r = t.windowWidth,
                              a = v.a.isTwoColumnLayout(r),
                              c = e._renderRightControl({ isTwoColumn: a, searchFocused: s })
                            return b.createElement(he.a, {
                              backLocation: '/explore',
                              composeOptions: Ke(o),
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
                          be.b.isKaiOS() &&
                            b.createElement(me.a, { leftText: at, onLeftClick: this._handleSoftLeftClick }),
                        ),
                      )
                    : K.a[this._searchHomePageVariation] && !this._loggedInUserId
                    ? b.createElement(U.a, { to: '/' })
                    : b.createElement(U.a, { to: '/explore' })
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(lt, 'contextType', ge.a)
      var dt = D(lt)
      t.default = dt
    },
    '1zbE': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return s
        }),
        n.d(t, 'c', function () {
          return u
        })
      n('yH/f')
      var r = n('ERkP'),
        a = n('t62R'),
        o = n('3XMw'),
        c = n.n(o),
        i = 'phone_email',
        s = Object.freeze({ LogIn: 'login', SignUp: 'signup' }),
        u = r.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'c4d3d078' },
          r.createElement(a.b, { link: 'https://twitter.com/tos' }, c.a.c8c5faad),
          r.createElement(a.b, { link: 'https://twitter.com/privacy' }, c.a.ba5b7ecb),
          r.createElement(a.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-cookies' }, c.a.f4fe46c3),
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
        return N
      })
      n('yH/f')
      var r = n('ERkP'),
        a = n('Hde2'),
        o = n('bojF'),
        c = n('3XMw'),
        i = n.n(c),
        s = n('lUZE'),
        u = n('1f8Q'),
        l = n('72nz'),
        d = n('rHpw'),
        p = n('MWbm'),
        f = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        h = n.n(f),
        m = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        y = n('iCMz'),
        b = n('Rp9C'),
        v = n('Irs7'),
        g = n('htQn'),
        S = n('t62R')
      function _(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w,
        E = i.a.d228a9a0,
        P = i.a.jae84f3a,
        k = { section: 'logged_out_search', component: 'trend' },
        C = function (e) {
          var t = e.position,
            n = e.trend,
            a = Object(v.b)(),
            o = r.useMemo(
              function () {
                return [O(O({}, b.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          r.useEffect(
            function () {
              a.scribe(O(O({}, k), {}, { action: 'impression', data: { items: o } }))
            },
            [a, o],
          )
          var c = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return r.createElement(
            g.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return a.scribe(O(O({}, k), {}, { action: 'click', data: { items: o } }))
              },
              withInteractiveStyling: !1,
            },
            r.createElement(S.b, { color: 'gray700', key: n, link: c, style: j.searchTrend }, n),
          )
        },
        I = function (e) {
          var t = e.deviceSize,
            n = e.trendResults.slice(0, 5)
          return r.createElement(
            p.a,
            {
              accessibilityLabel: P,
              accessibilityRole: 'list',
              style: [j.searchTrends, 'desktop' === t && j.searchTrendsWide],
            },
            n.map(function (e, t) {
              return r.createElement(C, { key: e, position: t, trend: e })
            }),
            r.createElement(
              g.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              r.createElement(S.b, { link: '/explore', style: j.searchTrend }, E),
            ),
          )
        },
        j = d.a.create(function (e) {
          return {
            bottomBarForMobile: {
              backgroundColor: e.colors.navigationBackground,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              padding: 'calc('.concat(e.spaces.space16, ' + ').concat(d.a.iPhoneOffsetBottom, ')'),
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
        R = function (e) {
          var t = e.deviceSize,
            n = e.scribeNamespace,
            c = e.trendResults,
            i = function () {
              return r.createElement(y.a, {
                buttonSize: 'large',
                loginButtonType: 'primaryOutlined',
                scribeNamespace: O(O({}, n), {}, { component: 'signup_callout', element: 'form', section: 'front' }),
                signupButtonType: 'primaryFilled',
              })
            }
          return r.createElement(
            r.Fragment,
            null,
            'desktop' !== t
              ? r.createElement(a.a, { style: j.bottomBarForMobile }, i())
              : r.createElement(
                  p.a,
                  { style: j.searchNavBar },
                  r.createElement(p.a, { style: j.searchNavButtons }, i()),
                ),
            r.createElement(
              p.a,
              { style: [j.searchRoot, 'desktop' !== t && j.searchRootMobile] },
              r.createElement(s.a, { style: j.twitterIconSearch }),
              r.createElement(
                p.a,
                { style: [j.searchBox, 'desktop' === t && j.searchBoxWide] },
                r.createElement(l.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
              ),
              c && r.createElement(I, { deviceSize: t, trendResults: c }),
            ),
            r.createElement(
              o.CookieComplianceBannerPadder,
              null,
              r.createElement(
                p.a,
                { style: [j.searchHomeFooter, 'desktop' !== t && j.searchHomeFooterMobile] },
                r.createElement(m.a, { align: 'center' }),
              ),
            ),
          )
        },
        x = i.a.g0ff1ca8,
        T = i.a.g3aa4a89,
        D = d.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: d.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        L = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              p.a,
              { style: [j.searchRoot, 'desktop' !== t && j.searchRootMobile, D.searchRootWithBanner] },
              r.createElement(s.a, { style: j.twitterIconSearch }),
              r.createElement(
                p.a,
                { style: [j.searchBox, 'desktop' === t && j.searchBoxWide] },
                r.createElement(l.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
              ),
              n && r.createElement(I, { deviceSize: t, trendResults: n }),
            ),
            r.createElement(
              o.CookieComplianceBannerPadder,
              null,
              r.createElement(
                a.a,
                { style: D.bottomBarBanner },
                r.createElement(u.a, { buttonSize: 'large', fullWidth: !0, subtext: T, text: x }),
              ),
            ),
          )
        },
        A = n('n0Rl'),
        B = n('RgK2'),
        F = n.n(B),
        z = n('kGix'),
        N = (n('enFi'), Object.freeze({ original: 'original', banner: 'banner', split: 'split' })),
        H = void 0 !== w ? w : (w = n('x1T0')),
        M = Object(A.b)(H, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.deviceSize,
          n = e.scribeNamespace,
          a = e.variation
        return r.createElement(M, {
          render: function (e) {
            var o,
              c = e.data,
              i = e.fetchStatus,
              s =
                (e.retry,
                i === z.a.LOADED
                  ? null == c || null === (o = c.logged_out_trends_list) || void 0 === o
                    ? void 0
                    : o.trends
                  : void 0)
            return a === N.original
              ? r.createElement(R, { deviceSize: t, scribeNamespace: n, trendResults: s })
              : a === N.banner
              ? r.createElement(L, { deviceSize: t, trendResults: s })
              : null
          },
          variables: F.a,
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
        S = n('3XMw'),
        _ = n.n(S),
        O = n('cnVF'),
        w = n('Ukpf'),
        E = n('BTou'),
        P = n('mrHL'),
        k = 'LoginForm_Login_Button',
        C = n('fEA7'),
        I = n.n(C),
        j = n('MWbm'),
        R = n('Irs7'),
        x = n('v6aA'),
        T = n('/yvb'),
        D = n('rHpw')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var A = _.a.e919c3bc,
        B = (function (e) {
          p()(n, e)
          var t = L(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_mobileLoginToken', I.a.v1().replace(/-/g, '')),
              v()(l()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), E.a.flushHTMLCache(), e._setLoginCookie(), r))
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
                  Object(P.e)(O.q, e._mobileLoginToken, {
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
                  w.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
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
                    S = g.createElement(
                      j.a,
                      { style: o && F.horizontalFields },
                      g.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: v }),
                      g.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      g.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      g.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      g.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : g.createElement(
                            j.a,
                            { style: o && F.loginButtonContainer },
                            g.createElement(
                              T.a,
                              {
                                disabled: i,
                                onPress: this._handleSubmitButtonClick,
                                size: u,
                                style: l,
                                testID: k,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return g.createElement(
                    j.a,
                    { style: F.loginForm },
                    g.createElement('form', {
                      action: n,
                      children: S,
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
        })(g.Component)
      v()(B, 'contextType', x.a),
        v()(B, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: A,
          submitButtonType: 'brandFilled',
        })
      var F = D.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(R.a)(B, { element: 'inline_login_form' })
    },
    '72nz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchBoxContainer', function () {
          return vt
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
        S = n('+Kfv'),
        _ = n('lnti'),
        O = n('wtjx'),
        w = n('rxPX'),
        E = Object(w.a)()
          .propsFromActions(function () {
            return { addQuery: O.a }
          })
          .withAnalytics({ component: 'search_box' }),
        P = n('Hw0q'),
        k = n('3XMw'),
        C = n.n(k),
        I = n('8jkQ'),
        j = n('u3ZE'),
        R = n('rRIm'),
        x = n('Rp9C'),
        T = n('RhWx'),
        D = n.n(T),
        L =
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
        A = n('3IPs'),
        B = n('M0jS'),
        F = n('G6rE'),
        z = n('k49u'),
        N = n('J4ZH'),
        H = n('0KEI'),
        M = n('v4XE'),
        U = n('kGix')
      function q(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var W = function (e) {
          return (
            Object(z.c)(e, z.a.GenericUserNotFound) ||
            Object(z.c)(e, z.a.OtherUserSuspended) ||
            Object(z.c)(e, z.a.AddressBookLookupNotFound)
          )
        },
        K = Object(w.a)()
          .propsFromState(function () {
            var e = Object(L.createSelector)(O.g, F.e.selectFetchStatuses, function (e, t) {
                var n = Object(_.a)(
                  e.map(function (e) {
                    var n,
                      r = null === (n = e.user) || void 0 === n ? void 0 : n.id
                    return r && t[r] ? { id: r, fetchStatus: t[r] } : void 0
                  }),
                )
                return Object(N.a)(n, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(L.createSelector)(e, function (e) {
                return (e[U.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(L.createSelector)(e, F.e.selectErrors, function (e, t) {
                return (e[U.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return W(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              r = Object(L.createSelector)(e, F.e.selectErrors, function (e, t) {
                var n = (e[U.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !W(t[n] || {})
                })
                return (e[U.a.LOADING] || []).length > 0
                  ? U.a.LOADING
                  : (e[U.a.LOADED] || []).length > 0
                  ? U.a.LOADED
                  : n.length > 0
                  ? U.a.FAILED
                  : U.a.NONE
              }),
              a = Object(L.createSelector)(O.g, function (e) {
                return e.map(function (e) {
                  return V(V({}, e), {}, { category: A.b.RecentSearch })
                })
              }),
              o = Object(L.createSelector)(M.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: A.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: O.e,
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
              s = c !== U.a.LOADING && r && i ? U.a.LOADED : c
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
              clearAll: O.b,
              createLocalApiErrorHandler: Object(H.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: M.a,
              fetchRecentSearchesIfNeeded: O.c,
              fetchSavedSearchesIfNeeded: M.b,
              fetchUsersIfNeeded: F.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: B.b.fetchManyIfNeeded,
              removeQuery: O.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        Q = n('sYRn'),
        G = n('v//M'),
        X = n('7nmT'),
        Z = n.n(X),
        J = (n('jQ/y'), n('m3Bd')),
        Y = n.n(J),
        $ = n('hOZg'),
        ee = n('5T6p'),
        te = n('MWbm'),
        ne = n('/yvb'),
        re = n('rHpw')
      function ae(e) {
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
      var oe = C.a.e68b09b4,
        ce = (function (e) {
          p()(n, e)
          var t = ae(n)
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
                    r = Y()(e, ['id', 'onRemove'])
                  return t
                    ? g.createElement(
                        te.a,
                        { style: ie.root },
                        g.createElement(ee.a, r),
                        g.createElement(ne.a, {
                          accessibilityLabel: oe,
                          icon: g.createElement($.a, null),
                          onPress: n,
                          size: 'small',
                          style: ie.button,
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
                    category: A.b.RecentSearch,
                    query: t,
                    recentSearchType: A.a.Event,
                    queryMetadata: { id: t, image: n, title: a, supportText: r },
                  }
                },
              },
            ]),
            n
          )
        })(g.PureComponent),
        ie = re.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        se = ce,
        ue = n('j7Bv'),
        le = n('5mJL'),
        de = n('t62R'),
        pe = n('EHV7')
      function fe(e) {
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
      var he = g.createElement($.a, null),
        me = C.a.e68b09b4,
        ye = (function (e) {
          p()(n, e)
          var t = fe(n)
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
                    i = g.createElement(ue.a, { Icon: pe.a, color: 'primary', size: c, style: be.searchIcon })
                  return g.createElement(
                    le.a,
                    { avatarCell: i, avatarSize: c, cellStyle: be.bodyColumn },
                    g.createElement(
                      te.a,
                      null,
                      g.createElement(de.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, r),
                      g.createElement(de.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    g.createElement(ne.a, {
                      accessibilityLabel: me,
                      icon: he,
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
                        category: A.b.RecentSearch,
                        query: n,
                        recentSearchType: A.a.Topic,
                        queryMetadata: { id: n, name: r, description: t },
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(g.Component),
        be = re.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ve = function (e, t) {
          return F.e.select(e, t.id)
        },
        ge = function (e, t) {
          return Object(B.c)(e, t.id)
        },
        Se = Object(w.a)().propsFromState(function () {
          return { user: ve, userSpace: ge }
        }),
        _e = n('v6aA'),
        Oe = n('IMA+')
      function we(e) {
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
      var Ee = g.createElement($.a, null),
        Pe = C.a.e68b09b4,
        ke = C.a.fd06b02f,
        Ce = (function (e) {
          p()(n, e)
          var t = we(n)
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
                  i && (i.accessibilityLabel = ke({ screenName: r.screen_name }))
                  var s = g.createElement(ne.a, {
                    accessibilityLabel: Pe,
                    icon: Ee,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return g.createElement(Oe.a, {
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
                        category: A.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: A.a.User,
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(g.Component)
      v()(Ce, 'contextType', _e.a)
      var Ie = Se.forwardRef(Ce),
        je = n('oQhu'),
        Re = n('hiGS'),
        xe = n('VwDm')
      function Te(e) {
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
      var De = g.createElement($.a, null),
        Le = g.createElement(Re.a, null),
        Ae = Object(je.a)(function (e) {
          return e === A.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Be = Object(je.a)(function (e) {
          return e === A.b.SavedSearch ? Le : De
        }),
        Fe = (function (e) {
          p()(n, e)
          var t = Te(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_getButtonType', function () {
                var t = e.props.category
                return Ae(t)
              }),
              v()(l()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Be(t)
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
                    a = g.createElement(ue.a, { Icon: xe.a, color: 'neutral', size: r, style: ze.searchIcon })
                  return g.createElement(
                    le.a,
                    { avatarCell: a, avatarSize: r, cellStyle: ze.bodyColumn },
                    g.createElement(de.b, { numberOfLines: 1, withHashflags: !0 }, n),
                    g.createElement(ne.a, {
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
                    recentSearchType: t === A.b.RecentSearch ? A.a.Keyword : void 0,
                  }
                },
              },
            ]),
            n
          )
        })(g.Component),
        ze = re.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        Ne = Fe,
        He = n('htQn')
      function Me(e) {
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
      var Ue = (function (e) {
        p()(n, e)
        var t = Me(n)
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
                ? g.createElement(Ne, {
                    category: n.category,
                    onRemove: a._handleOnRemove,
                    query: n.keyword.query,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.user
                ? g.createElement(Ie, {
                    id: n.user.id || '',
                    index: t,
                    onItemClick: r,
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    style: qe.itemPadding,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.topic
                ? g.createElement(ye, {
                    description: n.topic.description || '',
                    id: n.topic.id,
                    name: n.topic.name || '',
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.event
                ? g.createElement(se, {
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
                return g.createElement(
                  S.a,
                  { viewType: 'search_item' },
                  g.createElement(
                    He.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: { selected: !!t },
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [qe.root, t && qe.focused, !(null != n && n.user) && qe.itemPadding],
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
      })(g.Component)
      v()(Ue, 'contextType', _e.a)
      var qe = re.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        Ve = Ue,
        We = n('4ZbN'),
        Ke = n('eb3s'),
        Qe = n('MXDK')
      function Ge(e, t) {
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
      function Xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ge(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ge(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ze(e) {
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
      var Je = C.a.ee295fbe,
        Ye = { headline: C.a.f45c425f, text: C.a.caae4dd9, confirmButtonLabel: C.a.dbd5d40f },
        $e = C.a.a8d68f61,
        et = C.a.c6530778,
        tt = C.a.e047b8fa,
        nt = ['user', 'keyword'],
        rt = (function (e) {
          p()(n, e)
          var t = Ze(n)
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
                  ? g.createElement(
                      te.a,
                      { style: at.emptyState, testID: We.a.typeaheadEmptySearch },
                      g.createElement(de.b, { align: 'center', color: 'gray700' }, Je),
                    )
                  : g.createElement(
                      te.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      o.length > 0
                        ? g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              te.a,
                              { style: at.header, testID: We.a.typeaheadRecentSearchesHeader },
                              g.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, $e),
                              g.createElement(
                                ne.a,
                                { onPress: a._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                tt,
                              ),
                            ),
                            o.map(function (e, t) {
                              return a._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      n.length > 0
                        ? g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              te.a,
                              {
                                accessibilityHidden: !0,
                                style: [at.header, at.borderTop],
                                testID: We.a.typeaheadSavedSearchesHeader,
                              },
                              g.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, et),
                            ),
                            a._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              v()(l()(a), '_renderRecentSearchItem', function (e, t) {
                var n = a.props.ariaDescendantId,
                  r = a.state.focusIndex === t
                return g.createElement(Ve, {
                  domId: r ? n : void 0,
                  index: t,
                  item: e,
                  key: a._chooseKeyType(e, t),
                  onItemClick: a._handleOnItemClick,
                  onRemoveQuery: a._handleRemoveQuery,
                  ref: r ? a._setFocusedItemRef : void 0,
                  testID: We.a.typeaheadRecentSearchesItem,
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
                  c = D()(n)
                return (
                  c.reverse(),
                  g.createElement(
                    te.a,
                    { testID: We.a.typeaheadSavedSearchesContainer },
                    c.map(function (e, n) {
                      var c = r === n + o.length
                      return g.createElement(Ve, {
                        domId: c ? t : void 0,
                        index: n,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: a._handleOnItemClick,
                        onRemoveQuery: a._handleRemoveQuery,
                        ref: c ? a._setFocusedItemRef : void 0,
                        testID: We.a.typeaheadSavedSearchesItem,
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
                  case A.b.RecentSearch:
                    var c = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    o(c), a._resetFocus()
                    var i = x.a.forRecentSearchResult(c, t),
                      s = a._handleRemoveAction(e)
                    i && r.scribe({ action: s, data: { items: [i] } })
                    break
                  case A.b.SavedSearch:
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
                  var s = i && x.a.forSavedSearchResult(i.keyword.query, c)
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
                  var r = Object(_.a)(
                    n.map(function (e, t) {
                      return x.a.forRecentSearchResult(e, t)
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
                  var r = Object(_.a)(
                    n.map(function (e, t) {
                      return x.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: r } })
                }
              }),
              v()(l()(a), '_scribeClick', function (e, t) {
                var n = a.props.analytics
                switch (e.category) {
                  case A.b.SavedSearch:
                    var r = x.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [r] } })
                    break
                  case A.b.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === A.a.User
                          ? { user: { type: A.a.User, id: e.query } }
                          : e.recentSearchType === A.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: Xe(Xe({}, e.queryMetadata), {}, { type: A.a.Event, id: e.query }) }
                          : e.recentSearchType === A.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: Xe(Xe({}, e.queryMetadata), {}, { type: A.a.Topic, id: e.query }) }
                          : { keyword: { type: A.a.Keyword, query: e.query } })
                    var c = o && x.a.forRecentSearchResult(o, t)
                    c && n.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              v()(l()(a), '_setFocusedItemRef', function (e) {
                ;(a._focusedItemRef = e),
                  e &&
                    a._shouldScrollToFocusedItem &&
                    (Object(Qe.c)(a._getScrollParent(), a._getFocusedItem()), (a._shouldScrollToFocusedItem = !1))
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
                  [].concat(nt, [o ? 'topic' : '', i ? 'event' : ''])),
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
                  return g.createElement(
                    te.a,
                    { style: n },
                    g.createElement(G.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? g.createElement(Ke.a, {
                          confirmButtonLabel: Ye.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Ye.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: We.a.deleteRecentSearchesDialog,
                          text: Ye.text,
                        })
                      : null,
                    o
                      ? g.createElement(Q.a, {
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
                    var e = Object(Qe.a)(Z.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function () {
                  var e = this._focusedItemRef && Z.a.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            n
          )
        })(g.Component)
      v()(rt, 'contextType', _e.a)
      var at = re.a.create(function (e) {
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
        ot = K.forwardRef(rt),
        ct = 'SearchBox_Search_Input',
        it = n('TnY3'),
        st = n('GZwR'),
        ut = n('4e/K')
      function lt(e, t) {
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
      function dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? lt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : lt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function pt(e) {
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
      var ft = C.a.ib2e46ee,
        ht = C.a.hbc99b02,
        mt = /^(\w+)$/,
        yt = [st.a.Events, st.a.Users, st.a.Topics],
        bt = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        vt = (function (e) {
          p()(n, e)
          var t = pt(n)
          function n(e, r) {
            var o, i
            return (
              c()(this, n),
              (i = t.call(this, e, r)),
              v()(l()(i), '_withNewTypeaheadUI', !1),
              v()(l()(i), '_reorderResults', function (e, t, n, r) {
                return Object(_.a)([e, t.length ? t : void 0, n.length ? n : void 0, r.length ? r : void 0])
              }),
              v()(l()(i), '_renderSearchBoxEmptyState', function (e) {
                return g.createElement(ot, a()({}, e, { onItemClick: i._handleSearchItemClick }))
              }),
              v()(l()(i), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  r = e.query,
                  a = e.queryMetadata,
                  o = e.recentSearchType,
                  c = i.props.addQuery
                t === A.b.SavedSearch
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !1, src: j.a.SavedSearchClick })
                  : o === A.a.Keyword
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: j.a.RecentSearchClick })
                  : o === A.a.Event
                  ? (i._routeTransition({ pathname: '/i/events/'.concat(r) }),
                    a && a.title && c({ event: dt(dt({}, a), {}, { id: r, type: A.a.Event }) }))
                  : o === A.a.Topic
                  ? (i._routeTransition({ pathname: '/i/topics/'.concat(r) }),
                    a && a.name && c({ topic: dt(dt({}, a), {}, { id: r, type: A.a.Topic }) }))
                  : n && (i._routeTransition({ pathname: '/'.concat(n) }), c({ user: { id: r, type: A.a.User } }))
              }),
              v()(l()(i), '_handleSearchShortcut', function (e) {
                var t = i._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              v()(l()(i), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = bt(t)
                if (n.match(mt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: st.b.NoResult,
                    data: { text: ht({ screenName: n }), type: 'user' },
                  }
              }),
              v()(l()(i), '_handleOnDismiss', function () {
                var e = i.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var r = dt(dt({}, t), {}, { state: dt(dt({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
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
                  var o = dt(dt({}, r), {}, { state: dt(dt({}, a), {}, { searchFocused: !0, lockScroll: !0 }) })
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
                    data: { items: x.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  i._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              v()(l()(i), '_handleItemClick', function (e, t) {
                var n = i.props.addQuery,
                  r = i.state.query
                switch (e.type) {
                  case st.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: A.a.User } })
                    i._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case st.b.Topic:
                  case st.b.Hashtag:
                    i._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
                    break
                  case st.b.Event:
                    e.data && e.data.url
                      ? i._routeTransition({ pathname: I.b.parseInternalUrl(e.data.url) })
                      : i._submitQuery({ query: e.data.topic, src: j.a.TypeaheadClick })
                    break
                  case st.b.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? i._routeTransition({ pathname: '/'.concat(bt(r)) })
                      : 'topic' === a &&
                        i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
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
                  u = dt(
                    dt({}, s),
                    {},
                    {
                      pathname: n,
                      search: '',
                      query: t || (r ? { q: r, src: a } : {}),
                      state: dt(dt({}, s.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                c.replace(u)
              }),
              v()(l()(i), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  r = void 0 !== n && n,
                  a = e.src,
                  o = void 0 === a ? j.a.Typed : a,
                  c = i.props,
                  s = c.addQuery,
                  u = c.mode,
                  l = c.onSubmit,
                  d = c.searchFilters,
                  p = c.searchRoute
                ;(l && l(t, o, i.state.lastSubmittedQuery === t), r) && s({ keyword: { query: t, type: A.a.Keyword } })
                var f = Object(A.g)({ query: t, querySrc: o, mode: u, searchFilters: d })
                i._routeTransition({ pathname: p, params: f, src: o }), i.setState({ lastSubmittedQuery: t })
              }),
              v()(l()(i), '_setInputRef', function (e) {
                i._inputRef = e
              }),
              (i.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(P.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
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
                    (this._unregisterSearchShortcutHandler = Object(R.b)(this._handleSearchShortcut))
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
                    g.createElement(
                      S.a,
                      { viewType: 'search_field' },
                      g.createElement(
                        te.a,
                        { style: gt.root },
                        g.createElement(ut.default, {
                          filter: yt,
                          forceVdlDisable: n,
                          getTopicExactMatch: u ? st.f : void 0,
                          getUserExactMatch: u ? this._getUserExactMatch : void 0,
                          initialValue: p,
                          inputStyle: gt.input,
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
                          source: st.d.SearchBox,
                          testID: ct,
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
        })(g.Component)
      v()(vt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: ft,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        v()(vt, 'contextType', _e.a)
      var gt = re.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(it.a)(E(vt))
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
        c = n('Hde2'),
        i = n('H1k/'),
        s = n('Ty5D'),
        u = n('496R')
      function l(e) {
        return !['/i/flow/login'].includes(e)
      }
      function d() {
        var e = Object(s.h)(),
          t = o.useState(function () {
            return l(e.pathname)
          }),
          n = a()(t, 2),
          r = n[0],
          c = n[1]
        return (
          o.useEffect(
            function () {
              c(l(e.pathname))
            },
            [c, e],
          ),
          r
        )
      }
      t.a = Object(u.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = d()
        return !e.hideCookieBannerPicker && t ? o.createElement(c.a, null, o.createElement(i.a, null)) : null
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
        return ae
      })
      var r = n('ERkP'),
        a = n('v6aA'),
        o = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        c = n.n(o),
        i = n('ddV6'),
        s = n.n(i),
        u = n('AS3p'),
        l = n('KUGV'),
        d = n('Irs7'),
        p = n('MWbm'),
        f = n('t62R'),
        h = n('cHvH'),
        m = n('rHpw'),
        y = n('/yvb'),
        b = n('3XMw'),
        v = n.n(b)
      function g(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _ = v.a.d8817e36,
        O = v.a.b9288ee6,
        w = v.a.i1390ec2,
        E = { page: 'cookie_compliance_banner' }
      function P() {
        var e = r.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          r.createElement(
            f.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            v.a.id7ef73f,
          ),
        )
        return r.createElement(C, { body: e, title: w })
      }
      function k(e) {
        var t = r.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          r.createElement(
            f.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            v.a.gfb2ba0f,
          ),
        )
        return r.createElement(C, { body: t, title: w })
      }
      function C(e) {
        return r.createElement(
          p.a,
          { style: j.cookieComplianceMessageWrap },
          r.createElement(f.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.createElement(
            f.b,
            { color: 'buttonWhite', size: 'subtext2', style: j.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var I = r.forwardRef(function (e, t) {
          var n = Object(d.b)()
          r.useEffect(
            function () {
              n.scribe(S(S({}, E), {}, { action: 'impression' }))
            },
            [n],
          )
          var o = (function () {
              var e = r.useState(!1),
                t = s()(e, 2),
                n = t[0],
                a = t[1],
                o = Object(d.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(S(S({}, E), {}, { action: 'click', element: 'expand_message' })), a(!0)
                },
              }
            })(),
            c = o.expand,
            i = o.isExpanded,
            f = (function () {
              var e = Object(d.b)(),
                t = r.useContext(a.a).featureSwitches,
                n = r.useState(function () {
                  return u.e(t) && !Object(l.a)()
                }),
                o = s()(n, 2),
                c = o[0],
                i = o[1]
              return {
                isBannerOpen: c,
                acceptAllCookies: function () {
                  e.scribe(S(S({}, E), {}, { action: 'click', element: 'accept_all' })), u.b(t), i(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(S(S({}, E), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), i(!1)
                },
              }
            })(),
            b = f.acceptAllCookies,
            v = f.isBannerOpen,
            g = f.refuseNonEssentialCookies
          return v
            ? r.createElement(h.a, null, function (e) {
                var n = e.windowWidth < m.a.theme.breakpoints.xLarge
                return r.createElement(
                  p.a,
                  { ref: t, style: [j.root, n && j.rootNarrow] },
                  i ? r.createElement(P, null) : r.createElement(k, { onExpand: c }),
                  r.createElement(
                    p.a,
                    { style: [j.buttonContainer, n && j.buttonContainerNarrow] },
                    r.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: b,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: m.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      _,
                    ),
                    r.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: g,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: m.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      O,
                    ),
                  ),
                )
              })
            : null
        }),
        j = m.a.create(function (e) {
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
        R = (n('OZaJ'), n('97Jx')),
        x = n.n(R),
        T = n('VrFO'),
        D = n.n(T),
        L = n('Y9Ll'),
        A = n.n(L),
        B = n('1Pcy'),
        F = n.n(B),
        z = n('5Yy7'),
        N = n.n(z),
        H = n('N+ot'),
        M = n.n(H),
        U = n('AuHH'),
        q = n.n(U),
        V = (n('hBvt'), n('RqPI')),
        W = n('rxPX'),
        K = Object(W.a)().propsFromState(function () {
          return { currentCountry: V.y }
        }),
        Q = n('cnVF'),
        G = n('mrHL'),
        X =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          })
      function Z(e) {
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
            r = q()(e)
          if (t) {
            var a = q()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return M()(this, n)
        }
      }
      var J = v.a.ia5e7487,
        Y = (function (e) {
          N()(n, e)
          var t = Z(n)
          function n(e, a) {
            var o
            D()(this, n),
              (o = t.call(this, e, a)),
              c()(F()(o), 'state', { euWarningIsOpen: !1 }),
              c()(F()(o), '_renderMessage', function () {
                return r.createElement(
                  f.b,
                  { color: 'white', size: 'subtext2' },
                  r.createElement(
                    v.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    r.createElement(
                      f.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: $.link,
                      },
                      v.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              c()(F()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(G.e)(Q.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var i = o.props.currentCountry,
              s = o.context.featureSwitches,
              u = s.getArrayValue('responsive_web_eu_countries', []),
              l = Object(G.d)({ featureSwitches: s, cookieName: Q.k })
            return (o.state = { euWarningIsOpen: !!i && X(u, i, l) }), o
          }
          return (
            A()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.createElement(h.a, null, function (t) {
                        var n = t.windowWidth < m.a.theme.breakpoints.medium
                        return r.createElement(
                          p.a,
                          { ref: e.props.innerRef, style: [$.root, n && $.rootNarrow] },
                          e._renderMessage(),
                          r.createElement(
                            y.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [$.closeButton, n && $.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            J,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(r.Component)
      c()(Y, 'contextType', a.a)
      var $ = m.a.create(function (e) {
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
        ee = r.forwardRef(function (e, t) {
          return r.createElement(Y, x()({}, e, { innerRef: t }))
        }),
        te = K.forwardRef(ee),
        ne = n('+d3d')
      function re(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = r.useCallback(
            Object(ne.a)(function (t) {
              if (e)
                if (t) {
                  var n = t.getBoundingClientRect()
                  n && e(n)
                } else e(null)
            }, t),
            [e, t],
          )
        return r.useCallback(
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
      function ae(e) {
        var t,
          n = r.useContext(a.a).featureSwitches,
          o =
            ((t = e.onHeightChange),
            re(
              r.useMemo(
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
          ? r.createElement(I, { ref: o })
          : r.createElement(te, { ref: o })
      }
    },
    L7to: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
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
        b = (n('z84I'), n('ho0z'), n('MvUL'), n('KqXw'), n('jQ3i'), n('x4t0'), n('vrRf'), n('uFXj'), n('ERkP')),
        v = n('3XMw'),
        g = n.n(v),
        S = n('RxYA'),
        _ = (n('yH/f'), Object.freeze({ People: 'People', Location: 'Location' })),
        O = 'searchFiltersAdvancedSearch',
        w = n('MWbm'),
        E = n('Irs7'),
        P = n('v6aA'),
        k = n('fyvP'),
        C = n('rC8y'),
        I = n('rHpw'),
        j = n('3A2y'),
        R = n('Zkey')
      function x(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function D(e) {
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
      var L = g.a.j622effd,
        A = g.a.g2fd3205,
        B = g.a.defb4aa9,
        F = g.a.af293dc2,
        z = g.a.jaaa8984,
        N = g.a.i5045e73,
        H = g.a.h2388753,
        M = 'anyone',
        U = 'youFollow',
        q = 'anywhere',
        V = 'nearYou',
        W = [
          {
            label: A,
            name: _.People,
            options: [
              { label: B, value: M },
              { label: F, value: U },
            ],
          },
          {
            label: z,
            name: _.Location,
            options: [
              { label: N, value: q },
              { label: H, value: V },
            ],
          },
        ],
        K = (function (e) {
          l()(n, e)
          var t = D(n)
          function n(e, r) {
            var o
            a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_renderFilters', function () {
                return W.map(function (e, t) {
                  return b.createElement(
                    w.a,
                    { key: e.name, style: t > 0 && Q.paddingTop },
                    b.createElement(k.a, {
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
                  case _.People:
                    return o.state.peopleFilter
                  case _.Location:
                    return o.state.locationFilter
                  default:
                    return ''
                }
              }),
              y()(s()(o), '_handleFilterChange', function (e, t) {
                var n = o.context.loggedInUserId,
                  r = o.props.location.query
                switch (e) {
                  case _.People:
                    if (n) {
                      o.setState({ peopleFilter: t })
                      var a = { pf: t === U ? 'on' : void 0, lf: 'on' === r.lf ? r.lf : void 0 }
                      o._executeSearch(a, 'people')
                    } else o.setState({ shouldShowLoginSheet: !0 })
                    break
                  case _.Location:
                    o.setState({ locationFilter: t })
                    var c = { lf: t === V ? 'on' : void 0, pf: 'on' === r.pf ? r.pf : void 0 }
                    o._executeSearch(c, 'location')
                }
              }),
              y()(s()(o), '_getAdvancedSearchLink', function () {
                var e = o.props.location
                return { pathname: '/search-advanced', query: T({}, Object(j.a)(e.query, ['q', 'src'])) }
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
                r.replace({ pathname: c, query: Object(R.a)(T(T({}, a.query), e)) })
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
              u = c && i && i.pf ? U : M,
              l = i && i.lf ? V : q
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
                  return b.createElement(
                    w.a,
                    null,
                    b.createElement(w.a, { style: Q.content }, this._renderFilters()),
                    b.createElement(
                      w.a,
                      { style: e && Q.bottomBorder, testID: O },
                      b.createElement(C.a, {
                        link: this._getAdvancedSearchLink(),
                        onPress: this._handleFooterPress,
                        text: L,
                      }),
                    ),
                    t ? b.createElement(S.a, { onClose: this._handleHideLoginSheet }) : null,
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(K, 'contextType', P.a), y()(K, 'defaultProps', { withBottomBorder: !1 })
      var Q = I.a.create(function (e) {
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
      t.b = Object(E.a)(K, { page: 'search_filters' })
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
            return Promise.all([n.e(0), n.e(338)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: s.a.Critical,
        },
        l = {
          loader: function () {
            return Promise.all([n.e(0), n.e(340)]).then(n.bind(null, 'hX2d'))
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
        v = n('/yvb'),
        g = n('hUVV'),
        S = n('3XMw'),
        _ = n.n(S),
        O = n('iKTg'),
        w = n('TaB8'),
        E = n('1zbE'),
        P = n('Ukpf'),
        k = n('cnVF'),
        C = n('TnY3'),
        I = n('0+0m'),
        j = n('v6aA'),
        R = n('2qJZ')
      function x(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function D(e) {
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
      var L = _.a.ib65b1c6,
        A = _.a.f55cebb7,
        B = _.a.g61ed8a4,
        F = { clientId: I.a, scope: 'name email', usePopup: !0 },
        z = (function (e) {
          l()(n, e)
          var t = D(n)
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
                Object(w.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              y()(s()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  r = Object(R.c)(e.context.featureSwitches) ? 'https://'.concat(R.b) : 'https://'.concat(R.a)
                t &&
                  n(k.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(T(T({}, F), {}, { redirectURI: r, state: n }))
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
                              provider: k.A.Apple,
                              state: s[k.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== I.f
                        ? (r.scribe({ component: 'apple_sign_in', element: a, action: 'failure' }), n({ text: B }))
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
                    P.a.inject({
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
                    o = n === E.a.SignUp ? L : A
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : b.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !a,
                        icon: b.createElement(O.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: r,
                      })
                },
              },
            ]),
            n
          )
        })(b.PureComponent)
      y()(z, 'contextType', j.a),
        y()(z, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(C.a)(Object(g.a)(z)))
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return k
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        s = n('t62R'),
        u = n('3XMw'),
        l = n.n(u),
        d = (n('yH/f'), n('ho0z'), n('p+r5')),
        p = Object.freeze({ password: 'password', username: 'username_or_email' }),
        f = function (e) {
          var t = e.name,
            n = c()(e, ['name'])
          return i.createElement(
            d.a,
            a()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        h = l.a.d1091f50,
        m = i.createElement(
          s.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          h,
        ),
        y = l.a.dec3c9b8,
        b = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = c()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return i.createElement(
            f,
            a()({}, o, { helperText: r ? m : t, label: n || y, name: p.password, type: 'password' }),
          )
        }
      b.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var v = b,
        g = n('v6aA'),
        S = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        _ = l.a.e1ec8c17,
        O = l.a.d0a750f2,
        w = l.a.e2dd29b5,
        E = l.a.jb4eb245,
        P = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            s = e.withUsernameDisabled,
            u = c()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            l = i.useContext(g.a).featureSwitches,
            d = _
          return (
            s ? (d = O) : o ? (d = E) : r && (d = w),
            i.createElement(f, a()({}, u, { autoFocus: t, label: n || d, name: p.username, type: S(l) }))
          )
        }
      P.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var k = P
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
          return je
        }),
        n.d(t, 'LoggedOutHome', function () {
          return Re
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
        S = n('UpKB'),
        _ = n('zI2C'),
        O = n('Hde2'),
        w = n('Chb3'),
        E = n('zh9S'),
        P = n('RqPI'),
        k = n('rxPX'),
        C = Object(k.a)()
          .propsFromState(function () {
            return { userLanguage: P.o }
          })
          .propsFromActions(function () {
            return { scribeAction: E.c }
          }),
        I = n('H1k/'),
        j = n('SrtL'),
        R = n('FQwk'),
        x = n('0+0m'),
        T = n('kG2l'),
        D = n('muX9'),
        L = n('6oVL'),
        A = n('rJoH'),
        B = n('yoO3'),
        F = n('Es6L'),
        z = 'signupButton',
        N = 'loginButton',
        H = 'logInSignUpFooter',
        M = n('MWbm'),
        U = n('t62R'),
        q = n('/yvb'),
        V = n('0yYu'),
        W = n('cHvH'),
        K = n('TIdA'),
        Q = n('A91F'),
        G = n('rHpw'),
        X = n('pxuL'),
        Z = (n('3voH'), 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png'),
        J = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        Y = 380,
        $ = 500,
        ee = 1e3,
        te = n('7JQg'),
        ne = n('AS3p'),
        re = n('3XMw'),
        ae = n.n(re),
        oe = n('VwDm'),
        ce = n('wz7L'),
        ie = n('dFWS'),
        se = n('lUZE'),
        ue = n('3rEN'),
        le = n('1zbE'),
        de = n('XJCT')
      function pe(e, t) {
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
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var me = [
          { text: ae.a.a62c9c33, Icon: oe.a },
          { text: ae.a.cf39fca2, Icon: ce.a },
          { text: ae.a.j86184fd, Icon: ie.a },
        ],
        ye = ae.a.d1091f50,
        be = ae.a.d9e109ae,
        ve = ae.a.f86f23b5,
        ge = ae.a.eba1b197,
        Se = ae.a.a565833d,
        _e = ae.a.aa95ddc0,
        Oe = ae.a.fa811c30,
        we = ae.a.e919c3bc,
        Ee = ae.a.b0dbe914,
        Pe = ae.a.e5b0e543,
        ke = ae.a.h0ff39da,
        Ce = ae.a.j3f49ff6,
        Ie = ae.a.ca86b62c
      function je(e) {
        var t = g.useState(0),
          n = v()(t, 2),
          r = n[0],
          a = n[1],
          o = g.useCallback(function (e) {
            a(e || 0)
          }, [])
        return g.createElement(
          g.Fragment,
          null,
          g.createElement(w.a.Configure, { hideCookieBannerPicker: !0 }),
          g.createElement(O.a, null, g.createElement(I.a, { onHeightChange: o })),
          g.createElement(M.a, { style: [{ marginBottom: r }, Te.bannerPadderChildren] }, e.children),
        )
      }
      var Re = (function (e) {
        l()(n, e)
        var t = he(n)
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
              var t = e ? Te.ctaButton : Te.ctaButtonMobile
              return g.createElement(
                M.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Te.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? g.createElement(
                      g.Fragment,
                      null,
                      o._renderSSOButtons(e),
                      o._ssoInSliShowProminentLoginButton
                        ? o._renderProminentLoginButtonVariation(e)
                        : o._renderLessProminentLoginButtonVariation(e),
                    )
                  : g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(
                        q.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [t, 'tablet' === e && Te.ctaButtonSplitSpacing],
                          testID: z,
                          type: 'brandFilled',
                        },
                        Se,
                      ),
                      g.createElement(
                        q.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: t,
                          testID: N,
                          type: 'brandOutlined',
                        },
                        we,
                      ),
                    ),
              )
            }),
            y()(s()(o), '_renderSSOButtons', function (e) {
              var t = o.state,
                n = t.buttonState,
                r = t.isCookieCompliant,
                a = e ? Te.ctaButton : Te.ctaButtonMobile
              return g.createElement(
                g.Fragment,
                null,
                g.createElement(T.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? r : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [a, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                }),
                g.createElement(S.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [
                    a,
                    'tablet' === e && Te.ctaButtonSplitSpacing,
                    Te.ssoButtonStyles,
                    o._ssoInSliShowProminentLoginButton && { marginBottom: 0 },
                  ],
                }),
              )
            }),
            y()(s()(o), '_renderProminentLoginButtonVariation', function (e) {
              var t = e ? Te.ctaButton : Te.ctaButtonMobile
              return g.createElement(
                g.Fragment,
                null,
                g.createElement(
                  M.a,
                  { style: Te.gapContainer },
                  g.createElement(V.a, { label: g.createElement(U.b, { children: Ie }) }),
                ),
                g.createElement(
                  q.a,
                  {
                    link: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: le.b }) } },
                    },
                    onPress: o._handleSignupButton,
                    size: 'medium',
                    style: [t, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                    testID: z,
                    type: 'brandFilled',
                  },
                  _e,
                ),
                g.createElement(U.b, { color: 'gray700', size: 'subtext3', style: [t, { width: x.b }] }, le.c),
                g.createElement(
                  M.a,
                  { style: Te.signInButtonContainer },
                  g.createElement(U.b, { size: 'headline2', style: t, weight: 'bold' }, Oe),
                  g.createElement(
                    q.a,
                    {
                      link: '/login',
                      onPress: o._handleLoginButton,
                      size: 'medium',
                      style: [t, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                      testID: N,
                      type: 'brandOutlined',
                    },
                    Pe,
                  ),
                ),
              )
            }),
            y()(s()(o), '_renderLessProminentLoginButtonVariation', function (e) {
              var t = o.state.buttonState,
                n = e ? Te.ctaButton : Te.ctaButtonMobile,
                r = o._getLoginSignupProps() || {},
                a = r.handleLoginSignUpButton,
                c = r.loginSignUpButtonLabel,
                i = r.loginSignUpButtonLink
              return g.createElement(
                g.Fragment,
                null,
                g.createElement(
                  q.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: i,
                    onPress: a,
                    size: 'medium',
                    style: [n, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                    testID: t === le.a.LogIn ? N : z,
                  },
                  c,
                ),
                t === le.a.SignUp ? g.createElement(U.b, { color: 'gray700', size: 'subtext2', style: n }, le.c) : null,
                g.createElement(U.b, { testID: H }, o._getLoginSignupFooter()),
              )
            }),
            y()(s()(o), '_renderUsernameInputField', function () {
              return g.createElement(
                M.a,
                { style: xe.inputContainer },
                g.createElement(de.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: xe.input,
                }),
              )
            }),
            y()(s()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return g.createElement(
                M.a,
                { style: [xe.container, xe.halfForm] },
                o._renderUsernameInputField(),
                g.createElement(
                  q.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: xe.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  we,
                ),
              )
            }),
            y()(s()(o), '_getLoginSignupProps', function () {
              switch (o.state.buttonState) {
                case le.a.SignUp:
                  return {
                    loginSignUpButtonLabel: _e,
                    loginSignUpButtonLink: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: le.b }) } },
                    },
                    handleLoginSignUpButton: o._handleSignupButton,
                  }
                case le.a.LogIn:
                  return {
                    loginSignUpButtonLabel: Ee,
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
                case le.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return o.setState({ buttonState: le.a.LogIn })
                      },
                    }.onPress),
                    g.createElement(
                      ae.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      g.createElement(U.b, { color: 'link', onPress: e }, ae.a.fb9dd9b0),
                    )
                  )
                case le.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return g.createElement(
                      ae.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      g.createElement(U.b, { color: 'link', onPress: t }, ae.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return o.setState({ buttonState: le.a.SignUp })
                    },
                  })
                default:
                  return
              }
            }),
            y()(s()(o), '_handleHalfFormLoginClick', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(fe(fe({}, e.scribeNamespace), {}, { component: 'half_form', element: 'login', action: 'click' }))
            }),
            y()(s()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            y()(s()(o), '_handleSignupButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(fe(fe({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' }))
            }),
            y()(s()(o), '_handleLoginButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(fe(fe({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'login' }))
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
              isCookieCompliant: Object(ne.c)(o.context.featureSwitches) === ne.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(F.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(F.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.scribeNamespace,
                  n = !!ue.a[this._searchHomePageVariation]
                return g.createElement(
                  B.a,
                  null,
                  g.createElement(j.a, { title: ke }),
                  g.createElement(A.a, {
                    canonical: 'https://twitter.com/',
                    description: Ce,
                    title: ke,
                    type: 'website',
                  }),
                  g.createElement(_.a, { deepLink: 'twitter://' }),
                  g.createElement(
                    D.a,
                    null,
                    g.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    g.createElement('meta', { content: Ce, name: 'description' }),
                  ),
                  g.createElement(W.a, null, function (r) {
                    var a = r.windowHeight,
                      o = (function (e, t) {
                        return {
                          deviceSize: e > ee ? 'desktop' : e > $ ? 'tablet' : void 0,
                          showLoginForm: e / 2 > 500 && t >= 750,
                        }
                      })(r.windowWidth, a),
                      c = o.deviceSize,
                      i = o.showLoginForm
                    return g.createElement(
                      M.a,
                      { style: Te.root },
                      n
                        ? g.createElement(ue.b, {
                            deviceSize: c,
                            scribeNamespace: t,
                            variation: ue.a[e._searchHomePageVariation],
                          })
                        : g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              M.a,
                              { style: [Te.main, 'desktop' === c && Te.mainWide] },
                              e._renderCTA({ deviceSize: c, showLoginForm: i }),
                              e._renderHero(c),
                            ),
                            g.createElement(je, null, g.createElement(R.a, { align: 'center' })),
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
                        { uri: n ? Z : J, width: 1302, height: 955 },
                      ],
                      original: { url: n ? Z : J, width: 1302, height: 958 },
                    }),
                  a = r.original,
                  o = r.variants
                return g.createElement(
                  M.a,
                  { style: [Te.block, Te.communication, Te.blockHero] },
                  g.createElement(
                    M.a,
                    { style: Te.blockImg },
                    g.createElement(K.a, {
                      accessibilityLabel: '',
                      aspectMode: Q.a.COVER,
                      backgroundColor: G.a.theme.colors.blue500,
                      customVariants: o,
                      draggable: !1,
                      image: a,
                    }),
                    g.createElement(se.a, { style: [Te.twitterIconHero, 'desktop' === e && Te.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = me.length
                return g.createElement(
                  M.a,
                  { style: Te.communicationItems },
                  me.map(function (t, n) {
                    var r = t.Icon,
                      a = t.text,
                      o = n + 1 === e
                    return g.createElement(
                      M.a,
                      { key: a, style: [Te.communicationItem, o && Te.communicationItemLast] },
                      g.createElement(r, { style: Te.communicationItemIcon }),
                      g.createElement(
                        U.b,
                        { color: 'white', size: 'headline1', style: Te.communicationItemText, weight: 'bold' },
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
                return g.createElement(
                  M.a,
                  { style: [Te.block, Te.blockCTA, 'tablet' === t && Te.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  g.createElement(
                    M.a,
                    { style: [Te.blockInnerWrapper, 'desktop' === t && Te.blockInnerWrapperWide] },
                    g.createElement(se.a, { style: Te.twitterIcon }),
                    g.createElement(
                      U.b,
                      { extendedWidth: !0, style: t ? Te.ctaTitleLarge : Te.ctaTitle, weight: 'bold' },
                      ge,
                    ),
                    g.createElement(
                      U.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Te.ctaTextLarge : Te.ctaText,
                        weight: 'bold',
                      },
                      this._thirdPartySsoButtonsEnabled ? (r === le.a.SignUp ? be : ve) : be,
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
                  ? g.createElement(
                      M.a,
                      { style: xe.container },
                      g.createElement(
                        L.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: xe.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        g.createElement(
                          M.a,
                          { style: xe.inputContainer },
                          g.createElement(de.a, { onSubmitEditing: this._handleSubmitEditing, style: xe.input }),
                          g.createElement(
                            U.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(r),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: xe.forgotPassword,
                            },
                            ye,
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
      })(g.Component)
      y()(Re, 'contextType', X.a)
      var xe = G.a.create(function (e) {
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
        Te = G.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: fe(
              fe({}, G.a.absoluteFillObject),
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
              maxWidth: ''.concat(Y, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(G.a.theme.spacesPx.space40 + G.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(G.a.theme.spacesPx.space64 + G.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(Y, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: x.b, height: e.spaces.space40, flex: 'none' },
            signInButtonContainer: { marginTop: G.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(Y, 'px'), width: x.b },
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
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat(Y, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        })
      t.default = Object(te.c)({ page: 'front' })(C(Re))
    },
    'g9w/': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M16 11.25h-3.25V8c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.25H8c-.414 0-.75.336-.75.75s.336.75.75.75h3.25V16c0 .414.336.75.75.75s.75-.336.75-.75v-3.25H16c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            o.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
        g = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        S = n('QIgh'),
        _ = n('8UdT'),
        O = n('iu0J'),
        w = n('zgaL'),
        E = n('PH3B'),
        P = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        k = {
          loader: function () {
            return n.e(222).then(n.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: P.a.Critical,
        },
        C = g.e(k),
        I = (n('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        j = {
          loader: function () {
            return n.e(343).then(n.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: P.a.Critical,
        },
        R = {
          loader: function () {
            return n.e(343).then(n.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: P.a.Critical,
        },
        x = {
          loader: function () {
            return n.e(343).then(n.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: P.a.Critical,
        },
        T = g.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((r = {}), b()(r, I.Expand, j), b()(r, I.Replace, R), b()(r, I.Suggest, x), r),
        })
      function D(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var A = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            n = e.withUserPresence
          return L(
            L(
              {},
              Object(S.a)({
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
                b()(t, _.b.News, E.a),
                b()(t, _.b.EventSummary, Object(O.a)({ errorContext: 'SEARCH_SCREEN', shouldStoreTypeaheadItem: n })),
                b()(t, _.b.RelatedSearch, C),
                b()(t, _.b.FollowSearch, g.e(g.a())),
                b()(t, _.b.FollowSearchAction, g.e(g.a())),
                b()(t, _.b.Place, g.e(g.a())),
                b()(t, _.b.MomentAnnotation, w.a),
                b()(t, _.b.Spelling, T),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        B = n('3X8/'),
        F = n('oQhu'),
        z = n('EUHl'),
        N = n('7BdX'),
        H = n('fTQJ'),
        M = n('i6OR'),
        U = n('X04g'),
        q = n('t62R'),
        V = n('FIs5'),
        W = n('v6aA'),
        K = n('3XMw'),
        Q = n.n(K)
      function G(e) {
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
      var X = Q.a.c09de2d4,
        Z = v.createElement(
          Q.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          v.createElement(q.b, { link: '/settings/search' }, Q.a.d2918e88),
        ),
        J = Q.a.ae111c99,
        Y = (function (e) {
          d()(n, e)
          var t = G(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(u()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case U.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case U.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case U.a.ItemType.EVENT:
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
                return n || v.createElement(V.a, { header: J({ query: r }), message: Z })
              }),
              b()(
                u()(e),
                '_getMemoizedModule',
                Object(F.a)(function (e, t, n, r, a, o) {
                  return Object(M.b)({
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
                Object(F.a)(function (t) {
                  return A({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
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
                  return v.createElement(H.a, {
                    apiErrorHandlerMap: B.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: z.a.CLIENT,
                    prerollDisplayLocation: N.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: X,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            n
          )
        })(v.Component)
      b()(Y, 'contextType', W.a)
      t.a = Y
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
        c = n('Lsrn'),
        i = n('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            o.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
        c = n('Lsrn'),
        i = n('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
            }),
          ),
        )
      }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    jmcQ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z',
              fill: '#EA4335',
            }),
            o.createElement('path', {
              d: 'M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z',
              fill: '#FBBC05',
            }),
            o.createElement('path', {
              d: 'M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z',
              fill: '#34A853',
            }),
            o.createElement('path', {
              d: 'M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z',
              fill: '#4285F4',
            }),
          ),
        )
      }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
        v = n('hUVV'),
        g = n('3XMw'),
        S = n.n(g),
        _ = n('jmcQ'),
        O = n('TaB8'),
        w = n('1zbE'),
        E = n('Ukpf'),
        P = n('cnVF'),
        k = n('aITJ'),
        C = n('MWbm'),
        I = n('TnY3'),
        j = n('/yvb'),
        R = n('Qwev'),
        x = n('v6aA'),
        T = n('0+0m')
      function D(e) {
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
      var L = S.a.e0870f25,
        A = S.a.gfeffd69,
        B = (function (e) {
          l()(n, e)
          var t = D(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_buttonInitialized', !1),
              y()(s()(o), '_viewRef', b.createRef()),
              y()(
                s()(o),
                '_is3rdPartyIntegrationDisabled',
                Object(O.a)('responsive_web_3rd_party_category_google_platform', o.context.featureSwitches),
              ),
              y()(s()(o), '_initGoogleClient', function () {
                var e = window.google
                o._buttonInitialized ||
                  (e &&
                    (e.accounts.id.initialize({ client_id: T.c, callback: o._handleOnPress }),
                    (o._buttonInitialized = !0)))
              }),
              y()(s()(o), '_renderGoogleSignInButton', function () {
                var e = window.google,
                  t = o.props,
                  n = t.buttonState,
                  r = t.displayType,
                  a = t.userLanguage,
                  c = n === w.a.SignUp ? T.d.SignUp : T.d.SignIn,
                  i = r !== T.e.Prompt && o._buttonInitialized
                e &&
                  i &&
                  e.accounts.id.renderButton(o._viewRef.current, {
                    theme: 'outline',
                    size: 'large',
                    shape: 'circle',
                    locale: a,
                    logo_alignment: 'center',
                    text: c,
                    width: T.b,
                  })
              }),
              y()(s()(o), '_renderGoogleOneTapPrompt', function () {
                var e = window.google,
                  t = o.props,
                  n = t.analytics,
                  r = t.displayType,
                  a = t.isCookieCompliant,
                  c = !k.b.isIOS() && !k.b.isSafari(),
                  i = r !== T.e.Button && c && a
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
                  c = n === w.a.SignUp ? L : A
                return b.createElement(j.a, {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  children: c,
                  color: 'gray1100',
                  icon: b.createElement(_.a, null),
                  onPress: r,
                  size: t,
                  style: a,
                })
              }),
              y()(s()(o), '_injectGoogleGsiLibraryScript', function () {
                E.a.inject({
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
                  a(P.A.Google).then(function () {
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
                          provider: P.A.Google,
                          state: s[P.A.Google],
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
                      ? b.createElement(C.a, { ref: this._viewRef, style: r })
                      : b.createElement(R.a, { style: [r, { width: T.b }] })
                    : this._renderPlaceholderButton()
                },
              },
            ]),
            n
          )
        })(b.PureComponent)
      y()(B, 'defaultProps', { buttonState: 'signup', isCookieCompliant: !0 }),
        y()(B, 'contextType', x.a),
        (t.a = Object(I.a)(Object(v.a)(B)))
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
          return p
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('ERkP'),
        c = n('jHSc'),
        i = n('3XMw'),
        s = n.n(i),
        u = n('L7to'),
        l = n('Irs7'),
        d = s.a.aea62567
      function p(e) {
        var t = e.history,
          n = e.location
        return o.createElement(
          c.b,
          { documentTitle: d, history: t, title: d },
          o.createElement(u.a, a()({}, e, { key: n.key, withBottomBorder: !0 })),
        )
      }
      t.default = Object(l.a)(p, { page: 'search_filters' })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
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
        S = n('pXBW'),
        _ = n('6/RC'),
        O = n('UIzd'),
        w = n.n(O),
        E = n('kGix')
      n.d(t, 'a', function () {
        return E.a
      })
      var P = n('fs1G'),
        k = n('0KEI'),
        C = n('lU4h'),
        I = n.n(C),
        j = n('21nk'),
        R = n.n(j),
        x = n('bCEw'),
        T = n.n(x),
        D = n('Ud88'),
        L = n.n(D)
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
      var B = function (e) {
          return (0, e.render)({ fetchStatus: E.a.LOADING, data: null, error: null, retry: P.a })
        },
        F = (function (e) {
          p()(n, e)
          var t = A(n)
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
                    if (!(e instanceof S.a)) throw e
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
        })(g.Component),
        z = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = R()(t, n)
          return r({ fetchStatus: E.a.LOADED, data: a, error: null, retry: P.a })
        },
        N = function (e, t) {
          if (_.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                o = void 0 === r ? 'store-or-network' : r,
                c = n.render,
                i = n.variables,
                s = T()(e),
                u = a()(s, 2),
                l = u[0],
                d = u[1],
                p = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                f = I()(i),
                h = a()(f, 1)[0],
                m = g.useCallback(
                  function () {
                    d(h, { fetchPolicy: 'network-only' })
                  },
                  [d, h],
                )
              return (
                g.useLayoutEffect(
                  function () {
                    d(h, { fetchPolicy: o })
                  },
                  [o, d, h],
                ),
                l
                  ? g.createElement(
                      g.Suspense,
                      { fallback: g.createElement(B, { render: c }) },
                      g.createElement(
                        F,
                        { errorHandler: p(t.errorConfig.options || {}), key: l.fetchKey, retry: m },
                        function (t, n) {
                          return t
                            ? c({ fetchStatus: E.a.FAILED, error: t, data: null, retry: n })
                            : g.createElement(z, { query: e, queryRef: l, render: c })
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
              i = L()(),
              s = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              u = I()(c),
              l = a()(u, 1)[0],
              d = n.get(i)
            if (d) return d
            var p = g.lazy(function () {
              return w()(i, e, l)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: E.a.LOADED, data: e, error: null, retry: P.a })
                  },
                  function (e) {
                    return e instanceof S.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: E.a.FAILED, data: null, error: e, retry: P.a }))
                      : g.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(i, e).get.bind(n, i) }
                })
            })
            return g.createElement(g.Suspense, null, g.createElement(p, null))
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
        return W
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
        v = n('sTyV'),
        g = n('6/RC'),
        S = n('sebV'),
        _ = n('G6rE'),
        O = n('rxPX'),
        w = Object(O.a)()
          .propsFromState(function () {
            return { loggedInUser: _.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        E = n('3XMw'),
        P = n.n(E),
        k = n('OrGc'),
        C = n('QK5w'),
        I = n('aITJ'),
        j = n('MWbm'),
        R = n('TnY3'),
        x = n('rHpw'),
        T = n('t62R'),
        D = n('v6aA'),
        L = n('uScj'),
        A = n('fs1G'),
        B = n('BcsE'),
        F = n('VPAj')
      function z(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var M = P.a.b47e760d,
        U = P.a.fd2c7b43,
        q = new L.a(),
        V = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        W = function (e) {
          return g.canUseDOM ? q.subscribe(e).unsubscribe : A.a
        },
        K = (function (e) {
          l()(n, e)
          var t = H(n)
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
                        q.getListeners().length
                          ? q.notify(e)
                          : a.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  i =
                    ((t = {}),
                    y()(t, k.e.search, c()),
                    y()(t, k.e.goToUser, c('@')),
                    y()(t, k.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    y()(t, k.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    y()(t, k.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      y()(t, k.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      y()(t, k.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      y()(t, k.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    o && u
                      ? N(
                          N({}, s(o)),
                          {},
                          y()({}, k.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : o
                      ? s(o)
                      : {},
                  d = N(
                    N(N({}, i), l),
                    {},
                    ((n = {}),
                    y()(n, k.e.goHome, function () {
                      return a.push('/home')
                    }),
                    y()(n, k.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    y()(n, k.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    y()(n, k.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    y()(n, k.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    y()(n, k.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    y()(n, k.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    y()(n, k.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    y()(n, k.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? d : i
                e._unbindKeyboardShortcuts = Object(v.a)(p)
              }),
              y()(s()(e), '_handleKeyDown', function (t) {
                V(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              y()(s()(e), '_handleKeyUp', function (t) {
                if (!V(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(B.a)(n) && Date.now() - n < 500,
                    a = Object(C.a)({}, { location: e.props.location })
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
                    I.b.isKaiOS() &&
                      S.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    I.b.isKaiOS() &&
                      S.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? b.createElement(
                        j.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: x.a.visuallyHidden },
                        b.createElement(T.b, null, M),
                        b.createElement(T.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, U),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(K, 'contextType', D.a)
      var Q = w(K),
        G = g.canUseDOM ? Object(R.a)(Q) : Object(F.a)(null)
      t.a = G
    },
    sYRn: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('eb3s'),
        o = n('3XMw'),
        c = n.n(o),
        i = n('4ZbN'),
        s = c.a.hffea05c,
        u = c.a.j037e373,
        l = c.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          n = e.onConfirm
        return r.createElement(a.a, {
          confirmButtonLabel: l,
          confirmButtonType: 'destructiveFilled',
          headline: s,
          onCancel: t,
          onConfirm: n,
          testID: i.a.deleteSavedSearchDialog,
          text: u,
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
        c = n('Lsrn'),
        i = n('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
              return n.e(215).then(n.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = r.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
