'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  [
    'shared~loader.Typeahead~bundle.LoggedOutHome~bundle.Search',
    'icons/IconChevronRight-js',
    'icons/IconCloseCircleFill-js',
    'icons/IconCloseNoMargin-js',
    'icons/IconTrashcanStroke-js',
  ],
  {
    950617: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return d
        },
      })
      var n = r(202784),
        a = r(484292),
        o = r(645184),
        i = r.n(o),
        s = r(785693),
        c = i().hffea05c,
        l = i().j037e374,
        u = i().d96cf7ce
      var d = function d(e) {
        var t = e.onCancel,
          r = e.onConfirm
        return n.createElement(a.Z, {
          confirmButtonLabel: u,
          confirmButtonType: 'destructiveFilled',
          headline: c,
          onCancel: t,
          onConfirm: r,
          testID: s.Z.deleteSavedSearchDialog,
          text: l,
        })
      }
    },
    785693: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return n
        },
      })
      var n = {
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
    892205: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          SearchBoxContainer: function SearchBoxContainer() {
            return tt
          },
          default: function _default() {
            return nt
          },
        })
      var n = r(133028),
        a = r(807896),
        o = r(709249),
        i = r(887371),
        s = r(545754),
        c = r(486906),
        l = (r(472508), r(326936), r(477950), r(74069), r(385940), r(136728), r(621850), r(202784)),
        u = r(325686),
        d = r(973186),
        h = r(645184),
        p = r.n(h),
        f = r(397871),
        m = r(134615),
        y = r(676275),
        v = r(760397),
        S = r(588027),
        g = r(63899),
        _ = r(76687),
        C = r(348501),
        b = r(820604),
        I = r(974383),
        x = r(968079),
        Z =
          (r(374083),
          r(995342),
          r(358188),
          r(739529),
          r(467321),
          r(334769),
          r(332501),
          r(543450),
          r(549992),
          r(209949),
          r(928316)),
        E = r(436934),
        R = r(229496),
        k = r(484292),
        w = r(211469),
        F = r(872983),
        T = r(240159),
        D = (r(818178), r(334115), r(200634), r(174062)),
        A = r(819153),
        P = r(418958),
        L = r(392160),
        H = r(935742),
        O = r(157659),
        B = function B(e, t) {
          return O.ZP.select(e, t.id)
        },
        z = function z(e, t) {
          return (0, H.cY)(e, t.id)
        }
      var U = (0, L.Z)().propsFromState(function () {
        return { user: B, userSpace: z }
      })
      var M = l.createElement(P['default'], null),
        N = p().e68b09b4,
        q = p().fd06b02f,
        V = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(a)))._handleAvatarClick = function () {
                e.props.userSpace || e._handleClick()
              }),
              (e._handleClick = function () {
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
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.style,
                    n = e.user,
                    a = e.userSpace,
                    o = this.context.featureSwitches
                  if (!n) return null
                  var i = a && o.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? a : void 0
                  i && (i.accessibilityLabel = q({ screenName: n.screen_name }))
                  var s = l.createElement(R.ZP, {
                    accessibilityLabel: N,
                    icon: M,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return l.createElement(A.ZP, {
                    affiliateBadgeInfo: n.highlightedLabel,
                    avatarSize: 'xLarge',
                    avatarUri: n.profile_image_url_https,
                    decoration: s,
                    displayMode: 'UserCompact',
                    isBlueVerified: n.is_blue_verified,
                    isProtected: n['protected'],
                    isVerified: n.verified,
                    name: n.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: i,
                    screenName: n.screen_name,
                    style: r,
                    userId: n.id_str,
                    verifiedType: n.verified_type,
                    withInteractiveStyling: !1,
                    withLink: !1,
                    withUsernameCenterAligned: !0,
                  })
                },
              },
              {
                key: 'searchItemData',
                get: function get() {
                  return this.props.user
                    ? {
                        category: v.Hk.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: v.g2.User,
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(l.Component)
      V.contextType = C.rC
      var j = U.forwardRef(V)
      var K = r(459740),
        Q = r(430084),
        W = ['id', 'onRemove'],
        G = p().e68b09b4,
        $ = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            return (0, o.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.id,
                    r = e.onRemove,
                    n = (0, K.Z)(e, W)
                  return t
                    ? l.createElement(
                        u.Z,
                        { style: Y.root },
                        l.createElement(Q.Z, n),
                        l.createElement(R.ZP, {
                          accessibilityLabel: G,
                          icon: l.createElement(P['default'], null),
                          onPress: r,
                          size: 'small',
                          style: Y.button,
                          type: 'brandText',
                        }),
                      )
                    : null
                },
              },
              {
                key: 'searchItemData',
                get: function get() {
                  var e = this.props,
                    t = e.id,
                    r = e.image,
                    n = e.supportText,
                    a = e.title
                  return {
                    category: v.Hk.RecentSearch,
                    query: t,
                    recentSearchType: v.g2.Event,
                    queryMetadata: { id: t, image: r, title: a, supportText: n },
                  }
                },
              },
            ]),
            r
          )
        })(l.PureComponent),
        Y = d.Z.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        })
      var J = $
      var X = r(238749),
        ee = r(137541),
        te = r(880166),
        re = l.createElement(P['default'], null),
        ne = p().e68b09b4
      var ae = (function (e) {
        ;(0, s.Z)(r, e)
        var t = (0, c.Z)(r)
        function r() {
          return (0, o.Z)(this, r), t.apply(this, arguments)
        }
        return (
          (0, i.Z)(r, [
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.description,
                  r = e.id,
                  n = e.name,
                  a = e.onRemove
                if (!r) return null
                var o = 'xLarge',
                  i = l.createElement(X.Z, { Icon: te['default'], color: 'primary', size: o, style: oe.searchIcon })
                return l.createElement(
                  ee.Z,
                  { avatarCell: i, avatarSize: o, cellStyle: oe.bodyColumn },
                  l.createElement(
                    u.Z,
                    null,
                    l.createElement(E.ZP, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, n),
                    l.createElement(E.ZP, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                  ),
                  l.createElement(R.ZP, {
                    accessibilityLabel: ne,
                    icon: re,
                    onPress: a,
                    size: 'small',
                    type: 'brandText',
                  }),
                )
              },
            },
            {
              key: 'searchItemData',
              get: function get() {
                var e = this.props,
                  t = e.description,
                  r = e.id,
                  n = e.name
                return r
                  ? {
                      category: v.Hk.RecentSearch,
                      query: r,
                      recentSearchType: v.g2.Topic,
                      queryMetadata: { id: r, name: n, description: t },
                    }
                  : null
              },
            },
          ]),
          r
        )
      })(l.Component)
      var oe = d.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12 },
          }
        }),
        ie = r(246874),
        se = r(210891),
        ce = r(16587),
        le = l.createElement(P['default'], null),
        ue = l.createElement(ie['default'], null),
        de = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(a)))._getMemoizedButtonType = (0, ce.Z)(function (e) {
                return e === v.Hk.SavedSearch ? 'destructiveText' : 'brandText'
              })),
              (e._getMemoizedRemoveIcon = (0, ce.Z)(function (e) {
                return e === v.Hk.SavedSearch ? ue : le
              })),
              (e._getButtonType = function () {
                var t = e.props.category
                return e._getMemoizedButtonType(t)
              }),
              (e._getRemoveIcon = function () {
                var t = e.props.category
                return e._getMemoizedRemoveIcon(t)
              }),
              e
            )
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.query,
                    n = 'xLarge',
                    a = l.createElement(X.Z, { Icon: se['default'], color: 'neutral', size: n, style: he.searchIcon })
                  return l.createElement(
                    ee.Z,
                    { avatarCell: a, avatarSize: n, cellStyle: he.bodyColumn },
                    l.createElement(E.ZP, { numberOfLines: 1, withHashflags: !0 }, r),
                    l.createElement(R.ZP, {
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
                get: function get() {
                  var e = this.props,
                    t = e.category
                  return {
                    category: t,
                    query: e.query,
                    recentSearchType: t === v.Hk.RecentSearch ? v.g2.Keyword : void 0,
                  }
                },
              },
            ]),
            r
          )
        })(l.Component),
        he = d.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        })
      var pe = de
      var fe = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(a)))._renderSearchItem = function () {
                var t = e.props,
                  r = t.index,
                  n = t.item,
                  a = t.onItemClick
                return n.keyword
                  ? l.createElement(pe, {
                      category: n.category,
                      onRemove: e._handleOnRemove,
                      query: n.keyword.query,
                      ref: e._handleItemRef,
                    })
                  : n.user
                  ? l.createElement(j, {
                      id: n.user.id || '',
                      index: r,
                      onItemClick: a,
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                      style: me.itemPadding,
                    })
                  : n.topic
                  ? l.createElement(ae, {
                      description: n.topic.description || '',
                      id: n.topic.id,
                      name: n.topic.name || '',
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                    })
                  : n.event
                  ? l.createElement(J, {
                      id: n.event.id,
                      image: n.event.image || { url: '', height: 0, width: 0 },
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                      supportText: n.event.supportText || '',
                      title: n.event.title || '',
                    })
                  : null
              }),
              (e._handleItemRef = function (t) {
                e._itemRef = t
              }),
              (e._handleOnRemove = function (t) {
                var r = e.props,
                  n = r.index,
                  a = r.item
                ;(0, r.onRemoveQuery)(a, n), t.stopPropagation()
              }),
              (e._handleOnClick = function () {
                var t = e.props,
                  r = t.index,
                  n = t.item,
                  a = t.onItemClick
                n.user || (e.searchItemData && a(e.searchItemData, r))
              }),
              e
            )
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.domId,
                    r = e.item,
                    n = e.testID
                  return l.createElement(
                    D.Z,
                    {
                      accessibilityRole: 'option',
                      accessibilitySelected: !!t,
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [me.root, t && me.focused, !(null != r && r.user) && me.itemPadding],
                      testID: n,
                    },
                    this._renderSearchItem(),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function get() {
                  return this._itemRef ? this._itemRef.searchItemData : null
                },
              },
            ]),
            r
          )
        })(l.Component),
        me = d.Z.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        })
      var ye = fe
      var ve = r(24949),
        Se = r(424208),
        ge = r(663140),
        _e = r(923335),
        Ce = r(671896),
        be = r(913488),
        Ie = r(823803)
      function xe(e) {
        return (
          (0, ge.VZ)(e, ge.ZP.GenericUserNotFound) ||
          (0, ge.VZ)(e, ge.ZP.OtherUserSuspended) ||
          (0, ge.VZ)(e, ge.ZP.AddressBookLookupNotFound)
        )
      }
      var Ze = (0, ve.P1)(Ce.Ww, O.ZP.selectFetchStatuses, function (e, t) {
          var r = (0, w.Z)(e, function (e) {
            var r,
              n = null === (r = e.user) || void 0 === r ? void 0 : r.id
            return n && t[n] ? { id: n, fetchStatus: t[n] } : void 0
          })
          return (0, Se.Z)(r, function (e) {
            return e.fetchStatus
          })
        }),
        Ee = (0, ve.P1)(Ze, function (e) {
          var t
          return (null !== (t = e[Ie.ZP.FAILED]) && void 0 !== t ? t : []).map(function (e) {
            return e.id
          })
        }),
        Re = (0, ve.P1)(Ze, O.ZP.selectErrors, function (e, t) {
          var r,
            n,
            a,
            o = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : [],
            i = null !== (n = e[Ie.ZP.LOADED]) && void 0 !== n ? n : [],
            s = null !== (a = e[Ie.ZP.LOADING]) && void 0 !== a ? a : [],
            c = o.filter(function (e) {
              var r,
                n = e.id
              return !xe(null !== (r = t[n]) && void 0 !== r ? r : {})
            })
          return s.length > 0 ? Ie.ZP.LOADING : i.length > 0 ? Ie.ZP.LOADED : c.length > 0 ? Ie.ZP.FAILED : Ie.ZP.NONE
        }),
        ke = (0, ve.P1)(Ze, O.ZP.selectErrors, function (e, t) {
          var r,
            n = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : []
          return (0, w.Z)(n, function (e) {
            var r
            if (xe(null !== (r = t[e.id]) && void 0 !== r ? r : {})) return e.id
          })
        }),
        we = (0, ve.P1)(be.as, function (e) {
          return e.map(function (e) {
            return { keyword: { query: e.query }, savedSearchId: e.id_str, category: v.Hk.SavedSearch }
          })
        }),
        Fe = (0, ve.P1)(Ce.Ww, function (e) {
          return e.map(function (e) {
            return (0, n.Z)((0, n.Z)({}, e), {}, { category: v.Hk.RecentSearch })
          })
        })
      var Te = (0, L.Z)()
        .propsFromState(function () {
          return {
            isRecentSearchDataLoaded: Ce.H$,
            recentSearches: Fe,
            usersFetchStatus: Re,
            invalidRecentSearchUserIds: ke,
            failedRecentSearchUserIds: Ee,
            savedSearches: we,
          }
        })
        .adjustStateProps(function (e) {
          var t = e.failedRecentSearchUserIds,
            r = e.invalidRecentSearchUserIds,
            n = e.isRecentSearchDataLoaded,
            a = e.recentSearches,
            o = e.savedSearches,
            i = e.usersFetchStatus,
            s = !a.filter(function (e) {
              var t = e.user
              return t && r.indexOf(t.id) < 0
            }).length,
            c = i !== Ie.ZP.LOADING && n && s ? Ie.ZP.LOADED : i
          return {
            failedRecentSearchUserIds: t,
            invalidRecentSearchUserIds: r,
            recentSearches: a,
            fetchStatus: c,
            savedSearches: o,
          }
        })
        .propsFromActions(function () {
          return {
            clearAll: Ce.qF,
            createLocalApiErrorHandler: (0, _e.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
            deleteSavedSearch: be.k9,
            fetchRecentSearchesIfNeeded: Ce.OB,
            fetchSavedSearchesIfNeeded: be.l9,
            fetchUsersIfNeeded: O.ZP.fetchManyIfNeeded,
            fetchUsersPresenceIfNeeded: H.ZP.fetchManyIfNeeded,
            removeQuery: Ce.hj,
          }
        })
        .withAnalytics({ element: 'typeahead' })
      var De = r(950617),
        Ae = r(785693),
        Pe = p().a2c1b222,
        Le = { headline: p().f45c4250, text: p().caae4dda, confirmButtonLabel: p().dbd5d400 },
        He = p().a8d68f62,
        Oe = p().c6530778,
        Be = p().e047b8fa,
        ze = ['event', 'keyword', 'topic', 'user'],
        Ue = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, c.Z)(r)
          function r(e, a) {
            var i
            return (
              (0, o.Z)(this, r),
              ((i = t.call(this, e, a))._getRecentSearchItems = function () {
                var e = i.props,
                  t = e.failedRecentSearchUserIds,
                  r = e.recentSearches.filter(function (e) {
                    return e.user && ze.includes('user')
                      ? t.indexOf(e.user.id) < 0
                      : Object.keys(e).some(function (e) {
                          return ze.includes(e)
                        })
                  })
                return r.length > 15 ? r.slice(0, 15) : r
              }),
              (i._render = function () {
                var e = i.props,
                  t = e.domId,
                  r = e.savedSearches,
                  n = 0 === i._getNumOfSearchItems(),
                  a = i._getRecentSearchItems()
                return n
                  ? l.createElement(
                      u.Z,
                      { style: Me.emptyState, testID: Ae.Z.typeaheadEmptySearch },
                      l.createElement(E.ZP, { align: 'center', color: 'gray700' }, Pe),
                    )
                  : l.createElement(
                      u.Z,
                      { accessibilityRole: 'listbox', nativeID: t },
                      a.length > 0
                        ? l.createElement(
                            l.Fragment,
                            null,
                            l.createElement(
                              u.Z,
                              { style: Me.header, testID: Ae.Z.typeaheadRecentSearchesHeader },
                              l.createElement(E.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, He),
                              l.createElement(
                                R.ZP,
                                {
                                  onBlur: i._handleClearAllBlur,
                                  onFocus: i._handleClearAllFocus,
                                  onPress: i._handleClearAllClick,
                                  ref: i._setClearAllButtonRef,
                                  size: 'xSmall',
                                  type: 'brandText',
                                },
                                Be,
                              ),
                            ),
                            a.map(function (e, t) {
                              return i._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      r.length > 0
                        ? l.createElement(
                            l.Fragment,
                            null,
                            l.createElement(
                              u.Z,
                              {
                                accessibilityHidden: !0,
                                style: [Me.header, Me.borderTop],
                                testID: Ae.Z.typeaheadSavedSearchesHeader,
                              },
                              l.createElement(E.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Oe),
                            ),
                            i._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              (i._renderRecentSearchItem = function (e, t) {
                var r = i.props.ariaDescendantId,
                  n = i.state.focusIndex === t
                return l.createElement(ye, {
                  domId: n ? r : void 0,
                  index: t,
                  item: e,
                  key: i._chooseKeyType(e, t),
                  onItemClick: i._handleOnItemClick,
                  onRemoveQuery: i._handleRemoveQuery,
                  ref: n ? i._setFocusedItemRef : void 0,
                  testID: Ae.Z.typeaheadRecentSearchesItem,
                })
              }),
              (i._chooseKeyType = function (e, t) {
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
              (i._renderSavedSearches = function () {
                var e = i.props,
                  t = e.ariaDescendantId,
                  r = e.savedSearches,
                  n = i.state.focusIndex,
                  a = i._getRecentSearchItems(),
                  o = (0, x.Z)(r)
                return (
                  o.reverse(),
                  l.createElement(
                    u.Z,
                    { testID: Ae.Z.typeaheadSavedSearchesContainer },
                    o.map(function (e, r) {
                      var o = n === r + a.length
                      return l.createElement(ye, {
                        domId: o ? t : void 0,
                        index: r,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: i._handleOnItemClick,
                        onRemoveQuery: i._handleRemoveQuery,
                        ref: o ? i._setFocusedItemRef : void 0,
                        testID: Ae.Z.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              (i._getNumOfSearchItems = function () {
                var e = i.props.savedSearches,
                  t = i._getRecentSearchItems()
                return e.length + t.length
              }),
              (i._handleUsersRetry = function () {
                i._fetchUsersDetailsIfNeeded()
              }),
              (i._fetchUsersDetailsIfNeeded = function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchUsersIfNeeded,
                  n = e.fetchUsersPresenceIfNeeded,
                  a = e.invalidRecentSearchUserIds,
                  o = e.recentSearches,
                  s = i.context,
                  c = s.featureSwitches,
                  l = s.viewerUserId,
                  u = (function (e, t) {
                    return (0, w.Z)(e, function (e) {
                      var r,
                        n = null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id
                      if (n && t.indexOf(n) < 0) return n
                    })
                  })(o, a)
                r(u)['catch'](t({})),
                  l && c.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && n(u)['catch'](t({}))
              }),
              (i._handleRemoveQuery = function (e, t) {
                var r = i.props,
                  n = r.analytics,
                  a = r.removeQuery
                switch (e.category) {
                  case v.Hk.RecentSearch:
                    var o = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    a(o), i._resetFocus()
                    var s = y.Z.forRecentSearchResult(o, t),
                      c = i._handleRemoveAction(e)
                    s && n.scribe({ action: c, data: { items: [s] } })
                    break
                  case v.Hk.SavedSearch:
                    i.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              (i._handleRemoveAction = function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              (i._handleClearAllBlur = function () {
                i.setState({ clearAllButtonHasFocus: !1 })
              }),
              (i._handleClearAllFocus = function () {
                i.setState({ clearAllButtonHasFocus: !0 })
              }),
              (i._handleClearAllClick = function () {
                i.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              (i._handleOnClearAllConfirm = function () {
                var e = i.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), i.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (i._handleOnClearAllCancel = function () {
                i.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (i._handleOnDeleteSavedSearchConfirm = function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.deleteSavedSearch,
                  n = e.savedSearches,
                  a = i.state.savedSearchIdToDelete,
                  o = n.findIndex(function (e) {
                    return e.savedSearchId === a
                  }),
                  s = n[o]
                if (a) {
                  r(a)
                  var c = s && y.Z.forSavedSearchResult(s.keyword.query, o)
                  c && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [c] } })
                }
                i.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (i._handleOnDeleteSavedSearchCancel = function () {
                i.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (i._handleOnItemClick = function (e, t) {
                var r = i.props,
                  n = r.onDismiss
                ;(0, r.onItemClick)(e, t), i._scribeClick(e, t), n && n()
              }),
              (i._scribeRecentSearchImpression = function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.recentSearches
                if (r && r.length) {
                  var n = (0, w.Z)(r, function (e, t) {
                    return y.Z.forRecentSearchResult(e, t)
                  })
                  t.scribe({ action: 'impression', data: { items: n } })
                }
              }),
              (i._scribeSavedSearchImpression = function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.savedSearches
                if (r && r.length) {
                  var n = (0, w.Z)(r, function (e, t) {
                    return y.Z.forSavedSearchResult(e.keyword.query, t)
                  })
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: n } })
                }
              }),
              (i._scribeClick = function (e, t) {
                var r = i.props.analytics
                switch (e.category) {
                  case v.Hk.SavedSearch:
                    var a = y.Z.forSavedSearchResult(e.query, t)
                    r.scribe({ element: 'typeahead', action: 'click', data: { targets: [a] } })
                    break
                  case v.Hk.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === v.g2.User
                          ? { user: { type: v.g2.User, id: e.query } }
                          : e.recentSearchType === v.g2.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: (0, n.Z)((0, n.Z)({}, e.queryMetadata), {}, { type: v.g2.Event, id: e.query }) }
                          : e.recentSearchType === v.g2.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: (0, n.Z)((0, n.Z)({}, e.queryMetadata), {}, { type: v.g2.Topic, id: e.query }) }
                          : { keyword: { type: v.g2.Keyword, query: e.query } })
                    var s = o && y.Z.forRecentSearchResult(o, t)
                    s && r.scribe({ action: 'click', data: { targets: [s] } })
                }
              }),
              (i._setClearAllButtonRef = function (e) {
                i._clearAllButtonRef = e
              }),
              (i._setFocusedItemRef = function (e) {
                ;(i._focusedItemRef = e),
                  e &&
                    i._shouldScrollToFocusedItem &&
                    ((0, T.up)(i._getScrollParent(), i._getFocusedItem()), (i._shouldScrollToFocusedItem = !1))
              }),
              (i.hasFocusedItem = function () {
                return i._getNumOfSearchItems() > 0
              }),
              (i.deleteFocusedItem = function () {
                if (i.hasFocusedItem()) {
                  var e,
                    t =
                      null === (e = i._focusedItemRef) || void 0 === e || null === (e = e.props) || void 0 === e
                        ? void 0
                        : e.item
                  if (t) return i._handleRemoveQuery(t, i.state.focusIndex), !0
                }
                return !1
              }),
              (i.selectFocusedItem = function () {
                if (i.hasFocusedItem()) {
                  var e = i._focusedItemRef && i._focusedItemRef.searchItemData
                  e && i._handleOnItemClick(e, i.state.focusIndex)
                }
              }),
              (i._setFocusIndex = function (e, t) {
                var r = i.props.onItemFocusChanged
                ;(i._shouldScrollToFocusedItem = t), i.setState({ focusIndex: e }), r && r()
              }),
              (i._resetFocus = function () {
                i._setFocusIndex(-1)
              }),
              (i.focusNext = function () {
                var e = i.state.focusIndex,
                  t = i._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e + 1 >= t ? 0 : e + 1
                  i._setFocusIndex(r, !0)
                }
              }),
              (i.focusPrevious = function () {
                var e = i.state.focusIndex,
                  t = i._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e - 1 < 0 ? t - 1 : e - 1
                  i._setFocusIndex(r, !0)
                }
              }),
              (i.navigateNext = function () {
                if (i._clearAllButtonRef && !i.state.clearAllButtonHasFocus) return i._clearAllButtonRef
              }),
              (i.navigatePrevious = function () {}),
              (i.state = {
                clearAllButtonHasFocus: !1,
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
              }),
              i
            )
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    r = e.fetchRecentSearchesIfNeeded,
                    n = e.fetchSavedSearchesIfNeeded,
                    a = e.recentSearches,
                    o = e.savedSearches
                  r(),
                    n()['catch'](t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((a && a.length) || (o && o.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
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
                value: function value() {
                  var e = this.props,
                    t = e.fetchStatus,
                    r = e.style,
                    n = this.state,
                    a = n.shouldShowClearAllConfirmationSheet,
                    o = n.shouldShowDeleteSavedSearchConfirmation
                  return l.createElement(
                    u.Z,
                    { style: r },
                    l.createElement(F.Z, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? l.createElement(k.Z, {
                          confirmButtonLabel: Le.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Le.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Ae.Z.deleteRecentSearchesDialog,
                          text: Le.text,
                        })
                      : null,
                    o
                      ? l.createElement(De.Z, {
                          onCancel: this._handleOnDeleteSavedSearchCancel,
                          onConfirm: this._handleOnDeleteSavedSearchConfirm,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_getScrollParent',
                value: function value() {
                  if (!this._scrollParent) {
                    var e = (0, T.rP)(Z.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function value() {
                  var e = this._focusedItemRef && Z.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            r
          )
        })(l.Component)
      Ue.contextType = C.rC
      var Me = d.Z.create(function (e) {
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
      })
      var Ne = Te.forwardRef(Ue)
      var qe = (0, L.Z)()
        .propsFromActions(function () {
          return { addQuery: Ce.DI }
        })
        .withAnalytics({ component: 'search_box' })
      var Ve = r(196234),
        je = r(702847),
        Ke = function Ke(e, t) {
          return O.ZP.select(e, t.userId)
        }
      var Qe = function Qe(e) {
        var t = e.user,
          r = e.userId,
          n = l.useState(!1),
          a = (0, Ve.Z)(n, 2),
          o = a[0],
          i = a[1],
          s = l.useContext(C.rC).featureSwitches.isTrue('follow_nudge_search_enabled')
        return (
          l.useEffect(
            function () {
              s && t && !t.following && i(!0)
            },
            [t, s],
          ),
          o ? l.createElement(je.C, { isFollowNudge: !0, showRelationshipChangeConfirmation: !0, userId: r }) : null
        )
      }
      var We = (0, L.Z)().propsFromState(function () {
          return { user: Ke }
        })(l.memo(Qe)),
        Ge = 'SearchBox_Search_Input'
      var $e = p().a9ae1e78,
        Ye = p().hbc99b03,
        Je = /^(\w+)$/,
        Xe = [S.my.Events, S.my.Users, S.my.Topics, S.my.Lists],
        et = function et(e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        tt = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, c.Z)(r)
          function r(e, i) {
            var s, c
            return (
              (0, o.Z)(this, r),
              ((c = t.call(this, e, i))._renderSearchBoxEmptyState = function (e) {
                return l.createElement(Ne, (0, a.Z)({}, e, { onItemClick: c._handleSearchItemClick }))
              }),
              (c._renderSearchUserDecoration = function (e) {
                e.user
                var t = e.userId,
                  r = c.context.viewerUserId
                return r && t !== r ? l.createElement(We, { userId: t }) : null
              }),
              (c._handleSearchItemClick = function (e) {
                var t = e.category,
                  r = e.link,
                  a = e.query,
                  o = e.queryMetadata,
                  i = e.recentSearchType,
                  s = c.props.addQuery
                t === v.Hk.SavedSearch
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !1, src: g.Z.SavedSearchClick })
                  : i === v.g2.Keyword
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: g.Z.RecentSearchClick })
                  : i === v.g2.Event
                  ? (c._routeTransition({ pathname: '/i/events/'.concat(a) }),
                    o && o.title && s({ event: (0, n.Z)((0, n.Z)({}, o), {}, { id: a, type: v.g2.Event }) }))
                  : i === v.g2.Topic
                  ? (c._routeTransition({ pathname: '/i/topics/'.concat(a) }),
                    o && o.name && s({ topic: (0, n.Z)((0, n.Z)({}, o), {}, { id: a, type: v.g2.Topic }) }))
                  : r &&
                    (c._routeTransition({ pathname: '/'.concat(r), userId: a }),
                    s({ user: { id: a, type: v.g2.User } }))
              }),
              (c._handleSearchShortcut = function (e) {
                var t = c._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              (c._getUserExactMatch = function (e) {
                e.hasResults
                var t = e.isLoaded,
                  r = e.query,
                  n = et(r)
                if (t && n.match(Je))
                  return {
                    id: ''.concat(r, '_no_result_user'),
                    type: S.El.NoResult,
                    data: { text: Ye({ screenName: n }), type: 'user' },
                  }
              }),
              (c._handleOnDismiss = function () {
                var e = c.props.history,
                  t = e.location,
                  r = t.state || {}
                if (r.searchFocused) {
                  var a = (0, n.Z)(
                    (0, n.Z)({}, t),
                    {},
                    { state: (0, n.Z)((0, n.Z)({}, r), {}, { lockScroll: !1, searchFocused: !1 }) },
                  )
                  e.replace(a)
                }
              }),
              (c._handleOnFocus = function () {
                var e = c.props,
                  t = e.analytics,
                  r = e.history,
                  a = r.location,
                  o = a.state || {}
                if (!o.searchFocused) {
                  var i = (0, n.Z)(
                    (0, n.Z)({}, a),
                    {},
                    { state: (0, n.Z)((0, n.Z)({}, o), {}, { searchFocused: !0, lockScroll: !0 }) },
                  )
                  t.scribe({ action: 'focus_field' }), r.push(i)
                }
              }),
              (c._handleChange = function (e) {
                c.setState({ query: e })
              }),
              (c._handleTypeaheadSubmit = function () {
                var e = c.state,
                  t = e.items,
                  r = e.query,
                  n = c.props.analytics
                ;/^\s*$/.test(r) ||
                  (n.scribe({
                    action: 'search',
                    data: { items: y.Z.forTypeaheadResults(t), search_details: { query: r } },
                  }),
                  c._submitQuery({ query: r, shouldAddToRecentSearch: !0 }))
              }),
              (c._handleItemClick = function (e, t) {
                var r = c.props.addQuery,
                  n = c.state.query
                switch (e.type) {
                  case S.El.Event:
                    e.data && e.data.url
                      ? c._routeTransition({ pathname: m.ZP.parseInternalUrl(e.data.url) })
                      : c._submitQuery({ query: e.data.topic, src: g.Z.TypeaheadClick })
                    break
                  case S.El.Hashtag:
                  case S.El.Topic:
                    c._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: g.Z.TypeaheadClick })
                    break
                  case S.El.List:
                    c._routeTransition({ pathname: '/i/lists/'.concat(e.id) })
                    break
                  case S.El.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? c._routeTransition({ pathname: '/'.concat(et(n)) })
                      : 'topic' === a &&
                        c._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: g.Z.TypeaheadClick })
                    break
                  case S.El.User:
                    if (e.data.id_str) r({ user: { id: e.data.id_str, type: v.g2.User } })
                    c._routeTransition({ pathname: '/'.concat(e.data.screen_name), userId: e.data.id_str })
                }
              }),
              (c._handleItemsChanged = function (e) {
                c.setState({ items: e })
              }),
              (c._routeTransition = function (e) {
                var t = e.params,
                  r = e.pathname,
                  a = e.query,
                  o = e.src,
                  i = e.userId,
                  s = c.props,
                  l = s.history,
                  u = s.location,
                  d = (0, n.Z)(
                    (0, n.Z)({}, u),
                    {},
                    {
                      pathname: r,
                      search: '',
                      query: t || (a ? { q: a, src: o } : {}),
                      state: (0, n.Z)(
                        (0, n.Z)({}, u.state),
                        {},
                        { searchFocused: !1, lockScroll: !1 },
                        i ? { userId: i } : {},
                      ),
                    },
                  )
                l.replace(d)
              }),
              (c._submitQuery = function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  n = void 0 !== r && r,
                  a = e.src,
                  o = void 0 === a ? g.Z.Typed : a,
                  i = c.props,
                  s = i.addQuery,
                  l = i.mode,
                  u = i.onSubmit,
                  d = i.searchFilters,
                  h = i.searchRoute
                ;(u && u(t, o, c.state.lastSubmittedQuery === t), n) && s({ keyword: { query: t, type: v.g2.Keyword } })
                var p = (0, v.F_)({ query: t, querySrc: o, mode: l, searchFilters: d })
                c._routeTransition({ pathname: h, params: p, src: o }), c.setState({ lastSubmittedQuery: t })
              }),
              (c._setInputRef = function (e) {
                c._inputRef = e
              }),
              (c.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: (0, f.BX)(null === (s = e.location.query) || void 0 === s ? void 0 : s.q),
              }),
              c
            )
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'componentDidMount',
                value: function value() {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = (0, b.UJ)(this._handleSearchShortcut))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._unregisterSearchShortcutHandler && this._unregisterSearchShortcutHandler()
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.forceVdlDisable,
                    r = e.isCompact,
                    n = e.isOnHomepage,
                    a = e.location,
                    o = e.placeholder,
                    i = this.state.query,
                    s = (a.state || {}).searchPrefill,
                    c = this.props.initialValue || s,
                    d = !!a.state && !!a.state.searchFocused
                  return l.createElement(
                    u.Z,
                    { style: rt.root },
                    l.createElement(I['default'], {
                      filter: Xe,
                      forceVdlDisable: t,
                      getTopicExactMatch: i ? S.P0 : void 0,
                      getUserExactMatch: i ? this._getUserExactMatch : void 0,
                      initialValue: c,
                      inputStyle: rt.input,
                      isCompact: r,
                      isOnHomepage: n,
                      onDismiss: this._handleOnDismiss,
                      onFocus: this._handleOnFocus,
                      onItemClick: this._handleItemClick,
                      onItemsChanged: this._handleItemsChanged,
                      onQueryChange: this._handleChange,
                      onSubmit: this._handleTypeaheadSubmit,
                      placeholder: o,
                      ref: this._setInputRef,
                      renderEmptyState: this._renderSearchBoxEmptyState,
                      renderUserDecoration: this._renderSearchUserDecoration,
                      rounded: !0,
                      shouldAutoFocus: d,
                      shouldClearOnSelect: !0,
                      shouldDeferPrefetch: !0,
                      source: S._4.SearchBox,
                      testID: Ge,
                      withFixedPositioning: !0,
                      withFocusStyling: !0,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(l.Component)
      ;(tt.defaultProps = { initialValue: '', placeholder: $e, searchRoute: '/search', forceVdlDisable: !0 }),
        (tt.contextType = C.rC)
      var rt = d.Z.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      var nt = (0, _.ZP)(qe(tt))
    },
    913488: function _(e, t, r) {
      r.d(t, {
        k9: function k9() {
          return C
        },
        l9: function l9() {
          return b
        },
        GL: function GL() {
          return _
        },
        as: function as() {
          return g
        },
      })
      var n = r(256666),
        a = r(968079),
        o = r(133028),
        i = r(86522)
      r(22144), r(818178), r(995342), r(358188), r(73439)
      var s = function s(e) {
        var t = e.apiClient
        e.featureSwitches
        return {
          fetch: function fetch() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            return t.get('saved_searches/list', e, r)
          },
          create: function create(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            return t.post('saved_searches/create', e, {}, r)
          },
          destroy: function destroy(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            return t.post('saved_searches/destroy/'.concat(e.id), e, {}, r)
          },
        }
      }
      var c = r(472599),
        l = r(526853),
        u = r(753392),
        d = r(823803),
        h = r(990742),
        p = 'savedSearches',
        f = { fetchStatus: d.ZP.NONE, savedSearches: [] },
        m = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        y = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        v = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t) return e
        switch (t.type) {
          case m.SUCCESS:
            var r = t.payload,
              n = Array.isArray(r)
            return (
              n ||
                (0, c.ZP)('Saved search results are not type array', {
                  extra: { savedSearchResultsType: (0, i.Z)(r) },
                }),
              (0, o.Z)((0, o.Z)({}, e), {}, { fetchStatus: d.ZP.LOADED, savedSearches: n && r ? r : [] })
            )
          case m.FAILURE:
            return (0, o.Z)((0, o.Z)({}, e), {}, { fetchStatus: d.ZP.FAILED })
          case y.SUCCESS:
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              { savedSearches: t.payload ? [].concat((0, a.Z)(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case v.SUCCESS:
            return t.payload
              ? (0, o.Z)(
                  (0, o.Z)({}, e),
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
      l.Z.register((0, n.Z)({}, p, S))
      var g = function g(e) {
          return e[p].savedSearches
        },
        _ = function _(e) {
          return function (t, r, n) {
            var a = n.api
            return (0, u._O)(t, { request: a.withEndpoint(s).create, params: { query: e } })({
              actionTypes: y,
              context: 'SAVE_SEARCH',
            })
          }
        },
        C = function C(e) {
          return function (t, r, n) {
            var a = n.api
            return (0, u._O)(t, { request: a.withEndpoint(s).destroy, params: { id: e } })({
              actionTypes: v,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        b = function b() {
          return function (e, t, r) {
            r.api
            var n = t()
            if (!(0, h.Qb)(n)) return Promise.resolve()
            var a =
              (function (e) {
                return e[p].fetchStatus
              })(n) === d.ZP.LOADED
            return a
              ? Promise.resolve()
              : e(function (e, t, r) {
                  var n = r.api
                  return (0, u._O)(e, { request: n.withEndpoint(s).fetch, params: {} })({
                    actionTypes: m,
                    context: 'FETCH_SAVED_SEARCHES',
                  })
                })
          }
        }
    },
    935742: function _(e, t, r) {
      r.d(t, {
        vj: function vj() {
          return l
        },
        ZP: function ZP() {
          return m
        },
        cY: function cY() {
          return f
        },
      })
      var n = r(133028),
        a =
          (r(315735),
          r(358188),
          r(693244),
          r(428673),
          r(906886),
          r(438695),
          r(201939),
          r(136728),
          r(99805),
          r(202784),
          r(416781),
          r(681804),
          r(543450),
          r(649461))
      var o = function o(e) {
        var t = e.apiClient
        e.featureSwitches
        return {
          fetchPresence: function fetchPresence(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = e.userIds,
              i = { user_ids: o.join(','), only_spaces: !0 }
            return t.getUnversioned('/fleets/v1/avatar_content', i, r).then(function (e) {
              var t = e.users,
                r = e.refresh_delay_secs,
                i = void 0 === r ? l : r,
                s = 0 === i ? l : i,
                c = Date.now() + 1e3 * s,
                u = Object.fromEntries(
                  o.map(function (e) {
                    return [e, { expiry: c, spaces: void 0, refresh_delay_secs: s }]
                  }),
                ),
                d =
                  t &&
                  (0, a.Z)(t, function (e, t) {
                    return (0, n.Z)((0, n.Z)({}, e), {}, { expiry: c, refresh_delay_secs: s })
                  })
              return (d || u) && { entities: { userPresence: (0, n.Z)((0, n.Z)({}, u), d) } }
            })
          },
        }
      }
      r(492028)
      var i = r(894668),
        s = r(829122),
        c = r(791191),
        l = 30,
        u = (0, s.ZP)({
          namespace: 'userPresence',
          entityIsComplete: function entityIsComplete(e) {
            return e.expiry > Date.now()
          },
        }),
        d = (0, s.tb)(u, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.withEndpoint(o).fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        h = (0, s.Nr)(u, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.withEndpoint(o).fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        p = (0, n.Z)((0, n.Z)((0, n.Z)({}, u), d), h),
        f = function f(e, t) {
          var r = p.select(e, t),
            n = r ? r.spaces : void 0
          return (
            n &&
            n.live_content.audiospace && {
              presenceRingType: 'audiospace',
              link: {
                pathname: (0, i.e)(n.live_content.audiospace.broadcast_id),
                state: { origin: 'audiospace_ring' },
              },
              spaceId: n.live_content.audiospace.broadcast_id,
            }
          )
        }
      var m = c.Z.register(p)
    },
    322150: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return R
        },
      })
      var n = r(807896),
        a = r(459740),
        o = r(709249),
        i = r(887371),
        s = r(545754),
        c = r(486906),
        l = (r(818178), r(108532), r(202784)),
        u = r(614983),
        d = r.n(u),
        h = r(325686),
        p = r(645184),
        f = r.n(p),
        m = r(928045),
        y = r(445877),
        v = r(16587),
        S = r(773036),
        g = r(436934),
        _ = r(229496),
        C = r(973186),
        b = r(632070)
      var I = 'clearButton'
      var x = [
          'Icon',
          'appTextSize',
          'closeButton',
          'contentAbove',
          'contentBelow',
          'emojiPickerButton',
          'focusOnClear',
          'handleReturn',
          'iconStyle',
          'inputStyle',
          'invalid',
          'isCompact',
          'keyBindingFn',
          'keyCommandHandlers',
          'leftAligned',
          'leftContent',
          'lexicalInputContext',
          'onLayout',
          'onSubmitEditing',
          'placeholderTextColor',
          'richTextInputContext',
          'style',
          'styleType',
          'withClearButton',
          'withFormatInline',
        ],
        Z = 'pill',
        E = f().ae7f7656,
        R = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(a)))._textFieldAPI = l.createRef()),
              (e.state = { hasContent: !1, isFocused: !1 }),
              (e.getInvisibleBorderStyle = function () {
                var t = e.props.invalid,
                  r = e.state.isFocused
                return [!t && !r && w.transparent]
              }),
              (e.getContainerStyle = function () {
                var t = e.props,
                  r = t.editable,
                  n = t.invalid,
                  a = t.multiline,
                  o = t.styleType,
                  i = e.state.isFocused
                switch (o) {
                  case 'legacyPill':
                    return [
                      !n && !i && w.transparent,
                      !i && P.legacyFadedGrayColor,
                      !a && k.infinite,
                      P.root,
                      n && w.invalid,
                      !n && i && w.legacyFocused,
                      i && P.legacyPilltransparentColor,
                      a && k.legacyRound,
                      !r && P.legacyDisabled,
                    ]
                  case Z:
                    return [
                      !n && !i && w.unfocused,
                      !i && P.fadedGrayColor,
                      !a && k.infinite,
                      P.root,
                      P.pillRoot,
                      n && w.invalid,
                      !n && i && w.focused,
                      i && P.backgroundColor,
                      a && k.round,
                      !r && P.disabled,
                    ]
                  default:
                    return [w.none, P.root, P.selectionBackground]
                }
              }),
              (e.getUnfocusedStyles = function () {
                var t = e.props.Icon,
                  r = e.state.isFocused
                return [F.placeholderRoot, t && F.iconPadding, r && F.focused, !e._isInputEmpty() && F.textColor]
              }),
              (e._getTextInputStyle = (0, v.Z)(function (t) {
                return [e._getInputRootStyle(), t]
              })),
              (e._getInputRootStyle = function () {
                return e.props.styleType !== Z
                  ? [F.root, e.props.isCompact && F.compact]
                  : [
                      F.pillRoot,
                      e.props.Icon && F.iconPadding,
                      e.state.isFocused && F.focused,
                      !e.props.multiline && F.safariFirefoxNoMargin,
                    ]
              }),
              (e._handleLexicalChange = function (t) {
                var r,
                  n,
                  a = e.state.isFocused
                e.setState({ hasContent: t.length > 0 }),
                  a || e.setState({ isFocused: !0 }),
                  e.props.lexicalInputContext && (null === (r = (n = e.props).onChange) || void 0 === r || r.call(n, t))
              }),
              (e._handleBlur = function () {
                var t = e.props.onBlur
                e.setState({ isFocused: !1 }), t && t()
              }),
              (e._handleClear = function (t) {
                var r
                e.props.focusOnClear && e.focus(), null === (r = e._textFieldAPI.current) || void 0 === r || r.clear()
              }),
              (e._handlePlainChange = function (t) {
                var r,
                  n,
                  a = e.state.isFocused
                e.setState({ hasContent: e.getValue().length > 0 }),
                  e.props.richTextInputContext ||
                    e.props.lexicalInputContext ||
                    (a || e.setState({ isFocused: !0 }),
                    null === (r = (n = e.props).onChange) || void 0 === r || r.call(n, t))
              }),
              (e._handleRichChange = function (t) {
                var r,
                  n,
                  a = e.state.isFocused
                e.setState({ hasContent: e.getValue().length > 0 }),
                  e.props.richTextInputContext &&
                    (a || e.setState({ isFocused: !0 }),
                    null === (r = (n = e.props).onChange) || void 0 === r || r.call(n, t))
              }),
              (e._handleFocus = function () {
                var t = e.props.onFocus
                e.setState({ isFocused: !0 }), t && t()
              }),
              (e._handleKeyPress = function (t) {
                var r = e.props,
                  n = r.multiline,
                  a = r.onKeyPress,
                  o = r.onSubmitEditing
                a && a(t),
                  t.isDefaultPrevented() || 'Enter' !== t.key || t.shiftKey || n || !o || (t.preventDefault(), o(t))
              }),
              (e._handleKeyDown = function (t) {
                var r = e.props.onKeyDown
                r && r(t)
              }),
              (e._handleKeyUp = function (t) {
                var r = e.props.onKeyUp
                r && r(t)
              }),
              e
            )
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t = this.props,
                    r = t.appTextSize,
                    n = t.contentAbove,
                    a = t.contentBelow,
                    o = t.emojiPickerButton,
                    i = t.leftAligned,
                    s = t.leftContent,
                    c = t.lexicalInputContext,
                    u = t.onLayout,
                    d = t.richTextInputContext,
                    p = t.style,
                    f = t.styleType,
                    m = t.testID,
                    y = t.withClearButton
                  return (
                    (e = c ? this._renderLexicalInput() : d ? this._renderRichTextInput() : this._renderTextInput()),
                    l.createElement(
                      h.Z,
                      {
                        onBlur: this._handleBlur,
                        onFocus: this._handleFocus,
                        onLayout: u,
                        style: [this.getContainerStyle(), p],
                      },
                      l.createElement(
                        h.Z,
                        { style: f === Z && this.getInvisibleBorderStyle() },
                        n,
                        l.createElement(
                          h.Z,
                          { style: P.textInputBox },
                          i ? s : null,
                          l.createElement(
                            h.Z,
                            { accessibilityRole: 'label', style: P.textInput, testID: m && ''.concat(m, '_label') },
                            this._renderIcon(),
                            l.createElement(
                              h.Z,
                              { style: [P.fitText, P.appTextLeft] },
                              l.createElement(g.ZP, { size: r, style: P.appText }, e),
                            ),
                            l.createElement(
                              h.Z,
                              { style: [A.root, !!o && A.withEmojiPicker] },
                              this._renderCloseButton(),
                              this._renderEmojiPicker(),
                              y && this._renderClearButton(),
                            ),
                          ),
                        ),
                        a,
                      ),
                    )
                  )
                },
              },
              {
                key: '_isInputEmpty',
                value: function value() {
                  return 0 === this.getValue().length
                },
              },
              {
                key: '_renderIcon',
                value: function value() {
                  var e = this.props,
                    t = e.Icon,
                    r = e.iconStyle,
                    n = e.styleType,
                    a = this.state.isFocused,
                    o = [T.legacyRoot, a && T.legacyFocused, r],
                    i = [T.root, a && T.focused, r]
                  return t
                    ? l.createElement(h.Z, { style: A.leftIcon }, l.createElement(t, { style: n === Z ? i : o }))
                    : null
                },
              },
              {
                key: '_renderTextInput',
                value: function value() {
                  var e = this.props,
                    t =
                      (e.Icon,
                      e.appTextSize,
                      e.closeButton,
                      e.contentAbove,
                      e.contentBelow,
                      e.emojiPickerButton,
                      e.focusOnClear,
                      e.handleReturn,
                      e.iconStyle,
                      e.inputStyle),
                    r =
                      (e.invalid,
                      e.isCompact,
                      e.keyBindingFn,
                      e.keyCommandHandlers,
                      e.leftAligned,
                      e.leftContent,
                      e.lexicalInputContext,
                      e.onLayout,
                      e.onSubmitEditing,
                      e.placeholderTextColor),
                    o =
                      (e.richTextInputContext,
                      e.style,
                      e.styleType,
                      e.withClearButton,
                      e.withFormatInline,
                      (0, a.Z)(e, x))
                  return l.createElement(
                    l.Fragment,
                    null,
                    S.ZP.isEdgeLegacy()
                      ? l.createElement('style', null, 'input[type=text]::-ms-clear { display: none; }')
                      : null,
                    l.createElement(
                      b.Z,
                      (0, n.Z)({}, o, {
                        onBlur: this._handleBlur,
                        onChange: this._handlePlainChange,
                        onFocus: this._handleFocus,
                        onKeyDown: this._handleKeyDown,
                        onKeyPress: this._handleKeyPress,
                        onKeyUp: this._handleKeyUp,
                        placeholderTextColor: r || C.Z.theme.colors.gray700,
                        ref: this._textFieldAPI,
                        style: [this._getTextInputStyle(t), F.fullWidth],
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderRichTextInput',
                value: function value() {
                  var e = this.props.richTextInputContext
                  if ((d()(e, 'rich text input must have context'), !e.element || !e.editorState)) return null
                  var t = [F.root, F.rich, this.props.styleType === Z && F.richRoot]
                  return l.createElement(
                    h.Z,
                    { style: [F.richContainer, this.props.isCompact && F.compact, this.props.inputStyle] },
                    l.createElement(e.element, {
                      allowExtendedPasteStyles: e.allowExtendedPasteStyles,
                      appTextSize: this.props.appTextSize,
                      ariaActiveDescendant: this.props.ariaActiveDescendant,
                      ariaAutocomplete: this.props.ariaAutocomplete,
                      ariaControls: this.props.ariaControls,
                      ariaLabel: this.props.ariaLabel,
                      autoFocus: this.props.autoFocus,
                      blockRenderMap: e.blockRenderMap,
                      blockRendererFn: e.blockRendererFn,
                      blockStyleFn: e.blockStyleFn,
                      dismissComposerCommandName: e.dismissComposerCommandName,
                      dragPlaceholder: e.dragPlaceholder,
                      editorState: e.editorState,
                      handleReturn: this.props.handleReturn,
                      keyBindingFn: this.props.keyBindingFn,
                      keyCommandHandlers: this.props.keyCommandHandlers,
                      maxNumberOfLines: this.props.maxNumberOfLines,
                      multiline: this.props.multiline,
                      numberOfLines: this.props.numberOfLines,
                      onBlur: this._handleBlur,
                      onChange: this._handleRichChange,
                      onFilesAdded: this.props.onFilesAdded,
                      onFocus: this._handleFocus,
                      onKeyDown: this._handleKeyDown,
                      onKeyPress: this._handleKeyPress,
                      onKeyUp: this._handleKeyUp,
                      placeholder: this.props.placeholder,
                      placeholderTextColor: this.props.placeholderTextColor || C.Z.theme.colors.gray700,
                      positionCursorAtBeginning: this.props.positionCursorAtBeginning,
                      positionCursorAtEnd: this.props.positionCursorAtEnd,
                      ref: this._textFieldAPI,
                      sendTweetCommandName: e.sendTweetCommandName,
                      spellCheck: this.props.spellCheck,
                      stripPastedStyles: e.stripPastedStyles,
                      style: t,
                      testID: this.props.testID,
                      withFormatInline: this.props.withFormatInline,
                      withMaxHeight: e.withMaxHeight,
                    }),
                  )
                },
              },
              {
                key: '_renderLexicalInput',
                value: function value() {
                  var e = this.props,
                    t = e.ariaActiveDescendant,
                    r = e.ariaAutocomplete,
                    n = e.ariaControls,
                    a = e.ariaLabel,
                    o = e.autoFocus,
                    i = e.inputStyle,
                    s = e.isCompact,
                    c = e.lexicalInputContext,
                    u = e.multiline,
                    d = e.onFilesAdded,
                    p = e.placeholder,
                    f = e.spellCheck,
                    m = e.testID,
                    y = c || {},
                    v = y.element,
                    S = y.withDebug,
                    g = v
                  return l.createElement(
                    h.Z,
                    { style: [F.richContainer, s && F.compact, i] },
                    l.createElement(g, {
                      ariaActiveDescendant: t,
                      ariaAutocomplete: r,
                      ariaControls: n,
                      ariaLabel: a,
                      autoFocus: o,
                      multiline: u,
                      onChange: this._handleLexicalChange,
                      onFilesAdded: d,
                      onFocus: this._handleFocus,
                      placeholder: p,
                      ref: this._textFieldAPI,
                      spellCheck: f,
                      testID: m,
                      withDebug: S,
                    }),
                  )
                },
              },
              {
                key: '_renderClearButton',
                value: function value() {
                  return this.getValue()
                    ? (this.props.styleType === Z
                        ? (e = l.createElement(m['default'], { style: D.icon }))
                        : ((t = 'brandFilled'), (e = l.createElement(y['default'], { style: D.legacyIcon }))),
                      l.createElement(_.ZP, {
                        accessibilityLabel: E,
                        focusable: !0,
                        icon: e,
                        onPress: this._handleClear,
                        size: 'smallCompact',
                        style: D.root,
                        testID: I,
                        type: t,
                      }))
                    : l.createElement(h.Z, null)
                  var e, t
                },
              },
              {
                key: '_renderEmojiPicker',
                value: function value() {
                  var e = this.props.emojiPickerButton
                  return e ? l.createElement(h.Z, null, e) : null
                },
              },
              {
                key: '_renderCloseButton',
                value: function value() {
                  var e = this.props.closeButton
                  return e ? l.createElement(h.Z, { style: A.closeButton }, e) : null
                },
              },
              {
                key: 'applyFinalValue',
                value: function value(e) {
                  var t = this
                  this.focus(),
                    window.requestAnimationFrame(function () {
                      t.blur(), e(t.getValue())
                    })
                },
              },
              {
                key: 'blur',
                value: function value() {
                  var e
                  null === (e = this._textFieldAPI.current) || void 0 === e || e.blur()
                },
              },
              {
                key: 'focus',
                value: function value() {
                  var e
                  null === (e = this._textFieldAPI.current) || void 0 === e || e.focus()
                },
              },
              {
                key: 'clear',
                value: function value() {
                  var e
                  null === (e = this._textFieldAPI.current) || void 0 === e || e.clear()
                },
              },
              {
                key: 'getValue',
                value: function value() {
                  var e,
                    t = this.props.value
                  return (null === (e = this._textFieldAPI.current) || void 0 === e ? void 0 : e.getValue()) || t || ''
                },
              },
              {
                key: 'getTextInputHeight',
                value: function value() {
                  var e,
                    t = this.props.richTextInputContext,
                    r = 2 * C.Z.theme.spacesPx.space12,
                    n = 2 * C.Z.theme.borderWidthsPx.small
                  return (
                    ((null === (e = this._textFieldAPI.current) || void 0 === e ? void 0 : e.getOffsetHeight()) || 0) +
                    (t ? r : 0) +
                    n
                  )
                },
              },
            ]),
            r
          )
        })(l.Component)
      ;(R.defaultProps = {
        appTextSize: 'body',
        autoComplete: 'on',
        styleType: Z,
        autoCorrect: !0,
        editable: !0,
        focusOnClear: !0,
        withClearButton: !1,
      }),
        (R.propTypes = {})
      var k = C.Z.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            legacyRound: { borderRadius: e.borderRadii.xLarge },
            round: { borderRadius: '20px' },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        w = C.Z.create(function (e) {
          return {
            transparent: { borderColor: e.colors.transparent, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            legacyFocused: { borderColor: e.colors.primary, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            invalid: { borderColor: e.colors.red500, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            none: { borderWidth: e.borderWidths.none },
            unfocused: { borderColor: e.colors.gray200, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            focused: { borderColor: e.colors.primary, borderStyle: 'solid', borderWidth: e.borderWidths.medium },
          }
        }),
        F = C.Z.create(function (e) {
          return {
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              outlineStyle: 'none',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              padding: e.spaces.space12,
              textAlign: 'inherit',
            },
            compact: { paddingVertical: e.spaces.space4 },
            safariFirefoxNoMargin: { marginTop: '0px', marginBottom: '0px', paddingTop: '0px', paddingBottom: '0px' },
            pillRoot: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              outlineStyle: 'none',
              fontFamily: 'inherit',
              fontSize: e.fontSizes.subtext1,
              minHeight: e.spaces.space40,
              paddingStart: e.spaces.space16,
              paddingEnd: e.spaces.space16,
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              lineHeight: e.lineHeights.subtext1,
              caretColor: e.colors.primary,
            },
            placeholderRoot: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              outlineStyle: 'none',
              fontSize: e.fontSizes.subtext1,
              minHeight: e.spaces.space40,
              paddingStart: e.spaces.space16,
              paddingEnd: e.spaces.space16,
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              lineHeight: e.lineHeights.subtext1,
              caretColor: e.colors.primary,
              color: e.colors.gray700,
            },
            textColor: { color: e.colors.text },
            focused: { paddingEnd: e.spaces.space4 },
            iconPadding: { paddingStart: e.spaces.space4 },
            richContainer: { width: '100%', padding: e.spaces.space12 },
            rich: { padding: 0 },
            richRoot: { fontSize: e.fontSizes.subtext1, caretColor: e.colors.primary },
            fullWidth: { width: '100%' },
          }
        }),
        T = C.Z.create(function (e) {
          return {
            legacyRoot: { color: e.colors.gray700, minWidth: e.spaces.space32, paddingStart: e.spaces.space12 },
            root: {
              boxSizing: 'content-box',
              color: e.colors.gray700,
              paddingStart: e.spaces.space12,
              height: e.spaces.space16,
              width: e.spaces.space16,
            },
            legacyFocused: { color: e.colors.primary },
            focused: { color: e.colors.gray700 },
          }
        }),
        D = C.Z.create(function (e) {
          return {
            root: { borderWidth: e.borderWidths.none, marginEnd: e.spaces.space12 },
            legacyIcon: { width: '10px', height: '10px', color: e.colors.cellBackground },
            icon: { color: e.colors.buttonBlack },
          }
        }),
        A = C.Z.create(function (e) {
          return {
            root: { display: 'flex', justifyContent: 'center' },
            withEmojiPicker: { display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' },
            closeButton: { flexGrow: 1 },
            leftIcon: { display: 'flex', justifyContent: 'center', cursor: 'default' },
          }
        }),
        P = C.Z.create(function (e) {
          return {
            root: { flexDirection: 'column', flexGrow: 1, flexShrink: 1, justifyContent: 'center' },
            pillRoot: { minHeight: e.spaces.space40 },
            legacyDisabled: { cursor: 'default', opacity: 0.8 },
            legacyFadedGrayColor: { backgroundColor: e.colors.gray50 },
            selectionBackground: { backgroundColor: e.colors.cellBackground },
            legacyPilltransparentColor: { backgroundColor: 'transparent' },
            textInputBox: { flexDirection: 'row', alignItems: 'center' },
            textInput: { flexDirection: 'row', cursor: 'text', flex: 1 },
            appText: { display: 'flex' },
            backgroundColor: { backgroundColor: e.colors.navigationBackground },
            appTextLeft: { flexGrow: 1 },
            placeholderView: { flexGrow: 1 },
            fitText: { flexShrink: 1 },
            fadedGrayColor: { backgroundColor: e.colors.navigationBackground },
            disabled: { cursor: 'default', opacity: 0.5 },
          }
        })
    },
    632070: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return T
        },
      })
      var n = r(968079),
        a = r(133028),
        o = r(709249),
        i = r(887371),
        s = r(545754),
        c = r(486906),
        l = r(807896),
        u =
          (r(818178),
          r(332501),
          r(543450),
          r(995342),
          r(358188),
          r(467321),
          r(334769),
          r(739529),
          r(231235),
          r(374083),
          r(326936),
          r(43105),
          r(202784)),
        d = r(614983),
        h = r.n(d),
        p = r(928316),
        f = r(231461),
        m = r(580753),
        y = r(981665),
        v = !!document.documentElement.currentStyle,
        S = {
          'min-height': '0',
          'max-height': 'none',
          height: '0',
          visibility: 'hidden',
          overflow: 'hidden',
          position: 'absolute',
          'z-index': '-1000',
          top: '0',
          right: '0',
        },
        g = [
          'letter-spacing',
          'line-height',
          'font-family',
          'font-weight',
          'font-size',
          'font-style',
          'tab-size',
          'text-rendering',
          'text-transform',
          'width',
          'text-indent',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'box-sizing',
        ],
        _ = {},
        C = document.createElement('textarea'),
        b = function b(e) {
          Object.keys(S).forEach(function (t) {
            e.style.setProperty(t, S[t], 'important')
          })
        }
      function I(e, t, r, n, a) {
        void 0 === r && (r = !1),
          void 0 === n && (n = null),
          void 0 === a && (a = null),
          null === C.parentNode && document.body.appendChild(C)
        var o = (function (e, t, r) {
          void 0 === r && (r = !1)
          if (r && _[t]) return _[t]
          var n = window.getComputedStyle(e)
          if (null === n) return null
          var a = g.reduce(function (e, t) {
              return (e[t] = n.getPropertyValue(t)), e
            }, {}),
            o = a['box-sizing']
          if ('' === o) return null
          v &&
            'border-box' === o &&
            (a.width =
              parseFloat(a.width) +
              parseFloat(n['border-right-width']) +
              parseFloat(n['border-left-width']) +
              parseFloat(n['padding-right']) +
              parseFloat(n['padding-left']) +
              'px')
          var i = parseFloat(a['padding-bottom']) + parseFloat(a['padding-top']),
            s = parseFloat(a['border-bottom-width']) + parseFloat(a['border-top-width']),
            c = { sizingStyle: a, paddingSize: i, borderSize: s, boxSizing: o }
          r && (_[t] = c)
          return c
        })(e, t, r)
        if (null === o) return null
        var i = o.paddingSize,
          s = o.borderSize,
          c = o.boxSizing,
          l = o.sizingStyle
        Object.keys(l).forEach(function (e) {
          C.style[e] = l[e]
        }),
          b(C),
          (C.value = e.value || e.placeholder || 'x')
        var u = -1 / 0,
          d = 1 / 0,
          h = C.scrollHeight
        'border-box' === c ? (h += s) : 'content-box' === c && (h -= i), (C.value = 'x')
        var p = C.scrollHeight - i,
          f = Math.floor(h / p)
        return (
          null !== n && ((u = p * n), 'border-box' === c && (u = u + i + s), (h = Math.max(u, h))),
          null !== a && ((d = p * a), 'border-box' === c && (d = d + i + s), (h = Math.min(d, h))),
          { height: h, minHeight: u, maxHeight: d, rowCount: Math.floor(h / p), valueRowCount: f }
        )
      }
      C.setAttribute('tab-index', '-1'), C.setAttribute('aria-hidden', 'true'), b(C)
      var x = function x() {},
        Z = 0,
        E = (function (e) {
          function t(t) {
            var r
            return (
              ((r = e.call(this, t) || this)._onRef = function (e) {
                r._ref = e
                var t = r.props.inputRef
                'function' != typeof t ? (t.current = e) : t(e)
              }),
              (r._onChange = function (e) {
                r._controlled || r._resizeComponent(), r.props.onChange(e, (0, m.Z)(r))
              }),
              (r._resizeComponent = function (e) {
                void 0 === e && (e = x)
                var t = I(r._ref, r._uid, r.props.useCacheForDOMMeasurements, r.props.minRows, r.props.maxRows)
                if (null !== t) {
                  var n = t.height,
                    a = t.minHeight,
                    o = t.maxHeight,
                    i = t.rowCount,
                    s = t.valueRowCount
                  ;(r.rowCount = i),
                    (r.valueRowCount = s),
                    r.state.height === n && r.state.minHeight === a && r.state.maxHeight === o
                      ? e()
                      : r.setState({ height: n, minHeight: a, maxHeight: o }, e)
                } else e()
              }),
              (r.state = { height: (t.style && t.style.height) || 0, minHeight: -1 / 0, maxHeight: 1 / 0 }),
              (r._uid = Z++),
              (r._controlled = void 0 !== t.value),
              (r._resizeLock = !1),
              r
            )
          }
          ;(0, y.Z)(t, e)
          var r = t.prototype
          return (
            (r.render = function () {
              var e = this.props,
                t =
                  (e.inputRef,
                  e.maxRows,
                  e.minRows,
                  e.onHeightChange,
                  e.useCacheForDOMMeasurements,
                  (0, f.Z)(e, ['inputRef', 'maxRows', 'minRows', 'onHeightChange', 'useCacheForDOMMeasurements']))
              return (
                (t.style = (0, l.Z)({}, t.style, { height: this.state.height })),
                Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height &&
                  (t.style.overflow = 'hidden'),
                (0, u.createElement)('textarea', (0, l.Z)({}, t, { onChange: this._onChange, ref: this._onRef }))
              )
            }),
            (r.componentDidMount = function () {
              var e = this
              this._resizeComponent(),
                (this._resizeListener = function () {
                  e._resizeLock ||
                    ((e._resizeLock = !0),
                    e._resizeComponent(function () {
                      e._resizeLock = !1
                    }))
                }),
                window.addEventListener('resize', this._resizeListener)
            }),
            (r.componentDidUpdate = function (e, t) {
              e !== this.props && this._resizeComponent(),
                this.state.height !== t.height && this.props.onHeightChange(this.state.height, this)
            }),
            (r.componentWillUnmount = function () {
              window.removeEventListener('resize', this._resizeListener),
                (function (e) {
                  delete _[e]
                })(this._uid)
            }),
            t
          )
        })(u.Component)
      E.defaultProps = { inputRef: x, onChange: x, onHeightChange: x, useCacheForDOMMeasurements: !1 }
      var R = E
      var k = r(940080),
        w = r(973186),
        F = ['text', 'search', 'url', 'tel', 'password']
      var T = u.forwardRef(function (e, t) {
        var r = e.onFocus,
          n = u.useCallback(
            function (e) {
              r && r()
            },
            [r],
          )
        return u.createElement(D, (0, l.Z)({}, e, { onFocus: n, ref: t }))
      })
      var D = (function (e) {
        ;(0, s.Z)(r, e)
        var t = (0, c.Z)(r)
        function r() {
          var e
          ;(0, o.Z)(this, r)
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
          return (
            ((e = t.call.apply(t, [this].concat(a)))._onPaste = function (t) {
              var r = e.props,
                n = r.onFilesAdded,
                a = r.onPaste
              if (n) {
                var o = (t.nativeEvent && t.nativeEvent.clipboardData) || {},
                  i = []
                if (o.items)
                  i = Array.prototype.slice
                    .call(o.items)
                    .filter(function (e) {
                      return 'file' === e.kind
                    })
                    .map(function (e) {
                      return e.getAsFile()
                    })
                else o.files && (i = Array.prototype.slice.call(o.files))
                if (i.length > 0) return t.preventDefault(), n(i)
              }
              return a && a(t)
            }),
            (e._setTextInputRef = function (t) {
              e._textInputRef = t
            }),
            (e._checkForRenderProps = function () {
              var t = !Object.keys(e.props).some(function (e) {
                return e.includes('render')
              })
              h()(t, 'Must have no render props. See comment at top of file and RWEB-23660 for details.')
            }),
            e
          )
        }
        return (
          (0, i.Z)(r, [
            {
              key: 'componentDidMount',
              value: function value() {
                var e = this.props,
                  t = e.autoFocus,
                  r = e.positionCursorAtBeginning,
                  n = e.positionCursorAtEnd,
                  a = e.type,
                  o = this._getTextInputDOMNode()
                if (t && o) {
                  o.focus()
                  var i = F.indexOf(a) > -1
                  if (n && i) {
                    var s = o.value.length
                    o.setSelectionRange(s, s)
                  } else r && i && o.setSelectionRange(0, 0)
                }
                this._checkForRenderProps()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function value() {
                this._checkForRenderProps()
              },
            },
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.ariaActiveDescendant,
                  r = e.ariaAutocomplete,
                  o = e.ariaControls,
                  i = e.ariaExpanded,
                  s = e.ariaLabel,
                  c = e.ariaOwns,
                  l = e.ariaRole,
                  u = e.autoCapitalize,
                  d = e.autoComplete,
                  h = e.autoCorrect,
                  p = e.autoFocus,
                  f = e.defaultValue,
                  m = e.editable,
                  y = e.inputMode,
                  v = e.max,
                  S = e.maxLength,
                  g = e.maxNumberOfLines,
                  _ = e.min,
                  C = e.multiline,
                  b = e.name,
                  I = e.numberOfLines,
                  x = e.onBlur,
                  Z = e.onChange,
                  E = e.onFocus,
                  w = e.onInput,
                  F = e.onKeyDown,
                  T = e.onKeyPress,
                  D = e.onKeyUp,
                  P = e.pattern,
                  L = e.placeholder,
                  H = e.placeholderTextColor,
                  O = e.returnKeyType,
                  B = e.spellCheck,
                  z = e.style,
                  U = e.testID,
                  M = e.type,
                  N = e.useCacheForDOMMeasurements,
                  q = {
                    'aria-activedescendant': t,
                    'aria-autocomplete': r,
                    'aria-controls': o,
                    'aria-expanded': i,
                    'aria-label': s,
                    'aria-owns': c,
                    autoCapitalize: u,
                    autoComplete: d,
                    autoCorrect: h ? 'on' : 'off',
                    autoFocus: p,
                    defaultValue: f,
                    disabled: !m,
                    inputMode: y,
                    max: v,
                    maxLength: S,
                    min: _,
                    name: b,
                    onBlur: x,
                    onChange: Z,
                    onFocus: E,
                    onInput: w,
                    onKeyDown: F,
                    onKeyPress: T,
                    onKeyUp: D,
                    pattern: P,
                    placeholder: L,
                    role: l,
                    spellCheck: B,
                    style: z,
                    testID: U,
                    value: e.value,
                  },
                  V = { maxRows: g || I, minRows: I, useCacheForDOMMeasurements: N },
                  j = [A.alignLeft],
                  K = { enterKeyHint: O, type: M },
                  Q = [A.alignLeft],
                  W = C ? V : K,
                  G = C ? j : Q,
                  $ = Object.assign(
                    {},
                    (0, a.Z)(
                      (0, a.Z)((0, a.Z)({}, q), W),
                      {},
                      {
                        dir: 'auto',
                        onChange: Z,
                        onPaste: this._onPaste,
                        ref: this._setTextInputRef,
                        style: [A.root, z, { placeholderTextColor: H }].concat((0, n.Z)(G)),
                      },
                    ),
                  ),
                  Y = C ? R : 'input'
                return (0, k.Z)(Y, $)
              },
            },
            {
              key: '_getTextInputDOMNode',
              value: function value() {
                if (!this.textInputNode) {
                  var e = p.findDOMNode(this._textInputRef)
                  this.textInputNode =
                    e && (e instanceof window.HTMLInputElement || e instanceof window.HTMLTextAreaElement) ? e : void 0
                }
                return this.textInputNode
              },
            },
            {
              key: 'blur',
              value: function value() {
                var e = this._getTextInputDOMNode()
                e && e.blur()
              },
            },
            {
              key: 'focus',
              value: function value() {
                var e = this._getTextInputDOMNode()
                e && e.focus()
              },
            },
            {
              key: 'clear',
              value: function value() {
                var e = this.props.onClear
                ;((this._getTextInputDOMNode() || {}).value = ''), e && e()
              },
            },
            {
              key: 'getValue',
              value: function value() {
                var e = (this._getTextInputDOMNode() || {}).value
                return void 0 === e ? '' : e
              },
            },
            {
              key: 'getOffsetHeight',
              value: function value() {
                var e = this._getTextInputDOMNode()
                return (e && e.offsetHeight) || 0
              },
            },
          ]),
          r
        )
      })(u.PureComponent)
      D.defaultProps = {
        autoComplete: 'off',
        autoCapitalize: 'sentences',
        editable: !0,
        numberOfLines: 2,
        spellCheck: 'true',
        type: 'text',
        useCacheForDOMMeasurements: !0,
      }
      var A = w.Z.create(function (e) {
        return {
          root: { appearance: 'none', boxSizing: 'border-box', resize: 'none', width: '100%' },
          alignLeft: { textAlign: 'start' },
        }
      })
    },
    433363: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(493987),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = a.useContext(i.Z)
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style, t && s.Z.iconRTL],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z',
                  }),
                ),
              },
            ),
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    928045: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return c
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(473569),
        s = function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm3.71 12.54l-1.42 1.42-2.29-2.3-2.29 2.3-1.42-1.42 2.3-2.29-2.3-2.29 1.42-1.42 2.29 2.3 2.29-2.3 1.42 1.42-2.3 2.29 2.3 2.29z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var c = s
    },
    445877: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return c
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(473569),
        s = function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 15 15',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 15, height: 15 }
      var c = s
    },
    246874: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return c
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(473569),
        s = function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var c = s
    },
    684870: function _(e, t, r) {
      var n = r(23103),
        a = r(134990),
        o = r(277111),
        i = r(492991),
        s = r(639646),
        c = r(387501)
      n(
        { target: 'Array', proto: !0 },
        {
          flatMap: function flatMap(e) {
            var t,
              r = i(this),
              n = s(r)
            return (
              o(e), ((t = c(r, 0)).length = a(t, r, r, n, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0)), t
            )
          },
        },
      )
    },
    753985: function _(e, t, r) {
      r(609736)('flatMap')
    },
  },
])

//# sourceMappingURL=WIPED
