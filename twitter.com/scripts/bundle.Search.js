;(window.webpackJsonp = window.webpackJsonp || []).push([
  [86, 63],
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
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('vfdX'), n('z84I'), n('hBvt'), n('ERkP')),
        y = n.n(b),
        v = n('HPNB'),
        S = n('es0u'),
        E = (n('KqXw'), n('WNMA'), n('vrRf'), n('zh9S')),
        w = n('1YZw'),
        _ = n('hqKg'),
        k = n('3IPs'),
        C = n('rxPX'),
        x = n('0KEI'),
        B = n('v4XE'),
        I = n('Hw0q'),
        T = function (e, t) {
          var n = t.location
          return n.query && n.query.src && 'string' == typeof n.query.src ? n.query.src : ''
        },
        L = function (e, t) {
          var n = t.location,
            a = t.match.params
          return a && a.unsafeHashtagQuery && 'string' == typeof a.unsafeHashtagQuery
            ? '#'.concat(a.unsafeHashtagQuery)
            : (n && n.query && n.query.q && Object(I.a)(n.query.q)) || ''
        },
        O = function (e, t) {
          return 0 === t.location.pathname.indexOf('/search') ? 'search' : 'hashtag'
        },
        P = function (e, t) {
          return !!(t.location.state || {}).searchFocused
        },
        F = Object(_.createSelector)(Object(I.b)('pf'), Object(I.b)('lf'), function (e, t) {
          return { peopleFilter: e, locationFilter: t }
        }),
        z = Object(C.a)()
          .propsFromState(function () {
            return {
              searchFocused: P,
              query: L,
              querySrc: T,
              isQueryAlreadySaved: Object(_.createSelector)(L, B.d, function (e, t) {
                return (
                  t
                    .map(function (e) {
                      return e.query
                    })
                    .indexOf(e) > -1
                )
              }),
              searchType: O,
              searchFilters: F,
              mode: k.k,
              savedSearches: B.d,
              vertical: Object(I.b)('vertical'),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: w.b,
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('SEARCH_SCREEN'),
              deleteSavedSearch: B.a,
              fetchSavedSearchesIfNeeded: B.b,
              saveSearch: B.c,
              scribeAction: E.scribeAction,
            }
          })
          .withAnalytics({ page: 'search' }),
        R = n('sYRn'),
        M = n('3XMw'),
        H = n.n(M),
        D = n('oQhu'),
        j = n('2G3J'),
        A = n('yoO3'),
        q = n('7nmT'),
        W = n.n(q),
        V = n('5FtR'),
        N = n('Rp9C'),
        U = n('7JQg'),
        G = n('L7to'),
        K = n('3rEN'),
        Q = (n('muX9'), H.a.a8399d5b, H.a.ge893905, n('mjJ+')),
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
        ie = H.a.h1ef00db,
        ce = H.a.aea62567,
        se = H.a.j622effd,
        le = H.a.h4912b5e,
        ue = H.a.b9bc69ca,
        de = (function (e) {
          p()(n, e)
          var t = h()(n)
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
                  return y.a.createElement(Q.a, { items: this._getActionItems(), onCloseRequested: this.props.onClose })
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        pe = n('VS6U'),
        me = n('LsPn'),
        he = 'searchBoxOverflowButton',
        fe = n('aITJ'),
        ge = n('MWbm'),
        be = n('v6aA'),
        ye = H.a.f9d35b98,
        ve = H.a.ha925ad3,
        Se = H.a.h0a9931b,
        Ee = {
          customErrorHandler: function () {
            return Object(w.b)({ text: ve })
          },
          showToast: !0,
        },
        we = {
          customErrorHandler: function () {
            return Object(w.b)({ text: ye })
          },
          showToast: !0,
        },
        _e = {
          customErrorHandler: function () {
            return Object(w.b)({ text: Se })
          },
          showToast: !0,
        },
        ke = n('cHvH'),
        Ce = n('6vad'),
        xe = n('k/OQ'),
        Be = n('8Lfv'),
        Ie = function (e, t) {
          return 'POP' === t.history.action
        },
        Te = function (e, t) {
          var n,
            a = t.location
          return null == a || null === (n = a.state) || void 0 === n ? void 0 : n.urtEndpointOptions
        },
        Le = Object(C.a)()
          .propsFromState(function () {
            return { dataLookupId: k.j, isBackNavigation: Ie, searchMode: k.k, urtEndpointOptions: Te }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: function (e) {
                var t = e.fetchOptions,
                  n = e.module
                return Object(Be.a)(n, t)
              },
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
                'SEARCH_RESULTS_SCREEN',
              ),
            }
          }),
        Oe = n('s14A'),
        Pe = n('dwig'),
        Fe = n('3X8/'),
        ze = n('0+qk'),
        Re = n('Ds5i'),
        Me = n.n(Re),
        He = n('h2mu'),
        De = n('i6OR'),
        je = n('pQ3Z'),
        Ae = n.n(je),
        qe = function (e) {
          return e && Me()(e) ? { defaultText: ' '.concat(e), positionCursorAtBeginning: !0 } : void 0
        },
        We = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_getFabState', function () {
                var t = e.props.query
                return e._getMemoizedComposeLocationState(t)
              }),
              g()(u()(e), '_getMemoizedComposeLocationState', Object(D.a)(qe)),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.isBackNavigation || this._clearTimelineCache()
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
                    (!i && e.query === a && e.querySrc === r && Ae()(e.searchFilters, o)) ||
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
                  return y.a.createElement(
                    Pe.a,
                    { component: Oe.a, fab: this._renderFloatingComposeButton(), shouldRenderFab: !r },
                    y.a.createElement(He.a, {
                      fetchOptions: this._getFetchOptions(),
                      query: t,
                      querySrc: n,
                      searchFilters: a,
                      searchMode: o,
                      urtEndpointOptions: i,
                      vertical: c,
                      withUserPresence: u,
                    }),
                  )
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return y.a.createElement(ze.a, { getLocationState: this._getFabState, history: e })
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
                    module: Object(De.b)({
                      query: a,
                      querySource: r,
                      searchMode: i,
                      searchFilters: o,
                      urtEndpointOptions: c,
                    }),
                    fetchOptions: this._getFetchOptions(),
                  }).catch(n(Fe.a))
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(We, 'contextType', be.a)
      var Ve = Le(We),
        Ne = H.a.eb0ecd1d,
        Ue = H.a.cceeb26b,
        Ge = H.a.i66136a9,
        Ke = H.a.d601fc2f,
        Qe = H.a.g2fd3205,
        Xe = H.a.ac4fb0f3,
        Ye = H.a.a9ae1e78,
        Je = H.a.bb967f9e,
        Ze = H.a.aea62567,
        $e = H.a.gfcfbf8b,
        et = H.a.a4645d91,
        tt = [
          { type: k.c.Top, label: Ge },
          { type: k.c.Live, label: Ke },
          { type: k.c.User, label: Qe },
          { type: k.c.Image, label: Xe },
          { type: k.c.Video, label: Je },
        ],
        nt = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), '_loggedInUserId', e.context.loggedInUserId),
              g()(u()(e), 'state', { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
              g()(
                u()(e),
                '_getScribeData',
                Object(D.a)(function (e, t, n, a, o) {
                  var i = Object(k.f)({ query: e, querySrc: t, searchFilters: n, modeValue: a, vertical: o })
                  return { search_details: r()({}, i) }
                }),
              ),
              g()(u()(e), '_renderRightControl', function (t) {
                var n = t.isTwoColumn,
                  a = t.searchFocused
                return n || !a
                  ? y.a.createElement(j.a, {
                      onClick: e._handleOverflowMenuClick,
                      renderMenu: e._renderMenu,
                      testID: he,
                    })
                  : void 0
              }),
              g()(u()(e), '_renderMenu', function (t) {
                var n = e.props,
                  a = n.history,
                  r = n.isQueryAlreadySaved,
                  o = n.location,
                  i = !!e.context.loggedInUserId
                return y.a.createElement(ke.a, null, function (n) {
                  var c = n.windowWidth,
                    s = v.a.isTwoColumnLayout(c)
                  return y.a.createElement(de, {
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
                    .catch(r(c < 25 ? Ee : we))
                var s = N.a.forSavedSearchResult(o, c)
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
                    .catch(r(_e))
                  var u = N.a.forSavedSearchResult(l.query, s)
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
                return y.a.createElement(
                  ge.a,
                  null,
                  y.a.createElement(Ve, t),
                  n
                    ? y.a.createElement(R.a, {
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
                return y.a.createElement(
                  S.a,
                  { withSearchBox: !1, withTrends: !!r },
                  y.a.createElement(
                    ge.a,
                    null,
                    y.a.createElement(Ce.b, { text: Ze }),
                    y.a.createElement(G.b, { history: n, key: a.key, location: a }),
                  ),
                )
              }),
              g()(u()(e), '_renderModesBar', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  r = t.querySrc,
                  o = t.searchFilters,
                  i = e._getModeLinks().map(function (t) {
                    var i = t.isActive,
                      c = t.label,
                      s = t.link,
                      l = t.modeType
                    return {
                      isActive: i,
                      key: l,
                      to: s,
                      label: c,
                      onClick: function () {
                        i() ||
                          n.scribe({
                            element: 'search_filter_'.concat(l),
                            action: 'navigate',
                            data: e._getScribeData(a, r, o),
                          })
                      },
                    }
                  })
                return y.a.createElement(xe.a, { links: i })
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
                    return k.i[t] === e
                  }
                })
              }),
              g()(
                u()(e),
                '_getMemoizedModeLinks',
                Object(D.a)(function (e, t, n, a, r, o, i) {
                  return tt.map(function (c) {
                    var s = k.i[c.type]
                    return {
                      link: Object(k.e)({
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
              g()(
                u()(e),
                '_getMemoizedTimelineScribeNamespace',
                Object(D.a)(function (e, t) {
                  var n = t === k.d.Topics ? '_topics' : ''
                  return { section: 'search_filter_'.concat(e).concat(n) }
                }),
              ),
              g()(u()(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              g()(u()(e), '_handleSoftLeftClick', function () {
                var t = W.a.findDOMNode(e._searchBoxRef)
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
                    p = d ? Ue({ query: o }) : Ne,
                    m = {
                      history: n,
                      location: a,
                      query: o,
                      querySrc: i,
                      searchFilters: c,
                      searchFocused: s,
                      vertical: l,
                      shouldClearTimelineCache: u,
                    },
                    h = this._renderPrimaryContent(m),
                    f = { initialValue: o, mode: r, onSubmit: this._handleSearchBoxSubmit, searchFilters: c }
                  return d
                    ? y.a.createElement(
                        U.c,
                        {
                          data: this._getScribeData(o, i, c, r, l),
                          namespace: this._getMemoizedTimelineScribeNamespace(r, l),
                        },
                        y.a.createElement(
                          A.a,
                          null,
                          null,
                          y.a.createElement(ke.a, null, function (t) {
                            var a = t.windowWidth,
                              r = v.a.isTwoColumnLayout(a),
                              i = e._renderRightControl({ isTwoColumn: r, searchFocused: s })
                            return y.a.createElement(pe.a, {
                              backLocation: '/explore',
                              composeOptions: qe(o),
                              documentTitle: p,
                              history: n,
                              primaryContent: h,
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
                            y.a.createElement(me.a, { leftText: Ye, onLeftClick: this._handleSoftLeftClick }),
                        ),
                      )
                    : this._shouldShowLoggedOutSearchHome()
                    ? y.a.createElement(V.a, { to: '/' })
                    : y.a.createElement(V.a, { to: '/explore' })
                },
              },
              {
                key: '_shouldShowLoggedOutSearchHome',
                value: function () {
                  if (!this._loggedInUserId) {
                    var e = this.context.featureSwitches.getStringValue(
                      'responsive_web_search_home_page_design_variation',
                    )
                    return K.a[e]
                  }
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(nt, 'contextType', be.a)
      var at = z(nt)
      t.default = at
    },
    '35hZ': function (e, t, n) {
      'use strict'
      var a = n('EORa').useTrackLoadQueryInRender,
        r = n('h2Du'),
        o = n('6zvL'),
        i = n('PJTX'),
        c = n('I9iR'),
        s = (n('ERkP').useDebugValue, n('e1/f').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      n('/2Cm')
      e.exports = function (e, t, n) {
        a()
        var s,
          d = i(),
          p = t.fetchKey,
          m = t.fetchPolicy,
          h = t.source,
          f = t.variables,
          g = t.networkCacheConfig,
          b = o(e, f, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && c(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: l(d, b.request.identifier, function () {
                return d === t.environment && null != h
                  ? d.executeWithSource({ operation: b, source: h })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: m,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var y = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != h && d === t.environment ? h.ifEmpty(y) : (t.environment, y),
            fetchKey: p,
            fetchPolicy: m,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
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
        p = n('rHpw'),
        m = n('MWbm'),
        h = n('yiKp'),
        f = n.n(h),
        g = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        b = n('iCMz'),
        y = n('Rp9C'),
        v = n('72nz'),
        S = n('Irs7'),
        E = n('htQn'),
        w = n('t62R'),
        _ = l.a.d228a9a0,
        k = l.a.jae84f3a,
        C = { section: 'logged_out_search', component: 'trend' },
        x = function (e) {
          var t = e.position,
            n = e.trend,
            a = Object(S.b)(),
            r = o.a.useMemo(
              function () {
                return [f()(f()({}, y.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          o.a.useEffect(
            function () {
              a.scribe(f()(f()({}, C), {}, { action: 'impression', data: { items: r } }))
            },
            [a, r],
          )
          var i = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return o.a.createElement(
            E.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return a.scribe(f()(f()({}, C), {}, { action: 'click', data: { items: r } }))
              },
              withInteractiveStyling: !1,
            },
            o.a.createElement(w.b, { color: 'gray700', key: n, link: i, size: 'body', style: T.searchTrend }, n),
          )
        },
        B = function (e) {
          var t = e.alignment,
            n = (e.deviceSize, e.trendResults.slice(0, 5))
          return o.a.createElement(
            m.a,
            {
              accessibilityLabel: k,
              accessibilityRole: 'list',
              style: [T.searchTrends, 'left' === t && T.searchTrendsLeft],
            },
            n.map(function (e, t) {
              return o.a.createElement(x, { key: e, position: t, trend: e })
            }),
            o.a.createElement(
              E.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              o.a.createElement(w.b, { link: '/explore', style: T.searchTrend }, _),
            ),
          )
        },
        I = function (e) {
          var t = e.alignment,
            n = e.deviceSize,
            a = e.trendResults,
            r = 'tablet' !== n && 'desktop' !== n
          return o.a.createElement(
            m.a,
            {
              style: [
                T.searchBoxTrendsContainer,
                r && T.searchBoxTrendsContainerMobile,
                'tablet' === n && T.searchBoxTrendsContainerTablet,
                'desktop' === n && T.searchBoxTrendsContainerDesktop,
              ],
            },
            o.a.createElement(
              m.a,
              { style: T.searchBox },
              o.a.createElement(v.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
            ),
            a && o.a.createElement(B, { alignment: t, deviceSize: n, trendResults: a }),
          )
        },
        T = p.a.create(function (e) {
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
        L = function (e) {
          var t = e.deviceSize,
            n = e.trendResults,
            a = function () {
              return o.a.createElement(b.a, {
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
              ? o.a.createElement(i.a, { style: T.bottomBarForMobile }, a())
              : o.a.createElement(
                  m.a,
                  { style: T.searchNavBar },
                  o.a.createElement(m.a, { style: T.searchNavButtons }, a()),
                ),
            o.a.createElement(
              m.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(I, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                m.a,
                { style: [T.searchHomeFooter, 'desktop' !== t && T.searchHomeFooterMobile] },
                o.a.createElement(g.a, { align: 'center' }),
              ),
            ),
          )
        },
        O = l.a.g0ff1ca8,
        P = l.a.g3aa4a89,
        F = p.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: p.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        z = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              m.a,
              { style: [T.searchRoot, 'desktop' !== t && T.searchRootMobile, F.searchRootWithBanner] },
              o.a.createElement(u.a, { style: T.twitterIconSearch }),
              o.a.createElement(I, { deviceSize: t, trendResults: n }),
            ),
            o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                i.a,
                { style: F.bottomBarBanner },
                o.a.createElement(d.a, { buttonSize: 'large', fullWidth: !0, subtext: P, text: O }),
              ),
            ),
          )
        },
        R = n('n0Rl'),
        M = n('RgK2'),
        H = n.n(M),
        D = n('kGix'),
        j = (n('YWiL'), n('ddV6')),
        A = n.n(j),
        q = (n('0zG9'), n('UpKB')),
        W = n('v6aA'),
        V = n('5P4+'),
        N = n('kG2l'),
        U = n('JkIr'),
        G = n('0yYu'),
        K = n('/yvb'),
        Q = n('AS3p'),
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
            r = o.a.useContext(W.a).featureSwitches,
            i = Object(Q.c)(r) === Q.a.AcceptAllCookies,
            c = o.a.useState(i),
            s = A()(c, 2),
            l = s[0],
            u = s[1],
            d = 'tablet' !== a && 'desktop' !== a
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(N.a, {
              buttonSize: 'medium',
              buttonState: t,
              customWidth: d ? 300 : ee,
              isCookieCompliant: n ? l : void 0,
              onPress: function () {
                u(!0)
              },
              style: [ne.ctaButton, ne.ssoButtonStyles, d && ne.containerThin],
            }),
            o.a.createElement(q.a, {
              buttonSize: 'medium',
              buttonState: t,
              style: [ne.ctaButton, ne.ssoButtonStyles, { marginBottom: 0 }, d && ne.containerThin],
            }),
          )
        },
        ne = p.a.create(function (e) {
          return {
            containerThin: { width: 300 },
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
            footerContainer: { width: ee },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(V.a, 'px'), width: ee },
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
            i = A()(r, 2),
            s = i[0],
            d = i[1],
            p = Object(S.b)(),
            h = 'tablet' !== n && 'desktop' !== n,
            f = function () {
              p.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'signup' })
            },
            b = function () {
              p.scribe({ section: 'front', component: 'signup_callout', element: 'form', action: 'login' })
            },
            y =
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
                    return { loginSignUpButtonLabel: Z, loginSignUpButtonLink: '/login', handleLoginSignUpButton: b }
                  default:
                    return
                }
              })() || {},
            v = y.handleLoginSignUpButton,
            E = y.loginSignUpButtonLabel,
            _ = y.loginSignUpButtonLink,
            k = o.a.createElement(
              m.a,
              { style: [ne.footerContainer, h && ne.containerThin] },
              o.a.createElement(w.b, { color: 'gray700', size: 'subtext2', style: ne.ctaText }, X.c),
              o.a.createElement(
                w.b,
                { align: 'left', style: !n && ne.ctaText, testID: U.a.logInSignUpFooter, weight: 'medium' },
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
                          o.a.createElement(w.b, { color: 'link', onPress: e }, l.a.fb9dd9b0),
                        )
                      )
                    case X.a.LogIn:
                      return (function (e) {
                        var t = e.onPress
                        return o.a.createElement(
                          l.a.I18NFormatMessage,
                          { $i18n: 'i89d7b70' },
                          o.a.createElement(w.b, { color: 'link', onPress: t }, l.a.ie4dd8d6),
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
            C = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(te, { buttonState: s, cookieComplianceFS: t, deviceSize: n }),
              o.a.createElement(
                m.a,
                { style: [ne.gapContainer, h && ne.containerThin] },
                o.a.createElement(G.a, {
                  borderColor: 'nestedBorderColor',
                  label: o.a.createElement(w.b, { children: Y }),
                }),
              ),
              o.a.createElement(
                K.a,
                {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  color: 'alwaysBaseGray1100',
                  link: _,
                  onPress: v,
                  size: 'medium',
                  style: [ne.ctaButton, ne.ssoButtonStyles, h && ne.containerThin],
                  testID: U.a.signupButton,
                },
                E,
              ),
            ),
            x = o.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              o.a.createElement(
                m.a,
                { style: [T.searchHomeFooter, { marginBottom: '0' }] },
                o.a.createElement(g.a, { align: 'center' }),
              ),
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              m.a,
              { style: [ne.splitContainer, 'desktop' === n && ne.splitContainerWide] },
              o.a.createElement(
                m.a,
                {
                  style: [
                    ne.splitItem,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                    { zIndex: '1' },
                  ],
                },
                o.a.createElement(
                  m.a,
                  {
                    style: [
                      h && ne.headerMobile,
                      'tablet' === n && ne.headerTablet,
                      'desktop' === n && ne.headerDesktop,
                    ],
                  },
                  o.a.createElement(u.a, { style: [T.twitterIconSearch, ne.twitterIconSearchLeft] }),
                  o.a.createElement(
                    w.b,
                    {
                      extendedWidth: !0,
                      style: 'desktop' === n ? ne.ctaTitleLarge : 'tablet' === n ? ne.ctaTitleMedium : ne.ctaTitle,
                      weight: 'bold',
                    },
                    $,
                  ),
                ),
                o.a.createElement(I, { alignment: 'left', deviceSize: n, trendResults: a }),
              ),
              o.a.createElement(
                m.a,
                {
                  style: [
                    ne.splitItem,
                    ne.splitItemGray,
                    'desktop' !== n && ne.splitItemMobile,
                    'tablet' === n && ne.splitItemTablet,
                  ],
                },
                C,
                k,
              ),
            ),
            x,
          )
        },
        re = Object.freeze({ original: 'original', banner: 'banner', split: 'split' }),
        oe = void 0 !== a ? a : (a = n('x1T0')),
        ie = Object(R.b)(oe, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
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
                c === D.a.LOADED
                  ? null == i || null === (r = i.logged_out_trends_list) || void 0 === r
                    ? void 0
                    : r.trends
                  : void 0)
            return a === re.original
              ? o.a.createElement(L, { deviceSize: n, trendResults: s })
              : a === re.banner
              ? o.a.createElement(z, { deviceSize: n, trendResults: s })
              : a === re.split
              ? o.a.createElement(ae, { cookieComplianceFS: t, deviceSize: n, trendResults: s })
              : null
          },
          variables: H.a,
        })
      }
    },
    '5P4+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'e', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return m
        })
      n('3voH')
      var a = n('0+0m'),
        r = 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png',
        o = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        i = 380,
        c = 2 * i,
        s = 1.15 * i,
        l = 500,
        u = 1e3,
        d = 350,
        p = function (e, t) {
          return {
            deviceSize: e > u ? 'desktop' : e > l ? 'tablet' : void 0,
            showLoginForm: e / 2 > 500 && t >= 750,
            ssoButtonsWidth: e < d ? a.f : a.b,
          }
        },
        m = function (e) {
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
              { uri: t ? r : o, width: 1302, height: 955 },
            ],
            original: { url: t ? r : o, width: 1302, height: 958 },
          }
        }
    },
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('yH/f')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('t62R'),
        i = n('EHV7'),
        c = n('rHpw'),
        s = c.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        l = n('7Mjr'),
        u = n('I4+6'),
        d = n('cm6r'),
        p = n('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var h = c.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          a = e.nativeID,
          f = e.rightControl,
          g = e.style,
          b = e.subtext,
          y = e.testID,
          v = e.text,
          S = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(i.a, { style: s.icon })
              default:
                return null
            }
          })(t),
          E = b ? null : h.withSubtext,
          w = u.a.generate({
            backgroundColor: c.a.theme.colors.gray0,
            color: c.a.theme.colors.cellBackground,
            customFocusBackgroundColor: c.a.theme.colors.gray0,
            customHoverBackgroundColor: c.a.theme.colors.gray0,
            customPressedBackgroundColor: c.a.theme.colors.gray0,
          })
        return r.a.createElement(
          d.a,
          {
            interactiveStyles: n ? w : null,
            link: null == n ? void 0 : n.url,
            nativeID: a,
            style: [h.root, g],
            testID: y,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            r.a.createElement(p.a, { style: h.icon }, S),
            r.a.createElement(
              o.b,
              { numberOfLines: 3, size: 'headline1', style: E, weight: 'heavy', withHashflags: !0 },
              v,
            ),
            r.a.createElement(
              p.a,
              { style: h.rightControlGroup },
              n ? r.a.createElement(p.a, { style: E }, r.a.createElement(l.a, { style: h.iconArrow })) : null,
              f ? r.a.createElement(p.a, null, f) : null,
            ),
          ),
          b
            ? r.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                b,
              )
            : null,
        )
      }
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
          return p
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
      function p(e) {
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
      function p() {
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
          t = p()
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
        d = n('Irs7'),
        p = n('aITJ'),
        m = n('MWbm'),
        h = n('t62R'),
        f = n('cHvH'),
        g = n('rHpw'),
        b = n('/yvb'),
        y = n('3XMw'),
        v = n.n(y),
        S = v.a.d8817e36,
        E = v.a.b9288ee6,
        w = v.a.i1390ec2,
        _ = { page: 'cookie_compliance_banner' }
      function k() {
        var e = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          r.a.createElement(
            h.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            v.a.id7ef73f,
          ),
        )
        return r.a.createElement(x, { body: e, title: w })
      }
      function C(e) {
        var t = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          r.a.createElement(
            h.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            v.a.gfb2ba0f,
          ),
        )
        return r.a.createElement(x, { body: t, title: w })
      }
      function x(e) {
        return r.a.createElement(
          m.a,
          { style: I.cookieComplianceMessageWrap },
          r.a.createElement(h.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.a.createElement(
            h.b,
            { color: 'buttonWhite', size: 'subtext2', style: I.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var B = r.a.forwardRef(function (e, t) {
          var n = Object(d.b)()
          r.a.useEffect(
            function () {
              n.scribe(c()(c()({}, _), {}, { action: 'impression' }))
            },
            [n],
          )
          var a = (function () {
              var e = r.a.useState(!1),
                t = l()(e, 2),
                n = t[0],
                a = t[1],
                o = Object(d.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(c()(c()({}, _), {}, { action: 'click', element: 'expand_message' })), a(!0)
                },
              }
            })(),
            i = a.expand,
            s = a.isExpanded,
            h = (function () {
              var e = Object(d.b)(),
                t = r.a.useContext(o.a).featureSwitches,
                n = r.a.useState(function () {
                  return u.e(t) && !p.b.getTwitterAppVersion()
                }),
                a = l()(n, 2),
                i = a[0],
                s = a[1]
              return {
                isBannerOpen: i,
                acceptAllCookies: function () {
                  e.scribe(c()(c()({}, _), {}, { action: 'click', element: 'accept_all' })), u.b(t), s(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(c()(c()({}, _), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), s(!1)
                },
              }
            })(),
            y = h.acceptAllCookies,
            v = h.isBannerOpen,
            w = h.refuseNonEssentialCookies
          return v
            ? r.a.createElement(f.a, null, function (e) {
                var n = e.windowWidth < g.a.theme.breakpoints.xLarge
                return r.a.createElement(
                  m.a,
                  { ref: t, style: [I.root, n && I.rootNarrow] },
                  s ? r.a.createElement(k, null) : r.a.createElement(C, { onExpand: i }),
                  r.a.createElement(
                    m.a,
                    { style: [I.buttonContainer, n && I.buttonContainerNarrow] },
                    r.a.createElement(
                      b.a,
                      {
                        dominantColor: 'alwaysBaseGray1100',
                        onPress: y,
                        size: 'medium',
                        style: [I.ctaButton, n && I.ctaButtonNarrow],
                        type: g.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      S,
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        dominantColor: 'alwaysBaseGray1100',
                        onPress: w,
                        size: 'medium',
                        style: [I.ctaButton, n && I.ctaButtonNarrow],
                        type: g.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      E,
                    ),
                  ),
                )
              })
            : null
        }),
        I = g.a.create(function (e) {
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
        T = n('97Jx'),
        L = n.n(T),
        O = n('VrFO'),
        P = n.n(O),
        F = n('Y9Ll'),
        z = n.n(F),
        R = n('1Pcy'),
        M = n.n(R),
        H = n('5Yy7'),
        D = n.n(H),
        j = n('2VqO'),
        A = n.n(j),
        q = n('KEM+'),
        W = n.n(q),
        V = (n('hBvt'), n('RqPI')),
        N = n('rxPX'),
        U = Object(N.a)().propsFromState(function () {
          return { currentCountry: V.z }
        }),
        G = n('cnVF'),
        K = n('mrHL'),
        Q =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          }),
        X = v.a.ia5e7487,
        Y = (function (e) {
          D()(n, e)
          var t = A()(n)
          function n(e, a) {
            var o
            P()(this, n),
              (o = t.call(this, e, a)),
              W()(M()(o), 'state', { euWarningIsOpen: !1 }),
              W()(M()(o), '_renderMessage', function () {
                return r.a.createElement(
                  h.b,
                  { color: 'white', size: 'subtext2' },
                  r.a.createElement(
                    v.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    r.a.createElement(
                      h.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: J.link,
                      },
                      v.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              W()(M()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(K.e)(G.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var i = o.props.currentCountry,
              c = o.context.featureSwitches,
              s = c.getArrayValue('responsive_web_eu_countries', []),
              l = Object(K.d)({ featureSwitches: c, cookieName: G.k })
            return (o.state = { euWarningIsOpen: !!i && Q(s, i, l) }), o
          }
          return (
            z()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.a.createElement(f.a, null, function (t) {
                        var n = t.windowWidth < g.a.theme.breakpoints.medium
                        return r.a.createElement(
                          m.a,
                          { ref: e.props.innerRef, style: [J.root, n && J.rootNarrow] },
                          e._renderMessage(),
                          r.a.createElement(
                            b.a,
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
      W()(Y, 'contextType', o.a)
      var J = g.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              backgroundColor: e.colors.alwaysBaseGray1100,
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
          return r.a.createElement(Y, L()({}, e, { innerRef: t }))
        }),
        $ = U.forwardRef(Z),
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
          ? r.a.createElement(B, { ref: a })
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
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('z84I'), n('ho0z'), n('KqXw'), n('MvUL'), n('jQ3i'), n('x4t0'), n('vrRf'), n('uFXj'), n('ERkP')),
        y = n.n(b),
        v = n('3XMw'),
        S = n.n(v),
        E = n('RxYA'),
        w = (n('yH/f'), Object.freeze({ People: 'People', Location: 'Location' })),
        _ = 'searchFiltersAdvancedSearch',
        k = n('MWbm'),
        C = n('Irs7'),
        x = n('v6aA'),
        B = n('fyvP'),
        I = n('rC8y'),
        T = n('rHpw'),
        L = n('3A2y'),
        O = n('Zkey'),
        P = S.a.j622effd,
        F = S.a.g2fd3205,
        z = S.a.defb4aa9,
        R = S.a.af293dc2,
        M = S.a.jaaa8984,
        H = S.a.i5045e73,
        D = S.a.h2388753,
        j = 'anyone',
        A = 'youFollow',
        q = 'anywhere',
        W = 'nearYou',
        V = [
          {
            label: F,
            name: w.People,
            options: [
              { label: z, value: j },
              { label: R, value: A },
            ],
          },
          {
            label: M,
            name: w.Location,
            options: [
              { label: H, value: q },
              { label: D, value: W },
            ],
          },
        ],
        N = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var o
            i()(this, n),
              (o = t.call(this, e, a)),
              g()(u()(o), '_renderFilters', function () {
                return V.map(function (e, t) {
                  return y.a.createElement(
                    k.a,
                    { key: e.name, style: t > 0 && U.paddingTop },
                    y.a.createElement(B.a, {
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
                  case w.People:
                    return o.state.peopleFilter
                  case w.Location:
                    return o.state.locationFilter
                  default:
                    return ''
                }
              }),
              g()(u()(o), '_handleFilterChange', function (e, t) {
                var n = o.context.loggedInUserId,
                  a = o.props.location.query
                switch (e) {
                  case w.People:
                    if (n) {
                      o.setState({ peopleFilter: t })
                      var r = { pf: t === A ? 'on' : void 0, lf: 'on' === a.lf ? a.lf : void 0 }
                      o._executeSearch(r, 'people')
                    } else o.setState({ shouldShowLoginSheet: !0 })
                    break
                  case w.Location:
                    o.setState({ locationFilter: t })
                    var i = { lf: t === W ? 'on' : void 0, pf: 'on' === a.pf ? a.pf : void 0 }
                    o._executeSearch(i, 'location')
                }
              }),
              g()(u()(o), '_getAdvancedSearchLink', function () {
                var e = o.props.location
                return { pathname: '/search-advanced', query: r()({}, Object(L.a)(e.query, ['q', 'src'])) }
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
                a.replace({ pathname: c, query: Object(O.a)(r()(r()({}, i.query), e)) })
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
              l = c && s && s.pf ? A : j,
              d = s && s.lf ? W : q
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
                  return y.a.createElement(
                    k.a,
                    null,
                    y.a.createElement(k.a, { style: U.content }, this._renderFilters()),
                    y.a.createElement(
                      k.a,
                      { style: e && U.bottomBorder, testID: _ },
                      y.a.createElement(I.a, {
                        link: this._getAdvancedSearchLink(),
                        onPress: this._handleFooterPress,
                        text: P,
                      }),
                    ),
                    t ? y.a.createElement(E.a, { onClose: this._handleHideLoginSheet }) : null,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(N, 'contextType', x.a), g()(N, 'defaultProps', { withBottomBorder: !1 })
      var U = T.a.create(function (e) {
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
      t.b = Object(C.a)(N, { page: 'search_filters' })
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
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('ho0z'), n('0zG9'), n('ERkP')),
        y = n.n(b),
        v = n('/yvb'),
        S = n('hUVV'),
        E = n('3XMw'),
        w = n.n(E),
        _ = n('iKTg'),
        k = n('TaB8'),
        C = n('1zbE'),
        x = n('Ukpf'),
        B = n('cnVF'),
        I = n('TnY3'),
        T = n('0+0m'),
        L = n('v6aA'),
        O = n('2qJZ'),
        P = w.a.ib65b1c6,
        F = w.a.f55cebb7,
        z = w.a.g61ed8a4,
        R = { clientId: T.a, scope: 'name email', usePopup: !0 },
        M = (function (e) {
          p()(n, e)
          var t = h()(n)
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
                Object(k.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              g()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  a = Object(O.c)(e.context.featureSwitches) ? 'https://'.concat(O.b) : 'https://'.concat(O.a)
                t &&
                  n(B.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(r()(r()({}, R), {}, { redirectURI: a, state: n }))
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
                  p = l.allowPartnerships,
                  m = l.allowPersonalization
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
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!m,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: B.A.Apple,
                              state: s[B.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== T.g
                        ? (a.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), n({ text: z }))
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
                    x.a.inject({
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
                    o = n === C.a.SignUp ? P : F
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : y.a.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'alwaysBaseGray1100',
                        disabled: !r,
                        icon: y.a.createElement(_.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: a,
                      })
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()(M, 'contextType', L.a),
        g()(M, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(I.a)(Object(S.a)(M)))
    },
    XiYe: function (e, t, n) {
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
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return be
        }),
        n.d(t, 'LoggedOutHome', function () {
          return ye
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
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        b = n('ddV6'),
        y = n.n(b),
        v = (n('0zG9'), n('z84I'), n('ERkP')),
        S = n.n(v),
        E = n('UpKB'),
        w = n('zI2C'),
        _ = n('Hde2'),
        k = n('Chb3'),
        C = n('RqPI'),
        x = n('rxPX'),
        B = Object(x.a)()
          .propsFromState(function () {
            return { userLanguage: C.p }
          })
          .withAnalytics({ page: 'front' }),
        I = n('H1k/'),
        T = n('SrtL'),
        L = n('FQwk'),
        O = n('kG2l'),
        P = n('muX9'),
        F = n('3XMw'),
        z = n.n(F),
        R = n('6oVL'),
        M = n('rJoH'),
        H = n('yoO3'),
        D = n('Es6L'),
        j = n('JkIr'),
        A = n('MWbm'),
        q = n('0yYu'),
        W = n('t62R'),
        V = n('/yvb'),
        N = n('cHvH'),
        U = n('TIdA'),
        G = n('A91F'),
        K = n('rHpw'),
        Q = n('pxuL'),
        X = n('5P4+'),
        Y = n('AS3p'),
        J = n('0+0m'),
        Z = n('VwDm'),
        $ = n('wz7L'),
        ee = n('dFWS'),
        te = n('lUZE'),
        ne = n('3rEN'),
        ae = n('1zbE'),
        re = n('XJCT'),
        oe = [
          { text: z.a.a62c9c33, Icon: Z.a },
          { text: z.a.cf39fca2, Icon: $.a },
          { text: z.a.j86184fd, Icon: ee.a },
        ],
        ie = z.a.d1091f50,
        ce = z.a.d9e109ae,
        se = z.a.eba1b197,
        le = z.a.a565833d,
        ue = z.a.aa95ddc0,
        de = z.a.fa811c30,
        pe = z.a.e919c3bc,
        me = z.a.e5b0e543,
        he = z.a.h0ff39da,
        fe = z.a.j3f49ff6,
        ge = z.a.ca86b62c
      function be(e) {
        var t = S.a.useState(0),
          n = y()(t, 2),
          a = n[0],
          r = n[1],
          o = S.a.useCallback(function (e) {
            r(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(k.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(_.a, null, S.a.createElement(I.a, { onHeightChange: o })),
          S.a.createElement(A.a, { style: [{ marginBottom: a }, Se.bannerPadderChildren] }, e.children),
        )
      }
      var ye = (function (e) {
        p()(n, e)
        var t = h()(n)
        function n(e, a) {
          var o
          return (
            i()(this, n),
            (o = t.call(this, e, a)),
            g()(
              u()(o),
              '_thirdPartySsoButtonsEnabled',
              o.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            g()(
              u()(o),
              '_isPlaceholderSIWGButtonEnabled',
              o.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            g()(
              u()(o),
              '_cookieComplianceGingersnapEnabled',
              o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            g()(
              u()(o),
              '_searchHomePageVariation',
              o.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            g()(u()(o), '_renderLoginSignupButtons', function (e, t) {
              var n = e ? Se.ctaButton : Se.ctaButtonMobile
              return S.a.createElement(
                A.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Se.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? S.a.createElement(
                      S.a.Fragment,
                      null,
                      o._renderSSOButtons(e, t),
                      S.a.createElement(
                        A.a,
                        { style: Se.gapContainer },
                        S.a.createElement(q.a, { label: S.a.createElement(W.b, { children: ge }) }),
                      ),
                      S.a.createElement(
                        V.a,
                        {
                          link: {
                            pathname: '/i/flow/signup',
                            state: { input: { requested_variant: JSON.stringify({ signup_type: ae.b }) } },
                          },
                          onPress: o._handleSignupButton,
                          size: 'medium',
                          style: [n, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles],
                          testID: j.a.signupButton,
                          type: 'brandFilled',
                        },
                        ue,
                      ),
                      S.a.createElement(W.b, { color: 'gray700', size: 'subtext3', style: [n, { width: J.b }] }, ae.c),
                      S.a.createElement(
                        A.a,
                        { style: Se.signInButtonContainer },
                        S.a.createElement(W.b, { size: 'headline2', style: n, weight: 'bold' }, de),
                        S.a.createElement(
                          V.a,
                          {
                            link: '/login',
                            onPress: o._handleLoginButton,
                            size: 'medium',
                            style: [n, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles],
                            testID: j.a.loginButton,
                            type: 'brandOutlined',
                          },
                          me,
                        ),
                      ),
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
                          style: [n, 'tablet' === e && Se.ctaButtonSplitSpacing],
                          testID: j.a.signupButton,
                          type: 'brandFilled',
                        },
                        le,
                      ),
                      S.a.createElement(
                        V.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: n,
                          testID: j.a.loginButton,
                          type: 'brandOutlined',
                        },
                        pe,
                      ),
                    ),
              )
            }),
            g()(u()(o), '_renderSSOButtons', function (e, t) {
              var n = o.state,
                a = n.buttonState,
                i = n.isCookieCompliant,
                c = e ? Se.ctaButton : Se.ctaButtonMobile,
                s = r()(r()({}, Se.ssoButtonStyles), {}, { width: t })
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(O.a, {
                  buttonSize: 'medium',
                  buttonState: a,
                  customWidth: t,
                  displayType: J.e.Button,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? i : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [c, 'tablet' === e && Se.ctaButtonSplitSpacing, s],
                }),
                S.a.createElement(E.a, {
                  buttonSize: 'medium',
                  buttonState: a,
                  style: [c, 'tablet' === e && Se.ctaButtonSplitSpacing, Se.ssoButtonStyles, Se.appleSsoButton],
                }),
              )
            }),
            g()(u()(o), '_renderUsernameInputField', function () {
              return S.a.createElement(
                A.a,
                { style: ve.inputContainer },
                S.a.createElement(re.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: ve.input,
                }),
              )
            }),
            g()(u()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return S.a.createElement(
                A.a,
                { style: [ve.container, ve.halfForm] },
                o._renderUsernameInputField(),
                S.a.createElement(
                  V.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: ve.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  pe,
                ),
              )
            }),
            g()(u()(o), '_handleHalfFormLoginClick', function () {
              o.props.analytics.scribe({ component: 'half_form', element: 'login', action: 'click' })
            }),
            g()(u()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            g()(u()(o), '_handleSignupButton', function () {
              o.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'signup',
              })
            }),
            g()(u()(o), '_handleLoginButton', function () {
              o.props.analytics.scribe({
                section: 'front',
                component: 'signup_callout',
                element: 'form',
                action: 'login',
              })
            }),
            g()(u()(o), '_handleUsernameChange', function (e) {
              o.setState({ usernameValue: e.target.value })
            }),
            g()(u()(o), '_handleCookieCompliance', function () {
              o.setState({ isCookieCompliant: !0 })
            }),
            (o.state = {
              autoSubmit: !1,
              buttonState: 'signup',
              isCookieCompliant: Object(Y.c)(o.context.featureSwitches) === Y.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          s()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(D.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(D.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = !!ne.a[this._searchHomePageVariation]
                return S.a.createElement(
                  H.a,
                  null,
                  S.a.createElement(T.a, { title: he }),
                  S.a.createElement(M.a, {
                    canonical: 'https://twitter.com/',
                    description: fe,
                    title: he,
                    type: 'website',
                  }),
                  S.a.createElement(w.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    P.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: fe, name: 'description' }),
                  ),
                  S.a.createElement(N.a, null, function (n) {
                    var a = n.windowHeight,
                      r = n.windowWidth,
                      o = Object(X.e)(r, a),
                      i = o.deviceSize,
                      c = o.showLoginForm,
                      s = o.ssoButtonsWidth
                    return S.a.createElement(
                      A.a,
                      { style: Se.root },
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
                              A.a,
                              { style: [Se.main, 'desktop' === i && Se.mainWide] },
                              e._renderCTA({ deviceSize: i, showLoginForm: c, ssoButtonsWidth: s }),
                              e._renderHero(i),
                            ),
                            S.a.createElement(be, null, S.a.createElement(L.a, { align: 'center' })),
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
                  a = t.variants
                return S.a.createElement(
                  A.a,
                  { style: [Se.block, Se.communication, Se.blockHero] },
                  S.a.createElement(
                    A.a,
                    { style: Se.blockImg },
                    S.a.createElement(U.a, {
                      accessibilityLabel: '',
                      aspectMode: G.a.COVER,
                      backgroundColor: K.a.theme.colors.blue500,
                      customVariants: a,
                      draggable: !1,
                      image: n,
                    }),
                    S.a.createElement(te.a, { style: [Se.twitterIconHero, 'desktop' === e && Se.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = oe.length
                return S.a.createElement(
                  A.a,
                  { style: Se.communicationItems },
                  oe.map(function (t, n) {
                    var a = t.Icon,
                      r = t.text,
                      o = n + 1 === e
                    return S.a.createElement(
                      A.a,
                      { key: r, style: [Se.communicationItem, o && Se.communicationItemLast] },
                      S.a.createElement(a, { style: Se.communicationItemIcon }),
                      S.a.createElement(
                        W.b,
                        { color: 'white', size: 'headline1', style: Se.communicationItemText, weight: 'bold' },
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
                  a = e.ssoButtonsWidth
                return S.a.createElement(
                  A.a,
                  { style: [Se.block, Se.blockCTA, 'tablet' === t && Se.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  S.a.createElement(
                    A.a,
                    { style: [Se.blockInnerWrapper, 'desktop' === t && Se.blockInnerWrapperWide] },
                    S.a.createElement(te.a, { style: Se.twitterIcon }),
                    S.a.createElement(
                      W.b,
                      { extendedWidth: !0, style: t ? Se.ctaTitleLarge : Se.ctaTitle, weight: 'bold' },
                      se,
                    ),
                    S.a.createElement(
                      W.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Se.ctaTextLarge : Se.ctaText,
                        weight: 'bold',
                      },
                      ce,
                    ),
                    this._renderLoginSignupButtons(t, a),
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
                      A.a,
                      { style: ve.container },
                      S.a.createElement(
                        R.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: ve.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          A.a,
                          { style: ve.inputContainer },
                          S.a.createElement(re.a, { onSubmitEditing: this._handleSubmitEditing, style: ve.input }),
                          S.a.createElement(
                            W.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(a),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: ve.forgotPassword,
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
      g()(ye, 'contextType', Q.a)
      var ve = K.a.create(function (e) {
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
        Se = K.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: r()(
              r()({}, K.a.absoluteFillObject),
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
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: J.b, height: e.spaces.space40, flex: 'none' },
            appleSsoButton: { marginBottom: 0 },
            signInButtonContainer: { marginTop: K.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat(X.a, 'px'), width: J.b },
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
        }),
        Ee = B(ye)
      t.default = Ee
    },
    dFWS: function (e, t, n) {
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
                d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        b = n('yiKp'),
        y = n.n(b),
        v = n('ezF+'),
        S = n('QIgh'),
        E = n('8UdT'),
        w = n('iu0J'),
        _ = n('zgaL'),
        k = n('PH3B'),
        C = n('dVvn'),
        x = n('14Yn'),
        B = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            n = e.withUserPresence
          return y()(
            y()(
              {},
              Object(S.createConfiguration)({
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
                h()(t, E.b.News, k.a),
                h()(t, E.b.EventSummary, Object(w.a)({ shouldStoreTypeaheadItem: n })),
                h()(t, E.b.RelatedSearch, C.a),
                h()(t, E.b.FollowSearch, v.e(v.a())),
                h()(t, E.b.FollowSearchAction, v.e(v.a())),
                h()(t, E.b.Place, v.e(v.a())),
                h()(t, E.b.MomentAnnotation, _.a),
                h()(t, E.b.Spelling, x.a),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        I = n('3X8/'),
        T = n('oQhu'),
        L = n('EUHl'),
        O = n('7BdX'),
        P = n('fTQJ'),
        F = n('i6OR'),
        z = n('X04g'),
        R = n('t62R'),
        M = n('FIs5'),
        H = n('v6aA'),
        D = n('3XMw'),
        j = n.n(D),
        A = j.a.c09de2d4,
        q = g.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          g.a.createElement(R.b, { link: '/settings/search' }, j.a.d2918e88),
        ),
        W = j.a.ae111c99,
        V = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
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
              h()(s()(e), '_getModule', function () {
                var t = e.props,
                  n = t.query,
                  a = t.querySrc,
                  r = t.searchFilters,
                  o = t.searchMode,
                  i = t.urtEndpointOptions,
                  c = t.vertical
                return e._getMemoizedModule(n, a, o, r, c, i)
              }),
              h()(s()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  n = t.emptyStateComponent,
                  a = t.query
                return n || g.a.createElement(M.a, { header: W({ query: a }), message: q })
              }),
              h()(
                s()(e),
                '_getMemoizedModule',
                Object(T.a)(function (e, t, n, a, r, o) {
                  return Object(F.b)({
                    query: e,
                    searchMode: n,
                    querySource: t,
                    searchFilters: a,
                    vertical: r,
                    urtEndpointOptions: o,
                  })
                }),
              ),
              h()(
                s()(e),
                '_getMemoizedEntryConfiguration',
                Object(T.a)(function (t) {
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
                  return g.a.createElement(P.a, {
                    apiErrorHandlerMap: I.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: L.a.CLIENT,
                    prerollDisplayLocation: O.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: A,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(V, 'contextType', H.a)
      t.a = V
    },
    i6OR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
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
        p =
          ((a = {}),
          o()(a, c.c.Top, {}),
          o()(a, c.c.Live, { tweet_search_mode: c.c.Live }),
          o()(a, c.c.User, { result_filter: c.c.User }),
          o()(a, c.c.Image, { result_filter: c.c.Image }),
          o()(a, c.c.Video, { result_filter: c.c.Video }),
          a),
        m = function (e) {
          return (function (e) {
            return e === i.a.SpellingCorrectionRevertClick || e === i.a.SpellingExpansionRevertClick
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
          a = void 0 === n ? c.c.Top : n,
          r = e.querySource,
          o = e.searchFilters,
          i = e.vertical,
          l = e.urtEndpointOptions,
          h = m(r),
          f = o && o.peopleFilter ? 'searcher_follows' : void 0,
          g = f ? '-pf' : '',
          b = o && o.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          y = ''.concat(u).concat(b, '-').concat(a).concat(h).concat(g)
        return Object(s.a)({
          timelineId: y,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == l ? void 0 : l.requestParams,
              { q: b, social_filter: f, vertical: i },
              p[a],
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
    k5o5: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('EORa'),
        o = r.loadQuery,
        i = r.useTrackLoadQueryInRender,
        c = n('XiYe'),
        s = n('PJTX'),
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        m = l.useState,
        h = n('e1/f').getRequest,
        f = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== h(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : f,
          r = s()
        i()
        var l = c(),
          h = p(new Set([n])),
          b = m(function () {
            return n
          }),
          y = b[0],
          v = b[1],
          S = m(function () {
            return n
          }),
          E = S[0],
          w = S[1]
        n !== E && (h.current.add(n), w(n), v(n))
        var _ = u(
            function () {
              l.current && (h.current.add(f), v(f))
            },
            [l],
          ),
          k = u(
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
                var i,
                  c = o(null !== (i = null == n ? void 0 : n.__environment) && void 0 !== i ? i : r, e, t, a)
                h.current.add(c), v(c)
              }
            },
            [r, e, v, l],
          ),
          C = p(!1)
        return (
          d(function () {
            return function () {
              C.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === C.current)
                return (
                  (C.current = !1),
                  void (
                    'NullQueryReference' !== y.kind &&
                    k(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig })
                  )
                )
              var t = h.current
              if (l.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value
                    if (o === y) break
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
            [y, l, k, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(h.current)
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
          ['NullQueryReference' === y.kind ? null : y, k, _]
        )
      }
    },
    kix0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchFiltersScreen', function () {
          return m
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
        p = l.a.aea62567
      function m(e) {
        var t = e.history,
          n = e.location
        return i.a.createElement(
          c.b,
          { documentTitle: p, history: t, title: p },
          i.a.createElement(u.a, r()({}, e, { key: n.key, withBottomBorder: !0 })),
        )
      }
      t.default = Object(d.a)(m, { page: 'search_filters' })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return j
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
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        y = n.n(b),
        v = n('pXBW'),
        S = n('6/RC'),
        E = n('P74S'),
        w = n.n(E),
        _ = n('kGix')
      n.d(t, 'a', function () {
        return _.a
      })
      var k = n('tI3i'),
        C = n.n(k),
        x = n('fs1G'),
        B = n('0KEI'),
        I = n('VYI2'),
        T = n.n(I),
        L = n('35hZ'),
        O = n.n(L),
        P = n('k5o5'),
        F = n.n(P),
        z = n('PJTX'),
        R = n.n(z),
        M = function (e) {
          return (0, e.render)({ fetchStatus: _.a.LOADING, data: null, error: null, retry: x.a })
        },
        H = (function (e) {
          p()(n, e)
          var t = h()(n)
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
                    if (!(e instanceof v.a)) throw e
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
        })(y.a.Component),
        D = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = O()(t, n)
          return a({ fetchStatus: _.a.LOADED, data: r, error: null, retry: x.a })
        },
        j = function (e, t) {
          if (S.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                o = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                c = n.variables,
                s = F()(e),
                l = r()(s, 2),
                u = l[0],
                d = l[1],
                p = Object(B.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = T()(c),
                h = r()(m, 1)[0],
                f = y.a.useCallback(
                  function () {
                    d(h, { fetchPolicy: 'network-only' })
                  },
                  [d, h],
                )
              return (
                y.a.useLayoutEffect(
                  function () {
                    d(h, { fetchPolicy: o })
                  },
                  [o, d, h],
                ),
                u
                  ? y.a.createElement(
                      y.a.Suspense,
                      { fallback: y.a.createElement(M, { render: i }) },
                      y.a.createElement(
                        H,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: _.a.FAILED, error: t, data: null, retry: n })
                            : y.a.createElement(D, { query: e, queryRef: u, render: i })
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
              c = R()(),
              s = Object(B.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = T()(i),
              u = r()(l, 1)[0],
              d = n.get(c)
            if (d) return d
            var p = y.a.lazy(function () {
              return w()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      C()(e, 'Fetch query returned empty data'),
                      o({ fetchStatus: _.a.LOADED, data: e, error: null, retry: x.a })
                    )
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: _.a.FAILED, data: null, error: e, retry: x.a }))
                      : y.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return y.a.createElement(y.a.Suspense, null, y.a.createElement(p, null))
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
    rC8y: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('SV7d'),
        r = n('ERkP'),
        o = n.n(r),
        i = n('t62R'),
        c = n('htQn'),
        s = n('rHpw'),
        l = { viewType: 'module_footer' }
      var u = s.a.create(function (e) {
        return {
          root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          withBottomRadius: {
            borderBottomLeftRadius: e.borderRadii.xLarge,
            borderBottomRightRadius: e.borderRadii.xLarge,
          },
        }
      })
      t.a = function (e) {
        var t = e.align,
          n = e.link,
          r = e.onPress,
          s = e.text,
          d = e.weight,
          p = e.withBottomRadius,
          m = e.withDarkerInteractiveBackground
        return o.a.createElement(
          a.a,
          { behavioralEventContext: l },
          o.a.createElement(
            c.a,
            { link: n, onPress: r, style: [u.root, p && u.withBottomRadius], withDarkerInteractiveBackground: m },
            o.a.createElement(i.b, { align: t, color: 'primary', weight: d }, s),
          ),
        )
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
      ;(r.hash = 'd776a0f7400b83db0b925f0352d2b751'), (e.exports = r)
    },
  },
])
//# sourceMappingURL=WIPED
