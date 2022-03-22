;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '4ZbN': function (e, t, a) {
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
    '72nz': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SearchBoxContainer', function () {
          return ht
        })
      var r = a('yiKp'),
        n = a.n(r),
        c = a('97Jx'),
        o = a.n(c),
        i = a('s3M2'),
        s = a.n(i),
        l = a('VrFO'),
        u = a.n(l),
        d = a('Y9Ll'),
        h = a.n(d),
        p = a('1Pcy'),
        f = a.n(p),
        m = a('5Yy7'),
        y = a.n(m),
        v = a('2VqO'),
        S = a.n(v),
        b = a('KEM+'),
        _ = a.n(b),
        g = a('RhWx'),
        E = a.n(g),
        w =
          (a('2G9S'),
          a('tQbP'),
          a('z84I'),
          a('M+/F'),
          a('LW0h'),
          a('7x/C'),
          a('jwue'),
          a('+oxZ'),
          a('hBpG'),
          a('hBvt'),
          a('ho0z'),
          a('KqXw'),
          a('WNMA'),
          a('MvUL'),
          a('3uku'),
          a('jQ3i'),
          a('ERkP')),
        C = a.n(w),
        I = a('+Kfv'),
        k = a('wtjx'),
        R = a('rxPX'),
        x = Object(R.a)()
          .propsFromActions(function () {
            return { addQuery: k.a }
          })
          .withAnalytics({ component: 'search_box' }),
        T = a('Hw0q'),
        D = a('3XMw'),
        O = a.n(D),
        L = a('8jkQ'),
        A = a('u3ZE'),
        F = a('rRIm'),
        U = a('Rp9C'),
        j = (a('vrRf'), a('5BYb'), a('+KXO'), a('x4t0'), a('wFPu'), a('vfdX'), a('lnti')),
        H = a('hqKg'),
        P = a('3IPs'),
        N = a('M0jS'),
        M = a('G6rE'),
        q = a('k49u'),
        B = a('J4ZH'),
        z = a('0KEI'),
        V = a('v4XE'),
        K = a('kGix'),
        Q = function (e) {
          return (
            Object(q.c)(e, q.a.GenericUserNotFound) ||
            Object(q.c)(e, q.a.OtherUserSuspended) ||
            Object(q.c)(e, q.a.AddressBookLookupNotFound)
          )
        },
        G = Object(R.a)()
          .propsFromState(function () {
            var e = Object(H.createSelector)(k.g, M.e.selectFetchStatuses, function (e, t) {
                var a = Object(j.a)(
                  e.map(function (e) {
                    var a,
                      r = null === (a = e.user) || void 0 === a ? void 0 : a.id
                    return r && t[r] ? { id: r, fetchStatus: t[r] } : void 0
                  }),
                )
                return Object(B.a)(a, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(H.createSelector)(e, function (e) {
                return (e[K.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              a = Object(H.createSelector)(e, M.e.selectErrors, function (e, t) {
                return (e[K.a.FAILED] || [])
                  .filter(function (e) {
                    var a = e.id
                    return Q(t[a] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              r = Object(H.createSelector)(e, M.e.selectErrors, function (e, t) {
                var a = (e[K.a.FAILED] || []).filter(function (e) {
                  var a = e.id
                  return !Q(t[a] || {})
                })
                return (e[K.a.LOADING] || []).length > 0
                  ? K.a.LOADING
                  : (e[K.a.LOADED] || []).length > 0
                  ? K.a.LOADED
                  : a.length > 0
                  ? K.a.FAILED
                  : K.a.NONE
              }),
              c = Object(H.createSelector)(k.g, function (e) {
                return e.map(function (e) {
                  return n()(n()({}, e), {}, { category: P.b.RecentSearch })
                })
              }),
              o = Object(H.createSelector)(V.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: P.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: k.e,
              recentSearches: c,
              usersFetchStatus: r,
              invalidRecentSearchUserIds: a,
              failedRecentSearchUserIds: t,
              savedSearches: o,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              a = e.invalidRecentSearchUserIds,
              r = e.isRecentSearchDataLoaded,
              n = e.recentSearches,
              c = e.savedSearches,
              o = e.usersFetchStatus,
              i = !n.filter(function (e) {
                var t = e.user
                return t && a.indexOf(t.id) < 0
              }).length,
              s = o !== K.a.LOADING && r && i ? K.a.LOADED : o
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: a,
              recentSearches: n,
              fetchStatus: s,
              savedSearches: c,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: k.b,
              createLocalApiErrorHandler: Object(z.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: V.a,
              fetchRecentSearchesIfNeeded: k.c,
              fetchSavedSearchesIfNeeded: V.b,
              fetchUsersIfNeeded: M.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: N.b.fetchManyIfNeeded,
              removeQuery: k.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        W = a('sYRn'),
        X = a('v//M'),
        Y = a('7nmT'),
        Z = a.n(Y),
        J = (a('1t7P'), a('jQ/y'), a('m3Bd')),
        $ = a.n(J),
        ee = a('hOZg'),
        te = a('5T6p'),
        ae = a('MWbm'),
        re = a('/yvb'),
        ne = a('rHpw'),
        ce = ['id', 'onRemove'],
        oe = O.a.e68b09b4,
        ie = (function (e) {
          y()(a, e)
          var t = S()(a)
          function a() {
            return u()(this, a), t.apply(this, arguments)
          }
          return (
            h()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    a = e.onRemove,
                    r = $()(e, ce)
                  return t
                    ? C.a.createElement(
                        ae.a,
                        { style: se.root },
                        C.a.createElement(te.a, r),
                        C.a.createElement(re.a, {
                          accessibilityLabel: oe,
                          icon: C.a.createElement(ee.a, null),
                          onPress: a,
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
                    a = e.image,
                    r = e.supportText,
                    n = e.title
                  return {
                    category: P.b.RecentSearch,
                    query: t,
                    recentSearchType: P.a.Event,
                    queryMetadata: { id: t, image: a, title: n, supportText: r },
                  }
                },
              },
            ]),
            a
          )
        })(C.a.PureComponent),
        se = ne.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        le = ie,
        ue = a('j7Bv'),
        de = a('5mJL'),
        he = a('t62R'),
        pe = a('EHV7'),
        fe = C.a.createElement(ee.a, null),
        me = O.a.e68b09b4,
        ye = (function (e) {
          y()(a, e)
          var t = S()(a)
          function a() {
            return u()(this, a), t.apply(this, arguments)
          }
          return (
            h()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    a = e.id,
                    r = e.name,
                    n = e.onRemove,
                    c = e.withNewTypeaheadUI
                  if (!a) return null
                  var o = c ? 'xxxLarge' : 'xLarge',
                    i = C.a.createElement(ue.a, { Icon: pe.a, color: 'primary', size: o, style: ve.searchIcon })
                  return C.a.createElement(
                    de.a,
                    { avatarCell: i, avatarSize: o, cellStyle: ve.bodyColumn },
                    C.a.createElement(
                      ae.a,
                      null,
                      C.a.createElement(he.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, r),
                      C.a.createElement(he.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    C.a.createElement(re.a, {
                      accessibilityLabel: me,
                      icon: fe,
                      onPress: n,
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
                    a = e.id,
                    r = e.name
                  return a
                    ? {
                        category: P.b.RecentSearch,
                        query: a,
                        recentSearchType: P.a.Topic,
                        queryMetadata: { id: a, name: r, description: t },
                      }
                    : null
                },
              },
            ]),
            a
          )
        })(C.a.Component),
        ve = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        Se = function (e, t) {
          return M.e.select(e, t.id)
        },
        be = function (e, t) {
          return Object(N.c)(e, t.id)
        },
        _e = Object(R.a)().propsFromState(function () {
          return { user: Se, userSpace: be }
        }),
        ge = a('v6aA'),
        Ee = a('IMA+'),
        we = C.a.createElement(ee.a, null),
        Ce = O.a.e68b09b4,
        Ie = O.a.fd06b02f,
        ke = (function (e) {
          y()(a, e)
          var t = S()(a)
          function a() {
            var e
            u()(this, a)
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++) n[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              _()(f()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              _()(f()(e), '_handleClick', function () {
                var t = e.props,
                  a = t.index,
                  r = t.onItemClick,
                  n = e.searchItemData
                n && r(n, a)
              }),
              e
            )
          }
          return (
            h()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    a = e.style,
                    r = e.user,
                    n = e.userSpace,
                    c = e.withNewTypeaheadUI,
                    o = this.context.featureSwitches
                  if (!r) return null
                  var i = n && o.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? n : void 0
                  i && (i.accessibilityLabel = Ie({ screenName: r.screen_name }))
                  var s = C.a.createElement(re.a, {
                    accessibilityLabel: Ce,
                    icon: we,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return C.a.createElement(Ee.a, {
                    avatarSize: 'xLarge',
                    avatarUri: r.profile_image_url_https,
                    decoration: s,
                    displayMode: c ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: i,
                    screenName: r.screen_name,
                    style: a,
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
                        category: P.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: P.a.User,
                      }
                    : null
                },
              },
            ]),
            a
          )
        })(C.a.Component)
      _()(ke, 'contextType', ge.a)
      var Re = _e.forwardRef(ke),
        xe = a('oQhu'),
        Te = a('hiGS'),
        De = a('Gfoi'),
        Oe = C.a.createElement(ee.a, null),
        Le = C.a.createElement(Te.a, null),
        Ae = Object(xe.a)(function (e) {
          return e === P.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Fe = Object(xe.a)(function (e) {
          return e === P.b.SavedSearch ? Le : Oe
        }),
        Ue = (function (e) {
          y()(a, e)
          var t = S()(a)
          function a() {
            var e
            u()(this, a)
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++) n[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              _()(f()(e), '_getButtonType', function () {
                var t = e.props.category
                return Ae(t)
              }),
              _()(f()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Fe(t)
              }),
              e
            )
          }
          return (
            h()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    a = e.query,
                    r = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    n = C.a.createElement(ue.a, { Icon: De.a, color: 'neutral', size: r, style: je.searchIcon })
                  return C.a.createElement(
                    de.a,
                    { avatarCell: n, avatarSize: r, cellStyle: je.bodyColumn },
                    C.a.createElement(he.b, { numberOfLines: 1, withHashflags: !0 }, a),
                    C.a.createElement(re.a, {
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
                    recentSearchType: t === P.b.RecentSearch ? P.a.Keyword : void 0,
                  }
                },
              },
            ]),
            a
          )
        })(C.a.Component),
        je = ne.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        He = Ue,
        Pe = a('htQn'),
        Ne = { viewType: 'search_item' },
        Me = (function (e) {
          y()(a, e)
          var t = S()(a)
          function a(e, r) {
            var n
            return (
              u()(this, a),
              (n = t.call(this, e, r)),
              _()(f()(n), '_renderSearchItem', function () {
                var e = n.props,
                  t = e.index,
                  a = e.item,
                  r = e.onItemClick
                return a.keyword
                  ? C.a.createElement(He, {
                      category: a.category,
                      onRemove: n._handleOnRemove,
                      query: a.keyword.query,
                      ref: n._handleItemRef,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : a.user
                  ? C.a.createElement(Re, {
                      id: a.user.id || '',
                      index: t,
                      onItemClick: r,
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      style: qe.itemPadding,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : a.topic
                  ? C.a.createElement(ye, {
                      description: a.topic.description || '',
                      id: a.topic.id,
                      name: a.topic.name || '',
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : a.event
                  ? C.a.createElement(le, {
                      id: a.event.id,
                      image: a.event.image || { url: '', height: 0, width: 0 },
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      supportText: a.event.supportText || '',
                      title: a.event.title || '',
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : null
              }),
              _()(f()(n), '_handleItemRef', function (e) {
                n._itemRef = e
              }),
              _()(f()(n), '_handleOnRemove', function (e) {
                var t = n.props,
                  a = t.index,
                  r = t.item
                ;(0, t.onRemoveQuery)(r, a), e.stopPropagation()
              }),
              _()(f()(n), '_handleOnClick', function () {
                var e = n.props,
                  t = e.index,
                  a = e.item,
                  r = e.onItemClick
                a.user || (n.searchItemData && r(n.searchItemData, t))
              }),
              (n._withNewTypeaheadUI = n.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              n
            )
          }
          return (
            h()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.domId,
                    a = e.item,
                    r = e.testID
                  return C.a.createElement(
                    I.a,
                    { behavioralEventContext: Ne },
                    C.a.createElement(
                      Pe.a,
                      {
                        accessibilityRole: 'option',
                        accessibilityState: { selected: !!t },
                        focusable: !0,
                        nativeID: t,
                        onClick: this._handleOnClick,
                        style: [qe.root, t && qe.focused, !(null != a && a.user) && qe.itemPadding],
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
            a
          )
        })(C.a.Component)
      _()(Me, 'contextType', ge.a)
      var qe = ne.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        Be = Me,
        ze = a('4ZbN'),
        Ve = a('eb3s'),
        Ke = a('MXDK'),
        Qe = O.a.ee295fbe,
        Ge = { headline: O.a.f45c425f, text: O.a.caae4dd9, confirmButtonLabel: O.a.dbd5d40f },
        We = O.a.a8d68f61,
        Xe = O.a.c6530778,
        Ye = O.a.e047b8fa,
        Ze = ['user', 'keyword'],
        Je = (function (e) {
          y()(a, e)
          var t = S()(a)
          function a(e, r) {
            var c
            u()(this, a),
              (c = t.call(this, e, r)),
              _()(f()(c), '_withNewTypeaheadUI', !1),
              _()(f()(c), '_getRecentSearchItems', function () {
                var e = c.props,
                  t = e.failedRecentSearchUserIds,
                  a = e.recentSearches,
                  r = c.state.allowedRecentSearchItems,
                  n = a
                    .filter(function (e) {
                      var a = e.user
                      return !a || t.indexOf(a.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return r.includes(e)
                      })
                    })
                return n.length > 15 ? n.slice(0, 15) : n
              }),
              _()(f()(c), '_render', function () {
                var e = c.props,
                  t = e.domId,
                  a = e.savedSearches,
                  r = 0 === c._getNumOfSearchItems(),
                  n = c._getRecentSearchItems()
                return r
                  ? C.a.createElement(
                      ae.a,
                      { style: $e.emptyState, testID: ze.a.typeaheadEmptySearch },
                      C.a.createElement(he.b, { align: 'center', color: 'gray700' }, Qe),
                    )
                  : C.a.createElement(
                      ae.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      n.length > 0
                        ? C.a.createElement(
                            C.a.Fragment,
                            null,
                            C.a.createElement(
                              ae.a,
                              { style: $e.header, testID: ze.a.typeaheadRecentSearchesHeader },
                              C.a.createElement(he.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, We),
                              C.a.createElement(
                                re.a,
                                { onPress: c._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                Ye,
                              ),
                            ),
                            n.map(function (e, t) {
                              return c._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      a.length > 0
                        ? C.a.createElement(
                            C.a.Fragment,
                            null,
                            C.a.createElement(
                              ae.a,
                              {
                                accessibilityHidden: !0,
                                style: [$e.header, $e.borderTop],
                                testID: ze.a.typeaheadSavedSearchesHeader,
                              },
                              C.a.createElement(he.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Xe),
                            ),
                            c._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              _()(f()(c), '_renderRecentSearchItem', function (e, t) {
                var a = c.props.ariaDescendantId,
                  r = c.state.focusIndex === t
                return C.a.createElement(Be, {
                  domId: r ? a : void 0,
                  index: t,
                  item: e,
                  key: c._chooseKeyType(e, t),
                  onItemClick: c._handleOnItemClick,
                  onRemoveQuery: c._handleRemoveQuery,
                  ref: r ? c._setFocusedItemRef : void 0,
                  testID: ze.a.typeaheadRecentSearchesItem,
                })
              }),
              _()(f()(c), '_chooseKeyType', function (e, t) {
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
              _()(f()(c), '_renderSavedSearches', function () {
                var e = c.props,
                  t = e.ariaDescendantId,
                  a = e.savedSearches,
                  r = c.state.focusIndex,
                  n = c._getRecentSearchItems(),
                  o = E()(a)
                return (
                  o.reverse(),
                  C.a.createElement(
                    ae.a,
                    { testID: ze.a.typeaheadSavedSearchesContainer },
                    o.map(function (e, a) {
                      var o = r === a + n.length
                      return C.a.createElement(Be, {
                        domId: o ? t : void 0,
                        index: a,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: c._handleOnItemClick,
                        onRemoveQuery: c._handleRemoveQuery,
                        ref: o ? c._setFocusedItemRef : void 0,
                        testID: ze.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              _()(f()(c), '_getNumOfSearchItems', function () {
                var e = c.props.savedSearches,
                  t = c._getRecentSearchItems()
                return e.length + t.length
              }),
              _()(f()(c), '_handleUsersRetry', function () {
                c._fetchUsersDetailsIfNeeded()
              }),
              _()(f()(c), '_fetchUsersDetailsIfNeeded', function () {
                var e = c.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchUsersIfNeeded,
                  r = e.fetchUsersPresenceIfNeeded,
                  n = e.invalidRecentSearchUserIds,
                  o = e.recentSearches,
                  i = c.context,
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
                  })(o, n)
                a(u).catch(t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && r(u).catch(t({}))
              }),
              _()(f()(c), '_handleRemoveQuery', function (e, t) {
                var a = c.props,
                  r = a.analytics,
                  n = a.removeQuery
                switch (e.category) {
                  case P.b.RecentSearch:
                    var o = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    n(o), c._resetFocus()
                    var i = U.a.forRecentSearchResult(o, t),
                      s = c._handleRemoveAction(e)
                    i && r.scribe({ action: s, data: { items: [i] } })
                    break
                  case P.b.SavedSearch:
                    c.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              _()(f()(c), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              _()(f()(c), '_handleClearAllClick', function () {
                c.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              _()(f()(c), '_handleOnClearAllConfirm', function () {
                var e = c.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), c.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              _()(f()(c), '_handleOnClearAllCancel', function () {
                c.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              _()(f()(c), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.deleteSavedSearch,
                  r = e.savedSearches,
                  n = c.state.savedSearchIdToDelete,
                  o = r.findIndex(function (e) {
                    return e.savedSearchId === n
                  }),
                  i = r[o]
                if (n) {
                  a(n)
                  var s = i && U.a.forSavedSearchResult(i.keyword.query, o)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                c.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              _()(f()(c), '_handleOnDeleteSavedSearchCancel', function () {
                c.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              _()(f()(c), '_handleOnItemClick', function (e, t) {
                var a = c.props,
                  r = a.onDismiss
                ;(0, a.onItemClick)(e, t), c._scribeClick(e, t), r && r()
              }),
              _()(f()(c), '_scribeRecentSearchImpression', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.recentSearches
                if (a && a.length) {
                  var r = Object(j.a)(
                    a.map(function (e, t) {
                      return U.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: r } })
                }
              }),
              _()(f()(c), '_scribeSavedSearchImpression', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.savedSearches
                if (a && a.length) {
                  var r = Object(j.a)(
                    a.map(function (e, t) {
                      return U.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: r } })
                }
              }),
              _()(f()(c), '_scribeClick', function (e, t) {
                var a = c.props.analytics
                switch (e.category) {
                  case P.b.SavedSearch:
                    var r = U.a.forSavedSearchResult(e.query, t)
                    a.scribe({ element: 'typeahead', action: 'click', data: { targets: [r] } })
                    break
                  case P.b.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === P.a.User
                          ? { user: { type: P.a.User, id: e.query } }
                          : e.recentSearchType === P.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: n()(n()({}, e.queryMetadata), {}, { type: P.a.Event, id: e.query }) }
                          : e.recentSearchType === P.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: n()(n()({}, e.queryMetadata), {}, { type: P.a.Topic, id: e.query }) }
                          : { keyword: { type: P.a.Keyword, query: e.query } })
                    var i = o && U.a.forRecentSearchResult(o, t)
                    i && a.scribe({ action: 'click', data: { targets: [i] } })
                }
              }),
              _()(f()(c), '_setFocusedItemRef', function (e) {
                ;(c._focusedItemRef = e),
                  e &&
                    c._shouldScrollToFocusedItem &&
                    (Object(Ke.c)(c._getScrollParent(), c._getFocusedItem()), (c._shouldScrollToFocusedItem = !1))
              }),
              _()(f()(c), 'hasFocusedItem', function () {
                return c._getNumOfSearchItems() > 0
              }),
              _()(f()(c), 'selectFocusedItem', function () {
                if (c.hasFocusedItem()) {
                  var e = c._focusedItemRef && c._focusedItemRef.searchItemData
                  e && c._handleOnItemClick(e, c.state.focusIndex)
                }
              }),
              _()(f()(c), '_setFocusIndex', function (e, t) {
                var a = c.props.onItemFocusChanged
                ;(c._shouldScrollToFocusedItem = t), c.setState({ focusIndex: e }), a && a()
              }),
              _()(f()(c), '_resetFocus', function () {
                c._setFocusIndex(-1)
              }),
              _()(f()(c), 'focusNext', function () {
                var e = c.state.focusIndex,
                  t = c._getNumOfSearchItems()
                if (0 !== t) {
                  var a = e + 1 >= t ? 0 : e + 1
                  c._setFocusIndex(a, !0)
                }
              }),
              _()(f()(c), 'focusPrevious', function () {
                var e = c.state.focusIndex,
                  t = c._getNumOfSearchItems()
                if (0 !== t) {
                  var a = e - 1 < 0 ? t - 1 : e - 1
                  c._setFocusIndex(a, !0)
                }
              })
            var o,
              i,
              s = c.context.featureSwitches
            return (
              (c.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((o = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (i = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(Ze, [o ? 'topic' : '', i ? 'event' : ''])),
              }),
              (c._withNewTypeaheadUI = c.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              c
            )
          }
          return (
            h()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    a = e.fetchRecentSearchesIfNeeded,
                    r = e.fetchSavedSearchesIfNeeded,
                    n = e.recentSearches,
                    c = e.savedSearches
                  a(),
                    r().catch(t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((n && n.length) || (c && c.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.recentSearches,
                    r = t.savedSearches
                  e.recentSearches !== a &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== r && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.style,
                    r = this.state,
                    n = r.shouldShowClearAllConfirmationSheet,
                    c = r.shouldShowDeleteSavedSearchConfirmation
                  return C.a.createElement(
                    ae.a,
                    { style: a },
                    C.a.createElement(X.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    n
                      ? C.a.createElement(Ve.a, {
                          confirmButtonLabel: Ge.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Ge.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: ze.a.deleteRecentSearchesDialog,
                          text: Ge.text,
                        })
                      : null,
                    c
                      ? C.a.createElement(W.a, {
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
                    var e = Object(Ke.a)(Z.a.findDOMNode(this))
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
            a
          )
        })(C.a.Component)
      _()(Je, 'contextType', ge.a)
      var $e = ne.a.create(function (e) {
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
        et = G.forwardRef(Je),
        tt = 'SearchBox_Search_Input',
        at = a('TnY3'),
        rt = a('GZwR'),
        nt = a('4e/K'),
        ct = O.a.ib2e46ee,
        ot = O.a.hbc99b02,
        it = /^(\w+)$/,
        st = [rt.a.Events, rt.a.Users, rt.a.Topics],
        lt = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        ut = { viewType: 'search_field' },
        dt = ['t1', 't3'],
        ht = (function (e) {
          y()(a, e)
          var t = S()(a)
          function a(e, r) {
            var c, i
            return (
              u()(this, a),
              (i = t.call(this, e, r)),
              _()(f()(i), '_withNewTypeaheadUI', !1),
              _()(f()(i), '_flattenResults', function (e, t, a, r, n, c, o) {
                var l = Object(rt.f)(n, rt.b.User),
                  u = Object(rt.f)(a, rt.b.Topic),
                  d = Object(rt.f)(a, rt.b.NoResult),
                  h = Object(rt.f)(r, rt.b.Event),
                  p = [].concat(E()(Object(rt.e)(u)), E()(Object(rt.e)(l))),
                  f = (
                    't1' === i._rankedTypeaheadExperimentalValue
                      ? p.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === i._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = E()(e), a = e.length - 1; a > 0; a--) {
                            var r = Math.floor(Math.random() * (a + 1)),
                              n = t[r],
                              c = t[a]
                            ;(t[a] = n), (t[r] = c)
                          }
                          return t
                        })(p)
                      : p
                  ).map(function (e) {
                    var t = e.item
                    e.rank
                    return t
                  }),
                  m = s()(f),
                  y = m[0],
                  v = m.slice(1),
                  S = [y].concat(E()(c || []), E()(v)).filter(Boolean),
                  b = []
                S.forEach(function (e) {
                  var t = e.id
                  if ('user' !== e.type) b.push(e)
                  else if ('prefetch' === e.src) {
                    var a =
                      null == n
                        ? void 0
                        : n.find(function (e) {
                            var a = e.id
                            return t === a
                          })
                    a ? b.push(a) : b.push(e)
                  } else
                    'remote' !== e.src ||
                      b.find(function (e) {
                        var a = e.id
                        return t === a
                      }) ||
                      b.push(e)
                })
                var _ = 0,
                  g = b.filter(function (e) {
                    return 'user' !== e.type || (_ < 10 && ((_ += 1), !0))
                  })
                return g.unshift.apply(g, E()(d)), g.unshift.apply(g, E()(h)), o && g.push(o), e ? [e, g] : [g]
              }),
              _()(f()(i), '_renderSearchBoxEmptyState', function (e) {
                return C.a.createElement(et, o()({}, e, { onItemClick: i._handleSearchItemClick }))
              }),
              _()(f()(i), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  a = e.link,
                  r = e.query,
                  c = e.queryMetadata,
                  o = e.recentSearchType,
                  s = i.props.addQuery
                t === P.b.SavedSearch
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !1, src: A.a.SavedSearchClick })
                  : o === P.a.Keyword
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: A.a.RecentSearchClick })
                  : o === P.a.Event
                  ? (i._routeTransition({ pathname: '/i/events/'.concat(r) }),
                    c && c.title && s({ event: n()(n()({}, c), {}, { id: r, type: P.a.Event }) }))
                  : o === P.a.Topic
                  ? (i._routeTransition({ pathname: '/i/topics/'.concat(r) }),
                    c && c.name && s({ topic: n()(n()({}, c), {}, { id: r, type: P.a.Topic }) }))
                  : a && (i._routeTransition({ pathname: '/'.concat(a) }), s({ user: { id: r, type: P.a.User } }))
              }),
              _()(f()(i), '_handleSearchShortcut', function (e) {
                var t = i._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              _()(f()(i), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  a = lt(t)
                if (a.match(it))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: rt.b.NoResult,
                    data: { text: ot({ screenName: a }), type: 'user' },
                  }
              }),
              _()(f()(i), '_handleOnDismiss', function () {
                var e = i.props.history,
                  t = e.location,
                  a = t.state || {}
                if (a.searchFocused) {
                  var r = n()(n()({}, t), {}, { state: n()(n()({}, a), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(r)
                }
              }),
              _()(f()(i), '_handleOnFocus', function () {
                var e = i.props,
                  t = e.analytics,
                  a = e.history,
                  r = a.location,
                  c = r.state || {}
                if (!c.searchFocused) {
                  var o = n()(n()({}, r), {}, { state: n()(n()({}, c), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), a.push(o)
                }
              }),
              _()(f()(i), '_handleChange', function (e) {
                var t,
                  a = i.props.history.location
                !i._rankedTypeaheadExperimentalValue &&
                  null !== (t = a.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (i._rankedTypeaheadExperimentalValue = i.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  i.setState({ query: e })
              }),
              _()(f()(i), '_handleTypeaheadSubmit', function () {
                var e = i.state,
                  t = e.items,
                  a = e.query,
                  r = i.props.analytics
                ;/^\s*$/.test(a) ||
                  (r.scribe({
                    action: 'search',
                    data: { items: U.a.forTypeaheadResults(t), search_details: { query: a } },
                  }),
                  i._submitQuery({ query: a, shouldAddToRecentSearch: !0 }))
              }),
              _()(f()(i), '_handleItemClick', function (e, t) {
                var a = i.props.addQuery,
                  r = i.state.query
                switch (e.type) {
                  case rt.b.User:
                    if (e.data.id_str) a({ user: { id: e.data.id_str, type: P.a.User } })
                    i._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case rt.b.Topic:
                  case rt.b.Hashtag:
                    i._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: A.a.TypeaheadClick })
                    break
                  case rt.b.Event:
                    e.data && e.data.url
                      ? i._routeTransition({ pathname: L.b.parseInternalUrl(e.data.url) })
                      : i._submitQuery({ query: e.data.topic, src: A.a.TypeaheadClick })
                    break
                  case rt.b.NoResult:
                    var n = e.data.type
                    'user' === n
                      ? i._routeTransition({ pathname: '/'.concat(lt(r)) })
                      : 'topic' === n &&
                        i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: A.a.TypeaheadClick })
                }
              }),
              _()(f()(i), '_handleItemsChanged', function (e) {
                i.setState({ items: e })
              }),
              _()(f()(i), '_routeTransition', function (e) {
                var t = e.params,
                  a = e.pathname,
                  r = e.query,
                  c = e.src,
                  o = i.props,
                  s = o.history,
                  l = o.location,
                  u = n()(
                    n()({}, l),
                    {},
                    {
                      pathname: a,
                      search: '',
                      query: t || (r ? { q: r, src: c } : {}),
                      state: n()(n()({}, l.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                s.replace(u)
              }),
              _()(f()(i), '_submitQuery', function (e) {
                var t = e.query,
                  a = e.shouldAddToRecentSearch,
                  r = void 0 !== a && a,
                  n = e.src,
                  c = void 0 === n ? A.a.Typed : n,
                  o = i.props,
                  s = o.addQuery,
                  l = o.mode,
                  u = o.onSubmit,
                  d = o.searchFilters,
                  h = o.searchRoute
                ;(u && u(t, c, i.state.lastSubmittedQuery === t), r) && s({ keyword: { query: t, type: P.a.Keyword } })
                var p = Object(P.g)({ query: t, querySrc: c, mode: l, searchFilters: d })
                i._routeTransition({ pathname: h, params: p, src: c }), i.setState({ lastSubmittedQuery: t })
              }),
              _()(f()(i), '_setInputRef', function (e) {
                i._inputRef = e
              }),
              (i.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(T.a)(null === (c = e.location.query) || void 0 === c ? void 0 : c.q),
              }),
              (i._withNewTypeaheadUI = i.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              i
            )
          }
          return (
            h()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(F.b)(this._handleSearchShortcut))
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
                    a = e.isCompact,
                    r = e.isInSidebar,
                    n = e.isOnHomepage,
                    c = e.location,
                    o = e.placeholder,
                    i = this.state.query,
                    s = (c.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    u = !!c.state && !!c.state.searchFocused,
                    d = dt.includes(this._rankedTypeaheadExperimentalValue)
                  return C.a.createElement(
                    I.a,
                    { behavioralEventContext: ut },
                    C.a.createElement(
                      ae.a,
                      { style: pt.root },
                      C.a.createElement(nt.default, {
                        filter: st,
                        forceVdlDisable: t,
                        getTopicExactMatch: i ? rt.h : void 0,
                        getUserExactMatch: i ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: pt.input,
                        isCompact: a,
                        isInSidebar: r,
                        isOnHomepage: n,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: d ? this._flattenResults : void 0,
                        placeholder: o,
                        ref: this._setInputRef,
                        renderEmptyState: this._renderSearchBoxEmptyState,
                        rounded: !0,
                        shouldAutoFocus: u,
                        shouldClearOnSelect: !0,
                        shouldDeferPrefetch: !0,
                        source: rt.d.SearchBox,
                        testID: tt,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                        withSectionDivider: !this._withNewTypeaheadUI,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(C.a.Component)
      _()(ht, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: ct,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        _()(ht, 'contextType', ge.a)
      var pt = ne.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(at.a)(x(ht))
    },
    FITr: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    Nqmc: function (e, t, a) {
      'use strict'
      var r = a('m3Bd'),
        n = a.n(r),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        s = a.n(i),
        l = a('5Yy7'),
        u = a.n(l),
        d = a('2VqO'),
        h = a.n(d),
        p = a('KEM+'),
        f = a.n(p),
        m = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        y = a('ERkP'),
        v = a.n(y),
        S = a('t62R'),
        b = a('5mJL'),
        _ = a('nBUg'),
        g = a('qjak'),
        E = a('dC06'),
        w = a('rHpw'),
        C = a('XIXT'),
        I = a('yDX5'),
        k = a('MWbm'),
        R = [
          'avatarSize',
          'bottomControl',
          'iconStyle',
          'nativeID',
          'onLayout',
          'rightControl',
          'style',
          'testID',
          'textColor',
          'textSize',
          'topControl',
          'weight',
          'withBottomBorder',
          'withLeftPadding',
          'withTextCentered',
        ],
        x = { viewType: 'social_context' },
        T = (function (e) {
          u()(a, e)
          var t = h()(a)
          function a() {
            return o()(this, a), t.apply(this, arguments)
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    r = t.bottomControl,
                    c = t.iconStyle,
                    o = t.nativeID,
                    i = t.onLayout,
                    s = t.rightControl,
                    l = t.style,
                    u = t.testID,
                    d = t.textColor,
                    h = t.textSize,
                    p = t.topControl,
                    f = t.weight,
                    y = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, n()(t, R)),
                    w = Object(g.a)(E),
                    C = w.Icon,
                    I = w.accessibilityLabel,
                    T = w.link,
                    O = w.text,
                    L = v.a.createElement(
                      S.b,
                      { accessibilityLabel: I, color: d, nativeID: o, numberOfLines: 2, size: h, testID: u, weight: f },
                      O,
                    ),
                    A = this._getStyles(),
                    F = A.cellStyle,
                    U = A.viewStyle
                  return O
                    ? v.a.createElement(_.b.UseProps, null, function (t) {
                        return v.a.createElement(
                          m.a,
                          { behavioralEventContext: x },
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            p || null,
                            v.a.createElement(
                              k.a,
                              {
                                onLayout: i,
                                style: [l, U, t.socialContextRefreshEnabled() && !y && D.socialContextRefresh],
                              },
                              v.a.createElement(
                                b.a,
                                {
                                  avatarCell: C || (y ? null : void 0),
                                  avatarCellStyle: [
                                    c,
                                    D.socialContextIconColumn,
                                    !y && D.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !y && D.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: F,
                                },
                                v.a.createElement(
                                  k.a,
                                  { style: D.cellWrapper },
                                  v.a.createElement(
                                    k.a,
                                    {
                                      style: [
                                        D.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !y && D.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    T ? e._renderLink(T, L) : L,
                                  ),
                                  s || null,
                                ),
                              ),
                              r || null,
                            ),
                          ),
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderLink',
                value: function (e, t) {
                  var a = this.props,
                    r = a.contextType,
                    n = a.nativeID,
                    c = a.onClick,
                    o = a.retweetData,
                    i = a.textColor,
                    s = a.topicData,
                    l = (o || {}).screenName,
                    u = v.a.createElement(S.b, { color: i, link: e, nativeID: n, onClick: c }, t)
                  return r === E.a.Topic && s
                    ? v.a.createElement(C.a, { topicId: s.topicId }, u)
                    : r === E.a.Retweet && l
                    ? v.a.createElement(I.a, { screenName: l }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    r = e.withBottomBorder,
                    n = e.withTextCentered,
                    c = a === E.a.TextOnly,
                    o = r ? [D.bottomBorderMargin, t && D.bottomBorder] : [],
                    i = r && !t ? [D.bottomBorder] : []
                  return (
                    c && i.push(D.topicContext),
                    n && i.push(D.socialContextTextCentered),
                    { viewStyle: o, cellStyle: i }
                  )
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      f()(T, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var D = w.a.create(function (e) {
        return {
          socialContextIconColumn: { alignItems: 'flex-end', justifyContent: 'center' },
          bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical },
          cellWrapper: { flexDirection: 'row' },
          bottomBorder: {
            paddingBottom: e.spaces.space4,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            borderBottomColor: e.colors.borderColor,
          },
          topicContext: { paddingBottom: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')') },
          socialContextTextColumn: { alignItems: 'flex-start', flexShrink: 1, justifyContent: 'center' },
          unsetIconWidth: { flexBasis: 'unset' },
          socialContextRefreshIcon: { marginRight: e.spaces.space8 },
          socialContextRefresh: { marginBottom: e.spaces.space8 },
          socialContextRefreshTextColumn: { minHeight: e.spaces.space32 },
          socialContextTextCentered: { justifyContent: 'center' },
        }
      })
      t.a = T
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    dC06: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('yH/f'), a('ERkP')
      var r = Object.freeze({
        Community: 'Community',
        Pin: 'Pin',
        Retweet: 'Retweet',
        Like: 'Like',
        Follow: 'Follow',
        Moment: 'Moment',
        NewTweets: 'NewTweets',
        Reply: 'Reply',
        Conversation: 'Conversation',
        TextOnly: 'TextOnly',
        Facepile: 'Facepile',
        Feedback: 'Feedback',
        Topic: 'Topic',
        List: 'List',
        Location: 'Location',
        Megaphone: 'Megaphone',
        Bird: 'Bird',
        NewUser: 'NewUser',
        SmartBlockExpiration: 'SmartBlockExpiration',
        FollowMutual: 'FollowMutual',
        FollowFollowing: 'FollowFollowing',
        FollowFollowed: 'FollowFollowed',
        SocialProof: 'SocialProof',
        Spaces: 'Spaces',
        Sparkle: 'Sparkle',
        Trending: 'Trending',
      })
    },
    hiGS: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var r = a('ERkP'),
        n = a.n(r),
        c = a('t62R'),
        o = a('MAI/'),
        i = a('shC7'),
        s = a('dC06'),
        l = a('rHpw'),
        u = a('3XMw'),
        d = a.n(u),
        h = a('FITr'),
        p = a('yVEN'),
        f = a('uCrx'),
        m = a('6ZHn'),
        y = a('GcQN'),
        v = a('x0mb'),
        S = a('Hp3u'),
        b = a('yiKp'),
        _ = a.n(b),
        g = a('Lsrn'),
        E = a('k/Ka'),
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var C = w,
        I = a('EHV7'),
        k = a('wpLu'),
        R = a('EfHu'),
        x = a('cOhU'),
        T = a('cap5'),
        D = a('r9x5'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var L = O,
        A = a('0qK0'),
        F = a('aPcQ'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var j = U,
        H = a('lUZE'),
        P = d.a.jb767df7,
        N = d.a.bb3323fa,
        M = d.a.db0798ed,
        q = d.a.dc716ec8,
        B = function (e) {
          return n.a.createElement(c.b, { dir: i.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        z = function (e, t) {
          return t
            ? P
            : (function (e) {
                var t = B(e)
                return n.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        V = l.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        K = l.a.create(function (e) {
          return {
            circle: { color: e.colors.primary, width: '0.5em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorRed: { color: e.colors.magenta500 },
            grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: 'grayscale(100%)' },
            brandColor: { color: e.colors.brandColor },
          }
        })
      t.a = function (e) {
        var t = e.contextType,
          a = e.iconSize,
          r = e.link,
          c = e.retweetData,
          i = e.text,
          l = e.topicData,
          u = e.userAvatarUrls,
          d = c || {},
          b = d.isSelfRetweet,
          _ = d.name,
          g = d.screenName,
          E = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              r = V[t],
              c = [K.colorDeepGray, r],
              i = n.a.createElement(h.a, { style: c }),
              l = n.a.createElement(p.a, { style: c }),
              u = n.a.createElement(f.a, { style: c }),
              d = n.a.createElement(m.a, { style: c }),
              b = n.a.createElement(y.a, { style: c }),
              _ = n.a.createElement(v.a, { style: K.circle }),
              g = n.a.createElement(S.a, { style: c }),
              E = n.a.createElement(C, { style: c }),
              w = n.a.createElement(I.a, { style: c }),
              O = n.a.createElement(k.a, { style: c }),
              U = n.a.createElement(R.a, { style: c }),
              P = n.a.createElement(x.a, { style: c }),
              N = n.a.createElement(T.a, { style: c }),
              M = n.a.createElement(D.a, { style: c }),
              q = n.a.createElement(L, { style: c }),
              B = n.a.createElement(A.a, { style: c }),
              z = n.a.createElement(F.a, { style: c }),
              Q = n.a.createElement(j, { style: c }),
              G = n.a.createElement(o.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              W = n.a.createElement(H.a, { style: c })
            switch (e) {
              case s.a.Pin:
                return i
              case s.a.Retweet:
                return l
              case s.a.Like:
                return u
              case s.a.Follow:
                return d
              case s.a.Moment:
                return b
              case s.a.NewTweets:
                return _
              case s.a.Reply:
              case s.a.Conversation:
                return g
              case s.a.Feedback:
                return E
              case s.a.Topic:
                return w
              case s.a.List:
                return O
              case s.a.Location:
                return U
              case s.a.Community:
                return P
              case s.a.Spaces:
                return N
              case s.a.Sparkle:
                return M
              case s.a.SmartBlockExpiration:
                return q
              case s.a.SocialProof:
              case s.a.FollowFollowed:
                return Q
              case s.a.FollowMutual:
                return z
              case s.a.FollowFollowing:
                return B
              case s.a.Facepile:
                return G
              case s.a.Bird:
                return W
              case s.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case s.a.Retweet:
            return { Icon: E, text: i || z(_, b), link: g ? 'https://twitter.com/'.concat(g) : void 0 }
          case s.a.Pin:
            return { Icon: E, text: i || N }
          case s.a.Topic:
            return {
              Icon: E,
              accessibilityLabel:
                'Recommendation' === (null == l ? void 0 : l.functionalityType) ||
                'RecWithEducation' === (null == l ? void 0 : l.functionalityType)
                  ? q({ topicName: i })
                  : M({ topicName: i }),
              text: i ? B(i) : null,
              link: r,
            }
          default:
            return { Icon: E, text: i ? B(i) : null, link: r }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    rRIm: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return z
      })
      var r = a('yiKp'),
        n = a.n(r),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        s = a.n(i),
        l = a('1Pcy'),
        u = a.n(l),
        d = a('5Yy7'),
        h = a.n(d),
        p = a('2VqO'),
        f = a.n(p),
        m = a('KEM+'),
        y = a.n(m),
        v = (a('2G9S'), a('KqXw'), a('LJOr'), a('ERkP')),
        S = a.n(v),
        b = a('sTyV'),
        _ = a('6/RC'),
        g = a('sebV'),
        E = a('G6rE'),
        w = a('rxPX'),
        C = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: E.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        I = a('3XMw'),
        k = a.n(I),
        R = a('OrGc'),
        x = a('QK5w'),
        T = a('aITJ'),
        D = a('MWbm'),
        O = a('TnY3'),
        L = a('rHpw'),
        A = a('t62R'),
        F = a('v6aA'),
        U = a('uScj'),
        j = a('fs1G'),
        H = a('BcsE'),
        P = a('VPAj'),
        N = k.a.b47e760d,
        M = k.a.fd2c7b43,
        q = new U.a(),
        B = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        z = function (e) {
          return _.canUseDOM ? q.subscribe(e).unsubscribe : j.a
        },
        V = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a() {
            var e
            o()(this, a)
            for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(u()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  a,
                  r = e.props,
                  c = r.history,
                  o = r.loggedInUserScreenName,
                  i = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        q.getListeners().length
                          ? q.notify(e)
                          : c.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    y()(t, R.e.search, i()),
                    y()(t, R.e.goToUser, i('@')),
                    y()(t, R.e.openKeyboardShortcuts, function () {
                      return c.push('/i/keyboard_shortcuts')
                    }),
                    y()(t, R.e.goExplore, function () {
                      return c.push('/explore')
                    }),
                    y()(t, R.e.goSettings, function () {
                      return c.push('/settings')
                    }),
                    t),
                  l = function (e) {
                    var t
                    return (
                      (t = {}),
                      y()(t, R.e.goProfile, function () {
                        return c.push('/'.concat(e))
                      }),
                      y()(t, R.e.goLikes, function () {
                        return c.push('/'.concat(e, '/likes'))
                      }),
                      y()(t, R.e.goLists, function () {
                        return c.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  d =
                    o && u
                      ? n()(
                          n()({}, l(o)),
                          {},
                          y()({}, R.e.goTopArticles, function () {
                            return c.push('/i/articles')
                          }),
                        )
                      : o
                      ? l(o)
                      : {},
                  h = n()(
                    n()(n()({}, s), d),
                    {},
                    ((a = {}),
                    y()(a, R.e.goHome, function () {
                      return c.push('/home')
                    }),
                    y()(a, R.e.goDisplay, function () {
                      return c.push('/i/display')
                    }),
                    y()(a, R.e.goNotifications, function () {
                      return c.push('/notifications')
                    }),
                    y()(a, R.e.goMentions, function () {
                      return c.push('/notifications/mentions')
                    }),
                    y()(a, R.e.goMessages, function () {
                      return c.push('/messages')
                    }),
                    y()(a, R.e.newMessage, function () {
                      return c.push('/messages/compose')
                    }),
                    y()(a, R.e.newTweet, function () {
                      return c.push('/compose/tweet')
                    }),
                    y()(a, R.e.goMomentMaker, function () {
                      return c.push('/i/moment_maker')
                    }),
                    y()(a, R.e.goBookmarks, function () {
                      return c.push('/i/bookmarks')
                    }),
                    a),
                  ),
                  p = e.props.loggedInUserScreenName ? h : s
                e._unbindKeyboardShortcuts = Object(b.a)(p)
              }),
              y()(u()(e), '_handleKeyDown', function (t) {
                B(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              y()(u()(e), '_handleKeyUp', function (t) {
                if (!B(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var a = e._backspaceDown,
                    r = !!Object(H.a)(a) && Date.now() - a < 500,
                    n = Object(x.a)({}, { location: e.props.location })
                  r && n ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    T.b.isKaiOS() &&
                      g.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    T.b.isKaiOS() &&
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
                        D.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: L.a.visuallyHidden },
                        S.a.createElement(A.b, null, N),
                        S.a.createElement(A.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, M),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(S.a.Component)
      y()(V, 'contextType', F.a)
      var K = C(V),
        Q = _.canUseDOM ? Object(O.a)(K) : Object(P.a)(null)
      t.a = Q
    },
    sYRn: function (e, t, a) {
      'use strict'
      var r = a('ERkP'),
        n = a.n(r),
        c = a('eb3s'),
        o = a('3XMw'),
        i = a.n(o),
        s = a('4ZbN'),
        l = i.a.hffea05c,
        u = i.a.j037e373,
        d = i.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          a = e.onConfirm
        return n.a.createElement(c.a, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: l,
          onCancel: t,
          onConfirm: a,
          testID: s.a.deleteSavedSearchDialog,
          text: u,
        })
      }
    },
    u3ZE: function (e, t, a) {
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
    v4XE: function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return E
      }),
        a.d(t, 'c', function () {
          return w
        }),
        a.d(t, 'a', function () {
          return C
        }),
        a.d(t, 'b', function () {
          return I
        })
      var r = a('KEM+'),
        n = a.n(r),
        c = a('RhWx'),
        o = a.n(c),
        i = a('yiKp'),
        s = a.n(i),
        l = a('T0aG'),
        u = a.n(l),
        d = (a('yH/f'), a('2G9S'), a('LW0h'), a('7x/C'), a('JtPf'), a('oEOe')),
        h = a('kGix'),
        p = a('Ssj5'),
        f = a('SrIh'),
        m = a('RqPI'),
        y = 'savedSearches',
        v = { fetchStatus: h.a.NONE, savedSearches: [] },
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
            var a = t.payload,
              r = Array.isArray(a)
            return (
              r ||
                Object(f.a)('Saved search results are not type array', { extra: { savedSearchResultsType: u()(a) } }),
              s()(s()({}, e), {}, { fetchStatus: h.a.LOADED, savedSearches: r && a ? a : [] })
            )
          case S.FAILURE:
            return s()(s()({}, e), {}, { fetchStatus: h.a.FAILED })
          case b.SUCCESS:
            return s()(
              s()({}, e),
              {},
              { savedSearches: t.payload ? [].concat(o()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case _.SUCCESS:
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
      p.a.register(n()({}, y, g))
      var E = function (e) {
          return e.savedSearches.savedSearches
        },
        w = function (e) {
          return function (t, a, r) {
            var n = r.api
            return Object(d.b)(t, { request: n.SavedSearches.create, params: { query: e } })({
              actionTypes: b,
              context: 'SAVE_SEARCH',
            })
          }
        },
        C = function (e) {
          return function (t, a, r) {
            var n = r.api
            return Object(d.b)(t, { request: n.SavedSearches.destroy, params: { id: e } })({
              actionTypes: _,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        I = function () {
          return function (e, t, a) {
            a.api
            var r = t()
            return Object(m.m)(r)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(r) === h.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, a) {
                    var r = a.api
                    return Object(d.b)(e, { request: r.SavedSearches.fetch, params: {} })({
                      actionTypes: S,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    wtjx: function (e, t, a) {
      'use strict'
      a.d(t, 'g', function () {
        return f
      }),
        a.d(t, 'f', function () {
          return m
        }),
        a.d(t, 'e', function () {
          return y
        }),
        a.d(t, 'd', function () {
          return _
        }),
        a.d(t, 'b', function () {
          return E
        }),
        a.d(t, 'a', function () {
          return C
        }),
        a.d(t, 'c', function () {
          return I
        })
      var r = a('KEM+'),
        n = a.n(r),
        c = a('yiKp'),
        o = a.n(c),
        i = (a('7x/C'), a('JtPf'), a('LW0h'), a('Ee2X'), a('Ssj5')),
        s = a('RqPI'),
        l = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, a, r) {
            return r.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        h = function (e, t) {
          var a = []
          if (e && e.user) {
            var r = e.user
            a = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== r.id)
            })
          } else if (e && e.topic) {
            var n = e.topic
            a = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== n.id)
            })
          } else if (e && e.event) {
            var c = e.event
            a = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== c.id)
            })
          } else if (e && e.keyword) {
            var o = e.keyword
            a = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== o.query) || e.user || e.topic || e.event
            })
          }
          return a
        },
        p = { fetched: !1, recentSearches: [] }
      var f = function (e) {
          return e.recentSearches.recentSearches
        },
        m = function (e) {
          return f(e)[0] || null
        },
        y = function (e) {
          return e.recentSearches.fetched
        },
        v = 'rweb/recentSearches/INIT_FROM_CACHE',
        S = function (e) {
          return { type: v, payload: e }
        },
        b = 'rweb/recentSearches/REMOVE_QUERY',
        _ = function (e) {
          return function (t, a, r) {
            r.userPersistence
            t({ payload: e, type: b })
            var n = a().recentSearches
            return Object(s.m)(a()) ? t(d(n.recentSearches)) : Promise.resolve()
          }
        },
        g = 'rweb/recentSearches/CLEAR_ALL',
        E = function () {
          return function (e, t, a) {
            a.userPersistence
            e({ type: g })
            var r = t().recentSearches
            return Object(s.m)(t()) ? e(d(r.recentSearches)) : Promise.resolve()
          }
        },
        w = 'rweb/recentSearches/ADD_QUERY',
        C = function (e) {
          return function (t, a, r) {
            r.userPersistence
            t({ payload: e, type: w })
            var n = a().recentSearches
            return Object(s.m)(a()) ? t(d(n.recentSearches)) : Promise.resolve()
          }
        },
        I = function () {
          return function (e, t, a) {
            a.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, a) {
                  var r = a.userPersistence,
                    n = t()
                  return Object(s.m)(n)
                    ? r
                        .get(u)
                        .then(function (t) {
                          e(S(t))
                        })
                        .catch(function () {
                          e(S())
                        })
                    : (e(S()), Promise.resolve())
                })
          }
        }
      i.a.register(
        n()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case w:
              var a = t.payload,
                r = a ? h(a, e.recentSearches) : []
              return r.length > 49 && r.splice(49, 1), a && r.unshift(a), o()(o()({}, e), {}, { recentSearches: r })
            case b:
              var n = t.payload,
                c = n ? h(n, e.recentSearches) : []
              return o()(o()({}, e), {}, { recentSearches: c })
            case g:
              return { fetched: !0, recentSearches: [] }
            case v:
              return o()(o()(o()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    x0mb: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
