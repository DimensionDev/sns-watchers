;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48, 222],
  {
    '8fI/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreenWithRichText', function () {
          return s
        })
      var r = n('97Jx'),
        o = n.n(r),
        a = n('ERkP'),
        i = n('cOtO'),
        c = n('Rk1B'),
        l = n('RH6X'),
        s = function (e) {
          return a.createElement(c.default, null, function (t) {
            var n = t.richTextInputContext
            t.typeaheadWrapper
            return a.createElement(i.default, o()({}, e, { richTextInputContext: n, typeaheadWrapper: l.a }))
          })
        }
      t.default = s
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
        w = n('HPNB'),
        E = n('v6aA'),
        S = n('VAZu'),
        x = n('wiP2'),
        T = n('Es6L'),
        O = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function k(e, t) {
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
            ? k(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = O.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: _(_({}, O.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        B = n('MWbm'),
        P = n('yw4N'),
        I = n('TnY3'),
        R = n('cHvH'),
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
      var K = (function (e) {
        f()(n, e)
        var t = L(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            g()(u()(e), '_renderChildren', function (t) {
              var n = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? b.createElement(
                    B.a,
                    { style: D.fill },
                    b.createElement(
                      P.a,
                      { style: D.viewportView },
                      t ? e._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      n,
                    ),
                  )
                : n
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
                return b.createElement(R.a, null, function (t) {
                  var n = t.windowWidth
                  return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                return b.createElement(
                  b.Fragment,
                  null,
                  Object(T.a)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : b.createElement(x.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this,
                  t = this.context.rootDetailPerColumnScroll
                return b.createElement(E.a.Consumer, null, function (n) {
                  var r = n.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    o = t
                      ? !r && e._renderInlineNav({ isTwoColumnLayout: !0 })
                      : e._renderInlineNav({ isTwoColumnLayout: !0 })
                  return b.createElement(b.Fragment, null, o, e._renderChildren(r))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.appBarScrollEnabled,
                  n = void 0 !== t && t,
                  r = e.isTwoColumnLayout,
                  o = this.props,
                  a = o.SideNavButton,
                  i = o.TabBar,
                  c = o.TeamsSwitcher,
                  l = o.backLocation,
                  s = o.documentTitle,
                  u = o.headerless,
                  d = o.history,
                  f = o.leftControl,
                  p = o.middleControl,
                  h = o.onBackClick,
                  y = o.rightControl,
                  v = o.screenType,
                  m = o.searchBoxOptions,
                  g = o.secondaryBar,
                  w = o.showSubtitleOnRoot,
                  E = o.showSubtitleOnWideDetail,
                  T = o.subtitle,
                  O = o.title,
                  k = o.titleIconCell,
                  _ = o.titleIconCellSize,
                  P = o.withBottomBorder,
                  I = o.withDetailOpen,
                  R = o.withSearchBox,
                  F = o.withTweetButton,
                  L = 'root' === v,
                  K = 'secondaryRoot' === v,
                  j = 'primaryDetail' === v,
                  M = (j && E) || (L && w),
                  N = L || (j && r),
                  A = L ? C.c : j ? C.a : void 0,
                  H = b.createElement(
                    B.a,
                    { style: n ? [D.appBarContainer, D.appBarZindex] : D.appBarZindex },
                    b.createElement(S.a, {
                      backLocation: l,
                      fixed: !1,
                      hideBackButton: N,
                      history: d,
                      leftControl: f,
                      middleControl: p,
                      onBackClick: h,
                      rightControl: y,
                      secondaryBar: n ? g : null,
                      subtitle: M ? T : void 0,
                      title: O,
                      titleDomId: A,
                      titleIconCell: k,
                      titleIconCellSize: _,
                      withBottomBorder: P,
                    }),
                  ),
                  W =
                    L || (K && I)
                      ? null
                      : b.createElement(x.a.Configure, {
                          SideNavButton: a,
                          TabBar: i,
                          TeamsSwitcher: c,
                          backLocation: l,
                          documentTitle: s,
                          headerless: u,
                          middleControl: p,
                          onBackClick: h,
                          rightControl: y,
                          searchBoxOptions: m,
                          subtitle: T,
                          title: O,
                          withSearchBox: R,
                          withTweetButton: F,
                        })
                return b.createElement(b.Fragment, null, W, H, n ? null : g)
              },
            },
          ]),
          n
        )
      })(b.Component)
      g()(K, 'contextType', F.a),
        g()(K, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(I.a)(K)
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
        g = n('oEoC'),
        C = n('2dXj'),
        b = n('4bHO'),
        w = n('dzqK'),
        E = n('GZwR'),
        S = n('zpdM')
      function x(e) {
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
      var T = (function (e) {
        u()(n, e)
        var t = x(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
            v()(l()(e), '_genericWrapperRef', m.createRef()),
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
              return m.createElement(
                C.a,
                {
                  contextText: r,
                  isInline: o,
                  isInlineReply: a,
                  onDismiss: e._handleDismiss,
                  onSelectItem: e._handleSelectItem,
                  onTypeaheadStateChange: i,
                  query: d,
                  ref: e._genericWrapperRef,
                  source: c || E.d.Compose,
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
                var o = Object(b.a)(t, r.resultType)
                n(e._replaceToken(o, r))
              }
              e._setQueryContext(void 0)
            }),
            v()(l()(e), '_handleInputChange', function (t) {
              if (!Object(w.a)(t))
                throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
              var n = e.state.queryContext,
                r = n && n.word,
                o = e._getPlaintextFromCurrentBlock(t),
                a = g.c(e._getCaret(t), o),
                i = a.end,
                c = a.start,
                l = a.word,
                s = g.e(l || '', 'compose')
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
                  i = S.Modifier.replaceText(n.getCurrentContent(), a, e),
                  c = S.EditorState.push(n, i, 'insert-characters'),
                  l = o + e.length,
                  s = c.getSelection().merge({ anchorOffset: l, focusOffset: l })
                return S.EditorState.forceSelection(c, s)
              },
            },
          ]),
          n
        )
      })(m.Component)
      t.a = T
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
          return ee
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
        g = n('+Kfv'),
        C = (n('WNMA'), n('zh9S')),
        b = n('MMRb'),
        w = n('CDB5'),
        E = n('RqPI'),
        S = n('hqKg'),
        x = n('AQOc'),
        T = n('z2Pn'),
        O = n('pNZL'),
        k = n('G6rE'),
        _ = n('oEGd'),
        D = n('X/yg'),
        B = function (e, t) {
          return t.match.params.conversationId
        },
        P = Object(S.createSelector)(
          function (e, t) {
            return b.selectConversation(e, B(0, t))
          },
          b.selectEntries,
          B,
          D.l,
          E.q,
          D.m,
          D.n,
          k.e.selectAll,
          function (e, t) {
            return w.j(e, B(0, t))
          },
          function (e, t) {
            return w.i(e, B(0, t))
          },
          function (e, t, n, r, o, a, i, c, l, s) {
            var u = e && e.data
            return {
              conversation: (u && Object(x.a)(u, t, c)) || void 0,
              conversationId: n,
              isNewGroupConversation: r,
              isUploading: l,
              media: s,
              newConversationParticipants: a,
              perspective: o,
            }
          },
        ),
        I = Object(_.d)(P, function (e) {
          return {
            cancelUpload: Object(D.a)(e.match.params.conversationId),
            googleAnalyticsPageView: C.a,
            removeMedia: Object(D.b)(e.match.params.conversationId),
            scribePageImpression: C.d,
            setLastViewedDmInboxPath: T.h,
            updateTweetDetailNav: O.b,
          }
        }),
        R = n('i4Oy'),
        F = n('Oi4X'),
        L = n('aA19'),
        K = n('XnpN'),
        j = n('3XMw'),
        M = n.n(j),
        N = (n('hBvt'), n('/yvb')),
        A = n('6s7X'),
        H = M.a.h810143c,
        W = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            r = e.link,
            o = e.style,
            a = m.createElement(A.a, null)
          return m.createElement(N.a, {
            accessibilityLabel: t || H,
            hoverLabel: { label: H },
            icon: a,
            key: n,
            link: r,
            pullRight: !0,
            style: o,
            type: 'primaryText',
          })
        },
        z = n('7myi'),
        V = n('M2mT'),
        J = n('rHpw'),
        U = n('aITJ'),
        G = n('MWbm'),
        q = n('7JQg'),
        Y = n('OhSZ')
      function X(e) {
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
      var Z = M.a.d4986f85,
        Q = M.a.e3e58b6d,
        $ = M.a.a9ddbb94,
        ee = (function (e) {
          u()(n, e)
          var t = X(n)
          function n(e) {
            var r
            o()(this, n),
              (r = t.call(this, e)),
              v()(l()(r), '_composer', m.createRef()),
              v()(l()(r), '_handleConversationClose', function (e) {
                var t = r.props,
                  n = t.conversation,
                  o = t.history
                null != n && n.trusted ? o.push('/messages') : e()
              }),
              v()(l()(r), '_handleInfoClick', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(l()(r), '_updateLastViewDmInboxPath', function () {
                var e = r.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var a = e.conversationId,
              i = e.history,
              c = e.isNewGroupConversation,
              s = e.location
            return a || c || s.pathname !== window.location.pathname || i.replace({ pathname: '/messages' }), r
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
                    c = R.a.get('window').width >= J.a.theme.breakpoints.small
                  return m.createElement(
                    V.a,
                    this._getNavProps(),
                    m.createElement(
                      g.a,
                      { viewType: 'messages' },
                      m.createElement(F.a, {
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
                        ? Object(Y.a)({ conversation: t, perspective: r })
                        : n
                        ? Object(Y.a)({ newConversationParticipants: n, perspective: r })
                        : Z,
                    a =
                      t && Object.keys(t.participants).length
                        ? m.createElement(Y.b, { conversation: t, perspective: r, withScreenName: !1 })
                        : n
                        ? m.createElement(Y.b, { newConversationParticipants: n, perspective: r, withScreenName: !1 })
                        : Z,
                    i = 'medium',
                    c = r ? m.createElement(L.a, { conversation: t, perspective: r, size: i }) : void 0,
                    l =
                      t &&
                      t.type === b.CONVERSATION_TYPE.ONE_TO_ONE &&
                      r &&
                      Object(K.a)(t, r).map(function (e) {
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
                    headerless: U.b.isKaiOS(),
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
                    a = (null == n ? void 0 : n.type) === b.CONVERSATION_TYPE.GROUP,
                    i = (null == o || null === (e = o.state) || void 0 === e ? void 0 : e.position) || 0
                  return r
                    ? m.createElement(
                        G.a,
                        { style: te.rightControlStyles },
                        m.createElement(W, {
                          accessibilityLabel: a ? $ : Q,
                          conversationId: r,
                          link: { pathname: '/messages/'.concat(r, '/info'), state: { position: i } },
                          style: te.infoButton,
                        }),
                      )
                    : void 0
                },
              },
            ]),
            n
          )
        })(m.PureComponent)
      v()(ee, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: z.a })
      var te = J.a.create(function (e) {
        return {
          root: { flexGrow: 1 },
          activity: { flexBasis: '1px', flexGrow: 1, height: '100%' },
          kaiOSFix: { paddingBottom: 20 },
          dragDrop: { flexGrow: 1 },
          scrollView: { flexGrow: 1 },
          infoButton: { marginRight: e.spaces.space4 },
          offsetBottom: { paddingBottom: J.a.iPhoneOffsetBottom },
          rightControlStyles: { flexDirection: 'row' },
        }
      })
      t.default = Object(q.c)({ page: 'messages', section: 'thread' })(I(ee))
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
        o = n('dWxr'),
        a = n.n(o),
        i = n('rHpw'),
        c = n('aITJ'),
        l = { clipPath: 'circle(0% at center)' },
        s = {
          strategy: function (e, t) {
            for (var n = a()(e.getText()), r = 0; r < n.length; r++)
              n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
          },
          component: function (e) {
            return r.createElement('span', { style: { color: i.a.theme.colors.link } }, e.children)
          },
        },
        u = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== b.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              o = e.entityKey,
              a = (o && n.getEntity(o)) || {}
            return !(c.b.isFirefox() && c.b.firefoxVersion() < 49)
              ? r.Children.map(t, function (e) {
                  var t,
                    n = r.Children.map(e, function (e) {
                      return r.createElement('span', { style: l }, e)
                    })[0]
                  return r.cloneElement(
                    r.createElement('span', null),
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
        d = {
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
        f = n('z4Oz'),
        p = n('zpdM'),
        h = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var o = e[r],
              a = o.getText().length
            if (n + a >= t) return { blockKey: o.key, offset: t - n }
            n += a + 1
          }
          return Object.freeze({})
        },
        y = function (e, t) {
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
            u = p.Modifier.removeInlineStyle(e.getCurrentContent(), s, 'overflow')
          return p.EditorState.push(e, u, 'change-inline-style')
        },
        v = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            o = e.getCurrentContent(),
            a = o.getLastBlock(),
            i = m(o, n, r)
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
              l = p.Modifier.applyInlineStyle(o, c, 'overflow')
            return p.EditorState.push(e, l, 'change-inline-style')
          }
          return e
        },
        m = function (e, t) {
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
        g = 'TWEMOJI',
        C = 'IMMUTABLE',
        b = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = p.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              r = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                f.a.getTwemojiEntities(e.getText()).forEach(function (o) {
                  if (2 === (o.indices && o.indices.length)) {
                    var a = n.createEntity(g, C, { url: o.url || null, id: r })
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
                    n = p.Modifier.applyEntity(a, l, i)
                  }
                })
              }),
              p.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: h,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [s, u, d],
              n = p.EditorState.createWithContent(p.ContentState.createFromText(e), new p.CompositeDecorator(t))
            return p.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              r = e.getSelection(),
              o = p.Modifier.insertText(n, r, t)
            return p.EditorState.push(e, o, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: g,
          updateOverflowStyle: function (e, t) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = e.getSelection(),
              a = p.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              c = e.getCurrentContent().getSelectionAfter(),
              l = e.getCurrentContent(),
              s = l.getBlocksAsArray(),
              u = 'number' == typeof t && t > -1,
              d = u ? h(s, t) : Object.freeze({})
            if ((r && ((a = y(a, d)), (n = !0)), u && ((a = v(a, d)), (n = !0)), n)) {
              var f = (a = p.EditorState.forceSelection(a, o)).getCurrentContent()
              ;(f = (f = f.set('selectionBefore', i)).set('selectionAfter', c)),
                (a = p.EditorState.set(e, { allowUndo: !0, currentContent: f }))
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
        x = n('k/Ka'),
        T = n('PxJJ'),
        O = n('w9LO'),
        k = n('fs1G'),
        _ = (n('aWzz'), n('zpdM'))
      function D(e) {
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
      var B = function (e) {
          return Object(x.a)('div', e)
        },
        P = !1,
        I =
          ((t.a = S.forwardRef(function (e, t) {
            var n = C.d()
            return S.createElement(
              I,
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
            var t = D(n)
            function n() {
              var e
              o()(this, n)
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                v()(l()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return _.EditorState.acceptSelection(
                    t,
                    new _.SelectionState({
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
                  return _.EditorState.forceSelection(t, t.getSelection())
                }),
                v()(l()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    r = t.editorState,
                    o = t.onChange
                  n
                    ? null == o || o(_.EditorState.moveFocusToEnd(r))
                    : null == o || o(_.EditorState.moveSelectionToEnd(r))
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
                        _.EditorState.push(
                          r,
                          _.Modifier.replaceText(r.getCurrentContent(), r.getSelection(), t.replace(/[\r\n]+/g, ' ')),
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
                    a = _.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && a(t) ? o : 27 === t.keyCode ? r : Object(_.getDefaultKeyBinding)(t)
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
                        P || (this._setDraftJsStyle(), (P = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      T.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
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
                        i = t.editorState,
                        c = t.handleReturn,
                        l = t.multiline,
                        s = t.onChange,
                        u = t.onFocus,
                        d = t.onKeyDown,
                        f = t.onKeyPress,
                        p = t.onKeyUp,
                        h = t.placeholder,
                        y = t.spellCheck,
                        m = t.style,
                        g = t.testID
                      return S.createElement(
                        B,
                        {
                          className: l ? void 0 : w,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), m],
                        },
                        S.createElement(_.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: o,
                          ariaLabel: a,
                          ariaMultiline: l,
                          customAttrs:
                            ((e = {}),
                            v()(e, O.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            v()(e, 'onKeyPress', f),
                            v()(e, 'onKeyUp', p),
                            e),
                          customStyleMap: R(b.a.theme),
                          editorState: i,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: l ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: s,
                          onFocus: u,
                          onKeyDown: d,
                          placeholder: h,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== y,
                          stripPastedStyles: !0,
                          tabIndex: 0,
                          webDriverTestID: g,
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
          })(S.Component))
      v()(I, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: k.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (I.propTypes = {})
      var R = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
  },
])
//# sourceMappingURL=WIPED
