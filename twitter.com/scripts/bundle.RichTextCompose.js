;(window.webpackJsonp = window.webpackJsonp || []).push([
  [85, 13, 79],
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
          return x
        }),
        n.d(t, 'a', function () {
          return E
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        s = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        l = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        u = n('Ssj5'),
        d = n('qlwE'),
        m = n('a/ea'),
        p = n('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        g = Object.freeze({
          initial: { fetchStatus: l.a.NONE },
          lastSearch: { fetchStatus: l.a.NONE },
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
            return Object(s.b)(n, { request: o.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, n, a) {
            a.api
            var r = Object(m.d)(n())
            return t(
              w(
                {
                  query_type: p.a.tweet_compose_location,
                  lat: null == r ? void 0 : r.coords.latitude,
                  long: null == r ? void 0 : r.coords.longitude,
                  hacc: null == r ? void 0 : r.coords.accuracy,
                  search_term: e,
                },
                p.c.lastSearch,
              ),
            )
          }
        },
        x = function () {
          return function (e, t, n) {
            n.api
            var a = v(t()),
              r = y(t())
            if (a === l.a.LOADING || r) return Promise.resolve()
            var o = Object(m.d)(t())
            return o
              ? e(
                  w(
                    {
                      lat: o.coords.latitude,
                      long: o.coords.longitude,
                      hacc: o.coords.accuracy,
                      query_type: p.a.tweet_compose_location,
                      count: 50,
                    },
                    p.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        E = function () {
          return function (e, t, n) {
            n.api
            return Object(d.m)(t()) && Object(m.c)(t()) === c.b.granted
              ? e(Object(m.b)())
                  .then(function () {
                    return e(x())
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
              return i()(i()({}, e), {}, r()({}, n, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return i()(i()({}, e), {}, r()({}, a, { fetchStatus: l.a.FAILED }))
            case f.SUCCESS:
              var o = t.meta.resultSet,
                s = t.payload
              return i()(i()({}, e), {}, r()({}, o, { fetchStatus: l.a.LOADED, results: s }))
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
        s = n('SrIh'),
        l = i.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(s.a)(n, { extra: { context: o, isStrato: !0 } }),
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
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n('RH6X'),
        l = n('rziq'),
        c = n('hHEM'),
        u = n('keCP'),
        d = {
          convertEmojiToEntities: c.a.convertEmojiToEntities,
          element: u.a,
          initEditorState: c.a.initEditorState,
          insertTextAtCursor: c.a.insertTextAtCursor,
          updateOverflowStyle: c.a.updateOverflowStyle,
          dismissComposerCommandName: l.a,
          sendTweetCommandName: l.b,
        }
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(e, r()({}, t, { richTextInputContext: d, typeaheadWrapper: s.a }))
        }
      }
    },
    RH6X: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
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
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(l()(e), '_genericWrapperRef', g.a.createRef()),
              h()(l()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  o = t.isInlineReply,
                  i = t.onTypeaheadStateChange,
                  s = t.source,
                  l = e.state,
                  c = l.canShowTypeahead,
                  u = l.queryContext,
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
                    source: s || C.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(l()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(l()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(l()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              h()(l()(e), '_handleInputChange', function (t) {
                if (!Object(b.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  a = n && n.word,
                  r = e._getPlaintextFromCurrentBlock(t),
                  o = y.c(e._getCaret(t), r),
                  i = o.end,
                  s = o.start,
                  l = o.word,
                  c = y.e(l || '', 'compose')
                if ((null == c ? void 0 : c.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (c) {
                    var u = c.q,
                      d = c.result_type
                    e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: s, endIndex: i })
                  } else e._setQueryContext(void 0)
              }),
              h()(l()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(l()(e), '_handleDismiss', function () {
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
                    s = w.EditorState.push(n, i, 'insert-characters'),
                    l = r + e.length,
                    c = s.getSelection().merge({ anchorOffset: l, focusOffset: l })
                  return w.EditorState.forceSelection(s, c)
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
        return m
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
        s = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        l = n('kGix'),
        c = n('Ssj5'),
        u = 'scheduledTweets',
        d = { fetchStatus: l.a.NONE, scheduledTweets: [] },
        m = 'FETCH_SCHEDULED_TWEETS',
        p = Object.freeze({
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
          case p.SUCCESS:
            if (t.payload) return i()(i()({}, e), {}, { fetchStatus: l.a.LOADED, scheduledTweets: t.payload })
            break
          case p.FAILURE:
            return i()(i()({}, e), {}, { fetchStatus: l.a.FAILED })
          case p.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: l.a.LOADING })
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
            return Object(s.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: p,
              context: m,
            }).then(function () {})
          }
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(s.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
          return m
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
        s = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        l = n('Ssj5'),
        c = 'geoLocation',
        u = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var d = function (e) {
          return e.geoLocation.permissionStatus
        },
        m = function (e) {
          return e.geoLocation.position
        },
        p = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: p }
        },
        f = 'rweb/geoLocation/SET_POSITION',
        g = function () {
          return function (e, t) {
            return v()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(s.b.denied)), Promise.reject(t)
              })
          }
        },
        y = function () {
          return function (e, t) {
            return m(t()) ? Promise.resolve() : e(g())
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
      l.a.register(
        r()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p:
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
          var n = (0, s.default)(e, t)
            .concat((0, i.default)(e))
            .concat((0, o.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, l.default)(n), n
        })
      var r = a(n('EW8Q')),
        o = a(n('yyPN')),
        i = a(n('YXS5')),
        s = a(n('vwfs')),
        l = a(n('c8jd'))
      e.exports = t.default
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        s = n('yiKp'),
        l = n.n(s),
        c = n('VrFO'),
        u = n.n(c),
        d = n('Y9Ll'),
        m = n.n(d),
        p = n('1Pcy'),
        h = n.n(p),
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
          n('hBvt'),
          n('MvUL'),
          n('ulNE'),
          n('urw/'),
          n('LW0h'),
          n('hCOa'),
          n('DfhM'),
          n('vrRf'),
          n('uFXj'),
          n('ERkP')),
        w = n.n(C),
        T = n('ye3X'),
        x = n('pXBW'),
        E = n('6/RC'),
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
        Q = n('Zg3A'),
        X = n('EyD/'),
        Y = N.a.e815fc33,
        J = N.a.c63602d3,
        Z = N.a.baffe39a,
        $ = N.a.aa4209e8,
        ee = N.a.d0748dae,
        te = N.a.abd845fd,
        ne = { viewType: 'everyone' },
        ae = { viewType: 'community' },
        re = N.a.d58baa7e,
        oe = B.a.create(function (e) {
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
        ie = function (e) {
          var t,
            n,
            a = e.audienceControlsValue,
            r = e.dismiss,
            o = e.hasMemberships,
            i = e.isC9sParticipationEnabled,
            s = e.isSuperFollowsCreator,
            l = e.onAudienceControlsValueChange,
            c = e.sliceModule,
            u = w.a.useContext(I.a),
            d = a.communityIdValue || void 0,
            m = a.exclusivityControlValue || void 0,
            p = a.trustedFriendsValue || void 0,
            h = u.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            f = w.a.useCallback(
              function (e) {
                return function () {
                  l(e), r()
                }
              },
              [l, r],
            ),
            g = function (t) {
              t.stopPropagation()
              var n = e.dismiss,
                a = e.history
              return n(), a.push('/i/twittercircle/edit')
            }
          return w.a.createElement(
            W.a,
            { style: oe.root },
            w.a.createElement(
              K.a,
              { style: oe.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(M.b, { size: 'headline1', style: oe.title, weight: 'bold' }, Y),
                w.a.createElement(
                  R.a,
                  { behavioralEventContext: ne },
                  w.a.createElement(F.a, {
                    Icon: Q.a,
                    actionText: Z,
                    isSelected: !m && !d && !p,
                    onClick: f({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: oe.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                s
                  ? w.a.createElement(F.a, {
                      Icon: X.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!m,
                      onClick: f({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: oe.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                h
                  ? w.a.createElement(F.a, {
                      Icon: X.a,
                      actionSubText:
                        ((t = 5),
                        (n = re(t)),
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
                      isSelected: !!p,
                      onClick: f({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: {},
                      }),
                      selectable: !0,
                      style: oe.menuItem,
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
                      { behavioralEventContext: ae },
                      w.a.createElement(M.b, { style: oe.title, weight: 'bold' }, J),
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
        se = n('xVN5'),
        le = n('wAC9'),
        ce = function (e) {
          return Object(le.a)({
            contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.Communities.fetchCommunitiesMembershipsSlice
            },
            getEndpointParams: function (e) {
              return e
            },
            sliceKey: 'communitiesMembershipsSlice-'.concat(e),
          })
        },
        ue = n('hqKg'),
        de = n('li/m'),
        me = n('RqPI'),
        pe = n('xZGM'),
        he = n('0KEI'),
        fe = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? k.c.select(e, n) : void 0
        },
        ge = function (e, t) {
          return Object(pe.A)(e, pe.f)
        },
        ye = Object(A.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: ge,
              hasMemberships: de.d,
              selectedCommunity: fe,
              sliceModule: Object(ue.createSelector)(me.q, function (e) {
                return e ? ce(e) : void 0
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(pe.w)(pe.f)
              },
              updateSingleComposer: se.x,
            }
          }),
        ve = n('FG+G'),
        _e = n('Sp5X'),
        be = n('X00g'),
        Ce = n('efqG'),
        we = N.a.baffe39a,
        Te = N.a.e815fc33,
        xe = N.a.aa4209e8,
        Ee = N.a.d0748dae,
        Se = { viewType: 'communities_controls' },
        Ie = w.a.createElement(ve.a, null),
        Re = (function (e) {
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
                  s = t.sliceModule
                return w.a.createElement(ie, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: _e.a,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: i,
                  onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                  sliceModule: s,
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
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    o = t.hasMemberships,
                    i = t.isSuperFollowsCreator,
                    s = t.selectedCommunity,
                    l = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    u = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    d = n.communityIdValue || !1,
                    m = n.exclusivityControlValue || !1,
                    p = n.trustedFriendsValue || !1,
                    h = a && !s,
                    f = we
                  if ((d && null != s && s.name ? (f = s.name) : m ? (f = xe) : p && (f = Ee), m))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (d && null != s && s.theme && c) {
                    var g = be.a.getCommunityUIColorName(s.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o || u
                    ? w.a.createElement(
                        R.a,
                        { behavioralEventContext: Se },
                        w.a.createElement(
                          W.a,
                          { style: ke.container },
                          w.a.createElement(
                            Ce.a,
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
                                  accessibilityExpanded: l,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: Te,
                                  accessibilityRole: 'button',
                                  icon: Ie,
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
      b()(Re, 'contextType', I.a)
      var ke = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Ae = ye(Re),
        De = n('ddV6'),
        Oe = n.n(De),
        Pe = n('PKbs'),
        Me = function (e, t) {
          var n = t.selectedCommunityId
          return n ? k.c.select(e, n) : void 0
        },
        Fe = Object(A.a)()
          .propsFromState(function () {
            return { community: Me }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        Be = n('YeIG'),
        Le = n('21zW'),
        Ne = N.a.gfca5254,
        Ve = N.a.f510c8b2,
        je = w.a.createElement(M.b, { weight: 'bold' }, Ve),
        He = B.a.create(function (e) {
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
        Ue = Fe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          w.a.useEffect(
            function () {
              o && Object(Be.a)(t) && a(o).catch(n())
            },
            [t, o, n, a],
          )
          var s = w.a.useState(!1),
            l = Oe()(s, 2),
            c = l[0],
            u = l[1],
            d = w.a.useContext(I.a).featureSwitches,
            m = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(Pe.b, {
                    badgeStyle: He.badgeStyle,
                    headerContainerStyle: He.rulesHeader,
                    heading: je,
                    ruleContainerStyle: He.ruleContainerStyle,
                    rules: n,
                    theme: a,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var p = t.theme,
              h = be.a.getCommunityUIColorName(p),
              f = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              W.a,
              { style: He.container },
              i ? w.a.createElement(Le.a, null) : null,
              w.a.createElement(
                Ce.a,
                {
                  onDismiss: function () {
                    return u(!1)
                  },
                  onOpen: function () {
                    return u(!0)
                  },
                  renderContent: m,
                },
                w.a.createElement(
                  q.a,
                  r()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: He.button,
                    },
                    f,
                  ),
                  Ne,
                ),
              ),
            )
          }
          return null
        }),
        ze = n('ii+P'),
        We = n('4zmP'),
        Ke = N.a.g46f363d,
        qe = { viewType: 'rule_education' },
        Ge = function () {
          var e = Object(ze.a)(pe.g),
            t = Oe()(e, 2),
            n = t[0],
            a = t[1]
          return (
            w.a.useEffect(
              function () {
                return a
              },
              [a],
            ),
            n
              ? w.a.createElement(
                  W.a,
                  { style: Qe.container },
                  w.a.createElement(We.a, { behavioralEventContext: qe, onClose: a, text: Ke, withCloseButton: !0 }),
                )
              : null
          )
        },
        Qe = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Xe = w.a.memo(Ge),
        Ye = n('H7Rt'),
        Je = n('m3Bd'),
        Ze = n.n(Je),
        $e = n('yZqq'),
        et = function (e, t) {
          return Object(pe.A)(e, pe.q)
        },
        tt = Object(A.a)()
          .propsFromState(function () {
            return { shouldShowEducation: et }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(pe.w)(pe.q)
              },
            }
          }),
        nt = N.a.aa65a449,
        at = { viewType: 'persistent_conversation_controls_education' }
      var rt = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        ot = tt(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.a.useContext(I.a).featureSwitches,
            o = w.a.useState(),
            i = Oe()(o, 2),
            s = i[0],
            l = i[1],
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
                  l(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  W.a,
                  { style: rt.container },
                  w.a.createElement(We.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: at,
                    onClose: c,
                    text: nt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        it = n('FGLp'),
        st = n('Irs7'),
        lt = n('DlMI'),
        ct = n('gBde'),
        ut = n('gUPl'),
        dt = n('cOhU'),
        mt = ['analytics'],
        pt = w.a.createElement(lt.a, null),
        ht = w.a.createElement(ct.a, null),
        ft = w.a.createElement(ut.a, null),
        gt = w.a.createElement(dt.a, null),
        yt = 'conversation_control',
        vt = { viewType: yt },
        _t = Object.freeze({
          all: { icon: pt, label: N.a.i8ea6d4e },
          community: { icon: ft, label: N.a.ec5a4a25 },
          by_invitation: { icon: ht, label: N.a.b4543009 },
          community_members: { icon: gt, label: N.a.i13be5a0 },
          super_followers_exclusive: { icon: pt, label: N.a.f8393bda },
          trusted_friends_tweet: { icon: pt, label: N.a.c0857ccd },
        }),
        bt =
          (Object.freeze(['community', 'by_invitation']),
          Object(st.a)(function (e) {
            var t = e.analytics,
              n = Ze()(e, mt),
              a = e.disabled,
              r = e.value,
              o = _t[r],
              i = o.icon,
              s = o.label,
              l = w.a.useState(!1),
              c = Oe()(l, 2),
              u = c[0],
              d = c[1],
              m = w.a.useRef(null)
            Object(it.a)(function () {
              r !== Ye.a.all && r !== Ye.a.community_members && d(!0)
            })
            var p = w.a.useCallback(
              function (e) {
                t.scribe({ element: yt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              R.a,
              { behavioralEventContext: vt },
              u ? w.a.createElement(ot, { buttonRef: m.current }) : null,
              w.a.createElement(
                W.a,
                { style: Ct.controlsContainer },
                w.a.createElement(
                  $e.a,
                  n,
                  w.a.createElement(
                    q.a,
                    { disabled: a, icon: i, onPress: p, ref: m, size: 'xSmall', style: Ct.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        Ct = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        wt = n('krmn'),
        Tt = n('cIoY'),
        xt = n('w3n3'),
        Et = n('MLl7'),
        St = n('1auM'),
        It = n('07FG'),
        Rt = n('Q8CU'),
        kt = n('QbaN'),
        At = n('VPdC'),
        Dt = n('WPfJ'),
        Ot = B.a.create(function (e) {
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
              zIndex: Dt.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: Dt.e },
            iconEmojiPicker: { zIndex: Dt.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: Dt.a,
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
        Pt = N.a.bdbcdd93,
        Mt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            o = n || t.length >= 4,
            i = t.length < 3
          return w.a.createElement(At.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? Pt : void 0,
            disabled: o,
            multiple: i,
            onChange: a,
            onPress: r,
            style: [Ot.toolBarButton, Ot.firstToolBarButton],
            type: 'brandText',
          })
        },
        Ft = n('oQhu'),
        Bt = n('p+r5'),
        Lt = n('GWvE'),
        Nt = (function (e) {
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
            m()(n, [
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
                    s = e.onChange
                  return w.a.createElement(
                    W.a,
                    { style: Vt.root },
                    w.a.createElement(Bt.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: r,
                      maxLength: 25,
                      name: o,
                      onBlur: i,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Vt.formTextInput,
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
                    (this.value && !Object(Lt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Nt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Vt = B.a.create(function (e) {
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
        jt = Nt,
        Ht = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        Ut = n('6XNv'),
        zt = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
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
                    s = e.testID,
                    l = !t || o === r,
                    c = e.value.toString(),
                    u = Object(Ht.a)(o, r + 1).map(function (e) {
                      return { label: ''.concat(N.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(Ut.a, {
                    disabled: l,
                    label: n,
                    onChange: i,
                    options: u,
                    style: [Wt.selector, !a && Wt.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(zt, 'defaultProps', { last: !1 })
      var Wt = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Kt = zt,
        qt = 'addPollChoice',
        Gt = 'selectPollDays',
        Qt = 'selectPollHours',
        Xt = 'selectPollMinutes',
        Yt = 'removePollButton',
        Jt = N.a.caf8edc4,
        Zt = N.a.g93586be,
        $t = N.a.d073b644,
        en = N.a.a2f0728e,
        tn = (function (e) {
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
                    s = { days: n, hours: i, minutes: 7 === n ? 0 : 0 === n && 0 === i && o < 5 ? 5 : o }
                  return t && t(s), { duration: s }
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
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    n = e.style
                  return w.a.createElement(
                    W.a,
                    { style: n },
                    w.a.createElement(M.b, { color: 'normal', style: nn.durationLabel }, t ? Jt : ''),
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
                    { style: nn.durationControls },
                    w.a.createElement(Kt, {
                      editable: t && n,
                      label: Zt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Gt,
                      value: r,
                    }),
                    w.a.createElement(Kt, {
                      editable: t && n,
                      label: $t,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Qt,
                      value: o,
                    }),
                    w.a.createElement(Kt, {
                      editable: t && n,
                      label: en,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === o ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Xt,
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
      b()(tn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var nn = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        an = tn,
        rn = n('iY63'),
        on = n('jtO7'),
        sn = N.a.g589c2e1,
        ln = N.a.a1e6c3a1,
        cn = N.a.a739e006,
        un = N.a.d89a5b92,
        dn = N.a.c2a8118d,
        mn = N.a.a8ede1de,
        pn = N.a.af40a8ef,
        hn = (function (e) {
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
                  s = [i._choice1, i._choice2, i._choice3, i._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                o && o.length >= 2 && s ? a() : n(), t && t({ choices: o, duration: r.duration })
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
              s = (o || []).length,
              l = s > 2 ? s : 2
            return (r.state = { autoFocus: i, choiceCount: l }), r
          }
          return (
            m()(n, [
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
                    s = o.choiceCount,
                    l = w.a.createElement(
                      W.a,
                      { style: fn.rightColumn },
                      s < 4
                        ? w.a.createElement(q.a, {
                            accessibilityLabel: mn,
                            disabled: !(t && r),
                            hoverLabel: { label: pn },
                            icon: w.a.createElement(rn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: fn.addButton,
                            testID: qt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    W.a,
                    { style: fn.choicesAndAddButton },
                    w.a.createElement(
                      W.a,
                      { style: fn.choices },
                      w.a.createElement(jt, {
                        autoFocus: i,
                        defaultValue: a[0],
                        editable: t && r,
                        label: sn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(jt, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: ln,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(jt, {
                            autoFocus: i,
                            defaultValue: a[2],
                            editable: t && r,
                            label: cn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(jt, {
                            autoFocus: i,
                            defaultValue: a[3],
                            editable: t && r,
                            label: un,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    l,
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
                    { style: fn.root },
                    this._renderChoices(),
                    w.a.createElement(an, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: fn.durationPicker,
                    }),
                    w.a.createElement(
                      W.a,
                      { style: fn.removePollButton },
                      w.a.createElement(on.a, { color: 'red500', label: dn, onPress: r, testID: Yt }),
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
        fn = B.a.create(function (e) {
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
        gn = Object(st.a)(hn),
        yn = n('+d3d'),
        vn = ['onChange'],
        _n = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            o = e.initialDuration,
            i = e.isActive,
            s = e.isPollValid,
            l = e.updateComposer,
            c = Object(st.b)(),
            u = w.a.useMemo(
              function () {
                return {
                  onChange: function (e) {
                    l({ pollChoices: null == e ? void 0 : e.choices, pollDuration: null == e ? void 0 : e.duration }, t)
                  },
                  onValid: function () {
                    !s && l({ pollValid: !0 }, t)
                  },
                  onInvalid: function () {
                    s && l({ pollValid: !1 }, t)
                  },
                  onRemove: function () {
                    c.scribe({ element: 'remove_poll', action: 'click' }), l({ pollActive: !1 }, t)
                  },
                }
              },
              [c, s, l, t],
            ),
            d = u.onChange,
            m = Ze()(u, vn),
            p = w.a.useMemo(
              function () {
                return Object(yn.a)(
                  function (e) {
                    var t = e.choices,
                      n = e.duration
                    d({ choices: t, duration: n })
                  },
                  200,
                  { leading: !0, trailing: !0 },
                )
              },
              [d],
            ),
            h = w.a.useCallback(
              function () {
                p.flush()
              },
              [p],
            )
          return w.a.createElement(
            gn,
            r()({ editable: n, initialChoices: a, initialDuration: o, isActive: i, onBlur: h, onChange: p }, m),
          )
        },
        bn = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        Cn = N.a.i859676b,
        wn = w.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            M.b,
            { link: '/settings/audience_and_tagging', style: bn.link, withInteractiveStyling: !0, withUnderline: !0 },
            N.a.c9a48d3f,
          ),
        )
      function Tn() {
        return w.a.createElement(W.a, { style: bn.container }, w.a.createElement(We.a, { headline: Cn, text: wn }))
      }
      var xn = n('b5s6'),
        En = n('rcen'),
        Sn = n('zmS9'),
        In = 'addButton',
        Rn = 'addSubtitlesLabel',
        kn = 'altTextLabel',
        An = 'tagPeopleLabel',
        Dn = 'attachments',
        On = 'createPollButton',
        Pn = 'geoButton',
        Mn = 'gifSearchButton',
        Fn = 'scheduleOption',
        Bn = 'taggedUsersLabel',
        Ln = 'tweetTextarea_',
        Nn = 'toolBar',
        Vn = 'scheduledTweetIndicator',
        jn = n('xM7j'),
        Hn = n('6OUF'),
        Un = n('tZIO'),
        zn = n('5mJL'),
        Wn = n('DNho'),
        Kn = n('jhWN'),
        qn = n('rFBM'),
        Gn = n('zfvc'),
        Qn = n('Ujvi'),
        Xn = n('yTN1'),
        Yn = n('gpVt'),
        Jn = n('hOZg'),
        Zn = n('ll3R'),
        $n = n('J0mu'),
        ea = n('EfHu'),
        ta = n('KrGU'),
        na = n('boUI'),
        aa = n('6ZHn'),
        ra = n('/WPq'),
        oa = n('wpLu'),
        ia = n('pHub'),
        sa = n('8A5z'),
        la = n('pKoL'),
        ca = n('ZvMt'),
        ua = n('9Xij'),
        da = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
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
                      s,
                      l = B.a.theme.aspectRatios.minTimelineImage,
                      c = B.a.theme.aspectRatios.maxTimelineImage
                    o = ca.a.getImageAspectRatio(l, c, {
                      width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return w.a.createElement(
                    ua.a,
                    { ratio: t ? o : r / a },
                    w.a.createElement(W.a, { style: ma.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    ua.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: ma.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, ma.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    ua.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: ma.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, ma.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    ua.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: ma.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], ma.gutterRight),
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
                    { style: [ma.column, t] },
                    this._renderMediaAtIndex(e[0], ma.gutterBottom),
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
                    s = i.editable,
                    l = i.isActive,
                    c = i.media,
                    u = i.onClickMedia,
                    d = i.onEditMedia,
                    m = i.onEditSensitiveWarning,
                    p = i.onRemoveMedia,
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
                    _ = d && s && l,
                    b = _ && v && !!m
                  return w.a.createElement(la.a, {
                    accessibilityLabel: g || y,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: f.id,
                    mediaItem: f,
                    onClick: u ? u(f.id) : void 0,
                    onEdit: d ? d(f.id) : void 0,
                    onEditSensitiveWarning: m && b ? m(f.id) : void 0,
                    onRemove: p(f.id),
                    ref: h,
                    style: [ma.mediaContainer, t],
                    withAltTextLabel: !!g,
                    withCloseButton: s && l,
                    withEditButton: _,
                    withEditSensitiveWarningButton: b,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(da, 'contextType', I.a)
      var ma = B.a.create(function (e) {
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
        pa = n('S1qy'),
        ha = n.n(pa),
        fa = n('cjAp'),
        ga = n.n(fa),
        ya = N.a.f0afcc0e,
        va = N.a.ha5e2e79,
        _a = N.a.a3de3b68,
        ba = N.a.cc2b28fc,
        Ca = N.a.g45af04e,
        wa = N.a.ee9c4013,
        Ta = N.a.af40a8ef,
        xa = N.a.e68b09b4,
        Ea = N.a.ec10ee02,
        Sa = N.a.h735a98d,
        Ia = N.a.c4ccfbe2,
        Ra = N.a.j499fbcb,
        ka = N.a.b7d8e3f0,
        Aa = N.a.d1175c78,
        Da = N.a.bf4e9d79,
        Oa = N.a.e0342f98,
        Pa = N.a.e349147b,
        Ma = N.a.e3a24e4b,
        Fa = N.a.de4669e2,
        Ba = N.a.d2c7a41c,
        La = N.a.f7364fa1,
        Na = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Va = N.a.ia24dc8c,
        ja = w.a.createElement(Jn.a, null),
        Ha = w.a.createElement(rn.a, null),
        Ua = w.a.createElement(Zn.a, null),
        za = w.a.createElement($n.a, null),
        Wa = { viewType: 'schedule_tweet' },
        Ka = { viewType: 'add_poll' },
        qa = { viewType: 'add_composer' },
        Ga = { viewType: 'tag_location' },
        Qa = (function (e) {
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
                Object(Ft.a)(function () {
                  return o.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(o), '_shouldRenderControls', function (e, t) {
                var n = o.state.isFocused,
                  a = o.props,
                  r = a.audienceControlsValue,
                  i = a.isActive,
                  s = a.isInline,
                  l = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== Ye.a.community_members &&
                      r.conversationControlsValue !== Ye.a.super_followers_exclusive &&
                      r.conversationControlsValue !== Ye.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (i && !l && (!s || n || e))
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
                  s = o._shouldRenderControls(e, 'conversation'),
                  l =
                    i === Ye.a.community_members ||
                    i === Ye.a.super_followers_exclusive ||
                    i === Ye.a.trusted_friends_tweet ||
                    o._isScheduled()
                return s
                  ? w.a.createElement(bt, { disabled: l, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              b()(h()(o), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  W.a,
                  { style: Ot.taggedLocationContainer },
                  w.a.createElement(
                    q.a,
                    {
                      icon: w.a.createElement(ea.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: Ot.taggedLocationButton,
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
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  u = n.cardUrl,
                  d = n.media,
                  m = n.pollActive,
                  p = n.quotedStatus,
                  h = n.text,
                  f = Object(Yn.b)(h) || (u && !Object(It.a)(u) && [u]),
                  g = !!d.length || m || !!p,
                  y = o.props.typeaheadWrapper,
                  v = !o._isEmpty()
                return w.a.createElement(
                  W.a,
                  { style: Ot.textInputArea },
                  w.a.createElement(
                    W.a,
                    { style: r ? Ot.inputStyle : Ot.collapsedInputStyle },
                    o._renderAudienceControls(v),
                    w.a.createElement(
                      y,
                      {
                        contextText: h,
                        isInline: i,
                        isInlineReply: s,
                        onTextUpdated: c ? o._handleRichTextChange : o._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      o._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(Yn.a, { index: a, isCardPreviewTombstoned: Object(It.a)(u), urls: f })
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
                  s = t.index,
                  l = t.isActive,
                  c = t.isExpanded,
                  u = t.isInline,
                  d = t.isInlineReply,
                  m = t.isLast,
                  p = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  y = o.state.isFocused,
                  v = a.text,
                  _ = 0 === s && m,
                  b = !!g,
                  C = g || {},
                  T = C.dismissComposerCommandName,
                  x = C.element,
                  E = C.sendTweetCommandName,
                  S = d && !g && !c,
                  I = g
                    ? {
                        onChange: o._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: T,
                          editorState: o.state.editorState,
                          element: x,
                          sendTweetCommandName: E,
                        },
                      }
                    : { onChange: o._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  Hn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: _a,
                      autoFocus: n || (l && !u),
                      closeButton:
                        l && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !_
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [Ot.textInputStyle, S && Ot.textInputMobileCollapsed],
                      keyCommandHandlers: p,
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
                      testID: ''.concat(Ln).concat(s),
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
                Object(Ft.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(o),
                '_getHandlePlainTextChange',
                Object(Ft.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(Tn, null) : null
              }),
              b()(h()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = o.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === a && (i || s || l)
                  ? w.a.createElement(Ae, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: r && s,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? w.a.createElement(Xe, null) : null
              }),
              b()(h()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(Ue, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(o), '_calcNumberOfLines', function () {
                var e = o.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  i = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!i.length || !!s || !!l
                return (r && (a || c)) || !n ? 1 : 4
              }),
              b()(h()(o), '_renderScheduledTweetLegend', function () {
                var e = o.props.scheduledFor
                return w.a.createElement(Sn.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Vn,
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
                return w.a.createElement(wt.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              b()(
                h()(o),
                '_getEmojiPickerButtonStyles',
                Object(Ft.a)(function () {
                  return [Ot.iconEmojiPicker, Ot.toolBarButton]
                }),
              ),
              b()(h()(o), '_isSchedulingDisabled', function () {
                var e = o.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  i = n.pollActive,
                  s = n.quotedStatus,
                  l = n.text,
                  c = e.index,
                  u = e.isLast,
                  d = 0 === c && u,
                  m = t.conversationControlsValue !== Ye.a.all
                return Boolean(i || !d || (s && '' === l && !a.length) || m || r.length > 0)
              }),
              b()(h()(o), '_renderSchedulingButton', function () {
                return w.a.createElement(q.a, {
                  accessibilityLabel: va,
                  behavioralEventContext: Wa,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: Sa },
                  icon: za,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: Ot.toolBarButton,
                  testID: Fn,
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
                  accessibilityLabel: wa,
                  hoverLabel: { label: xa },
                  icon: ja,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(o), '_renderTweetAttachment', function () {
                var e = o.props,
                  t = e.data,
                  n = e.editable,
                  a = e.index,
                  r = e.isActive,
                  i = e.updateSingleComposer,
                  s = t.media,
                  l = t.pollActive,
                  c = t.pollChoices,
                  u = t.pollDuration,
                  d = t.quotedStatus
                if (0 === s.length && !l && !d) return null
                var m = o.hasAttachedVideo && (o._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  W.a,
                  { onClick: o._handleFocus, style: [Ot.attachmentContainer, Ot.tweetAttachmentArea], testID: Dn },
                  s.length > 0
                    ? w.a.createElement(da, {
                        editable: n,
                        isActive: r,
                        media: s,
                        onClickMedia: o.hasAttachedImage ? o._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: o.hasAttachedImage
                          ? o._handleClickMediaDetail('crop')
                          : m
                          ? o._handleClickMediaDetail(m)
                          : void 0,
                        onEditSensitiveWarning:
                          o.hasAttachedImage || o.hasAttachedVideo
                            ? o._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: o._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: o._handleSetMediaPreviewRef,
                        style: Ot.mediaPreview,
                      })
                    : null,
                  r ? o._renderMediaActions() : null,
                  l
                    ? w.a.createElement(_n, {
                        composerIndex: a,
                        editable: n,
                        initialChoices: c,
                        initialDuration: u,
                        isActive: r,
                        isPollValid: t.pollValid,
                        updateComposer: i,
                      })
                    : null,
                  d ? o._renderQuoteTweet(d) : null,
                )
              }),
              b()(h()(o), '_renderQuoteTweet', function (e) {
                var t = o.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      jn.a,
                      null,
                      w.a.createElement(En.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(xn.a, {
                      isCondensed: t.length > 0,
                      style: Ot.quoteTweet,
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
                  s = t.isInlineReply,
                  l = t.isReply,
                  c = t.isSelfThreadReply,
                  u = t.richTextInputContext,
                  d = t.setActiveParentKey,
                  m = !!u,
                  p = !s && !r,
                  h = !s && !i
                return w.a.createElement(
                  W.a,
                  { style: Ot.toolBar, testID: Nn },
                  w.a.createElement(
                    W.a,
                    { style: Ot.toolBarIconsContainer },
                    w.a.createElement(Mt, {
                      media: a,
                      mediaAttachDisabled: o.mediaAttachDisabled,
                      onFilesAdded: o._handleFilesAdded,
                      setActiveParentKey: d,
                    }),
                    o._renderGifButton(),
                    p ? o._renderPollButton() : null,
                    m ? o._renderEmojiPicker() : null,
                    h ? o._renderSchedulingButton() : null,
                    o._renderGeoButton(),
                  ),
                  w.a.createElement(
                    W.a,
                    { style: Ot.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (l && !c) || !e
                      ? null
                      : w.a.createElement(
                          w.a.Fragment,
                          null,
                          w.a.createElement(W.a, { style: Ot.separator }),
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
                    var s = i ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, o.state.hasOverflowStyle),
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
                var t = Un.a.replaceCarriageReturns(e.target.value)
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
                a ? n({ text: ba }) : r(e)
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
                return Va(Math.ceil(e / o._userLanguageWeight))
              }),
              b()(h()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  i = e.isReply,
                  s = e.isSelfThreadReply
                return a ? Fa : n ? La : i && !s ? Ba : s || r > 0 ? Ma : Pa
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
                Object(Ft.a)(function (e) {
                  var t = ga.a[o.props.twitterTextConfigurationVersion]
                  return ha()(e, t)
                }),
              ),
              b()(h()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(Rt.c)(e)
              }),
              b()(h()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(kt.h)(e)
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
              b()(h()(o), '_handleSetMediaPreviewRef', function (e) {
                o._mediaPreviewRef = e
              }),
              b()(h()(o), '_setTextInputRef', function (e) {
                o._textInputRef = e
              })
            var i = e.data.text,
              s = e.richTextInputContext,
              l = e.userLanguage,
              c = (s || {}).initEditorState
            return (
              (o._conversationControlsCreationEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (o._deleteNonemptyTweetstormComposerEnabled = o.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (o._userLanguageWeight = l && Na.indexOf(l) > -1 ? 2 : 1),
              o._autotagLocationIfNeeded(),
              (o.state = { editorState: c ? c(i) : null, hasOverflowStyle: !1, isFocused: !1 }),
              o
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof St.a) && e.mediaFile.isVideo
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
                    s = t.loggedInUser,
                    l = t.windowWidth,
                    c = t.withAvatar,
                    u = !this._isEmpty(),
                    d = this._shouldRenderControls(u),
                    m = l < B.a.theme.breakpoints.small
                  return w.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [Ot.root, !a && Ot.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      zn.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(Wn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(Kn.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: Ot.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          i
                            ? null
                            : w.a.createElement(W.a, {
                                style: [Ot.conversationLine, !c && Ot.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? Ot.avatarContainerExpanded : Ot.avatarContainer,
                        cellStyle: Ot.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: Ot.inputArea },
                        w.a.createElement(
                          qn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: Ot.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(W.a, { style: Ot.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        W.a,
                        { style: [(d || n) && Ot.controlsContainer, m ? Ot.mobileControlsLayout : Ot.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(m),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(Gn.b, { show: a && r }, this._renderToolbar(u)),
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
                    s = a || n.length || !o
                  return w.a.createElement(xt.a, {
                    enabled: !s,
                    gifSearchKeySource: Et.a.Composition,
                    history: r,
                    onPress: i,
                    testID: Mn,
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
                    s = !(!(a || n.length || r || i) && o)
                  return w.a.createElement(q.a, {
                    accessibilityLabel: ya,
                    behavioralEventContext: Ka,
                    disabled: s,
                    hoverLabel: { label: Ea },
                    icon: Ua,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: Ot.toolBarButton,
                    testID: On,
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
                    o = t ? w.a.createElement(ea.a, null) : w.a.createElement(ta.a, null)
                  return w.a.createElement(q.a, {
                    accessibilityLabel: Ia,
                    behavioralEventContext: Ga,
                    disabled: r,
                    hoverLabel: { label: Ia },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: Ot.toolBarButton,
                    testID: Pn,
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
                    { style: Ot.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          W.a,
                          { style: Ot.addImageTextPadding },
                          w.a.createElement(Tt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: Aa,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [Ot.addImageTextContainer, Ot.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: Ra({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: Ot.addImageTextContainer,
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
                    { color: 'gray700', size: 'subtext2', testID: An },
                    w.a.createElement(na.a, { style: Ot.addImageActionIcon }),
                    Aa,
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
                    { color: 'gray700', size: 'subtext2', testID: Bn },
                    w.a.createElement(aa.a, { style: Ot.addImageActionIcon }),
                    w.a.createElement(Qn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                          { color: 'gray700', size: 'subtext2', testID: kn },
                          w.a.createElement(oa.a, { style: Ot.addImageActionIcon }),
                          ka({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          M.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: kn },
                          w.a.createElement(oa.a, { style: Ot.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        M.b,
                        { color: 'gray700', size: 'subtext2', testID: kn },
                        w.a.createElement(ra.a, { style: Ot.addImageActionIcon }),
                        Ra({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? ia.a : sa.a
                  return w.a.createElement(
                    M.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: Ot.addImageTextContainer,
                      testID: Rn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Oa : void 0,
                      style: Ot.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Da,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = ga.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(Xn.a, {
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
                    s = this._isScheduled(),
                    l = t || i || s || !r || n
                  return w.a.createElement(q.a, {
                    accessibilityLabel: Ca,
                    behavioralEventContext: qa,
                    disabled: l,
                    hoverLabel: { label: Ta },
                    icon: Ha,
                    link: !a || i || l ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: In,
                    type: 'brandOutlined',
                  })
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
                    s = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof St.a) && e.mediaFile.isVideo
                    })
                  return 4 === o || i || s || a || this.hasExternalMedia || !r
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
                      return e.mediaFile && !(e.mediaFile instanceof St.a) && e.mediaFile.isVideo
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
      b()(Qa, 'contextType', I.a),
        b()(Qa, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Xa = Object(st.a)(Qa),
        Ya = w.a.createElement(M.b, { weight: 'bold' }),
        Ja = w.a.createElement(M.b, { color: 'link' }),
        Za = function (e) {
          return '@'.concat(e)
        },
        $a = n('SrIh'),
        er = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        tr = function (e) {
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
                  w.a.cloneElement(Ja, null, N.a.b50e199a({ userName: Za(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(Ja, null, N.a.f2e4dd37({ replyUserName: Za(t), otherUserName: Za(n) })),
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
                    Ja,
                    null,
                    N.a.eccfddc3({ userOneName: Za(t), userTwoName: Za(a), userThreeName: Za(n) }),
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
                  w.a.cloneElement(Ja, null, N.a.h758cd22({ userOneName: Za(n), userTwoName: Za(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(Ja, null, N.a.e9f8a0eb({ userName: Za(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(Ja, null, N.a.df7e9fbc({ replyUserName: Za(n), otherUserName: Za(a) })),
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
                    Ja,
                    null,
                    N.a.b45fa505({ userOneName: Za(n), userTwoName: Za(r), userThreeName: Za(a) }),
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
                  w.a.cloneElement(Ja, null, N.a.a4383815({ userOneName: Za(a), userTwoName: Za(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(Ja, null, N.a.ff792e35({ userName: Za(t) })),
                  w.a.cloneElement(Ya, null, N.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(Ja, null, N.a.g7d5e985({ replyUserName: Za(t), otherUserName: Za(n) })),
                  w.a.cloneElement(Ya, null, N.a.af82725c),
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
                    Ja,
                    null,
                    N.a.fe5a61e9({ userOneName: Za(t), userTwoName: Za(a), userThreeName: Za(n) }),
                  ),
                  w.a.cloneElement(Ya, null, N.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(Ja, null, N.a.bc9dd514({ userOneName: Za(n), userTwoName: Za(a), othersCount: t })),
                  w.a.cloneElement(Ya, null, N.a.de5071ba),
                )
              },
            },
            i = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            l = s.exclusivity_info,
            c = s.user,
            u = i.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            d = Oe()(u, 2),
            m = d[0],
            p = d[1],
            h = [c, m, p].map(er),
            f = Oe()(h, 3),
            g = f[0],
            y = f[1],
            v = f[2],
            _ = i.length - 2
          switch (i.length) {
            case 0:
              return Object($a.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: g })
                : l
                ? o.exclusiveReplyToOne({ userName: g })
                : o.replyToOne({ userName: g })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: y })
                : l
                ? o.exclusiveReplyToTwo({ userOneName: g, userTwoName: y })
                : o.replyToTwo({ userOneName: g, userTwoName: y })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: y, userThreeName: v })
                : l
                ? o.exclusiveReplyToThree({ userOneName: g, userTwoName: y, userThreeName: v })
                : o.replyToThree({ userOneName: g, userTwoName: y, userThreeName: v })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: y, othersCount: _ })
                : l
                ? o.exclusiveReplyToMany({ userOneName: g, userTwoName: y, othersCount: _ })
                : o.replyToMany({ userOneName: g, userTwoName: y, othersCount: _ })
          }
        },
        nr = w.a.memo(tr),
        ar = n('fs1G'),
        rr = n('BLtI'),
        or = n('kY28')
      function ir(e) {
        null == e || e.preventDefault()
      }
      var sr = B.a.create(function (e) {
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
        lr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = e.onPress,
            i = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            W.a,
            null,
            l
              ? w.a.createElement(rr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: ar.a,
                  onAvatarClick: ir,
                  onEntityClick: ir,
                  onMediaClick: ir,
                  onReplyContextClick: ir,
                  replyContext: or.a.ReplyContextTypes.None,
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
              { style: sr.replyUsersContainer },
              w.a.createElement(
                zn.a,
                {
                  avatarCell: l ? w.a.createElement(W.a, { style: sr.conversationLine }) : null,
                  avatarCellStyle: sr.conversationLineContainer,
                  cellStyle: sr.repliesTextContainer,
                  style: sr.grid,
                },
                i
                  ? w.a.createElement(
                      M.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: l && sr.repliesMessage },
                      w.a.createElement(nr, {
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
        cr = n('Tb0w'),
        ur = n('1YZw'),
        dr = n('pidX'),
        mr = n('5oBF'),
        pr = n('JYYi'),
        hr = n('/Rsk'),
        fr = n('qlwE'),
        gr = n('XOJV'),
        yr = n('G6rE'),
        vr = n('AspN'),
        _r = n('oEGd'),
        br = n('P1r1'),
        Cr = ['mediaIds'],
        wr = function (e) {
          return e.parentTweetId || (e.isInline ? pr.a.homeTimeline : pr.a.modal)
        },
        Tr = function (e, t) {
          var n = wr(t)
          return se.l(e, n)
        },
        xr = function (e, t) {
          var n = wr(t)
          return se.m(e, n)
        },
        Er = function (e, t) {
          var n = wr(t)
          return se.k(e, n)
        },
        Sr = function (e, t) {
          var n = Mr(e, t),
            a = Er(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            o = r ? k.c.select(e, r) : void 0
          return o ? o.name : void 0
        },
        Ir = function (e, t) {
          var n = wr(t)
          return se.n(e, n)
        },
        Rr = function (e, t) {
          var n = wr(t)
          return se.j(e, n)
        },
        kr = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Ar = Object(ue.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          yr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Dr = function (e, t) {
          return t.parentTweetId || Or(e, t) || Pr(e, t)
        },
        Or = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Pr = kr(function (e) {
          return e.inReplyToStatusId
        }),
        Mr = function (e, t) {
          var n = Dr(e, t)
          return n ? gr.a.selectHydrated(e, n) : void 0
        },
        Fr = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Br = kr(function (e) {
          return e.hasArticleNudge
        }),
        Lr = kr(function (e) {
          return e.convoCardData
        }),
        Nr = kr(function (e) {
          return e.externalMedia
        }),
        Vr = kr(function (e) {
          return e.externalMediaFiles
        }),
        jr = kr(function (e) {
          return e.previewTweetId
        }),
        Hr = kr(function (e) {
          return e.defaultText
        }),
        Ur = function (e, t) {
          var n = Hr(e, t),
            a = Object(dr.a)(t.location)
          return (Fr(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        zr = kr(function (e) {
          return e.quotedStatusId
        }),
        Wr = kr(function (e) {
          return e.quotedStatus
        }),
        Kr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Wr(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = zr(e, t)
              return n ? gr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        qr = kr(function (e) {
          return e.isSelfThreadReply
        }),
        Gr = kr(function (e) {
          return e.positionCursorAtBeginning
        }),
        Qr = kr(function (e) {
          return e.promotedContent
        }),
        Xr = function () {
          return Object(ue.createSelector)(Tr, Ur, Kr, vr.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return l()(
                l()({}, ((o = e).mediaIds, Ze()(o, Cr))),
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
        Yr = {
          addComposer: se.a,
          addToast: ur.b,
          createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: se.b,
          deletePreviewTweet: mr.c,
          fetchAutotaggedLocationIfNeeded: hr.a,
          fetchTweetIfNeeded: gr.a.fetchOneIfNeeded,
          removeComposer: se.f,
          resetDraft: se.g,
          retweet: gr.a.retweet,
          schedule: se.i,
          draftTweet: se.e,
          send: se.r,
          updateActiveComposerIndex: se.t,
          updateAudienceControlsValue: se.u,
          updateConvoCardState: cr.b,
          preUploadMedia: vr.e,
          addMedia: vr.b,
          processMultipleMedia: vr.g,
          removeMediaUpload: vr.i,
          updateSingleComposer: se.x,
          setActiveParentKey: se.s,
          copyDataFromInlineComposerToModalComposer: se.c,
          copyDataFromInlineReplyComposerToModalComposer: se.d,
        },
        Jr = Object(_r.e)(function () {
          return Object(ue.createStructuredSelector)({
            activeComposerIndex: Rr,
            activeUser: Ar,
            altTextNudgeType: br.h,
            audienceControlsValue: Er,
            composerData: Xr(),
            dataSaverMode: br.k,
            excludedRecipients: xr,
            externalMedia: Nr,
            externalMediaFiles: Vr,
            geoEnabled: br.p,
            hasArticleNudge: Br,
            inReplyToStatus: Mr,
            inReplyToStatusId: Dr,
            isIntentRoute: Fr,
            isSelfThreadReply: qr,
            isSending: Ir,
            isSuperFollowsCreator: me.l,
            positionCursorAtBeginning: Gr,
            loggedInUser: yr.e.selectLoggedInUser,
            prepopulatedText: Ur,
            previewTweetId: jr,
            promotedContent: Qr,
            scheduledFor: se.o,
            selectedCommunityName: Sr,
            sendingProgress: se.p,
            convoCardData: Lr,
            undoTweetSettings: fr.q,
            userLanguage: me.o,
            quotedStatusId: zr,
          })
        }, Yr),
        Zr = n('45mF'),
        $r = n('c0ZR'),
        eo = n('W5XZ'),
        to = n('Drq4'),
        no = n('I8M8'),
        ao = n('7myi'),
        ro = n('7nmT'),
        oo = n.n(ro),
        io = n('vbWy'),
        so = n('Rp9C'),
        lo = n('Q5Mu'),
        co = n('N5qz'),
        uo = 'tweetButton',
        mo = 'tweetButtonInline',
        po = Object(A.a)()
          .propsFromState(function () {
            return { loggedInUser: yr.e.selectLoggedInUser }
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
        ho = n('cHvH'),
        fo = n('sgih'),
        go = n('xKuM'),
        yo = n('5Vk4'),
        vo = B.a.create(function (e) {
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
        _o = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return w.a.createElement(ho.a, null, function (e) {
            var s = e.windowWidth > B.a.theme.breakpoints.small
            return w.a.createElement(
              fo.a,
              { onMaskClick: r, style: vo.sheetStyle, type: o, withMask: !0 },
              i &&
                w.a.createElement(go.a, {
                  leftControl: w.a.createElement(yo.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(W.a, { style: [vo.mainCard, s ? vo.largeScreenCard : vo.smallScreenCard] }, n),
            )
          })
        },
        bo = N.a.cb7c0987,
        Co = N.a.de3bcf27,
        wo = N.a.e710ce75,
        To = N.a.h11e5910,
        xo = N.a.b7ec04f3,
        Eo = N.a.i62a03aa,
        So = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Io = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            _o,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(M.b, { size: 'title4', style: So.itemPadding, weight: 'heavy' }, bo),
            w.a.createElement(M.b, { color: 'gray700', style: So.itemPadding }, Co),
            w.a.createElement(M.b, { color: 'gray700', style: So.itemPadding }, wo),
            w.a.createElement(
              W.a,
              { style: So.buttonContainer },
              w.a.createElement(M.b, { size: 'title4', style: So.itemPadding, weight: 'heavy' }, To),
              w.a.createElement(q.a, { onPress: a, style: So.itemPadding, type: 'brandOutlined' }, xo),
              w.a.createElement(q.a, { onPress: n, style: So.itemPadding, type: 'brandOutlined' }, Eo),
            ),
          )
        },
        Ro = n('cm6r'),
        ko = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Ao = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(Ro.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(q.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: ko.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(M.b, { color: 'gray700' }, n),
            )
          })
        },
        Do = n('sjK1'),
        Oo = n('FDY4'),
        Po = n('tevE'),
        Mo = n('jV+4'),
        Fo = n('UgB4'),
        Bo = n('TW8A'),
        Lo = n('hiGS'),
        No = n('WtWS'),
        Vo = n('Lsrn'),
        jo = n('k/Ka'),
        Ho = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(jo.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Vo.a.root, e.style],
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
      Ho.metadata = { width: 24, height: 24 }
      var Uo = Ho,
        zo = [
          { headlineText: N.a.f3a7a80c, subTextLine1: N.a.ge52d1de, subTextLine2: null },
          { headlineText: N.a.j311bf49, subTextLine1: N.a.ae42ebff, subTextLine2: N.a.aa350ab1 },
          { headlineText: N.a.j18b2956, subTextLine1: N.a.f6bee896, subTextLine2: N.a.dddd0995 },
          { headlineText: N.a.d02a94fa, subTextLine1: N.a.dddd0995, subTextLine2: null },
          { headlineText: N.a.i018b746, subTextLine1: N.a.b8d85df9, subTextLine2: N.a.d5ca11f0 },
        ],
        Wo = N.a.h11e5910,
        Ko = N.a.abd845fd,
        qo = N.a.bea869b3,
        Go = N.a.d96cf7cd,
        Qo = N.a.d3145da8,
        Xo = B.a.create(function (e) {
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
        Yo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            o = e.onEditTweet,
            i = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            m = w.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            p = zo[(m = m >= 0 && m <= 4 ? m : 0)]
          return w.a.createElement(ho.a, null, function (e) {
            var m,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              _o,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              w.a.createElement(Uo, { style: [Xo.profanityIcon, Xo.itemPadding] }),
              w.a.createElement(Po.a, { size: 'title4', style: Xo.itemPadding, weight: 'heavy' }, p.headlineText),
              w.a.createElement(M.b, { color: 'gray700', style: Xo.itemPadding }, p.subTextLine1),
              w.a.createElement(M.b, { color: 'gray700', style: Xo.itemPadding }, p.subTextLine2),
              w.a.createElement(
                W.a,
                { style: [Xo.tweetContainer, Xo.itemPadding] },
                w.a.createElement(
                  W.a,
                  { style: Xo.tweetContent },
                  w.a.createElement(Mo.a, { name: c, profileImageUrl: u, screenName: d, style: Xo.userName }),
                  w.a.createElement(
                    W.a,
                    { style: Xo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Do.c) r = e.mediaFile.thumbnail
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
                        { style: Xo.photos },
                        w.a.createElement(Oo.a, {
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
                    w.a.createElement(M.b, { style: Xo.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    W.a,
                    { style: Xo.thanksContainer },
                    w.a.createElement(No.a, { style: Xo.thanksCheckMark }),
                    w.a.createElement(M.b, { align: 'center', style: Xo.itemPadding }, Qo),
                  )
                : w.a.createElement(M.b, { align: 'center', onPress: s, style: Xo.itemPadding, withUnderline: !0 }, Wo),
              g > B.a.theme.breakpoints.small
                ? w.a.createElement(
                    W.a,
                    { style: Xo.buttonContainer },
                    w.a.createElement(q.a, { onPress: o, style: Xo.itemPadding, type: 'brandFilled' }, Ko),
                    w.a.createElement(q.a, { onPress: i, style: Xo.itemPadding, type: 'brandOutlined' }, qo),
                    w.a.createElement(q.a, { onPress: a, style: Xo.itemPadding, type: 'destructiveText' }, Go),
                  )
                : ((m = w.a.createElement(Fo.a, { style: { color: B.a.theme.colors.text } })),
                  (h = w.a.createElement(Bo.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = w.a.createElement(Lo.a, { style: { color: B.a.theme.colors.red500 } })),
                  w.a.createElement(
                    W.a,
                    { style: Xo.mobileButtonContainer },
                    w.a.createElement(Ao, { icon: m, label: qo, onPress: i }),
                    w.a.createElement(Ao, { icon: h, label: Ko, onPress: o }),
                    w.a.createElement(Ao, { icon: f, label: Go, onPress: a }),
                  )),
            )
          })
        },
        Jo = po(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            o = e.onDismiss,
            i = e.onEditTweet,
            s = e.onSendTweet,
            l = e.tweetText,
            c = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            m = w.a.useState(!1),
            p = Oe()(m, 2),
            h = p[0],
            f = p[1],
            g = w.a.useState(!1),
            y = Oe()(g, 2),
            v = y[0],
            _ = y[1],
            b = function (e) {
              var n = e.action,
                r = e.element,
                o = e.page,
                i = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: i }, element: r, page: o, section: 'dialog' })
            }
          return h
            ? w.a.createElement(Io, {
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
            : w.a.createElement(Yo, {
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
                  b({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  b({ action: 'more_info', element: 'action', page: 'nudge' }),
                    b({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: l,
                userName: c,
                userProfileImageUrl: u,
                userScreenName: d,
              })
        }),
        Zo = n('aITJ'),
        $o = n('eb3s'),
        ei = n('JYMr'),
        ti = n('sCk0'),
        ni = n('3A2y'),
        ai = n('zrOZ'),
        ri = n('s1N3'),
        oi = n('4FGy'),
        ii = n('mN6z'),
        si = n('eyty'),
        li = n('rziq'),
        ci = n('lsKC'),
        ui = n('jTgF'),
        di = N.a.d28215f0,
        mi = N.a.ec909a54,
        pi = N.a.jd53409d,
        hi = {
          singular: N.a.edae65de,
          plural: N.a.a859846a,
          oneOfMultiple: N.a.e90118f5,
          someOfMultiple: N.a.c211dcb1,
        },
        fi = { singular: N.a.d7c26bfb, plural: N.a.a75e3ccc },
        gi = N.a.dcb7e3a0,
        yi = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = fi.singular), (t = r ? hi.singular : hi.oneOfMultiple))
              : ((n = fi.plural), (t = r ? hi.plural : hi.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(gi)
          )
        },
        vi = N.a.c1bf53b0,
        _i = N.a.bb8170da,
        bi = N.a.dad5a4b8,
        Ci = N.a.e65aed64,
        wi = N.a.bc2ceaf2,
        Ti = N.a.d8222374,
        xi = N.a.j890123a,
        Ei = N.a.bb01231c,
        Si = N.a.d4ab68e2,
        Ii = N.a.d8af8a4c,
        Ri = N.a.d09d4c05,
        ki = N.a.i2209530,
        Ai = N.a.bf9b89e4,
        Di = N.a.f277e949,
        Oi = N.a.b551cd22,
        Pi = N.a.f026a7fa,
        Mi = N.a.a5d4fda0,
        Fi = N.a.ib067d6a,
        Bi = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Li = { element: 'alt_text_prompt' },
        Ni = { component: 'article_nudge' },
        Vi = { viewType: 'send_tweet' },
        ji = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Hi = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r, o, s
            u()(this, n),
              (s = t.call(this, e, a)),
              b()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? pr.a.homeTimeline : pr.a.modal)
              }),
              b()(h()(s), '_updateSingleComposer', function (e, t) {
                return (0, s.props.updateSingleComposer)({ updates: e, index: t, parentKey: s._getParentKey() })
              }),
              b()(h()(s), '_resetDraft', function () {
                ;(0, s.props.resetDraft)({ parentKey: s._getParentKey(), isPreview: s.isPreview })
              }),
              b()(h()(s), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              b()(h()(s), '_syncTexts', function () {
                var e = s.props.composerData,
                  t = s.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && s._updateSingleComposer({ text: a }, n)
                })
              }),
              b()(h()(s), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              b()(h()(s), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_handleDeletePreviewTweet', function () {
                var e = s.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              b()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = oo.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    o = r.bottom,
                    i = r.top,
                    l = Math.max(i, window.scrollY)
                  if (l < window.pageYOffset || o > window.innerHeight) {
                    var c = n ? l - n() - 14 : l - 14,
                      u = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Bi ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
                    })
                  }
                }
              }),
              b()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.quotedStatus,
                  i = e.quotedStatusId
                !a && r && n(r).catch(t(eo.a)), !o && i && n(i).catch(t(eo.a))
              }),
              b()(h()(s), '_blockHistory', function (e, t) {
                var n = s.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  o = !r && /unsent/.test(e.pathname),
                  i = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return s.shouldShowDiscardConfirmation && 'POP' === t && i
                  ? (s.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : s._canSaveDraft && o && 'PUSH' === t
                  ? s.shouldShowDiscardConfirmation
                    ? (s.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: o }), !1)
                    : (s._resetDraft(), !0)
                  : s.shouldShowBackgroundSendConfirmation && 'POP' === t && i
                  ? (s._cancelAllMediaUploads(), !1)
                  : !('POP' === t && i && s._areComposersEmptyOrUnchanged && !Object(Rt.a)(a)) || (s._resetDraft(), !0)
              }),
              b()(h()(s), '_getKeyCommandHandlers', function () {
                return s.state.typeaheadActive ? s._keyCommandHandlersForActiveTypeahead : s._keyCommandHandlers
              }),
              b()(h()(s), 'handleTweetOrRetweet', function () {
                if (
                  (s._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  s._areComposersValid())
                )
                  return s.shouldShowAltTextPrompt
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, Li), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              b()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  o = e.isSelfThreadReply,
                  i = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return w.a.createElement(lr, {
                    communityName: i,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !o,
                    showParentTweet: !r,
                  })
              }),
              b()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement($o.a, {
                  Icon: to.a,
                  cancelButtonLabel: _i,
                  confirmButtonLabel: vi({ numOfDescriptions: t }),
                  headline: pi,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: yi({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(Jo, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              b()(h()(s), '_handleReplyNudgeDeleteTweet', function () {
                s._hideToxicReplyNudge(), s._handleConfirmDiscardTweet()
              }),
              b()(h()(s), '_handleReplyNudgeDismiss', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeEditTweet', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeSendTweet', function () {
                s._hideToxicReplyNudge(), s._handleSendTweet()
              }),
              b()(h()(s), '_setRootRef', function (e) {
                e && (s._root = e)
              }),
              b()(h()(s), '_handleTweet', function () {
                var e = s.props.composerData[0].scheduledFor
                s.setState({ errorMessage: void 0 }),
                  e ? Object(kt.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              b()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    r = a.analytics,
                    o = a.createLocalApiErrorHandler
                  if (Object(ui.d)(n) && n.code === no.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var i = Object(ui.b)(n)
                  if (i) return s.setState({ errorMessage: i }), Promise.resolve()
                  var c = t || Object(Zr.a)(void 0, !1)
                  o(l()({}, c))(n)
                  var u = n instanceof x.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: u ? u.toast.text : Mi } })
                }
              }),
              b()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  o = e.schedule,
                  i = s._getSingleComposerDataWithLatestText(n[0])
                o({ excludedRecipients: a, inReplyToStatus: r, scheduleData: i })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(kt.c)(i.scheduledFor)
                    if (a) {
                      var r = Object(kt.b)(a),
                        o = Object(kt.i)(a),
                        c = Oi({ scheduleDate: r, scheduleTime: o })
                      t({ text: c, action: { label: Di, link: '/compose/tweet/unsent/scheduled' } }),
                        s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    s._updateConvoCardState(), s._close()
                  })
                  .catch(s._handleTweetError('schedule_tweet_cancel'))
              }),
              b()(h()(s), '_handleDraftTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: s._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    s.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: Ai, action: { label: Di, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', lo.a))
              }),
              b()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.parentTweetId,
                  i = t(
                    s._getSingleComposerDataWithLatestText(n[0]).text,
                    o || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t,
                      n,
                      a,
                      r,
                      o,
                      i,
                      l,
                      c = s.context.featureSwitches.getValueWithoutScribeImpression(
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
                        null === (l = i.nudge) ||
                        void 0 === l
                          ? void 0
                          : l.id
                    return d && s.setState({ nudgeId: d }), !!u
                  }),
                  l = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([i, l])
              }),
              b()(h()(s), '_showToxicReplyNudge', function () {
                s._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: s.state.nudgeId }] },
                ),
                  s.setState({ showToxicReplyNudge: !0 })
              }),
              b()(h()(s), '_hideToxicReplyNudge', function () {
                return s.setState({ showToxicReplyNudge: !1 })
              }),
              b()(h()(s), '_checkToxicReplyAndSendTweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = s.state.nudgeId
                if (
                  !(
                    !s._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    s.isReply &&
                    !n &&
                    s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return s._handleSendTweet()
                s._checkToxicReply().then(function (e) {
                  if (!e) return s._handleSendTweet()
                  s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled'),
                    s.context.featureSwitches.getArrayValue('responsive_web_reply_nudge_supported_languages'),
                    s._showToxicReplyNudge()
                })
              }),
              b()(h()(s), '_handleSendTweet', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
                  o = e.composeSemanticCoreId,
                  i = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  u = e.history,
                  d = e.inReplyToStatus,
                  m = e.isSelfThreadReply,
                  p = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  y = r.conversationControlsValue,
                  v = r.exclusivityControlValue,
                  _ = void 0 === v ? void 0 : v,
                  b = s.isPreview,
                  C = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(kt.c)(C[0].scheduledFor)
                if (w) {
                  var T = Object(kt.b)(w),
                    x = Object(kt.i)(w),
                    E = Oi({ scheduleDate: T, scheduleTime: x })
                  return n({ text: E, action: { label: Di, link: '' } }), void s._close()
                }
                if (
                  (i.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === y) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === y) {
                    var I = s._getSingleComposerDataWithLatestText(C[0]).text,
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
                  isSelfThreadReply: m,
                  promotedContent: h,
                  composeSemanticCoreId: D,
                  isPreview: b,
                })
                  .then(function (e) {
                    b || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(C[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(C, e, 'thread_send_success')
                    var a = e.length > 1 ? Ci : bi
                    if (k && f) {
                      var r = f,
                        o = e.length
                      a = mi({ numOfTweets: o, communityName: r })
                    }
                    var i = b && s.isReply,
                      l = { label: Di, link: void 0, onAction: void 0 }
                    if (i || !b) {
                      var d = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(d || '')
                    } else l.onAction = Object(ci.a)(u, p)
                    n({ text: b ? wi : a, action: l }),
                      s.isInlineReply && s.setState({ focused: !1 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      r = void 0 === n ? [] : n,
                      o = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      i = null == e ? void 0 : e.url,
                      d = null == e ? void 0 : e.status,
                      m = { message: e.type, event_info: o ? ''.concat(o) : void 0, status_code: d, url: i }
                    throw (
                      (r.map(
                        function (e, t) {
                          return s._scribeTweetSent(C[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(ui.d)(e) && e.code === no.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: m }),
                      C.length > 1 && s._scribeThreadSent(C, r, 'thread_send_failure'),
                      r.length &&
                        u.replace({
                          pathname: p.pathname,
                          state: l()(
                            l()({}, Object(ni.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', lo.a))
              }),
              b()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              b()(h()(s), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  o = n.isDraftTweet,
                  i = void 0 !== o && o,
                  c = n.isScheduled,
                  u = void 0 !== c && c,
                  d = s.state.nudgeId,
                  m = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = i ? p : u ? m : 'send_',
                  f = { items: [so.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  y = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  v = e.mediaTags.length,
                  _ = Object(ai.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  b = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  i || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    r && s._scribe(l()(l()({}, Ni), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: b, action: ''.concat(h, 'reply') }, f),
                  g && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    y && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    v && s._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  s._hasVideo(e) &&
                    (s._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    v && s._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  _.size)
                ) {
                  var C = s._hasPhoto(e) ? 'photo' : 'video'
                  _.forEach(function (e) {
                    s._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (d &&
                    s.isReply &&
                    !u &&
                    (i
                      ? s._scribe(l()(l()({}, w), {}, { action: 'save' }), { items: [{ nudge_id: d }] })
                      : s._scribe(l()(l()({}, w), {}, { action: 'sent' }), { items: [{ nudge_id: d }] })),
                  d || i || !s.isReply || u || s._scribe(l()(l()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var T = t.id_str && so.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: T ? [T] : [] })
                  var x = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(y || x) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: y ? 'user_entered' : 'from_provider', items: T ? [T] : [] },
                    ),
                    v && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), y && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  r = { items: [so.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, r)
              }),
              b()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [so.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(l()(l()({}, Ni), {}, { element: 'result', action: 'retweet' }), n)
              }),
              b()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (s._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, n(io.a)))
              }),
              b()(h()(s), 'handleDismissComposer', function () {
                s.shouldShowDiscardConfirmation
                  ? s.setState({ showDiscardTweetConfirmation: !0 })
                  : s.shouldShowBackgroundSendConfirmation
                  ? s._cancelAllMediaUploads()
                  : s._close()
              }),
              b()(h()(s), '_cancelAllMediaUploads', function () {
                s.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              b()(h()(s), '_handleConfirmDiscardTweet', function () {
                var e = s.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && s._scribe(l()(l()({}, Ni), {}, { element: 'result', action: 'cancel' })),
                  s.state.nudgeId &&
                    s._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: s.state.nudgeId }] },
                    )
              }),
              b()(h()(s), '_handleCancelDiscardTweet', function () {
                s.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  s._restoreFocusToActiveComposer()
                })
              }),
              b()(h()(s), '_handleAcceptAltTextPrompt', function () {
                s.setState({ showAltTextPrompt: !1 })
                var e = s.props.history,
                  t = s._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (s._scribe(l()(l()({}, Li), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              b()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, Li), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, Li), {}, { action: 'cancel' })),
                  s.setState({ showAltTextPrompt: !1 }, function () {
                    s._restoreFocusToActiveComposer()
                  })
              }),
              b()(h()(s), '_restoreFocusToActiveComposer', function () {
                var e = s.props.activeComposerIndex
                void 0 !== e && s._composerRefs[e] && s._composerRefs[e].focus()
              }),
              b()(h()(s), '_close', function () {
                var e = s.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || s._resetDraft(),
                  s.state.navigatingToOutbox
                    ? s._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              b()(h()(s), '_handleComposerFocus', function (e) {
                s._composerRefs[e]
                  ? s.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      s._restoreFocusToActiveComposer()
                    }, 0)
              }),
              b()(h()(s), '_handleFocus', function () {
                s.state.focused ||
                  (s.isInlineReply && s._scribe({ element: 'inline_reply', action: 'reply' }),
                  s.setState({ focused: !0 }))
              }),
              b()(h()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ typeaheadActive: e })
              }),
              b()(h()(s), '_handleRemoveComposer', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  o = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(ni.a)(r.state || {}, 'quotedStatus') }),
                  o(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              b()(h()(s), '_handleViewRecipients', function () {
                var e = s.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                s._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              b()(h()(s), '_handleTextChange', function (e, t) {
                var n = s.state.textMap,
                  a = s.props,
                  r = a.activeComposerIndex,
                  o = a.isInline,
                  i = a.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, n), {}, b()({}, t, e)) }, function () {
                    i && i(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  Zo.b.isIOS())
                ) {
                  var c = o ? 0 : r
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              b()(
                h()(s),
                '_handleTextOnBlur',
                Object(Ft.a)(function (e, t) {
                  return function () {
                    var n = s.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      o = s.props.composerData,
                      i = a[e],
                      l = o.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof i && !r && l && s._updateSingleComposer({ text: i }, t)
                  }
                }),
              ),
              b()(h()(s), '_updateAudienceControlsValue', function (e) {
                var t = s.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = s.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!s._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!s._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: di } })),
                      (null == r ? void 0 : r.text) === di && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              b()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(ei.a, { progress: t ? Math.max(n, 0.02) : 0, style: Ui.progressBar })
              }),
              b()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              b()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object($r.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              b()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    o = s.props,
                    i = o.addMedia,
                    l = o.addToast,
                    c = o.composerData,
                    u = o.dataSaverMode,
                    d = o.preUploadMedia,
                    m = o.processMultipleMedia,
                    p = o.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    y = Object(si.e)(
                      null === (a = h()(s)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  g ||
                    i(t, { location: si.d.Tweet, canUploadLongVideo: y }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(ri.a)(r.concat(a)) }, e),
                          m(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: Fi }), p(a)
                    })
                }
              }),
              b()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              b()(h()(s), '_handleMediaRemove', function (e, t) {
                var n = s.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  o = a[e],
                  i = o.media,
                  l = o.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(oi.a)(e, n)
                  })(
                    i.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  u = c.length > 0 ? l : []
                s._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: u }, e),
                  r(t),
                  s.setState({ errorMessage: void 0 })
              }),
              b()(h()(s), '_setComposerRef', function (e) {
                return function (t) {
                  s._composerRefs[e] = t
                }
              }),
              b()(h()(s), '_shouldBeExpanded', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (s.state.focused) return !0
                var a = !Object(Rt.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  o = 'community_members' === t
                return (
                  (s.isRetweet && !r && !o) ||
                  n.every(function (e) {
                    return Object(Rt.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(Rt.d)(s._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              b()(h()(s), '_getAltTextMetadata', function () {
                var e = s.props.composerData,
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
              b()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
                var t = s.state.textMap
                return 'string' == typeof t[e.key] ? l()(l()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (s.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (s._composerRefs = {}),
              (s._conversationControlsCreationEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (s._throttledSyncTexts = Object(yn.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((o = {}), b()(o, li.b, s.handleTweetOrRetweet), b()(o, li.a, s.handleDismissComposer), o)),
              (s._keyCommandHandlersForActiveTypeahead = b()({}, li.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
            )
          }
          return (
            m()(n, [
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
                    s = e.location,
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
                    var d = l()({}, null)
                    c && (d.text = c), t && t.cardUrl && (d.cardUrl = t.cardUrl), this._updateSingleComposer(d)
                  }
                  ;(c || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !i &&
                    r.replace({
                      query: Object(dr.b)(s.query),
                      search: '',
                      pathname: s.pathname,
                      state: Object(ni.a)(Object(dr.b)(s.state || {}), [
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
                    s = n.externalMediaFiles,
                    l = n.onRef,
                    c = n.parentTweetId,
                    u = n.replyPressToggle,
                    d = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: Pi }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    d && !Object(ii.a)(r, e.composerData) && d && d(this._areComposersValid()),
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
                    s = a.addToast,
                    l = a.audienceControlsValue,
                    c = a.composeHeader,
                    u = a.composerData,
                    d = a.copyDataFromInlineComposerToModalComposer,
                    m = a.customizePropsForSingleComposerItem,
                    p = a.geoEnabled,
                    h = a.history,
                    f = a.inReplyToStatus,
                    g = a.isInline,
                    y = a.isModal,
                    v = a.isSelfThreadReply,
                    _ = a.isSending,
                    b = a.isSuperFollowsCreator,
                    C = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    x = a.richTextInputContext,
                    E = a.scheduledFor,
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
                    U = g ? W.a : ti.a,
                    z = g ? {} : { onAnimateComplete: y ? void 0 : this._handleAnimateComplete },
                    K = O || !j || H || this.isCommunityTweetFromProtectedUser,
                    G = (g && co.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    Q = (g && co.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !C && Ui.root },
                    g ? this._renderProgressBar() : null,
                    A &&
                      w.a.createElement(
                        W.a,
                        { style: Ui.inlineCallout },
                        w.a.createElement(We.a, {
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
                        style: [Ui.content, C && Ui.contentInlineReply, y && Ui.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      c,
                      w.a.createElement(
                        U,
                        z,
                        V.map(function (e, t) {
                          var a = Object(kt.h)(e.scheduledFor),
                            c = u.indexOf(e),
                            C = m(e, t, V),
                            k =
                              y || g
                                ? w.a.createElement(
                                    q.a,
                                    {
                                      behavioralEventContext: Vi,
                                      disabled: K,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Ui.inlineSendButton,
                                      testID: y ? uo : mo,
                                      type: 'brandFilled',
                                    },
                                    Object(ci.b)({
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
                              Xa,
                              r()(
                                {
                                  addToast: s,
                                  additionalToolbarContent: k,
                                  audienceControlsValue: l,
                                  autoFocus: n.isInlineReply && D,
                                  data: A,
                                  disableAddTweet: u.length >= 25,
                                  editable: !_ && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: p,
                                  hidePoll: G,
                                  hideScheduling: Q,
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
                                  richTextInputContext: x,
                                  scheduledFor: E,
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
                          ? w.a.createElement($o.a, {
                              cancelButtonLabel: Si,
                              confirmButtonLabel: ki,
                              headline: Ii,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Ri,
                            })
                          : w.a.createElement($o.a, {
                              confirmButtonLabel: Si,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? xi : Ti,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: Ei,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      F ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(W.a, { style: _ && Ui.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(l()(l()({}, e), {}, { data: t }))
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
                    ? ji.Quote
                    : this.isThread
                    ? ji.Thread
                    : this.isReply
                    ? ji.Reply
                    : ji.Original
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
      b()(Hi, 'defaultProps', {
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
        typeaheadWrapper: ao.a,
      }),
        b()(Hi, 'contextType', I.a),
        b()(Hi, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var Ui = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: l()({}, B.a.absoluteFillObject),
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
      t.a = Object(st.a)(Jr(Hi))
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('dWxr'),
        i = n.n(o),
        s = n('rHpw'),
        l = n('aITJ'),
        c = { clipPath: 'circle(0% at center)' },
        u = {
          strategy: function (e, t) {
            for (var n = i()(e.getText()), a = 0; a < n.length; a++)
              n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
          },
          component: function (e) {
            return r.a.createElement('span', { style: { color: s.a.theme.colors.link } }, e.children)
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
            return !(l.b.isFirefox() && l.b.firefoxVersion() < 49)
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
        m = {
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
        p = n('z4Oz'),
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
            s = t.offset,
            l = void 0 === s ? r.getText().length : s,
            c = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: i, focusOffset: l, isBackward: !1 }),
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
            var s = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: i,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              l = h.Modifier.applyInlineStyle(r, s, 'overflow')
            return h.EditorState.push(e, l, 'change-inline-style')
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
                s = i && i.data && i.data.id
              if (void 0 !== s)
                for (var l = n - 1; l >= 0; l--) {
                  var c = r.getEntityAt(l),
                    u = c && e.getEntity(c)
                  if (!u || !u.data || u.data.id !== s) {
                    a = l + 1
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
                p.a.getTwemojiEntities(e.getText()).forEach(function (r) {
                  if (2 === (r.indices && r.indices.length)) {
                    var o = n.createEntity(_, b, { url: r.url || null, id: a })
                    a += 1
                    var i = o.getLastCreatedEntityKey(),
                      s = e.getKey(),
                      l = t
                        .getSelection()
                        .merge({
                          anchorKey: s,
                          anchorOffset: r.indices[0],
                          focusKey: s,
                          focusOffset: r.indices[1],
                          isBackward: !1,
                        })
                    n = h.Modifier.applyEntity(o, l, i)
                  }
                })
              }),
              h.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: f,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [u, d, m],
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
              s = e.getCurrentContent().getSelectionAfter(),
              l = e.getCurrentContent(),
              c = l.getBlocksAsArray(),
              u = 'number' == typeof t && t > -1,
              d = u ? f(c, t) : Object.freeze({})
            if ((a && ((o = g(o, d)), (n = !0)), u && ((o = y(o, d)), (n = !0)), n)) {
              var m = (o = h.EditorState.forceSelection(o, r)).getCurrentContent()
              ;(m = (m = m.set('selectionBefore', i)).set('selectionAfter', s)),
                (o = h.EditorState.set(e, { allowUndo: !0, currentContent: m }))
            }
            return o
          },
        })
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      n('FtFR')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('wtru')
      function i(e) {
        var t = Object(o.b)()
        return [
          !!t && !t.flags[e],
          r.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    keCP: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
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
        x = n('PxJJ'),
        E = n('w9LO'),
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
            var t = m()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(l()(e), '_setSelectionToStart', function () {
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
                h()(l()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return I.EditorState.forceSelection(t, t.getSelection())
                }),
                h()(l()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(I.EditorState.moveFocusToEnd(a))
                    : null == r || r(I.EditorState.moveSelectionToEnd(a))
                }),
                h()(l()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = b({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                h()(l()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                h()(l()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                h()(l()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(l()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                h()(l()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                h()(l()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                h()(l()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                h()(l()(e), '_onPastedText', function (t, n, a) {
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
                h()(l()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    o = I.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && o(t) ? r : 27 === t.keyCode ? a : Object(I.getDefaultKeyBinding)(t)
                }),
                h()(l()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                h()(l()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                h()(l()(e), '_getContainerStyle', function () {
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
                      x.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
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
                        s = t.blockRendererFn,
                        l = t.editorState,
                        c = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        m = t.onFocus,
                        p = t.onKeyDown,
                        f = t.onKeyPress,
                        g = t.onKeyUp,
                        y = t.placeholder,
                        b = t.spellCheck,
                        C = t.stripPastedStyles,
                        T = t.style,
                        x = t.testID
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
                          blockRendererFn: s,
                          customAttrs:
                            ((e = {}),
                            h()(e, E.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', f),
                            h()(e, 'onKeyUp', g),
                            e),
                          customStyleMap: D(v.a.theme),
                          editorState: l,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: m,
                          onKeyDown: p,
                          placeholder: y,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== b,
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
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return u
        })
      n('jQ3i'), n('x4t0')
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.g34f2c63,
        i = r.a.f70a36d0,
        s = r.a.d17df547,
        l = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? i : o({ verb: '' })
        },
        u = function (e, t) {
          return function () {
            t.pathname.includes('/home') ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
          }
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
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('2G9S'), n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        v = n.n(y),
        _ = n('HPNB'),
        b = n('h5NW'),
        C = n('m3Bd'),
        w = n.n(C),
        T = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        x = n('pidX'),
        E = n('AspN'),
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
            return Object(x.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : H(e, t)
          },
          E.j,
          V,
          function (e, t, n, a, o) {
            return e.map(function (e, i) {
              return r()(
                r()({}, ((s = e).cardUrl, s.mediaIds, w()(s, M))),
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
              var s
            })
          },
        ),
        Q = Object(A.createStructuredSelector)({
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
            return Object(R.A)(e, R.e)
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
        Y = Object(D.g)(Q, X),
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
        se = function (e) {
          return Object(R.A)(e, R.p)
        },
        le = Object(ie.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: se }
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
      var me = de,
        pe = n('MWbm'),
        he = n('4zmP'),
        fe = n('rHpw'),
        ge = ne.a.ed33a3b6,
        ye = ne.a.d5bda8b3,
        ve = ne.a.i859a9d3,
        _e = fe.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        be = le(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = v.a.useContext(oe.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? v.a.createElement(
                pe.a,
                { style: _e.revueCallout },
                v.a.createElement(he.a, {
                  Icon: me,
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
        xe = n('zh9S'),
        Ee = n('7JQg'),
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
          m()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
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
                  s = a.isSending,
                  l = !t || s || !r
                return n
                  ? void 0
                  : v.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: ze,
                        disabled: l,
                        onPress: e._handleSendTweet,
                        size: 'small',
                        testID: Se,
                        type: 'brandFilled',
                      },
                      Object(ee.b)({
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
                    pe.a,
                    { style: Ke.unsentHeadingContainer },
                    v.a.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Fe),
                  )
              }),
              g()(u()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(xe.c)(r()(r()({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
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
            l()(n, [
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
                    s = e.inReplyToStatus,
                    l = e.location,
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
                      i.replace({ pathname: l.pathname, state: Object(Pe.a)(l.state || {}, 'selectedCommunityId') })),
                    null != s && s.exclusivity_info
                      ? u({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != s && s.community_id_str
                      ? u({
                          _type: 'community_members',
                          communityIdValue: s.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != s &&
                        s.trusted_friends_tweet &&
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
                    s = t.history,
                    l = t.isIntentRoute,
                    c = t.location,
                    u = t.quotedStatus,
                    d = t.richTextInputContext,
                    m = t.subtitle,
                    p = t.title,
                    h = t.typeaheadWrapper,
                    f = l && !n,
                    g = this.context.isModal
                  return v.a.createElement(
                    Ee.c,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    v.a.createElement(ke.a, null, function (t) {
                      var l = t.windowWidth,
                        y = _.a.shouldRenderAsModal(l),
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
                        f && v.a.createElement(ae.a, { history: s, location: c }),
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
                                history: s,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: m,
                                title: p,
                              },
                              v.a.createElement(b.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: i,
                                history: s,
                                isModal: g,
                                location: c,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: u,
                                richTextInputContext: d,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: l,
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
      t.default = Y(We)
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
        s = n('3A2y'),
        l = i.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          o = r()(a, 6),
          i = o[0],
          s = o[1],
          u = o[2],
          d = o[3],
          m = o[4],
          p = o[5],
          h = [
            i,
            s && '@'.concat(s.toString()),
            u,
            d,
            m &&
              m
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            p && l({ viaScreenName: p }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var u = function (e) {
        return Object(s.a)(e, c)
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
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        g = n.n(f),
        y = n('zfvc'),
        v = n('RhWx'),
        _ = n.n(v),
        b = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(l()(e), '_handleEachAnimateComplete', function () {
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
                              var s = Object(b.a)(t, function (e) {
                                return e.key === i.key
                              })
                              s >= 0
                                ? (r.push.apply(
                                    r,
                                    _()(
                                      t.slice(n, s).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[s], status: C.static }]),
                                  ),
                                  (n = s + 1))
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
        s = n('lhaq'),
        l = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = i(t),
              a = l(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : s(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
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
        s = n('7N4s'),
        l = n('cHvH'),
        c = n('rHpw'),
        u = function (e) {
          var t = e.history,
            n = e.location,
            a = e.parentTweetId,
            c = e.replyPressToggle,
            u = e.richTextInputContext,
            m = e.typeaheadWrapper,
            p = r.a.useContext(s.b).isModal
          return r.a.createElement(l.a, null, function (e) {
            var s = e.windowWidth
            return r.a.createElement(
              i.a,
              { style: d.root },
              r.a.createElement(o.a, {
                history: t,
                isInline: !0,
                isModal: p,
                location: n,
                parentTweetId: a,
                replyPressToggle: c,
                richTextInputContext: u,
                typeaheadWrapper: m,
                windowWidth: s,
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
        s = n.n(i),
        l = n('k6Ei'),
        c = n('rHpw'),
        u = n('+/1j'),
        d = n('MWbm'),
        m = s.a.c2fc878c,
        p = s.a.db11b27f,
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
          s = e.warningCount,
          g = n - t,
          y = g >= 0 ? p({ count: i(g) }) : m({ count: i(t - n) }),
          v =
            t >= s
              ? r.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  y,
                )
              : null,
          _ = Object(o.a)(g, n),
          b = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = r.a.createElement(l.a, {
            color: b,
            progress: _,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= s ? r.a.createElement(u.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, i(g)) : null
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
        s = n('ddV6'),
        l = n.n(s),
        c = n('ERkP'),
        u = n.n(c),
        d = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        m = n('3XMw'),
        p = n.n(m),
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
        x = function () {
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
      x.metadata = { width: 24, height: 24 }
      var E = x,
        S = n('boUI'),
        I = n('EweD'),
        R = p.a.g6185a9e,
        k = p.a.g2d04222,
        A = p.a.baffe39a,
        D = p.a.af293dc2,
        O = p.a.h1053f7e,
        P = p.a.bf994ab2,
        M = p.a.cf7f7e39,
        F = p.a.cfd2f35d,
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
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!o,
            c =
              l &&
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
            m = O
          return (
            c ? (m = P) : l && (m = M),
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
                  onClick: s(d.a.all),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: E,
                  actionText: D,
                  isSelected: d.a.community === i,
                  onClick: s(d.a.community),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: m,
                  isSelected: d.a.by_invitation === i,
                  onClick: s(d.a.by_invitation),
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
          s = u.a.useState(!1),
          c = l()(s, 2),
          d = c[0],
          m = c[1],
          p = u.a.useCallback(function () {
            return m(!0)
          }, []),
          h = u.a.useCallback(function () {
            return m(!1)
          }, []),
          f = a ? (d ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: p, closePopover: h }) : t
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
