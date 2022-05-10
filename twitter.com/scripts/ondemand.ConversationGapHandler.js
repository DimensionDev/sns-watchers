;(window.webpackJsonp = window.webpackJsonp || []).push([
  [202],
  {
    EnM6: function (e, n, t) {
      'use strict'
      t('hBvt')
      var a = t('ERkP'),
        i = t.n(a),
        o = t('3XMw'),
        r = t.n(o),
        s = t('MWbm'),
        c = t('t62R'),
        l = t('5mJL'),
        d = t('PV92'),
        p = t('htQn'),
        h = t('rHpw'),
        v = t('Qwev'),
        f = r.a.i8005e73,
        m = h.a.create(function (e) {
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
        g = i.a.createElement(v.a, { accessibilityLabel: f, style: m.loadingIndicator })
      n.a = function (e) {
        var n = e.indents,
          t = e.isLoading,
          a = e.label,
          o = e.link,
          r = e.onClick,
          h = e.withConversationLines,
          v = void 0 !== h && h,
          f = e.withElbow,
          u = i.a.createElement(c.b, { color: 'link', style: m.enlargeTouchTarget }, a),
          w = i.a.createElement(
            l.a,
            {
              avatarCell: n
                ? void 0
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    v && i.a.createElement(s.a, { style: m.conversationLine, testID: 'conversationLine' }),
                    i.a.createElement(
                      s.a,
                      { style: [m.ellipsis, v && m.ellipsisWithConversationLines] },
                      i.a.createElement(s.a, { style: m.dot }),
                      i.a.createElement(s.a, { style: m.dot }),
                      i.a.createElement(s.a, { style: m.dot }),
                    ),
                    v && i.a.createElement(s.a, { style: m.conversationLine, testID: 'conversationLine' }),
                  ),
              avatarCellStyle: m.conversationConnector,
              cellStyle: [m.content, n && m.treeContent],
            },
            t ? g : u,
          )
        return i.a.createElement(
          s.a,
          { style: [m.gap, n && m.treeGap, n && 0 === n.length && m.treeGapTopLevel] },
          n
            ? i.a.createElement(d.a, {
                indents: n,
                paddingTop: 5,
                smallFirstCell: !1,
                style: m.connectors,
                wideElbow: 1 === n.length,
                withElbow: !!f,
              })
            : null,
          r || o
            ? i.a.createElement(
                p.a,
                {
                  link: t ? void 0 : o,
                  onClick: t ? void 0 : r,
                  style: [
                    m.hoverBox,
                    n && 0 === n.length && m.hoverBoxTopLevel,
                    n && n.length > 1 && m.hoverBoxIndented,
                  ],
                  withInteractiveStyling: !t,
                },
                w,
              )
            : w,
        )
      }
    },
    GCNy: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('yiKp'),
        i = t.n(a),
        o = t('ezF+'),
        r = t('ERkP'),
        s = t.n(r),
        c = t('v6aA'),
        l = t('EnM6'),
        d = t('3XMw'),
        p = t.n(d),
        h = p.a.i569ff3e,
        v = p.a.c837fca9,
        f = function (e) {
          var n = e.isSelfThread,
            t = e.onClick,
            a = e.onImpression,
            i = e.url,
            o = s.a.useContext(c.a).featureSwitches.isTrue('media_edge_to_edge_content_enabled')
          return (
            s.a.useEffect(
              function () {
                a({ isSelfThreadGap: n })
              },
              [a, n],
            ),
            s.a.createElement(l.a, {
              label: n ? h : v,
              link: i,
              onClick: function () {
                t({ isSelfThreadGap: n })
              },
              withConversationLines: o,
            })
          )
        },
        m = t('zh9S'),
        g = t('XOJV'),
        u = t('VPAj'),
        w = t('xN10'),
        b = o.g({
          bindActions: Object(u.a)({ scribeAction: m.scribeAction }),
          component: f,
          defaultScribeNamespace: { component: 'timeline_conversation' },
          selectData: function (e) {
            var n = e.entry
            e.module
            return {
              isSelfThread: function (e) {
                var t
                return Object(w.a)(n.content.allTweetIds, function (n, a) {
                  var i = g.a.select(e, n)
                  return !i || (0 === a ? ((t = i.id_str), !0) : !!i.self_thread && i.self_thread.id_str === t)
                })
              },
            }
          },
          createProps: function (e) {
            var n = e.actions.scribeAction,
              t = e.data.isSelfThread,
              a = e.entry,
              o = e.scribeNamespace
            return {
              isSelfThread: t,
              onClick: function (e) {
                var t = e.isSelfThreadGap
                n(i()(i()({}, o), {}, { element: t ? 'see_more' : 'gap', action: 'click' }))
              },
              onImpression: function (e) {
                var t = e.isSelfThreadGap
                n(i()(i()({}, o), {}, { element: t ? 'see_more' : 'gap', action: 'impression' }))
              },
              url: '/i/status/'.concat(a.content.focalTweetId),
            }
          },
          shouldDisplayBorder: Object(u.a)(!1),
        })
      n.default = b
    },
  },
])
//# sourceMappingURL=WIPED
