;(window.webpackJsonp = window.webpackJsonp || []).push([
  [187],
  {
    UnyZ: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f')
      var n = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    V2l4: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserPicker', function () {
          return O
        }),
        a.d(t, 'finalGetItemIsDisabled', function () {
          return F
        }),
        a.d(t, 'getFinalItemDisabledMessage', function () {
          return M
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        s = a.n(o),
        i = a('1Pcy'),
        c = a.n(i),
        l = a('5Yy7'),
        d = a.n(l),
        p = a('2VqO'),
        u = a.n(p),
        h = a('KEM+'),
        m = a.n(h),
        f = (a('z84I'), a('ho0z'), a('2G9S'), a('vrRf'), a('ERkP')),
        y = a.n(f),
        g = a('ZcYN'),
        v = a('3XMw'),
        b = a.n(v),
        w = 'searchPeople',
        I = a('4e/K'),
        _ = a('MWbm'),
        C = a('jhWN'),
        x = a('aV/s'),
        D = a('rHpw'),
        S = a('GZwR'),
        k = [S.a.Users],
        E = b.a.fc9dd578,
        R = b.a.gdb7bc24,
        O = (function (e) {
          d()(a, e)
          var t = u()(a)
          function a(e, n) {
            var o
            return (
              r()(this, a),
              (o = t.call(this, e, n)),
              m()(c()(o), '_renderSelectedUsersList', function () {
                var e = o.props.selectedUsers
                return y.a.createElement(_.a, { style: A.selectedUsersList }, e.map(o._renderSelectedUserPill))
              }),
              m()(c()(o), '_renderSelectedUserPill', function (e) {
                var t = o.props.withCompactPills,
                  a = o.props.onRemove.bind(c()(o), e),
                  n =
                    e.type === S.b.User
                      ? y.a.createElement(C.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'custom',
                          uri: e.data.profile_image_url_https,
                        })
                      : void 0
                return y.a.createElement(x.a, {
                  accessibilityLabel: R({ name: e.data.name }),
                  avatar: n,
                  compact: t,
                  key: e.id,
                  mode: 'remove',
                  onClick: a,
                  style: A.selectionPill,
                  text: e.data.name,
                })
              }),
              m()(c()(o), '_getItemIsDisabled', function (e) {
                var t = o.props,
                  a = t.getItemIsDisabled,
                  n = t.preselectedUsers
                return F(e, a, n)
              }),
              m()(c()(o), '_getItemDisabledMessage', function (e) {
                var t = o.props,
                  a = t.getItemDisabledMessage,
                  n = t.preselectedUsers
                return M(e, a, n)
              }),
              m()(c()(o), '_handleQueryChange', function (e) {
                var t = o.props.onQueryChange
                o.setState({ query: e }), t && t(e)
              }),
              m()(c()(o), '_handleOnSelect', function (e) {
                var t = o.props.onSelect
                t && t(e)
              }),
              (o.state = { query: '' }),
              o
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.injections,
                    a = e.preselectedUsers,
                    n = e.renderCallout,
                    r = e.renderHeader,
                    o = e.selectedUsers,
                    s = e.shouldAutoFocus,
                    i = e.source,
                    c = o
                      .map(function (e) {
                        return e.id
                      })
                      .concat(a)
                  return y.a.createElement(
                    _.a,
                    { style: A.root },
                    y.a.createElement(I.default, {
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
                      renderCallout: n,
                      renderHeader: r,
                      renderInSearchField: o.length ? this._renderSelectedUsersList : void 0,
                      renderUserDecoration: g.a,
                      selectedItems: c,
                      shouldAutoFocus: s,
                      shouldClearOnSelect: !0,
                      shouldFocusOnClear: !0,
                      source: i,
                      testID: w,
                      withSectionDivider: !1,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      m()(O, 'defaultProps', { preselectedUsers: [], shouldAutoFocus: !0, withCompactPills: !1 })
      var P = function (e, t) {
          return t.indexOf(e) >= 0
        },
        F = function (e, t, a) {
          return P(e.id, a) || !(!t || !t(e))
        },
        M = function (e, t, a) {
          if (!P(e.id, a) && t) return t(e)
        },
        A = D.a.create(function (e) {
          return {
            root: { flex: 1 },
            selectionPill: { margin: e.spaces.space4, maxWidth: 'calc(100% - '.concat(e.spaces.space16, ')') },
            selectedUsersList: { flexDirection: 'row', flexWrap: 'wrap', padding: e.spaces.space4 },
          }
        })
      t.default = O
    },
    'aV/s': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        s = a.n(o),
        i = a('1Pcy'),
        c = a.n(i),
        l = a('5Yy7'),
        d = a.n(l),
        p = a('2VqO'),
        u = a.n(p),
        h = a('KEM+'),
        m = a.n(h),
        f = (a('2G9S'), a('hBvt'), a('uFXj'), a('ERkP')),
        y = a.n(f),
        g = a('t62R'),
        v = a('3XMw'),
        b = a.n(v),
        w = a('I4+6'),
        I = a('cm6r'),
        _ = a('UnyZ'),
        C = a('rHpw'),
        x = a('MWbm'),
        D = a('hOZg'),
        S = a('iY63'),
        k = a('IMYl'),
        E = { active: b.a.e557ad8d, expand: b.a.e3a58c27, remove: b.a.h517e8d8 },
        R = (function (e) {
          d()(a, e)
          var t = u()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(c()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
              }),
              e
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.avatar,
                    n = e.compact,
                    r = e.disabled,
                    o = e.link,
                    s = e.mode,
                    i = e.onClick,
                    c = e.secondaryAction,
                    l = e.selected,
                    d = e.style,
                    p = e.text,
                    u = this._renderIcon(!0, s),
                    h = c && this._renderIcon(!1, c.mode),
                    m = [O.root, n && O.compact, r && O.disabled, l && O.selected, d],
                    f = [O.content, u && O.withIcon, a && ((n && O.withAvatarImageCompact) || O.withAvatarImage)],
                    v = w.a.generate({
                      backgroundColor: l ? C.a.theme.colors.primary : 'transparent',
                      color: l ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return y.a.createElement(
                    x.a,
                    { style: m },
                    y.a.createElement(
                      I.a,
                      {
                        accessibilityLabel: t || (s ? E[s] : ''),
                        disabled: r,
                        interactiveStyles: v,
                        link: o,
                        onPress: i,
                        style: f,
                      },
                      this._renderAvatar(),
                      y.a.createElement(
                        g.b,
                        {
                          color: l ? 'whiteOnColor' : 'text',
                          numberOfLines: 1,
                          selectable: !1,
                          style: O.text,
                          weight: 'bold',
                        },
                        p,
                      ),
                      u,
                    ),
                    c
                      ? y.a.createElement(
                          I.a,
                          {
                            accessibilityLabel: c.accessibilityLabel || (c.mode ? E[c.mode] : ''),
                            disabled: r || c.disabled,
                            hoverLabel: { label: c.hoverLabel || (c.mode ? E[c.mode] : '') },
                            interactiveStyles: v,
                            onPress: this._handleSecondaryClick,
                            style: O.secondaryControl,
                          },
                          y.a.createElement(x.a, { style: O.secondaryBorder }, h),
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
                    a = this.props.selected,
                    n = [O.icon, a && O.iconSelected],
                    r = [O.icon]
                  switch (t) {
                    case _.a.Remove:
                      return y.a.createElement(D.a, { style: [O.dismissIcon, e && n] })
                    case _.a.Expand:
                      return y.a.createElement(S.a, { style: e ? n : r })
                    case _.a.Active:
                      return y.a.createElement(k.a, { style: n })
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
                    a = e.compact
                  return t
                    ? y.a.createElement(x.a, { style: [O.avatarContainer, a ? O.avatarCompact : O.avatar] }, t)
                    : null
                },
              },
            ]),
            a
          )
        })(y.a.PureComponent)
      m()(R, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var O = C.a.create(function (e) {
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
    bJYH: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'GenericTypeaheadComposeWrapper', function () {
          return H
        })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('VrFO'),
        s = a.n(o),
        i = a('Y9Ll'),
        c = a.n(i),
        l = a('1Pcy'),
        d = a.n(l),
        p = a('5Yy7'),
        u = a.n(p),
        h = a('2VqO'),
        m = a.n(h),
        f = a('KEM+'),
        y = a.n(f),
        g = (a('uFXj'), a('ERkP')),
        v = a.n(g),
        b = a('oEoC'),
        w = a('oQhu'),
        I = a('7nmT'),
        _ = a.n(I),
        C = a('WPfJ'),
        x = a('OEYw'),
        D = a('MWbm'),
        S = a('Irs7'),
        k = a('0FVZ'),
        E = a('xoZN'),
        R = a('7N4s'),
        O = a('rHpw'),
        P = a('GZwR'),
        F = [P.a.Users],
        M = [P.a.Topics],
        A = 0,
        H = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a(e, n) {
            var o
            return (
              s()(this, a),
              (o = t.call(this, e, n)),
              y()(d()(o), '_typeaheadActive', !1),
              y()(d()(o), '_renderTypeaheadDropdown', function (e) {
                var t = o.props,
                  a = t.contextText,
                  n = t.isInlineReply,
                  r = t.onSelectItem,
                  s = t.source,
                  i = o.context.isModal,
                  c = e.resultType === P.a.Topics ? 'hashtag' : void 0,
                  l = v.a.createElement(x.a, {
                    ariaDescendantId: o.state.ariaDescendantId,
                    contextText: a,
                    domId: o._dropdownDomId,
                    filter: o._getFilter(e.resultType),
                    maxTopics: 8,
                    onItemClick: r,
                    onItemFocusChanged: o._handleItemFocusChanged,
                    query: e.word,
                    ref: o._handleTypeaheadRef,
                    source: s,
                    style: o._calcStyle(),
                    topicType: c,
                    withItemAlwaysSelected: !0,
                  })
                return i || n
                  ? v.a.createElement(
                      k.a.HalfSheet,
                      null,
                      v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(D.a, { onClick: o._handleDismiss, style: T.mask }),
                        l,
                      ),
                    )
                  : v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(D.a, { onClick: o._handleDismiss, style: T.mask }),
                      l,
                    )
              }),
              y()(d()(o), 'render', function () {
                var e = o.props,
                  t = e.children,
                  a = e.query,
                  n = v.a.cloneElement(t, {
                    ariaAutocomplete: 'list',
                    ariaControls: o._dropdownDomId,
                    ariaActiveDescendant: o.state.ariaDescendantId,
                    ref: function (e) {
                      ;(o._textInputNode = _.a.findDOMNode(e)), (o._textInputRef = e)
                      var a = t.ref
                      a && a(e)
                    },
                  })
                return v.a.createElement(
                  D.a,
                  { style: T.inputContainer },
                  v.a.createElement(
                    E.a,
                    { onKeyDown: o._handleKeyDown },
                    n,
                    o._textInputNode && a ? o._renderTypeaheadDropdown(a) : null,
                  ),
                )
              }),
              y()(d()(o), '_getFilter', function (e) {
                return 'users' === e ? F : M
              }),
              y()(d()(o), '_calcStyle', function () {
                var e = o.context.isModal,
                  t = o.props,
                  a = t.isInline,
                  n = t.isInlineReply,
                  r = o._textInputNode,
                  s = window.innerHeight,
                  i = window.innerWidth,
                  c = (o._textInputRef && o._textInputRef.getTextInputHeight()) || 20
                if (r instanceof window.HTMLElement) {
                  if (e || a) {
                    var l = r.getBoundingClientRect()
                    return [o._getDropdownPositioningStyle(s, i, l.top, l.top + c, l.left, e, !!n), T.dropdownStyle]
                  }
                  return [o._getModalFullViewportStyle(c), T.modalFullViewportStyle]
                }
                return [o._getDropdownPositioningStyle(c, i, 0, 0, 0, e, !!n), T.dropdownStyle]
              }),
              y()(d()(o), '_handleKeyDown', function (e) {
                var t = o.state.selectedItem,
                  a = o.props,
                  n = a.onSelectItem,
                  r = a.query,
                  s = e.key
                b.g(e) &&
                  r &&
                  ('ArrowDown' === s
                    ? (o._typeaheadRef && o._typeaheadRef.focusNext(), e.preventDefault())
                    : 'ArrowUp' === s
                    ? (o._typeaheadRef && o._typeaheadRef.focusPrevious(), e.preventDefault())
                    : 'Enter' === s || 'Tab' === s
                    ? t && (n(t), e.preventDefault())
                    : 'Escape' === s && (o._handleDismiss(), e.preventDefault()))
              }),
              y()(d()(o), '_handleItemFocusChanged', function (e) {
                return o.setState({ ariaDescendantId: b.b(), selectedItem: e })
              }),
              y()(d()(o), '_handleTypeaheadRef', function (e) {
                o._typeaheadRef = e
              }),
              y()(d()(o), '_handleDismiss', function () {
                o._textInputRef && o._textInputRef.focus(), o.props.onDismiss()
              }),
              y()(
                d()(o),
                '_getDropdownHeight',
                Object(w.a)(function (e, t) {
                  var a = (50 * e) / 100
                  return a > t ? t : a
                }),
              ),
              y()(
                d()(o),
                '_getModalOrInlineReplyDropdownStyles',
                Object(w.a)(function (e, t, a) {
                  return e ? { bottom: ''.concat(a, 'px') } : { top: ''.concat(t, 'px') }
                }),
              ),
              y()(
                d()(o),
                '_getDropdownPositioningStyle',
                Object(w.a)(function (e, t) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    l = 10,
                    d = t - s - l,
                    p = Math.min(d, 300),
                    u = e - n,
                    h = a,
                    m = u / e < 0.5 && h > u,
                    f = m ? o._getDropdownHeight(e, h - l) : o._getDropdownHeight(e, u - l),
                    y = { maxWidth: ''.concat(d, 'px'), minWidth: ''.concat(p, 'px'), maxHeight: ''.concat(f, 'px') }
                  return i || c
                    ? r()(
                        r()({}, y),
                        {},
                        { position: 'fixed', left: ''.concat(s, 'px') },
                        o._getModalOrInlineReplyDropdownStyles(m, n, e - a),
                      )
                    : m
                    ? r()(r()({}, y), {}, { bottom: '100%', position: 'absolute' })
                    : r()(r()({}, y), {}, { top: '100%', position: 'absolute' })
                }),
              ),
              y()(
                d()(o),
                '_getModalFullViewportStyle',
                Object(w.a)(function (e) {
                  return { position: 'absolute', top: ''.concat(e || 0, 'px'), overflowX: 'hidden', overflowY: 'auto' }
                }),
              ),
              (o.state = { ariaDescendantId: b.b() }),
              (o._dropdownDomId = 'typeaheadDropdownWrapped-'.concat(A)),
              (A += 1),
              o
            )
          }
          return (
            c()(a, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.onTypeaheadStateChange,
                    a = e.query,
                    n = !(!this._textInputNode || !a)
                  n !== this._typeaheadActive && ((this._typeaheadActive = n), t && t(n))
                },
              },
              {
                key: 'resetSelectedItem',
                value: function () {
                  this.setState({ selectedItem: void 0 })
                },
              },
            ]),
            a
          )
        })(v.a.Component)
      y()(H, 'contextType', R.b), y()(H, 'defaultProps', { source: P.d.Compose })
      var T = O.a.create(function (e) {
        return {
          dropdownStyle: {
            backgroundColor: e.colors.cellBackground,
            borderRadius: e.borderRadii.small,
            boxShadow: e.boxShadows.medium,
            minHeight: 100,
            overflowX: 'hidden',
            overflowY: 'auto',
          },
          mask: r()(r()({}, O.a.absoluteFillObject), {}, { position: 'fixed' }),
          modalFullViewportStyle: {
            backgroundColor: e.colors.cellBackground,
            right: 0,
            left: 0,
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            minHeight: 100,
          },
          inputContainer: { flexGrow: 1, position: 'relative', width: '100%', zIndex: C.g },
        }
      })
      t.default = Object(S.a)(H, { component: 'compose' })
    },
  },
])
//# sourceMappingURL=WIPED
