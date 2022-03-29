;(window.webpackJsonp = window.webpackJsonp || []).push([
  [188],
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
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        s = a.n(o),
        i = a('1Pcy'),
        l = a.n(i),
        c = a('5Yy7'),
        d = a.n(c),
        p = a('2VqO'),
        u = a.n(p),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('z84I'), a('ho0z'), a('vrRf'), a('2G9S'), a('ERkP')),
        f = a.n(y),
        v = a('ZcYN'),
        g = a('3XMw'),
        b = a.n(g),
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
              m()(l()(o), '_renderSelectedUsersList', function () {
                var e = o.props.selectedUsers
                return f.a.createElement(_.a, { style: P.selectedUsersList }, e.map(o._renderSelectedUserPill))
              }),
              m()(l()(o), '_renderSelectedUserPill', function (e) {
                var t = o.props.withCompactPills,
                  a = o.props.onRemove.bind(l()(o), e),
                  n =
                    e.type === S.b.User
                      ? f.a.createElement(C.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'custom',
                          uri: e.data.profile_image_url_https,
                        })
                      : void 0
                return f.a.createElement(x.a, {
                  accessibilityLabel: R({ name: e.data.name }),
                  avatar: n,
                  compact: t,
                  key: e.id,
                  mode: 'remove',
                  onClick: a,
                  style: P.selectionPill,
                  text: e.data.name,
                })
              }),
              m()(l()(o), '_getItemIsDisabled', function (e) {
                var t = o.props,
                  a = t.getItemIsDisabled
                return t.preselectedUsers.indexOf(e.id) >= 0 || !(!a || !a(e))
              }),
              m()(l()(o), '_getItemDisabledMessage', function (e) {
                var t = o.props,
                  a = t.getItemDisabledMessage
                return t.preselectedUsers.indexOf(e.id) >= 0 ? void 0 : a ? a(e) : void 0
              }),
              m()(l()(o), '_handleQueryChange', function (e) {
                var t = o.props.onQueryChange
                o.setState({ query: e }), t && t(e)
              }),
              m()(l()(o), '_handleOnSelect', function (e) {
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
                    l = o
                      .map(function (e) {
                        return e.id
                      })
                      .concat(a)
                  return f.a.createElement(
                    _.a,
                    { style: P.root },
                    f.a.createElement(I.default, {
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
                      renderUserDecoration: v.a,
                      selectedItems: l,
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
        })(f.a.Component)
      m()(O, 'defaultProps', { preselectedUsers: [], shouldAutoFocus: !0, withCompactPills: !1 })
      var P = D.a.create(function (e) {
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
        l = a.n(i),
        c = a('5Yy7'),
        d = a.n(c),
        p = a('2VqO'),
        u = a.n(p),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('2G9S'), a('hBvt'), a('uFXj'), a('ERkP')),
        f = a.n(y),
        v = a('t62R'),
        g = a('3XMw'),
        b = a.n(g),
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
              m()(l()(e), '_handleSecondaryClick', function () {
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
                    l = e.secondaryAction,
                    c = e.selected,
                    d = e.style,
                    p = e.text,
                    u = this._renderIcon(!0, s),
                    h = l && this._renderIcon(!1, l.mode),
                    m = [O.root, n && O.compact, r && O.disabled, c && O.selected, d],
                    y = [O.content, u && O.withIcon, a && ((n && O.withAvatarImageCompact) || O.withAvatarImage)],
                    g = w.a.generate({
                      backgroundColor: c ? C.a.theme.colors.primary : 'transparent',
                      color: c ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return f.a.createElement(
                    x.a,
                    { style: m },
                    f.a.createElement(
                      I.a,
                      {
                        accessibilityLabel: t || (s ? E[s] : ''),
                        disabled: r,
                        interactiveStyles: g,
                        link: o,
                        onPress: i,
                        style: y,
                      },
                      this._renderAvatar(),
                      f.a.createElement(
                        v.b,
                        {
                          color: c ? 'whiteOnColor' : 'text',
                          numberOfLines: 1,
                          selectable: !1,
                          style: O.text,
                          weight: 'bold',
                        },
                        p,
                      ),
                      u,
                    ),
                    l
                      ? f.a.createElement(
                          I.a,
                          {
                            accessibilityLabel: l.accessibilityLabel || (l.mode ? E[l.mode] : ''),
                            disabled: r || l.disabled,
                            hoverLabel: { label: l.hoverLabel || (l.mode ? E[l.mode] : '') },
                            interactiveStyles: g,
                            onPress: this._handleSecondaryClick,
                            style: O.secondaryControl,
                          },
                          f.a.createElement(x.a, { style: O.secondaryBorder }, h),
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
                      return f.a.createElement(D.a, { style: [O.dismissIcon, e && n] })
                    case _.a.Expand:
                      return f.a.createElement(S.a, { style: e ? n : r })
                    case _.a.Active:
                      return f.a.createElement(k.a, { style: n })
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
                    ? f.a.createElement(x.a, { style: [O.avatarContainer, a ? O.avatarCompact : O.avatar] }, t)
                    : null
                },
              },
            ]),
            a
          )
        })(f.a.PureComponent)
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
        l = a.n(i),
        c = a('1Pcy'),
        d = a.n(c),
        p = a('5Yy7'),
        u = a.n(p),
        h = a('2VqO'),
        m = a.n(h),
        y = a('KEM+'),
        f = a.n(y),
        v = (a('uFXj'), a('ERkP')),
        g = a.n(v),
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
              f()(d()(o), '_typeaheadActive', !1),
              f()(d()(o), '_renderTypeaheadDropdown', function (e) {
                var t = o.props,
                  a = t.contextText,
                  n = t.isInlineReply,
                  r = t.onSelectItem,
                  s = t.source,
                  i = o.context.isModal,
                  l = e.resultType === P.a.Topics ? 'hashtag' : void 0,
                  c = g.a.createElement(x.a, {
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
                    topicType: l,
                    withItemAlwaysSelected: !0,
                  })
                return i || n
                  ? g.a.createElement(
                      k.a.HalfSheet,
                      null,
                      g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(D.a, { onClick: o._handleDismiss, style: T.mask }),
                        c,
                      ),
                    )
                  : g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(D.a, { onClick: o._handleDismiss, style: T.mask }),
                      c,
                    )
              }),
              f()(d()(o), 'render', function () {
                var e = o.props,
                  t = e.children,
                  a = e.query,
                  n = g.a.cloneElement(t, {
                    ariaAutocomplete: 'list',
                    ariaControls: o._dropdownDomId,
                    ariaActiveDescendant: o.state.ariaDescendantId,
                    ref: function (e) {
                      ;(o._textInputNode = _.a.findDOMNode(e)), (o._textInputRef = e)
                      var a = t.ref
                      a && a(e)
                    },
                  })
                return g.a.createElement(
                  D.a,
                  { style: T.inputContainer },
                  g.a.createElement(
                    E.a,
                    { onKeyDown: o._handleKeyDown },
                    n,
                    o._textInputNode && a ? o._renderTypeaheadDropdown(a) : null,
                  ),
                )
              }),
              f()(d()(o), '_getFilter', function (e) {
                return 'users' === e ? F : M
              }),
              f()(d()(o), '_calcStyle', function () {
                var e = o.context.isModal,
                  t = o.props,
                  a = t.isInline,
                  n = t.isInlineReply,
                  r = o._textInputNode,
                  s = window.innerHeight,
                  i = window.innerWidth,
                  l = (o._textInputRef && o._textInputRef.getTextInputHeight()) || 20
                if (r instanceof window.HTMLElement) {
                  if (e || a) {
                    var c = r.getBoundingClientRect()
                    return [o._getDropdownPositioningStyle(s, i, c.top, c.top + l, c.left, e, !!n), T.dropdownStyle]
                  }
                  return [o._getModalFullViewportStyle(l), T.modalFullViewportStyle]
                }
                return [o._getDropdownPositioningStyle(l, i, 0, 0, 0, e, !!n), T.dropdownStyle]
              }),
              f()(d()(o), '_handleKeyDown', function (e) {
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
              f()(d()(o), '_handleItemFocusChanged', function (e) {
                return o.setState({ ariaDescendantId: b.b(), selectedItem: e })
              }),
              f()(d()(o), '_handleTypeaheadRef', function (e) {
                o._typeaheadRef = e
              }),
              f()(d()(o), '_handleDismiss', function () {
                o._textInputRef && o._textInputRef.focus(), o.props.onDismiss()
              }),
              f()(
                d()(o),
                '_getDropdownHeight',
                Object(w.a)(function (e, t) {
                  var a = (50 * e) / 100
                  return a > t ? t : a
                }),
              ),
              f()(
                d()(o),
                '_getModalOrInlineReplyDropdownStyles',
                Object(w.a)(function (e, t, a) {
                  return e ? { bottom: ''.concat(a, 'px') } : { top: ''.concat(t, 'px') }
                }),
              ),
              f()(
                d()(o),
                '_getDropdownPositioningStyle',
                Object(w.a)(function (e, t) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    c = 10,
                    d = t - s - c,
                    p = Math.min(d, 300),
                    u = e - n,
                    h = a,
                    m = u / e < 0.5 && h > u,
                    y = m ? o._getDropdownHeight(e, h - c) : o._getDropdownHeight(e, u - c),
                    f = { maxWidth: ''.concat(d, 'px'), minWidth: ''.concat(p, 'px'), maxHeight: ''.concat(y, 'px') }
                  return i || l
                    ? r()(
                        r()({}, f),
                        {},
                        { position: 'fixed', left: ''.concat(s, 'px') },
                        o._getModalOrInlineReplyDropdownStyles(m, n, e - a),
                      )
                    : m
                    ? r()(r()({}, f), {}, { bottom: '100%', position: 'absolute' })
                    : r()(r()({}, f), {}, { top: '100%', position: 'absolute' })
                }),
              ),
              f()(
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
            l()(a, [
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
        })(g.a.Component)
      f()(H, 'contextType', R.b), f()(H, 'defaultProps', { source: P.d.Compose })
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
