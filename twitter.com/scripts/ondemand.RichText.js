;(window.webpackJsonp = window.webpackJsonp || []).push([
  [218],
  {
    RH6X: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        g = n('KEM+'),
        y = n.n(g),
        v = (n('2G9S'), n('ERkP')),
        m = n('oEoC'),
        C = n('2dXj'),
        S = n('4bHO'),
        E = n('dzqK'),
        b = n('GZwR'),
        x = n('zpdM')
      function k(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var T = (function (e) {
        s()(n, e)
        var t = k(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            y()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
            y()(l()(e), '_genericWrapperRef', v.createRef()),
            y()(l()(e), 'render', function () {
              var t = e.props,
                n = t.children,
                r = t.contextText,
                o = t.isInline,
                i = t.isInlineReply,
                a = t.onTypeaheadStateChange,
                c = t.source,
                l = e.state,
                u = l.canShowTypeahead,
                s = l.queryContext,
                d = u && s ? { word: s.word, resultType: s.resultType } : void 0
              return v.createElement(
                C.a,
                {
                  contextText: r,
                  isInline: o,
                  isInlineReply: i,
                  onDismiss: e._handleDismiss,
                  onSelectItem: e._handleSelectItem,
                  onTypeaheadStateChange: a,
                  query: d,
                  ref: e._genericWrapperRef,
                  source: c || b.d.Compose,
                },
                n(e._handleInputChange),
              )
            }),
            y()(l()(e), '_getCaret', function (e) {
              return e.getSelection().getStartOffset()
            }),
            y()(l()(e), '_getPlaintextFromCurrentBlock', function (e) {
              var t = e.getSelection().anchorKey
              return e.getCurrentContent().getBlockForKey(t).getText()
            }),
            y()(l()(e), '_handleSelectItem', function (t) {
              var n = e.props.onTextUpdated,
                r = e.state.queryContext
              if (r) {
                var o = Object(S.a)(t, r.resultType)
                n(e._replaceToken(o, r))
              }
              e._setQueryContext(void 0)
            }),
            y()(l()(e), '_handleInputChange', function (t) {
              if (!Object(E.a)(t))
                throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
              var n = e.state.queryContext,
                r = n && n.word,
                o = e._getPlaintextFromCurrentBlock(t),
                i = m.c(e._getCaret(t), o),
                a = i.end,
                c = i.start,
                l = i.word,
                u = m.e(l || '', 'compose')
              if ((null == u ? void 0 : u.q) !== r)
                if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === c))
                  e._setQueryContext(void 0)
                else if (u) {
                  var s = u.q,
                    d = u.result_type
                  e._setQueryContext({ word: s, resultType: d, editorState: t, startIndex: c, endIndex: a })
                } else e._setQueryContext(void 0)
            }),
            y()(l()(e), '_setQueryContext', function (t) {
              return e.setState({ queryContext: t, canShowTypeahead: !!t })
            }),
            y()(l()(e), '_handleDismiss', function () {
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
                  a = x.Modifier.replaceText(n.getCurrentContent(), i, e),
                  c = x.EditorState.push(n, a, 'insert-characters'),
                  l = o + e.length,
                  u = c.getSelection().merge({ anchorOffset: l, focusOffset: l })
                return x.EditorState.forceSelection(c, u)
              },
            },
          ]),
          n
        )
      })(v.Component)
      t.a = T
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
          var n = (0, c.default)(e, t)
            .concat((0, a.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, o.default)(e))
          if (0 == n.length) return []
          return (0, l.default)(n), n
        })
      var o = r(n('EW8Q')),
        i = r(n('yyPN')),
        a = r(n('YXS5')),
        c = r(n('vwfs')),
        l = r(n('c8jd'))
      e.exports = t.default
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var r = n('ERkP'),
        o = n('dWxr'),
        i = n.n(o),
        a = n('rHpw'),
        c = n('aITJ'),
        l = { clipPath: 'circle(0% at center)' },
        u = {
          strategy: function (e, t) {
            for (var n = i()(e.getText()), r = 0; r < n.length; r++)
              n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
          },
          component: function (e) {
            return r.createElement('span', { style: { color: a.a.theme.colors.link } }, e.children)
          },
        },
        s = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== S.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              o = e.entityKey,
              i = (o && n.getEntity(o)) || {}
            return !(c.b.isFirefox() && c.b.firefoxVersion() < 49)
              ? r.Children.map(t, function (e) {
                  var t,
                    n = r.Children.map(e, function (e) {
                      return r.createElement('span', { style: l }, e)
                    })[0]
                  return r.cloneElement(
                    r.createElement('span', null),
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
        d = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var r, o, i = t.getText(); (r = e.exec(i)); ) n((o = r.index), o + r[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        },
        f = n('z4Oz'),
        p = n('zpdM'),
        h = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var o = e[r],
              i = o.getText().length
            if (n + i >= t) return { blockKey: o.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        g = function (e, t) {
          var n = e.getCurrentContent(),
            r = n.getFirstBlock(),
            o = n.getLastBlock(),
            i = t.blockKey,
            a = void 0 === i ? o.key : i,
            c = t.offset,
            l = void 0 === c ? o.getText().length : c,
            u = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: a, focusOffset: l, isBackward: !1 }),
            s = p.Modifier.removeInlineStyle(e.getCurrentContent(), u, 'overflow')
          return p.EditorState.push(e, s, 'change-inline-style')
        },
        y = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            o = e.getCurrentContent(),
            i = o.getLastBlock(),
            a = v(o, n, r)
          if (n) {
            var c = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: a,
                  focusKey: i.key,
                  focusOffset: i.getText().length,
                  isBackward: !1,
                }),
              l = p.Modifier.applyInlineStyle(o, c, 'overflow')
            return p.EditorState.push(e, l, 'change-inline-style')
          }
          return e
        },
        v = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = n,
            o = e.getBlockForKey(t)
          if (o) {
            var i = o.getEntityAt(n)
            if (void 0 !== i) {
              var a = i && e.getEntity(i),
                c = a && a.data && a.data.id
              if (void 0 !== c)
                for (var l = n - 1; l >= 0; l--) {
                  var u = o.getEntityAt(l),
                    s = u && e.getEntity(u)
                  if (!s || !s.data || s.data.id !== c) {
                    r = l + 1
                    break
                  }
                }
            }
            return r
          }
        },
        m = 'TWEMOJI',
        C = 'IMMUTABLE',
        S = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = p.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              r = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                f.a.getTwemojiEntities(e.getText()).forEach(function (o) {
                  if (2 === (o.indices && o.indices.length)) {
                    var i = n.createEntity(m, C, { url: o.url || null, id: r })
                    r += 1
                    var a = i.getLastCreatedEntityKey(),
                      c = e.getKey(),
                      l = t
                        .getSelection()
                        .merge({
                          anchorKey: c,
                          anchorOffset: o.indices[0],
                          focusKey: c,
                          focusOffset: o.indices[1],
                          isBackward: !1,
                        })
                    n = p.Modifier.applyEntity(i, l, a)
                  }
                })
              }),
              p.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: h,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [u, s, d],
              n = p.EditorState.createWithContent(p.ContentState.createFromText(e), new p.CompositeDecorator(t))
            return p.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              r = e.getSelection(),
              o = p.Modifier.insertText(n, r, t)
            return p.EditorState.push(e, o, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: m,
          updateOverflowStyle: function (e, t) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = e.getSelection(),
              i = p.EditorState.set(e, { allowUndo: !1 }),
              a = e.getCurrentContent().getSelectionBefore(),
              c = e.getCurrentContent().getSelectionAfter(),
              l = e.getCurrentContent(),
              u = l.getBlocksAsArray(),
              s = 'number' == typeof t && t > -1,
              d = s ? h(u, t) : Object.freeze({})
            if ((r && ((i = g(i, d)), (n = !0)), s && ((i = y(i, d)), (n = !0)), n)) {
              var f = (i = p.EditorState.forceSelection(i, o)).getCurrentContent()
              ;(f = (f = f.set('selectionBefore', a)).set('selectionAfter', c)),
                (i = p.EditorState.set(e, { allowUndo: !0, currentContent: f }))
            }
            return i
          },
        })
    },
    keCP: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        g = n('KEM+'),
        y = n.n(g),
        v = n('97Jx'),
        m = n.n(v),
        C = (n('2G9S'), n('jwue'), n('+oxZ'), n('MvUL'), n('KqXw'), n('SV7d')),
        S = n('rHpw'),
        E = 'singleline',
        b = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? S.a.theme.colors.gray700 : t,
            r = S.a.theme.spaces.space2
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
              E,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              E,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        x = n('ERkP'),
        k = n('k/Ka'),
        T = n('PxJJ'),
        w = n('w9LO'),
        _ = n('fs1G'),
        D = (n('aWzz'), n('zpdM'))
      function O(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var R = function (e) {
          return Object(k.a)('div', e)
        },
        K = !1,
        P =
          ((t.a = x.forwardRef(function (e, t) {
            var n = C.d()
            return x.createElement(
              P,
              m()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            s()(n, e)
            var t = O(n)
            function n() {
              var e
              o()(this, n)
              for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                y()(l()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return D.EditorState.acceptSelection(
                    t,
                    new D.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                y()(l()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return D.EditorState.forceSelection(t, t.getSelection())
                }),
                y()(l()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    r = t.editorState,
                    o = t.onChange
                  n
                    ? null == o || o(D.EditorState.moveFocusToEnd(r))
                    : null == o || o(D.EditorState.moveSelectionToEnd(r))
                }),
                y()(l()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = b({ placeholderTextColor: t })
                  var r = document.head
                  r && r.insertBefore(n, r.firstChild)
                }),
                y()(l()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                y()(l()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                y()(l()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                y()(l()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                y()(l()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                y()(l()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                y()(l()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    r = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && r.push(e)
                    }),
                    r.length && (null == n ? void 0 : n(r)) ? 'handled' : 'not-handled'
                  )
                }),
                y()(l()(e), '_onPastedText', function (t, n, r) {
                  var o = e.props,
                    i = o.multiline,
                    a = o.onChange
                  return !i && a
                    ? (a(
                        D.EditorState.push(
                          r,
                          D.Modifier.replaceText(r.getCurrentContent(), r.getSelection(), t.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                y()(l()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    r = n.dismissComposerCommandName,
                    o = n.sendTweetCommandName,
                    i = D.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? o : 27 === t.keyCode ? r : Object(D.getDefaultKeyBinding)(t)
                }),
                y()(l()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    r = n && n[t]
                  return r ? (r(), 'handled') : 'not-handled'
                }),
                y()(l()(e), '_onSingleLineReturn', function (t, n) {
                  var r = e.props.handleReturn
                  return null == r || r(t, n), 'handled'
                }),
                y()(l()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    r = t.maxNumberOfLines,
                    o = t.multiline,
                    i = t.numberOfLines,
                    a =
                      S.a.theme.lineHeightsPx[
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
                        K || (this._setDraftJsStyle(), (K = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      T.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
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
                        a = t.editorState,
                        c = t.handleReturn,
                        l = t.multiline,
                        u = t.onChange,
                        s = t.onFocus,
                        d = t.onKeyDown,
                        f = t.onKeyPress,
                        p = t.onKeyUp,
                        h = t.placeholder,
                        g = t.spellCheck,
                        v = t.style,
                        m = t.testID
                      return x.createElement(
                        R,
                        {
                          className: l ? void 0 : E,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), v],
                        },
                        x.createElement(D.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: o,
                          ariaLabel: i,
                          ariaMultiline: l,
                          customAttrs:
                            ((e = {}),
                            y()(e, w.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            y()(e, 'onKeyPress', f),
                            y()(e, 'onKeyUp', p),
                            e),
                          customStyleMap: F(S.a.theme),
                          editorState: a,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: l ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: u,
                          onFocus: s,
                          onKeyDown: d,
                          placeholder: h,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== g,
                          stripPastedStyles: !0,
                          tabIndex: 0,
                          webDriverTestID: m,
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
          })(x.Component))
      y()(P, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: _.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (P.propTypes = {})
      var F = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
  },
])
//# sourceMappingURL=WIPED
