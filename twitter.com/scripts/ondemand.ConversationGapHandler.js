;(window.webpackJsonp = window.webpackJsonp || []).push([
  [203],
  {
    EnM6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        o = n.n(a),
        r = n('3XMw'),
        i = n.n(r),
        l = n('MWbm'),
        c = n('t62R'),
        s = n('5mJL'),
        d = n('PV92'),
        p = n('htQn'),
        f = n('rHpw'),
        u = n('Qwev'),
        h = i.a.i8005e73,
        m = f.a.create(function (e) {
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
        g = o.a.createElement(u.a, { accessibilityLabel: h, style: m.loadingIndicator })
      t.a = function (e) {
        var t = e.indents,
          n = e.isLoading,
          a = e.label,
          r = e.link,
          i = e.onClick,
          f = e.withElbow,
          u = o.a.createElement(c.b, { color: 'link', style: m.enlargeTouchTarget }, a),
          h = o.a.createElement(
            s.a,
            {
              avatarCell: t
                ? void 0
                : o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(l.a, { style: m.dot }),
                    o.a.createElement(l.a, { style: m.dot }),
                    o.a.createElement(l.a, { style: m.dot }),
                  ),
              avatarCellStyle: m.dotGroup,
              cellStyle: [m.content, t && m.treeContent],
            },
            n ? g : u,
          )
        return o.a.createElement(
          l.a,
          { style: [m.gap, t && m.treeGap, t && 0 === t.length && m.treeGapTopLevel] },
          t
            ? o.a.createElement(d.a, {
                indents: t,
                paddingTop: 5,
                smallFirstCell: !1,
                style: m.connectors,
                wideElbow: 1 === t.length,
                withElbow: !!f,
              })
            : null,
          i || r
            ? o.a.createElement(
                p.a,
                {
                  link: n ? void 0 : r,
                  onClick: n ? void 0 : i,
                  style: [
                    m.hoverBox,
                    t && 0 === t.length && m.hoverBoxTopLevel,
                    t && t.length > 1 && m.hoverBoxIndented,
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
      var a = n('yiKp'),
        o = n.n(a),
        r = n('ezF+'),
        i = n('ERkP'),
        l = n.n(i),
        c = n('EnM6'),
        s = n('3XMw'),
        d = n.n(s),
        p = d.a.i569ff3e,
        f = d.a.c837fca9,
        u = function (e) {
          var t = e.isSelfThread,
            n = e.onClick,
            a = e.onImpression,
            o = e.url
          return (
            l.a.useEffect(
              function () {
                a({ isSelfThreadGap: t })
              },
              [a, t],
            ),
            l.a.createElement(c.a, {
              label: t ? p : f,
              link: o,
              onClick: function () {
                n({ isSelfThreadGap: t })
              },
            })
          )
        },
        h = n('zh9S'),
        m = n('XOJV'),
        g = n('VPAj'),
        v = n('xN10'),
        w = r.g({
          bindActions: Object(g.a)({ scribeAction: h.c }),
          component: u,
          defaultScribeNamespace: { component: 'timeline_conversation' },
          selectData: function (e) {
            var t = e.entry
            e.module
            return {
              isSelfThread: function (e) {
                var n
                return Object(v.a)(t.content.allTweetIds, function (t, a) {
                  var o = m.a.select(e, t)
                  return !o || (0 === a ? ((n = o.id_str), !0) : !!o.self_thread && o.self_thread.id_str === n)
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
                t(o()(o()({}, r), {}, { element: n ? 'see_more' : 'gap', action: 'click' }))
              },
              onImpression: function (e) {
                var n = e.isSelfThreadGap
                t(o()(o()({}, r), {}, { element: n ? 'see_more' : 'gap', action: 'impression' }))
              },
              url: '/i/status/'.concat(a.content.focalTweetId),
            }
          },
          shouldDisplayBorder: Object(g.a)(!1),
        })
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
