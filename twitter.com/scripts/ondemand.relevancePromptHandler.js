;(window.webpackJsonp = window.webpackJsonp || []).push([
  [349],
  {
    '3ukl': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        o = n.n(a),
        r = n('ezF+'),
        i = n('EIk2'),
        l = (n('uFXj'), n('ERkP')),
        c = n.n(l),
        s = n('IMYl'),
        p = n('hOZg'),
        m = function (e) {
          return 'IconCheckmark' === e
            ? c.a.createElement(s.a, null)
            : 'IconClose' === e
            ? c.a.createElement(p.a, null)
            : void 0
        },
        u =
          (n('yH/f'),
          Object.freeze({ Compact: 'Compact', Normal: 'Normal', Large: 'Large', ThumbsUpAndDown: 'ThumbsUpAndDown' })),
        d = n('Irs7'),
        b = n('MWbm'),
        y = n('PbQQ'),
        f = n('/yvb'),
        v = n('t62R'),
        C = n('rHpw').a.create(function (e) {
          return {
            button: { margin: '1ex' },
            buttonContainer: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' },
            secondHalf: { width: '50%', display: 'grid', justifyContent: 'end' },
            firstHalf: { width: '50%', flexDirection: 'column', justifyContent: 'center' },
            root: { flexDirection: 'row', justifyContent: 'space-between' },
            promptContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            survey: {
              display: 'flex',
              borderRadius: e.spaces.space8,
              padding: e.spaces.space12,
              backgroundColor: e.colors.orange0,
              alignItems: 'center',
              minHeight: e.spaces.space64,
            },
            icon: { marginLeft: e.spaces.space12 },
          }
        }),
        R = function (e) {
          var t = e.confirmation,
            n = e.displayType,
            a = e.isRelevantIcon,
            o = e.isRelevantOnClick,
            r = e.isRelevantText,
            i = e.notRelevantIcon,
            l = e.notRelevantOnClick,
            s = e.notRelevantText,
            p = e.onIsRelevant,
            R = e.showConfirmation,
            E = e.title,
            I = Object(d.b)(),
            g = n === u.ThumbsUpAndDown,
            h = g,
            k = y.b.useOpaqueIdentifier(),
            w = function () {
              I.scribe({ element: 'is_relevant', action: 'click' }), p && p(), o()
            },
            T = function () {
              I.scribe({ element: 'not_relevant', action: 'click' }), l()
            },
            x = function (e, t, n) {
              return c.a.createElement(
                f.a,
                {
                  accessibilityLabel: t,
                  icon: n ? m(n) : void 0,
                  onPress: e,
                  size: n ? 'medium' : 'xSmall',
                  style: n ? C.icon : C.button,
                  type: g ? 'primaryOutlined' : 'brandFilled',
                },
                n ? null : t,
              )
            }
          return c.a.createElement(
            b.a,
            { accessibilityLabelledBy: k, accessibilityRole: 'group', style: C.promptContainer },
            R
              ? c.a.createElement(
                  b.a,
                  { accessibilityRole: 'alert' },
                  c.a.createElement(v.b, { style: g && C.survey }, t),
                )
              : c.a.createElement(
                  b.a,
                  { style: [C.root, g && C.survey] },
                  c.a.createElement(b.a, { style: C.firstHalf }, c.a.createElement(v.b, { nativeID: k }, E)),
                  c.a.createElement(
                    b.a,
                    { style: C.secondHalf },
                    c.a.createElement(
                      b.a,
                      { style: C.buttonContainer },
                      h
                        ? c.a.createElement(c.a.Fragment, null, x(w, r, a), x(T, s, i))
                        : c.a.createElement(c.a.Fragment, null, x(T, s, i), x(w, r, a)),
                    ),
                  ),
                ),
          )
        },
        E = n('zh9S'),
        I = n('Rp9C'),
        g = n('pbku'),
        h = n('0KEI'),
        k = function (e, t) {
          if (e && e === u.ThumbsUpAndDown) return t ? 'IconCheckmark' : 'IconClose'
        },
        w = r.g({
          component: R,
          bindActions: function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('RELEVANCE_PROMPT'),
              scribe: E.c,
              processCallback: i.a,
              applyReactionInstructions: t.applyReactionInstructions,
              updateEntry: t.updateEntry,
            }
          },
          createProps: function (e) {
            var t = e.actions,
              n = t.applyReactionInstructions,
              a = t.createLocalApiErrorHandler,
              r = t.processCallback,
              i = (t.scribe, t.updateEntry),
              l = e.entry,
              c = l.content,
              s = c && c.relevancePrompt
            if (!s) return null
            return {
              onIsRelevant: function () {
                n({ entry: l, triggerName: g.a.ON_IS_RELEVANT })
              },
              title: s.title,
              confirmation: s.confirmation,
              isRelevantText: s.isRelevantText,
              notRelevantText: s.notRelevantText,
              isRelevantIcon: k(s.displayType, !0),
              notRelevantIcon: k(s.displayType, !1),
              isRelevantOnClick: function () {
                i(l.entryId, { relevancePrompt: o()(o()({}, s), {}, { showConfirmation: !0 }) }),
                  r(s.isRelevantCallback).catch(a())
              },
              notRelevantOnClick: function () {
                i(l.entryId, { relevancePrompt: o()(o()({}, s), {}, { showConfirmation: !0 }) }),
                  r(s.notRelevantCallback).catch(a())
              },
              displayType: s.displayType,
              showConfirmation: s.showConfirmation,
            }
          },
          getScribeDataItem: function (e) {
            return I.a.forRelevancePrompt(e.itemMetadata.clientEventInfo)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData,
              a = e.scribeNamespace
            t(o()(o()({}, a), {}, { element: 'relevance_prompt', action: 'impression' }), n)
          },
        })
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
