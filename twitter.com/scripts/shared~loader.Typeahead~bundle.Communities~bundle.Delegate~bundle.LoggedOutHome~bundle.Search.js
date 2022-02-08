;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '4e/K': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TypeaheadInput', function () {
          return H
        }),
        n.d(t, 'styles', function () {
          return V
        })
      var o = n('VrFO'),
        r = n.n(o),
        a = n('Y9Ll'),
        s = n.n(a),
        i = n('1Pcy'),
        c = n.n(i),
        u = n('5Yy7'),
        d = n.n(u),
        l = n('2VqO'),
        p = n.n(l),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('uFXj'), n('LW0h'), n('7x/C'), n('3EFP')),
        y = n('ERkP'),
        _ = n.n(y),
        v = n('ZUOq'),
        w = n('+Kfv'),
        I = n('woHV'),
        b = n('3XMw'),
        D = n.n(b),
        g = n('VwDm'),
        C = n('WPfJ'),
        E = n('N5qz'),
        R = n('Es6L'),
        T = n('OEYw'),
        x = n('GZwR'),
        O = n('MWbm'),
        S = n('v6aA'),
        j = n('rHpw'),
        N = n('xoZN'),
        k = n('6OUF'),
        F = n('pf9B'),
        P = n('cHvH'),
        U = n('oEoC'),
        L = D.a.f065ba8c,
        q = { viewType: 'typeahead_input' },
        A = function (e) {
          return E.a.isTwoColumnNormalLayout(e)
            ? {
                width: v.a.columnWidths.secondary.normal + j.a.theme.spacesPx.space24,
                left: -j.a.theme.spacesPx.space24 / 2,
              }
            : E.a.isTwoColumnSmallLayout(e)
            ? {
                width: v.a.columnWidths.secondary.small + j.a.theme.spacesPx.space16,
                left: -j.a.theme.spacesPx.space16 / 2,
              }
            : void 0
        },
        M = 1,
        H = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, o) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e, o)),
              f()(c()(a), '_withNewTypeaheadUI', !1),
              f()(c()(a), '_render', function (e) {
                var t = e.windowWidth,
                  n = a.props,
                  o = n.alwaysOpen,
                  r = n.disableClearButton,
                  s = n.forceVdlDisable,
                  i = n.inputStyle,
                  c = n.isCompact,
                  u = n.isOnHomepage,
                  d = n.placeholder,
                  l = n.renderInSearchField,
                  p = n.rounded,
                  h = n.shouldAutoFocus,
                  f = n.shouldFocusOnClear,
                  m = n.style,
                  y = n.testID,
                  v = a.state.showTypeaheadDropdown || o
                return _.a.createElement(
                  w.a,
                  { behavioralEventContext: q },
                  _.a.createElement(
                    O.a,
                    { onLayout: a._handleLayout, ref: a._setRootContainerNode, style: [V.root, m] },
                    _.a.createElement(
                      N.a,
                      { onKeyDown: a._handleKeyDown, style: V.keydownInputListener },
                      _.a.createElement(
                        I.a,
                        {
                          accessibilityLabel: d,
                          accessibilityRole: 'search',
                          onSubmit: a._handleFormSubmit,
                          style: V.wrapper,
                        },
                        _.a.createElement(
                          O.a,
                          { ref: a._setInputContainerNode, style: i },
                          _.a.createElement(k.a, {
                            Icon: g.a,
                            ariaActiveDescendant: a.state.ariaDescendantId,
                            ariaAutocomplete: 'list',
                            ariaExpanded: v,
                            ariaLabel: L,
                            ariaOwns: a._dropdownDomId,
                            ariaRole: 'combobox',
                            autoComplete: 'off',
                            autoCorrect: !1,
                            autoFocus: h,
                            contentBelow: l && l(),
                            focusOnClear: f,
                            isCompact: c,
                            leftAligned: u,
                            onChange: a._handleInputChange,
                            onClear: a._handleInputClear,
                            onFocus: a._handleInputFocus,
                            onLayout: a._handleInputLayoutChanged,
                            placeholder: d,
                            ref: a._setInputRef,
                            returnKeyType: 'search',
                            spellCheck: 'false',
                            styleType: s ? 'legacyPill' : p ? 'pill' : 'selection',
                            testID: y,
                            value: a.state.query,
                            withClearButton: !r && a.state.showTypeaheadDropdown,
                          }),
                        ),
                        _.a.createElement(
                          O.a,
                          { style: [V.typeaheadContainer, !p && V.topBorder] },
                          v ? a._renderDropdown(t) : null,
                        ),
                      ),
                    ),
                  ),
                )
              }),
              f()(c()(a), '_renderDropdown', function (e) {
                var t = a.props,
                  n = t.communityId,
                  o = t.filter,
                  r = t.getItemDisabledMessage,
                  s = t.getItemIsDisabled,
                  i = t.getTopicExactMatch,
                  c = t.getUserExactMatch,
                  u = t.injectedItems,
                  d = t.isInSidebar,
                  l = t.isModal,
                  p = t.isOnHomepage,
                  h = t.maxEvents,
                  f = t.maxTopics,
                  m = t.onItemsChanged,
                  y = t.orderResults,
                  v = t.renderCallout,
                  w = t.renderEmptyState,
                  I = t.renderHeader,
                  b = t.renderNoResultsState,
                  D = t.renderUserDecoration,
                  g = t.selectedItems,
                  C = t.shouldDeferPrefetch,
                  E = t.source,
                  x = t.withFixedPositioning,
                  O = t.withSectionDivider,
                  S = e >= j.a.theme.breakpoints.medium || Object(R.a)(),
                  N = a.state,
                  k = N.dropdownOffset,
                  F = N.query,
                  P = l
                    ? V.modalDropdown
                    : [
                        V.dropdown,
                        !S && x && k ? [Object(U.d)(k), { height: 'calc(100vh - '.concat(k, 'px)') }] : null,
                        (S || p) && V.wideModeDropdown,
                        a._withNewTypeaheadUI && d && A(e),
                        p && V.shortModeDropdown,
                        !S && p && V.shortModeDropdownMobile,
                      ],
                  L = {
                    ariaDescendantId: a.state.ariaDescendantId,
                    domId: a._dropdownDomId,
                    onDismiss: a._handleOnEmptyStateDismiss,
                    onItemFocusChanged: a._handleItemFocusChanged,
                    ref: a._handleDropdownRef,
                    style: P,
                  }
                return w && !F
                  ? w(L)
                  : _.a.createElement(T.a, {
                      ariaDescendantId: a.state.ariaDescendantId,
                      communityId: n,
                      domId: a._dropdownDomId,
                      filter: o,
                      getItemDisabledMessage: r,
                      getItemIsDisabled: s,
                      getTopicExactMatch: i,
                      getUserExactMatch: c,
                      injectedItems: u,
                      maxEvents: h,
                      maxTopics: f,
                      onItemClick: a._handleItemClick,
                      onItemFocusChanged: a._handleItemFocusChanged,
                      onItemsChanged: m,
                      orderResults: y,
                      query: F,
                      ref: a._handleDropdownRef,
                      renderCallout: v,
                      renderHeader: I,
                      renderNoResultsState: b,
                      renderUserDecoration: D,
                      selectedItems: g,
                      shouldDeferPrefetch: C,
                      source: E,
                      style: P,
                      withSectionDivider: O,
                    })
              }),
              f()(c()(a), '_dismissDropdown', function () {
                a.setState({ showTypeaheadDropdown: !1 }), a.props.onDismiss && a.props.onDismiss()
              }),
              f()(c()(a), '_handleOnEmptyStateDismiss', function () {
                a._dismissDropdown(), a._inputRef && a._inputRef.blur()
              }),
              f()(c()(a), '_handleLayout', function () {
                a._updatePosition()
              }),
              f()(c()(a), '_handleInputLayoutChanged', function () {
                a._updatePosition()
              }),
              f()(c()(a), '_updatePosition', function () {
                if (a._inputContainerNode) {
                  var e = a._inputContainerNode.getBoundingClientRect().bottom
                  e !== a.state.dropdownOffset && a.setState({ dropdownOffset: e })
                }
              }),
              f()(c()(a), '_handleDropdownRef', function (e) {
                a._dropdownRef = e
              }),
              f()(c()(a), '_setRootContainerNode', function (e) {
                a._rootContainerNode = e || null
              }),
              f()(c()(a), '_setInputRef', function (e) {
                a._inputRef = e
              }),
              f()(c()(a), '_setInputContainerNode', function (e) {
                ;(a._inputContainerNode = e || null), a._inputContainerNode && a._updatePosition()
              }),
              f()(c()(a), '_handleFocusChange', function (e) {
                var t = F.a.getCount() > 0
                ;(a._rootContainerNode && a._rootContainerNode.contains(e.target)) ||
                  t ||
                  (a.state.showTypeaheadDropdown && a._dismissDropdown())
              }),
              f()(c()(a), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = a.state.showTypeaheadDropdown
                if (Object(U.g)(e)) {
                  if (t === m.a) return a._focusNext(), void e.preventDefault()
                  if (t === m.b) return a._focusPrevious(), void e.preventDefault()
                  if (t === m.d) return a._dismissDropdown(), void e.preventDefault()
                  if (t !== m.f)
                    return t === m.c && a._hasFocusedItem()
                      ? (a._selectFocusedItem(), void e.preventDefault())
                      : void (n || a.setState({ showTypeaheadDropdown: !0 }))
                  a._dismissDropdown()
                }
              }),
              f()(c()(a), '_handleItemFocusChanged', function () {
                a.setState({ ariaDescendantId: Object(U.b)() })
              }),
              f()(c()(a), '_handleInputClear', function () {
                a.setQuery('')
              }),
              f()(c()(a), '_handleInputFocus', function () {
                a.setState({ showTypeaheadDropdown: !0 }), a._updatePosition(), a.props.onFocus && a.props.onFocus()
              }),
              f()(c()(a), '_handleInputChange', function (e) {
                a.setQuery(e.target.value), a._updatePosition()
              }),
              f()(c()(a), '_handleFormSubmit', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  a._inputRef && a._inputRef.blur(),
                  a.setState({ showTypeaheadDropdown: !1 }),
                  a.props.onDismiss && a.props.onDismiss(),
                  a.props.onSubmit && a.props.onSubmit()
              }),
              f()(c()(a), '_handleItemClick', function (e, t) {
                var n = a.props,
                  o = n.onDismiss,
                  r = n.onItemClick,
                  s = n.shouldClearOnSelect,
                  i = n.shouldFocusOnClear,
                  c = s ? '' : a.state.query
                a.setState({ showTypeaheadDropdown: !1 }),
                  a._inputRef && (s && i ? a._inputRef.focus() : a._inputRef.blur()),
                  a.setQuery(c),
                  o && o(),
                  r && r(e, t)
              }),
              f()(c()(a), '_hasFocusedItem', function () {
                return a._dropdownRef && a._dropdownRef.hasFocusedItem()
              }),
              f()(c()(a), '_selectFocusedItem', function () {
                a._dropdownRef && a._dropdownRef.selectFocusedItem()
              }),
              f()(c()(a), '_focusNext', function () {
                a._dropdownRef && a._dropdownRef.focusNext()
              }),
              f()(c()(a), '_focusPrevious', function () {
                a._dropdownRef && a._dropdownRef.focusPrevious()
              }),
              (a.state = { ariaDescendantId: Object(U.b)(), query: e.initialValue, showTypeaheadDropdown: !1 }),
              (a._dropdownDomId = 'typeaheadDropdown-'.concat(M)),
              (M += 1),
              (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.initialValue !== e.initialValue && this.setQuery(e.initialValue)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  window.document.addEventListener('click', this._handleFocusChange, !0)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.document.removeEventListener('click', this._handleFocusChange, !0)
                },
              },
              {
                key: 'render',
                value: function () {
                  return _.a.createElement(P.a, null, this._render)
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._inputRef && this._inputRef.focus()
                },
              },
              {
                key: 'setQuery',
                value: function (e) {
                  this.setState({ query: e }), this.props.onQueryChange && this.props.onQueryChange(e)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()(H, 'defaultProps', {
        disableClearButton: !1,
        filter: [x.a.Users, x.a.Topics],
        isInSidebar: !1,
        initialValue: '',
        withSectionDivider: !0,
      }),
        f()(H, 'contextType', S.a)
      var V = j.a.create(function (e) {
        return {
          root: { flex: 1, flexDirection: 'column', position: 'relative', zIndex: C.d + 1 },
          typeaheadContainer: { flex: 1, position: 'relative' },
          keydownInputListener: { flexShrink: 1 },
          dropdown: {
            backgroundColor: e.colors.cellBackground,
            left: 0,
            right: 0,
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
      t.default = H
    },
    OEYw: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        a = n('m3Bd'),
        s = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        u = n('Y9Ll'),
        d = n.n(u),
        l = n('1Pcy'),
        p = n.n(l),
        h = n('5Yy7'),
        f = n.n(h),
        m = n('2VqO'),
        y = n.n(m),
        _ = n('KEM+'),
        v = n.n(_),
        w = (n('7xRU'), n('LW0h'), n('7x/C'), n('z84I'), n('ERkP')),
        I = n.n(w),
        b = n('RhWx'),
        D = n.n(b),
        g = (n('vrRf'), n('M+/F'), n('tQbP'), n('2G9S'), n('hqKg')),
        C = n('oEoC'),
        E = n('o52z'),
        R = n('kGix'),
        T = n('M0jS'),
        x = n('Qyxo'),
        O = n('lnti'),
        S = n('rxPX'),
        j = n('0KEI'),
        N =
          (n('yH/f'),
          n('Ee2X'),
          n('KqXw'),
          n('MvUL'),
          n('WNMA'),
          n('JtPf'),
          n('tVqn'),
          n('Ysgh'),
          n('jQ3i'),
          n('x4t0'),
          n('/kEJ')),
        k = n('oEOe'),
        F = n('vy4g'),
        P = n('3A2y'),
        U = n('Y6L+'),
        L = n('9EWH'),
        q = n('Ssj5'),
        A = n('GZwR'),
        M = ['rounded_score', 'tokens'],
        H = ['rounded_score', 'tokens'],
        V = 'typeaheadV2',
        W = [],
        B = Object.freeze({
          REQUEST: 'rweb/typeaheadV2/FETCH_REQUEST',
          SUCCESS: 'rweb/typeaheadV2/FETCH_SUCCESS',
          FAILURE: 'rweb/typeaheadV2/FETCH_FAILURE',
        }),
        Q = function (e, t) {
          var n = e.q,
            o = e.result_type,
            r = e.src,
            a = o
          return (
            null != t && t.communityId && (a = ''.concat(o, '_').concat(t.communityId)),
            ''.concat(n, '_').concat(a, '_').concat(r)
          )
        },
        Y = { remoteResults: {}, cachedIds: [] }
      var K = function (e) {
          return e.map(function (e) {
            var t = e.rounded_score,
              n = e.tokens,
              o = s()(e, M),
              r = o.topic,
              a = A.b.Topic
            return { id: ''.concat(a, '_').concat(r.replace(' ', '_')), type: a, tokens: n, rounded_score: t, data: o }
          })
        },
        z = function (e) {
          return e.map(function (e) {
            var t,
              n = e.rounded_score,
              o = e.tokens,
              r = s()(e, H),
              a = A.b.Event,
              i = null == r || null === (t = r.url) || void 0 === t ? void 0 : t.match(U.A.id)
            return { id: (null == i ? void 0 : i[0]) || '', type: a, tokens: o, rounded_score: n, data: r }
          })
        },
        J = function (e, t) {
          return e.typeaheadV2.remoteResults[t]
        },
        X = function (e, t) {
          return function (n, o) {
            var r = J(o(), Q(e, t)),
              a = r && r.timestamp
            return a && Date.now() - a <= 3e5 ? Promise.resolve() : n(G(e, t))
          }
        },
        G = function (e, t) {
          return function (n, o, r) {
            var a = r.api
            if (!e || !e.q || '' === e.q.trim()) return Promise.resolve()
            var s = { queryId: Q(e, t) },
              i = (t || {}).communityId,
              c = e.result_type.split(','),
              u = { actionTypes: B, context: 'FETCH_TYPEAHEAD', meta: s }
            if (c.includes(A.a.CommunityUsers) && i) {
              return Object(k.b)(n, {
                params: { communityId: i, prefix: e.q },
                request: a.Typeahead.fetchCommunityInviteUsers,
              })(u, function (e) {
                var t = ((null == e ? void 0 : e.invite_action_results) || {}).entities
                return t ? [Object(N.c)(t)] : void 0
              })
            }
            return Object(k.b)(n, { params: e, request: a.Typeahead.fetch })(u)
          }
        }
      q.a.register(
        v()({}, V, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case B.REQUEST:
              var n = t.meta.queryId
              return Object(L.a)(e, function (e) {
                e.remoteResults[n] || (e.remoteResults[n] = { fetchStatus: R.a.NONE }),
                  (e.remoteResults[n].fetchStatus = R.a.LOADING)
              })
            case B.SUCCESS:
              var o = t.meta.queryId,
                r = t.payload
              if (!r) return e
              var a = r.users.map(function (e) {
                  return Object(F.a)(e, A.c.Remote)
                }),
                s = {
                  fetchStatus: R.a.LOADED,
                  id: o,
                  orderedSections: r.ordered_sections,
                  events: z(r.events),
                  topics: K(r.topics),
                  users: Object(A.i)(a),
                  timestamp: Date.now(),
                }
              return Object(L.a)(e, function (e) {
                ;(e.cachedIds = e.cachedIds.filter(function (e) {
                  return e !== o
                })),
                  e.cachedIds.push(o),
                  e.cachedIds.length >= 25 &&
                    (e.remoteResults = Object(P.a)(e.remoteResults, e.cachedIds.splice(0, 1))),
                  (e.remoteResults[o] = s)
              })
            case B.FAILURE:
              var i = t.meta.queryId
              return Object(L.a)(e, function (e) {
                e.remoteResults[i].fetchStatus = R.a.FAILED
              })
            default:
              return e
          }
        }),
      )
      var Z = n('UQTn'),
        $ = [A.a.Users],
        ee = function (e) {
          var t = e.communityId,
            n = e.filter,
            o = e.query,
            r = e.source
          return Q({ q: o, result_type: (n || $).join(','), src: r }, { communityId: t })
        },
        te = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return n && n.fetchStatus
          })(e, ee(t))
        },
        ne = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return (n && n.users) || W
          })(e, ee(t))
        },
        oe = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return (n && n.topics) || W
          })(e, ee(t))
        },
        re = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return (n && n.events) || W
          })(e, ee(t))
        },
        ae = function (e, t) {
          return (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0)
        },
        se = function () {
          return Object(g.createSelector)(
            ne,
            Object(g.createSelector)(
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.filter
              },
              Z.d,
              Z.e,
              function (e, t, n, o) {
                if (!e || !t || t.indexOf(A.a.Users) < 0) return Object(E.a)()
                var r = Object(Z.f)(n, e)
                return Object(A.i)(
                  r
                    .map(function (e) {
                      return o[e]
                    })
                    .sort(ae)
                    .slice(0, 10),
                )
              },
            ),
            te,
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
            function (e, t, n, o, r, a, s) {
              var i = Object(x.a)(o || [], function (e) {
                  return e.type === A.b.User ? e.data.id_str : void 0
                }),
                c = t.filter(function (e) {
                  return i.indexOf(e.id) < 0
                }),
                u = e.filter(function (e) {
                  return i.indexOf(e.id) < 0
                }),
                d = Object(C.a)(c, u).slice(0, s || 10),
                l = n === R.a.LOADED,
                p = a && a({ query: r, hasResults: !!e.length, isLoaded: l }),
                h = p ? [].concat(D()(d), [p]) : d
              return h.length ? h : Object(E.a)()
            },
          )
        },
        ie = function () {
          return Object(g.createSelector)(
            se(),
            Object(g.createSelector)(
              oe,
              te,
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.maxTopics
              },
              function (e, t) {
                return t.getTopicExactMatch
              },
              function (e, t, n, o, r) {
                var a = t === R.a.LOADED,
                  s = r && r({ query: n, hasResults: !!e.length, isLoaded: a }),
                  i = e.slice(0, o || 3)
                return s && i.push(s), i.length ? i : Object(E.a)()
              },
            ),
            Object(g.createSelector)(
              re,
              te,
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.maxEvents
              },
              function (e, t) {
                return t.filter
              },
              function (e, t, n, o, r) {
                var a = n && r && r.indexOf(A.a.Events) >= 0,
                  s = e.slice(0, o || 1)
                return s.length && a ? s : Object(E.a)()
              },
            ),
            function (e, t) {
              return t.injectedItems
            },
            function (e, t) {
              return t.orderResults
            },
            function (e, t, n, o, r) {
              var a = o && o.length ? o : null,
                s = r
                  ? r(a, e, t, n)
                  : Object(O.a)([a, n.length ? n : void 0, t.length ? t : void 0, e.length ? e : void 0])
              return t.length || e.length || n.length ? s : a ? [a] : Object(E.a)()
            },
          )
        },
        ce = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: te, items: ie() }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT',
              ),
              fetchTypeaheadIfNeeded: X,
              fetchUsersPresenceIfNeeded: T.b.fetchManyIfNeeded,
              prefetchTypeaheadUsersIfNeeded: Z.b,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        ue = n('8UdT'),
        de = n('kIAd'),
        le = n('Rp9C'),
        pe = n('tAeL'),
        he = n('v6aA'),
        fe = n('VY6S'),
        me = n('w6IS'),
        ye = [
          'analytics',
          'communityId',
          'contextText',
          'createLocalApiErrorHandler',
          'dropdownRef',
          'fetchStatus',
          'fetchTypeaheadIfNeeded',
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
          'userLimit',
        ],
        _e = (function (e) {
          f()(n, e)
          var t = y()(n)
          function n(e, o) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, o)),
              v()(p()(r), '_fetchTypeaheadResultsIfNeeded', function (e) {
                e.query &&
                  e
                    .fetchTypeaheadIfNeeded(
                      {
                        q: e.query,
                        src: e.source,
                        result_type: e.filter.join(','),
                        context_text: e.contextText,
                        topic_type: e.topicType,
                      },
                      { communityId: e.communityId },
                    )
                    .catch(e.createLocalApiErrorHandler({}))
              }),
              v()(p()(r), '_handleItemClick', function (e, t) {
                var n = r.props,
                  o = n.analytics,
                  a = n.onItemClick,
                  s = n.query
                a(e, t)
                var i = le.a.forTypeaheadResult(e, t),
                  c = i ? [i] : void 0
                o.scribe({ action: 'click', data: { search_details: { query: s }, targets: c } })
              }),
              v()(p()(r), '_scribeResults', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.items,
                  o = e.query
                t.scribe({
                  action: 'impression',
                  data: { items: le.a.forTypeaheadResults(n), search_details: { query: o } },
                })
              }),
              (r._debouncedFetchTypeaheadResultsIfNeeded = Object(fe.a)(r._fetchTypeaheadResultsIfNeeded, 250)),
              (r.state = { shouldShowPrefetchResults: !0 }),
              r
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.prefetchTypeaheadUsersIfNeeded
                  this._debouncedFetchTypeaheadResultsIfNeeded(this.props), n().catch(t({}))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._prefetchResultsTimer)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this,
                    n = this.props,
                    o = n.createLocalApiErrorHandler,
                    r = n.fetchUsersPresenceIfNeeded,
                    a = n.filter,
                    s = n.items,
                    i = n.onItemsChanged,
                    c = n.query,
                    u = n.shouldDeferPrefetch,
                    d = n.source,
                    l = e.filter,
                    p = e.query,
                    h = e.source,
                    f = this.context.loggedInUserId,
                    m = this.context.featureSwitches.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') && f
                  if (null != s && s.length && s !== e.items && (this._scribeResults(), i && i(s), m)) {
                    var y = Object(me.a)(s)
                      .filter(function (e) {
                        return e.type === ue.b.User
                      })
                      .map(function (e) {
                        return e.id
                      })
                    y && r(y).catch(o({}))
                  }
                  ;(c === p && a === l && d === h) ||
                    (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                    u &&
                      (clearTimeout(this._prefetchResultsTimer),
                      this.setState({ shouldShowPrefetchResults: !1 }),
                      (this._prefetchResultsTimer = setTimeout(function () {
                        t.props.query &&
                          t.props.fetchStatus !== R.a.LOADED &&
                          t.setState({ shouldShowPrefetchResults: !0 })
                      }, de.a))))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.analytics, e.communityId, e.contextText, e.createLocalApiErrorHandler, e.dropdownRef),
                    n = e.fetchStatus,
                    o =
                      (e.fetchTypeaheadIfNeeded,
                      e.fetchUsersPresenceIfNeeded,
                      e.filter,
                      e.getTopicExactMatch,
                      e.getUserExactMatch,
                      e.injectedItems),
                    a = e.items,
                    i =
                      (e.maxEvents,
                      e.maxTopics,
                      e.onItemClick,
                      e.onItemsChanged,
                      e.orderResults,
                      e.prefetchTypeaheadUsersIfNeeded,
                      e.query),
                    c = (e.shouldDeferPrefetch, e.topicType, e.userLimit, s()(e, ye)),
                    u = i && n !== R.a.LOADED,
                    d = u && !this.state.shouldShowPrefetchResults ? o : a
                  return I.a.createElement(
                    pe.a,
                    r()({}, c, { isLoading: !!u, items: d, onItemClick: this._handleItemClick, query: i, ref: t }),
                  )
                },
              },
            ]),
            n
          )
        })(I.a.Component)
      v()(_e, 'contextType', he.a),
        v()(_e, 'defaultProps', { filter: [A.a.Users], injectedItems: [], maxEvents: 3, maxTopics: 1 })
      var ve = I.a.forwardRef(function (e, t) {
          return I.a.createElement(_e, r()({}, e, { dropdownRef: t }))
        }),
        we = ce.forwardRef(ve)
      t.a = we
    },
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var o = n('VPAj'),
        r = Object(o.a)([])
      Object(o.a)({})
    },
  },
])
//# sourceMappingURL=WIPED
