;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
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
          return q
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
        d = n.n(l),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('uFXj'), n('LW0h'), n('7x/C'), n('3EFP')),
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
        L = n('rHpw'),
        O = n('xoZN'),
        F = n('6OUF'),
        U = n('pf9B'),
        P = n('cHvH'),
        N = n('oEoC'),
        j = I.a.f065ba8c,
        M = { viewType: 'typeahead_input' },
        A = function (e) {
          return E.a.isTwoColumnNormalLayout(e)
            ? {
                width: b.a.columnWidths.secondary.normal + L.a.theme.spacesPx.space24,
                left: -L.a.theme.spacesPx.space24 / 2,
              }
            : E.a.isTwoColumnSmallLayout(e)
            ? {
                width: b.a.columnWidths.secondary.small + L.a.theme.spacesPx.space16,
                left: -L.a.theme.spacesPx.space16 / 2,
              }
            : void 0
        },
        H = 1,
        q = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              m()(c()(o), '_withNewTypeaheadUI', !1),
              m()(c()(o), '_render', function (e) {
                var t = e.windowWidth,
                  n = o.props,
                  a = n.alwaysOpen,
                  r = n.disableClearButton,
                  i = n.forceVdlDisable,
                  s = n.inputStyle,
                  c = n.isCompact,
                  l = n.isOnHomepage,
                  d = n.placeholder,
                  u = n.renderInSearchField,
                  p = n.rounded,
                  h = n.shouldAutoFocus,
                  m = n.shouldFocusOnClear,
                  f = n.style,
                  y = n.testID,
                  b = o.state.showTypeaheadDropdown || a
                return v.a.createElement(
                  g.a,
                  { behavioralEventContext: M },
                  v.a.createElement(
                    k.a,
                    { onLayout: o._handleLayout, ref: o._setRootContainerNode, style: [V.root, f] },
                    v.a.createElement(
                      O.a,
                      { onKeyDown: o._handleKeyDown, style: V.keydownInputListener },
                      v.a.createElement(
                        _.a,
                        {
                          accessibilityLabel: d,
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
                            autoFocus: h,
                            contentBelow: u && u(),
                            focusOnClear: m,
                            isCompact: c,
                            leftAligned: l,
                            onChange: o._handleInputChange,
                            onClear: o._handleInputClear,
                            onFocus: o._handleInputFocus,
                            onLayout: o._handleInputLayoutChanged,
                            placeholder: d,
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
                          k.a,
                          { style: [V.typeaheadContainer, !p && V.topBorder] },
                          b ? o._renderDropdown(t) : null,
                        ),
                      ),
                    ),
                  ),
                )
              }),
              m()(c()(o), '_renderDropdown', function (e) {
                var t = o.props,
                  n = t.communityId,
                  a = t.filter,
                  r = t.getItemDisabledMessage,
                  i = t.getItemIsDisabled,
                  s = t.getTopicExactMatch,
                  c = t.getUserDisplayNameLabel,
                  l = t.getUserExactMatch,
                  d = t.injectedItems,
                  u = t.isInSidebar,
                  p = t.isModal,
                  h = t.isOnHomepage,
                  m = t.maxEvents,
                  f = t.maxTopics,
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
                  k = t.withFixedPositioning,
                  R = t.withSectionDivider,
                  O = e >= L.a.theme.breakpoints.medium || Object(S.a)(),
                  F = o.state,
                  U = F.dropdownOffset,
                  P = F.query,
                  j = p
                    ? V.modalDropdown
                    : [
                        V.dropdown,
                        !O && k && U ? [Object(N.d)(U), { height: 'calc(100vh - '.concat(U, 'px)') }] : null,
                        (O || h) && V.wideModeDropdown,
                        o._withNewTypeaheadUI && u && A(e),
                        h && V.shortModeDropdown,
                        !O && h && V.shortModeDropdownMobile,
                      ],
                  M = {
                    ariaDescendantId: o.state.ariaDescendantId,
                    domId: o._dropdownDomId,
                    onDismiss: o._handleOnEmptyStateDismiss,
                    onItemFocusChanged: o._handleItemFocusChanged,
                    ref: o._handleDropdownRef,
                    style: j,
                  }
                return _ && !P
                  ? _(M)
                  : v.a.createElement(T.a, {
                      ariaDescendantId: o.state.ariaDescendantId,
                      communityId: n,
                      domId: o._dropdownDomId,
                      filter: a,
                      getItemDisabledMessage: r,
                      getItemIsDisabled: i,
                      getTopicExactMatch: s,
                      getUserDisplayNameLabel: c,
                      getUserExactMatch: l,
                      injectedItems: d,
                      maxEvents: m,
                      maxTopics: f,
                      onItemClick: o._handleItemClick,
                      onItemFocusChanged: o._handleItemFocusChanged,
                      onItemsChanged: y,
                      orderResults: b,
                      query: P,
                      ref: o._handleDropdownRef,
                      renderCallout: g,
                      renderHeader: w,
                      renderNoResultsState: I,
                      renderUserDecoration: C,
                      selectedItems: x,
                      shouldDeferPrefetch: E,
                      source: D,
                      style: j,
                      withSectionDivider: R,
                    })
              }),
              m()(c()(o), '_dismissDropdown', function () {
                o.setState({ showTypeaheadDropdown: !1 }), o.props.onDismiss && o.props.onDismiss()
              }),
              m()(c()(o), '_handleOnEmptyStateDismiss', function () {
                o._dismissDropdown(), o._inputRef && o._inputRef.blur()
              }),
              m()(c()(o), '_handleLayout', function () {
                o._updatePosition()
              }),
              m()(c()(o), '_handleInputLayoutChanged', function () {
                o._updatePosition()
              }),
              m()(c()(o), '_updatePosition', function () {
                if (o._inputContainerNode) {
                  var e = o._inputContainerNode.getBoundingClientRect().bottom
                  e !== o.state.dropdownOffset && o.setState({ dropdownOffset: e })
                }
              }),
              m()(c()(o), '_handleDropdownRef', function (e) {
                o._dropdownRef = e
              }),
              m()(c()(o), '_setRootContainerNode', function (e) {
                o._rootContainerNode = e || null
              }),
              m()(c()(o), '_setInputRef', function (e) {
                o._inputRef = e
              }),
              m()(c()(o), '_setInputContainerNode', function (e) {
                ;(o._inputContainerNode = e || null), o._inputContainerNode && o._updatePosition()
              }),
              m()(c()(o), '_handleFocusChange', function (e) {
                var t = U.a.getCount() > 0
                ;(o._rootContainerNode && o._rootContainerNode.contains(e.target)) ||
                  t ||
                  (o.state.showTypeaheadDropdown && o._dismissDropdown())
              }),
              m()(c()(o), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = o.state.showTypeaheadDropdown
                if (Object(N.g)(e)) {
                  if (t === f.a) return o._focusNext(), void e.preventDefault()
                  if (t === f.b) return o._focusPrevious(), void e.preventDefault()
                  if (t === f.d) return o._dismissDropdown(), void e.preventDefault()
                  if (t !== f.f)
                    return t === f.c && o._hasFocusedItem()
                      ? (o._selectFocusedItem(), void e.preventDefault())
                      : void (n || o.setState({ showTypeaheadDropdown: !0 }))
                  o._dismissDropdown()
                }
              }),
              m()(c()(o), '_handleItemFocusChanged', function () {
                o.setState({ ariaDescendantId: Object(N.b)() })
              }),
              m()(c()(o), '_handleInputClear', function () {
                o.setQuery('')
              }),
              m()(c()(o), '_handleInputFocus', function () {
                o.setState({ showTypeaheadDropdown: !0 }), o._updatePosition(), o.props.onFocus && o.props.onFocus()
              }),
              m()(c()(o), '_handleInputChange', function (e) {
                o.setQuery(e.target.value), o._updatePosition()
              }),
              m()(c()(o), '_handleFormSubmit', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  o._inputRef && o._inputRef.blur(),
                  o.setState({ showTypeaheadDropdown: !1 }),
                  o.props.onDismiss && o.props.onDismiss(),
                  o.props.onSubmit && o.props.onSubmit()
              }),
              m()(c()(o), '_handleItemClick', function (e, t) {
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
              m()(c()(o), '_hasFocusedItem', function () {
                return o._dropdownRef && o._dropdownRef.hasFocusedItem()
              }),
              m()(c()(o), '_selectFocusedItem', function () {
                o._dropdownRef && o._dropdownRef.selectFocusedItem()
              }),
              m()(c()(o), '_focusNext', function () {
                o._dropdownRef && o._dropdownRef.focusNext()
              }),
              m()(c()(o), '_focusPrevious', function () {
                o._dropdownRef && o._dropdownRef.focusPrevious()
              }),
              (o.state = { ariaDescendantId: Object(N.b)(), query: e.initialValue, showTypeaheadDropdown: !1 }),
              (o._dropdownDomId = 'typeaheadDropdown-'.concat(H)),
              (H += 1),
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
                  return v.a.createElement(P.a, null, this._render)
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
      m()(q, 'defaultProps', {
        disableClearButton: !1,
        filter: [D.a.Users, D.a.Topics],
        isInSidebar: !1,
        initialValue: '',
        withSectionDivider: !0,
      }),
        m()(q, 'contextType', R.a)
      var V = L.a.create(function (e) {
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
      t.default = q
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
          d = e.title,
          u = e.withNewTypeaheadUI
        return r.a.createElement(
          o.a,
          { style: [l.root, n] },
          r.a.createElement(
            o.a,
            { style: [l.coverContainer, u ? l.largeCellThumbnail : l.cellThumbnail] },
            t ? r.a.createElement(i.a, { accessibilityLabel: '', aspectMode: s.a.SQUARE, image: t }) : null,
          ),
          r.a.createElement(
            o.a,
            { style: l.bodyColumn },
            a ? r.a.createElement(c.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, a) : null,
            r.a.createElement(c.b, { numberOfLines: 2, weight: 'bold' }, d),
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
    'IMA+': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        p = n.n(u),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
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
        L = n('rHpw'),
        O = n('jhWN'),
        F = n('1I0O'),
        U = n('pBrB'),
        P = n('jV+4'),
        N = n('MWbm'),
        j = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        M = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        A = _.a.createLayoutCache(),
        H = { viewType: 'user_cell' },
        q = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(d()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.badgeContext,
                  a = t.disabledMessage,
                  r = t.displayNameLabel,
                  o = t.isBlocking,
                  i = t.isDisabled,
                  s = t.isFollowedBy,
                  c = t.isProtected,
                  l = t.isVerified,
                  d = t.name,
                  u = t.onScreenNameClick,
                  p = t.promotedContent,
                  h = t.promotedItemType,
                  m = t.screenName,
                  f = t.screenNameSuffix,
                  y = t.translatorType,
                  v = t.withFollowsYou,
                  b = t.withLink,
                  _ = g.a.createElement(P.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: c,
                    isVerified: l,
                    name: d,
                    onLinkClick: u,
                    promotedContent: h === j.TWEET ? p : void 0,
                    screenName: m,
                    screenNameSuffix: f,
                    translatorType: y,
                    withFollowsYou: v && s,
                    withHoverCard: !o && !i && b,
                    withLink: !i && b,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? g.a.createElement(
                      N.a,
                      { style: V.disabledMessageContainer },
                      _,
                      g.a.createElement(w.b, { color: 'gray700' }, a),
                    )
                  : _
              }),
              y()(d()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  a = t.displayMode,
                  r = t.socialContext
                return r
                  ? g.a.createElement(x.b.UseProps, null, function (e) {
                      return g.a.createElement(R.a, {
                        avatarSize: n,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: V.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== M.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              y()(d()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(E.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = n.Icon,
                  r = n.text
                return t
                  ? g.a.createElement(
                      N.a,
                      { style: V.userTypeaheadSocialContext },
                      g.a.createElement(N.a, { style: V.userTypeaheadSocialContextIcon }, a),
                      g.a.createElement(
                        w.b,
                        { color: 'gray700', numberOfLines: 1, style: V.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              y()(d()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? g.a.createElement(S.a, { label: t }) : null
              }),
              y()(d()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [M.UserDetailed, M.UserConcise].indexOf(t)
              }),
              y()(d()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              y()(
                d()(e),
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
                    a = e.avatarDecoration,
                    o = e.avatarSize,
                    i = e.avatarUri,
                    s = e.bottomControl,
                    c = e.decoration,
                    l = e.displayMode,
                    d = e.isBlocking,
                    u = e.isDisabled,
                    p = e.onAvatarClick,
                    h = e.onCellClick,
                    m = e.onScreenNameClick,
                    f = e.presenceIndicator,
                    y = e.promotedContent,
                    b = e.promotedItemType,
                    _ = e.screenName,
                    w = e.style,
                    x = e.testID,
                    E = e.userId,
                    S = e.withDarkerInteractiveBackground,
                    k = e.withInteractiveStyling,
                    R = e.withLink,
                    L = e.withUsernameCenterAligned,
                    U = R && !d,
                    P = l === M.UserCompact || L,
                    q = l === M.ExperimentalUserTypeahead,
                    z =
                      y && b === j.USER && 'earned' !== (y.disclosure_type && y.disclosure_type.toLowerCase())
                        ? g.a.createElement(D.a, { contentAuthorId: E, promotedContent: y, style: V.promotedIndicator })
                        : null,
                    B = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: A,
                      onClick: p,
                      onHoverCardScreenNameClick: m,
                      promotedContent: y,
                      screenName: _,
                      style: V.avatar,
                      uri: i,
                      withHoverCard: U,
                      withLink: R,
                    },
                    W = g.a.createElement(C.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return f
                        ? g.a.createElement(F.a, r()({}, B, f, { size: t }))
                        : g.a.createElement(O.a, r()({ size: t }, B))
                    }),
                    K = n && 'boolean' == typeof n.checked,
                    Y = void 0 !== h,
                    Q = (K ? 'radio' : Y && 'button') || 'listitem',
                    G = this._renderUserName(),
                    X = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = X || J || z || s,
                    $ = g.a.createElement(
                      g.a.Fragment,
                      null,
                      X,
                      J,
                      z,
                      s ? g.a.createElement(N.a, { style: V.bottomControl }, s) : null,
                    )
                  return g.a.createElement(
                    v.a,
                    { behavioralEventContext: H },
                    g.a.createElement(
                      T.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: Q,
                        accessibilityState: n,
                        disabled: !!u,
                        focusable: K || Y,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: u ? 'none' : void 0,
                        style: [V.root, w],
                        testID: x,
                        withDarkerInteractiveBackground: S,
                        withInteractiveStyling: null != k ? k : !!h,
                      },
                      q ? null : this._renderSocialContext(),
                      g.a.createElement(
                        I.a,
                        {
                          avatarCell: W,
                          avatarCellStyle: [V.avatarColumn, P && V.bodyColumnCentered],
                          avatarSize: q ? 'xxxLarge' : o,
                          cellStyle: [V.bodyColumn, P && V.bodyColumnCentered],
                        },
                        g.a.createElement(N.a, { style: V.body }, G, c),
                        P ? null : $,
                        q ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && P
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
                    a = e.entities,
                    r = e.userId,
                    o = e.withheldDescription,
                    i = e.withheldEntities
                  return a && t && this._isEligibleForBio()
                    ? g.a.createElement(U.a, {
                        description: t,
                        entities: a,
                        isConcise: n === M.UserConcise,
                        style: V.bio,
                        userId: r,
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
      y()(q, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var V = L.a.create(function (e) {
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
      t.a = q
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
        d = n.n(l),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        y = n.n(f),
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
        L = n('0KEI'),
        O =
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
        U = n('vy4g'),
        P = n('3A2y'),
        N = n('Y6L+'),
        j = n('9EWH'),
        M = n('Ssj5'),
        A = n('GZwR'),
        H = ['rounded_score', 'tokens'],
        q = ['rounded_score', 'tokens'],
        V = 'typeaheadV2',
        z = [],
        B = Object.freeze({
          REQUEST: 'rweb/typeaheadV2/FETCH_REQUEST',
          SUCCESS: 'rweb/typeaheadV2/FETCH_SUCCESS',
          FAILURE: 'rweb/typeaheadV2/FETCH_FAILURE',
        }),
        W = function (e, t) {
          var n = e.q,
            a = e.result_type,
            r = e.src,
            o = a
          return (
            null != t && t.communityId && (o = ''.concat(a, '_').concat(t.communityId)),
            ''.concat(n, '_').concat(o, '_').concat(r)
          )
        },
        K = { remoteResults: {}, cachedIds: [] }
      var Y = function (e) {
          return e.map(function (e) {
            var t = e.rounded_score,
              n = e.tokens,
              a = i()(e, H),
              r = a.topic,
              o = A.b.Topic
            return { id: ''.concat(o, '_').concat(r.replace(' ', '_')), type: o, tokens: n, rounded_score: t, data: a }
          })
        },
        Q = function (e) {
          return e.map(function (e) {
            var t,
              n = e.rounded_score,
              a = e.tokens,
              r = i()(e, q),
              o = A.b.Event,
              s = null == r || null === (t = r.url) || void 0 === t ? void 0 : t.match(N.A.id)
            return { id: (null == s ? void 0 : s[0]) || '', type: o, tokens: a, rounded_score: n, data: r }
          })
        },
        G = function (e, t) {
          return e.typeaheadV2.remoteResults[t]
        },
        X = function (e, t) {
          return function (n, a) {
            var r = G(a(), W(e, t)),
              o = r && r.timestamp
            return o && Date.now() - o <= 3e5 ? Promise.resolve() : n(J(e, t))
          }
        },
        J = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            if (!e || !e.q || '' === e.q.trim()) return Promise.resolve()
            var i = { queryId: W(e, t) },
              s = (t || {}).communityId,
              c = e.result_type.split(','),
              l = { actionTypes: B, context: 'FETCH_TYPEAHEAD', meta: i }
            if (c.includes(A.a.CommunityUsers) && s) {
              return Object(F.b)(n, {
                params: { communityId: s, prefix: e.q },
                request: o.Typeahead.fetchCommunityInviteUsers,
              })(l, function (e) {
                var t = ((null == e ? void 0 : e.invite_action_results) || {}).entities
                return t ? [Object(O.c)(t)] : void 0
              })
            }
            if (c.includes(A.a.CommunityMembers) && s) {
              return Object(F.b)(n, {
                params: { communityId: s, prefix: e.q },
                request: o.Typeahead.fetchCommunityMembers,
              })(l, function (e) {
                var t = ((null == e ? void 0 : e.user_community_relationships) || {}).entities
                return t ? [Object(O.c)(t)] : void 0
              })
            }
            return Object(F.b)(n, { params: e, request: o.Typeahead.fetch })(l)
          }
        }
      M.a.register(
        b()({}, V, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case B.REQUEST:
              var n = t.meta.queryId
              return Object(j.a)(e, function (e) {
                e.remoteResults[n] || (e.remoteResults[n] = { fetchStatus: S.a.NONE }),
                  (e.remoteResults[n].fetchStatus = S.a.LOADING)
              })
            case B.SUCCESS:
              var a = t.meta.queryId,
                r = t.payload
              if (!r) return e
              var o = r.users.map(function (e) {
                  return Object(U.a)(e, A.c.Remote)
                }),
                i = {
                  fetchStatus: S.a.LOADED,
                  id: a,
                  orderedSections: r.ordered_sections,
                  events: Q(r.events),
                  topics: Y(r.topics),
                  users: Object(A.i)(o),
                  timestamp: Date.now(),
                }
              return Object(j.a)(e, function (e) {
                ;(e.cachedIds = e.cachedIds.filter(function (e) {
                  return e !== a
                })),
                  e.cachedIds.push(a),
                  e.cachedIds.length >= 25 &&
                    (e.remoteResults = Object(P.a)(e.remoteResults, e.cachedIds.splice(0, 1))),
                  (e.remoteResults[a] = i)
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
            a = e.query,
            r = e.source
          return W({ q: a, result_type: (n || $).join(','), src: r }, { communityId: t })
        },
        te = function (e, t) {
          return (function (e, t) {
            var n = G(e, t)
            return n && n.fetchStatus
          })(e, ee(t))
        },
        ne = function (e, t) {
          return (function (e, t) {
            var n = G(e, t)
            return (n && n.users) || z
          })(e, ee(t))
        },
        ae = function (e, t) {
          return (function (e, t) {
            var n = G(e, t)
            return (n && n.topics) || z
          })(e, ee(t))
        },
        re = function (e, t) {
          return (function (e, t) {
            var n = G(e, t)
            return (n && n.events) || z
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
              function (e, t, n, a) {
                if (!e || !t || t.indexOf(A.a.Users) < 0) return Object(E.a)()
                var r = Object(Z.f)(n, e)
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
              var s = Object(D.a)(a || [], function (e) {
                  return e.type === A.b.User ? e.data.id_str : void 0
                }),
                c = t.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                l = e.filter(function (e) {
                  return s.indexOf(e.id) < 0
                }),
                d = Object(x.a)(c, l).slice(0, i || 10),
                u = n === S.a.LOADED,
                p = o && o({ query: r, hasResults: !!e.length, isLoaded: u }),
                h = p ? [].concat(I()(d), [p]) : d
              return h.length ? h : Object(E.a)()
            },
          )
        },
        se = function () {
          return Object(C.createSelector)(
            ie(),
            Object(C.createSelector)(
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
                var o = t === S.a.LOADED,
                  i = r && r({ query: n, hasResults: !!e.length, isLoaded: o }),
                  s = e.slice(0, a || 3)
                return i && s.push(i), s.length ? s : Object(E.a)()
              },
            ),
            Object(C.createSelector)(
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
                  : Object(k.a)([o, n.length ? n : void 0, t.length ? t : void 0, e.length ? e : void 0])
              return t.length || e.length || n.length ? i : o ? [o] : Object(E.a)()
            },
          )
        },
        ce = Object(R.a)()
          .propsFromState(function () {
            return { fetchStatus: te, items: se() }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT',
              ),
              fetchTypeaheadIfNeeded: X,
              fetchUsersPresenceIfNeeded: T.b.fetchManyIfNeeded,
              prefetchTypeaheadUsersIfNeeded: Z.b,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        le = n('8UdT'),
        de = n('kIAd'),
        ue = n('Rp9C'),
        pe = n('tAeL'),
        he = n('v6aA'),
        me = n('VY6S'),
        fe = n('w6IS'),
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
          m()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, a)),
              b()(p()(r), '_fetchTypeaheadResultsIfNeeded', function (e) {
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
              b()(p()(r), '_handleItemClick', function (e, t) {
                var n = r.props,
                  a = n.analytics,
                  o = n.onItemClick,
                  i = n.query
                o(e, t)
                var s = ue.a.forTypeaheadResult(e, t),
                  c = s ? [s] : void 0
                a.scribe({ action: 'click', data: { search_details: { query: i }, targets: c } })
              }),
              b()(p()(r), '_scribeResults', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.items,
                  a = e.query
                t.scribe({
                  action: 'impression',
                  data: { items: ue.a.forTypeaheadResults(n), search_details: { query: a } },
                })
              }),
              (r._debouncedFetchTypeaheadResultsIfNeeded = Object(me.a)(r._fetchTypeaheadResultsIfNeeded, 250)),
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
                    a = n.createLocalApiErrorHandler,
                    r = n.fetchUsersPresenceIfNeeded,
                    o = n.filter,
                    i = n.items,
                    s = n.onItemsChanged,
                    c = n.query,
                    l = n.shouldDeferPrefetch,
                    d = n.source,
                    u = e.filter,
                    p = e.query,
                    h = e.source,
                    m = this.context.loggedInUserId,
                    f = this.context.featureSwitches.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') && m
                  if (null != i && i.length && i !== e.items && (this._scribeResults(), s && s(i), f)) {
                    var y = Object(fe.a)(i)
                      .filter(function (e) {
                        return e.type === le.b.User
                      })
                      .map(function (e) {
                        return e.id
                      })
                    y && r(y).catch(a({}))
                  }
                  ;(c === p && o === u && d === h) ||
                    (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                    l &&
                      (clearTimeout(this._prefetchResultsTimer),
                      this.setState({ shouldShowPrefetchResults: !1 }),
                      (this._prefetchResultsTimer = setTimeout(function () {
                        t.props.query &&
                          t.props.fetchStatus !== S.a.LOADED &&
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
                    l = s && n !== S.a.LOADED,
                    d = l && !this.state.shouldShowPrefetchResults ? a : o
                  return _.a.createElement(
                    pe.a,
                    r()({}, c, { isLoading: !!l, items: d, onItemClick: this._handleItemClick, query: s, ref: t }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      b()(ve, 'contextType', he.a),
        b()(ve, 'defaultProps', { filter: [A.a.Users], injectedItems: [], maxEvents: 3, maxTopics: 1 })
      var be = _.a.forwardRef(function (e, t) {
          return _.a.createElement(ve, r()({}, e, { dropdownRef: t }))
        }),
        ge = ce.forwardRef(be)
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
        return be
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
        d = n.n(l),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('ho0z'), n('ERkP')),
        y = n.n(f),
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
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(_.b)(t.data, void 0, n)), a
          }),
        T = n('aA19'),
        D = n('OhSZ'),
        k = n('5mJL'),
        R = n('rHpw'),
        L = R.a.create(function (e) {
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
        O = S(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            a = e.isSelected,
            r = e.perspective,
            o = y.a.useContext(g.a).featureSwitches,
            i = o.isTrue('dm_vdl_enabled') && o.isTrue('dm_vdl_inbox_p0_enabled')
          return t
            ? y.a.createElement(
                k.a,
                {
                  avatarCell: y.a.createElement(T.a, { conversation: t, perspective: r, size: 'xLarge' }),
                  avatarCellStyle: L.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: L.bodyColumn,
                  style: [L.root, !a && n && L.disabled],
                },
                y.a.createElement(D.b, {
                  conversation: t,
                  perspective: r,
                  withParticipantsCount: !0,
                  withVDLRefresh: i,
                }),
                we({ isSelected: a }),
              )
            : null
        }),
        F = (n('uFXj'), n('MWbm')),
        U = n('LbZ7'),
        P = n('t62R'),
        N = n('9Xij'),
        j = n('TIdA'),
        M = n('A91F'),
        A = (function (e) {
          d()(n, e)
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
                    F.a,
                    { style: q.root },
                    y.a.createElement(
                      U.a,
                      { withGutter: !0 },
                      y.a.createElement(
                        F.a,
                        { style: q.bodyColumn },
                        a ? y.a.createElement(P.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        y.a.createElement(P.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? y.a.createElement(
                            F.a,
                            { style: q.coverContainer },
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
        H = '100px',
        q = R.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: H,
              maxWidth: H,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        V = A,
        z = n('5T6p'),
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
      var K = n('FiRh'),
        Y = n('j7Bv'),
        Q = n('EHV7'),
        G = n('Gfoi')
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
            a = e.query,
            r = e.resultContext,
            o = e.showIcon,
            i = e.style,
            s = (function (e, t) {
              var n,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = W()(e),
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
                  d = c.map(function (e, t, n) {
                    l += t > 0 ? n[t - 1].length : 0
                    var a = e.length
                    return { runningTotal: l, containsQuery: -1 !== o && l + a >= o && l < i }
                  })
                n = c.map(function (e, t) {
                  var n,
                    r,
                    s = d[t],
                    c = s.containsQuery,
                    l = s.runningTotal,
                    u = e.includes('#')
                  if (a && !c) r = [[0, e.length]]
                  else if (c) {
                    var p = l < o ? o - l : 0,
                      h = l + e.length < i ? e.length : i - l,
                      m = u ? p - 1 : p,
                      f = u ? h - 1 : h
                    r = a
                      ? [m > 0 ? [0, m] : void 0, f !== e.length - 1 ? [f, e.length] : void 0].filter(Boolean)
                      : [[m, f]]
                  }
                  var y = u ? ''.concat(null == e ? void 0 : e.replace('#', '')) : e
                  return {
                    highlights: null !== (n = r) && void 0 !== n && n.length ? r : void 0,
                    text: y,
                    entityType: u ? 'hashtag' : 'text',
                    prefix: u ? '#' : '',
                  }
                })
              }
              return n
            })(e.topic, t.isTrue('responsive_web_typeahead_reverse_bolding_enabled') ? a : '', true),
            c = y.a.createElement(
              P.b,
              null,
              s.map(function (e, t) {
                return y.a.createElement(K.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            l = y.a.createElement(
              y.a.Fragment,
              null,
              c,
              r
                ? y.a.createElement(
                    F.a,
                    { style: X.context },
                    r && r.types[0] && 'followable_topic' === r.types[0].type
                      ? y.a.createElement(Q.a, { style: X.icon })
                      : null,
                    y.a.createElement(P.b, { color: 'gray700' }, r.display_string || ' '),
                  )
                : null,
            )
          return y.a.createElement(
            F.a,
            { style: [X.root, n && X.disabled, i] },
            o
              ? (function (e) {
                  var t = y.a.createElement(Y.a, { Icon: G.a, color: 'neutral', size: 'xxxLarge', style: X.searchIcon })
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
        ae = n('tocL'),
        re = 'TypeaheadUser',
        oe = n('GZwR'),
        ie = n('IMA+'),
        se = ne.a.ae2205d1,
        ce = ne.a.d960b55b,
        le = ne.a.fd06b02f,
        de = Object.freeze({
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
        ue = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(c()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              m()(c()(e), '_handleClick', function () {
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
                    d = e.source,
                    u = e.userId,
                    p = e.userSpace,
                    h = e.withNewTypeaheadUI,
                    m = this.context.featureSwitches,
                    f = this._getSocialContext(),
                    v = this._getResultContext() || f,
                    b = d === oe.d.SearchBox,
                    g = p && m.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
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
                      presenceIndicator: b ? g : void 0,
                      screenName: l,
                      socialContext: v,
                      testID: re,
                      userId: u,
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
                      contextType: (t.types.length ? de[t.types[0].type] : void 0) || ae.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      m()(ue, 'contextType', g.a), m()(ue, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(ue),
        he = n('htQn'),
        me = n('iySH'),
        fe = n('IMYl'),
        ye = { viewType: 'typeahead_result' },
        ve = function (e) {
          return e.children
        }
      function be(e) {
        return y.a.createElement(ve, { item: e.item }, y.a.createElement(ge, e))
      }
      var ge = (function (e) {
        d()(n, e)
        var t = p()(n)
        function n(e, a) {
          var o
          return (
            r()(this, n),
            (o = t.call(this, e, a)),
            m()(c()(o), '_onViewRef', function (e) {
              o._viewRef = e
              var t = o.props.onRef
              t && t(e)
            }),
            m()(c()(o), '_handleClick', function () {
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
                    F.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!r || !o) || void 0,
                        selected: n ? void 0 : (r && o) || (!r && !!a),
                      },
                      nativeID: t,
                      testID: b,
                    },
                    y.a.createElement(
                      he.a,
                      {
                        accessibilityRole: r ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [a && _e.focused, _e.transitionStyles, this._loaded && _e.loaded, i],
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
                      d = s ? s({ userId: l.id_str, isSelected: r }) : void 0,
                      u = n ? n(o, l) : void 0
                    return y.a.createElement(pe, {
                      avatarUri: l.profile_image_url_https,
                      canDm: !!l.can_dm,
                      canMediaTag: !!l.can_media_tag,
                      decoration: d || void 0,
                      disabledMessage: t,
                      displayNameLabel: u,
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
                    var h = this.props.query,
                      m = o.data,
                      f = c === oe.d.SearchBox
                    return y.a.createElement(J, {
                      isDisabled: a,
                      query: h || '',
                      resultContext: m.result_context,
                      showIcon: f,
                      style: f ? _e.itemPadding : void 0,
                      topic: m.topic,
                    })
                  case oe.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      y.a.createElement(O, {
                        conversationId: o.id,
                        isDisabled: a,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case oe.b.SettingGroup:
                    var v = o.data.text
                    return y.a.createElement(
                      F.a,
                      { style: _e.navigationLink },
                      y.a.createElement(P.b, { style: _e.content, weight: 'bold' }, v),
                      y.a.createElement(me.a, { style: _e.icon }),
                    )
                  case oe.b.Setting:
                    var b = o.data.text
                    return y.a.createElement(
                      F.a,
                      { style: _e.navigationLink },
                      y.a.createElement(P.b, { style: _e.content }, b),
                      y.a.createElement(me.a, { style: _e.icon }),
                    )
                  case oe.b.NoResult:
                    var g = o.data.text
                    return y.a.createElement(P.b, { style: _e.noResult }, g)
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
      m()(ge, 'contextType', g.a)
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
          return e.isSelected ? y.a.createElement(fe.a, { accessibilityHidden: !0, style: _e.checkIcon }) : null
        }
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        d = n.n(l),
        u = n('KEM+'),
        p = n.n(u),
        h = n('ERkP'),
        m = n.n(h),
        f = n('t62R'),
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
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
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
        L = v.a.be22205f,
        O = v.a.hcbbe447,
        F = (function (e) {
          c()(n, e)
          var t = d()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.nativeID,
                    a = e.style,
                    r = e.withCircleIcon ? E : S.a
                  return m.a.createElement(
                    g.a,
                    { style: [U.root, a] },
                    m.a.createElement(r, { style: [U.icon, t && U[t]] }),
                    m.a.createElement(f.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    a = e.promotedContent,
                    r = a.adMetadataContainer,
                    o = a.advertiser,
                    i = a.advertiser_name,
                    s = a.disclosure_type,
                    c = t && o && t === o.id_str,
                    l = 'string' == typeof s && 'political' === s.toLowerCase(),
                    d = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    u = !(!r || 'POLITICAL' !== r.disclaimerType) || l,
                    p = !(!r || 'ISSUE' !== r.disclaimerType) || d,
                    h = (r || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!i || c || h
                      ? u
                        ? k
                        : p
                        ? L
                        : D
                      : u
                      ? R({ fullName: i })
                      : p
                      ? O({ fullName: i })
                      : T({ fullName: i }))
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      p()(F, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var U = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
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
        d = n.n(l),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        y = n.n(f),
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
            y.a.createElement(S.a, { ariaValueText: r ? D : '', indeterminate: r, style: !r && k.hidden })
          )
        },
        L = n('ZcYN'),
        O = n('MWbm'),
        F = n('oQhu'),
        U = n('w6IS'),
        P = n('MXDK'),
        N = { viewType: 'typeahead_dropdown' },
        j = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e)),
              m()(c()(o), '_setFocusedItemRef', function (e) {
                o._shouldScrollToFocusedItem &&
                  e &&
                  (Object(P.c)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
              }),
              m()(c()(o), '_resetScroll', function () {
                var e = o._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              m()(
                c()(o),
                '_getFlattenedItems',
                Object(F.a)(function (e) {
                  return Object(U.a)(e)
                }),
              ),
              m()(c()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemClick,
                  i = o._getFlattenedItems(a).indexOf(e)
                e && !t && !o._shouldBlockInteractivity && r(e, i), o._resetFocus()
              }),
              m()(c()(o), '_getResultCount', function () {
                var e = o.props.items
                return o._getFlattenedItems(e).length
              }),
              m()(c()(o), '_setFocusIndex', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), r && r(o._getFlattenedItems(a)[e])
              }),
              m()(c()(o), '_resetFocus', function () {
                o._setFocusIndex(o.props.withItemAlwaysSelected ? 0 : -1)
              }),
              m()(c()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              m()(c()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              }),
              m()(c()(o), 'hasFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                return e >= 0 && t > e
              }),
              m()(c()(o), 'selectFocusedItem', function () {
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
                    d = a || r.length,
                    u = 0,
                    p = !!c
                  return d
                    ? y.a.createElement(
                        v.a,
                        { behavioralEventContext: N },
                        y.a.createElement(
                          O.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: l },
                          o ? o() : null,
                          y.a.createElement(R, { isLoading: !!a }),
                          i ? i() : null,
                          r.length
                            ? r.map(function (t, n) {
                                var a = !Array.isArray(r[n - 1]) && n > 0,
                                  o = n < r.length - 1,
                                  i = Array.isArray(t)
                                    ? e._renderTypeaheadGroup(t, u, a, o)
                                    : e._renderTypeaheadItem(t, u)
                                return (u += Array.isArray(t) ? t.length : 1), i
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
                    o && n ? y.a.createElement(b.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                    e.map(function (e, n) {
                      return r._renderTypeaheadItem(e, t + n)
                    }),
                    o && a ? y.a.createElement(b.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
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
                    d = n.source,
                    u = this.state.focusIndex,
                    p = !(!l || !e.id) && l.indexOf(e.id) >= 0,
                    h = !!l,
                    m = u === t,
                    f = o && o(e, e.data),
                    v = r && r(e, e.data)
                  return y.a.createElement(L.b, {
                    disabledMessage: v,
                    domId: m ? a : void 0,
                    getUserDisplayNameLabel: i,
                    isDisabled: f,
                    isFocused: m,
                    isInMultiSelect: h,
                    isSelected: p,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: m ? this._setFocusedItemRef : void 0,
                    query: s,
                    renderUserDecoration: c,
                    source: d,
                  })
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(P.a)(_.a.findDOMNode(this))
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
