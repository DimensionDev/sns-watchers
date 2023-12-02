'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  [
    'shared~loader.Typeahead~bundle.LoggedOutHome~bundle.Search',
    'bundle.PremiumJobs',
    'icons/IconChevronRight-js',
    'icons/IconCircleFill-js',
    'icons/IconClockCircleFill-js',
    'icons/IconCloseCircleFill-js',
    'icons/IconCloseNoMargin-js',
    'icons/IconFeedback-js',
    'icons/IconFollowArrowLeft-js',
    'icons/IconFollowArrows-js',
    'icons/IconPin-js',
    'icons/IconPromotedPill-js',
    'icons/IconSparkle-js',
    'icons/IconTrashcanStroke-js',
  ],
  {
    950617: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return u
        },
      })
      var n = r(202784),
        a = r(484292),
        o = r(645184),
        i = r.n(o),
        s = r(785693),
        c = i().hffea05c,
        l = i().j037e374,
        d = i().d96cf7ce
      var u = function u(e) {
        var t = e.onCancel,
          r = e.onConfirm
        return n.createElement(a.Z, {
          confirmButtonLabel: d,
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
        d = r(325686),
        u = r(973186),
        h = r(645184),
        p = r.n(h),
        m = r(397871),
        f = r(134615),
        y = r(676275),
        v = r(760397),
        g = r(588027),
        b = r(63899),
        S = r(76687),
        C = r(348501),
        _ = r(820604),
        x = r(974383),
        Z = r(968079),
        E =
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
        I = r(436934),
        w = r(229496),
        R = r(484292),
        k = r(211469),
        T = r(872983),
        D = r(240159),
        F = (r(818178), r(334115), r(200634), r(174062)),
        L = r(819153),
        P = r(418958),
        A = r(392160),
        B = r(935742),
        H = r(157659),
        z = function z(e, t) {
          return H.ZP.select(e, t.id)
        },
        U = function U(e, t) {
          return (0, B.cY)(e, t.id)
        }
      var O = (0, A.Z)().propsFromState(function () {
        return { user: z, userSpace: U }
      })
      var M = l.createElement(P['default'], null),
        N = p().e68b09b4,
        Q = p().fd06b02f,
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
                  i && (i.accessibilityLabel = Q({ screenName: n.screen_name }))
                  var s = l.createElement(w.ZP, {
                    accessibilityLabel: N,
                    icon: M,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return l.createElement(L.ZP, {
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
      var q = O.forwardRef(V)
      var W = r(459740),
        j = r(430084),
        K = ['id', 'onRemove'],
        G = p().e68b09b4,
        Y = (function (e) {
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
                    n = (0, W.Z)(e, K)
                  return t
                    ? l.createElement(
                        d.Z,
                        { style: $.root },
                        l.createElement(j.Z, n),
                        l.createElement(w.ZP, {
                          accessibilityLabel: G,
                          icon: l.createElement(P['default'], null),
                          onPress: r,
                          size: 'small',
                          style: $.button,
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
        $ = u.Z.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        })
      var J = Y
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
                    d.Z,
                    null,
                    l.createElement(I.ZP, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, n),
                    l.createElement(I.ZP, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                  ),
                  l.createElement(w.ZP, {
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
      var oe = u.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12 },
          }
        }),
        ie = r(246874),
        se = r(210891),
        ce = r(16587),
        le = l.createElement(P['default'], null),
        de = l.createElement(ie['default'], null),
        ue = (function (e) {
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
                return e === v.Hk.SavedSearch ? de : le
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
                    l.createElement(I.ZP, { numberOfLines: 1, withHashflags: !0 }, r),
                    l.createElement(w.ZP, {
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
        he = u.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        })
      var pe = ue
      var me = (function (e) {
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
                  ? l.createElement(q, {
                      id: n.user.id || '',
                      index: r,
                      onItemClick: a,
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                      style: fe.itemPadding,
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
                    F.Z,
                    {
                      accessibilityRole: 'option',
                      accessibilitySelected: !!t,
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [fe.root, t && fe.focused, !(null != r && r.user) && fe.itemPadding],
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
        fe = u.Z.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        })
      var ye = me
      var ve = r(24949),
        ge = r(424208),
        be = r(663140),
        Se = r(923335),
        Ce = r(671896),
        _e = r(913488),
        xe = r(823803)
      function Ze(e) {
        return (
          (0, be.VZ)(e, be.ZP.GenericUserNotFound) ||
          (0, be.VZ)(e, be.ZP.OtherUserSuspended) ||
          (0, be.VZ)(e, be.ZP.AddressBookLookupNotFound)
        )
      }
      var Ee = (0, ve.P1)(Ce.Ww, H.ZP.selectFetchStatuses, function (e, t) {
          var r = (0, k.Z)(e, function (e) {
            var r,
              n = null === (r = e.user) || void 0 === r ? void 0 : r.id
            return n && t[n] ? { id: n, fetchStatus: t[n] } : void 0
          })
          return (0, ge.Z)(r, function (e) {
            return e.fetchStatus
          })
        }),
        Ie = (0, ve.P1)(Ee, function (e) {
          var t
          return (null !== (t = e[xe.ZP.FAILED]) && void 0 !== t ? t : []).map(function (e) {
            return e.id
          })
        }),
        we = (0, ve.P1)(Ee, H.ZP.selectErrors, function (e, t) {
          var r,
            n,
            a,
            o = null !== (r = e[xe.ZP.FAILED]) && void 0 !== r ? r : [],
            i = null !== (n = e[xe.ZP.LOADED]) && void 0 !== n ? n : [],
            s = null !== (a = e[xe.ZP.LOADING]) && void 0 !== a ? a : [],
            c = o.filter(function (e) {
              var r,
                n = e.id
              return !Ze(null !== (r = t[n]) && void 0 !== r ? r : {})
            })
          return s.length > 0 ? xe.ZP.LOADING : i.length > 0 ? xe.ZP.LOADED : c.length > 0 ? xe.ZP.FAILED : xe.ZP.NONE
        }),
        Re = (0, ve.P1)(Ee, H.ZP.selectErrors, function (e, t) {
          var r,
            n = null !== (r = e[xe.ZP.FAILED]) && void 0 !== r ? r : []
          return (0, k.Z)(n, function (e) {
            var r
            if (Ze(null !== (r = t[e.id]) && void 0 !== r ? r : {})) return e.id
          })
        }),
        ke = (0, ve.P1)(_e.as, function (e) {
          return e.map(function (e) {
            return { keyword: { query: e.query }, savedSearchId: e.id_str, category: v.Hk.SavedSearch }
          })
        }),
        Te = (0, ve.P1)(Ce.Ww, function (e) {
          return e.map(function (e) {
            return (0, n.Z)((0, n.Z)({}, e), {}, { category: v.Hk.RecentSearch })
          })
        })
      var De = (0, A.Z)()
        .propsFromState(function () {
          return {
            isRecentSearchDataLoaded: Ce.H$,
            recentSearches: Te,
            usersFetchStatus: we,
            invalidRecentSearchUserIds: Re,
            failedRecentSearchUserIds: Ie,
            savedSearches: ke,
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
            c = i !== xe.ZP.LOADING && n && s ? xe.ZP.LOADED : i
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
            createLocalApiErrorHandler: (0, Se.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
            deleteSavedSearch: _e.k9,
            fetchRecentSearchesIfNeeded: Ce.OB,
            fetchSavedSearchesIfNeeded: _e.l9,
            fetchUsersIfNeeded: H.ZP.fetchManyIfNeeded,
            fetchUsersPresenceIfNeeded: B.ZP.fetchManyIfNeeded,
            removeQuery: Ce.hj,
          }
        })
        .withAnalytics({ element: 'typeahead' })
      var Fe = r(950617),
        Le = r(785693),
        Pe = p().a2c1b222,
        Ae = { headline: p().f45c4250, text: p().caae4dda, confirmButtonLabel: p().dbd5d400 },
        Be = p().a8d68f62,
        He = p().c6530778,
        ze = p().e047b8fa,
        Ue = ['event', 'keyword', 'topic', 'user'],
        Oe = (function (e) {
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
                    return e.user && Ue.includes('user')
                      ? t.indexOf(e.user.id) < 0
                      : Object.keys(e).some(function (e) {
                          return Ue.includes(e)
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
                      d.Z,
                      { style: Me.emptyState, testID: Le.Z.typeaheadEmptySearch },
                      l.createElement(I.ZP, { align: 'center', color: 'gray700' }, Pe),
                    )
                  : l.createElement(
                      d.Z,
                      { accessibilityRole: 'listbox', nativeID: t },
                      a.length > 0
                        ? l.createElement(
                            l.Fragment,
                            null,
                            l.createElement(
                              d.Z,
                              { style: Me.header, testID: Le.Z.typeaheadRecentSearchesHeader },
                              l.createElement(I.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Be),
                              l.createElement(
                                w.ZP,
                                {
                                  onBlur: i._handleClearAllBlur,
                                  onFocus: i._handleClearAllFocus,
                                  onPress: i._handleClearAllClick,
                                  ref: i._setClearAllButtonRef,
                                  size: 'xSmall',
                                  type: 'brandText',
                                },
                                ze,
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
                              d.Z,
                              {
                                accessibilityHidden: !0,
                                style: [Me.header, Me.borderTop],
                                testID: Le.Z.typeaheadSavedSearchesHeader,
                              },
                              l.createElement(I.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, He),
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
                  testID: Le.Z.typeaheadRecentSearchesItem,
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
                  o = (0, Z.Z)(r)
                return (
                  o.reverse(),
                  l.createElement(
                    d.Z,
                    { testID: Le.Z.typeaheadSavedSearchesContainer },
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
                        testID: Le.Z.typeaheadSavedSearchesItem,
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
                  d = (function (e, t) {
                    return (0, k.Z)(e, function (e) {
                      var r,
                        n = null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id
                      if (n && t.indexOf(n) < 0) return n
                    })
                  })(o, a)
                r(d)['catch'](t({})),
                  l && c.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && n(d)['catch'](t({}))
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
                  var n = (0, k.Z)(r, function (e, t) {
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
                  var n = (0, k.Z)(r, function (e, t) {
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
                    ((0, D.up)(i._getScrollParent(), i._getFocusedItem()), (i._shouldScrollToFocusedItem = !1))
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
                    d.Z,
                    { style: r },
                    l.createElement(T.Z, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? l.createElement(R.Z, {
                          confirmButtonLabel: Ae.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Ae.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Le.Z.deleteRecentSearchesDialog,
                          text: Ae.text,
                        })
                      : null,
                    o
                      ? l.createElement(Fe.Z, {
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
                    var e = (0, D.rP)(E.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function value() {
                  var e = this._focusedItemRef && E.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            r
          )
        })(l.Component)
      Oe.contextType = C.rC
      var Me = u.Z.create(function (e) {
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
      var Ne = De.forwardRef(Oe)
      var Qe = (0, A.Z)()
        .propsFromActions(function () {
          return { addQuery: Ce.DI }
        })
        .withAnalytics({ component: 'search_box' })
      var Ve = r(196234),
        qe = r(702847),
        We = function We(e, t) {
          return H.ZP.select(e, t.userId)
        }
      var je = function je(e) {
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
          o ? l.createElement(qe.C, { isFollowNudge: !0, showRelationshipChangeConfirmation: !0, userId: r }) : null
        )
      }
      var Ke = (0, A.Z)().propsFromState(function () {
          return { user: We }
        })(l.memo(je)),
        Ge = 'SearchBox_Search_Input'
      var Ye = p().a9ae1e78,
        $e = p().hbc99b03,
        Je = /^(\w+)$/,
        Xe = [g.my.Events, g.my.Users, g.my.Topics, g.my.Lists],
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
                return r && t !== r ? l.createElement(Ke, { userId: t }) : null
              }),
              (c._handleSearchItemClick = function (e) {
                var t = e.category,
                  r = e.link,
                  a = e.query,
                  o = e.queryMetadata,
                  i = e.recentSearchType,
                  s = c.props.addQuery
                t === v.Hk.SavedSearch
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !1, src: b.Z.SavedSearchClick })
                  : i === v.g2.Keyword
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: b.Z.RecentSearchClick })
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
                    type: g.El.NoResult,
                    data: { text: $e({ screenName: n }), type: 'user' },
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
                  case g.El.Event:
                    e.data && e.data.url
                      ? c._routeTransition({ pathname: f.ZP.parseInternalUrl(e.data.url) })
                      : c._submitQuery({ query: e.data.topic, src: b.Z.TypeaheadClick })
                    break
                  case g.El.Hashtag:
                  case g.El.Topic:
                    c._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: b.Z.TypeaheadClick })
                    break
                  case g.El.List:
                    c._routeTransition({ pathname: '/i/lists/'.concat(e.id) })
                    break
                  case g.El.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? c._routeTransition({ pathname: '/'.concat(et(n)) })
                      : 'topic' === a &&
                        c._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: b.Z.TypeaheadClick })
                    break
                  case g.El.User:
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
                  d = s.location,
                  u = (0, n.Z)(
                    (0, n.Z)({}, d),
                    {},
                    {
                      pathname: r,
                      search: '',
                      query: t || (a ? { q: a, src: o } : {}),
                      state: (0, n.Z)(
                        (0, n.Z)({}, d.state),
                        {},
                        { searchFocused: !1, lockScroll: !1 },
                        i ? { userId: i } : {},
                      ),
                    },
                  )
                l.replace(u)
              }),
              (c._submitQuery = function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  n = void 0 !== r && r,
                  a = e.src,
                  o = void 0 === a ? b.Z.Typed : a,
                  i = c.props,
                  s = i.addQuery,
                  l = i.mode,
                  d = i.onSubmit,
                  u = i.searchFilters,
                  h = i.searchRoute
                ;(d && d(t, o, c.state.lastSubmittedQuery === t), n) && s({ keyword: { query: t, type: v.g2.Keyword } })
                var p = (0, v.F_)({ query: t, querySrc: o, mode: l, searchFilters: u })
                c._routeTransition({ pathname: h, params: p, src: o }), c.setState({ lastSubmittedQuery: t })
              }),
              (c._setInputRef = function (e) {
                c._inputRef = e
              }),
              (c.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: (0, m.BX)(null === (s = e.location.query) || void 0 === s ? void 0 : s.q),
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
                    (this._unregisterSearchShortcutHandler = (0, _.UJ)(this._handleSearchShortcut))
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
                    u = !!a.state && !!a.state.searchFocused
                  return l.createElement(
                    d.Z,
                    { style: rt.root },
                    l.createElement(x['default'], {
                      filter: Xe,
                      forceVdlDisable: t,
                      getTopicExactMatch: i ? g.P0 : void 0,
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
                      shouldAutoFocus: u,
                      shouldClearOnSelect: !0,
                      shouldDeferPrefetch: !0,
                      source: g._4.SearchBox,
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
      ;(tt.defaultProps = { initialValue: '', placeholder: Ye, searchRoute: '/search', forceVdlDisable: !0 }),
        (tt.contextType = C.rC)
      var rt = u.Z.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      var nt = (0, S.ZP)(Qe(tt))
    },
    913488: function _(e, t, r) {
      r.d(t, {
        k9: function k9() {
          return C
        },
        l9: function l9() {
          return _
        },
        GL: function GL() {
          return S
        },
        as: function as() {
          return b
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
        d = r(753392),
        u = r(823803),
        h = r(990742),
        p = 'savedSearches',
        m = { fetchStatus: u.ZP.NONE, savedSearches: [] },
        f = Object.freeze({
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
      function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t) return e
        switch (t.type) {
          case f.SUCCESS:
            var r = t.payload,
              n = Array.isArray(r)
            return (
              n ||
                (0, c.ZP)('Saved search results are not type array', {
                  extra: { savedSearchResultsType: (0, i.Z)(r) },
                }),
              (0, o.Z)((0, o.Z)({}, e), {}, { fetchStatus: u.ZP.LOADED, savedSearches: n && r ? r : [] })
            )
          case f.FAILURE:
            return (0, o.Z)((0, o.Z)({}, e), {}, { fetchStatus: u.ZP.FAILED })
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
      l.Z.register((0, n.Z)({}, p, g))
      var b = function b(e) {
          return e[p].savedSearches
        },
        S = function S(e) {
          return function (t, r, n) {
            var a = n.api
            return (0, d._O)(t, { request: a.withEndpoint(s).create, params: { query: e } })({
              actionTypes: y,
              context: 'SAVE_SEARCH',
            })
          }
        },
        C = function C(e) {
          return function (t, r, n) {
            var a = n.api
            return (0, d._O)(t, { request: a.withEndpoint(s).destroy, params: { id: e } })({
              actionTypes: v,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        _ = function _() {
          return function (e, t, r) {
            r.api
            var n = t()
            if (!(0, h.Qb)(n)) return Promise.resolve()
            var a =
              (function (e) {
                return e[p].fetchStatus
              })(n) === u.ZP.LOADED
            return a
              ? Promise.resolve()
              : e(function (e, t, r) {
                  var n = r.api
                  return (0, d._O)(e, { request: n.withEndpoint(s).fetch, params: {} })({
                    actionTypes: f,
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
          return f
        },
        cY: function cY() {
          return m
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
                d = Object.fromEntries(
                  o.map(function (e) {
                    return [e, { expiry: c, spaces: void 0, refresh_delay_secs: s }]
                  }),
                ),
                u =
                  t &&
                  (0, a.Z)(t, function (e, t) {
                    return (0, n.Z)((0, n.Z)({}, e), {}, { expiry: c, refresh_delay_secs: s })
                  })
              return (u || d) && { entities: { userPresence: (0, n.Z)((0, n.Z)({}, d), u) } }
            })
          },
        }
      }
      r(492028)
      var i = r(894668),
        s = r(829122),
        c = r(791191),
        l = 30,
        d = (0, s.ZP)({
          namespace: 'userPresence',
          entityIsComplete: function entityIsComplete(e) {
            return e.expiry > Date.now()
          },
        }),
        u = (0, s.tb)(d, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.withEndpoint(o).fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        h = (0, s.Nr)(d, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.withEndpoint(o).fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        p = (0, n.Z)((0, n.Z)((0, n.Z)({}, d), u), h),
        m = function m(e, t) {
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
      var f = c.Z.register(p)
    },
    322150: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return w
        },
      })
      var n = r(807896),
        a = r(459740),
        o = r(709249),
        i = r(887371),
        s = r(545754),
        c = r(486906),
        l = (r(818178), r(108532), r(202784)),
        d = r(614983),
        u = r.n(d),
        h = r(325686),
        p = r(645184),
        m = r.n(p),
        f = r(928045),
        y = r(445877),
        v = r(16587),
        g = r(773036),
        b = r(436934),
        S = r(229496),
        C = r(973186),
        _ = r(632070)
      var x = 'clearButton'
      var Z = [
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
          'rightContent',
          'style',
          'styleType',
          'withClearButton',
          'withFormatInline',
        ],
        E = 'pill',
        I = m().ae7f7656,
        w = (function (e) {
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
                return [!t && !r && k.transparent]
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
                      !n && !i && k.transparent,
                      !i && P.legacyFadedGrayColor,
                      !a && R.infinite,
                      P.root,
                      n && k.invalid,
                      !n && i && k.legacyFocused,
                      i && P.legacyPilltransparentColor,
                      a && R.legacyRound,
                      !r && P.legacyDisabled,
                    ]
                  case E:
                    return [
                      !n && !i && k.unfocused,
                      !i && P.fadedGrayColor,
                      !a && R.infinite,
                      P.root,
                      P.pillRoot,
                      n && k.invalid,
                      !n && i && k.focused,
                      i && P.backgroundColor,
                      a && R.round,
                      !r && P.disabled,
                    ]
                  default:
                    return [k.none, P.root, P.selectionBackground]
                }
              }),
              (e.getUnfocusedStyles = function () {
                var t = e.props.Icon,
                  r = e.state.isFocused
                return [T.placeholderRoot, t && T.iconPadding, r && T.focused, !e._isInputEmpty() && T.textColor]
              }),
              (e._getTextInputStyle = (0, v.Z)(function (t) {
                return [e._getInputRootStyle(), t]
              })),
              (e._getInputRootStyle = function () {
                return e.props.styleType !== E
                  ? [T.root, e.props.isCompact && T.compact]
                  : [
                      T.pillRoot,
                      e.props.Icon && T.iconPadding,
                      e.state.isFocused && T.focused,
                      !e.props.multiline && T.safariFirefoxNoMargin,
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
                    d = t.onLayout,
                    u = t.richTextInputContext,
                    p = t.rightContent,
                    m = t.style,
                    f = t.styleType,
                    y = t.testID,
                    v = t.withClearButton
                  return (
                    (e = c ? this._renderLexicalInput() : u ? this._renderRichTextInput() : this._renderTextInput()),
                    l.createElement(
                      h.Z,
                      {
                        onBlur: this._handleBlur,
                        onFocus: this._handleFocus,
                        onLayout: d,
                        style: [this.getContainerStyle(), m],
                      },
                      l.createElement(
                        h.Z,
                        { style: f === E && this.getInvisibleBorderStyle() },
                        n,
                        l.createElement(
                          h.Z,
                          { style: P.textInputBox },
                          i ? s : null,
                          l.createElement(
                            h.Z,
                            { accessibilityRole: 'label', style: P.textInput, testID: y && ''.concat(y, '_label') },
                            this._renderIcon(),
                            l.createElement(
                              h.Z,
                              { style: [P.fitText, P.appTextLeft] },
                              l.createElement(b.ZP, { size: r, style: P.appText }, e),
                            ),
                            l.createElement(
                              h.Z,
                              { style: [L.root, !!o && L.withEmojiPicker] },
                              this._renderCloseButton(),
                              this._renderEmojiPicker(),
                              v && this._renderClearButton(),
                            ),
                          ),
                          p,
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
                    o = [D.legacyRoot, a && D.legacyFocused, r],
                    i = [D.root, a && D.focused, r]
                  return t
                    ? l.createElement(h.Z, { style: L.leftIcon }, l.createElement(t, { style: n === E ? i : o }))
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
                      e.rightContent,
                      e.style,
                      e.styleType,
                      e.withClearButton,
                      e.withFormatInline,
                      (0, a.Z)(e, Z))
                  return l.createElement(
                    l.Fragment,
                    null,
                    g.ZP.isEdgeLegacy()
                      ? l.createElement('style', null, 'input[type=text]::-ms-clear { display: none; }')
                      : null,
                    l.createElement(
                      _.Z,
                      (0, n.Z)({}, o, {
                        onBlur: this._handleBlur,
                        onChange: this._handlePlainChange,
                        onFocus: this._handleFocus,
                        onKeyDown: this._handleKeyDown,
                        onKeyPress: this._handleKeyPress,
                        onKeyUp: this._handleKeyUp,
                        placeholderTextColor: r || C.Z.theme.colors.gray700,
                        ref: this._textFieldAPI,
                        style: [this._getTextInputStyle(t), T.fullWidth],
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderRichTextInput',
                value: function value() {
                  var e = this.props.richTextInputContext
                  if ((u()(e, 'rich text input must have context'), !e.element || !e.editorState)) return null
                  var t = [T.root, T.rich, this.props.styleType === E && T.richRoot]
                  return l.createElement(
                    h.Z,
                    { style: [T.richContainer, this.props.isCompact && T.compact, this.props.inputStyle] },
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
                    d = e.multiline,
                    u = e.onFilesAdded,
                    p = e.placeholder,
                    m = e.spellCheck,
                    f = e.testID,
                    y = c || {},
                    v = y.element,
                    g = y.withDebug,
                    b = v
                  return l.createElement(
                    h.Z,
                    { style: [T.richContainer, s && T.compact, i] },
                    l.createElement(b, {
                      ariaActiveDescendant: t,
                      ariaAutocomplete: r,
                      ariaControls: n,
                      ariaLabel: a,
                      autoFocus: o,
                      multiline: d,
                      onChange: this._handleLexicalChange,
                      onFilesAdded: u,
                      onFocus: this._handleFocus,
                      placeholder: p,
                      ref: this._textFieldAPI,
                      spellCheck: m,
                      testID: f,
                      withDebug: g,
                    }),
                  )
                },
              },
              {
                key: '_renderClearButton',
                value: function value() {
                  return this.getValue()
                    ? (this.props.styleType === E
                        ? (e = l.createElement(f['default'], { style: F.icon }))
                        : ((t = 'brandFilled'), (e = l.createElement(y['default'], { style: F.legacyIcon }))),
                      l.createElement(S.ZP, {
                        accessibilityLabel: I,
                        focusable: !0,
                        icon: e,
                        onPress: this._handleClear,
                        size: 'smallCompact',
                        style: F.root,
                        testID: x,
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
                  return e ? l.createElement(h.Z, { style: L.closeButton }, e) : null
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
      ;(w.defaultProps = {
        appTextSize: 'body',
        autoComplete: 'on',
        styleType: E,
        autoCorrect: !0,
        editable: !0,
        focusOnClear: !0,
        withClearButton: !1,
      }),
        (w.propTypes = {})
      var R = C.Z.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            legacyRound: { borderRadius: e.borderRadii.xLarge },
            round: { borderRadius: '20px' },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        k = C.Z.create(function (e) {
          return {
            transparent: { borderColor: e.colors.transparent, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            legacyFocused: { borderColor: e.colors.primary, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            invalid: { borderColor: e.colors.red500, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            none: { borderWidth: e.borderWidths.none },
            unfocused: { borderColor: e.colors.gray200, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            focused: { borderColor: e.colors.primary, borderStyle: 'solid', borderWidth: e.borderWidths.medium },
          }
        }),
        T = C.Z.create(function (e) {
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
        D = C.Z.create(function (e) {
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
        F = C.Z.create(function (e) {
          return {
            root: { borderWidth: e.borderWidths.none, marginEnd: e.spaces.space12 },
            legacyIcon: { width: '10px', height: '10px', color: e.colors.cellBackground },
            icon: { color: e.colors.buttonBlack },
          }
        }),
        L = C.Z.create(function (e) {
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
    641310: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return S
        },
      })
      var n = r(709249),
        a = r(887371),
        o = r(545754),
        i = r(486906),
        s = r(202784),
        c = r(325686),
        l = r(645184),
        d = r.n(l),
        u = r(285042),
        h = r(436934),
        p = r(973186),
        m = d().f1a1b791,
        f = d().if2bf8b4,
        y = d().f3624b5c,
        v = d().b4b3b113,
        g = d().be222050,
        b = d().hcbbe447,
        S = (function (e) {
          ;(0, o.Z)(r, e)
          var t = (0, i.Z)(r)
          function r() {
            return (0, n.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, a.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.color,
                    r = e.nativeID,
                    n = e.style
                  return s.createElement(
                    c.Z,
                    { style: [C.root, n] },
                    s.createElement(u['default'], { style: [C.icon, t && C[t]] }),
                    s.createElement(h.ZP, { color: t, nativeID: r, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function value() {
                  var e = this.props,
                    t = e.contentAuthorId,
                    r = e.label,
                    n = e.promotedContent,
                    a = n.adMetadataContainer,
                    o = n.advertiser,
                    i = n.advertiser_name,
                    s = n.disclosure_type,
                    c = t && o && t === o.id_str,
                    l = 'string' == typeof s && 'political' === s.toLowerCase(),
                    d = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    u = !(!a || 'POLITICAL' !== a.disclaimerType) || l,
                    h = !(!a || 'ISSUE' !== a.disclaimerType) || d,
                    p = (a || {}).removePromotedAttributionForPreroll
                  return (
                    r ||
                    (!i || c || p
                      ? u
                        ? y
                        : h
                        ? g
                        : f
                      : u
                      ? v({ fullName: i })
                      : h
                      ? b({ fullName: i })
                      : m({ fullName: i }))
                  )
                },
              },
            ]),
            r
          )
        })(s.Component)
      S.defaultProps = { color: 'gray700' }
      var C = p.Z.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginEnd: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    894963: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return U
        },
      })
      r(472508), r(326936)
      var n = r(202784),
        a = r(645184),
        o = r.n(a),
        i = r(55269),
        s = r(81921),
        c = r(90649),
        l = r(240811),
        d = r(914481),
        u = r(517272),
        h = r(407307),
        p = r(106059),
        m = r(880166),
        f = r(440271),
        y = r(511258),
        v = r(45680),
        g = r(833131),
        b = r(575629),
        S = r(27895),
        C = r(156538),
        _ = r(307742),
        x = r(225163),
        Z = r(721783),
        E = r(436934),
        I = r(537800),
        w = r(430318),
        R = r(973186),
        k = r(849376),
        T = o().ae408b76,
        D = o().j355f008,
        F = o().habf9678,
        L = o().db0798ed,
        P = o().dc716ec9,
        A = function A(e) {
          var t = e.text,
            r = (0, w.Z)().direction
          return n.createElement(E.ZP, { dir: r, withHashflags: !0 }, t)
        },
        B = function B(e, t) {
          return t
            ? T
            : (function (e) {
                var t = n.createElement(A, { text: e })
                return n.createElement(o().I18NFormatMessage, { $i18n: 'fcd931ed' }, t)
              })(e)
        },
        H = R.Z.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        z = R.Z.create(function (e) {
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
      var U = function U(e) {
        var t = e.contextType,
          r = e.iconColor,
          a = e.iconSize,
          o = e.link,
          E = e.retweetData,
          w = e.text,
          T = e.topicData,
          U = e.userAvatarUrls,
          O = E || {},
          M = O.isSelfRetweet,
          N = O.name,
          Q = O.screenName,
          V = (function (e, t, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
              o = H[t],
              E = [r ? { color: R.Z.theme.colors[r] } : z.colorDeepGray, o],
              w = n.createElement(i['default'], { style: E }),
              T = n.createElement(s['default'], { style: E }),
              D = n.createElement(c['default'], { style: E }),
              F = n.createElement(l['default'], { style: E }),
              L = n.createElement(d['default'], { style: E }),
              P = n.createElement(u['default'], { style: z.circle }),
              A = n.createElement(h['default'], { style: E }),
              B = n.createElement(p['default'], { style: E }),
              U = n.createElement(m['default'], { style: E }),
              O = n.createElement(f['default'], { style: E }),
              M = n.createElement(y['default'], { style: E }),
              N = n.createElement(v['default'], { style: E }),
              Q = n.createElement(g['default'], { style: E }),
              V = n.createElement(b['default'], { style: E }),
              q = n.createElement(S['default'], { style: E }),
              W = n.createElement(C['default'], { style: E }),
              j = n.createElement(_['default'], { style: E }),
              K = n.createElement(x['default'], { style: E }),
              G = n.createElement(I.Z, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              Y = n.createElement(Z['default'], { style: E })
            switch (e) {
              case k.Q.Pin:
              case k.Q.ReplyPin:
                return w
              case k.Q.Retweet:
                return T
              case k.Q.Like:
                return D
              case k.Q.Follow:
                return F
              case k.Q.Moment:
                return L
              case k.Q.NewTweets:
                return P
              case k.Q.Reply:
              case k.Q.Conversation:
                return A
              case k.Q.Feedback:
                return B
              case k.Q.Topic:
                return U
              case k.Q.List:
                return O
              case k.Q.Location:
                return M
              case k.Q.Community:
                return N
              case k.Q.Spaces:
                return Q
              case k.Q.Sparkle:
                return V
              case k.Q.SmartBlockExpiration:
                return q
              case k.Q.SocialProof:
              case k.Q.FollowFollowed:
                return K
              case k.Q.FollowMutual:
                return j
              case k.Q.FollowFollowing:
                return W
              case k.Q.Facepile:
                return G
              case k.Q.Bird:
                return Y
              case k.Q.TextOnly:
              default:
                return null
            }
          })(t, a, r, U)
        switch (t) {
          case k.Q.Retweet:
            return { Icon: V, text: w || B(N, M), link: Q ? 'https://twitter.com/'.concat(Q) : void 0 }
          case k.Q.Pin:
            return { Icon: V, text: w || D }
          case k.Q.ReplyPin:
            return { Icon: V, text: F }
          case k.Q.Topic:
            return {
              Icon: V,
              accessibilityLabel:
                'Recommendation' === (null == T ? void 0 : T.functionalityType) ||
                'RecWithEducation' === (null == T ? void 0 : T.functionalityType)
                  ? P({ topicName: w })
                  : L({ topicName: w }),
              text: w ? n.createElement(A, { text: w }) : null,
              link: o,
            }
          default:
            return { Icon: V, text: w ? n.createElement(A, { text: w }) : null, link: o }
        }
      }
    },
    309524: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return C
        },
      })
      var n = r(459740),
        a = r(709249),
        o = r(887371),
        i = r(545754),
        s = r(486906),
        c = (r(472508), r(136728), r(108532), r(818178), r(202784)),
        l = r(325686),
        d = r(436934),
        u = r(137541),
        h = r(377089),
        p = r(973186),
        m = r(191062),
        f = r(868011),
        y = r(894963),
        v = r(849376),
        g = [
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
        b = (function (e) {
          ;(0, i.Z)(r, e)
          var t = (0, s.Z)(r)
          function r() {
            return (0, a.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, o.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this,
                    t = this.props,
                    r = t.avatarSize,
                    a = t.bottomControl,
                    o = t.iconStyle,
                    i = t.nativeID,
                    s = t.onLayout,
                    p = t.rightControl,
                    m = t.style,
                    f = t.testID,
                    v = t.textColor,
                    b = t.textSize,
                    C = t.topControl,
                    _ = t.weight,
                    x = (t.withBottomBorder, t.withLeftPadding),
                    Z = (t.withTextCentered, (0, n.Z)(t, g)),
                    E = (0, y.Z)(Z),
                    I = E.Icon,
                    w = E.accessibilityLabel,
                    R = E.link,
                    k = E.text,
                    T = c.createElement(
                      d.ZP,
                      { accessibilityLabel: w, color: v, nativeID: i, numberOfLines: 2, size: b, testID: f, weight: _ },
                      k,
                    ),
                    D = this._getStyles(),
                    F = D.cellStyle,
                    L = D.viewStyle
                  return k
                    ? c.createElement(h.ZP.UseProps, null, function (t) {
                        return c.createElement(
                          c.Fragment,
                          null,
                          C || null,
                          c.createElement(
                            l.Z,
                            {
                              onLayout: s,
                              style: [m, L, t.socialContextRefreshEnabled() && !x && S.socialContextRefresh],
                            },
                            c.createElement(
                              u.Z,
                              {
                                avatarCell: I || (x ? null : void 0),
                                avatarCellStyle: [
                                  o,
                                  S.socialContextIconColumn,
                                  !x && S.unsetIconWidth,
                                  t.socialContextRefreshEnabled() && !x && S.socialContextRefreshIcon,
                                ],
                                avatarSize: r,
                                cellStyle: F,
                              },
                              c.createElement(
                                l.Z,
                                { style: S.cellWrapper },
                                c.createElement(
                                  l.Z,
                                  {
                                    style: [
                                      S.socialContextTextColumn,
                                      t.socialContextRefreshEnabled() && !x && S.socialContextRefreshTextColumn,
                                    ],
                                  },
                                  R ? e._renderLink(R, T) : T,
                                ),
                                p || null,
                              ),
                            ),
                            a || null,
                          ),
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderLink',
                value: function value(e, t) {
                  var r = this.props,
                    n = r.contextType,
                    a = r.nativeID,
                    o = r.onClick,
                    i = r.retweetData,
                    s = r.textColor,
                    l = r.topicData,
                    u = (i || {}).screenName,
                    h = c.createElement(d.ZP, { color: s, link: e, nativeID: a, onClick: o }, t)
                  return n === v.Q.Topic && l
                    ? c.createElement(m.Z, { topicId: l.topicId }, h)
                    : n === v.Q.Retweet && u
                    ? c.createElement(f.Z, { screenName: u }, h)
                    : h
                },
              },
              {
                key: '_getStyles',
                value: function value() {
                  var e = this.props,
                    t = e.bottomControl,
                    r = e.contextType,
                    n = e.withBottomBorder,
                    a = e.withTextCentered,
                    o = r === v.Q.TextOnly,
                    i = n ? [S.bottomBorderMargin, !!t && S.bottomBorder] : [],
                    s = n && !t ? [S.bottomBorder] : []
                  return (
                    o && s.push(S.topicContext),
                    a && s.push(S.socialContextTextCentered),
                    { viewStyle: i, cellStyle: s }
                  )
                },
              },
            ]),
            r
          )
        })(c.PureComponent)
      b.defaultProps = {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      }
      var S = p.Z.create(function (e) {
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
          socialContextRefreshIcon: { marginEnd: e.spaces.space8 },
          socialContextRefresh: { marginBottom: e.spaces.space8 },
          socialContextRefreshTextColumn: { minHeight: e.spaces.space32 },
          socialContextTextCentered: { justifyContent: 'center' },
        }
      })
      var C = b
    },
    849376: function _(e, t, r) {
      r.d(t, {
        Q: function Q() {
          return n
        },
      })
      r(22144), r(202784)
      var n = Object.freeze({
        Bird: 'Bird',
        Community: 'Community',
        Conversation: 'Conversation',
        Facepile: 'Facepile',
        Feedback: 'Feedback',
        Follow: 'Follow',
        FollowFollowed: 'FollowFollowed',
        FollowFollowing: 'FollowFollowing',
        FollowMutual: 'FollowMutual',
        Like: 'Like',
        List: 'List',
        Location: 'Location',
        Megaphone: 'Megaphone',
        Moment: 'Moment',
        NewTweets: 'NewTweets',
        NewUser: 'NewUser',
        Pin: 'Pin',
        Reply: 'Reply',
        RelatedTweets: 'RelatedTweets',
        ReplyPin: 'ReplyPin',
        Retweet: 'Retweet',
        SmartBlockExpiration: 'SmartBlockExpiration',
        SocialProof: 'SocialProof',
        Spaces: 'Spaces',
        Sparkle: 'Sparkle',
        TextOnly: 'TextOnly',
        Topic: 'Topic',
        Trending: 'Trending',
      })
    },
    632070: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return D
        },
      })
      var n = r(968079),
        a = r(133028),
        o = r(709249),
        i = r(887371),
        s = r(545754),
        c = r(486906),
        l = r(807896),
        d =
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
        u = r(614983),
        h = r.n(u),
        p = r(928316),
        m = r(231461),
        f = r(580753),
        y = r(981665),
        v = !!document.documentElement.currentStyle,
        g = {
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
        b = [
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
        S = {},
        C = document.createElement('textarea'),
        _ = function _(e) {
          Object.keys(g).forEach(function (t) {
            e.style.setProperty(t, g[t], 'important')
          })
        }
      function x(e, t, r, n, a) {
        void 0 === r && (r = !1),
          void 0 === n && (n = null),
          void 0 === a && (a = null),
          null === C.parentNode && document.body.appendChild(C)
        var o = (function (e, t, r) {
          void 0 === r && (r = !1)
          if (r && S[t]) return S[t]
          var n = window.getComputedStyle(e)
          if (null === n) return null
          var a = b.reduce(function (e, t) {
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
          r && (S[t] = c)
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
          _(C),
          (C.value = e.value || e.placeholder || 'x')
        var d = -1 / 0,
          u = 1 / 0,
          h = C.scrollHeight
        'border-box' === c ? (h += s) : 'content-box' === c && (h -= i), (C.value = 'x')
        var p = C.scrollHeight - i,
          m = Math.floor(h / p)
        return (
          null !== n && ((d = p * n), 'border-box' === c && (d = d + i + s), (h = Math.max(d, h))),
          null !== a && ((u = p * a), 'border-box' === c && (u = u + i + s), (h = Math.min(u, h))),
          { height: h, minHeight: d, maxHeight: u, rowCount: Math.floor(h / p), valueRowCount: m }
        )
      }
      C.setAttribute('tab-index', '-1'), C.setAttribute('aria-hidden', 'true'), _(C)
      var Z = function Z() {},
        E = 0,
        I = (function (e) {
          function t(t) {
            var r
            return (
              ((r = e.call(this, t) || this)._onRef = function (e) {
                r._ref = e
                var t = r.props.inputRef
                'function' != typeof t ? (t.current = e) : t(e)
              }),
              (r._onChange = function (e) {
                r._controlled || r._resizeComponent(), r.props.onChange(e, (0, f.Z)(r))
              }),
              (r._resizeComponent = function (e) {
                void 0 === e && (e = Z)
                var t = x(r._ref, r._uid, r.props.useCacheForDOMMeasurements, r.props.minRows, r.props.maxRows)
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
              (r._uid = E++),
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
                  (0, m.Z)(e, ['inputRef', 'maxRows', 'minRows', 'onHeightChange', 'useCacheForDOMMeasurements']))
              return (
                (t.style = (0, l.Z)({}, t.style, { height: this.state.height })),
                Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height &&
                  (t.style.overflow = 'hidden'),
                (0, d.createElement)('textarea', (0, l.Z)({}, t, { onChange: this._onChange, ref: this._onRef }))
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
                  delete S[e]
                })(this._uid)
            }),
            t
          )
        })(d.Component)
      I.defaultProps = { inputRef: Z, onChange: Z, onHeightChange: Z, useCacheForDOMMeasurements: !1 }
      var w = I
      var R = r(940080),
        k = r(973186),
        T = ['text', 'search', 'url', 'tel', 'password']
      var D = d.forwardRef(function (e, t) {
        var r = e.onFocus,
          n = d.useCallback(
            function (e) {
              r && r()
            },
            [r],
          )
        return d.createElement(F, (0, l.Z)({}, e, { onFocus: n, ref: t }))
      })
      var F = (function (e) {
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
                  var i = T.indexOf(a) > -1
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
                  d = e.autoCapitalize,
                  u = e.autoComplete,
                  h = e.autoCorrect,
                  p = e.autoFocus,
                  m = e.defaultValue,
                  f = e.editable,
                  y = e.inputMode,
                  v = e.max,
                  g = e.maxLength,
                  b = e.maxNumberOfLines,
                  S = e.min,
                  C = e.multiline,
                  _ = e.name,
                  x = e.numberOfLines,
                  Z = e.onBlur,
                  E = e.onChange,
                  I = e.onFocus,
                  k = e.onInput,
                  T = e.onKeyDown,
                  D = e.onKeyPress,
                  F = e.onKeyUp,
                  P = e.pattern,
                  A = e.placeholder,
                  B = e.placeholderTextColor,
                  H = e.returnKeyType,
                  z = e.spellCheck,
                  U = e.style,
                  O = e.testID,
                  M = e.type,
                  N = e.useCacheForDOMMeasurements,
                  Q = {
                    'aria-activedescendant': t,
                    'aria-autocomplete': r,
                    'aria-controls': o,
                    'aria-expanded': i,
                    'aria-label': s,
                    'aria-owns': c,
                    autoCapitalize: d,
                    autoComplete: u,
                    autoCorrect: h ? 'on' : 'off',
                    autoFocus: p,
                    defaultValue: m,
                    disabled: !f,
                    inputMode: y,
                    max: v,
                    maxLength: g,
                    min: S,
                    name: _,
                    onBlur: Z,
                    onChange: E,
                    onFocus: I,
                    onInput: k,
                    onKeyDown: T,
                    onKeyPress: D,
                    onKeyUp: F,
                    pattern: P,
                    placeholder: A,
                    role: l,
                    spellCheck: z,
                    style: U,
                    testID: O,
                    value: e.value,
                  },
                  V = { maxRows: b || x, minRows: x, useCacheForDOMMeasurements: N },
                  q = [L.alignLeft],
                  W = { enterKeyHint: H, type: M },
                  j = [L.alignLeft],
                  K = C ? V : W,
                  G = C ? q : j,
                  Y = Object.assign(
                    {},
                    (0, a.Z)(
                      (0, a.Z)((0, a.Z)({}, Q), K),
                      {},
                      {
                        dir: 'auto',
                        onChange: E,
                        onPaste: this._onPaste,
                        ref: this._setTextInputRef,
                        style: [L.root, U, { placeholderTextColor: B }].concat((0, n.Z)(G)),
                      },
                    ),
                  ),
                  $ = C ? w : 'input'
                return (0, R.Z)($, Y)
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
      })(d.PureComponent)
      F.defaultProps = {
        autoComplete: 'off',
        autoCapitalize: 'sentences',
        editable: !0,
        numberOfLines: 2,
        spellCheck: 'true',
        type: 'text',
        useCacheForDOMMeasurements: !0,
      }
      var L = k.Z.create(function (e) {
        return {
          root: { appearance: 'none', boxSizing: 'border-box', resize: 'none', width: '100%' },
          alignLeft: { textAlign: 'start' },
        }
      })
    },
    988403: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return v
        },
      })
      var n = r(807896),
        a = r(459740),
        o = r(196234),
        i = r(202784),
        s = r(325686),
        c = r(645184),
        l = r.n(c),
        d = r(833131),
        u = r(825301),
        h = r(971575),
        p = r(566970),
        m = r(973186),
        f = r(481142),
        y = ['accessibilityLabel', 'presenceRingType', 'spaceId']
      var v = function v(e) {
        var t = h.Z.useAnalytics(),
          r = i.useState(),
          s = (0, o.Z)(r, 2),
          c = s[0],
          l = s[1],
          d = !!(c && c > 70),
          u = e.accessibilityLabel,
          m = e.presenceRingType,
          v = (e.spaceId, (0, a.Z)(e, y)),
          b =
            u ||
            (function (e, t) {
              switch (e) {
                case 'audiospace':
                  return C.activeAudioSpace({ screenName: t })
                case 'livevideo':
                  return C.activeLiveVideo({ screenName: t })
                default:
                  return
              }
            })(m, e.screenName)
        i.useEffect(
          function () {
            switch (m) {
              case 'audiospace':
                t.scribe({ action: 'impression', element: 'audiospace_ring' })
                break
              case 'livevideo':
                t.scribe({ action: 'impression', element: 'livevideo_ring' })
            }
          },
          [m],
        )
        var S = i.useCallback(
          function (e) {
            return i.createElement(p.Z.Default, (0, n.Z)({}, e, { type: m }))
          },
          [m],
        )
        return i.createElement(
          f['default'],
          (0, n.Z)({}, v, {
            BorderComponent: S,
            accessibilityLabel: b,
            avatarRef: function avatarRef(e) {
              if (e) {
                var t = e.getBoundingClientRect()
                t.width !== c && l(t.width)
              }
            },
            borderWidth: d ? 'large' : 'medium',
            decoration: i.createElement(g, { isWide: d, type: m }),
            gapWidth: d ? 'space4' : 'space2',
            onClick: function onClick() {
              switch (m) {
                case 'audiospace':
                  t.scribe({ action: 'click', element: 'audiospace_ring' })
                  break
                case 'livevideo':
                  t.scribe({ action: 'click', element: 'livevideo_ring' })
              }
            },
            withLink: !0,
          }),
        )
      }
      function g(e) {
        switch (e.type) {
          case 'audiospace':
          case 'livevideo':
            return i.createElement(b, e)
          default:
            return null
        }
      }
      function b(e) {
        return 'livevideo' === e.type
          ? i.createElement(u.ZP, { style: [S.liveVideoLabel, e.isWide ? S.borderWide : S.borderNarrow], type: 'live' })
          : i.createElement(
              s.Z,
              { style: [S.root, e.isWide ? S.rootWide : S.rootNarrow] },
              i.createElement(
                p.Z.Default,
                { style: [S.spaceGradient, e.isWide ? S.borderWide : S.borderNarrow] },
                i.createElement(d['default'], { style: S.spaceIcon }),
              ),
            )
      }
      var S = m.Z.create(function (e) {
          var t = e.spacesPx.space16 + e.spacesPx.space2,
            r = '100%',
            n = e.spacesPx.space4,
            a = e.spacesPx.space2
          return {
            root: {
              borderRadius: e.borderRadii.infinite,
              bottom: 0,
              end: 0,
              height: '30%',
              minHeight: t,
              minWidth: t,
              pointerEvents: 'none',
              position: 'absolute',
              width: '30%',
            },
            liveVideoLabel: {
              borderColor: e.colors.cellBackground,
              bottom: 0,
              start: '50%',
              position: 'absolute',
              transform: 'translateX(-50%)',
            },
            rootWide: { end: -1 * n, bottom: -1 * n },
            rootNarrow: { end: -1 * a, bottom: -1 * a },
            borderWide: { borderWidth: n },
            borderNarrow: { borderWidth: a },
            spaceGradient: {
              justifyContent: 'center',
              width: r,
              height: r,
              borderRadius: e.borderRadii.infinite,
              borderColor: e.colors.cellBackground,
            },
            spaceIcon: { padding: e.spaces.space2, color: e.colors.white },
          }
        }),
        C = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d }
    },
    819153: function _(e, t, r) {
      r.d(t, {
        ZP: function ZP() {
          return D
        },
      })
      var n = r(807896),
        a = r(709249),
        o = r(887371),
        i = r(545754),
        s = r(486906),
        c = (r(22144), r(818178), r(326936), r(472508), r(374083), r(334115), r(200634), r(202784)),
        l = r(325686),
        d = r(35953),
        u = r(436934),
        h = r(137541),
        p = r(186454),
        m = r(525663),
        f = r(377089),
        y = r(77227),
        v = r(174062),
        g = r(641310),
        b = r(309524),
        S = r(894963),
        C = r(973186),
        _ = r(481142),
        x = r(988403),
        Z = r(954813),
        E = r(695995)
      var I = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        w = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          SubscribableUser: 'SubscribableUser',
        }),
        R = d.Z.createLayoutCache(),
        k = (function (e) {
          ;(0, i.Z)(r, e)
          var t = (0, s.Z)(r)
          function r() {
            var e
            ;(0, a.Z)(this, r)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(o)))._renderUserName = function () {
                var t = e.props,
                  r = t.affiliateBadgeInfo,
                  n = t.badgeContext,
                  a = t.disabledMessage,
                  o = t.displayNameLabel,
                  i = t.isBlocking,
                  s = t.isBlueVerified,
                  d = t.isDisabled,
                  h = t.isFollowedBy,
                  p = t.isProtected,
                  m = t.isVerified,
                  f = t.name,
                  y = t.onScreenNameClick,
                  v = t.promotedContent,
                  g = t.promotedItemType,
                  b = t.screenName,
                  S = t.screenNameSuffix,
                  C = t.translatorType,
                  _ = t.verifiedType,
                  x = t.withFollowsYou,
                  Z = t.withLink,
                  w = c.createElement(E.Z, {
                    affiliateBadgeInfo: r,
                    badgeContext: n,
                    displayNameLabel: o,
                    isBlueVerified: s,
                    isProtected: p,
                    isVerified: m,
                    name: f,
                    onLinkClick: y,
                    promotedContent: g === I.TWEET ? v : void 0,
                    screenName: b,
                    screenNameSuffix: S,
                    translatorType: C,
                    verifiedType: _,
                    withFollowsYou: x && h,
                    withHoverCard: !i && !d && Z,
                    withLink: !d && Z,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? c.createElement(
                      l.Z,
                      { style: T.disabledMessageContainer },
                      w,
                      c.createElement(u.ZP, { color: 'gray700' }, a),
                    )
                  : w
              }),
              (e._renderSocialContext = function () {
                var t = e.props,
                  r = t.avatarSize,
                  n = t.socialContext
                return n
                  ? c.createElement(f.ZP.UseProps, null, function (e) {
                      return c.createElement(b.Z, {
                        avatarSize: r,
                        contextType: n.contextType,
                        iconSize: 'large',
                        link: n.link,
                        style: T.socialContext,
                        text: n.text,
                        weight: 'bold',
                        withLeftPadding: !0,
                      })
                    })
                  : null
              }),
              (e._renderUserTypeaheadSocialContext = function () {
                var t = e.props.socialContext,
                  r =
                    (t && (0, S.Z)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  n = r.Icon,
                  a = r.text
                return t
                  ? c.createElement(
                      l.Z,
                      { style: T.userTypeaheadSocialContext },
                      c.createElement(l.Z, { style: T.userTypeaheadSocialContextIcon }, n),
                      c.createElement(
                        u.ZP,
                        { color: 'gray700', numberOfLines: 1, style: T.userTypeaheadSocialContextText },
                        a,
                      ),
                    )
                  : null
              }),
              (e._renderHighlightedUserLabel = function () {
                var t = e.props.highlightedLabel
                return t ? c.createElement(y.Z, { label: t }) : null
              }),
              (e._isEligibleForBio = function () {
                var t = e.props.displayMode
                return -1 !== [w.UserDetailed, w.UserConcise, w.SubscribableUser].indexOf(t)
              }),
              (e._handleKeyPress = function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              (e._handleClick = m.Z.selectiveClickHandler(function (t) {
                var r = e.props.onCellClick
                t.preventDefault(), r && r()
              })),
              e
            )
          }
          return (
            (0, o.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.accessibilityChecked,
                    r = e.accessibilityLabel,
                    a = e.avatarDecoration,
                    o = e.avatarShape,
                    i = e.avatarSize,
                    s = e.avatarUri,
                    d = e.bottomControl,
                    u = e.decoration,
                    m = e.displayMode,
                    f = e.isBlocking,
                    y = e.isDisabled,
                    b = e.onAvatarClick,
                    S = e.onCellClick,
                    C = e.onScreenNameClick,
                    Z = e.presenceIndicator,
                    E = e.promotedContent,
                    k = e.promotedItemType,
                    D = e.screenName,
                    F = e.style,
                    L = e.testID,
                    P = e.userId,
                    A = e.withBottomSocialContext,
                    B = e.withDarkerInteractiveBackground,
                    H = e.withInteractiveStyling,
                    z = e.withLink,
                    U = e.withUsernameCenterAligned,
                    O = z && !f,
                    M = m === w.UserCompact || U,
                    N =
                      E && k === I.USER && 'earned' !== (E.disclosure_type && E.disclosure_type.toLowerCase())
                        ? c.createElement(g.Z, { contentAuthorId: P, promotedContent: E, style: T.promotedIndicator })
                        : null,
                    Q = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: R,
                      onClick: b,
                      onHoverCardScreenNameClick: C,
                      promotedContent: E,
                      screenName: D,
                      style: T.avatar,
                      uri: s,
                      withHoverCard: O,
                      withLink: z,
                      shape: o,
                    },
                    V = c.createElement(p.Z.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return Z
                        ? c.createElement(x.Z, (0, n.Z)({}, Q, Z, { size: t }))
                        : c.createElement(_['default'], (0, n.Z)({ size: t }, Q))
                    }),
                    q = 'boolean' == typeof t,
                    W = void 0 !== S,
                    j = (q ? 'radio' : W && 'button') || 'listitem',
                    K = this._renderUserName(),
                    G = this._renderHighlightedUserLabel(),
                    Y = this._renderBio(),
                    $ = G || Y || N || d,
                    J = c.createElement(
                      c.Fragment,
                      null,
                      G,
                      Y,
                      N,
                      d ? c.createElement(l.Z, { style: T.bottomControl }, d) : null,
                    )
                  return c.createElement(
                    v.Z,
                    {
                      accessibilityChecked: t,
                      accessibilityLabel: r,
                      accessibilityRole: j,
                      disabled: !!y,
                      focusable: q || W,
                      onClick: this._handleClick,
                      onKeyPress: this._handleKeyPress,
                      pointerEvents: y ? 'none' : void 0,
                      style: [T.root, F],
                      testID: L,
                      withDarkerInteractiveBackground: B,
                      withInteractiveStyling: null != H ? H : !!S,
                    },
                    A ? null : this._renderSocialContext(),
                    c.createElement(
                      h.Z,
                      {
                        avatarCell: V,
                        avatarCellStyle: [T.avatarColumn, M && T.bodyColumnCentered],
                        avatarSize: i,
                        cellStyle: [T.bodyColumn, M && T.bodyColumnCentered],
                      },
                      c.createElement(l.Z, { style: T.body }, K, u),
                      M ? null : J,
                      A ? this._renderUserTypeaheadSocialContext() : null,
                    ),
                    $ && M
                      ? c.createElement(
                          h.Z,
                          { avatarCell: null, avatarCellStyle: T.avatarColumn, cellStyle: T.bodyColumn },
                          J,
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderBio',
                value: function value() {
                  var e = this.props,
                    t = e.description,
                    r = e.displayMode,
                    n = e.entities,
                    a = e.userId,
                    o = e.withheldDescription,
                    i = e.withheldEntities
                  return n && t && this._isEligibleForBio()
                    ? c.createElement(Z.Z, {
                        description: t,
                        entities: n,
                        isConcise: r === w.UserConcise,
                        style: T.bio,
                        userId: a,
                        withheldDescription: o,
                        withheldEntities: i,
                      })
                    : null
                },
              },
            ]),
            r
          )
        })(c.PureComponent)
      k.defaultProps = { testID: 'UserCell', withLink: !0 }
      var T = C.Z.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingStart: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      var D = k
    },
    954813: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return c
        },
      })
      r(334115), r(200634), r(543450), r(818178)
      var n = r(202784),
        a = r(436934),
        o = r(96847),
        i = r(775275),
        s = r(749868)
      var c = function c(e) {
        var t = e.description,
          r = e.entities,
          c = e.isConcise,
          l = e.style,
          d = e.testID,
          u = e.userId,
          h = e.withheldDescription,
          p = e.withheldEntities,
          m = (0, s.H)({ description: t, entities: r, withheldDescription: h, withheldEntities: p }),
          f = m.description,
          y = m.entities,
          v = i.ZP.descriptionTextParts(f, y)
        return v.length
          ? n.createElement(
              a.ZP,
              { dir: 'auto', numberOfLines: c ? 2 : void 0, style: l, testID: d },
              v.map(function (e, t) {
                return n.createElement(o.ZP, { key: 'user_'.concat(u, '_textpart_').concat(t), linkify: !0, part: e })
              }),
            )
          : null
      }
    },
    749868: function _(e, t, r) {
      r.d(t, {
        H: function H() {
          return n
        },
      })
      r(334115), r(200634)
      var n = function n(e) {
        var t = e.description,
          r = e.entities,
          n = e.withheldDescription,
          a = e.withheldEntities
        return n ? { description: n, entities: a } : { description: t, entities: r }
      }
    },
    433363: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return d
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(493987),
        c = r(473569),
        l = function l() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = a.useContext(s.Z),
            r = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.Z.root, e.style, t && c.Z.iconRTL],
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
            { writingDirection: r },
          )
        }
      l.metadata = { width: 24, height: 24 }
      var d = l
    },
    517272: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement('g', null, a.createElement('circle', { cx: '12', cy: '12', r: '10.3' })),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    27895: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 6v6.72l5.19 1.73.63-1.9L13 11.28V6h-2z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    928045: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
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
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    445877: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
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
            { writingDirection: t },
          )
        }
      c.metadata = { width: 15, height: 15 }
      var l = c
    },
    106059: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    225163: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    307742: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    156538: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    511258: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    55269: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    285042: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    575629: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z',
                  }),
                ),
              },
            ),
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
    },
    246874: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(783427),
        s = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.Z)().direction
          return (0, o.Z)(
            'svg',
            (0, n.Z)(
              (0, n.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
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
            { writingDirection: t },
          )
        }
      c.metadata = { width: 24, height: 24 }
      var l = c
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
