;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '3EFP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'd', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return s
        }),
        n.d(t, 'f', function () {
          return c
        })
      var a = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        i = 'Escape',
        s = 'ESC',
        c = 'Tab'
    },
    '4e/K': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TypeaheadInput', function () {
          return H
        }),
        n.d(t, 'styles', function () {
          return V
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('uFXj'), n('LW0h'), n('7x/C'), n('3EFP')),
        y = n('ERkP'),
        v = n.n(y),
        _ = n('ZUOq'),
        g = n('+Kfv'),
        b = n('woHV'),
        w = n('3XMw'),
        I = n.n(w),
        x = n('VwDm'),
        C = n('WPfJ'),
        E = n('N5qz'),
        D = n('Es6L'),
        S = n('OEYw'),
        T = n('GZwR'),
        R = n('MWbm'),
        k = n('v6aA'),
        O = n('rHpw'),
        F = n('xoZN'),
        L = n('6OUF'),
        U = n('pf9B'),
        N = n('cHvH'),
        P = n('oEoC'),
        j = I.a.f065ba8c,
        M = { viewType: 'typeahead_input' },
        A = function (e) {
          return E.a.isTwoColumnNormalLayout(e)
            ? {
                width: _.a.columnWidths.secondary.normal + O.a.theme.spacesPx.space24,
                left: -O.a.theme.spacesPx.space24 / 2,
              }
            : E.a.isTwoColumnSmallLayout(e)
            ? {
                width: _.a.columnWidths.secondary.small + O.a.theme.spacesPx.space16,
                left: -O.a.theme.spacesPx.space16 / 2,
              }
            : void 0
        },
        q = 1,
        H = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              f()(c()(o), '_withNewTypeaheadUI', !1),
              f()(c()(o), '_render', function (e) {
                var t = e.windowWidth,
                  n = o.props,
                  a = n.alwaysOpen,
                  r = n.disableClearButton,
                  i = n.forceVdlDisable,
                  s = n.inputStyle,
                  c = n.isCompact,
                  l = n.isOnHomepage,
                  u = n.placeholder,
                  d = n.renderInSearchField,
                  p = n.rounded,
                  h = n.shouldAutoFocus,
                  f = n.shouldFocusOnClear,
                  m = n.style,
                  y = n.testID,
                  _ = o.state.showTypeaheadDropdown || a
                return v.a.createElement(
                  g.a,
                  { behavioralEventContext: M },
                  v.a.createElement(
                    R.a,
                    { onLayout: o._handleLayout, ref: o._setRootContainerNode, style: [V.root, m] },
                    v.a.createElement(
                      F.a,
                      { onKeyDown: o._handleKeyDown, style: V.keydownInputListener },
                      v.a.createElement(
                        b.a,
                        {
                          accessibilityLabel: u,
                          accessibilityRole: 'search',
                          onSubmit: o._handleFormSubmit,
                          style: V.wrapper,
                        },
                        v.a.createElement(
                          R.a,
                          { ref: o._setInputContainerNode, style: s },
                          v.a.createElement(L.a, {
                            Icon: x.a,
                            ariaActiveDescendant: o.state.ariaDescendantId,
                            ariaAutocomplete: 'list',
                            ariaExpanded: _,
                            ariaLabel: j,
                            ariaOwns: o._dropdownDomId,
                            ariaRole: 'combobox',
                            autoComplete: 'off',
                            autoCorrect: !1,
                            autoFocus: h,
                            contentBelow: d && d(),
                            focusOnClear: f,
                            isCompact: c,
                            leftAligned: l,
                            onChange: o._handleInputChange,
                            onClear: o._handleInputClear,
                            onFocus: o._handleInputFocus,
                            onLayout: o._handleInputLayoutChanged,
                            placeholder: u,
                            ref: o._setInputRef,
                            returnKeyType: 'search',
                            spellCheck: 'false',
                            styleType: i ? 'legacyPill' : p ? 'pill' : 'selection',
                            testID: y,
                            value: o.state.query,
                            withClearButton: !r && o.state.showTypeaheadDropdown,
                          }),
                        ),
                        v.a.createElement(
                          R.a,
                          { style: [V.typeaheadContainer, !p && V.topBorder] },
                          _ ? o._renderDropdown(t) : null,
                        ),
                      ),
                    ),
                  ),
                )
              }),
              f()(c()(o), '_renderDropdown', function (e) {
                var t = o.props,
                  n = t.communityId,
                  a = t.filter,
                  r = t.getItemDisabledMessage,
                  i = t.getItemIsDisabled,
                  s = t.getTopicExactMatch,
                  c = t.getUserDisplayNameLabel,
                  l = t.getUserExactMatch,
                  u = t.injectedItems,
                  d = t.isInSidebar,
                  p = t.isModal,
                  h = t.isOnHomepage,
                  f = t.maxEvents,
                  m = t.maxTopics,
                  y = t.onItemsChanged,
                  _ = t.orderResults,
                  g = t.renderCallout,
                  b = t.renderEmptyState,
                  w = t.renderHeader,
                  I = t.renderNoResultsState,
                  x = t.renderUserDecoration,
                  C = t.selectedItems,
                  E = t.shouldDeferPrefetch,
                  T = t.source,
                  R = t.withFixedPositioning,
                  k = t.withSectionDivider,
                  F = e >= O.a.theme.breakpoints.medium || Object(D.a)(),
                  L = o.state,
                  U = L.dropdownOffset,
                  N = L.query,
                  j = p
                    ? V.modalDropdown
                    : [
                        V.dropdown,
                        !F && R && U ? [Object(P.d)(U), { height: 'calc(100vh - '.concat(U, 'px)') }] : null,
                        (F || h) && V.wideModeDropdown,
                        o._withNewTypeaheadUI && d && A(e),
                        h && V.shortModeDropdown,
                        !F && h && V.shortModeDropdownMobile,
                      ],
                  M = {
                    ariaDescendantId: o.state.ariaDescendantId,
                    domId: o._dropdownDomId,
                    onDismiss: o._handleOnEmptyStateDismiss,
                    onItemFocusChanged: o._handleItemFocusChanged,
                    ref: o._handleDropdownRef,
                    style: j,
                  }
                return b && !N
                  ? b(M)
                  : v.a.createElement(S.a, {
                      ariaDescendantId: o.state.ariaDescendantId,
                      communityId: n,
                      domId: o._dropdownDomId,
                      filter: a,
                      getItemDisabledMessage: r,
                      getItemIsDisabled: i,
                      getTopicExactMatch: s,
                      getUserDisplayNameLabel: c,
                      getUserExactMatch: l,
                      injectedItems: u,
                      maxEvents: f,
                      maxTopics: m,
                      onItemClick: o._handleItemClick,
                      onItemFocusChanged: o._handleItemFocusChanged,
                      onItemsChanged: y,
                      orderResults: _,
                      query: N,
                      ref: o._handleDropdownRef,
                      renderCallout: g,
                      renderHeader: w,
                      renderNoResultsState: I,
                      renderUserDecoration: x,
                      selectedItems: C,
                      shouldDeferPrefetch: E,
                      source: T,
                      style: j,
                      withSectionDivider: k,
                    })
              }),
              f()(c()(o), '_dismissDropdown', function () {
                o.setState({ showTypeaheadDropdown: !1 }), o.props.onDismiss && o.props.onDismiss()
              }),
              f()(c()(o), '_handleOnEmptyStateDismiss', function () {
                o._dismissDropdown(), o._inputRef && o._inputRef.blur()
              }),
              f()(c()(o), '_handleLayout', function () {
                o._updatePosition()
              }),
              f()(c()(o), '_handleInputLayoutChanged', function () {
                o._updatePosition()
              }),
              f()(c()(o), '_updatePosition', function () {
                if (o._inputContainerNode) {
                  var e = o._inputContainerNode.getBoundingClientRect().bottom
                  e !== o.state.dropdownOffset && o.setState({ dropdownOffset: e })
                }
              }),
              f()(c()(o), '_handleDropdownRef', function (e) {
                o._dropdownRef = e
              }),
              f()(c()(o), '_setRootContainerNode', function (e) {
                o._rootContainerNode = e || null
              }),
              f()(c()(o), '_setInputRef', function (e) {
                o._inputRef = e
              }),
              f()(c()(o), '_setInputContainerNode', function (e) {
                ;(o._inputContainerNode = e || null), o._inputContainerNode && o._updatePosition()
              }),
              f()(c()(o), '_handleFocusChange', function (e) {
                var t = U.a.getCount() > 0
                ;(o._rootContainerNode && o._rootContainerNode.contains(e.target)) ||
                  t ||
                  (o.state.showTypeaheadDropdown && o._dismissDropdown())
              }),
              f()(c()(o), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = o.state.showTypeaheadDropdown
                if (Object(P.g)(e)) {
                  if (t === m.a) return o._focusNext(), void e.preventDefault()
                  if (t === m.b) return o._focusPrevious(), void e.preventDefault()
                  if (t === m.d) return o._dismissDropdown(), void e.preventDefault()
                  if (t !== m.f)
                    return t === m.c && o._hasFocusedItem()
                      ? (o._selectFocusedItem(), void e.preventDefault())
                      : void (n || o.setState({ showTypeaheadDropdown: !0 }))
                  o._dismissDropdown()
                }
              }),
              f()(c()(o), '_handleItemFocusChanged', function () {
                o.setState({ ariaDescendantId: Object(P.b)() })
              }),
              f()(c()(o), '_handleInputClear', function () {
                o.setQuery('')
              }),
              f()(c()(o), '_handleInputFocus', function () {
                o.setState({ showTypeaheadDropdown: !0 }), o._updatePosition(), o.props.onFocus && o.props.onFocus()
              }),
              f()(c()(o), '_handleInputChange', function (e) {
                o.setQuery(e.target.value), o._updatePosition()
              }),
              f()(c()(o), '_handleFormSubmit', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  o._inputRef && o._inputRef.blur(),
                  o.setState({ showTypeaheadDropdown: !1 }),
                  o.props.onDismiss && o.props.onDismiss(),
                  o.props.onSubmit && o.props.onSubmit()
              }),
              f()(c()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  a = n.onDismiss,
                  r = n.onItemClick,
                  i = n.shouldClearOnSelect,
                  s = n.shouldFocusOnClear,
                  c = i ? '' : o.state.query
                o.setState({ showTypeaheadDropdown: !1 }),
                  o._inputRef && (i && s ? o._inputRef.focus() : o._inputRef.blur()),
                  o.setQuery(c),
                  a && a(),
                  r && r(e, t)
              }),
              f()(c()(o), '_hasFocusedItem', function () {
                return o._dropdownRef && o._dropdownRef.hasFocusedItem()
              }),
              f()(c()(o), '_selectFocusedItem', function () {
                o._dropdownRef && o._dropdownRef.selectFocusedItem()
              }),
              f()(c()(o), '_focusNext', function () {
                o._dropdownRef && o._dropdownRef.focusNext()
              }),
              f()(c()(o), '_focusPrevious', function () {
                o._dropdownRef && o._dropdownRef.focusPrevious()
              }),
              (o.state = { ariaDescendantId: Object(P.b)(), query: e.initialValue, showTypeaheadDropdown: !1 }),
              (o._dropdownDomId = 'typeaheadDropdown-'.concat(q)),
              (q += 1),
              (o._withNewTypeaheadUI = o.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              o
            )
          }
          return (
            i()(n, [
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
                  return v.a.createElement(N.a, null, this._render)
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
        })(v.a.Component)
      f()(H, 'defaultProps', {
        disableClearButton: !1,
        filter: [T.a.Users, T.a.Topics],
        isInSidebar: !1,
        initialValue: '',
        withSectionDivider: !0,
      }),
        f()(H, 'contextType', k.a)
      var V = O.a.create(function (e) {
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
    '5T6p': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('MWbm'),
        i = n('TIdA'),
        s = n('A91F'),
        c = n('t62R')
      var l = n('rHpw').a.create(function (e) {
        return {
          root: { flexDirection: 'row', flexShrink: 1, flexGrow: 1 },
          bodyColumn: {
            justifyContent: 'center',
            flexDirection: 'column',
            marginRight: e.spaces.space4,
            marginLeft: e.spaces.space12,
            flexShrink: 1,
          },
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 },
          largeCellThumbnail: { height: e.spaces.space56, width: e.spaces.space56 },
        }
      })
      t.a = function (e) {
        var t = e.image,
          n = e.style,
          a = e.supportText,
          u = e.title,
          d = e.withNewTypeaheadUI
        return r.a.createElement(
          o.a,
          { style: [l.root, n] },
          r.a.createElement(
            o.a,
            { style: [l.coverContainer, d ? l.largeCellThumbnail : l.cellThumbnail] },
            t ? r.a.createElement(i.a, { accessibilityLabel: '', aspectMode: s.a.SQUARE, image: t }) : null,
          ),
          r.a.createElement(
            o.a,
            { style: l.bodyColumn },
            a ? r.a.createElement(c.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, a) : null,
            r.a.createElement(c.b, { numberOfLines: 2, weight: 'bold' }, u),
          ),
        )
      }
    },
    Gfoi: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 20.5 20.5',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.03 18.72l-3.66-3.66c1.325-1.57 2.13-3.596 2.13-5.81 0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM2 9.25c0-4.135 3.365-7.5 7.5-7.5S17 5.115 17 9.25s-3.365 7.5-7.5 7.5S2 13.385 2 9.25z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 20.5, height: 20.5 }), (t.a = l)
    },
    OEYw: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        f = n.n(h),
        m = n('2VqO'),
        y = n.n(m),
        v = n('KEM+'),
        _ = n.n(v),
        g = (n('7xRU'), n('LW0h'), n('7x/C'), n('z84I'), n('ERkP')),
        b = n.n(g),
        w = n('RhWx'),
        I = n.n(w),
        x = (n('vrRf'), n('M+/F'), n('tQbP'), n('2G9S'), n('hqKg')),
        C = n('oEoC'),
        E = n('o52z'),
        D = n('kGix'),
        S = n('M0jS'),
        T = n('Qyxo'),
        R = n('lnti'),
        k = n('rxPX'),
        O = n('0KEI'),
        F =
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
        L = n('oEOe'),
        U = n('vy4g'),
        N = n('3A2y'),
        P = n('Y6L+'),
        j = n('9EWH'),
        M = n('Ssj5'),
        A = n('GZwR'),
        q = ['rounded_score', 'tokens'],
        H = ['rounded_score', 'tokens'],
        V = 'typeaheadV2',
        z = [],
        W = Object.freeze({
          REQUEST: 'rweb/typeaheadV2/FETCH_REQUEST',
          SUCCESS: 'rweb/typeaheadV2/FETCH_SUCCESS',
          FAILURE: 'rweb/typeaheadV2/FETCH_FAILURE',
        }),
        B = function (e, t) {
          var n = e.q,
            a = e.result_type,
            r = e.src,
            o = a
          return (
            null != t && t.communityId && (o = ''.concat(a, '_').concat(t.communityId)),
            ''.concat(n, '_').concat(o, '_').concat(r)
          )
        },
        Q = { remoteResults: {}, cachedIds: [] }
      var G = function (e) {
          return e.map(function (e) {
            var t = e.rounded_score,
              n = e.tokens,
              a = i()(e, q),
              r = a.topic,
              o = A.b.Topic
            return { id: ''.concat(o, '_').concat(r.replace(' ', '_')), type: o, tokens: n, rounded_score: t, data: a }
          })
        },
        Y = function (e) {
          return e.map(function (e) {
            var t,
              n = e.rounded_score,
              a = e.tokens,
              r = i()(e, H),
              o = A.b.Event,
              s = null == r || null === (t = r.url) || void 0 === t ? void 0 : t.match(P.A.id)
            return { id: (null == s ? void 0 : s[0]) || '', type: o, tokens: a, rounded_score: n, data: r }
          })
        },
        K = function (e, t) {
          return e.typeaheadV2.remoteResults[t]
        },
        X = function (e, t) {
          return function (n, a) {
            var r = K(a(), B(e, t)),
              o = r && r.timestamp
            return o && Date.now() - o <= 3e5 ? Promise.resolve() : n(Z(e, t))
          }
        },
        Z = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            if (!e || !e.q || '' === e.q.trim()) return Promise.resolve()
            var i = { queryId: B(e, t) },
              s = (t || {}).communityId,
              c = e.result_type.split(','),
              l = { actionTypes: W, context: 'FETCH_TYPEAHEAD', meta: i }
            if (c.includes(A.a.CommunityUsers) && s) {
              return Object(L.b)(n, {
                params: { communityId: s, prefix: e.q },
                request: o.Typeahead.fetchCommunityInviteUsers,
              })(l, function (e) {
                var t = ((null == e ? void 0 : e.invite_action_results) || {}).entities
                return t ? [Object(F.c)(t)] : void 0
              })
            }
            if (c.includes(A.a.CommunityMembers) && s) {
              return Object(L.b)(n, {
                params: { communityId: s, prefix: e.q },
                request: o.Typeahead.fetchCommunityMembers,
              })(l, function (e) {
                var t = ((null == e ? void 0 : e.user_community_relationships) || {}).entities
                return t ? [Object(F.c)(t)] : void 0
              })
            }
            return Object(L.b)(n, { params: e, request: o.Typeahead.fetch })(l)
          }
        }
      M.a.register(
        _()({}, V, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case W.REQUEST:
              var n = t.meta.queryId
              return Object(j.a)(e, function (e) {
                e.remoteResults[n] || (e.remoteResults[n] = { fetchStatus: D.a.NONE }),
                  (e.remoteResults[n].fetchStatus = D.a.LOADING)
              })
            case W.SUCCESS:
              var a = t.meta.queryId,
                r = t.payload
              if (!r) return e
              var o = r.users.map(function (e) {
                  return Object(U.a)(e, A.c.Remote)
                }),
                i = {
                  fetchStatus: D.a.LOADED,
                  id: a,
                  orderedSections: r.ordered_sections,
                  events: Y(r.events),
                  topics: G(r.topics),
                  users: Object(A.i)(o),
                  timestamp: Date.now(),
                }
              return Object(j.a)(e, function (e) {
                ;(e.cachedIds = e.cachedIds.filter(function (e) {
                  return e !== a
                })),
                  e.cachedIds.push(a),
                  e.cachedIds.length >= 25 &&
                    (e.remoteResults = Object(N.a)(e.remoteResults, e.cachedIds.splice(0, 1))),
                  (e.remoteResults[a] = i)
              })
            case W.FAILURE:
              var s = t.meta.queryId
              return Object(j.a)(e, function (e) {
                e.remoteResults[s].fetchStatus = D.a.FAILED
              })
            default:
              return e
          }
        }),
      )
      var J = n('UQTn'),
        $ = [A.a.Users],
        ee = function (e) {
          var t = e.communityId,
            n = e.filter,
            a = e.query,
            r = e.source
          return B({ q: a, result_type: (n || $).join(','), src: r }, { communityId: t })
        },
        te = function (e, t) {
          return (function (e, t) {
            var n = K(e, t)
            return n && n.fetchStatus
          })(e, ee(t))
        },
        ne = function (e, t) {
          return (function (e, t) {
            var n = K(e, t)
            return (n && n.users) || z
          })(e, ee(t))
        },
        ae = function (e, t) {
          return (function (e, t) {
            var n = K(e, t)
            return (n && n.topics) || z
          })(e, ee(t))
        },
        re = function (e, t) {
          return (function (e, t) {
            var n = K(e, t)
            return (n && n.events) || z
          })(e, ee(t))
        },
        oe = function (e, t) {
          return (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0)
        },
        ie = function () {
          return Object(x.createSelector)(
            ne,
            Object(x.createSelector)(
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.filter
              },
              J.d,
              J.e,
              function (e, t, n, a) {
                if (!e || !t || t.indexOf(A.a.Users) < 0) return Object(E.a)()
                var r = Object(J.f)(n, e)
                return Object(A.i)(
                  r
                    .map(function (e) {
                      return a[e]
                    })
                    .sort(oe)
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
            function (e, t, n, a, r, o, i) {
              var s = Object(T.a)(a || [], function (e) {
                  return e.type === A.b.User ? e.data.id_str : void 0
                }),
                c = t.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                l = e.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                u = Object(C.a)(c, l).slice(0, i || 10),
                d = n === D.a.LOADED,
                p = o && o({ query: r, hasResults: !!e.length, isLoaded: d }),
                h = p ? [].concat(I()(u), [p]) : u
              return h.length ? h : Object(E.a)()
            },
          )
        },
        se = function () {
          return Object(x.createSelector)(
            ie(),
            Object(x.createSelector)(
              ae,
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
              function (e, t, n, a, r) {
                var o = t === D.a.LOADED,
                  i = r && r({ query: n, hasResults: !!e.length, isLoaded: o }),
                  s = e.slice(0, a || 3)
                return i && s.push(i), s.length ? s : Object(E.a)()
              },
            ),
            Object(x.createSelector)(
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
              function (e, t, n, a, r) {
                var o = n && r && r.indexOf(A.a.Events) >= 0,
                  i = e.slice(0, a || 1)
                return i.length && o ? i : Object(E.a)()
              },
            ),
            function (e, t) {
              return t.injectedItems
            },
            function (e, t) {
              return t.orderResults
            },
            function (e, t, n, a, r) {
              var o = a && a.length ? a : null,
                i = r
                  ? r(o, e, t, n)
                  : Object(R.a)([o, n.length ? n : void 0, t.length ? t : void 0, e.length ? e : void 0])
              return t.length || e.length || n.length ? i : o ? [o] : Object(E.a)()
            },
          )
        },
        ce = Object(k.a)()
          .propsFromState(function () {
            return { fetchStatus: te, items: se() }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT',
              ),
              fetchTypeaheadIfNeeded: X,
              fetchUsersPresenceIfNeeded: S.b.fetchManyIfNeeded,
              prefetchTypeaheadUsersIfNeeded: J.b,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        le = n('8UdT'),
        ue = n('kIAd'),
        de = n('Rp9C'),
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
        ve = (function (e) {
          f()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, a)),
              _()(p()(r), '_fetchTypeaheadResultsIfNeeded', function (e) {
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
              _()(p()(r), '_handleItemClick', function (e, t) {
                var n = r.props,
                  a = n.analytics,
                  o = n.onItemClick,
                  i = n.query
                o(e, t)
                var s = de.a.forTypeaheadResult(e, t),
                  c = s ? [s] : void 0
                a.scribe({ action: 'click', data: { search_details: { query: i }, targets: c } })
              }),
              _()(p()(r), '_scribeResults', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.items,
                  a = e.query
                t.scribe({
                  action: 'impression',
                  data: { items: de.a.forTypeaheadResults(n), search_details: { query: a } },
                })
              }),
              (r._debouncedFetchTypeaheadResultsIfNeeded = Object(fe.a)(r._fetchTypeaheadResultsIfNeeded, 250)),
              (r.state = { shouldShowPrefetchResults: !0 }),
              r
            )
          }
          return (
            u()(n, [
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
                    a = n.createLocalApiErrorHandler,
                    r = n.fetchUsersPresenceIfNeeded,
                    o = n.filter,
                    i = n.items,
                    s = n.onItemsChanged,
                    c = n.query,
                    l = n.shouldDeferPrefetch,
                    u = n.source,
                    d = e.filter,
                    p = e.query,
                    h = e.source,
                    f = this.context.loggedInUserId,
                    m = this.context.featureSwitches.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') && f
                  if (null != i && i.length && i !== e.items && (this._scribeResults(), s && s(i), m)) {
                    var y = Object(me.a)(i)
                      .filter(function (e) {
                        return e.type === le.b.User
                      })
                      .map(function (e) {
                        return e.id
                      })
                    y && r(y).catch(a({}))
                  }
                  ;(c === p && o === d && u === h) ||
                    (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                    l &&
                      (clearTimeout(this._prefetchResultsTimer),
                      this.setState({ shouldShowPrefetchResults: !1 }),
                      (this._prefetchResultsTimer = setTimeout(function () {
                        t.props.query &&
                          t.props.fetchStatus !== D.a.LOADED &&
                          t.setState({ shouldShowPrefetchResults: !0 })
                      }, ue.a))))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.analytics, e.communityId, e.contextText, e.createLocalApiErrorHandler, e.dropdownRef),
                    n = e.fetchStatus,
                    a =
                      (e.fetchTypeaheadIfNeeded,
                      e.fetchUsersPresenceIfNeeded,
                      e.filter,
                      e.getTopicExactMatch,
                      e.getUserExactMatch,
                      e.injectedItems),
                    o = e.items,
                    s =
                      (e.maxEvents,
                      e.maxTopics,
                      e.onItemClick,
                      e.onItemsChanged,
                      e.orderResults,
                      e.prefetchTypeaheadUsersIfNeeded,
                      e.query),
                    c = (e.shouldDeferPrefetch, e.topicType, e.userLimit, i()(e, ye)),
                    l = s && n !== D.a.LOADED,
                    u = l && !this.state.shouldShowPrefetchResults ? a : o
                  return b.a.createElement(
                    pe.a,
                    r()({}, c, { isLoading: !!l, items: u, onItemClick: this._handleItemClick, query: s, ref: t }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      _()(ve, 'contextType', he.a),
        _()(ve, 'defaultProps', { filter: [A.a.Users], injectedItems: [], maxEvents: 3, maxTopics: 1 })
      var _e = b.a.forwardRef(function (e, t) {
          return b.a.createElement(ve, r()({}, e, { dropdownRef: t }))
        }),
        ge = ce.forwardRef(_e)
      t.a = ge
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('AQ79'),
        r = function (e, t) {
          return e[a.c] ? e[a.c].conversations[t] : null
        }
    },
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return _e
      }),
        n.d(t, 'a', function () {
          return we
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('ho0z'), n('ERkP')),
        y = n.n(m),
        v = n('+Kfv'),
        _ = 'typeaheadResult',
        g = n('v6aA'),
        b = n('AQOc'),
        w = n('V5Qi'),
        I = n('G6rE'),
        x = n('rxPX'),
        C = function (e, t) {
          return t.conversationId
        },
        E = function (e, t) {
          return Object(w.a)(e, C(0, t))
        },
        D = Object(x.a)()
          .propsFromState(function () {
            return { conversationId: C, conversation: E, users: I.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(b.b)(t.data, void 0, n)), a
          }),
        S = n('aA19'),
        T = n('OhSZ'),
        R = n('5mJL'),
        k = n('rHpw'),
        O = k.a.create(function (e) {
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
        }),
        F = D(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            a = e.isSelected,
            r = e.perspective,
            o = y.a.useContext(g.a).featureSwitches,
            i = o.isTrue('dm_vdl_enabled') && o.isTrue('dm_vdl_inbox_p0_enabled')
          return t
            ? y.a.createElement(
                R.a,
                {
                  avatarCell: y.a.createElement(S.a, { conversation: t, perspective: r, size: 'xLarge' }),
                  avatarCellStyle: O.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: O.bodyColumn,
                  style: [O.root, !a && n && O.disabled],
                },
                y.a.createElement(T.b, {
                  conversation: t,
                  perspective: r,
                  withParticipantsCount: !0,
                  withVDLRefresh: i,
                }),
                we({ isSelected: a }),
              )
            : null
        }),
        L = (n('uFXj'), n('MWbm')),
        U = n('LbZ7'),
        N = n('t62R'),
        P = n('9Xij'),
        j = n('TIdA'),
        M = n('A91F'),
        A = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.event,
                    n = e.image,
                    a = e.supportText
                  return y.a.createElement(
                    L.a,
                    { style: H.root },
                    y.a.createElement(
                      U.a,
                      { withGutter: !0 },
                      y.a.createElement(
                        L.a,
                        { style: H.bodyColumn },
                        a ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        y.a.createElement(N.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? y.a.createElement(
                            L.a,
                            { style: H.coverContainer },
                            y.a.createElement(
                              P.a,
                              { ratio: 1 },
                              y.a.createElement(j.a, { accessibilityLabel: '', aspectMode: M.a.SQUARE, image: n }),
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
        })(y.a.PureComponent),
        q = '100px',
        H = k.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: q,
              maxWidth: q,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        V = A,
        z = n('5T6p'),
        W =
          (n('z84I'),
          n('2G9S'),
          n('vrRf'),
          n('LW0h'),
          n('7x/C'),
          n('kFen'),
          n('qd3W'),
          n('M+/F'),
          n('jQ3i'),
          n('x4t0'),
          n('KqXw'),
          n('MvUL'),
          n('yyPN')),
        B = n.n(W)
      var Q = n('FiRh'),
        G = n('j7Bv'),
        Y = n('EHV7'),
        K = n('Gfoi')
      var X = k.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            context: { alignItems: 'center', flexDirection: 'row' },
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.subtext2,
              paddingRight: e.spaces.space4,
              width: e.fontSizes.subtext2,
            },
            disabled: { backgroundColor: e.colors.gray0 },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
            searchIconCell: { flexDirection: 'row', alignItems: 'center' },
            wrapperCellStyle: { justifyContent: 'center' },
          }
        }),
        Z = function (e) {
          var t = y.a.useContext(g.a).featureSwitches,
            n = e.isDisabled,
            a = e.query,
            r = e.resultContext,
            o = e.showIcon,
            i = e.style,
            s = (function (e, t) {
              var n,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = B()(e),
                o = e.toLowerCase().indexOf(t.toLowerCase()),
                i = o + t.length
              if (0 === r.length) {
                var s = a ? [o > 0 ? [0, o] : void 0, [i, e.length]].filter(Boolean) : [[o, i]]
                n = [{ highlights: -1 !== o ? s : void 0, text: e, entityType: 'text', prefix: '' }]
              } else {
                var c = r.flatMap(function (t, n, a) {
                    var r = t.indices,
                      o = 0 === n ? 0 : a[n - 1].indices[1],
                      i = n === a.length - 1,
                      s = []
                    return (
                      o !== r[0] && s.push(e.slice(o, r[0])),
                      s.push(e.substring(r[0], r[1])),
                      i && e.length !== r[1] && s.push(e.slice(r[1])),
                      s
                    )
                  }),
                  l = 0,
                  u = c.map(function (e, t, n) {
                    l += t > 0 ? n[t - 1].length : 0
                    var a = e.length
                    return { runningTotal: l, containsQuery: -1 !== o && l + a >= o && l < i }
                  })
                n = c.map(function (e, t) {
                  var n,
                    r,
                    s = u[t],
                    c = s.containsQuery,
                    l = s.runningTotal,
                    d = e.includes('#')
                  if (a && !c) r = [[0, e.length]]
                  else if (c) {
                    var p = l < o ? o - l : 0,
                      h = l + e.length < i ? e.length : i - l,
                      f = d ? p - 1 : p,
                      m = d ? h - 1 : h
                    r = a
                      ? [f > 0 ? [0, f] : void 0, m !== e.length - 1 ? [m, e.length] : void 0].filter(Boolean)
                      : [[f, m]]
                  }
                  var y = d ? ''.concat(null == e ? void 0 : e.replace('#', '')) : e
                  return {
                    highlights: null !== (n = r) && void 0 !== n && n.length ? r : void 0,
                    text: y,
                    entityType: d ? 'hashtag' : 'text',
                    prefix: d ? '#' : '',
                  }
                })
              }
              return n
            })(e.topic, t.isTrue('responsive_web_typeahead_reverse_bolding_enabled') ? a : '', true),
            c = y.a.createElement(
              N.b,
              null,
              s.map(function (e, t) {
                return y.a.createElement(Q.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            l = y.a.createElement(
              y.a.Fragment,
              null,
              c,
              r
                ? y.a.createElement(
                    L.a,
                    { style: X.context },
                    r && r.types[0] && 'followable_topic' === r.types[0].type
                      ? y.a.createElement(Y.a, { style: X.icon })
                      : null,
                    y.a.createElement(N.b, { color: 'gray700' }, r.display_string || ' '),
                  )
                : null,
            )
          return y.a.createElement(
            L.a,
            { style: [X.root, n && X.disabled, i] },
            o
              ? (function (e) {
                  var t = y.a.createElement(G.a, { Icon: K.a, color: 'neutral', size: 'xxxLarge', style: X.searchIcon })
                  return y.a.createElement(
                    R.a,
                    {
                      avatarCell: t,
                      avatarCellStyle: X.searchIconCell,
                      avatarSize: 'xxxLarge',
                      cellStyle: X.wrapperCellStyle,
                    },
                    e,
                  )
                })(l)
              : l,
          )
        },
        J = (n('yH/f'), n('M0jS')),
        $ = function (e, t) {
          return Object(J.c)(e, t.userId)
        },
        ee = Object(x.a)().propsFromState(function () {
          return { userSpace: $ }
        }),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('tocL'),
        re = 'TypeaheadUser',
        oe = n('GZwR'),
        ie = n('IMA+'),
        se = ne.a.ae2205d1,
        ce = ne.a.d960b55b,
        le = ne.a.fd06b02f,
        ue = Object.freeze({
          num_of_followers: ae.a.Follow,
          bio: ae.a.TextOnly,
          location: ae.a.Location,
          num_tweets: ae.a.NewTweets,
          follow_relationship: ae.a.Follow,
          followers_follow: ae.a.Follow,
          social_proof: ae.a.SocialProof,
          follow_relationship_mutual_follow: ae.a.FollowMutual,
          follow_relationship_followed: ae.a.FollowFollowed,
          follow_relationship_following: ae.a.FollowFollowing,
        }),
        de = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(c()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              f()(c()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.isDisabled,
                  a = t.item,
                  r = t.onItemClick
                r && r(a, !!n)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUri,
                    n = e.decoration,
                    a = e.disabledMessage,
                    r = e.displayNameLabel,
                    o = e.isDisabled,
                    i = e.isProtected,
                    s = e.isVerified,
                    c = e.name,
                    l = e.screenName,
                    u = e.source,
                    d = e.userId,
                    p = e.userSpace,
                    h = e.withNewTypeaheadUI,
                    f = this.context.featureSwitches,
                    m = this._getSocialContext(),
                    v = this._getResultContext() || m,
                    _ = u === oe.d.SearchBox,
                    g = p && f.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
                  return (
                    g && (g.accessibilityLabel = le({ screenName: l })),
                    y.a.createElement(ie.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: o ? a : void 0,
                      displayMode: h ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      displayNameLabel: r,
                      isDisabled: o,
                      isProtected: i,
                      isVerified: s,
                      name: c,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: _ ? g : void 0,
                      screenName: l,
                      socialContext: v,
                      testID: re,
                      userId: d,
                      withInteractiveStyling: !1,
                      withLink: !1,
                    })
                  )
                },
              },
              {
                key: '_getSocialContext',
                value: function () {
                  var e = this.props.socialContext
                  if (e && e.following) {
                    var t = e.followed_by ? se : ce
                    return { contextType: ae.a.Follow, text: t }
                  }
                },
              },
              {
                key: '_getResultContext',
                value: function () {
                  var e = this.props,
                    t = e.resultContext,
                    n = e.source
                  if (t && t.display_string && t.types && n === oe.d.SearchBox)
                    return {
                      contextType: (t.types.length ? ue[t.types[0].type] : void 0) || ae.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      f()(de, 'contextType', g.a), f()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(de),
        he = n('htQn'),
        fe = n('iySH'),
        me = n('IMYl'),
        ye = { viewType: 'typeahead_result' },
        ve = function (e) {
          return e.children
        }
      function _e(e) {
        return y.a.createElement(ve, { item: e.item }, y.a.createElement(ge, e))
      }
      var ge = (function (e) {
        u()(n, e)
        var t = p()(n)
        function n(e, a) {
          var o
          return (
            r()(this, n),
            (o = t.call(this, e, a)),
            f()(c()(o), '_onViewRef', function (e) {
              o._viewRef = e
              var t = o.props.onRef
              t && t(e)
            }),
            f()(c()(o), '_handleClick', function () {
              var e = o.props.item
              e.type !== oe.b.User && o.props.onClick && o.props.onClick(e, o.isDisabled)
            }),
            (o._withNewTypeaheadUI =
              o.context.featureSwitches.isTrue('responsive_web_account_search_readability_enabled') &&
              e.source === oe.d.SearchBox),
            o
          )
        }
        return (
          i()(n, [
            {
              key: 'componentDidMount',
              value: function () {
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
              value: function (e) {
                var t = this.props.onRef
                t && t !== e.onRef && this._viewRef && t(this._viewRef)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._rafId && window.cancelAnimationFrame(this._rafId)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  n = e.isDisabled,
                  a = e.isFocused,
                  r = e.isInMultiSelect,
                  o = e.isSelected,
                  i = e.style
                return y.a.createElement(
                  v.a,
                  { behavioralEventContext: ye },
                  y.a.createElement(
                    L.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!r || !o) || void 0,
                        selected: n ? void 0 : (r && o) || (!r && !!a),
                      },
                      nativeID: t,
                      testID: _,
                    },
                    y.a.createElement(
                      he.a,
                      {
                        accessibilityRole: r ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [a && be.focused, be.transitionStyles, this._loaded && be.loaded, i],
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
              value: function () {
                var e = this.props,
                  t = e.disabledMessage,
                  n = e.getUserDisplayNameLabel,
                  a = e.isDisabled,
                  r = e.isSelected,
                  o = e.item,
                  i = e.onClick,
                  s = e.renderUserDecoration,
                  c = e.source
                switch (o.type) {
                  case oe.b.User:
                    var l = o.data,
                      u = s ? s({ userId: l.id_str, isSelected: r }) : void 0,
                      d = n ? n(o, l) : void 0
                    return y.a.createElement(pe, {
                      avatarUri: l.profile_image_url_https,
                      canDm: !!l.can_dm,
                      canMediaTag: !!l.can_media_tag,
                      decoration: u || void 0,
                      disabledMessage: t,
                      displayNameLabel: d,
                      isDisabled: a,
                      isProtected: !!l.protected,
                      isVerified: !!l.verified,
                      item: o,
                      name: l.name,
                      onItemClick: i,
                      resultContext: l.result_context,
                      screenName: l.screen_name,
                      socialContext: l.social_context,
                      source: c,
                      userId: l.id_str,
                      withNewTypeaheadUI: this._withNewTypeaheadUI,
                    })
                  case oe.b.Event:
                    var p = o.data
                    return this._withNewTypeaheadUI
                      ? y.a.createElement(z.a, {
                          image: p.primary_image && p.primary_image.original_info,
                          style: be.itemPadding,
                          supportText: p.supporting_text,
                          title: p.topic,
                          withNewTypeaheadUI: !0,
                        })
                      : y.a.createElement(V, {
                          event: p.topic,
                          image: p.primary_image && p.primary_image.original_info,
                          supportText: p.supporting_text,
                        })
                  case oe.b.Hashtag:
                  case oe.b.Topic:
                    var h = this.props.query,
                      f = o.data,
                      m = c === oe.d.SearchBox
                    return y.a.createElement(Z, {
                      isDisabled: a,
                      query: h || '',
                      resultContext: f.result_context,
                      showIcon: m,
                      style: m ? be.itemPadding : void 0,
                      topic: f.topic,
                    })
                  case oe.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      y.a.createElement(F, {
                        conversationId: o.id,
                        isDisabled: a,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case oe.b.SettingGroup:
                    var v = o.data.text
                    return y.a.createElement(
                      L.a,
                      { style: be.navigationLink },
                      y.a.createElement(N.b, { style: be.content, weight: 'bold' }, v),
                      y.a.createElement(fe.a, { style: be.icon }),
                    )
                  case oe.b.Setting:
                    var _ = o.data.text
                    return y.a.createElement(
                      L.a,
                      { style: be.navigationLink },
                      y.a.createElement(N.b, { style: be.content }, _),
                      y.a.createElement(fe.a, { style: be.icon }),
                    )
                  case oe.b.NoResult:
                    var g = o.data.text
                    return y.a.createElement(N.b, { style: be.noResult }, g)
                  default:
                    return null
                }
              },
            },
            {
              key: 'isDisabled',
              get: function () {
                return !!this.props.isDisabled
              },
            },
          ]),
          n
        )
      })(y.a.Component)
      f()(ge, 'contextType', g.a)
      var be = k.a.create(function (e) {
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
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
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
        we = function (e) {
          return e.isSelected ? y.a.createElement(me.a, { accessibilityHidden: !0, style: be.checkIcon }) : null
        }
    },
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('VPAj'),
        r = Object(a.a)([])
      Object(a.a)({})
    },
    tAeL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return j
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        m = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        y = n.n(m),
        v = n('+Kfv'),
        _ = n('0yYu'),
        g = n('7nmT'),
        b = n.n(g),
        w = n('ddV6'),
        I = n.n(w),
        x = n('3XMw'),
        C = n.n(x),
        E = n('kIAd'),
        D = n('JYMr'),
        S = n('rHpw'),
        T = C.a.f2b3fe06,
        R = S.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        k = function (e) {
          var t = e.isLoading,
            n = y.a.useState(!1),
            a = I()(n, 2),
            r = a[0],
            o = a[1]
          return (
            y.a.useEffect(
              function () {
                var e
                return (
                  t
                    ? (e = setTimeout(function () {
                        return o(!0)
                      }, E.a))
                    : o(!1),
                  function () {
                    return clearTimeout(e)
                  }
                )
              },
              [t],
            ),
            y.a.createElement(D.a, { ariaValueText: r ? T : '', indeterminate: r, style: !r && R.hidden })
          )
        },
        O = n('ZcYN'),
        F = n('MWbm'),
        L = n('oQhu'),
        U = n('w6IS'),
        N = n('MXDK'),
        P = { viewType: 'typeahead_dropdown' },
        j = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e)),
              f()(c()(o), '_setFocusedItemRef', function (e) {
                o._shouldScrollToFocusedItem &&
                  e &&
                  (Object(N.c)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
              }),
              f()(c()(o), '_resetScroll', function () {
                var e = o._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              f()(
                c()(o),
                '_getFlattenedItems',
                Object(L.a)(function (e) {
                  return Object(U.a)(e)
                }),
              ),
              f()(c()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemClick,
                  i = o._getFlattenedItems(a).indexOf(e)
                e && !t && !o._shouldBlockInteractivity && r(e, i), o._resetFocus()
              }),
              f()(c()(o), '_getResultCount', function () {
                var e = o.props.items
                return o._getFlattenedItems(e).length
              }),
              f()(c()(o), '_setFocusIndex', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), r && r(o._getFlattenedItems(a)[e])
              }),
              f()(c()(o), '_resetFocus', function () {
                o._setFocusIndex(o.props.withItemAlwaysSelected ? 0 : -1)
              }),
              f()(c()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              f()(c()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              }),
              f()(c()(o), 'hasFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                return e >= 0 && t > e
              }),
              f()(c()(o), 'selectFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o.props,
                  n = t.getItemIsDisabled,
                  a = t.items
                if (o.hasFocusedItem()) {
                  var r = o._getFlattenedItems(a)[e],
                    i = !!n && n(r, r.data)
                  o._handleItemClick(r, i)
                }
              }),
              (o.state = { focusIndex: e.withItemAlwaysSelected ? 0 : -1 }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._resetFocus()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._interactivityTimeout)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
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
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.domId,
                    a = t.isLoading,
                    r = t.items,
                    o = t.renderCallout,
                    i = t.renderHeader,
                    s = t.renderNoResultsState,
                    c = t.selectedItems,
                    l = t.style,
                    u = a || r.length,
                    d = 0,
                    p = !!c
                  return u
                    ? y.a.createElement(
                        v.a,
                        { behavioralEventContext: P },
                        y.a.createElement(
                          F.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: l },
                          o ? o() : null,
                          y.a.createElement(k, { isLoading: !!a }),
                          i ? i() : null,
                          r.length
                            ? r.map(function (t, n) {
                                var a = !Array.isArray(r[n - 1]) && n > 0,
                                  o = n < r.length - 1,
                                  i = Array.isArray(t)
                                    ? e._renderTypeaheadGroup(t, d, a, o)
                                    : e._renderTypeaheadItem(t, d)
                                return (d += Array.isArray(t) ? t.length : 1), i
                              })
                            : null,
                        ),
                      )
                    : s
                    ? s()
                    : null
                },
              },
              {
                key: '_renderTypeaheadGroup',
                value: function (e, t, n, a) {
                  var r = this,
                    o = this.props.withSectionDivider
                  return y.a.createElement(
                    y.a.Fragment,
                    { key: 'typeaheadGroup-'.concat(t) },
                    o && n ? y.a.createElement(_.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                    e.map(function (e, n) {
                      return r._renderTypeaheadItem(e, t + n)
                    }),
                    o && a ? y.a.createElement(_.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
                  )
                },
              },
              {
                key: '_renderTypeaheadItem',
                value: function (e, t) {
                  var n = this.props,
                    a = n.ariaDescendantId,
                    r = n.getItemDisabledMessage,
                    o = n.getItemIsDisabled,
                    i = n.getUserDisplayNameLabel,
                    s = n.query,
                    c = n.renderUserDecoration,
                    l = n.selectedItems,
                    u = n.source,
                    d = this.state.focusIndex,
                    p = !(!l || !e.id) && l.indexOf(e.id) >= 0,
                    h = !!l,
                    f = d === t,
                    m = o && o(e, e.data),
                    v = r && r(e, e.data)
                  return y.a.createElement(O.b, {
                    disabledMessage: v,
                    domId: f ? a : void 0,
                    getUserDisplayNameLabel: i,
                    isDisabled: m,
                    isFocused: f,
                    isInMultiSelect: h,
                    isSelected: p,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: f ? this._setFocusedItemRef : void 0,
                    query: s,
                    renderUserDecoration: c,
                    source: u,
                  })
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(N.a)(b.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
            ]),
            n
          )
        })(y.a.Component)
    },
    woHV: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        s = (n('ERkP'), n('k/Ka')),
        c = n('rHpw').a.create({
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
        }),
        l = ['style']
      t.a = function (e) {
        var t = e.style,
          n = i()(e, l)
        return Object(s.a)('form', r()(r()({}, n), {}, { action: '#', style: [c.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
