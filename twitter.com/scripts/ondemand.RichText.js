;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return h
      }),
        n.d(t, 'c', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return v
        }),
        n.d(t, 'a', function () {
          return m
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var r = n('ERkP'),
        o = n.n(r),
        i = n('t62R'),
        a = n('dWxr'),
        l = n.n(a),
        c = n('hHEM'),
        u = n('rHpw'),
        s = n('aITJ'),
        d = n('IZ3v'),
        f = function (e, t) {
          for (var n = l()(e.getText()), r = 0; r < n.length; r++)
            n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
        },
        p = { clipPath: 'circle(0% at center)' },
        h = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t ? n.getEntity(t) : null
              return !!r && 'LINK' === r.getType()
            }, t)
          },
          component: function (e) {
            return e.entityKey
              ? o.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        g = {
          strategy: f,
          component: function (e) {
            var t = l()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(d.b)(t)
            return n ? o.a.createElement(i.b, { link: Object(d.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        y = {
          strategy: f,
          component: function (e) {
            return o.a.createElement('span', { style: { color: u.a.theme.colors.link } }, e.children)
          },
        },
        v = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== c.a.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              r = e.entityKey,
              i = (r && n.getEntity(r)) || {}
            return !(s.b.isFirefox() && s.b.firefoxVersion() < 49)
              ? o.a.Children.map(t, function (e) {
                  var t,
                    n = o.a.Children.map(e, function (e) {
                      return o.a.createElement('span', { style: p }, e)
                    })[0]
                  return o.a.cloneElement(
                    o.a.createElement('span', null),
                    {
                      style:
                        ((t = (i.data && i.data.url) || ''),
                        {
                          backgroundImage: 'url("'.concat(t, '")'),
                          backgroundSize: '1em 1em',
                          padding: '0.15em',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          WebkitTextFillColor: 'transparent',
                        }),
                    },
                    n,
                  )
                })
              : t
          },
        },
        m = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var r, o, i = t.getText(); (r = e.exec(i)); ) n((o = r.index), o + r[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        }
    },
    RH6X: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('2VqO'),
        f = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        g = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        y = n.n(g),
        v = n('oEoC'),
        m = n('2dXj'),
        C = n('4bHO'),
        S = n('dzqK'),
        E = n('GZwR'),
        b = n('zpdM'),
        x = (function (e) {
          s()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(c()(e), '_genericWrapperRef', y.a.createRef()),
              h()(c()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.contextText,
                  o = t.isInline,
                  i = t.isInlineReply,
                  a = t.onTypeaheadStateChange,
                  l = t.source,
                  c = e.state,
                  u = c.canShowTypeahead,
                  s = c.queryContext,
                  d = u && s ? { word: s.word, resultType: s.resultType } : void 0
                return y.a.createElement(
                  m.a,
                  {
                    contextText: r,
                    isInline: o,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: a,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: l || E.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(c()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(c()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(c()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  r = e.state.queryContext
                if (r) {
                  var o = Object(C.a)(t, r.resultType)
                  n(e._replaceToken(o, r))
                }
                e._setQueryContext(void 0)
              }),
              h()(c()(e), '_handleInputChange', function (t) {
                if (!Object(S.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  r = n && n.word,
                  o = e._getPlaintextFromCurrentBlock(t),
                  i = v.c(e._getCaret(t), o),
                  a = i.end,
                  l = i.start,
                  c = i.word,
                  u = v.e(c || '', 'compose')
                if ((null == u ? void 0 : u.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (u) {
                    var s = u.q,
                      d = u.result_type
                    e._setQueryContext({ word: s, resultType: d, editorState: t, startIndex: l, endIndex: a })
                  } else e._setQueryContext(void 0)
              }),
              h()(c()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(c()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.editorState,
                    r = t.endIndex,
                    o = t.startIndex,
                    i = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: o, focusOffset: r }),
                    a = b.Modifier.replaceText(n.getCurrentContent(), i, e),
                    l = b.EditorState.push(n, a, 'insert-characters'),
                    c = o + e.length,
                    u = l.getSelection().merge({ anchorOffset: c, focusOffset: c })
                  return b.EditorState.forceSelection(l, u)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      t.a = x
    },
    Rk1B: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var r = n('RH6X'),
        o = n('hHEM'),
        i = n('keCP')
      t.default = function (e) {
        return (0, e.children)({
          richTextInputContext: {
            convertEmojiToEntities: o.a.convertEmojiToEntities,
            element: i.a,
            initEditorState: o.a.initEditorState,
            insertTextAtCursor: o.a.insertTextAtCursor,
          },
          typeaheadWrapper: r.a,
        })
      }
    },
    dWxr: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, l.default)(e, t)
            .concat((0, a.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, o.default)(e))
          if (0 == n.length) return []
          return (0, c.default)(n), n
        })
      var o = r(n('EW8Q')),
        i = r(n('yyPN')),
        a = r(n('YXS5')),
        l = r(n('vwfs')),
        c = r(n('c8jd'))
      e.exports = t.default
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ')
      var r = n('z4Oz'),
        o = n('LQrL'),
        i = n('zpdM'),
        a = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var o = e[r],
              i = o.getText().length
            if (n + i >= t) return { blockKey: o.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        l = function (e, t) {
          var n = e.getCurrentContent(),
            r = n.getFirstBlock(),
            o = n.getLastBlock(),
            a = t.blockKey,
            l = void 0 === a ? o.key : a,
            c = t.offset,
            u = void 0 === c ? o.getText().length : c,
            s = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: l, focusOffset: u, isBackward: !1 }),
            d = i.Modifier.removeInlineStyle(e.getCurrentContent(), s, 'overflow')
          return i.EditorState.push(e, d, 'change-inline-style')
        },
        c = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            o = e.getCurrentContent(),
            a = o.getLastBlock(),
            l = u(o, n, r)
          if (n) {
            var c = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: l,
                  focusKey: a.key,
                  focusOffset: a.getText().length,
                  isBackward: !1,
                }),
              s = i.Modifier.applyInlineStyle(o, c, 'overflow')
            return i.EditorState.push(e, s, 'change-inline-style')
          }
          return e
        },
        u = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = n,
            o = e.getBlockForKey(t)
          if (o) {
            var i = o.getEntityAt(n)
            if (void 0 !== i) {
              var a = i && e.getEntity(i),
                l = a && a.data && a.data.id
              if (void 0 !== l)
                for (var c = n - 1; c >= 0; c--) {
                  var u = o.getEntityAt(c),
                    s = u && e.getEntity(u)
                  if (!s || !s.data || s.data.id !== l) {
                    r = c + 1
                    break
                  }
                }
            }
            return r
          }
        },
        s = 'TWEMOJI',
        d = 'IMMUTABLE'
      t.a = {
        convertEmojiToEntities: function (e) {
          var t = i.EditorState.set(e, { allowUndo: !1 }),
            n = t.getCurrentContent(),
            o = 0
          return (
            n.getBlocksAsArray().forEach(function (e) {
              r.a.getTwemojiEntities(e.getText()).forEach(function (r) {
                if (2 === (r.indices && r.indices.length)) {
                  var a = n.createEntity(s, d, { url: r.url || null, id: o })
                  o += 1
                  var l = a.getLastCreatedEntityKey(),
                    c = e.getKey(),
                    u = t
                      .getSelection()
                      .merge({
                        anchorKey: c,
                        anchorOffset: r.indices[0],
                        focusKey: c,
                        focusOffset: r.indices[1],
                        isBackward: !1,
                      })
                  n = i.Modifier.applyEntity(a, u, l)
                }
              })
            }),
            i.EditorState.set(t, { allowUndo: !0, currentContent: n })
          )
        },
        getRelativeOffset: a,
        initEditorState: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [o.b, o.e, o.a] },
            n = t.decorators,
            r = i.EditorState.createWithContent(
              'string' == typeof e ? i.ContentState.createFromText(e) : Object(i.convertFromRaw)(e),
              new i.CompositeDecorator(n),
            )
          return i.EditorState.moveSelectionToEnd(r)
        },
        insertTextAtCursor: function (e, t) {
          var n = e.getCurrentContent(),
            r = e.getSelection(),
            o = i.Modifier.insertText(n, r, t)
          return i.EditorState.push(e, o, 'insert-characters')
        },
        TWEMOJI_ENTITY_TYPE: s,
        updateOverflowStyle: function (e, t) {
          var n,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = e.getSelection(),
            u = i.EditorState.set(e, { allowUndo: !1 }),
            s = e.getCurrentContent().getSelectionBefore(),
            d = e.getCurrentContent().getSelectionAfter(),
            f = e.getCurrentContent(),
            p = f.getBlocksAsArray(),
            h = 'number' == typeof t && t > -1,
            g = h ? a(p, t) : Object.freeze({})
          if ((r && ((u = l(u, g)), (n = !0)), h && ((u = c(u, g)), (n = !0)), n)) {
            var y = (u = i.EditorState.forceSelection(u, o)).getCurrentContent()
            ;(y = (y = y.set('selectionBefore', s)).set('selectionAfter', d)),
              (u = i.EditorState.set(e, { allowUndo: !0, currentContent: y }))
          }
          return u
        },
      }
    },
    keCP: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('2VqO'),
        f = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        g = n('97Jx'),
        y = n.n(g),
        v =
          (n('2G9S'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('KqXw'),
          n('MvUL'),
          n('z84I'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('KOtZ'),
          n('SV7d')),
        m = n('rHpw'),
        C = 'singleline',
        S = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? m.a.theme.colors.gray700 : t,
            r = m.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(n, ';\n            padding-bottom: ')
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              n,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              C,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              C,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        E = n('ERkP'),
        b = n.n(E),
        x = n('k/Ka'),
        k = n('PxJJ'),
        T = n('w9LO'),
        w = n('fs1G'),
        _ = n('zpdM'),
        D = function (e) {
          return Object(x.a)('div', e)
        },
        O = !1,
        F =
          ((t.a = b.a.forwardRef(function (e, t) {
            var n = v.d()
            return b.a.createElement(
              F,
              y()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            s()(n, e)
            var t = f()(n)
            function n() {
              var e
              o()(this, n)
              for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                h()(c()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return _.EditorState.acceptSelection(
                    t,
                    new _.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                h()(c()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return _.EditorState.forceSelection(t, t.getSelection())
                }),
                h()(c()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    r = t.editorState,
                    o = t.onChange
                  n
                    ? null == o || o(_.EditorState.moveFocusToEnd(r))
                    : null == o || o(_.EditorState.moveSelectionToEnd(r))
                }),
                h()(c()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = S({ placeholderTextColor: t })
                  var r = document.head
                  r && r.insertBefore(n, r.firstChild)
                }),
                h()(c()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                h()(c()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                h()(c()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(c()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                h()(c()(e), 'clear', function () {}),
                h()(c()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                h()(c()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                h()(c()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    r = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && r.push(e)
                    }),
                    r.length && (null == n ? void 0 : n(r)) ? 'handled' : 'not-handled'
                  )
                }),
                h()(c()(e), '_removeNewLines', function (e, t) {
                  return _.EditorState.push(
                    t,
                    _.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                h()(c()(e), '_removeInvalidStylesFromContentBlock', function (t) {
                  var n = e.props.pastedStylesAllowlist,
                    r = t.getCharacterList().map(function (e) {
                      return e
                        .getStyle()
                        .filter(function (e) {
                          return !(null != n && n.includes(e))
                        })
                        .reduce(function (e, t) {
                          return _.CharacterMetadata.removeStyle(e, t)
                        }, e)
                    })
                  return (null != n && n.includes(t.getType()) ? t : t.set('type', 'unstyled')).set('characterList', r)
                }),
                h()(c()(e), '_removeInvalidStyles', function (t, n) {
                  var r = e.props.blockRenderMap,
                    o = t ? Object(_.convertFromHTML)(t, void 0, r) : void 0
                  if (o) {
                    var i,
                      a =
                        null == o || null === (i = o.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (a) {
                      var l = _.ContentState.createFromBlockArray(a, null == o ? void 0 : o.entityMap)
                      return _.EditorState.push(
                        n,
                        _.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), l.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                h()(c()(e), '_onPastedText', function (t, n, r) {
                  var o = e.props,
                    i = o.multiline,
                    a = o.onChange,
                    l = o.pastedStylesAllowlist
                  if (a) {
                    if (!i) return a(e._removeNewLines(t, r)), 'handled'
                    if (null != l && l.length) {
                      var c = e._removeInvalidStyles(n, r)
                      if (c) return a(c), 'handled'
                    }
                  }
                  return 'not-handled'
                }),
                h()(c()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    r = n.dismissComposerCommandName,
                    o = n.sendTweetCommandName,
                    i = _.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? o : 27 === t.keyCode ? r : Object(_.getDefaultKeyBinding)(t)
                }),
                h()(c()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    r = n && n[t]
                  return r ? (r(), 'handled') : 'not-handled'
                }),
                h()(c()(e), '_onSingleLineReturn', function (t, n) {
                  var r = e.props.handleReturn
                  return null == r || r(t, n), 'handled'
                }),
                h()(c()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    r = t.maxNumberOfLines,
                    o = t.multiline,
                    i = t.numberOfLines,
                    a =
                      m.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (o && i ? i : 1) * a, maxHeight: (o && r ? r : 1) * a }
                }),
                e
              )
            }
            return (
              a()(
                n,
                [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        t = e.onChange,
                        n = e.positionCursorAtBeginning
                      e.positionCursorAtEnd
                        ? this._setFocusToEnd()
                        : n
                        ? null == t || t(this._setFocusToStart())
                        : this.props.autoFocus && this.focus(),
                        O || (this._setDraftJsStyle(), (O = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      k.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t = this.props,
                        n = t.ariaActiveDescendant,
                        r = t.ariaAutocomplete,
                        o = t.ariaControls,
                        i = t.ariaLabel,
                        a = t.blockRenderMap,
                        l = t.blockRendererFn,
                        c = t.editorState,
                        u = t.handleReturn,
                        s = t.multiline,
                        d = t.onChange,
                        f = t.onFocus,
                        p = t.onKeyDown,
                        g = t.onKeyPress,
                        y = t.onKeyUp,
                        v = t.pastedStylesAllowlist,
                        S = t.placeholder,
                        E = t.spellCheck,
                        x = t.style,
                        k = t.testID
                      return b.a.createElement(
                        D,
                        {
                          className: s ? void 0 : C,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), x],
                        },
                        b.a.createElement(_.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: o,
                          ariaLabel: i,
                          ariaMultiline: s,
                          blockRenderMap: a,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            h()(e, T.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', g),
                            h()(e, 'onKeyUp', y),
                            e),
                          customStyleMap: K(m.a.theme),
                          editorState: c,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: s ? u : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: f,
                          onKeyDown: p,
                          placeholder: S,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== E,
                          stripPastedStyles: !(s && null != v && v.length),
                          tabIndex: 0,
                          webDriverTestID: k,
                        }),
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromError',
                    value: function () {
                      return {}
                    },
                  },
                ],
              ),
              n
            )
          })(b.a.Component))
      h()(F, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: w.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (F.propTypes = {})
      var K = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
  },
])
//# sourceMappingURL=WIPED
