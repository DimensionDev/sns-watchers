;(window.webpackJsonp = window.webpackJsonp || []).push([
  [213],
  {
    '5bSN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('3XMw'),
        i = n.n(o),
        c = n('MWbm'),
        l = n('htQn'),
        s = n('Qwev'),
        u = n('h0NW'),
        d = n('t62R'),
        p = n('rHpw'),
        h = i.a.ee8c6c61,
        v = i.a.i8005e73
      function f(e) {
        var t = e.children,
          n = void 0 === t ? h : t,
          a = e.isLoading,
          o = e.link,
          i = e.onClick,
          p = e.isTransparentCursor
        return r.a.createElement(
          l.a,
          { link: o, onClick: i, style: m.root },
          r.a.createElement(
            c.a,
            { style: m.inner },
            a
              ? r.a.createElement(s.a, { accessibilityLabel: v })
              : p
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, {
                    containerStyle: m.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  r.a.createElement(d.b, { children: 'View Replies', color: 'link', style: m.link }),
                )
              : r.a.createElement(d.b, { align: 'center', children: n, color: 'link' }),
          ),
        )
      }
      var m = p.a.create(function (e) {
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
    EnM6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('3XMw'),
        i = n.n(o),
        c = n('MWbm'),
        l = n('t62R'),
        s = n('5mJL'),
        u = n('PV92'),
        d = n('htQn'),
        p = n('rHpw'),
        h = n('Qwev'),
        v = i.a.i8005e73,
        f = p.a.create(function (e) {
          return {
            gap: { overflow: 'hidden' },
            treeGap: { flexDirection: 'row', paddingLeft: e.spaces.space16 },
            treeGapTopLevel: { paddingLeft: 0 },
            connectors: { zIndex: 1 },
            hoverBox: { flexGrow: 1, marginLeft: e.spaces.space12, paddingLeft: e.spaces.space4 },
            hoverBoxIndented: { marginLeft: 0 },
            hoverBoxTopLevel: { marginLeft: 0 },
            dotGroup: {
              alignItems: 'center',
              alignSelf: 'center',
              flexGrow: 0,
              justifyContent: 'space-between',
              position: 'relative',
              height: e.spaces.space16,
            },
            content: { flexGrow: 1 },
            treeContent: { paddingHorizontal: e.spaces.space4 },
            dot: {
              display: 'block',
              backgroundColor: e.colors.gray200,
              height: e.componentDimensions.conversationLineWidth,
              width: e.componentDimensions.conversationLineWidth,
            },
            enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
            loadingIndicator: { paddingVertical: e.spaces.space4 },
          }
        }),
        m = r.a.createElement(h.a, { accessibilityLabel: v, style: f.loadingIndicator })
      t.a = function (e) {
        var t = e.indents,
          n = e.isLoading,
          a = e.label,
          o = e.link,
          i = e.onClick,
          p = e.withElbow,
          h = r.a.createElement(l.b, { color: 'link', style: f.enlargeTouchTarget }, a),
          v = r.a.createElement(
            s.a,
            {
              avatarCell: t
                ? void 0
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(c.a, { style: f.dot }),
                    r.a.createElement(c.a, { style: f.dot }),
                    r.a.createElement(c.a, { style: f.dot }),
                  ),
              avatarCellStyle: f.dotGroup,
              cellStyle: [f.content, t && f.treeContent],
            },
            n ? m : h,
          )
        return r.a.createElement(
          c.a,
          { style: [f.gap, t && f.treeGap, t && 0 === t.length && f.treeGapTopLevel] },
          t
            ? r.a.createElement(u.a, {
                indents: t,
                paddingTop: 5,
                smallFirstCell: !1,
                style: f.connectors,
                wideElbow: 1 === t.length,
                withElbow: !!p,
              })
            : null,
          i || o
            ? r.a.createElement(
                d.a,
                {
                  link: n ? void 0 : o,
                  onClick: n ? void 0 : i,
                  style: [
                    f.hoverBox,
                    t && 0 === t.length && f.hoverBoxTopLevel,
                    t && t.length > 1 && f.hoverBoxIndented,
                  ],
                  withInteractiveStyling: !n,
                },
                v,
              )
            : v,
        )
      }
    },
    Xl5C: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('nGQU'),
        r = Object(a.a)({})
      t.default = r
    },
    aqRH: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('nGQU')
      t.default = function (e) {
        var t = e.withRuxInjections
        return Object(a.a)({
          divider: function (e) {
            return e.conversationTreeMetadata ? { top: !1, bottom: !1 } : { top: !0, bottom: !1 }
          },
          withRuxInjections: t,
        })
      }
    },
    ex5I: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('nGQU'),
        r = Object(a.a)({ divider: { top: !1, bottom: !1 } })
      t.default = r
    },
    nGQU: function (e, t, n) {
      'use strict'
      n('LW0h'), n('7x/C')
      var a = n('ezF+'),
        r = n('VPAj'),
        o = n('97Jx'),
        i = n.n(o),
        c = n('yiKp'),
        l = n.n(c),
        s = n('KEM+'),
        u = n.n(s),
        d = n('ERkP'),
        p = n.n(d),
        h = n('v6aA'),
        v = n('MDbM'),
        f = n('rxPX'),
        m = n('0KEI'),
        g = function (e, t) {
          return t.module.selectCursorFetchStatus(e, t.entry)
        },
        w = Object(f.a)()
          .propsFromState(function () {
            return { fetchStatus: g }
          })
          .adjustStateProps(function (e) {
            return { isLoading: e.fetchStatus === v.a.LOADING }
          })
          .propsFromActions(function (e) {
            return {
              fetchCursor: e.module.fetchCursor,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('URT_CURSOR'),
            }
          })
          .withAnalytics(),
        y = n('caTy'),
        b = n('5bSN'),
        k = n('VrFO'),
        C = n.n(k),
        E = n('Y9Ll'),
        T = n.n(E),
        L = n('5Yy7'),
        x = n.n(L),
        S = n('2VqO'),
        M = n.n(S),
        j = (n('hBvt'), n('EnM6')),
        G = n('3XMw'),
        I = n.n(G).a.ee8c6c61,
        R = (function (e) {
          x()(n, e)
          var t = M()(n)
          function n() {
            return C()(this, n), t.apply(this, arguments)
          }
          return (
            T()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.conversationTreeMetadata,
                    a = e.isLoading,
                    r = e.link,
                    o = e.onClick,
                    i = n && n.ancestorConnector,
                    c = n && n.indents
                  return p.a.createElement(j.a, {
                    indents: c,
                    isLoading: a,
                    label: t,
                    link: r,
                    onClick: o,
                    withElbow: c ? 'side' === i : void 0,
                  })
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent)
      u()(R, 'defaultProps', { children: I })
      var P,
        O = R,
        B = (function (e) {
          x()(n, e)
          var t = M()(n)
          function n() {
            return C()(this, n), t.apply(this, arguments)
          }
          return (
            T()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.conversationTreeMetadata,
                    a = e.isLoading,
                    r = e.link,
                    o = e.onClick
                  return n
                    ? p.a.createElement(O, this.props)
                    : p.a.createElement(b.a, { children: t, isLoading: a, link: r, onClick: o })
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        H = n('1Pcy'),
        Q = n.n(H),
        _ =
          (n('2G9S'),
          (function (e) {
            x()(n, e)
            var t = M()(n)
            function n() {
              var e
              C()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                u()(Q()(e), '_abusiveQualityCursorText', 'Show more replies'),
                e
              )
            }
            return (
              T()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.children,
                      n = e.isLoading,
                      a = e.link,
                      r = e.onClick
                    return p.a.createElement(b.a, {
                      children: t,
                      isLoading: n,
                      isTransparentCursor: t !== this._abusiveQualityCursorText,
                      link: a,
                      onClick: r,
                    })
                  },
                },
              ]),
              n
            )
          })(p.a.PureComponent)),
        F = (function (e) {
          x()(n, e)
          var t = M()(n)
          function n() {
            return C()(this, n), t.apply(this, arguments)
          }
          return (
            T()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.isLoading,
                    a = e.link,
                    r = e.onClick
                  return p.a.createElement(b.a, {
                    children: t,
                    isLoading: n,
                    isTransparentCursor: !0,
                    link: a,
                    onClick: r,
                  })
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        A = n('xM7j'),
        W = n('vWJI'),
        U = { component: 'cursor', action: 'click' },
        V = { component: 'cursor', action: 'impression' },
        z = { action: 'get_middle' },
        D = { component: 'gap', action: 'impression' },
        X =
          ((P = {}),
          u()(P, W.a.ShowMoreThreads, { event_info: 'ShowMoreThreads' }),
          u()(P, W.a.ShowMoreThreadsPrompt, { event_info: 'ShowMoreThreadsPrompt' }),
          P),
        J = !1,
        N = function (e) {
          var t = p.a.useContext(h.a).featureSwitches,
            n = e.analytics,
            a = e.createLocalApiErrorHandler,
            r = e.entry,
            o = e.fetchCursor,
            c = e.isLoading,
            s = e.withRuxInjections,
            u = r.content,
            d = u.cursorType,
            v = u.displayTreatment,
            f = u.url,
            m = f && Object(y.b)(f),
            g = X[d],
            w = t.isTrue('responsive_web_deamplification_transparent_cursors_enabled') && !s
          p.a.useEffect(function () {
            var e = d === W.a.Gap ? D : V
            n.scribe(l()(l()({}, e), {}, { data: g })), d === W.a.ShowMoreThreads && (J = !0)
          }, [])
          var k = p.a.useCallback(
              function (e) {
                o(r).then(e).catch(a())
              },
              [a, r, o],
            ),
            C = p.a.useCallback(
              function () {
                var e = d === W.a.Gap ? z : U
                n.scribe(l()(l()({}, e), {}, { data: g }))
              },
              [n, d, g],
            ),
            E = {
              isLoading: c,
              onClick: p.a.useCallback(
                function () {
                  m ? C() : k(C)
                },
                [m, k, C],
              ),
              link: m,
            },
            T = l()(l()({}, E), {}, { conversationTreeMetadata: r.conversationTreeMetadata }),
            L = (null == v ? void 0 : v.actionText) || null
          switch (d) {
            case W.a.Gap:
              return p.a.createElement(b.a, E, L)
            case W.a.ShowMore:
              return p.a.createElement(O, T, L)
            case W.a.ShowMoreThreads:
              var x = w ? F : B
              return p.a.createElement(x, T, L)
            case W.a.ShowMoreThreadsPrompt:
              var S,
                M = w ? _ : A.a,
                j = (null == v ? void 0 : v.labelText) || null,
                G = J && w ? 'Show more replies' : j
              return p.a.createElement(
                M,
                i()({}, T, {
                  actionText: null === (S = r.content.displayTreatment) || void 0 === S ? void 0 : S.actionText,
                }),
                G,
              )
            default:
              return null
          }
        },
        K = w(p.a.memo(N))
      t.a = function (e) {
        var t = e.divider,
          n = e.withRuxInjections
        return a
          .b({
            divider: t || { top: !0, bottom: !0 },
            component: K,
            isFocusable: Object(r.a)(!0),
            shouldDisplayBorder: function (e) {
              var t = e.conversationTreeMetadata
              return (
                !t ||
                (!1 === t.descendantConnector &&
                  0 ===
                    t.indents.filter(function (e) {
                      return 'line' === e.displayType
                    }).length)
              )
            },
          })
          .getHandler(function () {
            return { withRuxInjections: n }
          })
      }
    },
    zXWy: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('nGQU')
      t.default = function (e) {
        var t = e.withRuxInjections
        return Object(a.a)({ divider: { top: !1, bottom: !1 }, withRuxInjections: t })
      }
    },
  },
])
//# sourceMappingURL=WIPED
