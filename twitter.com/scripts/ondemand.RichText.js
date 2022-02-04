;(window.webpackJsonp = window.webpackJsonp || []).push([
  [228],
  {
    RH6X: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        f = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        g = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        y = n.n(g),
        v = n('oEoC'),
        C = n('2dXj'),
        m = n('4bHO'),
        S = n('dzqK'),
        E = n('GZwR'),
        b = n('zpdM'),
        x = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              h()(c()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(c()(e), '_genericWrapperRef', y.a.createRef()),
              h()(c()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.contextText,
                  o = t.isInline,
                  a = t.isInlineReply,
                  i = t.onTypeaheadStateChange,
                  l = t.source,
                  c = e.state,
                  s = c.canShowTypeahead,
                  u = c.queryContext,
                  d = s && u ? { word: u.word, resultType: u.resultType } : void 0
                return y.a.createElement(
                  C.a,
                  {
                    contextText: r,
                    isInline: o,
                    isInlineReply: a,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: i,
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
                  var o = Object(m.a)(t, r.resultType)
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
                  a = v.c(e._getCaret(t), o),
                  i = a.end,
                  l = a.start,
                  c = a.word,
                  s = v.e(c || '', 'compose')
                if ((null == s ? void 0 : s.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (s) {
                    var u = s.q,
                      d = s.result_type
                    e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: l, endIndex: i })
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
                    i = b.Modifier.replaceText(n.getCurrentContent(), a, e),
                    l = b.EditorState.push(n, i, 'insert-characters'),
                    c = o + e.length,
                    s = l.getSelection().merge({ anchorOffset: c, focusOffset: c })
                  return b.EditorState.forceSelection(l, s)
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
    dWxr: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, l.default)(e, t)
            .concat((0, i.default)(e))
            .concat((0, a.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, o.default)(e))
          if (0 == n.length) return []
          return (0, c.default)(n), n
        })
      var o = r(n('EW8Q')),
        a = r(n('yyPN')),
        i = r(n('YXS5')),
        l = r(n('vwfs')),
        c = r(n('c8jd'))
      e.exports = t.default
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var r = n('ERkP'),
        o = n.n(r),
        a = n('dWxr'),
        i = n.n(a),
        l = n('rHpw'),
        c = n('aITJ'),
        s = { clipPath: 'circle(0% at center)' },
        u = {
          strategy: function (e, t) {
            for (var n = i()(e.getText()), r = 0; r < n.length; r++)
              n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
          },
          component: function (e) {
            return o.a.createElement('span', { style: { color: l.a.theme.colors.link } }, e.children)
          },
        },
        d = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== E.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              r = e.entityKey,
              a = (r && n.getEntity(r)) || {}
            return !(c.b.isFirefox() && c.b.firefoxVersion() < 49)
              ? o.a.Children.map(t, function (e) {
                  var t,
                    n = o.a.Children.map(e, function (e) {
                      return o.a.createElement('span', { style: s }, e)
                    })[0]
                  return o.a.cloneElement(
                    o.a.createElement('span', null),
                    {
                      style:
                        ((t = (a.data && a.data.url) || ''),
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
        f = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var r, o, a = t.getText(); (r = e.exec(a)); ) n((o = r.index), o + r[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        },
        p = n('z4Oz'),
        h = n('zpdM'),
        g = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var o = e[r],
              a = o.getText().length
            if (n + a >= t) return { blockKey: o.key, offset: t - n }
            n += a + 1
          }
          return Object.freeze({})
        },
        y = function (e, t) {
          var n = e.getCurrentContent(),
            r = n.getFirstBlock(),
            o = n.getLastBlock(),
            a = t.blockKey,
            i = void 0 === a ? o.key : a,
            l = t.offset,
            c = void 0 === l ? o.getText().length : l,
            s = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: i, focusOffset: c, isBackward: !1 }),
            u = h.Modifier.removeInlineStyle(e.getCurrentContent(), s, 'overflow')
          return h.EditorState.push(e, u, 'change-inline-style')
        },
        v = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            o = e.getCurrentContent(),
            a = o.getLastBlock(),
            i = C(o, n, r)
          if (n) {
            var l = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: i,
                  focusKey: a.key,
                  focusOffset: a.getText().length,
                  isBackward: !1,
                }),
              c = h.Modifier.applyInlineStyle(o, l, 'overflow')
            return h.EditorState.push(e, c, 'change-inline-style')
          }
          return e
        },
        C = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = n,
            o = e.getBlockForKey(t)
          if (o) {
            var a = o.getEntityAt(n)
            if (void 0 !== a) {
              var i = a && e.getEntity(a),
                l = i && i.data && i.data.id
              if (void 0 !== l)
                for (var c = n - 1; c >= 0; c--) {
                  var s = o.getEntityAt(c),
                    u = s && e.getEntity(s)
                  if (!u || !u.data || u.data.id !== l) {
                    r = c + 1
                    break
                  }
                }
            }
            return r
          }
        },
        m = 'TWEMOJI',
        S = 'IMMUTABLE',
        E = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = h.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              r = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                p.a.getTwemojiEntities(e.getText()).forEach(function (o) {
                  if (2 === (o.indices && o.indices.length)) {
                    var a = n.createEntity(m, S, { url: o.url || null, id: r })
                    r += 1
                    var i = a.getLastCreatedEntityKey(),
                      l = e.getKey(),
                      c = t
                        .getSelection()
                        .merge({
                          anchorKey: l,
                          anchorOffset: o.indices[0],
                          focusKey: l,
                          focusOffset: o.indices[1],
                          isBackward: !1,
                        })
                    n = h.Modifier.applyEntity(a, c, i)
                  }
                })
              }),
              h.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: g,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [u, d, f],
              n = h.EditorState.createWithContent(
                'string' == typeof e ? h.ContentState.createFromText(e) : Object(h.convertFromRaw)(e),
                new h.CompositeDecorator(t),
              )
            return h.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              r = e.getSelection(),
              o = h.Modifier.insertText(n, r, t)
            return h.EditorState.push(e, o, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: m,
          updateOverflowStyle: function (e, t) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = e.getSelection(),
              a = h.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              l = e.getCurrentContent().getSelectionAfter(),
              c = e.getCurrentContent(),
              s = c.getBlocksAsArray(),
              u = 'number' == typeof t && t > -1,
              d = u ? g(s, t) : Object.freeze({})
            if ((r && ((a = y(a, d)), (n = !0)), u && ((a = v(a, d)), (n = !0)), n)) {
              var f = (a = h.EditorState.forceSelection(a, o)).getCurrentContent()
              ;(f = (f = f.set('selectionBefore', i)).set('selectionAfter', l)),
                (a = h.EditorState.set(e, { allowUndo: !0, currentContent: f }))
            }
            return a
          },
        })
    },
    keCP: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        f = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        g = n('97Jx'),
        y = n.n(g),
        v = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('KqXw'), n('MvUL'), n('SV7d')),
        C = n('rHpw'),
        m = 'singleline',
        S = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? C.a.theme.colors.gray700 : t,
            r = C.a.theme.spaces.space2
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
              m,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              m,
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
            u()(n, e)
            var t = f()(n)
            function n() {
              var e
              o()(this, n)
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(a))),
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
                h()(c()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(c()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
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
                h()(c()(e), '_onPastedText', function (t, n, r) {
                  var o = e.props,
                    a = o.multiline,
                    i = o.onChange
                  return !a && i
                    ? (i(
                        _.EditorState.push(
                          r,
                          _.Modifier.replaceText(r.getCurrentContent(), r.getSelection(), t.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                h()(c()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    r = n.dismissComposerCommandName,
                    o = n.sendTweetCommandName,
                    a = _.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && a(t) ? o : 27 === t.keyCode ? r : Object(_.getDefaultKeyBinding)(t)
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
                    a = t.numberOfLines,
                    i =
                      C.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (o && a ? a : 1) * i, maxHeight: (o && r ? r : 1) * i }
                }),
                e
              )
            }
            return (
              i()(
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
                        a = t.ariaLabel,
                        i = t.blockRenderMap,
                        l = t.blockRendererFn,
                        c = t.editorState,
                        s = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        f = t.onFocus,
                        p = t.onKeyDown,
                        g = t.onKeyPress,
                        y = t.onKeyUp,
                        v = t.placeholder,
                        S = t.spellCheck,
                        E = t.stripPastedStyles,
                        x = t.style,
                        k = t.testID
                      return b.a.createElement(
                        D,
                        {
                          className: u ? void 0 : m,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), x],
                        },
                        b.a.createElement(_.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: o,
                          ariaLabel: a,
                          ariaMultiline: u,
                          blockRenderMap: i,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            h()(e, T.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', g),
                            h()(e, 'onKeyUp', y),
                            e),
                          customStyleMap: K(C.a.theme),
                          editorState: c,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? s : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: f,
                          onKeyDown: p,
                          placeholder: v,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== S,
                          stripPastedStyles: E,
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
        stripPastedStyles: !0,
      }),
        (F.propTypes = {})
      var K = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
  },
])
//# sourceMappingURL=WIPED
