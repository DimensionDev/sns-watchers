;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84, 61],
  {
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
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('vfdX'), n('z84I'), n('hBvt'), n('ERkP')),
        g = n.n(b),
        v = n('HPNB'),
        S = n('es0u'),
        _ = (n('WNMA'), n('KqXw'), n('vrRf'), n('zh9S')),
        O = n('1YZw'),
        w = n('hqKg'),
        E = n('3IPs'),
        k = n('rxPX'),
        C = n('0KEI'),
        I = n('v4XE'),
        P = n('Hw0q'),
        x = function (e, t) {
          var n = t.location
          return n.query && n.query.src && 'string' == typeof n.query.src ? n.query.src : ''
        },
        j = function (e, t) {
          var n = t.location,
            r = t.match.params
          return r && r.unsafeHashtagQuery && 'string' == typeof r.unsafeHashtagQuery
            ? '#'.concat(r.unsafeHashtagQuery)
            : (n && n.query && n.query.q && Object(P.a)(n.query.q)) || ''
        },
        R = function (e, t) {
          return 0 === t.location.pathname.indexOf('/search') ? 'search' : 'hashtag'
        },
        T = function (e, t) {
          return !!(t.location.state || {}).searchFocused
        },
        B = Object(w.createSelector)(Object(P.b)('pf'), Object(P.b)('lf'), function (e, t) {
          return { peopleFilter: e, locationFilter: t }
        }),
        D = Object(k.a)()
          .propsFromState(function () {
            return {
              searchFocused: T,
              query: j,
              querySrc: x,
              isQueryAlreadySaved: Object(w.createSelector)(j, I.d, function (e, t) {
                return (
                  t
                    .map(function (e) {
                      return e.query
                    })
                    .indexOf(e) > -1
                )
              }),
              searchType: R,
              searchFilters: B,
              mode: E.k,
              savedSearches: I.d,
              vertical: Object(P.b)('vertical'),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: O.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('SEARCH_SCREEN'),
              deleteSavedSearch: I.a,
              fetchSavedSearchesIfNeeded: I.b,
              saveSearch: I.c,
              scribeAction: _.c,
            }
          })
          .withAnalytics({ page: 'search' }),
        L = n('sYRn'),
        F = n('3XMw'),
        A = n.n(F),
        M = n('oQhu'),
        H = n('2G3J'),
        U = n('yoO3'),
        N = n('7nmT'),
        q = n.n(N),
        z = n('5FtR'),
        V = n('Rp9C'),
        W = n('7JQg'),
        K = n('L7to'),
        Q = n('3rEN'),
        X = (n('muX9'), A.a.a8399d5b, A.a.ge893905, n('mjJ+')),
        G = n('3A2y'),
        J = 'searchFilters-overflow',
        Z = 'advancedSearch-overflow',
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
      var le = A.a.h1ef00db,
        ue = A.a.aea62567,
        de = A.a.j622effd,
        pe = A.a.h4912b5e,
        fe = A.a.b9bc69ca,
        he = (function (e) {
          u()(n, e)
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
                      testID: J,
                      text: ue,
                      link: { pathname: '/i/search_filters', query: c.query },
                    }),
                  s.push({
                    Icon: ne.a,
                    testID: Z,
                    text: de,
                    link: { pathname: '/search-advanced', query: ie({}, Object(G.a)(c.query, ['q', 'src'])) },
                  }),
                  r &&
                    (s.unshift({ Icon: re.a, testID: Y, text: le, link: '/settings/search' }),
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
                  return g.a.createElement(X.a, { items: this._getActionItems(), onCloseRequested: this.props.onClose })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        me = n('VS6U'),
        ye = n('LsPn'),
        be = 'searchBoxOverflowButton',
        ge = n('aITJ'),
        ve = n('MWbm'),
        Se = n('v6aA'),
        _e = A.a.f9d35b98,
        Oe = A.a.ha925ad3,
        we = A.a.h0a9931b,
        Ee = {
          customErrorHandler: function () {
            return Object(O.b)({ text: Oe })
          },
          showToast: !0,
        },
        ke = {
          customErrorHandler: function () {
            return Object(O.b)({ text: _e })
          },
          showToast: !0,
        },
        Ce = {
          customErrorHandler: function () {
            return Object(O.b)({ text: we })
          },
          showToast: !0,
        },
        Ie = n('cHvH'),
        Pe = n('6vad'),
        xe = n('k/OQ'),
        je = n('8Lfv'),
        Re = function (e, t) {
          return 'POP' === t.history.action
        },
        Te = function (e, t) {
          var n,
            r = t.location
          return null == r || null === (n = r.state) || void 0 === n ? void 0 : n.urtEndpointOptions
        },
        Be = Object(k.a)()
          .propsFromState(function () {
            return { dataLookupId: E.j, isBackNavigation: Re, searchMode: E.k, urtEndpointOptions: Te }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: function (e) {
                var t = e.fetchOptions,
                  n = e.module
                return Object(je.a)(n, t)
              },
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'SEARCH_RESULTS_SCREEN',
              ),
              googleAnalyticsPageView: _.a,
              scribePageImpression: _.d,
            }
          }),
        De = n('s14A'),
        Le = n('dwig'),
        Fe = n('3X8/'),
        Ae = n('0+qk'),
        Me = n('Ds5i'),
        He = n.n(Me),
        Ue = n('h2mu'),
        Ne = n('i6OR'),
        qe = n('pQ3Z'),
        ze = n.n(qe)
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
          return e && He()(e) ? { defaultText: ' '.concat(e), positionCursorAtBeginning: !0 } : void 0
        },
        Xe = (function (e) {
          u()(n, e)
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
                Object(M.a)(function (e, t, n) {
                  var r = n === E.d.Topics ? '_topics' : '',
                    a = 'search_filter_'.concat(t).concat(r)
                  return We(We({}, e), {}, { section: a })
                }),
              ),
              y()(s()(e), '_getMemoizedComposeLocationState', Object(M.a)(Qe)),
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
                    (!c && e.query === r && e.querySrc === a && ze()(e.searchFilters, o)) ||
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
                    l = s.featureSwitches,
                    u = !(!s.loggedInUserId || !l.isTrue('voice_rooms_search_results_page_audiospace_ring_enabled'))
                  return g.a.createElement(
                    Le.a,
                    { component: De.a, fab: this._renderFloatingComposeButton(), shouldRenderFab: !a },
                    g.a.createElement(
                      W.b,
                      { namespace: this._getTimelineScribeNamespace() },
                      g.a.createElement(Ue.a, {
                        fetchOptions: this._getFetchOptions(),
                        query: t,
                        querySrc: n,
                        searchFilters: r,
                        searchMode: o,
                        urtEndpointOptions: c,
                        vertical: i,
                        withUserPresence: u,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return g.a.createElement(Ae.a, { getLocationState: this._getFabState, history: e })
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
                    module: Object(Ne.b)({
                      query: r,
                      querySource: a,
                      searchMode: c,
                      searchFilters: o,
                      urtEndpointOptions: i,
                    }),
                    fetchOptions: this._getFetchOptions(),
                  }).catch(n(Fe.a))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(Xe, 'contextType', Se.a)
      var Ge = Object(W.c)({ page: 'search', section: 'universal' })(Be(Xe))
      function Je(e, t) {
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
            ? Je(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Je(Object(n)).forEach(function (t) {
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
      var $e = A.a.eb0ecd1d,
        et = A.a.cceeb26b,
        tt = A.a.i66136a9,
        nt = A.a.d601fc2f,
        rt = A.a.g2fd3205,
        at = A.a.ac4fb0f3,
        ot = A.a.a9ae1e78,
        ct = A.a.bb967f9e,
        it = A.a.aea62567,
        st = A.a.gfcfbf8b,
        lt = A.a.a4645d91,
        ut = [
          { type: E.c.Top, label: tt },
          { type: E.c.Live, label: nt },
          { type: E.c.User, label: rt },
          { type: E.c.Image, label: at },
          { type: E.c.Video, label: ct },
        ],
        dt = (function (e) {
          u()(n, e)
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
                Object(M.a)(function (e, t, n, r, a) {
                  return {
                    search_details: Ze(
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
                  ? g.a.createElement(H.a, {
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
                return g.a.createElement(Ie.a, null, function (n) {
                  var i = n.windowWidth,
                    s = v.a.isTwoColumnLayout(i)
                  return g.a.createElement(he, {
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
                    .catch(a(i < 25 ? Ee : ke))
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
                  l = i[s]
                if (l) {
                  o(l.id_str)
                    .then(function () {
                      return n({ text: lt })
                    })
                    .catch(a(Ce))
                  var u = V.a.forSavedSearchResult(l.query, s)
                  r.scribe({ element: 'saved_search', action: 'delete', data: { items: [u] } }),
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
                return g.a.createElement(
                  ve.a,
                  null,
                  g.a.createElement(Ge, t),
                  n
                    ? g.a.createElement(L.a, {
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
                return g.a.createElement(
                  S.a,
                  { withSearchBox: !1, withTrends: !!a },
                  g.a.createElement(
                    ve.a,
                    null,
                    g.a.createElement(Pe.b, { text: it }),
                    g.a.createElement(K.b, { history: n, key: r.key, location: r }),
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
                      l = t.link,
                      u = t.modeType
                    return {
                      isActive: i,
                      key: u,
                      to: l,
                      label: s,
                      onClick: function () {
                        i() ||
                          n.scribe(
                            Ze(
                              Ze({}, c),
                              {},
                              {
                                element: 'search_filter_'.concat(u),
                                action: 'navigate',
                                data: e._getScribeData(r, a, o),
                              },
                            ),
                          )
                      },
                    }
                  })
                return g.a.createElement(xe.a, { links: i })
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
                Object(M.a)(function (e, t, n, r, a, o, c) {
                  return ut.map(function (i) {
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
                var t = q.a.findDOMNode(e._searchBoxRef)
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
                    l = (t.searchType, t.vertical),
                    u = this.state.shouldClearTimelineCache,
                    d = !!o,
                    p = d ? et({ query: o }) : $e,
                    f = {
                      history: n,
                      location: r,
                      query: o,
                      querySrc: c,
                      searchFilters: i,
                      searchFocused: s,
                      vertical: l,
                      shouldClearTimelineCache: u,
                    },
                    h = this._renderPrimaryContent(f),
                    m = { initialValue: o, mode: a, onSubmit: this._handleSearchBoxSubmit, searchFilters: i }
                  return d
                    ? g.a.createElement(
                        W.b,
                        { data: this._getScribeData(o, c, i, a, l) },
                        g.a.createElement(
                          U.a,
                          null,
                          null,
                          g.a.createElement(Ie.a, null, function (t) {
                            var r = t.windowWidth,
                              a = v.a.isTwoColumnLayout(r),
                              c = e._renderRightControl({ isTwoColumn: a, searchFocused: s })
                            return g.a.createElement(me.a, {
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
                          ge.b.isKaiOS() &&
                            g.a.createElement(ye.a, { leftText: ot, onLeftClick: this._handleSoftLeftClick }),
                        ),
                      )
                    : Q.a[this._searchHomePageVariation] && !this._loggedInUserId
                    ? g.a.createElement(z.a, { to: '/' })
                    : g.a.createElement(z.a, { to: '/explore' })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(dt, 'contextType', Se.a)
      var pt = D(dt)
      t.default = pt
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        c = n('Ud88'),
        i = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
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
              fetchObservable: l(d, b.request.identifier, function () {
                return d === t.environment && null != h
                  ? d.executeWithSource({ operation: b, source: h })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: f,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var g = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != h && d === t.environment ? h.ifEmpty(g) : (t.environment, g),
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
        return u
      })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = n('k49u'),
        i = n('LVU8'),
        s = n('3XMw'),
        l = n.n(s).a.i1801686,
        u =
          ((r = {}),
          o()(r, c.a.GenericForbidden, { toast: Object(i.a)() }),
          o()(r, c.a.InvalidRequestUrl, { toast: { text: l, withClearButton: !0 } }),
          o()(r, 'showToast', !0),
          r)
    },
    '3rEN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ie
      })
      n('yH/f'), n('Ysgh'), n('KqXw')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('Hde2'),
        c = n('bojF'),
        i = n('3XMw'),
        s = n.n(i),
        l = n('lUZE'),
        u = n('1f8Q'),
        d = n('rHpw'),
        p = n('MWbm'),
        f = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        h = n.n(f),
        m = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        y = n('iCMz'),
        b = n('Rp9C'),
        g = n('72nz'),
        v = n('Irs7'),
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
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var E = s.a.d228a9a0,
        k = s.a.jae84f3a,
        C = { section: 'logged_out_search', component: 'trend' },
        I = function (e) {
          var t = e.position,
            n = e.trend,
            r = Object(v.b)(),
            o = a.a.useMemo(
              function () {
                return [w(w({}, b.a.getTrendItem(n)), {}, { position: t })]
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
            a.a.createElement(_.b, { color: 'gray700', key: n, link: c, size: 'body', style: j.searchTrend }, n),
          )
        },
        P = function (e) {
          var t = e.alignment,
            n = (e.deviceSize, e.trendResults.slice(0, 5))
          return a.a.createElement(
            p.a,
            {
              accessibilityLabel: k,
              accessibilityRole: 'list',
              style: [j.searchTrends, 'left' === t && j.searchTrendsLeft],
            },
            n.map(function (e, t) {
              return a.a.createElement(I, { key: e, position: t, trend: e })
            }),
            a.a.createElement(
              S.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              a.a.createElement(_.b, { link: '/explore', style: j.searchTrend }, E),
            ),
          )
        },
        x = function (e) {
          var t = e.alignment,
            n = e.deviceSize,
            r = e.trendResults
          return a.a.createElement(
            p.a,
            { style: [j.searchBoxTrendsContainerThin, 'desktop' === n && j.searchBoxTrendsContainer] },
            a.a.createElement(
              p.a,
              { style: j.searchBox },
              a.a.createElement(g.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            r && a.a.createElement(P, { alignment: t, deviceSize: n, trendResults: r }),
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
            searchBox: { width: '100%', height: e.spaces.space40, marginBottom: e.spaces.space12, zIndex: 1 },
            searchBoxTrendsContainer: {
              marginHorizontal: e.spaces.space16,
              alignItems: 'center',
              maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)'),
              minHeight: 'calc('.concat(e.spaces.space12, ' * 10)'),
            },
            searchBoxTrendsContainerThin: { maxWidth: 'calc('.concat(e.spaces.space36, ' * 10)'), width: '100%' },
            searchNavBar: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space2, ')'),
            },
            searchNavButtons: { flexDirection: 'row' },
            searchTrend: { marginTop: e.spaces.space12, marginRight: e.spaces.space16 },
            searchTrends: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
            searchTrendsLeft: { justifyContent: 'flex-start' },
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
            r = e.trendResults,
            i = function () {
              return a.a.createElement(y.a, {
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
              ? a.a.createElement(o.a, { style: j.bottomBarForMobile }, i())
              : a.a.createElement(
                  p.a,
                  { style: j.searchNavBar },
                  a.a.createElement(p.a, { style: j.searchNavButtons }, i()),
                ),
            a.a.createElement(
              p.a,
              { style: [j.searchRoot, 'desktop' !== t && j.searchRootMobile] },
              a.a.createElement(l.a, { style: j.twitterIconSearch }),
              a.a.createElement(x, { deviceSize: t, trendResults: r }),
            ),
            a.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                p.a,
                { style: [j.searchHomeFooter, 'desktop' !== t && j.searchHomeFooterMobile] },
                a.a.createElement(m.a, { align: 'center' }),
              ),
            ),
          )
        },
        T = s.a.g0ff1ca8,
        B = s.a.g3aa4a89,
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
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              p.a,
              { style: [j.searchRoot, 'desktop' !== t && j.searchRootMobile, D.searchRootWithBanner] },
              a.a.createElement(l.a, { style: j.twitterIconSearch }),
              a.a.createElement(x, { deviceSize: t, trendResults: n }),
            ),
            a.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                o.a,
                { style: D.bottomBarBanner },
                a.a.createElement(u.a, { buttonSize: 'large', fullWidth: !0, subtext: B, text: T }),
              ),
            ),
          )
        },
        F = n('n0Rl'),
        A = n('RgK2'),
        M = n.n(A),
        H = n('kGix'),
        U = (n('enFi'), n('ddV6')),
        N = n.n(U),
        q = n('UpKB'),
        z = n('v6aA'),
        V = n('5P4+'),
        W = n('kG2l'),
        K = n('JkIr'),
        Q = n('0yYu'),
        X = n('/yvb'),
        G = n('AS3p'),
        J = n('1zbE')
      function Z(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var $,
        ee = s.a.ca86b62c,
        te = s.a.aa95ddc0,
        ne = s.a.b0dbe914,
        re = s.a.ae03a21c,
        ae = 360,
        oe = d.a.create(function (e) {
          return {
            containerThin: { width: 'calc(('.concat(e.spaces.space28, ' + ').concat(e.spaces.space2, ') * 10)') },
            ctaButton: { maxWidth: ''.concat(V.a, 'px'), flex: 1 },
            ctaText: { marginBottom: e.spaces.space32 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              lineHeight: e.spaces.space40,
              marginBottom: e.spaces.space32,
              letterSpacing: 'calc(-'.concat(e.spacesPx.space4, ' / 10)'),
            },
            ctaTitleMedium: {
              fontSize: e.spaces.space48,
              lineHeight: e.spaces.space48,
              marginBottom: e.spaces.space32,
              letterSpacing: 'calc(-'.concat(e.spacesPx.space4, ' / 10)'),
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              lineHeight: e.spaces.space64,
              marginBottom: e.spaces.space48,
              letterSpacing: 'calc(-'.concat(e.spacesPx.space4, ' / 10)'),
            },
            footerContainer: { width: ae },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(V.a, 'px'), width: ae },
            header: { marginHorizontal: e.spaces.space16, maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)') },
            headerThin: { maxWidth: ae },
            splitContainer: { minHeight: 'auto', flexGrow: 1, flexDirection: 'column' },
            splitContainerWide: { flex: 'auto', flexDirection: 'row' },
            splitItem: {
              width: '50%',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: '31vh',
              flexGrow: 1,
            },
            splitItemTablet: { justifyContent: 'center' },
            splitItemMobile: { width: '100%', marginTop: e.spaces.space56, paddingBottom: '0' },
            splitItemGray: { backgroundColor: e.colors.gray50, paddingTop: e.spaces.space24 },
            ssoButtonStyles: { marginBottom: e.spaces.space16, width: ae, height: e.spaces.space40, flex: 'none' },
            twitterIconSearchLeft: { alignSelf: 'flex-start', marginBottom: e.spaces.space48 },
          }
        }),
        ce = function (e) {
          var t = e.cookieComplianceFS,
            n = e.deviceSize,
            r = e.scribeNamespace,
            o = e.trendResults,
            i = a.a.useContext(z.a).featureSwitches,
            u = Object(G.c)(i) === G.a.AcceptAllCookies,
            d = a.a.useState(u),
            f = N()(d, 2),
            h = f[0],
            y = f[1],
            b = a.a.useState(J.a.SignUp),
            g = N()(b, 2),
            S = g[0],
            O = g[1],
            w = Object(v.b)(),
            E = 'tablet' !== n && 'desktop' !== n,
            k = function () {
              y(!0)
            },
            C = function () {
              w.scribe(
                Y(Y({}, r), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' }),
              )
            },
            I = function () {
              w.scribe(
                Y(Y({}, r), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'login' }),
              )
            },
            P =
              (function () {
                switch (S) {
                  case J.a.SignUp:
                    return {
                      loginSignUpButtonLabel: te,
                      loginSignUpButtonLink: {
                        pathname: '/i/flow/signup',
                        state: { input: { requested_variant: JSON.stringify({ signup_type: J.b }) } },
                      },
                      handleLoginSignUpButton: C,
                    }
                  case J.a.LogIn:
                    return { loginSignUpButtonLabel: ne, loginSignUpButtonLink: '/login', handleLoginSignUpButton: I }
                  default:
                    return
                }
              })() || {},
            R = P.handleLoginSignUpButton,
            T = P.loginSignUpButtonLabel,
            B = P.loginSignUpButtonLink,
            D = function () {
              switch (S) {
                case J.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return O(J.a.LogIn)
                      },
                    }.onPress),
                    a.a.createElement(
                      s.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      a.a.createElement(_.b, { color: 'link', onPress: e }, s.a.fb9dd9b0),
                    )
                  )
                case J.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return a.a.createElement(
                      s.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      a.a.createElement(_.b, { color: 'link', onPress: t }, s.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return O(J.a.SignUp)
                    },
                  })
                default:
                  return
              }
              var e
            },
            L = function () {
              return a.a.createElement(
                p.a,
                { style: [oe.footerContainer, E && oe.containerThin] },
                a.a.createElement(_.b, { color: 'gray700', size: 'subtext2', style: oe.ctaText }, J.c),
                a.a.createElement(
                  _.b,
                  { align: 'left', style: !n && oe.ctaText, testID: K.a.logInSignUpFooter, weight: 'medium' },
                  D(),
                ),
              )
            },
            F = function () {
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(W.a, {
                  buttonSize: 'medium',
                  buttonState: S,
                  customWidth: E ? '300' : '360',
                  isCookieCompliant: t ? h : void 0,
                  onPress: k,
                  style: [oe.ctaButton, oe.ssoButtonStyles, E && oe.containerThin],
                }),
                a.a.createElement(q.a, {
                  buttonSize: 'medium',
                  buttonState: S,
                  style: [oe.ctaButton, oe.ssoButtonStyles, { marginBottom: 0 }, E && oe.containerThin],
                }),
                a.a.createElement(
                  p.a,
                  { style: [oe.gapContainer, E && oe.containerThin] },
                  a.a.createElement(Q.a, {
                    borderColor: 'nestedBorderColor',
                    label: a.a.createElement(_.b, { children: ee }),
                  }),
                ),
                a.a.createElement(
                  X.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: B,
                    onPress: R,
                    size: 'medium',
                    style: [oe.ctaButton, oe.ssoButtonStyles, E && oe.containerThin],
                    testID: K.a.signupButton,
                  },
                  T,
                ),
              )
            },
            A = function () {
              return a.a.createElement(
                c.CookieComplianceBannerPadder,
                null,
                a.a.createElement(
                  p.a,
                  { style: [j.searchHomeFooter, { marginBottom: '0' }] },
                  a.a.createElement(m.a, { align: 'center' }),
                ),
              )
            }
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              p.a,
              { style: [oe.splitContainer, 'desktop' === n && oe.splitContainerWide] },
              a.a.createElement(
                p.a,
                {
                  style: [
                    oe.splitItem,
                    'desktop' !== n && oe.splitItemMobile,
                    'tablet' === n && oe.splitItemTablet,
                    { zIndex: '1' },
                  ],
                },
                a.a.createElement(
                  p.a,
                  { style: [oe.header, 'tablet' === n && oe.headerThin] },
                  a.a.createElement(l.a, { style: [j.twitterIconSearch, oe.twitterIconSearchLeft] }),
                  a.a.createElement(
                    _.b,
                    {
                      extendedWidth: !0,
                      style: 'desktop' === n ? oe.ctaTitleLarge : 'tablet' === n ? oe.ctaTitleMedium : oe.ctaTitle,
                      weight: 'bold',
                    },
                    re,
                  ),
                ),
                a.a.createElement(x, { alignment: 'left', deviceSize: n, trendResults: o }),
              ),
              a.a.createElement(
                p.a,
                {
                  style: [
                    oe.splitItem,
                    oe.splitItemGray,
                    'desktop' !== n && oe.splitItemMobile,
                    'tablet' === n && oe.splitItemTablet,
                  ],
                },
                a.a.createElement(F, null),
                a.a.createElement(L, null),
              ),
            ),
            a.a.createElement(A, null),
          )
        },
        ie = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        se = void 0 !== $ ? $ : ($ = n('x1T0')),
        le = Object(F.b)(se, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.cookieComplianceFS,
          n = e.deviceSize,
          r = e.scribeNamespace,
          o = e.variation
        return a.a.createElement(le, {
          render: function (e) {
            var c,
              i = e.data,
              s = e.fetchStatus,
              l =
                (e.retry,
                s === H.a.LOADED
                  ? null == i || null === (c = i.logged_out_trends_list) || void 0 === c
                    ? void 0
                    : c.trends
                  : void 0)
            return o === ie.original
              ? a.a.createElement(R, { deviceSize: n, scribeNamespace: r, trendResults: l })
              : o === ie.banner
              ? a.a.createElement(L, { deviceSize: n, trendResults: l })
              : o === ie.split
              ? a.a.createElement(ce, { cookieComplianceFS: t, deviceSize: n, scribeNamespace: r, trendResults: l })
              : null
          },
          variables: M.a,
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
    '5P4+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return u
        }),
        n.d(t, 'd', function () {
          return d
        })
      n('3voH')
      var r = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        a = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        o = 380,
        c = 2 * o,
        i = 1.15 * o,
        s = 500,
        l = 1e3,
        u = function (e, t) {
          return { deviceSize: e > l ? 'desktop' : e > s ? 'tablet' : void 0, showLoginForm: e / 2 > 500 && t >= 750 }
        },
        d = function (e) {
          var t = null == e ? void 0 : e.startsWith('en')
          return {
            variants: [
              {
                uri: t
                  ? 'https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png'
                  : 'https://abs.twimg.com/sticky/illustrations/lohp_850x623.png',
                width: 850,
                height: 623,
              },
              { uri: t ? r : a, width: 1302, height: 955 },
            ],
            original: { url: t ? r : a, width: 1302, height: 958 },
          }
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
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        S = n.n(v),
        _ = n('3XMw'),
        O = n.n(_),
        w = n('cnVF'),
        E = n('Ukpf'),
        k = n('BTou'),
        C = n('mrHL'),
        I = 'LoginForm_Login_Button',
        P = n('fEA7'),
        x = n.n(P),
        j = n('MWbm'),
        R = n('Irs7'),
        T = n('v6aA'),
        B = n('/yvb'),
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
      var F = O.a.e919c3bc,
        A = (function (e) {
          p()(n, e)
          var t = L(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_mobileLoginToken', x.a.v1().replace(/-/g, '')),
              g()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), k.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              g()(u()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              g()(u()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              g()(u()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(C.e)(w.q, e._mobileLoginToken, {
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
                    l = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof c ? c.split('?') : [],
                    f = a()(p, 2),
                    h = f[0],
                    m = f[1],
                    y = encodeURI(h || '/'),
                    b = m ? '?'.concat(m) : '',
                    g = ''.concat('').concat(y).concat(b),
                    v = S.a.createElement(
                      j.a,
                      { style: o && M.horizontalFields },
                      S.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: g }),
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
                            j.a,
                            { style: o && M.loginButtonContainer },
                            S.a.createElement(
                              B.a,
                              {
                                disabled: i,
                                onPress: this._handleSubmitButtonClick,
                                size: l,
                                style: u,
                                testID: I,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return S.a.createElement(
                    j.a,
                    { style: M.loginForm },
                    S.a.createElement('form', {
                      action: n,
                      children: v,
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
      g()(A, 'contextType', T.a),
        g()(A, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: F,
          submitButtonType: 'brandFilled',
        })
      var M = D.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(R.a)(A, { element: 'inline_login_form' })
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
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        g = n.n(b),
        v = n('RhWx'),
        S = n.n(v),
        _ = (n('2G9S'), n('tQbP'), n('z84I'), n('hBvt'), n('ho0z'), n('WNMA'), n('KqXw'), n('MvUL'), n('ERkP')),
        O = n.n(_),
        w = n('+Kfv'),
        E = n('wtjx'),
        k = n('rxPX'),
        C = Object(k.a)()
          .propsFromActions(function () {
            return { addQuery: E.a }
          })
          .withAnalytics({ component: 'search_box' }),
        I = n('Hw0q'),
        P = n('3XMw'),
        x = n.n(P),
        j = n('8jkQ'),
        R = n('u3ZE'),
        T = n('rRIm'),
        B = n('Rp9C'),
        D = (n('vrRf'), n('5BYb'), n('jQ3i'), n('x4t0'), n('M+/F'), n('wFPu'), n('vfdX'), n('lnti')),
        L = n('hqKg'),
        F = n('3IPs'),
        A = n('M0jS'),
        M = n('G6rE'),
        H = n('k49u'),
        U = n('J4ZH'),
        N = n('0KEI'),
        q = n('v4XE'),
        z = n('kGix')
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
                g()(e, t, n[t])
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
            Object(H.c)(e, H.a.GenericUserNotFound) ||
            Object(H.c)(e, H.a.OtherUserSuspended) ||
            Object(H.c)(e, H.a.AddressBookLookupNotFound)
          )
        },
        Q = Object(k.a)()
          .propsFromState(function () {
            var e = Object(L.createSelector)(E.g, M.e.selectFetchStatuses, function (e, t) {
                var n = Object(D.a)(
                  e.map(function (e) {
                    var n,
                      r = null === (n = e.user) || void 0 === n ? void 0 : n.id
                    return r && t[r] ? { id: r, fetchStatus: t[r] } : void 0
                  }),
                )
                return Object(U.a)(n, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(L.createSelector)(e, function (e) {
                return (e[z.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(L.createSelector)(e, M.e.selectErrors, function (e, t) {
                return (e[z.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return K(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              r = Object(L.createSelector)(e, M.e.selectErrors, function (e, t) {
                var n = (e[z.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !K(t[n] || {})
                })
                return (e[z.a.LOADING] || []).length > 0
                  ? z.a.LOADING
                  : (e[z.a.LOADED] || []).length > 0
                  ? z.a.LOADED
                  : n.length > 0
                  ? z.a.FAILED
                  : z.a.NONE
              }),
              a = Object(L.createSelector)(E.g, function (e) {
                return e.map(function (e) {
                  return W(W({}, e), {}, { category: F.b.RecentSearch })
                })
              }),
              o = Object(L.createSelector)(q.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: F.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: E.e,
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
              s = c !== z.a.LOADING && r && i ? z.a.LOADED : c
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
              clearAll: E.b,
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: q.a,
              fetchRecentSearchesIfNeeded: E.c,
              fetchSavedSearchesIfNeeded: q.b,
              fetchUsersIfNeeded: M.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: A.b.fetchManyIfNeeded,
              removeQuery: E.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        X = n('sYRn'),
        G = n('v//M'),
        J = n('7nmT'),
        Z = n.n(J),
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
      var ce = x.a.e68b09b4,
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
                    ? O.a.createElement(
                        ne.a,
                        { style: se.root },
                        O.a.createElement(te.a, r),
                        O.a.createElement(re.a, {
                          accessibilityLabel: ce,
                          icon: O.a.createElement(ee.a, null),
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
                    category: F.b.RecentSearch,
                    query: t,
                    recentSearchType: F.a.Event,
                    queryMetadata: { id: t, image: n, title: a, supportText: r },
                  }
                },
              },
            ]),
            n
          )
        })(O.a.PureComponent),
        se = ae.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        le = ie,
        ue = n('j7Bv'),
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
      var me = O.a.createElement(ee.a, null),
        ye = x.a.e68b09b4,
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
                    i = O.a.createElement(ue.a, { Icon: fe.a, color: 'primary', size: c, style: ge.searchIcon })
                  return O.a.createElement(
                    de.a,
                    { avatarCell: i, avatarSize: c, cellStyle: ge.bodyColumn },
                    O.a.createElement(
                      ne.a,
                      null,
                      O.a.createElement(pe.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, r),
                      O.a.createElement(pe.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    O.a.createElement(re.a, {
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
                        category: F.b.RecentSearch,
                        query: n,
                        recentSearchType: F.a.Topic,
                        queryMetadata: { id: n, name: r, description: t },
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        ge = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ve = function (e, t) {
          return M.e.select(e, t.id)
        },
        Se = function (e, t) {
          return Object(A.c)(e, t.id)
        },
        _e = Object(k.a)().propsFromState(function () {
          return { user: ve, userSpace: Se }
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
      var ke = O.a.createElement(ee.a, null),
        Ce = x.a.e68b09b4,
        Ie = x.a.fd06b02f,
        Pe = (function (e) {
          p()(n, e)
          var t = Ee(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              g()(u()(e), '_handleClick', function () {
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
                  i && (i.accessibilityLabel = Ie({ screenName: r.screen_name }))
                  var s = O.a.createElement(re.a, {
                    accessibilityLabel: Ce,
                    icon: ke,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return O.a.createElement(we.a, {
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
                        category: F.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: F.a.User,
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(O.a.Component)
      g()(Pe, 'contextType', Oe.a)
      var xe = _e.forwardRef(Pe),
        je = n('oQhu'),
        Re = n('hiGS'),
        Te = n('Gfoi')
      function Be(e) {
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
      var De = O.a.createElement(ee.a, null),
        Le = O.a.createElement(Re.a, null),
        Fe = Object(je.a)(function (e) {
          return e === F.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Ae = Object(je.a)(function (e) {
          return e === F.b.SavedSearch ? Le : De
        }),
        Me = (function (e) {
          p()(n, e)
          var t = Be(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_getButtonType', function () {
                var t = e.props.category
                return Fe(t)
              }),
              g()(u()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Ae(t)
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
                    a = O.a.createElement(ue.a, { Icon: Te.a, color: 'neutral', size: r, style: He.searchIcon })
                  return O.a.createElement(
                    de.a,
                    { avatarCell: a, avatarSize: r, cellStyle: He.bodyColumn },
                    O.a.createElement(pe.b, { numberOfLines: 1, withHashflags: !0 }, n),
                    O.a.createElement(re.a, {
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
                    recentSearchType: t === F.b.RecentSearch ? F.a.Keyword : void 0,
                  }
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        He = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        Ue = Me,
        Ne = n('htQn')
      function qe(e) {
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
      var ze = (function (e) {
        p()(n, e)
        var t = qe(n)
        function n(e, r) {
          var a
          return (
            c()(this, n),
            (a = t.call(this, e, r)),
            g()(u()(a), '_renderSearchItem', function () {
              var e = a.props,
                t = e.index,
                n = e.item,
                r = e.onItemClick
              return n.keyword
                ? O.a.createElement(Ue, {
                    category: n.category,
                    onRemove: a._handleOnRemove,
                    query: n.keyword.query,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.user
                ? O.a.createElement(xe, {
                    id: n.user.id || '',
                    index: t,
                    onItemClick: r,
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    style: Ve.itemPadding,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.topic
                ? O.a.createElement(be, {
                    description: n.topic.description || '',
                    id: n.topic.id,
                    name: n.topic.name || '',
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.event
                ? O.a.createElement(le, {
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
            g()(u()(a), '_handleItemRef', function (e) {
              a._itemRef = e
            }),
            g()(u()(a), '_handleOnRemove', function (e) {
              var t = a.props,
                n = t.index,
                r = t.item
              ;(0, t.onRemoveQuery)(r, n), e.stopPropagation()
            }),
            g()(u()(a), '_handleOnClick', function () {
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
                return O.a.createElement(
                  w.a,
                  { viewType: 'search_item' },
                  O.a.createElement(
                    Ne.a,
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
      })(O.a.Component)
      g()(ze, 'contextType', Oe.a)
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
        We = ze,
        Ke = n('4ZbN'),
        Qe = n('eb3s'),
        Xe = n('MXDK')
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
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ge(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
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
      var Ye = x.a.ee295fbe,
        $e = { headline: x.a.f45c425f, text: x.a.caae4dd9, confirmButtonLabel: x.a.dbd5d40f },
        et = x.a.a8d68f61,
        tt = x.a.c6530778,
        nt = x.a.e047b8fa,
        rt = ['user', 'keyword'],
        at = (function (e) {
          p()(n, e)
          var t = Ze(n)
          function n(e, r) {
            var a
            c()(this, n),
              (a = t.call(this, e, r)),
              g()(u()(a), '_withNewTypeaheadUI', !1),
              g()(u()(a), '_getRecentSearchItems', function () {
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
              g()(u()(a), '_render', function () {
                var e = a.props,
                  t = e.domId,
                  n = e.savedSearches,
                  r = 0 === a._getNumOfSearchItems(),
                  o = a._getRecentSearchItems()
                return r
                  ? O.a.createElement(
                      ne.a,
                      { style: ot.emptyState, testID: Ke.a.typeaheadEmptySearch },
                      O.a.createElement(pe.b, { align: 'center', color: 'gray700' }, Ye),
                    )
                  : O.a.createElement(
                      ne.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      o.length > 0
                        ? O.a.createElement(
                            O.a.Fragment,
                            null,
                            O.a.createElement(
                              ne.a,
                              { style: ot.header, testID: Ke.a.typeaheadRecentSearchesHeader },
                              O.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, et),
                              O.a.createElement(
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
                        ? O.a.createElement(
                            O.a.Fragment,
                            null,
                            O.a.createElement(
                              ne.a,
                              {
                                accessibilityHidden: !0,
                                style: [ot.header, ot.borderTop],
                                testID: Ke.a.typeaheadSavedSearchesHeader,
                              },
                              O.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, tt),
                            ),
                            a._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              g()(u()(a), '_renderRecentSearchItem', function (e, t) {
                var n = a.props.ariaDescendantId,
                  r = a.state.focusIndex === t
                return O.a.createElement(We, {
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
              g()(u()(a), '_chooseKeyType', function (e, t) {
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
              g()(u()(a), '_renderSavedSearches', function () {
                var e = a.props,
                  t = e.ariaDescendantId,
                  n = e.savedSearches,
                  r = a.state.focusIndex,
                  o = a._getRecentSearchItems(),
                  c = S()(n)
                return (
                  c.reverse(),
                  O.a.createElement(
                    ne.a,
                    { testID: Ke.a.typeaheadSavedSearchesContainer },
                    c.map(function (e, n) {
                      var c = r === n + o.length
                      return O.a.createElement(We, {
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
              g()(u()(a), '_getNumOfSearchItems', function () {
                var e = a.props.savedSearches,
                  t = a._getRecentSearchItems()
                return e.length + t.length
              }),
              g()(u()(a), '_handleUsersRetry', function () {
                a._fetchUsersDetailsIfNeeded()
              }),
              g()(u()(a), '_fetchUsersDetailsIfNeeded', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUsersIfNeeded,
                  r = e.fetchUsersPresenceIfNeeded,
                  o = e.invalidRecentSearchUserIds,
                  c = e.recentSearches,
                  i = a.context,
                  s = i.featureSwitches,
                  l = i.loggedInUserId,
                  u = (function (e, t) {
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
                n(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && r(u).catch(t({}))
              }),
              g()(u()(a), '_handleRemoveQuery', function (e, t) {
                var n = a.props,
                  r = n.analytics,
                  o = n.removeQuery
                switch (e.category) {
                  case F.b.RecentSearch:
                    var c = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    o(c), a._resetFocus()
                    var i = B.a.forRecentSearchResult(c, t),
                      s = a._handleRemoveAction(e)
                    i && r.scribe({ action: s, data: { items: [i] } })
                    break
                  case F.b.SavedSearch:
                    a.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              g()(u()(a), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              g()(u()(a), '_handleClearAllClick', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              g()(u()(a), '_handleOnClearAllConfirm', function () {
                var e = a.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              g()(u()(a), '_handleOnClearAllCancel', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              g()(u()(a), '_handleOnDeleteSavedSearchConfirm', function () {
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
                  var s = i && B.a.forSavedSearchResult(i.keyword.query, c)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              g()(u()(a), '_handleOnDeleteSavedSearchCancel', function () {
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              g()(u()(a), '_handleOnItemClick', function (e, t) {
                var n = a.props,
                  r = n.onDismiss
                ;(0, n.onItemClick)(e, t), a._scribeClick(e, t), r && r()
              }),
              g()(u()(a), '_scribeRecentSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.recentSearches
                if (n && n.length) {
                  var r = Object(D.a)(
                    n.map(function (e, t) {
                      return B.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: r } })
                }
              }),
              g()(u()(a), '_scribeSavedSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.savedSearches
                if (n && n.length) {
                  var r = Object(D.a)(
                    n.map(function (e, t) {
                      return B.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: r } })
                }
              }),
              g()(u()(a), '_scribeClick', function (e, t) {
                var n = a.props.analytics
                switch (e.category) {
                  case F.b.SavedSearch:
                    var r = B.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [r] } })
                    break
                  case F.b.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === F.a.User
                          ? { user: { type: F.a.User, id: e.query } }
                          : e.recentSearchType === F.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: Je(Je({}, e.queryMetadata), {}, { type: F.a.Event, id: e.query }) }
                          : e.recentSearchType === F.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: Je(Je({}, e.queryMetadata), {}, { type: F.a.Topic, id: e.query }) }
                          : { keyword: { type: F.a.Keyword, query: e.query } })
                    var c = o && B.a.forRecentSearchResult(o, t)
                    c && n.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              g()(u()(a), '_setFocusedItemRef', function (e) {
                ;(a._focusedItemRef = e),
                  e &&
                    a._shouldScrollToFocusedItem &&
                    (Object(Xe.c)(a._getScrollParent(), a._getFocusedItem()), (a._shouldScrollToFocusedItem = !1))
              }),
              g()(u()(a), 'hasFocusedItem', function () {
                return a._getNumOfSearchItems() > 0
              }),
              g()(u()(a), 'selectFocusedItem', function () {
                if (a.hasFocusedItem()) {
                  var e = a._focusedItemRef && a._focusedItemRef.searchItemData
                  e && a._handleOnItemClick(e, a.state.focusIndex)
                }
              }),
              g()(u()(a), '_setFocusIndex', function (e, t) {
                var n = a.props.onItemFocusChanged
                ;(a._shouldScrollToFocusedItem = t), a.setState({ focusIndex: e }), n && n()
              }),
              g()(u()(a), '_resetFocus', function () {
                a._setFocusIndex(-1)
              }),
              g()(u()(a), 'focusNext', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  a._setFocusIndex(n, !0)
                }
              }),
              g()(u()(a), 'focusPrevious', function () {
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
                  return O.a.createElement(
                    ne.a,
                    { style: n },
                    O.a.createElement(G.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? O.a.createElement(Qe.a, {
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
                      ? O.a.createElement(X.a, {
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
                    var e = Object(Xe.a)(Z.a.findDOMNode(this))
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
        })(O.a.Component)
      g()(at, 'contextType', Oe.a)
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
        lt = n('GZwR'),
        ut = n('4e/K')
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
                g()(e, t, n[t])
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
      var ht = x.a.ib2e46ee,
        mt = x.a.hbc99b02,
        yt = /^(\w+)$/,
        bt = [lt.a.Events, lt.a.Users, lt.a.Topics],
        gt = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        vt = (function (e) {
          p()(n, e)
          var t = ft(n)
          function n(e, r) {
            var o, i
            return (
              c()(this, n),
              (i = t.call(this, e, r)),
              g()(u()(i), '_withNewTypeaheadUI', !1),
              g()(u()(i), '_reorderResults', function (e, t, n, r) {
                var a = Object(lt.f)(t, lt.b.User),
                  o = Object(lt.f)(t, lt.b.NoResult),
                  c = Object(lt.f)(n, lt.b.Topic),
                  s = Object(lt.f)(n, lt.b.NoResult),
                  l = Object(lt.f)(r, lt.b.Event),
                  u = [].concat(S()(Object(lt.e)(c)), S()(Object(lt.e)(a))),
                  d = (
                    't1' === i._rankedTypeaheadExperimentalValue
                      ? u.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === i._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = S()(e), n = e.length - 1; n > 0; n--) {
                            var r = Math.floor(Math.random() * (n + 1)),
                              a = t[r],
                              o = t[n]
                            ;(t[n] = a), (t[r] = o)
                          }
                          return t
                        })(u)
                      : u
                  ).map(function (e) {
                    var t = e.item
                    e.rank
                    return t
                  })
                return d.unshift.apply(d, S()(s)), d.unshift.apply(d, S()(l)), d.push.apply(d, S()(o)), e ? [e, d] : [d]
              }),
              g()(u()(i), '_renderSearchBoxEmptyState', function (e) {
                return O.a.createElement(ct, a()({}, e, { onItemClick: i._handleSearchItemClick }))
              }),
              g()(u()(i), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  r = e.query,
                  a = e.queryMetadata,
                  o = e.recentSearchType,
                  c = i.props.addQuery
                t === F.b.SavedSearch
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !1, src: R.a.SavedSearchClick })
                  : o === F.a.Keyword
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: R.a.RecentSearchClick })
                  : o === F.a.Event
                  ? (i._routeTransition({ pathname: '/i/events/'.concat(r) }),
                    a && a.title && c({ event: pt(pt({}, a), {}, { id: r, type: F.a.Event }) }))
                  : o === F.a.Topic
                  ? (i._routeTransition({ pathname: '/i/topics/'.concat(r) }),
                    a && a.name && c({ topic: pt(pt({}, a), {}, { id: r, type: F.a.Topic }) }))
                  : n && (i._routeTransition({ pathname: '/'.concat(n) }), c({ user: { id: r, type: F.a.User } }))
              }),
              g()(u()(i), '_handleSearchShortcut', function (e) {
                var t = i._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              g()(u()(i), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = gt(t)
                if (n.match(yt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: lt.b.NoResult,
                    data: { text: mt({ screenName: n }), type: 'user' },
                  }
              }),
              g()(u()(i), '_handleOnDismiss', function () {
                var e = i.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var r = pt(pt({}, t), {}, { state: pt(pt({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(r)
                }
              }),
              g()(u()(i), '_handleOnFocus', function () {
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
              g()(u()(i), '_handleChange', function (e) {
                var t,
                  n = i.props.history.location
                !i._rankedTypeaheadExperimentalValue &&
                  null !== (t = n.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (i._rankedTypeaheadExperimentalValue = i.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  i.setState({ query: e })
              }),
              g()(u()(i), '_handleTypeaheadSubmit', function () {
                var e = i.state,
                  t = e.items,
                  n = e.query,
                  r = i.props.analytics
                ;/^\s*$/.test(n) ||
                  (r.scribe({
                    action: 'search',
                    data: { items: B.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  i._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              g()(u()(i), '_handleItemClick', function (e, t) {
                var n = i.props.addQuery,
                  r = i.state.query
                switch (e.type) {
                  case lt.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: F.a.User } })
                    i._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case lt.b.Topic:
                  case lt.b.Hashtag:
                    i._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: R.a.TypeaheadClick })
                    break
                  case lt.b.Event:
                    e.data && e.data.url
                      ? i._routeTransition({ pathname: j.b.parseInternalUrl(e.data.url) })
                      : i._submitQuery({ query: e.data.topic, src: R.a.TypeaheadClick })
                    break
                  case lt.b.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? i._routeTransition({ pathname: '/'.concat(gt(r)) })
                      : 'topic' === a &&
                        i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: R.a.TypeaheadClick })
                }
              }),
              g()(u()(i), '_handleItemsChanged', function (e) {
                i.setState({ items: e })
              }),
              g()(u()(i), '_routeTransition', function (e) {
                var t = e.params,
                  n = e.pathname,
                  r = e.query,
                  a = e.src,
                  o = i.props,
                  c = o.history,
                  s = o.location,
                  l = pt(
                    pt({}, s),
                    {},
                    {
                      pathname: n,
                      search: '',
                      query: t || (r ? { q: r, src: a } : {}),
                      state: pt(pt({}, s.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                c.replace(l)
              }),
              g()(u()(i), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  r = void 0 !== n && n,
                  a = e.src,
                  o = void 0 === a ? R.a.Typed : a,
                  c = i.props,
                  s = c.addQuery,
                  l = c.mode,
                  u = c.onSubmit,
                  d = c.searchFilters,
                  p = c.searchRoute
                ;(u && u(t, o, i.state.lastSubmittedQuery === t), r) && s({ keyword: { query: t, type: F.a.Keyword } })
                var f = Object(F.g)({ query: t, querySrc: o, mode: l, searchFilters: d })
                i._routeTransition({ pathname: p, params: f, src: o }), i.setState({ lastSubmittedQuery: t })
              }),
              g()(u()(i), '_setInputRef', function (e) {
                i._inputRef = e
              }),
              (i.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(I.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
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
                    (this._unregisterSearchShortcutHandler = Object(T.b)(this._handleSearchShortcut))
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
                  var e = this.props,
                    t = e.forceVdlDisable,
                    n = e.isCompact,
                    r = e.isInSidebar,
                    a = e.isOnHomepage,
                    o = e.location,
                    c = e.placeholder,
                    i = this.state.query,
                    s = (o.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!o.state && !!o.state.searchFocused,
                    d =
                      't1' === this._rankedTypeaheadExperimentalValue || 't3' === this._rankedTypeaheadExperimentalValue
                  return O.a.createElement(
                    w.a,
                    { viewType: 'search_field' },
                    O.a.createElement(
                      ne.a,
                      { style: St.root },
                      O.a.createElement(ut.default, {
                        filter: bt,
                        forceVdlDisable: t,
                        getTopicExactMatch: i ? lt.h : void 0,
                        getUserExactMatch: i ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: St.input,
                        isCompact: n,
                        isInSidebar: r,
                        isOnHomepage: a,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: d ? this._reorderResults : void 0,
                        placeholder: c,
                        ref: this._setInputRef,
                        renderEmptyState: this._renderSearchBoxEmptyState,
                        rounded: !0,
                        shouldAutoFocus: u,
                        shouldClearOnSelect: !0,
                        shouldDeferPrefetch: !0,
                        source: lt.d.SearchBox,
                        testID: it,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                        withSectionDivider: !this._withNewTypeaheadUI,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(O.a.Component)
      g()(vt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: ht,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        g()(vt, 'contextType', Oe.a)
      var St = ae.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(st.a)(C(vt))
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
          return l
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
          ? u(t)
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
      function l(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(a.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
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
        l = n('Ty5D'),
        u = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(l.h)(),
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
      t.a = Object(u.a)(function () {
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
        l = n.n(s),
        u = n('AS3p'),
        d = n('KUGV'),
        p = n('Irs7'),
        f = n('MWbm'),
        h = n('t62R'),
        m = n('cHvH'),
        y = n('rHpw'),
        b = n('/yvb'),
        g = n('3XMw'),
        v = n.n(g)
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
      var O = v.a.d8817e36,
        w = v.a.b9288ee6,
        E = v.a.i1390ec2,
        k = { page: 'cookie_compliance_banner' }
      function C() {
        var e = a.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          a.a.createElement(
            h.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            v.a.id7ef73f,
          ),
        )
        return a.a.createElement(P, { body: e, title: E })
      }
      function I(e) {
        var t = a.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          a.a.createElement(
            h.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            v.a.gfb2ba0f,
          ),
        )
        return a.a.createElement(P, { body: t, title: E })
      }
      function P(e) {
        return a.a.createElement(
          f.a,
          { style: j.cookieComplianceMessageWrap },
          a.a.createElement(h.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          a.a.createElement(
            h.b,
            { color: 'buttonWhite', size: 'subtext2', style: j.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var x = a.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          a.a.useEffect(
            function () {
              n.scribe(_(_({}, k), {}, { action: 'impression' }))
            },
            [n],
          )
          var r = (function () {
              var e = a.a.useState(!1),
                t = l()(e, 2),
                n = t[0],
                r = t[1],
                o = Object(p.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(_(_({}, k), {}, { action: 'click', element: 'expand_message' })), r(!0)
                },
              }
            })(),
            c = r.expand,
            i = r.isExpanded,
            s = (function () {
              var e = Object(p.b)(),
                t = a.a.useContext(o.a).featureSwitches,
                n = a.a.useState(function () {
                  return u.e(t) && !Object(d.a)()
                }),
                r = l()(n, 2),
                c = r[0],
                i = r[1]
              return {
                isBannerOpen: c,
                acceptAllCookies: function () {
                  e.scribe(_(_({}, k), {}, { action: 'click', element: 'accept_all' })), u.b(t), i(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(_(_({}, k), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), i(!1)
                },
              }
            })(),
            h = s.acceptAllCookies,
            g = s.isBannerOpen,
            v = s.refuseNonEssentialCookies
          return g
            ? a.a.createElement(m.a, null, function (e) {
                var n = e.windowWidth < y.a.theme.breakpoints.xLarge
                return a.a.createElement(
                  f.a,
                  { ref: t, style: [j.root, n && j.rootNarrow] },
                  i ? a.a.createElement(C, null) : a.a.createElement(I, { onExpand: c }),
                  a.a.createElement(
                    f.a,
                    { style: [j.buttonContainer, n && j.buttonContainerNarrow] },
                    a.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: h,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: y.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      O,
                    ),
                    a.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: v,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: y.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      w,
                    ),
                  ),
                )
              })
            : null
        }),
        j = y.a.create(function (e) {
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
        T = n.n(R),
        B = n('VrFO'),
        D = n.n(B),
        L = n('Y9Ll'),
        F = n.n(L),
        A = n('1Pcy'),
        M = n.n(A),
        H = n('5Yy7'),
        U = n.n(H),
        N = n('N+ot'),
        q = n.n(N),
        z = n('AuHH'),
        V = n.n(z),
        W = (n('hBvt'), n('RqPI')),
        K = n('rxPX'),
        Q = Object(K.a)().propsFromState(function () {
          return { currentCountry: W.y }
        }),
        X = n('cnVF'),
        G = n('mrHL'),
        J =
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
            r = V()(e)
          if (t) {
            var a = V()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return q()(this, n)
        }
      }
      var Y = v.a.ia5e7487,
        $ = (function (e) {
          U()(n, e)
          var t = Z(n)
          function n(e, r) {
            var o
            D()(this, n),
              (o = t.call(this, e, r)),
              i()(M()(o), 'state', { euWarningIsOpen: !1 }),
              i()(M()(o), '_renderMessage', function () {
                return a.a.createElement(
                  h.b,
                  { color: 'white', size: 'subtext2' },
                  a.a.createElement(
                    v.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    a.a.createElement(
                      h.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: ee.link,
                      },
                      v.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              i()(M()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(G.e)(X.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var c = o.props.currentCountry,
              s = o.context.featureSwitches,
              l = s.getArrayValue('responsive_web_eu_countries', []),
              u = Object(G.d)({ featureSwitches: s, cookieName: X.k })
            return (o.state = { euWarningIsOpen: !!c && J(l, c, u) }), o
          }
          return (
            F()(n, [
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
          n = a.a.useMemo(
            function () {
              return Object(re.a)(function (t) {
                if (e)
                  if (t) {
                    var n = t.getBoundingClientRect()
                    n && e(n)
                  } else e(null)
              }, t)
            },
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
          ? a.a.createElement(x, { ref: r })
          : a.a.createElement(ne, { ref: r })
      }
    },
    JkIr: function (e, t, n) {
      'use strict'
      t.a = { signupButton: 'signupButton', loginButton: 'loginButton', logInSignUpFooter: 'logInSignUpFooter' }
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
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('z84I'), n('ho0z'), n('MvUL'), n('KqXw'), n('jQ3i'), n('x4t0'), n('vrRf'), n('uFXj'), n('ERkP')),
        g = n.n(b),
        v = n('3XMw'),
        S = n.n(v),
        _ = n('RxYA'),
        O = (n('yH/f'), Object.freeze({ People: 'People', Location: 'Location' })),
        w = 'searchFiltersAdvancedSearch',
        E = n('MWbm'),
        k = n('Irs7'),
        C = n('v6aA'),
        I = n('fyvP'),
        P = n('rC8y'),
        x = n('rHpw'),
        j = n('3A2y'),
        R = n('Zkey')
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
      function B(e) {
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
      var L = S.a.j622effd,
        F = S.a.g2fd3205,
        A = S.a.defb4aa9,
        M = S.a.af293dc2,
        H = S.a.jaaa8984,
        U = S.a.i5045e73,
        N = S.a.h2388753,
        q = 'anyone',
        z = 'youFollow',
        V = 'anywhere',
        W = 'nearYou',
        K = [
          {
            label: F,
            name: O.People,
            options: [
              { label: A, value: q },
              { label: M, value: z },
            ],
          },
          {
            label: H,
            name: O.Location,
            options: [
              { label: U, value: V },
              { label: N, value: W },
            ],
          },
        ],
        Q = (function (e) {
          u()(n, e)
          var t = D(n)
          function n(e, r) {
            var o
            a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_renderFilters', function () {
                return K.map(function (e, t) {
                  return g.a.createElement(
                    E.a,
                    { key: e.name, style: t > 0 && X.paddingTop },
                    g.a.createElement(I.a, {
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
                      var a = { pf: t === z ? 'on' : void 0, lf: 'on' === r.lf ? r.lf : void 0 }
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
                return { pathname: '/search-advanced', query: B({}, Object(j.a)(e.query, ['q', 'src'])) }
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
                r.replace({ pathname: c, query: Object(R.a)(B(B({}, a.query), e)) })
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
              l = c && i && i.pf ? z : q,
              u = i && i.lf ? W : V
            return (o.state = { peopleFilter: l, locationFilter: u, shouldShowLoginSheet: !1 }), o
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
                  return g.a.createElement(
                    E.a,
                    null,
                    g.a.createElement(E.a, { style: X.content }, this._renderFilters()),
                    g.a.createElement(
                      E.a,
                      { style: e && X.bottomBorder, testID: w },
                      g.a.createElement(P.a, {
                        link: this._getAdvancedSearchLink(),
                        onPress: this._handleFooterPress,
                        text: L,
                      }),
                    ),
                    t ? g.a.createElement(_.a, { onClose: this._handleHideLoginSheet }) : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(Q, 'contextType', C.a), y()(Q, 'defaultProps', { withBottomBorder: !1 })
      var X = x.a.create(function (e) {
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
      t.b = Object(k.a)(Q, { page: 'search_filters' })
    },
    PH3B: function (e, t, n) {
      'use strict'
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = n('ezF+'),
        i = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        s = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        l = {
          loader: function () {
            return Promise.all([n.e(0), n.e(342)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: s.a.Critical,
        },
        u = {
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
        handlers: ((r = {}), o()(r, i.Cell, l), o()(r, i.PreviewCard, u), r),
      })
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
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(b),
        v = n('/yvb'),
        S = n('hUVV'),
        _ = n('3XMw'),
        O = n.n(_),
        w = n('iKTg'),
        E = n('TaB8'),
        k = n('1zbE'),
        C = n('Ukpf'),
        I = n('cnVF'),
        P = n('TnY3'),
        x = n('0+0m'),
        j = n('v6aA'),
        R = n('2qJZ')
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
      function B(e) {
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
      var L = O.a.ib65b1c6,
        F = O.a.f55cebb7,
        A = O.a.g61ed8a4,
        M = { clientId: x.a, scope: 'name email', usePopup: !0 },
        H = (function (e) {
          u()(n, e)
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
                Object(E.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              y()(s()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  r = Object(R.c)(e.context.featureSwitches) ? 'https://'.concat(R.b) : 'https://'.concat(R.a)
                t &&
                  n(I.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(B(B({}, M), {}, { redirectURI: r, state: n }))
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
                  l = c || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  p = l.allowPartnerships,
                  f = l.allowPersonalization
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
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!f,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: I.A.Apple,
                              state: s[I.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== x.f
                        ? (r.scribe({ component: 'apple_sign_in', element: a, action: 'failure' }), n({ text: A }))
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
                    C.a.inject({
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
                    o = n === k.a.SignUp ? L : F
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : g.a.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !a,
                        icon: g.a.createElement(w.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: r,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      y()(H, 'contextType', j.a),
        y()(H, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(P.a)(Object(S.a)(H)))
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return I
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        s = n.n(i),
        l = n('t62R'),
        u = n('3XMw'),
        d = n.n(u),
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
          l.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          m,
        ),
        b = d.a.dec3c9b8,
        g = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = c()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return s.a.createElement(
            h,
            a()({}, o, { helperText: r ? y : t, label: n || b, name: f.password, type: 'password' }),
          )
        }
      g.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var v = g,
        S = n('v6aA'),
        _ = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        O = d.a.e1ec8c17,
        w = d.a.d0a750f2,
        E = d.a.e2dd29b5,
        k = d.a.jb4eb245,
        C = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            i = e.withUsernameDisabled,
            l = c()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            u = s.a.useContext(S.a).featureSwitches,
            d = O
          return (
            i ? (d = w) : o ? (d = k) : r && (d = E),
            s.a.createElement(h, a()({}, l, { autoFocus: t, label: n || d, name: f.username, type: _(u) }))
          )
        }
      C.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var I = C
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        o = n('Ud88'),
        c = n('aQQo'),
        i = c.loadQuery,
        s = c.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        f = l.useState,
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
        var l = a(),
          h = p(new Set([n])),
          b = f(function () {
            return n
          }),
          g = b[0],
          v = b[1],
          S = f(function () {
            return n
          }),
          _ = S[0],
          O = S[1]
        n !== _ && (h.current.add(n), O(n), v(n))
        var w = u(
            function () {
              l.current && (h.current.add(m), v(m))
            },
            [l],
          ),
          E = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var a,
                  o = i(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : c, e, t, r)
                h.current.add(o), v(o)
              }
            },
            [c, e, v, l],
          ),
          k = p(!1)
        return (
          d(function () {
            return function () {
              k.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === k.current)
                return (
                  (k.current = !1),
                  void (
                    'NullQueryReference' !== g.kind &&
                    E(g.variables, { fetchPolicy: g.fetchPolicy, networkCacheConfig: g.networkCacheConfig })
                  )
                )
              var t = h.current
              if (l.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var o = n.value
                    if (o === g) break
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
            [g, l, E, e],
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
          ['NullQueryReference' === g.kind ? null : g, E, w]
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return Ee
        }),
        n.d(t, 'LoggedOutHome', function () {
          return ke
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ddV6'),
        g = n.n(b),
        v = (n('z84I'), n('ERkP')),
        S = n.n(v),
        _ = n('UpKB'),
        O = n('zI2C'),
        w = n('Hde2'),
        E = n('Chb3'),
        k = n('zh9S'),
        C = n('RqPI'),
        I = n('rxPX'),
        P = Object(I.a)()
          .propsFromState(function () {
            return { userLanguage: C.o }
          })
          .propsFromActions(function () {
            return { scribeAction: k.c }
          }),
        x = n('H1k/'),
        j = n('SrtL'),
        R = n('FQwk'),
        T = n('kG2l'),
        B = n('muX9'),
        D = n('6oVL'),
        L = n('rJoH'),
        F = n('yoO3'),
        A = n('Es6L'),
        M = n('JkIr'),
        H = n('MWbm'),
        U = n('t62R'),
        N = n('/yvb'),
        q = n('0yYu'),
        z = n('cHvH'),
        V = n('TIdA'),
        W = n('A91F'),
        K = n('rHpw'),
        Q = n('pxuL'),
        X = n('5P4+'),
        G = n('7JQg'),
        J = n('AS3p'),
        Z = n('0+0m'),
        Y = n('3XMw'),
        $ = n.n(Y),
        ee = n('VwDm'),
        te = n('wz7L'),
        ne = n('dFWS'),
        re = n('lUZE'),
        ae = n('3rEN'),
        oe = n('1zbE'),
        ce = n('XJCT')
      function ie(e, t) {
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
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ie(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ie(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function le(e) {
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
      var ue = [
          { text: $.a.a62c9c33, Icon: ee.a },
          { text: $.a.cf39fca2, Icon: te.a },
          { text: $.a.j86184fd, Icon: ne.a },
        ],
        de = $.a.d1091f50,
        pe = $.a.d9e109ae,
        fe = $.a.f86f23b5,
        he = $.a.eba1b197,
        me = $.a.a565833d,
        ye = $.a.aa95ddc0,
        be = $.a.fa811c30,
        ge = $.a.e919c3bc,
        ve = $.a.b0dbe914,
        Se = $.a.e5b0e543,
        _e = $.a.h0ff39da,
        Oe = $.a.j3f49ff6,
        we = $.a.ca86b62c
      function Ee(e) {
        var t = S.a.useState(0),
          n = g()(t, 2),
          r = n[0],
          a = n[1],
          o = S.a.useCallback(function (e) {
            a(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(E.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(w.a, null, S.a.createElement(x.a, { onHeightChange: o })),
          S.a.createElement(H.a, { style: [{ marginBottom: r }, Ie.bannerPadderChildren] }, e.children),
        )
      }
      var ke = (function (e) {
        u()(n, e)
        var t = le(n)
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
            y()(
              s()(o),
              '_googleOneTapEverywhereEnabled',
              o.context.featureSwitches.isTrue('responsive_web_google_one_tap_everywhere_enabled'),
            ),
            y()(s()(o), '_renderLoginSignupButtons', function (e) {
              var t = e ? Ie.ctaButton : Ie.ctaButtonMobile
              return S.a.createElement(
                H.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Ie.ctaButtonContainer },
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
                        N.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [t, 'tablet' === e && Ie.ctaButtonSplitSpacing],
                          testID: M.a.signupButton,
                          type: 'brandFilled',
                        },
                        me,
                      ),
                      S.a.createElement(
                        N.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: t,
                          testID: M.a.loginButton,
                          type: 'brandOutlined',
                        },
                        ge,
                      ),
                    ),
              )
            }),
            y()(s()(o), '_renderSSOButtons', function (e) {
              var t = o.state,
                n = t.buttonState,
                r = t.isCookieCompliant,
                a = e ? Ie.ctaButton : Ie.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(T.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  displayType: o._googleOneTapEverywhereEnabled ? Z.e.Button : void 0,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? r : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [a, 'tablet' === e && Ie.ctaButtonSplitSpacing, Ie.ssoButtonStyles],
                }),
                S.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [
                    a,
                    'tablet' === e && Ie.ctaButtonSplitSpacing,
                    Ie.ssoButtonStyles,
                    o._ssoInSliShowProminentLoginButton && { marginBottom: 0 },
                  ],
                }),
              )
            }),
            y()(s()(o), '_renderProminentLoginButtonVariation', function (e) {
              var t = e ? Ie.ctaButton : Ie.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  H.a,
                  { style: Ie.gapContainer },
                  S.a.createElement(q.a, { label: S.a.createElement(U.b, { children: we }) }),
                ),
                S.a.createElement(
                  N.a,
                  {
                    link: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: oe.b }) } },
                    },
                    onPress: o._handleSignupButton,
                    size: 'medium',
                    style: [t, 'tablet' === e && Ie.ctaButtonSplitSpacing, Ie.ssoButtonStyles],
                    testID: M.a.signupButton,
                    type: 'brandFilled',
                  },
                  ye,
                ),
                S.a.createElement(U.b, { color: 'gray700', size: 'subtext3', style: [t, { width: Z.b }] }, oe.c),
                S.a.createElement(
                  H.a,
                  { style: Ie.signInButtonContainer },
                  S.a.createElement(U.b, { size: 'headline2', style: t, weight: 'bold' }, be),
                  S.a.createElement(
                    N.a,
                    {
                      link: '/login',
                      onPress: o._handleLoginButton,
                      size: 'medium',
                      style: [t, 'tablet' === e && Ie.ctaButtonSplitSpacing, Ie.ssoButtonStyles],
                      testID: M.a.loginButton,
                      type: 'brandOutlined',
                    },
                    Se,
                  ),
                ),
              )
            }),
            y()(s()(o), '_renderLessProminentLoginButtonVariation', function (e) {
              var t = o.state.buttonState,
                n = e ? Ie.ctaButton : Ie.ctaButtonMobile,
                r = o._getLoginSignupProps() || {},
                a = r.handleLoginSignUpButton,
                c = r.loginSignUpButtonLabel,
                i = r.loginSignUpButtonLink
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  N.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: i,
                    onPress: a,
                    size: 'medium',
                    style: [n, 'tablet' === e && Ie.ctaButtonSplitSpacing, Ie.ssoButtonStyles],
                    testID: t === oe.a.LogIn ? M.a.loginButton : M.a.signupButton,
                  },
                  c,
                ),
                t === oe.a.SignUp
                  ? S.a.createElement(U.b, { color: 'gray700', size: 'subtext2', style: n }, oe.c)
                  : null,
                S.a.createElement(U.b, { testID: M.a.logInSignUpFooter }, o._getLoginSignupFooter()),
              )
            }),
            y()(s()(o), '_renderUsernameInputField', function () {
              return S.a.createElement(
                H.a,
                { style: Ce.inputContainer },
                S.a.createElement(ce.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: Ce.input,
                }),
              )
            }),
            y()(s()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return S.a.createElement(
                H.a,
                { style: [Ce.container, Ce.halfForm] },
                o._renderUsernameInputField(),
                S.a.createElement(
                  N.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: Ce.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  ge,
                ),
              )
            }),
            y()(s()(o), '_getLoginSignupProps', function () {
              switch (o.state.buttonState) {
                case oe.a.SignUp:
                  return {
                    loginSignUpButtonLabel: ye,
                    loginSignUpButtonLink: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: oe.b }) } },
                    },
                    handleLoginSignUpButton: o._handleSignupButton,
                  }
                case oe.a.LogIn:
                  return {
                    loginSignUpButtonLabel: ve,
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
                case oe.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return o.setState({ buttonState: oe.a.LogIn })
                      },
                    }.onPress),
                    S.a.createElement(
                      $.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      S.a.createElement(U.b, { color: 'link', onPress: e }, $.a.fb9dd9b0),
                    )
                  )
                case oe.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return S.a.createElement(
                      $.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      S.a.createElement(U.b, { color: 'link', onPress: t }, $.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return o.setState({ buttonState: oe.a.SignUp })
                    },
                  })
                default:
                  return
              }
            }),
            y()(s()(o), '_handleHalfFormLoginClick', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(se(se({}, e.scribeNamespace), {}, { component: 'half_form', element: 'login', action: 'click' }))
            }),
            y()(s()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            y()(s()(o), '_handleSignupButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(se(se({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' }))
            }),
            y()(s()(o), '_handleLoginButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(se(se({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'login' }))
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
              isCookieCompliant: Object(J.c)(o.context.featureSwitches) === J.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(A.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(A.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.scribeNamespace,
                  n = !!ae.a[this._searchHomePageVariation]
                return S.a.createElement(
                  F.a,
                  null,
                  S.a.createElement(j.a, { title: _e }),
                  S.a.createElement(L.a, {
                    canonical: 'https://twitter.com/',
                    description: Oe,
                    title: _e,
                    type: 'website',
                  }),
                  S.a.createElement(O.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    B.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: Oe, name: 'description' }),
                  ),
                  S.a.createElement(z.a, null, function (r) {
                    var a = r.windowHeight,
                      o = r.windowWidth,
                      c = Object(X.e)(o, a),
                      i = c.deviceSize,
                      s = c.showLoginForm
                    return S.a.createElement(
                      H.a,
                      { style: Ie.root },
                      n
                        ? S.a.createElement(ae.b, {
                            cookieComplianceFS:
                              e._cookieComplianceGingersnapEnabled && e._isPlaceholderSIWGButtonEnabled,
                            deviceSize: i,
                            scribeNamespace: t,
                            variation: ae.a[e._searchHomePageVariation],
                          })
                        : S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              H.a,
                              { style: [Ie.main, 'desktop' === i && Ie.mainWide] },
                              e._renderCTA({ deviceSize: i, showLoginForm: s }),
                              e._renderHero(i),
                            ),
                            S.a.createElement(Ee, null, S.a.createElement(R.a, { align: 'center' })),
                          ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function (e) {
                var t = Object(X.d)(this.props.userLanguage),
                  n = t.original,
                  r = t.variants
                return S.a.createElement(
                  H.a,
                  { style: [Ie.block, Ie.communication, Ie.blockHero] },
                  S.a.createElement(
                    H.a,
                    { style: Ie.blockImg },
                    S.a.createElement(V.a, {
                      accessibilityLabel: '',
                      aspectMode: W.a.COVER,
                      backgroundColor: K.a.theme.colors.blue500,
                      customVariants: r,
                      draggable: !1,
                      image: n,
                    }),
                    S.a.createElement(re.a, { style: [Ie.twitterIconHero, 'desktop' === e && Ie.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = ue.length
                return S.a.createElement(
                  H.a,
                  { style: Ie.communicationItems },
                  ue.map(function (t, n) {
                    var r = t.Icon,
                      a = t.text,
                      o = n + 1 === e
                    return S.a.createElement(
                      H.a,
                      { key: a, style: [Ie.communicationItem, o && Ie.communicationItemLast] },
                      S.a.createElement(r, { style: Ie.communicationItemIcon }),
                      S.a.createElement(
                        U.b,
                        { color: 'white', size: 'headline1', style: Ie.communicationItemText, weight: 'bold' },
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
                  H.a,
                  { style: [Ie.block, Ie.blockCTA, 'tablet' === t && Ie.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  S.a.createElement(
                    H.a,
                    { style: [Ie.blockInnerWrapper, 'desktop' === t && Ie.blockInnerWrapperWide] },
                    S.a.createElement(re.a, { style: Ie.twitterIcon }),
                    S.a.createElement(
                      U.b,
                      { extendedWidth: !0, style: t ? Ie.ctaTitleLarge : Ie.ctaTitle, weight: 'bold' },
                      he,
                    ),
                    S.a.createElement(
                      U.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Ie.ctaTextLarge : Ie.ctaText,
                        weight: 'bold',
                      },
                      this._thirdPartySsoButtonsEnabled ? (r === oe.a.SignUp ? pe : fe) : pe,
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
                      H.a,
                      { style: Ce.container },
                      S.a.createElement(
                        D.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: Ce.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          H.a,
                          { style: Ce.inputContainer },
                          S.a.createElement(ce.a, { onSubmitEditing: this._handleSubmitEditing, style: Ce.input }),
                          S.a.createElement(
                            U.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(r),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: Ce.forgotPassword,
                            },
                            de,
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
      y()(ke, 'contextType', Q.a)
      var Ce = K.a.create(function (e) {
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
        Ie = K.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: se(
              se({}, K.a.absoluteFillObject),
              {},
              { flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: e.colors.primary },
            ),
            blockCTA: { minWidth: '45vw' },
            blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
            blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
            blockInnerWrapperWide: { minWidth: ''.concat(X.c, 'px'), maxWidth: ''.concat(X.b, 'px') },
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
              maxWidth: ''.concat(X.a, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(K.a.theme.spacesPx.space40 + K.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(K.a.theme.spacesPx.space64 + K.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(X.a, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: Z.b, height: e.spaces.space40, flex: 'none' },
            signInButtonContainer: { marginTop: K.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(X.a, 'px'), width: Z.b },
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
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat(X.a, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        })
      t.default = Object(G.c)({ page: 'front' })(P(ke))
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
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
        l = n.n(s),
        u = n('5Yy7'),
        d = n.n(u),
        p = n('N+ot'),
        f = n.n(p),
        h = n('AuHH'),
        m = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        g = (n('2G9S'), n('ERkP')),
        v = n.n(g),
        S = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        _ = n('QIgh'),
        O = n('8UdT'),
        w = n('iu0J'),
        E = n('zgaL'),
        k = n('PH3B'),
        C = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        I = {
          loader: function () {
            return n.e(226).then(n.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: C.a.Critical,
        },
        P = S.e(I),
        x = (n('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        j = {
          loader: function () {
            return n.e(347).then(n.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: C.a.Critical,
        },
        R = {
          loader: function () {
            return n.e(347).then(n.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: C.a.Critical,
        },
        T = {
          loader: function () {
            return n.e(347).then(n.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: C.a.Critical,
        },
        B = S.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((r = {}), b()(r, x.Expand, j), b()(r, x.Replace, R), b()(r, x.Suggest, T), r),
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
      var F = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            n = e.withUserPresence
          return L(
            L(
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
                b()(t, O.b.News, k.a),
                b()(t, O.b.EventSummary, Object(w.a)({ shouldStoreTypeaheadItem: n })),
                b()(t, O.b.RelatedSearch, P),
                b()(t, O.b.FollowSearch, S.e(S.a())),
                b()(t, O.b.FollowSearchAction, S.e(S.a())),
                b()(t, O.b.Place, S.e(S.a())),
                b()(t, O.b.MomentAnnotation, E.a),
                b()(t, O.b.Spelling, B),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        A = n('3X8/'),
        M = n('oQhu'),
        H = n('EUHl'),
        U = n('7BdX'),
        N = n('fTQJ'),
        q = n('i6OR'),
        z = n('X04g'),
        V = n('t62R'),
        W = n('FIs5'),
        K = n('v6aA'),
        Q = n('3XMw'),
        X = n.n(Q)
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
      var J = X.a.c09de2d4,
        Z = v.a.createElement(
          X.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          v.a.createElement(V.b, { link: '/settings/search' }, X.a.d2918e88),
        ),
        Y = X.a.ae111c99,
        $ = (function (e) {
          d()(n, e)
          var t = G(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(l()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case z.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case z.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case z.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              b()(l()(e), '_getModule', function () {
                var t = e.props,
                  n = t.query,
                  r = t.querySrc,
                  a = t.searchFilters,
                  o = t.searchMode,
                  c = t.urtEndpointOptions,
                  i = t.vertical
                return e._getMemoizedModule(n, r, o, a, i, c)
              }),
              b()(l()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  n = t.emptyStateComponent,
                  r = t.query
                return n || v.a.createElement(W.a, { header: Y({ query: r }), message: Z })
              }),
              b()(
                l()(e),
                '_getMemoizedModule',
                Object(M.a)(function (e, t, n, r, a, o) {
                  return Object(q.b)({
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
                l()(e),
                '_getMemoizedEntryConfiguration',
                Object(M.a)(function (t) {
                  return F({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
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
                  return v.a.createElement(N.a, {
                    apiErrorHandlerMap: A.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: H.a.CLIENT,
                    prerollDisplayLocation: U.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: J,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()($, 'contextType', K.a)
      t.a = $
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
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
        l = n('eR3e'),
        u = 'search-',
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
              Object(l.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(u)
                })
                .map(function (e) {
                  return Object(l.g)(e)
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
          l = e.urtEndpointOptions,
          h = f(a),
          m = o && o.peopleFilter ? 'searcher_follows' : void 0,
          y = m ? '-pf' : '',
          b = o && o.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          g = ''.concat(u).concat(b, '-').concat(r).concat(h).concat(y)
        return Object(s.a)({
          timelineId: g,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == l ? void 0 : l.requestParams,
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
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
        l = n.n(s),
        u = n('L7to'),
        d = n('Irs7'),
        p = l.a.aea62567
      function f(e) {
        var t = e.history,
          n = e.location
        return c.a.createElement(
          i.b,
          { documentTitle: p, history: t, title: p },
          c.a.createElement(u.a, a()({}, e, { key: n.key, withBottomBorder: !0 })),
        )
      }
      t.default = Object(d.a)(f, { page: 'search_filters' })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return U
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        S = n.n(v),
        _ = n('pXBW'),
        O = n('6/RC'),
        w = n('UIzd'),
        E = n.n(w),
        k = n('kGix')
      n.d(t, 'a', function () {
        return k.a
      })
      var C = n('fs1G'),
        I = n('0KEI'),
        P = n('lU4h'),
        x = n.n(P),
        j = n('21nk'),
        R = n.n(j),
        T = n('bCEw'),
        B = n.n(T),
        D = n('Ud88'),
        L = n.n(D)
      function F(e) {
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
      var A = function (e) {
          return (0, e.render)({ fetchStatus: k.a.LOADING, data: null, error: null, retry: C.a })
        },
        M = (function (e) {
          p()(n, e)
          var t = F(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(a))), g()(u()(e), 'state', { error: null }), e
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
        H = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = R()(t, n)
          return r({ fetchStatus: k.a.LOADED, data: a, error: null, retry: C.a })
        },
        U = function (e, t) {
          if (O.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                o = void 0 === r ? 'store-or-network' : r,
                c = n.render,
                i = n.variables,
                s = B()(e),
                l = a()(s, 2),
                u = l[0],
                d = l[1],
                p = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                f = x()(i),
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
                u
                  ? S.a.createElement(
                      S.a.Suspense,
                      { fallback: S.a.createElement(A, { render: c }) },
                      S.a.createElement(
                        M,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: m },
                        function (t, n) {
                          return t
                            ? c({ fetchStatus: k.a.FAILED, error: t, data: null, retry: n })
                            : S.a.createElement(H, { query: e, queryRef: u, render: c })
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
              s = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = x()(c),
              u = a()(l, 1)[0],
              d = n.get(i)
            if (d) return d
            var p = S.a.lazy(function () {
              return E()(i, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: k.a.LOADED, data: e, error: null, retry: C.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: k.a.FAILED, data: null, error: e, retry: C.a }))
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
          return v
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
        l = n('rHpw')
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
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
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
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
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('LJOr'), n('KqXw'), n('ERkP')),
        g = n.n(b),
        v = n('sTyV'),
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
        k = n('3XMw'),
        C = n.n(k),
        I = n('OrGc'),
        P = n('QK5w'),
        x = n('aITJ'),
        j = n('MWbm'),
        R = n('TnY3'),
        T = n('rHpw'),
        B = n('t62R'),
        D = n('v6aA'),
        L = n('uScj'),
        F = n('fs1G'),
        A = n('BcsE'),
        M = n('VPAj')
      function H(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function N(e) {
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
      var q = C.a.b47e760d,
        z = C.a.fd2c7b43,
        V = new L.a(),
        W = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        K = function (e) {
          return S.canUseDOM ? V.subscribe(e).unsubscribe : F.a
        },
        Q = (function (e) {
          u()(n, e)
          var t = N(n)
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
                    y()(t, I.e.search, c()),
                    y()(t, I.e.goToUser, c('@')),
                    y()(t, I.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    y()(t, I.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    y()(t, I.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      y()(t, I.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      y()(t, I.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      y()(t, I.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  l = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  u =
                    o && l
                      ? U(
                          U({}, s(o)),
                          {},
                          y()({}, I.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : o
                      ? s(o)
                      : {},
                  d = U(
                    U(U({}, i), u),
                    {},
                    ((n = {}),
                    y()(n, I.e.goHome, function () {
                      return a.push('/home')
                    }),
                    y()(n, I.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    y()(n, I.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    y()(n, I.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    y()(n, I.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    y()(n, I.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    y()(n, I.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    y()(n, I.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    y()(n, I.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? d : i
                e._unbindKeyboardShortcuts = Object(v.a)(p)
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
                    r = !!Object(A.a)(n) && Date.now() - n < 500,
                    a = Object(P.a)({}, { location: e.props.location })
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
                    x.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    x.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? g.a.createElement(
                        j.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: T.a.visuallyHidden },
                        g.a.createElement(B.b, null, q),
                        g.a.createElement(B.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, z),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(Q, 'contextType', D.a)
      var X = E(Q),
        G = S.canUseDOM ? Object(R.a)(X) : Object(M.a)(null)
      t.a = G
    },
    sYRn: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('eb3s'),
        c = n('3XMw'),
        i = n.n(c),
        s = n('4ZbN'),
        l = i.a.hffea05c,
        u = i.a.j037e373,
        d = i.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          n = e.onConfirm
        return a.a.createElement(o.a, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: l,
          onCancel: t,
          onConfirm: n,
          testID: s.a.deleteSavedSearchDialog,
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
          return k
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i = n('T0aG'),
        s = n.n(i),
        l = (n('yH/f'), n('2G9S'), n('LW0h'), n('JtPf'), n('7x/C'), n('oEOe')),
        u = n('kGix'),
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
        b = { fetchStatus: u.a.NONE, savedSearches: [] },
        g = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        v = Object.freeze({
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
          case g.SUCCESS:
            var n = t.payload,
              r = Array.isArray(n)
            return (
              r ||
                Object(p.a)('Saved search results are not type array', { extra: { savedSearchResultsType: s()(n) } }),
              m(m({}, e), {}, { fetchStatus: u.a.LOADED, savedSearches: r && n ? n : [] })
            )
          case g.FAILURE:
            return m(m({}, e), {}, { fetchStatus: u.a.FAILED })
          case v.SUCCESS:
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
            return Object(l.b)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: v,
              context: 'SAVE_SEARCH',
            })
          }
        },
        E = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(l.b)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
              actionTypes: S,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        k = function () {
          return function (e, t, n) {
            n.api
            var r = t()
            return Object(f.m)(r)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(r) === u.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, n) {
                    var r = n.api
                    return Object(l.b)(e, { request: r.SavedSearches.fetch, params: {} })({
                      actionTypes: g,
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
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
