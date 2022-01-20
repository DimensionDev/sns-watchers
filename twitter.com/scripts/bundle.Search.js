;(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    '0E8n': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'SearchScreen', function () {
          return lt
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        h = r('N+ot'),
        d = r.n(h),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        v = r.n(y),
        S = (r('2G9S'), r('vfdX'), r('z84I'), r('hBvt'), r('ERkP')),
        b = r('HPNB'),
        m = r('es0u'),
        g = (r('WNMA'), r('KqXw'), r('vrRf'), r('zh9S')),
        O = r('1YZw'),
        E = r('hqKg'),
        _ = r('3IPs'),
        w = r('rxPX'),
        C = r('0KEI'),
        j = r('v4XE'),
        P = r('Hw0q'),
        R = function (e, t) {
          var r = t.location
          return r.query && r.query.src && 'string' == typeof r.query.src ? r.query.src : ''
        },
        T = function (e, t) {
          var r = t.location,
            n = t.match.params
          return n && n.unsafeHashtagQuery && 'string' == typeof n.unsafeHashtagQuery
            ? '#'.concat(n.unsafeHashtagQuery)
            : (r && r.query && r.query.q && Object(P.a)(r.query.q)) || ''
        },
        k = function (e, t) {
          return 0 === t.location.pathname.indexOf('/search') ? 'search' : 'hashtag'
        },
        x = function (e, t) {
          return !!(t.location.state || {}).searchFocused
        },
        L = Object(E.createSelector)(Object(P.b)('pf'), Object(P.b)('lf'), function (e, t) {
          return { peopleFilter: e, locationFilter: t }
        }),
        D = Object(w.a)()
          .propsFromState(function () {
            return {
              searchFocused: x,
              query: T,
              querySrc: R,
              isQueryAlreadySaved: Object(E.createSelector)(T, j.d, function (e, t) {
                return (
                  t
                    .map(function (e) {
                      return e.query
                    })
                    .indexOf(e) > -1
                )
              }),
              searchType: k,
              searchFilters: L,
              mode: _.k,
              savedSearches: j.d,
              vertical: Object(P.b)('vertical'),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: O.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('SEARCH_SCREEN'),
              deleteSavedSearch: j.a,
              fetchSavedSearchesIfNeeded: j.b,
              saveSearch: j.c,
              scribeAction: g.c,
            }
          })
          .withAnalytics({ page: 'search' }),
        F = r('sYRn'),
        A = r('3XMw'),
        I = r.n(A),
        q = r('oQhu'),
        M = r('2G3J'),
        H = r('yoO3'),
        B = r('7nmT'),
        U = r.n(B),
        z = r('5FtR'),
        V = r('Rp9C'),
        N = r('7JQg'),
        K = r('L7to'),
        X = (r('muX9'), I.a.a8399d5b, I.a.ge893905, r('mjJ+')),
        Q = r('3A2y'),
        J = 'searchFilters-overflow',
        W = 'advancedSearch-overflow',
        Z = 'searchSettings-overflow',
        G = 'saveSearch-overflow',
        Y = 'deleteSavedSearch-overflow',
        $ = r('+RfI'),
        ee = r('VwDm'),
        te = r('M2x3'),
        re = r('g9w/'),
        ne = r('hiGS')
      function ae(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ae(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ae(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
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
          var r,
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var ie = I.a.h1ef00db,
        se = I.a.aea62567,
        le = I.a.j622effd,
        ue = I.a.h4912b5e,
        he = I.a.b9bc69ca,
        de = (function (e) {
          u()(r, e)
          var t = oe(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              v()(s()(e), '_getActionItems', function () {
                var t = e.props,
                  r = t.deleteSavedSearch,
                  n = t.isLoggedIn,
                  a = t.isQueryAlreadySaved,
                  c = t.isTwoColumn,
                  o = t.location,
                  i = t.saveSearch,
                  s = []
                return (
                  c ||
                    s.push({ Icon: $.a, testID: J, text: se, link: { pathname: '/i/search_filters', query: o.query } }),
                  s.push({
                    Icon: ee.a,
                    testID: W,
                    text: le,
                    link: { pathname: '/search-advanced', query: ce({}, Object(Q.a)(o.query, ['q', 'src'])) },
                  }),
                  n &&
                    (s.unshift({ Icon: te.a, testID: Z, text: ie, link: '/settings/search' }),
                    a
                      ? s.push({
                          Icon: ne.a,
                          isEmphasized: !0,
                          testID: Y,
                          text: he,
                          onClick: function (e) {
                            e(), r()
                          },
                        })
                      : s.push({
                          Icon: re.a,
                          testID: G,
                          text: ue,
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
            o()(r, [
              {
                key: 'render',
                value: function () {
                  return S.createElement(X.a, { items: this._getActionItems(), onCloseRequested: this.props.onClose })
                },
              },
            ]),
            r
          )
        })(S.Component),
        pe = r('VS6U'),
        fe = r('LsPn'),
        ye = 'searchBoxOverflowButton',
        ve = r('aITJ'),
        Se = r('MWbm'),
        be = r('v6aA'),
        me = I.a.f9d35b98,
        ge = I.a.ha925ad3,
        Oe = I.a.h0a9931b,
        Ee = {
          customErrorHandler: function () {
            return Object(O.b)({ text: ge })
          },
          showToast: !0,
        },
        _e = {
          customErrorHandler: function () {
            return Object(O.b)({ text: me })
          },
          showToast: !0,
        },
        we = {
          customErrorHandler: function () {
            return Object(O.b)({ text: Oe })
          },
          showToast: !0,
        },
        Ce = r('cHvH'),
        je = r('6vad'),
        Pe = r('k/OQ'),
        Re = r('8Lfv'),
        Te = function (e, t) {
          return 'POP' === t.history.action
        },
        ke = function (e, t) {
          var r,
            n = t.location
          return null == n || null === (r = n.state) || void 0 === r ? void 0 : r.urtEndpointOptions
        },
        xe = Object(w.a)()
          .propsFromState(function () {
            return { dataLookupId: _.j, isBackNavigation: Te, searchMode: _.k, urtEndpointOptions: ke }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: function (e) {
                var t = e.fetchOptions,
                  r = e.module
                return Object(Re.a)(r, t)
              },
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'SEARCH_RESULTS_SCREEN',
              ),
              googleAnalyticsPageView: g.a,
              scribePageImpression: g.d,
            }
          }),
        Le = r('s14A'),
        De = r('dwig'),
        Fe = r('3X8/'),
        Ae = r('0+qk'),
        Ie = r('Ds5i'),
        qe = r.n(Ie),
        Me = r('h2mu'),
        He = r('i6OR'),
        Be = r('pQ3Z'),
        Ue = r.n(Be)
      function ze(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ze(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ze(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function Ne(e) {
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
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var Ke = function (e) {
          return e && qe()(e) ? { defaultText: ' '.concat(e), positionCursorAtBeginning: !0 } : void 0
        },
        Xe = (function (e) {
          u()(r, e)
          var t = Ne(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              v()(s()(e), '_getFabState', function () {
                var t = e.props.query
                return e._getMemoizedComposeLocationState(t)
              }),
              v()(s()(e), '_getTimelineScribeNamespace', function () {
                var t = e.props,
                  r = t.scribeNamespace,
                  n = t.searchMode,
                  a = t.vertical
                return e._getMemoizedTimelineScribeNamespace(r, n, a)
              }),
              v()(
                s()(e),
                '_getMemoizedTimelineScribeNamespace',
                Object(q.a)(function (e, t, r) {
                  var n = r === _.d.Topics ? '_topics' : '',
                    a = 'search_filter_'.concat(t).concat(n)
                  return Ve(Ve({}, e), {}, { section: a })
                }),
              ),
              v()(s()(e), '_getMemoizedComposeLocationState', Object(q.a)(Ke)),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    r = e.isBackNavigation
                  ;(0, e.scribePageImpression)(this._getTimelineScribeNamespace()),
                    t(this._getTimelineScribeNamespace()),
                    r || this._clearTimelineCache()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.isBackNavigation,
                    n = t.query,
                    a = t.querySrc,
                    c = t.searchFilters,
                    o = t.shouldClearTimelineCache
                  r ||
                    (!o && e.query === n && e.querySrc === a && Ue()(e.searchFilters, c)) ||
                    this._clearTimelineCache()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.query,
                    r = e.querySrc,
                    n = e.searchFilters,
                    a = e.searchFocused,
                    c = e.searchMode,
                    o = e.urtEndpointOptions,
                    i = e.vertical,
                    s = this.context,
                    l = s.featureSwitches,
                    u = !(!s.loggedInUserId || !l.isTrue('voice_rooms_search_results_page_audiospace_ring_enabled'))
                  return S.createElement(
                    De.a,
                    { component: Le.a, fab: this._renderFloatingComposeButton(), shouldRenderFab: !a },
                    S.createElement(
                      N.b,
                      { namespace: this._getTimelineScribeNamespace() },
                      S.createElement(Me.a, {
                        fetchOptions: this._getFetchOptions(),
                        query: t,
                        querySrc: r,
                        searchFilters: n,
                        searchMode: c,
                        urtEndpointOptions: o,
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
                  return S.createElement(Ae.a, { getLocationState: this._getFabState, history: e })
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
                    r = e.createLocalApiErrorHandler,
                    n = e.query,
                    a = e.querySrc,
                    c = e.searchFilters,
                    o = e.searchMode,
                    i = e.urtEndpointOptions
                  t({
                    module: Object(He.b)({
                      query: n,
                      querySource: a,
                      searchMode: o,
                      searchFilters: c,
                      urtEndpointOptions: i,
                    }),
                    fetchOptions: this._getFetchOptions(),
                  }).catch(r(Fe.a))
                },
              },
            ]),
            r
          )
        })(S.Component)
      v()(Xe, 'contextType', be.a)
      var Qe = Object(N.c)({ page: 'search', section: 'universal' })(xe(Xe))
      function Je(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Je(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Je(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var Ge = I.a.eb0ecd1d,
        Ye = I.a.cceeb26b,
        $e = I.a.i66136a9,
        et = I.a.d601fc2f,
        tt = I.a.g2fd3205,
        rt = I.a.ac4fb0f3,
        nt = I.a.a9ae1e78,
        at = I.a.bb967f9e,
        ct = I.a.aea62567,
        ot = I.a.gfcfbf8b,
        it = I.a.a4645d91,
        st = [
          { type: _.c.Top, label: $e },
          { type: _.c.Live, label: et },
          { type: _.c.User, label: tt },
          { type: _.c.Image, label: rt },
          { type: _.c.Video, label: at },
        ],
        lt = (function (e) {
          u()(r, e)
          var t = Ze(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              v()(
                s()(e),
                '_searchHomePageEnabled',
                e.context.featureSwitches.isTrue('responsive_web_search_home_page_enabled'),
              ),
              v()(s()(e), '_loggedInUserId', e.context.loggedInUserId),
              v()(s()(e), 'state', { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
              v()(
                s()(e),
                '_getScribeData',
                Object(q.a)(function (e, t, r, n, a) {
                  return {
                    search_details: We(
                      {},
                      Object(_.f)({ query: e, querySrc: t, searchFilters: r, modeValue: n, vertical: a }),
                    ),
                  }
                }),
              ),
              v()(s()(e), '_renderRightControl', function (t) {
                var r = t.isTwoColumn,
                  n = t.searchFocused
                return r || !n
                  ? S.createElement(M.a, { onClick: e._handleOverflowMenuClick, renderMenu: e._renderMenu, testID: ye })
                  : void 0
              }),
              v()(s()(e), '_renderMenu', function (t) {
                var r = e.props,
                  n = r.history,
                  a = r.isQueryAlreadySaved,
                  c = r.location,
                  o = !!e.context.loggedInUserId
                return S.createElement(Ce.a, null, function (r) {
                  var i = r.windowWidth,
                    s = b.a.isTwoColumnLayout(i)
                  return S.createElement(de, {
                    deleteSavedSearch: e._onDeleteSavedSearchMenuClick,
                    history: n,
                    isLoggedIn: o,
                    isQueryAlreadySaved: a,
                    isTwoColumn: s,
                    location: c,
                    onClose: t,
                    saveSearch: e._onSaveSearch,
                  })
                })
              }),
              v()(s()(e), '_onSaveSearch', function () {
                var t = e.props,
                  r = t.addToast,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  c = t.query,
                  o = t.saveSearch,
                  i = t.savedSearches.length
                c &&
                  o(c)
                    .then(function () {
                      return r({ text: ot })
                    })
                    .catch(a(i < 25 ? Ee : _e))
                var s = V.a.forSavedSearchResult(c, i)
                n.scribe({ element: 'saved_search', action: 'add', data: { items: [s] } })
              }),
              v()(s()(e), '_handleOnDeleteSavedSearchConfirm', function () {
                var t = e.props,
                  r = t.addToast,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  c = t.deleteSavedSearch,
                  o = t.query,
                  i = t.savedSearches,
                  s = i.findIndex(function (e) {
                    return e.query === o
                  }),
                  l = i[s]
                if (l) {
                  c(l.id_str)
                    .then(function () {
                      return r({ text: it })
                    })
                    .catch(a(we))
                  var u = V.a.forSavedSearchResult(l.query, s)
                  n.scribe({ element: 'saved_search', action: 'delete', data: { items: [u] } }),
                    e.setState({ shouldShowDeleteSearchConfirmation: !1 })
                }
              }),
              v()(s()(e), '_handleOnDeleteSavedSearchCancel', function () {
                e.setState({ shouldShowDeleteSearchConfirmation: !1 })
              }),
              v()(s()(e), '_onDeleteSavedSearchMenuClick', function () {
                e.setState({ shouldShowDeleteSearchConfirmation: !0 })
              }),
              v()(s()(e), '_handleOverflowMenuClick', function () {
                e.props.analytics.scribe({ element: 'overflow_menu', action: 'click' })
              }),
              v()(s()(e), '_renderPrimaryContent', function (t) {
                var r = e.state.shouldShowDeleteSearchConfirmation
                return S.createElement(
                  Se.a,
                  null,
                  S.createElement(Qe, t),
                  r
                    ? S.createElement(F.a, {
                        onCancel: e._handleOnDeleteSavedSearchCancel,
                        onConfirm: e._handleOnDeleteSavedSearchConfirm,
                      })
                    : null,
                )
              }),
              v()(s()(e), '_renderSidebarContent', function () {
                var t = e.props,
                  r = t.history,
                  n = t.location,
                  a = t.query
                return S.createElement(
                  m.a,
                  { withSearchBox: !1, withTrends: !!a },
                  S.createElement(
                    Se.a,
                    null,
                    S.createElement(je.b, { text: ct }),
                    S.createElement(K.b, { history: r, key: n.key, location: n }),
                  ),
                )
              }),
              v()(s()(e), '_renderModesBar', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.query,
                  a = t.querySrc,
                  c = t.searchFilters,
                  o = r.contextualScribeNamespace,
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
                          r.scribe(
                            We(
                              We({}, o),
                              {},
                              {
                                element: 'search_filter_'.concat(u),
                                action: 'navigate',
                                data: e._getScribeData(n, a, c),
                              },
                            ),
                          )
                      },
                    }
                  })
                return S.createElement(Pe.a, { links: i })
              }),
              v()(s()(e), '_getModeLinks', function () {
                var t = e.props,
                  r = t.mode,
                  n = t.query,
                  a = t.querySrc,
                  c = t.searchFilters,
                  o = t.searchType,
                  i = t.vertical
                return e._getMemoizedModeLinks(n, a, o, c, r, i, function (e, t) {
                  return function () {
                    return _.i[t] === e
                  }
                })
              }),
              v()(
                s()(e),
                '_getMemoizedModeLinks',
                Object(q.a)(function (e, t, r, n, a, c, o) {
                  return st.map(function (i) {
                    var s = _.i[i.type]
                    return {
                      link: Object(_.e)({
                        query: e,
                        querySrc: t,
                        modeValue: s,
                        searchType: r,
                        searchFilters: n,
                        vertical: c,
                      }),
                      isActive: o(s, a),
                      label: i.label,
                      modeType: i.type,
                    }
                  })
                }),
              ),
              v()(s()(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              v()(s()(e), '_handleSoftLeftClick', function () {
                var t = U.a.findDOMNode(e._searchBoxRef)
                t && t instanceof window.HTMLElement && t.querySelector('input').focus()
              }),
              v()(s()(e), '_handleSearchBoxSubmit', function (t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  a = e.props.analytics
                a.scribe({ section: 'trendsplus', action: 'search' }),
                  n &&
                    e.setState({ shouldClearTimelineCache: !0 }, function () {
                      e.setState({ shouldClearTimelineCache: !1 })
                    })
              }),
              e
            )
          }
          return (
            o()(r, [
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
                    r = t.history,
                    n = t.location,
                    a = t.mode,
                    c = t.query,
                    o = t.querySrc,
                    i = t.searchFilters,
                    s = t.searchFocused,
                    l = (t.searchType, t.vertical),
                    u = this.state.shouldClearTimelineCache,
                    h = !!c,
                    d = h ? Ye({ query: c }) : Ge,
                    p = {
                      history: r,
                      location: n,
                      query: c,
                      querySrc: o,
                      searchFilters: i,
                      searchFocused: s,
                      vertical: l,
                      shouldClearTimelineCache: u,
                    },
                    f = this._renderPrimaryContent(p),
                    y = { initialValue: c, mode: a, onSubmit: this._handleSearchBoxSubmit, searchFilters: i }
                  return h
                    ? S.createElement(
                        N.b,
                        { data: this._getScribeData(c, o, i, a, l) },
                        S.createElement(
                          H.a,
                          null,
                          null,
                          S.createElement(Ce.a, null, function (t) {
                            var n = t.windowWidth,
                              a = b.a.isTwoColumnLayout(n),
                              o = e._renderRightControl({ isTwoColumn: a, searchFocused: s })
                            return S.createElement(pe.a, {
                              backLocation: '/explore',
                              composeOptions: Ke(c),
                              documentTitle: d,
                              history: r,
                              primaryContent: f,
                              rightControl: o,
                              searchBoxOptions: y,
                              searchBoxRef: e._setSearchBoxRef,
                              secondaryBar: e._renderModesBar(),
                              sidebarContent: e._renderSidebarContent(),
                              title: c,
                              withBottomLoginSignupBar: !0,
                              withSearchBox: !0,
                            })
                          }),
                          ve.b.isKaiOS() &&
                            S.createElement(fe.a, { leftText: nt, onLeftClick: this._handleSoftLeftClick }),
                        ),
                      )
                    : this._searchHomePageEnabled && !this._loggedInUserId
                    ? S.createElement(z.a, { to: '/' })
                    : S.createElement(z.a, { to: '/explore' })
                },
              },
            ]),
            r
          )
        })(S.Component)
      v()(lt, 'contextType', be.a)
      var ut = D(lt)
      t.default = ut
    },
    '3X8/': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        o = r('k49u'),
        i = r('LVU8'),
        s = r('3XMw'),
        l = r.n(s).a.i1801686,
        u =
          ((n = {}),
          c()(n, o.a.GenericForbidden, { toast: Object(i.a)() }),
          c()(n, o.a.InvalidRequestUrl, { toast: { text: l, withClearButton: !0 } }),
          c()(n, 'showToast', !0),
          n)
    },
    '4ZbN': function (e, t, r) {
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
    Ds5i: function (e, t, r) {
      'use strict'
      var n = r('IGGJ')
      r('M+/F'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          if (!e) return !1
          var t = (0, a.default)(e)
          return 1 === t.length && t[0] === e.slice(1)
        })
      var a = n(r('nmVb'))
      e.exports = t.default
    },
    L7to: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return X
      })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        h = r('N+ot'),
        d = r.n(h),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        v = r.n(y),
        S = (r('z84I'), r('ho0z'), r('MvUL'), r('KqXw'), r('jQ3i'), r('x4t0'), r('vrRf'), r('uFXj'), r('ERkP')),
        b = r('3XMw'),
        m = r.n(b),
        g = r('RxYA'),
        O = (r('yH/f'), Object.freeze({ People: 'People', Location: 'Location' })),
        E = 'searchFiltersAdvancedSearch',
        _ = r('MWbm'),
        w = r('Irs7'),
        C = r('v6aA'),
        j = r('fyvP'),
        P = r('rC8y'),
        R = r('rHpw'),
        T = r('3A2y'),
        k = r('Zkey')
      function x(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var F = m.a.j622effd,
        A = m.a.g2fd3205,
        I = m.a.defb4aa9,
        q = m.a.af293dc2,
        M = m.a.jaaa8984,
        H = m.a.i5045e73,
        B = m.a.h2388753,
        U = 'anyone',
        z = 'youFollow',
        V = 'anywhere',
        N = 'nearYou',
        K = [
          {
            label: A,
            name: O.People,
            options: [
              { label: I, value: U },
              { label: q, value: z },
            ],
          },
          {
            label: M,
            name: O.Location,
            options: [
              { label: H, value: V },
              { label: B, value: N },
            ],
          },
        ],
        X = (function (e) {
          u()(r, e)
          var t = D(r)
          function r(e, n) {
            var c
            a()(this, r),
              (c = t.call(this, e, n)),
              v()(s()(c), '_renderFilters', function () {
                return K.map(function (e, t) {
                  return S.createElement(
                    _.a,
                    { key: e.name, style: t > 0 && Q.paddingTop },
                    S.createElement(j.a, {
                      label: e.label,
                      name: e.name,
                      onChange: c._handleFilterChange,
                      options: e.options,
                      value: c._getCurrentValue(e.name),
                    }),
                  )
                })
              }),
              v()(s()(c), '_getCurrentValue', function (e) {
                switch (e) {
                  case O.People:
                    return c.state.peopleFilter
                  case O.Location:
                    return c.state.locationFilter
                  default:
                    return ''
                }
              }),
              v()(s()(c), '_handleFilterChange', function (e, t) {
                var r = c.context.loggedInUserId,
                  n = c.props.location.query
                switch (e) {
                  case O.People:
                    if (r) {
                      c.setState({ peopleFilter: t })
                      var a = { pf: t === z ? 'on' : void 0, lf: 'on' === n.lf ? n.lf : void 0 }
                      c._executeSearch(a, 'people')
                    } else c.setState({ shouldShowLoginSheet: !0 })
                    break
                  case O.Location:
                    c.setState({ locationFilter: t })
                    var o = { lf: t === N ? 'on' : void 0, pf: 'on' === n.pf ? n.pf : void 0 }
                    c._executeSearch(o, 'location')
                }
              }),
              v()(s()(c), '_getAdvancedSearchLink', function () {
                var e = c.props.location
                return { pathname: '/search-advanced', query: L({}, Object(T.a)(e.query, ['q', 'src'])) }
              }),
              v()(s()(c), '_handleFooterPress', function () {
                c._scribeAction('advanced_search')
              }),
              v()(s()(c), '_scribeAction', function (e) {
                c.props.analytics.scribe({ element: e, action: 'click' })
              }),
              v()(s()(c), '_executeSearch', function (e, t) {
                var r = c.props,
                  n = r.history,
                  a = r.location
                c._scribeAction(t)
                var o = c._getPathname()
                n.replace({ pathname: o, query: Object(k.a)(L(L({}, a.query), e)) })
              }),
              v()(s()(c), '_getPathname', function () {
                var e = c.props.location
                if (e.pathname.includes('/hashtag/')) return e.pathname
                if (
                  e.state &&
                  e.state.previousPath &&
                  e.state.previousPath.includes('/hashtag/') &&
                  '/search' !== e.pathname
                ) {
                  var t = e.state.previousPath,
                    r = t.indexOf('?') > -1 ? t.indexOf('?') : t.length
                  return t.substring(0, r)
                }
                return '/search'
              }),
              v()(s()(c), '_handleHideLoginSheet', function () {
                c.setState({ shouldShowLoginSheet: !1 })
              })
            var o = c.context.loggedInUserId,
              i = e.location.query,
              l = o && i && i.pf ? z : U,
              u = i && i.lf ? N : V
            return (c.state = { peopleFilter: l, locationFilter: u, shouldShowLoginSheet: !1 }), c
          }
          return (
            o()(r, [
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
                  return S.createElement(
                    _.a,
                    null,
                    S.createElement(_.a, { style: Q.content }, this._renderFilters()),
                    S.createElement(
                      _.a,
                      { style: e && Q.bottomBorder, testID: E },
                      S.createElement(P.a, {
                        link: this._getAdvancedSearchLink(),
                        onPress: this._handleFooterPress,
                        text: F,
                      }),
                    ),
                    t ? S.createElement(g.a, { onClose: this._handleHideLoginSheet }) : null,
                  )
                },
              },
            ]),
            r
          )
        })(S.Component)
      v()(X, 'contextType', C.a), v()(X, 'defaultProps', { withBottomBorder: !1 })
      var Q = R.a.create(function (e) {
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
      t.b = Object(w.a)(X, { page: 'search_filters' })
    },
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        a = r('KEM+'),
        c = r.n(a),
        o = r('ezF+'),
        i = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        s = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        l = {
          loader: function () {
            return r.e(336).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: s.a.Critical,
        },
        u = {
          loader: function () {
            return r.e(338).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: s.a.Critical,
        }
      t.a = o.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), c()(n, i.Cell, l), c()(n, i.PreviewCard, u), n),
      })
    },
    'g9w/': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M16 11.25h-3.25V8c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.25H8c-.414 0-.75.336-.75.75s.336.75.75.75h3.25V16c0 .414.336.75.75.75s.75-.336.75-.75v-3.25H16c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            c.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    h2mu: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n,
        a = r('VrFO'),
        c = r.n(a),
        o = r('Y9Ll'),
        i = r.n(o),
        s = r('1Pcy'),
        l = r.n(s),
        u = r('5Yy7'),
        h = r.n(u),
        d = r('N+ot'),
        p = r.n(d),
        f = r('AuHH'),
        y = r.n(f),
        v = r('KEM+'),
        S = r.n(v),
        b = (r('2G9S'), r('ERkP')),
        m = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ezF+')),
        g = r('QIgh'),
        O = r('8UdT'),
        E = r('iu0J'),
        _ = r('zgaL'),
        w = r('PH3B'),
        C = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        j = {
          loader: function () {
            return r.e(221).then(r.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: C.a.Critical,
        },
        P = m.e(j),
        R = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        T = {
          loader: function () {
            return r.e(341).then(r.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: C.a.Critical,
        },
        k = {
          loader: function () {
            return r.e(341).then(r.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: C.a.Critical,
        },
        x = {
          loader: function () {
            return r.e(341).then(r.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: C.a.Critical,
        },
        L = m.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((n = {}), S()(n, R.Expand, T), S()(n, R.Replace, k), S()(n, R.Suggest, x), n),
        })
      function D(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                S()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var A = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return F(
            F(
              {},
              Object(g.a)({
                tweetDismissable: !0,
                displayBlocked: !0,
                shouldStoreTypeaheadItem: t,
                withUserPresence: r,
              }),
            ),
            (function (e) {
              var t,
                r = e.shouldStoreTypeaheadItem
              return (
                (t = {}),
                S()(t, O.b.News, w.a),
                S()(t, O.b.EventSummary, Object(E.a)({ errorContext: 'SEARCH_SCREEN', shouldStoreTypeaheadItem: r })),
                S()(t, O.b.RelatedSearch, P),
                S()(t, O.b.FollowSearch, m.e(m.a())),
                S()(t, O.b.FollowSearchAction, m.e(m.a())),
                S()(t, O.b.Place, m.e(m.a())),
                S()(t, O.b.MomentAnnotation, _.a),
                S()(t, O.b.Spelling, L),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        I = r('3X8/'),
        q = r('oQhu'),
        M = r('EUHl'),
        H = r('7BdX'),
        B = r('fTQJ'),
        U = r('i6OR'),
        z = r('X04g'),
        V = r('t62R'),
        N = r('FIs5'),
        K = r('v6aA'),
        X = r('3XMw'),
        Q = r.n(X)
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
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var W = Q.a.c09de2d4,
        Z = b.createElement(
          Q.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          b.createElement(V.b, { link: '/settings/search' }, Q.a.d2918e88),
        ),
        G = Q.a.ae111c99,
        Y = (function (e) {
          h()(r, e)
          var t = J(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(l()(e), '_shouldStoreTypeaheadItem', function (t) {
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
              S()(l()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  a = t.searchFilters,
                  c = t.searchMode,
                  o = t.urtEndpointOptions,
                  i = t.vertical
                return e._getMemoizedModule(r, n, c, a, i, o)
              }),
              S()(l()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || b.createElement(N.a, { header: G({ query: n }), message: Z })
              }),
              S()(
                l()(e),
                '_getMemoizedModule',
                Object(q.a)(function (e, t, r, n, a, c) {
                  return Object(U.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: a,
                    urtEndpointOptions: c,
                  })
                }),
              ),
              S()(
                l()(e),
                '_getMemoizedEntryConfiguration',
                Object(q.a)(function (t) {
                  return A({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  return b.createElement(B.a, {
                    apiErrorHandlerMap: I.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: M.a.CLIENT,
                    prerollDisplayLocation: H.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: W,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(b.Component)
      S()(Y, 'contextType', K.a)
      t.a = Y
    },
    hiGS: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            c.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    i6OR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        o = (r('jQ3i'), r('x4t0'), r('2G9S'), r('IAdD'), r('LW0h'), r('vrRf'), r('z84I'), r('u3ZE')),
        i = r('3IPs'),
        s = r('ZNT5'),
        l = r('eR3e'),
        u = 'search-',
        h = ' near:me',
        d =
          ((n = {}),
          c()(n, i.c.Top, {}),
          c()(n, i.c.Live, { tweet_search_mode: i.c.Live }),
          c()(n, i.c.User, { result_filter: i.c.User }),
          c()(n, i.c.Image, { result_filter: i.c.Image }),
          c()(n, i.c.Video, { result_filter: i.c.Video }),
          n),
        p = function (e) {
          return (function (e) {
            return e === o.a.SpellingCorrectionRevertClick || e === o.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        f = function () {
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
          r = e.searchMode,
          n = void 0 === r ? i.c.Top : r,
          a = e.querySource,
          c = e.searchFilters,
          o = e.vertical,
          l = e.urtEndpointOptions,
          f = p(a),
          y = c && c.peopleFilter ? 'searcher_follows' : void 0,
          v = y ? '-pf' : '',
          S = c && c.locationFilter && !t.includes(h) ? ''.concat(t).concat(h) : t,
          b = ''.concat(u).concat(S, '-').concat(n).concat(f).concat(v)
        return Object(s.a)({
          timelineId: b,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == l ? void 0 : l.requestParams,
              { q: S, social_filter: y, vertical: o },
              d[n],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: n === i.c.Live ? 5e3 : void 0,
          timelineType: 'search',
        })
      }
    },
    kix0: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'SearchFiltersScreen', function () {
          return d
        })
      var n = r('97Jx'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('jHSc'),
        i = r('3XMw'),
        s = r.n(i),
        l = r('L7to'),
        u = r('Irs7'),
        h = s.a.aea62567
      function d(e) {
        var t = e.history,
          r = e.location
        return c.createElement(
          o.b,
          { documentTitle: h, history: t, title: h },
          c.createElement(l.a, a()({}, e, { key: r.key, withBottomBorder: !0 })),
        )
      }
      t.default = Object(u.a)(d, { page: 'search_filters' })
    },
    nmVb: function (e, t, r) {
      'use strict'
      var n = r('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], r = (0, a.default)(e), n = 0; n < r.length; n++) t.push(r[n].hashtag)
          return t
        })
      var a = n(r('yyPN'))
      e.exports = t.default
    },
    sYRn: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r('eb3s'),
        c = r('3XMw'),
        o = r.n(c),
        i = r('4ZbN'),
        s = o.a.hffea05c,
        l = o.a.j037e373,
        u = o.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          r = e.onConfirm
        return n.createElement(a.a, {
          confirmButtonLabel: u,
          confirmButtonType: 'destructiveFilled',
          headline: s,
          onCancel: t,
          onConfirm: r,
          testID: i.a.deleteSavedSearchDialog,
          text: l,
        })
      }
    },
    u3ZE: function (e, t, r) {
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
    v4XE: function (e, t, r) {
      'use strict'
      r.d(t, 'd', function () {
        return E
      }),
        r.d(t, 'c', function () {
          return _
        }),
        r.d(t, 'a', function () {
          return w
        }),
        r.d(t, 'b', function () {
          return C
        })
      r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('RhWx'),
        a = r.n(n),
        c = r('KEM+'),
        o = r.n(c),
        i = r('T0aG'),
        s = r.n(i),
        l = (r('yH/f'), r('2G9S'), r('LW0h'), r('JtPf'), r('7x/C'), r('oEOe')),
        u = r('kGix'),
        h = r('Ssj5'),
        d = r('SrIh'),
        p = r('RqPI')
      function f(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v = 'savedSearches',
        S = { fetchStatus: u.a.NONE, savedSearches: [] },
        b = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        m = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        g = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function O() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case b.SUCCESS:
            var r = t.payload,
              n = Array.isArray(r)
            return (
              n ||
                Object(d.a)('Saved search results are not type array', { extra: { savedSearchResultsType: s()(r) } }),
              y(y({}, e), {}, { fetchStatus: u.a.LOADED, savedSearches: n && r ? r : [] })
            )
          case b.FAILURE:
            return y(y({}, e), {}, { fetchStatus: u.a.FAILED })
          case m.SUCCESS:
            return y(
              y({}, e),
              {},
              { savedSearches: t.payload ? [].concat(a()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case g.SUCCESS:
            return t.payload
              ? y(
                  y({}, e),
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
      h.a.register(o()({}, v, O))
      var E = function (e) {
          return e.savedSearches.savedSearches
        },
        _ = function (e) {
          return function (t, r, n) {
            var a = n.api
            return Object(l.b)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: m,
              context: 'SAVE_SEARCH',
            })
          }
        },
        w = function (e) {
          return function (t, r, n) {
            var a = n.api
            return Object(l.b)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
              actionTypes: g,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        C = function () {
          return function (e, t, r) {
            r.api
            var n = t()
            return Object(p.m)(n)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(n) === u.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, r) {
                    var n = r.api
                    return Object(l.b)(e, { request: n.SavedSearches.fetch, params: {} })({
                      actionTypes: b,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    zgaL: function (e, t, r) {
      'use strict'
      var n = r('ezF+'),
        a =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(214).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
