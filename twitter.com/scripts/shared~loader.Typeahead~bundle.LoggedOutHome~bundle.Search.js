'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  [
    'shared~loader.Typeahead~bundle.LoggedOutHome~bundle.Search',
    'icons/IconChevronRight-js',
    'icons/IconCircleFill-js',
    'icons/IconClockCircleFill-js',
    'icons/IconCloseCircleFill-js',
    'icons/IconCloseNoMargin-js',
    'icons/IconFeedback-js',
    'icons/IconFollowArrowLeft-js',
    'icons/IconFollowArrows-js',
    'icons/IconLightning-js',
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
        o = r(473228),
        i = r.n(o),
        s = r(785693),
        l = i().hffea05c,
        c = i().j037e374,
        d = i().d96cf7ce
      var u = function u(e) {
        var t = e.onCancel,
          r = e.onConfirm
        return n.createElement(a.Z, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: l,
          onCancel: t,
          onConfirm: r,
          testID: s.Z.deleteSavedSearchDialog,
          text: c,
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
            return ot
          },
          default: function _default() {
            return st
          },
        })
      var n = r(133028),
        a = r(807896),
        o = r(709249),
        i = r(887371),
        s = r(580753),
        l = r(545754),
        c = r(486906),
        d = r(256666),
        u = (r(472508), r(326936), r(477950), r(74069), r(385940), r(136728), r(621850), r(202784)),
        h = r(325686),
        p = r(973186),
        m = r(473228),
        f = r.n(m),
        y = r(397871),
        v = r(134615),
        g = r(676275),
        S = r(760397),
        b = r(588027),
        Z = r(63899),
        C = r(76687),
        _ = r(331261),
        x = r(820604),
        I = r(974383),
        E = r(968079),
        w =
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
        R = r(436934),
        k = r(229496),
        T = r(484292),
        F = r(211469),
        L = r(872983),
        D = r(240159),
        P = (r(818178), r(334115), r(200634), r(174062)),
        A = r(819153),
        H = r(418958),
        B = r(392160),
        z = r(286928),
        U = r(157659),
        O = function O(e, t) {
          return U.ZP.select(e, t.id)
        },
        M = function M(e, t) {
          return (0, z.cY)(e, t.id)
        }
      var N = (0, B.Z)().propsFromState(function () {
        return { user: O, userSpace: M }
      })
      var Q = u.createElement(H['default'], null),
        V = f().e68b09b4,
        q = f().fd06b02f,
        j = (function (e) {
          ;(0, l.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) {
              a[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, d.Z)((0, s.Z)(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              (0, d.Z)((0, s.Z)(e), '_handleClick', function () {
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
                  var s = u.createElement(k.ZP, {
                    accessibilityLabel: V,
                    icon: Q,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return u.createElement(A.ZP, {
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
                        category: S.Hk.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: S.g2.User,
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(u.Component)
      ;(0, d.Z)(j, 'contextType', _.rC)
      var W = N.forwardRef(j)
      var K = r(459740),
        G = r(430084),
        Y = ['id', 'onRemove'],
        $ = f().e68b09b4,
        J = (function (e) {
          ;(0, l.Z)(r, e)
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
                    n = (0, K.Z)(e, Y)
                  return t
                    ? u.createElement(
                        h.Z,
                        { style: X.root },
                        u.createElement(G.Z, n),
                        u.createElement(k.ZP, {
                          accessibilityLabel: $,
                          icon: u.createElement(H['default'], null),
                          onPress: r,
                          size: 'small',
                          style: X.button,
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
                    category: S.Hk.RecentSearch,
                    query: t,
                    recentSearchType: S.g2.Event,
                    queryMetadata: { id: t, image: r, title: a, supportText: n },
                  }
                },
              },
            ]),
            r
          )
        })(u.PureComponent),
        X = p.Z.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        })
      var ee = J
      var te = r(238749),
        re = r(137541),
        ne = r(880166),
        ae = u.createElement(H['default'], null),
        oe = f().e68b09b4
      var ie = (function (e) {
        ;(0, l.Z)(r, e)
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
                  i = u.createElement(te.Z, { Icon: ne['default'], color: 'primary', size: o, style: se.searchIcon })
                return u.createElement(
                  re.Z,
                  { avatarCell: i, avatarSize: o, cellStyle: se.bodyColumn },
                  u.createElement(
                    h.Z,
                    null,
                    u.createElement(R.ZP, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, n),
                    u.createElement(R.ZP, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                  ),
                  u.createElement(k.ZP, {
                    accessibilityLabel: oe,
                    icon: ae,
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
                      category: S.Hk.RecentSearch,
                      query: r,
                      recentSearchType: S.g2.Topic,
                      queryMetadata: { id: r, name: n, description: t },
                    }
                  : null
              },
            },
          ]),
          r
        )
      })(u.Component)
      var se = p.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12 },
          }
        }),
        le = r(246874),
        ce = r(210891),
        de = r(16587),
        ue = u.createElement(H['default'], null),
        he = u.createElement(le['default'], null),
        pe = (function (e) {
          ;(0, l.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) {
              a[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, d.Z)(
                (0, s.Z)(e),
                '_getMemoizedButtonType',
                (0, de.Z)(function (e) {
                  return e === S.Hk.SavedSearch ? 'destructiveText' : 'brandText'
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(e),
                '_getMemoizedRemoveIcon',
                (0, de.Z)(function (e) {
                  return e === S.Hk.SavedSearch ? he : ue
                }),
              ),
              (0, d.Z)((0, s.Z)(e), '_getButtonType', function () {
                var t = e.props.category
                return e._getMemoizedButtonType(t)
              }),
              (0, d.Z)((0, s.Z)(e), '_getRemoveIcon', function () {
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
                    a = u.createElement(te.Z, { Icon: ce['default'], color: 'neutral', size: n, style: me.searchIcon })
                  return u.createElement(
                    re.Z,
                    { avatarCell: a, avatarSize: n, cellStyle: me.bodyColumn },
                    u.createElement(R.ZP, { numberOfLines: 1, withHashflags: !0 }, r),
                    u.createElement(k.ZP, {
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
                    recentSearchType: t === S.Hk.RecentSearch ? S.g2.Keyword : void 0,
                  }
                },
              },
            ]),
            r
          )
        })(u.Component),
        me = p.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        })
      var fe = pe
      var ye = (function (e) {
          ;(0, l.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) {
              a[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, d.Z)((0, s.Z)(e), '_renderSearchItem', function () {
                var t = e.props,
                  r = t.index,
                  n = t.item,
                  a = t.onItemClick
                return n.keyword
                  ? u.createElement(fe, {
                      category: n.category,
                      onRemove: e._handleOnRemove,
                      query: n.keyword.query,
                      ref: e._handleItemRef,
                    })
                  : n.user
                  ? u.createElement(W, {
                      id: n.user.id || '',
                      index: r,
                      onItemClick: a,
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                      style: ve.itemPadding,
                    })
                  : n.topic
                  ? u.createElement(ie, {
                      description: n.topic.description || '',
                      id: n.topic.id,
                      name: n.topic.name || '',
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                    })
                  : n.event
                  ? u.createElement(ee, {
                      id: n.event.id,
                      image: n.event.image || { url: '', height: 0, width: 0 },
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                      supportText: n.event.supportText || '',
                      title: n.event.title || '',
                    })
                  : null
              }),
              (0, d.Z)((0, s.Z)(e), '_handleItemRef', function (t) {
                e._itemRef = t
              }),
              (0, d.Z)((0, s.Z)(e), '_handleOnRemove', function (t) {
                var r = e.props,
                  n = r.index,
                  a = r.item
                ;(0, r.onRemoveQuery)(a, n), t.stopPropagation()
              }),
              (0, d.Z)((0, s.Z)(e), '_handleOnClick', function () {
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
                  return u.createElement(
                    P.Z,
                    {
                      accessibilityRole: 'option',
                      accessibilitySelected: !!t,
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [ve.root, t && ve.focused, !(null != r && r.user) && ve.itemPadding],
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
        })(u.Component),
        ve = p.Z.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        })
      var ge = ye
      var Se = r(24949),
        be = r(424208),
        Ze = r(663140),
        Ce = r(923335),
        _e = r(671896),
        xe = r(233500),
        Ie = r(823803)
      function Ee(e) {
        return (
          (0, Ze.VZ)(e, Ze.ZP.GenericUserNotFound) ||
          (0, Ze.VZ)(e, Ze.ZP.OtherUserSuspended) ||
          (0, Ze.VZ)(e, Ze.ZP.AddressBookLookupNotFound)
        )
      }
      var we = (0, Se.P1)(_e.Ww, U.ZP.selectFetchStatuses, function (e, t) {
          var r = (0, F.Z)(e, function (e) {
            var r,
              n = null === (r = e.user) || void 0 === r ? void 0 : r.id
            return n && t[n] ? { id: n, fetchStatus: t[n] } : void 0
          })
          return (0, be.Z)(r, function (e) {
            return e.fetchStatus
          })
        }),
        Re = (0, Se.P1)(we, function (e) {
          var t
          return (null !== (t = e[Ie.ZP.FAILED]) && void 0 !== t ? t : []).map(function (e) {
            return e.id
          })
        }),
        ke = (0, Se.P1)(we, U.ZP.selectErrors, function (e, t) {
          var r,
            n,
            a,
            o = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : [],
            i = null !== (n = e[Ie.ZP.LOADED]) && void 0 !== n ? n : [],
            s = null !== (a = e[Ie.ZP.LOADING]) && void 0 !== a ? a : [],
            l = o.filter(function (e) {
              var r,
                n = e.id
              return !Ee(null !== (r = t[n]) && void 0 !== r ? r : {})
            })
          return s.length > 0 ? Ie.ZP.LOADING : i.length > 0 ? Ie.ZP.LOADED : l.length > 0 ? Ie.ZP.FAILED : Ie.ZP.NONE
        }),
        Te = (0, Se.P1)(we, U.ZP.selectErrors, function (e, t) {
          var r,
            n = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : []
          return (0, F.Z)(n, function (e) {
            var r
            if (Ee(null !== (r = t[e.id]) && void 0 !== r ? r : {})) return e.id
          })
        }),
        Fe = (0, Se.P1)(xe.as, function (e) {
          return e.map(function (e) {
            return { keyword: { query: e.query }, savedSearchId: e.id_str, category: S.Hk.SavedSearch }
          })
        }),
        Le = (0, Se.P1)(_e.Ww, function (e) {
          return e.map(function (e) {
            return (0, n.Z)((0, n.Z)({}, e), {}, { category: S.Hk.RecentSearch })
          })
        })
      var De = (0, B.Z)()
        .propsFromState(function () {
          return {
            isRecentSearchDataLoaded: _e.H$,
            recentSearches: Le,
            usersFetchStatus: ke,
            invalidRecentSearchUserIds: Te,
            failedRecentSearchUserIds: Re,
            savedSearches: Fe,
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
            l = i !== Ie.ZP.LOADING && n && s ? Ie.ZP.LOADED : i
          return {
            failedRecentSearchUserIds: t,
            invalidRecentSearchUserIds: r,
            recentSearches: a,
            fetchStatus: l,
            savedSearches: o,
          }
        })
        .propsFromActions(function () {
          return {
            clearAll: _e.qF,
            createLocalApiErrorHandler: (0, Ce.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
            deleteSavedSearch: xe.k9,
            fetchRecentSearchesIfNeeded: _e.OB,
            fetchSavedSearchesIfNeeded: xe.l9,
            fetchUsersIfNeeded: U.ZP.fetchManyIfNeeded,
            fetchUsersPresenceIfNeeded: z.ZP.fetchManyIfNeeded,
            removeQuery: _e.hj,
          }
        })
        .withAnalytics({ element: 'typeahead' })
      var Pe = r(950617),
        Ae = r(785693),
        He = f().ee295fbe,
        Be = f().a2c1b222,
        ze = { headline: f().f45c4250, text: f().caae4dda, confirmButtonLabel: f().dbd5d400 },
        Ue = f().a8d68f62,
        Oe = f().c6530778,
        Me = f().e047b8fa,
        Ne = ['event', 'keyword', 'topic', 'user'],
        Qe = (function (e) {
          ;(0, l.Z)(r, e)
          var t = (0, c.Z)(r)
          function r(e, a) {
            var i
            return (
              (0, o.Z)(this, r),
              (i = t.call(this, e, a)),
              (0, d.Z)((0, s.Z)(i), '_getRecentSearchItems', function () {
                var e = i.props,
                  t = e.failedRecentSearchUserIds,
                  r = e.recentSearches.filter(function (e) {
                    return e.user && Ne.includes('user')
                      ? t.indexOf(e.user.id) < 0
                      : Object.keys(e).some(function (e) {
                          return Ne.includes(e)
                        })
                  })
                return r.length > 15 ? r.slice(0, 15) : r
              }),
              (0, d.Z)((0, s.Z)(i), '_render', function () {
                var e = i.props,
                  t = e.domId,
                  r = e.savedSearches,
                  n = 0 === i._getNumOfSearchItems(),
                  a = i._getRecentSearchItems()
                return n
                  ? u.createElement(
                      h.Z,
                      { style: Ve.emptyState, testID: Ae.Z.typeaheadEmptySearch },
                      u.createElement(
                        R.ZP,
                        { align: 'center', color: 'gray700' },
                        i.context.featureSwitches.isTrue('rweb_lists_global_search_enabled') ? Be : He,
                      ),
                    )
                  : u.createElement(
                      h.Z,
                      { accessibilityRole: 'listbox', nativeID: t },
                      a.length > 0
                        ? u.createElement(
                            u.Fragment,
                            null,
                            u.createElement(
                              h.Z,
                              { style: Ve.header, testID: Ae.Z.typeaheadRecentSearchesHeader },
                              u.createElement(R.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Ue),
                              u.createElement(
                                k.ZP,
                                {
                                  onBlur: i._handleClearAllBlur,
                                  onFocus: i._handleClearAllFocus,
                                  onPress: i._handleClearAllClick,
                                  ref: i._setClearAllButtonRef,
                                  size: 'xSmall',
                                  type: 'brandText',
                                },
                                Me,
                              ),
                            ),
                            a.map(function (e, t) {
                              return i._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      r.length > 0
                        ? u.createElement(
                            u.Fragment,
                            null,
                            u.createElement(
                              h.Z,
                              {
                                accessibilityHidden: !0,
                                style: [Ve.header, Ve.borderTop],
                                testID: Ae.Z.typeaheadSavedSearchesHeader,
                              },
                              u.createElement(R.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Oe),
                            ),
                            i._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              (0, d.Z)((0, s.Z)(i), '_renderRecentSearchItem', function (e, t) {
                var r = i.props.ariaDescendantId,
                  n = i.state.focusIndex === t
                return u.createElement(ge, {
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
              (0, d.Z)((0, s.Z)(i), '_chooseKeyType', function (e, t) {
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
              (0, d.Z)((0, s.Z)(i), '_renderSavedSearches', function () {
                var e = i.props,
                  t = e.ariaDescendantId,
                  r = e.savedSearches,
                  n = i.state.focusIndex,
                  a = i._getRecentSearchItems(),
                  o = (0, E.Z)(r)
                return (
                  o.reverse(),
                  u.createElement(
                    h.Z,
                    { testID: Ae.Z.typeaheadSavedSearchesContainer },
                    o.map(function (e, r) {
                      var o = n === r + a.length
                      return u.createElement(ge, {
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
              (0, d.Z)((0, s.Z)(i), '_getNumOfSearchItems', function () {
                var e = i.props.savedSearches,
                  t = i._getRecentSearchItems()
                return e.length + t.length
              }),
              (0, d.Z)((0, s.Z)(i), '_handleUsersRetry', function () {
                i._fetchUsersDetailsIfNeeded()
              }),
              (0, d.Z)((0, s.Z)(i), '_fetchUsersDetailsIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchUsersIfNeeded,
                  n = e.fetchUsersPresenceIfNeeded,
                  a = e.invalidRecentSearchUserIds,
                  o = e.recentSearches,
                  s = i.context,
                  l = s.featureSwitches,
                  c = s.viewerUserId,
                  d = (function (e, t) {
                    return (0, F.Z)(e, function (e) {
                      var r,
                        n = null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id
                      if (n && t.indexOf(n) < 0) return n
                    })
                  })(o, a)
                r(d)['catch'](t({})),
                  c && l.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && n(d)['catch'](t({}))
              }),
              (0, d.Z)((0, s.Z)(i), '_handleRemoveQuery', function (e, t) {
                var r = i.props,
                  n = r.analytics,
                  a = r.removeQuery
                switch (e.category) {
                  case S.Hk.RecentSearch:
                    var o = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    a(o), i._resetFocus()
                    var s = g.Z.forRecentSearchResult(o, t),
                      l = i._handleRemoveAction(e)
                    s && n.scribe({ action: l, data: { items: [s] } })
                    break
                  case S.Hk.SavedSearch:
                    i.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              (0, d.Z)((0, s.Z)(i), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              (0, d.Z)((0, s.Z)(i), '_handleClearAllBlur', function () {
                i.setState({ clearAllButtonHasFocus: !1 })
              }),
              (0, d.Z)((0, s.Z)(i), '_handleClearAllFocus', function () {
                i.setState({ clearAllButtonHasFocus: !0 })
              }),
              (0, d.Z)((0, s.Z)(i), '_handleClearAllClick', function () {
                i.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              (0, d.Z)((0, s.Z)(i), '_handleOnClearAllConfirm', function () {
                var e = i.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), i.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (0, d.Z)((0, s.Z)(i), '_handleOnClearAllCancel', function () {
                i.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (0, d.Z)((0, s.Z)(i), '_handleOnDeleteSavedSearchConfirm', function () {
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
                  var l = s && g.Z.forSavedSearchResult(s.keyword.query, o)
                  l && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [l] } })
                }
                i.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (0, d.Z)((0, s.Z)(i), '_handleOnDeleteSavedSearchCancel', function () {
                i.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (0, d.Z)((0, s.Z)(i), '_handleOnItemClick', function (e, t) {
                var r = i.props,
                  n = r.onDismiss
                ;(0, r.onItemClick)(e, t), i._scribeClick(e, t), n && n()
              }),
              (0, d.Z)((0, s.Z)(i), '_scribeRecentSearchImpression', function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.recentSearches
                if (r && r.length) {
                  var n = (0, F.Z)(r, function (e, t) {
                    return g.Z.forRecentSearchResult(e, t)
                  })
                  t.scribe({ action: 'impression', data: { items: n } })
                }
              }),
              (0, d.Z)((0, s.Z)(i), '_scribeSavedSearchImpression', function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.savedSearches
                if (r && r.length) {
                  var n = (0, F.Z)(r, function (e, t) {
                    return g.Z.forSavedSearchResult(e.keyword.query, t)
                  })
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: n } })
                }
              }),
              (0, d.Z)((0, s.Z)(i), '_scribeClick', function (e, t) {
                var r = i.props.analytics
                switch (e.category) {
                  case S.Hk.SavedSearch:
                    var a = g.Z.forSavedSearchResult(e.query, t)
                    r.scribe({ element: 'typeahead', action: 'click', data: { targets: [a] } })
                    break
                  case S.Hk.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === S.g2.User
                          ? { user: { type: S.g2.User, id: e.query } }
                          : e.recentSearchType === S.g2.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: (0, n.Z)((0, n.Z)({}, e.queryMetadata), {}, { type: S.g2.Event, id: e.query }) }
                          : e.recentSearchType === S.g2.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: (0, n.Z)((0, n.Z)({}, e.queryMetadata), {}, { type: S.g2.Topic, id: e.query }) }
                          : { keyword: { type: S.g2.Keyword, query: e.query } })
                    var s = o && g.Z.forRecentSearchResult(o, t)
                    s && r.scribe({ action: 'click', data: { targets: [s] } })
                }
              }),
              (0, d.Z)((0, s.Z)(i), '_setClearAllButtonRef', function (e) {
                i._clearAllButtonRef = e
              }),
              (0, d.Z)((0, s.Z)(i), '_setFocusedItemRef', function (e) {
                ;(i._focusedItemRef = e),
                  e &&
                    i._shouldScrollToFocusedItem &&
                    ((0, D.up)(i._getScrollParent(), i._getFocusedItem()), (i._shouldScrollToFocusedItem = !1))
              }),
              (0, d.Z)((0, s.Z)(i), 'hasFocusedItem', function () {
                return i._getNumOfSearchItems() > 0
              }),
              (0, d.Z)((0, s.Z)(i), 'deleteFocusedItem', function () {
                if (i.hasFocusedItem()) {
                  var e,
                    t,
                    r =
                      null === (e = i._focusedItemRef) || void 0 === e || null === (t = e.props) || void 0 === t
                        ? void 0
                        : t.item
                  if (r) return i._handleRemoveQuery(r, i.state.focusIndex), !0
                }
                return !1
              }),
              (0, d.Z)((0, s.Z)(i), 'selectFocusedItem', function () {
                if (i.hasFocusedItem()) {
                  var e = i._focusedItemRef && i._focusedItemRef.searchItemData
                  e && i._handleOnItemClick(e, i.state.focusIndex)
                }
              }),
              (0, d.Z)((0, s.Z)(i), '_setFocusIndex', function (e, t) {
                var r = i.props.onItemFocusChanged
                ;(i._shouldScrollToFocusedItem = t), i.setState({ focusIndex: e }), r && r()
              }),
              (0, d.Z)((0, s.Z)(i), '_resetFocus', function () {
                i._setFocusIndex(-1)
              }),
              (0, d.Z)((0, s.Z)(i), 'focusNext', function () {
                var e = i.state.focusIndex,
                  t = i._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e + 1 >= t ? 0 : e + 1
                  i._setFocusIndex(r, !0)
                }
              }),
              (0, d.Z)((0, s.Z)(i), 'focusPrevious', function () {
                var e = i.state.focusIndex,
                  t = i._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e - 1 < 0 ? t - 1 : e - 1
                  i._setFocusIndex(r, !0)
                }
              }),
              (0, d.Z)((0, s.Z)(i), 'navigateNext', function () {
                if (i._clearAllButtonRef && !i.state.clearAllButtonHasFocus) return i._clearAllButtonRef
              }),
              (0, d.Z)((0, s.Z)(i), 'navigatePrevious', function () {}),
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
                  return u.createElement(
                    h.Z,
                    { style: r },
                    u.createElement(L.Z, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? u.createElement(T.Z, {
                          confirmButtonLabel: ze.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: ze.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Ae.Z.deleteRecentSearchesDialog,
                          text: ze.text,
                        })
                      : null,
                    o
                      ? u.createElement(Pe.Z, {
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
                    var e = (0, D.rP)(w.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function value() {
                  var e = this._focusedItemRef && w.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            r
          )
        })(u.Component)
      ;(0, d.Z)(Qe, 'contextType', _.rC)
      var Ve = p.Z.create(function (e) {
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
      var qe = De.forwardRef(Qe)
      var je = (0, B.Z)()
        .propsFromActions(function () {
          return { addQuery: _e.DI }
        })
        .withAnalytics({ component: 'search_box' })
      var We = r(196234),
        Ke = r(702847),
        Ge = function Ge(e, t) {
          return U.ZP.select(e, t.userId)
        }
      var Ye = function Ye(e) {
        var t = e.user,
          r = e.userId,
          n = u.useState(!1),
          a = (0, We.Z)(n, 2),
          o = a[0],
          i = a[1],
          s = u.useContext(_.rC).featureSwitches.isTrue('follow_nudge_search_enabled')
        return (
          u.useEffect(
            function () {
              s && t && !t.following && i(!0)
            },
            [t, s],
          ),
          o ? u.createElement(Ke.C, { isFollowNudge: !0, showRelationshipChangeConfirmation: !0, userId: r }) : null
        )
      }
      var $e = (0, B.Z)().propsFromState(function () {
          return { user: Ge }
        })(u.memo(Ye)),
        Je = 'SearchBox_Search_Input'
      var Xe = f().a9ae1e78,
        et = f().hbc99b03,
        tt = /^(\w+)$/,
        rt = [b.my.Events, b.my.Users, b.my.Topics],
        nt = [b.my.Events, b.my.Users, b.my.Topics, b.my.Lists],
        at = function at(e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        ot = (function (e) {
          ;(0, l.Z)(r, e)
          var t = (0, c.Z)(r)
          function r(e, i) {
            var l, c
            return (
              (0, o.Z)(this, r),
              (c = t.call(this, e, i)),
              (0, d.Z)((0, s.Z)(c), '_renderSearchBoxEmptyState', function (e) {
                return u.createElement(qe, (0, a.Z)({}, e, { onItemClick: c._handleSearchItemClick }))
              }),
              (0, d.Z)((0, s.Z)(c), '_renderSearchUserDecoration', function (e) {
                e.user
                var t = e.userId,
                  r = c.context.viewerUserId
                return r && t !== r ? u.createElement($e, { userId: t }) : null
              }),
              (0, d.Z)((0, s.Z)(c), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  r = e.link,
                  a = e.query,
                  o = e.queryMetadata,
                  i = e.recentSearchType,
                  s = c.props.addQuery
                t === S.Hk.SavedSearch
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !1, src: Z.Z.SavedSearchClick })
                  : i === S.g2.Keyword
                  ? c._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: Z.Z.RecentSearchClick })
                  : i === S.g2.Event
                  ? (c._routeTransition({ pathname: '/i/events/'.concat(a) }),
                    o && o.title && s({ event: (0, n.Z)((0, n.Z)({}, o), {}, { id: a, type: S.g2.Event }) }))
                  : i === S.g2.Topic
                  ? (c._routeTransition({ pathname: '/i/topics/'.concat(a) }),
                    o && o.name && s({ topic: (0, n.Z)((0, n.Z)({}, o), {}, { id: a, type: S.g2.Topic }) }))
                  : r &&
                    (c._routeTransition({ pathname: '/'.concat(r), userId: a }),
                    s({ user: { id: a, type: S.g2.User } }))
              }),
              (0, d.Z)((0, s.Z)(c), '_handleSearchShortcut', function (e) {
                var t = c._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              (0, d.Z)((0, s.Z)(c), '_getUserExactMatch', function (e) {
                e.hasResults
                var t = e.isLoaded,
                  r = e.query,
                  n = at(r)
                if (t && n.match(tt))
                  return {
                    id: ''.concat(r, '_no_result_user'),
                    type: b.El.NoResult,
                    data: { text: et({ screenName: n }), type: 'user' },
                  }
              }),
              (0, d.Z)((0, s.Z)(c), '_handleOnDismiss', function () {
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
              (0, d.Z)((0, s.Z)(c), '_handleOnFocus', function () {
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
              (0, d.Z)((0, s.Z)(c), '_handleChange', function (e) {
                c.setState({ query: e })
              }),
              (0, d.Z)((0, s.Z)(c), '_handleTypeaheadSubmit', function () {
                var e = c.state,
                  t = e.items,
                  r = e.query,
                  n = c.props.analytics
                ;/^\s*$/.test(r) ||
                  (n.scribe({
                    action: 'search',
                    data: { items: g.Z.forTypeaheadResults(t), search_details: { query: r } },
                  }),
                  c._submitQuery({ query: r, shouldAddToRecentSearch: !0 }))
              }),
              (0, d.Z)((0, s.Z)(c), '_handleItemClick', function (e, t) {
                var r = c.props.addQuery,
                  n = c.state.query
                switch (e.type) {
                  case b.El.Event:
                    e.data && e.data.url
                      ? c._routeTransition({ pathname: v.ZP.parseInternalUrl(e.data.url) })
                      : c._submitQuery({ query: e.data.topic, src: Z.Z.TypeaheadClick })
                    break
                  case b.El.Hashtag:
                  case b.El.Topic:
                    c._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: Z.Z.TypeaheadClick })
                    break
                  case b.El.List:
                    c._routeTransition({ pathname: '/i/lists/'.concat(e.id) })
                    break
                  case b.El.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? c._routeTransition({ pathname: '/'.concat(at(n)) })
                      : 'topic' === a &&
                        c._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: Z.Z.TypeaheadClick })
                    break
                  case b.El.User:
                    if (e.data.id_str) r({ user: { id: e.data.id_str, type: S.g2.User } })
                    c._routeTransition({ pathname: '/'.concat(e.data.screen_name), userId: e.data.id_str })
                }
              }),
              (0, d.Z)((0, s.Z)(c), '_handleItemsChanged', function (e) {
                c.setState({ items: e })
              }),
              (0, d.Z)((0, s.Z)(c), '_routeTransition', function (e) {
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
              (0, d.Z)((0, s.Z)(c), '_submitQuery', function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  n = void 0 !== r && r,
                  a = e.src,
                  o = void 0 === a ? Z.Z.Typed : a,
                  i = c.props,
                  s = i.addQuery,
                  l = i.mode,
                  d = i.onSubmit,
                  u = i.searchFilters,
                  h = i.searchRoute
                ;(d && d(t, o, c.state.lastSubmittedQuery === t), n) && s({ keyword: { query: t, type: S.g2.Keyword } })
                var p = (0, S.F_)({ query: t, querySrc: o, mode: l, searchFilters: u })
                c._routeTransition({ pathname: h, params: p, src: o }), c.setState({ lastSubmittedQuery: t })
              }),
              (0, d.Z)((0, s.Z)(c), '_setInputRef', function (e) {
                c._inputRef = e
              }),
              (c.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: (0, y.B)(null === (l = e.location.query) || void 0 === l ? void 0 : l.q),
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
                    (this._unregisterSearchShortcutHandler = (0, x.UJ)(this._handleSearchShortcut))
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
                    l = this.props.initialValue || s,
                    c = !!a.state && !!a.state.searchFocused
                  return u.createElement(
                    h.Z,
                    { style: it.root },
                    u.createElement(I['default'], {
                      filter: this.context.featureSwitches.isTrue('rweb_lists_global_search_enabled') ? nt : rt,
                      forceVdlDisable: t,
                      getTopicExactMatch: i ? b.P0 : void 0,
                      getUserExactMatch: i ? this._getUserExactMatch : void 0,
                      initialValue: l,
                      inputStyle: it.input,
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
                      shouldAutoFocus: c,
                      shouldClearOnSelect: !0,
                      shouldDeferPrefetch: !0,
                      source: b._4.SearchBox,
                      testID: Je,
                      withFixedPositioning: !0,
                      withFocusStyling: !0,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(u.Component)
      ;(0, d.Z)(ot, 'defaultProps', { initialValue: '', placeholder: Xe, searchRoute: '/search', forceVdlDisable: !0 }),
        (0, d.Z)(ot, 'contextType', _.rC)
      var it = p.Z.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      var st = (0, C.ZP)(je(ot))
    },
    233500: function _(e, t, r) {
      r.d(t, {
        GL: function GL() {
          return S
        },
        as: function as() {
          return g
        },
        k9: function k9() {
          return b
        },
        l9: function l9() {
          return Z
        },
      })
      var n = r(256666),
        a = r(968079),
        o = r(133028),
        i = r(86522),
        s = (r(22144), r(818178), r(995342), r(358188), r(73439), r(472599)),
        l = r(526853),
        c = r(753392),
        d = r(823803),
        u = r(467935),
        h = 'savedSearches',
        p = { fetchStatus: d.ZP.NONE, savedSearches: [] },
        m = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        f = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        y = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t) return e
        switch (t.type) {
          case m.SUCCESS:
            var r = t.payload,
              n = Array.isArray(r)
            return (
              n ||
                (0, s.ZP)('Saved search results are not type array', {
                  extra: { savedSearchResultsType: (0, i.Z)(r) },
                }),
              (0, o.Z)((0, o.Z)({}, e), {}, { fetchStatus: d.ZP.LOADED, savedSearches: n && r ? r : [] })
            )
          case m.FAILURE:
            return (0, o.Z)((0, o.Z)({}, e), {}, { fetchStatus: d.ZP.FAILED })
          case f.SUCCESS:
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              { savedSearches: t.payload ? [].concat((0, a.Z)(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case y.SUCCESS:
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
      l.Z.register((0, n.Z)({}, h, v))
      var g = function g(e) {
          return e.savedSearches.savedSearches
        },
        S = function S(e) {
          return function (t, r, n) {
            var a = n.api
            return (0, c._O)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: f,
              context: 'SAVE_SEARCH',
            })
          }
        },
        b = function b(e) {
          return function (t, r, n) {
            var a = n.api
            return (0, c._O)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
              actionTypes: y,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        Z = function Z() {
          return function (e, t, r) {
            r.api
            var n = t()
            if (!(0, u.Qb)(n)) return Promise.resolve()
            var a =
              (function (e) {
                return e.savedSearches.fetchStatus
              })(n) === d.ZP.LOADED
            return a
              ? Promise.resolve()
              : e(function (e, t, r) {
                  var n = r.api
                  return (0, c._O)(e, { request: n.SavedSearches.fetch, params: {} })({
                    actionTypes: m,
                    context: 'FETCH_SAVED_SEARCHES',
                  })
                })
          }
        }
    },
    286928: function _(e, t, r) {
      r.d(t, {
        ZP: function ZP() {
          return p
        },
        cY: function cY() {
          return h
        },
        vj: function vj() {
          return s
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
          r(492028),
          r(894668)),
        o = r(829122),
        i = r(791191),
        s = 30,
        l = (0, o.ZP)({
          namespace: 'userPresence',
          entityIsComplete: function entityIsComplete(e) {
            return e.expiry > Date.now()
          },
        }),
        c = (0, o.tb)(l, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.AudioSpacesPresence.fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        d = (0, o.Nr)(l, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.AudioSpacesPresence.fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        u = (0, n.Z)((0, n.Z)((0, n.Z)({}, l), c), d),
        h = function h(e, t) {
          var r = u.select(e, t),
            n = r ? r.spaces : void 0
          return (
            n && {
              presenceRingType: 'space',
              link: {
                pathname: (0, a.e)(n.live_content.audiospace.broadcast_id),
                state: { origin: 'audiospace_ring' },
              },
              spaceId: n.live_content.audiospace.broadcast_id,
            }
          )
        }
      var p = i.Z.register(u)
    },
    322150: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return T
        },
      })
      var n = r(807896),
        a = r(459740),
        o = r(709249),
        i = r(887371),
        s = r(580753),
        l = r(545754),
        c = r(486906),
        d = r(256666),
        u = (r(818178), r(108532), r(202784)),
        h = r(614983),
        p = r.n(h),
        m = r(325686),
        f = r(473228),
        y = r.n(f),
        v = r(928045),
        g = r(445877),
        S = r(16587),
        b = r(773036),
        Z = r(436934),
        C = r(229496),
        _ = r(973186),
        x = r(632070)
      var I = 'clearButton'
      var E = [
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
        w = 'legacyPill',
        R = 'pill',
        k = y().ae7f7656,
        T = (function (e) {
          ;(0, l.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            var e
            ;(0, o.Z)(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) {
              a[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, d.Z)((0, s.Z)(e), '_textFieldAPI', u.createRef()),
              (0, d.Z)((0, s.Z)(e), 'state', { hasContent: !1, isFocused: !1 }),
              (0, d.Z)((0, s.Z)(e), 'getInvisibleBorderStyle', function () {
                var t = e.props.invalid,
                  r = e.state.isFocused
                return [!t && !r && L.transparent]
              }),
              (0, d.Z)((0, s.Z)(e), 'getContainerStyle', function () {
                var t = e.props,
                  r = t.editable,
                  n = t.invalid,
                  a = t.multiline,
                  o = t.styleType,
                  i = e.state.isFocused
                switch (o) {
                  case w:
                    return [
                      !n && !i && L.transparent,
                      !i && B.legacyFadedGrayColor,
                      !a && F.infinite,
                      B.root,
                      n && L.invalid,
                      !n && i && L.legacyFocused,
                      i && B.legacyPilltransparentColor,
                      a && F.legacyRound,
                      !r && B.legacyDisabled,
                    ]
                  case R:
                    return [
                      !n && !i && L.unfocused,
                      !i && B.fadedGrayColor,
                      !a && F.infinite,
                      B.root,
                      B.pillRoot,
                      n && L.invalid,
                      !n && i && L.focused,
                      i && B.backgroundColor,
                      a && F.round,
                      !r && B.disabled,
                    ]
                  default:
                    return [L.none, B.root, B.selectionBackground]
                }
              }),
              (0, d.Z)((0, s.Z)(e), '_renderUnfocusedPlaceholder', function () {
                var t = e.props.appTextSize
                return u.createElement(
                  m.Z,
                  { style: B.placeholderView },
                  u.createElement(
                    Z.ZP,
                    { numberOfLines: 1, size: t, style: e.getUnfocusedStyles() },
                    e._isInputEmpty() ? e.props.placeholder : e.getValue(),
                  ),
                )
              }),
              (0, d.Z)((0, s.Z)(e), 'getUnfocusedStyles', function () {
                var t = e.props.Icon,
                  r = e.state.isFocused
                return [D.placeholderRoot, t && D.iconPadding, r && D.focused, !e._isInputEmpty() && D.textColor]
              }),
              (0, d.Z)(
                (0, s.Z)(e),
                '_getTextInputStyle',
                (0, S.Z)(function (t) {
                  return [e._getInputRootStyle(), t]
                }),
              ),
              (0, d.Z)((0, s.Z)(e), '_getInputRootStyle', function () {
                return e.props.styleType !== R
                  ? [D.root, e.props.isCompact && D.compact]
                  : [
                      D.pillRoot,
                      e.props.Icon && D.iconPadding,
                      e.state.isFocused && D.focused,
                      !e.props.multiline && D.safariFirefoxNoMargin,
                    ]
              }),
              (0, d.Z)((0, s.Z)(e), '_handleLexicalChange', function (t) {
                var r,
                  n,
                  a = e.state.isFocused
                e.setState({ hasContent: t.length > 0 }),
                  a || e.setState({ isFocused: !0 }),
                  e.props.lexicalInputContext && (null === (r = (n = e.props).onChange) || void 0 === r || r.call(n, t))
              }),
              (0, d.Z)((0, s.Z)(e), '_handleBlur', function () {
                var t = e.props.onBlur
                e.setState({ isFocused: !1 }), t && t()
              }),
              (0, d.Z)((0, s.Z)(e), '_handleClear', function (t) {
                var r
                e.props.focusOnClear && e.focus(), null === (r = e._textFieldAPI.current) || void 0 === r || r.clear()
              }),
              (0, d.Z)((0, s.Z)(e), '_handlePlainChange', function (t) {
                var r,
                  n,
                  a = e.state.isFocused
                e.setState({ hasContent: e.getValue().length > 0 }),
                  e.props.richTextInputContext ||
                    e.props.lexicalInputContext ||
                    (a || e.setState({ isFocused: !0 }),
                    null === (r = (n = e.props).onChange) || void 0 === r || r.call(n, t))
              }),
              (0, d.Z)((0, s.Z)(e), '_handleRichChange', function (t) {
                var r,
                  n,
                  a = e.state.isFocused
                e.setState({ hasContent: e.getValue().length > 0 }),
                  e.props.richTextInputContext &&
                    (a || e.setState({ isFocused: !0 }),
                    null === (r = (n = e.props).onChange) || void 0 === r || r.call(n, t))
              }),
              (0, d.Z)((0, s.Z)(e), '_handleFocus', function () {
                var t = e.props.onFocus
                e.setState({ isFocused: !0 }), t && t()
              }),
              (0, d.Z)((0, s.Z)(e), '_handleKeyPress', function (t) {
                var r = e.props,
                  n = r.multiline,
                  a = r.onKeyPress,
                  o = r.onSubmitEditing
                a && a(t),
                  t.isDefaultPrevented() || 'Enter' !== t.key || t.shiftKey || n || !o || (t.preventDefault(), o(t))
              }),
              (0, d.Z)((0, s.Z)(e), '_handleKeyDown', function (t) {
                var r = e.props.onKeyDown
                r && r(t)
              }),
              (0, d.Z)((0, s.Z)(e), '_handleKeyUp', function (t) {
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
                    l = t.lexicalInputContext,
                    c = t.onLayout,
                    d = t.richTextInputContext,
                    h = t.style,
                    p = t.styleType,
                    f = t.testID,
                    y = t.withClearButton,
                    v = this.state.isFocused
                  return (
                    (e = l ? this._renderLexicalInput() : d ? this._renderRichTextInput() : this._renderTextInput()),
                    u.createElement(
                      m.Z,
                      {
                        onBlur: this._handleBlur,
                        onFocus: this._handleFocus,
                        onLayout: c,
                        style: [this.getContainerStyle(), h],
                      },
                      u.createElement(
                        m.Z,
                        { style: p === R && this.getInvisibleBorderStyle() },
                        n,
                        u.createElement(
                          m.Z,
                          { style: B.textInputBox },
                          i ? s : null,
                          u.createElement(
                            m.Z,
                            {
                              accessibilityRole: 'label',
                              style: [B.textInput, this._isCentered() && B.pillTextInput],
                              testID: f && ''.concat(f, '_label'),
                            },
                            this._renderIcon(),
                            u.createElement(
                              m.Z,
                              { style: [B.fitText, this._isCentered() ? null : B.appTextLeft] },
                              u.createElement(
                                Z.ZP,
                                { size: r, style: [B.appText, v ? null : this._isCentered() ? D.hiddenStyle : null] },
                                e,
                              ),
                              v || !this._isCentered() ? null : this._renderUnfocusedPlaceholder(),
                            ),
                            u.createElement(
                              m.Z,
                              { style: [H.root, !!o && H.withEmojiPicker, this._isCentered() && _.Z.visuallyHidden] },
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
                key: '_isCentered',
                value: function value() {
                  var e = this.props,
                    t = e.leftAligned,
                    r = e.styleType,
                    n = this.state.isFocused
                  return r === R && !t && !n
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
                    o = [P.legacyRoot, a && P.legacyFocused, r],
                    i = [P.root, a && P.focused, r]
                  return t
                    ? u.createElement(m.Z, { style: H.leftIcon }, u.createElement(t, { style: n === R ? i : o }))
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
                      (0, a.Z)(e, E))
                  return u.createElement(
                    u.Fragment,
                    null,
                    b.ZP.isEdgeLegacy()
                      ? u.createElement('style', null, 'input[type=text]::-ms-clear { display: none; }')
                      : null,
                    u.createElement(
                      x.Z,
                      (0, n.Z)({}, o, {
                        onBlur: this._handleBlur,
                        onChange: this._handlePlainChange,
                        onFocus: this._handleFocus,
                        onKeyDown: this._handleKeyDown,
                        onKeyPress: this._handleKeyPress,
                        onKeyUp: this._handleKeyUp,
                        placeholderTextColor: r || _.Z.theme.colors.gray700,
                        ref: this._textFieldAPI,
                        style: [this._getTextInputStyle(t), D.fullWidth],
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderRichTextInput',
                value: function value() {
                  var e = this.props.richTextInputContext
                  if ((p()(e, 'rich text input must have context'), !e.element || !e.editorState)) return null
                  var t = [D.root, D.rich, this.props.styleType === R && D.richRoot]
                  return u.createElement(
                    m.Z,
                    { style: [D.richContainer, this.props.isCompact && D.compact, this.props.inputStyle] },
                    u.createElement(e.element, {
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
                      placeholderTextColor: this.props.placeholderTextColor || _.Z.theme.colors.gray700,
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
                    l = e.lexicalInputContext,
                    c = e.multiline,
                    d = e.onFilesAdded,
                    h = e.placeholder,
                    p = e.spellCheck,
                    f = e.testID,
                    y = l || {},
                    v = y.element,
                    g = y.withDebug,
                    S = v
                  return u.createElement(
                    m.Z,
                    { style: [D.richContainer, s && D.compact, i] },
                    u.createElement(S, {
                      ariaActiveDescendant: t,
                      ariaAutocomplete: r,
                      ariaControls: n,
                      ariaLabel: a,
                      autoFocus: o,
                      multiline: c,
                      onChange: this._handleLexicalChange,
                      onFilesAdded: d,
                      onFocus: this._handleFocus,
                      placeholder: h,
                      ref: this._textFieldAPI,
                      spellCheck: p,
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
                    ? (this.props.styleType === R
                        ? (e = u.createElement(v['default'], { style: A.icon }))
                        : ((t = 'brandFilled'), (e = u.createElement(g['default'], { style: A.legacyIcon }))),
                      u.createElement(C.ZP, {
                        accessibilityLabel: k,
                        focusable: !0,
                        icon: e,
                        onPress: this._handleClear,
                        size: 'smallCompact',
                        style: A.root,
                        testID: I,
                        type: t,
                      }))
                    : u.createElement(m.Z, null)
                  var e, t
                },
              },
              {
                key: '_renderEmojiPicker',
                value: function value() {
                  var e = this.props.emojiPickerButton
                  return e ? u.createElement(m.Z, null, e) : null
                },
              },
              {
                key: '_renderCloseButton',
                value: function value() {
                  var e = this.props.closeButton
                  return e ? u.createElement(m.Z, { style: H.closeButton }, e) : null
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
                    r = 2 * _.Z.theme.spacesPx.space12,
                    n = 2 * _.Z.theme.borderWidthsPx.small
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
        })(u.Component)
      ;(0, d.Z)(T, 'defaultProps', {
        appTextSize: 'body',
        autoComplete: 'on',
        styleType: R,
        autoCorrect: !0,
        editable: !0,
        focusOnClear: !0,
        withClearButton: !1,
      }),
        (T.propTypes = {})
      var F = _.Z.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            legacyRound: { borderRadius: e.borderRadii.xLarge },
            round: { borderRadius: '20px' },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        L = _.Z.create(function (e) {
          return {
            transparent: { borderColor: e.colors.transparent, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            legacyFocused: { borderColor: e.colors.primary, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            invalid: { borderColor: e.colors.red500, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            none: { borderWidth: e.borderWidths.none },
            unfocused: { borderColor: e.colors.gray200, borderStyle: 'solid', borderWidth: e.borderWidths.small },
            focused: { borderColor: e.colors.primary, borderStyle: 'solid', borderWidth: e.borderWidths.medium },
          }
        }),
        D = _.Z.create(function (e) {
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
            hiddenStyle: { position: 'absolute', start: '-9999px' },
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
        P = _.Z.create(function (e) {
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
        A = _.Z.create(function (e) {
          return {
            root: { borderWidth: e.borderWidths.none, marginEnd: e.spaces.space12 },
            legacyIcon: { width: '10px', height: '10px', color: e.colors.cellBackground },
            icon: { color: e.colors.buttonBlack },
          }
        }),
        H = _.Z.create(function (e) {
          return {
            root: { display: 'flex', justifyContent: 'center' },
            withEmojiPicker: { display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' },
            closeButton: { flexGrow: 1 },
            leftIcon: { display: 'flex', justifyContent: 'center', cursor: 'default' },
          }
        }),
        B = _.Z.create(function (e) {
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
            pillTextInput: { justifyContent: 'center' },
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
          return _Z
        },
      })
      var n = r(709249),
        a = r(887371),
        o = r(545754),
        i = r(486906),
        s = r(256666),
        l = r(202784),
        c = r(325686),
        d = r(473228),
        u = r.n(d),
        h = r(285042),
        p = r(436934),
        m = r(973186),
        f = u().f1a1b791,
        y = u().if2bf8b4,
        v = u().f3624b5c,
        g = u().b4b3b113,
        S = u().be222050,
        b = u().hcbbe447,
        _Z = (function (e) {
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
                  return l.createElement(
                    c.Z,
                    { style: [C.root, n] },
                    l.createElement(h['default'], { style: [C.icon, t && C[t]] }),
                    l.createElement(p.ZP, { color: t, nativeID: r, size: 'subtext2' }, this._getPromotedLabel()),
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
                    l = t && o && t === o.id_str,
                    c = 'string' == typeof s && 'political' === s.toLowerCase(),
                    d = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    u = !(!a || 'POLITICAL' !== a.disclaimerType) || c,
                    h = !(!a || 'ISSUE' !== a.disclaimerType) || d,
                    p = (a || {}).removePromotedAttributionForPreroll
                  return (
                    r ||
                    (!i || l || p
                      ? u
                        ? v
                        : h
                        ? S
                        : y
                      : u
                      ? g({ fullName: i })
                      : h
                      ? b({ fullName: i })
                      : f({ fullName: i }))
                  )
                },
              },
            ]),
            r
          )
        })(l.Component)
      ;(0, s.Z)(_Z, 'defaultProps', { color: 'gray700' })
      var C = m.Z.create(function (e) {
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
        a = r(241487),
        o = r(473228),
        i = r.n(o),
        s = r(55269),
        l = r(81921),
        c = r(90649),
        d = r(240811),
        u = r(914481),
        h = r(517272),
        p = r(407307),
        m = r(106059),
        f = r(880166),
        y = r(440271),
        v = r(511258),
        g = r(45680),
        S = r(833131),
        b = r(575629),
        Z = r(27895),
        C = r(156538),
        _ = r(307742),
        x = r(225163),
        I = r(721783),
        E = r(436934),
        w = r(537800),
        R = r(973186),
        k = r(849376),
        T = i().ae408b76,
        F = i().j355f008,
        L = i().habf9678,
        D = i().db0798ed,
        P = i().dc716ec9,
        A = function A(e) {
          return n.createElement(E.ZP, { dir: a.Z.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        H = function H(e, t) {
          return t
            ? T
            : (function (e) {
                var t = A(e)
                return n.createElement(i().I18NFormatMessage, { $i18n: 'fcd931ed' }, t)
              })(e)
        },
        B = R.Z.create(function (e) {
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
          i = e.retweetData,
          E = e.text,
          T = e.topicData,
          U = e.userAvatarUrls,
          O = i || {},
          M = O.isSelfRetweet,
          N = O.name,
          Q = O.screenName,
          V = (function (e, t, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
              o = B[t],
              i = [r ? { color: R.Z.theme.colors[r] } : z.colorDeepGray, o],
              E = n.createElement(s['default'], { style: i }),
              T = n.createElement(l['default'], { style: i }),
              F = n.createElement(c['default'], { style: i }),
              L = n.createElement(d['default'], { style: i }),
              D = n.createElement(u['default'], { style: i }),
              P = n.createElement(h['default'], { style: z.circle }),
              A = n.createElement(p['default'], { style: i }),
              H = n.createElement(m['default'], { style: i }),
              U = n.createElement(f['default'], { style: i }),
              O = n.createElement(y['default'], { style: i }),
              M = n.createElement(v['default'], { style: i }),
              N = n.createElement(g['default'], { style: i }),
              Q = n.createElement(S['default'], { style: i }),
              V = n.createElement(b['default'], { style: i }),
              q = n.createElement(Z['default'], { style: i }),
              j = n.createElement(C['default'], { style: i }),
              W = n.createElement(_['default'], { style: i }),
              K = n.createElement(x['default'], { style: i }),
              G = n.createElement(w.Z, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              Y = n.createElement(I['default'], { style: i })
            switch (e) {
              case k.Q.Pin:
              case k.Q.ReplyPin:
                return E
              case k.Q.Retweet:
                return T
              case k.Q.Like:
                return F
              case k.Q.Follow:
                return L
              case k.Q.Moment:
                return D
              case k.Q.NewTweets:
                return P
              case k.Q.Reply:
              case k.Q.Conversation:
                return A
              case k.Q.Feedback:
                return H
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
                return W
              case k.Q.FollowFollowing:
                return j
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
            return { Icon: V, text: E || H(N, M), link: Q ? 'https://twitter.com/'.concat(Q) : void 0 }
          case k.Q.Pin:
            return { Icon: V, text: E || F }
          case k.Q.ReplyPin:
            return { Icon: V, text: L }
          case k.Q.Topic:
            return {
              Icon: V,
              accessibilityLabel:
                'Recommendation' === (null == T ? void 0 : T.functionalityType) ||
                'RecWithEducation' === (null == T ? void 0 : T.functionalityType)
                  ? P({ topicName: E })
                  : D({ topicName: E }),
              text: E ? A(E) : null,
              link: o,
            }
          default:
            return { Icon: V, text: E ? A(E) : null, link: o }
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
        l = r(256666),
        c = (r(472508), r(136728), r(108532), r(818178), r(202784)),
        d = r(325686),
        u = r(436934),
        h = r(137541),
        p = r(377089),
        m = r(973186),
        f = r(191062),
        y = r(868011),
        v = r(894963),
        g = r(849376),
        S = [
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
                    l = t.rightControl,
                    m = t.style,
                    f = t.testID,
                    y = t.textColor,
                    g = t.textSize,
                    b = t.topControl,
                    C = t.weight,
                    _ = (t.withBottomBorder, t.withLeftPadding),
                    x = (t.withTextCentered, (0, n.Z)(t, S)),
                    I = (0, v.Z)(x),
                    E = I.Icon,
                    w = I.accessibilityLabel,
                    R = I.link,
                    k = I.text,
                    T = c.createElement(
                      u.ZP,
                      { accessibilityLabel: w, color: y, nativeID: i, numberOfLines: 2, size: g, testID: f, weight: C },
                      k,
                    ),
                    F = this._getStyles(),
                    L = F.cellStyle,
                    D = F.viewStyle
                  return k
                    ? c.createElement(p.ZP.UseProps, null, function (t) {
                        return c.createElement(
                          c.Fragment,
                          null,
                          b || null,
                          c.createElement(
                            d.Z,
                            {
                              onLayout: s,
                              style: [m, D, t.socialContextRefreshEnabled() && !_ && Z.socialContextRefresh],
                            },
                            c.createElement(
                              h.Z,
                              {
                                avatarCell: E || (_ ? null : void 0),
                                avatarCellStyle: [
                                  o,
                                  Z.socialContextIconColumn,
                                  !_ && Z.unsetIconWidth,
                                  t.socialContextRefreshEnabled() && !_ && Z.socialContextRefreshIcon,
                                ],
                                avatarSize: r,
                                cellStyle: L,
                              },
                              c.createElement(
                                d.Z,
                                { style: Z.cellWrapper },
                                c.createElement(
                                  d.Z,
                                  {
                                    style: [
                                      Z.socialContextTextColumn,
                                      t.socialContextRefreshEnabled() && !_ && Z.socialContextRefreshTextColumn,
                                    ],
                                  },
                                  R ? e._renderLink(R, T) : T,
                                ),
                                l || null,
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
                    d = (i || {}).screenName,
                    h = c.createElement(u.ZP, { color: s, link: e, nativeID: a, onClick: o }, t)
                  return n === g.Q.Topic && l
                    ? c.createElement(f.Z, { topicId: l.topicId }, h)
                    : n === g.Q.Retweet && d
                    ? c.createElement(y.Z, { screenName: d }, h)
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
                    o = r === g.Q.TextOnly,
                    i = n ? [Z.bottomBorderMargin, !!t && Z.bottomBorder] : [],
                    s = n && !t ? [Z.bottomBorder] : []
                  return (
                    o && s.push(Z.topicContext),
                    a && s.push(Z.socialContextTextCentered),
                    { viewStyle: i, cellStyle: s }
                  )
                },
              },
            ]),
            r
          )
        })(c.PureComponent)
      ;(0, l.Z)(b, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var Z = m.Z.create(function (e) {
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
          return L
        },
      })
      var n = r(968079),
        a = r(133028),
        o = r(709249),
        i = r(887371),
        s = r(580753),
        l = r(545754),
        c = r(486906),
        d = r(256666),
        u = r(807896),
        h =
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
        p = r(614983),
        m = r.n(p),
        f = r(928316),
        y = r(890601),
        v = r(231461),
        g = r(981665),
        S = !!document.documentElement.currentStyle,
        b = {
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
        Z = [
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
        C = {},
        _ = document.createElement('textarea'),
        x = function x(e) {
          Object.keys(b).forEach(function (t) {
            e.style.setProperty(t, b[t], 'important')
          })
        }
      function I(e, t, r, n, a) {
        void 0 === r && (r = !1),
          void 0 === n && (n = null),
          void 0 === a && (a = null),
          null === _.parentNode && document.body.appendChild(_)
        var o = (function (e, t, r) {
          void 0 === r && (r = !1)
          if (r && C[t]) return C[t]
          var n = window.getComputedStyle(e)
          if (null === n) return null
          var a = Z.reduce(function (e, t) {
              return (e[t] = n.getPropertyValue(t)), e
            }, {}),
            o = a['box-sizing']
          if ('' === o) return null
          S &&
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
            l = { sizingStyle: a, paddingSize: i, borderSize: s, boxSizing: o }
          r && (C[t] = l)
          return l
        })(e, t, r)
        if (null === o) return null
        var i = o.paddingSize,
          s = o.borderSize,
          l = o.boxSizing,
          c = o.sizingStyle
        Object.keys(c).forEach(function (e) {
          _.style[e] = c[e]
        }),
          x(_),
          (_.value = e.value || e.placeholder || 'x')
        var d = -1 / 0,
          u = 1 / 0,
          h = _.scrollHeight
        'border-box' === l ? (h += s) : 'content-box' === l && (h -= i), (_.value = 'x')
        var p = _.scrollHeight - i,
          m = Math.floor(h / p)
        return (
          null !== n && ((d = p * n), 'border-box' === l && (d = d + i + s), (h = Math.max(d, h))),
          null !== a && ((u = p * a), 'border-box' === l && (u = u + i + s), (h = Math.min(u, h))),
          { height: h, minHeight: d, maxHeight: u, rowCount: Math.floor(h / p), valueRowCount: m }
        )
      }
      _.setAttribute('tab-index', '-1'), _.setAttribute('aria-hidden', 'true'), x(_)
      var E = function E() {},
        w = 0,
        R = (function (e) {
          function t(t) {
            var r
            return (
              ((r = e.call(this, t) || this)._onRef = function (e) {
                r._ref = e
                var t = r.props.inputRef
                'function' != typeof t ? (t.current = e) : t(e)
              }),
              (r._onChange = function (e) {
                r._controlled || r._resizeComponent(), r.props.onChange(e, (0, s.Z)(r))
              }),
              (r._resizeComponent = function (e) {
                void 0 === e && (e = E)
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
              (r._uid = w++),
              (r._controlled = void 0 !== t.value),
              (r._resizeLock = !1),
              r
            )
          }
          ;(0, g.Z)(t, e)
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
                  (0, v.Z)(e, ['inputRef', 'maxRows', 'minRows', 'onHeightChange', 'useCacheForDOMMeasurements']))
              return (
                (t.style = (0, u.Z)({}, t.style, { height: this.state.height })),
                Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height &&
                  (t.style.overflow = 'hidden'),
                (0, h.createElement)('textarea', (0, u.Z)({}, t, { onChange: this._onChange, ref: this._onRef }))
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
                  delete C[e]
                })(this._uid)
            }),
            t
          )
        })(h.Component)
      R.defaultProps = { inputRef: E, onChange: E, onHeightChange: E, useCacheForDOMMeasurements: !1 }
      var k = R
      var T = r(973186),
        F = ['text', 'search', 'url', 'tel', 'password']
      var L = h.forwardRef(function (e, t) {
        var r = e.onFocus,
          n = h.useCallback(
            function (e) {
              r && r()
            },
            [r],
          )
        return h.createElement(D, (0, u.Z)({}, e, { onFocus: n, ref: t }))
      })
      var D = (function (e) {
        ;(0, l.Z)(r, e)
        var t = (0, c.Z)(r)
        function r() {
          var e
          ;(0, o.Z)(this, r)
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) {
            a[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(a))),
            (0, d.Z)((0, s.Z)(e), '_onPaste', function (t) {
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
            (0, d.Z)((0, s.Z)(e), '_setTextInputRef', function (t) {
              e._textInputRef = t
            }),
            (0, d.Z)((0, s.Z)(e), '_checkForRenderProps', function () {
              var t = !Object.keys(e.props).some(function (e) {
                return e.includes('render')
              })
              m()(t, 'Must have no render props. See comment at top of file and RWEB-23660 for details.')
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
                  l = e.ariaOwns,
                  c = e.ariaRole,
                  d = e.autoCapitalize,
                  u = e.autoComplete,
                  h = e.autoCorrect,
                  p = e.autoFocus,
                  m = e.defaultValue,
                  f = e.editable,
                  v = e.inputMode,
                  g = e.max,
                  S = e.maxLength,
                  b = e.maxNumberOfLines,
                  Z = e.min,
                  C = e.multiline,
                  _ = e.name,
                  x = e.numberOfLines,
                  I = e.onBlur,
                  E = e.onChange,
                  w = e.onFocus,
                  R = e.onInput,
                  T = e.onKeyDown,
                  F = e.onKeyPress,
                  L = e.onKeyUp,
                  D = e.pattern,
                  A = e.placeholder,
                  H = e.placeholderTextColor,
                  B = e.returnKeyType,
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
                    'aria-owns': l,
                    autoCapitalize: d,
                    autoComplete: u,
                    autoCorrect: h ? 'on' : 'off',
                    autoFocus: p,
                    defaultValue: m,
                    disabled: !f,
                    inputMode: v,
                    max: g,
                    maxLength: S,
                    min: Z,
                    name: _,
                    onBlur: I,
                    onChange: E,
                    onFocus: w,
                    onInput: R,
                    onKeyDown: T,
                    onKeyPress: F,
                    onKeyUp: L,
                    pattern: D,
                    placeholder: A,
                    role: c,
                    spellCheck: z,
                    style: U,
                    testID: O,
                    value: e.value,
                  },
                  V = { maxRows: b || x, minRows: x, useCacheForDOMMeasurements: N },
                  q = [P.alignLeft],
                  j = { enterKeyHint: B, type: M },
                  W = [P.alignLeft],
                  K = C ? V : j,
                  G = C ? q : W,
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
                        style: [P.root, U, { placeholderTextColor: H }].concat((0, n.Z)(G)),
                      },
                    ),
                  ),
                  $ = C ? k : 'input'
                return (0, y.Z)($, Y)
              },
            },
            {
              key: '_getTextInputDOMNode',
              value: function value() {
                if (!this.textInputNode) {
                  var e = f.findDOMNode(this._textInputRef)
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
      })(h.PureComponent)
      ;(0, d.Z)(D, 'defaultProps', {
        autoComplete: 'off',
        autoCapitalize: 'sentences',
        editable: !0,
        numberOfLines: 2,
        spellCheck: 'true',
        type: 'text',
        useCacheForDOMMeasurements: !0,
      })
      var P = T.Z.create(function (e) {
        return {
          root: { appearance: 'none', boxSizing: 'border-box', resize: 'none', width: '100%' },
          alignLeft: { textAlign: 'start' },
        }
      })
    },
    988403: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return y
        },
      })
      var n = r(807896),
        a = r(459740),
        o = r(196234),
        i = r(202784),
        s = r(325686),
        l = r(473228),
        c = r.n(l),
        d = r(833131),
        u = r(971575),
        h = r(566970),
        p = r(973186),
        m = r(887191),
        f = ['accessibilityLabel', 'presenceRingType', 'spaceId']
      var y = function y(e) {
        var t = u.Z.useAnalytics(),
          r = i.useState(),
          s = (0, o.Z)(r, 2),
          l = s[0],
          c = s[1],
          d = !!(l && l > 70),
          p = e.accessibilityLabel,
          y = e.presenceRingType,
          g = (e.spaceId, (0, a.Z)(e, f)),
          S =
            p ||
            (function (e, t) {
              if ('space' === e) return b.activeSpace({ screenName: t })
              return
            })(y, e.screenName)
        return (
          i.useEffect(
            function () {
              if ('space' === y) t.scribe({ element: 'audiospace_ring', action: 'impression' })
            },
            [y],
          ),
          i.createElement(
            m['default'],
            (0, n.Z)({}, g, {
              BorderComponent: h.Z.Default,
              accessibilityLabel: S,
              avatarRef: function avatarRef(e) {
                if (e) {
                  var t = e.getBoundingClientRect()
                  t.width !== l && c(t.width)
                }
              },
              borderWidth: d ? 'large' : 'medium',
              decoration: i.createElement(v, { isWide: d, type: y }),
              gapWidth: d ? 'space4' : 'space2',
              onClick: function onClick() {
                if ('space' === y) t.scribe({ element: 'audiospace_ring', action: 'click' })
              },
              withLink: !0,
            }),
          )
        )
      }
      function v(e) {
        return 'space' === e.type ? i.createElement(g, e) : null
      }
      function g(e) {
        return i.createElement(
          s.Z,
          { style: [S.root, e.isWide ? S.rootWide : S.rootNarrow] },
          i.createElement(
            h.Z.Default,
            { style: [S.spaceGradient, e.isWide ? S.borderWide : S.borderNarrow] },
            i.createElement(d['default'], { style: S.spaceIcon }),
          ),
        )
      }
      var S = p.Z.create(function (e) {
          var t = e.spacesPx.space16 + e.spacesPx.space2,
            r = '100%',
            n = e.spacesPx.space4,
            a = e.spacesPx.space2
          return {
            root: {
              minWidth: t,
              minHeight: t,
              width: '30%',
              height: '30%',
              position: 'absolute',
              end: 0,
              bottom: 0,
              borderRadius: e.borderRadii.infinite,
              pointerEvents: 'none',
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
        b = { withoutUsernameFallback: c().b4cb0be2, activeSpace: c().g6520ddf }
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
        i = r(580753),
        s = r(545754),
        l = r(486906),
        c = r(256666),
        d = (r(22144), r(818178), r(326936), r(472508), r(374083), r(334115), r(200634), r(202784)),
        u = r(325686),
        h = r(35953),
        p = r(436934),
        m = r(137541),
        f = r(186454),
        y = r(525663),
        v = r(377089),
        g = r(77227),
        S = r(174062),
        b = r(641310),
        Z = r(309524),
        C = r(894963),
        _ = r(973186),
        x = r(887191),
        I = r(988403),
        E = r(954813),
        w = r(695995)
      var R = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        k = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          SubscribableUser: 'SubscribableUser',
        }),
        T = h.Z.createLayoutCache(),
        F = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            var e
            ;(0, a.Z)(this, r)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) {
              o[s] = arguments[s]
            }
            return (
              (e = t.call.apply(t, [this].concat(o))),
              (0, c.Z)((0, i.Z)(e), '_renderUserName', function () {
                var t = e.props,
                  r = t.affiliateBadgeInfo,
                  n = t.badgeContext,
                  a = t.disabledMessage,
                  o = t.displayNameLabel,
                  i = t.isBlocking,
                  s = t.isBlueVerified,
                  l = t.isDisabled,
                  c = t.isFollowedBy,
                  h = t.isProtected,
                  m = t.isVerified,
                  f = t.name,
                  y = t.onScreenNameClick,
                  v = t.promotedContent,
                  g = t.promotedItemType,
                  S = t.screenName,
                  b = t.screenNameSuffix,
                  Z = t.translatorType,
                  C = t.verifiedType,
                  _ = t.withFollowsYou,
                  x = t.withLink,
                  I = d.createElement(w.Z, {
                    affiliateBadgeInfo: r,
                    badgeContext: n,
                    displayNameLabel: o,
                    isBlueVerified: s,
                    isProtected: h,
                    isVerified: m,
                    name: f,
                    onLinkClick: y,
                    promotedContent: g === R.TWEET ? v : void 0,
                    screenName: S,
                    screenNameSuffix: b,
                    translatorType: Z,
                    verifiedType: C,
                    withFollowsYou: _ && c,
                    withHoverCard: !i && !l && x,
                    withLink: !l && x,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? d.createElement(
                      u.Z,
                      { style: L.disabledMessageContainer },
                      I,
                      d.createElement(p.ZP, { color: 'gray700' }, a),
                    )
                  : I
              }),
              (0, c.Z)((0, i.Z)(e), '_renderSocialContext', function () {
                var t = e.props,
                  r = t.avatarSize,
                  n = t.socialContext
                return n
                  ? d.createElement(v.ZP.UseProps, null, function (e) {
                      return d.createElement(Z.Z, {
                        avatarSize: r,
                        contextType: n.contextType,
                        iconSize: 'large',
                        link: n.link,
                        style: L.socialContext,
                        text: n.text,
                        weight: 'bold',
                        withLeftPadding: !0,
                      })
                    })
                  : null
              }),
              (0, c.Z)((0, i.Z)(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  r =
                    (t && (0, C.Z)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  n = r.Icon,
                  a = r.text
                return t
                  ? d.createElement(
                      u.Z,
                      { style: L.userTypeaheadSocialContext },
                      d.createElement(u.Z, { style: L.userTypeaheadSocialContextIcon }, n),
                      d.createElement(
                        p.ZP,
                        { color: 'gray700', numberOfLines: 1, style: L.userTypeaheadSocialContextText },
                        a,
                      ),
                    )
                  : null
              }),
              (0, c.Z)((0, i.Z)(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? d.createElement(g.Z, { label: t }) : null
              }),
              (0, c.Z)((0, i.Z)(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [k.UserDetailed, k.UserConcise, k.SubscribableUser].indexOf(t)
              }),
              (0, c.Z)((0, i.Z)(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              (0, c.Z)(
                (0, i.Z)(e),
                '_handleClick',
                y.Z.selectiveClickHandler(function (t) {
                  var r = e.props.onCellClick
                  t.preventDefault(), r && r()
                }),
              ),
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
                    l = e.bottomControl,
                    c = e.decoration,
                    h = e.displayMode,
                    p = e.isBlocking,
                    y = e.isDisabled,
                    v = e.onAvatarClick,
                    g = e.onCellClick,
                    Z = e.onScreenNameClick,
                    C = e.presenceIndicator,
                    _ = e.promotedContent,
                    E = e.promotedItemType,
                    w = e.screenName,
                    F = e.style,
                    D = e.testID,
                    P = e.userId,
                    A = e.withBottomSocialContext,
                    H = e.withDarkerInteractiveBackground,
                    B = e.withInteractiveStyling,
                    z = e.withLink,
                    U = e.withUsernameCenterAligned,
                    O = z && !p,
                    M = h === k.UserCompact || U,
                    N =
                      _ && E === R.USER && 'earned' !== (_.disclosure_type && _.disclosure_type.toLowerCase())
                        ? d.createElement(b.Z, { contentAuthorId: P, promotedContent: _, style: L.promotedIndicator })
                        : null,
                    Q = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: T,
                      onClick: v,
                      onHoverCardScreenNameClick: Z,
                      promotedContent: _,
                      screenName: w,
                      style: L.avatar,
                      uri: s,
                      withHoverCard: O,
                      withLink: z,
                      shape: o,
                    },
                    V = d.createElement(f.Z.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return C
                        ? d.createElement(I.Z, (0, n.Z)({}, Q, C, { size: t }))
                        : d.createElement(x['default'], (0, n.Z)({ size: t }, Q))
                    }),
                    q = 'boolean' == typeof t,
                    j = void 0 !== g,
                    W = (q ? 'radio' : j && 'button') || 'listitem',
                    K = this._renderUserName(),
                    G = this._renderHighlightedUserLabel(),
                    Y = this._renderBio(),
                    $ = G || Y || N || l,
                    J = d.createElement(
                      d.Fragment,
                      null,
                      G,
                      Y,
                      N,
                      l ? d.createElement(u.Z, { style: L.bottomControl }, l) : null,
                    )
                  return d.createElement(
                    S.Z,
                    {
                      accessibilityChecked: t,
                      accessibilityLabel: r,
                      accessibilityRole: W,
                      disabled: !!y,
                      focusable: q || j,
                      onClick: this._handleClick,
                      onKeyPress: this._handleKeyPress,
                      pointerEvents: y ? 'none' : void 0,
                      style: [L.root, F],
                      testID: D,
                      withDarkerInteractiveBackground: H,
                      withInteractiveStyling: null != B ? B : !!g,
                    },
                    A ? null : this._renderSocialContext(),
                    d.createElement(
                      m.Z,
                      {
                        avatarCell: V,
                        avatarCellStyle: [L.avatarColumn, M && L.bodyColumnCentered],
                        avatarSize: i,
                        cellStyle: [L.bodyColumn, M && L.bodyColumnCentered],
                      },
                      d.createElement(u.Z, { style: L.body }, K, c),
                      M ? null : J,
                      A ? this._renderUserTypeaheadSocialContext() : null,
                    ),
                    $ && M
                      ? d.createElement(
                          m.Z,
                          { avatarCell: null, avatarCellStyle: L.avatarColumn, cellStyle: L.bodyColumn },
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
                    ? d.createElement(E.Z, {
                        description: t,
                        entities: n,
                        isConcise: r === k.UserConcise,
                        style: L.bio,
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
        })(d.PureComponent)
      ;(0, c.Z)(F, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var L = _.Z.create(function (e) {
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
      var D = F
    },
    954813: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return l
        },
      })
      r(334115), r(200634), r(543450), r(818178)
      var n = r(202784),
        a = r(436934),
        o = r(96847),
        i = r(775275),
        s = r(749868)
      var l = function l(e) {
        var t = e.description,
          r = e.entities,
          l = e.isConcise,
          c = e.style,
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
              { dir: 'auto', numberOfLines: l ? 2 : void 0, style: c, testID: d },
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
            return c
          },
        })
      var n = r(133028),
        a = r(202784),
        o = r(890601),
        i = r(493987),
        s = r(473569),
        l = function l() {
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
      l.metadata = { width: 24, height: 24 }
      var c = l
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
                children: a.createElement('g', null, a.createElement('circle', { cx: '12', cy: '12', r: '10.3' })),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 6v6.72l5.19 1.73.63-1.9L13 11.28V6h-2z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
      var l = s
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
      var l = s
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
                    d: 'M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
    },
    914481: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
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
                  a.createElement('path', { d: 'M18.766 2H7.323l-4.8 12h5.324l-1.261 8.83L22.414 7h-6.648l3-5z' }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
                    d: 'M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
      var l = s
    },
  },
])

//# sourceMappingURL=WIPED
