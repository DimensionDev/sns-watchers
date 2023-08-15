'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  [
    'shared~loader.Typeahead~bundle.LoggedOutHome~bundle.Search',
    'icons/IconChevronRight-js',
    'icons/IconCircleFill-js',
    'icons/IconClockCircleFill-js',
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
      var a = r(202784),
        n = r(484292),
        i = r(473228),
        o = r.n(i),
        c = r(785693),
        s = o().hffea05c,
        l = o().j037e374,
        d = o().d96cf7ce
      var u = function u(e) {
        var t = e.onCancel,
          r = e.onConfirm
        return a.createElement(n.Z, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: s,
          onCancel: t,
          onConfirm: r,
          testID: c.Z.deleteSavedSearchDialog,
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
            return it
          },
          default: function _default() {
            return ct
          },
        })
      var a = r(133028),
        n = r(807896),
        i = r(709249),
        o = r(887371),
        c = r(580753),
        s = r(545754),
        l = r(486906),
        d = r(256666),
        u = (r(472508), r(326936), r(477950), r(74069), r(385940), r(136728), r(621850), r(202784)),
        h = r(325686),
        m = r(973186),
        p = r(473228),
        f = r.n(p),
        y = r(397871),
        v = r(134615),
        S = r(676275),
        Z = r(760397),
        b = r(588027),
        g = r(63899),
        C = r(76687),
        _ = r(331261),
        E = r(820604),
        I = r(974383),
        w = r(968079),
        R =
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
        L = r(211469),
        D = r(872983),
        P = r(240159),
        F = (r(818178), r(334115), r(200634), r(174062)),
        A = r(819153),
        H = r(418958),
        U = r(392160),
        B = r(286928),
        z = r(157659),
        N = function N(e, t) {
          return z.ZP.select(e, t.id)
        },
        O = function O(e, t) {
          return (0, B.cY)(e, t.id)
        }
      var Q = (0, U.Z)().propsFromState(function () {
        return { user: N, userSpace: O }
      })
      var M = u.createElement(H['default'], null),
        q = f().e68b09b4,
        V = f().fd06b02f,
        j = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            var e
            ;(0, i.Z)(this, r)
            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) {
              n[o] = arguments[o]
            }
            return (
              (e = t.call.apply(t, [this].concat(n))),
              (0, d.Z)((0, c.Z)(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              (0, d.Z)((0, c.Z)(e), '_handleClick', function () {
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
            (0, o.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.style,
                    a = e.user,
                    n = e.userSpace,
                    i = this.context.featureSwitches
                  if (!a) return null
                  var o = n && i.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? n : void 0
                  o && (o.accessibilityLabel = V({ screenName: a.screen_name }))
                  var c = u.createElement(k.ZP, {
                    accessibilityLabel: q,
                    icon: M,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return u.createElement(A.ZP, {
                    affiliateBadgeInfo: a.highlightedLabel,
                    avatarSize: 'xLarge',
                    avatarUri: a.profile_image_url_https,
                    decoration: c,
                    displayMode: 'UserCompact',
                    isBlueVerified: a.is_blue_verified,
                    isProtected: a['protected'],
                    isVerified: a.verified,
                    name: a.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: o,
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
                        category: Z.Hk.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: Z.g2.User,
                      }
                    : null
                },
              },
            ]),
            r
          )
        })(u.Component)
      ;(0, d.Z)(j, 'contextType', _.rC)
      var W = Q.forwardRef(j)
      var G = r(459740),
        K = r(430084),
        Y = ['id', 'onRemove'],
        $ = f().e68b09b4,
        J = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            return (0, i.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, o.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.id,
                    r = e.onRemove,
                    a = (0, G.Z)(e, Y)
                  return t
                    ? u.createElement(
                        h.Z,
                        { style: X.root },
                        u.createElement(K.Z, a),
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
                    a = e.supportText,
                    n = e.title
                  return {
                    category: Z.Hk.RecentSearch,
                    query: t,
                    recentSearchType: Z.g2.Event,
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
      var ee = J
      var te = r(238749),
        re = r(137541),
        ae = r(880166),
        ne = u.createElement(H['default'], null),
        ie = f().e68b09b4
      var oe = (function (e) {
        ;(0, s.Z)(r, e)
        var t = (0, l.Z)(r)
        function r() {
          return (0, i.Z)(this, r), t.apply(this, arguments)
        }
        return (
          (0, o.Z)(r, [
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.description,
                  r = e.id,
                  a = e.name,
                  n = e.onRemove
                if (!r) return null
                var i = 'xLarge',
                  o = u.createElement(te.Z, { Icon: ae['default'], color: 'primary', size: i, style: ce.searchIcon })
                return u.createElement(
                  re.Z,
                  { avatarCell: o, avatarSize: i, cellStyle: ce.bodyColumn },
                  u.createElement(
                    h.Z,
                    null,
                    u.createElement(x.ZP, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, a),
                    u.createElement(x.ZP, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                  ),
                  u.createElement(k.ZP, {
                    accessibilityLabel: ie,
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
                      category: Z.Hk.RecentSearch,
                      query: r,
                      recentSearchType: Z.g2.Topic,
                      queryMetadata: { id: r, name: a, description: t },
                    }
                  : null
              },
            },
          ]),
          r
        )
      })(u.Component)
      var ce = m.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12 },
          }
        }),
        se = r(246874),
        le = r(210891),
        de = r(16587),
        ue = u.createElement(H['default'], null),
        he = u.createElement(se['default'], null),
        me = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            var e
            ;(0, i.Z)(this, r)
            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) {
              n[o] = arguments[o]
            }
            return (
              (e = t.call.apply(t, [this].concat(n))),
              (0, d.Z)(
                (0, c.Z)(e),
                '_getMemoizedButtonType',
                (0, de.Z)(function (e) {
                  return e === Z.Hk.SavedSearch ? 'destructiveText' : 'brandText'
                }),
              ),
              (0, d.Z)(
                (0, c.Z)(e),
                '_getMemoizedRemoveIcon',
                (0, de.Z)(function (e) {
                  return e === Z.Hk.SavedSearch ? he : ue
                }),
              ),
              (0, d.Z)((0, c.Z)(e), '_getButtonType', function () {
                var t = e.props.category
                return e._getMemoizedButtonType(t)
              }),
              (0, d.Z)((0, c.Z)(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return e._getMemoizedRemoveIcon(t)
              }),
              e
            )
          }
          return (
            (0, o.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onRemove,
                    r = e.query,
                    a = 'xLarge',
                    n = u.createElement(te.Z, { Icon: le['default'], color: 'neutral', size: a, style: pe.searchIcon })
                  return u.createElement(
                    re.Z,
                    { avatarCell: n, avatarSize: a, cellStyle: pe.bodyColumn },
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
                    recentSearchType: t === Z.Hk.RecentSearch ? Z.g2.Keyword : void 0,
                  }
                },
              },
            ]),
            r
          )
        })(u.Component),
        pe = m.Z.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          }
        })
      var fe = me
      var ye = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r() {
            var e
            ;(0, i.Z)(this, r)
            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) {
              n[o] = arguments[o]
            }
            return (
              (e = t.call.apply(t, [this].concat(n))),
              (0, d.Z)((0, c.Z)(e), '_renderSearchItem', function () {
                var t = e.props,
                  r = t.index,
                  a = t.item,
                  n = t.onItemClick
                return a.keyword
                  ? u.createElement(fe, {
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
                      style: ve.itemPadding,
                    })
                  : a.topic
                  ? u.createElement(oe, {
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
              (0, d.Z)((0, c.Z)(e), '_handleItemRef', function (t) {
                e._itemRef = t
              }),
              (0, d.Z)((0, c.Z)(e), '_handleOnRemove', function (t) {
                var r = e.props,
                  a = r.index,
                  n = r.item
                ;(0, r.onRemoveQuery)(n, a), t.stopPropagation()
              }),
              (0, d.Z)((0, c.Z)(e), '_handleOnClick', function () {
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
            (0, o.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.domId,
                    r = e.item,
                    a = e.testID
                  return u.createElement(
                    F.Z,
                    {
                      accessibilityRole: 'option',
                      accessibilitySelected: !!t,
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [ve.root, t && ve.focused, !(null != r && r.user) && ve.itemPadding],
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
        ve = m.Z.create(function (e) {
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
        be = r(424208),
        ge = r(663140),
        Ce = r(923335),
        _e = r(671896),
        Ee = r(233500),
        Ie = r(823803)
      function we(e) {
        return (
          (0, ge.VZ)(e, ge.ZP.GenericUserNotFound) ||
          (0, ge.VZ)(e, ge.ZP.OtherUserSuspended) ||
          (0, ge.VZ)(e, ge.ZP.AddressBookLookupNotFound)
        )
      }
      var Re = (0, Ze.P1)(_e.Ww, z.ZP.selectFetchStatuses, function (e, t) {
          var r = (0, L.Z)(e, function (e) {
            var r,
              a = null === (r = e.user) || void 0 === r ? void 0 : r.id
            return a && t[a] ? { id: a, fetchStatus: t[a] } : void 0
          })
          return (0, be.Z)(r, function (e) {
            return e.fetchStatus
          })
        }),
        xe = (0, Ze.P1)(Re, function (e) {
          var t
          return (null !== (t = e[Ie.ZP.FAILED]) && void 0 !== t ? t : []).map(function (e) {
            return e.id
          })
        }),
        ke = (0, Ze.P1)(Re, z.ZP.selectErrors, function (e, t) {
          var r,
            a,
            n,
            i = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : [],
            o = null !== (a = e[Ie.ZP.LOADED]) && void 0 !== a ? a : [],
            c = null !== (n = e[Ie.ZP.LOADING]) && void 0 !== n ? n : [],
            s = i.filter(function (e) {
              var r,
                a = e.id
              return !we(null !== (r = t[a]) && void 0 !== r ? r : {})
            })
          return c.length > 0 ? Ie.ZP.LOADING : o.length > 0 ? Ie.ZP.LOADED : s.length > 0 ? Ie.ZP.FAILED : Ie.ZP.NONE
        }),
        Te = (0, Ze.P1)(Re, z.ZP.selectErrors, function (e, t) {
          var r,
            a = null !== (r = e[Ie.ZP.FAILED]) && void 0 !== r ? r : []
          return (0, L.Z)(a, function (e) {
            var r
            if (we(null !== (r = t[e.id]) && void 0 !== r ? r : {})) return e.id
          })
        }),
        Le = (0, Ze.P1)(Ee.as, function (e) {
          return e.map(function (e) {
            return { keyword: { query: e.query }, savedSearchId: e.id_str, category: Z.Hk.SavedSearch }
          })
        }),
        De = (0, Ze.P1)(_e.Ww, function (e) {
          return e.map(function (e) {
            return (0, a.Z)((0, a.Z)({}, e), {}, { category: Z.Hk.RecentSearch })
          })
        })
      var Pe = (0, U.Z)()
        .propsFromState(function () {
          return {
            isRecentSearchDataLoaded: _e.H$,
            recentSearches: De,
            usersFetchStatus: ke,
            invalidRecentSearchUserIds: Te,
            failedRecentSearchUserIds: xe,
            savedSearches: Le,
          }
        })
        .adjustStateProps(function (e) {
          var t = e.failedRecentSearchUserIds,
            r = e.invalidRecentSearchUserIds,
            a = e.isRecentSearchDataLoaded,
            n = e.recentSearches,
            i = e.savedSearches,
            o = e.usersFetchStatus,
            c = !n.filter(function (e) {
              var t = e.user
              return t && r.indexOf(t.id) < 0
            }).length,
            s = o !== Ie.ZP.LOADING && a && c ? Ie.ZP.LOADED : o
          return {
            failedRecentSearchUserIds: t,
            invalidRecentSearchUserIds: r,
            recentSearches: n,
            fetchStatus: s,
            savedSearches: i,
          }
        })
        .propsFromActions(function () {
          return {
            clearAll: _e.qF,
            createLocalApiErrorHandler: (0, Ce.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
            deleteSavedSearch: Ee.k9,
            fetchRecentSearchesIfNeeded: _e.OB,
            fetchSavedSearchesIfNeeded: Ee.l9,
            fetchUsersIfNeeded: z.ZP.fetchManyIfNeeded,
            fetchUsersPresenceIfNeeded: B.ZP.fetchManyIfNeeded,
            removeQuery: _e.hj,
          }
        })
        .withAnalytics({ element: 'typeahead' })
      var Fe = r(950617),
        Ae = r(785693),
        He = f().ee295fbe,
        Ue = f().a2c1b222,
        Be = { headline: f().f45c4250, text: f().caae4dda, confirmButtonLabel: f().dbd5d400 },
        ze = f().a8d68f62,
        Ne = f().c6530778,
        Oe = f().e047b8fa,
        Qe = ['event', 'keyword', 'topic', 'user'],
        Me = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r(e, n) {
            var o
            return (
              (0, i.Z)(this, r),
              (o = t.call(this, e, n)),
              (0, d.Z)((0, c.Z)(o), '_getRecentSearchItems', function () {
                var e = o.props,
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
              (0, d.Z)((0, c.Z)(o), '_render', function () {
                var e = o.props,
                  t = e.domId,
                  r = e.savedSearches,
                  a = 0 === o._getNumOfSearchItems(),
                  n = o._getRecentSearchItems()
                return a
                  ? u.createElement(
                      h.Z,
                      { style: qe.emptyState, testID: Ae.Z.typeaheadEmptySearch },
                      u.createElement(
                        x.ZP,
                        { align: 'center', color: 'gray700' },
                        o.context.featureSwitches.isTrue('rweb_lists_global_search_enabled') ? Ue : He,
                      ),
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
                              { style: qe.header, testID: Ae.Z.typeaheadRecentSearchesHeader },
                              u.createElement(x.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, ze),
                              u.createElement(
                                k.ZP,
                                {
                                  onBlur: o._handleClearAllBlur,
                                  onFocus: o._handleClearAllFocus,
                                  onPress: o._handleClearAllClick,
                                  ref: o._setClearAllButtonRef,
                                  size: 'xSmall',
                                  type: 'brandText',
                                },
                                Oe,
                              ),
                            ),
                            n.map(function (e, t) {
                              return o._renderRecentSearchItem(e, t)
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
                                style: [qe.header, qe.borderTop],
                                testID: Ae.Z.typeaheadSavedSearchesHeader,
                              },
                              u.createElement(x.ZP, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, Ne),
                            ),
                            o._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              (0, d.Z)((0, c.Z)(o), '_renderRecentSearchItem', function (e, t) {
                var r = o.props.ariaDescendantId,
                  a = o.state.focusIndex === t
                return u.createElement(Se, {
                  domId: a ? r : void 0,
                  index: t,
                  item: e,
                  key: o._chooseKeyType(e, t),
                  onItemClick: o._handleOnItemClick,
                  onRemoveQuery: o._handleRemoveQuery,
                  ref: a ? o._setFocusedItemRef : void 0,
                  testID: Ae.Z.typeaheadRecentSearchesItem,
                })
              }),
              (0, d.Z)((0, c.Z)(o), '_chooseKeyType', function (e, t) {
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
              (0, d.Z)((0, c.Z)(o), '_renderSavedSearches', function () {
                var e = o.props,
                  t = e.ariaDescendantId,
                  r = e.savedSearches,
                  a = o.state.focusIndex,
                  n = o._getRecentSearchItems(),
                  i = (0, w.Z)(r)
                return (
                  i.reverse(),
                  u.createElement(
                    h.Z,
                    { testID: Ae.Z.typeaheadSavedSearchesContainer },
                    i.map(function (e, r) {
                      var i = a === r + n.length
                      return u.createElement(Se, {
                        domId: i ? t : void 0,
                        index: r,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: o._handleOnItemClick,
                        onRemoveQuery: o._handleRemoveQuery,
                        ref: i ? o._setFocusedItemRef : void 0,
                        testID: Ae.Z.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              (0, d.Z)((0, c.Z)(o), '_getNumOfSearchItems', function () {
                var e = o.props.savedSearches,
                  t = o._getRecentSearchItems()
                return e.length + t.length
              }),
              (0, d.Z)((0, c.Z)(o), '_handleUsersRetry', function () {
                o._fetchUsersDetailsIfNeeded()
              }),
              (0, d.Z)((0, c.Z)(o), '_fetchUsersDetailsIfNeeded', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchUsersIfNeeded,
                  a = e.fetchUsersPresenceIfNeeded,
                  n = e.invalidRecentSearchUserIds,
                  i = e.recentSearches,
                  c = o.context,
                  s = c.featureSwitches,
                  l = c.viewerUserId,
                  d = (function (e, t) {
                    return (0, L.Z)(e, function (e) {
                      var r,
                        a = null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id
                      if (a && t.indexOf(a) < 0) return a
                    })
                  })(i, n)
                r(d)['catch'](t({})),
                  l && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && a(d)['catch'](t({}))
              }),
              (0, d.Z)((0, c.Z)(o), '_handleRemoveQuery', function (e, t) {
                var r = o.props,
                  a = r.analytics,
                  n = r.removeQuery
                switch (e.category) {
                  case Z.Hk.RecentSearch:
                    var i = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    n(i), o._resetFocus()
                    var c = S.Z.forRecentSearchResult(i, t),
                      s = o._handleRemoveAction(e)
                    c && a.scribe({ action: s, data: { items: [c] } })
                    break
                  case Z.Hk.SavedSearch:
                    o.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              (0, d.Z)((0, c.Z)(o), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              (0, d.Z)((0, c.Z)(o), '_handleClearAllBlur', function () {
                o.setState({ clearAllButtonHasFocus: !1 })
              }),
              (0, d.Z)((0, c.Z)(o), '_handleClearAllFocus', function () {
                o.setState({ clearAllButtonHasFocus: !0 })
              }),
              (0, d.Z)((0, c.Z)(o), '_handleClearAllClick', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              (0, d.Z)((0, c.Z)(o), '_handleOnClearAllConfirm', function () {
                var e = o.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (0, d.Z)((0, c.Z)(o), '_handleOnClearAllCancel', function () {
                o.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              (0, d.Z)((0, c.Z)(o), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = o.props,
                  t = e.analytics,
                  r = e.deleteSavedSearch,
                  a = e.savedSearches,
                  n = o.state.savedSearchIdToDelete,
                  i = a.findIndex(function (e) {
                    return e.savedSearchId === n
                  }),
                  c = a[i]
                if (n) {
                  r(n)
                  var s = c && S.Z.forSavedSearchResult(c.keyword.query, i)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (0, d.Z)((0, c.Z)(o), '_handleOnDeleteSavedSearchCancel', function () {
                o.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              (0, d.Z)((0, c.Z)(o), '_handleOnItemClick', function (e, t) {
                var r = o.props,
                  a = r.onDismiss
                ;(0, r.onItemClick)(e, t), o._scribeClick(e, t), a && a()
              }),
              (0, d.Z)((0, c.Z)(o), '_scribeRecentSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  r = e.recentSearches
                if (r && r.length) {
                  var a = (0, L.Z)(r, function (e, t) {
                    return S.Z.forRecentSearchResult(e, t)
                  })
                  t.scribe({ action: 'impression', data: { items: a } })
                }
              }),
              (0, d.Z)((0, c.Z)(o), '_scribeSavedSearchImpression', function () {
                var e = o.props,
                  t = e.analytics,
                  r = e.savedSearches
                if (r && r.length) {
                  var a = (0, L.Z)(r, function (e, t) {
                    return S.Z.forSavedSearchResult(e.keyword.query, t)
                  })
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: a } })
                }
              }),
              (0, d.Z)((0, c.Z)(o), '_scribeClick', function (e, t) {
                var r = o.props.analytics
                switch (e.category) {
                  case Z.Hk.SavedSearch:
                    var n = S.Z.forSavedSearchResult(e.query, t)
                    r.scribe({ element: 'typeahead', action: 'click', data: { targets: [n] } })
                    break
                  case Z.Hk.RecentSearch:
                    var i
                    e.recentSearchType &&
                      (i =
                        e.recentSearchType === Z.g2.User
                          ? { user: { type: Z.g2.User, id: e.query } }
                          : e.recentSearchType === Z.g2.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: (0, a.Z)((0, a.Z)({}, e.queryMetadata), {}, { type: Z.g2.Event, id: e.query }) }
                          : e.recentSearchType === Z.g2.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: (0, a.Z)((0, a.Z)({}, e.queryMetadata), {}, { type: Z.g2.Topic, id: e.query }) }
                          : { keyword: { type: Z.g2.Keyword, query: e.query } })
                    var c = i && S.Z.forRecentSearchResult(i, t)
                    c && r.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              (0, d.Z)((0, c.Z)(o), '_setClearAllButtonRef', function (e) {
                o._clearAllButtonRef = e
              }),
              (0, d.Z)((0, c.Z)(o), '_setFocusedItemRef', function (e) {
                ;(o._focusedItemRef = e),
                  e &&
                    o._shouldScrollToFocusedItem &&
                    ((0, P.up)(o._getScrollParent(), o._getFocusedItem()), (o._shouldScrollToFocusedItem = !1))
              }),
              (0, d.Z)((0, c.Z)(o), 'hasFocusedItem', function () {
                return o._getNumOfSearchItems() > 0
              }),
              (0, d.Z)((0, c.Z)(o), 'deleteFocusedItem', function () {
                if (o.hasFocusedItem()) {
                  var e,
                    t,
                    r =
                      null === (e = o._focusedItemRef) || void 0 === e || null === (t = e.props) || void 0 === t
                        ? void 0
                        : t.item
                  if (r) return o._handleRemoveQuery(r, o.state.focusIndex), !0
                }
                return !1
              }),
              (0, d.Z)((0, c.Z)(o), 'selectFocusedItem', function () {
                if (o.hasFocusedItem()) {
                  var e = o._focusedItemRef && o._focusedItemRef.searchItemData
                  e && o._handleOnItemClick(e, o.state.focusIndex)
                }
              }),
              (0, d.Z)((0, c.Z)(o), '_setFocusIndex', function (e, t) {
                var r = o.props.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), r && r()
              }),
              (0, d.Z)((0, c.Z)(o), '_resetFocus', function () {
                o._setFocusIndex(-1)
              }),
              (0, d.Z)((0, c.Z)(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(r, !0)
                }
              }),
              (0, d.Z)((0, c.Z)(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getNumOfSearchItems()
                if (0 !== t) {
                  var r = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(r, !0)
                }
              }),
              (0, d.Z)((0, c.Z)(o), 'navigateNext', function () {
                if (o._clearAllButtonRef && !o.state.clearAllButtonHasFocus) return o._clearAllButtonRef
              }),
              (0, d.Z)((0, c.Z)(o), 'navigatePrevious', function () {}),
              (o.state = {
                clearAllButtonHasFocus: !1,
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
              }),
              o
            )
          }
          return (
            (0, o.Z)(r, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    r = e.fetchRecentSearchesIfNeeded,
                    a = e.fetchSavedSearchesIfNeeded,
                    n = e.recentSearches,
                    i = e.savedSearches
                  r(),
                    a()['catch'](t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((n && n.length) || (i && i.length)) && this._resetFocus()
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
                    i = a.shouldShowDeleteSavedSearchConfirmation
                  return u.createElement(
                    h.Z,
                    { style: r },
                    u.createElement(D.Z, {
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
                          testID: Ae.Z.deleteRecentSearchesDialog,
                          text: Be.text,
                        })
                      : null,
                    i
                      ? u.createElement(Fe.Z, {
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
                    var e = (0, P.rP)(R.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function value() {
                  var e = this._focusedItemRef && R.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            r
          )
        })(u.Component)
      ;(0, d.Z)(Me, 'contextType', _.rC)
      var qe = m.Z.create(function (e) {
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
      var Ve = Pe.forwardRef(Me)
      var je = (0, U.Z)()
        .propsFromActions(function () {
          return { addQuery: _e.DI }
        })
        .withAnalytics({ component: 'search_box' })
      var We = r(196234),
        Ge = r(702847),
        Ke = function Ke(e, t) {
          return z.ZP.select(e, t.userId)
        }
      var Ye = function Ye(e) {
        var t = e.user,
          r = e.userId,
          a = u.useState(!1),
          n = (0, We.Z)(a, 2),
          i = n[0],
          o = n[1],
          c = u.useContext(_.rC).featureSwitches.isTrue('follow_nudge_search_enabled')
        return (
          u.useEffect(
            function () {
              c && t && !t.following && o(!0)
            },
            [t, c],
          ),
          i ? u.createElement(Ge.C, { isFollowNudge: !0, showRelationshipChangeConfirmation: !0, userId: r }) : null
        )
      }
      var $e = (0, U.Z)().propsFromState(function () {
          return { user: Ke }
        })(u.memo(Ye)),
        Je = 'SearchBox_Search_Input'
      var Xe = f().a9ae1e78,
        et = f().hbc99b03,
        tt = /^(\w+)$/,
        rt = [b.my.Events, b.my.Users, b.my.Topics],
        at = [b.my.Events, b.my.Users, b.my.Topics, b.my.Lists],
        nt = function nt(e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        it = (function (e) {
          ;(0, s.Z)(r, e)
          var t = (0, l.Z)(r)
          function r(e, o) {
            var s, l
            return (
              (0, i.Z)(this, r),
              (l = t.call(this, e, o)),
              (0, d.Z)((0, c.Z)(l), '_renderSearchBoxEmptyState', function (e) {
                return u.createElement(Ve, (0, n.Z)({}, e, { onItemClick: l._handleSearchItemClick }))
              }),
              (0, d.Z)((0, c.Z)(l), '_renderSearchUserDecoration', function (e) {
                e.user
                var t = e.userId,
                  r = l.context.viewerUserId
                return r && t !== r ? u.createElement($e, { userId: t }) : null
              }),
              (0, d.Z)((0, c.Z)(l), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  r = e.link,
                  n = e.query,
                  i = e.queryMetadata,
                  o = e.recentSearchType,
                  c = l.props.addQuery
                t === Z.Hk.SavedSearch
                  ? l._submitQuery({ query: n, shouldAddToRecentSearch: !1, src: g.Z.SavedSearchClick })
                  : o === Z.g2.Keyword
                  ? l._submitQuery({ query: n, shouldAddToRecentSearch: !0, src: g.Z.RecentSearchClick })
                  : o === Z.g2.Event
                  ? (l._routeTransition({ pathname: '/i/events/'.concat(n) }),
                    i && i.title && c({ event: (0, a.Z)((0, a.Z)({}, i), {}, { id: n, type: Z.g2.Event }) }))
                  : o === Z.g2.Topic
                  ? (l._routeTransition({ pathname: '/i/topics/'.concat(n) }),
                    i && i.name && c({ topic: (0, a.Z)((0, a.Z)({}, i), {}, { id: n, type: Z.g2.Topic }) }))
                  : r &&
                    (l._routeTransition({ pathname: '/'.concat(r), userId: n }),
                    c({ user: { id: n, type: Z.g2.User } }))
              }),
              (0, d.Z)((0, c.Z)(l), '_handleSearchShortcut', function (e) {
                var t = l._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              (0, d.Z)((0, c.Z)(l), '_getUserExactMatch', function (e) {
                e.hasResults
                var t = e.isLoaded,
                  r = e.query,
                  a = nt(r)
                if (t && a.match(tt))
                  return {
                    id: ''.concat(r, '_no_result_user'),
                    type: b.El.NoResult,
                    data: { text: et({ screenName: a }), type: 'user' },
                  }
              }),
              (0, d.Z)((0, c.Z)(l), '_handleOnDismiss', function () {
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
              (0, d.Z)((0, c.Z)(l), '_handleOnFocus', function () {
                var e = l.props,
                  t = e.analytics,
                  r = e.history,
                  n = r.location,
                  i = n.state || {}
                if (!i.searchFocused) {
                  var o = (0, a.Z)(
                    (0, a.Z)({}, n),
                    {},
                    { state: (0, a.Z)((0, a.Z)({}, i), {}, { searchFocused: !0, lockScroll: !0 }) },
                  )
                  t.scribe({ action: 'focus_field' }), r.push(o)
                }
              }),
              (0, d.Z)((0, c.Z)(l), '_handleChange', function (e) {
                l.setState({ query: e })
              }),
              (0, d.Z)((0, c.Z)(l), '_handleTypeaheadSubmit', function () {
                var e = l.state,
                  t = e.items,
                  r = e.query,
                  a = l.props.analytics
                ;/^\s*$/.test(r) ||
                  (a.scribe({
                    action: 'search',
                    data: { items: S.Z.forTypeaheadResults(t), search_details: { query: r } },
                  }),
                  l._submitQuery({ query: r, shouldAddToRecentSearch: !0 }))
              }),
              (0, d.Z)((0, c.Z)(l), '_handleItemClick', function (e, t) {
                var r = l.props.addQuery,
                  a = l.state.query
                switch (e.type) {
                  case b.El.Event:
                    e.data && e.data.url
                      ? l._routeTransition({ pathname: v.ZP.parseInternalUrl(e.data.url) })
                      : l._submitQuery({ query: e.data.topic, src: g.Z.TypeaheadClick })
                    break
                  case b.El.Hashtag:
                  case b.El.Topic:
                    l._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: g.Z.TypeaheadClick })
                    break
                  case b.El.List:
                    l._routeTransition({ pathname: '/i/lists/'.concat(e.id) })
                    break
                  case b.El.NoResult:
                    var n = e.data.type
                    'user' === n
                      ? l._routeTransition({ pathname: '/'.concat(nt(a)) })
                      : 'topic' === n &&
                        l._submitQuery({ query: a, shouldAddToRecentSearch: !0, src: g.Z.TypeaheadClick })
                    break
                  case b.El.User:
                    if (e.data.id_str) r({ user: { id: e.data.id_str, type: Z.g2.User } })
                    l._routeTransition({ pathname: '/'.concat(e.data.screen_name), userId: e.data.id_str })
                }
              }),
              (0, d.Z)((0, c.Z)(l), '_handleItemsChanged', function (e) {
                l.setState({ items: e })
              }),
              (0, d.Z)((0, c.Z)(l), '_routeTransition', function (e) {
                var t = e.params,
                  r = e.pathname,
                  n = e.query,
                  i = e.src,
                  o = e.userId,
                  c = l.props,
                  s = c.history,
                  d = c.location,
                  u = (0, a.Z)(
                    (0, a.Z)({}, d),
                    {},
                    {
                      pathname: r,
                      search: '',
                      query: t || (n ? { q: n, src: i } : {}),
                      state: (0, a.Z)(
                        (0, a.Z)({}, d.state),
                        {},
                        { searchFocused: !1, lockScroll: !1 },
                        o ? { userId: o } : {},
                      ),
                    },
                  )
                s.replace(u)
              }),
              (0, d.Z)((0, c.Z)(l), '_submitQuery', function (e) {
                var t = e.query,
                  r = e.shouldAddToRecentSearch,
                  a = void 0 !== r && r,
                  n = e.src,
                  i = void 0 === n ? g.Z.Typed : n,
                  o = l.props,
                  c = o.addQuery,
                  s = o.mode,
                  d = o.onSubmit,
                  u = o.searchFilters,
                  h = o.searchRoute
                ;(d && d(t, i, l.state.lastSubmittedQuery === t), a) && c({ keyword: { query: t, type: Z.g2.Keyword } })
                var m = (0, Z.F_)({ query: t, querySrc: i, mode: s, searchFilters: u })
                l._routeTransition({ pathname: h, params: m, src: i }), l.setState({ lastSubmittedQuery: t })
              }),
              (0, d.Z)((0, c.Z)(l), '_setInputRef', function (e) {
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
            (0, o.Z)(r, [
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
                    a = e.isOnHomepage,
                    n = e.location,
                    i = e.placeholder,
                    o = this.state.query,
                    c = (n.state || {}).searchPrefill,
                    s = this.props.initialValue || c,
                    l = !!n.state && !!n.state.searchFocused
                  return u.createElement(
                    h.Z,
                    { style: ot.root },
                    u.createElement(I['default'], {
                      filter: this.context.featureSwitches.isTrue('rweb_lists_global_search_enabled') ? at : rt,
                      forceVdlDisable: t,
                      getTopicExactMatch: o ? b.P0 : void 0,
                      getUserExactMatch: o ? this._getUserExactMatch : void 0,
                      initialValue: s,
                      inputStyle: ot.input,
                      isCompact: r,
                      isOnHomepage: a,
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
                      shouldAutoFocus: l,
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
      ;(0, d.Z)(it, 'defaultProps', { initialValue: '', placeholder: Xe, searchRoute: '/search', forceVdlDisable: !0 }),
        (0, d.Z)(it, 'contextType', _.rC)
      var ot = m.Z.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      var ct = (0, C.ZP)(je(it))
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
          return b
        },
        l9: function l9() {
          return g
        },
      })
      var a = r(256666),
        n = r(968079),
        i = r(133028),
        o = r(86522),
        c = (r(22144), r(818178), r(995342), r(358188), r(73439), r(472599)),
        s = r(526853),
        l = r(753392),
        d = r(823803),
        u = r(467935),
        h = 'savedSearches',
        m = { fetchStatus: d.ZP.NONE, savedSearches: [] },
        p = Object.freeze({
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
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t) return e
        switch (t.type) {
          case p.SUCCESS:
            var r = t.payload,
              a = Array.isArray(r)
            return (
              a ||
                (0, c.ZP)('Saved search results are not type array', {
                  extra: { savedSearchResultsType: (0, o.Z)(r) },
                }),
              (0, i.Z)((0, i.Z)({}, e), {}, { fetchStatus: d.ZP.LOADED, savedSearches: a && r ? r : [] })
            )
          case p.FAILURE:
            return (0, i.Z)((0, i.Z)({}, e), {}, { fetchStatus: d.ZP.FAILED })
          case f.SUCCESS:
            return (0, i.Z)(
              (0, i.Z)({}, e),
              {},
              { savedSearches: t.payload ? [].concat((0, n.Z)(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case y.SUCCESS:
            return t.payload
              ? (0, i.Z)(
                  (0, i.Z)({}, e),
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
      s.Z.register((0, a.Z)({}, h, v))
      var S = function S(e) {
          return e.savedSearches.savedSearches
        },
        Z = function Z(e) {
          return function (t, r, a) {
            var n = a.api
            return (0, l._O)(t, { request: n.SavedSearches.create, params: { query: e } })({
              actionTypes: f,
              context: 'SAVE_SEARCH',
            })
          }
        },
        b = function b(e) {
          return function (t, r, a) {
            var n = a.api
            return (0, l._O)(t, { request: n.SavedSearches.destroy, params: { id: e } })({
              actionTypes: y,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        g = function g() {
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
                    actionTypes: p,
                    context: 'FETCH_SAVED_SEARCHES',
                  })
                })
          }
        }
    },
    286928: function _(e, t, r) {
      r.d(t, {
        ZP: function ZP() {
          return m
        },
        cY: function cY() {
          return h
        },
        vj: function vj() {
          return c
        },
      })
      var a = r(133028),
        n =
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
        i = r(829122),
        o = r(791191),
        c = 30,
        s = (0, i.ZP)({
          namespace: 'userPresence',
          entityIsComplete: function entityIsComplete(e) {
            return e.expiry > Date.now()
          },
        }),
        l = (0, i.tb)(s, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.AudioSpacesPresence.fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        d = (0, i.Nr)(s, {
          context: 'FETCH_USER_PRESENCE',
          endpoint: function endpoint(e) {
            return e.AudioSpacesPresence.fetchPresence
          },
          params: function params(e) {
            return { userIds: e }
          },
        }),
        u = (0, a.Z)((0, a.Z)((0, a.Z)({}, s), l), d),
        h = function h(e, t) {
          var r = u.select(e, t),
            a = r ? r.spaces : void 0
          return (
            a && {
              presenceRingType: 'space',
              link: {
                pathname: (0, n.e)(a.live_content.audiospace.broadcast_id),
                state: { origin: 'audiospace_ring' },
              },
              spaceId: a.live_content.audiospace.broadcast_id,
            }
          )
        }
      var m = o.Z.register(u)
    },
    641310: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return g
        },
      })
      var a = r(709249),
        n = r(887371),
        i = r(545754),
        o = r(486906),
        c = r(256666),
        s = r(202784),
        l = r(325686),
        d = r(473228),
        u = r.n(d),
        h = r(285042),
        m = r(436934),
        p = r(973186),
        f = u().f1a1b791,
        y = u().if2bf8b4,
        v = u().f3624b5c,
        S = u().b4b3b113,
        Z = u().be222050,
        b = u().hcbbe447,
        g = (function (e) {
          ;(0, i.Z)(r, e)
          var t = (0, o.Z)(r)
          function r() {
            return (0, a.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, n.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.color,
                    r = e.nativeID,
                    a = e.style
                  return s.createElement(
                    l.Z,
                    { style: [C.root, a] },
                    s.createElement(h['default'], { style: [C.icon, t && C[t]] }),
                    s.createElement(m.ZP, { color: t, nativeID: r, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function value() {
                  var e = this.props,
                    t = e.contentAuthorId,
                    r = e.label,
                    a = e.promotedContent,
                    n = a.adMetadataContainer,
                    i = a.advertiser,
                    o = a.advertiser_name,
                    c = a.disclosure_type,
                    s = t && i && t === i.id_str,
                    l = 'string' == typeof c && 'political' === c.toLowerCase(),
                    d = 'string' == typeof c && 'issue' === c.toLowerCase(),
                    u = !(!n || 'POLITICAL' !== n.disclaimerType) || l,
                    h = !(!n || 'ISSUE' !== n.disclaimerType) || d,
                    m = (n || {}).removePromotedAttributionForPreroll
                  return (
                    r ||
                    (!o || s || m
                      ? u
                        ? v
                        : h
                        ? Z
                        : y
                      : u
                      ? S({ fullName: o })
                      : h
                      ? b({ fullName: o })
                      : f({ fullName: o }))
                  )
                },
              },
            ]),
            r
          )
        })(s.Component)
      ;(0, c.Z)(g, 'defaultProps', { color: 'gray700' })
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
          return z
        },
      })
      r(472508), r(326936)
      var a = r(202784),
        n = r(241487),
        i = r(473228),
        o = r.n(i),
        c = r(55269),
        s = r(81921),
        l = r(90649),
        d = r(240811),
        u = r(914481),
        h = r(517272),
        m = r(407307),
        p = r(106059),
        f = r(880166),
        y = r(440271),
        v = r(511258),
        S = r(45680),
        Z = r(833131),
        b = r(575629),
        g = r(27895),
        C = r(156538),
        _ = r(307742),
        E = r(225163),
        I = r(721783),
        w = r(436934),
        R = r(537800),
        x = r(973186),
        k = r(849376),
        T = o().ae408b76,
        L = o().j355f008,
        D = o().habf9678,
        P = o().db0798ed,
        F = o().dc716ec9,
        A = function A(e) {
          return a.createElement(w.ZP, { dir: n.Z.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        H = function H(e, t) {
          return t
            ? T
            : (function (e) {
                var t = A(e)
                return a.createElement(o().I18NFormatMessage, { $i18n: 'fcd931ed' }, t)
              })(e)
        },
        U = x.Z.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        B = x.Z.create(function (e) {
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
      var z = function z(e) {
        var t = e.contextType,
          r = e.iconColor,
          n = e.iconSize,
          i = e.link,
          o = e.retweetData,
          w = e.text,
          T = e.topicData,
          z = e.userAvatarUrls,
          N = o || {},
          O = N.isSelfRetweet,
          Q = N.name,
          M = N.screenName,
          q = (function (e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
              i = U[t],
              o = [r ? { color: x.Z.theme.colors[r] } : B.colorDeepGray, i],
              w = a.createElement(c['default'], { style: o }),
              T = a.createElement(s['default'], { style: o }),
              L = a.createElement(l['default'], { style: o }),
              D = a.createElement(d['default'], { style: o }),
              P = a.createElement(u['default'], { style: o }),
              F = a.createElement(h['default'], { style: B.circle }),
              A = a.createElement(m['default'], { style: o }),
              H = a.createElement(p['default'], { style: o }),
              z = a.createElement(f['default'], { style: o }),
              N = a.createElement(y['default'], { style: o }),
              O = a.createElement(v['default'], { style: o }),
              Q = a.createElement(S['default'], { style: o }),
              M = a.createElement(Z['default'], { style: o }),
              q = a.createElement(b['default'], { style: o }),
              V = a.createElement(g['default'], { style: o }),
              j = a.createElement(C['default'], { style: o }),
              W = a.createElement(_['default'], { style: o }),
              G = a.createElement(E['default'], { style: o }),
              K = a.createElement(R.Z, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: n }),
              Y = a.createElement(I['default'], { style: o })
            switch (e) {
              case k.Q.Pin:
              case k.Q.ReplyPin:
                return w
              case k.Q.Retweet:
                return T
              case k.Q.Like:
                return L
              case k.Q.Follow:
                return D
              case k.Q.Moment:
                return P
              case k.Q.NewTweets:
                return F
              case k.Q.Reply:
              case k.Q.Conversation:
                return A
              case k.Q.Feedback:
                return H
              case k.Q.Topic:
                return z
              case k.Q.List:
                return N
              case k.Q.Location:
                return O
              case k.Q.Community:
                return Q
              case k.Q.Spaces:
                return M
              case k.Q.Sparkle:
                return q
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
                return Y
              case k.Q.TextOnly:
              default:
                return null
            }
          })(t, n, r, z)
        switch (t) {
          case k.Q.Retweet:
            return { Icon: q, text: w || H(Q, O), link: M ? 'https://twitter.com/'.concat(M) : void 0 }
          case k.Q.Pin:
            return { Icon: q, text: w || L }
          case k.Q.ReplyPin:
            return { Icon: q, text: D }
          case k.Q.Topic:
            return {
              Icon: q,
              accessibilityLabel:
                'Recommendation' === (null == T ? void 0 : T.functionalityType) ||
                'RecWithEducation' === (null == T ? void 0 : T.functionalityType)
                  ? F({ topicName: w })
                  : P({ topicName: w }),
              text: w ? A(w) : null,
              link: i,
            }
          default:
            return { Icon: q, text: w ? A(w) : null, link: i }
        }
      }
    },
    309524: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return C
        },
      })
      var a = r(459740),
        n = r(709249),
        i = r(887371),
        o = r(545754),
        c = r(486906),
        s = r(256666),
        l = (r(472508), r(136728), r(108532), r(818178), r(202784)),
        d = r(325686),
        u = r(436934),
        h = r(137541),
        m = r(377089),
        p = r(973186),
        f = r(191062),
        y = r(868011),
        v = r(894963),
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
        b = (function (e) {
          ;(0, o.Z)(r, e)
          var t = (0, c.Z)(r)
          function r() {
            return (0, n.Z)(this, r), t.apply(this, arguments)
          }
          return (
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this,
                    t = this.props,
                    r = t.avatarSize,
                    n = t.bottomControl,
                    i = t.iconStyle,
                    o = t.nativeID,
                    c = t.onLayout,
                    s = t.rightControl,
                    p = t.style,
                    f = t.testID,
                    y = t.textColor,
                    S = t.textSize,
                    b = t.topControl,
                    C = t.weight,
                    _ = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, (0, a.Z)(t, Z)),
                    I = (0, v.Z)(E),
                    w = I.Icon,
                    R = I.accessibilityLabel,
                    x = I.link,
                    k = I.text,
                    T = l.createElement(
                      u.ZP,
                      { accessibilityLabel: R, color: y, nativeID: o, numberOfLines: 2, size: S, testID: f, weight: C },
                      k,
                    ),
                    L = this._getStyles(),
                    D = L.cellStyle,
                    P = L.viewStyle
                  return k
                    ? l.createElement(m.ZP.UseProps, null, function (t) {
                        return l.createElement(
                          l.Fragment,
                          null,
                          b || null,
                          l.createElement(
                            d.Z,
                            {
                              onLayout: c,
                              style: [p, P, t.socialContextRefreshEnabled() && !_ && g.socialContextRefresh],
                            },
                            l.createElement(
                              h.Z,
                              {
                                avatarCell: w || (_ ? null : void 0),
                                avatarCellStyle: [
                                  i,
                                  g.socialContextIconColumn,
                                  !_ && g.unsetIconWidth,
                                  t.socialContextRefreshEnabled() && !_ && g.socialContextRefreshIcon,
                                ],
                                avatarSize: r,
                                cellStyle: D,
                              },
                              l.createElement(
                                d.Z,
                                { style: g.cellWrapper },
                                l.createElement(
                                  d.Z,
                                  {
                                    style: [
                                      g.socialContextTextColumn,
                                      t.socialContextRefreshEnabled() && !_ && g.socialContextRefreshTextColumn,
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
                    i = r.onClick,
                    o = r.retweetData,
                    c = r.textColor,
                    s = r.topicData,
                    d = (o || {}).screenName,
                    h = l.createElement(u.ZP, { color: c, link: e, nativeID: n, onClick: i }, t)
                  return a === S.Q.Topic && s
                    ? l.createElement(f.Z, { topicId: s.topicId }, h)
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
                    i = r === S.Q.TextOnly,
                    o = a ? [g.bottomBorderMargin, !!t && g.bottomBorder] : [],
                    c = a && !t ? [g.bottomBorder] : []
                  return (
                    i && c.push(g.topicContext),
                    n && c.push(g.socialContextTextCentered),
                    { viewStyle: o, cellStyle: c }
                  )
                },
              },
            ]),
            r
          )
        })(l.PureComponent)
      ;(0, s.Z)(b, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var g = p.Z.create(function (e) {
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
    988403: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return y
        },
      })
      var a = r(807896),
        n = r(459740),
        i = r(196234),
        o = r(202784),
        c = r(325686),
        s = r(473228),
        l = r.n(s),
        d = r(833131),
        u = r(971575),
        h = r(566970),
        m = r(973186),
        p = r(887191),
        f = ['accessibilityLabel', 'presenceRingType', 'spaceId']
      var y = function y(e) {
        var t = u.Z.useAnalytics(),
          r = o.useState(),
          c = (0, i.Z)(r, 2),
          s = c[0],
          l = c[1],
          d = !!(s && s > 70),
          m = e.accessibilityLabel,
          y = e.presenceRingType,
          S = (e.spaceId, (0, n.Z)(e, f)),
          Z =
            m ||
            (function (e, t) {
              if ('space' === e) return b.activeSpace({ screenName: t })
              return
            })(y, e.screenName)
        return (
          o.useEffect(
            function () {
              if ('space' === y) t.scribe({ element: 'audiospace_ring', action: 'impression' })
            },
            [y],
          ),
          o.createElement(
            p['default'],
            (0, a.Z)({}, S, {
              BorderComponent: h.Z.Default,
              accessibilityLabel: Z,
              avatarRef: function avatarRef(e) {
                if (e) {
                  var t = e.getBoundingClientRect()
                  t.width !== s && l(t.width)
                }
              },
              borderWidth: d ? 'large' : 'medium',
              decoration: o.createElement(v, { isWide: d, type: y }),
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
        return 'space' === e.type ? o.createElement(S, e) : null
      }
      function S(e) {
        return o.createElement(
          c.Z,
          { style: [Z.root, e.isWide ? Z.rootWide : Z.rootNarrow] },
          o.createElement(
            h.Z.Default,
            { style: [Z.spaceGradient, e.isWide ? Z.borderWide : Z.borderNarrow] },
            o.createElement(d['default'], { style: Z.spaceIcon }),
          ),
        )
      }
      var Z = m.Z.create(function (e) {
          var t = e.spacesPx.space16 + e.spacesPx.space2,
            r = '100%',
            a = e.spacesPx.space4,
            n = e.spacesPx.space2
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
            rootWide: { end: -1 * a, bottom: -1 * a },
            rootNarrow: { end: -1 * n, bottom: -1 * n },
            borderWide: { borderWidth: a },
            borderNarrow: { borderWidth: n },
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
        b = { withoutUsernameFallback: l().b4cb0be2, activeSpace: l().g6520ddf }
    },
    819153: function _(e, t, r) {
      r.d(t, {
        ZP: function ZP() {
          return P
        },
      })
      var a = r(807896),
        n = r(709249),
        i = r(887371),
        o = r(580753),
        c = r(545754),
        s = r(486906),
        l = r(256666),
        d = (r(22144), r(818178), r(326936), r(472508), r(374083), r(334115), r(200634), r(202784)),
        u = r(325686),
        h = r(35953),
        m = r(436934),
        p = r(137541),
        f = r(186454),
        y = r(525663),
        v = r(377089),
        S = r(77227),
        Z = r(174062),
        b = r(641310),
        g = r(309524),
        C = r(894963),
        _ = r(973186),
        E = r(887191),
        I = r(988403),
        w = r(954813),
        R = r(695995)
      var x = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        k = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          SubscribableUser: 'SubscribableUser',
        }),
        T = h.Z.createLayoutCache(),
        L = (function (e) {
          ;(0, c.Z)(r, e)
          var t = (0, s.Z)(r)
          function r() {
            var e
            ;(0, n.Z)(this, r)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) {
              i[c] = arguments[c]
            }
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, l.Z)((0, o.Z)(e), '_renderUserName', function () {
                var t = e.props,
                  r = t.affiliateBadgeInfo,
                  a = t.badgeContext,
                  n = t.disabledMessage,
                  i = t.displayNameLabel,
                  o = t.isBlocking,
                  c = t.isBlueVerified,
                  s = t.isDisabled,
                  l = t.isFollowedBy,
                  h = t.isProtected,
                  p = t.isVerified,
                  f = t.name,
                  y = t.onScreenNameClick,
                  v = t.promotedContent,
                  S = t.promotedItemType,
                  Z = t.screenName,
                  b = t.screenNameSuffix,
                  g = t.translatorType,
                  C = t.verifiedType,
                  _ = t.withFollowsYou,
                  E = t.withLink,
                  I = d.createElement(R.Z, {
                    affiliateBadgeInfo: r,
                    badgeContext: a,
                    displayNameLabel: i,
                    isBlueVerified: c,
                    isProtected: h,
                    isVerified: p,
                    name: f,
                    onLinkClick: y,
                    promotedContent: S === x.TWEET ? v : void 0,
                    screenName: Z,
                    screenNameSuffix: b,
                    translatorType: g,
                    verifiedType: C,
                    withFollowsYou: _ && l,
                    withHoverCard: !o && !s && E,
                    withLink: !s && E,
                    withScreenName: !n,
                    withStackedLayout: !0,
                  })
                return n
                  ? d.createElement(
                      u.Z,
                      { style: D.disabledMessageContainer },
                      I,
                      d.createElement(m.ZP, { color: 'gray700' }, n),
                    )
                  : I
              }),
              (0, l.Z)((0, o.Z)(e), '_renderSocialContext', function () {
                var t = e.props,
                  r = t.avatarSize,
                  a = t.socialContext
                return a
                  ? d.createElement(v.ZP.UseProps, null, function (e) {
                      return d.createElement(g.Z, {
                        avatarSize: r,
                        contextType: a.contextType,
                        iconSize: 'large',
                        link: a.link,
                        style: D.socialContext,
                        text: a.text,
                        weight: 'bold',
                        withLeftPadding: !0,
                      })
                    })
                  : null
              }),
              (0, l.Z)((0, o.Z)(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  r =
                    (t && (0, C.Z)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = r.Icon,
                  n = r.text
                return t
                  ? d.createElement(
                      u.Z,
                      { style: D.userTypeaheadSocialContext },
                      d.createElement(u.Z, { style: D.userTypeaheadSocialContextIcon }, a),
                      d.createElement(
                        m.ZP,
                        { color: 'gray700', numberOfLines: 1, style: D.userTypeaheadSocialContextText },
                        n,
                      ),
                    )
                  : null
              }),
              (0, l.Z)((0, o.Z)(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? d.createElement(S.Z, { label: t }) : null
              }),
              (0, l.Z)((0, o.Z)(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [k.UserDetailed, k.UserConcise, k.SubscribableUser].indexOf(t)
              }),
              (0, l.Z)((0, o.Z)(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              (0, l.Z)(
                (0, o.Z)(e),
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
            (0, i.Z)(r, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.accessibilityChecked,
                    r = e.accessibilityLabel,
                    n = e.avatarDecoration,
                    i = e.avatarShape,
                    o = e.avatarSize,
                    c = e.avatarUri,
                    s = e.bottomControl,
                    l = e.decoration,
                    h = e.displayMode,
                    m = e.isBlocking,
                    y = e.isDisabled,
                    v = e.onAvatarClick,
                    S = e.onCellClick,
                    g = e.onScreenNameClick,
                    C = e.presenceIndicator,
                    _ = e.promotedContent,
                    w = e.promotedItemType,
                    R = e.screenName,
                    L = e.style,
                    P = e.testID,
                    F = e.userId,
                    A = e.withBottomSocialContext,
                    H = e.withDarkerInteractiveBackground,
                    U = e.withInteractiveStyling,
                    B = e.withLink,
                    z = e.withUsernameCenterAligned,
                    N = B && !m,
                    O = h === k.UserCompact || z,
                    Q =
                      _ && w === x.USER && 'earned' !== (_.disclosure_type && _.disclosure_type.toLowerCase())
                        ? d.createElement(b.Z, { contentAuthorId: F, promotedContent: _, style: D.promotedIndicator })
                        : null,
                    M = {
                      accessibilityHidden: !0,
                      decoration: n,
                      focusable: !1,
                      imageLayoutCache: T,
                      onClick: v,
                      onHoverCardScreenNameClick: g,
                      promotedContent: _,
                      screenName: R,
                      style: D.avatar,
                      uri: c,
                      withHoverCard: N,
                      withLink: B,
                      shape: i,
                    },
                    q = d.createElement(f.Z.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return C
                        ? d.createElement(I.Z, (0, a.Z)({}, M, C, { size: t }))
                        : d.createElement(E['default'], (0, a.Z)({ size: t }, M))
                    }),
                    V = 'boolean' == typeof t,
                    j = void 0 !== S,
                    W = (V ? 'radio' : j && 'button') || 'listitem',
                    G = this._renderUserName(),
                    K = this._renderHighlightedUserLabel(),
                    Y = this._renderBio(),
                    $ = K || Y || Q || s,
                    J = d.createElement(
                      d.Fragment,
                      null,
                      K,
                      Y,
                      Q,
                      s ? d.createElement(u.Z, { style: D.bottomControl }, s) : null,
                    )
                  return d.createElement(
                    Z.Z,
                    {
                      accessibilityChecked: t,
                      accessibilityLabel: r,
                      accessibilityRole: W,
                      disabled: !!y,
                      focusable: V || j,
                      onClick: this._handleClick,
                      onKeyPress: this._handleKeyPress,
                      pointerEvents: y ? 'none' : void 0,
                      style: [D.root, L],
                      testID: P,
                      withDarkerInteractiveBackground: H,
                      withInteractiveStyling: null != U ? U : !!S,
                    },
                    A ? null : this._renderSocialContext(),
                    d.createElement(
                      p.Z,
                      {
                        avatarCell: q,
                        avatarCellStyle: [D.avatarColumn, O && D.bodyColumnCentered],
                        avatarSize: o,
                        cellStyle: [D.bodyColumn, O && D.bodyColumnCentered],
                      },
                      d.createElement(u.Z, { style: D.body }, G, l),
                      O ? null : J,
                      A ? this._renderUserTypeaheadSocialContext() : null,
                    ),
                    $ && O
                      ? d.createElement(
                          p.Z,
                          { avatarCell: null, avatarCellStyle: D.avatarColumn, cellStyle: D.bodyColumn },
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
                    a = e.entities,
                    n = e.userId,
                    i = e.withheldDescription,
                    o = e.withheldEntities
                  return a && t && this._isEligibleForBio()
                    ? d.createElement(w.Z, {
                        description: t,
                        entities: a,
                        isConcise: r === k.UserConcise,
                        style: D.bio,
                        userId: n,
                        withheldDescription: i,
                        withheldEntities: o,
                      })
                    : null
                },
              },
            ]),
            r
          )
        })(d.PureComponent)
      ;(0, l.Z)(L, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var D = _.Z.create(function (e) {
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
      var P = L
    },
    954813: function _(e, t, r) {
      r.d(t, {
        Z: function Z() {
          return s
        },
      })
      r(334115), r(200634), r(543450), r(818178)
      var a = r(202784),
        n = r(436934),
        i = r(96847),
        o = r(775275),
        c = r(749868)
      var s = function s(e) {
        var t = e.description,
          r = e.entities,
          s = e.isConcise,
          l = e.style,
          d = e.testID,
          u = e.userId,
          h = e.withheldDescription,
          m = e.withheldEntities,
          p = (0, c.H)({ description: t, entities: r, withheldDescription: h, withheldEntities: m }),
          f = p.description,
          y = p.entities,
          v = o.ZP.descriptionTextParts(f, y)
        return v.length
          ? a.createElement(
              n.ZP,
              { dir: 'auto', numberOfLines: s ? 2 : void 0, style: l, testID: d },
              v.map(function (e, t) {
                return a.createElement(i.ZP, { key: 'user_'.concat(u, '_textpart_').concat(t), linkify: !0, part: e })
              }),
            )
          : null
      }
    },
    749868: function _(e, t, r) {
      r.d(t, {
        H: function H() {
          return a
        },
      })
      r(334115), r(200634)
      var a = function a(e) {
        var t = e.description,
          r = e.entities,
          a = e.withheldDescription,
          n = e.withheldEntities
        return a ? { description: a, entities: n } : { description: t, entities: r }
      }
    },
    433363: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return l
          },
        })
      var a = r(133028),
        n = r(202784),
        i = r(890601),
        o = r(493987),
        c = r(473569),
        s = function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = n.useContext(o.Z)
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.Z.root, e.style, t && c.Z.iconRTL],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement('g', null, n.createElement('circle', { cx: '12', cy: '12', r: '10.3' })),
              },
            ),
          )
        }
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 15, height: 15 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
    },
    285042: function _(e, t, r) {
      r.r(t),
        r.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = r(133028),
        n = r(202784),
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: n.createElement(
                  'g',
                  null,
                  n.createElement('path', {
                    d: 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z',
                  }),
                ),
              },
            ),
          )
        }
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
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
        i = r(890601),
        o = r(473569),
        c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
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
      c.metadata = { width: 24, height: 24 }
      var s = c
    },
  },
])

//# sourceMappingURL=WIPED
