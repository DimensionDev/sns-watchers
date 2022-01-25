;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '4e/K': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TypeaheadInput', function () {
          return B
        }),
        n.d(t, 'styles', function () {
          return W
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
        h = n('AuHH'),
        f = n.n(h),
        m = n('KEM+'),
        y = n.n(m),
        _ = (n('uFXj'), n('LW0h'), n('3EFP')),
        w = n('ERkP'),
        v = n('ZUOq'),
        I = n('+Kfv'),
        b = n('woHV'),
        R = n('3XMw'),
        D = n.n(R),
        g = n('VwDm'),
        E = n('WPfJ'),
        C = n('N5qz'),
        T = n('Es6L'),
        S = n('OEYw'),
        O = n('GZwR'),
        x = n('MWbm'),
        P = n('v6aA'),
        N = n('rHpw'),
        j = n('xoZN'),
        k = n('6OUF'),
        F = n('pf9B'),
        U = n('cHvH'),
        L = n('oEoC')
      function q(e) {
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
            o = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = D.a.f065ba8c,
        H = function (e) {
          return C.a.isTwoColumnNormalLayout(e)
            ? {
                width: v.a.columnWidths.secondary.normal + N.a.theme.spacesPx.space24,
                left: -N.a.theme.spacesPx.space24 / 2,
              }
            : C.a.isTwoColumnSmallLayout(e)
            ? {
                width: v.a.columnWidths.secondary.small + N.a.theme.spacesPx.space16,
                left: -N.a.theme.spacesPx.space16 / 2,
              }
            : void 0
        },
        M = 1,
        B = (function (e) {
          d()(n, e)
          var t = q(n)
          function n(e, o) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e, o)),
              y()(
                c()(a),
                '_shouldUseHeightOnDropdown',
                a.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
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
                  h = n.shouldAutoFocus,
                  f = n.shouldFocusOnClear,
                  m = n.style,
                  y = n.testID,
                  _ = a.state.showTypeaheadDropdown || o
                return w.createElement(
                  I.a,
                  { viewType: 'typeahead_input' },
                  w.createElement(
                    x.a,
                    { onLayout: a._handleLayout, ref: a._setRootContainerNode, style: [W.root, m] },
                    w.createElement(
                      j.a,
                      { onKeyDown: a._handleKeyDown, style: W.keydownInputListener },
                      w.createElement(
                        b.a,
                        {
                          accessibilityLabel: d,
                          accessibilityRole: 'search',
                          onSubmit: a._handleFormSubmit,
                          style: W.wrapper,
                        },
                        w.createElement(
                          x.a,
                          { ref: a._setInputContainerNode, style: i },
                          w.createElement(k.a, {
                            Icon: g.a,
                            ariaActiveDescendant: a.state.ariaDescendantId,
                            ariaAutocomplete: 'list',
                            ariaExpanded: _,
                            ariaLabel: A,
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
                        w.createElement(
                          x.a,
                          { style: [W.typeaheadContainer, !p && W.topBorder] },
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
                  h = t.maxEvents,
                  f = t.maxTopics,
                  m = t.onItemsChanged,
                  y = t.orderResults,
                  _ = t.renderEmptyState,
                  v = t.renderHeader,
                  I = t.renderNoResultsState,
                  b = t.renderUserDecoration,
                  R = t.selectedItems,
                  D = t.shouldDeferPrefetch,
                  g = t.shouldShowPrefetchResults,
                  E = t.source,
                  C = t.userLimit,
                  O = t.withFixedPositioning,
                  x = t.withSectionDivider,
                  P = e >= N.a.theme.breakpoints.medium || Object(T.a)(),
                  j = a.state,
                  k = j.dropdownOffset,
                  F = j.query,
                  U = l
                    ? W.modalDropdown
                    : [
                        W.dropdown,
                        !P && O && k
                          ? [
                              Object(L.d)(k),
                              a._shouldUseHeightOnDropdown && { height: 'calc(100vh - '.concat(k, 'px)') },
                            ]
                          : null,
                        (P || p) && W.wideModeDropdown,
                        a._withNewTypeaheadUI && d && H(e),
                        p && W.shortModeDropdown,
                        !P && p && W.shortModeDropdownMobile,
                      ],
                  q = {
                    ariaDescendantId: a.state.ariaDescendantId,
                    domId: a._dropdownDomId,
                    onDismiss: a._handleOnEmptyStateDismiss,
                    onItemFocusChanged: a._handleItemFocusChanged,
                    ref: a._handleDropdownRef,
                    style: U,
                  }
                return _ && !F
                  ? _(q)
                  : w.createElement(S.a, {
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
                      renderHeader: v,
                      renderNoResultsState: I,
                      renderUserDecoration: b,
                      selectedItems: R,
                      shouldDeferPrefetch: D,
                      shouldShowPrefetchResults: g,
                      source: E,
                      style: U,
                      userLimit: C,
                      withSectionDivider: x,
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
                var t = F.a.getCount() > 0
                ;(a._rootContainerNode && a._rootContainerNode.contains(e.target)) ||
                  t ||
                  (a.state.showTypeaheadDropdown && a._dismissDropdown())
              }),
              y()(c()(a), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = a.state.showTypeaheadDropdown
                if (Object(L.g)(e)) {
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
                a.setState({ ariaDescendantId: Object(L.b)() })
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
              (a.state = { ariaDescendantId: Object(L.b)(), query: e.initialValue, showTypeaheadDropdown: !1 }),
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
                  return w.createElement(U.a, null, this._render)
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
        })(w.Component)
      y()(B, 'defaultProps', {
        disableClearButton: !1,
        filter: [O.a.Users, O.a.Topics],
        isInSidebar: !1,
        initialValue: '',
        withSectionDivider: !0,
      }),
        y()(B, 'contextType', P.a)
      var W = N.a.create(function (e) {
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
      t.default = B
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
        h = n('5Yy7'),
        f = n.n(h),
        m = n('N+ot'),
        y = n.n(m),
        _ = n('AuHH'),
        w = n.n(_),
        v = n('KEM+'),
        I = n.n(v),
        b = (n('7xRU'), n('LW0h'), n('z84I'), n('ERkP')),
        R = n('RhWx'),
        D = n.n(R),
        g = (n('vrRf'), n('M+/F'), n('tQbP'), n('2G9S'), n('hqKg')),
        E = n('oEoC'),
        C = n('o52z'),
        T = n('kGix'),
        S = n('M0jS'),
        O = n('Qyxo'),
        x = n('lnti'),
        P = n('rxPX'),
        N = n('0KEI'),
        j =
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
        k = n('oEOe'),
        F = n('vy4g'),
        U = n('3A2y'),
        L = n('Y6L+'),
        q = n('9EWH'),
        A = n('Ssj5'),
        H = n('GZwR'),
        M = 'typeaheadV2',
        B = [],
        W = Object.freeze({
          REQUEST: 'rweb/typeaheadV2/FETCH_REQUEST',
          SUCCESS: 'rweb/typeaheadV2/FETCH_SUCCESS',
          FAILURE: 'rweb/typeaheadV2/FETCH_FAILURE',
        }),
        V = function (e, t) {
          var n = e.q,
            o = e.result_type,
            r = e.src,
            a = o
          return (
            null != t && t.communityId && (a = ''.concat(o, '_').concat(t.communityId)),
            ''.concat(n, '_').concat(a, '_').concat(r)
          )
        },
        Q = { remoteResults: {}, cachedIds: [] }
      var Y = function (e) {
          return e.map(function (e) {
            var t = e.rounded_score,
              n = e.tokens,
              o = s()(e, ['rounded_score', 'tokens']),
              r = o.topic,
              a = o.topic_type || H.b.Topic
            return { id: ''.concat(a, '_').concat(r.replace(' ', '_')), type: a, tokens: n, rounded_score: t, data: o }
          })
        },
        K = function (e) {
          return e.map(function (e) {
            var t,
              n = e.rounded_score,
              o = e.tokens,
              r = s()(e, ['rounded_score', 'tokens']),
              a = r.topic_type || H.b.Event,
              i = null == r || null === (t = r.url) || void 0 === t ? void 0 : t.match(L.A.id)
            return { id: (null == i ? void 0 : i[0]) || '', type: a, tokens: o, rounded_score: n, data: r }
          })
        },
        J = function (e, t) {
          return e.typeaheadV2.remoteResults[t]
        },
        z = function (e, t) {
          return function (n, o) {
            var r = J(o(), V(e, t)),
              a = r && r.timestamp
            return a && Date.now() - a <= 3e5 ? Promise.resolve() : n(X(e, t))
          }
        },
        X = function (e, t) {
          return function (n, o, r) {
            var a = r.api
            if (!e || !e.q || '' === e.q.trim()) return Promise.resolve()
            var s = { queryId: V(e, t) },
              i = (t || {}).communityId,
              c = e.result_type.split(','),
              u = { actionTypes: W, context: 'FETCH_TYPEAHEAD', meta: s }
            if (c.includes(H.a.CommunityUsers) && i) {
              return Object(k.b)(n, {
                params: { communityId: i, prefix: e.q },
                request: a.Typeahead.fetchCommunityInviteUsers,
              })(u, function (e) {
                var t = ((null == e ? void 0 : e.invite_action_results) || {}).entities
                return t ? [Object(j.c)(t)] : void 0
              })
            }
            return Object(k.b)(n, { params: e, request: a.Typeahead.fetch })(u)
          }
        }
      A.a.register(
        I()({}, M, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case W.REQUEST:
              var n = t.meta.queryId
              return Object(q.a)(e, function (e) {
                e.remoteResults[n] || (e.remoteResults[n] = { fetchStatus: T.a.NONE }),
                  (e.remoteResults[n].fetchStatus = T.a.LOADING)
              })
            case W.SUCCESS:
              var o = t.meta.queryId,
                r = t.payload
              if (!r) return e
              var a = r.users.map(function (e) {
                  return Object(F.a)(e, H.c.Remote)
                }),
                s = {
                  fetchStatus: T.a.LOADED,
                  id: o,
                  orderedSections: r.ordered_sections,
                  events: K(r.events),
                  topics: Y(r.topics),
                  users: Object(H.g)(a),
                  timestamp: Date.now(),
                }
              return Object(q.a)(e, function (e) {
                ;(e.cachedIds = e.cachedIds.filter(function (e) {
                  return e !== o
                })),
                  e.cachedIds.push(o),
                  e.cachedIds.length >= 25 &&
                    (e.remoteResults = Object(U.a)(e.remoteResults, e.cachedIds.splice(0, 1))),
                  (e.remoteResults[o] = s)
              })
            case W.FAILURE:
              var i = t.meta.queryId
              return Object(q.a)(e, function (e) {
                e.remoteResults[i].fetchStatus = T.a.FAILED
              })
            default:
              return e
          }
        }),
      )
      var Z = n('UQTn'),
        G = [H.a.Users],
        $ = function (e) {
          var t = e.communityId,
            n = e.filter,
            o = e.query,
            r = e.source
          return V({ q: o, result_type: (n || G).join(','), src: r }, { communityId: t })
        },
        ee = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return n && n.fetchStatus
          })(e, $(t))
        },
        te = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return (n && n.users) || B
          })(e, $(t))
        },
        ne = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return (n && n.topics) || B
          })(e, $(t))
        },
        oe = function (e, t) {
          return (function (e, t) {
            var n = J(e, t)
            return (n && n.events) || B
          })(e, $(t))
        },
        re = function (e, t) {
          return (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0)
        },
        ae = function () {
          return Object(g.createSelector)(
            te,
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
                if (!e || !t || t.indexOf(H.a.Users) < 0) return Object(C.a)()
                var r = Object(Z.f)(n, e)
                return Object(H.g)(
                  r
                    .map(function (e) {
                      return o[e]
                    })
                    .sort(re)
                    .slice(0, 10),
                )
              },
            ),
            ee,
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
              var i = Object(O.a)(o || [], function (e) {
                  return e.type === H.b.User ? e.data.id_str : void 0
                }),
                c = t.filter(function (e) {
                  return i.indexOf(e.id) < 0
                }),
                u = e.filter(function (e) {
                  return i.indexOf(e.id) < 0
                }),
                d = Object(E.a)(c, u).slice(0, s || 10),
                l = n === T.a.LOADED,
                p = a && a({ query: r, hasResults: !!e.length, isLoaded: l }),
                h = p ? [].concat(D()(d), [p]) : d
              return h.length ? h : Object(C.a)()
            },
          )
        },
        se = function () {
          return Object(g.createSelector)(
            ae(),
            Object(g.createSelector)(
              ne,
              ee,
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
                var a = t === T.a.LOADED,
                  s = r && r({ query: n, hasResults: !!e.length, isLoaded: a }),
                  i = e.slice(0, o || 3)
                return s && i.push(s), i.length ? i : Object(C.a)()
              },
            ),
            Object(g.createSelector)(
              oe,
              ee,
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
                var a = n && r && r.indexOf(H.a.Events) >= 0,
                  s = e.slice(0, o || 1)
                return s.length && a ? s : Object(C.a)()
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
                  : Object(x.a)([a, n.length ? n : void 0, t.length ? t : void 0, e.length ? e : void 0])
              return t.length || e.length || n.length ? s : a ? [a] : Object(C.a)()
            },
          )
        },
        ie = Object(P.a)()
          .propsFromState(function () {
            return { fetchStatus: ee, items: se() }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)(
                'TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT',
              ),
              fetchTypeaheadIfNeeded: z,
              fetchUsersPresenceIfNeeded: S.b.fetchManyIfNeeded,
              prefetchTypeaheadUsersIfNeeded: Z.b,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        ce = n('8UdT'),
        ue = n('kIAd'),
        de = n('Rp9C'),
        le = n('tAeL'),
        pe = n('v6aA'),
        he = n('VY6S'),
        fe = n('w6IS')
      function me(e) {
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
            o = w()(e)
          if (t) {
            var r = w()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return y()(this, n)
        }
      }
      var ye = (function (e) {
        f()(n, e)
        var t = me(n)
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
              var i = de.a.forTypeaheadResult(e, t),
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
                data: { items: de.a.forTypeaheadResults(n), search_details: { query: o } },
              })
            }),
            (r._debouncedFetchTypeaheadResultsIfNeeded = Object(he.a)(r._fetchTypeaheadResultsIfNeeded, 250)),
            (r.state = {
              shouldShowPrefetchResults:
                void 0 === r.props.shouldShowPrefetchResults || r.props.shouldShowPrefetchResults,
            }),
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
                  d = n.shouldShowPrefetchResults,
                  l = n.source,
                  p = e.filter,
                  h = e.query,
                  f = e.source,
                  m = this.context.loggedInUserId,
                  y = this.context.featureSwitches.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') && m
                if (null != s && s.length && s !== e.items && (this._scribeResults(), i && i(s), y)) {
                  var _ = Object(fe.a)(s)
                    .filter(function (e) {
                      return e.type === ce.b.User
                    })
                    .map(function (e) {
                      return e.id
                    })
                  _ && r(_).catch(o({}))
                }
                ;(c === h && a === p && l === f) ||
                  (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                  u &&
                    !1 !== d &&
                    (clearTimeout(this._prefetchResultsTimer),
                    this.setState({ shouldShowPrefetchResults: !1 }),
                    (this._prefetchResultsTimer = setTimeout(function () {
                      t.props.query &&
                        t.props.fetchStatus !== T.a.LOADED &&
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
                    e.shouldShowPrefetchResults,
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
                      'shouldShowPrefetchResults',
                      'topicType',
                      'userLimit',
                    ])),
                  u = i && n !== T.a.LOADED,
                  d = u && !this.state.shouldShowPrefetchResults ? o : a
                return b.createElement(
                  le.a,
                  r()({}, c, { isLoading: !!u, items: d, onItemClick: this._handleItemClick, query: i, ref: t }),
                )
              },
            },
          ]),
          n
        )
      })(b.Component)
      I()(ye, 'contextType', pe.a),
        I()(ye, 'defaultProps', { filter: [H.a.Users], injectedItems: [], maxEvents: 3, maxTopics: 1 })
      var _e = b.forwardRef(function (e, t) {
          return b.createElement(ye, r()({}, e, { dropdownRef: t }))
        }),
        we = ie.forwardRef(_e)
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
