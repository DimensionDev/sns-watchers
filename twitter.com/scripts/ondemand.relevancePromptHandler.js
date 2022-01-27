;(window.webpackJsonp = window.webpackJsonp || []).push([
  [342],
  {
    '3ukl': function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = n('ezF+'),
        i = n('EIk2'),
        c = (n('uFXj'), n('ERkP')),
        l = n('IMYl'),
        s = n('hOZg'),
        p = function (e) {
          return 'IconCheckmark' === e
            ? c.createElement(l.a, null)
            : 'IconClose' === e
            ? c.createElement(s.a, null)
            : void 0
        },
        u =
          (n('yH/f'),
          Object.freeze({ Compact: 'Compact', Normal: 'Normal', Large: 'Large', ThumbsUpAndDown: 'ThumbsUpAndDown' })),
        m = n('Irs7'),
        b = n('MWbm'),
        d = n('PbQQ'),
        y = n('/yvb'),
        f = n('t62R'),
        v = n('rHpw').a.create(function (e) {
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
        C = function (e) {
          var t = e.confirmation,
            n = e.displayType,
            r = e.isRelevantIcon,
            o = e.isRelevantOnClick,
            a = e.isRelevantText,
            i = e.notRelevantIcon,
            l = e.notRelevantOnClick,
            s = e.notRelevantText,
            C = e.onIsRelevant,
            R = e.showConfirmation,
            g = e.title,
            E = Object(m.b)(),
            O = n === u.ThumbsUpAndDown,
            h = O,
            w = d.b.useOpaqueIdentifier(),
            I = function () {
              E.scribe({ element: 'is_relevant', action: 'click' }), C && C(), o()
            },
            k = function () {
              E.scribe({ element: 'not_relevant', action: 'click' }), l()
            },
            j = function (e, t, n) {
              return c.createElement(
                y.a,
                {
                  accessibilityLabel: t,
                  icon: n ? p(n) : void 0,
                  onPress: e,
                  size: n ? 'medium' : 'xSmall',
                  style: n ? v.icon : v.button,
                  type: O ? 'primaryOutlined' : 'brandFilled',
                },
                n ? null : t,
              )
            }
          return c.createElement(
            b.a,
            { accessibilityLabelledBy: w, accessibilityRole: 'group', style: v.promptContainer },
            R
              ? c.createElement(b.a, { accessibilityRole: 'alert' }, c.createElement(f.b, { style: O && v.survey }, t))
              : c.createElement(
                  b.a,
                  { style: [v.root, O && v.survey] },
                  c.createElement(b.a, { style: v.firstHalf }, c.createElement(f.b, { nativeID: w }, g)),
                  c.createElement(
                    b.a,
                    { style: v.secondHalf },
                    c.createElement(
                      b.a,
                      { style: v.buttonContainer },
                      h
                        ? c.createElement(c.Fragment, null, j(I, a, r), j(k, s, i))
                        : c.createElement(c.Fragment, null, j(k, s, i), j(I, a, r)),
                    ),
                  ),
                ),
          )
        },
        R = n('zh9S'),
        g = n('Rp9C'),
        E = n('pbku'),
        O = n('0KEI')
      function h(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var I = function (e, t) {
          if (e && e === u.ThumbsUpAndDown) return t ? 'IconCheckmark' : 'IconClose'
        },
        k = a.g({
          component: C,
          bindActions: function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('RELEVANCE_PROMPT'),
              scribe: R.c,
              processCallback: i.a,
              applyReactionInstructions: t.applyReactionInstructions,
              updateEntry: t.updateEntry,
            }
          },
          createProps: function (e) {
            var t = e.actions,
              n = t.applyReactionInstructions,
              r = t.createLocalApiErrorHandler,
              o = t.processCallback,
              a = (t.scribe, t.updateEntry),
              i = e.entry,
              c = i.content,
              l = c && c.relevancePrompt
            if (!l) return null
            return {
              onIsRelevant: function () {
                n({ entry: i, triggerName: E.a.ON_IS_RELEVANT })
              },
              title: l.title,
              confirmation: l.confirmation,
              isRelevantText: l.isRelevantText,
              notRelevantText: l.notRelevantText,
              isRelevantIcon: I(l.displayType, !0),
              notRelevantIcon: I(l.displayType, !1),
              isRelevantOnClick: function () {
                a(i.entryId, { relevancePrompt: w(w({}, l), {}, { showConfirmation: !0 }) }),
                  o(l.isRelevantCallback).catch(r())
              },
              notRelevantOnClick: function () {
                a(i.entryId, { relevancePrompt: w(w({}, l), {}, { showConfirmation: !0 }) }),
                  o(l.notRelevantCallback).catch(r())
              },
              displayType: l.displayType,
              showConfirmation: l.showConfirmation,
            }
          },
          getScribeDataItem: function (e) {
            return g.a.forRelevancePrompt(e.itemMetadata.clientEventInfo)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData
            t(w(w({}, e.scribeNamespace), {}, { element: 'relevance_prompt', action: 'impression' }), n)
          },
        })
      t.default = k
    },
  },
])
//# sourceMappingURL=WIPED
