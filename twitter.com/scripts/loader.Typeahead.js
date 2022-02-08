;(window.webpackJsonp = window.webpackJsonp || []).push([
  [184],
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
          return lt
        })
      var r = a('yiKp'),
        n = a.n(r),
        c = a('97Jx'),
        o = a.n(c),
        s = a('VrFO'),
        i = a.n(s),
        l = a('Y9Ll'),
        d = a.n(l),
        u = a('1Pcy'),
        h = a.n(u),
        p = a('5Yy7'),
        f = a.n(p),
        m = a('2VqO'),
        y = a.n(m),
        v = a('KEM+'),
        S = a.n(v),
        _ = a('RhWx'),
        b = a.n(_),
        g =
          (a('2G9S'),
          a('tQbP'),
          a('z84I'),
          a('hBvt'),
          a('ho0z'),
          a('KqXw'),
          a('WNMA'),
          a('MvUL'),
          a('3uku'),
          a('ERkP')),
        I = a.n(g),
        w = a('+Kfv'),
        E = a('wtjx'),
        C = a('rxPX'),
        R = Object(C.a)()
          .propsFromActions(function () {
            return { addQuery: E.a }
          })
          .withAnalytics({ component: 'search_box' }),
        k = a('Hw0q'),
        x = a('3XMw'),
        D = a.n(x),
        T = a('8jkQ'),
        O = a('u3ZE'),
        A = a('rRIm'),
        U = a('Rp9C'),
        L =
          (a('LW0h'),
          a('7x/C'),
          a('vrRf'),
          a('5BYb'),
          a('+KXO'),
          a('jQ3i'),
          a('x4t0'),
          a('M+/F'),
          a('wFPu'),
          a('vfdX'),
          a('lnti')),
        F = a('hqKg'),
        j = a('3IPs'),
        q = a('M0jS'),
        N = a('G6rE'),
        H = a('k49u'),
        M = a('J4ZH'),
        P = a('0KEI'),
        V = a('v4XE'),
        K = a('kGix'),
        Q = function (e) {
          return (
            Object(H.c)(e, H.a.GenericUserNotFound) ||
            Object(H.c)(e, H.a.OtherUserSuspended) ||
            Object(H.c)(e, H.a.AddressBookLookupNotFound)
          )
        },
        B = Object(C.a)()
          .propsFromState(function () {
            var e = Object(F.createSelector)(E.g, N.e.selectFetchStatuses, function (e, t) {
                var a = Object(L.a)(
                  e.map(function (e) {
                    var a,
                      r = null === (a = e.user) || void 0 === a ? void 0 : a.id
                    return r && t[r] ? { id: r, fetchStatus: t[r] } : void 0
                  }),
                )
                return Object(M.a)(a, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(F.createSelector)(e, function (e) {
                return (e[K.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              a = Object(F.createSelector)(e, N.e.selectErrors, function (e, t) {
                return (e[K.a.FAILED] || [])
                  .filter(function (e) {
                    var a = e.id
                    return Q(t[a] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              r = Object(F.createSelector)(e, N.e.selectErrors, function (e, t) {
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
              c = Object(F.createSelector)(E.g, function (e) {
                return e.map(function (e) {
                  return n()(n()({}, e), {}, { category: j.b.RecentSearch })
                })
              }),
              o = Object(F.createSelector)(V.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: j.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: E.e,
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
              s = !n.filter(function (e) {
                var t = e.user
                return t && a.indexOf(t.id) < 0
              }).length,
              i = o !== K.a.LOADING && r && s ? K.a.LOADED : o
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: a,
              recentSearches: n,
              fetchStatus: i,
              savedSearches: c,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: E.b,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: V.a,
              fetchRecentSearchesIfNeeded: E.c,
              fetchSavedSearchesIfNeeded: V.b,
              fetchUsersIfNeeded: N.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: q.b.fetchManyIfNeeded,
              removeQuery: E.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        W = a('sYRn'),
        z = a('v//M'),
        G = a('7nmT'),
        Y = a.n(G),
        X = (a('1t7P'), a('jQ/y'), a('m3Bd')),
        Z = a.n(X),
        J = a('hOZg'),
        $ = a('5T6p'),
        ee = a('MWbm'),
        te = a('/yvb'),
        ae = a('rHpw'),
        re = ['id', 'onRemove'],
        ne = D.a.e68b09b4,
        ce = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    a = e.onRemove,
                    r = Z()(e, re)
                  return t
                    ? I.a.createElement(
                        ee.a,
                        { style: oe.root },
                        I.a.createElement($.a, r),
                        I.a.createElement(te.a, {
                          accessibilityLabel: ne,
                          icon: I.a.createElement(J.a, null),
                          onPress: a,
                          size: 'small',
                          style: oe.button,
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
                    category: j.b.RecentSearch,
                    query: t,
                    recentSearchType: j.a.Event,
                    queryMetadata: { id: t, image: a, title: n, supportText: r },
                  }
                },
              },
            ]),
            a
          )
        })(I.a.PureComponent),
        oe = ae.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        se = ce,
        ie = a('j7Bv'),
        le = a('5mJL'),
        de = a('t62R'),
        ue = a('EHV7'),
        he = I.a.createElement(J.a, null),
        pe = D.a.e68b09b4,
        fe = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            d()(a, [
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
                    s = I.a.createElement(ie.a, { Icon: ue.a, color: 'primary', size: o, style: me.searchIcon })
                  return I.a.createElement(
                    le.a,
                    { avatarCell: s, avatarSize: o, cellStyle: me.bodyColumn },
                    I.a.createElement(
                      ee.a,
                      null,
                      I.a.createElement(de.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, r),
                      I.a.createElement(de.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    I.a.createElement(te.a, {
                      accessibilityLabel: pe,
                      icon: he,
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
                        category: j.b.RecentSearch,
                        query: a,
                        recentSearchType: j.a.Topic,
                        queryMetadata: { id: a, name: r, description: t },
                      }
                    : null
                },
              },
            ]),
            a
          )
        })(I.a.Component),
        me = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ye = function (e, t) {
          return N.e.select(e, t.id)
        },
        ve = function (e, t) {
          return Object(q.c)(e, t.id)
        },
        Se = Object(C.a)().propsFromState(function () {
          return { user: ye, userSpace: ve }
        }),
        _e = a('v6aA'),
        be = a('IMA+'),
        ge = I.a.createElement(J.a, null),
        Ie = D.a.e68b09b4,
        we = D.a.fd06b02f,
        Ee = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            var e
            i()(this, a)
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++) n[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              S()(h()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              S()(h()(e), '_handleClick', function () {
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
            d()(a, [
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
                  var s = n && o.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? n : void 0
                  s && (s.accessibilityLabel = we({ screenName: r.screen_name }))
                  var i = I.a.createElement(te.a, {
                    accessibilityLabel: Ie,
                    icon: ge,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return I.a.createElement(be.a, {
                    avatarSize: 'xLarge',
                    avatarUri: r.profile_image_url_https,
                    decoration: i,
                    displayMode: c ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: s,
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
                        category: j.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: j.a.User,
                      }
                    : null
                },
              },
            ]),
            a
          )
        })(I.a.Component)
      S()(Ee, 'contextType', _e.a)
      var Ce = Se.forwardRef(Ee),
        Re = a('oQhu'),
        ke = a('hiGS'),
        xe = a('Gfoi'),
        De = I.a.createElement(J.a, null),
        Te = I.a.createElement(ke.a, null),
        Oe = Object(Re.a)(function (e) {
          return e === j.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Ae = Object(Re.a)(function (e) {
          return e === j.b.SavedSearch ? Te : De
        }),
        Ue = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            var e
            i()(this, a)
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++) n[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              S()(h()(e), '_getButtonType', function () {
                var t = e.props.category
                return Oe(t)
              }),
              S()(h()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Ae(t)
              }),
              e
            )
          }
          return (
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    a = e.query,
                    r = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    n = I.a.createElement(ie.a, { Icon: xe.a, color: 'neutral', size: r, style: Le.searchIcon })
                  return I.a.createElement(
                    le.a,
                    { avatarCell: n, avatarSize: r, cellStyle: Le.bodyColumn },
                    I.a.createElement(de.b, { numberOfLines: 1, withHashflags: !0 }, a),
                    I.a.createElement(te.a, {
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
                    recentSearchType: t === j.b.RecentSearch ? j.a.Keyword : void 0,
                  }
                },
              },
            ]),
            a
          )
        })(I.a.Component),
        Le = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        Fe = Ue,
        je = a('htQn'),
        qe = { viewType: 'search_item' },
        Ne = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a(e, r) {
            var n
            return (
              i()(this, a),
              (n = t.call(this, e, r)),
              S()(h()(n), '_renderSearchItem', function () {
                var e = n.props,
                  t = e.index,
                  a = e.item,
                  r = e.onItemClick
                return a.keyword
                  ? I.a.createElement(Fe, {
                      category: a.category,
                      onRemove: n._handleOnRemove,
                      query: a.keyword.query,
                      ref: n._handleItemRef,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : a.user
                  ? I.a.createElement(Ce, {
                      id: a.user.id || '',
                      index: t,
                      onItemClick: r,
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      style: He.itemPadding,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : a.topic
                  ? I.a.createElement(fe, {
                      description: a.topic.description || '',
                      id: a.topic.id,
                      name: a.topic.name || '',
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : a.event
                  ? I.a.createElement(se, {
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
              S()(h()(n), '_handleItemRef', function (e) {
                n._itemRef = e
              }),
              S()(h()(n), '_handleOnRemove', function (e) {
                var t = n.props,
                  a = t.index,
                  r = t.item
                ;(0, t.onRemoveQuery)(r, a), e.stopPropagation()
              }),
              S()(h()(n), '_handleOnClick', function () {
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
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.domId,
                    a = e.item,
                    r = e.testID
                  return I.a.createElement(
                    w.a,
                    { behavioralEventContext: qe },
                    I.a.createElement(
                      je.a,
                      {
                        accessibilityRole: 'option',
                        accessibilityState: { selected: !!t },
                        focusable: !0,
                        nativeID: t,
                        onClick: this._handleOnClick,
                        style: [He.root, t && He.focused, !(null != a && a.user) && He.itemPadding],
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
        })(I.a.Component)
      S()(Ne, 'contextType', _e.a)
      var He = ae.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        Me = Ne,
        Pe = a('4ZbN'),
        Ve = a('eb3s'),
        Ke = a('MXDK'),
        Qe = D.a.ee295fbe,
        Be = { headline: D.a.f45c425f, text: D.a.caae4dd9, confirmButtonLabel: D.a.dbd5d40f },
        We = D.a.a8d68f61,
        ze = D.a.c6530778,
        Ge = D.a.e047b8fa,
        Ye = ['user', 'keyword'],
        Xe = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a(e, r) {
            var c
            i()(this, a),
              (c = t.call(this, e, r)),
              S()(h()(c), '_withNewTypeaheadUI', !1),
              S()(h()(c), '_getRecentSearchItems', function () {
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
              S()(h()(c), '_render', function () {
                var e = c.props,
                  t = e.domId,
                  a = e.savedSearches,
                  r = 0 === c._getNumOfSearchItems(),
                  n = c._getRecentSearchItems()
                return r
                  ? I.a.createElement(
                      ee.a,
                      { style: Ze.emptyState, testID: Pe.a.typeaheadEmptySearch },
                      I.a.createElement(de.b, { align: 'center', color: 'gray700' }, Qe),
                    )
                  : I.a.createElement(
                      ee.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      n.length > 0
                        ? I.a.createElement(
                            I.a.Fragment,
                            null,
                            I.a.createElement(
                              ee.a,
                              { style: Ze.header, testID: Pe.a.typeaheadRecentSearchesHeader },
                              I.a.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, We),
                              I.a.createElement(
                                te.a,
                                { onPress: c._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                Ge,
                              ),
                            ),
                            n.map(function (e, t) {
                              return c._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      a.length > 0
                        ? I.a.createElement(
                            I.a.Fragment,
                            null,
                            I.a.createElement(
                              ee.a,
                              {
                                accessibilityHidden: !0,
                                style: [Ze.header, Ze.borderTop],
                                testID: Pe.a.typeaheadSavedSearchesHeader,
                              },
                              I.a.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, ze),
                            ),
                            c._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              S()(h()(c), '_renderRecentSearchItem', function (e, t) {
                var a = c.props.ariaDescendantId,
                  r = c.state.focusIndex === t
                return I.a.createElement(Me, {
                  domId: r ? a : void 0,
                  index: t,
                  item: e,
                  key: c._chooseKeyType(e, t),
                  onItemClick: c._handleOnItemClick,
                  onRemoveQuery: c._handleRemoveQuery,
                  ref: r ? c._setFocusedItemRef : void 0,
                  testID: Pe.a.typeaheadRecentSearchesItem,
                })
              }),
              S()(h()(c), '_chooseKeyType', function (e, t) {
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
              S()(h()(c), '_renderSavedSearches', function () {
                var e = c.props,
                  t = e.ariaDescendantId,
                  a = e.savedSearches,
                  r = c.state.focusIndex,
                  n = c._getRecentSearchItems(),
                  o = b()(a)
                return (
                  o.reverse(),
                  I.a.createElement(
                    ee.a,
                    { testID: Pe.a.typeaheadSavedSearchesContainer },
                    o.map(function (e, a) {
                      var o = r === a + n.length
                      return I.a.createElement(Me, {
                        domId: o ? t : void 0,
                        index: a,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: c._handleOnItemClick,
                        onRemoveQuery: c._handleRemoveQuery,
                        ref: o ? c._setFocusedItemRef : void 0,
                        testID: Pe.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              S()(h()(c), '_getNumOfSearchItems', function () {
                var e = c.props.savedSearches,
                  t = c._getRecentSearchItems()
                return e.length + t.length
              }),
              S()(h()(c), '_handleUsersRetry', function () {
                c._fetchUsersDetailsIfNeeded()
              }),
              S()(h()(c), '_fetchUsersDetailsIfNeeded', function () {
                var e = c.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchUsersIfNeeded,
                  r = e.fetchUsersPresenceIfNeeded,
                  n = e.invalidRecentSearchUserIds,
                  o = e.recentSearches,
                  s = c.context,
                  i = s.featureSwitches,
                  l = s.loggedInUserId,
                  d = (function (e, t) {
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
                a(d).catch(t({})),
                  l && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && r(d).catch(t({}))
              }),
              S()(h()(c), '_handleRemoveQuery', function (e, t) {
                var a = c.props,
                  r = a.analytics,
                  n = a.removeQuery
                switch (e.category) {
                  case j.b.RecentSearch:
                    var o = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    n(o), c._resetFocus()
                    var s = U.a.forRecentSearchResult(o, t),
                      i = c._handleRemoveAction(e)
                    s && r.scribe({ action: i, data: { items: [s] } })
                    break
                  case j.b.SavedSearch:
                    c.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              S()(h()(c), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              S()(h()(c), '_handleClearAllClick', function () {
                c.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              S()(h()(c), '_handleOnClearAllConfirm', function () {
                var e = c.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), c.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              S()(h()(c), '_handleOnClearAllCancel', function () {
                c.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              S()(h()(c), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.deleteSavedSearch,
                  r = e.savedSearches,
                  n = c.state.savedSearchIdToDelete,
                  o = r.findIndex(function (e) {
                    return e.savedSearchId === n
                  }),
                  s = r[o]
                if (n) {
                  a(n)
                  var i = s && U.a.forSavedSearchResult(s.keyword.query, o)
                  i && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [i] } })
                }
                c.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(h()(c), '_handleOnDeleteSavedSearchCancel', function () {
                c.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(h()(c), '_handleOnItemClick', function (e, t) {
                var a = c.props,
                  r = a.onDismiss
                ;(0, a.onItemClick)(e, t), c._scribeClick(e, t), r && r()
              }),
              S()(h()(c), '_scribeRecentSearchImpression', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.recentSearches
                if (a && a.length) {
                  var r = Object(L.a)(
                    a.map(function (e, t) {
                      return U.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: r } })
                }
              }),
              S()(h()(c), '_scribeSavedSearchImpression', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.savedSearches
                if (a && a.length) {
                  var r = Object(L.a)(
                    a.map(function (e, t) {
                      return U.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: r } })
                }
              }),
              S()(h()(c), '_scribeClick', function (e, t) {
                var a = c.props.analytics
                switch (e.category) {
                  case j.b.SavedSearch:
                    var r = U.a.forSavedSearchResult(e.query, t)
                    a.scribe({ element: 'typeahead', action: 'click', data: { targets: [r] } })
                    break
                  case j.b.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === j.a.User
                          ? { user: { type: j.a.User, id: e.query } }
                          : e.recentSearchType === j.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: n()(n()({}, e.queryMetadata), {}, { type: j.a.Event, id: e.query }) }
                          : e.recentSearchType === j.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: n()(n()({}, e.queryMetadata), {}, { type: j.a.Topic, id: e.query }) }
                          : { keyword: { type: j.a.Keyword, query: e.query } })
                    var s = o && U.a.forRecentSearchResult(o, t)
                    s && a.scribe({ action: 'click', data: { targets: [s] } })
                }
              }),
              S()(h()(c), '_setFocusedItemRef', function (e) {
                ;(c._focusedItemRef = e),
                  e &&
                    c._shouldScrollToFocusedItem &&
                    (Object(Ke.c)(c._getScrollParent(), c._getFocusedItem()), (c._shouldScrollToFocusedItem = !1))
              }),
              S()(h()(c), 'hasFocusedItem', function () {
                return c._getNumOfSearchItems() > 0
              }),
              S()(h()(c), 'selectFocusedItem', function () {
                if (c.hasFocusedItem()) {
                  var e = c._focusedItemRef && c._focusedItemRef.searchItemData
                  e && c._handleOnItemClick(e, c.state.focusIndex)
                }
              }),
              S()(h()(c), '_setFocusIndex', function (e, t) {
                var a = c.props.onItemFocusChanged
                ;(c._shouldScrollToFocusedItem = t), c.setState({ focusIndex: e }), a && a()
              }),
              S()(h()(c), '_resetFocus', function () {
                c._setFocusIndex(-1)
              }),
              S()(h()(c), 'focusNext', function () {
                var e = c.state.focusIndex,
                  t = c._getNumOfSearchItems()
                if (0 !== t) {
                  var a = e + 1 >= t ? 0 : e + 1
                  c._setFocusIndex(a, !0)
                }
              }),
              S()(h()(c), 'focusPrevious', function () {
                var e = c.state.focusIndex,
                  t = c._getNumOfSearchItems()
                if (0 !== t) {
                  var a = e - 1 < 0 ? t - 1 : e - 1
                  c._setFocusIndex(a, !0)
                }
              })
            var o,
              s,
              l = c.context.featureSwitches
            return (
              (c.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((o = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (s = !0 === l.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(Ye, [o ? 'topic' : '', s ? 'event' : ''])),
              }),
              (c._withNewTypeaheadUI = c.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              c
            )
          }
          return (
            d()(a, [
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
                  return I.a.createElement(
                    ee.a,
                    { style: a },
                    I.a.createElement(z.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    n
                      ? I.a.createElement(Ve.a, {
                          confirmButtonLabel: Be.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Be.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Pe.a.deleteRecentSearchesDialog,
                          text: Be.text,
                        })
                      : null,
                    c
                      ? I.a.createElement(W.a, {
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
                    var e = Object(Ke.a)(Y.a.findDOMNode(this))
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
            a
          )
        })(I.a.Component)
      S()(Xe, 'contextType', _e.a)
      var Ze = ae.a.create(function (e) {
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
        Je = B.forwardRef(Xe),
        $e = 'SearchBox_Search_Input',
        et = a('TnY3'),
        tt = a('GZwR'),
        at = a('4e/K'),
        rt = D.a.ib2e46ee,
        nt = D.a.hbc99b02,
        ct = /^(\w+)$/,
        ot = [tt.a.Events, tt.a.Users, tt.a.Topics],
        st = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        it = { viewType: 'search_field' },
        lt = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a(e, r) {
            var c, s
            return (
              i()(this, a),
              (s = t.call(this, e, r)),
              S()(h()(s), '_withNewTypeaheadUI', !1),
              S()(h()(s), '_reorderResults', function (e, t, a, r) {
                var n = Object(tt.f)(t, tt.b.User),
                  c = Object(tt.f)(t, tt.b.NoResult),
                  o = Object(tt.f)(a, tt.b.Topic),
                  i = Object(tt.f)(a, tt.b.NoResult),
                  l = Object(tt.f)(r, tt.b.Event),
                  d = [].concat(b()(Object(tt.e)(o)), b()(Object(tt.e)(n))),
                  u = (
                    't1' === s._rankedTypeaheadExperimentalValue
                      ? d.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === s._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = b()(e), a = e.length - 1; a > 0; a--) {
                            var r = Math.floor(Math.random() * (a + 1)),
                              n = t[r],
                              c = t[a]
                            ;(t[a] = n), (t[r] = c)
                          }
                          return t
                        })(d)
                      : d
                  ).map(function (e) {
                    var t = e.item
                    e.rank
                    return t
                  })
                return u.unshift.apply(u, b()(i)), u.unshift.apply(u, b()(l)), u.push.apply(u, b()(c)), e ? [e, u] : [u]
              }),
              S()(h()(s), '_renderSearchBoxEmptyState', function (e) {
                return I.a.createElement(Je, o()({}, e, { onItemClick: s._handleSearchItemClick }))
              }),
              S()(h()(s), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  a = e.link,
                  r = e.query,
                  c = e.queryMetadata,
                  o = e.recentSearchType,
                  i = s.props.addQuery
                t === j.b.SavedSearch
                  ? s._submitQuery({ query: r, shouldAddToRecentSearch: !1, src: O.a.SavedSearchClick })
                  : o === j.a.Keyword
                  ? s._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: O.a.RecentSearchClick })
                  : o === j.a.Event
                  ? (s._routeTransition({ pathname: '/i/events/'.concat(r) }),
                    c && c.title && i({ event: n()(n()({}, c), {}, { id: r, type: j.a.Event }) }))
                  : o === j.a.Topic
                  ? (s._routeTransition({ pathname: '/i/topics/'.concat(r) }),
                    c && c.name && i({ topic: n()(n()({}, c), {}, { id: r, type: j.a.Topic }) }))
                  : a && (s._routeTransition({ pathname: '/'.concat(a) }), i({ user: { id: r, type: j.a.User } }))
              }),
              S()(h()(s), '_handleSearchShortcut', function (e) {
                var t = s._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              S()(h()(s), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  a = st(t)
                if (a.match(ct))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: tt.b.NoResult,
                    data: { text: nt({ screenName: a }), type: 'user' },
                  }
              }),
              S()(h()(s), '_handleOnDismiss', function () {
                var e = s.props.history,
                  t = e.location,
                  a = t.state || {}
                if (a.searchFocused) {
                  var r = n()(n()({}, t), {}, { state: n()(n()({}, a), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(r)
                }
              }),
              S()(h()(s), '_handleOnFocus', function () {
                var e = s.props,
                  t = e.analytics,
                  a = e.history,
                  r = a.location,
                  c = r.state || {}
                if (!c.searchFocused) {
                  var o = n()(n()({}, r), {}, { state: n()(n()({}, c), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), a.push(o)
                }
              }),
              S()(h()(s), '_handleChange', function (e) {
                var t,
                  a = s.props.history.location
                !s._rankedTypeaheadExperimentalValue &&
                  null !== (t = a.state) &&
                  void 0 !== t &&
                  t.searchFocused &&
                  (s._rankedTypeaheadExperimentalValue = s.context.featureSwitches.getStringValue(
                    'responsive_web_ranked_typeahead',
                    't2',
                  )),
                  s.setState({ query: e })
              }),
              S()(h()(s), '_handleTypeaheadSubmit', function () {
                var e = s.state,
                  t = e.items,
                  a = e.query,
                  r = s.props.analytics
                ;/^\s*$/.test(a) ||
                  (r.scribe({
                    action: 'search',
                    data: { items: U.a.forTypeaheadResults(t), search_details: { query: a } },
                  }),
                  s._submitQuery({ query: a, shouldAddToRecentSearch: !0 }))
              }),
              S()(h()(s), '_handleItemClick', function (e, t) {
                var a = s.props.addQuery,
                  r = s.state.query
                switch (e.type) {
                  case tt.b.User:
                    if (e.data.id_str) a({ user: { id: e.data.id_str, type: j.a.User } })
                    s._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case tt.b.Topic:
                  case tt.b.Hashtag:
                    s._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: O.a.TypeaheadClick })
                    break
                  case tt.b.Event:
                    e.data && e.data.url
                      ? s._routeTransition({ pathname: T.b.parseInternalUrl(e.data.url) })
                      : s._submitQuery({ query: e.data.topic, src: O.a.TypeaheadClick })
                    break
                  case tt.b.NoResult:
                    var n = e.data.type
                    'user' === n
                      ? s._routeTransition({ pathname: '/'.concat(st(r)) })
                      : 'topic' === n &&
                        s._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: O.a.TypeaheadClick })
                }
              }),
              S()(h()(s), '_handleItemsChanged', function (e) {
                s.setState({ items: e })
              }),
              S()(h()(s), '_routeTransition', function (e) {
                var t = e.params,
                  a = e.pathname,
                  r = e.query,
                  c = e.src,
                  o = s.props,
                  i = o.history,
                  l = o.location,
                  d = n()(
                    n()({}, l),
                    {},
                    {
                      pathname: a,
                      search: '',
                      query: t || (r ? { q: r, src: c } : {}),
                      state: n()(n()({}, l.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                i.replace(d)
              }),
              S()(h()(s), '_submitQuery', function (e) {
                var t = e.query,
                  a = e.shouldAddToRecentSearch,
                  r = void 0 !== a && a,
                  n = e.src,
                  c = void 0 === n ? O.a.Typed : n,
                  o = s.props,
                  i = o.addQuery,
                  l = o.mode,
                  d = o.onSubmit,
                  u = o.searchFilters,
                  h = o.searchRoute
                ;(d && d(t, c, s.state.lastSubmittedQuery === t), r) && i({ keyword: { query: t, type: j.a.Keyword } })
                var p = Object(j.g)({ query: t, querySrc: c, mode: l, searchFilters: u })
                s._routeTransition({ pathname: h, params: p, src: c }), s.setState({ lastSubmittedQuery: t })
              }),
              S()(h()(s), '_setInputRef', function (e) {
                s._inputRef = e
              }),
              (s.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(k.a)(null === (c = e.location.query) || void 0 === c ? void 0 : c.q),
              }),
              (s._withNewTypeaheadUI = s.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              s
            )
          }
          return (
            d()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(A.b)(this._handleSearchShortcut))
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
                    s = this.state.query,
                    i = (c.state || {}).searchPrefill,
                    l = this.props.initialValue || i,
                    d = !!c.state && !!c.state.searchFocused,
                    u =
                      't1' === this._rankedTypeaheadExperimentalValue || 't3' === this._rankedTypeaheadExperimentalValue
                  return I.a.createElement(
                    w.a,
                    { behavioralEventContext: it },
                    I.a.createElement(
                      ee.a,
                      { style: dt.root },
                      I.a.createElement(at.default, {
                        filter: ot,
                        forceVdlDisable: t,
                        getTopicExactMatch: s ? tt.h : void 0,
                        getUserExactMatch: s ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: dt.input,
                        isCompact: a,
                        isInSidebar: r,
                        isOnHomepage: n,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: u ? this._reorderResults : void 0,
                        placeholder: o,
                        ref: this._setInputRef,
                        renderEmptyState: this._renderSearchBoxEmptyState,
                        rounded: !0,
                        shouldAutoFocus: d,
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
            a
          )
        })(I.a.Component)
      S()(lt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: rt,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        S()(lt, 'contextType', _e.a)
      var dt = ae.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(et.a)(R(lt))
    },
    UnyZ: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('yH/f')
      var r = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    V2l4: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserPicker', function () {
          return T
        })
      var r = a('VrFO'),
        n = a.n(r),
        c = a('Y9Ll'),
        o = a.n(c),
        s = a('1Pcy'),
        i = a.n(s),
        l = a('5Yy7'),
        d = a.n(l),
        u = a('2VqO'),
        h = a.n(u),
        p = a('KEM+'),
        f = a.n(p),
        m = (a('z84I'), a('ho0z'), a('vrRf'), a('2G9S'), a('ERkP')),
        y = a.n(m),
        v = a('ZcYN'),
        S = a('3XMw'),
        _ = a.n(S),
        b = 'searchPeople',
        g = a('4e/K'),
        I = a('MWbm'),
        w = a('jhWN'),
        E = a('aV/s'),
        C = a('rHpw'),
        R = a('GZwR'),
        k = [R.a.Users],
        x = _.a.fc9dd578,
        D = _.a.gdb7bc24,
        T = (function (e) {
          d()(a, e)
          var t = h()(a)
          function a(e, r) {
            var c
            return (
              n()(this, a),
              (c = t.call(this, e, r)),
              f()(i()(c), '_renderSelectedUsersList', function () {
                var e = c.props.selectedUsers
                return y.a.createElement(I.a, { style: O.selectedUsersList }, e.map(c._renderSelectedUserPill))
              }),
              f()(i()(c), '_renderSelectedUserPill', function (e) {
                var t = c.props.withCompactPills,
                  a = c.props.onRemove.bind(i()(c), e),
                  r =
                    e.type === R.b.User
                      ? y.a.createElement(w.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'custom',
                          uri: e.data.profile_image_url_https,
                        })
                      : void 0
                return y.a.createElement(E.a, {
                  accessibilityLabel: D({ name: e.data.name }),
                  avatar: r,
                  compact: t,
                  key: e.id,
                  mode: 'remove',
                  onClick: a,
                  style: O.selectionPill,
                  text: e.data.name,
                })
              }),
              f()(i()(c), '_getItemIsDisabled', function (e) {
                var t = c.props,
                  a = t.getItemIsDisabled
                return t.preselectedUsers.indexOf(e.id) >= 0 || !(!a || !a(e))
              }),
              f()(i()(c), '_getItemDisabledMessage', function (e) {
                var t = c.props,
                  a = t.getItemDisabledMessage
                return t.preselectedUsers.indexOf(e.id) >= 0 ? void 0 : a ? a(e) : void 0
              }),
              f()(i()(c), '_handleQueryChange', function (e) {
                var t = c.props.onQueryChange
                c.setState({ query: e }), t && t(e)
              }),
              f()(i()(c), '_handleOnSelect', function (e) {
                var t = c.props.onSelect
                t && t(e)
              }),
              (c.state = { query: '' }),
              c
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.injections,
                    a = e.preselectedUsers,
                    r = e.renderCallout,
                    n = e.renderHeader,
                    c = e.selectedUsers,
                    o = e.shouldAutoFocus,
                    s = e.source,
                    i = c
                      .map(function (e) {
                        return e.id
                      })
                      .concat(a)
                  return y.a.createElement(
                    I.a,
                    { style: O.root },
                    y.a.createElement(g.default, {
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
                      renderCallout: r,
                      renderHeader: n,
                      renderInSearchField: c.length ? this._renderSelectedUsersList : void 0,
                      renderUserDecoration: v.a,
                      selectedItems: i,
                      shouldAutoFocus: o,
                      shouldClearOnSelect: !0,
                      shouldFocusOnClear: !0,
                      source: s,
                      testID: b,
                      withSectionDivider: !1,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      f()(T, 'defaultProps', { preselectedUsers: [], shouldAutoFocus: !0, withCompactPills: !1 })
      var O = C.a.create(function (e) {
        return {
          root: { flex: 1 },
          selectionPill: { margin: e.spaces.space4, maxWidth: 'calc(100% - '.concat(e.spaces.space16, ')') },
          selectedUsersList: { flexDirection: 'row', flexWrap: 'wrap', padding: e.spaces.space4 },
        }
      })
      t.default = T
    },
    'aV/s': function (e, t, a) {
      'use strict'
      var r = a('VrFO'),
        n = a.n(r),
        c = a('Y9Ll'),
        o = a.n(c),
        s = a('1Pcy'),
        i = a.n(s),
        l = a('5Yy7'),
        d = a.n(l),
        u = a('2VqO'),
        h = a.n(u),
        p = a('KEM+'),
        f = a.n(p),
        m = (a('2G9S'), a('hBvt'), a('uFXj'), a('ERkP')),
        y = a.n(m),
        v = a('t62R'),
        S = a('3XMw'),
        _ = a.n(S),
        b = a('I4+6'),
        g = a('cm6r'),
        I = a('UnyZ'),
        w = a('rHpw'),
        E = a('MWbm'),
        C = a('hOZg'),
        R = a('iY63'),
        k = a('IMYl'),
        x = { active: _.a.e557ad8d, expand: _.a.e3a58c27, remove: _.a.h517e8d8 },
        D = (function (e) {
          d()(a, e)
          var t = h()(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(i()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.avatar,
                    r = e.compact,
                    n = e.disabled,
                    c = e.link,
                    o = e.mode,
                    s = e.onClick,
                    i = e.secondaryAction,
                    l = e.selected,
                    d = e.style,
                    u = e.text,
                    h = this._renderIcon(!0, o),
                    p = i && this._renderIcon(!1, i.mode),
                    f = [T.root, r && T.compact, n && T.disabled, l && T.selected, d],
                    m = [T.content, h && T.withIcon, a && ((r && T.withAvatarImageCompact) || T.withAvatarImage)],
                    S = b.a.generate({
                      backgroundColor: l ? w.a.theme.colors.primary : 'transparent',
                      color: l ? w.a.theme.colors.white : w.a.theme.colors.primary,
                    })
                  return y.a.createElement(
                    E.a,
                    { style: f },
                    y.a.createElement(
                      g.a,
                      {
                        accessibilityLabel: t || (o ? x[o] : ''),
                        disabled: n,
                        interactiveStyles: S,
                        link: c,
                        onPress: s,
                        style: m,
                      },
                      this._renderAvatar(),
                      y.a.createElement(
                        v.b,
                        {
                          color: l ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: T.text,
                          weight: 'bold',
                        },
                        u,
                      ),
                      h,
                    ),
                    i
                      ? y.a.createElement(
                          g.a,
                          {
                            accessibilityLabel: i.accessibilityLabel || (i.mode ? x[i.mode] : ''),
                            disabled: n || i.disabled,
                            hoverLabel: { label: i.hoverLabel || (i.mode ? x[i.mode] : '') },
                            interactiveStyles: S,
                            onPress: this._handleSecondaryClick,
                            style: T.secondaryControl,
                          },
                          y.a.createElement(E.a, { style: T.secondaryBorder }, p),
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
                    a = this.props.selected,
                    r = [T.icon, a && T.iconSelected],
                    n = [T.icon]
                  switch (t) {
                    case I.a.Remove:
                      return y.a.createElement(C.a, { style: [T.dismissIcon, e && r] })
                    case I.a.Expand:
                      return y.a.createElement(R.a, { style: e ? r : n })
                    case I.a.Active:
                      return y.a.createElement(k.a, { style: r })
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
                    a = e.compact
                  return t
                    ? y.a.createElement(E.a, { style: [T.avatarContainer, a ? T.avatarCompact : T.avatar] }, t)
                    : null
                },
              },
            ]),
            a
          )
        })(y.a.PureComponent)
      f()(D, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var T = w.a.create(function (e) {
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
      t.a = D
    },
    bJYH: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'GenericTypeaheadComposeWrapper', function () {
          return F
        })
      var r = a('yiKp'),
        n = a.n(r),
        c = a('VrFO'),
        o = a.n(c),
        s = a('Y9Ll'),
        i = a.n(s),
        l = a('1Pcy'),
        d = a.n(l),
        u = a('5Yy7'),
        h = a.n(u),
        p = a('2VqO'),
        f = a.n(p),
        m = a('KEM+'),
        y = a.n(m),
        v = (a('uFXj'), a('ERkP')),
        S = a.n(v),
        _ = a('oEoC'),
        b = a('oQhu'),
        g = a('7nmT'),
        I = a.n(g),
        w = a('WPfJ'),
        E = a('OEYw'),
        C = a('MWbm'),
        R = a('Irs7'),
        k = a('0FVZ'),
        x = a('xoZN'),
        D = a('7N4s'),
        T = a('rHpw'),
        O = a('GZwR'),
        A = [O.a.Users],
        U = [O.a.Topics],
        L = 0,
        F = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a(e, r) {
            var c
            return (
              o()(this, a),
              (c = t.call(this, e, r)),
              y()(d()(c), '_typeaheadActive', !1),
              y()(d()(c), '_renderTypeaheadDropdown', function (e) {
                var t = c.props,
                  a = t.contextText,
                  r = t.isInlineReply,
                  n = t.onSelectItem,
                  o = t.source,
                  s = c.context.isModal,
                  i = e.resultType === O.a.Topics ? 'hashtag' : void 0,
                  l = S.a.createElement(E.a, {
                    ariaDescendantId: c.state.ariaDescendantId,
                    contextText: a,
                    domId: c._dropdownDomId,
                    filter: c._getFilter(e.resultType),
                    maxTopics: 8,
                    onItemClick: n,
                    onItemFocusChanged: c._handleItemFocusChanged,
                    query: e.word,
                    ref: c._handleTypeaheadRef,
                    source: o,
                    style: c._calcStyle(),
                    topicType: i,
                    withItemAlwaysSelected: !0,
                  })
                return s || r
                  ? S.a.createElement(
                      k.a.HalfSheet,
                      null,
                      S.a.createElement(
                        S.a.Fragment,
                        null,
                        S.a.createElement(C.a, { onClick: c._handleDismiss, style: j.mask }),
                        l,
                      ),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(C.a, { onClick: c._handleDismiss, style: j.mask }),
                      l,
                    )
              }),
              y()(d()(c), 'render', function () {
                var e = c.props,
                  t = e.children,
                  a = e.query,
                  r = S.a.cloneElement(t, {
                    ariaAutocomplete: 'list',
                    ariaControls: c._dropdownDomId,
                    ariaActiveDescendant: c.state.ariaDescendantId,
                    ref: function (e) {
                      ;(c._textInputNode = I.a.findDOMNode(e)), (c._textInputRef = e)
                      var a = t.ref
                      a && a(e)
                    },
                  })
                return S.a.createElement(
                  C.a,
                  { style: j.inputContainer },
                  S.a.createElement(
                    x.a,
                    { onKeyDown: c._handleKeyDown },
                    r,
                    c._textInputNode && a ? c._renderTypeaheadDropdown(a) : null,
                  ),
                )
              }),
              y()(d()(c), '_getFilter', function (e) {
                return 'users' === e ? A : U
              }),
              y()(d()(c), '_calcStyle', function () {
                var e = c.context.isModal,
                  t = c.props,
                  a = t.isInline,
                  r = t.isInlineReply,
                  n = c._textInputNode,
                  o = window.innerHeight,
                  s = window.innerWidth,
                  i = (c._textInputRef && c._textInputRef.getTextInputHeight()) || 20
                if (n instanceof window.HTMLElement) {
                  if (e || a) {
                    var l = n.getBoundingClientRect()
                    return [c._getDropdownPositioningStyle(o, s, l.top, l.top + i, l.left, e, !!r), j.dropdownStyle]
                  }
                  return [c._getModalFullViewportStyle(i), j.modalFullViewportStyle]
                }
                return [c._getDropdownPositioningStyle(i, s, 0, 0, 0, e, !!r), j.dropdownStyle]
              }),
              y()(d()(c), '_handleKeyDown', function (e) {
                var t = c.state.selectedItem,
                  a = c.props,
                  r = a.onSelectItem,
                  n = a.query,
                  o = e.key
                _.g(e) &&
                  n &&
                  ('ArrowDown' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusNext(), e.preventDefault())
                    : 'ArrowUp' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusPrevious(), e.preventDefault())
                    : 'Enter' === o || 'Tab' === o
                    ? t && (r(t), e.preventDefault())
                    : 'Escape' === o && (c._handleDismiss(), e.preventDefault()))
              }),
              y()(d()(c), '_handleItemFocusChanged', function (e) {
                return c.setState({ ariaDescendantId: _.b(), selectedItem: e })
              }),
              y()(d()(c), '_handleTypeaheadRef', function (e) {
                c._typeaheadRef = e
              }),
              y()(d()(c), '_handleDismiss', function () {
                c._textInputRef && c._textInputRef.focus(), c.props.onDismiss()
              }),
              y()(
                d()(c),
                '_getDropdownHeight',
                Object(b.a)(function (e, t) {
                  var a = (50 * e) / 100
                  return a > t ? t : a
                }),
              ),
              y()(
                d()(c),
                '_getModalOrInlineReplyDropdownStyles',
                Object(b.a)(function (e, t, a) {
                  return e ? { bottom: ''.concat(a, 'px') } : { top: ''.concat(t, 'px') }
                }),
              ),
              y()(
                d()(c),
                '_getDropdownPositioningStyle',
                Object(b.a)(function (e, t) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    l = 10,
                    d = t - o - l,
                    u = Math.min(d, 300),
                    h = e - r,
                    p = a,
                    f = h / e < 0.5 && p > h,
                    m = f ? c._getDropdownHeight(e, p - l) : c._getDropdownHeight(e, h - l),
                    y = { maxWidth: ''.concat(d, 'px'), minWidth: ''.concat(u, 'px'), maxHeight: ''.concat(m, 'px') }
                  return s || i
                    ? n()(
                        n()({}, y),
                        {},
                        { position: 'fixed', left: ''.concat(o, 'px') },
                        c._getModalOrInlineReplyDropdownStyles(f, r, e - a),
                      )
                    : f
                    ? n()(n()({}, y), {}, { bottom: '100%', position: 'absolute' })
                    : n()(n()({}, y), {}, { top: '100%', position: 'absolute' })
                }),
              ),
              y()(
                d()(c),
                '_getModalFullViewportStyle',
                Object(b.a)(function (e) {
                  return { position: 'absolute', top: ''.concat(e || 0, 'px'), overflowX: 'hidden', overflowY: 'auto' }
                }),
              ),
              (c.state = { ariaDescendantId: _.b() }),
              (c._dropdownDomId = 'typeaheadDropdownWrapped-'.concat(L)),
              (L += 1),
              c
            )
          }
          return (
            i()(a, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.onTypeaheadStateChange,
                    a = e.query,
                    r = !(!this._textInputNode || !a)
                  r !== this._typeaheadActive && ((this._typeaheadActive = r), t && t(r))
                },
              },
              {
                key: 'resetSelectedItem',
                value: function () {
                  this.setState({ selectedItem: void 0 })
                },
              },
            ]),
            a
          )
        })(S.a.Component)
      y()(F, 'contextType', D.b), y()(F, 'defaultProps', { source: O.d.Compose })
      var j = T.a.create(function (e) {
        return {
          dropdownStyle: {
            backgroundColor: e.colors.cellBackground,
            borderRadius: e.borderRadii.small,
            boxShadow: e.boxShadows.medium,
            minHeight: 100,
            overflowX: 'hidden',
            overflowY: 'auto',
          },
          mask: n()(n()({}, T.a.absoluteFillObject), {}, { position: 'fixed' }),
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
      t.default = Object(R.a)(F, { component: 'compose' })
    },
    hiGS: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        c = a('ERkP'),
        o = a.n(c),
        s = a('Lsrn'),
        i = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(i.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
    kIAd: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      }),
        a.d(t, 'b', function () {
          return c
        })
      var r = a('0vv5'),
        n = 500,
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
            { type: 'hashtag', regexp: a.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
    oEoC: function (e, t, a) {
      'use strict'
      a.d(t, 'e', function () {
        return d
      }),
        a.d(t, 'c', function () {
          return u
        }),
        a.d(t, 'b', function () {
          return h
        }),
        a.d(t, 'g', function () {
          return p
        }),
        a.d(t, 'a', function () {
          return f
        }),
        a.d(t, 'd', function () {
          return m
        }),
        a.d(t, 'f', function () {
          return v
        })
      var r = a('RhWx'),
        n = a.n(r),
        c = a('yiKp'),
        o = a.n(c),
        s =
          (a('hBpG'),
          a('7x/C'),
          a('vrRf'),
          a('KqXw'),
          a('WNMA'),
          a('M+/F'),
          a('LJOr'),
          a('tVqn'),
          a('jwue'),
          a('+oxZ'),
          a('z84I'),
          a('LW0h'),
          a('2G9S'),
          a('oQhu')),
        i = a('kIAd'),
        l = a('rHpw')
      function d(e, t) {
        var a,
          r = i.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (a = e.match(r.regexp))
          }),
          n = ''
        return a && (n = a && (1 === a.length ? a[0] : a[1])), r ? o()(o()({}, r.scope), {}, { src: t, q: n }) : null
      }
      function u(e, t) {
        var a = t.slice(0, e),
          r = t.slice(e, t.length),
          n = a.search(i.b.WordEnd),
          c = n >= 0 ? a.slice(n) : '',
          o = r.search(i.b.WordBoundary),
          s = c + r.slice(0, o)
        return s.trim() ? { start: n, end: e + o, word: s } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function p(e) {
        var t = e.altKey,
          a = e.ctrlKey,
          r = e.metaKey
        return !(t || a || r)
      }
      function f(e, t) {
        var a = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? a.push(r) : a.push(e)
        })
        var r = a.map(function (e) {
            return e.id
          }),
          c = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(a, n()(c))
      }
      var m = Object(s.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        y = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((y += 1))
        }
    },
    rRIm: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return K
      })
      var r = a('yiKp'),
        n = a.n(r),
        c = a('VrFO'),
        o = a.n(c),
        s = a('Y9Ll'),
        i = a.n(s),
        l = a('1Pcy'),
        d = a.n(l),
        u = a('5Yy7'),
        h = a.n(u),
        p = a('2VqO'),
        f = a.n(p),
        m = a('KEM+'),
        y = a.n(m),
        v = (a('2G9S'), a('KqXw'), a('LJOr'), a('ERkP')),
        S = a.n(v),
        _ = a('sTyV'),
        b = a('6/RC'),
        g = a('sebV'),
        I = a('G6rE'),
        w = a('rxPX'),
        E = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: I.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        C = a('3XMw'),
        R = a.n(C),
        k = a('OrGc'),
        x = a('QK5w'),
        D = a('aITJ'),
        T = a('MWbm'),
        O = a('TnY3'),
        A = a('rHpw'),
        U = a('t62R'),
        L = a('v6aA'),
        F = a('uScj'),
        j = a('fs1G'),
        q = a('BcsE'),
        N = a('VPAj'),
        H = R.a.b47e760d,
        M = R.a.fd2c7b43,
        P = new F.a(),
        V = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        K = function (e) {
          return b.canUseDOM ? P.subscribe(e).unsubscribe : j.a
        },
        Q = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a() {
            var e
            o()(this, a)
            for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(d()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  a,
                  r = e.props,
                  c = r.history,
                  o = r.loggedInUserScreenName,
                  s = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        P.getListeners().length
                          ? P.notify(e)
                          : c.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  i =
                    ((t = {}),
                    y()(t, k.e.search, s()),
                    y()(t, k.e.goToUser, s('@')),
                    y()(t, k.e.openKeyboardShortcuts, function () {
                      return c.push('/i/keyboard_shortcuts')
                    }),
                    y()(t, k.e.goExplore, function () {
                      return c.push('/explore')
                    }),
                    y()(t, k.e.goSettings, function () {
                      return c.push('/settings')
                    }),
                    t),
                  l = function (e) {
                    var t
                    return (
                      (t = {}),
                      y()(t, k.e.goProfile, function () {
                        return c.push('/'.concat(e))
                      }),
                      y()(t, k.e.goLikes, function () {
                        return c.push('/'.concat(e, '/likes'))
                      }),
                      y()(t, k.e.goLists, function () {
                        return c.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  d = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  u =
                    o && d
                      ? n()(
                          n()({}, l(o)),
                          {},
                          y()({}, k.e.goTopArticles, function () {
                            return c.push('/i/articles')
                          }),
                        )
                      : o
                      ? l(o)
                      : {},
                  h = n()(
                    n()(n()({}, i), u),
                    {},
                    ((a = {}),
                    y()(a, k.e.goHome, function () {
                      return c.push('/home')
                    }),
                    y()(a, k.e.goDisplay, function () {
                      return c.push('/i/display')
                    }),
                    y()(a, k.e.goNotifications, function () {
                      return c.push('/notifications')
                    }),
                    y()(a, k.e.goMentions, function () {
                      return c.push('/notifications/mentions')
                    }),
                    y()(a, k.e.goMessages, function () {
                      return c.push('/messages')
                    }),
                    y()(a, k.e.newMessage, function () {
                      return c.push('/messages/compose')
                    }),
                    y()(a, k.e.newTweet, function () {
                      return c.push('/compose/tweet')
                    }),
                    y()(a, k.e.goMomentMaker, function () {
                      return c.push('/i/moment_maker')
                    }),
                    y()(a, k.e.goBookmarks, function () {
                      return c.push('/i/bookmarks')
                    }),
                    a),
                  ),
                  p = e.props.loggedInUserScreenName ? h : i
                e._unbindKeyboardShortcuts = Object(_.a)(p)
              }),
              y()(d()(e), '_handleKeyDown', function (t) {
                V(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              y()(d()(e), '_handleKeyUp', function (t) {
                if (!V(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var a = e._backspaceDown,
                    r = !!Object(q.a)(a) && Date.now() - a < 500,
                    n = Object(x.a)({}, { location: e.props.location })
                  r && n ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            i()(a, [
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
                        T.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: A.a.visuallyHidden },
                        S.a.createElement(U.b, null, H),
                        S.a.createElement(U.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, M),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(S.a.Component)
      y()(Q, 'contextType', L.a)
      var B = E(Q),
        W = b.canUseDOM ? Object(O.a)(B) : Object(N.a)(null)
      t.a = W
    },
    sYRn: function (e, t, a) {
      'use strict'
      var r = a('ERkP'),
        n = a.n(r),
        c = a('eb3s'),
        o = a('3XMw'),
        s = a.n(o),
        i = a('4ZbN'),
        l = s.a.hffea05c,
        d = s.a.j037e373,
        u = s.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          a = e.onConfirm
        return n.a.createElement(c.a, {
          confirmButtonLabel: u,
          confirmButtonType: 'destructiveFilled',
          headline: l,
          onCancel: t,
          onConfirm: a,
          testID: i.a.deleteSavedSearchDialog,
          text: d,
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
        return I
      }),
        a.d(t, 'c', function () {
          return w
        }),
        a.d(t, 'a', function () {
          return E
        }),
        a.d(t, 'b', function () {
          return C
        })
      var r = a('KEM+'),
        n = a.n(r),
        c = a('RhWx'),
        o = a.n(c),
        s = a('yiKp'),
        i = a.n(s),
        l = a('T0aG'),
        d = a.n(l),
        u = (a('yH/f'), a('2G9S'), a('LW0h'), a('7x/C'), a('JtPf'), a('oEOe')),
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
        _ = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        b = Object.freeze({
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
                Object(f.a)('Saved search results are not type array', { extra: { savedSearchResultsType: d()(a) } }),
              i()(i()({}, e), {}, { fetchStatus: h.a.LOADED, savedSearches: r && a ? a : [] })
            )
          case S.FAILURE:
            return i()(i()({}, e), {}, { fetchStatus: h.a.FAILED })
          case _.SUCCESS:
            return i()(
              i()({}, e),
              {},
              { savedSearches: t.payload ? [].concat(o()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case b.SUCCESS:
            return t.payload
              ? i()(
                  i()({}, e),
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
      var I = function (e) {
          return e.savedSearches.savedSearches
        },
        w = function (e) {
          return function (t, a, r) {
            var n = r.api
            return Object(u.b)(t, { request: n.SavedSearches.create, params: { query: e } })({
              actionTypes: _,
              context: 'SAVE_SEARCH',
            })
          }
        },
        E = function (e) {
          return function (t, a, r) {
            var n = r.api
            return Object(u.b)(t, { request: n.SavedSearches.destroy, params: { id: e } })({
              actionTypes: b,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        C = function () {
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
                    return Object(u.b)(e, { request: r.SavedSearches.fetch, params: {} })({
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
