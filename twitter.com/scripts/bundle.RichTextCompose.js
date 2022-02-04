;(window.webpackJsonp = window.webpackJsonp || []).push([
  [83, 77],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return y
      }),
        n.d(t, 'e', function () {
          return v
        }),
        n.d(t, 'h', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return T
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return x
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        l = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        u = n('Ssj5'),
        d = n('qlwE'),
        p = n('a/ea'),
        m = n('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        g = Object.freeze({
          initial: { fetchStatus: s.a.NONE },
          lastSearch: { fetchStatus: s.a.NONE },
          lastSelectedPlace: void 0,
        })
      var y = function (e) {
          return e.placePicker.initial.results
        },
        v = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        _ = function (e) {
          return e.placePicker.lastSearch.results
        },
        b = function (e) {
          return e.placePicker.lastSearch.fetchStatus
        },
        C = function (e) {
          return (function (e, t) {
            return null != t
              ? t
              : null == e
              ? void 0
              : e.places.find(function (t) {
                  return (null == e ? void 0 : e.autotag_place_id) === t.place.id
                })
          })(
            y(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        w = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            return Object(l.b)(n, { request: o.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, n, a) {
            a.api
            var r = Object(p.d)(n())
            return t(
              w(
                {
                  query_type: m.a.tweet_compose_location,
                  lat: null == r ? void 0 : r.coords.latitude,
                  long: null == r ? void 0 : r.coords.longitude,
                  hacc: null == r ? void 0 : r.coords.accuracy,
                  search_term: e,
                },
                m.c.lastSearch,
              ),
            )
          }
        },
        E = function () {
          return function (e, t, n) {
            n.api
            var a = v(t()),
              r = y(t())
            if (a === s.a.LOADING || r) return Promise.resolve()
            var o = Object(p.d)(t())
            return o
              ? e(
                  w(
                    {
                      lat: o.coords.latitude,
                      long: o.coords.longitude,
                      hacc: o.coords.accuracy,
                      query_type: m.a.tweet_compose_location,
                      count: 50,
                    },
                    m.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        x = function () {
          return function (e, t, n) {
            n.api
            return Object(d.l)(t()) && Object(p.c)(t()) === c.b.granted
              ? e(Object(p.b)())
                  .then(function () {
                    return e(E())
                  })
                  .then(function () {
                    return C(t())
                  })
              : Promise.resolve()
          }
        },
        S = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        I = function (e) {
          return { type: S, payload: e }
        }
      u.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return i()(i()({}, e), {}, r()({}, n, { fetchStatus: s.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return i()(i()({}, e), {}, r()({}, a, { fetchStatus: s.a.FAILED }))
            case f.SUCCESS:
              var o = t.meta.resultSet,
                l = t.payload
              return i()(i()({}, e), {}, r()({}, o, { fetchStatus: s.a.LOADED, results: l }))
            case S:
              var c = t.payload
              return i()(i()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '2WeA': function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var a = n('pcjM'),
        r = n('ORQL')
      t.default = Object(r.a)(a.default)
    },
    '3GUV': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        u = n.n(c),
        d = n('ERkP'),
        p = n.n(d),
        m = n('rHpw'),
        h = n('MWbm'),
        f = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return p.a.createElement(h.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        g = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = f
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
        o = n('3XMw'),
        i = n.n(o),
        l = n('SrIh'),
        s = i.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(l.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return o
        })
      n('yH/f')
      var a = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        r = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        o = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '5UID': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        u = n.n(c),
        d = n('ERkP'),
        p = n.n(d),
        m = n('3XMw'),
        h = n.n(m),
        f = n('rHpw'),
        g = n('+/1j'),
        y = n('MWbm'),
        v = h.a.e5b0063d,
        _ = 0,
        b = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(_)), (_ += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = v({ title: n })
                  return p.a.createElement(
                    y.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.a.createElement(
                      g.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: f.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.a.createElement(y.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      t.a = b
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
              }),
              i.a.createElement('path', {
                d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    Drq4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              i.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    FS1z: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        y = n('rxPX'),
        v = n('0KEI'),
        _ = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        b = function (e, t) {
          return t.module.selectItems(e)
        },
        C = Object(y.a)()
          .propsFromState(function (e) {
            return { fetchStatus: _, items: b }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        w = n('v//M'),
        T = n('sIe2'),
        E = n('3XMw'),
        x = n.n(E),
        S = n('TEoO'),
        I = x.a.i9028824,
        R = 'sliceTimeline',
        k = function (e) {
          return e
        },
        A = { viewType: 'timeline' },
        D = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  l = t.renderer,
                  s = t.withoutHeadroom
                return !a || o < 1
                  ? null
                  : 1 === o
                  ? g.a.createElement(S.a, {
                      cacheKey: R,
                      footer: n,
                      identityFunction: k,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: l,
                      withoutHeadroom: s,
                    })
                  : g.a.createElement(T.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: k,
                      numColumns: o,
                      renderItem: l,
                    })
              }),
              h()(s()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              h()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetch,
                  o = t.fetchIfNeeded
                ;(n ? r : o)().catch(a())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.module
                  e.module !== t && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.module,
                    a = e.retryMessage
                  return n
                    ? g.a.createElement(w.a, {
                        accessibilityLabel: I,
                        behavioralEventContext: A,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: a,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(D, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var O = C(D)
      t.a = O
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      n('yH/f')
      var a = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    ORQL: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        l = n('RH6X'),
        s = n('rziq'),
        c = n('hHEM'),
        u = n('keCP'),
        d = {
          convertEmojiToEntities: c.a.convertEmojiToEntities,
          element: u.a,
          initEditorState: c.a.initEditorState,
          insertTextAtCursor: c.a.insertTextAtCursor,
          updateOverflowStyle: c.a.updateOverflowStyle,
          dismissComposerCommandName: s.a,
          sendTweetCommandName: s.b,
        }
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(e, r()({}, t, { richTextInputContext: d, typeaheadWrapper: l.a }))
        }
      }
    },
    RH6X: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        g = n.n(f),
        y = n('oEoC'),
        v = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        C = n('GZwR'),
        w = n('zpdM'),
        T = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(s()(e), '_genericWrapperRef', g.a.createRef()),
              h()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  o = t.isInlineReply,
                  i = t.onTypeaheadStateChange,
                  l = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  u = s.queryContext,
                  d = c && u ? { word: u.word, resultType: u.resultType } : void 0
                return g.a.createElement(
                  v.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: o,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: i,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: l || C.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(s()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              h()(s()(e), '_handleInputChange', function (t) {
                if (!Object(b.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  a = n && n.word,
                  r = e._getPlaintextFromCurrentBlock(t),
                  o = y.c(e._getCaret(t), r),
                  i = o.end,
                  l = o.start,
                  s = o.word,
                  c = y.e(s || '', 'compose')
                if ((null == c ? void 0 : c.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (c) {
                    var u = c.q,
                      d = c.result_type
                    e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: l, endIndex: i })
                  } else e._setQueryContext(void 0)
              }),
              h()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(s()(e), '_handleDismiss', function () {
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
                    a = t.endIndex,
                    r = t.startIndex,
                    o = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                    i = w.Modifier.replaceText(n.getCurrentContent(), o, e),
                    l = w.EditorState.push(n, i, 'insert-characters'),
                    s = r + e.length,
                    c = l.getSelection().merge({ anchorOffset: s, focusOffset: s })
                  return w.EditorState.forceSelection(l, c)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.a = T
    },
    RrO2: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var a = n('ORQL'),
        r = n('x8Sc')
      t.default = Object(a.a)(r.default)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        l = n('5UID'),
        s = n('3GUV'),
        c = n('iBK2'),
        u = ['accessibilityTitle'],
        d = i.a.createElement(s.a, null),
        p = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, u),
            a = i.a.createElement(c.b, n)
          return t ? i.a.createElement(l.a, { title: t }, a) : a
        }
      ;(p.defaultProps = { footer: d }), (t.a = p)
    },
    WOwf: function (e, t, n) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    XpKj: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return _
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        l = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        s = n('kGix'),
        c = n('Ssj5'),
        u = 'scheduledTweets',
        d = { fetchStatus: s.a.NONE, scheduledTweets: [] },
        p = 'FETCH_SCHEDULED_TWEETS',
        m = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE',
        }),
        h = 'DELETE_SCHEDULED_TWEET',
        f = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        g = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case m.SUCCESS:
            if (t.payload) return i()(i()({}, e), {}, { fetchStatus: s.a.LOADED, scheduledTweets: t.payload })
            break
          case m.FAILURE:
            return i()(i()({}, e), {}, { fetchStatus: s.a.FAILED })
          case m.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: s.a.LOADING })
          case f.SUCCESS:
            var n = t.meta
            return n && n.deleteScheduledTweetId
              ? i()(i()({}, e), {}, { scheduledTweets: g(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(r()({}, u, y))
      var v = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        _ = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        b = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(l.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: m,
              context: p,
            }).then(function () {})
          }
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(l.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: f,
              context: h,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return d
      }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return y
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        l = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        s = n('Ssj5'),
        c = 'geoLocation',
        u = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var d = function (e) {
          return e.geoLocation.permissionStatus
        },
        p = function (e) {
          return e.geoLocation.position
        },
        m = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: m }
        },
        f = 'rweb/geoLocation/SET_POSITION',
        g = function () {
          return function (e, t) {
            return v()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(l.b.denied)), Promise.reject(t)
              })
          }
        },
        y = function () {
          return function (e, t) {
            return p(t()) ? Promise.resolve() : e(g())
          }
        },
        v = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var n = {
                timestamp: t.timestamp,
                coords: {
                  latitude: t.coords.latitude,
                  longitude: t.coords.longitude,
                  altitude: t.coords.altitude,
                  accuracy: t.coords.accuracy,
                  altitudeAccuracy: t.coords.altitudeAccuracy,
                  heading: t.coords.heading,
                  speed: t.coords.speed,
                },
              }
              return e(n)
            }, t)
          })
        }
      s.a.register(
        r()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m:
              return i()(i()({}, e), {}, { permissionStatus: t.payload })
            case f:
              return i()(i()({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    dWxr: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, l.default)(e, t)
            .concat((0, i.default)(e))
            .concat((0, o.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, s.default)(n), n
        })
      var r = a(n('EW8Q')),
        o = a(n('yyPN')),
        i = a(n('YXS5')),
        l = a(n('vwfs')),
        s = a(n('c8jd'))
      e.exports = t.default
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        l = n('yiKp'),
        s = n.n(l),
        c = n('VrFO'),
        u = n.n(c),
        d = n('Y9Ll'),
        p = n.n(d),
        m = n('1Pcy'),
        h = n.n(m),
        f = n('5Yy7'),
        g = n.n(f),
        y = n('2VqO'),
        v = n.n(y),
        _ = n('KEM+'),
        b = n.n(_),
        C =
          (n('2G9S'),
          n('yH/f'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('5BYb'),
          n('KqXw'),
          n('3uku'),
          n('7xRU'),
          n('JtPf'),
          n('jQ3i'),
          n('x4t0'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('MvUL'),
          n('ulNE'),
          n('urw/'),
          n('LW0h'),
          n('hCOa'),
          n('DfhM'),
          n('hBvt'),
          n('vrRf'),
          n('uFXj'),
          n('ERkP')),
        w = n.n(C),
        T = n('ye3X'),
        E = n('pXBW'),
        x = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('v6aA'),
        R = n('+Kfv'),
        k = n('eSoz'),
        A = n('rxPX'),
        D = function (e, t) {
          var n = t.communityId
          return n ? k.c.select(e, n) : void 0
        },
        O = Object(A.a)().propsFromState(function () {
          return { community: D }
        }),
        P = n('MtXG'),
        M = n('t62R'),
        F = n('CKsB'),
        B = n('rHpw'),
        L = n('3XMw'),
        N = n.n(L),
        V = N.a.d58baa7e,
        j = O(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var o,
              i = n.member_count
            return w.a.createElement(F.a, {
              actionSubText:
                ((o = V(i)),
                w.a.createElement(
                  P.a.Group,
                  null,
                  w.a.createElement(
                    P.a,
                    null,
                    w.a.createElement(
                      M.b,
                      { color: 'white' },
                      w.a.createElement(
                        N.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(P.a.Value, null, N.a.ibd0106d({ formattedCount: o })),
                        w.a.createElement(P.a.Label, null, N.a.cface2d0({ count: i })),
                      ),
                    ),
                  ),
                )),
              actionText: n.name,
              isSelected: r === a,
              key: a,
              media: n.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: a,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: H.menuItem,
            })
          }),
        ),
        H = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        U = n('0zXz'),
        z = n('FS1z'),
        W = n('MWbm'),
        K = n('yw4N'),
        q = n('/yvb'),
        G = n('+Eiw'),
        Y = n('Zg3A'),
        X = n('EyD/'),
        Q = N.a.e815fc33,
        J = N.a.c63602d3,
        Z = N.a.baffe39a,
        $ = N.a.aa4209e8,
        ee = N.a.d0748dae,
        te = N.a.abd845fd,
        ne = N.a.d58baa7e,
        ae = B.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: G.a.getBackgroundImage() },
            viewport: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'auto',
              zIndex: void 0,
            },
          }
        }),
        re = function (e) {
          var t,
            n,
            a = e.audienceControlsValue,
            r = e.dismiss,
            o = e.hasMemberships,
            i = e.isC9sParticipationEnabled,
            l = e.isSuperFollowsCreator,
            s = e.onAudienceControlsValueChange,
            c = e.sliceModule,
            u = w.a.useContext(I.a),
            d = a.communityIdValue || void 0,
            p = a.exclusivityControlValue || void 0,
            m = a.trustedFriendsValue || void 0,
            h = u.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            f = w.a.useCallback(
              function (e) {
                return function () {
                  s(e), r()
                }
              },
              [s, r],
            ),
            g = function (t) {
              t.stopPropagation()
              var n = e.dismiss,
                a = e.history
              return n(), a.push('/i/twittercircle/edit')
            }
          return w.a.createElement(
            W.a,
            { style: ae.root },
            w.a.createElement(
              K.a,
              { style: ae.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(M.b, { size: 'headline1', style: ae.title, weight: 'bold' }, Q),
                w.a.createElement(
                  R.a,
                  { viewType: 'everyone' },
                  w.a.createElement(F.a, {
                    Icon: Y.a,
                    actionText: Z,
                    isSelected: !p && !d && !m,
                    onClick: f({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: ae.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                l
                  ? w.a.createElement(F.a, {
                      Icon: X.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!p,
                      onClick: f({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: ae.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                h
                  ? w.a.createElement(F.a, {
                      Icon: X.a,
                      actionSubText:
                        ((t = 5),
                        (n = ne(t)),
                        w.a.createElement(
                          P.a.Group,
                          null,
                          w.a.createElement(
                            P.a,
                            null,
                            w.a.createElement(
                              M.b,
                              { color: 'white' },
                              w.a.createElement(
                                N.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(P.a.Value, null, N.a.a5f7b70f({ formattedCount: n })),
                                w.a.createElement(P.a.Label, null, N.a.a7daec1e({ count: t })),
                              ),
                            ),
                            w.a.createElement(q.a, { onPress: g, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!m,
                      onClick: f({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: {},
                      }),
                      selectable: !0,
                      style: ae.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              o && c && i
                ? w.a.createElement(
                    W.a,
                    null,
                    w.a.createElement(
                      R.a,
                      { viewType: 'community' },
                      w.a.createElement(M.b, { style: ae.title, weight: 'bold' }, J),
                      w.a.createElement(z.a, {
                        module: c,
                        noItemsRenderer: U.a,
                        renderer: function (e) {
                          return w.a.createElement(j, {
                            clickHandler: f,
                            communityId: e,
                            dismiss: r,
                            key: e,
                            selectedCommunityId: d,
                          })
                        },
                        withoutHeadroom: !0,
                      }),
                    ),
                  )
                : null,
            ),
          )
        },
        oe = n('xVN5'),
        ie = n('wa7Z'),
        le = n('hqKg'),
        se = n('li/m'),
        ce = n('RqPI'),
        ue = n('xZGM'),
        de = n('0KEI'),
        pe = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? k.c.select(e, n) : void 0
        },
        me = function (e, t) {
          return Object(ue.z)(e, ue.f)
        },
        he = Object(A.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: me,
              hasMemberships: se.d,
              selectedCommunity: pe,
              sliceModule: Object(le.createSelector)(ce.q, function (e) {
                return e ? Object(ie.a)(e) : void 0
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(ue.w)(ue.f)
              },
              updateSingleComposer: oe.x,
            }
          }),
        fe = n('FG+G'),
        ge = n('Sp5X'),
        ye = n('X00g'),
        ve = n('efqG'),
        _e = N.a.baffe39a,
        be = N.a.e815fc33,
        Ce = N.a.aa4209e8,
        we = N.a.d0748dae,
        Te = w.a.createElement(fe.a, null),
        Ee = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_renderContent', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.hasMemberships,
                  o = t.isC9sParticipationEnabled,
                  i = t.isSuperFollowsCreator,
                  l = t.sliceModule
                return w.a.createElement(re, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: ge.a,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: i,
                  onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                  sliceModule: l,
                })
              }),
              b()(h()(r), '_handleAudienceControlsValueChange', function (e) {
                var t = r.props.updateSingleComposer
                r._handleDismissEducationalVisibilty(),
                  r.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              b()(h()(r), '_handleOpen', function () {
                r.setState({ popoverIsOpen: !0 })
              }),
              b()(h()(r), '_handleDismiss', function () {
                r.setState({ popoverIsOpen: !1 }), r._handleDismissEducationalVisibilty()
              }),
              b()(h()(r), '_handleDismissEducationalVisibilty', function () {
                r.props.addEducationFlag()
              }),
              (r.state = { popoverIsOpen: !1 }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    o = t.hasMemberships,
                    i = t.isSuperFollowsCreator,
                    l = t.selectedCommunity,
                    s = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    u = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    d = n.communityIdValue || !1,
                    p = n.exclusivityControlValue || !1,
                    m = n.trustedFriendsValue || !1,
                    h = a && !l,
                    f = _e
                  if ((d && null != l && l.name ? (f = l.name) : p ? (f = Ce) : m && (f = we), p))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (d && null != l && l.theme && c) {
                    var g = ye.a.getCommunityUIColorName(l.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o || u
                    ? w.a.createElement(
                        R.a,
                        { viewType: 'communities_controls' },
                        w.a.createElement(
                          W.a,
                          { style: xe.container },
                          w.a.createElement(
                            ve.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            w.a.createElement(
                              q.a,
                              r()(
                                {
                                  accessibilityExpanded: s,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: be,
                                  accessibilityRole: 'button',
                                  icon: Te,
                                  size: 'xSmall',
                                },
                                e,
                              ),
                              f,
                            ),
                          ),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Ee, 'contextType', I.a)
      var xe = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Se = he(Ee),
        Ie = n('ddV6'),
        Re = n.n(Ie),
        ke = n('PKbs'),
        Ae = function (e, t) {
          var n = t.selectedCommunityId
          return n ? k.c.select(e, n) : void 0
        },
        De = Object(A.a)()
          .propsFromState(function () {
            return { community: Ae }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        Oe = n('YeIG'),
        Pe = n('21zW'),
        Me = N.a.gfca5254,
        Fe = N.a.f510c8b2,
        Be = w.a.createElement(M.b, { weight: 'bold' }, Fe),
        Le = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            badgeStyle: { marginRight: e.spaces.space12 },
            container: {
              display: 'inline-flex',
              flexDirection: 'row',
              paddingBottom: e.spaces.space12,
              alignItems: 'baseline',
            },
            rulesHeader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space12 },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: 'normal' },
          }
        }),
        Ne = De(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          w.a.useEffect(
            function () {
              o && Object(Oe.a)(t) && a(o).catch(n())
            },
            [t, o, n, a],
          )
          var l = w.a.useState(!1),
            s = Re()(l, 2),
            c = s[0],
            u = s[1],
            d = w.a.useContext(I.a).featureSwitches,
            p = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(ke.b, {
                    badgeStyle: Le.badgeStyle,
                    headerContainerStyle: Le.rulesHeader,
                    heading: Be,
                    ruleContainerStyle: Le.ruleContainerStyle,
                    rules: n,
                    theme: a,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var m = t.theme,
              h = ye.a.getCommunityUIColorName(m),
              f = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              W.a,
              { style: Le.container },
              i ? w.a.createElement(Pe.a, null) : null,
              w.a.createElement(
                ve.a,
                {
                  onDismiss: function () {
                    return u(!1)
                  },
                  onOpen: function () {
                    return u(!0)
                  },
                  renderContent: p,
                },
                w.a.createElement(
                  q.a,
                  r()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Le.button,
                    },
                    f,
                  ),
                  Me,
                ),
              ),
            )
          }
          return null
        }),
        Ve = function (e, t) {
          return Object(ue.z)(e, ue.g)
        },
        je = Object(A.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Ve }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ue.w)(ue.g)
              },
            }
          }),
        He = n('4zmP'),
        Ue = N.a.g46f363d,
        ze = { viewType: 'rule_education' }
      var We = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ke = je(function (e) {
          var t = e.addEducationFlag,
            n = e.shouldShowEducation,
            a = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return a
            }),
            n
              ? w.a.createElement(
                  W.a,
                  { style: We.container },
                  w.a.createElement(He.a, { behavioralEventContext: ze, onClose: a, text: Ue, withCloseButton: !0 }),
                )
              : null
          )
        }),
        qe = n('H7Rt'),
        Ge = n('m3Bd'),
        Ye = n.n(Ge),
        Xe = n('yZqq'),
        Qe = function (e, t) {
          return Object(ue.z)(e, ue.q)
        },
        Je = Object(A.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Qe }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ue.w)(ue.q)
              },
            }
          }),
        Ze = N.a.aa65a449,
        $e = { viewType: 'persistent_conversation_controls_education' }
      var et = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        tt = Je(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.a.useContext(I.a).featureSwitches,
            o = w.a.useState(),
            i = Re()(o, 2),
            l = i[0],
            s = i[1],
            c = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return c
            }, []),
            w.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  s(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  W.a,
                  { style: et.container },
                  w.a.createElement(He.a, {
                    arrowPositionStart: l,
                    behavioralEventContext: $e,
                    onClose: c,
                    text: Ze,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        nt = n('Irs7'),
        at = n('DlMI'),
        rt = n('gBde'),
        ot = n('gUPl'),
        it = n('cOhU'),
        lt = ['analytics'],
        st = w.a.createElement(at.a, null),
        ct = w.a.createElement(rt.a, null),
        ut = w.a.createElement(ot.a, null),
        dt = w.a.createElement(it.a, null),
        pt = 'conversation_control',
        mt = Object.freeze({
          all: { icon: st, label: N.a.i8ea6d4e },
          community: { icon: ut, label: N.a.ec5a4a25 },
          by_invitation: { icon: ct, label: N.a.b4543009 },
          community_members: { icon: dt, label: N.a.i13be5a0 },
          super_followers_exclusive: { icon: st, label: N.a.f8393bda },
          trusted_friends_tweet: { icon: st, label: N.a.c0857ccd },
        }),
        ht =
          (Object.freeze(['community', 'by_invitation']),
          Object(nt.a)(function (e) {
            var t = e.analytics,
              n = Ye()(e, lt),
              a = e.disabled,
              r = e.value,
              o = mt[r],
              i = o.icon,
              l = o.label,
              s = w.a.useState(!1),
              c = Re()(s, 2),
              u = c[0],
              d = c[1],
              p = w.a.useRef(null)
            w.a.useEffect(function () {
              r !== qe.a.all && r !== qe.a.community_members && d(!0)
            }, [])
            var m = w.a.useCallback(
              function (e) {
                t.scribe({ element: pt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              R.a,
              { viewType: pt },
              u ? w.a.createElement(tt, { buttonRef: p.current }) : null,
              w.a.createElement(
                W.a,
                { style: ft.controlsContainer },
                w.a.createElement(
                  Xe.a,
                  n,
                  w.a.createElement(
                    q.a,
                    { disabled: a, icon: i, onPress: m, ref: p, size: 'xSmall', style: ft.button, type: 'brandText' },
                    l,
                  ),
                ),
              ),
            )
          })),
        ft = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        gt = n('krmn'),
        yt = n('cIoY'),
        vt = n('w3n3'),
        _t = n('MLl7'),
        bt = n('1auM'),
        Ct = n('07FG'),
        wt = n('Q8CU'),
        Tt = n('QbaN'),
        Et = n('VPdC'),
        xt = n('WPfJ'),
        St = B.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            avatarContainerExpanded: { paddingTop: e.spaces.space4 },
            avatarContainer: { justifyContent: 'center' },
            avatar: { width: '100%' },
            controlsContainer: {
              marginLeft: -e.spacesPx.space8,
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.spaces.space1,
              flexWrap: 'wrap',
              width: '100%',
            },
            mobileControlsLayout: { flexDirection: 'column' },
            controlsLayout: { flexDirection: 'row', alignItems: 'center' },
            rightColumn: {
              paddingTop: e.spaces.space4,
              justifyContent: 'center',
              position: 'static',
              transitionProperty: 'opacity, color',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
            },
            composeBoxContainer: {
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              flexShrink: 1,
              position: 'static',
              zIndex: 1,
            },
            inputArea: { zIndex: 1 },
            dragDrop: {
              borderColor: e.colors.transparent,
              borderRadius: e.borderRadii.small,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
            },
            textInputArea: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              zIndex: xt.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: xt.e },
            iconEmojiPicker: { zIndex: xt.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: xt.a,
            },
            firstToolBarButton: { marginLeft: '-'.concat(e.spaces.space8) },
            toolBarButton: { marginHorizontal: 0 },
            toolBarIconsContainer: { alignItems: 'center', flexDirection: 'row', marginTop: e.spaces.space12 },
            separator: {
              width: '1px',
              backgroundColor: e.colors.gray300,
              height: e.fontSizes.title2,
              marginRight: e.spaces.space12,
              marginLeft: 'calc('.concat(e.spaces.space12, ' - 2px)'),
            },
            conversationLine: {
              alignSelf: 'center',
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              flexShrink: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginTop: e.spaces.space4,
              marginBottom: e.spaces.space4,
            },
            conversationLineWithOverflow: { marginTop: '-'.concat(e.spaces.space4) },
            attachmentContainer: { marginTop: e.spaces.space4, marginBottom: e.spaces.space4 },
            mediaPreview: { marginTop: e.spaces.space4 },
            quoteTweet: { backgroundColor: e.colors.transparent, marginTop: e.spaces.space4, marginBottom: 0 },
            addImageTextContainer: {
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            },
            addImageActionIcon: { marginHorizontal: e.spaces.space4 },
            addImageTextPadding: { marginEnd: e.spaces.space48 },
            imageActions: { alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: e.spaces.space4 },
            blurStyle: { opacity: 0.5 },
            inputStyle: { width: '100%' },
            collapsedInputStyle: { flexGrow: 1, flexShrink: 1 },
            highlightedText: {
              borderRadius: e.borderRadii.large,
              paddingVertical: e.spaces.space12,
              paddingLeft: e.spaces.space12,
              marginTop: 0,
              marginBottom: 0,
            },
            highlightedTextInner: { marginHorizontal: e.spaces.space4 },
            taggedLocationButton: {
              paddingLeft: e.spacesPx.space8 + e.spacesPx.space2,
              paddingRight: e.spacesPx.space8 + e.spacesPx.space2,
              maxWidth: '100%',
            },
            taggedLocationContainer: {
              display: 'inline-flex',
              flexDirection: 'row',
              minWidth: 0,
              flexShrink: 1,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        It = N.a.bdbcdd93,
        Rt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            o = n || t.length >= 4,
            i = t.length < 3
          return w.a.createElement(Et.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? It : void 0,
            disabled: o,
            multiple: i,
            onChange: a,
            onPress: r,
            style: [St.toolBarButton, St.firstToolBarButton],
            type: 'brandText',
          })
        },
        kt = n('p+r5'),
        At = n('GWvE'),
        Dt = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(h()(e), '_setInputRef', function (t) {
                e._inputRef = t
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.defaultValue,
                    a = e.editable,
                    r = e.label,
                    o = e.name,
                    i = e.onBlur,
                    l = e.onChange
                  return w.a.createElement(
                    W.a,
                    { style: Ot.root },
                    w.a.createElement(kt.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: r,
                      maxLength: 25,
                      name: o,
                      onBlur: i,
                      onChange: l,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Ot.formTextInput,
                    }),
                  )
                },
              },
              {
                key: 'value',
                get: function () {
                  return this._inputRef && this._inputRef.getValue()
                },
              },
              {
                key: 'isValid',
                get: function () {
                  var e = this.props.optional
                  return (
                    (!this.value && e) ||
                    (this.value && !Object(At.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Dt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Ot = B.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1 },
            action: { width: e.spaces.space40 },
            addButton: { flexGrow: 1, minHeight: '100%', padding: 0 },
            formTextInput: {
              flexGrow: 1,
              flexShrink: 1,
              marginVertical: 0,
              paddingTop: 0,
              paddingHorizontal: 0,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        Pt = Dt,
        Mt = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        Ft = n('6XNv'),
        Bt = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.label,
                    a = e.last,
                    r = e.max,
                    o = e.min,
                    i = e.onChange,
                    l = e.testID,
                    s = !t || o === r,
                    c = e.value.toString(),
                    u = Object(Mt.a)(o, r + 1).map(function (e) {
                      return { label: ''.concat(N.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(Ft.a, {
                    disabled: s,
                    label: n,
                    onChange: i,
                    options: u,
                    style: [Lt.selector, !a && Lt.rightMargin],
                    testID: l,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(Bt, 'defaultProps', { last: !1 })
      var Lt = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Nt = Bt,
        Vt = 'addPollChoice',
        jt = 'selectPollDays',
        Ht = 'selectPollHours',
        Ut = 'selectPollMinutes',
        zt = 'removePollButton',
        Wt = N.a.caf8edc4,
        Kt = N.a.g93586be,
        qt = N.a.d073b644,
        Gt = N.a.a2f0728e,
        Yt = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_handleDaysChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.hours,
                    o = a.minutes,
                    i = 0 === n && 0 === r && 0 === o ? 1 : 7 === n ? 0 : r,
                    l = { days: n, hours: i, minutes: 7 === n ? 0 : 0 === n && 0 === i && o < 5 ? 5 : o }
                  return t && t(l), { duration: l }
                })
              }),
              b()(h()(r), '_handleHoursChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.days,
                    o = a.minutes,
                    i = { days: r, hours: n, minutes: 0 === r && 0 === n && o < 5 ? 5 : o }
                  return t && t(i), { duration: i }
                })
              }),
              b()(h()(r), '_handleMinutesChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = { days: a.days, hours: a.hours, minutes: n }
                  return t && t(r), { duration: r }
                })
              }),
              (r.state = { duration: e.initialDuration }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    n = e.style
                  return w.a.createElement(
                    W.a,
                    { style: n },
                    w.a.createElement(M.b, { color: 'normal', style: Xt.durationLabel }, t ? Wt : ''),
                    this._renderPicker(),
                  )
                },
              },
              {
                key: '_renderPicker',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.isActive,
                    a = this.state.duration,
                    r = a.days,
                    o = a.hours,
                    i = a.minutes
                  return w.a.createElement(
                    W.a,
                    { style: Xt.durationControls },
                    w.a.createElement(Nt, {
                      editable: t && n,
                      label: Kt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: jt,
                      value: r,
                    }),
                    w.a.createElement(Nt, {
                      editable: t && n,
                      label: qt,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Ht,
                      value: o,
                    }),
                    w.a.createElement(Nt, {
                      editable: t && n,
                      label: Gt,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === o ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Ut,
                      value: i,
                    }),
                  )
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this.state.duration
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Yt, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Xt = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Qt = Yt,
        Jt = n('iY63'),
        Zt = n('jtO7'),
        $t = N.a.g589c2e1,
        en = N.a.a1e6c3a1,
        tn = N.a.a739e006,
        nn = N.a.d89a5b92,
        an = N.a.c2a8118d,
        rn = N.a.a8ede1de,
        on = N.a.af40a8ef,
        ln = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r
            u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_setChoice1Ref', function (e) {
                r._choice1 = e
              }),
              b()(h()(r), '_setChoice2Ref', function (e) {
                r._choice2 = e
              }),
              b()(h()(r), '_setChoice3Ref', function (e) {
                r._choice3 = e
              }),
              b()(h()(r), '_setChoice4Ref', function (e) {
                r._choice4 = e
              }),
              b()(h()(r), '_setDurationPickerRef', function (e) {
                r._durationPicker = e
              }),
              b()(h()(r), '_handleValidation', function () {
                var e = r.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  o = r.choices,
                  i = h()(r),
                  l = [i._choice1, i._choice2, i._choice3, i._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                o && o.length >= 2 && l ? a() : n(), t && t({ choices: o, duration: r.duration })
              }),
              b()(h()(r), '_handleAdd', function () {
                r.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  r.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              b()(h()(r), '_handleDurationChange', function (e) {
                var t = r.props.onChange
                t && t({ choices: r.choices, duration: e })
              }),
              b()(h()(r), '_handleBlur', function () {
                var e = r.props.onBlur
                null == e || e()
              })
            var o = e.initialChoices,
              i = void 0 === o,
              l = (o || []).length,
              s = l > 2 ? l : 2
            return (r.state = { autoFocus: i, choiceCount: s }), r
          }
          return (
            p()(n, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialChoices,
                    a = void 0 === n ? [] : n,
                    r = e.isActive,
                    o = this.state,
                    i = o.autoFocus,
                    l = o.choiceCount,
                    s = w.a.createElement(
                      W.a,
                      { style: sn.rightColumn },
                      l < 4
                        ? w.a.createElement(q.a, {
                            accessibilityLabel: rn,
                            disabled: !(t && r),
                            hoverLabel: { label: on },
                            icon: w.a.createElement(Jt.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: sn.addButton,
                            testID: Vt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    W.a,
                    { style: sn.choicesAndAddButton },
                    w.a.createElement(
                      W.a,
                      { style: sn.choices },
                      w.a.createElement(Pt, {
                        autoFocus: i,
                        defaultValue: a[0],
                        editable: t && r,
                        label: $t,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(Pt, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: en,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      l >= 3
                        ? w.a.createElement(Pt, {
                            autoFocus: i,
                            defaultValue: a[2],
                            editable: t && r,
                            label: tn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === l
                        ? w.a.createElement(Pt, {
                            autoFocus: i,
                            defaultValue: a[3],
                            editable: t && r,
                            label: nn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    s,
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialDuration,
                    a = e.isActive,
                    r = e.onRemove
                  return w.a.createElement(
                    W.a,
                    { style: sn.root },
                    this._renderChoices(),
                    w.a.createElement(Qt, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: sn.durationPicker,
                    }),
                    w.a.createElement(
                      W.a,
                      { style: sn.removePollButton },
                      w.a.createElement(Zt.a, { color: 'red500', label: an, onPress: r, testID: zt }),
                    ),
                  )
                },
              },
              {
                key: 'choices',
                get: function () {
                  var e = this._choice1,
                    t = this._choice2,
                    n = this._choice3,
                    a = this._choice4
                  return [e && e.value, t && t.value, n && n.value, a && a.value].filter(Boolean)
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this._durationPicker ? this._durationPicker.duration : void 0
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        sn = B.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.transparent,
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              flexDirection: 'column',
              overflow: 'hidden',
              paddingTop: e.spaces.space12,
            },
            choicesAndAddButton: { paddingHorizontal: e.spaces.space12, flexDirection: 'row' },
            choices: { flexGrow: 1, flexShrink: 1 },
            removePollButton: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
            },
            rightColumn: { flexDirection: 'column-reverse' },
            addButton: { marginBottom: e.spaces.space24, marginLeft: e.spaces.space4 },
            durationPicker: {
              borderTopColor: e.colors.nestedBorderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomColor: e.colors.nestedBorderColor,
              borderBottomWidth: e.borderWidths.small,
              padding: e.spaces.space12,
            },
          }
        }),
        cn = Object(nt.a)(ln),
        un = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        dn = N.a.i859676b,
        pn = w.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            M.b,
            { link: '/settings/audience_and_tagging', style: un.link, withInteractiveStyling: !0, withUnderline: !0 },
            N.a.c9a48d3f,
          ),
        )
      function mn() {
        return w.a.createElement(W.a, { style: un.container }, w.a.createElement(He.a, { headline: dn, text: pn }))
      }
      var hn = n('b5s6'),
        fn = n('rcen'),
        gn = n('zmS9'),
        yn = 'addButton',
        vn = 'addSubtitlesLabel',
        _n = 'altTextLabel',
        bn = 'tagPeopleLabel',
        Cn = 'attachments',
        wn = 'createPollButton',
        Tn = 'geoButton',
        En = 'gifSearchButton',
        xn = 'scheduleOption',
        Sn = 'taggedUsersLabel',
        In = 'tweetTextarea_',
        Rn = 'toolBar',
        kn = 'scheduledTweetIndicator',
        An = n('xM7j'),
        Dn = n('6OUF'),
        On = n('tZIO'),
        Pn = n('5mJL'),
        Mn = n('DNho'),
        Fn = n('jhWN'),
        Bn = n('rFBM'),
        Ln = n('zfvc'),
        Nn = n('Ujvi'),
        Vn = n('yTN1'),
        jn = n('gpVt'),
        Hn = n('hOZg'),
        Un = n('ll3R'),
        zn = n('J0mu'),
        Wn = n('EfHu'),
        Kn = n('KrGU'),
        qn = n('boUI'),
        Gn = n('6ZHn'),
        Yn = n('/WPq'),
        Xn = n('wpLu'),
        Qn = n('pHub'),
        Jn = n('8A5z'),
        Zn = n('pKoL'),
        $n = n('ZvMt'),
        ea = n('9Xij'),
        ta = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return w.a.createElement(W.a, { style: n }, this._renderImageGroup(t.length))
                },
              },
              {
                key: '_renderImageGroup',
                value: function (e) {
                  switch (e) {
                    case 1:
                      return this._renderGroupOf1()
                    case 2:
                      return this._renderGroupOf2()
                    case 3:
                      return this._renderGroupOf3()
                    case 4:
                      return this._renderGroupOf4()
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderGroupOf1',
                value: function () {
                  var e = this.props.media,
                    t = e && !!e[0].mediaFile,
                    n = (e && !t && e[0].externalMediaDetails) || {},
                    a = n.height,
                    r = n.width,
                    o = B.a.theme.aspectRatios.landscape
                  if (t) {
                    var i,
                      l,
                      s = B.a.theme.aspectRatios.minTimelineImage,
                      c = B.a.theme.aspectRatios.maxTimelineImage
                    o = $n.a.getImageAspectRatio(s, c, {
                      width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                      height: null === (l = e[0].mediaFile) || void 0 === l ? void 0 : l.height,
                    })
                  }
                  return w.a.createElement(
                    ea.a,
                    { ratio: t ? o : r / a },
                    w.a.createElement(W.a, { style: na.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    ea.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: na.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, na.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    ea.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: na.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, na.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    ea.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: na.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], na.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return w.a.createElement(
                    W.a,
                    { style: [na.column, t] },
                    this._renderMediaAtIndex(e[0], na.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    a,
                    r,
                    o,
                    i = this.props,
                    l = i.editable,
                    s = i.isActive,
                    c = i.media,
                    u = i.onClickMedia,
                    d = i.onEditMedia,
                    p = i.onEditSensitiveWarning,
                    m = i.onRemoveMedia,
                    h = i.onSetMediaPreviewRef,
                    f = c[e],
                    g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    y = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    v = !(
                      null === (r = f.mediaMetadata) ||
                      void 0 === r ||
                      null === (o = r.sensitiveMediaWarning) ||
                      void 0 === o ||
                      !o.size
                    ),
                    _ = d && l && s,
                    b = _ && v && !!p
                  return w.a.createElement(Zn.a, {
                    accessibilityLabel: g || y,
                    accessibilityRole: 'group',
                    enableGif: s,
                    key: f.id,
                    mediaItem: f,
                    onClick: u ? u(f.id) : void 0,
                    onEdit: d ? d(f.id) : void 0,
                    onEditSensitiveWarning: p && b ? p(f.id) : void 0,
                    onRemove: m(f.id),
                    ref: h,
                    style: [na.mediaContainer, t],
                    withAltTextLabel: !!g,
                    withCloseButton: l && s,
                    withEditButton: _,
                    withEditSensitiveWarningButton: b,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(ta, 'contextType', I.a)
      var na = B.a.create(function (e) {
          return {
            column: { flexDirection: 'column', flexGrow: 1, flexBasis: 0 },
            gutterRight: { marginRight: e.spaces.space12 },
            gutterBottom: { marginBottom: e.spaces.space12 },
            mediaContainer: {
              borderRadius: e.borderRadii.xLarge,
              transitionProperty: 'width',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
              overflow: 'hidden',
              flexGrow: 1,
              flexBasis: 0,
            },
            mediaPreviewWrapper: { flexDirection: 'row', height: '100%' },
          }
        }),
        aa = n('oQhu'),
        ra = n('+d3d'),
        oa = n('S1qy'),
        ia = n.n(oa),
        la = n('cjAp'),
        sa = n.n(la),
        ca = N.a.f0afcc0e,
        ua = N.a.ha5e2e79,
        da = N.a.a3de3b68,
        pa = N.a.cc2b28fc,
        ma = N.a.g45af04e,
        ha = N.a.ee9c4013,
        fa = N.a.af40a8ef,
        ga = N.a.e68b09b4,
        ya = N.a.ec10ee02,
        va = N.a.h735a98d,
        _a = N.a.c4ccfbe2,
        ba = N.a.j499fbcb,
        Ca = N.a.b7d8e3f0,
        wa = N.a.d1175c78,
        Ta = N.a.bf4e9d79,
        Ea = N.a.e0342f98,
        xa = N.a.e349147b,
        Sa = N.a.e3a24e4b,
        Ia = N.a.de4669e2,
        Ra = N.a.d2c7a41c,
        ka = N.a.f7364fa1,
        Aa = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Da = N.a.ia24dc8c,
        Oa = w.a.createElement(Hn.a, null),
        Pa = w.a.createElement(Jt.a, null),
        Ma = w.a.createElement(Un.a, null),
        Fa = w.a.createElement(zn.a, null),
        Ba = { viewType: 'schedule_tweet' },
        La = { viewType: 'add_poll' },
        Na = { viewType: 'add_composer' },
        Va = { viewType: 'tag_location' },
        ja = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n(e, a) {
            var o
            u()(this, n),
              (o = t.call(this, e, a)),
              b()(h()(o), '_handleConversationControlsValueChange', function (e) {
                o._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              b()(h()(o), '_handleAudienceControlsValueChange', function (e) {
                o.props.updateAudienceControlsValue(e)
              }),
              b()(
                h()(o),
                '_triggerConversationControlsImpression',
                Object(aa.a)(function () {
                  return o.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(o), '_shouldRenderControls', function (e, t) {
                var n = o.state.isFocused,
                  a = o.props,
                  r = a.audienceControlsValue,
                  i = a.isActive,
                  l = a.isInline,
                  s = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== qe.a.community_members &&
                      r.conversationControlsValue !== qe.a.super_followers_exclusive &&
                      r.conversationControlsValue !== qe.a.trusted_friends_tweet) ||
                    !s
                  ) ||
                  (i && !s && (!l || n || e))
                )
              }),
              b()(h()(o), '_renderConversationControls', function (e) {
                var t = o.state.isFocused,
                  n = o.props,
                  a = n.audienceControlsValue,
                  r = n.isInline
                if (
                  (n.isReply || (!t && r) || o._triggerConversationControlsImpression(),
                  !o._conversationControlsCreationEnabled)
                )
                  return null
                var i = a.conversationControlsValue,
                  l = o._shouldRenderControls(e, 'conversation'),
                  s =
                    i === qe.a.community_members ||
                    i === qe.a.super_followers_exclusive ||
                    i === qe.a.trusted_friends_tweet ||
                    o._isScheduled()
                return l
                  ? w.a.createElement(ht, { disabled: s, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              b()(h()(o), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  W.a,
                  { style: St.taggedLocationContainer },
                  w.a.createElement(
                    q.a,
                    {
                      icon: w.a.createElement(Wn.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: St.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              b()(h()(o), '_renderMainContent', function () {
                var e = o.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  r = e.isExpanded,
                  i = e.isInline,
                  l = e.isInlineReply,
                  s = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  u = n.cardUrl,
                  d = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(jn.b)(h) || (u && !Object(Ct.a)(u) && [u]),
                  g = !!d.length || p || !!m,
                  y = o.props.typeaheadWrapper,
                  v = !o._isEmpty()
                return w.a.createElement(
                  W.a,
                  { style: St.textInputArea },
                  w.a.createElement(
                    W.a,
                    { style: r ? St.inputStyle : St.collapsedInputStyle },
                    o._renderAudienceControls(v),
                    w.a.createElement(
                      y,
                      {
                        contextText: h,
                        isInline: i,
                        isInlineReply: l,
                        onTextUpdated: c ? o._handleRichTextChange : o._handlePlainTextChange,
                        onTypeaheadStateChange: s,
                      },
                      o._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(jn.a, { index: a, isCardPreviewTombstoned: Object(Ct.a)(u), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              b()(h()(o), '_renderFieldTextInput', function (e) {
                var t = o.props,
                  n = t.autoFocus,
                  a = t.data,
                  i = t.editable,
                  l = t.index,
                  s = t.isActive,
                  c = t.isExpanded,
                  u = t.isInline,
                  d = t.isInlineReply,
                  p = t.isLast,
                  m = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  y = o.state.isFocused,
                  v = a.text,
                  _ = 0 === l && p,
                  b = !!g,
                  C = g || {},
                  T = C.dismissComposerCommandName,
                  E = C.element,
                  x = C.sendTweetCommandName,
                  S = d && !g && !c,
                  I = g
                    ? {
                        onChange: o._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: T,
                          editorState: o.state.editorState,
                          element: E,
                          sendTweetCommandName: x,
                        },
                      }
                    : { onChange: o._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  Dn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: da,
                      autoFocus: n || (s && !u),
                      closeButton:
                        s && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !_
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [St.textInputStyle, S && St.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: b ? 30 : 10,
                      multiline: !0,
                      numberOfLines: o._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: o._handleFilesAdded,
                      placeholder: o._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: o._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(In).concat(l),
                      useCacheForDOMMeasurements: y,
                      value: v,
                    },
                    I,
                  ),
                )
              }),
              b()(
                h()(o),
                '_getHandleRichTextChange',
                Object(aa.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(o),
                '_getHandlePlainTextChange',
                Object(aa.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(mn, null) : null
              }),
              b()(h()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  l = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  s = o.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === a && (i || l || s)
                  ? w.a.createElement(Se, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: r && l,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? w.a.createElement(Ke, null) : null
              }),
              b()(h()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(Ne, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(o), '_calcNumberOfLines', function () {
                var e = o.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  i = t.media,
                  l = t.pollActive,
                  s = t.quotedStatus,
                  c = !!i.length || !!l || !!s
                return (r && (a || c)) || !n ? 1 : 4
              }),
              b()(h()(o), '_renderScheduledTweetLegend', function () {
                var e = o.props.scheduledFor
                return w.a.createElement(gn.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: kn,
                })
              }),
              b()(h()(o), '_handlePressScheduledTweetLegend', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              b()(h()(o), '_renderEmojiPicker', function () {
                return w.a.createElement(gt.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              b()(
                h()(o),
                '_getEmojiPickerButtonStyles',
                Object(aa.a)(function () {
                  return [St.iconEmojiPicker, St.toolBarButton]
                }),
              ),
              b()(h()(o), '_isSchedulingDisabled', function () {
                var e = o.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  i = n.pollActive,
                  l = n.quotedStatus,
                  s = n.text,
                  c = e.index,
                  u = e.isLast,
                  d = 0 === c && u,
                  p = t.conversationControlsValue !== qe.a.all
                return Boolean(i || !d || (l && '' === s && !a.length) || p || r.length > 0)
              }),
              b()(h()(o), '_renderSchedulingButton', function () {
                return w.a.createElement(q.a, {
                  accessibilityLabel: ua,
                  behavioralEventContext: Ba,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: va },
                  icon: Fa,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: St.toolBarButton,
                  testID: xn,
                  type: 'brandText',
                })
              }),
              b()(h()(o), '_handleClickScheduler', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              b()(h()(o), '_renderCloseButton', function () {
                var e = o.props.onRemoveComposer
                return w.a.createElement(q.a, {
                  accessibilityLabel: ha,
                  hoverLabel: { label: ga },
                  icon: Oa,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(o), '_renderTweetAttachment', function () {
                var e = o.props,
                  t = e.data,
                  n = e.editable,
                  a = e.isActive,
                  r = t.media,
                  i = t.pollActive,
                  l = t.pollChoices,
                  s = t.pollDuration,
                  c = t.quotedStatus
                if (0 === r.length && !i && !c) return null
                var u = o.hasAttachedVideo && (o._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  W.a,
                  { onClick: o._handleFocus, style: [St.attachmentContainer, St.tweetAttachmentArea], testID: Cn },
                  r.length > 0
                    ? w.a.createElement(ta, {
                        editable: n,
                        isActive: a,
                        media: r,
                        onClickMedia: o.hasAttachedImage ? o._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: o.hasAttachedImage
                          ? o._handleClickMediaDetail('crop')
                          : u
                          ? o._handleClickMediaDetail(u)
                          : void 0,
                        onEditSensitiveWarning:
                          o.hasAttachedImage || o.hasAttachedVideo
                            ? o._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: o._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: o._handleSetMediaPreviewRef,
                        style: St.mediaPreview,
                      })
                    : null,
                  a ? o._renderMediaActions() : null,
                  i
                    ? w.a.createElement(cn, {
                        editable: n,
                        initialChoices: l,
                        initialDuration: s,
                        isActive: a,
                        onBlur: o._handlePollChoiceBlur,
                        onChange: o._handlePollChange,
                        onInvalid: o._handlePollInvalid,
                        onRemove: o._handlePollRemove,
                        onValid: o._handlePollValid,
                        ref: o._setPollCreatorRef,
                      })
                    : null,
                  c ? o._renderQuoteTweet(c) : null,
                )
              }),
              b()(h()(o), '_renderQuoteTweet', function (e) {
                var t = o.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      An.a,
                      null,
                      w.a.createElement(fn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(hn.a, {
                      isCondensed: t.length > 0,
                      style: St.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              b()(h()(o), '_renderToolbar', function (e) {
                var t = o.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  r = t.hidePoll,
                  i = t.hideScheduling,
                  l = t.isInlineReply,
                  s = t.isReply,
                  c = t.isSelfThreadReply,
                  u = t.richTextInputContext,
                  d = t.setActiveParentKey,
                  p = !!u,
                  m = !l && !r,
                  h = !l && !i
                return w.a.createElement(
                  W.a,
                  { style: St.toolBar, testID: Rn },
                  w.a.createElement(
                    W.a,
                    { style: St.toolBarIconsContainer },
                    w.a.createElement(Rt, {
                      media: a,
                      mediaAttachDisabled: o.mediaAttachDisabled,
                      onFilesAdded: o._handleFilesAdded,
                      setActiveParentKey: d,
                    }),
                    o._renderGifButton(),
                    m ? o._renderPollButton() : null,
                    p ? o._renderEmojiPicker() : null,
                    h ? o._renderSchedulingButton() : null,
                    o._renderGeoButton(),
                  ),
                  w.a.createElement(
                    W.a,
                    { style: St.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (s && !c) || !e
                      ? null
                      : w.a.createElement(
                          w.a.Fragment,
                          null,
                          w.a.createElement(W.a, { style: St.separator }),
                          o._renderAddComposerButton(),
                        ),
                    n,
                  ),
                )
              }),
              b()(h()(o), '_addOverflowStyle', function (e) {
                var t = o.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    r = o._getParsedTweet(n).validRangeEnd,
                    i = r + 1 < a
                  if (o.state.hasOverflowStyle || i) {
                    var l = i ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, l, o.state.hasOverflowStyle),
                      hasOverflowStyle: i,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: i }
                }
              }),
              b()(h()(o), '_handleRichTextChange', function (e) {
                var t = o.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  o.setState(o._addOverflowStyle(a))
                }
                o._handleTextValueChange(n)
              }),
              b()(h()(o), '_handlePlainTextChange', function (e) {
                var t = On.a.replaceCarriageReturns(e.target.value)
                o._handleTextValueChange(t)
              }),
              b()(h()(o), '_handleTextValueChange', function (e) {
                var t = o.props,
                  n = t.data,
                  a = n.key,
                  r = n.text,
                  i = t.onTextChange
                r !== e && i(e, a)
              }),
              b()(h()(o), '_handleClickAltTextShortcut', function () {
                o.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              b()(h()(o), '_handleClickSubtitlesShortcut', function () {
                o.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              b()(h()(o), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = o.props,
                      a = n.analytics,
                      r = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (o.hasAttachedImage || o.hasAttachedVideo) &&
                        r.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              b()(h()(o), '_handleFilesAdded', function (e) {
                var t = o.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  r = t.onFilesAdded
                a ? n({ text: pa }) : r(e)
              }),
              b()(h()(o), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  o.props.onRemoveMedia(o.props.index, e)
                }
              }),
              b()(h()(o), '_handleInsertEmoji', function (e) {
                var t = o.state.editorState,
                  n = o.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  o._handleRichTextChange(a)
                }
              }),
              b()(h()(o), '_validateMedia', function (e) {
                var t = o.props.data.media
                return S.c(t.concat(e))
              }),
              b()(h()(o), '_handlePollAdd', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              b()(h()(o), '_handlePollRemove', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'remove_poll', action: 'click' }), a({ pollActive: !1 }, n)
              }),
              b()(h()(o), '_handlePollInvalid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                t && a({ pollValid: !1 }, n)
              }),
              b()(h()(o), '_handlePollValid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                !t && a({ pollValid: !0 }, n)
              }),
              b()(h()(o), '_updatePoll', function (e) {
                var t = e.choices,
                  n = e.duration,
                  a = o.props,
                  r = a.index
                ;(0, a.updateSingleComposer)({ pollChoices: t, pollDuration: n }, r)
              }),
              b()(h()(o), '_handlePollChange', Object(ra.a)(o._updatePoll, 200, { leading: !0, trailing: !0 })),
              b()(h()(o), '_handlePollChoiceBlur', function () {
                o._handlePollChange.flush()
              }),
              b()(h()(o), '_handleGeoButtonClick', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              b()(h()(o), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  o.focus()
              }),
              b()(h()(o), '_handleFocus', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isActive,
                  a = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      o._mediaPreviewRef && o._mediaPreviewRef.playVideo()
                    }),
                    a(t))
              }),
              b()(h()(o), '_handleEditorFocus', function () {
                return o.setState({ isFocused: !0 })
              }),
              b()(h()(o), '_formatCountdownNumber', function (e) {
                return Da(Math.ceil(e / o._userLanguageWeight))
              }),
              b()(h()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  i = e.isReply,
                  l = e.isSelfThreadReply
                return a ? Ia : n ? ka : i && !l ? Ra : l || r > 0 ? Sa : xa
              }),
              b()(h()(o), '_getNumberOfAltTextEntries', function () {
                return o.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              b()(
                h()(o),
                '_getParsedTweet',
                Object(aa.a)(function (e) {
                  var t = sa.a[o.props.twitterTextConfigurationVersion]
                  return ia()(e, t)
                }),
              ),
              b()(h()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(wt.c)(e)
              }),
              b()(h()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(Tt.h)(e)
              }),
              b()(h()(o), '_autotagLocationIfNeeded', function () {
                var e = o.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  r = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              b()(h()(o), '_setPollCreatorRef', function (e) {
                o._pollCreatorRef = e
              }),
              b()(h()(o), '_handleSetMediaPreviewRef', function (e) {
                o._mediaPreviewRef = e
              }),
              b()(h()(o), '_setTextInputRef', function (e) {
                o._textInputRef = e
              })
            var i = e.data.text,
              l = e.richTextInputContext,
              s = e.userLanguage,
              c = (l || {}).initEditorState
            return (
              (o._conversationControlsCreationEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (o._deleteNonemptyTweetstormComposerEnabled = o.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (o._userLanguageWeight = s && Aa.indexOf(s) > -1 ? 2 : 1),
              o._autotagLocationIfNeeded(),
              (o.state = { editorState: c ? c(i) : null, hasOverflowStyle: !1, isFocused: !1 }),
              o
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof bt.a) && e.mediaFile.isVideo
                    })) &&
                    e.isActive &&
                    !this.props.isActive &&
                    this._mediaPreviewRef &&
                    this._mediaPreviewRef.pauseVideo()
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data.taggedLocation,
                    a = t.isActive,
                    r = t.isExpanded,
                    o = t.isInline,
                    i = t.isLast,
                    l = t.loggedInUser,
                    s = t.windowWidth,
                    c = t.withAvatar,
                    u = !this._isEmpty(),
                    d = this._shouldRenderControls(u),
                    p = s < B.a.theme.breakpoints.small
                  return w.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [St.root, !a && St.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      Pn.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(Mn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(Fn.a, {
                                  accessibilityLabel: l ? l.name : void 0,
                                  screenName: l ? l.screen_name : void 0,
                                  size: t,
                                  style: St.avatar,
                                  uri: l ? l.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          i
                            ? null
                            : w.a.createElement(W.a, {
                                style: [St.conversationLine, !c && St.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? St.avatarContainerExpanded : St.avatarContainer,
                        cellStyle: St.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: St.inputArea },
                        w.a.createElement(
                          Bn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: St.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(W.a, { style: St.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        W.a,
                        { style: [(d || n) && St.controlsContainer, p ? St.mobileControlsLayout : St.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(Ln.b, { show: a && r }, this._renderToolbar(u)),
                    ),
                  )
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.history,
                    o = e.loggedInUser,
                    i = e.setActiveParentKey,
                    l = a || n.length || !o
                  return w.a.createElement(vt.a, {
                    enabled: !l,
                    gifSearchKeySource: _t.a.Composition,
                    history: r,
                    onPress: i,
                    testID: En,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = t.quotedStatus,
                    o = e.loggedInUser,
                    i = this._isScheduled(),
                    l = !(!(a || n.length || r || i) && o)
                  return w.a.createElement(q.a, {
                    accessibilityLabel: ca,
                    behavioralEventContext: La,
                    disabled: l,
                    hoverLabel: { label: ya },
                    icon: Ma,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: St.toolBarButton,
                    testID: wn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGeoButton',
                value: function () {
                  var e = this.props,
                    t = e.data.taggedLocation,
                    n = e.geoEnabled,
                    a = e.loggedInUser,
                    r = !(n && a),
                    o = t ? w.a.createElement(Wn.a, null) : w.a.createElement(Kn.a, null)
                  return w.a.createElement(q.a, {
                    accessibilityLabel: _a,
                    behavioralEventContext: Va,
                    disabled: r,
                    hoverLabel: { label: _a },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: St.toolBarButton,
                    testID: Tn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderMediaActions',
                value: function () {
                  var e = this.props.data,
                    t = e.gifMetadata,
                    n = e.media,
                    a = 0 !== e.mediaTags.length,
                    r =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || r)) return null
                  var o = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.a.createElement(
                    W.a,
                    { style: St.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          W.a,
                          { style: St.addImageTextPadding },
                          w.a.createElement(yt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: wa,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [St.addImageTextContainer, St.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: ba({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: St.addImageTextContainer,
                          },
                          this._renderAltTextLabel(),
                        )
                      : null,
                    this.hasAttachedVideo ? this._renderSubtitlesLabel() : null,
                  )
                },
              },
              {
                key: '_renderTagPeopleLabel',
                value: function () {
                  return w.a.createElement(
                    M.b,
                    { color: 'gray700', size: 'subtext2', testID: bn },
                    w.a.createElement(qn.a, { style: St.addImageActionIcon }),
                    wa,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    n = e.loggedInUser,
                    a = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return w.a.createElement(
                    M.b,
                    { color: 'gray700', size: 'subtext2', testID: Sn },
                    w.a.createElement(Gn.a, { style: St.addImageActionIcon }),
                    w.a.createElement(Nn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
                  )
                },
              },
              {
                key: '_renderAltTextLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = e[0].mediaMetadata
                  return this.hasAttachedAltText
                    ? e.length > 1
                      ? w.a.createElement(
                          M.b,
                          { color: 'gray700', size: 'subtext2', testID: _n },
                          w.a.createElement(Xn.a, { style: St.addImageActionIcon }),
                          Ca({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          M.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: _n },
                          w.a.createElement(Xn.a, { style: St.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        M.b,
                        { color: 'gray700', size: 'subtext2', testID: _n },
                        w.a.createElement(Yn.a, { style: St.addImageActionIcon }),
                        ba({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Qn.a : Jn.a
                  return w.a.createElement(
                    M.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: St.addImageTextContainer,
                      testID: vn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Ea : void 0,
                      style: St.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Ta,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = sa.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(Vn.a, {
                    count: r,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: a.maxWeightedTweetLength,
                    warningCount: 260,
                  })
                },
              },
              {
                key: '_renderAddComposerButton',
                value: function () {
                  var e = this.props,
                    t = e.disableAddTweet,
                    n = e.isCommunityTweetFromProtectedUser,
                    a = e.isInline,
                    r = e.loggedInUser,
                    o = e.onAddComposer,
                    i = this._isEmpty(),
                    l = this._isScheduled(),
                    s = t || i || l || !r || n
                  return w.a.createElement(q.a, {
                    accessibilityLabel: ma,
                    behavioralEventContext: Na,
                    disabled: s,
                    hoverLabel: { label: fa },
                    icon: Pa,
                    link: !a || i || s ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: yn,
                    type: 'brandOutlined',
                  })
                },
              },
              {
                key: 'pollChoices',
                get: function () {
                  return this.props.data.pollActive && this._pollCreatorRef ? this._pollCreatorRef.choices : void 0
                },
              },
              {
                key: 'pollDuration',
                get: function () {
                  return this.props.data.pollActive && this._pollCreatorRef ? this._pollCreatorRef.duration : void 0
                },
              },
              {
                key: 'mediaAttachDisabled',
                get: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.loggedInUser,
                    o = n.length,
                    i = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    l = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof bt.a) && e.mediaFile.isVideo
                    })
                  return 4 === o || i || l || a || this.hasExternalMedia || !r
                },
              },
              {
                key: 'hasAttachedImage',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isImage
                  })
                },
              },
              {
                key: 'hasAttachedVideo',
                get: function () {
                  var e = this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isVideo
                  })
                  return (
                    e &&
                      (this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                    e
                  )
                },
              },
              {
                key: 'attachedSubtitles',
                get: function () {
                  var e,
                    t = this.props.data.media
                  if (this.hasAttachedVideo) {
                    var n = t.find(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof bt.a) && e.mediaFile.isVideo
                    })
                    return null == n || null === (e = n.mediaMetadata) || void 0 === e ? void 0 : e.subtitles
                  }
                },
              },
              {
                key: 'hasAttachedAltText',
                get: function () {
                  return this._getNumberOfAltTextEntries() > 0
                },
              },
              {
                key: 'hasExternalMedia',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    return !!e.externalMediaDetails
                  })
                },
              },
              {
                key: 'shouldRenderCommunitiesRules',
                get: function () {
                  var e = this.props.audienceControlsValue,
                    t = this.context.featureSwitches.isTrue('c9s_enabled'),
                    n = e.communityIdValue || void 0,
                    a = t && n,
                    r = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(r && a)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(ja, 'contextType', I.a),
        b()(ja, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Ha = Object(nt.a)(ja),
        Ua = w.a.createElement(M.b, { weight: 'bold' }),
        za = w.a.createElement(M.b, { color: 'link' }),
        Wa = function (e) {
          return '@'.concat(e)
        },
        Ka = n('SrIh'),
        qa = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Ga = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(za, null, N.a.b50e199a({ userName: Wa(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(za, null, N.a.f2e4dd37({ replyUserName: Wa(t), otherUserName: Wa(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    za,
                    null,
                    N.a.eccfddc3({ userOneName: Wa(t), userTwoName: Wa(a), userThreeName: Wa(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(za, null, N.a.h758cd22({ userOneName: Wa(n), userTwoName: Wa(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(za, null, N.a.e9f8a0eb({ userName: Wa(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(za, null, N.a.df7e9fbc({ replyUserName: Wa(n), otherUserName: Wa(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    za,
                    null,
                    N.a.b45fa505({ userOneName: Wa(n), userTwoName: Wa(r), userThreeName: Wa(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(za, null, N.a.a4383815({ userOneName: Wa(a), userTwoName: Wa(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(za, null, N.a.ff792e35({ userName: Wa(t) })),
                  w.a.cloneElement(Ua, null, N.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(za, null, N.a.g7d5e985({ replyUserName: Wa(t), otherUserName: Wa(n) })),
                  w.a.cloneElement(Ua, null, N.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    za,
                    null,
                    N.a.fe5a61e9({ userOneName: Wa(t), userTwoName: Wa(a), userThreeName: Wa(n) }),
                  ),
                  w.a.cloneElement(Ua, null, N.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(za, null, N.a.bc9dd514({ userOneName: Wa(n), userTwoName: Wa(a), othersCount: t })),
                  w.a.cloneElement(Ua, null, N.a.de5071ba),
                )
              },
            },
            i = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            l = a.retweeted_status || a,
            s = l.exclusivity_info,
            c = l.user,
            u = i.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            d = Re()(u, 2),
            p = d[0],
            m = d[1],
            h = [c, p, m].map(qa),
            f = Re()(h, 3),
            g = f[0],
            y = f[1],
            v = f[2],
            _ = i.length - 2
          switch (i.length) {
            case 0:
              return Object(Ka.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: g })
                : s
                ? o.exclusiveReplyToOne({ userName: g })
                : o.replyToOne({ userName: g })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: y })
                : s
                ? o.exclusiveReplyToTwo({ userOneName: g, userTwoName: y })
                : o.replyToTwo({ userOneName: g, userTwoName: y })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: y, userThreeName: v })
                : s
                ? o.exclusiveReplyToThree({ userOneName: g, userTwoName: y, userThreeName: v })
                : o.replyToThree({ userOneName: g, userTwoName: y, userThreeName: v })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: y, othersCount: _ })
                : s
                ? o.exclusiveReplyToMany({ userOneName: g, userTwoName: y, othersCount: _ })
                : o.replyToMany({ userOneName: g, userTwoName: y, othersCount: _ })
          }
        },
        Ya = w.a.memo(Ga),
        Xa = n('fs1G'),
        Qa = n('BLtI'),
        Ja = n('kY28')
      function Za(e) {
        null == e || e.preventDefault()
      }
      var $a = B.a.create(function (e) {
          return {
            replyUsersContainer: {
              flexDirection: 'row',
              minHeight: e.spaces.space12,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: 0,
            },
            grid: { flexGrow: 1, flexShrink: 1 },
            repliesTextContainer: { flexGrow: 1 },
            repliesMessage: { flexGrow: 1, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4 },
            conversationLineContainer: { alignItems: 'center' },
            conversationLine: {
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        er = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = e.onPress,
            i = e.shouldDisplayRepliesText,
            l = e.showParentTweet,
            s = void 0 === l || l
          return w.a.createElement(
            W.a,
            null,
            s
              ? w.a.createElement(Qa.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: Xa.a,
                  onAvatarClick: Za,
                  onEntityClick: Za,
                  onMediaClick: Za,
                  onReplyContextClick: Za,
                  replyContext: Ja.a.ReplyContextTypes.None,
                  tweet: a,
                  withAvatarLink: !1,
                  withCardLinks: !0,
                  withInlineMedia: !1,
                  withQuotedTweetLinks: !0,
                  withSocialContext: !1,
                  withTimestampLink: !1,
                  withUserHoverCard: !1,
                })
              : null,
            w.a.createElement(
              W.a,
              { style: $a.replyUsersContainer },
              w.a.createElement(
                Pn.a,
                {
                  avatarCell: s ? w.a.createElement(W.a, { style: $a.conversationLine }) : null,
                  avatarCellStyle: $a.conversationLineContainer,
                  cellStyle: $a.repliesTextContainer,
                  style: $a.grid,
                },
                i
                  ? w.a.createElement(
                      M.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: s && $a.repliesMessage },
                      w.a.createElement(Ya, {
                        communityName: t,
                        excludedRecipients: n,
                        inReplyToStatus: a,
                        loggedInUserId: r,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        tr = n('Tb0w'),
        nr = n('1YZw'),
        ar = n('pidX'),
        rr = n('5oBF'),
        or = n('JYYi'),
        ir = n('/Rsk'),
        lr = n('qlwE'),
        sr = n('XOJV'),
        cr = n('G6rE'),
        ur = n('AspN'),
        dr = n('oEGd'),
        pr = n('P1r1'),
        mr = ['mediaIds'],
        hr = function (e) {
          return e.parentTweetId || (e.isInline ? or.a.homeTimeline : or.a.modal)
        },
        fr = function (e, t) {
          var n = hr(t)
          return oe.l(e, n)
        },
        gr = function (e, t) {
          var n = hr(t)
          return oe.m(e, n)
        },
        yr = function (e, t) {
          var n = hr(t)
          return oe.k(e, n)
        },
        vr = function (e, t) {
          var n = Sr(e, t),
            a = yr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            o = r ? k.c.select(e, r) : void 0
          return o ? o.name : void 0
        },
        _r = function (e, t) {
          var n = hr(t)
          return oe.n(e, n)
        },
        br = function (e, t) {
          var n = hr(t)
          return oe.j(e, n)
        },
        Cr = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        wr = Object(le.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          cr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Tr = function (e, t) {
          return t.parentTweetId || Er(e, t) || xr(e, t)
        },
        Er = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        xr = Cr(function (e) {
          return e.inReplyToStatusId
        }),
        Sr = function (e, t) {
          var n = Tr(e, t)
          return n ? sr.a.selectHydrated(e, n) : void 0
        },
        Ir = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Rr = Cr(function (e) {
          return e.hasArticleNudge
        }),
        kr = Cr(function (e) {
          return e.convoCardData
        }),
        Ar = Cr(function (e) {
          return e.externalMedia
        }),
        Dr = Cr(function (e) {
          return e.externalMediaFiles
        }),
        Or = Cr(function (e) {
          return e.previewTweetId
        }),
        Pr = Cr(function (e) {
          return e.defaultText
        }),
        Mr = function (e, t) {
          var n = Pr(e, t),
            a = Object(ar.a)(t.location)
          return (Ir(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Fr = Cr(function (e) {
          return e.quotedStatusId
        }),
        Br = Cr(function (e) {
          return e.quotedStatus
        }),
        Lr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Br(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Fr(e, t)
              return n ? sr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Nr = Cr(function (e) {
          return e.isSelfThreadReply
        }),
        Vr = Cr(function (e) {
          return e.positionCursorAtBeginning
        }),
        jr = Cr(function (e) {
          return e.promotedContent
        }),
        Hr = function () {
          return Object(le.createSelector)(fr, Mr, Lr, ur.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return s()(
                s()({}, ((o = e).mediaIds, Ye()(o, mr))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === r ? n : void 0,
                  text: 0 === r && t ? t : e.text,
                },
              )
              var o
            })
          })
        },
        Ur = {
          addComposer: oe.a,
          addToast: nr.b,
          createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: oe.b,
          deletePreviewTweet: rr.c,
          fetchAutotaggedLocationIfNeeded: ir.a,
          fetchTweetIfNeeded: sr.a.fetchOneIfNeeded,
          removeComposer: oe.f,
          resetDraft: oe.g,
          retweet: sr.a.retweet,
          schedule: oe.i,
          draftTweet: oe.e,
          send: oe.r,
          updateActiveComposerIndex: oe.t,
          updateAudienceControlsValue: oe.u,
          updateConvoCardState: tr.b,
          preUploadMedia: ur.e,
          addMedia: ur.b,
          processMultipleMedia: ur.g,
          removeMediaUpload: ur.i,
          updateSingleComposer: oe.x,
          setActiveParentKey: oe.s,
          copyDataFromInlineComposerToModalComposer: oe.c,
          copyDataFromInlineReplyComposerToModalComposer: oe.d,
        },
        zr = Object(dr.e)(function () {
          return Object(le.createStructuredSelector)({
            activeComposerIndex: br,
            activeUser: wr,
            altTextNudgeType: pr.h,
            audienceControlsValue: yr,
            composerData: Hr(),
            dataSaverMode: pr.k,
            excludedRecipients: gr,
            externalMedia: Ar,
            externalMediaFiles: Dr,
            geoEnabled: pr.p,
            hasArticleNudge: Rr,
            inReplyToStatus: Sr,
            inReplyToStatusId: Tr,
            isIntentRoute: Ir,
            isSelfThreadReply: Nr,
            isSending: _r,
            isSuperFollowsCreator: ce.l,
            positionCursorAtBeginning: Vr,
            loggedInUser: cr.e.selectLoggedInUser,
            prepopulatedText: Mr,
            previewTweetId: Or,
            promotedContent: jr,
            scheduledFor: oe.o,
            selectedCommunityName: vr,
            sendingProgress: oe.p,
            convoCardData: kr,
            undoTweetSettings: lr.p,
            userLanguage: ce.o,
            quotedStatusId: Fr,
          })
        }, Ur),
        Wr = n('45mF'),
        Kr = n('c0ZR'),
        qr = n('W5XZ'),
        Gr = n('lsKC'),
        Yr = n('Drq4'),
        Xr = n('I8M8'),
        Qr = n('7myi'),
        Jr = n('7nmT'),
        Zr = n.n(Jr),
        $r = n('vbWy'),
        eo = n('Rp9C'),
        to = n('Q5Mu'),
        no = n('N5qz'),
        ao = 'tweetButton',
        ro = 'tweetButtonInline',
        oo = Object(A.a)()
          .propsFromState(function () {
            return { loggedInUser: cr.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return {
              userName: t && t.name,
              userProfileImageUrl: t && t.profile_image_url_https,
              userScreenName: t && t.screen_name,
            }
          })
          .withAnalytics(),
        io = n('cHvH'),
        lo = n('sgih'),
        so = n('xKuM'),
        co = n('5Vk4'),
        uo = B.a.create(function (e) {
          return {
            mainCard: {
              marginHorizontal: 'auto',
              paddingVertical: e.spaces.space16,
              textAlign: 'center',
              alignItems: 'center',
            },
            largeScreenCard: { width: '70%' },
            smallScreenCard: { width: '85%' },
            sheetStyle: { justifyContent: 'center' },
          }
        }),
        po = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return w.a.createElement(io.a, null, function (e) {
            var l = e.windowWidth > B.a.theme.breakpoints.small
            return w.a.createElement(
              lo.a,
              { onMaskClick: r, style: uo.sheetStyle, type: o, withMask: !0 },
              i &&
                w.a.createElement(so.a, {
                  leftControl: w.a.createElement(co.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(W.a, { style: [uo.mainCard, l ? uo.largeScreenCard : uo.smallScreenCard] }, n),
            )
          })
        },
        mo = N.a.cb7c0987,
        ho = N.a.de3bcf27,
        fo = N.a.e710ce75,
        go = N.a.h11e5910,
        yo = N.a.b7ec04f3,
        vo = N.a.i62a03aa,
        _o = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        bo = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            po,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(M.b, { size: 'title4', style: _o.itemPadding, weight: 'heavy' }, mo),
            w.a.createElement(M.b, { color: 'gray700', style: _o.itemPadding }, ho),
            w.a.createElement(M.b, { color: 'gray700', style: _o.itemPadding }, fo),
            w.a.createElement(
              W.a,
              { style: _o.buttonContainer },
              w.a.createElement(M.b, { size: 'title4', style: _o.itemPadding, weight: 'heavy' }, go),
              w.a.createElement(q.a, { onPress: a, style: _o.itemPadding, type: 'brandOutlined' }, yo),
              w.a.createElement(q.a, { onPress: n, style: _o.itemPadding, type: 'brandOutlined' }, vo),
            ),
          )
        },
        Co = n('cm6r'),
        wo = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        To = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(Co.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(q.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: wo.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(M.b, { color: 'gray700' }, n),
            )
          })
        },
        Eo = n('sjK1'),
        xo = n('FDY4'),
        So = n('tevE'),
        Io = n('jV+4'),
        Ro = n('UgB4'),
        ko = n('TW8A'),
        Ao = n('hiGS'),
        Do = n('WtWS'),
        Oo = n('Lsrn'),
        Po = n('k/Ka'),
        Mo = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Po.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Oo.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      Mo.metadata = { width: 24, height: 24 }
      var Fo = Mo,
        Bo = [
          { headlineText: N.a.f3a7a80c, subTextLine1: N.a.ge52d1de, subTextLine2: null },
          { headlineText: N.a.j311bf49, subTextLine1: N.a.ae42ebff, subTextLine2: N.a.aa350ab1 },
          { headlineText: N.a.j18b2956, subTextLine1: N.a.f6bee896, subTextLine2: N.a.dddd0995 },
          { headlineText: N.a.d02a94fa, subTextLine1: N.a.dddd0995, subTextLine2: null },
          { headlineText: N.a.i018b746, subTextLine1: N.a.b8d85df9, subTextLine2: N.a.d5ca11f0 },
        ],
        Lo = N.a.h11e5910,
        No = N.a.abd845fd,
        Vo = N.a.bea869b3,
        jo = N.a.d96cf7cd,
        Ho = N.a.d3145da8,
        Uo = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
            profanityIcon: {
              backgroundColor: e.colors.primary,
              color: e.colors.whiteOnColor,
              width: e.spaces.space48,
              height: e.spaces.space48,
              borderRadius: e.borderRadii.infinite,
            },
            tweetContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              width: '100%',
              textAlign: 'left',
            },
            tweetContent: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
            tweetBody: { flexDirection: 'row' },
            userName: { paddingBottom: e.spaces.space4 },
            mobileButtonContainer: {
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '100%',
              marginTop: e.spaces.space72,
            },
            thanksContainer: { flexDirection: 'row', alignItems: 'center' },
            thanksCheckMark: { color: B.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        zo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            o = e.onEditTweet,
            i = e.onSendTweet,
            l = e.onWeGotItWrong,
            s = e.tweetText,
            c = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = w.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = Bo[(p = p >= 0 && p <= 4 ? p : 0)]
          return w.a.createElement(io.a, null, function (e) {
            var p,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              po,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              w.a.createElement(Fo, { style: [Uo.profanityIcon, Uo.itemPadding] }),
              w.a.createElement(So.a, { size: 'title4', style: Uo.itemPadding, weight: 'heavy' }, m.headlineText),
              w.a.createElement(M.b, { color: 'gray700', style: Uo.itemPadding }, m.subTextLine1),
              w.a.createElement(M.b, { color: 'gray700', style: Uo.itemPadding }, m.subTextLine2),
              w.a.createElement(
                W.a,
                { style: [Uo.tweetContainer, Uo.itemPadding] },
                w.a.createElement(
                  W.a,
                  { style: Uo.tweetContent },
                  w.a.createElement(Io.a, { name: c, profileImageUrl: u, screenName: d, style: Uo.userName }),
                  w.a.createElement(
                    W.a,
                    { style: Uo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Eo.c) r = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var o
                          r = null === (o = e.mediaFile) || void 0 === o ? void 0 : o.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: r,
                          width: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.width) || 100,
                          height: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.a.createElement(
                        W.a,
                        { style: Uo.photos },
                        w.a.createElement(xo.a, {
                          containerAspectRatio: 1,
                          images: e,
                          previewMode: !1,
                          singleImageMaxAspectRatio: 1,
                          singleImageMinAspectRatio: 1,
                          withCenterCrop: !0,
                          withLink: !1,
                        }),
                      )
                    })(),
                    w.a.createElement(M.b, { style: Uo.textStyle }, s),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    W.a,
                    { style: Uo.thanksContainer },
                    w.a.createElement(Do.a, { style: Uo.thanksCheckMark }),
                    w.a.createElement(M.b, { align: 'center', style: Uo.itemPadding }, Ho),
                  )
                : w.a.createElement(M.b, { align: 'center', onPress: l, style: Uo.itemPadding, withUnderline: !0 }, Lo),
              g > B.a.theme.breakpoints.small
                ? w.a.createElement(
                    W.a,
                    { style: Uo.buttonContainer },
                    w.a.createElement(q.a, { onPress: o, style: Uo.itemPadding, type: 'brandFilled' }, No),
                    w.a.createElement(q.a, { onPress: i, style: Uo.itemPadding, type: 'brandOutlined' }, Vo),
                    w.a.createElement(q.a, { onPress: a, style: Uo.itemPadding, type: 'destructiveText' }, jo),
                  )
                : ((p = w.a.createElement(Ro.a, { style: { color: B.a.theme.colors.text } })),
                  (h = w.a.createElement(ko.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = w.a.createElement(Ao.a, { style: { color: B.a.theme.colors.red500 } })),
                  w.a.createElement(
                    W.a,
                    { style: Uo.mobileButtonContainer },
                    w.a.createElement(To, { icon: p, label: Vo, onPress: i }),
                    w.a.createElement(To, { icon: h, label: No, onPress: o }),
                    w.a.createElement(To, { icon: f, label: jo, onPress: a }),
                  )),
            )
          })
        },
        Wo = oo(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            o = e.onDismiss,
            i = e.onEditTweet,
            l = e.onSendTweet,
            s = e.tweetText,
            c = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = w.a.useState(!1),
            m = Re()(p, 2),
            h = m[0],
            f = m[1],
            g = w.a.useState(!1),
            y = Re()(g, 2),
            v = y[0],
            _ = y[1],
            b = function (e) {
              var n = e.action,
                r = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: a }, element: r, page: o, section: 'dialog' })
            }
          return h
            ? w.a.createElement(bo, {
                onBack: function () {
                  b({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  b({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
                onYes: function () {
                  b({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
              })
            : w.a.createElement(zo, {
                hasSentFeedback: v,
                media: n,
                onDeleteTweet: function () {
                  b({ action: 'cancel', element: 'action', page: 'nudge' }), r()
                },
                onDismiss: function () {
                  b({ action: 'dismiss', element: 'action', page: 'nudge' }), o()
                },
                onEditTweet: function () {
                  b({ action: 'revise', element: 'action', page: 'nudge' }), i()
                },
                onSendTweet: function () {
                  b({ action: 'send', element: 'action', page: 'nudge' }), l()
                },
                onWeGotItWrong: function () {
                  b({ action: 'more_info', element: 'action', page: 'nudge' }),
                    b({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: s,
                userName: c,
                userProfileImageUrl: u,
                userScreenName: d,
              })
        }),
        Ko = n('aITJ'),
        qo = n('eb3s'),
        Go = n('JYMr'),
        Yo = n('sCk0'),
        Xo = n('3A2y'),
        Qo = n('zrOZ'),
        Jo = n('s1N3'),
        Zo = n('4FGy'),
        $o = n('mN6z'),
        ei = n('eyty'),
        ti = n('rziq'),
        ni = n('jTgF'),
        ai = N.a.d28215f0,
        ri = N.a.ec909a54,
        oi = N.a.jd53409d,
        ii = {
          singular: N.a.edae65de,
          plural: N.a.a859846a,
          oneOfMultiple: N.a.e90118f5,
          someOfMultiple: N.a.c211dcb1,
        },
        li = { singular: N.a.d7c26bfb, plural: N.a.a75e3ccc },
        si = N.a.dcb7e3a0,
        ci = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = li.singular), (t = r ? ii.singular : ii.oneOfMultiple))
              : ((n = li.plural), (t = r ? ii.plural : ii.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(si)
          )
        },
        ui = N.a.c1bf53b0,
        di = N.a.bb8170da,
        pi = N.a.dad5a4b8,
        mi = N.a.e65aed64,
        hi = N.a.bc2ceaf2,
        fi = N.a.d8222374,
        gi = N.a.j890123a,
        yi = N.a.bb01231c,
        vi = N.a.d4ab68e2,
        _i = N.a.d8af8a4c,
        bi = N.a.d09d4c05,
        Ci = N.a.i2209530,
        wi = N.a.bf9b89e4,
        Ti = N.a.f277e949,
        Ei = N.a.b551cd22,
        xi = N.a.f026a7fa,
        Si = N.a.a5d4fda0,
        Ii = N.a.ib067d6a,
        Ri = x.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        ki = { element: 'alt_text_prompt' },
        Ai = { component: 'article_nudge' },
        Di = { viewType: 'send_tweet' },
        Oi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Pi = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r, o, l
            u()(this, n),
              (l = t.call(this, e, a)),
              b()(h()(l), '_getParentKey', function () {
                var e = l.props,
                  t = e.isInline
                return e.parentTweetId || (t ? or.a.homeTimeline : or.a.modal)
              }),
              b()(h()(l), '_updateSingleComposer', function (e, t) {
                return (0, l.props.updateSingleComposer)({ updates: e, index: t, parentKey: l._getParentKey() })
              }),
              b()(h()(l), '_resetDraft', function () {
                ;(0, l.props.resetDraft)({ parentKey: l._getParentKey(), isPreview: l.isPreview })
              }),
              b()(h()(l), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = l.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              b()(h()(l), '_syncTexts', function () {
                var e = l.props.composerData,
                  t = l.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && l._updateSingleComposer({ text: a }, n)
                })
              }),
              b()(h()(l), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(l), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              b()(h()(l), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(l), '_handleDeletePreviewTweet', function () {
                var e = l.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              b()(h()(l), '_handleAnimateComplete', function () {
                var e = l.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = Zr.a.findDOMNode(l._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    o = r.bottom,
                    i = r.top,
                    s = Math.max(i, window.scrollY)
                  if (s < window.pageYOffset || o > window.innerHeight) {
                    var c = n ? s - n() - 14 : s - 14,
                      u = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Ri ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
                    })
                  }
                }
              }),
              b()(h()(l), '_handleFetchTweetIfNeeded', function () {
                var e = l.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.quotedStatus,
                  i = e.quotedStatusId
                !a && r && n(r).catch(t(qr.a)), !o && i && n(i).catch(t(qr.a))
              }),
              b()(h()(l), '_blockHistory', function (e, t) {
                var n = l.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  o = !r && /unsent/.test(e.pathname),
                  i = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return l.shouldShowDiscardConfirmation && 'POP' === t && i
                  ? (l.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : l._canSaveDraft && o && 'PUSH' === t
                  ? l.shouldShowDiscardConfirmation
                    ? (l.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: o }), !1)
                    : (l._resetDraft(), !0)
                  : l.shouldShowBackgroundSendConfirmation && 'POP' === t && i
                  ? (l._cancelAllMediaUploads(), !1)
                  : !('POP' === t && i && l._areComposersEmptyOrUnchanged && !Object(wt.a)(a)) || (l._resetDraft(), !0)
              }),
              b()(h()(l), '_getKeyCommandHandlers', function () {
                return l.state.typeaheadActive ? l._keyCommandHandlersForActiveTypeahead : l._keyCommandHandlers
              }),
              b()(h()(l), 'handleTweetOrRetweet', function () {
                if (
                  (l._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  l._areComposersValid())
                )
                  return l.shouldShowAltTextPrompt
                    ? (l.setState({ showAltTextPrompt: !0 }), void l._scribe(s()(s()({}, ki), {}, { action: 'show' })))
                    : l._handleTweetOrRetweet()
              }),
              b()(h()(l), '_handleTweetOrRetweet', function () {
                return l.isRetweet ? l._handleRetweet() : l._handleTweet()
              }),
              b()(h()(l), '_renderReplyContext', function () {
                var e = l.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  o = e.isSelfThreadReply,
                  i = e.selectedCommunityName
                if (a && l._shouldBeExpanded())
                  return w.a.createElement(er, {
                    communityName: i,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: l._handleViewRecipients,
                    shouldDisplayRepliesText: !o,
                    showParentTweet: !r,
                  })
              }),
              b()(h()(l), '_renderAltTextPrompt', function () {
                var e = l._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(qo.a, {
                  Icon: Yr.a,
                  cancelButtonLabel: di,
                  confirmButtonLabel: ui({ numOfDescriptions: t }),
                  headline: oi,
                  onCancel: l._handleIgnoreAltTextPrompt,
                  onConfirm: l._handleAcceptAltTextPrompt,
                  onMaskClick: l._handleCancelAltTextPrompt,
                  text: ci({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(l), '_renderToxicReplyNudge', function () {
                var e = l._getSingleComposerDataWithLatestText(l.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(Wo, {
                  media: n,
                  nudgeId: l.state.nudgeId,
                  onDeleteTweet: l._handleReplyNudgeDeleteTweet,
                  onDismiss: l._handleReplyNudgeDismiss,
                  onEditTweet: l._handleReplyNudgeEditTweet,
                  onSendTweet: l._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              b()(h()(l), '_handleReplyNudgeDeleteTweet', function () {
                l._hideToxicReplyNudge(), l._handleConfirmDiscardTweet()
              }),
              b()(h()(l), '_handleReplyNudgeDismiss', function () {
                l._hideToxicReplyNudge()
              }),
              b()(h()(l), '_handleReplyNudgeEditTweet', function () {
                l._hideToxicReplyNudge()
              }),
              b()(h()(l), '_handleReplyNudgeSendTweet', function () {
                l._hideToxicReplyNudge(), l._handleSendTweet()
              }),
              b()(h()(l), '_setRootRef', function (e) {
                e && (l._root = e)
              }),
              b()(h()(l), '_handleTweet', function () {
                var e = l.props.composerData[0].scheduledFor
                l.setState({ errorMessage: void 0 }),
                  e ? Object(Tt.h)(e) && l._handleScheduleTweet() : l._checkToxicReplyAndSendTweet()
              }),
              b()(h()(l), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = l.props,
                    r = a.analytics,
                    o = a.createLocalApiErrorHandler
                  if (Object(ni.d)(n) && n.code === Xr.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var i = Object(ni.b)(n)
                  if (i) return l.setState({ errorMessage: i }), Promise.resolve()
                  var c = t || Object(Wr.a)(void 0, !1)
                  o(s()({}, c))(n)
                  var u = n instanceof E.a && (null == t ? void 0 : t[n.errors[0].code])
                  l.setState({ errorMessage: { text: u ? u.toast.text : Si } })
                }
              }),
              b()(h()(l), '_handleScheduleTweet', function () {
                var e = l.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  o = e.schedule,
                  i = l._getSingleComposerDataWithLatestText(n[0])
                o({ excludedRecipients: a, inReplyToStatus: r, scheduleData: i })
                  .then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(Tt.c)(i.scheduledFor)
                    if (a) {
                      var r = Object(Tt.b)(a),
                        o = Object(Tt.i)(a),
                        c = Ei({ scheduleDate: r, scheduleTime: o })
                      t({ text: c, action: { label: Ti, link: '/compose/tweet/unsent/scheduled' } }),
                        l._scribeTweetSent(n[0], s()(s()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    l._updateConvoCardState(), l._close()
                  })
                  .catch(l._handleTweetError('schedule_tweet_cancel'))
              }),
              b()(h()(l), '_handleDraftTweet', function () {
                var e = l.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: l._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    l.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: wi, action: { label: Ti, link: '/compose/tweet/unsent/drafts' } }),
                      l._scribeTweetSent(n[0], s()(s()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      l._updateConvoCardState(),
                      l._close()
                  })
                  .catch(l._handleTweetError('draft_tweet_cancel', to.a))
              }),
              b()(h()(l), '_checkToxicReply', function () {
                var e = l.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.parentTweetId,
                  i = t(
                    l._getSingleComposerDataWithLatestText(n[0]).text,
                    o || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t,
                      n,
                      a,
                      r,
                      o,
                      i,
                      s,
                      c = l.context.featureSwitches.getValueWithoutScribeImpression(
                        'responsive_web_reply_nudge_supported_languages',
                      )
                    if (
                      !c ||
                      !Array.isArray(c) ||
                      !c.includes(
                        null === (t = e.create_nudge) || void 0 === t || null === (n = t.nudge) || void 0 === n
                          ? void 0
                          : n.proposed_tweet_language,
                      )
                    )
                      return !1
                    var u =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (r = a.nudge) ||
                        void 0 === r ||
                        null === (o = r.nudge_type) ||
                        void 0 === o
                          ? void 0
                          : o.__typename,
                      d =
                        null == e ||
                        null === (i = e.create_nudge) ||
                        void 0 === i ||
                        null === (s = i.nudge) ||
                        void 0 === s
                          ? void 0
                          : s.id
                    return d && l.setState({ nudgeId: d }), !!u
                  }),
                  s = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([i, s])
              }),
              b()(h()(l), '_showToxicReplyNudge', function () {
                l._scribe({ page: 'nudge', section: 'dialog', action: 'impression' }, { nudge_id: l.state.nudgeId }),
                  l.setState({ showToxicReplyNudge: !0 })
              }),
              b()(h()(l), '_hideToxicReplyNudge', function () {
                return l.setState({ showToxicReplyNudge: !1 })
              }),
              b()(h()(l), '_checkToxicReplyAndSendTweet', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = l.state.nudgeId
                if (
                  !(
                    !l._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    l.isReply &&
                    !n &&
                    l.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return l._handleSendTweet()
                l._checkToxicReply().then(function (e) {
                  if (!e) return l._handleSendTweet()
                  l.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled'),
                    l.context.featureSwitches.getArrayValue('responsive_web_reply_nudge_supported_languages'),
                    l._showToxicReplyNudge()
                })
              }),
              b()(h()(l), '_handleSendTweet', function () {
                var e = l.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
                  o = e.composeSemanticCoreId,
                  i = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  u = e.history,
                  d = e.inReplyToStatus,
                  p = e.isSelfThreadReply,
                  m = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  y = r.conversationControlsValue,
                  v = r.exclusivityControlValue,
                  _ = void 0 === v ? void 0 : v,
                  b = l.isPreview,
                  C = l.props.composerData.map(function (e) {
                    return l._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(Tt.c)(C[0].scheduledFor)
                if (w) {
                  var T = Object(Tt.b)(w),
                    E = Object(Tt.i)(w),
                    x = Ei({ scheduleDate: T, scheduleTime: E })
                  return n({ text: x, action: { label: Ti, link: '' } }), void l._close()
                }
                if (
                  (i.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  l._conversationControlsCreationEnabled)
                )
                  if ('community' === y) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === y) {
                    var I = l._getSingleComposerDataWithLatestText(C[0]).text,
                      R = Object(S.d)(I)
                    a.scribe({
                      action: R ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === y && a.scribe({ action: 'send_my_followers_tweet' })
                var k = (null == d ? void 0 : d.community_id_str) || r.communityIdValue || void 0,
                  A = k ? '8.31.'.concat(k) : '',
                  D = o ? (k ? [o, A].join(',') : o) : A
                g({
                  sendData: C,
                  communityIdValue: k,
                  conversationControlsValue: y,
                  excludedRecipients: i,
                  exclusivityControlValue: _,
                  inReplyToStatus: d,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: D,
                  isPreview: b,
                })
                  .then(function (e) {
                    b || l.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return l._scribeTweetSent(C[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && l._scribeThreadSent(C, e, 'thread_send_success')
                    var a = e.length > 1 ? mi : pi
                    if (k && f) {
                      var r = f,
                        o = e.length
                      a = ri({ numOfTweets: o, communityName: r })
                    }
                    var i = b && l.isReply
                    if (i || !b) {
                      var s = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: i ? hi : a,
                        action: { label: Ti, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(s || '') },
                      })
                    }
                    l.isInlineReply && l.setState({ focused: !1 }), l._updateConvoCardState(), l._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      r = void 0 === n ? [] : n,
                      o = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      i = null == e ? void 0 : e.url,
                      d = null == e ? void 0 : e.status,
                      p = { message: e.type, event_info: o ? ''.concat(o) : void 0, status_code: d, url: i }
                    throw (
                      (r.map(
                        function (e, t) {
                          return l._scribeTweetSent(C[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(ni.d)(e) && e.code === Xr.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: p }),
                      C.length > 1 && l._scribeThreadSent(C, r, 'thread_send_failure'),
                      r.length &&
                        u.replace({
                          pathname: m.pathname,
                          state: s()(
                            s()({}, Object(Xo.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(l._handleTweetError('send_tweet_cancel', to.a))
              }),
              b()(h()(l), '_setActiveParentKey', function () {
                ;(0, l.props.setActiveParentKey)(l._getParentKey())
              }),
              b()(h()(l), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  o = n.isDraftTweet,
                  i = void 0 !== o && o,
                  c = n.isScheduled,
                  u = void 0 !== c && c,
                  d = l.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = i ? m : u ? p : 'send_',
                  f = { items: [eo.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  y = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  v = e.mediaTags.length,
                  _ = Object(Qo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  b = l.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (l._scribe({ action: ''.concat(h, 'tweet') }, f),
                  i || !e.draftTweetId || e.scheduledTweetId || l._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  l.isQuoteTweet &&
                    (l._scribe({ action: 'retweet_with_comment' }, f),
                    r && l._scribe(s()(s()({}, Ai), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  l.isReply && l._scribe({ component: b, action: ''.concat(h, 'reply') }, f),
                  g && l._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  l._hasPhoto(e) &&
                    (l._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    y && l._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    v && l._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  l._hasVideo(e) &&
                    (l._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    v && l._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  _.size)
                ) {
                  var C = l._hasPhoto(e) ? 'photo' : 'video'
                  _.forEach(function (e) {
                    l._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (d &&
                    l.isReply &&
                    !u &&
                    (i
                      ? l._scribe(s()(s()({}, w), {}, { action: 'save' }), { nudge_id: d })
                      : l._scribe(s()(s()({}, w), {}, { action: 'sent' }), { nudge_id: d })),
                  d || i || !l.isReply || u || l._scribe(s()(s()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var T = t.id_str && eo.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  l._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: T ? [T] : [] })
                  var E = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(y || E) &&
                    l._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: y ? 'user_entered' : 'from_provider', items: T ? [T] : [] },
                    ),
                    v && l._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else l._hasGif(e) && (l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), y && l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(l), '_scribeThreadSent', function (e, t, n) {
                var a = l.props.inReplyToStatus,
                  r = { items: [eo.a.getSendThreadItem(e, t.length, !!a)] }
                l._scribe({ action: n }, r)
              }),
              b()(h()(l), '_scribeRetweet', function (e) {
                var t = l.props.hasArticleNudge,
                  n = { items: [eo.a.getTweetItem(e)] }
                l._scribe({ action: 'retweet' }, n),
                  t && l._scribe(s()(s()({}, Ai), {}, { element: 'result', action: 'retweet' }), n)
              }),
              b()(h()(l), '_handleRetweet', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (l._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 }), l._close()
                  }, n($r.a)))
              }),
              b()(h()(l), 'handleDismissComposer', function () {
                l.shouldShowDiscardConfirmation
                  ? l.setState({ showDiscardTweetConfirmation: !0 })
                  : l.shouldShowBackgroundSendConfirmation
                  ? l._cancelAllMediaUploads()
                  : l._close()
              }),
              b()(h()(l), '_cancelAllMediaUploads', function () {
                l.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              b()(h()(l), '_handleConfirmDiscardTweet', function () {
                var e = l.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = l._canSaveDraft ? 'draft' : 'send'
                l.setState({ showDiscardTweetConfirmation: !1 }),
                  l._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && l._scribe(s()(s()({}, Ai), {}, { element: 'result', action: 'cancel' })),
                  l.state.nudgeId &&
                    l._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { nudge_id: l.state.nudgeId },
                    )
              }),
              b()(h()(l), '_handleCancelDiscardTweet', function () {
                l.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  l._restoreFocusToActiveComposer()
                })
              }),
              b()(h()(l), '_handleAcceptAltTextPrompt', function () {
                l.setState({ showAltTextPrompt: !1 })
                var e = l.props.history,
                  t = l._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (l._scribe(s()(s()({}, ki), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              b()(h()(l), '_handleIgnoreAltTextPrompt', function () {
                l._scribe(s()(s()({}, ki), {}, { action: 'declined' })),
                  l.setState({ showAltTextPrompt: !1 }),
                  l._handleTweetOrRetweet()
              }),
              b()(h()(l), '_handleCancelAltTextPrompt', function () {
                l._scribe(s()(s()({}, ki), {}, { action: 'cancel' })),
                  l.setState({ showAltTextPrompt: !1 }, function () {
                    l._restoreFocusToActiveComposer()
                  })
              }),
              b()(h()(l), '_restoreFocusToActiveComposer', function () {
                var e = l.props.activeComposerIndex
                void 0 !== e && l._composerRefs[e] && l._composerRefs[e].focus()
              }),
              b()(h()(l), '_close', function () {
                var e = l.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || l._resetDraft(),
                  l.state.navigatingToOutbox
                    ? l._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              b()(h()(l), '_handleComposerFocus', function (e) {
                l._composerRefs[e]
                  ? l.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      l._restoreFocusToActiveComposer()
                    }, 0)
              }),
              b()(h()(l), '_handleFocus', function () {
                l.state.focused ||
                  (l.isInlineReply && l._scribe({ element: 'inline_reply', action: 'reply' }),
                  l.setState({ focused: !0 }))
              }),
              b()(h()(l), '_handleTypeaheadStateChange', function (e) {
                l.setState({ typeaheadActive: e })
              }),
              b()(h()(l), '_handleRemoveComposer', function () {
                var e = l.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  o = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(Xo.a)(r.state || {}, 'quotedStatus') }),
                  o(),
                  setTimeout(l._restoreFocusToActiveComposer)
              }),
              b()(h()(l), '_handleViewRecipients', function () {
                var e = l.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                l._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              b()(h()(l), '_handleTextChange', function (e, t) {
                var n = l.state.textMap,
                  a = l.props,
                  r = a.activeComposerIndex,
                  o = a.isInline,
                  i = a.setValidity
                if (
                  (l.setState({ textMap: s()(s()({}, n), {}, b()({}, t, e)) }, function () {
                    i && i(l._areComposersValid())
                  }),
                  l.setState({ errorMessage: void 0 }),
                  Ko.b.isIOS())
                ) {
                  var c = o ? 0 : r
                  l._updateSingleComposer({ text: e }, c)
                }
              }),
              b()(
                h()(l),
                '_handleTextOnBlur',
                Object(aa.a)(function (e, t) {
                  return function () {
                    var n = l.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      o = l.props.composerData,
                      i = a[e],
                      s = o.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof i && !r && s && l._updateSingleComposer({ text: i }, t)
                  }
                }),
              ),
              b()(h()(l), '_updateAudienceControlsValue', function (e) {
                var t = l.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = l.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!l._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!l._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (l._updateSingleComposer({ pollActive: !1 }, 0), l.setState({ errorMessage: { text: ai } })),
                      (null == r ? void 0 : r.text) === ai && l.setState({ errorMessage: void 0 })
                }
                a(e, l._getParentKey())
              }),
              b()(h()(l), '_renderProgressBar', function () {
                var e = l.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(Go.a, { progress: t ? Math.max(n, 0.02) : 0, style: Mi.progressBar })
              }),
              b()(h()(l), '_updateConvoCardState', function () {
                var e = l.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              b()(h()(l), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Kr.a)(e)
                    }),
                  ).then(l._handleAddMediaFiles(e))
                }
              }),
              b()(h()(l), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    o = l.props,
                    i = o.addMedia,
                    s = o.addToast,
                    c = o.composerData,
                    u = o.dataSaverMode,
                    d = o.preUploadMedia,
                    p = o.processMultipleMedia,
                    m = o.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    y = Object(ei.e)(
                      null === (a = h()(l)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  g ||
                    i(t, { location: ei.d.Tweet, canUploadLongVideo: y }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        l._updateSingleComposer({ mediaIds: Object(Jo.a)(r.concat(a)) }, e),
                          p(t, { onFailure: l._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else s({ text: Ii }), m(a)
                    })
                }
              }),
              b()(h()(l), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return l._handleMediaRemove(e, t)
                }
              }),
              b()(h()(l), '_handleMediaRemove', function (e, t) {
                var n = l.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  o = a[e],
                  i = o.media,
                  s = o.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(Zo.a)(e, n)
                  })(
                    i.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  u = c.length > 0 ? s : []
                l._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: u }, e),
                  r(t),
                  l.setState({ errorMessage: void 0 })
              }),
              b()(h()(l), '_setComposerRef', function (e) {
                return function (t) {
                  l._composerRefs[e] = t
                }
              }),
              b()(h()(l), '_shouldBeExpanded', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (l.state.focused) return !0
                var a = !Object(wt.c)(l._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(l), '_areComposersValid', function () {
                var e = l.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  o = 'community_members' === t
                return (
                  (l.isRetweet && !r && !o) ||
                  n.every(function (e) {
                    return Object(wt.e)(l._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(l), '_areComposersEmptyOrUnchanged', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(wt.d)(l._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              b()(h()(l), '_getAltTextMetadata', function () {
                var e = l.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var n,
                      a = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      r = a
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += a.length), (n = t.noDescriptionImageIDs).push.apply(n, i()(r))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              b()(h()(l), '_getSingleComposerDataWithLatestText', function (e) {
                var t = l.state.textMap
                return 'string' == typeof t[e.key] ? s()(s()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (l.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (l._composerRefs = {}),
              (l._conversationControlsCreationEnabled =
                !0 ===
                l.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (l._throttledSyncTexts = Object(ra.a)(l._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (l._keyCommandHandlers =
                ((o = {}), b()(o, ti.b, l.handleTweetOrRetweet), b()(o, ti.a, l.handleDismissComposer), o)),
              (l._keyCommandHandlersForActiveTypeahead = b()({}, ti.b, l.handleTweetOrRetweet)),
              (l._isAltTextNudgeEnabled =
                !0 ===
                l.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (l._isCommunitiesEnabled = l.context.featureSwitches.isTrue('c9s_enabled')),
              l
            )
          }
          return (
            p()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props.onRef
                  e && e(this)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.convoCardData,
                    n = e.externalMedia,
                    a = e.externalMediaFiles,
                    r = e.history,
                    o = e.isInline,
                    i = e.isIntentRoute,
                    l = e.location,
                    c = e.prepopulatedText,
                    u = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    c || (t && t.cardUrl))
                  ) {
                    var d = s()({}, null)
                    c && (d.text = c), t && t.cardUrl && (d.cardUrl = t.cardUrl), this._updateSingleComposer(d)
                  }
                  ;(c || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !i &&
                    r.replace({
                      query: Object(ar.b)(l.query),
                      search: '',
                      pathname: l.pathname,
                      state: Object(Xo.a)(Object(ar.b)(l.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    u && u(this._areComposersValid()),
                    o || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.addToast,
                    r = n.composerData,
                    o = n.copyDataFromInlineReplyComposerToModalComposer,
                    i = n.externalMedia,
                    l = n.externalMediaFiles,
                    s = n.onRef,
                    c = n.parentTweetId,
                    u = n.replyPressToggle,
                    d = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== s && e.onRef(void 0),
                    s && s !== e.onRef && s(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: xi }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : l.length > 0 && l !== e.externalMediaFiles && this._handleAddMediaFiles(0)(l),
                    d && !Object($o.a)(r, e.composerData) && d && d(this._areComposersValid()),
                    u !== e.replyPressToggle && o(c)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props.onRef
                  this._unblockHistory && this._unblockHistory(), e && e(void 0), this._syncTexts()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    a = this.props,
                    o = a.activeUser,
                    i = a.addComposer,
                    l = a.addToast,
                    s = a.audienceControlsValue,
                    c = a.composeHeader,
                    u = a.composerData,
                    d = a.copyDataFromInlineComposerToModalComposer,
                    p = a.customizePropsForSingleComposerItem,
                    m = a.geoEnabled,
                    h = a.history,
                    f = a.inReplyToStatus,
                    g = a.isInline,
                    y = a.isModal,
                    v = a.isSelfThreadReply,
                    _ = a.isSending,
                    b = a.isSuperFollowsCreator,
                    C = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    E = a.richTextInputContext,
                    x = a.scheduledFor,
                    S = a.typeaheadWrapper,
                    I = a.userLanguage,
                    R = a.windowWidth,
                    k = this.state,
                    A = k.errorMessage,
                    D = k.focused,
                    O = k.shouldDisableButton,
                    P = k.showAltTextPrompt,
                    M = k.showDiscardTweetConfirmation,
                    F = k.showToxicReplyNudge,
                    B = k.typeaheadActive,
                    L = !y && B,
                    N = g ? 0 : this.props.activeComposerIndex,
                    V = L || g ? [u[N]] : u,
                    j = this._areComposersValid(),
                    H = this.hasNonCompliantQuote && this.isRetweet,
                    U = g ? W.a : Yo.a,
                    z = g ? {} : { onAnimateComplete: y ? void 0 : this._handleAnimateComplete },
                    K = O || !j || H || this.isCommunityTweetFromProtectedUser,
                    G = (g && no.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    Y = (g && no.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !C && Mi.root },
                    g ? this._renderProgressBar() : null,
                    A &&
                      w.a.createElement(
                        W.a,
                        { style: Mi.inlineCallout },
                        w.a.createElement(He.a, {
                          action:
                            null !== (e = A.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = A.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: A.action.label, link: A.action.link }
                              : void 0,
                          text: A.text,
                          type: 'danger',
                        }),
                      ),
                    w.a.createElement(
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Mi.content, C && Mi.contentInlineReply, y && Mi.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      c,
                      w.a.createElement(
                        U,
                        z,
                        V.map(function (e, t) {
                          var a = Object(Tt.h)(e.scheduledFor),
                            c = u.indexOf(e),
                            C = p(e, t, V),
                            k =
                              y || g
                                ? w.a.createElement(
                                    q.a,
                                    {
                                      behavioralEventContext: Di,
                                      disabled: K,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Mi.inlineSendButton,
                                      testID: y ? ao : ro,
                                      type: 'brandFilled',
                                    },
                                    Object(Gr.a)({
                                      inReplyToStatus: !!f,
                                      isSelfThreadReply: !!v,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            A = n._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            W.a,
                            { key: e.key },
                            w.a.createElement(
                              Ha,
                              r()(
                                {
                                  addToast: l,
                                  additionalToolbarContent: k,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && D,
                                  data: A,
                                  disableAddTweet: u.length >= 25,
                                  editable: !_ && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: m,
                                  hidePoll: G,
                                  hideScheduling: Y,
                                  history: h,
                                  index: c,
                                  isActive: c === N && !_,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: g,
                                  isInlineReply: n.isInlineReply,
                                  isLast: g || c === u.length - 1,
                                  isReply: !!f || n.isInlineReply,
                                  isSelfThreadReply: !!v,
                                  isSuperFollowsCreator: b,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: g ? d : i,
                                  onFilesAdded: n._handleAddMediaFiles(c),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(A.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!T,
                                  ref: n._setComposerRef(c),
                                  richTextInputContext: E,
                                  scheduledFor: x,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: B,
                                  typeaheadWrapper: S,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: I,
                                  windowWidth: R,
                                },
                                C,
                              ),
                            ),
                          )
                        }),
                      ),
                      M
                        ? this._canSaveDraft
                          ? w.a.createElement(qo.a, {
                              cancelButtonLabel: vi,
                              confirmButtonLabel: Ci,
                              headline: _i,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: bi,
                            })
                          : w.a.createElement(qo.a, {
                              confirmButtonLabel: vi,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? gi : fi,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: yi,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      F ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(W.a, { style: _ && Mi.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(s()(s()({}, e), {}, { data: t }))
                },
              },
              {
                key: 'isInlineReply',
                get: function () {
                  return !!this.props.parentTweetId
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length,
                    n = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && '' === n && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData,
                    t = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && t.length > 0
                },
              },
              {
                key: 'hasNonCompliantQuote',
                get: function () {
                  var e
                  return (
                    'non_compliant' ===
                    (null === (e = this.props.composerData[0].quotedStatus) || void 0 === e
                      ? void 0
                      : e.limited_actions)
                  )
                },
              },
              {
                key: 'shouldShowDiscardConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t[0].scheduledTweetId,
                    r = this.state.showDiscardTweetConfirmation,
                    o = this._areComposersEmptyOrUnchanged()
                  return !(n || o || r || a)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return n && a
                },
              },
              {
                key: 'shouldShowAltTextPrompt',
                get: function () {
                  var e = this.props.altTextNudgeType
                  return (
                    !(
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== T.a.prompt
                    ) && this._getAltTextMetadata().numberOfDescriptionsMissing > 0
                  )
                },
              },
              {
                key: '_canSaveDraft',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isInline
                  return !(
                    this.isCommunityTweet ||
                    this.isExclusiveTweet ||
                    this.isThread ||
                    t[0].pollActive ||
                    0 !== t[0].mediaTags.length ||
                    n
                  )
                },
              },
              {
                key: 'isCommunityTweet',
                get: function () {
                  var e = this.props,
                    t = e.audienceControlsValue,
                    n = e.inReplyToStatus
                  return !!((null != n && n.community_id_str) || 'community_members' === t._type)
                },
              },
              {
                key: 'isCommunityTweetFromProtectedUser',
                get: function () {
                  var e
                  return !(
                    !this.isCommunityTweet ||
                    null === (e = this.props.activeUser) ||
                    void 0 === e ||
                    !e.protected
                  )
                },
              },
              {
                key: 'isReply',
                get: function () {
                  return !(!this.props.inReplyToStatus && !this.props.inReplyToStatusId)
                },
              },
              {
                key: 'isExclusiveTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.exclusivityControlValue
                },
              },
              {
                key: 'tweetType',
                get: function () {
                  return this.isQuoteTweet
                    ? Oi.Quote
                    : this.isThread
                    ? Oi.Thread
                    : this.isReply
                    ? Oi.Reply
                    : Oi.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n,
                    a,
                    r = this.props.undoTweetSettings,
                    o =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    i =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled')
                  return (
                    o &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && i)) &&
                    (!r || void 0 === r[this.tweetType] || r[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Pi, 'defaultProps', {
        customizePropsForSingleComposerItem: function (e, t, n) {
          return {}
        },
        externalMedia: [],
        externalMediaFiles: [],
        isSelfThreadReply: !1,
        isModal: !1,
        positionCursorAtBeginning: !1,
        prepopulatedText: '',
        setValidity: function () {},
        typeaheadWrapper: Qr.a,
      }),
        b()(Pi, 'contextType', I.a),
        b()(Pi, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var Mi = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: s()({}, B.a.absoluteFillObject),
          inlineSendButton: { marginLeft: e.spaces.space12 },
          progressBar: {
            position: 'absolute',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
          },
          inlineCallout: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          hidden: { position: 'absolute', visibility: 'hidden', width: '100%' },
        }
      })
      t.a = Object(nt.a)(zr(Pi))
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('dWxr'),
        i = n.n(o),
        l = n('rHpw'),
        s = n('aITJ'),
        c = { clipPath: 'circle(0% at center)' },
        u = {
          strategy: function (e, t) {
            for (var n = i()(e.getText()), a = 0; a < n.length; a++)
              n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
          },
          component: function (e) {
            return r.a.createElement('span', { style: { color: l.a.theme.colors.link } }, e.children)
          },
        },
        d = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== C.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              a = e.entityKey,
              o = (a && n.getEntity(a)) || {}
            return !(s.b.isFirefox() && s.b.firefoxVersion() < 49)
              ? r.a.Children.map(t, function (e) {
                  var t,
                    n = r.a.Children.map(e, function (e) {
                      return r.a.createElement('span', { style: c }, e)
                    })[0]
                  return r.a.cloneElement(
                    r.a.createElement('span', null),
                    {
                      style:
                        ((t = (o.data && o.data.url) || ''),
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
        p = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var a, r, o = t.getText(); (a = e.exec(o)); ) n((r = a.index), r + a[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        },
        m = n('z4Oz'),
        h = n('zpdM'),
        f = function (e, t) {
          for (var n = 0, a = 0; a < e.length; a++) {
            var r = e[a],
              o = r.getText().length
            if (n + o >= t) return { blockKey: r.key, offset: t - n }
            n += o + 1
          }
          return Object.freeze({})
        },
        g = function (e, t) {
          var n = e.getCurrentContent(),
            a = n.getFirstBlock(),
            r = n.getLastBlock(),
            o = t.blockKey,
            i = void 0 === o ? r.key : o,
            l = t.offset,
            s = void 0 === l ? r.getText().length : l,
            c = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: i, focusOffset: s, isBackward: !1 }),
            u = h.Modifier.removeInlineStyle(e.getCurrentContent(), c, 'overflow')
          return h.EditorState.push(e, u, 'change-inline-style')
        },
        y = function (e, t) {
          var n = t.blockKey,
            a = t.offset,
            r = e.getCurrentContent(),
            o = r.getLastBlock(),
            i = v(r, n, a)
          if (n) {
            var l = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: i,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              s = h.Modifier.applyInlineStyle(r, l, 'overflow')
            return h.EditorState.push(e, s, 'change-inline-style')
          }
          return e
        },
        v = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            a = n,
            r = e.getBlockForKey(t)
          if (r) {
            var o = r.getEntityAt(n)
            if (void 0 !== o) {
              var i = o && e.getEntity(o),
                l = i && i.data && i.data.id
              if (void 0 !== l)
                for (var s = n - 1; s >= 0; s--) {
                  var c = r.getEntityAt(s),
                    u = c && e.getEntity(c)
                  if (!u || !u.data || u.data.id !== l) {
                    a = s + 1
                    break
                  }
                }
            }
            return a
          }
        },
        _ = 'TWEMOJI',
        b = 'IMMUTABLE',
        C = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = h.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              a = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                m.a.getTwemojiEntities(e.getText()).forEach(function (r) {
                  if (2 === (r.indices && r.indices.length)) {
                    var o = n.createEntity(_, b, { url: r.url || null, id: a })
                    a += 1
                    var i = o.getLastCreatedEntityKey(),
                      l = e.getKey(),
                      s = t
                        .getSelection()
                        .merge({
                          anchorKey: l,
                          anchorOffset: r.indices[0],
                          focusKey: l,
                          focusOffset: r.indices[1],
                          isBackward: !1,
                        })
                    n = h.Modifier.applyEntity(o, s, i)
                  }
                })
              }),
              h.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: f,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [u, d, p],
              n = h.EditorState.createWithContent(
                'string' == typeof e ? h.ContentState.createFromText(e) : Object(h.convertFromRaw)(e),
                new h.CompositeDecorator(t),
              )
            return h.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              a = e.getSelection(),
              r = h.Modifier.insertText(n, a, t)
            return h.EditorState.push(e, r, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: _,
          updateOverflowStyle: function (e, t) {
            var n,
              a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = e.getSelection(),
              o = h.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              l = e.getCurrentContent().getSelectionAfter(),
              s = e.getCurrentContent(),
              c = s.getBlocksAsArray(),
              u = 'number' == typeof t && t > -1,
              d = u ? f(c, t) : Object.freeze({})
            if ((a && ((o = g(o, d)), (n = !0)), u && ((o = y(o, d)), (n = !0)), n)) {
              var p = (o = h.EditorState.forceSelection(o, r)).getCurrentContent()
              ;(p = (p = p.set('selectionBefore', i)).set('selectionAfter', l)),
                (o = h.EditorState.set(e, { allowUndo: !0, currentContent: p }))
            }
            return o
          },
        })
    },
    keCP: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = n('97Jx'),
        g = n.n(f),
        y = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('KqXw'), n('MvUL'), n('SV7d')),
        v = n('rHpw'),
        _ = 'singleline',
        b = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? v.a.theme.colors.gray700 : t,
            a = v.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(n, ';\n            padding-bottom: ')
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              n,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              _,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              _,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        C = n('ERkP'),
        w = n.n(C),
        T = n('k/Ka'),
        E = n('PxJJ'),
        x = n('w9LO'),
        S = n('fs1G'),
        I = n('zpdM'),
        R = function (e) {
          return Object(T.a)('div', e)
        },
        k = !1,
        A =
          ((t.a = w.a.forwardRef(function (e, t) {
            var n = y.d()
            return w.a.createElement(
              A,
              g()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(s()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return I.EditorState.acceptSelection(
                    t,
                    new I.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                h()(s()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return I.EditorState.forceSelection(t, t.getSelection())
                }),
                h()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(I.EditorState.moveFocusToEnd(a))
                    : null == r || r(I.EditorState.moveSelectionToEnd(a))
                }),
                h()(s()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = b({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                h()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                h()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                h()(s()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(s()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                h()(s()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                h()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                h()(s()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                h()(s()(e), '_onPastedText', function (t, n, a) {
                  var r = e.props,
                    o = r.multiline,
                    i = r.onChange
                  return !o && i
                    ? (i(
                        I.EditorState.push(
                          a,
                          I.Modifier.replaceText(a.getCurrentContent(), a.getSelection(), t.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                h()(s()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    o = I.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && o(t) ? r : 27 === t.keyCode ? a : Object(I.getDefaultKeyBinding)(t)
                }),
                h()(s()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                h()(s()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                h()(s()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    a = t.maxNumberOfLines,
                    r = t.multiline,
                    o = t.numberOfLines,
                    i =
                      v.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (r && o ? o : 1) * i, maxHeight: (r && a ? a : 1) * i }
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
                        k || (this._setDraftJsStyle(), (k = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      E.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t = this.props,
                        n = t.ariaActiveDescendant,
                        a = t.ariaAutocomplete,
                        r = t.ariaControls,
                        o = t.ariaLabel,
                        i = t.blockRenderMap,
                        l = t.blockRendererFn,
                        s = t.editorState,
                        c = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        f = t.onKeyPress,
                        g = t.onKeyUp,
                        y = t.placeholder,
                        b = t.spellCheck,
                        C = t.stripPastedStyles,
                        T = t.style,
                        E = t.testID
                      return w.a.createElement(
                        R,
                        {
                          className: u ? void 0 : _,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), T],
                        },
                        w.a.createElement(I.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: o,
                          ariaMultiline: u,
                          blockRenderMap: i,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            h()(e, x.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', f),
                            h()(e, 'onKeyUp', g),
                            e),
                          customStyleMap: D(v.a.theme),
                          editorState: s,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: m,
                          placeholder: y,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== b,
                          stripPastedStyles: C,
                          tabIndex: 0,
                          webDriverTestID: E,
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
          })(w.a.Component))
      h()(A, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: S.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        stripPastedStyles: !0,
      }),
        (A.propTypes = {})
      var D = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.g34f2c63,
        i = r.a.f70a36d0,
        l = r.a.d17df547,
        s = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? s : t ? l : e.isThread ? i : o({ verb: '' })
        }
    },
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return We
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('2G9S'), n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        v = n.n(y),
        _ = n('HPNB'),
        b = n('h5NW'),
        C = n('m3Bd'),
        w = n.n(C),
        T = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        E = n('pidX'),
        x = n('AspN'),
        S = n('XOJV'),
        I = n('G6rE'),
        R = n('xZGM'),
        k = n('0KEI'),
        A = n('hqKg'),
        D = n('oEGd'),
        O = n('rU/Q'),
        P = n('XpKj'),
        M = ['cardUrl', 'mediaIds'],
        F = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        B = Object(A.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          I.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        L = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        N = F(function (e) {
          return e.inReplyToStatusId
        }),
        V = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        j = F(function (e) {
          return e.defaultText
        }),
        H = F(function (e) {
          return e.quotedStatus
        }),
        U = F(function (e) {
          return e.isSelfThreadReply
        }),
        z = F(function (e) {
          return e.hideUnsentTweetsButton
        }),
        W = F(function (e) {
          return e.headingSubtitle
        }),
        K = F(function (e) {
          return e.headingTitle
        }),
        q = F(function (e) {
          return e.selectedCommunityId
        }),
        G = Object(A.createSelector)(
          function (e) {
            return T.l(e, '')
          },
          function (e, t) {
            var n = j(e, t)
            return Object(E.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : H(e, t)
          },
          x.j,
          V,
          function (e, t, n, a, o) {
            return e.map(function (e, i) {
              return r()(
                r()({}, ((l = e).cardUrl, l.mediaIds, w()(l, M))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === i ? n : void 0,
                  text: 0 === i && t && !o ? t : e.text,
                },
              )
              var l
            })
          },
        ),
        Y = Object(A.createStructuredSelector)({
          activeUser: B,
          composerData: G,
          draftTweets: O.e,
          inReplyToStatus: function (e, t) {
            var n = L(0, t) || N(e, t)
            return n ? S.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: L,
          isIntentRoute: V,
          isSelfThreadReply: U,
          isSending: function (e) {
            return T.n(e, '')
          },
          scheduledTweets: P.f,
          sendingProgress: T.p,
          composeSemanticCoreId: F(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: z,
          subtitle: W,
          title: K,
          selectedCommunityIdFromLocationState: q,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(R.z)(e, R.e)
          },
        }),
        X = {
          createDraftTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(O.d),
          createScheduledTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P.d),
          fetchScheduledTweets: P.c,
          fetchDraftTweets: O.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(R.w)(R.e)
          },
          updateAudienceControlsValue: T.u,
        },
        Q = Object(D.g)(Y, X),
        J = n('RgK2'),
        Z = n.n(J),
        $ = n('jHSc'),
        ee = n('lsKC'),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('iFPY'),
        re = n('QbaN'),
        oe = n('v6aA'),
        ie = n('rxPX'),
        le = function (e) {
          return Object(R.z)(e, R.p)
        },
        se = Object(ie.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: le }
          })
          .propsFromActions(function () {
            return { addFlag: R.w }
          }),
        ce = n('Lsrn'),
        ue = n('k/Ka'),
        de = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ue.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ce.a.root, e.style],
                viewBox: '0 0 32 32',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              v.a.createElement('path', {
                d: 'M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z',
              }),
            ),
          )
        }
      de.metadata = { width: 32, height: 32 }
      var pe = de,
        me = n('MWbm'),
        he = n('4zmP'),
        fe = n('rHpw'),
        ge = ne.a.ed33a3b6,
        ye = ne.a.d5bda8b3,
        ve = ne.a.i859a9d3,
        _e = fe.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        be = se(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = v.a.useContext(oe.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? v.a.createElement(
                me.a,
                { style: _e.revueCallout },
                v.a.createElement(he.a, {
                  Icon: pe,
                  action: {
                    label: ve,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ge,
                  onClose: function () {
                    t(R.p)
                  },
                  text: ye,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        Ce = n('7nmT'),
        we = n.n(Ce),
        Te = n('Dtul'),
        Ee = n('zh9S'),
        xe = n('7JQg'),
        Se = 'tweetButton',
        Ie = n('/yvb'),
        Re = n('JYMr'),
        ke = n('cHvH'),
        Ae = n('feu+'),
        De = n('7N4s'),
        Oe = n('oQhu'),
        Pe = n('3A2y'),
        Me = ne.a.b8f0483e,
        Fe = ne.a.a133d13e,
        Be = ne.a.a1183237,
        Le = ne.a.da2663f5,
        Ne = ne.a.j24c37b2,
        Ve = 'compose',
        je = { page: Ve },
        He = { page: Ve, section: 'reply' },
        Ue = { context: 'compose_intent_logged_in' },
        ze = { viewType: 'send_tweet' },
        We = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), 'state', { isValid: !1 }),
              g()(u()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              g()(
                u()(e),
                '_handleAppBarHeight',
                Object(Oe.a)(function () {
                  var t = we.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              g()(u()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              g()(u()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              g()(u()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              g()(u()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              g()(u()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? He : je
              }),
              g()(u()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? Ue : Z.a
              }),
              g()(u()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  a = e.props,
                  r = a.activeUser,
                  o = a.inReplyToStatus,
                  i = a.isSelfThreadReply,
                  l = a.isSending,
                  s = !t || l || !r
                return n
                  ? void 0
                  : v.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: ze,
                        disabled: s,
                        onPress: e._handleSendTweet,
                        size: 'small',
                        testID: Se,
                        type: 'brandFilled',
                      },
                      Object(ee.a)({
                        inReplyToStatus: !!o,
                        isSelfThreadReply: !!i,
                        isQuoteTweet: !!e.isQuoteTweet,
                        isRetweet: !!e.isRetweet,
                        isScheduled: !!e.isScheduled,
                        isThread: e.isThread,
                      }),
                    )
              }),
              g()(u()(e), '_renderHeaderWithProgressBar', function (t) {
                var n = e.context.isModal,
                  a = e.props,
                  r = a.isSending,
                  o = a.sendingProgress
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  v.a.createElement(Re.a, {
                    progress: r ? Math.max(o, 0.02) : 0,
                    style: [Ke.progressBar, n && Ke.progressBarModal],
                  }),
                  t,
                )
              }),
              g()(u()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  a = t.hideUnsentTweetsButton,
                  r = t.scheduledTweets
                if (!a && (r.length > 0 || n.length > 0))
                  return v.a.createElement(
                    me.a,
                    { style: Ke.unsentHeadingContainer },
                    v.a.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Fe),
                  )
              }),
              g()(u()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(Ee.c)(r()(r()({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              g()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              g()(u()(e), '_handleComposeContainerRef', function (t) {
                e._composeContainerRef = t
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.activeUser,
                    n = e.createDraftTweetApiErrorHandler,
                    a = e.createScheduledTweetApiErrorHandler,
                    r = e.fetchDraftTweets,
                    o = e.fetchScheduledTweets,
                    i = e.history,
                    l = e.inReplyToStatus,
                    s = e.location,
                    c = e.selectedCommunityIdFromLocationState,
                    u = e.updateAudienceControlsValue
                  ;(this._unlockReload = Te.a.acquire()),
                    i.setModalRouteBreakpoint(i.location),
                    t && (o().catch(a()), r().catch(n())),
                    c &&
                      (u({
                        _type: 'community_members',
                        communityIdValue: c,
                        conversationControlsValue: 'community_members',
                      }),
                      i.replace({ pathname: s.pathname, state: Object(Pe.a)(s.state || {}, 'selectedCommunityId') })),
                    null != l && l.exclusivity_info
                      ? u({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != l && l.community_id_str
                      ? u({
                          _type: 'community_members',
                          communityIdValue: l.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != l &&
                        l.trusted_friends_tweet &&
                        u({
                          _type: 'trusted_friends_tweet',
                          conversationControlsValue: 'trusted_friends_tweet',
                          trustedFriendsValue: {},
                        })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unlockReload()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.activeUser,
                    a = t.composeHeader,
                    r = t.composeSemanticCoreId,
                    o = t.composerData,
                    i = t.customizePropsForSingleComposerItem,
                    l = t.history,
                    s = t.isIntentRoute,
                    c = t.location,
                    u = t.quotedStatus,
                    d = t.richTextInputContext,
                    p = t.subtitle,
                    m = t.title,
                    h = t.typeaheadWrapper,
                    f = s && !n,
                    g = this.context.isModal
                  return v.a.createElement(
                    xe.b,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    v.a.createElement(ke.a, null, function (t) {
                      var s = t.windowWidth,
                        y = _.a.shouldRenderAsModal(s),
                        C = (f || e.showCommunityAudienceEducation) && y,
                        w = (null == o ? void 0 : o.length) > 1
                      return v.a.createElement(
                        v.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? v.a.createElement(Ae.a, {
                              actionLabel: Ne,
                              graphicDisplayMode: 'none',
                              headline: Be,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: Le,
                              withCloseButton: !1,
                            })
                          : null,
                        f && v.a.createElement(ae.a, { history: l, location: c }),
                        !C &&
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: Ve,
                                documentTitle: Me,
                                hideBackButton: !1,
                                history: l,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: p,
                                title: m,
                              },
                              v.a.createElement(b.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: i,
                                history: l,
                                isModal: g,
                                location: c,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: u,
                                richTextInputContext: d,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: s,
                              }),
                            ),
                            w ? v.a.createElement(be, null) : null,
                          ),
                      )
                    }),
                  )
                },
              },
              {
                key: 'showCommunityAudienceEducation',
                get: function () {
                  var e = this.props,
                    t = e.inReplyToStatus,
                    n = e.selectedCommunityIdFromLocationState,
                    a = e.shouldShowCommunityAudienceEducation,
                    r = !!((null != t && t.community_id_str) || n)
                  return a && r
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length
                  return !this.isThread && e[0].quotedStatus && '' === e[0].text && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData
                  return !this.isThread && !!e[0].quotedStatus
                },
              },
              {
                key: 'isScheduled',
                get: function () {
                  var e = this.props.composerData
                  return Object(re.h)(e[0].scheduledFor)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(We, 'contextType', De.b)
      var Ke = fe.a.create(function (e) {
        return {
          progressBar: {
            position: 'fixed',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
            zIndex: e.componentZIndices.appBarZIndex + 1,
          },
          progressBarModal: { position: 'absolute' },
          unsentHeadingContainer: { marginLeft: 'auto' },
        }
      })
      t.default = Q(We)
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return u
      })
      var a = n('ddV6'),
        r = n.n(a),
        o =
          (n('z84I'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('KqXw'),
          n('Ysgh'),
          n('LW0h'),
          n('2G9S'),
          n('3XMw')),
        i = n.n(o),
        l = n('3A2y'),
        s = i.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          o = r()(a, 6),
          i = o[0],
          l = o[1],
          u = o[2],
          d = o[3],
          p = o[4],
          m = o[5],
          h = [
            i,
            l && '@'.concat(l.toString()),
            u,
            d,
            p &&
              p
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            m && s({ viaScreenName: m }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var u = function (e) {
        return Object(l.a)(e, c)
      }
    },
    rziq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      var a = 'send-tweet',
        r = 'dismiss-composer'
    },
    sCk0: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        g = n.n(f),
        y = n('zfvc'),
        v = n('RhWx'),
        _ = n.n(v),
        b = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(s()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(s()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  n = e.props,
                  a = n.children,
                  r = n.onAnimateComplete
                t &&
                  (r && r(),
                  e.setState({
                    renderChildren: g.a.Children.toArray(a).map(function (e) {
                      return { status: C.static, child: e }
                    }),
                    isAnimating: !1,
                  }))
              }),
              e
            )
          }
          return (
            i()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return this.state.renderChildren.map(function (t) {
                      var n = t.child,
                        a = t.status
                      return g.a.createElement(
                        y.a,
                        {
                          animateMount: a !== C.static,
                          key: n.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: a !== C.out,
                        },
                        n,
                      )
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = (function (e, t) {
                      for (
                        var n = 0,
                          a = 0,
                          r = [],
                          o = function () {
                            if (n >= t.length)
                              return (
                                r.push.apply(
                                  r,
                                  _()(
                                    e.slice(a).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var o = t[n],
                              i = e[a]
                            if (o.key === i.key) r.push({ child: o, status: C.static }), (n += 1)
                            else {
                              var l = Object(b.a)(t, function (e) {
                                return e.key === i.key
                              })
                              l >= 0
                                ? (r.push.apply(
                                    r,
                                    _()(
                                      t.slice(n, l).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[l], status: C.static }]),
                                  ),
                                  (n = l + 1))
                                : r.push({ child: i, status: C.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== o();

                      );
                      return (
                        n < t.length &&
                          r.push.apply(
                            r,
                            _()(
                              t.slice(n).map(function (e) {
                                return { child: e, status: C.in }
                              }),
                            ),
                          ),
                        r
                      )
                    })(
                      t.renderChildren.map(function (e) {
                        return e.child
                      }),
                      g.a.Children.toArray(e.children),
                    )
                    return {
                      renderChildren: n,
                      isAnimating: !n.every(function (e) {
                        return e.status === C.static
                      }),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component)
      t.a = w
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        o = n('N9G2'),
        i = n('BIH/'),
        l = n('lhaq'),
        s = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = i(t),
              a = s(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : l(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    wa7Z: function (e, t, n) {
      'use strict'
      var a = n('wAC9')
      t.a = function (e) {
        return Object(a.a)({
          contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMembershipsSlice
          },
          getEndpointParams: function (e) {
            return e
          },
          sliceKey: 'communitiesMembershipsSlice-'.concat(e),
        })
      }
    },
    x8Sc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'InlineComposeContainer', function () {
          return u
        })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('h5NW'),
        i = n('MWbm'),
        l = n('7N4s'),
        s = n('cHvH'),
        c = n('rHpw'),
        u = function (e) {
          var t = e.history,
            n = e.location,
            a = e.parentTweetId,
            c = e.replyPressToggle,
            u = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = r.a.useContext(l.b).isModal
          return r.a.createElement(s.a, null, function (e) {
            var l = e.windowWidth
            return r.a.createElement(
              i.a,
              { style: d.root },
              r.a.createElement(o.a, {
                history: t,
                isInline: !0,
                isModal: m,
                location: n,
                parentTweetId: a,
                replyPressToggle: c,
                richTextInputContext: u,
                typeaheadWrapper: p,
                windowWidth: l,
              }),
            )
          })
        },
        d = c.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } }
        })
      t.default = u
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('WOwf'),
        i = n('3XMw'),
        l = n.n(i),
        s = n('k6Ei'),
        c = n('rHpw'),
        u = n('+/1j'),
        d = n('MWbm'),
        p = l.a.c2fc878c,
        m = l.a.db11b27f,
        h = function (e) {
          return e
        },
        f = c.a.create(function (e) {
          var t = e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30 },
            center: { alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
            hide: { opacity: 0 },
            text: { fontSize: 13, lineHeight: 0.8, minWidth: 16, textAlign: 'center' },
            gray700: { color: t.gray700 },
            red500: { color: t.red500 },
          }
        })
      t.a = function (e) {
        var t = e.count,
          n = e.maxCount,
          a = e.formatNumber,
          i = void 0 === a ? h : a,
          l = e.warningCount,
          g = n - t,
          y = g >= 0 ? m({ count: i(g) }) : p({ count: i(t - n) }),
          v =
            t >= l
              ? r.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  y,
                )
              : null,
          _ = Object(o.a)(g, n),
          b = t >= n ? 'red500' : t >= l ? 'yellow500' : 'primary',
          C = r.a.createElement(s.a, {
            color: b,
            progress: _,
            size: t >= l ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= l ? r.a.createElement(u.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, i(g)) : null
        return r.a.createElement(
          d.a,
          { style: [f.root, f.center] },
          v,
          C,
          r.a.createElement(d.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        l = n('ddV6'),
        s = n.n(l),
        c = n('ERkP'),
        u = n.n(c),
        d = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        p = n('3XMw'),
        m = n.n(p),
        h = n('MWbm'),
        f = n('t62R'),
        g = n('CKsB'),
        y = n('/yvb'),
        v = n('rHpw'),
        _ = n('Zg3A'),
        b = n('yiKp'),
        C = n.n(b),
        w = n('Lsrn'),
        T = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              u.a.createElement('path', {
                d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var x = E,
        S = n('boUI'),
        I = n('EweD'),
        R = m.a.g6185a9e,
        k = m.a.g2d04222,
        A = m.a.baffe39a,
        D = m.a.af293dc2,
        O = m.a.h1053f7e,
        P = m.a.bf994ab2,
        M = m.a.cf7f7e39,
        F = m.a.cfd2f35d,
        B = v.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space4,
              borderRadius: e.borderRadii.xLarge,
            },
            popover: { maxWidth: 5 * e.spacesPx.space64 },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 },
            menuRow: {
              flexDirection: 'row',
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
            },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
          }
        }),
        L = function (e) {
          var t,
            n,
            a = e.dismiss,
            r = e.isModal,
            o = e.midConversationTweet,
            i = e.value,
            l = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            s = !!o,
            c =
              s &&
              !(
                null != o &&
                null !== (t = o.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== o.user.id_str
                })
              ),
            p = O
          return (
            c ? (p = P) : s && (p = M),
            u.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [B.root, r ? B.modal : B.popover],
              },
              u.a.createElement(
                h.a,
                { style: B.title },
                u.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, R),
                u.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  k,
                ),
              ),
              u.a.createElement(
                h.a,
                null,
                u.a.createElement(g.a, {
                  Icon: _.a,
                  actionText: A,
                  isSelected: d.a.all === i,
                  onClick: l(d.a.all),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: x,
                  actionText: D,
                  isSelected: d.a.community === i,
                  onClick: l(d.a.community),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: p,
                  isSelected: d.a.by_invitation === i,
                  onClick: l(d.a.by_invitation),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? u.a.createElement(
                      y.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: B.cancelButton,
                        type: 'primaryOutlined',
                      },
                      F,
                    )
                  : null,
              ),
            )
          )
        },
        N = n('OiMc'),
        V = n('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          o = e.disabled,
          l = u.a.useState(!1),
          c = s()(l, 2),
          d = c[0],
          p = c[1],
          m = u.a.useCallback(function () {
            return p(!0)
          }, []),
          h = u.a.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (d ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return u.a.createElement(
          V.a,
          {
            disabled: o,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = i()(e, j)
              return u.a.createElement(L, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: f,
          },
          g,
        )
      }
    },
    ye3X: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({ inline: 'inline', prompt: 'prompt', require: 'require' })
    },
  },
])
//# sourceMappingURL=WIPED
