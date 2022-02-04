;(window.webpackJsonp = window.webpackJsonp || []).push([
  [208],
  {
    '/Xez': function (e, n, t) {
      'use strict'
      var a = t('VrFO'),
        r = t.n(a),
        o = t('Y9Ll'),
        i = t.n(o),
        c = t('5Yy7'),
        s = t.n(c),
        l = t('2VqO'),
        d = t.n(l),
        p = t('KEM+'),
        u = t.n(p),
        m = (t('hBvt'), t('ERkP')),
        h = t.n(m),
        v = t('EnM6'),
        f = t('3XMw'),
        y = t.n(f).a.ee8c6c61,
        g = (function (e) {
          s()(t, e)
          var n = d()(t)
          function t() {
            return r()(this, t), n.apply(this, arguments)
          }
          return (
            i()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.conversationTreeMetadata,
                    a = e.isLoading,
                    r = e.link,
                    o = e.onClick,
                    i = t && t.ancestorConnector,
                    c = t && t.indents
                  return h.a.createElement(v.a, {
                    indents: c,
                    isLoading: a,
                    label: n,
                    link: r,
                    onClick: o,
                    withElbow: c ? 'side' === i : void 0,
                  })
                },
              },
            ]),
            t
          )
        })(h.a.PureComponent)
      u()(g, 'defaultProps', { children: y }), (n.a = g)
    },
    '5bSN': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return v
      })
      t('hBvt')
      var a = t('ERkP'),
        r = t.n(a),
        o = t('3XMw'),
        i = t.n(o),
        c = t('MWbm'),
        s = t('htQn'),
        l = t('Qwev'),
        d = t('h0NW'),
        p = t('t62R'),
        u = t('rHpw'),
        m = i.a.ee8c6c61,
        h = i.a.i8005e73
      function v(e) {
        var n = e.children,
          t = void 0 === n ? m : n,
          a = e.isLoading,
          o = e.link,
          i = e.onClick,
          u = e.isTransparentCursor
        return r.a.createElement(
          s.a,
          { link: o, onClick: i, style: f.root },
          r.a.createElement(
            c.a,
            { style: f.inner },
            a
              ? r.a.createElement(l.a, { accessibilityLabel: h })
              : u
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(d.a, {
                    containerStyle: f.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  r.a.createElement(p.b, { children: 'View Replies', color: 'link', style: f.link }),
                )
              : r.a.createElement(p.b, { align: 'center', children: t, color: 'link' }),
          ),
        )
      }
      var f = u.a.create(function (e) {
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
        o = t('3XMw'),
        i = t.n(o),
        c = t('MWbm'),
        s = t('t62R'),
        l = t('5mJL'),
        d = t('PV92'),
        p = t('htQn'),
        u = t('rHpw'),
        m = t('Qwev'),
        h = i.a.i8005e73,
        v = u.a.create(function (e) {
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
        f = r.a.createElement(m.a, { accessibilityLabel: h, style: v.loadingIndicator })
      n.a = function (e) {
        var n = e.indents,
          t = e.isLoading,
          a = e.label,
          o = e.link,
          i = e.onClick,
          u = e.withElbow,
          m = r.a.createElement(s.b, { color: 'link', style: v.enlargeTouchTarget }, a),
          h = r.a.createElement(
            l.a,
            {
              avatarCell: n
                ? void 0
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(c.a, { style: v.dot }),
                    r.a.createElement(c.a, { style: v.dot }),
                    r.a.createElement(c.a, { style: v.dot }),
                  ),
              avatarCellStyle: v.dotGroup,
              cellStyle: [v.content, n && v.treeContent],
            },
            t ? f : m,
          )
        return r.a.createElement(
          c.a,
          { style: [v.gap, n && v.treeGap, n && 0 === n.length && v.treeGapTopLevel] },
          n
            ? r.a.createElement(d.a, {
                indents: n,
                paddingTop: 5,
                smallFirstCell: !1,
                style: v.connectors,
                wideElbow: 1 === n.length,
                withElbow: !!u,
              })
            : null,
          i || o
            ? r.a.createElement(
                p.a,
                {
                  link: t ? void 0 : o,
                  onClick: t ? void 0 : i,
                  style: [
                    v.hoverBox,
                    n && 0 === n.length && v.hoverBoxTopLevel,
                    n && n.length > 1 && v.hoverBoxIndented,
                  ],
                  withInteractiveStyling: !t,
                },
                h,
              )
            : h,
        )
      }
    },
    VW3o: function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        r = t.n(a),
        o = (t('LW0h'), t('7x/C'), t('ezF+')),
        i = t('MDbM'),
        c = t('caTy'),
        s = t('zh9S'),
        l = t('5bSN'),
        d = t('VPAj'),
        p = t('fs1G'),
        u = { component: 'gap', action: 'impression' },
        m = { action: 'get_middle' }
      n.a = function (e) {
        var n = e.component,
          t = void 0 === n ? l.a : n,
          a = e.impressionNamespace,
          h = void 0 === a ? u : a,
          v = e.clickNamespace,
          f = void 0 === v ? m : v,
          y = e.scribeData,
          g = void 0 === y ? {} : y,
          b = e.divider,
          T = e.getChildren,
          k = e.getActionText
        return o.g({
          divider: b || { top: !0, bottom: !0 },
          component: t,
          isFocusable: Object(d.a)(!0),
          selectData: function (e) {
            var n = e.entry,
              t = e.module
            return {
              fetchStatus: function (e) {
                return t.selectCursorFetchStatus(e, n)
              },
            }
          },
          bindActions: function (e) {
            return { fetchCursor: e.module.fetchCursor, scribe: s.c }
          },
          createProps: function (e) {
            var n = e.actions,
              t = n.fetchCursor,
              a = n.scribe,
              o = e.data.fetchStatus,
              s = e.entry,
              l = e.scribeNamespace,
              d = s.content.url && Object(c.b)(s.content.url)
            return {
              conversationTreeMetadata: s.conversationTreeMetadata,
              isLoading: o === i.a.LOADING,
              children: T ? T(s) : void 0,
              actionText: k ? k(s) : void 0,
              onClick: function () {
                d
                  ? a(r()(r()({}, l), f), g)
                  : t(s).then(function () {
                      return a(r()(r()({}, l), f), g)
                    }, p.a)
              },
              link: d,
            }
          },
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
          onImpression: function (e) {
            var n = e.actions.scribe,
              t = e.scribeNamespace
            n(r()(r()({}, t), h), g)
          },
        })
      }
    },
    Xl5C: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('VW3o'),
        r = Object(a.a)({
          getChildren: function (e) {
            return e.content.displayTreatment && e.content.displayTreatment.actionText
              ? e.content.displayTreatment.actionText
              : void 0
          },
        })
      n.default = r
    },
    aqRH: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('VW3o'),
        r = t('VrFO'),
        o = t.n(r),
        i = t('Y9Ll'),
        c = t.n(i),
        s = t('5Yy7'),
        l = t.n(s),
        d = t('2VqO'),
        p = t.n(d),
        u = (t('hBvt'), t('ERkP')),
        m = t.n(u),
        h = t('5bSN'),
        v = t('/Xez'),
        f = (function (e) {
          l()(t, e)
          var n = p()(t)
          function t() {
            return o()(this, t), n.apply(this, arguments)
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.conversationTreeMetadata,
                    a = e.isLoading,
                    r = e.link,
                    o = e.onClick
                  return t
                    ? m.a.createElement(v.a, this.props)
                    : m.a.createElement(h.a, { children: n, isLoading: a, link: r, onClick: o })
                },
              },
            ]),
            t
          )
        })(m.a.PureComponent),
        y = (function (e) {
          l()(t, e)
          var n = p()(t)
          function t() {
            return o()(this, t), n.apply(this, arguments)
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.isLoading,
                    a = e.link,
                    r = e.onClick
                  return m.a.createElement(h.a, {
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
        })(m.a.PureComponent),
        g = { component: 'cursor', action: 'impression' },
        b = { component: 'cursor', action: 'click' },
        T = { event_info: 'ShowMoreThreads' }
      n.default = function (e) {
        var n = e.onLowQualityCursorShown,
          t = e.transparentCursorsEnabled,
          r = e.withRuxInjections
        return Object(a.a)({
          component: t && !r ? y : f,
          getChildren: function (e) {
            return (
              n(),
              e.content.displayTreatment && e.content.displayTreatment.actionText
                ? e.content.displayTreatment.actionText
                : void 0
            )
          },
          divider: function (e) {
            return e.conversationTreeMetadata ? { top: !1, bottom: !1 } : { top: !0, bottom: !1 }
          },
          impressionNamespace: g,
          clickNamespace: b,
          scribeData: T,
        })
      }
    },
    ex5I: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('VW3o'),
        r = t('/Xez'),
        o = Object(a.a)({
          component: r.a,
          getChildren: function (e) {
            return e.content.displayTreatment && e.content.displayTreatment.actionText
              ? e.content.displayTreatment.actionText
              : void 0
          },
          divider: { top: !1, bottom: !1 },
          impressionNamespace: { component: 'cursor', action: 'impression' },
          clickNamespace: { component: 'cursor', action: 'click' },
        })
      n.default = o
    },
    zXWy: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('VW3o'),
        r = t('VrFO'),
        o = t.n(r),
        i = t('Y9Ll'),
        c = t.n(i),
        s = t('1Pcy'),
        l = t.n(s),
        d = t('5Yy7'),
        p = t.n(d),
        u = t('2VqO'),
        m = t.n(u),
        h = t('KEM+'),
        v = t.n(h),
        f = (t('2G9S'), t('hBvt'), t('ERkP')),
        y = t.n(f),
        g = t('5bSN'),
        b = (function (e) {
          p()(t, e)
          var n = m()(t)
          function t() {
            var e
            o()(this, t)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(r))), v()(l()(e), '_abusiveQualityCursorText', 'Show more replies'), e
            )
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t = e.isLoading,
                    a = e.link,
                    r = e.onClick
                  return y.a.createElement(g.a, {
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
        })(y.a.PureComponent),
        T = t('xM7j'),
        k = { component: 'cursor', action: 'impression' },
        C = { component: 'cursor', action: 'click' },
        w = { event_info: 'ShowMoreThreadsPrompt' }
      n.default = function (e) {
        var n = e.abusiveQualityCursorText,
          t = e.getWasLowQualityCursorShown,
          r = e.transparentCursorsEnabled,
          o = e.withRuxInjections
        return Object(a.a)({
          component: r && !o ? b : T.a,
          getChildren: function (e) {
            var a = t()
            return e.content.displayTreatment && e.content.displayTreatment.labelText
              ? a && r && !o
                ? n
                : e.content.displayTreatment.labelText
              : void 0
          },
          getActionText: function (e) {
            return e.content.displayTreatment && e.content.displayTreatment.actionText
              ? e.content.displayTreatment.actionText
              : void 0
          },
          divider: { top: !1, bottom: !1 },
          impressionNamespace: k,
          clickNamespace: C,
          scribeData: w,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
