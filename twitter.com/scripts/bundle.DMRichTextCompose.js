;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48, 227],
  {
    '/FNr': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return s
        })
      n('uFXj')
      var r = n('ERkP'),
        o = n.n(r),
        a = n('i4Oy')
      function i(e) {
        return o.a.createElement('span', null, 'This is a placeholder for "DMConversationEvolution".')
      }
      var c = n('rHpw'),
        l = n('Ty5D')
      function s(e) {
        var t = e.history,
          n = e.richTextInputContext,
          r = e.typeaheadWrapper,
          s = Object(l.i)().conversationId,
          u = Object(l.h)(),
          d = 'string' == typeof u.query.text ? u.query.text : void 0,
          f = a.a.get('window').width >= c.a.theme.breakpoints.small
        return o.a.createElement(i, {
          conversationId: s || void 0,
          history: t,
          isWide: f,
          prefillText: d,
          richTextInputContext: n,
          typeaheadWrapper: r,
        })
      }
    },
    '8fI/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreenWithRichText', function () {
          return u
        })
      var r = n('97Jx'),
        o = n.n(r),
        a = n('ERkP'),
        i = n.n(a),
        c = n('cOtO'),
        l = n('Rk1B'),
        s = n('RH6X'),
        u = function (e) {
          return i.a.createElement(l.default, null, function (t) {
            var n = t.richTextInputContext
            t.typeaheadWrapper
            return i.a.createElement(c.default, o()({}, e, { richTextInputContext: n, typeaheadWrapper: s.a }))
          })
        }
      t.default = u
    },
    M2mT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        o = n.n(r),
        a = n('VrFO'),
        i = n.n(a),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        h = n.n(p),
        y = n('AuHH'),
        v = n.n(y),
        m = n('KEM+'),
        g = n.n(m),
        C = (n('2G9S'), n('i4UL'), n('+/5o')),
        b = n('ERkP'),
        w = n.n(b),
        E = n('HPNB'),
        S = n('VAZu'),
        x = n('wiP2'),
        T = n('Es6L'),
        k = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function O(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: _(_({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        P = n('MWbm'),
        I = n('yw4N'),
        R = n('TnY3'),
        B = n('cHvH'),
        F = n('3xLC')
      function L(e) {
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
            r = v()(e)
          if (t) {
            var o = v()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var j = (function (e) {
        f()(n, e)
        var t = L(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            g()(u()(e), '_renderChildren', function () {
              var t = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? w.a.createElement(
                    P.a,
                    { style: D.fill },
                    w.a.createElement(I.a, { style: D.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
                  )
                : t
            }),
            e
          )
        }
        return (
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e = this
                return w.a.createElement(B.a, null, function (t) {
                  var n = t.windowWidth
                  return E.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n =
                    (e.leftControl,
                    e.screenType,
                    e.showSubtitleOnRoot,
                    e.showSubtitleOnWideDetail,
                    e.withBottomBorder,
                    e.withDetailOpen,
                    o()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  Object(T.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : w.a.createElement(x.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this.context.rootDetailPerColumnScroll
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                  this._renderChildren(),
                )
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.isTwoColumnLayout,
                  n = this.props,
                  r = n.SideNavButton,
                  o = n.TabBar,
                  a = n.TeamsSwitcher,
                  i = n.backLocation,
                  c = n.documentTitle,
                  l = n.headerless,
                  s = n.history,
                  u = n.leftControl,
                  d = n.middleControl,
                  f = n.onBackClick,
                  p = n.rightControl,
                  h = n.screenType,
                  y = n.searchBoxOptions,
                  v = n.secondaryBar,
                  m = n.showSubtitleOnRoot,
                  g = n.showSubtitleOnWideDetail,
                  b = n.subtitle,
                  E = n.title,
                  T = n.titleIconCell,
                  k = n.titleIconCellSize,
                  O = n.withBottomBorder,
                  _ = n.withDetailOpen,
                  I = n.withSearchBox,
                  R = n.withTweetButton,
                  B = 'root' === h,
                  F = 'secondaryRoot' === h,
                  L = 'primaryDetail' === h,
                  j = (L && g) || (B && m),
                  K = B || (L && t),
                  M = B ? C.c : L ? C.a : void 0,
                  N = w.a.createElement(
                    P.a,
                    { style: D.appBarContainer },
                    w.a.createElement(S.a, {
                      backLocation: i,
                      fixed: !1,
                      hideBackButton: K,
                      history: s,
                      leftControl: u,
                      middleControl: d,
                      onBackClick: f,
                      rightControl: p,
                      secondaryBar: v,
                      subtitle: j ? b : void 0,
                      title: E,
                      titleDomId: M,
                      titleIconCell: T,
                      titleIconCellSize: k,
                      withBottomBorder: O,
                    }),
                  ),
                  A =
                    B || (F && _)
                      ? null
                      : w.a.createElement(x.a.Configure, {
                          SideNavButton: r,
                          TabBar: o,
                          TeamsSwitcher: a,
                          backLocation: i,
                          documentTitle: c,
                          headerless: l,
                          middleControl: d,
                          onBackClick: f,
                          rightControl: p,
                          searchBoxOptions: y,
                          subtitle: b,
                          title: E,
                          withSearchBox: I,
                          withTweetButton: R,
                        })
                return w.a.createElement(w.a.Fragment, null, A, N)
              },
            },
          ]),
          n
        )
      })(w.a.Component)
      g()(j, 'contextType', F.a),
        g()(j, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(R.a)(j)
    },
    RH6X: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        y = n('KEM+'),
        v = n.n(y),
        m = (n('2G9S'), n('ERkP')),
        g = n.n(m),
        C = n('oEoC'),
        b = n('2dXj'),
        w = n('4bHO'),
        E = n('dzqK'),
        S = n('GZwR'),
        x = n('zpdM')
      function T(e) {
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var k = (function (e) {
        u()(n, e)
        var t = T(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
            v()(l()(e), '_genericWrapperRef', g.a.createRef()),
            v()(l()(e), 'render', function () {
              var t = e.props,
                n = t.children,
                r = t.contextText,
                o = t.isInline,
                a = t.isInlineReply,
                i = t.onTypeaheadStateChange,
                c = t.source,
                l = e.state,
                s = l.canShowTypeahead,
                u = l.queryContext,
                d = s && u ? { word: u.word, resultType: u.resultType } : void 0
              return g.a.createElement(
                b.a,
                {
                  contextText: r,
                  isInline: o,
                  isInlineReply: a,
                  onDismiss: e._handleDismiss,
                  onSelectItem: e._handleSelectItem,
                  onTypeaheadStateChange: i,
                  query: d,
                  ref: e._genericWrapperRef,
                  source: c || S.d.Compose,
                },
                n(e._handleInputChange),
              )
            }),
            v()(l()(e), '_getCaret', function (e) {
              return e.getSelection().getStartOffset()
            }),
            v()(l()(e), '_getPlaintextFromCurrentBlock', function (e) {
              var t = e.getSelection().anchorKey
              return e.getCurrentContent().getBlockForKey(t).getText()
            }),
            v()(l()(e), '_handleSelectItem', function (t) {
              var n = e.props.onTextUpdated,
                r = e.state.queryContext
              if (r) {
                var o = Object(w.a)(t, r.resultType)
                n(e._replaceToken(o, r))
              }
              e._setQueryContext(void 0)
            }),
            v()(l()(e), '_handleInputChange', function (t) {
              if (!Object(E.a)(t))
                throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
              var n = e.state.queryContext,
                r = n && n.word,
                o = e._getPlaintextFromCurrentBlock(t),
                a = C.c(e._getCaret(t), o),
                i = a.end,
                c = a.start,
                l = a.word,
                s = C.e(l || '', 'compose')
              if ((null == s ? void 0 : s.q) !== r)
                if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === c))
                  e._setQueryContext(void 0)
                else if (s) {
                  var u = s.q,
                    d = s.result_type
                  e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: c, endIndex: i })
                } else e._setQueryContext(void 0)
            }),
            v()(l()(e), '_setQueryContext', function (t) {
              return e.setState({ queryContext: t, canShowTypeahead: !!t })
            }),
            v()(l()(e), '_handleDismiss', function () {
              return e.setState({ canShowTypeahead: !1 })
            }),
            e
          )
        }
        return (
          i()(n, [
            {
              key: '_replaceToken',
              value: function (e, t) {
                var n = t.editorState,
                  r = t.endIndex,
                  o = t.startIndex,
                  a = n
                    .getSelection()
                    .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: o, focusOffset: r }),
                  i = x.Modifier.replaceText(n.getCurrentContent(), a, e),
                  c = x.EditorState.push(n, i, 'insert-characters'),
                  l = o + e.length,
                  s = c.getSelection().merge({ anchorOffset: l, focusOffset: l })
                return x.EditorState.forceSelection(c, s)
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      t.a = k
    },
    Rk1B: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var r = n('RH6X'),
        o = n('hHEM'),
        a = n('keCP')
      t.default = function (e) {
        return (0, e.children)({
          richTextInputContext: {
            convertEmojiToEntities: o.a.convertEmojiToEntities,
            element: a.a,
            initEditorState: o.a.initEditorState,
            insertTextAtCursor: o.a.insertTextAtCursor,
          },
          typeaheadWrapper: r.a,
        })
      }
    },
    cOtO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreen', function () {
          return ne
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        y = n('KEM+'),
        v = n.n(y),
        m = (n('MvUL'), n('KqXw'), n('uFXj'), n('+KXO'), n('z84I'), n('ERkP')),
        g = n.n(m),
        C = n('v6aA'),
        b = n('+Kfv'),
        w = (n('WNMA'), n('zh9S')),
        E = n('MMRb'),
        S = n('CDB5'),
        x = n('RqPI'),
        T = n('hqKg'),
        k = n('AQOc'),
        O = n('z2Pn'),
        _ = n('pNZL'),
        D = n('G6rE'),
        P = n('oEGd'),
        I = n('X/yg'),
        R = function (e, t) {
          return t.match.params.conversationId
        },
        B = Object(T.createSelector)(
          function (e, t) {
            return E.selectConversation(e, R(0, t))
          },
          E.selectEntries,
          R,
          I.l,
          x.q,
          I.m,
          I.n,
          D.e.selectAll,
          function (e, t) {
            return S.j(e, R(0, t))
          },
          function (e, t) {
            return S.i(e, R(0, t))
          },
          function (e, t, n, r, o, a, i, c, l, s) {
            var u = e && e.data
            return {
              conversation: (u && Object(k.a)(u, t, c)) || void 0,
              conversationId: n,
              isNewGroupConversation: r,
              isUploading: l,
              media: s,
              newConversationParticipants: a,
              perspective: o,
            }
          },
        ),
        F = Object(P.d)(B, function (e) {
          return {
            cancelUpload: Object(I.a)(e.match.params.conversationId),
            googleAnalyticsPageView: w.a,
            removeMedia: Object(I.b)(e.match.params.conversationId),
            scribePageImpression: w.d,
            setLastViewedDmInboxPath: O.h,
            updateTweetDetailNav: _.b,
          }
        }),
        L = n('i4Oy'),
        j = n('Oi4X'),
        K = n('aA19'),
        M = n('XnpN'),
        N = n('3XMw'),
        A = n.n(N),
        W = (n('hBvt'), n('/yvb')),
        H = n('6s7X'),
        z = A.a.h810143c,
        V = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            r = e.link,
            o = e.style,
            a = g.a.createElement(H.a, null)
          return g.a.createElement(W.a, {
            accessibilityLabel: t || z,
            hoverLabel: { label: z },
            icon: a,
            key: n,
            link: r,
            pullRight: !0,
            style: o,
            type: 'primaryText',
          })
        },
        J = n('7myi'),
        q = n('M2mT'),
        U = n('rHpw'),
        X = n('aITJ'),
        Y = n('MWbm'),
        G = n('7JQg'),
        Z = n('OhSZ')
      function Q(e) {
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var $ = A.a.d4986f85,
        ee = A.a.e3e58b6d,
        te = A.a.a9ddbb94,
        ne = (function (e) {
          u()(n, e)
          var t = Q(n)
          function n(e, r) {
            var a
            o()(this, n),
              (a = t.call(this, e, r)),
              v()(l()(a), '_composer', g.a.createRef()),
              v()(
                l()(a),
                '_isVDLEnabled',
                a.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  a.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
              ),
              v()(l()(a), '_handleConversationClose', function (e) {
                var t = a.props,
                  n = t.conversation,
                  r = t.history
                null != n && n.trusted ? r.push('/messages') : e()
              }),
              v()(l()(a), '_handleInfoClick', function () {
                var e = a.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(l()(a), '_updateLastViewDmInboxPath', function () {
                var e = a.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var i = e.conversationId,
              c = e.history,
              s = e.isNewGroupConversation,
              u = e.location
            return i || s || u.pathname !== window.location.pathname || c.replace({ pathname: '/messages' }), a
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.scribeNamespace,
                    r = e.scribePageImpression,
                    o = e.updateTweetDetailNav
                  r(n), o(n), t(n), this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.conversationId !== e.conversationId && this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.history,
                    r = e.location,
                    o = e.richTextInputContext,
                    a = e.typeaheadWrapper,
                    i = 'string' == typeof r.query.text ? r.query.text : void 0,
                    c = L.a.get('window').width >= U.a.theme.breakpoints.small
                  return g.a.createElement(
                    q.a,
                    this._getNavProps(),
                    g.a.createElement(
                      b.a,
                      { viewType: 'messages' },
                      g.a.createElement(j.a, {
                        conversationId: t,
                        history: n,
                        isWide: c,
                        location: r,
                        prefillText: i,
                        richTextInputContext: o,
                        typeaheadWrapper: a,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_getNavProps',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.newConversationParticipants,
                    r = e.perspective,
                    o =
                      t && Object.keys(t.participants).length
                        ? Object(Z.a)({ conversation: t, perspective: r })
                        : n
                        ? Object(Z.a)({ newConversationParticipants: n, perspective: r })
                        : $,
                    a =
                      t && Object.keys(t.participants).length
                        ? g.a.createElement(Z.b, { conversation: t, perspective: r, withScreenName: !1 })
                        : n
                        ? g.a.createElement(Z.b, { newConversationParticipants: n, perspective: r, withScreenName: !1 })
                        : $,
                    i = this._isVDLEnabled ? 'large' : 'medium',
                    c = r ? g.a.createElement(K.a, { conversation: t, perspective: r, size: i }) : void 0,
                    l =
                      t &&
                      t.type === E.CONVERSATION_TYPE.ONE_TO_ONE &&
                      r &&
                      Object(M.a)(t, r).map(function (e) {
                        return e.user.screen_name
                      }),
                    s = l ? '@'.concat(l[0]) : void 0
                  return {
                    backLocation: '/messages',
                    onBackClick: this._handleConversationClose,
                    documentTitle: o,
                    rightControl: this._renderRightControl(),
                    title: a,
                    titleIconCell: c,
                    titleIconCellSize: i,
                    subtitle: s,
                    screenType: 'primaryDetail',
                    withBottomTabBar: !1,
                    headerless: X.b.isKaiOS(),
                  }
                },
              },
              {
                key: '_renderRightControl',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.conversation,
                    r = t.conversationId,
                    o = t.location,
                    a = (null == n ? void 0 : n.type) === E.CONVERSATION_TYPE.GROUP,
                    i = (null == o || null === (e = o.state) || void 0 === e ? void 0 : e.position) || 0
                  return r
                    ? g.a.createElement(
                        Y.a,
                        { style: re.rightControlStyles },
                        g.a.createElement(V, {
                          accessibilityLabel: a ? te : ee,
                          conversationId: r,
                          link: { pathname: '/messages/'.concat(r, '/info'), state: { position: i } },
                          style: re.infoButton,
                        }),
                      )
                    : void 0
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(ne, 'contextType', C.a), v()(ne, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      var re = U.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
      t.default = Object(G.c)({ page: 'messages', section: 'thread' })(F(ne))
    },
    dWxr: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, c.default)(e, t)
            .concat((0, i.default)(e))
            .concat((0, a.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, o.default)(e))
          if (0 == n.length) return []
          return (0, l.default)(n), n
        })
      var o = r(n('EW8Q')),
        a = r(n('yyPN')),
        i = r(n('YXS5')),
        c = r(n('vwfs')),
        l = r(n('c8jd'))
      e.exports = t.default
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var r = n('ERkP'),
        o = n.n(r),
        a = n('dWxr'),
        i = n.n(a),
        c = n('rHpw'),
        l = n('aITJ'),
        s = { clipPath: 'circle(0% at center)' },
        u = {
          strategy: function (e, t) {
            for (var n = i()(e.getText()), r = 0; r < n.length; r++)
              n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
          },
          component: function (e) {
            return o.a.createElement('span', { style: { color: c.a.theme.colors.link } }, e.children)
          },
        },
        d = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== w.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              r = e.entityKey,
              a = (r && n.getEntity(r)) || {}
            return !(l.b.isFirefox() && l.b.firefoxVersion() < 49)
              ? o.a.Children.map(t, function (e) {
                  var t,
                    n = o.a.Children.map(e, function (e) {
                      return o.a.createElement('span', { style: s }, e)
                    })[0]
                  return o.a.cloneElement(
                    o.a.createElement('span', null),
                    {
                      style:
                        ((t = (a.data && a.data.url) || ''),
                        {
                          backgroundImage: 'url("'.concat(t, '")'),
                          backgroundSize: '1em 1em',
                          padding: '0.15em',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          WebkitTextFillColor: 'transparent',
                        }),
                    },
                    n,
                  )
                })
              : t
          },
        },
        f = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var r, o, a = t.getText(); (r = e.exec(a)); ) n((o = r.index), o + r[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        },
        p = n('z4Oz'),
        h = n('zpdM'),
        y = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var o = e[r],
              a = o.getText().length
            if (n + a >= t) return { blockKey: o.key, offset: t - n }
            n += a + 1
          }
          return Object.freeze({})
        },
        v = function (e, t) {
          var n = e.getCurrentContent(),
            r = n.getFirstBlock(),
            o = n.getLastBlock(),
            a = t.blockKey,
            i = void 0 === a ? o.key : a,
            c = t.offset,
            l = void 0 === c ? o.getText().length : c,
            s = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: i, focusOffset: l, isBackward: !1 }),
            u = h.Modifier.removeInlineStyle(e.getCurrentContent(), s, 'overflow')
          return h.EditorState.push(e, u, 'change-inline-style')
        },
        m = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            o = e.getCurrentContent(),
            a = o.getLastBlock(),
            i = g(o, n, r)
          if (n) {
            var c = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: i,
                  focusKey: a.key,
                  focusOffset: a.getText().length,
                  isBackward: !1,
                }),
              l = h.Modifier.applyInlineStyle(o, c, 'overflow')
            return h.EditorState.push(e, l, 'change-inline-style')
          }
          return e
        },
        g = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = n,
            o = e.getBlockForKey(t)
          if (o) {
            var a = o.getEntityAt(n)
            if (void 0 !== a) {
              var i = a && e.getEntity(a),
                c = i && i.data && i.data.id
              if (void 0 !== c)
                for (var l = n - 1; l >= 0; l--) {
                  var s = o.getEntityAt(l),
                    u = s && e.getEntity(s)
                  if (!u || !u.data || u.data.id !== c) {
                    r = l + 1
                    break
                  }
                }
            }
            return r
          }
        },
        C = 'TWEMOJI',
        b = 'IMMUTABLE',
        w = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = h.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              r = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                p.a.getTwemojiEntities(e.getText()).forEach(function (o) {
                  if (2 === (o.indices && o.indices.length)) {
                    var a = n.createEntity(C, b, { url: o.url || null, id: r })
                    r += 1
                    var i = a.getLastCreatedEntityKey(),
                      c = e.getKey(),
                      l = t
                        .getSelection()
                        .merge({
                          anchorKey: c,
                          anchorOffset: o.indices[0],
                          focusKey: c,
                          focusOffset: o.indices[1],
                          isBackward: !1,
                        })
                    n = h.Modifier.applyEntity(a, l, i)
                  }
                })
              }),
              h.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: y,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [u, d, f],
              n = h.EditorState.createWithContent(
                'string' == typeof e ? h.ContentState.createFromText(e) : Object(h.convertFromRaw)(e),
                new h.CompositeDecorator(t),
              )
            return h.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              r = e.getSelection(),
              o = h.Modifier.insertText(n, r, t)
            return h.EditorState.push(e, o, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: C,
          updateOverflowStyle: function (e, t) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = e.getSelection(),
              a = h.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              c = e.getCurrentContent().getSelectionAfter(),
              l = e.getCurrentContent(),
              s = l.getBlocksAsArray(),
              u = 'number' == typeof t && t > -1,
              d = u ? y(s, t) : Object.freeze({})
            if ((r && ((a = v(a, d)), (n = !0)), u && ((a = m(a, d)), (n = !0)), n)) {
              var f = (a = h.EditorState.forceSelection(a, o)).getCurrentContent()
              ;(f = (f = f.set('selectionBefore', i)).set('selectionAfter', c)),
                (a = h.EditorState.set(e, { allowUndo: !0, currentContent: f }))
            }
            return a
          },
        })
    },
    keCP: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        y = n('KEM+'),
        v = n.n(y),
        m = n('97Jx'),
        g = n.n(m),
        C = (n('2G9S'), n('jwue'), n('+oxZ'), n('MvUL'), n('KqXw'), n('SV7d')),
        b = n('rHpw'),
        w = 'singleline',
        E = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? b.a.theme.colors.gray700 : t,
            r = b.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(n, ';\n            padding-bottom: ')
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              n,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              w,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              w,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        S = n('ERkP'),
        x = n.n(S),
        T = n('k/Ka'),
        k = n('PxJJ'),
        O = n('w9LO'),
        _ = n('fs1G'),
        D = (n('aWzz'), n('zpdM'))
      function P(e) {
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var I = function (e) {
          return Object(T.a)('div', e)
        },
        R = !1,
        B =
          ((t.a = x.a.forwardRef(function (e, t) {
            var n = C.d()
            return x.a.createElement(
              B,
              g()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            u()(n, e)
            var t = P(n)
            function n() {
              var e
              o()(this, n)
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                v()(l()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return D.EditorState.acceptSelection(
                    t,
                    new D.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                v()(l()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return D.EditorState.forceSelection(t, t.getSelection())
                }),
                v()(l()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    r = t.editorState,
                    o = t.onChange
                  n
                    ? null == o || o(D.EditorState.moveFocusToEnd(r))
                    : null == o || o(D.EditorState.moveSelectionToEnd(r))
                }),
                v()(l()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = E({ placeholderTextColor: t })
                  var r = document.head
                  r && r.insertBefore(n, r.firstChild)
                }),
                v()(l()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                v()(l()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                v()(l()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                v()(l()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                v()(l()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                v()(l()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                v()(l()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    r = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && r.push(e)
                    }),
                    r.length && (null == n ? void 0 : n(r)) ? 'handled' : 'not-handled'
                  )
                }),
                v()(l()(e), '_onPastedText', function (t, n, r) {
                  var o = e.props,
                    a = o.multiline,
                    i = o.onChange
                  return !a && i
                    ? (i(
                        D.EditorState.push(
                          r,
                          D.Modifier.replaceText(r.getCurrentContent(), r.getSelection(), t.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                v()(l()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    r = n.dismissComposerCommandName,
                    o = n.sendTweetCommandName,
                    a = D.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && a(t) ? o : 27 === t.keyCode ? r : Object(D.getDefaultKeyBinding)(t)
                }),
                v()(l()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    r = n && n[t]
                  return r ? (r(), 'handled') : 'not-handled'
                }),
                v()(l()(e), '_onSingleLineReturn', function (t, n) {
                  var r = e.props.handleReturn
                  return null == r || r(t, n), 'handled'
                }),
                v()(l()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    r = t.maxNumberOfLines,
                    o = t.multiline,
                    a = t.numberOfLines,
                    i =
                      b.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (o && a ? a : 1) * i, maxHeight: (o && r ? r : 1) * i }
                }),
                e
              )
            }
            return (
              i()(
                n,
                [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        t = e.onChange,
                        n = e.positionCursorAtBeginning
                      e.positionCursorAtEnd
                        ? this._setFocusToEnd()
                        : n
                        ? null == t || t(this._setFocusToStart())
                        : this.props.autoFocus && this.focus(),
                        R || (this._setDraftJsStyle(), (R = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      k.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t = this.props,
                        n = t.ariaActiveDescendant,
                        r = t.ariaAutocomplete,
                        o = t.ariaControls,
                        a = t.ariaLabel,
                        i = t.blockRenderMap,
                        c = t.blockRendererFn,
                        l = t.editorState,
                        s = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        f = t.onFocus,
                        p = t.onKeyDown,
                        h = t.onKeyPress,
                        y = t.onKeyUp,
                        m = t.placeholder,
                        g = t.spellCheck,
                        C = t.stripPastedStyles,
                        E = t.style,
                        S = t.testID
                      return x.a.createElement(
                        I,
                        {
                          className: u ? void 0 : w,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), E],
                        },
                        x.a.createElement(D.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: o,
                          ariaLabel: a,
                          ariaMultiline: u,
                          blockRenderMap: i,
                          blockRendererFn: c,
                          customAttrs:
                            ((e = {}),
                            v()(e, O.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            v()(e, 'onKeyPress', h),
                            v()(e, 'onKeyUp', y),
                            e),
                          customStyleMap: F(b.a.theme),
                          editorState: l,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? s : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: f,
                          onKeyDown: p,
                          placeholder: m,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== g,
                          stripPastedStyles: C,
                          tabIndex: 0,
                          webDriverTestID: S,
                        }),
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromError',
                    value: function () {
                      return {}
                    },
                  },
                ],
              ),
              n
            )
          })(x.a.Component))
      v()(B, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: _.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        stripPastedStyles: !0,
      }),
        (B.propTypes = {})
      var F = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    uwR9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return u
        })
      var r = n('97Jx'),
        o = n.n(r),
        a = n('ERkP'),
        i = n.n(a),
        c = n('/FNr'),
        l = n('Rk1B'),
        s = n('RH6X')
      function u(e) {
        return i.a.createElement(l.default, null, function (t) {
          var n = t.richTextInputContext
          t.typeaheadWrapper
          return i.a.createElement(c.default, o()({}, e, { richTextInputContext: n, typeaheadWrapper: s.a }))
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
