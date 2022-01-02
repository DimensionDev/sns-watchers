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
        p = r('N+ot'),
        h = r.n(p),
        d = r('AuHH'),
        f = r.n(d),
        y = r('KEM+'),
        v = r.n(y),
        b = (r('2G9S'), r('vfdX'), r('z84I'), r('hBvt'), r('ERkP')),
        S = r('HPNB'),
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
        k = function (e, t) {
          var r = t.location,
            n = t.match.params
          return n && n.unsafeHashtagQuery && 'string' == typeof n.unsafeHashtagQuery
            ? '#'.concat(n.unsafeHashtagQuery)
            : (r && r.query && r.query.q && Object(P.a)(r.query.q)) || ''
        },
        T = function (e, t) {
          return 0 === t.location.pathname.indexOf('/search') ? 'search' : 'hashtag'
        },
        x = function (e, t) {
          return !!(t.location.state || {}).searchFocused
        },
        D = Object(E.createSelector)(Object(P.b)('pf'), Object(P.b)('lf'), function (e, t) {
          return { peopleFilter: e, locationFilter: t }
        }),
        I = Object(w.a)()
          .propsFromState(function () {
            return {
              searchFocused: x,
              query: k,
              querySrc: R,
              isQueryAlreadySaved: Object(E.createSelector)(k, j.d, function (e, t) {
                return (
                  t
                    .map(function (e) {
                      return e.query
                    })
                    .indexOf(e) > -1
                )
              }),
              searchType: T,
              searchFilters: D,
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
        A = r('sYRn'),
        F = r('3XMw'),
        L = r.n(F),
        q = r('oQhu'),
        M = r('2G3J'),
        H = r('yoO3'),
        B = r('7nmT'),
        U = r.n(B),
        z = r('5FtR'),
        N = r('Rp9C'),
        V = r('7JQg'),
        X = r('L7to'),
        K = (r('muX9'), L.a.a8399d5b, L.a.ge893905, r('mjJ+')),
        Q = r('3A2y'),
        W = 'searchFilters-overflow',
        J = 'advancedSearch-overflow',
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
          return h()(this, r)
        }
      }
      var ie = L.a.h1ef00db,
        se = L.a.aea62567,
        le = L.a.j622effd,
        ue = L.a.h4912b5e,
        pe = L.a.b9bc69ca,
        he = (function (e) {
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
                    s.push({ Icon: $.a, testID: W, text: se, link: { pathname: '/i/search_filters', query: o.query } }),
                  s.push({
                    Icon: ee.a,
                    testID: J,
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
                          text: pe,
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
                  return b.createElement(K.a, { items: this._getActionItems(), onCloseRequested: this.props.onClose })
                },
              },
            ]),
            r
          )
        })(b.Component),
        de = r('VS6U'),
        fe = r('LsPn'),
        ye = 'searchBoxOverflowButton',
        ve = r('aITJ'),
        be = r('MWbm'),
        Se = r('v6aA'),
        me = L.a.f9d35b98,
        ge = L.a.ha925ad3,
        Oe = L.a.h0a9931b,
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
        ke = function (e, t) {
          return 'POP' === t.history.action
        },
        Te = function (e, t) {
          var r,
            n = t.location
          return null == n || null === (r = n.state) || void 0 === r ? void 0 : r.urtEndpointOptions
        },
        xe = Object(w.a)()
          .propsFromState(function () {
            return { dataLookupId: _.j, isBackNavigation: ke, searchMode: _.k, urtEndpointOptions: Te }
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
        De = r('s14A'),
        Ie = r('dwig'),
        Ae = r('3X8/'),
        Fe = r('0+qk'),
        Le = r('Ds5i'),
        qe = r.n(Le),
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
      function Ne(e) {
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
      function Ve(e) {
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
          return h()(this, r)
        }
      }
      var Xe = function (e) {
          return e && qe()(e) ? { defaultText: ' '.concat(e), positionCursorAtBeginning: !0 } : void 0
        },
        Ke = (function (e) {
          u()(r, e)
          var t = Ve(r)
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
                  return Ne(Ne({}, e), {}, { section: a })
                }),
              ),
              v()(s()(e), '_getMemoizedComposeLocationState', Object(q.a)(Xe)),
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
                  return b.createElement(
                    Ie.a,
                    { component: De.a, fab: this._renderFloatingComposeButton(), shouldRenderFab: !a },
                    b.createElement(
                      V.b,
                      { namespace: this._getTimelineScribeNamespace() },
                      b.createElement(Me.a, {
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
                  return b.createElement(Fe.a, { getLocationState: this._getFabState, history: e })
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
                  }).catch(r(Ae.a))
                },
              },
            ]),
            r
          )
        })(b.Component)
      v()(Ke, 'contextType', Se.a)
      var Qe = Object(V.c)({ page: 'search', section: 'universal' })(xe(Ke))
      function We(e, t) {
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
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? We(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : We(Object(r)).forEach(function (t) {
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
          return h()(this, r)
        }
      }
      var Ge = L.a.eb0ecd1d,
        Ye = L.a.cceeb26b,
        $e = L.a.i66136a9,
        et = L.a.d601fc2f,
        tt = L.a.g2fd3205,
        rt = L.a.ac4fb0f3,
        nt = L.a.a9ae1e78,
        at = L.a.bb967f9e,
        ct = L.a.aea62567,
        ot = L.a.gfcfbf8b,
        it = L.a.a4645d91,
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
                    search_details: Je(
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
                  ? b.createElement(M.a, { onClick: e._handleOverflowMenuClick, renderMenu: e._renderMenu, testID: ye })
                  : void 0
              }),
              v()(s()(e), '_renderMenu', function (t) {
                var r = e.props,
                  n = r.history,
                  a = r.isQueryAlreadySaved,
                  c = r.location,
                  o = !!e.context.loggedInUserId
                return b.createElement(Ce.a, null, function (r) {
                  var i = r.windowWidth,
                    s = S.a.isTwoColumnLayout(i)
                  return b.createElement(he, {
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
                var s = N.a.forSavedSearchResult(c, i)
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
                  var u = N.a.forSavedSearchResult(l.query, s)
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
                return b.createElement(
                  be.a,
                  null,
                  b.createElement(Qe, t),
                  r
                    ? b.createElement(A.a, {
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
                return b.createElement(
                  m.a,
                  { withSearchBox: !1, withTrends: !!a },
                  b.createElement(
                    be.a,
                    null,
                    b.createElement(je.b, { text: ct }),
                    b.createElement(X.b, { history: r, key: n.key, location: n }),
                  ),
                )
              }),
              v()(s()(e), '_renderModesBar', function () {
                var t = e.props.analytics,
                  r = t.contextualScribeNamespace,
                  n = e._getModeLinks().map(function (e) {
                    var n = e.isActive,
                      a = e.label,
                      c = e.link,
                      o = e.modeType
                    return {
                      isActive: n,
                      key: o,
                      to: c,
                      label: a,
                      onClick: function () {
                        n() || t.scribe(Je(Je({}, r), {}, { element: 'search_filter_'.concat(o), action: 'navigate' }))
                      },
                    }
                  })
                return b.createElement(Pe.a, { links: n })
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
                    p = !!c,
                    h = p ? Ye({ query: c }) : Ge,
                    d = {
                      history: r,
                      location: n,
                      query: c,
                      querySrc: o,
                      searchFilters: i,
                      searchFocused: s,
                      vertical: l,
                      shouldClearTimelineCache: u,
                    },
                    f = this._renderPrimaryContent(d),
                    y = { initialValue: c, mode: a, onSubmit: this._handleSearchBoxSubmit, searchFilters: i }
                  return p
                    ? b.createElement(
                        V.b,
                        { data: this._getScribeData(c, o, i, a, l) },
                        b.createElement(
                          H.a,
                          null,
                          null,
                          b.createElement(Ce.a, null, function (t) {
                            var n = t.windowWidth,
                              a = S.a.isTwoColumnLayout(n),
                              o = e._renderRightControl({ isTwoColumn: a, searchFocused: s })
                            return b.createElement(de.a, {
                              backLocation: '/explore',
                              composeOptions: Xe(c),
                              documentTitle: h,
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
                            b.createElement(fe.a, { leftText: nt, onLeftClick: this._handleSoftLeftClick }),
                        ),
                      )
                    : this._searchHomePageEnabled && !this._loggedInUserId
                    ? b.createElement(z.a, { to: '/' })
                    : b.createElement(z.a, { to: '/explore' })
                },
              },
            ]),
            r
          )
        })(b.Component)
      v()(lt, 'contextType', Se.a)
      var ut = I(lt)
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
        return K
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
        p = r('N+ot'),
        h = r.n(p),
        d = r('AuHH'),
        f = r.n(d),
        y = r('KEM+'),
        v = r.n(y),
        b = (r('z84I'), r('ho0z'), r('MvUL'), r('KqXw'), r('jQ3i'), r('x4t0'), r('vrRf'), r('uFXj'), r('ERkP')),
        S = r('3XMw'),
        m = r.n(S),
        g = r('RxYA'),
        O = (r('yH/f'), Object.freeze({ People: 'People', Location: 'Location' })),
        E = 'searchFiltersAdvancedSearch',
        _ = r('MWbm'),
        w = r('Irs7'),
        C = r('v6aA'),
        j = r('fyvP'),
        P = r('rC8y'),
        R = r('rHpw'),
        k = r('3A2y'),
        T = r('Zkey')
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
      function D(e) {
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
      function I(e) {
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
          return h()(this, r)
        }
      }
      var A = m.a.j622effd,
        F = m.a.g2fd3205,
        L = m.a.defb4aa9,
        q = m.a.af293dc2,
        M = m.a.jaaa8984,
        H = m.a.i5045e73,
        B = m.a.h2388753,
        U = 'anyone',
        z = 'youFollow',
        N = 'anywhere',
        V = 'nearYou',
        X = [
          {
            label: F,
            name: O.People,
            options: [
              { label: L, value: U },
              { label: q, value: z },
            ],
          },
          {
            label: M,
            name: O.Location,
            options: [
              { label: H, value: N },
              { label: B, value: V },
            ],
          },
        ],
        K = (function (e) {
          u()(r, e)
          var t = I(r)
          function r(e, n) {
            var c
            a()(this, r),
              (c = t.call(this, e, n)),
              v()(s()(c), '_renderFilters', function () {
                return X.map(function (e, t) {
                  return b.createElement(
                    _.a,
                    { key: e.name, style: t > 0 && Q.paddingTop },
                    b.createElement(j.a, {
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
                    var o = { lf: t === V ? 'on' : void 0, pf: 'on' === n.pf ? n.pf : void 0 }
                    c._executeSearch(o, 'location')
                }
              }),
              v()(s()(c), '_getAdvancedSearchLink', function () {
                var e = c.props.location
                return { pathname: '/search-advanced', query: D({}, Object(k.a)(e.query, ['q', 'src'])) }
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
                n.replace({ pathname: o, query: Object(T.a)(D(D({}, a.query), e)) })
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
              u = i && i.lf ? V : N
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
                  return b.createElement(
                    _.a,
                    null,
                    b.createElement(_.a, { style: Q.content }, this._renderFilters()),
                    b.createElement(
                      _.a,
                      { style: e && Q.bottomBorder, testID: E },
                      b.createElement(P.a, {
                        link: this._getAdvancedSearchLink(),
                        onPress: this._handleFooterPress,
                        text: A,
                      }),
                    ),
                    t ? b.createElement(g.a, { onClose: this._handleHideLoginSheet }) : null,
                  )
                },
              },
            ]),
            r
          )
        })(b.Component)
      v()(K, 'contextType', C.a), v()(K, 'defaultProps', { withBottomBorder: !1 })
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
      t.b = Object(w.a)(K, { page: 'search_filters' })
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
            return Promise.all([r.e(0), r.e(330)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: s.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([r.e(0), r.e(332)]).then(r.bind(null, 'hX2d'))
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
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        p = r('N+ot'),
        h = r.n(p),
        d = r('AuHH'),
        f = r.n(d),
        y = r('KEM+'),
        v = r.n(y),
        b = (r('2G9S'), r('ERkP')),
        S = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ezF+')),
        m = r('QIgh'),
        g = r('8UdT'),
        O = r('iu0J'),
        E = r('zgaL'),
        _ = r('PH3B'),
        w =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(217).then(r.bind(null, 'sc5C'))
            },
            loaderKey: 'relatedSearchDefaultLoader',
            strategy: r('XBtf').a.Critical,
          }),
        C = S.e(w),
        j = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        P = r('VPAj'),
        R = r('zh9S'),
        k = r('X04g'),
        T = r('u3ZE'),
        x = r('MWbm'),
        D = r('t62R'),
        I = r('rHpw'),
        A = r('3XMw'),
        F = r.n(A)
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
          var r,
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var q = F.a.je5502ea,
        M = F.a.bc4628a0,
        H = function (e) {
          return b.createElement(D.b, { weight: 'bold' }, e)
        },
        B = (function (e) {
          u()(r, e)
          var t = L(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.suggestion,
                    t = { pathname: '/search', query: { q: e, src: T.a.SpellingSuggestionClick } }
                  return b.createElement(
                    D.b,
                    { link: t, style: N.root },
                    b.createElement(F.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, H(e)),
                  )
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        U = (function (e) {
          u()(r, e)
          var t = L(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.original,
                    n = e.suggestion,
                    a = { pathname: '/search', query: { q: n, src: T.a.SpellingCorrectionClick } }
                  return b.createElement(
                    x.a,
                    { style: N.root },
                    b.createElement(D.b, { weight: 'bold' }, M({ suggestion: n })),
                    b.createElement(
                      D.b,
                      { link: a, onClick: t },
                      b.createElement(F.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, H(r)),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        z = (function (e) {
          u()(r, e)
          var t = L(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.original,
                    n = e.suggestion,
                    a = { pathname: '/search', query: { q: r, src: T.a.SpellingExpansionRevertClick } }
                  return b.createElement(
                    x.a,
                    { style: N.root },
                    b.createElement(D.b, { weight: 'bold' }, q({ suggestion: n })),
                    b.createElement(
                      D.b,
                      { link: a, onClick: t },
                      b.createElement(F.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, H(r)),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        N = I.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        })
      function V(e, t) {
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
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? V(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : V(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var K,
        Q = function (e) {
          return function (t) {
            return {
              item_type: k.a.ItemType.SEARCH,
              name: 'spelling_'.concat(e),
              description: t.content.spellingResult.text,
              position: 0,
            }
          }
        },
        W = function (e) {
          return {
            items: [
              {
                search_details: { query: e.content.originalQuery },
                query_details: { query_item: e.content.spellingResult.text },
              },
            ],
          }
        },
        J = function (e) {
          var t = e.actions.scribe,
            r = e.scribeData
          return t(X(X({}, e.scribeNamespace), {}, { action: 'impression' }), r)
        },
        Z = S.g({
          bindActions: function () {
            return { scribe: R.c }
          },
          component: z,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Q('expansion'),
          selectData: Object(P.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              a = r.content
            return {
              onClick: function () {
                return t(X(X({}, n), {}, { element: 'expansion_revert', action: 'search' }), W(r))
              },
              original: a.originalQuery,
              suggestion: a.spellingResult.text,
            }
          },
          onImpression: J,
        }),
        G = S.g({
          bindActions: function () {
            return { scribe: R.c }
          },
          component: U,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Q('replacement'),
          selectData: Object(P.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              a = r.content
            return {
              onClick: function () {
                return t(X(X({}, n), {}, { element: 'replacement_revert', action: 'search' }), W(r))
              },
              original: a.originalQuery,
              suggestion: a.spellingResult.text,
            }
          },
          onImpression: J,
        }),
        Y = S.g({
          component: B,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Q('suggestion'),
          selectData: Object(P.a)({}),
          createProps: function (e) {
            return { suggestion: e.entry.content.spellingResult.text }
          },
          onImpression: J,
        }),
        $ = S.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((K = {}), v()(K, j.Expand, Z), v()(K, j.Replace, G), v()(K, j.Suggest, Y), K),
        })
      function ee(e, t) {
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
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ee(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var re = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return te(
            te(
              {},
              Object(m.a)({
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
                v()(t, g.b.News, _.a),
                v()(t, g.b.EventSummary, Object(O.a)({ errorContext: 'SEARCH_SCREEN', shouldStoreTypeaheadItem: r })),
                v()(t, g.b.RelatedSearch, C),
                v()(t, g.b.FollowSearch, S.e(S.a())),
                v()(t, g.b.FollowSearchAction, S.e(S.a())),
                v()(t, g.b.Place, S.e(S.a())),
                v()(t, g.b.MomentAnnotation, E.a),
                v()(t, g.b.Spelling, $),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        ne = r('3X8/'),
        ae = r('oQhu'),
        ce = r('EUHl'),
        oe = r('7BdX'),
        ie = r('fTQJ'),
        se = r('i6OR'),
        le = r('FIs5'),
        ue = r('v6aA')
      function pe(e) {
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
          return h()(this, r)
        }
      }
      var he = F.a.c09de2d4,
        de = b.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          b.createElement(D.b, { link: '/settings/search' }, F.a.d2918e88),
        ),
        fe = F.a.ae111c99,
        ye = (function (e) {
          u()(r, e)
          var t = pe(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              v()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case k.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case k.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case k.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              v()(s()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  a = t.searchFilters,
                  c = t.searchMode,
                  o = t.urtEndpointOptions,
                  i = t.vertical
                return e._getMemoizedModule(r, n, c, a, i, o)
              }),
              v()(s()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || b.createElement(le.a, { header: fe({ query: n }), message: de })
              }),
              v()(
                s()(e),
                '_getMemoizedModule',
                Object(ae.a)(function (e, t, r, n, a, c) {
                  return Object(se.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: a,
                    urtEndpointOptions: c,
                  })
                }),
              ),
              v()(
                s()(e),
                '_getMemoizedEntryConfiguration',
                Object(ae.a)(function (t) {
                  return re({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  return b.createElement(ie.a, {
                    apiErrorHandlerMap: ne.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: ce.a.CLIENT,
                    prerollDisplayLocation: oe.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: he,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(b.Component)
      v()(ye, 'contextType', ue.a)
      t.a = ye
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
        p = ' near:me',
        h =
          ((n = {}),
          c()(n, i.c.Top, {}),
          c()(n, i.c.Live, { tweet_search_mode: i.c.Live }),
          c()(n, i.c.User, { result_filter: i.c.User }),
          c()(n, i.c.Image, { result_filter: i.c.Image }),
          c()(n, i.c.Video, { result_filter: i.c.Video }),
          n),
        d = function (e) {
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
          f = d(a),
          y = c && c.peopleFilter ? 'searcher_follows' : void 0,
          v = y ? '-pf' : '',
          b = c && c.locationFilter && !t.includes(p) ? ''.concat(t).concat(p) : t,
          S = ''.concat(u).concat(b, '-').concat(n).concat(f).concat(v)
        return Object(s.a)({
          timelineId: S,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == l ? void 0 : l.requestParams,
              { q: b, social_filter: y, vertical: o },
              h[n],
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
          return h
        })
      var n = r('97Jx'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('jHSc'),
        i = r('3XMw'),
        s = r.n(i),
        l = r('L7to'),
        u = r('Irs7'),
        p = s.a.aea62567
      function h(e) {
        var t = e.history,
          r = e.location
        return c.createElement(
          o.b,
          { documentTitle: p, history: t, title: p },
          c.createElement(l.a, a()({}, e, { key: r.key, withBottomBorder: !0 })),
        )
      }
      t.default = Object(u.a)(h, { page: 'search_filters' })
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
        p = r('Ssj5'),
        h = r('SrIh'),
        d = r('RqPI')
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
        b = { fetchStatus: u.a.NONE, savedSearches: [] },
        S = Object.freeze({
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
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case S.SUCCESS:
            var r = t.payload,
              n = Array.isArray(r)
            return (
              n ||
                Object(h.a)('Saved search results are not type array', { extra: { savedSearchResultsType: s()(r) } }),
              y(y({}, e), {}, { fetchStatus: u.a.LOADED, savedSearches: n && r ? r : [] })
            )
          case S.FAILURE:
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
      p.a.register(o()({}, v, O))
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
            return Object(d.l)(n)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(n) === u.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, r) {
                    var n = r.api
                    return Object(l.b)(e, { request: n.SavedSearches.fetch, params: {} })({
                      actionTypes: S,
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
              return r.e(211).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
