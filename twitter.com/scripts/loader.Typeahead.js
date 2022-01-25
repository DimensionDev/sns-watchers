;(window.webpackJsonp = window.webpackJsonp || []).push([
  [179],
  {
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
    '72nz': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'SearchBoxContainer', function () {
          return St
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('97Jx'),
        a = r.n(n),
        c = r('VrFO'),
        o = r.n(c),
        s = r('Y9Ll'),
        i = r.n(s),
        u = r('1Pcy'),
        l = r.n(u),
        d = r('5Yy7'),
        h = r.n(d),
        p = r('N+ot'),
        f = r.n(p),
        y = r('AuHH'),
        m = r.n(y),
        v = r('KEM+'),
        S = r.n(v),
        b = (r('hBvt'), r('ho0z'), r('WNMA'), r('KqXw'), r('MvUL'), r('ERkP')),
        _ = r('+Kfv'),
        g = r('lnti'),
        w = r('wtjx'),
        O = r('rxPX'),
        I = Object(O.a)()
          .propsFromActions(function () {
            return { addQuery: w.a }
          })
          .withAnalytics({ component: 'search_box' }),
        R = r('Hw0q'),
        E = r('3XMw'),
        C = r.n(E),
        D = r('8jkQ'),
        k = r('u3ZE'),
        x = r('rRIm'),
        j = r('Rp9C'),
        T = r('RhWx'),
        P = r.n(T),
        A =
          (r('z84I'),
          r('vrRf'),
          r('2G9S'),
          r('5BYb'),
          r('jQ3i'),
          r('x4t0'),
          r('M+/F'),
          r('wFPu'),
          r('vfdX'),
          r('hqKg')),
        U = r('3IPs'),
        F = r('M0jS'),
        L = r('G6rE'),
        H = r('k49u'),
        N = r('J4ZH'),
        M = r('0KEI'),
        q = r('v4XE'),
        B = r('kGix')
      function K(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                S()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Q = function (e) {
          return (
            Object(H.c)(e, H.a.GenericUserNotFound) ||
            Object(H.c)(e, H.a.OtherUserSuspended) ||
            Object(H.c)(e, H.a.AddressBookLookupNotFound)
          )
        },
        W = Object(O.a)()
          .propsFromState(function () {
            var e = Object(A.createSelector)(w.g, L.e.selectFetchStatuses, function (e, t) {
                var r = Object(g.a)(
                  e.map(function (e) {
                    var r,
                      n = null === (r = e.user) || void 0 === r ? void 0 : r.id
                    return n && t[n] ? { id: n, fetchStatus: t[n] } : void 0
                  }),
                )
                return Object(N.a)(r, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(A.createSelector)(e, function (e) {
                return (e[B.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              r = Object(A.createSelector)(e, L.e.selectErrors, function (e, t) {
                return (e[B.a.FAILED] || [])
                  .filter(function (e) {
                    var r = e.id
                    return Q(t[r] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              n = Object(A.createSelector)(e, L.e.selectErrors, function (e, t) {
                var r = (e[B.a.FAILED] || []).filter(function (e) {
                  var r = e.id
                  return !Q(t[r] || {})
                })
                return (e[B.a.LOADING] || []).length > 0
                  ? B.a.LOADING
                  : (e[B.a.LOADED] || []).length > 0
                  ? B.a.LOADED
                  : r.length > 0
                  ? B.a.FAILED
                  : B.a.NONE
              }),
              a = Object(A.createSelector)(w.g, function (e) {
                return e.map(function (e) {
                  return V(V({}, e), {}, { category: U.b.RecentSearch })
                })
              }),
              c = Object(A.createSelector)(q.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: U.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: w.e,
              recentSearches: a,
              usersFetchStatus: n,
              invalidRecentSearchUserIds: r,
              failedRecentSearchUserIds: t,
              savedSearches: c,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              r = e.invalidRecentSearchUserIds,
              n = e.isRecentSearchDataLoaded,
              a = e.recentSearches,
              c = e.savedSearches,
              o = e.usersFetchStatus,
              s = !a.filter(function (e) {
                var t = e.user
                return t && r.indexOf(t.id) < 0
              }).length,
              i = o !== B.a.LOADING && n && s ? B.a.LOADED : o
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: r,
              recentSearches: a,
              fetchStatus: i,
              savedSearches: c,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: w.b,
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: q.a,
              fetchRecentSearchesIfNeeded: w.c,
              fetchSavedSearchesIfNeeded: q.b,
              fetchUsersIfNeeded: L.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: F.b.fetchManyIfNeeded,
              removeQuery: w.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        z = r('sYRn'),
        G = r('v//M'),
        Z = r('7nmT'),
        X = r.n(Z),
        Y = (r('jQ/y'), r('m3Bd')),
        J = r.n(Y),
        $ = r('hOZg'),
        ee = r('5T6p'),
        te = r('MWbm'),
        re = r('/yvb'),
        ne = r('rHpw')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var ce = C.a.e68b09b4,
        oe = (function (e) {
          h()(r, e)
          var t = ae(r)
          function r() {
            return o()(this, r), t.apply(this, arguments)
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    r = e.onRemove,
                    n = J()(e, ['id', 'onRemove'])
                  return t
                    ? b.createElement(
                        te.a,
                        { style: se.root },
                        b.createElement(ee.a, n),
                        b.createElement(re.a, {
                          accessibilityLabel: ce,
                          icon: b.createElement($.a, null),
                          onPress: r,
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
                    r = e.image,
                    n = e.supportText,
                    a = e.title
                  return {
                    category: U.b.RecentSearch,
                    query: t,
                    recentSearchType: U.a.Event,
                    queryMetadata: { id: t, image: r, title: a, supportText: n },
                  }
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        se = ne.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        ie = oe,
        ue = r('j7Bv'),
        le = r('5mJL'),
        de = r('t62R'),
        he = r('EHV7')
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var fe = b.createElement($.a, null),
        ye = C.a.e68b09b4,
        me = (function (e) {
          h()(r, e)
          var t = pe(r)
          function r() {
            return o()(this, r), t.apply(this, arguments)
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    r = e.id,
                    n = e.name,
                    a = e.onRemove,
                    c = e.withNewTypeaheadUI
                  if (!r) return null
                  var o = c ? 'xxxLarge' : 'xLarge',
                    s = b.createElement(ue.a, { Icon: he.a, color: 'primary', size: o, style: ve.searchIcon })
                  return b.createElement(
                    le.a,
                    { avatarCell: s, avatarSize: o, cellStyle: ve.bodyColumn },
                    b.createElement(
                      te.a,
                      null,
                      b.createElement(de.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, n),
                      b.createElement(de.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    b.createElement(re.a, {
                      accessibilityLabel: ye,
                      icon: fe,
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
                    r = e.id,
                    n = e.name
                  return r
                    ? {
                        category: U.b.RecentSearch,
                        query: r,
                        recentSearchType: U.a.Topic,
                        queryMetadata: { id: r, name: n, description: t },
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(b.Component),
        ve = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        Se = function (e, t) {
          return L.e.select(e, t.id)
        },
        be = function (e, t) {
          return Object(F.c)(e, t.id)
        },
        _e = Object(O.a)().propsFromState(function () {
          return { user: Se, userSpace: be }
        }),
        ge = r('v6aA'),
        we = r('IMA+')
      function Oe(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var Ie = b.createElement($.a, null),
        Re = C.a.e68b09b4,
        Ee = C.a.fd06b02f,
        Ce = (function (e) {
          h()(r, e)
          var t = Oe(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(l()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              S()(l()(e), '_handleClick', function () {
                var t = e.props,
                  r = t.index,
                  n = t.onItemClick,
                  a = e.searchItemData
                a && n(a, r)
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.style,
                    n = e.user,
                    a = e.userSpace,
                    c = e.withNewTypeaheadUI,
                    o = this.context.featureSwitches
                  if (!n) return null
                  var s = a && o.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? a : void 0
                  s && (s.accessibilityLabel = Ee({ screenName: n.screen_name }))
                  var i = b.createElement(re.a, {
                    accessibilityLabel: Re,
                    icon: Ie,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return b.createElement(we.a, {
                    avatarSize: 'xLarge',
                    avatarUri: n.profile_image_url_https,
                    decoration: i,
                    displayMode: c ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: n.protected,
                    isVerified: n.verified,
                    name: n.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: s,
                    screenName: n.screen_name,
                    style: r,
                    userId: n.id_str,
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
                        category: U.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: U.a.User,
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(b.Component)
      S()(Ce, 'contextType', ge.a)
      var De = _e.forwardRef(Ce),
        ke = r('oQhu'),
        xe = r('hiGS'),
        je = r('VwDm')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var Pe = b.createElement($.a, null),
        Ae = b.createElement(xe.a, null),
        Ue = Object(ke.a)(function (e) {
          return e === U.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Fe = Object(ke.a)(function (e) {
          return e === U.b.SavedSearch ? Ae : Pe
        }),
        Le = (function (e) {
          h()(r, e)
          var t = Te(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(l()(e), '_getButtonType', function () {
                var t = e.props.category
                return Ue(t)
              }),
              S()(l()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Fe(t)
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.query,
                    n = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    a = b.createElement(ue.a, { Icon: je.a, color: 'neutral', size: n, style: He.searchIcon })
                  return b.createElement(
                    le.a,
                    { avatarCell: a, avatarSize: n, cellStyle: He.bodyColumn },
                    b.createElement(de.b, { numberOfLines: 1, withHashflags: !0 }, r),
                    b.createElement(re.a, {
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
                    recentSearchType: t === U.b.RecentSearch ? U.a.Keyword : void 0,
                  }
                },
              },
            ]),
            r
          )
        })(b.Component),
        He = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        Ne = Le,
        Me = r('htQn')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var Be = (function (e) {
        h()(r, e)
        var t = qe(r)
        function r(e, n) {
          var a
          return (
            o()(this, r),
            (a = t.call(this, e, n)),
            S()(l()(a), '_renderSearchItem', function () {
              var e = a.props,
                t = e.index,
                r = e.item,
                n = e.onItemClick
              return r.keyword
                ? b.createElement(Ne, {
                    category: r.category,
                    onRemove: a._handleOnRemove,
                    query: r.keyword.query,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : r.user
                ? b.createElement(De, {
                    id: r.user.id || '',
                    index: t,
                    onItemClick: n,
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    style: Ke.itemPadding,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : r.topic
                ? b.createElement(me, {
                    description: r.topic.description || '',
                    id: r.topic.id,
                    name: r.topic.name || '',
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : r.event
                ? b.createElement(ie, {
                    id: r.event.id,
                    image: r.event.image || { url: '', height: 0, width: 0 },
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    supportText: r.event.supportText || '',
                    title: r.event.title || '',
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : null
            }),
            S()(l()(a), '_handleItemRef', function (e) {
              a._itemRef = e
            }),
            S()(l()(a), '_handleOnRemove', function (e) {
              var t = a.props,
                r = t.index,
                n = t.item
              ;(0, t.onRemoveQuery)(n, r), e.stopPropagation()
            }),
            S()(l()(a), '_handleOnClick', function () {
              var e = a.props,
                t = e.index,
                r = e.item,
                n = e.onItemClick
              r.user || (a.searchItemData && n(a.searchItemData, t))
            }),
            (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
              'responsive_web_account_search_readability_enabled',
            )),
            a
          )
        }
        return (
          i()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  r = e.item,
                  n = e.testID
                return b.createElement(
                  _.a,
                  { viewType: 'search_item' },
                  b.createElement(
                    Me.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: { selected: !!t },
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [Ke.root, t && Ke.focused, !(null != r && r.user) && Ke.itemPadding],
                      testID: n,
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
          r
        )
      })(b.Component)
      S()(Be, 'contextType', ge.a)
      var Ke = ne.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        Ve = Be,
        Qe = r('4ZbN'),
        We = r('eb3s'),
        ze = r('MXDK')
      function Ge(e, t) {
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
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ge(Object(r), !0).forEach(function (t) {
                S()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ge(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function Xe(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var Ye = C.a.ee295fbe,
        Je = { headline: C.a.f45c425f, text: C.a.caae4dd9, confirmButtonLabel: C.a.dbd5d40f },
        $e = C.a.a8d68f61,
        et = C.a.c6530778,
        tt = C.a.e047b8fa,
        rt = ['user', 'keyword'],
        nt = (function (e) {
          h()(r, e)
          var t = Xe(r)
          function r(e, n) {
            var a
            o()(this, r),
              (a = t.call(this, e, n)),
              S()(l()(a), '_withNewTypeaheadUI', !1),
              S()(l()(a), '_getRecentSearchItems', function () {
                var e = a.props,
                  t = e.failedRecentSearchUserIds,
                  r = e.recentSearches,
                  n = a.state.allowedRecentSearchItems,
                  c = r
                    .filter(function (e) {
                      var r = e.user
                      return !r || t.indexOf(r.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return n.includes(e)
                      })
                    })
                return c.length > 15 ? c.slice(0, 15) : c
              }),
              S()(l()(a), '_render', function () {
                var e = a.props,
                  t = e.domId,
                  r = e.savedSearches,
                  n = 0 === a._getNumOfSearchItems(),
                  c = a._getRecentSearchItems()
                return n
                  ? b.createElement(
                      te.a,
                      { style: at.emptyState, testID: Qe.a.typeaheadEmptySearch },
                      b.createElement(de.b, { align: 'center', color: 'gray700' }, Ye),
                    )
                  : b.createElement(
                      te.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      c.length > 0
                        ? b.createElement(
                            b.Fragment,
                            null,
                            b.createElement(
                              te.a,
                              { style: at.header, testID: Qe.a.typeaheadRecentSearchesHeader },
                              b.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, $e),
                              b.createElement(
                                re.a,
                                { onPress: a._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                tt,
                              ),
                            ),
                            c.map(function (e, t) {
                              return a._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      r.length > 0
                        ? b.createElement(
                            b.Fragment,
                            null,
                            b.createElement(
                              te.a,
                              {
                                accessibilityHidden: !0,
                                style: [at.header, at.borderTop],
                                testID: Qe.a.typeaheadSavedSearchesHeader,
                              },
                              b.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, et),
                            ),
                            a._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              S()(l()(a), '_renderRecentSearchItem', function (e, t) {
                var r = a.props.ariaDescendantId,
                  n = a.state.focusIndex === t
                return b.createElement(Ve, {
                  domId: n ? r : void 0,
                  index: t,
                  item: e,
                  key: a._chooseKeyType(e, t),
                  onItemClick: a._handleOnItemClick,
                  onRemoveQuery: a._handleRemoveQuery,
                  ref: n ? a._setFocusedItemRef : void 0,
                  testID: Qe.a.typeaheadRecentSearchesItem,
                })
              }),
              S()(l()(a), '_chooseKeyType', function (e, t) {
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
              S()(l()(a), '_renderSavedSearches', function () {
                var e = a.props,
                  t = e.ariaDescendantId,
                  r = e.savedSearches,
                  n = a.state.focusIndex,
                  c = a._getRecentSearchItems(),
                  o = P()(r)
                return (
                  o.reverse(),
                  b.createElement(
                    te.a,
                    { testID: Qe.a.typeaheadSavedSearchesContainer },
                    o.map(function (e, r) {
                      var o = n === r + c.length
                      return b.createElement(Ve, {
                        domId: o ? t : void 0,
                        index: r,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: a._handleOnItemClick,
                        onRemoveQuery: a._handleRemoveQuery,
                        ref: o ? a._setFocusedItemRef : void 0,
                        testID: Qe.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              S()(l()(a), '_getNumOfSearchItems', function () {
                var e = a.props.savedSearches,
                  t = a._getRecentSearchItems()
                return e.length + t.length
              }),
              S()(l()(a), '_handleUsersRetry', function () {
                a._fetchUsersDetailsIfNeeded()
              }),
              S()(l()(a), '_fetchUsersDetailsIfNeeded', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchUsersIfNeeded,
                  n = e.fetchUsersPresenceIfNeeded,
                  c = e.invalidRecentSearchUserIds,
                  o = e.recentSearches,
                  s = a.context,
                  i = s.featureSwitches,
                  u = s.loggedInUserId,
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
                  })(o, c)
                r(l).catch(t({})),
                  u && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && n(l).catch(t({}))
              }),
              S()(l()(a), '_handleRemoveQuery', function (e, t) {
                var r = a.props,
                  n = r.analytics,
                  c = r.removeQuery
                switch (e.category) {
                  case U.b.RecentSearch:
                    var o = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    c(o), a._resetFocus()
                    var s = j.a.forRecentSearchResult(o, t),
                      i = a._handleRemoveAction(e)
                    s && n.scribe({ action: i, data: { items: [s] } })
                    break
                  case U.b.SavedSearch:
                    a.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              S()(l()(a), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              S()(l()(a), '_handleClearAllClick', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              S()(l()(a), '_handleOnClearAllConfirm', function () {
                var e = a.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              S()(l()(a), '_handleOnClearAllCancel', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              S()(l()(a), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = a.props,
                  t = e.analytics,
                  r = e.deleteSavedSearch,
                  n = e.savedSearches,
                  c = a.state.savedSearchIdToDelete,
                  o = n.findIndex(function (e) {
                    return e.savedSearchId === c
                  }),
                  s = n[o]
                if (c) {
                  r(c)
                  var i = s && j.a.forSavedSearchResult(s.keyword.query, o)
                  i && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [i] } })
                }
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(l()(a), '_handleOnDeleteSavedSearchCancel', function () {
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(l()(a), '_handleOnItemClick', function (e, t) {
                var r = a.props,
                  n = r.onDismiss
                ;(0, r.onItemClick)(e, t), a._scribeClick(e, t), n && n()
              }),
              S()(l()(a), '_scribeRecentSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  r = e.recentSearches
                if (r && r.length) {
                  var n = Object(g.a)(
                    r.map(function (e, t) {
                      return j.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: n } })
                }
              }),
              S()(l()(a), '_scribeSavedSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  r = e.savedSearches
                if (r && r.length) {
                  var n = Object(g.a)(
                    r.map(function (e, t) {
                      return j.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: n } })
                }
              }),
              S()(l()(a), '_scribeClick', function (e, t) {
                var r = a.props.analytics
                switch (e.category) {
                  case U.b.SavedSearch:
                    var n = j.a.forSavedSearchResult(e.query, t)
                    r.scribe({ element: 'typeahead', action: 'click', data: { targets: [n] } })
                    break
                  case U.b.RecentSearch:
                    var c
                    e.recentSearchType &&
                      (c =
                        e.recentSearchType === U.a.User
                          ? { user: { type: U.a.User, id: e.query } }
                          : e.recentSearchType === U.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: Ze(Ze({}, e.queryMetadata), {}, { type: U.a.Event, id: e.query }) }
                          : e.recentSearchType === U.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: Ze(Ze({}, e.queryMetadata), {}, { type: U.a.Topic, id: e.query }) }
                          : { keyword: { type: U.a.Keyword, query: e.query } })
                    var o = c && j.a.forRecentSearchResult(c, t)
                    o && r.scribe({ action: 'click', data: { targets: [o] } })
                }
              }),
              S()(l()(a), '_setFocusedItemRef', function (e) {
                ;(a._focusedItemRef = e),
                  e &&
                    a._shouldScrollToFocusedItem &&
                    (Object(ze.c)(a._getScrollParent(), a._getFocusedItem()), (a._shouldScrollToFocusedItem = !1))
              }),
              S()(l()(a), 'hasFocusedItem', function () {
                return a._getNumOfSearchItems() > 0
              }),
              S()(l()(a), 'selectFocusedItem', function () {
                if (a.hasFocusedItem()) {
                  var e = a._focusedItemRef && a._focusedItemRef.searchItemData
                  e && a._handleOnItemClick(e, a.state.focusIndex)
                }
              }),
              S()(l()(a), '_setFocusIndex', function (e, t) {
                var r = a.props.onItemFocusChanged
                ;(a._shouldScrollToFocusedItem = t), a.setState({ focusIndex: e }), r && r()
              }),
              S()(l()(a), '_resetFocus', function () {
                a._setFocusIndex(-1)
              }),
              S()(l()(a), 'focusNext', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e + 1 >= t ? 0 : e + 1
                  a._setFocusIndex(r, !0)
                }
              }),
              S()(l()(a), 'focusPrevious', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e - 1 < 0 ? t - 1 : e - 1
                  a._setFocusIndex(r, !0)
                }
              })
            var c,
              s,
              i = a.context.featureSwitches
            return (
              (a.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((c = !0 === i.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (s = !0 === i.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(rt, [c ? 'topic' : '', s ? 'event' : ''])),
              }),
              (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              a
            )
          }
          return (
            i()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    r = e.fetchRecentSearchesIfNeeded,
                    n = e.fetchSavedSearchesIfNeeded,
                    a = e.recentSearches,
                    c = e.savedSearches
                  r(),
                    n().catch(t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((a && a.length) || (c && c.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.recentSearches,
                    n = t.savedSearches
                  e.recentSearches !== r &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== n && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    r = e.style,
                    n = this.state,
                    a = n.shouldShowClearAllConfirmationSheet,
                    c = n.shouldShowDeleteSavedSearchConfirmation
                  return b.createElement(
                    te.a,
                    { style: r },
                    b.createElement(G.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? b.createElement(We.a, {
                          confirmButtonLabel: Je.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Je.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Qe.a.deleteRecentSearchesDialog,
                          text: Je.text,
                        })
                      : null,
                    c
                      ? b.createElement(z.a, {
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
                    var e = Object(ze.a)(X.a.findDOMNode(this))
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
            r
          )
        })(b.Component)
      S()(nt, 'contextType', ge.a)
      var at = ne.a.create(function (e) {
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
        ct = W.forwardRef(nt),
        ot = 'SearchBox_Search_Input',
        st = r('TnY3'),
        it = r('GZwR'),
        ut = r('4e/K')
      function lt(e, t) {
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
      function dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? lt(Object(r), !0).forEach(function (t) {
                S()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : lt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function ht(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var pt = C.a.ib2e46ee,
        ft = C.a.hbc99b02,
        yt = /^(\w+)$/,
        mt = [it.a.Events, it.a.Users, it.a.Topics],
        vt = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        St = (function (e) {
          h()(r, e)
          var t = ht(r)
          function r(e, n) {
            var c, s
            return (
              o()(this, r),
              (s = t.call(this, e, n)),
              S()(l()(s), '_withNewTypeaheadUI', !1),
              S()(l()(s), '_reorderResults', function (e, t, r, n) {
                return Object(g.a)([e, t.length ? t : void 0, r.length ? r : void 0, n.length ? n : void 0])
              }),
              S()(l()(s), '_renderSearchBoxEmptyState', function (e) {
                return b.createElement(ct, a()({}, e, { onItemClick: s._handleSearchItemClick }))
              }),
              S()(l()(s), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  r = e.link,
                  n = e.query,
                  a = e.queryMetadata,
                  c = e.recentSearchType,
                  o = s.props.addQuery
                t === U.b.SavedSearch
                  ? s._submitQuery({ query: n, shouldAddToRecentSearch: !1, src: k.a.SavedSearchClick })
                  : c === U.a.Keyword
                  ? s._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: k.a.RecentSearchClick })
                  : c === U.a.Event
                  ? (s._routeTransition({ pathname: '/i/events/'.concat(n) }),
                    a && a.title && o({ event: dt(dt({}, a), {}, { id: n, type: U.a.Event }) }))
                  : c === U.a.Topic
                  ? (s._routeTransition({ pathname: '/i/topics/'.concat(n) }),
                    a && a.name && o({ topic: dt(dt({}, a), {}, { id: n, type: U.a.Topic }) }))
                  : r && (s._routeTransition({ pathname: '/'.concat(r) }), o({ user: { id: n, type: U.a.User } }))
              }),
              S()(l()(s), '_handleSearchShortcut', function (e) {
                var t = s._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              S()(l()(s), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  r = vt(t)
                if (r.match(yt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: it.b.NoResult,
                    data: { text: ft({ screenName: r }), type: 'user' },
                  }
              }),
              S()(l()(s), '_handleOnDismiss', function () {
                var e = s.props.history,
                  t = e.location,
                  r = t.state || {}
                if (r.searchFocused) {
                  var n = dt(dt({}, t), {}, { state: dt(dt({}, r), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(n)
                }
              }),
              S()(l()(s), '_handleOnFocus', function () {
                var e = s.props,
                  t = e.analytics,
                  r = e.history,
                  n = r.location,
                  a = n.state || {}
                if (!a.searchFocused) {
                  var c = dt(dt({}, n), {}, { state: dt(dt({}, a), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), r.push(c)
                }
              }),
              S()(l()(s), '_handleChange', function (e) {
                s.setState({ query: e })
              }),
              S()(l()(s), '_handleTypeaheadSubmit', function () {
                var e = s.state,
                  t = e.items,
                  r = e.query,
                  n = s.props.analytics
                ;/^\s*$/.test(r) ||
                  (n.scribe({
                    action: 'search',
                    data: { items: j.a.forTypeaheadResults(t), search_details: { query: r } },
                  }),
                  s._submitQuery({ query: r, shouldAddToRecentSearch: !0 }))
              }),
              S()(l()(s), '_handleItemClick', function (e, t) {
                var r = s.props.addQuery,
                  n = s.state.query
                switch (e.type) {
                  case it.b.User:
                    if (e.data.id_str) r({ user: { id: e.data.id_str, type: U.a.User } })
                    s._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case it.b.Topic:
                  case it.b.Hashtag:
                    s._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: k.a.TypeaheadClick })
                    break
                  case it.b.Event:
                    e.data && e.data.url
                      ? s._routeTransition({ pathname: D.b.parseInternalUrl(e.data.url) })
                      : s._submitQuery({ query: e.data.topic, src: k.a.TypeaheadClick })
                    break
                  case it.b.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? s._routeTransition({ pathname: '/'.concat(vt(n)) })
                      : 'topic' === a &&
                        s._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: k.a.TypeaheadClick })
                }
              }),
              S()(l()(s), '_handleItemsChanged', function (e) {
                s.setState({ items: e })
              }),
              S()(l()(s), '_routeTransition', function (e) {
                var t = e.params,
                  r = e.pathname,
                  n = e.query,
                  a = e.src,
                  c = s.props,
                  o = c.history,
                  i = c.location,
                  u = dt(
                    dt({}, i),
                    {},
                    {
                      pathname: r,
                      search: '',
                      query: t || (n ? { q: n, src: a } : {}),
                      state: dt(dt({}, i.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                o.replace(u)
              }),
              S()(l()(s), '_submitQuery', function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  n = void 0 !== r && r,
                  a = e.src,
                  c = void 0 === a ? k.a.Typed : a,
                  o = s.props,
                  i = o.addQuery,
                  u = o.mode,
                  l = o.onSubmit,
                  d = o.searchFilters,
                  h = o.searchRoute
                ;(l && l(t, c, s.state.lastSubmittedQuery === t), n) && i({ keyword: { query: t, type: U.a.Keyword } })
                var p = Object(U.g)({ query: t, querySrc: c, mode: u, searchFilters: d })
                s._routeTransition({ pathname: h, params: p, src: c }), s.setState({ lastSubmittedQuery: t })
              }),
              S()(l()(s), '_setInputRef', function (e) {
                s._inputRef = e
              }),
              (s.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(R.a)(null === (c = e.location.query) || void 0 === c ? void 0 : c.q),
              }),
              (s._withNewTypeaheadUI = s.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              s
            )
          }
          return (
            i()(r, [
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
                    t,
                    r,
                    n = this.props,
                    a = n.forceVdlDisable,
                    c = n.history,
                    o = n.isCompact,
                    s = n.isInSidebar,
                    i = n.isOnHomepage,
                    u = n.location,
                    l = n.placeholder,
                    d = this.state.query,
                    h = c.location.state || {},
                    p = (u.state || {}).searchPrefill,
                    f = this.props.initialValue || p,
                    y = !!u.state && !!u.state.searchFocused
                  return (
                    h.searchFocused &&
                      ((e = this.context.featureSwitches.isTrue(
                        'responsive_web_search_reorder_typeahead_results_enabled',
                      )),
                      (t = !this.context.featureSwitches.isTrue(
                        'responsive_web_search_delay_prefetch_typeahead_results_enabled',
                      )),
                      (r = this.context.featureSwitches.getNumberValue(
                        'responsive_web_search_limit_user_typeahead_results',
                      ))),
                    b.createElement(
                      _.a,
                      { viewType: 'search_field' },
                      b.createElement(
                        te.a,
                        { style: bt.root },
                        b.createElement(ut.default, {
                          filter: mt,
                          forceVdlDisable: a,
                          getTopicExactMatch: d ? it.f : void 0,
                          getUserExactMatch: d ? this._getUserExactMatch : void 0,
                          initialValue: f,
                          inputStyle: bt.input,
                          isCompact: o,
                          isInSidebar: s,
                          isOnHomepage: i,
                          onDismiss: this._handleOnDismiss,
                          onFocus: this._handleOnFocus,
                          onItemClick: this._handleItemClick,
                          onItemsChanged: this._handleItemsChanged,
                          onQueryChange: this._handleChange,
                          onSubmit: this._handleTypeaheadSubmit,
                          orderResults: e ? this._reorderResults : void 0,
                          placeholder: l,
                          ref: this._setInputRef,
                          renderEmptyState: this._renderSearchBoxEmptyState,
                          rounded: !0,
                          shouldAutoFocus: y,
                          shouldClearOnSelect: !0,
                          shouldDeferPrefetch: !e,
                          shouldShowPrefetchResults: !!t,
                          source: it.d.SearchBox,
                          testID: ot,
                          userLimit: r || void 0,
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
            r
          )
        })(b.Component)
      S()(St, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: pt,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        S()(St, 'contextType', ge.a)
      var bt = ne.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(st.a)(I(St))
    },
    V2l4: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserPicker', function () {
          return T
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        s = r('1Pcy'),
        i = r.n(s),
        u = r('5Yy7'),
        l = r.n(u),
        d = r('N+ot'),
        h = r.n(d),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        v = (r('z84I'), r('ho0z'), r('vrRf'), r('2G9S'), r('ERkP')),
        S = r('ZcYN'),
        b = r('3XMw'),
        _ = r.n(b),
        g = 'searchPeople',
        w = r('4e/K'),
        O = r('MWbm'),
        I = r('jhWN'),
        R = r('aV/s'),
        E = r('rHpw'),
        C = r('GZwR')
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
          return h()(this, r)
        }
      }
      var k = [C.a.Users],
        x = _.a.fc9dd578,
        j = _.a.gdb7bc24,
        T = (function (e) {
          l()(r, e)
          var t = D(r)
          function r(e, n) {
            var c
            return (
              a()(this, r),
              (c = t.call(this, e, n)),
              m()(i()(c), '_renderSelectedUsersList', function () {
                var e = c.props.selectedUsers
                return v.createElement(O.a, { style: P.selectedUsersList }, e.map(c._renderSelectedUserPill))
              }),
              m()(i()(c), '_renderSelectedUserPill', function (e) {
                var t = c.props.withCompactPills,
                  r = c.props.onRemove.bind(i()(c), e),
                  n =
                    e.type === C.b.User
                      ? v.createElement(I.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'custom',
                          uri: e.data.profile_image_url_https,
                        })
                      : void 0
                return v.createElement(R.a, {
                  accessibilityLabel: j({ name: e.data.name }),
                  avatar: n,
                  compact: t,
                  key: e.id,
                  mode: 'remove',
                  onClick: r,
                  style: P.selectionPill,
                  text: e.data.name,
                })
              }),
              m()(i()(c), '_getItemIsDisabled', function (e) {
                var t = c.props,
                  r = t.getItemIsDisabled
                return t.preselectedUsers.indexOf(e.id) >= 0 || !(!r || !r(e))
              }),
              m()(i()(c), '_getItemDisabledMessage', function (e) {
                var t = c.props,
                  r = t.getItemDisabledMessage
                return t.preselectedUsers.indexOf(e.id) >= 0 ? void 0 : r ? r(e) : void 0
              }),
              m()(i()(c), '_handleQueryChange', function (e) {
                var t = c.props.onQueryChange
                c.setState({ query: e }), t && t(e)
              }),
              m()(i()(c), '_handleOnSelect', function (e) {
                var t = c.props.onSelect
                t && t(e)
              }),
              (c.state = { query: '' }),
              c
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.injections,
                    r = e.preselectedUsers,
                    n = e.renderHeader,
                    a = e.selectedUsers,
                    c = e.shouldAutoFocus,
                    o = e.source,
                    s = a
                      .map(function (e) {
                        return e.id
                      })
                      .concat(r)
                  return v.createElement(
                    O.a,
                    { style: P.root },
                    v.createElement(w.default, {
                      alwaysOpen: !0,
                      disableClearButton: !0,
                      filter: k,
                      getItemDisabledMessage: this._getItemDisabledMessage,
                      getItemIsDisabled: this._getItemIsDisabled,
                      injectedItems: t,
                      isModal: !0,
                      onItemClick: this._handleOnSelect,
                      onQueryChange: this._handleQueryChange,
                      placeholder: x,
                      renderHeader: n,
                      renderInSearchField: a.length ? this._renderSelectedUsersList : void 0,
                      renderUserDecoration: S.a,
                      selectedItems: s,
                      shouldAutoFocus: c,
                      shouldClearOnSelect: !0,
                      shouldFocusOnClear: !0,
                      source: o,
                      testID: g,
                      withSectionDivider: !1,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(v.Component)
      m()(T, 'defaultProps', { preselectedUsers: [], shouldAutoFocus: !0, withCompactPills: !1 })
      var P = E.a.create(function (e) {
        return {
          root: { flex: 1 },
          selectionPill: { margin: e.spaces.space4, maxWidth: 'calc(100% - '.concat(e.spaces.space16, ')') },
          selectedUsersList: { flexDirection: 'row', flexWrap: 'wrap', padding: e.spaces.space4 },
        }
      })
      t.default = T
    },
    bJYH: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GenericTypeaheadComposeWrapper', function () {
          return L
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        s = r('1Pcy'),
        i = r.n(s),
        u = r('5Yy7'),
        l = r.n(u),
        d = r('N+ot'),
        h = r.n(d),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        v = (r('uFXj'), r('ERkP')),
        S = r('oEoC'),
        b = r('oQhu'),
        _ = r('7nmT'),
        g = r.n(_),
        w = r('WPfJ'),
        O = r('OEYw'),
        I = r('MWbm'),
        R = r('Irs7'),
        E = r('0FVZ'),
        C = r('xoZN'),
        D = r('7N4s'),
        k = r('rHpw'),
        x = r('GZwR')
      function j(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function P(e) {
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
      var A = [x.a.Users],
        U = [x.a.Topics],
        F = 0,
        L = (function (e) {
          l()(r, e)
          var t = P(r)
          function r(e, n) {
            var c
            return (
              a()(this, r),
              (c = t.call(this, e, n)),
              m()(i()(c), '_typeaheadActive', !1),
              m()(i()(c), '_renderTypeaheadDropdown', function (e) {
                var t = c.props,
                  r = t.contextText,
                  n = t.isInlineReply,
                  a = t.onSelectItem,
                  o = t.source,
                  s = c.context.isModal,
                  i = e.resultType === x.a.Topics ? 'hashtag' : void 0,
                  u = v.createElement(O.a, {
                    ariaDescendantId: c.state.ariaDescendantId,
                    contextText: r,
                    domId: c._dropdownDomId,
                    filter: c._getFilter(e.resultType),
                    maxTopics: 8,
                    onItemClick: a,
                    onItemFocusChanged: c._handleItemFocusChanged,
                    query: e.word,
                    ref: c._handleTypeaheadRef,
                    source: o,
                    style: c._calcStyle(),
                    topicType: i,
                    withItemAlwaysSelected: !0,
                  })
                return s || n
                  ? v.createElement(
                      E.a.HalfSheet,
                      null,
                      v.createElement(
                        v.Fragment,
                        null,
                        v.createElement(I.a, { onClick: c._handleDismiss, style: H.mask }),
                        u,
                      ),
                    )
                  : v.createElement(
                      v.Fragment,
                      null,
                      v.createElement(I.a, { onClick: c._handleDismiss, style: H.mask }),
                      u,
                    )
              }),
              m()(i()(c), 'render', function () {
                var e = c.props,
                  t = e.children,
                  r = e.query,
                  n = v.cloneElement(t, {
                    ariaAutocomplete: 'list',
                    ariaControls: c._dropdownDomId,
                    ariaActiveDescendant: c.state.ariaDescendantId,
                    ref: function (e) {
                      ;(c._textInputNode = g.a.findDOMNode(e)), (c._textInputRef = e)
                      var r = t.ref
                      r && r(e)
                    },
                  })
                return v.createElement(
                  I.a,
                  { style: H.inputContainer },
                  v.createElement(
                    C.a,
                    { onKeyDown: c._handleKeyDown },
                    n,
                    c._textInputNode && r ? c._renderTypeaheadDropdown(r) : null,
                  ),
                )
              }),
              m()(i()(c), '_getFilter', function (e) {
                return 'users' === e ? A : U
              }),
              m()(i()(c), '_calcStyle', function () {
                var e = c.context.isModal,
                  t = c.props,
                  r = t.isInline,
                  n = t.isInlineReply,
                  a = c._textInputNode,
                  o = window.innerHeight,
                  s = window.innerWidth,
                  i = (c._textInputRef && c._textInputRef.getTextInputHeight()) || 20
                if (a instanceof window.HTMLElement) {
                  if (e || r) {
                    var u = a.getBoundingClientRect()
                    return [c._getDropdownPositioningStyle(o, s, u.top, u.top + i, u.left, e, !!n), H.dropdownStyle]
                  }
                  return [c._getModalFullViewportStyle(i), H.modalFullViewportStyle]
                }
                return [c._getDropdownPositioningStyle(i, s, 0, 0, 0, e, !!n), H.dropdownStyle]
              }),
              m()(i()(c), '_handleKeyDown', function (e) {
                var t = c.state.selectedItem,
                  r = c.props,
                  n = r.onSelectItem,
                  a = r.query,
                  o = e.key
                S.g(e) &&
                  a &&
                  ('ArrowDown' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusNext(), e.preventDefault())
                    : 'ArrowUp' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusPrevious(), e.preventDefault())
                    : 'Enter' === o || 'Tab' === o
                    ? t && (n(t), e.preventDefault())
                    : 'Escape' === o && (c._handleDismiss(), e.preventDefault()))
              }),
              m()(i()(c), '_handleItemFocusChanged', function (e) {
                return c.setState({ ariaDescendantId: S.b(), selectedItem: e })
              }),
              m()(i()(c), '_handleTypeaheadRef', function (e) {
                c._typeaheadRef = e
              }),
              m()(i()(c), '_handleDismiss', function () {
                c._textInputRef && c._textInputRef.focus(), c.props.onDismiss()
              }),
              m()(
                i()(c),
                '_getDropdownHeight',
                Object(b.a)(function (e, t) {
                  var r = (50 * e) / 100
                  return r > t ? t : r
                }),
              ),
              m()(
                i()(c),
                '_getModalOrInlineReplyDropdownStyles',
                Object(b.a)(function (e, t, r) {
                  return e ? { bottom: ''.concat(r, 'px') } : { top: ''.concat(t, 'px') }
                }),
              ),
              m()(
                i()(c),
                '_getDropdownPositioningStyle',
                Object(b.a)(function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    i = 10,
                    u = t - a - i,
                    l = Math.min(u, 300),
                    d = e - n,
                    h = r,
                    p = d / e < 0.5 && h > d,
                    f = p ? c._getDropdownHeight(e, h - i) : c._getDropdownHeight(e, d - i),
                    y = { maxWidth: ''.concat(u, 'px'), minWidth: ''.concat(l, 'px'), maxHeight: ''.concat(f, 'px') }
                  return o || s
                    ? T(
                        T({}, y),
                        {},
                        { position: 'fixed', left: ''.concat(a, 'px') },
                        c._getModalOrInlineReplyDropdownStyles(p, n, e - r),
                      )
                    : T(
                        T({}, y),
                        {},
                        p ? { bottom: '100%', position: 'absolute' } : { top: '100%', position: 'absolute' },
                      )
                }),
              ),
              m()(
                i()(c),
                '_getModalFullViewportStyle',
                Object(b.a)(function (e) {
                  return { position: 'absolute', top: ''.concat(e || 0, 'px'), overflowX: 'hidden', overflowY: 'auto' }
                }),
              ),
              (c.state = { ariaDescendantId: S.b() }),
              (c._dropdownDomId = 'typeaheadDropdownWrapped-'.concat(F)),
              (F += 1),
              c
            )
          }
          return (
            o()(r, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.onTypeaheadStateChange,
                    r = e.query,
                    n = !(!this._textInputNode || !r)
                  n !== this._typeaheadActive && ((this._typeaheadActive = n), t && t(n))
                },
              },
              {
                key: 'resetSelectedItem',
                value: function () {
                  this.setState({ selectedItem: void 0 })
                },
              },
            ]),
            r
          )
        })(v.Component)
      m()(L, 'contextType', D.b), m()(L, 'defaultProps', { source: x.d.Compose })
      var H = k.a.create(function (e) {
        return {
          dropdownStyle: {
            backgroundColor: e.colors.cellBackground,
            borderRadius: e.borderRadii.small,
            boxShadow: e.boxShadows.medium,
            minHeight: 100,
            overflowX: 'hidden',
            overflowY: 'auto',
          },
          mask: T(T({}, k.a.absoluteFillObject), {}, { position: 'fixed' }),
          modalFullViewportStyle: {
            backgroundColor: e.colors.cellBackground,
            right: 0,
            left: 0,
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            minHeight: 100,
          },
          inputContainer: { flexGrow: 1, position: 'relative', width: '100%', zIndex: w.g },
        }
      })
      t.default = Object(R.a)(L, { component: 'compose' })
    },
    hiGS: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        s = r('k/Ka')
      function i(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var l = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    kIAd: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      }),
        r.d(t, 'b', function () {
          return c
        })
      var n = r('0vv5'),
        a = 500,
        c = {
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
            { type: 'hashtag', regexp: r.n(n).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
    oEoC: function (e, t, r) {
      'use strict'
      r.d(t, 'e', function () {
        return h
      }),
        r.d(t, 'c', function () {
          return p
        }),
        r.d(t, 'b', function () {
          return f
        }),
        r.d(t, 'g', function () {
          return y
        }),
        r.d(t, 'a', function () {
          return m
        }),
        r.d(t, 'd', function () {
          return v
        }),
        r.d(t, 'f', function () {
          return b
        })
      r('+KXO'), r('1t7P'), r('daRM'), r('FtHn')
      var n = r('RhWx'),
        a = r.n(n),
        c = r('KEM+'),
        o = r.n(c),
        s =
          (r('hBpG'),
          r('vrRf'),
          r('WNMA'),
          r('KqXw'),
          r('M+/F'),
          r('LJOr'),
          r('tVqn'),
          r('jwue'),
          r('+oxZ'),
          r('z84I'),
          r('LW0h'),
          r('2G9S'),
          r('oQhu')),
        i = r('kIAd'),
        u = r('rHpw')
      function l(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function h(e, t) {
        var r,
          n = i.b.scoper.find(function (n) {
            if (-1 !== n.srcInputs.indexOf(t)) return (r = e.match(n.regexp))
          }),
          a = ''
        return r && (a = r && (1 === r.length ? r[0] : r[1])), n ? d(d({}, n.scope), {}, { src: t, q: a }) : null
      }
      function p(e, t) {
        var r = t.slice(0, e),
          n = t.slice(e, t.length),
          a = r.search(i.b.WordEnd),
          c = a >= 0 ? r.slice(a) : '',
          o = n.search(i.b.WordBoundary),
          s = c + n.slice(0, o)
        return s.trim() ? { start: a, end: e + o, word: s } : { start: -1, end: -1, word: '' }
      }
      function f() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function y(e) {
        var t = e.altKey,
          r = e.ctrlKey,
          n = e.metaKey
        return !(t || r || n)
      }
      function m(e, t) {
        var r = []
        e.forEach(function (e) {
          var n = t.find(function (t) {
            return t.id === e.id
          })
          n && n.data && n.data.result_context ? r.push(n) : r.push(e)
        })
        var n = r.map(function (e) {
            return e.id
          }),
          c = t.filter(function (e) {
            return n.indexOf(e.id) < 0
          })
        return [].concat(r, a()(c))
      }
      var v = Object(s.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(u.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        S = 0,
        b = function () {
          return 'typeaheadDropdown-'.concat((S += 1))
        }
    },
    rRIm: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return Q
      })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        s = r('1Pcy'),
        i = r.n(s),
        u = r('5Yy7'),
        l = r.n(u),
        d = r('N+ot'),
        h = r.n(d),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        v = (r('2G9S'), r('LJOr'), r('KqXw'), r('ERkP')),
        S = r('sTyV'),
        b = r('6/RC'),
        _ = r('sebV'),
        g = r('G6rE'),
        w = r('rxPX'),
        O = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: g.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        I = r('3XMw'),
        R = r.n(I),
        E = r('OrGc'),
        C = r('QK5w'),
        D = r('aITJ'),
        k = r('MWbm'),
        x = r('TnY3'),
        j = r('rHpw'),
        T = r('t62R'),
        P = r('v6aA'),
        A = r('uScj'),
        U = r('fs1G'),
        F = r('BcsE'),
        L = r('VPAj')
      function H(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : H(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var q = R.a.b47e760d,
        B = R.a.fd2c7b43,
        K = new A.a(),
        V = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        Q = function (e) {
          return b.canUseDOM ? K.subscribe(e).unsubscribe : U.a
        },
        W = (function (e) {
          l()(r, e)
          var t = M(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(i()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  r,
                  n = e.props,
                  a = n.history,
                  c = n.loggedInUserScreenName,
                  o = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        K.getListeners().length
                          ? K.notify(e)
                          : a.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    m()(t, E.e.search, o()),
                    m()(t, E.e.goToUser, o('@')),
                    m()(t, E.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    m()(t, E.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    m()(t, E.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  i = function (e) {
                    var t
                    return (
                      (t = {}),
                      m()(t, E.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      m()(t, E.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      m()(t, E.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    c && u
                      ? N(
                          N({}, i(c)),
                          {},
                          m()({}, E.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : c
                      ? i(c)
                      : {},
                  d = N(
                    N(N({}, s), l),
                    {},
                    ((r = {}),
                    m()(r, E.e.goHome, function () {
                      return a.push('/home')
                    }),
                    m()(r, E.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    m()(r, E.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    m()(r, E.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    m()(r, E.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    m()(r, E.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    m()(r, E.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    m()(r, E.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    m()(r, E.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    r),
                  ),
                  h = e.props.loggedInUserScreenName ? d : s
                e._unbindKeyboardShortcuts = Object(S.a)(h)
              }),
              m()(i()(e), '_handleKeyDown', function (t) {
                V(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              m()(i()(e), '_handleKeyUp', function (t) {
                if (!V(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var r = e._backspaceDown,
                    n = !!Object(F.a)(r) && Date.now() - r < 500,
                    a = Object(C.a)({}, { location: e.props.location })
                  n && a ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    D.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    D.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? v.createElement(
                        k.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: j.a.visuallyHidden },
                        v.createElement(T.b, null, q),
                        v.createElement(T.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, B),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(v.Component)
      m()(W, 'contextType', P.a)
      var z = O(W),
        G = b.canUseDOM ? Object(x.a)(z) : Object(L.a)(null)
      t.a = G
    },
    sYRn: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r('eb3s'),
        c = r('3XMw'),
        o = r.n(c),
        s = r('4ZbN'),
        i = o.a.hffea05c,
        u = o.a.j037e373,
        l = o.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          r = e.onConfirm
        return n.createElement(a.a, {
          confirmButtonLabel: l,
          confirmButtonType: 'destructiveFilled',
          headline: i,
          onCancel: t,
          onConfirm: r,
          testID: s.a.deleteSavedSearchDialog,
          text: u,
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
        return w
      }),
        r.d(t, 'c', function () {
          return O
        }),
        r.d(t, 'a', function () {
          return I
        }),
        r.d(t, 'b', function () {
          return R
        })
      r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('RhWx'),
        a = r.n(n),
        c = r('KEM+'),
        o = r.n(c),
        s = r('T0aG'),
        i = r.n(s),
        u = (r('yH/f'), r('2G9S'), r('LW0h'), r('JtPf'), r('7x/C'), r('oEOe')),
        l = r('kGix'),
        d = r('Ssj5'),
        h = r('SrIh'),
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
      var m = 'savedSearches',
        v = { fetchStatus: l.a.NONE, savedSearches: [] },
        S = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        b = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        _ = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case S.SUCCESS:
            var r = t.payload,
              n = Array.isArray(r)
            return (
              n ||
                Object(h.a)('Saved search results are not type array', { extra: { savedSearchResultsType: i()(r) } }),
              y(y({}, e), {}, { fetchStatus: l.a.LOADED, savedSearches: n && r ? r : [] })
            )
          case S.FAILURE:
            return y(y({}, e), {}, { fetchStatus: l.a.FAILED })
          case b.SUCCESS:
            return y(
              y({}, e),
              {},
              { savedSearches: t.payload ? [].concat(a()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case _.SUCCESS:
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
      d.a.register(o()({}, m, g))
      var w = function (e) {
          return e.savedSearches.savedSearches
        },
        O = function (e) {
          return function (t, r, n) {
            var a = n.api
            return Object(u.b)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: b,
              context: 'SAVE_SEARCH',
            })
          }
        },
        I = function (e) {
          return function (t, r, n) {
            var a = n.api
            return Object(u.b)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
              actionTypes: _,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        R = function () {
          return function (e, t, r) {
            r.api
            var n = t()
            return Object(p.m)(n)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(n) === l.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, r) {
                    var n = r.api
                    return Object(u.b)(e, { request: n.SavedSearches.fetch, params: {} })({
                      actionTypes: S,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
