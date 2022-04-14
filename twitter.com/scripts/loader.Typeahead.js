;(window.webpackJsonp = window.webpackJsonp || []).push([
  [187],
  {
    UnyZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    V2l4: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UserPicker', function () {
          return M
        }),
        n.d(t, 'finalGetItemIsDisabled', function () {
          return P
        }),
        n.d(t, 'getFinalItemDisabledMessage', function () {
          return W
        })
      var a = n('VrFO'),
        o = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        p = n('2VqO'),
        u = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('z84I'), n('ho0z'), n('2G9S'), n('vrRf'), n('ERkP')),
        y = n.n(f),
        g = n('ZcYN'),
        v = n('3XMw'),
        w = n.n(v),
        b = 'searchPeople',
        _ = n('4e/K'),
        I = n('MWbm'),
        x = n('oSwX'),
        C = n('aV/s'),
        D = n('rHpw'),
        S = n('GZwR'),
        k = [S.a.Users],
        E = w.a.fc9dd578,
        R = w.a.gdb7bc24,
        M = (function (e) {
          d()(n, e)
          var t = u()(n)
          function n(e, a) {
            var r
            return (
              o()(this, n),
              (r = t.call(this, e, a)),
              m()(c()(r), '_renderSelectedUsersList', function () {
                var e = r.props.selectedUsers
                return y.a.createElement(I.a, { style: A.selectedUsersList }, e.map(r._renderSelectedUserPill))
              }),
              m()(c()(r), '_renderSelectedUserPill', function (e) {
                var t = r.props.withCompactPills,
                  n = r.props.onRemove.bind(c()(r), e),
                  a =
                    e.type === S.b.User
                      ? y.a.createElement(x.default, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'custom',
                          uri: e.data.profile_image_url_https,
                        })
                      : void 0
                return y.a.createElement(C.a, {
                  accessibilityLabel: R({ name: e.data.name }),
                  avatar: a,
                  compact: t,
                  key: e.id,
                  mode: 'remove',
                  onClick: n,
                  style: A.selectionPill,
                  text: e.data.name,
                })
              }),
              m()(c()(r), '_getItemIsDisabled', function (e) {
                var t = r.props,
                  n = t.getItemIsDisabled,
                  a = t.preselectedUsers
                return P(e, n, a)
              }),
              m()(c()(r), '_getItemDisabledMessage', function (e) {
                var t = r.props,
                  n = t.getItemDisabledMessage,
                  a = t.preselectedUsers
                return W(e, n, a)
              }),
              m()(c()(r), '_handleQueryChange', function (e) {
                var t = r.props.onQueryChange
                r.setState({ query: e }), t && t(e)
              }),
              m()(c()(r), '_handleOnSelect', function (e) {
                var t = r.props.onSelect
                t && t(e)
              }),
              (r.state = { query: '' }),
              r
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.injections,
                    n = e.preselectedUsers,
                    a = e.renderCallout,
                    o = e.renderHeader,
                    r = e.selectedUsers,
                    i = e.shouldAutoFocus,
                    s = e.source,
                    c = r
                      .map(function (e) {
                        return e.id
                      })
                      .concat(n)
                  return y.a.createElement(
                    I.a,
                    { style: A.root },
                    y.a.createElement(_.default, {
                      alwaysOpen: !0,
                      disableClearButton: !0,
                      filter: k,
                      getItemDisabledMessage: this._getItemDisabledMessage,
                      getItemIsDisabled: this._getItemIsDisabled,
                      injectedItems: t,
                      isModal: !0,
                      onItemClick: this._handleOnSelect,
                      onQueryChange: this._handleQueryChange,
                      placeholder: E,
                      renderCallout: a,
                      renderHeader: o,
                      renderInSearchField: r.length ? this._renderSelectedUsersList : void 0,
                      renderUserDecoration: g.a,
                      selectedItems: c,
                      shouldAutoFocus: i,
                      shouldClearOnSelect: !0,
                      shouldFocusOnClear: !0,
                      source: s,
                      testID: b,
                      withSectionDivider: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      m()(M, 'defaultProps', { preselectedUsers: [], shouldAutoFocus: !0, withCompactPills: !1 })
      var O = function (e, t) {
          return t.indexOf(e) >= 0
        },
        P = function (e, t, n) {
          return O(e.id, n) || !(!t || !t(e))
        },
        W = function (e, t, n) {
          if (!O(e.id, n) && t) return t(e)
        },
        A = D.a.create(function (e) {
          return {
            root: { flex: 1 },
            selectionPill: { margin: e.spaces.space4, maxWidth: 'calc(100% - '.concat(e.spaces.space16, ')') },
            selectedUsersList: { flexDirection: 'row', flexWrap: 'wrap', padding: e.spaces.space4 },
          }
        })
      t.default = M
    },
    'aV/s': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        o = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        p = n('2VqO'),
        u = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        y = n.n(f),
        g = n('t62R'),
        v = n('3XMw'),
        w = n.n(v),
        b = n('I4+6'),
        _ = n('cm6r'),
        I = n('UnyZ'),
        x = n('rHpw'),
        C = n('MWbm'),
        D = n('hOZg'),
        S = n('iY63'),
        k = n('IMYl'),
        E = { active: w.a.e557ad8d, expand: w.a.e3a58c27, remove: w.a.h517e8d8 },
        R = (function (e) {
          d()(n, e)
          var t = u()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              m()(c()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
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
                    t = e.accessibilityLabel,
                    n = e.avatar,
                    a = e.compact,
                    o = e.disabled,
                    r = e.link,
                    i = e.mode,
                    s = e.onClick,
                    c = e.secondaryAction,
                    l = e.selected,
                    d = e.style,
                    p = e.text,
                    u = this._renderIcon(!0, i),
                    h = c && this._renderIcon(!1, c.mode),
                    m = [M.root, a && M.compact, o && M.disabled, l && M.selected, d],
                    f = [M.content, u && M.withIcon, n && ((a && M.withAvatarImageCompact) || M.withAvatarImage)],
                    v = b.a.generate({
                      backgroundColor: l ? x.a.theme.colors.primary : 'transparent',
                      color: l ? x.a.theme.colors.white : x.a.theme.colors.primary,
                    })
                  return y.a.createElement(
                    C.a,
                    { style: m },
                    y.a.createElement(
                      _.a,
                      {
                        accessibilityLabel: t || (i ? E[i] : ''),
                        disabled: o,
                        interactiveStyles: v,
                        link: r,
                        onPress: s,
                        style: f,
                      },
                      this._renderAvatar(),
                      y.a.createElement(
                        g.b,
                        {
                          color: l ? 'whiteOnColor' : 'text',
                          numberOfLines: 1,
                          selectable: !1,
                          style: M.text,
                          weight: 'bold',
                        },
                        p,
                      ),
                      u,
                    ),
                    c
                      ? y.a.createElement(
                          _.a,
                          {
                            accessibilityLabel: c.accessibilityLabel || (c.mode ? E[c.mode] : ''),
                            disabled: o || c.disabled,
                            hoverLabel: { label: c.hoverLabel || (c.mode ? E[c.mode] : '') },
                            interactiveStyles: v,
                            onPress: this._handleSecondaryClick,
                            style: M.secondaryControl,
                          },
                          y.a.createElement(C.a, { style: M.secondaryBorder }, h),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = this.props.selected,
                    a = [M.icon, n && M.iconSelected],
                    o = [M.icon]
                  switch (t) {
                    case I.a.Remove:
                      return y.a.createElement(D.a, { style: [M.dismissIcon, e && a] })
                    case I.a.Expand:
                      return y.a.createElement(S.a, { style: e ? a : o })
                    case I.a.Active:
                      return y.a.createElement(k.a, { style: a })
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  var e = this.props,
                    t = e.avatar,
                    n = e.compact
                  return t
                    ? y.a.createElement(C.a, { style: [M.avatarContainer, n ? M.avatarCompact : M.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      m()(R, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var M = x.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            borderColor: e.colors.gray200,
            borderRadius: e.borderRadii.infinite,
            borderStyle: 'solid',
            borderWidth: '1px',
            flexDirection: 'row',
            minHeight: e.spaces.space40,
            overflow: 'hidden',
          },
          content: {
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 1,
            paddingHorizontal: e.spaces.space16,
          },
          text: { width: '100%' },
          compact: { minHeight: e.spaces.space32 },
          disabled: { borderColor: e.colors.gray50 },
          selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary },
          avatar: { height: e.spaces.space32, width: e.spaces.space32 },
          avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 },
          avatarContainer: { justifyContent: 'center', marginRight: e.spaces.space8 },
          withAvatarImage: { paddingLeft: 'calc('.concat(e.spaces.space2, ' * 2)') },
          withAvatarImageCompact: { paddingLeft: 'calc('.concat(e.spaces.space1, ' * 3)') },
          icon: { color: e.colors.primary, flexShrink: 0, marginLeft: e.spaces.space12 },
          iconSelected: { color: e.colors.whiteOnColor },
          withIcon: { paddingRight: e.spaces.space12 },
          dismissIcon: { color: e.colors.gray300 },
          secondaryControl: { flexShrink: 0, justifyContent: 'center' },
          secondaryBorder: {
            borderLeftColor: e.colors.borderColor,
            borderLeftWidth: e.borderWidths.small,
            paddingHorizontal: e.spaces.space12,
          },
        }
      })
      t.a = R
    },
    bJYH: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'GenericTypeaheadComposeWrapper', function () {
          return H
        })
      var a = n('yiKp'),
        o = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        p = n('5Yy7'),
        u = n.n(p),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        g = (n('hCOa'), n('87if'), n('uFXj'), n('ERkP')),
        v = n.n(g),
        w = n('oEoC'),
        b = n('oQhu'),
        _ = n('7nmT'),
        I = n.n(_),
        x = n('WPfJ'),
        C = n('OEYw'),
        D = n('MWbm'),
        S = n('Irs7'),
        k = n('rHpw'),
        E = n('0FVZ'),
        R = n('xoZN'),
        M = n('7N4s'),
        O = n('GZwR'),
        P = [O.a.Users],
        W = [O.a.Topics],
        A = 50 * k.a.theme.scaleMultipler,
        F = 30 * k.a.theme.scaleMultipler,
        L = 0,
        H = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n(e, a) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e, a)),
              y()(d()(r), '_typeaheadActive', !1),
              y()(d()(r), '_renderTypeaheadDropdown', function (e) {
                var t = r.props,
                  n = t.contextText,
                  a = t.isInlineReply,
                  o = t.onSelectItem,
                  i = t.source,
                  s = r.context.isModal,
                  c = e.resultType === O.a.Topics ? 'hashtag' : void 0,
                  l = v.a.createElement(C.a, {
                    ariaDescendantId: r.state.ariaDescendantId,
                    contextText: n,
                    domId: r._dropdownDomId,
                    filter: r._getFilter(e.resultType),
                    maxTopics: 8,
                    onItemClick: o,
                    onItemFocusChanged: r._handleItemFocusChanged,
                    query: e.word,
                    ref: r._handleTypeaheadRef,
                    source: i,
                    style: r._calcStyle(),
                    topicType: c,
                    withItemAlwaysSelected: !0,
                  })
                return s || a
                  ? v.a.createElement(
                      E.a.HalfSheet,
                      null,
                      v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(D.a, { onClick: r._handleDismiss, style: T.mask }),
                        l,
                      ),
                    )
                  : v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(D.a, { onClick: r._handleDismiss, style: T.mask }),
                      l,
                    )
              }),
              y()(d()(r), 'render', function () {
                var e = r.props,
                  t = e.children,
                  n = e.query,
                  a = v.a.cloneElement(t, {
                    ariaAutocomplete: 'list',
                    ariaControls: r._dropdownDomId,
                    ariaActiveDescendant: r.state.ariaDescendantId,
                    ref: function (e) {
                      ;(r._textInputNode = I.a.findDOMNode(e)), (r._textInputRef = e)
                      var n = t.ref
                      n && n(e)
                    },
                  })
                return v.a.createElement(
                  D.a,
                  { style: T.inputContainer },
                  v.a.createElement(
                    R.a,
                    { onKeyDown: r._handleKeyDown },
                    a,
                    r._textInputNode && n ? r._renderTypeaheadDropdown(n) : null,
                  ),
                )
              }),
              y()(d()(r), '_getFilter', function (e) {
                return 'users' === e ? P : W
              }),
              y()(d()(r), '_calcStyle', function () {
                var e = r.context.isModal,
                  t = r.props,
                  n = t.isInline,
                  a = t.isInlineReply,
                  o = t.source,
                  i = r._textInputNode,
                  s = window.innerHeight,
                  c = window.innerWidth,
                  l = (r._textInputRef && r._textInputRef.getTextInputHeight()) || 20
                if (i instanceof window.HTMLElement) {
                  if (o === O.d.LongformComposer) {
                    var d,
                      p =
                        window.getSelection().rangeCount > 0
                          ? Array.from(window.getSelection().getRangeAt(0).getClientRects())
                          : [],
                      u = null == p || null === (d = p[0]) || void 0 === d ? void 0 : d.y
                    return u ? [r._getLongformDropdownPositioningStyle(s, c, u, 60, 70), T.dropdownStyle] : void 0
                  }
                  if (e || n) {
                    var h = i.getBoundingClientRect()
                    return [r._getDropdownPositioningStyle(s, c, h.top, h.top + l, h.left, e, !!a), T.dropdownStyle]
                  }
                  return [r._getModalFullViewportStyle(l), T.modalFullViewportStyle]
                }
                return [r._getDropdownPositioningStyle(l, c, 0, 0, 0, e, !!a), T.dropdownStyle]
              }),
              y()(d()(r), '_handleKeyDown', function (e) {
                var t = r.state.selectedItem,
                  n = r.props,
                  a = n.onSelectItem,
                  o = n.query,
                  i = e.key
                w.g(e) &&
                  o &&
                  ('ArrowDown' === i
                    ? (r._typeaheadRef && r._typeaheadRef.focusNext(), e.preventDefault())
                    : 'ArrowUp' === i
                    ? (r._typeaheadRef && r._typeaheadRef.focusPrevious(), e.preventDefault())
                    : 'Enter' === i || 'Tab' === i
                    ? t && (a(t), e.preventDefault())
                    : 'Escape' === i && (r._handleDismiss(), e.preventDefault()))
              }),
              y()(d()(r), '_handleItemFocusChanged', function (e) {
                return r.setState({ ariaDescendantId: w.b(), selectedItem: e })
              }),
              y()(d()(r), '_handleTypeaheadRef', function (e) {
                r._typeaheadRef = e
              }),
              y()(d()(r), '_handleDismiss', function () {
                r._textInputRef && r._textInputRef.focus(), r.props.onDismiss()
              }),
              y()(
                d()(r),
                '_getDropdownHeight',
                Object(b.a)(function (e, t) {
                  var n = (50 * e) / 100
                  return n > t ? t : n
                }),
              ),
              y()(
                d()(r),
                '_getModalOrInlineReplyDropdownStyles',
                Object(b.a)(function (e, t, n) {
                  return e ? { bottom: ''.concat(n, 'px') } : { top: ''.concat(t, 'px') }
                }),
              ),
              y()(
                d()(r),
                '_getLongformDropdownPositioningStyle',
                Object(b.a)(function (e, t, n, a, o) {
                  var i = r._getDropdownMinMaxWidth(t, o),
                    s = i.maxWidth,
                    c = i.minWidth,
                    l = n > (e - a) / 2 + a,
                    d = r._getDropdownHeight(e, (e - 3 * a) / 2),
                    p = l ? n - F - d : n + A
                  return {
                    height: ''.concat(d, 'px'),
                    maxWidth: ''.concat(s, 'px'),
                    minWidth: ''.concat(c, 'px'),
                    position: 'fixed',
                    top: ''.concat(p, 'px'),
                  }
                }),
              ),
              y()(
                d()(r),
                '_getDropdownPositioningStyle',
                Object(b.a)(function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    l = r._getDropdownMinMaxWidth(t, i),
                    d = l.maxWidth,
                    p = l.minWidth,
                    u = e - a,
                    h = n,
                    m = u / e < 0.5 && h > u,
                    f = m ? r._getDropdownHeight(e, h - 10) : r._getDropdownHeight(e, u - 10),
                    y = { maxWidth: ''.concat(d, 'px'), minWidth: ''.concat(p, 'px'), maxHeight: ''.concat(f, 'px') }
                  return s || c
                    ? o()(
                        o()({}, y),
                        {},
                        { position: 'fixed', left: ''.concat(i, 'px') },
                        r._getModalOrInlineReplyDropdownStyles(m, a, e - n),
                      )
                    : m
                    ? o()(o()({}, y), {}, { bottom: '100%', position: 'absolute' })
                    : o()(o()({}, y), {}, { top: '100%', position: 'absolute' })
                }),
              ),
              y()(d()(r), '_getDropdownMinMaxWidth', function (e, t) {
                var n = e - t - 10
                return { maxWidth: n, minWidth: Math.min(n, 300) }
              }),
              y()(
                d()(r),
                '_getModalFullViewportStyle',
                Object(b.a)(function (e) {
                  return { position: 'absolute', top: ''.concat(e || 0, 'px'), overflowX: 'hidden', overflowY: 'auto' }
                }),
              ),
              (r.state = { ariaDescendantId: w.b() }),
              (r._dropdownDomId = 'typeaheadDropdownWrapped-'.concat(L)),
              (L += 1),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.onTypeaheadStateChange,
                    n = e.query,
                    a = !(!this._textInputNode || !n)
                  a !== this._typeaheadActive && ((this._typeaheadActive = a), t && t(a))
                },
              },
              {
                key: 'resetSelectedItem',
                value: function () {
                  this.setState({ selectedItem: void 0 })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(H, 'contextType', M.b), y()(H, 'defaultProps', { source: O.d.Compose })
      var T = k.a.create(function (e) {
        return {
          dropdownStyle: {
            backgroundColor: e.colors.cellBackground,
            borderRadius: e.borderRadii.small,
            boxShadow: e.boxShadows.medium,
            minHeight: 100,
            overflowX: 'hidden',
            overflowY: 'auto',
          },
          mask: o()(o()({}, k.a.absoluteFillObject), {}, { position: 'fixed' }),
          modalFullViewportStyle: {
            backgroundColor: e.colors.cellBackground,
            right: 0,
            left: 0,
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            minHeight: 100,
          },
          inputContainer: { flexGrow: 1, position: 'relative', width: '100%', zIndex: x.g },
        }
      })
      t.default = Object(S.a)(H, { component: 'compose' })
    },
  },
])
//# sourceMappingURL=WIPED
