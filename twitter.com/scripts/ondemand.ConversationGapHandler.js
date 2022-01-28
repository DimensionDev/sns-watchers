;(window.webpackJsonp = window.webpackJsonp || []).push([
  [198],
  {
    EnM6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('3XMw'),
        c = n.n(o),
        i = n('MWbm'),
        l = n('t62R'),
        s = n('5mJL'),
        p = n('PV92'),
        d = n('htQn'),
        f = n('rHpw'),
        u = n('Qwev'),
        h = c.a.i8005e73,
        g = f.a.create(function (e) {
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
        m = r.a.createElement(u.a, { accessibilityLabel: h, style: g.loadingIndicator })
      t.a = function (e) {
        var t = e.indents,
          n = e.isLoading,
          a = e.label,
          o = e.link,
          c = e.onClick,
          f = e.withElbow,
          u = r.a.createElement(l.b, { color: 'link', style: g.enlargeTouchTarget }, a),
          h = r.a.createElement(
            s.a,
            {
              avatarCell: t
                ? void 0
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(i.a, { style: g.dot }),
                    r.a.createElement(i.a, { style: g.dot }),
                    r.a.createElement(i.a, { style: g.dot }),
                  ),
              avatarCellStyle: g.dotGroup,
              cellStyle: [g.content, t && g.treeContent],
            },
            n ? m : u,
          )
        return r.a.createElement(
          i.a,
          { style: [g.gap, t && g.treeGap, t && 0 === t.length && g.treeGapTopLevel] },
          t
            ? r.a.createElement(p.a, {
                indents: t,
                paddingTop: 5,
                smallFirstCell: !1,
                style: g.connectors,
                wideElbow: 1 === t.length,
                withElbow: !!f,
              })
            : null,
          c || o
            ? r.a.createElement(
                d.a,
                {
                  link: n ? void 0 : o,
                  onClick: n ? void 0 : c,
                  style: [
                    g.hoverBox,
                    t && 0 === t.length && g.hoverBoxTopLevel,
                    t && t.length > 1 && g.hoverBoxIndented,
                  ],
                  withInteractiveStyling: !n,
                },
                h,
              )
            : h,
        )
      }
    },
    GCNy: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ezF+'),
        c = n('ERkP'),
        i = n.n(c),
        l = n('EnM6'),
        s = n('3XMw'),
        p = n.n(s),
        d = p.a.i569ff3e,
        f = p.a.c837fca9,
        u = function (e) {
          var t = e.isSelfThread,
            n = e.onClick,
            a = e.onImpression,
            r = e.url
          return (
            i.a.useEffect(
              function () {
                a({ isSelfThreadGap: t })
              },
              [a, t],
            ),
            i.a.createElement(l.a, {
              label: t ? d : f,
              link: r,
              onClick: function () {
                n({ isSelfThreadGap: t })
              },
            })
          )
        },
        h = n('zh9S'),
        g = n('XOJV'),
        m = n('VPAj'),
        v = n('xN10')
      function b(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y = o.g({
        bindActions: Object(m.a)({ scribeAction: h.c }),
        component: u,
        defaultScribeNamespace: { component: 'timeline_conversation' },
        selectData: function (e) {
          var t = e.entry
          e.module
          return {
            isSelfThread: function (e) {
              var n
              return Object(v.a)(t.content.allTweetIds, function (t, a) {
                var r = g.a.select(e, t)
                return !r || (0 === a ? ((n = r.id_str), !0) : !!r.self_thread && r.self_thread.id_str === n)
              })
            },
          }
        },
        createProps: function (e) {
          var t = e.actions.scribeAction,
            n = e.data.isSelfThread,
            a = e.entry,
            r = e.scribeNamespace
          return {
            isSelfThread: n,
            onClick: function (e) {
              var n = e.isSelfThreadGap
              t(w(w({}, r), {}, { element: n ? 'see_more' : 'gap', action: 'click' }))
            },
            onImpression: function (e) {
              var n = e.isSelfThreadGap
              t(w(w({}, r), {}, { element: n ? 'see_more' : 'gap', action: 'impression' }))
            },
            url: '/i/status/'.concat(a.content.focalTweetId),
          }
        },
        shouldDisplayBorder: Object(m.a)(!1),
      })
      t.default = y
    },
  },
])
//# sourceMappingURL=WIPED
