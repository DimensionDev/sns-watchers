;(window.webpackJsonp = window.webpackJsonp || []).push([
  [183],
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
          return bt
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('97Jx'),
        a = r.n(n),
        c = r('VrFO'),
        o = r.n(c),
        i = r('Y9Ll'),
        s = r.n(i),
        l = r('1Pcy'),
        u = r.n(l),
        d = r('5Yy7'),
        h = r.n(d),
        p = r('N+ot'),
        f = r.n(p),
        y = r('AuHH'),
        m = r.n(y),
        v = r('KEM+'),
        S = r.n(v),
        b = r('RhWx'),
        _ = r.n(b),
        g = (r('2G9S'), r('tQbP'), r('z84I'), r('hBvt'), r('ho0z'), r('WNMA'), r('KqXw'), r('MvUL'), r('ERkP')),
        w = r.n(g),
        O = r('+Kfv'),
        I = r('wtjx'),
        R = r('rxPX'),
        E = Object(R.a)()
          .propsFromActions(function () {
            return { addQuery: I.a }
          })
          .withAnalytics({ component: 'search_box' }),
        C = r('Hw0q'),
        k = r('3XMw'),
        D = r.n(k),
        x = r('8jkQ'),
        j = r('u3ZE'),
        T = r('rRIm'),
        P = r('Rp9C'),
        A = (r('vrRf'), r('5BYb'), r('jQ3i'), r('x4t0'), r('M+/F'), r('wFPu'), r('vfdX'), r('lnti')),
        U = r('hqKg'),
        F = r('3IPs'),
        L = r('M0jS'),
        H = r('G6rE'),
        M = r('k49u'),
        N = r('J4ZH'),
        q = r('0KEI'),
        B = r('v4XE'),
        V = r('kGix')
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
      function Q(e) {
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
      var W = function (e) {
          return (
            Object(M.c)(e, M.a.GenericUserNotFound) ||
            Object(M.c)(e, M.a.OtherUserSuspended) ||
            Object(M.c)(e, M.a.AddressBookLookupNotFound)
          )
        },
        z = Object(R.a)()
          .propsFromState(function () {
            var e = Object(U.createSelector)(I.g, H.e.selectFetchStatuses, function (e, t) {
                var r = Object(A.a)(
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
              t = Object(U.createSelector)(e, function (e) {
                return (e[V.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              r = Object(U.createSelector)(e, H.e.selectErrors, function (e, t) {
                return (e[V.a.FAILED] || [])
                  .filter(function (e) {
                    var r = e.id
                    return W(t[r] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              n = Object(U.createSelector)(e, H.e.selectErrors, function (e, t) {
                var r = (e[V.a.FAILED] || []).filter(function (e) {
                  var r = e.id
                  return !W(t[r] || {})
                })
                return (e[V.a.LOADING] || []).length > 0
                  ? V.a.LOADING
                  : (e[V.a.LOADED] || []).length > 0
                  ? V.a.LOADED
                  : r.length > 0
                  ? V.a.FAILED
                  : V.a.NONE
              }),
              a = Object(U.createSelector)(I.g, function (e) {
                return e.map(function (e) {
                  return Q(Q({}, e), {}, { category: F.b.RecentSearch })
                })
              }),
              c = Object(U.createSelector)(B.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: F.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: I.e,
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
              i = !a.filter(function (e) {
                var t = e.user
                return t && r.indexOf(t.id) < 0
              }).length,
              s = o !== V.a.LOADING && n && i ? V.a.LOADED : o
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: r,
              recentSearches: a,
              fetchStatus: s,
              savedSearches: c,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: I.b,
              createLocalApiErrorHandler: Object(q.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: B.a,
              fetchRecentSearchesIfNeeded: I.c,
              fetchSavedSearchesIfNeeded: B.b,
              fetchUsersIfNeeded: H.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: L.b.fetchManyIfNeeded,
              removeQuery: I.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        G = r('sYRn'),
        Z = r('v//M'),
        X = r('7nmT'),
        Y = r.n(X),
        J = (r('jQ/y'), r('m3Bd')),
        $ = r.n(J),
        ee = r('hOZg'),
        te = r('5T6p'),
        re = r('MWbm'),
        ne = r('/yvb'),
        ae = r('rHpw')
      function ce(e) {
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
      var oe = D.a.e68b09b4,
        ie = (function (e) {
          h()(r, e)
          var t = ce(r)
          function r() {
            return o()(this, r), t.apply(this, arguments)
          }
          return (
            s()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    r = e.onRemove,
                    n = $()(e, ['id', 'onRemove'])
                  return t
                    ? w.a.createElement(
                        re.a,
                        { style: se.root },
                        w.a.createElement(te.a, n),
                        w.a.createElement(ne.a, {
                          accessibilityLabel: oe,
                          icon: w.a.createElement(ee.a, null),
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
                    category: F.b.RecentSearch,
                    query: t,
                    recentSearchType: F.a.Event,
                    queryMetadata: { id: t, image: r, title: a, supportText: n },
                  }
                },
              },
            ]),
            r
          )
        })(w.a.PureComponent),
        se = ae.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        le = ie,
        ue = r('j7Bv'),
        de = r('5mJL'),
        he = r('t62R'),
        pe = r('EHV7')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var ye = w.a.createElement(ee.a, null),
        me = D.a.e68b09b4,
        ve = (function (e) {
          h()(r, e)
          var t = fe(r)
          function r() {
            return o()(this, r), t.apply(this, arguments)
          }
          return (
            s()(r, [
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
                    i = w.a.createElement(ue.a, { Icon: pe.a, color: 'primary', size: o, style: Se.searchIcon })
                  return w.a.createElement(
                    de.a,
                    { avatarCell: i, avatarSize: o, cellStyle: Se.bodyColumn },
                    w.a.createElement(
                      re.a,
                      null,
                      w.a.createElement(he.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, n),
                      w.a.createElement(he.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    w.a.createElement(ne.a, {
                      accessibilityLabel: me,
                      icon: ye,
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
                        category: F.b.RecentSearch,
                        query: r,
                        recentSearchType: F.a.Topic,
                        queryMetadata: { id: r, name: n, description: t },
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(w.a.Component),
        Se = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        be = function (e, t) {
          return H.e.select(e, t.id)
        },
        _e = function (e, t) {
          return Object(L.c)(e, t.id)
        },
        ge = Object(R.a)().propsFromState(function () {
          return { user: be, userSpace: _e }
        }),
        we = r('v6aA'),
        Oe = r('IMA+')
      function Ie(e) {
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
      var Re = w.a.createElement(ee.a, null),
        Ee = D.a.e68b09b4,
        Ce = D.a.fd06b02f,
        ke = (function (e) {
          h()(r, e)
          var t = Ie(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(u()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              S()(u()(e), '_handleClick', function () {
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
            s()(r, [
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
                  var i = a && o.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? a : void 0
                  i && (i.accessibilityLabel = Ce({ screenName: n.screen_name }))
                  var s = w.a.createElement(ne.a, {
                    accessibilityLabel: Ee,
                    icon: Re,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return w.a.createElement(Oe.a, {
                    avatarSize: 'xLarge',
                    avatarUri: n.profile_image_url_https,
                    decoration: s,
                    displayMode: c ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: n.protected,
                    isVerified: n.verified,
                    name: n.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: i,
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
                        category: F.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: F.a.User,
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(w.a.Component)
      S()(ke, 'contextType', we.a)
      var De = ge.forwardRef(ke),
        xe = r('oQhu'),
        je = r('hiGS'),
        Te = r('Gfoi')
      function Pe(e) {
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
      var Ae = w.a.createElement(ee.a, null),
        Ue = w.a.createElement(je.a, null),
        Fe = Object(xe.a)(function (e) {
          return e === F.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Le = Object(xe.a)(function (e) {
          return e === F.b.SavedSearch ? Ue : Ae
        }),
        He = (function (e) {
          h()(r, e)
          var t = Pe(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(u()(e), '_getButtonType', function () {
                var t = e.props.category
                return Fe(t)
              }),
              S()(u()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Le(t)
              }),
              e
            )
          }
          return (
            s()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.query,
                    n = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    a = w.a.createElement(ue.a, { Icon: Te.a, color: 'neutral', size: n, style: Me.searchIcon })
                  return w.a.createElement(
                    de.a,
                    { avatarCell: a, avatarSize: n, cellStyle: Me.bodyColumn },
                    w.a.createElement(he.b, { numberOfLines: 1, withHashflags: !0 }, r),
                    w.a.createElement(ne.a, {
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
            r
          )
        })(w.a.Component),
        Me = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        Ne = He,
        qe = r('htQn')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var Ve = (function (e) {
        h()(r, e)
        var t = Be(r)
        function r(e, n) {
          var a
          return (
            o()(this, r),
            (a = t.call(this, e, n)),
            S()(u()(a), '_renderSearchItem', function () {
              var e = a.props,
                t = e.index,
                r = e.item,
                n = e.onItemClick
              return r.keyword
                ? w.a.createElement(Ne, {
                    category: r.category,
                    onRemove: a._handleOnRemove,
                    query: r.keyword.query,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : r.user
                ? w.a.createElement(De, {
                    id: r.user.id || '',
                    index: t,
                    onItemClick: n,
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    style: Ke.itemPadding,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : r.topic
                ? w.a.createElement(ve, {
                    description: r.topic.description || '',
                    id: r.topic.id,
                    name: r.topic.name || '',
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : r.event
                ? w.a.createElement(le, {
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
            S()(u()(a), '_handleItemRef', function (e) {
              a._itemRef = e
            }),
            S()(u()(a), '_handleOnRemove', function (e) {
              var t = a.props,
                r = t.index,
                n = t.item
              ;(0, t.onRemoveQuery)(n, r), e.stopPropagation()
            }),
            S()(u()(a), '_handleOnClick', function () {
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
          s()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  r = e.item,
                  n = e.testID
                return w.a.createElement(
                  O.a,
                  { viewType: 'search_item' },
                  w.a.createElement(
                    qe.a,
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
      })(w.a.Component)
      S()(Ve, 'contextType', we.a)
      var Ke = ae.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        Qe = Ve,
        We = r('4ZbN'),
        ze = r('eb3s'),
        Ge = r('MXDK')
      function Ze(e, t) {
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
      function Xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                S()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ze(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var Je = D.a.ee295fbe,
        $e = { headline: D.a.f45c425f, text: D.a.caae4dd9, confirmButtonLabel: D.a.dbd5d40f },
        et = D.a.a8d68f61,
        tt = D.a.c6530778,
        rt = D.a.e047b8fa,
        nt = ['user', 'keyword'],
        at = (function (e) {
          h()(r, e)
          var t = Ye(r)
          function r(e, n) {
            var a
            o()(this, r),
              (a = t.call(this, e, n)),
              S()(u()(a), '_withNewTypeaheadUI', !1),
              S()(u()(a), '_getRecentSearchItems', function () {
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
              S()(u()(a), '_render', function () {
                var e = a.props,
                  t = e.domId,
                  r = e.savedSearches,
                  n = 0 === a._getNumOfSearchItems(),
                  c = a._getRecentSearchItems()
                return n
                  ? w.a.createElement(
                      re.a,
                      { style: ct.emptyState, testID: We.a.typeaheadEmptySearch },
                      w.a.createElement(he.b, { align: 'center', color: 'gray700' }, Je),
                    )
                  : w.a.createElement(
                      re.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      c.length > 0
                        ? w.a.createElement(
                            w.a.Fragment,
                            null,
                            w.a.createElement(
                              re.a,
                              { style: ct.header, testID: We.a.typeaheadRecentSearchesHeader },
                              w.a.createElement(he.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, et),
                              w.a.createElement(
                                ne.a,
                                { onPress: a._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                rt,
                              ),
                            ),
                            c.map(function (e, t) {
                              return a._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      r.length > 0
                        ? w.a.createElement(
                            w.a.Fragment,
                            null,
                            w.a.createElement(
                              re.a,
                              {
                                accessibilityHidden: !0,
                                style: [ct.header, ct.borderTop],
                                testID: We.a.typeaheadSavedSearchesHeader,
                              },
                              w.a.createElement(he.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, tt),
                            ),
                            a._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              S()(u()(a), '_renderRecentSearchItem', function (e, t) {
                var r = a.props.ariaDescendantId,
                  n = a.state.focusIndex === t
                return w.a.createElement(Qe, {
                  domId: n ? r : void 0,
                  index: t,
                  item: e,
                  key: a._chooseKeyType(e, t),
                  onItemClick: a._handleOnItemClick,
                  onRemoveQuery: a._handleRemoveQuery,
                  ref: n ? a._setFocusedItemRef : void 0,
                  testID: We.a.typeaheadRecentSearchesItem,
                })
              }),
              S()(u()(a), '_chooseKeyType', function (e, t) {
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
              S()(u()(a), '_renderSavedSearches', function () {
                var e = a.props,
                  t = e.ariaDescendantId,
                  r = e.savedSearches,
                  n = a.state.focusIndex,
                  c = a._getRecentSearchItems(),
                  o = _()(r)
                return (
                  o.reverse(),
                  w.a.createElement(
                    re.a,
                    { testID: We.a.typeaheadSavedSearchesContainer },
                    o.map(function (e, r) {
                      var o = n === r + c.length
                      return w.a.createElement(Qe, {
                        domId: o ? t : void 0,
                        index: r,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: a._handleOnItemClick,
                        onRemoveQuery: a._handleRemoveQuery,
                        ref: o ? a._setFocusedItemRef : void 0,
                        testID: We.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              S()(u()(a), '_getNumOfSearchItems', function () {
                var e = a.props.savedSearches,
                  t = a._getRecentSearchItems()
                return e.length + t.length
              }),
              S()(u()(a), '_handleUsersRetry', function () {
                a._fetchUsersDetailsIfNeeded()
              }),
              S()(u()(a), '_fetchUsersDetailsIfNeeded', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchUsersIfNeeded,
                  n = e.fetchUsersPresenceIfNeeded,
                  c = e.invalidRecentSearchUserIds,
                  o = e.recentSearches,
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
                  })(o, c)
                r(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && n(u).catch(t({}))
              }),
              S()(u()(a), '_handleRemoveQuery', function (e, t) {
                var r = a.props,
                  n = r.analytics,
                  c = r.removeQuery
                switch (e.category) {
                  case F.b.RecentSearch:
                    var o = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    c(o), a._resetFocus()
                    var i = P.a.forRecentSearchResult(o, t),
                      s = a._handleRemoveAction(e)
                    i && n.scribe({ action: s, data: { items: [i] } })
                    break
                  case F.b.SavedSearch:
                    a.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              S()(u()(a), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              S()(u()(a), '_handleClearAllClick', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              S()(u()(a), '_handleOnClearAllConfirm', function () {
                var e = a.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              S()(u()(a), '_handleOnClearAllCancel', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              S()(u()(a), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = a.props,
                  t = e.analytics,
                  r = e.deleteSavedSearch,
                  n = e.savedSearches,
                  c = a.state.savedSearchIdToDelete,
                  o = n.findIndex(function (e) {
                    return e.savedSearchId === c
                  }),
                  i = n[o]
                if (c) {
                  r(c)
                  var s = i && P.a.forSavedSearchResult(i.keyword.query, o)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(u()(a), '_handleOnDeleteSavedSearchCancel', function () {
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(u()(a), '_handleOnItemClick', function (e, t) {
                var r = a.props,
                  n = r.onDismiss
                ;(0, r.onItemClick)(e, t), a._scribeClick(e, t), n && n()
              }),
              S()(u()(a), '_scribeRecentSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  r = e.recentSearches
                if (r && r.length) {
                  var n = Object(A.a)(
                    r.map(function (e, t) {
                      return P.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: n } })
                }
              }),
              S()(u()(a), '_scribeSavedSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  r = e.savedSearches
                if (r && r.length) {
                  var n = Object(A.a)(
                    r.map(function (e, t) {
                      return P.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: n } })
                }
              }),
              S()(u()(a), '_scribeClick', function (e, t) {
                var r = a.props.analytics
                switch (e.category) {
                  case F.b.SavedSearch:
                    var n = P.a.forSavedSearchResult(e.query, t)
                    r.scribe({ element: 'typeahead', action: 'click', data: { targets: [n] } })
                    break
                  case F.b.RecentSearch:
                    var c
                    e.recentSearchType &&
                      (c =
                        e.recentSearchType === F.a.User
                          ? { user: { type: F.a.User, id: e.query } }
                          : e.recentSearchType === F.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: Xe(Xe({}, e.queryMetadata), {}, { type: F.a.Event, id: e.query }) }
                          : e.recentSearchType === F.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: Xe(Xe({}, e.queryMetadata), {}, { type: F.a.Topic, id: e.query }) }
                          : { keyword: { type: F.a.Keyword, query: e.query } })
                    var o = c && P.a.forRecentSearchResult(c, t)
                    o && r.scribe({ action: 'click', data: { targets: [o] } })
                }
              }),
              S()(u()(a), '_setFocusedItemRef', function (e) {
                ;(a._focusedItemRef = e),
                  e &&
                    a._shouldScrollToFocusedItem &&
                    (Object(Ge.c)(a._getScrollParent(), a._getFocusedItem()), (a._shouldScrollToFocusedItem = !1))
              }),
              S()(u()(a), 'hasFocusedItem', function () {
                return a._getNumOfSearchItems() > 0
              }),
              S()(u()(a), 'selectFocusedItem', function () {
                if (a.hasFocusedItem()) {
                  var e = a._focusedItemRef && a._focusedItemRef.searchItemData
                  e && a._handleOnItemClick(e, a.state.focusIndex)
                }
              }),
              S()(u()(a), '_setFocusIndex', function (e, t) {
                var r = a.props.onItemFocusChanged
                ;(a._shouldScrollToFocusedItem = t), a.setState({ focusIndex: e }), r && r()
              }),
              S()(u()(a), '_resetFocus', function () {
                a._setFocusIndex(-1)
              }),
              S()(u()(a), 'focusNext', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e + 1 >= t ? 0 : e + 1
                  a._setFocusIndex(r, !0)
                }
              }),
              S()(u()(a), 'focusPrevious', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e - 1 < 0 ? t - 1 : e - 1
                  a._setFocusIndex(r, !0)
                }
              })
            var c,
              i,
              s = a.context.featureSwitches
            return (
              (a.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((c = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (i = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(nt, [c ? 'topic' : '', i ? 'event' : ''])),
              }),
              (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              a
            )
          }
          return (
            s()(r, [
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
                  return w.a.createElement(
                    re.a,
                    { style: r },
                    w.a.createElement(Z.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? w.a.createElement(ze.a, {
                          confirmButtonLabel: $e.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: $e.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: We.a.deleteRecentSearchesDialog,
                          text: $e.text,
                        })
                      : null,
                    c
                      ? w.a.createElement(G.a, {
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
                    var e = Object(Ge.a)(Y.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function () {
                  var e = this._focusedItemRef && Y.a.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            r
          )
        })(w.a.Component)
      S()(at, 'contextType', we.a)
      var ct = ae.a.create(function (e) {
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
        ot = z.forwardRef(at),
        it = 'SearchBox_Search_Input',
        st = r('TnY3'),
        lt = r('GZwR'),
        ut = r('4e/K')
      function dt(e, t) {
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
      function ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dt(Object(r), !0).forEach(function (t) {
                S()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var ft = D.a.ib2e46ee,
        yt = D.a.hbc99b02,
        mt = /^(\w+)$/,
        vt = [lt.a.Events, lt.a.Users, lt.a.Topics],
        St = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        bt = (function (e) {
          h()(r, e)
          var t = pt(r)
          function r(e, n) {
            var c, i
            return (
              o()(this, r),
              (i = t.call(this, e, n)),
              S()(u()(i), '_withNewTypeaheadUI', !1),
              S()(u()(i), '_reorderResults', function (e, t, r, n) {
                var a = Object(lt.f)(t, lt.b.User),
                  c = Object(lt.f)(t, lt.b.NoResult),
                  o = Object(lt.f)(r, lt.b.Topic),
                  s = Object(lt.f)(r, lt.b.NoResult),
                  l = Object(lt.f)(n, lt.b.Event),
                  u = [].concat(_()(Object(lt.e)(o)), _()(Object(lt.e)(a))),
                  d = (
                    't1' === i._rankedTypeaheadExperimentalValue
                      ? u.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === i._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = _()(e), r = e.length - 1; r > 0; r--) {
                            var n = Math.floor(Math.random() * (r + 1)),
                              a = t[n],
                              c = t[r]
                            ;(t[r] = a), (t[n] = c)
                          }
                          return t
                        })(u)
                      : u
                  ).map(function (e) {
                    var t = e.item
                    e.rank
                    return t
                  })
                return d.unshift.apply(d, _()(s)), d.unshift.apply(d, _()(l)), d.push.apply(d, _()(c)), e ? [e, d] : [d]
              }),
              S()(u()(i), '_renderSearchBoxEmptyState', function (e) {
                return w.a.createElement(ot, a()({}, e, { onItemClick: i._handleSearchItemClick }))
              }),
              S()(u()(i), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  r = e.link,
                  n = e.query,
                  a = e.queryMetadata,
                  c = e.recentSearchType,
                  o = i.props.addQuery
                t === F.b.SavedSearch
                  ? i._submitQuery({ query: n, shouldAddToRecentSearch: !1, src: j.a.SavedSearchClick })
                  : c === F.a.Keyword
                  ? i._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: j.a.RecentSearchClick })
                  : c === F.a.Event
                  ? (i._routeTransition({ pathname: '/i/events/'.concat(n) }),
                    a && a.title && o({ event: ht(ht({}, a), {}, { id: n, type: F.a.Event }) }))
                  : c === F.a.Topic
                  ? (i._routeTransition({ pathname: '/i/topics/'.concat(n) }),
                    a && a.name && o({ topic: ht(ht({}, a), {}, { id: n, type: F.a.Topic }) }))
                  : r && (i._routeTransition({ pathname: '/'.concat(r) }), o({ user: { id: n, type: F.a.User } }))
              }),
              S()(u()(i), '_handleSearchShortcut', function (e) {
                var t = i._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              S()(u()(i), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  r = St(t)
                if (r.match(mt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: lt.b.NoResult,
                    data: { text: yt({ screenName: r }), type: 'user' },
                  }
              }),
              S()(u()(i), '_handleOnDismiss', function () {
                var e = i.props.history,
                  t = e.location,
                  r = t.state || {}
                if (r.searchFocused) {
                  var n = ht(ht({}, t), {}, { state: ht(ht({}, r), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(n)
                }
              }),
              S()(u()(i), '_handleOnFocus', function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.history,
                  n = r.location,
                  a = n.state || {}
                if (!a.searchFocused) {
                  var c = ht(ht({}, n), {}, { state: ht(ht({}, a), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), r.push(c)
                }
              }),
              S()(u()(i), '_handleChange', function (e) {
                var t,
                  r = i.props.history.location
                !i._rankedTypeaheadExperimentalValue &&
                  null !== (t = r.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (i._rankedTypeaheadExperimentalValue = i.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  i.setState({ query: e })
              }),
              S()(u()(i), '_handleTypeaheadSubmit', function () {
                var e = i.state,
                  t = e.items,
                  r = e.query,
                  n = i.props.analytics
                ;/^\s*$/.test(r) ||
                  (n.scribe({
                    action: 'search',
                    data: { items: P.a.forTypeaheadResults(t), search_details: { query: r } },
                  }),
                  i._submitQuery({ query: r, shouldAddToRecentSearch: !0 }))
              }),
              S()(u()(i), '_handleItemClick', function (e, t) {
                var r = i.props.addQuery,
                  n = i.state.query
                switch (e.type) {
                  case lt.b.User:
                    if (e.data.id_str) r({ user: { id: e.data.id_str, type: F.a.User } })
                    i._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case lt.b.Topic:
                  case lt.b.Hashtag:
                    i._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
                    break
                  case lt.b.Event:
                    e.data && e.data.url
                      ? i._routeTransition({ pathname: x.b.parseInternalUrl(e.data.url) })
                      : i._submitQuery({ query: e.data.topic, src: j.a.TypeaheadClick })
                    break
                  case lt.b.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? i._routeTransition({ pathname: '/'.concat(St(n)) })
                      : 'topic' === a &&
                        i._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
                }
              }),
              S()(u()(i), '_handleItemsChanged', function (e) {
                i.setState({ items: e })
              }),
              S()(u()(i), '_routeTransition', function (e) {
                var t = e.params,
                  r = e.pathname,
                  n = e.query,
                  a = e.src,
                  c = i.props,
                  o = c.history,
                  s = c.location,
                  l = ht(
                    ht({}, s),
                    {},
                    {
                      pathname: r,
                      search: '',
                      query: t || (n ? { q: n, src: a } : {}),
                      state: ht(ht({}, s.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                o.replace(l)
              }),
              S()(u()(i), '_submitQuery', function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  n = void 0 !== r && r,
                  a = e.src,
                  c = void 0 === a ? j.a.Typed : a,
                  o = i.props,
                  s = o.addQuery,
                  l = o.mode,
                  u = o.onSubmit,
                  d = o.searchFilters,
                  h = o.searchRoute
                ;(u && u(t, c, i.state.lastSubmittedQuery === t), n) && s({ keyword: { query: t, type: F.a.Keyword } })
                var p = Object(F.g)({ query: t, querySrc: c, mode: l, searchFilters: d })
                i._routeTransition({ pathname: h, params: p, src: c }), i.setState({ lastSubmittedQuery: t })
              }),
              S()(u()(i), '_setInputRef', function (e) {
                i._inputRef = e
              }),
              (i.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(C.a)(null === (c = e.location.query) || void 0 === c ? void 0 : c.q),
              }),
              (i._withNewTypeaheadUI = i.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              i
            )
          }
          return (
            s()(r, [
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
                    r = e.isCompact,
                    n = e.isInSidebar,
                    a = e.isOnHomepage,
                    c = e.location,
                    o = e.placeholder,
                    i = this.state.query,
                    s = (c.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!c.state && !!c.state.searchFocused,
                    d =
                      't1' === this._rankedTypeaheadExperimentalValue || 't3' === this._rankedTypeaheadExperimentalValue
                  return w.a.createElement(
                    O.a,
                    { viewType: 'search_field' },
                    w.a.createElement(
                      re.a,
                      { style: _t.root },
                      w.a.createElement(ut.default, {
                        filter: vt,
                        forceVdlDisable: t,
                        getTopicExactMatch: i ? lt.h : void 0,
                        getUserExactMatch: i ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: _t.input,
                        isCompact: r,
                        isInSidebar: n,
                        isOnHomepage: a,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: d ? this._reorderResults : void 0,
                        placeholder: o,
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
            r
          )
        })(w.a.Component)
      S()(bt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: ft,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        S()(bt, 'contextType', we.a)
      var _t = ae.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(st.a)(E(bt))
    },
    UnyZ: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('yH/f')
      var n = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    V2l4: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserPicker', function () {
          return P
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        d = r('N+ot'),
        h = r.n(d),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        v = (r('z84I'), r('ho0z'), r('vrRf'), r('2G9S'), r('ERkP')),
        S = r.n(v),
        b = r('ZcYN'),
        _ = r('3XMw'),
        g = r.n(_),
        w = 'searchPeople',
        O = r('4e/K'),
        I = r('MWbm'),
        R = r('jhWN'),
        E = r('aV/s'),
        C = r('rHpw'),
        k = r('GZwR')
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
      var x = [k.a.Users],
        j = g.a.fc9dd578,
        T = g.a.gdb7bc24,
        P = (function (e) {
          u()(r, e)
          var t = D(r)
          function r(e, n) {
            var c
            return (
              a()(this, r),
              (c = t.call(this, e, n)),
              m()(s()(c), '_renderSelectedUsersList', function () {
                var e = c.props.selectedUsers
                return S.a.createElement(I.a, { style: A.selectedUsersList }, e.map(c._renderSelectedUserPill))
              }),
              m()(s()(c), '_renderSelectedUserPill', function (e) {
                var t = c.props.withCompactPills,
                  r = c.props.onRemove.bind(s()(c), e),
                  n =
                    e.type === k.b.User
                      ? S.a.createElement(R.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'custom',
                          uri: e.data.profile_image_url_https,
                        })
                      : void 0
                return S.a.createElement(E.a, {
                  accessibilityLabel: T({ name: e.data.name }),
                  avatar: n,
                  compact: t,
                  key: e.id,
                  mode: 'remove',
                  onClick: r,
                  style: A.selectionPill,
                  text: e.data.name,
                })
              }),
              m()(s()(c), '_getItemIsDisabled', function (e) {
                var t = c.props,
                  r = t.getItemIsDisabled
                return t.preselectedUsers.indexOf(e.id) >= 0 || !(!r || !r(e))
              }),
              m()(s()(c), '_getItemDisabledMessage', function (e) {
                var t = c.props,
                  r = t.getItemDisabledMessage
                return t.preselectedUsers.indexOf(e.id) >= 0 ? void 0 : r ? r(e) : void 0
              }),
              m()(s()(c), '_handleQueryChange', function (e) {
                var t = c.props.onQueryChange
                c.setState({ query: e }), t && t(e)
              }),
              m()(s()(c), '_handleOnSelect', function (e) {
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
                    n = e.renderCallout,
                    a = e.renderHeader,
                    c = e.selectedUsers,
                    o = e.shouldAutoFocus,
                    i = e.source,
                    s = c
                      .map(function (e) {
                        return e.id
                      })
                      .concat(r)
                  return S.a.createElement(
                    I.a,
                    { style: A.root },
                    S.a.createElement(O.default, {
                      alwaysOpen: !0,
                      disableClearButton: !0,
                      filter: x,
                      getItemDisabledMessage: this._getItemDisabledMessage,
                      getItemIsDisabled: this._getItemIsDisabled,
                      injectedItems: t,
                      isModal: !0,
                      onItemClick: this._handleOnSelect,
                      onQueryChange: this._handleQueryChange,
                      placeholder: j,
                      renderCallout: n,
                      renderHeader: a,
                      renderInSearchField: c.length ? this._renderSelectedUsersList : void 0,
                      renderUserDecoration: b.a,
                      selectedItems: s,
                      shouldAutoFocus: o,
                      shouldClearOnSelect: !0,
                      shouldFocusOnClear: !0,
                      source: i,
                      testID: w,
                      withSectionDivider: !1,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(S.a.Component)
      m()(P, 'defaultProps', { preselectedUsers: [], shouldAutoFocus: !0, withCompactPills: !1 })
      var A = C.a.create(function (e) {
        return {
          root: { flex: 1 },
          selectionPill: { margin: e.spaces.space4, maxWidth: 'calc(100% - '.concat(e.spaces.space16, ')') },
          selectedUsersList: { flexDirection: 'row', flexWrap: 'wrap', padding: e.spaces.space4 },
        }
      })
      t.default = P
    },
    'aV/s': function (e, t, r) {
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
        d = r('N+ot'),
        h = r.n(d),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        v = (r('2G9S'), r('hBvt'), r('uFXj'), r('ERkP')),
        S = r.n(v),
        b = r('t62R'),
        _ = r('3XMw'),
        g = r.n(_),
        w = r('I4+6'),
        O = r('cm6r'),
        I = r('UnyZ'),
        R = r('rHpw'),
        E = r('MWbm'),
        C = r('hOZg'),
        k = r('iY63'),
        D = r('IMYl')
      function x(e) {
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
      var j = { active: g.a.e557ad8d, expand: g.a.e3a58c27, remove: g.a.h517e8d8 },
        T = (function (e) {
          u()(r, e)
          var t = x(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(s()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    r = e.avatar,
                    n = e.compact,
                    a = e.disabled,
                    c = e.link,
                    o = e.mode,
                    i = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    u = e.style,
                    d = e.text,
                    h = this._renderIcon(!0, o),
                    p = s && this._renderIcon(!1, s.mode),
                    f = [P.root, n && P.compact, a && P.disabled, l && P.selected, u],
                    y = [P.content, h && P.withIcon, r && ((n && P.withAvatarImageCompact) || P.withAvatarImage)],
                    m = w.a.generate({
                      backgroundColor: l ? R.a.theme.colors.primary : 'transparent',
                      color: l ? R.a.theme.colors.white : R.a.theme.colors.primary,
                    })
                  return S.a.createElement(
                    E.a,
                    { style: f },
                    S.a.createElement(
                      O.a,
                      {
                        accessibilityLabel: t || (o ? j[o] : ''),
                        disabled: a,
                        interactiveStyles: m,
                        link: c,
                        onPress: i,
                        style: y,
                      },
                      this._renderAvatar(),
                      S.a.createElement(
                        b.b,
                        {
                          color: l ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: P.text,
                          weight: 'bold',
                        },
                        d,
                      ),
                      h,
                    ),
                    s
                      ? S.a.createElement(
                          O.a,
                          {
                            accessibilityLabel: s.accessibilityLabel || (s.mode ? j[s.mode] : ''),
                            disabled: a || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? j[s.mode] : '') },
                            interactiveStyles: m,
                            onPress: this._handleSecondaryClick,
                            style: P.secondaryControl,
                          },
                          S.a.createElement(E.a, { style: P.secondaryBorder }, p),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    r = this.props.selected,
                    n = [P.icon, r && P.iconSelected],
                    a = [P.icon]
                  switch (t) {
                    case I.a.Remove:
                      return S.a.createElement(C.a, { style: [P.dismissIcon, e && n] })
                    case I.a.Expand:
                      return S.a.createElement(k.a, { style: e ? n : a })
                    case I.a.Active:
                      return S.a.createElement(D.a, { style: n })
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  var e = this.props,
                    t = e.avatar,
                    r = e.compact
                  return t
                    ? S.a.createElement(E.a, { style: [P.avatarContainer, r ? P.avatarCompact : P.avatar] }, t)
                    : null
                },
              },
            ]),
            r
          )
        })(S.a.PureComponent)
      m()(T, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var P = R.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            borderColor: e.colors.gray200,
            borderRadius: e.borderRadii.infinite,
            borderStyle: 'solid',
            borderWidth: '1px',
            flexDirection: 'row',
            minHeight: e.spaces.space40,
            overflow: 'hidden',
          },
          content: {
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 1,
            paddingHorizontal: e.spaces.space16,
          },
          text: { width: '100%' },
          compact: { minHeight: e.spaces.space32 },
          disabled: { borderColor: e.colors.gray50 },
          selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary },
          avatar: { height: e.spaces.space32, width: e.spaces.space32 },
          avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 },
          avatarContainer: { justifyContent: 'center', marginRight: e.spaces.space8 },
          withAvatarImage: { paddingLeft: 'calc('.concat(e.spaces.space2, ' * 2)') },
          withAvatarImageCompact: { paddingLeft: 'calc('.concat(e.spaces.space1, ' * 3)') },
          icon: { color: e.colors.primary, flexShrink: 0, marginLeft: e.spaces.space12 },
          iconSelected: { color: e.colors.whiteOnColor },
          withIcon: { paddingRight: e.spaces.space12 },
          dismissIcon: { color: e.colors.gray300 },
          secondaryControl: { flexShrink: 0, justifyContent: 'center' },
          secondaryBorder: {
            borderLeftColor: e.colors.borderColor,
            borderLeftWidth: e.borderWidths.small,
            paddingHorizontal: e.spaces.space12,
          },
        }
      })
      t.a = T
    },
    bJYH: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GenericTypeaheadComposeWrapper', function () {
          return H
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
        d = r('N+ot'),
        h = r.n(d),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        v = (r('uFXj'), r('ERkP')),
        S = r.n(v),
        b = r('oEoC'),
        _ = r('oQhu'),
        g = r('7nmT'),
        w = r.n(g),
        O = r('WPfJ'),
        I = r('OEYw'),
        R = r('MWbm'),
        E = r('Irs7'),
        C = r('0FVZ'),
        k = r('xoZN'),
        D = r('7N4s'),
        x = r('rHpw'),
        j = r('GZwR')
      function T(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
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
          var r,
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var U = [j.a.Users],
        F = [j.a.Topics],
        L = 0,
        H = (function (e) {
          u()(r, e)
          var t = A(r)
          function r(e, n) {
            var c
            return (
              a()(this, r),
              (c = t.call(this, e, n)),
              m()(s()(c), '_typeaheadActive', !1),
              m()(s()(c), '_renderTypeaheadDropdown', function (e) {
                var t = c.props,
                  r = t.contextText,
                  n = t.isInlineReply,
                  a = t.onSelectItem,
                  o = t.source,
                  i = c.context.isModal,
                  s = e.resultType === j.a.Topics ? 'hashtag' : void 0,
                  l = S.a.createElement(I.a, {
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
                    topicType: s,
                    withItemAlwaysSelected: !0,
                  })
                return i || n
                  ? S.a.createElement(
                      C.a.HalfSheet,
                      null,
                      S.a.createElement(
                        S.a.Fragment,
                        null,
                        S.a.createElement(R.a, { onClick: c._handleDismiss, style: M.mask }),
                        l,
                      ),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(R.a, { onClick: c._handleDismiss, style: M.mask }),
                      l,
                    )
              }),
              m()(s()(c), 'render', function () {
                var e = c.props,
                  t = e.children,
                  r = e.query,
                  n = S.a.cloneElement(t, {
                    ariaAutocomplete: 'list',
                    ariaControls: c._dropdownDomId,
                    ariaActiveDescendant: c.state.ariaDescendantId,
                    ref: function (e) {
                      ;(c._textInputNode = w.a.findDOMNode(e)), (c._textInputRef = e)
                      var r = t.ref
                      r && r(e)
                    },
                  })
                return S.a.createElement(
                  R.a,
                  { style: M.inputContainer },
                  S.a.createElement(
                    k.a,
                    { onKeyDown: c._handleKeyDown },
                    n,
                    c._textInputNode && r ? c._renderTypeaheadDropdown(r) : null,
                  ),
                )
              }),
              m()(s()(c), '_getFilter', function (e) {
                return 'users' === e ? U : F
              }),
              m()(s()(c), '_calcStyle', function () {
                var e = c.context.isModal,
                  t = c.props,
                  r = t.isInline,
                  n = t.isInlineReply,
                  a = c._textInputNode,
                  o = window.innerHeight,
                  i = window.innerWidth,
                  s = (c._textInputRef && c._textInputRef.getTextInputHeight()) || 20
                if (a instanceof window.HTMLElement) {
                  if (e || r) {
                    var l = a.getBoundingClientRect()
                    return [c._getDropdownPositioningStyle(o, i, l.top, l.top + s, l.left, e, !!n), M.dropdownStyle]
                  }
                  return [c._getModalFullViewportStyle(s), M.modalFullViewportStyle]
                }
                return [c._getDropdownPositioningStyle(s, i, 0, 0, 0, e, !!n), M.dropdownStyle]
              }),
              m()(s()(c), '_handleKeyDown', function (e) {
                var t = c.state.selectedItem,
                  r = c.props,
                  n = r.onSelectItem,
                  a = r.query,
                  o = e.key
                b.g(e) &&
                  a &&
                  ('ArrowDown' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusNext(), e.preventDefault())
                    : 'ArrowUp' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusPrevious(), e.preventDefault())
                    : 'Enter' === o || 'Tab' === o
                    ? t && (n(t), e.preventDefault())
                    : 'Escape' === o && (c._handleDismiss(), e.preventDefault()))
              }),
              m()(s()(c), '_handleItemFocusChanged', function (e) {
                return c.setState({ ariaDescendantId: b.b(), selectedItem: e })
              }),
              m()(s()(c), '_handleTypeaheadRef', function (e) {
                c._typeaheadRef = e
              }),
              m()(s()(c), '_handleDismiss', function () {
                c._textInputRef && c._textInputRef.focus(), c.props.onDismiss()
              }),
              m()(
                s()(c),
                '_getDropdownHeight',
                Object(_.a)(function (e, t) {
                  var r = (50 * e) / 100
                  return r > t ? t : r
                }),
              ),
              m()(
                s()(c),
                '_getModalOrInlineReplyDropdownStyles',
                Object(_.a)(function (e, t, r) {
                  return e ? { bottom: ''.concat(r, 'px') } : { top: ''.concat(t, 'px') }
                }),
              ),
              m()(
                s()(c),
                '_getDropdownPositioningStyle',
                Object(_.a)(function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    s = 10,
                    l = t - a - s,
                    u = Math.min(l, 300),
                    d = e - n,
                    h = r,
                    p = d / e < 0.5 && h > d,
                    f = p ? c._getDropdownHeight(e, h - s) : c._getDropdownHeight(e, d - s),
                    y = { maxWidth: ''.concat(l, 'px'), minWidth: ''.concat(u, 'px'), maxHeight: ''.concat(f, 'px') }
                  return o || i
                    ? P(
                        P({}, y),
                        {},
                        { position: 'fixed', left: ''.concat(a, 'px') },
                        c._getModalOrInlineReplyDropdownStyles(p, n, e - r),
                      )
                    : P(
                        P({}, y),
                        {},
                        p ? { bottom: '100%', position: 'absolute' } : { top: '100%', position: 'absolute' },
                      )
                }),
              ),
              m()(
                s()(c),
                '_getModalFullViewportStyle',
                Object(_.a)(function (e) {
                  return { position: 'absolute', top: ''.concat(e || 0, 'px'), overflowX: 'hidden', overflowY: 'auto' }
                }),
              ),
              (c.state = { ariaDescendantId: b.b() }),
              (c._dropdownDomId = 'typeaheadDropdownWrapped-'.concat(L)),
              (L += 1),
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
        })(S.a.Component)
      m()(H, 'contextType', D.b), m()(H, 'defaultProps', { source: j.d.Compose })
      var M = x.a.create(function (e) {
        return {
          dropdownStyle: {
            backgroundColor: e.colors.cellBackground,
            borderRadius: e.borderRadii.small,
            boxShadow: e.boxShadows.medium,
            minHeight: 100,
            overflowX: 'hidden',
            overflowY: 'auto',
          },
          mask: P(P({}, x.a.absoluteFillObject), {}, { position: 'fixed' }),
          modalFullViewportStyle: {
            backgroundColor: e.colors.cellBackground,
            right: 0,
            left: 0,
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            minHeight: 100,
          },
          inputContainer: { flexGrow: 1, position: 'relative', width: '100%', zIndex: O.g },
        }
      })
      t.default = Object(E.a)(H, { component: 'compose' })
    },
    hiGS: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r.n(c),
        i = r('Lsrn'),
        s = r('k/Ka')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            o.a.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
        i =
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
        s = r('kIAd'),
        l = r('rHpw')
      function u(e, t) {
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
            ? u(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function h(e, t) {
        var r,
          n = s.b.scoper.find(function (n) {
            if (-1 !== n.srcInputs.indexOf(t)) return (r = e.match(n.regexp))
          }),
          a = ''
        return r && (a = r && (1 === r.length ? r[0] : r[1])), n ? d(d({}, n.scope), {}, { src: t, q: a }) : null
      }
      function p(e, t) {
        var r = t.slice(0, e),
          n = t.slice(e, t.length),
          a = r.search(s.b.WordEnd),
          c = a >= 0 ? r.slice(a) : '',
          o = n.search(s.b.WordBoundary),
          i = c + n.slice(0, o)
        return i.trim() ? { start: a, end: e + o, word: i } : { start: -1, end: -1, word: '' }
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
      var v = Object(i.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
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
        return W
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
        d = r('N+ot'),
        h = r.n(d),
        p = r('AuHH'),
        f = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        v = (r('2G9S'), r('LJOr'), r('KqXw'), r('ERkP')),
        S = r.n(v),
        b = r('sTyV'),
        _ = r('6/RC'),
        g = r('sebV'),
        w = r('G6rE'),
        O = r('rxPX'),
        I = Object(O.a)()
          .propsFromState(function () {
            return { loggedInUser: w.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        R = r('3XMw'),
        E = r.n(R),
        C = r('OrGc'),
        k = r('QK5w'),
        D = r('aITJ'),
        x = r('MWbm'),
        j = r('TnY3'),
        T = r('rHpw'),
        P = r('t62R'),
        A = r('v6aA'),
        U = r('uScj'),
        F = r('fs1G'),
        L = r('BcsE'),
        H = r('VPAj')
      function M(e, t) {
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
            ? M(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function q(e) {
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
      var B = E.a.b47e760d,
        V = E.a.fd2c7b43,
        K = new U.a(),
        Q = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        W = function (e) {
          return _.canUseDOM ? K.subscribe(e).unsubscribe : F.a
        },
        z = (function (e) {
          u()(r, e)
          var t = q(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(s()(e), '_bindKeyboardShortcuts', function () {
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
                  i =
                    ((t = {}),
                    m()(t, C.e.search, o()),
                    m()(t, C.e.goToUser, o('@')),
                    m()(t, C.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    m()(t, C.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    m()(t, C.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      m()(t, C.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      m()(t, C.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      m()(t, C.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  l = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  u =
                    c && l
                      ? N(
                          N({}, s(c)),
                          {},
                          m()({}, C.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : c
                      ? s(c)
                      : {},
                  d = N(
                    N(N({}, i), u),
                    {},
                    ((r = {}),
                    m()(r, C.e.goHome, function () {
                      return a.push('/home')
                    }),
                    m()(r, C.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    m()(r, C.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    m()(r, C.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    m()(r, C.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    m()(r, C.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    m()(r, C.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    m()(r, C.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    m()(r, C.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    r),
                  ),
                  h = e.props.loggedInUserScreenName ? d : i
                e._unbindKeyboardShortcuts = Object(b.a)(h)
              }),
              m()(s()(e), '_handleKeyDown', function (t) {
                Q(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              m()(s()(e), '_handleKeyUp', function (t) {
                if (!Q(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var r = e._backspaceDown,
                    n = !!Object(L.a)(r) && Date.now() - r < 500,
                    a = Object(k.a)({}, { location: e.props.location })
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
                      g.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    D.b.isKaiOS() &&
                      g.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? S.a.createElement(
                        x.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: T.a.visuallyHidden },
                        S.a.createElement(P.b, null, B),
                        S.a.createElement(P.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, V),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(S.a.Component)
      m()(z, 'contextType', A.a)
      var G = I(z),
        Z = _.canUseDOM ? Object(j.a)(G) : Object(H.a)(null)
      t.a = Z
    },
    sYRn: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r.n(n),
        c = r('eb3s'),
        o = r('3XMw'),
        i = r.n(o),
        s = r('4ZbN'),
        l = i.a.hffea05c,
        u = i.a.j037e373,
        d = i.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          r = e.onConfirm
        return a.a.createElement(c.a, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: l,
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
        i = r('T0aG'),
        s = r.n(i),
        l = (r('yH/f'), r('2G9S'), r('LW0h'), r('JtPf'), r('7x/C'), r('oEOe')),
        u = r('kGix'),
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
        v = { fetchStatus: u.a.NONE, savedSearches: [] },
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
                Object(h.a)('Saved search results are not type array', { extra: { savedSearchResultsType: s()(r) } }),
              y(y({}, e), {}, { fetchStatus: u.a.LOADED, savedSearches: n && r ? r : [] })
            )
          case S.FAILURE:
            return y(y({}, e), {}, { fetchStatus: u.a.FAILED })
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
            return Object(l.b)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: b,
              context: 'SAVE_SEARCH',
            })
          }
        },
        I = function (e) {
          return function (t, r, n) {
            var a = n.api
            return Object(l.b)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
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
  },
])
//# sourceMappingURL=WIPED
