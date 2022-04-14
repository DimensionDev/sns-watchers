;(window.webpackJsonp = window.webpackJsonp || []).push([
  [211],
  {
    '5bSN': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return m
      })
      t('hBvt')
      var a = t('ERkP'),
        r = t.n(a),
        i = t('3XMw'),
        o = t.n(i),
        c = t('MWbm'),
        s = t('htQn'),
        l = t('Qwev'),
        u = t('h0NW'),
        d = t('t62R'),
        p = t('rHpw'),
        h = o.a.ee8c6c61,
        v = o.a.i8005e73
      function m(e) {
        var n = e.children,
          t = void 0 === n ? h : n,
          a = e.isLoading,
          i = e.link,
          o = e.onClick,
          p = e.isTransparentCursor
        return r.a.createElement(
          s.a,
          { link: i, onClick: o, style: f.root },
          r.a.createElement(
            c.a,
            { style: f.inner },
            a
              ? r.a.createElement(l.a, { accessibilityLabel: v })
              : p
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, {
                    containerStyle: f.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  r.a.createElement(d.b, { children: 'View Replies', color: 'link', style: f.link }),
                )
              : r.a.createElement(d.b, { align: 'center', children: t, color: 'link' }),
          ),
        )
      }
      var f = p.a.create(function (e) {
        return {
          root: { justifyContent: 'center', minHeight: e.spaces.space48, width: '100%' },
          inner: { flexGrow: 1, flexShrink: 1, justifyContent: 'center' },
          cursor: {
            paddingTop: e.spaces.space20,
            paddingBottom: e.spaces.space16,
            paddingHorizontal: e.spaces.space16,
          },
          link: { paddingBottom: e.spaces.space20, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    EnM6: function (e, n, t) {
      'use strict'
      t('hBvt')
      var a = t('ERkP'),
        r = t.n(a),
        i = t('3XMw'),
        o = t.n(i),
        c = t('MWbm'),
        s = t('t62R'),
        l = t('5mJL'),
        u = t('PV92'),
        d = t('htQn'),
        p = t('rHpw'),
        h = t('Qwev'),
        v = o.a.i8005e73,
        m = p.a.create(function (e) {
          return {
            connectors: { zIndex: 1 },
            content: { flexGrow: 1 },
            conversationConnector: {
              alignItems: 'center',
              display: 'flex',
              position: 'relative',
              height: e.spaces.space36,
              flexGrow: 0,
            },
            conversationLine: {
              backgroundColor: e.colors.gray200,
              width: e.componentDimensions.conversationLineWidth,
              height: e.spaces.space8,
            },
            dot: {
              display: 'block',
              backgroundColor: e.colors.gray200,
              height: e.componentDimensions.conversationLineWidth,
              width: e.componentDimensions.conversationLineWidth,
            },
            ellipsis: {
              alignItems: 'center',
              justifyContent: 'space-between',
              height: e.spaces.space16,
              marginVertical: 'auto',
            },
            ellipsisWithConversationLines: { height: e.spaces.space12 },
            enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
            gap: { overflow: 'hidden' },
            hoverBox: { flexGrow: 1, marginLeft: e.spaces.space12, paddingLeft: e.spaces.space4 },
            hoverBoxIndented: { marginLeft: 0 },
            hoverBoxTopLevel: { marginLeft: 0 },
            loadingIndicator: { paddingVertical: e.spaces.space4 },
            treeContent: { paddingHorizontal: e.spaces.space4 },
            treeGap: { flexDirection: 'row', paddingLeft: e.spaces.space16 },
            treeGapTopLevel: { paddingLeft: 0 },
          }
        }),
        f = r.a.createElement(h.a, { accessibilityLabel: v, style: m.loadingIndicator })
      n.a = function (e) {
        var n = e.indents,
          t = e.isLoading,
          a = e.label,
          i = e.link,
          o = e.onClick,
          p = e.withConversationLines,
          h = void 0 !== p && p,
          v = e.withElbow,
          g = r.a.createElement(s.b, { color: 'link', style: m.enlargeTouchTarget }, a),
          y = r.a.createElement(
            l.a,
            {
              avatarCell: n
                ? void 0
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    h && r.a.createElement(c.a, { style: m.conversationLine, testID: 'conversationLine' }),
                    r.a.createElement(
                      c.a,
                      { style: [m.ellipsis, h && m.ellipsisWithConversationLines] },
                      r.a.createElement(c.a, { style: m.dot }),
                      r.a.createElement(c.a, { style: m.dot }),
                      r.a.createElement(c.a, { style: m.dot }),
                    ),
                    h && r.a.createElement(c.a, { style: m.conversationLine, testID: 'conversationLine' }),
                  ),
              avatarCellStyle: m.conversationConnector,
              cellStyle: [m.content, n && m.treeContent],
            },
            t ? f : g,
          )
        return r.a.createElement(
          c.a,
          { style: [m.gap, n && m.treeGap, n && 0 === n.length && m.treeGapTopLevel] },
          n
            ? r.a.createElement(u.a, {
                indents: n,
                paddingTop: 5,
                smallFirstCell: !1,
                style: m.connectors,
                wideElbow: 1 === n.length,
                withElbow: !!v,
              })
            : null,
          o || i
            ? r.a.createElement(
                d.a,
                {
                  link: t ? void 0 : i,
                  onClick: t ? void 0 : o,
                  style: [
                    m.hoverBox,
                    n && 0 === n.length && m.hoverBoxTopLevel,
                    n && n.length > 1 && m.hoverBoxIndented,
                  ],
                  withInteractiveStyling: !t,
                },
                y,
              )
            : y,
        )
      }
    },
    Xl5C: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('nGQU'),
        r = Object(a.a)({})
      n.default = r
    },
    aqRH: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('nGQU')
      n.default = function (e) {
        var n = e.withRuxInjections
        return Object(a.a)({
          divider: function (e) {
            return e.conversationTreeMetadata ? { top: !1, bottom: !1 } : { top: !0, bottom: !1 }
          },
          withRuxInjections: n,
        })
      }
    },
    ex5I: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('nGQU'),
        r = Object(a.a)({ divider: { top: !1, bottom: !1 } })
      n.default = r
    },
    nGQU: function (e, n, t) {
      'use strict'
      t('LW0h'), t('7x/C')
      var a = t('ezF+'),
        r = t('VPAj'),
        i = t('97Jx'),
        o = t.n(i),
        c = t('yiKp'),
        s = t.n(c),
        l = t('KEM+'),
        u = t.n(l),
        d = t('ERkP'),
        p = t.n(d),
        h = t('v6aA'),
        v = t('MDbM'),
        m = t('rxPX'),
        f = t('0KEI'),
        g = function (e, n) {
          return n.module.selectCursorFetchStatus(e, n.entry)
        },
        y = Object(m.a)()
          .propsFromState(function () {
            return { fetchStatus: g }
          })
          .adjustStateProps(function (e) {
            return { isLoading: e.fetchStatus === v.a.LOADING }
          })
          .propsFromActions(function (e) {
            return {
              fetchCursor: e.module.fetchCursor,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('URT_CURSOR'),
            }
          })
          .withAnalytics(),
        w = t('caTy'),
        b = t('5bSN'),
        C = t('VrFO'),
        k = t.n(C),
        E = t('Y9Ll'),
        L = t.n(E),
        T = t('5Yy7'),
        x = t.n(T),
        M = t('2VqO'),
        S = t.n(M),
        j = (t('hBvt'), t('EnM6')),
        I = t('3XMw'),
        G = t.n(I).a.ee8c6c61,
        R = (function (e) {
          x()(t, e)
          var n = S()(t)
          function t() {
            return k()(this, t), n.apply(this, arguments)
          }
          return (
            L()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.conversationTreeMetadata,
                    a = e.isLoading,
                    r = e.link,
                    i = e.onClick,
                    o = t && t.ancestorConnector,
                    c = t && t.indents
                  return p.a.createElement(j.a, {
                    indents: c,
                    isLoading: a,
                    label: n,
                    link: r,
                    onClick: i,
                    withElbow: c ? 'side' === o : void 0,
                  })
                },
              },
            ]),
            t
          )
        })(p.a.PureComponent)
      u()(R, 'defaultProps', { children: G })
      var P,
        O = R,
        B = (function (e) {
          x()(t, e)
          var n = S()(t)
          function t() {
            return k()(this, t), n.apply(this, arguments)
          }
          return (
            L()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.conversationTreeMetadata,
                    a = e.isLoading,
                    r = e.link,
                    i = e.onClick
                  return t
                    ? p.a.createElement(O, this.props)
                    : p.a.createElement(b.a, { children: n, isLoading: a, link: r, onClick: i })
                },
              },
            ]),
            t
          )
        })(p.a.PureComponent),
        W = t('1Pcy'),
        H = t.n(W),
        Q =
          (t('2G9S'),
          (function (e) {
            x()(t, e)
            var n = S()(t)
            function t() {
              var e
              k()(this, t)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = n.call.apply(n, [this].concat(r))),
                u()(H()(e), '_abusiveQualityCursorText', 'Show more replies'),
                e
              )
            }
            return (
              L()(t, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = e.children,
                      t = e.isLoading,
                      a = e.link,
                      r = e.onClick
                    return p.a.createElement(b.a, {
                      children: n,
                      isLoading: t,
                      isTransparentCursor: n !== this._abusiveQualityCursorText,
                      link: a,
                      onClick: r,
                    })
                  },
                },
              ]),
              t
            )
          })(p.a.PureComponent)),
        _ = (function (e) {
          x()(t, e)
          var n = S()(t)
          function t() {
            return k()(this, t), n.apply(this, arguments)
          }
          return (
            L()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.isLoading,
                    a = e.link,
                    r = e.onClick
                  return p.a.createElement(b.a, {
                    children: n,
                    isLoading: t,
                    isTransparentCursor: !0,
                    link: a,
                    onClick: r,
                  })
                },
              },
            ]),
            t
          )
        })(p.a.PureComponent),
        F = t('xM7j'),
        A = t('vWJI'),
        D = { component: 'cursor', action: 'click' },
        V = { component: 'cursor', action: 'impression' },
        U = { action: 'get_middle' },
        z = { component: 'gap', action: 'impression' },
        X =
          ((P = {}),
          u()(P, A.a.ShowMoreThreads, { event_info: 'ShowMoreThreads' }),
          u()(P, A.a.ShowMoreThreadsPrompt, { event_info: 'ShowMoreThreadsPrompt' }),
          P),
        J = !1,
        N = function (e) {
          var n = p.a.useContext(h.a).featureSwitches,
            t = e.analytics,
            a = e.createLocalApiErrorHandler,
            r = e.entry,
            i = e.fetchCursor,
            c = e.isLoading,
            l = e.withRuxInjections,
            u = r.content,
            d = u.cursorType,
            v = u.displayTreatment,
            m = u.url,
            f = m && Object(w.b)(m),
            g = X[d],
            y = n.isTrue('responsive_web_deamplification_transparent_cursors_enabled') && !l
          p.a.useEffect(function () {
            var e = d === A.a.Gap ? z : V
            t.scribe(s()(s()({}, e), {}, { data: g })), d === A.a.ShowMoreThreads && (J = !0)
          }, [])
          var C = p.a.useCallback(
              function (e) {
                i(r).then(e).catch(a())
              },
              [a, r, i],
            ),
            k = p.a.useCallback(
              function () {
                var e = d === A.a.Gap ? U : D
                t.scribe(s()(s()({}, e), {}, { data: g }))
              },
              [t, d, g],
            ),
            E = {
              isLoading: c,
              onClick: p.a.useCallback(
                function () {
                  f ? k() : C(k)
                },
                [f, C, k],
              ),
              link: f,
            },
            L = s()(s()({}, E), {}, { conversationTreeMetadata: r.conversationTreeMetadata }),
            T = (null == v ? void 0 : v.actionText) || null
          switch (d) {
            case A.a.Gap:
              return p.a.createElement(b.a, E, T)
            case A.a.ShowMore:
              return p.a.createElement(O, L, T)
            case A.a.ShowMoreThreads:
              var x = y ? _ : B
              return p.a.createElement(x, L, T)
            case A.a.ShowMoreThreadsPrompt:
              var M,
                S = y ? Q : F.a,
                j = (null == v ? void 0 : v.labelText) || null,
                I = J && y ? 'Show more replies' : j
              return p.a.createElement(
                S,
                o()({}, L, {
                  actionText: null === (M = r.content.displayTreatment) || void 0 === M ? void 0 : M.actionText,
                }),
                I,
              )
            default:
              return null
          }
        },
        K = y(p.a.memo(N))
      n.a = function (e) {
        var n = e.divider,
          t = e.withRuxInjections
        return a
          .b({
            divider: n || { top: !0, bottom: !0 },
            component: K,
            isFocusable: Object(r.a)(!0),
            shouldDisplayBorder: function (e) {
              var n = e.conversationTreeMetadata
              return (
                !n ||
                (!1 === n.descendantConnector &&
                  0 ===
                    n.indents.filter(function (e) {
                      return 'line' === e.displayType
                    }).length)
              )
            },
          })
          .getHandler(function () {
            return { withRuxInjections: t }
          })
      }
    },
    zXWy: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('nGQU')
      n.default = function (e) {
        var n = e.withRuxInjections
        return Object(a.a)({ divider: { top: !1, bottom: !1 }, withRuxInjections: n })
      }
    },
  },
])
//# sourceMappingURL=WIPED
