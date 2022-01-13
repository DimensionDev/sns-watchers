;(window.webpackJsonp = window.webpackJsonp || []).push([
  [229],
  {
    VSZh: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        c = n('ezF+'),
        i = n('zh9S'),
        a = n('Rp9C'),
        s = (n('uFXj'), n('ERkP')),
        l = n('fRsM'),
        p = (n('yH/f'), Object.freeze({ IncentiveFocus: 'IncentiveFocus', TopicFocus: 'TopicFocus' })),
        u = n('MWbm'),
        b = n('t62R'),
        f = function (e) {
          var t = e.displayType,
            n = e.subtext,
            r = e.title,
            o = e.topic,
            c = t === p.IncentiveFocus
          return s.createElement(
            u.a,
            { style: c && d.incentiveFocus },
            s.createElement(l.a, { educateOnFollow: !0, nameWeight: c ? void 0 : 'heavy', topic: o, withIcon: !0 }),
            r || n
              ? s.createElement(
                  u.a,
                  { style: [d.text, c ? d.noMarginBottom : d.border] },
                  r ? s.createElement(b.b, { size: 'headline1', weight: 'bold' }, r) : null,
                  n ? s.createElement(b.b, { color: 'gray700' }, n) : null,
                )
              : null,
          )
        },
        d = n('rHpw').a.create(function (e) {
          return {
            border: {
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
              marginTop: 0,
              paddingTop: e.spaces.space12,
            },
            incentiveFocus: { flexDirection: 'column-reverse' },
            noMarginBottom: { marginBottom: 0 },
            text: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        m = n('Zejx')
      function y(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var g = c.g({
        component: f,
        bindActions: function () {
          return { scribe: i.c }
        },
        selectData: function (e) {
          var t = e.entry.content
          return {
            topic: function (e) {
              return m.a.select(e, t.topicId)
            },
          }
        },
        createProps: function (e) {
          var t = e.data.topic,
            n = e.entry
          if (!t) return null
          var r = n.content
          return { displayType: r.displayType, subtext: r.followIncentiveText, title: r.followIncentiveTitle, topic: t }
        },
        getScribeDataItem: function (e) {
          return a.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            n = e.scribeData
          t(v(v({}, e.scribeNamespace), {}, { action: 'impression' }), n)
        },
      })
      t.default = g
    },
  },
])
//# sourceMappingURL=WIPED
