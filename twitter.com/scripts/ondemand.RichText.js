;(window.webpackJsonp = window.webpackJsonp || []).push([
  [229],
  {
    RH6X: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        d = n.n(u),
        l = n('2VqO'),
        p = n.n(l),
        h = n('KEM+'),
        f = n.n(h),
        y = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        C = n.n(y),
        x = n('oEoC'),
        g = n('2dXj'),
        S = n('4bHO'),
        T = n('dzqK'),
        _ = n('GZwR'),
        v = n('zpdM'),
        m = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              f()(s()(e), '_genericWrapperRef', C.a.createRef()),
              f()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.contextText,
                  o = t.isInline,
                  a = t.isInlineReply,
                  i = t.onTypeaheadStateChange,
                  c = t.source,
                  s = e.state,
                  u = s.canShowTypeahead,
                  d = s.queryContext,
                  l = u && d ? { word: d.word, resultType: d.resultType } : void 0
                return C.a.createElement(
                  g.a,
                  {
                    contextText: r,
                    isInline: o,
                    isInlineReply: a,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: i,
                    query: l,
                    ref: e._genericWrapperRef,
                    source: c || _.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              f()(s()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              f()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              f()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  r = e.state.queryContext
                if (r) {
                  var o = Object(S.a)(t, r.resultType)
                  n(e._replaceToken(o, r))
                }
                e._setQueryContext(void 0)
              }),
              f()(s()(e), '_handleInputChange', function (t) {
                if (!Object(T.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  r = n && n.word,
                  o = e._getPlaintextFromCurrentBlock(t),
                  a = x.c(e._getCaret(t), o),
                  i = a.end,
                  c = a.start,
                  s = a.word,
                  u = x.e(s || '', 'compose')
                if ((null == u ? void 0 : u.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === c))
                    e._setQueryContext(void 0)
                  else if (u) {
                    var d = u.q,
                      l = u.result_type
                    e._setQueryContext({ word: d, resultType: l, editorState: t, startIndex: c, endIndex: i })
                  } else e._setQueryContext(void 0)
              }),
              f()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              f()(s()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.editorState,
                    r = t.endIndex,
                    o = t.startIndex,
                    a = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: o, focusOffset: r }),
                    i = v.Modifier.replaceText(n.getCurrentContent(), a, e),
                    c = v.EditorState.push(n, i, 'insert-characters'),
                    s = o + e.length,
                    u = c.getSelection().merge({ anchorOffset: s, focusOffset: s })
                  return v.EditorState.forceSelection(c, u)
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      t.a = m
    },
    Rk1B: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var r = n('RH6X'),
        o = n('hHEM'),
        a = n('keCP')
      t.default = function (e) {
        return (0, e.children)({
          richTextInputContext: {
            convertEmojiToEntities: o.a.convertEmojiToEntities,
            element: a.a,
            initEditorState: o.a.initEditorState,
            insertTextAtCursor: o.a.insertTextAtCursor,
          },
          typeaheadWrapper: r.a,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
