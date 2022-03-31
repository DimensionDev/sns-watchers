;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '3EFP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return a
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
      var r = 'ArrowDown',
        a = 'ArrowUp',
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
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('uFXj'), n('LW0h'), n('7x/C'), n('3EFP')),
        y = n('ERkP'),
        v = n.n(y),
        b = n('ZUOq'),
        g = n('+Kfv'),
        _ = n('woHV'),
        w = n('3XMw'),
        I = n.n(w),
        C = n('VwDm'),
        x = n('WPfJ'),
        E = n('N5qz'),
        S = n('Es6L'),
        T = n('OEYw'),
        D = n('GZwR'),
        k = n('MWbm'),
        R = n('v6aA'),
        O = n('rHpw'),
        L = n('xoZN'),
        F = n('6OUF'),
        P = n('pf9B'),
        U = n('cHvH'),
        N = n('oEoC'),
        j = I.a.f065ba8c,
        M = { viewType: 'typeahead_input' },
        A = function (e) {
          return E.a.isTwoColumnNormalLayout(e)
            ? {
                width: b.a.columnWidths.secondary.normal + O.a.theme.spacesPx.space24,
                left: -O.a.theme.spacesPx.space24 / 2,
              }
            : E.a.isTwoColumnSmallLayout(e)
            ? {
                width: b.a.columnWidths.secondary.small + O.a.theme.spacesPx.space16,
                left: -O.a.theme.spacesPx.space16 / 2,
              }
            : void 0
        },
        z = 1,
        H = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              h()(c()(o), '_withNewTypeaheadUI', !1),
              h()(c()(o), '_render', function (e) {
                var t = e.windowWidth,
                  n = o.props,
                  r = n.alwaysOpen,
                  a = n.disableClearButton,
                  i = n.forceVdlDisable,
                  s = n.inputStyle,
                  c = n.isCompact,
                  l = n.isOnHomepage,
                  u = n.placeholder,
                  d = n.renderInSearchField,
                  p = n.rounded,
                  f = n.shouldAutoFocus,
                  h = n.shouldFocusOnClear,
                  m = n.style,
                  y = n.testID,
                  b = o.state.showTypeaheadDropdown || r
                return v.a.createElement(
                  g.a,
                  { behavioralEventContext: M },
                  v.a.createElement(
                    k.a,
                    { onLayout: o._handleLayout, ref: o._setRootContainerNode, style: [V.root, m] },
                    v.a.createElement(
                      L.a,
                      { onKeyDown: o._handleKeyDown, style: V.keydownInputListener },
                      v.a.createElement(
                        _.a,
                        {
                          accessibilityLabel: u,
                          accessibilityRole: 'search',
                          onSubmit: o._handleFormSubmit,
                          style: V.wrapper,
                        },
                        v.a.createElement(
                          k.a,
                          { ref: o._setInputContainerNode, style: s },
                          v.a.createElement(F.a, {
                            Icon: C.a,
                            ariaActiveDescendant: o.state.ariaDescendantId,
                            ariaAutocomplete: 'list',
                            ariaExpanded: b,
                            ariaLabel: j,
                            ariaOwns: o._dropdownDomId,
                            ariaRole: 'combobox',
                            autoComplete: 'off',
                            autoCorrect: !1,
                            autoFocus: f,
                            contentBelow: d && d(),
                            focusOnClear: h,
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
                            withClearButton: !a && o.state.showTypeaheadDropdown,
                          }),
                        ),
                        v.a.createElement(
                          k.a,
                          { style: [V.typeaheadContainer, !p && V.topBorder] },
                          b ? o._renderDropdown(t) : null,
                        ),
                      ),
                    ),
                  ),
                )
              }),
              h()(c()(o), '_renderDropdown', function (e) {
                var t = o.props,
                  n = t.communityId,
                  r = t.filter,
                  a = t.getItemDisabledMessage,
                  i = t.getItemIsDisabled,
                  s = t.getTopicExactMatch,
                  c = t.getUserDisplayNameLabel,
                  l = t.getUserExactMatch,
                  u = t.injectedItems,
                  d = t.isInSidebar,
                  p = t.isModal,
                  f = t.isOnHomepage,
                  h = t.maxEvents,
                  m = t.maxTopics,
                  y = t.onItemsChanged,
                  b = t.orderResults,
                  g = t.renderCallout,
                  _ = t.renderEmptyState,
                  w = t.renderHeader,
                  I = t.renderNoResultsState,
                  C = t.renderUserDecoration,
                  x = t.selectedItems,
                  E = t.shouldDeferPrefetch,
                  D = t.source,
                  k = t.trustedFriendsId,
                  R = t.withFixedPositioning,
                  L = t.withSectionDivider,
                  F = e >= O.a.theme.breakpoints.medium || Object(S.a)(),
                  P = o.state,
                  U = P.dropdownOffset,
                  j = P.query,
                  M = p
                    ? V.modalDropdown
                    : [
                        V.dropdown,
                        !F && R && U ? [Object(N.d)(U), { height: 'calc(100vh - '.concat(U, 'px)') }] : null,
                        (F || f) && V.wideModeDropdown,
                        o._withNewTypeaheadUI && d && A(e),
                        f && V.shortModeDropdown,
                        !F && f && V.shortModeDropdownMobile,
                      ],
                  z = {
                    ariaDescendantId: o.state.ariaDescendantId,
                    domId: o._dropdownDomId,
                    onDismiss: o._handleOnEmptyStateDismiss,
                    onItemFocusChanged: o._handleItemFocusChanged,
                    ref: o._handleDropdownRef,
                    style: M,
                  }
                return _ && !j
                  ? _(z)
                  : v.a.createElement(T.a, {
                      ariaDescendantId: o.state.ariaDescendantId,
                      communityId: n,
                      domId: o._dropdownDomId,
                      filter: r,
                      getItemDisabledMessage: a,
                      getItemIsDisabled: i,
                      getTopicExactMatch: s,
                      getUserDisplayNameLabel: c,
                      getUserExactMatch: l,
                      injectedItems: u,
                      maxEvents: h,
                      maxTopics: m,
                      onItemClick: o._handleItemClick,
                      onItemFocusChanged: o._handleItemFocusChanged,
                      onItemsChanged: y,
                      orderResults: b,
                      query: j,
                      ref: o._handleDropdownRef,
                      renderCallout: g,
                      renderHeader: w,
                      renderNoResultsState: I,
                      renderUserDecoration: C,
                      selectedItems: x,
                      shouldDeferPrefetch: E,
                      source: D,
                      style: M,
                      trustedFriendsId: k,
                      withSectionDivider: L,
                    })
              }),
              h()(c()(o), '_dismissDropdown', function () {
                o.setState({ showTypeaheadDropdown: !1 }), o.props.onDismiss && o.props.onDismiss()
              }),
              h()(c()(o), '_handleOnEmptyStateDismiss', function () {
                o._dismissDropdown(), o._inputRef && o._inputRef.blur()
              }),
              h()(c()(o), '_handleLayout', function () {
                o._updatePosition()
              }),
              h()(c()(o), '_handleInputLayoutChanged', function () {
                o._updatePosition()
              }),
              h()(c()(o), '_updatePosition', function () {
                if (o._inputContainerNode) {
                  var e = o._inputContainerNode.getBoundingClientRect().bottom
                  e !== o.state.dropdownOffset && o.setState({ dropdownOffset: e })
                }
              }),
              h()(c()(o), '_handleDropdownRef', function (e) {
                o._dropdownRef = e
              }),
              h()(c()(o), '_setRootContainerNode', function (e) {
                o._rootContainerNode = e || null
              }),
              h()(c()(o), '_setInputRef', function (e) {
                o._inputRef = e
              }),
              h()(c()(o), '_setInputContainerNode', function (e) {
                ;(o._inputContainerNode = e || null), o._inputContainerNode && o._updatePosition()
              }),
              h()(c()(o), '_handleFocusChange', function (e) {
                var t = P.a.getCount() > 0
                ;(o._rootContainerNode && o._rootContainerNode.contains(e.target)) ||
                  t ||
                  (o.state.showTypeaheadDropdown && o._dismissDropdown())
              }),
              h()(c()(o), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = o.state.showTypeaheadDropdown
                if (Object(N.g)(e)) {
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
              h()(c()(o), '_handleItemFocusChanged', function () {
                o.setState({ ariaDescendantId: Object(N.b)() })
              }),
              h()(c()(o), '_handleInputClear', function () {
                o.setQuery('')
              }),
              h()(c()(o), '_handleInputFocus', function () {
                o.setState({ showTypeaheadDropdown: !0 }), o._updatePosition(), o.props.onFocus && o.props.onFocus()
              }),
              h()(c()(o), '_handleInputChange', function (e) {
                o.setQuery(e.target.value), o._updatePosition()
              }),
              h()(c()(o), '_handleFormSubmit', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  o._inputRef && o._inputRef.blur(),
                  o.setState({ showTypeaheadDropdown: !1 }),
                  o.props.onDismiss && o.props.onDismiss(),
                  o.props.onSubmit && o.props.onSubmit()
              }),
              h()(c()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  r = n.onDismiss,
                  a = n.onItemClick,
                  i = n.shouldClearOnSelect,
                  s = n.shouldFocusOnClear,
                  c = i ? '' : o.state.query
                o.setState({ showTypeaheadDropdown: !1 }),
                  o._inputRef && (i && s ? o._inputRef.focus() : o._inputRef.blur()),
                  o.setQuery(c),
                  r && r(),
                  a && a(e, t)
              }),
              h()(c()(o), '_hasFocusedItem', function () {
                return o._dropdownRef && o._dropdownRef.hasFocusedItem()
              }),
              h()(c()(o), '_selectFocusedItem', function () {
                o._dropdownRef && o._dropdownRef.selectFocusedItem()
              }),
              h()(c()(o), '_focusNext', function () {
                o._dropdownRef && o._dropdownRef.focusNext()
              }),
              h()(c()(o), '_focusPrevious', function () {
                o._dropdownRef && o._dropdownRef.focusPrevious()
              }),
              (o.state = { ariaDescendantId: Object(N.b)(), query: e.initialValue, showTypeaheadDropdown: !1 }),
              (o._dropdownDomId = 'typeaheadDropdown-'.concat(z)),
              (z += 1),
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
                  return v.a.createElement(U.a, null, this._render)
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
      h()(H, 'defaultProps', {
        disableClearButton: !1,
        filter: [D.a.Users, D.a.Topics],
        isInSidebar: !1,
        initialValue: '',
        withSectionDivider: !0,
      }),
        h()(H, 'contextType', R.a)
      var V = O.a.create(function (e) {
        return {
          root: { flex: 1, flexDirection: 'column', position: 'relative', zIndex: x.d + 1 },
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
      var r = n('ERkP'),
        a = n.n(r),
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
          r = e.supportText,
          u = e.title,
          d = e.withNewTypeaheadUI
        return a.a.createElement(
          o.a,
          { style: [l.root, n] },
          a.a.createElement(
            o.a,
            { style: [l.coverContainer, d ? l.largeCellThumbnail : l.cellThumbnail] },
            t ? a.a.createElement(i.a, { accessibilityLabel: '', aspectMode: s.a.SQUARE, image: t }) : null,
          ),
          a.a.createElement(
            o.a,
            { style: l.bodyColumn },
            r ? a.a.createElement(c.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, r) : null,
            a.a.createElement(c.b, { numberOfLines: 2, weight: 'bold' }, u),
          ),
        )
      }
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return y
      }),
        n.d(t, 'a', function () {
          return v
        })
      var r = n('yiKp'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        s = (n('z84I'), n('Blm6'), n('lTEL'), n('7x/C'), n('kYxP'), n('LW0h'), n('lnti')),
        c = n('aWyx'),
        l = n('Yatk'),
        u = ['users'],
        d = ['conversation_id', 'participants'],
        p = ['conversation_id', 'participants', 'social_proof'],
        f = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.map(function (e) {
            return a()(
              a()({}, e),
              {},
              {
                user: Object(l.a)(t[e.user_id]) || {
                  created_at: '',
                  description: '',
                  entities: {},
                  followed_by: !1,
                  followers_count: 0,
                  following: !1,
                  friends_count: 0,
                  id: parseInt(e.user_id, 10),
                  id_str: e.user_id,
                  name: '',
                  profile_image_url_https: '',
                  protected: !1,
                  screen_name: '',
                  verified: !1,
                },
              },
            )
          })
        }
      function m(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = e.conversation_id,
            o = e.participants,
            s = i()(e, d)
          return a()(
            a()({ conversation_id: r }, s),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: h(o, n) },
          )
        },
        v = function (e, t, n) {
          var r = e.conversation_id,
            o = e.participants,
            d = e.social_proof,
            f = i()(e, p),
            y = a()(
              a()({ conversation_id: r }, f),
              {},
              { entries: m(r, t), participants: h(o, n), social_proof: void 0 },
            )
          return (
            d &&
              (y.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === c.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      r = i()(t, u)
                    return a()(
                      a()({}, r),
                      {},
                      {
                        users: Object(s.a)(
                          n.map(function (t) {
                            return Object(l.a)(e[t])
                          }),
                        ),
                      },
                    )
                  }
                  return t
                })
              })(d, n)),
            y
          )
        }
    },
    Gfoi: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
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
    'IMA+': function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        v = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        b = n('ERkP'),
        g = n.n(b),
        _ = n('TIdA'),
        w = n('t62R'),
        I = n('5mJL'),
        C = n('DNho'),
        x = n('nBUg'),
        E = n('qjak'),
        S = n('ir4X'),
        T = n('htQn'),
        D = n('e5HP'),
        k = n('FBXD'),
        R = n('Nqmc'),
        O = n('rHpw'),
        L = n('jhWN'),
        F = n('1I0O'),
        P = n('pBrB'),
        U = n('jV+4'),
        N = n('MWbm'),
        j = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        M = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        A = _.a.createLayoutCache(),
        z = { viewType: 'user_cell' },
        H = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.badgeContext,
                  r = t.disabledMessage,
                  a = t.displayNameLabel,
                  o = t.isBlocking,
                  i = t.isDisabled,
                  s = t.isFollowedBy,
                  c = t.isProtected,
                  l = t.isVerified,
                  u = t.name,
                  d = t.onScreenNameClick,
                  p = t.promotedContent,
                  f = t.promotedItemType,
                  h = t.screenName,
                  m = t.screenNameSuffix,
                  y = t.translatorType,
                  v = t.withFollowsYou,
                  b = t.withLink,
                  _ = g.a.createElement(U.a, {
                    badgeContext: n,
                    displayNameLabel: a,
                    isProtected: c,
                    isVerified: l,
                    name: u,
                    onLinkClick: d,
                    promotedContent: f === j.TWEET ? p : void 0,
                    screenName: h,
                    screenNameSuffix: m,
                    translatorType: y,
                    withFollowsYou: v && s,
                    withHoverCard: !o && !i && b,
                    withLink: !i && b,
                    withScreenName: !r,
                    withStackedLayout: !0,
                  })
                return r
                  ? g.a.createElement(
                      N.a,
                      { style: V.disabledMessageContainer },
                      _,
                      g.a.createElement(w.b, { color: 'gray700' }, r),
                    )
                  : _
              }),
              y()(u()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  r = t.displayMode,
                  a = t.socialContext
                return a
                  ? g.a.createElement(x.b.UseProps, null, function (e) {
                      return g.a.createElement(R.a, {
                        avatarSize: n,
                        contextType: a.contextType,
                        iconSize: 'large',
                        link: a.link,
                        style: V.socialContext,
                        text: a.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && r !== M.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              y()(u()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(E.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  r = n.Icon,
                  a = n.text
                return t
                  ? g.a.createElement(
                      N.a,
                      { style: V.userTypeaheadSocialContext },
                      g.a.createElement(N.a, { style: V.userTypeaheadSocialContextIcon }, r),
                      g.a.createElement(
                        w.b,
                        { color: 'gray700', numberOfLines: 1, style: V.userTypeaheadSocialContextText },
                        a,
                      ),
                    )
                  : null
              }),
              y()(u()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? g.a.createElement(S.a, { label: t }) : null
              }),
              y()(u()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [M.UserDetailed, M.UserConcise].indexOf(t)
              }),
              y()(u()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              y()(
                u()(e),
                '_handleClick',
                Object(k.a)(function (t) {
                  var n = e.props.onCellClick
                  t.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.accessibilityState,
                    r = e.avatarDecoration,
                    o = e.avatarSize,
                    i = e.avatarUri,
                    s = e.bottomControl,
                    c = e.decoration,
                    l = e.displayMode,
                    u = e.isBlocking,
                    d = e.isDisabled,
                    p = e.onAvatarClick,
                    f = e.onCellClick,
                    h = e.onScreenNameClick,
                    m = e.presenceIndicator,
                    y = e.promotedContent,
                    b = e.promotedItemType,
                    _ = e.screenName,
                    w = e.style,
                    x = e.testID,
                    E = e.userId,
                    S = e.withDarkerInteractiveBackground,
                    k = e.withInteractiveStyling,
                    R = e.withLink,
                    O = e.withUsernameCenterAligned,
                    P = R && !u,
                    U = l === M.UserCompact || O,
                    H = l === M.ExperimentalUserTypeahead,
                    q =
                      y && b === j.USER && 'earned' !== (y.disclosure_type && y.disclosure_type.toLowerCase())
                        ? g.a.createElement(D.a, { contentAuthorId: E, promotedContent: y, style: V.promotedIndicator })
                        : null,
                    B = {
                      accessibilityHidden: !0,
                      decoration: r,
                      focusable: !1,
                      imageLayoutCache: A,
                      onClick: p,
                      onHoverCardScreenNameClick: h,
                      promotedContent: y,
                      screenName: _,
                      style: V.avatar,
                      uri: i,
                      withHoverCard: P,
                      withLink: R,
                    },
                    W = g.a.createElement(C.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return m
                        ? g.a.createElement(F.a, a()({}, B, m, { size: t }))
                        : g.a.createElement(L.a, a()({ size: t }, B))
                    }),
                    G = n && 'boolean' == typeof n.checked,
                    K = void 0 !== f,
                    Y = (G ? 'radio' : K && 'button') || 'listitem',
                    Q = this._renderUserName(),
                    X = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = X || J || q || s,
                    $ = g.a.createElement(
                      g.a.Fragment,
                      null,
                      X,
                      J,
                      q,
                      s ? g.a.createElement(N.a, { style: V.bottomControl }, s) : null,
                    )
                  return g.a.createElement(
                    v.a,
                    { behavioralEventContext: z },
                    g.a.createElement(
                      T.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: Y,
                        accessibilityState: n,
                        disabled: !!d,
                        focusable: G || K,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [V.root, w],
                        testID: x,
                        withDarkerInteractiveBackground: S,
                        withInteractiveStyling: null != k ? k : !!f,
                      },
                      H ? null : this._renderSocialContext(),
                      g.a.createElement(
                        I.a,
                        {
                          avatarCell: W,
                          avatarCellStyle: [V.avatarColumn, U && V.bodyColumnCentered],
                          avatarSize: H ? 'xxxLarge' : o,
                          cellStyle: [V.bodyColumn, U && V.bodyColumnCentered],
                        },
                        g.a.createElement(N.a, { style: V.body }, Q, c),
                        U ? null : $,
                        H ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && U
                        ? g.a.createElement(
                            I.a,
                            { avatarCell: null, avatarCellStyle: V.avatarColumn, cellStyle: V.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.displayMode,
                    r = e.entities,
                    a = e.userId,
                    o = e.withheldDescription,
                    i = e.withheldEntities
                  return r && t && this._isEligibleForBio()
                    ? g.a.createElement(P.a, {
                        description: t,
                        entities: r,
                        isConcise: n === M.UserConcise,
                        style: V.bio,
                        userId: a,
                        withheldDescription: o,
                        withheldEntities: i,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      y()(H, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var V = O.a.create(function (e) {
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
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      t.a = H
    },
    OEYw: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        h = n.n(f),
        m = n('2VqO'),
        y = n.n(m),
        v = n('KEM+'),
        b = n.n(v),
        g = (n('7xRU'), n('LW0h'), n('7x/C'), n('z84I'), n('ERkP')),
        _ = n.n(g),
        w = n('RhWx'),
        I = n.n(w),
        C = (n('vrRf'), n('M+/F'), n('tQbP'), n('2G9S'), n('hqKg')),
        x = n('oEoC'),
        E = n('o52z'),
        S = n('kGix'),
        T = n('M0jS'),
        D = n('Qyxo'),
        k = n('lnti'),
        R = n('rxPX'),
        O = n('0KEI'),
        L =
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
        F = n('oEOe'),
        P = n('vy4g'),
        U = n('3A2y'),
        N = n('Y6L+'),
        j = n('9EWH'),
        M = n('Ssj5'),
        A = n('GZwR'),
        z = ['rounded_score', 'tokens'],
        H = ['rounded_score', 'tokens'],
        V = 'typeaheadV2',
        q = [],
        B = Object.freeze({
          REQUEST: 'rweb/typeaheadV2/FETCH_REQUEST',
          SUCCESS: 'rweb/typeaheadV2/FETCH_SUCCESS',
          FAILURE: 'rweb/typeaheadV2/FETCH_FAILURE',
        }),
        W = function (e, t) {
          var n = e.q,
            r = e.result_type,
            a = e.src,
            o = r
          return (
            null != t && t.communityId
              ? (o = ''.concat(r, '_').concat(t.communityId))
              : null != t && t.trustedFriendsId && (o = ''.concat(r, '_').concat(t.trustedFriendsId)),
            ''.concat(n, '_').concat(o, '_').concat(a)
          )
        },
        G = { remoteResults: {}, cachedIds: [] }
      var K = function (e) {
          return e.map(function (e) {
            var t = e.rounded_score,
              n = e.tokens,
              r = i()(e, z),
              a = r.topic,
              o = A.b.Topic
            return { id: ''.concat(o, '_').concat(a.replace(' ', '_')), type: o, tokens: n, rounded_score: t, data: r }
          })
        },
        Y = function (e) {
          return e.map(function (e) {
            var t,
              n = e.rounded_score,
              r = e.tokens,
              a = i()(e, H),
              o = A.b.Event,
              s = null == a || null === (t = a.url) || void 0 === t ? void 0 : t.match(N.A.id)
            return { id: (null == s ? void 0 : s[0]) || '', type: o, tokens: r, rounded_score: n, data: a }
          })
        },
        Q = function (e, t) {
          return e.typeaheadV2.remoteResults[t]
        },
        X = function (e, t) {
          return function (n, r) {
            var a = Q(r(), W(e, t)),
              o = a && a.timestamp
            return o && Date.now() - o <= 3e5 ? Promise.resolve() : n(J(e, t))
          }
        },
        J = function (e, t) {
          return function (n, r, a) {
            var o = a.api
            if (!e || !e.q || '' === e.q.trim()) return Promise.resolve()
            var i = { queryId: W(e, t) },
              s = t || {},
              c = s.communityId,
              l = s.trustedFriendsId,
              u = e.result_type.split(','),
              d = { actionTypes: B, context: 'FETCH_TYPEAHEAD', meta: i }
            if (u.includes(A.a.CommunityUsers) && c) {
              return Object(F.b)(n, {
                params: { communityId: c, prefix: e.q },
                request: o.Typeahead.fetchCommunityInviteUsers,
              })(d, function (e) {
                var t = ((null == e ? void 0 : e.invite_action_results) || {}).entities
                return t ? [Object(L.c)(t)] : void 0
              })
            }
            if (u.includes(A.a.CommunityMembers) && c) {
              return Object(F.b)(n, {
                params: { communityId: c, prefix: e.q },
                request: o.Typeahead.fetchCommunityMembers,
              })(d, function (e) {
                var t = ((null == e ? void 0 : e.user_community_relationships) || {}).entities
                return t ? [Object(L.c)(t)] : void 0
              })
            }
            return u.includes(A.a.TrustedFriendsSuggested) && l
              ? Object(F.b)(n, {
                  params: { trustedFriendsId: l, prefix: e.q },
                  request: o.Typeahead.fetchTrustedFriendsSuggestions,
                })(d)
              : Object(F.b)(n, { params: e, request: o.Typeahead.fetch })(d)
          }
        }
      M.a.register(
        b()({}, V, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case B.REQUEST:
              var n = t.meta.queryId
              return Object(j.a)(e, function (e) {
                e.remoteResults[n] || (e.remoteResults[n] = { fetchStatus: S.a.NONE }),
                  (e.remoteResults[n].fetchStatus = S.a.LOADING)
              })
            case B.SUCCESS:
              var r = t.meta.queryId,
                a = t.payload
              if (!a) return e
              var o = a.users.map(function (e) {
                  return Object(P.a)(e, A.c.Remote)
                }),
                i = {
                  fetchStatus: S.a.LOADED,
                  id: r,
                  orderedSections: a.ordered_sections,
                  events: Y(a.events),
                  topics: K(a.topics),
                  users: Object(A.i)(o),
                  timestamp: Date.now(),
                }
              return Object(j.a)(e, function (e) {
                ;(e.cachedIds = e.cachedIds.filter(function (e) {
                  return e !== r
                })),
                  e.cachedIds.push(r),
                  e.cachedIds.length >= 25 &&
                    (e.remoteResults = Object(U.a)(e.remoteResults, e.cachedIds.splice(0, 1))),
                  (e.remoteResults[r] = i)
              })
            case B.FAILURE:
              var s = t.meta.queryId
              return Object(j.a)(e, function (e) {
                e.remoteResults[s].fetchStatus = S.a.FAILED
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
            r = e.query,
            a = e.source,
            o = e.trustedFriendsId
          return W({ q: r, result_type: (n || $).join(','), src: a }, { communityId: t, trustedFriendsId: o })
        },
        te = function (e, t) {
          return (function (e, t) {
            var n = Q(e, t)
            return n && n.fetchStatus
          })(e, ee(t))
        },
        ne = function (e, t) {
          return (function (e, t) {
            var n = Q(e, t)
            return (n && n.users) || q
          })(e, ee(t))
        },
        re = function (e, t) {
          return (function (e, t) {
            var n = Q(e, t)
            return (n && n.topics) || q
          })(e, ee(t))
        },
        ae = function (e, t) {
          return (function (e, t) {
            var n = Q(e, t)
            return (n && n.events) || q
          })(e, ee(t))
        },
        oe = function (e, t) {
          return (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0)
        },
        ie = function () {
          return Object(C.createSelector)(
            ne,
            Object(C.createSelector)(
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.filter
              },
              Z.d,
              Z.e,
              function (e, t, n, r) {
                if (!e || !t || t.indexOf(A.a.Users) < 0) return Object(E.a)()
                var a = Object(Z.f)(n, e)
                return Object(A.i)(
                  a
                    .map(function (e) {
                      return r[e]
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
            function (e, t, n, r, a, o, i) {
              var s = Object(D.a)(r || [], function (e) {
                  return e.type === A.b.User ? e.data.id_str : void 0
                }),
                c = t.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                l = e.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                u = Object(x.a)(c, l).slice(0, i || 10),
                d = n === S.a.LOADED,
                p = o && o({ query: a, hasResults: !!e.length, isLoaded: d }),
                f = p ? [].concat(I()(u), [p]) : u
              return {
                users: f.length ? f : Object(E.a)(),
                userExactMatch: p,
                filteredPrefetchUsers: c,
                filteredRemoteUsers: l,
              }
            },
          )
        },
        se = function () {
          return Object(C.createSelector)(
            ie(),
            Object(C.createSelector)(
              re,
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
              function (e, t, n, r, a) {
                var o = t === S.a.LOADED,
                  i = a && a({ query: n, hasResults: !!e.length, isLoaded: o }),
                  s = e.slice(0, r || 3)
                return i && s.push(i), s.length ? s : Object(E.a)()
              },
            ),
            Object(C.createSelector)(
              ae,
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
              function (e, t, n, r, a) {
                var o = n && a && a.indexOf(A.a.Events) >= 0,
                  i = e.slice(0, r || 1)
                return i.length && o ? i : Object(E.a)()
              },
            ),
            function (e, t) {
              return t.injectedItems
            },
            function (e, t) {
              return t.orderResults
            },
            function (e, t, n, r, a) {
              var o = e.users,
                i = r && r.length ? r : null,
                s = a
                  ? a(
                      i,
                      o,
                      t,
                      n,
                      null == e ? void 0 : e.filteredRemoteUsers,
                      null == e ? void 0 : e.filteredPrefetchUsers,
                      null == e ? void 0 : e.userExactMatch,
                    )
                  : Object(k.a)([i, n.length ? n : void 0, t.length ? t : void 0, o.length ? o : void 0])
              return t.length || o.length || n.length ? s : i ? [i] : Object(E.a)()
            },
          )
        },
        ce = Object(R.a)()
          .propsFromState(function () {
            return { fetchStatus: te, items: se() }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT',
              ),
              fetchTypeaheadIfNeeded: X,
              fetchUsersPresenceIfNeeded: T.b.fetchManyIfNeeded,
              prefetchTypeaheadUsersIfNeeded: Z.b,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        le = n('8UdT'),
        ue = n('kIAd'),
        de = n('Rp9C'),
        pe = n('tAeL'),
        fe = n('v6aA'),
        he = n('VY6S'),
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
          'trustedFriendsId',
          'userLimit',
        ],
        ve = (function (e) {
          h()(n, e)
          var t = y()(n)
          function n(e, r) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e, r)),
              b()(p()(a), '_fetchTypeaheadResultsIfNeeded', function (e) {
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
                      { communityId: e.communityId, trustedFriendsId: e.trustedFriendsId },
                    )
                    .catch(e.createLocalApiErrorHandler({}))
              }),
              b()(p()(a), '_handleItemClick', function (e, t) {
                var n = a.props,
                  r = n.analytics,
                  o = n.onItemClick,
                  i = n.query
                o(e, t)
                var s = de.a.forTypeaheadResult(e, t),
                  c = s ? [s] : void 0
                r.scribe({ action: 'click', data: { search_details: { query: i }, targets: c } })
              }),
              b()(p()(a), '_scribeResults', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.items,
                  r = e.query
                t.scribe({
                  action: 'impression',
                  data: { items: de.a.forTypeaheadResults(n), search_details: { query: r } },
                })
              }),
              (a._debouncedFetchTypeaheadResultsIfNeeded = Object(he.a)(a._fetchTypeaheadResultsIfNeeded, 250)),
              (a.state = { shouldShowPrefetchResults: !0 }),
              a
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
                    r = n.createLocalApiErrorHandler,
                    a = n.fetchUsersPresenceIfNeeded,
                    o = n.filter,
                    i = n.items,
                    s = n.onItemsChanged,
                    c = n.query,
                    l = n.shouldDeferPrefetch,
                    u = n.source,
                    d = e.filter,
                    p = e.query,
                    f = e.source,
                    h = this.context.loggedInUserId,
                    m = this.context.featureSwitches.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') && h
                  if (null != i && i.length && i !== e.items && (this._scribeResults(), s && s(i), m)) {
                    var y = Object(me.a)(i)
                      .filter(function (e) {
                        return e.type === le.b.User
                      })
                      .map(function (e) {
                        return e.id
                      })
                    y && a(y).catch(r({}))
                  }
                  ;(c === p && o === d && u === f) ||
                    (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                    l &&
                      (clearTimeout(this._prefetchResultsTimer),
                      this.setState({ shouldShowPrefetchResults: !1 }),
                      (this._prefetchResultsTimer = setTimeout(function () {
                        t.props.query &&
                          t.props.fetchStatus !== S.a.LOADED &&
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
                    r =
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
                    c = (e.shouldDeferPrefetch, e.topicType, e.trustedFriendsId, e.userLimit, i()(e, ye)),
                    l = s && n !== S.a.LOADED,
                    u = l && !this.state.shouldShowPrefetchResults ? r : o
                  return _.a.createElement(
                    pe.a,
                    a()({}, c, { isLoading: !!l, items: u, onItemClick: this._handleItemClick, query: s, ref: t }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      b()(ve, 'contextType', fe.a),
        b()(ve, 'defaultProps', { filter: [A.a.Users], injectedItems: [], maxEvents: 3, maxTopics: 1 })
      var be = _.a.forwardRef(function (e, t) {
          return _.a.createElement(ve, a()({}, e, { dropdownRef: t }))
        }),
        ge = ce.forwardRef(be)
      t.a = ge
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('z84I'), n('ho0z'), n('ERkP')),
        i = n.n(o),
        s = n('MMRb'),
        c = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('MWbm'),
        p = n('jV+4'),
        f = n('pjBI'),
        h = n('t62R'),
        m = n('rHpw'),
        y = n('p9G8'),
        v = u.a.cfd94063,
        b = u.a.b93ba92c,
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        _ = m.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        w = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === s.CONVERSATION_TYPE.ONE_TO_ONE) {
              var o = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(o, 1)[0].name
            }
            return Object(y.a)(t, r)
          }
          var i = g(n)
          return Object(y.b)(i, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          o = e.isMessageSearchTitle,
          l = void 0 !== o && o,
          u = e.newConversationParticipants,
          m = e.perspective,
          w = e.renderTimestamp,
          I = e.textColor,
          C = void 0 === I ? 'text' : I,
          x = e.textSize,
          E = e.titleWeight,
          S = void 0 === E ? 'bold' : E,
          T = e.withParticipantsCount,
          D = void 0 !== T && T,
          k = e.withScreenName,
          R = void 0 === k || k,
          O = e.withVDLRefresh,
          L = void 0 !== O && O
        if (t) {
          var F = w ? w() : null
          if (t.type === s.CONVERSATION_TYPE.ONE_TO_ONE) {
            var P = Object(c.a)(t, m).map(function (e) {
                return e.user
              }),
              U = a()(P, 1)[0],
              N = i.a.createElement(p.a, {
                color: C,
                isProtected: U.protected,
                isVerified: U.verified,
                name: U.name,
                nameSize: x,
                screenName: U.screen_name,
                weight: S,
                withLink: !1,
                withScreenName: R,
              })
            return (L && !r) || l ? i.a.createElement(f.a, null, N, F) : N
          }
          var j = t.participants.length + (L ? -1 : 0)
          if (r)
            return i.a.createElement(
              f.a,
              { color: C },
              i.a.createElement(
                h.b,
                { color: C, numberOfLines: 1, size: x, style: _.title, weight: S },
                Object(y.a)(t, m, r),
              ),
              L
                ? null
                : i.a.createElement(
                    h.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: j }),
                  ),
            )
          var M = i.a.createElement(h.b, { color: C, numberOfLines: 1, size: x, weight: S }, Object(y.a)(t, m, r))
          return (L && !r) || l
            ? i.a.createElement(
                d.a,
                { style: _.dmGroup },
                i.a.createElement(f.a, null, M, F),
                D && i.a.createElement(h.b, { color: 'gray700', numberOfLines: 1, size: x }, b({ peopleCount: j })),
              )
            : M
        }
        var A = g(u)
        return i.a.createElement(h.b, { color: C, numberOfLines: 1, size: x, weight: S }, Object(y.b)(A, m))
      }
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('AQ79'),
        a = function (e, t) {
          return e[r.c] ? e[r.c].conversations[t] : null
        }
    },
    XnpN: function (e, t, n) {
      'use strict'
      var r = n('RhWx'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        s = (n('2G9S'), n('tQbP'), n('aWyx')),
        c = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        u = function (e, t) {
          return l(e.join_time) - l(t.join_time)
        },
        d = function (e, t) {
          var n = e.user,
            r = t.user
          return Object(c.a)(n.id_str, r.id_str)
        },
        p = function (e) {
          return (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return function (e, n) {
              return (
                t
                  .map(function (t) {
                    return t(e, n)
                  })
                  .filter(function (e) {
                    return !!e
                  })[0] || 0
              )
            }
          })(
            (function (e) {
              return function (t, n) {
                var r = t.user,
                  a = n.user
                switch (e) {
                  case r.id_str:
                    return -1
                  case a.id_str:
                    return 1
                  default:
                    return 0
                }
              }
            })(e),
            u,
            d,
          )
        },
        f = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          o = e.type,
          c = Object(f.a)(r, function (e) {
            return e.user.id_str === t
          }),
          l = i()(c, 2),
          u = l[0],
          d = l[1]
        return d.length ? (o === s.a.GROUP && 1 === d.length ? [].concat(a()(u), a()(d)) : n ? d.sort(p(n)) : d) : u
      }
    },
    Yatk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('1t7P'), n('jQ/y'), n('ho0z')
      var r = function (e) {
        if (e)
          return {
            blocking: e.blocking,
            can_dm: e.can_dm,
            can_media_tag: e.can_media_tag,
            created_at: e.created_at,
            description: e.description,
            entities: e.entities,
            followed_by: e.followed_by,
            followers_count: e.followers_count,
            following: e.following,
            friends_count: e.friends_count,
            id: e.id,
            id_str: e.id_str,
            name: e.name,
            profile_image_url_https: e.profile_image_url_https,
            protected: e.protected,
            screen_name: e.screen_name,
            verified: e.verified,
          }
      }
    },
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return be
      }),
        n.d(t, 'a', function () {
          return we
        })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('ho0z'), n('ERkP')),
        y = n.n(m),
        v = n('+Kfv'),
        b = 'typeaheadResult',
        g = n('v6aA'),
        _ = n('AQOc'),
        w = n('V5Qi'),
        I = n('G6rE'),
        C = n('rxPX'),
        x = function (e, t) {
          return t.conversationId
        },
        E = function (e, t) {
          return Object(w.a)(e, x(0, t))
        },
        S = Object(C.a)()
          .propsFromState(function () {
            return { conversationId: x, conversation: E, users: I.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              r = { conversation: void 0 }
            return null != t && t.data && (r.conversation = Object(_.b)(t.data, void 0, n)), r
          }),
        T = n('aA19'),
        D = n('OhSZ'),
        k = n('5mJL'),
        R = n('rHpw'),
        O = R.a.create(function (e) {
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
        L = S(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            r = e.isSelected,
            a = e.perspective,
            o = y.a.useContext(g.a).featureSwitches,
            i = o.isTrue('dm_vdl_enabled') && o.isTrue('dm_vdl_inbox_p0_enabled')
          return t
            ? y.a.createElement(
                k.a,
                {
                  avatarCell: y.a.createElement(T.a, { conversation: t, perspective: a, size: 'xLarge' }),
                  avatarCellStyle: O.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: O.bodyColumn,
                  style: [O.root, !r && n && O.disabled],
                },
                y.a.createElement(D.b, {
                  conversation: t,
                  perspective: a,
                  withParticipantsCount: !0,
                  withVDLRefresh: i,
                }),
                we({ isSelected: r }),
              )
            : null
        }),
        F = (n('uFXj'), n('MWbm')),
        P = n('LbZ7'),
        U = n('t62R'),
        N = n('9Xij'),
        j = n('TIdA'),
        M = n('A91F'),
        A = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.event,
                    n = e.image,
                    r = e.supportText
                  return y.a.createElement(
                    F.a,
                    { style: H.root },
                    y.a.createElement(
                      P.a,
                      { withGutter: !0 },
                      y.a.createElement(
                        F.a,
                        { style: H.bodyColumn },
                        r ? y.a.createElement(U.b, { color: 'gray700', size: 'subtext2' }, r) : null,
                        y.a.createElement(U.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? y.a.createElement(
                            F.a,
                            { style: H.coverContainer },
                            y.a.createElement(
                              N.a,
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
        z = '100px',
        H = R.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: z,
              maxWidth: z,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        V = A,
        q = n('5T6p'),
        B =
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
        W = n.n(B)
      var G = n('FiRh'),
        K = n('j7Bv'),
        Y = n('EHV7'),
        Q = n('Gfoi')
      var X = R.a.create(function (e) {
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
        J = function (e) {
          var t = y.a.useContext(g.a).featureSwitches,
            n = e.isDisabled,
            r = e.query,
            a = e.resultContext,
            o = e.showIcon,
            i = e.style,
            s = (function (e, t) {
              var n,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = W()(e),
                o = e.toLowerCase().indexOf(t.toLowerCase()),
                i = o + t.length
              if (0 === a.length) {
                var s = r ? [o > 0 ? [0, o] : void 0, [i, e.length]].filter(Boolean) : [[o, i]]
                n = [{ highlights: -1 !== o ? s : void 0, text: e, entityType: 'text', prefix: '' }]
              } else {
                var c = a.flatMap(function (t, n, r) {
                    var a = t.indices,
                      o = 0 === n ? 0 : r[n - 1].indices[1],
                      i = n === r.length - 1,
                      s = []
                    return (
                      o !== a[0] && s.push(e.slice(o, a[0])),
                      s.push(e.substring(a[0], a[1])),
                      i && e.length !== a[1] && s.push(e.slice(a[1])),
                      s
                    )
                  }),
                  l = 0,
                  u = c.map(function (e, t, n) {
                    l += t > 0 ? n[t - 1].length : 0
                    var r = e.length
                    return { runningTotal: l, containsQuery: -1 !== o && l + r >= o && l < i }
                  })
                n = c.map(function (e, t) {
                  var n,
                    a,
                    s = u[t],
                    c = s.containsQuery,
                    l = s.runningTotal,
                    d = e.includes('#')
                  if (r && !c) a = [[0, e.length]]
                  else if (c) {
                    var p = l < o ? o - l : 0,
                      f = l + e.length < i ? e.length : i - l,
                      h = d ? p - 1 : p,
                      m = d ? f - 1 : f
                    a = r
                      ? [h > 0 ? [0, h] : void 0, m !== e.length - 1 ? [m, e.length] : void 0].filter(Boolean)
                      : [[h, m]]
                  }
                  var y = d ? ''.concat(null == e ? void 0 : e.replace('#', '')) : e
                  return {
                    highlights: null !== (n = a) && void 0 !== n && n.length ? a : void 0,
                    text: y,
                    entityType: d ? 'hashtag' : 'text',
                    prefix: d ? '#' : '',
                  }
                })
              }
              return n
            })(e.topic, t.isTrue('responsive_web_typeahead_reverse_bolding_enabled') ? r : '', true),
            c = y.a.createElement(
              U.b,
              null,
              s.map(function (e, t) {
                return y.a.createElement(G.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            l = y.a.createElement(
              y.a.Fragment,
              null,
              c,
              a
                ? y.a.createElement(
                    F.a,
                    { style: X.context },
                    a && a.types[0] && 'followable_topic' === a.types[0].type
                      ? y.a.createElement(Y.a, { style: X.icon })
                      : null,
                    y.a.createElement(U.b, { color: 'gray700' }, a.display_string || ' '),
                  )
                : null,
            )
          return y.a.createElement(
            F.a,
            { style: [X.root, n && X.disabled, i] },
            o
              ? (function (e) {
                  var t = y.a.createElement(K.a, { Icon: Q.a, color: 'neutral', size: 'xxxLarge', style: X.searchIcon })
                  return y.a.createElement(
                    k.a,
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
        Z = (n('yH/f'), n('M0jS')),
        $ = function (e, t) {
          return Object(Z.c)(e, t.userId)
        },
        ee = Object(C.a)().propsFromState(function () {
          return { userSpace: $ }
        }),
        te = n('3XMw'),
        ne = n.n(te),
        re = n('tocL'),
        ae = 'TypeaheadUser',
        oe = n('GZwR'),
        ie = n('IMA+'),
        se = ne.a.ae2205d1,
        ce = ne.a.d960b55b,
        le = ne.a.fd06b02f,
        ue = Object.freeze({
          num_of_followers: re.a.Follow,
          bio: re.a.TextOnly,
          location: re.a.Location,
          num_tweets: re.a.NewTweets,
          follow_relationship: re.a.Follow,
          followers_follow: re.a.Follow,
          social_proof: re.a.SocialProof,
          follow_relationship_mutual_follow: re.a.FollowMutual,
          follow_relationship_followed: re.a.FollowFollowed,
          follow_relationship_following: re.a.FollowFollowing,
        }),
        de = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              h()(c()(e), '_handleClick', function () {
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUri,
                    n = e.decoration,
                    r = e.disabledMessage,
                    a = e.displayNameLabel,
                    o = e.isDisabled,
                    i = e.isProtected,
                    s = e.isVerified,
                    c = e.name,
                    l = e.screenName,
                    u = e.source,
                    d = e.userId,
                    p = e.userSpace,
                    f = e.withNewTypeaheadUI,
                    h = this.context.featureSwitches,
                    m = this._getSocialContext(),
                    v = this._getResultContext() || m,
                    b = u === oe.d.SearchBox,
                    g = p && h.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
                  return (
                    g && (g.accessibilityLabel = le({ screenName: l })),
                    y.a.createElement(ie.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: o ? r : void 0,
                      displayMode: f ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      displayNameLabel: a,
                      isDisabled: o,
                      isProtected: i,
                      isVerified: s,
                      name: c,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: b ? g : void 0,
                      screenName: l,
                      socialContext: v,
                      testID: ae,
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
                    return { contextType: re.a.Follow, text: t }
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
                      contextType: (t.types.length ? ue[t.types[0].type] : void 0) || re.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      h()(de, 'contextType', g.a), h()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(de),
        fe = n('htQn'),
        he = n('iySH'),
        me = n('IMYl'),
        ye = { viewType: 'typeahead_result' },
        ve = function (e) {
          return e.children
        }
      function be(e) {
        return y.a.createElement(ve, { item: e.item }, y.a.createElement(ge, e))
      }
      var ge = (function (e) {
        u()(n, e)
        var t = p()(n)
        function n(e, r) {
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            h()(c()(o), '_onViewRef', function (e) {
              o._viewRef = e
              var t = o.props.onRef
              t && t(e)
            }),
            h()(c()(o), '_handleClick', function () {
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
                  r = e.isFocused,
                  a = e.isInMultiSelect,
                  o = e.isSelected,
                  i = e.style
                return y.a.createElement(
                  v.a,
                  { behavioralEventContext: ye },
                  y.a.createElement(
                    F.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!a || !o) || void 0,
                        selected: n ? void 0 : (a && o) || (!a && !!r),
                      },
                      nativeID: t,
                      testID: b,
                    },
                    y.a.createElement(
                      fe.a,
                      {
                        accessibilityRole: a ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [r && _e.focused, _e.transitionStyles, this._loaded && _e.loaded, i],
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
                  r = e.isDisabled,
                  a = e.isSelected,
                  o = e.item,
                  i = e.onClick,
                  s = e.renderUserDecoration,
                  c = e.source
                switch (o.type) {
                  case oe.b.User:
                    var l = o.data,
                      u = s ? s({ userId: l.id_str, user: l, isSelected: a }) : void 0,
                      d = n ? n(o, l) : void 0
                    return y.a.createElement(pe, {
                      avatarUri: l.profile_image_url_https,
                      canDm: !!l.can_dm,
                      canMediaTag: !!l.can_media_tag,
                      decoration: u || void 0,
                      disabledMessage: t,
                      displayNameLabel: d,
                      isDisabled: r,
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
                      ? y.a.createElement(q.a, {
                          image: p.primary_image && p.primary_image.original_info,
                          style: _e.itemPadding,
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
                    var f = this.props.query,
                      h = o.data,
                      m = c === oe.d.SearchBox
                    return y.a.createElement(J, {
                      isDisabled: r,
                      query: f || '',
                      resultContext: h.result_context,
                      showIcon: m,
                      style: m ? _e.itemPadding : void 0,
                      topic: h.topic,
                    })
                  case oe.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      y.a.createElement(L, {
                        conversationId: o.id,
                        isDisabled: r,
                        isSelected: a,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case oe.b.SettingGroup:
                    var v = o.data.text
                    return y.a.createElement(
                      F.a,
                      { style: _e.navigationLink },
                      y.a.createElement(U.b, { style: _e.content, weight: 'bold' }, v),
                      y.a.createElement(he.a, { style: _e.icon }),
                    )
                  case oe.b.Setting:
                    var b = o.data.text
                    return y.a.createElement(
                      F.a,
                      { style: _e.navigationLink },
                      y.a.createElement(U.b, { style: _e.content }, b),
                      y.a.createElement(he.a, { style: _e.icon }),
                    )
                  case oe.b.NoResult:
                    var g = o.data.text
                    return y.a.createElement(U.b, { style: _e.noResult }, g)
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
      h()(ge, 'contextType', g.a)
      var _e = R.a.create(function (e) {
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
          return e.isSelected ? y.a.createElement(me.a, { accessibilityHidden: !0, style: _e.checkIcon }) : null
        }
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('aWyx'),
        i = n('XnpN'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('aI6n'),
        u = n('rHpw'),
        d = n('TIdA'),
        p = n('A91F'),
        f = n('jhWN'),
        h = n('9Xij'),
        m = n('Znyr'),
        y = n('cm6r'),
        v = n('U+bB'),
        b = n('MWbm'),
        g = c.a.fd48249b,
        _ = u.a.create(function (e) {
          return {
            circle: { borderRadius: e.borderRadii.infinite, overflow: 'hidden' },
            container: { height: 'auto', width: '100%' },
            itemAccessory: {
              top: -e.spacesPx.space24 + e.spacesPx.space1,
              right: -e.spacesPx.space16 - e.spacesPx.space1,
            },
            userDecoration: {
              fontSize: e.fontSizes.subtext3,
              position: 'absolute',
              backgroundColor: e.colors.gray100,
              marginLeft: e.spaces.space8,
              boxSizing: 'border-box',
              width: e.spaces.space24,
              height: e.spaces.space24,
            },
          }
        }),
        w = u.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            left: { flex: 1 },
            right: {
              flex: 1,
              marginLeft: e.borderWidths.small,
              marginRight: 'calc(-1 * '.concat(e.borderWidths.small, ')'),
            },
          }
        }),
        I = u.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        C = function (e) {
          var t = e.left,
            n = e.right
          return a.a.createElement(
            b.a,
            { style: w.container },
            a.a.createElement(b.a, { style: w.left }, t),
            a.a.createElement(b.a, { style: w.right }, n),
          )
        },
        x = function (e) {
          var t = e.bottom,
            n = e.top
          return a.a.createElement(
            b.a,
            { style: I.container },
            a.a.createElement(b.a, { style: I.top }, n),
            a.a.createElement(b.a, { style: I.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size
            return a.a.createElement(
              b.a,
              { key: t.id_str, style: _.container },
              a.a.createElement(f.a, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var r = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return a.a.createElement(
                  b.a,
                  { key: e.id_str, style: _.container },
                  a.a.createElement(f.a, {
                    aspectRatio: r,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return a.a.createElement(h.a, { ratio: 1 }, a.a.createElement(C, { left: n[1], right: n[0] }))
            var r = a.a.createElement(x, { bottom: n[2], top: n[1] }),
              o = n[0]
            return a.a.createElement(C, { left: r, right: o })
          },
          r = e.conversation,
          s = e.link,
          c = e.perspective,
          w = e.withBadge,
          I = r && r.avatar_image_https,
          E = r
            ? Object(i.a)(r, c).map(function (e) {
                return e.user
              })
            : [],
          S = E.slice(0, 3),
          T =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? a.a.createElement(d.a, {
                    accessibilityLabel: '',
                    aspectMode: p.a.SQUARE,
                    backgroundColor: u.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(r) ||
            (function (e) {
              return e ? a.a.createElement(v.a, { source: e }) : null
            })(I) ||
            (function (e) {
              var r = e.length
              return 0 === r ? null : 1 === r ? t(e[0]) : a.a.createElement(b.a, { style: _.circle }, n(e))
            })(S),
          D =
            s ||
            (function (e, t) {
              if (e)
                return e.type === o.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === o.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(r, E),
          k = w && null != r && r.participants ? r.participants.length - 1 : 0
        return T
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                h.a,
                { ratio: 1 },
                D ? a.a.createElement(y.a, { interactiveStyles: null, link: D, testID: l.a.conversationAvatar }, T) : T,
              ),
              k
                ? (function (e) {
                    var t = e.badgeCount
                    return a.a.createElement(
                      b.a,
                      { style: _.itemAccessory },
                      a.a.createElement(m.a, {
                        count: t,
                        standalone: !0,
                        style: _.userDecoration,
                        textColor: 'text',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: g,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: k })
                : null,
            )
          : null
      }
    },
    aI6n: function (e, t, n) {
      'use strict'
      t.a = {
        conversationAvatar: 'DM_Conversation_Avatar',
        newDM: 'NewDM_Button',
        untrustedThumbnail: 'DM_Untrusted_Thumbnail',
      }
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        p = n.n(d),
        f = n('ERkP'),
        h = n.n(f),
        m = n('t62R'),
        y = n('3XMw'),
        v = n.n(y),
        b = n('rHpw'),
        g = n('MWbm'),
        _ = n('yiKp'),
        w = n.n(_),
        I = n('Lsrn'),
        C = n('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [I.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            h.a.createElement(
              'g',
              null,
              h.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      x.metadata = { width: 24, height: 24 }
      var E = x,
        S = n('uFYP'),
        T = v.a.f1a1b790,
        D = v.a.if2bf8b3,
        k = v.a.f3624b5c,
        R = v.a.b4b3b113,
        O = v.a.be22205f,
        L = v.a.hcbbe447,
        F = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.nativeID,
                    r = e.style,
                    a = e.withCircleIcon ? E : S.a
                  return h.a.createElement(
                    g.a,
                    { style: [P.root, r] },
                    h.a.createElement(a, { style: [P.icon, t && P[t]] }),
                    h.a.createElement(m.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    r = e.promotedContent,
                    a = r.adMetadataContainer,
                    o = r.advertiser,
                    i = r.advertiser_name,
                    s = r.disclosure_type,
                    c = t && o && t === o.id_str,
                    l = 'string' == typeof s && 'political' === s.toLowerCase(),
                    u = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    d = !(!a || 'POLITICAL' !== a.disclaimerType) || l,
                    p = !(!a || 'ISSUE' !== a.disclaimerType) || u,
                    f = (a || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!i || c || f
                      ? d
                        ? k
                        : p
                        ? O
                        : D
                      : d
                      ? R({ fullName: i })
                      : p
                      ? L({ fullName: i })
                      : T({ fullName: i }))
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(F, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var P = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('0vv5'),
        a = 500,
        o = {
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
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('VPAj'),
        a = Object(r.a)([])
      Object(r.a)({})
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return f
        }),
        n.d(t, 'a', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'f', function () {
          return v
        })
      var r = n('RhWx'),
        a = n.n(r),
        o = n('yiKp'),
        i = n.n(o),
        s =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        c = n('kIAd'),
        l = n('rHpw')
      function u(e, t) {
        var n,
          r = c.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? i()(i()({}, r.scope), {}, { src: t, q: a }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(c.b.WordEnd),
          o = a >= 0 ? n.slice(a) : '',
          i = r.search(c.b.WordBoundary),
          s = o + r.slice(0, i)
        return s.trim() ? { start: a, end: e + i, word: s } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function f(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function h(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(o))
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
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('ho0z'), n('z84I'), n('LW0h'), n('7x/C'), n('Xrkv')),
        i = n('aWyx'),
        s = n('XnpN'),
        c = n('3XMw'),
        l = n.n(c),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          a = e.name,
          o = e.participants,
          c = void 0 === o ? {} : o
        if (r === i.a.GROUP && a) return a
        if (c.length) {
          if (r === i.a.GROUP && n) return u
          var l = Object(s.a)(e, t).map(function (e) {
            return e.user
          })
          return f(l, t, r)
        }
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a.GROUP,
          r = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (r.length) {
          case 0:
            return d
          case 1:
            var s = a()(r, 1),
              c = s[0]
            return n === i.a.GROUP ? p({ name: c }) : c
          default:
            var l = !0
            return Object(o.a)(r, l)
        }
      }
    },
    tAeL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return j
      })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        y = n.n(m),
        v = n('+Kfv'),
        b = n('0yYu'),
        g = n('7nmT'),
        _ = n.n(g),
        w = n('ddV6'),
        I = n.n(w),
        C = n('3XMw'),
        x = n.n(C),
        E = n('kIAd'),
        S = n('JYMr'),
        T = n('rHpw'),
        D = x.a.f2b3fe06,
        k = T.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        R = function (e) {
          var t = e.isLoading,
            n = y.a.useState(!1),
            r = I()(n, 2),
            a = r[0],
            o = r[1]
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
            y.a.createElement(S.a, { ariaValueText: a ? D : '', indeterminate: a, style: !a && k.hidden })
          )
        },
        O = n('ZcYN'),
        L = n('MWbm'),
        F = n('oQhu'),
        P = n('w6IS'),
        U = n('MXDK'),
        N = { viewType: 'typeahead_dropdown' },
        j = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e)),
              h()(c()(o), '_setFocusedItemRef', function (e) {
                o._shouldScrollToFocusedItem &&
                  e &&
                  (Object(U.c)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
              }),
              h()(c()(o), '_resetScroll', function () {
                var e = o._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              h()(
                c()(o),
                '_getFlattenedItems',
                Object(F.a)(function (e) {
                  return Object(P.a)(e)
                }),
              ),
              h()(c()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  r = n.items,
                  a = n.onItemClick,
                  i = o._getFlattenedItems(r).indexOf(e)
                e && !t && !o._shouldBlockInteractivity && a(e, i), o._resetFocus()
              }),
              h()(c()(o), '_getResultCount', function () {
                var e = o.props.items
                return o._getFlattenedItems(e).length
              }),
              h()(c()(o), '_setFocusIndex', function (e, t) {
                var n = o.props,
                  r = n.items,
                  a = n.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), a && a(o._getFlattenedItems(r)[e])
              }),
              h()(c()(o), '_resetFocus', function () {
                o._setFocusIndex(o.props.withItemAlwaysSelected ? 0 : -1)
              }),
              h()(c()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              h()(c()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              }),
              h()(c()(o), 'hasFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                return e >= 0 && t > e
              }),
              h()(c()(o), 'selectFocusedItem', function () {
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
                    r = t.isLoading,
                    a = t.items,
                    o = t.renderCallout,
                    i = t.renderHeader,
                    s = t.renderNoResultsState,
                    c = t.selectedItems,
                    l = t.style,
                    u = !(!r && !a.length),
                    d = 0,
                    p = !!c
                  return u
                    ? y.a.createElement(
                        v.a,
                        { behavioralEventContext: N },
                        y.a.createElement(
                          L.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: l },
                          o ? o() : null,
                          y.a.createElement(R, { isLoading: !!r }),
                          i ? i() : null,
                          a.length
                            ? a.map(function (t, n) {
                                var r = !Array.isArray(a[n - 1]) && n > 0,
                                  o = n < a.length - 1,
                                  i = Array.isArray(t)
                                    ? e._renderTypeaheadGroup(t, d, r, o)
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
                value: function (e, t, n, r) {
                  var a = this,
                    o = this.props.withSectionDivider
                  return y.a.createElement(
                    y.a.Fragment,
                    { key: 'typeaheadGroup-'.concat(t) },
                    o && n ? y.a.createElement(b.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                    e.map(function (e, n) {
                      return a._renderTypeaheadItem(e, t + n)
                    }),
                    o && r ? y.a.createElement(b.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
                  )
                },
              },
              {
                key: '_renderTypeaheadItem',
                value: function (e, t) {
                  var n = this.props,
                    r = n.ariaDescendantId,
                    a = n.getItemDisabledMessage,
                    o = n.getItemIsDisabled,
                    i = n.getUserDisplayNameLabel,
                    s = n.query,
                    c = n.renderUserDecoration,
                    l = n.selectedItems,
                    u = n.source,
                    d = this.state.focusIndex,
                    p = !(!l || !e.id) && l.indexOf(e.id) >= 0,
                    f = !!l,
                    h = d === t,
                    m = o && o(e, e.data),
                    v = a && a(e, e.data)
                  return y.a.createElement(O.b, {
                    disabledMessage: v,
                    domId: h ? r : void 0,
                    getUserDisplayNameLabel: i,
                    isDisabled: m,
                    isFocused: h,
                    isInMultiSelect: f,
                    isSelected: p,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: h ? this._setFocusedItemRef : void 0,
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
                    var e = Object(U.a)(_.a.findDOMNode(this))
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
    uFYP: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    woHV: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
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
        return Object(s.a)('form', a()(a()({}, n), {}, { action: '#', style: [c.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
