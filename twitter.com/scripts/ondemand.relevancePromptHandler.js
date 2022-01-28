;(window.webpackJsonp = window.webpackJsonp || []).push([
  [346],
  {
    '3ukl': function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ezF+'),
        i = n('EIk2'),
        c = (n('uFXj'), n('ERkP')),
        l = n.n(c),
        s = n('IMYl'),
        p = n('hOZg'),
        u = function (e) {
          return 'IconCheckmark' === e
            ? l.a.createElement(s.a, null)
            : 'IconClose' === e
            ? l.a.createElement(p.a, null)
            : void 0
        },
        m =
          (n('yH/f'),
          Object.freeze({ Compact: 'Compact', Normal: 'Normal', Large: 'Large', ThumbsUpAndDown: 'ThumbsUpAndDown' })),
        b = n('Irs7'),
        d = n('MWbm'),
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
            r = e.isRelevantIcon,
            a = e.isRelevantOnClick,
            o = e.isRelevantText,
            i = e.notRelevantIcon,
            c = e.notRelevantOnClick,
            s = e.notRelevantText,
            p = e.onIsRelevant,
            R = e.showConfirmation,
            g = e.title,
            E = Object(b.b)(),
            O = n === m.ThumbsUpAndDown,
            h = O,
            w = y.b.useOpaqueIdentifier(),
            I = function () {
              E.scribe({ element: 'is_relevant', action: 'click' }), p && p(), a()
            },
            k = function () {
              E.scribe({ element: 'not_relevant', action: 'click' }), c()
            },
            j = function (e, t, n) {
              return l.a.createElement(
                f.a,
                {
                  accessibilityLabel: t,
                  icon: n ? u(n) : void 0,
                  onPress: e,
                  size: n ? 'medium' : 'xSmall',
                  style: n ? C.icon : C.button,
                  type: O ? 'primaryOutlined' : 'brandFilled',
                },
                n ? null : t,
              )
            }
          return l.a.createElement(
            d.a,
            { accessibilityLabelledBy: w, accessibilityRole: 'group', style: C.promptContainer },
            R
              ? l.a.createElement(
                  d.a,
                  { accessibilityRole: 'alert' },
                  l.a.createElement(v.b, { style: O && C.survey }, t),
                )
              : l.a.createElement(
                  d.a,
                  { style: [C.root, O && C.survey] },
                  l.a.createElement(d.a, { style: C.firstHalf }, l.a.createElement(v.b, { nativeID: w }, g)),
                  l.a.createElement(
                    d.a,
                    { style: C.secondHalf },
                    l.a.createElement(
                      d.a,
                      { style: C.buttonContainer },
                      h
                        ? l.a.createElement(l.a.Fragment, null, j(I, o, r), j(k, s, i))
                        : l.a.createElement(l.a.Fragment, null, j(k, s, i), j(I, o, r)),
                    ),
                  ),
                ),
          )
        },
        g = n('zh9S'),
        E = n('Rp9C'),
        O = n('pbku'),
        h = n('0KEI')
      function w(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = function (e, t) {
          if (e && e === m.ThumbsUpAndDown) return t ? 'IconCheckmark' : 'IconClose'
        },
        j = o.g({
          component: R,
          bindActions: function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('RELEVANCE_PROMPT'),
              scribe: g.c,
              processCallback: i.a,
              applyReactionInstructions: t.applyReactionInstructions,
              updateEntry: t.updateEntry,
            }
          },
          createProps: function (e) {
            var t = e.actions,
              n = t.applyReactionInstructions,
              r = t.createLocalApiErrorHandler,
              a = t.processCallback,
              o = (t.scribe, t.updateEntry),
              i = e.entry,
              c = i.content,
              l = c && c.relevancePrompt
            if (!l) return null
            return {
              onIsRelevant: function () {
                n({ entry: i, triggerName: O.a.ON_IS_RELEVANT })
              },
              title: l.title,
              confirmation: l.confirmation,
              isRelevantText: l.isRelevantText,
              notRelevantText: l.notRelevantText,
              isRelevantIcon: k(l.displayType, !0),
              notRelevantIcon: k(l.displayType, !1),
              isRelevantOnClick: function () {
                o(i.entryId, { relevancePrompt: I(I({}, l), {}, { showConfirmation: !0 }) }),
                  a(l.isRelevantCallback).catch(r())
              },
              notRelevantOnClick: function () {
                o(i.entryId, { relevancePrompt: I(I({}, l), {}, { showConfirmation: !0 }) }),
                  a(l.notRelevantCallback).catch(r())
              },
              displayType: l.displayType,
              showConfirmation: l.showConfirmation,
            }
          },
          getScribeDataItem: function (e) {
            return E.a.forRelevancePrompt(e.itemMetadata.clientEventInfo)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData
            t(I(I({}, e.scribeNamespace), {}, { element: 'relevance_prompt', action: 'impression' }), n)
          },
        })
      t.default = j
    },
  },
])
//# sourceMappingURL=WIPED
