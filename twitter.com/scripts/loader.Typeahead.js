;(window.webpackJsonp = window.webpackJsonp || []).push([
  [190],
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
          return dt
        })
      var a = r('yiKp'),
        n = r.n(a),
        c = r('97Jx'),
        o = r.n(c),
        s = r('VrFO'),
        i = r.n(s),
        l = r('Y9Ll'),
        d = r.n(l),
        u = r('1Pcy'),
        h = r.n(u),
        p = r('5Yy7'),
        f = r.n(p),
        m = r('2VqO'),
        y = r.n(m),
        v = r('KEM+'),
        S = r.n(v),
        _ = r('RhWx'),
        b = r.n(_),
        g =
          (r('tQbP'),
          r('2G9S'),
          r('z84I'),
          r('hBvt'),
          r('ho0z'),
          r('KqXw'),
          r('WNMA'),
          r('MvUL'),
          r('3uku'),
          r('jQ3i'),
          r('ERkP')),
        I = r.n(g),
        w = r('+Kfv'),
        E = r('lnti'),
        C = r('wtjx'),
        R = r('rxPX'),
        k = Object(R.a)()
          .propsFromActions(function () {
            return { addQuery: C.a }
          })
          .withAnalytics({ component: 'search_box' }),
        x = r('Hw0q'),
        D = r('3XMw'),
        T = r.n(D),
        O = r('8jkQ'),
        A = r('u3ZE'),
        U = r('rRIm'),
        L = r('Rp9C'),
        F =
          (r('LW0h'),
          r('7x/C'),
          r('vrRf'),
          r('5BYb'),
          r('+KXO'),
          r('x4t0'),
          r('M+/F'),
          r('wFPu'),
          r('vfdX'),
          r('hqKg')),
        j = r('3IPs'),
        P = r('M0jS'),
        q = r('G6rE'),
        N = r('k49u'),
        H = r('J4ZH'),
        M = r('0KEI'),
        V = r('v4XE'),
        K = r('kGix'),
        Q = function (e) {
          return (
            Object(N.c)(e, N.a.GenericUserNotFound) ||
            Object(N.c)(e, N.a.OtherUserSuspended) ||
            Object(N.c)(e, N.a.AddressBookLookupNotFound)
          )
        },
        W = Object(R.a)()
          .propsFromState(function () {
            var e = Object(F.createSelector)(C.g, q.e.selectFetchStatuses, function (e, t) {
                var r = Object(E.a)(
                  e.map(function (e) {
                    var r,
                      a = null === (r = e.user) || void 0 === r ? void 0 : r.id
                    return a && t[a] ? { id: a, fetchStatus: t[a] } : void 0
                  }),
                )
                return Object(H.a)(r, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(F.createSelector)(e, function (e) {
                return (e[K.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              r = Object(F.createSelector)(e, q.e.selectErrors, function (e, t) {
                return (e[K.a.FAILED] || [])
                  .filter(function (e) {
                    var r = e.id
                    return Q(t[r] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              a = Object(F.createSelector)(e, q.e.selectErrors, function (e, t) {
                var r = (e[K.a.FAILED] || []).filter(function (e) {
                  var r = e.id
                  return !Q(t[r] || {})
                })
                return (e[K.a.LOADING] || []).length > 0
                  ? K.a.LOADING
                  : (e[K.a.LOADED] || []).length > 0
                  ? K.a.LOADED
                  : r.length > 0
                  ? K.a.FAILED
                  : K.a.NONE
              }),
              c = Object(F.createSelector)(C.g, function (e) {
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
              isRecentSearchDataLoaded: C.e,
              recentSearches: c,
              usersFetchStatus: a,
              invalidRecentSearchUserIds: r,
              failedRecentSearchUserIds: t,
              savedSearches: o,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              r = e.invalidRecentSearchUserIds,
              a = e.isRecentSearchDataLoaded,
              n = e.recentSearches,
              c = e.savedSearches,
              o = e.usersFetchStatus,
              s = !n.filter(function (e) {
                var t = e.user
                return t && r.indexOf(t.id) < 0
              }).length,
              i = o !== K.a.LOADING && a && s ? K.a.LOADED : o
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: r,
              recentSearches: n,
              fetchStatus: i,
              savedSearches: c,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: C.b,
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: V.a,
              fetchRecentSearchesIfNeeded: C.c,
              fetchSavedSearchesIfNeeded: V.b,
              fetchUsersIfNeeded: q.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: P.b.fetchManyIfNeeded,
              removeQuery: C.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        B = r('sYRn'),
        z = r('v//M'),
        G = r('7nmT'),
        Y = r.n(G),
        X = (r('1t7P'), r('jQ/y'), r('m3Bd')),
        Z = r.n(X),
        J = r('hOZg'),
        $ = r('5T6p'),
        ee = r('MWbm'),
        te = r('/yvb'),
        re = r('rHpw'),
        ae = ['id', 'onRemove'],
        ne = T.a.e68b09b4,
        ce = (function (e) {
          f()(r, e)
          var t = y()(r)
          function r() {
            return i()(this, r), t.apply(this, arguments)
          }
          return (
            d()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    r = e.onRemove,
                    a = Z()(e, ae)
                  return t
                    ? I.a.createElement(
                        ee.a,
                        { style: oe.root },
                        I.a.createElement($.a, a),
                        I.a.createElement(te.a, {
                          accessibilityLabel: ne,
                          icon: I.a.createElement(J.a, null),
                          onPress: r,
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
                    r = e.image,
                    a = e.supportText,
                    n = e.title
                  return {
                    category: j.b.RecentSearch,
                    query: t,
                    recentSearchType: j.a.Event,
                    queryMetadata: { id: t, image: r, title: n, supportText: a },
                  }
                },
              },
            ]),
            r
          )
        })(I.a.PureComponent),
        oe = re.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        se = ce,
        ie = r('j7Bv'),
        le = r('5mJL'),
        de = r('t62R'),
        ue = r('EHV7'),
        he = I.a.createElement(J.a, null),
        pe = T.a.e68b09b4,
        fe = (function (e) {
          f()(r, e)
          var t = y()(r)
          function r() {
            return i()(this, r), t.apply(this, arguments)
          }
          return (
            d()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    r = e.id,
                    a = e.name,
                    n = e.onRemove,
                    c = e.withNewTypeaheadUI
                  if (!r) return null
                  var o = c ? 'xxxLarge' : 'xLarge',
                    s = I.a.createElement(ie.a, { Icon: ue.a, color: 'primary', size: o, style: me.searchIcon })
                  return I.a.createElement(
                    le.a,
                    { avatarCell: s, avatarSize: o, cellStyle: me.bodyColumn },
                    I.a.createElement(
                      ee.a,
                      null,
                      I.a.createElement(de.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, a),
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
                    r = e.id,
                    a = e.name
                  return r
                    ? {
                        category: j.b.RecentSearch,
                        query: r,
                        recentSearchType: j.a.Topic,
                        queryMetadata: { id: r, name: a, description: t },
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(I.a.Component),
        me = re.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ye = function (e, t) {
          return q.e.select(e, t.id)
        },
        ve = function (e, t) {
          return Object(P.c)(e, t.id)
        },
        Se = Object(R.a)().propsFromState(function () {
          return { user: ye, userSpace: ve }
        }),
        _e = r('v6aA'),
        be = r('IMA+'),
        ge = I.a.createElement(J.a, null),
        Ie = T.a.e68b09b4,
        we = T.a.fd06b02f,
        Ee = (function (e) {
          f()(r, e)
          var t = y()(r)
          function r() {
            var e
            i()(this, r)
            for (var a = arguments.length, n = new Array(a), c = 0; c < a; c++) n[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              S()(h()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              S()(h()(e), '_handleClick', function () {
                var t = e.props,
                  r = t.index,
                  a = t.onItemClick,
                  n = e.searchItemData
                n && a(n, r)
              }),
              e
            )
          }
          return (
            d()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.style,
                    a = e.user,
                    n = e.userSpace,
                    c = e.withNewTypeaheadUI,
                    o = this.context.featureSwitches
                  if (!a) return null
                  var s = n && o.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? n : void 0
                  s && (s.accessibilityLabel = we({ screenName: a.screen_name }))
                  var i = I.a.createElement(te.a, {
                    accessibilityLabel: Ie,
                    icon: ge,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return I.a.createElement(be.a, {
                    avatarSize: 'xLarge',
                    avatarUri: a.profile_image_url_https,
                    decoration: i,
                    displayMode: c ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: a.protected,
                    isVerified: a.verified,
                    name: a.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: s,
                    screenName: a.screen_name,
                    style: r,
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
                        category: j.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: j.a.User,
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(I.a.Component)
      S()(Ee, 'contextType', _e.a)
      var Ce = Se.forwardRef(Ee),
        Re = r('oQhu'),
        ke = r('hiGS'),
        xe = r('Gfoi'),
        De = I.a.createElement(J.a, null),
        Te = I.a.createElement(ke.a, null),
        Oe = Object(Re.a)(function (e) {
          return e === j.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Ae = Object(Re.a)(function (e) {
          return e === j.b.SavedSearch ? Te : De
        }),
        Ue = (function (e) {
          f()(r, e)
          var t = y()(r)
          function r() {
            var e
            i()(this, r)
            for (var a = arguments.length, n = new Array(a), c = 0; c < a; c++) n[c] = arguments[c]
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
            d()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.query,
                    a = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    n = I.a.createElement(ie.a, { Icon: xe.a, color: 'neutral', size: a, style: Le.searchIcon })
                  return I.a.createElement(
                    le.a,
                    { avatarCell: n, avatarSize: a, cellStyle: Le.bodyColumn },
                    I.a.createElement(de.b, { numberOfLines: 1, withHashflags: !0 }, r),
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
            r
          )
        })(I.a.Component),
        Le = re.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        }),
        Fe = Ue,
        je = r('htQn'),
        Pe = { viewType: 'search_item' },
        qe = (function (e) {
          f()(r, e)
          var t = y()(r)
          function r(e, a) {
            var n
            return (
              i()(this, r),
              (n = t.call(this, e, a)),
              S()(h()(n), '_renderSearchItem', function () {
                var e = n.props,
                  t = e.index,
                  r = e.item,
                  a = e.onItemClick
                return r.keyword
                  ? I.a.createElement(Fe, {
                      category: r.category,
                      onRemove: n._handleOnRemove,
                      query: r.keyword.query,
                      ref: n._handleItemRef,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : r.user
                  ? I.a.createElement(Ce, {
                      id: r.user.id || '',
                      index: t,
                      onItemClick: a,
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      style: Ne.itemPadding,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : r.topic
                  ? I.a.createElement(fe, {
                      description: r.topic.description || '',
                      id: r.topic.id,
                      name: r.topic.name || '',
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : r.event
                  ? I.a.createElement(se, {
                      id: r.event.id,
                      image: r.event.image || { url: '', height: 0, width: 0 },
                      onRemove: n._handleOnRemove,
                      ref: n._handleItemRef,
                      supportText: r.event.supportText || '',
                      title: r.event.title || '',
                      withNewTypeaheadUI: n._withNewTypeaheadUI,
                    })
                  : null
              }),
              S()(h()(n), '_handleItemRef', function (e) {
                n._itemRef = e
              }),
              S()(h()(n), '_handleOnRemove', function (e) {
                var t = n.props,
                  r = t.index,
                  a = t.item
                ;(0, t.onRemoveQuery)(a, r), e.stopPropagation()
              }),
              S()(h()(n), '_handleOnClick', function () {
                var e = n.props,
                  t = e.index,
                  r = e.item,
                  a = e.onItemClick
                r.user || (n.searchItemData && a(n.searchItemData, t))
              }),
              (n._withNewTypeaheadUI = n.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              n
            )
          }
          return (
            d()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.domId,
                    r = e.item,
                    a = e.testID
                  return I.a.createElement(
                    w.a,
                    { behavioralEventContext: Pe },
                    I.a.createElement(
                      je.a,
                      {
                        accessibilityRole: 'option',
                        accessibilityState: { selected: !!t },
                        focusable: !0,
                        nativeID: t,
                        onClick: this._handleOnClick,
                        style: [Ne.root, t && Ne.focused, !(null != r && r.user) && Ne.itemPadding],
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
            r
          )
        })(I.a.Component)
      S()(qe, 'contextType', _e.a)
      var Ne = re.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        He = qe,
        Me = r('4ZbN'),
        Ve = r('eb3s'),
        Ke = r('MXDK'),
        Qe = T.a.ee295fbe,
        We = { headline: T.a.f45c425f, text: T.a.caae4dd9, confirmButtonLabel: T.a.dbd5d40f },
        Be = T.a.a8d68f61,
        ze = T.a.c6530778,
        Ge = T.a.e047b8fa,
        Ye = ['user', 'keyword'],
        Xe = (function (e) {
          f()(r, e)
          var t = y()(r)
          function r(e, a) {
            var c
            i()(this, r),
              (c = t.call(this, e, a)),
              S()(h()(c), '_withNewTypeaheadUI', !1),
              S()(h()(c), '_getRecentSearchItems', function () {
                var e = c.props,
                  t = e.failedRecentSearchUserIds,
                  r = e.recentSearches,
                  a = c.state.allowedRecentSearchItems,
                  n = r
                    .filter(function (e) {
                      var r = e.user
                      return !r || t.indexOf(r.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return a.includes(e)
                      })
                    })
                return n.length > 15 ? n.slice(0, 15) : n
              }),
              S()(h()(c), '_render', function () {
                var e = c.props,
                  t = e.domId,
                  r = e.savedSearches,
                  a = 0 === c._getNumOfSearchItems(),
                  n = c._getRecentSearchItems()
                return a
                  ? I.a.createElement(
                      ee.a,
                      { style: Ze.emptyState, testID: Me.a.typeaheadEmptySearch },
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
                              { style: Ze.header, testID: Me.a.typeaheadRecentSearchesHeader },
                              I.a.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Be),
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
                      r.length > 0
                        ? I.a.createElement(
                            I.a.Fragment,
                            null,
                            I.a.createElement(
                              ee.a,
                              {
                                accessibilityHidden: !0,
                                style: [Ze.header, Ze.borderTop],
                                testID: Me.a.typeaheadSavedSearchesHeader,
                              },
                              I.a.createElement(de.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, ze),
                            ),
                            c._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              S()(h()(c), '_renderRecentSearchItem', function (e, t) {
                var r = c.props.ariaDescendantId,
                  a = c.state.focusIndex === t
                return I.a.createElement(He, {
                  domId: a ? r : void 0,
                  index: t,
                  item: e,
                  key: c._chooseKeyType(e, t),
                  onItemClick: c._handleOnItemClick,
                  onRemoveQuery: c._handleRemoveQuery,
                  ref: a ? c._setFocusedItemRef : void 0,
                  testID: Me.a.typeaheadRecentSearchesItem,
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
                  r = e.savedSearches,
                  a = c.state.focusIndex,
                  n = c._getRecentSearchItems(),
                  o = b()(r)
                return (
                  o.reverse(),
                  I.a.createElement(
                    ee.a,
                    { testID: Me.a.typeaheadSavedSearchesContainer },
                    o.map(function (e, r) {
                      var o = a === r + n.length
                      return I.a.createElement(He, {
                        domId: o ? t : void 0,
                        index: r,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: c._handleOnItemClick,
                        onRemoveQuery: c._handleRemoveQuery,
                        ref: o ? c._setFocusedItemRef : void 0,
                        testID: Me.a.typeaheadSavedSearchesItem,
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
                  r = e.fetchUsersIfNeeded,
                  a = e.fetchUsersPresenceIfNeeded,
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
                r(d).catch(t({})),
                  l && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && a(d).catch(t({}))
              }),
              S()(h()(c), '_handleRemoveQuery', function (e, t) {
                var r = c.props,
                  a = r.analytics,
                  n = r.removeQuery
                switch (e.category) {
                  case j.b.RecentSearch:
                    var o = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    n(o), c._resetFocus()
                    var s = L.a.forRecentSearchResult(o, t),
                      i = c._handleRemoveAction(e)
                    s && a.scribe({ action: i, data: { items: [s] } })
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
                  r = e.deleteSavedSearch,
                  a = e.savedSearches,
                  n = c.state.savedSearchIdToDelete,
                  o = a.findIndex(function (e) {
                    return e.savedSearchId === n
                  }),
                  s = a[o]
                if (n) {
                  r(n)
                  var i = s && L.a.forSavedSearchResult(s.keyword.query, o)
                  i && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [i] } })
                }
                c.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(h()(c), '_handleOnDeleteSavedSearchCancel', function () {
                c.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              S()(h()(c), '_handleOnItemClick', function (e, t) {
                var r = c.props,
                  a = r.onDismiss
                ;(0, r.onItemClick)(e, t), c._scribeClick(e, t), a && a()
              }),
              S()(h()(c), '_scribeRecentSearchImpression', function () {
                var e = c.props,
                  t = e.analytics,
                  r = e.recentSearches
                if (r && r.length) {
                  var a = Object(E.a)(
                    r.map(function (e, t) {
                      return L.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: a } })
                }
              }),
              S()(h()(c), '_scribeSavedSearchImpression', function () {
                var e = c.props,
                  t = e.analytics,
                  r = e.savedSearches
                if (r && r.length) {
                  var a = Object(E.a)(
                    r.map(function (e, t) {
                      return L.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: a } })
                }
              }),
              S()(h()(c), '_scribeClick', function (e, t) {
                var r = c.props.analytics
                switch (e.category) {
                  case j.b.SavedSearch:
                    var a = L.a.forSavedSearchResult(e.query, t)
                    r.scribe({ element: 'typeahead', action: 'click', data: { targets: [a] } })
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
                    var s = o && L.a.forRecentSearchResult(o, t)
                    s && r.scribe({ action: 'click', data: { targets: [s] } })
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
                var r = c.props.onItemFocusChanged
                ;(c._shouldScrollToFocusedItem = t), c.setState({ focusIndex: e }), r && r()
              }),
              S()(h()(c), '_resetFocus', function () {
                c._setFocusIndex(-1)
              }),
              S()(h()(c), 'focusNext', function () {
                var e = c.state.focusIndex,
                  t = c._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e + 1 >= t ? 0 : e + 1
                  c._setFocusIndex(r, !0)
                }
              }),
              S()(h()(c), 'focusPrevious', function () {
                var e = c.state.focusIndex,
                  t = c._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e - 1 < 0 ? t - 1 : e - 1
                  c._setFocusIndex(r, !0)
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
            d()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    r = e.fetchRecentSearchesIfNeeded,
                    a = e.fetchSavedSearchesIfNeeded,
                    n = e.recentSearches,
                    c = e.savedSearches
                  r(),
                    a().catch(t({})),
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
                    r = t.recentSearches,
                    a = t.savedSearches
                  e.recentSearches !== r &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== a && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    r = e.style,
                    a = this.state,
                    n = a.shouldShowClearAllConfirmationSheet,
                    c = a.shouldShowDeleteSavedSearchConfirmation
                  return I.a.createElement(
                    ee.a,
                    { style: r },
                    I.a.createElement(z.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    n
                      ? I.a.createElement(Ve.a, {
                          confirmButtonLabel: We.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: We.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Me.a.deleteRecentSearchesDialog,
                          text: We.text,
                        })
                      : null,
                    c
                      ? I.a.createElement(B.a, {
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
            r
          )
        })(I.a.Component)
      S()(Xe, 'contextType', _e.a)
      var Ze = re.a.create(function (e) {
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
        Je = W.forwardRef(Xe),
        $e = 'SearchBox_Search_Input',
        et = r('TnY3'),
        tt = r('GZwR'),
        rt = r('4e/K'),
        at = T.a.ib2e46ee,
        nt = T.a.hbc99b02,
        ct = /^(\w+)$/,
        ot = [tt.a.Events, tt.a.Users, tt.a.Topics],
        st = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        it = { viewType: 'search_field' },
        lt = ['t1', 't3', 't4'],
        dt = (function (e) {
          f()(r, e)
          var t = y()(r)
          function r(e, a) {
            var c, s
            return (
              i()(this, r),
              (s = t.call(this, e, a)),
              S()(h()(s), '_withNewTypeaheadUI', !1),
              S()(h()(s), '_orderResults', function (e, t, r, a) {
                return 't4' === s._rankedTypeaheadExperimentalValue
                  ? s._reorderResults(e, t, r, a)
                  : s._flattenResults(e, t, r, a)
              }),
              S()(h()(s), '_reorderResults', function (e, t, r, a) {
                var n = Object(tt.f)(t, tt.b.User),
                  c = Object(tt.f)(t, tt.b.NoResult),
                  o = n.sort(function (e, t) {
                    var r = e.rounded_score,
                      a = void 0 === r ? 0 : r,
                      n = t.rounded_score
                    return (void 0 === n ? 0 : n) - a
                  }),
                  s = [].concat(b()(o), b()(c))
                return Object(E.a)([e, a.length ? a : void 0, r.length ? r : void 0, s.length ? s : void 0])
              }),
              S()(h()(s), '_flattenResults', function (e, t, r, a) {
                var n = Object(tt.f)(t, tt.b.User),
                  c = Object(tt.f)(t, tt.b.NoResult),
                  o = Object(tt.f)(r, tt.b.Topic),
                  i = Object(tt.f)(r, tt.b.NoResult),
                  l = Object(tt.f)(a, tt.b.Event),
                  d = [].concat(b()(Object(tt.e)(o)), b()(Object(tt.e)(n))),
                  u = (
                    't1' === s._rankedTypeaheadExperimentalValue
                      ? d.sort(function (e, t) {
                          return t.rank - e.rank
                        })
                      : 't3' === s._rankedTypeaheadExperimentalValue
                      ? (function (e) {
                          for (var t = b()(e), r = e.length - 1; r > 0; r--) {
                            var a = Math.floor(Math.random() * (r + 1)),
                              n = t[a],
                              c = t[r]
                            ;(t[r] = n), (t[a] = c)
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
                  r = e.link,
                  a = e.query,
                  c = e.queryMetadata,
                  o = e.recentSearchType,
                  i = s.props.addQuery
                t === j.b.SavedSearch
                  ? s._submitQuery({ query: a, shouldAddToRecentSearch: !1, src: A.a.SavedSearchClick })
                  : o === j.a.Keyword
                  ? s._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: A.a.RecentSearchClick })
                  : o === j.a.Event
                  ? (s._routeTransition({ pathname: '/i/events/'.concat(a) }),
                    c && c.title && i({ event: n()(n()({}, c), {}, { id: a, type: j.a.Event }) }))
                  : o === j.a.Topic
                  ? (s._routeTransition({ pathname: '/i/topics/'.concat(a) }),
                    c && c.name && i({ topic: n()(n()({}, c), {}, { id: a, type: j.a.Topic }) }))
                  : r && (s._routeTransition({ pathname: '/'.concat(r) }), i({ user: { id: a, type: j.a.User } }))
              }),
              S()(h()(s), '_handleSearchShortcut', function (e) {
                var t = s._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              S()(h()(s), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  r = st(t)
                if (r.match(ct))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: tt.b.NoResult,
                    data: { text: nt({ screenName: r }), type: 'user' },
                  }
              }),
              S()(h()(s), '_handleOnDismiss', function () {
                var e = s.props.history,
                  t = e.location,
                  r = t.state || {}
                if (r.searchFocused) {
                  var a = n()(n()({}, t), {}, { state: n()(n()({}, r), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(a)
                }
              }),
              S()(h()(s), '_handleOnFocus', function () {
                var e = s.props,
                  t = e.analytics,
                  r = e.history,
                  a = r.location,
                  c = a.state || {}
                if (!c.searchFocused) {
                  var o = n()(n()({}, a), {}, { state: n()(n()({}, c), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), r.push(o)
                }
              }),
              S()(h()(s), '_handleChange', function (e) {
                var t,
                  r = s.props.history.location
                !s._rankedTypeaheadExperimentalValue &&
                  null !== (t = r.state) &&
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
                  r = e.query,
                  a = s.props.analytics
                ;/^\s*$/.test(r) ||
                  (a.scribe({
                    action: 'search',
                    data: { items: L.a.forTypeaheadResults(t), search_details: { query: r } },
                  }),
                  s._submitQuery({ query: r, shouldAddToRecentSearch: !0 }))
              }),
              S()(h()(s), '_handleItemClick', function (e, t) {
                var r = s.props.addQuery,
                  a = s.state.query
                switch (e.type) {
                  case tt.b.User:
                    if (e.data.id_str) r({ user: { id: e.data.id_str, type: j.a.User } })
                    s._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case tt.b.Topic:
                  case tt.b.Hashtag:
                    s._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: A.a.TypeaheadClick })
                    break
                  case tt.b.Event:
                    e.data && e.data.url
                      ? s._routeTransition({ pathname: O.b.parseInternalUrl(e.data.url) })
                      : s._submitQuery({ query: e.data.topic, src: A.a.TypeaheadClick })
                    break
                  case tt.b.NoResult:
                    var n = e.data.type
                    'user' === n
                      ? s._routeTransition({ pathname: '/'.concat(st(a)) })
                      : 'topic' === n &&
                        s._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: A.a.TypeaheadClick })
                }
              }),
              S()(h()(s), '_handleItemsChanged', function (e) {
                s.setState({ items: e })
              }),
              S()(h()(s), '_routeTransition', function (e) {
                var t = e.params,
                  r = e.pathname,
                  a = e.query,
                  c = e.src,
                  o = s.props,
                  i = o.history,
                  l = o.location,
                  d = n()(
                    n()({}, l),
                    {},
                    {
                      pathname: r,
                      search: '',
                      query: t || (a ? { q: a, src: c } : {}),
                      state: n()(n()({}, l.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                i.replace(d)
              }),
              S()(h()(s), '_submitQuery', function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  a = void 0 !== r && r,
                  n = e.src,
                  c = void 0 === n ? A.a.Typed : n,
                  o = s.props,
                  i = o.addQuery,
                  l = o.mode,
                  d = o.onSubmit,
                  u = o.searchFilters,
                  h = o.searchRoute
                ;(d && d(t, c, s.state.lastSubmittedQuery === t), a) && i({ keyword: { query: t, type: j.a.Keyword } })
                var p = Object(j.g)({ query: t, querySrc: c, mode: l, searchFilters: u })
                s._routeTransition({ pathname: h, params: p, src: c }), s.setState({ lastSubmittedQuery: t })
              }),
              S()(h()(s), '_setInputRef', function (e) {
                s._inputRef = e
              }),
              (s.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(x.a)(null === (c = e.location.query) || void 0 === c ? void 0 : c.q),
              }),
              (s._withNewTypeaheadUI = s.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              s
            )
          }
          return (
            d()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(U.b)(this._handleSearchShortcut))
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
                    a = e.isInSidebar,
                    n = e.isOnHomepage,
                    c = e.location,
                    o = e.placeholder,
                    s = this.state.query,
                    i = (c.state || {}).searchPrefill,
                    l = this.props.initialValue || i,
                    d = !!c.state && !!c.state.searchFocused,
                    u = lt.includes(this._rankedTypeaheadExperimentalValue)
                  return I.a.createElement(
                    w.a,
                    { behavioralEventContext: it },
                    I.a.createElement(
                      ee.a,
                      { style: ut.root },
                      I.a.createElement(rt.default, {
                        filter: ot,
                        forceVdlDisable: t,
                        getTopicExactMatch: s ? tt.h : void 0,
                        getUserExactMatch: s ? this._getUserExactMatch : void 0,
                        initialValue: l,
                        inputStyle: ut.input,
                        isCompact: r,
                        isInSidebar: a,
                        isOnHomepage: n,
                        onDismiss: this._handleOnDismiss,
                        onFocus: this._handleOnFocus,
                        onItemClick: this._handleItemClick,
                        onItemsChanged: this._handleItemsChanged,
                        onQueryChange: this._handleChange,
                        onSubmit: this._handleTypeaheadSubmit,
                        orderResults: u ? this._orderResults : void 0,
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
            r
          )
        })(I.a.Component)
      S()(dt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: at,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        S()(dt, 'contextType', _e.a)
      var ut = re.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(et.a)(k(dt))
    },
    UnyZ: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      })
      r('yH/f')
      var a = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    V2l4: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserPicker', function () {
          return T
        })
      var a = r('VrFO'),
        n = r.n(a),
        c = r('Y9Ll'),
        o = r.n(c),
        s = r('1Pcy'),
        i = r.n(s),
        l = r('5Yy7'),
        d = r.n(l),
        u = r('2VqO'),
        h = r.n(u),
        p = r('KEM+'),
        f = r.n(p),
        m = (r('z84I'), r('ho0z'), r('vrRf'), r('2G9S'), r('ERkP')),
        y = r.n(m),
        v = r('ZcYN'),
        S = r('3XMw'),
        _ = r.n(S),
        b = 'searchPeople',
        g = r('4e/K'),
        I = r('MWbm'),
        w = r('jhWN'),
        E = r('aV/s'),
        C = r('rHpw'),
        R = r('GZwR'),
        k = [R.a.Users],
        x = _.a.fc9dd578,
        D = _.a.gdb7bc24,
        T = (function (e) {
          d()(r, e)
          var t = h()(r)
          function r(e, a) {
            var c
            return (
              n()(this, r),
              (c = t.call(this, e, a)),
              f()(i()(c), '_renderSelectedUsersList', function () {
                var e = c.props.selectedUsers
                return y.a.createElement(I.a, { style: O.selectedUsersList }, e.map(c._renderSelectedUserPill))
              }),
              f()(i()(c), '_renderSelectedUserPill', function (e) {
                var t = c.props.withCompactPills,
                  r = c.props.onRemove.bind(i()(c), e),
                  a =
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
                  avatar: a,
                  compact: t,
                  key: e.id,
                  mode: 'remove',
                  onClick: r,
                  style: O.selectionPill,
                  text: e.data.name,
                })
              }),
              f()(i()(c), '_getItemIsDisabled', function (e) {
                var t = c.props,
                  r = t.getItemIsDisabled
                return t.preselectedUsers.indexOf(e.id) >= 0 || !(!r || !r(e))
              }),
              f()(i()(c), '_getItemDisabledMessage', function (e) {
                var t = c.props,
                  r = t.getItemDisabledMessage
                return t.preselectedUsers.indexOf(e.id) >= 0 ? void 0 : r ? r(e) : void 0
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
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.injections,
                    r = e.preselectedUsers,
                    a = e.renderCallout,
                    n = e.renderHeader,
                    c = e.selectedUsers,
                    o = e.shouldAutoFocus,
                    s = e.source,
                    i = c
                      .map(function (e) {
                        return e.id
                      })
                      .concat(r)
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
                      renderCallout: a,
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
            r
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
    'aV/s': function (e, t, r) {
      'use strict'
      var a = r('VrFO'),
        n = r.n(a),
        c = r('Y9Ll'),
        o = r.n(c),
        s = r('1Pcy'),
        i = r.n(s),
        l = r('5Yy7'),
        d = r.n(l),
        u = r('2VqO'),
        h = r.n(u),
        p = r('KEM+'),
        f = r.n(p),
        m = (r('2G9S'), r('hBvt'), r('uFXj'), r('ERkP')),
        y = r.n(m),
        v = r('t62R'),
        S = r('3XMw'),
        _ = r.n(S),
        b = r('I4+6'),
        g = r('cm6r'),
        I = r('UnyZ'),
        w = r('rHpw'),
        E = r('MWbm'),
        C = r('hOZg'),
        R = r('iY63'),
        k = r('IMYl'),
        x = { active: _.a.e557ad8d, expand: _.a.e3a58c27, remove: _.a.h517e8d8 },
        D = (function (e) {
          d()(r, e)
          var t = h()(r)
          function r() {
            var e
            n()(this, r)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
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
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    r = e.avatar,
                    a = e.compact,
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
                    f = [T.root, a && T.compact, n && T.disabled, l && T.selected, d],
                    m = [T.content, h && T.withIcon, r && ((a && T.withAvatarImageCompact) || T.withAvatarImage)],
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
                          color: l ? 'whiteOnColor' : 'text',
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
                    r = this.props.selected,
                    a = [T.icon, r && T.iconSelected],
                    n = [T.icon]
                  switch (t) {
                    case I.a.Remove:
                      return y.a.createElement(C.a, { style: [T.dismissIcon, e && a] })
                    case I.a.Expand:
                      return y.a.createElement(R.a, { style: e ? a : n })
                    case I.a.Active:
                      return y.a.createElement(k.a, { style: a })
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
                    ? y.a.createElement(E.a, { style: [T.avatarContainer, r ? T.avatarCompact : T.avatar] }, t)
                    : null
                },
              },
            ]),
            r
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
    bJYH: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GenericTypeaheadComposeWrapper', function () {
          return F
        })
      var a = r('yiKp'),
        n = r.n(a),
        c = r('VrFO'),
        o = r.n(c),
        s = r('Y9Ll'),
        i = r.n(s),
        l = r('1Pcy'),
        d = r.n(l),
        u = r('5Yy7'),
        h = r.n(u),
        p = r('2VqO'),
        f = r.n(p),
        m = r('KEM+'),
        y = r.n(m),
        v = (r('uFXj'), r('ERkP')),
        S = r.n(v),
        _ = r('oEoC'),
        b = r('oQhu'),
        g = r('7nmT'),
        I = r.n(g),
        w = r('WPfJ'),
        E = r('OEYw'),
        C = r('MWbm'),
        R = r('Irs7'),
        k = r('0FVZ'),
        x = r('xoZN'),
        D = r('7N4s'),
        T = r('rHpw'),
        O = r('GZwR'),
        A = [O.a.Users],
        U = [O.a.Topics],
        L = 0,
        F = (function (e) {
          h()(r, e)
          var t = f()(r)
          function r(e, a) {
            var c
            return (
              o()(this, r),
              (c = t.call(this, e, a)),
              y()(d()(c), '_typeaheadActive', !1),
              y()(d()(c), '_renderTypeaheadDropdown', function (e) {
                var t = c.props,
                  r = t.contextText,
                  a = t.isInlineReply,
                  n = t.onSelectItem,
                  o = t.source,
                  s = c.context.isModal,
                  i = e.resultType === O.a.Topics ? 'hashtag' : void 0,
                  l = S.a.createElement(E.a, {
                    ariaDescendantId: c.state.ariaDescendantId,
                    contextText: r,
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
                return s || a
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
                  r = e.query,
                  a = S.a.cloneElement(t, {
                    ariaAutocomplete: 'list',
                    ariaControls: c._dropdownDomId,
                    ariaActiveDescendant: c.state.ariaDescendantId,
                    ref: function (e) {
                      ;(c._textInputNode = I.a.findDOMNode(e)), (c._textInputRef = e)
                      var r = t.ref
                      r && r(e)
                    },
                  })
                return S.a.createElement(
                  C.a,
                  { style: j.inputContainer },
                  S.a.createElement(
                    x.a,
                    { onKeyDown: c._handleKeyDown },
                    a,
                    c._textInputNode && r ? c._renderTypeaheadDropdown(r) : null,
                  ),
                )
              }),
              y()(d()(c), '_getFilter', function (e) {
                return 'users' === e ? A : U
              }),
              y()(d()(c), '_calcStyle', function () {
                var e = c.context.isModal,
                  t = c.props,
                  r = t.isInline,
                  a = t.isInlineReply,
                  n = c._textInputNode,
                  o = window.innerHeight,
                  s = window.innerWidth,
                  i = (c._textInputRef && c._textInputRef.getTextInputHeight()) || 20
                if (n instanceof window.HTMLElement) {
                  if (e || r) {
                    var l = n.getBoundingClientRect()
                    return [c._getDropdownPositioningStyle(o, s, l.top, l.top + i, l.left, e, !!a), j.dropdownStyle]
                  }
                  return [c._getModalFullViewportStyle(i), j.modalFullViewportStyle]
                }
                return [c._getDropdownPositioningStyle(i, s, 0, 0, 0, e, !!a), j.dropdownStyle]
              }),
              y()(d()(c), '_handleKeyDown', function (e) {
                var t = c.state.selectedItem,
                  r = c.props,
                  a = r.onSelectItem,
                  n = r.query,
                  o = e.key
                _.g(e) &&
                  n &&
                  ('ArrowDown' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusNext(), e.preventDefault())
                    : 'ArrowUp' === o
                    ? (c._typeaheadRef && c._typeaheadRef.focusPrevious(), e.preventDefault())
                    : 'Enter' === o || 'Tab' === o
                    ? t && (a(t), e.preventDefault())
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
                  var r = (50 * e) / 100
                  return r > t ? t : r
                }),
              ),
              y()(
                d()(c),
                '_getModalOrInlineReplyDropdownStyles',
                Object(b.a)(function (e, t, r) {
                  return e ? { bottom: ''.concat(r, 'px') } : { top: ''.concat(t, 'px') }
                }),
              ),
              y()(
                d()(c),
                '_getDropdownPositioningStyle',
                Object(b.a)(function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    l = 10,
                    d = t - o - l,
                    u = Math.min(d, 300),
                    h = e - a,
                    p = r,
                    f = h / e < 0.5 && p > h,
                    m = f ? c._getDropdownHeight(e, p - l) : c._getDropdownHeight(e, h - l),
                    y = { maxWidth: ''.concat(d, 'px'), minWidth: ''.concat(u, 'px'), maxHeight: ''.concat(m, 'px') }
                  return s || i
                    ? n()(
                        n()({}, y),
                        {},
                        { position: 'fixed', left: ''.concat(o, 'px') },
                        c._getModalOrInlineReplyDropdownStyles(f, a, e - r),
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
            i()(r, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.onTypeaheadStateChange,
                    r = e.query,
                    a = !(!this._textInputNode || !r)
                  a !== this._typeaheadActive && ((this._typeaheadActive = a), t && t(a))
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
    hiGS: function (e, t, r) {
      'use strict'
      var a = r('yiKp'),
        n = r.n(a),
        c = r('ERkP'),
        o = r.n(c),
        s = r('Lsrn'),
        i = r('k/Ka'),
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
    kIAd: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      }),
        r.d(t, 'b', function () {
          return c
        })
      var a = r('0vv5'),
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
            { type: 'hashtag', regexp: r.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
        return d
      }),
        r.d(t, 'c', function () {
          return u
        }),
        r.d(t, 'b', function () {
          return h
        }),
        r.d(t, 'g', function () {
          return p
        }),
        r.d(t, 'a', function () {
          return f
        }),
        r.d(t, 'd', function () {
          return m
        }),
        r.d(t, 'f', function () {
          return v
        })
      var a = r('RhWx'),
        n = r.n(a),
        c = r('yiKp'),
        o = r.n(c),
        s =
          (r('hBpG'),
          r('7x/C'),
          r('vrRf'),
          r('KqXw'),
          r('WNMA'),
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
        l = r('rHpw')
      function d(e, t) {
        var r,
          a = i.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (r = e.match(a.regexp))
          }),
          n = ''
        return r && (n = r && (1 === r.length ? r[0] : r[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: n }) : null
      }
      function u(e, t) {
        var r = t.slice(0, e),
          a = t.slice(e, t.length),
          n = r.search(i.b.WordEnd),
          c = n >= 0 ? r.slice(n) : '',
          o = a.search(i.b.WordBoundary),
          s = c + a.slice(0, o)
        return s.trim() ? { start: n, end: e + o, word: s } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function p(e) {
        var t = e.altKey,
          r = e.ctrlKey,
          a = e.metaKey
        return !(t || r || a)
      }
      function f(e, t) {
        var r = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? r.push(a) : r.push(e)
        })
        var a = r.map(function (e) {
            return e.id
          }),
          c = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(r, n()(c))
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
    rRIm: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return K
      })
      var a = r('yiKp'),
        n = r.n(a),
        c = r('VrFO'),
        o = r.n(c),
        s = r('Y9Ll'),
        i = r.n(s),
        l = r('1Pcy'),
        d = r.n(l),
        u = r('5Yy7'),
        h = r.n(u),
        p = r('2VqO'),
        f = r.n(p),
        m = r('KEM+'),
        y = r.n(m),
        v = (r('2G9S'), r('KqXw'), r('LJOr'), r('ERkP')),
        S = r.n(v),
        _ = r('sTyV'),
        b = r('6/RC'),
        g = r('sebV'),
        I = r('G6rE'),
        w = r('rxPX'),
        E = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: I.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        C = r('3XMw'),
        R = r.n(C),
        k = r('OrGc'),
        x = r('QK5w'),
        D = r('aITJ'),
        T = r('MWbm'),
        O = r('TnY3'),
        A = r('rHpw'),
        U = r('t62R'),
        L = r('v6aA'),
        F = r('uScj'),
        j = r('fs1G'),
        P = r('BcsE'),
        q = r('VPAj'),
        N = R.a.b47e760d,
        H = R.a.fd2c7b43,
        M = new F.a(),
        V = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        K = function (e) {
          return b.canUseDOM ? M.subscribe(e).unsubscribe : j.a
        },
        Q = (function (e) {
          h()(r, e)
          var t = f()(r)
          function r() {
            var e
            o()(this, r)
            for (var a = arguments.length, c = new Array(a), s = 0; s < a; s++) c[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(d()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  r,
                  a = e.props,
                  c = a.history,
                  o = a.loggedInUserScreenName,
                  s = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        M.getListeners().length
                          ? M.notify(e)
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
                    ((r = {}),
                    y()(r, k.e.goHome, function () {
                      return c.push('/home')
                    }),
                    y()(r, k.e.goDisplay, function () {
                      return c.push('/i/display')
                    }),
                    y()(r, k.e.goNotifications, function () {
                      return c.push('/notifications')
                    }),
                    y()(r, k.e.goMentions, function () {
                      return c.push('/notifications/mentions')
                    }),
                    y()(r, k.e.goMessages, function () {
                      return c.push('/messages')
                    }),
                    y()(r, k.e.newMessage, function () {
                      return c.push('/messages/compose')
                    }),
                    y()(r, k.e.newTweet, function () {
                      return c.push('/compose/tweet')
                    }),
                    y()(r, k.e.goMomentMaker, function () {
                      return c.push('/i/moment_maker')
                    }),
                    y()(r, k.e.goBookmarks, function () {
                      return c.push('/i/bookmarks')
                    }),
                    r),
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
                  var r = e._backspaceDown,
                    a = !!Object(P.a)(r) && Date.now() - r < 500,
                    n = Object(x.a)({}, { location: e.props.location })
                  a && n ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            i()(r, [
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
                        S.a.createElement(U.b, null, N),
                        S.a.createElement(U.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, H),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(S.a.Component)
      y()(Q, 'contextType', L.a)
      var W = E(Q),
        B = b.canUseDOM ? Object(O.a)(W) : Object(q.a)(null)
      t.a = B
    },
    sYRn: function (e, t, r) {
      'use strict'
      var a = r('ERkP'),
        n = r.n(a),
        c = r('eb3s'),
        o = r('3XMw'),
        s = r.n(o),
        i = r('4ZbN'),
        l = s.a.hffea05c,
        d = s.a.j037e373,
        u = s.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          r = e.onConfirm
        return n.a.createElement(c.a, {
          confirmButtonLabel: u,
          confirmButtonType: 'destructiveFilled',
          headline: l,
          onCancel: t,
          onConfirm: r,
          testID: i.a.deleteSavedSearchDialog,
          text: d,
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
        return I
      }),
        r.d(t, 'c', function () {
          return w
        }),
        r.d(t, 'a', function () {
          return E
        }),
        r.d(t, 'b', function () {
          return C
        })
      var a = r('KEM+'),
        n = r.n(a),
        c = r('RhWx'),
        o = r.n(c),
        s = r('yiKp'),
        i = r.n(s),
        l = r('T0aG'),
        d = r.n(l),
        u = (r('yH/f'), r('2G9S'), r('LW0h'), r('7x/C'), r('JtPf'), r('oEOe')),
        h = r('kGix'),
        p = r('Ssj5'),
        f = r('SrIh'),
        m = r('RqPI'),
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
            var r = t.payload,
              a = Array.isArray(r)
            return (
              a ||
                Object(f.a)('Saved search results are not type array', { extra: { savedSearchResultsType: d()(r) } }),
              i()(i()({}, e), {}, { fetchStatus: h.a.LOADED, savedSearches: a && r ? r : [] })
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
          return function (t, r, a) {
            var n = a.api
            return Object(u.b)(t, { request: n.SavedSearches.create, params: { query: e } })({
              actionTypes: _,
              context: 'SAVE_SEARCH',
            })
          }
        },
        E = function (e) {
          return function (t, r, a) {
            var n = a.api
            return Object(u.b)(t, { request: n.SavedSearches.destroy, params: { id: e } })({
              actionTypes: b,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        C = function () {
          return function (e, t, r) {
            r.api
            var a = t()
            return Object(m.m)(a)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(a) === h.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, r) {
                    var a = r.api
                    return Object(u.b)(e, { request: a.SavedSearches.fetch, params: {} })({
                      actionTypes: S,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    wtjx: function (e, t, r) {
      'use strict'
      r.d(t, 'g', function () {
        return f
      }),
        r.d(t, 'f', function () {
          return m
        }),
        r.d(t, 'e', function () {
          return y
        }),
        r.d(t, 'd', function () {
          return b
        }),
        r.d(t, 'b', function () {
          return I
        }),
        r.d(t, 'a', function () {
          return E
        }),
        r.d(t, 'c', function () {
          return C
        })
      var a = r('KEM+'),
        n = r.n(a),
        c = r('yiKp'),
        o = r.n(c),
        s = (r('7x/C'), r('JtPf'), r('LW0h'), r('Ee2X'), r('Ssj5')),
        i = r('RqPI'),
        l = 'recentSearches',
        d = 'rweb.recentSearches',
        u = function (e) {
          return function (t, r, a) {
            return a.userPersistence.set(d, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        h = function (e, t) {
          var r = []
          if (e && e.user) {
            var a = e.user
            r = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== a.id)
            })
          } else if (e && e.topic) {
            var n = e.topic
            r = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== n.id)
            })
          } else if (e && e.event) {
            var c = e.event
            r = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== c.id)
            })
          } else if (e && e.keyword) {
            var o = e.keyword
            r = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== o.query) || e.user || e.topic || e.event
            })
          }
          return r
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
        _ = 'rweb/recentSearches/REMOVE_QUERY',
        b = function (e) {
          return function (t, r, a) {
            a.userPersistence
            t({ payload: e, type: _ })
            var n = r().recentSearches
            return Object(i.m)(r()) ? t(u(n.recentSearches)) : Promise.resolve()
          }
        },
        g = 'rweb/recentSearches/CLEAR_ALL',
        I = function () {
          return function (e, t, r) {
            r.userPersistence
            e({ type: g })
            var a = t().recentSearches
            return Object(i.m)(t()) ? e(u(a.recentSearches)) : Promise.resolve()
          }
        },
        w = 'rweb/recentSearches/ADD_QUERY',
        E = function (e) {
          return function (t, r, a) {
            a.userPersistence
            t({ payload: e, type: w })
            var n = r().recentSearches
            return Object(i.m)(r()) ? t(u(n.recentSearches)) : Promise.resolve()
          }
        },
        C = function () {
          return function (e, t, r) {
            r.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, r) {
                  var a = r.userPersistence,
                    n = t()
                  return Object(i.m)(n)
                    ? a
                        .get(d)
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
      s.a.register(
        n()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case w:
              var r = t.payload,
                a = r ? h(r, e.recentSearches) : []
              return a.length > 49 && a.splice(49, 1), r && a.unshift(r), o()(o()({}, e), {}, { recentSearches: a })
            case _:
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
  },
])
//# sourceMappingURL=WIPED
