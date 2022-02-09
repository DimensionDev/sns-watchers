;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '+521': function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return Object.keys(t).map(function (e) {
          return t[e]
        })
      }
    },
    '+vfz': function (t, e, r) {
      'use strict'
      var n = r('7nmT').unstable_flushControlled
      t.exports = n
    },
    '/Cwe': function (t, e, r) {
      'use strict'
      var n = r('euSu'),
        i = r('kuaq')
      function o(t) {
        return null == t ? t : String(t)
      }
      t.exports = function (t, e) {
        var r
        if (window.getComputedStyle && (r = window.getComputedStyle(t, null))) return o(r.getPropertyValue(i(e)))
        if (document.defaultView && document.defaultView.getComputedStyle) {
          if ((r = document.defaultView.getComputedStyle(t, null))) return o(r.getPropertyValue(i(e)))
          if ('display' === e) return 'none'
        }
        return t.currentStyle
          ? o('float' === e ? t.currentStyle.cssFloat || t.currentStyle.styleFloat : t.currentStyle[n(e)])
          : o(t.style && t.style[n(e)])
      }
    },
    '/L11': function (t, e, r) {
      'use strict'
      var n = r('b+nQ'),
        i = r('AL/+'),
        o = r('tI3i')
      function a(t, e, r) {
        var a = e.getCharacterList(),
          s = r > 0 ? a.get(r - 1) : void 0,
          u = r < a.count() ? a.get(r) : void 0,
          c = s ? s.getEntity() : void 0,
          l = u ? u.getEntity() : void 0
        if (l && l === c && 'MUTABLE' !== t.__get(l).getMutability()) {
          for (
            var f,
              p = (function (t, e, r) {
                var n
                return (
                  i(
                    t,
                    function (t, e) {
                      return t.getEntity() === e.getEntity()
                    },
                    function (t) {
                      return t.getEntity() === e
                    },
                    function (t, e) {
                      t <= r && e >= r && (n = { start: t, end: e })
                    },
                  ),
                  'object' != typeof n && o(!1),
                  n
                )
              })(a, l, r),
              d = p.start,
              h = p.end;
            d < h;

          )
            (f = a.get(d)), (a = a.set(d, n.applyEntity(f, null))), d++
          return e.set('characterList', a)
        }
        return e
      }
      t.exports = function (t, e) {
        var r = t.getBlockMap(),
          n = t.getEntityMap(),
          i = {},
          o = e.getStartKey(),
          s = e.getStartOffset(),
          u = r.get(o),
          c = a(n, u, s)
        c !== u && (i[o] = c)
        var l = e.getEndKey(),
          f = e.getEndOffset(),
          p = r.get(l)
        o === l && (p = c)
        var d = a(n, p, f)
        return (
          d !== p && (i[l] = d),
          Object.keys(i).length ? t.merge({ blockMap: r.merge(i), selectionAfter: e }) : t.set('selectionAfter', e)
        )
      }
    },
    '/LAw': function (t, e, r) {
      'use strict'
      function n(t, e) {
        var r = i.get(t, e)
        return 'auto' === r || 'scroll' === r
      }
      var i = {
        get: r('/Cwe'),
        getScrollParent: function (t) {
          if (!t) return null
          for (var e = t.ownerDocument; t && t !== e.body; ) {
            if (n(t, 'overflow') || n(t, 'overflowY') || n(t, 'overflowX')) return t
            t = t.parentNode
          }
          return e.defaultView || e.parentWindow
        },
      }
      t.exports = i
    },
    '/jhs': function (t, e, r) {
      'use strict'
      var n = {
        isImage: function (t) {
          return 'image' === i(t)[0]
        },
        isJpeg: function (t) {
          var e = i(t)
          return n.isImage(t) && ('jpeg' === e[1] || 'pjpeg' === e[1])
        },
      }
      function i(t) {
        return t.split('/')
      }
      t.exports = n
    },
    '07FG': function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return i
      })
      var n = r('cnVF'),
        i = function (t) {
          return t === n.B
        }
    },
    '0Gcc': function (t, e, r) {
      'use strict'
      var n = r('iogJ'),
        i = r('1xkk'),
        o = r('1AUG'),
        a = r('4aXP')
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = e.getStartOffset()
            if (0 === r) return o(t, 1)
            var i = e.getStartKey(),
              a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r),
              s = n.getBackward(a)
            return o(t, s.length || 1)
          },
          'backward',
        )
        return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range')
      }
    },
    '0Uhd': function (t, e, r) {
      'use strict'
      ;(function (e) {
        var n = r('maj8')
        function i() {
          return (i =
            n ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }).apply(this, arguments)
        }
        function o(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r)
            'function' == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(r, t).enumerable
                }),
              )),
              n.forEach(function (e) {
                s(t, e, r[e])
              })
          }
          return t
        }
        function a(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return t
        }
        function s(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (t[e] = r),
            t
          )
        }
        function u(t, e) {
          ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e)
        }
        var c = r('VUbk'),
          l = r('naKV'),
          f = r('fpFo'),
          p = r('QAfK'),
          d = r('UfDk'),
          h = r('QVkg'),
          g = r('+vfz'),
          y = r('tRbA'),
          v = r('Ea6c'),
          m = r('1xkk'),
          _ = r('ERkP'),
          b = r('O+2R'),
          S = r('/LAw'),
          w = r('rim0'),
          x = r('2Wwg'),
          k = r('YSZ8'),
          C = r('gZn9'),
          E = r('7MNd'),
          O = r('ZUd0'),
          D = r('tI3i'),
          I = r('gUTI'),
          M = r('hF1F'),
          K = w.isBrowser('IE'),
          T = !K,
          A = { edit: h, composite: f, drag: d, cut: null, render: null },
          B = !1,
          R = (function (t) {
            function e() {
              return t.apply(this, arguments) || this
            }
            u(e, t)
            var r = e.prototype
            return (
              (r.render = function () {
                return null
              }),
              (r.componentDidMount = function () {
                this._update()
              }),
              (r.componentDidUpdate = function () {
                this._update()
              }),
              (r._update = function () {
                var t = this.props.editor
                ;(t._latestEditorState = this.props.editorState), (t._blockSelectEvents = !0)
              }),
              e
            )
          })(_.Component),
          L = (function (t) {
            function r(e) {
              var r
              return (
                s(a((r = t.call(this, e) || this)), '_blockSelectEvents', void 0),
                s(a(r), '_clipboard', void 0),
                s(a(r), '_handler', void 0),
                s(a(r), '_dragCount', void 0),
                s(a(r), '_internalDrag', void 0),
                s(a(r), '_editorKey', void 0),
                s(a(r), '_placeholderAccessibilityID', void 0),
                s(a(r), '_latestEditorState', void 0),
                s(a(r), '_latestCommittedEditorState', void 0),
                s(a(r), '_pendingStateFromBeforeInput', void 0),
                s(a(r), '_onBeforeInput', void 0),
                s(a(r), '_onBlur', void 0),
                s(a(r), '_onCharacterData', void 0),
                s(a(r), '_onCompositionEnd', void 0),
                s(a(r), '_onCompositionStart', void 0),
                s(a(r), '_onCopy', void 0),
                s(a(r), '_onCut', void 0),
                s(a(r), '_onDragEnd', void 0),
                s(a(r), '_onDragOver', void 0),
                s(a(r), '_onDragStart', void 0),
                s(a(r), '_onDrop', void 0),
                s(a(r), '_onInput', void 0),
                s(a(r), '_onFocus', void 0),
                s(a(r), '_onKeyDown', void 0),
                s(a(r), '_onKeyPress', void 0),
                s(a(r), '_onKeyUp', void 0),
                s(a(r), '_onMouseDown', void 0),
                s(a(r), '_onMouseUp', void 0),
                s(a(r), '_onPaste', void 0),
                s(a(r), '_onSelect', void 0),
                s(a(r), 'editor', void 0),
                s(a(r), 'editorContainer', void 0),
                s(a(r), 'focus', void 0),
                s(a(r), 'blur', void 0),
                s(a(r), 'setMode', void 0),
                s(a(r), 'exitCurrentMode', void 0),
                s(a(r), 'restoreEditorDOM', void 0),
                s(a(r), 'setClipboard', void 0),
                s(a(r), 'getClipboard', void 0),
                s(a(r), 'getEditorKey', void 0),
                s(a(r), 'update', void 0),
                s(a(r), 'onDragEnter', void 0),
                s(a(r), 'onDragLeave', void 0),
                s(a(r), '_handleEditorContainerRef', function (t) {
                  ;(r.editorContainer = t), (r.editor = null !== t ? t.firstChild : null)
                }),
                s(a(r), 'focus', function (t) {
                  var e = r.props.editorState,
                    n = e.getSelection().getHasFocus(),
                    i = r.editor
                  if (i) {
                    var o = S.getScrollParent(i),
                      a = t || E(o),
                      s = a.x,
                      u = a.y
                    I(i) || D(!1),
                      i.focus(),
                      o === window ? window.scrollTo(s, u) : b.setTop(o, u),
                      n || r.update(m.forceSelection(e, e.getSelection()))
                  }
                }),
                s(a(r), 'blur', function () {
                  var t = r.editor
                  t && (I(t) || D(!1), t.blur())
                }),
                s(a(r), 'setMode', function (t) {
                  var e = r.props,
                    n = e.onPaste,
                    i = e.onCut,
                    a = e.onCopy,
                    s = o({}, A.edit)
                  n && (s.onPaste = n), i && (s.onCut = i), a && (s.onCopy = a)
                  var u = o({}, A, { edit: s })
                  r._handler = u[t]
                }),
                s(a(r), 'exitCurrentMode', function () {
                  r.setMode('edit')
                }),
                s(a(r), 'restoreEditorDOM', function (t) {
                  r.setState({ contentsKey: r.state.contentsKey + 1 }, function () {
                    r.focus(t)
                  })
                }),
                s(a(r), 'setClipboard', function (t) {
                  r._clipboard = t
                }),
                s(a(r), 'getClipboard', function () {
                  return r._clipboard
                }),
                s(a(r), 'update', function (t) {
                  ;(r._latestEditorState = t), r.props.onChange(t)
                }),
                s(a(r), 'onDragEnter', function () {
                  r._dragCount++
                }),
                s(a(r), 'onDragLeave', function () {
                  r._dragCount--, 0 === r._dragCount && r.exitCurrentMode()
                }),
                (r._blockSelectEvents = !1),
                (r._clipboard = null),
                (r._handler = null),
                (r._dragCount = 0),
                (r._editorKey = e.editorKey || k()),
                (r._placeholderAccessibilityID = 'placeholder-' + r._editorKey),
                (r._latestEditorState = e.editorState),
                (r._latestCommittedEditorState = e.editorState),
                (r._onBeforeInput = r._buildHandler('onBeforeInput')),
                (r._onBlur = r._buildHandler('onBlur')),
                (r._onCharacterData = r._buildHandler('onCharacterData')),
                (r._onCompositionEnd = r._buildHandler('onCompositionEnd')),
                (r._onCompositionStart = r._buildHandler('onCompositionStart')),
                (r._onCopy = r._buildHandler('onCopy')),
                (r._onCut = r._buildHandler('onCut')),
                (r._onDragEnd = r._buildHandler('onDragEnd')),
                (r._onDragOver = r._buildHandler('onDragOver')),
                (r._onDragStart = r._buildHandler('onDragStart')),
                (r._onDrop = r._buildHandler('onDrop')),
                (r._onInput = r._buildHandler('onInput')),
                (r._onFocus = r._buildHandler('onFocus')),
                (r._onKeyDown = r._buildHandler('onKeyDown')),
                (r._onKeyPress = r._buildHandler('onKeyPress')),
                (r._onKeyUp = r._buildHandler('onKeyUp')),
                (r._onMouseDown = r._buildHandler('onMouseDown')),
                (r._onMouseUp = r._buildHandler('onMouseUp')),
                (r._onPaste = r._buildHandler('onPaste')),
                (r._onSelect = r._buildHandler('onSelect')),
                (r.getEditorKey = function () {
                  return r._editorKey
                }),
                (r.state = { contentsKey: 0 }),
                r
              )
            }
            u(r, t)
            var n = r.prototype
            return (
              (n._buildHandler = function (t) {
                var e = this
                return function (r) {
                  if (!e.props.readOnly) {
                    var n = e._handler && e._handler[t]
                    n &&
                      (g
                        ? g(function () {
                            return n(e, r)
                          })
                        : n(e, r))
                  }
                }
              }),
              (n._showPlaceholder = function () {
                return (
                  !!this.props.placeholder &&
                  !this.props.editorState.isInCompositionMode() &&
                  !this.props.editorState.getCurrentContent().hasText()
                )
              }),
              (n._renderPlaceholder = function () {
                if (this._showPlaceholder()) {
                  var t = {
                    text: M(this.props.placeholder),
                    editorState: this.props.editorState,
                    textAlignment: this.props.textAlignment,
                    accessibilityID: this._placeholderAccessibilityID,
                  }
                  return _.createElement(y, t)
                }
                return null
              }),
              (n.render = function () {
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  a = t.customStyleFn,
                  s = t.customStyleMap,
                  u = t.editorState,
                  c = t.preventScroll,
                  f = t.readOnly,
                  d = t.textAlignment,
                  h = t.textDirectionality,
                  g = x({
                    'DraftEditor/root': !0,
                    'DraftEditor/alignLeft': 'left' === d,
                    'DraftEditor/alignRight': 'right' === d,
                    'DraftEditor/alignCenter': 'center' === d,
                  }),
                  y = this.props.role || 'textbox',
                  v = 'combobox' === y ? !!this.props.ariaExpanded : null,
                  m = {
                    blockRenderMap: e,
                    blockRendererFn: r,
                    blockStyleFn: n,
                    customStyleMap: o({}, l, s),
                    customStyleFn: a,
                    editorKey: this._editorKey,
                    editorState: u,
                    preventScroll: c,
                    textDirectionality: h,
                  }
                return _.createElement(
                  'div',
                  { className: g },
                  this._renderPlaceholder(),
                  _.createElement(
                    'div',
                    { className: x('DraftEditor/editorContainer'), ref: this._handleEditorContainerRef },
                    _.createElement(
                      'div',
                      i(
                        {
                          'aria-activedescendant': f ? null : this.props.ariaActiveDescendantID,
                          'aria-autocomplete': f ? null : this.props.ariaAutoComplete,
                          'aria-controls': f ? null : this.props.ariaControls,
                          'aria-describedby': this.props.ariaDescribedBy || this._placeholderAccessibilityID,
                          'aria-expanded': f ? null : v,
                          'aria-label': this.props.ariaLabel,
                          'aria-labelledby': this.props.ariaLabelledBy,
                          'aria-multiline': this.props.ariaMultiline,
                          'aria-owns': f ? null : this.props.ariaOwneeID,
                          autoCapitalize: this.props.autoCapitalize,
                          autoComplete: this.props.autoComplete,
                          autoCorrect: this.props.autoCorrect,
                          className: x({ notranslate: !f, 'public/DraftEditor/content': !0 }),
                          contentEditable: !f,
                          'data-testid': this.props.webDriverTestID,
                          onBeforeInput: this._onBeforeInput,
                          onBlur: this._onBlur,
                          onCompositionEnd: this._onCompositionEnd,
                          onCompositionStart: this._onCompositionStart,
                          onCopy: this._onCopy,
                          onCut: this._onCut,
                          onDragEnd: this._onDragEnd,
                          onDragEnter: this.onDragEnter,
                          onDragLeave: this.onDragLeave,
                          onDragOver: this._onDragOver,
                          onDragStart: this._onDragStart,
                          onDrop: this._onDrop,
                          onFocus: this._onFocus,
                          onInput: this._onInput,
                          onKeyDown: this._onKeyDown,
                          onKeyPress: this._onKeyPress,
                          onKeyUp: this._onKeyUp,
                          onMouseUp: this._onMouseUp,
                          onPaste: this._onPaste,
                          onSelect: this._onSelect,
                          ref: this.props.editorRef,
                          role: f ? null : y,
                          spellCheck: T && this.props.spellCheck,
                          style: {
                            outline: 'none',
                            userSelect: 'text',
                            WebkitUserSelect: 'text',
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word',
                          },
                          suppressContentEditableWarning: !0,
                          tabIndex: this.props.tabIndex,
                        },
                        this.props.customAttrs,
                      ),
                      _.createElement(R, { editor: this, editorState: u }),
                      _.createElement(p, i({}, m, { key: 'contents' + this.state.contentsKey })),
                    ),
                  ),
                )
              }),
              (n.componentDidMount = function () {
                ;(this._blockSelectEvents = !1),
                  !B && O('draft_ods_enabled') && ((B = !0), v.initODS()),
                  this.setMode('edit'),
                  K &&
                    (this.editor
                      ? this.editor.ownerDocument.execCommand('AutoUrlDetect', !1, !1)
                      : e.execCommand('AutoUrlDetect', !1, !1))
              }),
              (n.componentDidUpdate = function () {
                ;(this._blockSelectEvents = !1),
                  (this._latestEditorState = this.props.editorState),
                  (this._latestCommittedEditorState = this.props.editorState)
              }),
              r
            )
          })(_.Component)
        s(L, 'defaultProps', {
          blockRenderMap: c,
          blockRendererFn: function () {
            return null
          },
          blockStyleFn: function () {
            return ''
          },
          customAttrs: {},
          keyBindingFn: C,
          readOnly: !1,
          spellCheck: !1,
          stripPastedStyles: !1,
        }),
          (t.exports = L)
      }.call(this, r('fRV1')))
    },
    '1+m/': function (t, e, r) {
      'use strict'
      var n = r('Ea6c'),
        i = r('Cfxn'),
        o = r('rim0'),
        a = r('iN4q'),
        s = r('2KzS'),
        u = r('vYw2'),
        c = r('tI3i'),
        l = r('13UR'),
        f = o.isBrowser('IE')
      function p(t, e) {
        if (!t) return '[empty]'
        var r = d(t, e)
        return r.nodeType === Node.TEXT_NODE ? r.textContent : (l(r) || c(!1), r.outerHTML)
      }
      function d(t, e) {
        var r = void 0 !== e ? e(t) : []
        if (t.nodeType === Node.TEXT_NODE) {
          var n = t.textContent.length
          return u(t).createTextNode('[text ' + n + (r.length ? ' | ' + r.join(', ') : '') + ']')
        }
        var i = t.cloneNode()
        1 === i.nodeType && r.length && i.setAttribute('data-labels', r.join(', '))
        for (var o = t.childNodes, a = 0; a < o.length; a++) i.appendChild(d(o[a], e))
        return i
      }
      function h(t, e) {
        for (var r = t, n = r; r; ) {
          if (l(r) && n.hasAttribute('contenteditable')) return p(r, e)
          n = r = r.parentNode
        }
        return 'Could not find contentEditable parent of node'
      }
      function g(t) {
        return null === t.nodeValue ? t.childNodes.length : t.nodeValue.length
      }
      function y(t, e, r, n) {
        var o = s()
        if (t.extend && null != e && a(o, e)) {
          r > g(e) &&
            i.logSelectionStateFailure({
              anonymizedDom: h(e),
              extraParams: JSON.stringify({ offset: r }),
              selectionState: JSON.stringify(n.toJS()),
            })
          var u = e === t.focusNode
          try {
            t.rangeCount > 0 && t.extend && t.extend(e, r)
          } catch (l) {
            throw (
              (i.logSelectionStateFailure({
                anonymizedDom: h(e, function (e) {
                  var r = []
                  return (
                    e === o && r.push('active element'),
                    e === t.anchorNode && r.push('selection anchor node'),
                    e === t.focusNode && r.push('selection focus node'),
                    r
                  )
                }),
                extraParams: JSON.stringify(
                  {
                    activeElementName: o ? o.nodeName : null,
                    nodeIsFocus: e === t.focusNode,
                    nodeWasFocus: u,
                    selectionRangeCount: t.rangeCount,
                    selectionAnchorNodeName: t.anchorNode ? t.anchorNode.nodeName : null,
                    selectionAnchorOffset: t.anchorOffset,
                    selectionFocusNodeName: t.focusNode ? t.focusNode.nodeName : null,
                    selectionFocusOffset: t.focusOffset,
                    message: l ? '' + l : null,
                    offset: r,
                  },
                  null,
                  2,
                ),
                selectionState: JSON.stringify(n.toJS(), null, 2),
              }),
              l)
            )
          }
        } else if (e && t.rangeCount > 0) {
          var c = t.getRangeAt(0)
          c.setEnd(e, r), t.addRange(c.cloneRange())
        }
      }
      function v(t, e, r, o) {
        var a = u(e).createRange()
        if (
          (r > g(e) &&
            (i.logSelectionStateFailure({
              anonymizedDom: h(e),
              extraParams: JSON.stringify({ offset: r }),
              selectionState: JSON.stringify(o.toJS()),
            }),
            n.handleExtensionCausedError()),
          a.setStart(e, r),
          f)
        )
          try {
            t.addRange(a)
          } catch (s) {
            0
          }
        else t.addRange(a)
      }
      t.exports = {
        setDraftEditorSelection: function (t, e, r, n, i) {
          var o = u(e)
          if (a(o.documentElement, e)) {
            var s = o.defaultView.getSelection(),
              c = t.getAnchorKey(),
              l = t.getAnchorOffset(),
              f = t.getFocusKey(),
              p = t.getFocusOffset(),
              d = t.getIsBackward()
            if (!s.extend && d) {
              var h = c,
                g = l
              ;(c = f), (l = p), (f = h), (p = g), (d = !1)
            }
            var m = c === r && n <= l && i >= l,
              _ = f === r && n <= p && i >= p
            if (m && _) return s.removeAllRanges(), v(s, e, l - n, t), void y(s, e, p - n, t)
            if (d) {
              if ((_ && (s.removeAllRanges(), v(s, e, p - n, t)), m)) {
                var b = s.focusNode,
                  S = s.focusOffset
                s.removeAllRanges(), v(s, e, l - n, t), y(s, b, S, t)
              }
            } else m && (s.removeAllRanges(), v(s, e, l - n, t)), _ && y(s, e, p - n, t)
          }
        },
        addFocusToSelection: y,
      }
    },
    '13UR': function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && t.nodeType === Node.ELEMENT_NODE
      }
    },
    '1AUG': function (t, e, r) {
      'use strict'
      r('/2Cm')
      t.exports = function (t, e) {
        var r = t.getSelection(),
          n = t.getCurrentContent(),
          i = r.getStartKey(),
          o = r.getStartOffset(),
          a = i,
          s = 0
        if (e > o) {
          var u = n.getKeyBefore(i)
          if (null == u) a = i
          else (a = u), (s = n.getBlockForKey(u).getText().length)
        } else s = o - e
        return r.merge({ focusKey: a, focusOffset: s, isBackward: !0 })
      }
    },
    '1xkk': function (t, e, r) {
      'use strict'
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              i(t, e, r[e])
            })
        }
        return t
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var o = r('VUYy'),
        a = r('VeLA'),
        s = r('Yed0'),
        u = r('IDEf'),
        c = r('Svze'),
        l = c.OrderedSet,
        f = c.Record,
        p = c.Stack,
        d = c.OrderedMap,
        h = c.List,
        g = f({
          allowUndo: !0,
          currentContent: null,
          decorator: null,
          directionMap: null,
          forceSelection: !1,
          inCompositionMode: !1,
          inlineStyleOverride: null,
          lastChangeType: null,
          nativelyRenderedContent: null,
          redoStack: p(),
          selection: null,
          treeMap: null,
          undoStack: p(),
        }),
        y = (function () {
          ;(e.createEmpty = function (t) {
            return e.createWithContent(a.createFromText(''), t)
          }),
            (e.createWithContent = function (t, r) {
              if (0 === t.getBlockMap().count()) return e.createEmpty(r)
              var n = t.getBlockMap().first().getKey()
              return e.create({
                currentContent: t,
                undoStack: p(),
                redoStack: p(),
                decorator: r || null,
                selection: u.createEmpty(n),
              })
            }),
            (e.create = function (t) {
              var r = t.currentContent,
                i = n({}, t, { treeMap: m(r, t.decorator), directionMap: s.getDirectionMap(r) })
              return new e(new g(i))
            }),
            (e.fromJS = function (t) {
              return new e(
                new g(
                  n({}, t, {
                    directionMap: null != t.directionMap ? d(t.directionMap) : t.directionMap,
                    inlineStyleOverride:
                      null != t.inlineStyleOverride ? l(t.inlineStyleOverride) : t.inlineStyleOverride,
                    nativelyRenderedContent:
                      null != t.nativelyRenderedContent
                        ? a.fromJS(t.nativelyRenderedContent)
                        : t.nativelyRenderedContent,
                    redoStack:
                      null != t.redoStack
                        ? p(
                            t.redoStack.map(function (t) {
                              return a.fromJS(t)
                            }),
                          )
                        : t.redoStack,
                    selection: null != t.selection ? new u(t.selection) : t.selection,
                    treeMap:
                      null != t.treeMap
                        ? d(t.treeMap).map(function (t) {
                            return h(t).map(function (t) {
                              return o.fromJS(t)
                            })
                          })
                        : t.treeMap,
                    undoStack:
                      null != t.undoStack
                        ? p(
                            t.undoStack.map(function (t) {
                              return a.fromJS(t)
                            }),
                          )
                        : t.undoStack,
                    currentContent: a.fromJS(t.currentContent),
                  }),
                ),
              )
            }),
            (e.set = function (t, r) {
              return new e(
                t.getImmutable().withMutations(function (e) {
                  var n = e.get('decorator'),
                    i = n
                  null === r.decorator ? (i = null) : r.decorator && (i = r.decorator)
                  var a = r.currentContent || t.getCurrentContent()
                  if (i !== n) {
                    var s,
                      u = e.get('treeMap')
                    return (
                      (s =
                        i && n
                          ? (function (t, e, r, n, i) {
                              return r.merge(
                                e
                                  .toSeq()
                                  .filter(function (e) {
                                    return n.getDecorations(e, t) !== i.getDecorations(e, t)
                                  })
                                  .map(function (e) {
                                    return o.generate(t, e, n)
                                  }),
                              )
                            })(a, a.getBlockMap(), u, i, n)
                          : m(a, i)),
                      void e.merge({ decorator: i, treeMap: s, nativelyRenderedContent: null })
                    )
                  }
                  a !== t.getCurrentContent() &&
                    e.set(
                      'treeMap',
                      (function (t, e, r, n) {
                        var i = t.getCurrentContent().set('entityMap', r),
                          a = i.getBlockMap()
                        return t
                          .getImmutable()
                          .get('treeMap')
                          .merge(
                            e
                              .toSeq()
                              .filter(function (t, e) {
                                return t !== a.get(e)
                              })
                              .map(function (t) {
                                return o.generate(i, t, n)
                              }),
                          )
                      })(t, a.getBlockMap(), a.getEntityMap(), i),
                    ),
                    e.merge(r)
                }),
              )
            })
          var t = e.prototype
          function e(t) {
            i(this, '_immutable', void 0), (this._immutable = t)
          }
          return (
            (t.toJS = function () {
              return this.getImmutable().toJS()
            }),
            (t.getAllowUndo = function () {
              return this.getImmutable().get('allowUndo')
            }),
            (t.getCurrentContent = function () {
              return this.getImmutable().get('currentContent')
            }),
            (t.getUndoStack = function () {
              return this.getImmutable().get('undoStack')
            }),
            (t.getRedoStack = function () {
              return this.getImmutable().get('redoStack')
            }),
            (t.getSelection = function () {
              return this.getImmutable().get('selection')
            }),
            (t.getDecorator = function () {
              return this.getImmutable().get('decorator')
            }),
            (t.isInCompositionMode = function () {
              return this.getImmutable().get('inCompositionMode')
            }),
            (t.mustForceSelection = function () {
              return this.getImmutable().get('forceSelection')
            }),
            (t.getNativelyRenderedContent = function () {
              return this.getImmutable().get('nativelyRenderedContent')
            }),
            (t.getLastChangeType = function () {
              return this.getImmutable().get('lastChangeType')
            }),
            (t.getInlineStyleOverride = function () {
              return this.getImmutable().get('inlineStyleOverride')
            }),
            (e.setInlineStyleOverride = function (t, r) {
              return e.set(t, { inlineStyleOverride: r })
            }),
            (t.getCurrentInlineStyle = function () {
              var t = this.getInlineStyleOverride()
              if (null != t) return t
              var e = this.getCurrentContent(),
                r = this.getSelection()
              return r.isCollapsed()
                ? (function (t, e) {
                    var r = e.getStartKey(),
                      n = e.getStartOffset(),
                      i = t.getBlockForKey(r)
                    if (n > 0) return i.getInlineStyleAt(n - 1)
                    if (i.getLength()) return i.getInlineStyleAt(0)
                    return b(t, r)
                  })(e, r)
                : (function (t, e) {
                    var r = e.getStartKey(),
                      n = e.getStartOffset(),
                      i = t.getBlockForKey(r)
                    if (n < i.getLength()) return i.getInlineStyleAt(n)
                    if (n > 0) return i.getInlineStyleAt(n - 1)
                    return b(t, r)
                  })(e, r)
            }),
            (t.getBlockTree = function (t) {
              return this.getImmutable().getIn(['treeMap', t])
            }),
            (t.isSelectionAtStartOfContent = function () {
              var t = this.getCurrentContent().getBlockMap().first().getKey()
              return this.getSelection().hasEdgeWithin(t, 0, 0)
            }),
            (t.isSelectionAtEndOfContent = function () {
              var t = this.getCurrentContent().getBlockMap().last(),
                e = t.getLength()
              return this.getSelection().hasEdgeWithin(t.getKey(), e, e)
            }),
            (t.getDirectionMap = function () {
              return this.getImmutable().get('directionMap')
            }),
            (e.acceptSelection = function (t, e) {
              return v(t, e, !1)
            }),
            (e.forceSelection = function (t, e) {
              return e.getHasFocus() || (e = e.set('hasFocus', !0)), v(t, e, !0)
            }),
            (e.moveSelectionToEnd = function (t) {
              var r = t.getCurrentContent().getLastBlock(),
                n = r.getKey(),
                i = r.getLength()
              return e.acceptSelection(
                t,
                new u({ anchorKey: n, anchorOffset: i, focusKey: n, focusOffset: i, isBackward: !1 }),
              )
            }),
            (e.moveFocusToEnd = function (t) {
              var r = e.moveSelectionToEnd(t)
              return e.forceSelection(r, r.getSelection())
            }),
            (e.push = function (t, r, n) {
              var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
              if (t.getCurrentContent() === r) return t
              var o = s.getDirectionMap(r, t.getDirectionMap())
              if (!t.getAllowUndo())
                return e.set(t, {
                  currentContent: r,
                  directionMap: o,
                  lastChangeType: n,
                  selection: r.getSelectionAfter(),
                  forceSelection: i,
                  inlineStyleOverride: null,
                })
              var a = t.getSelection(),
                u = t.getCurrentContent(),
                c = t.getUndoStack(),
                l = r
              a !== u.getSelectionAfter() || _(t, n)
                ? ((c = c.push(u)), (l = l.set('selectionBefore', a)))
                : ('insert-characters' !== n && 'backspace-character' !== n && 'delete-character' !== n) ||
                  (l = l.set('selectionBefore', u.getSelectionBefore()))
              var f = t.getInlineStyleOverride(),
                d = ['adjust-depth', 'change-block-type', 'split-block']
              ;-1 === d.indexOf(n) && (f = null)
              var h = {
                currentContent: l,
                directionMap: o,
                undoStack: c,
                redoStack: p(),
                lastChangeType: n,
                selection: r.getSelectionAfter(),
                forceSelection: i,
                inlineStyleOverride: f,
              }
              return e.set(t, h)
            }),
            (e.undo = function (t) {
              if (!t.getAllowUndo()) return t
              var r = t.getUndoStack(),
                n = r.peek()
              if (!n) return t
              var i = t.getCurrentContent(),
                o = s.getDirectionMap(n, t.getDirectionMap())
              return e.set(t, {
                currentContent: n,
                directionMap: o,
                undoStack: r.shift(),
                redoStack: t.getRedoStack().push(i),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: 'undo',
                nativelyRenderedContent: null,
                selection: i.getSelectionBefore(),
              })
            }),
            (e.redo = function (t) {
              if (!t.getAllowUndo()) return t
              var r = t.getRedoStack(),
                n = r.peek()
              if (!n) return t
              var i = t.getCurrentContent(),
                o = s.getDirectionMap(n, t.getDirectionMap())
              return e.set(t, {
                currentContent: n,
                directionMap: o,
                undoStack: t.getUndoStack().push(i),
                redoStack: r.shift(),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: 'redo',
                nativelyRenderedContent: null,
                selection: n.getSelectionAfter(),
              })
            }),
            (t.getImmutable = function () {
              return this._immutable
            }),
            e
          )
        })()
      function v(t, e, r) {
        return y.set(t, { selection: e, forceSelection: r, nativelyRenderedContent: null, inlineStyleOverride: null })
      }
      function m(t, e) {
        return t
          .getBlockMap()
          .map(function (r) {
            return o.generate(t, r, e)
          })
          .toOrderedMap()
      }
      function _(t, e) {
        return (
          e !== t.getLastChangeType() ||
          ('insert-characters' !== e && 'backspace-character' !== e && 'delete-character' !== e)
        )
      }
      function b(t, e) {
        var r = t
          .getBlockMap()
          .reverse()
          .skipUntil(function (t, r) {
            return r === e
          })
          .skip(1)
          .skipUntil(function (t, e) {
            return t.getLength()
          })
          .first()
        return r ? r.getInlineStyleAt(r.getLength() - 1) : l()
      }
      t.exports = y
    },
    '2KzS': function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        if (void 0 === (t = t || ('undefined' != typeof document ? document : void 0))) return null
        try {
          return t.activeElement || t.body
        } catch (e) {
          return t.body
        }
      }
    },
    '2Wwg': function (t, e, r) {
      'use strict'
      function n(t) {
        return t.replace(/\//g, '-')
      }
      t.exports = function (t) {
        return 'object' == typeof t
          ? Object.keys(t)
              .filter(function (e) {
                return t[e]
              })
              .map(n)
              .join(' ')
          : Array.prototype.map.call(arguments, n).join(' ')
      }
    },
    '3as9': function (t, e, r) {
      var n
      /*!
       * UAParser.js v0.7.19
       * Lightweight JavaScript-based User-Agent string parser
       * https://github.com/faisalman/ua-parser-js
       *
       * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
       * Dual licensed under GPLv2 or MIT
       */ !(function (i, o) {
        'use strict'
        var a = 'function',
          s = 'undefined',
          u = 'object',
          c = 'model',
          l = 'name',
          f = 'type',
          p = 'vendor',
          d = 'version',
          h = 'architecture',
          g = 'console',
          y = 'mobile',
          v = 'tablet',
          m = 'smarttv',
          _ = 'wearable',
          b = {
            extend: function (t, e) {
              var r = {}
              for (var n in t) e[n] && e[n].length % 2 == 0 ? (r[n] = e[n].concat(t[n])) : (r[n] = t[n])
              return r
            },
            has: function (t, e) {
              return 'string' == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
            },
            lowerize: function (t) {
              return t.toLowerCase()
            },
            major: function (t) {
              return 'string' == typeof t ? t.replace(/[^\d\.]/g, '').split('.')[0] : o
            },
            trim: function (t) {
              return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
            },
          },
          S = {
            rgx: function (t, e) {
              for (var r, n, i, s, c, l, f = 0; f < e.length && !c; ) {
                var p = e[f],
                  d = e[f + 1]
                for (r = n = 0; r < p.length && !c; )
                  if ((c = p[r++].exec(t)))
                    for (i = 0; i < d.length; i++)
                      (l = c[++n]),
                        typeof (s = d[i]) === u && s.length > 0
                          ? 2 == s.length
                            ? typeof s[1] == a
                              ? (this[s[0]] = s[1].call(this, l))
                              : (this[s[0]] = s[1])
                            : 3 == s.length
                            ? typeof s[1] !== a || (s[1].exec && s[1].test)
                              ? (this[s[0]] = l ? l.replace(s[1], s[2]) : o)
                              : (this[s[0]] = l ? s[1].call(this, l, s[2]) : o)
                            : 4 == s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o)
                          : (this[s] = l || o)
                f += 2
              }
            },
            str: function (t, e) {
              for (var r in e)
                if (typeof e[r] === u && e[r].length > 0) {
                  for (var n = 0; n < e[r].length; n++) if (b.has(e[r][n], t)) return '?' === r ? o : r
                } else if (b.has(e[r], t)) return '?' === r ? o : r
              return t
            },
          },
          w = {
            browser: {
              oldsafari: {
                version: {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/',
                },
              },
            },
            device: {
              amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
              sprint: { model: { 'Evo Shift 4G': '7373KT' }, vendor: { HTC: 'APA', Sprint: 'Sprint' } },
            },
            os: {
              windows: {
                version: {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  2e3: 'NT 5.0',
                  XP: ['NT 5.1', 'NT 5.2'],
                  Vista: 'NT 6.0',
                  7: 'NT 6.1',
                  8: 'NT 6.2',
                  8.1: 'NT 6.3',
                  10: ['NT 6.4', 'NT 10.0'],
                  RT: 'ARM',
                },
              },
            },
          },
          x = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [l, d],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[l, 'Opera Mini'], d],
              [/\s(opr)\/([\w\.]+)/i],
              [[l, 'Opera'], d],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
              ],
              [l, d],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [[l, 'IE'], d],
              [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
              [[l, 'Edge'], d],
              [/(yabrowser)\/([\w\.]+)/i],
              [[l, 'Yandex'], d],
              [/(puffin)\/([\w\.]+)/i],
              [[l, 'Puffin'], d],
              [/(focus)\/([\w\.]+)/i],
              [[l, 'Firefox Focus'], d],
              [/(opt)\/([\w\.]+)/i],
              [[l, 'Opera Touch'], d],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[l, 'UCBrowser'], d],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[l, /_/g, ' '], d],
              [/(micromessenger)\/([\w\.]+)/i],
              [[l, 'WeChat'], d],
              [/(brave)\/([\w\.]+)/i],
              [[l, 'Brave'], d],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [l, d],
              [/(QQ)\/([\d\.]+)/i],
              [l, d],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [l, d],
              [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
              [l, d],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [l, d],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [l],
              [/(LBBROWSER)/i],
              [l],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [d, [l, 'MIUI Browser']],
              [/;fbav\/([\w\.]+);/i],
              [d, [l, 'Facebook']],
              [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
              [l, d],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [d, [l, 'Chrome Headless']],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[l, /(.+)/, '$1 WebView'], d],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[l, /(.+(?:g|us))(.+)/, '$1 $2'], d],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [d, [l, 'Android Browser']],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [l, d],
              [/(dolfin)\/([\w\.]+)/i],
              [[l, 'Dolphin'], d],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [[l, 'Chrome'], d],
              [/(coast)\/([\w\.]+)/i],
              [[l, 'Opera Coast'], d],
              [/fxios\/([\w\.-]+)/i],
              [d, [l, 'Firefox']],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              [d, [l, 'Mobile Safari']],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              [d, l],
              [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [[l, 'GSA'], d],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [l, [d, S.str, w.browser.oldsafari.version]],
              [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
              [l, d],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[l, 'Netscape'], d],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [l, d],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [[h, 'amd64']],
              [/(ia32(?=;))/i],
              [[h, b.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[h, 'ia32']],
              [/windows\s(ce|mobile);\sppc;/i],
              [[h, 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [[h, /ower/, '', b.lowerize]],
              [/(sun4\w)[;\)]/i],
              [[h, 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [[h, b.lowerize]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
              [c, p, [f, v]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [c, [p, 'Apple'], [f, v]],
              [/(apple\s{0,1}tv)/i],
              [
                [c, 'Apple TV'],
                [p, 'Apple'],
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [p, c, [f, v]],
              [/(kf[A-z]+)\sbuild\/.+silk\//i],
              [c, [p, 'Amazon'], [f, v]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
              [
                [c, S.str, w.device.amazon.model],
                [p, 'Amazon'],
                [f, y],
              ],
              [/android.+aft([bms])\sbuild/i],
              [c, [p, 'Amazon'], [f, m]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [c, p, [f, y]],
              [/\((ip[honed|\s\w*]+);/i],
              [c, [p, 'Apple'], [f, y]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [p, c, [f, y]],
              [/\(bb10;\s(\w+)/i],
              [c, [p, 'BlackBerry'], [f, y]],
              [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
              [c, [p, 'Asus'], [f, v]],
              [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
              [
                [p, 'Sony'],
                [c, 'Xperia Tablet'],
                [f, v],
              ],
              [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
              [c, [p, 'Sony'], [f, y]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [p, c, [f, g]],
              [/android.+;\s(shield)\sbuild/i],
              [c, [p, 'Nvidia'], [f, g]],
              [/(playstation\s[34portablevi]+)/i],
              [c, [p, 'Sony'], [f, g]],
              [/(sprint\s(\w+))/i],
              [
                [p, S.str, w.device.sprint.vendor],
                [c, S.str, w.device.sprint.model],
                [f, y],
              ],
              [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
              [p, c, [f, v]],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [p, [c, /_/g, ' '], [f, y]],
              [/(nexus\s9)/i],
              [c, [p, 'HTC'], [f, v]],
              [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
              [c, [p, 'Huawei'], [f, y]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [p, c, [f, y]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [c, [p, 'Microsoft'], [f, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, ' '],
                [p, 'Microsoft'],
                [f, y],
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [c, [p, 'Motorola'], [f, y]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [c, [p, 'Motorola'], [f, v]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [p, b.trim],
                [c, b.trim],
                [f, m],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, 'SmartTV'],
                [p, 'Samsung'],
                [f, m],
              ],
              [/\(dtv[\);].+(aquos)/i],
              [c, [p, 'Sharp'], [f, m]],
              [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
              [[p, 'Samsung'], c, [f, v]],
              [/smart-tv.+(samsung)/i],
              [p, [f, m], c],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[p, 'Samsung'], c, [f, y]],
              [/sie-(\w*)/i],
              [c, [p, 'Siemens'], [f, y]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[p, 'Nokia'], c, [f, y]],
              [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
              [c, [p, 'Acer'], [f, v]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [c, [p, 'LG'], [f, v]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[p, 'LG'], c, [f, v]],
              [/(lg) netcast\.tv/i],
              [p, c, [f, m]],
              [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
              [c, [p, 'LG'], [f, y]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [c, [p, 'Lenovo'], [f, v]],
              [/linux;.+((jolla));/i],
              [p, c, [f, y]],
              [/((pebble))app\/[\d\.]+\s/i],
              [p, c, [f, _]],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [p, c, [f, y]],
              [/crkey/i],
              [
                [c, 'Chromecast'],
                [p, 'Google'],
              ],
              [/android.+;\s(glass)\s\d/i],
              [c, [p, 'Google'], [f, _]],
              [/android.+;\s(pixel c)[\s)]/i],
              [c, [p, 'Google'], [f, v]],
              [/android.+;\s(pixel( [23])?( xl)?)\s/i],
              [c, [p, 'Google'], [f, y]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
              ],
              [
                [c, /_/g, ' '],
                [p, 'Xiaomi'],
                [f, y],
              ],
              [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
              [
                [c, /_/g, ' '],
                [p, 'Xiaomi'],
                [f, v],
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [c, [p, 'Meizu'], [f, v]],
              [/(mz)-([\w-]{2,})/i],
              [[p, 'Meizu'], c, [f, y]],
              [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
              [c, [p, 'OnePlus'], [f, y]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [c, [p, 'RCA'], [f, v]],
              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
              [c, [p, 'Dell'], [f, v]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [c, [p, 'Verizon'], [f, v]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[p, 'Barnes & Noble'], c, [f, v]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [c, [p, 'NuVision'], [f, v]],
              [/android.+;\s(k88)\sbuild/i],
              [c, [p, 'ZTE'], [f, v]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [c, [p, 'Swiss'], [f, y]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [c, [p, 'Swiss'], [f, v]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [c, [p, 'Zeki'], [f, v]],
              [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
              [[p, 'Dragon Touch'], c, [f, v]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [c, [p, 'Insignia'], [f, v]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [c, [p, 'NextBook'], [f, v]],
              [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
              [[p, 'Voice'], c, [f, y]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[p, 'LvTel'], c, [f, y]],
              [/android.+;\s(PH-1)\s/i],
              [c, [p, 'Essential'], [f, y]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [c, [p, 'Envizen'], [f, v]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [p, c, [f, v]],
              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
              [c, [p, 'MachSpeed'], [f, v]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [p, c, [f, v]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [c, [p, 'Rotor'], [f, v]],
              [/android.+(KS(.+))\s+build/i],
              [c, [p, 'Amazon'], [f, v]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [p, c, [f, v]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[f, b.lowerize], p, c],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [c, [p, 'Generic']],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [d, [l, 'EdgeHTML']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [l, d],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [d, l],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [l, d],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [l, [d, S.str, w.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [l, 'Windows'],
                [d, S.str, w.os.windows.version],
              ],
              [/\((bb)(10);/i],
              [[l, 'BlackBerry'], d],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
                /linux;.+(sailfish);/i,
              ],
              [l, d],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[l, 'Symbian'], d],
              [/\((series40);/i],
              [l],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[l, 'Firefox OS'], d],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [l, d],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[l, 'Chromium OS'], d],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[l, 'Solaris'], d],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [l, d],
              [/(haiku)\s(\w+)/i],
              [l, d],
              [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
              [
                [d, /_/g, '.'],
                [l, 'iOS'],
              ],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [
                [l, 'Mac OS'],
                [d, /_/g, '.'],
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [l, d],
            ],
          },
          k = function (t, e) {
            if (('object' == typeof t && ((e = t), (t = o)), !(this instanceof k))) return new k(t, e).getResult()
            var r = t || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ''),
              n = e ? b.extend(x, e) : x
            return (
              (this.getBrowser = function () {
                var t = { name: o, version: o }
                return S.rgx.call(t, r, n.browser), (t.major = b.major(t.version)), t
              }),
              (this.getCPU = function () {
                var t = { architecture: o }
                return S.rgx.call(t, r, n.cpu), t
              }),
              (this.getDevice = function () {
                var t = { vendor: o, model: o, type: o }
                return S.rgx.call(t, r, n.device), t
              }),
              (this.getEngine = function () {
                var t = { name: o, version: o }
                return S.rgx.call(t, r, n.engine), t
              }),
              (this.getOS = function () {
                var t = { name: o, version: o }
                return S.rgx.call(t, r, n.os), t
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                }
              }),
              (this.getUA = function () {
                return r
              }),
              (this.setUA = function (t) {
                return (r = t), this
              }),
              this
            )
          }
        ;(k.VERSION = '0.7.19'),
          (k.BROWSER = { NAME: l, MAJOR: 'major', VERSION: d }),
          (k.CPU = { ARCHITECTURE: h }),
          (k.DEVICE = {
            MODEL: c,
            VENDOR: p,
            TYPE: f,
            CONSOLE: g,
            MOBILE: y,
            SMARTTV: m,
            TABLET: v,
            WEARABLE: _,
            EMBEDDED: 'embedded',
          }),
          (k.ENGINE = { NAME: l, VERSION: d }),
          (k.OS = { NAME: l, VERSION: d }),
          typeof e !== s
            ? (typeof t !== s && t.exports && (e = t.exports = k), (e.UAParser = k))
            : r('jPSd')
            ? (n = function () {
                return k
              }.call(e, r, e, t)) === o || (t.exports = n)
            : i && (i.UAParser = k)
        var C = i && (i.jQuery || i.Zepto)
        if (typeof C !== s && !C.ua) {
          var E = new k()
          ;(C.ua = E.getResult()),
            (C.ua.get = function () {
              return E.getUA()
            }),
            (C.ua.set = function (t) {
              E.setUA(t)
              var e = E.getResult()
              for (var r in e) C.ua[r] = e[r]
            })
        }
      })('object' == typeof window ? window : this)
    },
    '4aXP': function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('ZUd0')('draft_tree_data_support')
      t.exports = function (t, e, r) {
        var o = t.getSelection(),
          a = t.getCurrentContent(),
          s = o,
          u = o.getAnchorKey(),
          c = o.getFocusKey(),
          l = a.getBlockForKey(u)
        if (i && 'forward' === r && u !== c) return a
        if (o.isCollapsed()) {
          if ('forward' === r) {
            if (t.isSelectionAtEndOfContent()) return a
            if (i)
              if (o.getAnchorOffset() === a.getBlockForKey(u).getLength()) {
                var f = a.getBlockForKey(l.nextSibling)
                if (!f || 0 === f.getLength()) return a
              }
          } else if (t.isSelectionAtStartOfContent()) return a
          if ((s = e(t)) === o) return a
        }
        return n.removeRange(a, s, r)
      }
    },
    '4bHO': function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      r('ho0z')
      var n = function (t, e) {
        switch (t.type) {
          case 'user':
            return '@'.concat('users' === e ? t.data.screen_name : t.data.name, ' ')
          case 'hashtag':
          case 'topic':
          case 'event':
            return ''.concat(t.data.topic, ' ')
          case 'dm_conversation':
            return ''.concat(t.data.name, ' ')
          case 'no_result':
            return ''.concat(t.data.text, ' ')
          default:
            return ''
        }
      }
    },
    '5/F0': function (t, e, r) {
      'use strict'
      var n = r('iN4q')
      t.exports = function (t) {
        var e = t.ownerDocument.documentElement
        if (!('getBoundingClientRect' in t) || !n(e, t)) return { left: 0, right: 0, top: 0, bottom: 0 }
        var r = t.getBoundingClientRect()
        return {
          left: Math.round(r.left) - e.clientLeft,
          right: Math.round(r.right) - e.clientLeft,
          top: Math.round(r.top) - e.clientTop,
          bottom: Math.round(r.bottom) - e.clientTop,
        }
      }
    },
    '58Uu': function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        ;(t._internalDrag = !0), t.setMode('drag')
      }
    },
    '5mUX': function (t, e, r) {
      'use strict'
      var n = r('tI3i')
      t.exports = function (t, e) {
        var r = []
        return (
          t.findEntityRanges(
            function (t) {
              return t.getEntity() === e
            },
            function (t, e) {
              r.push({ start: t, end: e })
            },
          ),
          r.length || n(!1),
          r
        )
      }
    },
    7002: function (t, e, r) {
      'use strict'
      var n = r('b+nQ'),
        i = r('HKFH'),
        o = r('8dwq'),
        a = r('USh0'),
        s = r('hDHP'),
        u = r('Svze'),
        c = r('yzfH'),
        l = r('pW+J'),
        f = r('tI3i'),
        p = r('WmAF'),
        d = r('/L11'),
        h = r('QCHf'),
        g = r('KDIr'),
        y = u.OrderedSet,
        v = {
          replaceText: function (t, e, r, i, o) {
            var a = d(t, e),
              s = h(a, e),
              u = n.create({ style: i || y(), entity: o || null })
            return l(s, s.getSelectionAfter(), r, u)
          },
          insertText: function (t, e, r, n, i) {
            return e.isCollapsed() || f(!1), v.replaceText(t, e, r, n, i)
          },
          moveText: function (t, e, r) {
            var n = s(t, e),
              i = v.removeRange(t, e, 'backward')
            return v.replaceWithFragment(i, r, n)
          },
          replaceWithFragment: function (t, e, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'REPLACE_WITH_NEW_DATA',
              i = d(t, e),
              o = h(i, e)
            return c(o, o.getSelectionAfter(), r, n)
          },
          removeRange: function (t, e, r) {
            var n, i, o, s
            e.getIsBackward() &&
              (e = e.merge({
                anchorKey: e.getFocusKey(),
                anchorOffset: e.getFocusOffset(),
                focusKey: e.getAnchorKey(),
                focusOffset: e.getAnchorOffset(),
                isBackward: !1,
              })),
              (n = e.getAnchorKey()),
              (i = e.getFocusKey()),
              (o = t.getBlockForKey(n)),
              (s = t.getBlockForKey(i))
            var u = e.getStartOffset(),
              c = e.getEndOffset(),
              l = o.getEntityAt(u),
              f = s.getEntityAt(c - 1)
            if (n === i && l && l === f) {
              var p = a(t.getEntityMap(), o, s, e, r)
              return h(t, p)
            }
            var g = d(t, e)
            return h(g, e)
          },
          splitBlock: function (t, e) {
            var r = d(t, e),
              n = h(r, e)
            return g(n, n.getSelectionAfter())
          },
          applyInlineStyle: function (t, e, r) {
            return i.add(t, e, r)
          },
          removeInlineStyle: function (t, e, r) {
            return i.remove(t, e, r)
          },
          setBlockType: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ type: r, depth: 0 })
            })
          },
          setBlockData: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ data: r })
            })
          },
          mergeBlockData: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ data: t.getData().merge(r) })
            })
          },
          applyEntity: function (t, e, r) {
            var n = d(t, e)
            return o(n, e, r)
          },
        }
      t.exports = v
    },
    '7MNd': function (t, e, r) {
      'use strict'
      var n = r('JtWY'),
        i = r('LxfW')
      t.exports = function (t) {
        var e = n(t.ownerDocument || t.document)
        t.Window && t instanceof t.Window && (t = e)
        var r = i(t),
          o = t === e ? t.ownerDocument.documentElement : t,
          a = t.scrollWidth - o.clientWidth,
          s = t.scrollHeight - o.clientHeight
        return (r.x = Math.max(0, Math.min(r.x, a))), (r.y = Math.max(0, Math.min(r.y, s))), r
      }
    },
    '7XzN': function (t, e, r) {
      'use strict'
      var n = r('b//S'),
        i = r('hF1F')
      t.exports = function (t, e, r, o, a) {
        var s = i(t.getSelection())
        if (!e || !o) return s
        var u = n.decode(e),
          c = u.blockKey,
          l = t.getBlockTree(c),
          f = l && l.getIn([u.decoratorKey, 'leaves', u.leafKey]),
          p = n.decode(o),
          d = p.blockKey,
          h = t.getBlockTree(d),
          g = h && h.getIn([p.decoratorKey, 'leaves', p.leafKey])
        if (!f || !g) return s
        var y = f.get('start'),
          v = g.get('start'),
          m = f ? y + r : null,
          _ = g ? v + a : null
        if (s.getAnchorKey() === c && s.getAnchorOffset() === m && s.getFocusKey() === d && s.getFocusOffset() === _)
          return s
        var b = !1
        if (c === d) {
          var S = f.get('end'),
            w = g.get('end')
          b = v === y && w === S ? a < r : v < y
        } else {
          b =
            t
              .getCurrentContent()
              .getBlockMap()
              .keySeq()
              .skipUntil(function (t) {
                return t === c || t === d
              })
              .first() === d
        }
        return s.merge({ anchorKey: c, anchorOffset: m, focusKey: d, focusOffset: _, isBackward: b })
      }
    },
    '7mA2': function (t, e, r) {
      'use strict'
      var n = r('ObfX')
      t.exports = function (t) {
        return (
          t.which === n.RETURN &&
          (t.getModifierState('Shift') || t.getModifierState('Alt') || t.getModifierState('Control'))
        )
      }
    },
    '7myi': function (t, e, r) {
      'use strict'
      var n = r('VrFO'),
        i = r.n(n),
        o = r('Y9Ll'),
        a = r.n(o),
        s = r('1Pcy'),
        u = r.n(s),
        c = r('5Yy7'),
        l = r.n(c),
        f = r('2VqO'),
        p = r.n(f),
        d = r('KEM+'),
        h = r.n(d),
        g = (r('2G9S'), r('849X'), r('TJCb'), r('M+/F'), r('ERkP')),
        y = r.n(g),
        v = r('oEoC'),
        m = r('2dXj'),
        _ = r('4bHO'),
        b = r('dzqK'),
        S = r('GZwR'),
        w = (function (t) {
          l()(r, t)
          var e = p()(r)
          function r() {
            var t
            i()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (t = e.call.apply(e, [this].concat(o))),
              h()(u()(t), '_genericWrapperRef', y.a.createRef()),
              h()(u()(t), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(u()(t), 'render', function () {
                var e = t.props,
                  r = e.children,
                  n = e.contextText,
                  i = e.isInline,
                  o = e.isInlineReply,
                  a = e.onTypeaheadStateChange,
                  s = e.source,
                  u = t.state,
                  c = u.canShowTypeahead,
                  l = u.queryContext,
                  f = c && l ? { word: l.word, resultType: l.resultType } : void 0
                return y.a.createElement(
                  m.a,
                  {
                    contextText: n,
                    isInline: i,
                    isInlineReply: o,
                    onDismiss: t._handleDismiss,
                    onSelectItem: t._handleSelectItem,
                    onTypeaheadStateChange: a,
                    query: f,
                    ref: t._genericWrapperRef,
                    source: s || S.d.Compose,
                  },
                  r(t._handleInputChange),
                )
              }),
              h()(u()(t), '_handleSelectItem', function (e) {
                var r = t.props.onTextUpdated,
                  n = t.state.queryContext
                if (n) {
                  var i = Object(_.a)(e, n.resultType),
                    o = t._replaceToken(i, n),
                    a = o.newCursor,
                    s = o.newTweetText
                  r({ target: { value: s } }), t._updateDOMTextArea(a, s)
                }
                t._setQueryContext(void 0)
              }),
              h()(u()(t), '_updateDOMTextArea', function (e, r) {
                t._textAreaRef &&
                  ((t._textAreaRef.value = r),
                  (t._textAreaRef.selectionStart = e),
                  (t._textAreaRef.selectionEnd = e),
                  t._textAreaRef.focus())
              }),
              h()(u()(t), '_handleInputChange', function (e) {
                if (Object(b.a)(e))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var r = e && (e.currentTarget || e.target),
                  n = t.state.queryContext
                t._textAreaRef = r
                var i = n && n.word,
                  o = r.value,
                  a = v.c(r.selectionStart, o),
                  s = a.end,
                  u = a.start,
                  c = a.word,
                  l = v.e(c || '', 'compose')
                if ((null == l ? void 0 : l.q) !== i)
                  if ((t._genericWrapperRef.current && t._genericWrapperRef.current.resetSelectedItem(), -1 === u))
                    t._setQueryContext(void 0)
                  else if (l) {
                    var f = l.q,
                      p = l.result_type
                    t._setQueryContext({ word: f, resultType: p, fullText: r.value, startIndex: u, endIndex: s })
                  } else t._setQueryContext(void 0)
              }),
              h()(u()(t), '_setQueryContext', function (e) {
                return t.setState({ queryContext: e, canShowTypeahead: !!e })
              }),
              h()(u()(t), '_handleDismiss', function () {
                return t.setState({ canShowTypeahead: !1 })
              }),
              t
            )
          }
          return (
            a()(r, [
              {
                key: '_replaceToken',
                value: function (t, e) {
                  var r = e.endIndex,
                    n = e.fullText,
                    i = e.startIndex,
                    o = n.slice(0, i)
                  return { newTweetText: o + t + n.slice(r), newCursor: o.length + t.length }
                },
              },
            ]),
            r
          )
        })(y.a.Component)
      e.a = w
    },
    '8SYF': function (t, e, r) {
      'use strict'
      var n = r('1xkk')
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getEndKey(),
          i = t.getCurrentContent().getBlockForKey(r).getLength()
        return n.set(t, {
          selection: e.merge({ anchorKey: r, anchorOffset: i, focusKey: r, focusOffset: i, isBackward: !1 }),
          forceSelection: !0,
        })
      }
    },
    '8dwq': function (t, e, r) {
      'use strict'
      var n = r('ZxmY'),
        i = r('Svze')
      t.exports = function (t, e, r) {
        var o = t.getBlockMap(),
          a = e.getStartKey(),
          s = e.getStartOffset(),
          u = e.getEndKey(),
          c = e.getEndOffset(),
          l = o
            .skipUntil(function (t, e) {
              return e === a
            })
            .takeUntil(function (t, e) {
              return e === u
            })
            .toOrderedMap()
            .merge(i.OrderedMap([[u, o.get(u)]]))
            .map(function (t, e) {
              var i = e === a ? s : 0,
                o = e === u ? c : t.getLength()
              return n(t, i, o, r)
            })
        return t.merge({ blockMap: o.merge(l), selectionBefore: e, selectionAfter: e })
      }
    },
    9e3: function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('1xkk')
      t.exports = function (t) {
        var e = n.splitBlock(t.getCurrentContent(), t.getSelection())
        return i.push(t, e, 'split-block')
      }
    },
    '9Kr7': function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('1xkk'),
        o = r('udiT'),
        a = r('hF1F'),
        s = {
          currentBlockContainsLink: function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = r.getEntityMap()
            return r
              .getBlockForKey(e.getAnchorKey())
              .getCharacterList()
              .slice(e.getStartOffset(), e.getEndOffset())
              .some(function (t) {
                var e = t.getEntity()
                return !!e && 'LINK' === n.__get(e).getType()
              })
          },
          getCurrentBlockType: function (t) {
            var e = t.getSelection()
            return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType()
          },
          getDataObjectForLinkURL: function (t) {
            return { url: t.toString() }
          },
          handleKeyCommand: function (t, e, r) {
            switch (e) {
              case 'bold':
                return s.toggleInlineStyle(t, 'BOLD')
              case 'italic':
                return s.toggleInlineStyle(t, 'ITALIC')
              case 'underline':
                return s.toggleInlineStyle(t, 'UNDERLINE')
              case 'code':
                return s.toggleCode(t)
              case 'backspace':
              case 'backspace-word':
              case 'backspace-to-start-of-line':
                return s.onBackspace(t)
              case 'delete':
              case 'delete-word':
              case 'delete-to-end-of-block':
                return s.onDelete(t)
              default:
                return null
            }
          },
          insertSoftNewline: function (t) {
            var e = n.insertText(t.getCurrentContent(), t.getSelection(), '\n', t.getCurrentInlineStyle(), null),
              r = i.push(t, e, 'insert-characters')
            return i.forceSelection(r, e.getSelectionAfter())
          },
          onBackspace: function (t) {
            var e = t.getSelection()
            if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset()) return null
            var r = t.getCurrentContent(),
              n = e.getStartKey(),
              o = r.getBlockBefore(n)
            if (o && 'atomic' === o.getType()) {
              var a = r.getBlockMap().delete(o.getKey()),
                u = r.merge({ blockMap: a, selectionAfter: e })
              if (u !== r) return i.push(t, u, 'remove-range')
            }
            var c = s.tryToRemoveBlockStyle(t)
            return c ? i.push(t, c, 'change-block-type') : null
          },
          onDelete: function (t) {
            var e = t.getSelection()
            if (!e.isCollapsed()) return null
            var r = t.getCurrentContent(),
              o = e.getStartKey(),
              a = r.getBlockForKey(o).getLength()
            if (e.getStartOffset() < a) return null
            var s = r.getBlockAfter(o)
            if (!s || 'atomic' !== s.getType()) return null
            var u = e.merge({ focusKey: s.getKey(), focusOffset: s.getLength() }),
              c = n.removeRange(r, u, 'forward')
            return c !== r ? i.push(t, c, 'remove-range') : null
          },
          onTab: function (t, e, r) {
            var n = e.getSelection(),
              a = n.getAnchorKey()
            if (a !== n.getFocusKey()) return e
            var s = e.getCurrentContent(),
              u = s.getBlockForKey(a),
              c = u.getType()
            if ('unordered-list-item' !== c && 'ordered-list-item' !== c) return e
            t.preventDefault()
            var l = u.getDepth()
            if (!t.shiftKey && l === r) return e
            var f = o(s, n, t.shiftKey ? -1 : 1, r)
            return i.push(e, f, 'adjust-depth')
          },
          toggleBlockType: function (t, e) {
            var r = t.getSelection(),
              o = r.getStartKey(),
              s = r.getEndKey(),
              u = t.getCurrentContent(),
              c = r
            if (o !== s && 0 === r.getEndOffset()) {
              var l = a(u.getBlockBefore(s))
              ;(s = l.getKey()),
                (c = c.merge({
                  anchorKey: o,
                  anchorOffset: r.getStartOffset(),
                  focusKey: s,
                  focusOffset: l.getLength(),
                  isBackward: !1,
                }))
            }
            if (
              u
                .getBlockMap()
                .skipWhile(function (t, e) {
                  return e !== o
                })
                .reverse()
                .skipWhile(function (t, e) {
                  return e !== s
                })
                .some(function (t) {
                  return 'atomic' === t.getType()
                })
            )
              return t
            var f = u.getBlockForKey(o).getType() === e ? 'unstyled' : e
            return i.push(t, n.setBlockType(u, c, f), 'change-block-type')
          },
          toggleCode: function (t) {
            var e = t.getSelection(),
              r = e.getAnchorKey(),
              n = e.getFocusKey()
            return e.isCollapsed() || r !== n ? s.toggleBlockType(t, 'code-block') : s.toggleInlineStyle(t, 'CODE')
          },
          toggleInlineStyle: function (t, e) {
            var r = t.getSelection(),
              o = t.getCurrentInlineStyle()
            if (r.isCollapsed()) return i.setInlineStyleOverride(t, o.has(e) ? o.remove(e) : o.add(e))
            var a,
              s = t.getCurrentContent()
            return (
              (a = o.has(e) ? n.removeInlineStyle(s, r, e) : n.applyInlineStyle(s, r, e)),
              i.push(t, a, 'change-inline-style')
            )
          },
          toggleLink: function (t, e, r) {
            var o = n.applyEntity(t.getCurrentContent(), e, r)
            return i.push(t, o, 'apply-entity')
          },
          tryToRemoveBlockStyle: function (t) {
            var e = t.getSelection(),
              r = e.getAnchorOffset()
            if (e.isCollapsed() && 0 === r) {
              var i = e.getAnchorKey(),
                o = t.getCurrentContent(),
                a = o.getBlockForKey(i).getType(),
                s = o.getBlockBefore(i)
              if ('code-block' === a && s && 'code-block' === s.getType() && 0 !== s.getLength()) return null
              if ('unstyled' !== a) return n.setBlockType(o, e, 'unstyled')
            }
            return null
          },
        }
      t.exports = s
    },
    '9XMQ': function (t, e, r) {
      'use strict'
      var n = r('1xkk'),
        i = r('W6iK'),
        o = r('MzOC'),
        a = r('4aXP')
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = e.getAnchorKey(),
              a = e.getAnchorOffset(),
              s = r.getBlockForKey(n).getText()[a]
            return o(t, s ? i.getUTF16Length(s, 0) : 1)
          },
          'forward',
        )
        if (e === t.getCurrentContent()) return t
        var r = t.getSelection()
        return n.push(t, e.set('selectionBefore', r), r.isCollapsed() ? 'delete-character' : 'remove-range')
      }
    },
    ADYu: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getAnchorKey(),
          n = t.getBlockTree(r),
          i = e.getStartOffset(),
          o = !1
        return (
          n.some(function (t) {
            return i === t.get('start')
              ? ((o = !0), !0)
              : i < t.get('end') &&
                  t.get('leaves').some(function (t) {
                    var e = t.get('start')
                    return i === e && ((o = !0), !0)
                  })
          }),
          o
        )
      }
    },
    'AL/+': function (t, e, r) {
      'use strict'
      t.exports = function (t, e, r, n) {
        if (t.size) {
          var i = 0
          t.reduce(function (t, o, a) {
            return e(t, o) || (r(t) && n(i, a), (i = a)), o
          }),
            r(t.last()) && n(i, t.count())
        }
      }
    },
    ApIa: function (t, e, r) {
      'use strict'
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              i(t, e, r[e])
            })
        }
        return t
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var o = r('ooRk'),
        a = r('b+nQ'),
        s = r('IbSy'),
        u = r('YM28'),
        c = r('7002'),
        l = r('1xkk'),
        f = r('YSZ8'),
        p = r('ZUd0'),
        d = r('Svze'),
        h = r('uJSo'),
        g = p('draft_tree_data_support'),
        y = g ? u : s,
        v = d.List,
        m = d.Repeat,
        _ = {
          insertAtomicBlock: function (t, e, r) {
            var i = t.getCurrentContent(),
              s = t.getSelection(),
              u = c.removeRange(i, s, 'backward'),
              p = u.getSelectionAfter(),
              d = c.splitBlock(u, p),
              h = d.getSelectionAfter(),
              _ = c.setBlockType(d, h, 'atomic'),
              b = a.create({ entity: e }),
              S = { key: f(), type: 'atomic', text: r, characterList: v(m(b, r.length)) },
              w = { key: f(), type: 'unstyled' }
            g && ((S = n({}, S, { nextSibling: w.key })), (w = n({}, w, { prevSibling: S.key })))
            var x = [new y(S), new y(w)],
              k = o.createFromArray(x),
              C = c.replaceWithFragment(_, h, k),
              E = C.merge({ selectionBefore: s, selectionAfter: C.getSelectionAfter().set('hasFocus', !0) })
            return l.push(t, E, 'insert-fragment')
          },
          moveAtomicBlock: function (t, e, r, n) {
            var i,
              o = t.getCurrentContent(),
              a = t.getSelection()
            if ('before' === n || 'after' === n) {
              var s = o.getBlockForKey('before' === n ? r.getStartKey() : r.getEndKey())
              i = h(o, e, s, n)
            } else {
              var u = c.removeRange(o, r, 'backward'),
                f = u.getSelectionAfter(),
                p = u.getBlockForKey(f.getFocusKey())
              if (0 === f.getStartOffset()) i = h(u, e, p, 'before')
              else if (f.getEndOffset() === p.getLength()) i = h(u, e, p, 'after')
              else {
                var d = c.splitBlock(u, f),
                  g = d.getSelectionAfter(),
                  y = d.getBlockForKey(g.getFocusKey())
                i = h(d, e, y, 'before')
              }
            }
            var v = i.merge({ selectionBefore: a, selectionAfter: i.getSelectionAfter().set('hasFocus', !0) })
            return l.push(t, v, 'move-block')
          },
        }
      t.exports = _
    },
    B3y8: function (t, e, r) {
      'use strict'
      r('/2Cm')
      var n = {
        isValidBlock: function (t, e) {
          var r = t.getKey(),
            n = t.getParentKey()
          if (null != n && !e.get(n).getChildKeys().includes(r)) return !1
          if (
            !t
              .getChildKeys()
              .map(function (t) {
                return e.get(t)
              })
              .every(function (t) {
                return t.getParentKey() === r
              })
          )
            return !1
          var i = t.getPrevSiblingKey()
          if (null != i && e.get(i).getNextSiblingKey() !== r) return !1
          var o = t.getNextSiblingKey()
          if (null != o && e.get(o).getPrevSiblingKey() !== r) return !1
          return (null === o || null === i || i !== o) && !('' != t.text && t.getChildKeys().size > 0)
        },
        isConnectedTree: function (t) {
          var e = t.toArray().filter(function (t) {
            return null == t.getParentKey() && null == t.getPrevSiblingKey()
          })
          if (1 !== e.length) return !1
          for (var r = 0, n = e.shift().getKey(), i = []; null != n; ) {
            var o = t.get(n),
              a = o.getChildKeys(),
              s = o.getNextSiblingKey()
            if (a.size > 0) {
              null != s && i.unshift(s)
              var u = a
                .map(function (e) {
                  return t.get(e)
                })
                .find(function (t) {
                  return null == t.getPrevSiblingKey()
                })
              if (null == u) return !1
              n = u.getKey()
            } else n = null != o.getNextSiblingKey() ? o.getNextSiblingKey() : i.shift()
            r++
          }
          return r === t.size
        },
        isValidTree: function (t) {
          var e = this
          return (
            !!t.toArray().every(function (r) {
              return e.isValidBlock(r, t)
            }) && this.isConnectedTree(t)
          )
        },
      }
      t.exports = n
    },
    BTrg: function (t, e, r) {
      'use strict'
      function n() {
        var t
        return (
          document.documentElement && (t = document.documentElement.clientWidth),
          !t && document.body && (t = document.body.clientWidth),
          t || 0
        )
      }
      function i() {
        var t
        return (
          document.documentElement && (t = document.documentElement.clientHeight),
          !t && document.body && (t = document.body.clientHeight),
          t || 0
        )
      }
      function o() {
        return { width: window.innerWidth || n(), height: window.innerHeight || i() }
      }
      ;(o.withoutScrollbars = function () {
        return { width: n(), height: i() }
      }),
        (t.exports = o)
    },
    BsqC: function (t, e, r) {
      'use strict'
      var n = r('1xkk')
      t.exports = function (t, e, r) {
        var i = n.undo(e)
        if ('spellcheck-change' !== e.getLastChangeType())
          t.preventDefault(),
            e.getNativelyRenderedContent()
              ? (r(n.set(e, { nativelyRenderedContent: null })),
                setTimeout(function () {
                  r(i)
                }, 0))
              : r(i)
        else {
          var o = i.getCurrentContent()
          r(n.set(i, { nativelyRenderedContent: o }))
        }
      }
    },
    CDB5: function (t, e, r) {
      'use strict'
      r.d(e, 'm', function () {
        return I
      }),
        r.d(e, 'l', function () {
          return K
        }),
        r.d(e, 'f', function () {
          return A
        }),
        r.d(e, 'd', function () {
          return R
        }),
        r.d(e, 'g', function () {
          return L
        }),
        r.d(e, 'e', function () {
          return P
        }),
        r.d(e, 'i', function () {
          return N
        }),
        r.d(e, 'j', function () {
          return U
        }),
        r.d(e, 'k', function () {
          return j
        }),
        r.d(e, 'h', function () {
          return q
        }),
        r.d(e, 'a', function () {
          return V
        }),
        r.d(e, 'b', function () {
          return G
        }),
        r.d(e, 'c', function () {
          return J
        })
      var n = r('RhWx'),
        i = r.n(n),
        o = r('ddV6'),
        a = r.n(o),
        s = r('m3Bd'),
        u = r.n(s),
        c = r('KEM+'),
        l = r.n(c),
        f = r('yiKp'),
        p = r.n(f),
        d =
          (r('TJCb'),
          r('7x/C'),
          r('DZ+c'),
          r('7xRU'),
          r('lTEL'),
          r('JtPf'),
          r('87if'),
          r('kYxP'),
          r('2G9S'),
          r('1IsZ'),
          r('AspN')),
        h = r('xPna'),
        g = r('oEOe'),
        y = r('xCUF'),
        v = r('ude7'),
        m = r('07FG'),
        _ = r('Ssj5'),
        b = r('fEA7'),
        S = r.n(b),
        w = r('uKEd'),
        x = r('lnti'),
        k = r('/NU0'),
        C = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        E = 'dmComposer',
        O = {}
      var D = function (t) {
          var e = t.conversation_id,
            r = t.id,
            n = t.localMediaId,
            i = t.recipient_ids,
            o = t.sender_id,
            a = t.text,
            s = t.attachment,
            u = void 0 === s ? {} : s,
            c = t.error,
            l = Date.now().toString()
          return {
            conversation_id: e,
            recipient_ids: i,
            error: c,
            id: r,
            is_draft: !0,
            message_data: { attachment: u, localMediaId: n, sender_id: o, text: a, time: l },
            type: 'message',
            time: l,
          }
        },
        I = function (t) {
          return function (e, r, n) {
            var o = n.api,
              s = t || {},
              c = s.senderId,
              l = s.cardUrl,
              f = s.conversationId,
              _ = s.localMediaId,
              b = s.recipients,
              E = void 0 === b ? [] : b,
              O = s.requestId,
              I = void 0 === O ? S.a.v1() : O,
              M = s.tweetAttachment,
              K = s.quickReply,
              T = u()(s, C)
            e(Q(f))
            var A = r(),
              B = _ || z(r(), f),
              L = d.k(A, B),
              F = a()(L, 1)[0] || {},
              P = F.mediaFile,
              N = F.mediaMetadata,
              U = E.length > 0 && E.join(','),
              j = {}
            P && P.isGif
              ? (j.extraInitParams = '&media_category=dm_gif')
              : P && P.isVideo && (j.extraInitParams = '&media_category=dm_video')
            var H = d.p(B, j),
              V = [e(H)],
              W = (q(A, f) || {}).found_media_origin
            return (
              P && P.isGif && V.push(Object(v.a)(P)),
              Promise.all(V).then(
                function (r) {
                  var n = a()(r, 2),
                    s = a()(n[0], 1)[0],
                    u = n[1],
                    v = (null == N ? void 0 : N.altText) || (null == N ? void 0 : N.defaultAltText),
                    _ = !!v
                  return (
                    s && (W || _)
                      ? e(d.m(p()({ media_id: s.uploadId, found_media_origin: W }, !!_ && { alt_text: { text: v } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var r = (M || {}).id_str,
                        n = {}
                      if (s) {
                        var a = s.mediaFile,
                          d = void 0 === a ? {} : a,
                          v = {
                            original_info: { width: d.width, height: d.height },
                            sizes: [{ h: d.height, w: d.width, resize: 'fit' }],
                          }
                        d.isImage
                          ? (n.photo = p()(p()({}, v), {}, { media_url_https: d.url }))
                          : d.isGif
                          ? (n.animated_gif = p()(p()({}, v), {}, { media_url_https: u, type: 'animated_gif' }))
                          : d.isVideo && (n.video = p()(p()({}, v), {}, { media_url_https: d.url, type: 'video' }))
                      } else M && (n.tweet = { status: r })
                      var _ = (s || {}).uploadId,
                        b = D({
                          attachment: n,
                          conversation_id: f,
                          id: I,
                          recipient_ids: U,
                          sender_id: c,
                          text: t.text,
                        }),
                        S = p()(
                          p()(
                            p()(p()({}, T), Object(m.a)(l) && { card_uri: l }),
                            {},
                            { conversation_id: f },
                            !r && { media_id: _ },
                          ),
                          {},
                          { recipient_ids: U, request_id: I, tweet_id: r },
                        )
                      K &&
                        ((S['quick_reply_response[options][id]'] = K.id),
                        (S['quick_reply_response[options][selected_id]'] = K.selected_id))
                      var C = Object(x.a)([
                        tt(f),
                        { type: y.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        f && Object(w.b)(f, I, b),
                      ])
                      return (
                        e(C),
                        o.DirectMessages.sendMessage(S).then(
                          function (r) {
                            var n = r.entities,
                              o = n.cards,
                              a = n.entries,
                              s = n.tweets,
                              u = n.users,
                              c = r.result.conversations
                            Object(k.a)(B) && e(J(f, B))
                            var l = Object(x.a)(
                              [{ type: y.c.SUCCESS }].concat(
                                i()(Object(h.a)({ conversations: c, entries: a, users: u, tweets: s, cards: o })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, f && Object(w.j)(f, I, t), R(f)],
                              ),
                            )
                            return e(l), Promise.resolve(Object.values(r.entities.entries)[0].conversation_id)
                          },
                          function (r) {
                            var i = D({
                                attachment: n,
                                conversation_id: f,
                                error: !0,
                                id: I,
                                localMediaId: B,
                                recipient_ids: U,
                                sender_id: c,
                                text: t.text,
                              }),
                              o = Object(x.a)([
                                { type: y.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                f && Object(w.b)(f, I, i),
                              ])
                            return e(o), Object(g.e)(e, r, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (t) {
                      return e(rt(f)), (t.type = 'metadata'), Promise.reject(t)
                    },
                  )
                },
                function (t) {
                  return e(Object(x.a)([Object(k.a)(B) && J(f, B), rt(f)])), Promise.reject(t)
                },
              )
            )
          }
        },
        M = function (t, e) {
          return t.dmComposer[e]
        },
        K = function (t, e) {
          var r = M(t, e)
          return r ? r.text : null
        },
        T = 'rweb/dmComposer/SAVE_TEXT',
        A = function (t, e) {
          return { type: T, conversationId: t, text: e }
        },
        B = 'rweb/dmComposer/REMOVE_TEXT',
        R = function (t) {
          return { type: B, conversationId: t }
        },
        L = function (t, e) {
          var r = M(t, e)
          return r ? r.cardUrl : null
        },
        F = 'rweb/dmComposer/SAVE_CARD_URL',
        P = function (t, e) {
          return { type: F, conversationId: t, cardUrl: e }
        },
        z = function (t, e) {
          var r = M(t, e)
          return r ? r.mediaId : null
        },
        N = function (t, e) {
          var r = d.k(t, z(t, e))
          return r.length > 0 ? r[0] : null
        },
        U = function (t, e) {
          var r = M(t, e)
          return !!r && r.isUploading
        },
        j = function (t, e) {
          return d.l(t, z(t, e))
        },
        q = function (t, e) {
          var r = M(t, e)
          return r ? r.gifMetadata : null
        },
        H = 'rweb/dmComposer/ADD_MEDIA',
        V = function (t, e, r) {
          return { payload: { isUploading: !1, mediaId: a()(e, 1)[0], gifMetadata: r }, type: H, conversationId: t }
        },
        W = 'rweb/dmComposer/CANCEL_UPLOAD',
        G = function (t) {
          return { type: W, conversationId: t }
        },
        Y = 'rweb/dmComposer/REMOVE_MEDIA',
        X = function (t) {
          return { type: Y, conversationId: t }
        },
        J = function (t, e) {
          return function (r) {
            r(d.i(e)), r([G(t), X(t)])
          }
        },
        Z = 'rweb/dmComposer/UPLOAD_REQUEST',
        Q = function (t) {
          return { type: Z, conversationId: t }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        tt = function (t) {
          return { type: $, conversationId: t }
        },
        et = 'rweb/dmComposer/UPLOAD_FAILURE',
        rt = function (t) {
          return { type: et, conversationId: t }
        }
      _.a.register(
        l()({}, E, function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
            e = arguments.length > 1 ? arguments[1] : void 0,
            r = e.conversationId || 'new_group'
          switch (e.type) {
            case H:
              var n = t[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, t), {}, l()({}, r, p()(p()({}, n), e.payload)))
            case Z:
              var i = t[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, t), {}, l()({}, r, p()(p()({}, i), {}, { isUploading: !0 })))
            case W:
              var o = t[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, t), {}, l()({}, r, p()(p()({}, o), {}, { isUploading: !1 })))
            case et:
            case $:
            case Y:
              var a = t[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, t),
                {},
                l()({}, r, p()(p()({}, a), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case T:
              var s = t[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, t), {}, l()({}, r, p()(p()({}, s), {}, { text: e.text })))
            case F:
              var u = t[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, t), {}, l()({}, r, p()(p()({}, u), {}, { cardUrl: e.cardUrl })))
            case B:
              var c = t[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, t), {}, l()({}, r, p()(p()({}, c), {}, { text: null })))
            default:
              return t
          }
        }),
      )
    },
    Cfxn: function (t, e, r) {
      'use strict'
      t.exports = {
        logBlockedSelectionEvent: function () {
          return null
        },
        logSelectionStateFailure: function () {
          return null
        },
      }
    },
    Cl3z: function (t, e, r) {
      'use strict'
      var n = r('W6iK'),
        i = r('vYw2'),
        o = r('KXNC'),
        a = r('tI3i')
      function s(t, e) {
        for (var r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0; a < t.length; a++) {
          var s = t[a]
          0 !== s.width &&
            1 !== s.width &&
            ((r = Math.min(r, s.top)),
            (n = Math.min(n, s.bottom)),
            (i = Math.max(i, s.top)),
            (o = Math.max(o, s.bottom)))
        }
        return i <= n && i - r < e && o - n < e
      }
      function u(t) {
        switch (t.nodeType) {
          case Node.DOCUMENT_TYPE_NODE:
            return 0
          case Node.TEXT_NODE:
          case Node.PROCESSING_INSTRUCTION_NODE:
          case Node.COMMENT_NODE:
            return t.length
          default:
            return t.childNodes.length
        }
      }
      t.exports = function (t) {
        t.collapsed || a(!1)
        var e = (t = t.cloneRange()).startContainer
        1 !== e.nodeType && (e = e.parentNode)
        var r = (function (t) {
            var e = getComputedStyle(t),
              r = i(t),
              n = r.createElement('div')
            ;(n.style.fontFamily = e.fontFamily),
              (n.style.fontSize = e.fontSize),
              (n.style.fontStyle = e.fontStyle),
              (n.style.fontWeight = e.fontWeight),
              (n.style.lineHeight = e.lineHeight),
              (n.style.position = 'absolute'),
              (n.textContent = 'M')
            var o = r.body
            o || a(!1), o.appendChild(n)
            var s = n.getBoundingClientRect()
            return o.removeChild(n), s.height
          })(e),
          c = t.endContainer,
          l = t.endOffset
        for (
          t.setStart(t.startContainer, 0);
          s(o(t), r) &&
          ((c = t.startContainer),
          (l = t.startOffset),
          c.parentNode || a(!1),
          t.setStartBefore(c),
          1 !== c.nodeType || 'inline' === getComputedStyle(c).display);

        );
        for (var f = c, p = l - 1; ; ) {
          for (var d = f.nodeValue, h = p; h >= 0; h--)
            if (!(null != d && h > 0 && n.isSurrogatePair(d, h - 1))) {
              if ((t.setStart(f, h), !s(o(t), r))) break
              ;(c = f), (l = h)
            }
          if (-1 === h || 0 === f.childNodes.length) break
          p = u((f = f.childNodes[h]))
        }
        return t.setStart(c, l), t
      }
    },
    CqlG: function (t, e, r) {
      'use strict'
      var n = r('tI3i')
      t.exports = function (t) {
        return (function (t) {
          return (
            !!t &&
            ('object' == typeof t || 'function' == typeof t) &&
            'length' in t &&
            !('setInterval' in t) &&
            'number' != typeof t.nodeType &&
            (Array.isArray(t) || 'callee' in t || 'item' in t)
          )
        })(t)
          ? Array.isArray(t)
            ? t.slice()
            : (function (t) {
                var e = t.length
                if (
                  ((Array.isArray(t) || ('object' != typeof t && 'function' != typeof t)) && n(!1),
                  'number' != typeof e && n(!1),
                  0 === e || e - 1 in t || n(!1),
                  'function' == typeof t.callee && n(!1),
                  t.hasOwnProperty)
                )
                  try {
                    return Array.prototype.slice.call(t)
                  } catch (o) {}
                for (var r = Array(e), i = 0; i < e; i++) r[i] = t[i]
                return r
              })(t)
          : [t]
      }
    },
    CtAg: function (t, e, r) {
      'use strict'
      var n = r('5/F0')
      t.exports = function (t) {
        var e = n(t)
        return { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }
      }
    },
    DZH9: function (t, e, r) {
      'use strict'
      var n = r('W6iK'),
        i = r('Svze').OrderedSet,
        o = n.substr,
        a = i()
      t.exports = function (t, e) {
        var r = Array(t.length).fill(a)
        return (
          e &&
            e.forEach(function (e) {
              for (var n = o(t, 0, e.offset).length, i = n + o(t, e.offset, e.length).length; n < i; )
                (r[n] = r[n].add(e.style)), n++
            }),
          r
        )
      }
    },
    DtGU: function (t, e, r) {
      'use strict'
      var n = r('13UR')
      t.exports = function t(e) {
        if (n(e)) {
          var r = e,
            i = r.getAttribute('data-offset-key')
          if (i) return i
          for (var o = 0; o < r.childNodes.length; o++) {
            var a = t(r.childNodes[o])
            if (a) return a
          }
        }
        return null
      }
    },
    DuSR: function (t, e, r) {
      'use strict'
      var n = r('Cfxn'),
        i = r('1xkk'),
        o = r('KqX8'),
        a = r('WbhC')
      t.exports = function (t) {
        if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
          if (t._blockSelectEvents) {
            var e = t.props.editorState.getSelection()
            n.logBlockedSelectionEvent({
              anonymizedDom: 'N/A',
              extraParams: JSON.stringify({ stacktrace: new Error().stack }),
              selectionState: JSON.stringify(e.toJS()),
            })
          }
        } else {
          var r = t.props.editorState,
            s = a(r, o(t)),
            u = s.selectionState
          u !== r.getSelection() &&
            ((r = s.needsRecovery ? i.forceSelection(r, u) : i.acceptSelection(r, u)), t.update(r))
        }
      }
    },
    EYg6: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var i = r('IbSy'),
        o = r('YM28'),
        a = r('tO3r'),
        s = r('YSZ8'),
        u = r('GSkh'),
        c = r('ZUd0'),
        l = r('Svze'),
        f = r('fNVm'),
        p = l.List,
        d = l.Repeat,
        h = c('draft_tree_data_support'),
        g = h ? o : i,
        y = {
          processHTML: function (t, e) {
            return a(t, u, e)
          },
          processText: function (t, e, r) {
            return t.reduce(function (t, i, o) {
              i = f(i)
              var a = s(),
                u = { key: a, type: r, text: i, characterList: p(d(e, i.length)) }
              if (h && 0 !== o) {
                var c = o - 1
                u = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                      i = Object.keys(r)
                    'function' == typeof Object.getOwnPropertySymbols &&
                      (i = i.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                          return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }),
                      )),
                      i.forEach(function (e) {
                        n(t, e, r[e])
                      })
                  }
                  return t
                })({}, u, { prevSibling: (t[c] = t[c].merge({ nextSibling: a })).getKey() })
              }
              return t.push(new g(u)), t
            }, [])
          },
        }
      t.exports = y
    },
    Ea6c: function (t, e, r) {
      'use strict'
      t.exports = { initODS: function () {}, handleExtensionCausedError: function () {} }
    },
    Fd87: function (t, e, r) {
      'use strict'
      var n = r('n09L'),
        i = r('tI3i'),
        o = '֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ',
        a =
          '؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾',
        s = new RegExp(
          '[' +
            'A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ' +
            o +
            a +
            ']',
        ),
        u = new RegExp('[' + o + a + ']')
      function c(t) {
        var e = s.exec(t)
        return null == e ? null : e[0]
      }
      function l(t) {
        var e = c(t)
        return null == e ? n.NEUTRAL : u.exec(e) ? n.RTL : n.LTR
      }
      function f(t, e) {
        if (((e = e || n.NEUTRAL), !t.length)) return e
        var r = l(t)
        return r === n.NEUTRAL ? e : r
      }
      function p(t, e) {
        return e || (e = n.getGlobalDir()), n.isStrong(e) || i(!1), f(t, e)
      }
      var d = {
        firstStrongChar: c,
        firstStrongCharDir: l,
        resolveBlockDir: f,
        getDirection: p,
        isDirectionLTR: function (t, e) {
          return p(t, e) === n.LTR
        },
        isDirectionRTL: function (t, e) {
          return p(t, e) === n.RTL
        },
      }
      t.exports = d
    },
    GSkh: function (t, e, r) {
      'use strict'
      var n = r('rim0'),
        i = r('tI3i'),
        o = n.isBrowser('IE <= 9')
      t.exports = function (t) {
        var e,
          r = null
        return (
          !o &&
            document.implementation &&
            document.implementation.createHTMLDocument &&
            ((e = document.implementation.createHTMLDocument('foo')).documentElement || i(!1),
            (e.documentElement.innerHTML = t),
            (r = e.getElementsByTagName('body')[0])),
          r
        )
      }
    },
    GyyK: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var i = r('IbSy'),
        o = r('YM28'),
        a = r('IvBP'),
        s = r('mTn+'),
        u = r('zYrz'),
        c = r('tI3i'),
        l = function (t, e) {
          return {
            key: t.getKey(),
            text: t.getText(),
            type: t.getType(),
            depth: t.getDepth(),
            inlineStyleRanges: u(t),
            entityRanges: s(t, e),
            data: t.getData().toObject(),
          }
        },
        f = function (t, e, r, a) {
          if (t instanceof i) r.push(l(t, e))
          else {
            t instanceof o || c(!1)
            var s = t.getParentKey(),
              u = (a[t.getKey()] = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(r)
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                      }),
                    )),
                    i.forEach(function (e) {
                      n(t, e, r[e])
                    })
                }
                return t
              })({}, l(t, e), { children: [] }))
            s ? a[s].children.push(u) : r.push(u)
          }
        }
      t.exports = function (t) {
        var e = { entityMap: {}, blocks: [] }
        return (
          (e = (function (t, e) {
            var r = e.entityMap,
              n = [],
              i = {},
              o = {},
              s = 0
            return (
              t.getBlockMap().forEach(function (t) {
                t.findEntityRanges(
                  function (t) {
                    return null !== t.getEntity()
                  },
                  function (e) {
                    var n = t.getEntityAt(e),
                      i = a.stringify(n)
                    o[i] || ((o[i] = n), (r[i] = ''.concat(s)), s++)
                  },
                ),
                  f(t, r, n, i)
              }),
              { blocks: n, entityMap: r }
            )
          })(t, e)),
          (e = (function (t, e) {
            var r = e.blocks,
              n = e.entityMap,
              i = {}
            return (
              Object.keys(n).forEach(function (e, r) {
                var n = t.getEntity(a.unstringify(e))
                i[r] = { type: n.getType(), mutability: n.getMutability(), data: n.getData() }
              }),
              { blocks: r, entityMap: i }
            )
          })(t, e))
        )
      }
    },
    HKFH: function (t, e, r) {
      'use strict'
      var n = r('b+nQ'),
        i = r('Svze').Map,
        o = {
          add: function (t, e, r) {
            return a(t, e, r, !0)
          },
          remove: function (t, e, r) {
            return a(t, e, r, !1)
          },
        }
      function a(t, e, r, o) {
        var a = t.getBlockMap(),
          s = e.getStartKey(),
          u = e.getStartOffset(),
          c = e.getEndKey(),
          l = e.getEndOffset(),
          f = a
            .skipUntil(function (t, e) {
              return e === s
            })
            .takeUntil(function (t, e) {
              return e === c
            })
            .concat(i([[c, a.get(c)]]))
            .map(function (t, e) {
              var i, a
              s === c ? ((i = u), (a = l)) : ((i = e === s ? u : 0), (a = e === c ? l : t.getLength()))
              for (var f, p = t.getCharacterList(); i < a; )
                (f = p.get(i)), (p = p.set(i, o ? n.applyStyle(f, r) : n.removeStyle(f, r))), i++
              return t.set('characterList', p)
            })
        return t.merge({ blockMap: a.merge(f), selectionBefore: e, selectionAfter: e })
      }
      t.exports = o
    },
    HdU4: function (t, e, r) {
      'use strict'
      var n = r('YM28')
      t.exports = function (t, e) {
        if (!(t instanceof n)) return null
        var r = t.getNextSiblingKey()
        if (r) return r
        var i = t.getParentKey()
        if (!i) return null
        for (var o = e.get(i); o && !o.getNextSiblingKey(); ) {
          var a = o.getParentKey()
          o = a ? e.get(a) : null
        }
        return o ? o.getNextSiblingKey() : null
      }
    },
    IDEf: function (t, e, r) {
      'use strict'
      var n = (function (t) {
        var e, r
        function n() {
          return t.apply(this, arguments) || this
        }
        ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
        var i = n.prototype
        return (
          (i.serialize = function () {
            return (
              'Anchor: ' +
              this.getAnchorKey() +
              ':' +
              this.getAnchorOffset() +
              ', Focus: ' +
              this.getFocusKey() +
              ':' +
              this.getFocusOffset() +
              ', Is Backward: ' +
              String(this.getIsBackward()) +
              ', Has Focus: ' +
              String(this.getHasFocus())
            )
          }),
          (i.getAnchorKey = function () {
            return this.get('anchorKey')
          }),
          (i.getAnchorOffset = function () {
            return this.get('anchorOffset')
          }),
          (i.getFocusKey = function () {
            return this.get('focusKey')
          }),
          (i.getFocusOffset = function () {
            return this.get('focusOffset')
          }),
          (i.getIsBackward = function () {
            return this.get('isBackward')
          }),
          (i.getHasFocus = function () {
            return this.get('hasFocus')
          }),
          (i.hasEdgeWithin = function (t, e, r) {
            var n = this.getAnchorKey(),
              i = this.getFocusKey()
            if (n === i && n === t) {
              var o = this.getStartOffset(),
                a = this.getEndOffset()
              return (e <= o && o <= r) || (e <= a && a <= r)
            }
            if (t !== n && t !== i) return !1
            var s = t === n ? this.getAnchorOffset() : this.getFocusOffset()
            return e <= s && r >= s
          }),
          (i.isCollapsed = function () {
            return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset()
          }),
          (i.getStartKey = function () {
            return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey()
          }),
          (i.getStartOffset = function () {
            return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset()
          }),
          (i.getEndKey = function () {
            return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey()
          }),
          (i.getEndOffset = function () {
            return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset()
          }),
          (n.createEmpty = function (t) {
            return new n({ anchorKey: t, anchorOffset: 0, focusKey: t, focusOffset: 0, isBackward: !1, hasFocus: !1 })
          }),
          n
        )
      })(
        (0, r('Svze').Record)({
          anchorKey: '',
          anchorOffset: 0,
          focusKey: '',
          focusOffset: 0,
          isBackward: !1,
          hasFocus: !1,
        }),
      )
      t.exports = n
    },
    IbSy: function (t, e, r) {
      'use strict'
      var n = r('b+nQ'),
        i = r('AL/+'),
        o = r('Svze'),
        a = o.List,
        s = o.Map,
        u = o.OrderedSet,
        c = o.Record,
        l = o.Repeat,
        f = u(),
        p = c({ key: '', type: 'unstyled', text: '', characterList: a(), depth: 0, data: s() }),
        d = (function (t) {
          var e, r
          function o(e) {
            return (
              t.call(
                this,
                (function (t) {
                  if (!t) return t
                  var e = t.characterList,
                    r = t.text
                  return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t
                })(e),
              ) || this
            )
          }
          ;(r = t), ((e = o).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var s = o.prototype
          return (
            (s.getKey = function () {
              return this.get('key')
            }),
            (s.getType = function () {
              return this.get('type')
            }),
            (s.getText = function () {
              return this.get('text')
            }),
            (s.getCharacterList = function () {
              return this.get('characterList')
            }),
            (s.getLength = function () {
              return this.getText().length
            }),
            (s.getDepth = function () {
              return this.get('depth')
            }),
            (s.getData = function () {
              return this.get('data')
            }),
            (s.getInlineStyleAt = function (t) {
              var e = this.getCharacterList().get(t)
              return e ? e.getStyle() : f
            }),
            (s.getEntityAt = function (t) {
              var e = this.getCharacterList().get(t)
              return e ? e.getEntity() : null
            }),
            (s.findStyleRanges = function (t, e) {
              i(this.getCharacterList(), h, t, e)
            }),
            (s.findEntityRanges = function (t, e) {
              i(this.getCharacterList(), g, t, e)
            }),
            o
          )
        })(p)
      function h(t, e) {
        return t.getStyle() === e.getStyle()
      }
      function g(t, e) {
        return t.getEntity() === e.getEntity()
      }
      t.exports = d
    },
    IchF: function (t, e, r) {
      'use strict'
      var n = r('M7w5'),
        i = r('DtGU'),
        o = r('7XzN'),
        a = r('tI3i'),
        s = r('13UR'),
        u = r('hF1F')
      function c(t, e, r) {
        var o = e,
          c = n(o)
        ;(null != c || (t && (t === o || t.firstChild === o)) || a(!1), t === o) &&
          ((o = o.firstChild),
          s(o) || a(!1),
          'true' !== (o = o).getAttribute('data-contents') && a(!1),
          r > 0 && (r = o.childNodes.length))
        if (0 === r) {
          var f = null
          if (null != c) f = c
          else {
            var p = (function (t) {
              for (
                ;
                t.firstChild &&
                ((s(t.firstChild) && 'true' === t.firstChild.getAttribute('data-blocks')) || i(t.firstChild));

              )
                t = t.firstChild
              return t
            })(o)
            f = u(i(p))
          }
          return { key: f, offset: 0 }
        }
        var d = o.childNodes[r - 1],
          h = null,
          g = null
        if (i(d)) {
          var y = (function (t) {
            for (
              ;
              t.lastChild && ((s(t.lastChild) && 'true' === t.lastChild.getAttribute('data-blocks')) || i(t.lastChild));

            )
              t = t.lastChild
            return t
          })(d)
          ;(h = u(i(y))), (g = l(y))
        } else (h = u(c)), (g = l(d))
        return { key: h, offset: g }
      }
      function l(t) {
        var e = t.textContent
        return '\n' === e ? 0 : e.length
      }
      t.exports = function (t, e, r, i, a, s) {
        var l = r.nodeType === Node.TEXT_NODE,
          f = a.nodeType === Node.TEXT_NODE
        if (l && f) return { selectionState: o(t, u(n(r)), i, u(n(a)), s), needsRecovery: !1 }
        var p = null,
          d = null,
          h = !0
        return (
          l
            ? ((p = { key: u(n(r)), offset: i }), (d = c(e, a, s)))
            : f
            ? ((d = { key: u(n(a)), offset: s }), (p = c(e, r, i)))
            : ((p = c(e, r, i)),
              (d = c(e, a, s)),
              r === a && i === s && (h = !!r.firstChild && 'BR' !== r.firstChild.nodeName)),
          { selectionState: o(t, p.key, p.offset, d.key, d.offset), needsRecovery: h }
        )
      }
    },
    IvBP: function (t, e, r) {
      'use strict'
      var n = {
        stringify: function (t) {
          return '_' + String(t)
        },
        unstringify: function (t) {
          return t.slice(1)
        },
      }
      t.exports = n
    },
    JAVJ: function (t, e, r) {
      'use strict'
      var n = r('maj8')
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }).apply(this, arguments)
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              a(t, e, r[e])
            })
        }
        return t
      }
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var s = r('MOn9'),
        u = r('b//S'),
        c = r('ERkP'),
        l = r('2Wwg'),
        f = r('Y5pQ'),
        p = r('hF1F'),
        d = function (t, e, r, n) {
          return l({
            'public/DraftStyleDefault/unorderedListItem': 'unordered-list-item' === t,
            'public/DraftStyleDefault/orderedListItem': 'ordered-list-item' === t,
            'public/DraftStyleDefault/reset': r,
            'public/DraftStyleDefault/depth0': 0 === e,
            'public/DraftStyleDefault/depth1': 1 === e,
            'public/DraftStyleDefault/depth2': 2 === e,
            'public/DraftStyleDefault/depth3': 3 === e,
            'public/DraftStyleDefault/depth4': e >= 4,
            'public/DraftStyleDefault/listLTR': 'LTR' === n,
            'public/DraftStyleDefault/listRTL': 'RTL' === n,
          })
        },
        h = (function (t) {
          var e, r
          function n() {
            return t.apply(this, arguments) || this
          }
          ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var a = n.prototype
          return (
            (a.shouldComponentUpdate = function (t) {
              var e = this.props.editorState,
                r = t.editorState
              if (e.getDirectionMap() !== r.getDirectionMap()) return !0
              if (e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0
              var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode()
              if (e === r || (null !== n && r.getCurrentContent() === n) || (i && o)) return !1
              var a = e.getCurrentContent(),
                s = r.getCurrentContent(),
                u = e.getDecorator(),
                c = r.getDecorator()
              return i !== o || a !== s || u !== c || r.mustForceSelection()
            }),
            (a.render = function () {
              for (
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  a = t.customStyleMap,
                  l = t.customStyleFn,
                  h = t.editorState,
                  g = t.editorKey,
                  y = t.preventScroll,
                  v = t.textDirectionality,
                  m = h.getCurrentContent(),
                  _ = h.getSelection(),
                  b = h.mustForceSelection(),
                  S = h.getDecorator(),
                  w = p(h.getDirectionMap()),
                  x = m.getBlocksAsArray(),
                  k = [],
                  C = null,
                  E = null,
                  O = 0;
                O < x.length;
                O++
              ) {
                var D = x[O],
                  I = D.getKey(),
                  M = D.getType(),
                  K = r(D),
                  T = void 0,
                  A = void 0,
                  B = void 0
                K && ((T = K.component), (A = K.props), (B = K.editable))
                var R = v || w.get(I),
                  L = u.encode(I, 0, 0),
                  F = {
                    contentState: m,
                    block: D,
                    blockProps: A,
                    blockStyleFn: n,
                    customStyleMap: a,
                    customStyleFn: l,
                    decorator: S,
                    direction: R,
                    forceSelection: b,
                    offsetKey: L,
                    preventScroll: y,
                    selection: _,
                    tree: h.getBlockTree(I),
                  },
                  P = e.get(M) || e.get('unstyled'),
                  z = P.wrapper,
                  N = P.element || e.get('unstyled').element,
                  U = D.getDepth(),
                  j = ''
                if ((n && (j = n(D)), 'li' === N)) j = f(j, d(M, U, E !== z || null === C || U > C, R))
                var q = T || s,
                  H = { className: j, 'data-block': !0, 'data-editor': g, 'data-offset-key': L, key: I }
                void 0 !== B && (H = o({}, H, { contentEditable: B, suppressContentEditableWarning: !0 }))
                var V = c.createElement(N, H, c.createElement(q, i({}, F, { key: I })))
                k.push({ block: V, wrapperTemplate: z, key: I, offsetKey: L }), (C = z ? D.getDepth() : null), (E = z)
              }
              for (var W = [], G = 0; G < k.length; ) {
                var Y = k[G]
                if (Y.wrapperTemplate) {
                  var X = []
                  do {
                    X.push(k[G].block), G++
                  } while (G < k.length && k[G].wrapperTemplate === Y.wrapperTemplate)
                  var J = c.cloneElement(Y.wrapperTemplate, { key: Y.key + '-wrap', 'data-offset-key': Y.offsetKey }, X)
                  W.push(J)
                } else W.push(Y.block), G++
              }
              return c.createElement('div', { 'data-contents': 'true' }, W)
            }),
            n
          )
        })(c.Component)
      t.exports = h
    },
    JtWY: function (t, e, r) {
      'use strict'
      var n = 'undefined' != typeof navigator && navigator.userAgent.indexOf('AppleWebKit') > -1
      t.exports = function (t) {
        return (t = t || document).scrollingElement
          ? t.scrollingElement
          : n || 'CSS1Compat' !== t.compatMode
          ? t.body
          : t.documentElement
      }
    },
    KDIr: function (t, e, r) {
      'use strict'
      var n = r('YM28'),
        i = r('YSZ8'),
        o = r('Svze'),
        a = r('tI3i'),
        s = r('WmAF'),
        u = o.List,
        c = o.Map,
        l = function (t, e, r) {
          if (t) {
            var n = e.get(t)
            n && e.set(t, r(n))
          }
        }
      t.exports = function (t, e) {
        e.isCollapsed() || a(!1)
        var r = e.getAnchorKey(),
          o = t.getBlockMap(),
          f = o.get(r),
          p = f.getText()
        if (!p) {
          var d = f.getType()
          if ('unordered-list-item' === d || 'ordered-list-item' === d)
            return s(t, e, function (t) {
              return t.merge({ type: 'unstyled', depth: 0 })
            })
        }
        var h = e.getAnchorOffset(),
          g = f.getCharacterList(),
          y = i(),
          v = f instanceof n,
          m = f.merge({ text: p.slice(0, h), characterList: g.slice(0, h) }),
          _ = m.merge({ key: y, text: p.slice(h), characterList: g.slice(h), data: c() }),
          b = o.toSeq().takeUntil(function (t) {
            return t === f
          }),
          S = o
            .toSeq()
            .skipUntil(function (t) {
              return t === f
            })
            .rest(),
          w = b
            .concat(
              [
                [r, m],
                [y, _],
              ],
              S,
            )
            .toOrderedMap()
        return (
          v &&
            (f.getChildKeys().isEmpty() || a(!1),
            (w = (function (t, e, r) {
              return t.withMutations(function (t) {
                var n = e.getKey(),
                  i = r.getKey()
                l(e.getParentKey(), t, function (t) {
                  var e = t.getChildKeys(),
                    r = e.indexOf(n) + 1,
                    o = e.toArray()
                  return o.splice(r, 0, i), t.merge({ children: u(o) })
                }),
                  l(e.getNextSiblingKey(), t, function (t) {
                    return t.merge({ prevSibling: i })
                  }),
                  l(n, t, function (t) {
                    return t.merge({ nextSibling: i })
                  }),
                  l(i, t, function (t) {
                    return t.merge({ prevSibling: n })
                  })
              })
            })(w, m, _))),
          t.merge({
            blockMap: w,
            selectionBefore: e,
            selectionAfter: e.merge({ anchorKey: y, anchorOffset: 0, focusKey: y, focusOffset: 0, isBackward: !1 }),
          })
        )
      }
    },
    KOTo: function (t, e, r) {
      'use strict'
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              i(t, e, r[e])
            })
        }
        return t
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var o = r('IbSy'),
        a = r('YM28'),
        s = r('VeLA'),
        u = r('krsZ'),
        c = r('bdcm'),
        l = (r('B3y8'), r('IDEf')),
        f = r('hgxY'),
        p = r('NgPv'),
        d = r('DZH9'),
        h = r('YSZ8'),
        g = r('ZUd0'),
        y = r('Svze'),
        v = r('tI3i'),
        m = g('draft_tree_data_support'),
        _ = y.List,
        b = y.Map,
        S = y.OrderedMap,
        w = function (t, e) {
          var r = t.key,
            n = t.type,
            i = t.data
          return {
            text: t.text,
            depth: t.depth || 0,
            type: n || 'unstyled',
            key: r || h(),
            data: b(i),
            characterList: x(t, e),
          }
        },
        x = function (t, e) {
          var r = t.text,
            i = t.entityRanges,
            o = t.inlineStyleRanges,
            a = i || []
          return f(
            d(r, o || []),
            p(
              r,
              a
                .filter(function (t) {
                  return e.hasOwnProperty(t.key)
                })
                .map(function (t) {
                  return n({}, t, { key: e[t.key] })
                }),
            ),
          )
        },
        k = function (t) {
          return n({}, t, { key: t.key || h() })
        },
        C = function (t, e, r) {
          var i = e.map(function (t) {
            return n({}, t, { parentRef: r })
          })
          return t.concat(i.reverse())
        },
        E = function (t, e) {
          var r = t.blocks.find(function (t) {
              return Array.isArray(t.children) && t.children.length > 0
            }),
            i = m && !r ? c.fromRawStateToRawTreeState(t).blocks : t.blocks
          return m
            ? (function (t, e) {
                return t.map(k).reduce(function (r, i, o) {
                  Array.isArray(i.children) || v(!1)
                  var s = i.children.map(k),
                    u = new a(
                      n({}, w(i, e), {
                        prevSibling: 0 === o ? null : t[o - 1].key,
                        nextSibling: o === t.length - 1 ? null : t[o + 1].key,
                        children: _(
                          s.map(function (t) {
                            return t.key
                          }),
                        ),
                      }),
                    )
                  r = r.set(u.getKey(), u)
                  for (var c = C([], s, u); c.length > 0; ) {
                    var l = c.pop(),
                      f = l.parentRef,
                      p = f.getChildKeys(),
                      d = p.indexOf(l.key),
                      h = Array.isArray(l.children)
                    if (!h) {
                      h || v(!1)
                      break
                    }
                    var g = l.children.map(k),
                      y = new a(
                        n({}, w(l, e), {
                          parent: f.getKey(),
                          children: _(
                            g.map(function (t) {
                              return t.key
                            }),
                          ),
                          prevSibling: 0 === d ? null : p.get(d - 1),
                          nextSibling: d === p.size - 1 ? null : p.get(d + 1),
                        }),
                      )
                    ;(r = r.set(y.getKey(), y)), (c = C(c, g, y))
                  }
                  return r
                }, S())
              })(i, e)
            : (function (t, e) {
                return S(
                  t.map(function (t) {
                    var r = new o(w(t, e))
                    return [r.getKey(), r]
                  }),
                )
              })(r ? c.fromRawTreeStateToRawState(t).blocks : i, e)
        }
      t.exports = function (t) {
        Array.isArray(t.blocks) || v(!1)
        var e = (function (t) {
            var e = t.entityMap,
              r = {}
            return (
              Object.keys(e).forEach(function (t) {
                var n = e[t],
                  i = n.type,
                  o = n.mutability,
                  a = n.data
                r[t] = u.__create(i, o, a || {})
              }),
              r
            )
          })(t),
          r = E(t, e),
          n = r.isEmpty() ? new l() : l.createEmpty(r.first().getKey())
        return new s({ blockMap: r, entityMap: e, selectionBefore: n, selectionAfter: n })
      }
    },
    KXNC: function (t, e, r) {
      'use strict'
      var n = r('rim0'),
        i = r('tI3i')
      var o = n.isBrowser('Chrome')
        ? function (t) {
            for (var e = t.cloneRange(), r = [], n = t.endContainer; null != n; n = n.parentNode) {
              var o = n === t.commonAncestorContainer
              o ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0)
              var a,
                s = Array.from(e.getClientRects())
              if ((r.push(s), o)) return r.reverse(), (a = []).concat.apply(a, r)
              e.setEndBefore(n)
            }
            i(!1)
          }
        : function (t) {
            return Array.from(t.getClientRects())
          }
      t.exports = o
    },
    KqB4: function (t, e, r) {
      'use strict'
      var n = r('IGGJ')
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          for (var r = [], n = (0, i.default)(t, e), o = 0; o < n.length; o++) r.push(n[o].url)
          return r
        })
      var i = n(r('vwfs'))
      t.exports = e.default
    },
    KqX8: function (t, e, r) {
      'use strict'
      var n = r('tI3i'),
        i = r('gUTI')
      t.exports = function (t) {
        var e = t.editorContainer
        return e || n(!1), i(e.firstChild) || n(!1), e.firstChild
      }
    },
    LYv7: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        var e = (t ? t.ownerDocument || t : document).defaultView || window
        return !(
          !t ||
          !('function' == typeof e.Node
            ? t instanceof e.Node
            : 'object' == typeof t && 'number' == typeof t.nodeType && 'string' == typeof t.nodeName)
        )
      }
    },
    LtnY: function (t, e, r) {
      'use strict'
      var n = r('ooRk'),
        i = r('b+nQ'),
        o = r('djSO'),
        a = r('7002'),
        s = r('EYg6'),
        u = r('1xkk'),
        c = r('9Kr7'),
        l = r('e59y'),
        f = r('VVXv'),
        p = r('X+Re'),
        d = r('cQcL')
      function h(t, e, r) {
        var n = a.replaceWithFragment(t.getCurrentContent(), t.getSelection(), e)
        return u.push(t, n.set('entityMap', r), 'insert-fragment')
      }
      t.exports = function (t, e) {
        e.preventDefault()
        var r = new o(e.clipboardData)
        if (!r.isRichText()) {
          var g = r.getFiles(),
            y = r.getText()
          if (g.length > 0) {
            if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g))) return
            return void f(g, function (e) {
              if ((e = e || y)) {
                var r = t._latestEditorState,
                  o = d(e),
                  f = i.create({
                    style: r.getCurrentInlineStyle(),
                    entity: l(r.getCurrentContent(), r.getSelection()),
                  }),
                  p = c.getCurrentBlockType(r),
                  h = s.processText(o, f, p),
                  g = n.createFromArray(h),
                  v = a.replaceWithFragment(r.getCurrentContent(), r.getSelection(), g)
                t.update(u.push(r, v, 'insert-fragment'))
              }
            })
          }
        }
        var v = [],
          m = r.getText(),
          _ = r.getHTML(),
          b = t._latestEditorState
        if (!t.props.handlePastedText || !p(t.props.handlePastedText(m, _, b))) {
          if ((m && (v = d(m)), !t.props.stripPastedStyles)) {
            var S = t.getClipboard()
            if (r.isRichText() && S) {
              if (-1 !== _.indexOf(t.getEditorKey()) || (1 === v.length && 1 === S.size && S.first().getText() === m))
                return void t.update(h(t._latestEditorState, S))
            } else if (
              S &&
              r.types.includes('com.apple.webarchive') &&
              !r.types.includes('text/html') &&
              (function (t, e) {
                return (
                  t.length === e.size &&
                  e.valueSeq().every(function (e, r) {
                    return e.getText() === t[r]
                  })
                )
              })(v, S)
            )
              return void t.update(h(t._latestEditorState, S))
            if (_) {
              var w = s.processHTML(_, t.props.blockRenderMap)
              if (w) {
                var x = w.contentBlocks,
                  k = w.entityMap
                if (x) {
                  var C = n.createFromArray(x)
                  return void t.update(h(t._latestEditorState, C, k))
                }
              }
            }
            t.setClipboard(null)
          }
          if (v.length) {
            var E = i.create({ style: b.getCurrentInlineStyle(), entity: l(b.getCurrentContent(), b.getSelection()) }),
              O = c.getCurrentBlockType(b),
              D = s.processText(v, E, O),
              I = n.createFromArray(D)
            t.update(h(t._latestEditorState, I))
          }
        }
      }
    },
    LxfW: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return t.Window && t instanceof t.Window
          ? {
              x: t.pageXOffset || t.document.documentElement.scrollLeft,
              y: t.pageYOffset || t.document.documentElement.scrollTop,
            }
          : { x: t.scrollLeft, y: t.scrollTop }
      }
    },
    M6Be: function (t, e, r) {
      'use strict'
      var n = r('1xkk'),
        i = r('Cl3z'),
        o = r('IchF'),
        a = r('1AUG'),
        s = r('4aXP')
      t.exports = function (t, e) {
        var r = s(
          t,
          function (t) {
            var r = t.getSelection()
            if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1)
            var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0)
            return (n = i(n)), o(t, null, n.endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState
          },
          'backward',
        )
        return r === t.getCurrentContent() ? t : n.push(t, r, 'remove-range')
      }
    },
    M7w5: function (t, e, r) {
      'use strict'
      var n = r('vYw2'),
        i = r('DtGU')
      t.exports = function (t) {
        for (var e = t; e && e !== n(t).documentElement; ) {
          var r = i(e)
          if (null != r) return r
          e = e.parentNode
        }
        return null
      }
    },
    MIqs: function (t, e, r) {
      'use strict'
      var n = r('LYv7')
      t.exports = function (t) {
        return n(t) && 3 == t.nodeType
      }
    },
    MKsC: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
      }
    },
    MLl7: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      }),
        r.d(e, 'b', function () {
          return i
        }),
        r.d(e, 'c', function () {
          return o
        })
      r('yH/f'), r('vrRf'), r('1IsZ')
      var n = Object.freeze({ Composition: 'composition', DMComposition: 'dm_composition' }),
        i = function (t) {
          return Object.values(n).indexOf(t) >= 0
        },
        o = function (t, e) {
          return 'boolean' == typeof t ? t : e
        }
    },
    MOn9: function (t, e, r) {
      'use strict'
      var n = r('maj8')
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }).apply(this, arguments)
      }
      function o(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var s = r('XPEN'),
        u = r('b//S'),
        c = r('ERkP'),
        l = r('O+2R'),
        f = r('/LAw'),
        p = r('Fd87'),
        d = r('n09L'),
        h = r('2Wwg'),
        g = r('CtAg'),
        y = r('7MNd'),
        v = r('BTrg'),
        m = r('tI3i'),
        _ = r('gUTI'),
        b = r('hF1F'),
        S = function (t, e) {
          return t.getAnchorKey() === e || t.getFocusKey() === e
        },
        w = (function (t) {
          var e, r
          function n() {
            for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]
            return a(o((e = t.call.apply(t, [this].concat(n)) || this)), '_node', void 0), e
          }
          ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var w = n.prototype
          return (
            (w.shouldComponentUpdate = function (t) {
              return (
                this.props.block !== t.block ||
                this.props.tree !== t.tree ||
                this.props.direction !== t.direction ||
                (S(t.selection, t.block.getKey()) && t.forceSelection)
              )
            }),
            (w.componentDidMount = function () {
              if (!this.props.preventScroll) {
                var t = this.props.selection,
                  e = t.getEndKey()
                if (t.getHasFocus() && e === this.props.block.getKey()) {
                  var r = this._node
                  if (null != r) {
                    var n,
                      i = f.getScrollParent(r),
                      o = y(i)
                    if (i === window) {
                      var a = g(r)
                      ;(n = a.y + a.height - v().height) > 0 && window.scrollTo(o.x, o.y + n + 10)
                    } else {
                      _(r) || m(!1),
                        (n = r.offsetHeight + r.offsetTop - (i.offsetTop + i.offsetHeight + o.y)) > 0 &&
                          l.setTop(i, l.getTop(i) + n + 10)
                    }
                  }
                }
              }
            }),
            (w._renderChildren = function () {
              var t = this,
                e = this.props.block,
                r = e.getKey(),
                n = e.getText(),
                o = this.props.tree.size - 1,
                a = S(this.props.selection, r)
              return this.props.tree
                .map(function (l, f) {
                  var h = l.get('leaves')
                  if (0 === h.size) return null
                  var g = h.size - 1,
                    y = h
                      .map(function (i, l) {
                        var p = u.encode(r, f, l),
                          d = i.get('start'),
                          h = i.get('end')
                        return c.createElement(s, {
                          key: p,
                          offsetKey: p,
                          block: e,
                          start: d,
                          selection: a ? t.props.selection : null,
                          forceSelection: t.props.forceSelection,
                          text: n.slice(d, h),
                          styleSet: e.getInlineStyleAt(d),
                          customStyleMap: t.props.customStyleMap,
                          customStyleFn: t.props.customStyleFn,
                          isLast: f === o && l === g,
                        })
                      })
                      .toArray(),
                    v = l.get('decoratorKey')
                  if (null == v) return y
                  if (!t.props.decorator) return y
                  var m = b(t.props.decorator),
                    _ = m.getComponentForKey(v)
                  if (!_) return y
                  var S = m.getPropsForKey(v),
                    w = u.encode(r, f, 0),
                    x = h.first().get('start'),
                    k = h.last().get('end'),
                    C = n.slice(x, k),
                    E = e.getEntityAt(l.get('start')),
                    O = d.getHTMLDirIfDifferent(p.getDirection(C), t.props.direction),
                    D = {
                      contentState: t.props.contentState,
                      decoratedText: C,
                      dir: O,
                      start: x,
                      end: k,
                      blockKey: r,
                      entityKey: E,
                      offsetKey: w,
                    }
                  return c.createElement(_, i({}, S, D, { key: w }), y)
                })
                .toArray()
            }),
            (w.render = function () {
              var t = this,
                e = this.props,
                r = e.direction,
                n = e.offsetKey,
                i = h({
                  'public/DraftStyleDefault/block': !0,
                  'public/DraftStyleDefault/ltr': 'LTR' === r,
                  'public/DraftStyleDefault/rtl': 'RTL' === r,
                })
              return c.createElement(
                'div',
                {
                  'data-offset-key': n,
                  className: i,
                  ref: function (e) {
                    return (t._node = e)
                  },
                },
                this._renderChildren(),
              )
            }),
            n
          )
        })(c.Component)
      t.exports = w
    },
    MzOC: function (t, e, r) {
      'use strict'
      r('/2Cm')
      t.exports = function (t, e) {
        var r,
          n = t.getSelection(),
          i = n.getStartKey(),
          o = n.getStartOffset(),
          a = t.getCurrentContent(),
          s = i
        return (
          e > a.getBlockForKey(i).getText().length - o ? ((s = a.getKeyAfter(i)), (r = 0)) : (r = o + e),
          n.merge({ focusKey: s, focusOffset: r })
        )
      }
    },
    NGtv: function (t, e, r) {
      'use strict'
      var n = r('3as9'),
        i = 'Unknown',
        o = { 'Mac OS': 'Mac OS X' }
      var a,
        s = new n().getResult(),
        u = (function (t) {
          if (!t) return { major: '', minor: '' }
          var e = t.split('.')
          return { major: e[0], minor: e[1] }
        })(s.browser.version),
        c = {
          browserArchitecture: s.cpu.architecture || i,
          browserFullVersion: s.browser.version || i,
          browserMinorVersion: u.minor || i,
          browserName: s.browser.name || i,
          browserVersion: s.browser.major || i,
          deviceName: s.device.model || i,
          engineName: s.engine.name || i,
          engineVersion: s.engine.version || i,
          platformArchitecture: s.cpu.architecture || i,
          platformName: ((a = s.os.name), o[a] || a || i),
          platformVersion: s.os.version || i,
          platformFullVersion: s.os.version || i,
        }
      t.exports = c
    },
    NgPv: function (t, e, r) {
      'use strict'
      var n = r('W6iK').substr
      t.exports = function (t, e) {
        var r = Array(t.length).fill(null)
        return (
          e &&
            e.forEach(function (e) {
              for (var i = n(t, 0, e.offset).length, o = i + n(t, e.offset, e.length).length, a = i; a < o; a++)
                r[a] = e.key
            }),
          r
        )
      }
    },
    'O+2R': function (t, e, r) {
      'use strict'
      function n(t, e) {
        return !!e && (t === e.documentElement || t === e.body)
      }
      var i = {
        getTop: function (t) {
          var e = t.ownerDocument
          return n(t, e) ? e.body.scrollTop || e.documentElement.scrollTop : t.scrollTop
        },
        setTop: function (t, e) {
          var r = t.ownerDocument
          n(t, r) ? (r.body.scrollTop = r.documentElement.scrollTop = e) : (t.scrollTop = e)
        },
        getLeft: function (t) {
          var e = t.ownerDocument
          return n(t, e) ? e.body.scrollLeft || e.documentElement.scrollLeft : t.scrollLeft
        },
        setLeft: function (t, e) {
          var r = t.ownerDocument
          n(t, r) ? (r.body.scrollLeft = r.documentElement.scrollLeft = e) : (t.scrollLeft = e)
        },
      }
      t.exports = i
    },
    OJbI: function (t, e, r) {
      'use strict'
      var n = r('maj8')
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }).apply(this, arguments)
      }
      var o = r('b//S'),
        a = r('ERkP'),
        s = r('Fd87'),
        u = r('n09L'),
        c = (function (t) {
          var e, r
          function n() {
            return t.apply(this, arguments) || this
          }
          return (
            (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r),
            (n.prototype.render = function () {
              var t = this.props,
                e = t.block,
                r = t.children,
                n = t.contentState,
                c = t.decorator,
                l = t.decoratorKey,
                f = t.direction,
                p = t.leafSet,
                d = t.text,
                h = e.getKey(),
                g = p.get('leaves'),
                y = c.getComponentForKey(l),
                v = c.getPropsForKey(l),
                m = o.encode(h, parseInt(l, 10), 0),
                _ = d.slice(g.first().get('start'), g.last().get('end')),
                b = u.getHTMLDirIfDifferent(s.getDirection(_), f)
              return a.createElement(
                y,
                i({}, v, {
                  contentState: n,
                  decoratedText: _,
                  dir: b,
                  key: m,
                  entityKey: e.getEntityAt(p.get('start')),
                  offsetKey: m,
                }),
                r,
              )
            }),
            n
          )
        })(a.Component)
      t.exports = c
    },
    OTOR: function (t, e, r) {
      'use strict'
      t.exports = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
          var e = (16 * Math.random()) | 0
          return ('x' == t ? e : (3 & e) | 8).toString(16)
        })
      }
    },
    ObfX: function (t, e, r) {
      'use strict'
      t.exports = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46,
        COMMA: 188,
        PERIOD: 190,
        A: 65,
        Z: 90,
        ZERO: 48,
        NUMPAD_0: 96,
        NUMPAD_9: 105,
      }
    },
    'P/Gd': function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('b//S'),
        o = r('1xkk'),
        a = r('rim0'),
        s = r('RXrk').notEmptyKey,
        u = r('M7w5'),
        c = r('ZFda'),
        l = r('hF1F'),
        f = a.isEngine('Gecko')
      t.exports = function (t, e) {
        void 0 !== t._pendingStateFromBeforeInput &&
          (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0))
        var r = t.editor.ownerDocument.defaultView.getSelection(),
          a = r.anchorNode,
          p = r.isCollapsed,
          d =
            (null == a ? void 0 : a.nodeType) !== Node.TEXT_NODE &&
            (null == a ? void 0 : a.nodeType) !== Node.ELEMENT_NODE
        if (null != a && !d) {
          if (a.nodeType === Node.TEXT_NODE && (null !== a.previousSibling || null !== a.nextSibling)) {
            var h = a.parentNode
            if (null == h) return
            a.nodeValue = h.textContent
            for (var g = h.firstChild; null != g; g = g.nextSibling) g !== a && h.removeChild(g)
          }
          var y = a.textContent,
            v = t._latestEditorState,
            m = l(u(a)),
            _ = i.decode(m),
            b = _.blockKey,
            S = _.decoratorKey,
            w = _.leafKey,
            x = v.getBlockTree(b).getIn([S, 'leaves', w]),
            k = x.start,
            C = x.end,
            E = v.getCurrentContent(),
            O = E.getBlockForKey(b),
            D = O.getText().slice(k, C)
          if ((y.endsWith('\n\n') && (y = y.slice(0, -1)), y !== D)) {
            var I,
              M,
              K,
              T,
              A = v.getSelection(),
              B = A.merge({ anchorOffset: k, focusOffset: C, isBackward: !1 }),
              R = O.getEntityAt(k),
              L = s(R) ? E.getEntity(R) : null,
              F = 'MUTABLE' === (null != L ? L.getMutability() : null),
              P = F ? 'spellcheck-change' : 'apply-entity',
              z = n.replaceText(E, B, y, O.getInlineStyleAt(k), F ? O.getEntityAt(k) : null)
            if (f)
              (I = r.anchorOffset),
                (M = r.focusOffset),
                (T = (K = k + Math.min(I, M)) + Math.abs(I - M)),
                (I = K),
                (M = T)
            else {
              var N = y.length - D.length
              ;(K = A.getStartOffset()), (T = A.getEndOffset()), (I = p ? T + N : K), (M = T + N)
            }
            var U = z.merge({
              selectionBefore: E.getSelectionAfter(),
              selectionAfter: A.merge({ anchorOffset: I, focusOffset: M }),
            })
            t.update(o.push(v, U, P))
          } else {
            var j = e.nativeEvent.inputType
            if (j) {
              var q = (function (t, e) {
                switch (t) {
                  case 'deleteContentBackward':
                    return c(e)
                }
                return e
              })(j, v)
              if (q !== v) return t.restoreEditorDOM(), void t.update(q)
            }
          }
        }
      }
    },
    PrWI: function (t, e, r) {
      'use strict'
      var n = r('hDHP')
      t.exports = function (t) {
        var e = t.getSelection()
        return e.isCollapsed() ? null : n(t.getCurrentContent(), e)
      }
    },
    QAfK: function (t, e, r) {
      'use strict'
      var n = r('ZUd0')('draft_tree_data_support')
      t.exports = r(n ? 'vHsC' : 'JAVJ')
    },
    QCHf: function (t, e, r) {
      'use strict'
      var n = r('YM28'),
        i = r('HdU4'),
        o = r('Svze'),
        a = (o.List, o.Map),
        s = function (t, e, r) {
          if (t) {
            var n = e.get(t)
            n && e.set(t, r(n))
          }
        },
        u = function (t, e) {
          var r = []
          if (!t) return r
          for (var n = e.get(t); n && n.getParentKey(); ) {
            var i = n.getParentKey()
            i && r.push(i), (n = i ? e.get(i) : null)
          }
          return r
        },
        c = function (t, e, r) {
          if (!t) return null
          for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n); ) n = r.get(n).getNextSiblingKey() || null
          return n
        },
        l = function (t, e, r) {
          if (!t) return null
          for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n); ) n = r.get(n).getPrevSiblingKey() || null
          return n
        },
        f = function (t, e, r, n) {
          return t.withMutations(function (o) {
            if (
              (s(e.getKey(), o, function (t) {
                return t.merge({ nextSibling: c(t, o, n), prevSibling: l(t, o, n) })
              }),
              s(r.getKey(), o, function (t) {
                return t.merge({ nextSibling: c(t, o, n), prevSibling: l(t, o, n) })
              }),
              u(e.getKey(), n).forEach(function (t) {
                return s(t, o, function (t) {
                  return t.merge({
                    children: t.getChildKeys().filter(function (t) {
                      return o.get(t)
                    }),
                    nextSibling: c(t, o, n),
                    prevSibling: l(t, o, n),
                  })
                })
              }),
              s(e.getNextSiblingKey(), o, function (t) {
                return t.merge({ prevSibling: e.getPrevSiblingKey() })
              }),
              s(e.getPrevSiblingKey(), o, function (t) {
                return t.merge({ nextSibling: c(t, o, n) })
              }),
              s(r.getNextSiblingKey(), o, function (t) {
                return t.merge({ prevSibling: l(t, o, n) })
              }),
              s(r.getPrevSiblingKey(), o, function (t) {
                return t.merge({ nextSibling: r.getNextSiblingKey() })
              }),
              u(r.getKey(), n).forEach(function (t) {
                s(t, o, function (t) {
                  return t.merge({
                    children: t.getChildKeys().filter(function (t) {
                      return o.get(t)
                    }),
                    nextSibling: c(t, o, n),
                    prevSibling: l(t, o, n),
                  })
                })
              }),
              (function (t, e) {
                var r = []
                if (!t) return r
                for (var n = i(t, e); n && e.get(n); ) {
                  var o = e.get(n)
                  r.push(n), (n = o.getParentKey() ? i(o, e) : null)
                }
                return r
              })(r, n).forEach(function (t) {
                return s(t, o, function (t) {
                  return t.merge({ nextSibling: c(t, o, n), prevSibling: l(t, o, n) })
                })
              }),
              null == t.get(e.getKey()) &&
                null != t.get(r.getKey()) &&
                r.getParentKey() === e.getKey() &&
                null == r.getPrevSiblingKey())
            ) {
              var a = e.getPrevSiblingKey()
              s(r.getKey(), o, function (t) {
                return t.merge({ prevSibling: a })
              }),
                s(a, o, function (t) {
                  return t.merge({ nextSibling: r.getKey() })
                })
              var f = a ? t.get(a) : null,
                p = f ? f.getParentKey() : null
              if (
                (e.getChildKeys().forEach(function (t) {
                  s(t, o, function (t) {
                    return t.merge({ parent: p })
                  })
                }),
                null != p)
              ) {
                var d = t.get(p)
                s(p, o, function (t) {
                  return t.merge({ children: d.getChildKeys().concat(e.getChildKeys()) })
                })
              }
              s(
                e.getChildKeys().find(function (e) {
                  return null === t.get(e).getNextSiblingKey()
                }),
                o,
                function (t) {
                  return t.merge({ nextSibling: e.getNextSiblingKey() })
                },
              )
            }
          })
        },
        p = function (t, e, r) {
          if (0 === e) for (; e < r; ) (t = t.shift()), e++
          else if (r === t.count()) for (; r > e; ) (t = t.pop()), r--
          else {
            var n = t.slice(0, e),
              i = t.slice(r)
            t = n.concat(i).toList()
          }
          return t
        }
      t.exports = function (t, e) {
        if (e.isCollapsed()) return t
        var r,
          o = t.getBlockMap(),
          s = e.getStartKey(),
          c = e.getStartOffset(),
          l = e.getEndKey(),
          d = e.getEndOffset(),
          h = o.get(s),
          g = o.get(l),
          y = h instanceof n,
          v = []
        if (y) {
          var m = g.getChildKeys(),
            _ = u(l, o)
          g.getNextSiblingKey() && (v = v.concat(_)),
            m.isEmpty() || (v = v.concat(_.concat([l]))),
            (v = v.concat(u(i(g, o), o)))
        }
        r =
          h === g
            ? p(h.getCharacterList(), c, d)
            : h.getCharacterList().slice(0, c).concat(g.getCharacterList().slice(d))
        var b = h.merge({ text: h.getText().slice(0, c) + g.getText().slice(d), characterList: r }),
          S =
            y && 0 === c && 0 === d && g.getParentKey() === s && null == g.getPrevSiblingKey()
              ? a([[s, null]])
              : o
                  .toSeq()
                  .skipUntil(function (t, e) {
                    return e === s
                  })
                  .takeUntil(function (t, e) {
                    return e === l
                  })
                  .filter(function (t, e) {
                    return -1 === v.indexOf(e)
                  })
                  .concat(a([[l, null]]))
                  .map(function (t, e) {
                    return e === s ? b : null
                  }),
          w = o.merge(S).filter(function (t) {
            return !!t
          })
        return (
          y && h !== g && (w = f(w, h, g, o)),
          t.merge({
            blockMap: w,
            selectionBefore: e,
            selectionAfter: e.merge({ anchorKey: s, anchorOffset: c, focusKey: s, focusOffset: c, isBackward: !1 }),
          })
        )
      }
    },
    QVkg: function (t, e, r) {
      'use strict'
      var n = r('rim0'),
        i = r('r5/r'),
        o = r('Vwge'),
        a = r('oNIj'),
        s = r('fNrL'),
        u = r('k5bp'),
        c = r('gLP3'),
        l = r('58Uu'),
        f = r('glMO'),
        p = r('P/Gd'),
        d = r('njFt'),
        h = r('LtnY'),
        g = r('DuSR'),
        y = n.isBrowser('Chrome'),
        v = n.isBrowser('Firefox'),
        m = y || v ? g : function (t) {},
        _ = {
          onBeforeInput: i,
          onBlur: o,
          onCompositionStart: a,
          onCopy: s,
          onCut: u,
          onDragOver: c,
          onDragStart: l,
          onFocus: f,
          onInput: p,
          onKeyDown: d,
          onPaste: h,
          onSelect: g,
          onMouseUp: m,
          onKeyUp: m,
        }
      t.exports = _
    },
    R0VQ: function (t, e, r) {
      'use strict'
      var n = r('KXNC')
      t.exports = function (t) {
        var e = n(t),
          r = 0,
          i = 0,
          o = 0,
          a = 0
        if (e.length) {
          if (e.length > 1 && 0 === e[0].width) {
            var s = e[1]
            ;(r = s.top), (i = s.right), (o = s.bottom), (a = s.left)
          } else {
            var u = e[0]
            ;(r = u.top), (i = u.right), (o = u.bottom), (a = u.left)
          }
          for (var c = 1; c < e.length; c++) {
            var l = e[c]
            0 !== l.height &&
              0 !== l.width &&
              ((r = Math.min(r, l.top)),
              (i = Math.max(i, l.right)),
              (o = Math.max(o, l.bottom)),
              (a = Math.min(a, l.left)))
          }
        }
        return { top: r, right: i, bottom: o, left: a, width: i - a, height: o - r }
      }
    },
    RXrk: function (t, e, r) {
      'use strict'
      t.exports = {
        notEmptyKey: function (t) {
          return null != t && '' != t
        },
      }
    },
    Svze: function (t, e, r) {
      t.exports = (function () {
        'use strict'
        var t = Array.prototype.slice
        function e(t, e) {
          e && (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t)
        }
        function r(t) {
          return a(t) ? t : G(t)
        }
        function n(t) {
          return s(t) ? t : Y(t)
        }
        function i(t) {
          return u(t) ? t : X(t)
        }
        function o(t) {
          return a(t) && !c(t) ? t : J(t)
        }
        function a(t) {
          return !(!t || !t[f])
        }
        function s(t) {
          return !(!t || !t[p])
        }
        function u(t) {
          return !(!t || !t[d])
        }
        function c(t) {
          return s(t) || u(t)
        }
        function l(t) {
          return !(!t || !t[h])
        }
        e(n, r),
          e(i, r),
          e(o, r),
          (r.isIterable = a),
          (r.isKeyed = s),
          (r.isIndexed = u),
          (r.isAssociative = c),
          (r.isOrdered = l),
          (r.Keyed = n),
          (r.Indexed = i),
          (r.Set = o)
        var f = '@@__IMMUTABLE_ITERABLE__@@',
          p = '@@__IMMUTABLE_KEYED__@@',
          d = '@@__IMMUTABLE_INDEXED__@@',
          h = '@@__IMMUTABLE_ORDERED__@@',
          g = 'delete',
          y = 5,
          v = 1 << y,
          m = v - 1,
          _ = {},
          b = { value: !1 },
          S = { value: !1 }
        function w(t) {
          return (t.value = !1), t
        }
        function x(t) {
          t && (t.value = !0)
        }
        function k() {}
        function C(t, e) {
          e = e || 0
          for (var r = Math.max(0, t.length - e), n = new Array(r), i = 0; i < r; i++) n[i] = t[i + e]
          return n
        }
        function E(t) {
          return void 0 === t.size && (t.size = t.__iterate(D)), t.size
        }
        function O(t, e) {
          if ('number' != typeof e) {
            var r = e >>> 0
            if ('' + r !== e || 4294967295 === r) return NaN
            e = r
          }
          return e < 0 ? E(t) + e : e
        }
        function D() {
          return !0
        }
        function I(t, e, r) {
          return (0 === t || (void 0 !== r && t <= -r)) && (void 0 === e || (void 0 !== r && e >= r))
        }
        function M(t, e) {
          return T(t, e, 0)
        }
        function K(t, e) {
          return T(t, e, e)
        }
        function T(t, e, r) {
          return void 0 === t ? r : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t)
        }
        var A = 0,
          B = 1,
          R = 2,
          L = 'function' == typeof Symbol && Symbol.iterator,
          F = '@@iterator',
          P = L || F
        function z(t) {
          this.next = t
        }
        function N(t, e, r, n) {
          var i = 0 === t ? e : 1 === t ? r : [e, r]
          return n ? (n.value = i) : (n = { value: i, done: !1 }), n
        }
        function U() {
          return { value: void 0, done: !0 }
        }
        function j(t) {
          return !!V(t)
        }
        function q(t) {
          return t && 'function' == typeof t.next
        }
        function H(t) {
          var e = V(t)
          return e && e.call(t)
        }
        function V(t) {
          var e = t && ((L && t[L]) || t[F])
          if ('function' == typeof e) return e
        }
        function W(t) {
          return t && 'number' == typeof t.length
        }
        function G(t) {
          return null == t ? at() : a(t) ? t.toSeq() : ct(t)
        }
        function Y(t) {
          return null == t ? at().toKeyedSeq() : a(t) ? (s(t) ? t.toSeq() : t.fromEntrySeq()) : st(t)
        }
        function X(t) {
          return null == t ? at() : a(t) ? (s(t) ? t.entrySeq() : t.toIndexedSeq()) : ut(t)
        }
        function J(t) {
          return (null == t ? at() : a(t) ? (s(t) ? t.entrySeq() : t) : ut(t)).toSetSeq()
        }
        ;(z.prototype.toString = function () {
          return '[Iterator]'
        }),
          (z.KEYS = A),
          (z.VALUES = B),
          (z.ENTRIES = R),
          (z.prototype.inspect = z.prototype.toSource =
            function () {
              return this.toString()
            }),
          (z.prototype[P] = function () {
            return this
          }),
          e(G, r),
          (G.of = function () {
            return G(arguments)
          }),
          (G.prototype.toSeq = function () {
            return this
          }),
          (G.prototype.toString = function () {
            return this.__toString('Seq {', '}')
          }),
          (G.prototype.cacheResult = function () {
            return (
              !this._cache &&
                this.__iterateUncached &&
                ((this._cache = this.entrySeq().toArray()), (this.size = this._cache.length)),
              this
            )
          }),
          (G.prototype.__iterate = function (t, e) {
            return ft(this, t, e, !0)
          }),
          (G.prototype.__iterator = function (t, e) {
            return pt(this, t, e, !0)
          }),
          e(Y, G),
          (Y.prototype.toKeyedSeq = function () {
            return this
          }),
          e(X, G),
          (X.of = function () {
            return X(arguments)
          }),
          (X.prototype.toIndexedSeq = function () {
            return this
          }),
          (X.prototype.toString = function () {
            return this.__toString('Seq [', ']')
          }),
          (X.prototype.__iterate = function (t, e) {
            return ft(this, t, e, !1)
          }),
          (X.prototype.__iterator = function (t, e) {
            return pt(this, t, e, !1)
          }),
          e(J, G),
          (J.of = function () {
            return J(arguments)
          }),
          (J.prototype.toSetSeq = function () {
            return this
          }),
          (G.isSeq = ot),
          (G.Keyed = Y),
          (G.Set = J),
          (G.Indexed = X)
        var Z,
          Q,
          $,
          tt = '@@__IMMUTABLE_SEQ__@@'
        function et(t) {
          ;(this._array = t), (this.size = t.length)
        }
        function rt(t) {
          var e = Object.keys(t)
          ;(this._object = t), (this._keys = e), (this.size = e.length)
        }
        function nt(t) {
          ;(this._iterable = t), (this.size = t.length || t.size)
        }
        function it(t) {
          ;(this._iterator = t), (this._iteratorCache = [])
        }
        function ot(t) {
          return !(!t || !t[tt])
        }
        function at() {
          return Z || (Z = new et([]))
        }
        function st(t) {
          var e = Array.isArray(t)
            ? new et(t).fromEntrySeq()
            : q(t)
            ? new it(t).fromEntrySeq()
            : j(t)
            ? new nt(t).fromEntrySeq()
            : 'object' == typeof t
            ? new rt(t)
            : void 0
          if (!e) throw new TypeError('Expected Array or iterable object of [k, v] entries, or keyed object: ' + t)
          return e
        }
        function ut(t) {
          var e = lt(t)
          if (!e) throw new TypeError('Expected Array or iterable object of values: ' + t)
          return e
        }
        function ct(t) {
          var e = lt(t) || ('object' == typeof t && new rt(t))
          if (!e) throw new TypeError('Expected Array or iterable object of values, or keyed object: ' + t)
          return e
        }
        function lt(t) {
          return W(t) ? new et(t) : q(t) ? new it(t) : j(t) ? new nt(t) : void 0
        }
        function ft(t, e, r, n) {
          var i = t._cache
          if (i) {
            for (var o = i.length - 1, a = 0; a <= o; a++) {
              var s = i[r ? o - a : a]
              if (!1 === e(s[1], n ? s[0] : a, t)) return a + 1
            }
            return a
          }
          return t.__iterateUncached(e, r)
        }
        function pt(t, e, r, n) {
          var i = t._cache
          if (i) {
            var o = i.length - 1,
              a = 0
            return new z(function () {
              var t = i[r ? o - a : a]
              return a++ > o ? U() : N(e, n ? t[0] : a - 1, t[1])
            })
          }
          return t.__iteratorUncached(e, r)
        }
        function dt(t, e) {
          return e ? ht(e, t, '', { '': t }) : gt(t)
        }
        function ht(t, e, r, n) {
          return Array.isArray(e)
            ? t.call(
                n,
                r,
                X(e).map(function (r, n) {
                  return ht(t, r, n, e)
                }),
              )
            : yt(e)
            ? t.call(
                n,
                r,
                Y(e).map(function (r, n) {
                  return ht(t, r, n, e)
                }),
              )
            : e
        }
        function gt(t) {
          return Array.isArray(t) ? X(t).map(gt).toList() : yt(t) ? Y(t).map(gt).toMap() : t
        }
        function yt(t) {
          return t && (t.constructor === Object || void 0 === t.constructor)
        }
        function vt(t, e) {
          if (t === e || (t != t && e != e)) return !0
          if (!t || !e) return !1
          if ('function' == typeof t.valueOf && 'function' == typeof e.valueOf) {
            if ((t = t.valueOf()) === (e = e.valueOf()) || (t != t && e != e)) return !0
            if (!t || !e) return !1
          }
          return !('function' != typeof t.equals || 'function' != typeof e.equals || !t.equals(e))
        }
        function mt(t, e) {
          if (t === e) return !0
          if (
            !a(e) ||
            (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
            (void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash) ||
            s(t) !== s(e) ||
            u(t) !== u(e) ||
            l(t) !== l(e)
          )
            return !1
          if (0 === t.size && 0 === e.size) return !0
          var r = !c(t)
          if (l(t)) {
            var n = t.entries()
            return (
              e.every(function (t, e) {
                var i = n.next().value
                return i && vt(i[1], t) && (r || vt(i[0], e))
              }) && n.next().done
            )
          }
          var i = !1
          if (void 0 === t.size)
            if (void 0 === e.size) 'function' == typeof t.cacheResult && t.cacheResult()
            else {
              i = !0
              var o = t
              ;(t = e), (e = o)
            }
          var f = !0,
            p = e.__iterate(function (e, n) {
              if (r ? !t.has(e) : i ? !vt(e, t.get(n, _)) : !vt(t.get(n, _), e)) return (f = !1), !1
            })
          return f && t.size === p
        }
        function _t(t, e) {
          if (!(this instanceof _t)) return new _t(t, e)
          if (((this._value = t), (this.size = void 0 === e ? 1 / 0 : Math.max(0, e)), 0 === this.size)) {
            if (Q) return Q
            Q = this
          }
        }
        function bt(t, e) {
          if (!t) throw new Error(e)
        }
        function St(t, e, r) {
          if (!(this instanceof St)) return new St(t, e, r)
          if (
            (bt(0 !== r, 'Cannot step a Range by 0'),
            (t = t || 0),
            void 0 === e && (e = 1 / 0),
            (r = void 0 === r ? 1 : Math.abs(r)),
            e < t && (r = -r),
            (this._start = t),
            (this._end = e),
            (this._step = r),
            (this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1)),
            0 === this.size)
          ) {
            if ($) return $
            $ = this
          }
        }
        function wt() {
          throw TypeError('Abstract')
        }
        function xt() {}
        function kt() {}
        function Ct() {}
        ;(G.prototype[tt] = !0),
          e(et, X),
          (et.prototype.get = function (t, e) {
            return this.has(t) ? this._array[O(this, t)] : e
          }),
          (et.prototype.__iterate = function (t, e) {
            for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++)
              if (!1 === t(r[e ? n - i : i], i, this)) return i + 1
            return i
          }),
          (et.prototype.__iterator = function (t, e) {
            var r = this._array,
              n = r.length - 1,
              i = 0
            return new z(function () {
              return i > n ? U() : N(t, i, r[e ? n - i++ : i++])
            })
          }),
          e(rt, Y),
          (rt.prototype.get = function (t, e) {
            return void 0 === e || this.has(t) ? this._object[t] : e
          }),
          (rt.prototype.has = function (t) {
            return this._object.hasOwnProperty(t)
          }),
          (rt.prototype.__iterate = function (t, e) {
            for (var r = this._object, n = this._keys, i = n.length - 1, o = 0; o <= i; o++) {
              var a = n[e ? i - o : o]
              if (!1 === t(r[a], a, this)) return o + 1
            }
            return o
          }),
          (rt.prototype.__iterator = function (t, e) {
            var r = this._object,
              n = this._keys,
              i = n.length - 1,
              o = 0
            return new z(function () {
              var a = n[e ? i - o : o]
              return o++ > i ? U() : N(t, a, r[a])
            })
          }),
          (rt.prototype[h] = !0),
          e(nt, X),
          (nt.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e)
            var r = H(this._iterable),
              n = 0
            if (q(r)) for (var i; !(i = r.next()).done && !1 !== t(i.value, n++, this); );
            return n
          }),
          (nt.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e)
            var r = H(this._iterable)
            if (!q(r)) return new z(U)
            var n = 0
            return new z(function () {
              var e = r.next()
              return e.done ? e : N(t, n++, e.value)
            })
          }),
          e(it, X),
          (it.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e)
            for (var r, n = this._iterator, i = this._iteratorCache, o = 0; o < i.length; )
              if (!1 === t(i[o], o++, this)) return o
            for (; !(r = n.next()).done; ) {
              var a = r.value
              if (((i[o] = a), !1 === t(a, o++, this))) break
            }
            return o
          }),
          (it.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e)
            var r = this._iterator,
              n = this._iteratorCache,
              i = 0
            return new z(function () {
              if (i >= n.length) {
                var e = r.next()
                if (e.done) return e
                n[i] = e.value
              }
              return N(t, i, n[i++])
            })
          }),
          e(_t, X),
          (_t.prototype.toString = function () {
            return 0 === this.size ? 'Repeat []' : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]'
          }),
          (_t.prototype.get = function (t, e) {
            return this.has(t) ? this._value : e
          }),
          (_t.prototype.includes = function (t) {
            return vt(this._value, t)
          }),
          (_t.prototype.slice = function (t, e) {
            var r = this.size
            return I(t, e, r) ? this : new _t(this._value, K(e, r) - M(t, r))
          }),
          (_t.prototype.reverse = function () {
            return this
          }),
          (_t.prototype.indexOf = function (t) {
            return vt(this._value, t) ? 0 : -1
          }),
          (_t.prototype.lastIndexOf = function (t) {
            return vt(this._value, t) ? this.size : -1
          }),
          (_t.prototype.__iterate = function (t, e) {
            for (var r = 0; r < this.size; r++) if (!1 === t(this._value, r, this)) return r + 1
            return r
          }),
          (_t.prototype.__iterator = function (t, e) {
            var r = this,
              n = 0
            return new z(function () {
              return n < r.size ? N(t, n++, r._value) : U()
            })
          }),
          (_t.prototype.equals = function (t) {
            return t instanceof _t ? vt(this._value, t._value) : mt(t)
          }),
          e(St, X),
          (St.prototype.toString = function () {
            return 0 === this.size
              ? 'Range []'
              : 'Range [ ' + this._start + '...' + this._end + (this._step > 1 ? ' by ' + this._step : '') + ' ]'
          }),
          (St.prototype.get = function (t, e) {
            return this.has(t) ? this._start + O(this, t) * this._step : e
          }),
          (St.prototype.includes = function (t) {
            var e = (t - this._start) / this._step
            return e >= 0 && e < this.size && e === Math.floor(e)
          }),
          (St.prototype.slice = function (t, e) {
            return I(t, e, this.size)
              ? this
              : ((t = M(t, this.size)),
                (e = K(e, this.size)) <= t
                  ? new St(0, 0)
                  : new St(this.get(t, this._end), this.get(e, this._end), this._step))
          }),
          (St.prototype.indexOf = function (t) {
            var e = t - this._start
            if (e % this._step == 0) {
              var r = e / this._step
              if (r >= 0 && r < this.size) return r
            }
            return -1
          }),
          (St.prototype.lastIndexOf = function (t) {
            return this.indexOf(t)
          }),
          (St.prototype.__iterate = function (t, e) {
            for (var r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0; o <= r; o++) {
              if (!1 === t(i, o, this)) return o + 1
              i += e ? -n : n
            }
            return o
          }),
          (St.prototype.__iterator = function (t, e) {
            var r = this.size - 1,
              n = this._step,
              i = e ? this._start + r * n : this._start,
              o = 0
            return new z(function () {
              var a = i
              return (i += e ? -n : n), o > r ? U() : N(t, o++, a)
            })
          }),
          (St.prototype.equals = function (t) {
            return t instanceof St
              ? this._start === t._start && this._end === t._end && this._step === t._step
              : mt(this, t)
          }),
          e(wt, r),
          e(xt, wt),
          e(kt, wt),
          e(Ct, wt),
          (wt.Keyed = xt),
          (wt.Indexed = kt),
          (wt.Set = Ct)
        var Et =
          'function' == typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function (t, e) {
                var r = 65535 & (t |= 0),
                  n = 65535 & (e |= 0)
                return (r * n + ((((t >>> 16) * n + r * (e >>> 16)) << 16) >>> 0)) | 0
              }
        function Ot(t) {
          return ((t >>> 1) & 1073741824) | (3221225471 & t)
        }
        function Dt(t) {
          if (!1 === t || null == t) return 0
          if ('function' == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t)) return 0
          if (!0 === t) return 1
          var e = typeof t
          if ('number' === e) {
            var r = 0 | t
            for (r !== t && (r ^= 4294967295 * t); t > 4294967295; ) r ^= t /= 4294967295
            return Ot(r)
          }
          if ('string' === e) return t.length > zt ? It(t) : Mt(t)
          if ('function' == typeof t.hashCode) return t.hashCode()
          if ('object' === e) return Kt(t)
          if ('function' == typeof t.toString) return Mt(t.toString())
          throw new Error('Value type ' + e + ' cannot be hashed.')
        }
        function It(t) {
          var e = jt[t]
          return void 0 === e && ((e = Mt(t)), Ut === Nt && ((Ut = 0), (jt = {})), Ut++, (jt[t] = e)), e
        }
        function Mt(t) {
          for (var e = 0, r = 0; r < t.length; r++) e = (31 * e + t.charCodeAt(r)) | 0
          return Ot(e)
        }
        function Kt(t) {
          var e
          if (Lt && void 0 !== (e = Rt.get(t))) return e
          if (void 0 !== (e = t[Pt])) return e
          if (!At) {
            if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Pt])) return e
            if (void 0 !== (e = Bt(t))) return e
          }
          if (((e = ++Ft), 1073741824 & Ft && (Ft = 0), Lt)) Rt.set(t, e)
          else {
            if (void 0 !== Tt && !1 === Tt(t)) throw new Error('Non-extensible objects are not allowed as keys.')
            if (At) Object.defineProperty(t, Pt, { enumerable: !1, configurable: !1, writable: !1, value: e })
            else if (
              void 0 !== t.propertyIsEnumerable &&
              t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable
            )
              (t.propertyIsEnumerable = function () {
                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
              }),
                (t.propertyIsEnumerable[Pt] = e)
            else {
              if (void 0 === t.nodeType) throw new Error('Unable to set a non-enumerable property on object.')
              t[Pt] = e
            }
          }
          return e
        }
        var Tt = Object.isExtensible,
          At = (function () {
            try {
              return Object.defineProperty({}, '@', {}), !0
            } catch (t) {
              return !1
            }
          })()
        function Bt(t) {
          if (t && t.nodeType > 0)
            switch (t.nodeType) {
              case 1:
                return t.uniqueID
              case 9:
                return t.documentElement && t.documentElement.uniqueID
            }
        }
        var Rt,
          Lt = 'function' == typeof WeakMap
        Lt && (Rt = new WeakMap())
        var Ft = 0,
          Pt = '__immutablehash__'
        'function' == typeof Symbol && (Pt = Symbol(Pt))
        var zt = 16,
          Nt = 255,
          Ut = 0,
          jt = {}
        function qt(t) {
          bt(t !== 1 / 0, 'Cannot perform this action with an infinite size.')
        }
        function Ht(t) {
          return null == t
            ? ie()
            : Vt(t) && !l(t)
            ? t
            : ie().withMutations(function (e) {
                var r = n(t)
                qt(r.size),
                  r.forEach(function (t, r) {
                    return e.set(r, t)
                  })
              })
        }
        function Vt(t) {
          return !(!t || !t[Gt])
        }
        e(Ht, xt),
          (Ht.prototype.toString = function () {
            return this.__toString('Map {', '}')
          }),
          (Ht.prototype.get = function (t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e
          }),
          (Ht.prototype.set = function (t, e) {
            return oe(this, t, e)
          }),
          (Ht.prototype.setIn = function (t, e) {
            return this.updateIn(t, _, function () {
              return e
            })
          }),
          (Ht.prototype.remove = function (t) {
            return oe(this, t, _)
          }),
          (Ht.prototype.deleteIn = function (t) {
            return this.updateIn(t, function () {
              return _
            })
          }),
          (Ht.prototype.update = function (t, e, r) {
            return 1 === arguments.length ? t(this) : this.updateIn([t], e, r)
          }),
          (Ht.prototype.updateIn = function (t, e, r) {
            r || ((r = e), (e = void 0))
            var n = ye(this, Sr(t), e, r)
            return n === _ ? void 0 : n
          }),
          (Ht.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0), (this._root = null), (this.__hash = void 0), (this.__altered = !0), this)
              : ie()
          }),
          (Ht.prototype.merge = function () {
            return pe(this, void 0, arguments)
          }),
          (Ht.prototype.mergeWith = function (e) {
            return pe(this, e, t.call(arguments, 1))
          }),
          (Ht.prototype.mergeIn = function (e) {
            var r = t.call(arguments, 1)
            return this.updateIn(e, ie(), function (t) {
              return 'function' == typeof t.merge ? t.merge.apply(t, r) : r[r.length - 1]
            })
          }),
          (Ht.prototype.mergeDeep = function () {
            return pe(this, de, arguments)
          }),
          (Ht.prototype.mergeDeepWith = function (e) {
            var r = t.call(arguments, 1)
            return pe(this, he(e), r)
          }),
          (Ht.prototype.mergeDeepIn = function (e) {
            var r = t.call(arguments, 1)
            return this.updateIn(e, ie(), function (t) {
              return 'function' == typeof t.mergeDeep ? t.mergeDeep.apply(t, r) : r[r.length - 1]
            })
          }),
          (Ht.prototype.sort = function (t) {
            return je(lr(this, t))
          }),
          (Ht.prototype.sortBy = function (t, e) {
            return je(lr(this, e, t))
          }),
          (Ht.prototype.withMutations = function (t) {
            var e = this.asMutable()
            return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
          }),
          (Ht.prototype.asMutable = function () {
            return this.__ownerID ? this : this.__ensureOwner(new k())
          }),
          (Ht.prototype.asImmutable = function () {
            return this.__ensureOwner()
          }),
          (Ht.prototype.wasAltered = function () {
            return this.__altered
          }),
          (Ht.prototype.__iterator = function (t, e) {
            return new te(this, t, e)
          }),
          (Ht.prototype.__iterate = function (t, e) {
            var r = this,
              n = 0
            return (
              this._root &&
                this._root.iterate(function (e) {
                  return n++, t(e[1], e[0], r)
                }, e),
              n
            )
          }),
          (Ht.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? ne(this.size, this._root, t, this.__hash)
              : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          (Ht.isMap = Vt)
        var Wt,
          Gt = '@@__IMMUTABLE_MAP__@@',
          Yt = Ht.prototype
        function Xt(t, e) {
          ;(this.ownerID = t), (this.entries = e)
        }
        function Jt(t, e, r) {
          ;(this.ownerID = t), (this.bitmap = e), (this.nodes = r)
        }
        function Zt(t, e, r) {
          ;(this.ownerID = t), (this.count = e), (this.nodes = r)
        }
        function Qt(t, e, r) {
          ;(this.ownerID = t), (this.keyHash = e), (this.entries = r)
        }
        function $t(t, e, r) {
          ;(this.ownerID = t), (this.keyHash = e), (this.entry = r)
        }
        function te(t, e, r) {
          ;(this._type = e), (this._reverse = r), (this._stack = t._root && re(t._root))
        }
        function ee(t, e) {
          return N(t, e[0], e[1])
        }
        function re(t, e) {
          return { node: t, index: 0, __prev: e }
        }
        function ne(t, e, r, n) {
          var i = Object.create(Yt)
          return (i.size = t), (i._root = e), (i.__ownerID = r), (i.__hash = n), (i.__altered = !1), i
        }
        function ie() {
          return Wt || (Wt = ne(0))
        }
        function oe(t, e, r) {
          var n, i
          if (t._root) {
            var o = w(b),
              a = w(S)
            if (((n = ae(t._root, t.__ownerID, 0, void 0, e, r, o, a)), !a.value)) return t
            i = t.size + (o.value ? (r === _ ? -1 : 1) : 0)
          } else {
            if (r === _) return t
            ;(i = 1), (n = new Xt(t.__ownerID, [[e, r]]))
          }
          return t.__ownerID
            ? ((t.size = i), (t._root = n), (t.__hash = void 0), (t.__altered = !0), t)
            : n
            ? ne(i, n)
            : ie()
        }
        function ae(t, e, r, n, i, o, a, s) {
          return t ? t.update(e, r, n, i, o, a, s) : o === _ ? t : (x(s), x(a), new $t(e, n, [i, o]))
        }
        function se(t) {
          return t.constructor === $t || t.constructor === Qt
        }
        function ue(t, e, r, n, i) {
          if (t.keyHash === n) return new Qt(e, n, [t.entry, i])
          var o,
            a = (0 === r ? t.keyHash : t.keyHash >>> r) & m,
            s = (0 === r ? n : n >>> r) & m
          return new Jt(
            e,
            (1 << a) | (1 << s),
            a === s ? [ue(t, e, r + y, n, i)] : ((o = new $t(e, n, i)), a < s ? [t, o] : [o, t]),
          )
        }
        function ce(t, e, r, n) {
          t || (t = new k())
          for (var i = new $t(t, Dt(r), [r, n]), o = 0; o < e.length; o++) {
            var a = e[o]
            i = i.update(t, 0, void 0, a[0], a[1])
          }
          return i
        }
        function le(t, e, r, n) {
          for (var i = 0, o = 0, a = new Array(r), s = 0, u = 1, c = e.length; s < c; s++, u <<= 1) {
            var l = e[s]
            void 0 !== l && s !== n && ((i |= u), (a[o++] = l))
          }
          return new Jt(t, i, a)
        }
        function fe(t, e, r, n, i) {
          for (var o = 0, a = new Array(v), s = 0; 0 !== r; s++, r >>>= 1) a[s] = 1 & r ? e[o++] : void 0
          return (a[n] = i), new Zt(t, o + 1, a)
        }
        function pe(t, e, r) {
          for (var i = [], o = 0; o < r.length; o++) {
            var s = r[o],
              u = n(s)
            a(s) ||
              (u = u.map(function (t) {
                return dt(t)
              })),
              i.push(u)
          }
          return ge(t, e, i)
        }
        function de(t, e, r) {
          return t && t.mergeDeep && a(e) ? t.mergeDeep(e) : vt(t, e) ? t : e
        }
        function he(t) {
          return function (e, r, n) {
            if (e && e.mergeDeepWith && a(r)) return e.mergeDeepWith(t, r)
            var i = t(e, r, n)
            return vt(e, i) ? e : i
          }
        }
        function ge(t, e, r) {
          return 0 ===
            (r = r.filter(function (t) {
              return 0 !== t.size
            })).length
            ? t
            : 0 !== t.size || t.__ownerID || 1 !== r.length
            ? t.withMutations(function (t) {
                for (
                  var n = e
                      ? function (r, n) {
                          t.update(n, _, function (t) {
                            return t === _ ? r : e(t, r, n)
                          })
                        }
                      : function (e, r) {
                          t.set(r, e)
                        },
                    i = 0;
                  i < r.length;
                  i++
                )
                  r[i].forEach(n)
              })
            : t.constructor(r[0])
        }
        function ye(t, e, r, n) {
          var i = t === _,
            o = e.next()
          if (o.done) {
            var a = i ? r : t,
              s = n(a)
            return s === a ? t : s
          }
          bt(i || (t && t.set), 'invalid keyPath')
          var u = o.value,
            c = i ? _ : t.get(u, _),
            l = ye(c, e, r, n)
          return l === c ? t : l === _ ? t.remove(u) : (i ? ie() : t).set(u, l)
        }
        function ve(t) {
          return (
            (t = ((t = (858993459 & (t -= (t >> 1) & 1431655765)) + ((t >> 2) & 858993459)) + (t >> 4)) & 252645135),
            (t += t >> 8),
            127 & (t += t >> 16)
          )
        }
        function me(t, e, r, n) {
          var i = n ? t : C(t)
          return (i[e] = r), i
        }
        function _e(t, e, r, n) {
          var i = t.length + 1
          if (n && e + 1 === i) return (t[e] = r), t
          for (var o = new Array(i), a = 0, s = 0; s < i; s++) s === e ? ((o[s] = r), (a = -1)) : (o[s] = t[s + a])
          return o
        }
        function be(t, e, r) {
          var n = t.length - 1
          if (r && e === n) return t.pop(), t
          for (var i = new Array(n), o = 0, a = 0; a < n; a++) a === e && (o = 1), (i[a] = t[a + o])
          return i
        }
        ;(Yt[Gt] = !0),
          (Yt[g] = Yt.remove),
          (Yt.removeIn = Yt.deleteIn),
          (Xt.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++) if (vt(r, i[o][0])) return i[o][1]
            return n
          }),
          (Xt.prototype.update = function (t, e, r, n, i, o, a) {
            for (var s = i === _, u = this.entries, c = 0, l = u.length; c < l && !vt(n, u[c][0]); c++);
            var f = c < l
            if (f ? u[c][1] === i : s) return this
            if ((x(a), (s || !f) && x(o), !s || 1 !== u.length)) {
              if (!f && !s && u.length >= Se) return ce(t, u, n, i)
              var p = t && t === this.ownerID,
                d = p ? u : C(u)
              return (
                f ? (s ? (c === l - 1 ? d.pop() : (d[c] = d.pop())) : (d[c] = [n, i])) : d.push([n, i]),
                p ? ((this.entries = d), this) : new Xt(t, d)
              )
            }
          }),
          (Jt.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = Dt(r))
            var i = 1 << ((0 === t ? e : e >>> t) & m),
              o = this.bitmap
            return 0 == (o & i) ? n : this.nodes[ve(o & (i - 1))].get(t + y, e, r, n)
          }),
          (Jt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n))
            var s = (0 === e ? r : r >>> e) & m,
              u = 1 << s,
              c = this.bitmap,
              l = 0 != (c & u)
            if (!l && i === _) return this
            var f = ve(c & (u - 1)),
              p = this.nodes,
              d = l ? p[f] : void 0,
              h = ae(d, t, e + y, r, n, i, o, a)
            if (h === d) return this
            if (!l && h && p.length >= we) return fe(t, p, c, s, h)
            if (l && !h && 2 === p.length && se(p[1 ^ f])) return p[1 ^ f]
            if (l && h && 1 === p.length && se(h)) return h
            var g = t && t === this.ownerID,
              v = l ? (h ? c : c ^ u) : c | u,
              b = l ? (h ? me(p, f, h, g) : be(p, f, g)) : _e(p, f, h, g)
            return g ? ((this.bitmap = v), (this.nodes = b), this) : new Jt(t, v, b)
          }),
          (Zt.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = Dt(r))
            var i = (0 === t ? e : e >>> t) & m,
              o = this.nodes[i]
            return o ? o.get(t + y, e, r, n) : n
          }),
          (Zt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n))
            var s = (0 === e ? r : r >>> e) & m,
              u = i === _,
              c = this.nodes,
              l = c[s]
            if (u && !l) return this
            var f = ae(l, t, e + y, r, n, i, o, a)
            if (f === l) return this
            var p = this.count
            if (l) {
              if (!f && --p < xe) return le(t, c, p, s)
            } else p++
            var d = t && t === this.ownerID,
              h = me(c, s, f, d)
            return d ? ((this.count = p), (this.nodes = h), this) : new Zt(t, p, h)
          }),
          (Qt.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++) if (vt(r, i[o][0])) return i[o][1]
            return n
          }),
          (Qt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n))
            var s = i === _
            if (r !== this.keyHash) return s ? this : (x(a), x(o), ue(this, t, e, r, [n, i]))
            for (var u = this.entries, c = 0, l = u.length; c < l && !vt(n, u[c][0]); c++);
            var f = c < l
            if (f ? u[c][1] === i : s) return this
            if ((x(a), (s || !f) && x(o), s && 2 === l)) return new $t(t, this.keyHash, u[1 ^ c])
            var p = t && t === this.ownerID,
              d = p ? u : C(u)
            return (
              f ? (s ? (c === l - 1 ? d.pop() : (d[c] = d.pop())) : (d[c] = [n, i])) : d.push([n, i]),
              p ? ((this.entries = d), this) : new Qt(t, this.keyHash, d)
            )
          }),
          ($t.prototype.get = function (t, e, r, n) {
            return vt(r, this.entry[0]) ? this.entry[1] : n
          }),
          ($t.prototype.update = function (t, e, r, n, i, o, a) {
            var s = i === _,
              u = vt(n, this.entry[0])
            return (u ? i === this.entry[1] : s)
              ? this
              : (x(a),
                s
                  ? void x(o)
                  : u
                  ? t && t === this.ownerID
                    ? ((this.entry[1] = i), this)
                    : new $t(t, this.keyHash, [n, i])
                  : (x(o), ue(this, t, e, Dt(n), [n, i])))
          }),
          (Xt.prototype.iterate = Qt.prototype.iterate =
            function (t, e) {
              for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++) if (!1 === t(r[e ? i - n : n])) return !1
            }),
          (Jt.prototype.iterate = Zt.prototype.iterate =
            function (t, e) {
              for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
                var o = r[e ? i - n : n]
                if (o && !1 === o.iterate(t, e)) return !1
              }
            }),
          ($t.prototype.iterate = function (t, e) {
            return t(this.entry)
          }),
          e(te, z),
          (te.prototype.next = function () {
            for (var t = this._type, e = this._stack; e; ) {
              var r,
                n = e.node,
                i = e.index++
              if (n.entry) {
                if (0 === i) return ee(t, n.entry)
              } else if (n.entries) {
                if (i <= (r = n.entries.length - 1)) return ee(t, n.entries[this._reverse ? r - i : i])
              } else if (i <= (r = n.nodes.length - 1)) {
                var o = n.nodes[this._reverse ? r - i : i]
                if (o) {
                  if (o.entry) return ee(t, o.entry)
                  e = this._stack = re(o, e)
                }
                continue
              }
              e = this._stack = this._stack.__prev
            }
            return U()
          })
        var Se = v / 4,
          we = v / 2,
          xe = v / 4
        function ke(t) {
          var e = Be()
          if (null == t) return e
          if (Ce(t)) return t
          var r = i(t),
            n = r.size
          return 0 === n
            ? e
            : (qt(n),
              n > 0 && n < v
                ? Ae(0, n, y, null, new De(r.toArray()))
                : e.withMutations(function (t) {
                    t.setSize(n),
                      r.forEach(function (e, r) {
                        return t.set(r, e)
                      })
                  }))
        }
        function Ce(t) {
          return !(!t || !t[Ee])
        }
        e(ke, kt),
          (ke.of = function () {
            return this(arguments)
          }),
          (ke.prototype.toString = function () {
            return this.__toString('List [', ']')
          }),
          (ke.prototype.get = function (t, e) {
            if ((t = O(this, t)) >= 0 && t < this.size) {
              var r = Pe(this, (t += this._origin))
              return r && r.array[t & m]
            }
            return e
          }),
          (ke.prototype.set = function (t, e) {
            return Re(this, t, e)
          }),
          (ke.prototype.remove = function (t) {
            return this.has(t) ? (0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1)) : this
          }),
          (ke.prototype.insert = function (t, e) {
            return this.splice(t, 0, e)
          }),
          (ke.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = this._origin = this._capacity = 0),
                (this._level = y),
                (this._root = this._tail = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Be()
          }),
          (ke.prototype.push = function () {
            var t = arguments,
              e = this.size
            return this.withMutations(function (r) {
              ze(r, 0, e + t.length)
              for (var n = 0; n < t.length; n++) r.set(e + n, t[n])
            })
          }),
          (ke.prototype.pop = function () {
            return ze(this, 0, -1)
          }),
          (ke.prototype.unshift = function () {
            var t = arguments
            return this.withMutations(function (e) {
              ze(e, -t.length)
              for (var r = 0; r < t.length; r++) e.set(r, t[r])
            })
          }),
          (ke.prototype.shift = function () {
            return ze(this, 1)
          }),
          (ke.prototype.merge = function () {
            return Ne(this, void 0, arguments)
          }),
          (ke.prototype.mergeWith = function (e) {
            return Ne(this, e, t.call(arguments, 1))
          }),
          (ke.prototype.mergeDeep = function () {
            return Ne(this, de, arguments)
          }),
          (ke.prototype.mergeDeepWith = function (e) {
            var r = t.call(arguments, 1)
            return Ne(this, he(e), r)
          }),
          (ke.prototype.setSize = function (t) {
            return ze(this, 0, t)
          }),
          (ke.prototype.slice = function (t, e) {
            var r = this.size
            return I(t, e, r) ? this : ze(this, M(t, r), K(e, r))
          }),
          (ke.prototype.__iterator = function (t, e) {
            var r = 0,
              n = Te(this, e)
            return new z(function () {
              var e = n()
              return e === Ke ? U() : N(t, r++, e)
            })
          }),
          (ke.prototype.__iterate = function (t, e) {
            for (var r, n = 0, i = Te(this, e); (r = i()) !== Ke && !1 !== t(r, n++, this); );
            return n
          }),
          (ke.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Ae(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash)
              : ((this.__ownerID = t), this)
          }),
          (ke.isList = Ce)
        var Ee = '@@__IMMUTABLE_LIST__@@',
          Oe = ke.prototype
        function De(t, e) {
          ;(this.array = t), (this.ownerID = e)
        }
        ;(Oe[Ee] = !0),
          (Oe[g] = Oe.remove),
          (Oe.setIn = Yt.setIn),
          (Oe.deleteIn = Oe.removeIn = Yt.removeIn),
          (Oe.update = Yt.update),
          (Oe.updateIn = Yt.updateIn),
          (Oe.mergeIn = Yt.mergeIn),
          (Oe.mergeDeepIn = Yt.mergeDeepIn),
          (Oe.withMutations = Yt.withMutations),
          (Oe.asMutable = Yt.asMutable),
          (Oe.asImmutable = Yt.asImmutable),
          (Oe.wasAltered = Yt.wasAltered),
          (De.prototype.removeBefore = function (t, e, r) {
            if (r === e ? 1 << e : 0 === this.array.length) return this
            var n = (r >>> e) & m
            if (n >= this.array.length) return new De([], t)
            var i,
              o = 0 === n
            if (e > 0) {
              var a = this.array[n]
              if ((i = a && a.removeBefore(t, e - y, r)) === a && o) return this
            }
            if (o && !i) return this
            var s = Fe(this, t)
            if (!o) for (var u = 0; u < n; u++) s.array[u] = void 0
            return i && (s.array[n] = i), s
          }),
          (De.prototype.removeAfter = function (t, e, r) {
            if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this
            var n,
              i = ((r - 1) >>> e) & m
            if (i >= this.array.length) return this
            if (e > 0) {
              var o = this.array[i]
              if ((n = o && o.removeAfter(t, e - y, r)) === o && i === this.array.length - 1) return this
            }
            var a = Fe(this, t)
            return a.array.splice(i + 1), n && (a.array[i] = n), a
          })
        var Ie,
          Me,
          Ke = {}
        function Te(t, e) {
          var r = t._origin,
            n = t._capacity,
            i = Ue(n),
            o = t._tail
          return a(t._root, t._level, 0)
          function a(t, e, r) {
            return 0 === e ? s(t, r) : u(t, e, r)
          }
          function s(t, a) {
            var s = a === i ? o && o.array : t && t.array,
              u = a > r ? 0 : r - a,
              c = n - a
            return (
              c > v && (c = v),
              function () {
                if (u === c) return Ke
                var t = e ? --c : u++
                return s && s[t]
              }
            )
          }
          function u(t, i, o) {
            var s,
              u = t && t.array,
              c = o > r ? 0 : (r - o) >> i,
              l = 1 + ((n - o) >> i)
            return (
              l > v && (l = v),
              function () {
                for (;;) {
                  if (s) {
                    var t = s()
                    if (t !== Ke) return t
                    s = null
                  }
                  if (c === l) return Ke
                  var r = e ? --l : c++
                  s = a(u && u[r], i - y, o + (r << i))
                }
              }
            )
          }
        }
        function Ae(t, e, r, n, i, o, a) {
          var s = Object.create(Oe)
          return (
            (s.size = e - t),
            (s._origin = t),
            (s._capacity = e),
            (s._level = r),
            (s._root = n),
            (s._tail = i),
            (s.__ownerID = o),
            (s.__hash = a),
            (s.__altered = !1),
            s
          )
        }
        function Be() {
          return Ie || (Ie = Ae(0, 0, y))
        }
        function Re(t, e, r) {
          if ((e = O(t, e)) != e) return t
          if (e >= t.size || e < 0)
            return t.withMutations(function (t) {
              e < 0 ? ze(t, e).set(0, r) : ze(t, 0, e + 1).set(e, r)
            })
          e += t._origin
          var n = t._tail,
            i = t._root,
            o = w(S)
          return (
            e >= Ue(t._capacity) ? (n = Le(n, t.__ownerID, 0, e, r, o)) : (i = Le(i, t.__ownerID, t._level, e, r, o)),
            o.value
              ? t.__ownerID
                ? ((t._root = i), (t._tail = n), (t.__hash = void 0), (t.__altered = !0), t)
                : Ae(t._origin, t._capacity, t._level, i, n)
              : t
          )
        }
        function Le(t, e, r, n, i, o) {
          var a,
            s = (n >>> r) & m,
            u = t && s < t.array.length
          if (!u && void 0 === i) return t
          if (r > 0) {
            var c = t && t.array[s],
              l = Le(c, e, r - y, n, i, o)
            return l === c ? t : (((a = Fe(t, e)).array[s] = l), a)
          }
          return u && t.array[s] === i
            ? t
            : (x(o), (a = Fe(t, e)), void 0 === i && s === a.array.length - 1 ? a.array.pop() : (a.array[s] = i), a)
        }
        function Fe(t, e) {
          return e && t && e === t.ownerID ? t : new De(t ? t.array.slice() : [], e)
        }
        function Pe(t, e) {
          if (e >= Ue(t._capacity)) return t._tail
          if (e < 1 << (t._level + y)) {
            for (var r = t._root, n = t._level; r && n > 0; ) (r = r.array[(e >>> n) & m]), (n -= y)
            return r
          }
        }
        function ze(t, e, r) {
          void 0 !== e && (e |= 0), void 0 !== r && (r |= 0)
          var n = t.__ownerID || new k(),
            i = t._origin,
            o = t._capacity,
            a = i + e,
            s = void 0 === r ? o : r < 0 ? o + r : i + r
          if (a === i && s === o) return t
          if (a >= s) return t.clear()
          for (var u = t._level, c = t._root, l = 0; a + l < 0; )
            (c = new De(c && c.array.length ? [void 0, c] : [], n)), (l += 1 << (u += y))
          l && ((a += l), (i += l), (s += l), (o += l))
          for (var f = Ue(o), p = Ue(s); p >= 1 << (u + y); ) (c = new De(c && c.array.length ? [c] : [], n)), (u += y)
          var d = t._tail,
            h = p < f ? Pe(t, s - 1) : p > f ? new De([], n) : d
          if (d && p > f && a < o && d.array.length) {
            for (var g = (c = Fe(c, n)), v = u; v > y; v -= y) {
              var _ = (f >>> v) & m
              g = g.array[_] = Fe(g.array[_], n)
            }
            g.array[(f >>> y) & m] = d
          }
          if ((s < o && (h = h && h.removeAfter(n, 0, s)), a >= p))
            (a -= p), (s -= p), (u = y), (c = null), (h = h && h.removeBefore(n, 0, a))
          else if (a > i || p < f) {
            for (l = 0; c; ) {
              var b = (a >>> u) & m
              if ((b !== p >>> u) & m) break
              b && (l += (1 << u) * b), (u -= y), (c = c.array[b])
            }
            c && a > i && (c = c.removeBefore(n, u, a - l)),
              c && p < f && (c = c.removeAfter(n, u, p - l)),
              l && ((a -= l), (s -= l))
          }
          return t.__ownerID
            ? ((t.size = s - a),
              (t._origin = a),
              (t._capacity = s),
              (t._level = u),
              (t._root = c),
              (t._tail = h),
              (t.__hash = void 0),
              (t.__altered = !0),
              t)
            : Ae(a, s, u, c, h)
        }
        function Ne(t, e, r) {
          for (var n = [], o = 0, s = 0; s < r.length; s++) {
            var u = r[s],
              c = i(u)
            c.size > o && (o = c.size),
              a(u) ||
                (c = c.map(function (t) {
                  return dt(t)
                })),
              n.push(c)
          }
          return o > t.size && (t = t.setSize(o)), ge(t, e, n)
        }
        function Ue(t) {
          return t < v ? 0 : ((t - 1) >>> y) << y
        }
        function je(t) {
          return null == t
            ? Ve()
            : qe(t)
            ? t
            : Ve().withMutations(function (e) {
                var r = n(t)
                qt(r.size),
                  r.forEach(function (t, r) {
                    return e.set(r, t)
                  })
              })
        }
        function qe(t) {
          return Vt(t) && l(t)
        }
        function He(t, e, r, n) {
          var i = Object.create(je.prototype)
          return (i.size = t ? t.size : 0), (i._map = t), (i._list = e), (i.__ownerID = r), (i.__hash = n), i
        }
        function Ve() {
          return Me || (Me = He(ie(), Be()))
        }
        function We(t, e, r) {
          var n,
            i,
            o = t._map,
            a = t._list,
            s = o.get(e),
            u = void 0 !== s
          if (r === _) {
            if (!u) return t
            a.size >= v && a.size >= 2 * o.size
              ? ((n = (i = a.filter(function (t, e) {
                  return void 0 !== t && s !== e
                }))
                  .toKeyedSeq()
                  .map(function (t) {
                    return t[0]
                  })
                  .flip()
                  .toMap()),
                t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID))
              : ((n = o.remove(e)), (i = s === a.size - 1 ? a.pop() : a.set(s, void 0)))
          } else if (u) {
            if (r === a.get(s)[1]) return t
            ;(n = o), (i = a.set(s, [e, r]))
          } else (n = o.set(e, a.size)), (i = a.set(a.size, [e, r]))
          return t.__ownerID ? ((t.size = n.size), (t._map = n), (t._list = i), (t.__hash = void 0), t) : He(n, i)
        }
        function Ge(t, e) {
          ;(this._iter = t), (this._useKeys = e), (this.size = t.size)
        }
        function Ye(t) {
          ;(this._iter = t), (this.size = t.size)
        }
        function Xe(t) {
          ;(this._iter = t), (this.size = t.size)
        }
        function Je(t) {
          ;(this._iter = t), (this.size = t.size)
        }
        function Ze(t) {
          var e = mr(t)
          return (
            (e._iter = t),
            (e.size = t.size),
            (e.flip = function () {
              return t
            }),
            (e.reverse = function () {
              var e = t.reverse.apply(this)
              return (
                (e.flip = function () {
                  return t.reverse()
                }),
                e
              )
            }),
            (e.has = function (e) {
              return t.includes(e)
            }),
            (e.includes = function (e) {
              return t.has(e)
            }),
            (e.cacheResult = _r),
            (e.__iterateUncached = function (e, r) {
              var n = this
              return t.__iterate(function (t, r) {
                return !1 !== e(r, t, n)
              }, r)
            }),
            (e.__iteratorUncached = function (e, r) {
              if (e === R) {
                var n = t.__iterator(e, r)
                return new z(function () {
                  var t = n.next()
                  if (!t.done) {
                    var e = t.value[0]
                    ;(t.value[0] = t.value[1]), (t.value[1] = e)
                  }
                  return t
                })
              }
              return t.__iterator(e === B ? A : B, r)
            }),
            e
          )
        }
        function Qe(t, e, r) {
          var n = mr(t)
          return (
            (n.size = t.size),
            (n.has = function (e) {
              return t.has(e)
            }),
            (n.get = function (n, i) {
              var o = t.get(n, _)
              return o === _ ? i : e.call(r, o, n, t)
            }),
            (n.__iterateUncached = function (n, i) {
              var o = this
              return t.__iterate(function (t, i, a) {
                return !1 !== n(e.call(r, t, i, a), i, o)
              }, i)
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = t.__iterator(R, i)
              return new z(function () {
                var i = o.next()
                if (i.done) return i
                var a = i.value,
                  s = a[0]
                return N(n, s, e.call(r, a[1], s, t), i)
              })
            }),
            n
          )
        }
        function $e(t, e) {
          var r = mr(t)
          return (
            (r._iter = t),
            (r.size = t.size),
            (r.reverse = function () {
              return t
            }),
            t.flip &&
              (r.flip = function () {
                var e = Ze(t)
                return (
                  (e.reverse = function () {
                    return t.flip()
                  }),
                  e
                )
              }),
            (r.get = function (r, n) {
              return t.get(e ? r : -1 - r, n)
            }),
            (r.has = function (r) {
              return t.has(e ? r : -1 - r)
            }),
            (r.includes = function (e) {
              return t.includes(e)
            }),
            (r.cacheResult = _r),
            (r.__iterate = function (e, r) {
              var n = this
              return t.__iterate(function (t, r) {
                return e(t, r, n)
              }, !r)
            }),
            (r.__iterator = function (e, r) {
              return t.__iterator(e, !r)
            }),
            r
          )
        }
        function tr(t, e, r, n) {
          var i = mr(t)
          return (
            n &&
              ((i.has = function (n) {
                var i = t.get(n, _)
                return i !== _ && !!e.call(r, i, n, t)
              }),
              (i.get = function (n, i) {
                var o = t.get(n, _)
                return o !== _ && e.call(r, o, n, t) ? o : i
              })),
            (i.__iterateUncached = function (i, o) {
              var a = this,
                s = 0
              return (
                t.__iterate(function (t, o, u) {
                  if (e.call(r, t, o, u)) return s++, i(t, n ? o : s - 1, a)
                }, o),
                s
              )
            }),
            (i.__iteratorUncached = function (i, o) {
              var a = t.__iterator(R, o),
                s = 0
              return new z(function () {
                for (;;) {
                  var o = a.next()
                  if (o.done) return o
                  var u = o.value,
                    c = u[0],
                    l = u[1]
                  if (e.call(r, l, c, t)) return N(i, n ? c : s++, l, o)
                }
              })
            }),
            i
          )
        }
        function er(t, e, r) {
          var n = Ht().asMutable()
          return (
            t.__iterate(function (i, o) {
              n.update(e.call(r, i, o, t), 0, function (t) {
                return t + 1
              })
            }),
            n.asImmutable()
          )
        }
        function rr(t, e, r) {
          var n = s(t),
            i = (l(t) ? je() : Ht()).asMutable()
          t.__iterate(function (o, a) {
            i.update(e.call(r, o, a, t), function (t) {
              return (t = t || []).push(n ? [a, o] : o), t
            })
          })
          var o = vr(t)
          return i.map(function (e) {
            return hr(t, o(e))
          })
        }
        function nr(t, e, r, n) {
          var i = t.size
          if ((void 0 !== e && (e |= 0), void 0 !== r && (r |= 0), I(e, r, i))) return t
          var o = M(e, i),
            a = K(r, i)
          if (o != o || a != a) return nr(t.toSeq().cacheResult(), e, r, n)
          var s,
            u = a - o
          u == u && (s = u < 0 ? 0 : u)
          var c = mr(t)
          return (
            (c.size = 0 === s ? s : (t.size && s) || void 0),
            !n &&
              ot(t) &&
              s >= 0 &&
              (c.get = function (e, r) {
                return (e = O(this, e)) >= 0 && e < s ? t.get(e + o, r) : r
              }),
            (c.__iterateUncached = function (e, r) {
              var i = this
              if (0 === s) return 0
              if (r) return this.cacheResult().__iterate(e, r)
              var a = 0,
                u = !0,
                c = 0
              return (
                t.__iterate(function (t, r) {
                  if (!u || !(u = a++ < o)) return c++, !1 !== e(t, n ? r : c - 1, i) && c !== s
                }),
                c
              )
            }),
            (c.__iteratorUncached = function (e, r) {
              if (0 !== s && r) return this.cacheResult().__iterator(e, r)
              var i = 0 !== s && t.__iterator(e, r),
                a = 0,
                u = 0
              return new z(function () {
                for (; a++ < o; ) i.next()
                if (++u > s) return U()
                var t = i.next()
                return n || e === B ? t : N(e, u - 1, e === A ? void 0 : t.value[1], t)
              })
            }),
            c
          )
        }
        function ir(t, e, r) {
          var n = mr(t)
          return (
            (n.__iterateUncached = function (n, i) {
              var o = this
              if (i) return this.cacheResult().__iterate(n, i)
              var a = 0
              return (
                t.__iterate(function (t, i, s) {
                  return e.call(r, t, i, s) && ++a && n(t, i, o)
                }),
                a
              )
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = this
              if (i) return this.cacheResult().__iterator(n, i)
              var a = t.__iterator(R, i),
                s = !0
              return new z(function () {
                if (!s) return U()
                var t = a.next()
                if (t.done) return t
                var i = t.value,
                  u = i[0],
                  c = i[1]
                return e.call(r, c, u, o) ? (n === R ? t : N(n, u, c, t)) : ((s = !1), U())
              })
            }),
            n
          )
        }
        function or(t, e, r, n) {
          var i = mr(t)
          return (
            (i.__iterateUncached = function (i, o) {
              var a = this
              if (o) return this.cacheResult().__iterate(i, o)
              var s = !0,
                u = 0
              return (
                t.__iterate(function (t, o, c) {
                  if (!s || !(s = e.call(r, t, o, c))) return u++, i(t, n ? o : u - 1, a)
                }),
                u
              )
            }),
            (i.__iteratorUncached = function (i, o) {
              var a = this
              if (o) return this.cacheResult().__iterator(i, o)
              var s = t.__iterator(R, o),
                u = !0,
                c = 0
              return new z(function () {
                var t, o, l
                do {
                  if ((t = s.next()).done) return n || i === B ? t : N(i, c++, i === A ? void 0 : t.value[1], t)
                  var f = t.value
                  ;(o = f[0]), (l = f[1]), u && (u = e.call(r, l, o, a))
                } while (u)
                return i === R ? t : N(i, o, l, t)
              })
            }),
            i
          )
        }
        function ar(t, e) {
          var r = s(t),
            i = [t]
              .concat(e)
              .map(function (t) {
                return a(t) ? r && (t = n(t)) : (t = r ? st(t) : ut(Array.isArray(t) ? t : [t])), t
              })
              .filter(function (t) {
                return 0 !== t.size
              })
          if (0 === i.length) return t
          if (1 === i.length) {
            var o = i[0]
            if (o === t || (r && s(o)) || (u(t) && u(o))) return o
          }
          var c = new et(i)
          return (
            r ? (c = c.toKeyedSeq()) : u(t) || (c = c.toSetSeq()),
            ((c = c.flatten(!0)).size = i.reduce(function (t, e) {
              if (void 0 !== t) {
                var r = e.size
                if (void 0 !== r) return t + r
              }
            }, 0)),
            c
          )
        }
        function sr(t, e, r) {
          var n = mr(t)
          return (
            (n.__iterateUncached = function (n, i) {
              var o = 0,
                s = !1
              function u(t, c) {
                var l = this
                t.__iterate(function (t, i) {
                  return (!e || c < e) && a(t) ? u(t, c + 1) : !1 === n(t, r ? i : o++, l) && (s = !0), !s
                }, i)
              }
              return u(t, 0), o
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = t.__iterator(n, i),
                s = [],
                u = 0
              return new z(function () {
                for (; o; ) {
                  var t = o.next()
                  if (!1 === t.done) {
                    var c = t.value
                    if ((n === R && (c = c[1]), (e && !(s.length < e)) || !a(c))) return r ? t : N(n, u++, c, t)
                    s.push(o), (o = c.__iterator(n, i))
                  } else o = s.pop()
                }
                return U()
              })
            }),
            n
          )
        }
        function ur(t, e, r) {
          var n = vr(t)
          return t
            .toSeq()
            .map(function (i, o) {
              return n(e.call(r, i, o, t))
            })
            .flatten(!0)
        }
        function cr(t, e) {
          var r = mr(t)
          return (
            (r.size = t.size && 2 * t.size - 1),
            (r.__iterateUncached = function (r, n) {
              var i = this,
                o = 0
              return (
                t.__iterate(function (t, n) {
                  return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i)
                }, n),
                o
              )
            }),
            (r.__iteratorUncached = function (r, n) {
              var i,
                o = t.__iterator(B, n),
                a = 0
              return new z(function () {
                return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? N(r, a++, e) : N(r, a++, i.value, i)
              })
            }),
            r
          )
        }
        function lr(t, e, r) {
          e || (e = br)
          var n = s(t),
            i = 0,
            o = t
              .toSeq()
              .map(function (e, n) {
                return [n, e, i++, r ? r(e, n, t) : e]
              })
              .toArray()
          return (
            o
              .sort(function (t, r) {
                return e(t[3], r[3]) || t[2] - r[2]
              })
              .forEach(
                n
                  ? function (t, e) {
                      o[e].length = 2
                    }
                  : function (t, e) {
                      o[e] = t[1]
                    },
              ),
            n ? Y(o) : u(t) ? X(o) : J(o)
          )
        }
        function fr(t, e, r) {
          if ((e || (e = br), r)) {
            var n = t
              .toSeq()
              .map(function (e, n) {
                return [e, r(e, n, t)]
              })
              .reduce(function (t, r) {
                return pr(e, t[1], r[1]) ? r : t
              })
            return n && n[0]
          }
          return t.reduce(function (t, r) {
            return pr(e, t, r) ? r : t
          })
        }
        function pr(t, e, r) {
          var n = t(r, e)
          return (0 === n && r !== e && (null == r || r != r)) || n > 0
        }
        function dr(t, e, n) {
          var i = mr(t)
          return (
            (i.size = new et(n)
              .map(function (t) {
                return t.size
              })
              .min()),
            (i.__iterate = function (t, e) {
              for (var r, n = this.__iterator(B, e), i = 0; !(r = n.next()).done && !1 !== t(r.value, i++, this); );
              return i
            }),
            (i.__iteratorUncached = function (t, i) {
              var o = n.map(function (t) {
                  return (t = r(t)), H(i ? t.reverse() : t)
                }),
                a = 0,
                s = !1
              return new z(function () {
                var r
                return (
                  s ||
                    ((r = o.map(function (t) {
                      return t.next()
                    })),
                    (s = r.some(function (t) {
                      return t.done
                    }))),
                  s
                    ? U()
                    : N(
                        t,
                        a++,
                        e.apply(
                          null,
                          r.map(function (t) {
                            return t.value
                          }),
                        ),
                      )
                )
              })
            }),
            i
          )
        }
        function hr(t, e) {
          return ot(t) ? e : t.constructor(e)
        }
        function gr(t) {
          if (t !== Object(t)) throw new TypeError('Expected [K, V] tuple: ' + t)
        }
        function yr(t) {
          return qt(t.size), E(t)
        }
        function vr(t) {
          return s(t) ? n : u(t) ? i : o
        }
        function mr(t) {
          return Object.create((s(t) ? Y : u(t) ? X : J).prototype)
        }
        function _r() {
          return this._iter.cacheResult
            ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
            : G.prototype.cacheResult.call(this)
        }
        function br(t, e) {
          return t > e ? 1 : t < e ? -1 : 0
        }
        function Sr(t) {
          var e = H(t)
          if (!e) {
            if (!W(t)) throw new TypeError('Expected iterable or array-like: ' + t)
            e = H(r(t))
          }
          return e
        }
        function wr(t, e) {
          var r,
            n = function (o) {
              if (o instanceof n) return o
              if (!(this instanceof n)) return new n(o)
              if (!r) {
                r = !0
                var a = Object.keys(t)
                Er(i, a), (i.size = a.length), (i._name = e), (i._keys = a), (i._defaultValues = t)
              }
              this._map = Ht(o)
            },
            i = (n.prototype = Object.create(xr))
          return (i.constructor = n), n
        }
        e(je, Ht),
          (je.of = function () {
            return this(arguments)
          }),
          (je.prototype.toString = function () {
            return this.__toString('OrderedMap {', '}')
          }),
          (je.prototype.get = function (t, e) {
            var r = this._map.get(t)
            return void 0 !== r ? this._list.get(r)[1] : e
          }),
          (je.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
              : Ve()
          }),
          (je.prototype.set = function (t, e) {
            return We(this, t, e)
          }),
          (je.prototype.remove = function (t) {
            return We(this, t, _)
          }),
          (je.prototype.wasAltered = function () {
            return this._map.wasAltered() || this._list.wasAltered()
          }),
          (je.prototype.__iterate = function (t, e) {
            var r = this
            return this._list.__iterate(function (e) {
              return e && t(e[1], e[0], r)
            }, e)
          }),
          (je.prototype.__iterator = function (t, e) {
            return this._list.fromEntrySeq().__iterator(t, e)
          }),
          (je.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this
            var e = this._map.__ensureOwner(t),
              r = this._list.__ensureOwner(t)
            return t ? He(e, r, t, this.__hash) : ((this.__ownerID = t), (this._map = e), (this._list = r), this)
          }),
          (je.isOrderedMap = qe),
          (je.prototype[h] = !0),
          (je.prototype[g] = je.prototype.remove),
          e(Ge, Y),
          (Ge.prototype.get = function (t, e) {
            return this._iter.get(t, e)
          }),
          (Ge.prototype.has = function (t) {
            return this._iter.has(t)
          }),
          (Ge.prototype.valueSeq = function () {
            return this._iter.valueSeq()
          }),
          (Ge.prototype.reverse = function () {
            var t = this,
              e = $e(this, !0)
            return (
              this._useKeys ||
                (e.valueSeq = function () {
                  return t._iter.toSeq().reverse()
                }),
              e
            )
          }),
          (Ge.prototype.map = function (t, e) {
            var r = this,
              n = Qe(this, t, e)
            return (
              this._useKeys ||
                (n.valueSeq = function () {
                  return r._iter.toSeq().map(t, e)
                }),
              n
            )
          }),
          (Ge.prototype.__iterate = function (t, e) {
            var r,
              n = this
            return this._iter.__iterate(
              this._useKeys
                ? function (e, r) {
                    return t(e, r, n)
                  }
                : ((r = e ? yr(this) : 0),
                  function (i) {
                    return t(i, e ? --r : r++, n)
                  }),
              e,
            )
          }),
          (Ge.prototype.__iterator = function (t, e) {
            if (this._useKeys) return this._iter.__iterator(t, e)
            var r = this._iter.__iterator(B, e),
              n = e ? yr(this) : 0
            return new z(function () {
              var i = r.next()
              return i.done ? i : N(t, e ? --n : n++, i.value, i)
            })
          }),
          (Ge.prototype[h] = !0),
          e(Ye, X),
          (Ye.prototype.includes = function (t) {
            return this._iter.includes(t)
          }),
          (Ye.prototype.__iterate = function (t, e) {
            var r = this,
              n = 0
            return this._iter.__iterate(function (e) {
              return t(e, n++, r)
            }, e)
          }),
          (Ye.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e),
              n = 0
            return new z(function () {
              var e = r.next()
              return e.done ? e : N(t, n++, e.value, e)
            })
          }),
          e(Xe, J),
          (Xe.prototype.has = function (t) {
            return this._iter.includes(t)
          }),
          (Xe.prototype.__iterate = function (t, e) {
            var r = this
            return this._iter.__iterate(function (e) {
              return t(e, e, r)
            }, e)
          }),
          (Xe.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e)
            return new z(function () {
              var e = r.next()
              return e.done ? e : N(t, e.value, e.value, e)
            })
          }),
          e(Je, Y),
          (Je.prototype.entrySeq = function () {
            return this._iter.toSeq()
          }),
          (Je.prototype.__iterate = function (t, e) {
            var r = this
            return this._iter.__iterate(function (e) {
              if (e) {
                gr(e)
                var n = a(e)
                return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r)
              }
            }, e)
          }),
          (Je.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e)
            return new z(function () {
              for (;;) {
                var e = r.next()
                if (e.done) return e
                var n = e.value
                if (n) {
                  gr(n)
                  var i = a(n)
                  return N(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e)
                }
              }
            })
          }),
          (Ye.prototype.cacheResult =
            Ge.prototype.cacheResult =
            Xe.prototype.cacheResult =
            Je.prototype.cacheResult =
              _r),
          e(wr, xt),
          (wr.prototype.toString = function () {
            return this.__toString(Cr(this) + ' {', '}')
          }),
          (wr.prototype.has = function (t) {
            return this._defaultValues.hasOwnProperty(t)
          }),
          (wr.prototype.get = function (t, e) {
            if (!this.has(t)) return e
            var r = this._defaultValues[t]
            return this._map ? this._map.get(t, r) : r
          }),
          (wr.prototype.clear = function () {
            if (this.__ownerID) return this._map && this._map.clear(), this
            var t = this.constructor
            return t._empty || (t._empty = kr(this, ie()))
          }),
          (wr.prototype.set = function (t, e) {
            if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + Cr(this))
            var r = this._map && this._map.set(t, e)
            return this.__ownerID || r === this._map ? this : kr(this, r)
          }),
          (wr.prototype.remove = function (t) {
            if (!this.has(t)) return this
            var e = this._map && this._map.remove(t)
            return this.__ownerID || e === this._map ? this : kr(this, e)
          }),
          (wr.prototype.wasAltered = function () {
            return this._map.wasAltered()
          }),
          (wr.prototype.__iterator = function (t, e) {
            var r = this
            return n(this._defaultValues)
              .map(function (t, e) {
                return r.get(e)
              })
              .__iterator(t, e)
          }),
          (wr.prototype.__iterate = function (t, e) {
            var r = this
            return n(this._defaultValues)
              .map(function (t, e) {
                return r.get(e)
              })
              .__iterate(t, e)
          }),
          (wr.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this
            var e = this._map && this._map.__ensureOwner(t)
            return t ? kr(this, e, t) : ((this.__ownerID = t), (this._map = e), this)
          })
        var xr = wr.prototype
        function kr(t, e, r) {
          var n = Object.create(Object.getPrototypeOf(t))
          return (n._map = e), (n.__ownerID = r), n
        }
        function Cr(t) {
          return t._name || t.constructor.name || 'Record'
        }
        function Er(t, e) {
          try {
            e.forEach(Or.bind(void 0, t))
          } catch (r) {}
        }
        function Or(t, e) {
          Object.defineProperty(t, e, {
            get: function () {
              return this.get(e)
            },
            set: function (t) {
              bt(this.__ownerID, 'Cannot set on an immutable record.'), this.set(e, t)
            },
          })
        }
        function Dr(t) {
          return null == t
            ? Rr()
            : Ir(t) && !l(t)
            ? t
            : Rr().withMutations(function (e) {
                var r = o(t)
                qt(r.size),
                  r.forEach(function (t) {
                    return e.add(t)
                  })
              })
        }
        function Ir(t) {
          return !(!t || !t[Kr])
        }
        ;(xr[g] = xr.remove),
          (xr.deleteIn = xr.removeIn = Yt.removeIn),
          (xr.merge = Yt.merge),
          (xr.mergeWith = Yt.mergeWith),
          (xr.mergeIn = Yt.mergeIn),
          (xr.mergeDeep = Yt.mergeDeep),
          (xr.mergeDeepWith = Yt.mergeDeepWith),
          (xr.mergeDeepIn = Yt.mergeDeepIn),
          (xr.setIn = Yt.setIn),
          (xr.update = Yt.update),
          (xr.updateIn = Yt.updateIn),
          (xr.withMutations = Yt.withMutations),
          (xr.asMutable = Yt.asMutable),
          (xr.asImmutable = Yt.asImmutable),
          e(Dr, Ct),
          (Dr.of = function () {
            return this(arguments)
          }),
          (Dr.fromKeys = function (t) {
            return this(n(t).keySeq())
          }),
          (Dr.prototype.toString = function () {
            return this.__toString('Set {', '}')
          }),
          (Dr.prototype.has = function (t) {
            return this._map.has(t)
          }),
          (Dr.prototype.add = function (t) {
            return Ar(this, this._map.set(t, !0))
          }),
          (Dr.prototype.remove = function (t) {
            return Ar(this, this._map.remove(t))
          }),
          (Dr.prototype.clear = function () {
            return Ar(this, this._map.clear())
          }),
          (Dr.prototype.union = function () {
            var e = t.call(arguments, 0)
            return 0 ===
              (e = e.filter(function (t) {
                return 0 !== t.size
              })).length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== e.length
              ? this.withMutations(function (t) {
                  for (var r = 0; r < e.length; r++)
                    o(e[r]).forEach(function (e) {
                      return t.add(e)
                    })
                })
              : this.constructor(e[0])
          }),
          (Dr.prototype.intersect = function () {
            var e = t.call(arguments, 0)
            if (0 === e.length) return this
            e = e.map(function (t) {
              return o(t)
            })
            var r = this
            return this.withMutations(function (t) {
              r.forEach(function (r) {
                e.every(function (t) {
                  return t.includes(r)
                }) || t.remove(r)
              })
            })
          }),
          (Dr.prototype.subtract = function () {
            var e = t.call(arguments, 0)
            if (0 === e.length) return this
            e = e.map(function (t) {
              return o(t)
            })
            var r = this
            return this.withMutations(function (t) {
              r.forEach(function (r) {
                e.some(function (t) {
                  return t.includes(r)
                }) && t.remove(r)
              })
            })
          }),
          (Dr.prototype.merge = function () {
            return this.union.apply(this, arguments)
          }),
          (Dr.prototype.mergeWith = function (e) {
            var r = t.call(arguments, 1)
            return this.union.apply(this, r)
          }),
          (Dr.prototype.sort = function (t) {
            return Lr(lr(this, t))
          }),
          (Dr.prototype.sortBy = function (t, e) {
            return Lr(lr(this, e, t))
          }),
          (Dr.prototype.wasAltered = function () {
            return this._map.wasAltered()
          }),
          (Dr.prototype.__iterate = function (t, e) {
            var r = this
            return this._map.__iterate(function (e, n) {
              return t(n, n, r)
            }, e)
          }),
          (Dr.prototype.__iterator = function (t, e) {
            return this._map
              .map(function (t, e) {
                return e
              })
              .__iterator(t, e)
          }),
          (Dr.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this
            var e = this._map.__ensureOwner(t)
            return t ? this.__make(e, t) : ((this.__ownerID = t), (this._map = e), this)
          }),
          (Dr.isSet = Ir)
        var Mr,
          Kr = '@@__IMMUTABLE_SET__@@',
          Tr = Dr.prototype
        function Ar(t, e) {
          return t.__ownerID
            ? ((t.size = e.size), (t._map = e), t)
            : e === t._map
            ? t
            : 0 === e.size
            ? t.__empty()
            : t.__make(e)
        }
        function Br(t, e) {
          var r = Object.create(Tr)
          return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r
        }
        function Rr() {
          return Mr || (Mr = Br(ie()))
        }
        function Lr(t) {
          return null == t
            ? Ur()
            : Fr(t)
            ? t
            : Ur().withMutations(function (e) {
                var r = o(t)
                qt(r.size),
                  r.forEach(function (t) {
                    return e.add(t)
                  })
              })
        }
        function Fr(t) {
          return Ir(t) && l(t)
        }
        ;(Tr[Kr] = !0),
          (Tr[g] = Tr.remove),
          (Tr.mergeDeep = Tr.merge),
          (Tr.mergeDeepWith = Tr.mergeWith),
          (Tr.withMutations = Yt.withMutations),
          (Tr.asMutable = Yt.asMutable),
          (Tr.asImmutable = Yt.asImmutable),
          (Tr.__empty = Rr),
          (Tr.__make = Br),
          e(Lr, Dr),
          (Lr.of = function () {
            return this(arguments)
          }),
          (Lr.fromKeys = function (t) {
            return this(n(t).keySeq())
          }),
          (Lr.prototype.toString = function () {
            return this.__toString('OrderedSet {', '}')
          }),
          (Lr.isOrderedSet = Fr)
        var Pr,
          zr = Lr.prototype
        function Nr(t, e) {
          var r = Object.create(zr)
          return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r
        }
        function Ur() {
          return Pr || (Pr = Nr(Ve()))
        }
        function jr(t) {
          return null == t ? Yr() : qr(t) ? t : Yr().unshiftAll(t)
        }
        function qr(t) {
          return !(!t || !t[Vr])
        }
        ;(zr[h] = !0),
          (zr.__empty = Ur),
          (zr.__make = Nr),
          e(jr, kt),
          (jr.of = function () {
            return this(arguments)
          }),
          (jr.prototype.toString = function () {
            return this.__toString('Stack [', ']')
          }),
          (jr.prototype.get = function (t, e) {
            var r = this._head
            for (t = O(this, t); r && t--; ) r = r.next
            return r ? r.value : e
          }),
          (jr.prototype.peek = function () {
            return this._head && this._head.value
          }),
          (jr.prototype.push = function () {
            if (0 === arguments.length) return this
            for (var t = this.size + arguments.length, e = this._head, r = arguments.length - 1; r >= 0; r--)
              e = { value: arguments[r], next: e }
            return this.__ownerID
              ? ((this.size = t), (this._head = e), (this.__hash = void 0), (this.__altered = !0), this)
              : Gr(t, e)
          }),
          (jr.prototype.pushAll = function (t) {
            if (0 === (t = i(t)).size) return this
            qt(t.size)
            var e = this.size,
              r = this._head
            return (
              t.reverse().forEach(function (t) {
                e++, (r = { value: t, next: r })
              }),
              this.__ownerID
                ? ((this.size = e), (this._head = r), (this.__hash = void 0), (this.__altered = !0), this)
                : Gr(e, r)
            )
          }),
          (jr.prototype.pop = function () {
            return this.slice(1)
          }),
          (jr.prototype.unshift = function () {
            return this.push.apply(this, arguments)
          }),
          (jr.prototype.unshiftAll = function (t) {
            return this.pushAll(t)
          }),
          (jr.prototype.shift = function () {
            return this.pop.apply(this, arguments)
          }),
          (jr.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0), (this._head = void 0), (this.__hash = void 0), (this.__altered = !0), this)
              : Yr()
          }),
          (jr.prototype.slice = function (t, e) {
            if (I(t, e, this.size)) return this
            var r = M(t, this.size)
            if (K(e, this.size) !== this.size) return kt.prototype.slice.call(this, t, e)
            for (var n = this.size - r, i = this._head; r--; ) i = i.next
            return this.__ownerID
              ? ((this.size = n), (this._head = i), (this.__hash = void 0), (this.__altered = !0), this)
              : Gr(n, i)
          }),
          (jr.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Gr(this.size, this._head, t, this.__hash)
              : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          (jr.prototype.__iterate = function (t, e) {
            if (e) return this.reverse().__iterate(t)
            for (var r = 0, n = this._head; n && !1 !== t(n.value, r++, this); ) n = n.next
            return r
          }),
          (jr.prototype.__iterator = function (t, e) {
            if (e) return this.reverse().__iterator(t)
            var r = 0,
              n = this._head
            return new z(function () {
              if (n) {
                var e = n.value
                return (n = n.next), N(t, r++, e)
              }
              return U()
            })
          }),
          (jr.isStack = qr)
        var Hr,
          Vr = '@@__IMMUTABLE_STACK__@@',
          Wr = jr.prototype
        function Gr(t, e, r, n) {
          var i = Object.create(Wr)
          return (i.size = t), (i._head = e), (i.__ownerID = r), (i.__hash = n), (i.__altered = !1), i
        }
        function Yr() {
          return Hr || (Hr = Gr(0))
        }
        function Xr(t, e) {
          var r = function (r) {
            t.prototype[r] = e[r]
          }
          return (
            Object.keys(e).forEach(r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r), t
          )
        }
        ;(Wr[Vr] = !0),
          (Wr.withMutations = Yt.withMutations),
          (Wr.asMutable = Yt.asMutable),
          (Wr.asImmutable = Yt.asImmutable),
          (Wr.wasAltered = Yt.wasAltered),
          (r.Iterator = z),
          Xr(r, {
            toArray: function () {
              qt(this.size)
              var t = new Array(this.size || 0)
              return (
                this.valueSeq().__iterate(function (e, r) {
                  t[r] = e
                }),
                t
              )
            },
            toIndexedSeq: function () {
              return new Ye(this)
            },
            toJS: function () {
              return this.toSeq()
                .map(function (t) {
                  return t && 'function' == typeof t.toJS ? t.toJS() : t
                })
                .__toJS()
            },
            toJSON: function () {
              return this.toSeq()
                .map(function (t) {
                  return t && 'function' == typeof t.toJSON ? t.toJSON() : t
                })
                .__toJS()
            },
            toKeyedSeq: function () {
              return new Ge(this, !0)
            },
            toMap: function () {
              return Ht(this.toKeyedSeq())
            },
            toObject: function () {
              qt(this.size)
              var t = {}
              return (
                this.__iterate(function (e, r) {
                  t[r] = e
                }),
                t
              )
            },
            toOrderedMap: function () {
              return je(this.toKeyedSeq())
            },
            toOrderedSet: function () {
              return Lr(s(this) ? this.valueSeq() : this)
            },
            toSet: function () {
              return Dr(s(this) ? this.valueSeq() : this)
            },
            toSetSeq: function () {
              return new Xe(this)
            },
            toSeq: function () {
              return u(this) ? this.toIndexedSeq() : s(this) ? this.toKeyedSeq() : this.toSetSeq()
            },
            toStack: function () {
              return jr(s(this) ? this.valueSeq() : this)
            },
            toList: function () {
              return ke(s(this) ? this.valueSeq() : this)
            },
            toString: function () {
              return '[Iterable]'
            },
            __toString: function (t, e) {
              return 0 === this.size ? t + e : t + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + e
            },
            concat: function () {
              return hr(this, ar(this, t.call(arguments, 0)))
            },
            includes: function (t) {
              return this.some(function (e) {
                return vt(e, t)
              })
            },
            entries: function () {
              return this.__iterator(R)
            },
            every: function (t, e) {
              qt(this.size)
              var r = !0
              return (
                this.__iterate(function (n, i, o) {
                  if (!t.call(e, n, i, o)) return (r = !1), !1
                }),
                r
              )
            },
            filter: function (t, e) {
              return hr(this, tr(this, t, e, !0))
            },
            find: function (t, e, r) {
              var n = this.findEntry(t, e)
              return n ? n[1] : r
            },
            findEntry: function (t, e) {
              var r
              return (
                this.__iterate(function (n, i, o) {
                  if (t.call(e, n, i, o)) return (r = [i, n]), !1
                }),
                r
              )
            },
            findLastEntry: function (t, e) {
              return this.toSeq().reverse().findEntry(t, e)
            },
            forEach: function (t, e) {
              return qt(this.size), this.__iterate(e ? t.bind(e) : t)
            },
            join: function (t) {
              qt(this.size), (t = void 0 !== t ? '' + t : ',')
              var e = '',
                r = !0
              return (
                this.__iterate(function (n) {
                  r ? (r = !1) : (e += t), (e += null != n ? n.toString() : '')
                }),
                e
              )
            },
            keys: function () {
              return this.__iterator(A)
            },
            map: function (t, e) {
              return hr(this, Qe(this, t, e))
            },
            reduce: function (t, e, r) {
              var n, i
              return (
                qt(this.size),
                arguments.length < 2 ? (i = !0) : (n = e),
                this.__iterate(function (e, o, a) {
                  i ? ((i = !1), (n = e)) : (n = t.call(r, n, e, o, a))
                }),
                n
              )
            },
            reduceRight: function (t, e, r) {
              var n = this.toKeyedSeq().reverse()
              return n.reduce.apply(n, arguments)
            },
            reverse: function () {
              return hr(this, $e(this, !0))
            },
            slice: function (t, e) {
              return hr(this, nr(this, t, e, !0))
            },
            some: function (t, e) {
              return !this.every(tn(t), e)
            },
            sort: function (t) {
              return hr(this, lr(this, t))
            },
            values: function () {
              return this.__iterator(B)
            },
            butLast: function () {
              return this.slice(0, -1)
            },
            isEmpty: function () {
              return void 0 !== this.size
                ? 0 === this.size
                : !this.some(function () {
                    return !0
                  })
            },
            count: function (t, e) {
              return E(t ? this.toSeq().filter(t, e) : this)
            },
            countBy: function (t, e) {
              return er(this, t, e)
            },
            equals: function (t) {
              return mt(this, t)
            },
            entrySeq: function () {
              var t = this
              if (t._cache) return new et(t._cache)
              var e = t.toSeq().map($r).toIndexedSeq()
              return (
                (e.fromEntrySeq = function () {
                  return t.toSeq()
                }),
                e
              )
            },
            filterNot: function (t, e) {
              return this.filter(tn(t), e)
            },
            findLast: function (t, e, r) {
              return this.toKeyedSeq().reverse().find(t, e, r)
            },
            first: function () {
              return this.find(D)
            },
            flatMap: function (t, e) {
              return hr(this, ur(this, t, e))
            },
            flatten: function (t) {
              return hr(this, sr(this, t, !0))
            },
            fromEntrySeq: function () {
              return new Je(this)
            },
            get: function (t, e) {
              return this.find(
                function (e, r) {
                  return vt(r, t)
                },
                void 0,
                e,
              )
            },
            getIn: function (t, e) {
              for (var r, n = this, i = Sr(t); !(r = i.next()).done; ) {
                var o = r.value
                if ((n = n && n.get ? n.get(o, _) : _) === _) return e
              }
              return n
            },
            groupBy: function (t, e) {
              return rr(this, t, e)
            },
            has: function (t) {
              return this.get(t, _) !== _
            },
            hasIn: function (t) {
              return this.getIn(t, _) !== _
            },
            isSubset: function (t) {
              return (
                (t = 'function' == typeof t.includes ? t : r(t)),
                this.every(function (e) {
                  return t.includes(e)
                })
              )
            },
            isSuperset: function (t) {
              return (t = 'function' == typeof t.isSubset ? t : r(t)).isSubset(this)
            },
            keySeq: function () {
              return this.toSeq().map(Qr).toIndexedSeq()
            },
            last: function () {
              return this.toSeq().reverse().first()
            },
            max: function (t) {
              return fr(this, t)
            },
            maxBy: function (t, e) {
              return fr(this, e, t)
            },
            min: function (t) {
              return fr(this, t ? en(t) : on)
            },
            minBy: function (t, e) {
              return fr(this, e ? en(e) : on, t)
            },
            rest: function () {
              return this.slice(1)
            },
            skip: function (t) {
              return this.slice(Math.max(0, t))
            },
            skipLast: function (t) {
              return hr(this, this.toSeq().reverse().skip(t).reverse())
            },
            skipWhile: function (t, e) {
              return hr(this, or(this, t, e, !0))
            },
            skipUntil: function (t, e) {
              return this.skipWhile(tn(t), e)
            },
            sortBy: function (t, e) {
              return hr(this, lr(this, e, t))
            },
            take: function (t) {
              return this.slice(0, Math.max(0, t))
            },
            takeLast: function (t) {
              return hr(this, this.toSeq().reverse().take(t).reverse())
            },
            takeWhile: function (t, e) {
              return hr(this, ir(this, t, e))
            },
            takeUntil: function (t, e) {
              return this.takeWhile(tn(t), e)
            },
            valueSeq: function () {
              return this.toIndexedSeq()
            },
            hashCode: function () {
              return this.__hash || (this.__hash = an(this))
            },
          })
        var Jr = r.prototype
        ;(Jr[f] = !0),
          (Jr[P] = Jr.values),
          (Jr.__toJS = Jr.toArray),
          (Jr.__toStringMapper = rn),
          (Jr.inspect = Jr.toSource =
            function () {
              return this.toString()
            }),
          (Jr.chain = Jr.flatMap),
          (Jr.contains = Jr.includes),
          (function () {
            try {
              Object.defineProperty(Jr, 'length', {
                get: function () {
                  if (!r.noLengthWarning) {
                    var t
                    try {
                      throw new Error()
                    } catch (e) {
                      t = e.stack
                    }
                    if (-1 === t.indexOf('_wrapObject')) return console && console.warn, this.size
                  }
                },
              })
            } catch (t) {}
          })(),
          Xr(n, {
            flip: function () {
              return hr(this, Ze(this))
            },
            findKey: function (t, e) {
              var r = this.findEntry(t, e)
              return r && r[0]
            },
            findLastKey: function (t, e) {
              return this.toSeq().reverse().findKey(t, e)
            },
            keyOf: function (t) {
              return this.findKey(function (e) {
                return vt(e, t)
              })
            },
            lastKeyOf: function (t) {
              return this.findLastKey(function (e) {
                return vt(e, t)
              })
            },
            mapEntries: function (t, e) {
              var r = this,
                n = 0
              return hr(
                this,
                this.toSeq()
                  .map(function (i, o) {
                    return t.call(e, [o, i], n++, r)
                  })
                  .fromEntrySeq(),
              )
            },
            mapKeys: function (t, e) {
              var r = this
              return hr(
                this,
                this.toSeq()
                  .flip()
                  .map(function (n, i) {
                    return t.call(e, n, i, r)
                  })
                  .flip(),
              )
            },
          })
        var Zr = n.prototype
        function Qr(t, e) {
          return e
        }
        function $r(t, e) {
          return [e, t]
        }
        function tn(t) {
          return function () {
            return !t.apply(this, arguments)
          }
        }
        function en(t) {
          return function () {
            return -t.apply(this, arguments)
          }
        }
        function rn(t) {
          return 'string' == typeof t ? JSON.stringify(t) : t
        }
        function nn() {
          return C(arguments)
        }
        function on(t, e) {
          return t < e ? 1 : t > e ? -1 : 0
        }
        function an(t) {
          if (t.size === 1 / 0) return 0
          var e = l(t),
            r = s(t),
            n = e ? 1 : 0
          return sn(
            t.__iterate(
              r
                ? e
                  ? function (t, e) {
                      n = (31 * n + un(Dt(t), Dt(e))) | 0
                    }
                  : function (t, e) {
                      n = (n + un(Dt(t), Dt(e))) | 0
                    }
                : e
                ? function (t) {
                    n = (31 * n + Dt(t)) | 0
                  }
                : function (t) {
                    n = (n + Dt(t)) | 0
                  },
            ),
            n,
          )
        }
        function sn(t, e) {
          return (
            (e = Et(e, 3432918353)),
            (e = Et((e << 15) | (e >>> -15), 461845907)),
            (e = Et((e << 13) | (e >>> -13), 5)),
            (e = Et((e = ((e + 3864292196) | 0) ^ t) ^ (e >>> 16), 2246822507)),
            (e = Ot((e = Et(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16)))
          )
        }
        function un(t, e) {
          return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0
        }
        return (
          (Zr[p] = !0),
          (Zr[P] = Jr.entries),
          (Zr.__toJS = Jr.toObject),
          (Zr.__toStringMapper = function (t, e) {
            return JSON.stringify(e) + ': ' + rn(t)
          }),
          Xr(i, {
            toKeyedSeq: function () {
              return new Ge(this, !1)
            },
            filter: function (t, e) {
              return hr(this, tr(this, t, e, !1))
            },
            findIndex: function (t, e) {
              var r = this.findEntry(t, e)
              return r ? r[0] : -1
            },
            indexOf: function (t) {
              var e = this.toKeyedSeq().keyOf(t)
              return void 0 === e ? -1 : e
            },
            lastIndexOf: function (t) {
              var e = this.toKeyedSeq().reverse().keyOf(t)
              return void 0 === e ? -1 : e
            },
            reverse: function () {
              return hr(this, $e(this, !1))
            },
            slice: function (t, e) {
              return hr(this, nr(this, t, e, !1))
            },
            splice: function (t, e) {
              var r = arguments.length
              if (((e = Math.max(0 | e, 0)), 0 === r || (2 === r && !e))) return this
              t = M(t, t < 0 ? this.count() : this.size)
              var n = this.slice(0, t)
              return hr(this, 1 === r ? n : n.concat(C(arguments, 2), this.slice(t + e)))
            },
            findLastIndex: function (t, e) {
              var r = this.toKeyedSeq().findLastKey(t, e)
              return void 0 === r ? -1 : r
            },
            first: function () {
              return this.get(0)
            },
            flatten: function (t) {
              return hr(this, sr(this, t, !1))
            },
            get: function (t, e) {
              return (t = O(this, t)) < 0 || this.size === 1 / 0 || (void 0 !== this.size && t > this.size)
                ? e
                : this.find(
                    function (e, r) {
                      return r === t
                    },
                    void 0,
                    e,
                  )
            },
            has: function (t) {
              return (
                (t = O(this, t)) >= 0 &&
                (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t))
              )
            },
            interpose: function (t) {
              return hr(this, cr(this, t))
            },
            interleave: function () {
              var t = [this].concat(C(arguments)),
                e = dr(this.toSeq(), X.of, t),
                r = e.flatten(!0)
              return e.size && (r.size = e.size * t.length), hr(this, r)
            },
            last: function () {
              return this.get(-1)
            },
            skipWhile: function (t, e) {
              return hr(this, or(this, t, e, !1))
            },
            zip: function () {
              return hr(this, dr(this, nn, [this].concat(C(arguments))))
            },
            zipWith: function (t) {
              var e = C(arguments)
              return (e[0] = this), hr(this, dr(this, t, e))
            },
          }),
          (i.prototype[d] = !0),
          (i.prototype[h] = !0),
          Xr(o, {
            get: function (t, e) {
              return this.has(t) ? t : e
            },
            includes: function (t) {
              return this.has(t)
            },
            keySeq: function () {
              return this.valueSeq()
            },
          }),
          (o.prototype.has = Jr.includes),
          Xr(Y, n.prototype),
          Xr(X, i.prototype),
          Xr(J, o.prototype),
          Xr(xt, n.prototype),
          Xr(kt, i.prototype),
          Xr(Ct, o.prototype),
          {
            Iterable: r,
            Seq: G,
            Collection: wt,
            Map: Ht,
            OrderedMap: je,
            List: ke,
            Stack: jr,
            Set: Dr,
            OrderedSet: Lr,
            Record: wr,
            Range: St,
            Repeat: _t,
            is: vt,
            fromJS: dt,
          }
        )
      })()
    },
    TNQl: function (t, e, r) {
      'use strict'
      var n = r('maj8')
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }).apply(this, arguments)
      }
      function o(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var s = r('ERkP'),
        u = r('rim0'),
        c = r('tI3i'),
        l = r('13UR'),
        f = u.isBrowser('IE <= 11') || u.isBrowser('Edge')
      var p = (function (t) {
        var e, r
        function n(e) {
          var r
          return (
            a(o((r = t.call(this, e) || this)), '_forceFlag', void 0), a(o(r), '_node', void 0), (r._forceFlag = !1), r
          )
        }
        ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
        var u = n.prototype
        return (
          (u.shouldComponentUpdate = function (t) {
            var e = this._node,
              r = '' === t.children
            l(e) || c(!1)
            var n = e
            return r
              ? !(function (t) {
                  return f ? '\n' === t.textContent : 'BR' === t.tagName
                })(n)
              : n.textContent !== t.children
          }),
          (u.componentDidMount = function () {
            this._forceFlag = !this._forceFlag
          }),
          (u.componentDidUpdate = function () {
            this._forceFlag = !this._forceFlag
          }),
          (u.render = function () {
            var t,
              e = this
            if ('' === this.props.children)
              return this._forceFlag
                ? ((t = function (t) {
                    return (e._node = t)
                  }),
                  f
                    ? s.createElement('span', { key: 'A', 'data-text': 'true', ref: t }, '\n')
                    : s.createElement('br', { key: 'A', 'data-text': 'true', ref: t }))
                : (function (t) {
                    return f
                      ? s.createElement('span', { key: 'B', 'data-text': 'true', ref: t }, '\n')
                      : s.createElement('br', { key: 'B', 'data-text': 'true', ref: t })
                  })(function (t) {
                    return (e._node = t)
                  })
            var r = {}
            return (
              'object' == typeof this.props.style && (r.style = this.props.style),
              s.createElement(
                'span',
                i(
                  {
                    key: this._forceFlag ? 'A' : 'B',
                    'data-text': 'true',
                    ref: function (t) {
                      return (e._node = t)
                    },
                  },
                  r,
                ),
                this.props.children,
              )
            )
          }),
          n
        )
      })(s.Component)
      t.exports = p
    },
    USh0: function (t, e, r) {
      'use strict'
      var n = r('sWKX'),
        i = r('5mUX'),
        o = r('tI3i')
      function a(t, e, r, a, s, u, c) {
        var l = r.getStartOffset(),
          f = r.getEndOffset(),
          p = t.__get(s).getMutability(),
          d = c ? l : f
        if ('MUTABLE' === p) return r
        var h = i(e, s).filter(function (t) {
          return d <= t.end && d >= t.start
        })
        1 != h.length && o(!1)
        var g = h[0]
        if ('IMMUTABLE' === p) return r.merge({ anchorOffset: g.start, focusOffset: g.end, isBackward: !1 })
        u || (c ? (f = g.end) : (l = g.start))
        var y = n.getRemovalRange(l, f, e.getText().slice(g.start, g.end), g.start, a)
        return r.merge({ anchorOffset: y.start, focusOffset: y.end, isBackward: !1 })
      }
      t.exports = function (t, e, r, n, i) {
        var o = n.getStartOffset(),
          s = n.getEndOffset(),
          u = e.getEntityAt(o),
          c = r.getEntityAt(s - 1)
        if (!u && !c) return n
        var l = n
        if (u && u === c) l = a(t, e, l, i, u, !0, !0)
        else if (u && c) {
          var f = a(t, e, l, i, u, !1, !0),
            p = a(t, r, l, i, c, !1, !1)
          l = l.merge({ anchorOffset: f.getAnchorOffset(), focusOffset: p.getFocusOffset(), isBackward: !1 })
        } else if (u) {
          var d = a(t, e, l, i, u, !1, !0)
          l = l.merge({ anchorOffset: d.getStartOffset(), isBackward: !1 })
        } else if (c) {
          var h = a(t, r, l, i, c, !1, !1)
          l = l.merge({ focusOffset: h.getEndOffset(), isBackward: !1 })
        }
        return l
      }
    },
    UfDk: function (t, e, r) {
      'use strict'
      var n = r('djSO'),
        i = r('7002'),
        o = r('1xkk'),
        a = r('M7w5'),
        s = r('vYw2'),
        u = r('VVXv'),
        c = r('7XzN'),
        l = r('MKsC'),
        f = r('X+Re'),
        p = r('hF1F')
      var d = {
        onDragEnd: function (t) {
          t.exitCurrentMode(), h(t)
        },
        onDrop: function (t, e) {
          var r = new n(e.nativeEvent.dataTransfer),
            l = t._latestEditorState,
            d = (function (t, e) {
              var r = null,
                n = null,
                i = s(t.currentTarget)
              if ('function' == typeof i.caretRangeFromPoint) {
                var o = i.caretRangeFromPoint(t.x, t.y)
                ;(r = o.startContainer), (n = o.startOffset)
              } else {
                if (!t.rangeParent) return null
                ;(r = t.rangeParent), (n = t.rangeOffset)
              }
              ;(r = p(r)), (n = p(n))
              var u = p(a(r))
              return c(e, u, n, u, n)
            })(e.nativeEvent, l)
          if ((e.preventDefault(), (t._dragCount = 0), t.exitCurrentMode(), null != d)) {
            var y = r.getFiles()
            if (y.length > 0) {
              if (t.props.handleDroppedFiles && f(t.props.handleDroppedFiles(d, y))) return
              u(y, function (e) {
                e && t.update(g(l, d, e))
              })
            } else {
              var v = t._internalDrag ? 'internal' : 'external'
              ;(t.props.handleDrop && f(t.props.handleDrop(d, r, v))) ||
                (t._internalDrag
                  ? t.update(
                      (function (t, e) {
                        var r = i.moveText(t.getCurrentContent(), t.getSelection(), e)
                        return o.push(t, r, 'insert-fragment')
                      })(l, d),
                    )
                  : t.update(g(l, d, r.getText()))),
                h(t)
            }
          }
        },
        onDragOver: function (t, e) {
          e.preventDefault()
        },
      }
      function h(t) {
        t._internalDrag = !1
        var e = t.editorContainer
        if (e) {
          var r = new MouseEvent('mouseup', { view: l(e), bubbles: !0, cancelable: !0 })
          e.dispatchEvent(r)
        }
      }
      function g(t, e, r) {
        var n = i.insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle())
        return o.push(t, n, 'insert-fragment')
      }
      t.exports = d
    },
    UgB4: function (t, e, r) {
      'use strict'
      var n = r('yiKp'),
        i = r.n(n),
        o = r('ERkP'),
        a = r.n(o),
        s = r('Lsrn'),
        u = r('k/Ka'),
        c = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(u.a)(
            'svg',
            i()(
              i()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [s.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (e.a = c)
    },
    VPdC: function (t, e, r) {
      'use strict'
      r.d(e, 'b', function () {
        return K
      })
      var n = r('97Jx'),
        i = r.n(n),
        o = r('m3Bd'),
        a = r.n(o),
        s = r('VrFO'),
        u = r.n(s),
        c = r('Y9Ll'),
        l = r.n(c),
        f = r('5Yy7'),
        p = r.n(f),
        d = r('2VqO'),
        h = r.n(d),
        g = r('KEM+'),
        y = r.n(g),
        v = (r('2G9S'), r('7xRU'), r('ERkP')),
        m = r.n(v),
        _ = r('3XMw'),
        b = r.n(_),
        S = r('cjZk'),
        w = 'fileInput',
        x = r('sjK1'),
        k = r('/Imo'),
        C = r('rHpw'),
        E = r('9HgX'),
        O = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        D = b.a.b9960f31,
        I = { viewType: 'media_picker' },
        M = m.a.createElement(S.a, null),
        K = function (t) {
          var e = t.acceptGifs,
            r = t.acceptImages,
            n = void 0 === r || r,
            i = t.acceptVideo
          return (n ? E.b : []).concat(e ? [E.a] : []).concat(i ? x.a : [])
        },
        T = (function (t) {
          p()(r, t)
          var e = h()(r)
          function r() {
            return u()(this, r), e.apply(this, arguments)
          }
          return (
            l()(r, [
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.acceptGifs,
                    r = t.acceptImages,
                    n = t.acceptVideo,
                    o = t.customMimeTypes,
                    s = t.icon,
                    u = t.style,
                    c = t.withIcon,
                    l = a()(t, O),
                    f = K({ acceptGifs: e, acceptImages: r, acceptVideo: n }).concat(o).join(',')
                  return m.a.createElement(
                    k.a,
                    i()({}, l, {
                      accept: f,
                      behavioralEventContext: I,
                      icon: c ? s : void 0,
                      style: [A.root, u],
                      testID: w,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(m.a.PureComponent)
      y()(T, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: D,
        icon: M,
        size: 'medium',
        withIcon: !0,
      })
      var A = C.a.create(function (t) {
        return { root: { margin: '-'.concat(t.spaces.space12) } }
      })
      e.a = T
    },
    VUYy: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var i = r('AL/+'),
        o = r('+521'),
        a = r('Svze'),
        s = a.List,
        u = a.Repeat,
        c = a.Record,
        l = function () {
          return !0
        },
        f = c({ start: null, end: null }),
        p = c({ start: null, end: null, decoratorKey: null, leaves: null }),
        d = {
          generate: function (t, e, r) {
            var n = e.getLength()
            if (!n)
              return s.of(new p({ start: 0, end: 0, decoratorKey: null, leaves: s.of(new f({ start: 0, end: 0 })) }))
            var o = [],
              a = r ? r.getDecorations(e, t) : s(u(null, n)),
              c = e.getCharacterList()
            return (
              i(a, g, l, function (t, e) {
                o.push(new p({ start: t, end: e, decoratorKey: a.get(t), leaves: h(c.slice(t, e).toList(), t) }))
              }),
              s(o)
            )
          },
          fromJS: function (t) {
            var e = t.leaves,
              r = (function (t, e) {
                if (null == t) return {}
                var r,
                  n,
                  i = {},
                  o = Object.keys(t)
                for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r])
                return i
              })(t, ['leaves'])
            return new p(
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(r)
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                      }),
                    )),
                    i.forEach(function (e) {
                      n(t, e, r[e])
                    })
                }
                return t
              })({}, r, {
                leaves:
                  null != e
                    ? s(Array.isArray(e) ? e : o(e)).map(function (t) {
                        return f(t)
                      })
                    : null,
              }),
            )
          },
        }
      function h(t, e) {
        var r = [],
          n = t
            .map(function (t) {
              return t.getStyle()
            })
            .toList()
        return (
          i(n, g, l, function (t, n) {
            r.push(new f({ start: t + e, end: n + e }))
          }),
          s(r)
        )
      }
      function g(t, e) {
        return t === e
      }
      t.exports = d
    },
    VUbk: function (t, e, r) {
      'use strict'
      var n = r('ERkP'),
        i = r('2Wwg'),
        o = (0, r('Svze').Map)({
          'header-one': { element: 'h1' },
          'header-two': { element: 'h2' },
          'header-three': { element: 'h3' },
          'header-four': { element: 'h4' },
          'header-five': { element: 'h5' },
          'header-six': { element: 'h6' },
          section: { element: 'section' },
          article: { element: 'article' },
          'unordered-list-item': {
            element: 'li',
            wrapper: n.createElement('ul', { className: i('public/DraftStyleDefault/ul') }),
          },
          'ordered-list-item': {
            element: 'li',
            wrapper: n.createElement('ol', { className: i('public/DraftStyleDefault/ol') }),
          },
          blockquote: { element: 'blockquote' },
          atomic: { element: 'figure' },
          'code-block': {
            element: 'pre',
            wrapper: n.createElement('pre', { className: i('public/DraftStyleDefault/pre') }),
          },
          unstyled: { element: 'div', aliasedElements: ['p'] },
        })
      t.exports = o
    },
    VVXv: function (t, e, r) {
      'use strict'
      ;(function (e) {
        var n = r('tI3i'),
          i = /\.textClipping$/,
          o = { 'text/plain': !0, 'text/html': !0, 'text/rtf': !0 }
        t.exports = function (t, r) {
          var a = 0,
            s = []
          t.forEach(function (u) {
            !(function (t, r) {
              if (!e.FileReader || (t.type && !(t.type in o))) return void r('')
              if ('' === t.type) {
                var a = ''
                return i.test(t.name) && (a = t.name.replace(i, '')), void r(a)
              }
              var s = new FileReader()
              ;(s.onload = function () {
                var t = s.result
                'string' != typeof t && n(!1), r(t)
              }),
                (s.onerror = function () {
                  r('')
                }),
                s.readAsText(t)
            })(u, function (e) {
              a++, e && s.push(e.slice(0, 5e3)), a == t.length && r(s.join('\r'))
            })
          })
        }
      }.call(this, r('fRV1')))
    },
    VeLA: function (t, e, r) {
      'use strict'
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              i(t, e, r[e])
            })
        }
        return t
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var o = r('ooRk'),
        a = r('b+nQ'),
        s = r('IbSy'),
        u = r('YM28'),
        c = r('krsZ'),
        l = r('IDEf'),
        f = r('YSZ8'),
        p = r('+521'),
        d = r('ZUd0'),
        h = r('Svze'),
        g = r('fNVm'),
        y = h.List,
        v = h.Record,
        m = h.Repeat,
        _ = h.Map,
        b = h.OrderedMap,
        S = v({ entityMap: null, blockMap: null, selectionBefore: null, selectionAfter: null }),
        w = d('draft_tree_data_support') ? u : s,
        x = (function (t) {
          var e, r
          function i() {
            return t.apply(this, arguments) || this
          }
          ;(r = t), ((e = i).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var s = i.prototype
          return (
            (s.getEntityMap = function () {
              return c
            }),
            (s.getBlockMap = function () {
              return this.get('blockMap')
            }),
            (s.getSelectionBefore = function () {
              return this.get('selectionBefore')
            }),
            (s.getSelectionAfter = function () {
              return this.get('selectionAfter')
            }),
            (s.getBlockForKey = function (t) {
              return this.getBlockMap().get(t)
            }),
            (s.getKeyBefore = function (t) {
              return this.getBlockMap()
                .reverse()
                .keySeq()
                .skipUntil(function (e) {
                  return e === t
                })
                .skip(1)
                .first()
            }),
            (s.getKeyAfter = function (t) {
              return this.getBlockMap()
                .keySeq()
                .skipUntil(function (e) {
                  return e === t
                })
                .skip(1)
                .first()
            }),
            (s.getBlockAfter = function (t) {
              return this.getBlockMap()
                .skipUntil(function (e, r) {
                  return r === t
                })
                .skip(1)
                .first()
            }),
            (s.getBlockBefore = function (t) {
              return this.getBlockMap()
                .reverse()
                .skipUntil(function (e, r) {
                  return r === t
                })
                .skip(1)
                .first()
            }),
            (s.getBlocksAsArray = function () {
              return this.getBlockMap().toArray()
            }),
            (s.getFirstBlock = function () {
              return this.getBlockMap().first()
            }),
            (s.getLastBlock = function () {
              return this.getBlockMap().last()
            }),
            (s.getPlainText = function (t) {
              return this.getBlockMap()
                .map(function (t) {
                  return t ? t.getText() : ''
                })
                .join(t || '\n')
            }),
            (s.getLastCreatedEntityKey = function () {
              return c.__getLastCreatedEntityKey()
            }),
            (s.hasText = function () {
              var t = this.getBlockMap()
              return t.size > 1 || escape(t.first().getText()).replace(/%u200B/g, '').length > 0
            }),
            (s.createEntity = function (t, e, r) {
              return c.__create(t, e, r), this
            }),
            (s.mergeEntityData = function (t, e) {
              return c.__mergeData(t, e), this
            }),
            (s.replaceEntityData = function (t, e) {
              return c.__replaceData(t, e), this
            }),
            (s.addEntity = function (t) {
              return c.__add(t), this
            }),
            (s.getEntity = function (t) {
              return c.__get(t)
            }),
            (s.getAllEntities = function () {
              return c.__getAll()
            }),
            (s.loadWithEntities = function (t) {
              return c.__loadWithEntities(t)
            }),
            (i.createFromBlockArray = function (t, e) {
              var r = Array.isArray(t) ? t : t.contentBlocks,
                n = o.createFromArray(r),
                a = n.isEmpty() ? new l() : l.createEmpty(n.first().getKey())
              return new i({ blockMap: n, entityMap: e || c, selectionBefore: a, selectionAfter: a })
            }),
            (i.createFromText = function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
                r = t.split(e),
                n = r.map(function (t) {
                  return (
                    (t = g(t)), new w({ key: f(), text: t, type: 'unstyled', characterList: y(m(a.EMPTY, t.length)) })
                  )
                })
              return i.createFromBlockArray(n)
            }),
            (i.fromJS = function (t) {
              return new i(
                n({}, t, {
                  blockMap: b(t.blockMap).map(i.createContentBlockFromJS),
                  selectionBefore: new l(t.selectionBefore),
                  selectionAfter: new l(t.selectionAfter),
                }),
              )
            }),
            (i.createContentBlockFromJS = function (t) {
              var e = t.characterList
              return new w(
                n({}, t, {
                  data: _(t.data),
                  characterList:
                    null != e
                      ? y(
                          (Array.isArray(e) ? e : p(e)).map(function (t) {
                            return a.fromJS(t)
                          }),
                        )
                      : void 0,
                }),
              )
            }),
            i
          )
        })(S)
      t.exports = x
    },
    Vwge: function (t, e, r) {
      'use strict'
      var n = r('1xkk'),
        i = r('iN4q'),
        o = r('2KzS')
      t.exports = function (t, e) {
        var r = e.currentTarget.ownerDocument
        if (!Boolean(t.props.preserveSelectionOnBlur) && o(r) === r.body) {
          var a = r.defaultView.getSelection(),
            s = t.editor
          1 === a.rangeCount && i(s, a.anchorNode) && i(s, a.focusNode) && a.removeAllRanges()
        }
        var u = t._latestEditorState,
          c = u.getSelection()
        if (c.getHasFocus()) {
          var l = c.set('hasFocus', !1)
          t.props.onBlur && t.props.onBlur(e), t.update(n.acceptSelection(u, l))
        }
      }
    },
    W6iK: function (t, e, r) {
      'use strict'
      var n = r('tI3i'),
        i = /[\uD800-\uDFFF]/
      function o(t) {
        return 55296 <= t && t <= 57343
      }
      function a(t) {
        return i.test(t)
      }
      function s(t, e) {
        return 1 + o(t.charCodeAt(e))
      }
      function u(t, e, r) {
        if (((e = e || 0), (r = void 0 === r ? 1 / 0 : r || 0), !a(t))) return t.substr(e, r)
        var n = t.length
        if (n <= 0 || e > n || r <= 0) return ''
        var i = 0
        if (e > 0) {
          for (; e > 0 && i < n; e--) i += s(t, i)
          if (i >= n) return ''
        } else if (e < 0) {
          for (i = n; e < 0 && 0 < i; e++) i -= s(t, i - 1)
          i < 0 && (i = 0)
        }
        var o = n
        if (r < n) for (o = i; r > 0 && o < n; r--) o += s(t, o)
        return t.substring(i, o)
      }
      var c = {
        getCodePoints: function (t) {
          for (var e = [], r = 0; r < t.length; r += s(t, r)) e.push(t.codePointAt(r))
          return e
        },
        getUTF16Length: s,
        hasSurrogateUnit: a,
        isCodeUnitInSurrogateRange: o,
        isSurrogatePair: function (t, e) {
          if (((0 <= e && e < t.length) || n(!1), e + 1 === t.length)) return !1
          var r = t.charCodeAt(e),
            i = t.charCodeAt(e + 1)
          return 55296 <= r && r <= 56319 && 56320 <= i && i <= 57343
        },
        strlen: function (t) {
          if (!a(t)) return t.length
          for (var e = 0, r = 0; r < t.length; r += s(t, r)) e++
          return e
        },
        substring: function (t, e, r) {
          ;(e = e || 0) < 0 && (e = 0), (r = void 0 === r ? 1 / 0 : r || 0) < 0 && (r = 0)
          var n = Math.abs(r - e)
          return u(t, (e = e < r ? e : r), n)
        },
        substr: u,
      }
      t.exports = c
    },
    WbhC: function (t, e, r) {
      'use strict'
      var n = r('IchF')
      t.exports = function (t, e) {
        var r = e.ownerDocument.defaultView.getSelection(),
          i = r.anchorNode,
          o = r.anchorOffset,
          a = r.focusNode,
          s = r.focusOffset
        return 0 === r.rangeCount || null == i || null == a
          ? { selectionState: t.getSelection().set('hasFocus', !1), needsRecovery: !1 }
          : n(t, e, i, o, a, s)
      }
    },
    WmAF: function (t, e, r) {
      'use strict'
      var n = r('Svze').Map
      t.exports = function (t, e, r) {
        var i = e.getStartKey(),
          o = e.getEndKey(),
          a = t.getBlockMap(),
          s = a
            .toSeq()
            .skipUntil(function (t, e) {
              return e === i
            })
            .takeUntil(function (t, e) {
              return e === o
            })
            .concat(n([[o, a.get(o)]]))
            .map(r)
        return t.merge({ blockMap: a.merge(s), selectionBefore: e, selectionAfter: e })
      }
    },
    'X+Re': function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return 'handled' === t || !0 === t
      }
    },
    XPEN: function (t, e, r) {
      'use strict'
      var n = r('maj8')
      function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var a = r('TNQl'),
        s = r('ERkP'),
        u = r('tI3i'),
        c = r('hGHS'),
        l = r('1+m/').setDraftEditorSelection,
        f = (function (t) {
          var e, r
          function f() {
            for (var e, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a]
            return o(i((e = t.call.apply(t, [this].concat(n)) || this)), 'leaf', void 0), e
          }
          ;(r = t), ((e = f).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var p = f.prototype
          return (
            (p._setSelection = function () {
              var t = this.props.selection
              if (null != t && t.getHasFocus()) {
                var e = this.props,
                  r = e.block,
                  n = e.start,
                  i = e.text,
                  o = r.getKey(),
                  a = n + i.length
                if (t.hasEdgeWithin(o, n, a)) {
                  var s = this.leaf
                  s || u(!1)
                  var f,
                    p = s.firstChild
                  p || u(!1),
                    p.nodeType === Node.TEXT_NODE ? (f = p) : c(p) ? (f = s) : (f = p.firstChild) || u(!1),
                    l(t, f, o, n, a)
                }
              }
            }),
            (p.shouldComponentUpdate = function (t) {
              var e = this.leaf
              return e || u(!1), e.textContent !== t.text || t.styleSet !== this.props.styleSet || t.forceSelection
            }),
            (p.componentDidUpdate = function () {
              this._setSelection()
            }),
            (p.componentDidMount = function () {
              this._setSelection()
            }),
            (p.render = function () {
              var t = this,
                e = this.props.block,
                r = this.props.text
              r.endsWith('\n') && this.props.isLast && (r += '\n')
              var i = this.props,
                o = i.customStyleMap,
                u = i.customStyleFn,
                c = i.offsetKey,
                l = i.styleSet,
                f = l.reduce(function (t, e) {
                  var r = {},
                    i = o[e]
                  return (
                    void 0 !== i &&
                      t.textDecoration !== i.textDecoration &&
                      (r.textDecoration = [t.textDecoration, i.textDecoration].join(' ').trim()),
                    n(t, i, r)
                  )
                }, {})
              if (u) {
                var p = u(l, e)
                f = n(f, p)
              }
              return s.createElement(
                'span',
                {
                  'data-offset-key': c,
                  ref: function (e) {
                    return (t.leaf = e)
                  },
                  style: f,
                },
                s.createElement(a, { style: this.props.style }, r),
              )
            }),
            f
          )
        })(s.Component)
      t.exports = f
    },
    XjoI: function (t, e, r) {
      'use strict'
      var n = r('OJbI'),
        i = r('XPEN'),
        o = r('b//S'),
        a = r('Svze'),
        s = r('ERkP'),
        u = r('2Wwg'),
        c =
          (a.List,
          (function (t) {
            var e, r
            function a() {
              return t.apply(this, arguments) || this
            }
            return (
              (r = t),
              ((e = a).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = r),
              (a.prototype.render = function () {
                var t = this.props,
                  e = t.block,
                  r = t.contentState,
                  a = t.customStyleFn,
                  c = t.customStyleMap,
                  l = t.decorator,
                  f = t.direction,
                  p = t.forceSelection,
                  d = t.hasSelection,
                  h = t.selection,
                  g = t.tree,
                  y = e.getKey(),
                  v = e.getText(),
                  m = g.size - 1,
                  _ =
                    this.props.children ||
                    g
                      .map(function (t, u) {
                        var g = t.get('decoratorKey'),
                          _ = t.get('leaves'),
                          b = _.size - 1,
                          S = _.map(function (t, r) {
                            var n = o.encode(y, u, r),
                              l = t.get('start'),
                              f = t.get('end')
                            return s.createElement(i, {
                              key: n,
                              offsetKey: n,
                              block: e,
                              start: l,
                              selection: d ? h : null,
                              forceSelection: p,
                              text: v.slice(l, f),
                              styleSet: e.getInlineStyleAt(l),
                              customStyleMap: c,
                              customStyleFn: a,
                              isLast: g === m && r === b,
                            })
                          }).toArray()
                        return g && l
                          ? s.createElement(n, {
                              block: e,
                              children: S,
                              contentState: r,
                              decorator: l,
                              decoratorKey: g,
                              direction: f,
                              leafSet: t,
                              text: v,
                              key: u,
                            })
                          : S
                      })
                      .toArray()
                return s.createElement(
                  'div',
                  {
                    'data-offset-key': o.encode(y, 0, 0),
                    className: u({
                      'public/DraftStyleDefault/block': !0,
                      'public/DraftStyleDefault/ltr': 'LTR' === f,
                      'public/DraftStyleDefault/rtl': 'RTL' === f,
                    }),
                  },
                  _,
                )
              }),
              a
            )
          })(s.Component))
      t.exports = c
    },
    Y5pQ: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        var e = t || '',
          r = arguments.length
        if (r > 1)
          for (var n = 1; n < r; n++) {
            var i = arguments[n]
            i && (e = (e ? e + ' ' : '') + i)
          }
        return e
      }
    },
    YM28: function (t, e, r) {
      'use strict'
      var n = r('b+nQ'),
        i = r('AL/+'),
        o = r('Svze'),
        a = o.List,
        s = o.Map,
        u = o.OrderedSet,
        c = o.Record,
        l = o.Repeat,
        f = u(),
        p = {
          parent: null,
          characterList: a(),
          data: s(),
          depth: 0,
          key: '',
          text: '',
          type: 'unstyled',
          children: a(),
          prevSibling: null,
          nextSibling: null,
        },
        d = function (t, e) {
          return t.getStyle() === e.getStyle()
        },
        h = function (t, e) {
          return t.getEntity() === e.getEntity()
        },
        g = function (t) {
          if (!t) return t
          var e = t.characterList,
            r = t.text
          return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t
        },
        y = (function (t) {
          var e, r
          function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p
            return t.call(this, g(e)) || this
          }
          ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var o = n.prototype
          return (
            (o.getKey = function () {
              return this.get('key')
            }),
            (o.getType = function () {
              return this.get('type')
            }),
            (o.getText = function () {
              return this.get('text')
            }),
            (o.getCharacterList = function () {
              return this.get('characterList')
            }),
            (o.getLength = function () {
              return this.getText().length
            }),
            (o.getDepth = function () {
              return this.get('depth')
            }),
            (o.getData = function () {
              return this.get('data')
            }),
            (o.getInlineStyleAt = function (t) {
              var e = this.getCharacterList().get(t)
              return e ? e.getStyle() : f
            }),
            (o.getEntityAt = function (t) {
              var e = this.getCharacterList().get(t)
              return e ? e.getEntity() : null
            }),
            (o.getChildKeys = function () {
              return this.get('children')
            }),
            (o.getParentKey = function () {
              return this.get('parent')
            }),
            (o.getPrevSiblingKey = function () {
              return this.get('prevSibling')
            }),
            (o.getNextSiblingKey = function () {
              return this.get('nextSibling')
            }),
            (o.findStyleRanges = function (t, e) {
              i(this.getCharacterList(), d, t, e)
            }),
            (o.findEntityRanges = function (t, e) {
              i(this.getCharacterList(), h, t, e)
            }),
            n
          )
        })(c(p))
      t.exports = y
    },
    YSZ8: function (t, e, r) {
      'use strict'
      var n = {},
        i = Math.pow(2, 24)
      t.exports = function () {
        for (var t; void 0 === t || n.hasOwnProperty(t) || !isNaN(+t); ) t = Math.floor(Math.random() * i).toString(32)
        return (n[t] = !0), t
      }
    },
    Yed0: function (t, e, r) {
      'use strict'
      var n,
        i = r('tDjQ'),
        o = r('Svze'),
        a = r('hF1F'),
        s = o.OrderedMap,
        u = {
          getDirectionMap: function (t, e) {
            n ? n.reset() : (n = new i())
            var r = t.getBlockMap(),
              u = r.valueSeq().map(function (t) {
                return a(n).getDirection(t.getText())
              }),
              c = s(r.keySeq().zip(u))
            return null != e && o.is(e, c) ? e : c
          },
        }
      t.exports = u
    },
    ZFda: function (t, e, r) {
      'use strict'
      var n = r('1xkk'),
        i = r('W6iK'),
        o = r('1AUG'),
        a = r('4aXP')
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = e.getAnchorKey(),
              a = e.getAnchorOffset(),
              s = r.getBlockForKey(n).getText()[a - 1]
            return o(t, s ? i.getUTF16Length(s, 0) : 1)
          },
          'backward',
        )
        if (e === t.getCurrentContent()) return t
        var r = t.getSelection()
        return n.push(t, e.set('selectionBefore', r), r.isCollapsed() ? 'backspace-character' : 'remove-range')
      }
    },
    ZUd0: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return !('undefined' == typeof window || !window.__DRAFT_GKX) && !!window.__DRAFT_GKX[t]
      }
    },
    ZlNV: function (t, e, r) {
      'use strict'
      var n = (function () {
        function t(t) {
          var e, r, n
          ;(n = void 0),
            (r = '_uri') in (e = this)
              ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[r] = n),
            (this._uri = t)
        }
        return (
          (t.prototype.toString = function () {
            return this._uri
          }),
          t
        )
      })()
      t.exports = n
    },
    ZxmY: function (t, e, r) {
      'use strict'
      var n = r('b+nQ')
      t.exports = function (t, e, r, i) {
        for (var o = e, a = t.getCharacterList(); o < r; ) (a = a.set(o, n.applyEntity(a.get(o), i))), o++
        return t.set('characterList', a)
      }
    },
    'b+nQ': function (t, e, r) {
      'use strict'
      var n = r('Svze'),
        i = n.Map,
        o = n.OrderedSet,
        a = n.Record,
        s = o(),
        u = { style: s, entity: null },
        c = (function (t) {
          var e, r
          function n() {
            return t.apply(this, arguments) || this
          }
          ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var a = n.prototype
          return (
            (a.getStyle = function () {
              return this.get('style')
            }),
            (a.getEntity = function () {
              return this.get('entity')
            }),
            (a.hasStyle = function (t) {
              return this.getStyle().includes(t)
            }),
            (n.applyStyle = function (t, e) {
              var r = t.set('style', t.getStyle().add(e))
              return n.create(r)
            }),
            (n.removeStyle = function (t, e) {
              var r = t.set('style', t.getStyle().remove(e))
              return n.create(r)
            }),
            (n.applyEntity = function (t, e) {
              var r = t.getEntity() === e ? t : t.set('entity', e)
              return n.create(r)
            }),
            (n.create = function (t) {
              if (!t) return l
              var e = i({ style: s, entity: null }).merge(t),
                r = f.get(e)
              if (r) return r
              var o = new n(e)
              return (f = f.set(e, o)), o
            }),
            (n.fromJS = function (t) {
              var e = t.style,
                r = t.entity
              return new n({ style: Array.isArray(e) ? o(e) : e, entity: Array.isArray(r) ? o(r) : r })
            }),
            n
          )
        })(a(u)),
        l = new c(),
        f = i([[i(u), l]])
      ;(c.EMPTY = l), (t.exports = c)
    },
    'b//S': function (t, e, r) {
      'use strict'
      var n = '-',
        i = {
          encode: function (t, e, r) {
            return t + n + e + n + r
          },
          decode: function (t) {
            var e = t.split(n).reverse(),
              r = e[0],
              i = e[1]
            return { blockKey: e.slice(2).reverse().join(n), decoratorKey: parseInt(i, 10), leafKey: parseInt(r, 10) }
          },
        }
      t.exports = i
    },
    b5s6: function (t, e, r) {
      'use strict'
      var n = r('97Jx'),
        i = r.n(n),
        o = r('m3Bd'),
        a = r.n(o),
        s = r('ERkP'),
        u = r.n(s),
        c = r('v6aA'),
        l = r('XOJV'),
        f = r('eSoz'),
        p = r('rxPX'),
        d = r('0KEI'),
        h = function (t, e) {
          return e.tweetId
        },
        g = function (t, e) {
          var r = e.tweetId,
            n = r && l.a.select(t, r)
          return n ? Object(f.g)(t, n) : void 0
        },
        y = Object(p.a)()
          .propsFromState(function () {
            return { community: g, hydratedTweet: l.a.createHydratedTweetSelector(h) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: f.c.fetchOneIfNeeded,
            }
          }),
        v = r('YeIG'),
        m = r('uCxL'),
        _ = r('x5Pi'),
        b = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        S = y(function (t) {
          var e = t.community,
            r = t.createLocalApiErrorHandler,
            n = t.fetchCommunityIfNeeded,
            o = t.hydratedTweet,
            s = (t.tweetId, a()(t, b)),
            l = u.a.useContext(c.a),
            f = l.featureSwitches,
            p = l.loggedInUserId,
            d = null == o ? void 0 : o.community_id_str
          u.a.useEffect(
            function () {
              d && Object(v.a)(e) && n(d).catch(r())
            },
            [e, d, r, n],
          )
          var h = f.isTrue('responsive_web_alt_text_badge_enabled'),
            g = o && Object(_.f)(o, p, e),
            y = g && Object(_.e)(g),
            S = f.isTrue('responsive_web_reactions_enabled')
          return u.a.createElement(
            m.a,
            i()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: y,
              tweet: o,
              withReactions: S,
            }),
          )
        })
      e.a = S
    },
    bdcm: function (t, e, r) {
      'use strict'
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              i(t, e, r[e])
            })
        }
        return t
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var o = r('YSZ8'),
        a = r('tI3i'),
        s = function (t) {
          if (!t || !t.type) return !1
          var e = t.type
          return 'unordered-list-item' === e || 'ordered-list-item' === e
        },
        u = {
          fromRawTreeStateToRawState: function (t) {
            var e = t.blocks,
              r = []
            return (
              Array.isArray(e) || a(!1),
              Array.isArray(e) && e.length
                ? ((function (t, e) {
                    for (var r = [].concat(t).reverse(); r.length; ) {
                      var n = r.pop()
                      e(n)
                      var i = n.children
                      Array.isArray(i) || a(!1), (r = r.concat([].concat(i.reverse())))
                    }
                  })(e, function (t) {
                    var e = n({}, t)
                    ;(s(t) &&
                      ((e.depth = e.depth || 0),
                      (function (t) {
                        Array.isArray(t.children) &&
                          (t.children = t.children.map(function (e) {
                            return e.type === t.type ? n({}, e, { depth: (t.depth || 0) + 1 }) : e
                          }))
                      })(t),
                      null != t.children && t.children.length > 0)) ||
                      (delete e.children, r.push(e))
                  }),
                  (t.blocks = r),
                  n({}, t, { blocks: r }))
                : t
            )
          },
          fromRawStateToRawTreeState: function (t) {
            var e = [],
              r = []
            return (
              t.blocks.forEach(function (t) {
                var i = s(t),
                  a = t.depth || 0,
                  u = n({}, t, { children: [] })
                if (i) {
                  var c = r[0]
                  if (null == c && 0 === a) e.push(u)
                  else if (null == c || c.depth < a - 1) {
                    var l = {
                      key: o(),
                      text: '',
                      depth: a - 1,
                      type: t.type,
                      children: [],
                      entityRanges: [],
                      inlineStyleRanges: [],
                    }
                    r.unshift(l), 1 === a ? e.push(l) : null != c && c.children.push(l), l.children.push(u)
                  } else if (c.depth === a - 1) c.children.push(u)
                  else {
                    for (; null != c && c.depth >= a; ) r.shift(), (c = r[0])
                    a > 0 ? c.children.push(u) : e.push(u)
                  }
                } else e.push(u)
              }),
              n({}, t, { blocks: e })
            )
          },
        }
      t.exports = u
    },
    cIoY: function (t, e, r) {
      'use strict'
      var n = r('ERkP'),
        i = r.n(n),
        o = r('1YZw'),
        a = r('rxPX'),
        s = Object(a.a)().propsFromActions(function () {
          return { addToast: o.b }
        }),
        u = r('VrFO'),
        c = r.n(u),
        l = r('Y9Ll'),
        f = r.n(l),
        p = r('1Pcy'),
        d = r.n(p),
        h = r('5Yy7'),
        g = r.n(h),
        y = r('2VqO'),
        v = r.n(y),
        m = r('KEM+'),
        _ = r.n(m),
        b = (r('ho0z'), r('2G9S'), r('1t7P'), r('jQ/y'), r('hBvt'), r('k/Ka')),
        S = r('3XMw'),
        w = r.n(S),
        x = r('sgih'),
        k = r('t62R'),
        C = r('/yvb'),
        E = r('rHpw'),
        O = w.a.cfd2f35d,
        D = (function (t) {
          g()(r, t)
          var e = v()(r)
          function r() {
            var t
            c()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (t = e.call.apply(e, [this].concat(i))),
              _()(d()(t), '_handleOnFocus', function (t) {
                t.currentTarget.select()
              }),
              t
            )
          }
          return (
            f()(r, [
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.cancelButtonLabel,
                    r = t.description,
                    n = t.headerText,
                    o = t.link,
                    a = t.onCancel,
                    s = Object(b.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: I.linkInput,
                      value: o,
                    })
                  return i.a.createElement(
                    x.a,
                    { onMaskClick: a, style: I.container, type: 'center', withMask: !0 },
                    n &&
                      i.a.createElement(
                        k.b,
                        { align: 'center', color: 'normal', style: I.headerText, weight: 'bold' },
                        n,
                      ),
                    r && i.a.createElement(k.b, { align: 'center', color: 'gray700', style: I.labelText }, r),
                    s,
                    i.a.createElement(C.a, { onPress: a, size: 'xLarge', style: I.cancelButton, type: 'brandText' }, e),
                  )
                },
              },
            ]),
            r
          )
        })(i.a.Component)
      _()(D, 'defaultProps', { cancelButtonLabel: O })
      var I = E.a.create(function (t) {
          return {
            container: {
              alignItems: 'center',
              paddingVertical: t.spaces.space32,
              paddingHorizontal: t.spaces.space12,
              position: 'relative',
            },
            headerText: { marginBottom: t.spaces.space16 },
            labelText: { marginBottom: t.spaces.space16, width: '100%' },
            linkInput: {
              backgroundColor: t.colors.gray0,
              borderColor: 'transparent',
              color: t.colors.gray700,
              fontSize: t.fontSizes.body,
              marginBottom: t.spaces.space12,
              paddingVertical: t.spaces.space12,
              paddingHorizontal: t.spaces.space20,
            },
            cancelButton: { width: '100%' },
          }
        }),
        M = D,
        K = r('I/9y'),
        T = r('mjJ+'),
        A = r('cm6r'),
        B = r('CaKu'),
        R = r('U+bB'),
        L = w.a.e05c00b4,
        F = w.a.eabf2209,
        P = w.a.a613e72f,
        z = w.a.f88553c8,
        N = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        U = (function (t) {
          g()(r, t)
          var e = v()(r)
          function r(t) {
            var n
            return (
              c()(this, r),
              (n = e.call(this, t)),
              _()(d()(n), '_renderMenu', function (t) {
                return i.a.createElement(T.a, {
                  items: [{ text: P, Icon: K.a, onClick: n._handleCopyGifLinkButtonClick }],
                  onCloseRequested: t,
                })
              }),
              _()(d()(n), '_handleCopyGifLinkButtonClick', function (t) {
                var e = n.props,
                  r = e.addToast,
                  i = e.gifUrl
                B.a.isAvailable() ? (B.a.setString(i), r({ text: z })) : n.setState({ showCopyLinkSheet: !0 }), t && t()
              }),
              _()(d()(n), '_handleCopyLinkSheetCancel', function () {
                n.setState({ showCopyLinkSheet: !1 })
              }),
              (n.state = { showCopyLinkSheet: !1 }),
              n
            )
          }
          return (
            f()(r, [
              {
                key: 'render',
                value: function () {
                  var t = this.state.showCopyLinkSheet,
                    e = this.props,
                    r = e.gifUrl,
                    n = e.provider,
                    o = n.display_name,
                    a = n.name,
                    s = N[a]
                  return s
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        t
                          ? i.a.createElement(M, {
                              description: F({ providerName: o }),
                              headerText: L,
                              link: r,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        i.a.createElement(
                          k.b,
                          { align: 'center', color: 'gray700', style: j.root },
                          i.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(o, s),
                          ),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderAttribution',
                value: function (t, e) {
                  return i.a.createElement(
                    A.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    i.a.createElement(
                      k.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      i.a.createElement(R.a, { source: { uri: e }, style: j.image }),
                      i.a.createElement(k.b, { color: 'normal' }, t.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(i.a.PureComponent),
        j = E.a.create(function (t) {
          return {
            button: { marginLeft: t.spaces.space12 },
            image: {
              display: 'inline-block',
              height: t.spaces.space16,
              marginHorizontal: t.spaces.space4,
              width: t.spaces.space16,
            },
            root: { marginHorizontal: t.spaces.space12 },
          }
        }),
        q = U,
        H = s(function (t) {
          var e = t.addToast,
            r = t.gifUrl,
            n = t.provider
          return i.a.createElement(q, { addToast: e, gifUrl: r, provider: n })
        })
      e.a = H
    },
    cQcL: function (t, e, r) {
      'use strict'
      var n = /\r\n?|\n/g
      t.exports = function (t) {
        return t.split(n)
      }
    },
    dVQN: function (t, e, r) {
      'use strict'
      var n = r('R0VQ')
      t.exports = function (t) {
        var e = t.getSelection()
        if (!e.rangeCount) return null
        var r = e.getRangeAt(0),
          i = n(r),
          o = i.top,
          a = i.right,
          s = i.bottom,
          u = i.left
        return 0 === o && 0 === a && 0 === s && 0 === u ? null : i
      }
    },
    djSO: function (t, e, r) {
      'use strict'
      var n = r('/jhs'),
        i = r('CqlG'),
        o = r('tBqf'),
        a = new RegExp('\r\n', 'g'),
        s = { 'text/rtf': 1, 'text/html': 1 }
      function u(t) {
        if ('file' == t.kind) return t.getAsFile()
      }
      var c = (function () {
        function t(t) {
          ;(this.data = t), (this.types = t.types ? i(t.types) : [])
        }
        var e = t.prototype
        return (
          (e.isRichText = function () {
            return (
              !(!this.getHTML() || !this.getText()) ||
              (!this.isImage() &&
                this.types.some(function (t) {
                  return s[t]
                }))
            )
          }),
          (e.getText = function () {
            var t
            return (
              this.data.getData &&
                (this.types.length
                  ? -1 != this.types.indexOf('text/plain') && (t = this.data.getData('text/plain'))
                  : (t = this.data.getData('Text'))),
              t ? t.replace(a, '\n') : null
            )
          }),
          (e.getHTML = function () {
            if (this.data.getData) {
              if (!this.types.length) return this.data.getData('Text')
              if (-1 != this.types.indexOf('text/html')) return this.data.getData('text/html')
            }
          }),
          (e.isLink = function () {
            return this.types.some(function (t) {
              return -1 != t.indexOf('Url') || -1 != t.indexOf('text/uri-list') || t.indexOf('text/x-moz-url')
            })
          }),
          (e.getLink = function () {
            return this.data.getData
              ? -1 != this.types.indexOf('text/x-moz-url')
                ? this.data.getData('text/x-moz-url').split('\n')[0]
                : -1 != this.types.indexOf('text/uri-list')
                ? this.data.getData('text/uri-list')
                : this.data.getData('url')
              : null
          }),
          (e.isImage = function () {
            var t = this.types.some(function (t) {
              return -1 != t.indexOf('application/x-moz-file')
            })
            if (t) return !0
            for (var e = this.getFiles(), r = 0; r < e.length; r++) {
              var i = e[r].type
              if (!n.isImage(i)) return !1
            }
            return !0
          }),
          (e.getCount = function () {
            return this.data.hasOwnProperty('items')
              ? this.data.items.length
              : this.data.hasOwnProperty('mozItemCount')
              ? this.data.mozItemCount
              : this.data.files
              ? this.data.files.length
              : null
          }),
          (e.getFiles = function () {
            return this.data.items
              ? Array.prototype.slice.call(this.data.items).map(u).filter(o.thatReturnsArgument)
              : this.data.files
              ? Array.prototype.slice.call(this.data.files)
              : []
          }),
          (e.hasFiles = function () {
            return this.getFiles().length > 0
          }),
          t
        )
      })()
      t.exports = c
    },
    dzqK: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return i
      })
      r('ERkP')
      var n = r('zpdM')
      function i(t) {
        return t instanceof n.EditorState
      }
    },
    e59y: function (t, e, r) {
      'use strict'
      var n = r('RXrk').notEmptyKey
      function i(t, e) {
        return n(e) && 'MUTABLE' === t.__get(e).getMutability() ? e : null
      }
      t.exports = function (t, e) {
        var r
        if (e.isCollapsed()) {
          var n = e.getAnchorKey(),
            o = e.getAnchorOffset()
          return o > 0
            ? (r = t.getBlockForKey(n).getEntityAt(o - 1)) !== t.getBlockForKey(n).getEntityAt(o)
              ? null
              : i(t.getEntityMap(), r)
            : null
        }
        var a = e.getStartKey(),
          s = e.getStartOffset(),
          u = t.getBlockForKey(a)
        return (r = s === u.getLength() ? null : u.getEntityAt(s)), i(t.getEntityMap(), r)
      }
    },
    euSu: function (t, e, r) {
      'use strict'
      var n = /-(.)/g
      t.exports = function (t) {
        return t.replace(n, function (t, e) {
          return e.toUpperCase()
        })
      }
    },
    fNVm: function (t, e, r) {
      'use strict'
      var n = new RegExp('\r', 'g')
      t.exports = function (t) {
        return t.replace(n, '')
      }
    },
    fNrL: function (t, e, r) {
      'use strict'
      var n = r('PrWI')
      t.exports = function (t, e) {
        t._latestEditorState.getSelection().isCollapsed() ? e.preventDefault() : t.setClipboard(n(t._latestEditorState))
      }
    },
    fpFo: function (t, e, r) {
      'use strict'
      var n = r('z0XV'),
        i = r('7002'),
        o = r('b//S'),
        a = r('1xkk'),
        s = r('ObfX'),
        u = r('DuSR'),
        c = r('KqX8'),
        l = r('WbhC'),
        f = r('e59y'),
        p = r('hF1F'),
        d = !1,
        h = !1,
        g = null
      var y = {
        onCompositionStart: function (t) {
          ;(h = !0),
            (function (t) {
              g || (g = new n(c(t))).start()
            })(t)
        },
        onCompositionEnd: function (t) {
          ;(d = !1),
            (h = !1),
            setTimeout(function () {
              d || y.resolveComposition(t)
            }, 20)
        },
        onSelect: u,
        onKeyDown: function (t, e) {
          if (!h) return y.resolveComposition(t), void t._onKeyDown(e)
          ;(e.which !== s.RIGHT && e.which !== s.LEFT) || e.preventDefault()
        },
        onKeyPress: function (t, e) {
          e.which === s.RETURN && e.preventDefault()
        },
        resolveComposition: function (t) {
          if (!h) {
            var e = p(g).stopAndFlushMutations()
            ;(g = null), (d = !0)
            var r = a.set(t._latestEditorState, { inCompositionMode: !1 })
            if ((t.exitCurrentMode(), e.size)) {
              var n = r.getCurrentContent()
              e.forEach(function (t, e) {
                var s = o.decode(e),
                  u = s.blockKey,
                  c = s.decoratorKey,
                  l = s.leafKey,
                  p = r.getBlockTree(u).getIn([c, 'leaves', l]),
                  d = p.start,
                  h = p.end,
                  g = r
                    .getSelection()
                    .merge({ anchorKey: u, focusKey: u, anchorOffset: d, focusOffset: h, isBackward: !1 }),
                  y = f(n, g),
                  v = n.getBlockForKey(u).getInlineStyleAt(d)
                ;(n = i.replaceText(n, g, t, v, y)), (r = a.set(r, { currentContent: n }))
              })
              var s = l(r, c(t)).selectionState
              t.restoreEditorDOM()
              var u = a.acceptSelection(r, s)
              t.update(a.push(u, n, 'insert-characters'))
            } else t.update(r)
          }
        },
      }
      t.exports = y
    },
    gLP3: function (t, e, r) {
      'use strict'
      t.exports = function (t, e) {
        t.setMode('drag'), e.preventDefault()
      }
    },
    gUTI: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return (
          !(!t || !t.ownerDocument) &&
          (t.ownerDocument.defaultView
            ? t instanceof t.ownerDocument.defaultView.HTMLElement
            : t instanceof HTMLElement)
        )
      }
    },
    gZn9: function (t, e, r) {
      'use strict'
      var n = r('laB8'),
        i = r('ObfX'),
        o = r('rim0'),
        a = o.isPlatform('Mac OS X'),
        s = a && o.isBrowser('Firefox < 29'),
        u = n.hasCommandModifier,
        c = n.isCtrlKeyCommand
      function l(t) {
        return (a && t.altKey) || c(t)
      }
      t.exports = function (t) {
        switch (t.keyCode) {
          case 66:
            return u(t) ? 'bold' : null
          case 68:
            return c(t) ? 'delete' : null
          case 72:
            return c(t) ? 'backspace' : null
          case 73:
            return u(t) ? 'italic' : null
          case 74:
            return u(t) ? 'code' : null
          case 75:
            return a && c(t) ? 'secondary-cut' : null
          case 77:
          case 79:
            return c(t) ? 'split-block' : null
          case 84:
            return a && c(t) ? 'transpose-characters' : null
          case 85:
            return u(t) ? 'underline' : null
          case 87:
            return a && c(t) ? 'backspace-word' : null
          case 89:
            return c(t) ? (a ? 'secondary-paste' : 'redo') : null
          case 90:
            return (
              (function (t) {
                return u(t) ? (t.shiftKey ? 'redo' : 'undo') : null
              })(t) || null
            )
          case i.RETURN:
            return 'split-block'
          case i.DELETE:
            return (function (t) {
              return !a && t.shiftKey ? null : l(t) ? 'delete-word' : 'delete'
            })(t)
          case i.BACKSPACE:
            return (function (t) {
              return u(t) && a ? 'backspace-to-start-of-line' : l(t) ? 'backspace-word' : 'backspace'
            })(t)
          case i.LEFT:
            return s && u(t) ? 'move-selection-to-start-of-block' : null
          case i.RIGHT:
            return s && u(t) ? 'move-selection-to-end-of-block' : null
          default:
            return null
        }
      }
    },
    glMO: function (t, e, r) {
      'use strict'
      var n = r('1xkk'),
        i = r('rim0')
      t.exports = function (t, e) {
        var r = t._latestEditorState,
          o = r.getSelection()
        if (!o.getHasFocus()) {
          var a = o.set('hasFocus', !0)
          t.props.onFocus && t.props.onFocus(e),
            i.isBrowser('Chrome < 60.0.3081.0') ? t.update(n.forceSelection(r, a)) : t.update(n.acceptSelection(r, a))
        }
      }
    },
    gpVt: function (t, e, r) {
      'use strict'
      r.d(e, 'b', function () {
        return q
      })
      var n = r('VrFO'),
        i = r.n(n),
        o = r('Y9Ll'),
        a = r.n(o),
        s = r('1Pcy'),
        u = r.n(s),
        c = r('5Yy7'),
        l = r.n(c),
        f = r('2VqO'),
        p = r.n(f),
        d = r('KEM+'),
        h = r.n(d),
        g = (r('z84I'), r('KqXw'), r('3uku'), r('jwue'), r('7x/C'), r('+oxZ'), r('ho0z'), r('ERkP')),
        y = r.n(g),
        v = r('K1iM'),
        m = r.n(v),
        _ = r('RhWx'),
        b = r.n(_),
        S = (r('wFPu'), r('CDB5')),
        w = r('xVN5'),
        x = r('vjRr'),
        k = r('rxPX'),
        C = r('0KEI'),
        E = function (t, e) {
          var r,
            n,
            i = e.urls,
            o = b()(i),
            a = m()(o.reverse())
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var s = n.value
              if ((r = x.a.select(t, s))) break
            }
          } catch (u) {
            a.e(u)
          } finally {
            a.f()
          }
          return r
        },
        O = Object(k.a)()
          .propsFromState(function () {
            return { card: E }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: x.a.fetchCardPreviewIfNeeded,
              updateDMComposer: S.e,
              updateTweetComposer: w.x,
            }
          }),
        D = r('KqB4'),
        I = r.n(D),
        M = r('aX4+'),
        K = r('3XMw'),
        T = r.n(K),
        A = r('hOZg'),
        B = r('cnVF'),
        R = r('MWbm'),
        L = r('v6aA'),
        F = r('/yvb'),
        P = r('rHpw'),
        z = r('VY6S'),
        N = r('mN6z'),
        U = T.a.f6fec9f6,
        j = /^https?:\/\//i,
        q = function (t) {
          var e = I()(t)
          if (e.length)
            return e.map(function (t) {
              return (!j.test(t) && 'http://'.concat(t)) || t
            })
        },
        H = (function (t) {
          l()(r, t)
          var e = p()(r)
          function r(t, n) {
            var o
            return (
              i()(this, r),
              (o = e.call(this, t, n)),
              h()(u()(o), '_fetchCardPreviewIfNeeded', function () {
                var t = o.props,
                  e = t.createLocalApiErrorHandler,
                  r = t.fetchCardPreviewIfNeeded
                t.urls.forEach(function (t) {
                  r(t).catch(e())
                })
              }),
              h()(u()(o), '_handleCardPreviewDismissal', function (t) {
                return o._updateSingleComposer({ cardUrl: B.B })
              }),
              h()(u()(o), '_updateSingleComposer', function (t) {
                var e = o.props,
                  r = e.conversationId,
                  n = e.index,
                  i = e.updateDMComposer,
                  a = e.updateTweetComposer,
                  s = (t || {}).cardUrl
                o._isDMComposer ? r && i(r, s) : a({ updates: { cardUrl: s }, index: n })
              }),
              (o._debouncedFetchCardPreview = Object(z.a)(o._fetchCardPreviewIfNeeded, 1e3)),
              (o._isDMComposer = !!t.conversationId),
              o
            )
          }
          return (
            a()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  var e = this.props.urls
                  Object(N.a)(t.urls, e) || this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updateSingleComposer()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.card,
                    r = t.isCardPreviewTombstoned,
                    n = t.style,
                    i = this.context.loggedInUserId
                  return e && !r && i
                    ? y.a.createElement(
                        R.a,
                        { style: n },
                        y.a.createElement(M.a, {
                          card: { name: e.name, url: e.url, binding_values: e.binding_values },
                          cardContext: { tweetUserId: i },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        y.a.createElement(F.a, {
                          accessibilityLabel: U,
                          icon: y.a.createElement(A.a, null),
                          onPress: this._handleCardPreviewDismissal,
                          size: 'xSmall',
                          style: V.closeButton,
                          type: 'onMediaDominantColorFilled',
                        }),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(y.a.Component)
      h()(H, 'contextType', L.a)
      var V = P.a.create(function (t) {
          return { closeButton: { position: 'absolute', top: t.spaces.space4, left: t.spaces.space4 } }
        }),
        W = O(H)
      e.a = W
    },
    gpZN: function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('1xkk'),
        o = r('hDHP'),
        a = r('hF1F'),
        s = null,
        u = {
          cut: function (t) {
            var e = t.getCurrentContent(),
              r = t.getSelection(),
              u = null
            if (r.isCollapsed()) {
              var c = r.getAnchorKey(),
                l = e.getBlockForKey(c).getLength()
              if (l === r.getAnchorOffset()) {
                var f = e.getKeyAfter(c)
                if (null == f) return t
                u = r.set('focusKey', f).set('focusOffset', 0)
              } else u = r.set('focusOffset', l)
            } else u = r
            ;(u = a(u)), (s = o(e, u))
            var p = n.removeRange(e, u, 'forward')
            return p === e ? t : i.push(t, p, 'remove-range')
          },
          paste: function (t) {
            if (!s) return t
            var e = n.replaceWithFragment(t.getCurrentContent(), t.getSelection(), s)
            return i.push(t, e, 'insert-fragment')
          },
        }
      t.exports = u
    },
    hDHP: function (t, e, r) {
      'use strict'
      var n = r('n1lM'),
        i = r('/L11')
      t.exports = function (t, e) {
        var r = e.getStartKey(),
          o = e.getStartOffset(),
          a = e.getEndKey(),
          s = e.getEndOffset(),
          u = i(t, e).getBlockMap(),
          c = u.keySeq(),
          l = c.indexOf(r),
          f = c.indexOf(a) + 1
        return n(
          u.slice(l, f).map(function (t, e) {
            var n = t.getText(),
              i = t.getCharacterList()
            return r === a
              ? t.merge({ text: n.slice(o, s), characterList: i.slice(o, s) })
              : e === r
              ? t.merge({ text: n.slice(o), characterList: i.slice(o) })
              : e === a
              ? t.merge({ text: n.slice(0, s), characterList: i.slice(0, s) })
              : t
          }),
        )
      }
    },
    hF1F: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        if (null != t) return t
        throw new Error('Got unexpected null or undefined')
      }
    },
    hGHS: function (t, e, r) {
      'use strict'
      var n = r('13UR')
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && n(t) && 'BR' === t.nodeName
      }
    },
    hgxY: function (t, e, r) {
      'use strict'
      var n = r('b+nQ'),
        i = r('Svze').List
      t.exports = function (t, e) {
        var r = t.map(function (t, r) {
          var i = e[r]
          return n.create({ style: t, entity: i })
        })
        return i(r)
      }
    },
    hiGS: function (t, e, r) {
      'use strict'
      var n = r('yiKp'),
        i = r.n(n),
        o = r('ERkP'),
        a = r.n(o),
        s = r('Lsrn'),
        u = r('k/Ka'),
        c = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(u.a)(
            'svg',
            i()(
              i()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [s.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              a.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (e.a = c)
    },
    iN4q: function (t, e, r) {
      'use strict'
      var n = r('MIqs')
      t.exports = function t(e, r) {
        return (
          !(!e || !r) &&
          (e === r ||
            (!n(e) &&
              (n(r)
                ? t(e, r.parentNode)
                : 'contains' in e
                ? e.contains(r)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(r)))))
        )
      }
    },
    iogJ: function (t, e, r) {
      'use strict'
      var n = '\\s|(?![_])' + r('lTVW').getPunctuation(),
        i = new RegExp('^(?:' + n + ')*(?:' + "['‘’]|(?!" + n + ').)*(?:(?!' + n + ').)'),
        o = new RegExp('(?:(?!' + n + ').)(?:' + "['‘’]|(?!" + n + ').)*(?:' + n + ')*$')
      function a(t, e) {
        var r = e ? o.exec(t) : i.exec(t)
        return r ? r[0] : t
      }
      var s = {
        getBackward: function (t) {
          return a(t, !0)
        },
        getForward: function (t) {
          return a(t, !1)
        },
      }
      t.exports = s
    },
    jPSd: function (t, e) {
      ;(function (e) {
        t.exports = e
      }.call(this, {}))
    },
    jtO7: function (t, e, r) {
      'use strict'
      var n = r('97Jx'),
        i = r.n(n),
        o = r('m3Bd'),
        a = r.n(o),
        s = r('ERkP'),
        u = r.n(s),
        c = r('t62R'),
        l = r('I4+6'),
        f = r('cm6r'),
        p = r('rHpw'),
        d = r('MWbm'),
        h = ['align', 'color', 'label'],
        g = p.a.create(function (t) {
          return {
            container: { backgroundColor: t.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: t.spaces.space48,
              paddingHorizontal: t.componentDimensions.gutterHorizontal,
              paddingVertical: t.spaces.space16,
            },
          }
        })
      e.a = function (t) {
        var e = t.align,
          r = void 0 === e ? 'center' : e,
          n = t.color,
          o = t.label,
          s = a()(t, h),
          y = l.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[n],
            insetFocusRing: !0,
          })
        return u.a.createElement(
          d.a,
          { style: g.container },
          u.a.createElement(
            f.a,
            i()({}, s, { interactiveStyles: y, style: g.root }),
            u.a.createElement(c.b, { align: r, color: n }, o),
          ),
        )
      }
    },
    k5bp: function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('1xkk'),
        o = r('/LAw'),
        a = r('PrWI'),
        s = r('7MNd'),
        u = r('kZJE')
      t.exports = function (t, e) {
        var r,
          c = t._latestEditorState,
          l = c.getSelection(),
          f = e.target
        if (l.isCollapsed()) e.preventDefault()
        else {
          if (u(f)) {
            var p = f
            r = s(o.getScrollParent(p))
          }
          var d = a(c)
          t.setClipboard(d),
            t.setMode('cut'),
            setTimeout(function () {
              t.restoreEditorDOM(r),
                t.exitCurrentMode(),
                t.update(
                  (function (t) {
                    var e = n.removeRange(t.getCurrentContent(), t.getSelection(), 'forward')
                    return i.push(t, e, 'remove-range')
                  })(c),
                )
            }, 0)
        }
      }
    },
    kIAd: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return i
      }),
        r.d(e, 'b', function () {
          return o
        })
      var n = r('0vv5'),
        i = 500,
        o = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: r.n(n).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    kZJE: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        if (!t || !('ownerDocument' in t)) return !1
        if ('ownerDocument' in t) {
          var e = t
          if (!e.ownerDocument.defaultView) return e instanceof Node
          if (e instanceof e.ownerDocument.defaultView.Node) return !0
        }
        return !1
      }
    },
    krmn: function (t, e, r) {
      'use strict'
      var n = r('ddV6'),
        i = r.n(n),
        o = r('ERkP'),
        a = r.n(o),
        s = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('zb92')),
        u = r('RuTB'),
        c = r('3XMw'),
        l = r.n(c),
        f = Object(s.a)({
          loader: function () {
            return l.a.emoji.then(function () {
              return Promise.all([r.e(0), r.e(18), r.e(208)]).then(r.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (t, e) {
            return a.a.createElement(u.a, { hasError: t, onRetry: e })
          },
        }),
        p = r.p + 'twemoji_sprite.2c504925.png',
        d = r.p + 'twemoji_sprite_high_res.0e490215.png',
        h = r('rHpw'),
        g = r('U+bB'),
        y = r('kLqS'),
        v = r('MWbm'),
        m = h.a.create(function (t) {
          return {
            content: { backgroundColor: t.colors.cellBackground },
            dimensions: {
              height: '400px',
              borderRadius: t.borderRadii.xLarge,
              width: 10 * t.spacesPx.space32,
              overflow: 'hidden',
            },
            hidden: { display: 'none' },
          }
        }),
        _ = function (t) {
          var e = t.onSelect,
            r = t.partialRender,
            n = y.a.get() > 1 ? d : p
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              v.a,
              { style: [m.content, m.dimensions] },
              a.a.createElement(f, { onSelect: e, partialRender: r, rowSize: 9, spriteUrl: n }),
            ),
            a.a.createElement(g.a, { source: n, style: m.hidden }),
          )
        },
        b = r('pNJr'),
        S = r('2ZFc'),
        w = r('OiMc'),
        x = r('/yvb'),
        k = l.a.d4a4842d,
        C = a.a.createElement(b.a, null),
        E = l.a.fec16c1c,
        O = { viewType: 'emoji_picker' },
        D = function (t) {
          var e = t.disabled,
            r = t.onEmojiSelect,
            n = t.onPress,
            o = t.size,
            s = t.style,
            u = t.textInputRef,
            c = a.a.useState(!0),
            l = i()(c, 2),
            p = l[0],
            d = l[1]
          a.a.useEffect(function () {
            setTimeout(function () {
              f.preload(), S.a.get('emojiPicker2')
            }, 5e3)
          }, [])
          return a.a.createElement(
            w.a,
            {
              enableEnterKeyToggle: !0,
              onAnimateComplete: function () {
                return d(!1)
              },
              onDismiss: function () {
                return d(!0)
              },
              onHoverCardUnmount: function () {
                window.requestAnimationFrame(function () {
                  return u && u.focus()
                })
              },
              renderContent: function () {
                return a.a.createElement(_, { onSelect: r, partialRender: p })
              },
              withArrow: !0,
            },
            a.a.createElement(x.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: k,
              behavioralEventContext: O,
              disabled: e,
              hoverLabel: { label: E },
              icon: C,
              onPress: function (t) {
                return n && n(t)
              },
              size: o,
              style: s,
              type: 'brandText',
            }),
          )
        }
      D.defaultProps = { disabled: !1, size: 'xSmall' }
      e.a = D
    },
    krsZ: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var i = r('or4R'),
        o = r('Svze'),
        a = r('tI3i'),
        s = r('OTOR'),
        u = (0, o.Map)(),
        c = s()
      var l = {
        getLastCreatedEntityKey: function () {
          return l.__getLastCreatedEntityKey()
        },
        create: function (t, e, r) {
          return l.__create(t, e, r)
        },
        add: function (t) {
          return l.__add(t)
        },
        get: function (t) {
          return l.__get(t)
        },
        __getAll: function () {
          return u
        },
        __loadWithEntities: function (t) {
          ;(u = t), (c = s())
        },
        mergeData: function (t, e) {
          return l.__mergeData(t, e)
        },
        replaceData: function (t, e) {
          return l.__replaceData(t, e)
        },
        __getLastCreatedEntityKey: function () {
          return c
        },
        __create: function (t, e, r) {
          return l.__add(new i({ type: t, mutability: e, data: r || {} }))
        },
        __add: function (t) {
          return (c = s()), (u = u.set(c, t)), c
        },
        __get: function (t) {
          var e = u.get(t)
          return e || a(!1), e
        },
        __mergeData: function (t, e) {
          var r = l.__get(t),
            i = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(r)
                'function' == typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(r).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }),
                  )),
                  i.forEach(function (e) {
                    n(t, e, r[e])
                  })
              }
              return t
            })({}, r.getData(), e),
            o = r.set('data', i)
          return (u = u.set(t, o)), o
        },
        __replaceData: function (t, e) {
          var r = l.__get(t).set('data', e)
          return (u = u.set(t, r)), r
        },
      }
      t.exports = l
    },
    kuaq: function (t, e, r) {
      'use strict'
      var n = /([A-Z])/g
      t.exports = function (t) {
        return t.replace(n, '-$1').toLowerCase()
      }
    },
    l2Ky: function (t, e, r) {
      'use strict'
      var n = r('maj8')
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }).apply(this, arguments)
      }
      function o(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              s(t, e, r[e])
            })
        }
        return t
      }
      function s(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var u = r('XjoI'),
        c = r('b//S'),
        l = r('ERkP'),
        f = r('O+2R'),
        p = r('/LAw'),
        d = r('CtAg'),
        h = r('7MNd'),
        g = r('BTrg'),
        y = r('Svze'),
        v = r('tI3i'),
        m = r('gUTI'),
        _ =
          (y.List,
          function (t, e) {
            return t.getAnchorKey() === e || t.getFocusKey() === e
          }),
        b = function (t, e) {
          var r = e.get(t.getType()) || e.get('unstyled'),
            n = r.wrapper
          return { Element: r.element || e.get('unstyled').element, wrapperTemplate: n }
        },
        S = function (t, e) {
          var r = e(t)
          return r ? { CustomComponent: r.component, customProps: r.props, customEditable: r.editable } : {}
        },
        w = function (t, e, r, n, i, o) {
          var s = { 'data-block': !0, 'data-editor': e, 'data-offset-key': r, key: t.getKey(), ref: o },
            u = n(t)
          return (
            u && (s.className = u),
            void 0 !== i.customEditable &&
              (s = a({}, s, { contentEditable: i.customEditable, suppressContentEditableWarning: !0 })),
            s
          )
        },
        x = (function (t) {
          var e, r
          function n() {
            for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]
            return s(o((e = t.call.apply(t, [this].concat(n)) || this)), 'wrapperRef', l.createRef()), e
          }
          ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var y = n.prototype
          return (
            (y.shouldComponentUpdate = function (t) {
              var e = this.props,
                r = e.block,
                n = e.direction,
                i = e.tree,
                o = !r.getChildKeys().isEmpty(),
                a =
                  r !== t.block ||
                  i !== t.tree ||
                  n !== t.direction ||
                  (_(t.selection, t.block.getKey()) && t.forceSelection)
              return o || a
            }),
            (y.componentDidMount = function () {
              var t = this.props.selection,
                e = t.getEndKey()
              if (t.getHasFocus() && e === this.props.block.getKey()) {
                var r = this.wrapperRef.current
                if (r) {
                  var n,
                    i = p.getScrollParent(r),
                    o = h(i)
                  if (i === window) {
                    var a = d(r)
                    ;(n = a.y + a.height - g().height) > 0 && window.scrollTo(o.x, o.y + n + 10)
                  } else {
                    m(r) || v(!1)
                    var s = r
                    ;(n = s.offsetHeight + s.offsetTop - (i.offsetHeight + o.y)) > 0 &&
                      f.setTop(i, f.getTop(i) + n + 10)
                  }
                }
              }
            }),
            (y.render = function () {
              var t = this,
                e = this.props,
                r = e.block,
                o = e.blockRenderMap,
                s = e.blockRendererFn,
                f = e.blockStyleFn,
                p = e.contentState,
                d = e.decorator,
                h = e.editorKey,
                g = e.editorState,
                y = e.customStyleFn,
                v = e.customStyleMap,
                m = e.direction,
                x = e.forceSelection,
                k = e.selection,
                C = e.tree,
                E = null
              r.children.size &&
                (E = r.children.reduce(function (e, r) {
                  var i = c.encode(r, 0, 0),
                    u = p.getBlockForKey(r),
                    d = S(u, s),
                    y = d.CustomComponent || n,
                    v = b(u, o),
                    m = v.Element,
                    _ = v.wrapperTemplate,
                    x = w(u, h, i, f, d, null),
                    k = a({}, t.props, { tree: g.getBlockTree(r), blockProps: d.customProps, offsetKey: i, block: u })
                  return (
                    e.push(l.createElement(m, x, l.createElement(y, k))),
                    !_ ||
                      (function (t, e) {
                        var r = t.getNextSiblingKey()
                        return !!r && e.getBlockForKey(r).getType() === t.getType()
                      })(u, p) ||
                      (function (t, e, r) {
                        var n = [],
                          i = !0,
                          o = !1,
                          a = void 0
                        try {
                          for (var s, u = r.reverse()[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                            var f = s.value
                            if (f.type !== e) break
                            n.push(f)
                          }
                        } catch (h) {
                          ;(o = !0), (a = h)
                        } finally {
                          try {
                            i || null == u.return || u.return()
                          } finally {
                            if (o) throw a
                          }
                        }
                        r.splice(r.indexOf(n[0]), n.length + 1)
                        var p = n.reverse(),
                          d = p[0].key
                        r.push(
                          l.cloneElement(t, { key: ''.concat(d, '-wrap'), 'data-offset-key': c.encode(d, 0, 0) }, p),
                        )
                      })(_, m, e),
                    e
                  )
                }, []))
              var O = r.getKey(),
                D = c.encode(O, 0, 0),
                I = S(r, s),
                M = I.CustomComponent,
                K =
                  null != M
                    ? l.createElement(
                        M,
                        i({}, this.props, {
                          tree: g.getBlockTree(O),
                          blockProps: I.customProps,
                          offsetKey: D,
                          block: r,
                        }),
                      )
                    : l.createElement(u, {
                        block: r,
                        children: E,
                        contentState: p,
                        customStyleFn: y,
                        customStyleMap: v,
                        decorator: d,
                        direction: m,
                        forceSelection: x,
                        hasSelection: _(k, O),
                        selection: k,
                        tree: C,
                      })
              if (r.getParentKey()) return K
              var T = b(r, o).Element,
                A = w(r, h, D, f, I, this.wrapperRef)
              return l.createElement(T, A, K)
            }),
            n
          )
        })(l.Component)
      t.exports = x
    },
    lTVW: function (t, e, r) {
      'use strict'
      t.exports = {
        getPunctuation: function () {
          return '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]'
        },
      }
    },
    laB8: function (t, e, r) {
      'use strict'
      var n = r('rim0'),
        i = r('7mA2'),
        o = n.isPlatform('Mac OS X'),
        a = {
          isCtrlKeyCommand: function (t) {
            return !!t.ctrlKey && !t.altKey
          },
          isOptionKeyCommand: function (t) {
            return o && t.altKey
          },
          usesMacOSHeuristics: function () {
            return o
          },
          hasCommandModifier: function (t) {
            return o ? !!t.metaKey && !t.altKey : a.isCtrlKeyCommand(t)
          },
          isSoftNewlineEvent: i,
        }
      t.exports = a
    },
    'mTn+': function (t, e, r) {
      'use strict'
      var n = r('IvBP'),
        i = r('W6iK').strlen
      t.exports = function (t, e) {
        var r = []
        return (
          t.findEntityRanges(
            function (t) {
              return !!t.getEntity()
            },
            function (o, a) {
              var s = t.getText(),
                u = t.getEntityAt(o)
              r.push({ offset: i(s.slice(0, o)), length: i(s.slice(o, a)), key: Number(e[n.stringify(u)]) })
            },
          ),
          r
        )
      }
    },
    mVQ8: function (t, e, r) {
      'use strict'
      var n = r('13UR')
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && n(t) && 'IMG' === t.nodeName
      }
    },
    n1lM: function (t, e, r) {
      'use strict'
      var n = r('YM28'),
        i = r('YSZ8'),
        o = r('Svze').OrderedMap
      t.exports = function (t) {
        return t.first() instanceof n
          ? (function (t) {
              var e,
                r = {}
              return o(
                t
                  .withMutations(function (t) {
                    t.forEach(function (n, o) {
                      var a = n.getKey(),
                        s = n.getNextSiblingKey(),
                        u = n.getPrevSiblingKey(),
                        c = n.getChildKeys(),
                        l = n.getParentKey(),
                        f = i()
                      if (
                        ((r[a] = f),
                        s && (t.get(s) ? t.setIn([s, 'prevSibling'], f) : t.setIn([a, 'nextSibling'], null)),
                        u && (t.get(u) ? t.setIn([u, 'nextSibling'], f) : t.setIn([a, 'prevSibling'], null)),
                        l && t.get(l))
                      ) {
                        var p = t.get(l).getChildKeys()
                        t.setIn([l, 'children'], p.set(p.indexOf(n.getKey()), f))
                      } else t.setIn([a, 'parent'], null), e && (t.setIn([e.getKey(), 'nextSibling'], f), t.setIn([a, 'prevSibling'], r[e.getKey()])), (e = t.get(a))
                      c.forEach(function (e) {
                        t.get(e)
                          ? t.setIn([e, 'parent'], f)
                          : t.setIn(
                              [a, 'children'],
                              n.getChildKeys().filter(function (t) {
                                return t !== e
                              }),
                            )
                      })
                    })
                  })
                  .toArray()
                  .map(function (t) {
                    return [r[t.getKey()], t.set('key', r[t.getKey()])]
                  }),
              )
            })(t)
          : (function (t) {
              return o(
                t.toArray().map(function (t) {
                  var e = i()
                  return [e, t.set('key', e)]
                }),
              )
            })(t)
      }
    },
    naKV: function (t, e, r) {
      'use strict'
      t.exports = {
        BOLD: { fontWeight: 'bold' },
        CODE: { fontFamily: 'monospace', wordWrap: 'break-word' },
        ITALIC: { fontStyle: 'italic' },
        STRIKETHROUGH: { textDecoration: 'line-through' },
        UNDERLINE: { textDecoration: 'underline' },
      }
    },
    njFt: function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('1xkk'),
        o = r('laB8'),
        a = r('ObfX'),
        s = r('gpZN'),
        u = r('rim0'),
        c = r('X+Re'),
        l = r('M6Be'),
        f = r('0Gcc'),
        p = r('t4Yh'),
        d = r('9000'),
        h = r('8SYF'),
        g = r('ybp+'),
        y = r('ZFda'),
        v = r('9XMQ'),
        m = r('njy0'),
        _ = r('BsqC'),
        b = o.isOptionKeyCommand,
        S = u.isBrowser('Chrome')
      t.exports = function (t, e) {
        var r = e.which,
          o = t._latestEditorState
        function u(r) {
          var n = t.props[r]
          return !!n && (n(e), !0)
        }
        switch (r) {
          case a.RETURN:
            if ((e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o)))) return
            break
          case a.ESC:
            if ((e.preventDefault(), u('onEscape'))) return
            break
          case a.TAB:
            if (u('onTab')) return
            break
          case a.UP:
            if (u('onUpArrow')) return
            break
          case a.RIGHT:
            if (u('onRightArrow')) return
            break
          case a.DOWN:
            if (u('onDownArrow')) return
            break
          case a.LEFT:
            if (u('onLeftArrow')) return
            break
          case a.SPACE:
            S && b(e) && e.preventDefault()
        }
        var w = t.props.keyBindingFn(e)
        if (null != w && '' !== w)
          if ('undo' !== w) {
            if ((e.preventDefault(), !t.props.handleKeyCommand || !c(t.props.handleKeyCommand(w, o, e.timeStamp)))) {
              var x = (function (t, e, r) {
                switch (t) {
                  case 'redo':
                    return i.redo(e)
                  case 'delete':
                    return v(e)
                  case 'delete-word':
                    return p(e)
                  case 'backspace':
                    return y(e)
                  case 'backspace-word':
                    return f(e)
                  case 'backspace-to-start-of-line':
                    return l(e, r)
                  case 'split-block':
                    return d(e)
                  case 'transpose-characters':
                    return m(e)
                  case 'move-selection-to-start-of-block':
                    return g(e)
                  case 'move-selection-to-end-of-block':
                    return h(e)
                  case 'secondary-cut':
                    return s.cut(e)
                  case 'secondary-paste':
                    return s.paste(e)
                  default:
                    return e
                }
              })(w, o, e)
              x !== o && t.update(x)
            }
          } else _(e, o, t.update)
        else if (r === a.SPACE && S && b(e)) {
          var k = n.replaceText(o.getCurrentContent(), o.getSelection(), ' ')
          t.update(i.push(o, k, 'insert-characters'))
        }
      }
    },
    njy0: function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('1xkk'),
        o = r('hDHP')
      t.exports = function (t) {
        var e = t.getSelection()
        if (!e.isCollapsed()) return t
        var r = e.getAnchorOffset()
        if (0 === r) return t
        var a,
          s,
          u = e.getAnchorKey(),
          c = t.getCurrentContent(),
          l = c.getBlockForKey(u).getLength()
        if (l <= 1) return t
        r === l
          ? ((a = e.set('anchorOffset', r - 1)), (s = e))
          : (s = (a = e.set('focusOffset', r + 1)).set('anchorOffset', r + 1))
        var f = o(c, a),
          p = n.removeRange(c, a, 'backward'),
          d = p.getSelectionAfter(),
          h = d.getAnchorOffset() - 1,
          g = d.merge({ anchorOffset: h, focusOffset: h }),
          y = n.replaceWithFragment(p, g, f),
          v = i.push(t, y, 'insert-fragment')
        return i.acceptSelection(v, s)
      }
    },
    oEoC: function (t, e, r) {
      'use strict'
      r.d(e, 'e', function () {
        return l
      }),
        r.d(e, 'c', function () {
          return f
        }),
        r.d(e, 'b', function () {
          return p
        }),
        r.d(e, 'g', function () {
          return d
        }),
        r.d(e, 'a', function () {
          return h
        }),
        r.d(e, 'd', function () {
          return g
        }),
        r.d(e, 'f', function () {
          return v
        })
      var n = r('RhWx'),
        i = r.n(n),
        o = r('yiKp'),
        a = r.n(o),
        s =
          (r('hBpG'),
          r('7x/C'),
          r('vrRf'),
          r('KqXw'),
          r('WNMA'),
          r('M+/F'),
          r('LJOr'),
          r('tVqn'),
          r('jwue'),
          r('+oxZ'),
          r('z84I'),
          r('LW0h'),
          r('2G9S'),
          r('oQhu')),
        u = r('kIAd'),
        c = r('rHpw')
      function l(t, e) {
        var r,
          n = u.b.scoper.find(function (n) {
            if (-1 !== n.srcInputs.indexOf(e)) return (r = t.match(n.regexp))
          }),
          i = ''
        return r && (i = r && (1 === r.length ? r[0] : r[1])), n ? a()(a()({}, n.scope), {}, { src: e, q: i }) : null
      }
      function f(t, e) {
        var r = e.slice(0, t),
          n = e.slice(t, e.length),
          i = r.search(u.b.WordEnd),
          o = i >= 0 ? r.slice(i) : '',
          a = n.search(u.b.WordBoundary),
          s = o + n.slice(0, a)
        return s.trim() ? { start: i, end: t + a, word: s } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function d(t) {
        var e = t.altKey,
          r = t.ctrlKey,
          n = t.metaKey
        return !(e || r || n)
      }
      function h(t, e) {
        var r = []
        t.forEach(function (t) {
          var n = e.find(function (e) {
            return e.id === t.id
          })
          n && n.data && n.data.result_context ? r.push(n) : r.push(t)
        })
        var n = r.map(function (t) {
            return t.id
          }),
          o = e.filter(function (t) {
            return n.indexOf(t.id) < 0
          })
        return [].concat(r, i()(o))
      }
      var g = Object(s.a)(function (t) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(c.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(t, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        y = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((y += 1))
        }
    },
    oNIj: function (t, e, r) {
      'use strict'
      var n = r('1xkk')
      t.exports = function (t, e) {
        t.setMode('composite'),
          t.update(n.set(t._latestEditorState, { inCompositionMode: !0 })),
          t._onCompositionStart(e)
      }
    },
    ooRk: function (t, e, r) {
      'use strict'
      var n = r('Svze').OrderedMap,
        i = {
          createFromArray: function (t) {
            return n(
              t.map(function (t) {
                return [t.getKey(), t]
              }),
            )
          },
        }
      t.exports = i
    },
    or4R: function (t, e, r) {
      'use strict'
      var n = (function (t) {
        var e, r
        function n() {
          return t.apply(this, arguments) || this
        }
        ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
        var i = n.prototype
        return (
          (i.getType = function () {
            return this.get('type')
          }),
          (i.getMutability = function () {
            return this.get('mutability')
          }),
          (i.getData = function () {
            return this.get('data')
          }),
          n
        )
      })((0, r('Svze').Record)({ type: 'TOKEN', mutability: 'IMMUTABLE', data: Object }))
      t.exports = n
    },
    'pW+J': function (t, e, r) {
      'use strict'
      var n = r('Svze'),
        i = r('wu3P'),
        o = r('tI3i'),
        a = n.Repeat
      t.exports = function (t, e, r, n) {
        e.isCollapsed() || o(!1)
        var s = null
        if ((null != r && (s = r.length), null == s || 0 === s)) return t
        var u = t.getBlockMap(),
          c = e.getStartKey(),
          l = e.getStartOffset(),
          f = u.get(c),
          p = f.getText(),
          d = f.merge({
            text: p.slice(0, l) + r + p.slice(l, f.getLength()),
            characterList: i(f.getCharacterList(), a(n, s).toList(), l),
          }),
          h = l + s
        return t.merge({ blockMap: u.set(c, d), selectionAfter: e.merge({ anchorOffset: h, focusOffset: h }) })
      }
    },
    qUKZ: function (t, e, r) {
      'use strict'
      var n = r('tI3i'),
        i = /\./,
        o = /\|\|/,
        a = /\s+\-\s+/,
        s = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        u = /^(\d*)(.*)/
      function c(t, e) {
        var r = t.split(o)
        return r.length > 1
          ? r.some(function (t) {
              return b.contains(t, e)
            })
          : (function (t, e) {
              var r = t.split(a)
              if (((r.length > 0 && r.length <= 2) || n(!1), 1 === r.length)) return l(r[0], e)
              var i = r[0],
                o = r[1]
              return (g(i) && g(o)) || n(!1), l('>=' + i, e) && l('<=' + o, e)
            })((t = r[0].trim()), e)
      }
      function l(t, e) {
        if ('' === (t = t.trim())) return !0
        var r,
          n = e.split(i),
          o = d(t),
          a = o.modifier,
          s = o.rangeComponents
        switch (a) {
          case '<':
            return f(n, s)
          case '<=':
            return -1 === (r = _(n, s)) || 0 === r
          case '>=':
            return p(n, s)
          case '>':
            return (function (t, e) {
              return 1 === _(t, e)
            })(n, s)
          case '~':
          case '~>':
            return (function (t, e) {
              var r = e.slice(),
                n = e.slice()
              n.length > 1 && n.pop()
              var i = n.length - 1,
                o = parseInt(n[i], 10)
              h(o) && (n[i] = o + 1 + '')
              return p(t, r) && f(t, n)
            })(n, s)
          default:
            return (function (t, e) {
              return 0 === _(t, e)
            })(n, s)
        }
      }
      function f(t, e) {
        return -1 === _(t, e)
      }
      function p(t, e) {
        var r = _(t, e)
        return 1 === r || 0 === r
      }
      function d(t) {
        var e = t.split(i),
          r = e[0].match(s)
        return r || n(!1), { modifier: r[1], rangeComponents: [r[2]].concat(e.slice(1)) }
      }
      function h(t) {
        return !isNaN(t) && isFinite(t)
      }
      function g(t) {
        return !d(t).modifier
      }
      function y(t, e) {
        for (var r = t.length; r < e; r++) t[r] = '0'
      }
      function v(t, e) {
        var r = t.match(u)[1],
          n = e.match(u)[1],
          i = parseInt(r, 10),
          o = parseInt(n, 10)
        return h(i) && h(o) && i !== o ? m(i, o) : m(t, e)
      }
      function m(t, e) {
        return typeof t != typeof e && n(!1), t > e ? 1 : t < e ? -1 : 0
      }
      function _(t, e) {
        for (
          var r = (function (t, e) {
              y((t = t.slice()), (e = e.slice()).length)
              for (var r = 0; r < e.length; r++) {
                var n = e[r].match(/^[x*]$/i)
                if (n && ((e[r] = t[r] = '0'), '*' === n[0] && r === e.length - 1))
                  for (var i = r; i < t.length; i++) t[i] = '0'
              }
              return y(e, t.length), [t, e]
            })(t, e),
            n = r[0],
            i = r[1],
            o = 0;
          o < i.length;
          o++
        ) {
          var a = v(n[o], i[o])
          if (a) return a
        }
        return 0
      }
      var b = {
        contains: function (t, e) {
          return c(t.trim(), e.trim())
        },
      }
      t.exports = b
    },
    'r5/r': function (t, e, r) {
      'use strict'
      var n = r('7002'),
        i = r('1xkk'),
        o = r('rim0'),
        a = r('e59y'),
        s = r('X+Re'),
        u = r('ADYu'),
        c = r('hF1F'),
        l = r('z0MJ'),
        f = o.isBrowser('Firefox')
      function p(t, e, r, o, a) {
        var s = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o)
        return i.push(t, s, 'insert-characters', a)
      }
      t.exports = function (t, e) {
        void 0 !== t._pendingStateFromBeforeInput &&
          (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0))
        var r = t._latestEditorState,
          n = e.data
        if (n)
          if (t.props.handleBeforeInput && s(t.props.handleBeforeInput(n, r, e.timeStamp))) e.preventDefault()
          else {
            var o = r.getSelection(),
              d = o.getStartOffset(),
              h = o.getAnchorKey()
            if (!o.isCollapsed())
              return (
                e.preventDefault(),
                void t.update(p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !0))
              )
            var g,
              y = p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !1),
              v = !1
            if ((v || (v = u(t._latestCommittedEditorState)), !v)) {
              var m = r.getBlockTree(h),
                _ = y.getBlockTree(h)
              v =
                m.size !== _.size ||
                m.zip(_).some(function (t) {
                  var e = t[0],
                    r = t[1],
                    i = e.get('start'),
                    o = i + (i >= d ? n.length : 0),
                    a = e.get('end'),
                    s = a + (a >= d ? n.length : 0),
                    u = r.get('start'),
                    c = r.get('end'),
                    l = r.get('decoratorKey')
                  return (
                    e.get('decoratorKey') !== l ||
                    e.get('leaves').size !== r.get('leaves').size ||
                    o !== u ||
                    s !== c ||
                    (null != l && c - u != a - i)
                  )
                })
            }
            if (
              (v || ((g = n), (v = f && ("'" == g || '/' == g))),
              v || (v = c(y.getDirectionMap()).get(h) !== c(r.getDirectionMap()).get(h)),
              v)
            )
              return e.preventDefault(), (y = i.set(y, { forceSelection: !0 })), void t.update(y)
            ;(y = i.set(y, { nativelyRenderedContent: y.getCurrentContent() })),
              (t._pendingStateFromBeforeInput = y),
              l(function () {
                void 0 !== t._pendingStateFromBeforeInput &&
                  (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0))
              })
          }
      }
    },
    rFBM: function (t, e, r) {
      'use strict'
      var n = r('VrFO'),
        i = r.n(n),
        o = r('Y9Ll'),
        a = r.n(o),
        s = r('1Pcy'),
        u = r.n(s),
        c = r('5Yy7'),
        l = r.n(c),
        f = r('2VqO'),
        p = r.n(f),
        d = r('KEM+'),
        h = r.n(d),
        g = (r('2G9S'), r('hCOa'), r('87if'), r('ERkP')),
        y = r.n(g),
        v = r('rHpw'),
        m = r('k/Ka'),
        _ = r('MWbm'),
        b = function (t) {
          return Object(m.a)('div', t)
        },
        S = (function (t) {
          l()(r, t)
          var e = p()(r)
          function r() {
            var t
            i()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (t = e.call.apply(e, [this].concat(o))),
              h()(u()(t), '_dragEnterCount', 0),
              h()(u()(t), 'state', { active: !1 }),
              h()(u()(t), '_handleDragDrop', function (e) {
                var r = t.props.onFilesAdded
                e.preventDefault(), r(Array.from(e && e.dataTransfer.files)), t._updateDragCount(0)
              }),
              h()(u()(t), '_handleDragEnter', function (e) {
                var r = t.props.onDragEnter
                e.preventDefault(), r && r(), t._updateDragCount(t._dragEnterCount + 1)
              }),
              h()(u()(t), '_handleDragLeave', function (e) {
                e.preventDefault(), t._updateDragCount(t._dragEnterCount - 1)
              }),
              h()(u()(t), '_handleDragOver', function (t) {
                t.preventDefault()
              }),
              t
            )
          }
          return (
            a()(r, [
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.allowDragDrop,
                    r = t.children,
                    n = t.style,
                    i = this.state.active,
                    o = e ? w.dragBorderValid : w.dragBorderInvalid
                  return y.a.createElement(
                    b,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [w.root, n, i && o],
                    },
                    y.a.createElement(_.a, { style: w.inner }, 'function' == typeof r ? r(i) : r),
                  )
                },
              },
              {
                key: '_updateDragCount',
                value: function (t) {
                  ;(this._dragEnterCount = t),
                    0 === this._dragEnterCount
                      ? this.setState({ active: !1 })
                      : this._dragEnterCount > 0 && this.setState({ active: !0 })
                },
              },
            ]),
            r
          )
        })(y.a.Component)
      h()(S, 'defaultProps', { allowDragDrop: !0 })
      var w = v.a.create(function (t) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: t.spaces.space2, borderColor: t.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: t.spaces.space2, borderColor: t.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      e.a = S
    },
    rim0: function (t, e, r) {
      'use strict'
      var n = r('NGtv'),
        i = r('qUKZ'),
        o = r('zgZY'),
        a = r('vqxm')
      function s(t, e, r, n) {
        if (t === r) return !0
        if (!r.startsWith(t)) return !1
        var o = r.slice(t.length)
        return !!e && ((o = n ? n(o) : o), i.contains(o, e))
      }
      function u(t) {
        return 'Windows' === n.platformName ? t.replace(/^\s*NT/, '') : t
      }
      var c = {
        isBrowser: function (t) {
          return s(n.browserName, n.browserFullVersion, t)
        },
        isBrowserArchitecture: function (t) {
          return s(n.browserArchitecture, null, t)
        },
        isDevice: function (t) {
          return s(n.deviceName, null, t)
        },
        isEngine: function (t) {
          return s(n.engineName, n.engineVersion, t)
        },
        isPlatform: function (t) {
          return s(n.platformName, n.platformFullVersion, t, u)
        },
        isPlatformArchitecture: function (t) {
          return s(n.platformArchitecture, null, t)
        },
      }
      t.exports = o(c, a)
    },
    sWKX: function (t, e, r) {
      'use strict'
      t.exports = {
        getRemovalRange: function (t, e, r, n, i) {
          var o = r.split(' ')
          o = o.map(function (t, e) {
            if ('forward' === i) {
              if (e > 0) return ' ' + t
            } else if (e < o.length - 1) return t + ' '
            return t
          })
          for (var a, s = n, u = null, c = null, l = 0; l < o.length; l++) {
            if (t < (a = s + o[l].length) && s < e) null !== u || (u = s), (c = a)
            else if (null !== u) break
            s = a
          }
          var f = n + r.length,
            p = u === n,
            d = c === f
          return ((!p && d) || (p && !d)) && ('forward' === i ? c !== f && c++ : u !== n && u--), { start: u, end: c }
        },
      }
    },
    stkZ: function (t, e, r) {
      'use strict'
      var n = r('13UR')
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && n(t) && 'A' === t.nodeName
      }
    },
    t4Yh: function (t, e, r) {
      'use strict'
      var n = r('iogJ'),
        i = r('1xkk'),
        o = r('MzOC'),
        a = r('4aXP')
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = e.getStartOffset(),
              i = e.getStartKey(),
              a = t.getCurrentContent().getBlockForKey(i).getText().slice(r),
              s = n.getForward(a)
            return o(t, s.length || 1)
          },
          'forward',
        )
        return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range')
      }
    },
    tDjQ: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var i = r('Fd87'),
        o = r('n09L'),
        a = r('tI3i'),
        s = (function () {
          function t(t) {
            n(this, '_defaultDir', void 0),
              n(this, '_lastDir', void 0),
              t ? o.isStrong(t) || a(!1) : (t = o.getGlobalDir()),
              (this._defaultDir = t),
              this.reset()
          }
          var e = t.prototype
          return (
            (e.reset = function () {
              this._lastDir = this._defaultDir
            }),
            (e.getDirection = function (t) {
              return (this._lastDir = i.getDirection(t, this._lastDir)), this._lastDir
            }),
            t
          )
        })()
      t.exports = s
    },
    tO3r: function (t, e, r) {
      'use strict'
      var n
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }),
            )),
            n.forEach(function (e) {
              o(t, e, r[e])
            })
        }
        return t
      }
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var a = r('b+nQ'),
        s = r('IbSy'),
        u = r('YM28'),
        c = r('VUbk'),
        l = r('krsZ'),
        f = r('ZlNV'),
        p = r('2Wwg'),
        d = r('YSZ8'),
        h = r('GSkh'),
        g = r('ZUd0'),
        y = r('Svze'),
        v = y.List,
        m = y.Map,
        _ = y.OrderedSet,
        b = r('stkZ'),
        S = r('hGHS'),
        w = r('gUTI'),
        x = r('mVQ8'),
        k = g('draft_tree_data_support'),
        C = new RegExp('\r', 'g'),
        E = new RegExp('\n', 'g'),
        O = new RegExp('^\n', 'g'),
        D = new RegExp('&nbsp;', 'g'),
        I = new RegExp('&#13;?', 'g'),
        M = new RegExp('&#8203;?', 'g'),
        K = ['bold', 'bolder', '500', '600', '700', '800', '900'],
        T = ['light', 'lighter', 'normal', '100', '200', '300', '400'],
        A = ['className', 'href', 'rel', 'target', 'title'],
        B = ['alt', 'className', 'height', 'src', 'width'],
        R =
          (o((n = {}), p('public/DraftStyleDefault/depth0'), 0),
          o(n, p('public/DraftStyleDefault/depth1'), 1),
          o(n, p('public/DraftStyleDefault/depth2'), 2),
          o(n, p('public/DraftStyleDefault/depth3'), 3),
          o(n, p('public/DraftStyleDefault/depth4'), 4),
          n),
        L = m({
          b: 'BOLD',
          code: 'CODE',
          del: 'STRIKETHROUGH',
          em: 'ITALIC',
          i: 'ITALIC',
          s: 'STRIKETHROUGH',
          strike: 'STRIKETHROUGH',
          strong: 'BOLD',
          u: 'UNDERLINE',
          mark: 'HIGHLIGHT',
        }),
        F = function (t) {
          var e = {}
          return (
            t.mapKeys(function (t, r) {
              var n = [r.element]
              void 0 !== r.aliasedElements && n.push.apply(n, r.aliasedElements),
                n.forEach(function (r) {
                  void 0 === e[r] ? (e[r] = t) : 'string' == typeof e[r] ? (e[r] = [e[r], t]) : e[r].push(t)
                })
            }),
            m(e)
          )
        },
        P = function (t) {
          if (w(t) && t.style.fontFamily.includes('monospace')) return 'CODE'
          return null
        },
        z = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return (
            Object.keys(R).some(function (r) {
              t.classList.contains(r) && (e = R[r])
            }),
            e
          )
        },
        N = function (t) {
          if (!b(t)) return !1
          var e = t
          return !(
            !e.href ||
            ('http:' !== e.protocol && 'https:' !== e.protocol && 'mailto:' !== e.protocol && 'tel:' !== e.protocol)
          )
        },
        U = function (t) {
          if (!x(t)) return !1
          var e = t
          return !(!e.attributes.getNamedItem('src') || !e.attributes.getNamedItem('src').value)
        },
        j = function (t, e) {
          if (!w(t)) return e
          var r = t,
            n = r.style.fontWeight,
            i = r.style.fontStyle,
            o = r.style.textDecoration
          return e.withMutations(function (t) {
            K.indexOf(n) >= 0 ? t.add('BOLD') : T.indexOf(n) >= 0 && t.remove('BOLD'),
              'italic' === i ? t.add('ITALIC') : 'normal' === i && t.remove('ITALIC'),
              'underline' === o && t.add('UNDERLINE'),
              'line-through' === o && t.add('STRIKETHROUGH'),
              'none' === o && (t.remove('UNDERLINE'), t.remove('STRIKETHROUGH'))
          })
        },
        q = function (t) {
          return 'ul' === t || 'ol' === t
        },
        H = (function () {
          function t(t, e) {
            o(this, 'characterList', v()),
              o(this, 'currentBlockType', 'unstyled'),
              o(this, 'currentDepth', 0),
              o(this, 'currentEntity', null),
              o(this, 'currentText', ''),
              o(this, 'wrapper', null),
              o(this, 'blockConfigs', []),
              o(this, 'contentBlocks', []),
              o(this, 'entityMap', l),
              o(this, 'blockTypeMap', void 0),
              o(this, 'disambiguate', void 0),
              this.clear(),
              (this.blockTypeMap = t),
              (this.disambiguate = e)
          }
          var e = t.prototype
          return (
            (e.clear = function () {
              ;(this.characterList = v()),
                (this.blockConfigs = []),
                (this.currentBlockType = 'unstyled'),
                (this.currentDepth = 0),
                (this.currentEntity = null),
                (this.currentText = ''),
                (this.entityMap = l),
                (this.wrapper = null),
                (this.contentBlocks = [])
            }),
            (e.addDOMNode = function (t) {
              var e
              return (
                (this.contentBlocks = []),
                (this.currentDepth = 0),
                (e = this.blockConfigs).push.apply(e, this._toBlockConfigs([t], _())),
                this._trimCurrentText(),
                '' !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()),
                this
              )
            }),
            (e.getContentBlocks = function () {
              return (
                0 === this.contentBlocks.length &&
                  (k ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)),
                { contentBlocks: this.contentBlocks, entityMap: this.entityMap }
              )
            }),
            (e._makeBlockConfig = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.key || d(),
                r = i(
                  {
                    key: e,
                    type: this.currentBlockType,
                    text: this.currentText,
                    characterList: this.characterList,
                    depth: this.currentDepth,
                    parent: null,
                    children: v(),
                    prevSibling: null,
                    nextSibling: null,
                    childConfigs: [],
                  },
                  t,
                )
              return (this.characterList = v()), (this.currentBlockType = 'unstyled'), (this.currentText = ''), r
            }),
            (e._toBlockConfigs = function (t, e) {
              for (var r = [], n = 0; n < t.length; n++) {
                var i = t[n],
                  o = i.nodeName.toLowerCase()
                if ('body' === o || q(o)) {
                  this._trimCurrentText(), '' !== this.currentText && r.push(this._makeBlockConfig())
                  var a = this.currentDepth,
                    s = this.wrapper
                  q(o) && ((this.wrapper = o), q(s) && this.currentDepth++),
                    r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), e)),
                    (this.currentDepth = a),
                    (this.wrapper = s)
                } else {
                  var u = this.blockTypeMap.get(o)
                  if (void 0 === u)
                    if ('#text' !== o)
                      if ('br' !== o)
                        if (U(i)) this._addImgNode(i, e)
                        else if (N(i)) this._addAnchorNode(i, r, e)
                        else {
                          var c = e
                          L.has(o) && (c = c.add(L.get(o))), (c = j(i, c))
                          var l = P(i)
                          null != l && (c = c.add(l)),
                            r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), c))
                        }
                      else this._addBreakNode(i, e)
                    else this._addTextNode(i, e)
                  else {
                    this._trimCurrentText(), '' !== this.currentText && r.push(this._makeBlockConfig())
                    var f = this.currentDepth,
                      p = this.wrapper
                    if (
                      ((this.wrapper = 'pre' === o ? 'pre' : this.wrapper),
                      'string' != typeof u && (u = this.disambiguate(o, this.wrapper) || u[0] || 'unstyled'),
                      !k && w(i) && ('unordered-list-item' === u || 'ordered-list-item' === u))
                    ) {
                      var h = i
                      this.currentDepth = z(h, this.currentDepth)
                    }
                    var g = d(),
                      y = this._toBlockConfigs(Array.from(i.childNodes), e)
                    this._trimCurrentText(),
                      r.push(this._makeBlockConfig({ key: g, childConfigs: y, type: u })),
                      (this.currentDepth = f),
                      (this.wrapper = p)
                  }
                }
              }
              return r
            }),
            (e._appendText = function (t, e) {
              var r
              this.currentText += t
              var n = a.create({ style: e, entity: this.currentEntity })
              this.characterList = (r = this.characterList).push.apply(r, Array(t.length).fill(n))
            }),
            (e._trimCurrentText = function () {
              var t = this.currentText.length,
                e = t - this.currentText.trimLeft().length,
                r = this.currentText.trimRight().length,
                n = this.characterList.findEntry(function (t) {
                  return null !== t.getEntity()
                })
              ;(e = void 0 !== n ? Math.min(e, n[0]) : e) >
              (r =
                void 0 !==
                (n = this.characterList.reverse().findEntry(function (t) {
                  return null !== t.getEntity()
                }))
                  ? Math.max(r, t - n[0])
                  : r)
                ? ((this.currentText = ''), (this.characterList = v()))
                : ((this.currentText = this.currentText.slice(e, r)),
                  (this.characterList = this.characterList.slice(e, r)))
            }),
            (e._addTextNode = function (t, e) {
              var r = t.textContent
              '' === r.trim() && 'pre' !== this.wrapper && (r = ' '),
                'pre' !== this.wrapper && (r = (r = r.replace(O, '')).replace(E, ' ')),
                this._appendText(r, e)
            }),
            (e._addBreakNode = function (t, e) {
              S(t) && this._appendText('\n', e)
            }),
            (e._addImgNode = function (t, e) {
              if (x(t)) {
                var r = t,
                  n = {}
                B.forEach(function (t) {
                  var e = r.getAttribute(t)
                  e && (n[t] = e)
                }),
                  (this.currentEntity = this.entityMap.__create('IMAGE', 'IMMUTABLE', n)),
                  g('draftjs_fix_paste_for_img')
                    ? 'presentation' !== r.getAttribute('role') && this._appendText('📷', e)
                    : this._appendText('📷', e),
                  (this.currentEntity = null)
              }
            }),
            (e._addAnchorNode = function (t, e, r) {
              if (b(t)) {
                var n = t,
                  i = {}
                A.forEach(function (t) {
                  var e = n.getAttribute(t)
                  e && (i[t] = e)
                }),
                  (i.url = new f(n.href).toString()),
                  (this.currentEntity = this.entityMap.__create('LINK', 'MUTABLE', i || {})),
                  e.push.apply(e, this._toBlockConfigs(Array.from(t.childNodes), r)),
                  (this.currentEntity = null)
              }
            }),
            (e._toContentBlocks = function (t) {
              for (
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = t.length - 1, n = 0;
                n <= r;
                n++
              ) {
                var o = t[n]
                ;(o.parent = e),
                  (o.prevSibling = n > 0 ? t[n - 1].key : null),
                  (o.nextSibling = n < r ? t[n + 1].key : null),
                  (o.children = v(
                    o.childConfigs.map(function (t) {
                      return t.key
                    }),
                  )),
                  this.contentBlocks.push(new u(i({}, o))),
                  this._toContentBlocks(o.childConfigs, o.key)
              }
            }),
            (e._hoistContainersInBlockConfigs = function (t) {
              var e = this
              return v(t).flatMap(function (t) {
                return 'unstyled' !== t.type || '' !== t.text ? [t] : e._hoistContainersInBlockConfigs(t.childConfigs)
              })
            }),
            (e._toFlatContentBlocks = function (t) {
              var e = this
              this._hoistContainersInBlockConfigs(t).forEach(function (t) {
                var r = e._extractTextFromBlockConfigs(t.childConfigs),
                  n = r.text,
                  o = r.characterList
                e.contentBlocks.push(new s(i({}, t, { text: t.text + n, characterList: t.characterList.concat(o) })))
              })
            }),
            (e._extractTextFromBlockConfigs = function (t) {
              for (var e = t.length - 1, r = '', n = v(), i = 0; i <= e; i++) {
                var o = t[i]
                ;(r += o.text),
                  (n = n.concat(o.characterList)),
                  '' !== r && 'unstyled' !== o.type && ((r += '\n'), (n = n.push(n.last())))
                var a = this._extractTextFromBlockConfigs(o.childConfigs)
                ;(r += a.text), (n = n.concat(a.characterList))
              }
              return { text: r, characterList: n }
            }),
            t
          )
        })()
      t.exports = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
          n = e((t = t.trim().replace(C, '').replace(D, ' ').replace(I, '').replace(M, '')))
        if (!n) return null
        var i = F(r),
          o = function (t, e) {
            return 'li' === t ? ('ol' === e ? 'ordered-list-item' : 'unordered-list-item') : null
          }
        return new H(i, o).addDOMNode(n).getContentBlocks()
      }
    },
    tRbA: function (t, e, r) {
      'use strict'
      var n = r('ERkP'),
        i = r('2Wwg'),
        o = (function (t) {
          var e, r
          function o() {
            return t.apply(this, arguments) || this
          }
          ;(r = t), ((e = o).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var a = o.prototype
          return (
            (a.shouldComponentUpdate = function (t) {
              return (
                this.props.text !== t.text ||
                this.props.editorState.getSelection().getHasFocus() !== t.editorState.getSelection().getHasFocus()
              )
            }),
            (a.render = function () {
              var t = this.props.editorState.getSelection().getHasFocus(),
                e = i({ 'public/DraftEditorPlaceholder/root': !0, 'public/DraftEditorPlaceholder/hasFocus': t })
              return n.createElement(
                'div',
                { className: e },
                n.createElement(
                  'div',
                  {
                    className: i('public/DraftEditorPlaceholder/inner'),
                    id: this.props.accessibilityID,
                    style: { whiteSpace: 'pre-wrap' },
                  },
                  this.props.text,
                ),
              )
            }),
            o
          )
        })(n.Component)
      t.exports = o
    },
    uJSo: function (t, e, r) {
      'use strict'
      var n = r('YM28'),
        i = r('HdU4'),
        o = r('Svze'),
        a = r('tI3i'),
        s = o.OrderedMap,
        u = o.List,
        c = function (t, e, r) {
          if (t) {
            var n = e.get(t)
            n && e.set(t, r(n))
          }
        },
        l = function (t, e, r, n, i) {
          if (!i) return t
          var o = 'after' === n,
            a = e.getKey(),
            s = r.getKey(),
            l = e.getParentKey(),
            f = e.getNextSiblingKey(),
            p = e.getPrevSiblingKey(),
            d = r.getParentKey(),
            h = o ? r.getNextSiblingKey() : s,
            g = o ? s : r.getPrevSiblingKey()
          return t.withMutations(function (t) {
            c(l, t, function (t) {
              var e = t.getChildKeys()
              return t.merge({ children: e.delete(e.indexOf(a)) })
            }),
              c(p, t, function (t) {
                return t.merge({ nextSibling: f })
              }),
              c(f, t, function (t) {
                return t.merge({ prevSibling: p })
              }),
              c(h, t, function (t) {
                return t.merge({ prevSibling: a })
              }),
              c(g, t, function (t) {
                return t.merge({ nextSibling: a })
              }),
              c(d, t, function (t) {
                var e = t.getChildKeys(),
                  r = e.indexOf(s),
                  n = o ? r + 1 : 0 !== r ? r - 1 : 0,
                  i = e.toArray()
                return i.splice(n, 0, a), t.merge({ children: u(i) })
              }),
              c(a, t, function (t) {
                return t.merge({ nextSibling: h, prevSibling: g, parent: d })
              })
          })
        }
      t.exports = function (t, e, r, o) {
        'replace' === o && a(!1)
        var u = r.getKey(),
          c = e.getKey()
        c === u && a(!1)
        var f = t.getBlockMap(),
          p = e instanceof n,
          d = [e],
          h = f.delete(c)
        p &&
          ((d = []),
          (h = f.withMutations(function (t) {
            var r = e.getNextSiblingKey(),
              n = i(e, t)
            t.toSeq()
              .skipUntil(function (t) {
                return t.getKey() === c
              })
              .takeWhile(function (t) {
                var e = t.getKey(),
                  i = e === c,
                  o = r && e !== r,
                  a = !r && t.getParentKey() && (!n || e !== n)
                return !!(i || o || a)
              })
              .forEach(function (e) {
                d.push(e), t.delete(e.getKey())
              })
          })))
        var g = h.toSeq().takeUntil(function (t) {
            return t === r
          }),
          y = h
            .toSeq()
            .skipUntil(function (t) {
              return t === r
            })
            .skip(1),
          v = d.map(function (t) {
            return [t.getKey(), t]
          }),
          m = s()
        if ('before' === o) {
          var _ = t.getBlockBefore(u)
          _ && _.getKey() === e.getKey() && a(!1), (m = g.concat([].concat(v, [[u, r]]), y).toOrderedMap())
        } else if ('after' === o) {
          var b = t.getBlockAfter(u)
          b && b.getKey() === c && a(!1), (m = g.concat([[u, r]].concat(v), y).toOrderedMap())
        }
        return t.merge({
          blockMap: l(m, e, r, o, p),
          selectionBefore: t.getSelectionAfter(),
          selectionAfter: t.getSelectionAfter().merge({ anchorKey: c, focusKey: c }),
        })
      }
    },
    udiT: function (t, e, r) {
      'use strict'
      t.exports = function (t, e, r, n) {
        var i = e.getStartKey(),
          o = e.getEndKey(),
          a = t.getBlockMap(),
          s = a
            .toSeq()
            .skipUntil(function (t, e) {
              return e === i
            })
            .takeUntil(function (t, e) {
              return e === o
            })
            .concat([[o, a.get(o)]])
            .map(function (t) {
              var e = t.getDepth() + r
              return (e = Math.max(0, Math.min(e, n))), t.set('depth', e)
            })
        return (a = a.merge(s)), t.merge({ blockMap: a, selectionBefore: e, selectionAfter: e })
      }
    },
    vHsC: function (t, e, r) {
      'use strict'
      var n = r('maj8')
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }).apply(this, arguments)
      }
      var o = r('l2Ky'),
        a = r('b//S'),
        s = r('ERkP'),
        u = r('hF1F'),
        c = (function (t) {
          var e, r
          function n() {
            return t.apply(this, arguments) || this
          }
          ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
          var c = n.prototype
          return (
            (c.shouldComponentUpdate = function (t) {
              var e = this.props.editorState,
                r = t.editorState
              if (e.getDirectionMap() !== r.getDirectionMap()) return !0
              if (e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0
              var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode()
              if (e === r || (null !== n && r.getCurrentContent() === n) || (i && o)) return !1
              var a = e.getCurrentContent(),
                s = r.getCurrentContent(),
                u = e.getDecorator(),
                c = r.getDecorator()
              return i !== o || a !== s || u !== c || r.mustForceSelection()
            }),
            (c.render = function () {
              for (
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  c = t.customStyleMap,
                  l = t.customStyleFn,
                  f = t.editorState,
                  p = t.editorKey,
                  d = t.textDirectionality,
                  h = f.getCurrentContent(),
                  g = f.getSelection(),
                  y = f.mustForceSelection(),
                  v = f.getDecorator(),
                  m = u(f.getDirectionMap()),
                  _ = [],
                  b = h.getBlocksAsArray()[0];
                b;

              ) {
                var S = b.getKey(),
                  w = {
                    blockRenderMap: e,
                    blockRendererFn: r,
                    blockStyleFn: n,
                    contentState: h,
                    customStyleFn: l,
                    customStyleMap: c,
                    decorator: v,
                    editorKey: p,
                    editorState: f,
                    forceSelection: y,
                    selection: g,
                    block: b,
                    direction: d || m.get(S),
                    tree: f.getBlockTree(S),
                  },
                  x = (e.get(b.getType()) || e.get('unstyled')).wrapper
                _.push({
                  block: s.createElement(o, i({ key: S }, w)),
                  wrapperTemplate: x,
                  key: S,
                  offsetKey: a.encode(S, 0, 0),
                })
                var k = b.getNextSiblingKey()
                b = k ? h.getBlockForKey(k) : null
              }
              for (var C = [], E = 0; E < _.length; ) {
                var O = _[E]
                if (O.wrapperTemplate) {
                  var D = []
                  do {
                    D.push(_[E].block), E++
                  } while (E < _.length && _[E].wrapperTemplate === O.wrapperTemplate)
                  var I = s.cloneElement(O.wrapperTemplate, { key: O.key + '-wrap', 'data-offset-key': O.offsetKey }, D)
                  C.push(I)
                } else C.push(O.block), E++
              }
              return s.createElement('div', { 'data-contents': 'true' }, C)
            }),
            n
          )
        })(s.Component)
      t.exports = c
    },
    vYw2: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        return t && t.ownerDocument ? t.ownerDocument : document
      }
    },
    vqxm: function (t, e, r) {
      'use strict'
      t.exports = function (t) {
        var e = {}
        return function (r) {
          return e.hasOwnProperty(r) || (e[r] = t.call(this, r)), e[r]
        }
      }
    },
    w3n3: function (t, e, r) {
      'use strict'
      var n = r('ERkP'),
        i = r.n(n),
        o = r('/yvb'),
        a = r('3XMw'),
        s = r.n(a),
        u = r('3rWK'),
        c = r('Irs7'),
        l = s.a.a4993fa1,
        f = i.a.createElement(u.a, null),
        p = s.a.i0db46e6,
        d = { viewType: 'gif_search' }
      e.a = function (t) {
        var e = t.dmConversationId,
          r = t.enabled,
          n = void 0 === r || r,
          a = t.gifSearchKeySource,
          s = t.history,
          u = t.onPress,
          h = t.style,
          g = t.testID,
          y = Object(c.b)(),
          v = i.a.useCallback(
            function () {
              u && u(),
                y.scribe({ element: 'found_media_button', action: 'click' }),
                s.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: a, dmConversationId: e } })
            },
            [e, y, a, s, u],
          )
        return i.a.createElement(o.a, {
          accessibilityLabel: l,
          behavioralEventContext: d,
          disabled: !n,
          hoverLabel: { label: p },
          icon: f,
          onPress: v,
          size: 'medium',
          style: h,
          testID: g,
          type: 'brandText',
        })
      }
    },
    wH9P: function (t, e, r) {
      'use strict'
      var n = r('Svze').List,
        i = (function () {
          function t(t) {
            var e, r, n
            ;(n = void 0),
              (r = '_decorators') in (e = this)
                ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[r] = n),
              (this._decorators = t.slice())
          }
          var e = t.prototype
          return (
            (e.getDecorations = function (t, e) {
              var r = Array(t.getText().length).fill(null)
              return (
                this._decorators.forEach(function (n, i) {
                  var o = 0
                  ;(0, n.strategy)(
                    t,
                    function (t, e) {
                      ;(function (t, e, r) {
                        for (var n = e; n < r; n++) if (null != t[n]) return !1
                        return !0
                      })(r, t, e) &&
                        (!(function (t, e, r, n) {
                          for (var i = e; i < r; i++) t[i] = n
                        })(r, t, e, i + '.' + o),
                        o++)
                    },
                    e,
                  )
                }),
                n(r)
              )
            }),
            (e.getComponentForKey = function (t) {
              var e = parseInt(t.split('.')[0], 10)
              return this._decorators[e].component
            }),
            (e.getPropsForKey = function (t) {
              var e = parseInt(t.split('.')[0], 10)
              return this._decorators[e].props
            }),
            t
          )
        })()
      t.exports = i
    },
    wpu3: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return h
      }),
        r.d(e, 'b', function () {
          return y
        }),
        r.d(e, 'c', function () {
          return v
        }),
        r.d(e, 'd', function () {
          return m
        })
      var n = r('RhWx'),
        i = r.n(n),
        o = r('KEM+'),
        a = r.n(o),
        s =
          (r('jwue'),
          r('7x/C'),
          r('+oxZ'),
          r('ho0z'),
          r('LW0h'),
          r('2G9S'),
          r('z84I'),
          r('5BYb'),
          r('DfhM'),
          r('KqXw'),
          r('Ysgh'),
          r('hBpG'),
          r('oEoC')),
        u = r('1auM'),
        c = r('kIAd'),
        l = r('VAyw'),
        f = r('/Ikv'),
        p = r('s1N3'),
        d = r('lnti'),
        h = function (t) {
          var e,
            r = t.excludeReplyUser,
            n = t.inReplyToStatus,
            o = t.loggedInUserId,
            s = n.retweeted_status,
            u = (s || n).entities,
            c = (n.retweeted_status || n).user,
            f = s ? s.user : {},
            h = s ? n.user : {},
            y = (null == u ? void 0 : u.user_mentions) || [],
            v = l.a.mergeTaggedUsers((null == u ? void 0 : u.media) || []),
            m = g(s || n) || {},
            _ = ((e = {}), a()(e, f.id_str, f), a()(e, h.id_str, h), a()(e, c.id_str, c), a()(e, m.id_str, m), e)
          y.forEach(function (t) {
            _[t.id_str] = t
          }),
            v.forEach(function (t) {
              var e = t.name,
                r = t.screen_name,
                n = t.user_id
              _[n] = { id_str: n, name: e, screen_name: r }
            })
          var b = Object(p.a)(
              Object(d.a)(
                [f.id_str, h.id_str, c.id_str].concat(
                  i()(
                    y.map(function (t) {
                      return t.id_str
                    }),
                  ),
                  i()(
                    v.map(function (t) {
                      return t.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (t) {
              return t !== o
            }),
            S = o && c.id_str === o ? [o].concat(i()(b)) : b
          return (
            r &&
              (S = S.filter(function (t) {
                return t !== c.id_str
              })),
            S.map(function (t) {
              return _[t]
            })
          )
        },
        g = function (t) {
          var e = t.card,
            r = null
          if (e) {
            var n = f.a.getBindingValue(e.binding_values, 'site')
            n && e.users && (r = e.users[n.id_str])
          }
          return r
        },
        y = function (t) {
          var e = t.maxNumberOfPhotos
          return function (t) {
            if (0 === t.length) return !0
            var r = t.some(function (t) {
                return !!t.externalMediaDetails
              }),
              n =
                !r &&
                t.some(function (t) {
                  return t.mediaFile && t.mediaFile.isGif
                }),
              i = t.some(function (t) {
                return t.mediaFile && !(t.mediaFile instanceof u.a) && t.mediaFile.isVideo
              })
            if (n || r || i) return 1 === t.length
            var o = t.length <= e,
              a = t.every(function (t) {
                return t.mediaFile && t.mediaFile.isImage
              })
            return o && a
          }
        },
        v = y({ maxNumberOfPhotos: 4 }),
        m = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = t.split(c.b.WordBoundary)
          return (
            e && r.pop(),
            !!r.find(function (t) {
              var e = Object(s.e)(t, 'compose')
              return e && 'users' === e.result_type
            })
          )
        }
    },
    wu3P: function (t, e, r) {
      'use strict'
      t.exports = function (t, e, r) {
        var n = t
        if (r === n.count())
          e.forEach(function (t) {
            n = n.push(t)
          })
        else if (0 === r)
          e.reverse().forEach(function (t) {
            n = n.unshift(t)
          })
        else {
          var i = n.slice(0, r),
            o = n.slice(r)
          n = i.concat(e, o).toList()
        }
        return n
      }
    },
    'ybp+': function (t, e, r) {
      'use strict'
      var n = r('1xkk')
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getStartKey()
        return n.set(t, {
          selection: e.merge({ anchorKey: r, anchorOffset: 0, focusKey: r, focusOffset: 0, isBackward: !1 }),
          forceSelection: !0,
        })
      }
    },
    yzfH: function (t, e, r) {
      'use strict'
      var n = r('ooRk'),
        i = r('YM28'),
        o = r('Svze'),
        a = r('wu3P'),
        s = r('tI3i'),
        u = r('n1lM'),
        c = o.List,
        l = function (t, e, r, n, i, o) {
          var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 'REPLACE_WITH_NEW_DATA',
            u = r.get(i),
            c = u.getText(),
            l = u.getCharacterList(),
            f = i,
            p = o + n.getText().length,
            d = null
          switch (s) {
            case 'MERGE_OLD_DATA_TO_NEW_DATA':
              d = n.getData().merge(u.getData())
              break
            case 'REPLACE_WITH_NEW_DATA':
              d = n.getData()
          }
          var h = u.getType()
          c && 'unstyled' === h && (h = n.getType())
          var g = u.merge({
            text: c.slice(0, o) + n.getText() + c.slice(o),
            characterList: a(l, n.getCharacterList(), o),
            type: h,
            data: d,
          })
          return t.merge({
            blockMap: r.set(i, g),
            selectionBefore: e,
            selectionAfter: e.merge({ anchorKey: f, anchorOffset: p, focusKey: f, focusOffset: p, isBackward: !1 }),
          })
        },
        f = function (t, e, r, o, a, s) {
          var u = r.first() instanceof i,
            l = [],
            f = o.size,
            p = r.get(a),
            d = o.first(),
            h = o.last(),
            g = h.getLength(),
            y = h.getKey(),
            v = u && (!p.getChildKeys().isEmpty() || !d.getChildKeys().isEmpty())
          r.forEach(function (t, e) {
            e === a
              ? (v
                  ? l.push(t)
                  : l.push(
                      (function (t, e, r) {
                        var n = t.getText(),
                          i = t.getCharacterList(),
                          o = n.slice(0, e),
                          a = i.slice(0, e),
                          s = r.first()
                        return t.merge({
                          text: o + s.getText(),
                          characterList: a.concat(s.getCharacterList()),
                          type: o ? t.getType() : s.getType(),
                          data: s.getData(),
                        })
                      })(t, s, o),
                    ),
                o.slice(v ? 0 : 1, f - 1).forEach(function (t) {
                  return l.push(t)
                }),
                l.push(
                  (function (t, e, r) {
                    var n = t.getText(),
                      i = t.getCharacterList(),
                      o = n.length,
                      a = n.slice(e, o),
                      s = i.slice(e, o),
                      u = r.last()
                    return u.merge({
                      text: u.getText() + a,
                      characterList: u.getCharacterList().concat(s),
                      data: u.getData(),
                    })
                  })(t, s, o),
                ))
              : l.push(t)
          })
          var m = n.createFromArray(l)
          return (
            u &&
              (m = (function (t, e, r, n) {
                return t.withMutations(function (e) {
                  var i = r.getKey(),
                    o = n.getKey(),
                    a = r.getNextSiblingKey(),
                    s = r.getParentKey(),
                    u = (function (t, e) {
                      var r = t.getKey(),
                        n = t,
                        i = []
                      for (e.get(r) && i.push(r); n && n.getNextSiblingKey(); ) {
                        var o = n.getNextSiblingKey()
                        if (!o) break
                        i.push(o), (n = e.get(o))
                      }
                      return i
                    })(n, t),
                    l = u[u.length - 1]
                  if (
                    (e.get(o)
                      ? (e.setIn([i, 'nextSibling'], o), e.setIn([o, 'prevSibling'], i))
                      : (e.setIn([i, 'nextSibling'], n.getNextSiblingKey()),
                        e.setIn([n.getNextSiblingKey(), 'prevSibling'], i)),
                    e.setIn([l, 'nextSibling'], a),
                    a && e.setIn([a, 'prevSibling'], l),
                    u.forEach(function (t) {
                      return e.setIn([t, 'parent'], s)
                    }),
                    s)
                  ) {
                    var f = t.get(s).getChildKeys(),
                      p = f.indexOf(i) + 1,
                      d = f.toArray()
                    d.splice.apply(d, [p, 0].concat(u)), e.setIn([s, 'children'], c(d))
                  }
                })
              })(m, 0, p, d)),
            t.merge({
              blockMap: m,
              selectionBefore: e,
              selectionAfter: e.merge({ anchorKey: y, anchorOffset: g, focusKey: y, focusOffset: g, isBackward: !1 }),
            })
          )
        }
      t.exports = function (t, e, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'REPLACE_WITH_NEW_DATA'
        e.isCollapsed() || s(!1)
        var o = t.getBlockMap(),
          a = u(r),
          c = e.getStartKey(),
          p = e.getStartOffset(),
          d = o.get(c)
        return (
          d instanceof i && (d.getChildKeys().isEmpty() || s(!1)),
          1 === a.size ? l(t, e, o, a.first(), c, p, n) : f(t, e, o, a, c, p)
        )
      }
    },
    z0XV: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        )
      }
      var i = r('rim0'),
        o = r('M7w5'),
        a = r('MKsC'),
        s = r('Svze'),
        u = r('tI3i'),
        c = r('hF1F'),
        l = s.Map,
        f = { subtree: !0, characterData: !0, childList: !0, characterDataOldValue: !1, attributes: !1 },
        p = i.isBrowser('IE <= 11'),
        d = (function () {
          function t(t) {
            var e = this
            n(this, 'observer', void 0),
              n(this, 'container', void 0),
              n(this, 'mutations', void 0),
              n(this, 'onCharData', void 0),
              (this.container = t),
              (this.mutations = l())
            var r = a(t)
            r.MutationObserver && !p
              ? (this.observer = new r.MutationObserver(function (t) {
                  return e.registerMutations(t)
                }))
              : (this.onCharData = function (t) {
                  t.target instanceof Node || u(!1), e.registerMutation({ type: 'characterData', target: t.target })
                })
          }
          var e = t.prototype
          return (
            (e.start = function () {
              this.observer
                ? this.observer.observe(this.container, f)
                : this.container.addEventListener('DOMCharacterDataModified', this.onCharData)
            }),
            (e.stopAndFlushMutations = function () {
              var t = this.observer
              t
                ? (this.registerMutations(t.takeRecords()), t.disconnect())
                : this.container.removeEventListener('DOMCharacterDataModified', this.onCharData)
              var e = this.mutations
              return (this.mutations = l()), e
            }),
            (e.registerMutations = function (t) {
              for (var e = 0; e < t.length; e++) this.registerMutation(t[e])
            }),
            (e.getMutationTextContent = function (t) {
              var e = t.type,
                r = t.target,
                n = t.removedNodes
              if ('characterData' === e) {
                if ('' !== r.textContent) return p ? r.textContent.replace('\n', '') : r.textContent
              } else if ('childList' === e) {
                if (n && n.length) return ''
                if ('' !== r.textContent) return r.textContent
              }
              return null
            }),
            (e.registerMutation = function (t) {
              var e = this.getMutationTextContent(t)
              if (null != e) {
                var r = c(o(t.target))
                this.mutations = this.mutations.set(r, e)
              }
            }),
            t
          )
        })()
      t.exports = d
    },
    zRF8: function (t, e, r) {},
    zYrz: function (t, e, r) {
      'use strict'
      var n = r('W6iK'),
        i = r('AL/+'),
        o = function (t, e) {
          return t === e
        },
        a = function (t) {
          return !!t
        },
        s = []
      t.exports = function (t) {
        var e = t
            .getCharacterList()
            .map(function (t) {
              return t.getStyle()
            })
            .toList(),
          r = e
            .flatten()
            .toSet()
            .map(function (r) {
              return (function (t, e, r) {
                var s = [],
                  u = e
                    .map(function (t) {
                      return t.has(r)
                    })
                    .toList()
                return (
                  i(u, o, a, function (e, i) {
                    var o = t.getText()
                    s.push({ offset: n.strlen(o.slice(0, e)), length: n.strlen(o.slice(e, i)), style: r })
                  }),
                  s
                )
              })(t, e, r)
            })
        return Array.prototype.concat.apply(s, r.toJS())
      }
    },
    zgZY: function (t, e, r) {
      'use strict'
      var n = Object.prototype.hasOwnProperty
      t.exports = function (t, e, r) {
        if (!t) return null
        var i = {}
        for (var o in t) n.call(t, o) && (i[o] = e.call(r, t[o], o, t))
        return i
      }
    },
    zpdM: function (t, e, r) {
      'use strict'
      var n = r('ApIa'),
        i = r('ooRk'),
        o = r('b+nQ'),
        a = r('wH9P'),
        s = r('IbSy'),
        u = r('VeLA'),
        c = r('VUbk'),
        l = r('naKV'),
        f = r('0Uhd'),
        p = r('MOn9'),
        d = r('krsZ'),
        h = r('7002'),
        g = r('or4R'),
        y = r('1xkk'),
        v = r('laB8'),
        m = r('zRF8'),
        _ = r('9Kr7'),
        b = r('IDEf'),
        S = r('GyyK'),
        w = r('KOTo'),
        x = r('YSZ8'),
        k = r('gZn9'),
        C = r('dVQN'),
        E = {
          Editor: f,
          EditorBlock: p,
          EditorState: y,
          CompositeDecorator: a,
          Entity: d,
          EntityInstance: g,
          BlockMapBuilder: i,
          CharacterMetadata: o,
          ContentBlock: s,
          ContentState: u,
          RawDraftContentState: m,
          SelectionState: b,
          AtomicBlockUtils: n,
          KeyBindingUtil: v,
          Modifier: h,
          RichUtils: _,
          DefaultDraftBlockRenderMap: c,
          DefaultDraftInlineStyle: l,
          convertFromHTML: r('tO3r'),
          convertFromRaw: w,
          convertToRaw: S,
          genKey: x,
          getDefaultKeyBinding: k,
          getVisibleSelectionRect: C,
        }
      t.exports = E
    },
  },
])
//# sourceMappingURL=WIPED
