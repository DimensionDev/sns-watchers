;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
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
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var r = n('ERkP'),
        o = n.n(r),
        i = n('dWxr'),
        a = n.n(i),
        l = n('rHpw'),
        c = n('aITJ'),
        s = { clipPath: 'circle(0% at center)' },
        d = {
          strategy: function (e, t) {
            for (var n = a()(e.getText()), r = 0; r < n.length; r++)
              n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
          },
          component: function (e) {
            return o.a.createElement('span', { style: { color: l.a.theme.colors.link } }, e.children)
          },
        },
        u = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== C.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              r = e.entityKey,
              i = (r && n.getEntity(r)) || {}
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
        f = {
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
        p = n('z4Oz'),
        g = n('zpdM'),
        h = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var o = e[r],
              i = o.getText().length
            if (n + i >= t) return { blockKey: o.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        y = function (e, t) {
          var n = e.getCurrentContent(),
            r = n.getFirstBlock(),
            o = n.getLastBlock(),
            i = t.blockKey,
            a = void 0 === i ? o.key : i,
            l = t.offset,
            c = void 0 === l ? o.getText().length : l,
            s = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: a, focusOffset: c, isBackward: !1 }),
            d = g.Modifier.removeInlineStyle(e.getCurrentContent(), s, 'overflow')
          return g.EditorState.push(e, d, 'change-inline-style')
        },
        v = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            o = e.getCurrentContent(),
            i = o.getLastBlock(),
            a = m(o, n, r)
          if (n) {
            var l = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: a,
                  focusKey: i.key,
                  focusOffset: i.getText().length,
                  isBackward: !1,
                }),
              c = g.Modifier.applyInlineStyle(o, l, 'overflow')
            return g.EditorState.push(e, c, 'change-inline-style')
          }
          return e
        },
        m = function (e, t) {
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
                  var s = o.getEntityAt(c),
                    d = s && e.getEntity(s)
                  if (!d || !d.data || d.data.id !== l) {
                    r = c + 1
                    break
                  }
                }
            }
            return r
          }
        },
        b = 'TWEMOJI',
        E = 'IMMUTABLE',
        C = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = g.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              r = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                p.a.getTwemojiEntities(e.getText()).forEach(function (o) {
                  if (2 === (o.indices && o.indices.length)) {
                    var i = n.createEntity(b, E, { url: o.url || null, id: r })
                    r += 1
                    var a = i.getLastCreatedEntityKey(),
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
                    n = g.Modifier.applyEntity(i, c, a)
                  }
                })
              }),
              g.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: h,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [d, u, f],
              n = g.EditorState.createWithContent(
                'string' == typeof e ? g.ContentState.createFromText(e) : Object(g.convertFromRaw)(e),
                new g.CompositeDecorator(t),
              )
            return g.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              r = e.getSelection(),
              o = g.Modifier.insertText(n, r, t)
            return g.EditorState.push(e, o, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: b,
          updateOverflowStyle: function (e, t) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = e.getSelection(),
              i = g.EditorState.set(e, { allowUndo: !1 }),
              a = e.getCurrentContent().getSelectionBefore(),
              l = e.getCurrentContent().getSelectionAfter(),
              c = e.getCurrentContent(),
              s = c.getBlocksAsArray(),
              d = 'number' == typeof t && t > -1,
              u = d ? h(s, t) : Object.freeze({})
            if ((r && ((i = y(i, u)), (n = !0)), d && ((i = v(i, u)), (n = !0)), n)) {
              var f = (i = g.EditorState.forceSelection(i, o)).getCurrentContent()
              ;(f = (f = f.set('selectionBefore', a)).set('selectionAfter', l)),
                (i = g.EditorState.set(e, { allowUndo: !0, currentContent: f }))
            }
            return i
          },
        })
    },
    keCP: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        f = n.n(u),
        p = n('KEM+'),
        g = n.n(p),
        h = n('97Jx'),
        y = n.n(h),
        v = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('KqXw'), n('MvUL'), n('SV7d')),
        m = n('rHpw'),
        b = 'singleline',
        E = function (e) {
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
              b,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        C = n('ERkP'),
        S = n.n(C),
        k = n('k/Ka'),
        x = n('PxJJ'),
        w = n('w9LO'),
        D = n('fs1G'),
        T = n('zpdM'),
        _ = function (e) {
          return Object(k.a)('div', e)
        },
        F = !1,
        K =
          ((t.a = S.a.forwardRef(function (e, t) {
            var n = v.d()
            return S.a.createElement(
              K,
              y()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            d()(n, e)
            var t = f()(n)
            function n() {
              var e
              o()(this, n)
              for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                g()(c()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return T.EditorState.acceptSelection(
                    t,
                    new T.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                g()(c()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return T.EditorState.forceSelection(t, t.getSelection())
                }),
                g()(c()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    r = t.editorState,
                    o = t.onChange
                  n
                    ? null == o || o(T.EditorState.moveFocusToEnd(r))
                    : null == o || o(T.EditorState.moveSelectionToEnd(r))
                }),
                g()(c()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = E({ placeholderTextColor: t })
                  var r = document.head
                  r && r.insertBefore(n, r.firstChild)
                }),
                g()(c()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                g()(c()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                g()(c()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                g()(c()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                g()(c()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                g()(c()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                g()(c()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    r = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && r.push(e)
                    }),
                    r.length && (null == n ? void 0 : n(r)) ? 'handled' : 'not-handled'
                  )
                }),
                g()(c()(e), '_onPastedText', function (t, n, r) {
                  var o = e.props,
                    i = o.multiline,
                    a = o.onChange
                  return !i && a
                    ? (a(
                        T.EditorState.push(
                          r,
                          T.Modifier.replaceText(r.getCurrentContent(), r.getSelection(), t.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                g()(c()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    r = n.dismissComposerCommandName,
                    o = n.sendTweetCommandName,
                    i = T.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? o : 27 === t.keyCode ? r : Object(T.getDefaultKeyBinding)(t)
                }),
                g()(c()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    r = n && n[t]
                  return r ? (r(), 'handled') : 'not-handled'
                }),
                g()(c()(e), '_onSingleLineReturn', function (t, n) {
                  var r = e.props.handleReturn
                  return null == r || r(t, n), 'handled'
                }),
                g()(c()(e), '_getContainerStyle', function () {
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
                        F || (this._setDraftJsStyle(), (F = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      x.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
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
                        s = t.handleReturn,
                        d = t.multiline,
                        u = t.onChange,
                        f = t.onFocus,
                        p = t.onKeyDown,
                        h = t.onKeyPress,
                        y = t.onKeyUp,
                        v = t.placeholder,
                        E = t.spellCheck,
                        C = t.stripPastedStyles,
                        k = t.style,
                        x = t.testID
                      return S.a.createElement(
                        _,
                        {
                          className: d ? void 0 : b,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), k],
                        },
                        S.a.createElement(T.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: o,
                          ariaLabel: i,
                          ariaMultiline: d,
                          blockRenderMap: a,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            g()(e, w.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            g()(e, 'onKeyPress', h),
                            g()(e, 'onKeyUp', y),
                            e),
                          customStyleMap: O(m.a.theme),
                          editorState: c,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: d ? s : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: u,
                          onFocus: f,
                          onKeyDown: p,
                          placeholder: v,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== E,
                          stripPastedStyles: C,
                          tabIndex: 0,
                          webDriverTestID: x,
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
          })(S.a.Component))
      g()(K, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: D.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        stripPastedStyles: !0,
      }),
        (K.propTypes = {})
      var O = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
  },
])
//# sourceMappingURL=WIPED
