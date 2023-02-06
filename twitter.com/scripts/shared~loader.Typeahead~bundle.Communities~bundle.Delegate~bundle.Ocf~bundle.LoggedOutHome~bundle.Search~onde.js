'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  [
    'shared~loader.Typeahead~bundle.Communities~bundle.Delegate~bundle.Ocf~bundle.LoggedOutHome~bundle.Search~onde',
    'loader.directMessagesData',
  ],
  {
    999322: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return d
        },
      })
      var r = n(133028),
        a = n(459740),
        i = (n(202784), n(890601))
      var o = n(973186).Z.create({
        initial: {
          alignItems: 'stretch',
          borderWidth: 0,
          borderStyle: 'solid',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
          position: 'relative',
          zIndex: 0,
          minHeight: 0,
          minWidth: 0,
        },
      })
      var s = ['style']
      var d = function d(e) {
        var t = e.style,
          n = (0, a.Z)(e, s)
        return (0, i.Z)('form', (0, r.Z)((0, r.Z)({}, n), {}, { action: '#', style: [o.initial, t] }))
      }
    },
    136830: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return w
        },
      })
      var r = n(709249),
        a = n(887371),
        i = n(580753),
        o = n(545754),
        s = n(486906),
        d = n(256666),
        c = (n(374083), n(543450), n(818178), n(202784)),
        u = n(928316),
        l = n(325686),
        p = n(123162),
        _ = n(679640),
        f = n(16587),
        v = n(590581),
        m = n(240159),
        h = n(196234),
        Z = n(805252),
        I = n(973186),
        y = n(473228),
        g = n.n(y),
        E = n(137378),
        T = g().f2b3fe06,
        S = I.Z.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        })
      var C = function C(e) {
        var t = e.isLoading,
          n = c.useState(!1),
          r = (0, h.Z)(n, 2),
          a = r[0],
          i = r[1]
        return (
          c.useEffect(
            function () {
              var e
              return (
                t
                  ? (e = setTimeout(function () {
                      return i(!0)
                    }, E.n))
                  : i(!1),
                function () {
                  return clearTimeout(e)
                }
              )
            },
            [t],
          ),
          c.createElement(Z.Z, { ariaValueText: a ? T : '', indeterminate: a, style: !a && S.hidden })
        )
      }
      var w = (function (e) {
        ;(0, o.Z)(n, e)
        var t = (0, s.Z)(n)
        function n(e, a) {
          var o
          return (
            (0, r.Z)(this, n),
            (o = t.call(this, e)),
            (0, d.Z)((0, i.Z)(o), '_setFocusedItemRef', function (e) {
              o._shouldScrollToFocusedItem &&
                e &&
                ((0, m.up)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
            }),
            (0, d.Z)((0, i.Z)(o), '_resetScroll', function () {
              var e = o._getScrollParent()
              e && (e.scrollTop = 0)
            }),
            (0, d.Z)(
              (0, i.Z)(o),
              '_getFlattenedItems',
              (0, f.Z)(function (e) {
                return (0, _.Z)(e)
              }),
            ),
            (0, d.Z)((0, i.Z)(o), '_handleItemClick', function (e, t) {
              var n = o.props,
                r = n.items,
                a = n.onItemClick,
                i = o._getFlattenedItems(r).indexOf(e)
              e && !t && !o._shouldBlockInteractivity && a(e, i), o._resetFocus()
            }),
            (0, d.Z)((0, i.Z)(o), '_getResultCount', function () {
              var e = o.props.items
              return o._getFlattenedItems(e).length
            }),
            (0, d.Z)((0, i.Z)(o), '_setFocusIndex', function (e, t) {
              var n = o.props,
                r = n.items,
                a = n.onItemFocusChanged
              ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), a && a(o._getFlattenedItems(r)[e])
            }),
            (0, d.Z)((0, i.Z)(o), '_resetFocus', function () {
              o._setFocusIndex(o.props.withItemAlwaysSelected ? 0 : -1)
            }),
            (0, d.Z)((0, i.Z)(o), 'focusNext', function () {
              var e = o.state.focusIndex,
                t = o._getResultCount()
              if (0 !== t) {
                var n = e + 1 >= t ? 0 : e + 1
                o._setFocusIndex(n, !0)
              }
            }),
            (0, d.Z)((0, i.Z)(o), 'focusPrevious', function () {
              var e = o.state.focusIndex,
                t = o._getResultCount()
              if (0 !== t) {
                var n = e - 1 < 0 ? t - 1 : e - 1
                o._setFocusIndex(n, !0)
              }
            }),
            (0, d.Z)((0, i.Z)(o), 'hasFocusedItem', function () {
              var e = o.state.focusIndex,
                t = o._getResultCount()
              return e >= 0 && t > e
            }),
            (0, d.Z)((0, i.Z)(o), 'selectFocusedItem', function () {
              var e = o.state.focusIndex,
                t = o.props,
                n = t.getItemIsDisabled,
                r = t.items
              if (o.hasFocusedItem()) {
                var a = o._getFlattenedItems(r)[e],
                  i = !!n && n(a, a.data)
                o._handleItemClick(a, i)
              }
            }),
            (o.state = { focusIndex: e.withItemAlwaysSelected ? 0 : -1 }),
            o
          )
        }
        return (
          (0, a.Z)(n, [
            {
              key: 'componentDidMount',
              value: function value() {
                this._resetFocus()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function value() {
                clearTimeout(this._interactivityTimeout)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function value(e) {
                var t = this
                e.items !== this.props.items &&
                  (this._resetFocus(),
                  this._resetScroll(),
                  this._interactivityTimeout && clearTimeout(this._interactivityTimeout),
                  (this._shouldBlockInteractivity = !0),
                  (this._interactivityTimeout = setTimeout(function () {
                    t._shouldBlockInteractivity = !1
                  }, 500)))
              },
            },
            {
              key: 'render',
              value: function value() {
                var e = this,
                  t = this.props,
                  n = t.domId,
                  r = t.isLoading,
                  a = t.items,
                  i = t.renderCallout,
                  o = t.renderHeader,
                  s = t.renderNoResultsState,
                  d = t.selectedItems,
                  u = t.style,
                  p = !(!r && !a.length),
                  _ = 0,
                  f = !!d
                return p
                  ? c.createElement(
                      l.Z,
                      { accessibilityMultiSelectable: f, accessibilityRole: 'listbox', nativeID: n, style: u },
                      i ? i() : null,
                      c.createElement(C, { isLoading: !!r }),
                      o ? o() : null,
                      a.length
                        ? a.map(function (t, n) {
                            var r = !Array.isArray(a[n - 1]) && n > 0,
                              i = n < a.length - 1,
                              o = Array.isArray(t) ? e._renderTypeaheadGroup(t, _, r, i) : e._renderTypeaheadItem(t, _)
                            return (_ += Array.isArray(t) ? t.length : 1), o
                          })
                        : null,
                    )
                  : s
                  ? s()
                  : null
              },
            },
            {
              key: '_renderTypeaheadGroup',
              value: function value(e, t, n, r) {
                var a = this,
                  i = this.props.withSectionDivider
                return c.createElement(
                  c.Fragment,
                  { key: 'typeaheadGroup-'.concat(t) },
                  i && n ? c.createElement(p.Z, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                  e.map(function (e, n) {
                    return a._renderTypeaheadItem(e, t + n)
                  }),
                  i && r ? c.createElement(p.Z, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
                )
              },
            },
            {
              key: '_renderTypeaheadItem',
              value: function value(e, t) {
                var n = this.props,
                  r = n.ariaDescendantId,
                  a = n.getItemDisabledMessage,
                  i = n.getItemIsDisabled,
                  o = n.getUserDisplayNameLabel,
                  s = n.query,
                  d = n.renderUserDecoration,
                  u = n.selectedItems,
                  l = n.source,
                  p = n.withUserHoverCard,
                  _ = this.state.focusIndex,
                  f = !(!u || !e.id) && u.indexOf(e.id) >= 0,
                  m = !!u,
                  h = _ === t,
                  Z = i && i(e, e.data),
                  I = a && a(e, e.data)
                return c.createElement(v.ZP, {
                  disabledMessage: I,
                  domId: h ? r : void 0,
                  getUserDisplayNameLabel: o,
                  isDisabled: Z,
                  isFocused: h,
                  isInMultiSelect: m,
                  isSelected: f,
                  item: e,
                  key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                  onClick: this._handleItemClick,
                  onRef: h ? this._setFocusedItemRef : void 0,
                  query: s,
                  renderUserDecoration: d,
                  source: l,
                  withUserHoverCard: p,
                })
              },
            },
            {
              key: '_getScrollParent',
              value: function value() {
                if (!this._scrollParent) {
                  var e = (0, m.rP)(u.findDOMNode(this))
                  this._scrollParent = e === window ? null : e
                }
                return this._scrollParent
              },
            },
          ]),
          n
        )
      })(c.Component)
    },
    178780: function _(e, t, n) {
      n.d(t, {
        s: function s() {
          return a
        },
      })
      var r = n(963752),
        a = function a(e) {
          return e === r.p_
        }
    },
    45102: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return Q
        },
      })
      var r = n(807896),
        a = n(459740),
        i = n(709249),
        o = n(887371),
        s = n(580753),
        d = n(545754),
        c = n(486906),
        u = n(256666),
        l = (n(543450), n(995342), n(358188), n(739529), n(231235), n(416781), n(202784)),
        p = n(235193),
        _ = n(679640),
        f = n(136830),
        v = n(819313),
        m = n(506800),
        h = n(676275),
        Z = n(588027),
        I = n(137378),
        y = n(452612),
        g = n(823803),
        E = n(968079),
        T = (n(374083), n(332501), n(443430), n(136728), n(818178), n(24949)),
        S = n(211469),
        C = n(53223),
        w = n(923335),
        A = n(32941),
        R = n(392160),
        D = n(257851),
        b = n(941430),
        x = n(286928),
        N = n(157659),
        O = [Z.my.Users],
        P = function P(e) {
          var t = e.communityId,
            n = e.filter,
            r = e.query,
            a = e.source,
            i = e.trustedFriendsId
          return (0, D.Ol)({ q: r, result_type: (n || O).join(','), src: a }, { communityId: t, trustedFriendsId: i })
        },
        M = function M(e, t) {
          var n = P(t)
          return (0, D.uD)(e, n)
        },
        U = function U(e, t) {
          var n = P(t)
          return (0, D.YN)(e, n)
        },
        L = function L(e, t) {
          var n = P(t)
          return (0, D.T5)(e, n)
        },
        F = function F(e, t) {
          var n = P(t)
          return (0, D.dV)(e, n)
        },
        k = function k(e, t) {
          return (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0)
        },
        B = function B() {
          return (0, T.P1)(
            U,
            (0, T.P1)(
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.filter
              },
              b.Sc,
              b.sM,
              function (e, t, n, r) {
                if (!e || !t || t.indexOf(Z.my.Users) < 0) return (0, m.o)()
                var a = (0, b.UA)(n, e)
                return (0, Z.It)(
                  a
                    .map(function (e) {
                      return r[e]
                    })
                    .sort(k)
                    .slice(0, 10),
                )
              },
            ),
            M,
            function (e, t) {
              return t.injectedItems
            },
            function (e, t) {
              return t.query
            },
            function (e, t) {
              return t.getUserExactMatch
            },
            function (e, t) {
              return t.userLimit
            },
            function (e, t, n, r, a, i, o) {
              var s = (0, S.Z)(r || [], function (e) {
                  return e.type === Z.El.User ? e.data.id_str : void 0
                }),
                d = t.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                c = e.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                u = (0, A.sY)(d, c).slice(0, o || 10),
                l = n === g.ZP.LOADED,
                p = i && i({ query: a, hasResults: !!e.length, isLoaded: l }),
                _ = p ? [].concat((0, E.Z)(u), [p]) : u
              return {
                users: _.length ? _ : (0, m.o)(),
                userExactMatch: p,
                filteredPrefetchUsers: d,
                filteredRemoteUsers: c,
              }
            },
          )
        },
        V = function V() {
          return (0, T.P1)(
            B(),
            (0, T.P1)(
              L,
              M,
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.maxTopics
              },
              function (e, t) {
                return t.getTopicExactMatch
              },
              function (e, t, n, r, a) {
                var i = t === g.ZP.LOADED,
                  o = a && a({ query: n, hasResults: !!e.length, isLoaded: i }),
                  s = e.slice(0, r || 3)
                return o && s.push(o), s.length ? s : (0, m.o)()
              },
            ),
            (0, T.P1)(
              F,
              M,
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.maxEvents
              },
              function (e, t) {
                return t.filter
              },
              function (e, t, n, r, a) {
                var i = n && a && a.indexOf(Z.my.Events) >= 0,
                  o = e.slice(0, r || 1)
                return o.length && i ? o : (0, m.o)()
              },
            ),
            function (e, t) {
              return t.injectedItems
            },
            function (e, t) {
              return t.orderResults
            },
            function (e, t, n, r, a) {
              var i = e.users,
                o = r && r.length ? r : null,
                s = a
                  ? a(
                      o,
                      i,
                      t,
                      n,
                      null == e ? void 0 : e.filteredRemoteUsers,
                      null == e ? void 0 : e.filteredPrefetchUsers,
                      null == e ? void 0 : e.userExactMatch,
                    )
                  : (0, C.Z)([o, n.length ? n : void 0, t.length ? t : void 0, i.length ? i : void 0])
              return t.length || i.length || n.length ? s : o ? [o] : (0, m.o)()
            },
          )
        }
      var H = (0, R.Z)()
        .propsFromState(function () {
          return { fetchStatus: M, items: V() }
        })
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandler: (0, w.createLocalApiErrorHandlerWithContextFactory)(
              'TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT',
            ),
            fetchTypeaheadIfNeeded: D.o4,
            fetchUsersIfNeeded: N.ZP.fetchManyIfNeeded,
            fetchUsersPresenceIfNeeded: x.ZP.fetchManyIfNeeded,
            prefetchTypeaheadUsersIfNeeded: b.zP,
          }
        })
        .withAnalytics({ element: 'typeahead' })
      var q = [
          'analytics',
          'communityId',
          'contextText',
          'createLocalApiErrorHandler',
          'dropdownRef',
          'fetchStatus',
          'fetchTypeaheadIfNeeded',
          'fetchUsersIfNeeded',
          'fetchUsersPresenceIfNeeded',
          'filter',
          'getTopicExactMatch',
          'getUserExactMatch',
          'injectedItems',
          'items',
          'maxEvents',
          'maxTopics',
          'onItemClick',
          'onItemsChanged',
          'orderResults',
          'prefetchTypeaheadUsersIfNeeded',
          'query',
          'shouldDeferPrefetch',
          'topicType',
          'trustedFriendsId',
          'userLimit',
        ],
        j = (function (e) {
          ;(0, d.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e, r) {
            var a
            return (
              (0, i.Z)(this, n),
              (a = t.call(this, e, r)),
              (0, u.Z)((0, s.Z)(a), '_fetchUsersIfNeeded', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  t = a.props,
                  n = t.fetchUsersIfNeeded,
                  r = t.items,
                  i = t.source,
                  o = a.context.featureSwitches.isTrue('follow_nudge_search_enabled') && a.context.loggedInUserId
                if (o && i === Z._4.SearchBox) {
                  var s = (0, _.Z)(e)
                      .filter(function (e) {
                        return e.type === y.ZP.User
                      })
                      .map(function (e) {
                        return e.id
                      }),
                    d = (0, _.Z)(r)
                      .filter(function (e) {
                        return e.type === y.ZP.User
                      })
                      .filter(function (e) {
                        return !s.includes(e.id)
                      })
                      .map(function (e) {
                        return e.id
                      })
                  ;(null == d ? void 0 : d.length) && n(d)
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_fetchTypeaheadResultsIfNeeded', function (e) {
                var t = a.context.featureSwitches.isTrue('c9s_community_composer_hashtag_suggestions_enabled')
                e.query &&
                  e
                    .fetchTypeaheadIfNeeded(
                      {
                        q: e.query,
                        src: e.source,
                        result_type: e.filter.join(','),
                        context_text: e.contextText,
                        topic_type: e.topicType,
                        context_community_id: t ? e.communityId : void 0,
                      },
                      { communityId: e.communityId, trustedFriendsId: e.trustedFriendsId },
                    )
                    ['catch'](e.createLocalApiErrorHandler({}))
              }),
              (0, u.Z)((0, s.Z)(a), '_handleItemClick', function (e, t) {
                var n = a.props,
                  r = n.analytics,
                  i = n.onItemClick,
                  o = n.query
                i(e, t)
                var s = h.Z.forTypeaheadResult(e, t),
                  d = s ? [s] : void 0
                r.scribe({ action: 'click', data: { search_details: { query: o }, targets: d } })
              }),
              (0, u.Z)((0, s.Z)(a), '_scribeResults', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.items,
                  r = e.query
                t.scribe({
                  action: 'impression',
                  data: { items: h.Z.forTypeaheadResults(n), search_details: { query: r } },
                })
              }),
              (a._debouncedFetchTypeaheadResultsIfNeeded = (0, p.Z)(a._fetchTypeaheadResultsIfNeeded, 250)),
              (a.state = { shouldShowPrefetchResults: !0 }),
              (a._previouslyLoadedResults = (0, m.o)()),
              a
            )
          }
          return (
            (0, o.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.prefetchTypeaheadUsersIfNeeded
                  this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                    n()['catch'](t({})),
                    this._fetchUsersIfNeeded()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  clearTimeout(this._prefetchResultsTimer)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
                  var t = this,
                    n = this.props,
                    r = n.createLocalApiErrorHandler,
                    a = n.domId,
                    i = n.fetchUsersPresenceIfNeeded,
                    o = n.filter,
                    s = n.items,
                    d = n.onItemsChanged,
                    c = n.query,
                    u = n.shouldDeferPrefetch,
                    l = n.source,
                    p = e.filter,
                    f = e.query,
                    v = e.source,
                    m = this.context.loggedInUserId,
                    h = this.context.featureSwitches.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') && m
                  if (null != s && s.length && s !== e.items) {
                    if ((this._scribeResults(), d)) {
                      var Z = !1,
                        E = a ? document.getElementById(a) : null
                      E && E.scrollHeight > E.offsetHeight && (Z = !0), d(s, Z)
                    }
                    if (h) {
                      var T = (0, _.Z)(s)
                        .filter(function (e) {
                          return e.type === y.ZP.User
                        })
                        .map(function (e) {
                          return e.id
                        })
                      T && i(T)['catch'](r({}))
                    }
                    this._fetchUsersIfNeeded(e.items)
                  }
                  e.fetchStatus === g.ZP.LOADED && (this._previouslyLoadedResults = e.items),
                    (c === f && o === p && l === v) ||
                      (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                      u &&
                        (clearTimeout(this._prefetchResultsTimer),
                        this.setState({ shouldShowPrefetchResults: !1 }),
                        (this._prefetchResultsTimer = setTimeout(function () {
                          t.props.query &&
                            t.props.fetchStatus !== g.ZP.LOADED &&
                            t.setState({ shouldShowPrefetchResults: !0 })
                        }, I.n))))
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e,
                    t = this.props,
                    n = (t.analytics, t.communityId, t.contextText, t.createLocalApiErrorHandler, t.dropdownRef),
                    i = t.fetchStatus,
                    o =
                      (t.fetchTypeaheadIfNeeded,
                      t.fetchUsersIfNeeded,
                      t.fetchUsersPresenceIfNeeded,
                      t.filter,
                      t.getTopicExactMatch,
                      t.getUserExactMatch,
                      t.injectedItems,
                      t.items),
                    s =
                      (t.maxEvents,
                      t.maxTopics,
                      t.onItemClick,
                      t.onItemsChanged,
                      t.orderResults,
                      t.prefetchTypeaheadUsersIfNeeded,
                      t.query),
                    d = (t.shouldDeferPrefetch, t.topicType, t.trustedFriendsId, t.userLimit, (0, a.Z)(t, q)),
                    c = s && i !== g.ZP.LOADED
                  return (
                    (e = c
                      ? this.state.shouldShowPrefetchResults && o.length
                        ? o
                        : this._previouslyLoadedResults
                      : o),
                    l.createElement(
                      f.Z,
                      (0, r.Z)({}, d, {
                        isLoading: !!c,
                        items: e,
                        onItemClick: this._handleItemClick,
                        query: s,
                        ref: n,
                      }),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(l.Component)
      ;(0, u.Z)(j, 'contextType', v.rC),
        (0, u.Z)(j, 'defaultProps', { filter: [Z.my.Users], injectedItems: [], maxEvents: 3, maxTopics: 1 })
      var Y = l.forwardRef(function (e, t) {
        return l.createElement(j, (0, r.Z)({}, e, { dropdownRef: t }))
      })
      var Q = H.forwardRef(Y)
    },
    974383: function _(e, t, n) {
      n.r(t),
        n.d(t, {
          TypeaheadInput: function TypeaheadInput() {
            return U
          },
          default: function _default() {
            return F
          },
          styles: function styles() {
            return L
          },
        })
      var r = n(807896),
        a = n(133028),
        i = n(709249),
        o = n(887371),
        s = n(580753),
        d = n(545754),
        c = n(486906),
        u = n(256666),
        l = (n(108532), n(995342), n(358188), n(202784)),
        p = n(325686),
        _ = n(322150),
        f = n(535030),
        v = n(786242),
        m = n(854044),
        h = n(973186),
        Z = n(473228),
        I = n.n(Z),
        y = n(954170),
        g = n(999322),
        E = n(45102),
        T = n(627036),
        S = n(795254),
        C = n(652008),
        w = n(977559),
        A = n(312599),
        R = n(879075),
        D = n(588027),
        b = n(32941),
        x = n(819313),
        N = I().f065ba8c,
        O = { viewType: 'typeahead_input' },
        P = function P(e) {
          return C.Z.isTwoColumnNormalLayout(e)
            ? {
                width: T.Z.columnWidths.secondary.normal + h.Z.theme.spacesPx.space24,
                left: -h.Z.theme.spacesPx.space24 / 2,
              }
            : C.Z.isTwoColumnSmallLayout(e)
            ? {
                width: T.Z.columnWidths.secondary.small + h.Z.theme.spacesPx.space16,
                left: -h.Z.theme.spacesPx.space16 / 2,
              }
            : void 0
        },
        M = 1,
        U = (function (e) {
          ;(0, d.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e, o) {
            var d
            return (
              (0, i.Z)(this, n),
              (d = t.call(this, e, o)),
              (0, u.Z)((0, s.Z)(d), '_withNewTypeaheadUI', !1),
              (0, u.Z)((0, s.Z)(d), '_render', function (e) {
                var t = e.containerWidth,
                  n = d.props,
                  i = n.alwaysOpen,
                  o = n.disableClearButton,
                  s = n.forceVdlDisable,
                  c = n.inputStyle,
                  u = n.isCompact,
                  v = n.isOnHomepage,
                  m = n.placeholder,
                  h = n.renderCustomInput,
                  Z = n.renderInSearchField,
                  I = n.rounded,
                  E = n.shouldAutoFocus,
                  T = n.shouldFocusOnClear,
                  S = n.style,
                  C = n.testID,
                  w = d.state.showTypeaheadDropdown || i,
                  R = {
                    Icon: y['default'],
                    ariaActiveDescendant: d.state.ariaDescendantId,
                    ariaAutocomplete: 'list',
                    ariaExpanded: w,
                    ariaLabel: N,
                    ariaOwns: d._dropdownDomId,
                    ariaRole: 'combobox',
                    autoComplete: 'off',
                    autoCorrect: !1,
                    autoFocus: E,
                    contentBelow: Z && Z(),
                    focusOnClear: T,
                    isCompact: u,
                    leftAligned: v,
                    onBlur: d._handleInputBlur,
                    onChange: d._handleInputChange,
                    onClear: d._handleInputClear,
                    onFocus: d._handleInputFocus,
                    onLayout: d._handleInputLayoutChanged,
                    placeholder: m,
                    returnKeyType: 'search',
                    spellCheck: 'false',
                    styleType: s ? 'legacyPill' : I ? 'pill' : 'selection',
                    testID: C,
                    value: d.state.query,
                    withClearButton: !o && d.state.showTypeaheadDropdown,
                  }
                return l.createElement(
                  A.Z,
                  { behavioralEventContext: O },
                  l.createElement(
                    p.Z,
                    { onLayout: d._handleLayout, ref: d._setRootContainerNode, style: [L.root, S] },
                    l.createElement(
                      f.Z,
                      { onKeyDown: d._handleKeyDown, style: L.keydownInputListener },
                      l.createElement(
                        g.Z,
                        {
                          accessibilityLabel: m,
                          accessibilityRole: 'search',
                          onSubmit: d._handleFormSubmit,
                          style: L.wrapper,
                        },
                        l.createElement(
                          p.Z,
                          { ref: d._setInputContainerNode, style: c },
                          h
                            ? h((0, a.Z)((0, a.Z)({}, R), {}, { handleReturn: d._handleRichTextInputReturn }))
                            : l.createElement(_.Z, (0, r.Z)({}, R, { ref: d._setInputRef })),
                        ),
                        l.createElement(
                          p.Z,
                          { style: [L.typeaheadContainer, !I && L.topBorder] },
                          w ? d._renderDropdown(t) : null,
                        ),
                      ),
                    ),
                  ),
                )
              }),
              (0, u.Z)((0, s.Z)(d), '_renderDropdown', function (e) {
                var t = d.props,
                  n = t.communityId,
                  r = t.filter,
                  a = t.getItemDisabledMessage,
                  i = t.getItemIsDisabled,
                  o = t.getTopicExactMatch,
                  s = t.getUserDisplayNameLabel,
                  c = t.getUserExactMatch,
                  u = t.injectedItems,
                  p = t.isInSidebar,
                  _ = t.isModal,
                  f = t.isOnHomepage,
                  v = t.maxEvents,
                  m = t.maxTopics,
                  Z = t.onItemsChanged,
                  I = t.orderResults,
                  y = t.renderCallout,
                  g = t.renderCustomDropdown,
                  T = t.renderEmptyState,
                  S = t.renderHeader,
                  C = t.renderNoResultsState,
                  A = t.renderUserDecoration,
                  R = t.selectedItems,
                  D = t.shouldDeferPrefetch,
                  x = t.source,
                  N = t.trustedFriendsId,
                  O = t.userLimit,
                  M = t.withFixedPositioning,
                  U = t.withSectionDivider,
                  F = t.withUserHoverCard,
                  k = e >= h.Z.theme.breakpoints.medium || (0, w.ZP)(),
                  B = d.state,
                  V = B.dropdownOffset,
                  H = B.query,
                  q = _
                    ? L.modalDropdown
                    : [
                        L.dropdown,
                        !k && M && V ? [(0, b.xX)(V), { height: 'calc(100vh - '.concat(V, 'px)') }] : null,
                        (k || f) && L.wideModeDropdown,
                        d._withNewTypeaheadUI && p && P(e),
                        f && L.shortModeDropdown,
                        !k && f && L.shortModeDropdownMobile,
                      ],
                  j = {
                    ariaDescendantId: d.state.ariaDescendantId,
                    domId: d._dropdownDomId,
                    onDismiss: d._handleOnEmptyStateDismiss,
                    onItemFocusChanged: d._handleItemFocusChanged,
                    ref: d._handleDropdownRef,
                    style: q,
                  },
                  Y = {
                    ariaDescendantId: d.state.ariaDescendantId,
                    communityId: n,
                    domId: d._dropdownDomId,
                    filter: r,
                    getItemDisabledMessage: a,
                    getItemIsDisabled: i,
                    getTopicExactMatch: o,
                    getUserDisplayNameLabel: s,
                    getUserExactMatch: c,
                    injectedItems: u,
                    maxEvents: v,
                    maxTopics: m,
                    onItemClick: d._handleItemClick,
                    onItemFocusChanged: d._handleItemFocusChanged,
                    onItemsChanged: Z,
                    orderResults: I,
                    query: H,
                    ref: d._handleDropdownRef,
                    renderCallout: y,
                    renderHeader: S,
                    renderNoResultsState: C,
                    renderUserDecoration: A,
                    selectedItems: R,
                    shouldDeferPrefetch: D,
                    source: x,
                    style: q,
                    trustedFriendsId: N,
                    userLimit: O,
                    withSectionDivider: U,
                    withUserHoverCard: F,
                  }
                return T && !H ? T(j) : g ? g(Y) : l.createElement(E.Z, Y)
              }),
              (0, u.Z)((0, s.Z)(d), '_dismissDropdown', function () {
                d.setState({ showTypeaheadDropdown: !1 }), d.props.onDismiss && d.props.onDismiss()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleOnEmptyStateDismiss', function () {
                d._dismissDropdown(), d._inputRef && d._inputRef.blur()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleLayout', function () {
                d._updatePosition()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleInputLayoutChanged', function () {
                d._updatePosition()
              }),
              (0, u.Z)((0, s.Z)(d), '_updatePosition', function () {
                if (d._inputContainerNode) {
                  var e = d._inputContainerNode.getBoundingClientRect().bottom
                  e !== d.state.dropdownOffset && d.setState({ dropdownOffset: e })
                }
              }),
              (0, u.Z)((0, s.Z)(d), '_handleDropdownRef', function (e) {
                d._dropdownRef = e
              }),
              (0, u.Z)((0, s.Z)(d), '_setRootContainerNode', function (e) {
                d._rootContainerNode = e || null
              }),
              (0, u.Z)((0, s.Z)(d), '_setInputRef', function (e) {
                ;(d._inputRef = e), d._activeChildRef || (d._activeChildRef = e)
              }),
              (0, u.Z)((0, s.Z)(d), '_setInputContainerNode', function (e) {
                ;(d._inputContainerNode = e || null), d._inputContainerNode && d._updatePosition()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleFocusChange', function (e) {
                var t = v.Z.getCount() > 0
                ;(d._rootContainerNode && d._rootContainerNode.contains(e.target)) ||
                  t ||
                  (d.state.showTypeaheadDropdown && d._dismissDropdown())
              }),
              (0, u.Z)((0, s.Z)(d), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = e.shiftKey,
                  r = d.props.alwaysOpen,
                  a = d.state.showTypeaheadDropdown
                if ((0, b.kE)(e))
                  if (t !== R.Dd) {
                    if (d.state.inputHasFocus)
                      return t === R.WX
                        ? (d._focusNext(), void e.preventDefault())
                        : t === R.kl
                        ? (d._focusPrevious(), void e.preventDefault())
                        : t === R.nQ && !r && a
                        ? (d._dismissDropdown(), void e.preventDefault())
                        : t === R.NW && d._hasFocusedItem()
                        ? (d._selectFocusedItem(), void e.preventDefault())
                        : void ((t !== R.jF && t !== R.Ci) || !d._deleteFocusedItem()
                            ? a || d.setState({ showTypeaheadDropdown: !0 })
                            : e.preventDefault())
                  } else {
                    var i = (n && d._navigatePrevious()) || (!n && d._navigateNext())
                    i ? ((d._activeChildRef = i), e.preventDefault(), i.focus()) : d._dismissDropdown()
                  }
              }),
              (0, u.Z)((0, s.Z)(d), '_handleItemFocusChanged', function () {
                d.setState({ ariaDescendantId: (0, b.A1)() })
              }),
              (0, u.Z)((0, s.Z)(d), '_handleInputClear', function () {
                d.setQuery('')
              }),
              (0, u.Z)((0, s.Z)(d), '_handleInputBlur', function () {
                d.setState({ inputHasFocus: !1 }), d.props.onBlur && d.props.onBlur()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleInputFocus', function () {
                ;(d._activeChildRef = d._inputRef),
                  d.setState({ inputHasFocus: !0, showTypeaheadDropdown: !0 }),
                  d._updatePosition(),
                  d.props.onFocus && d.props.onFocus()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleRichTextInputReturn', function (e) {
                return e.shiftKey ? 'not-handled' : (d._hasFocusedItem() || d._handleFormSubmit(e), 'handled')
              }),
              (0, u.Z)((0, s.Z)(d), '_handleInputChange', function (e) {
                d.setQuery(e.target.value), d._updatePosition()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleFormSubmit', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  d._inputRef && d._inputRef.blur(),
                  d.setState({ showTypeaheadDropdown: !1 }),
                  d.props.onDismiss && d.props.onDismiss(),
                  d.props.onSubmit && d.props.onSubmit()
              }),
              (0, u.Z)((0, s.Z)(d), '_handleItemClick', function (e, t) {
                var n = d.props,
                  r = n.onDismiss,
                  a = n.onItemClick,
                  i = n.shouldClearOnSelect,
                  o = n.shouldFocusOnClear,
                  s = i ? '' : d.state.query
                d.setState({ showTypeaheadDropdown: !1 }),
                  d._inputRef && (i && o ? d._inputRef.focus() : d._inputRef.blur()),
                  d.setQuery(s),
                  r && r(),
                  a && a(e, t)
              }),
              (0, u.Z)((0, s.Z)(d), '_hasFocusedItem', function () {
                return d._dropdownRef && d._dropdownRef.hasFocusedItem()
              }),
              (0, u.Z)((0, s.Z)(d), '_deleteFocusedItem', function () {
                return !!(
                  d._dropdownRef &&
                  d._dropdownRef.deleteFocusedItem &&
                  d._dropdownRef.hasFocusedItem() &&
                  d._dropdownRef.deleteFocusedItem()
                )
              }),
              (0, u.Z)((0, s.Z)(d), '_selectFocusedItem', function () {
                d._dropdownRef && d._dropdownRef.selectFocusedItem()
              }),
              (0, u.Z)((0, s.Z)(d), '_focusNext', function () {
                d._dropdownRef && d._dropdownRef.focusNext()
              }),
              (0, u.Z)((0, s.Z)(d), '_focusPrevious', function () {
                d._dropdownRef && d._dropdownRef.focusPrevious()
              }),
              (0, u.Z)((0, s.Z)(d), '_navigateNext', function () {
                if (d._dropdownRef && d._dropdownRef.navigateNext) return d._dropdownRef.navigateNext()
              }),
              (0, u.Z)((0, s.Z)(d), '_navigatePrevious', function () {
                if (!d.state.inputHasFocus && d._dropdownRef && d._dropdownRef.navigatePrevious)
                  return d._dropdownRef.navigatePrevious() || d._inputRef
              }),
              (d.state = {
                ariaDescendantId: (0, b.A1)(),
                inputHasFocus: !1,
                query: e.initialValue,
                showTypeaheadDropdown: !1,
              }),
              (d._dropdownDomId = 'typeaheadDropdown-'.concat(M)),
              (M += 1),
              (d._withNewTypeaheadUI = d.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              d
            )
          }
          return (
            (0, o.Z)(n, [
              {
                key: 'componentDidUpdate',
                value: function value(e) {
                  this.props.initialValue !== e.initialValue && this.setQuery(this.props.initialValue)
                },
              },
              {
                key: 'componentDidMount',
                value: function value() {
                  window.document.addEventListener('click', this._handleFocusChange, !0)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  window.document.removeEventListener('click', this._handleFocusChange, !0)
                },
              },
              {
                key: 'render',
                value: function value() {
                  return l.createElement(m.Z, null, this._render)
                },
              },
              {
                key: 'focus',
                value: function value() {
                  this._activeChildRef && this._activeChildRef.focus()
                },
              },
              {
                key: 'setQuery',
                value: function value(e) {
                  this.setState({ query: e }), this.props.onQueryChange && this.props.onQueryChange(e)
                },
              },
            ]),
            n
          )
        })(l.Component)
      ;(0, u.Z)(U, 'defaultProps', {
        disableClearButton: !1,
        filter: [D.my.Users, D.my.Topics],
        isInSidebar: !1,
        initialValue: '',
        withSectionDivider: !0,
        withUserHoverCard: !1,
      }),
        (0, u.Z)(U, 'contextType', x.rC)
      var L = h.Z.create(function (e) {
        return {
          root: { flex: 1, flexDirection: 'column', position: 'relative', zIndex: S.R0 + 1 },
          typeaheadContainer: { flex: 1, position: 'relative' },
          keydownInputListener: { flexShrink: 1, width: '100%' },
          dropdown: {
            backgroundColor: e.colors.cellBackground,
            start: 0,
            end: 0,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            position: 'absolute',
            top: 0,
            WebkitOverflowScrolling: 'touch',
          },
          modalDropdown: {
            backgroundColor: e.colors.cellBackground,
            flex: 1,
            minHeight: 300,
            position: 'relative',
            overflowY: 'auto',
            overscrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch',
          },
          wideModeDropdown: {
            borderRadius: e.borderRadii.medium,
            boxShadow: e.boxShadows.medium,
            minHeight: 100,
            maxHeight: 'calc(80vh - '.concat(e.componentDimensions.appBarHeight, ')'),
          },
          shortModeDropdown: { minHeight: 100, maxHeight: '35vh', paddingBottom: '0' },
          shortModeDropdownMobile: { position: 'absolute', height: '40vh', top: 0 },
          wrapper: { alignItems: 'stretch', flex: 1 },
          topBorder: {
            borderTopColor: e.colors.gray200,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
          },
        }
      })
      var F = U
    },
    86045: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return c
        },
      })
      var r = n(202784),
        a = n(325686),
        i = n(35953),
        o = n(436934),
        s = n(744329)
      var d = n(973186).Z.create(function (e) {
        return {
          root: { flexDirection: 'row', flexShrink: 1, flexGrow: 1 },
          bodyColumn: {
            justifyContent: 'center',
            flexDirection: 'column',
            marginEnd: e.spaces.space4,
            marginStart: e.spaces.space12,
            flexShrink: 1,
          },
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 },
          largeCellThumbnail: { height: e.spaces.space56, width: e.spaces.space56 },
        }
      })
      var c = function c(e) {
        var t = e.image,
          n = e.style,
          c = e.supportText,
          u = e.title,
          l = e.withNewTypeaheadUI
        return r.createElement(
          a.Z,
          { style: [d.root, n] },
          r.createElement(
            a.Z,
            { style: [d.coverContainer, l ? d.largeCellThumbnail : d.cellThumbnail] },
            t ? r.createElement(i.Z, { accessibilityLabel: '', aspectMode: s.Z.SQUARE, image: t }) : null,
          ),
          r.createElement(
            a.Z,
            { style: d.bodyColumn },
            c ? r.createElement(o.ZP, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null,
            r.createElement(o.ZP, { numberOfLines: 2, weight: 'bold' }, u),
          ),
        )
      }
    },
    590581: function _(e, t, n) {
      n.d(t, {
        ib: function ib() {
          return me
        },
        ZP: function ZP() {
          return pe
        },
      })
      var r = n(709249),
        a = n(887371),
        i = n(580753),
        o = n(545754),
        s = n(486906),
        d = n(256666),
        c = (n(326936), n(739529), n(231235), n(202784)),
        u = n(325686),
        l = n(436934),
        p = n(174062),
        _ = n(973186),
        f = n(507066),
        v = n(433363),
        m = n(312599),
        h = n(588027),
        Z = n(819313),
        I = n(137541),
        y = n(467313),
        g = n(44016),
        E = n(284515),
        T = n(392160),
        S = n(192157),
        C = n(157659),
        w = function w(e, t) {
          return t.conversationId
        },
        A = function A(e, t) {
          return (0, S.x)(e, w(0, t))
        }
      var R = (0, T.Z)()
        .propsFromState(function () {
          return { conversationId: w, conversation: A, users: C.ZP.selectAll }
        })
        .adjustStateProps(function (e) {
          var t = e.conversation,
            n = (e.conversationId, e.users),
            r = { conversation: void 0 }
          return null != t && t.data && (r.conversation = (0, E.E5)(t.data, void 0, n)), r
        })
      var D = _.Z.create(function (e) {
        return {
          root: {
            cursor: 'pointer',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            width: '100%',
          },
          avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: '32px' },
          bodyColumn: { flexGrow: 7, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 },
        }
      })
      var b = R(function (e) {
        var t = e.conversation,
          n = e.isDisabled,
          r = e.isSelected,
          a = e.perspective
        return t
          ? c.createElement(
              I.Z,
              {
                avatarCell: c.createElement(y.Z, { conversation: t, perspective: a, size: 'xLarge' }),
                avatarCellStyle: D.avatarColumn,
                avatarSize: 'xLarge',
                cellStyle: D.bodyColumn,
                style: [D.root, !r && n && D.disabled],
              },
              c.createElement(g.Z, { conversation: t, perspective: a, withParticipantsCount: !0 }),
              me({ isSelected: r }),
            )
          : null
      })
      n(108532)
      var x = n(35953),
        N = n(744329),
        O = n(12934),
        P = n(959890),
        M = (function (e) {
          ;(0, o.Z)(n, e)
          var t = (0, s.Z)(n)
          function n() {
            return (0, r.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.event,
                    n = e.image,
                    r = e.supportText
                  return c.createElement(
                    u.Z,
                    { style: L.root },
                    c.createElement(
                      P.Z,
                      { withGutter: !0 },
                      c.createElement(
                        u.Z,
                        { style: L.bodyColumn },
                        r ? c.createElement(l.ZP, { color: 'gray700', size: 'subtext2' }, r) : null,
                        c.createElement(l.ZP, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? c.createElement(
                            u.Z,
                            { style: L.coverContainer },
                            c.createElement(
                              O.Z,
                              { ratio: 1 },
                              c.createElement(x.Z, { accessibilityLabel: '', aspectMode: N.Z.SQUARE, image: n }),
                            ),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(c.PureComponent),
        U = '100px',
        L = _.Z.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: U,
              maxWidth: U,
              overflow: 'hidden',
              width: '25%',
            },
          }
        })
      var F = M
      var k = n(86045),
        B = (n(543450), n(818178), n(569165)),
        V = n(238749),
        H = n(210891),
        q = n(880166),
        j =
          (n(374083),
          n(995342),
          n(358188),
          n(684870),
          n(753985),
          n(136728),
          n(332501),
          n(477950),
          n(385940),
          n(335903)),
        Y = n.n(j)
      var Q = _.Z.create(function (e) {
        return {
          root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          context: { alignItems: 'center', flexDirection: 'row' },
          icon: {
            color: e.colors.primary,
            height: e.fontSizes.subtext2,
            paddingEnd: e.spaces.space4,
            width: e.fontSizes.subtext2,
          },
          disabled: { backgroundColor: e.colors.gray0 },
          searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
          searchIconCell: { flexDirection: 'row', alignItems: 'center' },
          wrapperCellStyle: { justifyContent: 'center' },
        }
      })
      var W = function W(e) {
        var t = c.useContext(Z.rC).featureSwitches,
          n = e.isDisabled,
          r = e.query,
          a = e.resultContext,
          i = e.showIcon,
          o = e.style,
          s = e.topic,
          d = e.withNewTypeaheadUI,
          p = (function (e, t) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = Y()(e),
              i = e.toLowerCase().indexOf(t.toLowerCase()),
              o = i + t.length
            if (0 === a.length) {
              var s = r ? [i > 0 ? [0, i] : void 0, [o, e.length]].filter(Boolean) : [[i, o]]
              n = [{ highlights: -1 !== i ? s : void 0, text: e, entityType: 'text', prefix: '' }]
            } else {
              var d = a.flatMap(function (t, n, r) {
                  var a = t.indices,
                    i = 0 === n ? 0 : r[n - 1].indices[1],
                    o = n === r.length - 1,
                    s = []
                  return (
                    i !== a[0] && s.push(e.slice(i, a[0])),
                    s.push(e.substring(a[0], a[1])),
                    o && e.length !== a[1] && s.push(e.slice(a[1])),
                    s
                  )
                }),
                c = 0,
                u = d.map(function (e, t, n) {
                  c += t > 0 ? n[t - 1].length : 0
                  var r = e.length
                  return { runningTotal: c, containsQuery: -1 !== i && c + r >= i && c < o }
                })
              n = d.map(function (e, t) {
                var n,
                  a,
                  s,
                  d = u[t],
                  c = d.containsQuery,
                  l = d.runningTotal,
                  p = e.includes('#')
                if (r && !c) a = [[0, e.length]]
                else if (c) {
                  var _ = l < i ? i - l : 0,
                    f = l + e.length < o ? e.length : o - l
                  p && ((_ -= 1), (f -= 1)),
                    r
                      ? ((a = []), _ > 0 && a.push([0, _]), f !== e.length - 1 && a.push([f, e.length]))
                      : (a = [[_, f]])
                }
                return (
                  null !== (n = a) && void 0 !== n && n.length && (s = a),
                  p
                    ? {
                        highlights: s,
                        text: ''.concat(null == e ? void 0 : e.replace('#', '')),
                        entityType: 'hashtag',
                        prefix: '#',
                      }
                    : { highlights: s, text: e, entityType: 'text', prefix: '' }
                )
              })
            }
            return n
          })(s, t.isTrue('responsive_web_typeahead_reverse_bolding_enabled') ? r : '', true),
          _ = c.createElement(
            l.ZP,
            null,
            p.map(function (e, t) {
              return c.createElement(B.ZP, { key: ''.concat(e.text).concat(t), part: e })
            }),
          ),
          f = d ? 'xxxLarge' : 'xLarge',
          v = c.createElement(
            c.Fragment,
            null,
            _,
            a
              ? c.createElement(
                  u.Z,
                  { style: Q.context },
                  a && a.types[0] && 'followable_topic' === a.types[0].type
                    ? c.createElement(q['default'], { style: Q.icon })
                    : null,
                  c.createElement(l.ZP, { color: 'gray700' }, a.display_string || ' '),
                )
              : null,
          )
        return c.createElement(
          u.Z,
          { style: [Q.root, n && Q.disabled, o] },
          i
            ? (function (e) {
                var t = c.createElement(V.Z, { Icon: H['default'], color: 'neutral', size: f, style: Q.searchIcon })
                return c.createElement(
                  I.Z,
                  { avatarCell: t, avatarCellStyle: Q.searchIconCell, avatarSize: f, cellStyle: Q.wrapperCellStyle },
                  e,
                )
              })(v)
            : v,
        )
      }
      n(22144)
      var G = n(854044),
        z = n(819153),
        K = n(473228),
        X = n.n(K),
        $ = n(235210),
        J = n(286928),
        ee = function ee(e, t) {
          return (0, J.cY)(e, t.userId)
        }
      var te = (0, T.Z)().propsFromState(function () {
          return { userSpace: ee }
        }),
        ne = 'TypeaheadUser'
      var re = X().ae2205d2,
        ae = X().d960b55c,
        ie = X().fd06b02f,
        oe = Object.freeze({
          num_of_followers: $.Z.Follow,
          bio: $.Z.TextOnly,
          location: $.Z.Location,
          num_tweets: $.Z.NewTweets,
          follow_relationship: $.Z.Follow,
          followers_follow: $.Z.Follow,
          social_proof: $.Z.SocialProof,
          follow_relationship_mutual_follow: $.Z.FollowMutual,
          follow_relationship_followed: $.Z.FollowFollowed,
          follow_relationship_following: $.Z.FollowFollowing,
          highlighted_label: 'HighlightedIcon',
        }),
        se = (function (e) {
          ;(0, o.Z)(n, e)
          var t = (0, s.Z)(n)
          function n() {
            var e
            ;(0, r.Z)(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) {
              o[s] = arguments[s]
            }
            return (
              (e = t.call.apply(t, [this].concat(o))),
              (0, d.Z)((0, i.Z)(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              (0, d.Z)((0, i.Z)(e), '_handleClick', function () {
                var t = e.props,
                  n = t.isDisabled,
                  r = t.item,
                  a = t.onItemClick
                a && a(r, !!n)
              }),
              e
            )
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.affiliateBadgeInfo,
                    r = t.avatarUri,
                    a = t.decoration,
                    i = t.disabledMessage,
                    o = t.displayNameLabel,
                    s = t.isBlueVerified,
                    d = t.isDisabled,
                    u = t.isProtected,
                    l = t.isVerified,
                    p = t.name,
                    f = t.screenName,
                    v = t.source,
                    m = t.userId,
                    Z = t.userSpace,
                    I = t.verifiedType,
                    y = t.withHoverCard,
                    g = t.withNewTypeaheadUI,
                    E = this.context.featureSwitches,
                    T = this._getItemContext(),
                    S = T.context,
                    C = T.highlightedLabel,
                    w = v === h._4.SearchBox,
                    A = E.isTrue('responsive_web_twitter_blue_verified_badge_is_enabled'),
                    R = Z && E.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? Z : void 0
                  return (
                    R && (R.accessibilityLabel = ie({ screenName: f })),
                    c.createElement(G.Z, null, function (t) {
                      var v = t.windowWidth > _.Z.theme.breakpoints.small ? 'xxxLarge' : 'xxLarge'
                      return c.createElement(z.ZP, {
                        affiliateBadgeInfo: n,
                        avatarSize: g ? v : 'xLarge',
                        avatarUri: r,
                        decoration: a,
                        disabledMessage: d ? i : void 0,
                        displayMode: g ? 'ExperimentalUserTypeahead' : 'UserCompact',
                        displayNameLabel: o,
                        highlightedLabel: C,
                        isBlueVerified: A && s,
                        isDisabled: d,
                        isProtected: u,
                        isVerified: l,
                        name: p,
                        onAvatarClick: e._handleAvatarClick,
                        onCellClick: e._handleClick,
                        onScreenNameClick: e._handleClick,
                        presenceIndicator: w ? R : void 0,
                        screenName: f,
                        socialContext: S,
                        testID: ne,
                        userId: m,
                        verifiedType: I,
                        withInteractiveStyling: !1,
                        withLink: y,
                      })
                    })
                  )
                },
              },
              {
                key: '_getItemContext',
                value: function value() {
                  var e = this._getResultContext()
                  return {
                    highlightedLabel: null == e ? void 0 : e.highlightedLabel,
                    context: null != e && e.highlightedLabel ? void 0 : e || this._getSocialContext(),
                  }
                },
              },
              {
                key: '_getSocialContext',
                value: function value() {
                  var e = this.props.socialContext
                  if (e && e.following) {
                    var t = e.followed_by ? re : ae
                    return { contextType: $.Z.Follow, text: t }
                  }
                },
              },
              {
                key: '_getResultContext',
                value: function value() {
                  var e = this.props,
                    t = e.resultContext
                  if (e.withNewTypeaheadUI && t && t.display_string && t.types) {
                    var n = t.display_string,
                      r = t.icon_url,
                      a = t.types,
                      i = a.length ? a[0].type : void 0,
                      o = i && i in oe ? oe[i] : $.Z.TextOnly
                    return {
                      contextType: o,
                      text: n,
                      highlightedLabel:
                        o === oe.highlighted_label && r ? { badge: { url: r }, description: n } : void 0,
                    }
                  }
                },
              },
            ]),
            n
          )
        })(c.PureComponent)
      ;(0, d.Z)(se, 'contextType', Z.rC), (0, d.Z)(se, 'defaultProps', { withNewTypeaheadUI: !1, withHoverCard: !1 })
      var de = te.forwardRef(se),
        ce = 'typeaheadResult'
      var ue = { viewType: 'typeahead_result' },
        le = function le(e) {
          return e.children
        }
      function pe(e) {
        return c.createElement(le, { item: e.item }, c.createElement(fe, e))
      }
      var _e = [h._4.SearchBox, h._4.Compose],
        fe = (function (e) {
          ;(0, o.Z)(n, e)
          var t = (0, s.Z)(n)
          function n(e, a) {
            var o
            return (
              (0, r.Z)(this, n),
              (o = t.call(this, e, a)),
              (0, d.Z)((0, i.Z)(o), '_onViewRef', function (e) {
                o._viewRef = e
                var t = o.props.onRef
                t && t(e)
              }),
              (0, d.Z)((0, i.Z)(o), '_handleClick', function () {
                var e = o.props.item
                e.type !== h.El.User && o.props.onClick && o.props.onClick(e, o.isDisabled)
              }),
              (o._withNewTypeaheadUI = o.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              o
            )
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this
                  ;(this._loaded = !0),
                    this._viewRef &&
                      (this._rafId = window.requestAnimationFrame(function () {
                        e._viewRef && e._viewRef.setNativeProps({ style: { opacity: 1 } })
                      }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
                  var t = this.props.onRef
                  t && t !== e.onRef && this._viewRef && t(this._viewRef)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._rafId && window.cancelAnimationFrame(this._rafId)
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.domId,
                    n = e.isDisabled,
                    r = e.isFocused,
                    a = e.isInMultiSelect,
                    i = e.isSelected,
                    o = e.style
                  return c.createElement(
                    m.Z,
                    { behavioralEventContext: ue },
                    c.createElement(
                      u.Z,
                      {
                        accessibilityChecked: !(!a || !i) || void 0,
                        accessibilityRole: 'option',
                        accessibilitySelected: n ? void 0 : (a && i) || (!a && !!r),
                        nativeID: t,
                        testID: ce,
                      },
                      c.createElement(
                        p.Z,
                        {
                          accessibilityRole: a ? 'checkbox' : 'button',
                          disabled: n,
                          focusable: !0,
                          onPress: this._handleClick,
                          style: [r && ve.focused, ve.transitionStyles, this._loaded && ve.loaded, o],
                          viewRef: this._onViewRef,
                        },
                        this._renderResult(),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderResult',
                value: function value() {
                  var e = this.props,
                    t = e.disabledMessage,
                    n = e.getUserDisplayNameLabel,
                    r = e.isDisabled,
                    a = e.isSelected,
                    i = e.item,
                    o = e.onClick,
                    s = e.renderUserDecoration,
                    d = e.source,
                    p = e.withUserHoverCard,
                    _ = this.context.featureSwitches.isTrue('responsive_web_twitter_blue_verified_badge_is_enabled')
                  switch (i.type) {
                    case h.El.User:
                      var f = i.data,
                        m = s ? s({ userId: f.id_str, user: f, isSelected: a }) : void 0,
                        Z = n ? n(i, f) : void 0
                      return c.createElement(de, {
                        affiliateBadgeInfo: f.highlightedLabel,
                        avatarUri: f.profile_image_url_https,
                        canDm: !!f.can_dm,
                        canMediaTag: !!f.can_media_tag,
                        decoration: m || void 0,
                        disabledMessage: t,
                        displayNameLabel: Z,
                        isBlueVerified: _ && !!f.is_blue_verified,
                        isDisabled: r,
                        isProtected: !!f['protected'],
                        isVerified: !!f.verified,
                        item: i,
                        name: f.name,
                        onItemClick: o,
                        resultContext: f.result_context,
                        screenName: f.screen_name,
                        socialContext: f.social_context,
                        source: d,
                        userId: f.id_str,
                        verifiedType: f.verified_type,
                        withHoverCard: p,
                        withNewTypeaheadUI: this._withNewTypeaheadUI && _e.includes(d),
                      })
                    case h.El.Event:
                      var I = i.data
                      return this._withNewTypeaheadUI
                        ? c.createElement(k.Z, {
                            image: I.primary_image && I.primary_image.original_info,
                            style: ve.itemPadding,
                            supportText: I.supporting_text,
                            title: I.topic,
                            withNewTypeaheadUI: !0,
                          })
                        : c.createElement(F, {
                            event: I.topic,
                            image: I.primary_image && I.primary_image.original_info,
                            supportText: I.supporting_text,
                          })
                    case h.El.Hashtag:
                    case h.El.Topic:
                      var y = this.props.query,
                        g = i.data,
                        E = d === h._4.SearchBox
                      return c.createElement(W, {
                        isDisabled: r,
                        query: y || '',
                        resultContext: g.result_context,
                        showIcon: E,
                        style: E ? ve.itemPadding : void 0,
                        topic: g.topic,
                        withNewTypeaheadUI: this._withNewTypeaheadUI,
                      })
                    case h.El.DMConversation:
                      return (
                        !!this.context.loggedInUserId &&
                        c.createElement(b, {
                          conversationId: i.id,
                          isDisabled: r,
                          isSelected: a,
                          perspective: this.context.loggedInUserId,
                        })
                      )
                    case h.El.SettingGroup:
                      var T = i.data.text
                      return c.createElement(
                        u.Z,
                        { style: ve.navigationLink },
                        c.createElement(l.ZP, { style: ve.content, weight: 'bold' }, T),
                        c.createElement(v['default'], { style: ve.icon }),
                      )
                    case h.El.Setting:
                      var S = i.data.text
                      return c.createElement(
                        u.Z,
                        { style: ve.navigationLink },
                        c.createElement(l.ZP, { style: ve.content }, S),
                        c.createElement(v['default'], { style: ve.icon }),
                      )
                    case h.El.NoResult:
                      var C = i.data.text
                      return c.createElement(l.ZP, { style: ve.noResult }, C)
                    default:
                      return null
                  }
                },
              },
              {
                key: 'isDisabled',
                get: function get() {
                  return !!this.props.isDisabled
                },
              },
            ]),
            n
          )
        })(c.Component)
      ;(0, d.Z)(fe, 'contextType', Z.rC)
      var ve = _.Z.create(function (e) {
          return {
            checkIcon: { color: e.colors.primary },
            navigationLink: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 },
            noResult: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            loaded: { opacity: 1 },
            focused: { backgroundColor: e.colors.gray0 },
            transitionStyles: { transitionProperty: 'opacity', transitionDuration: '250ms', opacity: 0 },
          }
        }),
        me = function me(e) {
          return e.isSelected ? c.createElement(f['default'], { accessibilityHidden: !0, style: ve.checkIcon }) : null
        }
    },
    943346: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return o
        },
        l: function l() {
          return i
        },
      })
      n(449228), n(358188)
      var r = n(734562),
        a = n(142938),
        i = function i(e, t) {
          var n,
            a,
            i,
            o,
            s,
            d,
            c =
              null === (n = e.data) ||
              void 0 === n ||
              null === (a = n.labels) ||
              void 0 === a ||
              null ===
                (i = a.find(function (e) {
                  return e.label_type === r.w1.PINNED
                })) ||
              void 0 === i
                ? void 0
                : i.timestamp,
            u =
              null === (o = t.data) ||
              void 0 === o ||
              null === (s = o.labels) ||
              void 0 === s ||
              null ===
                (d = s.find(function (e) {
                  return e.label_type === r.w1.PINNED
                })) ||
              void 0 === d
                ? void 0
                : d.timestamp
          return c ? (u ? c - u : -1) : 1
        }
      var o = function o(e, t) {
        var n = e.sort_event_id,
          r = t.sort_event_id
        return n ? (r ? (0, a.ZP)(r, n) : 1) : -1
      }
    },
    506800: function _(e, t, n) {
      n.d(t, {
        o: function o() {
          return a
        },
      })
      var r = n(316742),
        a = (0, r.Z)([])
      ;(0, r.Z)({})
    },
    879075: function _(e, t, n) {
      n.d(t, {
        Ci: function Ci() {
          return u
        },
        Dd: function Dd() {
          return d
        },
        NW: function NW() {
          return i
        },
        Ur: function Ur() {
          return s
        },
        WX: function WX() {
          return r
        },
        jF: function jF() {
          return c
        },
        kl: function kl() {
          return a
        },
        nQ: function nQ() {
          return o
        },
      })
      var r = 'ArrowDown',
        a = 'ArrowUp',
        i = 'Enter',
        o = 'Escape',
        s = 'ESC',
        d = 'Tab',
        c = 'Delete',
        u = 'Backspace'
    },
    137378: function _(e, t, n) {
      n.d(t, {
        V: function V() {
          return i
        },
        n: function n() {
          return a
        },
      })
      var r = n(845490),
        a = 750,
        i = {
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
            { type: 'hashtag', regexp: n.n(r)(), srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
    32941: function _(e, t, n) {
      n.d(t, {
        A1: function A1() {
          return u
        },
        D5: function D5() {
          return v
        },
        bR: function bR() {
          return d
        },
        kE: function kE() {
          return l
        },
        sY: function sY() {
          return p
        },
        si: function si() {
          return c
        },
        xX: function xX() {
          return _
        },
      })
      var r = n(968079),
        a = n(133028),
        i =
          (n(449228),
          n(358188),
          n(374083),
          n(477950),
          n(74069),
          n(332501),
          n(94908),
          n(345794),
          n(438695),
          n(201939),
          n(136728),
          n(543450),
          n(995342),
          n(818178),
          n(973186)),
        o = n(16587),
        s = n(137378)
      function d(e, t) {
        var n,
          r = s.V.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          i = ''
        return (
          n && (i = n && (1 === n.length ? n[0] : n[1])),
          r ? (0, a.Z)((0, a.Z)({}, r.scope), {}, { src: t, q: i }) : null
        )
      }
      function c(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(s.V.WordEnd),
          i = a >= 0 ? n.slice(a) : '',
          o = r.search(s.V.WordBoundary),
          d = i + r.slice(0, o)
        return d.trim() ? { start: a, end: e + o, word: d } : { start: -1, end: -1, word: '' }
      }
      function u() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function l(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function p(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, (0, r.Z)(i))
      }
      var _ = (0, o.Z)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(i.Z.theme.spaces.space64, ')'),
            position: 'fixed',
            top: 'calc('.concat(e, 'px + ').concat(i.Z.theme.spaces.space1, ')'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        f = 0,
        v = function v() {
          return 'typeaheadDropdown-'.concat((f += 1))
        }
    },
    192157: function _(e, t, n) {
      n.d(t, {
        x: function x() {
          return a
        },
      })
      var r = n(734562),
        a = function a(e, t) {
          return e[r.Yf] ? e[r.Yf].conversations[t] : null
        }
    },
    618397: function _(e, t, n) {
      n.d(t, {
        $S: function $S() {
          return Ue
        },
        Ae: function Ae() {
          return Pe
        },
        Ap: function Ap() {
          return Be
        },
        BW: function BW() {
          return ke
        },
        Be: function Be() {
          return Ie
        },
        Ek: function Ek() {
          return Ye
        },
        FI: function FI() {
          return He
        },
        FS: function FS() {
          return oe
        },
        GP: function GP() {
          return Te
        },
        Ke: function Ke() {
          return qe
        },
        O$: function O$() {
          return Ne
        },
        OW: function OW() {
          return Ze
        },
        PZ: function PZ() {
          return Fe
        },
        Pr: function Pr() {
          return ne
        },
        Qe: function Qe() {
          return et
        },
        SF: function SF() {
          return De
        },
        UA: function UA() {
          return _e
        },
        Um: function Um() {
          return ve
        },
        W: function W() {
          return pe
        },
        X5: function X5() {
          return Je
        },
        Xw: function Xw() {
          return ze
        },
        ZP: function ZP() {
          return z
        },
        Zg: function Zg() {
          return de
        },
        _D: function _D() {
          return We
        },
        aG: function aG() {
          return le
        },
        ax: function ax() {
          return se
        },
        ck: function ck() {
          return fe
        },
        d0: function d0() {
          return xe
        },
        dq: function dq() {
          return Le
        },
        gQ: function gQ() {
          return re
        },
        gq: function gq() {
          return ce
        },
        jT: function jT() {
          return ue
        },
        lT: function lT() {
          return Ve
        },
        nI: function nI() {
          return Xe
        },
        qH: function qH() {
          return Ce
        },
        sA: function sA() {
          return he
        },
        sS: function sS() {
          return me
        },
        sj: function sj() {
          return Ee
        },
        tF: function tF() {
          return ge
        },
        tw: function tw() {
          return Ae
        },
        v3: function v3() {
          return be
        },
        wm: function wm() {
          return ye
        },
        xu: function xu() {
          return te
        },
      })
      var r = n(459740),
        a = n(145850),
        i = n(968079),
        o = n(196234),
        s = n(256666),
        d = n(133028),
        c =
          (n(743108),
          n(358188),
          n(335883),
          n(315735),
          n(906886),
          n(567890),
          n(818178),
          n(543450),
          n(326936),
          n(334769),
          n(739529),
          n(231235),
          n(416781),
          n(73439),
          n(24949)),
        u = n(456992),
        l = n(463174),
        p = n(663140),
        _ = n(142938),
        f = n(753392),
        v = n(823803),
        m = n(851670),
        h = n(918255),
        Z = n(467935),
        I = n(316025),
        y = n(157659),
        g = n(222167),
        E = n(455699),
        T = n(76431),
        S = n(129419),
        C = n(734562),
        w = ['error'],
        A = ['avatarMediaId', 'isUploading', 'max_entry_id', 'min_entry_id'],
        R = 'ACTION_DM_ADD_PARTICIPANTS',
        D = 'FETCH_DM_CONVERSATION_FUTURE',
        b = 'FETCH_DM_CONVERSATION_RELATIVE_HISTORY',
        x = 'FETCH_DM_CONVERSATION_HISTORICAL_SNAPSHOT',
        N = f.dg(C.A7, 'ACCEPT_CONVERSATION'),
        O = f.dg(C.A7, 'MUTE_DM_USER'),
        P = f.dg(C.A7, 'ADD_PARTICIPANTS'),
        M = f.dg(C.A7, 'FETCH_CONVERSATION'),
        U = f.dg(C.A7, 'FETCH_CONVERSATION_FROM_PARTICIPANTS'),
        L = f.dg(C.A7, 'LEAVE_CONVERSATION'),
        F = f.dg(C.A7, 'MARK_CONVERSATION_READ'),
        k = f.dg(C.A7, 'DISABLE_MENTION_CONVERSATION_NOTIFICATIONS'),
        B = f.dg(C.A7, 'DISABLE_CONVERSATION_NOTIFICATIONS'),
        V = f.dg(C.A7, 'ENABLE_MENTION_CONVERSATION_NOTIFICATIONS'),
        H = f.dg(C.A7, 'ENABLE_CONVERSATION_NOTIFICATIONS'),
        q = f.dg(C.A7, 'UPDATE_CONVERSATION_NAME'),
        j = f.dg(C.A7, 'UPLOAD_MEDIA'),
        Y = f.dg(C.A7, 'UPDATE_GROUP_AVATAR'),
        Q = function Q(e, t) {
          return t + 36e5 * e
        },
        W = function W(e) {
          return [void 0, Q(1, e), Q(8, e), Q(168, e)]
        },
        G = {}
      function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case N.SUCCESS:
            var n = t.meta.conversationId,
              c = e[n]
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                n,
                (0, d.Z)((0, d.Z)({}, c), {}, { data: (0, d.Z)((0, d.Z)({}, c.data), {}, { trusted: !0 }) }),
              ),
            )
          case we:
            var u = Object.entries(t.payload || {}).reduce(function (t, n) {
              var r,
                a = (0, o.Z)(n, 2),
                i = a[0],
                c = a[1]
              return (
                (t[i] = (0, d.Z)(
                  (0, d.Z)({}, $(e[i], c)),
                  {},
                  {
                    fetchStatus:
                      ((r = {}), (0, s.Z)(r, I.Yj.BOTTOM, v.ZP.LOADED), (0, s.Z)(r, I.Yj.TOP, v.ZP.LOADED), r),
                  },
                )),
                t
              )
            }, {})
            return (0, d.Z)((0, d.Z)({}, e), u)
          case P.REQUEST:
            var l = t.meta.conversationId,
              p = e[l]
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                l,
                (0, d.Z)(
                  (0, d.Z)({}, p),
                  {},
                  { fetchStatus: (0, d.Z)((0, d.Z)({}, p.fetchStatus), {}, (0, s.Z)({}, I.Yj.TOP, v.ZP.LOADING)) },
                ),
              ),
            )
          case P.FAILURE:
            var f = t.meta.conversationId,
              m = e[f]
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                f,
                (0, d.Z)(
                  (0, d.Z)({}, m),
                  {},
                  { fetchStatus: (0, d.Z)((0, d.Z)({}, m.fetchStatus), {}, (0, s.Z)({}, I.Yj.TOP, v.ZP.FAILED)) },
                ),
              ),
            )
          case P.SUCCESS:
            var h = t.meta.conversationId,
              Z = e[h],
              y = Z.data.participants,
              g = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : []
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                h,
                (0, d.Z)(
                  (0, d.Z)({}, Z),
                  {},
                  {
                    fetchStatus: (0, d.Z)((0, d.Z)({}, Z.fetchStatus), {}, (0, s.Z)({}, I.Yj.TOP, v.ZP.LOADED)),
                    data: (0, d.Z)((0, d.Z)({}, Z.data), {}, { participants: [].concat((0, i.Z)(y), (0, i.Z)(g)) }),
                  },
                ),
              ),
            )
          case M.REQUEST:
            var E = t.meta,
              T = E.conversationId,
              C = E.direction,
              w = void 0 === C ? I.Yj.BOTTOM : C,
              A = e[T]
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                T,
                (0, d.Z)(
                  (0, d.Z)({}, A),
                  {},
                  {
                    fetchStatus: (0, d.Z)((0, d.Z)({}, (A && A.fetchStatus) || {}), {}, (0, s.Z)({}, w, v.ZP.LOADING)),
                  },
                ),
              ),
            )
          case M.FAILURE:
            var R = t.meta,
              D = R.conversationId,
              b = R.direction,
              x = void 0 === b ? I.Yj.BOTTOM : b,
              U = e[D]
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                D,
                (0, d.Z)(
                  (0, d.Z)({}, U),
                  {},
                  {
                    fetchStatus: (0, d.Z)((0, d.Z)({}, (U && U.fetchStatus) || {}), {}, (0, s.Z)({}, x, v.ZP.FAILED)),
                    error: t.payload,
                  },
                ),
              ),
            )
          case M.SUCCESS:
            var Y,
              Q = t.meta,
              z = Q.conversationId,
              K = Q.direction,
              X = void 0 === K ? I.Yj.BOTTOM : K,
              J = (null === (Y = e[z]) || void 0 === Y ? void 0 : Y.data) || {}
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                z,
                (0, d.Z)(
                  (0, d.Z)({}, e[z]),
                  {},
                  {
                    data: (0, d.Z)((0, d.Z)({}, J), {}, { isSearchResultOnly: !1 }),
                    fetchStatus: (0, d.Z)(
                      (0, d.Z)({}, (e[z] && e[z].fetchStatus) || {}),
                      {},
                      (0, s.Z)({}, X, v.ZP.LOADED),
                    ),
                  },
                ),
              ),
            )
          case Re:
            return Object.entries(e).reduce(function (n, r) {
              var a = (0, o.Z)(r, 2),
                i = a[0]
              a[1]
              return (n[i] = $(e[i], { last_read_event_id: t.payload })), n
            }, {})
          case F.REQUEST:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                t.meta.conversationId,
                $(e[t.meta.conversationId], { last_read_event_id: t.meta.lastReadEventId }),
              ),
            )
          case O.SUCCESS:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { muted: t.meta.mute })),
            )
          case Oe:
            var ee = t.payload,
              te = (e[ee], (0, r.Z)(e, [ee].map(a.Z)))
            return te
          case L.REQUEST:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                t.meta.conversationId,
                (0, d.Z)((0, d.Z)({}, e[t.meta.conversationId]), {}, { isDeleted: !0 }),
              ),
            )
          case Me:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { notifications_disabled: !t.payload })),
            )
          case B.REQUEST:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)(
                {},
                t.meta.conversationId,
                $(e[t.meta.conversationId], {
                  notifications_disabled: !0,
                  mute_expiration_time: W(new Date().getTime())[t.meta.duration],
                }),
              ),
            )
          case k.REQUEST:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { mention_notifications_disabled: !0 })),
            )
          case H.REQUEST:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { notifications_disabled: !1 })),
            )
          case V.REQUEST:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { mention_notifications_disabled: !1 })),
            )
          case Ke:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { avatar_image_https: t.payload })),
            )
          case q.REQUEST:
          case q.SUCCESS:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { name: t.meta.name })),
            )
          case je:
            var ne = e[t.meta.conversationId],
              re = (ne && ne.data && ne.data.max_entry_id) || '0'
            return (0, _.T1)(t.payload, re)
              ? (0, d.Z)(
                  (0, d.Z)({}, e),
                  {},
                  (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { max_entry_id: t.payload })),
                )
              : e
          case j.REQUEST:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { isUploading: !0 })),
            )
          case j.FAILURE:
          case j.SUCCESS:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { isUploading: !1 })),
            )
          case Qe:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { avatarMediaId: t.payload })),
            )
          case Ge:
            return (0, d.Z)(
              (0, d.Z)({}, e),
              {},
              (0, s.Z)({}, t.meta.conversationId, $(e[t.meta.conversationId], { avatarMediaId: null })),
            )
          case S.t:
            return G
          default:
            return e
        }
      }
      var K = function K(e, t) {
          return (0, _.KH)(e, t) ? e : t
        },
        X = function X(e, t) {
          return e && t ? ((0, _.T1)(e, t) ? t : e) : e || t
        },
        $ = function $() {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = (t.error, (0, r.Z)(t, w)),
            i = (0, u.Z)(n.avatarMediaId) ? n : a,
            o = i.avatarMediaId,
            s = void 0 === o ? null : o,
            c = n.isUploading,
            l = void 0 !== c && c,
            p = (n.avatarMediaId, n.isUploading, n.max_entry_id),
            _ = n.min_entry_id,
            f = (0, r.Z)(n, A),
            v = (0, d.Z)((0, d.Z)({}, a && a.data), f)
          ;(null != a && a.data) || !f.isSearchResult
            ? f.isSearchResult || (v.isSearchResultOnly = !1)
            : (v.isSearchResultOnly = !0),
            null != a && null !== (e = a.data) && void 0 !== e && e.labels && !f.labels
              ? ((v.labels = a.data.labels), (v.isPinnedOnly = !1))
              : !a.data && f.labels && (v.isPinnedOnly = !0)
          var m,
            h,
            Z = !!f.conversation_id
          ;(Z && !f.convo_label && delete v.convo_label, p) &&
            (v.max_entry_id = K(p, null == a || null === (m = a.data) || void 0 === m ? void 0 : m.max_entry_id))
          _ && (v.min_entry_id = X(_, null == a || null === (h = a.data) || void 0 === h ? void 0 : h.min_entry_id))
          return (0, d.Z)((0, d.Z)({}, a), {}, { avatarMediaId: s, data: v, isUploading: l })
        },
        J = function J() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0
          return Object.entries(e).reduce(function (e, n) {
            var r = (0, o.Z)(n, 2),
              a = r[0],
              i = r[1]
            return (0, d.Z)((0, d.Z)({}, e), {}, (0, s.Z)({}, a, (0, d.Z)((0, d.Z)({}, i), t)))
          }, {})
        },
        ee = function ee() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = t && n === D,
            a = t && n === b
          return Object.entries(e).reduce(function (e, n) {
            var i,
              c = (0, o.Z)(n, 2),
              u = c[0],
              l = c[1]
            return (
              (i = r
                ? (0, d.Z)(
                    (0, d.Z)({}, l),
                    {},
                    {
                      max_search_entry_id: null == t ? void 0 : t.max_entry_id,
                      search_status: null == t ? void 0 : t.status,
                    },
                  )
                : a
                ? (0, d.Z)(
                    (0, d.Z)({}, l),
                    {},
                    { min_search_entry_id: null == t ? void 0 : t.min_entry_id, status: null == t ? void 0 : t.status },
                  )
                : (0, d.Z)(
                    (0, d.Z)({}, l),
                    {},
                    {
                      min_search_entry_id: null == t ? void 0 : t.min_entry_id,
                      max_search_entry_id: null == t ? void 0 : t.max_entry_id,
                      search_status: null == t ? void 0 : t.status,
                    },
                  )),
              (0, d.Z)((0, d.Z)({}, e), {}, (0, s.Z)({}, u, i))
            )
          }, {})
        },
        te = function te(e, t) {
          return e[C.Yf].conversations[t]
        },
        ne = function ne(e, t) {
          var n = te(e, t)
          return n && n.fetchStatus ? (0, v.ke)(n.fetchStatus, n.data) : v.ZP.LOADED
        },
        re = function re(e, t) {
          var n,
            r,
            a = te(e, t)
          return (
            !(
              !a ||
              !a.fetchStatus ||
              (null != a && null !== (n = a.data) && void 0 !== n && n.isSearchResultOnly) ||
              (null != a && null !== (r = a.data) && void 0 !== r && r.isPinnedOnly)
            ) && (0, v.ke)(a.fetchStatus, a.data) === v.ZP.LOADED
          )
        },
        ae = function ae(e, t) {
          var n = te(e, t)
          return !(!n || !n.fetchStatus) && n.fetchStatus[I.Yj.TOP] === v.ZP.LOADING
        },
        ie = function ie(e, t) {
          var n = te(e, t)
          return !(!n || !n.fetchStatus) && n.fetchStatus[I.Yj.BOTTOM] === v.ZP.LOADING
        },
        oe = (0, c.P1)(
          function (e) {
            return e[C.Yf].conversations
          },
          function (e) {
            return Object.entries(e).reduce(function (e, t) {
              var n = (0, o.Z)(t, 2),
                r = n[0],
                a = n[1]
              return a.data && !a.isDeleted && (e[r] = a), e
            }, {})
          },
        ),
        se = function se(e) {
          return Object.keys(oe(e)).length > 0
        },
        de = function de(e, t) {
          if (t) {
            var n = re(e, t),
              r = (0, T.g4)(e, C._2.SECONDARY),
              a = (0, T.g4)(e, C._2.TERTIARY)
            return n ? (r.includes(t) ? C._2.SECONDARY : a.includes(t) ? C._2.TERTIARY : C._2.PRIMARY) : void 0
          }
        },
        ce = function ce(e, t) {
          var n = ((te(e, t) || {}).data || {}).sort_event_id
          if (n) {
            var r = Z.o1(e),
              a = (0, E.WK)(e, n) || {},
              i = a.by_user_id,
              o = a.id,
              s = a.message_data,
              d = a.sender_id
            if ((d && d !== r) || (s && s.sender_id !== r) || (i && i !== r)) return o
          }
          return null
        },
        ue = function ue(e, t) {
          var n = ce(e, t),
            r = (te(e, t) || {}).data
          return !n || !!(r && r.last_read_event_id && (0, _.KH)(r.last_read_event_id, n))
        },
        le = function le(e, t) {
          return (te(e, t) || {}).avatarMediaId
        },
        pe = function pe(e, t) {
          return (te(e, t) || {}).isUploading
        },
        _e = function _e(e, t) {
          return h._T(e, le(e, t))
        },
        fe = function fe(e, t) {
          return function (n, r, a) {
            var i = a.api,
              o = t.join(',')
            return f
              ._O(n, {
                params: { conversationId: e, joinedParticipantIds: o },
                request: i.DirectMessages.addParticipants,
              })({ actionTypes: P, context: R, meta: { conversationId: e, participantIds: t } }, function (e) {
                if (e) {
                  var t = e.entities
                  return [t.entries && (0, E.I7)(t.entries), (0, m.dP)(t)]
                }
              })
              .then(function (e) {
                var t = e.result.failed_participants
                if (!t) return Promise.resolve(e)
                var n = Object.keys(t),
                  r = 1 === n.length ? t[n[0]] : p.ZP.DefaultApiError,
                  a = new l.Z('addParticpants URL', 500, e.headers, [{ code: r }])
                return (a.context.action = R), Promise.reject(a)
              })
          }
        },
        ve = function ve() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = e.context,
              o = e.conversationId
            return f._O(t, { params: e, request: a.DirectMessages.fetchConversation })(
              { actionTypes: M, context: i, meta: { conversationId: o, direction: (0, I.Sj)(e) } },
              function (e) {
                var t
                if (null != e && null !== (t = e.result) && void 0 !== t && t.conversation_timeline) {
                  var n = e.entities,
                    r = n.cards,
                    a = n.entries,
                    o = n.tweets,
                    s = n.users,
                    d = e.result.conversation_timeline,
                    c = d.conversations,
                    u = { max_entry_id: d.max_entry_id, min_entry_id: d.min_entry_id, status: d.status },
                    l = [D, b, x].includes(i) ? ee(c, u, i) : J(c, u)
                  return (0, T.s0)({ conversations: l, entries: a, users: s, tweets: o, cards: r })
                }
              },
            )
          }
        },
        me = function me(e) {
          return function (t, n, r) {
            var a = r.api
            return f._O(t, {
              params: { participantIds: e },
              request: a.DirectMessages.fetchConversationFromParticipants,
            })({ actionTypes: U, meta: { participantIds: e } })
          }
        },
        he = function he() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n) {
            var r = n(),
              a = e.conversationId,
              i = ie(r, a),
              o = re(r, a)
            return i || o ? Promise.resolve() : t(ve({ conversationId: a, context: 'FETCH_DM_CONVERSATION' }))
          }
        },
        Ze = function Ze() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n) {
            var r = n(),
              a = e.conversationId,
              i = ((te(r, a) || {}).data || {}).max_search_entry_id,
              o = ae(r, a),
              s = D
            return i && !o
              ? t(ve({ conversationId: e.conversationId, min_id: i, context: s, min_position: i }))
              : Promise.resolve()
          }
        },
        Ie = function Ie() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n) {
            var r,
              a,
              i = n(),
              o = e.conversationId,
              s = (te(i, o) || {}).data || {},
              c = s.min_entry_id,
              u = s.min_search_entry_id,
              l = s.status
            null != e && e.isSearch
              ? ((a = 'FETCH_DM_CONVERSATION_RELATIVE_HISTORY'), (r = u))
              : ((a = 'FETCH_DM_CONVERSATION_HISTORY'), (r = c))
            var p = ie(i, o)
            return l !== g.To.HAS_MORE || p
              ? Promise.resolve()
              : t(ve((0, d.Z)((0, d.Z)({}, e), {}, { max_id: r, context: a })))
          }
        },
        ye = function ye() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n) {
            var r = n(),
              a = e.conversationId,
              i = e.entryId
            return !ae(r, a) && i
              ? t(ve({ conversationId: a, min_id: i, min_buffer: 15, context: x, min_position: i }))
              : Promise.resolve()
          }
        },
        ge = function ge(e) {
          return function (t, n, r) {
            var a = r.api
            return f._O(t, { params: { conversationId: e }, request: a.DirectMessages.acceptConversation })({
              actionTypes: N,
              meta: { conversationId: e },
            })
          }
        },
        Ee = function Ee(e, t) {
          return Se(e, t, !0)
        },
        Te = function Te(e, t) {
          return Se(e, t, !1)
        },
        Se = function Se(e, t, n) {
          return function (r, a, i) {
            var o = i.api
            return f
              ._O(r, {
                params: { userId: e, relationshipAction: n ? 'mute' : 'unmute', conversationId: t },
                request: o.DirectMessages.muteDMUser,
              })({ actionTypes: O, meta: { userId: e, conversationId: t, mute: n } })
              .then(r(y.ZP.patchUser(e, { dm_muting: n })))
          }
        },
        Ce = function Ce() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = e.conversationId
            return f.AB(t, { params: e, request: a.DirectMessages.leaveConversation })({
              actionTypes: L,
              context: 'ACTION_LEAVE_CONVERSATION',
              meta: { conversationId: i },
            })
          }
        },
        we = 'rweb/directMessages/ADD_CONVERSATIONS',
        Ae = function Ae(e) {
          return { payload: e, type: we }
        },
        Re = 'rweb/directMessages/MARK_ALL_AS_READ',
        De = function De(e) {
          return { payload: e, type: Re }
        },
        be = function be(e, t) {
          return { type: F.REQUEST, meta: { conversationId: e, lastReadEventId: t } }
        },
        xe = function xe(e) {
          return function (t, n, r) {
            var a = r.api,
              i = n(),
              o = (te(i, e) || {}).data,
              s = (void 0 === o ? {} : o).sort_event_id,
              d = !ue(i, e)
            return e && s && d
              ? f.AB(t, { params: { conversationId: e, last_read_event_id: s }, request: a.DirectMessages.markRead })({
                  actionTypes: F,
                  bypassFailureOnErrors: function bypassFailureOnErrors() {
                    return !0
                  },
                  context: 'APP_DM_UPDATE_CONVERSATION_READ_STATE',
                  meta: { conversationId: e, lastReadEventId: s },
                })
              : Promise.resolve()
          }
        },
        Ne = function Ne(e, t) {
          return function (n, r, a) {
            var i = a.api
            if (e)
              return f.AB(n, {
                params: { conversationId: e, last_read_event_id: t },
                request: i.DirectMessages.markRead,
              })({
                actionTypes: F,
                bypassFailureOnErrors: function bypassFailureOnErrors() {
                  return !0
                },
                context: 'APP_DM_UPDATE_CONVERSATION_READ_STATE_EVOLUTION',
                meta: { conversationId: e, lastReadEventId: t },
              })
            Promise.resolve()
          }
        },
        Oe = 'rweb/directMessages/REMOVE_CONVERSATION',
        Pe = function Pe(e) {
          return [{ payload: e, type: Oe }, (0, E.J_)(e)]
        },
        Me = 'rweb/directMessages/TOGGLE_CONVERSATION_NOTIFICATIONS',
        Ue = function Ue(e, t) {
          return { meta: { conversationId: e }, payload: t, type: Me }
        },
        Le = function Le() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = e.conversationId,
              o = e.duration
            return f.AB(t, { params: e, request: a.DirectMessages.disableNotifications })({
              actionTypes: B,
              context: 'ACTION_DISABLE_NOTIFICATIONS',
              meta: { conversationId: i, duration: o },
            })
          }
        },
        Fe = function Fe() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = e.conversationId
            return f.AB(t, { params: e, request: a.DirectMessages.enableNotifications })({
              actionTypes: H,
              context: 'ACTION_ENABLE_NOTIFICATIONS',
              meta: { conversationId: i },
            })
          }
        },
        ke = function ke() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = e.conversationId,
              o = (0, d.Z)({ mention_notifications_disabled: !0 }, e)
            return f.AB(t, { params: o, request: a.DirectMessages.updateMentionNotificationsSetting })({
              actionTypes: k,
              context: 'ACTION_DISABLE_DM_MENTION_NOTIFICATIONS',
              meta: { conversationId: i },
            })
          }
        },
        Be = function Be() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = e.conversationId,
              o = (0, d.Z)({ mention_notifications_disabled: !1 }, e)
            return f.AB(t, { params: o, request: a.DirectMessages.updateMentionNotificationsSetting })({
              actionTypes: V,
              context: 'ACTION_ENABLE_DM_MENTION_NOTIFICATIONS',
              meta: { conversationId: i },
            })
          }
        },
        Ve = function Ve() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            return r.api.DirectMessages.updateTyping(e)
          }
        },
        He = function He() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = e.conversationId,
              o = e.name
            return f.AB(t, { params: e, request: a.DirectMessages.updateConversationName })({
              actionTypes: q,
              context: 'ACTION_UPDATE_CONVERSATION_NAME',
              meta: { conversationId: i, name: o },
            })
          }
        },
        qe = function qe(e) {
          return { type: q.SUCCESS, meta: { conversationId: e.conversation_id, name: e.conversation_name } }
        },
        je = 'rweb/directMessages/UPDATE_CONVERSATION_MAX_ENTRY_ID',
        Ye = function Ye(e, t) {
          return { meta: { conversationId: e }, payload: t, type: je }
        },
        Qe = 'rweb/directMessages/ADD_AVATAR_MEDIA',
        We = function We(e, t) {
          return { meta: { conversationId: e }, payload: t, type: Qe }
        },
        Ge = 'rweb/directMessages/REMOVE_AVATAR_MEDIA',
        ze = function ze(e, t) {
          return { meta: { conversationId: e }, payload: t, type: Ge }
        },
        Ke = 'rweb/directMessages/UPDATE_CONVERSATION_AVATAR',
        Xe = function Xe(e, t) {
          return { meta: { conversationId: e }, payload: t, type: Ke }
        },
        $e = 'APP_DM_UPDATE_CONVERSATION_AVATAR',
        Je = function Je(e) {
          return function (t, n, r) {
            var a = r.api
            t({ meta: { conversationId: e }, type: j.REQUEST })
            var i = le(n(), e),
              s = h.$i(i)
            return t(s).then(
              function (n) {
                var r = (0, o.Z)(n, 1)[0]
                return (
                  t({ meta: { conversationId: e }, type: j.SUCCESS }),
                  f._O(t, {
                    params: { conversationId: e, avatar_id: r.uploadId },
                    request: a.DirectMessages.updateConversationAvatar,
                  })({ actionTypes: Y, context: $e })
                )
              },
              function (n) {
                var r = { errors: n, context: $e }
                return t({ meta: { conversationId: e }, type: j.FAILURE }), Promise.reject(r)
              },
            )
          }
        },
        et = function et(e, t) {
          return function (n, r, a) {
            var i = a.api
            return f.Vg(n, {
              params: { conversation_id: e, welcome_message_id: t },
              request: i.DirectMessages.addWelcomeMessageToConversation,
            })('ADD_WELCOME_MESSAGE_TO_CONVERSATION')
          }
        }
    },
    455699: function _(e, t, n) {
      n.d(t, {
        I7: function I7() {
          return O
        },
        J_: function J_() {
          return L
        },
        MY: function MY() {
          return q
        },
        Ob: function Ob() {
          return W
        },
        WK: function WK() {
          return z
        },
        WO: function WO() {
          return M
        },
        ZP: function ZP() {
          return D
        },
        _d: function _d() {
          return $
        },
        gm: function gm() {
          return G
        },
        gz: function gz() {
          return K
        },
        iN: function iN() {
          return X
        },
        kv: function kv() {
          return k
        },
        pO: function pO() {
          return P
        },
        pt: function pt() {
          return F
        },
        px: function px() {
          return V
        },
        rU: function rU() {
          return Y
        },
        zT: function zT() {
          return J
        },
      })
      var r = n(459740),
        a = n(968079),
        i = n(256666),
        o = n(133028),
        s =
          (n(315735),
          n(358188),
          n(906886),
          n(818178),
          n(995342),
          n(567890),
          n(743108),
          n(438695),
          n(201939),
          n(543450),
          n(334769),
          n(449228),
          n(443430),
          n(372147),
          n(888233),
          n(468811)),
        d = n.n(s),
        c = n(53223),
        u = n(660812),
        l = n(424208),
        p = n(871768),
        _ = n(503614),
        f = n(142938),
        v = n(472599),
        m = n(753392),
        h = n(222167),
        Z = n(129419),
        I = n(734562),
        y = ['error', 'isLoaded', 'isLoading'],
        g = ['data'],
        E = ['conversationId', 'id', 'requestId'],
        T = ['perspective'],
        S = (0, m.dg)(I.A7, 'DELETE_MESSAGE'),
        C = ((0, m.dg)(I.A7, 'REACTION_CREATE'), (0, m.dg)(I.A7, 'REACTION_DELETE')),
        w = (0, m.dg)(I.A7, 'MARK_ENTRIES_AS_SPAM'),
        A = (0, m.dg)(I.A7, 'MARK_ENTRIES_AS_NOT_SPAM'),
        R = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} }
      function D() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.meta || {},
          r = n.conversationId,
          s = n.requestId
        switch (t.type) {
          case B:
            var d = t.payload.id,
              c = (0, o.Z)((0, o.Z)({}, e.entries), {}, (0, i.Z)({}, d, b(e.entries[d], { data: t.payload })))
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                entries: c,
                entryIdsByConversationId: (0, o.Z)(
                  (0, o.Z)({}, e.entryIdsByConversationId),
                  {},
                  (0, i.Z)({}, r, x([].concat((0, a.Z)(e.entryIdsByConversationId[r] || []), [d]), c)),
                ),
              },
            )
          case N:
            var _ = Object.values(t.payload).filter(function (e) {
                return e.type !== h.Cr.CONVERSATION_READ
              }),
              f = _.reduce(
                function (t, n) {
                  var r = n.id,
                    i = (0, p.Z)(n, 'message_reactions')
                  return (
                    (t.allEntries[r] = b(e.entries[r], { data: i, isLoading: !1, isLoaded: !0 })),
                    n.message_reactions &&
                      (n.message_reactions.forEach(function (r) {
                        var a = (0, o.Z)(
                          (0, o.Z)({}, r),
                          {},
                          { affects_sort: !0, message_id: n.id, type: h.Cr.REACTION_CREATE },
                        )
                        t.allEntries[a.id] = b(e.entries[a.id], { data: a, isLoading: !1, isLoaded: !0 })
                      }),
                      (t.embeddedReactionsByMessageId[r] = x(
                        [].concat(
                          (0, a.Z)(e.reactionsByMessageId[r] || []),
                          (0, a.Z)(
                            n.message_reactions.map(function (e) {
                              return e.id
                            }),
                          ),
                        ),
                        (0, o.Z)((0, o.Z)({}, e.entries), t.allEntries),
                      ))),
                    t
                  )
                },
                { allEntries: {}, embeddedReactionsByMessageId: {} },
              ),
              m = (0, o.Z)((0, o.Z)({}, e.entries), f.allEntries),
              I = (0, l.Z)(Object.values(f.allEntries), function (e) {
                return e.data.conversation_id
              }),
              y = Object.keys(I).reduce(function (t, n) {
                var r = I[n].map(function (e) {
                  return e.data.id
                })
                return (t[n] = x([].concat((0, a.Z)(e.entryIdsByConversationId[n] || []), (0, a.Z)(r)), m)), t
              }, {})
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                entries: m,
                entryIdsByConversationId: (0, o.Z)((0, o.Z)({}, e.entryIdsByConversationId), y),
                reactionsByMessageId: (0, o.Z)((0, o.Z)({}, e.reactionsByMessageId), f.embeddedReactionsByMessageId),
              },
            )
          case w.REQUEST:
          case A.REQUEST:
            var g = t.type === w.REQUEST,
              E = t.payload.reduce(function (t, n) {
                var r = e.entries[n] && e.entries[n].data
                return (0,
                o.Z)((0, o.Z)({}, t), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, e.entries[n]), {}, { data: (0, o.Z)((0, o.Z)({}, r), {}, { marked_as_spam: g }) })))
              }, {})
            return (0, o.Z)((0, o.Z)({}, e), {}, { entries: (0, o.Z)((0, o.Z)({}, e.entries), E) })
          case S.REQUEST:
          case U:
            var T = t.type === U && !Array.isArray(t.payload),
              D = e.entryIdsByConversationId[r] || [],
              O =
                t.type === U
                  ? T
                    ? D
                    : t.payload
                  : [t.payload].concat((0, a.Z)(e.reactionsByMessageId[t.payload] || []))
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                entries: (0, p.Z)(e.entries, O),
                entryIdsByConversationId: (0, o.Z)(
                  (0, o.Z)({}, (0, p.Z)(e.entryIdsByConversationId, r)),
                  T ? {} : (0, i.Z)({}, r, (0, u.Z)(D, O)),
                ),
                reactionsByMessageId: (0, p.Z)(e.reactionsByMessageId, O),
              },
            )
          case H:
            var P = t.payload.id || s,
              M = (0, o.Z)({}, (0, p.Z)(e.entries, P)),
              L = x(
                (e.entryIdsByConversationId[r] || []).filter(function (e) {
                  return e !== P
                }),
                M,
              ),
              F = L ? (0, i.Z)({}, r, L) : {}
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                entries: M,
                entryIdsByConversationId: (0, o.Z)((0, o.Z)({}, (0, p.Z)(e.entryIdsByConversationId, r)), F),
                reactionsByMessageId: (0, p.Z)(e.reactionsByMessageId, P),
              },
            )
          case j:
            var k = t.payload,
              V = [].concat((0, a.Z)(e.reactionsByMessageId[k.message_id] || []), [k.id]),
              q = V.filter(function (t) {
                return e.entries[t]
              })
            V.length !== q.length &&
              (0, v.ZP)('DM add reaction is missing a backing entry', {
                extra: { filteredMessageReactionIds: q, messageReactionIds: V, currentId: k.id },
              })
            var Y = x(q, e.entries)
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                reactionsByMessageId: (0, o.Z)((0, o.Z)({}, e.reactionsByMessageId), {}, (0, i.Z)({}, k.message_id, Y)),
              },
            )
          case C.REQUEST:
          case Q:
            var W = t.payload,
              G = (e.reactionsByMessageId[W.message_id] || []).find(function (t) {
                return e.entries[t].data.sender_id === W.sender_id
              })
            if (!G) return e
            var z = (0, u.Z)(e.entryIdsByConversationId[W.conversation_id], G),
              K = (0, u.Z)(e.reactionsByMessageId[W.message_id], G)
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                entries: (0, p.Z)(e.entries, G),
                entryIdsByConversationId: (0, o.Z)(
                  (0, o.Z)({}, e.entryIdsByConversationId),
                  {},
                  (0, i.Z)({}, W.conversation_id, z),
                ),
                reactionsByMessageId: (0, o.Z)((0, o.Z)({}, e.reactionsByMessageId), {}, (0, i.Z)({}, W.message_id, K)),
              },
            )
          case Z.t:
            return R
          default:
            return e
        }
      }
      var b = function b(e, t) {
          var n = e || {},
            a = (n.error, n.isLoaded, n.isLoading, (0, r.Z)(n, y)),
            i = t || {},
            s = i.data,
            d = (0, r.Z)(i, g)
          return (0, o.Z)((0, o.Z)({}, a), {}, { data: (0, o.Z)((0, o.Z)({}, a && a.data), s) }, d)
        },
        x = function x() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = (0, _.Z)(e).sort(function (e, n) {
              var r = (0, f.ZP)(t[e].data.time, t[n].data.time)
              return 0 === r ? (0, f.ZP)(t[e].id, t[n].id) : r
            })
          return n.length ? n : void 0
        },
        N = 'rweb/directMessages/ADD_ENTRIES',
        O = function O(e) {
          return { payload: e, type: N }
        },
        P = function P(e) {
          return function (t, n, a) {
            var i = a.api,
              s = e || {},
              c = s.conversationId,
              u = s.id,
              l = s.requestId,
              p = (0, r.Z)(s, E),
              _ = (0, o.Z)((0, o.Z)({}, p), {}, { id: u, request_id: l || d().v1() })
            return (0, m.AB)(t, { params: _, request: i.DirectMessages.deleteMessage })({
              actionTypes: S,
              context: 'ACTION_DELETE_DM',
              payload: u,
              meta: { conversationId: c },
            })
          }
        },
        M = function M(e) {
          return function (t, n, a) {
            var i = a.api,
              o = e.perspective,
              s = (0, r.Z)(e, T)
            return (0, m.AB)(t, { params: s, request: i.DirectMessages.deleteReaction })({
              actionTypes: C,
              context: 'ACTION_REACTION_DELETE',
              payload: { conversation_id: e.conversation_id, message_id: e.dm_id, sender_id: o },
            })
          }
        },
        U = 'rweb/dm/REMOVE_CONVERSATION_ENTRIES',
        L = function L(e, t) {
          return { meta: { conversationId: e }, payload: t, type: U }
        },
        F = function F(e, t) {
          return { payload: e, type: t ? w.REQUEST : A.REQUEST }
        },
        k = function k(e) {
          var t = e.conversationId,
            n = e.dmId,
            r = e.markSpam
          return function (e, a, i) {
            var o = i.api
            return (0, m.AB)(e, {
              params: { dm_id: n, report_as: r ? 'spam' : 'not_spam' },
              request: o.DirectMessages.reportSpam,
            })({ actionTypes: r ? S : A, payload: r ? n : [n], meta: { conversationId: t } })
          }
        },
        B = 'rweb/directMessages/ADD_ENTRY',
        V = function V(e, t, n) {
          return { meta: { conversationId: e, requestId: t }, payload: n, type: B }
        },
        H = 'rweb/directMessages/REMOVE_ENTRY',
        q = function q(e, t, n) {
          return { meta: { conversationId: e, requestId: t }, payload: n, type: H }
        },
        j = 'rweb/directMessages/ADD_REACTION',
        Y = function Y(e) {
          return { payload: e, type: j }
        },
        Q = 'rweb/directMessages/DELETE_REACTION',
        W = function W(e) {
          return { payload: e, type: Q }
        },
        G = function G(e) {
          return e[I.Yf].entries
        },
        z = function z(e, t) {
          var n = G(e).entries[t]
          return n && n.data
        },
        K = function K(e, t) {
          return e[I.Yf].entries.entryIdsByConversationId[t]
        },
        X = function X(e, t) {
          var n = K(e, t)
          return n
            ? (0, c.Z)(
                n.map(function (t) {
                  return z(e, t)
                }),
              )
            : []
        },
        $ = function $(e, t) {
          return G(e).reactionsByMessageId[t]
        },
        J = function J(e, t) {
          return ($(e, t) || []).map(function (t) {
            return z(e, t).sender_id
          })
        }
    },
    76431: function _(e, t, n) {
      n.d(t, {
        $7: function $7() {
          return oe
        },
        A4: function A4() {
          return se
        },
        B7: function B7() {
          return O
        },
        C2: function C2() {
          return $
        },
        Gk: function Gk() {
          return M
        },
        Kf: function Kf() {
          return H
        },
        MB: function MB() {
          return F
        },
        Oq: function Oq() {
          return Q
        },
        P3: function P3() {
          return ce
        },
        Re: function Re() {
          return Y
        },
        Sb: function Sb() {
          return q
        },
        UD: function UD() {
          return U
        },
        ZI: function ZI() {
          return W
        },
        ZP: function ZP() {
          return A
        },
        aB: function aB() {
          return P
        },
        g4: function g4() {
          return V
        },
        gN: function gN() {
          return b
        },
        j7: function j7() {
          return te
        },
        k5: function k5() {
          return j
        },
        kK: function kK() {
          return ee
        },
        kL: function kL() {
          return de
        },
        oH: function oH() {
          return X
        },
        s0: function s0() {
          return ie
        },
        vC: function vC() {
          return ne
        },
        xS: function xS() {
          return L
        },
      })
      var r,
        a,
        i = n(459740),
        o = n(133028),
        s = n(256666),
        d =
          (n(995342),
          n(358188),
          n(443430),
          n(543450),
          n(449228),
          n(818178),
          n(438695),
          n(201939),
          n(743108),
          n(315735),
          n(906886),
          n(73439),
          n(567890),
          n(824797)),
        c = n(990867),
        u = n(142938),
        l = n(943346),
        p = n(753392),
        _ = n(823803),
        f = n(851670),
        v = n(924433),
        m = n(222167),
        h = n(618397),
        Z = n(455699),
        I = n(129419),
        y = n(397654),
        g = n(734562),
        E = ['inbox_timelines'],
        T = ['cards', 'conversations', 'cursor', 'entries', 'tweets', 'users'],
        S = p.dg(g.A7, 'FETCH_INBOX'),
        C = p.dg(g.A7, 'UPDATE_LAST_SEEN_EVENT_ID'),
        w = {
          cursors:
            ((r = {}),
            (0, s.Z)(r, g.xR.Inbox, { fetchStatus: _.ZP.NONE }),
            (0, s.Z)(r, g.xR.Trusted, { fetchStatus: _.ZP.NONE }),
            (0, s.Z)(r, g.xR.Untrusted, { fetchStatus: _.ZP.NONE }),
            (0, s.Z)(r, g.xR.UntrustedLowQuality, { fetchStatus: _.ZP.NONE }),
            r),
          lastSeenEventIds: {},
        }
      function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case S.REQUEST:
            var n = t.meta.timelineType
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                cursors: (0, o.Z)(
                  (0, o.Z)({}, e.cursors),
                  {},
                  (0, s.Z)({}, n, (0, o.Z)((0, o.Z)({}, e.cursors[n]), {}, { fetchStatus: _.ZP.LOADING })),
                ),
              },
            )
          case S.FAILURE:
            var r = t.meta.timelineType
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                cursors: (0, o.Z)(
                  (0, o.Z)({}, e.cursors),
                  {},
                  (0, s.Z)(
                    {},
                    r,
                    (0, o.Z)((0, o.Z)({}, e.cursors[r]), {}, { error: t.payload, fetchStatus: _.ZP.FAILED }),
                  ),
                ),
              },
            )
          case S.SUCCESS:
            var a = t.meta.timelineType
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                cursors: (0, o.Z)(
                  (0, o.Z)({}, e.cursors),
                  {},
                  (0, s.Z)(
                    {},
                    a,
                    (0, o.Z)((0, o.Z)({}, e.cursors[a]), {}, { error: void 0, fetchStatus: _.ZP.LOADED }),
                  ),
                ),
              },
            )
          case re:
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                cursors: (0, o.Z)((0, o.Z)({}, e.cursors), t.payload.cursors),
                lastSeenEventIds: R(e.lastSeenEventIds, t.payload.lastSeenEventIds),
              },
            )
          case C.REQUEST:
            return (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              { lastSeenEventIds: (0, o.Z)((0, o.Z)({}, e.lastSeenEventIds), t.meta.lastSeenEventIds) },
            )
          case I.t:
            return (0, o.Z)(
              (0, o.Z)({}, w),
              {},
              { cursors: (0, o.Z)((0, o.Z)({}, w.cursors), {}, { inbox: e.cursors.inbox }) },
            )
          default:
            return e
        }
      }
      var R = function R(e, t) {
          return {
            last_seen_event_id: D(e.last_seen_event_id, t.last_seen_event_id),
            trusted_last_seen_event_id: D(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id),
            untrusted_last_seen_event_id: D(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id),
          }
        },
        D = function D(e, t) {
          return (0, u.KH)(e, t) ? e : t
        },
        b = function b(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'all',
            r = (0, v.DN)(t),
            a = (0, v.Rh)(t)
          return r ? (0, o.Z)((0, o.Z)({}, e), {}, { filter_low_quality: a, include_quality: n }) : e
        },
        x = function x(e) {
          return e[g.Yf].inbox
        },
        N = function N(e) {
          return x(e).cursors
        },
        O = function O(e) {
          return x(e).lastSeenEventIds
        },
        P = function P(e) {
          return N(e)[g.xR.Untrusted]
        },
        M = function M(e) {
          return N(e)[g.xR.UntrustedLowQuality]
        },
        U = function U(e) {
          return (function (e) {
            return N(e)[g.xR.Inbox]
          })(e).fetchStatus
        },
        L = function L(e) {
          return U(e) === _.ZP.LOADING
        },
        F = function F(e) {
          return U(e) === _.ZP.LOADED
        },
        k =
          ((a = {}),
          (0, s.Z)(a, g._2.PRIMARY, function (e) {
            return e.trusted
          }),
          (0, s.Z)(a, g._2.SECONDARY, function (e, t, n) {
            return t
              ? !(e.trusted || e.muted || (n && e.nsfw) || e.low_quality)
              : !(e.trusted || e.muted || (n && e.nsfw))
          }),
          (0, s.Z)(a, g._2.TERTIARY, function (e, t, n) {
            return t
              ? !e.trusted && (e.muted || e.low_quality || (n && e.nsfw))
              : !e.trusted && (e.muted || (n && e.nsfw))
          }),
          a),
        B = function B(e, t) {
          var n = (0, v.Rh)(e),
            r = (0, v.a5)(e)
          return (0, c.Z)((0, h.FS)(e)).filter(function (e) {
            return k[t](e.data, n, r)
          })
        },
        V = function V(e, t) {
          return B(e, t)
            .map(function (e) {
              return e.data
            })
            .sort(l.Z)
            .map(function (e) {
              return e.conversation_id
            })
        },
        H = function H(e) {
          return B(e, g._2.PRIMARY)
            .filter(function (e) {
              var t, n, r
              return (
                (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.labels) &&
                (null == e || null === (n = e.data) || void 0 === n || null === (r = n.labels) || void 0 === r
                  ? void 0
                  : r.find(function (e) {
                      return e.label_type === g.w1.PINNED
                    }))
              )
            })
            .sort(l.l)
            .map(function (e) {
              var t
              return null == e || null === (t = e.data) || void 0 === t ? void 0 : t.conversation_id
            })
        },
        q = function q(e) {
          var t = B(e, g._2.PRIMARY),
            n = B(e, g._2.SECONDARY),
            r = t.concat(n),
            a = O(e).last_seen_event_id
          return G(e, r, a)
        },
        j = function j(e) {
          var t = B(e, g._2.SECONDARY),
            n = O(e).untrusted_last_seen_event_id
          return G(e, t, n)
        },
        Y = function Y(e) {
          var t = 0,
            n = 0,
            r = 0,
            a = 0,
            i = B(e, g._2.SECONDARY),
            o = O(e).untrusted_last_seen_event_id
          return (
            i.forEach(function (i) {
              var s,
                d,
                c = null === (s = i.data) || void 0 === s ? void 0 : s.conversation_id,
                u = o && z(e, c, o),
                l = K(null == i || null === (d = i.data) || void 0 === d ? void 0 : d.social_proof)
              u ? (l ? (t += 1) : (r += 1)) : l ? (n += 1) : (a += 1)
            }),
            {
              newUntrustedWithSocialProof: t,
              oldUntrustedWithSocialProof: n,
              newUntrustedWithoutSocialProof: r,
              oldUntrustedWithoutSocialProof: a,
            }
          )
        },
        Q = function Q(e) {
          var t = B(e, g._2.SECONDARY),
            n = B(e, g._2.TERTIARY)
          return t.length + n.length
        },
        W = function W(e) {
          return B(e, g._2.TERTIARY).length
        },
        G = function G(e, t, n) {
          return n
            ? t.reduce(function (t, r) {
                var a = r.data.conversation_id
                return z(e, a, n) ? t + 1 : t
              }, 0)
            : 0
        },
        z = function z(e, t, n) {
          var r = (0, h.gq)(e, t),
            a = (0, h.jT)(e, t)
          return !!r && (0, u.T1)(r, n) && !a
        },
        K = function K(e) {
          if (!e || 0 === e.length) return !1
          var t = e[0]
          return t.proof_type === m.UN.MUTUAL_FRIENDS && 0 !== t.total
        },
        X = function X() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api,
              i = n(),
              s = (0, v.a5)(i),
              d = b((0, o.Z)({ nsfw_filtering_enabled: s }, e), n())
            return p._O(t, { params: d, request: a.DirectMessages.fetchUserInbox })(
              { actionTypes: S, context: 'FETCH_DM_INBOX', meta: { timelineType: g.xR.Inbox } },
              function (e) {
                if (e) {
                  var t = e.entities,
                    n = t.cards,
                    r = t.entries,
                    a = t.tweets,
                    i = t.users
                  return ie(
                    (0, o.Z)(
                      (0, o.Z)({}, e.result.inbox_initial_state),
                      {},
                      { entries: r, users: i, tweets: a, cards: n },
                    ),
                  )
                }
              },
            )
          }
        },
        $ = function $() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n) {
            var r = n(),
              a = U(r)
            return a !== _.ZP.LOADED && a !== _.ZP.LOADING ? t(X(e)) : Promise.resolve()
          }
        },
        J = function e(t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          return function (a, i, d) {
            var c = d.api,
              u = i(),
              l = (0, v.a5)(u),
              _ = N(u)[t],
              f = _.min_entry_id,
              h = _.status,
              Z = t === g.xR.UntrustedLowQuality ? g.xR.Untrusted : t,
              I = (0, o.Z)((0, o.Z)({}, n), {}, { max_id: f, timelineType: Z, nsfw_filtering_enabled: l })
            if (h !== m.To.HAS_MORE) return Promise.resolve()
            return p
              ._O(a, { params: I, request: c.DirectMessages.fetchInboxHistory })(
                { actionTypes: S, context: 'FETCH_DM_INBOX_HISTORY', meta: { timelineType: t } },
                function (e) {
                  if (e) {
                    var n = e.entities,
                      r = n.cards,
                      a = n.entries,
                      i = n.tweets,
                      o = n.users,
                      d = e.result.inbox_timeline
                    return ie({
                      conversations: d.conversations,
                      inbox_timelines: (0, s.Z)({}, t, d),
                      entries: a,
                      users: o,
                      tweets: i,
                      cards: r,
                    })
                  }
                },
              )
              .then(function (i) {
                var o = i.result.inbox_timeline
                if (r < 3 && !o.conversations && o.status === m.To.HAS_MORE) return a(e(t, n, r + 1))
              })
          }
        },
        ee = function ee(e) {
          return function (t, n) {
            var r = b(e, n(), 'high')
            return t(J(g.xR.Untrusted, r))
          }
        },
        te = function te(e) {
          return function (t, n) {
            var r = b(e, n(), 'low')
            return t(J(g.xR.UntrustedLowQuality, r))
          }
        },
        ne = function ne(e) {
          return function (t, n) {
            var r = b(e, n())
            return t(J(g.xR.Trusted, r))
          }
        },
        re = 'rweb/directMessages/UPDATE_INBOX',
        ae = function ae(e) {
          return { payload: { cursors: e.inbox_timelines, lastSeenEventIds: (0, i.Z)(e, E) }, type: re }
        },
        ie = function ie() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.cards,
            n = e.conversations,
            r = e.cursor,
            a = e.entries,
            o = e.tweets,
            s = e.users,
            c = (0, i.Z)(e, T),
            u = [
              (0, f.dP)({ cards: t, tweets: o, users: s }),
              !(0, d.Z)(n) && (0, h.tw)(n),
              !(0, d.Z)(a) && (0, Z.I7)(a),
              !(0, d.Z)(r) && (0, y.NJ)(r),
              !(0, d.Z)(c) && ae(c),
            ]
          return u.filter(function (e) {
            return e
          })
        },
        oe = function oe() {
          return function (e) {
            return e(de({ withTrusted: !0 }))
          }
        },
        se = function se() {
          return function (e) {
            return e(de({ withUntrusted: !0 }))
          }
        },
        de = function de() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.withTrusted,
            n = e.withUntrusted
          return function (e, r, a) {
            var i = a.api,
              s = r(),
              d = (0, h.FS)(s),
              c = O(s),
              l = c.last_seen_event_id,
              _ = c.trusted_last_seen_event_id,
              f = c.untrusted_last_seen_event_id,
              v = Object.values(d).reduce(function (e, t) {
                var n = t.data,
                  r = n.sort_event_id,
                  a = n.trusted
                return (
                  (e.last_seen_event_id = D(e.last_seen_event_id, r)),
                  (e.trusted_last_seen_event_id = a
                    ? D(e.trusted_last_seen_event_id, r)
                    : e.trusted_last_seen_event_id),
                  (e.untrusted_last_seen_event_id = a
                    ? e.untrusted_last_seen_event_id
                    : D(e.untrusted_last_seen_event_id, r)),
                  e
                )
              }, (0, o.Z)({}, c))
            return (0, u.T1)(v.last_seen_event_id, l) ||
              (t && (0, u.T1)(v.trusted_last_seen_event_id, _)) ||
              (n && (0, u.T1)(v.untrusted_last_seen_event_id, f))
              ? (t || delete v.trusted_last_seen_event_id,
                n || delete v.untrusted_last_seen_event_id,
                p.AB(e, { params: v, request: i.DirectMessages.updateLastSeenEventId })({
                  actionTypes: C,
                  context: 'APP_DM_UPDATE_LAST_SEEN',
                  meta: { lastSeenEventIds: v },
                }))
              : Promise.resolve()
          }
        },
        ce = function ce(e, t) {
          return function (n, r, a) {
            var i = a.api,
              o = r(),
              s = O(o),
              d = s.last_seen_event_id,
              c = s.trusted_last_seen_event_id,
              u = s.untrusted_last_seen_event_id,
              l = !1,
              _ = {}
            return (
              t === g._2.PRIMARY && e === D(c, e)
                ? ((l = !0), (_.trusted_last_seen_event_id = e), (_.last_seen_event_id = D(d, e)))
                : t === g._2.SECONDARY &&
                  e === D(u, e) &&
                  ((l = !0), (_.untrusted_last_seen_event_id = e), (_.last_seen_event_id = D(d, e))),
              l
                ? p.AB(n, { params: _, request: i.DirectMessages.updateLastSeenEventId })({
                    actionTypes: C,
                    context: 'APP_DM_UPDATE_LAST_SEEN',
                    meta: { lastSeenEventIds: _ },
                  })
                : Promise.resolve()
            )
          }
        }
    },
    129419: function _(e, t, n) {
      n.d(t, {
        m: function m() {
          return a
        },
        t: function t() {
          return r
        },
      })
      var r = 'rweb/directMessages/RESET',
        a = function a() {
          return { type: r }
        }
    },
    397654: function _(e, t, n) {
      n.d(t, {
        H_: function H_() {
          return h
        },
        NJ: function NJ() {
          return T
        },
        ZP: function ZP() {
          return I
        },
        f9: function f9() {
          return y
        },
        hd: function hd() {
          return g
        },
        o8: function o8() {
          return A
        },
      })
      var r = n(968079),
        a = n(459740),
        i = n(133028),
        o =
          (n(344112),
          n(358188),
          n(73439),
          n(416781),
          n(315735),
          n(906886),
          n(818178),
          n(567890),
          n(743108),
          n(443430),
          n(995342),
          n(753392)),
        s = n(924433),
        d = n(316025),
        c = n(222167),
        u = n(618397),
        l = n(455699),
        p = n(76431),
        _ = n(129419),
        f = n(734562),
        v = ['error'],
        m = ['polling'],
        h = o.dg(f.A7, 'FETCH_UPDATES'),
        Z = { isLoaded: !1, isLoading: !1 }
      function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case h.REQUEST:
            return (0, i.Z)((0, i.Z)({}, e), {}, { isLoading: !0 })
          case h.FAILURE:
            return (0, i.Z)((0, i.Z)({}, e), {}, { error: t.payload, isLoaded: !1, isLoading: !1 })
          case h.SUCCESS:
            e.error
            var n = (0, a.Z)(e, v)
            return (0, i.Z)((0, i.Z)({}, n), {}, { isLoaded: !0, isLoading: !1 })
          case E:
            return (0, i.Z)((0, i.Z)({}, e), {}, { cursor: t.payload })
          case S:
            return (0, i.Z)((0, i.Z)({}, e), {}, { tertiaryInboxStatus: t.payload })
          case _.t:
            return Z
          default:
            return e
        }
      }
      var y = function y(e) {
          return function (t, n, c) {
            var u = c.api,
              l = n(),
              f = l.directMessages,
              v = void 0 === f ? {} : f,
              Z = (v.updates || {}).cursor,
              I = e || {},
              y = I.polling,
              g = (0, a.Z)(I, m),
              E = (v.updates || {}).tertiaryInboxStatus,
              T = !1,
              S = y ? { 'x-twitter-polling': 'true' } : {},
              A = (0, s.a5)(l)
            if (window.location.pathname.startsWith('/i/report')) return Promise.resolve()
            var R = [(0, s.DN)(n()) ? 'on' : 'off', A ? 'on' : 'off'].join()
            E ? E !== R && ((Z = null), (T = !0)) : (T = !0)
            var D = (0, p.gN)((0, i.Z)((0, i.Z)({}, g), {}, { nsfw_filtering_enabled: A, cursor: Z }), n())
            return o._O(t, { params: D, headers: S, request: u.DirectMessages.fetchUserUpdates })(
              { actionTypes: h, context: 'FETCH_DM_USER_UPDATES', meta: { direction: (0, d.Sj)(e) } },
              function (e) {
                if (e) {
                  var t = e.entities,
                    n = t.cards,
                    a = t.entries,
                    o = t.tweets,
                    s = t.users,
                    d = e.result,
                    c = d.inbox_initial_state,
                    u = d.user_events
                  return [c && (0, _.m)()].concat(
                    (0, r.Z)(
                      (0, p.s0)((0, i.Z)((0, i.Z)({}, u || c), {}, { entries: a, users: s, tweets: o, cards: n })),
                    ),
                    (0, r.Z)(u ? w(Object.values(a || [])) : []),
                    [T && C(R)],
                  )
                }
              },
            )
          }
        },
        g = function g(e) {
          return function (t, n) {
            return R(n()) ? Promise.resolve() : t(y(e))
          }
        },
        E = 'rweb/directMessages/UPDATE_CURSOR',
        T = function T(e) {
          return { payload: e, type: E }
        },
        S = 'rweb/directMessages/UPDATE_TERTIARY_INBOX_STATUS',
        C = function C(e) {
          return { payload: e, type: S }
        },
        w = function w() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e
            .sort(function (e, t) {
              return e.id - t.id
            })
            .reduce(function (e, t) {
              switch (t.type) {
                case c.Cr.CONVERSATION_AVATAR_UPDATE:
                  return []
                    .concat((0, r.Z)(e), [
                      (0, u.nI)(t.conversation_id, t.conversation_avatar_image_https),
                      (0, u.Ek)(t.conversation_id, t.id),
                    ])
                    .filter(function (e) {
                      return e
                    })
                case c.Cr.CONVERSATION_NAME_UPDATE:
                  return []
                    .concat((0, r.Z)(e), [(0, u.Ke)(t), (0, u.Ek)(t.conversation_id, t.id)])
                    .filter(function (e) {
                      return e
                    })
                case c.Cr.CONVERSATION_READ:
                  return [].concat((0, r.Z)(e), [(0, u.v3)(t.conversation_id, t.last_read_event_id)])
                case c.Cr.DISABLE_NOTIFICATIONS:
                case c.Cr.ENABLE_NOTIFICATIONS:
                  var n = t.type === c.Cr.ENABLE_NOTIFICATIONS
                  return [].concat((0, r.Z)(e), [(0, u.$S)(t.conversation_id, n)])
                case c.Cr.MARK_ALL_AS_READ:
                  return [].concat((0, r.Z)(e), [(0, u.SF)(t.last_read_event_id)])
                case c.Cr.MESSAGE_DELETE:
                  return [].concat((0, r.Z)(e), [
                    (0, l.J_)(
                      t.conversation_id,
                      t.messages.reduce(function (e, t) {
                        return [].concat((0, r.Z)(e), (0, r.Z)(Object.values(t)))
                      }, []),
                    ),
                  ])
                case c.Cr.MESSAGE_MARK_AS_NOT_SPAM:
                case c.Cr.MESSAGE_MARK_AS_SPAM:
                  var a = t.type === c.Cr.MESSAGE_MARK_AS_SPAM
                  return [].concat((0, r.Z)(e), [
                    (0, l.pt)(
                      t.messages.reduce(function (e, t) {
                        return [].concat((0, r.Z)(e), (0, r.Z)(Object.values(t)))
                      }, []),
                      a,
                    ),
                  ])
                case c.Cr.REMOVE_CONVERSATION:
                  return [].concat((0, r.Z)(e), (0, r.Z)((0, u.Ae)(t.conversation_id)))
                case c.Cr.JOIN_CONVERSATION:
                case c.Cr.PARTICIPANTS_JOIN:
                case c.Cr.PARTICIPANTS_LEAVE:
                  return [].concat((0, r.Z)(e), [(0, u.Ek)(t.conversation_id, t.id)])
                case c.Cr.REACTION_CREATE:
                  return [].concat((0, r.Z)(e), [(0, l.Ob)(t), (0, l.rU)(t), (0, u.Ek)(t.conversation_id, t.id)])
                case c.Cr.REACTION_DELETE:
                  return [].concat((0, r.Z)(e), [(0, l.Ob)(t)])
                case c.Cr.MESSAGE:
                  return [].concat((0, r.Z)(e), [(0, u.Ek)(t.conversation_id, t.id)]).filter(function (e) {
                    return e
                  })
                default:
                  return e
              }
            }, [])
        },
        A = function A(e) {
          return e[f.Yf].updates
        },
        R = function R(e) {
          return A(e).isLoading
        }
    },
    734562: function _(e, t, n) {
      n.d(t, {
        A7: function A7() {
          return a
        },
        Yf: function Yf() {
          return r
        },
        _2: function _2() {
          return o
        },
        w1: function w1() {
          return i
        },
        xR: function xR() {
          return s
        },
      })
      n(22144)
      var r = 'directMessages',
        a = 'rweb/'.concat(r),
        i = Object.freeze({ PINNED: 'Pinned', REPLY_LATER: 'ReplyLater' }),
        o = Object.freeze({ PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' }),
        s = { Inbox: 'inbox', Trusted: 'trusted', Untrusted: 'untrusted', UntrustedLowQuality: 'untrusted_low_quality' }
    },
    454352: function _(e, t, n) {
      n.d(t, {
        Ah: function Ah() {
          return M
        },
        Bw: function Bw() {
          return R
        },
        De: function De() {
          return q
        },
        E4: function E4() {
          return w
        },
        G6: function G6() {
          return x
        },
        TU: function TU() {
          return H
        },
        Tu: function Tu() {
          return U
        },
        W8: function W8() {
          return O
        },
        aB: function aB() {
          return z
        },
        bG: function bG() {
          return E
        },
        m1: function m1() {
          return B
        },
        q9: function q9() {
          return P
        },
        qK: function qK() {
          return D
        },
        rA: function rA() {
          return F
        },
        vb: function vb() {
          return S
        },
      })
      var r = n(968079),
        a = n(196234),
        i = n(256666),
        o = n(133028),
        s =
          (n(372147),
          n(358188),
          n(888233),
          n(416781),
          n(136728),
          n(315735),
          n(73439),
          n(428673),
          n(906886),
          n(818178),
          n(567890),
          n(468811)),
        d = n.n(s),
        c = n(728213),
        u = n(53223),
        l = n(456992),
        p = n(178780),
        _ = n(526853),
        f = n(753392),
        v = n(455699),
        m = n(76431),
        h = n(397654),
        Z = n(918255),
        I = 'dmComposer',
        y = {}
      var g = function g(e) {
          var t = e.conversation_id,
            n = e.id,
            r = e.localMediaId,
            a = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            s = e.attachment,
            d = void 0 === s ? {} : s,
            c = e.error,
            u = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: a,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: d, localMediaId: r, sender_id: i, text: o, time: u },
            type: 'message',
            time: u,
          }
        },
        E = function E(e) {
          return function (t, n, i) {
            var s = i.api,
              _ = e || {},
              I = _.senderId,
              y = _.cardUrl,
              E = _.conversationId,
              T = _.localMediaId,
              S = _.recipients,
              C = void 0 === S ? [] : S,
              w = _.requestId,
              A = void 0 === w ? d().v1() : w,
              D = _.tweetAttachment,
              b = _.quickReply,
              x = _.text
            t(Y(E))
            var O = n(),
              P = T || N(n(), E)
            null === P && (P = [])
            var M = Z.m3(O, P),
              L = (0, a.Z)(M, 1)[0] || {},
              F = L.mediaFile,
              k = L.mediaMetadata,
              B = C.length > 0 && C.join(','),
              V = {}
            F && F.isGif
              ? (V.extraInitParams = '&media_category=dm_gif')
              : F && F.isVideo && (V.extraInitParams = '&media_category=dm_video')
            var H = Z.$i(P, V),
              j = [t(H)],
              Q = (U(O, E) || {}).found_media_origin
            return (
              F && F.isGif && j.push((0, c.R)(F)),
              Promise.all(j).then(
                function (n) {
                  var i = (0, a.Z)(n, 2),
                    d = (0, a.Z)(i[0], 1)[0],
                    c = i[1],
                    _ = (null == k ? void 0 : k.altText) || (null == k ? void 0 : k.defaultAltText) || '',
                    T = !!_
                  return (
                    d && (Q || T)
                      ? t(
                          Z.o6(
                            (0, o.Z)(
                              { media_id: d.uploadId, found_media_origin: Q },
                              !!T && { alt_text: { text: _ || '' } },
                            ),
                          ),
                        )
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (D || {}).id_str,
                        a = {}
                      if (d) {
                        var i = d.mediaFile,
                          _ = void 0 === i ? {} : i,
                          Z = {
                            original_info: { width: _.width, height: _.height },
                            sizes: [{ h: _.height, w: _.width, resize: 'fit' }],
                          }
                        _.isImage
                          ? (a.photo = (0, o.Z)((0, o.Z)({}, Z), {}, { media_url_https: _.url }))
                          : _.isGif
                          ? (a.animated_gif = (0, o.Z)(
                              (0, o.Z)({}, Z),
                              {},
                              { media_url_https: c, type: 'animated_gif' },
                            ))
                          : _.isVideo &&
                            (a.video = (0, o.Z)((0, o.Z)({}, Z), {}, { media_url_https: _.url, type: 'video' }))
                      } else D && (a.tweet = { status: n })
                      var T = (d || {}).uploadId,
                        S = g({
                          attachment: a,
                          conversation_id: E,
                          error: !1,
                          id: A,
                          localMediaId: null,
                          recipient_ids: B,
                          sender_id: I,
                          text: x,
                        }),
                        C = (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)({}, (0, p.s)(y) && { card_uri: y }),
                            {},
                            { conversation_id: E },
                            !n && { media_id: T },
                          ),
                          {},
                          { recipient_ids: B, request_id: A, text: e.text, tweet_id: n },
                        )
                      b &&
                        ((C['quick_reply_response[options][id]'] = b.id),
                        (C['quick_reply_response[options][selected_id]'] = b.selected_id))
                      var w = (0, u.Z)([
                        W(E),
                        { type: h.H_.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        E && (0, v.px)(E, A, S),
                      ])
                      return (
                        t(w),
                        s.DirectMessages.sendMessage(C).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              s = a.tweets,
                              d = a.users,
                              c = n.result.conversations
                            ;(0, l.Z)(P) && t(q(E, P))
                            var p = (0, u.Z)(
                              [{ type: h.H_.SUCCESS }].concat(
                                (0, r.Z)((0, m.s0)({ conversations: c, entries: o, users: d, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, E && (0, v.MY)(E, A, e), R(E)],
                              ),
                            )
                            return (
                              t(p),
                              Promise.resolve({ conversationId: Object.values(n.entities.entries)[0].conversation_id })
                            )
                          },
                          function (e) {
                            var n = g({
                                attachment: a,
                                conversation_id: E,
                                error: !0,
                                id: A,
                                localMediaId: P,
                                recipient_ids: B,
                                sender_id: I,
                                text: x,
                              }),
                              r = (0, u.Z)([
                                { type: h.H_.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                E && (0, v.px)(E, A, n),
                              ])
                            return t(r), (0, f.Vm)(t, e, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(z(E)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t((0, u.Z)([(0, l.Z)(P) && q(E, P), z(E)])), Promise.reject(e)
                },
              )
            )
          }
        },
        T = function T(e, t) {
          return e.dmComposer[t]
        },
        S = function S(e, t) {
          var n = T(e, t)
          return n ? n.text : null
        },
        C = 'rweb/dmComposer/SAVE_TEXT',
        w = function w(e, t) {
          return { type: C, conversationId: e, text: t }
        },
        A = 'rweb/dmComposer/REMOVE_TEXT',
        R = function R(e) {
          return { type: A, conversationId: e }
        },
        D = function D(e, t) {
          var n = T(e, t)
          return n ? n.cardUrl : null
        },
        b = 'rweb/dmComposer/SAVE_CARD_URL',
        x = function x(e, t) {
          return { type: b, conversationId: e, cardUrl: t }
        },
        N = function N(e, t) {
          var n = T(e, t)
          return n && void 0 !== n.mediaId ? n.mediaId : null
        },
        O = function O(e, t) {
          var n = Z.m3(e, N(e, t) || [])
          return n.length > 0 ? n[0] : null
        },
        P = function P(e, t) {
          var n = T(e, t)
          return !!n && n.isUploading
        },
        M = function M(e, t) {
          return Z._T(e, N(e, t) || 0)
        },
        U = function U(e, t) {
          var n = T(e, t)
          return n && n.gifMetadata ? n.gifMetadata : null
        },
        L = 'rweb/dmComposer/ADD_MEDIA',
        F = function F(e, t, n) {
          return {
            payload: { isUploading: !1, mediaId: (0, a.Z)(t, 1)[0], gifMetadata: n },
            type: L,
            conversationId: e,
          }
        },
        k = 'rweb/dmComposer/CANCEL_UPLOAD',
        B = function B(e) {
          return { type: k, conversationId: e }
        },
        V = 'rweb/dmComposer/REMOVE_MEDIA',
        H = function H(e) {
          return { type: V, conversationId: e }
        },
        q = function q(e, t) {
          return function (n) {
            n(Z.WU(t)), n([B(e), H(e)])
          }
        },
        j = 'rweb/dmComposer/UPLOAD_REQUEST',
        Y = function Y(e) {
          return { type: j, conversationId: e }
        },
        Q = 'rweb/dmComposer/UPLOAD_SUCCESS',
        W = function W(e) {
          return { type: Q, conversationId: e }
        },
        G = 'rweb/dmComposer/UPLOAD_FAILURE',
        z = function z(e) {
          return { type: G, conversationId: e }
        }
      _.Z.register(
        (0, i.Z)({}, I, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group',
            r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
          switch (t.type) {
            case L:
              return (0, o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, r), t.payload)))
            case j:
              return (0, o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, r), {}, { isUploading: !0 })))
            case k:
              return (0, o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, r), {}, { isUploading: !1 })))
            case G:
            case Q:
            case V:
              return (0,
              o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, r), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })))
            case C:
              return (0, o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, r), {}, { text: t.text })))
            case b:
              return (0,
              o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, r), {}, { cardUrl: t.cardUrl })))
            case A:
              return (0, o.Z)((0, o.Z)({}, e), {}, (0, i.Z)({}, n, (0, o.Z)((0, o.Z)({}, r), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    210891: function _(e, t, n) {
      n.r(t),
        n.d(t, {
          default: function _default() {
            return d
          },
        })
      var r = n(133028),
        a = n(202784),
        i = n(890601),
        o = n(473569),
        s = function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, i.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.Z.root, e.style],
                viewBox: '0 0 21 21',
                children: a.createElement(
                  'g',
                  null,
                  a.createElement('path', {
                    d: 'M9.094 3.095c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.97-.001-8.999-4.03-9-9z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 21, height: 21 }
      var d = s
    },
    728213: function _(e, t, n) {
      n.d(t, {
        R: function R() {
          return c
        },
      })
      n(358188), n(73439)
      var r = n(824943),
        a = n(253783),
        i = n(99496),
        o = 1,
        s = 2,
        d = 3,
        c = function c(e) {
          if ((0, i.DS)(e)) {
            if (e.isGif) {
              var t = e.height,
                n = e.img,
                c = e.orientation,
                u = e.width
              return (0, r.$i)(n, u, t, c).then(
                function (e) {
                  return (0, r.q8)(e)
                },
                function (e) {
                  throw new a.Z('Gif preview could not be generated', d)
                },
              )
            }
            var l = new a.Z('The provided image must be a gif', s)
            return Promise.reject(l)
          }
          var p = new a.Z('The provided file is not a valid image', o)
          return Promise.reject(p)
        }
    },
  },
])

//# sourceMappingURL=WIPED
