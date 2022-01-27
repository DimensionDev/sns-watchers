;(window.webpackJsonp = window.webpackJsonp || []).push([
  [196],
  {
    EnM6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        c = n('MWbm'),
        i = n('t62R'),
        l = n('5mJL'),
        s = n('PV92'),
        p = n('htQn'),
        d = n('rHpw'),
        f = n('Qwev'),
        u = o.a.i8005e73,
        h = d.a.create(function (e) {
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
        g = r.createElement(f.a, { accessibilityLabel: u, style: h.loadingIndicator })
      t.a = function (e) {
        var t = e.indents,
          n = e.isLoading,
          a = e.label,
          o = e.link,
          d = e.onClick,
          f = e.withElbow,
          u = r.createElement(i.b, { color: 'link', style: h.enlargeTouchTarget }, a),
          m = r.createElement(
            l.a,
            {
              avatarCell: t
                ? void 0
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(c.a, { style: h.dot }),
                    r.createElement(c.a, { style: h.dot }),
                    r.createElement(c.a, { style: h.dot }),
                  ),
              avatarCellStyle: h.dotGroup,
              cellStyle: [h.content, t && h.treeContent],
            },
            n ? g : u,
          )
        return r.createElement(
          c.a,
          { style: [h.gap, t && h.treeGap, t && 0 === t.length && h.treeGapTopLevel] },
          t
            ? r.createElement(s.a, {
                indents: t,
                paddingTop: 5,
                smallFirstCell: !1,
                style: h.connectors,
                wideElbow: 1 === t.length,
                withElbow: !!f,
              })
            : null,
          d || o
            ? r.createElement(
                p.a,
                {
                  link: n ? void 0 : o,
                  onClick: n ? void 0 : d,
                  style: [
                    h.hoverBox,
                    t && 0 === t.length && h.hoverBoxTopLevel,
                    t && t.length > 1 && h.hoverBoxIndented,
                  ],
                  withInteractiveStyling: !n,
                },
                m,
              )
            : m,
        )
      }
    },
    GCNy: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ezF+'),
        c = n('ERkP'),
        i = n('EnM6'),
        l = n('3XMw'),
        s = n.n(l),
        p = s.a.i569ff3e,
        d = s.a.c837fca9,
        f = function (e) {
          var t = e.isSelfThread,
            n = e.onClick,
            r = e.onImpression,
            a = e.url
          return (
            c.useEffect(
              function () {
                r({ isSelfThreadGap: t })
              },
              [r, t],
            ),
            c.createElement(i.a, {
              label: t ? p : d,
              link: a,
              onClick: function () {
                n({ isSelfThreadGap: t })
              },
            })
          )
        },
        u = n('zh9S'),
        h = n('XOJV'),
        g = n('VPAj'),
        m = n('xN10')
      function v(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = o.g({
        bindActions: Object(g.a)({ scribeAction: u.c }),
        component: f,
        defaultScribeNamespace: { component: 'timeline_conversation' },
        selectData: function (e) {
          var t = e.entry
          e.module
          return {
            isSelfThread: function (e) {
              var n
              return Object(m.a)(t.content.allTweetIds, function (t, r) {
                var a = h.a.select(e, t)
                return !a || (0 === r ? ((n = a.id_str), !0) : !!a.self_thread && a.self_thread.id_str === n)
              })
            },
          }
        },
        createProps: function (e) {
          var t = e.actions.scribeAction,
            n = e.data.isSelfThread,
            r = e.entry,
            a = e.scribeNamespace
          return {
            isSelfThread: n,
            onClick: function (e) {
              var n = e.isSelfThreadGap
              t(b(b({}, a), {}, { element: n ? 'see_more' : 'gap', action: 'click' }))
            },
            onImpression: function (e) {
              var n = e.isSelfThreadGap
              t(b(b({}, a), {}, { element: n ? 'see_more' : 'gap', action: 'impression' }))
            },
            url: '/i/status/'.concat(r.content.focalTweetId),
          }
        },
        shouldDisplayBorder: Object(g.a)(!1),
      })
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
