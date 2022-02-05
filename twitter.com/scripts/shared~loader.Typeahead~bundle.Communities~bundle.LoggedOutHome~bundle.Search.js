;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '4e/K': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TypeaheadInput', function () {
          return W
        }),
        n.d(t, 'styles', function () {
          return V
        })
      n('OZaJ')
      var o = n('VrFO'),
        r = n.n(o),
        a = n('Y9Ll'),
        s = n.n(a),
        i = n('1Pcy'),
        c = n.n(i),
        u = n('5Yy7'),
        d = n.n(u),
        l = n('N+ot'),
        p = n.n(l),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        _ = (n('uFXj'), n('LW0h'), n('3EFP')),
        v = n('ERkP'),
        w = n.n(v),
        I = n('ZUOq'),
        b = n('+Kfv'),
        D = n('woHV'),
        R = n('3XMw'),
        g = n.n(R),
        C = n('VwDm'),
        E = n('WPfJ'),
        T = n('N5qz'),
        O = n('Es6L'),
        x = n('OEYw'),
        S = n('GZwR'),
        N = n('MWbm'),
        j = n('v6aA'),
        P = n('rHpw'),
        k = n('xoZN'),
        F = n('6OUF'),
        U = n('pf9B'),
        L = n('cHvH'),
        q = n('oEoC')
      function A(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            o = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return p()(this, n)
        }
      }
      var H = g.a.f065ba8c,
        M = function (e) {
          return T.a.isTwoColumnNormalLayout(e)
            ? {
                width: I.a.columnWidths.secondary.normal + P.a.theme.spacesPx.space24,
                left: -P.a.theme.spacesPx.space24 / 2,
              }
            : T.a.isTwoColumnSmallLayout(e)
            ? {
                width: I.a.columnWidths.secondary.small + P.a.theme.spacesPx.space16,
                left: -P.a.theme.spacesPx.space16 / 2,
              }
            : void 0
        },
        B = 1,
        W = (function (e) {
          d()(n, e)
          var t = A(n)
          function n(e, o) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e, o)),
              y()(c()(a), '_withNewTypeaheadUI', !1),
              y()(c()(a), '_render', function (e) {
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
                  f = n.shouldAutoFocus,
                  h = n.shouldFocusOnClear,
                  m = n.style,
                  y = n.testID,
                  _ = a.state.showTypeaheadDropdown || o
                return w.a.createElement(
                  b.a,
                  { viewType: 'typeahead_input' },
                  w.a.createElement(
                    N.a,
                    { onLayout: a._handleLayout, ref: a._setRootContainerNode, style: [V.root, m] },
                    w.a.createElement(
                      k.a,
                      { onKeyDown: a._handleKeyDown, style: V.keydownInputListener },
                      w.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: d,
                          accessibilityRole: 'search',
                          onSubmit: a._handleFormSubmit,
                          style: V.wrapper,
                        },
                        w.a.createElement(
                          N.a,
                          { ref: a._setInputContainerNode, style: i },
                          w.a.createElement(F.a, {
                            Icon: C.a,
                            ariaActiveDescendant: a.state.ariaDescendantId,
                            ariaAutocomplete: 'list',
                            ariaExpanded: _,
                            ariaLabel: H,
                            ariaOwns: a._dropdownDomId,
                            ariaRole: 'combobox',
                            autoComplete: 'off',
                            autoCorrect: !1,
                            autoFocus: f,
                            contentBelow: l && l(),
                            focusOnClear: h,
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
                        w.a.createElement(
                          N.a,
                          { style: [V.typeaheadContainer, !p && V.topBorder] },
                          _ ? a._renderDropdown(t) : null,
                        ),
                      ),
                    ),
                  ),
                )
              }),
              y()(c()(a), '_renderDropdown', function (e) {
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
                  f = t.maxEvents,
                  h = t.maxTopics,
                  m = t.onItemsChanged,
                  y = t.orderResults,
                  _ = t.renderCallout,
                  v = t.renderEmptyState,
                  I = t.renderHeader,
                  b = t.renderNoResultsState,
                  D = t.renderUserDecoration,
                  R = t.selectedItems,
                  g = t.shouldDeferPrefetch,
                  C = t.source,
                  E = t.withFixedPositioning,
                  T = t.withSectionDivider,
                  S = e >= P.a.theme.breakpoints.medium || Object(O.a)(),
                  N = a.state,
                  j = N.dropdownOffset,
                  k = N.query,
                  F = l
                    ? V.modalDropdown
                    : [
                        V.dropdown,
                        !S && E && j ? [Object(q.d)(j), { height: 'calc(100vh - '.concat(j, 'px)') }] : null,
                        (S || p) && V.wideModeDropdown,
                        a._withNewTypeaheadUI && d && M(e),
                        p && V.shortModeDropdown,
                        !S && p && V.shortModeDropdownMobile,
                      ],
                  U = {
                    ariaDescendantId: a.state.ariaDescendantId,
                    domId: a._dropdownDomId,
                    onDismiss: a._handleOnEmptyStateDismiss,
                    onItemFocusChanged: a._handleItemFocusChanged,
                    ref: a._handleDropdownRef,
                    style: F,
                  }
                return v && !k
                  ? v(U)
                  : w.a.createElement(x.a, {
                      ariaDescendantId: a.state.ariaDescendantId,
                      communityId: n,
                      domId: a._dropdownDomId,
                      filter: o,
                      getItemDisabledMessage: r,
                      getItemIsDisabled: s,
                      getTopicExactMatch: i,
                      getUserExactMatch: c,
                      injectedItems: u,
                      maxEvents: f,
                      maxTopics: h,
                      onItemClick: a._handleItemClick,
                      onItemFocusChanged: a._handleItemFocusChanged,
                      onItemsChanged: m,
                      orderResults: y,
                      query: k,
                      ref: a._handleDropdownRef,
                      renderCallout: _,
                      renderHeader: I,
                      renderNoResultsState: b,
                      renderUserDecoration: D,
                      selectedItems: R,
                      shouldDeferPrefetch: g,
                      source: C,
                      style: F,
                      withSectionDivider: T,
                    })
              }),
              y()(c()(a), '_dismissDropdown', function () {
                a.setState({ showTypeaheadDropdown: !1 }), a.props.onDismiss && a.props.onDismiss()
              }),
              y()(c()(a), '_handleOnEmptyStateDismiss', function () {
                a._dismissDropdown(), a._inputRef && a._inputRef.blur()
              }),
              y()(c()(a), '_handleLayout', function () {
                a._updatePosition()
              }),
              y()(c()(a), '_handleInputLayoutChanged', function () {
                a._updatePosition()
              }),
              y()(c()(a), '_updatePosition', function () {
                if (a._inputContainerNode) {
                  var e = a._inputContainerNode.getBoundingClientRect().bottom
                  e !== a.state.dropdownOffset && a.setState({ dropdownOffset: e })
                }
              }),
              y()(c()(a), '_handleDropdownRef', function (e) {
                a._dropdownRef = e
              }),
              y()(c()(a), '_setRootContainerNode', function (e) {
                a._rootContainerNode = e || null
              }),
              y()(c()(a), '_setInputRef', function (e) {
                a._inputRef = e
              }),
              y()(c()(a), '_setInputContainerNode', function (e) {
                ;(a._inputContainerNode = e || null), a._inputContainerNode && a._updatePosition()
              }),
              y()(c()(a), '_handleFocusChange', function (e) {
                var t = U.a.getCount() > 0
                ;(a._rootContainerNode && a._rootContainerNode.contains(e.target)) ||
                  t ||
                  (a.state.showTypeaheadDropdown && a._dismissDropdown())
              }),
              y()(c()(a), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = a.state.showTypeaheadDropdown
                if (Object(q.g)(e)) {
                  if (t === _.a) return a._focusNext(), void e.preventDefault()
                  if (t === _.b) return a._focusPrevious(), void e.preventDefault()
                  if (t === _.d) return a._dismissDropdown(), void e.preventDefault()
                  if (t !== _.f)
                    return t === _.c && a._hasFocusedItem()
                      ? (a._selectFocusedItem(), void e.preventDefault())
                      : void (n || a.setState({ showTypeaheadDropdown: !0 }))
                  a._dismissDropdown()
                }
              }),
              y()(c()(a), '_handleItemFocusChanged', function () {
                a.setState({ ariaDescendantId: Object(q.b)() })
              }),
              y()(c()(a), '_handleInputClear', function () {
                a.setQuery('')
              }),
              y()(c()(a), '_handleInputFocus', function () {
                a.setState({ showTypeaheadDropdown: !0 }), a._updatePosition(), a.props.onFocus && a.props.onFocus()
              }),
              y()(c()(a), '_handleInputChange', function (e) {
                a.setQuery(e.target.value), a._updatePosition()
              }),
              y()(c()(a), '_handleFormSubmit', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  a._inputRef && a._inputRef.blur(),
                  a.setState({ showTypeaheadDropdown: !1 }),
                  a.props.onDismiss && a.props.onDismiss(),
                  a.props.onSubmit && a.props.onSubmit()
              }),
              y()(c()(a), '_handleItemClick', function (e, t) {
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
              y()(c()(a), '_hasFocusedItem', function () {
                return a._dropdownRef && a._dropdownRef.hasFocusedItem()
              }),
              y()(c()(a), '_selectFocusedItem', function () {
                a._dropdownRef && a._dropdownRef.selectFocusedItem()
              }),
              y()(c()(a), '_focusNext', function () {
                a._dropdownRef && a._dropdownRef.focusNext()
              }),
              y()(c()(a), '_focusPrevious', function () {
                a._dropdownRef && a._dropdownRef.focusPrevious()
              }),
              (a.state = { ariaDescendantId: Object(q.b)(), query: e.initialValue, showTypeaheadDropdown: !1 }),
              (a._dropdownDomId = 'typeaheadDropdown-'.concat(B)),
              (B += 1),
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
                  return w.a.createElement(L.a, null, this._render)
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
        })(w.a.Component)
      y()(W, 'defaultProps', {
        disableClearButton: !1,
        filter: [S.a.Users, S.a.Topics],
        isInSidebar: !1,
        initialValue: '',
        withSectionDivider: !0,
      }),
        y()(W, 'contextType', j.a)
      var V = P.a.create(function (e) {
        return {
          root: { flex: 1, flexDirection: 'column', position: 'relative', zIndex: E.d + 1 },
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
      t.default = W
    },
    OEYw: function (e, t, n) {
      'use strict'
      n('OZaJ')
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
        f = n('5Yy7'),
        h = n.n(f),
        m = n('N+ot'),
        y = n.n(m),
        _ = n('AuHH'),
        v = n.n(_),
        w = n('KEM+'),
        I = n.n(w),
        b = (n('7xRU'), n('LW0h'), n('z84I'), n('ERkP')),
        D = n.n(b),
        R = n('RhWx'),
        g = n.n(R),
        C = (n('vrRf'), n('M+/F'), n('tQbP'), n('2G9S'), n('hqKg')),
        E = n('oEoC'),
        T = n('o52z'),
        O = n('kGix'),
        x = n('M0jS'),
        S = n('Qyxo'),
        N = n('lnti'),
        j = n('rxPX'),
        P = n('0KEI'),
        k =
          (n('yH/f'),
          n('Ee2X'),
          n('MvUL'),
          n('KqXw'),
          n('WNMA'),
          n('JtPf'),
          n('7x/C'),
          n('tVqn'),
          n('Ysgh'),
          n('jQ3i'),
          n('x4t0'),
          n('/kEJ')),
        F = n('oEOe'),
        U = n('vy4g'),
        L = n('3A2y'),
        q = n('Y6L+'),
        A = n('9EWH'),
        H = n('Ssj5'),
        M = n('GZwR'),
        B = 'typeaheadV2',
        W = [],
        V = Object.freeze({
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
              o = s()(e, ['rounded_score', 'tokens']),
              r = o.topic,
              a = M.b.Topic
            return { id: ''.concat(a, '_').concat(r.replace(' ', '_')), type: a, tokens: n, rounded_score: t, data: o }
          })
        },
        J = function (e) {
          return e.map(function (e) {
            var t,
              n = e.rounded_score,
              o = e.tokens,
              r = s()(e, ['rounded_score', 'tokens']),
              a = M.b.Event,
              i = null == r || null === (t = r.url) || void 0 === t ? void 0 : t.match(q.A.id)
            return { id: (null == i ? void 0 : i[0]) || '', type: a, tokens: o, rounded_score: n, data: r }
          })
        },
        z = function (e, t) {
          return e.typeaheadV2.remoteResults[t]
        },
        X = function (e, t) {
          return function (n, o) {
            var r = z(o(), Q(e, t)),
              a = r && r.timestamp
            return a && Date.now() - a <= 3e5 ? Promise.resolve() : n(Z(e, t))
          }
        },
        Z = function (e, t) {
          return function (n, o, r) {
            var a = r.api
            if (!e || !e.q || '' === e.q.trim()) return Promise.resolve()
            var s = { queryId: Q(e, t) },
              i = (t || {}).communityId,
              c = e.result_type.split(','),
              u = { actionTypes: V, context: 'FETCH_TYPEAHEAD', meta: s }
            if (c.includes(M.a.CommunityUsers) && i) {
              return Object(F.b)(n, {
                params: { communityId: i, prefix: e.q },
                request: a.Typeahead.fetchCommunityInviteUsers,
              })(u, function (e) {
                var t = ((null == e ? void 0 : e.invite_action_results) || {}).entities
                return t ? [Object(k.c)(t)] : void 0
              })
            }
            return Object(F.b)(n, { params: e, request: a.Typeahead.fetch })(u)
          }
        }
      H.a.register(
        I()({}, B, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case V.REQUEST:
              var n = t.meta.queryId
              return Object(A.a)(e, function (e) {
                e.remoteResults[n] || (e.remoteResults[n] = { fetchStatus: O.a.NONE }),
                  (e.remoteResults[n].fetchStatus = O.a.LOADING)
              })
            case V.SUCCESS:
              var o = t.meta.queryId,
                r = t.payload
              if (!r) return e
              var a = r.users.map(function (e) {
                  return Object(U.a)(e, M.c.Remote)
                }),
                s = {
                  fetchStatus: O.a.LOADED,
                  id: o,
                  orderedSections: r.ordered_sections,
                  events: J(r.events),
                  topics: K(r.topics),
                  users: Object(M.i)(a),
                  timestamp: Date.now(),
                }
              return Object(A.a)(e, function (e) {
                ;(e.cachedIds = e.cachedIds.filter(function (e) {
                  return e !== o
                })),
                  e.cachedIds.push(o),
                  e.cachedIds.length >= 25 &&
                    (e.remoteResults = Object(L.a)(e.remoteResults, e.cachedIds.splice(0, 1))),
                  (e.remoteResults[o] = s)
              })
            case V.FAILURE:
              var i = t.meta.queryId
              return Object(A.a)(e, function (e) {
                e.remoteResults[i].fetchStatus = O.a.FAILED
              })
            default:
              return e
          }
        }),
      )
      var G = n('UQTn'),
        $ = [M.a.Users],
        ee = function (e) {
          var t = e.communityId,
            n = e.filter,
            o = e.query,
            r = e.source
          return Q({ q: o, result_type: (n || $).join(','), src: r }, { communityId: t })
        },
        te = function (e, t) {
          return (function (e, t) {
            var n = z(e, t)
            return n && n.fetchStatus
          })(e, ee(t))
        },
        ne = function (e, t) {
          return (function (e, t) {
            var n = z(e, t)
            return (n && n.users) || W
          })(e, ee(t))
        },
        oe = function (e, t) {
          return (function (e, t) {
            var n = z(e, t)
            return (n && n.topics) || W
          })(e, ee(t))
        },
        re = function (e, t) {
          return (function (e, t) {
            var n = z(e, t)
            return (n && n.events) || W
          })(e, ee(t))
        },
        ae = function (e, t) {
          return (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0)
        },
        se = function () {
          return Object(C.createSelector)(
            ne,
            Object(C.createSelector)(
              function (e, t) {
                return t.query
              },
              function (e, t) {
                return t.filter
              },
              G.d,
              G.e,
              function (e, t, n, o) {
                if (!e || !t || t.indexOf(M.a.Users) < 0) return Object(T.a)()
                var r = Object(G.f)(n, e)
                return Object(M.i)(
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
              var i = Object(S.a)(o || [], function (e) {
                  return e.type === M.b.User ? e.data.id_str : void 0
                }),
                c = t.filter(function (e) {
                  return i.indexOf(e.id) < 0
                }),
                u = e.filter(function (e) {
                  return i.indexOf(e.id) < 0
                }),
                d = Object(E.a)(c, u).slice(0, s || 10),
                l = n === O.a.LOADED,
                p = a && a({ query: r, hasResults: !!e.length, isLoaded: l }),
                f = p ? [].concat(g()(d), [p]) : d
              return f.length ? f : Object(T.a)()
            },
          )
        },
        ie = function () {
          return Object(C.createSelector)(
            se(),
            Object(C.createSelector)(
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
                var a = t === O.a.LOADED,
                  s = r && r({ query: n, hasResults: !!e.length, isLoaded: a }),
                  i = e.slice(0, o || 3)
                return s && i.push(s), i.length ? i : Object(T.a)()
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
              function (e, t, n, o, r) {
                var a = n && r && r.indexOf(M.a.Events) >= 0,
                  s = e.slice(0, o || 1)
                return s.length && a ? s : Object(T.a)()
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
                  : Object(N.a)([a, n.length ? n : void 0, t.length ? t : void 0, e.length ? e : void 0])
              return t.length || e.length || n.length ? s : a ? [a] : Object(T.a)()
            },
          )
        },
        ce = Object(j.a)()
          .propsFromState(function () {
            return { fetchStatus: te, items: ie() }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT',
              ),
              fetchTypeaheadIfNeeded: X,
              fetchUsersPresenceIfNeeded: x.b.fetchManyIfNeeded,
              prefetchTypeaheadUsersIfNeeded: G.b,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        ue = n('8UdT'),
        de = n('kIAd'),
        le = n('Rp9C'),
        pe = n('tAeL'),
        fe = n('v6aA'),
        he = n('VY6S'),
        me = n('w6IS')
      function ye(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            o = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return y()(this, n)
        }
      }
      var _e = (function (e) {
        h()(n, e)
        var t = ye(n)
        function n(e, o) {
          var r
          return (
            c()(this, n),
            (r = t.call(this, e, o)),
            I()(p()(r), '_fetchTypeaheadResultsIfNeeded', function (e) {
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
            I()(p()(r), '_handleItemClick', function (e, t) {
              var n = r.props,
                o = n.analytics,
                a = n.onItemClick,
                s = n.query
              a(e, t)
              var i = le.a.forTypeaheadResult(e, t),
                c = i ? [i] : void 0
              o.scribe({ action: 'click', data: { search_details: { query: s }, targets: c } })
            }),
            I()(p()(r), '_scribeResults', function () {
              var e = r.props,
                t = e.analytics,
                n = e.items,
                o = e.query
              t.scribe({
                action: 'impression',
                data: { items: le.a.forTypeaheadResults(n), search_details: { query: o } },
              })
            }),
            (r._debouncedFetchTypeaheadResultsIfNeeded = Object(he.a)(r._fetchTypeaheadResultsIfNeeded, 250)),
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
                  f = e.source,
                  h = this.context.loggedInUserId,
                  m = this.context.featureSwitches.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') && h
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
                ;(c === p && a === l && d === f) ||
                  (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                  u &&
                    (clearTimeout(this._prefetchResultsTimer),
                    this.setState({ shouldShowPrefetchResults: !1 }),
                    (this._prefetchResultsTimer = setTimeout(function () {
                      t.props.query &&
                        t.props.fetchStatus !== O.a.LOADED &&
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
                  c =
                    (e.shouldDeferPrefetch,
                    e.topicType,
                    e.userLimit,
                    s()(e, [
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
                    ])),
                  u = i && n !== O.a.LOADED,
                  d = u && !this.state.shouldShowPrefetchResults ? o : a
                return D.a.createElement(
                  pe.a,
                  r()({}, c, { isLoading: !!u, items: d, onItemClick: this._handleItemClick, query: i, ref: t }),
                )
              },
            },
          ]),
          n
        )
      })(D.a.Component)
      I()(_e, 'contextType', fe.a),
        I()(_e, 'defaultProps', { filter: [M.a.Users], injectedItems: [], maxEvents: 3, maxTopics: 1 })
      var ve = D.a.forwardRef(function (e, t) {
          return D.a.createElement(_e, r()({}, e, { dropdownRef: t }))
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
