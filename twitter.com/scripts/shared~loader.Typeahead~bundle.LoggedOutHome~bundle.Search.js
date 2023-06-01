'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  [
    'shared~loader.Typeahead~bundle.LoggedOutHome~bundle.Search',
    'icons/IconCircleFill-js',
    'icons/IconClockCircleFill-js',
    'icons/IconCloseNoMargin-js',
    'icons/IconCommunities-js',
    'icons/IconFeedback-js',
    'icons/IconFollowArrowLeft-js',
    'icons/IconFollowArrows-js',
    'icons/IconLightning-js',
    'icons/IconPin-js',
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
      var a = r(202784),
        n = r(484292),
        c = r(473228),
        i = r.n(c),
        o = r(785693),
        s = i().hffea05c,
        l = i().j037e374,
        d = i().d96cf7ce
      var u = function u(e) {
        var t = e.onCancel,
          r = e.onConfirm
        return a.createElement(n.Z, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: s,
          onCancel: t,
          onConfirm: r,
          testID: o.Z.deleteSavedSearchDialog,
          text: l,
        })
      }
    },
    785693: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return a
        },
      })
      var a = {
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
            return at
          },
          default: function _default() {
            return ct
          },
        })
      var a = r(133028),
        n = r(807896),
        c = r(709249),
        i = r(887371),
        o = r(580753),
        s = r(545754),
        l = r(486906),
        d = r(256666),
        u = (r(472508), r(326936), r(477950), r(74069), r(385940), r(136728), r(621850), r(202784)),
        h = r(325686),
        m = r(973186),
        f = r(473228),
        v = r.n(f),
        y = r(397871),
        p = r(331261),
        S = r(134615),
        Z = r(676275),
        g = r(760397),
        b = r(588027),
        _ = r(63899),
        C = r(76687),
        E = r(820604),
        I = r(974383),
        R = r(968079),
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
        x = r(436934),
        k = r(229496),
        T = r(484292),
        D = r(211469),
        L = r(872983),
        F = r(240159),
        A = (r(818178), r(334115), r(200634), r(174062)),
        P = r(819153),
        H = r(418958),
        B = r(392160),
        O = r(286928),
        U = r(157659),
        z = function z(e, t) {
          return U.ZP.select(e, t.id)
        },
        Q = function Q(e, t) {
          return (0, O.cY)(e, t.id)
        }
      var q = (0, B.Z)().propsFromState(function () {
        return { user: z, userSpace: Q }
      })
      var M = u.createElement(H['default'], null),
        N = v().e68b09b4,
        V = v().fd06b02f,
        j = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            var e
            ;(0, c.Z)(this, r)
            for (var a = arguments.length, n = new Array(a), i = 0; i < a; i++) {
              n[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(n))),
              (0, d.Z)((0, o.Z)(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              (0, d.Z)((0, o.Z)(e), '_handleClick', function () {
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
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.style,
                    a = e.user,
                    n = e.userSpace,
                    c = this.context.featureSwitches
                  if (!a) return null
                  var i = n && c.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? n : void 0
                  i && (i.accessibilityLabel = V({ screenName: a.screen_name }))
                  var o = u.createElement(k.ZP, {
                    accessibilityLabel: N,
                    icon: M,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return u.createElement(P.ZP, {
                    affiliateBadgeInfo: a.highlightedLabel,
                    avatarSize: 'xLarge',
                    avatarUri: a.profile_image_url_https,
                    decoration: o,
                    displayMode: 'ExperimentalUserTypeahead',
                    isBlueVerified: a.is_blue_verified,
                    isProtected: a['protected'],
                    isVerified: a.verified,
                    name: a.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: i,
                    screenName: a.screen_name,
                    style: r,
                    userId: a.id_str,
                    verifiedType: a.verified_type,
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
                        category: g.Hk.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: g.g2.User,
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(u.Component)
      ;(0, d.Z)(j, 'contextType', p.rC)
      var W = q.forwardRef(j)
      var G = r(459740),
        K = r(430084),
        $ = ['id', 'onRemove'],
        J = v().e68b09b4,
        Y = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            return (0, c.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.id,
                    r = e.onRemove,
                    a = (0, G.Z)(e, $)
                  return t
                    ? u.createElement(
                        h.Z,
                        { style: X.root },
                        u.createElement(K.Z, a),
                        u.createElement(k.ZP, {
                          accessibilityLabel: J,
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
                    a = e.supportText,
                    n = e.title
                  return {
                    category: g.Hk.RecentSearch,
                    query: t,
                    recentSearchType: g.g2.Event,
                    queryMetadata: { id: t, image: r, title: n, supportText: a },
                  }
                },
              },
            ]),
            r
          )
        })(u.PureComponent),
        X = m.Z.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        })
      var ee = Y
      var te = r(137541),
        re = r(238749),
        ae = r(880166),
        ne = u.createElement(H['default'], null),
        ce = v().e68b09b4
      var ie = (function (e) {
        ;(0, s.Z)(r, e)
        var t = (0, l.Z)(r)
        function r() {
          return (0, c.Z)(this, r), t.apply(this, arguments)
        }
        return (
          (0, i.Z)(r, [
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.description,
                  r = e.id,
                  a = e.name,
                  n = e.onRemove
                if (!r) return null
                var c = 'xxxLarge',
                  i = u.createElement(re.Z, { Icon: ae['default'], color: 'primary', size: c, style: oe.searchIcon })
                return u.createElement(
                  te.Z,
                  { avatarCell: i, avatarSize: c, cellStyle: oe.bodyColumn },
                  u.createElement(
                    h.Z,
                    null,
                    u.createElement(x.ZP, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, a),
                    u.createElement(x.ZP, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                  ),
                  u.createElement(k.ZP, {
                    accessibilityLabel: ce,
                    icon: ne,
                    onPress: n,
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
                  a = e.name
                return r
                  ? {
                      category: g.Hk.RecentSearch,
                      query: r,
                      recentSearchType: g.g2.Topic,
                      queryMetadata: { id: r, name: a, description: t },
                    }
                  : null
              },
            },
          ]),
          r
        )
      })(u.Component)
      var oe = m.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12 },
          }
        }),
        se = r(210891),
        le = r(246874),
        de = r(16587),
        ue = u.createElement(H['default'], null),
        he = u.createElement(le['default'], null),
        me = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            var e
            ;(0, c.Z)(this, r)
            for (var a = arguments.length, n = new Array(a), i = 0; i < a; i++) {
              n[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(n))),
              (0, d.Z)(
                (0, o.Z)(e),
                '_getMemoizedButtonType',
                (0, de.Z)(function (e) {
                  return e === g.Hk.SavedSearch ? 'destructiveText' : 'brandText'
                }),
              ),
              (0, d.Z)(
                (0, o.Z)(e),
                '_getMemoizedRemoveIcon',
                (0, de.Z)(function (e) {
                  return e === g.Hk.SavedSearch ? he : ue
                }),
              ),
              (0, d.Z)((0, o.Z)(e), '_getButtonType', function () {
                var t = e.props.category
                return e._getMemoizedButtonType(t)
              }),
              (0, d.Z)((0, o.Z)(e), '_getRemoveIcon', function () {
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
                    a = 'xxxLarge',
                    n = u.createElement(re.Z, { Icon: se['default'], color: 'neutral', size: a, style: fe.searchIcon })
                  return u.createElement(
                    te.Z,
                    { avatarCell: n, avatarSize: a, cellStyle: fe.bodyColumn },
                    u.createElement(x.ZP, { numberOfLines: 1, withHashflags: !0 }, r),
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
                    recentSearchType: t === g.Hk.RecentSearch ? g.g2.Keyword : void 0,
                  }
                },
              },
            ]),
            r
          )
        })(u.Component),
        fe = m.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        })
      var ve = me
      var ye = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            var e
            ;(0, c.Z)(this, r)
            for (var a = arguments.length, n = new Array(a), i = 0; i < a; i++) {
              n[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(n))),
              (0, d.Z)((0, o.Z)(e), '_renderSearchItem', function () {
                var t = e.props,
                  r = t.index,
                  a = t.item,
                  n = t.onItemClick
                return a.keyword
                  ? u.createElement(ve, {
                      category: a.category,
                      onRemove: e._handleOnRemove,
                      query: a.keyword.query,
                      ref: e._handleItemRef,
                    })
                  : a.user
                  ? u.createElement(W, {
                      id: a.user.id || '',
                      index: r,
                      onItemClick: n,
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                      style: pe.itemPadding,
                    })
                  : a.topic
                  ? u.createElement(ie, {
                      description: a.topic.description || '',
                      id: a.topic.id,
                      name: a.topic.name || '',
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                    })
                  : a.event
                  ? u.createElement(ee, {
                      id: a.event.id,
                      image: a.event.image || { url: '', height: 0, width: 0 },
                      onRemove: e._handleOnRemove,
                      ref: e._handleItemRef,
                      supportText: a.event.supportText || '',
                      title: a.event.title || '',
                    })
                  : null
              }),
              (0, d.Z)((0, o.Z)(e), '_handleItemRef', function (t) {
                e._itemRef = t
              }),
              (0, d.Z)((0, o.Z)(e), '_handleOnRemove', function (t) {
                var r = e.props,
                  a = r.index,
                  n = r.item
                ;(0, r.onRemoveQuery)(n, a), t.stopPropagation()
              }),
              (0, d.Z)((0, o.Z)(e), '_handleOnClick', function () {
                var t = e.props,
                  r = t.index,
                  a = t.item,
                  n = t.onItemClick
                a.user || (e.searchItemData && n(e.searchItemData, r))
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
                    a = e.testID
                  return u.createElement(
                    A.Z,
                    {
                      accessibilityRole: 'option',
                      accessibilitySelected: !!t,
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [pe.root, t && pe.focused, !(null != r && r.user) && pe.itemPadding],
                      testID: a,
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
        pe = m.Z.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        })
      var Se = ye
      var Ze = r(24949),
        ge = r(424208),
        be = r(663140),
        _e = r(923335),
        Ce = r(671896),
        Ee = r(233500),
        Ie = r(823803)
      function Re(e) {
        return (
          (0, be.VZ)(e, be.ZP.GenericUserNotFound) ||
          (0, be.VZ)(e, be.ZP.OtherUserSuspended) ||
          (0, be.VZ)(e, be.ZP.AddressBookLookupNotFound)
        )
      }
      var we = (0, Ze.P1)(Ce.Ww, U.ZP.selectFetchStatuses, function (e, t) {
          var r = (0, D.Z)(e, function (e) {
            var r,
              a = null === (r = e.user) || void 0 === r ? void 0 : r.id
            return a && t[a] ? { id: a, fetchStatus: t[a] } : void 0
          })
          return (0, ge.Z)(r, function (e) {
            return e.fetchStatus
          })
        }),
        xe = (0, Ze.P1)(we, function (e) {
          var t
          return (null !== (t = e[Ie.ZP.FAILED]) && void 0 !== t ? t : []).map(function (e) {
            return e.id
          })
        }),
        ke = (0, Ze.P1)(we, U.ZP.selectErrors, function (e, t) {
          var r,
            a,
            n,
            c = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : [],
            i = null !== (a = e[Ie.ZP.LOADED]) && void 0 !== a ? a : [],
            o = null !== (n = e[Ie.ZP.LOADING]) && void 0 !== n ? n : [],
            s = c.filter(function (e) {
              var r,
                a = e.id
              return !Re(null !== (r = t[a]) && void 0 !== r ? r : {})
            })
          return o.length > 0 ? Ie.ZP.LOADING : i.length > 0 ? Ie.ZP.LOADED : s.length > 0 ? Ie.ZP.FAILED : Ie.ZP.NONE
        }),
        Te = (0, Ze.P1)(we, U.ZP.selectErrors, function (e, t) {
          var r,
            a = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : []
          return (0, D.Z)(a, function (e) {
            var r
            if (Re(null !== (r = t[e.id]) && void 0 !== r ? r : {})) return e.id
          })
        }),
        De = (0, Ze.P1)(Ee.as, function (e) {
          return e.map(function (e) {
            return { keyword: { query: e.query }, savedSearchId: e.id_str, category: g.Hk.SavedSearch }
          })
        }),
        Le = (0, Ze.P1)(Ce.Ww, function (e) {
          return e.map(function (e) {
            return (0, a.Z)((0, a.Z)({}, e), {}, { category: g.Hk.RecentSearch })
          })
        })
      var Fe = (0, B.Z)()
        .propsFromState(function () {
          return {
            isRecentSearchDataLoaded: Ce.H$,
            recentSearches: Le,
            usersFetchStatus: ke,
            invalidRecentSearchUserIds: Te,
            failedRecentSearchUserIds: xe,
            savedSearches: De,
          }
        })
        .adjustStateProps(function (e) {
          var t = e.failedRecentSearchUserIds,
            r = e.invalidRecentSearchUserIds,
            a = e.isRecentSearchDataLoaded,
            n = e.recentSearches,
            c = e.savedSearches,
            i = e.usersFetchStatus,
            o = !n.filter(function (e) {
              var t = e.user
              return t && r.indexOf(t.id) < 0
            }).length,
            s = i !== Ie.ZP.LOADING && a && o ? Ie.ZP.LOADED : i
          return {
            failedRecentSearchUserIds: t,
            invalidRecentSearchUserIds: r,
            recentSearches: n,
            fetchStatus: s,
            savedSearches: c,
          }
        })
        .propsFromActions(function () {
          return {
            clearAll: Ce.qF,
            createLocalApiErrorHandler: (0, _e.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
            deleteSavedSearch: Ee.k9,
            fetchRecentSearchesIfNeeded: Ce.OB,
            fetchSavedSearchesIfNeeded: Ee.l9,
            fetchUsersIfNeeded: U.ZP.fetchManyIfNeeded,
            fetchUsersPresenceIfNeeded: O.ZP.fetchManyIfNeeded,
            removeQuery: Ce.hj,
          }
        })
        .withAnalytics({ element: 'typeahead' })
      var Ae = r(950617),
        Pe = r(785693),
        He = v().ee295fbe,
        Be = { headline: v().f45c4250, text: v().caae4dda, confirmButtonLabel: v().dbd5d400 },
        Oe = v().a8d68f62,
        Ue = v().c6530778,
        ze = v().e047b8fa,
        Qe = ['event', 'keyword', 'topic', 'user'],
        qe = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r(e, n) {
            var i
            return (
              (0, c.Z)(this, r),
              (i = t.call(this, e, n)),
              (0, d.Z)((0, o.Z)(i), '_getRecentSearchItems', function () {
                var e = i.props,
                  t = e.failedRecentSearchUserIds,
                  r = e.recentSearches.filter(function (e) {
                    return e.user && Qe.includes('user')
                      ? t.indexOf(e.user.id) < 0
                      : Object.keys(e).some(function (e) {
                          return Qe.includes(e)
                        })
                  })
                return r.length > 15 ? r.slice(0, 15) : r
              }),
              (0, d.Z)((0, o.Z)(i), '_render', function () {
                var e = i.props,
                  t = e.domId,
                  r = e.savedSearches,
                  a = 0 === i._getNumOfSearchItems(),
                  n = i._getRecentSearchItems()
                return a
                  ? u.createElement(
                      h.Z,
                      { style: Me.emptyState, testID: Pe.Z.typeaheadEmptySearch },
                      u.createElement(x.ZP, { align: 'center', color: 'gray700' }, He),
                    )
                  : u.createElement(
                      h.Z,
                      { accessibilityRole: 'listbox', nativeID: t },
                      n.length > 0
                        ? u.createElement(
                            u.Fragment,
                            null,
                            u.createElement(
                              h.Z,
                              { style: Me.header, testID: Pe.Z.typeaheadRecentSearchesHeader },
                              u.createElement(x.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Oe),
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
                                ze,
                              ),
                            ),
                            n.map(function (e, t) {
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
                                style: [Me.header, Me.borderTop],
                                testID: Pe.Z.typeaheadSavedSearchesHeader,
                              },
                              u.createElement(x.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Ue),
                            ),
                            i._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              (0, d.Z)((0, o.Z)(i), '_renderRecentSearchItem', function (e, t) {
                var r = i.props.ariaDescendantId,
                  a = i.state.focusIndex === t
                return u.createElement(Se, {
                  domId: a ? r : void 0,
                  index: t,
                  item: e,
                  key: i._chooseKeyType(e, t),
                  onItemClick: i._handleOnItemClick,
                  onRemoveQuery: i._handleRemoveQuery,
                  ref: a ? i._setFocusedItemRef : void 0,
                  testID: Pe.Z.typeaheadRecentSearchesItem,
                })
              }),
              (0, d.Z)((0, o.Z)(i), '_chooseKeyType', function (e, t) {
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
              (0, d.Z)((0, o.Z)(i), '_renderSavedSearches', function () {
                var e = i.props,
                  t = e.ariaDescendantId,
                  r = e.savedSearches,
                  a = i.state.focusIndex,
                  n = i._getRecentSearchItems(),
                  c = (0, R.Z)(r)
                return (
                  c.reverse(),
                  u.createElement(
                    h.Z,
                    { testID: Pe.Z.typeaheadSavedSearchesContainer },
                    c.map(function (e, r) {
                      var c = a === r + n.length
                      return u.createElement(Se, {
                        domId: c ? t : void 0,
                        index: r,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: i._handleOnItemClick,
                        onRemoveQuery: i._handleRemoveQuery,
                        ref: c ? i._setFocusedItemRef : void 0,
                        testID: Pe.Z.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              (0, d.Z)((0, o.Z)(i), '_getNumOfSearchItems', function () {
                var e = i.props.savedSearches,
                  t = i._getRecentSearchItems()
                return e.length + t.length
              }),
              (0, d.Z)((0, o.Z)(i), '_handleUsersRetry', function () {
                i._fetchUsersDetailsIfNeeded()
              }),
              (0, d.Z)((0, o.Z)(i), '_fetchUsersDetailsIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchUsersIfNeeded,
                  a = e.fetchUsersPresenceIfNeeded,
                  n = e.invalidRecentSearchUserIds,
                  c = e.recentSearches,
                  o = i.context,
                  s = o.featureSwitches,
                  l = o.viewerUserId,
                  d = (function (e, t) {
                    return (0, D.Z)(e, function (e) {
                      var r,
                        a = null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id
                      if (a && t.indexOf(a) < 0) return a
                    })
                  })(c, n)
                r(d)['catch'](t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && a(d)['catch'](t({}))
              }),
              (0, d.Z)((0, o.Z)(i), '_handleRemoveQuery', function (e, t) {
                var r = i.props,
                  a = r.analytics,
                  n = r.removeQuery
                switch (e.category) {
                  case g.Hk.RecentSearch:
                    var c = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    n(c), i._resetFocus()
                    var o = Z.Z.forRecentSearchResult(c, t),
                      s = i._handleRemoveAction(e)
                    o && a.scribe({ action: s, data: { items: [o] } })
                    break
                  case g.Hk.SavedSearch:
                    i.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              (0, d.Z)((0, o.Z)(i), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              (0, d.Z)((0, o.Z)(i), '_handleClearAllBlur', function () {
                i.setState({ clearAllButtonHasFocus: !1 })
              }),
              (0, d.Z)((0, o.Z)(i), '_handleClearAllFocus', function () {
                i.setState({ clearAllButtonHasFocus: !0 })
              }),
              (0, d.Z)((0, o.Z)(i), '_handleClearAllClick', function () {
                i.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              (0, d.Z)((0, o.Z)(i), '_handleOnClearAllConfirm', function () {
                var e = i.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), i.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (0, d.Z)((0, o.Z)(i), '_handleOnClearAllCancel', function () {
                i.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (0, d.Z)((0, o.Z)(i), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.deleteSavedSearch,
                  a = e.savedSearches,
                  n = i.state.savedSearchIdToDelete,
                  c = a.findIndex(function (e) {
                    return e.savedSearchId === n
                  }),
                  o = a[c]
                if (n) {
                  r(n)
                  var s = o && Z.Z.forSavedSearchResult(o.keyword.query, c)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                i.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (0, d.Z)((0, o.Z)(i), '_handleOnDeleteSavedSearchCancel', function () {
                i.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (0, d.Z)((0, o.Z)(i), '_handleOnItemClick', function (e, t) {
                var r = i.props,
                  a = r.onDismiss
                ;(0, r.onItemClick)(e, t), i._scribeClick(e, t), a && a()
              }),
              (0, d.Z)((0, o.Z)(i), '_scribeRecentSearchImpression', function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.recentSearches
                if (r && r.length) {
                  var a = (0, D.Z)(r, function (e, t) {
                    return Z.Z.forRecentSearchResult(e, t)
                  })
                  t.scribe({ action: 'impression', data: { items: a } })
                }
              }),
              (0, d.Z)((0, o.Z)(i), '_scribeSavedSearchImpression', function () {
                var e = i.props,
                  t = e.analytics,
                  r = e.savedSearches
                if (r && r.length) {
                  var a = (0, D.Z)(r, function (e, t) {
                    return Z.Z.forSavedSearchResult(e.keyword.query, t)
                  })
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: a } })
                }
              }),
              (0, d.Z)((0, o.Z)(i), '_scribeClick', function (e, t) {
                var r = i.props.analytics
                switch (e.category) {
                  case g.Hk.SavedSearch:
                    var n = Z.Z.forSavedSearchResult(e.query, t)
                    r.scribe({ element: 'typeahead', action: 'click', data: { targets: [n] } })
                    break
                  case g.Hk.RecentSearch:
                    var c
                    e.recentSearchType &&
                      (c =
                        e.recentSearchType === g.g2.User
                          ? { user: { type: g.g2.User, id: e.query } }
                          : e.recentSearchType === g.g2.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: (0, a.Z)((0, a.Z)({}, e.queryMetadata), {}, { type: g.g2.Event, id: e.query }) }
                          : e.recentSearchType === g.g2.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: (0, a.Z)((0, a.Z)({}, e.queryMetadata), {}, { type: g.g2.Topic, id: e.query }) }
                          : { keyword: { type: g.g2.Keyword, query: e.query } })
                    var o = c && Z.Z.forRecentSearchResult(c, t)
                    o && r.scribe({ action: 'click', data: { targets: [o] } })
                }
              }),
              (0, d.Z)((0, o.Z)(i), '_setClearAllButtonRef', function (e) {
                i._clearAllButtonRef = e
              }),
              (0, d.Z)((0, o.Z)(i), '_setFocusedItemRef', function (e) {
                ;(i._focusedItemRef = e),
                  e &&
                    i._shouldScrollToFocusedItem &&
                    ((0, F.up)(i._getScrollParent(), i._getFocusedItem()), (i._shouldScrollToFocusedItem = !1))
              }),
              (0, d.Z)((0, o.Z)(i), 'hasFocusedItem', function () {
                return i._getNumOfSearchItems() > 0
              }),
              (0, d.Z)((0, o.Z)(i), 'deleteFocusedItem', function () {
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
              (0, d.Z)((0, o.Z)(i), 'selectFocusedItem', function () {
                if (i.hasFocusedItem()) {
                  var e = i._focusedItemRef && i._focusedItemRef.searchItemData
                  e && i._handleOnItemClick(e, i.state.focusIndex)
                }
              }),
              (0, d.Z)((0, o.Z)(i), '_setFocusIndex', function (e, t) {
                var r = i.props.onItemFocusChanged
                ;(i._shouldScrollToFocusedItem = t), i.setState({ focusIndex: e }), r && r()
              }),
              (0, d.Z)((0, o.Z)(i), '_resetFocus', function () {
                i._setFocusIndex(-1)
              }),
              (0, d.Z)((0, o.Z)(i), 'focusNext', function () {
                var e = i.state.focusIndex,
                  t = i._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e + 1 >= t ? 0 : e + 1
                  i._setFocusIndex(r, !0)
                }
              }),
              (0, d.Z)((0, o.Z)(i), 'focusPrevious', function () {
                var e = i.state.focusIndex,
                  t = i._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e - 1 < 0 ? t - 1 : e - 1
                  i._setFocusIndex(r, !0)
                }
              }),
              (0, d.Z)((0, o.Z)(i), 'navigateNext', function () {
                if (i._clearAllButtonRef && !i.state.clearAllButtonHasFocus) return i._clearAllButtonRef
              }),
              (0, d.Z)((0, o.Z)(i), 'navigatePrevious', function () {}),
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
                    a = e.fetchSavedSearchesIfNeeded,
                    n = e.recentSearches,
                    c = e.savedSearches
                  r(),
                    a()['catch'](t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((n && n.length) || (c && c.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
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
                value: function value() {
                  var e = this.props,
                    t = e.fetchStatus,
                    r = e.style,
                    a = this.state,
                    n = a.shouldShowClearAllConfirmationSheet,
                    c = a.shouldShowDeleteSavedSearchConfirmation
                  return u.createElement(
                    h.Z,
                    { style: r },
                    u.createElement(L.Z, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    n
                      ? u.createElement(T.Z, {
                          confirmButtonLabel: Be.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Be.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Pe.Z.deleteRecentSearchesDialog,
                          text: Be.text,
                        })
                      : null,
                    c
                      ? u.createElement(Ae.Z, {
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
                    var e = (0, F.rP)(w.findDOMNode(this))
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
      ;(0, d.Z)(qe, 'contextType', p.rC)
      var Me = m.Z.create(function (e) {
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
      var Ne = Fe.forwardRef(qe)
      var Ve = (0, B.Z)()
        .propsFromActions(function () {
          return { addQuery: Ce.DI }
        })
        .withAnalytics({ component: 'search_box' })
      var je = r(196234),
        We = r(702847),
        Ge = function Ge(e, t) {
          return U.ZP.select(e, t.userId)
        }
      var Ke = function Ke(e) {
        var t = e.user,
          r = e.userId,
          a = u.useState(!1),
          n = (0, je.Z)(a, 2),
          c = n[0],
          i = n[1],
          o = u.useContext(p.rC).featureSwitches.isTrue('follow_nudge_search_enabled')
        return (
          u.useEffect(
            function () {
              o && t && !t.following && i(!0)
            },
            [t, o],
          ),
          c ? u.createElement(We.C, { isFollowNudge: !0, showRelationshipChangeConfirmation: !0, userId: r }) : null
        )
      }
      var $e = (0, B.Z)().propsFromState(function () {
          return { user: Ge }
        })(u.memo(Ke)),
        Je = 'SearchBox_Search_Input'
      var Ye = v().ib2e46ee,
        Xe = v().hbc99b03,
        et = /^(\w+)$/,
        tt = [b.my.Events, b.my.Users, b.my.Topics],
        rt = function rt(e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        at = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r(e, i) {
            var s, l
            return (
              (0, c.Z)(this, r),
              (l = t.call(this, e, i)),
              (0, d.Z)((0, o.Z)(l), '_renderSearchBoxEmptyState', function (e) {
                return u.createElement(Ne, (0, n.Z)({}, e, { onItemClick: l._handleSearchItemClick }))
              }),
              (0, d.Z)((0, o.Z)(l), '_renderSearchUserDecoration', function (e) {
                e.user
                var t = e.userId,
                  r = l.context.viewerUserId
                return r && t !== r ? u.createElement($e, { userId: t }) : null
              }),
              (0, d.Z)((0, o.Z)(l), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  r = e.link,
                  n = e.query,
                  c = e.queryMetadata,
                  i = e.recentSearchType,
                  o = l.props.addQuery
                t === g.Hk.SavedSearch
                  ? l._submitQuery({ query: n, shouldAddToRecentSearch: !1, src: _.Z.SavedSearchClick })
                  : i === g.g2.Keyword
                  ? l._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: _.Z.RecentSearchClick })
                  : i === g.g2.Event
                  ? (l._routeTransition({ pathname: '/i/events/'.concat(n) }),
                    c && c.title && o({ event: (0, a.Z)((0, a.Z)({}, c), {}, { id: n, type: g.g2.Event }) }))
                  : i === g.g2.Topic
                  ? (l._routeTransition({ pathname: '/i/topics/'.concat(n) }),
                    c && c.name && o({ topic: (0, a.Z)((0, a.Z)({}, c), {}, { id: n, type: g.g2.Topic }) }))
                  : r &&
                    (l._routeTransition({ pathname: '/'.concat(r), userId: n }),
                    o({ user: { id: n, type: g.g2.User } }))
              }),
              (0, d.Z)((0, o.Z)(l), '_handleSearchShortcut', function (e) {
                var t = l._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              (0, d.Z)((0, o.Z)(l), '_getUserExactMatch', function (e) {
                e.hasResults
                var t = e.isLoaded,
                  r = e.query,
                  a = rt(r)
                if (t && a.match(et))
                  return {
                    id: ''.concat(r, '_no_result_user'),
                    type: b.El.NoResult,
                    data: { text: Xe({ screenName: a }), type: 'user' },
                  }
              }),
              (0, d.Z)((0, o.Z)(l), '_handleOnDismiss', function () {
                var e = l.props.history,
                  t = e.location,
                  r = t.state || {}
                if (r.searchFocused) {
                  var n = (0, a.Z)(
                    (0, a.Z)({}, t),
                    {},
                    { state: (0, a.Z)((0, a.Z)({}, r), {}, { lockScroll: !1, searchFocused: !1 }) },
                  )
                  e.replace(n)
                }
              }),
              (0, d.Z)((0, o.Z)(l), '_handleOnFocus', function () {
                var e = l.props,
                  t = e.analytics,
                  r = e.history,
                  n = r.location,
                  c = n.state || {}
                if (!c.searchFocused) {
                  var i = (0, a.Z)(
                    (0, a.Z)({}, n),
                    {},
                    { state: (0, a.Z)((0, a.Z)({}, c), {}, { searchFocused: !0, lockScroll: !0 }) },
                  )
                  t.scribe({ action: 'focus_field' }), r.push(i)
                }
              }),
              (0, d.Z)((0, o.Z)(l), '_handleChange', function (e) {
                l.setState({ query: e })
              }),
              (0, d.Z)((0, o.Z)(l), '_handleTypeaheadSubmit', function () {
                var e = l.state,
                  t = e.items,
                  r = e.query,
                  a = l.props.analytics
                ;/^\s*$/.test(r) ||
                  (a.scribe({
                    action: 'search',
                    data: { items: Z.Z.forTypeaheadResults(t), search_details: { query: r } },
                  }),
                  l._submitQuery({ query: r, shouldAddToRecentSearch: !0 }))
              }),
              (0, d.Z)((0, o.Z)(l), '_handleItemClick', function (e, t) {
                var r = l.props.addQuery,
                  a = l.state.query
                switch (e.type) {
                  case b.El.User:
                    if (e.data.id_str) r({ user: { id: e.data.id_str, type: g.g2.User } })
                    l._routeTransition({ pathname: '/'.concat(e.data.screen_name), userId: e.data.id_str })
                    break
                  case b.El.Topic:
                  case b.El.Hashtag:
                    l._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: _.Z.TypeaheadClick })
                    break
                  case b.El.Event:
                    e.data && e.data.url
                      ? l._routeTransition({ pathname: S.ZP.parseInternalUrl(e.data.url) })
                      : l._submitQuery({ query: e.data.topic, src: _.Z.TypeaheadClick })
                    break
                  case b.El.NoResult:
                    var n = e.data.type
                    'user' === n
                      ? l._routeTransition({ pathname: '/'.concat(rt(a)) })
                      : 'topic' === n &&
                        l._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: _.Z.TypeaheadClick })
                }
              }),
              (0, d.Z)((0, o.Z)(l), '_handleItemsChanged', function (e) {
                l.setState({ items: e })
              }),
              (0, d.Z)((0, o.Z)(l), '_routeTransition', function (e) {
                var t = e.params,
                  r = e.pathname,
                  n = e.query,
                  c = e.src,
                  i = e.userId,
                  o = l.props,
                  s = o.history,
                  d = o.location,
                  u = (0, a.Z)(
                    (0, a.Z)({}, d),
                    {},
                    {
                      pathname: r,
                      search: '',
                      query: t || (n ? { q: n, src: c } : {}),
                      state: (0, a.Z)(
                        (0, a.Z)({}, d.state),
                        {},
                        { searchFocused: !1, lockScroll: !1 },
                        i ? { userId: i } : {},
                      ),
                    },
                  )
                s.replace(u)
              }),
              (0, d.Z)((0, o.Z)(l), '_submitQuery', function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  a = void 0 !== r && r,
                  n = e.src,
                  c = void 0 === n ? _.Z.Typed : n,
                  i = l.props,
                  o = i.addQuery,
                  s = i.mode,
                  d = i.onSubmit,
                  u = i.searchFilters,
                  h = i.searchRoute
                ;(d && d(t, c, l.state.lastSubmittedQuery === t), a) && o({ keyword: { query: t, type: g.g2.Keyword } })
                var m = (0, g.F_)({ query: t, querySrc: c, mode: s, searchFilters: u })
                l._routeTransition({ pathname: h, params: m, src: c }), l.setState({ lastSubmittedQuery: t })
              }),
              (0, d.Z)((0, o.Z)(l), '_setInputRef', function (e) {
                l._inputRef = e
              }),
              (l.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: (0, y.B)(null === (s = e.location.query) || void 0 === s ? void 0 : s.q),
              }),
              l
            )
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'componentDidMount',
                value: function value() {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = (0, E.UJ)(this._handleSearchShortcut))
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
                    a = e.isInSidebar,
                    n = e.isOnHomepage,
                    c = e.location,
                    i = e.placeholder,
                    o = this.state.query,
                    s = (c.state || {}).searchPrefill,
                    l = this.props.initialValue || s,
                    d = !!c.state && !!c.state.searchFocused
                  return u.createElement(
                    h.Z,
                    { style: nt.root },
                    u.createElement(I['default'], {
                      filter: tt,
                      forceVdlDisable: t,
                      getTopicExactMatch: o ? b.P0 : void 0,
                      getUserExactMatch: o ? this._getUserExactMatch : void 0,
                      initialValue: l,
                      inputStyle: nt.input,
                      isCompact: r,
                      isInSidebar: a,
                      isOnHomepage: n,
                      onDismiss: this._handleOnDismiss,
                      onFocus: this._handleOnFocus,
                      onItemClick: this._handleItemClick,
                      onItemsChanged: this._handleItemsChanged,
                      onQueryChange: this._handleChange,
                      onSubmit: this._handleTypeaheadSubmit,
                      placeholder: i,
                      ref: this._setInputRef,
                      renderEmptyState: this._renderSearchBoxEmptyState,
                      renderUserDecoration: this._renderSearchUserDecoration,
                      rounded: !0,
                      shouldAutoFocus: d,
                      shouldClearOnSelect: !0,
                      shouldDeferPrefetch: !0,
                      source: b._4.SearchBox,
                      testID: Je,
                      withFixedPositioning: !0,
                      withFocusStyling: !0,
                      withSectionDivider: !1,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(u.Component)
      ;(0, d.Z)(at, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: Ye,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        (0, d.Z)(at, 'contextType', p.rC)
      var nt = m.Z.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      var ct = (0, C.ZP)(Ve(at))
    },
    233500: function _(e, t, r) {
      r.d(t, {
        GL: function GL() {
          return Z
        },
        as: function as() {
          return S
        },
        k9: function k9() {
          return g
        },
        l9: function l9() {
          return b
        },
      })
      var a = r(256666),
        n = r(968079),
        c = r(133028),
        i = r(86522),
        o = (r(22144), r(818178), r(995342), r(358188), r(73439), r(472599)),
        s = r(526853),
        l = r(753392),
        d = r(823803),
        u = r(467935),
        h = 'savedSearches',
        m = { fetchStatus: d.ZP.NONE, savedSearches: [] },
        f = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        v = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        y = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t) return e
        switch (t.type) {
          case f.SUCCESS:
            var r = t.payload,
              a = Array.isArray(r)
            return (
              a ||
                (0, o.ZP)('Saved search results are not type array', {
                  extra: { savedSearchResultsType: (0, i.Z)(r) },
                }),
              (0, c.Z)((0, c.Z)({}, e), {}, { fetchStatus: d.ZP.LOADED, savedSearches: a && r ? r : [] })
            )
          case f.FAILURE:
            return (0, c.Z)((0, c.Z)({}, e), {}, { fetchStatus: d.ZP.FAILED })
          case v.SUCCESS:
            return (0, c.Z)(
              (0, c.Z)({}, e),
              {},
              { savedSearches: t.payload ? [].concat((0, n.Z)(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case y.SUCCESS:
            return t.payload
              ? (0, c.Z)(
                  (0, c.Z)({}, e),
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
      s.Z.register((0, a.Z)({}, h, p))
      var S = function S(e) {
          return e.savedSearches.savedSearches
        },
        Z = function Z(e) {
          return function (t, r, a) {
            var n = a.api
            return (0, l._O)(t, { request: n.SavedSearches.create, params: { query: e } })({
              actionTypes: v,
              context: 'SAVE_SEARCH',
            })
          }
        },
        g = function g(e) {
          return function (t, r, a) {
            var n = a.api
            return (0, l._O)(t, { request: n.SavedSearches.destroy, params: { id: e } })({
              actionTypes: y,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        b = function b() {
          return function (e, t, r) {
            r.api
            var a = t()
            if (!(0, u.Qb)(a)) return Promise.resolve()
            var n =
              (function (e) {
                return e.savedSearches.fetchStatus
              })(a) === d.ZP.LOADED
            return n
              ? Promise.resolve()
              : e(function (e, t, r) {
                  var a = r.api
                  return (0, l._O)(e, { request: a.SavedSearches.fetch, params: {} })({
                    actionTypes: f,
                    context: 'FETCH_SAVED_SEARCHES',
                  })
                })
          }
        }
    },
    3613: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return o
        },
      })
      r(438695), r(358188), r(201939), r(136728)
      var a = r(202784),
        n = r(325686),
        c = r(191300),
        i = r(973186)
      var o = function o(e) {
        var t = e.children,
          r = e.color,
          i = void 0 === r ? 'gray700' : r,
          o = e.size,
          l = e.style,
          d = []
        return (
          a.Children.forEach(t, function (e) {
            var t = d.length
            e && (t > 0 && d.push(a.createElement(c.Z, { color: i, key: 'middot-'.concat(t), size: o })), d.push(e))
          }),
          d.length ? a.createElement(n.Z, { style: [s.middotGroup, l] }, d) : null
        )
      }
      var s = i.Z.create(function (e) {
        return { middotGroup: { alignItems: 'baseline', flexDirection: 'row', flexShrink: 1 } }
      })
    },
    894963: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return U
        },
      })
      r(472508), r(326936)
      var a = r(202784),
        n = r(241487),
        c = r(473228),
        i = r.n(c),
        o = r(517272),
        s = r(27895),
        l = r(45680),
        d = r(106059),
        u = r(225163),
        h = r(307742),
        m = r(156538),
        f = r(90649),
        v = r(914481),
        y = r(440271),
        p = r(511258),
        S = r(240811),
        Z = r(55269),
        g = r(407307),
        b = r(81921),
        _ = r(833131),
        C = r(575629),
        E = r(880166),
        I = r(721783),
        R = r(436934),
        w = r(537800),
        x = r(973186),
        k = r(849376),
        T = i().jb767df8,
        D = i().bb3323fa,
        L = i().habf9678,
        F = i().db0798ed,
        A = i().dc716ec9,
        P = function P(e) {
          return a.createElement(R.ZP, { dir: n.Z.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        H = function H(e, t) {
          return t
            ? T
            : (function (e) {
                var t = P(e)
                return a.createElement(i().I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        B = x.Z.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        O = x.Z.create(function (e) {
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
          n = e.iconSize,
          c = e.link,
          i = e.retweetData,
          R = e.text,
          T = e.topicData,
          U = e.userAvatarUrls,
          z = i || {},
          Q = z.isSelfRetweet,
          q = z.name,
          M = z.screenName,
          N = (function (e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
              c = B[t],
              i = [r ? { color: x.Z.theme.colors[r] } : O.colorDeepGray, c],
              R = a.createElement(Z['default'], { style: i }),
              T = a.createElement(b['default'], { style: i }),
              D = a.createElement(f['default'], { style: i }),
              L = a.createElement(S['default'], { style: i }),
              F = a.createElement(v['default'], { style: i }),
              A = a.createElement(o['default'], { style: O.circle }),
              P = a.createElement(g['default'], { style: i }),
              H = a.createElement(d['default'], { style: i }),
              U = a.createElement(E['default'], { style: i }),
              z = a.createElement(y['default'], { style: i }),
              Q = a.createElement(p['default'], { style: i }),
              q = a.createElement(l['default'], { style: i }),
              M = a.createElement(_['default'], { style: i }),
              N = a.createElement(C['default'], { style: i }),
              V = a.createElement(s['default'], { style: i }),
              j = a.createElement(m['default'], { style: i }),
              W = a.createElement(h['default'], { style: i }),
              G = a.createElement(u['default'], { style: i }),
              K = a.createElement(w.Z, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: n }),
              $ = a.createElement(I['default'], { style: i })
            switch (e) {
              case k.Q.Pin:
              case k.Q.ReplyPin:
                return R
              case k.Q.Retweet:
                return T
              case k.Q.Like:
                return D
              case k.Q.Follow:
                return L
              case k.Q.Moment:
                return F
              case k.Q.NewTweets:
                return A
              case k.Q.Reply:
              case k.Q.Conversation:
                return P
              case k.Q.Feedback:
                return H
              case k.Q.Topic:
                return U
              case k.Q.List:
                return z
              case k.Q.Location:
                return Q
              case k.Q.Community:
                return q
              case k.Q.Spaces:
                return M
              case k.Q.Sparkle:
                return N
              case k.Q.SmartBlockExpiration:
                return V
              case k.Q.SocialProof:
              case k.Q.FollowFollowed:
                return G
              case k.Q.FollowMutual:
                return W
              case k.Q.FollowFollowing:
                return j
              case k.Q.Facepile:
                return K
              case k.Q.Bird:
                return $
              case k.Q.TextOnly:
              default:
                return null
            }
          })(t, n, r, U)
        switch (t) {
          case k.Q.Retweet:
            return { Icon: N, text: R || H(q, Q), link: M ? 'https://twitter.com/'.concat(M) : void 0 }
          case k.Q.Pin:
            return { Icon: N, text: R || D }
          case k.Q.ReplyPin:
            return { Icon: N, text: L }
          case k.Q.Topic:
            return {
              Icon: N,
              accessibilityLabel:
                'Recommendation' === (null == T ? void 0 : T.functionalityType) ||
                'RecWithEducation' === (null == T ? void 0 : T.functionalityType)
                  ? A({ topicName: R })
                  : F({ topicName: R }),
              text: R ? P(R) : null,
              link: c,
            }
          default:
            return { Icon: N, text: R ? P(R) : null, link: c }
        }
      }
    },
    309524: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return _
        },
      })
      var a = r(459740),
        n = r(709249),
        c = r(887371),
        i = r(545754),
        o = r(486906),
        s = r(256666),
        l = (r(472508), r(136728), r(108532), r(818178), r(202784)),
        d = r(325686),
        u = r(436934),
        h = r(137541),
        m = r(377089),
        f = r(973186),
        v = r(191062),
        y = r(868011),
        p = r(894963),
        S = r(849376),
        Z = [
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
        g = (function (e) {
          ;(0, i.Z)(r, e)
          var t = (0, o.Z)(r)
          function r() {
            return (0, n.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this,
                    t = this.props,
                    r = t.avatarSize,
                    n = t.bottomControl,
                    c = t.iconStyle,
                    i = t.nativeID,
                    o = t.onLayout,
                    s = t.rightControl,
                    f = t.style,
                    v = t.testID,
                    y = t.textColor,
                    S = t.textSize,
                    g = t.topControl,
                    _ = t.weight,
                    C = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, (0, a.Z)(t, Z)),
                    I = (0, p.Z)(E),
                    R = I.Icon,
                    w = I.accessibilityLabel,
                    x = I.link,
                    k = I.text,
                    T = l.createElement(
                      u.ZP,
                      { accessibilityLabel: w, color: y, nativeID: i, numberOfLines: 2, size: S, testID: v, weight: _ },
                      k,
                    ),
                    D = this._getStyles(),
                    L = D.cellStyle,
                    F = D.viewStyle
                  return k
                    ? l.createElement(m.ZP.UseProps, null, function (t) {
                        return l.createElement(
                          l.Fragment,
                          null,
                          g || null,
                          l.createElement(
                            d.Z,
                            {
                              onLayout: o,
                              style: [f, F, t.socialContextRefreshEnabled() && !C && b.socialContextRefresh],
                            },
                            l.createElement(
                              h.Z,
                              {
                                avatarCell: R || (C ? null : void 0),
                                avatarCellStyle: [
                                  c,
                                  b.socialContextIconColumn,
                                  !C && b.unsetIconWidth,
                                  t.socialContextRefreshEnabled() && !C && b.socialContextRefreshIcon,
                                ],
                                avatarSize: r,
                                cellStyle: L,
                              },
                              l.createElement(
                                d.Z,
                                { style: b.cellWrapper },
                                l.createElement(
                                  d.Z,
                                  {
                                    style: [
                                      b.socialContextTextColumn,
                                      t.socialContextRefreshEnabled() && !C && b.socialContextRefreshTextColumn,
                                    ],
                                  },
                                  x ? e._renderLink(x, T) : T,
                                ),
                                s || null,
                              ),
                            ),
                            n || null,
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
                    a = r.contextType,
                    n = r.nativeID,
                    c = r.onClick,
                    i = r.retweetData,
                    o = r.textColor,
                    s = r.topicData,
                    d = (i || {}).screenName,
                    h = l.createElement(u.ZP, { color: o, link: e, nativeID: n, onClick: c }, t)
                  return a === S.Q.Topic && s
                    ? l.createElement(v.Z, { topicId: s.topicId }, h)
                    : a === S.Q.Retweet && d
                    ? l.createElement(y.Z, { screenName: d }, h)
                    : h
                },
              },
              {
                key: '_getStyles',
                value: function value() {
                  var e = this.props,
                    t = e.bottomControl,
                    r = e.contextType,
                    a = e.withBottomBorder,
                    n = e.withTextCentered,
                    c = r === S.Q.TextOnly,
                    i = a ? [b.bottomBorderMargin, !!t && b.bottomBorder] : [],
                    o = a && !t ? [b.bottomBorder] : []
                  return (
                    c && o.push(b.topicContext),
                    n && o.push(b.socialContextTextCentered),
                    { viewStyle: i, cellStyle: o }
                  )
                },
              },
            ]),
            r
          )
        })(l.PureComponent)
      ;(0, s.Z)(g, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var b = f.Z.create(function (e) {
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
      var _ = g
    },
    849376: function _(e, t, r) {
      r.d(t, {
        Q: function Q() {
          return a
        },
      })
      r(22144), r(202784)
      var a = Object.freeze({
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
    517272: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement('g', null, n.createElement('circle', { cx: '12', cy: '12', r: '10.3' })),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    27895: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 6v6.72l5.19 1.73.63-1.9L13 11.28V6h-2z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    445877: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 15 15',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 15, height: 15 }
      var s = o
    },
    45680: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-1.608 1.732-2.762 4.389-2.869 8.248l-.03 1.083zM9.616 9.27C10.452 8.63 11 7.632 11 6.5 11 4.57 9.433 3 7.5 3S4 4.57 4 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zm6.884 1.726c-3.264 0-6.816 2.358-7 8.977L9.471 21h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977zm2.116-1.726C19.452 8.63 20 7.632 20 6.5 20 4.57 18.433 3 16.5 3S13 4.57 13 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    106059: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    225163: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    307742: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    156538: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    914481: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', { d: 'M18.766 2H7.323l-4.8 12h5.324l-1.261 8.83L22.414 7h-6.648l3-5z' }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    511258: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    55269: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    575629: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
    246874: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        c = r(890601),
        i = r(473569),
        o = function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, c.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z',
                  }),
                ),
              },
            ),
          )
        }
      o.metadata = { width: 24, height: 24 }
      var s = o
    },
  },
])

//# sourceMappingURL=WIPED
