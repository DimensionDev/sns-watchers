;(window.webpackJsonp = window.webpackJsonp || []).push([
  [87, 64],
  {
    '0E8n': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchScreen', function () {
          return nt
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        m = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('2G9S'), n('vfdX'), n('z84I'), n('hBvt'), n('ERkP')),
        v = n.n(y),
        b = n('HPNB'),
        S = n('es0u'),
        _ = (n('KqXw'), n('WNMA'), n('vrRf'), n('zh9S')),
        E = n('1YZw'),
        w = n('hqKg'),
        C = n('3IPs'),
        k = n('rxPX'),
        I = n('0KEI'),
        x = n('v4XE'),
        T = n('Hw0q'),
        O = function (e, t) {
          var n = t.location
          return n.query && n.query.src && 'string' == typeof n.query.src ? n.query.src : ''
        },
        R = function (e, t) {
          var n = t.location,
            a = t.match.params
          return a && a.unsafeHashtagQuery && 'string' == typeof a.unsafeHashtagQuery
            ? '#'.concat(a.unsafeHashtagQuery)
            : (n && n.query && n.query.q && Object(T.a)(n.query.q)) || ''
        },
        L = function (e, t) {
          return 0 === t.location.pathname.indexOf('/search') ? 'search' : 'hashtag'
        },
        B = function (e, t) {
          return !!(t.location.state || {}).searchFocused
        },
        P = Object(w.createSelector)(Object(T.b)('pf'), Object(T.b)('lf'), function (e, t) {
          return { peopleFilter: e, locationFilter: t }
        }),
        F = Object(k.a)()
          .propsFromState(function () {
            return {
              searchFocused: B,
              query: R,
              querySrc: O,
              isQueryAlreadySaved: Object(w.createSelector)(R, x.d, function (e, t) {
                return (
                  t
                    .map(function (e) {
                      return e.query
                    })
                    .indexOf(e) > -1
                )
              }),
              searchType: L,
              searchFilters: P,
              mode: C.k,
              savedSearches: x.d,
              vertical: Object(T.b)('vertical'),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: E.b,
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('SEARCH_SCREEN'),
              deleteSavedSearch: x.a,
              fetchSavedSearchesIfNeeded: x.b,
              saveSearch: x.c,
              scribeAction: _.c,
            }
          })
          .withAnalytics({ page: 'search' }),
        D = n('sYRn'),
        A = n('3XMw'),
        M = n.n(A),
        U = n('oQhu'),
        j = n('2G3J'),
        q = n('yoO3'),
        H = n('7nmT'),
        z = n.n(H),
        N = n('5FtR'),
        V = n('Rp9C'),
        W = n('7JQg'),
        K = n('L7to'),
        Q = n('3rEN'),
        G = (n('muX9'), M.a.a8399d5b, M.a.ge893905, n('mjJ+')),
        X = n('3A2y'),
        Y = 'searchFilters-overflow',
        J = 'advancedSearch-overflow',
        Z = 'searchSettings-overflow',
        $ = 'saveSearch-overflow',
        ee = 'deleteSavedSearch-overflow',
        te = n('+RfI'),
        ne = n('VwDm'),
        ae = n('M2x3'),
        re = n('g9w/'),
        oe = n('hiGS'),
        ie = M.a.h1ef00db,
        ce = M.a.aea62567,
        se = M.a.j622effd,
        le = M.a.h4912b5e,
        ue = M.a.b9bc69ca,
        de = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.deleteSavedSearch,
                  a = t.isLoggedIn,
                  o = t.isQueryAlreadySaved,
                  i = t.isTwoColumn,
                  c = t.location,
                  s = t.saveSearch,
                  l = []
                return (
                  i ||
                    l.push({
                      Icon: te.a,
                      testID: Y,
                      text: ce,
                      link: { pathname: '/i/search_filters', query: c.query },
                    }),
                  l.push({
                    Icon: ne.a,
                    testID: J,
                    text: se,
                    link: { pathname: '/search-advanced', query: r()({}, Object(X.a)(c.query, ['q', 'src'])) },
                  }),
                  a &&
                    (l.unshift({ Icon: ae.a, testID: Z, text: ie, link: '/settings/search' }),
                    o
                      ? l.push({
                          Icon: oe.a,
                          isEmphasized: !0,
                          testID: ee,
                          text: ue,
                          onClick: function (e) {
                            e(), n()
                          },
                        })
                      : l.push({
                          Icon: re.a,
                          testID: $,
                          text: le,
                          onClick: function (e) {
                            e(), s()
                          },
                        })),
                  l
                )
              }),
              e
            )
          }
          return (
            s()(n, [
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
        he = n('VS6U'),
        pe = n('LsPn'),
        me = 'searchBoxOverflowButton',
        fe = n('aITJ'),
        ge = n('MWbm'),
        ye = n('v6aA'),
        ve = M.a.f9d35b98,
        be = M.a.ha925ad3,
        Se = M.a.h0a9931b,
        _e = {
          customErrorHandler: function () {
            return Object(E.b)({ text: be })
          },
          showToast: !0,
        },
        Ee = {
          customErrorHandler: function () {
            return Object(E.b)({ text: ve })
          },
          showToast: !0,
        },
        we = {
          customErrorHandler: function () {
            return Object(E.b)({ text: Se })
          },
          showToast: !0,
        },
        Ce = n('cHvH'),
        ke = n('6vad'),
        Ie = n('k/OQ'),
        xe = n('8Lfv'),
        Te = function (e, t) {
          return 'POP' === t.history.action
        },
        Oe = function (e, t) {
          var n,
            a = t.location
          return null == a || null === (n = a.state) || void 0 === n ? void 0 : n.urtEndpointOptions
        },
        Re = Object(k.a)()
          .propsFromState(function () {
            return { dataLookupId: C.j, isBackNavigation: Te, searchMode: C.k, urtEndpointOptions: Oe }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: function (e) {
                var t = e.fetchOptions,
                  n = e.module
                return Object(xe.a)(n, t)
              },
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'SEARCH_RESULTS_SCREEN',
              ),
              googleAnalyticsPageView: _.a,
              scribePageImpression: _.d,
            }
          }),
        Le = n('s14A'),
        Be = n('dwig'),
        Pe = n('3X8/'),
        Fe = n('0+qk'),
        De = n('Ds5i'),
        Ae = n.n(De),
        Me = n('h2mu'),
        Ue = n('i6OR'),
        je = n('pQ3Z'),
        qe = n.n(je),
        He = function (e) {
          return e && Ae()(e) ? { defaultText: ' '.concat(e), positionCursorAtBeginning: !0 } : void 0
        },
        ze = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), '_getFabState', function () {
                var t = e.props.query
                return e._getMemoizedComposeLocationState(t)
              }),
              g()(u()(e), '_getTimelineScribeNamespace', function () {
                var t = e.props,
                  n = t.scribeNamespace,
                  a = t.searchMode,
                  r = t.vertical
                return e._getMemoizedTimelineScribeNamespace(n, a, r)
              }),
              g()(
                u()(e),
                '_getMemoizedTimelineScribeNamespace',
                Object(U.a)(function (e, t, n) {
                  var a = n === C.d.Topics ? '_topics' : '',
                    o = 'search_filter_'.concat(t).concat(a)
                  return r()(r()({}, e), {}, { section: o })
                }),
              ),
              g()(u()(e), '_getMemoizedComposeLocationState', Object(U.a)(He)),
              e
            )
          }
          return (
            s()(n, [
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
                    a = t.query,
                    r = t.querySrc,
                    o = t.searchFilters,
                    i = t.shouldClearTimelineCache
                  n ||
                    (!i && e.query === a && e.querySrc === r && qe()(e.searchFilters, o)) ||
                    this._clearTimelineCache()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.query,
                    n = e.querySrc,
                    a = e.searchFilters,
                    r = e.searchFocused,
                    o = e.searchMode,
                    i = e.urtEndpointOptions,
                    c = e.vertical,
                    s = this.context,
                    l = s.featureSwitches,
                    u = !(!s.loggedInUserId || !l.isTrue('voice_rooms_search_results_page_audiospace_ring_enabled'))
                  return v.a.createElement(
                    Be.a,
                    { component: Le.a, fab: this._renderFloatingComposeButton(), shouldRenderFab: !r },
                    v.a.createElement(
                      W.c,
                      { namespace: this._getTimelineScribeNamespace() },
                      v.a.createElement(Me.a, {
                        fetchOptions: this._getFetchOptions(),
                        query: t,
                        querySrc: n,
                        searchFilters: a,
                        searchMode: o,
                        urtEndpointOptions: i,
                        vertical: c,
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
                    a = e.query,
                    r = e.querySrc,
                    o = e.searchFilters,
                    i = e.searchMode,
                    c = e.urtEndpointOptions
                  t({
                    module: Object(Ue.b)({
                      query: a,
                      querySource: r,
                      searchMode: i,
                      searchFilters: o,
                      urtEndpointOptions: c,
                    }),
                    fetchOptions: this._getFetchOptions(),
                  }).catch(n(Pe.a))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(ze, 'contextType', ye.a)
      var Ne = Object(W.a)({ page: 'search', section: 'universal' })(Re(ze)),
        Ve = M.a.eb0ecd1d,
        We = M.a.cceeb26b,
        Ke = M.a.i66136a9,
        Qe = M.a.d601fc2f,
        Ge = M.a.g2fd3205,
        Xe = M.a.ac4fb0f3,
        Ye = M.a.a9ae1e78,
        Je = M.a.bb967f9e,
        Ze = M.a.aea62567,
        $e = M.a.gfcfbf8b,
        et = M.a.a4645d91,
        tt = [
          { type: C.c.Top, label: Ke },
          { type: C.c.Live, label: Qe },
          { type: C.c.User, label: Ge },
          { type: C.c.Image, label: Xe },
          { type: C.c.Video, label: Je },
        ],
        nt = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(
                u()(e),
                '_searchHomePageVariation',
                e.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
              ),
              g()(u()(e), '_loggedInUserId', e.context.loggedInUserId),
              g()(u()(e), 'state', { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
              g()(
                u()(e),
                '_getScribeData',
                Object(U.a)(function (e, t, n, a, o) {
                  var i = Object(C.f)({ query: e, querySrc: t, searchFilters: n, modeValue: a, vertical: o })
                  return { search_details: r()({}, i) }
                }),
              ),
              g()(u()(e), '_renderRightControl', function (t) {
                var n = t.isTwoColumn,
                  a = t.searchFocused
                return n || !a
                  ? v.a.createElement(j.a, {
                      onClick: e._handleOverflowMenuClick,
                      renderMenu: e._renderMenu,
                      testID: me,
                    })
                  : void 0
              }),
              g()(u()(e), '_renderMenu', function (t) {
                var n = e.props,
                  a = n.history,
                  r = n.isQueryAlreadySaved,
                  o = n.location,
                  i = !!e.context.loggedInUserId
                return v.a.createElement(Ce.a, null, function (n) {
                  var c = n.windowWidth,
                    s = b.a.isTwoColumnLayout(c)
                  return v.a.createElement(de, {
                    deleteSavedSearch: e._onDeleteSavedSearchMenuClick,
                    history: a,
                    isLoggedIn: i,
                    isQueryAlreadySaved: r,
                    isTwoColumn: s,
                    location: o,
                    onClose: t,
                    saveSearch: e._onSaveSearch,
                  })
                })
              }),
              g()(u()(e), '_onSaveSearch', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  o = t.query,
                  i = t.saveSearch,
                  c = t.savedSearches.length
                o &&
                  i(o)
                    .then(function () {
                      return n({ text: $e })
                    })
                    .catch(r(c < 25 ? _e : Ee))
                var s = V.a.forSavedSearchResult(o, c)
                a.scribe({ element: 'saved_search', action: 'add', data: { items: [s] } })
              }),
              g()(u()(e), '_handleOnDeleteSavedSearchConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  o = t.deleteSavedSearch,
                  i = t.query,
                  c = t.savedSearches,
                  s = c.findIndex(function (e) {
                    return e.query === i
                  }),
                  l = c[s]
                if (l) {
                  o(l.id_str)
                    .then(function () {
                      return n({ text: et })
                    })
                    .catch(r(we))
                  var u = V.a.forSavedSearchResult(l.query, s)
                  a.scribe({ element: 'saved_search', action: 'delete', data: { items: [u] } }),
                    e.setState({ shouldShowDeleteSearchConfirmation: !1 })
                }
              }),
              g()(u()(e), '_handleOnDeleteSavedSearchCancel', function () {
                e.setState({ shouldShowDeleteSearchConfirmation: !1 })
              }),
              g()(u()(e), '_onDeleteSavedSearchMenuClick', function () {
                e.setState({ shouldShowDeleteSearchConfirmation: !0 })
              }),
              g()(u()(e), '_handleOverflowMenuClick', function () {
                e.props.analytics.scribe({ element: 'overflow_menu', action: 'click' })
              }),
              g()(u()(e), '_renderPrimaryContent', function (t) {
                var n = e.state.shouldShowDeleteSearchConfirmation
                return v.a.createElement(
                  ge.a,
                  null,
                  v.a.createElement(Ne, t),
                  n
                    ? v.a.createElement(D.a, {
                        onCancel: e._handleOnDeleteSavedSearchCancel,
                        onConfirm: e._handleOnDeleteSavedSearchConfirm,
                      })
                    : null,
                )
              }),
              g()(u()(e), '_renderSidebarContent', function () {
                var t = e.props,
                  n = t.history,
                  a = t.location,
                  r = t.query
                return v.a.createElement(
                  S.a,
                  { withSearchBox: !1, withTrends: !!r },
                  v.a.createElement(
                    ge.a,
                    null,
                    v.a.createElement(ke.b, { text: Ze }),
                    v.a.createElement(K.b, { history: n, key: a.key, location: a }),
                  ),
                )
              }),
              g()(u()(e), '_renderModesBar', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  o = t.querySrc,
                  i = t.searchFilters,
                  c = n.contextualScribeNamespace,
                  s = e._getModeLinks().map(function (t) {
                    var s = t.isActive,
                      l = t.label,
                      u = t.link,
                      d = t.modeType
                    return {
                      isActive: s,
                      key: d,
                      to: u,
                      label: l,
                      onClick: function () {
                        s() ||
                          n.scribe(
                            r()(
                              r()({}, c),
                              {},
                              {
                                element: 'search_filter_'.concat(d),
                                action: 'navigate',
                                data: e._getScribeData(a, o, i),
                              },
                            ),
                          )
                      },
                    }
                  })
                return v.a.createElement(Ie.a, { links: s })
              }),
              g()(u()(e), '_getModeLinks', function () {
                var t = e.props,
                  n = t.mode,
                  a = t.query,
                  r = t.querySrc,
                  o = t.searchFilters,
                  i = t.searchType,
                  c = t.vertical
                return e._getMemoizedModeLinks(a, r, i, o, n, c, function (e, t) {
                  return function () {
                    return C.i[t] === e
                  }
                })
              }),
              g()(
                u()(e),
                '_getMemoizedModeLinks',
                Object(U.a)(function (e, t, n, a, r, o, i) {
                  return tt.map(function (c) {
                    var s = C.i[c.type]
                    return {
                      link: Object(C.e)({
                        query: e,
                        querySrc: t,
                        modeValue: s,
                        searchType: n,
                        searchFilters: a,
                        vertical: o,
                      }),
                      isActive: i(s, r),
                      label: c.label,
                      modeType: c.type,
                    }
                  })
                }),
              ),
              g()(u()(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              g()(u()(e), '_handleSoftLeftClick', function () {
                var t = z.a.findDOMNode(e._searchBoxRef)
                t && t instanceof window.HTMLElement && t.querySelector('input').focus()
              }),
              g()(u()(e), '_handleSearchBoxSubmit', function (t, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  r = e.props.analytics
                r.scribe({ section: 'trendsplus', action: 'search' }),
                  a &&
                    e.setState({ shouldClearTimelineCache: !0 }, function () {
                      e.setState({ shouldClearTimelineCache: !1 })
                    })
              }),
              e
            )
          }
          return (
            s()(n, [
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
                    a = t.location,
                    r = t.mode,
                    o = t.query,
                    i = t.querySrc,
                    c = t.searchFilters,
                    s = t.searchFocused,
                    l = (t.searchType, t.vertical),
                    u = this.state.shouldClearTimelineCache,
                    d = !!o,
                    h = d ? We({ query: o }) : Ve,
                    p = {
                      history: n,
                      location: a,
                      query: o,
                      querySrc: i,
                      searchFilters: c,
                      searchFocused: s,
                      vertical: l,
                      shouldClearTimelineCache: u,
                    },
                    m = this._renderPrimaryContent(p),
                    f = { initialValue: o, mode: r, onSubmit: this._handleSearchBoxSubmit, searchFilters: c }
                  return d
                    ? v.a.createElement(
                        W.c,
                        { data: this._getScribeData(o, i, c, r, l) },
                        v.a.createElement(
                          q.a,
                          null,
                          null,
                          v.a.createElement(Ce.a, null, function (t) {
                            var a = t.windowWidth,
                              r = b.a.isTwoColumnLayout(a),
                              i = e._renderRightControl({ isTwoColumn: r, searchFocused: s })
                            return v.a.createElement(he.a, {
                              backLocation: '/explore',
                              composeOptions: He(o),
                              documentTitle: h,
                              history: n,
                              primaryContent: m,
                              rightControl: i,
                              searchBoxOptions: f,
                              searchBoxRef: e._setSearchBoxRef,
                              secondaryBar: e._renderModesBar(),
                              sidebarContent: e._renderSidebarContent(),
                              title: o,
                              withBottomLoginSignupBar: !0,
                              withSearchBox: !0,
                            })
                          }),
                          fe.b.isKaiOS() &&
                            v.a.createElement(pe.a, { leftText: Ye, onLeftClick: this._handleSoftLeftClick }),
                        ),
                      )
                    : Q.a[this._searchHomePageVariation] && !this._loggedInUserId
                    ? v.a.createElement(N.a, { to: '/' })
                    : v.a.createElement(N.a, { to: '/explore' })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(nt, 'contextType', ye.a)
      var at = F(nt)
      t.default = at
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        o = n('yLYC'),
        i = n('Ud88'),
        c = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, n) {
        c()
        var s,
          d = i(),
          h = t.fetchKey,
          p = t.fetchPolicy,
          m = t.source,
          f = t.variables,
          g = t.networkCacheConfig,
          y = o(e, f, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          y.request.node.params.name !== t.name && a(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: h,
              fetchObservable: l(d, y.request.identifier, function () {
                return d === t.environment && null != m
                  ? d.executeWithSource({ operation: y, source: m })
                  : d.execute({ operation: y })
              }),
              fetchPolicy: p,
              query: y,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var v = u(d, y)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != m && d === t.environment ? m.ifEmpty(v) : (t.environment, v),
            fetchKey: h,
            fetchPolicy: p,
            query: y,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        o = a.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          r(function () {
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
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = n('k49u'),
        c = n('LVU8'),
        s = n('3XMw'),
        l = n.n(s).a.i1801686,
        u =
          ((a = {}),
          o()(a, i.a.GenericForbidden, { toast: Object(c.a)() }),
          o()(a, i.a.InvalidRequestUrl, { toast: { text: l, withClearButton: !0 } }),
          o()(a, 'showToast', !0),
          a)
    },
    '3rEN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return re
      })
      n('yH/f'), n('KqXw'), n('Ysgh')
      var a,
        r = n('ERkP'),
        o = n.n(r),
        i = n('Hde2'),
        c = n('bojF'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('lUZE'),
        d = n('1f8Q'),
        h = n('rHpw'),
        p = n('MWbm'),
        m = n('yiKp'),
        f = n.n(m),
        g = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        y = n('iCMz'),
        v = n('Rp9C'),
        b = n('72nz'),
        S = n('Irs7'),
        _ = n('htQn'),
        E = n('t62R'),
        w = l.a.d228a9a0,
        C = l.a.jae84f3a,
        k = { section: 'logged_out_search', component: 'trend' },
        I = function (e) {
          var t = e.position,
            n = e.trend,
            a = Object(S.b)(),
            r = o.a.useMemo(
              function () {
                return [f()(f()({}, v.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          o.a.useEffect(
            function () {
              a.scribe(f()(f()({}, k), {}, { action: 'impression', data: { items: r } }))
            },
            [a, r],
          )
          var i = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return o.a.createElement(
            _.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return a.scribe(f()(f()({}, k), {}, { action: 'click', data: { items: r } }))
              },
              withInteractiveStyling: !1,
            },
            o.a.createElement(E.b, { color: 'gray700', key: n, link: i, size: 'body', style: O.searchTrend }, n),
          )
        },
        x = function (e) {
          var t = e.alignment,
            n = (e.deviceSize, e.trendResults.slice(0, 5))
          return o.a.createElement(
            p.a,
            {
              accessibilityLabel: C,
              accessibilityRole: 'list',
              style: [O.searchTrends, 'left' === t && O.searchTrendsLeft],
            },
            n.map(function (e, t) {
              return o.a.createElement(I, { key: e, position: t, trend: e })
            }),
            o.a.createElement(
              _.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              o.a.createElement(E.b, { link: '/explore', style: O.searchTrend }, w),
            ),
          )
        },
        T = function (e) {
          var t = e.alignment,
            n = e.deviceSize,
            a = e.trendResults,
            r = 'tablet' !== n && 'desktop' !== n
          return o.a.createElement(
            p.a,
            {
              style: [
                O.searchBoxTrendsContainer,
                r && O.searchBoxTrendsContainerMobile,
                'tablet' === n && O.searchBoxTrendsContainerTablet,
                'desktop' === n && O.searchBoxTrendsContainerDesktop,
              ],
            },
            o.a.createElement(
              p.a,
              { style: O.searchBox },
              o.a.createElement(b.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            a && o.a.createElement(x, { alignment: t, deviceSize: n, trendResults: a }),
          )
        },
        O = h.a.create(function (e) {
          return {
            bottomBarForMobile: {
              backgroundColor: e.colors.navigationBackground,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              padding: 'calc('.concat(e.spaces.space16, ' + ').concat(h.a.iPhoneOffsetBottom, ')'),
            },
            searchHomeFooter: { backgroundColor: e.colors.gray50 },
            searchHomeFooterMobile: {
              marginBottom: 'calc('.concat(e.spaces.space56, ' + ').concat(e.spaces.space4, ')'),
            },
            searchRoot: { flex: 1, alignItems: 'center', marginTop: '25vh', zIndex: 1 },
            searchRootMobile: { marginBottom: '55vh' },
            searchBox: { width: '100%', height: e.spaces.space40, marginBottom: e.spaces.space12, zIndex: 1 },
            searchBoxTrendsContainer: { width: '100%' },
            searchBoxTrendsContainerMobile: { paddingHorizontal: e.spaces.space16 },
            searchBoxTrendsContainerTablet: { maxWidth: 'calc('.concat(e.spaces.space36, ' * 10)') },
            searchBoxTrendsContainerDesktop: {
              alignItems: 'center',
              maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)'),
              minHeight: 'calc('.concat(e.spaces.space12, ' * 10)'),
            },
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
            n = e.trendResults,
            a = function () {
              return o.a.createElement(y.a, {
                buttonSize: 'large',
                loginButtonType: 'primaryOutlined',
                scribeNamespace: { component: 'signup_callout', element: 'form', section: 'front' },
                signupButtonType: 'primaryFilled',
              })
            }
          return o.a.createElement(
            o.a.Fragment,
            null,
            'desktop' !== t
              ? o.a.createElement(i.a, { style: O.bottomBarForMobile }, a())
              : o.a.createElement(
                  p.a,
                  { style: O.searchNavBar },
                  o.a.createElement(p.a, { style: O.searchNavButtons }, a()),
                ),
            o.a.createElement(
              p.a,
              { style: [O.searchRoot, 'desktop' !== t && O.searchRootMobile] },
              o.a.createElement(u.a, { style: O.twitterIconSearch }),
              o.a.createElement(T, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                p.a,
                { style: [O.searchHomeFooter, 'desktop' !== t && O.searchHomeFooterMobile] },
                o.a.createElement(g.a, { align: 'center' }),
              ),
            ),
          )
        },
        L = l.a.g0ff1ca8,
        B = l.a.g3aa4a89,
        P = h.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: h.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        F = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              p.a,
              { style: [O.searchRoot, 'desktop' !== t && O.searchRootMobile, P.searchRootWithBanner] },
              o.a.createElement(u.a, { style: O.twitterIconSearch }),
              o.a.createElement(T, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                i.a,
                { style: P.bottomBarBanner },
                o.a.createElement(d.a, { buttonSize: 'large', fullWidth: !0, subtext: B, text: L }),
              ),
            ),
          )
        },
        D = n('n0Rl'),
        A = n('RgK2'),
        M = n.n(A),
        U = n('kGix'),
        j = (n('enFi'), n('ddV6')),
        q = n.n(j),
        H = (n('0zG9'), n('UpKB')),
        z = n('v6aA'),
        N = n('5P4+'),
        V = n('kG2l'),
        W = n('JkIr'),
        K = n('0yYu'),
        Q = n('/yvb'),
        G = n('AS3p'),
        X = n('1zbE'),
        Y = l.a.ca86b62c,
        J = l.a.aa95ddc0,
        Z = l.a.b0dbe914,
        $ = l.a.ae03a21c,
        ee = 360,
        te = function (e) {
          var t = e.buttonState,
            n = e.cookieComplianceFS,
            a = e.deviceSize,
            r = o.a.useContext(z.a).featureSwitches,
            i = Object(G.c)(r) === G.a.AcceptAllCookies,
            c = o.a.useState(i),
            s = q()(c, 2),
            l = s[0],
            u = s[1],
            d = 'tablet' !== a && 'desktop' !== a
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(V.a, {
              buttonSize: 'medium',
              buttonState: t,
              customWidth: d ? 300 : ee,
              isCookieCompliant: n ? l : void 0,
              onPress: function () {
                u(!0)
              },
              style: [ne.ctaButton, ne.ssoButtonStyles, d && ne.containerThin],
            }),
            o.a.createElement(H.a, {
              buttonSize: 'medium',
              buttonState: t,
              style: [ne.ctaButton, ne.ssoButtonStyles, { marginBottom: 0 }, d && ne.containerThin],
            }),
          )
        },
        ne = h.a.create(function (e) {
          return {
            containerThin: { width: 300 },
            ctaButton: { maxWidth: ''.concat(N.a, 'px'), flex: 1 },
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
            footerContainer: { width: ee },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(N.a, 'px'), width: ee },
            headerMobile: { paddingHorizontal: e.spaces.space16 },
            headerTablet: { maxWidth: ee },
            headerDesktop: { maxWidth: 'calc('.concat(e.spaces.space48, ' * 10)') },
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
            ssoButtonStyles: { marginBottom: e.spaces.space16, width: ee, height: e.spaces.space40, flex: 'none' },
            twitterIconSearchLeft: { alignSelf: 'flex-start', marginBottom: e.spaces.space48 },
          }
        }),
        ae = function (e) {
          var t = e.cookieComplianceFS,
            n = e.deviceSize,
            a = e.trendResults,
            r = o.a.useState(X.a.SignUp),
            i = q()(r, 2),
            s = i[0],
            d = i[1],
            h = Object(S.b)(),
            m = 'tablet' !== n && 'desktop' !== n,
            f = function () {
              h.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'signup' })
            },
            y = function () {
              h.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'login' })
            },
            v =
              (function () {
                switch (s) {
                  case X.a.SignUp:
                    return {
                      loginSignUpButtonLabel: J,
                      loginSignUpButtonLink: {
                        pathname: '/i/flow/signup',
                        state: { input: { requested_variant: JSON.stringify({ signup_type: X.b }) } },
                      },
                      handleLoginSignUpButton: f,
                    }
                  case X.a.LogIn:
                    return { loginSignUpButtonLabel: Z, loginSignUpButtonLink: '/login', handleLoginSignUpButton: y }
                  default:
                    return
                }
              })() || {},
            b = v.handleLoginSignUpButton,
            _ = v.loginSignUpButtonLabel,
            w = v.loginSignUpButtonLink,
            C = o.a.createElement(
              p.a,
              { style: [ne.footerContainer, m && ne.containerThin] },
              o.a.createElement(E.b, { color: 'gray700', size: 'subtext2', style: ne.ctaText }, X.c),
              o.a.createElement(
                E.b,
                { align: 'left', style: !n && ne.ctaText, testID: W.a.logInSignUpFooter, weight: 'medium' },
                (function () {
                  switch (s) {
                    case X.a.SignUp:
                      return (
                        (e = {
                          onPress: function () {
                            return d(X.a.LogIn)
                          },
                        }.onPress),
                        o.a.createElement(
                          l.a.I18NFormatMessage,
                          { $i18n: 'c83ef3f5' },
                          o.a.createElement(E.b, { color: 'link', onPress: e }, l.a.fb9dd9b0),
                        )
                      )
                    case X.a.LogIn:
                      return (function (e) {
                        var t = e.onPress
                        return o.a.createElement(
                          l.a.I18NFormatMessage,
                          { $i18n: 'i89d7b70' },
                          o.a.createElement(E.b, { color: 'link', onPress: t }, l.a.ie4dd8d6),
                        )
                      })({
                        onPress: function () {
                          return d(X.a.SignUp)
                        },
                      })
                    default:
                      return
                  }
                  var e
                })(),
              ),
            ),
            k = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(te, { buttonState: s, cookieComplianceFS: t, deviceSize: n }),
              o.a.createElement(
                p.a,
                { style: [ne.gapContainer, m && ne.containerThin] },
                o.a.createElement(K.a, {
                  borderColor: 'nestedBorderColor',
                  label: o.a.createElement(E.b, { children: Y }),
                }),
              ),
              o.a.createElement(
                Q.a,
                {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  color: 'gray1100',
                  link: w,
                  onPress: b,
                  size: 'medium',
                  style: [ne.ctaButton, ne.ssoButtonStyles, m && ne.containerThin],
                  testID: W.a.signupButton,
                },
                _,
              ),
            ),
            I = o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                p.a,
                { style: [O.searchHomeFooter, { marginBottom: '0' }] },
                o.a.createElement(g.a, { align: 'center' }),
              ),
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              p.a,
              { style: [ne.splitContainer, 'desktop' === n && ne.splitContainerWide] },
              o.a.createElement(
                p.a,
                {
                  style: [
                    ne.splitItem,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                    { zIndex: '1' },
                  ],
                },
                o.a.createElement(
                  p.a,
                  {
                    style: [
                      m && ne.headerMobile,
                      'tablet' === n && ne.headerTablet,
                      'desktop' === n && ne.headerDesktop,
                    ],
                  },
                  o.a.createElement(u.a, { style: [O.twitterIconSearch, ne.twitterIconSearchLeft] }),
                  o.a.createElement(
                    E.b,
                    {
                      extendedWidth: !0,
                      style: 'desktop' === n ? ne.ctaTitleLarge : 'tablet' === n ? ne.ctaTitleMedium : ne.ctaTitle,
                      weight: 'bold',
                    },
                    $,
                  ),
                ),
                o.a.createElement(T, { alignment: 'left', deviceSize: n, trendResults: a }),
              ),
              o.a.createElement(
                p.a,
                {
                  style: [
                    ne.splitItem,
                    ne.splitItemGray,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                  ],
                },
                k,
                C,
              ),
            ),
            I,
          )
        },
        re = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        oe = void 0 !== a ? a : (a = n('x1T0')),
        ie = Object(D.b)(oe, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.cookieComplianceFS,
          n = e.deviceSize,
          a = e.variation
        return o.a.createElement(ie, {
          render: function (e) {
            var r,
              i = e.data,
              c = e.fetchStatus,
              s =
                (e.retry,
                c === U.a.LOADED
                  ? null == i || null === (r = i.logged_out_trends_list) || void 0 === r
                    ? void 0
                    : r.trends
                  : void 0)
            return a === re.original
              ? o.a.createElement(R, { deviceSize: n, trendResults: s })
              : a === re.banner
              ? o.a.createElement(F, { deviceSize: n, trendResults: s })
              : a === re.split
              ? o.a.createElement(ae, { cookieComplianceFS: t, deviceSize: n, trendResults: s })
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
          return i
        }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'e', function () {
          return u
        }),
        n.d(t, 'd', function () {
          return d
        })
      n('3voH')
      var a = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        r = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        o = 380,
        i = 2 * o,
        c = 1.15 * o,
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
              { uri: t ? a : r, width: 1302, height: 955 },
            ],
            original: { url: t ? a : r, width: 1302, height: 958 },
          }
        }
    },
    '72nz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchBoxContainer', function () {
          return ut
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('97Jx'),
        i = n.n(o),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        h = n.n(d),
        p = n('5Yy7'),
        m = n.n(p),
        f = n('2VqO'),
        g = n.n(f),
        y = n('KEM+'),
        v = n.n(y),
        b = n('RhWx'),
        S = n.n(b),
        _ =
          (n('tQbP'),
          n('2G9S'),
          n('z84I'),
          n('hBvt'),
          n('ho0z'),
          n('KqXw'),
          n('WNMA'),
          n('MvUL'),
          n('3uku'),
          n('jQ3i'),
          n('ERkP')),
        E = n.n(_),
        w = n('+Kfv'),
        C = n('lnti'),
        k = n('wtjx'),
        I = n('rxPX'),
        x = Object(I.a)()
          .propsFromActions(function () {
            return { addQuery: k.a }
          })
          .withAnalytics({ component: 'search_box' }),
        T = n('Hw0q'),
        O = n('3XMw'),
        R = n.n(O),
        L = n('8jkQ'),
        B = n('u3ZE'),
        P = n('rRIm'),
        F = n('Rp9C'),
        D =
          (n('LW0h'),
          n('7x/C'),
          n('vrRf'),
          n('5BYb'),
          n('+KXO'),
          n('x4t0'),
          n('M+/F'),
          n('wFPu'),
          n('vfdX'),
          n('hqKg')),
        A = n('3IPs'),
        M = n('M0jS'),
        U = n('G6rE'),
        j = n('k49u'),
        q = n('J4ZH'),
        H = n('0KEI'),
        z = n('v4XE'),
        N = n('kGix'),
        V = function (e) {
          return (
            Object(j.c)(e, j.a.GenericUserNotFound) ||
            Object(j.c)(e, j.a.OtherUserSuspended) ||
            Object(j.c)(e, j.a.AddressBookLookupNotFound)
          )
        },
        W = Object(I.a)()
          .propsFromState(function () {
            var e = Object(D.createSelector)(k.g, U.e.selectFetchStatuses, function (e, t) {
                var n = Object(C.a)(
                  e.map(function (e) {
                    var n,
                      a = null === (n = e.user) || void 0 === n ? void 0 : n.id
                    return a && t[a] ? { id: a, fetchStatus: t[a] } : void 0
                  }),
                )
                return Object(q.a)(n, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(D.createSelector)(e, function (e) {
                return (e[N.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(D.createSelector)(e, U.e.selectErrors, function (e, t) {
                return (e[N.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return V(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              a = Object(D.createSelector)(e, U.e.selectErrors, function (e, t) {
                var n = (e[N.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !V(t[n] || {})
                })
                return (e[N.a.LOADING] || []).length > 0
                  ? N.a.LOADING
                  : (e[N.a.LOADED] || []).length > 0
                  ? N.a.LOADED
                  : n.length > 0
                  ? N.a.FAILED
                  : N.a.NONE
              }),
              o = Object(D.createSelector)(k.g, function (e) {
                return e.map(function (e) {
                  return r()(r()({}, e), {}, { category: A.b.RecentSearch })
                })
              }),
              i = Object(D.createSelector)(z.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: A.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: k.e,
              recentSearches: o,
              usersFetchStatus: a,
              invalidRecentSearchUserIds: n,
              failedRecentSearchUserIds: t,
              savedSearches: i,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              n = e.invalidRecentSearchUserIds,
              a = e.isRecentSearchDataLoaded,
              r = e.recentSearches,
              o = e.savedSearches,
              i = e.usersFetchStatus,
              c = !r.filter(function (e) {
                var t = e.user
                return t && n.indexOf(t.id) < 0
              }).length,
              s = i !== N.a.LOADING && a && c ? N.a.LOADED : i
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: n,
              recentSearches: r,
              fetchStatus: s,
              savedSearches: o,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: k.b,
              createLocalApiErrorHandler: Object(H.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: z.a,
              fetchRecentSearchesIfNeeded: k.c,
              fetchSavedSearchesIfNeeded: z.b,
              fetchUsersIfNeeded: U.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: M.b.fetchManyIfNeeded,
              removeQuery: k.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        K = n('sYRn'),
        Q = n('v//M'),
        G = n('7nmT'),
        X = n.n(G),
        Y = (n('1t7P'), n('jQ/y'), n('m3Bd')),
        J = n.n(Y),
        Z = n('hOZg'),
        $ = n('5T6p'),
        ee = n('MWbm'),
        te = n('/yvb'),
        ne = n('rHpw'),
        ae = ['id', 'onRemove'],
        re = R.a.e68b09b4,
        oe = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.onRemove,
                    a = J()(e, ae)
                  return t
                    ? E.a.createElement(
                        ee.a,
                        { style: ie.root },
                        E.a.createElement($.a, a),
                        E.a.createElement(te.a, {
                          accessibilityLabel: re,
                          icon: E.a.createElement(Z.a, null),
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
                    a = e.supportText,
                    r = e.title
                  return {
                    category: A.b.RecentSearch,
                    query: t,
                    recentSearchType: A.a.Event,
                    queryMetadata: { id: t, image: n, title: r, supportText: a },
                  }
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent),
        ie = ne.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        ce = oe,
        se = n('j7Bv'),
        le = n('5mJL'),
        ue = n('t62R'),
        de = n('EHV7'),
        he = E.a.createElement(Z.a, null),
        pe = R.a.e68b09b4,
        me = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.id,
                    a = e.name,
                    r = e.onRemove,
                    o = e.withNewTypeaheadUI
                  if (!n) return null
                  var i = o ? 'xxxLarge' : 'xLarge',
                    c = E.a.createElement(se.a, { Icon: de.a, color: 'primary', size: i, style: fe.searchIcon })
                  return E.a.createElement(
                    le.a,
                    { avatarCell: c, avatarSize: i, cellStyle: fe.bodyColumn },
                    E.a.createElement(
                      ee.a,
                      null,
                      E.a.createElement(ue.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, a),
                      E.a.createElement(ue.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    E.a.createElement(te.a, {
                      accessibilityLabel: pe,
                      icon: he,
                      onPress: r,
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
                    a = e.name
                  return n
                    ? {
                        category: A.b.RecentSearch,
                        query: n,
                        recentSearchType: A.a.Topic,
                        queryMetadata: { id: n, name: a, description: t },
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        fe = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ge = function (e, t) {
          return U.e.select(e, t.id)
        },
        ye = function (e, t) {
          return Object(M.c)(e, t.id)
        },
        ve = Object(I.a)().propsFromState(function () {
          return { user: ge, userSpace: ye }
        }),
        be = n('v6aA'),
        Se = n('IMA+'),
        _e = E.a.createElement(Z.a, null),
        Ee = R.a.e68b09b4,
        we = R.a.fd06b02f,
        Ce = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(h()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              v()(h()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.index,
                  a = t.onItemClick,
                  r = e.searchItemData
                r && a(r, n)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.style,
                    a = e.user,
                    r = e.userSpace,
                    o = e.withNewTypeaheadUI,
                    i = this.context.featureSwitches
                  if (!a) return null
                  var c = r && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? r : void 0
                  c && (c.accessibilityLabel = we({ screenName: a.screen_name }))
                  var s = E.a.createElement(te.a, {
                    accessibilityLabel: Ee,
                    icon: _e,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return E.a.createElement(Se.a, {
                    avatarSize: 'xLarge',
                    avatarUri: a.profile_image_url_https,
                    decoration: s,
                    displayMode: o ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: a.protected,
                    isVerified: a.verified,
                    name: a.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: c,
                    screenName: a.screen_name,
                    style: n,
                    userId: a.id_str,
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
        })(E.a.Component)
      v()(Ce, 'contextType', be.a)
      var ke = ve.forwardRef(Ce),
        Ie = n('oQhu'),
        xe = n('hiGS'),
        Te = n('Gfoi'),
        Oe = E.a.createElement(Z.a, null),
        Re = E.a.createElement(xe.a, null),
        Le = Object(Ie.a)(function (e) {
          return e === A.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Be = Object(Ie.a)(function (e) {
          return e === A.b.SavedSearch ? Re : Oe
        }),
        Pe = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(h()(e), '_getButtonType', function () {
                var t = e.props.category
                return Le(t)
              }),
              v()(h()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Be(t)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.query,
                    a = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    r = E.a.createElement(se.a, { Icon: Te.a, color: 'neutral', size: a, style: Fe.searchIcon })
                  return E.a.createElement(
                    le.a,
                    { avatarCell: r, avatarSize: a, cellStyle: Fe.bodyColumn },
                    E.a.createElement(ue.b, { numberOfLines: 1, withHashflags: !0 }, n),
                    E.a.createElement(te.a, {
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
        })(E.a.Component),
        Fe = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        De = Pe,
        Ae = n('htQn'),
        Me = { viewType: 'search_item' },
        Ue = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n(e, a) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e, a)),
              v()(h()(r), '_renderSearchItem', function () {
                var e = r.props,
                  t = e.index,
                  n = e.item,
                  a = e.onItemClick
                return n.keyword
                  ? E.a.createElement(De, {
                      category: n.category,
                      onRemove: r._handleOnRemove,
                      query: n.keyword.query,
                      ref: r._handleItemRef,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : n.user
                  ? E.a.createElement(ke, {
                      id: n.user.id || '',
                      index: t,
                      onItemClick: a,
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      style: je.itemPadding,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : n.topic
                  ? E.a.createElement(me, {
                      description: n.topic.description || '',
                      id: n.topic.id,
                      name: n.topic.name || '',
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : n.event
                  ? E.a.createElement(ce, {
                      id: n.event.id,
                      image: n.event.image || { url: '', height: 0, width: 0 },
                      onRemove: r._handleOnRemove,
                      ref: r._handleItemRef,
                      supportText: n.event.supportText || '',
                      title: n.event.title || '',
                      withNewTypeaheadUI: r._withNewTypeaheadUI,
                    })
                  : null
              }),
              v()(h()(r), '_handleItemRef', function (e) {
                r._itemRef = e
              }),
              v()(h()(r), '_handleOnRemove', function (e) {
                var t = r.props,
                  n = t.index,
                  a = t.item
                ;(0, t.onRemoveQuery)(a, n), e.stopPropagation()
              }),
              v()(h()(r), '_handleOnClick', function () {
                var e = r.props,
                  t = e.index,
                  n = e.item,
                  a = e.onItemClick
                n.user || (r.searchItemData && a(r.searchItemData, t))
              }),
              (r._withNewTypeaheadUI = r.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              r
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.domId,
                    n = e.item,
                    a = e.testID
                  return E.a.createElement(
                    w.a,
                    { behavioralEventContext: Me },
                    E.a.createElement(
                      Ae.a,
                      {
                        accessibilityRole: 'option',
                        accessibilityState: { selected: !!t },
                        focusable: !0,
                        nativeID: t,
                        onClick: this._handleOnClick,
                        style: [je.root, t && je.focused, !(null != n && n.user) && je.itemPadding],
                        testID: a,
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
        })(E.a.Component)
      v()(Ue, 'contextType', be.a)
      var je = ne.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        qe = Ue,
        He = n('4ZbN'),
        ze = n('eb3s'),
        Ne = n('MXDK'),
        Ve = R.a.ee295fbe,
        We = { headline: R.a.f45c425f, text: R.a.caae4dd9, confirmButtonLabel: R.a.dbd5d40f },
        Ke = R.a.a8d68f61,
        Qe = R.a.c6530778,
        Ge = R.a.e047b8fa,
        Xe = ['user', 'keyword'],
        Ye = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n(e, a) {
            var o
            s()(this, n),
              (o = t.call(this, e, a)),
              v()(h()(o), '_withNewTypeaheadUI', !1),
              v()(h()(o), '_getRecentSearchItems', function () {
                var e = o.props,
                  t = e.failedRecentSearchUserIds,
                  n = e.recentSearches,
                  a = o.state.allowedRecentSearchItems,
                  r = n
                    .filter(function (e) {
                      var n = e.user
                      return !n || t.indexOf(n.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return a.includes(e)
                      })
                    })
                return r.length > 15 ? r.slice(0, 15) : r
              }),
              v()(h()(o), '_render', function () {
                var e = o.props,
                  t = e.domId,
                  n = e.savedSearches,
                  a = 0 === o._getNumOfSearchItems(),
                  r = o._getRecentSearchItems()
                return a
                  ? E.a.createElement(
                      ee.a,
                      { style: Je.emptyState, testID: He.a.typeaheadEmptySearch },
                      E.a.createElement(ue.b, { align: 'center', color: 'gray700' }, Ve),
                    )
                  : E.a.createElement(
                      ee.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      r.length > 0
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              ee.a,
                              { style: Je.header, testID: He.a.typeaheadRecentSearchesHeader },
                              E.a.createElement(ue.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Ke),
                              E.a.createElement(
                                te.a,
                                { onPress: o._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                Ge,
                              ),
                            ),
                            r.map(function (e, t) {
                              return o._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      n.length > 0
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(
                              ee.a,
                              {
                                accessibilityHidden: !0,
                                style: [Je.header, Je.borderTop],
                                testID: He.a.typeaheadSavedSearchesHeader,
                              },
                              E.a.createElement(ue.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Qe),
                            ),
                            o._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              v()(h()(o), '_renderRecentSearchItem', function (e, t) {
                var n = o.props.ariaDescendantId,
                  a = o.state.focusIndex === t
                return E.a.createElement(qe, {
                  domId: a ? n : void 0,
                  index: t,
                  item: e,
                  key: o._chooseKeyType(e, t),
                  onItemClick: o._handleOnItemClick,
                  onRemoveQuery: o._handleRemoveQuery,
                  ref: a ? o._setFocusedItemRef : void 0,
                  testID: He.a.typeaheadRecentSearchesItem,
                })
              }),
              v()(h()(o), '_chooseKeyType', function (e, t) {
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
              v()(h()(o), '_renderSavedSearches', function () {
                var e = o.props,
                  t = e.ariaDescendantId,
                  n = e.savedSearches,
                  a = o.state.focusIndex,
                  r = o._getRecentSearchItems(),
                  i = S()(n)
                return (
                  i.reverse(),
                  E.a.createElement(
                    ee.a,
                    { testID: He.a.typeaheadSavedSearchesContainer },
                    i.map(function (e, n) {
                      var i = a === n + r.length
                      return E.a.createElement(qe, {
                        domId: i ? t : void 0,
                        index: n,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: o._handleOnItemClick,
                        onRemoveQuery: o._handleRemoveQuery,
                        ref: i ? o._setFocusedItemRef : void 0,
                        testID: He.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              v()(h()(o), '_getNumOfSearchItems', function () {
                var e = o.props.savedSearches,
                  t = o._getRecentSearchItems()
                return e.length + t.length
              }),
              v()(h()(o), '_handleUsersRetry', function () {
                o._fetchUsersDetailsIfNeeded()
              }),
              v()(h()(o), '_fetchUsersDetailsIfNeeded', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUsersIfNeeded,
                  a = e.fetchUsersPresenceIfNeeded,
                  r = e.invalidRecentSearchUserIds,
                  i = e.recentSearches,
                  c = o.context,
                  s = c.featureSwitches,
                  l = c.loggedInUserId,
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
                  })(i, r)
                n(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && a(u).catch(t({}))
              }),
              v()(h()(o), '_handleRemoveQuery', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.removeQuery
                switch (e.category) {
                  case A.b.RecentSearch:
                    var i = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    r(i), o._resetFocus()
                    var c = F.a.forRecentSearchResult(i, t),
                      s = o._handleRemoveAction(e)
                    c && a.scribe({ action: s, data: { items: [c] } })
                    break
                  case A.b.SavedSearch:
                    o.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              v()(h()(o), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              v()(h()(o), '_handleClearAllClick', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              v()(h()(o), '_handleOnClearAllConfirm', function () {
                var e = o.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              v()(h()(o), '_handleOnClearAllCancel', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              v()(h()(o), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.deleteSavedSearch,
                  a = e.savedSearches,
                  r = o.state.savedSearchIdToDelete,
                  i = a.findIndex(function (e) {
                    return e.savedSearchId === r
                  }),
                  c = a[i]
                if (r) {
                  n(r)
                  var s = c && F.a.forSavedSearchResult(c.keyword.query, i)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              v()(h()(o), '_handleOnDeleteSavedSearchCancel', function () {
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              v()(h()(o), '_handleOnItemClick', function (e, t) {
                var n = o.props,
                  a = n.onDismiss
                ;(0, n.onItemClick)(e, t), o._scribeClick(e, t), a && a()
              }),
              v()(h()(o), '_scribeRecentSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.recentSearches
                if (n && n.length) {
                  var a = Object(C.a)(
                    n.map(function (e, t) {
                      return F.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: a } })
                }
              }),
              v()(h()(o), '_scribeSavedSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.savedSearches
                if (n && n.length) {
                  var a = Object(C.a)(
                    n.map(function (e, t) {
                      return F.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: a } })
                }
              }),
              v()(h()(o), '_scribeClick', function (e, t) {
                var n = o.props.analytics
                switch (e.category) {
                  case A.b.SavedSearch:
                    var a = F.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [a] } })
                    break
                  case A.b.RecentSearch:
                    var i
                    e.recentSearchType &&
                      (i =
                        e.recentSearchType === A.a.User
                          ? { user: { type: A.a.User, id: e.query } }
                          : e.recentSearchType === A.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: r()(r()({}, e.queryMetadata), {}, { type: A.a.Event, id: e.query }) }
                          : e.recentSearchType === A.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: r()(r()({}, e.queryMetadata), {}, { type: A.a.Topic, id: e.query }) }
                          : { keyword: { type: A.a.Keyword, query: e.query } })
                    var c = i && F.a.forRecentSearchResult(i, t)
                    c && n.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              v()(h()(o), '_setFocusedItemRef', function (e) {
                ;(o._focusedItemRef = e),
                  e &&
                    o._shouldScrollToFocusedItem &&
                    (Object(Ne.c)(o._getScrollParent(), o._getFocusedItem()), (o._shouldScrollToFocusedItem = !1))
              }),
              v()(h()(o), 'hasFocusedItem', function () {
                return o._getNumOfSearchItems() > 0
              }),
              v()(h()(o), 'selectFocusedItem', function () {
                if (o.hasFocusedItem()) {
                  var e = o._focusedItemRef && o._focusedItemRef.searchItemData
                  e && o._handleOnItemClick(e, o.state.focusIndex)
                }
              }),
              v()(h()(o), '_setFocusIndex', function (e, t) {
                var n = o.props.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), n && n()
              }),
              v()(h()(o), '_resetFocus', function () {
                o._setFocusIndex(-1)
              }),
              v()(h()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              v()(h()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              })
            var i,
              c,
              l = o.context.featureSwitches
            return (
              (o.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((i = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (c = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(Xe, [i ? 'topic' : '', c ? 'event' : ''])),
              }),
              (o._withNewTypeaheadUI = o.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              o
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchRecentSearchesIfNeeded,
                    a = e.fetchSavedSearchesIfNeeded,
                    r = e.recentSearches,
                    o = e.savedSearches
                  n(),
                    a().catch(t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((r && r.length) || (o && o.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.recentSearches,
                    a = t.savedSearches
                  e.recentSearches !== n &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== a && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.style,
                    a = this.state,
                    r = a.shouldShowClearAllConfirmationSheet,
                    o = a.shouldShowDeleteSavedSearchConfirmation
                  return E.a.createElement(
                    ee.a,
                    { style: n },
                    E.a.createElement(Q.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    r
                      ? E.a.createElement(ze.a, {
                          confirmButtonLabel: We.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: We.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: He.a.deleteRecentSearchesDialog,
                          text: We.text,
                        })
                      : null,
                    o
                      ? E.a.createElement(K.a, {
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
                    var e = Object(Ne.a)(X.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function () {
                  var e = this._focusedItemRef && X.a.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      v()(Ye, 'contextType', be.a)
      var Je = ne.a.create(function (e) {
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
        Ze = W.forwardRef(Ye),
        $e = 'SearchBox_Search_Input',
        et = n('TnY3'),
        tt = n('GZwR'),
        nt = n('4e/K'),
        at = R.a.ib2e46ee,
        rt = R.a.hbc99b02,
        ot = /^(\w+)$/,
        it = [tt.a.Events, tt.a.Users, tt.a.Topics],
        ct = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        st = { viewType: 'search_field' },
        lt = ['t1', 't3', 't4'],
        ut = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n(e, a) {
            var o, c
            return (
              s()(this, n),
              (c = t.call(this, e, a)),
              v()(h()(c), '_withNewTypeaheadUI', !1),
              v()(h()(c), '_orderResults', function (e, t, n, a) {
                return 't4' === c._rankedTypeaheadExperimentalValue
                  ? c._reorderResults(e, t, n, a)
                  : c._flattenResults(e, t, n, a)
              }),
              v()(h()(c), '_reorderResults', function (e, t, n, a) {
                var r = Object(tt.f)(t, tt.b.User),
                  o = Object(tt.f)(t, tt.b.NoResult),
                  i = r.sort(function (e, t) {
                    var n = e.rounded_score,
                      a = void 0 === n ? 0 : n,
                      r = t.rounded_score
                    return (void 0 === r ? 0 : r) - a
                  }),
                  c = [].concat(S()(i), S()(o))
                return Object(C.a)([e, a.length ? a : void 0, n.length ? n : void 0, c.length ? c : void 0])
              }),
              v()(h()(c), '_flattenResults', function (e, t, n, a) {
                var r = Object(tt.f)(t, tt.b.User),
                  o = Object(tt.f)(t, tt.b.NoResult),
                  i = Object(tt.f)(n, tt.b.Topic),
                  s = Object(tt.f)(n, tt.b.NoResult),
                  l = Object(tt.f)(a, tt.b.Event),
                  u = [].concat(S()(Object(tt.e)(i)), S()(Object(tt.e)(r))),
                  d = (
                    't1' === c._rankedTypeaheadExperimentalValue
                      ? u.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === c._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = S()(e), n = e.length - 1; n > 0; n--) {
                            var a = Math.floor(Math.random() * (n + 1)),
                              r = t[a],
                              o = t[n]
                            ;(t[n] = r), (t[a] = o)
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
              v()(h()(c), '_renderSearchBoxEmptyState', function (e) {
                return E.a.createElement(Ze, i()({}, e, { onItemClick: c._handleSearchItemClick }))
              }),
              v()(h()(c), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  a = e.query,
                  o = e.queryMetadata,
                  i = e.recentSearchType,
                  s = c.props.addQuery
                t === A.b.SavedSearch
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !1, src: B.a.SavedSearchClick })
                  : i === A.a.Keyword
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: B.a.RecentSearchClick })
                  : i === A.a.Event
                  ? (c._routeTransition({ pathname: '/i/events/'.concat(a) }),
                    o && o.title && s({ event: r()(r()({}, o), {}, { id: a, type: A.a.Event }) }))
                  : i === A.a.Topic
                  ? (c._routeTransition({ pathname: '/i/topics/'.concat(a) }),
                    o && o.name && s({ topic: r()(r()({}, o), {}, { id: a, type: A.a.Topic }) }))
                  : n && (c._routeTransition({ pathname: '/'.concat(n) }), s({ user: { id: a, type: A.a.User } }))
              }),
              v()(h()(c), '_handleSearchShortcut', function (e) {
                var t = c._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              v()(h()(c), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = ct(t)
                if (n.match(ot))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: tt.b.NoResult,
                    data: { text: rt({ screenName: n }), type: 'user' },
                  }
              }),
              v()(h()(c), '_handleOnDismiss', function () {
                var e = c.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var a = r()(r()({}, t), {}, { state: r()(r()({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(a)
                }
              }),
              v()(h()(c), '_handleOnFocus', function () {
                var e = c.props,
                  t = e.analytics,
                  n = e.history,
                  a = n.location,
                  o = a.state || {}
                if (!o.searchFocused) {
                  var i = r()(r()({}, a), {}, { state: r()(r()({}, o), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), n.push(i)
                }
              }),
              v()(h()(c), '_handleChange', function (e) {
                var t,
                  n = c.props.history.location
                !c._rankedTypeaheadExperimentalValue &&
                  null !== (t = n.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (c._rankedTypeaheadExperimentalValue = c.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  c.setState({ query: e })
              }),
              v()(h()(c), '_handleTypeaheadSubmit', function () {
                var e = c.state,
                  t = e.items,
                  n = e.query,
                  a = c.props.analytics
                ;/^\s*$/.test(n) ||
                  (a.scribe({
                    action: 'search',
                    data: { items: F.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  c._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              v()(h()(c), '_handleItemClick', function (e, t) {
                var n = c.props.addQuery,
                  a = c.state.query
                switch (e.type) {
                  case tt.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: A.a.User } })
                    c._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case tt.b.Topic:
                  case tt.b.Hashtag:
                    c._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: B.a.TypeaheadClick })
                    break
                  case tt.b.Event:
                    e.data && e.data.url
                      ? c._routeTransition({ pathname: L.b.parseInternalUrl(e.data.url) })
                      : c._submitQuery({ query: e.data.topic, src: B.a.TypeaheadClick })
                    break
                  case tt.b.NoResult:
                    var r = e.data.type
                    'user' === r
                      ? c._routeTransition({ pathname: '/'.concat(ct(a)) })
                      : 'topic' === r &&
                        c._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: B.a.TypeaheadClick })
                }
              }),
              v()(h()(c), '_handleItemsChanged', function (e) {
                c.setState({ items: e })
              }),
              v()(h()(c), '_routeTransition', function (e) {
                var t = e.params,
                  n = e.pathname,
                  a = e.query,
                  o = e.src,
                  i = c.props,
                  s = i.history,
                  l = i.location,
                  u = r()(
                    r()({}, l),
                    {},
                    {
                      pathname: n,
                      search: '',
                      query: t || (a ? { q: a, src: o } : {}),
                      state: r()(r()({}, l.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                s.replace(u)
              }),
              v()(h()(c), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  a = void 0 !== n && n,
                  r = e.src,
                  o = void 0 === r ? B.a.Typed : r,
                  i = c.props,
                  s = i.addQuery,
                  l = i.mode,
                  u = i.onSubmit,
                  d = i.searchFilters,
                  h = i.searchRoute
                ;(u && u(t, o, c.state.lastSubmittedQuery === t), a) && s({ keyword: { query: t, type: A.a.Keyword } })
                var p = Object(A.g)({ query: t, querySrc: o, mode: l, searchFilters: d })
                c._routeTransition({ pathname: h, params: p, src: o }), c.setState({ lastSubmittedQuery: t })
              }),
              v()(h()(c), '_setInputRef', function (e) {
                c._inputRef = e
              }),
              (c.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(T.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
              }),
              (c._withNewTypeaheadUI = c.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              c
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(P.b)(this._handleSearchShortcut))
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
                    a = e.isInSidebar,
                    r = e.isOnHomepage,
                    o = e.location,
                    i = e.placeholder,
                    c = this.state.query,
                    s = (o.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!o.state && !!o.state.searchFocused,
                    d = lt.includes(this._rankedTypeaheadExperimentalValue)
                  return E.a.createElement(
                    w.a,
                    { behavioralEventContext: st },
                    E.a.createElement(
                      ee.a,
                      { style: dt.root },
                      E.a.createElement(nt.default, {
                        filter: it,
                        forceVdlDisable: t,
                        getTopicExactMatch: c ? tt.h : void 0,
                        getUserExactMatch: c ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: dt.input,
                        isCompact: n,
                        isInSidebar: a,
                        isOnHomepage: r,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: d ? this._orderResults : void 0,
                        placeholder: i,
                        ref: this._setInputRef,
                        renderEmptyState: this._renderSearchBoxEmptyState,
                        rounded: !0,
                        shouldAutoFocus: u,
                        shouldClearOnSelect: !0,
                        shouldDeferPrefetch: !0,
                        source: tt.d.SearchBox,
                        testID: $e,
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
        })(E.a.Component)
      v()(ut, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: at,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        v()(ut, 'contextType', be.a)
      var dt = ne.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(et.a)(x(ut))
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'd', function () {
          return l
        }),
        n.d(t, 'e', function () {
          return h
        })
      n('yH/f')
      var a = n('SrIh'),
        r = n('JbbX'),
        o = 1e3,
        i = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function c(e) {
        var t = Object(r.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? i.AcceptAllCookies
                : t[2]
                ? i.RefuseNonEssentialCookies
                : (Object(a.a)('Invalid consent signal state'), i.Invalid)
              : i.NotSet
            : i.Invalid
          : i.NotSet
      }
      function s(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function l(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function h(e) {
        var t = Object(r.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    Chb3: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('jQ3i'), n('ERkP')),
        i = n.n(o),
        c = n('Hde2'),
        s = n('H1k/'),
        l = n('zCf4'),
        u = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function h() {
        var e = Object(l.g)(),
          t = i.a.useState(function () {
            return d(e.pathname)
          }),
          n = r()(t, 2),
          a = n[0],
          o = n[1]
        return (
          i.a.useEffect(
            function () {
              o(d(e.pathname))
            },
            [o, e],
          ),
          a
        )
      }
      t.a = Object(u.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = h()
        return !e.hideCookieBannerPicker && t ? i.a.createElement(c.a, null, i.a.createElement(s.a, null)) : null
      })
    },
    Ds5i: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('M+/F'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          if (!e) return !1
          var t = (0, r.default)(e)
          return 1 === t.length && t[0] === e.slice(1)
        })
      var r = a(n('nmVb'))
      e.exports = t.default
    },
    'H1k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ne
      })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('v6aA'),
        i = n('yiKp'),
        c = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        u = n('AS3p'),
        d = n('KUGV'),
        h = n('Irs7'),
        p = n('MWbm'),
        m = n('t62R'),
        f = n('cHvH'),
        g = n('rHpw'),
        y = n('/yvb'),
        v = n('3XMw'),
        b = n.n(v),
        S = b.a.d8817e36,
        _ = b.a.b9288ee6,
        E = b.a.i1390ec2,
        w = { page: 'cookie_compliance_banner' }
      function C() {
        var e = r.a.createElement(
          b.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          r.a.createElement(
            m.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            b.a.id7ef73f,
          ),
        )
        return r.a.createElement(I, { body: e, title: E })
      }
      function k(e) {
        var t = r.a.createElement(
          b.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          r.a.createElement(
            m.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            b.a.gfb2ba0f,
          ),
        )
        return r.a.createElement(I, { body: t, title: E })
      }
      function I(e) {
        return r.a.createElement(
          p.a,
          { style: T.cookieComplianceMessageWrap },
          r.a.createElement(m.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.a.createElement(
            m.b,
            { color: 'buttonWhite', size: 'subtext2', style: T.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var x = r.a.forwardRef(function (e, t) {
          var n = Object(h.b)()
          r.a.useEffect(
            function () {
              n.scribe(c()(c()({}, w), {}, { action: 'impression' }))
            },
            [n],
          )
          var a = (function () {
              var e = r.a.useState(!1),
                t = l()(e, 2),
                n = t[0],
                a = t[1],
                o = Object(h.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(c()(c()({}, w), {}, { action: 'click', element: 'expand_message' })), a(!0)
                },
              }
            })(),
            i = a.expand,
            s = a.isExpanded,
            m = (function () {
              var e = Object(h.b)(),
                t = r.a.useContext(o.a).featureSwitches,
                n = r.a.useState(function () {
                  return u.e(t) && !Object(d.a)()
                }),
                a = l()(n, 2),
                i = a[0],
                s = a[1]
              return {
                isBannerOpen: i,
                acceptAllCookies: function () {
                  e.scribe(c()(c()({}, w), {}, { action: 'click', element: 'accept_all' })), u.b(t), s(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(c()(c()({}, w), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), s(!1)
                },
              }
            })(),
            v = m.acceptAllCookies,
            b = m.isBannerOpen,
            E = m.refuseNonEssentialCookies
          return b
            ? r.a.createElement(f.a, null, function (e) {
                var n = e.windowWidth < g.a.theme.breakpoints.xLarge
                return r.a.createElement(
                  p.a,
                  { ref: t, style: [T.root, n && T.rootNarrow] },
                  s ? r.a.createElement(C, null) : r.a.createElement(k, { onExpand: i }),
                  r.a.createElement(
                    p.a,
                    { style: [T.buttonContainer, n && T.buttonContainerNarrow] },
                    r.a.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: v,
                        size: 'medium',
                        style: [T.ctaButton, n && T.ctaButtonNarrow],
                        type: g.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      S,
                    ),
                    r.a.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: E,
                        size: 'medium',
                        style: [T.ctaButton, n && T.ctaButtonNarrow],
                        type: g.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      _,
                    ),
                  ),
                )
              })
            : null
        }),
        T = g.a.create(function (e) {
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
        O = n('97Jx'),
        R = n.n(O),
        L = n('VrFO'),
        B = n.n(L),
        P = n('Y9Ll'),
        F = n.n(P),
        D = n('1Pcy'),
        A = n.n(D),
        M = n('5Yy7'),
        U = n.n(M),
        j = n('2VqO'),
        q = n.n(j),
        H = n('KEM+'),
        z = n.n(H),
        N = (n('hBvt'), n('RqPI')),
        V = n('rxPX'),
        W = Object(V.a)().propsFromState(function () {
          return { currentCountry: N.y }
        }),
        K = n('cnVF'),
        Q = n('mrHL'),
        G =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          }),
        X = b.a.ia5e7487,
        Y = (function (e) {
          U()(n, e)
          var t = q()(n)
          function n(e, a) {
            var o
            B()(this, n),
              (o = t.call(this, e, a)),
              z()(A()(o), 'state', { euWarningIsOpen: !1 }),
              z()(A()(o), '_renderMessage', function () {
                return r.a.createElement(
                  m.b,
                  { color: 'white', size: 'subtext2' },
                  r.a.createElement(
                    b.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    r.a.createElement(
                      m.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: J.link,
                      },
                      b.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              z()(A()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(Q.e)(K.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var i = o.props.currentCountry,
              c = o.context.featureSwitches,
              s = c.getArrayValue('responsive_web_eu_countries', []),
              l = Object(Q.d)({ featureSwitches: c, cookieName: K.k })
            return (o.state = { euWarningIsOpen: !!i && G(s, i, l) }), o
          }
          return (
            F()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.a.createElement(f.a, null, function (t) {
                        var n = t.windowWidth < g.a.theme.breakpoints.medium
                        return r.a.createElement(
                          p.a,
                          { ref: e.props.innerRef, style: [J.root, n && J.rootNarrow] },
                          e._renderMessage(),
                          r.a.createElement(
                            y.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [J.closeButton, n && J.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            X,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      z()(Y, 'contextType', o.a)
      var J = g.a.create(function (e) {
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
        Z = r.a.forwardRef(function (e, t) {
          return r.a.createElement(Y, R()({}, e, { innerRef: t }))
        }),
        $ = W.forwardRef(Z),
        ee = n('+d3d')
      function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = r.a.useMemo(
            function () {
              return Object(ee.a)(function (t) {
                if (e)
                  if (t) {
                    var n = t.getBoundingClientRect()
                    n && e(n)
                  } else e(null)
              }, t)
            },
            [e, t],
          )
        return r.a.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var a,
                r = n.bind(null, t)
              return (
                r(),
                window.addEventListener('resize', r),
                t && (a = new ResizeObserver(r)).observe(t),
                function () {
                  window.removeEventListener('resize', r), a && a.disconnect(), n.cancel()
                }
              )
            }
          },
          [e, n],
        )
      }
      function ne(e) {
        var t,
          n = r.a.useContext(o.a).featureSwitches,
          a =
            ((t = e.onHeightChange),
            te(
              r.a.useMemo(
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
          ? r.a.createElement(x, { ref: a })
          : r.a.createElement($, { ref: a })
      }
    },
    JkIr: function (e, t, n) {
      'use strict'
      t.a = { signupButton: 'signupButton', loginButton: 'loginButton', logInSignUpFooter: 'logInSignUpFooter' }
    },
    L7to: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return V
      })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        m = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('z84I'), n('ho0z'), n('KqXw'), n('MvUL'), n('jQ3i'), n('x4t0'), n('vrRf'), n('uFXj'), n('ERkP')),
        v = n.n(y),
        b = n('3XMw'),
        S = n.n(b),
        _ = n('RxYA'),
        E = (n('yH/f'), Object.freeze({ People: 'People', Location: 'Location' })),
        w = 'searchFiltersAdvancedSearch',
        C = n('MWbm'),
        k = n('Irs7'),
        I = n('v6aA'),
        x = n('fyvP'),
        T = n('rC8y'),
        O = n('rHpw'),
        R = n('3A2y'),
        L = n('Zkey'),
        B = S.a.j622effd,
        P = S.a.g2fd3205,
        F = S.a.defb4aa9,
        D = S.a.af293dc2,
        A = S.a.jaaa8984,
        M = S.a.i5045e73,
        U = S.a.h2388753,
        j = 'anyone',
        q = 'youFollow',
        H = 'anywhere',
        z = 'nearYou',
        N = [
          {
            label: P,
            name: E.People,
            options: [
              { label: F, value: j },
              { label: D, value: q },
            ],
          },
          {
            label: A,
            name: E.Location,
            options: [
              { label: M, value: H },
              { label: U, value: z },
            ],
          },
        ],
        V = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e, a) {
            var o
            i()(this, n),
              (o = t.call(this, e, a)),
              g()(u()(o), '_renderFilters', function () {
                return N.map(function (e, t) {
                  return v.a.createElement(
                    C.a,
                    { key: e.name, style: t > 0 && W.paddingTop },
                    v.a.createElement(x.a, {
                      label: e.label,
                      name: e.name,
                      onChange: o._handleFilterChange,
                      options: e.options,
                      value: o._getCurrentValue(e.name),
                    }),
                  )
                })
              }),
              g()(u()(o), '_getCurrentValue', function (e) {
                switch (e) {
                  case E.People:
                    return o.state.peopleFilter
                  case E.Location:
                    return o.state.locationFilter
                  default:
                    return ''
                }
              }),
              g()(u()(o), '_handleFilterChange', function (e, t) {
                var n = o.context.loggedInUserId,
                  a = o.props.location.query
                switch (e) {
                  case E.People:
                    if (n) {
                      o.setState({ peopleFilter: t })
                      var r = { pf: t === q ? 'on' : void 0, lf: 'on' === a.lf ? a.lf : void 0 }
                      o._executeSearch(r, 'people')
                    } else o.setState({ shouldShowLoginSheet: !0 })
                    break
                  case E.Location:
                    o.setState({ locationFilter: t })
                    var i = { lf: t === z ? 'on' : void 0, pf: 'on' === a.pf ? a.pf : void 0 }
                    o._executeSearch(i, 'location')
                }
              }),
              g()(u()(o), '_getAdvancedSearchLink', function () {
                var e = o.props.location
                return { pathname: '/search-advanced', query: r()({}, Object(R.a)(e.query, ['q', 'src'])) }
              }),
              g()(u()(o), '_handleFooterPress', function () {
                o._scribeAction('advanced_search')
              }),
              g()(u()(o), '_scribeAction', function (e) {
                o.props.analytics.scribe({ element: e, action: 'click' })
              }),
              g()(u()(o), '_executeSearch', function (e, t) {
                var n = o.props,
                  a = n.history,
                  i = n.location
                o._scribeAction(t)
                var c = o._getPathname()
                a.replace({ pathname: c, query: Object(L.a)(r()(r()({}, i.query), e)) })
              }),
              g()(u()(o), '_getPathname', function () {
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
              g()(u()(o), '_handleHideLoginSheet', function () {
                o.setState({ shouldShowLoginSheet: !1 })
              })
            var c = o.context.loggedInUserId,
              s = e.location.query,
              l = c && s && s.pf ? q : j,
              d = s && s.lf ? z : H
            return (o.state = { peopleFilter: l, locationFilter: d, shouldShowLoginSheet: !1 }), o
          }
          return (
            s()(n, [
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
                    C.a,
                    null,
                    v.a.createElement(C.a, { style: W.content }, this._renderFilters()),
                    v.a.createElement(
                      C.a,
                      { style: e && W.bottomBorder, testID: w },
                      v.a.createElement(T.a, {
                        link: this._getAdvancedSearchLink(),
                        onPress: this._handleFooterPress,
                        text: B,
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
      g()(V, 'contextType', I.a), g()(V, 'defaultProps', { withBottomBorder: !1 })
      var W = O.a.create(function (e) {
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
      t.b = Object(k.a)(V, { page: 'search_filters' })
    },
    PH3B: function (e, t, n) {
      'use strict'
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = n('ezF+'),
        c = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        s = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf')),
        l = {
          loader: function () {
            return Promise.all([n.e(0), n.e(350)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: s.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(352)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: s.a.Critical,
        }
      t.a = i.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((a = {}), o()(a, c.Cell, l), o()(a, c.PreviewCard, u), a),
      })
    },
    UpKB: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        m = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('2G9S'), n('ho0z'), n('0zG9'), n('ERkP')),
        v = n.n(y),
        b = n('/yvb'),
        S = n('hUVV'),
        _ = n('3XMw'),
        E = n.n(_),
        w = n('iKTg'),
        C = n('TaB8'),
        k = n('1zbE'),
        I = n('Ukpf'),
        x = n('cnVF'),
        T = n('TnY3'),
        O = n('0+0m'),
        R = n('v6aA'),
        L = n('2qJZ'),
        B = E.a.ib65b1c6,
        P = E.a.f55cebb7,
        F = E.a.g61ed8a4,
        D = { clientId: O.a, scope: 'name email', usePopup: !0 },
        A = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), 'state', { isScriptLoaded: !1 }),
              g()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(C.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              g()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(L.c)(e.context.featureSwitches) ? 'https://'.concat(L.b) : 'https://'.concat(L.a)
                t &&
                  n(x.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(r()(r()({}, D), {}, { redirectURI: a, state: n }))
                  })
              }),
              g()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  a = n.analytics,
                  r = n.buttonState,
                  o = n.history,
                  i = n.personalizationSettings,
                  c = n.shouldPropagateP13nSettings,
                  s = n.ssoInitTokens,
                  l = i || {},
                  u = l.allowCookieUse,
                  d = l.allowDeviceAccess,
                  h = l.allowPartnerships,
                  p = l.allowPersonalization
                a.scribe({ component: 'apple_sign_in', element: r, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      a.scribe({ component: 'apple_sign_in', element: r, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: c && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!h,
                              allow_ads_personalization: !!p,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: x.A.Apple,
                              state: s[x.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== O.g
                        ? (a.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), n({ text: F }))
                        : a.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    I.a.inject({
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
                    a = e.style,
                    r = this.state.isScriptLoaded,
                    o = n === k.a.SignUp ? B : P
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : v.a.createElement(b.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !r,
                        icon: v.a.createElement(w.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: a,
                      })
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      g()(A, 'contextType', R.a),
        g()(A, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(T.a)(Object(S.a)(A)))
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        o = n('Ud88'),
        i = n('aQQo'),
        c = i.loadQuery,
        s = i.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        h = l.useRef,
        p = l.useState,
        m = n('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== m(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : f,
          i = o()
        s()
        var l = r(),
          m = h(new Set([n])),
          y = p(function () {
            return n
          }),
          v = y[0],
          b = y[1],
          S = p(function () {
            return n
          }),
          _ = S[0],
          E = S[1]
        n !== _ && (m.current.add(n), E(n), b(n))
        var w = u(
            function () {
              l.current && (m.current.add(f), b(f))
            },
            [l],
          ),
          C = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var r,
                  o = c(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : i, e, t, a)
                m.current.add(o), b(o)
              }
            },
            [i, e, b, l],
          ),
          k = h(!1)
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
                    'NullQueryReference' !== v.kind &&
                    C(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var t = m.current
              if (l.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value
                    if (o === v) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (g(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [v, l, C, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(m.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (g(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
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
          ['NullQueryReference' === v.kind ? null : v, C, w]
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return be
        }),
        n.d(t, 'LoggedOutHome', function () {
          return Se
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        m = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        y = n('ddV6'),
        v = n.n(y),
        b = (n('0zG9'), n('z84I'), n('ERkP')),
        S = n.n(b),
        _ = n('UpKB'),
        E = n('zI2C'),
        w = n('Hde2'),
        C = n('Chb3'),
        k = n('RqPI'),
        I = n('rxPX'),
        x = Object(I.a)()
          .propsFromState(function () {
            return { userLanguage: k.o }
          })
          .withAnalytics({ page: 'front' }),
        T = n('H1k/'),
        O = n('SrtL'),
        R = n('FQwk'),
        L = n('kG2l'),
        B = n('muX9'),
        P = n('6oVL'),
        F = n('rJoH'),
        D = n('yoO3'),
        A = n('Es6L'),
        M = n('JkIr'),
        U = n('MWbm'),
        j = n('t62R'),
        q = n('/yvb'),
        H = n('0yYu'),
        z = n('cHvH'),
        N = n('TIdA'),
        V = n('A91F'),
        W = n('rHpw'),
        K = n('pxuL'),
        Q = n('5P4+'),
        G = n('AS3p'),
        X = n('0+0m'),
        Y = n('3XMw'),
        J = n.n(Y),
        Z = n('VwDm'),
        $ = n('wz7L'),
        ee = n('dFWS'),
        te = n('lUZE'),
        ne = n('3rEN'),
        ae = n('1zbE'),
        re = n('XJCT'),
        oe = [
          { text: J.a.a62c9c33, Icon: Z.a },
          { text: J.a.cf39fca2, Icon: $.a },
          { text: J.a.j86184fd, Icon: ee.a },
        ],
        ie = J.a.d1091f50,
        ce = J.a.d9e109ae,
        se = J.a.f86f23b5,
        le = J.a.eba1b197,
        ue = J.a.a565833d,
        de = J.a.aa95ddc0,
        he = J.a.fa811c30,
        pe = J.a.e919c3bc,
        me = J.a.b0dbe914,
        fe = J.a.e5b0e543,
        ge = J.a.h0ff39da,
        ye = J.a.j3f49ff6,
        ve = J.a.ca86b62c
      function be(e) {
        var t = S.a.useState(0),
          n = v()(t, 2),
          a = n[0],
          r = n[1],
          o = S.a.useCallback(function (e) {
            r(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(C.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(w.a, null, S.a.createElement(T.a, { onHeightChange: o })),
          S.a.createElement(U.a, { style: [{ marginBottom: a }, Ee.bannerPadderChildren] }, e.children),
        )
      }
      var Se = (function (e) {
        h()(n, e)
        var t = m()(n)
        function n(e, a) {
          var r
          return (
            i()(this, n),
            (r = t.call(this, e, a)),
            g()(
              u()(r),
              '_thirdPartySsoButtonsEnabled',
              r.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            g()(
              u()(r),
              '_ssoInSliShowProminentLoginButton',
              r.context.featureSwitches.isTrue('responsive_web_sso_in_sli_show_prominent_login_button'),
            ),
            g()(
              u()(r),
              '_isPlaceholderSIWGButtonEnabled',
              r.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            g()(
              u()(r),
              '_cookieComplianceGingersnapEnabled',
              r.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            g()(
              u()(r),
              '_searchHomePageVariation',
              r.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            g()(u()(r), '_renderLoginSignupButtons', function (e) {
              var t = e ? Ee.ctaButton : Ee.ctaButtonMobile
              return S.a.createElement(
                U.a,
                { style: !r._thirdPartySsoButtonsEnabled && 'tablet' === e && Ee.ctaButtonContainer },
                r._thirdPartySsoButtonsEnabled
                  ? S.a.createElement(
                      S.a.Fragment,
                      null,
                      r._renderSSOButtons(e),
                      r._ssoInSliShowProminentLoginButton
                        ? r._renderProminentLoginButtonVariation(e)
                        : r._renderLessProminentLoginButtonVariation(e),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(
                        q.a,
                        {
                          link: '/i/flow/signup',
                          onPress: r._handleSignupButton,
                          size: 'xLarge',
                          style: [t, 'tablet' === e && Ee.ctaButtonSplitSpacing],
                          testID: M.a.signupButton,
                          type: 'brandFilled',
                        },
                        ue,
                      ),
                      S.a.createElement(
                        q.a,
                        {
                          link: '/login',
                          onPress: r._handleLoginButton,
                          size: 'xLarge',
                          style: t,
                          testID: M.a.loginButton,
                          type: 'brandOutlined',
                        },
                        pe,
                      ),
                    ),
              )
            }),
            g()(u()(r), '_renderSSOButtons', function (e) {
              var t = r.state,
                n = t.buttonState,
                a = t.isCookieCompliant,
                o = e ? Ee.ctaButton : Ee.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(L.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  displayType: X.e.Button,
                  isCookieCompliant:
                    r._cookieComplianceGingersnapEnabled && r._isPlaceholderSIWGButtonEnabled ? a : void 0,
                  onPress: r._handleCookieCompliance,
                  style: [o, 'tablet' === e && Ee.ctaButtonSplitSpacing, Ee.ssoButtonStyles],
                }),
                S.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [
                    o,
                    'tablet' === e && Ee.ctaButtonSplitSpacing,
                    Ee.ssoButtonStyles,
                    r._ssoInSliShowProminentLoginButton && { marginBottom: 0 },
                  ],
                }),
              )
            }),
            g()(u()(r), '_renderProminentLoginButtonVariation', function (e) {
              var t = e ? Ee.ctaButton : Ee.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  U.a,
                  { style: Ee.gapContainer },
                  S.a.createElement(H.a, { label: S.a.createElement(j.b, { children: ve }) }),
                ),
                S.a.createElement(
                  q.a,
                  {
                    link: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: ae.b }) } },
                    },
                    onPress: r._handleSignupButton,
                    size: 'medium',
                    style: [t, 'tablet' === e && Ee.ctaButtonSplitSpacing, Ee.ssoButtonStyles],
                    testID: M.a.signupButton,
                    type: 'brandFilled',
                  },
                  de,
                ),
                S.a.createElement(j.b, { color: 'gray700', size: 'subtext3', style: [t, { width: X.b }] }, ae.c),
                S.a.createElement(
                  U.a,
                  { style: Ee.signInButtonContainer },
                  S.a.createElement(j.b, { size: 'headline2', style: t, weight: 'bold' }, he),
                  S.a.createElement(
                    q.a,
                    {
                      link: '/login',
                      onPress: r._handleLoginButton,
                      size: 'medium',
                      style: [t, 'tablet' === e && Ee.ctaButtonSplitSpacing, Ee.ssoButtonStyles],
                      testID: M.a.loginButton,
                      type: 'brandOutlined',
                    },
                    fe,
                  ),
                ),
              )
            }),
            g()(u()(r), '_renderLessProminentLoginButtonVariation', function (e) {
              var t = r.state.buttonState,
                n = e ? Ee.ctaButton : Ee.ctaButtonMobile,
                a = r._getLoginSignupProps() || {},
                o = a.handleLoginSignUpButton,
                i = a.loginSignUpButtonLabel,
                c = a.loginSignUpButtonLink
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  q.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: c,
                    onPress: o,
                    size: 'medium',
                    style: [n, 'tablet' === e && Ee.ctaButtonSplitSpacing, Ee.ssoButtonStyles],
                    testID: t === ae.a.LogIn ? M.a.loginButton : M.a.signupButton,
                  },
                  i,
                ),
                t === ae.a.SignUp
                  ? S.a.createElement(j.b, { color: 'gray700', size: 'subtext2', style: n }, ae.c)
                  : null,
                S.a.createElement(j.b, { testID: M.a.logInSignUpFooter }, r._getLoginSignupFooter()),
              )
            }),
            g()(u()(r), '_renderUsernameInputField', function () {
              return S.a.createElement(
                U.a,
                { style: _e.inputContainer },
                S.a.createElement(re.b, {
                  onChange: r._handleUsernameChange,
                  onSubmitEditing: r._handleSubmitEditing,
                  style: _e.input,
                }),
              )
            }),
            g()(u()(r), '_renderHalfForm', function () {
              var e = r.state.usernameValue
              return S.a.createElement(
                U.a,
                { style: [_e.container, _e.halfForm] },
                r._renderUsernameInputField(),
                S.a.createElement(
                  q.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: r._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: _e.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  pe,
                ),
              )
            }),
            g()(u()(r), '_getLoginSignupProps', function () {
              switch (r.state.buttonState) {
                case ae.a.SignUp:
                  return {
                    loginSignUpButtonLabel: de,
                    loginSignUpButtonLink: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: ae.b }) } },
                    },
                    handleLoginSignUpButton: r._handleSignupButton,
                  }
                case ae.a.LogIn:
                  return {
                    loginSignUpButtonLabel: me,
                    loginSignUpButtonLink: '/login',
                    handleLoginSignUpButton: r._handleLoginButton,
                  }
                default:
                  return
              }
            }),
            g()(u()(r), '_getLoginSignupFooter', function () {
              var e
              switch (r.state.buttonState) {
                case ae.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return r.setState({ buttonState: ae.a.LogIn })
                      },
                    }.onPress),
                    S.a.createElement(
                      J.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      S.a.createElement(j.b, { color: 'link', onPress: e }, J.a.fb9dd9b0),
                    )
                  )
                case ae.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return S.a.createElement(
                      J.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      S.a.createElement(j.b, { color: 'link', onPress: t }, J.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return r.setState({ buttonState: ae.a.SignUp })
                    },
                  })
                default:
                  return
              }
            }),
            g()(u()(r), '_handleHalfFormLoginClick', function () {
              r.props.analytics.scribe({ component: 'half_form', element: 'login', action: 'click' })
            }),
            g()(u()(r), '_handleSubmitEditing', function () {
              r.setState({ autoSubmit: !0 })
            }),
            g()(u()(r), '_handleSignupButton', function () {
              r.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'signup',
              })
            }),
            g()(u()(r), '_handleLoginButton', function () {
              r.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'login',
              })
            }),
            g()(u()(r), '_handleUsernameChange', function (e) {
              r.setState({ usernameValue: e.target.value })
            }),
            g()(u()(r), '_handleCookieCompliance', function () {
              r.setState({ isCookieCompliant: !0 })
            }),
            (r.state = {
              autoSubmit: !1,
              buttonState: 'signup',
              isCookieCompliant: Object(G.c)(r.context.featureSwitches) === G.a.AcceptAllCookies,
            }),
            r
          )
        }
        return (
          s()(n, [
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
                  t = !!ne.a[this._searchHomePageVariation]
                return S.a.createElement(
                  D.a,
                  null,
                  S.a.createElement(O.a, { title: ge }),
                  S.a.createElement(F.a, {
                    canonical: 'https://twitter.com/',
                    description: ye,
                    title: ge,
                    type: 'website',
                  }),
                  S.a.createElement(E.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    B.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: ye, name: 'description' }),
                  ),
                  S.a.createElement(z.a, null, function (n) {
                    var a = n.windowHeight,
                      r = n.windowWidth,
                      o = Object(Q.e)(r, a),
                      i = o.deviceSize,
                      c = o.showLoginForm
                    return S.a.createElement(
                      U.a,
                      { style: Ee.root },
                      t
                        ? S.a.createElement(ne.b, {
                            cookieComplianceFS:
                              e._cookieComplianceGingersnapEnabled && e._isPlaceholderSIWGButtonEnabled,
                            deviceSize: i,
                            variation: ne.a[e._searchHomePageVariation],
                          })
                        : S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              U.a,
                              { style: [Ee.main, 'desktop' === i && Ee.mainWide] },
                              e._renderCTA({ deviceSize: i, showLoginForm: c }),
                              e._renderHero(i),
                            ),
                            S.a.createElement(be, null, S.a.createElement(R.a, { align: 'center' })),
                          ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function (e) {
                var t = Object(Q.d)(this.props.userLanguage),
                  n = t.original,
                  a = t.variants
                return S.a.createElement(
                  U.a,
                  { style: [Ee.block, Ee.communication, Ee.blockHero] },
                  S.a.createElement(
                    U.a,
                    { style: Ee.blockImg },
                    S.a.createElement(N.a, {
                      accessibilityLabel: '',
                      aspectMode: V.a.COVER,
                      backgroundColor: W.a.theme.colors.blue500,
                      customVariants: a,
                      draggable: !1,
                      image: n,
                    }),
                    S.a.createElement(te.a, { style: [Ee.twitterIconHero, 'desktop' === e && Ee.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = oe.length
                return S.a.createElement(
                  U.a,
                  { style: Ee.communicationItems },
                  oe.map(function (t, n) {
                    var a = t.Icon,
                      r = t.text,
                      o = n + 1 === e
                    return S.a.createElement(
                      U.a,
                      { key: r, style: [Ee.communicationItem, o && Ee.communicationItemLast] },
                      S.a.createElement(a, { style: Ee.communicationItemIcon }),
                      S.a.createElement(
                        j.b,
                        { color: 'white', size: 'headline1', style: Ee.communicationItemText, weight: 'bold' },
                        r,
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
                  a = this.state.buttonState
                return S.a.createElement(
                  U.a,
                  { style: [Ee.block, Ee.blockCTA, 'tablet' === t && Ee.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  S.a.createElement(
                    U.a,
                    { style: [Ee.blockInnerWrapper, 'desktop' === t && Ee.blockInnerWrapperWide] },
                    S.a.createElement(te.a, { style: Ee.twitterIcon }),
                    S.a.createElement(
                      j.b,
                      { extendedWidth: !0, style: t ? Ee.ctaTitleLarge : Ee.ctaTitle, weight: 'bold' },
                      le,
                    ),
                    S.a.createElement(
                      j.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Ee.ctaTextLarge : Ee.ctaText,
                        weight: 'bold',
                      },
                      this._thirdPartySsoButtonsEnabled ? (a === ae.a.SignUp ? ce : se) : ce,
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
                  a = n ? '?account_identifier='.concat(n) : '',
                  r = this.context.featureSwitches.getValue('responsive_web_inline_login_box_enabled'),
                  o = 'full' === r
                return 'none' === r
                  ? null
                  : 'half' === r
                  ? this._renderHalfForm()
                  : o
                  ? S.a.createElement(
                      U.a,
                      { style: _e.container },
                      S.a.createElement(
                        P.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: _e.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          U.a,
                          { style: _e.inputContainer },
                          S.a.createElement(re.a, { onSubmitEditing: this._handleSubmitEditing, style: _e.input }),
                          S.a.createElement(
                            j.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(a),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: _e.forgotPassword,
                            },
                            ie,
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
      g()(Se, 'contextType', K.a)
      var _e = W.a.create(function (e) {
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
        Ee = W.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: r()(
              r()({}, W.a.absoluteFillObject),
              {},
              { flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: e.colors.primary },
            ),
            blockCTA: { minWidth: '45vw' },
            blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
            blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
            blockInnerWrapperWide: { minWidth: ''.concat(Q.c, 'px'), maxWidth: ''.concat(Q.b, 'px') },
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
              maxWidth: ''.concat(Q.a, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(W.a.theme.spacesPx.space40 + W.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(W.a.theme.spacesPx.space64 + W.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat(Q.a, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: X.b, height: e.spaces.space40, flex: 'none' },
            signInButtonContainer: { marginTop: W.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(Q.a, 'px'), width: X.b },
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
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat(Q.a, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        }),
        we = x(Se)
      t.default = we
    },
    'g9w/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
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
                d: 'M16 11.25h-3.25V8c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.25H8c-.414 0-.75.336-.75.75s.336.75.75.75h3.25V16c0 .414.336.75.75.75s.75-.336.75-.75v-3.25H16c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    h2mu: function (e, t, n) {
      'use strict'
      var a,
        r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        u = n('5Yy7'),
        d = n.n(u),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        f = n.n(m),
        g = (n('2G9S'), n('ERkP')),
        y = n.n(g),
        v = n('yiKp'),
        b = n.n(v),
        S = n('ezF+'),
        _ = n('QIgh'),
        E = n('8UdT'),
        w = n('iu0J'),
        C = n('zgaL'),
        k = n('PH3B'),
        I = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf')),
        x = {
          loader: function () {
            return n.e(232).then(n.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: I.a.Critical,
        },
        T = S.e(x),
        O = (n('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        R = {
          loader: function () {
            return n.e(355).then(n.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: I.a.Critical,
        },
        L = {
          loader: function () {
            return n.e(355).then(n.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: I.a.Critical,
        },
        B = {
          loader: function () {
            return n.e(355).then(n.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: I.a.Critical,
        },
        P = S.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((a = {}), f()(a, O.Expand, R), f()(a, O.Replace, L), f()(a, O.Suggest, B), a),
        }),
        F = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            n = e.withUserPresence
          return b()(
            b()(
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
                f()(t, E.b.News, k.a),
                f()(t, E.b.EventSummary, Object(w.a)({ shouldStoreTypeaheadItem: n })),
                f()(t, E.b.RelatedSearch, T),
                f()(t, E.b.FollowSearch, S.e(S.a())),
                f()(t, E.b.FollowSearchAction, S.e(S.a())),
                f()(t, E.b.Place, S.e(S.a())),
                f()(t, E.b.MomentAnnotation, C.a),
                f()(t, E.b.Spelling, P),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        D = n('3X8/'),
        A = n('oQhu'),
        M = n('EUHl'),
        U = n('7BdX'),
        j = n('fTQJ'),
        q = n('i6OR'),
        H = n('X04g'),
        z = n('t62R'),
        N = n('FIs5'),
        V = n('v6aA'),
        W = n('3XMw'),
        K = n.n(W),
        Q = K.a.c09de2d4,
        G = y.a.createElement(
          K.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          y.a.createElement(z.b, { link: '/settings/search' }, K.a.d2918e88),
        ),
        X = K.a.ae111c99,
        Y = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(l()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case H.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case H.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case H.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              f()(l()(e), '_getModule', function () {
                var t = e.props,
                  n = t.query,
                  a = t.querySrc,
                  r = t.searchFilters,
                  o = t.searchMode,
                  i = t.urtEndpointOptions,
                  c = t.vertical
                return e._getMemoizedModule(n, a, o, r, c, i)
              }),
              f()(l()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  n = t.emptyStateComponent,
                  a = t.query
                return n || y.a.createElement(N.a, { header: X({ query: a }), message: G })
              }),
              f()(
                l()(e),
                '_getMemoizedModule',
                Object(A.a)(function (e, t, n, a, r, o) {
                  return Object(q.b)({
                    query: e,
                    searchMode: n,
                    querySource: t,
                    searchFilters: a,
                    vertical: r,
                    urtEndpointOptions: o,
                  })
                }),
              ),
              f()(
                l()(e),
                '_getMemoizedEntryConfiguration',
                Object(A.a)(function (t) {
                  return F({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return y.a.createElement(j.a, {
                    apiErrorHandlerMap: D.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: M.a.CLIENT,
                    prerollDisplayLocation: U.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: Q,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      f()(Y, 'contextType', V.a)
      t.a = Y
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
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
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              i.a.createElement('path', {
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
        return m
      })
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = (n('jQ3i'), n('x4t0'), n('2G9S'), n('IAdD'), n('LW0h'), n('7x/C'), n('vrRf'), n('z84I'), n('u3ZE')),
        c = n('3IPs'),
        s = n('ZNT5'),
        l = n('eR3e'),
        u = 'search-',
        d = ' near:me',
        h =
          ((a = {}),
          o()(a, c.c.Top, {}),
          o()(a, c.c.Live, { tweet_search_mode: c.c.Live }),
          o()(a, c.c.User, { result_filter: c.c.User }),
          o()(a, c.c.Image, { result_filter: c.c.Image }),
          o()(a, c.c.Video, { result_filter: c.c.Video }),
          a),
        p = function (e) {
          return (function (e) {
            return e === i.a.SpellingCorrectionRevertClick || e === i.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        m = function () {
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
          a = void 0 === n ? c.c.Top : n,
          r = e.querySource,
          o = e.searchFilters,
          i = e.vertical,
          l = e.urtEndpointOptions,
          m = p(r),
          f = o && o.peopleFilter ? 'searcher_follows' : void 0,
          g = f ? '-pf' : '',
          y = o && o.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          v = ''.concat(u).concat(y, '-').concat(a).concat(m).concat(g)
        return Object(s.a)({
          timelineId: v,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == l ? void 0 : l.requestParams,
              { q: y, social_filter: f, vertical: i },
              h[a],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: a === c.c.Live ? 5e3 : void 0,
          timelineType: 'search',
        })
      }
    },
    iKTg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
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
                d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var a = n('0vv5'),
        r = 500,
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
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('jHSc'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('L7to'),
        d = n('Irs7'),
        h = l.a.aea62567
      function p(e) {
        var t = e.history,
          n = e.location
        return i.a.createElement(
          c.b,
          { documentTitle: h, history: t, title: h },
          i.a.createElement(u.a, r()({}, e, { key: n.key, withBottomBorder: !0 })),
        )
      }
      t.default = Object(d.a)(p, { page: 'search_filters' })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return M
      })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        m = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        v = n.n(y),
        b = n('pXBW'),
        S = n('6/RC'),
        _ = n('UIzd'),
        E = n.n(_),
        w = n('kGix')
      n.d(t, 'a', function () {
        return w.a
      })
      var C = n('fs1G'),
        k = n('0KEI'),
        I = n('lU4h'),
        x = n.n(I),
        T = n('21nk'),
        O = n.n(T),
        R = n('bCEw'),
        L = n.n(R),
        B = n('Ud88'),
        P = n.n(B),
        F = function (e) {
          return (0, e.render)({ fetchStatus: w.a.LOADING, data: null, error: null, retry: C.a })
        },
        D = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(r))), g()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof b.a)) throw e
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
        })(v.a.Component),
        A = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = O()(t, n)
          return a({ fetchStatus: w.a.LOADED, data: r, error: null, retry: C.a })
        },
        M = function (e, t) {
          if (S.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                o = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                c = n.variables,
                s = L()(e),
                l = r()(s, 2),
                u = l[0],
                d = l[1],
                h = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = x()(c),
                m = r()(p, 1)[0],
                f = v.a.useCallback(
                  function () {
                    d(m, { fetchPolicy: 'network-only' })
                  },
                  [d, m],
                )
              return (
                v.a.useLayoutEffect(
                  function () {
                    d(m, { fetchPolicy: o })
                  },
                  [o, d, m],
                ),
                u
                  ? v.a.createElement(
                      v.a.Suspense,
                      { fallback: v.a.createElement(F, { render: i }) },
                      v.a.createElement(
                        D,
                        { errorHandler: h(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: w.a.FAILED, error: t, data: null, retry: n })
                            : v.a.createElement(A, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var o = a.render,
              i = a.variables,
              c = P()(),
              s = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = x()(i),
              u = r()(l, 1)[0],
              d = n.get(c)
            if (d) return d
            var h = v.a.lazy(function () {
              return E()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: w.a.LOADED, data: e, error: null, retry: C.a })
                  },
                  function (e) {
                    return e instanceof b.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: w.a.FAILED, data: null, error: e, retry: C.a }))
                      : v.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return v.a.createElement(v.a.Suspense, null, v.a.createElement(h, null))
          }
        }
    },
    nmVb: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var r = a(n('yyPN'))
      e.exports = t.default
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'g', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return m
        }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return y
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
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
        var n,
          a = s.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? i()(i()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(s.b.WordEnd),
          o = r >= 0 ? n.slice(r) : '',
          i = a.search(s.b.WordBoundary),
          c = o + a.slice(0, i)
        return c.trim() ? { start: r, end: e + i, word: c } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function p(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function m(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(o))
      }
      var f = Object(c.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        y = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
      })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        m = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('2G9S'), n('KqXw'), n('LJOr'), n('ERkP')),
        v = n.n(y),
        b = n('sTyV'),
        S = n('6/RC'),
        _ = n('sebV'),
        E = n('G6rE'),
        w = n('rxPX'),
        C = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: E.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        k = n('3XMw'),
        I = n.n(k),
        x = n('OrGc'),
        T = n('QK5w'),
        O = n('aITJ'),
        R = n('MWbm'),
        L = n('TnY3'),
        B = n('rHpw'),
        P = n('t62R'),
        F = n('v6aA'),
        D = n('uScj'),
        A = n('fs1G'),
        M = n('BcsE'),
        U = n('VPAj'),
        j = I.a.b47e760d,
        q = I.a.fd2c7b43,
        H = new D.a(),
        z = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        N = function (e) {
          return S.canUseDOM ? H.subscribe(e).unsubscribe : A.a
        },
        V = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  a = e.props,
                  o = a.history,
                  i = a.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        H.getListeners().length
                          ? H.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    g()(t, x.e.search, c()),
                    g()(t, x.e.goToUser, c('@')),
                    g()(t, x.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    g()(t, x.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    g()(t, x.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  l = function (e) {
                    var t
                    return (
                      (t = {}),
                      g()(t, x.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      g()(t, x.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      g()(t, x.e.goLists, function () {
                        return o.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  d =
                    i && u
                      ? r()(
                          r()({}, l(i)),
                          {},
                          g()({}, x.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : i
                      ? l(i)
                      : {},
                  h = r()(
                    r()(r()({}, s), d),
                    {},
                    ((n = {}),
                    g()(n, x.e.goHome, function () {
                      return o.push('/home')
                    }),
                    g()(n, x.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    g()(n, x.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    g()(n, x.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    g()(n, x.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    g()(n, x.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    g()(n, x.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    g()(n, x.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    g()(n, x.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? h : s
                e._unbindKeyboardShortcuts = Object(b.a)(p)
              }),
              g()(u()(e), '_handleKeyDown', function (t) {
                z(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              g()(u()(e), '_handleKeyUp', function (t) {
                if (!z(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    a = !!Object(M.a)(n) && Date.now() - n < 500,
                    r = Object(T.a)({}, { location: e.props.location })
                  a && r ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    O.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    O.b.isKaiOS() &&
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
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: B.a.visuallyHidden },
                        v.a.createElement(P.b, null, j),
                        v.a.createElement(P.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, q),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(V, 'contextType', F.a)
      var W = C(V),
        K = S.canUseDOM ? Object(L.a)(W) : Object(U.a)(null)
      t.a = K
    },
    sYRn: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('eb3s'),
        i = n('3XMw'),
        c = n.n(i),
        s = n('4ZbN'),
        l = c.a.hffea05c,
        u = c.a.j037e373,
        d = c.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          n = e.onConfirm
        return r.a.createElement(o.a, {
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
        return E
      }),
        n.d(t, 'c', function () {
          return w
        }),
        n.d(t, 'a', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return k
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        c = n('yiKp'),
        s = n.n(c),
        l = n('T0aG'),
        u = n.n(l),
        d = (n('yH/f'), n('2G9S'), n('LW0h'), n('7x/C'), n('JtPf'), n('oEOe')),
        h = n('kGix'),
        p = n('Ssj5'),
        m = n('SrIh'),
        f = n('RqPI'),
        g = 'savedSearches',
        y = { fetchStatus: h.a.NONE, savedSearches: [] },
        v = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        b = Object.freeze({
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
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case v.SUCCESS:
            var n = t.payload,
              a = Array.isArray(n)
            return (
              a ||
                Object(m.a)('Saved search results are not type array', { extra: { savedSearchResultsType: u()(n) } }),
              s()(s()({}, e), {}, { fetchStatus: h.a.LOADED, savedSearches: a && n ? n : [] })
            )
          case v.FAILURE:
            return s()(s()({}, e), {}, { fetchStatus: h.a.FAILED })
          case b.SUCCESS:
            return s()(
              s()({}, e),
              {},
              { savedSearches: t.payload ? [].concat(i()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case S.SUCCESS:
            return t.payload
              ? s()(
                  s()({}, e),
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
      p.a.register(r()({}, g, _))
      var E = function (e) {
          return e.savedSearches.savedSearches
        },
        w = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(d.b)(t, { request: r.SavedSearches.create, params: { query: e } })({
              actionTypes: b,
              context: 'SAVE_SEARCH',
            })
          }
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(d.b)(t, { request: r.SavedSearches.destroy, params: { id: e } })({
              actionTypes: S,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        k = function () {
          return function (e, t, n) {
            n.api
            var a = t()
            return Object(f.m)(a)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(a) === h.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, n) {
                    var a = n.api
                    return Object(d.b)(e, { request: a.SavedSearches.fetch, params: {} })({
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
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
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
      var a,
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: (a = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 23 }],
                concreteType: 'LoggedOutTrendsList',
                kind: 'LinkedField',
                name: 'logged_out_trends_list',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'trends', storageKey: null }],
                storageKey: 'logged_out_trends_list(s:23)',
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
            selections: a,
          },
          params: {
            id: 'jFSVxO6XekDkqa9LhEqxug',
            metadata: {},
            name: 'LoggedOutSearchHomeTrendsListQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = 'd776a0f7400b83db0b925f0352d2b751'), (t.default = r)
    },
    zgaL: function (e, t, n) {
      'use strict'
      var a = n('ezF+'),
        r =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(224).then(n.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = a.e(r)
    },
  },
])
//# sourceMappingURL=WIPED
