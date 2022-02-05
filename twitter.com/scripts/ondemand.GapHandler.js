;(window.webpackJsonp = window.webpackJsonp || []).push([
  [207],
  {
    '/Xez': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        p = n('AuHH'),
        d = n.n(p),
        f = n('KEM+'),
        h = n.n(f),
        v = (n('hBvt'), n('ERkP')),
        m = n.n(v),
        y = n('EnM6'),
        b = n('3XMw')
      function g(e) {
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
            r = d()(e)
          if (t) {
            var o = d()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var T = n.n(b).a.ee8c6c61,
        k = (function (e) {
          s()(n, e)
          var t = g(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.conversationTreeMetadata,
                    r = e.isLoading,
                    o = e.link,
                    a = e.onClick,
                    i = n && n.ancestorConnector,
                    c = n && n.indents
                  return m.a.createElement(y.a, {
                    indents: c,
                    isLoading: r,
                    label: t,
                    link: o,
                    onClick: a,
                    withElbow: c ? 'side' === i : void 0,
                  })
                },
              },
            ]),
            n
          )
        })(m.a.PureComponent)
      h()(k, 'defaultProps', { children: T }), (t.a = k)
    },
    '5bSN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      n('hBvt')
      var r = n('ERkP'),
        o = n.n(r),
        a = n('3XMw'),
        i = n.n(a),
        c = n('MWbm'),
        s = n('htQn'),
        l = n('Qwev'),
        u = n('h0NW'),
        p = n('t62R'),
        d = n('rHpw'),
        f = i.a.ee8c6c61,
        h = i.a.i8005e73
      function v(e) {
        var t = e.children,
          n = void 0 === t ? f : t,
          r = e.isLoading,
          a = e.link,
          i = e.onClick,
          d = e.isTransparentCursor
        return o.a.createElement(
          s.a,
          { link: a, onClick: i, style: m.root },
          o.a.createElement(
            c.a,
            { style: m.inner },
            r
              ? o.a.createElement(l.a, { accessibilityLabel: h })
              : d
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(u.a, {
                    containerStyle: m.cursor,
                    items: [
                      {
                        description: 'These may include replies that are potentially spammy, harmful, or offensive.',
                        label: 'Other replies',
                      },
                    ],
                  }),
                  o.a.createElement(p.b, { children: 'View Replies', color: 'link', style: m.link }),
                )
              : o.a.createElement(p.b, { align: 'center', children: n, color: 'link' }),
          ),
        )
      }
      var m = d.a.create(function (e) {
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
      var r = n('ERkP'),
        o = n.n(r),
        a = n('3XMw'),
        i = n.n(a),
        c = n('MWbm'),
        s = n('t62R'),
        l = n('5mJL'),
        u = n('PV92'),
        p = n('htQn'),
        d = n('rHpw'),
        f = n('Qwev'),
        h = i.a.i8005e73,
        v = d.a.create(function (e) {
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
        m = o.a.createElement(f.a, { accessibilityLabel: h, style: v.loadingIndicator })
      t.a = function (e) {
        var t = e.indents,
          n = e.isLoading,
          r = e.label,
          a = e.link,
          i = e.onClick,
          d = e.withElbow,
          f = o.a.createElement(s.b, { color: 'link', style: v.enlargeTouchTarget }, r),
          h = o.a.createElement(
            l.a,
            {
              avatarCell: t
                ? void 0
                : o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(c.a, { style: v.dot }),
                    o.a.createElement(c.a, { style: v.dot }),
                    o.a.createElement(c.a, { style: v.dot }),
                  ),
              avatarCellStyle: v.dotGroup,
              cellStyle: [v.content, t && v.treeContent],
            },
            n ? m : f,
          )
        return o.a.createElement(
          c.a,
          { style: [v.gap, t && v.treeGap, t && 0 === t.length && v.treeGapTopLevel] },
          t
            ? o.a.createElement(u.a, {
                indents: t,
                paddingTop: 5,
                smallFirstCell: !1,
                style: v.connectors,
                wideElbow: 1 === t.length,
                withElbow: !!d,
              })
            : null,
          i || a
            ? o.a.createElement(
                p.a,
                {
                  link: n ? void 0 : a,
                  onClick: n ? void 0 : i,
                  style: [
                    v.hoverBox,
                    t && 0 === t.length && v.hoverBoxTopLevel,
                    t && t.length > 1 && v.hoverBoxIndented,
                  ],
                  withInteractiveStyling: !n,
                },
                h,
              )
            : h,
        )
      }
    },
    VW3o: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = (n('LW0h'), n('ezF+')),
        i = n('MDbM'),
        c = n('caTy'),
        s = n('zh9S'),
        l = n('5bSN'),
        u = n('VPAj'),
        p = n('fs1G')
      function d(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var h = { component: 'gap', action: 'impression' },
        v = { action: 'get_middle' }
      t.a = function (e) {
        var t = e.component,
          n = void 0 === t ? l.a : t,
          r = e.impressionNamespace,
          o = void 0 === r ? h : r,
          d = e.clickNamespace,
          m = void 0 === d ? v : d,
          y = e.scribeData,
          b = void 0 === y ? {} : y,
          g = e.divider,
          T = e.getChildren,
          k = e.getActionText
        return a.g({
          divider: g || { top: !0, bottom: !0 },
          component: n,
          isFocusable: Object(u.a)(!0),
          selectData: function (e) {
            var t = e.entry,
              n = e.module
            return {
              fetchStatus: function (e) {
                return n.selectCursorFetchStatus(e, t)
              },
            }
          },
          bindActions: function (e) {
            return { fetchCursor: e.module.fetchCursor, scribe: s.c }
          },
          createProps: function (e) {
            var t = e.actions,
              n = t.fetchCursor,
              r = t.scribe,
              o = e.data.fetchStatus,
              a = e.entry,
              s = e.scribeNamespace,
              l = a.content.url && Object(c.b)(a.content.url)
            return {
              conversationTreeMetadata: a.conversationTreeMetadata,
              isLoading: o === i.a.LOADING,
              children: T ? T(a) : void 0,
              actionText: k ? k(a) : void 0,
              onClick: function () {
                l
                  ? r(f(f({}, s), m), b)
                  : n(a).then(function () {
                      return r(f(f({}, s), m), b)
                    }, p.a)
              },
              link: l,
            }
          },
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
          onImpression: function (e) {
            ;(0, e.actions.scribe)(f(f({}, e.scribeNamespace), o), b)
          },
        })
      }
    },
    Xl5C: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('VW3o'),
        o = Object(r.a)({
          getChildren: function (e) {
            return e.content.displayTreatment && e.content.displayTreatment.actionText
              ? e.content.displayTreatment.actionText
              : void 0
          },
        })
      t.default = o
    },
    aqRH: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('VW3o'),
        o = (n('OZaJ'), n('VrFO')),
        a = n.n(o),
        i = n('Y9Ll'),
        c = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        u = n('N+ot'),
        p = n.n(u),
        d = n('AuHH'),
        f = n.n(d),
        h = (n('hBvt'), n('ERkP')),
        v = n.n(h),
        m = n('5bSN'),
        y = n('/Xez')
      function b(e) {
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
            r = f()(e)
          if (t) {
            var o = f()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var g = (function (e) {
        l()(n, e)
        var t = b(n)
        function n() {
          return a()(this, n), t.apply(this, arguments)
        }
        return (
          c()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.conversationTreeMetadata,
                  r = e.isLoading,
                  o = e.link,
                  a = e.onClick
                return n
                  ? v.a.createElement(y.a, this.props)
                  : v.a.createElement(m.a, { children: t, isLoading: r, link: o, onClick: a })
              },
            },
          ]),
          n
        )
      })(v.a.PureComponent)
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
            r = f()(e)
          if (t) {
            var o = f()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var k = (function (e) {
          l()(n, e)
          var t = T(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.isLoading,
                    r = e.link,
                    o = e.onClick
                  return v.a.createElement(m.a, {
                    children: t,
                    isLoading: n,
                    isTransparentCursor: !0,
                    link: r,
                    onClick: o,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        w = { component: 'cursor', action: 'impression' },
        C = { component: 'cursor', action: 'click' },
        E = { event_info: 'ShowMoreThreads' }
      t.default = function (e) {
        var t = e.onLowQualityCursorShown,
          n = e.transparentCursorsEnabled,
          o = e.withRuxInjections
        return Object(r.a)({
          component: n && !o ? k : g,
          getChildren: function (e) {
            return (
              t(),
              e.content.displayTreatment && e.content.displayTreatment.actionText
                ? e.content.displayTreatment.actionText
                : void 0
            )
          },
          divider: function (e) {
            return e.conversationTreeMetadata ? { top: !1, bottom: !1 } : { top: !0, bottom: !1 }
          },
          impressionNamespace: w,
          clickNamespace: C,
          scribeData: E,
        })
      }
    },
    ex5I: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('VW3o'),
        o = n('/Xez'),
        a = Object(r.a)({
          component: o.a,
          getChildren: function (e) {
            return e.content.displayTreatment && e.content.displayTreatment.actionText
              ? e.content.displayTreatment.actionText
              : void 0
          },
          divider: { top: !1, bottom: !1 },
          impressionNamespace: { component: 'cursor', action: 'impression' },
          clickNamespace: { component: 'cursor', action: 'click' },
        })
      t.default = a
    },
    zXWy: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('VW3o'),
        o = (n('OZaJ'), n('VrFO')),
        a = n.n(o),
        i = n('Y9Ll'),
        c = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        u = n('5Yy7'),
        p = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        h = n('AuHH'),
        v = n.n(h),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('hBvt'), n('ERkP')),
        g = n.n(b),
        T = n('5bSN')
      function k(e) {
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
          return f()(this, n)
        }
      }
      var w = (function (e) {
          p()(n, e)
          var t = k(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))), y()(l()(e), '_abusiveQualityCursorText', 'Show more replies'), e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.isLoading,
                    r = e.link,
                    o = e.onClick
                  return g.a.createElement(T.a, {
                    children: t,
                    isLoading: n,
                    isTransparentCursor: t !== this._abusiveQualityCursorText,
                    link: r,
                    onClick: o,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        C = n('xM7j'),
        E = { component: 'cursor', action: 'impression' },
        x = { component: 'cursor', action: 'click' },
        O = { event_info: 'ShowMoreThreadsPrompt' }
      t.default = function (e) {
        var t = e.abusiveQualityCursorText,
          n = e.getWasLowQualityCursorShown,
          o = e.transparentCursorsEnabled,
          a = e.withRuxInjections
        return Object(r.a)({
          component: o && !a ? w : C.a,
          getChildren: function (e) {
            var r = n()
            return e.content.displayTreatment && e.content.displayTreatment.labelText
              ? r && o && !a
                ? t
                : e.content.displayTreatment.labelText
              : void 0
          },
          getActionText: function (e) {
            return e.content.displayTreatment && e.content.displayTreatment.actionText
              ? e.content.displayTreatment.actionText
              : void 0
          },
          divider: { top: !1, bottom: !1 },
          impressionNamespace: E,
          clickNamespace: x,
          scribeData: O,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
